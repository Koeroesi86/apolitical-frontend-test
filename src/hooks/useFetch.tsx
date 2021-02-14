import {useEffect, useState} from 'react';
import cachedFetch from '../utils/cachedFetch';

const useFetch: <T>(url: string) => T = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    let mounted = true;

    cachedFetch(url).then(r => {
      if (mounted) setData(r);
    });

    return () => {
      mounted = false;
    };
  }, [url]);

  return data;
};

export default useFetch;
