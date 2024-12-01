import React from 'react';

import ColorPicker from './color-picker';

const Toolkit = () => {
    return (
        <div className="fixed bottom-4 right-0 left-0 w-1/2 m-auto p-5 bg-primary-color rounded-xl">
            <div className="flex items-center gap-4">
                <ColorPicker label="Primary" />
                <ColorPicker label="Secondary" />
                <ColorPicker label="Text" />
                <ColorPicker label="Accent" />
            </div>
        </div>
    );
};

export default Toolkit;
