import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ItemCurrency from '../ItemCurrency/ItemCurrency';
import './CurrenciesTable.scss';

const URL = 'http://api.nbp.pl/api/exchangerates/tables/A/';

const CurrenciesTable = () => {
  const [apiData, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () =>{
        const result = await axios.get(URL);
        setData(result.data[0].rates)
      };
      fetchData();

  },[])

  return ( 
        <>
            <div className="wrapper">
               {apiData.map(item => (
                 <Link to={`/rates/${item.code}`} key={item.mid} >
                  <ItemCurrency item={item} />
                 </Link>     
                ))}
              </div>
                  
         </>
   );
}
 
export default CurrenciesTable;



