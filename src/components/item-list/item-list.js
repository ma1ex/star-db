import React, { Component } from 'react';

import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {

    state = {
        ItemList: null
    };
    
    componentDidMount() {
        
        const { getData } = this.props;

        getData()
            .then((ItemList) => {
                this.setState({ItemList});
            });
    }

    // Получение из коллекции персон id и name для построения списка
    renderItems (arr) {
        return arr.map(({id, name}) => {
            return (
                <a href="#!" key={ id } onClick={() => this.props.onItemSelected(id)} 
                    className="list-group-item list-group-item-action">{name}</a>
            );
        });
    }

    render() {

        const { ItemList } = this.state;
        // Отображение прелоадера, пока не подгрузятся данные
        if (!ItemList) {
            return <Spinner />;
        }
        const items = this.renderItems(ItemList);
        
        return (
            <div className="list-group">
                {items}
            </div>
        )
    }
}