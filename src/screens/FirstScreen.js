import React, { useState, useEffect } from 'react';


import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import learn from "../Icons/wired-outline-406-study-graduation-hover-pinch (2).json"
import treatment from "../Icons/wired-outline-1582-aroma-spa-hover-pinch.json"
import middleImage from "../images/בתאל צרפתי תמונה מרכזית.png";
import rightImage from "../images/בתאל צרפתי תמונה ימין.png"
import leftImage from "../images/בתאל צרפתי תמונה שמאל.png"
import GradientLoader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>BATEL ZARFATI</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני רוצה ללמוד את התחום" icon={learn} to="קורס"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={treatment} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;