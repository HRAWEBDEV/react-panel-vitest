import { http, HttpResponse } from 'msw';

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
  return HttpResponse.json([
   {
    id: 1,
    name: 'product one',
   },
   {
    id: 2,
    name: 'product twp',
   },
   {
    id: 3,
    name: 'product three',
   },
  ]);
 }),
];

export { handlers };
