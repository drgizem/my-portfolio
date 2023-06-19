import { Container,Row ,Col} from "react-bootstrap"


export const About=()=>{


  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <div className="about-me">
          <h1 className="about-title">
            <span className="about-text">About me</span>
            <span className="hover-about-text">About me</span></h1>
          <p className="about-info">A passionate frontend developer with a unique background.</p><br/>
          <p className="about-info">I made a bold decision to switch my career from being a physician to pursuing my love for technology and becoming a developer.</p><br/>
          <p className="about-info">I combine my analytical skills and attention to detail from my medical background with my creativity and problem-solving abilities in the world of web development.</p>
          </div>
        </Row>
      </Container>
    </section>
  )
}