import { screen, render } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';

describe('TermsAndConditions', () => {
 it('should render with correct text and initial state', () => {
  render(<TermsAndConditions />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Terms & Conditions');

  const checkTerms = screen.getByRole('checkbox');
  expect(checkTerms).not.toBeChecked();

  const subBtn = screen.getByRole('button');
  expect(subBtn).toBeInTheDocument();
  expect(subBtn).toHaveTextContent(/submit/i);
  expect(subBtn).toBeDisabled();
 });

 it('should enable the button when the checkbox is checked', () => {
  render(<TermsAndConditions />);
 });
});
