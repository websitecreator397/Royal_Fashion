const products = [
    {
        id: 1,
        title: "Premium Cotton T-Shirt",
        category: "men",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1749711258545-2bd4e5a2622f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Elegant Silk Dress",
        category: "women",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Leather Crossbody Bag",
        category: "accessories",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Classic Denim Jacket",
        category: "men",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1634504929813-84e2afe5b2d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        title: "Floral Summer Blouse",
        category: "women",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1765365353704-ed0b6e1b11c2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        title: "Minimalist Watch",
        category: "accessories",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Jeans",
        category: "men",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "High-Waist Trousers",
        category: "women",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        title: "Vintage Sunglasses",
        category: "accessories",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Casual Polo Shirt",
        category: "men",
        price: 69.99,
        image: "https://m.media-amazon.com/images/I/61EmEP2muBL._AC_UL320_.jpg" 
    },
    {
        id: 11,
        title: "Designer Blazer",
        category: "women",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1678647971917-743ecbaa6da8?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "Premium Backpack",
        category: "accessories",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        title: "Cotton Formal Shirt",
        category: "men",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1627976238251-a0191b91145b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvcm1hbCUyMGNvdHRvbiUyMHNoaXJ0JTIwbWVufGVufDB8fDB8fHww" 
    },
    {
        id: 14,
        title: "Kurta Set with Dupatta",
        category: "women",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/51eAtQZeCxL._SX425_.jpg" 
    },
    {
        id: 15,
        title: "Leather Belt",
        category: "accessories",
        price: 159.99,
        image: "https://m.media-amazon.com/images/I/71+aebqY0DL._SX679_.jpg" 
    }
];

// Cart functionality
let cart = [];
let currentPaymentMethod = 'credit';

function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;

        // Attach event listener safely
        card.querySelector('.add-to-cart')
            .addEventListener('click', (e) => addToCart(product.id, e));

        grid.appendChild(card);
    });
}

function filterProducts(category, event) {
    // 1. Safety check to ensure event exists
    if (!event) return;

    // 2. Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. FIX: Use currentTarget to ensure the button gets the class, 
    // even if the user clicks an icon inside the button.
    event.currentTarget.classList.add('active');

    // Logic to filter your products (example)
    console.log("Filtering products by:", category);
    renderProducts(category); 

  // ...rest of filtering logic...
    // Filter products
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filteredProducts);
}

function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    renderCart();

    // Show success feedback on the clicked button
    if (event && event.target) {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✓ Added!';
        button.style.background = '#34C759';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#000';
        }, 1000);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCart();
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <p>Your cart is empty</p>
                    </div>
                `;
        cartTotal.style.display = 'none';
        return;
    }

cartItems.innerHTML = '';
cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
        <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
            <div class="quantity-controls">
                <button class="quantity-btn minus">−</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus">+</button>
            </div>
        </div>
    `;
    cartItem.querySelector('.minus')
        .addEventListener('click', () => updateQuantity(item.id, -1));
    cartItem.querySelector('.plus')
        .addEventListener('click', () => updateQuantity(item.id, 1));
    cartItems.appendChild(cartItem);
});
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'block') {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400);
    } else {
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('active'), 10);
    }

    // Hide checkout form when opening cart
    hideCheckout();
}

function showCheckout() {
    if (cart.length === 0) return;

    document.getElementById('cartItems').style.display = 'none';
    document.getElementById('cartTotal').style.display = 'none';
    document.getElementById('checkoutForm').classList.add('active');
}

function hideCheckout() {
    document.getElementById('cartItems').style.display = 'block';
    document.getElementById('cartTotal').style.display = 'block';
    document.getElementById('checkoutForm').classList.remove('active');
}

function selectPayment(method, event) {
    currentPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const creditCardForm = document.getElementById('creditCardForm');
    if (method === 'credit') {
        creditCardForm.style.display = 'block';
    } else {
        creditCardForm.style.display = 'none';
    }
}

function processOrder(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    // Get form data
    const formData = new FormData(event.target);
    const orderData = {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        customer: {
            name: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone')
        },
        shipping: {
            address: formData.get('address'),
            city: formData.get('city'),
            zipCode: formData.get('zipCode'),
            country: formData.get('country')
        },
        payment: {
            method: currentPaymentMethod
        }
    };

    // Simulate order processing
    const placeOrderBtn = document.querySelector('.place-order-btn');
    placeOrderBtn.textContent = '🔄 Processing...';
    placeOrderBtn.disabled = true;

    setTimeout(() => {
        alert(`🎉 Order placed successfully!\n\nOrder Details:\n- Items: ${cart.length}\n- Total: ${orderData.total.toFixed(2)}\n- Delivery to: ${orderData.customer.name}\n\nThank you for shopping with LUXE!`);

        // Reset everything
        cart = [];
        updateCartCount();
        renderCart();
        toggleCart();
        event.target.reset();

        placeOrderBtn.textContent = '🚀 Place Order';
        placeOrderBtn.disabled = false;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize products and cart
    renderProducts();
    updateCartCount();

    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    if (expiryInput) {
        expiryInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close cart when clicking outside
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function (e) {
            if (e.target === this) {
                toggleCart();
            }
        });
    }
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Error: Ensure 'active' class exists in CSS
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
