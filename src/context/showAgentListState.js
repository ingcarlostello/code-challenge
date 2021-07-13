import React, { useReducer } from "react";

// @Context
import showAgentListContext from "./showAgentListContext";

// @Reducers
import showAgentListReducer from "./showAgentListReducer";

// @Types
import types from "../types";

const ShowAgentListStateProvider = (props) => {
    const initialState = {
        showAgentList: true,
    };

    const [state, dispatch] = useReducer(showAgentListReducer, initialState);

    const activateAgentList = () => {
        dispatch({
            type: types.SHOW_AGENT_LIST,
        });
    };

    return (
        <showAgentListContext.Provider
            value={{
                // *-states
                showAgentList: state.showAgentList,

                // *-functions
                activateAgentList,
            }}
        >
            {props.children}
        </showAgentListContext.Provider>
    );
};

export default ShowAgentListStateProvider;
