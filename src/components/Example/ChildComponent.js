import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        console.log('>>> check props:', this.props)
        let {name, age} = this.props
        return (
            <div>
                child Component: {name}, Age: {age}
            </div>
        );
    }
}

export default ChildComponent;
