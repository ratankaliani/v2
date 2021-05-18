import React from "react";
import Helmet from "react-helmet";

import Wrapper from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "../../styles/index.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Ratan Kaliani"
      meta={[
        {
          name: "description",
          content:
            "Ratan Kaliani is a junior at Berkeley studying EECS"
        },
        {
          name: "keywords",
          content:
            "web development, berkeley, Ratan Kaliani, javascript, node.js"
        },
        {
          name: "google-site-verification",
          content: "gKFvPPKkT-XOmCyw6KDLir-CHax1a3qyuP6dFVIw45c"
        }
      ]}
    />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </div>
);

export default Layout;
