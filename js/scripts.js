/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

var options = {
    strings: ["Syarif Romadloni", "UI/UX Design", "Graphics Design", "Web Developer"],
    typeSpeed: 60,        // Kecepatan mengetik (ms)
    backSpeed: 40,        // Kecepatan menghapus (ms)
    backDelay: 2000,      // Waktu jeda sebelum menghapus (ms)
    startDelay: 1000,     // Waktu jeda awal (ms)
    loop: true            // Looping animasi
  };

  var typed = new Typed("#typed-text", options);



 // Tombol Creative
 document.getElementById('creative-btn').addEventListener('click', function () {
    const skillContainer = document.getElementById('custom-skill-container');
    const cvContainer = document.getElementById('formal-cv-container');
    
    // Tampilkan skill, sembunyikan CV formal
    skillContainer.style.display = 'block';
    cvContainer.style.display = 'none';

    // Animasi persentase pada setiap skill bar
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width; // Set width dengan animasi
    });
  });

  // Tombol Formal Format
  document.getElementById('formal-btn').addEventListener('click', function () {
    const skillContainer = document.getElementById('custom-skill-container');
    const cvContainer = document.getElementById('formal-cv-container');
    
    // Tampilkan CV formal, sembunyikan skill
    skillContainer.style.display = 'none';
    cvContainer.style.display = 'block';
  });

