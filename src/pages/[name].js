import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react'
import styles from '@/styles/Home.module.css'
import WordList from '@/components/WordList'
import WordCarousel from '@/components/WordCarousel'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const Set = () => {

    const router = useRouter();
    let { name } = router.query;
    //make first letter uppercase
    const displayName = name?.charAt(0).toUpperCase() + name?.slice(1);
    name = name?.split(' ').join('');

    const [wordData, setWordData] = useState({})
    
    useEffect(()=>{
        if(name!==undefined){
            //const words = require(`@/data/${name}.json`); //giving error
            const words = require(`../data/${name}.json`);

            setWordData(words);
        }
        console.log(name)
    },[name])

    const isMobile = () => {
        if (typeof window !== "undefined") {
          return window.matchMedia("(max-width: 768px)").matches;
        }
        return false;
      };

  return (
    <main className={`${styles.main} ${inter.className}`}>
      {isMobile() && name && 
      <div className={styles.container}>
          <h1>{displayName}</h1>
          </div>
      }
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
