// <!-- bata apps  ---------------->
const apps = [
    {
        id: 0,
        name: 'Myzimply',
        logo: "./img/myzimply.png",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum quasi fuga recusandae ipsam excepturi itaquererum accusantium eum quisquam nobis beatae quod,quo quae consequatur suscipit et illo repudiandae placeat.",
        img: [
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
        ],
        down: {
            play: "#",
            store: "#",
        }
    },
    {
        id: 1,
        name: 'Myzimply',
        logo: "./img/myzimply.png",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum quasi fuga recusandae ipsam excepturi itaquererum accusantium eum quisquam nobis beatae quod,quo quae consequatur suscipit et illo repudiandae placeat.",
        img: [
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
        ],
        down: {
            play: "#",
            store: "#",
        }
    },
    {
        id: 2,
        name: 'Myzimply',
        logo: "./img/myzimply.png",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum quasi fuga recusandae ipsam excepturi itaquererum accusantium eum quisquam nobis beatae quod,quo quae consequatur suscipit et illo repudiandae placeat.",
        img: [
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
            "./img/unnamed.webp",
        ],
        down: {
            play: "#",
            store: "#",
        }
    },
    
];

// <!-- swiper all  ---------------->
var swiper = new Swiper(".mySwiper.all", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

// <!-- swiper apps  ---------------->
var swiperApps = new Swiper(".mySwiper.apps", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
});

// <!-- show apps  ---------------->
(function projects() {
    document.querySelector(".apps > .swiper-wrapper").innerHTML = apps.map((e) => {
        return (
            ` 
            <div class="swiper-slide">
                <div onclick={showApp("${e.id}")}>                                
                    <img src=${e.logo} alt="${e.name}">
                    <h3>${e.name}</h3>
                </div>
            </div>
            `
        )
    }).join("");
})();

// <!-- show app  ---------------->
const app = document.getElementById("app");
const showApp = (id) => {
    app.style = "display: flex;";
    app.innerHTML = 
    `
        <div class="container">
            <div class="back">
                <svg onclick={closeApp()} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
                    </g>
                </svg>
            </div>
            <div class="info">
              <img src=${apps[id].logo} alt=${apps[id].name}>
              <div>
                <h1>${apps[id].name}</h1>
                <h3>${apps[id].name}</h3>
              </div>
            </div>

            <p>
              ${apps[id].p}
            </p>

            <div class="swiper mySwiper img">
              <div class="swiper-wrapper">
                  ${apps[id].img.map(e => `<img class="swiper-slide" src=${e} alt=""></img>`).join('')}
              </div>
            </div>

            <div class="down">
              <a href=${apps[id].down.play}>google play</a>
              <a href=${apps[id].down.store}>app store</a>
            </div>
        </div>
    `;
    // <!-- Swiper app img  ---------------->
    var swiperImg = new Swiper(".mySwiper.img", {
        spaceBetween: 20,
        mousewheel: true,
    });
}

// <!-- close app  ---------------->
const closeApp = () => app.style = "display: none;";