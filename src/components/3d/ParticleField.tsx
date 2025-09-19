import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  speed?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

const Particles = ({
  count,
  size,
  speed,
  color,
  opacity,
}: {
  count: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
}) => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, [count]);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * speed * 0.1;
      points.current.rotation.y = state.clock.elapsedTime * speed * 0.05;
      const posAttr = points.current.geometry.attributes['position'];
      if (posAttr) {
        const positions = posAttr.array as Float32Array;
        if (positions && positions.length >= count * 3) {
          for (let i = 0; i < count; i++) {
            const idx = i * 3 + 1;
            if (
              typeof positions[idx] === 'number' &&
              positions[idx] !== undefined
            ) {
              positions[idx] += Math.sin(state.clock.elapsedTime + i) * 0.01;
            }
          }
        }
        posAttr.needsUpdate = true;
      }
    }
  });
  
  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

const ParticleField = ({
  count = 2000,
  size = 0.02,
  speed = 1,
  color = '#3b82f6',
  opacity = 0.6,
  className = '',
}: ParticleFieldProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles
          count={count}
          size={size}
          speed={speed}
          color={color}
          opacity={opacity}
        />
      </Canvas>
    </div>
  );
};

export default ParticleField;
