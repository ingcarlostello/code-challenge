import React from 'react';

const OrderAgentsBy = () => {
    return (
        <>

            <p className="text-base font-sans">Order agets by</p>
            <select name="cars" id="cars" form="carform" className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-2 border-gray-300 rounded-md h-12 w-52" >
                <option hidden selected>Select...</option>
                <option className="p-5" value="volvo">Name (A-Z)</option>
                <option className="h-40 " value="saab">Income: High first</option>
                <option className="h-12" value="opel">Income: Low first</option>
            </select>
        </>
    );
};

export default OrderAgentsBy;