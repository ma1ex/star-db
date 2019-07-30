import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

    //
    render() {
        return(
                <div className="list-group">
                    <a href="#!" className="list-group-item list-group-item-action">1</a>
                    <a href="#!" className="list-group-item list-group-item-action">2</a>
                    <a href="#!" className="list-group-item list-group-item-action">3</a>
                </div>
        )
    }
}