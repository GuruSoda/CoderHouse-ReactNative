import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL: 'http://www.planetaguru.com.ar/armamews',
  tiemout: 5000,
});

console.log('baseURL:', Config.API_BASE_URL);

export default api;
