import { screen, render } from '@testing-library/react';
import TagList from '../../src/components/TagList';

describe('TagList', () => {
 it('should render tags correctly', async () => {
  render(<TagList />);

  // calls cb every 15ms until 1s
  // await waitFor(() => {
  //  const listItems = screen.getAllByRole('listitem');
  //  expect(listItems.length).toBeGreaterThan(0);
  // });

  // find is the combination of get with wait for
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBeGreaterThan(0);
 });
});
