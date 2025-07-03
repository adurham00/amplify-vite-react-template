// FlipCard.tsx
import './FlipCard.css';

type FlipCardProps = {
  image: string;
  alt: string;
  content: string;
};

function FlipCard({ image, alt, content }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="rounded-wrapper"></div>
        <div className="flip-card-front">
          <div className="image-border-wrapper"></div>
          <img src={image} alt={alt} />
        </div>
        <div className="flip-card-back">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
