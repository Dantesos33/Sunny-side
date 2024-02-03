
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            entry.target.classList.toggle('show',entry.isIntersecting);
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el1) => observer1.observe(el1));

// Right Elements

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('not-right');
        }
        else{
            entry.target.classList.remove('not-right');
        }
    })
})

const rightElements = document.querySelectorAll('.right');
rightElements.forEach((el2) => observer2.observe(el2));

// Reveal Elements

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('un-reveal');
        }
        else{
            entry.target.classList.remove('un-reveal');
        }
    })
},
{threshold: 0.3})

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el3) => observer3.observe(el3));