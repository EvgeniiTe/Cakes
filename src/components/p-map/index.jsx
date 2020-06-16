import React from "react";

export const PMap = ({ data }) => {
  const dataMap = data.map((item) => {
    return <p>{item}</p>;
  });

  return dataMap;
};
