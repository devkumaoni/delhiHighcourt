import { createContext, useState } from "react";

const useYear =  createContext();

export default function ContextProviderYear({children}) {
  const [year,setYear] = useState(NaN);
    return (
<useYear.Provider value={[year,setYear]}>{children}</useYear.Provider>
  )
}


export {useYear};