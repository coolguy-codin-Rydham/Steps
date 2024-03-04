import {useState} from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [isOpen, setIsOpen] = useState(true)
  
  let [step, setStep] = useState(1);
  const handlePrev = () =>{
    if(step>1)setStep((s)=>s-1)
  }
  const handleNext = () =>{
    if(step<3){
      setStep((s)=>s+1)
    }
  }
  return (
    <>
    <button className='close' onClick={()=>setIsOpen((is)=>!is)}> {isOpen && <>&times;</>} {!isOpen && <>&#9776;</>}</button>

    { isOpen &&
    (<div className="steps">
      <div className="numbers">
        <div className={step>=1? 'active':''}>1</div>
        <div className={step>=2? 'active':''}>2</div>
        <div className={step>=3? 'active':''}>3</div>
      </div>
      <p className="message">Step {step}: {messages[step-1]}</p>
      <div className="buttons">
        <button onClick={handlePrev} style={{backgroundColor: "#7950f2", color: "#ffffff"}}>Prev</button>
        <button onClick={handleNext} style={{backgroundColor: "#7950f2", color: "#ffffff"}}>Next</button>
      </div>
    </div>)
    }
    </>
  );
}

export default App;
