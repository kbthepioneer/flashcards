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
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCard);
    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <h1>CS Fields Flashcards</h1>
      <p>Test your knowledge of computer science fields and disciplines!</p>
      <p className="card-count">Total Cards: {cards.length}</p>
      <Flashcard
        question={cards[currentCard].question}
        answer={cards[currentCard].answer}
        isFlipped={isFlipped}
        onFlip={handleFlip}
        difficulty={cards[currentCard].difficulty}
      />
      <button className="next-btn" onClick={handleNextCard}>Next Card →</button>
    </div>
  );
}

export default App;