let total = 12;
for (let i = 0; i < total; i++) {
    $(".shop-carousel").append(
        `<div class="md:w-1/4 pr-4 pl-4 sm:w-1/2">
            <div class="p-4">
                <div class="product-grid shadow-xl">
                    <div class="product-image">
                        <a href="#">
                            <img class="pic-1" src="/assets/pic_1.jpg" alt="">
                            <img class="pic-2" src="/assets/pic_2.jpg" alt="">
                        </a>
                        <ul class="social">
                            <li><a href=""><i class="bx bx-search"></i></a></li>
                            <li><a href=""><i class="bx bxs-shopping-bag-alt"></i></a></li>
                            <li><a href=""><i class="bx bx-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product-content">
                        <h3 class="title"><a href="#">Artist ${i + 1}</a></h3>
                        <h5 class="title">Sculpture</h5>
                        <div class="price">$15.00
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )
}