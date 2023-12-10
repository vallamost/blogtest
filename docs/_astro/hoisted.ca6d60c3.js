function Ct(t, e) {
	t.indexOf(e) === -1 && t.push(e)
}
const pt = (t, e, n) => Math.min(Math.max(n, t), e),
	v = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease' },
	U = (t) => typeof t == 'number',
	x = (t) => Array.isArray(t) && !U(t[0]),
	_t = (t, e, n) => {
		const r = e - t
		return ((((n - t) % r) + r) % r) + t
	}
function Ut(t, e) {
	return x(t) ? t[_t(0, t.length, e)] : t
}
const yt = (t, e, n) => -n * t + n * e + t,
	gt = () => {},
	S = (t) => t,
	Z = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t))
function vt(t, e) {
	const n = t[t.length - 1]
	for (let r = 1; r <= e; r++) {
		const s = Z(0, e, r)
		t.push(yt(n, 1, s))
	}
}
function Vt(t) {
	const e = [0]
	return vt(e, t - 1), e
}
function Ht(t, e = Vt(t.length), n = S) {
	const r = t.length,
		s = r - e.length
	return (
		s > 0 && vt(e, s),
		(i) => {
			let o = 0
			for (; o < r - 2 && !(i < e[o + 1]); o++);
			let a = pt(0, 1, Z(e[o], e[o + 1], i))
			return (a = Ut(n, o)(a)), yt(t[o], t[o + 1], a)
		}
	)
}
const wt = (t) => Array.isArray(t) && U(t[0]),
	K = (t) => typeof t == 'object' && !!t.createAnimation,
	k = (t) => typeof t == 'function',
	Bt = (t) => typeof t == 'string',
	I = { ms: (t) => t * 1e3, s: (t) => t / 1e3 },
	Et = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
	Nt = 1e-7,
	Wt = 12
function jt(t, e, n, r, s) {
	let i,
		o,
		a = 0
	do (o = e + (n - e) / 2), (i = Et(o, r, s) - t), i > 0 ? (n = o) : (e = o)
	while (Math.abs(i) > Nt && ++a < Wt)
	return o
}
function O(t, e, n, r) {
	if (t === e && n === r) return S
	const s = (i) => jt(i, 0, 1, t, n)
	return (i) => (i === 0 || i === 1 ? i : Et(s(i), e, r))
}
const zt =
		(t, e = 'end') =>
		(n) => {
			n = e === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001)
			const r = n * t,
				s = e === 'end' ? Math.floor(r) : Math.ceil(r)
			return pt(0, 1, s / t)
		},
	nt = {
		ease: O(0.25, 0.1, 0.25, 1),
		'ease-in': O(0.42, 0, 1, 1),
		'ease-in-out': O(0.42, 0, 0.58, 1),
		'ease-out': O(0, 0, 0.58, 1)
	},
	Kt = /\((.*?)\)/
