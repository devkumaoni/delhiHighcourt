import { createContext, useState } from "react";

const useMonth =  createContext();

export default function ContextProviderMonth({children}) {
  const [month,setMonth] = useState(NaN);
    return (
    <useMonth.Provider value={[month,setMonth]}>{children}</useMonth.Provider>
  )
}


export {useMonth};