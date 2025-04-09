import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import boss from "../Icons/wired-outline-406-study-graduation-hover-pinch (2).json"
import time from "../Icons/wired-outline-973-appointment-schedule-hover-click.json"
import female from "../Icons/wired-outline-633-female-standing-hover-success (4).json"
import coins from "../Icons/wired-outline-298-coins-loop-spin.json"
import Timeline from "../components/steps/Steps"
import Button from "../components/WAbutton/Button"
const SecondScreen=()=>{


    return <>
    <div className={styles.title} id="קורס">רוצה להפוך למומחית בהארכת ריסים ולבנות קריירה מצליחה?</div>
    <div className={styles.description}>אם את כאן כנראה שאת מאוהבת בתחום הביוטי והבנת את הפוטנציאל שלו או שאפילו עשית צעד ואת כבר עוסקת בתחום, אבל לאחרונה הגעת למסקנה</div>
    <div className={styles.title}>שזה הזמן לקחת את הכשרון שלך לרמה הבאה</div>
    <div className={styles.title} style={{textDecoration:"underline"}}>ולהרוויח כמו שמגיע לך!</div>
    <div className={styles.description}>(ואני לא מדברת רק על הכסף)</div>
    <div className={styles.title}>את יכולה</div>
    <div className={styles.row}>

<SmallBox text="לנהל את הזמן שלך עם הלקוחות בדיוק כמו שאת רוצה" icon={time}/>
<SmallBox text="להגשים את עצמך ולעשות מה שאת אוהבת בכל יום מחדש" icon={female}/>
</div>
<div className={styles.row}>
<SmallBox text="להרוויח יותר בפחות זמן עם טכניקות עבודה יעילות!" icon={coins}/>
<SmallBox text="להנות מעסק עצמאי ורווחי בלי להיות תלויה באף אחד!" icon={boss}/>
</div>
<Button text="לחצי כאן כדי לשמוע עוד!"/>
<div className={styles.title}>להצליח בתחום הריסים זה אפשרי - אבל חשוב לדעת ש...</div>
<div className={styles.description}>להיות עצמאית בתחום הביוטי מביא איתו הרבה יתרונות ואני כאן כדי לתת לך את כל הכלים להצליח, <strong>אבל ההצלחה תלויה גם בך!</strong></div>

<div className={styles.title}>אם את מוכנה להשקיע בעצמך ולהפוך את החלום למציאות -</div>   
<div className={styles.Specialtitle}>זה בדיוק המקום בשבילך!</div>   
<Timeline/>
   

       {/* סילבוס */}

  
           </>
}
export default SecondScreen