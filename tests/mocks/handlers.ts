import { http, HttpResponse } from 'msw';
import { products } from './data';

const handlers = [
 http.get('/categories', () => {
  return HttpResponse.json([
   {
    id: 1,
    name: 'beauty',
   },
   {
    id: 2,
    name: 'electronics',
   },
   {
    id: 3,
    name: 'gardening',
   },
  ]);
 }),

 http.get('/products', () => {
  return HttpResponse.json(products);
 }),

 http.get('/products/:id', ({ params }) => {
  const id = params.id as string;
  const foundProduct = products.find((p) => p.id == parseInt(id));
  if (!foundProduct) return HttpResponse.json(null, { status: 404 });
  return HttpResponse.json(foundProduct);
 }),
];

export { handlers };
