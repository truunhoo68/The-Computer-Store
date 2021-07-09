import ProductAPI from '../api/ProductApi.js';
import CategoryAPI from '../api/catagoryAPI.js'
import { parseRequestUrl, $ } from '../utils.js';
import firebase from '../firebase'

const ProductAddPage = {
    async render() {//sử dụng phương thức render
        const { data: categories } = await CategoryAPI.getAll()
        return/*html*/`
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
                        <h1>Thêm sản phẩm</h1>
                        <div class="card-box mb-30">
        <div class="container" style="width: 500px">
		<form id="form-add">
                <b>Tên Sản Phẩm </b>
                    <input type="text" id="product-name" class="form-control" placeholder="Nhập tên sản phẩm . . ."><br>
                <b>Giá Sản Phẩm</b>
                    <input type="text" id="product-price" class="form-control" placeholder="Nhập giá sản phẩm"><br>
                <b>Loại Sản Phẩm</b>
                    <select id="product-categoryId" class="form-control">
                        
                        ${categories.map(item => {
            return `
                            <option value="${item._id}">${item.name}</option>
                            `

        })}
                    </select> <br>
                <b> Ảnh Sản Phẩm</b>
                    <input type="image" id="product-image" class="form-control"><br>
                <b>Mô Tả</b>
                    <input type="text" id="product-description" class="form-control" placeholder="Nhập mô tả sản phẩm"><br>

            <input type="submit" value="Thêm sản phẩm" class="btn btn-primary">
        </form>
    
			</div>
			</div>
                    </div>
                </div>
        </div>
    `
    },
    async afterRender() {

        $('#form-add').addEventListener('submit', async e => {
            e.preventDefault();
            console.log('hello');
            var formData = new FormData();
            formData.append('name', $('#product-name').value);
            formData.append('photo', $('#product-image').files[0]);
            formData.append('price', parseInt($('#product-price').value));
            formData.append('category', $('#product-categoryId').value);
            formData.append('description', $('#product-description').value);

            const product = await ProductAPI.add(formData);
            if(product){
                window.location.href="/#/listproduct";
            }
            


        })
    }
}
export default ProductAddPage;