import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Form, Input, Button } from 'reactstrap';

class Local extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='local-page'>
                
                <Form>
                    <Input
                        placeholder='Member name'
                    />
                    <br/>
                    <Input
                        placeholder='Wishlist'
                    />
                </Form>
                
                <Button className='member'>Submit Member</Button>
                <Link to='/api/local/pullingnames'><Button className='pull-names'>Start Pulling Names</Button></Link>
            </div>
        );
    }
}

export default Local;