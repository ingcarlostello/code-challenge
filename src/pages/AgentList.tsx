import React, { useContext } from "react";

// @Components
import AgentCard from "../components/AgentCard";
import OrderAgentsBy from "../components/OrderAgentsBy";
import SeeMoreSeeLess from "../components/SeeMore_SeeLess";
import { AgentsContext } from "../context/AgentsContext";



// @labels
import { labels } from "../labels/labels";

const AgentList = () => {

  const {income, firtsThreeAgents} = useContext(AgentsContext)

  return (
    <>
      <div>
        <div className="mt-8">
          <p className="text-3xl font-bold text-gray-600 font-sans text-center mb-4">
            {labels.yourMatches}
          </p>
          <p className="text-lg font-sans text-gray-600 text-center mb-14">
            {labels.yourIncome}: <strong>${income}</strong>{" "}
          </p>
        </div>

        <div className="grid ">
          <div className="float-right pl-20 mb-4">
            <div>
              <OrderAgentsBy />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {
              firtsThreeAgents.map((filterAgent:any) => (
                <div>
                  <AgentCard 
                    agentName={filterAgent.name}
                    agentId={filterAgent.id}
                    agentIncome={filterAgent.income}
                    agentAvatar={filterAgent.avatar}
                  />
                </div>
              ))
            }
           
           
          </div>

          <div className="grid grid-cols-1 gap-4 justify-items-end pr-20 mt-12">
            <div>
              <SeeMoreSeeLess />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentList;
