import {call, delay} from "redux-saga/effects";

import router from "core/router";
import routes from "./routes";

// import page2saga from "./page2/saga";

export default router.createRouterSaga(routes, routeSaga);

function* pageSaga() {
    yield call(console.log, "app", "pageSaga");

}

function* routeSaga({name}) {
    yield call(console.log, "app", "routeSaga", name);
    switch (name) {
        case "page2":
            // yield call(page2saga)
    }

}
