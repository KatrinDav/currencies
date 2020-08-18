import React from 'react';
import './Table30.scss';

const Table30 = ({ isVisible, dataReverse }) => {
     return (
          <>
               <div className="date-wrapper">
                    {isVisible && (
                         dataReverse.map(item => (
                              <div className="item" key={item.effectiveDate}>
                                   <div className="mid">{item.mid}</div>
                                   <div className="effect"> {item.effectiveDate} </div>
                              </div>)
                         )
                    )}
               </div>
          </>
     );
}

export default Table30;