import React from 'react';
import Header from '../components/Header/Header';
import CurrenciesTable from '../components/CurrenciesTable/CurrenciesTable';

const MainView = () => {
    return ( 
        <>  
            <div className="page"> 
              <Header/>
              <CurrenciesTable/>
            </div>
        </>
     );
}
 
export default MainView;