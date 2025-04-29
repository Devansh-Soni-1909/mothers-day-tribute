import { Link } from 'react-router-dom';
import mother4 from '../assets/mother-8.jpg';
import mother5 from '../assets/mother-5.jpg';
import mother6 from '../assets/mother-6.jpg';
import mother7 from '../assets/mother-7.jpg';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Contact</h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Image Placeholder (replaced with mother-4) */}
          <div className="w-full md:w-1/2">
            <img
              src={mother4}
              alt="Mother’s Day Contact"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded hover:bg-pink-600 transition duration-300"
              >
                Send
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-sm">
              Send us a message to share your Mother’s Day stories or inquiries. We’d love to hear from you!
            </p>
          </div>
        </div>

        {/* Follow me on Instagram */}
        <div className="mt-12">
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-between">
            <span>Follow me on Instagram</span>
            {/* Instagram SVG Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ... (SVG path remains unchanged) ..." />
            </svg>
          </div>

          {/* Updated Image Previews */}
          <div className="mt-4 flex space-x-4 justify-center">
            <img src={mother5} alt="Mother 5" className="w-24 h-24 object-cover rounded shadow" />
            <img src={mother6} alt="Mother 6" className="w-24 h-24 object-cover rounded shadow" />
            <img src={mother7} alt="Mother 7" className="w-24 h-24 object-cover rounded shadow" />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>Mother’s Day Tribute</p>
          <div className="mt-2 space-x-4">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <Link to="/about" className="hover:text-pink-600">About</Link>
            <Link to="/categories" className="hover:text-pink-600">Categories</Link>
            <Link to="/contact" className="hover:text-pink-600">Contact</Link>
          </div>
          <p className="mt-2">© 2025 All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
