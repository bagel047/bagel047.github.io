const observer = new IntersectionObserver((events) => {
    events.forEach((event) => {
        console.log(event);
        if (event.isIntersecting) {
            event.target.classList.add('show');
        } else {
            event.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("scroll", () => {
    let header = document.querySelector('header');

    if (scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})