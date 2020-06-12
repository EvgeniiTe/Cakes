const _urlCakes = './cakes.json';

const getAllCakes = async () => {
  return fetch(`${_urlCakes}`)
    .then(res => res.json())
    .then(data => data.cakes);
};

const getCake = async (id) => {
  return fetch(`${_urlCakes}`)
    .then(res => res.json())
    .then(data => data.cakes[id - 1]);
};

const getNavMain = async () => {
  return fetch(`${_urlCakes}`)
    .then(res => res.json())
    .then(data => data.navMain);
};

export { getAllCakes, getCake, getNavMain };