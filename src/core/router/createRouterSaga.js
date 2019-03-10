import {call, actionChannel, take, fork, cancel, all} from 'redux-saga/effects';
import {Map} from "immutable";

import {fn} from "core/util";

import createRouteMatcher from "./createRouteMatcher";

export default (routesArray, blockingPageSaga, nonBlockingPageSaga, routeSaga = fn.noop) => function* routerSaga(...params) {
    let routes = routesArray;
    if (Map.isMap(routesArray)) {
        routes = Object.keys(routesArray.toJS());
    }

    const requestChan = yield actionChannel(createRouteMatcher(routes));
    try {
        // start both sagas simultaneously, but wait only for the blocking one
        yield all([
            blockingPageSaga ? call(blockingPageSaga, ...params) : fn.noop(),
            nonBlockingPageSaga ? fork(nonBlockingPageSaga, ...params) : fn.noop(),
        ]);

        // custom takeLatest, because usage of takeLatest throwed actionChannel buffer overflow error after 10 page routes
        let lastTask;
        while (true) {
            const action = yield take(requestChan);
            if (lastTask) {
                yield cancel(lastTask);
            }
            lastTask = yield fork(routeSaga, action, ...params);
        }
    } finally {
        // this is actually pretty well reachable code due to task canncellation
        // https://redux-saga.js.org/docs/advanced/TaskCancellation.html
        requestChan.close();
    }
};
