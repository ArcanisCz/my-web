import React from "react"

import debug from "../debug";

const Page1 = () => (
    <div>
        {console.log("Page 1")}
        Page 1
    </div>
);

export default debug()(Page1);
