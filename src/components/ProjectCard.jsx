import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../Assets/projectimg.jpg'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow text-center btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>Video Player</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'      >
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
                <img src={projectImg} alt="no image" width={'100%'} height={'270px'}/>
            </Col>
            <Col md={6}>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime esse tempore, cum dolor repellendus reprehenderit dicta odit sapiente autem. Nulla eum sit porro, excepturi praesentium veniam et fuga tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam animi ipsa expedita. Nam, sed. </p>
                <p><span className='fw-bolder'>Technologies</span> : HTML, CSS, React</p>
            </Col>
          </Row>
          <div className='d-flex mt-5 mb-5'>
            <a href="" style={{color:'black'}}><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="" style={{color:'black'}}><i class="fa-solid fa-link fa-2x ms-5"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default ProjectCard