import React from 'react';
import styled from 'styled-components';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Button = styled.button`
  margin: 0 12px;
  padding: 0 12px;
  height: 35px;
  border: 1px solid #efefef;
  border-radius: 6px;
  color: #000;
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  
  &:hover {
    border-color: #ccc;
  }
  
  &[disabled] {
    opacity: .6;
  }
`;

const PageNumber = styled.button`
  margin: 0 3px;
  padding: 0 12px;
  height: 35px;
  border: 1px solid #efefef;
  border-radius: 50%;
  color: #000;
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  
  &:hover {
    border-color: #ccc;
  }
  
  &[disabled] {
    opacity: .6;
    font-weight: 600;
  }
`;

const Pagination: React.FC<Props> = ({ onPageChange, page, totalPages }) => (
  <Wrapper>
    <Button
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
      data-testid={'previous-page'}
    >
      Previous page
    </Button>
    {Array(totalPages).fill(1).map((_, index) => (
      <PageNumber
        onClick={() => onPageChange(index + 1)}
        disabled={page === index + 1}
        key={`page-number-${index + 1}`}
        data-testid={`page-${index + 1}`}
      >
        {index + 1}
      </PageNumber>
    ))}
    <Button
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
      data-testid={'next-page'}
    >
      Next page
    </Button>
  </Wrapper>
);

export default Pagination;
