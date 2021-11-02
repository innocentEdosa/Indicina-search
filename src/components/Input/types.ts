import { InputHTMLAttributes } from 'react';
import Overwrite from 'lib/utils/Overwrite';

type ControlledInputProps = Overwrite<
  InputHTMLAttributes<HTMLInputElement>,
  {
    onChange: (value: string) => void;
    inputClassName?: string;
    suffix?: JSX.Element | string;
    value?: string;
    wrapperClassName?: string;
    transform?: (value: string) => string;
    error?: string;
  }
>;

export default ControlledInputProps;
