import * as React from "react"
import { useState } from "react"
import Switch from "react-switch"
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Swing from 'react-reveal/Swing';


import projects from "../data/projects"
import social from "../data/social"
import about from '../data/about'

import '../style/base.sass'

import logo from "../images/logo.svg"
import wave from "../images/waving-hand_1f44b.png"
import laptop from "../images/laptop_1f4bb.png"
import ruler from "../images/straight-ruler_1f4cf.png"
import mail from "../images/envelope_2709-fe0f.png"
import heart from "../images/red-heart_2764-fe0f.png"

const Loader = () => {
    return(
        <div className="loader">
            <img src={logo} className="loader-img" alt="" />    
        </div>
    )
}

// markup
const IndexPage = () => {
  const [dark, setDark] = useState(false) 
  const [load, setLoad] = useState(true) 
  setTimeout(() => {
      setLoad(false)
  }, 1700); 
  const toggleSwitch = () => setDark(!dark)   
  dark? document.querySelector("body").className = "dark"
  : document.querySelector("body").className = "light"

  return (
    <main>
      <title>Anuj Sharma</title>
      {load?<Loader />:
      <>
      <div className="switch">
      <Switch activeBoxShadow="0 0 0 0" offColor="#DBDBDB" width={28} handleDiameter={13} height={16} onChange={toggleSwitch} uncheckedIcon={null} checkedIcon={null} checked={dark} />
      </div>
      <div className={dark?"land dark-land": "land"}>
      
      <Rotate top left cascade>
        <div className={dark?"graphic dark-graphic": "graphic"}>
          <div className={dark?"graphic-elipse elipse-blue dark-elipse-blue": "graphic-elipse elipse-blue"}>
              <img className="graphic-laptop" src={laptop} alt="" /></div>
          <div className={dark?"graphic-label label-orange dark-label-orange": "graphic-label label-orange"}>Javascript Developer</div>
          <div className={dark?"graphic-label label-green dark-label-green": "graphic-label label-green"}>UI Designer</div>
          <div className={dark?"graphic-elipse elipse-pink dark-elipse-pink": "graphic-elipse elipse-pink"}><img className="graphic-ruler" src={ruler} alt="" /></div>
        </div>
        </Rotate>

        <Fade top cascade>
        <div className={dark?"textbox dark-textbox": "textbox"}>
        <Swing>    
        <img className="textbox-img" src={wave} alt="" />
        </Swing>
        <div className="textbox-wrap">
          <p className={dark?"textbox-text dark-text": "textbox-text"}>Hey, I am</p>
          <h3 className={dark?"textbox-title dark-title": "textbox-title"}>Anuj Sharma</h3>
        </div>
      </div>
      </Fade>
      
    </div>


    <div className={dark?"about dark-about": "about"}>
    <h2 className="about-title">About</h2>
    <p className="about-text">{about}</p>
    </div>
    
    <div className={dark?"project dark-project": "project"}>
    <h2 className={dark?"project-heading dark-title": "project-heading"}>Projects</h2>
    {projects.map(item=>{
      return<>
      <div className="project-item" style={{background: dark?item.button:item.color}}>
        <img className="project-img" src={item.image} alt="" />
        <div className="project-counter" >
          <h4 className={dark?"project-title dark-title": "project-title"}>{item.text}</h4>
          <p className={dark?"project-text dark-text": "project-text"}>{item.description}</p>
          <a className={dark?"project-button dark-context": "project-button"} style={{background: dark?item.color:item.button}} href="">view</a>
        </div>
      </div>
      </>
    })}
    </div>

    <div className={dark?"contact dark-contact": "contact"}>
    <img className="contact-img" src={mail} alt="" />
    <h2 className={dark?"contact-title dark-title": "contact-title"}>connect with me!</h2>
    <p className="contact-text">feel free to drop a mail </p>
    <div className="contact-social">
    <a className="contact-mail" href="">email</a>
    <div>
    {social.map(item =>{
      return(
        <>
        <a className="contact-social-link" href={item.link}>
          /
          <img className="contact-social-icon" src={item.icon} alt="" />
        </a> 
        </>
      )
    })}
    </div>
    </div>
    </div>

    <p className="credit">
    <span className="credit-text">made with</span>
    <img className="credit-icon" src={heart} alt="" />
    <span className="credit-text">by</span>
    <span className={dark?"credit-name dark-credit-name": "credit-name"}>Anuj Sharma</span>
    </p>

      </>}
      
    </main>
  )
}

export default IndexPage
