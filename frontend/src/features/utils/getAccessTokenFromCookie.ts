export function getAccessTokenFromCookie() {
  const cookies = document.cookie;
  const cookie: { accessToken: string } = { accessToken: '' };
  if (cookies !== '') {
    const temp = cookies.split(';');
    for (let i = 0; i < temp.length; i++) {
      const data = temp[i].split('=');
      let key = data[0];
      let value = data[1];
      if (key.trim() === 'accessToken') {
        cookie.accessToken = value;
        return cookie.accessToken;
      }
    }
  }
  return cookie.accessToken;
}
