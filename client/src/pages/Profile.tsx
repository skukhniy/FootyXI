import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  console.log(user);

  return (
    <div>
      <img src={user!.picture} alt={user!.name} />
      <h2>{user!.name}</h2>
      <p>{user!.email}</p>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
});
