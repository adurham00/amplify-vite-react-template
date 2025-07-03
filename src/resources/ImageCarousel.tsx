import { useEffect, useState } from 'react';
import './ImageCarousel.css';

const images = [
  '/images/photo1.jpg', /*placeholderimages*/
  '/images/photo2.jpg',
  '/images/photo3.jpg',
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="carousel">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`slide ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;
