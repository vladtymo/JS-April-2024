const api = "https://dummyjson.com/products";

const list = document.querySelector('#product-list');
const loadMoreBtn = document.querySelector("#loadMore");

const pagination = {
    total: null,
    skip: 0,
    limit: 5,

    next() {
        this.skip += this.limit;
    }
}

async function loadProducts() {
    const data = await (await fetch(api + `?skip=${pagination.skip}&limit=${pagination.limit}`)).json();

    pagination.next();
    console.log(data);

    for (const i of data.products) {
        var product = {
            ...i,
            image: i.images[0]
        };

        // Використання шаблону та додавання на сторінку
        var source = document.getElementById('product-card-template').innerHTML;
        var template = Handlebars.compile(source);
        var html = template(product);

        list.innerHTML += html;
    }
}

loadProducts();

loadMoreBtn.onclick = () => {
    loadProducts();
}