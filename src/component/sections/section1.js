import React, { useState } from 'react';
import './section.css'
const Section1 = ({onNext,onPrev,dataform}) => {
    const [id,setId]=useState({id:''})
    
    function handlenext(){
        onNext(id)
    }
    function handlenprev(){
        onPrev()
    }


    return (
        <div>
            <p>
              1.ID <br/> Veuillez saisir votre ID comme suit : "NOM (lettres majuscules)-Date de naissance (JJMMAA)" par exemple : NOM-011286
            </p>
        <h1 style={{color:"green" ,margin:"10px 5px",textDecoration:'underline'}}>Profil</h1> 
        
            <input onChange={(e)=>setId({id:e.target.value})} placeholder={dataform?.id ? dataform.id :'enter your answer'} className='inpttext' type='text' /> 

            <button onClick={handlenprev}  className='btn-without'> Back</button> 
            <button onClick={handlenext} className='btn-without'> Next</button> 
        </div>
    );
};

export default Section1;