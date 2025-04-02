import React from 'react';
import styles from './Me.module.css';
import batel from "../../images/בתאל צרפתי תדמית.jpeg";

const AboutMe = () => {
  return (
    <>
    <div className={styles.header} id="מי אני">אני כאן כדי להפוך אותך למומחית!</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={batel} alt="בתאל צרפתי" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>בתאל צרפתי</h1>
        <div className={styles.subtitle}>"אני מאמינה שלכל אחת מגיע למצוא את הדרך האישית שלה להצלחה"</div>
  
        <p className={styles.description}>
          את המסע שלי בעולם הביוטי התחלתי כמו רבות מאיתנו - מתוך אהבה לתחום ורצון להתפרנס ממשהו שאני באמת נהנית לעשות. גם אני הייתי שם, מחפשת את הדרך שלי בין קורסים, ניסיונות, הצלחות ואתגרים. מה שלמדתי בדרך הוא שלא כולן לומדות באותו אופן, ושלפעמים החלק החשוב ביותר הוא להבין שלא כולן לומדות ומיישמות באותה הצורה ואת האותה השיטה.
        </p>
        <p className={styles.description}>
ולאחר המון שנים של צפייה מהצד החלטתי לקחת את הידע שיש לי בתחום צעד אחד קדימה ולתת ממנו לכל מי שמעוניינת לצמוח 
        </p>
  
      </div>
    </div>

  </>
  );
};

export default AboutMe;