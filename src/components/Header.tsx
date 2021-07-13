import React from 'react';

import zoeLogo from "../assets/zoe.png"

const Header = () => {
    return (
        <>
            <div className="relative bg-gray-50 pl-4 py-3">
                <div>
                    <a href="https://zoefin.com/">
                        <img className="h-8 w-auto sm:h-10" src={zoeLogo} alt="zoe" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;