const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.onclick = () => nav.classList.toggle('show__menu')
  }
}

showMenu('nav-toggle', 'nav-menu')

/* REMOVE MENU ON LINK CLICK  */

const navLink = document.querySelectorAll('.nav__link')
function removeMenu () {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', removeMenu))
/*   */
/*   */
/*   */
/*   */
