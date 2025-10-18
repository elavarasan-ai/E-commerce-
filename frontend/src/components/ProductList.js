import React from 'react';


function ProductList({ products, onEdit, onDelete }) {
return (
<div>
<h3>Product List</h3>
{products.length === 0 ? (
<p>No products available.</p>
) : (
<table border="1" cellPadding="10">
<thead>
<tr>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Stock</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{products.map((p) => (
<tr key={p._id}>
<td>{p.name}</td>
<td>${p.price}</td>
<td>{p.category}</td>
<td>{p.inStock ? 'Yes' : 'No'}</td>
<td>
<button onClick={() => onEdit(p)}>Edit</button>
<button onClick={() => onDelete(p._id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
)}
</div>
);
}


export default ProductList;