import { createContext, useState } from "react"

export let SearchContext = createContext(null)

export let SearchProvider = ({children})=>{
let [SearchValue,setSearchValue] = useState('')
    return(
        <SearchContext.Provider value={{
            SearchValue,
            setSearchValue
        }}>
            {children}
        </SearchContext.Provider>
    )
}