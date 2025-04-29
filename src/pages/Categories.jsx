import { Link } from 'react-router-dom';
import articlesData from '../data/articles.json';
import mother8 from '../assets/mother-8.jpg';
import mother2 from '../assets/mother-2.jpg';
import mother6 from '../assets/mother-6.jpg';
import mother5 from '../assets/mother-5.jpg';

function Categories() {
  // Define the specific categories
  const categories = ['Stories', 'Inspiration', 'Health'];

  // Placeholder images from Unsplash (replace these URLs with your own images later)
  const images = [
    mother8,
       mother2,
       mother6,
       mother5
  ];

  // Filter and prepare articles for each category
  const getCategoryArticles = (category) => {
    const filtered = articlesData.filter((article) => article.category.toLowerCase() === category.toLowerCase());
    // Ensure exactly 8 articles per category (duplicate or use fallback if needed)
    if (filtered.length >= 8) {
      return filtered.slice(0, 8);
    } else {
      return [...filtered, ...Array(8 - filtered.length).fill(filtered[0] || {
        id: 'placeholder',
        title: 'Placeholder Article',
        excerpt: 'This is a placeholder article. Replace with actual content.',
        category: category,
      })].slice(0, 8);
    }
  };

  // Combine articles for Stories (8), Inspiration (8), and Health (8)
  const storiesArticles = getCategoryArticles('Stories');
  const inspirationArticles = getCategoryArticles('Inspiration');
  const healthArticles = getCategoryArticles('Health');

  // Merge all articles to ensure 16 total cards (8 Stories + 8 Inspiration + 8 Health, but limit to 16 for display)
  const allArticles = [
    ...storiesArticles,
    ...inspirationArticles,
    ...healthArticles,
  ].slice(0, 16);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
          Explore Categories
        </h1>

        {/* Categories Sections */}
        {categories.map((category, index) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allArticles
                .filter((article) => article.category.toLowerCase() === category.toLowerCase())
                .map((article, idx) => (
                  <div
                    key={`${article.id}-${idx}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      src={images[idx % images.length]}
                      alt={article.title}
                      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{article.title}</h3>
                      <p className="text-gray-600 mt-3 line-clamp-2 text-sm">{article.excerpt}</p>
                      <Link
                        to={`/articles/${article.id}`}
                        className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Follow me on Instagram */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">Follow me on Instagram</span>
            <svg
              className="w-8 h-8 transform transition-transform duration-300 hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.059 2.316.295 3.133.634.924.396 1.69.97 2.443 1.722.752.752 1.326 1.52 1.722 2.443.339.817.575 1.767.634 3.133.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.059 1.366-.295 2.316-.634 3.133-.396.924-.97 1.69-1.722 2.443-.752.752-1.52 1.326-2.443 1.722-.817.339-1.767.575-3.133.634-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.059-2.316-.295-3.133-.634-.924-.396-1.69-.97-2.443-1.722-.752-.752-1.326-1.52-1.722-2.443-.339-.817-.575-1.767-.634-3.133-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.059-1.366.295-2.316.634-3.133.396-.924.97-1.69 1.722-2.443.752-.752 1.52-1.326 2.443-1.722.817.339 1.767-.575 3.133-.634 1.266-.058 1.646-.07 4.85-.07zm0 1.363c-3.168 0-3.567.013-4.817.07-1.214.056-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817s.013 3.567.07 4.817c.056 1.214.267 2.045.583 2.766.345.796.803 1.46 1.458 2.114.654.653 1.318 1.113 2.114 1.458.721.316 1.552.527 2.766.583 1.25.057 1.649.07 4.817.07s3.567-.013 4.817-.07c1.214-.057 2.045-.267 2.766-.583.796-.345 1.46-.803 2.114-1.458.653-.654 1.113-1.318 1.458-2.114.316-.721.527-1.552.583-2.766.057-1.25.07-1.649.07-4.817s-.013-3.567-.07-4.817c-1.214.057-2.045.267-2.766.583-.796.345-1.46.803-2.114 1.458-.653.654-1.113 1.318-1.458 2.114-.316.721-.527 1.552-.583 2.766-.057 1.25-.07 1.649-.07 4.817zm0 5.838c-2.686 0-4.862 2.176-4.862 4.862s2.176 4.862 4.862 4.862 4.862-2.176 4.862-4.862-2.176-4.862-4.862-4.862zm0 7.725c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm5.338-9.587c0 .638-.518 1.156-1.156 1.156-.638 0-1.156-.518-1.156-1.156 0-.638.518-1.156 1.156-1.156.638 0 1.156.518 1.156 1.156z" />
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
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
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
    </div>
  );
}

export default Categories;