import React, {useContext} from 'react'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{

        }}>
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)