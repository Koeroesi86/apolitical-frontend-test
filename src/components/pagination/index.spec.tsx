import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Pagination from './index';

describe('Pagination component', () => {
  it('should render', () => {
    const onPageChange = jest.fn();
    const result = render(
      <Pagination onPageChange={onPageChange} totalPages={10} page={2}/>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  it('should dispatch page changes', async () => {
    const onPageChange = jest.fn();
    const result = render(
      <Pagination onPageChange={onPageChange} totalPages={10} page={2}/>
    );

    fireEvent.click(result.getByTestId('previous-page'));
    fireEvent.click(result.getByTestId('next-page'));
    fireEvent.click(result.getByTestId('page-8'));

    expect(onPageChange).toHaveBeenCalled();
    expect(onPageChange.mock.calls).toMatchSnapshot();
  });
});
