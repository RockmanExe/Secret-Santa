import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MappedList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // console.log('this props in a mapped list: ', this.props)
        return (

            <div className='singleMember'>
                <Link to={`members/get/${this.props.member.id}`} >
                    <h5 className='headings memberName'>{this.props.member.members}</h5>
                    {/* <span className='x' delete={this.props.delete}>X</span> */}
                    {/* <p className='wishlist'>{this.props.member.wishlist}</p> */}
                </Link>
            </div>

        );
    }
}

export default MappedList;