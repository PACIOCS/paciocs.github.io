// Funzione per aggiungere i prodotti
const addProductForm = document.getElementById('add-product-form');
const productList = document.getElementById('product-list');

addProductForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productItem.innerHTML = `<p>${productName}: €${productPrice}</p>`;

    productList.appendChild(productItem);
    
    // Reset form
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
});
