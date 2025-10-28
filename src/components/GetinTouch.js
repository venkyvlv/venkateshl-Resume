import React, { useState } from "react";
import gitImage from "../assets/giphy-downsized-large.gif"; // Background animation

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
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
      {/* Dark glass overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>

      {/* Floating gradient glows */}
      <div className="absolute top-[10%] left-[5%] w-[25vw] h-[25vw] bg-[#ffb80040] rounded-full blur-3xl animate-glow-slow"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#63a24140] rounded-full blur-3xl animate-glow-slow"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-tight text-white drop-shadow-lg">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mb-10">
          I’d love to collaborate! Drop your details below ✨
        </p>

        {/* Glassy Form */}
        <form
          onSubmit={handleSubmit}
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

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {["name", "email", "phone", "subject"].map((field, i) => (
              <div key={i}>
                <label
                  htmlFor={field}
                  className="block text-gray-200 font-semibold mb-2 capitalize"
                >
                  {field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border border-white/20 
                            focus:border-[#ffb800] focus:ring-2 focus:ring-[#ffb800]/30 
                            outline-none transition-all duration-300"
                  required={field !== "phone"}
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-200 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md bg-white/5 text-gray-100 border border-white/20 
                        focus:border-[#ffb800] focus:ring-2 focus:ring-[#ffb800]/30 
                        outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
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
                <span className="absolute inset-0 bg-gradient-to-r from-[#ffb800] to-[#63a241] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
