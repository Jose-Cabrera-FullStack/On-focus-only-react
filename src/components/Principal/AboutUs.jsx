import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/AboutUs.scss';

import Teacher from './Teachers/Teacher'
import Arrows from './Teachers/Arrows'

const AboutUs = () => {
  
  const [ValueX,setX] = useState(0)
  
  const goLeft = () =>{
    setX(ValueX - 100)
  }
  
  const goRight = () =>{
    setX(ValueX + 100)
  }
  
  let sliderArr = [
    <Teacher name={"Jose"} ValueX={ValueX}/>,
    <Teacher display={'none-second'} ValueX={ValueX}/>,
    <Teacher display={'none'} ValueX={ValueX}/>
  ]

  // https://www.youtube.com/watch?v=Tdpq-9XYoNM
    return(
  
      <section className="about__us none-second">
      <h1 className="about__us__title">
        Ut wisi enim ad minim exerci tation ullamcorper.
      </h1>
      <div className="flex">
        {sliderArr.map((item,index)=>{
          return(
            <div key={index}>
             {item}
            </div>
          )
        })}
        <Arrows goRight={goRight} goLeft={goLeft}/>
        
      </div>
    </section>
    )}
export default AboutUs;