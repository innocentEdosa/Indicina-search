import { TextField } from '.';
import { render, fireEvent } from '@testing-library/react';

const setup = (transform, onChange) => {
  const onChangeHandler = onChange || jest.fn();

  const utils = render(<TextField transform={transform} onChange={onChangeHandler} name="text" />);
  const input = utils.getByTestId('text-input');
  return {
    input,
    ...utils,
  };
};

test('renders an input field', () => {
  const onChange = jest.fn();
  const container = render(<TextField onChange={onChange} />);
  expect(container).toMatchSnapshot();
});

test('It should return entered value', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: '23' } });
  expect(input.value).toBe('23');
});

test('It should transform entered value', () => {
  let stateValue;

  const onChange = value => {
    stateValue = value;
  };
  const transform = value => {
    return `$${value}`;
  };
  const { input } = setup(transform, onChange);
  fireEvent.change(input, { target: { value: '23' } });
  input.value = stateValue;
  expect(input.value).toBe('$23');
});
