import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, View, PerspectiveCamera } from '@react-three/drei';
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
      // Rotación base animada más influencia de la posición del mouse
      const targetRotX = state.clock.elapsedTime * speed * 0.03 + state.pointer.y * 0.15;
      const targetRotY = state.clock.elapsedTime * speed * 0.02 + state.pointer.x * 0.15;
      
      points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, targetRotX, 0.1);
      points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, targetRotY, 0.1);
      
      const posAttr = points.current.geometry.attributes['position'];
      if (posAttr) {
        const positions = posAttr.array as Float32Array;
        if (positions && positions.length >= count * 3) {
          for (let i = 0; i < count; i++) {
            const idx = i * 3 + 1;
            const currentVal = positions[idx];
            if (currentVal !== undefined) {
              positions[idx] = currentVal + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.003;
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
  count = 800,
  size = 0.02,
  speed = 1,
  color = '#3b82f6',
  opacity = 0.6,
  className = '',
}: ParticleFieldProps) => {
  return (
    <View className={`absolute inset-0 ${className}`}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.5} />
      <Particles
        count={count}
        size={size}
        speed={speed}
        color={color}
        opacity={opacity}
      />
    </View>
  );
};

export default ParticleField;
