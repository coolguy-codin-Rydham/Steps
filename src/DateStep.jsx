import { useState } from "react"

const DateStep = () => {
    const [step, setStep] = useState(0);
    const [count , setCount] = useState(1);
  return (
    <div>
      <div style={{display: "flex", gap:"10px"}}>
        <button onClick={()=>setStep(step+1)}>+</button>
        <p>{step}</p>
        <button onClick={()=>setStep(step-1)}>-</button>
      </div>
      <div style={{display: "flex", gap: "10px"}}>
        <button onClick={()=>setCount(count+step)}>+</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-step)}>-</button>
      </div>
    </div>
  )
}

export default DateStep
