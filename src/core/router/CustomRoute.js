import React, {Component, memo} from 'react';
import PropTypes from 'prop-types';

export default ({name, topLevel}) => (WrappedComponent) => {
    const InnerWrappedComponent = memo(WrappedComponent);

    const CustomRoute = class extends Component {

        componentDidMount() {
            this.props.onEnter(name);
            if(topLevel){
                this.props.onEnterEnd();
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.props.onEnterEnd();
        }

        componentWillUnmount() {
            this.props.onLeave(name);
        }

        render() {
            return (
                <InnerWrappedComponent>
                    {this.props.children}
                </InnerWrappedComponent>
    );
        }
    };

    CustomRoute.propTypes = {
        onEnter: PropTypes.func.isRequired,
        onEnterEnd: PropTypes.func.isRequired,
        onLeave: PropTypes.func.isRequired,
    };

    return CustomRoute;
}

