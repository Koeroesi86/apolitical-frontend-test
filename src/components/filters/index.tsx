import React from 'react';
import styled from 'styled-components';
import NormalizedPeople from '../../types/NormalizedPeople';

interface Props {
  people: NormalizedPeople;
  filters: { [k: string]: string };
  onChange: (key, value) => void;
}

const Wrapper = styled.div`
  padding: 12px 6px;
  border-bottom: 1px solid #efefef;
`;

const Heading = styled.h3`
  margin: 3px 0;
  padding-bottom: 3px;
`;

const FilterGroup = styled.div`
  margin-right: 6px;
  margin-bottom: 6px;
  padding-right: 6px;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 600px) {
    width: 48%;
  }
  
  @media (min-width: 1000px) {
    width: 215px;
    border-right: 1px solid #efefef;

    &:last-of-type {
      border-right: 0;
    }
  }
`;
const FilterLabel = styled.div`
  flex: 0 0;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 12px;
  width: 70px;
`;
const FilterDropdown = styled.select`
  flex: 1 1 0;
  padding: 0 12px;
  height: 35px;
  background: #efefef;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover {
    background: #fff;
  }
`;
interface FilterOptionProps {
  isDefault?: boolean;
}
const FilterOption = styled.option<FilterOptionProps>`
  color: ${({ isDefault }): string => isDefault ? '#666' : '#000'};
`;

interface FilterProps {
  filterKey: string;
  label?: string;
  value: string;
  people: NormalizedPeople;
  onChange: (value) => void;
}
const Filter: React.FC<FilterProps> = ({ onChange, people, value, filterKey, label }) => (
  <FilterGroup>
    <FilterLabel>{label || filterKey}:</FilterLabel>
    <FilterDropdown onChange={e => onChange(e.target.value)} value={value}>
      <FilterOption value="" isDefault>not set</FilterOption>
      {Object.keys(
        people.urls
          .map(u => people.people[u][filterKey])
          .reduce((result, current) => ({ ...result, [current]: true }), {})
      ).map(v => (
        <FilterOption value={v} key={`${filterKey}-filter-${v}`}>{v}</FilterOption>
      ))}
    </FilterDropdown>
  </FilterGroup>
)

const Filters: React.FC<Props> = ({ onChange, filters, people }) => (
  <Wrapper>
    <Heading>Filters</Heading>
    <Filter
      label={'Gender'}
      filterKey={'gender'}
      value={filters['gender'] || ''}
      people={people}
      onChange={(v: string) => onChange('gender', v)}
    />
    <Filter
      label={'Hair'}
      filterKey={'hair_color'}
      value={filters['hair_color'] || ''}
      people={people}
      onChange={(v: string) => onChange('hair_color', v)}
    />
    <Filter
      label={'Eye'}
      filterKey={'eye_color'}
      value={filters['eye_color'] || ''}
      people={people}
      onChange={(v: string) => onChange('eye_color', v)}
    />
    <Filter
      label={'Skin'}
      filterKey={'skin_color'}
      value={filters['skin_color'] || ''}
      people={people}
      onChange={(v: string) => onChange('skin_color', v)}
    />
  </Wrapper>
);

export default Filters;
