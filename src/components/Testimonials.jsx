import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, role, text }) => (
  <motion.div
    className="bg-gray-700 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-300 mb-6 italic text-lg">{text}</p>
    <div className="flex items-center mt-auto">
      <div className="w-16 h-16 bg-gray-500 rounded-full mr-4"></div>
      <div>
        <h4 className="text-white font-semibold text-xl">{name}</h4>
        <p className="text-gray-400 text-base">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Innovations",
      text: "Jane's organizational skills and attention to detail have been invaluable to our team. She consistently goes above and beyond in her role as an executive assistant.",
    },
    {
      name: "Sarah Smith",
      role: "CFO, Global Enterprises",
      text: "Working with Jane has significantly improved our operational efficiency. Her ability to manage complex schedules and prioritize tasks is truly impressive.",
    },
    {
      name: "Michael Johnson",
      role: "COO, StartUp Ventures",
      text: "Jane's professionalism and dedication are unmatched. She's not just an assistant, but a crucial part of our executive team.",
    },
  ];

  return (
    <section id="testimonials" className="bg-primary text-secondary py-36">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-bold mb-24 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
