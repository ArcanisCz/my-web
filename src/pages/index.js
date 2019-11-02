import React from "react";
import {graphql} from "gatsby";

import {Seo} from "components";

/* eslint-disable */
export default ({data}) => (
    <>
        <Seo title="" />
        {console.log(data)}
    </>
);

export const query = graphql`
query {
  news: allNewsYaml(sort: {fields: [date], order: ASC}) {
    edges {
      node {
        id
        title
        date
        content
      }
    }
  }  
}
`;
