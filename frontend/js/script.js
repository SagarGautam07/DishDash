// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const cartCount = document.querySelector('.cart-count');

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Sample Restaurant Data (Replace with API data in production)
const restaurants = [
    {
        id: 1,
        name: "Burger Palace",
        rating: 4.5,
        cuisine: "American",
        deliveryTime: "25-35",
        image: "assets/images/restaurant1.jpg"
    },
    {
        id: 2,
        name: "Pizza Heaven",
        rating: 4.3,
        cuisine: "Italian",
        deliveryTime: "30-40",
        image: "assets/images/restaurant2.jpg"
    },
    {
        id: 3,
        name: "Sushi Master",
        rating: 4.7,
        cuisine: "Japanese",
        deliveryTime: "20-30",
        image: "assets/images/restaurant3.jpg"
    }
];

// Cart Functions
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(0, newQuantity);
        if (item.quantity === 0) {
            removeFromCart(itemId);
        }
    }
    updateCart();
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart page if it exists
    const cartItemsContainer = document.querySelector('.cart-items');
    if (cartItemsContainer) {
        renderCartItems(cartItemsContainer);
    }
}

function renderCartItems(container) {
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    container.innerHTML = `
        ${cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('')}
        <div class="cart-total">
            <h3>Total: $${total.toFixed(2)}</h3>
            <button class="btn btn-primary" onclick="proceedToCheckout()">Proceed to Checkout</button>
        </div>
    `;
}

// Initialize cart count
updateCart();

// Add fade-in animation to sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Form Validation for Checkout
function validateCheckoutForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    
    if (!name || !address || !phone) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Simulate order placement
    alert('Order placed successfully! Thank you for choosing DishDash.');
    cart = [];
    updateCart();
    window.location.href = 'index.html';
}

// Search and Filter Functionality
function searchRestaurants(query) {
    const searchTerm = query.toLowerCase();
    return restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm)
    );
}

function filterRestaurants(cuisine, rating) {
    return restaurants.filter(restaurant => 
        (!cuisine || restaurant.cuisine === cuisine) &&
        (!rating || restaurant.rating >= parseFloat(rating))
    );
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('restaurants.html')) {
        const restaurantGrid = document.querySelector('.restaurant-grid');
        if (restaurantGrid) {
            renderRestaurants(restaurants, restaurantGrid);
        }
    }
    
    if (currentPage.includes('cart.html')) {
        const cartContainer = document.querySelector('.cart-items');
        if (cartContainer) {
            renderCartItems(cartContainer);
        }
    }
    
    if (currentPage.includes('checkout.html')) {
        const checkoutForm = document.querySelector('.checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', validateCheckoutForm);
        }
    }
}); 