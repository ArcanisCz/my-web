import React from "react"
import {Link} from "gatsby";

import {MainLayout} from "../components"

import routes from "../app/routes";

import router from "core/router";

const Routes = router.createRoutes(routes);

const AppPage = () => (
    <MainLayout>
        {/*{console.log("App")}*/}
        App
        <ul>
            <li><Link to={router.createLink([routes.page1])} >Page 1</Link></li>
            <li><Link to={router.createLink([routes.page2])} >Page 2</Link></li>
        </ul>
        <Routes />
    </MainLayout>
);

export default AppPage;

