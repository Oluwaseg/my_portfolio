import { Code, Globe, Laptop, Youtube } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='relative w-[200px] h-[200px]'>
      <div ref={mountRef} className='absolute inset-0' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <Code className='text-primary-400' size={32} />
          <Globe className='text-primary-400' size={32} />
          <Laptop className='text-primary-400' size={32} />
          <Youtube className='text-primary-400' size={32} />
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;
