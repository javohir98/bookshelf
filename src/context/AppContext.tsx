import React, { createContext, useContext, useReducer, useState } from "react";
import { IBook, IContext, IProviderProps } from "../types/type";


// const AppContext = createContext({} as IContext)

// export const useAppContext = () => {
//     return useContext(AppContext)
// }

// export const AppProvider = ({ children }: IProviderProps) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const value = {
//         books,
//         setBooks
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }
