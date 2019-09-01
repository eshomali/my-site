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
    thisModal() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <>
            <Button variant="secondary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> 
            </>
        )
    }

    thisCards() {
        return (
            <>
            <div className="myCard1">
                <Card bg="success" text="black" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Projects
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div className="myCard2">
                <Card bg="success" text="black" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            RESUME
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="myCard3">
                <Card bg="success" text="black" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <span className="email" href="mailto:eshomali@gmail.com">EMAIL</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="myCard4">
                <Card bg="success" text="black" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            GITHUB
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </>
        )
    }

    scrollAHV() {
        window.scroll(
            { top: window.innerHeight, left: 0, behavior: 'smooth' }
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
                    <this.Accordion/>
                    <br/>
                    <this.thisModal/>
                    <this.thisCards/>
                </div>
            </div>
      
        )
    }
};

export default Home;