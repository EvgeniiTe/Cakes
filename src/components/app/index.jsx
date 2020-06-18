import React from "react";

import { Header } from "../header";
import { MainInfoWithApiRequest } from "../main-info";
import { ProductsWithApiRequest } from "../products";
import { MyStoryWithApiRequest } from "../my-story";
import { Footer } from "../footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <MainInfoWithApiRequest />
          <ProductsWithApiRequest />
          <MyStoryWithApiRequest />
        </div>
      </main>
      <Footer />
    </>
  );
};
