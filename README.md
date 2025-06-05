# 🍽️ DishDash - Food Delivery Web App

DishDash is a modern, responsive food delivery web application built with vanilla technologies (HTML, CSS, and JavaScript). It provides a seamless experience for users to browse restaurants, order food, and get it delivered to their doorstep.

## 🚀 Features

- **Responsive Design**
  - Mobile-first approach
  - Works seamlessly across all devices
  - Modern and clean user interface

- **Restaurant Browsing**
  - Search functionality
  - Filter by cuisine type and rating
  - Restaurant cards with key information
  - Dynamic loading of restaurant data

- **Shopping Cart**
  - Add/remove items
  - Adjust quantities
  - Persistent cart using localStorage
  - Real-time price updates

- **Checkout Process**
  - User-friendly form
  - Order summary
  - Multiple payment options
  - Delivery instructions

- **User Interface**
  - Smooth animations
  - Interactive elements
  - Loading states
  - Error handling

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Local Storage API

## 📂 Project Structure

```
frontend/
├── index.html          # Home page
├── restaurants.html    # Restaurant listing
├── cart.html          # Shopping cart
├── checkout.html      # Checkout process
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # Main JavaScript file
└── assets/
    └── images/        # Image assets
```

## 🚦 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SagarGautam07/DishDash.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dishdash
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## 💡 Usage

1. **Browse Restaurants**
   - Use the search bar to find specific restaurants
   - Filter by cuisine type or rating
   - Click on a restaurant to view its menu

2. **Order Food**
   - Browse through menu items
   - Add items to cart
   - Adjust quantities as needed

3. **Checkout**
   - Review your cart
   - Fill in delivery details
   - Choose payment method
   - Place order

## 🎨 Customization

### Colors
The app uses CSS variables for easy theming. Main colors can be modified in `style.css`:

```css
:root {
    --primary-color: #FF6B6B;    /* Tomato red */
    --secondary-color: #4ECDC4;  /* Fresh mint */
    --accent-color: #45B7D1;     /* Ocean blue */
    /* ... other colors ... */
}
```

### Adding Restaurants
Add new restaurants by modifying the `restaurants` array in `script.js`:

```javascript
const restaurants = [
    {
        id: 1,
        name: "Restaurant Name",
        rating: 4.5,
        cuisine: "Cuisine Type",
        deliveryTime: "30-40",
        image: "path/to/image.jpg"
    },
    // ... more restaurants
];
```

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The application is fully responsive and tested on:
- iOS Safari
- Android Chrome
- Mobile Firefox

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for sample images

## 📞 Support

For support, email support@dishdash.com or create an issue in the repository. 
