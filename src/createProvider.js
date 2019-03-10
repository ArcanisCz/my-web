import React from "react";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import RedBox from 'redbox-react';

export default (reducer, saga, initialActions = [], messages = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = compose(
        applyMiddleware(sagaMiddleware),
        /* eslint-disable no-underscore-dangle */
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (x) => x,
        /* eslint-enable */
    );

    class AppProvider extends React.Component {
        constructor(props) {
            super(props);
            this.showError = this.showError.bind(this);

            const catchingReducer = (state, action) => {
                try {
                    return reducer(state, action);
                } catch (e) {
                    console.error(e);
                    this.showError(e);
                    return state;
                }
            };

            this.store = createStore(catchingReducer, middleware);
            this.state = {error: null};

            // We want to run some actions and initial saga before component really mounts to minimize useless renders at the start
            // of app. Component will then show to user with initial state present.
            // this means a bit of hack in showError(). If we didnt care about initial renders, following logic should be in componentDidMount
            initialActions.forEach(this.store.dispatch);
            if (saga) {
                const sagaTask = sagaMiddleware.run(saga).toPromise();
                sagaTask.catch(this.showError);
            }
        }

        componentDidCatch(error) {
            this.showError(error);
        }

        showError(error) {
            let stateError = null;
            if (process.env.NODE_ENV !== "development") {
                stateError = messages["error.server.text"];
            } else {
                stateError = error;
            }

            // Do not use for normal app. This hack is here only as a helper to simplify patterns for error state of app,
            // since we do not care much about how app continues after error.
            if (this.updater.isMounted(this)) {
                this.setState({error: stateError});
            } else {
                // eslint-disable-next-line
                this.state = {...this.state, error: stateError};
            }
        }

        render() {
            if (this.state.error) {
                if (typeof this.state.error === "string") {
                    return this.state.error;
                } else {
                    return <RedBox error={this.state.error} />;
                }
            }
            return <Provider {...this.props} store={this.store} />;
        }
    }

    return AppProvider;
};
