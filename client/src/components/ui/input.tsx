import { ComponentProps, ForwardedRef, forwardRef } from 'react';

type Props = ComponentProps<'input'> & {
  error?: string;
};

const InputArea = (
  { error, className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <>
      {error && (
        <span className="text-red-500 uppercase font-bold">{error}</span>
      )}
      <input className={`border-none ${className}`} {...props} ref={ref} />
    </>
  );
};

export const Input = forwardRef(InputArea);
