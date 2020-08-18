import React from 'react';
import './ItemCurrency.scss';

const ItemCurrency = ({ item }) => {

   return (

      <div className="item">
         {item.code}
      </div>

   );
}

export default ItemCurrency;