// Form Validation Logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registrationForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alert("Please fill out the form correctly.");
            } else {
                alert("Registration Successful!");
            }
            form.classList.add("was-validated");
        });
    }

    // Scroll event to reveal content
    const revealElement = document.querySelector(".reveal");
    window.addEventListener("scroll", () => {
        if (revealElement && window.scrollY > 200) {
            revealElement.style.opacity = "1";
        }
    });

    // Hover event for navbar links
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#FFD700";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#FFFFFF";
        });
    });

    // Product object example
    const product = {
        id: 1,
        name: "Premium Nanny Service",
        description: "Our top-tier nanny services provide unmatched care and flexibility.",
        price: "$500/month",
    };

    // Example of using product data in a modal
    const modalBody = document.querySelector(".modal-body");
    if (modalBody) {
        modalBody.textContent = `Name: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}`;
    }
});
