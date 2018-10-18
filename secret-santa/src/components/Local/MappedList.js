import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deletingUser } from '../../actions';
import { connect } from 'react-redux';

class MappedList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    handleDelete = () => {
        const id = this.props.member.id;
        console.log('id: ')
        this.props.deletingUser(id);
    }


    render() {
        // console.log('this props in a mapped list: ', this.props)
        console.log('this props: ', this.props);
        return (

            <div className='singleMember' className='linksMember'>
                <Link to={`members/${this.props.member.id}`} >
                    <h5 className='headings memberName'>{this.props.member.members}</h5>

                    {/* <p className='wishlist'>{this.props.member.wishlist}</p> */}
                </Link>
                <span className='x' onClick={this.handleDelete}>X</span>
            </div>

        );
    }
}

export default connect(null, { deletingUser })(MappedList);