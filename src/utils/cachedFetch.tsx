import axios from 'axios';
import cacheProvider from './cacheProvider';

export default async (url) => {
  const cached = await cacheProvider.get(url);
  if (cached !== undefined) return cached;

  const data = await axios({url, method: 'GET'}).then(res => res.data);
  await cacheProvider.set(url, data);

  return data;
}