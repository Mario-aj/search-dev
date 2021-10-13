/* eslint-disable no-restricted-imports */
import { Field } from 'react-final-form';

const identity = (value: any) => value;

const FieldWithParse = (props: any) => <Field {...props} parse={identity} />;

export default FieldWithParse;
