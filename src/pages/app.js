import React from "react"
import {Link} from "gatsby";

import {MainLayout} from "../components"

import Page1 from "../app/Page1";
import Page2 from "../app/Page2";

import router from "../core/router";

const Routes = router.createRoutes([{
    name: "page1",
    component: Page1,
    path: "/app"
},{
    name: "page2",
    component: Page2,
    path: "/app/page2/*"
}]);

const AppPage = () => (
    <MainLayout>
        {/*{console.log("App")}*/}
        App
        <ul>
            <li><Link to="/" >Index</Link></li>
            <li><Link to="/app/page2" >Page2</Link></li>
        </ul>
        <Routes />
    </MainLayout>
);

export default AppPage;

