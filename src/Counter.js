import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react"

export default function Counter(){
   
    const [now, setNow] = useState(new Date())
    const [state, setState] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 100)
        return(()=>clearInterval(interval))
    }, [])

    console.log(now)
    const target = new Date()

    target.setHours(12,0,0)

    if (target < now) {
        target.setDate(target.getDate()+1)
    }

    const timeRemaining = new Date(Math.abs(target-now))
    timeRemaining.setHours(timeRemaining.getHours()-1)

    return <div>det er (ER DU HELT SIKKER PÅ DET?) {timeRemaining.getHours()}:{timeRemaining.getMinutes()}:{timeRemaining.getSeconds()}tid til lunch</div>
}