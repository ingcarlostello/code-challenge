// @React
import React, { useContext } from "react";

// @Context
import { AgentsContext } from "../context/AgentsContext";

const SeeMore_SeeLess = () => {
    const { seeMoreAgents, seeLessAgents } = useContext(AgentsContext);

    // const showLessAgents = () => {
    //     showLeesAgentsOnlist();
    // };

    return (
        <>
            <div>
                <span
                    className="mr-5 font-bold cursor-pointer"
                    onClick={() => seeLessAgents()}
                    style={{ color: "#5C7BEB" }}
                >
                    Show less <span className="ml-4">-</span>
                </span>
                <span
                    className="font-bold cursor-pointer"
                    onClick={() => seeMoreAgents()}
                    style={{ color: "#5C7BEB" }}
                >
                    Show more <span className="ml-4">+</span>
                </span>
            </div>
        </>
    );
};

export default SeeMore_SeeLess;
