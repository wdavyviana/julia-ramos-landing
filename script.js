(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    document.querySelectorAll('.scroll-icon, .reveal').forEach(function(el){
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return;
  }

  // small botanical icons next to section titles
  var iconObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        iconObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.scroll-icon').forEach(function(icon){
    iconObserver.observe(icon);
  });

  // content blocks (hero text, about text, service rows, location card, CTA)
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el){
    revealObserver.observe(el);
  });
})();