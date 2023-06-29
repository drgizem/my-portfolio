import { Col, Container, Row } from "react-bootstrap"
import {skillList} from "../assets/skills"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Skills=()=>{

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill">
            <TrackVisibility>
          <h1 className="skill-title">
            <span className="skill-text">Skills</span>
            <span className="hover-skill-text">Skills</span></h1>
            </TrackVisibility>
            <TrackVisibility>
            {({isVisible})=> 
            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
              <p>A problem is a chance for me to do my best.</p><br/>
            <p>The main area of expertise is front end development (client side of the web).</p>
            </div>}
            </TrackVisibility>
            {<div className="skill-class">{skillList.map((item)=>{
              return <span><img src={item.imgUrl} alt=""/>
              <p>{item.title}</p></span>
            })}</div>}
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}