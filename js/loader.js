document.addEventListener("DOMContentLoaded", async () => {
    const components = {
        loader: "html/loader.html",
        navbar: "html/navbar.html",
        home: "html/home.html",
        about: "html/about.html",
        services: "html/services.html",
        works: "html/works.html",
        team: "html/team.html",
        testimonials: "html/testimonials.html",
        trusted: "html/trusted.html",
        contact: "html/contact.html",
        footer: "html/footer.html"
    };

    for (const [id, file] of Object.entries(components)) {
        const container = document.getElementById(id);

        if (!container) {
            console.warn(`Container #${id} not found`);
            continue;
        }

        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            container.innerHTML = await response.text();

        } catch (error) {
            console.error(`Failed to load ${file}:`, error);
        }
    }

    document.dispatchEvent(new Event("componentsLoaded"));
});