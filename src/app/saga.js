import {call} from "redux-saga/effects";

import router from "core/router";

import page2saga from "./page2/saga";

import routes from "./routes";

export default router.createRouterSaga(routes, blockingSaga, nonBlockingSaga, [page2saga]);

function* blockingSaga(name) {
    yield call(console.log, "app", "blocking", name);
    // yield delay(3000);
}

function* nonBlockingSaga(name) {
    // yield delay(3000);
    yield call(console.log, "app", "nonblocking", name);
}
