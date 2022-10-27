import { useEffect, useMemo, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { AsyncStorage } from 'react-native';

import { auth } from '../../utils/firebase';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    // const getFromAsyncStorage = async () => {
    //   const userAS = await AsyncStorage.setItem('user', user);
    //   // @ts-ignore
    //   if (userAS) {
    //     setUser(userAS);
    //     setIsLoggedIn(true);
    //   }
    // };
    // getFromAsyncStorage();

    const unSub = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        // await AsyncStorage.setItem('user', user);
      } else {
        setIsLoggedIn(false);
        setUser({});
        // await AsyncStorage.setItem('user', {} as any);
      }
    });
    return () => unSub();
  }, []);

  const values: any = {
    user,
    isLoggedIn,
  };

  return useMemo(() => values, [values]);
};
