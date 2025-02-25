import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

function Model({ url }) {
  const [error, setError] = useState(null);
  
  try {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />;
  } catch (err) {
    console.error('Error loading model:', err);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

const ModelViewer = ({ modelUrl, visible, onClose }) => {
  if (!visible) return null;

  return (
    <ViewerContainer>
      <CloseButton onClick={onClose}>關閉</CloseButton>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model url={modelUrl} />
          <OrbitControls 
            enableZoom={true} 
            autoRotate 
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Suspense>
      </Canvas>
    </ViewerContainer>
  );
};

export default ModelViewer; 