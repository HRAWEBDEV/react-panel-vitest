import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
 const renderSerachBox = () => {
  const onChange = vi.fn();
  render(<SearchBox onChange={onChange} />);
  const input = screen.getByPlaceholderText(/search/i);
  return {
   input,
   onChange,
  };
 };

 it('should render the input', () => {
  const { input } = renderSerachBox();
  expect(input).toBeInTheDocument();
 });

 it('should call onChange when enter key is pressed', async () => {
  const { input, onChange } = renderSerachBox();
  const serachTerm = 'SearchTerm';
  await user.type(input, serachTerm + '{enter}');
  expect(onChange).toHaveBeenCalledWith(serachTerm);
 });

 it('should not call onChange when input is empty', async () => {
  const { input, onChange } = renderSerachBox();
  const serachTerm = '';
  await user.type(input, serachTerm + '{enter}');
  expect(onChange).not.toBeCalled();
 });
});
