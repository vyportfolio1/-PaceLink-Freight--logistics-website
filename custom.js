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


document.addEventListener('DOMContentLoaded', function () {
 
  gsap.registerPlugin(ScrollTrigger);

  const qSection = document.querySelector('.q');
  const servSection = document.querySelector('.serv');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: qSection,
      start: "top 80%",  
      toggleActions: "play none none none",  
    }
  });

 
  tl.fromTo(qSection.querySelector('img'), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(qSection.querySelector('h1'), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 
      '-=0.7' 
    );

  
  gsap.fromTo(servSection, 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out', 
      scrollTrigger: {
        trigger: servSection,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    }
  );
});

// services

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const serviceItems = document.querySelectorAll('.allse .ic');

  gsap.fromTo(serviceItems, 
    { opacity: 0, y: 50 }, 
    {
      opacity: 1, 
      y: 0, 
      stagger: 0.2, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.allalls', 
        start: 'top 80%',  
        toggleActions: 'play none none none',  
      }
    }
  );
});

// testemonials

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  
  gsap.fromTo('.test, .trust', 
    { opacity: 0, y: 50 }, 
    {
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.test',  
        start: 'top 90%', 
        toggleActions: 'play none none none',
      }
    }
  );

  
  const testimonialItems = document.querySelectorAll('.g .user');

  gsap.fromTo(testimonialItems, 
    { opacity: 0, y: 50 }, 
    {
      opacity: 1, 
      y: 0, 
      stagger: 0.2, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.g',  
        start: 'top 85%', 
        toggleActions: 'play none none none',
      }
    }
  );
});

// faq

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

 
  const faqAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq",  
      start: "top 80%",  
      toggleActions: "play none none none",  
    }
  });

  faqAnimation
    .from(".faq p", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".faq h1", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(".faq-section", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(".faq-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");
});

// footer

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const allfAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".allf",  
      start: "top 70%",  
      toggleActions: "play none none none",  
    }
  });

  allfAnimation
    .from(".h svg", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".h p", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(".inf", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(".f", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");
});

// about page

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const aboutTextAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-text",  
      start: "top 80%",  
      toggleActions: "play none none none",  
    }
  });

  aboutTextAnimation
    .from(".h1 h1", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".h1 .color-red", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)"  
    }, "-=0.5")
    .from(".about-text p", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .from(".about-picture img", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
});


// services page

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const servicesTextAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-text",  
      start: "top 80%",  
      toggleActions: "play none none none",  
    }
  });

  servicesTextAnimation
    .from(".h2 h1", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".h2 .color-red", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)"  
    }, "-=0.5")
    .from(".services-text p", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .from(".services-picture img", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
});
