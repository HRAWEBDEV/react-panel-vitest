import { screen, render } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('UserList', () => {
 it('should render no users when the users array is empty', () => {
  render(<UserList users={[]} />);
  const message = screen.getByText(/no users/i);
  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
  expect(message).toBeInTheDocument();
 });
 //
 it('should render users when the users array is not empty', () => {
  const users: User[] = [
   {
    id: 1,
    name: 'hamid reza',
    isAdmin: true,
   },
   {
    id: 2,
    name: 'hooman',
    isAdmin: false,
   },
  ];
  render(<UserList users={users} />);
  for (const user of users) {
   const link = screen.getByRole('link', { name: user.name });
   expect(link).toBeInTheDocument();
   expect(link).toHaveAttribute('href', `/users/${user.id}`);
  }
 });
});
