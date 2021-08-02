const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.onclick = () => nav.classList.toggle('show__menu')
  }
}

showMenu('nav-toggle', 'nav-menu')
