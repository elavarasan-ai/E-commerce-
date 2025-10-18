import React, { useState, useEffect } from 'react';


function ProductForm({ onSubmit, product }) {
const [formData, setFormData] = useState({
name: '',
description: '',
price: '',
category: '',
inStock: true,
});


useEffect(() => {
if (product) setFormData(product);
}, [product]);


const handleChange = (e) => {
const { name, value, type, checked } = e.target;
setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
};


const handleSubmit = (e) => {
e.preventDefault();
onSubmit(formData);
setFormData({ name: '', description: '', price: '', category: '', inStock: true });
};


return (
<form onSubmit={handleSubmit} className="p-3 border rounded">
<input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
<input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
<input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
<input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
<label>
<input name="inStock" type="checkbox" checked={formData.inStock} onChange={handleChange} /> In Stock
</label>
<button type="submit">{product ? 'Update' : 'Add'} Product</button>
</form>
);
}


export default ProductForm;