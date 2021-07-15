import React, { useContext, useEffect } from 'react';
import { AgentsContext } from '../context/AgentsContext';



const SeeMore_SeeLess = () => {

    const {seeMoreAgents, showLeesAgentsOnlist} = useContext(AgentsContext)

    // useEffect(() => {
    //     getFirstThreeAgents()     
    // }, [agentSeekerPage])

    // const seeMore = () => {
    //     console.log('click to see more');      
    //     seeMoreAgents()  
    // }

    const showLessAgents = () => {
        showLeesAgentsOnlist()
    }
    return (
        <>
            <div>
                <span onClick={showLessAgents}  style={{ color: "#5C7BEB" }} className="mr-5 font-bold cursor-pointer">Show less <span className="ml-4">-</span></span>
                <span onClick={() => seeMoreAgents()}  style={{ color: "#5C7BEB" }} className="font-bold cursor-pointer">Show more <span className="ml-4">+</span></span>
            </div>
        </>
    );
};

export default SeeMore_SeeLess;