function rt(t) {
	if (k(t)) return t
	if (wt(t)) return O(...t)
	if (nt[t]) return nt[t]
	if (t.startsWith('steps')) {
		const e = Kt.exec(t)
		if (e) {
			const n = e[1].split(',')
			return zt(parseFloat(n[0]), n[1].trim())
		}
	}
	return S
}
class bt {
	constructor(
		e,
		n = [0, 1],
		{
			easing: r,
			duration: s = v.duration,
			delay: i = v.delay,
			endDelay: o = v.endDelay,
			repeat: a = v.repeat,
			offset: l,
			direction: d = 'normal'
		} = {}
	) {
		if (
			((this.startTime = null),
			(this.rate = 1),
			(this.t = 0),
			(this.cancelTimestamp = null),
			(this.easing = S),
			(this.duration = 0),
			(this.totalDuration = 0),
			(this.repeat = 0),
			(this.playState = 'idle'),
			(this.finished = new Promise((f, u) => {
				;(this.resolve = f), (this.reject = u)
			})),
			(r = r || v.easing),
			K(r))
		) {
			const f = r.createAnimation(n)
			;(r = f.easing), (n = f.keyframes || n), (s = f.duration || s)
		}
		;(this.repeat = a), (this.easing = x(r) ? S : rt(r)), this.updateDuration(s)
		const c = Ht(n, l, x(r) ? r.map(rt) : S)
		;(this.tick = (f) => {
			var u
			i = i
			let m = 0
			this.pauseTime !== void 0 ? (m = this.pauseTime) : (m = (f - this.startTime) * this.rate),
				(this.t = m),
				(m /= 1e3),
				(m = Math.max(m - i, 0)),
				this.playState === 'finished' && this.pauseTime === void 0 && (m = this.totalDuration)
			const h = m / this.duration
			let g = Math.floor(h),
				w = h % 1
			!w && h >= 1 && (w = 1), w === 1 && g--
			const $ = g % 2
			;(d === 'reverse' || (d === 'alternate' && $) || (d === 'alternate-reverse' && !$)) &&
				(w = 1 - w)
			const R = m >= this.totalDuration ? 1 : Math.min(w, 1),
				L = c(this.easing(R))
			e(L),
				this.pauseTime === void 0 && (this.playState === 'finished' || m >= this.totalDuration + o)
					? ((this.playState = 'finished'),
					  (u = this.resolve) === null || u === void 0 || u.call(this, L))
					: this.playState !== 'idle' && (this.frameRequestId = requestAnimationFrame(this.tick))
		}),
			this.play()
	}
	play() {
		const e = performance.now()
		;(this.playState = 'running'),
			this.pauseTime !== void 0
				? (this.startTime = e - this.pauseTime)
				: this.startTime || (this.startTime = e),
			(this.cancelTimestamp = this.startTime),
			(this.pauseTime = void 0),
			(this.frameRequestId = requestAnimationFrame(this.tick))
	}
	pause() {
		;(this.playState = 'paused'), (this.pauseTime = this.t)
	}
	finish() {
		;(this.playState = 'finished'), this.tick(0)
	}
	stop() {
		var e
		;(this.playState = 'idle'),
			this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId),
			(e = this.reject) === null || e === void 0 || e.call(this, !1)
	}
	cancel() {
		this.stop(), this.tick(this.cancelTimestamp)
	}
	reverse() {
		this.rate *= -1
	}
	commitStyles() {}
	updateDuration(e) {
		;(this.duration = e), (this.totalDuration = e * (this.repeat + 1))
	}
	get currentTime() {
		return this.t
	}
	set currentTime(e) {
		this.pauseTime !== void 0 || this.rate === 0
			? (this.pauseTime = e)
			: (this.startTime = performance.now() - e / this.rate)
	}
	get playbackRate() {
		return this.rate
	}
	set playbackRate(e) {
		this.rate = e
	}
}
class Xt {
	setAnimation(e) {
		;(this.animation = e), e?.finished.then(() => this.clearAnimation()).catch(() => {})
	}
	clearAnimation() {
		this.animation = this.generator = void 0
	}
}
const W = new WeakMap()
function Tt(t) {
	return W.has(t) || W.set(t, { transforms: [], values: new Map() }), W.get(t)
}
function Yt(t, e) {
	return t.has(e) || t.set(e, new Xt()), t.get(e)
}
const Zt = ['', 'X', 'Y', 'Z'],
	Gt = ['translate', 'scale', 'rotate', 'skew'],
	V = { x: 'translateX', y: 'translateY', z: 'translateZ' },
	st = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t) => t + 'deg' },
	Jt = {
		translate: {
			syntax: '<length-percentage>',
			initialValue: '0px',
			toDefaultUnit: (t) => t + 'px'
		},
		rotate: st,
		scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: S },
		skew: st
	},
	D = new Map(),
	G = (t) => `--motion-${t}`,
	H = ['x', 'y', 'z']
Gt.forEach((t) => {
	Zt.forEach((e) => {
		H.push(t + e), D.set(G(t + e), Jt[t])
	})
})
const Qt = (t, e) => H.indexOf(t) - H.indexOf(e),
	te = new Set(H),
	St = (t) => te.has(t),
	ee = (t, e) => {
		V[e] && (e = V[e])
		const { transforms: n } = Tt(t)
		Ct(n, e), (t.style.transform = ne(n))
	},
	ne = (t) => t.sort(Qt).reduce(re, '').trim(),
	re = (t, e) => `${t} ${e}(var(${G(e)}))`,
	X = (t) => t.startsWith('--'),
	it = new Set()
