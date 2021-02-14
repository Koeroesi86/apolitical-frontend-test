import React from 'react';
import {render} from '@testing-library/react';
import Person from './index';
import moxios from "moxios";

Math.random = jest.fn(() => 1);

describe('Person component', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render', () => {
    moxios.stubRequest('http://swapi.dev/api/films/5/', { status: 200 });
    moxios.stubRequest('http://swapi.dev/api/planets/8/', { status: 200 });

    const result = render(
      <Person
        data={{
          name: 'Gregar Typho',
          height: '185',
          mass: '85',
          hair_color: 'black',
          skin_color: 'dark',
          eye_color: 'brown',
          birth_year: 'unknown',
          gender: 'male',
          homeworld: 'http://swapi.dev/api/planets/8/',
          films: ['http://swapi.dev/api/films/5/'],
          species: [],
          vehicles: [],
          starships: ['http://swapi.dev/api/starships/39/'],
          created: '2014-12-20T11:10:10.381000Z',
          edited: '2014-12-20T21:17:50.445000Z',
          url: 'http://swapi.dev/api/people/60/'
        }}
      />
    );

    expect(result.asFragment()).toMatchSnapshot();
  });
});
