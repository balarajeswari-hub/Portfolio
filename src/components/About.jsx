import React from 'react';
import { GraduationCap, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "MCA",
      institution: "Swarnandhra College of Engineering and Technology",
      year: "2024 - 2026",
      result: "7.98 CGPA"
    },
    {
      degree: "B.Sc (MPCS)",
      institution: "Sri Surya Degree College, Narsapur",
      year: "2021 - 2024",
      result: "8.39 CGPA"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Surya Junior College, Narsapur",
      year: "2019 - 2021",
      result: "887 Marks"
    },
    {
      degree: "S.S.C",
      institution: "Viveka English Medium High School, Mogaltur",
      year: "2019",
      result: "9.7 (CGPA)"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-outfit mb-4 flex items-center gap-3">
                <Target className="text-primary-500" /> Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Motivated entry-level software developer with skills in Python, Java, and Full Stack Web Development. 
                Seeking a Software Developer role to apply technical and problem-solving skills in building innovative solutions 
                that make a real-world impact.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-outfit mb-4 flex items-center gap-3">
                <Heart className="text-pink-500" /> My Strengths
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Hardworking', 'Positive Thinking', 'Time Management', 'Commitment', 'Adaptable'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-outfit mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary-500" /> Education
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-primary-500 rounded-full flex items-center justify-center z-10" />
                    <div>
                      <h4 className="text-lg font-bold dark:text-white">{item.degree}</h4>
                      <p className="text-primary-500 font-medium text-sm mb-1">{item.institution}</p>
                      <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>{item.year}</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{item.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
