'use client';

import { ArrowUp, Dice5 } from 'lucide-react';
import Button from '../ui/button';
import { useState } from 'react';

const Dice = () => {
    const [colorMenu, setColorMenu] = useState<boolean>(false);

    const menuToggler = () => setColorMenu((prev) => !prev);

    return (
        <div className="border-border-color border-2 rounded-xl flex justify-between items-center relative">
            <Button
                type="button"
                className="h-12 bg-none px-4 py-2 text-accent-main border-r-2 border-border-color hover:bg-accent-main hover:text-text-main"
            >
                <Dice5 size={25} />
            </Button>
            <Button type="button" className="p-2" onClick={menuToggler}>
                <ArrowUp size={20} />
            </Button>

            {colorMenu && (
                <ul className="absolute p-2 -top-2 bg-primary-main rounded-xl border border-secondary-main -translate-y-full translate-x-1/2">
                    <li>All</li>
                    <li>Analogous</li>
                    <li>Monochromatic</li>
                    <li>Complementary</li>
                    <li>Split Complementary</li>
                    <li>Triadic</li>
                    <li>Tetradic</li>
                </ul>
            )}
        </div>
    );
};

export default Dice;
