import React, { useEffect, useState } from 'react';
import './section.css'
const Section2 = ({onNext,onPrev}) => {
    const [data,setdata]=useState({
        formation: [] ,
        genre: '',
        datenaissance:""
      });

      const [required,setRequired]=useState(false)

    function handlenext(){
        if(data.formation.length===0){
            setRequired(true)
        }
        else if(data.genre===''){
            setRequired(true)
        }
        else if(data.datenaissance===''){
            setRequired(true)
        }
        else 
        onNext(data)
       
    }
    function handlenprev(){
        onPrev()
    }
    function handkecheck(e){
     let listofchecked=[...data.formation]
     const index = listofchecked.indexOf(e.target.value);
      
        if(e.target.checked){ 
            if(index == -1){
               listofchecked.push(e.target.value)   
            }
        }
        else{
            listofchecked.splice(index, 1);
        }
       
        setdata({...data,formation:listofchecked})
    }
  
    return (
        <div>
            <h3><span style={{color:'red'}}>*</span>Required</h3>
            <p>
              1.ID <br/> Veuillez saisir votre ID comme suit : "NOM (lettres majuscules)-Date de naissance (JJMMAA)" par exemple : NOM-011286
            </p>
        <h1 style={{color:"green" ,margin:"10px 5px",textDecoration:'underline'}}>Données personnelles</h1> 
            
            <p>
              2 Postuler à un poste professionnel en tant que ...  <span style={{color:'red'}}>*</span>
            </p>
            
                <input type="checkbox" onChange={handkecheck} value="Doctorat"/> 
                <label for="formation">Doctorat</label><br></br>
               
                <input type="checkbox" onChange={handkecheck} value="Professionnel"/>
                <label for="formation" >Professionnel</label><br></br>

                <input type="checkbox" onChange={handkecheck} value="Formation Professionelle"/>
                <label for="formation" >Formation Professionnel</label><br></br>
             
                 { (required && data.formation.length===0 )? <span style={{color:'red'}}>this qestion is required</span>:''}

                <p>3 Genre <span style={{color:'red'}}>*</span></p>
                  <select onChange={(e)=>{
                     setdata({...data,genre:e.target.value})
                  }}>
                   <option value="" disabled selected>Select your answer</option>
                    <option value='Masuclin'>Masuclin</option>
                    <option value='Femelle'>Femelle</option>
                  </select>

                 { (required && data.genre==='' )? <span style={{color:'red'}}>this qestion is required</span>:''}


                  <p>4 Date de naissance <span style={{color:'red'}}>*</span></p>
                  <input type='date' onChange={(e)=> setdata({...data,datenaissance:e.target.value})}/>

                  { (required && data.datenaissance==='' )? <span style={{color:'red'}}>this qestion is required</span>:''}
            
 
             <div style={{position:'absolute',bottom:0,right:'50%'}}>
             <button onClick={handlenprev}  className='btn-without'> Back</button>  
            <button onClick={handlenext} className='btn-without'> Next</button>       
            </div>         
        </div>
    );
};

export default Section2;