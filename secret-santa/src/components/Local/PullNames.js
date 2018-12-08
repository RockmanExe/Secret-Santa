import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import { gettingUsers, addingUser } from '../../actions';
import Randomized from './Randomized';

class PullNames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            chosen: '',
            array: [],
            // visited: {},
            allUsers: [],
            value: { display: 'None' },
            newValue: { display: 'inline-block' },

        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('handlechange name: ', this.state.name)
    }

    componentWillMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
        this.props.gettingUsers();
        // this.props.members.map(member => {
        //     this.state.array.push(member.members)
        // })
    }

    randomize = (e) => {
        e.preventDefault();
        let newArray = []
        this.props.members.map(member => {
            newArray.push(member.members)
        })
        this.props.members.map(member => {
            this.state.array.push(member.members)
        })

        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        console.log('array: ', newArray)
        newArray.map(member => {
            this.state.allUsers.push(member)
        })

        // this.setState({ allUsers: [...this.state.allUsers, array] })
        // this.setState({ allUsers: this.state.allUsers.concat([array]) })
        console.log('this state allUsers: ', this.state.allUsers)
        this.setState({ newValue: this.state.value })
    }

    handlePull = (e) => {
        e.preventDefault();

        let size = this.state.allUsers.length
        console.log('size: ', size)
        let chosen;
        if (size === 0) {
            this.setState({ chosen: 'All names are pulled' })
        }
        if (this.state.array.includes(this.state.name)) {
            console.log('this array has this name')
            if (this.state.allUsers[0] === this.state.name) {
                chosen = this.state.allUsers.pop(1)
                console.log('array popped 1: ', this.state.allUsers);
                // return array
                // this.state.visited[this.state.name].push(chosen)
                // console.log('visited: ', this.state.visited)
            } else {
                chosen = this.state.allUsers.shift()
                // this.state.visited[this.state.name].push(chosen)
                // console.log('array shifted: ', this.state.visited);
                console.log('array shifted 0: ', this.state.allUsers);

                // return array;
            }
            // console.log('array oriignal: ', this.state.array)
            // console.log('array left: ', this.state.allUsers)
            console.log('You Secret Santa is: ', chosen)
            this.setState({ chosen: chosen })
            // let arrayNew = this.state.array.filter(item => {
            //     return item !== chosen
            // })
            // console.log('new arr : ', arrayNew);
            // this.setState({ filteredArray: arrayNew })

        }
        else {
            console.log('this array doesn\'t have this name')
            this.setState({ chosen: 'Please, enter existing name' })
        }
        // }
        console.log('All names are pulled')
        // this.setState({ chosen: 'All names are pulled' })
        // if (this.state.array.includes(this.state.name)) {
        //     console.log('this array has this name')
        //     if (this.state.array[0] === this.state.name) {
        //         chosen = this.state.array.pop()
        //         console.log('array spliced: ', this.state.array);
        //         // return array
        //         this.state.visited.push(chosen)
        //         console.log(this.state.visited)
        //     } else {
        //         chosen = this.state.array.shift()
        //         console.log('array shifted: ', this.state.array);
        //         // return array;
        //     }
        //     console.log('array left: ', this.state.array)
        //     console.log('You Secret Santa is: ', chosen)
        //     this.setState({ chosen: chosen })
        //     // let arrayNew = this.state.array.filter(item => {
        //     //     return item !== chosen
        //     // })
        //     // console.log('new arr : ', arrayNew);
        //     // this.setState({ filteredArray: arrayNew })

        // }
        // else {
        //     console.log('this array doesn\'t have this name')
        // }

        // console.log('All names are pulled')
    }

    render() {
        // console.log('pull name props: ', this.props)
        const { loading } = this.state;
        if (loading) {
            return null;
        }
        return (
            <div className='pull-names'>

                <Form>
                    <Input
                        placeholder='Your name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name'
                    />
                </Form>
                <Button className='pull-names'
                    onClick={this.handlePull}
                >Pull a Name</Button>
                <Button className='pull-names'
                    onClick={this.randomize} style={this.state.newValue}
                >Shuffle Names</Button>
                <p style={{ fontSize: '30px' }}><b>Your Secret Santa is: <span style={{ fontSize: '50px' }}>{this.state.chosen}</span></b></p>
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

export default connect(mapStateToProps, { gettingUsers, addingUser })(PullNames);