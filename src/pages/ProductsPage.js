import ProductApi from '../api/ProductApi.js';
const ProductsPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return `
             ${products.map(product => `
            <div class="product-item" >
                <div class="product-img"style:"height:160px">
                    <img src="http://localhost:4000/api/product/photo/${product._id}" title="${product.name}">
                </div>
             <strong><a href="">${product.name}</a></strong><br>
             <label>Giá: </label><span class="product-price">${product.price}</span><br>
             <p>${product.description}</p>
             <div class="buy-button">
                 <a href="/#/products/${product._id}">Xem sản phẩm</a>
             </div>
         </div>
                    `).join("")}
               `
    }
}
export default ProductsPage;

