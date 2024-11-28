import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Submitted', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-7 h-7 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">foneshack@123gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-7 h-7 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-7 h-7 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">123 Tech Lane, Innovation City</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
          </div>

          {/* Contact Form Section */}
          <div className="p-12 bg-gray-800">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-400 mb-8">
                  Have a question? We'd love to hear from you. Send us a message!
                </p>

                {/* Name Input */}
                <div className="relative flex items-center space-x-4">
                  <User className="w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full py-3 bg-transparent text-white border-b-2 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } focus:border-cyan-500 transition duration-300 outline-none`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                {/* Email Input */}
                <div className="relative flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full py-3 bg-transparent text-white border-b-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } focus:border-cyan-500 transition duration-300 outline-none`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                {/* Phone Input */}
                <div className="relative flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className={`w-full py-3 bg-transparent text-white border-b-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    } focus:border-cyan-500 transition duration-300 outline-none`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                {/* Message Input */}
                <div className="relative flex items-center space-x-4">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full py-3 bg-transparent text-white border-b-2 ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } focus:border-cyan-500 transition duration-300 outline-none resize-none`}
                  ></textarea>
                </div>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full hover:from-cyan-600 hover:to-blue-600 transition duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-green-500">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-400">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mx-auto block px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
