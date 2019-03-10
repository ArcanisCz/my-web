import {takeEvery, call, select, fork, take} from "redux-saga/effects";
import queryString from "query-string";

import {userApi} from 'serverAPI';
import {saga, fn} from 'core/util';

import {getStaticUrl} from "./staticRouteRegister";
import {TRANSITION, TRANSITION_ROUTE, ROUTE_ENTERED, GO_BACK} from "./actions";
import history from "./history";
import {getCurrentParams} from "./selectors";


export default function* ({removeQueryParams = false} = {}) {
    if (removeQueryParams) {
        /* eslint-disable no-restricted-globals */
        const replacedHref = location.href.replace(/\?.*/, "");
        if (replacedHref !== location.href) {
            location.href = replacedHref;
            yield call(fn.block); // this ensures no other code from this saga is executed before browser do a redirect
        }
        /* eslint-enable */
    }
    if (window.ga) {
        yield fork(gaSaga);
    }
    yield takeEvery(TRANSITION, transitionSaga);
    yield takeEvery(TRANSITION_ROUTE, transitionRouteSaga);
    yield takeEvery(GO_BACK, goBackSaga);
    yield saga.throttle(30000, ROUTE_ENTERED, userApi.extendSession);
}

function* transitionSaga({pathArray, params, query}) {
    const activeParams = yield select(getCurrentParams);
    const mergedParams = Object.assign(activeParams, params);
    const route = getStaticUrl(pathArray, mergedParams);
    yield call(history.push, {pathname: route, search: queryString.stringify(query)});
}

function* transitionRouteSaga({url}) {
    yield call(history.push, url);
}

function* goBackSaga({depth}) {
    yield call(history.go, -Math.abs(depth));
}


function* gaSaga() {
    let previousNormalizedUrl = null;
    while (true) {
        // ROUTE_ENTERED is triggered multiple times for nested routes. We want only first unique full url hit
        yield take(ROUTE_ENTERED);
        const url = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        const normalizedUrl = url
            .replace(/[0-9]+/g, "xxxxxx") // anonymize numbers
            .replace(/\?.*$/, "") // remove query params
            .replace(/#\/$/, ""); // remove trailing react navigation slash
        if (previousNormalizedUrl !== normalizedUrl) {
            window.ga('send', 'pageview', normalizedUrl);
        }
        previousNormalizedUrl = normalizedUrl;
    }
}
