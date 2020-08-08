import React from 'react';
import './Info.scss';

const Info = ({name, accRate, maxValue, minValue}) => {
    return ( 
        <> 
          <div className="info-wrapper">
             <h2>{name.toUpperCase()}</h2>
              <p>aktualny kurs: <span>{accRate}</span> </p>
              <p>najwyższy kurs z ostatnich 30 dni: <span>{maxValue}</span></p>
              <p>najniższy kurs z ostatnich 30 dni: <span>{minValue}</span></p>
          </div>
        </>
     );
}
 
export default Info;