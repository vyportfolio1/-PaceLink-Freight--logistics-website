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

// mobile meniu iteams anim

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

  gsap.set(nav, { y: 0 });

  window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
          gsap.to(nav, { y: -130, duration: 0.5, ease: "power2.out" }); 
      } else {

          gsap.to(nav, { y: 0, duration: 0.5, ease: "power2.out" });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});



// tracker div
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trackButton').addEventListener('click', function () {
      const trackerr = document.getElementById('trackerr');
      trackerr.classList.remove('hidden');
      setTimeout(() => {
        trackerr.classList.remove('opacity-0');
        trackerr.classList.add('opacity-100');
      }, 10);
    });

    document.getElementById('closeButton').addEventListener('click', function () {
      const trackerr = document.getElementById('trackerr');
      trackerr.classList.add('opacity-0');
      setTimeout(() => {
        trackerr.classList.add('hidden');
      }, 500);
    });

    document.getElementById('ggtrack').addEventListener('click', function () {
      alert("Relax, it's coming!");
    });
  });


//   custom animation 
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
  
 
    body.classList.remove('loading');
    body.classList.add('loaded');
  
    const tl = gsap.timeline();
  
  
    tl.to(loader, { opacity: 0, duration: 0.5, onComplete: () => {
        loader.style.display = 'none';   
    }})
    
    .fromTo(body, 
        { backgroundColor: '#D9D9D9' }, 
        { backgroundColor: '#FFFFFF', duration: 0.7, ease: 'power2.out' }
    )
  
 
    .fromTo(nav, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
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
    
      document.getElementById('trackButton').addEventListener('click', function () {
        const trackerr = document.getElementById('trackerr');
        trackerr.classList.remove('hidden');
        setTimeout(() => {
          trackerr.classList.remove('opacity-0');
          trackerr.classList.add('opacity-100');
        }, 10);
      });
  
     
      document.getElementById('closeButton').addEventListener('click', function () {
        const trackerr = document.getElementById('trackerr');
        trackerr.classList.add('opacity-0');
        setTimeout(() => {
          trackerr.classList.add('hidden');
        }, 500);  
      });
  
  
      document.getElementById('ggtrack').addEventListener('click', function () {
        alert("Relax, it's coming!");
      });
    });



    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('DOMContentLoaded', function () {
        gsap.from(".delivery, .namestuff, .phone, .product, .pick, .delivery, .button-del, .image-container img", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".delivery",
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
});

 

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
// Animation for the "About us" section
gsap.from(".sec, .imn img, .del h1, .del p, .buttons", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".sec",
    start: "top 80%",
    toggleActions: "play none none none" // No repetition after animation
  }
})
});


gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', function() {
// Animation for the "Workers" section
gsap.from(".team .worker", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".team",
    start: "top 80%",
    toggleActions: "play none none none" // No repetition after animation
  }
});

// Animation for the heading and paragraph
gsap.from(".team-heading, .team-subheading", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".team-heading",
    start: "top 90%",
    toggleActions: "play none none none"
  }
})
});


gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', function() {
// Animation for the Quote section image and text
gsap.from(".q img", {
  opacity: 0,
  scale: 1.2,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".q",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".q h1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".q",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Animation for "Our Services" text section
gsap.from(".lg\\:w-[512px], .lg\\:w-[419px]", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".lg\\:w-[512px]",
    start: "top 80%",
    toggleActions: "play none none none"
  }
})
});


gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', function() {
// Animation for each service card
gsap.registerPlugin(ScrollTrigger);

// Animation for each service card
gsap.from(".ic", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".allall",
    start: "top 110%",  
    toggleActions: "play none none none"
  }
});

// Animation for the entire services container
gsap.from(".allall", {
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".allall",
    start: "top 110%",  
    toggleActions: "play none none none"
  }
});
});

 
 