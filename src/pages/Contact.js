const Contact={
    async render(){
        return `
        <section>
        <div class="container">
          <div class="containerinfo">
            <div>
              <h2>Thông Tin Liên Hệ</h2>
              <ul class="info">
                <li>
                  <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                  <span>Trịnh Văn Bô<br />
                    Nam Từ Liêm,<br />
                    Thành Phố Hà Nội
                  </span>
                </li>
                <li>
                  <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <span></span>
                </li>
               <li>
                  <span><i class="fa fa-phone-square" aria-hidden="true"></i></span>
                  <span></span>
                </li>
              </ul>
            </div>
            <ul class="sci">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
         </div>
         <div class="containerForm">
           <h2>Gửi Lời Nhắn</h2>
           <div class="formBox">
               <div class="inputBox w50">
                   <input type="text" name="" required>
                   <span>Họ</span>
               </div>
               <div class="inputBox w50">
                   <input type="text" name="" required>
                   <span>Tên</span>
               </div>
               <div class="inputBox w50">
                   <input type="text" name="" required>
                   <span>Email</span>
               </div>
               <div class="inputBox w50">
                   <input type="text" name="" required>
                   <span>Số Điện Thoại</span>
               </div>
               <div class="inputBox w100">
                   <textarea name="" required></textarea>
                   <span>Lời Nhắn Của Bạn</span>
               </div>
               <div class="inputBox w100">
                   <input type="submit" value="Gửi">
               </div>
           </div>
       </div>
     </section>
     
        `
    }
}
export default Contact;