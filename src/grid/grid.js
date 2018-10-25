import React, { Component } from 'react';
import GridItem from '../grid-item/grid-item';
import './grid.css';

class Grid extends React.Component {
    render() {
        var gridCount = 10;
        var rows = [];

        for (var i = 1; i < gridCount; i++) {
            rows.push(<GridItem/>);
        }

        return (
            <div class="grid">
                { rows }
            </div>
        );
    }
}

export default Grid;