import React, { createContext,useState ,useEffect} from 'react'
export const WindowSize = createContext();
const WindowContext = ({children}) => {
const [windowSize, setwindowSize] = useState(window.innerWidth);
useEffect(() => {
   function setwindowwidth(){
    setwindowSize(window.innerWidth)
   }
   window.addEventListener('resize', setwindowwidth);
   return ()=>{
    window.removeEventListener('resize', setwindowwidth);
   }
}, [])
return (
    <WindowSize.Provider value={{windowSize,setwindowSize}}>{children}</WindowSize.Provider>
  )
}

export default WindowContext