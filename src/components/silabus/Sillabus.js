import React, { useState } from 'react';
import { Scissors, Sparkles, Book, TrendingUp, Users, HelpCircle, Zap, Repeat, LayoutGrid, Compass, Activity, Target, Camera } from 'lucide-react';
import styles from './Sillabus.module.css';

const Sillabus = () => {
  const [activeDay, setActiveDay] = useState(1);

  // Course data with icons for each item
  const courseData = [
    {
      day: 1,
      title: "יום ראשון",
      content: [
        { text: "הקדמה והבנת ההבדלים בשיטות", icon: <Book size={18} /> },
        { text: "הסבר על השיטה הקלאסית, נפח, ומה מבדל משאר השיטות הקיימות בתחום", icon: <Compass size={18} /> },
        { text: "הכרה עם סוגי הריסים השונים", icon: <LayoutGrid size={18} /> },
        { text: "הצגת כלים, חומרים ומגוון סוגים הקיימים בתחום", icon: <Scissors size={18} /> },
        { text: "הסבר על מבנה עיניים מבנה הריסים, טכניקות שונות והדבקה נכונה", icon: <TrendingUp size={18} /> },
        { text: "תרגול של השיטה הקלאסית", icon: <Activity size={18} /> }
      ]
    },
    {
      day: 2,
      title: "יום שני",
      content: [
        { text: "המשך תרגול השיטה הקלאסית", icon: <Repeat size={18} /> },
        { text: "חזרה על עקרונות הבסיס", icon: <Book size={18} /> },
        { text: "טיפים לשיפור ביצועים (הבנת זוויות, זמן הדבקה, טכניקות מתקדמות)", icon: <Sparkles size={18} /> },
        { text: "עבודה על דגמים שונים של ריסים (אורך, גודל ועובי)", icon: <LayoutGrid size={18} /> },
        { text: "עבודה על מודליסטית", icon: <Users size={18} /> },
        { text: "מענה לשאלות ופתרון בעיות", icon: <HelpCircle size={18} /> }
      ]
    },
    {
      day: 3,
      title: "יום שלישי",
      content: [
        { text: "הקדמה לשיטת הנפח", icon: <Zap size={18} /> },
        { text: "הסבר על שיטת הנפח והשוני מהשיטה הקלאסית", icon: <Compass size={18} /> },
        { text: "התאמה למבנה העיניים כולל טכניקות שונות", icon: <Target size={18} /> },
        { text: "טכניקות של יצירת נפח - שיטת עבודה", icon: <TrendingUp size={18} /> },
        { text: "תרגול מעשי של טכניקת הנפח עם שליטה על אחידות ועבודה נכונה ויסודית", icon: <Activity size={18} /> }
      ]
    },
    {
      day: 4,
      title: "יום רביעי",
      content: [
        { text: "הצגת כלים, צבעים ושיטות מתקדמות (אפקטים, נפח דינמי, שילובי צבעים)", icon: <Scissors size={18} /> },
        { text: "תרגול של בניית ריסים על מודליסטית (כולל זמן עבודה והתמודדות עם תקלות אפשריות)", icon: <Users size={18} /> },
        { text: "טיפים למיומנויות שיווקיות (צילום, יצירת קשר עם לקוחות, שמירה על נאמנות)", icon: <Camera size={18} /> }
      ]
    }
  ];

  return (
    <div className={styles.sillabusContainer}>
      <div className={styles.sillabusInner}>
        <div className={`${styles.designElement} ${styles.topLeft}`}></div>
        <div className={`${styles.designElement} ${styles.topRight}`}></div>
        <div className={`${styles.designElement} ${styles.bottomLeft}`}></div>
        <div className={`${styles.designElement} ${styles.bottomRight}`}></div>
        
        <h1 className={styles.sillabusMainTitle}>קורס הדרכת הארכת ריסים</h1>
        <p className={styles.sillabusDescription}>לחצי על כל יום כדי לדעת מה הוא מכיל</p>
        
        {/* Day tabs */}
        <div className={styles.dayTabs}>
          {courseData.map((day) => (
            <button
              key={day.day}
              className={`${styles.dayTab} ${activeDay === day.day ? styles.active : ''}`}
              onClick={() => setActiveDay(day.day)}
            >
              {day.title}
              {activeDay === day.day && <span className={styles.activeIndicator}></span>}
            </button>
          ))}
        </div>
        
        {/* Day content */}
        <div className={styles.dayContent}>
          {courseData.filter(day => day.day === activeDay).map((day) => (
            <div 
              key={day.day} 
              className={`${styles.dayPanel} ${styles.active}`}
            >
              <h2 className={styles.dayTitle}>{day.title}</h2>
              <ul className={styles.dayItems}>
                {day.content.map((item, index) => (
                  <li 
                    key={index} 
                    className={styles.dayItem}
                    style={{ '--item-index': index }}
                  >
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <span className={styles.itemText}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.glassHighlight}></div>
      </div>
    </div>
  );
};

export default Sillabus;