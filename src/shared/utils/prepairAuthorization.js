import MD5 from 'crypto-js/md5';

export const useGetHashedAuthString = () => {
  const currentDateUTC = new Date().toISOString().split('T')[0].replace(/-/g, '');

  const password = 'Valantis';
  const authString = `${password}_${currentDateUTC}`;

  const hashedAuthString = MD5(authString).toString();
  return hashedAuthString;
};
