import React from "react"
import { Router } from "@reach/router";
import {Link} from "gatsby";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

import debug from "../debug";

const Page2 = () => (
    <div>
        {console.log("Page 2")}
        Page 2
        <ul>
            <li><Link to="/app/page2/">Tab1</Link></li>
            <li><Link to="/app/page2/tab2" >Tab2</Link></li>
        </ul>
        <div>
            <Router>
                <Tab1 path="/" />
                <Tab2 path="/tab2" />
            </Router>
        </div>
    </div>
);

export default debug()(Page2);

