import React from "react";
import {Router} from "@reach/router";
// import PropTypes from "prop-types";
// import IPropTypes from "react-immutable-proptypes";

import CustomRoute from "./CustomRoute";

export default (routes) => {
    const routesComponents = routes.map(({name, component}) => {
       return CustomRoute({name})(component);
    });

    return () => (
        <Router>
            {routesComponents.map((Route, index) => {
                return <Route path={routes[index].path} key={routes[index].path} />
            })}
        </Router>
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
