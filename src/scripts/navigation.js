window.addEventListener('scroll', function() {
    let nav = document.querySelector(".navigationTop__list");
    
    if (pageYOffset > 200) {
        nav.classList.add("active");

    } else {
        nav.classList.remove("active");
    }
  });