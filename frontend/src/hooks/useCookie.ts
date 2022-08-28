import { useCookies } from 'react-cookie';

export const useCookie = () => {
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const setAccessToken = (accessToken: string) => {
    setCookie('accessToken', accessToken, { path: '/' });
  };

  const removeAccessToken = () => {
    removeCookie('accessToken', { path: '/' });
  };

  return { cookie, setAccessToken, removeAccessToken };
};
