import React,{useState} from 'react';
import styles from '@/styles/WordList.module.css';
import Word from './Word';

const WordList = ({ words }) => {

 

  return (
    <div className={styles['word-list']}>
      {words.map((word, index) => (
        <Word word={word} key={index}/>
      ))}
    </div>
  );
};

export default WordList;
