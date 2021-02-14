import React, {useEffect, useState} from 'react';
import Listing from '../listing';
import Person from '../../types/Person';
import fetchAll from '../../utils/fetchAll';
import NormalizedPeople from '../../types/NormalizedPeople';

const App: React.FC = () => {
  const [people, setPeople] = useState<NormalizedPeople>({
    people: {},
    urls: []
  });
  const [page, setPage] = useState(1);
  const [filteredUrls, setFilteredUrls] = useState<string[]>([]);
  const [filters, setFilters] = useState<{ [k: string]: string }>({});

  useEffect(() => {
    (async () => {
      const people = await fetchAll<Person>('https://swapi.dev/api/people/?page=1');

      setPeople({
        people: people.reduce((result, current) => ({
          ...result,
          [current.url]: current,
        }), {}),
        urls: people.map(p => p.url)
      });

      setFilteredUrls(people.map(p => p.url))
    })();
  }, []);

  useEffect(() => {
    const urls = people.urls.slice().filter(u => {
      const person = people.people[u];

      if (Object.keys(filters).find(k => filters[k] !== '' && filters[k] !== undefined && filters[k] !== person[k])) {
        return false;
      }

      return true;
    });

    setFilteredUrls(urls);
  }, [filters]);

  return (
      <Listing
        people={people}
        filters={filters}
        displayed={filteredUrls.slice((page - 1) * 10, (page * 10))}
        page={page}
        totalPages={Math.ceil(people.urls.length / 10)}
        onPageChange={setPage}
        onFilterChange={(key, value) => {
          setPage(1);
          setFilters({
            ...filters,
            [key]: value,
          });
        }}
      />
  );
};

export default App;
