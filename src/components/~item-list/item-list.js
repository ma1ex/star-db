import React, { Component } from 'react';

import Spinner from '../spinner';
import './item-list.css';

class ItemList extends Component {

    // Получение из коллекции персон id и name для построения списка
    renderItems (arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);
            return (
                <a href="#!" key={ id } onClick={() => this.props.onItemSelected(id)} 
                    className="list-group-item list-group-item-action">{label}</a>
            );
        });
    }

    render() {

        const { data } = this.props;
        const items = this.renderItems(data);
        
        return (
            <div className="list-group">
                {items}
            </div>
        )
    }
}

const withData = (View) => {
    return class extends Component {
        
        state = {
            data: null
        };
        
        componentDidMount() {
            
            const { getData } = this.props;
    
            getData()
                .then((data) => {
                    this.setState({data});
                });
        }
        
        render() {
            // const { data } = this.props;
            
            const { data } = this.state;
            // Отображение прелоадера, пока не подгрузятся данные
            if (!data) {
                return <Spinner />;
            }

            return(
                <View {...this.props} data={ data } />
            );
        }
    };
};

export default withData(ItemList);