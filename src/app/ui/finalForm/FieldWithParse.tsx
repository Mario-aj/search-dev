import { Field } from 'react-final-form';

// https://github.com/final-form/react-final-form/issues/130

const identity = (value: any) => value;

const FieldWithParse = (props: any) => <Field {...props} parse={identity} />;

export default FieldWithParse;
