import { Container, Row,Col } from "react-bootstrap"
import macbook from "../images/macpro.png"
import { useState } from "react"

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
            <h4 className="subtitle">Front End Developer / React Js Developer</h4>
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