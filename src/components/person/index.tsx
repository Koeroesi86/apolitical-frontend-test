import React from 'react';
import styled, {keyframes} from 'styled-components';
import PersonInterface from '../../types/Person';
import Planet from '../planet';
import Loader from '../loader';
import Film from '../film';
import ProfileImage from '../profileImage';

interface Props {
  data: PersonInterface;
}

const slideIn = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Wrapper = styled.div`
  margin: 6px;
  padding-bottom: 12px;
  width: 100%;
  background: #efefef;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 3px 3px 5px rgb(0, 0, 0, .15);
  animation: ${slideIn} 0.3s 0s both;
  
  @media (min-width: 700px) {
    width: 40%;
  }
  
  @media (min-width: 1000px) {
    width: 30%;
  }
  
  @media (min-width: 1281px) {
    width: 23%;
  }
`;

const Name = styled.h3`
  margin: 6px 0;
  padding: 0 12px;
`;

const BirthYear = styled.div`
  font-size: .8rem;
  padding: 0 12px;
`;

const Person: React.FC<Props> = ({ data }) =>
  <Wrapper>
    <ProfileImage
      src={`https://i.pravatar.cc/300?u=${encodeURIComponent(data.url) + Math.random()}`}
      alt={data.name}
    />
    <Name>{data.name}</Name>
    <BirthYear>Birth year: {data.birth_year}</BirthYear>
    <Loader url={data.homeworld} component={Planet}/>
    <Loader url={data.films[0]} component={Film}/>
  </Wrapper>

export default Person;
