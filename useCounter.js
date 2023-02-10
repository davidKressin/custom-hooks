import { useState } from "react"


export const useCounter = (initialValue=0)=>{
    const [counter, setCounter] = useState(initialValue);
    // console.log(typeof counter)

    const increment = (value = 1)=>{
        setCounter(current => current + value)
    }
    
    const decrement = (value = 1) =>{
        setCounter(current => current - value)
        // setCounter(counter-value);
    }

    const reset = () =>{
        setCounter(initialValue);
    }
    
    return {
        counter: counter,
        increment: increment,
        decrement:decrement,
        reset:reset
    }
}