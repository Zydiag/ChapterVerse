export const login = async (authDetail) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch('http://localhost:3000/login', requestOptions);
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem('token', JSON.stringify(data.accessToken));
    //chapter verse id cvid
    sessionStorage.setItem('cvid', JSON.stringify(data.user.id));
  }
  return data;
}

export const register = async (authDetail) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetail),
    };
    const res = await fetch('http://localhost:3000/register', requestOptions);
    const data = await res.json();

    if(data.accessToken){
      sessionStorage.setItem('token',JSON.stringify(data.accessToken))
      //chapter verse id cvid
      sessionStorage.setItem('cvid',JSON.stringify(data.user.id))
    }
}

export const logout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('cvid');
}