const { createContext, useState, useContext} = require("react")

const FindedDataContext = createContext()
const abortController = new AbortController()

export const useFindedData = () => useContext(FindedDataContext)

export const FindedDataProvider = ({children}) =>{
    const [findedData, setFindedData] = useState()

    

    const cancelLastFetch = async () => abortController.abort()

    const findData = async ({email, number}) =>{
        const {signal} = abortController
        console.log(signal);
        cancelLastFetch()
        return await fetch('http://localhost:5000/api?' + new URLSearchParams({
           email,
           number 
        }, {signal})
        )
            .then(res => res.json())
            .then(data => setFindedData(data))
            .catch(err => console.log(err))
            
    }

    return(
        <FindedDataContext.Provider value={{findedData, findData, cancelLastFetch}}>
            {children}
        </FindedDataContext.Provider>
    )
}