let aboutMeLink = document.querySelectorAll('.about-me__link');
let aboutMeText = document.querySelectorAll('.about-me__text');
let aboutMeYears = document.querySelectorAll('.about-me__years');

let contactsBtn = document.querySelector('.contacts__btn');
let contactsPhone = document.querySelector('.contacts__phone');

for (let i = 0; i < aboutMeLink.length; i++) {
    aboutMeLink[i].addEventListener('click', function(e) {
        e.preventDefault();
        for (let i = 0; i < aboutMeText.length; i++) {
            aboutMeLink[i].classList.remove('about-me__link--active');
            aboutMeText[i].classList.remove('about-me__text--active');
            aboutMeYears[i].classList.remove('about-me__years--active');

        }
        aboutMeLink[i].classList.add('about-me__link--active');
        aboutMeText[i].classList.add('about-me__text--active');
        aboutMeYears[i].classList.add('about-me__years--active');

    })
}

contactsBtn.addEventListener('click', function() {
    contactsPhone.classList.toggle('contacts__phone--active')
    if (contactsPhone.classList.contains('contacts__phone--active')) {
        contactsBtn.textContent = "Скрыть телефон"
    } else {
        contactsBtn.textContent = "Показать телефон"
    }
})