import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and update when clicked', () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect background to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect background color to be blue
  expect(colorButton).toHaveTextContent('Change to red')
});


test('initial conditions', () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //check that the button starts out enable
  expect(colorButton).toBeEnabled()
  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
});
