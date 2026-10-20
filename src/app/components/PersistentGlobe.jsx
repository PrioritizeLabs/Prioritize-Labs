"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { feature, mesh } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import * as THREE from "three";

const BLUE = "#48a8ff";
const PURPLE = "#9712fb";
const PALE = "#e8f4ff";
const PURPLE_COLOR = new THREE.Color(PURPLE);

function pointOnSphere(latitude, longitude, radius) {
  const lat = THREE.MathUtils.degToRad(latitude);
  const lon = THREE.MathUtils.degToRad(longitude);
  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.sin(lon),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.cos(lon),
  );
}

function createSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = "#808080";
  context.fillRect(0, 0, 256, 256);
  let seed = 19;
  for (let index = 0; index < 6000; index += 1) {
    seed = (seed * 16807) % 2147483647;
    const shade = 70 + (seed % 105);
    context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, 0.17)`;
    context.fillRect(seed % 256, (seed >>> 8) % 256, 1, 1);
  }
  context.strokeStyle = "rgba(240, 245, 255, 0.12)";
  context.lineWidth = 1;
  for (let y = 3; y < 256; y += 8) {
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

function createInterfaceTexture(accent = "#9712fb", variant = 0) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const background = context.createLinearGradient(0, 0, 512, 512);
  background.addColorStop(0, variant % 2 ? "#111e30" : "#1b1530");
  background.addColorStop(1, "#080d19");
  context.fillStyle = background;
  context.fillRect(0, 0, 512, 512);
  context.fillStyle = "#22283a";
  context.fillRect(0, 0, 512, 48);
  context.fillStyle = accent;
  context.fillRect(24, 21, 68, 6);
  context.fillStyle = "rgba(223, 232, 250, 0.58)";
  for (let index = 0; index < 3; index += 1) {
    context.fillRect(406 + index * 25, 21, 12, 7);
  }

  context.fillStyle = "rgba(255,255,255,0.045)";
  context.fillRect(24, 70, 212, 128);
  context.fillRect(256, 70, 232, 128);
  context.strokeStyle = accent;
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(34, 171);
  context.bezierCurveTo(82, 142, 105, 176, 146, 124);
  context.bezierCurveTo(177, 91, 207, 157, 231, 111);
  context.stroke();
  context.fillStyle = "rgba(104, 185, 255, 0.66)";
  for (let index = 0; index < 5; index += 1) {
    const barHeight = 26 + ((index * 31 + variant * 17) % 72);
    context.fillRect(278 + index * 38, 190 - barHeight, 22, barHeight);
  }
  for (let index = 0; index < 5; index += 1) {
    context.fillStyle = index === variant % 5 ? accent : "rgba(184, 199, 222, 0.44)";
    context.fillRect(26, 232 + index * 45, index % 2 ? 180 : 226, 8);
    context.fillStyle = "rgba(120, 170, 220, 0.3)";
    context.fillRect(264, 232 + index * 45, 216 - index * 12, 8);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createGlobeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const ocean = context.createLinearGradient(0, 0, 0, 512);
  ocean.addColorStop(0, "#0c2340");
  ocean.addColorStop(0.5, "#102c4b");
  ocean.addColorStop(1, "#09182e");
  context.fillStyle = ocean;
  context.fillRect(0, 0, 1024, 512);

  const land = feature(world, world.objects.land);
  const geometries = land.type === "FeatureCollection"
    ? land.features.map((entry) => entry.geometry)
    : [land.geometry];
  const polygons = geometries.flatMap((geometry) => {
    if (geometry?.type === "Polygon") return [geometry.coordinates];
    if (geometry?.type === "MultiPolygon") return geometry.coordinates;
    return [];
  });
  polygons.forEach((polygon, polygonIndex) => {
    polygon.forEach((ring) => {
      context.beginPath();
      let previousX = null;
      ring.forEach(([longitude, latitude], pointIndex) => {
        const x = (((360 - longitude) % 360 + 360) % 360) / 360 * canvas.width;
        const y = ((90 - latitude) / 180) * canvas.height;
        if (pointIndex > 0 && Math.abs(x - previousX) > canvas.width * 0.5) {
          context.stroke();
          context.beginPath();
        }
        if (pointIndex === 0 || Math.abs(x - previousX) > canvas.width * 0.5) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
        previousX = x;
      });
      context.closePath();
      const terrain = context.createLinearGradient(0, 0, 0, canvas.height);
      terrain.addColorStop(0, polygonIndex % 2 ? "#4c7c91" : "#46738a");
      terrain.addColorStop(0.48, "#315f78");
      terrain.addColorStop(1, "#25475f");
      context.fillStyle = terrain;
      context.fill();
      context.strokeStyle = "rgba(151, 18, 251, 0.58)";
      context.lineWidth = 0.8;
      context.stroke();
    });
  });

  context.strokeStyle = "rgba(116, 196, 255, 0.14)";
  context.lineWidth = 1;
  for (let y = 0; y <= canvas.height; y += 32) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

const stageColors = [
  BLUE,
  PURPLE,
  BLUE,
  PURPLE,
  BLUE,
  PURPLE,
  BLUE,
  PURPLE,
  BLUE,
].map((color) => new THREE.Color(color));
const stagePulseColors = stageColors.map((color) =>
  color.clone().lerp(new THREE.Color(PALE), 0.42),
);
const stageOffsets = [0.28, -0.32, 0.3, -0.32, -0.32, 0.32, 0.33, -0.32, -0.32];
const stageScales = [1, 1.16, 0.6, 1.16, 1.16, 1, 0.9, 0.75, 1.16];

function Globe({ cities, selectedCity, paused, activeStage }) {
  const group = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const routeMaterials = useRef([]);
  const pulseMaterials = useRef([]);
  const [motionAllowed, setMotionAllowed] = useState(true);
  const globeTexture = useMemo(() => createGlobeTexture(), []);
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);

  const { graticuleGeometry, borderGeometry, coastlineGeometry } = useMemo(() => {
    const graticule = [];
    for (let longitude = 0; longitude < 180; longitude += 15) {
      for (let latitude = -88; latitude < 88; latitude += 3) {
        graticule.push(
          ...pointOnSphere(latitude, longitude, 1.006).toArray(),
          ...pointOnSphere(latitude + 3, longitude, 1.006).toArray(),
        );
      }
    }
    for (let latitude = -75; latitude <= 75; latitude += 15) {
      for (let longitude = 0; longitude < 360; longitude += 3) {
        graticule.push(
          ...pointOnSphere(latitude, longitude, 1.006).toArray(),
          ...pointOnSphere(latitude, longitude + 3, 1.006).toArray(),
        );
      }
    }

    const borderSegments = [];
    const coastlineSegments = [];
    const appendLines = (lines, radius, target) => {
      for (const line of lines.coordinates) {
        for (let index = 1; index < line.length; index += 1) {
          const [firstLongitude, firstLatitude] = line[index - 1];
          const [secondLongitude, secondLatitude] = line[index];
          const start = pointOnSphere(firstLatitude, firstLongitude, radius);
          const end = pointOnSphere(secondLatitude, secondLongitude, radius);
          const angle = start.angleTo(end);
          const steps = Math.max(
            1,
            Math.ceil(angle / THREE.MathUtils.degToRad(1.2)),
          );

          for (let step = 0; step < steps; step += 1) {
            const first = start
              .clone()
              .lerp(end, step / steps)
              .normalize()
              .multiplyScalar(radius);
            const second = start
              .clone()
              .lerp(end, (step + 1) / steps)
              .normalize()
              .multiplyScalar(radius);
            target.push(...first.toArray(), ...second.toArray());
          }
        }
      }
    };
    appendLines(
      mesh(world, world.objects.countries, (first, second) => first !== second),
      1.018,
      borderSegments,
    );
    appendLines(mesh(world, world.objects.land), 1.02, coastlineSegments);

    const makeGeometry = (vertices) => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3),
      );
      geometry.computeBoundingSphere();
      return geometry;
    };

    return {
      graticuleGeometry: makeGeometry(graticule),
      borderGeometry: makeGeometry(borderSegments),
      coastlineGeometry: makeGeometry(coastlineSegments),
    };
  }, []);

  const routes = useMemo(() => {
    const routePairs = [
      ["agra", "london"],
      ["agra", "new-york"],
      ["agra", "dubai"],
      ["agra", "tokyo"],
      ["delhi", "singapore"],
      ["delhi", "sydney"],
      ["mumbai", "paris"],
      ["agra", "singapore"],
      ["london", "new-york"],
      ["london", "paris"],
      ["dubai", "singapore"],
      ["singapore", "tokyo"],
      ["tokyo", "sydney"],
      ["new-york", "sydney"],
    ];

    return routePairs.map(([from, to]) => {
      const startCity = cities.find((city) => city.id === from);
      const endCity = cities.find((city) => city.id === to);
      const start = pointOnSphere(
        startCity.latitude,
        startCity.longitude,
        1.018,
      );
      const end = pointOnSphere(endCity.latitude, endCity.longitude, 1.018);
      const control = start.clone().add(end).normalize().multiplyScalar(1.2);
      const curve = new THREE.QuadraticBezierCurve3(start, control, end);
      const points = curve.getPoints(72);

      return {
        id: `${from}-${to}`,
        start,
        points,
        geometry: new THREE.BufferGeometry().setFromPoints(points),
      };
    });
  }, [cities]);

  const selected = cities.find((city) => city.id === selectedCity) ?? cities[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionAllowed(!media.matches && !paused);
    const updatePointer = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 0.3;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };
    updateMotion();
    media.addEventListener("change", updateMotion);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      media.removeEventListener("change", updateMotion);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [paused]);

  useFrame((state, delta) => {
    if (!group.current) return;

    const stage = activeStage.current;
    const targetRotation =
      THREE.MathUtils.degToRad(-selected.longitude) + stage * 0.18;
    if (motionAllowed) {
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetRotation + state.clock.elapsedTime * 0.025,
        0.8,
        delta,
      );
    } else {
      group.current.rotation.y = targetRotation;
    }
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      motionAllowed ? pointer.current.y : 0,
      2,
      delta,
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      motionAllowed ? pointer.current.x * 0.25 : 0,
      2,
      delta,
    );

    const targetColor = stageColors[Math.min(stage, stageColors.length - 1)];
    routeMaterials.current.forEach((material) => {
      if (material) {
        material.color.lerp(targetColor, 1 - Math.exp(-delta * 1.4));
      }
    });
    pulseMaterials.current.forEach((material) => {
      if (material) {
        material.color.lerp(
          stagePulseColors[stage],
          1 - Math.exp(-delta * 1.8),
        );
      }
    });
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1, 56, 56]} />
        <meshPhysicalMaterial
          color="#ffffff"
          map={globeTexture}
          bumpMap={surfaceTexture}
          bumpScale={0.012}
          emissive="#123554"
          emissiveMap={globeTexture}
          emissiveIntensity={0.18}
          metalness={0.28}
          roughness={0.55}
          clearcoat={0.72}
          clearcoatRoughness={0.34}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.075, 48, 48]} />
        <meshPhysicalMaterial
          color="#62bfff"
          side={THREE.BackSide}
          transparent
          opacity={0.1}
          roughness={0.24}
          metalness={0.18}
          clearcoat={1}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={graticuleGeometry}>
        <lineBasicMaterial
          color={BLUE}
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </lineSegments>
      <lineSegments geometry={borderGeometry}>
        <lineBasicMaterial
          color={PALE}
          transparent
          opacity={0.27}
          depthWrite={false}
        />
      </lineSegments>
      <lineSegments geometry={coastlineGeometry}>
        <lineBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.44}
          depthWrite={false}
        />
      </lineSegments>

      {routes.map((route, index) => (
        <group key={route.id}>
          <line geometry={route.geometry}>
            <lineBasicMaterial
              ref={(material) => {
                routeMaterials.current[index] = material;
              }}
              color={BLUE}
              transparent
              opacity={0.62}
            />
          </line>
          <RoutePulse
            route={route}
            index={index}
            delay={index * 0.23}
            motionAllowed={motionAllowed}
            materialRef={(material) => {
              pulseMaterials.current[index] = material;
            }}
            activeStage={activeStage}
          />
        </group>
      ))}

      {cities.map((city) => {
        const point = pointOnSphere(city.latitude, city.longitude, 1.035);
        const active = city.id === selectedCity;

        return (
          <group key={city.id} position={point}>
            <mesh>
              <sphereGeometry args={[active ? 0.043 : 0.028, 16, 16]} />
              <meshBasicMaterial color={active ? PALE : PURPLE} />
            </mesh>
            <mesh scale={active ? 1.9 : 1.5}>
              <sphereGeometry args={[0.055, 12, 12]} />
              <meshBasicMaterial
                color={BLUE}
                transparent
                opacity={0.17}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function RoutePulse({
  route,
  index,
  delay,
  motionAllowed,
  materialRef,
  activeStage,
}) {
  const pulse = useRef(null);

  useFrame(({ clock }) => {
    if (!pulse.current || !motionAllowed) return;
    const direction = index % 2 === 0 ? 1 : -1;
    const speed = 0.08 + activeStage.current * 0.008;
    const cycle = direction * clock.elapsedTime * speed + delay;
    const position = ((cycle % 1) + 1) % 1;
    const pointIndex = Math.min(
      Math.floor(position * (route.points.length - 1)),
      route.points.length - 2,
    );
    const fraction = position * (route.points.length - 1) - pointIndex;
    pulse.current.position.lerpVectors(
      route.points[pointIndex],
      route.points[pointIndex + 1],
      fraction,
    );
  });

  return (
    <mesh ref={pulse} position={route.start}>
      <sphereGeometry args={[0.018, 10, 10]} />
      <meshBasicMaterial ref={materialRef} color={PALE} />
    </mesh>
  );
}

const networkPoints = [
  [0, 0, 0.35],
  [-0.58, 0.32, 0.08],
  [0.22, 0.64, -0.12],
  [0.62, 0.2, 0.28],
  [0.56, -0.48, 0.03],
  [-0.12, -0.62, -0.22],
  [-0.68, -0.28, -0.16],
  [-0.28, 0.05, -0.62],
  [0.24, -0.12, -0.58],
];
const networkEdges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [7, 8], [1, 7],
];
const ecosystemPoints = [
  [0, 0, 0],
  [-0.72, 0.36, 0.05],
  [-0.55, -0.4, -0.1],
  [0.05, 0.68, -0.08],
  [0.67, 0.42, 0.1],
  [0.7, -0.28, -0.12],
  [0.1, -0.69, 0.08],
  [-0.32, 0.04, 0.48],
  [0.35, 0.02, -0.46],
];
const ecosystemEdges = networkEdges.concat([
  [1, 3], [2, 6], [3, 4], [4, 8], [5, 6], [7, 8],
]);

function ConnectionLines({ points, edges, color = BLUE, opacity = 0.66 }) {
  const geometry = useMemo(() => {
    const positions = [];
    edges.forEach(([from, to]) => {
      positions.push(...points[from], ...points[to]);
    });
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return result;
  }, [edges, points]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </lineSegments>
  );
}

function StoryNode({ position, radius = 0.055, color = PURPLE }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 24, 20]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.28}
        roughness={0.24}
        metalness={0.42}
        clearcoat={0.9}
        clearcoatRoughness={0.18}
      />
    </mesh>
  );
}

function ScreenPanel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.66, 0.86, 0.055],
  texture,
  surfaceTexture,
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={size} radius={0.035} smoothness={4}>
        <meshPhysicalMaterial
          color="#33425c"
          bumpMap={surfaceTexture}
          bumpScale={0.012}
          metalness={0.78}
          roughness={0.26}
          clearcoat={1}
          clearcoatRoughness={0.16}
        />
      </RoundedBox>
      <mesh position={[0, 0, size[2] / 2 + 0.003]}>
        <planeGeometry args={[size[0] * 0.88, size[1] * 0.88]} />
        <meshStandardMaterial
          map={texture}
          emissive="#25204a"
          emissiveIntensity={0.16}
          metalness={0.14}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, -size[1] * 0.47, size[2] / 2 + 0.004]}>
        <boxGeometry args={[size[0] * 0.18, 0.012, 0.006]} />
        <meshStandardMaterial color="#95a4bc" metalness={0.8} roughness={0.22} />
      </mesh>
    </group>
  );
}

function StoryModels({
  registerModel,
  cities,
  selectedCity,
  paused,
  activeStage,
  surfaceTexture,
  interfaceTextures,
}) {
  return (
    <>
      <group ref={(group) => registerModel(0, group)}>
        <Globe
          cities={cities}
          selectedCity={selectedCity}
          paused={paused}
          activeStage={activeStage}
        />
      </group>
      <group ref={(group) => registerModel(1, group)}>
        <ConnectionLines points={networkPoints} edges={networkEdges} color={BLUE} />
        {networkPoints.map((point, index) => (
          <StoryNode
            key={index}
            position={point}
            radius={index === 0 ? 0.105 : 0.06}
            color={index % 3 === 0 ? PURPLE : BLUE}
          />
        ))}
        <mesh>
          <sphereGeometry args={[0.24, 24, 24]} />
          <meshBasicMaterial color={BLUE} transparent opacity={0.09} />
        </mesh>
      </group>
      <group ref={(group) => registerModel(2, group)}>
        <group position={[-0.68, -0.05, 0]}>
          {[0.28, 0.48, 0.66, 0.9].map((height, index) => (
            <mesh key={index} position={[index * 0.15, height / 2 - 0.4, 0]}>
              <boxGeometry args={[0.09, height, 0.08]} />
              <meshPhysicalMaterial
                color={index % 2 ? BLUE : PURPLE}
                emissive={index % 2 ? BLUE : PURPLE}
                emissiveIntensity={0.14}
                roughness={0.25}
                metalness={0.72}
                clearcoat={1}
              />
            </mesh>
          ))}
          <mesh position={[0.22, -0.46, 0]}>
            <boxGeometry args={[0.72, 0.025, 0.05]} />
            <meshBasicMaterial color={PALE} />
          </mesh>
        </group>
        <ScreenPanel
          position={[0.05, 0.04, 0]}
          size={[0.66, 0.86, 0.075]}
          texture={interfaceTextures[0]}
          surfaceTexture={surfaceTexture}
        />
        <group position={[0.78, 0.02, 0]}>
          <mesh>
            <torusGeometry args={[0.3, 0.035, 16, 64]} />
            <meshPhysicalMaterial
              color={PURPLE}
              emissive={PURPLE}
              emissiveIntensity={0.18}
              metalness={0.8}
              roughness={0.2}
              clearcoat={1}
            />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 3]}>
            <torusGeometry args={[0.48, 0.018, 8, 48]} />
            <meshBasicMaterial color={BLUE} transparent opacity={0.8} />
          </mesh>
          <StoryNode position={[0, 0, 0.03]} radius={0.085} color={BLUE} />
          <StoryNode position={[0, 0.3, 0]} radius={0.045} color={PALE} />
          <StoryNode position={[0.26, -0.15, 0]} radius={0.045} color={PALE} />
        </group>
      </group>
      <group ref={(group) => registerModel(3, group)}>
        <mesh>
          <torusGeometry args={[0.72, 0.025, 10, 72]} />
          <meshPhysicalMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.18} metalness={0.86} roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.72, 0.012, 8, 72]} />
          <meshBasicMaterial color={PURPLE} transparent opacity={0.72} />
        </mesh>
        <mesh position={[0, 0.18, 0.03]}>
          <coneGeometry args={[0.14, 0.84, 4]} />
          <meshPhysicalMaterial color={PURPLE} emissive={PURPLE} emissiveIntensity={0.22} metalness={0.78} roughness={0.24} clearcoat={1} />
        </mesh>
        <mesh position={[0, -0.3, 0.03]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.09, 0.52, 4]} />
          <meshPhysicalMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.16} metalness={0.8} roughness={0.25} clearcoat={1} />
        </mesh>
        <StoryNode position={[0, 0, 0.1]} radius={0.075} color={PALE} />
      </group>
      <group ref={(group) => registerModel(4, group)}>
        <RoundedBox args={[1.72, 1.3, 0.09]} radius={0.045} smoothness={4}>
          <meshPhysicalMaterial
            color="#172a43"
            bumpMap={surfaceTexture}
            bumpScale={0.014}
            metalness={0.64}
            roughness={0.38}
            clearcoat={0.7}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.048]}>
          <planeGeometry args={[1.62, 1.2]} />
          <meshStandardMaterial
            map={interfaceTextures[2]}
            emissive="#152949"
            emissiveIntensity={0.14}
            roughness={0.52}
          />
        </mesh>
        <ConnectionLines
          points={[[ -0.78, -0.55, 0], [0.78, -0.55, 0], [-0.78, 0.55, 0], [0.78, 0.55, 0]]}
          edges={[[0, 1], [2, 3], [0, 2], [1, 3]]}
          color={BLUE}
          opacity={0.48}
        />
        <ConnectionLines
          points={[[ -0.52, 0, 0.02], [-0.18, 0, 0.02], [0.18, 0, 0.02], [0.52, 0, 0.02]]}
          edges={[[0, 1], [1, 2], [2, 3]]}
          color={PURPLE}
          opacity={0.85}
        />
        {[-0.52, -0.18, 0.18, 0.52].map((x, index) => (
          <group key={x} position={[x, 0, 0.08]}>
            <mesh>
              <cylinderGeometry args={[0.12, 0.12, 0.045, 6]} />
              <meshStandardMaterial color={index % 2 ? BLUE : PURPLE} emissive={index % 2 ? BLUE : PURPLE} emissiveIntensity={0.48} />
            </mesh>
            <StoryNode position={[0, 0.23, 0.02]} radius={0.04} color={PALE} />
          </group>
        ))}
        {[-0.5, -0.28, 0.28, 0.5].map((x) => (
          <mesh key={x} position={[x, 0.38, 0.02]}>
            <boxGeometry args={[0.09, 0.025, 0.02]} />
            <meshBasicMaterial color={BLUE} transparent opacity={0.72} />
          </mesh>
        ))}
      </group>
      <group ref={(group) => registerModel(5, group)}>
        <ConnectionLines points={ecosystemPoints} edges={ecosystemEdges} color={BLUE} />
        {ecosystemPoints.map((point, index) => (
          <StoryNode
            key={index}
            position={point}
            radius={index === 0 ? 0.12 : 0.065}
            color={index % 3 === 0 ? PURPLE : BLUE}
          />
        ))}
        <mesh>
          <sphereGeometry args={[0.22, 32, 28]} />
          <meshPhysicalMaterial
            color={PURPLE}
            emissive={PURPLE}
            emissiveIntensity={0.32}
            transparent
            opacity={0.72}
            metalness={0.56}
            roughness={0.26}
            clearcoat={1}
          />
        </mesh>
      </group>
      <group ref={(group) => registerModel(6, group)}>
        {[-0.64, 0, 0.64].map((x, index) => (
          <ScreenPanel
            key={index}
            position={[x, index === 1 ? 0.03 : -0.02, index === 1 ? 0.08 : -0.04]}
            rotation={[0.08 * (index - 1), 0.12 * (index - 1), (index - 1) * -0.14]}
            size={[0.62, 0.82, 0.07]}
            texture={interfaceTextures[index + 4]}
            surfaceTexture={surfaceTexture}
          />
        ))}
      </group>
      <group ref={(group) => registerModel(7, group)}>
        {[-0.28, 0, 0.28].map((x, index) => (
          <group
            key={x}
            position={[x, (1 - index) * 0.3, index * -0.08]}
            rotation={[0, (index - 1) * 0.12, (index - 1) * -0.08]}
          >
            <ScreenPanel
              size={[0.94, 0.46, 0.065]}
              texture={interfaceTextures[index + 4]}
              surfaceTexture={surfaceTexture}
            />
            <StoryNode
              position={[-0.34, 0.12, 0.04]}
              radius={0.035}
              color={index === 1 ? PURPLE : BLUE}
            />
          </group>
        ))}
        <ConnectionLines
          points={[[-0.64, -0.48, -0.04], [0, -0.18, -0.04], [0.64, 0.12, -0.04]]}
          edges={[[0, 1], [1, 2]]}
          color={PURPLE}
          opacity={0.72}
        />
      </group>
      <group ref={(group) => registerModel(8, group)}>
        {[0.86, 0.66, 0.46].map((radius, index) => (
          <mesh key={radius} rotation={[0, index * 0.35, index * -0.22]}>
            <torusGeometry args={[radius, 0.025, 10, 80]} />
            <meshStandardMaterial
              color={index === 1 ? PURPLE : BLUE}
              emissive={index === 1 ? PURPLE : BLUE}
              emissiveIntensity={0.68}
              metalness={0.35}
              roughness={0.3}
            />
          </mesh>
        ))}
        <mesh>
          <sphereGeometry args={[0.27, 32, 32]} />
          <meshBasicMaterial color={PURPLE} transparent opacity={0.22} />
        </mesh>
        <pointLight color={PURPLE} intensity={3} distance={3} />
      </group>
    </>
  );
}

function GlobeFallback({ onReady }) {
  useEffect(() => onReady(), [onReady]);
  return <div className="globe-fallback" aria-hidden="true" />;
}

function StoryScene({ cities, selectedCity, paused, onReady }) {
  const { viewport, size } = useThree();
  const models = useRef([]);
  const particleLayer = useRef(null);
  const keyLight = useRef(null);
  const fillLight = useRef(null);
  const registerModel = useCallback((index, group) => {
    models.current[index] = group;
  }, []);
  const storyProgress = useRef(0);
  const activeStage = useRef(0);
  const motionReduced = useRef(false);
  const mobile = size.width <= 900;
  const targetLightColor = useMemo(() => new THREE.Color(), []);
  const targetFillColor = useMemo(() => new THREE.Color(), []);
  const surfaceTexture = useMemo(() => createSurfaceTexture(), []);
  const interfaceTextures = useMemo(
    () => Array.from({ length: 7 }, (_, index) =>
      createInterfaceTexture(index % 2 ? "#62bfff" : "#b36cff", index),
    ),
    [],
  );
  const particleGeometry = useMemo(() => {
    const coordinates = [];
    for (let index = 0; index < 36; index += 1) {
      const angle = index * 2.399963229728653;
      const radius = 1.65 + (index % 5) * 0.17;
      coordinates.push(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.3) * 1.5,
        Math.sin(angle) * radius,
      );
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(coordinates, 3),
    );
    return geometry;
  }, []);

  useEffect(() => {
    let secondFrame;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(onReady);
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [onReady]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let trigger;
    const updateMotionPreference = () => {
      motionReduced.current = media.matches;
      const progress = trigger ? trigger.progress * 8 : storyProgress.current;
      storyProgress.current = media.matches ? Math.round(progress) : progress;
    };
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);

    trigger = ScrollTrigger.create({
      trigger: "#home-experience",
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress * 8;
        storyProgress.current = motionReduced.current
          ? Math.round(progress)
          : progress;
      },
      onRefresh: (self) => {
        storyProgress.current = motionReduced.current
          ? Math.round(self.progress * 8)
          : self.progress * 8;
      },
    });
    trigger.refresh();

    return () => {
      media.removeEventListener("change", updateMotionPreference);
      trigger.kill();
    };
  }, []);

  useFrame(({ clock }, delta) => {
    activeStage.current = Math.min(
      Math.round(storyProgress.current),
      stageColors.length - 1,
    );
    const progress = storyProgress.current;
    const boundary = Math.round(progress);
    const boundaryDistance = Math.abs(progress - boundary);
    const boundaryWindow = 0.16;
    const transitionActive = !motionReduced.current
      && boundary > 0
      && boundary < stageOffsets.length - 1
      && boundaryDistance < boundaryWindow;
    const stage = transitionActive
      ? boundary - 1
      : Math.min(Math.floor(progress), stageOffsets.length - 1);
    const fraction = transitionActive
      ? THREE.MathUtils.clamp(
          (progress - (boundary - boundaryWindow)) / (boundaryWindow * 2),
          0,
          1,
        )
      : 0;
    const horizontalOffset = transitionActive
      ? stageOffsets[fraction < 0.5 ? boundary - 1 : boundary]
      : stageOffsets[stage];
    const targetX = mobile ? 0 : viewport.width * horizontalOffset;
    const targetY = mobile ? -viewport.height * 0.16 : 0;
    if (particleLayer.current) {
      particleLayer.current.visible = !transitionActive;
    }

    models.current.forEach((model, index) => {
      if (!model) return;
      const baseScale = mobile ? 0.5 : stageScales[index];
      const outgoing = transitionActive && index === boundary - 1;
      const incoming = transitionActive && index === boundary;
      if (transitionActive && !outgoing && !incoming) {
        model.visible = false;
        return;
      }
      if (!outgoing && !incoming) {
        model.visible = index === stage;
        model.position.set(0, 0, 0);
        model.scale.setScalar(baseScale);
        model.rotation.set(0, 0, 0);
        if (index !== 0 && !paused && !motionReduced.current) {
          model.rotation.z = Math.sin(clock.elapsedTime * 0.32 + index) * 0.035;
        }
        return;
      }

      const isOutgoing = outgoing;
      const localProgress = isOutgoing
        ? Math.min(fraction * 2, 1)
        : Math.max((fraction - 0.5) * 2, 0);
      const passage = THREE.MathUtils.smoothstep(localProgress, 0, 1);
      const travel = viewport.height * 0.82;
      model.visible = isOutgoing ? fraction < 0.5 : fraction >= 0.5;
      model.position.y = isOutgoing
        ? travel * passage
        : travel * (1 - passage);
      const portalCompression = 1 - THREE.MathUtils.smoothstep(
        Math.abs(fraction - 0.5),
        0,
        0.055,
      );
      const compressedScale = Math.max(0.1, 1 - portalCompression * 0.9);
      model.scale.set(
        baseScale * compressedScale,
        baseScale * compressedScale,
        baseScale * compressedScale,
      );
      model.position.z = -portalCompression * 0.18;
      model.rotation.y = 0;
      model.rotation.x = isOutgoing ? passage * 0.22 : -passage * 0.22;
      model.rotation.z = 0;
    });

    if (models.current.scene) {
      const scene = models.current.scene;
      scene.position.set(targetX, targetY, 0);
      scene.rotation.set(0, 0, 0);
    }
    const lightStage = Math.min(Math.floor(progress), stageColors.length - 2);
    const lightBlend = progress - lightStage;
    targetLightColor
      .copy(stageColors[lightStage])
      .lerp(stageColors[lightStage + 1], lightBlend);
    targetFillColor.copy(targetLightColor).lerp(PURPLE_COLOR, 0.55);
    if (keyLight.current) {
      keyLight.current.color.lerp(targetLightColor, 1 - Math.exp(-delta * 2));
    }
    if (fillLight.current) {
      fillLight.current.color.lerp(targetFillColor, 1 - Math.exp(-delta * 1.6));
    }
    if (particleLayer.current) {
      particleLayer.current.rotation.y = paused || motionReduced.current
        ? progress * 0.08
        : progress * 0.08 + clock.elapsedTime * 0.025;
    }
  });

  return (
    <>
      <ambientLight intensity={0.62} />
      <hemisphereLight color="#d8e8ff" groundColor="#130d22" intensity={0.72} />
      <Environment resolution={128} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#dceaff"
          position={[-3, 2, 3]}
          scale={[4, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.7}
          color="#b77aff"
          position={[3, -1, 2]}
          scale={[2, 4, 1]}
        />
      </Environment>
      <pointLight ref={keyLight} color={BLUE} intensity={24} position={[3, 2, 4]} />
      <pointLight ref={fillLight} color={PURPLE} intensity={12} position={[-3, -2, -2]} />
      <group ref={(group) => { models.current.scene = group; }}>
        <StoryModels
          registerModel={registerModel}
          cities={cities}
          selectedCity={selectedCity}
          paused={paused}
          activeStage={activeStage}
          surfaceTexture={surfaceTexture}
          interfaceTextures={interfaceTextures}
        />
        <points ref={particleLayer} geometry={particleGeometry}>
          <pointsMaterial
            color={PALE}
            size={0.018}
            transparent
            opacity={0.36}
            sizeAttenuation
            depthWrite={false}
          />
        </points>
      </group>
    </>
  );
}

export default function PersistentGlobe({ cities, selectedCity, paused, onReady }) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 5.2], zoom: 190 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      fallback={<GlobeFallback onReady={onReady} />}
    >
      <StoryScene
        cities={cities}
        selectedCity={selectedCity}
        paused={paused}
        onReady={onReady}
      />
    </Canvas>
  );
}
