import React from "react";
import {DateTime} from "luxon";

import {MainLayout} from "./src/components/layout/MainLayout";

export const onClientEntry = () => {
    /* eslint-disable no-undef,no-console */
    const date = DateTime.fromMillis(BUILD.DATE);
    const hash = BUILD.HASH;
    console.log(`build date: %c${date.toFormat("f")}`, "font-weight: bold");
    console.log(`commit hash: %c${hash}`, "font-weight: bold");
};

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({element, props}) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MainLayout {...props}>
        {element}
    </MainLayout>
);
