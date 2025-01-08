import { ComponentProps, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<ComponentProps<'button'>> {
  label?: string;
}

const Button = ({ children, label, className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      {label}
      {children}
    </button>
  );
};

export default Button;
