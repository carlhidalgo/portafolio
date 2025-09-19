import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCubeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  opacity?: number;
  text?: string | undefined;
  className?: string;
}

const AnimatedCube = ({
  position,
  rotation,
  scale,
  color,
  opacity,
  text,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  opacity: number;
  text?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = rotation[2] + state.clock.elapsedTime * 0.2;
      
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });
  
  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[1, 1, 1]}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
          wireframe={false}
        />
      </Box>
      {text && (
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      )}
    </group>
  );
};

const FloatingCube = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = '#3b82f6',
  opacity = 0.8,
  text,
  className = '',
}: FloatingCubeProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedCube
          position={position}
          rotation={rotation}
          scale={scale}
          color={color}
          opacity={opacity}
          {...(typeof text === 'string' ? { text } : {})}
        />
      </Canvas>
    </div>
  );
};

export default FloatingCube;
