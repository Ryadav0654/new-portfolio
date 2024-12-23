"use client";
import Input from "@/components/Input";
import React from "react";
import { useForm, SubmitHandler, Field } from "react-hook-form";
import { motion } from "framer-motion";
interface IFormInput {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IFormInput>();

  // Handle form submission
  const onSubmit:SubmitHandler<IFormInput> = (data) => {
    console.log(data); // Handle form submission (e.g., send email or API request)
  };

  return (
    <section
      style={{
        backgroundImage:
          'url("https://img.pikbest.com/wp/202346/ui-ux-design-abstract-geometric-background-featuring-3d-rendered-squares-and-cylinders-for-web-social-media_9627452.jpg!sw800")',
        backgroundSize: "cover",
      }}
      className="min-h-screen w-full flex items-center justify-center bg-opacity-50 relative">
      <div className="min-h-screen w-full  py-10 px-20  bg-black bg-opacity-35 ">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 lg:px-36 lg:gap-20">
        {/* Left Side: Tech Quote (hidden on tablet and mobile) */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 hidden lg:block">
          <h1 className="text-4xl font-bold text-center lg:text-left text-white/90 mb-6">
            "Technology is best when it brings people together."
          </h1>
          <p className="text-lg text-gray-200/75 text-center lg:text-left">
            – Matt Mullenweg
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div 
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        // whileHover={{ scale: 1.05, zIndex: 100, transition: { duration: 0.3, ease: "easeInOut" }}}
        className="lg:w-1/2 w-full p-6 rounded-3xl shadow-md shadow-gray-400 backdrop-blur-sm ">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                id="name"
                placeholder="Ravindra"
                labelName="Full Name"
                {...register("name", { required: "Full Name is required" })}
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                id="email"
                labelName="Email"
                placeholder="hello@gmail.com"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm lg:text-lg font-bold text-black mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={4}
                className={`w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:ring-2 text-black font-semibold focus:ring-blue-500`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message?.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05, zIndex: 100, transition: { duration: 0.3, ease: "easeInOut" }}}
              type="submit"
              style={{backgroundImage: "linear-gradient(90deg, #0072ff 0%, #00d4ff 100%"}}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition text-base lg:text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;