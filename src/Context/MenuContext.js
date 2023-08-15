// import React, { createContext ,useState} from 'react'
// export const Menu = createContext(true);
// const MenuContext = ({children}) => {

//     const [isopen, setisopen] = useState(true)

//   return (
//     <Menu.Provider value={{isopen,setisopen}}>{children}</Menu.Provider>
//   );
// }

// export default MenuContext




import React, { createContext ,useState} from 'react'
export const Menu = createContext(true);
export default function MenuContext ({children}){
        const [isopen, setisopen] = useState(true)

    return (
        <Menu.Provider value={{isopen,setisopen}}>{children}</Menu.Provider>
      );
}