import React from "react";
import {Router} from "@reach/router";
import {connect} from 'react-redux';
// import PropTypes from "prop-types";
// import IPropTypes from "react-immutable-proptypes";

import CustomRoute from "./CustomRoute";
import RoutesContext from "./RoutesContext";

import {routeEntered, routeLeft} from "./actions";

function createRoutes(routes, topLevel) {
    return Object.keys(routes).map((name) => {
        const {component, path, childRoutes} = routes[name];
        if (childRoutes) {
            return {Component: CustomRoute({name, topLevel})(component), path, childRoutes: createRoutes(childRoutes, false)};
        } else {
            return {Component: CustomRoute({name, topLevel})(component), path};
        }
    });
}

function renderRoutes(routesComponents, onEnter, onEnterEnd, onLeave) {
    if(!routesComponents){
        return null;
    }
    return routesComponents.map(({path, Component, childRoutes}) => {
        return (
            <Component
                onEnter={onEnter}
                onEnterEnd={onEnterEnd}
                onLeave={onLeave}
                path={path}
                key={path}
                children={renderRoutes(childRoutes, onEnter, onEnterEnd, onLeave)}
            />
        )
    });
}

export default (routes) => {
    const routesComponents = createRoutes(routes, true);

    const stack = [];

    const Component = ({onEnter, onEnterEnd, onLeave}) => (
        <RoutesContext.Provider value={routes}>
            <Router>
                {renderRoutes(routesComponents, onEnter, onEnterEnd, onLeave)}
            </Router>
        </RoutesContext.Provider>
    );

    const mapDispatchToProps = (dispatch) => ({
        onEnter: (name) => stack.unshift(name),
        onEnterEnd: () => {
            const items = stack.splice(0, stack.length);
            if(items.length){
                dispatch(routeEntered(items));
            }
        },
        onLeave: (name) =>dispatch(routeLeft(name)),
    });

    return connect(undefined, mapDispatchToProps)(Component);
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
