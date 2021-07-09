import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils";

const CategoryPage ={
    async render(){
        const{ id } =parseRequestUrl();//lấy id
        // console.log(id);
        const{ data :products}=await ProductApi.getAll();//lấy sản phẩm trong bảng product
        const result = products.filter(product=>product.category==id).map(product=>{//lọc ra mang mới với categoryId và lặp 
            return`
            <div class="product-item">
                <div class="product-img">
                    <img src="http://localhost:4000/api/product/photo/${product._id}" title="${product.name}">
                </div>
             <strong><a href="">${product.name}</a></strong><br>
             <label>Giá: </label><span class="product-price">${product.price}</span><br>
             <p>${product.description}</p>
             <div class="buy-button">
                 <a href="/#/products/${product._id}">Xem sản phẩm</a>
             </div>
         </div>
            `
        }).join("");
        return`${result}`
    }
}
export default CategoryPage;