document.addEventListener("DOMContentLoaded", () => {

    //¿ SCROLL SUAVE
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // MENU ACTIVO SEGÚN SECCIÓN

    const sections = document.querySelectorAll("section, footer, div[id]");
    const navLinks = document.querySelectorAll(".nav1 a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("activo");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("activo");
            }
        });
    });

    // MODAL DE IMÁGENES (MASCOTAS)

    const images = document.querySelectorAll(".tarjeta-mascota img");

    if (images.length > 0) {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.9)";
        modal.style.display = "none";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "2000";

        const modalImg = document.createElement("img");
        modalImg.style.maxWidth = "90%";
        modalImg.style.maxHeight = "90%";
        modalImg.style.borderRadius = "10px";

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        images.forEach(img => {
            img.addEventListener("click", () => {
                modalImg.src = img.src;
                modal.style.display = "flex";
            });
        });

        modal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // ANIMACIÓN AL SCROLL
    
    const cards = document.querySelectorAll(
        ".proyecto-indivudual, .tarjeta-mascota"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";
        observer.observe(card);
    });

});
