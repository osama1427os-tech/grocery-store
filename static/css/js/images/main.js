document.addEventListener('DOMContentLoaded', () => {
    // جلب السلة الحالية من الذاكرة أو إنشاء سلة فارغة إذا كانت أول مرة
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const buttons = document.querySelectorAll(".add-btn");
    const cartCount = document.getElementById("cartCount");

    // تحديث العداد عند تحميل الصفحة لأول مرة بناءً على المحفوظ
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            // جلب بيانات المنتج من الزر الذي تم الضغط عليه
            const name = button.getAttribute('data-name') || "منتج عام";
            const price = button.getAttribute('data-price') || "0";

            // إضافة المنتج الجديد للسلة
            cart.push({ name: name, price: price });

            // حفظ السلة المحدثة في ذاكرة المتصفح
            localStorage.setItem('cart', JSON.stringify(cart));

            // تحديث رقم العداد على الشاشة
            if (cartCount) {
                cartCount.textContent = cart.length;
            }

            alert(`🛒 تم إضافة (${name}) إلى السلة بنجاح`);
        });
    });
});