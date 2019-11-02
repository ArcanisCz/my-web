/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import {MainLayout} from "./src/components/layout/MainLayout";

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({element, props}) => (
    <MainLayout {...props}>
        {element}
    </MainLayout>
);

