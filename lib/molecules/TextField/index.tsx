import React, { ComponentProps, useId } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { HFlex, Text, VFlex } from '../../atoms';

type Variant = 'solid' | 'underline';

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

export interface TextFieldProps extends ComponentProps<'div'> {
  value: string;
  name: string;
  onChange: NonNullable<ComponentProps<'input'>['onChange']>;
  type: NonNullable<ComponentProps<'input'>['type']>;
  variant?: Variant;
  placeholder?: string;
  lengthLimit?: {
    show?: boolean;
    maxLength: number;
  };

  label?: string;
  inputProps?: ComponentProps<'input'>;
}

export default function TextField({
  value,
  name,
  onChange,
  label,
  variant = 'solid',
  placeholder,
  inputProps,
  lengthLimit,
  ...restProps
}: TextFieldProps) {
  const id = useId();

  return (
    <VFlex {...restProps}>
      {label && (
        <HFlex className="justify-between">
          <label className={`mb-1 text-[#525252] ${TYPOGRAPHY_SIZE_MAP['xs']}`} htmlFor={label + id}>
            {label}
          </label>
          {lengthLimit?.show && (
            <Text size="xs">
              {value?.toString().length}/{lengthLimit.maxLength}
            </Text>
          )}
        </HFlex>
      )}
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={label + id}
        placeholder={placeholder}
        maxLength={lengthLimit?.maxLength}
        {...inputProps}
        className={twMerge(
          'focus:outline-none h-[45px] px-4',
          twJoin(variant === 'underline' && 'border-b border-black'),
          twJoin(variant === 'solid' && 'bg-[#ecebf1] rounded-md'),

          inputProps?.className
        )}
      />
    </VFlex>
  );
}
