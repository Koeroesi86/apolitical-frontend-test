import React from 'react';
import useFetch from '../../hooks/useFetch';

interface Props {
  url: string;
  component: React.FC<{ data: any }>;
}

const Loader: React.FC<Props> = ({ url, component: C }) => {
  const data = useFetch(url);
  return (
    !data ? <>Loading...</> : <C data={data} />
  )
};

export default Loader;
