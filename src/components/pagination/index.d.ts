import React from 'react';
interface Props {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
declare const Pagination: React.FC<Props>;
export default Pagination;
