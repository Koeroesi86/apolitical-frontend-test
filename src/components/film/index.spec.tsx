import React from 'react';
import {render} from '@testing-library/react';
import Film from './index';

describe('Film component', () => {
  it('should render', () => {
    const result = render(
      <Film
        data={{
          title: 'A New Hope',
          episode_id: 4,
          opening_crawl: 'It is a period of civil war...',
          director: 'George Lucas',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25',
          characters: [
            'http://swapi.dev/api/people/1/',
            'http://swapi.dev/api/people/2/',
            'http://swapi.dev/api/people/3/',
            'http://swapi.dev/api/people/4/',
            'http://swapi.dev/api/people/5/',
            'http://swapi.dev/api/people/6/',
            'http://swapi.dev/api/people/7/',
            'http://swapi.dev/api/people/8/',
            'http://swapi.dev/api/people/9/',
            'http://swapi.dev/api/people/10/',
            'http://swapi.dev/api/people/12/',
            'http://swapi.dev/api/people/13/',
            'http://swapi.dev/api/people/14/',
            'http://swapi.dev/api/people/15/',
            'http://swapi.dev/api/people/16/',
            'http://swapi.dev/api/people/18/',
            'http://swapi.dev/api/people/19/',
            'http://swapi.dev/api/people/81/'
          ],
          planets: [
            'http://swapi.dev/api/planets/1/',
            'http://swapi.dev/api/planets/2/',
            'http://swapi.dev/api/planets/3/'
          ],
          starships: [
            'http://swapi.dev/api/starships/2/',
            'http://swapi.dev/api/starships/3/',
            'http://swapi.dev/api/starships/5/',
            'http://swapi.dev/api/starships/9/',
            'http://swapi.dev/api/starships/10/',
            'http://swapi.dev/api/starships/11/',
            'http://swapi.dev/api/starships/12/',
            'http://swapi.dev/api/starships/13/'
          ],
          vehicles: [
            'http://swapi.dev/api/vehicles/4/',
            'http://swapi.dev/api/vehicles/6/',
            'http://swapi.dev/api/vehicles/7/',
            'http://swapi.dev/api/vehicles/8/'
          ],
          species: [
            'http://swapi.dev/api/species/1/',
            'http://swapi.dev/api/species/2/',
            'http://swapi.dev/api/species/3/',
            'http://swapi.dev/api/species/4/',
            'http://swapi.dev/api/species/5/'
          ],
          created: '2014-12-10T14:23:31.880000Z',
          edited: '2014-12-20T19:49:45.256000Z',
          url: 'http://swapi.dev/api/films/1/'
        }}
      />
    );

    expect(result.asFragment()).toMatchSnapshot();
  });
});
