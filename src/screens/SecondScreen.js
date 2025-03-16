import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import boss from "../Icons/wired-outline-406-study-graduation-hover-pinch (2).json"
import time from "../Icons/wired-outline-973-appointment-schedule-hover-click.json"
import female from "../Icons/wired-outline-633-female-standing-hover-success (4).json"
import coins from "../Icons/wired-outline-298-coins-loop-spin.json"
import Timeline from "../components/steps/Steps"
const SecondScreen=()=>{


    return <>
    <div className={styles.title} id="קורס">אם את כאן</div>
    <div className={styles.description}>את מאוהבת בתחום הביוטי והבנת את הפוטנציאל שלו או שאפילו עשית צעד ואת כבר עוסקת בתחום, אבל לאחרונה הגעת למסקנה</div>
    <div className={styles.Specialtitle}>הזמן שלך יכול להיות שווה יותר</div>
    <div className={styles.description}>(ואני לא מדברת רק על הכסף)</div>
    <div className={styles.title}>את יכולה</div>
    <div className={styles.row}>

<SmallBox text="לנהל את הזמן שלך עם הלקוחות בדיוק כמו שאת רוצה" icon={time}/>
<SmallBox text="להגשים את עצמך ולעשות מה שאת אוהבת בכל יום מחדש" icon={female}/>
</div>
<div className={styles.row}>
<SmallBox text="להגיע לסכומים יפים במינימום זמן" icon={coins}/>
<SmallBox text="לנהל את עצמך בלי אף בוס מעלייך" icon={boss}/>
</div>
<div className={styles.title}>אבל חשוב לי להדגיש</div>
<div className={styles.description}>להיות עצמאית בתחום הביוטי מביא איתו הרבה יתרונות וזה יכול להצטייר כמושלם <strong>אבל אני לא מתכוונת למכור לך חלום ורוד</strong></div>

<div className={styles.title}>זה ידרוש ממך</div>    
<Timeline/>
   

       {/* סילבוס */}

  
           </>
}
export default SecondScreen