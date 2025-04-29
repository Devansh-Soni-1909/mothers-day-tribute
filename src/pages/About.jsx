import { Link } from 'react-router-dom';
import mother8 from '../assets/mother-8.jpg';
import mother2 from '../assets/mother-2.jpg';
function About() {
  // Placeholder images from Unsplash (replace these URLs with your own images later)
  const images = [
    mother8,
    mother2
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My name is <span className="text-pink-600">Devansh Soni</span></h2>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-600 hover:text-pink-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gray-600 hover:text-pink-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.059 2.316.295 3.133.634.924.396 1.69.97 2.443 1.722.752.752 1.326 1.52 1.722 2.443.339.817.575 1.767.634 3.133.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.059 1.366-.295 2.316-.634 3.133-.396.924-.97 1.69-1.722 2.443-.752.752-1.52 1.326-2.443 1.722-.817.339-1.767.575-3.133.634-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.059-2.316-.295-3.133-.634-.924-.396-1.69-.97-2.443-1.722-.752-.752-1.326-1.52-1.722-2.443-.339-.817-.575-1.767-.634-3.133-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.059-1.366.295-2.316.634-3.133.396-.924.97-1.69 1.722-2.443.752-.752 1.52-1.326 2.443-1.722.817-.339 1.767-.575 3.133-.634 1.266-.058 1.646-.07 4.85-.07zm0 1.363c-3.168 0-3.567.013-4.817.07-1.214.056-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817s.013 3.567.07 4.817c.056 1.214.267 2.045.583 2.766.345.796.803 1.46 1.458 2.114.654.653 1.318 1.113 2.114 1.458.721.316 1.552.527 2.766.583 1.25.057 1.649.07 4.817.07s3.567-.013 4.817-.07c1.214-.057 2.045-.267 2.766-.583.796-.345 1.46-.803 2.114-1.458.653-.654 1.113-1.318 1.458-2.114.316-.721.527-1.552.583-2.766.057-1.25.07-1.649.07-4.817s-.013-3.567-.07-4.817c-1.214.057-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817zm0 5.838c-2.686 0-4.862 2.176-4.862 4.862s2.176 4.862 4.862 4.862 4.862-2.176 4.862-4.862-2.176-4.862-4.862-4.862zm0 7.725c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm5.338-9.587c0 .638-.518 1.156-1.156 1.156-.638 0-1.156-.518-1.156-1.156 0-.638.518-1.156 1.156-1.156.638 0 1.156.518 1.156 1.156z" />
              </svg>
            </a>
          </div>
          <p className="text-lg text-gray-600 italic">Celebrating the timeless love of mothers through heartfelt stories and inspiration.</p>
        </section>

        {/* Images Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={images[0]}
              alt="Mother's Day 1"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src={images[1]}
              alt="Mother's Day 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Text Section */}
        <section className="mb-16">
          <p className="text-gray-700 leading-relaxed text-lg">
            I’m Devansh Soni, the creator behind this Mother’s Day Tribute blog. My passion for celebrating the incredible women who shape our lives led me to start this platform, where I share heartfelt stories, inspiration, and health tips dedicated to mothers everywhere. Whether it’s through personal anecdotes, uplifting ideas, or practical advice, my goal is to honor the unconditional love and strength of mothers.<br/><br/>
            This blog is a space for everyone who wants to appreciate and celebrate the mothers in their lives. From sharing touching stories that remind us of a mother’s sacrifices to offering inspiration for meaningful Mother’s Day gestures, I aim to create content that resonates deeply. I also focus on health and wellness, providing tips to help mothers thrive at every stage of life.<br/><br/>
            Join me on this journey to celebrate the heart of every family—the mother. Let’s make every day a tribute to their endless love and dedication.
          </p>
        </section>

        {/* Follow me on Instagram */}
        <section className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">Follow me on Instagram</span>
            <svg
              className="w-8 h-8 transform transition-transform duration-300 hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.059 2.316.295 3.133.634.924.396 1.69.97 2.443 1.722.752.752 1.326 1.52 1.722 2.443.339.817.575 1.767.634 3.133.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.059 1.366-.295 2.316-.634 3.133-.396.924-.97 1.69-1.722 2.443-.752.752-1.52 1.326-2.443 1.722-.817.339-1.767.575-3.133.634-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.059-2.316-.295-3.133-.634-.924-.396-1.69-.97-2.443-1.722-.752-.752-1.326-1.52-1.722-2.443-.339-.817-.575-1.767-.634-3.133-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.059-1.366.295-2.316.634-3.133.396-.924.97-1.69 1.722-2.443.752-.752 1.52-1.326 2.443-1.722.817-.339 1.767-.575 3.133-.634 1.266-.058 1.646-.07 4.85-.07zm0 1.363c-3.168 0-3.567.013-4.817.07-1.214.056-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817s.013 3.567.07 4.817c.056 1.214.267 2.045.583 2.766.345.796.803 1.46 1.458 2.114.654.653 1.318 1.113 2.114 1.458.721.316 1.552.527 2.766.583 1.25.057 1.649.07 4.817.07s3.567-.013 4.817-.07c1.214-.057 2.045-.267 2.766-.583.796-.345 1.46-.803 2.114-1.458.653-.654 1.113-1.318 1.458-2.114.316-.721.527-1.552.583-2.766.057-1.25.07-1.649.07-4.817s-.013-3.567-.07-4.817c-1.214.057-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817zm0 5.838c-2.686 0-4.862 2.176-4.862 4.862s2.176 4.862 4.862 4.862 4.862-2.176 4.862-4.862-2.176-4.862-4.862-4.862zm0 7.725c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm5.338-9.587c0 .638-.518 1.156-1.156 1.156-.638 0-1.156-.518-1.156-1.156 0-.638.518-1.156 1.156-1.156.638 0 1.156.518 1.156 1.156z" />
            </svg>
          </div>
          <div className="mt-6 flex space-x-6 justify-center">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Instagram ${idx + 1}`}
                className="w-28 h-28 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 py-8">
        <p className="text-lg font-medium">Mother’s Day Tribute</p>
        <div className="mt-4 space-x-6">
          <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">About</Link>
          <Link to="/categories" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">Categories</Link>
          <Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">Contact</Link>
        </div>
        <p className="mt-4 text-sm">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default About;