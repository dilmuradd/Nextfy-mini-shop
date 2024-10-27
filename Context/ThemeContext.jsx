import { createContext,useState } from "react";

 export let ThemeContextT = createContext(null)

export let ThemeProviderT = ({children})=>{

    let [isHandleTheme,setIsHandletheme] = useState(true)


    return(
        <ThemeContextT.Provider value={{
            isHandleTheme,
            setIsHandletheme
        }}>
            {children}
        </ThemeContextT.Provider>
    )

}