document.addEventListener('DOMContentLoaded', function () {
    const interestItems = document.querySelectorAll('.interest-item');

    interestItems.forEach(item => {
        const description = item.querySelector('.interest-description');
        item.addEventListener('click', () => {
            description.classList.toggle('show');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
