import { Input, InputProps } from '../form/Input';
import { BaseInputFinalForm, baseInputClass } from './BaseInput';
import FieldWithParse from './FieldWithParse';

interface FinalFormTextInputProps extends InputProps {
  validate: (prop: string) => string | undefined;
}

export const FinalFormTextInput = ({
  placeholder,
  maxLength,
  minLength,
  name,
  validate,
  onKeyDown,
  disabled,
  type,
  ref,
  ...rest
}: FinalFormTextInputProps) => (
  <FieldWithParse name={name} validate={validate}>
    {({ input, meta }: any) => (
      <BaseInputFinalForm {...rest} meta={meta}>
        <Input
          className={`${baseInputClass(meta)}`}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          disabled={disabled}
          onChange={(value: any) => input.onChange(value.target.value)}
          type={type}
          ref={ref}
          {...input}
        />
      </BaseInputFinalForm>
    )}
  </FieldWithParse>
);
