import {combineReducers} from "redux";

import router from "./core/router";

export default combineReducers({
    [router.NAME]: router.reducer,
});
