import { ForwardedRef, forwardRef } from 'react';
import Overwrite from 'lib/utils/Overwrite';
import ControlledInput from '../ControlledInput';
import ControlledInputProps from '../types';

export type InputTextProps = Overwrite<ControlledInputProps, { type?: 'text' }>;

function TextField(props: InputTextProps, ref: ForwardedRef<HTMLInputElement>) {
  return <ControlledInput {...props} type="text" ref={ref} />;
}

export default forwardRef(TextField);
