import { useState, useEffect } from 'react';
import { verifyAccessToken } from '../features/api';
import { useCookie } from './useCookie';

export const useAuth = () => {
  const { cookie } = useCookie();
  const [check, setCheck] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({
    checked: false,
    isAuthenticated: false,
  });
  useEffect(() => {
    const verify = async () => {
      const response = await verifyAccessToken(cookie.accessToken);
      if (response === 'OK') {
        setCheck({ checked: true, isAuthenticated: true });
      } else {
        setCheck({ checked: true, isAuthenticated: false });
      }
    };
    verify();
  }, []);
  return { check };
};
