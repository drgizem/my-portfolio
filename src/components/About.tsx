import { Container,Row ,Col} from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import photo from "../images/photo.png"

export const About=()=>{


  return (
    <section id="about" className="about">
      <Container>
        <Row className="about-me">
            <Col md={7}>
            <h1 className="about-title">
            <span className="about-text">About me</span>
            <span className="hover-about-text">About me</span></h1>
          <TrackVisibility>
            {({isVisible})=> 
            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
              <p className="content-item">A passionate frontend developer with a unique background.</p><br/>
          <br/>
          <p className="content-item">Made a bold decision to switch my career from being a physician to pursuing my love for technology and becoming a developer.</p><br/>
          <br/>
          <p className="content-item">Combine the analytical skills and attention to detail from medical background with creativity and problem-solving abilities in the world of web development.</p>
            </div>}
            </TrackVisibility>
          </Col>
          <Col md={5}>
          <img alt="" src={photo} className="about-photo"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}