import React from "react"
import {Router} from "@reach/router";
import {Link} from "gatsby";

import {MainLayout} from "../components"

import Page1 from "../app/Page1";
import Page2 from "../app/Page2";

import router from "../core/router";

const Page1Route = router.CustomRoute(Page1);
const Page2Route = router.CustomRoute(Page2);

const AppPage = () => (
    <MainLayout>
        {/*{console.log("App")}*/}
        App
        <ul>
            <li><Link to="/" >Index</Link></li>
            <li><Link to="/app/page2" >Page2</Link></li>
        </ul>
        <Router>
            <Page1Route path="/app/" name="page1" />
            <Page2Route path="/app/page2/*" name="page2" />
        </Router>
    </MainLayout>
);

export default AppPage;

