import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {Pokus} from "./Pokus";

export const MainLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Pokus />
          {children}
      </>
    )}
  />
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
