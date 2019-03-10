import React from "react"
import {Link} from "gatsby";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

import router from "../core/router";

const Routes = router.createRoutes([{
    name: "tab1",
    component: Tab1,
    path: "/"
},{
    name: "tab2",
    component: Tab2,
    path: "/tab2"
}]);

const Page2 = () => (
    <div>
        {/*{console.log("Page 2")}*/}
        Page 2
        <ul>
            <li><Link to="/app/page2/">Tab1</Link></li>
            <li><Link to="/app/page2/tab2" >Tab2</Link></li>
        </ul>
        <div>
            <Routes />
        </div>
    </div>
);

export default Page2;

