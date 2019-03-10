import React from "react"
import {Link} from "gatsby";

import router from "core/router";

// import routes from "../pages/routes";

const Page2 = ({children}) => (
    <div>
        Page 2
        <router.RoutesContextConsumer>
            {routes => (
                <ul>
                    <li><Link to={router.createLink([routes.page2, routes.page2.childRoutes.tab1])}>Tab1</Link></li>
                    <li><Link to={router.createLink([routes.page2, routes.page2.childRoutes.tab2])}>Tab2</Link></li>
                </ul>
            )}
        </router.RoutesContextConsumer>
        <div>
            {children}
        </div>
    </div>
);

export default Page2;

