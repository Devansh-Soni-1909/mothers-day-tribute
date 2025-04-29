import { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import CategoryCard from '../components/CategoryCard';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import articlesData from '../data/articles.json';

// Import Instagram images from src/assets
import insta1 from '../assets/insta1.jpg';
import insta2 from '../assets/insta2.png';
import insta3 from '../assets/insta3.png';
import insta4 from '../assets/insta4.jpg';
import insta5 from '../assets/insta5.jpg';

const Home = () => {
  const [articles, setArticles] = useState(articlesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [...new Set(articlesData.map((article) => article.category))];

  useEffect(() => {
    let filtered = articlesData;
    if (selectedCategory) {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setArticles(filtered);
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="bg-white">
      {/* Carousel Section */}
      <Carousel articles={articles.slice(0, 3)} />

      <div className="container mx-auto p-4">
        {/* Category Section */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-pink-500 after:mx-auto after:mt-2">
            Explore by Category
          </h2>
          <p className="text-sm text-gray-500 mt-2">Discover heartfelt stories in every category</p>
        </div>

        {/* Centering the Category Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-0">
            {categories.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>

        {/* Recent Tributes Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Tributes</h2>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <Sidebar />
        </div>

        {/* Follow Me on Instagram Section */}
        <div className="bg-gradient-to-r from-pink-200 via-rose-100 to-peach-100 py-12 mt-16">
          <div className="container mx-auto text-center text-gray-800">
            <h2 className="text-3xl font-bold mb-6">Follow Me on Instagram</h2>
            <p className="text-lg mb-8">Stay connected with more creative content!</p>

            {/* Instagram Images */}
            <div className="flex justify-center gap-6 overflow-x-auto pb-4 px-4">
              <img src={insta1} alt="Instagram photo 1" className="rounded-xl shadow-md w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
              <img src={insta2} alt="Instagram photo 2" className="rounded-xl shadow-md w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
              <img src={insta3} alt="Instagram photo 3" className="rounded-xl shadow-md w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
              <img src={insta4} alt="Instagram photo 4" className="rounded-xl shadow-md w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
              <img src={insta5} alt="Instagram photo 5" className="rounded-xl shadow-md w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side: Website Name & Copyright */}
          <div className="text-sm">
            <p>© 2025 Mother's Day Tribute. All Rights Reserved.</p>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="space-x-6">
            <a href="#about" className="hover:text-pink-500">About</a>
            <a href="#categories" className="hover:text-pink-500">Categories</a>
            <a href="#contact" className="hover:text-pink-500">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
