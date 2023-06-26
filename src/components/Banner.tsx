import { Container, Row,Col } from "react-bootstrap"
import macbook from "../images/macpro.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner=()=>{

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <div className="banner-title">
            <h1 className="title-text">Hi, I'm</h1>
            <div className="content">
              <h2>Gizem</h2>
              <h2>Gizem</h2>
            </div>
            <div className="animation">
              <div className="first"><div>Front End Developer</div></div>
              <div className="second"><div>React Js Developer</div></div>
            </div>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({isVisible})=> 
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={macbook} alt=""/>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}