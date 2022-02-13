import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/coding.svg"

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg}/>
      <HeaderContainer>
        <h1>About Software Developer <span>Mehmet Kaymaz</span></h1>
      </HeaderContainer>
      <InfoContainer>
      <h2>Hi, I'am Mehmet</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known JS, ReactJS, MongoDB,SQL,
          Python, Boostrap, SASS, Material UI</h4>
          <h3>
          <a href="mailto:mkaymaz93@gmail.com">Send email</a> :
          mkaymaz93@gmail.com
        </h3>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About