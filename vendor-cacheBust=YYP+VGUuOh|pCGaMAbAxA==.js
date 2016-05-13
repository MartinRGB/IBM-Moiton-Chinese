/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = a.document,
		m = "2.1.4",
		n = function(a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return d.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a, b) {
			return n.each(this, a, b)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray,
		isWindow: function(a) {
			return null != a && a === a.window
		},
		isNumeric: function(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function(a) {
			var b, c = eval;
			a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, c) {
			var d, e = 0,
				f = a.length,
				g = s(a);
			if (c) {
				if (g) {
					for (; f > e; e++)
						if (d = b.apply(a[e], c), d === !1) break
				} else
					for (e in a)
						if (d = b.apply(a[e], c), d === !1) break
			} else if (g) {
				for (; f > e; e++)
					if (d = b.call(a[e], e, a[e]), d === !1) break
			} else
				for (e in a)
					if (d = b.call(a[e], e, a[e]), d === !1) break; return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function(a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
		},
		merge: function(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, c) {
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if (h)
				for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else
				for (f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
		},
		now: Date.now,
		support: k
	}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ha(),
			z = ha(),
			A = ha(),
			B = function(a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function(a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = M.replace("w", "w#"),
			O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
			P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
			Q = new RegExp(L + "+", "g"),
			R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			S = new RegExp("^" + L + "*," + L + "*"),
			T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			V = new RegExp(P),
			W = new RegExp("^" + N + "$"),
			X = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + O),
				PSEUDO: new RegExp("^" + P),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			$ = /^[^{]+\{\s*\[native \w/,
			_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			aa = /[+~]/,
			ba = /'|\\/g,
			ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			da = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			ea = function() {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (fa) {
			H = {
				apply: E.length ? function(a, b) {
					G.apply(a, I.call(b))
				} : function(a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
			if (!e && p) {
				if (11 !== k && (f = _.exec(a)))
					if (j = f[1]) {
						if (9 === k) {
							if (h = b.getElementById(j), !h || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
					}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--) o[l] = s + ra(o[l]);
						w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
					}
					if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d
					} catch (y) {} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"),
				e = a.length;
			while (e--) d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) return d;
			if (c)
				while (c = c.nextSibling)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return ia(function(b) {
				return b = +b, ia(function(c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = ga.support = {}, f = ga.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = ga.setDocument = function(a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function(a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function(a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function(a) {
				var b = a.replace(ca, da);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function(a) {
				var b = a.replace(ca, da);
				return function(a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function(a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function(a, b) {
				return p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function(a) {
				var b = g.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if (b)
					while (b = b.parentNode)
						if (b === a) return !0;
				return !1
			}, B = b ? function(a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function(a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					h = [a],
					i = [b];
				if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f) return la(a, b);
				c = a;
				while (c = c.parentNode) h.unshift(c);
				c = b;
				while (c = c.parentNode) i.unshift(c);
				while (h[d] === i[d]) d++;
				return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, g) : n
		}, ga.matches = function(a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function(a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function(a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function(a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function(a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));
				while (e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function(a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				while (b = a[d++]) c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(ca, da).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, b, c) {
					return function(d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								while (p) {
									l = b;
									while (l = l[p])
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
							else
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function(a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function(a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function(a) {
					var b = [],
						c = [],
						d = h(a.replace(R, "$1"));
					return d[u] ? ia(function(a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ia(function(a) {
					return function(b) {
						return ga(a, b).length > 0
					}
				}),
				contains: ia(function(a) {
					return a = a.replace(ca, da),
						function(b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ia(function(a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
						function(b) {
							var c;
							do
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === o
				},
				focus: function(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function(a) {
					return !d.pseudos.empty(a)
				},
				header: function(a) {
					return Z.test(a.nodeName)
				},
				input: function(a) {
					return Y.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: oa(function() {
					return [0]
				}),
				last: oa(function(a, b) {
					return [b - 1]
				}),
				eq: oa(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: oa(function(a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: oa(function(a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: oa(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: oa(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = ma(b);
		for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

		function qa() {}
		qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};

		function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function sa(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function(b, c, f) {
				while (b = b[d])
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function(b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					while (b = b[d])
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while (b = b[d])
						if (1 === b.nodeType || e) {
							if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function ta(a) {
			return a.length > 1 ? function(b, c, d) {
				var e = a.length;
				while (e--)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
			return c
		}

		function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ua(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : va(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
					return a === b
				}, h, !0), l = sa(function(a) {
					return J(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++)
							if (d.relative[a[e].type]) break;
						return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
					}
					m.push(c)
				}
			return ta(m)
		}

		function ya(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function(f, g, h, i, k) {
					var l, m, o, p = 0,
						q = "0",
						r = f && [],
						s = [],
						t = j,
						u = f || e && d.find.TAG("*", k),
						v = w += null == t ? 1 : Math.random() || .1,
						x = u.length;
					for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if (e && l) {
							m = 0;
							while (o = a[m++])
								if (o(l, g, h)) {
									i.push(l);
									break
								}
							k && (w = v)
						}
						c && ((l = !o && l) && p--, f && r.push(l))
					}
					if (p += q, c && q !== p) {
						m = 0;
						while (o = b[m++]) o(r, s, g, h);
						if (f) {
							if (p > 0)
								while (q--) r[q] || s[q] || (s[q] = F.call(i));
							s = va(s)
						}
						H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
					}
					return k && (w = v, j = t), r
				};
			return c ? ia(f) : f
		}
		return h = ga.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, ya(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function(a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ja(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function(a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function(a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ja(function(a) {
			return null == a.getAttribute("disabled")
		}) || ka(K, function(a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return g.call(b, a) >= 0 !== c
		})
	}
	n.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function(a) {
			var b, c = this.length,
				d = [],
				e = this;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
				for (b = 0; c > b; b++)
					if (n.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) n.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function(a) {
			return this.pushStack(x(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(x(this, a || [], !0))
		},
		is: function(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
		}
	});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		A = n.fn.init = function(a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
						for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	A.prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.extend({
		dir: function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType)
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), n.fn.extend({
		has: function(a) {
			var b = n(a, this),
				c = b.length;
			return this.filter(function() {
				for (var a = 0; c > a; a++)
					if (n.contains(this, b[a])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? n.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return n.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return n.dir(a, "parentNode", c)
		},
		next: function(a) {
			return D(a, "nextSibling")
		},
		prev: function(a) {
			return D(a, "previousSibling")
		},
		nextAll: function(a) {
			return n.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return n.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return n.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return n.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return n.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return n.sibling(a.firstChild)
		},
		contents: function(a) {
			return a.contentDocument || n.merge([], a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function(l) {
				for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
					if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break
					}
				d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
			},
			k = {
				add: function() {
					if (h) {
						var c = h.length;
						! function g(b) {
							n.each(b, function(b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
							})
						}(arguments), d ? f = h.length : b && (e = c, j(b))
					}
					return this
				},
				remove: function() {
					return h && n.each(arguments, function(a, b) {
						var c;
						while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function() {
					return h = [], f = 0, this
				},
				disable: function() {
					return h = i = b = void 0, this
				},
				disabled: function() {
					return !h
				},
				lock: function() {
					return i = void 0, b || k.disable(), this
				},
				locked: function() {
					return !i
				},
				fireWith: function(a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
				},
				fire: function() {
					return k.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return k
	}, n.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return n.Deferred(function(c) {
							n.each(b, function(b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (e > 1)
				for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
		}
	});

	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}
	n.ready.promise = function(b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function(a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === n.type(c)) {
			e = !0;
			for (h in c) n.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(n(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	n.acceptData = function(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};

	function K() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = n.expando + K.uid++
	}
	K.uid = 1, K.accepts = n.acceptData, K.prototype = {
		key: function(a) {
			if (!K.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = K.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, n.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function(a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function(a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function(a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function(a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
				while (c--) delete g[d[c]]
			}
		},
		hasData: function(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function(a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var L = new K,
		M = new K,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				M.set(a, b, c)
			} else c = void 0;
		return c
	}
	n.extend({
		hasData: function(a) {
			return M.hasData(a) || L.hasData(a)
		},
		data: function(a, b, c) {
			return M.access(a, b, c)
		},
		removeData: function(a, b) {
			M.remove(a, b)
		},
		_data: function(a, b, c) {
			return L.access(a, b, c)
		},
		_removeData: function(a, b) {
			L.remove(a, b)
		}
	}), n.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					L.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				M.set(this, a)
			}) : J(this, function(b) {
				var c, d = n.camelCase(a);
				if (f && void 0 === b) {
					if (c = M.get(f, a), void 0 !== c) return c;
					if (c = M.get(f, d), void 0 !== c) return c;
					if (c = P(f, d, void 0), void 0 !== c) return c
				} else this.each(function() {
					var c = M.get(this, d);
					M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				M.remove(this, a)
			})
		}
	}), n.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function() {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return L.get(a, c) || L.access(a, c, {
				empty: n.Callbacks("once memory").add(function() {
					L.remove(a, [b + "queue", c])
				})
			})
		}
	}), n.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				n.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = ["Top", "Right", "Bottom", "Left"],
		S = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		},
		T = /^(?:checkbox|radio)$/i;
	! function() {
		var a = l.createDocumentFragment(),
			b = a.appendChild(l.createElement("div")),
			c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin" in a;
	var V = /^key/,
		W = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Y = /^([^.]*)(?:\.(.+)|)$/;

	function Z() {
		return !0
	}

	function $() {
		return !1
	}

	function _() {
		try {
			return l.activeElement
		} catch (a) {}
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
			if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
				}), b = (b || "").match(E) || [""], j = b.length;
				while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
			if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)
					if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
						while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
					} else
						for (o in i) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
			}
		},
		trigger: function(b, c, d, e) {
			var f, g, h, i, k, m, o, p = [d || l],
				q = j.call(b, "type") ? b.type : b,
				r = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
					h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
				}
				f = 0;
				while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (L.get(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[n.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
			while (b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		isDefaultPrevented: $,
		isPropagationStopped: $,
		isImmediatePropagationStopped: $,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.focusinBubbles || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0)
		};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b);
				e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b) - 1;
				e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
			else if (!d) return this;
			return 1 === e && (f = d, d = function(a) {
				return n().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
				n.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ba = /<([\w:]+)/,
		ca = /<|&#?\w+;/,
		da = /<(?:script|style|link)/i,
		ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
		fa = /^$|\/(?:java|ecma)script/i,
		ga = /^true\/(.*)/,
		ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ia = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

	function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function la(a) {
		var b = ga.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}

	function na(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}

	function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}

	function pa(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}
	n.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = n.contains(a.ownerDocument, a);
			if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
				for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
				else na(a, h);
			return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
					else if (ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
				while (j--) f = f.lastChild;
				n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			k.textContent = "", m = 0;
			while (e = l[m++])
				if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
					j = 0;
					while (e = f[j++]) fa.test(e.type || "") && c.push(e)
				}
			return k
		},
		cleanData: function(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events)
						for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					L.cache[e] && delete L.cache[e]
				}
				delete M.cache[c[M.expando]]
			}
		}
	}), n.fn.extend({
		text: function(a) {
			return J(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return J(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = arguments[0];
			return this.domManip(arguments, function(b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				m = this,
				o = l - 1,
				p = a[0],
				q = n.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
				var d = m.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				if (g)
					for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
			}
			return this
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qa, ra = {};

	function sa(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}

	function ta(a) {
		var b = l,
			c = ra[a];
		return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
	}
	var ua = /^margin/,
		va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		wa = function(b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};

	function xa(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function ya(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}! function() {
		var b, c, d = l.documentElement,
			e = l.createElement("div"),
			f = l.createElement("div");
		if (f.style) {
			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

			function g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
				var g = a.getComputedStyle(f, null);
				b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
			}
			a.getComputedStyle && n.extend(k, {
				pixelPosition: function() {
					return g(), b
				},
				boxSizingReliable: function() {
					return null == c && g(), c
				},
				reliableMarginRight: function() {
					var b, c = f.appendChild(l.createElement("div"));
					return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
				}
			})
		}
	}(), n.swap = function(a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var za = /^(none|table(?!-c[ea]).+)/,
		Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
		Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
		Ca = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Da = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ea = ["Webkit", "O", "Moz", "ms"];

	function Fa(a, b) {
		if (b in a) return b;
		var c = b[0].toUpperCase() + b.slice(1),
			d = b,
			e = Ea.length;
		while (e--)
			if (b = Ea[e] + c, b in a) return b;
		return d
	}

	function Ga(a, b, c) {
		var d = Aa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}

	function Ia(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = wa(a),
			g = "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = xa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
					return Ia(a, b, d)
				}) : Ia(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && wa(a);
				return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
		return b ? n.swap(a, {
			display: "inline-block"
		}, xa, [a, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, ua.test(a) || (n.cssHooks[a + b].set = Ga)
	}), n.fn.extend({
		css: function(a, b) {
			return J(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return Ja(this, !0)
		},
		hide: function() {
			return Ja(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				S(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e)
	}
	n.Tween = Ka, Ka.prototype = {
		constructor: Ka,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = Ka.propHooks[this.prop];
			return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = Ka.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
		}
	}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, n.fx = Ka.prototype.init, n.fx.step = {};
	var La, Ma, Na = /^(?:toggle|show|hide)$/,
		Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		Pa = /queueHooks$/,
		Qa = [Va],
		Ra = {
			"*": [function(a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = Oa.exec(b),
					f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
					g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};

	function Sa() {
		return setTimeout(function() {
			La = void 0
		}), La = n.now()
	}

	function Ta(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function Va(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			o = a.style,
			p = a.nodeType && S(a),
			q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, l.always(function() {
			l.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], Na.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;
					p = !0
				}
				m[d] = q && q[d] || n.style(a, d)
			} else j = void 0;
		if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
		else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
				n(a).hide()
			}), l.done(function() {
				var b;
				L.remove(a, "fxshow");
				for (b in m) n.style(a, b, m[b])
			});
			for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function Wa(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function Xa(a, b, c) {
		var d, e, f = 0,
			g = Qa.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: La || Sa(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (Wa(k, j.opts.specialEasing); g > f; f++)
			if (d = Qa[f].call(j, a, k, j.opts)) return d;
		return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(Xa, {
			tweener: function(a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
			},
			prefilter: function(a, b) {
				b ? Qa.unshift(a) : Qa.push(a)
			}
		}), n.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
			}, d
		}, n.fn.extend({
			fadeTo: function(a, b, c, d) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function() {
						var b = Xa(this, n.extend({}, a), f);
						(e || L.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
				var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = L.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && n.dequeue(this, a)
				})
			},
			finish: function(a) {
				return a !== !1 && (a = a || "fx"), this.each(function() {
					var b, c = L.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function(a, b) {
			var c = n.fn[b];
			n.fn[b] = function(a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
			}
		}), n.each({
			slideDown: Ta("show"),
			slideUp: Ta("hide"),
			slideToggle: Ta("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			n.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function() {
			var a, b = 0,
				c = n.timers;
			for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || n.fx.stop(), La = void 0
		}, n.fx.timer = function(a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function() {
			Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function() {
			clearInterval(Ma), Ma = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function(a, b) {
			return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		function() {
			var a = l.createElement("input"),
				b = l.createElement("select"),
				c = b.appendChild(l.createElement("option"));
			a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
		}();
	var Ya, Za, $a = n.expr.attrHandle;
	n.fn.extend({
		attr: function(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
				void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType)
				while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), Za = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = $a[b] || n.find.attr;
		$a[b] = function(a, b, d) {
			var e, f;
			return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
		}
	});
	var _a = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[n.propFix[a] || a]
			})
		}
	}), n.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), k.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	});
	var ab = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
						f = 0;
						while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = n.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
						f = 0;
						while (e = b[f++])
							while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
						g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if ("string" === c) {
					var b, d = 0,
						e = n(this),
						f = a.match(E) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var bb = /\r/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		n.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var cb = n.now(),
		db = /\?/;
	n.parseJSON = function(a) {
		return JSON.parse(a + "")
	}, n.parseXML = function(a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var eb = /#.*$/,
		fb = /([?&])_=[^&]*/,
		gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ib = /^(?:GET|HEAD)$/,
		jb = /^\/\//,
		kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		lb = {},
		mb = {},
		nb = "*/".concat("*"),
		ob = a.location.href,
		pb = kb.exec(ob.toLowerCase()) || [];

	function qb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (n.isFunction(c))
				while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function rb(a, b, c, d) {
		var e = {},
			f = a === mb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function sb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}

	function tb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function ub(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ob,
			type: "GET",
			isLocal: hb.test(pb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": nb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
		},
		ajaxPrefilter: qb(lb),
		ajaxTransport: qb(mb),
		ajax: function(a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
				l = k.context || k,
				m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				o = n.Deferred(),
				p = n.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === t) {
							if (!f) {
								f = {};
								while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
							}
							b = f[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === t ? e : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function(a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function(a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
			i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
			for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (j in {
					success: 1,
					error: 1,
					complete: 1
				}) v[j](k[j]);
			if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, c.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, f, h) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), n._evalUrl = function(a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(a) {
			var b;
			return n.isFunction(a) ? this.each(function(b) {
				n(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				var a = this;
				while (a.firstElementChild) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function(a) {
			return this.each(n.isFunction(a) ? function(b) {
				n(this).wrapInner(a.call(this, b))
			} : function() {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = n.isFunction(a);
			return this.each(function(c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	}), n.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var vb = /%20/g,
		wb = /\[\]$/,
		xb = /\r?\n/g,
		yb = /^(?:submit|button|image|reset|file)$/i,
		zb = /^(?:input|select|textarea|keygen)/i;

	function Ab(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function(b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else
			for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
			e(this.name, this.value)
		});
		else
			for (c in a) Ab(c, a[c], b, e);
		return d.join("&").replace(vb, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(xb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(xb, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Bb = 0,
		Cb = {},
		Db = {
			0: 200,
			1223: 204
		},
		Eb = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in Cb) Cb[a]()
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
		var b;
		return k.cors || Eb && !a.crossDomain ? {
			send: function(c, d) {
				var e, f = a.xhr(),
					g = ++Bb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function(a) {
					return function() {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function() {
				b && b()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), n.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function(d, e) {
					b = n("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), l.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var Fb = [],
		Gb = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Fb.pop() || n.expando + "_" + cb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Hb = n.fn.load;
	n.fn.load = function(a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c && function(a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		n.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function(a) {
		return n.grep(n.timers, function(b) {
			return a === b.elem
		}).length
	};
	var Ib = a.document.documentElement;

	function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e
		},
		position: function() {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - n.css(c, "marginTop", !0),
					left: b.left - d.left - n.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || Ib;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Ib
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function(e) {
			return J(this, function(b, e, f) {
				var g = Jb(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			n.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return J(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R, W, u) {
	'use strict';

	function S(b) {
		return function() {
			var a = arguments[0],
				c;
			c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.20/" + (b ? b + "/" : "") + a;
			for (a = 1; a < arguments.length; a++) {
				c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
				var d = encodeURIComponent,
					e;
				e = arguments[a];
				e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
				c += d(e)
			}
			return Error(c)
		}
	}

	function Ta(b) {
		if (null == b || Ua(b)) return !1;
		var a = "length" in Object(b) && b.length;
		return b.nodeType === qa && a ? !0 : x(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
	}

	function r(b, a, c) {
		var d, e;
		if (b)
			if (z(b))
				for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
			else if (H(b) || Ta(b)) {
			var f = "object" !== typeof b;
			d = 0;
			for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
		} else if (b.forEach && b.forEach !== r) b.forEach(a, c, b);
		else
			for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
		return b
	}

	function Ed(b, a, c) {
		for (var d = Object.keys(b).sort(),
				e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
		return d
	}

	function lc(b) {
		return function(a, c) {
			b(c, a)
		}
	}

	function Fd() {
		return ++rb
	}

	function mc(b, a) {
		a ? b.$$hashKey = a : delete b.$$hashKey
	}

	function w(b) {
		for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
			var e = arguments[c];
			if (e)
				for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
					var l = f[g];
					b[l] = e[l]
				}
		}
		mc(b, a);
		return b
	}

	function aa(b) {
		return parseInt(b, 10)
	}

	function Ob(b, a) {
		return w(Object.create(b), a)
	}

	function A() {}

	function ra(b) {
		return b
	}

	function ea(b) {
		return function() {
			return b
		}
	}

	function D(b) {
		return "undefined" === typeof b
	}

	function y(b) {
		return "undefined" !== typeof b
	}

	function L(b) {
		return null !== b && "object" === typeof b
	}

	function x(b) {
		return "string" === typeof b
	}

	function Y(b) {
		return "number" === typeof b
	}

	function ha(b) {
		return "[object Date]" === Ca.call(b)
	}

	function z(b) {
		return "function" === typeof b
	}

	function Va(b) {
		return "[object RegExp]" === Ca.call(b)
	}

	function Ua(b) {
		return b && b.window === b
	}

	function Wa(b) {
		return b && b.$evalAsync && b.$watch
	}

	function Xa(b) {
		return "boolean" === typeof b
	}

	function nc(b) {
		return !(!b ||
			!(b.nodeName || b.prop && b.attr && b.find))
	}

	function Gd(b) {
		var a = {};
		b = b.split(",");
		var c;
		for (c = 0; c < b.length; c++) a[b[c]] = !0;
		return a
	}

	function wa(b) {
		return K(b.nodeName || b[0] && b[0].nodeName)
	}

	function Ya(b, a) {
		var c = b.indexOf(a);
		0 <= c && b.splice(c, 1);
		return a
	}

	function Da(b, a, c, d) {
		if (Ua(b) || Wa(b)) throw Ja("cpws");
		if (a) {
			if (b === a) throw Ja("cpi");
			c = c || [];
			d = d || [];
			if (L(b)) {
				var e = c.indexOf(b);
				if (-1 !== e) return d[e];
				c.push(b);
				d.push(a)
			}
			if (H(b))
				for (var f = a.length = 0; f < b.length; f++) e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]),
					d.push(e)), a.push(e);
			else {
				var g = a.$$hashKey;
				H(a) ? a.length = 0 : r(a, function(b, c) {
					delete a[c]
				});
				for (f in b) b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
				mc(a, g)
			}
		} else if (a = b) H(b) ? a = Da(b, [], c, d) : ha(b) ? a = new Date(b.getTime()) : Va(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : L(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d));
		return a
	}

	function sa(b, a) {
		if (H(b)) {
			a = a || [];
			for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
		} else if (L(b))
			for (c in a =
				a || {}, b)
				if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];
		return a || b
	}

	function ia(b, a) {
		if (b === a) return !0;
		if (null === b || null === a) return !1;
		if (b !== b && a !== a) return !0;
		var c = typeof b,
			d;
		if (c == typeof a && "object" == c)
			if (H(b)) {
				if (!H(a)) return !1;
				if ((c = b.length) == a.length) {
					for (d = 0; d < c; d++)
						if (!ia(b[d], a[d])) return !1;
					return !0
				}
			} else {
				if (ha(b)) return ha(a) ? ia(b.getTime(), a.getTime()) : !1;
				if (Va(b)) return Va(a) ? b.toString() == a.toString() : !1;
				if (Wa(b) || Wa(a) || Ua(b) || Ua(a) || H(a) || ha(a) || Va(a)) return !1;
				c = {};
				for (d in b)
					if ("$" !==
						d.charAt(0) && !z(b[d])) {
						if (!ia(b[d], a[d])) return !1;
						c[d] = !0
					}
				for (d in a)
					if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !z(a[d])) return !1;
				return !0
			}
		return !1
	}

	function Za(b, a, c) {
		return b.concat($a.call(a, c))
	}

	function oc(b, a) {
		var c = 2 < arguments.length ? $a.call(arguments, 2) : [];
		return !z(a) || a instanceof RegExp ? a : c.length ? function() {
			return arguments.length ? a.apply(b, Za(c, arguments, 0)) : a.apply(b, c)
		} : function() {
			return arguments.length ? a.apply(b, arguments) : a.call(b)
		}
	}

	function Hd(b, a) {
		var c = a;
		"string" === typeof b &&
			"$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Ua(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Wa(a) && (c = "$SCOPE");
		return c
	}

	function ab(b, a) {
		if ("undefined" === typeof b) return u;
		Y(a) || (a = a ? 2 : null);
		return JSON.stringify(b, Hd, a)
	}

	function pc(b) {
		return x(b) ? JSON.parse(b) : b
	}

	function xa(b) {
		b = B(b).clone();
		try {
			b.empty()
		} catch (a) {}
		var c = B("<div>").append(b).html();
		try {
			return b[0].nodeType === bb ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
				return "<" + K(b)
			})
		} catch (d) {
			return K(c)
		}
	}

	function qc(b) {
		try {
			return decodeURIComponent(b)
		} catch (a) {}
	}

	function rc(b) {
		var a = {},
			c, d;
		r((b || "").split("&"), function(b) {
			b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, sc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
		});
		return a
	}

	function Pb(b) {
		var a = [];
		r(b, function(b, d) {
			H(b) ? r(b, function(b) {
				a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
			}) : a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)))
		});
		return a.length ? a.join("&") : ""
	}

	function sb(b) {
		return Ea(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function Ea(b, a) {
		return encodeURIComponent(b).replace(/%40/gi,
			"@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
	}

	function Id(b, a) {
		var c, d, e = tb.length;
		b = B(b);
		for (d = 0; d < e; ++d)
			if (c = tb[d] + a, x(c = b.attr(c))) return c;
		return null
	}

	function Jd(b, a) {
		var c, d, e = {};
		r(tb, function(a) {
			a += "app";
			!c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
		});
		r(tb, function(a) {
			a += "app";
			var e;
			!c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
		});
		c && (e.strictDi = null !== Id(c, "strict-di"),
			a(c, d ? [d] : [], e))
	}

	function tc(b, a, c) {
		L(c) || (c = {});
		c = w({
			strictDi: !1
		}, c);
		var d = function() {
				b = B(b);
				if (b.injector()) {
					var d = b[0] === W ? "document" : xa(b);
					throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
				}
				a = a || [];
				a.unshift(["$provide", function(a) {
					a.value("$rootElement", b)
				}]);
				c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
					a.debugInfoEnabled(!0)
				}]);
				a.unshift("ng");
				d = cb(a, c.strictDi);
				d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
					a.$apply(function() {
						b.data("$injector",
							d);
						c(b)(a)
					})
				}]);
				return d
			},
			e = /^NG_ENABLE_DEBUG_INFO!/,
			f = /^NG_DEFER_BOOTSTRAP!/;
		R && e.test(R.name) && (c.debugInfoEnabled = !0, R.name = R.name.replace(e, ""));
		if (R && !f.test(R.name)) return d();
		R.name = R.name.replace(f, "");
		ca.resumeBootstrap = function(b) {
			r(b, function(b) {
				a.push(b)
			});
			return d()
		};
		z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
	}

	function Kd() {
		R.name = "NG_ENABLE_DEBUG_INFO!" + R.name;
		R.location.reload()
	}

	function Ld(b) {
		b = ca.element(b).injector();
		if (!b) throw Ja("test");
		return b.get("$$testability")
	}

	function uc(b, a) {
		a = a || "_";
		return b.replace(Md, function(b, d) {
			return (d ? a : "") + b.toLowerCase()
		})
	}

	function Nd() {
		var b;
		vc || ((ta = R.jQuery) && ta.fn.on ? (B = ta, w(ta.fn, {
			scope: Ka.scope,
			isolateScope: Ka.isolateScope,
			controller: Ka.controller,
			injector: Ka.injector,
			inheritedData: Ka.inheritedData
		}), b = ta.cleanData, ta.cleanData = function(a) {
			var c;
			if (Qb) Qb = !1;
			else
				for (var d = 0, e; null != (e = a[d]); d++)(c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");
			b(a)
		}) : B = T, ca.element = B, vc = !0)
	}

	function Rb(b, a, c) {
		if (!b) throw Ja("areq",
			a || "?", c || "required");
		return b
	}

	function La(b, a, c) {
		c && H(b) && (b = b[b.length - 1]);
		Rb(z(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
		return b
	}

	function Ma(b, a) {
		if ("hasOwnProperty" === b) throw Ja("badname", a);
	}

	function wc(b, a, c) {
		if (!a) return b;
		a = a.split(".");
		for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
		return !c && z(b) ? oc(e, b) : b
	}

	function ub(b) {
		var a = b[0];
		b = b[b.length - 1];
		var c = [a];
		do {
			a = a.nextSibling;
			if (!a) break;
			c.push(a)
		} while (a !== b);
		return B(c)
	}

	function ja() {
		return Object.create(null)
	}

	function Od(b) {
		function a(a, b, c) {
			return a[b] || (a[b] = c())
		}
		var c = S("$injector"),
			d = S("ng");
		b = a(b, "angular", Object);
		b.$$minErr = b.$$minErr || S;
		return a(b, "module", function() {
			var b = {};
			return function(f, g, h) {
				if ("hasOwnProperty" === f) throw d("badname", "module");
				g && b.hasOwnProperty(f) && (b[f] = null);
				return a(b, f, function() {
					function a(c, d, e, f) {
						f || (f = b);
						return function() {
							f[e || "push"]([c, d, arguments]);
							return t
						}
					}
					if (!g) throw c("nomod", f);
					var b = [],
						d = [],
						e = [],
						q = a("$injector", "invoke", "push", d),
						t = {
							_invokeQueue: b,
							_configBlocks: d,
							_runBlocks: e,
							requires: g,
							name: f,
							provider: a("$provide", "provider"),
							factory: a("$provide", "factory"),
							service: a("$provide", "service"),
							value: a("$provide", "value"),
							constant: a("$provide", "constant", "unshift"),
							animation: a("$animateProvider", "register"),
							filter: a("$filterProvider", "register"),
							controller: a("$controllerProvider", "register"),
							directive: a("$compileProvider", "directive"),
							config: q,
							run: function(a) {
								e.push(a);
								return this
							}
						};
					h && q(h);
					return t
				})
			}
		})
	}

	function Pd(b) {
		w(b, {
			bootstrap: tc,
			copy: Da,
			extend: w,
			equals: ia,
			element: B,
			forEach: r,
			injector: cb,
			noop: A,
			bind: oc,
			toJson: ab,
			fromJson: pc,
			identity: ra,
			isUndefined: D,
			isDefined: y,
			isString: x,
			isFunction: z,
			isObject: L,
			isNumber: Y,
			isElement: nc,
			isArray: H,
			version: Qd,
			isDate: ha,
			lowercase: K,
			uppercase: vb,
			callbacks: {
				counter: 0
			},
			getTestability: Ld,
			$$minErr: S,
			$$csp: db,
			reloadWithDebugInfo: Kd
		});
		eb = Od(R);
		try {
			eb("ngLocale")
		} catch (a) {
			eb("ngLocale", []).provider("$locale", Rd)
		}
		eb("ng", ["ngLocale"], ["$provide", function(a) {
			a.provider({
				$$sanitizeUri: Sd
			});
			a.provider("$compile", xc).directive({
				a: Td,
				input: yc,
				textarea: yc,
				form: Ud,
				script: Vd,
				select: Wd,
				style: Xd,
				option: Yd,
				ngBind: Zd,
				ngBindHtml: $d,
				ngBindTemplate: ae,
				ngClass: be,
				ngClassEven: ce,
				ngClassOdd: de,
				ngCloak: ee,
				ngController: fe,
				ngForm: ge,
				ngHide: he,
				ngIf: ie,
				ngInclude: je,
				ngInit: ke,
				ngNonBindable: le,
				ngPluralize: me,
				ngRepeat: ne,
				ngShow: oe,
				ngStyle: pe,
				ngSwitch: qe,
				ngSwitchWhen: re,
				ngSwitchDefault: se,
				ngOptions: te,
				ngTransclude: ue,
				ngModel: ve,
				ngList: we,
				ngChange: xe,
				pattern: zc,
				ngPattern: zc,
				required: Ac,
				ngRequired: Ac,
				minlength: Bc,
				ngMinlength: Bc,
				maxlength: Cc,
				ngMaxlength: Cc,
				ngValue: ye,
				ngModelOptions: ze
			}).directive({
				ngInclude: Ae
			}).directive(wb).directive(Dc);
			a.provider({
				$anchorScroll: Be,
				$animate: Ce,
				$browser: De,
				$cacheFactory: Ee,
				$controller: Fe,
				$document: Ge,
				$exceptionHandler: He,
				$filter: Ec,
				$interpolate: Ie,
				$interval: Je,
				$http: Ke,
				$httpBackend: Le,
				$location: Me,
				$log: Ne,
				$parse: Oe,
				$rootScope: Pe,
				$q: Qe,
				$$q: Re,
				$sce: Se,
				$sceDelegate: Te,
				$sniffer: Ue,
				$templateCache: Ve,
				$templateRequest: We,
				$$testability: Xe,
				$timeout: Ye,
				$window: Ze,
				$$rAF: $e,
				$$asyncCallback: af,
				$$jqLite: bf
			})
		}])
	}

	function fb(b) {
		return b.replace(cf,
			function(a, b, d, e) {
				return e ? d.toUpperCase() : d
			}).replace(df, "Moz$1")
	}

	function Fc(b) {
		b = b.nodeType;
		return b === qa || !b || 9 === b
	}

	function Gc(b, a) {
		var c, d, e = a.createDocumentFragment(),
			f = [];
		if (Sb.test(b)) {
			c = c || e.appendChild(a.createElement("div"));
			d = (ef.exec(b) || ["", ""])[1].toLowerCase();
			d = ka[d] || ka._default;
			c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
			for (d = d[0]; d--;) c = c.lastChild;
			f = Za(f, c.childNodes);
			c = e.firstChild;
			c.textContent = ""
		} else f.push(a.createTextNode(b));
		e.textContent = "";
		e.innerHTML = "";
		r(f, function(a) {
			e.appendChild(a)
		});
		return e
	}

	function T(b) {
		if (b instanceof T) return b;
		var a;
		x(b) && (b = N(b), a = !0);
		if (!(this instanceof T)) {
			if (a && "<" != b.charAt(0)) throw Tb("nosel");
			return new T(b)
		}
		if (a) {
			a = W;
			var c;
			b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Gc(b, a)) ? c.childNodes : []
		}
		Hc(this, b)
	}

	function Ub(b) {
		return b.cloneNode(!0)
	}

	function xb(b, a) {
		a || yb(b);
		if (b.querySelectorAll)
			for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) yb(c[d])
	}

	function Ic(b, a, c, d) {
		if (y(d)) throw Tb("offargs");
		var e = (d = zb(b)) && d.events,
			f = d && d.handle;
		if (f)
			if (a) r(a.split(" "),
				function(a) {
					if (y(c)) {
						var d = e[a];
						Ya(d || [], c);
						if (d && 0 < d.length) return
					}
					b.removeEventListener(a, f, !1);
					delete e[a]
				});
			else
				for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
	}

	function yb(b, a) {
		var c = b.ng339,
			d = c && Ab[c];
		d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ic(b)), delete Ab[c], b.ng339 = u))
	}

	function zb(b, a) {
		var c = b.ng339,
			c = c && Ab[c];
		a && !c && (b.ng339 = c = ++hf, c = Ab[c] = {
			events: {},
			data: {},
			handle: u
		});
		return c
	}

	function Vb(b, a, c) {
		if (Fc(b)) {
			var d = y(c),
				e = !d && a && !L(a),
				f = !a;
			b = (b = zb(b, !e)) && b.data;
			if (d) b[a] = c;
			else {
				if (f) return b;
				if (e) return b && b[a];
				w(b, a)
			}
		}
	}

	function Bb(b, a) {
		return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
	}

	function Cb(b, a) {
		a && b.setAttribute && r(a.split(" "), function(a) {
			b.setAttribute("class", N((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + N(a) + " ", " ")))
		})
	}

	function Db(b, a) {
		if (a && b.setAttribute) {
			var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			r(a.split(" "), function(a) {
				a = N(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
			});
			b.setAttribute("class", N(c))
		}
	}

	function Hc(b, a) {
		if (a)
			if (a.nodeType) b[b.length++] = a;
			else {
				var c = a.length;
				if ("number" === typeof c && a.window !== a) {
					if (c)
						for (var d = 0; d < c; d++) b[b.length++] = a[d]
				} else b[b.length++] = a
			}
	}

	function Jc(b, a) {
		return Eb(b, "$" + (a || "ngController") + "Controller")
	}

	function Eb(b, a, c) {
		9 == b.nodeType && (b = b.documentElement);
		for (a = H(a) ? a : [a]; b;) {
			for (var d = 0, e = a.length; d < e; d++)
				if ((c = B.data(b, a[d])) !== u) return c;
			b = b.parentNode ||
				11 === b.nodeType && b.host
		}
	}

	function Kc(b) {
		for (xb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
	}

	function Lc(b, a) {
		a || xb(b);
		var c = b.parentNode;
		c && c.removeChild(b)
	}

	function jf(b, a) {
		a = a || R;
		if ("complete" === a.document.readyState) a.setTimeout(b);
		else B(a).on("load", b)
	}

	function Mc(b, a) {
		var c = Fb[a.toLowerCase()];
		return c && Nc[wa(b)] && c
	}

	function kf(b, a) {
		var c = b.nodeName;
		return ("INPUT" === c || "TEXTAREA" === c) && Oc[a]
	}

	function lf(b, a) {
		var c = function(c, e) {
			c.isDefaultPrevented = function() {
				return c.defaultPrevented
			};
			var f =
				a[e || c.type],
				g = f ? f.length : 0;
			if (g) {
				if (D(c.immediatePropagationStopped)) {
					var h = c.stopImmediatePropagation;
					c.stopImmediatePropagation = function() {
						c.immediatePropagationStopped = !0;
						c.stopPropagation && c.stopPropagation();
						h && h.call(c)
					}
				}
				c.isImmediatePropagationStopped = function() {
					return !0 === c.immediatePropagationStopped
				};
				1 < g && (f = sa(f));
				for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
			}
		};
		c.elem = b;
		return c
	}

	function bf() {
		this.$get = function() {
			return w(T, {
				hasClass: function(b, a) {
					b.attr && (b = b[0]);
					return Bb(b, a)
				},
				addClass: function(b, a) {
					b.attr && (b = b[0]);
					return Db(b, a)
				},
				removeClass: function(b, a) {
					b.attr && (b = b[0]);
					return Cb(b, a)
				}
			})
		}
	}

	function Na(b, a) {
		var c = b && b.$$hashKey;
		if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
		c = typeof b;
		return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
	}

	function gb(b, a) {
		if (a) {
			var c = 0;
			this.nextUid = function() {
				return ++c
			}
		}
		r(b, this.put, this)
	}

	function mf(b) {
		return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/,
			" ") + ")" : "fn"
	}

	function cb(b, a) {
		function c(a) {
			return function(b, c) {
				if (L(b)) r(b, lc(a));
				else return a(b, c)
			}
		}

		function d(a, b) {
			Ma(a, "service");
			if (z(b) || H(b)) b = q.instantiate(b);
			if (!b.$get) throw Fa("pget", a);
			return p[a + "Provider"] = b
		}

		function e(a, b) {
			return function() {
				var c = s.invoke(b, this);
				if (D(c)) throw Fa("undef", a);
				return c
			}
		}

		function f(a, b, c) {
			return d(a, {
				$get: !1 !== c ? e(a, b) : b
			})
		}

		function g(a) {
			var b = [],
				c;
			r(a, function(a) {
				function d(a) {
					var b, c;
					b = 0;
					for (c = a.length; b < c; b++) {
						var e = a[b],
							f = q.get(e[0]);
						f[e[1]].apply(f,
							e[2])
					}
				}
				if (!n.get(a)) {
					n.put(a, !0);
					try {
						x(a) ? (c = eb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : La(a, "module")
					} catch (e) {
						throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Fa("modulerr", a, e.stack || e.message || e);
					}
				}
			});
			return b
		}

		function h(b, c) {
			function d(a, e) {
				if (b.hasOwnProperty(a)) {
					if (b[a] === l) throw Fa("cdep", a + " <- " + k.join(" <- "));
					return b[a]
				}
				try {
					return k.unshift(a),
						b[a] = l, b[a] = c(a, e)
				} catch (f) {
					throw b[a] === l && delete b[a], f;
				} finally {
					k.shift()
				}
			}

			function e(b, c, f, g) {
				"string" === typeof f && (g = f, f = null);
				var k = [],
					l = cb.$$annotate(b, a, g),
					h, q, p;
				q = 0;
				for (h = l.length; q < h; q++) {
					p = l[q];
					if ("string" !== typeof p) throw Fa("itkn", p);
					k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g))
				}
				H(b) && (b = b[h]);
				return b.apply(c, k)
			}
			return {
				invoke: e,
				instantiate: function(a, b, c) {
					var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);
					a = e(a, d, b, c);
					return L(a) || z(a) ? a : d
				},
				get: d,
				annotate: cb.$$annotate,
				has: function(a) {
					return p.hasOwnProperty(a +
						"Provider") || b.hasOwnProperty(a)
				}
			}
		}
		a = !0 === a;
		var l = {},
			k = [],
			n = new gb([], !0),
			p = {
				$provide: {
					provider: c(d),
					factory: c(f),
					service: c(function(a, b) {
						return f(a, ["$injector", function(a) {
							return a.instantiate(b)
						}])
					}),
					value: c(function(a, b) {
						return f(a, ea(b), !1)
					}),
					constant: c(function(a, b) {
						Ma(a, "constant");
						p[a] = b;
						t[a] = b
					}),
					decorator: function(a, b) {
						var c = q.get(a + "Provider"),
							d = c.$get;
						c.$get = function() {
							var a = s.invoke(d, c);
							return s.invoke(b, null, {
								$delegate: a
							})
						}
					}
				}
			},
			q = p.$injector = h(p, function(a, b) {
				ca.isString(b) && k.push(b);
				throw Fa("unpr", k.join(" <- "));
			}),
			t = {},
			s = t.$injector = h(t, function(a, b) {
				var c = q.get(a + "Provider", b);
				return s.invoke(c.$get, c, u, a)
			});
		r(g(b), function(a) {
			s.invoke(a || A)
		});
		return s
	}

	function Be() {
		var b = !0;
		this.disableAutoScrolling = function() {
			b = !1
		};
		this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
			function e(a) {
				var b = null;
				Array.prototype.some.call(a, function(a) {
					if ("a" === wa(a)) return b = a, !0
				});
				return b
			}

			function f(b) {
				if (b) {
					b.scrollIntoView();
					var c;
					c = g.yOffset;
					z(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !==
						a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
					c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
				} else a.scrollTo(0, 0)
			}

			function g() {
				var a = c.hash(),
					b;
				a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
			}
			var h = a.document;
			b && d.$watch(function() {
				return c.hash()
			}, function(a, b) {
				a === b && "" === a || jf(function() {
					d.$evalAsync(g)
				})
			});
			return g
		}]
	}

	function af() {
		this.$get = ["$$rAF", "$timeout", function(b, a) {
			return b.supported ? function(a) {
					return b(a)
				} :
				function(b) {
					return a(b, 0, !1)
				}
		}]
	}

	function nf(b, a, c, d) {
		function e(a) {
			try {
				a.apply(null, $a.call(arguments, 1))
			} finally {
				if (m--, 0 === m)
					for (; C.length;) try {
						C.pop()()
					} catch (b) {
						c.error(b)
					}
			}
		}

		function f(a, b) {
			(function da() {
				r($, function(a) {
					a()
				});
				I = b(da, a)
			})()
		}

		function g() {
			h();
			l()
		}

		function h() {
			a: {
				try {
					M = t.state;
					break a
				} catch (a) {}
				M = void 0
			}
			M = D(M) ? null : M;ia(M, P) && (M = P);P = M
		}

		function l() {
			if (G !== n.url() || E !== M) G = n.url(), E = M, r(X, function(a) {
				a(n.url(), M)
			})
		}

		function k(a) {
			try {
				return decodeURIComponent(a)
			} catch (b) {
				return a
			}
		}
		var n = this,
			p = a[0],
			q = b.location,
			t = b.history,
			s = b.setTimeout,
			F = b.clearTimeout,
			v = {};
		n.isMock = !1;
		var m = 0,
			C = [];
		n.$$completeOutstandingRequest = e;
		n.$$incOutstandingRequestCount = function() {
			m++
		};
		n.notifyWhenNoOutstandingRequests = function(a) {
			r($, function(a) {
				a()
			});
			0 === m ? a() : C.push(a)
		};
		var $ = [],
			I;
		n.addPollFn = function(a) {
			D(I) && f(100, s);
			$.push(a);
			return a
		};
		var M, E, G = q.href,
			O = a.find("base"),
			Q = null;
		h();
		E = M;
		n.url = function(a, c, e) {
			D(e) && (e = null);
			q !== b.location && (q = b.location);
			t !== b.history && (t = b.history);
			if (a) {
				var f =
					E === e;
				if (G === a && (!d.history || f)) return n;
				var g = G && Ga(G) === Ga(a);
				G = a;
				E = e;
				if (!d.history || g && f) {
					if (!g || Q) Q = a;
					c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e), c.hash = a) : q.href = a
				} else t[c ? "replaceState" : "pushState"](e, "", a), h(), E = M;
				return n
			}
			return Q || q.href.replace(/%27/g, "'")
		};
		n.state = function() {
			return M
		};
		var X = [],
			ba = !1,
			P = null;
		n.onUrlChange = function(a) {
			if (!ba) {
				if (d.history) B(b).on("popstate", g);
				B(b).on("hashchange", g);
				ba = !0
			}
			X.push(a);
			return a
		};
		n.$$checkUrlChange = l;
		n.baseHref = function() {
			var a =
				O.attr("href");
			return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var fa = {},
			y = "",
			la = n.baseHref();
		n.cookies = function(a, b) {
			var d, e, f, g;
			if (a) b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + la + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + la).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
			else {
				if (p.cookie !== y)
					for (y = p.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++) e =
						d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === u && (fa[a] = k(e.substring(g + 1))));
				return fa
			}
		};
		n.defer = function(a, b) {
			var c;
			m++;
			c = s(function() {
				delete v[c];
				e(a)
			}, b || 0);
			v[c] = !0;
			return c
		};
		n.defer.cancel = function(a) {
			return v[a] ? (delete v[a], F(a), e(A), !0) : !1
		}
	}

	function De() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
			return new nf(b, d, a, c)
		}]
	}

	function Ee() {
		this.$get = function() {
			function b(b, d) {
				function e(a) {
					a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
				}

				function f(a,
					b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}
				if (b in a) throw S("$cacheFactory")("iid", b);
				var g = 0,
					h = w({}, d, {
						id: b
					}),
					l = {},
					k = d && d.capacity || Number.MAX_VALUE,
					n = {},
					p = null,
					q = null;
				return a[b] = {
					put: function(a, b) {
						if (k < Number.MAX_VALUE) {
							var c = n[a] || (n[a] = {
								key: a
							});
							e(c)
						}
						if (!D(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b
					},
					get: function(a) {
						if (k < Number.MAX_VALUE) {
							var b = n[a];
							if (!b) return;
							e(b)
						}
						return l[a]
					},
					remove: function(a) {
						if (k < Number.MAX_VALUE) {
							var b = n[a];
							if (!b) return;
							b == p && (p = b.p);
							b == q && (q = b.n);
							f(b.n, b.p);
							delete n[a]
						}
						delete l[a];
						g--
					},
					removeAll: function() {
						l = {};
						g = 0;
						n = {};
						p = q = null
					},
					destroy: function() {
						n = h = l = null;
						delete a[b]
					},
					info: function() {
						return w({}, h, {
							size: g
						})
					}
				}
			}
			var a = {};
			b.info = function() {
				var b = {};
				r(a, function(a, e) {
					b[e] = a.info()
				});
				return b
			};
			b.get = function(b) {
				return a[b]
			};
			return b
		}
	}

	function Ve() {
		this.$get = ["$cacheFactory", function(b) {
			return b("templates")
		}]
	}

	function xc(b, a) {
		function c(a, b) {
			var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
				d = {};
			r(a, function(a, e) {
				var f = a.match(c);
				if (!f) throw ma("iscp", b, e, a);
				d[e] = {
					mode: f[1][0],
					collection: "*" ===
						f[2],
					optional: "?" === f[3],
					attrName: f[4] || e
				}
			});
			return d
		}
		var d = {},
			e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
			f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
			g = Gd("ngSrc,ngSrcset,src,srcset"),
			h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
			l = /^(on[a-z]+|formaction)$/;
		this.directive = function p(a, e) {
			Ma(a, "directive");
			x(a) ? (Rb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
				var f = [];
				r(d[a], function(d, g) {
					try {
						var h = b.invoke(d);
						z(h) ? h = {
								compile: ea(h)
							} : !h.compile && h.link &&
							(h.compile = ea(h.link));
						h.priority = h.priority || 0;
						h.index = g;
						h.name = h.name || a;
						h.require = h.require || h.controller && h.name;
						h.restrict = h.restrict || "EA";
						L(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
						f.push(h)
					} catch (l) {
						e(l)
					}
				});
				return f
			}])), d[a].push(e)) : r(a, lc(p));
			return this
		};
		this.aHrefSanitizationWhitelist = function(b) {
			return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
		};
		this.imgSrcSanitizationWhitelist = function(b) {
			return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
		};
		var k = !0;
		this.debugInfoEnabled = function(a) {
			return y(a) ? (k = a, this) : k
		};
		this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, s, F, v, m, C, $, I, M) {
			function E(a, b) {
				try {
					a.addClass(b)
				} catch (c) {}
			}

			function G(a, b, c, d, e) {
				a instanceof B || (a = B(a));
				r(a, function(b, c) {
					b.nodeType == bb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
				});
				var f = O(a, b, a, c, d, e);
				G.$$addScopeClass(a);
				var g = null;
				return function(b, c, d) {
					Rb(b, "scope");
					d = d || {};
					var e = d.parentBoundTranscludeFn,
						h = d.transcludeControllers;
					d = d.futureParentElement;
					e && e.$$boundTransclude && (e = e.$$boundTransclude);
					g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
					d = "html" !== g ? B(Xb(g, B("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
					if (h)
						for (var l in h) d.data("$" + l + "Controller", h[l].instance);
					G.$$addScopeInfo(d, b);
					c && c(d, b);
					f && f(b, d, d, e);
					return d
				}
			}

			function O(a, b, c, d, e, f) {
				function g(a,
					c, d, e) {
					var f, l, k, q, p, s, t;
					if (m)
						for (t = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], t[f] = c[f];
					else t = c;
					q = 0;
					for (p = h.length; q < p;) l = t[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), G.$$addScopeInfo(B(l), k)) : k = a, s = c.transcludeOnThisElement ? Q(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? Q(a, b) : null, c(f, k, l, d, s)) : f && f(a, l.childNodes, u, e)
				}
				for (var h = [], l, k, q, p, m, s = 0; s < a.length; s++) {
					l = new Yb;
					k = X(a[s], [], l, 0 === s ? d : u, e);
					(f = k.length ? fa(k, a[s], l, b, c, null, [], [], f) : null) &&
					f.scope && G.$$addScopeClass(l.$$element);
					l = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : O(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
					if (f || l) h.push(s, f, l), p = !0, m = m || f;
					f = null
				}
				return p ? g : null
			}

			function Q(a, b, c, d) {
				return function(d, e, f, g, h) {
					d || (d = a.$new(!1, h), d.$$transcluded = !0);
					return b(d, e, {
						parentBoundTranscludeFn: c,
						transcludeControllers: f,
						futureParentElement: g
					})
				}
			}

			function X(a, b, c, d, g) {
				var h = c.$attr,
					l;
				switch (a.nodeType) {
					case qa:
						la(b, ya(wa(a)), "E", d, g);
						for (var k,
								q, p, m = a.attributes, s = 0, t = m && m.length; s < t; s++) {
							var M = !1,
								I = !1;
							k = m[s];
							l = k.name;
							q = N(k.value);
							k = ya(l);
							if (p = U.test(k)) l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function(a, b) {
								return b.toUpperCase()
							});
							var F = k.replace(/(Start|End)$/, "");
							D(F) && k === F + "Start" && (M = l, I = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
							k = ya(l.toLowerCase());
							h[k] = l;
							if (p || !c.hasOwnProperty(k)) c[k] = q, Mc(a, k) && (c[k] = !0);
							Pa(a, b, q, k, p);
							la(b, k, "A", d, g, M, I)
						}
						a = a.className;
						L(a) && (a = a.animVal);
						if (x(a) && "" !== a)
							for (; l = f.exec(a);) k = ya(l[2]),
								la(b, k, "C", d, g) && (c[k] = N(l[3])), a = a.substr(l.index + l[0].length);
						break;
					case bb:
						za(b, a.nodeValue);
						break;
					case 8:
						try {
							if (l = e.exec(a.nodeValue)) k = ya(l[1]), la(b, k, "M", d, g) && (c[k] = N(l[2]))
						} catch (v) {}
				}
				b.sort(da);
				return b
			}

			function ba(a, b, c) {
				var d = [],
					e = 0;
				if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw ma("uterdir", b, c);
						a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
						d.push(a);
						a = a.nextSibling
					} while (0 < e)
				} else d.push(a);
				return B(d)
			}

			function P(a, b, c) {
				return function(d, e, f, g, h) {
					e = ba(e[0],
						b, c);
					return a(d, e, f, g, h)
				}
			}

			function fa(a, d, e, f, g, l, k, p, m) {
				function s(a, b, c, d) {
					if (a) {
						c && (a = P(a, c, d));
						a.require = J.require;
						a.directiveName = da;
						if (Q === J || J.$$isolateScope) a = Y(a, {
							isolateScope: !0
						});
						k.push(a)
					}
					if (b) {
						c && (b = P(b, c, d));
						b.require = J.require;
						b.directiveName = da;
						if (Q === J || J.$$isolateScope) b = Y(b, {
							isolateScope: !0
						});
						p.push(b)
					}
				}

				function M(a, b, c, d) {
					var e, f = "data",
						g = !1,
						l = c,
						k;
					if (x(b)) {
						k = b.match(h);
						b = b.substring(k[0].length);
						k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
						"^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData",
							l = c.parent());
						"?" === k[2] && (g = !0);
						e = null;
						d && "data" === f && (e = d[b]) && (e = e.instance);
						e = e || l[f]("$" + b + "Controller");
						if (!e && !g) throw ma("ctreq", b, a);
						return e || null
					}
					H(b) && (e = [], r(b, function(b) {
						e.push(M(a, b, c, d))
					}));
					return e
				}

				function I(a, c, f, g, l) {
					function h(a, b, c) {
						var d;
						Wa(a) || (c = b, b = a, a = u);
						A && (d = C);
						c || (c = A ? X.parent() : X);
						return l(a, b, d, c, Wb)
					}
					var m, s, t, E, C, ib, X, P;
					d === f ? (P = e, X = e.$$element) : (X = B(f), P = new Yb(X, e));
					Q && (E = c.$new(!0));
					l && (ib = h, ib.$$boundTransclude = l);
					O && ($ = {}, C = {}, r(O, function(a) {
						var b = {
							$scope: a ===
								Q || a.$$isolateScope ? E : c,
							$element: X,
							$attrs: P,
							$transclude: ib
						};
						t = a.controller;
						"@" == t && (t = P[a.name]);
						b = v(t, b, !0, a.controllerAs);
						C[a.name] = b;
						A || X.data("$" + a.name + "Controller", b.instance);
						$[a.name] = b
					}));
					if (Q) {
						G.$$addScopeInfo(X, E, !0, !(na && (na === Q || na === Q.$$originalDirective)));
						G.$$addScopeClass(X, !0);
						g = $ && $[Q.name];
						var ba = E;
						g && g.identifier && !0 === Q.bindToController && (ba = g.instance);
						r(E.$$isolateBindings = Q.$$isolateBindings, function(a, d) {
							var e = a.attrName,
								f = a.optional,
								g, l, h, k;
							switch (a.mode) {
								case "@":
									P.$observe(e,
										function(a) {
											ba[d] = a
										});
									P.$$observers[e].$$scope = c;
									P[e] && (ba[d] = b(P[e])(c));
									break;
								case "=":
									if (f && !P[e]) break;
									l = F(P[e]);
									k = l.literal ? ia : function(a, b) {
										return a === b || a !== a && b !== b
									};
									h = l.assign || function() {
										g = ba[d] = l(c);
										throw ma("nonassign", P[e], Q.name);
									};
									g = ba[d] = l(c);
									f = function(a) {
										k(a, ba[d]) || (k(a, g) ? h(c, a = ba[d]) : ba[d] = a);
										return g = a
									};
									f.$stateful = !0;
									f = a.collection ? c.$watchCollection(P[e], f) : c.$watch(F(P[e], f), null, l.literal);
									E.$on("$destroy", f);
									break;
								case "&":
									l = F(P[e]), ba[d] = function(a) {
										return l(c, a)
									}
							}
						})
					}
					$ &&
						(r($, function(a) {
							a()
						}), $ = null);
					g = 0;
					for (m = k.length; g < m; g++) s = k[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib);
					var Wb = c;
					Q && (Q.template || null === Q.templateUrl) && (Wb = E);
					a && a(Wb, f.childNodes, u, l);
					for (g = p.length - 1; 0 <= g; g--) s = p[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib)
				}
				m = m || {};
				for (var E = -Number.MAX_VALUE, C, O = m.controllerDirectives, $, Q = m.newIsolateScopeDirective, na = m.templateDirective, fa = m.nonTlbTranscludeDirective, la = !1, D = !1, A = m.hasElementTranscludeDirective,
						w = e.$$element = B(d), J, da, V, hb = f, za, K = 0, R = a.length; K < R; K++) {
					J = a[K];
					var Pa = J.$$start,
						U = J.$$end;
					Pa && (w = ba(d, Pa, U));
					V = u;
					if (E > J.priority) break;
					if (V = J.scope) J.templateUrl || (L(V) ? (Oa("new/isolated scope", Q || C, J, w), Q = J) : Oa("new/isolated scope", Q, J, w)), C = C || J;
					da = J.name;
					!J.templateUrl && J.controller && (V = J.controller, O = O || {}, Oa("'" + da + "' controller", O[da], J, w), O[da] = J);
					if (V = J.transclude) la = !0, J.$$tlb || (Oa("transclusion", fa, J, w), fa = J), "element" == V ? (A = !0, E = J.priority, V = w, w = e.$$element = B(W.createComment(" " + da + ": " +
						e[da] + " ")), d = w[0], T(g, $a.call(V, 0), d), hb = G(V, f, E, l && l.name, {
						nonTlbTranscludeDirective: fa
					})) : (V = B(Ub(d)).contents(), w.empty(), hb = G(V, f));
					if (J.template)
						if (D = !0, Oa("template", na, J, w), na = J, V = z(J.template) ? J.template(w, e) : J.template, V = Sc(V), J.replace) {
							l = J;
							V = Sb.test(V) ? Tc(Xb(J.templateNamespace, N(V))) : [];
							d = V[0];
							if (1 != V.length || d.nodeType !== qa) throw ma("tplrt", da, "");
							T(g, w, d);
							R = {
								$attr: {}
							};
							V = X(d, [], R);
							var aa = a.splice(K + 1, a.length - (K + 1));
							Q && y(V);
							a = a.concat(V).concat(aa);
							S(e, R);
							R = a.length
						} else w.html(V);
					if (J.templateUrl) D = !0, Oa("template", na, J, w), na = J, J.replace && (l = J), I = of(a.splice(K, a.length - K), w, e, g, la && hb, k, p, {
						controllerDirectives: O,
						newIsolateScopeDirective: Q,
						templateDirective: na,
						nonTlbTranscludeDirective: fa
					}), R = a.length;
					else if (J.compile) try {
						za = J.compile(w, e, hb), z(za) ? s(null, za, Pa, U) : za && s(za.pre, za.post, Pa, U)
					} catch (pf) {
						c(pf, xa(w))
					}
					J.terminal && (I.terminal = !0, E = Math.max(E, J.priority))
				}
				I.scope = C && !0 === C.scope;
				I.transcludeOnThisElement = la;
				I.elementTranscludeOnThisElement = A;
				I.templateOnThisElement = D;
				I.transclude = hb;
				m.hasElementTranscludeDirective = A;
				return I
			}

			function y(a) {
				for (var b = 0, c = a.length; b < c; b++) a[b] = Ob(a[b], {
					$$isolateScope: !0
				})
			}

			function la(b, e, f, g, l, h, k) {
				if (e === l) return null;
				l = null;
				if (d.hasOwnProperty(e)) {
					var q;
					e = a.get(e + "Directive");
					for (var m = 0, s = e.length; m < s; m++) try {
						q = e[m], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (h && (q = Ob(q, {
							$$start: h,
							$$end: k
						})), b.push(q), l = q)
					} catch (I) {
						c(I)
					}
				}
				return l
			}

			function D(b) {
				if (d.hasOwnProperty(b))
					for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)
						if (b = c[e], b.multiElement) return !0;
				return !1
			}

			function S(a, b) {
				var c = b.$attr,
					d = a.$attr,
					e = a.$$element;
				r(a, function(d, e) {
					"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
				});
				r(b, function(b, f) {
					"class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
				})
			}

			function of(a, b, c, d, e, f, g, l) {
				var h = [],
					k, q, p = b[0],
					m = a.shift(),
					t = Ob(m, {
						templateUrl: null,
						transclude: null,
						replace: null,
						$$originalDirective: m
					}),
					I = z(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl,
					M = m.templateNamespace;
				b.empty();
				s(I).then(function(s) {
					var F, v;
					s = Sc(s);
					if (m.replace) {
						s = Sb.test(s) ? Tc(Xb(M, N(s))) : [];
						F = s[0];
						if (1 != s.length || F.nodeType !== qa) throw ma("tplrt", m.name, I);
						s = {
							$attr: {}
						};
						T(d, b, F);
						var C = X(F, [], s);
						L(m.scope) && y(C);
						a = C.concat(a);
						S(c, s)
					} else F = p, b.html(s);
					a.unshift(t);
					k = fa(a, F, c, e, b, m, f, g, l);
					r(d, function(a, c) {
						a == F && (d[c] = b[0])
					});
					for (q = O(b[0].childNodes, e); h.length;) {
						s = h.shift();
						v = h.shift();
						var G = h.shift(),
							P = h.shift(),
							C = b[0];
						if (!s.$$destroyed) {
							if (v !== p) {
								var $ = v.className;
								l.hasElementTranscludeDirective && m.replace || (C = Ub(F));
								T(G, B(v), C);
								E(B(C), $)
							}
							v = k.transcludeOnThisElement ? Q(s, k.transclude, P) : P;
							k(q, s, C, d, v)
						}
					}
					h = null
				});
				return function(a, b, c, d, e) {
					a = e;
					b.$$destroyed || (h ? h.push(b, c, d, a) : (k.transcludeOnThisElement && (a = Q(b, k.transclude, e)), k(q, b, c, d, a)))
				}
			}

			function da(a, b) {
				var c = b.priority - a.priority;
				return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
			}

			function Oa(a, b, c, d) {
				if (b) throw ma("multidir",
					b.name, c.name, a, xa(d));
			}

			function za(a, c) {
				var d = b(c, !0);
				d && a.push({
					priority: 0,
					compile: function(a) {
						a = a.parent();
						var b = !!a.length;
						b && G.$$addBindingClass(a);
						return function(a, c) {
							var e = c.parent();
							b || G.$$addBindingClass(e);
							G.$$addBindingInfo(e, d.expressions);
							a.$watch(d, function(a) {
								c[0].nodeValue = a
							})
						}
					}
				})
			}

			function Xb(a, b) {
				a = K(a || "html");
				switch (a) {
					case "svg":
					case "math":
						var c = W.createElement("div");
						c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
						return c.childNodes[0].childNodes;
					default:
						return b
				}
			}

			function R(a, b) {
				if ("srcdoc" ==
					b) return $.HTML;
				var c = wa(a);
				if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return $.RESOURCE_URL
			}

			function Pa(a, c, d, e, f) {
				var h = R(a, e);
				f = g[e] || f;
				var k = b(d, !0, h, f);
				if (k) {
					if ("multiple" === e && "select" === wa(a)) throw ma("selmulti", xa(a));
					c.push({
						priority: 100,
						compile: function() {
							return {
								pre: function(a, c, g) {
									c = g.$$observers || (g.$$observers = {});
									if (l.test(e)) throw ma("nodomevents");
									var p = g[e];
									p !== d && (k = p && b(p, !0, h, f), d = p);
									k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope ||
										a).$watch(k, function(a, b) {
										"class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
									}))
								}
							}
						}
					})
				}
			}

			function T(a, b, c) {
				var d = b[0],
					e = b.length,
					f = d.parentNode,
					g, l;
				if (a)
					for (g = 0, l = a.length; g < l; g++)
						if (a[g] == d) {
							a[g++] = c;
							l = g + e - 1;
							for (var h = a.length; g < h; g++, l++) l < h ? a[g] = a[l] : delete a[g];
							a.length -= e - 1;
							a.context === d && (a.context = c);
							break
						}
				f && f.replaceChild(c, d);
				a = W.createDocumentFragment();
				a.appendChild(d);
				B(c).data(B(d).data());
				ta ? (Qb = !0, ta.cleanData([d])) : delete B.cache[d[B.expando]];
				d = 1;
				for (e = b.length; d < e; d++) f = b[d], B(f).remove(),
					a.appendChild(f), delete b[d];
				b[0] = c;
				b.length = 1
			}

			function Y(a, b) {
				return w(function() {
					return a.apply(null, arguments)
				}, a, b)
			}

			function Z(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g)
				} catch (l) {
					c(l, xa(d))
				}
			}
			var Yb = function(a, b) {
				if (b) {
					var c = Object.keys(b),
						d, e, f;
					d = 0;
					for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
				} else this.$attr = {};
				this.$$element = a
			};
			Yb.prototype = {
				$normalize: ya,
				$addClass: function(a) {
					a && 0 < a.length && I.addClass(this.$$element, a)
				},
				$removeClass: function(a) {
					a && 0 < a.length && I.removeClass(this.$$element, a)
				},
				$updateClass: function(a,
					b) {
					var c = Uc(a, b);
					c && c.length && I.addClass(this.$$element, c);
					(c = Uc(b, a)) && c.length && I.removeClass(this.$$element, c)
				},
				$set: function(a, b, d, e) {
					var f = this.$$element[0],
						g = Mc(f, a),
						l = kf(f, a),
						f = a;
					g ? (this.$$element.prop(a, b), e = g) : l && (this[l] = b, f = l);
					this[a] = b;
					e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-"));
					g = wa(this.$$element);
					if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = M(b, "src" === a);
					else if ("img" === g && "srcset" === a) {
						for (var g = "", l = N(b), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(l) ?
								h : /(,)/, l = l.split(h), h = Math.floor(l.length / 2), k = 0; k < h; k++) var q = 2 * k,
							g = g + M(N(l[q]), !0),
							g = g + (" " + N(l[q + 1]));
						l = N(l[2 * k]).split(/\s/);
						g += M(N(l[0]), !0);
						2 === l.length && (g += " " + N(l[1]));
						this[a] = b = g
					}!1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
					(a = this.$$observers) && r(a[f], function(a) {
						try {
							a(b)
						} catch (d) {
							c(d)
						}
					})
				},
				$observe: function(a, b) {
					var c = this,
						d = c.$$observers || (c.$$observers = ja()),
						e = d[a] || (d[a] = []);
					e.push(b);
					m.$evalAsync(function() {
						!e.$$inter && c.hasOwnProperty(a) && b(c[a])
					});
					return function() {
						Ya(e, b)
					}
				}
			};
			var V = b.startSymbol(),
				na = b.endSymbol(),
				Sc = "{{" == V || "}}" == na ? ra : function(a) {
					return a.replace(/\{\{/g, V).replace(/}}/g, na)
				},
				U = /^ngAttr[A-Z]/;
			G.$$addBindingInfo = k ? function(a, b) {
				var c = a.data("$binding") || [];
				H(b) ? c = c.concat(b) : c.push(b);
				a.data("$binding", c)
			} : A;
			G.$$addBindingClass = k ? function(a) {
				E(a, "ng-binding")
			} : A;
			G.$$addScopeInfo = k ? function(a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
			} : A;
			G.$$addScopeClass = k ? function(a, b) {
				E(a, b ? "ng-isolate-scope" :
					"ng-scope")
			} : A;
			return G
		}]
	}

	function ya(b) {
		return fb(b.replace(Rc, ""))
	}

	function Uc(b, a) {
		var c = "",
			d = b.split(/\s+/),
			e = a.split(/\s+/),
			f = 0;
		a: for (; f < d.length; f++) {
			for (var g = d[f], h = 0; h < e.length; h++)
				if (g == e[h]) continue a;
			c += (0 < c.length ? " " : "") + g
		}
		return c
	}

	function Tc(b) {
		b = B(b);
		var a = b.length;
		if (1 >= a) return b;
		for (; a--;) 8 === b[a].nodeType && qf.call(b, a, 1);
		return b
	}

	function Fe() {
		var b = {},
			a = !1,
			c = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(a, c) {
			Ma(a, "controller");
			L(a) ? w(b, a) : b[a] = c
		};
		this.allowGlobals = function() {
			a = !0
		};
		this.$get = ["$injector", "$window", function(d, e) {
			function f(a, b, c, d) {
				if (!a || !L(a.$scope)) throw S("$controller")("noscp", d, b);
				a.$scope[b] = c
			}
			return function(g, h, l, k) {
				var n, p, q;
				l = !0 === l;
				k && x(k) && (q = k);
				if (x(g)) {
					k = g.match(c);
					if (!k) throw rf("ctrlfmt", g);
					p = k[1];
					q = q || k[3];
					g = b.hasOwnProperty(p) ? b[p] : wc(h.$scope, p, !0) || (a ? wc(e, p, !0) : u);
					La(g, p, !0)
				}
				if (l) return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function() {
					d.invoke(g, n, h, p);
					return n
				}, {
					instance: n,
					identifier: q
				});
				n = d.instantiate(g, h, p);
				q && f(h, q, n, p || g.name);
				return n
			}
		}]
	}

	function Ge() {
		this.$get = ["$window", function(b) {
			return B(b.document)
		}]
	}

	function He() {
		this.$get = ["$log", function(b) {
			return function(a, c) {
				b.error.apply(b, arguments)
			}
		}]
	}

	function Zb(b, a) {
		if (x(b)) {
			var c = b.replace(sf, "").trim();
			if (c) {
				var d = a("Content-Type");
				(d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
				d && (b = pc(c))
			}
		}
		return b
	}

	function Wc(b) {
		var a = ja(),
			c, d, e;
		if (!b) return a;
		r(b.split("\n"), function(b) {
			e = b.indexOf(":");
			c = K(N(b.substr(0,
				e)));
			d = N(b.substr(e + 1));
			c && (a[c] = a[c] ? a[c] + ", " + d : d)
		});
		return a
	}

	function Xc(b) {
		var a = L(b) ? b : u;
		return function(c) {
			a || (a = Wc(b));
			return c ? (c = a[K(c)], void 0 === c && (c = null), c) : a
		}
	}

	function Yc(b, a, c, d) {
		if (z(d)) return d(b, a, c);
		r(d, function(d) {
			b = d(b, a, c)
		});
		return b
	}

	function Ke() {
		var b = this.defaults = {
				transformResponse: [Zb],
				transformRequest: [function(a) {
					return L(a) && "[object File]" !== Ca.call(a) && "[object Blob]" !== Ca.call(a) && "[object FormData]" !== Ca.call(a) ? ab(a) : a
				}],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: sa($b),
					put: sa($b),
					patch: sa($b)
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			},
			a = !1;
		this.useApplyAsync = function(b) {
			return y(b) ? (a = !!b, this) : a
		};
		var c = this.interceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
			function k(a) {
				function c(a) {
					var b = w({}, a);
					b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
					a = a.status;
					return 200 <= a && 300 > a ? b : h.reject(b)
				}

				function d(a) {
					var b, c = {};
					r(a, function(a, d) {
						z(a) ? (b =
							a(), null != b && (c[d] = b)) : c[d] = a
					});
					return c
				}
				if (!ca.isObject(a)) throw S("$http")("badreq", a);
				var e = w({
					method: "get",
					transformRequest: b.transformRequest,
					transformResponse: b.transformResponse
				}, a);
				e.headers = function(a) {
					var c = b.headers,
						e = w({}, a.headers),
						f, g, c = w({}, c.common, c[K(a.method)]);
					a: for (f in c) {
						a = K(f);
						for (g in e)
							if (K(g) === a) continue a;
						e[f] = c[f]
					}
					return d(e)
				}(a);
				e.method = vb(e.method);
				var f = [function(a) {
						var d = a.headers,
							e = Yc(a.data, Xc(d), u, a.transformRequest);
						D(e) && r(d, function(a, b) {
							"content-type" === K(b) &&
								delete d[b]
						});
						D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);
						return n(a, e).then(c, c)
					}, u],
					g = h.when(e);
				for (r(t, function(a) {
						(a.request || a.requestError) && f.unshift(a.request, a.requestError);
						(a.response || a.responseError) && f.push(a.response, a.responseError)
					}); f.length;) {
					a = f.shift();
					var l = f.shift(),
						g = g.then(a, l)
				}
				g.success = function(a) {
					La(a, "fn");
					g.then(function(b) {
						a(b.data, b.status, b.headers, e)
					});
					return g
				};
				g.error = function(a) {
					La(a, "fn");
					g.then(null, function(b) {
						a(b.data,
							b.status, b.headers, e)
					});
					return g
				};
				return g
			}

			function n(c, f) {
				function l(b, c, d, e) {
					function f() {
						m(c, b, d, e)
					}
					E && (200 <= b && 300 > b ? E.put(Q, [b, c, Wc(d), e]) : E.remove(Q));
					a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
				}

				function m(a, b, d, e) {
					b = -1 <= b ? b : 0;
					(200 <= b && 300 > b ? I.resolve : I.reject)({
						data: a,
						status: b,
						headers: Xc(d),
						config: c,
						statusText: e
					})
				}

				function n(a) {
					m(a.data, a.status, sa(a.headers()), a.statusText)
				}

				function t() {
					var a = k.pendingRequests.indexOf(c); - 1 !== a && k.pendingRequests.splice(a, 1)
				}
				var I = h.defer(),
					M = I.promise,
					E, G, O = c.headers,
					Q = p(c.url, c.params);
				k.pendingRequests.push(c);
				M.then(t, t);
				!c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = L(c.cache) ? c.cache : L(b.cache) ? b.cache : q);
				E && (G = E.get(Q), y(G) ? G && z(G.then) ? G.then(n, n) : H(G) ? m(G[1], G[0], sa(G[2]), G[3]) : m(G, 200, {}, "OK") : E.put(Q, M));
				D(G) && ((G = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (O[c.xsrfHeaderName || b.xsrfHeaderName] = G), d(c.method, Q, f, l, O, c.timeout, c.withCredentials, c.responseType));
				return M
			}

			function p(a, b) {
				if (!b) return a;
				var c = [];
				Ed(b, function(a, b) {
					null === a || D(a) || (H(a) || (a = [a]), r(a, function(a) {
						L(a) && (a = ha(a) ? a.toISOString() : ab(a));
						c.push(Ea(b) + "=" + Ea(a))
					}))
				});
				0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
				return a
			}
			var q = f("$http"),
				t = [];
			r(c, function(a) {
				t.unshift(x(a) ? l.get(a) : l.invoke(a))
			});
			k.pendingRequests = [];
			(function(a) {
				r(arguments, function(a) {
					k[a] = function(b, c) {
						return k(w(c || {}, {
							method: a,
							url: b
						}))
					}
				})
			})("get", "delete", "head", "jsonp");
			(function(a) {
				r(arguments, function(a) {
					k[a] = function(b, c, d) {
						return k(w(d || {}, {
							method: a,
							url: b,
							data: c
						}))
					}
				})
			})("post", "put", "patch");
			k.defaults = b;
			return k
		}]
	}

	function vf() {
		return new R.XMLHttpRequest
	}

	function Le() {
		this.$get = ["$browser", "$window", "$document", function(b, a, c) {
			return wf(b, vf, b.defer, a.angular.callbacks, c[0])
		}]
	}

	function wf(b, a, c, d, e) {
		function f(a, b, c) {
			var f = e.createElement("script"),
				n = null;
			f.type = "text/javascript";
			f.src = a;
			f.async = !0;
			n = function(a) {
				f.removeEventListener("load", n, !1);
				f.removeEventListener("error", n, !1);
				e.body.removeChild(f);
				f = null;
				var g = -1,
					t = "unknown";
				a && ("load" !== a.type || d[b].called || (a = {
					type: "error"
				}), t = a.type, g = "error" === a.type ? 404 : 200);
				c && c(g, t)
			};
			f.addEventListener("load", n, !1);
			f.addEventListener("error", n, !1);
			e.body.appendChild(f);
			return n
		}
		return function(e, h, l, k, n, p, q, t) {
			function s() {
				m && m();
				C && C.abort()
			}

			function F(a, d, e, f, g) {
				I !== u && c.cancel(I);
				m = C = null;
				a(d, e, f, g);
				b.$$completeOutstandingRequest(A)
			}
			b.$$incOutstandingRequestCount();
			h = h || b.url();
			if ("jsonp" == K(e)) {
				var v = "_" + (d.counter++).toString(36);
				d[v] = function(a) {
					d[v].data = a;
					d[v].called = !0
				};
				var m = f(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function(a, b) {
					F(k, a, d[v].data, "", b);
					d[v] = A
				})
			} else {
				var C = a();
				C.open(e, h, !0);
				r(n, function(a, b) {
					y(a) && C.setRequestHeader(b, a)
				});
				C.onload = function() {
					var a = C.statusText || "",
						b = "response" in C ? C.response : C.responseText,
						c = 1223 === C.status ? 204 : C.status;
					0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
					F(k, c, b, C.getAllResponseHeaders(), a)
				};
				e = function() {
					F(k, -1, null, null, "")
				};
				C.onerror = e;
				C.onabort = e;
				q && (C.withCredentials = !0);
				if (t) try {
					C.responseType = t
				} catch ($) {
					if ("json" !==
						t) throw $;
				}
				C.send(l || null)
			}
			if (0 < p) var I = c(s, p);
			else p && z(p.then) && p.then(s)
		}
	}

	function Ie() {
		var b = "{{",
			a = "}}";
		this.startSymbol = function(a) {
			return a ? (b = a, this) : b
		};
		this.endSymbol = function(b) {
			return b ? (a = b, this) : a
		};
		this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
			function f(a) {
				return "\\\\\\" + a
			}

			function g(f, g, t, s) {
				function F(c) {
					return c.replace(k, b).replace(n, a)
				}

				function v(a) {
					try {
						var b = a;
						a = t ? e.getTrusted(t, b) : e.valueOf(b);
						var c;
						if (s && !y(a)) c = a;
						else if (null == a) c = "";
						else {
							switch (typeof a) {
								case "string":
									break;
								case "number":
									a = "" + a;
									break;
								default:
									a = ab(a)
							}
							c = a
						}
						return c
					} catch (g) {
						c = ac("interr", f, g.toString()), d(c)
					}
				}
				s = !!s;
				for (var m, C, r = 0, I = [], M = [], E = f.length, G = [], O = []; r < E;)
					if (-1 != (m = f.indexOf(b, r)) && -1 != (C = f.indexOf(a, m + h))) r !== m && G.push(F(f.substring(r, m))), r = f.substring(m + h, C), I.push(r), M.push(c(r, v)), r = C + l, O.push(G.length), G.push("");
					else {
						r !== E && G.push(F(f.substring(r)));
						break
					}
				if (t && 1 < G.length) throw ac("noconcat", f);
				if (!g || I.length) {
					var Q = function(a) {
						for (var b = 0, c = I.length; b < c; b++) {
							if (s && D(a[b])) return;
							G[O[b]] =
								a[b]
						}
						return G.join("")
					};
					return w(function(a) {
						var b = 0,
							c = I.length,
							e = Array(c);
						try {
							for (; b < c; b++) e[b] = M[b](a);
							return Q(e)
						} catch (g) {
							a = ac("interr", f, g.toString()), d(a)
						}
					}, {
						exp: f,
						expressions: I,
						$$watchDelegate: function(a, b, c) {
							var d;
							return a.$watchGroup(M, function(c, e) {
								var f = Q(c);
								z(b) && b.call(this, f, c !== e ? d : f, a);
								d = f
							}, c)
						}
					})
				}
			}
			var h = b.length,
				l = a.length,
				k = new RegExp(b.replace(/./g, f), "g"),
				n = new RegExp(a.replace(/./g, f), "g");
			g.startSymbol = function() {
				return b
			};
			g.endSymbol = function() {
				return a
			};
			return g
		}]
	}

	function Je() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
			function e(e, h, l, k) {
				var n = a.setInterval,
					p = a.clearInterval,
					q = 0,
					t = y(k) && !k,
					s = (t ? d : c).defer(),
					F = s.promise;
				l = y(l) ? l : 0;
				F.then(null, null, e);
				F.$$intervalId = n(function() {
					s.notify(q++);
					0 < l && q >= l && (s.resolve(q), p(F.$$intervalId), delete f[F.$$intervalId]);
					t || b.$apply()
				}, h);
				f[F.$$intervalId] = s;
				return F
			}
			var f = {};
			e.cancel = function(b) {
				return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) :
					!1
			};
			return e
		}]
	}

	function Rd() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "\u00a4",
						posSuf: "",
						negPre: "(\u00a4",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January February March April May June July August September October November December".split(" "),
					SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
					DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
					SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a",
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"]
				},
				pluralCat: function(b) {
					return 1 === b ? "one" : "other"
				}
			}
		}
	}

	function bc(b) {
		b = b.split("/");
		for (var a = b.length; a--;) b[a] = sb(b[a]);
		return b.join("/")
	}

	function $c(b, a) {
		var c = Aa(b);
		a.$$protocol = c.protocol;
		a.$$host = c.hostname;
		a.$$port = aa(c.port) || xf[c.protocol] || null
	}

	function ad(b, a) {
		var c = "/" !== b.charAt(0);
		c && (b = "/" + b);
		var d = Aa(b);
		a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
		a.$$search = rc(d.search);
		a.$$hash = decodeURIComponent(d.hash);
		a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
	}

	function ua(b, a) {
		if (0 === a.indexOf(b)) return a.substr(b.length)
	}

	function Ga(b) {
		var a = b.indexOf("#");
		return -1 == a ? b : b.substr(0, a)
	}

	function Gb(b) {
		return b.replace(/(#.+)|#$/, "$1")
	}

	function cc(b, a, c) {
		this.$$html5 = !0;
		c = c || "";
		$c(b, this);
		this.$$parse = function(b) {
			var c = ua(a, b);
			if (!x(c)) throw Hb("ipthprfx", b, a);
			ad(c, this);
			this.$$path || (this.$$path = "/");
			this.$$compose()
		};
		this.$$compose = function() {
			var b = Pb(this.$$search),
				c = this.$$hash ? "#" + sb(this.$$hash) : "";
			this.$$url = bc(this.$$path) + (b ? "?" + b : "") + c;
			this.$$absUrl = a + this.$$url.substr(1)
		};
		this.$$parseLinkUrl = function(d, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
			var f, g;
			(f = ua(b, d)) !== u ? (g = f, g = (f = ua(c, f)) !== u ? a + (ua("/", f) || f) : b + g) : (f = ua(a, d)) !== u ? g = a + f : a == d + "/" && (g = a);
			g && this.$$parse(g);
			return !!g
		}
	}

	function dc(b, a, c) {
		$c(b, this);
		this.$$parse = function(d) {
			var e = ua(b, d) || ua(a, d),
				f;
			D(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", D(e) && (b = d, this.replace())) : (f = ua(c, e), D(f) && (f = e));
			ad(f, this);
			d = this.$$path;
			var e = b,
				g = /^\/[A-Z]:(\/.*)/;
			0 === f.indexOf(e) && (f = f.replace(e, ""));
			g.exec(f) || (d = (f = g.exec(d)) ? f[1] : d);
			this.$$path = d;
			this.$$compose()
		};
		this.$$compose = function() {
			var a =
				Pb(this.$$search),
				e = this.$$hash ? "#" + sb(this.$$hash) : "";
			this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;
			this.$$absUrl = b + (this.$$url ? c + this.$$url : "")
		};
		this.$$parseLinkUrl = function(a, c) {
			return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1
		}
	}

	function bd(b, a, c) {
		this.$$html5 = !0;
		dc.apply(this, arguments);
		this.$$parseLinkUrl = function(d, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
			var f, g;
			b == Ga(d) ? f = d : (g = ua(a, d)) ? f = b + c + g : a === d + "/" && (f = a);
			f && this.$$parse(f);
			return !!f
		};
		this.$$compose = function() {
			var a = Pb(this.$$search),
				e = this.$$hash ? "#" + sb(this.$$hash) : "";
			this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;
			this.$$absUrl = b + c + this.$$url
		}
	}

	function Ib(b) {
		return function() {
			return this[b]
		}
	}

	function cd(b, a) {
		return function(c) {
			if (D(c)) return this[b];
			this[b] = a(c);
			this.$$compose();
			return this
		}
	}

	function Me() {
		var b = "",
			a = {
				enabled: !1,
				requireBase: !0,
				rewriteLinks: !0
			};
		this.hashPrefix = function(a) {
			return y(a) ? (b = a, this) : b
		};
		this.html5Mode = function(b) {
			return Xa(b) ? (a.enabled = b, this) : L(b) ? (Xa(b.enabled) && (a.enabled = b.enabled), Xa(b.requireBase) &&
				(a.requireBase = b.requireBase), Xa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
		};
		this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
			function h(a, b, c) {
				var e = k.url(),
					f = k.$$state;
				try {
					d.url(a, b, c), k.$$state = d.state()
				} catch (g) {
					throw k.url(e), k.$$state = f, g;
				}
			}

			function l(a, b) {
				c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
			}
			var k, n;
			n = d.baseHref();
			var p = d.url(),
				q;
			if (a.enabled) {
				if (!n && a.requireBase) throw Hb("nobase");
				q = p.substring(0, p.indexOf("/",
					p.indexOf("//") + 2)) + (n || "/");
				n = e.history ? cc : bd
			} else q = Ga(p), n = dc;
			var t = q.substr(0, Ga(q).lastIndexOf("/") + 1);
			k = new n(q, t, "#" + b);
			k.$$parseLinkUrl(p, p);
			k.$$state = d.state();
			var s = /^\s*(javascript|mailto):/i;
			f.on("click", function(b) {
				if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
					for (var e = B(b.target);
						"a" !== wa(e[0]);)
						if (e[0] === f[0] || !(e = e.parent())[0]) return;
					var l = e.prop("href"),
						h = e.attr("href") || e.attr("xlink:href");
					L(l) && "[object SVGAnimatedString]" === l.toString() && (l =
						Aa(l.animVal).href);
					s.test(l) || !l || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(l, h) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
				}
			});
			Gb(k.absUrl()) != Gb(p) && d.url(k.absUrl(), !0);
			var F = !0;
			d.onUrlChange(function(a, b) {
				D(ua(t, a)) ? g.location.href = a : (c.$evalAsync(function() {
					var d = k.absUrl(),
						e = k.$$state,
						f;
					k.$$parse(a);
					k.$$state = b;
					f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
					k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (F = !1, l(d, e)))
				}), c.$$phase || c.$digest())
			});
			c.$watch(function() {
				var a = Gb(d.url()),
					b = Gb(k.absUrl()),
					f = d.state(),
					g = k.$$replace,
					q = a !== b || k.$$html5 && e.history && f !== k.$$state;
				if (F || q) F = !1, c.$evalAsync(function() {
					var b = k.absUrl(),
						d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
					k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
				});
				k.$$replace = !1
			});
			return k
		}]
	}

	function Ne() {
		var b = !0,
			a = this;
		this.debugEnabled = function(a) {
			return y(a) ? (b =
				a, this) : b
		};
		this.$get = ["$window", function(c) {
			function d(a) {
				a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
				return a
			}

			function e(a) {
				var b = c.console || {},
					e = b[a] || b.log || A;
				a = !1;
				try {
					a = !!e.apply
				} catch (l) {}
				return a ? function() {
					var a = [];
					r(arguments, function(b) {
						a.push(d(b))
					});
					return e.apply(b, a)
				} : function(a, b) {
					e(a, null == b ? "" : b)
				}
			}
			return {
				log: e("log"),
				info: e("info"),
				warn: e("warn"),
				error: e("error"),
				debug: function() {
					var c = e("debug");
					return function() {
						b && c.apply(a, arguments)
					}
				}()
			}
		}]
	}

	function va(b, a) {
		if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ga("isecfld", a);
		return b
	}

	function dd(b, a) {
		b += "";
		if (!x(b)) throw ga("iseccst", a);
		return b
	}

	function oa(b, a) {
		if (b) {
			if (b.constructor === b) throw ga("isecfn", a);
			if (b.window === b) throw ga("isecwindow", a);
			if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ga("isecdom", a);
			if (b === Object) throw ga("isecobj",
				a);
		}
		return b
	}

	function ec(b) {
		return b.constant
	}

	function jb(b, a, c, d, e) {
		oa(b, e);
		oa(a, e);
		c = c.split(".");
		for (var f, g = 0; 1 < c.length; g++) {
			f = va(c.shift(), e);
			var h = 0 === g && a && a[f] || b[f];
			h || (h = {}, b[f] = h);
			b = oa(h, e)
		}
		f = va(c.shift(), e);
		oa(b[f], e);
		return b[f] = d
	}

	function Qa(b) {
		return "constructor" == b
	}

	function ed(b, a, c, d, e, f, g) {
		va(b, f);
		va(a, f);
		va(c, f);
		va(d, f);
		va(e, f);
		var h = function(a) {
				return oa(a, f)
			},
			l = g || Qa(b) ? h : ra,
			k = g || Qa(a) ? h : ra,
			n = g || Qa(c) ? h : ra,
			p = g || Qa(d) ? h : ra,
			q = g || Qa(e) ? h : ra;
		return function(f, g) {
			var h = g && g.hasOwnProperty(b) ?
				g : f;
			if (null == h) return h;
			h = l(h[b]);
			if (!a) return h;
			if (null == h) return u;
			h = k(h[a]);
			if (!c) return h;
			if (null == h) return u;
			h = n(h[c]);
			if (!d) return h;
			if (null == h) return u;
			h = p(h[d]);
			return e ? null == h ? u : h = q(h[e]) : h
		}
	}

	function yf(b, a) {
		return function(c, d) {
			return b(c, d, oa, a)
		}
	}

	function zf(b, a, c) {
		var d = a.expensiveChecks,
			e = d ? Af : Bf,
			f = e[b];
		if (f) return f;
		var g = b.split("."),
			h = g.length;
		if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
			var e = 0,
				f;
			do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (e <
				h);
			return f
		};
		else {
			var l = "";
			d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
			var k = d;
			r(g, function(a, b) {
				va(a, c);
				var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
				if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;
				l += "if(s == null) return undefined;\ns=" + e + ";\n"
			});
			l += "return s;";
			a = new Function("s", "l", "eso", "fe", l);
			a.toString = ea(l);
			k && (a = yf(a, c));
			f = a
		}
		f.sharedGetter = !0;
		f.assign = function(a, c, d) {
			return jb(a, d, b, c, b)
		};
		return e[b] = f
	}

	function fc(b) {
		return z(b.valueOf) ? b.valueOf() : Cf.call(b)
	}

	function Oe() {
		var b = ja(),
			a = ja();
		this.$get = ["$filter", "$sniffer", function(c, d) {
			function e(a) {
				var b = a;
				a.sharedGetter && (b = function(b, c) {
					return a(b, c)
				}, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
				return b
			}

			function f(a, b) {
				for (var c = 0, d = a.length; c < d; c++) {
					var e = a[c];
					e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
				}
				return b
			}

			function g(a, b) {
				return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
			}

			function h(a, b, c, d) {
				var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
					l;
				if (1 === e.length) {
					var h = g,
						e = e[0];
					return a.$watch(function(a) {
						var b = e(a);
						g(b, h) || (l = d(a), h = b && fc(b));
						return l
					}, b, c)
				}
				for (var k = [], q = 0, p = e.length; q < p; q++) k[q] = g;
				return a.$watch(function(a) {
					for (var b = !1, c = 0, f = e.length; c < f; c++) {
						var h = e[c](a);
						if (b || (b = !g(h, k[c]))) k[c] = h && fc(h)
					}
					b && (l = d(a));
					return l
				}, b, c)
			}

			function l(a, b, c, d) {
				var e, f;
				return e = a.$watch(function(a) {
					return d(a)
				}, function(a, c, d) {
					f = a;
					z(b) && b.apply(this, arguments);
					y(a) && d.$$postDigest(function() {
						y(f) && e()
					})
				}, c)
			}

			function k(a, b, c, d) {
				function e(a) {
					var b = !0;
					r(a, function(a) {
						y(a) || (b = !1)
					});
					return b
				}
				var f, g;
				return f = a.$watch(function(a) {
					return d(a)
				}, function(a, c, d) {
					g = a;
					z(b) && b.call(this, a, c, d);
					e(a) && d.$$postDigest(function() {
						e(g) && f()
					})
				}, c)
			}

			function n(a, b, c, d) {
				var e;
				return e = a.$watch(function(a) {
					return d(a)
				}, function(a, c, d) {
					z(b) && b.apply(this, arguments);
					e()
				}, c)
			}

			function p(a, b) {
				if (!b) return a;
				var c = a.$$watchDelegate,
					c = c !== k && c !== l ? function(c, d) {
						var e = a(c, d);
						return b(e, c, d)
					} : function(c, d) {
						var e = a(c, d),
							f = b(e, c, d);
						return y(e) ? f : e
					};
				a.$$watchDelegate && a.$$watchDelegate !==
					h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
				return c
			}
			var q = {
					csp: d.csp,
					expensiveChecks: !1
				},
				t = {
					csp: d.csp,
					expensiveChecks: !0
				};
			return function(d, f, g) {
				var m, r, u;
				switch (typeof d) {
					case "string":
						u = d = d.trim();
						var I = g ? a : b;
						m = I[u];
						m || (":" === d.charAt(0) && ":" === d.charAt(1) && (r = !0, d = d.substring(2)), g = g ? t : q, m = new gc(g), m = (new kb(m, c, g)).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), I[u] = m);
						return p(m, f);
					case "function":
						return p(d, f);
					default:
						return p(A, f)
				}
			}
		}]
	}

	function Qe() {
		this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
			return fd(function(a) {
				b.$evalAsync(a)
			}, a)
		}]
	}

	function Re() {
		this.$get = ["$browser", "$exceptionHandler", function(b, a) {
			return fd(function(a) {
				b.defer(a)
			}, a)
		}]
	}

	function fd(b, a) {
		function c(a, b, c) {
			function d(b) {
				return function(c) {
					e || (e = !0, b.call(a, c))
				}
			}
			var e = !1;
			return [d(b), d(c)]
		}

		function d() {
			this.$$state = {
				status: 0
			}
		}

		function e(a, b) {
			return function(c) {
				b.call(a, c)
			}
		}

		function f(c) {
			!c.processScheduled &&
				c.pending && (c.processScheduled = !0, b(function() {
					var b, d, e;
					e = c.pending;
					c.processScheduled = !1;
					c.pending = u;
					for (var f = 0, g = e.length; f < g; ++f) {
						d = e[f][0];
						b = e[f][c.status];
						try {
							z(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
						} catch (l) {
							d.reject(l), a(l)
						}
					}
				}))
		}

		function g() {
			this.promise = new d;
			this.resolve = e(this, this.resolve);
			this.reject = e(this, this.reject);
			this.notify = e(this, this.notify)
		}
		var h = S("$q", TypeError);
		d.prototype = {
			then: function(a, b, c) {
				var d = new g;
				this.$$state.pending = this.$$state.pending || [];
				this.$$state.pending.push([d, a, b, c]);
				0 < this.$$state.status && f(this.$$state);
				return d.promise
			},
			"catch": function(a) {
				return this.then(null, a)
			},
			"finally": function(a, b) {
				return this.then(function(b) {
					return k(b, !0, a)
				}, function(b) {
					return k(b, !1, a)
				}, b)
			}
		};
		g.prototype = {
			resolve: function(a) {
				this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
			},
			$$resolve: function(b) {
				var d, e;
				e = c(this, this.$$resolve, this.$$reject);
				try {
					if (L(b) || z(b)) d = b && b.then;
					z(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
				} catch (g) {
					e[1](g), a(g)
				}
			},
			reject: function(a) {
				this.promise.$$state.status || this.$$reject(a)
			},
			$$reject: function(a) {
				this.promise.$$state.value = a;
				this.promise.$$state.status = 2;
				f(this.promise.$$state)
			},
			notify: function(c) {
				var d = this.promise.$$state.pending;
				0 >= this.promise.$$state.status && d && d.length && b(function() {
					for (var b, e, f = 0, g = d.length; f < g; f++) {
						e = d[f][0];
						b = d[f][3];
						try {
							e.notify(z(b) ?
								b(c) : c)
						} catch (l) {
							a(l)
						}
					}
				})
			}
		};
		var l = function(a, b) {
				var c = new g;
				b ? c.resolve(a) : c.reject(a);
				return c.promise
			},
			k = function(a, b, c) {
				var d = null;
				try {
					z(c) && (d = c())
				} catch (e) {
					return l(e, !1)
				}
				return d && z(d.then) ? d.then(function() {
					return l(a, b)
				}, function(a) {
					return l(a, !1)
				}) : l(a, b)
			},
			n = function(a, b, c, d) {
				var e = new g;
				e.resolve(a);
				return e.promise.then(b, c, d)
			},
			p = function t(a) {
				if (!z(a)) throw h("norslvr", a);
				if (!(this instanceof t)) return new t(a);
				var b = new g;
				a(function(a) {
					b.resolve(a)
				}, function(a) {
					b.reject(a)
				});
				return b.promise
			};
		p.defer = function() {
			return new g
		};
		p.reject = function(a) {
			var b = new g;
			b.reject(a);
			return b.promise
		};
		p.when = n;
		p.all = function(a) {
			var b = new g,
				c = 0,
				d = H(a) ? [] : {};
			r(a, function(a, e) {
				c++;
				n(a).then(function(a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
				}, function(a) {
					d.hasOwnProperty(e) || b.reject(a)
				})
			});
			0 === c && b.resolve(d);
			return b.promise
		};
		return p
	}

	function $e() {
		this.$get = ["$window", "$timeout", function(b, a) {
			function c() {
				for (var a = 0; a < n.length; a++) {
					var b = n[a];
					b && (n[a] = null, b())
				}
				k = n.length = 0
			}

			function d(a) {
				var b =
					n.length;
				k++;
				n.push(a);
				0 === b && (l = h(c));
				return function() {
					0 <= b && (b = n[b] = null, 0 === --k && l && (l(), l = null, n.length = 0))
				}
			}
			var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
				f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
				g = !!e,
				h = g ? function(a) {
					var b = e(a);
					return function() {
						f(b)
					}
				} : function(b) {
					var c = a(b, 16.66, !1);
					return function() {
						a.cancel(c)
					}
				};
			d.supported = g;
			var l, k = 0,
				n = [];
			return d
		}]
	}

	function Pe() {
		function b(a) {
			function b() {
				this.$$watchers = this.$$nextSibling =
					this.$$childHead = this.$$childTail = null;
				this.$$listeners = {};
				this.$$listenerCount = {};
				this.$id = ++rb;
				this.$$ChildScope = null
			}
			b.prototype = a;
			return b
		}
		var a = 10,
			c = S("$rootScope"),
			d = null,
			e = null;
		this.digestTtl = function(b) {
			arguments.length && (a = b);
			return a
		};
		this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, l) {
			function k(a) {
				a.currentScope.$$destroyed = !0
			}

			function n() {
				this.$id = ++rb;
				this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail =
					null;
				this.$root = this;
				this.$$destroyed = !1;
				this.$$listeners = {};
				this.$$listenerCount = {};
				this.$$isolateBindings = null
			}

			function p(a) {
				if (v.$$phase) throw c("inprog", v.$$phase);
				v.$$phase = a
			}

			function q(a, b, c) {
				do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
			}

			function t() {}

			function s() {
				for (; u.length;) try {
					u.shift()()
				} catch (a) {
					g(a)
				}
				e = null
			}

			function F() {
				null === e && (e = l.defer(function() {
					v.$apply(s)
				}))
			}
			n.prototype = {
				constructor: n,
				$new: function(a, c) {
					var d;
					c = c || this;
					a ?
						(d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
					d.$parent = c;
					d.$$prevSibling = c.$$childTail;
					c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
					(a || c != this) && d.$on("$destroy", k);
					return d
				},
				$watch: function(a, b, c) {
					var e = h(a);
					if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e);
					var f = this.$$watchers,
						g = {
							fn: b,
							last: t,
							get: e,
							exp: a,
							eq: !!c
						};
					d = null;
					z(b) || (g.fn = A);
					f || (f = this.$$watchers = []);
					f.unshift(g);
					return function() {
						Ya(f,
							g);
						d = null
					}
				},
				$watchGroup: function(a, b) {
					function c() {
						l = !1;
						h ? (h = !1, b(e, e, g)) : b(e, d, g)
					}
					var d = Array(a.length),
						e = Array(a.length),
						f = [],
						g = this,
						l = !1,
						h = !0;
					if (!a.length) {
						var k = !0;
						g.$evalAsync(function() {
							k && b(e, e, g)
						});
						return function() {
							k = !1
						}
					}
					if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
						e[0] = a;
						d[0] = c;
						b(e, a === c ? e : d, f)
					});
					r(a, function(a, b) {
						var h = g.$watch(a, function(a, f) {
							e[b] = a;
							d[b] = f;
							l || (l = !0, g.$evalAsync(c))
						});
						f.push(h)
					});
					return function() {
						for (; f.length;) f.shift()()
					}
				},
				$watchCollection: function(a, b) {
					function c(a) {
						e =
							a;
						var b, d, g, l;
						if (!D(e)) {
							if (L(e))
								if (Ta(e))
									for (f !== p && (f = p, t = f.length = 0, k++), a = e.length, t !== a && (k++, f.length = t = a), b = 0; b < a; b++) l = f[b], g = e[b], d = l !== l && g !== g, d || l === g || (k++, f[b] = g);
								else {
									f !== n && (f = n = {}, t = 0, k++);
									a = 0;
									for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], l = f[b], b in f ? (d = l !== l && g !== g, d || l === g || (k++, f[b] = g)) : (t++, f[b] = g, k++));
									if (t > a)
										for (b in k++, f) e.hasOwnProperty(b) || (t--, delete f[b])
								}
							else f !== e && (f = e, k++);
							return k
						}
					}
					c.$stateful = !0;
					var d = this,
						e, f, g, l = 1 < b.length,
						k = 0,
						q = h(a, c),
						p = [],
						n = {},
						m = !0,
						t = 0;
					return this.$watch(q,
						function() {
							m ? (m = !1, b(e, e, d)) : b(e, g, d);
							if (l)
								if (L(e))
									if (Ta(e)) {
										g = Array(e.length);
										for (var a = 0; a < e.length; a++) g[a] = e[a]
									} else
										for (a in g = {}, e) sc.call(e, a) && (g[a] = e[a]);
							else g = e
						})
				},
				$digest: function() {
					var b, f, h, k, q, n, r = a,
						F, P = [],
						u, y;
					p("$digest");
					l.$$checkUrlChange();
					this === v && null !== e && (l.defer.cancel(e), s());
					d = null;
					do {
						n = !1;
						for (F = this; m.length;) {
							try {
								y = m.shift(), y.scope.$eval(y.expression, y.locals)
							} catch (w) {
								g(w)
							}
							d = null
						}
						a: do {
							if (k = F.$$watchers)
								for (q = k.length; q--;) try {
									if (b = k[q])
										if ((f = b.get(F)) !== (h = b.last) &&
											!(b.eq ? ia(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === t ? f : h, F), 5 > r && (u = 4 - r, P[u] || (P[u] = []), P[u].push({
											msg: z(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
											newVal: f,
											oldVal: h
										}));
										else if (b === d) {
										n = !1;
										break a
									}
								} catch (D) {
									g(D)
								}
							if (!(k = F.$$childHead || F !== this && F.$$nextSibling))
								for (; F !== this && !(k = F.$$nextSibling);) F = F.$parent
						} while (F = k);
						if ((n || m.length) && !r--) throw v.$$phase = null, c("infdig", a, P);
					} while (n || m.length);
					for (v.$$phase = null; C.length;) try {
						C.shift()()
					} catch (B) {
						g(B)
					}
				},
				$destroy: function() {
					if (!this.$$destroyed) {
						var a = this.$parent;
						this.$broadcast("$destroy");
						this.$$destroyed = !0;
						if (this !== v) {
							for (var b in this.$$listenerCount) q(this, this.$$listenerCount[b], b);
							a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
							a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
							this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
							this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
							this.$destroy = this.$digest = this.$apply = this.$evalAsync =
								this.$applyAsync = A;
							this.$on = this.$watch = this.$watchGroup = function() {
								return A
							};
							this.$$listeners = {};
							this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
						}
					}
				},
				$eval: function(a, b) {
					return h(a)(this, b)
				},
				$evalAsync: function(a, b) {
					v.$$phase || m.length || l.defer(function() {
						m.length && v.$digest()
					});
					m.push({
						scope: this,
						expression: a,
						locals: b
					})
				},
				$$postDigest: function(a) {
					C.push(a)
				},
				$apply: function(a) {
					try {
						return p("$apply"), this.$eval(a)
					} catch (b) {
						g(b)
					} finally {
						v.$$phase =
							null;
						try {
							v.$digest()
						} catch (c) {
							throw g(c), c;
						}
					}
				},
				$applyAsync: function(a) {
					function b() {
						c.$eval(a)
					}
					var c = this;
					a && u.push(b);
					F()
				},
				$on: function(a, b) {
					var c = this.$$listeners[a];
					c || (this.$$listeners[a] = c = []);
					c.push(b);
					var d = this;
					do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
					var e = this;
					return function() {
						var d = c.indexOf(b); - 1 !== d && (c[d] = null, q(e, 1, a))
					}
				},
				$emit: function(a, b) {
					var c = [],
						d, e = this,
						f = !1,
						l = {
							name: a,
							targetScope: e,
							stopPropagation: function() {
								f = !0
							},
							preventDefault: function() {
								l.defaultPrevented = !0
							},
							defaultPrevented: !1
						},
						h = Za([l], arguments, 1),
						k, q;
					do {
						d = e.$$listeners[a] || c;
						l.currentScope = e;
						k = 0;
						for (q = d.length; k < q; k++)
							if (d[k]) try {
								d[k].apply(null, h)
							} catch (p) {
								g(p)
							} else d.splice(k, 1), k--, q--;
						if (f) return l.currentScope = null, l;
						e = e.$parent
					} while (e);
					l.currentScope = null;
					return l
				},
				$broadcast: function(a, b) {
					var c = this,
						d = this,
						e = {
							name: a,
							targetScope: this,
							preventDefault: function() {
								e.defaultPrevented = !0
							},
							defaultPrevented: !1
						};
					if (!this.$$listenerCount[a]) return e;
					for (var f = Za([e], arguments, 1), l, h; c = d;) {
						e.currentScope =
							c;
						d = c.$$listeners[a] || [];
						l = 0;
						for (h = d.length; l < h; l++)
							if (d[l]) try {
								d[l].apply(null, f)
							} catch (k) {
								g(k)
							} else d.splice(l, 1), l--, h--;
						if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
							for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
					}
					e.currentScope = null;
					return e
				}
			};
			var v = new n,
				m = v.$$asyncQueue = [],
				C = v.$$postDigestQueue = [],
				u = v.$$applyAsyncQueue = [];
			return v
		}]
	}

	function Sd() {
		var b = /^\s*(https?|ftp|mailto|tel|file):/,
			a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
		this.aHrefSanitizationWhitelist =
			function(a) {
				return y(a) ? (b = a, this) : b
			};
		this.imgSrcSanitizationWhitelist = function(b) {
			return y(b) ? (a = b, this) : a
		};
		this.$get = function() {
			return function(c, d) {
				var e = d ? a : b,
					f;
				f = Aa(c).href;
				return "" === f || f.match(e) ? c : "unsafe:" + f
			}
		}
	}

	function Df(b) {
		if ("self" === b) return b;
		if (x(b)) {
			if (-1 < b.indexOf("***")) throw Ba("iwcard", b);
			b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
			return new RegExp("^" + b + "$")
		}
		if (Va(b)) return new RegExp("^" + b.source + "$");
		throw Ba("imatcher");
	}

	function hd(b) {
		var a = [];
		y(b) && r(b, function(b) {
			a.push(Df(b))
		});
		return a
	}

	function Te() {
		this.SCE_CONTEXTS = pa;
		var b = ["self"],
			a = [];
		this.resourceUrlWhitelist = function(a) {
			arguments.length && (b = hd(a));
			return b
		};
		this.resourceUrlBlacklist = function(b) {
			arguments.length && (a = hd(b));
			return a
		};
		this.$get = ["$injector", function(c) {
			function d(a, b) {
				return "self" === a ? Zc(b) : !!a.exec(b.href)
			}

			function e(a) {
				var b = function(a) {
					this.$$unwrapTrustedValue = function() {
						return a
					}
				};
				a && (b.prototype = new a);
				b.prototype.valueOf = function() {
					return this.$$unwrapTrustedValue()
				};
				b.prototype.toString = function() {
					return this.$$unwrapTrustedValue().toString()
				};
				return b
			}
			var f = function(a) {
				throw Ba("unsafe");
			};
			c.has("$sanitize") && (f = c.get("$sanitize"));
			var g = e(),
				h = {};
			h[pa.HTML] = e(g);
			h[pa.CSS] = e(g);
			h[pa.URL] = e(g);
			h[pa.JS] = e(g);
			h[pa.RESOURCE_URL] = e(h[pa.URL]);
			return {
				trustAs: function(a, b) {
					var c = h.hasOwnProperty(a) ? h[a] : null;
					if (!c) throw Ba("icontext", a, b);
					if (null === b || b === u || "" === b) return b;
					if ("string" !== typeof b) throw Ba("itype", a);
					return new c(b)
				},
				getTrusted: function(c, e) {
					if (null === e || e === u || "" === e) return e;
					var g = h.hasOwnProperty(c) ? h[c] : null;
					if (g && e instanceof g) return e.$$unwrapTrustedValue();
					if (c === pa.RESOURCE_URL) {
						var g = Aa(e.toString()),
							p, q, t = !1;
						p = 0;
						for (q = b.length; p < q; p++)
							if (d(b[p], g)) {
								t = !0;
								break
							}
						if (t)
							for (p = 0, q = a.length; p < q; p++)
								if (d(a[p], g)) {
									t = !1;
									break
								}
						if (t) return e;
						throw Ba("insecurl", e.toString());
					}
					if (c === pa.HTML) return f(e);
					throw Ba("unsafe");
				},
				valueOf: function(a) {
					return a instanceof g ? a.$$unwrapTrustedValue() : a
				}
			}
		}]
	}

	function Se() {
		var b = !0;
		this.enabled = function(a) {
			arguments.length && (b = !!a);
			return b
		};
		this.$get = ["$parse", "$sceDelegate", function(a, c) {
			if (b &&
				8 > Ra) throw Ba("iequirks");
			var d = sa(pa);
			d.isEnabled = function() {
				return b
			};
			d.trustAs = c.trustAs;
			d.getTrusted = c.getTrusted;
			d.valueOf = c.valueOf;
			b || (d.trustAs = d.getTrusted = function(a, b) {
				return b
			}, d.valueOf = ra);
			d.parseAs = function(b, c) {
				var e = a(c);
				return e.literal && e.constant ? e : a(c, function(a) {
					return d.getTrusted(b, a)
				})
			};
			var e = d.parseAs,
				f = d.getTrusted,
				g = d.trustAs;
			r(pa, function(a, b) {
				var c = K(b);
				d[fb("parse_as_" + c)] = function(b) {
					return e(a, b)
				};
				d[fb("get_trusted_" + c)] = function(b) {
					return f(a, b)
				};
				d[fb("trust_as_" +
					c)] = function(b) {
					return g(a, b)
				}
			});
			return d
		}]
	}

	function Ue() {
		this.$get = ["$window", "$document", function(b, a) {
			var c = {},
				d = aa((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]),
				e = /Boxee/i.test((b.navigator || {}).userAgent),
				f = a[0] || {},
				g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
				l = f.body && f.body.style,
				k = !1,
				n = !1;
			if (l) {
				for (var p in l)
					if (k = h.exec(p)) {
						g = k[0];
						g = g.substr(0, 1).toUpperCase() + g.substr(1);
						break
					}
				g || (g = "WebkitOpacity" in l && "webkit");
				k = !!("transition" in l || g + "Transition" in l);
				n = !!("animation" in l || g + "Animation" in
					l);
				!d || k && n || (k = x(f.body.style.webkitTransition), n = x(f.body.style.webkitAnimation))
			}
			return {
				history: !(!b.history || !b.history.pushState || 4 > d || e),
				hasEvent: function(a) {
					if ("input" === a && 11 >= Ra) return !1;
					if (D(c[a])) {
						var b = f.createElement("div");
						c[a] = "on" + a in b
					}
					return c[a]
				},
				csp: db(),
				vendorPrefix: g,
				transitions: k,
				animations: n,
				android: d
			}
		}]
	}

	function We() {
		this.$get = ["$templateCache", "$http", "$q", "$sce", function(b, a, c, d) {
			function e(f, g) {
				e.totalPendingRequests++;
				x(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));
				var h =
					a.defaults && a.defaults.transformResponse;
				H(h) ? h = h.filter(function(a) {
					return a !== Zb
				}) : h === Zb && (h = null);
				return a.get(f, {
					cache: b,
					transformResponse: h
				})["finally"](function() {
					e.totalPendingRequests--
				}).then(function(a) {
					return a.data
				}, function(a) {
					if (!g) throw ma("tpload", f);
					return c.reject(a)
				})
			}
			e.totalPendingRequests = 0;
			return e
		}]
	}

	function Xe() {
		this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
			return {
				findBindings: function(a, b, c) {
					a = a.getElementsByClassName("ng-binding");
					var g = [];
					r(a, function(a) {
						var d =
							ca.element(a).data("$binding");
						d && r(d, function(d) {
							c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
						})
					});
					return g
				},
				findModels: function(a, b, c) {
					for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
						var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
						if (l.length) return l
					}
				},
				getLocation: function() {
					return c.url()
				},
				setLocation: function(a) {
					a !== c.url() && (c.url(a), b.$digest())
				},
				whenStable: function(b) {
					a.notifyWhenNoOutstandingRequests(b)
				}
			}
		}]
	}

	function Ye() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
			function f(f, l, k) {
				var n = y(k) && !k,
					p = (n ? d : c).defer(),
					q = p.promise;
				l = a.defer(function() {
					try {
						p.resolve(f())
					} catch (a) {
						p.reject(a), e(a)
					} finally {
						delete g[q.$$timeoutId]
					}
					n || b.$apply()
				}, l);
				q.$$timeoutId = l;
				g[l] = p;
				return q
			}
			var g = {};
			f.cancel = function(b) {
				return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
			};
			return f
		}]
	}

	function Aa(b) {
		Ra && (Z.setAttribute("href", b), b = Z.href);
		Z.setAttribute("href", b);
		return {
			href: Z.href,
			protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
			host: Z.host,
			search: Z.search ? Z.search.replace(/^\?/, "") : "",
			hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
			hostname: Z.hostname,
			port: Z.port,
			pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
		}
	}

	function Zc(b) {
		b = x(b) ? Aa(b) : b;
		return b.protocol === id.protocol && b.host === id.host
	}

	function Ze() {
		this.$get = ea(R)
	}

	function Ec(b) {
		function a(c, d) {
			if (L(c)) {
				var e = {};
				r(c, function(b, c) {
					e[c] = a(c, b)
				});
				return e
			}
			return b.factory(c +
				"Filter", d)
		}
		this.register = a;
		this.$get = ["$injector", function(a) {
			return function(b) {
				return a.get(b + "Filter")
			}
		}];
		a("currency", jd);
		a("date", kd);
		a("filter", Ef);
		a("json", Ff);
		a("limitTo", Gf);
		a("lowercase", Hf);
		a("number", ld);
		a("orderBy", md);
		a("uppercase", If)
	}

	function Ef() {
		return function(b, a, c) {
			if (!H(b)) return b;
			var d;
			switch (null !== a ? typeof a : "null") {
				case "function":
					break;
				case "boolean":
				case "null":
				case "number":
				case "string":
					d = !0;
				case "object":
					a = Jf(a, c, d);
					break;
				default:
					return b
			}
			return b.filter(a)
		}
	}

	function Jf(b,
		a, c) {
		var d = L(b) && "$" in b;
		!0 === a ? a = ia : z(a) || (a = function(a, b) {
			if (D(a)) return !1;
			if (null === a || null === b) return a === b;
			if (L(a) || L(b)) return !1;
			a = K("" + a);
			b = K("" + b);
			return -1 !== a.indexOf(b)
		});
		return function(e) {
			return d && !L(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c)
		}
	}

	function Ha(b, a, c, d, e) {
		var f = null !== b ? typeof b : "null",
			g = null !== a ? typeof a : "null";
		if ("string" === g && "!" === a.charAt(0)) return !Ha(b, a.substring(1), c, d);
		if (H(b)) return b.some(function(b) {
			return Ha(b, a, c, d)
		});
		switch (f) {
			case "object":
				var h;
				if (d) {
					for (h in b)
						if ("$" !==
							h.charAt(0) && Ha(b[h], a, c, !0)) return !0;
					return e ? !1 : Ha(b, a, c, !1)
				}
				if ("object" === g) {
					for (h in a)
						if (e = a[h], !z(e) && !D(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f))) return !1;
					return !0
				}
				return c(b, a);
			case "function":
				return !1;
			default:
				return c(b, a)
		}
	}

	function jd(b) {
		var a = b.NUMBER_FORMATS;
		return function(b, d, e) {
			D(d) && (d = a.CURRENCY_SYM);
			D(e) && (e = a.PATTERNS[1].maxFrac);
			return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
		}
	}

	function ld(b) {
		var a = b.NUMBER_FORMATS;
		return function(b, d) {
			return null ==
				b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
		}
	}

	function nd(b, a, c, d, e) {
		if (!isFinite(b) || L(b)) return "";
		var f = 0 > b;
		b = Math.abs(b);
		var g = b + "",
			h = "",
			l = [],
			k = !1;
		if (-1 !== g.indexOf("e")) {
			var n = g.match(/([\d\.]+)e(-?)(\d+)/);
			n && "-" == n[2] && n[3] > e + 1 ? b = 0 : (h = g, k = !0)
		}
		if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
		else {
			g = (g.split(od)[1] || "").length;
			D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
			b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
			var g = ("" + b).split(od),
				k = g[0],
				g = g[1] || "",
				p = 0,
				q = a.lgSize,
				t = a.gSize;
			if (k.length >= q + t)
				for (p = k.length - q, n = 0; n < p; n++) 0 === (p - n) % t && 0 !== n && (h += c), h += k.charAt(n);
			for (n = p; n < k.length; n++) 0 === (k.length - n) % q && 0 !== n && (h += c), h += k.charAt(n);
			for (; g.length < e;) g += "0";
			e && "0" !== e && (h += d + g.substr(0, e))
		}
		0 === b && (f = !1);
		l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
		return l.join("")
	}

	function Jb(b, a, c) {
		var d = "";
		0 > b && (d = "-", b = -b);
		for (b = "" + b; b.length < a;) b = "0" + b;
		c && (b = b.substr(b.length - a));
		return d + b
	}

	function U(b, a, c, d) {
		c = c || 0;
		return function(e) {
			e = e["get" + b]();
			if (0 < c || e > -c) e +=
				c;
			0 === e && -12 == c && (e = 12);
			return Jb(e, a, d)
		}
	}

	function Kb(b, a) {
		return function(c, d) {
			var e = c["get" + b](),
				f = vb(a ? "SHORT" + b : b);
			return d[f][e]
		}
	}

	function pd(b) {
		var a = (new Date(b, 0, 1)).getDay();
		return new Date(b, 0, (4 >= a ? 5 : 12) - a)
	}

	function qd(b) {
		return function(a) {
			var c = pd(a.getFullYear());
			a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
			a = 1 + Math.round(a / 6048E5);
			return Jb(a, b)
		}
	}

	function hc(b, a) {
		return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1]
	}

	function kd(b) {
		function a(a) {
			var b;
			if (b = a.match(c)) {
				a =
					new Date(0);
				var f = 0,
					g = 0,
					h = b[8] ? a.setUTCFullYear : a.setFullYear,
					l = b[8] ? a.setUTCHours : a.setHours;
				b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));
				h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
				f = aa(b[4] || 0) - f;
				g = aa(b[5] || 0) - g;
				h = aa(b[6] || 0);
				b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
				l.call(a, f, g, h, b)
			}
			return a
		}
		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(c, e, f) {
			var g = "",
				h = [],
				l, k;
			e = e || "mediumDate";
			e = b.DATETIME_FORMATS[e] || e;
			x(c) && (c = Kf.test(c) ?
				aa(c) : a(c));
			Y(c) && (c = new Date(c));
			if (!ha(c)) return c;
			for (; e;)(k = Lf.exec(e)) ? (h = Za(h, k, 1), e = h.pop()) : (h.push(e), e = null);
			f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
			r(h, function(a) {
				l = Mf[a];
				g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			});
			return g
		}
	}

	function Ff() {
		return function(b, a) {
			D(a) && (a = 2);
			return ab(b, a)
		}
	}

	function Gf() {
		return function(b, a) {
			Y(b) && (b = b.toString());
			return H(b) || x(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) :
				aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : x(b) ? "" : [] : b
		}
	}

	function md(b) {
		return function(a, c, d) {
			function e(a, b) {
				return b ? function(b, c) {
					return a(c, b)
				} : a
			}

			function f(a) {
				switch (typeof a) {
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function g(a) {
				return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
			}

			function h(a, b) {
				var c = typeof a,
					d = typeof b;
				c === d && "object" === c && (a = g(a), b = g(b));
				return c === d ? ("string" === c && (a =
					a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
			}
			if (!Ta(a)) return a;
			c = H(c) ? c : [c];
			0 === c.length && (c = ["+"]);
			c = c.map(function(a) {
				var c = !1,
					d = a || ra;
				if (x(a)) {
					if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
					if ("" === a) return e(h, c);
					d = b(a);
					if (d.constant) {
						var f = d();
						return e(function(a, b) {
							return h(a[f], b[f])
						}, c)
					}
				}
				return e(function(a, b) {
					return h(d(a), d(b))
				}, c)
			});
			return $a.call(a).sort(e(function(a, b) {
					for (var d = 0; d < c.length; d++) {
						var e = c[d](a, b);
						if (0 !== e) return e
					}
					return 0
				},
				d))
		}
	}

	function Ia(b) {
		z(b) && (b = {
			link: b
		});
		b.restrict = b.restrict || "AC";
		return ea(b)
	}

	function rd(b, a, c, d, e) {
		var f = this,
			g = [],
			h = f.$$parentForm = b.parent().controller("form") || Lb;
		f.$error = {};
		f.$$success = {};
		f.$pending = u;
		f.$name = e(a.name || a.ngForm || "")(c);
		f.$dirty = !1;
		f.$pristine = !0;
		f.$valid = !0;
		f.$invalid = !1;
		f.$submitted = !1;
		h.$addControl(f);
		f.$rollbackViewValue = function() {
			r(g, function(a) {
				a.$rollbackViewValue()
			})
		};
		f.$commitViewValue = function() {
			r(g, function(a) {
				a.$commitViewValue()
			})
		};
		f.$addControl = function(a) {
			Ma(a.$name,
				"input");
			g.push(a);
			a.$name && (f[a.$name] = a)
		};
		f.$$renameControl = function(a, b) {
			var c = a.$name;
			f[c] === a && delete f[c];
			f[b] = a;
			a.$name = b
		};
		f.$removeControl = function(a) {
			a.$name && f[a.$name] === a && delete f[a.$name];
			r(f.$pending, function(b, c) {
				f.$setValidity(c, null, a)
			});
			r(f.$error, function(b, c) {
				f.$setValidity(c, null, a)
			});
			r(f.$$success, function(b, c) {
				f.$setValidity(c, null, a)
			});
			Ya(g, a)
		};
		sd({
			ctrl: this,
			$element: b,
			set: function(a, b, c) {
				var d = a[b];
				d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
			},
			unset: function(a, b, c) {
				var d = a[b];
				d && (Ya(d, c), 0 === d.length && delete a[b])
			},
			parentForm: h,
			$animate: d
		});
		f.$setDirty = function() {
			d.removeClass(b, Sa);
			d.addClass(b, Mb);
			f.$dirty = !0;
			f.$pristine = !1;
			h.$setDirty()
		};
		f.$setPristine = function() {
			d.setClass(b, Sa, Mb + " ng-submitted");
			f.$dirty = !1;
			f.$pristine = !0;
			f.$submitted = !1;
			r(g, function(a) {
				a.$setPristine()
			})
		};
		f.$setUntouched = function() {
			r(g, function(a) {
				a.$setUntouched()
			})
		};
		f.$setSubmitted = function() {
			d.addClass(b, "ng-submitted");
			f.$submitted = !0;
			h.$setSubmitted()
		}
	}

	function ic(b) {
		b.$formatters.push(function(a) {
			return b.$isEmpty(a) ?
				a : a.toString()
		})
	}

	function lb(b, a, c, d, e, f) {
		var g = K(a[0].type);
		if (!e.android) {
			var h = !1;
			a.on("compositionstart", function(a) {
				h = !0
			});
			a.on("compositionend", function() {
				h = !1;
				l()
			})
		}
		var l = function(b) {
			k && (f.defer.cancel(k), k = null);
			if (!h) {
				var e = a.val();
				b = b && b.type;
				"password" === g || c.ngTrim && "false" === c.ngTrim || (e = N(e));
				(d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
			}
		};
		if (e.hasEvent("input")) a.on("input", l);
		else {
			var k, n = function(a, b, c) {
				k || (k = f.defer(function() {
					k = null;
					b && b.value === c || l(a)
				}))
			};
			a.on("keydown", function(a) {
				var b = a.keyCode;
				91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value)
			});
			if (e.hasEvent("paste")) a.on("paste cut", n)
		}
		a.on("change", l);
		d.$render = function() {
			a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
		}
	}

	function Nb(b, a) {
		return function(c, d) {
			var e, f;
			if (ha(c)) return c;
			if (x(c)) {
				'"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
				if (Nf.test(c)) return new Date(c);
				b.lastIndex = 0;
				if (e = b.exec(c)) return e.shift(), f = d ? {
					yyyy: d.getFullYear(),
					MM: d.getMonth() + 1,
					dd: d.getDate(),
					HH: d.getHours(),
					mm: d.getMinutes(),
					ss: d.getSeconds(),
					sss: d.getMilliseconds() / 1E3
				} : {
					yyyy: 1970,
					MM: 1,
					dd: 1,
					HH: 0,
					mm: 0,
					ss: 0,
					sss: 0
				}, r(e, function(b, c) {
					c < a.length && (f[a[c]] = +b)
				}), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
			}
			return NaN
		}
	}

	function mb(b, a, c, d) {
		return function(e, f, g, h, l, k, n) {
			function p(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime())
			}

			function q(a) {
				return y(a) ? ha(a) ? a : c(a) : u
			}
			td(e, f, g, h);
			lb(e, f, g, h, l, k);
			var t = h && h.$options && h.$options.timezone,
				s;
			h.$$parserName = b;
			h.$parsers.push(function(b) {
				return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u
			});
			h.$formatters.push(function(a) {
				if (a && !ha(a)) throw nb("datefmt", a);
				if (p(a)) {
					if ((s = a) && "UTC" === t) {
						var b = 6E4 * s.getTimezoneOffset();
						s = new Date(s.getTime() + b)
					}
					return n("date")(a, d, t)
				}
				s = null;
				return ""
			});
			if (y(g.min) || g.ngMin) {
				var r;
				h.$validators.min = function(a) {
					return !p(a) || D(r) || c(a) >= r
				};
				g.$observe("min", function(a) {
					r = q(a);
					h.$validate()
				})
			}
			if (y(g.max) || g.ngMax) {
				var v;
				h.$validators.max = function(a) {
					return !p(a) || D(v) || c(a) <= v
				};
				g.$observe("max", function(a) {
					v = q(a);
					h.$validate()
				})
			}
		}
	}

	function td(b, a, c, d) {
		(d.$$hasNativeValidators = L(a[0].validity)) && d.$parsers.push(function(b) {
			var c = a.prop("validity") || {};
			return c.badInput && !c.typeMismatch ? u : b
		})
	}

	function ud(b, a, c, d, e) {
		if (y(d)) {
			b = b(d);
			if (!b.constant) throw nb("constexpr", c, d);
			return b(a)
		}
		return e
	}

	function jc(b, a) {
		b = "ngClass" + b;
		return ["$animate", function(c) {
			function d(a, b) {
				var c = [],
					d = 0;
				a: for (; d < a.length; d++) {
					for (var e = a[d],
							n = 0; n < b.length; n++)
						if (e == b[n]) continue a;
					c.push(e)
				}
				return c
			}

			function e(a) {
				if (!H(a)) {
					if (x(a)) return a.split(" ");
					if (L(a)) {
						var b = [];
						r(a, function(a, c) {
							a && (b = b.concat(c.split(" ")))
						});
						return b
					}
				}
				return a
			}
			return {
				restrict: "AC",
				link: function(f, g, h) {
					function l(a, b) {
						var c = g.data("$classCounts") || {},
							d = [];
						r(a, function(a) {
							if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
						});
						g.data("$classCounts", c);
						return d.join(" ")
					}

					function k(b) {
						if (!0 === a || f.$index % 2 === a) {
							var k = e(b || []);
							if (!n) {
								var t = l(k, 1);
								h.$addClass(t)
							} else if (!ia(b,
									n)) {
								var s = e(n),
									t = d(k, s),
									k = d(s, k),
									t = l(t, 1),
									k = l(k, -1);
								t && t.length && c.addClass(g, t);
								k && k.length && c.removeClass(g, k)
							}
						}
						n = sa(b)
					}
					var n;
					f.$watch(h[b], k, !0);
					h.$observe("class", function(a) {
						k(f.$eval(h[b]))
					});
					"ngClass" !== b && f.$watch("$index", function(c, d) {
						var g = c & 1;
						if (g !== (d & 1)) {
							var k = e(f.$eval(h[b]));
							g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
						}
					})
				}
			}
		}]
	}

	function sd(b) {
		function a(a, b) {
			b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
		}

		function c(b, c) {
			b = b ? "-" + uc(b, "-") : "";
			a(ob + b, !0 === c);
			a(vd + b, !1 === c)
		}
		var d = b.ctrl,
			e = b.$element,
			f = {},
			g = b.set,
			h = b.unset,
			l = b.parentForm,
			k = b.$animate;
		f[vd] = !(f[ob] = e.hasClass(ob));
		d.$setValidity = function(b, e, f) {
			e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = u));
			Xa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
			d.$pending ? (a(xd, !0), d.$valid = d.$invalid = u, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
			e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
			c(b, e);
			l.$setValidity(b, e, d)
		}
	}

	function wd(b) {
		if (b)
			for (var a in b) return !1;
		return !0
	}
	var Of = /^\/(.+)\/([a-z]*)$/,
		K = function(b) {
			return x(b) ? b.toLowerCase() : b
		},
		sc = Object.prototype.hasOwnProperty,
		vb = function(b) {
			return x(b) ? b.toUpperCase() : b
		},
		Ra, B, ta, $a = [].slice,
		qf = [].splice,
		Pf = [].push,
		Ca = Object.prototype.toString,
		Ja = S("ng"),
		ca = R.angular || (R.angular = {}),
		eb, rb = 0;
	Ra = W.documentMode;
	A.$inject = [];
	ra.$inject = [];
	var H =
		Array.isArray,
		N = function(b) {
			return x(b) ? b.trim() : b
		},
		gd = function(b) {
			return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		},
		db = function() {
			if (y(db.isActive_)) return db.isActive_;
			var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
			if (!b) try {
				new Function("")
			} catch (a) {
				b = !0
			}
			return db.isActive_ = b
		},
		tb = ["ng-", "data-ng-", "ng:", "x-ng-"],
		Md = /[A-Z]/g,
		vc = !1,
		Qb, qa = 1,
		bb = 3,
		Qd = {
			full: "1.3.20",
			major: 1,
			minor: 3,
			dot: 20,
			codeName: "shallow-translucence"
		};
	T.expando = "ng339";
	var Ab =
		T.cache = {},
		hf = 1;
	T._data = function(b) {
		return this.cache[b[this.expando]] || {}
	};
	var cf = /([\:\-\_]+(.))/g,
		df = /^moz([A-Z])/,
		Qf = {
			mouseleave: "mouseout",
			mouseenter: "mouseover"
		},
		Tb = S("jqLite"),
		gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Sb = /<|&#?\w+;/,
		ef = /<([\w:]+)/,
		ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ka = {
			option: [1, '<select multiple="multiple">', "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ka.optgroup = ka.option;
	ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
	ka.th = ka.td;
	var Ka = T.prototype = {
			ready: function(b) {
				function a() {
					c || (c = !0, b())
				}
				var c = !1;
				"complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), T(R).on("load", a))
			},
			toString: function() {
				var b = [];
				r(this, function(a) {
					b.push("" + a)
				});
				return "[" + b.join(", ") + "]"
			},
			eq: function(b) {
				return 0 <= b ? B(this[b]) : B(this[this.length + b])
			},
			length: 0,
			push: Pf,
			sort: [].sort,
			splice: [].splice
		},
		Fb = {};
	r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
		Fb[K(b)] = b
	});
	var Nc = {};
	r("input select option textarea button form details".split(" "), function(b) {
		Nc[b] = !0
	});
	var Oc = {
		ngMinlength: "minlength",
		ngMaxlength: "maxlength",
		ngMin: "min",
		ngMax: "max",
		ngPattern: "pattern"
	};
	r({
		data: Vb,
		removeData: yb
	}, function(b, a) {
		T[a] = b
	});
	r({
		data: Vb,
		inheritedData: Eb,
		scope: function(b) {
			return B.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"])
		},
		isolateScope: function(b) {
			return B.data(b,
				"$isolateScope") || B.data(b, "$isolateScopeNoTemplate")
		},
		controller: Jc,
		injector: function(b) {
			return Eb(b, "$injector")
		},
		removeAttr: function(b, a) {
			b.removeAttribute(a)
		},
		hasClass: Bb,
		css: function(b, a, c) {
			a = fb(a);
			if (y(c)) b.style[a] = c;
			else return b.style[a]
		},
		attr: function(b, a, c) {
			var d = b.nodeType;
			if (d !== bb && 2 !== d && 8 !== d)
				if (d = K(a), Fb[d])
					if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
					else return b[a] || (b.attributes.getNamedItem(a) || A).specified ? d : u;
			else if (y(c)) b.setAttribute(a, c);
			else if (b.getAttribute) return b =
				b.getAttribute(a, 2), null === b ? u : b
		},
		prop: function(b, a, c) {
			if (y(c)) b[a] = c;
			else return b[a]
		},
		text: function() {
			function b(a, b) {
				if (D(b)) {
					var d = a.nodeType;
					return d === qa || d === bb ? a.textContent : ""
				}
				a.textContent = b
			}
			b.$dv = "";
			return b
		}(),
		val: function(b, a) {
			if (D(a)) {
				if (b.multiple && "select" === wa(b)) {
					var c = [];
					r(b.options, function(a) {
						a.selected && c.push(a.value || a.text)
					});
					return 0 === c.length ? null : c
				}
				return b.value
			}
			b.value = a
		},
		html: function(b, a) {
			if (D(a)) return b.innerHTML;
			xb(b, !0);
			b.innerHTML = a
		},
		empty: Kc
	}, function(b, a) {
		T.prototype[a] =
			function(a, d) {
				var e, f, g = this.length;
				if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === u) {
					if (L(a)) {
						for (e = 0; e < g; e++)
							if (b === Vb) b(this[e], a);
							else
								for (f in a) b(this[e], f, a[f]);
						return this
					}
					e = b.$dv;
					g = e === u ? Math.min(g, 1) : g;
					for (f = 0; f < g; f++) {
						var h = b(this[f], a, d);
						e = e ? e + h : h
					}
					return e
				}
				for (e = 0; e < g; e++) b(this[e], a, d);
				return this
			}
	});
	r({
		removeData: yb,
		on: function a(c, d, e, f) {
			if (y(f)) throw Tb("onargs");
			if (Fc(c)) {
				var g = zb(c, !0);
				f = g.events;
				var h = g.handle;
				h || (h = g.handle = lf(c, f));
				for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d],
						l = g.length; l--;) {
					d = g[l];
					var k = f[d];
					k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
						var c = a.relatedTarget;
						c && (c === this || this.contains(c)) || h(a, d)
					}) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
					k.push(e)
				}
			}
		},
		off: Ic,
		one: function(a, c, d) {
			a = B(a);
			a.on(c, function f() {
				a.off(c, d);
				a.off(c, f)
			});
			a.on(c, d)
		},
		replaceWith: function(a, c) {
			var d, e = a.parentNode;
			xb(a);
			r(new T(c), function(c) {
				d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
				d = c
			})
		},
		children: function(a) {
			var c = [];
			r(a.childNodes,
				function(a) {
					a.nodeType === qa && c.push(a)
				});
			return c
		},
		contents: function(a) {
			return a.contentDocument || a.childNodes || []
		},
		append: function(a, c) {
			var d = a.nodeType;
			if (d === qa || 11 === d) {
				c = new T(c);
				for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
			}
		},
		prepend: function(a, c) {
			if (a.nodeType === qa) {
				var d = a.firstChild;
				r(new T(c), function(c) {
					a.insertBefore(c, d)
				})
			}
		},
		wrap: function(a, c) {
			c = B(c).eq(0).clone()[0];
			var d = a.parentNode;
			d && d.replaceChild(c, a);
			c.appendChild(a)
		},
		remove: Lc,
		detach: function(a) {
			Lc(a, !0)
		},
		after: function(a,
			c) {
			var d = a,
				e = a.parentNode;
			c = new T(c);
			for (var f = 0, g = c.length; f < g; f++) {
				var h = c[f];
				e.insertBefore(h, d.nextSibling);
				d = h
			}
		},
		addClass: Db,
		removeClass: Cb,
		toggleClass: function(a, c, d) {
			c && r(c.split(" "), function(c) {
				var f = d;
				D(f) && (f = !Bb(a, c));
				(f ? Db : Cb)(a, c)
			})
		},
		parent: function(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		next: function(a) {
			return a.nextElementSibling
		},
		find: function(a, c) {
			return a.getElementsByTagName ? a.getElementsByTagName(c) : []
		},
		clone: Ub,
		triggerHandler: function(a, c, d) {
			var e, f, g = c.type || c,
				h =
				zb(a);
			if (h = (h = h && h.events) && h[g]) e = {
				preventDefault: function() {
					this.defaultPrevented = !0
				},
				isDefaultPrevented: function() {
					return !0 === this.defaultPrevented
				},
				stopImmediatePropagation: function() {
					this.immediatePropagationStopped = !0
				},
				isImmediatePropagationStopped: function() {
					return !0 === this.immediatePropagationStopped
				},
				stopPropagation: A,
				type: g,
				target: a
			}, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function(c) {
				e.isImmediatePropagationStopped() || c.apply(a, f)
			})
		}
	}, function(a, c) {
		T.prototype[c] = function(c,
			e, f) {
			for (var g, h = 0, l = this.length; h < l; h++) D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Hc(g, a(this[h], c, e, f));
			return y(g) ? g : this
		};
		T.prototype.bind = T.prototype.on;
		T.prototype.unbind = T.prototype.off
	});
	gb.prototype = {
		put: function(a, c) {
			this[Na(a, this.nextUid)] = c
		},
		get: function(a) {
			return this[Na(a, this.nextUid)]
		},
		remove: function(a) {
			var c = this[a = Na(a, this.nextUid)];
			delete this[a];
			return c
		}
	};
	var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		Rf = /,/,
		Sf = /^\s*(_?)(\S+?)\1\s*$/,
		Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		Fa = S("$injector");
	cb.$$annotate = function(a, c, d) {
		var e;
		if ("function" === typeof a) {
			if (!(e = a.$inject)) {
				e = [];
				if (a.length) {
					if (c) throw x(d) && d || (d = a.name || mf(a)), Fa("strictdi", d);
					c = a.toString().replace(Pc, "");
					c = c.match(Qc);
					r(c[1].split(Rf), function(a) {
						a.replace(Sf, function(a, c, d) {
							e.push(d)
						})
					})
				}
				a.$inject = e
			}
		} else H(a) ? (c = a.length - 1, La(a[c], "fn"), e = a.slice(0, c)) : La(a, "fn", !0);
		return e
	};
	var Tf = S("$animate"),
		Ce = ["$provide", function(a) {
			this.$$selectors = {};
			this.register = function(c, d) {
				var e = c + "-animation";
				if (c && "." != c.charAt(0)) throw Tf("notcsel",
					c);
				this.$$selectors[c.substr(1)] = e;
				a.factory(e, d)
			};
			this.classNameFilter = function(a) {
				1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
				return this.$$classNameFilter
			};
			this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
				function f(d) {
					var f, g = a.defer();
					g.promise.$$cancelFn = function() {
						f && f()
					};
					e.$$postDigest(function() {
						f = d(function() {
							g.resolve()
						})
					});
					return g.promise
				}

				function g(a, c) {
					var d = [],
						e = [],
						f = ja();
					r((a.attr("class") || "").split(/\s+/), function(a) {
						f[a] = !0
					});
					r(c, function(a,
						c) {
						var g = f[c];
						!1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
					});
					return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
				}

				function h(a, c, d) {
					for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d
				}

				function l() {
					n || (n = a.defer(), d(function() {
						n.resolve();
						n = null
					}));
					return n.promise
				}

				function k(a, c) {
					if (ca.isObject(c)) {
						var d = w(c.from || {}, c.to || {});
						a.css(d)
					}
				}
				var n;
				return {
					animate: function(a, c, d) {
						k(a, {
							from: c,
							to: d
						});
						return l()
					},
					enter: function(a, c, d, e) {
						k(a, e);
						d ? d.after(a) : c.prepend(a);
						return l()
					},
					leave: function(a, c) {
						k(a, c);
						a.remove();
						return l()
					},
					move: function(a, c, d, e) {
						return this.enter(a, c, d, e)
					},
					addClass: function(a, c, d) {
						return this.setClass(a, c, [], d)
					},
					$$addClassImmediately: function(a, c, d) {
						a = B(a);
						c = x(c) ? c : H(c) ? c.join(" ") : "";
						r(a, function(a) {
							Db(a, c)
						});
						k(a, d);
						return l()
					},
					removeClass: function(a, c, d) {
						return this.setClass(a, [], c, d)
					},
					$$removeClassImmediately: function(a, c, d) {
						a = B(a);
						c = x(c) ? c : H(c) ? c.join(" ") : "";
						r(a, function(a) {
							Cb(a, c)
						});
						k(a, d);
						return l()
					},
					setClass: function(a, c, d, e) {
						var k = this,
							l = !1;
						a = B(a);
						var m = a.data("$$animateClasses");
						m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = {
							classes: {},
							options: e
						}, l = !0);
						e = m.classes;
						c = H(c) ? c : c.split(" ");
						d = H(d) ? d : d.split(" ");
						h(e, c, !0);
						h(e, d, !1);
						l && (m.promise = f(function(c) {
							var d = a.data("$$animateClasses");
							a.removeData("$$animateClasses");
							if (d) {
								var e = g(a, d.classes);
								e && k.$$setClassImmediately(a, e[0], e[1], d.options)
							}
							c()
						}), a.data("$$animateClasses", m));
						return m.promise
					},
					$$setClassImmediately: function(a, c, d, e) {
						c && this.$$addClassImmediately(a, c);
						d && this.$$removeClassImmediately(a, d);
						k(a, e);
						return l()
					},
					enabled: A,
					cancel: A
				}
			}]
		}],
		ma = S("$compile");
	xc.$inject = ["$provide", "$$sanitizeUriProvider"];
	var Rc = /^((?:x|data)[\:\-_])/i,
		rf = S("$controller"),
		Vc = "application/json",
		$b = {
			"Content-Type": Vc + ";charset=utf-8"
		},
		tf = /^\[|^\{(?!\{)/,
		uf = {
			"[": /]$/,
			"{": /}$/
		},
		sf = /^\)\]\}',?\n/,
		ac = S("$interpolate"),
		Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		xf = {
			http: 80,
			https: 443,
			ftp: 21
		},
		Hb = S("$location"),
		Vf = {
			$$html5: !1,
			$$replace: !1,
			absUrl: Ib("$$absUrl"),
			url: function(a) {
				if (D(a)) return this.$$url;
				var c = Uf.exec(a);
				(c[1] ||
					"" === a) && this.path(decodeURIComponent(c[1]));
				(c[2] || c[1] || "" === a) && this.search(c[3] || "");
				this.hash(c[5] || "");
				return this
			},
			protocol: Ib("$$protocol"),
			host: Ib("$$host"),
			port: Ib("$$port"),
			path: cd("$$path", function(a) {
				a = null !== a ? a.toString() : "";
				return "/" == a.charAt(0) ? a : "/" + a
			}),
			search: function(a, c) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if (x(a) || Y(a)) a = a.toString(), this.$$search = rc(a);
						else if (L(a)) a = Da(a, {}), r(a, function(c, e) {
							null == c && delete a[e]
						}), this.$$search = a;
						else throw Hb("isrcharg");
						break;
					default:
						D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
				}
				this.$$compose();
				return this
			},
			hash: cd("$$hash", function(a) {
				return null !== a ? a.toString() : ""
			}),
			replace: function() {
				this.$$replace = !0;
				return this
			}
		};
	r([bd, dc, cc], function(a) {
		a.prototype = Object.create(Vf);
		a.prototype.state = function(c) {
			if (!arguments.length) return this.$$state;
			if (a !== cc || !this.$$html5) throw Hb("nostate");
			this.$$state = D(c) ? null : c;
			return this
		}
	});
	var ga = S("$parse"),
		Wf = Function.prototype.call,
		Xf = Function.prototype.apply,
		Yf = Function.prototype.bind,
		pb = ja();
	r({
		"null": function() {
			return null
		},
		"true": function() {
			return !0
		},
		"false": function() {
			return !1
		},
		undefined: function() {}
	}, function(a, c) {
		a.constant = a.literal = a.sharedGetter = !0;
		pb[c] = a
	});
	pb["this"] = function(a) {
		return a
	};
	pb["this"].sharedGetter = !0;
	var qb = w(ja(), {
			"+": function(a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return y(d) ? y(e) ? d + e : d : y(e) ? e : u
			},
			"-": function(a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return (y(d) ? d : 0) - (y(e) ? e : 0)
			},
			"*": function(a, c, d, e) {
				return d(a, c) * e(a, c)
			},
			"/": function(a, c, d, e) {
				return d(a,
					c) / e(a, c)
			},
			"%": function(a, c, d, e) {
				return d(a, c) % e(a, c)
			},
			"===": function(a, c, d, e) {
				return d(a, c) === e(a, c)
			},
			"!==": function(a, c, d, e) {
				return d(a, c) !== e(a, c)
			},
			"==": function(a, c, d, e) {
				return d(a, c) == e(a, c)
			},
			"!=": function(a, c, d, e) {
				return d(a, c) != e(a, c)
			},
			"<": function(a, c, d, e) {
				return d(a, c) < e(a, c)
			},
			">": function(a, c, d, e) {
				return d(a, c) > e(a, c)
			},
			"<=": function(a, c, d, e) {
				return d(a, c) <= e(a, c)
			},
			">=": function(a, c, d, e) {
				return d(a, c) >= e(a, c)
			},
			"&&": function(a, c, d, e) {
				return d(a, c) && e(a, c)
			},
			"||": function(a, c, d, e) {
				return d(a,
					c) || e(a, c)
			},
			"!": function(a, c, d) {
				return !d(a, c)
			},
			"=": !0,
			"|": !0
		}),
		Zf = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "\t",
			v: "\v",
			"'": "'",
			'"': '"'
		},
		gc = function(a) {
			this.options = a
		};
	gc.prototype = {
		constructor: gc,
		lex: function(a) {
			this.text = a;
			this.index = 0;
			for (this.tokens = []; this.index < this.text.length;)
				if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
				else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
			else if (this.isIdent(a)) this.readIdent();
			else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
				index: this.index,
				text: a
			}), this.index++;
			else if (this.isWhitespace(a)) this.index++;
			else {
				var c = a + this.peek(),
					d = c + this.peek(2),
					e = qb[c],
					f = qb[d];
				qb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
					index: this.index,
					text: a,
					operator: !0
				}), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
			}
			return this.tokens
		},
		is: function(a, c) {
			return -1 !== c.indexOf(a)
		},
		peek: function(a) {
			a = a || 1;
			return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
		},
		isNumber: function(a) {
			return "0" <= a && "9" >= a && "string" ===
				typeof a
		},
		isWhitespace: function(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
		},
		isIdent: function(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
		},
		isExpOperator: function(a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError: function(a, c, d) {
			d = d || this.index;
			c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
			throw ga("lexerr", a, c, this.text);
		},
		readNumber: function() {
			for (var a = "", c = this.index; this.index < this.text.length;) {
				var d = K(this.text.charAt(this.index));
				if ("." == d || this.isNumber(d)) a += d;
				else {
					var e = this.peek();
					if ("e" == d && this.isExpOperator(e)) a += d;
					else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
					else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
					else this.throwError("Invalid exponent")
				}
				this.index++
			}
			this.tokens.push({
				index: c,
				text: a,
				constant: !0,
				value: Number(a)
			})
		},
		readIdent: function() {
			for (var a = this.index; this.index < this.text.length;) {
				var c = this.text.charAt(this.index);
				if (!this.isIdent(c) &&
					!this.isNumber(c)) break;
				this.index++
			}
			this.tokens.push({
				index: a,
				text: this.text.slice(a, this.index),
				identifier: !0
			})
		},
		readString: function(a) {
			var c = this.index;
			this.index++;
			for (var d = "", e = a, f = !1; this.index < this.text.length;) {
				var g = this.text.charAt(this.index),
					e = e + g;
				if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Zf[g] || g, f = !1;
				else if ("\\" === g) f = !0;
				else {
					if (g ===
						a) {
						this.index++;
						this.tokens.push({
							index: c,
							text: e,
							constant: !0,
							value: d
						});
						return
					}
					d += g
				}
				this.index++
			}
			this.throwError("Unterminated quote", c)
		}
	};
	var kb = function(a, c, d) {
		this.lexer = a;
		this.$filter = c;
		this.options = d
	};
	kb.ZERO = w(function() {
		return 0
	}, {
		sharedGetter: !0,
		constant: !0
	});
	kb.prototype = {
		constructor: kb,
		parse: function(a) {
			this.text = a;
			this.tokens = this.lexer.lex(a);
			a = this.statements();
			0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
			a.literal = !!a.literal;
			a.constant = !!a.constant;
			return a
		},
		primary: function() {
			var a;
			this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in pb ? a = pb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
			for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) :
				"." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
			return a
		},
		throwError: function(a, c) {
			throw ga("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw ga("ueoe", this.text);
			return this.tokens[0]
		},
		peek: function(a, c, d, e) {
			return this.peekAhead(0, a, c, d, e)
		},
		peekAhead: function(a, c, d, e, f) {
			if (this.tokens.length > a) {
				a = this.tokens[a];
				var g = a.text;
				if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a
			}
			return !1
		},
		expect: function(a,
			c, d, e) {
			return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
		},
		consume: function(a) {
			if (0 === this.tokens.length) throw ga("ueoe", this.text);
			var c = this.expect(a);
			c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
			return c
		},
		unaryFn: function(a, c) {
			var d = qb[a];
			return w(function(a, f) {
				return d(a, f, c)
			}, {
				constant: c.constant,
				inputs: [c]
			})
		},
		binaryFn: function(a, c, d, e) {
			var f = qb[c];
			return w(function(c, e) {
				return f(c, e, a, d)
			}, {
				constant: a.constant && d.constant,
				inputs: !e && [a, d]
			})
		},
		identifier: function() {
			for (var a =
					this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
			return zf(a, this.options, this.text)
		},
		constant: function() {
			var a = this.consume().value;
			return w(function() {
				return a
			}, {
				constant: !0,
				literal: !0
			})
		},
		statements: function() {
			for (var a = [];;)
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
					for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);
					return e
				}
		},
		filterChain: function() {
			for (var a = this.expression(); this.expect("|");) a = this.filter(a);
			return a
		},
		filter: function(a) {
			var c = this.$filter(this.consume().text),
				d, e;
			if (this.peek(":"))
				for (d = [], e = []; this.expect(":");) d.push(this.expression());
			var f = [a].concat(d || []);
			return w(function(f, h) {
				var l = a(f, h);
				if (e) {
					e[0] = l;
					for (l = d.length; l--;) e[l + 1] = d[l](f, h);
					return c.apply(u, e)
				}
				return c(l)
			}, {
				constant: !c.$stateful && f.every(ec),
				inputs: !c.$stateful && f
			})
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var a =
				this.ternary(),
				c, d;
			return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function(d, f) {
				return a.assign(d, c(d, f), f)
			}, {
				inputs: [a, c]
			})) : a
		},
		ternary: function() {
			var a = this.logicalOR(),
				c;
			if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
				var d = this.assignment();
				return w(function(e, f) {
					return a(e, f) ? c(e, f) : d(e, f)
				}, {
					constant: a.constant && c.constant && d.constant
				})
			}
			return a
		},
		logicalOR: function() {
			for (var a =
					this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
			return a
		},
		logicalAND: function() {
			for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);
			return a
		},
		equality: function() {
			for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());
			return a
		},
		relational: function() {
			for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());
			return a
		},
		additive: function() {
			for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());
			return a
		},
		multiplicative: function() {
			for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());
			return a
		},
		unary: function() {
			var a;
			return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(kb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
		},
		fieldAccess: function(a) {
			var c = this.identifier();
			return w(function(d, e, f) {
				d = f || a(d, e);
				return null == d ? u : c(d)
			}, {
				assign: function(d, e, f) {
					var g = a(d, f);
					g || a.assign(d, g = {}, f);
					return c.assign(g, e)
				}
			})
		},
		objectIndex: function(a) {
			var c = this.text,
				d = this.expression();
			this.consume("]");
			return w(function(e, f) {
				var g = a(e, f),
					h = dd(d(e, f), c);
				va(h, c);
				return g ? oa(g[h], c) : u
			}, {
				assign: function(e, f, g) {
					var h = va(dd(d(e, g), c), c),
						l = oa(a(e, g), c);
					l || a.assign(e, l = {}, g);
					return l[h] = f
				}
			})
		},
		functionCall: function(a, c) {
			var d = [];
			if (")" !== this.peekToken().text) {
				do d.push(this.expression());
				while (this.expect(","))
			}
			this.consume(")");
			var e = this.text,
				f = d.length ? [] : null;
			return function(g, h) {
				var l = c ? c(g, h) : y(c) ? u : g,
					k = a(g, h, l) || A;
				if (f)
					for (var n = d.length; n--;) f[n] = oa(d[n](g, h), e);
				oa(l, e);
				if (k) {
					if (k.constructor === k) throw ga("isecfn", e);
					if (k === Wf || k === Xf || k === Yf) throw ga("isecff", e);
				}
				l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
				f && (f.length = 0);
				return oa(l, e)
			}
		},
		arrayDeclaration: function() {
			var a = [];
			if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) break;
					a.push(this.expression())
				} while (this.expect(","))
			}
			this.consume("]");
			return w(function(c, d) {
				for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));
				return e
			}, {
				literal: !0,
				constant: a.every(ec),
				inputs: a
			})
		},
		object: function() {
			var a = [],
				c = [];
			if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;
					var d = this.consume();
					d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
					this.consume(":");
					c.push(this.expression())
				} while (this.expect(","))
			}
			this.consume("}");
			return w(function(d, f) {
				for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] =
					c[h](d, f);
				return g
			}, {
				literal: !0,
				constant: c.every(ec),
				inputs: c
			})
		}
	};
	var Bf = ja(),
		Af = ja(),
		Cf = Object.prototype.valueOf,
		Ba = S("$sce"),
		pa = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		ma = S("$compile"),
		Z = W.createElement("a"),
		id = Aa(R.location.href);
	Ec.$inject = ["$provide"];
	jd.$inject = ["$locale"];
	ld.$inject = ["$locale"];
	var od = ".",
		Mf = {
			yyyy: U("FullYear", 4),
			yy: U("FullYear", 2, 0, !0),
			y: U("FullYear", 1),
			MMMM: Kb("Month"),
			MMM: Kb("Month", !0),
			MM: U("Month", 2, 1),
			M: U("Month", 1, 1),
			dd: U("Date", 2),
			d: U("Date",
				1),
			HH: U("Hours", 2),
			H: U("Hours", 1),
			hh: U("Hours", 2, -12),
			h: U("Hours", 1, -12),
			mm: U("Minutes", 2),
			m: U("Minutes", 1),
			ss: U("Seconds", 2),
			s: U("Seconds", 1),
			sss: U("Milliseconds", 3),
			EEEE: Kb("Day"),
			EEE: Kb("Day", !0),
			a: function(a, c) {
				return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
			},
			Z: function(a) {
				a = -1 * a.getTimezoneOffset();
				return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2))
			},
			ww: qd(2),
			w: qd(1),
			G: hc,
			GG: hc,
			GGG: hc,
			GGGG: function(a, c) {
				return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
			}
		},
		Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
		Kf = /^\-?\d+$/;
	kd.$inject = ["$locale"];
	var Hf = ea(K),
		If = ea(vb);
	md.$inject = ["$parse"];
	var Td = ea({
			restrict: "E",
			compile: function(a, c) {
				if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
					if ("a" === c[0].nodeName.toLowerCase()) {
						var f = "[object SVGAnimatedString]" === Ca.call(c.prop("href")) ? "xlink:href" : "href";
						c.on("click", function(a) {
							c.attr(f) || a.preventDefault()
						})
					}
				}
			}
		}),
		wb = {};
	r(Fb, function(a, c) {
		if ("multiple" != a) {
			var d = ya("ng-" + c);
			wb[d] = function() {
				return {
					restrict: "A",
					priority: 100,
					link: function(a, f, g) {
						a.$watch(g[d],
							function(a) {
								g.$set(c, !!a)
							})
					}
				}
			}
		}
	});
	r(Oc, function(a, c) {
		wb[c] = function() {
			return {
				priority: 100,
				link: function(a, e, f) {
					if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
						f.$set("ngPattern", new RegExp(e[1], e[2]));
						return
					}
					a.$watch(f[c], function(a) {
						f.$set(c, a)
					})
				}
			}
		}
	});
	r(["src", "srcset", "href"], function(a) {
		var c = ya("ng-" + a);
		wb[c] = function() {
			return {
				priority: 99,
				link: function(d, e, f) {
					var g = a,
						h = a;
					"href" === a && "[object SVGAnimatedString]" === Ca.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href",
						g = null);
					f.$observe(c, function(c) {
						c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
					})
				}
			}
		}
	});
	var Lb = {
		$addControl: A,
		$$renameControl: function(a, c) {
			a.$name = c
		},
		$removeControl: A,
		$setValidity: A,
		$setDirty: A,
		$setPristine: A,
		$setSubmitted: A
	};
	rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
	var yd = function(a) {
			return ["$timeout", function(c) {
				return {
					name: "form",
					restrict: a ? "EAC" : "E",
					controller: rd,
					compile: function(d, e) {
						d.addClass(Sa).addClass(ob);
						var f = e.name ? "name" : a && e.ngForm ? "ngForm" :
							!1;
						return {
							pre: function(a, d, e, k) {
								if (!("action" in e)) {
									var n = function(c) {
										a.$apply(function() {
											k.$commitViewValue();
											k.$setSubmitted()
										});
										c.preventDefault()
									};
									d[0].addEventListener("submit", n, !1);
									d.on("$destroy", function() {
										c(function() {
											d[0].removeEventListener("submit", n, !1)
										}, 0, !1)
									})
								}
								var p = k.$$parentForm;
								f && (jb(a, null, k.$name, k, k.$name), e.$observe(f, function(c) {
									k.$name !== c && (jb(a, null, k.$name, u, k.$name), p.$$renameControl(k, c), jb(a, null, k.$name, k, k.$name))
								}));
								d.on("$destroy", function() {
									p.$removeControl(k);
									f && jb(a, null, e[f], u, k.$name);
									w(k, Lb)
								})
							}
						}
					}
				}
			}]
		},
		Ud = yd(),
		ge = yd(!0),
		Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
		$f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
		bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		zd = /^(\d{4})-(\d{2})-(\d{2})$/,
		Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		kc = /^(\d{4})-W(\d\d)$/,
		Bd = /^(\d{4})-(\d\d)$/,
		Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		Dd = {
			text: function(a, c, d, e, f, g) {
				lb(a, c, d, e, f, g);
				ic(e)
			},
			date: mb("date", zd, Nb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": mb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
			time: mb("time", Cd, Nb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: mb("week", kc, function(a, c) {
				if (ha(a)) return a;
				if (x(a)) {
					kc.lastIndex = 0;
					var d = kc.exec(a);
					if (d) {
						var e = +d[1],
							f = +d[2],
							g = d = 0,
							h = 0,
							l = 0,
							k = pd(e),
							f = 7 * (f - 1);
						c && (d = c.getHours(), g =
							c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
						return new Date(e, 0, k.getDate() + f, d, g, h, l)
					}
				}
				return NaN
			}, "yyyy-Www"),
			month: mb("month", Bd, Nb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
			number: function(a, c, d, e, f, g) {
				td(a, c, d, e);
				lb(a, c, d, e, f, g);
				e.$$parserName = "number";
				e.$parsers.push(function(a) {
					return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : u
				});
				e.$formatters.push(function(a) {
					if (!e.$isEmpty(a)) {
						if (!Y(a)) throw nb("numfmt", a);
						a = a.toString()
					}
					return a
				});
				if (y(d.min) || d.ngMin) {
					var h;
					e.$validators.min = function(a) {
						return e.$isEmpty(a) ||
							D(h) || a >= h
					};
					d.$observe("min", function(a) {
						y(a) && !Y(a) && (a = parseFloat(a, 10));
						h = Y(a) && !isNaN(a) ? a : u;
						e.$validate()
					})
				}
				if (y(d.max) || d.ngMax) {
					var l;
					e.$validators.max = function(a) {
						return e.$isEmpty(a) || D(l) || a <= l
					};
					d.$observe("max", function(a) {
						y(a) && !Y(a) && (a = parseFloat(a, 10));
						l = Y(a) && !isNaN(a) ? a : u;
						e.$validate()
					})
				}
			},
			url: function(a, c, d, e, f, g) {
				lb(a, c, d, e, f, g);
				ic(e);
				e.$$parserName = "url";
				e.$validators.url = function(a, c) {
					var d = a || c;
					return e.$isEmpty(d) || $f.test(d)
				}
			},
			email: function(a, c, d, e, f, g) {
				lb(a, c, d, e, f, g);
				ic(e);
				e.$$parserName = "email";
				e.$validators.email = function(a, c) {
					var d = a || c;
					return e.$isEmpty(d) || ag.test(d)
				}
			},
			radio: function(a, c, d, e) {
				D(d.name) && c.attr("name", ++rb);
				c.on("click", function(a) {
					c[0].checked && e.$setViewValue(d.value, a && a.type)
				});
				e.$render = function() {
					c[0].checked = d.value == e.$viewValue
				};
				d.$observe("value", e.$render)
			},
			checkbox: function(a, c, d, e, f, g, h, l) {
				var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
					n = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
				c.on("click", function(a) {
					e.$setViewValue(c[0].checked, a &&
						a.type)
				});
				e.$render = function() {
					c[0].checked = e.$viewValue
				};
				e.$isEmpty = function(a) {
					return !1 === a
				};
				e.$formatters.push(function(a) {
					return ia(a, k)
				});
				e.$parsers.push(function(a) {
					return a ? k : n
				})
			},
			hidden: A,
			button: A,
			submit: A,
			reset: A,
			file: A
		},
		yc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
			return {
				restrict: "E",
				require: ["?ngModel"],
				link: {
					pre: function(f, g, h, l) {
						l[0] && (Dd[K(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
					}
				}
			}
		}],
		cg = /^(true|false|\d+)$/,
		ye = function() {
			return {
				restrict: "A",
				priority: 100,
				compile: function(a,
					c) {
					return cg.test(c.ngValue) ? function(a, c, f) {
						f.$set("value", a.$eval(f.ngValue))
					} : function(a, c, f) {
						a.$watch(f.ngValue, function(a) {
							f.$set("value", a)
						})
					}
				}
			}
		},
		Zd = ["$compile", function(a) {
			return {
				restrict: "AC",
				compile: function(c) {
					a.$$addBindingClass(c);
					return function(c, e, f) {
						a.$$addBindingInfo(e, f.ngBind);
						e = e[0];
						c.$watch(f.ngBind, function(a) {
							e.textContent = a === u ? "" : a
						})
					}
				}
			}
		}],
		ae = ["$interpolate", "$compile", function(a, c) {
			return {
				compile: function(d) {
					c.$$addBindingClass(d);
					return function(d, f, g) {
						d = a(f.attr(g.$attr.ngBindTemplate));
						c.$$addBindingInfo(f, d.expressions);
						f = f[0];
						g.$observe("ngBindTemplate", function(a) {
							f.textContent = a === u ? "" : a
						})
					}
				}
			}
		}],
		$d = ["$sce", "$parse", "$compile", function(a, c, d) {
			return {
				restrict: "A",
				compile: function(e, f) {
					var g = c(f.ngBindHtml),
						h = c(f.ngBindHtml, function(a) {
							return (a || "").toString()
						});
					d.$$addBindingClass(e);
					return function(c, e, f) {
						d.$$addBindingInfo(e, f.ngBindHtml);
						c.$watch(h, function() {
							e.html(a.getTrustedHtml(g(c)) || "")
						})
					}
				}
			}
		}],
		xe = ea({
			restrict: "A",
			require: "ngModel",
			link: function(a, c, d, e) {
				e.$viewChangeListeners.push(function() {
					a.$eval(d.ngChange)
				})
			}
		}),
		be = jc("", !0),
		de = jc("Odd", 0),
		ce = jc("Even", 1),
		ee = Ia({
			compile: function(a, c) {
				c.$set("ngCloak", u);
				a.removeClass("ng-cloak")
			}
		}),
		fe = [function() {
			return {
				restrict: "A",
				scope: !0,
				controller: "@",
				priority: 500
			}
		}],
		Dc = {},
		dg = {
			blur: !0,
			focus: !0
		};
	r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
		var c = ya("ng-" + a);
		Dc[c] = ["$parse", "$rootScope", function(d, e) {
			return {
				restrict: "A",
				compile: function(f, g) {
					var h =
						d(g[c], null, !0);
					return function(c, d) {
						d.on(a, function(d) {
							var f = function() {
								h(c, {
									$event: d
								})
							};
							dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
						})
					}
				}
			}
		}]
	});
	var ie = ["$animate", function(a) {
			return {
				multiElement: !0,
				transclude: "element",
				priority: 600,
				terminal: !0,
				restrict: "A",
				$$tlb: !0,
				link: function(c, d, e, f, g) {
					var h, l, k;
					c.$watch(e.ngIf, function(c) {
						c ? l || g(function(c, f) {
							l = f;
							c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
							h = {
								clone: c
							};
							a.enter(c, d.parent(), d)
						}) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k =
							ub(h.clone), a.leave(k).then(function() {
								k = null
							}), h = null))
					})
				}
			}
		}],
		je = ["$templateRequest", "$anchorScroll", "$animate", function(a, c, d) {
			return {
				restrict: "ECA",
				priority: 400,
				terminal: !0,
				transclude: "element",
				controller: ca.noop,
				compile: function(e, f) {
					var g = f.ngInclude || f.src,
						h = f.onload || "",
						l = f.autoscroll;
					return function(e, f, p, q, r) {
						var s = 0,
							u, v, m, C = function() {
								v && (v.remove(), v = null);
								u && (u.$destroy(), u = null);
								m && (d.leave(m).then(function() {
									v = null
								}), v = m, m = null)
							};
						e.$watch(g, function(g) {
							var p = function() {
									!y(l) || l && !e.$eval(l) ||
										c()
								},
								M = ++s;
							g ? (a(g, !0).then(function(a) {
								if (M === s) {
									var c = e.$new();
									q.template = a;
									a = r(c, function(a) {
										C();
										d.enter(a, null, f).then(p)
									});
									u = c;
									m = a;
									u.$emit("$includeContentLoaded", g);
									e.$eval(h)
								}
							}, function() {
								M === s && (C(), e.$emit("$includeContentError", g))
							}), e.$emit("$includeContentRequested", g)) : (C(), q.template = null)
						})
					}
				}
			}
		}],
		Ae = ["$compile", function(a) {
			return {
				restrict: "ECA",
				priority: -400,
				require: "ngInclude",
				link: function(c, d, e, f) {
					/SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, W).childNodes)(c, function(a) {
						d.append(a)
					}, {
						futureParentElement: d
					})) : (d.html(f.template), a(d.contents())(c))
				}
			}
		}],
		ke = Ia({
			priority: 450,
			compile: function() {
				return {
					pre: function(a, c, d) {
						a.$eval(d.ngInit)
					}
				}
			}
		}),
		we = function() {
			return {
				restrict: "A",
				priority: 100,
				require: "ngModel",
				link: function(a, c, d, e) {
					var f = c.attr(d.$attr.ngList) || ", ",
						g = "false" !== d.ngTrim,
						h = g ? N(f) : f;
					e.$parsers.push(function(a) {
						if (!D(a)) {
							var c = [];
							a && r(a.split(h), function(a) {
								a && c.push(g ? N(a) : a)
							});
							return c
						}
					});
					e.$formatters.push(function(a) {
						return H(a) ? a.join(f) : u
					});
					e.$isEmpty = function(a) {
						return !a ||
							!a.length
					}
				}
			}
		},
		ob = "ng-valid",
		vd = "ng-invalid",
		Sa = "ng-pristine",
		Mb = "ng-dirty",
		xd = "ng-pending",
		nb = S("ngModel"),
		eg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, n) {
			this.$modelValue = this.$viewValue = Number.NaN;
			this.$$rawModelValue = u;
			this.$validators = {};
			this.$asyncValidators = {};
			this.$parsers = [];
			this.$formatters = [];
			this.$viewChangeListeners = [];
			this.$untouched = !0;
			this.$touched = !1;
			this.$pristine = !0;
			this.$dirty = !1;
			this.$valid = !0;
			this.$invalid = !1;
			this.$error = {};
			this.$$success = {};
			this.$pending = u;
			this.$name = n(d.name || "", !1)(a);
			var p = f(d.ngModel),
				q = p.assign,
				t = p,
				s = q,
				F = null,
				v, m = this;
			this.$$setOptions = function(a) {
				if ((m.$options = a) && a.getterSetter) {
					var c = f(d.ngModel + "()"),
						g = f(d.ngModel + "($$$p)");
					t = function(a) {
						var d = p(a);
						z(d) && (d = c(a));
						return d
					};
					s = function(a, c) {
						z(p(a)) ? g(a, {
							$$$p: m.$modelValue
						}) : q(a, m.$modelValue)
					}
				} else if (!p.assign) throw nb("nonassign", d.ngModel, xa(e));
			};
			this.$render = A;
			this.$isEmpty = function(a) {
				return D(a) ||
					"" === a || null === a || a !== a
			};
			var C = e.inheritedData("$formController") || Lb,
				w = 0;
			sd({
				ctrl: this,
				$element: e,
				set: function(a, c) {
					a[c] = !0
				},
				unset: function(a, c) {
					delete a[c]
				},
				parentForm: C,
				$animate: g
			});
			this.$setPristine = function() {
				m.$dirty = !1;
				m.$pristine = !0;
				g.removeClass(e, Mb);
				g.addClass(e, Sa)
			};
			this.$setDirty = function() {
				m.$dirty = !0;
				m.$pristine = !1;
				g.removeClass(e, Sa);
				g.addClass(e, Mb);
				C.$setDirty()
			};
			this.$setUntouched = function() {
				m.$touched = !1;
				m.$untouched = !0;
				g.setClass(e, "ng-untouched", "ng-touched")
			};
			this.$setTouched =
				function() {
					m.$touched = !0;
					m.$untouched = !1;
					g.setClass(e, "ng-touched", "ng-untouched")
				};
			this.$rollbackViewValue = function() {
				h.cancel(F);
				m.$viewValue = m.$$lastCommittedViewValue;
				m.$render()
			};
			this.$validate = function() {
				if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) {
					var a = m.$$rawModelValue,
						c = m.$valid,
						d = m.$modelValue,
						e = m.$options && m.$options.allowInvalid;
					m.$$runValidators(a, m.$$lastCommittedViewValue, function(f) {
						e || c === f || (m.$modelValue = f ? a : u, m.$modelValue !== d && m.$$writeModelToScope())
					})
				}
			};
			this.$$runValidators =
				function(a, c, d) {
					function e() {
						var d = !0;
						r(m.$validators, function(e, f) {
							var h = e(a, c);
							d = d && h;
							g(f, h)
						});
						return d ? !0 : (r(m.$asyncValidators, function(a, c) {
							g(c, null)
						}), !1)
					}

					function f() {
						var d = [],
							e = !0;
						r(m.$asyncValidators, function(f, h) {
							var l = f(a, c);
							if (!l || !z(l.then)) throw nb("$asyncValidators", l);
							g(h, u);
							d.push(l.then(function() {
								g(h, !0)
							}, function(a) {
								e = !1;
								g(h, !1)
							}))
						});
						d.length ? k.all(d).then(function() {
							h(e)
						}, A) : h(!0)
					}

					function g(a, c) {
						l === w && m.$setValidity(a, c)
					}

					function h(a) {
						l === w && d(a)
					}
					w++;
					var l = w;
					(function() {
						var a =
							m.$$parserName || "parse";
						if (v === u) g(a, null);
						else return v || (r(m.$validators, function(a, c) {
							g(c, null)
						}), r(m.$asyncValidators, function(a, c) {
							g(c, null)
						})), g(a, v), v;
						return !0
					})() ? e() ? f() : h(!1): h(!1)
				};
			this.$commitViewValue = function() {
				var a = m.$viewValue;
				h.cancel(F);
				if (m.$$lastCommittedViewValue !== a || "" === a && m.$$hasNativeValidators) m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate()
			};
			this.$$parseAndValidate = function() {
				var c = m.$$lastCommittedViewValue;
				if (v = D(c) ? u : !0)
					for (var d =
							0; d < m.$parsers.length; d++)
						if (c = m.$parsers[d](c), D(c)) {
							v = !1;
							break
						}
				Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = t(a));
				var e = m.$modelValue,
					f = m.$options && m.$options.allowInvalid;
				m.$$rawModelValue = c;
				f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope());
				m.$$runValidators(c, m.$$lastCommittedViewValue, function(a) {
					f || (m.$modelValue = a ? c : u, m.$modelValue !== e && m.$$writeModelToScope())
				})
			};
			this.$$writeModelToScope = function() {
				s(a, m.$modelValue);
				r(m.$viewChangeListeners, function(a) {
					try {
						a()
					} catch (d) {
						c(d)
					}
				})
			};
			this.$setViewValue = function(a, c) {
				m.$viewValue = a;
				m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c)
			};
			this.$$debounceViewValueCommit = function(c) {
				var d = 0,
					e = m.$options;
				e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e["default"]) && (d = e["default"]));
				h.cancel(F);
				d ? F = h(function() {
					m.$commitViewValue()
				}, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function() {
					m.$commitViewValue()
				})
			};
			a.$watch(function() {
				var c = t(a);
				if (c !== m.$modelValue && (m.$modelValue === m.$modelValue || c === c)) {
					m.$modelValue =
						m.$$rawModelValue = c;
					v = u;
					for (var d = m.$formatters, e = d.length, f = c; e--;) f = d[e](f);
					m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, A))
				}
				return c
			})
		}],
		ve = ["$rootScope", function(a) {
			return {
				restrict: "A",
				require: ["ngModel", "^?form", "^?ngModelOptions"],
				controller: eg,
				priority: 1,
				compile: function(c) {
					c.addClass(Sa).addClass("ng-untouched").addClass(ob);
					return {
						pre: function(a, c, f, g) {
							var h = g[0],
								l = g[1] || Lb;
							h.$$setOptions(g[2] && g[2].$options);
							l.$addControl(h);
							f.$observe("name",
								function(a) {
									h.$name !== a && l.$$renameControl(h, a)
								});
							a.$on("$destroy", function() {
								l.$removeControl(h)
							})
						},
						post: function(c, e, f, g) {
							var h = g[0];
							if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function(a) {
								h.$$debounceViewValueCommit(a && a.type)
							});
							e.on("blur", function(e) {
								h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
							})
						}
					}
				}
			}
		}],
		fg = /(\s+|^)default(\s+|$)/,
		ze = function() {
			return {
				restrict: "A",
				controller: ["$scope", "$attrs", function(a, c) {
					var d = this;
					this.$options = a.$eval(c.ngModelOptions);
					this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function() {
						d.$options.updateOnDefault = !0;
						return " "
					}))) : this.$options.updateOnDefault = !0
				}]
			}
		},
		le = Ia({
			terminal: !0,
			priority: 1E3
		}),
		me = ["$locale", "$interpolate", function(a, c) {
			var d = /{}/g,
				e = /^when(Minus)?(.+)$/;
			return {
				restrict: "EA",
				link: function(f, g, h) {
					function l(a) {
						g.text(a || "")
					}
					var k = h.count,
						n = h.$attr.when && g.attr(h.$attr.when),
						p = h.offset || 0,
						q = f.$eval(n) || {},
						t = {},
						n = c.startSymbol(),
						s =
						c.endSymbol(),
						u = n + k + "-" + p + s,
						v = ca.noop,
						m;
					r(h, function(a, c) {
						var d = e.exec(c);
						d && (d = (d[1] ? "-" : "") + K(d[2]), q[d] = g.attr(h.$attr[c]))
					});
					r(q, function(a, e) {
						t[e] = c(a.replace(d, u))
					});
					f.$watch(k, function(c) {
						c = parseFloat(c);
						var d = isNaN(c);
						d || c in q || (c = a.pluralCat(c - p));
						c === m || d && isNaN(m) || (v(), v = f.$watch(t[c], l), m = c)
					})
				}
			}
		}],
		ne = ["$parse", "$animate", function(a, c) {
			var d = S("ngRepeat"),
				e = function(a, c, d, e, k, n, p) {
					a[d] = e;
					k && (a[k] = n);
					a.$index = c;
					a.$first = 0 === c;
					a.$last = c === p - 1;
					a.$middle = !(a.$first || a.$last);
					a.$odd = !(a.$even =
						0 === (c & 1))
				};
			return {
				restrict: "A",
				multiElement: !0,
				transclude: "element",
				priority: 1E3,
				terminal: !0,
				$$tlb: !0,
				compile: function(f, g) {
					var h = g.ngRepeat,
						l = W.createComment(" end ngRepeat: " + h + " "),
						k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
					if (!k) throw d("iexp", h);
					var n = k[1],
						p = k[2],
						q = k[3],
						t = k[4],
						k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
					if (!k) throw d("iidexp", n);
					var s = k[3] || k[1],
						F = k[2];
					if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) ||
							/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
					var v, m, C, y, w = {
						$id: Na
					};
					t ? v = a(t) : (C = function(a, c) {
						return Na(c)
					}, y = function(a) {
						return a
					});
					return function(a, f, g, k, n) {
						v && (m = function(c, d, e) {
							F && (w[F] = c);
							w[s] = d;
							w.$index = e;
							return v(a, w)
						});
						var t = ja();
						a.$watchCollection(p, function(g) {
							var k, p, v = f[0],
								G, w = ja(),
								D, I, A, z, H, O, x;
							q && (a[q] = g);
							if (Ta(g)) H = g, p = m || C;
							else {
								p = m || y;
								H = [];
								for (x in g) g.hasOwnProperty(x) && "$" != x.charAt(0) && H.push(x);
								H.sort()
							}
							D =
								H.length;
							x = Array(D);
							for (k = 0; k < D; k++)
								if (I = g === H ? k : H[k], A = g[I], z = p(I, A, k), t[z]) O = t[z], delete t[z], w[z] = O, x[k] = O;
								else {
									if (w[z]) throw r(x, function(a) {
										a && a.scope && (t[a.id] = a)
									}), d("dupes", h, z, A);
									x[k] = {
										id: z,
										scope: u,
										clone: u
									};
									w[z] = !0
								}
							for (G in t) {
								O = t[G];
								z = ub(O.clone);
								c.leave(z);
								if (z[0].parentNode)
									for (k = 0, p = z.length; k < p; k++) z[k].$$NG_REMOVED = !0;
								O.scope.$destroy()
							}
							for (k = 0; k < D; k++)
								if (I = g === H ? k : H[k], A = g[I], O = x[k], O.scope) {
									G = v;
									do G = G.nextSibling; while (G && G.$$NG_REMOVED);
									O.clone[0] != G && c.move(ub(O.clone), null, B(v));
									v = O.clone[O.clone.length - 1];
									e(O.scope, k, s, A, F, I, D)
								} else n(function(a, d) {
									O.scope = d;
									var f = l.cloneNode(!1);
									a[a.length++] = f;
									c.enter(a, null, B(v));
									v = f;
									O.clone = a;
									w[O.id] = O;
									e(O.scope, k, s, A, F, I, D)
								});
							t = w
						})
					}
				}
			}
		}],
		oe = ["$animate", function(a) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(c, d, e) {
					c.$watch(e.ngShow, function(c) {
						a[c ? "removeClass" : "addClass"](d, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		he = ["$animate", function(a) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(c, d, e) {
					c.$watch(e.ngHide, function(c) {
						a[c ?
							"addClass" : "removeClass"](d, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		pe = Ia(function(a, c, d) {
			a.$watch(d.ngStyle, function(a, d) {
				d && a !== d && r(d, function(a, d) {
					c.css(d, "")
				});
				a && c.css(a)
			}, !0)
		}),
		qe = ["$animate", function(a) {
			return {
				restrict: "EA",
				require: "ngSwitch",
				controller: ["$scope", function() {
					this.cases = {}
				}],
				link: function(c, d, e, f) {
					var g = [],
						h = [],
						l = [],
						k = [],
						n = function(a, c) {
							return function() {
								a.splice(c, 1)
							}
						};
					c.$watch(e.ngSwitch || e.on, function(c) {
						var d, e;
						d = 0;
						for (e = l.length; d < e; ++d) a.cancel(l[d]);
						d = l.length =
							0;
						for (e = k.length; d < e; ++d) {
							var s = ub(h[d].clone);
							k[d].$destroy();
							(l[d] = a.leave(s)).then(n(l, d))
						}
						h.length = 0;
						k.length = 0;
						(g = f.cases["!" + c] || f.cases["?"]) && r(g, function(c) {
							c.transclude(function(d, e) {
								k.push(e);
								var f = c.element;
								d[d.length++] = W.createComment(" end ngSwitchWhen: ");
								h.push({
									clone: d
								});
								a.enter(d, f.parent(), f)
							})
						})
					})
				}
			}
		}],
		re = Ia({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(a, c, d, e, f) {
				e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
				e.cases["!" + d.ngSwitchWhen].push({
					transclude: f,
					element: c
				})
			}
		}),
		se = Ia({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(a, c, d, e, f) {
				e.cases["?"] = e.cases["?"] || [];
				e.cases["?"].push({
					transclude: f,
					element: c
				})
			}
		}),
		ue = Ia({
			restrict: "EAC",
			link: function(a, c, d, e, f) {
				if (!f) throw S("ngTransclude")("orphan", xa(c));
				f(function(a) {
					c.empty();
					c.append(a)
				})
			}
		}),
		Vd = ["$templateCache", function(a) {
			return {
				restrict: "E",
				terminal: !0,
				compile: function(c, d) {
					"text/ng-template" == d.type && a.put(d.id, c[0].text)
				}
			}
		}],
		gg = S("ngOptions"),
		te = ea({
			restrict: "A",
			terminal: !0
		}),
		Wd = ["$compile", "$parse", function(a, c) {
			var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
				e = {
					$setViewValue: A
				};
			return {
				restrict: "E",
				require: ["select", "?ngModel"],
				controller: ["$element", "$scope", "$attrs", function(a, c, d) {
					var l = this,
						k = {},
						n = e,
						p;
					l.databound = d.ngModel;
					l.init = function(a, c, d) {
						n = a;
						p = d
					};
					l.addOption = function(c, d) {
						Ma(c, '"option value"');
						k[c] = !0;
						n.$viewValue == c && (a.val(c), p.parent() && p.remove());
						d && d[0].hasAttribute("selected") && (d[0].selected = !0)
					};
					l.removeOption = function(a) {
						this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a))
					};
					l.renderUnknownOption = function(c) {
						c = "? " + Na(c) + " ?";
						p.val(c);
						a.prepend(p);
						a.val(c);
						p.prop("selected", !0)
					};
					l.hasOption = function(a) {
						return k.hasOwnProperty(a)
					};
					c.$on("$destroy", function() {
						l.renderUnknownOption = A
					})
				}],
				link: function(e, g, h, l) {
					function k(a, c, d, e) {
						d.$render = function() {
							var a =
								d.$viewValue;
							e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), "" === a && v.prop("selected", !0)) : null == a && v ? c.val("") : e.renderUnknownOption(a)
						};
						c.on("change", function() {
							a.$apply(function() {
								z.parent() && z.remove();
								d.$setViewValue(c.val())
							})
						})
					}

					function n(a, c, d) {
						var e;
						d.$render = function() {
							var a = new gb(d.$viewValue);
							r(c.find("option"), function(c) {
								c.selected = y(a.get(c.value))
							})
						};
						a.$watch(function() {
							ia(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render())
						});
						c.on("change", function() {
							a.$apply(function() {
								var a = [];
								r(c.find("option"),
									function(c) {
										c.selected && a.push(c.value)
									});
								d.$setViewValue(a)
							})
						})
					}

					function p(e, f, g) {
						function h(a, c, d) {
							T[A] = d;
							I && (T[I] = c);
							return a(e, T)
						}

						function l(a) {
							var c;
							if (t)
								if (K && H(a)) {
									c = new gb([]);
									for (var d = 0; d < a.length; d++) c.put(h(K, null, a[d]), !0)
								} else c = new gb(a);
							else K && (a = h(K, null, a));
							return function(d, e) {
								var f;
								f = K ? K : x ? x : E;
								return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
							}
						}

						function k() {
							m || (e.$$postDigest(p), m = !0)
						}

						function n(a, c, d) {
							a[c] = a[c] || 0;
							a[c] += d ? 1 : -1
						}

						function p() {
							m = !1;
							var a = {
									"": []
								},
								c = [""],
								d, k, s, u, v;
							s = g.$viewValue;
							u = L(e) || [];
							var A = I ? Object.keys(u).sort() : u,
								x, B, H, E, P = {};
							v = l(s);
							var N = !1,
								U, W;
							R = {};
							for (E = 0; H = A.length, E < H; E++) {
								x = E;
								if (I && (x = A[E], "$" === x.charAt(0))) continue;
								B = u[x];
								d = h(M, x, B) || "";
								(k = a[d]) || (k = a[d] = [], c.push(d));
								d = v(x, B);
								N = N || d;
								B = h(z, x, B);
								B = y(B) ? B : "";
								W = K ? K(e, T) : I ? A[E] : E;
								K && (R[W] = x);
								k.push({
									id: W,
									label: B,
									selected: d
								})
							}
							t || (w || null === s ? a[""].unshift({
								id: "",
								label: "",
								selected: !N
							}) : N || a[""].unshift({
								id: "?",
								label: "",
								selected: !0
							}));
							x = 0;
							for (A = c.length; x < A; x++) {
								d = c[x];
								k = a[d];
								S.length <= x ? (s = {
									element: D.clone().attr("label",
										d),
									label: k.label
								}, u = [s], S.push(u), f.append(s.element)) : (u = S[x], s = u[0], s.label != d && s.element.attr("label", s.label = d));
								N = null;
								E = 0;
								for (H = k.length; E < H; E++) d = k[E], (v = u[E + 1]) ? (N = v.element, v.label !== d.label && (n(P, v.label, !1), n(P, d.label, !0), N.text(v.label = d.label), N.prop("label", v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop("selected", v.selected = d.selected), Ra && N.prop("selected", v.selected))) : ("" === d.id && w ? U = w : (U = C.clone()).val(d.id).prop("selected", d.selected).attr("selected",
									d.selected).prop("label", d.label).text(d.label), u.push(v = {
									element: U,
									label: d.label,
									id: d.id,
									selected: d.selected
								}), n(P, d.label, !0), N ? N.after(U) : s.element.append(U), N = U);
								for (E++; u.length > E;) d = u.pop(), n(P, d.label, !1), d.element.remove()
							}
							for (; S.length > x;) {
								k = S.pop();
								for (E = 1; E < k.length; ++E) n(P, k[E].label, !1);
								k[0].element.remove()
							}
							r(P, function(a, c) {
								0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
							})
						}
						var v;
						if (!(v = s.match(d))) throw gg("iexp", s, xa(f));
						var z = c(v[2] || v[1]),
							A = v[4] || v[6],
							B = / as /.test(v[0]) && v[1],
							x = B ? c(B) :
							null,
							I = v[5],
							M = c(v[3] || ""),
							E = c(v[2] ? v[1] : A),
							L = c(v[7]),
							K = v[8] ? c(v[8]) : null,
							R = {},
							S = [
								[{
									element: f,
									label: ""
								}]
							],
							T = {};
						w && (a(w)(e), w.removeClass("ng-scope"), w.remove());
						f.empty();
						f.on("change", function() {
							e.$apply(function() {
								var a = L(e) || [],
									c;
								if (t) c = [], r(f.val(), function(d) {
									d = K ? R[d] : d;
									c.push("?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d]))
								});
								else {
									var d = K ? R[f.val()] : f.val();
									c = "?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d])
								}
								g.$setViewValue(c);
								p()
							})
						});
						g.$render = p;
						e.$watchCollection(L, k);
						e.$watchCollection(function() {
							var a = L(e),
								c;
							if (a && H(a)) {
								c = Array(a.length);
								for (var d = 0, f = a.length; d < f; d++) c[d] = h(z, d, a[d])
							} else if (a)
								for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(z, d, a[d]));
							return c
						}, k);
						t && e.$watchCollection(function() {
							return g.$modelValue
						}, k)
					}
					if (l[1]) {
						var q = l[0];
						l = l[1];
						var t = h.multiple,
							s = h.ngOptions,
							w = !1,
							v, m = !1,
							C = B(W.createElement("option")),
							D = B(W.createElement("optgroup")),
							z = C.clone();
						h = 0;
						for (var A = g.children(), x = A.length; h < x; h++)
							if ("" === A[h].value) {
								v = w = A.eq(h);
								break
							}
						q.init(l, w, z);
						t && (l.$isEmpty = function(a) {
							return !a || 0 === a.length
						});
						s ? p(e, g, l) : t ? n(e, g, l) : k(e, g, l, q)
					}
				}
			}
		}],
		Yd = ["$interpolate", function(a) {
			var c = {
				addOption: A,
				removeOption: A
			};
			return {
				restrict: "E",
				priority: 100,
				compile: function(d, e) {
					if (D(e.value)) {
						var f = a(d.text(), !0);
						f || e.$set("value", d.text())
					}
					return function(a, d, e) {
						var k = d.parent(),
							n = k.data("$selectController") || k.parent().data("$selectController");
						n && n.databound || (n = c);
						f ? a.$watch(f, function(a, c) {
							e.$set("value", a);
							c !== a && n.removeOption(c);
							n.addOption(a, d)
						}) : n.addOption(e.value, d);
						d.on("$destroy", function() {
							n.removeOption(e.value)
						})
					}
				}
			}
		}],
		Xd = ea({
			restrict: "E",
			terminal: !1
		}),
		Ac = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, c, d, e) {
					e && (d.required = !0, e.$validators.required = function(a, c) {
						return !d.required || !e.$isEmpty(c)
					}, d.$observe("required", function() {
						e.$validate()
					}))
				}
			}
		},
		zc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, c, d, e) {
					if (e) {
						var f, g = d.ngPattern || d.pattern;
						d.$observe("pattern", function(a) {
							x(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
							if (a && !a.test) throw S("ngPattern")("noregexp", g, a, xa(c));
							f =
								a || u;
							e.$validate()
						});
						e.$validators.pattern = function(a, c) {
							return e.$isEmpty(c) || D(f) || f.test(c)
						}
					}
				}
			}
		},
		Cc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, c, d, e) {
					if (e) {
						var f = -1;
						d.$observe("maxlength", function(a) {
							a = aa(a);
							f = isNaN(a) ? -1 : a;
							e.$validate()
						});
						e.$validators.maxlength = function(a, c) {
							return 0 > f || e.$isEmpty(c) || c.length <= f
						}
					}
				}
			}
		},
		Bc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, c, d, e) {
					if (e) {
						var f = 0;
						d.$observe("minlength", function(a) {
							f = aa(a) || 0;
							e.$validate()
						});
						e.$validators.minlength =
							function(a, c) {
								return e.$isEmpty(c) || c.length >= f
							}
					}
				}
			}
		};
	R.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), B(W).ready(function() {
		Jd(W, tc)
	}))
})(window, document);
!window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

var duScrollDefaultEasing = function(e) {
	"use strict";
	return .5 > e ? Math.pow(2 * e, 2) / 2 : 1 - Math.pow(2 * (1 - e), 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function(e, t, n, r, o, l, u) {
	"use strict";
	var i = {},
		c = function(e) {
			return "undefined" != typeof HTMLDocument && e instanceof HTMLDocument || e.nodeType && e.nodeType === e.DOCUMENT_NODE
		},
		a = function(e) {
			return "undefined" != typeof HTMLElement && e instanceof HTMLElement || e.nodeType && e.nodeType === e.ELEMENT_NODE
		},
		s = function(e) {
			return a(e) || c(e) ? e : e[0]
		};
	i.duScrollTo = function(t, n, r) {
		var o;
		if (angular.isElement(t) ? o = this.duScrollToElement : angular.isDefined(r) && (o = this.duScrollToAnimated), o) return o.apply(this, arguments);
		var l = s(this);
		return c(l) ? e.scrollTo(t, n) : (l.scrollLeft = t, void(l.scrollTop = n))
	};
	var d, f;
	i.duScrollToAnimated = function(e, l, u, i) {
		u && !i && (i = o);
		var c = this.duScrollLeft(),
			a = this.duScrollTop(),
			s = Math.round(e - c),
			p = Math.round(l - a),
			m = null,
			g = 0,
			S = this,
			h = "scroll mousedown mousewheel touchmove keydown",
			v = function(e) {
				(!e || g && e.which > 0) && (S.unbind(h, v), n(d), f.reject(), d = null)
			};
		if (d && v(), f = t.defer(), 0 === u || !s && !p) return 0 === u && S.duScrollTo(e, l), f.resolve(), f.promise;
		var y = function(e) {
			null === m && (m = e), g = e - m;
			var t = g >= u ? 1 : i(g / u);
			S.scrollTo(c + Math.ceil(s * t), a + Math.ceil(p * t)), 1 > t ? d = r(y) : (S.unbind(h, v), d = null, f.resolve())
		};
		return S.duScrollTo(c, a), S.bind(h, v), d = r(y), f.promise
	}, i.duScrollToElement = function(e, t, n, r) {
		var o = s(this);
		(!angular.isNumber(t) || isNaN(t)) && (t = u);
		var l = this.duScrollTop() + s(e).getBoundingClientRect().top - t;
		return a(o) && (l -= o.getBoundingClientRect().top), this.duScrollTo(0, l, n, r)
	}, i.duScrollLeft = function(t, n, r) {
		if (angular.isNumber(t)) return this.duScrollTo(t, this.duScrollTop(), n, r);
		var o = s(this);
		return c(o) ? e.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : o.scrollLeft
	}, i.duScrollTop = function(t, n, r) {
		if (angular.isNumber(t)) return this.duScrollTo(this.duScrollLeft(), t, n, r);
		var o = s(this);
		return c(o) ? e.scrollY || document.documentElement.scrollTop || document.body.scrollTop : o.scrollTop
	}, i.duScrollToElementAnimated = function(e, t, n, r) {
		return this.duScrollToElement(e, t, n || l, r)
	}, i.duScrollTopAnimated = function(e, t, n) {
		return this.duScrollTop(e, t || l, n)
	}, i.duScrollLeftAnimated = function(e, t, n) {
		return this.duScrollLeft(e, t || l, n)
	}, angular.forEach(i, function(e, t) {
		angular.element.prototype[t] = e;
		var n = t.replace(/^duScroll/, "scroll");
		angular.isUndefined(angular.element.prototype[n]) && (angular.element.prototype[n] = e)
	})
}]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function(e) {
	"use strict";
	var t = ["webkit", "moz", "o", "ms"];
	return function(n, r) {
		if (e[n]) return e[n];
		for (var o, l = n.substr(0, 1).toUpperCase() + n.substr(1), u = 0; u < t.length; u++)
			if (o = t[u] + l, e[o]) return e[o];
		return r
	}
}]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function(e, t) {
	"use strict";
	var n = 0,
		r = function(e) {
			var r = (new Date).getTime(),
				o = Math.max(0, 16 - (r - n)),
				l = t(function() {
					e(r + o)
				}, o);
			return n = r + o, l
		};
	return e("requestAnimationFrame", r)
}]).factory("cancelAnimation", ["polyfill", "$timeout", function(e, t) {
	"use strict";
	var n = function(e) {
		t.cancel(e)
	};
	return e("cancelAnimationFrame", n)
}]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function(e, t, n, r, o, l, u) {
	"use strict";
	var i = function(o) {
			var i = !1,
				c = !1,
				a = function() {
					c = !1;
					var t, u = o.container,
						i = u[0],
						a = 0;
					"undefined" != typeof HTMLElement && i instanceof HTMLElement || i.nodeType && i.nodeType === i.ELEMENT_NODE ? (a = i.getBoundingClientRect().top, t = Math.round(i.scrollTop + i.clientHeight) >= i.scrollHeight) : t = Math.round(n.pageYOffset + n.innerHeight) >= r[0].body.scrollHeight;
					var s, d, f, p, m, g, S = t ? "bottom" : "top";
					for (p = o.spies, d = o.currentlyActive, f = void 0, s = 0; s < p.length; s++) m = p[s], g = m.getTargetPosition(), g && (t || g.top + m.offset - a < 20 && (l || -1 * g.top + a) < g.height) && (!f || f[S] < g[S]) && (f = {
						spy: m
					}, f[S] = g[S]);
					f && (f = f.spy), d === f || l && !f || (d && (d.$element.removeClass("active"), e.$broadcast("duScrollspy:becameInactive", d.$element)), f && (f.$element.addClass("active"), e.$broadcast("duScrollspy:becameActive", f.$element)), o.currentlyActive = f)
				};
			return u ? function() {
				i ? c = !0 : (a(), i = t(function() {
					i = !1, c && a()
				}, u, !1))
			} : a
		},
		c = {},
		a = function(e) {
			var t = e.$id,
				n = {
					spies: []
				};
			return n.handler = i(n), c[t] = n, e.$on("$destroy", function() {
				s(e)
			}), t
		},
		s = function(e) {
			var t = e.$id,
				n = c[t],
				r = n.container;
			r && r.off("scroll", n.handler), delete c[t]
		},
		d = a(e),
		f = function(e) {
			return c[e.$id] ? c[e.$id] : e.$parent ? f(e.$parent) : c[d]
		},
		p = function(e) {
			var t, n, r = e.$scope;
			if (r) return f(r);
			for (n in c)
				if (t = c[n], -1 !== t.spies.indexOf(e)) return t
		},
		m = function(e) {
			for (; e.parentNode;)
				if (e = e.parentNode, e === document) return !0;
			return !1
		},
		g = function(e) {
			var t = p(e);
			t && (t.spies.push(e), t.container && m(t.container) || (t.container && t.container.off("scroll", t.handler), t.container = o.getContainer(e.$scope), t.container.on("scroll", t.handler).triggerHandler("scroll")))
		},
		S = function(e) {
			var t = p(e);
			e === t.currentlyActive && (t.currentlyActive = null);
			var n = t.spies.indexOf(e); - 1 !== n && t.spies.splice(n, 1), e.$element = null
		};
	return {
		addSpy: g,
		removeSpy: S,
		createContext: a,
		destroyContext: s,
		getContextForScope: f
	}
}]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function(e) {
	"use strict";
	var t = {},
		n = function(e, n) {
			var r = e.$id;
			return t[r] = n, r
		},
		r = function(e) {
			return t[e.$id] ? e.$id : e.$parent ? r(e.$parent) : void 0
		},
		o = function(n) {
			var o = r(n);
			return o ? t[o] : e
		},
		l = function(e) {
			var n = r(e);
			n && delete t[n]
		};
	return {
		getContainerId: r,
		getContainer: o,
		setContainer: n,
		removeContainer: l
	}
}]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(e, t, n) {
	"use strict";
	return {
		link: function(r, o, l) {
			o.on("click", function(o) {
				if (l.href && -1 !== l.href.indexOf("#")) {
					var u = document.getElementById(l.href.replace(/.*(?=#[^\s]+$)/, "").substring(1));
					if (u && u.getBoundingClientRect) {
						o.stopPropagation && o.stopPropagation(), o.preventDefault && o.preventDefault();
						var i = l.offset ? parseInt(l.offset, 10) : t,
							c = l.duration ? parseInt(l.duration, 10) : e,
							a = n.getContainer(r);
						a.duScrollToElement(angular.element(u), isNaN(i) ? 0 : i, isNaN(c) ? 0 : c)
					}
				}
			})
		}
	}
}]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function(e) {
	"use strict";
	return {
		restrict: "A",
		scope: !0,
		compile: function() {
			return {
				pre: function(t) {
					e.createContext(t)
				}
			}
		}
	}
}]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function(e) {
	"use strict";
	return {
		restrict: "A",
		scope: !0,
		compile: function() {
			return {
				pre: function(t, n, r) {
					r.$observe("duScrollContainer", function(r) {
						angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, e.setContainer(t, r), t.$on("$destroy", function() {
							e.removeContainer(t)
						})
					})
				}
			}
		}
	}
}]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(e, t, n, r) {
	"use strict";
	var o = function(e, t, n, r) {
		angular.isElement(e) ? this.target = e : angular.isString(e) && (this.targetId = e), this.$scope = t, this.$element = n, this.offset = r
	};
	return o.prototype.getTargetElement = function() {
		return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), this.target
	}, o.prototype.getTargetPosition = function() {
		var e = this.getTargetElement();
		return e ? e.getBoundingClientRect() : void 0
	}, o.prototype.flushTargetCache = function() {
		this.targetId && (this.target = void 0)
	}, {
		link: function(l, u, i) {
			var c, a = i.ngHref || i.href;
			a && -1 !== a.indexOf("#") ? c = a.replace(/.*(?=#[^\s]+$)/, "").substring(1) : i.duScrollspy && (c = i.duScrollspy), c && n(function() {
				var n = new o(c, l, u, -(i.offset ? parseInt(i.offset, 10) : t));
				e.addSpy(n), l.$on("$destroy", function() {
					e.removeSpy(n)
				}), l.$on("$locationChangeSuccess", n.flushTargetCache.bind(n)), r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n))
			}, 0, !1)
		}
	}
}]);
//# sourceMappingURL=angular-scroll.min.js.map
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

! function(a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
	"use strict";
	var b = window.Slick || {};
	b = function() {
		function c(c, d) {
			var f, g, h, e = this;
			if (e.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: a(c),
					appendDots: a(c),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(a, b) {
						return '<button type="button" data-role="none">' + (b + 1) + "</button>"
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rtl: !1,
					slide: "",
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					variableWidth: !1,
					vertical: !1,
					waitForAnimate: !0
				}, e.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: !1
				}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, g && g.length > -1) {
				e.respondTo = e.options.respondTo || "window";
				for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
				e.breakpoints.sort(function(a, b) {
					return e.options.mobileFirst === !0 ? a - b : b - a
				})
			}
			"undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(), e.checkResponsive(!0)
		}
		var b = 0;
		return c
	}(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function() {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function(b, c) {
		var d = {},
			e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function(a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function() {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.asNavFor = function(b) {
		var c = this,
			d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
		null !== d && d.slideHandler(b, !0)
	}, b.prototype.applyTransition = function(a) {
		var b = this,
			c = {};
		c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function() {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function() {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function() {
		var a = this;
		a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
	}, b.prototype.buildArrows = function() {
		var b = this;
		b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
	}, b.prototype.buildDots = function() {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
			d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active")
		}
	}, b.prototype.buildOut = function() {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
			a(c).attr("data-slick-index", b)
		}), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.checkResponsive = function(b) {
		var d, e, f, c = this,
			g = c.$slider.width(),
			h = window.innerWidth || a(window).width();
		if ("window" === c.respondTo ? f = h : "slider" === c.respondTo ? f = g : "min" === c.respondTo && (f = Math.min(h, g)), c.originalSettings.responsive && c.originalSettings.responsive.length > -1 && null !== c.originalSettings.responsive) {
			e = null;
			for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? f < c.breakpoints[d] && (e = c.breakpoints[d]) : f > c.breakpoints[d] && (e = c.breakpoints[d]));
			null !== e ? null !== c.activeBreakpoint ? e !== c.activeBreakpoint && (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, c.options = c.originalSettings, b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())
		}
	}, b.prototype.changeSlide = function(b, c) {
		var f, g, h, d = this,
			e = a(b.target);
		switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c);
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function(a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
		else
			for (var e in c) {
				if (a < c[e]) {
					a = d;
					break
				}
				d = c[e]
			}
		return a
	}, b.prototype.clickHandler = function(a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function() {
		var b = this;
		b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({
			position: "",
			left: "",
			top: "",
			zIndex: "",
			opacity: "",
			width: ""
		}), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid), b.$slider.html(b.$slides)
	}, b.prototype.disableTransition = function(a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function(a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: 1e3
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: 1e3
		}), b && setTimeout(function() {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
		var b = this;
		null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function() {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);
		else if (a.options.centerMode === !0) d = a.slideCount;
		else
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d - 1
	}, b.prototype.getLeft = function(a) {
		var c, d, f, b = this,
			e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function() {
		var e, a = this,
			b = 0,
			c = 0,
			d = [];
		for (a.options.infinite === !1 ? (e = a.slideCount - a.options.slidesToShow + 1, a.options.centerMode === !0 && (e = a.slideCount)) : (b = -1 * a.slideCount, c = -1 * a.slideCount, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function() {
		return this
	}, b.prototype.getSlideCount = function() {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function() {
		var b = this;
		a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
	}, b.prototype.initArrowEvents = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function() {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function() {
			b.paused = !0, b.autoPlayClear()
		}).on("mouseleave.slick", function() {
			b.paused = !1, b.autoPlay()
		})
	}, b.prototype.initializeEvents = function() {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && (a(document).on(b.visibilityChange, function() {
			b.visibility()
		}), b.options.pauseOnHover === !0 && (b.$list.on("mouseenter.slick", function() {
			b.paused = !0, b.autoPlayClear()
		}), b.$list.on("mouseleave.slick", function() {
			b.paused = !1, b.autoPlay()
		}))), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
			b.checkResponsive(), b.setPosition()
		}), a(window).on("resize.slick.slick-" + b.instanceUid, function() {
			a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
				b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
			}, 50))
		}), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function(a) {
			a.preventDefault()
		}), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
	}, b.prototype.keyHandler = function(a) {
		var b = this;
		37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.lazyLoad = function() {
		function g(b) {
			a("img[data-lazy]", b).each(function() {
				var b = a(this),
					c = a(this).attr("data-lazy");
				b.load(function() {
					b.animate({
						opacity: 1
					}, 200)
				}).css({
					opacity: 0
				}).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
			})
		}
		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function() {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function() {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.pause = b.prototype.slickPause = function() {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function() {
		var a = this;
		a.paused = !1, a.autoPlay()
	}, b.prototype.postSlide = function(a) {
		var b = this;
		b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
	}, b.prototype.prev = b.prototype.slickPrev = function() {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.progressiveLazyLoad = function() {
		var c, d, b = this;
		c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad()
		}).error(function() {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad()
		}))
	}, b.prototype.refresh = function() {
		var b = this,
			c = b.currentSlide;
		b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
			data: {
				message: "index",
				index: c
			}
		}, !0)
	}, b.prototype.reinit = function() {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
	}, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
	}, b.prototype.setCSS = function(a) {
		var d, e, b = this,
			c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function() {
		var a = this;
		if (a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
				padding: "0px " + a.options.centerPadding
			}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
				padding: a.options.centerPadding + " 0px"
			})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1) a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length));
		else if (a.options.variableWidth === !0) {
			var b = 0;
			a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.children(".slick-slide").each(function() {
				b += a.listWidth
			}), a.$slideTrack.width(Math.ceil(b) + 1)
		} else a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length));
		var c = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - c)
	}, b.prototype.setFade = function() {
		var c, b = this;
		b.$slides.each(function(d, e) {
			c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: 800,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: 800,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({
			zIndex: 900,
			opacity: 1
		})
	}, b.prototype.setHeight = function() {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function(a, b, c) {
		var d = this;
		d.options[a] = b, c === !0 && (d.unload(), d.reinit())
	}, b.prototype.setPosition = function() {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function() {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function(a) {
		var c, d, e, f, b = this;
		b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function() {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.selectHandler = function(b) {
		var c = this,
			d = parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));
		return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"), c.$slides.eq(d).addClass("slick-active"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), c.asNavFor(d), void 0) : (c.slideHandler(d), void 0)
	}, b.prototype.slideHandler = function(a, b, c) {
		var d, e, f, g, h = null,
			i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
			i.postSlide(d)
		}) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
			i.postSlide(d)
		}) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function() {
			i.postSlide(e)
		}) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function() {
			i.postSlide(e)
		}) : i.postSlide(e), void 0)))
	}, b.prototype.startLoad = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function() {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical"
	}, b.prototype.swipeEnd = function() {
		var c, b = this;
		if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
			case "left":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
				break;
			case "right":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function(a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function(a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
	}, b.prototype.swipeStart = function(a) {
		var c, b = this;
		return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function() {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
	}, b.prototype.unslick = function() {
		var a = this;
		a.destroy()
	}, b.prototype.updateArrows = function() {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
	}, b.prototype.updateDots = function() {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
	}, b.prototype.visibility = function() {
		var a = this;
		document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
	}, a.fn.slick = function() {
		var g, a = this,
			c = arguments[0],
			d = Array.prototype.slice.call(arguments, 1),
			e = a.length,
			f = 0;
		for (f; e > f; f++)
			if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}, a(function() {
		a("[data-slick]").slick()
	})
});
/*! angular-slick  v0.2.0 */
"use strict";
angular.module("slick", []).directive("slick", ["$timeout", function(a) {
	return {
		restrict: "AEC",
		scope: {
			initOnload: "@",
			data: "=",
			currentIndex: "=",
			accessibility: "@",
			adaptiveHeight: "@",
			arrows: "@",
			asNavFor: "@",
			appendArrows: "@",
			appendDots: "@",
			autoplay: "@",
			autoplaySpeed: "@",
			centerMode: "@",
			centerPadding: "@",
			cssEase: "@",
			customPaging: "&",
			dots: "@",
			draggable: "@",
			easing: "@",
			fade: "@",
			focusOnSelect: "@",
			infinite: "@",
			initialSlide: "@",
			lazyLoad: "@",
			onBeforeChange: "&",
			onAfterChange: "&",
			onInit: "&",
			onReInit: "&",
			onSetPosition: "&",
			pauseOnHover: "@",
			pauseOnDotsHover: "@",
			responsive: "=",
			rtl: "@",
			slide: "@",
			slidesToShow: "@",
			slidesToScroll: "@",
			speed: "@",
			swipe: "@",
			swipeToSlide: "@",
			touchMove: "@",
			touchThreshold: "@",
			useCSS: "@",
			variableWidth: "@",
			vertical: "@",
			prevArrow: "@",
			nextArrow: "@"
		},
		link: function(b, c, d) {
			var e, f, g;
			return e = function() {
				return a(function() {
					var a;
					return a = $(c), a.unslick(), a.find(".slick-list").remove(), a
				})
			}, f = function() {
				return a(function() {
					var a, e, f;
					return f = $(c), null != b.currentIndex && (a = b.currentIndex), e = function(a, c) {
						return b.customPaging({
							slick: a,
							index: c
						})
					}, f.slick({
						accessibility: "false" !== b.accessibility,
						adaptiveHeight: "true" === b.adaptiveHeight,
						arrows: "false" !== b.arrows,
						asNavFor: b.asNavFor ? b.asNavFor : void 0,
						appendArrows: $(b.appendArrows ? b.appendArrows : c),
						appendDots: $(b.appendDots ? b.appendDots : c),
						autoplay: "true" === b.autoplay,
						autoplaySpeed: null != b.autoplaySpeed ? parseInt(b.autoplaySpeed, 10) : 3e3,
						centerMode: "true" === b.centerMode,
						centerPadding: b.centerPadding || "50px",
						cssEase: b.cssEase || "ease",
						customPaging: d.customPaging ? e : void 0,
						dots: "true" === b.dots,
						draggable: "false" !== b.draggable,
						easing: b.easing || "linear",
						fade: "true" === b.fade,
						focusOnSelect: "true" === b.focusOnSelect,
						infinite: "false" !== b.infinite,
						initialSlide: b.initialSlide || 0,
						lazyLoad: b.lazyLoad || "ondemand",
						beforeChange: d.onBeforeChange ? b.onBeforeChange : void 0,
						onReInit: d.onReInit ? b.onReInit : void 0,
						onSetPosition: d.onSetPosition ? b.onSetPosition : void 0,
						pauseOnHover: "false" !== b.pauseOnHover,
						responsive: b.responsive || void 0,
						rtl: "true" === b.rtl,
						slide: b.slide || "div",
						slidesToShow: null != b.slidesToShow ? parseInt(b.slidesToShow, 10) : 1,
						slidesToScroll: null != b.slidesToScroll ? parseInt(b.slidesToScroll, 10) : 1,
						speed: null != b.speed ? parseInt(b.speed, 10) : 300,
						swipe: "false" !== b.swipe,
						swipeToSlide: "true" === b.swipeToSlide,
						touchMove: "false" !== b.touchMove,
						touchThreshold: b.touchThreshold ? parseInt(b.touchThreshold, 10) : 5,
						useCSS: "false" !== b.useCSS,
						variableWidth: "true" === b.variableWidth,
						vertical: "true" === b.vertical,
						prevArrow: b.prevArrow ? $(b.prevArrow) : void 0,
						nextArrow: b.nextArrow ? $(b.nextArrow) : void 0
					}), f.on("init", function(c) {
						return d.onInit && b.onInit(), null != a ? c.slideHandler(a) : void 0
					}), f.on("afterChange", function(c, d, e) {
						return b.onAfterChange && b.onAfterChange(), null != a ? b.$apply(function() {
							return a = e, b.currentIndex = e
						}) : void 0
					}), b.$watch("currentIndex", function(b) {
						return null != a && null != b && b !== a ? f.slick("slickGoTo", b) : void 0
					})
				})
			}, b.initOnload ? (g = !1, b.$watch("data", function(a) {
				return null != a ? (g && e(), f(), g = !0) : void 0
			})) : f()
		}
	}
}]);
(function() {
	function r(r, e, n) {
		var t = e && n || 0,
			u = 0;
		for (e = e || [], r.toLowerCase().replace(/[0-9a-f]{2}/g, function(r) {
				16 > u && (e[t + u++] = v[r])
			}); 16 > u;) e[t + u++] = 0;
		return e
	}

	function e(r, e) {
		var n = e || 0,
			t = l;
		return t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]]
	}

	function n(r, n, t) {
		var u = n && t || 0,
			o = n || [];
		r = r || {};
		var a = null != r.clockseq ? r.clockseq : m,
			f = null != r.msecs ? r.msecs : (new Date).getTime(),
			i = null != r.nsecs ? r.nsecs : w + 1,
			c = f - g + (i - w) / 1e4;
		if (0 > c && null == r.clockseq && (a = a + 1 & 16383), (0 > c || f > g) && null == r.nsecs && (i = 0), i >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
		g = f, w = i, m = a, f += 122192928e5;
		var s = (1e4 * (268435455 & f) + i) % 4294967296;
		o[u++] = s >>> 24 & 255, o[u++] = s >>> 16 & 255, o[u++] = s >>> 8 & 255, o[u++] = 255 & s;
		var l = f / 4294967296 * 1e4 & 268435455;
		o[u++] = l >>> 8 & 255, o[u++] = 255 & l, o[u++] = l >>> 24 & 15 | 16, o[u++] = l >>> 16 & 255, o[u++] = a >>> 8 | 128, o[u++] = 255 & a;
		for (var v = r.node || p, d = 0; 6 > d; d++) o[u + d] = v[d];
		return n ? n : e(o)
	}

	function t(r, n, t) {
		var o = n && t || 0;
		"string" == typeof r && (n = "binary" == r ? new s(16) : null, r = null), r = r || {};
		var a = r.random || (r.rng || u)();
		if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n)
			for (var f = 0; 16 > f; f++) n[o + f] = a[f];
		return n || e(a)
	}
	var u, o = this;
	if ("function" == typeof o.require) try {
		var a = o.require("crypto").randomBytes;
		u = a && function() {
			return a(16)
		}
	} catch (f) {}
	if (!u && o.crypto && crypto.getRandomValues) {
		var i = new Uint8Array(16);
		u = function() {
			return crypto.getRandomValues(i), i
		}
	}
	if (!u) {
		var c = new Array(16);
		u = function() {
			for (var r, e = 0; 16 > e; e++) 0 === (3 & e) && (r = 4294967296 * Math.random()), c[e] = r >>> ((3 & e) << 3) & 255;
			return c
		}
	}
	for (var s = "function" == typeof o.Buffer ? o.Buffer : Array, l = [], v = {}, d = 0; 256 > d; d++) l[d] = (d + 256).toString(16).substr(1), v[l[d]] = d;
	var y = u(),
		p = [1 | y[0], y[1], y[2], y[3], y[4], y[5]],
		m = 16383 & (y[6] << 8 | y[7]),
		g = 0,
		w = 0,
		h = t;
	if (h.v1 = n, h.v4 = t, h.parse = r, h.unparse = e, h.BufferClass = s, "undefined" != typeof module && module.exports) module.exports = h;
	else if ("function" == typeof define && define.amd) define(function() {
		return h
	});
	else {
		var q = o.uuid;
		h.noConflict = function() {
			return o.uuid = q, h
		}, o.uuid = h
	}
}).call(this);
/*
 *  Project: jquery.responsiveTabs.js
 *  Description: A plugin that creates responsive tabs, optimized for all devices
 *  Author: Jelle Kralt (jelle@jellekralt.nl)
 *  Version: 1.4.5
 *  License: MIT
 */
(function(e, t, n) {
	function i(t, n) {
		this.element = t;
		this.$element = e(t);
		this.tabs = [];
		this.state = "";
		this.rotateInterval = 0;
		this.$queue = e({});
		this.options = e.extend({}, r, n);
		this.init()
	}
	var r = {
		active: null,
		event: "click",
		disabled: [],
		collapsible: "accordion",
		startCollapsed: !1,
		rotate: !1,
		setHash: !1,
		animation: "default",
		animationQueue: !1,
		duration: 500,
		scrollToAccordion: !1,
		activate: function() {},
		deactivate: function() {},
		load: function() {},
		activateState: function() {},
		classes: {
			stateDefault: "r-tabs-state-default",
			stateActive: "r-tabs-state-active",
			stateDisabled: "r-tabs-state-disabled",
			stateExcluded: "r-tabs-state-excluded",
			tab: "r-tabs-tab",
			anchor: "r-tabs-anchor",
			panel: "r-tabs-panel",
			accordionTitle: "r-tabs-accordion-title"
		}
	};
	i.prototype.init = function() {
		var n = this;
		this.tabs = this._loadElements();
		this._loadClasses();
		this._loadEvents();
		e(t).on("resize", function(e) {
			n._setState(e)
		});
		e(t).on("hashchange", function(e) {
			var r = n._getTabRefBySelector(t.location.hash),
				i = n._getTab(r);
			r >= 0 && !i._ignoreHashChange && !i.disabled && n._openTab(e, n._getTab(r), !0)
		});
		this.options.rotate !== !1 && this.startRotation();
		this.$element.bind("tabs-activate", function(e, t) {
			n.options.activate.call(this, e, t)
		});
		this.$element.bind("tabs-deactivate", function(e, t) {
			n.options.deactivate.call(this, e, t)
		});
		this.$element.bind("tabs-activate-state", function(e, t) {
			n.options.activateState.call(this, e, t)
		});
		this.$element.bind("tabs-load", function(e) {
			var t;
			n._setState(e);
			if (n.options.startCollapsed !== !0 && (n.options.startCollapsed !== "accordion" || n.state !== "accordion")) {
				t = n._getStartTab();
				n._openTab(e, t);
				n.options.load.call(this, e, t)
			}
		});
		this.$element.trigger("tabs-load")
	};
	i.prototype._loadElements = function() {
		var t = this,
			n = this.$element.children("ul"),
			r = [],
			i = 0;
		this.$element.addClass("r-tabs");
		n.addClass("r-tabs-nav");
		e("li", n).each(function() {
			var n = e(this),
				s = n.hasClass(t.options.classes.stateExcluded),
				o, u, a, f, l;
			if (!s) {
				o = e("a", n);
				l = o.attr("href");
				u = e(l);
				a = e("<div></div>").insertBefore(u);
				f = e("<a></a>").attr("href", l).html(o.html()).appendTo(a);
				var c = {
					_ignoreHashChange: !1,
					id: i,
					disabled: e.inArray(i, t.options.disabled) !== -1,
					tab: e(this),
					anchor: e("a", n),
					panel: u,
					selector: l,
					accordionTab: a,
					accordionAnchor: f,
					active: !1
				};
				i++;
				r.push(c)
			}
		});
		return r
	};
	i.prototype._loadClasses = function() {
		for (var e = 0; e < this.tabs.length; e++) {
			this.tabs[e].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
			this.tabs[e].anchor.addClass(this.options.classes.anchor);
			this.tabs[e].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
			this.tabs[e].accordionTab.addClass(this.options.classes.accordionTitle);
			this.tabs[e].accordionAnchor.addClass(this.options.classes.anchor);
			if (this.tabs[e].disabled) {
				this.tabs[e].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
				this.tabs[e].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled)
			}
		}
	};
	i.prototype._loadEvents = function() {
		var e = this,
			n = function(n) {
				var r = e._getCurrentTab(),
					i = n.data.tab;
				n.preventDefault();
				if (!i.disabled) {
					e.options.setHash && (history.pushState ? history.pushState(null, null, i.selector) : t.location.hash = i.selector);
					n.data.tab._ignoreHashChange = !0;
					if (r !== i || e._isCollapisble()) {
						e._closeTab(n, r);
						(r !== i || !e._isCollapisble()) && e._openTab(n, i, !1, !0)
					}
				}
			};
		for (var r = 0; r < this.tabs.length; r++) {
			this.tabs[r].anchor.on(e.options.event, {
				tab: e.tabs[r]
			}, n);
			this.tabs[r].accordionAnchor.on(e.options.event, {
				tab: e.tabs[r]
			}, n)
		}
	};
	i.prototype._getStartTab = function() {
		var e = this._getTabRefBySelector(t.location.hash),
			n;
		e >= 0 && !this._getTab(e).disabled ? n = this._getTab(e) : this.options.active > 0 && !this._getTab(this.options.active).disabled ? n = this._getTab(this.options.active) : n = this._getTab(0);
		return n
	};
	i.prototype._setState = function(t) {
		var r = e("ul", this.$element),
			i = this.state,
			s = typeof this.options.startCollapsed == "string",
			o;
		r.is(":visible") ? this.state = "tabs" : this.state = "accordion";
		if (this.state !== i) {
			this.$element.trigger("tabs-activate-state", {
				oldState: i,
				newState: this.state
			});
			if (i && s && this.options.startCollapsed !== this.state && this._getCurrentTab() === n) {
				o = this._getStartTab(t);
				this._openTab(t, o)
			}
		}
	};
	i.prototype._openTab = function(t, n, r, i) {
		var s = this;
		r && this._closeTab(t, this._getCurrentTab());
		i && this.rotateInterval > 0 && this.stopRotation();
		n.active = !0;
		n.tab.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
		n.accordionTab.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
		s._doTransition(n.panel, s.options.animation, "open", function() {
			n.panel.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
			s.getState() === "accordion" && s.options.scrollToAccordion && (!s._isInView(n.accordionTab) || s.options.animation !== "default") && (s.options.animation !== "default" && s.options.duration > 0 ? e("html, body").animate({
				scrollTop: n.accordionTab.offset().top
			}, s.options.duration) : e("html, body").scrollTop(n.accordionTab.offset().top))
		});
		this.$element.trigger("tabs-activate", n)
	};
	i.prototype._closeTab = function(e, t) {
		var r = this,
			i = typeof r.options.animationQueue == "string",
			s;
		if (t !== n) {
			i && r.getState() === r.options.animationQueue ? s = !0 : i ? s = !1 : s = r.options.animationQueue;
			t.active = !1;
			t.tab.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault);
			r._doTransition(t.panel, r.options.animation, "close", function() {
				t.accordionTab.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault);
				t.panel.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault)
			}, !s);
			this.$element.trigger("tabs-deactivate", t)
		}
	};
	i.prototype._doTransition = function(e, t, n, r, i) {
		var s, o = this;
		switch (t) {
			case "slide":
				s = n === "open" ? "slideDown" : "slideUp";
				break;
			case "fade":
				s = n === "open" ? "fadeIn" : "fadeOut";
				break;
			default:
				s = n === "open" ? "show" : "hide";
				o.options.duration = 0
		}
		this.$queue.queue("responsive-tabs", function(i) {
			e[s]({
				duration: o.options.duration,
				complete: function() {
					r.call(e, t, n);
					i()
				}
			})
		});
		(n === "open" || i) && this.$queue.dequeue("responsive-tabs")
	};
	i.prototype._isCollapisble = function() {
		return typeof this.options.collapsible == "boolean" && this.options.collapsible || typeof this.options.collapsible == "string" && this.options.collapsible === this.getState()
	};
	i.prototype._getTab = function(e) {
		return this.tabs[e]
	};
	i.prototype._getTabRefBySelector = function(e) {
		for (var t = 0; t < this.tabs.length; t++)
			if (this.tabs[t].selector === e) return t;
		return -1
	};
	i.prototype._getCurrentTab = function() {
		return this._getTab(this._getCurrentTabRef())
	};
	i.prototype._getNextTabRef = function(e) {
		var t = e || this._getCurrentTabRef(),
			n = t === this.tabs.length - 1 ? 0 : t + 1;
		return this._getTab(n).disabled ? this._getNextTabRef(n) : n
	};
	i.prototype._getPreviousTabRef = function() {
		return this._getCurrentTabRef() === 0 ? this.tabs.length - 1 : this._getCurrentTabRef() - 1
	};
	i.prototype._getCurrentTabRef = function() {
		for (var e = 0; e < this.tabs.length; e++)
			if (this.tabs[e].active) return e;
		return -1
	};
	i.prototype._isInView = function(n) {
		var r = e(t).scrollTop(),
			i = r + e(t).height(),
			s = n.offset().top,
			o = s + n.height();
		return o <= i && s >= r
	};
	i.prototype.activate = function(e, t) {
		var n = jQuery.Event("tabs-activate"),
			r = this._getTab(e);
		r.disabled || this._openTab(n, r, !0, t || !0)
	};
	i.prototype.deactivate = function(e) {
		var t = jQuery.Event("tabs-dectivate"),
			n = this._getTab(e);
		n.disabled || this._closeTab(t, n)
	};
	i.prototype.enable = function(e) {
		var t = this._getTab(e);
		if (t) {
			t.disabled = !1;
			t.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
			t.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled)
		}
	};
	i.prototype.disable = function(e) {
		var t = this._getTab(e);
		if (t) {
			t.disabled = !0;
			t.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
			t.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled)
		}
	};
	i.prototype.getState = function() {
		return this.state
	};
	i.prototype.startRotation = function(t) {
		var n = this;
		if (!(this.tabs.length > this.options.disabled.length)) throw new Error("Rotation is not possible if all tabs are disabled");
		this.rotateInterval = setInterval(function() {
			var e = jQuery.Event("rotate");
			n._openTab(e, n._getTab(n._getNextTabRef()), !0)
		}, t || (e.isNumeric(n.options.rotate) ? n.options.rotate : 4e3))
	};
	i.prototype.stopRotation = function() {
		t.clearInterval(this.rotateInterval);
		this.rotateInterval = 0
	};
	e.fn.responsiveTabs = function(t) {
		var r = arguments;
		if (t === n || typeof t == "object") return this.each(function() {
			e.data(this, "responsivetabs") || e.data(this, "responsivetabs", new i(this, t))
		});
		if (typeof t == "string" && t[0] !== "_" && t !== "init") return this.each(function() {
			var n = e.data(this, "responsivetabs");
			n instanceof i && typeof n[t] == "function" && n[t].apply(n, Array.prototype.slice.call(r, 1));
			t === "destroy" && e.data(this, "responsivetabs", null)
		})
	}
})(jQuery, window);
window.Modernizr = function(e, t, n) {
	function r(e) {
		b.cssText = e
	}

	function o(e, t) {
		return r(S.join(e + ";") + (t || ""))
	}

	function a(e, t) {
		return typeof e === t
	}

	function i(e, t) {
		return !!~("" + e).indexOf(t)
	}

	function c(e, t) {
		for (var r in e) {
			var o = e[r];
			if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
		}
		return !1
	}

	function s(e, t, r) {
		for (var o in e) {
			var i = t[e[o]];
			if (i !== n) return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
		}
		return !1
	}

	function u(e, t, n) {
		var r = e.charAt(0).toUpperCase() + e.slice(1),
			o = (e + " " + k.join(r + " ") + r).split(" ");
		return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
	}

	function l() {
		p.input = function(n) {
			for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
			return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(e) {
			for (var r, o, a, i = 0, c = e.length; c > i; i++) E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
			return P
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var d, f, m = "2.8.3",
		p = {},
		h = !0,
		g = t.documentElement,
		v = "modernizr",
		y = t.createElement(v),
		b = y.style,
		E = t.createElement("input"),
		x = ":)",
		w = {}.toString,
		S = " -webkit- -moz- -o- -ms- ".split(" "),
		C = "Webkit Moz O ms",
		k = C.split(" "),
		T = C.toLowerCase().split(" "),
		N = {
			svg: "http://www.w3.org/2000/svg"
		},
		M = {},
		P = {},
		j = {},
		$ = [],
		D = $.slice,
		F = function(e, n, r, o) {
			var a, i, c, s, u = t.createElement("div"),
				l = t.body,
				d = l || t.createElement("body");
			if (parseInt(r, 10))
				for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
			return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i
		},
		z = function(t) {
			var n = e.matchMedia || e.msMatchMedia;
			if (n) return n(t) && n(t).matches || !1;
			var r;
			return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
				r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
			}), r
		},
		A = function() {
			function e(e, o) {
				o = o || t.createElement(r[e] || "div"), e = "on" + e;
				var i = e in o;
				return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i
			}
			var r = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return e
		}(),
		L = {}.hasOwnProperty;
	f = a(L, "undefined") || a(L.call, "undefined") ? function(e, t) {
		return t in e && a(e.constructor.prototype[t], "undefined")
	} : function(e, t) {
		return L.call(e, t)
	}, Function.prototype.bind || (Function.prototype.bind = function(e) {
		var t = this;
		if ("function" != typeof t) throw new TypeError;
		var n = D.call(arguments, 1),
			r = function() {
				if (this instanceof r) {
					var o = function() {};
					o.prototype = t.prototype;
					var a = new o,
						i = t.apply(a, n.concat(D.call(arguments)));
					return Object(i) === i ? i : a
				}
				return t.apply(e, n.concat(D.call(arguments)))
			};
		return r
	}), M.flexbox = function() {
		return u("flexWrap")
	}, M.flexboxlegacy = function() {
		return u("boxDirection")
	}, M.canvas = function() {
		var e = t.createElement("canvas");
		return !(!e.getContext || !e.getContext("2d"))
	}, M.canvastext = function() {
		return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
	}, M.webgl = function() {
		return !!e.WebGLRenderingContext
	}, M.touch = function() {
		var n;
		return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
			n = 9 === e.offsetTop
		}), n
	}, M.geolocation = function() {
		return "geolocation" in navigator
	}, M.postmessage = function() {
		return !!e.postMessage
	}, M.websqldatabase = function() {
		return !!e.openDatabase
	}, M.indexedDB = function() {
		return !!u("indexedDB", e)
	}, M.hashchange = function() {
		return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
	}, M.history = function() {
		return !(!e.history || !history.pushState)
	}, M.draganddrop = function() {
		var e = t.createElement("div");
		return "draggable" in e || "ondragstart" in e && "ondrop" in e
	}, M.websockets = function() {
		return "WebSocket" in e || "MozWebSocket" in e
	}, M.rgba = function() {
		return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
	}, M.hsla = function() {
		return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
	}, M.multiplebgs = function() {
		return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
	}, M.backgroundsize = function() {
		return u("backgroundSize")
	}, M.borderimage = function() {
		return u("borderImage")
	}, M.borderradius = function() {
		return u("borderRadius")
	}, M.boxshadow = function() {
		return u("boxShadow")
	}, M.textshadow = function() {
		return "" === t.createElement("div").style.textShadow
	}, M.opacity = function() {
		return o("opacity:.55"), /^0.55$/.test(b.opacity)
	}, M.cssanimations = function() {
		return u("animationName")
	}, M.csscolumns = function() {
		return u("columnCount")
	}, M.cssgradients = function() {
		var e = "background-image:",
			t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			n = "linear-gradient(left top,#9f9, white);";
		return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient")
	}, M.cssreflections = function() {
		return u("boxReflect")
	}, M.csstransforms = function() {
		return !!u("transform")
	}, M.csstransforms3d = function() {
		var e = !!u("perspective");
		return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
			e = 9 === t.offsetLeft && 3 === t.offsetHeight
		}), e
	}, M.csstransitions = function() {
		return u("transition")
	}, M.fontface = function() {
		var e;
		return F('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
			var o = t.getElementById("smodernizr"),
				a = o.sheet || o.styleSheet,
				i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
			e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
		}), e
	}, M.generatedcontent = function() {
		var e;
		return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
			e = t.offsetHeight >= 3
		}), e
	}, M.video = function() {
		var e = t.createElement("video"),
			n = !1;
		try {
			(n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
		} catch (r) {}
		return n
	}, M.audio = function() {
		var e = t.createElement("audio"),
			n = !1;
		try {
			(n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
		} catch (r) {}
		return n
	}, M.localstorage = function() {
		try {
			return localStorage.setItem(v, v), localStorage.removeItem(v), !0
		} catch (e) {
			return !1
		}
	}, M.sessionstorage = function() {
		try {
			return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
		} catch (e) {
			return !1
		}
	}, M.webworkers = function() {
		return !!e.Worker
	}, M.applicationcache = function() {
		return !!e.applicationCache
	}, M.svg = function() {
		return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
	}, M.inlinesvg = function() {
		var e = t.createElement("div");
		return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
	}, M.smil = function() {
		return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
	}, M.svgclippaths = function() {
		return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
	};
	for (var H in M) f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));
	return p.input || l(), p.addTest = function(e, t) {
			if ("object" == typeof e)
				for (var r in e) f(e, r) && p.addTest(r, e[r]);
			else {
				if (e = e.toLowerCase(), p[e] !== n) return p;
				t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
			}
			return p
		}, r(""), y = E = null,
		function(e, t) {
			function n(e, t) {
				var n = e.createElement("p"),
					r = e.getElementsByTagName("head")[0] || e.documentElement;
				return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
			}

			function r() {
				var e = y.elements;
				return "string" == typeof e ? e.split(" ") : e
			}

			function o(e) {
				var t = v[e[h]];
				return t || (t = {}, g++, e[h] = g, v[g] = t), t
			}

			function a(e, n, r) {
				if (n || (n = t), l) return n.createElement(e);
				r || (r = o(n));
				var a;
				return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
			}

			function i(e, n) {
				if (e || (e = t), l) return e.createDocumentFragment();
				n = n || o(e);
				for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++) a.createElement(c[i]);
				return a
			}

			function c(e, t) {
				t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
					return y.shivMethods ? a(n, e, t) : t.createElem(n)
				}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
					return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
				}) + ");return n}")(y, t.frag)
			}

			function s(e) {
				e || (e = t);
				var r = o(e);
				return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e
			}
			var u, l, d = "3.7.0",
				f = e.html5 || {},
				m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
				p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
				h = "_html5shiv",
				g = 0,
				v = {};
			! function() {
				try {
					var e = t.createElement("a");
					e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function() {
						t.createElement("a");
						var e = t.createDocumentFragment();
						return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
					}()
				} catch (n) {
					u = !0, l = !0
				}
			}();
			var y = {
				elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
				version: d,
				shivCSS: f.shivCSS !== !1,
				supportsUnknownElements: l,
				shivMethods: f.shivMethods !== !1,
				type: "default",
				shivDocument: s,
				createElement: a,
				createDocumentFragment: i
			};
			e.html5 = y, s(t)
		}(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function(e) {
			return c([e])
		}, p.testAllProps = u, p.testStyles = F, p.prefixed = function(e, t, n) {
			return t ? u(e, t, n) : u(e, "pfx")
		}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p
}(this, this.document);
/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q, p, r) {
	'use strict';
	p.module("ngAria", ["ng"]).provider("$aria", function() {
		function a(a, f, k) {
			return function(l, d, e) {
				var b = e.$normalize(f);
				c[b] && !e[b] && l.$watch(e[a], function(b) {
					k && (b = !b);
					d.attr(f, b)
				})
			}
		}
		var c = {
			ariaHidden: !0,
			ariaChecked: !0,
			ariaDisabled: !0,
			ariaRequired: !0,
			ariaInvalid: !0,
			ariaMultiline: !0,
			ariaValue: !0,
			tabindex: !0,
			bindKeypress: !0
		};
		this.config = function(a) {
			c = p.extend(c, a)
		};
		this.$get = function() {
			return {
				config: function(a) {
					return c[a]
				},
				$$watchExpr: a
			}
		}
	}).directive("ngShow", ["$aria", function(a) {
		return a.$$watchExpr("ngShow",
			"aria-hidden", !0)
	}]).directive("ngHide", ["$aria", function(a) {
		return a.$$watchExpr("ngHide", "aria-hidden", !1)
	}]).directive("ngModel", ["$aria", function(a) {
		function c(c, l, d) {
			return a.config(l) && !d.attr(c)
		}

		function h(a, c) {
			return !c.attr("role") && c.attr("type") === a && "INPUT" !== c[0].nodeName
		}

		function f(a, c) {
			var d = a.type,
				e = a.role;
			return "checkbox" === (d || e) || "menuitemcheckbox" === e ? "checkbox" : "radio" === (d || e) || "menuitemradio" === e ? "radio" : "range" === d || "progressbar" === e || "slider" === e ? "range" : "textbox" === (d || e) ||
				"TEXTAREA" === c[0].nodeName ? "multiline" : ""
		}
		return {
			restrict: "A",
			require: "?ngModel",
			priority: 200,
			compile: function(k, l) {
				var d = f(l, k);
				return {
					pre: function(a, b, c, g) {
						"checkbox" === d && "checkbox" !== c.type && (g.$isEmpty = function(b) {
							return !1 === b
						})
					},
					post: function(e, b, m, g) {
						function f() {
							return g.$modelValue
						}

						function l() {
							return n ? (n = !1, function(a) {
								a = m.value == g.$viewValue;
								b.attr("aria-checked", a);
								b.attr("tabindex", 0 - !a)
							}) : function(a) {
								b.attr("aria-checked", m.value == g.$viewValue)
							}
						}

						function k() {
							b.attr("aria-checked", !g.$isEmpty(g.$viewValue))
						}
						var n = c("tabindex", "tabindex", b);
						switch (d) {
							case "radio":
							case "checkbox":
								h(d, b) && b.attr("role", d);
								c("aria-checked", "ariaChecked", b) && e.$watch(f, "radio" === d ? l() : k);
								break;
							case "range":
								h(d, b) && b.attr("role", "slider");
								a.config("ariaValue") && (m.min && !b.attr("aria-valuemin") && b.attr("aria-valuemin", m.min), m.max && !b.attr("aria-valuemax") && b.attr("aria-valuemax", m.max), b.attr("aria-valuenow") || e.$watch(f, function(a) {
									b.attr("aria-valuenow", a)
								}));
								break;
							case "multiline":
								c("aria-multiline", "ariaMultiline", b) &&
									b.attr("aria-multiline", !0)
						}
						n && b.attr("tabindex", 0);
						g.$validators.required && c("aria-required", "ariaRequired", b) && e.$watch(function() {
							return g.$error.required
						}, function(a) {
							b.attr("aria-required", !!a)
						});
						c("aria-invalid", "ariaInvalid", b) && e.$watch(function() {
							return g.$invalid
						}, function(a) {
							b.attr("aria-invalid", !!a)
						})
					}
				}
			}
		}
	}]).directive("ngDisabled", ["$aria", function(a) {
		return a.$$watchExpr("ngDisabled", "aria-disabled")
	}]).directive("ngMessages", function() {
		return {
			restrict: "A",
			require: "?ngMessages",
			link: function(a,
				c, h, f) {
				c.attr("aria-live") || c.attr("aria-live", "assertive")
			}
		}
	}).directive("ngClick", ["$aria", "$parse", function(a, c) {
		return {
			restrict: "A",
			compile: function(h, f) {
				var k = c(f.ngClick, null, !0);
				return function(c, d, e) {
					function b(a, b) {
						if (-1 !== b.indexOf(a[0].nodeName)) return !0
					}
					var f = ["BUTTON", "A", "INPUT", "TEXTAREA"];
					d.attr("role") || b(d, f) || d.attr("role", "button");
					a.config("tabindex") && !d.attr("tabindex") && d.attr("tabindex", 0);
					if (a.config("bindKeypress") && !e.ngKeypress && !b(d, f)) d.on("keypress", function(a) {
						function b() {
							k(c, {
								$event: a
							})
						}
						32 !== a.keyCode && 13 !== a.keyCode || c.$apply(b)
					})
				}
			}
		}
	}]).directive("ngDblclick", ["$aria", function(a) {
		return function(c, h, f) {
			a.config("tabindex") && !h.attr("tabindex") && h.attr("tabindex", 0)
		}
	}])
})(window, window.angular);
//# sourceMappingURL=angular-aria.min.js.map

! function(e) {
	e.fn.hoverIntent = function(t, n, o) {
		var r = {
			interval: 100,
			sensitivity: 6,
			timeout: 0
		};
		r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
			over: t,
			out: n,
			selector: o
		}) : e.extend(r, {
			over: t,
			out: t,
			selector: n
		});
		var v, i, u, s, h = function(e) {
				v = e.pageX, i = e.pageY
			},
			I = function(t, n) {
				return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((u - v) * (u - v) + (s - i) * (s - i)) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = !0, r.over.apply(n, [t])) : (u = v, s = i, n.hoverIntent_t = setTimeout(function() {
					I(t, n)
				}, r.interval), void 0)
			},
			a = function(e, t) {
				return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, r.out.apply(t, [e])
			},
			c = function(t) {
				var n = e.extend({}, t),
					o = this;
				o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === t.type ? (u = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function() {
					I(n, o)
				}, r.interval))) : (e(o).off("mousemove.hoverIntent", h), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
					a(n, o)
				}, r.timeout)))
			};
		return this.on({
			"mouseenter.hoverIntent": c,
			"mouseleave.hoverIntent": c
		}, r.selector)
	}
}(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
	},
	easeInQuad: function(x, t, b, c, d) {
		return c * (t /= d) * t + b
	},
	easeOutQuad: function(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b
	},
	easeInOutQuad: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b
	},
	easeInCubic: function(x, t, b, c, d) {
		return c * (t /= d) * t * t + b
	},
	easeOutCubic: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b
	},
	easeInOutCubic: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b
	},
	easeInQuart: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b
	},
	easeOutQuart: function(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b
	},
	easeInOutQuart: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b
	},
	easeInQuint: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b
	},
	easeOutQuint: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b
	},
	easeInOutQuint: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
	},
	easeInSine: function(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
	},
	easeOutSine: function(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b
	},
	easeInOutSine: function(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
	},
	easeInExpo: function(x, t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
	},
	easeOutExpo: function(x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
	},
	easeInOutExpo: function(x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
	},
	easeInCirc: function(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
	},
	easeOutCirc: function(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
	},
	easeInOutCirc: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
	},
	easeInElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p)) + b
	},
	easeOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b
	},
	easeInOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * .3 * 1.5;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) * .5 + c + b
	},
	easeInBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b
	},
	easeOutBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
	},
	easeInOutBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
	},
	easeInBounce: function(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
	},
	easeOutBounce: function(x, t, b, c, d) {
		if ((t /= d) < 1 / 2.75) {
			return c * 7.5625 * t * t + b
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b
		} else {
			return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
		}
	},
	easeInOutBounce: function(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
	}
});
! function(a, b, c, d) {
	"use strict";

	function e(a) {
		return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
	}
	var f = function(b) {
		for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
	};
	f(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
		"undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
	});
	var g = function(b, d) {
			if ("string" == typeof b) {
				if (d) {
					var e;
					if (d.jquery) {
						if (e = d[0], !e) return d
					} else e = d;
					return a(e.querySelectorAll(b))
				}
				return a(c.querySelectorAll(b))
			}
			return a(b, d)
		},
		h = function(a) {
			var b = [];
			return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
		},
		i = function(a) {
			for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
			return d.reverse().join("-")
		},
		j = function(b, c) {
			var d = this,
				e = function() {
					var e = g(this),
						f = !e.data(d.attr_name(!0) + "-init");
					e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), f && d.events(this)
				};
			return g(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : g("[" + this.attr_name() + "]", this.scope).each(e), "string" == typeof b ? this[b].call(this, c) : void 0
		},
		k = function(a, b) {
			function c() {
				b(a[0])
			}

			function d() {
				if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
					var a = this.attr("src"),
						b = a.match(/\?/) ? "&" : "?";
					b += "random=" + (new Date).getTime(), this.attr("src", a + b)
				}
			}
			return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
		}; /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
	b.matchMedia || (b.matchMedia = function() {
			var a = b.styleMedia || b.media;
			if (!a) {
				var d = c.createElement("style"),
					e = c.getElementsByTagName("script")[0],
					f = null;
				d.type = "text/css", d.id = "matchmediajs-test", e.parentNode.insertBefore(d, e), f = "getComputedStyle" in b && b.getComputedStyle(d, null) || d.currentStyle, a = {
					matchMedium: function(a) {
						var b = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
						return d.styleSheet ? d.styleSheet.cssText = b : d.textContent = b, "1px" === f.width
					}
				}
			}
			return function(b) {
				return {
					matches: a.matchMedium(b || "all"),
					media: b || "all"
				}
			}
		}()),
		function(a) {
			function c() {
				d && (g(c), i && a.fx.tick())
			}
			for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
			g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function(b) {
				b() && a.timers.push(b) && !d && (d = !0, c())
			}, a.fx.stop = function() {
				d = !1
			})) : (b.requestAnimationFrame = function(a) {
				var c = (new Date).getTime(),
					d = Math.max(0, 16 - (c - e)),
					f = b.setTimeout(function() {
						a(c + d)
					}, d);
				return e = c + d, f
			}, b.cancelAnimationFrame = function(a) {
				clearTimeout(a)
			})
		}(a), b.Foundation = {
			name: "Foundation",
			version: "5.5.2",
			media_queries: {
				small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				"small-only": g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				"medium-only": g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				"large-only": g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				"xlarge-only": g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
				xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
			},
			stylesheet: a("<style></style>").appendTo("head")[0].sheet,
			global: {
				namespace: d
			},
			init: function(a, c, d, e, f) {
				var h = [a, d, e, f],
					i = [];
				if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h));
				else
					for (var j in this.libs) i.push(this.init_lib(j, c));
				return g(b).load(function() {
					g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
				}), a
			},
			init_lib: function(b, c) {
				return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
			},
			patch: function(a) {
				a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
			},
			inherit: function(a, b) {
				for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
			},
			set_namespace: function() {
				var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
				this.global.namespace = b === d || /false/i.test(b) ? "" : b
			},
			libs: {},
			utils: {
				S: g,
				throttle: function(a, b) {
					var c = null;
					return function() {
						var d = this,
							e = arguments;
						null == c && (c = setTimeout(function() {
							a.apply(d, e), c = null
						}, b))
					}
				},
				debounce: function(a, b, c) {
					var d, e;
					return function() {
						var f = this,
							g = arguments,
							h = function() {
								d = null, c || (e = a.apply(f, g))
							},
							i = c && !d;
						return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
					}
				},
				data_options: function(b, c) {
					function d(a) {
						return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
					}

					function e(b) {
						return "string" == typeof b ? a.trim(b) : b
					}
					c = c || "options";
					var f, g, h, i = {},
						j = function(a) {
							var b = Foundation.global.namespace;
							return a.data(b.length > 0 ? b + "-" + c : c)
						},
						k = j(b);
					if ("object" == typeof k) return k;
					for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (-1 === g[1].indexOf(".") ? g[1] = parseInt(g[1], 10) : g[1] = parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
					return i
				},
				register_media: function(b, c) {
					Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
				},
				add_custom_rule: function(a, b) {
					if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
					else {
						var c = Foundation.media_queries[b];
						c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }", Foundation.stylesheet.cssRules.length)
					}
				},
				image_loaded: function(a, b) {
					function c(a) {
						for (var b = a.length, c = b - 1; c >= 0; c--)
							if (a.attr("height") === d) return !1;
						return !0
					}
					var e = this,
						f = a.length;
					(0 === f || c(a)) && b(a), a.each(function() {
						k(e.S(this), function() {
							f -= 1, 0 === f && b(a)
						})
					})
				},
				random_str: function() {
					return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
				},
				match: function(a) {
					return b.matchMedia(a).matches
				},
				is_small_up: function() {
					return this.match(Foundation.media_queries.small)
				},
				is_medium_up: function() {
					return this.match(Foundation.media_queries.medium)
				},
				is_large_up: function() {
					return this.match(Foundation.media_queries.large)
				},
				is_xlarge_up: function() {
					return this.match(Foundation.media_queries.xlarge)
				},
				is_xxlarge_up: function() {
					return this.match(Foundation.media_queries.xxlarge)
				},
				is_small_only: function() {
					return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
				},
				is_medium_only: function() {
					return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
				},
				is_large_only: function() {
					return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
				},
				is_xlarge_only: function() {
					return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
				},
				is_xxlarge_only: function() {
					return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
				}
			}
		}, a.fn.foundation = function() {
			var a = Array.prototype.slice.call(arguments, 0);
			return this.each(function() {
				return Foundation.init.apply(Foundation, [this].concat(a)), this
			})
		}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.abide = {
		name: "abide",
		version: "5.5.2",
		settings: {
			live_validate: !0,
			validate_on_blur: !0,
			focus_on_invalid: !0,
			error_labels: !0,
			error_class: "error",
			timeout: 1e3,
			patterns: {
				alpha: /^[a-zA-Z]+$/,
				alpha_numeric: /^[a-zA-Z0-9]+$/,
				integer: /^[-+]?\d+$/,
				number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
				card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
				cvv: /^([0-9]){3,4}$/,
				email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
				url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
				domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
				datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
				date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
				time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
				dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
				month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
				day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
				color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
			},
			validators: {
				equalTo: function(a, b, d) {
					var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
						f = a.value,
						g = e === f;
					return g
				}
			}
		},
		timer: null,
		init: function(a, b, c) {
			this.bindings(b, c)
		},
		events: function(b) {
			function c(a, b) {
				clearTimeout(d.timer), d.timer = setTimeout(function() {
					d.validate([a], b)
				}.bind(a), f.timeout)
			}
			var d = this,
				e = d.S(b).attr("novalidate", "novalidate"),
				f = e.data(this.attr_name(!0) + "-init") || {};
			this.invalid_attr = this.add_namespace("data-invalid"), e.off(".abide").on("submit.fndtn.abide", function(a) {
				var b = /ajax/i.test(d.S(this).attr(d.attr_name()));
				return d.validate(d.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), a, b)
			}).on("validate.fndtn.abide", function(a) {
				"manual" === f.validate_on && d.validate([a.target], a)
			}).on("reset", function(b) {
				return d.reset(a(this), b)
			}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
				f.validate_on_blur && f.validate_on_blur === !0 && c(this, a), "change" === f.validate_on && c(this, a)
			}).on("keydown.fndtn.abide", function(a) {
				f.live_validate && f.live_validate === !0 && 9 != a.which && c(this, a), "tab" === f.validate_on && 9 === a.which ? c(this, a) : "change" === f.validate_on && c(this, a)
			}).on("focus", function(b) {
				navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && a("html, body").animate({
					scrollTop: a(b.target).offset().top
				}, 100)
			})
		},
		reset: function(b, c) {
			var d = this;
			b.removeAttr(d.invalid_attr), a("[" + d.invalid_attr + "]", b).removeAttr(d.invalid_attr), a("." + d.settings.error_class, b).not("small").removeClass(d.settings.error_class), a(":input", b).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(d.invalid_attr)
		},
		validate: function(a, b, c) {
			for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++)
				if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), f.trigger("invalid.fndtn.abide"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), !1;
			return (g || c) && f.trigger("valid.fndtn.abide"), f.removeAttr(this.invalid_attr), c ? !1 : !0
		},
		parse_patterns: function(a) {
			for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
			return this.check_validation_and_apply_styles(c)
		},
		pattern: function(a) {
			var b = a.getAttribute("type"),
				c = "string" == typeof a.getAttribute("required"),
				d = a.getAttribute("pattern") || "";
			return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp(d), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
		},
		check_validation_and_apply_styles: function(b) {
			var c = b.length,
				d = [],
				e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
			for (e.data(this.attr_name(!0) + "-init") || {}; c--;) {
				var f, g, h = b[c][0],
					i = b[c][2],
					j = h.value.trim(),
					k = this.S(h).parent(),
					l = h.getAttribute(this.add_namespace("data-abide-validator")),
					m = "radio" === h.type,
					n = "checkbox" === h.type,
					o = this.S('label[for="' + h.getAttribute("id") + '"]'),
					p = i ? h.value.length > 0 : !0,
					q = [];
				if (h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, m && i) q.push(this.valid_radio(h, i));
				else if (n && i) q.push(this.valid_checkbox(h, i));
				else if (l) {
					for (var r = l.split(" "), s = !0, t = !0, u = 0; u < r.length; u++) g = this.settings.validators[r[u]].apply(this, [h, i, f]), q.push(g), t = g && s, s = g;
					t ? (this.S(h).removeAttr(this.invalid_attr), f.removeClass("error"), o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), a(h).triggerHandler("valid")) : (this.S(h).attr(this.invalid_attr, ""), f.addClass("error"), o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), a(h).triggerHandler("invalid"))
				} else if (q.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), q = [q.every(function(a) {
						return a
					})], q[0]) this.S(h).removeAttr(this.invalid_attr), h.setAttribute("aria-invalid", "false"), h.removeAttribute("aria-describedby"), f.removeClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), a(h).triggerHandler("valid");
				else {
					this.S(h).attr(this.invalid_attr, ""), h.setAttribute("aria-invalid", "true");
					var v = f.find("small." + this.settings.error_class, "span." + this.settings.error_class),
						w = v.length > 0 ? v[0].id : "";
					w.length > 0 && h.setAttribute("aria-describedby", w), f.addClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), a(h).triggerHandler("invalid")
				}
				d = d.concat(q)
			}
			return d
		},
		valid_checkbox: function(b, c) {
			var b = this.S(b),
				d = b.is(":checked") || !c || b.get(0).getAttribute("disabled");
			return d ? (b.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), a(b).triggerHandler("valid")) : (b.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), a(b).triggerHandler("invalid")), d
		},
		valid_radio: function(b, c) {
			for (var d = b.getAttribute("name"), e = this.S(b).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + d + "']"), f = e.length, g = !1, h = !1, i = 0; f > i; i++) e[i].getAttribute("disabled") ? (h = !0, g = !0) : e[i].checked ? g = !0 : h && (g = !1);
			for (var i = 0; f > i; i++) g ? (this.S(e[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), a(e[i]).triggerHandler("valid")) : (this.S(e[i]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), a(e[i]).triggerHandler("invalid"));
			return g
		},
		valid_equal: function(a, b, d) {
			var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
				f = a.value,
				g = e === f;
			return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), d.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), g
		},
		valid_oneof: function(a, b, c, d) {
			var a = this.S(a),
				e = this.S("[" + this.add_namespace("data-oneof") + "]"),
				f = e.filter(":checked").length > 0;
			if (f ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !d) {
				var g = this;
				e.each(function() {
					g.valid_oneof.call(g, this, null, null, !0)
				})
			}
			return f
		},
		reflow: function(a, b) {
			var c = this,
				d = c.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
			c.S(d).each(function(a, b) {
				c.events(b)
			})
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.accordion = {
		name: "accordion",
		version: "5.5.2",
		settings: {
			content_class: "content",
			active_class: "active",
			multi_expand: !1,
			toggleable: !0,
			callback: function() {}
		},
		init: function(a, b, c) {
			this.bindings(b, c)
		},
		events: function(b) {
			var c = this,
				d = this.S;
			c.create(this.S(b)), d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function(b) {
				var e = d(this).closest("[" + c.attr_name() + "]"),
					f = c.attr_name() + "=" + e.attr(c.attr_name()),
					g = e.data(c.attr_name(!0) + "-init") || c.settings,
					h = d("#" + this.href.split("#")[1]),
					i = a("> dd, > li", e),
					j = i.children("." + g.content_class),
					k = j.filter("." + g.active_class);
				return b.preventDefault(), e.attr(c.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class + ", [" + f + "] li > ." + g.content_class), i = i.add("[" + f + "] dd, [" + f + "] li")), g.toggleable && h.is(k) ? (h.parent("dd, li").toggleClass(g.active_class, !1), h.toggleClass(g.active_class, !1), d(this).attr("aria-expanded", function(a, b) {
					return "true" === b ? "false" : "true"
				}), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class), i.removeClass(g.active_class), i.children("a").attr("aria-expanded", "false")), h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [e]), e.triggerHandler("toggled", [h]), void d(this).attr("aria-expanded", "true"))
			})
		},
		create: function(b) {
			var c = this,
				d = b,
				e = a("> .accordion-navigation", d),
				f = d.data(c.attr_name(!0) + "-init") || c.settings;
			e.children("a").attr("aria-expanded", "false"), e.has("." + f.content_class + "." + f.active_class).children("a").attr("aria-expanded", "true"), f.multi_expand && b.attr("aria-multiselectable", "true")
		},
		off: function() {},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.alert = {
		name: "alert",
		version: "5.5.2",
		settings: {
			callback: function() {}
		},
		init: function(a, b, c) {
			this.bindings(b, c)
		},
		events: function() {
			var b = this,
				c = this.S;
			a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
				var d = c(this).closest("[" + b.attr_name() + "]"),
					e = d.data(b.attr_name(!0) + "-init") || b.settings;
				a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function(a) {
					c(this).trigger("close.fndtn.alert").remove(), e.callback()
				})) : d.fadeOut(300, function() {
					c(this).trigger("close.fndtn.alert").remove(), e.callback()
				})
			})
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.clearing = {
		name: "clearing",
		version: "5.5.2",
		settings: {
			templates: {
				viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
			},
			close_selectors: ".clearing-close, div.clearing-blackout",
			open_selectors: "",
			skip_selector: "",
			touch_label: "",
			init: !1,
			locked: !1
		},
		init: function(a, b, c) {
			var d = this;
			Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
				d.assemble(d.S("li", this))
			})
		},
		events: function(d) {
			var e = this,
				f = e.S,
				g = a(".scroll-container");
			g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
				var b = b || f(this),
					c = c || b,
					d = b.next("li"),
					g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"),
					h = f(a.target);
				a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, h = f("img", c)), e.open(h, b, c), e.update_paddles(c)
			}).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
				e.nav(a, "next")
			}).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
				e.nav(a, "prev")
			}).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
				Foundation.libs.clearing.close(a, this)
			}), a(c).on("keydown.fndtn.clearing", function(a) {
				e.keydown(a)
			}), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
				e.resize()
			}), this.swipe_events(d)
		},
		swipe_events: function(a) {
			var b = this,
				c = b.S;
			c(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
				a.touches || (a = a.originalEvent);
				var b = {
					start_page_x: a.touches[0].pageX,
					start_page_y: a.touches[0].pageY,
					start_time: (new Date).getTime(),
					delta_x: 0,
					is_scrolling: d
				};
				c(this).data("swipe-transition", b), a.stopPropagation()
			}).on("touchmove.fndtn.clearing", ".visible-img", function(a) {
				if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
					var d = c(this).data("swipe-transition");
					if ("undefined" == typeof d && (d = {}), d.delta_x = a.touches[0].pageX - d.start_page_x, Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(a.touches[0].pageY - d.start_page_y))), !d.is_scrolling && !d.active) {
						a.preventDefault();
						var e = d.delta_x < 0 ? "next" : "prev";
						d.active = !0, b.nav(a, e)
					}
				}
			}).on("touchend.fndtn.clearing", ".visible-img", function(a) {
				c(this).data("swipe-transition", {}), a.stopPropagation()
			})
		},
		assemble: function(b) {
			var c = b.parent();
			if (!c.parent().hasClass("carousel")) {
				c.after('<div id="foundationClearingHolder"></div>');
				var d = c.detach(),
					e = "";
				if (null != d[0]) {
					e = d[0].outerHTML;
					var f = this.S("#foundationClearingHolder"),
						g = c.data(this.attr_name(!0) + "-init"),
						h = {
							grid: '<div class="carousel">' + e + "</div>",
							viewing: g.templates.viewing
						},
						i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>",
						j = this.settings.touch_label;
					Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove()
				}
			}
		},
		open: function(b, d, e) {
			function f() {
				setTimeout(function() {
					this.image_loaded(m, function() {
						1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this)
					}.bind(this))
				}.bind(this), 100)
			}

			function g(b) {
				var c = a(b);
				c.css("visibility", "visible"), c.trigger("imageVisible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
					e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible")
				}), l.trigger("opened.fndtn.clearing")
			}
			var h = this,
				i = a(c.body),
				j = e.closest(".clearing-assembled"),
				k = h.S("div", j).first(),
				l = h.S(".visible-img", k),
				m = h.S("img", l).not(b),
				n = h.S(".clearing-touch-label", k),
				o = !1,
				p = {};
			a("body").on("touchmove", function(a) {
				a.preventDefault()
			}), m.error(function() {
				o = !0
			}), this.locked() || (l.trigger("open.fndtn.clearing"), p = this.load(b), p.interchange ? m.attr("data-interchange", p.interchange).foundation("interchange", "reflow") : m.attr("src", p.src).attr("data-interchange", ""), m.css("visibility", "hidden"), f.call(this))
		},
		close: function(b, d) {
			b.preventDefault();
			var e, f, g = function(a) {
					return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
				}(a(d)),
				h = a(c.body);
			return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), a("body").off("touchmove"), !1
		},
		is_open: function(a) {
			return a.parent().prop("style").length > 0
		},
		keydown: function(b) {
			var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
				d = this.rtl ? 37 : 39,
				e = this.rtl ? 39 : 37,
				f = 27;
			b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click.fndtn.clearing")
		},
		nav: function(b, c) {
			var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
			b.preventDefault(), this.go(d, c)
		},
		resize: function() {
			var b = a("img", ".clearing-blackout .visible-img"),
				c = a(".clearing-touch-label", ".clearing-blackout");
			b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"))
		},
		fix_height: function(a) {
			var b = a.parent().children(),
				c = this;
			return b.each(function() {
				var a = c.S(this),
					b = a.find("img");
				a.height() > b.outerHeight() && a.addClass("fix-height")
			}).closest("ul").width(100 * b.length + "%"), this
		},
		update_paddles: function(a) {
			a = a.closest("li");
			var b = a.closest(".carousel").siblings(".visible-img");
			a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled")
		},
		center_and_label: function(a, b) {
			return b.css(!this.rtl && b.length > 0 ? {
				marginLeft: -(b.outerWidth() / 2),
				marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
			} : {
				marginRight: -(b.outerWidth() / 2),
				marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
				left: "auto",
				right: "50%"
			}), this
		},
		load: function(a) {
			var b, c, d;
			return "A" === a[0].nodeName ? (b = a.attr("href"), c = a.data("clearing-interchange")) : (d = a.closest("a"), b = d.attr("href"), c = d.data("clearing-interchange")), this.preload(a), {
				src: b ? b : a.attr("src"),
				interchange: b ? c : a.data("clearing-interchange")
			}
		},
		preload: function(a) {
			this.img(a.closest("li").next(), "next").img(a.closest("li").prev(), "prev")
		},
		img: function(b, c) {
			if (b.length) {
				var d, e, f, g = a(".clearing-preload-" + c),
					h = this.S("a", b);
				h.length ? (d = h.attr("href"), e = h.data("clearing-interchange")) : (f = this.S("img", b), d = f.attr("src"), e = f.data("clearing-interchange")), e ? g.attr("data-interchange", e) : (g.attr("src", d), g.attr("data-interchange", ""))
			}
			return this
		},
		caption: function(a, b) {
			var c = b.attr("data-caption");
			return c ? a.html(c).show() : a.text("").hide(), this
		},
		go: function(a, b) {
			var c = this.S(".visible", a),
				d = c[b]();
			this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), d.length && this.S("img", d).trigger("click.fndtn.clearing", [c, d]).trigger("change.fndtn.clearing")
		},
		shift: function(a, b, c) {
			var d, e = b.parent(),
				f = this.settings.prev_index || b.index(),
				g = this.direction(e, a, b),
				h = this.rtl ? "right" : "left",
				i = parseInt(e.css("left"), 10),
				j = b.outerWidth(),
				k = {};
			b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
		},
		direction: function(a, b, c) {
			var d, e = this.S("li", a),
				f = e.outerWidth() + e.outerWidth() / 4,
				g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
				h = e.index(c);
			return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = h, d
		},
		adjacent: function(a, b) {
			for (var c = b + 1; c >= b - 1; c--)
				if (c === a) return !0;
			return !1
		},
		lock: function() {
			this.settings.locked = !0
		},
		unlock: function() {
			this.settings.locked = !1
		},
		locked: function() {
			return this.settings.locked
		},
		off: function() {
			this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing")
		},
		reflow: function() {
			this.init()
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.dropdown = {
		name: "dropdown",
		version: "5.5.2",
		settings: {
			active_class: "open",
			disabled_class: "disabled",
			mega_class: "mega",
			align: "bottom",
			is_hover: !1,
			hover_timeout: 150,
			opened: function() {},
			closed: function() {}
		},
		init: function(b, c, d) {
			Foundation.inherit(this, "throttle"), a.extend(!0, this.settings, c, d), this.bindings(c, d)
		},
		events: function(d) {
			var e = this,
				f = e.S;
			f(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
				var c = f(this).data(e.attr_name(!0) + "-init") || e.settings;
				(!c.is_hover || Modernizr.touch) && (b.preventDefault(), f(this).parent("[data-reveal-id]").length && b.stopPropagation(), e.toggle(a(this)))
			}).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
				var b, c, d = f(this);
				clearTimeout(e.timeout), d.data(e.data_attr()) ? (b = f("#" + d.data(e.data_attr())), c = d) : (b = d, c = f("[" + e.attr_name() + '="' + b.attr("id") + '"]'));
				var g = c.data(e.attr_name(!0) + "-init") || e.settings;
				f(a.currentTarget).data(e.data_attr()) && g.is_hover && e.closeall.call(e), g.is_hover && e.open.apply(e, [b, c])
			}).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
				var b, c = f(this);
				if (c.data(e.data_attr())) b = c.data(e.data_attr(!0) + "-init") || e.settings;
				else var d = f("[" + e.attr_name() + '="' + f(this).attr("id") + '"]'),
					b = d.data(e.attr_name(!0) + "-init") || e.settings;
				e.timeout = setTimeout(function() {
					c.data(e.data_attr()) ? b.is_hover && e.close.call(e, f("#" + c.data(e.data_attr()))) : b.is_hover && e.close.call(e, c)
				}.bind(this), b.hover_timeout)
			}).on("click.fndtn.dropdown", function(b) {
				var d = f(b.target).closest("[" + e.attr_name() + "-content]"),
					g = d.find("a");
				return g.length > 0 && "false" !== d.attr("aria-autoclose") && e.close.call(e, f("[" + e.attr_name() + "-content]")), b.target !== c && !a.contains(c.documentElement, b.target) || f(b.target).closest("[" + e.attr_name() + "]").length > 0 ? void 0 : !f(b.target).data("revealId") && d.length > 0 && (f(b.target).is("[" + e.attr_name() + "-content]") || a.contains(d.first()[0], b.target)) ? void b.stopPropagation() : void e.close.call(e, f("[" + e.attr_name() + "-content]"))
			}).on("opened.fndtn.dropdown", "[" + e.attr_name() + "-content]", function() {
				e.settings.opened.call(this)
			}).on("closed.fndtn.dropdown", "[" + e.attr_name() + "-content]", function() {
				e.settings.closed.call(this)
			}), f(b).off(".dropdown").on("resize.fndtn.dropdown", e.throttle(function() {
				e.resize.call(e)
			}, 50)), this.resize()
		},
		close: function(b) {
			var c = this;
			b.each(function(d) {
				var e = a("[" + c.attr_name() + "=" + b[d].id + "]") || a("aria-controls=" + b[d].id + "]");
				e.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), c.S(this).trigger("closed.fndtn.dropdown", [b]))
			}), b.removeClass("f-open-" + this.attr_name(!0))
		},
		closeall: function() {
			var b = this;
			a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
				b.close.call(b, b.S(this))
			})
		},
		open: function(a, b) {
			this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), a.data("target", b.get(0)).trigger("opened.fndtn.dropdown", [a, b]), a.attr("aria-hidden", "false"), b.attr("aria-expanded", "true"), a.focus(), a.addClass("f-open-" + this.attr_name(!0))
		},
		data_attr: function() {
			return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
		},
		toggle: function(a) {
			if (!a.hasClass(this.settings.disabled_class)) {
				var b = this.S("#" + a.data(this.data_attr()));
				0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a))
			}
		},
		resize: function() {
			var b = this.S("[" + this.attr_name() + "-content].open"),
				c = a(b.data("target"));
			b.length && c.length && this.css(b, c)
		},
		css: function(a, b) {
			var c = Math.max((b.width() - a.width()) / 2, 8),
				d = b.data(this.attr_name(!0) + "-init") || this.settings,
				e = a.parent().css("overflow-y") || a.parent().css("overflow");
			if (this.clear_idx(), this.small()) {
				var f = this.dirs.bottom.call(a, b, d);
				a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
					position: "absolute",
					width: "95%",
					"max-width": "none",
					top: f.top
				}), a.css(Foundation.rtl ? "right" : "left", c)
			} else if ("visible" !== e) {
				var g = b[0].offsetTop + b[0].offsetHeight;
				a.attr("style", "").css({
					position: "absolute",
					top: g
				}), a.css(Foundation.rtl ? "right" : "left", c)
			} else this.style(a, b, d);
			return a
		},
		style: function(b, c, d) {
			var e = a.extend({
				position: "absolute"
			}, this.dirs[d.align].call(b, c, d));
			b.attr("style", "").css(e)
		},
		dirs: {
			_base: function(a) {
				var d = this.offsetParent(),
					e = d.offset(),
					f = a.offset();
				f.top -= e.top, f.left -= e.left, f.missRight = !1, f.missTop = !1, f.missLeft = !1, f.leftRightFlag = !1;
				var g;
				g = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : b.innerWidth;
				var h = (b.innerWidth - g) / 2,
					i = g;
				return this.hasClass("mega") || (a.offset().top <= this.outerHeight() && (f.missTop = !0, i = b.innerWidth - h, f.leftRightFlag = !0), a.offset().left + this.outerWidth() > a.offset().left + h && a.offset().left - h > this.outerWidth() && (f.missRight = !0, f.missLeft = !1), a.offset().left - this.outerWidth() <= 0 && (f.missLeft = !0, f.missRight = !1)), f
			},
			top: function(a, b) {
				var c = Foundation.libs.dropdown,
					d = c.dirs._base.call(this, a);
				return this.addClass("drop-top"), 1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), Foundation.rtl ? {
					left: d.left - this.outerWidth() + a.outerWidth(),
					top: d.top - this.outerHeight()
				} : {
					left: d.left,
					top: d.top - this.outerHeight()
				}
			},
			bottom: function(a, b) {
				var c = Foundation.libs.dropdown,
					d = c.dirs._base.call(this, a);
				return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d),
					c.rtl ? {
						left: d.left - this.outerWidth() + a.outerWidth(),
						top: d.top + a.outerHeight()
					} : {
						left: d.left,
						top: d.top + a.outerHeight()
					}
			},
			left: function(a, b) {
				var c = Foundation.libs.dropdown.dirs._base.call(this, a);
				return this.addClass("drop-left"), 1 == c.missLeft && (c.left = c.left + this.outerWidth(), c.top = c.top + a.outerHeight(), this.removeClass("drop-left")), {
					left: c.left - this.outerWidth(),
					top: c.top
				}
			},
			right: function(a, b) {
				var c = Foundation.libs.dropdown.dirs._base.call(this, a);
				this.addClass("drop-right"), 1 == c.missRight ? (c.left = c.left - this.outerWidth(), c.top = c.top + a.outerHeight(), this.removeClass("drop-right")) : c.triggeredRight = !0;
				var d = Foundation.libs.dropdown;
				return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c), {
					left: c.left + a.outerWidth(),
					top: c.top
				}
			}
		},
		adjust_pip: function(a, b, c, d) {
			var e = Foundation.stylesheet,
				f = 8;
			a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), this.rule_idx = e.cssRules.length;
			var g = ".f-dropdown.open:before",
				h = ".f-dropdown.open:after",
				i = "left: " + f + "px;",
				j = "left: " + (f - 1) + "px;";
			1 == d.missRight && (f = a.outerWidth() - 23, g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;"), 1 == d.triggeredRight && (g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left:-12px;", j = "left:-14px;"), e.insertRule ? (e.insertRule([g, "{", i, "}"].join(" "), this.rule_idx), e.insertRule([h, "{", j, "}"].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), e.addRule(h, j, this.rule_idx + 1))
		},
		clear_idx: function() {
			var a = Foundation.stylesheet;
			"undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), delete this.rule_idx)
		},
		small: function() {
			return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
		},
		off: function() {
			this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.equalizer = {
		name: "equalizer",
		version: "5.5.2",
		settings: {
			use_tallest: !0,
			before_height_change: a.noop,
			after_height_change: a.noop,
			equalize_on_stack: !1,
			act_on_hidden_el: !1
		},
		init: function(a, b, c) {
			Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow()
		},
		events: function() {
			this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function(a) {
				this.reflow()
			}.bind(this))
		},
		equalize: function(b) {
			var c, d, e = !1,
				f = b.data("equalizer"),
				g = b.data(this.attr_name(!0) + "-init") || this.settings;
			if (c = b.find(g.act_on_hidden_el ? f ? "[" + this.attr_name() + '-watch="' + f + '"]' : "[" + this.attr_name() + "-watch]" : f ? "[" + this.attr_name() + '-watch="' + f + '"]:visible' : "[" + this.attr_name() + "-watch]:visible"), 0 !== c.length && (g.before_height_change(), b.trigger("before-height-change.fndth.equalizer"), c.height("inherit"), g.equalize_on_stack !== !1 || (d = c.first().offset().top, c.each(function() {
					return a(this).offset().top !== d ? (e = !0, !1) : void 0
				}), !e))) {
				var h = c.map(function() {
					return a(this).outerHeight(!1)
				}).get();
				if (g.use_tallest) {
					var i = Math.max.apply(null, h);
					c.css("height", i)
				} else {
					var j = Math.min.apply(null, h);
					c.css("height", j)
				}
				g.after_height_change(), b.trigger("after-height-change.fndtn.equalizer")
			}
		},
		reflow: function() {
			var b = this;
			this.S("[" + this.attr_name() + "]", this.scope).each(function() {
				var c = a(this),
					d = c.data("equalizer-mq"),
					e = !0;
				d && (d = "is_" + d.replace(/-/g, "_"), Foundation.utils.hasOwnProperty(d) && (e = !1)), b.image_loaded(b.S("img", this), function() {
					if (e || Foundation.utils[d]()) b.equalize(c);
					else {
						var a = c.find("[" + b.attr_name() + "-watch]:visible");
						a.css("height", "auto")
					}
				})
			})
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.interchange = {
		name: "interchange",
		version: "5.5.2",
		cache: {},
		images_loaded: !1,
		nodes_loaded: !1,
		settings: {
			load_attr: "interchange",
			named_queries: {
				"default": "only screen",
				small: Foundation.media_queries.small,
				"small-only": Foundation.media_queries["small-only"],
				medium: Foundation.media_queries.medium,
				"medium-only": Foundation.media_queries["medium-only"],
				large: Foundation.media_queries.large,
				"large-only": Foundation.media_queries["large-only"],
				xlarge: Foundation.media_queries.xlarge,
				"xlarge-only": Foundation.media_queries["xlarge-only"],
				xxlarge: Foundation.media_queries.xxlarge,
				landscape: "only screen and (orientation: landscape)",
				portrait: "only screen and (orientation: portrait)",
				retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
			},
			directives: {
				replace: function(b, c, d) {
					if (null !== b && /IMG/.test(b[0].nodeName)) {
						var e = b[0].src;
						if (new RegExp(c, "i").test(e)) return;
						return b.attr("src", c), d(b[0].src)
					}
					var f = b.data(this.data_attr + "-last-path"),
						g = this;
					if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
						b.html(a), b.data(g.data_attr + "-last-path", c), d()
					})
				}
			}
		},
		init: function(b, c, d) {
			Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.reflow()
		},
		get_media_hash: function() {
			var a = "";
			for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
			return a
		},
		events: function() {
			var c, d = this;
			return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
				var a = d.get_media_hash();
				a !== c && d.resize(), c = a
			}, 50)), this
		},
		resize: function() {
			var b = this.cache;
			if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
			for (var c in b)
				if (b.hasOwnProperty(c)) {
					var d = this.results(c, b[c]);
					d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function(a) {
						if (arguments[0] instanceof Array) var b = arguments[0];
						else var b = Array.prototype.slice.call(arguments, 0);
						return function() {
							a.el.trigger(a.scenario[1], b)
						}
					}(d))
				}
		},
		results: function(a, b) {
			var c = b.length;
			if (c > 0)
				for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
					var e, f = b[c][2];
					if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), e.matches) return {
						el: d,
						scenario: b[c]
					}
				}
			return !1
		},
		load: function(a, b) {
			return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
		},
		update_images: function() {
			var a = this.S("img[" + this.data_attr + "]"),
				b = a.length,
				c = b,
				d = 0,
				e = this.data_attr;
			for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
				if (d++, a[c]) {
					var f = a[c].getAttribute(e) || "";
					f.length > 0 && this.cached_images.push(a[c])
				}
				d === b && (this.images_loaded = !0, this.enhance("images"))
			}
			return this
		},
		update_nodes: function() {
			var a = this.S("[" + this.data_attr + "]").not("img"),
				b = a.length,
				c = b,
				d = 0,
				e = this.data_attr;
			for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
				d++;
				var f = a[c].getAttribute(e) || "";
				f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
			}
			return this
		},
		enhance: function(c) {
			for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
			return a(b).trigger("resize.fndtn.interchange")
		},
		convert_directive: function(a) {
			var b = this.trim(a);
			return b.length > 0 ? b : "replace"
		},
		parse_scenario: function(a) {
			var b = a[0].match(/(.+),\s*(\w+)\s*$/),
				c = a[1].match(/(.*)\)/);
			if (b) var d = b[1],
				e = b[2];
			else var f = a[0].split(/,\s*$/),
				d = f[0],
				e = "";
			return [this.trim(d), this.convert_directive(e), this.trim(c[1])]
		},
		object: function(a) {
			var b = this.parse_data_attr(a),
				c = [],
				d = b.length;
			if (d > 0)
				for (; d--;) {
					var e = b[d].split(/,\s?\(/);
					if (e.length > 1) {
						var f = this.parse_scenario(e);
						c.push(f)
					}
				}
			return this.store(a, c)
		},
		store: function(a, b) {
			var c = this.random_str(),
				d = a.data(this.add_namespace("uuid", !0));
			return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
		},
		trim: function(b) {
			return "string" == typeof b ? a.trim(b) : b
		},
		set_data_attr: function(a) {
			return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
		},
		parse_data_attr: function(a) {
			for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
			return d
		},
		reflow: function() {
			this.load("images", !0), this.load("nodes", !0)
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.joyride = {
		name: "joyride",
		version: "5.5.2",
		defaults: {
			expose: !1,
			modal: !0,
			keyboard: !0,
			tip_location: "bottom",
			nub_position: "auto",
			scroll_speed: 1500,
			scroll_animation: "linear",
			timer: 0,
			start_timer_on_click: !0,
			start_offset: 0,
			next_button: !0,
			prev_button: !0,
			tip_animation: "fade",
			pause_after: [],
			exposed: [],
			tip_animation_fade_speed: 300,
			cookie_monster: !1,
			cookie_name: "joyride",
			cookie_domain: !1,
			cookie_expires: 365,
			tip_container: "body",
			abort_on_close: !0,
			tip_location_patterns: {
				top: ["bottom"],
				bottom: [],
				left: ["right", "top", "bottom"],
				right: ["left", "top", "bottom"]
			},
			post_ride_callback: function() {},
			post_step_callback: function() {},
			pre_step_callback: function() {},
			pre_ride_callback: function() {},
			post_expose_callback: function() {},
			template: {
				link: '<a href="#close" class="joyride-close-tip">&times;</a>',
				timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
				tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
				wrapper: '<div class="joyride-content-wrapper"></div>',
				button: '<a href="#" class="small button joyride-next-tip"></a>',
				prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
				modal: '<div class="joyride-modal-bg"></div>',
				expose: '<div class="joyride-expose-wrapper"></div>',
				expose_cover: '<div class="joyride-expose-cover"></div>'
			},
			expose_add_class: ""
		},
		init: function(b, c, d) {
			Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), this.bindings(c, d)
		},
		go_next: function() {
			this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
		},
		go_prev: function() {
			this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
		},
		events: function() {
			var c = this;
			a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
				a.preventDefault(), this.go_next()
			}.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
				a.preventDefault(), this.go_prev()
			}.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
				a.preventDefault(), this.end(this.settings.abort_on_close)
			}.bind(this)).on("keyup.fndtn.joyride", function(a) {
				if (this.settings.keyboard && this.settings.riding) switch (a.which) {
					case 39:
						a.preventDefault(), this.go_next();
						break;
					case 37:
						a.preventDefault(), this.go_prev();
						break;
					case 27:
						a.preventDefault(), this.end(this.settings.abort_on_close)
				}
			}.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
				if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip && c.settings.riding) {
					if (c.settings.exposed.length > 0) {
						var b = a(c.settings.exposed);
						b.each(function() {
							var b = a(this);
							c.un_expose(b), c.expose(b)
						})
					}
					c.is_phone() ? c.pos_phone() : c.pos_default(!1)
				}
			}, 100))
		},
		start: function() {
			var b = this,
				c = a("[" + this.attr_name() + "]", this.scope),
				d = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
				e = d.length;
			!c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
				var f = a(this);
				this.settings = a.extend({}, b.defaults, b.data_options(f));
				for (var g = e; g--;) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
				b.create({
					$li: f,
					index: c
				})
			}), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
		},
		resume: function() {
			this.set_li(), this.show()
		},
		tip_template: function(b) {
			var c, d;
			return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), a(".joyride-content-wrapper", c).append(d), c[0]
		},
		timer_instance: function(b) {
			var c;
			return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML
		},
		button_text: function(b) {
			return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", b
		},
		prev_button_text: function(b, c) {
			return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", b
		},
		create: function(b) {
			this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
			var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")),
				d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")),
				e = b.$li.attr("class"),
				f = a(this.tip_template({
					tip_class: e,
					index: b.index,
					button_text: c,
					prev_button_text: d,
					li: b.$li
				}));
			a(this.settings.tip_container).append(f)
		},
		show: function(b, c) {
			var e = null;
			if (this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after))
				if (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
					if (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
						var f = a(".joyride-modal-bg");
						/pop/i.test(this.settings.tipAnimation) ? f.hide() : f.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
					}
					this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), e = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
						e.animate({
							width: e.parent().width()
						}, this.settings.timer, "linear")
					}.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
						e.animate({
							width: e.parent().width()
						}, this.settings.timer, "linear")
					}.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
				} else this.settings.$li && this.settings.$target.length < 1 ? this.show(b, c) : this.end();
			else this.settings.paused = !0
		},
		is_phone: function() {
			return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
		},
		hide: function() {
			this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
				this.hide(), this.css("visibility", "visible")
			}, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
		},
		set_li: function(a, b) {
			a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (b ? this.settings.$li = this.settings.$li.prev() : this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
		},
		set_next_tip: function() {
			this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
		},
		set_target: function() {
			var b = this.settings.$li.attr(this.add_namespace("data-class")),
				d = this.settings.$li.attr(this.add_namespace("data-id")),
				e = function() {
					return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body")
				};
			this.settings.$target = e()
		},
		scroll_to: function() {
			var c, d;
			c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 0 != d && a("html, body").stop().animate({
				scrollTop: d
			}, this.settings.scroll_speed, "swing")
		},
		paused: function() {
			return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
		},
		restart: function() {
			this.hide(), this.settings.$li = d, this.show("init")
		},
		pos_default: function(a) {
			var b = this.settings.$next_tip.find(".joyride-nub"),
				c = Math.ceil(b.outerWidth() / 2),
				d = Math.ceil(b.outerHeight() / 2),
				e = a || !1;
			if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b);
			else {
				var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
					g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
				this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
					top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
					left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
				} : {
					top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
					left: this.settings.$target.offset().left + g
				}), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
					top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
					left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
				} : {
					top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
					left: this.settings.$target.offset().left + g
				}), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
					top: this.settings.$target.offset().top + f,
					left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
				}), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
					top: this.settings.$target.offset().top + f,
					left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
				}), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
			}
			e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
		},
		pos_phone: function(b) {
			var c = this.settings.$next_tip.outerHeight(),
				d = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
				e = a(".joyride-nub", this.settings.$next_tip),
				f = Math.ceil(e.outerHeight() / 2),
				g = b || !1;
			e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
				top: this.settings.$target.offset().top - c - f
			}), e.addClass("bottom")) : (this.settings.$next_tip.offset({
				top: this.settings.$target.offset().top + d + f
			}), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
		},
		pos_modal: function(a) {
			this.center(), a.hide(), this.show_modal()
		},
		show_modal: function() {
			if (!this.settings.$next_tip.data("closed")) {
				var b = a(".joyride-modal-bg");
				if (b.length < 1) {
					var b = a(this.settings.template.modal);
					b.appendTo("body")
				}
				/pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed)
			}
		},
		expose: function() {
			var c, d, e, f, g, h = "expose-" + this.random_str(6);
			if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0];
			else {
				if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
				e = this.settings.$target
			}
			return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), this.settings.$body.append(c), c.css({
				top: e.offset().top,
				left: e.offset().left,
				width: e.outerWidth(!0),
				height: e.outerHeight(!0)
			}), d = a(this.settings.template.expose_cover), f = {
				zIndex: e.css("z-index"),
				position: e.css("position")
			}, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), d.css({
				top: e.offset().top,
				left: e.offset().left,
				width: e.outerWidth(!0),
				height: e.outerHeight(!0)
			}), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), void this.add_exposed(e))
		},
		un_expose: function() {
			var c, d, e, f, g, h = !1;
			if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0];
			else {
				if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
				d = this.settings.$target
			}
			return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), d.removeData("expose-z-index"), void this.remove_exposed(d))
		},
		add_exposed: function(b) {
			this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b)
		},
		remove_exposed: function(b) {
			var c, d;
			for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], d = this.settings.exposed.length; d--;)
				if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1)
		},
		center: function() {
			var c = a(b);
			return this.settings.$next_tip.css({
				top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
				left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
			}), !0
		},
		bottom: function() {
			return /bottom/i.test(this.settings.tip_settings.tip_location)
		},
		top: function() {
			return /top/i.test(this.settings.tip_settings.tip_location)
		},
		right: function() {
			return /right/i.test(this.settings.tip_settings.tip_location)
		},
		left: function() {
			return /left/i.test(this.settings.tip_settings.tip_location)
		},
		corners: function(c) {
			var d = a(b),
				e = d.height() / 2,
				f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()),
				g = d.width() + d.scrollLeft(),
				h = d.height() + f,
				i = d.height() + d.scrollTop(),
				j = d.scrollTop();
			return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left]
		},
		visible: function(a) {
			for (var b = a.length; b--;)
				if (a[b]) return !1;
			return !0
		},
		nub_position: function(a, b, c) {
			a.addClass("auto" === b ? c : b)
		},
		startTimer: function() {
			this.settings.$li.length ? this.settings.automate = setTimeout(function() {
				this.hide(), this.show(), this.startTimer()
			}.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
		},
		end: function(b) {
			this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
				expires: this.settings.cookie_expires,
				domain: this.settings.cookie_domain
			}), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), a(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), a(".joyride-tip-guide").remove()
		},
		off: function() {
			a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs["magellan-expedition"] = {
		name: "magellan-expedition",
		version: "5.5.2",
		settings: {
			active_class: "active",
			threshold: 0,
			destination_threshold: 20,
			throttle_delay: 30,
			fixed_top: 0,
			offset_by_height: !0,
			duration: 700,
			easing: "swing"
		},
		init: function(a, b, c) {
			Foundation.inherit(this, "throttle"), this.bindings(b, c)
		},
		events: function() {
			var b = this,
				c = b.S,
				d = b.settings;
			b.set_expedition_position(), c(b.scope).off(".magellan").on("click.fndtn.magellan", "[" + b.add_namespace("data-magellan-arrival") + "] a[href*=#]", function(c) {
				var d = this.hostname === location.hostname || !this.hostname,
					e = b.filterPathname(location.pathname) === b.filterPathname(this.pathname),
					f = this.hash.replace(/(:|\.|\/)/g, "\\$1"),
					g = this;
				if (d && e && f) {
					c.preventDefault();
					var h = a(this).closest("[" + b.attr_name() + "]"),
						i = h.data("magellan-expedition-init"),
						j = this.hash.split("#").join(""),
						k = a('a[name="' + j + '"]');
					0 === k.length && (k = a("#" + j));
					var l = k.offset().top - i.destination_threshold + 1;
					i.offset_by_height && (l -= h.outerHeight()), a("html, body").stop().animate({
						scrollTop: l
					}, i.duration, i.easing, function() {
						history.pushState ? history.pushState(null, null, g.pathname + "#" + j) : location.hash = g.pathname + "#" + j
					})
				}
			}).on("scroll.fndtn.magellan", b.throttle(this.check_for_arrivals.bind(this), d.throttle_delay))
		},
		check_for_arrivals: function() {
			var a = this;
			a.update_arrivals(), a.update_expedition_positions()
		},
		set_expedition_position: function() {
			var b = this;
			a("[" + this.attr_name() + "=fixed]", b.scope).each(function(c, d) {
				var e, f, g = a(this),
					h = g.data("magellan-expedition-init"),
					i = g.attr("styles");
				g.attr("style", ""), e = g.offset().top + h.threshold, f = parseInt(g.data("magellan-fixed-top")), isNaN(f) || (b.settings.fixed_top = f), g.data(b.data_attr("magellan-top-offset"), e), g.attr("style", i)
			})
		},
		update_expedition_positions: function() {
			var c = this,
				d = a(b).scrollTop();
			a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
				var b = a(this),
					e = b.data("magellan-expedition-init"),
					f = b.attr("style"),
					g = b.data("magellan-top-offset");
				if (d + c.settings.fixed_top >= g) {
					var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
					0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), b.before(h)), b.css({
						position: "fixed",
						top: e.fixed_top
					}).addClass("fixed")
				} else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), b.attr("style", f).css("position", "").css("top", "").removeClass("fixed")
			})
		},
		update_arrivals: function() {
			var c = this,
				d = a(b).scrollTop();
			a("[" + this.attr_name() + "]", c.scope).each(function() {
				var b = a(this),
					e = b.data(c.attr_name(!0) + "-init"),
					f = c.offsets(b, d),
					g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"),
					h = !1;
				f.each(function(a, d) {
					if (d.viewport_offset >= d.top_offset) {
						var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
						return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), h = !0, !0
					}
				}), h || g.removeClass(e.active_class)
			})
		},
		offsets: function(b, c) {
			var d = this,
				e = b.data(d.attr_name(!0) + "-init"),
				f = c;
			return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function(c, g) {
				var h = a(this).data(d.data_attr("magellan-arrival")),
					i = a("[" + d.add_namespace("data-magellan-destination") + "=" + h + "]");
				if (i.length > 0) {
					var j = i.offset().top - e.destination_threshold;
					return e.offset_by_height && (j -= b.outerHeight()), j = Math.floor(j), {
						destination: i,
						arrival: a(this),
						top_offset: j,
						viewport_offset: f
					}
				}
			}).sort(function(a, b) {
				return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0
			})
		},
		data_attr: function(a) {
			return this.namespace.length > 0 ? this.namespace + "-" + a : a
		},
		off: function() {
			this.S(this.scope).off(".magellan"), this.S(b).off(".magellan")
		},
		filterPathname: function(a) {
			return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
		},
		reflow: function() {
			var b = this;
			a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove()
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.offcanvas = {
		name: "offcanvas",
		version: "5.5.2",
		settings: {
			open_method: "move",
			close_on_click: !1
		},
		init: function(a, b, c) {
			this.bindings(b, c)
		},
		events: function() {
			var b = this,
				c = b.S,
				d = "",
				e = "",
				f = "";
			"move" === this.settings.open_method ? (d = "move-", e = "right", f = "left") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-", e = "right", f = "left") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"), c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
				b.click_toggle_class(f, d + e), "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
			}).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
				var g = b.get_settings(f),
					h = c(this).parent();
				!g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(), c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(), h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)), h.parent().removeClass(d + e)), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
			}).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
				b.click_toggle_class(e, d + f), "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
			}).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
				var g = b.get_settings(e),
					h = c(this).parent();
				!g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(), h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)), h.parent().removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
			}).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
				b.click_remove_class(g, d + f), c(".right-submenu").removeClass(d + f), e && (b.click_remove_class(g, d + e), c(".left-submenu").removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
			}).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
				b.click_remove_class(c, d + f), a(".left-off-canvas-toggle").attr("aria-expanded", "false"), e && (b.click_remove_class(c, d + e), a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
			})
		},
		toggle: function(a, b) {
			b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b)
		},
		show: function(a, b) {
			b = b || this.get_wrapper(), b.trigger("open.fndtn.offcanvas"), b.addClass(a)
		},
		hide: function(a, b) {
			b = b || this.get_wrapper(), b.trigger("close.fndtn.offcanvas"), b.removeClass(a)
		},
		click_toggle_class: function(a, b) {
			a.preventDefault();
			var c = this.get_wrapper(a);
			this.toggle(b, c)
		},
		click_remove_class: function(a, b) {
			a.preventDefault();
			var c = this.get_wrapper(a);
			this.hide(b, c)
		},
		get_settings: function(a) {
			var b = this.S(a.target).closest("[" + this.attr_name() + "]");
			return b.data(this.attr_name(!0) + "-init") || this.settings
		},
		get_wrapper: function(a) {
			var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
			return 0 === b.length && (b = this.S(".off-canvas-wrap")), b
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	var e = function() {},
		f = function(e, f) {
			if (e.hasClass(f.slides_container_class)) return this;
			var j, k, l, m, n, o, p = this,
				q = e,
				r = 0,
				s = !1;
			p.slides = function() {
				return q.children(f.slide_selector)
			}, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
				f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class))
			}, p.update_active_link = function(b) {
				var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
				c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
			}, p.build_markup = function() {
				q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), p.slides().each(function(b, c) {
					var d = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
					l.append(d)
				}))
			}, p._goto = function(b, c) {
				if (b === r) return !1;
				"object" == typeof o && o.restart();
				var d = p.slides(),
					e = "next";
				if (s = !0, r > b && (e = "prev"), b >= d.length) {
					if (!f.circular) return !1;
					b = 0
				} else if (0 > b) {
					if (!f.circular) return !1;
					b = d.length - 1
				}
				var g = a(d.get(r)),
					h = a(d.get(b));
				g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
				var i = function() {
					var a = function() {
						r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), q.trigger("after-slide-change.fndtn.orbit", [{
							slide_number: r,
							total_slides: d.length
						}]), f.after_slide_change(r, d.length)
					};
					q.outerHeight() != h.outerHeight() && f.variable_height ? q.animate({
						height: h.outerHeight()
					}, 250, "linear", a) : a()
				};
				if (1 === d.length) return i(), !1;
				var j = function() {
					"next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i)
				};
				h.outerHeight() > q.outerHeight() && f.variable_height ? q.animate({
					height: h.outerHeight()
				}, 250, "linear", j) : j()
			}, p.next = function(a) {
				a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1)
			}, p.prev = function(a) {
				a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1)
			}, p.link_custom = function(b) {
				b.preventDefault();
				var c = a(this).attr("data-orbit-link");
				if ("string" == typeof c && "" != (c = a.trim(c))) {
					var d = j.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && p._goto(d.index())
				}
			}, p.link_bullet = function(b) {
				var c = a(this).attr("data-orbit-slide");
				if ("string" == typeof c && "" != (c = a.trim(c)))
					if (isNaN(parseInt(c))) {
						var d = j.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && p._goto(d.index() + 1)
					} else p._goto(parseInt(c))
			}, p.timer_callback = function() {
				p._goto(r + 1, !0)
			}, p.compute_dimensions = function() {
				var b = a(p.slides().get(r)),
					c = b.outerHeight();
				f.variable_height || p.slides().each(function() {
					a(this).outerHeight() > c && (c = a(this).outerHeight())
				}), q.height(c)
			}, p.create_timer = function() {
				var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
				return a
			}, p.stop_timer = function() {
				"object" == typeof o && o.stop()
			}, p.toggle_timer = function() {
				var a = j.find("." + f.timer_container_class);
				a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), o.start()) : "object" == typeof o && o.stop()
			}, p.init = function() {
				p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
					a.touches || (a = a.originalEvent);
					var b = {
						start_page_x: a.touches[0].pageX,
						start_page_y: a.touches[0].pageY,
						start_time: (new Date).getTime(),
						delta_x: 0,
						is_scrolling: d
					};
					j.data("swipe-transition", b), a.stopPropagation()
				}).on("touchmove.fndtn.orbit", function(a) {
					if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
						var b = j.data("swipe-transition");
						if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
							a.preventDefault();
							var c = b.delta_x < 0 ? r + 1 : r - 1;
							b.active = !0, p._goto(c)
						}
					}
				}).on("touchend.fndtn.orbit", function(a) {
					j.data("swipe-transition", {}), a.stopPropagation()
				}), j.on("mouseenter.fndtn.orbit", function(a) {
					f.timer && f.pause_on_hover && p.stop_timer()
				}).on("mouseleave.fndtn.orbit", function(a) {
					f.timer && f.resume_on_mouseout && o.start()
				}), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
					j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), p.update_active_link(0), q.trigger("ready.fndtn.orbit")
				})
			}, p.init()
		},
		g = function(a, b, c) {
			var d, e, f = this,
				g = b.timer_speed,
				h = a.find("." + b.timer_progress_class),
				i = -1;
			this.update_progress = function(a) {
				var b = h.clone();
				b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b
			}, this.restart = function() {
				clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0)
			}, this.start = function() {
				return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), d = (new Date).getTime(), h.animate({
					width: "100%"
				}, i, "linear"), e = setTimeout(function() {
					f.restart(), c()
				}, i), void a.trigger("timer-started.fndtn.orbit")) : !0
			}, this.stop = function() {
				if (a.hasClass(b.timer_paused_class)) return !0;
				clearTimeout(e), a.addClass(b.timer_paused_class);
				var c = (new Date).getTime();
				i -= c - d;
				var h = 100 - i / g * 100;
				f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit")
			}
		},
		h = function(b, c) {
			var d = b.animation_speed,
				e = 1 === a("html[dir=rtl]").length,
				f = e ? "marginRight" : "marginLeft",
				g = {};
			g[f] = "0%", this.next = function(a, b, c) {
				a.animate({
					marginLeft: "-100%"
				}, d), b.animate(g, d, function() {
					a.css(f, "100%"), c()
				})
			}, this.prev = function(a, b, c) {
				a.animate({
					marginLeft: "100%"
				}, d), b.css(f, "-100%"), b.animate(g, d, function() {
					a.css(f, "100%"), c()
				})
			}
		},
		i = function(b, c) {
			{
				var d = b.animation_speed;
				1 === a("html[dir=rtl]").length
			}
			this.next = function(a, b, c) {
				b.css({
					margin: "0%",
					opacity: "0.01"
				}), b.animate({
					opacity: "1"
				}, d, "linear", function() {
					a.css("margin", "100%"), c()
				})
			}, this.prev = function(a, b, c) {
				b.css({
					margin: "0%",
					opacity: "0.01"
				}), b.animate({
					opacity: "1"
				}, d, "linear", function() {
					a.css("margin", "100%"), c()
				})
			}
		};
	Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
		name: "orbit",
		version: "5.5.2",
		settings: {
			animation: "slide",
			timer_speed: 1e4,
			pause_on_hover: !0,
			resume_on_mouseout: !1,
			next_on_click: !0,
			animation_speed: 500,
			stack_on_small: !1,
			navigation_arrows: !0,
			slide_number: !0,
			slide_number_text: "of",
			container_class: "orbit-container",
			stack_on_small_class: "orbit-stack-on-small",
			next_class: "orbit-next",
			prev_class: "orbit-prev",
			timer_container_class: "orbit-timer",
			timer_paused_class: "paused",
			timer_progress_class: "orbit-progress",
			slides_container_class: "orbit-slides-container",
			preloader_class: "preloader",
			slide_selector: "*",
			bullets_container_class: "orbit-bullets",
			bullets_active_class: "active",
			slide_number_class: "orbit-slide-number",
			caption_class: "orbit-caption",
			active_slide_class: "active",
			orbit_transition_class: "orbit-transitioning",
			bullets: !0,
			circular: !0,
			timer: !0,
			variable_height: !1,
			swipe: !0,
			before_slide_change: e,
			after_slide_change: e
		},
		init: function(a, b, c) {
			this.bindings(b, c)
		},
		events: function(a) {
			var b = new f(this.S(a), this.S(a).data("orbit-init"));
			this.S(a).data(this.name + "-instance", b)
		},
		reflow: function() {
			var a = this;
			if (a.S(a.scope).is("[data-orbit]")) {
				var b = a.S(a.scope),
					c = b.data(a.name + "-instance");
				c.compute_dimensions()
			} else a.S("[data-orbit]", a.scope).each(function(b, c) {
				var d = a.S(c),
					e = (a.data_options(d), d.data(a.name + "-instance"));
				e.compute_dimensions()
			})
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";

	function e(a) {
		var b = /fade/i.test(a),
			c = /pop/i.test(a);
		return {
			animate: b || c,
			pop: c,
			fade: b
		}
	}
	Foundation.libs.reveal = {
		name: "reveal",
		version: "5.5.2",
		locked: !1,
		settings: {
			animation: "fadeAndPop",
			animation_speed: 250,
			close_on_background_click: !0,
			close_on_esc: !0,
			dismiss_modal_class: "close-reveal-modal",
			multiple_opened: !1,
			bg_class: "reveal-modal-bg",
			root_element: "body",
			open: function() {},
			opened: function() {},
			close: function() {},
			closed: function() {},
			on_ajax_error: a.noop,
			bg: a(".reveal-modal-bg"),
			css: {
				open: {
					opacity: 0,
					visibility: "visible",
					display: "block"
				},
				close: {
					opacity: 1,
					visibility: "hidden",
					display: "none"
				}
			}
		},
		init: function(b, c, d) {
			a.extend(!0, this.settings, c, d), this.bindings(c, d)
		},
		events: function(a) {
			var b = this,
				d = b.S;
			return d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
				if (a.preventDefault(), !b.locked) {
					var c = d(this),
						e = c.data(b.data_attr("reveal-ajax")),
						f = c.data(b.data_attr("reveal-replace-content"));
					if (b.locked = !0, "undefined" == typeof e) b.open.call(b, c);
					else {
						var g = e === !0 ? c.attr("href") : e;
						b.open.call(b, c, {
							url: g
						}, {
							replaceContentSel: f
						})
					}
				}
			}), d(c).on("click.fndtn.reveal", this.close_targets(), function(a) {
				if (a.preventDefault(), !b.locked) {
					var c = d("[" + b.attr_name() + "].open").data(b.attr_name(!0) + "-init") || b.settings,
						e = d(a.target)[0] === d("." + c.bg_class)[0];
					if (e) {
						if (!c.close_on_background_click) return;
						a.stopPropagation()
					}
					b.locked = !0, b.close.call(b, e ? d("[" + b.attr_name() + "].open:not(.toback)") : d(this).closest("[" + b.attr_name() + "]"))
				}
			}), d("[" + b.attr_name() + "]", this.scope).length > 0 ? d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : d(this.scope).on("open.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.close_video), !0
		},
		key_up_on: function(a) {
			var b = this;
			return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
				var c = b.S("[" + b.attr_name() + "].open"),
					d = c.data(b.attr_name(!0) + "-init") || b.settings;
				d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
			}), !0
		},
		key_up_off: function(a) {
			return this.S("body").off("keyup.fndtn.reveal"), !0
		},
		open: function(c, d) {
			var e, f = this;
			c ? "undefined" != typeof c.selector ? e = f.S("#" + c.data(f.data_attr("reveal-id"))).first() : (e = f.S(this.scope), d = c) : e = f.S(this.scope);
			var g = e.data(f.attr_name(!0) + "-init");
			if (g = g || this.settings, e.hasClass("open") && c.attr("data-reveal-id") == e.attr("id")) return f.close(e);
			if (!e.hasClass("open")) {
				var h = f.S("[" + f.attr_name() + "].open");
				if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), e.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(e), e.on("open.fndtn.reveal", function(a) {
						"fndtn.reveal" !== a.namespace
					}), e.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), h.length < 1 && this.toggle_bg(e, !0), "string" == typeof d && (d = {
						url: d
					}), "undefined" != typeof d && d.url) {
					var i = "undefined" != typeof d.success ? d.success : null;
					a.extend(d, {
						success: function(b, c, d) {
							if (a.isFunction(i)) {
								var j = i(b, c, d);
								"string" == typeof j && (b = j)
							}
							"undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? e.find(options.replaceContentSel).html(b) : e.html(b), f.S(e).foundation("section", "reflow"), f.S(e).children().foundation(), h.length > 0 && (g.multiple_opened ? f.to_back(h) : f.hide(h, g.css.close)), f.show(e, g.css.open)
						}
					}), g.on_ajax_error !== a.noop && a.extend(d, {
						error: g.on_ajax_error
					}), a.ajax(d)
				} else h.length > 0 && (g.multiple_opened ? f.to_back(h) : f.hide(h, g.css.close)), this.show(e, g.css.open)
			}
			f.S(b).trigger("resize")
		},
		close: function(b) {
			var b = b && b.length ? b : this.S(this.scope),
				c = this.S("[" + this.attr_name() + "].open"),
				d = b.data(this.attr_name(!0) + "-init") || this.settings,
				e = this;
			c.length > 0 && (b.removeAttr("tabindex", "0").attr("aria-hidden", "true"), this.locked = !0, this.key_up_off(b), b.trigger("close.fndtn.reveal"), (d.multiple_opened && 1 === c.length || !d.multiple_opened || b.length > 1) && (e.toggle_bg(b, !1), e.to_front(b)), d.multiple_opened ? (e.hide(b, d.css.close, d), e.to_front(a(a.makeArray(c).reverse()[1]))) : e.hide(c, d.css.close, d))
		},
		close_targets: function() {
			var a = "." + this.settings.dismiss_modal_class;
			return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
		},
		toggle_bg: function(b, c) {
			0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
				"class": this.settings.bg_class
			}).appendTo("body").hide());
			var e = this.settings.bg.filter(":visible").length > 0;
			c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
		},
		show: function(c, d) {
			if (d) {
				var f = c.data(this.attr_name(!0) + "-init") || this.settings,
					g = f.root_element,
					h = this;
				if (0 === c.parent(g).length) {
					var i = c.wrap('<div style="display: none;" />').parent();
					c.on("closed.fndtn.reveal.wrapped", function() {
						c.detach().appendTo(i), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
					}), c.detach().appendTo(g)
				}
				var j = e(f.animation);
				if (j.animate || (this.locked = !1), j.pop) {
					d.top = a(b).scrollTop() - c.data("offset") + "px";
					var k = {
						top: a(b).scrollTop() + c.data("css-top") + "px",
						opacity: 1
					};
					return setTimeout(function() {
						return c.css(d).animate(k, f.animation_speed, "linear", function() {
							h.locked = !1, c.trigger("opened.fndtn.reveal")
						}).addClass("open")
					}, f.animation_speed / 2)
				}
				if (j.fade) {
					d.top = a(b).scrollTop() + c.data("css-top") + "px";
					var k = {
						opacity: 1
					};
					return setTimeout(function() {
						return c.css(d).animate(k, f.animation_speed, "linear", function() {
							h.locked = !1, c.trigger("opened.fndtn.reveal")
						}).addClass("open")
					}, f.animation_speed / 2)
				}
				return c.css(d).show().css({
					opacity: 1
				}).addClass("open").trigger("opened.fndtn.reveal")
			}
			var f = this.settings;
			return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
		},
		to_back: function(a) {
			a.addClass("toback")
		},
		to_front: function(a) {
			a.removeClass("toback")
		},
		hide: function(c, d) {
			if (d) {
				var f = c.data(this.attr_name(!0) + "-init"),
					g = this;
				f = f || this.settings;
				var h = e(f.animation);
				if (h.animate || (this.locked = !1), h.pop) {
					var i = {
						top: -a(b).scrollTop() - c.data("offset") + "px",
						opacity: 0
					};
					return setTimeout(function() {
						return c.animate(i, f.animation_speed, "linear", function() {
							g.locked = !1, c.css(d).trigger("closed.fndtn.reveal")
						}).removeClass("open")
					}, f.animation_speed / 2)
				}
				if (h.fade) {
					var i = {
						opacity: 0
					};
					return setTimeout(function() {
						return c.animate(i, f.animation_speed, "linear", function() {
							g.locked = !1, c.css(d).trigger("closed.fndtn.reveal")
						}).removeClass("open")
					}, f.animation_speed / 2)
				}
				return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal")
			}
			var f = this.settings;
			return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
		},
		close_video: function(b) {
			var c = a(".flex-video", b.target),
				d = a("iframe", c);
			d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
		},
		open_video: function(b) {
			var c = a(".flex-video", b.target),
				e = c.find("iframe");
			if (e.length > 0) {
				var f = e.attr("data-src");
				if ("string" == typeof f) e[0].src = e.attr("data-src");
				else {
					var g = e[0].src;
					e[0].src = d, e[0].src = g
				}
				c.show()
			}
		},
		data_attr: function(a) {
			return this.namespace.length > 0 ? this.namespace + "-" + a : a
		},
		cache_offset: function(a) {
			var b = a.show().height() + parseInt(a.css("top"), 10) + a.scrollY;
			return a.hide(), b
		},
		off: function() {
			a(this.scope).off(".fndtn.reveal")
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.slider = {
		name: "slider",
		version: "5.5.2",
		settings: {
			start: 0,
			end: 100,
			step: 1,
			precision: null,
			initial: null,
			display_selector: "",
			vertical: !1,
			trigger_input_change: !1,
			on_change: function() {}
		},
		cache: {},
		init: function(a, b, c) {
			Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow()
		},
		events: function() {
			var c = this;
			a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
				c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)))
			}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
				if (c.cache.active)
					if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
						var e = 0;
						d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, c.get_cursor_position(d, "y") + e)
					} else c.calculate_position(c.cache.active, c.get_cursor_position(d, "x"))
			}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function(a) {
				c.remove_active_slider()
			}).on("change.fndtn.slider", function(a) {
				c.settings.on_change()
			}), c.S(b).on("resize.fndtn.slider", c.throttle(function(a) {
				c.reflow()
			}, 300)), this.S("[" + this.attr_name() + "]").each(function() {
				var b = a(this),
					d = b.children(".range-slider-handle")[0],
					e = c.initialize_settings(d);
				"" != e.display_selector && a(e.display_selector).each(function() {
					this.hasOwnProperty("value") && a(this).change(function() {
						b.foundation("slider", "set_value", a(this).val())
					})
				})
			})
		},
		get_cursor_position: function(a, b) {
			var c, d = "page" + b.toUpperCase(),
				e = "client" + b.toUpperCase();
			return "undefined" != typeof a[d] ? c = a[d] : "undefined" != typeof a.originalEvent[e] ? c = a.originalEvent[e] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0][e] ? c = a.originalEvent.touches[0][e] : a.currentPoint && "undefined" != typeof a.currentPoint[b] && (c = a.currentPoint[b]), c
		},
		set_active_slider: function(a) {
			this.cache.active = a
		},
		remove_active_slider: function() {
			this.cache.active = null
		},
		calculate_position: function(b, c) {
			var d = this,
				e = a.data(b[0], "settings"),
				f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), a.data(b[0], "bar_l")),
				g = a.data(b[0], "bar_o");
			requestAnimationFrame(function() {
				var a;
				a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), a = e.vertical ? 1 - a : a;
				var h = d.normalized_value(a, e.start, e.end, e.step, e.precision);
				d.set_ui(b, h)
			})
		},
		set_ui: function(b, c) {
			var d = a.data(b[0], "settings"),
				e = a.data(b[0], "handle_l"),
				f = a.data(b[0], "bar_l"),
				g = this.normalized_percentage(c, d.start, d.end),
				h = g * (f - e) - 1,
				i = 100 * g,
				j = b.parent(),
				k = b.parent().children("input[type=hidden]");
			Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), j.attr(this.attr_name(), c).trigger("change.fndtn.slider"), k.val(c), d.trigger_input_change && k.trigger("change.fndtn.slider"), b[0].hasAttribute("aria-valuemin") || b.attr({
				"aria-valuemin": d.start,
				"aria-valuemax": d.end
			}), b.attr("aria-valuenow", c), "" != d.display_selector && a(d.display_selector).each(function() {
				this.hasAttribute("value") ? a(this).val(c) : a(this).text(c)
			})
		},
		normalized_percentage: function(a, b, c) {
			return Math.min(1, (a - b) / (c - b))
		},
		normalized_value: function(a, b, c, d, e) {
			var f = c - b,
				g = a * f,
				h = (g - g % d) / d,
				i = g % d,
				j = i >= .5 * d ? d : 0;
			return (h * d + j + b).toFixed(e)
		},
		set_translate: function(b, c, d) {
			d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)")
		},
		limit_to: function(a, b, c) {
			return Math.min(Math.max(a, b), c)
		},
		initialize_settings: function(b) {
			var c, d = a.extend({}, this.settings, this.data_options(a(b).parent()));
			return null === d.precision && (c = ("" + d.step).match(/\.([\d]*)/), d.precision = c && c[1] ? c[1].length : 0), d.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", d)
		},
		set_initial_position: function(b) {
			var c = a.data(b.children(".range-slider-handle")[0], "settings"),
				d = "number" != typeof c.initial || isNaN(c.initial) ? Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start : c.initial,
				e = b.children(".range-slider-handle");
			this.set_ui(e, d)
		},
		set_value: function(b) {
			var c = this;
			a("[" + c.attr_name() + "]", this.scope).each(function() {
				a(this).attr(c.attr_name(), b)
			}), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow()
		},
		reflow: function() {
			var b = this;
			b.S("[" + this.attr_name() + "]").each(function() {
				var c = a(this).children(".range-slider-handle")[0],
					d = a(this).attr(b.attr_name());
				b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this))
			})
		}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.tab = {
		name: "tab",
		version: "5.5.2",
		settings: {
			active_class: "active",
			callback: function() {},
			deep_linking: !1,
			scroll_to_content: !0,
			is_hover: !1
		},
		default_tab_hashes: [],
		init: function(a, c, d) {
			var e = this,
				f = this.S;
			f("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
				e.default_tab_hashes.push(this.hash)
			}), e.entry_location = b.location.href, this.bindings(c, d), this.handle_location_hash_change()
		},
		events: function() {
			var a = this,
				c = this.S,
				d = function(b, d) {
					var e = c(d).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
					(!e.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(d).parent()))
				};
			c(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
				var b = this,
					c = a.keyCode || a.which;
				9 == c && (a.preventDefault(), d(a, b))
			}).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
				var b = this;
				d(a, b)
			}).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(b) {
				var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
				d.is_hover && a.toggle_active_tab(c(this).parent())
			}), c(b).on("hashchange.fndtn.tab", function(b) {
				b.preventDefault(), a.handle_location_hash_change()
			})
		},
		handle_location_hash_change: function() {
			var b = this,
				c = this.S;
			c("[" + this.attr_name() + "]", this.scope).each(function() {
				var e = c(this).data(b.attr_name(!0) + "-init");
				if (e.deep_linking) {
					var f;
					if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), "" != f) {
						var g = c(f);
						if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent());
						else {
							var h = g.closest(".content").attr("id");
							h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f)
						}
					} else
						for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent())
				}
			})
		},
		toggle_active_tab: function(e, f) {
			var g = this,
				h = g.S,
				i = e.closest("[" + this.attr_name() + "]"),
				j = e.find("a"),
				k = e.children("a").first(),
				l = "#" + k.attr("href").split("#")[1],
				m = h(l),
				n = e.siblings(),
				o = i.data(this.attr_name(!0) + "-init"),
				p = function(b) {
					var d, e = a(this),
						f = a(this).parents("li").prev().children('[role="tab"]'),
						g = a(this).parents("li").next().children('[role="tab"]');
					switch (b.keyCode) {
						case 37:
							d = f;
							break;
						case 39:
							d = g;
							break;
						default:
							d = !1
					}
					d.length && (e.attr({
						tabindex: "-1",
						"aria-selected": null
					}), d.attr({
						tabindex: "0",
						"aria-selected": !0
					}).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
				},
				q = function(a) {
					var c = b.location.href === g.entry_location,
						d = o.scroll_to_content ? g.default_tab_hashes[0] : c ? b.location.hash : "fndtn-" + g.default_tab_hashes[0].replace("#", "");
					c && a === d || (b.location.hash = a)
				};
			k.data("tab-content") && (l = "#" + k.data("tab-content").split("#")[1], m = h(l)), o.deep_linking && (o.scroll_to_content ? (q(f || l), f == d || f == l ? e.parent()[0].scrollIntoView() : h(l)[0].scrollIntoView()) : q(f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + l.replace("#", ""))), e.addClass(o.active_class).triggerHandler("opened"), j.attr({
				"aria-selected": "true",
				tabindex: 0
			}), n.removeClass(o.active_class), n.find("a").attr({
				"aria-selected": "false",
				tabindex: -1
			}), m.siblings().removeClass(o.active_class).attr({
				"aria-hidden": "true",
				tabindex: -1
			}), m.addClass(o.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), o.callback(e), m.triggerHandler("toggled", [m]), i.triggerHandler("toggled", [e]), j.off("keydown").on("keydown", p)
		},
		data_attr: function(a) {
			return this.namespace.length > 0 ? this.namespace + "-" + a : a
		},
		off: function() {},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.tooltip = {
		name: "tooltip",
		version: "5.5.2",
		settings: {
			additional_inheritable_classes: [],
			tooltip_class: ".tooltip",
			append_to: "body",
			touch_close_text: "Tap To Close",
			disable_for_touch: !1,
			hover_delay: 200,
			show_on: "all",
			tip_template: function(a, b) {
				return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>'
			}
		},
		cache: {},
		init: function(a, b, c) {
			Foundation.inherit(this, "random_str"), this.bindings(b, c)
		},
		should_show: function(b, c) {
			var d = a.extend({}, this.settings, this.data_options(b));
			return "all" === d.show_on ? !0 : this.small() && "small" === d.show_on ? !0 : this.medium() && "medium" === d.show_on ? !0 : this.large() && "large" === d.show_on ? !0 : !1
		},
		medium: function() {
			return matchMedia(Foundation.media_queries.medium).matches
		},
		large: function() {
			return matchMedia(Foundation.media_queries.large).matches
		},
		events: function(b) {
			function c(a, b, c) {
				a.timer || (c ? (a.timer = null, e.showTip(b)) : a.timer = setTimeout(function() {
					a.timer = null, e.showTip(b)
				}.bind(a), e.settings.hover_delay))
			}

			function d(a, b) {
				a.timer && (clearTimeout(a.timer), a.timer = null), e.hide(b)
			}
			var e = this,
				f = e.S;
			e.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
				var g = f(this),
					h = a.extend({}, e.settings, e.data_options(g)),
					i = !1;
				if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && f(b.target).is("a")) return !1;
				if (/mouse/i.test(b.type) && e.ie_touch(b)) return !1;
				if (g.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), e.hide(g);
				else {
					if (h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
					if (!h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), f(h.tooltip_class + ".open").hide(), i = !0, a(".open[" + e.attr_name() + "]").length > 0)) {
						var j = f(a(".open[" + e.attr_name() + "]")[0]);
						e.hide(j)
					}
					/enter|over/i.test(b.type) ? c(this, g) : "mouseout" === b.type || "mouseleave" === b.type ? d(this, g) : c(this, g, !0)
				}
			}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
				return /mouse/i.test(b.type) && e.ie_touch(b) ? !1 : void(("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? e.convert_to_touch(a(this)) : d(this, a(this))))
			}).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function(a) {
				d(this, f(this))
			})
		},
		ie_touch: function(a) {
			return !1
		},
		showTip: function(a) {
			var b = this.getTip(a);
			return this.should_show(a, b) ? this.show(a) : void 0
		},
		getTip: function(b) {
			var c = this.selector(b),
				d = a.extend({}, this.settings, this.data_options(b)),
				e = null;
			return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1
		},
		selector: function(a) {
			var b = a.attr(this.attr_name()) || a.attr("data-selector");
			return "string" != typeof b && (b = this.random_str(6), a.attr("data-selector", b).attr("aria-describedby", b)), b
		},
		create: function(c) {
			var d = this,
				e = a.extend({}, this.settings, this.data_options(c)),
				f = this.settings.tip_template;
			"string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
			var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())),
				h = this.inheritable_classes(c);
			g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function(a) {
				d.hide(c)
			})), c.removeAttr("title").attr("title", "")
		},
		reposition: function(b, c, d) {
			var e, f, g, h, i;
			if (c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), g = f.outerHeight(), h = f.outerHeight(), c.css(this.small() ? {
					width: "100%"
				} : {
					width: e ? e : "auto"
				}), i = function(a, b, c, d, e, f) {
					return a.css({
						top: b ? b : "auto",
						bottom: d ? d : "auto",
						left: e ? e : "auto",
						right: c ? c : "auto"
					}).end()
				}, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), this.small()) i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, -g, "auto", "auto", b.offset().left);
			else {
				var j = b.offset().left;
				Foundation.rtl && (f.addClass("rtl"), j = b.offset().left + b.outerWidth() - c.outerWidth()), i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), f.attr("style") && f.removeAttr("style"), c.removeClass("tip-override"), d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"), f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"), f.removeClass("rtl"))
			}
			c.css("visibility", "visible").hide()
		},
		small: function() {
			return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
		},
		inheritable_classes: function(b) {
			var c = a.extend({}, this.settings, this.data_options(b)),
				d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes),
				e = b.attr("class"),
				f = e ? a.map(e.split(" "), function(b, c) {
					return -1 !== a.inArray(b, d) ? b : void 0
				}).join(" ") : "";
			return a.trim(f)
		},
		convert_to_touch: function(b) {
			var c = this,
				d = c.getTip(b),
				e = a.extend({}, c.settings, c.data_options(b));
			0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function(a) {
				c.hide(b)
			})), b.data("tooltip-open-event-type", "touch")
		},
		show: function(a) {
			var b = this.getTip(a);
			"touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), a.addClass("open"), b.fadeIn(150)
		},
		hide: function(a) {
			var b = this.getTip(a);
			b.fadeOut(150, function() {
				b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), a.removeClass("open")
			})
		},
		off: function() {
			var b = this;
			this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
				a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
			}).remove()
		},
		reflow: function() {}
	}
}(jQuery, window, window.document),
function(a, b, c, d) {
	"use strict";
	Foundation.libs.topbar = {
		name: "topbar",
		version: "5.5.2",
		settings: {
			index: 0,
			start_offset: 0,
			sticky_class: "sticky",
			custom_back_text: !0,
			back_text: "Back",
			mobile_show_parent_link: !0,
			is_hover: !0,
			scrolltop: !0,
			sticky_on: "all",
			dropdown_autoclose: !0
		},
		init: function(b, c, d) {
			Foundation.inherit(this, "add_custom_rule register_media throttle");
			var e = this;
			e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
				{
					var b = a(this),
						c = b.data(e.attr_name(!0) + "-init");
					e.S("section, .top-bar-section", this)
				}
				b.data("index", 0);
				var d = b.parent();
				d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed")
			})
		},
		is_sticky: function(a, b, c) {
			var d = b.hasClass(c.sticky_class),
				e = matchMedia(Foundation.media_queries.small).matches,
				f = matchMedia(Foundation.media_queries.medium).matches,
				g = matchMedia(Foundation.media_queries.large).matches;
			return d && "all" === c.sticky_on ? !0 : d && this.small() && -1 !== c.sticky_on.indexOf("small") && e && !f && !g ? !0 : d && this.medium() && -1 !== c.sticky_on.indexOf("medium") && e && f && !g ? !0 : d && this.large() && -1 !== c.sticky_on.indexOf("large") && e && f && g ? !0 : !1
		},
		toggle: function(c) {
			var d, e = this;
			d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
			var f = d.data(this.attr_name(!0) + "-init"),
				g = e.S("section, .top-bar-section", d);
			e.breakpoint() && (e.rtl ? (g.css({
				right: "0%"
			}), a(">.name", g).css({
				right: "100%"
			})) : (g.css({
				left: "0%"
			}), a(">.name", g).css({
				left: "100%"
			})), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), d.parent().removeClass("expanded"), e.update_sticky_positioning())))
		},
		timer: null,
		events: function(c) {
			var d = this,
				e = this.S;
			e(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
				a.preventDefault(), d.toggle(this)
			}).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(b) {
				var c = a(this).closest("li"),
					e = c.closest("[" + d.attr_name() + "]"),
					f = e.data(d.attr_name(!0) + "-init");
				if (f.dropdown_autoclose && f.is_hover) {
					var g = a(this).closest(".hover");
					g.removeClass("hover")
				}!d.breakpoint() || c.hasClass("back") || c.hasClass("has-dropdown") || d.toggle()
			}).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
				var c = e(this),
					f = e(b.target),
					g = c.closest("[" + d.attr_name() + "]"),
					h = g.data(d.attr_name(!0) + "-init");
				return f.data("revealId") ? void d.toggle() : void(d.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), c.hasClass("hover") ? (c.removeClass("hover").find("li").removeClass("hover"), c.parents("li.hover").removeClass("hover")) : (c.addClass("hover"), a(c).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())))
			}).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
				if (d.breakpoint()) {
					a.preventDefault();
					var b = e(this),
						c = b.closest("[" + d.attr_name() + "]"),
						f = c.find("section, .top-bar-section"),
						g = (b.next(".dropdown").outerHeight(), b.closest("li"));
					c.data("index", c.data("index") + 1), g.addClass("moved"), d.rtl ? (f.css({
						right: -(100 * c.data("index")) + "%"
					}), f.find(">.name").css({
						right: 100 * c.data("index") + "%"
					})) : (f.css({
						left: -(100 * c.data("index")) + "%"
					}), f.find(">.name").css({
						left: 100 * c.data("index") + "%"
					})), c.css("height", b.siblings("ul").outerHeight(!0) + c.data("height"))
				}
			}), e(b).off(".topbar").on("resize.fndtn.topbar", d.throttle(function() {
				d.resize.call(d)
			}, 50)).trigger("resize.fndtn.topbar").load(function() {
				e(this).trigger("resize.fndtn.topbar")
			}), e("body").off(".topbar").on("click.fndtn.topbar", function(a) {
				var b = e(a.target).closest("li").closest("li.hover");
				b.length > 0 || e("[" + d.attr_name() + "] li.hover").removeClass("hover")
			}), e(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
				a.preventDefault();
				var b = e(this),
					c = b.closest("[" + d.attr_name() + "]"),
					f = c.find("section, .top-bar-section"),
					g = (c.data(d.attr_name(!0) + "-init"), b.closest("li.moved")),
					h = g.parent();
				c.data("index", c.data("index") - 1), d.rtl ? (f.css({
					right: -(100 * c.data("index")) + "%"
				}), f.find(">.name").css({
					right: 100 * c.data("index") + "%"
				})) : (f.css({
					left: -(100 * c.data("index")) + "%"
				}), f.find(">.name").css({
					left: 100 * c.data("index") + "%"
				})), 0 === c.data("index") ? c.css("height", "") : c.css("height", h.outerHeight(!0) + c.data("height")), setTimeout(function() {
					g.removeClass("moved")
				}, 300)
			}), e(this.scope).find(".dropdown a").focus(function() {
				a(this).parents(".has-dropdown").addClass("hover")
			}).blur(function() {
				a(this).parents(".has-dropdown").removeClass("hover")
			})
		},
		resize: function() {
			var a = this;
			a.S("[" + this.attr_name() + "]").each(function() {
				var b, d = a.S(this),
					e = d.data(a.attr_name(!0) + "-init"),
					f = d.parent("." + a.settings.sticky_class);
				if (!a.breakpoint()) {
					var g = d.hasClass("expanded");
					d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d)
				}
				a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)))
			})
		},
		breakpoint: function() {
			return !matchMedia(Foundation.media_queries.topbar).matches
		},
		small: function() {
			return matchMedia(Foundation.media_queries.small).matches
		},
		medium: function() {
			return matchMedia(Foundation.media_queries.medium).matches
		},
		large: function() {
			return matchMedia(Foundation.media_queries.large).matches
		},
		assemble: function(b) {
			var c = this,
				d = b.data(this.attr_name(!0) + "-init"),
				e = c.S("section, .top-bar-section", b);
			e.detach(), c.S(".has-dropdown>a", e).each(function() {
				var b, e = c.S(this),
					f = e.siblings(".dropdown"),
					g = e.attr("href");
				f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), a("h5>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), f.prepend(b))
			}), e.appendTo(b), this.sticky(), this.assembled(b)
		},
		assembled: function(b) {
			b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
				assembled: !0
			}))
		},
		height: function(b) {
			var c = 0,
				d = this;
			return a("> li", b).each(function() {
				c += d.S(this).outerHeight(!0)
			}), c
		},
		sticky: function() {
			var a = this;
			this.S(b).on("scroll", function() {
				a.update_sticky_positioning()
			})
		},
		update_sticky_positioning: function() {
			var a = "." + this.settings.sticky_class,
				c = this.S(b),
				d = this;
			if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
				var e = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
				d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), d.S("body").removeClass("f-topbar-fixed")))
			}
		},
		off: function() {
			this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar")
		},
		reflow: function() {}
	}
}(jQuery, window, window.document);

/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined') ? window // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) ? self // if in worker
		: {} // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function() {

	// Private helper vars
	var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;

	var _ = _self.Prism = {
		util: {
			encode: function(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			type: function(o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},

			// Deep clone a language definition (e.g. to extend it)
			clone: function(o) {
				var type = _.util.type(o);

				switch (type) {
					case 'Object':
						var clone = {};

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}

						return clone;

					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) {
							return _.util.clone(v);
						});
				}

				return o;
			}
		},

		languages: {
			extend: function(id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function(inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];

				if (arguments.length == 2) {
					insert = arguments[1];

					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}

					return grammar;
				}

				var ret = {};

				for (var token in grammar) {

					if (grammar.hasOwnProperty(token)) {

						if (token == before) {

							for (var newToken in insert) {

								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						ret[token] = grammar[token];
					}
				}

				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});

				return root[inside] = ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type) {
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						if (_.util.type(o[i]) === 'Object') {
							_.languages.DFS(o[i], callback);
						} else if (_.util.type(o[i]) === 'Array') {
							_.languages.DFS(o[i], callback, i);
						}
					}
				}
			}
		},

		highlightAll: function(async, callback) {
			var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');

			for (var i = 0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, callback);
			}
		},

		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;

			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (parent.className.match(lang) || [, ''])[1];
				grammar = _.languages[language];
			}

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			if (!grammar) {
				return;
			}

			var code = element.textContent;

			if (!code) {
				return;
			}

			code = code.replace(/^(?:\r?\n|\r)/, '');

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			_.hooks.run('before-highlight', env);

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function(evt) {
					env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);

					_.hooks.run('before-insert', env);

					env.element.innerHTML = env.highlightedCode;

					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code
				}));
			} else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(element);

				_.hooks.run('after-highlight', env);
			}
		},

		highlight: function(text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},

		tokenize: function(text, grammar, language) {
			var Token = _.Token;

			var strarr = [text];

			var rest = grammar.rest;

			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			tokenloop: for (var token in grammar) {
				if (!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}

				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						lookbehindLength = 0,
						alias = pattern.alias;

					pattern = pattern.pattern || pattern;

					for (var i = 0; i < strarr.length; i++) { // Don’t cache length as it changes during the loop

						var str = strarr[i];

						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}

						if (str instanceof Token) {
							continue;
						}

						pattern.lastIndex = 0;

						var match = pattern.exec(str);

						if (match) {
							if (lookbehind) {
								lookbehindLength = match[1].length;
							}

							var from = match.index - 1 + lookbehindLength,
								match = match[0].slice(lookbehindLength),
								len = match.length,
								to = from + len,
								before = str.slice(0, from + 1),
								after = str.slice(to + 1);

							var args = [i, 1];

							if (before) {
								args.push(before);
							}

							var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias);

							args.push(wrapped);

							if (after) {
								args.push(after);
							}

							Array.prototype.splice.apply(strarr, args);
						}
					}
				}
			}

			return strarr;
		},

		hooks: {
			all: {},

			add: function(name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			run: function(name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};

	var Token = _.Token = function(type, content, alias) {
		this.type = type;
		this.content = content;
		this.alias = alias;
	};

	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}

		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}

		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};

		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}

		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}

		_.hooks.run('wrap', env);

		var attributes = '';

		for (var name in env.attributes) {
			attributes += name + '="' + (env.attributes[name] || '') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

	};

	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
		// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code;

			_self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));
			_self.close();
		}, false);

		return _self.Prism;
	}

	// Get current script and highlight
	var script = document.getElementsByTagName('script');

	script = script[script.length - 1];

	if (script) {
		_.filename = script.src;

		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}

	return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
				// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
			inside: {
				'tag': {
					pattern: /<style[\w\W]*?>|<\/style>/i,
					inside: Prism.languages.markup.tag.inside
				},
				rest: Prism.languages.css
			},
			alias: 'language-css'
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [{
		pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
		lookbehind: true
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: true
	}],
	'string': /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
	'class-name': {
		pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
	'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	'function': /(?!\d)[a-z0-9_$]+(?=\()/i
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true
	}
});

Prism.languages.insertBefore('javascript', 'class-name', {
	'template-string': {
		pattern: /`(?:\\`|\\?[^`])*`/,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
			inside: {
				'tag': {
					pattern: /<script[\w\W]*?>|<\/script>/i,
					inside: Prism.languages.markup.tag.inside
				},
				rest: Prism.languages.javascript
			},
			alias: 'language-javascript'
		}
	});
}


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function() {
	if (!self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'html': 'markup',
			'svg': 'markup',
			'xml': 'markup',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell'
		};

		if (Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						} else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						} else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	self.Prism.fileHighlight();

})();
