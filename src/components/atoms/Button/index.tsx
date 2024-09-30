import { cn } from '@/styles/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import * as React from 'react';

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center whitespace-nowrap',
    'transition-colors disabled:pointer-events-none outline-none relative',
    'rounded-xl '
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'overflow-hidden z-0 border border-primary-500',
          'text-white bg-primary-400',
          'focus:from-primary-700 focus:to-primary-700',
          'disabled:from-transparent disabled:to-transparent disabled:text-dark disabled:border disabled-border-dark disabled:opacity-[0.16]',
          'before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full',
          'before:bg-primary-500',
          'before:active:bg-primary-700',
          'before:transition-transform-react-m before:origin-bottom before:z-[-1]',
          'before:transform-scale-y-0 hover:before:transform-scale-y-100'
        ),
        secondary: cn(
          'overflow-hidden z-0',
          'text-dark bg-transparent border border-primary-500',
          'focus:text-white focus:bg-primary-700',
          'disabled:bg-transparent disabled:text-dark disabled:border disabled:border-dark disabled:opacity-[0.16]',
          'before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full',
          'hover:text-white before:bg-primary-500',
          'before:active:bg-primary-900',
          'before:transition-transform-react-m before:origin-bottom before:z-[-1]',
          'before:transform-scale-y-0 hover:before:transform-scale-y-100'
        ),
        text: cn(
          'text-primary-500 border-none',
          'hover:text-primary-700',
          'focus:border focus:border-primary-700 focus:text-primary-700',
          'active:text-primary-900',
          'disabled:text-dark disabled:opacity-[0.16]'
        )
      },
      size: {
        small: 'p-4 gap-4',
        large: 'p-5 gap-5'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small'
    }
  }
);

export interface IconProps {
  src: string;
  size: number;
  alt: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconProps;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      asChild = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {props.children}
        {icon && (
          <Image
            src={icon.src}
            width={icon.size}
            height={icon.size}
            alt={icon.alt}
          />
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
