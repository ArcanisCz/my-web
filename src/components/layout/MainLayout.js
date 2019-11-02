import React from "react"
import PropTypes from "prop-types"

import Logo from "./Logo";

import "./global.scss";
import css from "./MainLayout.module.scss";

export const MainLayout = ({children, location}) => (
    <div className={css.container}>
        <div className={css.top}>
            <div className={css.logo}>
                <Logo current={location.pathname} />
            </div>
            <div className={css.menu}>
                menu
            </div>
        </div>
        <div className={css.content}>
            {children}
        </div>
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
