import React from 'react';
import { Mail, Phone, Linkedin, Github, Send, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:bg-primary-500/10 hover:border-primary-500/50 transition-all group"
  >
    <div className="p-3 bg-primary-500/10 text-primary-500 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-all">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium dark:text-white">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-outfit dark:text-white mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactInfo 
                icon={Mail} 
                label="Email" 
                value="balarajeswaridusanapudi@gmail.com" 
                href="mailto:balarajeswaridusanapudi@gmail.com" 
              />
              <ContactInfo 
                icon={Phone} 
                label="Phone" 
                value="+91 7981545064" 
                href="tel:+917981545064" 
              />
              <ContactInfo 
                icon={Linkedin} 
                label="LinkedIn" 
                value="Bala Rajeswari Dusanapudi" 
                href="https://www.linkedin.com/in/bala-rajeswari-dusanapudi-13012a308" 
              />
              <ContactInfo 
                icon={Github} 
                label="GitHub" 
                value="BalaRajeswari-Hub" 
                href="https://github.com/balarajeswari-hub" 
              />
            </div>

            <div className="p-8 glass-card rounded-3xl mt-8">
              <h4 className="text-xl font-bold font-outfit mb-4 dark:text-white flex items-center gap-2">
                <Download className="text-primary-500" size={20} /> Professional Resume
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                Download my complete profile to learn more about my background, skills, and projects.
              </p>
              <a 
                href="/Resume.pdf" 
                download="Bala_Rajeswari_Resume.pdf"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-primary-500/25"
              >
                Download Resume PDF
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold font-outfit dark:text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 bg-white/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all transform hover:scale-[1.01]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
