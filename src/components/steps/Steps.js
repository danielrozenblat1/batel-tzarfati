import { useEffect, useState, useRef } from 'react';
import { Award, Target, Clock, Sparkles } from 'lucide-react';
import styles from './Steps.module.css';
import Button from '../WAbutton/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

 
  const steps = [
    {
      number: 1,
      title: "התמדה",
      content: "הצלחה בעולם הריסים והביוטי דורשת התמדה.את תסיימי את הקורס שלי עם כל הכלים להצלחה - אבל אם לא תמשיכי גם כשהדברים פחות הולכים, כל מה שלמדת בקורס לא יעזור",
      icon: Clock
    },
    {
      number: 2,
      title: "נחישות",
      content: "כדי להצליח בתחום ובאמת לבנות עסק רווחי בתחום את חייבת לרצות את זה! ולא לעצור! להשיג עוד לקוחות, לדאוג להוציא אותן מרוצות,לבנות תיק עבודות איכותי וכל הזמן להשתדרג",
      icon: Target
    },
    {
      number: 3,
      title: "סבלנות",
      content: "הצלחה בתחום לא תגיע ברגע- את לא תסיימי את הקורס עם יומן מלא, חשוב להיות סבלנית - לבנות את הדברים בהדרגה ובעבודה מתמדת - כי רק ככה בונים בסיס יציב שמחזיק לאורך זמן",
      icon: Award
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Gold gradient colors
  const goldGradient = 'linear-gradient(180deg, #dbc59c 0%, #e5d4b3 50%, #dbc59c 100%)';
  const goldGradientAlt = 'linear-gradient(135deg, #dbc59c 0%, #e5d4b3 50%, #efe0c8 75%, #dbc59c 100%)';

  return <>
    <div className={styles.container}>

 
      <div className={styles.content}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear',
                background: goldGradient
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
                style={{
                  borderColor: '#dbc59c',
                  background: visibleSteps.has(step.number) 
                    ? goldGradientAlt
                    : '#FFFFFF'
                }}
              >
                <step.icon className={styles.iconStyle} size={24} 
                  color={visibleSteps.has(step.number) ? '#FFFFFF' : '#dbc59c'} />
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle} style={{ color: '#dbc59c' }}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </>
};

export default Timeline;