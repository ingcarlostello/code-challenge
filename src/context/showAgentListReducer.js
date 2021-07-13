// @Types
import types from "../types";

const showAgentListReducer = (state, action) => {
    switch (action.type) {
        case types.SHOW_AGENT_LIST:
            return {
                ...state,
                showAgentList: false,
            };

        default:
            return state;
    }
};

export default showAgentListReducer;
