import classNames from 'classnames';
import { BaseInput, BaseInputProps } from '../form/BaseInput';

export interface FinalFormBaseInputProps extends BaseInputProps {
  meta: {
    error: any;
    touched: any;
    dirty: any;
    submitFailed: any;
  };
}

const shouldDisplayError = (meta: FinalFormBaseInputProps['meta']) =>
  meta.error && meta.touched && (meta.dirty || meta.submitFailed);

export const baseInputClass = (meta: FinalFormBaseInputProps['meta']) =>
  classNames(
    'appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-2 px-4 focus:outline-none focus:ring-inset focus:border-blue-300',
    {
      'border-red-600': shouldDisplayError(meta),
    }
  );

export const BaseInputFinalForm = ({
  label,
  meta,
  children,
  className,
}: FinalFormBaseInputProps) => {
  return (
    <div className={classNames(className || 'w-auto')}>
      <BaseInput label={label}>{children}</BaseInput>
      {shouldDisplayError(meta) && (
        <p className="text-xs italic text-red-600">{meta.error}</p>
      )}
    </div>
  );
};
