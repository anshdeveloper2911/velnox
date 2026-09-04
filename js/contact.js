document.addEventListener("componentsLoaded", () => {

    const form = document.querySelector("#velnox-contact-form");
    const status = document.querySelector("#contact-status");
    const button = document.querySelector("#contact-submit");

    if (!form) return;

    form.addEventListener("submit", () => {

        button.disabled = true;

        button.querySelector("span").textContent = "Sending...";

        status.textContent = "";

        setTimeout(() => {

            status.textContent =
                "✓ Thanks! Your enquiry has been submitted.";

            button.disabled = false;

            button.querySelector("span").textContent =
                "Send Enquiry";

            form.reset();

        }, 1500);

    });

});