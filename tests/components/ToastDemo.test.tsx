import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import ToastDemo from '../../src/components/ToastDemo';
import { Toaster } from 'react-hot-toast';

describe('ToastDemo', () => {
 it('should render toast success', async () => {
  render(
   <>
    <ToastDemo />
    <Toaster />
   </>
  );
  const showToastBtn = screen.getByRole('button');
  await user.click(showToastBtn);
  const message = await screen.findByText('Success');
  expect(message).toBeInTheDocument();
 });
});
