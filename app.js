
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            entry.target.classList.toggle('show',entry.isIntersecting);
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer1.observe(el));

// Right Elements

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            entry.target.classList.toggle('not-right',entry.isIntersecting);
    })
})

const rightElements = document.querySelectorAll('.right');
rightElements.forEach((el) => observer2.observe(el));

// Reveal Elements

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            entry.target.classList.toggle('un-reveal',entry.isIntersecting);
    })
})

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer3.observe(el));