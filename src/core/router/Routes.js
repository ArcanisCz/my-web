import React, {Fragment} from "react";
import {Route, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import IPropTypes from "react-immutable-proptypes";

import CustomRoute from "./CustomRoute";

const Routes = ({routes, match, routeProps, location}) => (
    <Fragment>
        {routes.map((routeDef, routeName) => {
            const route = routeDef.ROUTE;
            const RouteComponent = routeDef.Container;
            return (
                <Route
                    exact={route === "/" || route === "" || routeDef.exact}
                    key={route}
                    sensitive
                    path={`${match.path}${route}`}
                    render={(props) => (
                        <CustomRoute
                            Component={RouteComponent}
                            match={props.match}
                            name={routeName}
                            routeProps={routeProps}
                            scrollTop={routeDef.scrollTop}
                            query={location.search}
                        />
                    )}
                />
            );
        }).toList()}
    </Fragment>
);

Routes.propTypes = {
    routes: IPropTypes.mapOf(PropTypes.shape({
        ROUTE: PropTypes.string.isRequired,
        Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
        scrollTop: PropTypes.bool,
        exact: PropTypes.bool,
    })).isRequired,
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        search: PropTypes.string,
    }).isRequired,
    routeProps: PropTypes.object,
};

Routes.defaultProps = {
    routeProps: {},
};

export default withRouter(Routes);
