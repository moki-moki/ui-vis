import { ComponentProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ComponentProps<'button'>>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
