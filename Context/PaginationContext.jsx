import { createContext, useState } from "react"

export let PaginationContext = createContext(null)



export let PaginationProvider = ({children})=>{
let [PaginCOMP,setPaginCOMP] = useState(1)
    return(
<PaginationContext.Provider value={{
    PaginCOMP,
    setPaginCOMP
}}>
{children}
</PaginationContext.Provider>
    )
}