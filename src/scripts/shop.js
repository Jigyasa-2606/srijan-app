$.get("http://localhost:8080/shop/get/all", (data) => {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        $(".shop-carousel").append(
            `<div class="md:w-1/4 pr-4 pl-4 sm:w-1/2">
                <div class="p-4">
                    <div class="product-grid shadow-xl">
                        <div class="product-image">
                            <a href="#" class="pics-${i}">
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
                            <h3 class="title"><a href="#">${item.name}</a></h3>
                            <h5 class="title">${item.artist.name}</h5>
                            <div class="price">\u20B9${item.price.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>`
        );

        // $.get("http://localhost:8080/art/get_img/" + item.art1, (img) => {
        //     let blob = new Blob([new ArrayBuffer(img)], {type: 'image/jpeg'});
        //     let link = URL.createObjectURL(blob);
        //     $(`.pics-${i}`).find(".pic-1").attr("src", link)
        // })
        // $.get("http://localhost:8080/art/get_img/" + item.art2, (img) => {
        //     let blob = new Blob([new ArrayBuffer(img)], {type: 'image/jpeg'});
        //     let link = URL.createObjectURL(blob);
        //     $(`.pics-${i}`).find(".pic-2").attr("src", link)
        // })
    }
});
