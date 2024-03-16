import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { HFlex } from '../../atoms';

interface HeaderProps extends ComponentProps<'div'> {}

export default function Header({ children, className }: HeaderProps) {
  return <HFlex className={twMerge('gap-2', className)}>{children}</HFlex>;
}
