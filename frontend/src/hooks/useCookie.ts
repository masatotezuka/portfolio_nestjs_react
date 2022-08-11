import { useCookies } from 'react-cookie';

export const useCookie = () => {
  const [cookie, setCookie] = useCookies(['accessToken']);

  const setAccessToken = (accessToken: string) => {
    setCookie('accessToken', accessToken);
  };

  return { cookie, setAccessToken };
};
