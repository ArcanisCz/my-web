/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import {MainLayout} from "./src/components/layout/MainLayout";

export const onClientEntry = () => {
    // eslint-disable-next-line no-undef
    const date = new Date(BUILD.DATE);
    // eslint-disable-next-line no-console
    console.log(`build date: %c${date.toISOString()}`, "font-weight: bold", "font-weight: normal");
};

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({element, props}) => (
    <MainLayout {...props}>
        {element}
    </MainLayout>
);
