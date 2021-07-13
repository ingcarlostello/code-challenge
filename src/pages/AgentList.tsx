import React from "react";

// @Components
import AgentCard from "../components/AgentCard";
import OrderAgentsBy from "../components/OrderAgentsBy";
import SeeMoreSeeLess from "../components/SeeMore_SeeLess";

// @labels
import { labels } from "../labels/labels";

const AgentList = () => {
  return (
    <>
      <div>
        <div className="mt-8">
          <p className="text-3xl font-bold text-gray-600 font-sans text-center mb-4">
            {labels.yourMatches}
          </p>
          <p className="text-lg font-sans text-gray-600 text-center mb-14">
            {labels.yourIncome}: <strong>$400,000</strong>{" "}
          </p>
        </div>

        <div className="grid ">
          <div className="float-right pl-20 mb-4">
            <div>
              <OrderAgentsBy />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            <div>
              <AgentCard />
            </div>

            <div>
              <AgentCard />
            </div>

            <div>
              <AgentCard />
            </div>

            <div>
              <AgentCard />
            </div>

            <div>
              <AgentCard />
            </div>

            <div>
              <AgentCard />
            </div>
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
