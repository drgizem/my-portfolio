import { Col, Container, Row,Carousel } from "react-bootstrap"
import { projects } from "../assets/projects";
import mac from "../images/macproject.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects=()=>{



  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="projects-bx">
              <div>
              <h1 className="project-title">
            <span className="project-text">Projects</span>
            <span className="hover-project-text">Projects</span></h1>
            <TrackVisibility>
            {({isVisible})=> 
            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
              <p className="projects-bx-p">I have built various different projects responsively. If you want to see more examples, please <a href="#contact">contact me!</a></p>
            </div>}
            </TrackVisibility>
              </div>
           <div>
           <Carousel className="projects-slider">
                {projects.map((item)=>{
                return <Carousel.Item>
                  <Row>
                  <Col xs={12} md={6} className="info-part mt-3">
                    <p className="mb-0">{item.title}</p>
                    <h3>{item.name}</h3>
                    <p><span className="info-part-detail">Built with: </span><span>{item.built}</span></p>
                    <a href={item.code}>View the code </a>
                  </Col>
                  <Col sm={12} md={6} className="image-part">
                    <img src={mac} alt="" className="projects-mac"/>
                    <img alt="" src={item.imgURL} className="projects-img"/>
                  </Col></Row></Carousel.Item>
                })}
              </Carousel>
           </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}