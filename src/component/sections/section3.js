import React, { useState } from 'react';
import './section.css'
const Section3 = ({onNext,onPrev,dataform}) => {
    const [name,setName]=useState({
        firstName: '',
        lastName: '',
      });

    function handlenext(){
        onNext(name)
    }
    function handlenprev(){
        onPrev()
    }
    return (
        <div>
            <p>Your infos is</p>
            {dataform.id} <br/>
            {dataform.formation.map(item=>item)} <br/>
            {dataform.genre} <br/>
            {dataform.datenaissance} <br/>
            {/* <button onClick={handlenprev}  className='btn-without'> Back</button> 
            <button onClick={handlenext} className='btn-without'> Next</button>             */}
        </div>
    );
};

export default Section3;