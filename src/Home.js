import React, { Component, useState } from 'react';
import profileImage from './img/cat.jpg';
import profileImage2 from './img/cat.jpg';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Projects from './Projects';
//import { Link } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

    Accordion(){
        return (
            <>
            <div class="AccordionParent">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            </>
        )
    }

    myHomepage() {
        const wd = "21rem";
        const ht = "24rem";
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
            <>
            <div className = "cards">
                <div className="myCard1" onClick={handleShow}>
                    <Card bg="success" text="black" style={{ width: wd, height: ht }}>
                        <Card.Body>
                            <Card.Text>
                                Resume&nbsp;
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="myCard2">
                    <Card bg="success" text="black" style={{ width: wd, height: ht }}>
                        <Card.Body>
                            <Card.Text>
                                <span className="email" href="mailto:eshomali@gmail.com">&nbsp;email</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>Resume</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    <div class="AccordionParent">
                        <Accordion defaultActiveKey="1">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <div class="edu_header">
                                            Education
                                        </div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div class="edu_body">
                                            <h3>B.S.E. Computer Engineering</h3>
                                            <em><h4><a href="http://www.oakland.edu" target="_blank">Oakland University</a></h4></em>
                                        </div>
                                        <li>Minor in Computer Science</li>
                                        <li>Vice President, Engineering Society of Detroit</li>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Experiences
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>Software Engineer&nbsp;&mdash;&nbsp;Sept 2018 - Current<br/>
                                            <em>Asset Health</em>
                                        </p>
                                        <p>Computer Science Intern&nbsp;&mdash;&nbsp;Aug 2016 - Jul 2018<br />
                                            <em>Complete Data Products</em>
                                        </p>
                                        <p>Teaching Assistant&nbsp;&mdash;&nbsp;Sept 2017 - Dec 2017<br />
                                            <em>Oakland University</em>
                                        </p>
                                        <p>Electronics Technician&nbsp;&mdash;&nbsp;Jun 2013 - Aug 2016<br />
                                            <em>Boost Mobile</em>
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Skills
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        C, PHP, HTML, CSS, React JSX, Bootstrap
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Projects
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Autonomous Vehicle</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Exit
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal> 
            </>
        )
    }

    scrollAHV() {
        window.scroll(
            {   top: window.innerHeight, 
                left: 0, 
                behavior: 'smooth'  }
        );
    }
    
    render() {
        
        return (
          
            <div className="main">
                <div className="main-text">
                    <span id="main-header"></span>
                </div>
                
                <br/>
                <div className="parallax-one">
                    <this.myHomepage/>
                </div>
            </div>
      
        )
    }
};

export default Home;