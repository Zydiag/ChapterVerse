export const getList = async (searchTerm) => {
  const res = await fetch(
    `http://localhost:3000/products?name_like=${searchTerm ? searchTerm : ''}`
  );
  const data = await res.json();

  return data;
};
export const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  const data = await res.json();
  return data;
};
export const getFeaturedList = async () => {
  const res = await fetch(`http://localhost:3000/featured_products`);
  const data = await res.json();
  return data;
};
