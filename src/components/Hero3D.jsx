import React, { Suspense, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedText = ({ text, position, size = 1, color = "#4f46e5" }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.4}>
      <Text
        ref={textRef}
        position={position}
        fontSize={size}
        color={color}
        font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_LPtlj7_PrcH82tcO_2.woff" // Outfit Bold-ish
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial metalness={0.9} roughness={0.1} color={color} />
      </Text>
    </Float>
  );
};

// Interactive Floating Shapes
const FloatingShape = ({ position, geometry, color, speed, rotationSpeed }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2;
      meshRef.current.rotation.x += rotationSpeed * (hovered ? 2.5 : 1) * 0.005;
      meshRef.current.rotation.y += rotationSpeed * (hovered ? 2.5 : 1) * 0.008;
      
      // Hover scale transition
      const targetScale = hovered ? 1.3 : 1.0;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      {geometry}
      <meshPhysicalMaterial
        color={hovered ? "#3b67f5" : color}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transmission={0.6}
        thickness={1.5}
      />
    </mesh>
  );
};

// Interactive Particle Field
const Particles = () => {
  const pointsRef = useRef();
  const count = 180;
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;  // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;  // Z
    }
    return [pos];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    
    // Smooth interactive rotation & parallax tilt based on cursor
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.015 + pointerX * 0.08;
      pointsRef.current.rotation.x = pointerY * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#818cf8"
        sizeAttenuation={true}
        transparent
        opacity={0.5}
      />
    </points>
  );
};

// Dynamic light that tracks user mouse movement
const MouseLight = () => {
  const lightRef = useRef();
  useFrame((state) => {
    if (lightRef.current) {
      const targetX = state.pointer.x * 6;
      const targetY = state.pointer.y * 4;
      // Smooth interpolation (lerp)
      lightRef.current.position.x += (targetX - lightRef.current.position.x) * 0.1;
      lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.1;
    }
  });
  return <pointLight ref={lightRef} position={[0, 0, 4]} intensity={2.5} color="#6366f1" />;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 10, 10]} angle={0.25} penumbra={1} intensity={1.5} />
      
      {/* Dynamic Cursor Spotlight */}
      <MouseLight />

      {/* Floating Particles Background */}
      <Particles />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 3, tension: 1000 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <group position={[0, 0, 0]}>
          <AnimatedText 
            text="I'm Bala Rajeswari" 
            position={[0, 0.6, 0]} 
            size={0.55} 
            color="#3b67f5" 
          />
          <AnimatedText 
            text="Web Developer" 
            position={[0, -0.4, 0]} 
            size={0.38} 
            color="#4f46e5" 
          />

          {/* Central Translucent Glass Sculpture behind text */}
          <FloatingShape 
            position={[0, 0, -1.2]} 
            geometry={<torusKnotGeometry args={[0.7, 0.22, 150, 16]} />} 
            color="#6366f1" 
            speed={1.2} 
            rotationSpeed={0.8} 
          />

          {/* Floating interactive geometries in the periphery */}
          <FloatingShape 
            position={[-2.8, 1.2, 0.5]} 
            geometry={<sphereGeometry args={[0.3, 32, 32]} />} 
            color="#38bdf8" 
            speed={1.6} 
            rotationSpeed={1.5} 
          />

          <FloatingShape 
            position={[2.8, -1.0, 0.5]} 
            geometry={<coneGeometry args={[0.3, 0.6, 4]} />} 
            color="#ec4899" 
            speed={1.4} 
            rotationSpeed={1.2} 
          />

          <FloatingShape 
            position={[-2.5, -1.4, -0.5]} 
            geometry={<torusGeometry args={[0.22, 0.08, 16, 100]} />} 
            color="#10b981" 
            speed={1.8} 
            rotationSpeed={2.0} 
          />
        </group>
      </PresentationControls>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4.5}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-10 canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-20 text-center pointer-events-none">
        <p className="text-primary-500 font-semibold tracking-widest uppercase mb-4 animate-bounce">
          Hi there, Welcome to my world
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 dark:text-white opacity-0">
          Dusanapudi Bala Rajeswari
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4 mt-20">
          Building creative and modern web experiences with passion and precision.
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 glass-card hover:bg-white/20 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll down</span>
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-primary-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero3D;
