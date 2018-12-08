
import React, { Component } from 'react';

class Randomized extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            {this.props.member}
        </div>);
    }
}

export default Randomized;