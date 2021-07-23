import * as React from "react"

import projects from "../data/projects"
import social from "../data/social"
import about from '../data/about'

import '../style/base.sass'

import wave from "../images/waving-hand_1f44b.png"
import laptop from "../images/laptop_1f4bb.png"
import ruler from "../images/straight-ruler_1f4cf.png"
import mail from "../images/envelope_2709-fe0f.png"
import heart from "../images/red-heart_2764-fe0f.png"

// markup
const IndexPage = () => {
  return (
    <main >
      <title>Anuj Sharma</title>
      <div classname="land">

        <div classname="graphic">
          <div classname="graphic-elipse"><img src={laptop} alt="" /></div>
          <div classname="graphic-label">Javascript Developer</div>
          <div classname="graphic-label">UI Designer</div>
          <div classname="graphic-elipse"><img src={ruler} alt="" /></div>
        </div>

        <div classname="textbox">
        <img src={wave} alt="" />
        <div classname="textbox-wrap">
          <p classname="textbox-text">Hey, I am</p>
          <h3 classname="textbox-title">Anuj Sharma</h3>
        </div>
      </div>
      
    </div>


    <div classname="about">
    <h2 classname="about-title">About</h2>
    <p classname="about-text">{about}</p>
    </div>
    
    <div classname="projects">
    <h2 classname="projects-title">Projects</h2>
    {projects.map(item=>{
      return<>
      <div classname="project-item">
        <img classname="project-img" src="" alt="" />
        <div classname="project-counter">
          <h4 classname="project-title">{item.text}</h4>
          <p classname="project-text">{item.description}</p>
          <a classname="project-button" href="">view</a>
        </div>
      </div>
      </>
    })}
    </div>

    <div classname="contact">
    <img classname="contact-img" src={mail} alt="" />
    <h2 classname="contact-title">connect with me!</h2>
    <p classname="contact-text">feel free to drop a mail </p>
    <div classname="contact-social">
    <a classname="contact-mail" href="">email</a>
    {social.map(item =>{
      return(
        <>
        <a classname="contact-social-link" href={item.link}>
          /
          <img classname="contact-social-icon" src={item.icon} alt="" />
        </a> 
        </>
      )
    })}
    </div>
    </div>

    <p classname="credit">
    <span classname="credit-text">made with</span>
    <img classname="credit-icon" src={heart} alt="" />
    <span classname="credit-text">by</span>
    <span classname="credit-name">Anuj Sharma</span>
    </p>

    </main>
  )
}

export default IndexPage
