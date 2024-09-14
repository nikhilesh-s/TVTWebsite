import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Header, Footer } from './page.jsx';

// Import SVG files
import tutoringIcon from './images/tutoring.svg';
import legalIcon from './images/legal.svg';
import legIcon from './images/leg.svg';
import showerIcon from './images/shower.svg';
import spellIcon from './images/spell.svg';
import shortcutIcon from './images/shortcut.svg';
import sandIcon from './images/sand.svg';
import aiAgentIcon from './images/ai-agent.svg';

const ProjectCard = ({ project, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      layout
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto flex items-center justify-center bg-gray-700 p-4">
          <img 
            src={project.icon}
            alt={project.name} 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">{project.name}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((category, index) => (
              <span key={index} className="bg-purple-600 text-white px-2 py-1 rounded text-sm">
                {category}
              </span>
            ))}
          </div>
          <button 
            onClick={toggleOpen}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            <span className="ml-2">{isOpen ? 'Less Info' : 'Learn More'}</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <p className="text-gray-300">{project.extendedDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Tutoring Application",
      description: "Connect students with tutors for online lessons, featuring secure messaging and resource sharing.",
      categories: ["Education", "Communication", "Online Learning"],
      extendedDescription: "This comprehensive platform facilitates real-time communication, lesson planning, and resource sharing between students and tutors. Users can create profiles, schedule sessions, and conduct online lessons, making it a valuable tool for educational support.",
      icon: tutoringIcon
    },
    {
      id: 2,
      name: "Legal Freelance Application",
      description: "Streamline the process of hiring freelance lawyers for quick, on-demand legal tasks.",
      categories: ["Legal Tech", "Freelancing", "Document Management"],
      extendedDescription: "This app allows clients to upload documents for review or signing, while lawyers can browse and accept jobs that match their expertise. It facilitates secure document sharing and efficient communication, ensuring prompt and professional legal assistance.",
      icon: legalIcon
    },
    {
      id: 3,
      name: "Leg Band for Muscular Health",
      description: "Wearable device with sensors and LEDs to provide real-time feedback on leg muscular health.",
      categories: ["Health Tech", "Wearables", "Fitness"],
      extendedDescription: "Targeted at athletes, the elderly, and health enthusiasts, this device tracks and displays data on leg muscular health. The accompanying mobile app provides insights, tracks progress, and offers tailored advice for optimal leg health.",
      icon: legIcon
    },
    {
      id: 4,
      name: "Water-Saving Shower Head",
      description: "Smart shower head that uses computer vision or sensors to conserve water by targeting spray.",
      categories: ["Smart Home", "Water Conservation", "IoT"],
      extendedDescription: "This innovative shower head detects the user's position and only sprays water where needed. The control app allows users to customize their shower experience, adjust settings, and access additional features, promoting water conservation.",
      icon: showerIcon
    },
    {
      id: 5,
      name: "Spell Corrector Application",
      description: "Autonomous spell correction app using a lightweight language model for context-based corrections.",
      categories: ["Productivity", "AI", "Language Processing"],
      extendedDescription: "This application offers advanced features like custom corrections, word shortening, and multi-key input. It aims to enhance typing efficiency and accuracy across various digital devices.",
      icon: spellIcon
    },
    {
      id: 6,
      name: "Custom Shortcut Google Extension",
      description: "Browser extension for creating custom keyboard shortcuts with chatbot assistance.",
      categories: ["Browser Extension", "Productivity", "Automation"],
      extendedDescription: "This extension allows users to create shortcuts for various actions, including website navigation. It features a chatbot to help users describe and generate corresponding shortcuts, improving productivity and personalizing web browsing.",
      icon: shortcutIcon
    },
    {
      id: 7,
      name: "Sand Filter Robot",
      description: "Autonomous robot designed to clean beaches by filtering sand and removing debris.",
      categories: ["Robotics", "Environmental", "Automation"],
      extendedDescription: "Equipped with sensors and a filtration system, this robot navigates beaches to remove rocks and garbage. It can be programmed and monitored via a control app, making it an efficient tool for maintaining clean and safe beaches.",
      icon: sandIcon
    },
    {
      id: 8,
      name: "AI Agent Platform",
      description: "Platform for setting up, using, and sharing custom AI agents for various tasks.",
      categories: ["AI", "Productivity", "Automation"],
      extendedDescription: "This user-friendly platform allows creation and management of AI agents for tasks like scheduling, research, and communication. Users can share and receive different agent structures, enhancing productivity across various domains.",
      icon: aiAgentIcon
    }
  ];

  const toggleProject = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-20 px-4 mt-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-purple-400 mb-12">Our Projects</h1>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isOpen={openProjectId === project.id}
                toggleOpen={() => toggleProject(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export { ProjectsPage };
export default ProjectsPage;