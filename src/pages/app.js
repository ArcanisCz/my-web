import React from "react"
import {Router} from "@reach/router";
import {Link} from "gatsby";

import {MainLayout} from "../components"

import Page1 from "../app/Page1";
import Page2 from "../app/Page2";

import debug from "../debug";

const AppPage = () => (
    <MainLayout>
        {console.log("App")}
        App
        <ul>
            <li><Link to="/" >Index</Link></li>
            <li><Link to="/app/page2" >Page2</Link></li>
        </ul>
        <Router>
            <Page1 path="/app/" />
            <Page2 path="/app/page2/*" />
        </Router>
    </MainLayout>
);

export default debug()(AppPage)

