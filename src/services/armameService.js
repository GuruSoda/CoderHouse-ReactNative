import api from '@config/api';

export const getGameList = (pagina, results) =>
  api.get('/games?f=unique|runnable|!bios|!mechanical|!device').then(response => {
    if (response.ok) {
//      console.log('results:', response.data.results);
      return response.data;
    } else if (response.problem) {
      console.log('Error en getGameList:', response.problem)
    }
    return;
  });

export const getData = endpoint =>
  api.get(endpoint).then(response => {
    if (response.ok) {
      return response.data;
    } else if (response.problem) {
      console.log(response.problem);
    }
    return;
  });
