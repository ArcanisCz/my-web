import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

// import {Pokus} from "./Pokus";
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
    render={() => (
      <>
          <Helmet>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Helmet>
          {/*<Pokus />*/}
          <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/app">App</Link></li>
              <li><Link to="/pokus">Pokus</Link></li>
              <li><Link to="/app/page2">Page2</Link></li>
              <li><Link to="/app/page2/tab2">Tab2</Link></li>
          </ul>
          {children}
      </>
    )}
  />
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
