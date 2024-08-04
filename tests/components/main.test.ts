describe('categories api', () => {
 it('should return three categories', async () => {
  const res = await fetch('/categories');
  const data = await res.json();
  expect(data).toHaveLength(3);
 });
});
