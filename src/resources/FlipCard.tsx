import './FlipCard.css';


function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/images/photo1.jpg" alt="Front Side" />
        </div>
        <div className="flip-card-back">
          <p>Back Side Content</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
