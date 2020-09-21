import Vue from 'vue';

const intersect = (el, binding) => {
  if (process.client) {
    const { once } = binding.modifiers;
    const threshold = Number(binding.expression) || .75;

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
    }, {
      threshold,
    });

    observer.observe(el);
  }
};

Vue.directive('intersect', intersect);
