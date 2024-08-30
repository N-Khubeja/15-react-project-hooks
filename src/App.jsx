
import { useEffect, useRef } from 'react';
import './App.css';
import useLocalStorage from './Hooks/useLocalStorage';
import useCopy from './Hooks/useCopy';
import useWindowSize from './Hooks/useWindowSize';
import useBackTop from './Hooks/useBackTop';
import useDevice from './Hooks/useDevice';

function App() {
  
  

 const [value,setvalue] = useLocalStorage('tab',true)
 const [iscopy,makecopy] = useCopy()
 const inputref = useRef()
 const button = useWindowSize()
 const backtotop = useBackTop()
 const device = useDevice()

  useEffect(() => {
    if(device === 'MOBILE'){
      setvalue(false)
    } else {
      setvalue(true)
    }
  },[device])



 useEffect(() => {
  document.body.style.background = value ? 'black' : 'white'
 },[value])


 useEffect(() => {
  inputref.current.value = ''
 },[iscopy])
  
  return (
    <div  className="App">
        <h1>sheesh</h1>
        {value && <button onClick={() => setvalue((prevvalue) => !prevvalue)}>dark mode</button>}
        <div>
          <input ref={inputref} type="text" />
          <button onClick={() => makecopy(inputref.current.value)}>copy</button>
          {iscopy &&  <p>copied</p>}
          {device && <h1>{device}</h1>}
        </div>
          
      {button && <p className='up' onClick={backtotop}>up</p>}
    </div>
  );
}
  
export default App;
