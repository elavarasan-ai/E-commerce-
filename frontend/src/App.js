import React, { useEffect, useState } from 'react';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from './api';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';



function App() {
const [products, setProducts] = useState([]);
const [editingProduct, setEditingProduct] = useState(null);


useEffect(() => {
loadProducts();
}, []);


async function loadProducts() {
const data = await fetchProducts();
setProducts(data.products || []);
}


async function handleAddOrUpdate(productData) {
if (editingProduct) {
await updateProduct(editingProduct._id, productData);
setEditingProduct(null);
} else {
await createProduct(productData);
}
loadProducts();
}


async function handleDelete(id) {
await deleteProduct(id);
loadProducts();
}


return (
<div className="container p-4">
<h2>Product Catalog</h2>
<ProductForm onSubmit={handleAddOrUpdate} product={editingProduct} />
<ProductList products={products} onEdit={setEditingProduct} onDelete={handleDelete} />
</div>
);
}


export default App;