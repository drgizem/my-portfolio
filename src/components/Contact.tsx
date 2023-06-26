import { useState,useRef } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";


export type Form={ 
  name:string,
  email:string, 
  message:string
} 
export const Contact=()=>{
  const [user,setUser]=useState<Form>({} as Form) 
  const form = useRef<HTMLFormElement | null >(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_ql07txq', 'template_vmdwifd', form.current!, 'BkTj5rMjgPHzqkSzm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setUser({
        name:"",
        email:"", 
        message:""
      })
  };
  const handleChange=(e:any)=>{
    const {name,value}=e.target
    setUser((pre)=>{
      return {...pre,[name]:value}
    })
  }
 
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col md={5} className="earth">
            <Canvas>
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas>
          </Col>
          <Col md={7} className="input-part">
          <h1 className="contact-title">
            <span className="contact-text">Contact</span>
            <span className="hover-contact-text">Contact</span></h1>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <Form.Control type="text" value={user.name} name="name" onChange={handleChange} placeholder="Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <Form.Control type="text" value={user.email} name="email" onChange={handleChange} placeholder="Email" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <Form.Control minLength={6} type="text" value={user.message} name="message" onChange={handleChange} placeholder="Message" />
                </Col>
              </Row>
              <button type="submit"><span>Send</span></button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}