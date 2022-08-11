import { useCookies } from 'react-cookie';

export const useCookie = () => {
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const setAccessToken = (accessToken: string) => {
    setCookie('accessToken', accessToken);
  };

  const removeAccessToken = () => {
    removeCookie('accessToken');
  };

  return { cookie, setAccessToken, removeAccessToken };
};
