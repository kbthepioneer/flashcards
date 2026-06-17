const Flashcard = (props) => {
  return (
    <div className="flashcard-container" onClick={props.onFlip}>
      <div className={`flashcard-inner ${props.isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
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