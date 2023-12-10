import { _ as jl } from './hoisted.ca6d60c3.js'
var Ol = Object.defineProperty,
	F = (e, t) => {
		for (var u in t) Ol(e, u, { get: t[u], enumerable: !0 })
	}
function L() {}
function _u(e) {
	return e()
}
function He() {
	return Object.create(null)
}
function W(e) {
	e.forEach(_u)
}
function cu(e) {
	return typeof e == 'function'
}
function fe(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
var oe
function ce(e, t) {
	return oe || (oe = document.createElement('a')), (oe.href = t), e === oe.href
}
function zl(e) {
	return Object.keys(e).length === 0
}
function B(e, t) {
	e.appendChild(t)
}
function b(e, t, u) {
	e.insertBefore(t, u || null)
}
function A(e) {
	e.parentNode && e.parentNode.removeChild(e)
}
function ae(e, t) {
	for (let u = 0; u < e.length; u += 1) e[u] && e[u].d(t)
}
function R(e) {
	return document.createElement(e)
}
function Ul(e) {
	return document.createElementNS('http://www.w3.org/2000/svg', e)
}
function H(e) {
	return document.createTextNode(e)
}
function k() {
	return H(' ')
}
function x() {
	return H('')
}
function J(e, t, u, l) {
	return e.addEventListener(t, u, l), () => e.removeEventListener(t, u, l)
}
function E(e, t, u) {
	u == null ? e.removeAttribute(t) : e.getAttribute(t) !== u && e.setAttribute(t, u)
}
function Il(e) {
	return Array.from(e.childNodes)
}
function y(e, t) {
	;(t = '' + t), e.data !== t && (e.data = t)
}
function we(e, t) {
	e.value = t ?? ''
}
function V(e, t, u) {
	e.classList[u ? 'add' : 'remove'](t)
}
var Ll = class {
		constructor(e = !1) {
			;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
		}
		c(e) {
			this.h(e)
		}
		m(e, t, u = null) {
			this.e ||
				(this.is_svg
					? (this.e = Ul(t.nodeName))
					: (this.e = R(t.nodeType === 11 ? 'TEMPLATE' : t.nodeName)),
				(this.t = t.tagName !== 'TEMPLATE' ? t : t.content),
				this.c(e)),
				this.i(u)
		}
		h(e) {
			;(this.e.innerHTML = e),
				(this.n = Array.from(
					this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
				))
		}
		i(e) {
			for (let t = 0; t < this.n.length; t += 1) b(this.t, this.n[t], e)
		}
		p(e) {
			this.d(), this.h(e), this.i(this.a)
		}
		d() {
			this.n.forEach(A)
		}
	},
	le
function te(e) {
	le = e
}
function Pl() {
	if (!le) throw new Error('Function called outside component initialization')
	return le
}
function ql(e) {
	Pl().$$.on_mount.push(e)
}
var Z = [],
	re = [],
	X = [],
	pe = [],
	Vl = Promise.resolve(),
	Be = !1
function Gl() {
	Be || ((Be = !0), Vl.then(fu))
}
function ve(e) {
	X.push(e)
}
function Jl(e) {
	pe.push(e)
}
var Ce = new Set(),
	Y = 0
function fu() {
	if (Y !== 0) return
	const e = le
	do {
		try {
			for (; Y < Z.length; ) {
				const t = Z[Y]
				Y++, te(t), Kl(t.$$)
			}
		} catch (t) {
			throw ((Z.length = 0), (Y = 0), t)
		}
		for (te(null), Z.length = 0, Y = 0; re.length; ) re.pop()()
		for (let t = 0; t < X.length; t += 1) {
			const u = X[t]
			Ce.has(u) || (Ce.add(u), u())
		}
		X.length = 0
	} while (Z.length)
	for (; pe.length; ) pe.pop()()
	;(Be = !1), Ce.clear(), te(e)
}
function Kl(e) {
	if (e.fragment !== null) {
		e.update(), W(e.before_update)
		const t = e.dirty
		;(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ve)
	}
}
function Wl(e) {
	const t = [],
		u = []
	X.forEach((l) => (e.indexOf(l) === -1 ? t.push(l) : u.push(l))), u.forEach((l) => l()), (X = t)
}
var _e = new Set(),
	K
function se() {
	K = { r: 0, c: [], p: K }
}
function ne() {
	K.r || W(K.c), (K = K.p)
}
function N(e, t) {
	e && e.i && (_e.delete(e), e.i(t))
}
function I(e, t, u, l) {
	if (e && e.o) {
		if (_e.has(e)) return
		_e.add(e),
			K.c.push(() => {
				_e.delete(e), l && (u && e.d(1), l())
			}),
			e.o(t)
	} else l && l()
}
function Yl(e, t) {
	I(e, 1, 1, () => {
		t.delete(e.key)
	})
}
function Zl(e, t, u, l, r, s, n, a, i, h, f, c) {
	let _ = e.length,
		C = s.length,
		o = _
	const m = {}
	for (; o--; ) m[e[o].key] = o
	const d = [],
		v = new Map(),
		p = new Map(),
		T = []
	for (o = C; o--; ) {
		const M = c(r, s, o),
			z = u(M)
		let j = n.get(z)
		j ? l && T.push(() => j.p(M, t)) : ((j = h(z, M)), j.c()),
			v.set(z, (d[o] = j)),
			z in m && p.set(z, Math.abs(o - m[z]))
	}
	const S = new Set(),
		G = new Set()
	function $(M) {
		N(M, 1), M.m(a, f), n.set(M.key, M), (f = M.first), C--
	}
	for (; _ && C; ) {
		const M = d[C - 1],
			z = e[_ - 1],
			j = M.key,
			P = z.key
		M === z
			? ((f = M.first), _--, C--)
			: v.has(P)
			? !n.has(j) || S.has(j)
				? $(M)
				: G.has(P)
				? _--
				: p.get(j) > p.get(P)
				? (G.add(j), $(M))
				: (S.add(P), _--)
			: (i(z, n), _--)
	}
	for (; _--; ) {
		const M = e[_]
		v.has(M.key) || i(M, n)
	}
	for (; C; ) $(d[C - 1])
	return W(T), d
}
function Ql(e, t, u) {
	const l = e.$$.props[t]
	l !== void 0 && ((e.$$.bound[l] = u), u(e.$$.ctx[l]))
}
function Ae(e) {
	e && e.c()
}
function de(e, t, u, l) {
	const { fragment: r, after_update: s } = e.$$
	r && r.m(t, u),
		l ||
			ve(() => {
				const n = e.$$.on_mount.map(_u).filter(cu)
				e.$$.on_destroy ? e.$$.on_destroy.push(...n) : W(n), (e.$$.on_mount = [])
			}),
		s.forEach(ve)
}
function he(e, t) {
	const u = e.$$
	u.fragment !== null &&
		(Wl(u.after_update),
		W(u.on_destroy),
		u.fragment && u.fragment.d(t),
		(u.on_destroy = u.fragment = null),
		(u.ctx = []))
}
function Xl(e, t) {
	e.$$.dirty[0] === -1 && (Z.push(e), Gl(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function me(e, t, u, l, r, s, n, a = [-1]) {
	const i = le
	te(e)
	const h = (e.$$ = {
		fragment: null,
		ctx: [],
		props: s,
		update: L,
		not_equal: r,
		bound: He(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (i ? i.$$.context : [])),
		callbacks: He(),
		dirty: a,
		skip_bound: !1,
		root: t.target || i.$$.root
	})
	n && n(h.root)
	let f = !1
	if (
		((h.ctx = u
			? u(e, t.props || {}, (c, _, ...C) => {
					const o = C.length ? C[0] : _
					return (
						h.ctx &&
							r(h.ctx[c], (h.ctx[c] = o)) &&
							(!h.skip_bound && h.bound[c] && h.bound[c](o), f && Xl(e, c)),
						_
					)
			  })
			: []),
		h.update(),
		(f = !0),
		W(h.before_update),
		(h.fragment = l ? l(h.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const c = Il(t.target)
			h.fragment && h.fragment.l(c), c.forEach(A)
		} else h.fragment && h.fragment.c()
		t.intro && N(e.$$.fragment), de(e, t.target, t.anchor, t.customElement), fu()
	}
	te(i)
}
var Ee = class {
	$destroy() {
		he(this, 1), (this.$destroy = L)
	}
	$on(e, t) {
		if (!cu(t)) return L
		const u = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
		return (
			u.push(t),
			() => {
				const l = u.indexOf(t)
				l !== -1 && u.splice(l, 1)
			}
		)
	}
	$set(e) {
		this.$$set && !zl(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
	}
}
function O(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return (t >= 97 && t <= 122) || (t >= 65 && t <= 90)
}
function Q(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return t >= 48 && t <= 57
}
function q(e) {
	return O(e) || Q(e)
}
var xl = [
		'art-lojban',
		'cel-gaulish',
		'no-bok',
		'no-nyn',
		'zh-guoyu',
		'zh-hakka',
		'zh-min',
		'zh-min-nan',
		'zh-xiang'
	],
	De = {
		'en-gb-oed': 'en-GB-oxendict',
		'i-ami': 'ami',
		'i-bnn': 'bnn',
		'i-default': null,
		'i-enochian': null,
		'i-hak': 'hak',
		'i-klingon': 'tlh',
		'i-lux': 'lb',
		'i-mingo': null,
		'i-navajo': 'nv',
		'i-pwn': 'pwn',
		'i-tao': 'tao',
		'i-tay': 'tay',
		'i-tsu': 'tsu',
		'sgn-be-fr': 'sfb',
		'sgn-be-nl': 'vgt',
		'sgn-ch-de': 'sgg',
		'art-lojban': 'jbo',
		'cel-gaulish': null,
		'no-bok': 'nb',
		'no-nyn': 'nn',
		'zh-guoyu': 'cmn',
		'zh-hakka': 'hak',
		'zh-min': null,
		'zh-min-nan': 'nan',
		'zh-xiang': 'hsn'
	},
	$l = {}.hasOwnProperty
function du(e, t = {}) {
	const u = Ne(),
		l = String(e),
		r = l.toLowerCase()
	let s = 0
	if (e == null) throw new Error('Expected string, got `' + e + '`')
	if ($l.call(De, r)) {
		const a = De[r]
		return (t.normalize === void 0 || t.normalize === null || t.normalize) && typeof a == 'string'
			? du(a)
			: ((u[xl.includes(r) ? 'regular' : 'irregular'] = l), u)
	}
	for (; O(r.charCodeAt(s)) && s < 9; ) s++
	if (s > 1 && s < 9) {
		if (((u.language = l.slice(0, s)), s < 4)) {
			let a = 0
			for (
				;
				r.charCodeAt(s) === 45 &&
				O(r.charCodeAt(s + 1)) &&
				O(r.charCodeAt(s + 2)) &&
				O(r.charCodeAt(s + 3)) &&
				!O(r.charCodeAt(s + 4));

			) {
				if (a > 2) return n(s, 3, 'Too many extended language subtags, expected at most 3 subtags')
				u.extendedLanguageSubtags.push(l.slice(s + 1, s + 4)), (s += 4), a++
			}
		}
		for (
			r.charCodeAt(s) === 45 &&
				O(r.charCodeAt(s + 1)) &&
				O(r.charCodeAt(s + 2)) &&
				O(r.charCodeAt(s + 3)) &&
				O(r.charCodeAt(s + 4)) &&
				!O(r.charCodeAt(s + 5)) &&
				((u.script = l.slice(s + 1, s + 5)), (s += 5)),
				r.charCodeAt(s) === 45 &&
					(O(r.charCodeAt(s + 1)) && O(r.charCodeAt(s + 2)) && !O(r.charCodeAt(s + 3))
						? ((u.region = l.slice(s + 1, s + 3)), (s += 3))
						: Q(r.charCodeAt(s + 1)) &&
						  Q(r.charCodeAt(s + 2)) &&
						  Q(r.charCodeAt(s + 3)) &&
						  !Q(r.charCodeAt(s + 4)) &&
						  ((u.region = l.slice(s + 1, s + 4)), (s += 4)));
			r.charCodeAt(s) === 45;

		) {
			const a = s + 1
			let i = a
			for (; q(r.charCodeAt(i)); ) {
				if (i - a > 7) return n(i, 1, 'Too long variant, expected at most 8 characters')
				i++
			}
			if (i - a > 4 || (i - a > 3 && Q(r.charCodeAt(a)))) u.variants.push(l.slice(a, i)), (s = i)
			else break
		}
		for (
			;
			r.charCodeAt(s) === 45 &&
			!(
				r.charCodeAt(s + 1) === 120 ||
				!q(r.charCodeAt(s + 1)) ||
				r.charCodeAt(s + 2) !== 45 ||
				!q(r.charCodeAt(s + 3))
			);

		) {
			let a = s + 2,
				i = 0
			for (; r.charCodeAt(a) === 45 && q(r.charCodeAt(a + 1)) && q(r.charCodeAt(a + 2)); ) {
				const h = a + 1
				for (a = h + 2, i++; q(r.charCodeAt(a)); ) {
					if (a - h > 7) return n(a, 2, 'Too long extension, expected at most 8 characters')
					a++
				}
			}
			if (!i)
				return n(a, 4, 'Empty extension, extensions must have at least 2 characters of content')
			u.extensions.push({ singleton: l.charAt(s + 1), extensions: l.slice(s + 3, a).split('-') }),
				(s = a)
		}
	} else s = 0
	if (
		(s === 0 && r.charCodeAt(s) === 120) ||
		(r.charCodeAt(s) === 45 && r.charCodeAt(s + 1) === 120)
	) {
		s = s ? s + 2 : 1
		let a = s
		for (; r.charCodeAt(a) === 45 && q(r.charCodeAt(a + 1)); ) {
			const i = s + 1
			for (a = i; q(r.charCodeAt(a)); ) {
				if (a - i > 7) return n(a, 5, 'Too long private-use area, expected at most 8 characters')
				a++
			}
			u.privateuse.push(l.slice(s + 1, a)), (s = a)
		}
	}
	if (s !== l.length) return n(s, 6, 'Found superfluous content after tag')
	return u
	function n(a, i, h) {
		return t.warning && t.warning(h, i, a), t.forgiving ? u : Ne()
	}
}
function Ne() {
	return {
		language: null,
		extendedLanguageSubtags: [],
		script: null,
		region: null,
		variants: [],
		extensions: [],
		privateuse: [],
		irregular: null,
		regular: null
	}
}
function ye(e, t, u) {
	const l = e.slice()
	return (l[8] = t[u][0]), (l[9] = t[u][1]), l
}
function er(e) {
	let t,
		u,
		l,
		r,
		s,
		n = e[0] && je()
	return {
		c() {
			n && n.c(),
				(t = k()),
				(u = R('div')),
				(l = R('p')),
				(l.textContent = `${e[3](30)}`),
				(r = k()),
				(s = R('p')),
				(s.textContent = `${e[3](40)}`),
				E(l, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-j9e30'),
				E(s, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30'),
				E(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(a, i) {
			n && n.m(a, i), b(a, t, i), b(a, u, i), B(u, l), B(u, r), B(u, s)
		},
		p(a, i) {
			a[0] ? n || ((n = je()), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), (n = null))
		},
		d(a) {
			n && n.d(a), a && A(t), a && A(u)
		}
	}
}
function ur(e) {
	let t,
		u,
		l,
		r,
		s = e[1].meta?.title + '',
		n,
		a,
		i,
		h,
		f = e[1].excerpt + '',
		c,
		_ = e[0] && Oe(e),
		C = e[2].length && Ue(e)
	return {
		c() {
			_ && _.c(),
				(t = k()),
				(u = R('div')),
				(l = R('p')),
				(r = R('a')),
				(n = H(s)),
				(i = k()),
				(h = R('p')),
				(c = k()),
				C && C.c(),
				E(r, 'class', 'pagefind-ui__result-link svelte-j9e30'),
				E(r, 'href', (a = e[1].meta?.url || e[1].url)),
				E(l, 'class', 'pagefind-ui__result-title svelte-j9e30'),
				E(h, 'class', 'pagefind-ui__result-excerpt svelte-j9e30'),
				E(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(o, m) {
			_ && _.m(o, m),
				b(o, t, m),
				b(o, u, m),
				B(u, l),
				B(l, r),
				B(r, n),
				B(u, i),
				B(u, h),
				(h.innerHTML = f),
				B(u, c),
				C && C.m(u, null)
		},
		p(o, m) {
			o[0]
				? _
					? _.p(o, m)
					: ((_ = Oe(o)), _.c(), _.m(t.parentNode, t))
				: _ && (_.d(1), (_ = null)),
				m & 2 && s !== (s = o[1].meta?.title + '') && y(n, s),
				m & 2 && a !== (a = o[1].meta?.url || o[1].url) && E(r, 'href', a),
				m & 2 && f !== (f = o[1].excerpt + '') && (h.innerHTML = f),
				o[2].length
					? C
						? C.p(o, m)
						: ((C = Ue(o)), C.c(), C.m(u, null))
					: C && (C.d(1), (C = null))
		},
		d(o) {
			_ && _.d(o), o && A(t), o && A(u), C && C.d()
		}
	}
}
function je(e) {
	let t
	return {
		c() {
			;(t = R('div')), E(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30')
		},
		m(u, l) {
			b(u, t, l)
		},
		d(u) {
			u && A(t)
		}
	}
}
function Oe(e) {
	let t,
		u = e[1].meta.image && ze(e)
	return {
		c() {
			;(t = R('div')), u && u.c(), E(t, 'class', 'pagefind-ui__result-thumb svelte-j9e30')
		},
		m(l, r) {
			b(l, t, r), u && u.m(t, null)
		},
		p(l, r) {
			l[1].meta.image
				? u
					? u.p(l, r)
					: ((u = ze(l)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(l) {
			l && A(t), u && u.d()
		}
	}
}
function ze(e) {
	let t, u, l
	return {
		c() {
			;(t = R('img')),
				E(t, 'class', 'pagefind-ui__result-image svelte-j9e30'),
				ce(t.src, (u = e[1].meta?.image)) || E(t, 'src', u),
				E(t, 'alt', (l = e[1].meta?.image_alt || e[1].meta?.title))
		},
		m(r, s) {
			b(r, t, s)
		},
		p(r, s) {
			s & 2 && !ce(t.src, (u = r[1].meta?.image)) && E(t, 'src', u),
				s & 2 && l !== (l = r[1].meta?.image_alt || r[1].meta?.title) && E(t, 'alt', l)
		},
		d(r) {
			r && A(t)
		}
	}
}
function Ue(e) {
	let t,
		u = e[2],
		l = []
	for (let r = 0; r < u.length; r += 1) l[r] = Ie(ye(e, u, r))
	return {
		c() {
			t = R('ul')
			for (let r = 0; r < l.length; r += 1) l[r].c()
			E(t, 'class', 'pagefind-ui__result-tags svelte-j9e30')
		},
		m(r, s) {
			b(r, t, s)
			for (let n = 0; n < l.length; n += 1) l[n] && l[n].m(t, null)
		},
		p(r, s) {
			if (s & 4) {
				u = r[2]
				let n
				for (n = 0; n < u.length; n += 1) {
					const a = ye(r, u, n)
					l[n] ? l[n].p(a, s) : ((l[n] = Ie(a)), l[n].c(), l[n].m(t, null))
				}
				for (; n < l.length; n += 1) l[n].d(1)
				l.length = u.length
			}
		},
		d(r) {
			r && A(t), ae(l, r)
		}
	}
}
function Ie(e) {
	let t,
		u = e[8].replace(/^(\w)/, Le) + '',
		l,
		r,
		s = e[9] + '',
		n,
		a
	return {
		c() {
			;(t = R('li')),
				(l = H(u)),
				(r = H(': ')),
				(n = H(s)),
				(a = k()),
				E(t, 'class', 'pagefind-ui__result-tag svelte-j9e30')
		},
		m(i, h) {
			b(i, t, h), B(t, l), B(t, r), B(t, n), B(t, a)
		},
		p(i, h) {
			h & 4 && u !== (u = i[8].replace(/^(\w)/, Le) + '') && y(l, u),
				h & 4 && s !== (s = i[9] + '') && y(n, s)
		},
		d(i) {
			i && A(t)
		}
	}
}
function tr(e) {
	let t
	function u(s, n) {
		return s[1] ? ur : er
	}
	let l = u(e),
		r = l(e)
	return {
		c() {
			;(t = R('li')), r.c(), E(t, 'class', 'pagefind-ui__result svelte-j9e30')
		},
		m(s, n) {
			b(s, t, n), r.m(t, null)
		},
		p(s, [n]) {
			l === (l = u(s)) && r ? r.p(s, n) : (r.d(1), (r = l(s)), r && (r.c(), r.m(t, null)))
		},
		i: L,
		o: L,
		d(s) {
			s && A(t), r.d()
		}
	}
}
var Le = (e) => e.toLocaleUpperCase()
function lr(e, t, u) {
	let { show_images: l = !0 } = t,
		{ process_result: r = null } = t,
		{ result: s = { data: async () => {} } } = t
	const n = ['title', 'image', 'image_alt', 'url']
	let a,
		i = []
	const h = async (c) => {
			u(1, (a = await c.data())),
				u(1, (a = r?.(a) ?? a)),
				u(2, (i = Object.entries(a.meta).filter(([_]) => !n.includes(_))))
		},
		f = (c = 30) => '. '.repeat(Math.floor(10 + Math.random() * c))
	return (
		(e.$$set = (c) => {
			'show_images' in c && u(0, (l = c.show_images)),
				'process_result' in c && u(4, (r = c.process_result)),
				'result' in c && u(5, (s = c.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 32 && h(s)
		}),
		[l, a, i, f, r, s]
	)
}
var rr = class extends Ee {
		constructor(e) {
			super(), me(this, e, lr, tr, fe, { show_images: 0, process_result: 4, result: 5 })
		}
	},
	sr = rr
function Pe(e, t, u) {
	const l = e.slice()
	return (l[11] = t[u][0]), (l[12] = t[u][1]), l
}
function qe(e, t, u) {
	const l = e.slice()
	return (l[15] = t[u]), l
}
function nr(e) {
	let t,
		u,
		l,
		r,
		s,
		n = e[0] && Ve()
	return {
		c() {
			n && n.c(),
				(t = k()),
				(u = R('div')),
				(l = R('p')),
				(l.textContent = `${e[5](30)}`),
				(r = k()),
				(s = R('p')),
				(s.textContent = `${e[5](40)}`),
				E(l, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf'),
				E(s, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf'),
				E(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(a, i) {
			n && n.m(a, i), b(a, t, i), b(a, u, i), B(u, l), B(u, r), B(u, s)
		},
		p(a, i) {
			a[0] ? n || ((n = Ve()), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), (n = null))
		},
		d(a) {
			n && n.d(a), a && A(t), a && A(u)
		}
	}
}
function ar(e) {
	let t,
		u,
		l,
		r,
		s = e[1].meta?.title + '',
		n,
		a,
		i,
		h,
		f,
		c = e[0] && Ge(e),
		_ = e[4] && Ke(e),
		C = e[3],
		o = []
	for (let d = 0; d < C.length; d += 1) o[d] = We(qe(e, C, d))
	let m = e[2].length && Ye(e)
	return {
		c() {
			c && c.c(),
				(t = k()),
				(u = R('div')),
				(l = R('p')),
				(r = R('a')),
				(n = H(s)),
				(i = k()),
				_ && _.c(),
				(h = k())
			for (let d = 0; d < o.length; d += 1) o[d].c()
			;(f = k()),
				m && m.c(),
				E(r, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				E(r, 'href', (a = e[1].meta?.url || e[1].url)),
				E(l, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				E(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(d, v) {
			c && c.m(d, v),
				b(d, t, v),
				b(d, u, v),
				B(u, l),
				B(l, r),
				B(r, n),
				B(u, i),
				_ && _.m(u, null),
				B(u, h)
			for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(u, null)
			B(u, f), m && m.m(u, null)
		},
		p(d, v) {
			if (
				(d[0]
					? c
						? c.p(d, v)
						: ((c = Ge(d)), c.c(), c.m(t.parentNode, t))
					: c && (c.d(1), (c = null)),
				v & 2 && s !== (s = d[1].meta?.title + '') && y(n, s),
				v & 2 && a !== (a = d[1].meta?.url || d[1].url) && E(r, 'href', a),
				d[4] ? (_ ? _.p(d, v) : ((_ = Ke(d)), _.c(), _.m(u, h))) : _ && (_.d(1), (_ = null)),
				v & 8)
			) {
				C = d[3]
				let p
				for (p = 0; p < C.length; p += 1) {
					const T = qe(d, C, p)
					o[p] ? o[p].p(T, v) : ((o[p] = We(T)), o[p].c(), o[p].m(u, f))
				}
				for (; p < o.length; p += 1) o[p].d(1)
				o.length = C.length
			}
			d[2].length ? (m ? m.p(d, v) : ((m = Ye(d)), m.c(), m.m(u, null))) : m && (m.d(1), (m = null))
		},
		d(d) {
			c && c.d(d), d && A(t), d && A(u), _ && _.d(), ae(o, d), m && m.d()
		}
	}
}
function Ve(e) {
	let t
	return {
		c() {
			;(t = R('div')), E(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf')
		},
		m(u, l) {
			b(u, t, l)
		},
		d(u) {
			u && A(t)
		}
	}
}
function Ge(e) {
	let t,
		u = e[1].meta.image && Je(e)
	return {
		c() {
			;(t = R('div')), u && u.c(), E(t, 'class', 'pagefind-ui__result-thumb svelte-4xnkmf')
		},
		m(l, r) {
			b(l, t, r), u && u.m(t, null)
		},
		p(l, r) {
			l[1].meta.image
				? u
					? u.p(l, r)
					: ((u = Je(l)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(l) {
			l && A(t), u && u.d()
		}
	}
}
function Je(e) {
	let t, u, l
	return {
		c() {
			;(t = R('img')),
				E(t, 'class', 'pagefind-ui__result-image svelte-4xnkmf'),
				ce(t.src, (u = e[1].meta?.image)) || E(t, 'src', u),
				E(t, 'alt', (l = e[1].meta?.image_alt || e[1].meta?.title))
		},
		m(r, s) {
			b(r, t, s)
		},
		p(r, s) {
			s & 2 && !ce(t.src, (u = r[1].meta?.image)) && E(t, 'src', u),
				s & 2 && l !== (l = r[1].meta?.image_alt || r[1].meta?.title) && E(t, 'alt', l)
		},
		d(r) {
			r && A(t)
		}
	}
}
function Ke(e) {
	let t,
		u = e[1].excerpt + ''
	return {
		c() {
			;(t = R('p')), E(t, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf')
		},
		m(l, r) {
			b(l, t, r), (t.innerHTML = u)
		},
		p(l, r) {
			r & 2 && u !== (u = l[1].excerpt + '') && (t.innerHTML = u)
		},
		d(l) {
			l && A(t)
		}
	}
}
function We(e) {
	let t,
		u,
		l,
		r = e[15].title + '',
		s,
		n,
		a,
		i,
		h = e[15].excerpt + ''
	return {
		c() {
			;(t = R('div')),
				(u = R('p')),
				(l = R('a')),
				(s = H(r)),
				(a = k()),
				(i = R('p')),
				E(l, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				E(l, 'href', (n = e[15].url)),
				E(u, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				E(i, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf'),
				E(t, 'class', 'pagefind-ui__result-nested svelte-4xnkmf')
		},
		m(f, c) {
			b(f, t, c), B(t, u), B(u, l), B(l, s), B(t, a), B(t, i), (i.innerHTML = h)
		},
		p(f, c) {
			c & 8 && r !== (r = f[15].title + '') && y(s, r),
				c & 8 && n !== (n = f[15].url) && E(l, 'href', n),
				c & 8 && h !== (h = f[15].excerpt + '') && (i.innerHTML = h)
		},
		d(f) {
			f && A(t)
		}
	}
}
function Ye(e) {
	let t,
		u = e[2],
		l = []
	for (let r = 0; r < u.length; r += 1) l[r] = Ze(Pe(e, u, r))
	return {
		c() {
			t = R('ul')
			for (let r = 0; r < l.length; r += 1) l[r].c()
			E(t, 'class', 'pagefind-ui__result-tags svelte-4xnkmf')
		},
		m(r, s) {
			b(r, t, s)
			for (let n = 0; n < l.length; n += 1) l[n] && l[n].m(t, null)
		},
		p(r, s) {
			if (s & 4) {
				u = r[2]
				let n
				for (n = 0; n < u.length; n += 1) {
					const a = Pe(r, u, n)
					l[n] ? l[n].p(a, s) : ((l[n] = Ze(a)), l[n].c(), l[n].m(t, null))
				}
				for (; n < l.length; n += 1) l[n].d(1)
				l.length = u.length
			}
		},
		d(r) {
			r && A(t), ae(l, r)
		}
	}
}
function Ze(e) {
	let t,
		u = e[11].replace(/^(\w)/, Qe) + '',
		l,
		r,
		s = e[12] + '',
		n,
		a
	return {
		c() {
			;(t = R('li')),
				(l = H(u)),
				(r = H(': ')),
				(n = H(s)),
				(a = k()),
				E(t, 'class', 'pagefind-ui__result-tag svelte-4xnkmf')
		},
		m(i, h) {
			b(i, t, h), B(t, l), B(t, r), B(t, n), B(t, a)
		},
		p(i, h) {
			h & 4 && u !== (u = i[11].replace(/^(\w)/, Qe) + '') && y(l, u),
				h & 4 && s !== (s = i[12] + '') && y(n, s)
		},
		d(i) {
			i && A(t)
		}
	}
}
function ir(e) {
	let t
	function u(s, n) {
		return s[1] ? ar : nr
	}
	let l = u(e),
		r = l(e)
	return {
		c() {
			;(t = R('li')), r.c(), E(t, 'class', 'pagefind-ui__result svelte-4xnkmf')
		},
		m(s, n) {
			b(s, t, n), r.m(t, null)
		},
		p(s, [n]) {
			l === (l = u(s)) && r ? r.p(s, n) : (r.d(1), (r = l(s)), r && (r.c(), r.m(t, null)))
		},
		i: L,
		o: L,
		d(s) {
			s && A(t), r.d()
		}
	}
}
var Qe = (e) => e.toLocaleUpperCase()
function or(e, t, u) {
	let { show_images: l = !0 } = t,
		{ process_result: r = null } = t,
		{ result: s = { data: async () => {} } } = t
	const n = ['title', 'image', 'image_alt', 'url']
	let a,
		i = [],
		h = [],
		f = !1
	const c = (o, m) => {
			if (o.length <= m) return o
			const d = [...o]
				.sort((v, p) => p.locations.length - v.locations.length)
				.slice(0, 3)
				.map((v) => v.url)
			return o.filter((v) => d.includes(v.url))
		},
		_ = async (o) => {
			u(1, (a = await o.data())),
				u(1, (a = r?.(a) ?? a)),
				u(2, (i = Object.entries(a.meta).filter(([m]) => !n.includes(m)))),
				Array.isArray(a.sub_results) &&
					(u(4, (f = a.sub_results?.[0]?.url === (a.meta?.url || a.url))),
					f ? u(3, (h = c(a.sub_results.slice(1), 3))) : u(3, (h = c([...a.sub_results], 3))))
		},
		C = (o = 30) => '. '.repeat(Math.floor(10 + Math.random() * o))
	return (
		(e.$$set = (o) => {
			'show_images' in o && u(0, (l = o.show_images)),
				'process_result' in o && u(6, (r = o.process_result)),
				'result' in o && u(7, (s = o.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 128 && _(s)
		}),
		[l, a, i, h, f, C, r, s]
	)
}
var _r = class extends Ee {
		constructor(e) {
			super(), me(this, e, or, ir, fe, { show_images: 0, process_result: 6, result: 7 })
		}
	},
	cr = _r
function Xe(e, t, u) {
	const l = e.slice()
	return (l[9] = t[u][0]), (l[10] = t[u][1]), (l[11] = t), (l[12] = u), l
}
function xe(e, t, u) {
	const l = e.slice()
	return (l[13] = t[u][0]), (l[14] = t[u][1]), (l[15] = t), (l[16] = u), l
}
function $e(e) {
	let t,
		u,
		l = e[3]('filters_label', e[4], e[5]) + '',
		r,
		s,
		n = Object.entries(e[1]),
		a = []
	for (let i = 0; i < n.length; i += 1) a[i] = tu(Xe(e, n, i))
	return {
		c() {
			;(t = R('fieldset')), (u = R('legend')), (r = H(l)), (s = k())
			for (let i = 0; i < a.length; i += 1) a[i].c()
			E(u, 'class', 'pagefind-ui__filter-panel-label svelte-1v2r7ls'),
				E(t, 'class', 'pagefind-ui__filter-panel svelte-1v2r7ls')
		},
		m(i, h) {
			b(i, t, h), B(t, u), B(u, r), B(t, s)
			for (let f = 0; f < a.length; f += 1) a[f] && a[f].m(t, null)
		},
		p(i, h) {
			if ((h & 56 && l !== (l = i[3]('filters_label', i[4], i[5]) + '') && y(r, l), h & 71)) {
				n = Object.entries(i[1])
				let f
				for (f = 0; f < n.length; f += 1) {
					const c = Xe(i, n, f)
					a[f] ? a[f].p(c, h) : ((a[f] = tu(c)), a[f].c(), a[f].m(t, null))
				}
				for (; f < a.length; f += 1) a[f].d(1)
				a.length = n.length
			}
		},
		d(i) {
			i && A(t), ae(a, i)
		}
	}
}
function eu(e) {
	let t,
		u,
		l,
		r,
		s,
		n,
		a,
		i,
		h = e[13] + '',
		f,
		c = e[14] + '',
		_,
		C,
		o,
		m,
		d,
		v
	function p() {
		e[8].call(u, e[9], e[13])
	}
	return {
		c() {
			;(t = R('div')),
				(u = R('input')),
				(n = k()),
				(a = R('label')),
				(i = new Ll(!1)),
				(f = H(' (')),
				(_ = H(c)),
				(C = H(')')),
				(m = k()),
				E(u, 'class', 'pagefind-ui__filter-checkbox svelte-1v2r7ls'),
				E(u, 'type', 'checkbox'),
				E(u, 'id', (l = e[9] + '-' + e[13])),
				E(u, 'name', (r = e[9])),
				(u.__value = s = e[13]),
				(u.value = u.__value),
				(i.a = f),
				E(a, 'class', 'pagefind-ui__filter-label svelte-1v2r7ls'),
				E(a, 'for', (o = e[9] + '-' + e[13])),
				E(t, 'class', 'pagefind-ui__filter-value svelte-1v2r7ls'),
				V(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		m(T, S) {
			b(T, t, S),
				B(t, u),
				(u.checked = e[0][`${e[9]}:${e[13]}`]),
				B(t, n),
				B(t, a),
				i.m(h, a),
				B(a, f),
				B(a, _),
				B(a, C),
				B(t, m),
				d || ((v = J(u, 'change', p)), (d = !0))
		},
		p(T, S) {
			;(e = T),
				S & 2 && l !== (l = e[9] + '-' + e[13]) && E(u, 'id', l),
				S & 2 && r !== (r = e[9]) && E(u, 'name', r),
				S & 2 && s !== (s = e[13]) && ((u.__value = s), (u.value = u.__value)),
				S & 3 && (u.checked = e[0][`${e[9]}:${e[13]}`]),
				S & 2 && h !== (h = e[13] + '') && i.p(h),
				S & 2 && c !== (c = e[14] + '') && y(_, c),
				S & 2 && o !== (o = e[9] + '-' + e[13]) && E(a, 'for', o),
				S & 3 && V(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		d(T) {
			T && A(t), (d = !1), v()
		}
	}
}
function uu(e) {
	let t,
		u = (e[2] || e[14] || e[0][`${e[9]}:${e[13]}`]) && eu(e)
	return {
		c() {
			u && u.c(), (t = x())
		},
		m(l, r) {
			u && u.m(l, r), b(l, t, r)
		},
		p(l, r) {
			l[2] || l[14] || l[0][`${l[9]}:${l[13]}`]
				? u
					? u.p(l, r)
					: ((u = eu(l)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		d(l) {
			u && u.d(l), l && A(t)
		}
	}
}
function tu(e) {
	let t,
		u,
		l = e[9].replace(/^(\w)/, lu) + '',
		r,
		s,
		n,
		a = e[9] + '',
		i,
		h,
		f = Object.entries(e[10] || {}),
		c = []
	for (let _ = 0; _ < f.length; _ += 1) c[_] = uu(xe(e, f, _))
	return {
		c() {
			;(t = R('details')),
				(u = R('summary')),
				(r = k()),
				(s = R('fieldset')),
				(n = R('legend')),
				(i = k())
			for (let _ = 0; _ < c.length; _ += 1) c[_].c()
			;(h = k()),
				E(u, 'class', 'pagefind-ui__filter-name svelte-1v2r7ls'),
				E(n, 'class', 'pagefind-ui__filter-group-label svelte-1v2r7ls'),
				E(s, 'class', 'pagefind-ui__filter-group svelte-1v2r7ls'),
				E(t, 'class', 'pagefind-ui__filter-block svelte-1v2r7ls'),
				(t.open = e[6])
		},
		m(_, C) {
			b(_, t, C), B(t, u), (u.innerHTML = l), B(t, r), B(t, s), B(s, n), (n.innerHTML = a), B(s, i)
			for (let o = 0; o < c.length; o += 1) c[o] && c[o].m(s, null)
			B(t, h)
		},
		p(_, C) {
			if (
				(C & 2 && l !== (l = _[9].replace(/^(\w)/, lu) + '') && (u.innerHTML = l),
				C & 2 && a !== (a = _[9] + '') && (n.innerHTML = a),
				C & 7)
			) {
				f = Object.entries(_[10] || {})
				let o
				for (o = 0; o < f.length; o += 1) {
					const m = xe(_, f, o)
					c[o] ? c[o].p(m, C) : ((c[o] = uu(m)), c[o].c(), c[o].m(s, null))
				}
				for (; o < c.length; o += 1) c[o].d(1)
				c.length = f.length
			}
			C & 64 && (t.open = _[6])
		},
		d(_) {
			_ && A(t), ae(c, _)
		}
	}
}
function fr(e) {
	let t = e[1] && Object.entries(e[1]).length,
		u,
		l = t && $e(e)
	return {
		c() {
			l && l.c(), (u = x())
		},
		m(r, s) {
			l && l.m(r, s), b(r, u, s)
		},
		p(r, [s]) {
			s & 2 && (t = r[1] && Object.entries(r[1]).length),
				t ? (l ? l.p(r, s) : ((l = $e(r)), l.c(), l.m(u.parentNode, u))) : l && (l.d(1), (l = null))
		},
		i: L,
		o: L,
		d(r) {
			l && l.d(r), r && A(u)
		}
	}
}
var lu = (e) => e.toLocaleUpperCase()
function dr(e, t, u) {
	let { available_filters: l = null } = t,
		{ show_empty_filters: r = !0 } = t,
		{ translate: s = () => '' } = t,
		{ automatic_translations: n = {} } = t,
		{ translations: a = {} } = t
	const i = {}
	let h = !1,
		f = !1
	function c(_, C) {
		;(i[`${_}:${C}`] = this.checked), u(0, i)
	}
	return (
		(e.$$set = (_) => {
			'available_filters' in _ && u(1, (l = _.available_filters)),
				'show_empty_filters' in _ && u(2, (r = _.show_empty_filters)),
				'translate' in _ && u(3, (s = _.translate)),
				'automatic_translations' in _ && u(4, (n = _.automatic_translations)),
				'translations' in _ && u(5, (a = _.translations))
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 130 && l && !h) {
				u(7, (h = !0))
				let _ = Object.entries(l || {})
				_.length === 1 && Object.entries(_[0][1])?.length <= 6 && u(6, (f = !0))
			}
		}),
		[i, l, r, s, n, a, f, h, c]
	)
}
var hr = class extends Ee {
		constructor(e) {
			super(),
				me(this, e, dr, fr, fe, {
					available_filters: 1,
					show_empty_filters: 2,
					translate: 3,
					automatic_translations: 4,
					translations: 5,
					selected_filters: 0
				})
		}
		get selected_filters() {
			return this.$$.ctx[0]
		}
	},
	mr = hr,
	hu = {}
F(hu, {
	comments: () => Eu,
	default: () => Er,
	direction: () => gu,
	strings: () => Cu,
	thanks_to: () => mu
})
var mu = 'Jan Claasen',
	Eu = '',
	gu = 'ltr',
	Cu = {
		placeholder: 'Soek',
		clear_search: 'Opruim',
		load_more: 'Laai nog resultate',
		search_label: 'Soek hierdie webwerf',
		filters_label: 'Filters',
		zero_results: 'Geen resultate vir [SEARCH_TERM]',
		many_results: '[COUNT] resultate vir [SEARCH_TERM]',
		one_result: '[COUNT] resultate vir [SEARCH_TERM]',
		alt_search:
			'Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan',
		search_suggestion:
			'Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:',
		searching: 'Soek vir [SEARCH_TERM]'
	},
	Er = { thanks_to: mu, comments: Eu, direction: gu, strings: Cu },
	pu = {}
F(pu, {
	comments: () => vu,
	default: () => gr,
	direction: () => Ru,
	strings: () => Au,
	thanks_to: () => Bu
})
var Bu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	vu = '',
	Ru = 'ltr',
	Au = {
		placeholder: 'Cerca',
		clear_search: 'Netejar',
		load_more: 'Veure mées resultats',
		search_label: 'Cerca en aquest lloc',
		filters_label: 'Filtres',
		zero_results: 'No es van trobar resultats per [SEARCH_TERM]',
		many_results: '[COUNT] resultats trobats per [SEARCH_TERM]',
		one_result: '[COUNT] resultat trobat per [SEARCH_TERM]',
		alt_search:
			'No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]',
		search_suggestion:
			'No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:',
		searching: 'Cercant [SEARCH_TERM]...'
	},
	gr = { thanks_to: Bu, comments: vu, direction: Ru, strings: Au },
	bu = {}
F(bu, {
	comments: () => ku,
	default: () => Cr,
	direction: () => Fu,
	strings: () => Mu,
	thanks_to: () => Tu
})
var Tu = 'Jan Claasen',
	ku = '',
	Fu = 'ltr',
	Mu = {
		placeholder: 'Suche',
		clear_search: 'Löschen',
		load_more: 'Mehr Ergebnisse laden',
		search_label: 'Suche diese Seite',
		filters_label: 'Filter',
		zero_results: 'Keine Ergebnisse für [SEARCH_TERM]',
		many_results: '[COUNT] Ergebnisse für [SEARCH_TERM]',
		one_result: '[COUNT] Ergebnis für [SEARCH_TERM]',
		alt_search:
			'Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt',
		search_suggestion:
			'Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:',
		searching: 'Suche für [SEARCH_TERM]'
	},
	Cr = { thanks_to: Tu, comments: ku, direction: Fu, strings: Mu },
	Su = {}
F(Su, {
	comments: () => wu,
	default: () => pr,
	direction: () => Du,
	strings: () => Nu,
	thanks_to: () => Hu
})
var Hu = 'Liam Bigelow <liam@cloudcannon.com>',
	wu = '',
	Du = 'ltr',
	Nu = {
		placeholder: 'Search',
		clear_search: 'Clear',
		load_more: 'Load more results',
		search_label: 'Search this site',
		filters_label: 'Filters',
		zero_results: 'No results for [SEARCH_TERM]',
		many_results: '[COUNT] results for [SEARCH_TERM]',
		one_result: '[COUNT] result for [SEARCH_TERM]',
		alt_search: 'No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead',
		search_suggestion: 'No results for [SEARCH_TERM]. Try one of the following searches:',
		searching: 'Searching for [SEARCH_TERM]...'
	},
	pr = { thanks_to: Hu, comments: wu, direction: Du, strings: Nu },
	yu = {}
F(yu, {
	comments: () => Ou,
	default: () => Br,
	direction: () => zu,
	strings: () => Uu,
	thanks_to: () => ju
})
var ju = 'Pablo Villaverde <https://github.com/pvillaverde>',
	Ou = '',
	zu = 'ltr',
	Uu = {
		placeholder: 'Buscar',
		clear_search: 'Limpiar',
		load_more: 'Ver más resultados',
		search_label: 'Buscar en este sitio',
		filters_label: 'Filtros',
		zero_results: 'No se encontraron resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	Br = { thanks_to: ju, comments: Ou, direction: zu, strings: Uu },
	Iu = {}
F(Iu, {
	comments: () => Pu,
	default: () => vr,
	direction: () => qu,
	strings: () => Vu,
	thanks_to: () => Lu
})
var Lu = 'Valtteri Laitinen <dev@valtlai.fi>',
	Pu = '',
	qu = 'ltr',
	Vu = {
		placeholder: 'Haku',
		clear_search: 'Tyhjennä',
		load_more: 'Lataa lisää tuloksia',
		search_label: 'Hae tältä sivustolta',
		filters_label: 'Suodattimet',
		zero_results: 'Ei tuloksia haulle [SEARCH_TERM]',
		many_results: '[COUNT] tulosta haulle [SEARCH_TERM]',
		one_result: '[COUNT] tulos haulle [SEARCH_TERM]',
		alt_search:
			'Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]',
		search_suggestion: 'Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:',
		searching: 'Haetaan [SEARCH_TERM]...'
	},
	vr = { thanks_to: Lu, comments: Pu, direction: qu, strings: Vu },
	Gu = {}
F(Gu, {
	comments: () => Ku,
	default: () => Rr,
	direction: () => Wu,
	strings: () => Yu,
	thanks_to: () => Ju
})
var Ju = 'Nicolas Friedli <nicolas@theologique.ch>',
	Ku = '',
	Wu = 'ltr',
	Yu = {
		placeholder: 'Rechercher',
		clear_search: 'Nettoyer',
		load_more: 'Charger plus de résultats',
		search_label: 'Recherche sur ce site',
		filters_label: 'Filtres',
		zero_results: 'Pas de résultat pour [SEARCH_TERM]',
		many_results: '[COUNT] résultats pour [SEARCH_TERM]',
		one_result: '[COUNT] résultat pour [SEARCH_TERM]',
		alt_search:
			'Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place',
		search_suggestion: 'Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:',
		searching: 'Recherche [SEARCH_TERM]...'
	},
	Rr = { thanks_to: Ju, comments: Ku, direction: Wu, strings: Yu },
	Zu = {}
F(Zu, {
	comments: () => Xu,
	default: () => Ar,
	direction: () => xu,
	strings: () => $u,
	thanks_to: () => Qu
})
var Qu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	Xu = '',
	xu = 'ltr',
	$u = {
		placeholder: 'Buscar',
		clear_search: 'Limpar',
		load_more: 'Ver máis resultados',
		search_label: 'Buscar neste sitio',
		filters_label: 'Filtros',
		zero_results: 'Non se atoparon resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados atopados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado atopado para [SEARCH_TERM]',
		alt_search:
			'Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	Ar = { thanks_to: Qu, comments: Xu, direction: xu, strings: $u },
	et = {}
F(et, {
	comments: () => tt,
	default: () => br,
	direction: () => lt,
	strings: () => rt,
	thanks_to: () => ut
})
var ut = 'Amit Yadav <amit@thetechbasket.com>',
	tt = '',
	lt = 'ltr',
	rt = {
		placeholder: 'खोजें',
		clear_search: 'साफ करें',
		load_more: 'और अधिक परिणाम लोड करें',
		search_label: 'इस साइट में खोजें',
		filters_label: 'फ़िल्टर',
		zero_results: 'कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला',
		many_results: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिले',
		one_result: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिला',
		alt_search:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है',
		search_suggestion:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:',
		searching: '[SEARCH_TERM] की खोज की जा रही है...'
	},
	br = { thanks_to: ut, comments: tt, direction: lt, strings: rt },
	st = {}
F(st, {
	comments: () => at,
	default: () => Tr,
	direction: () => it,
	strings: () => ot,
	thanks_to: () => nt
})
var nt = 'Nixentric',
	at = '',
	it = 'ltr',
	ot = {
		placeholder: 'Cari',
		clear_search: 'Bersihkan',
		load_more: 'Muat lebih banyak hasil',
		search_label: 'Telusuri situs ini',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] tidak ditemukan',
		many_results: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		one_result: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		alt_search:
			'[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya',
		search_suggestion: '[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:',
		searching: 'Mencari [SEARCH_TERM]...'
	},
	Tr = { thanks_to: nt, comments: at, direction: it, strings: ot },
	_t = {}
F(_t, {
	comments: () => ft,
	default: () => kr,
	direction: () => dt,
	strings: () => ht,
	thanks_to: () => ct
})
var ct = 'Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>',
	ft = '',
	dt = 'ltr',
	ht = {
		placeholder: 'Cerca',
		clear_search: 'Cancella la cronologia',
		load_more: 'Mostra più risultati',
		search_label: 'Cerca nel sito',
		filters_label: 'Filtri di ricerca',
		zero_results: 'Nessun risultato per [SEARCH_TERM]',
		many_results: '[COUNT] risultati per [SEARCH_TERM]',
		one_result: '[COUNT] risultato per [SEARCH_TERM]',
		alt_search:
			'Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.',
		search_suggestion: 'Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:',
		searching: 'Cercando [SEARCH_TERM]...'
	},
	kr = { thanks_to: ct, comments: ft, direction: dt, strings: ht },
	mt = {}
F(mt, {
	comments: () => gt,
	default: () => Fr,
	direction: () => Ct,
	strings: () => pt,
	thanks_to: () => Et
})
var Et = 'Tate',
	gt = '',
	Ct = 'ltr',
	pt = {
		placeholder: '検索',
		clear_search: '消す',
		load_more: 'もっと読み込む',
		search_label: 'このサイトを検索',
		filters_label: 'フィルタ',
		zero_results: '[SEARCH_TERM]の検索に一致する件はありませんでした',
		many_results: '[SEARCH_TERM]の[COUNT]件の検索結果',
		one_result: '[SEARCH_TERM]の[COUNT]件の検索結果',
		alt_search:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています',
		search_suggestion:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。次のいずれかの検索を試してください',
		searching: '[SEARCH_TERM]を検索しています'
	},
	Fr = { thanks_to: Et, comments: gt, direction: Ct, strings: pt },
	Bt = {}
F(Bt, {
	comments: () => Rt,
	default: () => Mr,
	direction: () => At,
	strings: () => bt,
	thanks_to: () => vt
})
var vt = 'Paul van Brouwershaven',
	Rt = '',
	At = 'ltr',
	bt = {
		placeholder: 'Zoeken',
		clear_search: 'Reset',
		load_more: 'Meer resultaten laden',
		search_label: 'Doorzoek deze site',
		filters_label: 'Filters',
		zero_results: 'Geen resultaten voor [SEARCH_TERM]',
		many_results: '[COUNT] resultaten voor [SEARCH_TERM]',
		one_result: '[COUNT] resultaat voor [SEARCH_TERM]',
		alt_search:
			'Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven',
		search_suggestion:
			'Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:',
		searching: 'Zoeken naar [SEARCH_TERM]...'
	},
	Mr = { thanks_to: vt, comments: Rt, direction: At, strings: bt },
	Tt = {}
F(Tt, {
	comments: () => Ft,
	default: () => Sr,
	direction: () => Mt,
	strings: () => St,
	thanks_to: () => kt
})
var kt = 'Christopher Wingate',
	Ft = '',
	Mt = 'ltr',
	St = {
		placeholder: 'Søk',
		clear_search: 'Fjern',
		load_more: 'Last flere resultater',
		search_label: 'Søk på denne siden',
		filters_label: 'Filtre',
		zero_results: 'Ingen resultater for [SEARCH_TERM]',
		many_results: '[COUNT] resultater for [SEARCH_TERM]',
		one_result: '[COUNT] resultat for [SEARCH_TERM]',
		alt_search:
			'Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet',
		search_suggestion: 'Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:',
		searching: 'Søker etter [SEARCH_TERM]'
	},
	Sr = { thanks_to: kt, comments: Ft, direction: Mt, strings: St },
	Ht = {}
F(Ht, {
	comments: () => Dt,
	default: () => Hr,
	direction: () => Nt,
	strings: () => yt,
	thanks_to: () => wt
})
var wt = 'Jonatah',
	Dt = '',
	Nt = 'ltr',
	yt = {
		placeholder: 'Pesquisar',
		clear_search: 'Limpar',
		load_more: 'Ver mais resultados',
		search_label: 'Pesquisar',
		filters_label: 'Filtros',
		zero_results: 'Nenhum resultado encontrado para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:',
		searching: 'Pesquisando por [SEARCH_TERM]...'
	},
	Hr = { thanks_to: wt, comments: Dt, direction: Nt, strings: yt },
	jt = {}
F(jt, {
	comments: () => zt,
	default: () => wr,
	direction: () => Ut,
	strings: () => It,
	thanks_to: () => Ot
})
var Ot = 'Aleksandr Gordeev',
	zt = '',
	Ut = 'ltr',
	It = {
		placeholder: 'Поиск',
		clear_search: 'Очистить поле',
		load_more: 'Загрузить еще',
		search_label: 'Поиск по сайту',
		filters_label: 'Фильтры',
		zero_results: 'Ничего не найдено по запросу: [SEARCH_TERM]',
		many_results: '[COUNT] результатов по запросу: [SEARCH_TERM]',
		one_result: '[COUNT] результат по запросу: [SEARCH_TERM]',
		alt_search:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]',
		search_suggestion:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов',
		searching: 'Поиск по запросу: [SEARCH_TERM]'
	},
	wr = { thanks_to: Ot, comments: zt, direction: Ut, strings: It },
	Lt = {}
F(Lt, {
	comments: () => qt,
	default: () => Dr,
	direction: () => Vt,
	strings: () => Gt,
	thanks_to: () => Pt
})
var Pt = 'Andrija Sagicc',
	qt = '',
	Vt = 'ltr',
	Gt = {
		placeholder: 'Претрага',
		clear_search: 'Брисање',
		load_more: 'Приказ више резултата',
		search_label: 'Претрага сајта',
		filters_label: 'Филтери',
		zero_results: 'Нема резултата за [SEARCH_TERM]',
		many_results: '[COUNT] резултата за [SEARCH_TERM]',
		one_result: '[COUNT] резултата за [SEARCH_TERM]',
		alt_search: 'Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]',
		search_suggestion: 'Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:',
		searching: 'Претрага термина [SEARCH_TERM]...'
	},
	Dr = { thanks_to: Pt, comments: qt, direction: Vt, strings: Gt },
	Jt = {}
F(Jt, {
	comments: () => Wt,
	default: () => Nr,
	direction: () => Yt,
	strings: () => Zt,
	thanks_to: () => Kt
})
var Kt = 'Montazar Al-Jaber <montazar@nanawee.tech>',
	Wt = '',
	Yt = 'ltr',
	Zt = {
		placeholder: 'Sök',
		clear_search: 'Rensa',
		load_more: 'Visa fler träffar',
		search_label: 'Sök på denna sida',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] gav inga träffar',
		many_results: '[SEARCH_TERM] gav [COUNT] träffar',
		one_result: '[SEARCH_TERM] gav [COUNT] träff',
		alt_search: '[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället',
		search_suggestion: '[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:',
		searching: 'Söker efter [SEARCH_TERM]...'
	},
	Nr = { thanks_to: Kt, comments: Wt, direction: Yt, strings: Zt },
	Qt = {}
F(Qt, {
	comments: () => xt,
	default: () => yr,
	direction: () => $t,
	strings: () => el,
	thanks_to: () => Xt
})
var Xt = '',
	xt = '',
	$t = 'ltr',
	el = {
		placeholder: 'தேடுக',
		clear_search: 'அழிக்குக',
		load_more: 'மேலும் முடிவுகளைக் காட்டுக',
		search_label: 'இந்த தளத்தில் தேடுக',
		filters_label: 'வடிகட்டல்கள்',
		zero_results: '[SEARCH_TERM] க்கான முடிவுகள் இல்லை',
		many_results: '[SEARCH_TERM] க்கான [COUNT] முடிவுகள்',
		one_result: '[SEARCH_TERM] க்கான முடிவு',
		alt_search:
			'[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]',
		search_suggestion:
			'[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:',
		searching: '[SEARCH_TERM] தேடப்படுகின்றது'
	},
	yr = { thanks_to: Xt, comments: xt, direction: $t, strings: el },
	ul = {}
F(ul, {
	comments: () => ll,
	default: () => jr,
	direction: () => rl,
	strings: () => sl,
	thanks_to: () => tl
})
var tl = 'Taylan Özgür Bildik',
	ll = '',
	rl = 'ltr',
	sl = {
		placeholder: 'Araştır',
		clear_search: 'Temizle',
		load_more: 'Daha fazla sonuç',
		search_label: 'Site genelinde arama',
		filters_label: 'Filtreler',
		zero_results: '[SEARCH_TERM] için sonuç yok',
		many_results: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		one_result: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		alt_search:
			'[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor',
		search_suggestion:
			'[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:',
		searching: '[SEARCH_TERM] araştırılıyor...'
	},
	jr = { thanks_to: tl, comments: ll, direction: rl, strings: sl },
	nl = {}
F(nl, {
	comments: () => il,
	default: () => Or,
	direction: () => ol,
	strings: () => _l,
	thanks_to: () => al
})
var al = 'Amber Song',
	il = '',
	ol = 'ltr',
	_l = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	Or = { thanks_to: al, comments: il, direction: ol, strings: _l },
	cl = {}
F(cl, {
	comments: () => dl,
	default: () => zr,
	direction: () => hl,
	strings: () => ml,
	thanks_to: () => fl
})
var fl = 'Amber Song',
	dl = '',
	hl = 'ltr',
	ml = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加載更多結果',
		search_label: '站內搜索',
		filters_label: '篩選',
		zero_results: '未找到 [SEARCH_TERM] 的相關結果',
		many_results: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		one_result: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		alt_search: '未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相關結果。請嘗試以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	zr = { thanks_to: fl, comments: dl, direction: hl, strings: ml },
	El = {}
F(El, {
	comments: () => Cl,
	default: () => Ur,
	direction: () => pl,
	strings: () => Bl,
	thanks_to: () => gl
})
var gl = 'Amber Song',
	Cl = '',
	pl = 'ltr',
	Bl = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	Ur = { thanks_to: gl, comments: Cl, direction: pl, strings: Bl },
	Ir = [hu, pu, bu, Su, yu, Iu, Gu, Zu, et, st, _t, mt, Bt, Tt, Ht, jt, Lt, Jt, Qt, ul, nl, cl, El],
	Lr = Ir,
	Pr = [
		'../../translations/af.json',
		'../../translations/ca.json',
		'../../translations/de.json',
		'../../translations/en.json',
		'../../translations/es.json',
		'../../translations/fi.json',
		'../../translations/fr.json',
		'../../translations/gl.json',
		'../../translations/hi.json',
		'../../translations/id.json',
		'../../translations/it.json',
		'../../translations/ja.json',
		'../../translations/nl.json',
		'../../translations/no.json',
		'../../translations/pt.json',
		'../../translations/ru.json',
		'../../translations/sr.json',
		'../../translations/sv.json',
		'../../translations/ta.json',
		'../../translations/tr.json',
		'../../translations/zh-cn.json',
		'../../translations/zh-tw.json',
		'../../translations/zh.json'
	]
function ru(e, t, u) {
	const l = e.slice()
	return (l[47] = t[u]), l
}
function su(e) {
	let t, u, l
	function r(n) {
		e[33](n)
	}
	let s = {
		show_empty_filters: e[4],
		available_filters: e[16],
		translate: e[18],
		automatic_translations: e[17],
		translations: e[5]
	}
	return (
		e[7] !== void 0 && (s.selected_filters = e[7]),
		(t = new mr({ props: s })),
		re.push(() => Ql(t, 'selected_filters', r)),
		{
			c() {
				Ae(t.$$.fragment)
			},
			m(n, a) {
				de(t, n, a), (l = !0)
			},
			p(n, a) {
				const i = {}
				a[0] & 16 && (i.show_empty_filters = n[4]),
					a[0] & 65536 && (i.available_filters = n[16]),
					a[0] & 131072 && (i.automatic_translations = n[17]),
					a[0] & 32 && (i.translations = n[5]),
					!u && a[0] & 128 && ((u = !0), (i.selected_filters = n[7]), Jl(() => (u = !1))),
					t.$set(i)
			},
			i(n) {
				l || (N(t.$$.fragment, n), (l = !0))
			},
			o(n) {
				I(t.$$.fragment, n), (l = !1)
			},
			d(n) {
				he(t, n)
			}
		}
	)
}
function nu(e) {
	let t, u, l, r
	const s = [Vr, qr],
		n = []
	function a(i, h) {
		return i[12] ? 0 : 1
	}
	return (
		(u = a(e)),
		(l = n[u] = s[u](e)),
		{
			c() {
				;(t = R('div')), l.c(), E(t, 'class', 'pagefind-ui__results-area svelte-1d60ae3')
			},
			m(i, h) {
				b(i, t, h), n[u].m(t, null), (r = !0)
			},
			p(i, h) {
				let f = u
				;(u = a(i)),
					u === f
						? n[u].p(i, h)
						: (se(),
						  I(n[f], 1, 1, () => {
								n[f] = null
						  }),
						  ne(),
						  (l = n[u]),
						  l ? l.p(i, h) : ((l = n[u] = s[u](i)), l.c()),
						  N(l, 1),
						  l.m(t, null))
			},
			i(i) {
				r || (N(l), (r = !0))
			},
			o(i) {
				I(l), (r = !1)
			},
			d(i) {
				i && A(t), n[u].d()
			}
		}
	)
}
function qr(e) {
	let t,
		u,
		l,
		r = [],
		s = new Map(),
		n,
		a,
		i
	function h(m, d) {
		return m[11].results.length === 0 ? Kr : m[11].results.length === 1 ? Jr : Gr
	}
	let f = h(e),
		c = f(e),
		_ = e[11].results.slice(0, e[15])
	const C = (m) => m[47].id
	for (let m = 0; m < _.length; m += 1) {
		let d = ru(e, _, m),
			v = C(d)
		s.set(v, (r[m] = au(v, d)))
	}
	let o = e[11].results.length > e[15] && iu(e)
	return {
		c() {
			;(t = R('p')), c.c(), (u = k()), (l = R('ol'))
			for (let m = 0; m < r.length; m += 1) r[m].c()
			;(n = k()),
				o && o.c(),
				(a = x()),
				E(t, 'class', 'pagefind-ui__message svelte-1d60ae3'),
				E(l, 'class', 'pagefind-ui__results svelte-1d60ae3')
		},
		m(m, d) {
			b(m, t, d), c.m(t, null), b(m, u, d), b(m, l, d)
			for (let v = 0; v < r.length; v += 1) r[v] && r[v].m(l, null)
			b(m, n, d), o && o.m(m, d), b(m, a, d), (i = !0)
		},
		p(m, d) {
			f === (f = h(m)) && c ? c.p(m, d) : (c.d(1), (c = f(m)), c && (c.c(), c.m(t, null))),
				d[0] & 34830 &&
					((_ = m[11].results.slice(0, m[15])),
					se(),
					(r = Zl(r, d, C, 1, m, _, s, l, Yl, au, null, ru)),
					ne()),
				m[11].results.length > m[15]
					? o
						? o.p(m, d)
						: ((o = iu(m)), o.c(), o.m(a.parentNode, a))
					: o && (o.d(1), (o = null))
		},
		i(m) {
			if (!i) {
				for (let d = 0; d < _.length; d += 1) N(r[d])
				i = !0
			}
		},
		o(m) {
			for (let d = 0; d < r.length; d += 1) I(r[d])
			i = !1
		},
		d(m) {
			m && A(t), c.d(), m && A(u), m && A(l)
			for (let d = 0; d < r.length; d += 1) r[d].d()
			m && A(n), o && o.d(m), m && A(a)
		}
	}
}
function Vr(e) {
	let t,
		u = e[14] && ou(e)
	return {
		c() {
			u && u.c(), (t = x())
		},
		m(l, r) {
			u && u.m(l, r), b(l, t, r)
		},
		p(l, r) {
			l[14]
				? u
					? u.p(l, r)
					: ((u = ou(l)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		i: L,
		o: L,
		d(l) {
			u && u.d(l), l && A(t)
		}
	}
}
function Gr(e) {
	let t =
			e[18]('many_results', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(e[11].results.length)) +
			'',
		u
	return {
		c() {
			u = H(t)
		},
		m(l, r) {
			b(l, u, r)
		},
		p(l, r) {
			r[0] & 149536 &&
				t !==
					(t =
						l[18]('many_results', l[17], l[5])
							.replace(/\[SEARCH_TERM\]/, l[14])
							.replace(
								/\[COUNT\]/,
								new Intl.NumberFormat(l[5].language).format(l[11].results.length)
							) + '') &&
				y(u, t)
		},
		d(l) {
			l && A(u)
		}
	}
}
function Jr(e) {
	let t =
			e[18]('one_result', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(1)) + '',
		u
	return {
		c() {
			u = H(t)
		},
		m(l, r) {
			b(l, u, r)
		},
		p(l, r) {
			r[0] & 147488 &&
				t !==
					(t =
						l[18]('one_result', l[17], l[5])
							.replace(/\[SEARCH_TERM\]/, l[14])
							.replace(/\[COUNT\]/, new Intl.NumberFormat(l[5].language).format(1)) + '') &&
				y(u, t)
		},
		d(l) {
			l && A(u)
		}
	}
}
function Kr(e) {
	let t = e[18]('zero_results', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		u
	return {
		c() {
			u = H(t)
		},
		m(l, r) {
			b(l, u, r)
		},
		p(l, r) {
			r[0] & 147488 &&
				t !== (t = l[18]('zero_results', l[17], l[5]).replace(/\[SEARCH_TERM\]/, l[14]) + '') &&
				y(u, t)
		},
		d(l) {
			l && A(u)
		}
	}
}
function Wr(e) {
	let t, u
	return (
		(t = new sr({ props: { show_images: e[1], process_result: e[3], result: e[47] } })),
		{
			c() {
				Ae(t.$$.fragment)
			},
			m(l, r) {
				de(t, l, r), (u = !0)
			},
			p(l, r) {
				const s = {}
				r[0] & 2 && (s.show_images = l[1]),
					r[0] & 8 && (s.process_result = l[3]),
					r[0] & 34816 && (s.result = l[47]),
					t.$set(s)
			},
			i(l) {
				u || (N(t.$$.fragment, l), (u = !0))
			},
			o(l) {
				I(t.$$.fragment, l), (u = !1)
			},
			d(l) {
				he(t, l)
			}
		}
	)
}
function Yr(e) {
	let t, u
	return (
		(t = new cr({ props: { show_images: e[1], process_result: e[3], result: e[47] } })),
		{
			c() {
				Ae(t.$$.fragment)
			},
			m(l, r) {
				de(t, l, r), (u = !0)
			},
			p(l, r) {
				const s = {}
				r[0] & 2 && (s.show_images = l[1]),
					r[0] & 8 && (s.process_result = l[3]),
					r[0] & 34816 && (s.result = l[47]),
					t.$set(s)
			},
			i(l) {
				u || (N(t.$$.fragment, l), (u = !0))
			},
			o(l) {
				I(t.$$.fragment, l), (u = !1)
			},
			d(l) {
				he(t, l)
			}
		}
	)
}
function au(e, t) {
	let u, l, r, s, n
	const a = [Yr, Wr],
		i = []
	function h(f, c) {
		return f[2] ? 0 : 1
	}
	return (
		(l = h(t)),
		(r = i[l] = a[l](t)),
		{
			key: e,
			first: null,
			c() {
				;(u = x()), r.c(), (s = x()), (this.first = u)
			},
			m(f, c) {
				b(f, u, c), i[l].m(f, c), b(f, s, c), (n = !0)
			},
			p(f, c) {
				t = f
				let _ = l
				;(l = h(t)),
					l === _
						? i[l].p(t, c)
						: (se(),
						  I(i[_], 1, 1, () => {
								i[_] = null
						  }),
						  ne(),
						  (r = i[l]),
						  r ? r.p(t, c) : ((r = i[l] = a[l](t)), r.c()),
						  N(r, 1),
						  r.m(s.parentNode, s))
			},
			i(f) {
				n || (N(r), (n = !0))
			},
			o(f) {
				I(r), (n = !1)
			},
			d(f) {
				f && A(u), i[l].d(f), f && A(s)
			}
		}
	)
}
function iu(e) {
	let t,
		u = e[18]('load_more', e[17], e[5]) + '',
		l,
		r,
		s
	return {
		c() {
			;(t = R('button')),
				(l = H(u)),
				E(t, 'type', 'button'),
				E(t, 'class', 'pagefind-ui__button svelte-1d60ae3')
		},
		m(n, a) {
			b(n, t, a), B(t, l), r || ((s = J(t, 'click', e[20])), (r = !0))
		},
		p(n, a) {
			a[0] & 131104 && u !== (u = n[18]('load_more', n[17], n[5]) + '') && y(l, u)
		},
		d(n) {
			n && A(t), (r = !1), s()
		}
	}
}
function ou(e) {
	let t,
		u = e[18]('searching', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		l
	return {
		c() {
			;(t = R('p')), (l = H(u)), E(t, 'class', 'pagefind-ui__message svelte-1d60ae3')
		},
		m(r, s) {
			b(r, t, s), B(t, l)
		},
		p(r, s) {
			s[0] & 147488 &&
				u !== (u = r[18]('searching', r[17], r[5]).replace(/\[SEARCH_TERM\]/, r[14]) + '') &&
				y(l, u)
		},
		d(r) {
			r && A(t)
		}
	}
}
function Zr(e) {
	let t,
		u,
		l,
		r,
		s,
		n,
		a = e[18]('clear_search', e[17], e[5]) + '',
		i,
		h,
		f,
		c,
		_,
		C,
		o,
		m,
		d = e[10] && su(e),
		v = e[13] && nu(e)
	return {
		c() {
			;(t = R('div')),
				(u = R('form')),
				(l = R('input')),
				(s = k()),
				(n = R('button')),
				(i = H(a)),
				(h = k()),
				(f = R('div')),
				d && d.c(),
				(c = k()),
				v && v.c(),
				E(l, 'class', 'pagefind-ui__search-input svelte-1d60ae3'),
				E(l, 'type', 'text'),
				E(l, 'placeholder', (r = e[18]('placeholder', e[17], e[5]))),
				E(l, 'autocapitalize', 'none'),
				E(l, 'enterkeyhint', 'search'),
				E(n, 'class', 'pagefind-ui__search-clear svelte-1d60ae3'),
				V(n, 'pagefind-ui__suppressed', !e[6]),
				E(f, 'class', 'pagefind-ui__drawer svelte-1d60ae3'),
				V(f, 'pagefind-ui__hidden', !e[13]),
				E(u, 'class', 'pagefind-ui__form svelte-1d60ae3'),
				E(u, 'role', 'search'),
				E(u, 'aria-label', (_ = e[18]('search_label', e[17], e[5]))),
				E(u, 'action', 'javascript:void(0);'),
				E(t, 'class', 'pagefind-ui svelte-1d60ae3'),
				V(t, 'pagefind-ui--reset', e[0])
		},
		m(p, T) {
			b(p, t, T),
				B(t, u),
				B(u, l),
				we(l, e[6]),
				e[30](l),
				B(u, s),
				B(u, n),
				B(n, i),
				e[31](n),
				B(u, h),
				B(u, f),
				d && d.m(f, null),
				B(f, c),
				v && v.m(f, null),
				(C = !0),
				o ||
					((m = [
						J(l, 'focus', e[19]),
						J(l, 'keydown', e[28]),
						J(l, 'input', e[29]),
						J(n, 'click', e[32]),
						J(u, 'submit', Qr)
					]),
					(o = !0))
		},
		p(p, T) {
			;(!C || (T[0] & 131104 && r !== (r = p[18]('placeholder', p[17], p[5])))) &&
				E(l, 'placeholder', r),
				T[0] & 64 && l.value !== p[6] && we(l, p[6]),
				(!C || T[0] & 131104) && a !== (a = p[18]('clear_search', p[17], p[5]) + '') && y(i, a),
				(!C || T[0] & 64) && V(n, 'pagefind-ui__suppressed', !p[6]),
				p[10]
					? d
						? (d.p(p, T), T[0] & 1024 && N(d, 1))
						: ((d = su(p)), d.c(), N(d, 1), d.m(f, c))
					: d &&
					  (se(),
					  I(d, 1, 1, () => {
							d = null
					  }),
					  ne()),
				p[13]
					? v
						? (v.p(p, T), T[0] & 8192 && N(v, 1))
						: ((v = nu(p)), v.c(), N(v, 1), v.m(f, null))
					: v &&
					  (se(),
					  I(v, 1, 1, () => {
							v = null
					  }),
					  ne()),
				(!C || T[0] & 8192) && V(f, 'pagefind-ui__hidden', !p[13]),
				(!C || (T[0] & 131104 && _ !== (_ = p[18]('search_label', p[17], p[5])))) &&
					E(u, 'aria-label', _),
				(!C || T[0] & 1) && V(t, 'pagefind-ui--reset', p[0])
		},
		i(p) {
			C || (N(d), N(v), (C = !0))
		},
		o(p) {
			I(d), I(v), (C = !1)
		},
		d(p) {
			p && A(t), e[30](null), e[31](null), d && d.d(), v && v.d(), (o = !1), W(m)
		}
	}
}
var Qr = (e) => e.preventDefault()
function Xr(e, t, u) {
	const l = {},
		r = Pr.map((g) => g.match(/([^\/]+)\.json$/)[1])
	for (let g = 0; g < r.length; g++) l[r[g]] = { language: r[g], ...Lr[g].strings }
	let { base_path: s = '/pagefind/' } = t,
		{ reset_styles: n = !0 } = t,
		{ show_images: a = !0 } = t,
		{ show_sub_results: i = !1 } = t,
		{ excerpt_length: h } = t,
		{ process_result: f = null } = t,
		{ process_term: c = null } = t,
		{ show_empty_filters: _ = !0 } = t,
		{ debounce_timeout_ms: C = 300 } = t,
		{ pagefind_options: o = {} } = t,
		{ merge_index: m = [] } = t,
		{ trigger_search_term: d = '' } = t,
		{ translations: v = {} } = t,
		p = '',
		T,
		S,
		G,
		$ = 40,
		M = !1,
		z = [],
		j = !1,
		P = !1,
		be = 0,
		Te = '',
		ge = 5,
		ke = null,
		ee = null,
		ie = {},
		Fe = l.en
	const vl = (g, w, D) => D[g] ?? w[g] ?? ''
	ql(() => {
		let g = document?.querySelector?.('html')?.getAttribute?.('lang') || 'en',
			w = du(g.toLocaleLowerCase())
		u(
			17,
			(Fe =
				l[`${w.language}-${w.script}-${w.region}`] ||
				l[`${w.language}-${w.region}`] ||
				l[`${w.language}`] ||
				l.en)
		)
	})
	const Me = async () => {
			if (!M && (u(10, (M = !0)), !T)) {
				let g
				try {
					g = await jl(() => import(`${s}pagefind.js`), [])
				} catch (D) {
					console.error(D),
						console.error(
							[
								`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
								'You can configure this by passing a bundlePath option to PagefindUI',
								`[DEBUG: Loaded from ${document?.currentScript?.src ?? 'no known script location'}]`
							].join(`
`)
						)
				}
				h || u(22, (h = i ? 12 : 30))
				let w = { ...(o || {}), excerptLength: h }
				await g.options(w)
				for (const D of m) {
					if (!D.bundlePath) throw new Error('mergeIndex requires a bundlePath parameter')
					const U = D.bundlePath
					delete D.bundlePath, await g.mergeIndex(U, D)
				}
				;(T = g), Rl()
			}
		},
		Rl = async () => {
			T && ((ke = await T.filters()), (!ee || !Object.keys(ee).length) && u(16, (ee = ke)))
		},
		Al = (g) => {
			let w = {}
			return (
				Object.entries(g)
					.filter(([, D]) => D)
					.forEach(([D]) => {
						let [U, yl] = D.split(/:(.*)$/)
						;(w[U] = w[U] || []), w[U].push(yl)
					}),
				w
			)
		}
	let ue
	const bl = async (g, w) => {
			if (!g) {
				u(13, (P = !1)), ue && clearTimeout(ue)
				return
			}
			const D = Al(w),
				U = () => Tl(g, D)
			C > 0 && g
				? (ue && clearTimeout(ue),
				  (ue = setTimeout(U, C)),
				  await Se(),
				  T.preload(g, { filters: D }))
				: U(),
				kl()
		},
		Se = async () => {
			for (; !T; ) Me(), await new Promise((g) => setTimeout(g, 50))
		},
		Tl = async (g, w) => {
			u(14, (Te = g || '')),
				typeof c == 'function' && (g = c(g)),
				u(12, (j = !0)),
				u(13, (P = !0)),
				await Se()
			const D = ++be,
				U = await T.search(g, { filters: w })
			be === D &&
				(U.filters && Object.keys(U.filters)?.length && u(16, (ee = U.filters)),
				u(11, (z = U)),
				u(12, (j = !1)),
				u(15, (ge = 5)))
		},
		kl = () => {
			const g = G.offsetWidth
			g != $ && u(8, (S.style.paddingRight = `${g + 2}px`), S)
		},
		Fl = (g) => {
			g?.preventDefault(), u(15, (ge += 5))
		},
		Ml = (g) => {
			g.key === 'Escape' && (u(6, (p = '')), S.blur()), g.key === 'Enter' && g.preventDefault()
		}
	function Sl() {
		;(p = this.value), u(6, p), u(21, d)
	}
	function Hl(g) {
		re[g ? 'unshift' : 'push'](() => {
			;(S = g), u(8, S)
		})
	}
	function wl(g) {
		re[g ? 'unshift' : 'push'](() => {
			;(G = g), u(9, G)
		})
	}
	const Dl = () => {
		u(6, (p = '')), S.blur()
	}
	function Nl(g) {
		;(ie = g), u(7, ie)
	}
	return (
		(e.$$set = (g) => {
			'base_path' in g && u(23, (s = g.base_path)),
				'reset_styles' in g && u(0, (n = g.reset_styles)),
				'show_images' in g && u(1, (a = g.show_images)),
				'show_sub_results' in g && u(2, (i = g.show_sub_results)),
				'excerpt_length' in g && u(22, (h = g.excerpt_length)),
				'process_result' in g && u(3, (f = g.process_result)),
				'process_term' in g && u(24, (c = g.process_term)),
				'show_empty_filters' in g && u(4, (_ = g.show_empty_filters)),
				'debounce_timeout_ms' in g && u(25, (C = g.debounce_timeout_ms)),
				'pagefind_options' in g && u(26, (o = g.pagefind_options)),
				'merge_index' in g && u(27, (m = g.merge_index)),
				'trigger_search_term' in g && u(21, (d = g.trigger_search_term)),
				'translations' in g && u(5, (v = g.translations))
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 2097152 && d && (u(6, (p = d)), u(21, (d = ''))),
				e.$$.dirty[0] & 192 && bl(p, ie)
		}),
		[
			n,
			a,
			i,
			f,
			_,
			v,
			p,
			ie,
			S,
			G,
			M,
			z,
			j,
			P,
			Te,
			ge,
			ee,
			Fe,
			vl,
			Me,
			Fl,
			d,
			h,
			s,
			c,
			C,
			o,
			m,
			Ml,
			Sl,
			Hl,
			wl,
			Dl,
			Nl
		]
	)
}
var xr = class extends Ee {
		constructor(e) {
			super(),
				me(
					this,
					e,
					Xr,
					Zr,
					fe,
					{
						base_path: 23,
						reset_styles: 0,
						show_images: 1,
						show_sub_results: 2,
						excerpt_length: 22,
						process_result: 3,
						process_term: 24,
						show_empty_filters: 4,
						debounce_timeout_ms: 25,
						pagefind_options: 26,
						merge_index: 27,
						trigger_search_term: 21,
						translations: 5
					},
					null,
					[-1, -1]
				)
		}
	},
	$r = xr,
	Re
try {
	Re = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]
} catch {
	Re = '/pagefind/'
}
var us = class {
	constructor(e) {
		this._pfs = null
		let t = e.element ?? '[data-pagefind-ui]',
			u = e.bundlePath ?? Re,
			l = e.resetStyles ?? !0,
			r = e.showImages ?? !0,
			s = e.showSubResults ?? !1,
			n = e.excerptLength ?? 0,
			a = e.processResult ?? null,
			i = e.processTerm ?? null,
			h = e.showEmptyFilters ?? !0,
			f = e.debounceTimeoutMs ?? 300,
			c = e.mergeIndex ?? [],
			_ = e.translations ?? []
		delete e.element,
			delete e.bundlePath,
			delete e.resetStyles,
			delete e.showImages,
			delete e.showSubResults,
			delete e.excerptLength,
			delete e.processResult,
			delete e.processTerm,
			delete e.showEmptyFilters,
			delete e.debounceTimeoutMs,
			delete e.mergeIndex,
			delete e.translations
		const C = t instanceof HTMLElement ? t : document.querySelector(t)
		C
			? (this._pfs = new $r({
					target: C,
					props: {
						base_path: u,
						reset_styles: l,
						show_images: r,
						show_sub_results: s,
						excerpt_length: n,
						process_result: a,
						process_term: i,
						show_empty_filters: h,
						debounce_timeout_ms: f,
						merge_index: c,
						translations: _,
						pagefind_options: e
					}
			  }))
			: console.error(`Pagefind UI couldn't find the selector ${t}`)
	}
	triggerSearch(e) {
		this._pfs.$$set({ trigger_search_term: e })
	}
}
export { us as PagefindUI }
