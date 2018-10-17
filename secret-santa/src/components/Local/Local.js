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

    handleSubmit = e => {
        e.preventDefault();
        const userInfo = { name: this.state.name }
        console.log(userInfo);
        // axios
        //     .post('smth/api/user', { name: this.state.name, wishes: this.state.wishes})

    }

    render() {
        return (
            <div className='local-page'>

                <Form>
                    <Input
                        placeholder='Member name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}


                    />
                    <br />
                    <Input
                        placeholder='Wishlist'
                        name='wish'
                        value={this.state.wish}
                        onChange={this.handleChange}
                    />
                    <Button className='addWish' onClick={this.handleAdd}>+ Add</Button>
                </Form>

                <Button className='member' onClick={this.handleSubmit}>Submit Member</Button>
                <Link to='/local/pullingnames'><Button className='pull-names'>Start Pulling Names</Button></Link>
            </div>
        );
    }
}

export default Local;