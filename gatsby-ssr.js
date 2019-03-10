/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import createProvider from "./src/createProvider";
import reducer from "./src/reducer";

export const wrapRootElement = ({element}) => {
    const Root = createProvider(reducer);
    return (
        <Root>
            {element}
        </Root>
    )
};
