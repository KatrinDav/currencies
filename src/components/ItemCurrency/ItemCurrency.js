import React from 'react';
import './ItemCurrency.scss';

const ItemCurrency = ({item}) => {
 
    return ( 
        <div className="item_wrapper">
          <div className="item">
             {item.code}
          </div>
        </div>
     );
}
 
export default ItemCurrency;