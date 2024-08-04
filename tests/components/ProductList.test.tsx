import { screen, render } from '@testing-library/react';
import ProductList from '../../src/components/ProductList';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('productList', () => {
 it('should render the list of products', async () => {
  render(<ProductList />);
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBeGreaterThan(0);
 });

 it('should render no product message if no product is available', async () => {
  server.use(
   http.get('/products', () => {
    return HttpResponse.json([]);
   })
  );
  render(<ProductList />);
  const message = await screen.findByText(/No products/i);
  expect(message).toBeInTheDocument();
 });
});
