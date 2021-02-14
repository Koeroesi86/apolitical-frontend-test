import React from 'react';
interface Props {
    url: string;
    component: React.FC<{
        data: any;
    }>;
    props?: object;
}
declare const Loader: React.FC<Props>;
export default Loader;
