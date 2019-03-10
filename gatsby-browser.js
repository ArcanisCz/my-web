/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import createProvider from "./src/createProvider";
import reducer from "./src/reducer";
import saga from "./src/saga";

export const wrapRootElement = ({element}) => {
    const Root = createProvider(reducer, saga);
    return (
        <Root>
            {element}
        </Root>
    )
};

// export const onPreRouteUpdate = ({location, prevLocation}) => {
//     console.log("onPreRouteUpdate","from", prevLocation ? prevLocation.pathname : null, "to", location.pathname)
// };
//
// export const onRouteUpdate = ({ location, prevLocation, ...aaa}) => {
//     console.log(aaa);
//     console.log("onRouteUpdate","from", prevLocation ? prevLocation.pathname : null, "to", location.pathname)
// };
