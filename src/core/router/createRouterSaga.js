import {call, actionChannel, take, fork, cancel, all, takeEvery} from 'redux-saga/effects';

import createRouteMatcher from "./createRouteMatcher";

export default (routes, pageSaga, routeSaga) => function* routerSaga(...params) {
    // console.log(routes);
    const requestChan = yield actionChannel(createRouteMatcher(Object.keys(routes)));

    try {
        // start both sagas simultaneously, but wait only for the blocking one
        yield call(pageSaga);

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
