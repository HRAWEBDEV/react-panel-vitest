import { screen, render } from '@testing-library/react';
import ProductDetail from '../../src/components/ProductDetail';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';
import { db } from '../mocks/db';

describe('productDetail', () => {
 let productId: number;
 beforeAll(() => {
  const product = db.product.create();
  productId = product.id;
 });
 afterAll(() => {
  db.product.deleteMany({ where: { id: { equals: productId } } });
 });
 it('should render the found product', async () => {
  render(<ProductDetail productId={productId} />);
  const product = db.product.findFirst({
   where: { id: { equals: productId } },
  });
  expect(await screen.findByText(new RegExp(product!.name)));
  expect(await screen.findByText(new RegExp(product!.price.toString())));
 });

 it('should render no product message if no product found ', async () => {
  server.use(http.get('/products/:id', () => HttpResponse.json(null)));
  render(<ProductDetail productId={4} />);
  const message = await screen.findByText(/not found/i);
  expect(message).toBeInTheDocument();
 });

 it('should show invalid id when id is invalid', async () => {
  render(<ProductDetail productId={0} />);
  const message = await screen.findByText(/Invalid ProductId/i);
  expect(message).toBeInTheDocument();
 });
});
