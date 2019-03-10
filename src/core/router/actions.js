import {NAME} from './constants';

export const ROUTE_ENTERED = `${NAME}/ROUTE_ENTERED`;
export const ROUTE_LEFT = `${NAME}/ROUTE_LEFT`;
// export const TRANSITION = `${NAME}/TRANSITION`;
// export const TRANSITION_ROUTE = `${NAME}/TRANSITION_ROUTE`;
// export const GO_BACK = `${NAME}/GO_BACK`;

export const routeEntered = (name) => ({
    type: ROUTE_ENTERED,
    name,
});

export const routeLeft = (name) => ({
    type: ROUTE_LEFT,
    name,
});


// export const transition = (pathArray = [], params = {}, query = {}) => ({
//     type: TRANSITION,
//     pathArray,
//     params,
//     query,
// });
//
// export const goBack = (depth = 1) => ({
//     type: GO_BACK,
//     depth,
// });
//
// export const transitionRoute = (url) => ({
//     type: TRANSITION_ROUTE,
//     url,
// });
