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
];

export { handlers };
