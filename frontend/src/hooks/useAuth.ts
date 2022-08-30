import { useState, useEffect } from 'react';
import { verifyAccessToken } from '../features/api';

export const useAuth = () => {
  const [check, setCheck] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({
    checked: false,
    isAuthenticated: false,
  });
  useEffect(() => {
    const verify = async () => {
      try {
        const response = await verifyAccessToken();
        if (response === 'OK') {
          setCheck({ checked: true, isAuthenticated: true });
        }
      } catch (error) {
        setCheck({ checked: true, isAuthenticated: false });
      }
    };
    verify();
  }, []);
  return { check };
};
