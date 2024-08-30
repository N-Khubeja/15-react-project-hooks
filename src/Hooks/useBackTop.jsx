import { useCallback } from "react"

const useBackTop = () =>{

    const backtotop =  useCallback(() => {
        window.scrollTo({ top: 0, behavior:'smooth'  });
    },[])

    return backtotop

}

export default useBackTop