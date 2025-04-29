import { useParams, Link } from 'react-router-dom';
import articlesData from '../data/articles.json';
import mother1 from '../assets/mother-1.jpg';
import mother2 from '../assets/mother-2.jpg';
import mother3 from '../assets/mother-3.jpg';
import mother4 from '../assets/mother-4.jpg';
import insta1 from '../assets/insta1.jpg';
import insta2 from '../assets/insta2.png';
import insta3 from '../assets/insta3.png';
import insta4 from '../assets/insta4.jpg';
import insta5 from '../assets/insta5.jpg';


function StoryDetail() {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === parseInt(id));
  const images = [
    mother1,
    mother2,
    mother3,
    mother4,
    mother1, // Repeat images since we only have 4; replace with new images if available
    mother2,
  ];

  if (!article) return <div className="container mx-auto p-4">Article not found</div>;

  const relatedArticle = articlesData.find((a) => a.id !== parseInt(id) && a.category === article.category);

  // Detailed descriptions for each image
  const descriptions = [
    "This image captures a tender moment between a mother and her child during a sunny Mother’s Day picnic in the park. The golden sunlight filters through the trees, casting a warm glow on their faces as they share a laugh over a homemade strawberry cake. The mother, dressed in a floral sundress, holds her child close, her eyes sparkling with joy. They sit on a checkered blanket surrounded by blooming flowers, symbolizing the love and growth that define their bond. A basket of fresh fruits and a bouquet of daisies rest nearby, adding to the festive atmosphere. This scene reflects the essence of Mother’s Day—a celebration of unconditional love, shared memories, and the simple joys of togetherness that make every moment with a mother so precious.",
    "Here, we see a family gathered around a beautifully decorated table for a Mother’s Day brunch. The table is adorned with pastel-colored tableware, a centerpiece of pink roses, and a spread of delicious treats, including pancakes, fresh berries, and mimosas. The mother, wearing a soft pink cardigan, smiles warmly as her children present her with a handmade card, their faces beaming with pride. The room is filled with natural light streaming through large windows, creating a cozy and inviting ambiance. This image encapsulates the gratitude and appreciation that Mother’s Day inspires, as families come together to honor the woman who has given them so much love and care throughout the years.",
    "In this heartfelt scene, a mother and her teenage daughter are captured planting flowers in their backyard garden on Mother’s Day. The mother kneels beside her daughter, guiding her hands as they dig into the rich soil to plant tulip bulbs. Both are dressed in casual gardening clothes, with dirt smudged on their cheeks, but their smiles reveal the joy of this shared activity. The garden is vibrant with colorful blooms—roses, daisies, and lavender—symbolizing the nurturing and growth that the mother has fostered in her daughter. A small wooden bench in the background holds a pitcher of lemonade and two glasses, hinting at a refreshing break after their hard work. This moment highlights the beauty of passing down traditions and creating new memories on Mother’s Day.",
    "This image portrays a serene Mother’s Day evening where a mother sits on a porch swing, wrapped in a cozy blanket, as the sun sets behind her. Her young son sits beside her, resting his head on her shoulder while they watch the sky turn shades of orange and pink. The porch is decorated with string lights and potted plants, creating a warm, intimate setting. A small table nearby holds a cup of chamomile tea and a photo album, suggesting they’ve spent the evening reminiscing about past memories. The tranquility of this moment reflects the deep connection between a mother and her child, where words are unnecessary, and love is felt in the quiet presence of one another—a perfect encapsulation of Mother’s Day’s essence.",
    "Here, a group of mothers from the community gathers for a special Mother’s Day crafting event. They sit around a long table covered with art supplies—colored paper, ribbons, glitter, and scissors—creating personalized gifts for each other. The room buzzes with laughter and conversation as they share stories of motherhood, their hands busy crafting heart-shaped cards and photo frames. One mother, in the foreground, proudly holds up her creation: a scrapbook page adorned with pictures of her children. The walls are decorated with banners that read ‘Happy Mother’s Day,’ and soft music plays in the background, adding to the festive mood. This image captures the spirit of community and support that Mother’s Day can inspire, bringing mothers together to celebrate their shared journey.",
    "In this final scene, a mother and her adult children surprise her with a Mother’s Day trip to a local vineyard. The mother, dressed in a wide-brimmed hat and a flowing dress, walks hand-in-hand with her daughter through rows of grapevines, while her son carries a picnic basket filled with gourmet snacks. The rolling hills stretch out in the background, bathed in the soft light of late afternoon. They stop at a shaded spot under a large oak tree, where a blanket is spread out, and they toast to their mother with glasses of sparkling wine. The laughter and love shared in this moment highlight the enduring bond of family, making this Mother’s Day a cherished memory for years to come."
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Main Article */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={images[parseInt(id) % images.length]}
            alt={article.title}
            className="w-full h-96 object-cover rounded-t-lg mb-4"
          />
          <div className="flex items-center text-xs text-gray-400 uppercase font-semibold mb-2">
            #{article.category} • {article.readingTime} minutes reading
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>By {article.author || 'Anonymous'}</span>
            <span className="mx-2">•</span>
            <span>{article.date || 'April 29, 2025'}</span>
          </div>
          <div className="text-gray-700 leading-relaxed">
            {article.content || article.excerpt}
            {/* Extended content with images and descriptions */}
            <div className="mt-6 space-y-8">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={image}
                    alt={`Mother’s Day Moment ${index + 1}`}
                    className="w-full max-w-2xl h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {descriptions[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Article */}
        {relatedArticle && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Story</h2>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={images[(parseInt(id) + 1) % images.length]}
                  alt={relatedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
                    #{relatedArticle.category} • {relatedArticle.readingTime} minutes reading
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </div>
                <Link
                  to={`/articles/${relatedArticle.id}`}
                  className="mt-2 inline-block bg-black text-white px-3 py-1 text-sm font-medium rounded hover:bg-pink-600 transition duration-300 w-max"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <footer className="mt-12 bg-gray-200 py-6 text-center">
          {/* Instagram Follow Prompt */}
          <div className="mb-4">
            <a
              href="https://www.instagram.com/yourhandle" // Replace with actual Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 inline-block rounded-t"
            >
              Follow me on Instagram
              <span className="ml-2">📸</span>
            </a>
          </div>

          {/* Placeholder Image Gallery */}
          <div className="flex justify-center space-x-4 mb-4">
  <img src={insta1} alt="Instagram 1" className="w-24 h-24 object-cover rounded" />
  <img src={insta2} alt="Instagram 2" className="w-24 h-24 object-cover rounded" />
  <img src={insta3} alt="Instagram 3" className="w-24 h-24 object-cover rounded" />
  <img src={insta4} alt="Instagram 4" className="w-24 h-24 object-cover rounded" />
  <img src={insta5} alt="Instagram 5" className="w-24 h-24 object-cover rounded" />
</div>


          {/* Navigation Links */}
          <div className="text-gray-600 space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Me</Link>
            <Link to="/categories" className="hover:underline">Categories</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Copyright Notice */}
          <p className="text-gray-500 mt-2">
            Copyright © 2025 All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default StoryDetail;