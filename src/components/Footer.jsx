import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <a href="#" className="text-3xl font-bold font-outfit gradient-text">
            BR.
          </a>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xs mx-auto text-sm">
            Building creative and modern web experiences with purpose and passion.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#home" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Home</a>
          <a href="#about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">About</a>
          <a href="#skills" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Skills</a>
          <a href="#projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Contact</a>
        </div>
        
        <div className="text-sm text-slate-500 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Dusanapudi Bala Rajeswari. All rights reserved.</p>
          <p className="mt-1">Crafted with React, Tailwind & Three.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
