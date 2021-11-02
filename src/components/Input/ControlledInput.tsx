import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import ErrorMessage from 'components/ErrorMessage';
import ControlledInputProps from './types';
import styles from './input.module.css';

function ControlledInput(props: ControlledInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { name, error, onChange, transform, suffix, inputClassName, wrapperClassName, ...rest } = props;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let inputValue = event.target.value;
    if (transform) inputValue = transform(inputValue);
    onChange(inputValue);
  }

  return (
    <div className={wrapperClassName}>
      <div className={styles.inputWrapper}>
        <input
          className={clsx(styles.controlledInput, inputClassName)}
          disabled={props.disabled}
          id={name}
          name={name}
          data-testid={`${name}-input`}
          onChange={handleChange}
          {...rest}
          ref={ref}
        />
        {!!suffix && <span className={styles.inputSuffix}>{suffix}</span>}
      </div>
      {error && <ErrorMessage data-testid={`${name}-input-error`}>{error}</ErrorMessage>}
    </div>
  );
}

export default forwardRef(ControlledInput);
