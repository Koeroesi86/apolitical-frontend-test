import React from 'react';
import styled from 'styled-components';
import Pagination from '../pagination';
import Person from '../person';
import Loader from '../loader';
import NormalizedPeople from '../../types/NormalizedPeople';
import Filters from '../filters';

interface Props {
  people: NormalizedPeople;
  filters: { [k: string]: string };
  page: number;
  totalPages: number;
  displayed: string[];
  onPageChange: (page: number) => void;
  onFilterChange: (key: string, value: string) => void;
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  font-family: "Open Sans", Arial, sans-serif;
  
  &, & * {
    box-sizing: border-box;
  }
  
  @media (min-width: 1200px) {
    padding: 0 20px;
  }
`;

const Results = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px 6px;
  margin: 12px 0;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
`;

const Listing: React.FC<Props> = ({ people, filters, onPageChange, page, totalPages, displayed, onFilterChange }) => (
  <Wrapper>
    <Filters people={people} onChange={onFilterChange} filters={filters}/>
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
    <Results>
      {displayed.map((url) => (
        <Loader url={url} component={Person} key={url}/>
      ))}
    </Results>
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </Wrapper>
);

export default Listing;
