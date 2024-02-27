import React, { useEffect, useState } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import { useNavigate } from 'react-router-dom';

const Sections = () => {
    const sectionsl=3
      const [dataform,setDataform]=useState({})
      const [step, setStep] = useState(1);
      const navigate=useNavigate()

  const nextStep = (data) => {
    setDataform({...dataform,...data})
    if(step<sectionsl)
      setStep((prev)=>prev+1);
  };

  const prevStep = () => {
    if(step<=1)
       navigate('/table')
    else
       setStep((prev)=>prev-1);
  };
  useEffect(()=>{
        console.log(dataform)
  },[dataform])


    return (
        <div className='table'>
            
        <h1 style={{color:"#a34d13",textAlign:"center"}}> Anas: Application (FR) - Anonym -</h1>     
        {step === 1 && <Section1 dataform={dataform} onNext={nextStep}  onPrev={prevStep}/>}
        {step === 2 && <Section2 dataform={dataform}  onNext={nextStep} onPrev={prevStep} />}
        {step === 3 && <Section3 dataform={dataform}  onNext={nextStep} onPrev={prevStep} />}
    
       <div>
                 
       </div>

        </div>
    );
};

export default Sections;