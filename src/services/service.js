const API_STUB = "./cakes.json";

export const getAllCakes = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.cakes);

export const getCake = (id) => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.cakes[id]);

export const getNavMain = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.navMain);

export const mainInfoFill = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.mainInfoFill);

export const storyInfoFill = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.storyInfoFill);