import React from 'react';
import styles from './Me.module.css';
import batel from "../../images/בתאל צרפתי תדמית.png";

const AboutMe = () => {
  return (
    <>
    <div className={styles.header} id="מי אני">אני כאן כדי להפוך אותך למומחית!</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={batel} alt="בתאל צרפתי" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>נעים להכיר, אני בתאל צרפתי.</h1>
        <div className={styles.subtitle}>"אני מאמינה שכל אישה יכולה למצוא את הדרך האישית שלה להצלחה — במיוחד בתחום היופי."</div>
  
        <p className={styles.description}>
        אחרי שנים של עבודה מעשית, הבנתי שאין קיצורי דרך: הצלחה אמיתית מגיעה מלמידה, התמדה ועשייה.
אני כאן כדי להראות לך את הדרך להפוך את הכישרון שלך לעסק יציב ורווחי, עם הדרכה צמודה, כלים פרקטיים וליווי מכל הלב.
אם את מוכנה להשקיע בעצמך, יחד נוכל לבנות את הסיפור המצליח שלך
        </p>
        <p className={styles.description}>
ולאחר המון שנים של צפייה מהצד החלטתי לקחת את הידע שיש לי בתחום צעד אחד קדימה ולתת ממנו לכל מי שמעוניינת לצמוח, אם את רוצה להוביל ולא רק לחלום-אני כאן להראות לך איך.
        </p>
 
  
      </div>
    </div>

  </>
  );
};

export default AboutMe;