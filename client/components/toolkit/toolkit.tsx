import React from 'react';

import ColorPicker from './color-picker';
import Button from '../ui/button';
import { RotateCcw } from 'lucide-react';

const Toolkit = () => {
    return (
        <div className="fixed bottom-4 right-0 left-0 w-1/2 m-auto p-5 bg-primary-main rounded-xl">
            <div className="flex items-center gap-4">
                <ColorPicker label="Primary" type="primary" />
                <ColorPicker label="Secondary" type="secondary" />
                <ColorPicker label="Text" type="text" />
                <ColorPicker label="Accent" type="accent" />
                <Button
                    type="button"
                    className="h-12 bg-none px-4 py-2 border-border-color border-2 rounded-xl text-accent-main hover:bg-accent-main hover:text-text-color"
                >
                    <RotateCcw size={20} />
                </Button>
            </div>
        </div>
    );
};

export default Toolkit;
