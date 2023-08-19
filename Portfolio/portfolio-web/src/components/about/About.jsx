import React from 'react'
import './about.css'
import ME from '../../assets/DP.jpg'
import {MdComputer} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsFillBuildingsFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
        <h5>Get to know me</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__img">
                    <img src= {ME} alt="About image" />
                </div>
            </div>
            
            <div className="about_content">
                <div className="about_cards">
                    <article className="about__card">
                        <MdComputer className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ years of programming</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>100+ worldwide</small>
                    </article>

                    <article className="about__card">
                        <BsFillBuildingsFill className="about_icon"/>
                        <h5>Projects</h5>
                        <small>40+ completed projects </small>
                    </article>
                </div>
                <p>

                I am a software engineer with expertise in programming languages such as C, Python mostly.
                As an Intern at ALX Africa, I have worked on a variety of software development projects, 
                from designing and implementing complex algorithms to optimizing system-level performance.

                If you are looking for a skilled and driven software engineer with expertise in C and Python programming and their frameworks, 
                Linux/UNIX, Git, GitHub, Front and Backend Web development, API's, Databases I would love to connect with you.
                
                </p>
                <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
        </div>
    </section>

  )
}

export default about