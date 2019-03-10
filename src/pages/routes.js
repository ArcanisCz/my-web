import Page1 from "../app/Page1";
import Page2 from "../app/Page2";

import page2Tabs from "../app/routes";

export default {
    page1: {
        component: Page1,
        path: "/app"
    },
    page2: {
        component: Page2,
        path: "/app/page2",
        childRoutes: page2Tabs,
    }
};
