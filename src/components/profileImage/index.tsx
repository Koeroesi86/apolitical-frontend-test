import styled, { keyframes } from 'styled-components';
import React, {useEffect, useState} from 'react';

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const ImageHolder = styled.div`
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
  animation: ${fadeIn} 0.3s 0s both;
`;

interface Props {
  src?: string;
  alt: string;
}

const ProfileImage: React.FC<Props> = ({ src = `https://i.pravatar.cc/300?u=${Math.random()}`, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) setIsLoaded(false);

    const img = new Image(200, 200);
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;

    return () => {
      img.onload = () => {};
    };
  }, [src]);

  return (
    <Wrapper>
      {isLoaded && (
        <ImageHolder style={{ backgroundImage: `url(${src})` }} title={alt}/>
      )}
    </Wrapper>
  )
};

export default ProfileImage;
