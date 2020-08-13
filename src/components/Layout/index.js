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
      title="Ratan Kaliani: Developer of all things web"
      meta={[
        {
          name: "description",
          content:
            "Ratan Kaliani is a freelance web developer based in Berlin, Germany"
        },
        {
          name: "keywords",
          content:
            "web development, software engineering, react.js, javascript, node.js"
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
