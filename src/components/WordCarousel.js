import React, { useState, useEffect } from 'react';
import styles from '@/styles/WordCarousel.module.css';

const WordCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [seeMoreSentence, setSeeMoreSentence] = useState(false);

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      onCardClick();
        event.preventDefault();
    } else if (event.code === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
      setIsFlipped(false);
    } else if (event.code === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
      setIsFlipped(false);
    }
  };

  const onCardClick = () => {
    setIsFlipped(!isFlipped);
    setSeeMoreSentence(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isFlipped]);

  const currentWord = words[currentIndex];
  
  return (
    <div className={styles['word-carousel']}  onClick={onCardClick}>
      <div className={`${styles['card']} ${isFlipped ? styles['flipped'] : ''}`}>
        <div className={`${styles['card-front']} ${styles['card-side']}`}>
          <h2 className={styles['word']}>{currentWord.word}</h2>
        </div>
        <div className={`${styles['card-back']} ${styles['card-side']}`}>
             <h2 className={styles['word']}>{currentWord.word}</h2>
          <div className={styles['meanings']}>
            <strong>Meanings:</strong>
            <ul>
                {currentWord.meanings.map((meaning, index) => (
                    <li key={index}>{meaning}</li>
                ))}
            </ul>
          </div>
          <div className={styles['synonyms']}>
            <strong>Synonyms:</strong>
            <ul>
              {currentWord.synonyms.map((synonym, index) => (
                synonym.map((syn, ind) => (
                    <li key={ind}>{syn}</li>
                )
                )
              ))}
            </ul>
          </div>
          <div className={styles['word-sentence']}>
          <strong>Sentences:</strong>
          <ul>
            {currentWord.wordSentence.map((sentence, index) => (
                seeMoreSentence ? index < 3 && <li key={index}>{sentence}</li> : index < 1 && <li key={index}>{sentence}</li>
            ))}
            </ul>
                
            {currentWord.wordSentence.length > 1 && <button onMouseEnter={() => setSeeMoreSentence(!seeMoreSentence)}>{seeMoreSentence ? 'See Less' : 'See More'}</button>}
          </div>
        </div>
      </div>
      <div className={styles.progress}>
      <div className={styles['progress']}>
        Word {currentIndex + 1} of {words.length}
      </div>
        <div
          className={styles.progressBar}
          style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
        ></div>
      </div>
      
    </div>
  );
};

export default WordCarousel;
