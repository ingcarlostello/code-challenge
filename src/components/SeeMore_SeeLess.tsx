import React, { useContext, useEffect } from 'react';
import { AgentsContext } from '../context/AgentsContext';



const SeeMore_SeeLess = () => {

    const {getFirstThreeAgents, showLeesAgentsOnlist} = useContext(AgentsContext)

    // useEffect(() => {
    //     getFirstThreeAgents()     
    // }, [agentSeekerPage])

    const seeMoreAgents = () => {
        console.log('click to see more');        
        getFirstThreeAgents()      
    }

    const showLessAgents = () => {
        showLeesAgentsOnlist()
    }
    return (
        <>
            <div>
                <span onClick={showLessAgents}  style={{ color: "#5C7BEB" }} className="mr-5 font-bold cursor-pointer">Show less <span className="ml-4">-</span></span>
                <span onClick={seeMoreAgents}  style={{ color: "#5C7BEB" }} className="font-bold cursor-pointer">Show more <span className="ml-4">+</span></span>
            </div>
        </>
    );
};

export default SeeMore_SeeLess;