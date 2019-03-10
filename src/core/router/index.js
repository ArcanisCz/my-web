// import {Router} from "react-router-dom";

import {NAME} from './constants';
import reducer from "./reducer";
// import CustomRoute from "./CustomRoute";

// import history from "./history";
import createRouterSaga from "./createRouterSaga";
import createRoutes from "./createRoutes";
import {createLink} from "./links";
import RoutesContext from "./RoutesContext";
// import saga from "./saga";
// import {transition, transitionRoute, goBack} from "./actions";
// import {getRegisteredRoutes, registerRoutes, getStaticUrl} from "./staticRouteRegister";
// import {createHrefFromCurrent, createHref, createHrefWithBack, getCurrentUrlRoute} from "./createHref";

/**
 * ROUTER MODULE
 */
const router = {
    NAME,
    // BACK_PARAM,
    // history,
    createRouterSaga,
    // Router,
    // Routes,
    // saga,
    reducer,
    // CustomRoute,
    createRoutes,
    createLink,
    RoutesContextConsumer: RoutesContext.Consumer,
    // transition,
    // goBack,
    // transitionRoute,
    // registerRoutes,
    // getRegisteredRoutes,
    // createHrefFromCurrent,
    // getStaticUrl,
    // createHref,
    // createHrefWithBack,
    // getCurrentUrlRoute,
};
export default router;
