import {combineReducers} from "redux";

import {ROUTE_ENTERED} from "./actions";

// const activeRoute = (state = null, {type, name}) => {
//     switch (type) {
//         case ROUTE_ENTERED:
//             return name;
//         default:
//             return state;
//     }
// };

const activeRouteParams = (state = null, {type}) => {
    switch (type) {
        case ROUTE_ENTERED:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    // activeRoute,
    activeRouteParams,
});
