import {Map} from "immutable";

let memory = Map();

export const registerRoutes = (object) => {
    const map = Map(object);
    memory = memory.merge(map.map((value) => value.ROUTE));
    return map;
};

export const getRegisteredRoutes = () => memory;

export const getStaticUrl = (routeArray, params = {}) => {
    const path = ["/", ...routeArray.map((name) => memory.get(name))].join("");
    return Object.keys(params).reduce((acc, key) => acc.replace(new RegExp(`:${key}\\??`), params[key]), path);
};
