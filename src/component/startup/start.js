import React from 'react';
import './start.css'
import { Link } from 'react-router-dom';

const Start = () => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const locale = 'fr-FR'; 
    const formatter = new Intl.DateTimeFormat(locale, options);
    const currentDate = new Date();
    const formattedDate = formatter.format(currentDate);

 
    return (
        <div className='container-1'>
        <div id="form-1"> 
            <h1>
                Anas: Application (FR) - Anonym -
            </h1>
            <p>
                {formattedDate} 
            </p>
            <p>
                Vous êtes cordialement invité !
            </p>
           <Link to='table'> 
                <button id="start">
                    Start now
                </button>
            </Link>
    </div>
    </div>
    );
};

export default Start;






  

