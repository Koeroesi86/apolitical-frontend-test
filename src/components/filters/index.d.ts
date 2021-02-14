import React from 'react';
import NormalizedPeople from '../../types/NormalizedPeople';
interface Props {
    people: NormalizedPeople;
    filters: {
        [k: string]: string;
    };
    onChange: (key: any, value: any) => void;
}
declare const Filters: React.FC<Props>;
export default Filters;
