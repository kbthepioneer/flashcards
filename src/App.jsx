import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

const cards = [
  { question: "This field focuses on building and maintaining websites and web applications.", answer: "Web Development", difficulty: "easy" },
  { question: "This discipline involves designing, developing, and maintaining software systems.", answer: "Software Engineering", difficulty: "medium" },
  { question: "This field teaches machines to learn from data and make decisions.", answer: "Artificial Intelligence / Machine Learning", difficulty: "hard" },
  { question: "This field focuses on protecting computer systems and networks from digital attacks.", answer: "Cybersecurity", difficulty: "medium" },
  { question: "This field involves analyzing large datasets to extract insights and inform decisions.", answer: "Data Science", difficulty: "hard" },
  { question: "This field delivers computing services like storage and processing over the internet.", answer: "Cloud Computing", difficulty: "medium" },
  { question: "This practice combines software development and IT operations to speed up delivery.", answer: "DevOps", difficulty: "hard" },
  { question: "This field focuses on building applications for smartphones and tablets.", answer: "Mobile Development", difficulty: "easy" },
  { question: "This field involves designing and developing interactive video games.", answer: "Game Development", difficulty: "easy" },
  { question: "This field manages the storage, retrieval, and organization of structured data.", answer: "Database Administration", difficulty: "medium" },
  { question: "This field studies how data is transmitted between computers and devices.", answer: "Computer Networks", difficulty: "medium" },
  { question: "This field studies how people interact with computers and designs better interfaces.", answer: "Human-Computer Interaction", difficulty: "easy" },
  { question: "This field programs low-level hardware like microcontrollers and IoT devices.", answer: "Embedded Systems", difficulty: "hard" },
  { question: "This field uses cryptography and decentralized technology to record transactions.", answer: "Blockchain Development", difficulty: "hard" },
  { question: "This field enables computers to interpret and understand visual information from the world.", answer: "Computer Vision", difficulty: "hard" },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [guessResult, setGuessResult] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [cardOrder, setCardOrder] = useState(cards.map((_, i) => i));

  const currentCard = cards[cardOrder[currentIndex]];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setGuess('');
      setGuessResult('');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setGuess('');
      setGuessResult('');
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cardOrder].sort(() => Math.random() - 0.5);
    setCardOrder(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setGuess('');
    setGuessResult('');
  };

  const handleGuessSubmit = () => {
    const correct = currentCard.answer.toLowerCase().trim();
    const userGuess = guess.toLowerCase().trim();
    if (correct.includes(userGuess) || userGuess.includes(correct)) {
      setGuessResult('correct');
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) setLongestStreak(newStreak);
    } else {
      setGuessResult('incorrect');
      setCurrentStreak(0);
    }
  };

  return (
    <div className="App">
      <h1>CS Fields Flashcards</h1>
      <p>Test your knowledge of computer science fields and disciplines!</p>
      <p className="card-count">Total Cards: {cards.length}</p>

      <div className="streak-container">
        <span>🔥 Current Streak: {currentStreak}</span>
        <span>🏆 Longest Streak: {longestStreak}</span>
      </div>

      <p className="card-counter">Card {currentIndex + 1} of {cards.length}</p>

      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onFlip={handleFlip}
        difficulty={currentCard.difficulty}
      />

      <div className="guess-container">
        <input
          type="text"
          placeholder="Type your guess here..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className={`guess-input ${guessResult}`}
        />
        <button className="submit-btn" onClick={handleGuessSubmit}>Submit Guess</button>
      </div>

      {guessResult && (
        <p className={`guess-feedback ${guessResult}`}>
          {guessResult === 'correct' ? '✅ Correct!' : '❌ Incorrect, try again!'}
        </p>
      )}

      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={handleBack}
          disabled={currentIndex === 0}
        >
          ← Back
        </button>
        <button className="shuffle-btn" onClick={handleShuffle}>🔀 Shuffle</button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default App;