function searchProducts() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const products = document.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}

function buyNow(productName) {
    alert(`You have chosen to buy: ${productName}. Payment integration coming soon!`);
}
