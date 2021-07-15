import React, { useContext, useState } from 'react';
import { AgentsContext } from '../context/AgentsContext';



const OrderAgentsBy = () => {


    // const [orderAgentsBy, setOrderAgentsBy] = useState('')

    const {selectCategory} = useContext(AgentsContext)


    return (
        <>
            <p className="text-base font-sans">Order agents by</p>
      
            <select 
                className="focus:ring-indigo-500 focus:border-indigo-500 lg:w-56 sm:text-sm border-2 border-gray-300 rounded-md h-12 w-full" 
                onChange={e => selectCategory(e.target.value)}
                // value={orderAgentsBy}
            >
                <option hidden selected>Select...</option>
                <option className="p-5"     value="alphabetically">Name (A-Z)</option>
                <option className="h-40"    value="highIncome">Income: High first</option>
                <option className="h-12"    value="lowIncome">Income: Low first</option>
            </select>
        
            
        </>
    );
};

export default OrderAgentsBy;