import * as React from "react"
import { useState } from "react"
import Switch from "react-switch"

import projects from "../data/projects"
import social from "../data/social"
import experience from '../data/experience'
import blogs from "../data/blogs"


import Emoji from '../components/emoji'

import '../style/base.sass'

import mail from "../images/envelope_2709-fe0f.png"
import heart from "../images/red-heart_2764-fe0f.png"
import geek from "../images/man-technologist_1f468-200d-1f4bb.png"
import student from "../images/man-student_1f468-200d-1f393.png"
import work from '../images/necktie_1f454.png'
import pfp from '../images/1232.png'
import valorant from '../images/val-icon.png'
import blog from '../images/writing-hand_270d-fe0f.png'

// markup
const IndexPage = () => {
  const [dark, setDark] = useState(false)  
  const toggleSwitch = () => setDark(!dark)   

  return (
    <main className={dark?"dark main":"light main"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Martian+Mono&display=swap" rel="stylesheet"></link>
      <title>anuj sharma</title>
      
      <div className="switch">
      <Switch activeBoxShadow="0 0 0 0" offColor="#DBDBDB" width={28} handleDiameter={13} height={16} onChange={toggleSwitch} uncheckedIcon={null} checkedIcon={null} checked={dark} />
      </div>

      <div className={dark?"land dark-land": "land"}>     
      <div className="textbox-wrap">
        <img src={pfp} className='pfp' alt="" />
        <p className={dark?"textbox-text dark-text": "textbox-text"}>hey there, im
        <span className={dark?"textbox-title dark-title": "textbox-title"}>anuj sharma</span>
        (he/him)
        </p>
      </div>
      </div>

      <div className={dark?"work dark-about": "work"}>
        <div className="textbox-labels">a 
        <div className={dark?"textbox-label label-orange dark-label-orange": "textbox-label label-orange"}>Javascript Developer</div>
        and
        <div className={dark?"textbox-label label-green dark-label-green": "textbox-label label-green"}>UI Designer</div>
        </div>  
      </div>
    

      <div className={dark?"about dark-about": "about"}>
      <p className={dark?"about-text dark-about-text": "about-text"}>
      recently graduated in <br /> 
        <span className={dark?"about-text-black dark-about-text": "about-text-black"}>communication and computer engineering </span> <Emoji src={student} /> <br />
      i like to read about web technologies and i absolutely <Emoji src={heart} /> javascript <br />
      also i play <a target="_blank" href="https://playvalorant.com/en-gb/"><Emoji src={valorant} /></a> or watch some anime when free ;p 
      </p>
      </div>
    

      <div className={dark?"project dark-project": "project"}>
      <h2 className={dark?"project-heading dark-title": "project-heading"}>work experience<Emoji src={work} /></h2>
      {experience.map(item=>{
        return<div className="exp-item"> 
        <div className="exp-item">
          <div className="exp-counter" >
            <p className={dark?"exp-text dark-title": "exp-text"}>{item.role} @
            <a target="#" href={item.link} className={dark?"exp-text dark-link": "exp-text"}>{item.name}</a>
            </p>
            <p className={dark?"exp-subtext dark-text": "exp-subtext"}>{item.duration}</p>
          </div>
        </div>
        </div>
      })}
      </div>


      <div className={dark?"project dark-project": "project"}>
      <h2 className={dark?"project-heading dark-title": "project-heading"}>projects<Emoji src={geek} /></h2>
      {projects.map(item=>{
        return<>
        <div className="project-item">
          <div className="project-counter" >
            <a href={item.url} target="_blank" className={dark?"project-title dark-link": "project-title"}>{item.text}</a>
            <p className={dark?"project-text dark-text": "project-text"}>{item.description}</p>
          </div>
        </div>
        </>
      })}
      </div>

      <div className={dark?"project dark-project": "project"}>
      <h2 className={dark?"project-heading dark-title": "project-heading"}>blogs<Emoji src={blog} /></h2>
      {blogs.map(item=>{
        return<>
        <div className="project-item">
          <div className="project-counter" >
            <a href={item.link} target="_blank" className={dark?"project-title dark-link": "project-title"}>{item.name}</a>
          </div>
        </div>
        </>
      })}
      </div>

      <div className="social">
        <h3 className="social-title">hmu ill respond for sure <Emoji src={mail} /></h3>
        <div className="social-links">{social.map(item=>{
          return(
            <><a className={dark?"social-link dark-link": "social-link"} target="_blank" href={item.link}>{item.name}</a></>
          )
          
        })}</div>
      </div>
    </main>
  )
}

export default IndexPage
