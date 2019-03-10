import React from "react";
import {Router} from "@reach/router";
// import PropTypes from "prop-types";
// import IPropTypes from "react-immutable-proptypes";

import CustomRoute from "./CustomRoute";
import RoutesContext from "./RoutesContext";

function createRoutes(routes) {
    return Object.values(routes).map(({component, path, childRoutes}) => {
        if (childRoutes) {
            return {Component: CustomRoute(component), path, childRoutes: createRoutes(childRoutes)};
        } else {
            return {Component: CustomRoute(component), path};
        }
    });
}

function renderRoutes(routesComponents) {
    if(!routesComponents){
        return null;
    }
    return routesComponents.map(({path, Component, childRoutes}) => {
        return <Component path={path} key={path} children={renderRoutes(childRoutes)} />
    });
}

export default (routes) => {
    const routesComponents = createRoutes(routes);

    return () => (
        <RoutesContext.Provider value={routes}>
            <Router>
                {renderRoutes(routesComponents)}
            </Router>
        </RoutesContext.Provider>
    );
};

//
// Routes.propTypes = {
//     routes: IPropTypes.mapOf(PropTypes.shape({
//         ROUTE: PropTypes.string.isRequired,
//         Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
//         scrollTop: PropTypes.bool,
//         exact: PropTypes.bool,
//     })).isRequired,
//     match: PropTypes.shape({
//         path: PropTypes.string.isRequired,
//     }).isRequired,
//     location: PropTypes.shape({
//         search: PropTypes.string,
//     }).isRequired,
//     routeProps: PropTypes.object,
// };
//
// Routes.defaultProps = {
//     routeProps: {},
// };
//
// export default withRouter(Routes);
