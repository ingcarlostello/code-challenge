import React from 'react';

// @Labels
import { labels } from '../labels/labels';



const GetMatchesButton = () => {
    return (
        <>
            <div className="mb-2">
                <button
                    className="w-40 px-5 py-3 rounded-lg text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
                >
                    {labels.btnGetMatches}
                    <i className="fas fa-arrow-right mdi mdi-circle-outline ml-3 text-xl align-middle leading-none"></i>
                </button>
            </div>

        </>
    );
};

export default GetMatchesButton;

