import React, { useState } from 'react';
import gitImage from '../assets/giphy-downsized-large.gif'; // Import the GIF

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch('https://formspree.io/f/xyzgjwak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        // Set a timeout to clear the success message after 5 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-10 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${gitImage})` }} // Use the imported variable for background image
    >
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* Overlay for better text readability */}
      <div className="relative container mx-auto z-10">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Get in Touch</h2>
        <p className="text-gray-200 mb-8 text-center">
          Feel free to reach out to me by filling the form below
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
              >
                    {success === true && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
          )}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <div className="loader">Loading...</div> // Add your loader here
            ) : (
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                style={{ width: 'max-content' }}
              >
                Send message
              </button>
            )}
          </div>
        
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
