import { useEffect, useState } from "react"

const useCopy = () => {
    const [iscopy,setiscopy] = useState(false)

    const makecopy = (value) => {
        if(typeof value === 'string'){
            navigator.clipboard.writeText(value)
            setiscopy(true)
        } else {
            setiscopy(false)
            alert('text or fuck off')
        }
    }

    useEffect(() => {
        let time
        time = setTimeout(() => setiscopy(false),3000)
        
        return (() => clearTimeout(time))
        
    },[iscopy])

    return [iscopy,makecopy]

 
}

export  default useCopy