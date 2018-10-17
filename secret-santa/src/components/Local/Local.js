import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { gettingUsers, addingUser } from '../../actions';


class Local extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: '',
            wishes: [],
            wish: ''
        }

    }
    componentDidMount() {
        this.props.gettingUsers();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const userInfo = {
            members: this.state.member,
            wishlist: this.state.wish
        }
        console.log('user info: ',userInfo);
        this.props.addingUser(userInfo);
        window.location.reload();
    }

    render() {
        console.log('props render in local: ', this.props )
        return (
            <div className='local-page'>

                <Form>
                    <Input
                        placeholder='Member name'
                        name='member'
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

const mapStateToProps = ({ members }) => {
    console.log('state in map: ', members);
    return {
        members
    }
}

export default connect(mapStateToProps, { gettingUsers, addingUser })(Local);