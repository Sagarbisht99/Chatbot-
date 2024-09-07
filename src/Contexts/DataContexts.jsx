import React, { createContext, useContext, useEffect, useState } from 'react'


const DataContext =  createContext({});

const DataContexts = ({children}) => {
  const [descriptions, setDescriptions] = useState("");
    const [showInputs, setshowInputs] = useState(false);
  
    const [items, setitems] = useState([]);
    const DeleteData = (index) => {
       const newItems = items.filter((__ , id) => id !== index);
       setitems(newItems)
    }

    const clickingAddData = () => {
          setshowInputs(!showInputs);
    }

    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('items')) || [];
      setitems(storedItems);
    }, []);
  
 
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  return (
    <div>
        <DataContext.Provider value={{clickingAddData  , DeleteData , descriptions , setDescriptions , items ,setitems , showInputs , setshowInputs}} >
            {children}
        </DataContext.Provider>
    </div>
  )
}

export const useData = () => {
    return useContext(DataContext);
}

export default DataContexts