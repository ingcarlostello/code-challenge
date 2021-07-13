import React from "react";

// @assets
import zoeLogo from "../assets/zoe.png";
import usersImage from "../assets/users.png";

// @Components
import CurrentIncome from "../components/CurrentIncome";

// @Labels
import { labels } from "../labels/labels";

const AgentSeeker = () => {
    return (
        <>
            <div className="relative bg-gray-50 pl-4 py-3">
                <div>
                    <a href="https://zoefin.com/">
                        <img className="h-8 w-auto sm:h-10" src={zoeLogo} alt="zoe" />
                    </a>
                </div>
            </div>
            <div className="flex h-screen justify-center items-center">
                <div className="grid justify-items-stretch">
                    <div className="justify-self-center mb-6">
                        <img className="h-8 w-auto sm:h-10" src={usersImage} alt="zoe" />
                    </div>
                    <div className="justify-self-center">
                        <p className="text-3xl font-bold text-gray-600 font-sans text-center mb-4">{labels.findBestAgent}</p>
                        <p className="text-base font-sans text-center mb-14">{labels.fillInformation}</p>
                    </div>
                    <div>
                        <CurrentIncome />
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default AgentSeeker;
