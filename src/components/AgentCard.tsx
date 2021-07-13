import React from "react";

import woman from "../assets/agentWoman1.png";

const AgentCard = () => {
  return (
    <>
      <div
        className="shadow-xl rounded-lg overflow-hidden w-72 h-80 grid pb-5 "
        style={{ background: "#F5F5F5" }}
      >
        <div className="bg-white h-60 grid place-items-center pt-4">
          <img src={woman} alt="woman" />
          <div className="p-4 grid">
            <p className="tracking-wide text-sm font-bold text-gray-600 text-xl font-sans place-self-center">
              Paul Stevens
            </p>
            <p className="text-gray-600 text-base font-sans place-self-center">
              ID: 1095787327
            </p>
          </div>
        </div>
        <p className="place-self-center">
          Income: <strong className="text-gray-600">$200,000</strong>
        </p>
      </div>
    </>
  );
};

export default AgentCard;
