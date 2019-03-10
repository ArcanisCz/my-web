import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";

import page2Tabs from "./page2/routes";

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
