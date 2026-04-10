import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows, PresentationControls, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedText = ({ text, position, size = 1, color = "#4f46e5" }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={position}
        fontSize={size}
        color={color}
        font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_LPtlj7_PrcH82tcO_2.woff" // Outfit Bold-ish
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#ffffff00"
      >
        {text}
        <meshStandardMaterial metalness={0.8} roughness={0.2} color={color} />
      </Text>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
      >
        <group position={[0, 0, 0]}>
          <AnimatedText 
            text="I'm Bala Rajeswari" 
            position={[0, 0.5, 0]} 
            size={0.6} 
            color="#3b82f6" 
          />
          <AnimatedText 
            text="Web Developer" 
            position={[0, -0.5, 0]} 
            size={0.4} 
            color="#6366f1" 
          />
        </group>
      </PresentationControls>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
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
