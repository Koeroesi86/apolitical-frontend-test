import PageData from '../types/PageData';
import cachedFetch from './cachedFetch';

const fetchAll = async <T>(url): Promise<T[]> => {
  const data: PageData<T> = await cachedFetch(url);

  if (typeof data.next === 'string') {
    return [
      ...data.results,
      ...await fetchAll<T>(data.next)
    ] as T[];
  }

  return data.results as T[];
}

export default fetchAll;
