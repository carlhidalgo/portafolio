import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text, View, PerspectiveCamera } from '@react-three/drei';
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
      // Rotación base con oscilación del mouse
      const targetRotX = rotation[0] + state.clock.elapsedTime * 0.3 + state.pointer.y * 0.3;
      const targetRotY = rotation[1] + state.clock.elapsedTime * 0.2 + state.pointer.x * 0.3;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);
      meshRef.current.rotation.z = rotation[2] + state.clock.elapsedTime * 0.15;
      
      // Flotación en Y + movimiento por mouse en X/Y
      const targetY = Math.sin(state.clock.elapsedTime) * 0.4 + state.pointer.y * 0.3;
      const targetX = state.pointer.x * 0.3;
      
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
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
    <View className={`w-full h-full ${className}`}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
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
    </View>
  );
};

export default FloatingCube;
