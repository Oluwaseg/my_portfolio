import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBG: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 1.5,
      transparent: true,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const light = new THREE.AmbientLight(0x404040, 2);
    scene.add(light);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const updateAppearance = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');

      const primaryColor = '#0EA5E9';
      const darkBackground = '#1F2937';
      const lightBackground = '#F0F9FF';
      material.color.setHex(parseInt(primaryColor.replace('#', ''), 16));
      material.opacity = isDarkMode ? 0.3 : 0.8;
      scene.background = new THREE.Color(
        isDarkMode ? darkBackground : lightBackground
      );

      light.color.setHex(isDarkMode ? 0xffffff : 0x000000);
    };

    updateAppearance();
    const observer = new MutationObserver(() => {
      updateAppearance();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className='absolute inset-0 -z-10' />;
};

export default HeroBG;
