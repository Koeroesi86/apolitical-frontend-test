import React from 'react';
import styled from 'styled-components';
import FilmInterface from '../../types/Film';

const Wrapper = styled.div`
  padding: 0 12px;
  font-size: .8rem;
`;

const Film: React.FC<{ data: FilmInterface }> = ({ data }) => {
  return (
    <Wrapper>First film: {data.title}</Wrapper>
  );
};

export default Film;
