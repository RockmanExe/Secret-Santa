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
            <div className= "home-page">
                <span>Merry Christmas!</span>
                <div className="buttons">
                    <Link to='/api/local'><Button className='local-button'>Local</Button></Link>
                    <Link to='/api/local'><Button className='online-button'>Online</Button></Link>
                </div>
            </div>
        );
    }
}

export default Home;