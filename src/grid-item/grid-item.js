import React, { Component } from 'react';
import './grid-item.css';

class GridItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className="grid-item" onClick={this.props.onClick}>{this.props.value}</span>
        );
    }
}

export default GridItem;