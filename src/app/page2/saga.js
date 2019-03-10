import {call} from "redux-saga/effects";

import router from "core/router";

import routes from "./routes";

export default router.createRouterSaga(routes, blockingSaga, nonBlockingSaga);

function* blockingSaga(name) {
    yield call(console.log, "page2", "blocking" , name);
}

function* nonBlockingSaga(name) {
    // yield delay(3000);
    yield call(console.log, "page2", "nonblocking" , name);
}
