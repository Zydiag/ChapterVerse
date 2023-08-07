export const getList = async (searchTerm) => {
  const res = await fetch(
    `${import.meta.env.VITE_HOST}/444/products?name_like=${
      searchTerm ? searchTerm : ''
    }`
  );
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  const data = await res.json();

  return data;
};
export const getProduct = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_HOST}/444/products/${id}`);
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  const data = await res.json();
  return data;
};
export const getFeaturedList = async () => {
  const res = await fetch(`${import.meta.env.VITE_HOST}/444/featured_products`);
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  const data = await res.json();
  return data;
};
