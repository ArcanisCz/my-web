import {call, fork, all, takeEvery} from 'redux-saga/effects';

import createRouteMatcher from "./createRouteMatcher";

export default (routes, blockingSaga, nonBlockingSaga, childrenRouteSagas = []) => function* routerSaga(name, others) {
    const routeNames = Object.keys(routes);
    if(routeNames.includes(name)){
        const process = yield fork(callAaa, blockingSaga, nonBlockingSaga, name, others, childrenRouteSagas);
        yield takeEvery(createRouteMatcher(routeNames), cancelProcess, process);
    } else {
        for(let childSaga of childrenRouteSagas){
            yield call(childSaga, name, others);
        }
    }
};

function* callAaa(blockingSaga, nonBlockingSaga, name, others, childrenRouteSagas) {
    yield all([
        call(blockingSaga, name),
        fork(nonBlockingSaga, name),
    ]);

    const [childName, ...childOthers] = others;
    for(let childSaga of childrenRouteSagas){
        yield call(childSaga, childName, childOthers);
    }
}

function cancelProcess(process) {
    process.cancel();
}
