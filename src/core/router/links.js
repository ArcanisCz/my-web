export const createLink = (route = []) => {
    return route.map((item) => item.path).join("");
};
