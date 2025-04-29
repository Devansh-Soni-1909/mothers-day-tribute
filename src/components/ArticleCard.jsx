import { Link } from 'react-router-dom';
import mother1 from '../assets/mother-1.jpg';
import mother2 from '../assets/mother-2.jpg';
import mother3 from '../assets/mother-3.jpg';
import mother4 from '../assets/mother-4.jpg';
import mother5 from '../assets/mother-5.jpg';
import mother6 from '../assets/mother-6.jpg';
import mother7 from '../assets/mother-7.jpg';
import mother8 from '../assets/mother-8.jpg';
import mother9 from '../assets/mother-9.jpg';

function ArticleCard({ article }) {
  // Map of image paths to imported images
  const imageMap = {
    '../assets/mother-1.jpg': mother1,
    '../assets/mother-2.jpg': mother2,
    '../assets/mother-3.jpg': mother3,
    '../assets/mother-4.jpg': mother4,
    '../assets/mother-5.jpg': mother5,
    '../assets/mother-6.jpg': mother6,
    '../assets/mother-7.jpg': mother7,
    '../assets/mother-8.jpg': mother8,
    '../assets/mother-9.jpg': mother9,
  };

  // Get the correct image based on article.imageUrl, default to mother1 if not found
  // Assign images 5 to 9 to articles 1 to 5 based on ID
  const articleImage = imageMap[article.imageUrl] || imageMap[`../assets/mother-${(article.id + 4) % 9 || 5}.jpg`];

  return (
    <div className="flex items-start gap-6 border-b pb-8 mb-8">
      {/* Image */}
      <div className="flex-shrink-0 w-64 h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={articleImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
            #{article.category} • {article.readingTime} minutes reading
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 leading-snug mb-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <Link
          to={`/articles/${article.id}`}
          className="mt-4 inline-block bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-pink-600 transition duration-300 w-max"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;