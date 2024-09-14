import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, FileText, Rocket } from 'lucide-react';
import { Footer, Header } from './page.jsx';

const ProgressSection = ({ icon, title, content }) => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold ml-4 text-purple-400">{title}</h3>
    </div>
    <p className="text-gray-300 text-lg">{content}</p>
  </motion.div>
);

const ProgressPage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4 ">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Progress Journey
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center mb-12 text-purple-300"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Week 1-2 Update (September 1-14, 2024)
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-300 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The first two weeks of September have been crucial in laying the groundwork for Tri-Valley Tech. We've made significant strides in addressing community needs, building our team, and setting the stage for future success. Here's a detailed look at our progress:
          </motion.p>

          <ProgressSection
            icon={<CheckCircle size={32} className="text-purple-500" />}
            title="Addressing The Problem"
            content="We noticed that while the Tri-Valley area had a strong tech presence, students were missing out on real exposure to the industry. Schools offered little courses and opportunities to apply practical skills to technological problems. Our goal was simple: create a platform that would help students get involved in actual projects, giving them a chance to learn through action."
          />

          <ProgressSection
            icon={<Users size={32} className="text-purple-500" />}
            title="Assembling a Team"
            content="Recruiting the right people on the team was important. We didn’t need a huge team; we just needed a group who were willing to put in the work and were passionate about addressing gaps in tech education. Our founding team, each with their own specialization, all had a common understanding of what students needed to succeed. This mix of expertise shaped how we approached our programs."
          />

          <ProgressSection
            icon={<Target size={32} className="text-purple-500" />}
            title="Setting Clear, Practical Goals"
            content="To start out endeavors, we’ve set clear, achievable goals. We first asked ourselves: “What do we need to do to make an impact? For now, we’re focusing on a few initiatives, such as organizing teams for innovative products that help students gain practical experience, while also engaging with technology in a way that schools don’t provide. These projects are still in the planning phase, but we are sure that they offer students experiences’ that will genuinely help them move forward in their tech careers."
          />

          <ProgressSection
            icon={<FileText size={32} className="text-purple-500" />}
            title="Legal and Structural Setup"
            content="To start a nonprofit, a lot of paperwork has to be done, like filing for 501(c)(3) status, setting up a board, and establishing financial processes. These have been essential steps in building the sustainable organization we have today. By handling these logistical elements now, we’re ensuring that we’ll have a strong foundation to support our future projects."
          />

          <ProgressSection
            icon={<Rocket size={32} className="text-purple-500" />}
            title="Early Stages and Next Steps"
            content="We’re still in the early stages of building Tri-Valley Tech. While we’ve begun to set up projects and form teams, there’s still a lot of work ahead. Our focus right now is on refining our projects/organization to make sure we have the best resources to run them effectively. We may not have launched our first big projects yet, but  we’re confident that what we’re building will have a lasting impact on students in our community!"
          />

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;