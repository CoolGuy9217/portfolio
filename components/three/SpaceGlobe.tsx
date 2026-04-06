"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

// ─── Nucleus (the morphing blob) ───────────────────────────────────
function Nucleus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const noise = useMemo(() => createNoise2D(), []);
  const blobScale = 2;

  const originalPositions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(20, 20);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/NpJzwns/star.jpg"
  );

  useFrame(() => {
    if (!meshRef.current) return;
    const positions = meshRef.current.geometry.attributes.position;
    const time = Date.now();

    for (let i = 0; i < positions.count; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / len;
      const ny = oy / len;
      const nz = oz / len;

      const dist =
        20 +
        noise(nx + time * 0.0004, ny + time * 0.0004) * blobScale;

      positions.array[i * 3] = nx * dist;
      positions.array[i * 3 + 1] = ny * dist;
      positions.array[i * 3 + 2] = nz * dist;
    }

    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[20, 20]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
}

// ─── Sky sphere (background) ───────────────────────────────────────
function SkySphere() {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/HC0vxMw/sky2.jpg"
  );

  return (
    <mesh>
      <sphereGeometry args={[90, 50, 50]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// ─── Helper: random point on a sphere ──────────────────────────────
function randomPointSphere(radius: number): THREE.Vector3 {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi)
  );
}

// ─── Distant white stars ───────────────────────────────────────────
function DistantStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;
  const targetRadius = 95;

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/TRsJ1tm/p1.png"
  );

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const p = randomPointSphere(130);
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;

    // Slowly contract stars towards target radius
    for (let i = 0; i < pos.count; i++) {
      const x = pos.array[i * 3];
      const y = pos.array[i * 3 + 1];
      const z = pos.array[i * 3 + 2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const nx = x / d, ny = y / d, nz = z / d;
      const tx = nx * targetRadius, ty = ny * targetRadius, tz = nz * targetRadius;
      const speed = 0.003;
      pos.array[i * 3] += (tx - x) * speed;
      pos.array[i * 3 + 1] += (ty - y) * speed;
      pos.array[i * 3 + 2] += (tz - z) * speed;
    }
    pos.needsUpdate = true;
    pointsRef.current.rotation.y -= 0.0007;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={1}
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Inner orbiting particles ──────────────────────────────────────
function InnerStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 600;

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/YQcTCRG/p2.png"
  );

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randInt(25, 33);
      const p = randomPointSphere(r);
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x -= 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Comet particle ────────────────────────────────────────────────
function Comet() {
  const pointsRef = useRef<THREE.Points>(null);

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/v1S8YW7/p7.png"
  );

  const positions = useMemo(() => {
    const p = randomPointSphere(25);
    return new Float32Array([p.x, p.y, p.z]);
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.z -= 0.01;
    pointsRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={12}
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Planet ────────────────────────────────────────────────────────
function Planet({
  url,
  size,
  rotAxis,
  rotSpeed,
}: {
  url: string;
  size: number;
  rotAxis: "x" | "y" | "z";
  rotSpeed: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const texture = useLoader(THREE.TextureLoader, url);

  const positions = useMemo(() => {
    const r = THREE.MathUtils.randInt(40, 60);
    const p = randomPointSphere(r);
    return new Float32Array([p.x, p.y, p.z]);
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation[rotAxis] += rotSpeed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

// ─── Moving stars (fly toward center & respawn) ────────────────────
function MovingStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 5;

  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.ibb.co/YQcTCRG/p2.png"
  );

  const { positions, velocities, startPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const start = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(200, 300);
      const p = randomPointSphere(r);
      const idx = i * 3;
      pos[idx] = start[idx] = p.x;
      pos[idx + 1] = start[idx + 1] = p.y;
      pos[idx + 2] = start[idx + 2] = p.z;
      vel[i] = THREE.MathUtils.randInt(50, 400);
    }
    return { positions: pos, velocities: vel, startPositions: start };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    const vel = velocities;
    const sp = startPositions;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const moveAmt = (0 - pos.array[idx]) / vel[i];
      pos.array[idx] += moveAmt;
      pos.array[idx + 1] += (0 - pos.array[idx + 1]) / vel[i];
      pos.array[idx + 2] += (0 - pos.array[idx + 2]) / vel[i];
      vel[i] -= 0.1;

      // Reset if at center
      if (
        Math.abs(pos.array[idx]) <= 2 &&
        Math.abs(pos.array[idx + 2]) <= 2
      ) {
        pos.array[idx] = sp[idx];
        pos.array[idx + 1] = sp[idx + 1];
        pos.array[idx + 2] = sp[idx + 2];
        vel[i] = 120;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={14}
        map={texture}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Scene content ─────────────────────────────────────────────────
function SceneContent() {
  return (
    <>
      <directionalLight position={[0, 50, -20]} intensity={3} />
      <ambientLight intensity={1} />

      <Nucleus />
      <SkySphere />
      <DistantStars />
      <InnerStars />
      <Comet />
      <MovingStars />

      <Planet
        url="https://i.ibb.co/s1cZDnM/planet1.webp"
        size={9}
        rotAxis="y"
        rotSpeed={0.001}
      />
      <Planet
        url="https://i.ibb.co/Lt5Kn7y/planet2.webp"
        size={12}
        rotAxis="z"
        rotSpeed={0.003}
      />
      <Planet
        url="https://i.ibb.co/T8V57p4/planet3.webp"
        size={12}
        rotAxis="x"
        rotSpeed={0.0005}
      />

      {/* Auto-rotate only — user interaction disabled (content layer is on top) */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        maxDistance={350}
        minDistance={150}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
    </>
  );
}

// ─── Loading fallback (shown inside Canvas while textures load) ────
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[15, 3]} />
      <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

// ─── Exported component ────────────────────────────────────────────
export default function SpaceGlobe() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 150], fov: 55, near: 0.01, far: 1000 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "#000000" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
