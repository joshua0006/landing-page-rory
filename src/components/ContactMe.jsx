import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const ContactItem = ({ Icon, text, link, iconColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-lg hover:text-blue-400 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className={`text-2xl ${iconColor}`} />
    <span>{text}</span>
  </motion.a>
);

const ContactMe = () => {
  const contactInfo = [
    {
      Icon: SiGmail,
      text: "jane.doe@example.com",
      link: "mailto:jane.doe@example.com",
      iconColor: "text-red-500",
    },
    {
      Icon: AiFillFacebook,
      text: "facebook.com/janedoe",
      link: "https://facebook.com/janedoe",
      iconColor: "text-blue-600",
    },
    {
      Icon: AiOutlinePhone,
      text: "+1 (123) 456-7890",
      link: "tel:+11234567890",
      iconColor: "text-green-500",
    },
    {
      Icon: AiFillInstagram,
      text: "instagram.com/janedoe",
      link: "https://instagram.com/janedoe",
      iconColor: "text-pink-500",
    },
    {
      Icon: AiOutlineLinkedin,
      text: "linkedin.com/in/janedoe",
      link: "https://linkedin.com/in/janedoe",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <section id="contact-me" className="py-24 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl mb-12 text-center">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
