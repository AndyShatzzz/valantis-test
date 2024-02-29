import { BASE_URL } from './BASE_URL';
import MD5 from 'crypto-js/md5';

export const productRequest = body => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': MD5(`Valantis_${new Date().toISOString().split('T')[0].replace(/-/g, '')}`).toString()
    },
    body: JSON.stringify(body)
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    } else {
      return res.json();
    }
  });
};
