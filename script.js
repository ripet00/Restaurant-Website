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
    },{
        id: 5,
        title: "egg fried",
        category: "lunch",
        price: 12,
        img: "./images/item-5.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },{
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 19,
        img: "./images/item-6.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },{
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 9,
        img: "./images/item-7.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },{
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 23,
        img: "./images/item-8.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },{
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 15,
        img: "./images/item-9.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },{
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 20,
        img: "./images/item-10.jpeg",
        desc: 'Eat me I am very delicious, the sweet taste is unforgotten'
    },
    
]

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = deocument.querySelector(".btn-container");

// display all items when pade loads
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

// fungsi untuk menampilkan menu menu itemnya
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return` <article class = "menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class= "price">$${item.price}</h4>
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

    filterBtns.forEach(function (btn) {
        btn,addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

const reviews = [
    {
        id: 1,
        name: "Song Hay",
        job: "Programmer",
        img: "https://id.pinterest.com/pin/112941903149799915/",
        text: "All their food were taste good, I like it",
    },
    {
        id: 2,
        name: "Lunartic",
        job: "Programmer",
        img: "https://id.pinterest.com/pin/3166662228800116/",
        text: "This is the best restaurant I ever come, hope everyone could taste all the food",
    },
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById(".prev-btn");
const nextBtn = document.getElementById(".next-btn");
const randomBtn = document.getElementById(".random-btn");

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

