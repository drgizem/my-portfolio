import { Container, Row,Col } from "react-bootstrap"
import macbook from "../images/macpro.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { useEffect,useState } from "react";
import astro from "../images/astro.png"


export const Banner=()=>{
  const [offset, setOffset] = useState(0)
 
useEffect(()=>{
  const onScroll = () => setOffset(window.scrollY/(document.body.offsetHeight - window.innerHeight));
  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
},[])
console.log(offset)
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
        <img className="scroll-img" style={{animationDelay:`calc(${offset} * -1s)`}} src={astro} alt=""/>  
      </Container>
    </section>
  )
}