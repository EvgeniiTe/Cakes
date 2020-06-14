const API_STUB = './cakes.json';

export const getAllCakes = () => {
  return fetch(`${API_STUB}`)
    .then(res => res.json())
    .then(data => data.cakes);
};

export const getCake = (id) => {
  return fetch(`${API_STUB}`)
    .then(res => res.json())
    .then(data => data.cakes[id - 1]);
};

export const getNavMain = () => {
  return fetch(`${API_STUB}`)
    .then(res => res.json())
    .then(data => data.navMain);
};

export const getHeaderEl = () => {
  return fetch(`${API_STUB}`)
    .then(res => res.json())
    .then(data => data.headerEl);
};