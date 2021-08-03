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

/* SCROLL ACTIVE SECTIONS ACTIVE LINK  */
const sections = document.querySelectorAll('section[id]')
function scrollActive () {
  const scrollY = window.pageYOffset
  // console.log('OFFSET =>', scrollY)
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* CHANGE BACKGROUND HEADER SIZE ON SCROLL  */
function scrollHeader () {
  const nav = document.getElementById('header')
  if (this.scrollY >= 200) {
    console.log(this.scrollY)
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/* SCROLL TO TOP SHOW  */
function scrollTop () {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 560) scrollTop.classList.add('scroll-top')
  else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)
/*   */

/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
