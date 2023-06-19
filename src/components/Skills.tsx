import { Container, Row } from "react-bootstrap"
import {skillList} from "../assets/skills"

export const Skills=()=>{



  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <div className="skill">
          <h1 className="skill-title">
            <span className="skill-text">Skills</span>
            <span className="hover-skill-text">Skills</span></h1>
            <p>A problem is a chance for me to do my best.</p><br/>
            <p>The main area of expertise is front end development (client side of the web).</p>
            {<div className="skill-class">{skillList.map((item)=>{
              return <span><img src={item.imgUrl} alt=""/>
              <p>{item.title}</p></span>
            })}</div>}
          </div>
        </Row>
      </Container>
    </section>
  )
}