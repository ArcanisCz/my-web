import {app} from "core/util";

import {NAME} from './constants';

const getModel = app.createGetModel(NAME);

export const getCurrentParams = (state) => getModel(state).get("activeRouteParams");
