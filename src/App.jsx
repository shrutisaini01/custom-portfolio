import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: 'Bagragi - Travel Planner',
      desc: '✈️ A feature-rich travel planning application with an immersive 3D globe interface. Users can search and explore destinations, get detailed travel insights including famous food, weather, and local attractions, set travel budgets, and choose trip durations. Integrated hotel booking, interactive maps, and AI-powered suggestions enhance user experience.',
      link: 'https://bagragi.netlify.app/'
    },
    {
      title: 'OA Generator',
      desc: '📝 A robust, full-stack online assessment platform for coding evaluations. Includes fullscreen enforcement, real-time violation detection, tab-switch prevention, and secure test submission. Built with React, custom state management, and plans for tab-tracking, live feedback, and automated evaluations.',
      link: 'https://oagen.netlify.app/'
    },
    {
      title: 'DhanSakhi',
      desc: '🗣️ An AI-powered financial advisor web app that supports multilingual voice interaction, budget tracking, and financial education through intuitive visuals. Uses speech recognition, text-to-speech, and personalized assistance. Shortlisted for EY Techathon 5.0 for its innovation and accessibility.',
      link: 'https://dhan-sakhi.onrender.com/'
    },
    {
      title: 'SmartCart',
      desc: '🛒 An innovative full-stack application developed for the Walmart Sparkathon 2025. This project features a voice-activated digital shopping assistant that allows users to add items to their cart simply by speaking. It intelligently manages budgets, offering real-time suggestions for cheaper alternatives if the cart total exceeds the set limit. Additionally, it includes a global currency converter, enabling international shoppers to manage their budget in their home currency.',
      link: 'https://github.com/shrutisaini01/smartcart1'
    },
    {
      title: 'Multiple Disease Detection',
      desc: '🩺 Machine learning-based medical tool for early detection of diabetes, heart disease, and Parkinson’s disease. Achieves 90% accuracy using Random Forest and logistic regression, presented through a clean Streamlit interface with real-time predictions and visualized data.',
      link: 'https://prediction-app-shruti.streamlit.app/'
    },
    {
      title: 'StellarScope',
      desc: '🌌 A cosmic education platform that uses astronomical APIs to let users explore celestial objects and events interactively. Designed with an intuitive UI, making it ideal for students and astronomy enthusiasts to visualize planetary positions and learn about the night sky.',
      link: 'https://stellarscope-zhl3.onrender.com/'
    },
    {
      title: 'Minimalist Operating System',
      desc: '🖥️ A foundational x86-based OS written in Assembly and C. Features include a custom bootloader, kernel, basic shell, and low-level memory operations. Runs in QEMU emulator, showcasing deep understanding of hardware-software interface and OS design principles.',
      link: 'https://github.com/vishwajeetsingh04/minios-by-codevenger'
    },
    {
      title: 'Python Code Editor',
      desc: '🐍 A browser-based Python IDE capable of handling real-time code execution, error highlighting, and large script handling. Designed for developers and learners, supporting syntax checking and interpreted output, ideal for online education and live coding sessions.',
      link: 'https://github.com/shrutisaini01/Python-Code-Editor'
    }
  ];

  return (
    <div className={darkMode ? 'bg-gray-900 text-white transition duration-500' : 'bg-white text-gray-900 transition duration-500'}>
      <div className="fixed top-4 right-4 z-50">
        <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-lg">
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
        </button>
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <motion.img
          src="/myimage1.jpg"
          alt="Shruti Saini"
          className="w-36 h-36 rounded-full shadow-2xl border-4 border-blue-500 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            words={["Shruti Saini", "Full Stack Developer", "React Enthusiast", "Problem-Solving"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </motion.h1>
        <motion.nav
          className="flex gap-8 mt-6 text-lg font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#experience" className="hover:underline hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:underline hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:underline hover:text-blue-400 transition">Contact</a>
        </motion.nav>
      </section>

      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >Experience</motion.h2>
        <div className="space-y-8">
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-1">Salesforce Developer Intern – Salesforce</h3>
            <p className="text-sm text-gray-500 mb-4">June 2025 – August 2025</p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Completed a comprehensive Salesforce virtual internship through SmartBridge, mastering the core CRM concepts, Lightning components, and Apex programming. Contributed to live module deployments and gained experience in agile development workflows and integration testing within the Salesforce ecosystem.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-1">WordPress Developer Intern – GaoTek Inc.</h3>
            <p className="text-sm text-gray-500 mb-4">July 2024 – Nov 2024 (Remote)</p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Worked with a remote team to develop and maintain WordPress-based websites. Focused on customizing themes, building WooCommerce modules, troubleshooting performance issues, and ensuring responsive design. Helped improve UX and cross-browser compatibility for client-facing applications.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-1">Interview Experience</h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Reached the final interview rounds at Amazon and Google for software engineering roles. These experiences challenged my understanding of system design, data structures, algorithm optimization, and behavioral problem solving. The intense preparation and feedback loops refined my technical and communication skills substantially.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >Projects</motion.h2>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mb-12">Click on a project to view code/live demo</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{proj.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="coding-profile" className="py-20 px-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >Coding Profile</motion.h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          I actively solve data structure and algorithm problems to improve my problem-solving skills and logical thinking. I have solved over <strong>800+ problems</strong> on <a href="https://leetcode.com/u/shruti_saini01/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LeetCode</a>, showcasing consistency, versatility, and deep understanding across multiple topics like dynamic programming, graphs, trees, and system design preparation. I continuously participate in contests to stay sharp and explore optimized solutions.
        </p>
      </section>

      <section id="contact" className="py-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >Connect with Me</motion.h2>
        <motion.div
          className="flex justify-center gap-8 text-2xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="https://github.com/shrutisaini01" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/shruti-saini-0b560a28a/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="mailto:shrutisaini1202@gmail.com"><Mail /></a>
        </motion.div>
      </section>
    </div>
  );
};

export default App;