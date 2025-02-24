import { useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Use `useSpring` for a smoother transition effect
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Load background texture
    const geometry = new THREE.SphereGeometry(50, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/background.png');
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
      color: new THREE.Color(0x1f2937),
      transparent: true,
      opacity: 0.8,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 5;

    // Update sphere position on scroll
    smoothScrollY.onChange((scrollValue) => {
      const targetY = THREE.MathUtils.mapLinear(scrollValue, 0, 500, 0, -3);
      sphere.position.y = THREE.MathUtils.lerp(
        sphere.position.y,
        targetY,
        0.05
      );
    });

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [smoothScrollY]);

  return (
    <div ref={mountRef} className='fixed top-0 left-0 w-full h-full -z-10' />
  );
};

export default ThreeJSBackground;
