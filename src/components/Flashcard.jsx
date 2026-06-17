const Flashcard = (props) => {
  return (
    <div className={`flashcard-container ${props.difficulty}`} onClick={props.onFlip}>
      <div className={`flashcard-inner ${props.isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <span className={`difficulty-badge ${props.difficulty}`}>
            {props.difficulty.toUpperCase()}
          </span>
          <p>{props.question}</p>
        </div>
        <div className="card-back">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;