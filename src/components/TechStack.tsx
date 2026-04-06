import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

// ✅ YOUR TECH STACK IMAGES
const imageUrls = [
  "/images/html.png",
  "/images/css.png",
  "/images/javascript.png",
  "/images/cpp.png",
  "/images/python.png",
  "/images/node.png",
  "/images/firebase.png",
  "/images/sql.png",
];

// ✅ FIX: useMemo for stable loading
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

// ✅ reduced spheres for performance
const spheres = [...Array(20)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;

    delta = Math.min(0.1, delta);

    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-100 * delta * scale);

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20) - 25,
        THREE.MathUtils.randFloatSpread(20) - 10,
      ]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
      />
    </RigidBody>
  );
}

function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;

    ref.current.setNextKinematicTranslation(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      )
    );
  });

  return (
    <RigidBody type="kinematicPosition" ref={ref} colliders={false}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      setIsActive(top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2>My Tech Stack</h2>

      <Canvas camera={{ position: [0, 0, 20], fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, -4]} intensity={2} />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={
                materials[Math.floor(Math.random() * materials.length)]
              }
              isActive={isActive}
            />
          ))}
        </Physics>

        {/* ✅ safer environment */}
        <Environment preset="city" />

        <EffectComposer>
          <N8AO />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;