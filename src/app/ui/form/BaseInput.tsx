import { ReactNode } from 'react';
import classNames from 'classnames';

export type BaseInputProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export const BaseInput = ({ label, children, className }: BaseInputProps) => (
  <div className={classNames(className || 'w-auto')}>
    {label && (
      <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker">
        {label}
      </label>
    )}
    {children}
  </div>
);
