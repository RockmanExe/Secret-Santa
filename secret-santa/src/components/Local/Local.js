import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Form, Input, Button } from 'reactstrap';

class Local extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            wishes: [],
            wish: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className='local-page'>
                
                <Form>
                    <Input
                        placeholder='Member name'
                        name = 'name'
                        value = {this.state.name}
                        onChange={this.handleChange}

                    />
                    <br/>
                    <Input
                        placeholder='Wishlist'
                        name = 'wish'
                        value = {this.state.wish}
                        onChange={this.handleChange}
                    />
                </Form>
                
                <Button className='member'>Submit Member</Button>
                <Link to='/api/local/pullingnames'><Button className='pull-names'>Start Pulling Names</Button></Link>
            </div>
        );
    }
}

export default Local;