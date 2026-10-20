"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const stageCount = 8;
const violet = new THREE.Color("#914cff");
const skyBlue = new THREE.Color("#58baff");

function createSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return null;

  context.fillStyle = "#808080";
  context.fillRect(0, 0, 256, 256);
  let seed = 17;
  for (let index = 0; index < 5200; index += 1) {
    seed = (seed * 16807) % 2147483647;
    const shade = 90 + (seed % 74);
    context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, 0.16)`;
    context.fillRect((seed % 256), ((seed >> 8) % 256), 1, 1);
  }
  context.strokeStyle = "rgba(230, 235, 255, 0.12)";
  context.lineWidth = 1;
  for (let y = 4; y < 256; y += 8) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(256, y);
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

function createDisplayTexture(accent = "#a86aff") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const background = context.createLinearGradient(0, 0, 512, 512);
  background.addColorStop(0, "#172033");
  background.addColorStop(1, "#0a1220");
  context.fillStyle = background;
  context.fillRect(0, 0, 512, 512);
  context.fillStyle = "#202d42";
  context.fillRect(0, 0, 512, 44);
  context.fillStyle = accent;
  context.fillRect(24, 20, 58, 5);
  context.fillStyle = "#8794aa";
  context.fillRect(415, 19, 14, 7);
  context.fillRect(440, 19, 14, 7);
  context.fillRect(465, 19, 22, 7);
  context.fillStyle = "rgba(124, 147, 178, 0.14)";
  for (let x = 24; x < 500; x += 42) {
    context.fillRect(x, 72, 1, 400);
  }
  for (let y = 74; y < 490; y += 42) {
    context.fillRect(24, y, 464, 1);
  }
  context.fillStyle = "rgba(166, 105, 255, 0.12)";
  context.fillRect(26, 88, 214, 118);
  context.strokeStyle = accent;
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(40, 184);
  context.bezierCurveTo(83, 145, 108, 174, 143, 128);
  context.bezierCurveTo(178, 93, 206, 152, 230, 112);
  context.stroke();
  context.fillStyle = "rgba(115, 190, 255, 0.16)";
  context.fillRect(260, 88, 226, 118);
  for (let index = 0; index < 5; index += 1) {
    context.fillStyle = index === 2 ? accent : "rgba(179, 195, 220, 0.44)";
    context.fillRect(28, 236 + index * 44, index % 2 ? 152 : 208, 8);
    context.fillStyle = "rgba(105, 188, 255, 0.55)";
    context.fillRect(274, 236 + index * 44, 184 - index * 12, 8);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createCoreTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const base = context.createLinearGradient(0, 0, 512, 256);
  base.addColorStop(0, "#31145b");
  base.addColorStop(0.5, "#172448");
  base.addColorStop(1, "#35134c");
  context.fillStyle = base;
  context.fillRect(0, 0, 512, 256);
  context.strokeStyle = "rgba(142, 116, 255, 0.48)";
  context.lineWidth = 1.4;
  for (let index = 0; index < 14; index += 1) {
    const y = 18 + index * 17;
    const offset = (index % 3) * 12;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(94 + offset, y);
    context.lineTo(122 + offset, y + 16);
    context.lineTo(224 + offset, y + 16);
    context.stroke();
    context.beginPath();
    context.moveTo(512, 248 - y);
    context.lineTo(418 - offset, 248 - y);
    context.lineTo(390 - offset, 232 - y);
    context.lineTo(288 - offset, 232 - y);
    context.stroke();
  }
  for (let index = 0; index < 50; index += 1) {
    const x = (index * 97) % 512;
    const y = (index * 53) % 256;
    context.fillStyle = index % 3 === 0 ? "#7bd6ff" : "#c392ff";
    context.globalAlpha = 0.4 + (index % 4) * 0.12;
    context.beginPath();
    context.arc(x, y, index % 5 === 0 ? 2.2 : 1.2, 0, Math.PI * 2);
    context.fill();
  }
  context.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function ParticleField({ reducedMotion }) {
  const geometry = useMemo(() => {
    const points = [];
    for (let index = 0; index < 180; index += 1) {
      const x = ((index * 37) % 101) / 101;
      const y = ((index * 61) % 103) / 103;
      const z = ((index * 29) % 107) / 107;
      points.push(
        (x - 0.5) * 12,
        (y - 0.5) * 8,
        (z - 0.5) * 4,
      );
    }
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3),
    );
    return buffer;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#b899ff"
        size={0.018}
        transparent
        opacity={reducedMotion ? 0.22 : 0.34}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WireNode({ position, color = "#a64dff", scale = 0.07 }) {
  return (
    <mesh position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.3}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function WireLink({ start, end, color = "#8f71ff", opacity = 0.5 }) {
  const points = useMemo(
    () => [new THREE.Vector3(...start), new THREE.Vector3(...end)],
    [start, end],
  );
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </line>
  );
}

function Core({ progress, reducedMotion }) {
  const coreRef = useRef(null);
  const ringsRef = useRef([]);
  const coreMaterialRef = useRef(null);
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const coreTexture = useMemo(() => createCoreTexture(), []);

  useFrame(({ clock }) => {
    const stage = THREE.MathUtils.clamp(progress.current.value, 0, stageCount - 1);
    const handoff = THREE.MathUtils.clamp(stage, 0, 1);
    if (coreRef.current) {
      coreRef.current.rotation.y = reducedMotion ? 0 : clock.elapsedTime * 0.16;
      coreRef.current.rotation.x = reducedMotion
        ? 0
        : Math.sin(clock.elapsedTime * 0.12) * 0.12;
      const coreScale = THREE.MathUtils.lerp(1.12, 0.48, handoff);
      coreRef.current.scale.setScalar(coreScale);
    }
    ringsRef.current.forEach((ring, index) => {
      if (ring) {
        ring.rotation.x = reducedMotion
          ? 0.55 + index * 0.2
          : 0.55 + Math.sin(clock.elapsedTime * 0.18 + index) * 0.1;
        ring.rotation.y = reducedMotion
          ? index * 0.26
          : clock.elapsedTime * (index % 2 ? -0.08 : 0.08);
        const ringScale =
          (1 - handoff * 0.58) * (1 + Math.sin(stage * 0.55 + index) * 0.1);
        ring.scale.setScalar(ringScale);
      }
    });
  }, -1);

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.42, 64, 48]} />
        <meshPhysicalMaterial
          ref={coreMaterialRef}
          color="#ffffff"
          map={coreTexture}
          emissive="#7044b2"
          emissiveMap={coreTexture}
          emissiveIntensity={0.32}
          roughness={0.3}
          metalness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.16}
          bumpMap={surfaceTexture}
          bumpScale={0.009}
        />
      </mesh>
      {[0, 1].map((index) => (
        <mesh
          key={index}
          ref={(element) => {
            ringsRef.current[index] = element;
          }}
          rotation={[
            Math.PI * (0.36 + index * 0.24),
            Math.PI * index * 0.28,
            Math.PI * index * 0.22,
          ]}
        >
          <torusGeometry args={[0.68 + index * 0.16, 0.008, 8, 128]} />
          <meshBasicMaterial
            color={index === 1 ? "#4db8ff" : "#a443ff"}
            transparent
            opacity={0.62 - index * 0.1}
          />
        </mesh>
      ))}
      <pointLight color="#9d48ff" intensity={2.4} distance={3.8} />
      <pointLight
        position={[1.5, -0.8, 1]}
        color="#39aaff"
        intensity={1.4}
        distance={3}
      />
    </group>
  );
}

function RequirementsLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const displayTexture = useMemo(() => createDisplayTexture("#bc83ff"), []);
  const nodes = [
    [-0.85, 0.25, 0],
    [-0.35, 0.72, 0.05],
    [0.35, 0.72, -0.05],
    [0.86, 0.24, 0],
    [0.68, -0.47, 0.06],
    [0, -0.82, 0],
    [-0.68, -0.47, -0.06],
  ];
  return (
    <group>
      {nodes.map((position, index) => (
        <group key={index} position={position}>
          <RoundedBox
            args={[0.3, 0.21, 0.08]}
            radius={0.035}
            smoothness={3}
            rotation={[0, 0, (index % 2 ? 1 : -1) * 0.08]}
          >
            <meshPhysicalMaterial
              color={index % 2 ? "#294054" : "#392949"}
              metalness={0.72}
              roughness={0.28}
              clearcoat={0.8}
              bumpMap={surfaceTexture}
              bumpScale={0.018}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.043]}>
            <planeGeometry args={[0.23, 0.14]} />
            <meshStandardMaterial
              map={displayTexture}
              emissive={index % 2 ? "#17466b" : "#54277c"}
              emissiveIntensity={0.18}
              roughness={0.42}
            />
          </mesh>
        </group>
      ))}
      {nodes.map((position, index) => (
        <WireLink
          key={index}
          start={[0, 0, 0]}
          end={position}
          color={index % 2 ? "#53b7ff" : "#a44aff"}
        />
      ))}
    </group>
  );
}

function ArchitectureLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const violetDisplay = useMemo(() => createDisplayTexture("#b471ff"), []);
  const blueDisplay = useMemo(() => createDisplayTexture("#65c7ff"), []);

  return (
    <group>
      {[-0.62, 0, 0.62].map((x, index) => (
        <group key={x} position={[x, 0, index * -0.12]}>
          <RoundedBox args={[0.72, 1.08, 0.12]} radius={0.045} smoothness={4}>
            <meshPhysicalMaterial
              color={index === 1 ? "#263d58" : "#332344"}
              metalness={0.72}
              roughness={0.29}
              clearcoat={0.8}
              clearcoatRoughness={0.2}
              bumpMap={surfaceTexture}
              bumpScale={0.022}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.065]}>
            <planeGeometry args={[0.62, 0.94]} />
            <meshStandardMaterial
              map={index === 1 ? blueDisplay : violetDisplay}
              emissive={index === 1 ? "#27628d" : "#552781"}
              emissiveIntensity={0.2}
              roughness={0.5}
              metalness={0.1}
            />
          </mesh>
          <mesh position={[0, -0.53, 0.01]}>
            <boxGeometry args={[0.24, 0.025, 0.025]} />
            <meshStandardMaterial
              color="#73839b"
              metalness={0.82}
              roughness={0.26}
            />
          </mesh>
        </group>
      ))}
      <WireLink start={[-0.27, 0, -0.04]} end={[0.27, 0, -0.16]} />
      <WireLink start={[-0.27, -0.28, -0.04]} end={[0.27, -0.28, -0.16]} />
    </group>
  );
}

function ModulesLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const violetDisplay = useMemo(() => createDisplayTexture("#b471ff"), []);
  const blueDisplay = useMemo(() => createDisplayTexture("#65c7ff"), []);

  return (
    <group>
      {[
        [-0.52, 0.42, 0.1],
        [0.46, 0.42, -0.12],
        [-0.52, -0.43, -0.1],
        [0.46, -0.43, 0.12],
      ].map((position, index) => (
        <group key={index} position={position}>
          <RoundedBox args={[0.64, 0.54, 0.42]} radius={0.055} smoothness={4}>
            <meshPhysicalMaterial
              color={index % 2 ? "#362649" : "#253c53"}
              metalness={0.76}
              roughness={0.25}
              clearcoat={1}
              clearcoatRoughness={0.16}
              bumpMap={surfaceTexture}
              bumpScale={0.025}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.214]}>
            <planeGeometry args={[0.52, 0.42]} />
            <meshStandardMaterial
              map={index % 2 ? violetDisplay : blueDisplay}
              emissive={index % 2 ? "#502477" : "#1d4d70"}
              emissiveIntensity={0.25}
              roughness={0.42}
            />
          </mesh>
          <mesh position={[0.22, -0.19, 0.224]}>
            <circleGeometry args={[0.018, 16]} />
            <meshBasicMaterial color={index % 2 ? "#ce95ff" : "#7ad8ff"} />
          </mesh>
        </group>
      ))}
      <WireLink start={[-0.23, 0.2, 0]} end={[0.17, 0.2, 0]} color="#58bdff" />
      <WireLink start={[-0.23, -0.2, 0]} end={[0.17, -0.2, 0]} color="#58bdff" />
      <WireLink start={[0, -0.18, 0]} end={[0, 0.18, 0]} color="#a64dff" />
    </group>
  );
}

function QualityLayer({ reducedMotion }) {
  const scanRef = useRef(null);
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const displayTexture = useMemo(() => createDisplayTexture("#62d6b0"), []);

  useFrame(({ clock }) => {
    if (scanRef.current) {
      scanRef.current.position.y = reducedMotion
        ? 0
        : Math.sin(clock.elapsedTime * 0.55) * 0.66;
    }
  });

  return (
    <group>
      <RoundedBox args={[2.12, 1.52, 0.22]} radius={0.09} smoothness={5}>
        <meshPhysicalMaterial
          color="#263449"
          metalness={0.8}
          roughness={0.24}
          clearcoat={1}
          clearcoatRoughness={0.16}
          bumpMap={surfaceTexture}
          bumpScale={0.025}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.116]}>
        <planeGeometry args={[1.96, 1.36]} />
        <meshStandardMaterial
          map={displayTexture}
          emissive="#17554c"
          emissiveIntensity={0.22}
          roughness={0.4}
        />
      </mesh>
      <mesh ref={scanRef} position={[0, 0, 0.13]}>
        <planeGeometry args={[1.96, 0.018]} />
        <meshBasicMaterial
          color="#76f2c8"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {[-0.82, 0.82].map((x) => (
        <mesh key={x} position={[x, -0.52, 0.13]}>
          <circleGeometry args={[0.035, 24]} />
          <meshBasicMaterial color="#72f2c5" />
        </mesh>
      ))}
      <mesh position={[0, -0.79, 0]}>
        <boxGeometry args={[0.58, 0.055, 0.22]} />
        <meshStandardMaterial color="#53647a" metalness={0.84} roughness={0.24} />
      </mesh>
    </group>
  );
}

function CloudLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  return (
    <group>
      {[
        [-0.36, 0.43, 0.18, 0.31],
        [0, 0.55, 0.2, 0.34],
        [0.36, 0.42, 0.18, 0.29],
      ].map(([x, y, z, radius], index) => (
        <mesh key={index} position={[x, y, z]} scale={[1, 0.78, 0.72]}>
          <sphereGeometry args={[radius, 40, 28]} />
          <meshStandardMaterial
            color="#3b5a7a"
            emissive="#1a3552"
            emissiveIntensity={0.16}
            metalness={0.08}
            roughness={0.68}
            bumpMap={surfaceTexture}
            bumpScale={0.008}
          />
        </mesh>
      ))}
      {[-0.48, 0, 0.48].map((x, index) => (
        <group key={x} position={[x, -0.48, 0.12]}>
          <RoundedBox args={[0.37, 0.67, 0.34]} radius={0.045} smoothness={4}>
            <meshPhysicalMaterial
              color={index === 1 ? "#263d53" : "#30243f"}
              metalness={0.82}
              roughness={0.27}
              clearcoat={0.8}
              bumpMap={surfaceTexture}
              bumpScale={0.025}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.174]}>
            <planeGeometry args={[0.29, 0.56]} />
            <meshStandardMaterial
              color={index === 1 ? "#172a3c" : "#21182c"}
              metalness={0.5}
              roughness={0.38}
            />
          </mesh>
          {[-0.19, -0.07, 0.05, 0.17].map((y, slotIndex) => (
            <group key={y} position={[0, y, 0.186]}>
              <mesh>
                <boxGeometry args={[0.2, 0.008, 0.006]} />
                <meshBasicMaterial color="#78879a" />
              </mesh>
              <mesh position={[0.115, 0, 0.002]}>
                <circleGeometry args={[0.012, 16]} />
                <meshBasicMaterial
                  color={slotIndex === index ? "#80d7ff" : "#8f61c5"}
                />
              </mesh>
            </group>
          ))}
        </group>
      ))}
      <WireLink start={[-0.55, 0.12, 0.1]} end={[-0.48, -0.12, 0.12]} color="#5dbfff" />
      <WireLink start={[0, 0.12, 0.1]} end={[0, -0.12, 0.12]} color="#a86aff" />
      <WireLink start={[0.55, 0.12, 0.1]} end={[0.48, -0.12, 0.12]} color="#5dbfff" />
    </group>
  );
}

function EcosystemLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const displayTexture = useMemo(() => createDisplayTexture("#78c9ff"), []);
  const ecosystemNodes = [
    [-0.9, 0.15, 0],
    [-0.5, 0.65, -0.1],
    [0.05, 0.85, 0.08],
    [0.72, 0.5, -0.1],
    [0.95, -0.15, 0],
    [0.45, -0.67, 0.1],
    [-0.2, -0.78, -0.1],
    [-0.75, -0.45, 0.08],
    [0.05, 0.05, 0.2],
  ];
  return (
    <group>
      {ecosystemNodes.map((position, index) => (
        <group key={index} position={position}>
          <RoundedBox
            args={index === ecosystemNodes.length - 1 ? [0.48, 0.38, 0.28] : [0.34, 0.28, 0.22]}
            radius={0.045}
            smoothness={4}
          >
            <meshPhysicalMaterial
              color={index % 3 === 0 ? "#29415a" : "#362a49"}
              metalness={0.74}
              roughness={0.25}
              clearcoat={0.9}
              clearcoatRoughness={0.18}
              bumpMap={surfaceTexture}
              bumpScale={0.02}
            />
          </RoundedBox>
          <mesh position={[0, 0, index === ecosystemNodes.length - 1 ? 0.145 : 0.115]}>
            <planeGeometry args={index === ecosystemNodes.length - 1 ? [0.36, 0.26] : [0.24, 0.17]} />
            <meshStandardMaterial
              map={displayTexture}
              emissive={index % 3 === 0 ? "#174666" : "#4e2670"}
              emissiveIntensity={0.22}
              roughness={0.4}
            />
          </mesh>
        </group>
      ))}
      {ecosystemNodes.map((position, index) => (
        <WireLink
          key={index}
          start={position}
          end={ecosystemNodes[(index + 1) % ecosystemNodes.length]}
          color={index % 2 ? "#51baff" : "#a74bff"}
          opacity={0.58}
        />
      ))}
      {ecosystemNodes.slice(0, -1).map((position, index) => (
        <WireLink
          key={`hub-${index}`}
          start={position}
          end={ecosystemNodes[ecosystemNodes.length - 1]}
          color="#b36aff"
          opacity={0.28}
        />
      ))}
      <mesh position={[0.05, 0.05, -0.18]}>
        <torusGeometry args={[0.34, 0.018, 10, 64]} />
        <meshStandardMaterial
          color="#65c5ff"
          emissive="#21628d"
          emissiveIntensity={0.7}
          metalness={0.85}
          roughness={0.2}
          bumpMap={surfaceTexture}
          bumpScale={0.012}
        />
      </mesh>
    </group>
  );
}

function PortalLayer() {
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);

  return (
    <group rotation={[0.12, 0.15, -0.12]}>
      {[0, 1, 2].map((index) => (
        <mesh key={index} scale={1 - index * 0.18}>
          <torusGeometry args={[0.85, index === 1 ? 0.032 : 0.02, 16, 128]} />
          <meshPhysicalMaterial
            color={index === 1 ? "#63bfff" : "#b56cff"}
            emissive={index === 1 ? "#236b9b" : "#6726a1"}
            emissiveIntensity={0.55}
            metalness={0.82}
            roughness={0.2}
            clearcoat={1}
            bumpMap={surfaceTexture}
            bumpScale={0.018}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, -0.12]}>
        <circleGeometry args={[0.62, 64]} />
        <meshPhysicalMaterial
          color="#25113e"
          metalness={0.52}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.12}
          bumpMap={surfaceTexture}
          bumpScale={0.02}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[0.48, 64]} />
        <meshBasicMaterial color="#8e4dd6" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function StoryCamera({ progress, reducedMotion }) {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useFrame((_, delta) => {
    const activeCamera = cameraRef.current;
    const stage = THREE.MathUtils.clamp(progress.current.value, 0, stageCount - 1);
    const phase = stage / (stageCount - 1);
    const transition = Math.sin(phase * Math.PI);
    const targetX = Math.sin(stage * Math.PI * 0.5) * 0.12;
    const targetY = Math.sin(stage * Math.PI) * 0.08;
    const targetZ = 6 - transition * 0.28;
    const easing = reducedMotion ? 1 : 1 - Math.exp(-delta * 2.8);
    activeCamera.position.x +=
      (targetX - activeCamera.position.x) * easing;
    activeCamera.position.y +=
      (targetY - activeCamera.position.y) * easing;
    activeCamera.position.z +=
      (targetZ - activeCamera.position.z) * easing;
    if (activeCamera instanceof THREE.PerspectiveCamera) {
      const targetFov = 38 - transition * 1.2;
      activeCamera.fov += (targetFov - activeCamera.fov) * easing;
      activeCamera.updateProjectionMatrix();
    }
    activeCamera.lookAt(0, 0, 0);
  });

  return null;
}

function StoryLighting({ progress }) {
  const keyLight = useRef(null);
  const fillLight = useRef(null);

  useFrame(() => {
    const stage = THREE.MathUtils.clamp(progress.current.value, 0, stageCount - 1);
    const blend = (Math.sin(stage * 0.7) + 1) * 0.5;
    if (keyLight.current) {
      keyLight.current.color.copy(violet).lerp(skyBlue, blend);
      keyLight.current.intensity = 1.05 + blend * 0.45;
    }
    if (fillLight.current) {
      fillLight.current.intensity = 0.45 + (1 - blend) * 0.35;
    }
  });

  return (
    <>
      <directionalLight
        ref={keyLight}
        position={[3, 4, 5]}
        intensity={1.2}
        color="#d6c6ff"
      />
      <pointLight
        ref={fillLight}
        position={[-2, -1, 2]}
        color="#39aaff"
        intensity={0.65}
        distance={5}
      />
    </>
  );
}

function JourneyObject({ progress, reducedMotion }) {
  const journeyRef = useRef(null);
  const ideaRef = useRef(null);
  const layerRefs = useRef([]);
  const target = useRef(0);
  const { size } = useThree();
  const compact = size.width <= 640;
  const layerDefinitions = useMemo(
    () => [
      RequirementsLayer,
      ArchitectureLayer,
      ModulesLayer,
      QualityLayer,
      CloudLayer,
      EcosystemLayer,
      PortalLayer,
    ],
    [],
  );

  useFrame((state, delta) => {
    const scrollValue = THREE.MathUtils.clamp(
      progress.current.value,
      0,
      stageCount - 1,
    );
    target.current = scrollValue;
    const sceneStep = target.current;
    const activeStage = Math.min(stageCount - 1, Math.floor(sceneStep + 0.5));
    const ideaProgress = THREE.MathUtils.smoothstep(sceneStep, 0.08, 0.82);
    if (ideaRef.current) {
      const ideaScale = Math.max(0.001, 1 - ideaProgress);
      ideaRef.current.scale.setScalar(ideaScale);
      ideaRef.current.visible = ideaScale > 0.01;
    }

    if (journeyRef.current) {
      const desiredX = compact ? 0 : size.width <= 900 ? 0.95 : 1.45;
      journeyRef.current.position.x +=
        (desiredX - journeyRef.current.position.x) *
        (reducedMotion ? 1 : 1 - Math.exp(-delta * 4));
      journeyRef.current.rotation.y =
        reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.18) * 0.13;
      journeyRef.current.rotation.z =
        reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.12) * 0.04;
      const scale = compact ? 0.68 : size.width <= 900 ? 0.98 : 1.5;
      journeyRef.current.scale.setScalar(scale);
    }

    layerRefs.current.forEach((layer, index) => {
      if (!layer) return;
      const stage = index + 1;
      layer.visible = activeStage === stage;
    });
  });

  return (
    <group ref={journeyRef}>
      <group ref={ideaRef}>
        <Core progress={progress} reducedMotion={reducedMotion} />
      </group>
      {layerDefinitions.map((Layer, index) => (
        <group
          key={index}
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          visible={false}
        >
          <Layer reducedMotion={reducedMotion} />
        </group>
      ))}
    </group>
  );
}

export default function SoftwareJourneyScene({
  progress,
  reducedMotion,
}) {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      performance={{ min: 0.65 }}
    >
      <ambientLight intensity={0.38} />
      <hemisphereLight color="#d4e5ff" groundColor="#140f21" intensity={0.72} />
      <Environment resolution={128} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.4}
          color="#d8cbff"
          position={[-3, 2, 3]}
          scale={[4, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.8}
          color="#62bfff"
          position={[3, -1, 2]}
          scale={[2, 4, 1]}
        />
      </Environment>
      <StoryCamera progress={progress} reducedMotion={reducedMotion} />
      <StoryLighting progress={progress} />
      <ParticleField reducedMotion={reducedMotion} />
      <JourneyObject
        progress={progress}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}
