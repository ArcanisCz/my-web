import {ROUTE_LEFT} from "./actions";

/**
 * @param {String[]} routesList
 */
export default (routesList) => ({type, name}) => {
    // console.log(routesList, type, name);
    return (type === ROUTE_LEFT && routesList.includes(name))
};
