import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import ExpandableText from '../../src/components/ExpandableText';

describe('ExpandableText', () => {
 const limit = 255;
 const longText = 'a'.repeat(limit + 1);
 const truncateText = longText.substring(0, limit) + '...';

 it('should render the full text if less than 255 characters', () => {
  const text = 'test';
  render(<ExpandableText text={text} limit={limit} />);
  expect(screen.queryByText(text)).toBeInTheDocument();
 });

 it('should truncate text if longer than 255 characters', () => {
  render(<ExpandableText text={longText} limit={limit} />);
  expect(screen.getByText(truncateText)).toBeInTheDocument();
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent(/more/i);
 });

 it('should expand text when show more button is clicked', async () => {
  render(<ExpandableText text={longText} limit={limit} />);
  const btn = screen.getByRole('button');
  await user.click(btn);

  expect(screen.queryByText(longText)).toBeInTheDocument();
  expect(btn).toHaveTextContent(/show less/i);
 });

 it('should collapse text when show less btn is clicked', async () => {
  render(<ExpandableText text={longText} limit={limit} />);
  const showMoreBtn = screen.getByRole('button', { name: /show more/i });
  await user.click(showMoreBtn);

  const showLessBtn = screen.getByRole('button', { name: /show less/i });

  await user.click(showLessBtn);

  expect(screen.queryByText(truncateText)).toBeInTheDocument();
 });
});
