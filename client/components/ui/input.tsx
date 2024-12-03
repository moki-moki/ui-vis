import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const InputField = (
    { error, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <div>
            <input className="border-border-color" {...props} ref={ref} />
            {error ? (
                <span className="border-red-400 mt-1 p-2 text-red-400">
                    {error}
                </span>
            ) : null}
        </div>
    );
};

export const Input = forwardRef(InputField);
