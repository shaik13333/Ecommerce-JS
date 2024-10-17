
    let productList = document.getElementById('product-list');
    let cartItems = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    let cart = [];

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => { 
            data.map(product => {
                let productCard = document.createElement('div');
                productCard.classList.add('product');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" height="${"170px"}">
                    <h3>${product.title}</h3> 
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                let a = document.getElementsByClassName("product");
                
                productList.appendChild(productCard);
            });
        })

    // Function to add a product to the cart
    window.addToCart = function(productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
         .then(product => {
                cart.push(product);
                updateCart();
            })
            
    }

    // Function to update the cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.map(product => {
            totalPrice += product.price;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <h4>${product.title}</h4>
                <p>$${product.price}</p>
            `;

            cartItems.appendChild(cartItem);
        });

        totalPriceElement.innerText = totalPrice;
        document.getElementById('cart-count').innerText = `(${cart.length})`;
    }








