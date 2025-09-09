import { type ReactNode, createContext, useContext, useState } from "react";

interface sideType{
    sidebarOpen : boolean,
    setSidebarOpen : (statu : boolean)=> void
}

 export const SideContext = createContext<sideType|undefined>(undefined)

 export const SideProvider = (props : {children:ReactNode})=>{
     const [sidebarOpen, setSidebarOpener ] = useState(false)
     const setSidebarOpen = (statu : boolean)=> {
        setSidebarOpener(statu)
     }

    return(
        <SideContext.Provider value={{sidebarOpen,setSidebarOpen}}>
            {props.children}
        </SideContext.Provider>
    )


}


export const useSide  = () : sideType => {
    const context = useContext(SideContext) 
    if (!context) {
        throw new Error("erreur de creation de context")   
    }
     return context
}

