import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  // prettier-ignore
  return (
    <button
      className="mb-2 mr-3 hover:text-gray-300 whitespace-pre"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      L o g  O u t
    </button>
  );
};

export default LogoutButton;
