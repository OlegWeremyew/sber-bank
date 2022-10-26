import { SetStateAction, useEffect, useMemo, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../utils/firebase';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<SetStateAction<{}> | null>({});

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        return;
      }
      setIsLoggedIn(false);
      setUser({});
    });
    return () => unSub();
  }, []);

  const values = {
    user,
    isLoggedIn,
  };

  return useMemo(() => values, [values]);
};
