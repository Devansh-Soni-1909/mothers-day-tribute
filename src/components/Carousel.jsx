import { useState } from 'react';
import { Link } from 'react-router-dom';
import mother1 from '../assets/mother-1.jpg';
import mother2 from '../assets/mother-2.jpg';
import mother3 from '../assets/mother-3.jpg';

function Carousel({ articles }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % articles.length);
  const prevSlide = () => setCurrent((current - 1 + articles.length) % articles.length);

  if (!articles || articles.length === 0) return null;

  const customImages = [mother1, mother2, mother3];

  return (
    <div className="relative w-full h-[450px] bg-gray-100">
      <div className="w-full h-full overflow-hidden">
        <img
          src={customImages[current % customImages.length]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover object-center"
        />
        <Link to={`/articles/${articles[current].id}`}>
          <div className="absolute inset-0 flex items-center justify-start p-8">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <h2 className="text-3xl font-bold text-gray-800">{articles[current].title}</h2>
              <p className="text-gray-600 mt-2">{articles[current].excerpt}</p>
              <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-pink-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </Link>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
      >
        →
      </button>
    </div>
  );
}

export default Carousel;