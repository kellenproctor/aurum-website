var navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
    if (navButton.innerHTML == 'X') {
        navButton.innerHTML = '&#9776;'
    }
    else {
        navButton.innerHTML = 'X'
    }

    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);