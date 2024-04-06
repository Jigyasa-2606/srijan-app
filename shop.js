const arts = [
    "https://c02.purpledshub.com/uploads/sites/51/2022/10/sunset-sky-painting-7e73f25.jpg?webp=1&w=1200",
    // "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
    // "https://rukminim2.flixcart.com/image/850/1000/jsdj8nk0/painting/3/y/x/npnt-can-093-perfect-original-imafdyxgkzzydpj9.jpeg?q=90&crop=false"
]

let total = 11;
for (let i = 0; i < total; i++) {
    let stars = getRandomRating()
    let art = getRandomArt()
    $(".shop-carousel").append(
        `<div class="md:w-1/4 pr-4 pl-4 sm:w-1/2">
            <div class="product-grid shadow-xl">
                <div class="product-image">
                    <a href="#">
<!--                        <img class="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png">-->
<!--                        <img class="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png">-->
                        <img class="pic-1" src="${art}">
                        <img class="pic-2" src="${art}">
                    </a>
                    <ul class="social">
                        <li><a href=""><i class="bx bx-search"></i></a></li>
                        <li><a href=""><i class="bx bxs-shopping-bag-alt"></i></a></li>
                        <li><a href=""><i class="bx bx-cart"></i></a></li>
                    </ul>
                    ${Math.floor(Math.random() * 2) === 1 ? '<span class="product-new-label">New</span>' : ''}
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Art ${i + 1}</a></h3>
                    <ul class="rating">
                        <li>
                            ${Array(Math.floor(stars)).fill('<i class=\'bx bxs-star\'></i>').join('')}
                            ${stars % 1 === 0.5 ? '<i class=\'bx bxs-star-half\'></i>' : ''}
                            ${Array(5 - Math.ceil(stars)).fill('<i class=\'bx bx-star\'></i>').join('')}
                        </li>
                    </ul>
                    <div class="price">$15.00
                        <span>$20.00</span>
                    </div>
                </div>
            </div>
        </div>`
    )
}

function getRandomRating() {
    return Math.floor(Math.random() * 10) / 2;
}

function getRandomArt() {
    return arts[Math.floor(Math.random() * arts.length)];
}