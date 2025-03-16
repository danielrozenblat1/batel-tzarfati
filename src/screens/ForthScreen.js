import React from 'react';
import { 
  Wallet, 
  Home, 
  Clock, 
  Heart, 
  Crown, 
  TrendingUp,
  Users,
  Star
} from 'lucide-react';
import styles from './ForthScreen.module.css';
import Button from '../components/WAbutton/Button';

const BackgroundGlass = () => {
  const items = [
    {
      text: "את מאוהבת בעולם הביוטי ורוצה להתפרנס ממנו",
      icon: <Heart className={styles.icon} />
    },

  
    {
        text: "את מבינה שהצלחה דורשת התמדה והשקעה",
        icon: <Home className={styles.icon} />
      },

    {
        text: "את שירותית ואוהבת לעבוד עם אנשים",
        icon: <Users className={styles.icon} />
      },

    {
        text: "את עצמאית ורוצה להרחיב את סל השירותים שלך",
        icon: <Star className={styles.icon} />
      },
 
 
    {
      text: "את יודעת שהצלחה לא באה ברגע ומאמינה בתהליך",
      icon: <TrendingUp className={styles.icon} />
    }
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>

        <h1 className={styles.title}>הקורס מתאים לך אם</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="בתאל אני מתאימה!"/>
    </div>
  </>;
};

export default BackgroundGlass;