document.addEventListener("componentsLoaded", () => {

    const dynamicText = document.querySelector(".dynamic-text");

    if (!dynamicText) return;

    const words = [
        "Websites.",
        "Applications.",
        "Experiences.",
        "Digital Products.",
        "What's Next."
    ];

    let index = 0;

    setInterval(() => {

        dynamicText.classList.add("changing");

        setTimeout(() => {

            index++;

            if (index >= words.length) {
                index = 0;
            }

            dynamicText.textContent = words[index];

            dynamicText.classList.remove("changing");

        }, 350);

    }, 2400);

});