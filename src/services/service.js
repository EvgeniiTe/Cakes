export class Service {

  _urlCakes = './cakes.json'

  getAllCakes = async () => {
    return fetch(`${this._urlCakes}`)
      .then(res => res.json())
      .then(data => data.cakes);
  };
  
  getCake = async (id) => {
    return fetch(`${this._urlCakes}`)
      .then(res => res.json())
      .then(data => data.cakes[id - 1]);
  };

}

