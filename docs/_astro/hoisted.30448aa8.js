import { a as t } from './hoisted.ca6d60c3.js'
const a = document.querySelectorAll('img')
document.addEventListener('DOMContentLoaded', function () {
	localStorage.getItem('animations') === 'true'
		? t(
				'.effect',
				{ opacity: [0, 1], clipPath: ['circle(0% at 0% 0%)', 'circle(100% at 50% 50%)'] },
				{ duration: 2, easing: 'ease' }
		  )
		: a.forEach((e) => {
				e.classList.remove('opacity-0')
		  })
})
