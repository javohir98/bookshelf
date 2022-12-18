import React, { createContext, useContext, useState } from "react";
import { IBook, IContext, IProviderProps } from "../types/type";


// const AppContext = createContext<IContext | null>(null)

// export const useAppContext = () => {
//     return useContext(AppContext)
// }

// export const AppProvider = ({ children }: IProviderProps) => {
//     const [books, setBooks] = useState<IBook[]>([])

//     return (
//         <AppContext.Provider value={{ books, setBooks }}>
//             {children}
//         </AppContext.Provider>
//     )
// }
