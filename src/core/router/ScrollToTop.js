import {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

// https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default withRouter(ScrollToTop);
