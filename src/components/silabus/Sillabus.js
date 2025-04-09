import React, { useState } from 'react';
import { Scissors, Sparkles, Book, TrendingUp, Users, HelpCircle, Zap, Repeat, LayoutGrid, Compass, Activity, Target, Camera, Clock, Calendar, Star } from 'lucide-react';
import styles from './Sillabus.module.css';

const Sillabus= () => {
  // Course data with icons for each item
  const courseData = [
    {
      day: "01",
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
      day: "02",
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
      day: "03",
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
      day: "04",
      title: "יום רביעי",
      content: [
        { text: "הצגת כלים, צבעים ושיטות מתקדמות (אפקטים, נפח דינמי, שילובי צבעים)", icon: <Scissors size={18} /> },
        { text: "תרגול של בניית ריסים על מודליסטית (כולל זמן עבודה והתמודדות עם תקלות אפשריות)", icon: <Users size={18} /> },
        { text: "טיפים למיומנויות שיווקיות (צילום, יצירת קשר עם לקוחות, שמירה על נאמנות)", icon: <Camera size={18} /> }
      ]
    }
  ];

  const courseInfo = [
    { text: "4 ימי לימוד מרוכזים", icon: <Calendar size={18} /> },
    { text: "8 שעות ביום", icon: <Clock size={18} /> },
    { text: "תעודה מוכרת", icon: <Star size={18} /> }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>קורס הדרכת הארכת ריסים</h1>
          
          <div className={styles.infoGrid}>
            {courseInfo.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <span className={styles.infoIcon}>{info.icon}</span>
                <span className={styles.infoText}>{info.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.daysContainer} dir="rtl">
          {courseData.map((day) => (
            <div key={day.day} className={`${styles.dayCard} ${styles[`day0${day.day}`]}`}>
              <div className={styles.dayHeader}>
                <div className={styles.dayNumber}>{day.day}</div>
                <h2 className={styles.dayTitle}>{day.title}</h2>
              </div>
              
              <div className={styles.itemList}>
                {day.content.map((item, index) => (
                  <div 
                    key={index} 
                    className={styles.item}
                  >
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <span className={styles.itemText}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sillabus