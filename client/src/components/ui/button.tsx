import { ButtonHTMLAttributes } from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/utils';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btnVariants> {
  label?: string;
}

const btnVariants = cva(
  `inline-flex items-center justify-center transition-colors ease-in border-2 border-accent-color`,
  {
    variants: {
      variants: {
        default: 'bg-background-color text-text-color rounded-md',
        outlined: 'rounded-full bg-accent-color',
      },
      size: {
        default: 'py-2 px-4',
        sm: 'py-1.5 px-2.5',
        md: 'py-4 px-6',
        lg: 'py-6 px-8',
      },
    },
    defaultVariants: {
      variants: 'default',
      size: 'default',
    },
  },
);

const Button = ({ children, label, className, variants, ...props }: Props) => {
  return (
    <button className={cn(btnVariants({ variants, className }))} {...props}>
      {label}
      {children}
    </button>
  );
};

export default Button;
