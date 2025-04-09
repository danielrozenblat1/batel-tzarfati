import Sillabus from "../components/silabus/Sillabus"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
   <div className={styles.title}>במהלך המסע המקצועי שלי</div>
    <div className={styles.description}>נתקלתי בעשרות עבודות שגויות של חוסר מקצועיות שהובילו לתקלות אצל לקוחות שהגיעו אלי לתיקונים</div>
    <div className={styles.description}>וגם בלא מעט עצמאיות שעברו קורסים ששיטת הלימוד בהם פשוט לא התאימה להן ושיתפו אותי שהן מרגישות שהן עדיין לא מוכנות </div>
    <div className={styles.title}>לכן הקמתי את</div>
    <h1 className={styles.Specialtitle}>PRO LASH ACADEMY</h1>
    <div className={styles.description}>כדי להעניק לכל מי שמאוהבת בתחום ורוצה להפוך אותו לקריירה</div>
    <div className={styles.title}>את המעטפת המקצועית, הטכנית והאישית שתוביל להצלחה שלה</div>

<Sillabus/> 
</>


}
export default ThirdScreen