import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
    <Header/>

    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1>All Projects</h1>
        <div className='d-flex mt-5 w-25'>
            <input type="text" className='form-control' placeholder='Search the product using technologies'/>
            <i class="fa-solid fa-magnifying-glass mt-2" style={{marginLeft:'-50px'}}></i>
        </div>
    </div>

    <Row className='mt-5 mb-5 container-fluid'>
        <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
        </Col>
    </Row>

    </>
  )
}

export default Project