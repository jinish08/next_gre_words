import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react'
import styles from '@/styles/Home.module.css'
import WordList from '@/components/WordList'
import WordCarousel from '@/components/WordCarousel'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const Set = () => {

    const router = useRouter();
    const { name } = router.query;

    const [wordData, setWordData] = useState({})
    
    useEffect(()=>{
        if(name!==undefined){
            const words = require(`@/data/${name}.json`);

            setWordData(words);
        }
        console.log(name)
    },[name])

  return (
    <main className={`${styles.main} ${inter.className}`}>
      {Object.keys(wordData).length > 0 && 
      <><div className={styles.container}>
          <WordCarousel words={wordData[`${name}`].words} />
        </div>
        <div className={styles.container}>
          <h1 className={styles.heading_1}>Word List</h1>
          <WordList words={wordData[`${name}`].words} />
        </div></>}
      </main>
  )
}

export default Set
