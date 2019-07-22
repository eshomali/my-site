import React, { Component } from 'react';
import profileImage from './img/cat.jpg';
import profileImage2 from './img/cat.jpg';
import Card from 'react-bootstrap/Card';
import Projects from './Projects';
//import { Link } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

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
                <div className="parallax-one">
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
                </div>
            </div>
      
        )
    }
};

export default Home;