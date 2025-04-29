import { Link } from 'react-router-dom';
import authorImage from '../assets/author.jpeg'; // Make sure the image is available in this path

function Sidebar() {
  return (
    <aside className="p-4">
      {/* Author Profile */}
      <div className="bg-pink-50 p-6 pt-12 rounded-2xl shadow-md mb-6 border-l-4 border-rose-400 relative">
        {/* Circular Author Photo */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={authorImage}
            alt="Author"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        <div className="text-center mt-4">
          <h3 className="text-2xl font-semibold text-rose-700">Devansh Soni</h3>
          <p className="text-sm text-gray-700 mt-2">
            Devoted to honoring the strength, compassion, and stories of mothers through this heartfelt tribute blog.
          </p>
        </div>

        {/* Follow Me Section */}
        <div className="mt-6 border-t pt-4 text-center">
          <h4 className="text-md font-medium text-rose-600 mb-2">Follow Me</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 text-gray-600 hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v14H0V8zm7.5 0h4.5v2.25h.063c.625-1.188 2.156-2.438 4.438-2.438 4.75 0 5.625 3.125 5.625 7.188V22h-5V15.5c0-1.563-.031-3.563-2.188-3.563-2.188 0-2.531 1.719-2.531 3.438V22h-5V8z" />
              </svg>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-6 h-6 text-gray-600 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.793 23.399c.6.111.82-.26.82-.577v-2.234c-3.338.724-4.042-1.415-4.042-1.415-.546-1.384-1.333-1.752-1.333-1.752-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.071 1.833 2.809 1.303 3.494.996.108-.776.419-1.304.763-1.603-2.665-.302-5.466-1.333-5.466-5.933 0-1.311.468-2.382 1.236-3.222-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.654 1.655.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.222 0 4.61-2.804 5.628-5.476 5.922.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.825.577A12.003 12.003 0 0 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Highlights / Destinations */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-400">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Explore</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <Link to="/categories/stories" className="hover:text-rose-600 transition-colors duration-300">
              ❤️ Heartfelt Stories
            </Link>
          </li>
          <li>
            <Link to="/categories/inspiration" className="hover:text-rose-600 transition-colors duration-300">
              🎁 Mother’s Day Gift Ideas
            </Link>
          </li>
          <li>
            <Link to="/categories/health" className="hover:text-rose-600 transition-colors duration-300">
              🌿 Wellness & Self-care
            </Link>
          </li>
          <li>
            <Link to="/categories/letters" className="hover:text-rose-600 transition-colors duration-300">
              ✉️ Open Letters
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
