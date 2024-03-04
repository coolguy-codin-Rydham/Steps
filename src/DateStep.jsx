import { useState } from "react"

const DateStep = () => {
    const [step, setStep] = useState(0);
    const [count , setCount] = useState(1);
  return (
    <div>
      <input type="range" min={0} max={10} value={step} onChange={e=>setStep(Number(e.target.value))}/>
    <input type="text" value={step} onChange={(e)=>setCount(Number(e.target.value))} />
    </div>
  )
}

export default DateStep
