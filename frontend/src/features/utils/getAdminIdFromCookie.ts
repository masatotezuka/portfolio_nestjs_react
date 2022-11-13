export function getAdminIdFromCookie() {
  const cookies = document.cookie;
  const tempArr = cookies.split(';');
  if (cookies !== '') {
    for (let i = 0; i < tempArr.length; i++) {
      const cookie = tempArr[i].split('=');
      let key = cookie[0];
      if (key.trim() === 'adminId') {
        return cookie[1];
      }
    }
  }
  return '';
}
