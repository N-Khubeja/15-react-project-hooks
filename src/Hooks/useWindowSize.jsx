import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [button,setbutton] = useState(false)
            
    useEffect(() => {
        const handlescroll = () => {
            if(document.documentElement.getBoundingClientRect().bottom <= window.innerHeight+10){
                setbutton(true)
            } else {
                setbutton(false)
            }
            
        }

        document.addEventListener('scroll',handlescroll) 

        return () => document.removeEventListener('scroll',handlescroll) 
      },[])

    return button

}


export default useWindowSize




