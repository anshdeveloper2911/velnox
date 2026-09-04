document.addEventListener("componentsLoaded", () => {

    const elements = document.querySelectorAll(
        "#services .reveal"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");

                observerInstance.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -70px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

});