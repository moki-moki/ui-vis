'use client';

import { useState } from 'react';

import { ArrowUp, Dice5 } from 'lucide-react';

import { useColorsMutation } from '@/hooks/useColorsMutation';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { generateMonochromaticColors } from '@/utils/colors';

import Button from '../ui/button';

const Dice = () => {
    const [colorMenu, setColorMenu] = useState<boolean>(false);
    const [colors, setStoredColors] = useLocalStorage('generatedColors', ['']);

    useColorsMutation(colors);

    const menuToggler = () => setColorMenu((prev) => !prev);

    const generateColors = () => {
        const clr = generateMonochromaticColors([]);

        setStoredColors(clr);
    };
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
                    <li onClick={generateColors}>Analogous</li>
                    <li>Monochromatic</li>
                    <li>Complementary</li>
                    <li>Split Complementary</li>
                    <li>Triadic</li>
                    <li>Tetradic</li>
                </ul>
            )}
            <div>
                {colors.map((el, idx) => (
                    <div
                        key={idx}
                        style={{ backgroundColor: `${el}` }}
                        className="w-5 h-5"
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Dice;
