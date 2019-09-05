import React, { Component, useState, useEffect } from 'react';
import profileImage from './img/cat.jpg';
import profileImage2 from './img/cat.jpg';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Projects from './Projects';
import { tsImportEqualsDeclaration, thisExpression } from '@babel/types';
//import { Link } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

    Accordion(){ //Example of an accordion-card structure
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

    networkRequest() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    myHomepage() {
        const wd = "16rem";
        const ht = "16rem";
        const [show, setShow] = useState(false);
        const [isLoading, setLoading] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleClick = () => setLoading(true);

        useEffect(() => {
            if (isLoading === true) {
                this.networkRequest().then(() => { setLoading(false); });
            }
        }, [isLoading]);

        //const resume = <Badge variant="primary">Resume</Badge>;

        return (
            <>
            <div className = "cards">
                <div className="myCard1">
                    <Card bg="warning" style={{ width: wd, height: ht }}>
                        <Card.Body onClick={handleShow}>
                            <Card.Text>
                                resume
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="myCard2">
                    <Card bg="danger" style={{ width: wd, height: ht }}>
                        <Card.Body>
                            <Card.Text>
                                <h3>shoot me an</h3>
                                <a class="links" href="mailto:eshomali@gmail.com">Email</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="myCard3">
                    <Card bg="primary" style={{ width: wd, height: ht }}>
                        <Card.Body>
                            <Card.Text>
                                <h3>connect wth me</h3>
                                <a class="links" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="myCard4">
                    <Card bg="success" style={{ width: wd, height: ht }}>
                        <Card.Body>
                            <Card.Text>
                                <h3>checkout my</h3>
                                <a class="links" href="https://www.github.com/eshomali" target="_blank">GitHub</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong><h3>Resume</h3></strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    <div class="AccordionParent">
                        <Accordion defaultActiveKey="1">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <div class="edu_header">
                                            <h5><b>Education</b></h5>
                                        </div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div class="edu_body">
                                            <h6><b>&nbsp;B.S.E. Computer Engineering</b></h6>
                                            <em><h6><a href="http://www.oakland.edu" target="_blank">&nbsp;Oakland University</a></h6></em>
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
                                        <table id="t1">
                                            <tr>
                                                <td>Software Engineer&nbsp;</td>
                                                <td>&nbsp;&mdash;&nbsp;</td>
                                                <td>&nbsp;Sept 2018 - Current</td>
                                            </tr>
                                            <tr>
                                                <td><em>Asset Health</em></td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <td>Computer Science Intern&nbsp;</td>
                                                <td>&nbsp;&mdash;&nbsp;</td>
                                                <td>&nbsp;Aug 2016 - Jul 2018</td>
                                            </tr>
                                            <tr>
                                                <td><em>Complete Data Products</em></td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <td>Teaching Assistant&nbsp;</td>
                                                <td>&nbsp;&mdash;&nbsp;</td>
                                                <td>&nbsp;Sept 2017 - Dec 2017</td>
                                            </tr>
                                            <tr>
                                                <td><em>Oakland University</em></td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <td>Electronics Technician&nbsp;</td>
                                                <td>&nbsp;&mdash;&nbsp;</td>
                                                <td>&nbsp;Jun 2013 - Aug 2016</td>
                                            </tr>
                                            <tr>
                                                <td><em>Boost Mobile</em></td>
                                            </tr>
                                        </table>
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
                    <Button variant="primary" disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}>
                        {isLoading ? 'Downloading....' : ' Download PDF '}
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

    constructor(props) {
        super(props);
        this.networkRequest = this.networkRequest.bind(this);
        this.myHomepage = this.myHomepage.bind(this);
    }
    
    render() {
        
        return (
          
            <div className="main">
                <div className="main-text">
                    <span id="main-header"></span>
                </div>
                <this.myHomepage/>
            </div>
      
        )
    }
};

export default Home;