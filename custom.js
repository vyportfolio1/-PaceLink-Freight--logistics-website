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

// navigator sticky
document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const nav = document.getElementById('nav');

  // Set initial GSAP properties
  gsap.set(nav, { y: 0 });

  window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
          // Scrolling down, hide the nav
          gsap.to(nav, { y: -130, duration: 0.5, ease: "power2.out" });  // Move up by 100px
      } else {
          // Scrolling up, show the nav
          gsap.to(nav, { y: 0, duration: 0.5, ease: "power2.out" });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
  });
});


window.onload = function () {
  const body = document.querySelector('body');
  const loader = document.querySelector('.loader');
  const nav = document.querySelector('.navigaror');
  const heroText = document.querySelector('.hero-text');
  const heroImages = document.querySelectorAll('.heroimg img');
  const allr = document.querySelector('.allr');
  const track = document.querySelector('.track');
  const trr = document.querySelector('.trr');  
  const positive = document.querySelector('.positive');

  // Remove loading state
  body.classList.remove('loading');
  body.classList.add('loaded');

  const tl = gsap.timeline();

  // Fade out loader and show the content
  tl.to(loader, { opacity: 0, duration: 0.5, onComplete: () => {
      loader.style.display = 'none';  // Hide loader after fade-out
  }})
  
  .fromTo(body, 
      { backgroundColor: '#D9D9D9' }, 
      { backgroundColor: '#FFFFFF', duration: 0.7, ease: 'power2.out' }
  )

  // Show navigation
  .fromTo(nav, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
  )

  // Animate hero text and images
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
};

document.addEventListener('DOMContentLoaded', function() {
    // Show trackerr when track button is clicked
    document.getElementById('trackButton').addEventListener('click', function () {
      const trackerr = document.getElementById('trackerr');
      trackerr.classList.remove('hidden');
      setTimeout(() => {
        trackerr.classList.remove('opacity-0');
        trackerr.classList.add('opacity-100');
      }, 10);
    });

    // Hide trackerr when close button is clicked
    document.getElementById('closeButton').addEventListener('click', function () {
      const trackerr = document.getElementById('trackerr');
      trackerr.classList.add('opacity-0');
      setTimeout(() => {
        trackerr.classList.add('hidden');
      }, 500); // Wait for the animation to finish before hiding it
    });

    // Show popup message when ggtrack button is clicked
    document.getElementById('ggtrack').addEventListener('click', function () {
      alert("Relax, it's coming!");
    });
  });