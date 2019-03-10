import {call, fork} from "redux-saga/effects";

import appSaga from "./app/saga";

export default function* () {
    yield call(console.log, "saga");
    // yield fork(appSaga);
}
