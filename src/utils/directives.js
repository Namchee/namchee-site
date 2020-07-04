export const intersect = (el, binding) => {
  if (window.IntersectionObserver) {
    const { once } = binding.modifiers;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');

          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!once) {
            entry.target.classList.remove('in-view');
          }
        }
      });
    });

    observer.observe(el);
  } else {
    // polyfill
  }
};
