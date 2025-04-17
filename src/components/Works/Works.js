import styles from "./Works.module.css"
import result1 from "../../images/בתאל צרפתי עבודות 1.png"
import result2 from "../../images/בתאל צרפתי עבודות 2.png"
import result3 from "../../images/בתאל צרפתי עבודות 3.png"



import result7 from "../../images/בתאל צרפתי עבודות 7.png"


import result10 from "../../images/בתאל צרפתי עבודות 10.png"
import result11 from "../../images/בתאל צרפתי עבודות 11.png"

import result13 from "../../images/בתאל צרפתי עבודות 13.png"


import result16 from "../../images/בתאל צרפתי עבודות 16.png"

import result18 from "../../images/בתאל צרפתי עבודות 18.png"

import result20 from "../../images/בתאל צרפתי עבודות 20.png"
import result21 from "../../images/בתאל צרפתי ריסים חדש 2.png"
import result22 from "../../images/בתאל צרפתי ריסים חדש 3.png"
import result23 from "../../images/בתאל צרפתי ריסים חדש 4.png"
import result24 from "../../images/בתאל צרפתי ריסים חדש 5.png"
import result25 from "../../images/בתאל צרפתי ריסים חדש 6.png"
import result26 from "../../images/בתאל צרפתי ריסים חדש 7.png"
import result27 from "../../images/בתאל צרפתי ריסים חדש 8.png"
import result28 from "../../images/בתאל צרפתי ריסים חדש 1.png"
import result29 from "../../videos/בתאל צרפתי ריסים 9.mp4"
import result30 from "../../images/בתאל צרפתי ריסים חדש 10.png"
import result31 from "../../images/בתאל צרפתי ריסים חדש 11.png"
import result32 from "../../images/בתאל צרפתי ריסים חדש 12.png"
import result33 from "../../images/בתאל צרפתי ריסים חדש 13.png"
import result34 from "../../images/בתאל צרפתי ריסים חדש 14.png"
import result35 from "../../images/בתאל צרפתי ריסים חדש 15.png"
import result36 from "../../images/בתאל צרפתי ריסים חדש 16.png"
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
          type: 'video',
          src: result29,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result20,
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
          src: result11,
        },
        {
          type: 'image',
          src: result35,
        },
        {
          type: 'image',
          src: result24,
        },
        {
          type: 'image',
          src: result25,
        },
        {
          type: 'image',
          src: result21,
        },
        {
          type: 'image',
          src: result22,
        },
        {
          type: 'image',
          src: result23,
        },
        {
          type: 'image',
          src: result36,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result26,
        },
        {
          type: 'image',
          src: result27,
        },
        {
          type: 'image',
          src: result28,
        },
        {
          type: 'image',
          src: result30,
        },
        {
          type: 'image',
          src: result34,
        },
        {
          type: 'image',
          src: result16,
        },
    
        {
          type: 'image',
          src: result18,
        },
        {
          type: 'image',
          src: result31,
        },
      
        {
          type: 'image',
          src: result32,
        },
        {
          type: 'image',
          src: result33,
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