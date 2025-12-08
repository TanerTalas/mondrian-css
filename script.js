document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".art-showcase-item");
    let index = 0;

    function cycle() {
        items.forEach(el => el.classList.remove("active"));
        items[index].classList.add("active");

        index = (index + 1) % items.length;
    }

    cycle();
    setInterval(cycle, 4000);
});
