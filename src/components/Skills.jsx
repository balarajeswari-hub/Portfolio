import React from 'react';
import { Code2, Globe, Database, Cpu, Layout, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="h-full"
  >
    <TiltCard className="glass-card p-6 rounded-2xl hover:border-primary-500/50 transition-colors group h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary-500/10 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-all">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-outfit dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-700 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </TiltCard>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["C", "Python", "Java", "JavaScript"],
      delay: 0.1
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "Django", "FastAPI"],
      delay: 0.2
    },
    {
      title: "Machine Learning",
      icon: Cpu,
      skills: ["Decision Tree", "Random Forest", "Logistic Regression", "Data Preprocessing"],
      delay: 0.3
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MongoDB", "SQL (Basics)", "Git", "GitHub", "VS Code", "Postman"],
      delay: 0.4
    },
    {
      title: "Certifications",
      icon: Layout,
      skills: ["MongoDB Node.js (MongoDB Univ.)", "Python Foundation (Infosys)", "Full Stack MERN (SmartBridge)", "Advanced SQL (upGrad)", "AI Literacy (IBM)", "AI Automation (IBM)", "Gen AI & Cloud (IBM)", "Prompt Engineering (AWS)", "AWS Cloud Practitioner", "TCS iON Career Edge", "Forage: ESG, EY, Deloitte, Cybersecurity"],
      delay: 0.5
    },
    {
      title: "Soft Skills",
      icon: Settings,
      skills: ["Hardworking", "Time Management", "Communication", "Commitment", "Problem Solving"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 dark:text-white">Technical Prowess</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
