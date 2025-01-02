import { Code, Globe, Laptop, Youtube } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDBackgroundProps {
  type: 'cube' | 'edu' | 'hero';
  width?: number;
  height?: number;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({
  type,
  width = window.innerWidth,
  height = window.innerHeight,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    let object: THREE.Mesh | THREE.Points;

    switch (type) {
      case 'cube': {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
          color: 0x2186eb,
          wireframe: true,
        });
        object = new THREE.Mesh(geometry, material);
        camera.position.z = 2;
        break;
      }
      case 'edu':
      case 'hero': {
        const particleGeometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 5000; i++) {
          const x = (Math.random() - 0.5) * 2000;
          const y = (Math.random() - 0.5) * 2000;
          const z = (Math.random() - 0.5) * 2000;
          vertices.push(x, y, z);
        }
        particleGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(vertices, 3)
        );
        const particleMaterial = new THREE.PointsMaterial({
          color: 0x2186eb,
          size: type === 'edu' ? 2 : 1.5,
          transparent: true,
          opacity: type === 'edu' ? 0.5 : 1,
        });
        object = new THREE.Points(particleGeometry, particleMaterial);
        camera.position.z = 1000;
        break;
      }
    }

    scene.add(object);

    if (type === 'hero') {
      const light = new THREE.AmbientLight(0x404040, 2);
      scene.add(light);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (type === 'cube') {
        (object as THREE.Mesh).rotation.x += 0.01;
        (object as THREE.Mesh).rotation.y += 0.01;
      } else {
        object.rotation.x += 0.0005;
        object.rotation.y += 0.0005;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    if (type === 'hero') {
      const updateAppearance = () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const primaryColor = '#2186EB';
        const darkBackground = '#242424';
        const lightBackground = '#E6F6FF';
        (object.material as THREE.PointsMaterial).color.setHex(
          parseInt(primaryColor.replace('#', ''), 16)
        );
        (object.material as THREE.PointsMaterial).opacity = isDarkMode
          ? 0.3
          : 0.8;
        scene.background = new THREE.Color(
          isDarkMode ? darkBackground : lightBackground
        );
        (scene.children[1] as THREE.AmbientLight).color.setHex(
          isDarkMode ? 0xffffff : 0x000000
        );
      };

      updateAppearance();
      const observer = new MutationObserver(updateAppearance);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
        mountRef.current?.removeChild(renderer.domElement);
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [type, width, height]);

  if (type === 'cube') {
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
  }

  return <div ref={mountRef} className='absolute inset-0 -z-10' />;
};

export default ThreeDBackground;
