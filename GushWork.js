document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Product Data (8 Items Total)
    ========================================= */
    const products = [{
            id: 1,
            title: "Premium Audiophile Headphones",
            price: 299.99,
            desc: "Experience crystal-clear sound with our flagship product. Features active noise cancellation and 40-hour battery life. Hover over the image to see the detailed zoom preview.",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
        },
        {
            id: 2,
            title: "Minimalist Smartwatch",
            price: 199.50,
            desc: "Track your fitness, receive notifications, and look stylish doing it. The clean white aesthetic blends seamlessly with any wardrobe.",
            img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
        },
        {
            id: 3,
            title: "Vintage Polaroid Camera",
            price: 129.00,
            desc: "Capture memories instantly. This restored classic brings analog photography into the modern era with satisfying mechanical clicks and instant prints.",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80"
        },
        {
            id: 4,
            title: "35mm Prime Cinema Lens",
            price: 849.99,
            desc: "Achieve the ultimate shallow depth of field and beautiful bokeh. A must-have for high-end cinematic video production and portrait photography.",
            img: "https://www.newsshooter.com/wp-content/uploads/2020/12/DSC_2549-1-scaled.jpg"
        },
        {
            id: 5,
            title: "Pro Video Editing Console",
            price: 249.99,
            desc: "Speed up your workflow in Premiere Pro. Features tactile dials, customizable buttons, and seamless timeline scrubbing.",
            img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80"
        },
        {
            id: 6,
            title: "Mechanical Keyboard",
            price: 149.00,
            desc: "Tactile, responsive, and beautifully illuminated. Features custom switches designed for both fast typing and intense coding sessions.",
            img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
        },
        {
            id: 7,
            title: "Wireless Gaming Mouse",
            price: 89.99,
            desc: "Zero latency, pinpoint accuracy. Ergonomically designed to fit your hand perfectly for hours of comfortable use.",
            img: "https://static.vecteezy.com/system/resources/thumbnails/048/218/131/small/gaming-mouse-with-colorful-lights-isolated-from-background-free-png.png"
        },
        {
            id: 8,
            title: "Studio Condenser Mic",
            price: 179.99,
            desc: "Broadcast-quality sound for podcasts, streams, and voiceovers. Built-in pop filter and shock mount included.",
            img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
        }
    ];

    let currentProductIndex = 0; // Tracks currently displayed product

    /* =========================================
       2. Initialize Application
    ========================================= */
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const mainImage = document.getElementById('mainImage');
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productDesc = document.getElementById('productDesc');
    const zoomResult = document.getElementById('zoomResult');

    // Generate thumbnails dynamically
    products.forEach((product, index) => {
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.title;
        img.className = index === 0 ? 'thumbnail active' : 'thumbnail';
        img.onclick = () => loadProduct(index);
        thumbnailContainer.appendChild(img);
    });

    // Load initial product
    function loadProduct(index) {
        currentProductIndex = index;
        const product = products[index];

        // Update DOM text and image
        mainImage.src = product.img;
        productTitle.innerText = product.title;
        productPrice.innerText = `$${product.price.toFixed(2)}`;
        productDesc.innerText = product.desc;

        // Update Zoom background
        zoomResult.style.backgroundImage = `url('${product.img}')`;

        // Update active thumbnail styling
        const allThumbnails = document.querySelectorAll('.thumbnail');
        allThumbnails.forEach(thumb => thumb.classList.remove('active'));
        allThumbnails[index].classList.add('active');
    }

    // Call immediately to populate first item
    loadProduct(0);

    /* =========================================
       3. Image Hover Zoom Functionality
    ========================================= */
    zoomResult.style.backgroundSize = '250%';

    mainImage.addEventListener('mousemove', (e) => {
        zoomResult.style.display = 'block';
        const {
            left,
            top,
            width,
            height
        } = mainImage.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;
        zoomResult.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });

    mainImage.addEventListener('mouseleave', () => {
        zoomResult.style.display = 'none';
    });

    /* =========================================
       4. Sticky Header Functionality
    ========================================= */
    const stickyHeader = document.getElementById('stickyHeader');
    const heroSection = document.getElementById('home');

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight) {
            stickyHeader.classList.add('active');
        } else {
            stickyHeader.classList.remove('active');
        }
    });

    /* =========================================
       5. Shopping Cart Logic
    ========================================= */
    let cart = [];
    const addToCartBtn = document.getElementById('addToCartBtn');

    addToCartBtn.addEventListener('click', () => {
        const productToAdd = products[currentProductIndex];
        cart.push(productToAdd);
        updateCartUI();

        // Optional: Open cart automatically when item added
        const sidebar = document.getElementById('cartSidebar');
        if (!sidebar.classList.contains('open')) {
            toggleCart();
        }
    });

    function updateCartUI() {
        // Update badges in both navs
        const badges = document.querySelectorAll('.cart-badge');
        badges.forEach(badge => badge.innerText = cart.length);

        // Render Cart Items
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        cartItemsContainer.innerHTML = ''; // Clear current

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="padding: 20px; color: #64748b;">Your cart is empty.</p>';
        } else {
            let total = 0;
            cart.forEach(item => {
                total += item.price;
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="cart-item-details">
                        <h4>${item.title}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });

            // Update Total
            document.getElementById('cartTotalAmount').innerText = total.toFixed(2);
        }
    }
});

/* Global Toggle Cart Function */
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}