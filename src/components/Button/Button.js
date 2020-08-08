import React from 'react';
import './Button.scss';

const Button = ({handleVisibility, isVisible}) => {
    return ( 
        <button onClick={handleVisibility} className="button">
            {isVisible ? 'ukryj kursy':'zobacz wszystkie kursy'}
        </button>
     );
}
 
export default Button;