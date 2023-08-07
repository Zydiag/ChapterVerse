const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cvid = JSON.parse(sessionStorage.getItem('cvid'));
  return { token, cvid };
};

export const getUser = async () => {
  const browserData = getSession();

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `http://localhost:3000/600/users/${browserData.cvid}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const browserData = getSession();
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `http://localhost:3000/660/orders?user.id=${browserData.cvid}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};

export const createOrder = async (cartList, cartTotal, user) => {
  const browserData = getSession();
  const order = {
    cartList,
    amount_paid: cartTotal,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(
    `http://localhost:3000/660/orders`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};
