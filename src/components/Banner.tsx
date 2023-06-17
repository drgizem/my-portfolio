import { Container, Row,Col } from "react-bootstrap"
import macbook from "../images/Macbook.png"
import { useState } from "react"

export const Banner=()=>{
const textData="Hi, I'm Gizem"
const [value,setValue]=useState(-1)
const textarea=textData.split("")

const onHover=(index:number)=>{
  setValue(index)
}

  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-title">
              <h1>
                {textarea.map((item:any,index:number)=>{
                  return <span className={(value===index) ? "hover-letter" : "" } onMouseOver={()=>onHover(index)} onMouseOut={()=>setValue(-1)}>{item}</span>})}</h1><br/>
              <span>Front End Developer / React Js Developer</span><hr/>
              <p>A passionate frontend developer with a unique background.<br/>
              I made a bold decision to switch my career from being a physician to pursuing my love for technology and becoming a developer.<br/>
              I combine my analytical skills and attention to detail from my medical background with my creativity and problem-solving abilities in the world of web development.</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-macbook">
              <img src={macbook} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}