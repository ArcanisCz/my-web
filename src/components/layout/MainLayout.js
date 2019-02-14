import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {Pokus} from "./Pokus";
import Helmet from "react-helmet";

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
          <Helmet>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Helmet>
          <Pokus />
          {children}
      </>
    )}
  />
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
