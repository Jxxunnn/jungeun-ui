import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type TypographyVariantKeys = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
type TypographyClasses =
  | 'text-4xl'
  | 'text-3xl'
  | 'text-2xl'
  | 'text-xl'
  | 'text-lg'
  | 'text-base'
  | 'text-sm'
  | 'text-xs';

type TypographyVariants = Record<TypographyVariantKeys, TypographyClasses>;

export const TYPOGRAPHY_SIZE_MAP: Readonly<TypographyVariants> = {
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  base: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
};

interface TextProps extends ComponentProps<'span'> {
  children: React.ReactNode;
  size?: keyof typeof TYPOGRAPHY_SIZE_MAP;
  className?: string;
}

export default function Text({ children, className, size = 'base', ...restProps }: TextProps) {
  return (
    <span className={twMerge(TYPOGRAPHY_SIZE_MAP[size], className)} {...restProps}>
      {children}
    </span>
  );
}
