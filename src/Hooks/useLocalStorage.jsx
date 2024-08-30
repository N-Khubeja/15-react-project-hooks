import { useEffect, useState } from "react"





const useLocalStorage = (key,fallback) => {
    
    
    const [ value,setvalue] = useState(
        JSON.parse(localStorage.getItem(key) ?? fallback)
    )
    useEffect(() => {
        
            localStorage.setItem(key,JSON.stringify(value))
           


    },[key,value])
 
    return [value,setvalue]
}

export default useLocalStorage