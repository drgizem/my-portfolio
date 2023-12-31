import {Navbar,Container,Nav} from "react-bootstrap"
import logo from "../images/logo3.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import { useEffect, useState } from "react"
import pdf from "../assets/resume.pdf"
import ricon from "../images/ricon.png"
import Tooltip from '@mui/material/Tooltip';


export const NavBar=()=>{
  const [activeLink,setActiveLink]=useState("home")
  const [scroll,setScroll]=useState(false)

  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        setScroll(true)
      }else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll",onScroll)
    return ()=>window.removeEventListener("scroll",onScroll)
  },[])
  const updateLink=(value:string)=>{
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={activeLink==="home" ? "active navbar-link" : "navbar-link"} onClick={()=>updateLink("home")} href="#home">Home</Nav.Link>
            <Nav.Link className={activeLink==="about" ? "active navbar-link" : "navbar-link"} onClick={()=>updateLink("about")} href="#about">About</Nav.Link>
            <Nav.Link className={activeLink==="skills" ? "active navbar-link" : "navbar-link"} onClick={()=>updateLink("skills")} href="#skills">Skills</Nav.Link>
            <Nav.Link className={activeLink==="projects" ? "active navbar-link" : "navbar-link"} onClick={()=>updateLink("projects")} href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <Tooltip title="Linkedin"><a href="https://www.linkedin.com/in/gizem-akpinar/"><img src={linkedin} alt=""/></a></Tooltip>
              <Tooltip title="Github"><a href="https://github.com/drgizem"><img src={github} alt=""/></a></Tooltip>
              <Tooltip title="Resume"><a href={pdf} download="GizemResumeOfficial.pdf"><img src={ricon} alt="" style={{width:"26px"}}/></a></Tooltip>
            </div>
            <Nav.Link href="#contact"><button><span>Contact</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}