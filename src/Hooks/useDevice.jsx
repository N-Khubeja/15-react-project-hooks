import { useEffect, useState } from "react"

const breakpoint = 576

const detectdevice = () => {
    return window.innerWidth <= breakpoint ? 'MOBILE' : 'DESKTOP'
}

const useDevice = () => {
    const [device,setdevice] = useState(() => detectdevice())
    useEffect(() => {
        const handle = () => {
            setdevice(detectdevice())
            
        }

        window.addEventListener('resize',handle)

        return () => window.removeEventListener('resize',handle)
    },[])

    return device
}

export default useDevice