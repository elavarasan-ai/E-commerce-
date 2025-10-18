const API_BASE_URL = "http://localhost:5000/api/products"; // ✅ Correct backend URL

export const fetchProducts = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
};

export const updateProduct = async (id, updatedProduct) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  if (!response.ok) throw new Error("Failed to update product");
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete product");
  return response.json();
};
