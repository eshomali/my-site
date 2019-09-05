import React, { Component } from 'react';
//import React from 'react';
import Home from './Home';
import Nav from './Nav';
import logo from './logo.svg';
import profileImage from './img/cat.jpg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Projects from './Projects';

export default class App extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Nav />
                <Home />
            </div>
        );
    }
}

//export default App;
