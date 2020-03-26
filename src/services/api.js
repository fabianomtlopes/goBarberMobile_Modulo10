import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

// para Android http://10.0.2.2:3333 Android studio
// para genymotion 10.0.3.2:3333
// para usar com cabo usb e telefone http://192.168...:3333
