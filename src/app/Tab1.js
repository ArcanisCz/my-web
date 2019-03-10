import React from "react"

import debug from "../debug";

const Tab1 = () => (
    <div>
        {console.log("Tab 1")}
        Tab1
    </div>
);

export default debug()(Tab1);
