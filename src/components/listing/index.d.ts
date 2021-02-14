import React from 'react';
import NormalizedPeople from '../../types/NormalizedPeople';
interface Props {
    people: NormalizedPeople;
    filters: {
        [k: string]: string;
    };
    page: number;
    totalPages: number;
    displayed: string[];
    onPageChange: (page: number) => void;
    onFilterChange: (key: string, value: string) => void;
}
declare const Listing: React.FC<Props>;
export default Listing;
