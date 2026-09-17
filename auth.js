
function login(username, password) {
  if (!username || !password) {
    return false; // username hoặc password rỗng
  }
     if (username === 'admin' && password === '9999') {
    return true;
  }
  return false;
}

module.exports = login;
