import React, { useState } from 'react';
import styles from './FifthScreen.module.css';
import Button from '../components/WAbutton/Button';
import { Users, Award, Info, Plus, Minus } from 'lucide-react';
import acne1 from "../images/טיפול אקנה.jpg"
import acne2 from "../images/טיפול אקנה 2.jpg"

const ServiceCard = ({ title, description, suitableFor, benefits, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`${styles.serviceCard} ${isOpen ? styles.open : ''}`} 
      onClick={(e) => {
        // עצירת ה-toggleOpen אם לחצו על הכפתור עצמו (למניעת הפעלה כפולה)
        if (!e.target.closest(`.${styles.toggleButton}`)) {
          toggleOpen();
        }
      }}
    >
      <div className={styles.serviceHeader}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <button 
          className={styles.toggleButton} 
          onClick={(e) => {
            e.stopPropagation();
            toggleOpen();
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "סגור מידע" : "פתח מידע"}
        >
          {isOpen ? (
            <Minus size={18} strokeWidth={2} />
          ) : (
            <Plus size={18} strokeWidth={2} />
          )}
        </button>
      </div>

      <div className={`${styles.serviceContentWrapper} ${isOpen ? styles.visible : ''}`}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceDescription}>
            <div className={styles.questionBlock}>
              <p>
                <span className={styles.iconWrapper}>
                  <Info size={16} strokeWidth={1.5} />
                </span>
                <strong>מטרת הטיפול</strong>
                <span>{description}</span>
              </p>
            </div>
            <div className={styles.questionBlock}>
              <p>
                <span className={styles.iconWrapper}>
                  <Users size={16} strokeWidth={1.5} />
                </span>
                <strong>למי זה מתאים?</strong>
                <span>{suitableFor}</span>
              </p>
            </div>
            <div className={styles.questionBlock}>
              <p>
                <span className={styles.iconWrapper}>
                  <Award size={16} strokeWidth={1.5} />
                </span>
                <strong>מה זה מעניק?</strong>
                <span>{benefits}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageGallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image} alt={`${title} result ${index + 1}`} className={styles.resultImage} />
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button 
            text="לעוד פרטים" 
            message={`היי בתאל, אשמח לשמוע עוד על ${title}`} 
          />
        </div>
      </div>
    </div>
  );
};

const MyServices = () => {
  const services = [
    {
      title: "טיפול באקנה",
      description: "עור חלק ובריא. את הטיפול נתאים לפי סוג ומצב העור לאחר אבחון מקצועי.",
      suitableFor: "מנערים/ות ועד מבוגרים כל מי שסובל מאקנה, רוזצאה, סבוריאה ועור בעייתי.",
      benefits: "איזון בלוטות החלב, הפחתת דלקת, שיקום והרגעת העור לתוצאה חלקה ובריאה.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    },
    {
      title: "אפילציה",
      description: "הסרת שיער לצמיתות בטכנולוגיה מדויקת",
      suitableFor: "לכל סוגי העור והשיער, כולל שיער בהיר, פלומתי ועיקש.",
      benefits: "פתרון ממוקד וקבוע באמצעות מחט חשמלית, הרס שורש השערה למניעת צמיחה חוזרת.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    },
    {
      title: "טיפול בצלקות",
      description: "שיקום מרקם וטקסטורה בעור. את הטיפול נתאים לסובלים מצלקות אקנה, פוסט אקנה (כתמים).",
      suitableFor: "למעוניינות בשיקום מרקם וטקסטורה בעור, טשטוש צלקות ועיבוי העור.",
      benefits: "טשטוש צלקות, שיפור מרקם וגוון העור ועידוד חידוש לעומק העור.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    },
    {
      title: "טיפול בפיגמנטציה",
      description: "איזון וגוון אחיד. את הטיפול נתאים לאחר אבחון סוג הפיגמנטציה.",
      suitableFor: "לסובלות מכתמי שמש, גיל, הורמונים או פוסט-אקנה.",
      benefits: "הבהרת כתמים, איזון ייצור המלנין, חידוש תאים ושיפור מרקם העור למראה זוהר ואחיד.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    },
    {
      title: "טיפול אנטי-אייג'",
      description: "מיצוק העור, טשטוש קמטוטים, חידוש ואיחוד גוון העור. הטיפול מסייע בהאטת סימני הגיל, מיצוק העור ושיפור הקמטוטים.",
      suitableFor: "לכל מי שמעוניינת לטפל בעור ולהימנע ״מזריקות״.",
      benefits: "עידוד ייצור קולגן, הגברת גמישות ולחות, שיפור קמטוטים ושיפור מרקם וגוון העור למראה רענן וזוהר.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    },
    {
      title: "Face yoga",
      description: "עור בריא יותר, שיפור בריאות העור באופן טבעי ללא חומרים חיצוניים",
      suitableFor: "למעוניינים בשיפור טבעי של מראה העור ושרירי הפנים.",
      benefits: "הרקמות העמוקות מתעוררות לחיים, מערכת הניקוז הלימפטי מתחילה לעבוד ביעילות, שרירי הפנים המכווצים משתחררים, זרימת הדם משתפרת, הפחתת נפיחויות ודלקות קלות, שיפור הקמטוטים ניכר לעין.",
      images: [
        acne1,
        acne1,
        acne2,
        acne2
      ]
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;