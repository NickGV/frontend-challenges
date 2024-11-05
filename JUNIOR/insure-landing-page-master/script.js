const navBarToggle = document.getElementById('nav-bar-toogle');
const dropdownMenu = document.querySelector('.dropdown-menu');

navBarToggle.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
