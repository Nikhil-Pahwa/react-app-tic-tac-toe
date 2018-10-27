import React, { Component } from 'react';
import './grid-item.css';

class GridItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       var cssClasses = (this.props.value === 'X') ? 'grid-item cross': 'grid-item circle';  
        return (
            <span className={cssClasses} onClick={this.props.onClick}>{this.props.value}</span>
        );
    }
}

export default GridItem;