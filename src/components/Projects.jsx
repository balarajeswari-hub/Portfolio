import React from 'react';
import { ExternalLink, Github, Monitor, Server, Brain, ShoppingCart, Gavel, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const ProjectCard = ({ title, description, tags, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="h-full"
  >
    <TiltCard className="glass-card overflow-hidden rounded-3xl p-6 hover:border-primary-500 transition-all group flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        <div className="flex gap-3">
          <a href="#" className="p-2 hover:text-primary-500 transition-colors" title="View Code">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 hover:text-primary-500 transition-colors" title="Live Demo">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="text-xl font-bold font-outfit mb-3 dark:text-white group-hover:text-primary-500 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 bg-primary-500/5 text-primary-600 dark:text-primary-400 rounded-md text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div>
    </TiltCard>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Smartphone Addiction Prediction",
      description: "Engineered a high-accuracy predictive model using Random Forest and Logistic Regression to analyze 1000+ data points on user behavior and stress levels.",
      tags: ["Python", "ML", "Scikit-Learn", "Data Analysis"],
      icon: Brain,
      delay: 0.1
    },
    {
      title: "Bid Beyond - Global Auction",
      description: "Developed a real-time auction exchange with automated expiry logic and secure Role-Based Access Control (RBAC) for diverse stakeholder roles.",
      tags: ["Spring Boot", "React.js", "MySQL", "REST API"],
      icon: Gavel,
      delay: 0.2
    },
    {
      title: "MERN Food Ordering App",
      description: "Architected a full-featured MERN application with JWT authentication and optimized React hooks, reducing interface latency by 40%.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      icon: ShoppingCart,
      delay: 0.3
    },
    {
      title: "DocSpot - Booking System",
      description: "Healthcare appointment booking platform with JWT authentication and doctor search functionality.",
      tags: ["MERN Stack", "JWT", "REST API"],
      icon: UserPlus,
      delay: 0.4
    },
    {
      title: "Digital Banking Interface",
      description: "Backend system with FastAPI and RBAC (Admin, User, Auditor). Handles KYC, transactions, and secure JWT auth.",
      tags: ["FastAPI", "Python", "SQLAlchemy"],
      icon: Server,
      delay: 0.5
    },
    {
      title: "Research Paper Search & AI Summarizer",
      description: "Python system searching research papers and summarizing them using Groq LLaMA API for fast AI insights.",
      tags: ["Python", "Groq API", "LLaMA"],
      icon: Monitor,
      delay: 0.6
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">A collection of my recent work across various domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
