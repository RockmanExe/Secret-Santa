import React, { Component } from 'react';
import './index.css';
import { Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='navBar'>
                <h1 className='headerText'>Secret Santa</h1>
            </div>
        );
    }
}

export default Home;