document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const buttons = document.querySelectorAll(".add-btn");
    const cartCount = document.getElementById("cartCount");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            count++;
            if (cartCount) {
                cartCount.textContent = count;
            }
            alert("تم إضافة المنتج إلى السلة بنجاح! 🛒");
        });
    });
});