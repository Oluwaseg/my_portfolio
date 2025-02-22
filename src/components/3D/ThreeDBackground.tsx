import { Code, Globe, Laptop, Youtube } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDBackgroundProps {
  type: 'cube' | 'edu' | 'hero' | 'bg1' | 'bg2';
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

    let object: THREE.Mesh | THREE.Points | THREE.Group;
    let waveAnimation: (() => void) | null = null;

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
          size: 1.5,
          transparent: true,
          opacity: 0.3,
        });
        object = new THREE.Points(particleGeometry, particleMaterial);
        camera.position.z = 1000;
        break;
      }
      case 'bg1': {
        const group = new THREE.Group();
        const particleGeometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 3000; i++) {
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
          size: 2,
          transparent: true,
          opacity: 0.6,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        group.add(particles);

        const shapes = [
          new THREE.IcosahedronGeometry(20),
          new THREE.OctahedronGeometry(15),
          new THREE.TetrahedronGeometry(25),
        ];
        shapes.forEach((geometry) => {
          const material = new THREE.MeshBasicMaterial({
            color: 0x2186eb,
            wireframe: true,
          });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(
            Math.random() * 1000 - 500,
            Math.random() * 1000 - 500,
            Math.random() * 1000 - 500
          );
          group.add(mesh);
        });

        object = group;
        camera.position.z = 1000;
        break;
      }
      case 'bg2': {
        const group = new THREE.Group();
        const planeGeometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
        const planeMaterial = new THREE.MeshBasicMaterial({
          color: 0x2186eb,
          wireframe: true,
        });
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        group.add(planeMesh);

        waveAnimation = () => {
          const time = Date.now() * 0.001;
          const positions = planeGeometry.attributes.position
            .array as Float32Array;
          for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] =
              Math.sin(positions[i] / 50 + time) * 20 +
              Math.sin(positions[i + 1] / 50 + time) * 20;
          }
          planeGeometry.attributes.position.needsUpdate = true;
        };

        object = group;
        camera.position.set(0, 400, 1000);
        camera.lookAt(0, 0, 0);
        break;
      }
    }

    scene.add(object);

    const animate = () => {
      requestAnimationFrame(animate);
      if (object instanceof THREE.Mesh) {
        object.rotation.x += 0.01;
        object.rotation.y += 0.01;
      } else if (object instanceof THREE.Points) {
        object.rotation.x += 0.0005;
        object.rotation.y += 0.0005;
      } else if (object instanceof THREE.Group) {
        if (type === 'bg1') {
          object.rotation.y += 0.001;
          object.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
              child.rotation.x += 0.005;
              child.rotation.y += 0.005;
            }
          });
        } else if (type === 'bg2' && waveAnimation) {
          waveAnimation();
        }
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

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [type, width, height]);

  return type === 'cube' ? (
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
  ) : (
    <div ref={mountRef} className='absolute inset-0 -z-10 bg-[#111827]' />
  );
};

export default ThreeDBackground;