function se(t) {
	if (!it.has(t)) {
		it.add(t)
		try {
			const { syntax: e, initialValue: n } = D.has(t) ? D.get(t) : {}
			CSS.registerProperty({ name: t, inherits: !1, syntax: e, initialValue: n })
		} catch {}
	}
}
const j = (t, e) => document.createElement('div').animate(t, e),
	ot = {
		cssRegisterProperty: () =>
			typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
		waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
		partialKeyframes: () => {
			try {
				j({ opacity: [1] })
			} catch {
				return !1
			}
			return !0
		},
		finished: () => !!j({ opacity: [0, 1] }, { duration: 0.001 }).finished,
		linearEasing: () => {
			try {
				j({ opacity: 0 }, { easing: 'linear(0, 1)' })
			} catch {
				return !1
			}
			return !0
		}
	},
	z = {},
	P = {}
for (const t in ot) P[t] = () => (z[t] === void 0 && (z[t] = ot[t]()), z[t])
const ie = 0.015,
	oe = (t, e) => {
		let n = ''
		const r = Math.round(e / ie)
		for (let s = 0; s < r; s++) n += t(Z(0, r - 1, s)) + ', '
		return n.substring(0, n.length - 2)
	},
	at = (t, e) => (k(t) ? (P.linearEasing() ? `linear(${oe(t, e)})` : v.easing) : wt(t) ? ae(t) : t),
	ae = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
