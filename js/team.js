document.addEventListener("componentsLoaded", () => {

    const cards = document.querySelectorAll(".team-card");

    if (!cards.length) return;

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

        observer.observe(card);

    });

});