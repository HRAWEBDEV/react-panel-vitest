import { it, describe, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Greet from '../../src/components/Greet';
import '@testing-library/jest-dom/vitest';

describe('group', () => {
 it('should render login button when name in not provided', () => {
  render(<Greet />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/login/i);
 });

 it('should render hello with name when the name is provided', () => {
  const name = 'hamid reza';
  render(<Greet name={name} />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(name);
 });
});
