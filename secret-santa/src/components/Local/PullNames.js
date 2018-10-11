import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './index.css';
import { Form, Input, Button } from 'reactstrap';

class PullNames extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='pull-names'>
                
                <Form>
                    <Input
                        placeholder='Your name'
                    />
                </Form>
                <Button className='pull-names'>Pull a Name</Button>
            </div>
        );
    }
}

export default PullNames;