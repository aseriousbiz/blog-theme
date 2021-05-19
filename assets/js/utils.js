var Haack = (function() {
  // NodeList foreach Polyfill
  if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
          thisArg = thisArg || window
          for (var i = 0; i < this.length; i++) {
              callback.call(thisArg, this[i], i, this)
          }
      }
  }

  // Haack namespace object.
  return {
      ready: function(init) {
        if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
      		window.setTimeout(init)
        }
        else {
          var completed = function() {
            document.removeEventListener("DOMContentLoaded", completed)
          	window.removeEventListener("load", completed)
            init()
          }
          document.addEventListener("DOMContentLoaded", completed)
          window.addEventListener("load", completed)
        }
      },
      get: function(elementId) {
        var element = document.getElementById(elementId)
        if (element)
          return element
        var elements = document.getElementsByClassName(elementId)
        if (elements && elements.length > 0)
          return elements[0]
        return null
      }
  };
})()


Haack.ready(function() {
  // This sets the `current-page` css class on the nav link
  // that points to the current page so we can render it differently
  // We do this in JS so that we can cache the header once rather than
  // generate it for every single page.
  // Set current page on navigation
  const path = window.location.pathname;
  const currentPageLink = document.querySelector('a.navbar-item[href="' + path + '"]');
  if (path !== '/' && currentPageLink) {
    currentPageLink.classList.add('is-active');
  }

  // This makes the "navbar-burger" wark
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
})
