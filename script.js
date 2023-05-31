function handleScroll() {
      const slideInElements = document.querySelectorAll('.slide-in');
    
      slideInElements.forEach(element => {
        // Calculate the position to trigger the slide-in effect
        const slideInAt = (window.scrollY + window.innerHeight) - (element.offsetHeight / 2);
        const imageBottom = element.offsetTop + element.offsetHeight;
        const isHalfShown = slideInAt > element.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
    
        // Add or remove the 'active' class based on scroll position
        if (isHalfShown && isNotScrolledPast) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    }

window.addEventListener('scroll', debounce(handleScroll));




