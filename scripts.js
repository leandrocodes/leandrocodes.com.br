// Sticky Navbar
const header = document.querySelector('header')
const menu = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0)
})

menu.onclick = () => {
	navbar.classList.toggle('active')
}
window.onscroll = () => {
	navbar.classList.remove('active')
}

// Dark Mode
const darkmode = document.querySelector('#darkmode')

darkmode.onclick = () => {
	if (darkmode.classList.contains('bx-sun')) {
		darkmode.classList.replace('bx-sun', 'bx-moon')
		document.body.classList.add('active')
	} else {
		darkmode.classList.replace('bx-moon', 'bx-sun')
		document.body.classList.remove('active')
	}
}
