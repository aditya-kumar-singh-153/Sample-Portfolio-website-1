//--------------------- Header toggle------------//

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//---------- Typing Effect------------------------//

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Web Developer!', 'UI Designer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
})

// Active Link State on scroll

let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function(){
    const scrollPos = this.window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});