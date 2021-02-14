import React from 'react';
import styled from 'styled-components';
import PlanetInterface from '../../types/Planet';

const Wrapper = styled.div`
  padding: 0 12px;
  font-size: .8rem;
`;

const Planet: React.FC<{ data: PlanetInterface }> = ({ data }) => {
  return (
    <Wrapper>Home planet: {data.name}</Wrapper>
  );
};

export default Planet;
