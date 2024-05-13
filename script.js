const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 13,
        img: "./images/item-1.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13,
        img: "./images/item-2.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 3,
        title: "milkshake",
        category: "shakes",
        price: 13,
        img: "./images/item-3.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 13,
        img: "./images/item-4.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 5,
        title: "egg fried",
        category: "lunch",
        price: 12,
        img: "./images/item-5.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 19,
        img: "./images/item-6.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 9,
        img: "./images/item-7.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 23,
        img: "./images/item-8.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 15,
        img: "./images/item-9.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 20,
        img: "./images/item-10.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
];

// local reviews data
const reviews = [
    {
        id: 1,
        name: "Song Hay",
        job: "Programmer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "All their food were taste good, I like it",
    },
    {
        id: 2,
        name: "Lunartic",
        job: "Programmer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "This is the best restaurant I ever come, hope everyone could taste all the food",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "sun kyu hii",
        job: "secretary",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: "저는 베이비 메깅스 트위 헬스 고스 +1이에요. 매진되기 전의 바이시클 권리 강황 샤르트뢰즈 샴브레이 팝업. 샤먼 겸손브래그 피클 컬러링북 샐비어 후드티, 냉압착 4달러 토스트 데일리 캐리",
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(menu);
    displayMenuButtons();
});

// fungsi untuk menampilkan menu menu itemnya
function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class = "menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

// fungsi untuk menampilkan tombol-tombolnya
function displayMenuButtons() {
    const categories = menu.reduce(
        function(values,item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    // console.log("categ", categories);
    const categoryBtns = categories
        .map(function(category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
            </button>`;
        })
        .join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  //console.log(filterBtns;
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
      // console.log("target", e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}



// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initital item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// show next person
nextBtn.addEventListener("click",function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click",function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

