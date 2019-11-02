import React from "react"
import PropTypes from "prop-types";
import {Link} from "gatsby"

import css from "./Logo.module.scss";

const Logo = ({current}) => current === "/" ? (
    <div className={css.logo}>Narykatee logo</div>
) : (
    <Link to="/" className={css.logo}>Narykatee logo</Link>
);

Logo.propTypes = {
    current: PropTypes.string.isRequired,
};

export default Logo;
