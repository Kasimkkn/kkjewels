import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Get in Touch</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-2xl mx-auto mb-12" delay={0.2}>
          We'd love to hear from you! Whether you have a question about our products, need assistance, or want to book a consultation, feel free to reach out.
        </AnimatedText>

        <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
                placeholder="your@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
                placeholder="Your message..."
              ></textarea>
            </div>
            <CustomButton className="w-full py-3">Send Message</CustomButton>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Contact Details</h3>
            <p className="text-gray-300 mb-2">Email: info@kkjewels.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (234) 567-8900</p>
            <p className="text-gray-300">Address: 123 Jewel Lane, Gem City, World</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;