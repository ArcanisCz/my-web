/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import {MainLayout} from "./src/components/layout/MainLayout";

export const wrapPageElement = ({element, props}) => (
    <MainLayout {...props}>
        {element}
    </MainLayout>
);
