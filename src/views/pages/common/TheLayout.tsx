import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const TheLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Main></Main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TheLayout;
