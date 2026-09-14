if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var icons = document.querySelectorAll('.scroll-icon');
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    icons.forEach(function(icon){ observer.observe(icon); });
  } else {
    document.querySelectorAll('.scroll-icon').forEach(function(icon){
      icon.style.opacity = 1;
      icon.style.transform = 'none';
    });
  }
