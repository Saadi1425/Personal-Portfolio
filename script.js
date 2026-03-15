// Navbar toggle for mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () =>{
    navLinks.classList.toggle("active");
}

// Scroll animations for sections
const sections = document.querySelectorAll('.section');
sections[0].classList.add('show'); // first section visible immediately

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Animate skill bars when skills section comes into view
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-level');

const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            skillBars.forEach(bar => {
                bar.style.width = bar.getAttribute('style').match(/width: (\d+)%/)[1] + '%';
            });
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillSection);

const contactForm = document.querySelector('#contact form');
const thankyouMsg = document.querySelector('.thankyou-message');

contactForm.addEventListener('submit', e => {
  // prevent default so Formspree still works
  setTimeout(() => {
    thankyouMsg.style.display = 'block';
    contactForm.reset();
  }, 100);
});