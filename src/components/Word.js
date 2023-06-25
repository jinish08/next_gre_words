import React, { useState } from 'react'
import styles from '@/styles/WordList.module.css';

const Word = ({word}) => {

    const [seeMoreSentence, setSeeMoreSentence] = useState(false);

  return (
    <div
      className={`${styles.word_container}`}
    >

          <h2 className={styles['word']}>Word : {word.word}</h2>
          <div className={styles['meanings']}>
            <strong>Meanings:</strong>
            <ul>
                {word.meanings.map((meaning, index) => (
                    <li key={index}>{meaning}</li>
                ))}
            </ul>
          </div>
          <div className={styles['synonyms']}>
            <strong>Synonyms:</strong>
            <ul>
              {word.synonyms.map((synonym, index) => (
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
            {word.wordSentence.map((sentence, index) => (
                seeMoreSentence ? <li key={index}>{sentence}</li> : index < 1 && <li key={index}>{sentence}</li>
            //   <p key={index}>{sentence}</p>
            ))}
            </ul>
                
            {word.wordSentence.length > 1 && <button onMouseEnter={() => setSeeMoreSentence(!seeMoreSentence)}>{seeMoreSentence ? 'See Less' : 'See More'}</button>}
          </div>
        </div>
  )
}

export default Word