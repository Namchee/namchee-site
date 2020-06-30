/* eslint-disable no-invalid-this, prefer-rest-params */

/**
 * Debounce function
 *
 * Courtesy of David Walsh https://davidwalsh.name/javascript-debounce-function
 * @param {Function} func debounce target
 * @param {number} wait Time to wait for next invocation
 * @param {boolean} immediate Indicate whether the function should be fired
 * immediately or not
 * @return {Function} Debounced function
 */
export function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/**
 * Throttle function
 *
 * Courtesy of Niall Campbell https://davidwalsh.name/javascript-debounce-function
 * @param {Function} func throttle target
 * @param {number} wait Time to wait for next event invocation
 * @param {boolean} immediate Indicate whether the function should be fired
 * immediately or not
 * @return {Function} Throttled function
 */
export function throttle(func, wait, immediate) {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      func.apply(context, args);
    }
  };
};
