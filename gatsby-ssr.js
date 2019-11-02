import React from "react";
import {MainLayout} from "./src/components/layout/MainLayout";

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({element, props}) => (
    <MainLayout {...props}>
        {element}
    </MainLayout>
);

