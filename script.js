// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "آيفون 15 برو",
        brand: "آبل",
        price: "1,200 دولار",
        image: "iphone.webp",
        description: "أحدث إصدار من آبل بمواصفات رائعة وكاميرات متطورة",
        specs: [
            "شاشة Super Retina XDR بحجم 6.1 بوصة",
            "شريحة A17 Pro",
            "نظام كاميرات متطور بثلاث عدسات",
            "مقاوم للماء والغبار IP68",
            "ذاكرة داخلية 256GB",
            "بطارية تدوم ليوم كامل"
        ]
    },
    {
        id: 2,
        name: "سامسونج جالكسي S23",
        brand: "سامسونج",
        price: "1,500 دولار",
        image: "samsung.jpg",
        description: "أقوى هاتف من سامسونج بأداء ممتاز وشاشة رائعة",
        specs: [
            "شاشة Dynamic AMOLED 2X بحجم 6.1 بوصة",
            "معالج Snapdragon 8 Gen 2",
            "نظام كاميرات ثلاثية بدقة 50MP",
            "مقاوم للماء والغبار IP68",
            "ذاكرة داخلية 256GB",
            "بطارية 3900mAh مع شحن سريع"
        ]
    },
    {
        id: 3,
        name: "هواوي ميت 60 برو",
        brand: "هواوي",
        price: "1,000 دولار",
        image: "huawei.webp",
        description: "إبداع من هواوي بتقنيات متطورة وكاميرات استثنائية",
        specs: [
            "شاشة OLED بحجم 6.82 بوصة",
            "معالج Kirin 9000S",
            "نظام كاميرات رباعية بدقة 50MP",
            "مقاوم للماء والغبار IP68",
            "ذاكرة داخلية 512GB",
            "بطارية 5000mAh مع شحن سريع 88W"
        ]
    }
];

// عرض تفاصيل المنتج عند الدخول لصفحة المنتج
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        const product = products.find(p => p.id === productId);
        const productContainer = document.getElementById('product-container');
        
        if (product) {
            productContainer.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="brand">${product.brand}</span>
                    <h2>${product.name}</h2>
                    <div class="price">${product.price}</div>
                    <p class="description">${product.description}</p>
                    
                    <div class="specs">
                        <h3>المواصفات الفنية:</h3>
                        <ul>
                            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <a href="categories.html" class="btn">العودة إلى التصنيفات</a>
                </div>
            `;
        } else {
            productContainer.innerHTML = '<p>المنتج غير موجود</p>';
        }
    }
});

// تغيير لون رابط الصفحة النشطة في شريط التنقل
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});