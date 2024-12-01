interface Props {
    label: string;
}

const ColorPicker = ({ label }: Props) => {
    return (
        <div className="relative w-full h-12 cursor-pointer flex justify-center items-center">
            <label
                htmlFor="primary-color"
                className="text-color cursor-pointer p-5 text-xs text-accent-color uppercase font-bold relative z-10"
            >
                {label}
            </label>
            <input
                type="color"
                name="primary-color"
                id="primary-color"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-color rounded-xl h-full w-full border-none outline-none"
            />
        </div>
    );
};

export default ColorPicker;
