// const currentDateUTC = new Date().toISOString().split('T')[0].replace(/-/g, '');

// const password = 'Valantis';
// const authString = `${password}_${currentDateUTC}`;

// const hashedAuthString = MD5(authString).toString();

// const BASE_URL = 'https://api.valantis.store:41000/';

// const [value, setValue] = useState([]);

// const signIn = () => {
// return fetch(`${BASE_URL}`, {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
// 'X-Auth': hashedAuthString
// },
// body: JSON.stringify({
// action: 'get_ids',
// params: { offset: 0, limit: 50 }
// })
// })
// .then(res => {
// if (!res.ok) {
// return Promise.reject(`Ошибка ${res.status}`);
// } else {
// return res.json();
// }
// })
// .then(res => {
// console.log(res);
// setValue(res.result);
// });
// };

// console.log(value);

const signUn = () => {
return fetch('https://api.valantis.store:41000/', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-Auth': MD5(`Valantis_${new Date().toISOString().split('T')[0].replace(/-/g, '')}`).toString()
},
body: JSON.stringify({
action: 'get_items',
params: {
ids: value
}
})
})
.then(res => {
if (!res.ok) {
return Promise.reject(`Ошибка ${res.status}`);
} else {
return res.json();
}
})
.then(res => console.log(res));
};