function ce(t, e) {
	for (let n = 0; n < t.length; n++) t[n] === null && (t[n] = n ? t[n - 1] : e())
	return t
}
const le = (t) => (Array.isArray(t) ? t : [t])
function Y(t) {
	return V[t] && (t = V[t]), St(t) ? G(t) : t
}
const _ = {
	get: (t, e) => {
		e = Y(e)
		let n = X(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e]
		if (!n && n !== 0) {
			const r = D.get(e)
			r && (n = r.initialValue)
		}
		return n
	},
	set: (t, e, n) => {
		;(e = Y(e)), X(e) ? t.style.setProperty(e, n) : (t.style[e] = n)
	}
}
function At(t, e = !0) {
	if (!(!t || t.playState === 'finished'))
		try {
			t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
		} catch {}
}
function ue(t, e) {
	var n
	let r = e?.toDefaultUnit || S
	const s = t[t.length - 1]
	if (Bt(s)) {
		const i = ((n = s.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || ''
		i && (r = (o) => o + i)
	}
	return r
}
function fe() {
	return window.__MOTION_DEV_TOOLS_RECORD
}
function de(t, e, n, r = {}, s) {
	const i = fe(),
		o = r.record !== !1 && i
	let a,
		{
			duration: l = v.duration,
			delay: d = v.delay,
			endDelay: c = v.endDelay,
			repeat: f = v.repeat,
			easing: u = v.easing,
			persist: m = !1,
			direction: h,
			offset: g,
			allowWebkitAcceleration: w = !1
		} = r
	const $ = Tt(t),
		R = St(e)
	let L = P.waapi()
	R && ee(t, e)
	const E = Y(e),
		F = Yt($.values, E),
		b = D.get(E)
	return (
		At(F.animation, !(K(u) && F.generator) && r.record !== !1),
		() => {
			const C = () => {
				var p, M
				return (M = (p = _.get(t, E)) !== null && p !== void 0 ? p : b?.initialValue) !== null &&
					M !== void 0
					? M
					: 0
			}
			let y = ce(le(n), C)
			const et = ue(y, b)
			if (K(u)) {
				const p = u.createAnimation(y, e !== 'opacity', C, E, F)
				;(u = p.easing), (y = p.keyframes || y), (l = p.duration || l)
			}
			if (
				(X(E) && (P.cssRegisterProperty() ? se(E) : (L = !1)),
				R && !P.linearEasing() && (k(u) || (x(u) && u.some(k))) && (L = !1),
				L)
			) {
				b && (y = y.map((A) => (U(A) ? b.toDefaultUnit(A) : A))),
					y.length === 1 && (!P.partialKeyframes() || o) && y.unshift(C())
				const p = {
					delay: I.ms(d),
					duration: I.ms(l),
					endDelay: I.ms(c),
					easing: x(u) ? void 0 : at(u, l),
					direction: h,
					iterations: f + 1,
					fill: 'both'
				}
				;(a = t.animate({ [E]: y, offset: g, easing: x(u) ? u.map((A) => at(A, l)) : void 0 }, p)),
					a.finished ||
						(a.finished = new Promise((A, Ft) => {
							;(a.onfinish = A), (a.oncancel = Ft)
						}))
				const M = y[y.length - 1]
				a.finished
					.then(() => {
						m || (_.set(t, E, M), a.cancel())
					})
					.catch(gt),
					w || (a.playbackRate = 1.000001)
			} else if (s && R)
				(y = y.map((p) => (typeof p == 'string' ? parseFloat(p) : p))),
					y.length === 1 && y.unshift(parseFloat(C())),
					(a = new s(
						(p) => {
							_.set(t, E, et ? et(p) : p)
						},
						y,
						Object.assign(Object.assign({}, r), { duration: l, easing: u })
					))
			else {
				const p = y[y.length - 1]
				_.set(t, E, b && U(p) ? b.toDefaultUnit(p) : p)
			}
			return (
				o && i(t, e, y, { duration: l, delay: d, easing: u, repeat: f, offset: g }, 'motion-one'),
				F.setAnimation(a),
				a
			)
		}
	)
}
const he = (t, e) => (t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t))
function me(t, e) {
	var n
	return (
		typeof t == 'string'
			? e
				? (((n = e[t]) !== null && n !== void 0) || (e[t] = document.querySelectorAll(t)),
				  (t = e[t]))
				: (t = document.querySelectorAll(t))
			: t instanceof Element && (t = [t]),
		Array.from(t || [])
	)
}
const pe = (t) => t(),
	Lt = (t, e, n = v.duration) =>
		new Proxy({ animations: t.map(pe).filter(Boolean), duration: n, options: e }, ge),
	ye = (t) => t.animations[0],
	ge = {
		get: (t, e) => {
			const n = ye(t)
			switch (e) {
				case 'duration':
					return t.duration
				case 'currentTime':
					return I.s(n?.[e] || 0)
				case 'playbackRate':
				case 'playState':
					return n?.[e]
				case 'finished':
					return (
						t.finished || (t.finished = Promise.all(t.animations.map(ve)).catch(gt)), t.finished
					)
				case 'stop':
					return () => {
						t.animations.forEach((r) => At(r))
					}
				case 'forEachNative':
					return (r) => {
						t.animations.forEach((s) => r(s, t))
					}
				default:
					return typeof n?.[e] > 'u' ? void 0 : () => t.animations.forEach((r) => r[e]())
			}
		},
		set: (t, e, n) => {
			switch (e) {
				case 'currentTime':
					n = I.ms(n)
				case 'playbackRate':
					for (let r = 0; r < t.animations.length; r++) t.animations[r][e] = n
					return !0
			}
			return !1
		}
	},
	ve = (t) => t.finished
function we(t, e, n) {
	return k(t) ? t(e, n) : t
}
function Ee(t) {
	return function (n, r, s = {}) {
		n = me(n)
		const i = n.length,
			o = []
		for (let a = 0; a < i; a++) {
			const l = n[a]
			for (const d in r) {
				const c = he(s, d)
				c.delay = we(c.delay, a, i)
				const f = de(l, d, r[d], c, t)
				o.push(f)
			}
		}
		return Lt(o, s, s.duration)
	}
}
const be = Ee(bt)
function Te(t, e = {}) {
	return Lt(
		[
			() => {
				const n = new bt(t, [0, 1], e)
				return n.finished.catch(() => {}), n
			}
		],
		e,
		e.duration
	)
}
function Se(t, e, n) {
	return (k(t) ? Te : be)(t, e, n)
}
document.addEventListener('click', (t) => {
	const e = document.getElementById('astro-header-drawer'),
		n = document.getElementById('astro-header-drawer-button')
	e?.contains(t.target) || n?.contains(t.target)
		? e?.classList.toggle('translate-x-96')
		: e?.classList.add('translate-x-96')
})
class Ae extends HTMLElement {
	constructor() {
		super()
		const e = this.querySelector('button')
		e &&
			e.addEventListener('click', (n) => {
				if (n.currentTarget instanceof HTMLButtonElement) {
					let r = n.currentTarget.getAttribute('aria-pressed') === 'true',
						s = new CustomEvent('theme-change', { detail: { theme: r ? 'light' : 'dark' } })
					document.dispatchEvent(s), e.setAttribute('aria-pressed', String(!r))
				}
			})
	}
}
'customElements' in window && customElements.define('theme-toggle', Ae)
const Le = 'modulepreload',
	Pe = function (t) {
		return '/docs/' + t
	},
	ct = {},
	xe = function (e, n, r) {
		if (!n || n.length === 0) return e()
		const s = document.getElementsByTagName('link')
		return Promise.all(
			n.map((i) => {
				if (((i = Pe(i)), i in ct)) return
				ct[i] = !0
				const o = i.endsWith('.css'),
					a = o ? '[rel="stylesheet"]' : ''
				if (!!r)
					for (let c = s.length - 1; c >= 0; c--) {
						const f = s[c]
						if (f.href === i && (!o || f.rel === 'stylesheet')) return
					}
				else if (document.querySelector(`link[href="${i}"]${a}`)) return
				const d = document.createElement('link')
				if (
					((d.rel = o ? 'stylesheet' : Le),
					o || ((d.as = 'script'), (d.crossOrigin = '')),
					(d.href = i),
					document.head.appendChild(d),
					o)
				)
					return new Promise((c, f) => {
						d.addEventListener('load', c),
							d.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${i}`)))
					})
			})
		)
			.then(() => e())
			.catch((i) => {
				const o = new Event('vite:preloadError', { cancelable: !0 })
				if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i
			})
	}
class ke extends HTMLElement {
	constructor() {
		super()
		const e = this.querySelector('button[data-open-modal]'),
			n = this.querySelector('button[data-close-modal]'),
			r = this.querySelector('dialog'),
			s = this.querySelector('.dialog-frame'),
			i = (l) => {
				document.body.contains(l.target) && !s.contains(l.target) && a()
			},
			o = (l) => {
				r.showModal(),
					Se(
						'dialog',
						{
							clipPath: [
								'polygon(0 0, 100% 0, 100% -200%, -200% -200%)',
								'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
							],
							opacity: [0, 1]
						},
						{ duration: 0.2 }
					),
					document.body.classList.add('overflow-hidden'),
					this.querySelector('input')?.focus(),
					l?.stopPropagation(),
					window.addEventListener('click', i)
			},
			a = () => {
				r.close(),
					document.body.classList.remove('overflow-hidden'),
					window.removeEventListener('click', i)
			}
		e.addEventListener('click', o),
			(e.disabled = !1),
			n.addEventListener('click', a),
			document.addEventListener('astro:after-swap', a),
			window.addEventListener('keydown', (l) => {
				l.key === '/' && !r.open && (o(), l.preventDefault())
			}),
			window.addEventListener('DOMContentLoaded', () => {
				;(window.requestIdleCallback || ((d) => setTimeout(d, 1)))(async () => {
					const { PagefindUI: d } = await xe(() => import('./ui-core.b919aa2f.js'), [])
					new d({
						element: '#pagefind__search',
						baseUrl: '/docs',
						bundlePath: '/docs'.replace(/\/$/, '') + '/pagefind/',
						showImages: !1
					})
				})
			})
	}
}
customElements.define('site-search', ke)
const Re = (t) => history.state && history.replaceState({ ...history.state, ...t }, ''),
	J = !!document.startViewTransition,
	Q = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
	Pt = (t) => location.pathname === t.pathname && location.search === t.search,
	xt = (t) => document.dispatchEvent(new Event(t)),
	kt = () => xt('astro:page-load'),
	Me = () => {
		let t = document.createElement('div')
		t.setAttribute('aria-live', 'assertive'),
			t.setAttribute('aria-atomic', 'true'),
			(t.className = 'astro-route-announcer'),
			document.body.append(t),
			setTimeout(() => {
				let e = document.title || document.querySelector('h1')?.textContent || location.pathname
				t.textContent = e
			}, 60)
	},
	T = 'data-astro-transition-persist'
let lt,
	q = 0
history.state
	? ((q = history.state.index),
	  scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
	: Q() && history.replaceState({ index: q, scrollX, scrollY, intraPage: !1 }, '')
const Oe = (t, e) => {
	let n = !1,
		r = !1
	return (...s) => {
		if (n) {
			r = !0
			return
		}
		t(...s),
			(n = !0),
			setTimeout(() => {
				r && ((r = !1), t(...s)), (n = !1)
			}, e)
	}
}
async function Ie(t, e) {
	try {
		const n = await fetch(t, e),
			r = n.headers.get('content-type')?.replace(/;.*$/, '')
		return r !== 'text/html' && r !== 'application/xhtml+xml'
			? null
			: { html: await n.text(), redirected: n.redirected ? n.url : void 0, mediaType: r }
	} catch {
		return null
	}
}
function Rt() {
	const t = document.querySelector('[name="astro-view-transitions-fallback"]')
	return t ? t.getAttribute('content') : 'animate'
}
function De() {
	let t = Promise.resolve()
	for (const e of Array.from(document.scripts)) {
		if (e.dataset.astroExec === '') continue
		const n = document.createElement('script')
		n.innerHTML = e.innerHTML
		for (const r of e.attributes) {
			if (r.name === 'src') {
				const s = new Promise((i) => {
					n.onload = i
				})
				t = t.then(() => s)
			}
			n.setAttribute(r.name, r.value)
		}
		;(n.dataset.astroExec = ''), e.replaceWith(n)
	}
	return t
}
function qe(t) {
	const e = t.effect
	return !e || !(e instanceof KeyframeEffect) || !e.target
		? !1
		: window.getComputedStyle(e.target, e.pseudoElement).animationIterationCount === 'infinite'
}
const Mt = (t, e, n) => {
	const r = !Pt(t)
	let s = !1
	t.href !== location.href &&
		(e
			? history.replaceState({ ...history.state }, '', t.href)
			: (history.replaceState({ ...history.state, intraPage: n }, ''),
			  history.pushState({ index: ++q, scrollX: 0, scrollY: 0 }, '', t.href)),
		r && (scrollTo({ left: 0, top: 0, behavior: 'instant' }), (s = !0))),
		t.hash ? (location.href = t.href) : s || scrollTo({ left: 0, top: 0, behavior: 'instant' })
}
function $e(t) {
	const e = []
	for (const n of t.querySelectorAll('head link[rel=stylesheet]'))
		if (
			!document.querySelector(
				`[${T}="${n.getAttribute(T)}"], link[rel=stylesheet][href="${n.getAttribute('href')}"]`
			)
		) {
			const r = document.createElement('link')
			r.setAttribute('rel', 'preload'),
				r.setAttribute('as', 'style'),
				r.setAttribute('href', n.getAttribute('href')),
				e.push(
					new Promise((s) => {
						;['load', 'error'].forEach((i) => r.addEventListener(i, s)), document.head.append(r)
					})
				)
		}
	return e
}
async function ut(t, e, n, r, s) {
	const i = (c) => {
			const f = c.getAttribute(T),
				u = f && t.head.querySelector(`[${T}="${f}"]`)
			if (u) return u
			if (c.matches('link[rel=stylesheet]')) {
				const m = c.getAttribute('href')
				return t.head.querySelector(`link[rel=stylesheet][href="${m}"]`)
			}
			return null
		},
		o = () => {
			const c = document.activeElement
			if (c?.closest(`[${T}]`)) {
				if (c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) {
					const f = c.selectionStart,
						u = c.selectionEnd
					return { activeElement: c, start: f, end: u }
				}
				return { activeElement: c }
			} else return { activeElement: null }
		},
		a = ({ activeElement: c, start: f, end: u }) => {
			c &&
				(c.focus(),
				(c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) &&
					((c.selectionStart = f), (c.selectionEnd = u)))
		},
		l = () => {
			const c = document.documentElement,
				f = [...c.attributes].filter(
					({ name: h }) => (c.removeAttribute(h), h.startsWith('data-astro-'))
				)
			;[...t.documentElement.attributes, ...f].forEach(({ name: h, value: g }) =>
				c.setAttribute(h, g)
			)
			for (const h of document.scripts)
				for (const g of t.scripts)
					if (
						(!h.src && h.textContent === g.textContent) ||
						(h.src && h.type === g.type && h.src === g.src)
					) {
						g.dataset.astroExec = ''
						break
					}
			for (const h of Array.from(document.head.children)) {
				const g = i(h)
				g ? g.remove() : h.remove()
			}
			document.head.append(...t.head.children)
			const u = document.body,
				m = o()
			document.body.replaceWith(t.body)
			for (const h of u.querySelectorAll(`[${T}]`)) {
				const g = h.getAttribute(T),
					w = document.querySelector(`[${T}="${g}"]`)
				w && w.replaceWith(h)
			}
			a(m),
				r ? scrollTo(r.scrollX, r.scrollY) : Mt(e, n.history === 'replace', !1),
				xt('astro:after-swap')
		},
		d = $e(t)
	if ((d.length && (await Promise.all(d)), s === 'animate')) {
		const c = document.getAnimations()
		document.documentElement.dataset.astroTransitionFallback = 'old'
		const f = document.getAnimations().filter((m) => !c.includes(m) && !qe(m))
		await Promise.all(f.map((m) => m.finished)),
			l(),
			(document.documentElement.dataset.astroTransitionFallback = 'new')
	} else l()
}
async function Ot(t, e, n, r) {
	let s
	const i = e.href,
		o = {}
	n.formData && ((o.method = 'POST'), (o.body = n.formData))
	const a = await Ie(i, o)
	if (a === null) {
		location.href = i
		return
	}
	a.redirected && (e = new URL(a.redirected)), (lt ??= new DOMParser())
	const l = lt.parseFromString(a.html, a.mediaType)
	if (
		(l.querySelectorAll('noscript').forEach((d) => d.remove()),
		!l.querySelector('[name="astro-view-transitions-enabled"]') && !n.formData)
	) {
		location.href = i
		return
	}
	r || history.replaceState({ ...history.state, scrollX, scrollY }, ''),
		(document.documentElement.dataset.astroTransition = t),
		J
			? (s = document.startViewTransition(() => ut(l, e, n, r)).finished)
			: (s = ut(l, e, n, r, Rt()))
	try {
		await s
	} finally {
		await De(), kt(), Me()
	}
}
function ft(t, e) {
	if (!Q()) {
		location.href = t
		return
	}
	const n = new URL(t, location.href)
	location.origin === n.origin && Pt(n) && !e?.formData
		? Mt(n, e?.history === 'replace', !0)
		: Ot('forward', n, e ?? {})
}
function Fe(t) {
	if (!Q() && t.state) {
		history.scrollRestoration && (history.scrollRestoration = 'manual'), location.reload()
		return
	}
	if (t.state === null) {
		history.scrollRestoration && (history.scrollRestoration = 'auto')
		return
	}
	history.scrollRestoration && (history.scrollRestoration = 'manual')
	const e = history.state
	if (e.intraPage) scrollTo(e.scrollX, e.scrollY)
	else {
		const n = e.index,
			r = n > q ? 'forward' : 'back'
		;(q = n), Ot(r, new URL(location.href), {}, e)
	}
}
const dt = () => {
	Re({ scrollX, scrollY })
}
{
	;(J || Rt() !== 'none') &&
		(addEventListener('popstate', Fe),
		addEventListener('load', kt),
		'onscrollend' in window
			? addEventListener('scrollend', dt)
			: addEventListener('scroll', Oe(dt, 350), { passive: !0 }))
	for (const t of document.scripts) t.dataset.astroExec = ''
}
const It = new Set(),
	B = new WeakSet()
let Dt,
	qt,
	ht = !1
function Ce(t) {
	ht ||
		((ht = !0),
		(Dt ??= t?.prefetchAll ?? !1),
		(qt ??= t?.defaultStrategy ?? 'hover'),
		_e(),
		Ue(),
		Ve())
}
function _e() {
	for (const t of ['touchstart', 'mousedown'])
		document.body.addEventListener(
			t,
			(e) => {
				N(e.target, 'tap') && tt(e.target.href, { with: 'fetch' })
			},
			{ passive: !0 }
		)
}
function Ue() {
	let t
	document.body.addEventListener(
		'focusin',
		(r) => {
			N(r.target, 'hover') && e(r)
		},
		{ passive: !0 }
	),
		document.body.addEventListener('focusout', n, { passive: !0 }),
		$t(() => {
			for (const r of document.getElementsByTagName('a'))
				B.has(r) ||
					(N(r, 'hover') &&
						(B.add(r),
						r.addEventListener('mouseenter', e, { passive: !0 }),
						r.addEventListener('mouseleave', n, { passive: !0 })))
		})
	function e(r) {
		const s = r.target.href
		t && clearTimeout(t),
			(t = setTimeout(() => {
				tt(s, { with: 'fetch' })
			}, 80))
	}
	function n() {
		t && (clearTimeout(t), (t = 0))
	}
}
function Ve() {
	let t
	$t(() => {
		for (const e of document.getElementsByTagName('a'))
			B.has(e) || (N(e, 'viewport') && (B.add(e), (t ??= He()), t.observe(e)))
	})
}
function He() {
	const t = new WeakMap()
	return new IntersectionObserver((e, n) => {
		for (const r of e) {
			const s = r.target,
				i = t.get(s)
			r.isIntersecting
				? (i && clearTimeout(i),
				  t.set(
						s,
						setTimeout(() => {
							n.unobserve(s), t.delete(s), tt(s.href, { with: 'link' })
						}, 300)
				  ))
				: i && (clearTimeout(i), t.delete(s))
		}
	})
}
function tt(t, e) {
	if (!Be(t)) return
	if ((It.add(t), (e?.with ?? 'link') === 'link')) {
		const r = document.createElement('link')
		;(r.rel = 'prefetch'), r.setAttribute('href', t), document.head.append(r)
	} else
		fetch(t).catch((r) => {
			console.log(`[astro] Failed to prefetch ${t}`), console.error(r)
		})
}
function Be(t) {
	if (!navigator.onLine) return !1
	if ('connection' in navigator) {
		const e = navigator.connection
		if (e.saveData || /(2|3)g/.test(e.effectiveType)) return !1
	}
	try {
		const e = new URL(t, location.href)
		return location.origin === e.origin && location.pathname !== e.pathname && !It.has(t)
	} catch {}
	return !1
}
function N(t, e) {
	if (t?.tagName !== 'A') return !1
	const n = t.dataset.astroPrefetch
	return n === 'false' ? !1 : (n == null && Dt) || n === '' ? e === qt : n === e
}
function $t(t) {
	t()
	let e = !1
	document.addEventListener('astro:page-load', () => {
		if (!e) {
			e = !0
			return
		}
		t()
	})
}
function Ne() {
	const t = document.querySelector('[name="astro-view-transitions-fallback"]')
	return t ? t.getAttribute('content') : 'animate'
}
function mt(t) {
	return t.dataset.astroReload !== void 0
}
;(J || Ne() !== 'none') &&
	(document.addEventListener('click', (t) => {
		let e = t.target
		e instanceof Element && e.tagName !== 'A' && (e = e.closest('a')),
			!(
				!e ||
				!(e instanceof HTMLAnchorElement) ||
				mt(e) ||
				e.hasAttribute('download') ||
				!e.href ||
				(e.target && e.target !== '_self') ||
				e.origin !== location.origin ||
				t.button !== 0 ||
				t.metaKey ||
				t.ctrlKey ||
				t.altKey ||
				t.shiftKey ||
				t.defaultPrevented
			) &&
				(t.preventDefault(),
				ft(e.href, { history: e.dataset.astroHistory === 'replace' ? 'replace' : 'auto' }))
	}),
	document.querySelector('[name="astro-view-transitions-forms"]') &&
		document.addEventListener('submit', (t) => {
			let e = t.target
			if (e.tagName !== 'FORM' || mt(e)) return
			const n = e,
				r = new FormData(n)
			let s = n.action ?? location.pathname
			const i = {}
			if (n.method === 'get') {
				const o = new URLSearchParams(r),
					a = new URL(s)
				;(a.search = o.toString()), (s = a.toString())
			} else i.formData = r
			t.preventDefault(), ft(s, i)
		}),
	Ce({ prefetchAll: !0 }))
export { xe as _, Se as a }
