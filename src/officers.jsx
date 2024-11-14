import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import { useState } from 'react';

// Import officer images
import officer1Image from './images/amir.png';
import officer2Image from './images/sida.webp';
import officer3Image from './images/nik.webp';
import officer4Image from './images/Arjun.png';

const officerData = [
  {
    id: 1, // Unique identifier
    name: "Amir Eftekhar",
    role: "CEO",
    image: officer1Image,
    description: "As the CEO of Tri-Valley Tech, I lead the charge in turning visionary ideas into impactful real-world projects. With extensive experience in web app development, curriculum design, and teaching coding classes, I bring a unique blend of technical expertise and leadership to our organization. I manage and oversee all of our projects, ensuring that every team member has a clear role and contributes to our mission. My hands-on approach not only drives the success of the organization but also inspires our members to push boundaries, develop new skills, and become the next generation of tech innovators.At Tri-Valley Tech, I make it my priority to create a welcoming collaborative environment where learning meets innovation. Through mentoring, technical guidance, and strategic planning, I ensure that we consistently deliver reconstitutive educational experiences. From organizing cross-functional teams to delivering cutting-edge projects, my focus remains on fostering talent and maximizing every student's potential in the world of engineering and technology."
  },
  {
    id: 2,
    name: "Nikhilesh Suravarjjala",
    role: "COO",
    image: officer3Image,
    description: "As the Chief Operating Officer at Tri-Valley Tech, I’m deeply involved in every aspect of our projects, from planning to execution. My role requires me to manage logistics across all initiatives, ensuring that timelines, resources, and quality standards are met consistently. I collaborate closely with teams on each project, not only coordinating their efforts but also actively contributing my expertise in coding, web development, and strategic planning. This hands-on approach allows me to support our members in overcoming technical challenges while keeping everything running smoothly behind the scenes.One of my key responsibilities is mentoring other members to improve their productivity and technical skills. I work closely with team members, guiding them in refining their coding practices, enhancing web development projects, and optimizing workflows. I believe that productivity isn’t just about working faster—it’s about working smarter, and I take pride in fostering an environment where everyone can grow and contribute meaningfully.My background in leadership, event management, and problem-solving helps me stay organized under pressure, ensuring that all of our projects meet deadlines without sacrificing quality. At Tri-Valley Tech, I’m committed to helping my fellow students achieve real-world impact through innovative projects. By working on every project and mentoring others along the way, I aim to lead by example, empowering our team to not only develop their technical skills but also take ownership of their work and drive meaningful results. "
  },
  {
    id: 3,
    name: "Siddharth Alluri",
    role: "CFO",
    image: officer2Image,
    description: "As the CFO at Tri-Valley Tech, I manage our finances to make sure our innovative projects are well-funded. My job is to ensure that our financial decisions support our mission of giving students practical, real-world experience.I handle budgeting and resource allocation, working closely with our executive team to make sure we use our funds wisely. This ensures students have the tools and resources they need to engage in their engineering projects that help them learn and grow.At Tri-Valley Tech, we aim to create an environment where students gain the technical skills needed to succeed in the tech industry, while ensuring our resources are effectively managed to support their learning."
  },
  {
    id: 4,
    name: "Arjun Chakraborty",
    role: "CLO",
    image: officer4Image,
    description: "As the Chief Logistics Officer at Tri-Valley Tech, I oversee the logistical framework that ensures the execution of our projects. My role demands a balance of strategic planning and logistical oversight, managing the company's daily functions while driving long-term growth. I collaborate across departments, aligning team efforts with our broader goals, and ensuring that we consistently meet quality standards.A significant part of my responsibility is streamlining processes and improving efficiency across projects. My focus is on fostering a culture of logistical excellence, where innovation and efficiency go hand in hand. By ensuring that our logistics are well-coordinated, I make sure our output is maximized and leverage that for better opportunities.My approach is grounded in the belief that logistical success depends on a well-supported team. By cultivating a collaborative environment and leading by example, I help our team stay organized, innovative, and motivated to achieve real-world impact."
  }
];

const OfficerCard = ({ officer, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={officer.image} 
          alt={officer.name} 
          className="w-full h-[32rem] md:h-[36rem] lg:h-[40rem] object-cover transition duration-300 transform hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold px-4 text-center">{officer.role}</p>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-purple-400 mb-2">{officer.name}</h3>
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm flex-grow overflow-hidden"
            >
              {officer.description}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 1, height: 'auto' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm line-clamp-3 flex-grow overflow-hidden"
            >
              {officer.description}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-purple-400 hover:text-purple-300 transition-colors duration-300 self-start"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

const OfficersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-20 mt-20">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-transparent pb-13 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Officers
        </motion.h1>
        {/* Added 'items-start' to prevent grid items from stretching to the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {officerData.map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficersPage;
