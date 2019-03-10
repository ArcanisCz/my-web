import React, {Component, memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import queryString from "query-string";

import {routeEntered, routeLeft} from './actions';
// import ScrollToTop from "./ScrollToTop";

export default (WrappedComponent) => {
    const InnerWrappedComponent = memo(WrappedComponent);

    const CustomRoute = class extends Component {
        // constructor(props){
        //     super(props);
        //     console.log("constructor",this.props.name);
        // }


        componentDidMount() {
            // console.log("mount",this.props.name);
            this.props.onEnter(this.props.uri);
        }

        // componentWillMount() {
        //     console.log("willmount",this.props.name);
        //     this.props.onEnter(this.props.name, {}, {});
        // }

        // componentDidUpdate(prevProps, prevState, snapshot) {
        //     console.log("update",this.props.name);
        // }

        componentWillUnmount() {
            // console.log("unmount",this.props.name);
            this.props.onLeave(this.props.uri);
        }

        // componentWillReceiveProps({name, match, query}) {
        //     // match.url is resolved URL. this means we need to change route when resolved url changes
        //     if (match.url !== this.props.match.url || query !== this.props.query) {
        //         this.props.onEnter(name, match.params, query);
        //     }
        // }

        render() {
            // console.log(this.props);
            return (
                <InnerWrappedComponent>
                    {this.props.children}
                </InnerWrappedComponent>
    );
        }
    };

    CustomRoute.propTypes = {
        onEnter: PropTypes.func.isRequired,
        // name: PropTypes.string.isRequired,
        // match: PropTypes.shape({
        //     params: PropTypes.object.isRequired,
        //     url: PropTypes.string.isRequired,
        // }).isRequired,
        // routeProps: PropTypes.object,
        // scrollTop: PropTypes.bool,
        // query: PropTypes.string,
    };

    CustomRoute.defaultProps = {
        // routeProps: {},
        // scrollTop: true,
        // query: "",
    };

    const mapDispatchToProps = (dispatch) => ({
        onEnter: (name) => dispatch(routeEntered(name)),
        onLeave: (name) => dispatch(routeLeft(name)),
    });
    return connect(undefined, mapDispatchToProps)(CustomRoute);
}

