import queryString from "query-string";

import history from "./history";
import {getStaticUrl} from './staticRouteRegister';
import {BACK_PARAM} from './constants';

const createHrefFromHistory = (pathname, query = {}) => history.createHref({pathname, search: queryString.stringify(query)});

export const createHrefFromCurrent = (match, path = "", params = {}) => {
    const route = Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), path);
    return createHrefFromHistory(`${match.url}${route}`);
};

export const createHref = (routeArray, params, query) => createHrefFromHistory(getStaticUrl(routeArray, params), query);
export const createHrefWithBack = (routeArray, params, query) => createHref(routeArray, params, {...query, [BACK_PARAM]: getCurrentUrlRoute()});
export const getCurrentUrlRoute = () => history.location.pathname;
