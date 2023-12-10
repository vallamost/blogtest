import { a as t } from './hoisted.ca6d60c3.js'
import './hoisted.30448aa8.js'
const o = localStorage.getItem('animations') === 'true'
o &&
	t(
		'.title',
		{ y: [80, 0], opacity: [0, 1] },
		{ duration: 2.5, opacity: { duration: 3 }, offset: [0, 0.55, 0.75] }
	)
