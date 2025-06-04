
const fadeelements = document.querySelectorAll('.fade')
const slideelements = document.querySelectorAll('.slide-left')
const pelements = document.querySelectorAll('.slide-left-p')
const headereffect = document.querySelectorAll('.slide-in-top-hidden')

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-top-show')
            headerObserver.unobserve(entry.target);
        }
    })
})

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            fadeObserver.unobserve(entry.target);
        }
    })
})

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left');
            slideObserver.unobserve(entry.target);
        }
    });
});

const pObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left-p')
            pObserver.unobserve(entry.target);
        } 
    })
})


fadeelements.forEach((element) => fadeObserver.observe(element))
slideelements.forEach((element) => slideObserver.observe(element))
pelements.forEach((element) => pObserver.observe(element))
headereffect.forEach((element) => headerObserver.observe(element))


