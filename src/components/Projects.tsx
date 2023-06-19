import { Col, Container, Row,Carousel } from "react-bootstrap"
import { projects } from "../assets/projects";
import mac from "../images/macproject.png"


export const Projects=()=>{



  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="projects-bx">
              <h2>Projects</h2>
              <p className="projects-bx-p">I have built various different projects responsively. If you want to see more examples, please <a href="#contact">contact me!</a></p>
              <Carousel className="projects-slider">
                {projects.map((item)=>{
                return <Carousel.Item>
                  <Row>
                  <Col sm={12} md={6} className="info-part">
                    <p>{item.title}</p>
                    <h3>{item.name}</h3>
                    <p>Built with: <span>{item.built}</span></p>
                    <a href={item.code}>View the code </a>
                  </Col>
                  <Col sm={12} md={6} className="image-part">
                    <img src={mac} alt="" className="projects-mac"/>
                    <img alt="" src={item.imgURL} className="projects-img"/>
                  </Col></Row></Carousel.Item>
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}