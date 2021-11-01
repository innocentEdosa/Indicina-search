import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'components/Button';

test('renders a button', () => {
  const container = render(<Button>Click Me</Button>);
  expect(container).toMatchSnapshot();
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('expects button to render with correct props', () => {
  const props = {
    size: 'standard',
    className: 'testClass',
    id: 'testId',
    type: 'button',
  };

  render(<Button {...props}>Click Me</Button>);
  const container = screen.getByTestId(props.id);
  expect(container.className).toBe('button standard testClass');
  expect(container.dataset.testid).toBe(props.id);
  expect(container.type).toBe(props.type);
});
