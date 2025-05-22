
import React from 'react';
import { motion } from 'framer-motion';
import { useJoinForm } from '@/hooks/useJoinForm';
import JoinForm from '@/components/JoinForm';

const JoinSection = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleSubmit
  } = useJoinForm();

  return (
    <section id="join" className="py-20 bg-bso-blue text-white clip-slant">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6"
          >
            Join Our Club
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200"
          >
            Sign up to receive updates about upcoming meetups, tournaments, and Button Soccer news in Orlando.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <JoinForm
              formData={formData}
              isSubmitting={isSubmitting}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              handleCheckboxChange={handleCheckboxChange}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
