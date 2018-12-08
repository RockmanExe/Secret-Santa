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
            name: '',
            chosen: '',
            array: []

        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log('handlechange name: ', this.state.name)
    }

    componentWillMount() {
        this.props.gettingUsers();
        this.props.members.map(member => {
            this.state.array.push(member.members)
        })
        setTimeout(() => this.setState({ loading: false }), 100);
    }

    // randomize = (e) => {
    //     e.preventDefault();
    //     let array = []
    //     this.props.members.map(member => {
    //         array.push(member.members)
    //     })
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     console.log('shuffled array: ', array)
    //     // array.map(member => {
    //     //     this.state.allUsers.push(member)
    //     // })

    //     this.setState({ allUsers: this.state.allUsers.concat(array) })
    //     console.log('this state users: ', this.state.allUsers)
    // }

    handlePull = (e) => {
        e.preventDefault();
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log('shuffled array: ', array)
        // array.map(member => {
        //     this.state.allUsers.push(member)
        // })

        this.setState({ allUsers: this.state.allUsers.concat(array) })
        console.log('this state users: ', this.state.allUsers)
        // for (var i = array.length - 1; i > 0; i--) {
        //     var j = Math.floor(Math.random() * (i + 1));
        //     var temp = array[i];
        //     array[i] = array[j];
        //     array[j] = temp;
        // }
        let chosen;
        if (array.includes(this.state.name)) {
            console.log('this array has this name')
            if (array[0] === this.state.name) {
                chosen = array.pop()
                console.log('array spliced: ', array);
                // return array
            } else {
                chosen = array.shift()
                console.log('array shifted: ', array);
                // return array;
            }
            console.log('array left: ', array)
            console.log('You Secret Santa is: ', chosen)
            this.setState({ chosen: chosen })
            let arrayNew = array.filter(item => {
                return item !== chosen
            })
            console.log('new arr : ', arrayNew);
            this.setState({ filteredArray: arrayNew })

        }
        else {
            console.log('this array doesn\'t have this name')
        }
    }

    render() {
        // console.log('pull name props: ', this.props)
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
                    onClick={this.randomize}
                >Shuffle Names</Button>
                {/* array of names --> shuffle names -> pull name --> if it is your name, skip, and grab next one 
                --> take out that name from the copy of this array */}
                {/* {this.props.members.map((member, i) => {
                    return (<div key={i} >
                        <Randomized key={member.id} member={member} />
                    </div>)
                })} */}
                <p><b>Your Secret Santa is: {this.state.chosen}</b></p>
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