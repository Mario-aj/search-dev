import React, { HTMLProps } from 'react';
import classnames from 'classnames';
import { BaseInput } from './BaseInput';

export interface InputProps extends HTMLProps<HTMLInputElement> {}

export const Input = ({ label, className, ref, type, ...rest }: InputProps) => (
  <BaseInput
    label={label}
    className="relative flex flex-wrap items-stretch h-12 max-w-xs mb-0.5 text-gray-700 w-72"
  >
    <input
      className={classnames(
        'p-2 text-sm shadow-inner border rounded focus:outline-none',
        className
      )}
      type={type || 'text'}
      ref={ref}
      {...rest}
    />
  </BaseInput>
);
