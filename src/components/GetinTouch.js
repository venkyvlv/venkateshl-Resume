import React, { useState } from "react";
import gitImage from "../assets/giphy-downsized-large.gif";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod Schema (phone required)
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone must be exactly 10 digits")
    .max(10, "Phone must be exactly 10 digits")
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch("https://formspree.io/f/xyzgjwak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(null), 5000);
      } else setSuccess(false);
    } catch (error) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${gitImage})` }}
    >
      {/* 🕶️ Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>

      {/* 🌈 Floating glow accents */}
      <div className="absolute top-[10%] left-[5%] w-[25vw] h-[25vw] bg-[#ffb80040] rounded-full blur-3xl animate-glow-slow"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#63a24140] rounded-full blur-3xl animate-glow-slow"></div>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-tight text-white drop-shadow-lg">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mb-10">
          I’d love to collaborate! Drop your details below ✨
        </p>

        {/* 🪟 Glassy Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_8px_50px_rgba(0,0,0,0.4)] 
                     p-8 transition-all duration-700 hover:bg-white/15 hover:shadow-[0_12px_80px_rgba(0,0,0,0.5)]"
        >
          {success === true && (
            <p className="text-green-400 text-center mb-4 font-semibold animate-fade-in">
              ✅ Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-400 text-center mb-4 font-semibold animate-fade-in">
              ❌ Failed to send message. Please try again.
            </p>
          )}

          {/* Inputs grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-gray-200 font-semibold mb-2">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                className={`w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border ${
                  errors.name
                    ? "border-red-400 focus:ring-red-500"
                    : "border-white/20 focus:border-[#ffb800]"
                } focus:ring-2 focus:ring-[#ffb800]/30 outline-none transition-all duration-300`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 font-semibold mb-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className={`w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border ${
                  errors.email
                    ? "border-red-400 focus:ring-red-500"
                    : "border-white/20 focus:border-[#ffb800]"
                } focus:ring-2 focus:ring-[#ffb800]/30 outline-none transition-all duration-300`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* 📱 Phone */}
            <div>
              <label className="block text-gray-200 font-semibold mb-2">
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="10-digit number"
                className={`w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-500"
                    : "border-white/20 focus:border-[#ffb800]"
                } focus:ring-2 focus:ring-[#ffb800]/30 outline-none transition-all duration-300`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-200 font-semibold mb-2">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                className={`w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border ${
                  errors.subject
                    ? "border-red-400 focus:ring-red-500"
                    : "border-white/20 focus:border-[#ffb800]"
                } focus:ring-2 focus:ring-[#ffb800]/30 outline-none transition-all duration-300`}
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-200 font-semibold mb-2">
              Message
            </label>
            <textarea
              {...register("message")}
              rows="5"
              className={`w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border ${
                errors.message
                  ? "border-red-400 focus:ring-red-500"
                  : "border-white/20 focus:border-[#ffb800]"
              } focus:ring-2 focus:ring-[#ffb800]/30 outline-none transition-all duration-300 resize-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            {loading ? (
              <div className="loader mx-auto"></div>
            ) : (
              <button
                type="submit"
                className="relative bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] text-white 
                          font-semibold py-3 px-8 rounded-full overflow-hidden
                          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]
                          hover:scale-105 hover:shadow-[0_0_40px_#ffb80080]"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
