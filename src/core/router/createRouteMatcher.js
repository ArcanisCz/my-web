import {ROUTE_ENTERED} from "./actions";

/**
 * @param {String[]} routesList
 */
export default (routesList) => ({type, name}) => (type === ROUTE_ENTERED && routesList.includes(name));
