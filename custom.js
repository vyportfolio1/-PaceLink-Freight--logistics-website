// faq section

function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-${faqNumber}`);
    const arrow = document.getElementById(`arrow-${faqNumber}`);

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      arrow.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      arrow.classList.remove('rotate-180');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.svg');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.close');
    const menuItems = document.querySelectorAll('.mobile-menu .links a');

    const openMenu = () => {
        const tl = gsap.timeline();

        tl.fromTo(mobileMenu, 
            { x: '-100%', autoAlpha: 0 }, 
            { x: '0%', autoAlpha: 1, duration: 0.7, ease: 'power2.out' } 
        )
        .fromTo(menuItems, 
            { x: -650, opacity: 0 }, 
            { x: 0, opacity: 2, stagger: 9, duration: 2, ease: 'power2.out' } 
        );
    };

    const closeMenu = () => {
        const tl = gsap.timeline();

        tl.to(menuItems, {
            x: -50,
            opacity: 0,
            stagger: -0.2,
            duration: 0.5,
            ease: 'power2.in',
        })
        .to(mobileMenu, {
            x: '-100%',
            autoAlpha: 0,
            duration: 0.7,
            ease: 'power2.in',
        });
    };

    menuButton.addEventListener('click', function () {
        openMenu();
    });

    closeButton.addEventListener('click', closeMenu);

    menuItems.forEach(link => {
        link.addEventListener('click', function (e) {
        });
    });
});


 
document.addEventListener('DOMContentLoaded', function () {
  const heroText = document.querySelector('.hero-text');
  const heroImages = document.querySelectorAll('.heroimg img');
  const body = document.querySelector('body');
  const navigator = document.querySelector('.navigaror');
  const allr = document.querySelector('.allr');
  const track = document.querySelector('.track');
  const trr = document.querySelector('.trr');  
  const positive = document.querySelector('.positive');

  const tl = gsap.timeline();

 
  tl.fromTo(body, 
      { backgroundColor: '#D9D9D9' }, 
      { backgroundColor: '#FFFFFF', duration: 0.9, ease: 'power2.out' }
  )
 
  .fromTo(heroText, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 
      '-=0.8' 
  )

  
  .fromTo(heroImages, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power2.out' }, 
      '-=0.7'  
  )

  
  .fromTo(navigator, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
  )

 
  .fromTo(allr, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 
      '-=0.5'
  )

 
  .fromTo(track, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 
      '-=0.4'
  )
 
  .fromTo(trr, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 
      '-=0.4'
  )

 
  .fromTo(positive, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 
      '-=0.4'
  );
});


// form Animation
 