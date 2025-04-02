import styles from "./Works.module.css"
import result1 from "../../images/בתאל צרפתי עבודות 1.png"
import result2 from "../../images/בתאל צרפתי עבודות 2.png"
import result3 from "../../images/בתאל צרפתי עבודות 3.png"
import result4 from "../../images/בתאל צרפתי עבודות 4.png"
import result5 from "../../images/בתאל צרפתי עבודות 5.png"
import result6 from "../../images/בתאל צרפתי עבודות 6.png"
import result7 from "../../images/בתאל צרפתי עבודות 7.png"
import result8 from "../../images/בתאל צרפתי עבודות 8.png"
import result9 from "../../images/בתאל צרפתי עבודות 9.png"
import result10 from "../../images/בתאל צרפתי עבודות 10.png"
import result11 from "../../images/בתאל צרפתי עבודות 11.png"
import result12 from "../../images/בתאל צרפתי עבודות 12.png"
import result13 from "../../images/בתאל צרפתי עבודות 13.png"
import result14 from "../../images/בתאל צרפתי עבודות 14.png"

import result16 from "../../images/בתאל צרפתי עבודות 16.png"
import result17 from "../../images/בתאל צרפתי עבודות 17.png"
import result18 from "../../images/בתאל צרפתי עבודות 18.png"
import result19 from "../../images/בתאל צרפתי עבודות 19.png"
import result20 from "../../images/בתאל צרפתי עבודות 20.png"
import result21 from "../../images/בתאל צרפתי עבודות 21.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../WAbutton/Button"
const Works=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
       
        
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
     
        {
          type: 'image',
          src: result16,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'image',
          src: result18,
        },
        {
          type: 'image',
          src: result19,
        },
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title} >טיפלתי במאות נשים</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`בתאל צרפתי לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

</>


}
export default Works