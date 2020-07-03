import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import '../../assets/styles/components/AboutUs.scss';

import Recomendation from './Recomendation/Recomendation'
import Arrows from './Recomendation/Arrows'

const CourseRecomendation = () => {

    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.'

    const [ValueX,setX] = useState(0)
  
    const goLeft = () =>{
      ValueX === 0 ? setX(-100* (sliderArr.length - 3)) : setX(ValueX+100);
    }
    
    const goRight = () =>{
      ValueX === -100 * (sliderArr.length - 3) ? setX(0) : setX(ValueX-100)
    }

    let sliderArr = [
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
                <Recomendation text={text} ValueX={ValueX}/>,
    ]

    return(
    <section className="course__recomendation">
        <div className="course__recomendation__inside">
            <h5 className="course__recomendation__inside__title">Recomendaciones</h5>
            <div className="course__recomendation__inside__box slide slide--course">
            {sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slider">
                    {item}
                    </div>
                )
            })}
        </div>
    </div>
        <Arrows total={sliderArr.length - 2} goRight={goRight} goLeft={goLeft} ValueX={ValueX}/>
    </section>
)}
export default CourseRecomendation;
