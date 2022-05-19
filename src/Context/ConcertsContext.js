import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ConcertsContext = createContext();

const getUrl = "https://pubghm.herokuapp.com/main.json"

export const ConcertsProvider = ({children}) => {
    const [concerts, setConcerts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchConcerts()
        
    }, [concerts])

    // Fetch concerts
    const fetchConcerts = async () => {
        const response = await axios.get(getUrl, {mode: 'no-cors'})      
        setConcerts(response.data); 
        setIsLoading(false)     
    }

    

    return <ConcertsContext.Provider value={{
        concerts,
        isLoading
    }}>
        {children}
    </ConcertsContext.Provider>
}

export default ConcertsProvider