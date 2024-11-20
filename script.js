// Search for products by name
function searchProducts() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase().trim();
    const products = document.querySelectorAll('.product');

    let noMatch = true; // Track if no product matches the search query

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
            noMatch = false;
        } else {
            product.style.display = 'none';
        }
    });

    // Show a message if no products match the search query
    const productList = document.getElementById('productList');
    let noResultsMessage = document.getElementById('noResultsMessage');
    if (!noResultsMessage) {
        noResultsMessage = document.createElement('p');
        noResultsMessage.id = 'noResultsMessage';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.color = '#555';
        noResultsMessage.style.fontStyle = 'italic';
        noResultsMessage.textContent = 'No products match your search.';
        productList.appendChild(noResultsMessage);
    }
    noResultsMessage.style.display = noMatch ? 'block' : 'none';
}

// Handle the Buy Now button click
function buyNow(productName) {
    const userConfirmation = confirm(`You have chosen to buy: ${productName}. Proceed to payment?`);
    if (userConfirmation) {
        alert(`Payment integration coming soon for ${productName}!`);
        // Placeholder for payment integration
        // Example: redirect to payment page
        // window.location.href = `/payment?product=${encodeURIComponent(productName)}`;
    } else {
        alert('You canceled the purchase.');
    }
}
