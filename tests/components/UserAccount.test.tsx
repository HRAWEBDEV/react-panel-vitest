import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('group', () => {
 it('should render the name of the user', () => {
  const user: User = {
   id: 1,
   name: 'hamid reza',
   isAdmin: true,
  };
  render(<UserAccount user={user} />);
  expect(screen.queryByText(user.name)).toBeInTheDocument();
 });

 it('should render the edit button when the user is admin', () => {
  const user: User = {
   id: 1,
   name: 'hamid reza',
   isAdmin: true,
  };
  render(<UserAccount user={user} />);

  const editBtn = screen.getByRole('button');

  expect(editBtn).toBeInTheDocument();
  expect(editBtn).toHaveTextContent(/edit/i);
 });

 it('should not render the edit button when the user is not admin', () => {
  const user: User = {
   id: 1,
   name: 'hamid reza',
   isAdmin: false,
  };
  render(<UserAccount user={user} />);
  const editBtn = screen.queryByRole('button');
  expect(editBtn).not.toBeInTheDocument();
 });
});
