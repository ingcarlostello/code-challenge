import React from 'react';

const SeeMore_SeeLess = () => {
    return (
        <>
            <div>
                <span  style={{ color: "#5C7BEB" }} className="mr-5 font-bold cursor-pointer">Show less <span className="ml-4">-</span></span>
                <span  style={{ color: "#5C7BEB" }} className="font-bold cursor-pointer">Show more <span className="ml-4">+</span></span>
            </div>
        </>
    );
};

export default SeeMore_SeeLess;