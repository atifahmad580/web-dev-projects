const products = [
  {
    name: "Men's Denim Jacket",
    price: "₹2,499",
    img: "https://source.unsplash.com/300x400/?denim,jacket"
  },
  {
    name: "Women's Floral Dress",
    price: "₹1,999",
    img: "https://source.unsplash.com/300x400/?floral,dress"
  },
  {
    name: "Unisex Hoodie",
    price: "₹1,599",
    img: "https://source.unsplash.com/300x400/?hoodie"
  },
  {
    name: "Summer T-shirt",
    price: "₹899",
    img: "https://source.unsplash.com/300x400/?tshirt"
  }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src=\"${product.img}\" alt=\"${product.name}\" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick=\"alert('Added to cart')\">Add to Cart</button>
  `;
  productList.appendChild(card);
});

function scrollToShop() {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}
