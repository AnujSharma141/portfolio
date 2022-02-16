import * as React from "react"
import { useState } from "react"
import Switch from "react-switch"

import projects from "../data/projects"
import social from "../data/social"

import Emoji from '../components/emoji'

import '../style/base.sass'

import wave from "../images/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png"
import mail from "../images/envelope_2709-fe0f.png"
import minecraft from '../images/Image 1.png'
import heart from "../images/red-heart_2764-fe0f.png"
import geek from "../images/man-technologist_1f468-200d-1f4bb.png"
import student from "../images/man-student_1f468-200d-1f393.png"
import gear from "../images/gear_2699-fe0f.png"




// markup
const IndexPage = () => {
  const [dark, setDark] = useState(false)  
  const toggleSwitch = () => setDark(!dark)   

  return (
    <main className={dark?"dark main":"light main"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      <title>anuj sharma</title>
      
      <div className="switch">
      <Switch activeBoxShadow="0 0 0 0" offColor="#DBDBDB" width={28} handleDiameter={13} height={16} onChange={toggleSwitch} uncheckedIcon={null} checkedIcon={null} checked={dark} />
      </div>
      <div className={dark?"land dark-land": "land"}>
      
      

        <div className="text-message">heyyyy <Emoji src={wave} /></div>        
        <div className="textbox-wrap">
          <p className={dark?"textbox-text dark-text": "textbox-text"}>im
          <span className={dark?"textbox-title dark-title": "textbox-title"}>anuj sharma</span>
          </p>
        </div>
<h2 className={dark?"work-heading dark-title": "work-heading"}>a tech intern @ <a target="_blank" className={dark?"link-work dark-about-text": "link-work"} href="https://www.quidich.com/" > Quidich</a> <Emoji src={gear} /></h2>
    
      
          
     
      
    </div>

    <div className={dark?"work dark-about": "work"}>

      <div className="textbox-labels"> i am a 
      <div className={dark?"textbox-label label-orange dark-label-orange": "textbox-label label-orange"}>Javascript Developer</div>
      and
      <div className={dark?"textbox-label label-green dark-label-green": "textbox-label label-green"}>UI Designer</div>
      </div>  
    </div>
    
    <div className={dark?"about dark-about": "about"}>
    <p className={dark?"about-text dark-about-text": "about-text"}>
     im in my prefinal year studying <Emoji src={student} /><br /> 
      <span className={dark?"about-text dark-about-text": "about-text-black"}>communication and computer engineering . </span> <br />
     i like to read about web tech and i absolutely <Emoji src={heart} /> javascript <br />
     also i play <Emoji src={minecraft} /> or watch some anime when free ;p 
    </p>
    </div>
    

    <div className={dark?"project dark-project": "project"}>
    <h2 className={dark?"project-heading dark-title": "project-heading"}>some of my projects <Emoji src={geek} /></h2>
    {projects.map(item=>{
      return<>
      <div className="project-item">
        <div className="project-counter" >
          <a href={item.url} className={dark?"project-title dark-title": "project-title"}>{item.text}</a>
          <p className={dark?"project-text dark-text": "project-text"}>{item.description}</p>
        </div>
      </div>
      </>
    })}
    </div>

    <div className="social">
      <h3 className="social-title">hmu ill respond for sure <Emoji src={mail} /></h3>
      <div>{social.map(item=>{
        return(
          <><a className="social-link" href={item.link}>{item.name}</a></>
        )
        
      })}</div>
    </div>

      
    </main>
  )
}

export default IndexPage
