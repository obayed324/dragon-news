import React, { Suspense } from 'react';
import LeftCategory from './Categories/LeftCategory';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <LeftCategory></LeftCategory>
            </Suspense>
        </div>
    );
};

export default LeftAside;