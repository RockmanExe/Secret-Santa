import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { gettingUsers, addingUser } from '../../actions';
import MappedList from './MappedList';


class Local extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: '',
            wishes: [],
            wish: '',
            loading: true
        }

    }
    componentWillMount() {
        this.props.gettingUsers();
        setTimeout(() => this.setState({ loading: false }), 100);
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
        console.log('user info: ', userInfo);
        this.props.addingUser(userInfo);
        // window.location.reload();
        this.setState({ member: '', wish: '' })
        // this.props.history.push('/local')
    }

    render() {
        // console.log('props render in local: ', this.props)
        const { loading } = this.state;
        if (loading) {
            return null;
        }
        return (
            <div className='localWrapper'>
                <div className='local-pageNames'>
                    <h3>Current Members</h3>
                    <div className='namesWrapper'>
                        {this.props.members.map(member => {
                            return <MappedList key={member.id} member={member} />
                        })}

                    </div>
                </div>
                <div className='local-page'>

                    <Form>
                        <Input
                            placeholder='Member name'
                            name='member'
                            value={this.state.member}
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
            </div>
        );
    }
}

const mapStateToProps = ({ members }) => {
    // console.log('state in map: ', members);
    return {
        members
    }
}

export default connect(mapStateToProps, { gettingUsers, addingUser })(Local);