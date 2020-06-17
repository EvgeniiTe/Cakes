import React from "react";

import { Header } from "../header";
import { MainInfo } from "../main-info";
import { Products } from "../products";
import { MyStory } from "../my-story";
import { Footer } from "../footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <MainInfo />
          <Products />
          <MyStory />
        </div>
      </main>
      <Footer />
    </>
  );
};
