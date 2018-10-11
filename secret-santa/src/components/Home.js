import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                Home
                <Link to='/api/local'><Button className='localButton'>Local</Button></Link>
                <Link to='/api/local'><Button className='localButton'></Button></Link>
            </div>
        );
    }
}

export default Home;