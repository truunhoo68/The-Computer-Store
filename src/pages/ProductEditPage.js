import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl,$ } from '../utils.js';
import CategoryAPI from '../api/catagoryAPI.js'
const ProductEditPage = {
    async render() {
        const { id } = parseRequestUrl();//lấy id trên url
        const { data: product } = await ProductApi.get(id);//gắn id vào productAPI
        const {data:categories} = await CategoryAPI.getAll()
        console.log(product);
        return /*html*/`
        <div id="content-wrapper">
            <div class="container">
                    <div class="left-menu">
                        <div class="menu-heading">Admin Menu</div>
                                    <div class="menu-items">
                                        <ul>
                                        <li><a href="./#/listproduct">Quản lí sản phẩm</a></li>
                                        <li><a href="./#/listcategory">Quản lí danh mục</a></li>
                                        <li><a href="">Đơn hàng</a></li>
                                        </ul>
                                    </div>
                        </div>
                    <div class="main-content">
                        <h1>Sửa sản phẩm</h1>
                        <div class="card-box mb-30">
                    <div class="container" style="width: 500px">
			<form id="form-update-product">
                        <b>Tên Sản Phẩm </b>
                        <input type="text" id="product-name" class="form-control" value="${product.name}"><br>
                    <b>Giá Sản Phẩm</b>
                        <input type="text" id="product-price" class="form-control" value="${product.price}"><br>
                    <b>Loại Sản Phẩm</b>
                        <select id="product-categoryId" class="form-control">
                        ${categories.map(item =>{//dùng vòng lặp
                            return `
                            <option value="${item._id}">${item.name}</option>
                            `
                        })}
                        </select> <br>
                        <b> Ảnh Sản Phẩm</b>
                        <input type="file" id="product-image" class="form-control"><br>
                <b>Mô Tả</b>
                    <input type="text" id="product-description" class="form-control" value="${product.description}"<br>
            <input type="submit" value="Sửa sản phẩm" class="btn btn-primary">
        </form>
			        </div>
                </div>
                </div>
            </div>
        </div>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        $('#form-update-product').addEventListener('submit',(e)=>{
            e.preventDefault();//chặn reload
            var newformData = new FormData();
            newformData.append('name', $('#product-name').value);
            // newformData.append('photo', $('#product-image').files[0]);
            newformData.append('price', parseInt($('#product-price').value));
            newformData.append('description', $('#product-description').value);
            newformData.append('category', $('#product-categoryId').value);
            const productImage = $('#product-image').files[0];
            if(productImage){
                console.log(productImage);
                    newformData.append('photo',productImage)
                    }
           ProductApi.update(id,newformData);
           window.location.hash="/listproduct";
        })
    }
};
export default ProductEditPage;