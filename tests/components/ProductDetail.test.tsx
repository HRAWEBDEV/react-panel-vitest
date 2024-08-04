import { screen, render } from '@testing-library/react';
import ProductDetail from '../../src/components/ProductDetail';
import { products } from '../mocks/data';

describe('productDetail', () => {
 it('should render the found product', async () => {
  render(<ProductDetail productId={1} />);
  expect(await screen.findByText(new RegExp(products[0].name)));
  expect(await screen.findByText(new RegExp(products[0].price.toString())));
 });

 it('should render no product message if no product found ', async () => {
  render(<ProductDetail productId={-1} />);
  const message = await screen.findByText(/not found/i);
  expect(message).toBeInTheDocument();
 });

 it('should show invalid id when id is invalid', async () => {
  render(<ProductDetail productId={0} />);
  const message = await screen.findByText(/Invalid ProductId/i);
  expect(message).toBeInTheDocument();
 });
});
