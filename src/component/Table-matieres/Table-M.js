import React from 'react';
import './table.css'
import { Link, useNavigate } from 'react-router-dom';
const TableM = () => {
    const navigate=useNavigate();
    return (
        <div className='table'>
            
               <h1 style={{color:"#a34d13",textAlign:"center"}}> Anas: Application (FR) - Anonym -</h1>
            
               <h1 style={{color:"green" ,margin:"10px 5px",textDecoration:'underline'}}>Table des matières</h1>
              <ul>
                    <li>Section 01 : <span>Profil</span></li>
                    <li>Section 02 : Données personnelles</li>
                    <li>Section 03 : Top Skills</li>
                    <li>Section 04 : Compétence linguistique</li>
                    <li>Section 05 : IT- Skills</li>
                    <li>Section 06 : Permis de conduire</li>
                    <li>Section 07 : Expérience professionelle</li>
                    <li>Section 08 : Thèse</li>
                    <li>Section 09 : Stage</li>
                    <li>Section 10 : Diplôme d'études</li>
                    <li>Section 11 : Formation professionnelle</li>
                    <li>Section 12 : Diplome scolaire</li>
                    <li>Section 13 : Evaluation</li>
                </ul>

                <button onClick={()=>navigate('/sections')} className='btn'>
                    Next
                </button>
         
        </div>
    );
};

export default TableM;