import {call, takeEvery} from "redux-saga/effects";

import appSaga from "./app/saga";
import {ROUTE_ENTERED} from "core/router/actions";

export default function* () {
    yield call(console.log, "saga");

    yield takeEvery(ROUTE_ENTERED, pokus);
}

function* pokus({name}) {
    const [current, ...others] = name;
    yield call(appSaga, current, others);
}
