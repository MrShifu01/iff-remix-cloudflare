// .wrangler/tmp/pages-yNDND0/functionsWorker-0.2563191942728793.mjs
var mx = Object.create;
var f7 = Object.defineProperty;
var xx = Object.getOwnPropertyDescriptor;
var Vx = Object.getOwnPropertyNames;
var Cx = Object.getPrototypeOf;
var Lx = Object.prototype.hasOwnProperty;
var o1 = (t, a) => () => (t && (a = t(t = 0)), a);
var J1 = (t, a) => () => (a || t((a = { exports: {} }).exports, a), a.exports);
var u5 = (t, a) => {
  for (var r in a)
    f7(t, r, { get: a[r], enumerable: true });
};
var Mo = (t, a, r, l) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (let c of Vx(a))
      !Lx.call(t, c) && c !== r && f7(t, c, { get: () => a[c], enumerable: !(l = xx(a, c)) || l.enumerable });
  return t;
};
var I = (t, a, r) => (r = t != null ? mx(Cx(t)) : {}, Mo(a || !t || !t.__esModule ? f7(r, "default", { value: t, enumerable: true }) : r, t));
var j3 = (t) => Mo(f7({}, "__esModule", { value: true }), t);
var fo = J1((jl) => {
  "use strict";
  jl.parse = wx;
  jl.serialize = Ax;
  var Bx = Object.prototype.toString, H7 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function wx(t, a) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, l = a || {}, c = l.decode || Zx, e = 0; e < t.length; ) {
      var h = t.indexOf("=", e);
      if (h === -1)
        break;
      var i = t.indexOf(";", e);
      if (i === -1)
        i = t.length;
      else if (i < h) {
        e = t.lastIndexOf(";", h - 1) + 1;
        continue;
      }
      var n = t.slice(e, h).trim();
      if (r[n] === void 0) {
        var o = t.slice(h + 1, i).trim();
        o.charCodeAt(0) === 34 && (o = o.slice(1, -1)), r[n] = Fx(o, c);
      }
      e = i + 1;
    }
    return r;
  }
  function Ax(t, a, r) {
    var l = r || {}, c = l.encode || Sx;
    if (typeof c != "function")
      throw new TypeError("option encode is invalid");
    if (!H7.test(t))
      throw new TypeError("argument name is invalid");
    var e = c(a);
    if (e && !H7.test(e))
      throw new TypeError("argument val is invalid");
    var h = t + "=" + e;
    if (l.maxAge != null) {
      var i = l.maxAge - 0;
      if (isNaN(i) || !isFinite(i))
        throw new TypeError("option maxAge is invalid");
      h += "; Max-Age=" + Math.floor(i);
    }
    if (l.domain) {
      if (!H7.test(l.domain))
        throw new TypeError("option domain is invalid");
      h += "; Domain=" + l.domain;
    }
    if (l.path) {
      if (!H7.test(l.path))
        throw new TypeError("option path is invalid");
      h += "; Path=" + l.path;
    }
    if (l.expires) {
      var n = l.expires;
      if (!yx(n) || isNaN(n.valueOf()))
        throw new TypeError("option expires is invalid");
      h += "; Expires=" + n.toUTCString();
    }
    if (l.httpOnly && (h += "; HttpOnly"), l.secure && (h += "; Secure"), l.partitioned && (h += "; Partitioned"), l.priority) {
      var o = typeof l.priority == "string" ? l.priority.toLowerCase() : l.priority;
      switch (o) {
        case "low":
          h += "; Priority=Low";
          break;
        case "medium":
          h += "; Priority=Medium";
          break;
        case "high":
          h += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (l.sameSite) {
      var d = typeof l.sameSite == "string" ? l.sameSite.toLowerCase() : l.sameSite;
      switch (d) {
        case true:
          h += "; SameSite=Strict";
          break;
        case "lax":
          h += "; SameSite=Lax";
          break;
        case "strict":
          h += "; SameSite=Strict";
          break;
        case "none":
          h += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return h;
  }
  function Zx(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function Sx(t) {
    return encodeURIComponent(t);
  }
  function yx(t) {
    return Bx.call(t) === "[object Date]" || t instanceof Date;
  }
  function Fx(t, a) {
    try {
      return a(t);
    } catch {
      return t;
    }
  }
});
function m7(t, a) {
  !t && !Ho[a] && (Ho[a] = true, console.warn(a));
}
var Ho;
var Nl = o1(() => {
  Ho = {};
});
async function kx(t, a, r) {
  let l = Ox(a);
  return r.length > 0 && (l = await t(l, r[0])), l;
}
async function Rx(t, a, r) {
  if (r.length > 0) {
    for (let l of r) {
      let c = await t(a, l);
      if (c !== false)
        return mo(c);
    }
    return null;
  }
  return mo(a);
}
function Ox(t) {
  return btoa(Ex(encodeURIComponent(JSON.stringify(t))));
}
function mo(t) {
  try {
    return JSON.parse(decodeURIComponent(Px(atob(t))));
  } catch {
    return {};
  }
}
function Px(t) {
  let a = t.toString(), r = "", l = 0, c, e;
  for (; l < a.length; )
    c = a.charAt(l++), /[\w*+\-./@]/.exec(c) ? r += c : (e = c.charCodeAt(0), e < 256 ? r += "%" + xo(e, 2) : r += "%u" + xo(e, 4).toUpperCase());
  return r;
}
function xo(t, a) {
  let r = t.toString(16);
  for (; r.length < a; )
    r = "0" + r;
  return r;
}
function Ex(t) {
  let a = t.toString(), r = "", l = 0, c, e;
  for (; l < a.length; ) {
    if (c = a.charAt(l++), c === "%") {
      if (a.charAt(l) === "u") {
        if (e = a.slice(l + 1, l + 5), /^[\da-f]{4}$/i.exec(e)) {
          r += String.fromCharCode(parseInt(e, 16)), l += 5;
          continue;
        }
      } else if (e = a.slice(l, l + 2), /^[\da-f]{2}$/i.exec(e)) {
        r += String.fromCharCode(parseInt(e, 16)), l += 2;
        continue;
      }
    }
    r += c;
  }
  return r;
}
function Ix(t, a) {
  m7(!a, `The "${t}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var x7;
var Vo;
var N3;
var V7 = o1(() => {
  x7 = I(fo());
  Nl();
  Vo = ({ sign: t, unsign: a }) => (r, l = {}) => {
    let { secrets: c = [], ...e } = { path: "/", sameSite: "lax", ...l };
    return Ix(r, e.expires), { get name() {
      return r;
    }, get isSigned() {
      return c.length > 0;
    }, get expires() {
      return typeof e.maxAge < "u" ? new Date(Date.now() + e.maxAge * 1e3) : e.expires;
    }, async parse(h, i) {
      if (!h)
        return null;
      let n = (0, x7.parse)(h, { ...e, ...i });
      return r in n ? n[r] === "" ? "" : await Rx(a, n[r], c) : null;
    }, async serialize(h, i) {
      return (0, x7.serialize)(r, h === "" ? "" : await kx(t, h, c), { ...e, ...i });
    } };
  }, N3 = (t) => t != null && typeof t.name == "string" && typeof t.isSigned == "boolean" && typeof t.parse == "function" && typeof t.serialize == "function";
});
function _3(t) {
  let a = unescape(encodeURIComponent(t));
  return Uint8Array.from(a, (r, l) => a.charCodeAt(l));
}
function _l(t) {
  let a = String.fromCharCode.apply(null, t);
  return decodeURIComponent(escape(a));
}
function U3(...t) {
  let a = new Uint8Array(t.reduce((l, c) => l + c.length, 0)), r = 0;
  for (let l of t)
    a.set(l, r), r += l.length;
  return a;
}
function Co(t, a) {
  if (t.length !== a.length)
    return false;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== a[r])
      return false;
  return true;
}
var Ul = o1(() => {
});
function Lo(t) {
  return t instanceof Uint8Array ? (a) => t[a] : t;
}
function Gl(t, a, r, l, c) {
  let e = Lo(t), h = Lo(r);
  for (let i = 0; i < c; ++i)
    if (e(a + i) !== h(l + i))
      return false;
  return true;
}
function bx(t) {
  let a = new Array(256).fill(t.length);
  if (t.length > 1)
    for (let r = 0; r < t.length - 1; r++)
      a[t[r]] = t.length - 1 - r;
  return a;
}
var U0;
var G4;
var C7;
var Bo;
var wo;
var Ao = o1(() => {
  Ul();
  U0 = Symbol("Match"), G4 = class {
    constructor(a) {
      this._lookbehind = new Uint8Array(), typeof a == "string" ? this._needle = a = _3(a) : this._needle = a, this._lastChar = a[a.length - 1], this._occ = bx(a);
    }
    feed(a) {
      let r = 0, l, c = [];
      for (; r !== a.length; )
        [r, ...l] = this._feed(a, r), c.push(...l);
      return c;
    }
    end() {
      let a = this._lookbehind;
      return this._lookbehind = new Uint8Array(), a;
    }
    _feed(a, r) {
      let l = [], c = -this._lookbehind.length;
      if (c < 0) {
        for (; c < 0 && c <= a.length - this._needle.length; ) {
          let e = this._charAt(a, c + this._needle.length - 1);
          if (e === this._lastChar && this._memcmp(a, c, this._needle.length - 1))
            return c > -this._lookbehind.length && l.push(this._lookbehind.slice(0, this._lookbehind.length + c)), l.push(U0), this._lookbehind = new Uint8Array(), [c + this._needle.length, ...l];
          c += this._occ[e];
        }
        if (c < 0)
          for (; c < 0 && !this._memcmp(a, c, a.length - c); )
            c++;
        if (c >= 0)
          l.push(this._lookbehind), this._lookbehind = new Uint8Array();
        else {
          let e = this._lookbehind.length + c;
          return e > 0 && (l.push(this._lookbehind.slice(0, e)), this._lookbehind = this._lookbehind.slice(e)), this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + a.length), (h, i) => this._charAt(a, i - this._lookbehind.length)), [a.length, ...l];
        }
      }
      for (c += r; c <= a.length - this._needle.length; ) {
        let e = a[c + this._needle.length - 1];
        if (e === this._lastChar && a[c] === this._needle[0] && Gl(this._needle, 0, a, c, this._needle.length - 1))
          return c > r && l.push(a.slice(r, c)), l.push(U0), [c + this._needle.length, ...l];
        c += this._occ[e];
      }
      if (c < a.length) {
        for (; c < a.length && (a[c] !== this._needle[0] || !Gl(a, c, this._needle, 0, a.length - c)); )
          ++c;
        c < a.length && (this._lookbehind = a.slice(c));
      }
      return c > 0 && l.push(a.slice(r, c < a.length ? c : a.length)), [a.length, ...l];
    }
    _charAt(a, r) {
      return r < 0 ? this._lookbehind[this._lookbehind.length + r] : a[r];
    }
    _memcmp(a, r, l) {
      return Gl(this._charAt.bind(this, a), r, this._needle, 0, l);
    }
  }, C7 = class {
    constructor(a, r) {
      this._readableStream = r, this._search = new G4(a);
    }
    async *[Symbol.asyncIterator]() {
      let a = this._readableStream.getReader();
      try {
        for (; ; ) {
          let l = await a.read();
          if (l.done)
            break;
          yield* this._search.feed(l.value);
        }
        let r = this._search.end();
        r.length && (yield r);
      } finally {
        a.releaseLock();
      }
    }
  }, Bo = Symbol("End of Queue"), wo = class {
    constructor(a) {
      this._chunksQueue = [], this._closed = false, this._search = new G4(a);
    }
    push(...a) {
      if (this._closed)
        throw new Error("cannot call push after close");
      this._chunksQueue.push(...a), this._notify && this._notify();
    }
    close() {
      if (this._closed)
        throw new Error("close was already called");
      this._closed = true, this._chunksQueue.push(Bo), this._notify && this._notify();
    }
    async *[Symbol.asyncIterator]() {
      for (; ; ) {
        let r;
        for (; !(r = this._chunksQueue.shift()); )
          await new Promise((l) => this._notify = l), this._notify = void 0;
        if (r === Bo)
          break;
        yield* this._search.feed(r);
      }
      let a = this._search.end();
      a.length && (yield a);
    }
  };
});
function Tx(t) {
  let a = t.split(";").map((l) => l.trim());
  if (a.shift() !== "form-data")
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(a) + "`");
  let r = {};
  for (let l of a) {
    let c = l.split("=", 2);
    if (c.length !== 2)
      throw new Error("malformed content-disposition header: key-value pair not found - " + l + " in `" + t + "`");
    let [e, h] = c;
    if (h[0] === '"' && h[h.length - 1] === '"')
      r[e] = h.slice(1, -1).replace(/\\"/g, '"');
    else if (h[0] !== '"' && h[h.length - 1] !== '"')
      r[e] = h;
    else if (h[0] === '"' && h[h.length - 1] !== '"' || h[0] !== '"' && h[h.length - 1] === '"')
      throw new Error("malformed content-disposition header: mismatched quotations in `" + t + "`");
  }
  if (!r.name)
    throw new Error("malformed content-disposition header: missing field name in `" + t + "`");
  return r;
}
function Wx(t) {
  let a = [], r = false, l;
  for (; typeof (l = t.shift()) < "u"; ) {
    let c = l.indexOf(":");
    if (c === -1)
      throw new Error("malformed multipart-form header: missing colon");
    let e = l.slice(0, c).trim().toLowerCase(), h = l.slice(c + 1).trim();
    switch (e) {
      case "content-disposition":
        r = true, a.push(...Object.entries(Tx(h)));
        break;
      case "content-type":
        a.push(["contentType", h]);
    }
  }
  if (!r)
    throw new Error("malformed multipart-form header: missing content-disposition");
  return Object.fromEntries(a);
}
async function jx(t, a) {
  let r = true, l = false, c = [[]], e = new G4(Zt);
  for (; ; ) {
    let h = await t.next();
    if (h.done)
      throw new Error("malformed multipart-form data: unexpected end of stream");
    if (r && h.value !== U0 && Co(h.value.slice(0, 2), Zo))
      return [void 0, new Uint8Array()];
    let i;
    if (h.value !== U0)
      i = h.value;
    else if (!l)
      i = a;
    else
      throw new Error("malformed multipart-form data: unexpected boundary");
    if (!i.length)
      continue;
    r && (r = false);
    let n = e.feed(i);
    for (let [o, d] of n.entries()) {
      let v = d === U0;
      if (!(!v && !d.length)) {
        if (l && v)
          return n.push(e.end()), [c.filter((g) => g.length).map(Dx).map(_l), U3(...n.slice(o + 1).map((g) => g === U0 ? Zt : g))];
        (l = v) ? c.push([]) : c[c.length - 1].push(d);
      }
    }
  }
}
async function* So(t, a) {
  let r = U3(Zo, _3(a)), l = new C7(r, t)[Symbol.asyncIterator]();
  for (; ; ) {
    let e = await l.next();
    if (e.done)
      return;
    if (e.value === U0)
      break;
  }
  let c = new G4(Zt);
  for (; ; ) {
    let o = function(u) {
      let z = [];
      for (let f of c.feed(u))
        n && z.push(Zt), (n = f === U0) || z.push(f);
      return U3(...z);
    }, [e, h] = await jx(l, r);
    if (!e)
      return;
    async function i() {
      let u = await l.next();
      if (u.done)
        throw new Error("malformed multipart-form data: unexpected end of stream");
      return u;
    }
    let n = false, d = false;
    async function v() {
      let u = await i(), z;
      if (u.value !== U0)
        z = u.value;
      else if (!n)
        z = Zt;
      else
        return d = true, { value: c.end() };
      return { value: o(z) };
    }
    let g = [{ value: o(h) }];
    for (yield { ...Wx(e), data: { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      for (; ; ) {
        let u = g.shift();
        if (!u)
          break;
        if (u.value.length > 0)
          return u;
      }
      for (; ; ) {
        if (d)
          return { done: d, value: void 0 };
        let u = await v();
        if (u.value.length > 0)
          return u;
      }
    } } }; !d; )
      g.push(await v());
  }
}
var Dx;
var Zo;
var Zt;
var yo = o1(() => {
  Ao();
  Ul();
  Dx = Function.prototype.apply.bind(U3, void 0), Zo = _3("--"), Zt = _3(`\r
`);
});
function Fo(...t) {
  return async (a) => {
    for (let r of t) {
      let l = await r(a);
      if (typeof l < "u" && l !== null)
        return l;
    }
  };
}
async function ko(t, a) {
  let r = t.headers.get("Content-Type") || "", [l, c] = r.split(/\s*;\s*boundary=/);
  if (!t.body || !c || l !== "multipart/form-data")
    throw new TypeError("Could not parse content as FormData.");
  let e = new FormData(), h = So(t.body, c);
  for await (let i of h) {
    if (i.done)
      break;
    typeof i.filename == "string" && (i.filename = i.filename.split(/[/\\]/).pop());
    let n = await a(i);
    typeof n < "u" && n !== null && e.append(i.name, n);
  }
  return e;
}
var Ro = o1(() => {
  yo();
});
var od = {};
u5(od, { AbortedDeferredError: () => S0, Action: () => n1, IDLE_BLOCKER: () => G5, IDLE_FETCHER: () => F7, IDLE_NAVIGATION: () => L7, UNSAFE_DEFERRED_SYMBOL: () => Y3, UNSAFE_DeferredData: () => B7, UNSAFE_ErrorResponseImpl: () => p5, UNSAFE_convertRouteMatchToUiMatch: () => y7, UNSAFE_convertRoutesToDataRoutes: () => Ft, UNSAFE_getResolveToMatches: () => $3, UNSAFE_invariant: () => T, UNSAFE_warning: () => G0, createBrowserHistory: () => Z7, createHashHistory: () => S7, createMemoryHistory: () => A7, createPath: () => q1, createRouter: () => Q3, createStaticHandler: () => Yl, defer: () => $4, generatePath: () => K3, getStaticContextFromError: () => Jl, getToPathname: () => eV, isDeferredData: () => id, isRouteErrorResponse: () => N1, joinPaths: () => X2, json: () => q0, matchPath: () => M0, matchRoutes: () => j1, normalizePathname: () => Yo, parsePath: () => I1, redirect: () => z5, redirectDocument: () => X4, resolvePath: () => K4, resolveTo: () => X3, stripBasename: () => K1 });
function e1() {
  return e1 = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, e1.apply(this, arguments);
}
function A7(t) {
  t === void 0 && (t = {});
  let { initialEntries: a = ["/"], initialIndex: r, v5Compat: l = false } = t, c;
  c = a.map((u, z) => d(u, typeof u == "string" ? null : u.state, z === 0 ? "default" : void 0));
  let e = n(r ?? c.length - 1), h = n1.Pop, i = null;
  function n(u) {
    return Math.min(Math.max(u, 0), c.length - 1);
  }
  function o() {
    return c[e];
  }
  function d(u, z, f) {
    z === void 0 && (z = null);
    let m = s5(c ? o().pathname : "/", u, z, f);
    return G0(m.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(u)), m;
  }
  function v(u) {
    return typeof u == "string" ? u : q1(u);
  }
  return { get index() {
    return e;
  }, get action() {
    return h;
  }, get location() {
    return o();
  }, createHref: v, createURL(u) {
    return new URL(v(u), "http://localhost");
  }, encodeLocation(u) {
    let z = typeof u == "string" ? I1(u) : u;
    return { pathname: z.pathname || "", search: z.search || "", hash: z.hash || "" };
  }, push(u, z) {
    h = n1.Push;
    let f = d(u, z);
    e += 1, c.splice(e, c.length, f), l && i && i({ action: h, location: f, delta: 1 });
  }, replace(u, z) {
    h = n1.Replace;
    let f = d(u, z);
    c[e] = f, l && i && i({ action: h, location: f, delta: 0 });
  }, go(u) {
    h = n1.Pop;
    let z = n(e + u), f = c[z];
    e = z, i && i({ action: h, location: f, delta: u });
  }, listen(u) {
    return i = u, () => {
      i = null;
    };
  } };
}
function Z7(t) {
  t === void 0 && (t = {});
  function a(l, c) {
    let { pathname: e, search: h, hash: i } = l.location;
    return s5("", { pathname: e, search: h, hash: i }, c.state && c.state.usr || null, c.state && c.state.key || "default");
  }
  function r(l, c) {
    return typeof c == "string" ? c : q1(c);
  }
  return Ko(a, r, null, t);
}
function S7(t) {
  t === void 0 && (t = {});
  function a(c, e) {
    let { pathname: h = "/", search: i = "", hash: n = "" } = I1(c.location.hash.substr(1));
    return !h.startsWith("/") && !h.startsWith(".") && (h = "/" + h), s5("", { pathname: h, search: i, hash: n }, e.state && e.state.usr || null, e.state && e.state.key || "default");
  }
  function r(c, e) {
    let h = c.document.querySelector("base"), i = "";
    if (h && h.getAttribute("href")) {
      let n = c.location.href, o = n.indexOf("#");
      i = o === -1 ? n : n.slice(0, o);
    }
    return i + "#" + (typeof e == "string" ? e : q1(e));
  }
  function l(c, e) {
    G0(c.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(e) + ")");
  }
  return Ko(a, r, l, t);
}
function T(t, a) {
  if (t === false || t === null || typeof t > "u")
    throw new Error(a);
}
function G0(t, a) {
  if (!t) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function Nx() {
  return Math.random().toString(36).substr(2, 8);
}
function Po(t, a) {
  return { usr: t.state, key: t.key, idx: a };
}
function s5(t, a, r, l) {
  return r === void 0 && (r = null), e1({ pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" }, typeof a == "string" ? I1(a) : a, { state: r, key: a && a.key || l || Nx() });
}
function q1(t) {
  let { pathname: a = "/", search: r = "", hash: l = "" } = t;
  return r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r), l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l), a;
}
function I1(t) {
  let a = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && (a.hash = t.substr(r), t = t.substr(0, r));
    let l = t.indexOf("?");
    l >= 0 && (a.search = t.substr(l), t = t.substr(0, l)), t && (a.pathname = t);
  }
  return a;
}
function Ko(t, a, r, l) {
  l === void 0 && (l = {});
  let { window: c = document.defaultView, v5Compat: e = false } = l, h = c.history, i = n1.Pop, n = null, o = d();
  o == null && (o = 0, h.replaceState(e1({}, h.state, { idx: o }), ""));
  function d() {
    return (h.state || { idx: null }).idx;
  }
  function v() {
    i = n1.Pop;
    let m = d(), p = m == null ? null : m - o;
    o = m, n && n({ action: i, location: f.location, delta: p });
  }
  function g(m, p) {
    i = n1.Push;
    let s = s5(f.location, m, p);
    r && r(s, m), o = d() + 1;
    let M = Po(s, o), x = f.createHref(s);
    try {
      h.pushState(M, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
      c.location.assign(x);
    }
    e && n && n({ action: i, location: f.location, delta: 1 });
  }
  function u(m, p) {
    i = n1.Replace;
    let s = s5(f.location, m, p);
    r && r(s, m), o = d();
    let M = Po(s, o), x = f.createHref(s);
    h.replaceState(M, "", x), e && n && n({ action: i, location: f.location, delta: 0 });
  }
  function z(m) {
    let p = c.location.origin !== "null" ? c.location.origin : c.location.href, s = typeof m == "string" ? m : q1(m);
    return s = s.replace(/ $/, "%20"), T(p, "No window.location.(origin|href) available to create URL for href: " + s), new URL(s, p);
  }
  let f = { get action() {
    return i;
  }, get location() {
    return t(c, h);
  }, listen(m) {
    if (n)
      throw new Error("A history only accepts one active listener");
    return c.addEventListener(Oo, v), n = m, () => {
      c.removeEventListener(Oo, v), n = null;
    };
  }, createHref(m) {
    return a(c, m);
  }, createURL: z, encodeLocation(m) {
    let p = z(m);
    return { pathname: p.pathname, search: p.search, hash: p.hash };
  }, push: g, replace: u, go(m) {
    return h.go(m);
  } };
  return f;
}
function Ux(t) {
  return t.index === true;
}
function Ft(t, a, r, l) {
  return r === void 0 && (r = []), l === void 0 && (l = {}), t.map((c, e) => {
    let h = [...r, e], i = typeof c.id == "string" ? c.id : h.join("-");
    if (T(c.index !== true || !c.children, "Cannot specify children on an index route"), T(!l[i], 'Found a route id collision on id "' + i + `".  Route id's must be globally unique within Data Router usages`), Ux(c)) {
      let n = e1({}, c, a(c), { id: i });
      return l[i] = n, n;
    } else {
      let n = e1({}, c, a(c), { id: i, children: void 0 });
      return l[i] = n, c.children && (n.children = Ft(c.children, a, h, l)), n;
    }
  });
}
function j1(t, a, r) {
  r === void 0 && (r = "/");
  let l = typeof a == "string" ? I1(a) : a, c = K1(l.pathname || "/", r);
  if (c == null)
    return null;
  let e = $o(t);
  Gx(e);
  let h = null;
  for (let i = 0; h == null && i < e.length; ++i) {
    let n = lV(c);
    h = aV(e[i], n);
  }
  return h;
}
function y7(t, a) {
  let { route: r, pathname: l, params: c } = t;
  return { id: r.id, pathname: l, params: c, data: a[r.id], handle: r.handle };
}
function $o(t, a, r, l) {
  a === void 0 && (a = []), r === void 0 && (r = []), l === void 0 && (l = "");
  let c = (e, h, i) => {
    let n = { relativePath: i === void 0 ? e.path || "" : i, caseSensitive: e.caseSensitive === true, childrenIndex: h, route: e };
    n.relativePath.startsWith("/") && (T(n.relativePath.startsWith(l), 'Absolute route path "' + n.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), n.relativePath = n.relativePath.slice(l.length));
    let o = X2([l, n.relativePath]), d = r.concat(n);
    e.children && e.children.length > 0 && (T(e.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + o + '".')), $o(e.children, a, d, o)), !(e.path == null && !e.index) && a.push({ path: o, score: Jx(o, e.index), routesMeta: d });
  };
  return t.forEach((e, h) => {
    var i;
    if (e.path === "" || !((i = e.path) != null && i.includes("?")))
      c(e, h);
    else
      for (let n of Xo(e.path))
        c(e, h, n);
  }), a;
}
function Xo(t) {
  let a = t.split("/");
  if (a.length === 0)
    return [];
  let [r, ...l] = a, c = r.endsWith("?"), e = r.replace(/\?$/, "");
  if (l.length === 0)
    return c ? [e, ""] : [e];
  let h = Xo(l.join("/")), i = [];
  return i.push(...h.map((n) => n === "" ? e : [e, n].join("/"))), c && i.push(...h), i.map((n) => t.startsWith("/") && n === "" ? "/" : n);
}
function Gx(t) {
  t.sort((a, r) => a.score !== r.score ? r.score - a.score : tV(a.routesMeta.map((l) => l.childrenIndex), r.routesMeta.map((l) => l.childrenIndex)));
}
function Jx(t, a) {
  let r = t.split("/"), l = r.length;
  return r.some(Eo) && (l += Yx), a && (l += $x), r.filter((c) => !Eo(c)).reduce((c, e) => c + (qx.test(e) ? Kx : e === "" ? Xx : Qx), l);
}
function tV(t, a) {
  return t.length === a.length && t.slice(0, -1).every((l, c) => l === a[c]) ? t[t.length - 1] - a[a.length - 1] : 0;
}
function aV(t, a) {
  let { routesMeta: r } = t, l = {}, c = "/", e = [];
  for (let h = 0; h < r.length; ++h) {
    let i = r[h], n = h === r.length - 1, o = c === "/" ? a : a.slice(c.length) || "/", d = M0({ path: i.relativePath, caseSensitive: i.caseSensitive, end: n }, o);
    if (!d)
      return null;
    Object.assign(l, d.params);
    let v = i.route;
    e.push({ params: l, pathname: X2([c, d.pathname]), pathnameBase: Yo(X2([c, d.pathnameBase])), route: v }), d.pathnameBase !== "/" && (c = X2([c, d.pathnameBase]));
  }
  return e;
}
function K3(t, a) {
  a === void 0 && (a = {});
  let r = t;
  r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (G0(false, 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')), r = r.replace(/\*$/, "/*"));
  let l = r.startsWith("/") ? "/" : "", c = (h) => h == null ? "" : typeof h == "string" ? h : String(h), e = r.split(/\/+/).map((h, i, n) => {
    if (i === n.length - 1 && h === "*")
      return c(a["*"]);
    let d = h.match(/^:([\w-]+)(\??)$/);
    if (d) {
      let [, v, g] = d, u = a[v];
      return T(g === "?" || u != null, 'Missing ":' + v + '" param'), c(u);
    }
    return h.replace(/\?$/g, "");
  }).filter((h) => !!h);
  return l + e.join("/");
}
function M0(t, a) {
  typeof t == "string" && (t = { path: t, caseSensitive: false, end: true });
  let [r, l] = rV(t.path, t.caseSensitive, t.end), c = a.match(r);
  if (!c)
    return null;
  let e = c[0], h = e.replace(/(.)\/+$/, "$1"), i = c.slice(1);
  return { params: l.reduce((o, d, v) => {
    let { paramName: g, isOptional: u } = d;
    if (g === "*") {
      let f = i[v] || "";
      h = e.slice(0, e.length - f.length).replace(/(.)\/+$/, "$1");
    }
    let z = i[v];
    return u && !z ? o[g] = void 0 : o[g] = (z || "").replace(/%2F/g, "/"), o;
  }, {}), pathname: e, pathnameBase: h, pattern: t };
}
function rV(t, a, r) {
  a === void 0 && (a = false), r === void 0 && (r = true), G0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let l = [], c = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, i, n) => (l.push({ paramName: i, isOptional: n != null }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (l.push({ paramName: "*" }), c += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? c += "\\/*$" : t !== "" && t !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, a ? void 0 : "i"), l];
}
function lV(t) {
  try {
    return t.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return G0(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + a + ").")), t;
  }
}
function K1(t, a) {
  if (a === "/")
    return t;
  if (!t.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let r = a.endsWith("/") ? a.length - 1 : a.length, l = t.charAt(r);
  return l && l !== "/" ? null : t.slice(r) || "/";
}
function K4(t, a) {
  a === void 0 && (a = "/");
  let { pathname: r, search: l = "", hash: c = "" } = typeof t == "string" ? I1(t) : t;
  return { pathname: r ? r.startsWith("/") ? r : cV(r, a) : a, search: hV(l), hash: iV(c) };
}
function cV(t, a) {
  let r = a.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((c) => {
    c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
  }), r.length > 1 ? r.join("/") : "/";
}
function ql(t, a, r, l) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + a + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Qo(t) {
  return t.filter((a, r) => r === 0 || a.route.path && a.route.path.length > 0);
}
function $3(t, a) {
  let r = Qo(t);
  return a ? r.map((l, c) => c === t.length - 1 ? l.pathname : l.pathnameBase) : r.map((l) => l.pathnameBase);
}
function X3(t, a, r, l) {
  l === void 0 && (l = false);
  let c;
  typeof t == "string" ? c = I1(t) : (c = e1({}, t), T(!c.pathname || !c.pathname.includes("?"), ql("?", "pathname", "search", c)), T(!c.pathname || !c.pathname.includes("#"), ql("#", "pathname", "hash", c)), T(!c.search || !c.search.includes("#"), ql("#", "search", "hash", c)));
  let e = t === "" || c.pathname === "", h = e ? "/" : c.pathname, i;
  if (h == null)
    i = r;
  else {
    let v = a.length - 1;
    if (!l && h.startsWith("..")) {
      let g = h.split("/");
      for (; g[0] === ".."; )
        g.shift(), v -= 1;
      c.pathname = g.join("/");
    }
    i = v >= 0 ? a[v] : "/";
  }
  let n = K4(c, i), o = h && h !== "/" && h.endsWith("/"), d = (e || h === ".") && r.endsWith("/");
  return !n.pathname.endsWith("/") && (o || d) && (n.pathname += "/"), n;
}
function eV(t) {
  return t === "" || t.pathname === "" ? "/" : typeof t == "string" ? I1(t).pathname : t.pathname;
}
function nV(t) {
  return t instanceof Promise && t._tracked === true;
}
function oV(t) {
  if (!nV(t))
    return t;
  if (t._error)
    throw t._error;
  return t._data;
}
function N1(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
function Q3(t) {
  let a = t.window ? t.window : typeof window < "u" ? window : void 0, r = typeof a < "u" && typeof a.document < "u" && typeof a.document.createElement < "u", l = !r;
  T(t.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let c;
  if (t.mapRouteProperties)
    c = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let V = t.detectErrorBoundary;
    c = (B) => ({ hasErrorBoundary: V(B) });
  } else
    c = ad;
  let e = {}, h = Ft(t.routes, c, void 0, e), i, n = t.basename || "/", o = e1({ v7_fetcherPersist: false, v7_normalizeFormMethod: false, v7_partialHydration: false, v7_prependBasename: false, v7_relativeSplatPath: false }, t.future), d = null, v = /* @__PURE__ */ new Set(), g = null, u = null, z = null, f = t.hydrationData != null, m = j1(h, t.history.location, n), p = null;
  if (m == null) {
    let V = E1(404, { pathname: t.history.location.pathname }), { matches: B, route: A } = w7(h);
    m = B, p = { [A.id]: V };
  }
  let s, M = m.some((V) => V.route.lazy), x = m.some((V) => V.route.loader);
  if (M)
    s = false;
  else if (!x)
    s = true;
  else if (o.v7_partialHydration) {
    let V = t.hydrationData ? t.hydrationData.loaderData : null, B = t.hydrationData ? t.hydrationData.errors : null;
    s = m.every((A) => A.route.loader && A.route.loader.hydrate !== true && (V && V[A.route.id] !== void 0 || B && B[A.route.id] !== void 0));
  } else
    s = t.hydrationData != null;
  let C, H = { historyAction: t.history.action, location: t.history.location, matches: m, initialized: s, navigation: L7, restoreScrollPosition: t.hydrationData != null ? false : null, preventScrollReset: false, revalidation: "idle", loaderData: t.hydrationData && t.hydrationData.loaderData || {}, actionData: t.hydrationData && t.hydrationData.actionData || null, errors: t.hydrationData && t.hydrationData.errors || p, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, L = n1.Pop, w = false, S, P = false, q = /* @__PURE__ */ new Map(), d1 = null, l1 = false, v1 = false, Z0 = [], k1 = [], g1 = /* @__PURE__ */ new Map(), j0 = 0, g0 = -1, g5 = /* @__PURE__ */ new Map(), c1 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Map(), W5 = /* @__PURE__ */ new Map(), s0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Map(), $2 = /* @__PURE__ */ new Map(), E3 = false;
  function Pl() {
    if (d = t.history.listen((V) => {
      let { action: B, location: A, delta: R } = V;
      if (E3) {
        E3 = false;
        return;
      }
      G0($2.size === 0 || R != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let D = so({ currentLocation: H.location, nextLocation: A, historyAction: B });
      if (D && R != null) {
        E3 = true, t.history.go(R * -1), p7(D, { state: "blocked", location: A, proceed() {
          p7(D, { state: "proceeding", proceed: void 0, reset: void 0, location: A }), t.history.go(R);
        }, reset() {
          let Y = new Map(H.blockers);
          Y.set(D, G5), P1({ blockers: Y });
        } });
        return;
      }
      return _4(B, A);
    }), r) {
      VV(a, q);
      let V = () => CV(a, q);
      a.addEventListener("pagehide", V), d1 = () => a.removeEventListener("pagehide", V);
    }
    return H.initialized || _4(n1.Pop, H.location, { initialHydration: true }), C;
  }
  function Bt() {
    d && d(), d1 && d1(), v.clear(), S && S.abort(), H.fetchers.forEach((V, B) => s7(B)), H.blockers.forEach((V, B) => uo(B));
  }
  function I3(V) {
    return v.add(V), () => v.delete(V);
  }
  function P1(V, B) {
    B === void 0 && (B = {}), H = e1({}, H, V);
    let A = [], R = [];
    o.v7_fetcherPersist && H.fetchers.forEach((D, Y) => {
      D.state === "idle" && (s0.has(Y) ? R.push(Y) : A.push(Y));
    }), [...v].forEach((D) => D(H, { deletedFetchers: R, unstable_viewTransitionOpts: B.viewTransitionOpts, unstable_flushSync: B.flushSync === true })), o.v7_fetcherPersist && (A.forEach((D) => H.fetchers.delete(D)), R.forEach((D) => s7(D)));
  }
  function b3(V, B, A) {
    var R, D;
    let { flushSync: Y } = A === void 0 ? {} : A, U = H.actionData != null && H.navigation.formMethod != null && z0(H.navigation.formMethod) && H.navigation.state === "loading" && ((R = V.state) == null ? void 0 : R._isRedirect) !== true, N;
    B.actionData ? Object.keys(B.actionData).length > 0 ? N = B.actionData : N = null : U ? N = H.actionData : N = null;
    let j = B.loaderData ? _o(H.loaderData, B.loaderData, B.matches || [], B.errors) : H.loaderData, a1 = H.blockers;
    a1.size > 0 && (a1 = new Map(a1), a1.forEach((z1, l2) => a1.set(l2, G5)));
    let Q1 = w === true || H.navigation.formMethod != null && z0(H.navigation.formMethod) && ((D = V.state) == null ? void 0 : D._isRedirect) !== true;
    i && (h = i, i = void 0), l1 || L === n1.Pop || (L === n1.Push ? t.history.push(V, V.state) : L === n1.Replace && t.history.replace(V, V.state));
    let K;
    if (L === n1.Pop) {
      let z1 = q.get(H.location.pathname);
      z1 && z1.has(V.pathname) ? K = { currentLocation: H.location, nextLocation: V } : q.has(V.pathname) && (K = { currentLocation: V, nextLocation: H.location });
    } else if (P) {
      let z1 = q.get(H.location.pathname);
      z1 ? z1.add(V.pathname) : (z1 = /* @__PURE__ */ new Set([V.pathname]), q.set(H.location.pathname, z1)), K = { currentLocation: H.location, nextLocation: V };
    }
    P1(e1({}, B, { actionData: N, loaderData: j, historyAction: L, location: V, initialized: true, navigation: L7, revalidation: "idle", restoreScrollPosition: zo(V, B.matches || H.matches), preventScrollReset: Q1, blockers: a1 }), { viewTransitionOpts: K, flushSync: Y === true }), L = n1.Pop, w = false, P = false, l1 = false, v1 = false, Z0 = [], k1 = [];
  }
  async function ho(V, B) {
    if (typeof V == "number") {
      t.history.go(V);
      return;
    }
    let A = $l(H.location, H.matches, n, o.v7_prependBasename, V, o.v7_relativeSplatPath, B?.fromRouteId, B?.relative), { path: R, submission: D, error: Y } = bo(o.v7_normalizeFormMethod, false, A, B), U = H.location, N = s5(H.location, R, B && B.state);
    N = e1({}, N, t.history.encodeLocation(N));
    let j = B && B.replace != null ? B.replace : void 0, a1 = n1.Push;
    j === true ? a1 = n1.Replace : j === false || D != null && z0(D.formMethod) && D.formAction === H.location.pathname + H.location.search && (a1 = n1.Replace);
    let Q1 = B && "preventScrollReset" in B ? B.preventScrollReset === true : void 0, K = (B && B.unstable_flushSync) === true, z1 = so({ currentLocation: U, nextLocation: N, historyAction: a1 });
    if (z1) {
      p7(z1, { state: "blocked", location: N, proceed() {
        p7(z1, { state: "proceeding", proceed: void 0, reset: void 0, location: N }), ho(V, B);
      }, reset() {
        let l2 = new Map(H.blockers);
        l2.set(z1, G5), P1({ blockers: l2 });
      } });
      return;
    }
    return await _4(a1, N, { submission: D, pendingError: Y, preventScrollReset: Q1, replace: B && B.replace, enableViewTransition: B && B.unstable_viewTransition, flushSync: K });
  }
  function nx() {
    if (El(), P1({ revalidation: "loading" }), H.navigation.state !== "submitting") {
      if (H.navigation.state === "idle") {
        _4(H.historyAction, H.location, { startUninterruptedRevalidation: true });
        return;
      }
      _4(L || H.historyAction, H.navigation.location, { overrideNavigation: H.navigation });
    }
  }
  async function _4(V, B, A) {
    S && S.abort(), S = null, L = V, l1 = (A && A.startUninterruptedRevalidation) === true, Mx(H.location, H.matches), w = (A && A.preventScrollReset) === true, P = (A && A.enableViewTransition) === true;
    let R = i || h, D = A && A.overrideNavigation, Y = j1(R, B, n), U = (A && A.flushSync) === true;
    if (!Y) {
      let l2 = E1(404, { pathname: B.pathname }), { matches: p0, route: Y1 } = w7(R);
      Il(), b3(B, { matches: p0, loaderData: {}, errors: { [Y1.id]: l2 } }, { flushSync: U });
      return;
    }
    if (H.initialized && !v1 && MV(H.location, B) && !(A && A.submission && z0(A.submission.formMethod))) {
      b3(B, { matches: Y }, { flushSync: U });
      return;
    }
    S = new AbortController();
    let N = St(t.history, B, S.signal, A && A.submission), j, a1;
    if (A && A.pendingError)
      a1 = { [G3(Y).route.id]: A.pendingError };
    else if (A && A.submission && z0(A.submission.formMethod)) {
      let l2 = await ox(N, B, A.submission, Y, { replace: A.replace, flushSync: U });
      if (l2.shortCircuited)
        return;
      j = l2.pendingActionData, a1 = l2.pendingActionError, D = Kl(B, A.submission), U = false, N = new Request(N.url, { signal: N.signal });
    }
    let { shortCircuited: Q1, loaderData: K, errors: z1 } = await dx(N, B, Y, D, A && A.submission, A && A.fetcherSubmission, A && A.replace, A && A.initialHydration === true, U, j, a1);
    Q1 || (S = null, b3(B, e1({ matches: Y }, j ? { actionData: j } : {}, { loaderData: K, errors: z1 })));
  }
  async function ox(V, B, A, R, D) {
    D === void 0 && (D = {}), El();
    let Y = mV(B, A);
    P1({ navigation: Y }, { flushSync: D.flushSync === true });
    let U, N = kt(R, B);
    if (!N.route.action && !N.route.lazy)
      U = { type: p1.error, error: E1(405, { method: V.method, pathname: B.pathname, routeId: N.route.id }) };
    else if (U = await q4("action", V, N, R, e, c, n, o.v7_relativeSplatPath), V.signal.aborted)
      return { shortCircuited: true };
    if ($5(U)) {
      let j;
      return D && D.replace != null ? j = D.replace : j = U.location === H.location.pathname + H.location.search, await wt(H, U, { submission: A, replace: j }), { shortCircuited: true };
    }
    if (K5(U)) {
      let j = G3(R, N.route.id);
      return (D && D.replace) !== true && (L = n1.Push), { pendingActionData: {}, pendingActionError: { [j.route.id]: U.error } };
    }
    if (q5(U))
      throw E1(400, { type: "defer-action" });
    return { pendingActionData: { [N.route.id]: U.data } };
  }
  async function dx(V, B, A, R, D, Y, U, N, j, a1, Q1) {
    let K = R || Kl(B, D), z1 = D || Y || qo(K), l2 = i || h, [p0, Y1] = Do(t.history, H, A, z1, B, o.v7_partialHydration && N === true, v1, Z0, k1, s0, u0, c1, l2, n, a1, Q1);
    if (Il((s1) => !(A && A.some((B1) => B1.route.id === s1)) || p0 && p0.some((B1) => B1.route.id === s1)), g0 = ++j0, p0.length === 0 && Y1.length === 0) {
      let s1 = vo();
      return b3(B, e1({ matches: A, loaderData: {}, errors: Q1 || null }, a1 ? { actionData: a1 } : {}, s1 ? { fetchers: new Map(H.fetchers) } : {}), { flushSync: j }), { shortCircuited: true };
    }
    if (!l1 && (!o.v7_partialHydration || !N)) {
      Y1.forEach((B1) => {
        let _0 = H.fetchers.get(B1.key), M7 = yt(void 0, _0 ? _0.data : void 0);
        H.fetchers.set(B1.key, M7);
      });
      let s1 = a1 || H.actionData;
      P1(e1({ navigation: K }, s1 ? Object.keys(s1).length === 0 ? { actionData: null } : { actionData: s1 } : {}, Y1.length > 0 ? { fetchers: new Map(H.fetchers) } : {}), { flushSync: j });
    }
    Y1.forEach((s1) => {
      g1.has(s1.key) && N5(s1.key), s1.controller && g1.set(s1.key, s1.controller);
    });
    let D3 = () => Y1.forEach((s1) => N5(s1.key));
    S && S.signal.addEventListener("abort", D3);
    let { results: bl, loaderResults: T3, fetcherResults: _5 } = await io(H.matches, A, p0, Y1, V);
    if (V.signal.aborted)
      return { shortCircuited: true };
    S && S.signal.removeEventListener("abort", D3), Y1.forEach((s1) => g1.delete(s1.key));
    let U4 = Uo(bl);
    if (U4) {
      if (U4.idx >= p0.length) {
        let s1 = Y1[U4.idx - p0.length].key;
        c1.add(s1);
      }
      return await wt(H, U4.result, { replace: U }), { shortCircuited: true };
    }
    let { loaderData: Dl, errors: Tl } = No(H, A, p0, T3, Q1, Y1, _5, N0);
    N0.forEach((s1, B1) => {
      s1.subscribe((_0) => {
        (_0 || s1.done) && N0.delete(B1);
      });
    });
    let Wl = vo(), W3 = go(g0), z7 = Wl || W3 || Y1.length > 0;
    return e1({ loaderData: Dl, errors: Tl }, z7 ? { fetchers: new Map(H.fetchers) } : {});
  }
  function vx(V, B, A, R) {
    if (l)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    g1.has(V) && N5(V);
    let D = (R && R.unstable_flushSync) === true, Y = i || h, U = $l(H.location, H.matches, n, o.v7_prependBasename, A, o.v7_relativeSplatPath, B, R?.relative), N = j1(Y, U, n);
    if (!N) {
      At(V, B, E1(404, { pathname: U }), { flushSync: D });
      return;
    }
    let { path: j, submission: a1, error: Q1 } = bo(o.v7_normalizeFormMethod, true, U, R);
    if (Q1) {
      At(V, B, Q1, { flushSync: D });
      return;
    }
    let K = kt(N, j);
    if (w = (R && R.preventScrollReset) === true, a1 && z0(a1.formMethod)) {
      gx(V, B, j, K, N, D, a1);
      return;
    }
    u0.set(V, { routeId: B, path: j }), ux(V, B, j, K, N, D, a1);
  }
  async function gx(V, B, A, R, D, Y, U) {
    if (El(), u0.delete(V), !R.route.action && !R.route.lazy) {
      let B1 = E1(405, { method: U.formMethod, pathname: A, routeId: B });
      At(V, B, B1, { flushSync: Y });
      return;
    }
    let N = H.fetchers.get(V);
    j5(V, xV(U, N), { flushSync: Y });
    let j = new AbortController(), a1 = St(t.history, A, j.signal, U);
    g1.set(V, j);
    let Q1 = j0, K = await q4("action", a1, R, D, e, c, n, o.v7_relativeSplatPath);
    if (a1.signal.aborted) {
      g1.get(V) === j && g1.delete(V);
      return;
    }
    if (o.v7_fetcherPersist && s0.has(V)) {
      if ($5(K) || K5(K)) {
        j5(V, U5(void 0));
        return;
      }
    } else {
      if ($5(K))
        if (g1.delete(V), g0 > Q1) {
          j5(V, U5(void 0));
          return;
        } else
          return c1.add(V), j5(V, yt(U)), wt(H, K, { fetcherSubmission: U });
      if (K5(K)) {
        At(V, B, K.error);
        return;
      }
    }
    if (q5(K))
      throw E1(400, { type: "defer-action" });
    let z1 = H.navigation.location || H.location, l2 = St(t.history, z1, j.signal), p0 = i || h, Y1 = H.navigation.state !== "idle" ? j1(p0, H.navigation.location, n) : H.matches;
    T(Y1, "Didn't find any matches after fetcher action");
    let D3 = ++j0;
    g5.set(V, D3);
    let bl = yt(U, K.data);
    H.fetchers.set(V, bl);
    let [T3, _5] = Do(t.history, H, Y1, U, z1, false, v1, Z0, k1, s0, u0, c1, p0, n, { [R.route.id]: K.data }, void 0);
    _5.filter((B1) => B1.key !== V).forEach((B1) => {
      let _0 = B1.key, M7 = H.fetchers.get(_0), Hx = yt(void 0, M7 ? M7.data : void 0);
      H.fetchers.set(_0, Hx), g1.has(_0) && N5(_0), B1.controller && g1.set(_0, B1.controller);
    }), P1({ fetchers: new Map(H.fetchers) });
    let U4 = () => _5.forEach((B1) => N5(B1.key));
    j.signal.addEventListener("abort", U4);
    let { results: Dl, loaderResults: Tl, fetcherResults: Wl } = await io(H.matches, Y1, T3, _5, l2);
    if (j.signal.aborted)
      return;
    j.signal.removeEventListener("abort", U4), g5.delete(V), g1.delete(V), _5.forEach((B1) => g1.delete(B1.key));
    let W3 = Uo(Dl);
    if (W3) {
      if (W3.idx >= T3.length) {
        let B1 = _5[W3.idx - T3.length].key;
        c1.add(B1);
      }
      return wt(H, W3.result);
    }
    let { loaderData: z7, errors: s1 } = No(H, H.matches, T3, Tl, void 0, _5, Wl, N0);
    if (H.fetchers.has(V)) {
      let B1 = U5(K.data);
      H.fetchers.set(V, B1);
    }
    go(D3), H.navigation.state === "loading" && D3 > g0 ? (T(L, "Expected pending action"), S && S.abort(), b3(H.navigation.location, { matches: Y1, loaderData: z7, errors: s1, fetchers: new Map(H.fetchers) })) : (P1({ errors: s1, loaderData: _o(H.loaderData, z7, Y1, s1), fetchers: new Map(H.fetchers) }), v1 = false);
  }
  async function ux(V, B, A, R, D, Y, U) {
    let N = H.fetchers.get(V);
    j5(V, yt(U, N ? N.data : void 0), { flushSync: Y });
    let j = new AbortController(), a1 = St(t.history, A, j.signal);
    g1.set(V, j);
    let Q1 = j0, K = await q4("loader", a1, R, D, e, c, n, o.v7_relativeSplatPath);
    if (q5(K) && (K = await nd(K, a1.signal, true) || K), g1.get(V) === j && g1.delete(V), !a1.signal.aborted) {
      if (s0.has(V)) {
        j5(V, U5(void 0));
        return;
      }
      if ($5(K))
        if (g0 > Q1) {
          j5(V, U5(void 0));
          return;
        } else {
          c1.add(V), await wt(H, K);
          return;
        }
      if (K5(K)) {
        At(V, B, K.error);
        return;
      }
      T(!q5(K), "Unhandled fetcher deferred data"), j5(V, U5(K.data));
    }
  }
  async function wt(V, B, A) {
    let { submission: R, fetcherSubmission: D, replace: Y } = A === void 0 ? {} : A;
    B.revalidate && (v1 = true);
    let U = s5(V.location, B.location, { _isRedirect: true });
    if (T(U, "Expected a location on the redirect navigation"), r) {
      let z1 = false;
      if (B.reloadDocument)
        z1 = true;
      else if (td.test(B.location)) {
        let l2 = t.history.createURL(B.location);
        z1 = l2.origin !== a.location.origin || K1(l2.pathname, n) == null;
      }
      if (z1) {
        Y ? a.location.replace(B.location) : a.location.assign(B.location);
        return;
      }
    }
    S = null;
    let N = Y === true ? n1.Replace : n1.Push, { formMethod: j, formAction: a1, formEncType: Q1 } = V.navigation;
    !R && !D && j && a1 && Q1 && (R = qo(V.navigation));
    let K = R || D;
    if (sV.has(B.status) && K && z0(K.formMethod))
      await _4(N, U, { submission: e1({}, K, { formAction: B.location }), preventScrollReset: w });
    else {
      let z1 = Kl(U, R);
      await _4(N, U, { overrideNavigation: z1, fetcherSubmission: D, preventScrollReset: w });
    }
  }
  async function io(V, B, A, R, D) {
    let Y = await Promise.all([...A.map((j) => q4("loader", D, j, B, e, c, n, o.v7_relativeSplatPath)), ...R.map((j) => j.matches && j.match && j.controller ? q4("loader", St(t.history, j.path, j.controller.signal), j.match, j.matches, e, c, n, o.v7_relativeSplatPath) : { type: p1.error, error: E1(404, { pathname: j.path }) })]), U = Y.slice(0, A.length), N = Y.slice(A.length);
    return await Promise.all([Go(V, A, U, U.map(() => D.signal), false, H.loaderData), Go(V, R.map((j) => j.match), N, R.map((j) => j.controller ? j.controller.signal : null), true)]), { results: Y, loaderResults: U, fetcherResults: N };
  }
  function El() {
    v1 = true, Z0.push(...Il()), u0.forEach((V, B) => {
      g1.has(B) && (k1.push(B), N5(B));
    });
  }
  function j5(V, B, A) {
    A === void 0 && (A = {}), H.fetchers.set(V, B), P1({ fetchers: new Map(H.fetchers) }, { flushSync: (A && A.flushSync) === true });
  }
  function At(V, B, A, R) {
    R === void 0 && (R = {});
    let D = G3(H.matches, B);
    s7(V), P1({ errors: { [D.route.id]: A }, fetchers: new Map(H.fetchers) }, { flushSync: (R && R.flushSync) === true });
  }
  function no(V) {
    return o.v7_fetcherPersist && (W5.set(V, (W5.get(V) || 0) + 1), s0.has(V) && s0.delete(V)), H.fetchers.get(V) || F7;
  }
  function s7(V) {
    let B = H.fetchers.get(V);
    g1.has(V) && !(B && B.state === "loading" && g5.has(V)) && N5(V), u0.delete(V), g5.delete(V), c1.delete(V), s0.delete(V), H.fetchers.delete(V);
  }
  function sx(V) {
    if (o.v7_fetcherPersist) {
      let B = (W5.get(V) || 0) - 1;
      B <= 0 ? (W5.delete(V), s0.add(V)) : W5.set(V, B);
    } else
      s7(V);
    P1({ fetchers: new Map(H.fetchers) });
  }
  function N5(V) {
    let B = g1.get(V);
    T(B, "Expected fetch controller: " + V), B.abort(), g1.delete(V);
  }
  function oo(V) {
    for (let B of V) {
      let A = no(B), R = U5(A.data);
      H.fetchers.set(B, R);
    }
  }
  function vo() {
    let V = [], B = false;
    for (let A of c1) {
      let R = H.fetchers.get(A);
      T(R, "Expected fetcher: " + A), R.state === "loading" && (c1.delete(A), V.push(A), B = true);
    }
    return oo(V), B;
  }
  function go(V) {
    let B = [];
    for (let [A, R] of g5)
      if (R < V) {
        let D = H.fetchers.get(A);
        T(D, "Expected fetcher: " + A), D.state === "loading" && (N5(A), g5.delete(A), B.push(A));
      }
    return oo(B), B.length > 0;
  }
  function px(V, B) {
    let A = H.blockers.get(V) || G5;
    return $2.get(V) !== B && $2.set(V, B), A;
  }
  function uo(V) {
    H.blockers.delete(V), $2.delete(V);
  }
  function p7(V, B) {
    let A = H.blockers.get(V) || G5;
    T(A.state === "unblocked" && B.state === "blocked" || A.state === "blocked" && B.state === "blocked" || A.state === "blocked" && B.state === "proceeding" || A.state === "blocked" && B.state === "unblocked" || A.state === "proceeding" && B.state === "unblocked", "Invalid blocker state transition: " + A.state + " -> " + B.state);
    let R = new Map(H.blockers);
    R.set(V, B), P1({ blockers: R });
  }
  function so(V) {
    let { currentLocation: B, nextLocation: A, historyAction: R } = V;
    if ($2.size === 0)
      return;
    $2.size > 1 && G0(false, "A router only supports one blocker at a time");
    let D = Array.from($2.entries()), [Y, U] = D[D.length - 1], N = H.blockers.get(Y);
    if (!(N && N.state === "proceeding") && U({ currentLocation: B, nextLocation: A, historyAction: R }))
      return Y;
  }
  function Il(V) {
    let B = [];
    return N0.forEach((A, R) => {
      (!V || V(R)) && (A.cancel(), B.push(R), N0.delete(R));
    }), B;
  }
  function zx(V, B, A) {
    if (g = V, z = B, u = A || null, !f && H.navigation === L7) {
      f = true;
      let R = zo(H.location, H.matches);
      R != null && P1({ restoreScrollPosition: R });
    }
    return () => {
      g = null, z = null, u = null;
    };
  }
  function po(V, B) {
    return u && u(V, B.map((R) => y7(R, H.loaderData))) || V.key;
  }
  function Mx(V, B) {
    if (g && z) {
      let A = po(V, B);
      g[A] = z();
    }
  }
  function zo(V, B) {
    if (g) {
      let A = po(V, B), R = g[A];
      if (typeof R == "number")
        return R;
    }
    return null;
  }
  function fx(V) {
    e = {}, i = Ft(V, c, void 0, e);
  }
  return C = { get basename() {
    return n;
  }, get future() {
    return o;
  }, get state() {
    return H;
  }, get routes() {
    return h;
  }, get window() {
    return a;
  }, initialize: Pl, subscribe: I3, enableScrollRestoration: zx, navigate: ho, fetch: vx, revalidate: nx, createHref: (V) => t.history.createHref(V), encodeLocation: (V) => t.history.encodeLocation(V), getFetcher: no, deleteFetcher: sx, dispose: Bt, getBlocker: px, deleteBlocker: uo, _internalFetchControllers: g1, _internalActiveDeferreds: N0, _internalSetRoutes: fx }, C;
}
function Yl(t, a) {
  T(t.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let r = {}, l = (a ? a.basename : null) || "/", c;
  if (a != null && a.mapRouteProperties)
    c = a.mapRouteProperties;
  else if (a != null && a.detectErrorBoundary) {
    let g = a.detectErrorBoundary;
    c = (u) => ({ hasErrorBoundary: g(u) });
  } else
    c = ad;
  let e = e1({ v7_relativeSplatPath: false, v7_throwAbortReason: false }, a ? a.future : null), h = Ft(t, c, void 0, r);
  async function i(g, u) {
    let { requestContext: z } = u === void 0 ? {} : u, f = new URL(g.url), m = g.method, p = s5("", q1(f), null, "default"), s = j1(h, p, l);
    if (!Ql(m) && m !== "HEAD") {
      let x = E1(405, { method: m }), { matches: C, route: H } = w7(h);
      return { basename: l, location: p, matches: C, loaderData: {}, actionData: null, errors: { [H.id]: x }, statusCode: x.status, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    } else if (!s) {
      let x = E1(404, { pathname: p.pathname }), { matches: C, route: H } = w7(h);
      return { basename: l, location: p, matches: C, loaderData: {}, actionData: null, errors: { [H.id]: x }, statusCode: x.status, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    }
    let M = await o(g, p, s, z);
    return q3(M) ? M : e1({ location: p, basename: l }, M);
  }
  async function n(g, u) {
    let { routeId: z, requestContext: f } = u === void 0 ? {} : u, m = new URL(g.url), p = g.method, s = s5("", q1(m), null, "default"), M = j1(h, s, l);
    if (!Ql(p) && p !== "HEAD" && p !== "OPTIONS")
      throw E1(405, { method: p });
    if (!M)
      throw E1(404, { pathname: s.pathname });
    let x = z ? M.find((w) => w.route.id === z) : kt(M, s);
    if (z && !x)
      throw E1(403, { pathname: s.pathname, routeId: z });
    if (!x)
      throw E1(404, { pathname: s.pathname });
    let C = await o(g, s, M, f, x);
    if (q3(C))
      return C;
    let H = C.errors ? Object.values(C.errors)[0] : void 0;
    if (H !== void 0)
      throw H;
    if (C.actionData)
      return Object.values(C.actionData)[0];
    if (C.loaderData) {
      var L;
      let w = Object.values(C.loaderData)[0];
      return (L = C.activeDeferreds) != null && L[x.route.id] && (w[Y3] = C.activeDeferreds[x.route.id]), w;
    }
  }
  async function o(g, u, z, f, m) {
    T(g.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (z0(g.method.toLowerCase()))
        return await d(g, z, m || kt(z, u), f, m != null);
      let p = await v(g, z, f, m);
      return q3(p) ? p : e1({}, p, { actionData: null, actionHeaders: {} });
    } catch (p) {
      if (HV(p)) {
        if (p.type === p1.error)
          throw p.response;
        return p.response;
      }
      if (fV(p))
        return p;
      throw p;
    }
  }
  async function d(g, u, z, f, m) {
    let p;
    if (!z.route.action && !z.route.lazy) {
      let x = E1(405, { method: g.method, pathname: new URL(g.url).pathname, routeId: z.route.id });
      if (m)
        throw x;
      p = { type: p1.error, error: x };
    } else
      p = await q4("action", g, z, u, r, c, l, e.v7_relativeSplatPath, { isStaticRequest: true, isRouteRequest: m, requestContext: f }), g.signal.aborted && Io(g, m, e);
    if ($5(p))
      throw new Response(null, { status: p.status, headers: { Location: p.location } });
    if (q5(p)) {
      let x = E1(400, { type: "defer-action" });
      if (m)
        throw x;
      p = { type: p1.error, error: x };
    }
    if (m) {
      if (K5(p))
        throw p.error;
      return { matches: [z], loaderData: {}, actionData: { [z.route.id]: p.data }, errors: null, statusCode: 200, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    }
    if (K5(p)) {
      let x = G3(u, z.route.id), C = await v(g, u, f, void 0, { [x.route.id]: p.error });
      return e1({}, C, { statusCode: N1(p.error) ? p.error.status : 500, actionData: null, actionHeaders: e1({}, p.headers ? { [z.route.id]: p.headers } : {}) });
    }
    let s = new Request(g.url, { headers: g.headers, redirect: g.redirect, signal: g.signal }), M = await v(s, u, f);
    return e1({}, M, p.statusCode ? { statusCode: p.statusCode } : {}, { actionData: { [z.route.id]: p.data }, actionHeaders: e1({}, p.headers ? { [z.route.id]: p.headers } : {}) });
  }
  async function v(g, u, z, f, m) {
    let p = f != null;
    if (p && !(f != null && f.route.loader) && !(f != null && f.route.lazy))
      throw E1(400, { method: g.method, pathname: new URL(g.url).pathname, routeId: f?.route.id });
    let M = (f ? [f] : ld(u, Object.keys(m || {})[0])).filter((w) => w.route.loader || w.route.lazy);
    if (M.length === 0)
      return { matches: u, loaderData: u.reduce((w, S) => Object.assign(w, { [S.route.id]: null }), {}), errors: m || null, statusCode: 200, loaderHeaders: {}, activeDeferreds: null };
    let x = await Promise.all([...M.map((w) => q4("loader", g, w, u, r, c, l, e.v7_relativeSplatPath, { isStaticRequest: true, isRouteRequest: p, requestContext: z }))]);
    g.signal.aborted && Io(g, p, e);
    let C = /* @__PURE__ */ new Map(), H = ed(u, M, x, m, C), L = new Set(M.map((w) => w.route.id));
    return u.forEach((w) => {
      L.has(w.route.id) || (H.loaderData[w.route.id] = null);
    }), e1({}, H, { matches: u, activeDeferreds: C.size > 0 ? Object.fromEntries(C.entries()) : null });
  }
  return { dataRoutes: h, query: i, queryRoute: n };
}
function Jl(t, a, r) {
  return e1({}, a, { statusCode: N1(r) ? r.status : 500, errors: { [a._deepestRenderedBoundaryId || t[0].id]: r } });
}
function Io(t, a, r) {
  if (r.v7_throwAbortReason && t.signal.reason !== void 0)
    throw t.signal.reason;
  let l = a ? "queryRoute" : "query";
  throw new Error(l + "() call aborted: " + t.method + " " + t.url);
}
function pV(t) {
  return t != null && ("formData" in t && t.formData != null || "body" in t && t.body !== void 0);
}
function $l(t, a, r, l, c, e, h, i) {
  let n, o;
  if (h) {
    n = [];
    for (let v of a)
      if (n.push(v), v.route.id === h) {
        o = v;
        break;
      }
  } else
    n = a, o = a[a.length - 1];
  let d = X3(c || ".", $3(n, e), K1(t.pathname, r) || t.pathname, i === "path");
  return c == null && (d.search = t.search, d.hash = t.hash), (c == null || c === "" || c === ".") && o && o.route.index && !tc(d.search) && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), l && r !== "/" && (d.pathname = d.pathname === "/" ? r : X2([r, d.pathname])), q1(d);
}
function bo(t, a, r, l) {
  if (!l || !pV(l))
    return { path: r };
  if (l.formMethod && !Ql(l.formMethod))
    return { path: r, error: E1(405, { method: l.formMethod }) };
  let c = () => ({ path: r, error: E1(400, { type: "invalid-body" }) }), e = l.formMethod || "get", h = t ? e.toUpperCase() : e.toLowerCase(), i = hd(r);
  if (l.body !== void 0) {
    if (l.formEncType === "text/plain") {
      if (!z0(h))
        return c();
      let g = typeof l.body == "string" ? l.body : l.body instanceof FormData || l.body instanceof URLSearchParams ? Array.from(l.body.entries()).reduce((u, z) => {
        let [f, m] = z;
        return "" + u + f + "=" + m + `
`;
      }, "") : String(l.body);
      return { path: r, submission: { formMethod: h, formAction: i, formEncType: l.formEncType, formData: void 0, json: void 0, text: g } };
    } else if (l.formEncType === "application/json") {
      if (!z0(h))
        return c();
      try {
        let g = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
        return { path: r, submission: { formMethod: h, formAction: i, formEncType: l.formEncType, formData: void 0, json: g, text: void 0 } };
      } catch {
        return c();
      }
    }
  }
  T(typeof FormData == "function", "FormData is not available in this environment");
  let n, o;
  if (l.formData)
    n = Xl(l.formData), o = l.formData;
  else if (l.body instanceof FormData)
    n = Xl(l.body), o = l.body;
  else if (l.body instanceof URLSearchParams)
    n = l.body, o = jo(n);
  else if (l.body == null)
    n = new URLSearchParams(), o = new FormData();
  else
    try {
      n = new URLSearchParams(l.body), o = jo(n);
    } catch {
      return c();
    }
  let d = { formMethod: h, formAction: i, formEncType: l && l.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 };
  if (z0(d.formMethod))
    return { path: r, submission: d };
  let v = I1(r);
  return a && v.search && tc(v.search) && n.append("index", ""), v.search = "?" + n, { path: q1(v), submission: d };
}
function ld(t, a) {
  let r = t;
  if (a) {
    let l = t.findIndex((c) => c.route.id === a);
    l >= 0 && (r = t.slice(0, l));
  }
  return r;
}
function Do(t, a, r, l, c, e, h, i, n, o, d, v, g, u, z, f) {
  let m = f ? Object.values(f)[0] : z ? Object.values(z)[0] : void 0, p = t.createURL(a.location), s = t.createURL(c), M = f ? Object.keys(f)[0] : void 0, C = ld(r, M).filter((L, w) => {
    let { route: S } = L;
    if (S.lazy)
      return true;
    if (S.loader == null)
      return false;
    if (e)
      return S.loader.hydrate ? true : a.loaderData[S.id] === void 0 && (!a.errors || a.errors[S.id] === void 0);
    if (zV(a.loaderData, a.matches[w], L) || i.some((d1) => d1 === L.route.id))
      return true;
    let P = a.matches[w], q = L;
    return To(L, e1({ currentUrl: p, currentParams: P.params, nextUrl: s, nextParams: q.params }, l, { actionResult: m, defaultShouldRevalidate: h || p.pathname + p.search === s.pathname + s.search || p.search !== s.search || cd(P, q) }));
  }), H = [];
  return d.forEach((L, w) => {
    if (e || !r.some((l1) => l1.route.id === L.routeId) || o.has(w))
      return;
    let S = j1(g, L.path, u);
    if (!S) {
      H.push({ key: w, routeId: L.routeId, path: L.path, matches: null, match: null, controller: null });
      return;
    }
    let P = a.fetchers.get(w), q = kt(S, L.path), d1 = false;
    v.has(w) ? d1 = false : n.includes(w) ? d1 = true : P && P.state !== "idle" && P.data === void 0 ? d1 = h : d1 = To(q, e1({ currentUrl: p, currentParams: a.matches[a.matches.length - 1].params, nextUrl: s, nextParams: r[r.length - 1].params }, l, { actionResult: m, defaultShouldRevalidate: h })), d1 && H.push({ key: w, routeId: L.routeId, path: L.path, matches: S, match: q, controller: new AbortController() });
  }), [C, H];
}
function zV(t, a, r) {
  let l = !a || r.route.id !== a.route.id, c = t[r.route.id] === void 0;
  return l || c;
}
function cd(t, a) {
  let r = t.route.path;
  return t.pathname !== a.pathname || r != null && r.endsWith("*") && t.params["*"] !== a.params["*"];
}
function To(t, a) {
  if (t.route.shouldRevalidate) {
    let r = t.route.shouldRevalidate(a);
    if (typeof r == "boolean")
      return r;
  }
  return a.defaultShouldRevalidate;
}
async function Wo(t, a, r) {
  if (!t.lazy)
    return;
  let l = await t.lazy();
  if (!t.lazy)
    return;
  let c = r[t.id];
  T(c, "No route found in manifest");
  let e = {};
  for (let h in l) {
    let n = c[h] !== void 0 && h !== "hasErrorBoundary";
    G0(!n, 'Route "' + c.id + '" has a static property "' + h + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + h + '" will be ignored.')), !n && !_x.has(h) && (e[h] = l[h]);
  }
  Object.assign(c, e), Object.assign(c, e1({}, a(c), { lazy: void 0 }));
}
async function q4(t, a, r, l, c, e, h, i, n) {
  n === void 0 && (n = {});
  let o, d, v, g = (f) => {
    let m, p = new Promise((s, M) => m = M);
    return v = () => m(), a.signal.addEventListener("abort", v), Promise.race([f({ request: a, params: r.params, context: n.requestContext }), p]);
  };
  try {
    let f = r.route[t];
    if (r.route.lazy)
      if (f) {
        let m, p = await Promise.all([g(f).catch((s) => {
          m = s;
        }), Wo(r.route, e, c)]);
        if (m)
          throw m;
        d = p[0];
      } else if (await Wo(r.route, e, c), f = r.route[t], f)
        d = await g(f);
      else if (t === "action") {
        let m = new URL(a.url), p = m.pathname + m.search;
        throw E1(405, { method: a.method, pathname: p, routeId: r.route.id });
      } else
        return { type: p1.data, data: void 0 };
    else if (f)
      d = await g(f);
    else {
      let m = new URL(a.url), p = m.pathname + m.search;
      throw E1(404, { pathname: p });
    }
    T(d !== void 0, "You defined " + (t === "action" ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `" + t + "` ") + "function. Please return a value or `null`.");
  } catch (f) {
    o = p1.error, d = f;
  } finally {
    v && a.signal.removeEventListener("abort", v);
  }
  if (q3(d)) {
    let f = d.status;
    if (uV.has(f)) {
      let p = d.headers.get("Location");
      if (T(p, "Redirects returned/thrown from loaders/actions must have a Location header"), !td.test(p))
        p = $l(new URL(a.url), l.slice(0, l.indexOf(r) + 1), h, true, p, i);
      else if (!n.isStaticRequest) {
        let s = new URL(a.url), M = p.startsWith("//") ? new URL(s.protocol + p) : new URL(p), x = K1(M.pathname, h) != null;
        M.origin === s.origin && x && (p = M.pathname + M.search + M.hash);
      }
      if (n.isStaticRequest)
        throw d.headers.set("Location", p), d;
      return { type: p1.redirect, status: f, location: p, revalidate: d.headers.get("X-Remix-Revalidate") !== null, reloadDocument: d.headers.get("X-Remix-Reload-Document") !== null };
    }
    if (n.isRouteRequest)
      throw { type: o === p1.error ? p1.error : p1.data, response: d };
    let m;
    try {
      let p = d.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p) ? d.body == null ? m = null : m = await d.json() : m = await d.text();
    } catch (p) {
      return { type: p1.error, error: p };
    }
    return o === p1.error ? { type: o, error: new p5(f, d.statusText, m), headers: d.headers } : { type: p1.data, data: m, statusCode: d.status, headers: d.headers };
  }
  if (o === p1.error)
    return { type: o, error: d };
  if (id(d)) {
    var u, z;
    return { type: p1.deferred, deferredData: d, statusCode: (u = d.init) == null ? void 0 : u.status, headers: ((z = d.init) == null ? void 0 : z.headers) && new Headers(d.init.headers) };
  }
  return { type: p1.data, data: d };
}
function St(t, a, r, l) {
  let c = t.createURL(hd(a)).toString(), e = { signal: r };
  if (l && z0(l.formMethod)) {
    let { formMethod: h, formEncType: i } = l;
    e.method = h.toUpperCase(), i === "application/json" ? (e.headers = new Headers({ "Content-Type": i }), e.body = JSON.stringify(l.json)) : i === "text/plain" ? e.body = l.text : i === "application/x-www-form-urlencoded" && l.formData ? e.body = Xl(l.formData) : e.body = l.formData;
  }
  return new Request(c, e);
}
function Xl(t) {
  let a = new URLSearchParams();
  for (let [r, l] of t.entries())
    a.append(r, typeof l == "string" ? l : l.name);
  return a;
}
function jo(t) {
  let a = new FormData();
  for (let [r, l] of t.entries())
    a.append(r, l);
  return a;
}
function ed(t, a, r, l, c) {
  let e = {}, h = null, i, n = false, o = {};
  return r.forEach((d, v) => {
    let g = a[v].route.id;
    if (T(!$5(d), "Cannot handle redirect results in processLoaderData"), K5(d)) {
      let u = G3(t, g), z = d.error;
      l && (z = Object.values(l)[0], l = void 0), h = h || {}, h[u.route.id] == null && (h[u.route.id] = z), e[g] = void 0, n || (n = true, i = N1(d.error) ? d.error.status : 500), d.headers && (o[g] = d.headers);
    } else
      q5(d) ? (c.set(g, d.deferredData), e[g] = d.deferredData.data) : e[g] = d.data, d.statusCode != null && d.statusCode !== 200 && !n && (i = d.statusCode), d.headers && (o[g] = d.headers);
  }), l && (h = l, e[Object.keys(l)[0]] = void 0), { loaderData: e, errors: h, statusCode: i || 200, loaderHeaders: o };
}
function No(t, a, r, l, c, e, h, i) {
  let { loaderData: n, errors: o } = ed(a, r, l, c, i);
  for (let d = 0; d < e.length; d++) {
    let { key: v, match: g, controller: u } = e[d];
    T(h !== void 0 && h[d] !== void 0, "Did not find corresponding fetcher result");
    let z = h[d];
    if (!(u && u.signal.aborted))
      if (K5(z)) {
        let f = G3(t.matches, g?.route.id);
        o && o[f.route.id] || (o = e1({}, o, { [f.route.id]: z.error })), t.fetchers.delete(v);
      } else if ($5(z))
        T(false, "Unhandled fetcher revalidation redirect");
      else if (q5(z))
        T(false, "Unhandled fetcher deferred data");
      else {
        let f = U5(z.data);
        t.fetchers.set(v, f);
      }
  }
  return { loaderData: n, errors: o };
}
function _o(t, a, r, l) {
  let c = e1({}, a);
  for (let e of r) {
    let h = e.route.id;
    if (a.hasOwnProperty(h) ? a[h] !== void 0 && (c[h] = a[h]) : t[h] !== void 0 && e.route.loader && (c[h] = t[h]), l && l.hasOwnProperty(h))
      break;
  }
  return c;
}
function G3(t, a) {
  return (a ? t.slice(0, t.findIndex((l) => l.route.id === a) + 1) : [...t]).reverse().find((l) => l.route.hasErrorBoundary === true) || t[0];
}
function w7(t) {
  let a = t.length === 1 ? t[0] : t.find((r) => r.index || !r.path || r.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: a }], route: a };
}
function E1(t, a) {
  let { pathname: r, routeId: l, method: c, type: e } = a === void 0 ? {} : a, h = "Unknown Server Error", i = "Unknown @remix-run/router error";
  return t === 400 ? (h = "Bad Request", c && r && l ? i = "You made a " + c + ' request to "' + r + '" but ' + ('did not provide a `loader` for route "' + l + '", ') + "so there is no way to handle the request." : e === "defer-action" ? i = "defer() is not supported in actions" : e === "invalid-body" && (i = "Unable to encode submission body")) : t === 403 ? (h = "Forbidden", i = 'Route "' + l + '" does not match URL "' + r + '"') : t === 404 ? (h = "Not Found", i = 'No route matches URL "' + r + '"') : t === 405 && (h = "Method Not Allowed", c && r && l ? i = "You made a " + c.toUpperCase() + ' request to "' + r + '" but ' + ('did not provide an `action` for route "' + l + '", ') + "so there is no way to handle the request." : c && (i = 'Invalid request method "' + c.toUpperCase() + '"')), new p5(t || 500, h, new Error(i), true);
}
function Uo(t) {
  for (let a = t.length - 1; a >= 0; a--) {
    let r = t[a];
    if ($5(r))
      return { result: r, idx: a };
  }
}
function hd(t) {
  let a = typeof t == "string" ? I1(t) : t;
  return q1(e1({}, a, { hash: "" }));
}
function MV(t, a) {
  return t.pathname !== a.pathname || t.search !== a.search ? false : t.hash === "" ? a.hash !== "" : t.hash === a.hash ? true : a.hash !== "";
}
function q5(t) {
  return t.type === p1.deferred;
}
function K5(t) {
  return t.type === p1.error;
}
function $5(t) {
  return (t && t.type) === p1.redirect;
}
function id(t) {
  let a = t;
  return a && typeof a == "object" && typeof a.data == "object" && typeof a.subscribe == "function" && typeof a.cancel == "function" && typeof a.resolveData == "function";
}
function q3(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
function fV(t) {
  if (!q3(t))
    return false;
  let a = t.status, r = t.headers.get("Location");
  return a >= 300 && a <= 399 && r != null;
}
function HV(t) {
  return t && q3(t.response) && (t.type === p1.data || t.type === p1.error);
}
function Ql(t) {
  return gV.has(t.toLowerCase());
}
function z0(t) {
  return dV.has(t.toLowerCase());
}
async function Go(t, a, r, l, c, e) {
  for (let h = 0; h < r.length; h++) {
    let i = r[h], n = a[h];
    if (!n)
      continue;
    let o = t.find((v) => v.route.id === n.route.id), d = o != null && !cd(o, n) && (e && e[n.route.id]) !== void 0;
    if (q5(i) && (c || d)) {
      let v = l[h];
      T(v, "Expected an AbortSignal for revalidating fetcher deferred result"), await nd(i, v, c).then((g) => {
        g && (r[h] = g || r[h]);
      });
    }
  }
}
async function nd(t, a, r) {
  if (r === void 0 && (r = false), !await t.deferredData.resolveData(a)) {
    if (r)
      try {
        return { type: p1.data, data: t.deferredData.unwrappedData };
      } catch (c) {
        return { type: p1.error, error: c };
      }
    return { type: p1.data, data: t.deferredData.data };
  }
}
function tc(t) {
  return new URLSearchParams(t).getAll("index").some((a) => a === "");
}
function kt(t, a) {
  let r = typeof a == "string" ? I1(a).search : a.search;
  if (t[t.length - 1].route.index && tc(r || ""))
    return t[t.length - 1];
  let l = Qo(t);
  return l[l.length - 1];
}
function qo(t) {
  let { formMethod: a, formAction: r, formEncType: l, text: c, formData: e, json: h } = t;
  if (!(!a || !r || !l)) {
    if (c != null)
      return { formMethod: a, formAction: r, formEncType: l, formData: void 0, json: void 0, text: c };
    if (e != null)
      return { formMethod: a, formAction: r, formEncType: l, formData: e, json: void 0, text: void 0 };
    if (h !== void 0)
      return { formMethod: a, formAction: r, formEncType: l, formData: void 0, json: h, text: void 0 };
  }
}
function Kl(t, a) {
  return a ? { state: "loading", location: t, formMethod: a.formMethod, formAction: a.formAction, formEncType: a.formEncType, formData: a.formData, json: a.json, text: a.text } : { state: "loading", location: t, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function mV(t, a) {
  return { state: "submitting", location: t, formMethod: a.formMethod, formAction: a.formAction, formEncType: a.formEncType, formData: a.formData, json: a.json, text: a.text };
}
function yt(t, a) {
  return t ? { state: "loading", formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text, data: a } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: a };
}
function xV(t, a) {
  return { state: "submitting", formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text, data: a ? a.data : void 0 };
}
function U5(t) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
}
function VV(t, a) {
  try {
    let r = t.sessionStorage.getItem(rd);
    if (r) {
      let l = JSON.parse(r);
      for (let [c, e] of Object.entries(l || {}))
        e && Array.isArray(e) && a.set(c, new Set(e || []));
    }
  } catch {
  }
}
function CV(t, a) {
  if (a.size > 0) {
    let r = {};
    for (let [l, c] of a)
      r[l] = [...c];
    try {
      t.sessionStorage.setItem(rd, JSON.stringify(r));
    } catch (l) {
      G0(false, "Failed to save applied view transitions in sessionStorage (" + l + ").");
    }
  }
}
var n1;
var Oo;
var p1;
var _x;
var qx;
var Kx;
var $x;
var Xx;
var Qx;
var Yx;
var Eo;
var X2;
var Yo;
var hV;
var iV;
var q0;
var S0;
var B7;
var $4;
var z5;
var X4;
var p5;
var Jo;
var dV;
var vV;
var gV;
var uV;
var sV;
var L7;
var F7;
var G5;
var td;
var ad;
var rd;
var Y3;
var M5 = o1(() => {
  (function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
  })(n1 || (n1 = {}));
  Oo = "popstate";
  (function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
  })(p1 || (p1 = {}));
  _x = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  qx = /^:[\w-]+$/, Kx = 3, $x = 2, Xx = 1, Qx = 10, Yx = -2, Eo = (t) => t === "*";
  X2 = (t) => t.join("/").replace(/\/\/+/g, "/"), Yo = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), hV = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, iV = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, q0 = function(a, r) {
    r === void 0 && (r = {});
    let l = typeof r == "number" ? { status: r } : r, c = new Headers(l.headers);
    return c.has("Content-Type") || c.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(a), e1({}, l, { headers: c }));
  }, S0 = class extends Error {
  }, B7 = class {
    constructor(a, r) {
      this.pendingKeysSet = /* @__PURE__ */ new Set(), this.subscribers = /* @__PURE__ */ new Set(), this.deferredKeys = [], T(a && typeof a == "object" && !Array.isArray(a), "defer() only accepts plain objects");
      let l;
      this.abortPromise = new Promise((e, h) => l = h), this.controller = new AbortController();
      let c = () => l(new S0("Deferred data aborted"));
      this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", c), this.controller.signal.addEventListener("abort", c), this.data = Object.entries(a).reduce((e, h) => {
        let [i, n] = h;
        return Object.assign(e, { [i]: this.trackPromise(i, n) });
      }, {}), this.done && this.unlistenAbortSignal(), this.init = r;
    }
    trackPromise(a, r) {
      if (!(r instanceof Promise))
        return r;
      this.deferredKeys.push(a), this.pendingKeysSet.add(a);
      let l = Promise.race([r, this.abortPromise]).then((c) => this.onSettle(l, a, void 0, c), (c) => this.onSettle(l, a, c));
      return l.catch(() => {
      }), Object.defineProperty(l, "_tracked", { get: () => true }), l;
    }
    onSettle(a, r, l, c) {
      if (this.controller.signal.aborted && l instanceof S0)
        return this.unlistenAbortSignal(), Object.defineProperty(a, "_error", { get: () => l }), Promise.reject(l);
      if (this.pendingKeysSet.delete(r), this.done && this.unlistenAbortSignal(), l === void 0 && c === void 0) {
        let e = new Error('Deferred data for key "' + r + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
        return Object.defineProperty(a, "_error", { get: () => e }), this.emit(false, r), Promise.reject(e);
      }
      return c === void 0 ? (Object.defineProperty(a, "_error", { get: () => l }), this.emit(false, r), Promise.reject(l)) : (Object.defineProperty(a, "_data", { get: () => c }), this.emit(false, r), c);
    }
    emit(a, r) {
      this.subscribers.forEach((l) => l(a, r));
    }
    subscribe(a) {
      return this.subscribers.add(a), () => this.subscribers.delete(a);
    }
    cancel() {
      this.controller.abort(), this.pendingKeysSet.forEach((a, r) => this.pendingKeysSet.delete(r)), this.emit(true);
    }
    async resolveData(a) {
      let r = false;
      if (!this.done) {
        let l = () => this.cancel();
        a.addEventListener("abort", l), r = await new Promise((c) => {
          this.subscribe((e) => {
            a.removeEventListener("abort", l), (e || this.done) && c(e);
          });
        });
      }
      return r;
    }
    get done() {
      return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
      return T(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((a, r) => {
        let [l, c] = r;
        return Object.assign(a, { [l]: oV(c) });
      }, {});
    }
    get pendingKeys() {
      return Array.from(this.pendingKeysSet);
    }
  };
  $4 = function(a, r) {
    r === void 0 && (r = {});
    let l = typeof r == "number" ? { status: r } : r;
    return new B7(a, l);
  }, z5 = function(a, r) {
    r === void 0 && (r = 302);
    let l = r;
    typeof l == "number" ? l = { status: l } : typeof l.status > "u" && (l.status = 302);
    let c = new Headers(l.headers);
    return c.set("Location", a), new Response(null, e1({}, l, { headers: c }));
  }, X4 = (t, a) => {
    let r = z5(t, a);
    return r.headers.set("X-Remix-Reload-Document", "true"), r;
  }, p5 = class {
    constructor(a, r, l, c) {
      c === void 0 && (c = false), this.status = a, this.statusText = r || "", this.internal = c, l instanceof Error ? (this.data = l.toString(), this.error = l) : this.data = l;
    }
  };
  Jo = ["post", "put", "patch", "delete"], dV = new Set(Jo), vV = ["get", ...Jo], gV = new Set(vV), uV = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), sV = /* @__PURE__ */ new Set([307, 308]), L7 = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, F7 = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, G5 = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, td = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ad = (t) => ({ hasErrorBoundary: Boolean(t.hasErrorBoundary) }), rd = "remix-router-transitions";
  Y3 = Symbol("deferred");
});
function dd(t) {
  return t === y0.Development || t === y0.Production || t === y0.Test;
}
var y0;
var ac = o1(() => {
  y0 = function(t) {
    return t.Development = "development", t.Production = "production", t.Test = "test", t;
  }({});
});
function rc(t, a) {
  if (t instanceof Error && a !== y0.Development) {
    let r = new Error("Unexpected Server Error");
    return r.stack = void 0, r;
  }
  return t;
}
function lc(t, a) {
  return Object.entries(t).reduce((r, [l, c]) => Object.assign(r, { [l]: rc(c, a) }), {});
}
function J3(t, a) {
  let r = rc(t, a);
  return { message: r.message, stack: r.stack };
}
function cc(t, a) {
  if (!t)
    return null;
  let r = Object.entries(t), l = {};
  for (let [c, e] of r)
    if (N1(e))
      l[c] = { ...e, __type: "RouteErrorResponse" };
    else if (e instanceof Error) {
      let h = rc(e, a);
      l[c] = { message: h.message, stack: h.stack, __type: "Error", ...h.name !== "Error" ? { __subType: h.name } : {} };
    } else
      l[c] = e;
  return l;
}
var ec = o1(() => {
  M5();
  ac();
});
function sd(t) {
  let a = t;
  return a && typeof a == "object" && typeof a.data == "object" && typeof a.subscribe == "function" && typeof a.cancel == "function" && typeof a.resolveData == "function";
}
function f5(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
function hc(t) {
  return LV.has(t);
}
function pd(t) {
  return hc(t.status);
}
function BV(t) {
  return t != null && typeof t.then == "function" && t._tracked === true;
}
function zd(t, a, r) {
  let l = new TextEncoder();
  return new ReadableStream({ async start(e) {
    let h = {}, i = [];
    for (let [o, d] of Object.entries(t.data))
      BV(d) ? (h[o] = `${wV}${o}`, (typeof d._data < "u" || typeof d._error < "u") && i.push(o)) : h[o] = d;
    e.enqueue(l.encode(JSON.stringify(h) + `

`));
    for (let o of i)
      vd(e, l, o, t.data[o], r);
    let n = t.subscribe((o, d) => {
      d && vd(e, l, d, t.data[d], r);
    });
    await t.resolveData(a), n(), e.close();
  } });
}
function vd(t, a, r, l, c) {
  "_error" in l ? t.enqueue(a.encode("error:" + JSON.stringify({ [r]: l._error instanceof Error ? J3(l._error, c) : l._error }) + `

`)) : t.enqueue(a.encode("data:" + JSON.stringify({ [r]: l._data ?? null }) + `

`));
}
var Rt;
var gd;
var k7;
var ud;
var LV;
var wV;
var R7 = o1(() => {
  M5();
  ec();
  Rt = (t, a = {}) => q0(t, a), gd = (t, a = {}) => $4(t, a), k7 = (t, a = 302) => z5(t, a), ud = (t, a = 302) => X4(t, a);
  LV = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  wV = "__deferred_promise:";
});
function Md(t) {
  return Object.keys(t).reduce((a, r) => (a[r] = t[r].module, a), {});
}
var fd = o1(() => {
});
var md = J1((KF, Ot) => {
  "use strict";
  var t6 = { decodeValues: true, map: false, silent: false };
  function ic(t) {
    return typeof t == "string" && !!t.trim();
  }
  function nc(t, a) {
    var r = t.split(";").filter(ic), l = r.shift(), c = AV(l), e = c.name, h = c.value;
    a = a ? Object.assign({}, t6, a) : t6;
    try {
      h = a.decodeValues ? decodeURIComponent(h) : h;
    } catch (n) {
      console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + h + "'. Set options.decodeValues to false to disable this feature.", n);
    }
    var i = { name: e, value: h };
    return r.forEach(function(n) {
      var o = n.split("="), d = o.shift().trimLeft().toLowerCase(), v = o.join("=");
      d === "expires" ? i.expires = new Date(v) : d === "max-age" ? i.maxAge = parseInt(v, 10) : d === "secure" ? i.secure = true : d === "httponly" ? i.httpOnly = true : d === "samesite" ? i.sameSite = v : i[d] = v;
    }), i;
  }
  function AV(t) {
    var a = "", r = "", l = t.split("=");
    return l.length > 1 ? (a = l.shift(), r = l.join("=")) : r = t, { name: a, value: r };
  }
  function Hd(t, a) {
    if (a = a ? Object.assign({}, t6, a) : t6, !t)
      return a.map ? {} : [];
    if (t.headers)
      if (typeof t.headers.getSetCookie == "function")
        t = t.headers.getSetCookie();
      else if (t.headers["set-cookie"])
        t = t.headers["set-cookie"];
      else {
        var r = t.headers[Object.keys(t.headers).find(function(c) {
          return c.toLowerCase() === "set-cookie";
        })];
        !r && t.headers.cookie && !a.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), t = r;
      }
    if (Array.isArray(t) || (t = [t]), a = a ? Object.assign({}, t6, a) : t6, a.map) {
      var l = {};
      return t.filter(ic).reduce(function(c, e) {
        var h = nc(e, a);
        return c[h.name] = h, c;
      }, l);
    } else
      return t.filter(ic).map(function(c) {
        return nc(c, a);
      });
  }
  function ZV(t) {
    if (Array.isArray(t))
      return t;
    if (typeof t != "string")
      return [];
    var a = [], r = 0, l, c, e, h, i;
    function n() {
      for (; r < t.length && /\s/.test(t.charAt(r)); )
        r += 1;
      return r < t.length;
    }
    function o() {
      return c = t.charAt(r), c !== "=" && c !== ";" && c !== ",";
    }
    for (; r < t.length; ) {
      for (l = r, i = false; n(); )
        if (c = t.charAt(r), c === ",") {
          for (e = r, r += 1, n(), h = r; r < t.length && o(); )
            r += 1;
          r < t.length && t.charAt(r) === "=" ? (i = true, r = h, a.push(t.substring(l, e)), l = r) : r = e + 1;
        } else
          r += 1;
      (!i || r >= t.length) && a.push(t.substring(l, t.length));
    }
    return a;
  }
  Ot.exports = Hd;
  Ot.exports.parse = Hd;
  Ot.exports.parseString = nc;
  Ot.exports.splitCookiesString = ZV;
});
function Vd(t, a) {
  let r = a.errors ? a.matches.findIndex((e) => a.errors[e.route.id]) : -1, l = r >= 0 ? a.matches.slice(0, r + 1) : a.matches, c;
  if (r >= 0) {
    let { actionHeaders: e, actionData: h, loaderHeaders: i, loaderData: n } = a;
    a.matches.slice(r).some((o) => {
      let d = o.route.id;
      return e[d] && (!h || h[d] === void 0) ? c = e[d] : i[d] && n[d] === void 0 && (c = i[d]), c != null;
    });
  }
  return l.reduce((e, h, i) => {
    let { id: n } = h.route, o = t.routes[n].module, d = a.loaderHeaders[n] || new Headers(), v = a.actionHeaders[n] || new Headers(), g = c != null && i === l.length - 1, u = g && c !== d && c !== v;
    if (o.headers == null) {
      let f = new Headers(e);
      return u && Q4(c, f), Q4(v, f), Q4(d, f), f;
    }
    let z = new Headers(o.headers ? typeof o.headers == "function" ? o.headers({ loaderHeaders: d, parentHeaders: e, actionHeaders: v, errorHeaders: g ? c : void 0 }) : o.headers : void 0);
    return u && Q4(c, z), Q4(v, z), Q4(d, z), Q4(e, z), z;
  }, new Headers());
}
function Q4(t, a) {
  let r = t.get("Set-Cookie");
  r && (0, xd.splitCookiesString)(r).forEach((c) => {
    a.append("Set-Cookie", c);
  });
}
var xd;
var Cd = o1(() => {
  xd = I(md());
});
function oc(t, a) {
  if (t === false || t === null || typeof t > "u")
    throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"), new Error(a);
}
var Ld = o1(() => {
});
function Bd(t, a, r) {
  let l = j1(t, a, r);
  return l ? l.map((c) => ({ params: c.params, pathname: c.pathname, route: c.route })) : null;
}
var wd = o1(() => {
  M5();
});
async function Ad({ loadContext: t, action: a, params: r, request: l, routeId: c }) {
  let e = await a({ request: yd(Sd(l)), context: t, params: r });
  if (e === void 0)
    throw new Error(`You defined an action for route "${c}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return f5(e) ? e : Rt(e);
}
async function Zd({ loadContext: t, loader: a, params: r, request: l, routeId: c }) {
  let e = await a({ request: yd(Sd(l)), context: t, params: r });
  if (e === void 0)
    throw new Error(`You defined a loader for route "${c}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return sd(e) ? e.init && hc(e.init.status || 200) ? k7(new Headers(e.init.headers).get("Location"), e.init) : e : f5(e) ? e : Rt(e);
}
function Sd(t) {
  let a = new URL(t.url), r = a.searchParams.getAll("index");
  a.searchParams.delete("index");
  let l = [];
  for (let e of r)
    e && l.push(e);
  for (let e of l)
    a.searchParams.append("index", e);
  let c = { method: t.method, body: t.body, headers: t.headers, signal: t.signal };
  return c.body && (c.duplex = "half"), new Request(a.href, c);
}
function yd(t) {
  let a = new URL(t.url);
  a.searchParams.delete("_data");
  let r = { method: t.method, body: t.body, headers: t.headers, signal: t.signal };
  return r.body && (r.duplex = "half"), new Request(a.href, r);
}
var Fd = o1(() => {
  R7();
});
function kd(t) {
  let a = {};
  return Object.values(t).forEach((r) => {
    let l = r.parentId || "";
    a[l] || (a[l] = []), a[l].push(r);
  }), a;
}
function dc(t, a = "", r = kd(t)) {
  return (r[a] || []).map((l) => ({ ...l, children: dc(t, l.id, r) }));
}
function vc(t, a, r = "", l = kd(t)) {
  return (l[r] || []).map((c) => {
    let e = { hasErrorBoundary: c.id === "root" || c.module.ErrorBoundary != null, id: c.id, path: c.path, loader: c.module.loader ? (h) => Zd({ request: h.request, params: h.params, loadContext: h.context, loader: c.module.loader, routeId: c.id }) : void 0, action: c.module.action ? (h) => Ad({ request: h.request, params: h.params, loadContext: h.context, action: c.module.action, routeId: c.id }) : void 0, handle: c.module.handle };
    return c.index ? { index: true, ...e } : { caseSensitive: c.caseSensitive, children: vc(t, a, c.id, l), ...e };
  });
}
var Rd = o1(() => {
  Fd();
});
function Od(t) {
  return t.replace(yV, (a) => SV[a]);
}
var SV;
var yV;
var Pd = o1(() => {
  SV = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, yV = /[&><\u2028\u2029]/g;
});
function gc(t) {
  return Od(JSON.stringify(t));
}
var Ed = o1(() => {
  Pd();
});
async function Id(t, a) {
  if (a ??= "", !a)
    throw Error("Dev server origin not set");
  let r = new URL(a);
  r.pathname = "ping";
  let l = await fetch(r.href, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ buildHash: t.assets.version }) }).catch((c) => {
    throw console.error(`Could not reach Remix dev server at ${r}`), c;
  });
  if (!l.ok)
    throw console.error(`Could not reach Remix dev server at ${r} (${l.status})`), Error(await l.text());
}
function bd(t) {
  console.log(`[REMIX DEV] ${t.assets.version} ready`);
}
function Td(t) {
  globalThis[Dd] = t;
}
function uc() {
  return globalThis[Dd];
}
var Dd;
var sc = o1(() => {
  Dd = "__remix_devServerHooks";
});
function Wd(t, a) {
  var r, l;
  let c = dc(t.routes), e = vc(t.routes, t.future), h = dd(a) ? a : y0.Production, i = Yl(e, { basename: t.basename, future: { v7_relativeSplatPath: ((r = t.future) === null || r === void 0 ? void 0 : r.v3_relativeSplatPath) === true, v7_throwAbortReason: ((l = t.future) === null || l === void 0 ? void 0 : l.v3_throwAbortReason) === true } }), n = t.entry.module.handleError || ((o, { request: d }) => {
    h !== y0.Test && !d.signal.aborted && console.error(N1(o) && o.error ? o.error : o);
  });
  return { routes: c, dataRoutes: e, serverMode: h, staticHandler: i, errorHandler: n };
}
async function FV(t, a, r, l, c, e, h) {
  try {
    let i = await r.queryRoute(c, { routeId: l, requestContext: e });
    if (pd(i)) {
      let n = new Headers(i.headers), o = n.get("Location");
      return n.set("X-Remix-Redirect", a.basename && K1(o, a.basename) || o), n.set("X-Remix-Status", i.status), n.delete("Location"), i.headers.get("Set-Cookie") !== null && n.set("X-Remix-Revalidate", "yes"), new Response(null, { status: 204, headers: n });
    }
    if (Y3 in i) {
      let n = i[Y3], o = zd(n, c.signal, t), d = n.init || {}, v = new Headers(d.headers);
      return v.set("Content-Type", "text/remix-deferred"), v.set("X-Remix-Response", "yes"), d.headers = v, new Response(o, d);
    }
    return i.headers.set("X-Remix-Response", "yes"), i;
  } catch (i) {
    if (f5(i))
      return i.headers.set("X-Remix-Catch", "yes"), i;
    if (N1(i))
      return i && h(i), Nd(i, t);
    let n = i instanceof Error || i instanceof DOMException ? i : new Error("Unexpected Server Error");
    return h(n), q0(J3(n, t), { status: 500, headers: { "X-Remix-Error": "yes" } });
  }
}
async function kV(t, a, r, l, c, e, h) {
  let i;
  try {
    i = await r.query(l, { requestContext: c });
  } catch (v) {
    return e(v), new Response(null, { status: 500 });
  }
  if (f5(i))
    return i;
  i.errors && (Object.values(i.errors).forEach((v) => {
    (!N1(v) || v.error) && e(v);
  }), i.errors = lc(i.errors, t));
  let n = Vd(a, i), o = { manifest: a.assets, routeModules: Md(a.routes), staticHandlerContext: i, criticalCss: h, serverHandoffString: gc({ url: i.location.pathname, basename: a.basename, criticalCss: h, state: { loaderData: i.loaderData, actionData: i.actionData, errors: cc(i.errors, t) }, future: a.future, isSpaMode: a.isSpaMode }), future: a.future, isSpaMode: a.isSpaMode, serializeError: (v) => J3(v, t) }, d = a.entry.module.default;
  try {
    return await d(l, i.statusCode, n, o, c);
  } catch (v) {
    e(v);
    let g = v;
    if (f5(v)) {
      let u;
      try {
        let z = v.headers.get("Content-Type");
        z && /\bapplication\/json\b/.test(z) ? v.body == null ? u = null : u = await v.json() : u = await v.text(), g = new p5(v.status, v.statusText, u);
      } catch {
      }
    }
    i = Jl(r.dataRoutes, i, g), i.errors && (i.errors = lc(i.errors, t)), o = { ...o, staticHandlerContext: i, serverHandoffString: gc({ url: i.location.pathname, basename: a.basename, state: { loaderData: i.loaderData, actionData: i.actionData, errors: cc(i.errors, t) }, future: a.future, isSpaMode: a.isSpaMode }) };
    try {
      return await d(l, i.statusCode, n, o, c);
    } catch (u) {
      return e(u), _d(u, t);
    }
  }
}
async function RV(t, a, r, l, c, e) {
  try {
    let h = await a.queryRoute(l, { routeId: r, requestContext: c });
    return oc(!(Y3 in h), `You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`), oc(f5(h), "Expected a Response to be returned from queryRoute"), h;
  } catch (h) {
    return f5(h) ? (h.headers.set("X-Remix-Catch", "yes"), h) : N1(h) ? (h && e(h), Nd(h, t)) : (e(h), _d(h, t));
  }
}
function Nd(t, a) {
  return q0(J3(t.error || new Error("Unexpected Server Error"), a), { status: t.status, statusText: t.statusText, headers: { "X-Remix-Error": "yes" } });
}
function _d(t, a) {
  let r = "Unexpected Server Error";
  return a !== y0.Production && (r += `

${String(t)}`), new Response(r, { status: 500, headers: { "Content-Type": "text/plain" } });
}
var jd;
var Ud = o1(() => {
  M5();
  fd();
  ec();
  Cd();
  Ld();
  ac();
  wd();
  Rd();
  R7();
  Ed();
  sc();
  jd = (t, a) => {
    let r, l, c, e, h;
    return async function(n, o = {}) {
      if (r = typeof t == "function" ? await t() : t, a ??= r.mode, typeof t == "function") {
        let p = Wd(r, a);
        l = p.routes, c = p.serverMode, e = p.staticHandler, h = p.errorHandler;
      } else if (!l || !c || !e || !h) {
        let p = Wd(r, a);
        l = p.routes, c = p.serverMode, e = p.staticHandler, h = p.errorHandler;
      }
      let d = new URL(n.url), v = Bd(l, d.pathname, r.basename), g = (p) => {
        if (a === y0.Development) {
          var s, M;
          (s = uc()) === null || s === void 0 || (M = s.processRequestError) === null || M === void 0 || M.call(s, p);
        }
        h(p, { context: o, params: v && v.length > 0 ? v[0].params : {}, request: n });
      }, u;
      if (d.searchParams.has("_data")) {
        let p = d.searchParams.get("_data");
        if (u = await FV(c, r, e, p, n, o, g), r.entry.module.handleDataRequest) {
          var z;
          u = await r.entry.module.handleDataRequest(u, { context: o, params: (v == null || (z = v.find((s) => s.route.id == p)) === null || z === void 0 ? void 0 : z.params) || {}, request: n });
        }
      } else if (v && v[v.length - 1].route.module.default == null && v[v.length - 1].route.module.ErrorBoundary == null)
        u = await RV(c, e, v.slice(-1)[0].route.id, n, o, g);
      else {
        var f, m;
        let p = a === y0.Development ? await ((f = uc()) === null || f === void 0 || (m = f.getCriticalCss) === null || m === void 0 ? void 0 : m.call(f, r, d.pathname)) : void 0;
        u = await kV(c, r, e, n, o, g, p);
      }
      return n.method === "HEAD" ? new Response(null, { headers: u.headers, status: u.status, statusText: u.statusText }) : u;
    };
  };
});
function pc(t) {
  return `__flash_${t}__`;
}
function zc(t) {
  m7(t.isSigned, `The "${t.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}
var Pt;
var Gd;
var qd;
var Mc = o1(() => {
  V7();
  Nl();
  Pt = (t = {}, a = "") => {
    let r = new Map(Object.entries(t));
    return { get id() {
      return a;
    }, get data() {
      return Object.fromEntries(r);
    }, has(l) {
      return r.has(l) || r.has(pc(l));
    }, get(l) {
      if (r.has(l))
        return r.get(l);
      let c = pc(l);
      if (r.has(c)) {
        let e = r.get(c);
        return r.delete(c), e;
      }
    }, set(l, c) {
      r.set(l, c);
    }, flash(l, c) {
      r.set(pc(l), c);
    }, unset(l) {
      r.delete(l);
    } };
  }, Gd = (t) => t != null && typeof t.id == "string" && typeof t.data < "u" && typeof t.has == "function" && typeof t.get == "function" && typeof t.set == "function" && typeof t.flash == "function" && typeof t.unset == "function", qd = (t) => ({ cookie: a, createData: r, readData: l, updateData: c, deleteData: e }) => {
    let h = N3(a) ? a : t(a?.name || "__session", a);
    return zc(h), { async getSession(i, n) {
      let o = i && await h.parse(i, n), d = o && await l(o);
      return Pt(d || {}, o || "");
    }, async commitSession(i, n) {
      let { id: o, data: d } = i, v = n?.maxAge != null ? new Date(Date.now() + n.maxAge * 1e3) : n?.expires != null ? n.expires : h.expires;
      return o ? await c(o, d, v) : o = await r(d, v), h.serialize(o, n);
    }, async destroySession(i, n) {
      return await e(i.id), h.serialize("", { ...n, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  };
});
var Kd;
var $d = o1(() => {
  V7();
  Mc();
  Kd = (t) => ({ cookie: a } = {}) => {
    let r = N3(a) ? a : t(a?.name || "__session", a);
    return zc(r), { async getSession(l, c) {
      return Pt(l && await r.parse(l, c) || {});
    }, async commitSession(l, c) {
      let e = await r.serialize(l.data, c);
      if (e.length > 4096)
        throw new Error("Cookie length will exceed browser maximum. Length: " + e.length);
      return e;
    }, async destroySession(l, c) {
      return r.serialize("", { ...c, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  };
});
var Xd;
var Qd = o1(() => {
  Xd = (t) => ({ cookie: a } = {}) => {
    let r = /* @__PURE__ */ new Map();
    return t({ cookie: a, async createData(l, c) {
      let e = Math.random().toString(36).substring(2, 10);
      return r.set(e, { data: l, expires: c }), e;
    }, async readData(l) {
      if (r.has(l)) {
        let { data: c, expires: e } = r.get(l);
        if (!e || e > /* @__PURE__ */ new Date())
          return c;
        e && r.delete(l);
      }
      return null;
    }, async updateData(l, c, e) {
      r.set(l, { data: c, expires: e });
    }, async deleteData(l) {
      r.delete(l);
    } });
  };
});
var a6;
var fc = o1(() => {
  a6 = class extends Error {
    constructor(a, r) {
      super(`Field "${a}" exceeded upload size of ${r} bytes.`), this.field = a, this.maxBytes = r;
    }
  };
});
function Yd({ filter: t, maxPartSize: a = 3e6 } = {}) {
  return async ({ filename: r, contentType: l, name: c, data: e }) => {
    if (t && !await t({ filename: r, contentType: l, name: c }))
      return;
    let h = 0, i = [];
    for await (let n of e) {
      if (h += n.byteLength, h > a)
        throw new a6(c, a);
      i.push(n);
    }
    return typeof r == "string" ? new File(i, r, { type: l }) : await new Blob(i, { type: l }).text();
  };
}
var Jd = o1(() => {
  fc();
});
var Hc = {};
u5(Hc, { MaxPartSizeExceededError: () => a6, broadcastDevReady: () => Id, createCookieFactory: () => Vo, createCookieSessionStorageFactory: () => Kd, createMemorySessionStorageFactory: () => Xd, createRequestHandler: () => jd, createSession: () => Pt, createSessionStorageFactory: () => qd, defer: () => gd, isCookie: () => N3, isSession: () => Gd, json: () => Rt, logDevReady: () => bd, redirect: () => k7, redirectDocument: () => ud, unstable_composeUploadHandlers: () => Fo, unstable_createMemoryUploadHandler: () => Yd, unstable_parseMultipartFormData: () => ko, unstable_setDevServerHooks: () => Td });
var mc = o1(() => {
  V7();
  Ro();
  R7();
  Ud();
  Mc();
  $d();
  Qd();
  Jd();
  fc();
  sc();
});
var av = J1((O7) => {
  "use strict";
  Object.defineProperty(O7, "__esModule", { value: true });
  var xc = new TextEncoder(), OV = async (t, a) => {
    let r = await tv(a, ["sign"]), l = xc.encode(t), c = await crypto.subtle.sign("HMAC", r, l), e = btoa(String.fromCharCode(...new Uint8Array(c))).replace(/=+$/, "");
    return t + "." + e;
  }, PV = async (t, a) => {
    let r = t.lastIndexOf("."), l = t.slice(0, r), c = t.slice(r + 1), e = await tv(a, ["verify"]), h = xc.encode(l), i = EV(atob(c));
    return await crypto.subtle.verify("HMAC", e, i, h) ? l : false;
  };
  async function tv(t, a) {
    return await crypto.subtle.importKey("raw", xc.encode(t), { name: "HMAC", hash: "SHA-256" }, false, a);
  }
  function EV(t) {
    let a = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      a[r] = t.charCodeAt(r);
    return a;
  }
  O7.sign = OV;
  O7.unsign = PV;
});
var Cc = J1((r6) => {
  "use strict";
  Object.defineProperty(r6, "__esModule", { value: true });
  var P7 = (mc(), j3(Hc)), rv = av(), Vc = P7.createCookieFactory({ sign: rv.sign, unsign: rv.unsign }), IV = P7.createCookieSessionStorageFactory(Vc), lv = P7.createSessionStorageFactory(Vc), bV = P7.createMemorySessionStorageFactory(lv);
  r6.createCookie = Vc;
  r6.createCookieSessionStorage = IV;
  r6.createMemorySessionStorage = bV;
  r6.createSessionStorage = lv;
});
var cv = J1((Lc) => {
  "use strict";
  Object.defineProperty(Lc, "__esModule", { value: true });
  var DV = Cc();
  function TV({ cookie: t, kv: a }) {
    return DV.createSessionStorage({ cookie: t, async createData(r, l) {
      for (; ; ) {
        let c = new Uint8Array(8);
        crypto.getRandomValues(c);
        let e = [...c].map((h) => h.toString(16).padStart(2, "0")).join("");
        if (!await a.get(e, "json"))
          return await a.put(e, JSON.stringify(r), { expiration: l ? Math.round(l.getTime() / 1e3) : void 0 }), e;
      }
    }, async readData(r) {
      let l = await a.get(r);
      return l ? JSON.parse(l) : null;
    }, async updateData(r, l, c) {
      await a.put(r, JSON.stringify(l), { expiration: c ? Math.round(c.getTime() / 1e3) : void 0 });
    }, async deleteData(r) {
      await a.delete(r);
    } });
  }
  Lc.createWorkersKVSessionStorage = TV;
});
var Bc = J1((b1) => {
  "use strict";
  Object.defineProperty(b1, "__esModule", { value: true });
  var WV = cv(), E7 = Cc(), O2 = (mc(), j3(Hc));
  b1.createWorkersKVSessionStorage = WV.createWorkersKVSessionStorage;
  b1.createCookie = E7.createCookie;
  b1.createCookieSessionStorage = E7.createCookieSessionStorage;
  b1.createMemorySessionStorage = E7.createMemorySessionStorage;
  b1.createSessionStorage = E7.createSessionStorage;
  Object.defineProperty(b1, "MaxPartSizeExceededError", { enumerable: true, get: function() {
    return O2.MaxPartSizeExceededError;
  } });
  Object.defineProperty(b1, "broadcastDevReady", { enumerable: true, get: function() {
    return O2.broadcastDevReady;
  } });
  Object.defineProperty(b1, "createRequestHandler", { enumerable: true, get: function() {
    return O2.createRequestHandler;
  } });
  Object.defineProperty(b1, "createSession", { enumerable: true, get: function() {
    return O2.createSession;
  } });
  Object.defineProperty(b1, "defer", { enumerable: true, get: function() {
    return O2.defer;
  } });
  Object.defineProperty(b1, "isCookie", { enumerable: true, get: function() {
    return O2.isCookie;
  } });
  Object.defineProperty(b1, "isSession", { enumerable: true, get: function() {
    return O2.isSession;
  } });
  Object.defineProperty(b1, "json", { enumerable: true, get: function() {
    return O2.json;
  } });
  Object.defineProperty(b1, "logDevReady", { enumerable: true, get: function() {
    return O2.logDevReady;
  } });
  Object.defineProperty(b1, "redirect", { enumerable: true, get: function() {
    return O2.redirect;
  } });
  Object.defineProperty(b1, "redirectDocument", { enumerable: true, get: function() {
    return O2.redirectDocument;
  } });
  Object.defineProperty(b1, "unstable_composeUploadHandlers", { enumerable: true, get: function() {
    return O2.unstable_composeUploadHandlers;
  } });
  Object.defineProperty(b1, "unstable_createMemoryUploadHandler", { enumerable: true, get: function() {
    return O2.unstable_createMemoryUploadHandler;
  } });
  Object.defineProperty(b1, "unstable_parseMultipartFormData", { enumerable: true, get: function() {
    return O2.unstable_parseMultipartFormData;
  } });
});
var Mv = J1((t1) => {
  "use strict";
  var Et = Symbol.for("react.element"), jV = Symbol.for("react.portal"), NV = Symbol.for("react.fragment"), _V = Symbol.for("react.strict_mode"), UV = Symbol.for("react.profiler"), GV = Symbol.for("react.provider"), qV = Symbol.for("react.context"), KV = Symbol.for("react.forward_ref"), $V = Symbol.for("react.suspense"), XV = Symbol.for("react.memo"), QV = Symbol.for("react.lazy"), iv = Symbol.iterator;
  function YV(t) {
    return t === null || typeof t != "object" ? null : (t = iv && t[iv] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var dv = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, vv = Object.assign, gv = {};
  function l6(t, a, r) {
    this.props = t, this.context = a, this.refs = gv, this.updater = r || dv;
  }
  l6.prototype.isReactComponent = {};
  l6.prototype.setState = function(t, a) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, a, "setState");
  };
  l6.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function uv() {
  }
  uv.prototype = l6.prototype;
  function Zc(t, a, r) {
    this.props = t, this.context = a, this.refs = gv, this.updater = r || dv;
  }
  var Sc = Zc.prototype = new uv();
  Sc.constructor = Zc;
  vv(Sc, l6.prototype);
  Sc.isPureReactComponent = true;
  var nv = Array.isArray, sv = Object.prototype.hasOwnProperty, yc = { current: null }, pv = { key: true, ref: true, __self: true, __source: true };
  function zv(t, a, r) {
    var l, c = {}, e = null, h = null;
    if (a != null)
      for (l in a.ref !== void 0 && (h = a.ref), a.key !== void 0 && (e = "" + a.key), a)
        sv.call(a, l) && !pv.hasOwnProperty(l) && (c[l] = a[l]);
    var i = arguments.length - 2;
    if (i === 1)
      c.children = r;
    else if (1 < i) {
      for (var n = Array(i), o = 0; o < i; o++)
        n[o] = arguments[o + 2];
      c.children = n;
    }
    if (t && t.defaultProps)
      for (l in i = t.defaultProps, i)
        c[l] === void 0 && (c[l] = i[l]);
    return { $$typeof: Et, type: t, key: e, ref: h, props: c, _owner: yc.current };
  }
  function JV(t, a) {
    return { $$typeof: Et, type: t.type, key: a, ref: t.ref, props: t.props, _owner: t._owner };
  }
  function Fc(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Et;
  }
  function tC(t) {
    var a = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(r) {
      return a[r];
    });
  }
  var ov = /\/+/g;
  function Ac(t, a) {
    return typeof t == "object" && t !== null && t.key != null ? tC("" + t.key) : a.toString(36);
  }
  function b7(t, a, r, l, c) {
    var e = typeof t;
    (e === "undefined" || e === "boolean") && (t = null);
    var h = false;
    if (t === null)
      h = true;
    else
      switch (e) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (t.$$typeof) {
            case Et:
            case jV:
              h = true;
          }
      }
    if (h)
      return h = t, c = c(h), t = l === "" ? "." + Ac(h, 0) : l, nv(c) ? (r = "", t != null && (r = t.replace(ov, "$&/") + "/"), b7(c, a, r, "", function(o) {
        return o;
      })) : c != null && (Fc(c) && (c = JV(c, r + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(ov, "$&/") + "/") + t)), a.push(c)), 1;
    if (h = 0, l = l === "" ? "." : l + ":", nv(t))
      for (var i = 0; i < t.length; i++) {
        e = t[i];
        var n = l + Ac(e, i);
        h += b7(e, a, r, n, c);
      }
    else if (n = YV(t), typeof n == "function")
      for (t = n.call(t), i = 0; !(e = t.next()).done; )
        e = e.value, n = l + Ac(e, i++), h += b7(e, a, r, n, c);
    else if (e === "object")
      throw a = String(t), Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function I7(t, a, r) {
    if (t == null)
      return t;
    var l = [], c = 0;
    return b7(t, l, "", "", function(e) {
      return a.call(r, e, c++);
    }), l;
  }
  function aC(t) {
    if (t._status === -1) {
      var a = t._result;
      a = a(), a.then(function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r);
      }, function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r);
      }), t._status === -1 && (t._status = 0, t._result = a);
    }
    if (t._status === 1)
      return t._result.default;
    throw t._result;
  }
  var V2 = { current: null }, D7 = { transition: null }, rC = { ReactCurrentDispatcher: V2, ReactCurrentBatchConfig: D7, ReactCurrentOwner: yc };
  t1.Children = { map: I7, forEach: function(t, a, r) {
    I7(t, function() {
      a.apply(this, arguments);
    }, r);
  }, count: function(t) {
    var a = 0;
    return I7(t, function() {
      a++;
    }), a;
  }, toArray: function(t) {
    return I7(t, function(a) {
      return a;
    }) || [];
  }, only: function(t) {
    if (!Fc(t))
      throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } };
  t1.Component = l6;
  t1.Fragment = NV;
  t1.Profiler = UV;
  t1.PureComponent = Zc;
  t1.StrictMode = _V;
  t1.Suspense = $V;
  t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rC;
  t1.cloneElement = function(t, a, r) {
    if (t == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var l = vv({}, t.props), c = t.key, e = t.ref, h = t._owner;
    if (a != null) {
      if (a.ref !== void 0 && (e = a.ref, h = yc.current), a.key !== void 0 && (c = "" + a.key), t.type && t.type.defaultProps)
        var i = t.type.defaultProps;
      for (n in a)
        sv.call(a, n) && !pv.hasOwnProperty(n) && (l[n] = a[n] === void 0 && i !== void 0 ? i[n] : a[n]);
    }
    var n = arguments.length - 2;
    if (n === 1)
      l.children = r;
    else if (1 < n) {
      i = Array(n);
      for (var o = 0; o < n; o++)
        i[o] = arguments[o + 2];
      l.children = i;
    }
    return { $$typeof: Et, type: t.type, key: c, ref: e, props: l, _owner: h };
  };
  t1.createContext = function(t) {
    return t = { $$typeof: qV, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: GV, _context: t }, t.Consumer = t;
  };
  t1.createElement = zv;
  t1.createFactory = function(t) {
    var a = zv.bind(null, t);
    return a.type = t, a;
  };
  t1.createRef = function() {
    return { current: null };
  };
  t1.forwardRef = function(t) {
    return { $$typeof: KV, render: t };
  };
  t1.isValidElement = Fc;
  t1.lazy = function(t) {
    return { $$typeof: QV, _payload: { _status: -1, _result: t }, _init: aC };
  };
  t1.memo = function(t, a) {
    return { $$typeof: XV, type: t, compare: a === void 0 ? null : a };
  };
  t1.startTransition = function(t) {
    var a = D7.transition;
    D7.transition = {};
    try {
      t();
    } finally {
      D7.transition = a;
    }
  };
  t1.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  t1.useCallback = function(t, a) {
    return V2.current.useCallback(t, a);
  };
  t1.useContext = function(t) {
    return V2.current.useContext(t);
  };
  t1.useDebugValue = function() {
  };
  t1.useDeferredValue = function(t) {
    return V2.current.useDeferredValue(t);
  };
  t1.useEffect = function(t, a) {
    return V2.current.useEffect(t, a);
  };
  t1.useId = function() {
    return V2.current.useId();
  };
  t1.useImperativeHandle = function(t, a, r) {
    return V2.current.useImperativeHandle(t, a, r);
  };
  t1.useInsertionEffect = function(t, a) {
    return V2.current.useInsertionEffect(t, a);
  };
  t1.useLayoutEffect = function(t, a) {
    return V2.current.useLayoutEffect(t, a);
  };
  t1.useMemo = function(t, a) {
    return V2.current.useMemo(t, a);
  };
  t1.useReducer = function(t, a, r) {
    return V2.current.useReducer(t, a, r);
  };
  t1.useRef = function(t) {
    return V2.current.useRef(t);
  };
  t1.useState = function(t) {
    return V2.current.useState(t);
  };
  t1.useSyncExternalStore = function(t, a, r) {
    return V2.current.useSyncExternalStore(t, a, r);
  };
  t1.useTransition = function() {
    return V2.current.useTransition();
  };
  t1.version = "18.2.0";
});
var _ = J1((qk, fv) => {
  "use strict";
  fv.exports = Mv();
});
var Zv = J1((M1) => {
  "use strict";
  function Pc(t, a) {
    var r = t.length;
    t.push(a);
    t:
      for (; 0 < r; ) {
        var l = r - 1 >>> 1, c = t[l];
        if (0 < T7(c, a))
          t[l] = a, t[r] = c, r = l;
        else
          break t;
      }
  }
  function F0(t) {
    return t.length === 0 ? null : t[0];
  }
  function j7(t) {
    if (t.length === 0)
      return null;
    var a = t[0], r = t.pop();
    if (r !== a) {
      t[0] = r;
      t:
        for (var l = 0, c = t.length, e = c >>> 1; l < e; ) {
          var h = 2 * (l + 1) - 1, i = t[h], n = h + 1, o = t[n];
          if (0 > T7(i, r))
            n < c && 0 > T7(o, i) ? (t[l] = o, t[n] = r, l = n) : (t[l] = i, t[h] = r, l = h);
          else if (n < c && 0 > T7(o, r))
            t[l] = o, t[n] = r, l = n;
          else
            break t;
        }
    }
    return a;
  }
  function T7(t, a) {
    var r = t.sortIndex - a.sortIndex;
    return r !== 0 ? r : t.id - a.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (Hv = performance, M1.unstable_now = function() {
    return Hv.now();
  }) : (kc = Date, mv = kc.now(), M1.unstable_now = function() {
    return kc.now() - mv;
  });
  var Hv, kc, mv, K0 = [], X5 = [], lC = 1, f0 = null, g2 = 3, N7 = false, Y4 = false, bt = false, Cv = typeof setTimeout == "function" ? setTimeout : null, Lv = typeof clearTimeout == "function" ? clearTimeout : null, xv = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function Ec(t) {
    for (var a = F0(X5); a !== null; ) {
      if (a.callback === null)
        j7(X5);
      else if (a.startTime <= t)
        j7(X5), a.sortIndex = a.expirationTime, Pc(K0, a);
      else
        break;
      a = F0(X5);
    }
  }
  function Ic(t) {
    if (bt = false, Ec(t), !Y4)
      if (F0(K0) !== null)
        Y4 = true, Dc(bc);
      else {
        var a = F0(X5);
        a !== null && Tc(Ic, a.startTime - t);
      }
  }
  function bc(t, a) {
    Y4 = false, bt && (bt = false, Lv(Dt), Dt = -1), N7 = true;
    var r = g2;
    try {
      for (Ec(a), f0 = F0(K0); f0 !== null && (!(f0.expirationTime > a) || t && !Av()); ) {
        var l = f0.callback;
        if (typeof l == "function") {
          f0.callback = null, g2 = f0.priorityLevel;
          var c = l(f0.expirationTime <= a);
          a = M1.unstable_now(), typeof c == "function" ? f0.callback = c : f0 === F0(K0) && j7(K0), Ec(a);
        } else
          j7(K0);
        f0 = F0(K0);
      }
      if (f0 !== null)
        var e = true;
      else {
        var h = F0(X5);
        h !== null && Tc(Ic, h.startTime - a), e = false;
      }
      return e;
    } finally {
      f0 = null, g2 = r, N7 = false;
    }
  }
  var _7 = false, W7 = null, Dt = -1, Bv = 5, wv = -1;
  function Av() {
    return !(M1.unstable_now() - wv < Bv);
  }
  function Rc() {
    if (W7 !== null) {
      var t = M1.unstable_now();
      wv = t;
      var a = true;
      try {
        a = W7(true, t);
      } finally {
        a ? It() : (_7 = false, W7 = null);
      }
    } else
      _7 = false;
  }
  var It;
  typeof xv == "function" ? It = function() {
    xv(Rc);
  } : typeof MessageChannel < "u" ? (Oc = new MessageChannel(), Vv = Oc.port2, Oc.port1.onmessage = Rc, It = function() {
    Vv.postMessage(null);
  }) : It = function() {
    Cv(Rc, 0);
  };
  var Oc, Vv;
  function Dc(t) {
    W7 = t, _7 || (_7 = true, It());
  }
  function Tc(t, a) {
    Dt = Cv(function() {
      t(M1.unstable_now());
    }, a);
  }
  M1.unstable_IdlePriority = 5;
  M1.unstable_ImmediatePriority = 1;
  M1.unstable_LowPriority = 4;
  M1.unstable_NormalPriority = 3;
  M1.unstable_Profiling = null;
  M1.unstable_UserBlockingPriority = 2;
  M1.unstable_cancelCallback = function(t) {
    t.callback = null;
  };
  M1.unstable_continueExecution = function() {
    Y4 || N7 || (Y4 = true, Dc(bc));
  };
  M1.unstable_forceFrameRate = function(t) {
    0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Bv = 0 < t ? Math.floor(1e3 / t) : 5;
  };
  M1.unstable_getCurrentPriorityLevel = function() {
    return g2;
  };
  M1.unstable_getFirstCallbackNode = function() {
    return F0(K0);
  };
  M1.unstable_next = function(t) {
    switch (g2) {
      case 1:
      case 2:
      case 3:
        var a = 3;
        break;
      default:
        a = g2;
    }
    var r = g2;
    g2 = a;
    try {
      return t();
    } finally {
      g2 = r;
    }
  };
  M1.unstable_pauseExecution = function() {
  };
  M1.unstable_requestPaint = function() {
  };
  M1.unstable_runWithPriority = function(t, a) {
    switch (t) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        t = 3;
    }
    var r = g2;
    g2 = t;
    try {
      return a();
    } finally {
      g2 = r;
    }
  };
  M1.unstable_scheduleCallback = function(t, a, r) {
    var l = M1.unstable_now();
    switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? l + r : l) : r = l, t) {
      case 1:
        var c = -1;
        break;
      case 2:
        c = 250;
        break;
      case 5:
        c = 1073741823;
        break;
      case 4:
        c = 1e4;
        break;
      default:
        c = 5e3;
    }
    return c = r + c, t = { id: lC++, callback: a, priorityLevel: t, startTime: r, expirationTime: c, sortIndex: -1 }, r > l ? (t.sortIndex = r, Pc(X5, t), F0(K0) === null && t === F0(X5) && (bt ? (Lv(Dt), Dt = -1) : bt = true, Tc(Ic, r - l))) : (t.sortIndex = c, Pc(K0, t), Y4 || N7 || (Y4 = true, Dc(bc))), t;
  };
  M1.unstable_shouldYield = Av;
  M1.unstable_wrapCallback = function(t) {
    var a = g2;
    return function() {
      var r = g2;
      g2 = a;
      try {
        return t.apply(this, arguments);
      } finally {
        g2 = r;
      }
    };
  };
});
var yv = J1(($k, Sv) => {
  "use strict";
  Sv.exports = Zv();
});
var Es = J1((r0) => {
  "use strict";
  var Ig = _(), t0 = yv();
  function F(t) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
      a += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var bg = /* @__PURE__ */ new Set(), i8 = {};
  function v3(t, a) {
    L6(t, a), L6(t + "Capture", a);
  }
  function L6(t, a) {
    for (i8[t] = a, t = 0; t < a.length; t++)
      bg.add(a[t]);
  }
  var L5 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oe = Object.prototype.hasOwnProperty, cC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fv = {}, kv = {};
  function eC(t) {
    return oe.call(kv, t) ? true : oe.call(Fv, t) ? false : cC.test(t) ? kv[t] = true : (Fv[t] = true, false);
  }
  function hC(t, a, r, l) {
    if (r !== null && r.type === 0)
      return false;
    switch (typeof a) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return l ? false : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return false;
    }
  }
  function iC(t, a, r, l) {
    if (a === null || typeof a > "u" || hC(t, a, r, l))
      return true;
    if (l)
      return false;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !a;
        case 4:
          return a === false;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return false;
  }
  function B2(t, a, r, l, c, e, h) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = r, this.propertyName = t, this.type = a, this.sanitizeURL = e, this.removeEmptyString = h;
  }
  var h2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    h2[t] = new B2(t, 0, false, t, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var a = t[0];
    h2[a] = new B2(a, 1, false, t[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    h2[t] = new B2(t, 2, false, t.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    h2[t] = new B2(t, 2, false, t, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    h2[t] = new B2(t, 3, false, t.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    h2[t] = new B2(t, 3, true, t, null, false, false);
  });
  ["capture", "download"].forEach(function(t) {
    h2[t] = new B2(t, 4, false, t, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(t) {
    h2[t] = new B2(t, 6, false, t, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(t) {
    h2[t] = new B2(t, 5, false, t.toLowerCase(), null, false, false);
  });
  var ah = /[\-:]([a-z])/g;
  function rh(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var a = t.replace(ah, rh);
    h2[a] = new B2(a, 1, false, t, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var a = t.replace(ah, rh);
    h2[a] = new B2(a, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var a = t.replace(ah, rh);
    h2[a] = new B2(a, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(t) {
    h2[t] = new B2(t, 1, false, t.toLowerCase(), null, false, false);
  });
  h2.xlinkHref = new B2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(t) {
    h2[t] = new B2(t, 1, false, t.toLowerCase(), null, true, true);
  });
  function lh(t, a, r, l) {
    var c = h2.hasOwnProperty(a) ? h2[a] : null;
    (c !== null ? c.type !== 0 : l || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (iC(a, r, c, l) && (r = null), l || c === null ? eC(a) && (r === null ? t.removeAttribute(a) : t.setAttribute(a, "" + r)) : c.mustUseProperty ? t[c.propertyName] = r === null ? c.type === 3 ? false : "" : r : (a = c.attributeName, l = c.attributeNamespace, r === null ? t.removeAttribute(a) : (c = c.type, r = c === 3 || c === 4 && r === true ? "" : "" + r, l ? t.setAttributeNS(l, a, r) : t.setAttribute(a, r))));
  }
  var Z5 = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U7 = Symbol.for("react.element"), h6 = Symbol.for("react.portal"), i6 = Symbol.for("react.fragment"), ch = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), Dg = Symbol.for("react.provider"), Tg = Symbol.for("react.context"), eh = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), hh = Symbol.for("react.memo"), Y5 = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var Wg = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var Rv = Symbol.iterator;
  function Tt(t) {
    return t === null || typeof t != "object" ? null : (t = Rv && t[Rv] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var y1 = Object.assign, Wc;
  function Kt(t) {
    if (Wc === void 0)
      try {
        throw Error();
      } catch (r) {
        var a = r.stack.trim().match(/\n( *(at )?)/);
        Wc = a && a[1] || "";
      }
    return `
` + Wc + t;
  }
  var jc = false;
  function Nc(t, a) {
    if (!t || jc)
      return "";
    jc = true;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (o) {
            var l = o;
          }
          Reflect.construct(t, [], a);
        } else {
          try {
            a.call();
          } catch (o) {
            l = o;
          }
          t.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (o) {
          l = o;
        }
        t();
      }
    } catch (o) {
      if (o && l && typeof o.stack == "string") {
        for (var c = o.stack.split(`
`), e = l.stack.split(`
`), h = c.length - 1, i = e.length - 1; 1 <= h && 0 <= i && c[h] !== e[i]; )
          i--;
        for (; 1 <= h && 0 <= i; h--, i--)
          if (c[h] !== e[i]) {
            if (h !== 1 || i !== 1)
              do
                if (h--, i--, 0 > i || c[h] !== e[i]) {
                  var n = `
` + c[h].replace(" at new ", " at ");
                  return t.displayName && n.includes("<anonymous>") && (n = n.replace("<anonymous>", t.displayName)), n;
                }
              while (1 <= h && 0 <= i);
            break;
          }
      }
    } finally {
      jc = false, Error.prepareStackTrace = r;
    }
    return (t = t ? t.displayName || t.name : "") ? Kt(t) : "";
  }
  function nC(t) {
    switch (t.tag) {
      case 5:
        return Kt(t.type);
      case 16:
        return Kt("Lazy");
      case 13:
        return Kt("Suspense");
      case 19:
        return Kt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = Nc(t.type, false), t;
      case 11:
        return t = Nc(t.type.render, false), t;
      case 1:
        return t = Nc(t.type, true), t;
      default:
        return "";
    }
  }
  function ue(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case i6:
        return "Fragment";
      case h6:
        return "Portal";
      case de:
        return "Profiler";
      case ch:
        return "StrictMode";
      case ve:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Tg:
          return (t.displayName || "Context") + ".Consumer";
        case Dg:
          return (t._context.displayName || "Context") + ".Provider";
        case eh:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case hh:
          return a = t.displayName || null, a !== null ? a : ue(t.type) || "Memo";
        case Y5:
          a = t._payload, t = t._init;
          try {
            return ue(t(a));
          } catch {
          }
      }
    return null;
  }
  function oC(t) {
    var a = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = a.render, t = t.displayName || t.name || "", a.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(a);
      case 8:
        return a === ch ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
    }
    return null;
  }
  function g4(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function jg(t) {
    var a = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function dC(t) {
    var a = jg(t) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(t.constructor.prototype, a), l = "" + t[a];
    if (!t.hasOwnProperty(a) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var c = r.get, e = r.set;
      return Object.defineProperty(t, a, { configurable: true, get: function() {
        return c.call(this);
      }, set: function(h) {
        l = "" + h, e.call(this, h);
      } }), Object.defineProperty(t, a, { enumerable: r.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(h) {
        l = "" + h;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[a];
      } };
    }
  }
  function G7(t) {
    t._valueTracker || (t._valueTracker = dC(t));
  }
  function Ng(t) {
    if (!t)
      return false;
    var a = t._valueTracker;
    if (!a)
      return true;
    var r = a.getValue(), l = "";
    return t && (l = jg(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== r ? (a.setValue(t), true) : false;
  }
  function m9(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function se(t, a) {
    var r = a.checked;
    return y1({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? t._wrapperState.initialChecked });
  }
  function Ov(t, a) {
    var r = a.defaultValue == null ? "" : a.defaultValue, l = a.checked != null ? a.checked : a.defaultChecked;
    r = g4(a.value != null ? a.value : r), t._wrapperState = { initialChecked: l, initialValue: r, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function _g(t, a) {
    a = a.checked, a != null && lh(t, "checked", a, false);
  }
  function pe(t, a) {
    _g(t, a);
    var r = g4(a.value), l = a.type;
    if (r != null)
      l === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
    else if (l === "submit" || l === "reset") {
      t.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? ze(t, a.type, r) : a.hasOwnProperty("defaultValue") && ze(t, a.type, g4(a.defaultValue)), a.checked == null && a.defaultChecked != null && (t.defaultChecked = !!a.defaultChecked);
  }
  function Pv(t, a, r) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var l = a.type;
      if (!(l !== "submit" && l !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + t._wrapperState.initialValue, r || a === t.value || (t.value = a), t.defaultValue = a;
    }
    r = t.name, r !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, r !== "" && (t.name = r);
  }
  function ze(t, a, r) {
    (a !== "number" || m9(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
  }
  var $t = Array.isArray;
  function f6(t, a, r, l) {
    if (t = t.options, a) {
      a = {};
      for (var c = 0; c < r.length; c++)
        a["$" + r[c]] = true;
      for (r = 0; r < t.length; r++)
        c = a.hasOwnProperty("$" + t[r].value), t[r].selected !== c && (t[r].selected = c), c && l && (t[r].defaultSelected = true);
    } else {
      for (r = "" + g4(r), a = null, c = 0; c < t.length; c++) {
        if (t[c].value === r) {
          t[c].selected = true, l && (t[c].defaultSelected = true);
          return;
        }
        a !== null || t[c].disabled || (a = t[c]);
      }
      a !== null && (a.selected = true);
    }
  }
  function Me(t, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(F(91));
    return y1({}, a, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Ev(t, a) {
    var r = a.value;
    if (r == null) {
      if (r = a.children, a = a.defaultValue, r != null) {
        if (a != null)
          throw Error(F(92));
        if ($t(r)) {
          if (1 < r.length)
            throw Error(F(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), r = a;
    }
    t._wrapperState = { initialValue: g4(r) };
  }
  function Ug(t, a) {
    var r = g4(a.value), l = g4(a.defaultValue);
    r != null && (r = "" + r, r !== t.value && (t.value = r), a.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)), l != null && (t.defaultValue = "" + l);
  }
  function Iv(t) {
    var a = t.textContent;
    a === t._wrapperState.initialValue && a !== "" && a !== null && (t.value = a);
  }
  function Gg(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fe(t, a) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Gg(a) : t === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var q7, qg = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, r, l, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(a, r, l, c);
      });
    } : t;
  }(function(t, a) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = a;
    else {
      for (q7 = q7 || document.createElement("div"), q7.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = q7.firstChild; t.firstChild; )
        t.removeChild(t.firstChild);
      for (; a.firstChild; )
        t.appendChild(a.firstChild);
    }
  });
  function n8(t, a) {
    if (a) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = a;
        return;
      }
    }
    t.textContent = a;
  }
  var Yt = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, vC = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yt).forEach(function(t) {
    vC.forEach(function(a) {
      a = a + t.charAt(0).toUpperCase() + t.substring(1), Yt[a] = Yt[t];
    });
  });
  function Kg(t, a, r) {
    return a == null || typeof a == "boolean" || a === "" ? "" : r || typeof a != "number" || a === 0 || Yt.hasOwnProperty(t) && Yt[t] ? ("" + a).trim() : a + "px";
  }
  function $g(t, a) {
    t = t.style;
    for (var r in a)
      if (a.hasOwnProperty(r)) {
        var l = r.indexOf("--") === 0, c = Kg(r, a[r], l);
        r === "float" && (r = "cssFloat"), l ? t.setProperty(r, c) : t[r] = c;
      }
  }
  var gC = y1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function He(t, a) {
    if (a) {
      if (gC[t] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(F(137, t));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(F(60));
        if (typeof a.dangerouslySetInnerHTML != "object" || !("__html" in a.dangerouslySetInnerHTML))
          throw Error(F(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(F(62));
    }
  }
  function me(t, a) {
    if (t.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var xe = null;
  function ih(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ve = null, H6 = null, m6 = null;
  function bv(t) {
    if (t = w8(t)) {
      if (typeof Ve != "function")
        throw Error(F(280));
      var a = t.stateNode;
      a && (a = K9(a), Ve(t.stateNode, t.type, a));
    }
  }
  function Xg(t) {
    H6 ? m6 ? m6.push(t) : m6 = [t] : H6 = t;
  }
  function Qg() {
    if (H6) {
      var t = H6, a = m6;
      if (m6 = H6 = null, bv(t), a)
        for (t = 0; t < a.length; t++)
          bv(a[t]);
    }
  }
  function Yg(t, a) {
    return t(a);
  }
  function Jg() {
  }
  var _c = false;
  function tu(t, a, r) {
    if (_c)
      return t(a, r);
    _c = true;
    try {
      return Yg(t, a, r);
    } finally {
      _c = false, (H6 !== null || m6 !== null) && (Jg(), Qg());
    }
  }
  function o8(t, a) {
    var r = t.stateNode;
    if (r === null)
      return null;
    var l = K9(r);
    if (l === null)
      return null;
    r = l[a];
    t:
      switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
          break t;
        default:
          t = false;
      }
    if (t)
      return null;
    if (r && typeof r != "function")
      throw Error(F(231, a, typeof r));
    return r;
  }
  var Ce = false;
  if (L5)
    try {
      c6 = {}, Object.defineProperty(c6, "passive", { get: function() {
        Ce = true;
      } }), window.addEventListener("test", c6, c6), window.removeEventListener("test", c6, c6);
    } catch {
      Ce = false;
    }
  var c6;
  function uC(t, a, r, l, c, e, h, i, n) {
    var o = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(r, o);
    } catch (d) {
      this.onError(d);
    }
  }
  var Jt = false, x9 = null, V9 = false, Le = null, sC = { onError: function(t) {
    Jt = true, x9 = t;
  } };
  function pC(t, a, r, l, c, e, h, i, n) {
    Jt = false, x9 = null, uC.apply(sC, arguments);
  }
  function zC(t, a, r, l, c, e, h, i, n) {
    if (pC.apply(this, arguments), Jt) {
      if (Jt) {
        var o = x9;
        Jt = false, x9 = null;
      } else
        throw Error(F(198));
      V9 || (V9 = true, Le = o);
    }
  }
  function g3(t) {
    var a = t, r = t;
    if (t.alternate)
      for (; a.return; )
        a = a.return;
    else {
      t = a;
      do
        a = t, a.flags & 4098 && (r = a.return), t = a.return;
      while (t);
    }
    return a.tag === 3 ? r : null;
  }
  function au(t) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function Dv(t) {
    if (g3(t) !== t)
      throw Error(F(188));
  }
  function MC(t) {
    var a = t.alternate;
    if (!a) {
      if (a = g3(t), a === null)
        throw Error(F(188));
      return a !== t ? null : t;
    }
    for (var r = t, l = a; ; ) {
      var c = r.return;
      if (c === null)
        break;
      var e = c.alternate;
      if (e === null) {
        if (l = c.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (c.child === e.child) {
        for (e = c.child; e; ) {
          if (e === r)
            return Dv(c), t;
          if (e === l)
            return Dv(c), a;
          e = e.sibling;
        }
        throw Error(F(188));
      }
      if (r.return !== l.return)
        r = c, l = e;
      else {
        for (var h = false, i = c.child; i; ) {
          if (i === r) {
            h = true, r = c, l = e;
            break;
          }
          if (i === l) {
            h = true, l = c, r = e;
            break;
          }
          i = i.sibling;
        }
        if (!h) {
          for (i = e.child; i; ) {
            if (i === r) {
              h = true, r = e, l = c;
              break;
            }
            if (i === l) {
              h = true, l = e, r = c;
              break;
            }
            i = i.sibling;
          }
          if (!h)
            throw Error(F(189));
        }
      }
      if (r.alternate !== l)
        throw Error(F(190));
    }
    if (r.tag !== 3)
      throw Error(F(188));
    return r.stateNode.current === r ? t : a;
  }
  function ru(t) {
    return t = MC(t), t !== null ? lu(t) : null;
  }
  function lu(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var a = lu(t);
      if (a !== null)
        return a;
      t = t.sibling;
    }
    return null;
  }
  var cu = t0.unstable_scheduleCallback, Tv = t0.unstable_cancelCallback, fC = t0.unstable_shouldYield, HC = t0.unstable_requestPaint, D1 = t0.unstable_now, mC = t0.unstable_getCurrentPriorityLevel, nh = t0.unstable_ImmediatePriority, eu = t0.unstable_UserBlockingPriority, C9 = t0.unstable_NormalPriority, xC = t0.unstable_LowPriority, hu = t0.unstable_IdlePriority, _9 = null, Y0 = null;
  function VC(t) {
    if (Y0 && typeof Y0.onCommitFiberRoot == "function")
      try {
        Y0.onCommitFiberRoot(_9, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  var E0 = Math.clz32 ? Math.clz32 : BC, CC = Math.log, LC = Math.LN2;
  function BC(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (CC(t) / LC | 0) | 0;
  }
  var K7 = 64, $7 = 4194304;
  function Xt(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function L9(t, a) {
    var r = t.pendingLanes;
    if (r === 0)
      return 0;
    var l = 0, c = t.suspendedLanes, e = t.pingedLanes, h = r & 268435455;
    if (h !== 0) {
      var i = h & ~c;
      i !== 0 ? l = Xt(i) : (e &= h, e !== 0 && (l = Xt(e)));
    } else
      h = r & ~c, h !== 0 ? l = Xt(h) : e !== 0 && (l = Xt(e));
    if (l === 0)
      return 0;
    if (a !== 0 && a !== l && !(a & c) && (c = l & -l, e = a & -a, c >= e || c === 16 && (e & 4194240) !== 0))
      return a;
    if (l & 4 && (l |= r & 16), a = t.entangledLanes, a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; )
        r = 31 - E0(a), c = 1 << r, l |= t[r], a &= ~c;
    return l;
  }
  function wC(t, a) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return a + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function AC(t, a) {
    for (var r = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, e = t.pendingLanes; 0 < e; ) {
      var h = 31 - E0(e), i = 1 << h, n = c[h];
      n === -1 ? (!(i & r) || i & l) && (c[h] = wC(i, a)) : n <= a && (t.expiredLanes |= i), e &= ~i;
    }
  }
  function Be(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var t = K7;
    return K7 <<= 1, !(K7 & 4194240) && (K7 = 64), t;
  }
  function Uc(t) {
    for (var a = [], r = 0; 31 > r; r++)
      a.push(t);
    return a;
  }
  function L8(t, a, r) {
    t.pendingLanes |= a, a !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, a = 31 - E0(a), t[a] = r;
  }
  function ZC(t, a) {
    var r = t.pendingLanes & ~a;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= a, t.mutableReadLanes &= a, t.entangledLanes &= a, a = t.entanglements;
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < r; ) {
      var c = 31 - E0(r), e = 1 << c;
      a[c] = 0, l[c] = -1, t[c] = -1, r &= ~e;
    }
  }
  function oh(t, a) {
    var r = t.entangledLanes |= a;
    for (t = t.entanglements; r; ) {
      var l = 31 - E0(r), c = 1 << l;
      c & a | t[l] & a && (t[l] |= a), r &= ~c;
    }
  }
  var u1 = 0;
  function nu(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ou, dh, du, vu, gu, we = false, X7 = [], c4 = null, e4 = null, h4 = null, d8 = /* @__PURE__ */ new Map(), v8 = /* @__PURE__ */ new Map(), t4 = [], SC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wv(t, a) {
    switch (t) {
      case "focusin":
      case "focusout":
        c4 = null;
        break;
      case "dragenter":
      case "dragleave":
        e4 = null;
        break;
      case "mouseover":
      case "mouseout":
        h4 = null;
        break;
      case "pointerover":
      case "pointerout":
        d8.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        v8.delete(a.pointerId);
    }
  }
  function Wt(t, a, r, l, c, e) {
    return t === null || t.nativeEvent !== e ? (t = { blockedOn: a, domEventName: r, eventSystemFlags: l, nativeEvent: e, targetContainers: [c] }, a !== null && (a = w8(a), a !== null && dh(a)), t) : (t.eventSystemFlags |= l, a = t.targetContainers, c !== null && a.indexOf(c) === -1 && a.push(c), t);
  }
  function yC(t, a, r, l, c) {
    switch (a) {
      case "focusin":
        return c4 = Wt(c4, t, a, r, l, c), true;
      case "dragenter":
        return e4 = Wt(e4, t, a, r, l, c), true;
      case "mouseover":
        return h4 = Wt(h4, t, a, r, l, c), true;
      case "pointerover":
        var e = c.pointerId;
        return d8.set(e, Wt(d8.get(e) || null, t, a, r, l, c)), true;
      case "gotpointercapture":
        return e = c.pointerId, v8.set(e, Wt(v8.get(e) || null, t, a, r, l, c)), true;
    }
    return false;
  }
  function uu(t) {
    var a = a3(t.target);
    if (a !== null) {
      var r = g3(a);
      if (r !== null) {
        if (a = r.tag, a === 13) {
          if (a = au(r), a !== null) {
            t.blockedOn = a, gu(t.priority, function() {
              du(r);
            });
            return;
          }
        } else if (a === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function d9(t) {
    if (t.blockedOn !== null)
      return false;
    for (var a = t.targetContainers; 0 < a.length; ) {
      var r = Ae(t.domEventName, t.eventSystemFlags, a[0], t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var l = new r.constructor(r.type, r);
        xe = l, r.target.dispatchEvent(l), xe = null;
      } else
        return a = w8(r), a !== null && dh(a), t.blockedOn = r, false;
      a.shift();
    }
    return true;
  }
  function jv(t, a, r) {
    d9(t) && r.delete(a);
  }
  function FC() {
    we = false, c4 !== null && d9(c4) && (c4 = null), e4 !== null && d9(e4) && (e4 = null), h4 !== null && d9(h4) && (h4 = null), d8.forEach(jv), v8.forEach(jv);
  }
  function jt(t, a) {
    t.blockedOn === a && (t.blockedOn = null, we || (we = true, t0.unstable_scheduleCallback(t0.unstable_NormalPriority, FC)));
  }
  function g8(t) {
    function a(c) {
      return jt(c, t);
    }
    if (0 < X7.length) {
      jt(X7[0], t);
      for (var r = 1; r < X7.length; r++) {
        var l = X7[r];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (c4 !== null && jt(c4, t), e4 !== null && jt(e4, t), h4 !== null && jt(h4, t), d8.forEach(a), v8.forEach(a), r = 0; r < t4.length; r++)
      l = t4[r], l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < t4.length && (r = t4[0], r.blockedOn === null); )
      uu(r), r.blockedOn === null && t4.shift();
  }
  var x6 = Z5.ReactCurrentBatchConfig, B9 = true;
  function kC(t, a, r, l) {
    var c = u1, e = x6.transition;
    x6.transition = null;
    try {
      u1 = 1, vh(t, a, r, l);
    } finally {
      u1 = c, x6.transition = e;
    }
  }
  function RC(t, a, r, l) {
    var c = u1, e = x6.transition;
    x6.transition = null;
    try {
      u1 = 4, vh(t, a, r, l);
    } finally {
      u1 = c, x6.transition = e;
    }
  }
  function vh(t, a, r, l) {
    if (B9) {
      var c = Ae(t, a, r, l);
      if (c === null)
        Yc(t, a, l, w9, r), Wv(t, l);
      else if (yC(c, t, a, r, l))
        l.stopPropagation();
      else if (Wv(t, l), a & 4 && -1 < SC.indexOf(t)) {
        for (; c !== null; ) {
          var e = w8(c);
          if (e !== null && ou(e), e = Ae(t, a, r, l), e === null && Yc(t, a, l, w9, r), e === c)
            break;
          c = e;
        }
        c !== null && l.stopPropagation();
      } else
        Yc(t, a, l, null, r);
    }
  }
  var w9 = null;
  function Ae(t, a, r, l) {
    if (w9 = null, t = ih(l), t = a3(t), t !== null)
      if (a = g3(t), a === null)
        t = null;
      else if (r = a.tag, r === 13) {
        if (t = au(a), t !== null)
          return t;
        t = null;
      } else if (r === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
          return a.tag === 3 ? a.stateNode.containerInfo : null;
        t = null;
      } else
        a !== t && (t = null);
    return w9 = t, null;
  }
  function su(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (mC()) {
          case nh:
            return 1;
          case eu:
            return 4;
          case C9:
          case xC:
            return 16;
          case hu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var r4 = null, gh = null, v9 = null;
  function pu() {
    if (v9)
      return v9;
    var t, a = gh, r = a.length, l, c = "value" in r4 ? r4.value : r4.textContent, e = c.length;
    for (t = 0; t < r && a[t] === c[t]; t++)
      ;
    var h = r - t;
    for (l = 1; l <= h && a[r - l] === c[e - l]; l++)
      ;
    return v9 = c.slice(t, 1 < l ? 1 - l : void 0);
  }
  function g9(t) {
    var a = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Q7() {
    return true;
  }
  function Nv() {
    return false;
  }
  function a0(t) {
    function a(r, l, c, e, h) {
      this._reactName = r, this._targetInst = c, this.type = l, this.nativeEvent = e, this.target = h, this.currentTarget = null;
      for (var i in t)
        t.hasOwnProperty(i) && (r = t[i], this[i] = r ? r(e) : e[i]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === false) ? Q7 : Nv, this.isPropagationStopped = Nv, this;
    }
    return y1(a.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = Q7);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = Q7);
    }, persist: function() {
    }, isPersistent: Q7 }), a;
  }
  var F6 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uh = a0(F6), B8 = y1({}, F6, { view: 0, detail: 0 }), OC = a0(B8), Gc, qc, Nt, U9 = y1({}, B8, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sh, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Nt && (Nt && t.type === "mousemove" ? (Gc = t.screenX - Nt.screenX, qc = t.screenY - Nt.screenY) : qc = Gc = 0, Nt = t), Gc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : qc;
  } }), _v = a0(U9), PC = y1({}, U9, { dataTransfer: 0 }), EC = a0(PC), IC = y1({}, B8, { relatedTarget: 0 }), Kc = a0(IC), bC = y1({}, F6, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), DC = a0(bC), TC = y1({}, F6, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), WC = a0(TC), jC = y1({}, F6, { data: 0 }), Uv = a0(jC), NC = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, _C = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, UC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function GC(t) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(t) : (t = UC[t]) ? !!a[t] : false;
  }
  function sh() {
    return GC;
  }
  var qC = y1({}, B8, { key: function(t) {
    if (t.key) {
      var a = NC[t.key] || t.key;
      if (a !== "Unidentified")
        return a;
    }
    return t.type === "keypress" ? (t = g9(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? _C[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sh, charCode: function(t) {
    return t.type === "keypress" ? g9(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? g9(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), KC = a0(qC), $C = y1({}, U9, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gv = a0($C), XC = y1({}, B8, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sh }), QC = a0(XC), YC = y1({}, F6, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), JC = a0(YC), tL = y1({}, U9, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), aL = a0(tL), rL = [9, 13, 27, 32], ph = L5 && "CompositionEvent" in window, t8 = null;
  L5 && "documentMode" in document && (t8 = document.documentMode);
  var lL = L5 && "TextEvent" in window && !t8, zu = L5 && (!ph || t8 && 8 < t8 && 11 >= t8), qv = String.fromCharCode(32), Kv = false;
  function Mu(t, a) {
    switch (t) {
      case "keyup":
        return rL.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function fu(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var n6 = false;
  function cL(t, a) {
    switch (t) {
      case "compositionend":
        return fu(a);
      case "keypress":
        return a.which !== 32 ? null : (Kv = true, qv);
      case "textInput":
        return t = a.data, t === qv && Kv ? null : t;
      default:
        return null;
    }
  }
  function eL(t, a) {
    if (n6)
      return t === "compositionend" || !ph && Mu(t, a) ? (t = pu(), v9 = gh = r4 = null, n6 = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return zu && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var hL = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function $v(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a === "input" ? !!hL[t.type] : a === "textarea";
  }
  function Hu(t, a, r, l) {
    Xg(l), a = A9(a, "onChange"), 0 < a.length && (r = new uh("onChange", "change", null, r, l), t.push({ event: r, listeners: a }));
  }
  var a8 = null, u8 = null;
  function iL(t) {
    yu(t, 0);
  }
  function G9(t) {
    var a = v6(t);
    if (Ng(a))
      return t;
  }
  function nL(t, a) {
    if (t === "change")
      return a;
  }
  var mu = false;
  L5 && (L5 ? (J7 = "oninput" in document, J7 || ($c = document.createElement("div"), $c.setAttribute("oninput", "return;"), J7 = typeof $c.oninput == "function"), Y7 = J7) : Y7 = false, mu = Y7 && (!document.documentMode || 9 < document.documentMode));
  var Y7, J7, $c;
  function Xv() {
    a8 && (a8.detachEvent("onpropertychange", xu), u8 = a8 = null);
  }
  function xu(t) {
    if (t.propertyName === "value" && G9(u8)) {
      var a = [];
      Hu(a, u8, t, ih(t)), tu(iL, a);
    }
  }
  function oL(t, a, r) {
    t === "focusin" ? (Xv(), a8 = a, u8 = r, a8.attachEvent("onpropertychange", xu)) : t === "focusout" && Xv();
  }
  function dL(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return G9(u8);
  }
  function vL(t, a) {
    if (t === "click")
      return G9(a);
  }
  function gL(t, a) {
    if (t === "input" || t === "change")
      return G9(a);
  }
  function uL(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var b0 = typeof Object.is == "function" ? Object.is : uL;
  function s8(t, a) {
    if (b0(t, a))
      return true;
    if (typeof t != "object" || t === null || typeof a != "object" || a === null)
      return false;
    var r = Object.keys(t), l = Object.keys(a);
    if (r.length !== l.length)
      return false;
    for (l = 0; l < r.length; l++) {
      var c = r[l];
      if (!oe.call(a, c) || !b0(t[c], a[c]))
        return false;
    }
    return true;
  }
  function Qv(t) {
    for (; t && t.firstChild; )
      t = t.firstChild;
    return t;
  }
  function Yv(t, a) {
    var r = Qv(t);
    t = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = t + r.textContent.length, t <= a && l >= a)
          return { node: r, offset: a - t };
        t = l;
      }
      t: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break t;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Qv(r);
    }
  }
  function Vu(t, a) {
    return t && a ? t === a ? true : t && t.nodeType === 3 ? false : a && a.nodeType === 3 ? Vu(t, a.parentNode) : "contains" in t ? t.contains(a) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(a) & 16) : false : false;
  }
  function Cu() {
    for (var t = window, a = m9(); a instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof a.contentWindow.location.href == "string";
      } catch {
        r = false;
      }
      if (r)
        t = a.contentWindow;
      else
        break;
      a = m9(t.document);
    }
    return a;
  }
  function zh(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a && (a === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || a === "textarea" || t.contentEditable === "true");
  }
  function sL(t) {
    var a = Cu(), r = t.focusedElem, l = t.selectionRange;
    if (a !== r && r && r.ownerDocument && Vu(r.ownerDocument.documentElement, r)) {
      if (l !== null && zh(r)) {
        if (a = l.start, t = l.end, t === void 0 && (t = a), "selectionStart" in r)
          r.selectionStart = a, r.selectionEnd = Math.min(t, r.value.length);
        else if (t = (a = r.ownerDocument || document) && a.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var c = r.textContent.length, e = Math.min(l.start, c);
          l = l.end === void 0 ? e : Math.min(l.end, c), !t.extend && e > l && (c = l, l = e, e = c), c = Yv(r, e);
          var h = Yv(r, l);
          c && h && (t.rangeCount !== 1 || t.anchorNode !== c.node || t.anchorOffset !== c.offset || t.focusNode !== h.node || t.focusOffset !== h.offset) && (a = a.createRange(), a.setStart(c.node, c.offset), t.removeAllRanges(), e > l ? (t.addRange(a), t.extend(h.node, h.offset)) : (a.setEnd(h.node, h.offset), t.addRange(a)));
        }
      }
      for (a = [], t = r; t = t.parentNode; )
        t.nodeType === 1 && a.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < a.length; r++)
        t = a[r], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var pL = L5 && "documentMode" in document && 11 >= document.documentMode, o6 = null, Ze = null, r8 = null, Se = false;
  function Jv(t, a, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Se || o6 == null || o6 !== m9(l) || (l = o6, "selectionStart" in l && zh(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), r8 && s8(r8, l) || (r8 = l, l = A9(Ze, "onSelect"), 0 < l.length && (a = new uh("onSelect", "select", null, a, r), t.push({ event: a, listeners: l }), a.target = o6)));
  }
  function t9(t, a) {
    var r = {};
    return r[t.toLowerCase()] = a.toLowerCase(), r["Webkit" + t] = "webkit" + a, r["Moz" + t] = "moz" + a, r;
  }
  var d6 = { animationend: t9("Animation", "AnimationEnd"), animationiteration: t9("Animation", "AnimationIteration"), animationstart: t9("Animation", "AnimationStart"), transitionend: t9("Transition", "TransitionEnd") }, Xc = {}, Lu = {};
  L5 && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete d6.animationend.animation, delete d6.animationiteration.animation, delete d6.animationstart.animation), "TransitionEvent" in window || delete d6.transitionend.transition);
  function q9(t) {
    if (Xc[t])
      return Xc[t];
    if (!d6[t])
      return t;
    var a = d6[t], r;
    for (r in a)
      if (a.hasOwnProperty(r) && r in Lu)
        return Xc[t] = a[r];
    return t;
  }
  var Bu = q9("animationend"), wu = q9("animationiteration"), Au = q9("animationstart"), Zu = q9("transitionend"), Su = /* @__PURE__ */ new Map(), tg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function s4(t, a) {
    Su.set(t, a), v3(a, [t]);
  }
  for (a9 = 0; a9 < tg.length; a9++)
    r9 = tg[a9], ag = r9.toLowerCase(), rg = r9[0].toUpperCase() + r9.slice(1), s4(ag, "on" + rg);
  var r9, ag, rg, a9;
  s4(Bu, "onAnimationEnd");
  s4(wu, "onAnimationIteration");
  s4(Au, "onAnimationStart");
  s4("dblclick", "onDoubleClick");
  s4("focusin", "onFocus");
  s4("focusout", "onBlur");
  s4(Zu, "onTransitionEnd");
  L6("onMouseEnter", ["mouseout", "mouseover"]);
  L6("onMouseLeave", ["mouseout", "mouseover"]);
  L6("onPointerEnter", ["pointerout", "pointerover"]);
  L6("onPointerLeave", ["pointerout", "pointerover"]);
  v3("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  v3("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  v3("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  v3("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  v3("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  v3("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zL = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));
  function lg(t, a, r) {
    var l = t.type || "unknown-event";
    t.currentTarget = r, zC(l, a, void 0, t), t.currentTarget = null;
  }
  function yu(t, a) {
    a = (a & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var l = t[r], c = l.event;
      l = l.listeners;
      t: {
        var e = void 0;
        if (a)
          for (var h = l.length - 1; 0 <= h; h--) {
            var i = l[h], n = i.instance, o = i.currentTarget;
            if (i = i.listener, n !== e && c.isPropagationStopped())
              break t;
            lg(c, i, o), e = n;
          }
        else
          for (h = 0; h < l.length; h++) {
            if (i = l[h], n = i.instance, o = i.currentTarget, i = i.listener, n !== e && c.isPropagationStopped())
              break t;
            lg(c, i, o), e = n;
          }
      }
    }
    if (V9)
      throw t = Le, V9 = false, Le = null, t;
  }
  function x1(t, a) {
    var r = a[Oe];
    r === void 0 && (r = a[Oe] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    r.has(l) || (Fu(a, t, 2, false), r.add(l));
  }
  function Qc(t, a, r) {
    var l = 0;
    a && (l |= 4), Fu(r, t, l, a);
  }
  var l9 = "_reactListening" + Math.random().toString(36).slice(2);
  function p8(t) {
    if (!t[l9]) {
      t[l9] = true, bg.forEach(function(r) {
        r !== "selectionchange" && (zL.has(r) || Qc(r, false, t), Qc(r, true, t));
      });
      var a = t.nodeType === 9 ? t : t.ownerDocument;
      a === null || a[l9] || (a[l9] = true, Qc("selectionchange", false, a));
    }
  }
  function Fu(t, a, r, l) {
    switch (su(a)) {
      case 1:
        var c = kC;
        break;
      case 4:
        c = RC;
        break;
      default:
        c = vh;
    }
    r = c.bind(null, a, r, t), c = void 0, !Ce || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (c = true), l ? c !== void 0 ? t.addEventListener(a, r, { capture: true, passive: c }) : t.addEventListener(a, r, true) : c !== void 0 ? t.addEventListener(a, r, { passive: c }) : t.addEventListener(a, r, false);
  }
  function Yc(t, a, r, l, c) {
    var e = l;
    if (!(a & 1) && !(a & 2) && l !== null)
      t:
        for (; ; ) {
          if (l === null)
            return;
          var h = l.tag;
          if (h === 3 || h === 4) {
            var i = l.stateNode.containerInfo;
            if (i === c || i.nodeType === 8 && i.parentNode === c)
              break;
            if (h === 4)
              for (h = l.return; h !== null; ) {
                var n = h.tag;
                if ((n === 3 || n === 4) && (n = h.stateNode.containerInfo, n === c || n.nodeType === 8 && n.parentNode === c))
                  return;
                h = h.return;
              }
            for (; i !== null; ) {
              if (h = a3(i), h === null)
                return;
              if (n = h.tag, n === 5 || n === 6) {
                l = e = h;
                continue t;
              }
              i = i.parentNode;
            }
          }
          l = l.return;
        }
    tu(function() {
      var o = e, d = ih(r), v = [];
      t: {
        var g = Su.get(t);
        if (g !== void 0) {
          var u = uh, z = t;
          switch (t) {
            case "keypress":
              if (g9(r) === 0)
                break t;
            case "keydown":
            case "keyup":
              u = KC;
              break;
            case "focusin":
              z = "focus", u = Kc;
              break;
            case "focusout":
              z = "blur", u = Kc;
              break;
            case "beforeblur":
            case "afterblur":
              u = Kc;
              break;
            case "click":
              if (r.button === 2)
                break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u = _v;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u = EC;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u = QC;
              break;
            case Bu:
            case wu:
            case Au:
              u = DC;
              break;
            case Zu:
              u = JC;
              break;
            case "scroll":
              u = OC;
              break;
            case "wheel":
              u = aL;
              break;
            case "copy":
            case "cut":
            case "paste":
              u = WC;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u = Gv;
          }
          var f = (a & 4) !== 0, m = !f && t === "scroll", p = f ? g !== null ? g + "Capture" : null : g;
          f = [];
          for (var s = o, M; s !== null; ) {
            M = s;
            var x = M.stateNode;
            if (M.tag === 5 && x !== null && (M = x, p !== null && (x = o8(s, p), x != null && f.push(z8(s, x, M)))), m)
              break;
            s = s.return;
          }
          0 < f.length && (g = new u(g, z, null, r, d), v.push({ event: g, listeners: f }));
        }
      }
      if (!(a & 7)) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", u = t === "mouseout" || t === "pointerout", g && r !== xe && (z = r.relatedTarget || r.fromElement) && (a3(z) || z[B5]))
            break t;
          if ((u || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window, u ? (z = r.relatedTarget || r.toElement, u = o, z = z ? a3(z) : null, z !== null && (m = g3(z), z !== m || z.tag !== 5 && z.tag !== 6) && (z = null)) : (u = null, z = o), u !== z)) {
            if (f = _v, x = "onMouseLeave", p = "onMouseEnter", s = "mouse", (t === "pointerout" || t === "pointerover") && (f = Gv, x = "onPointerLeave", p = "onPointerEnter", s = "pointer"), m = u == null ? g : v6(u), M = z == null ? g : v6(z), g = new f(x, s + "leave", u, r, d), g.target = m, g.relatedTarget = M, x = null, a3(d) === o && (f = new f(p, s + "enter", z, r, d), f.target = M, f.relatedTarget = m, x = f), m = x, u && z)
              a: {
                for (f = u, p = z, s = 0, M = f; M; M = e6(M))
                  s++;
                for (M = 0, x = p; x; x = e6(x))
                  M++;
                for (; 0 < s - M; )
                  f = e6(f), s--;
                for (; 0 < M - s; )
                  p = e6(p), M--;
                for (; s--; ) {
                  if (f === p || p !== null && f === p.alternate)
                    break a;
                  f = e6(f), p = e6(p);
                }
                f = null;
              }
            else
              f = null;
            u !== null && cg(v, g, u, f, false), z !== null && m !== null && cg(v, m, z, f, true);
          }
        }
        t: {
          if (g = o ? v6(o) : window, u = g.nodeName && g.nodeName.toLowerCase(), u === "select" || u === "input" && g.type === "file")
            var C = nL;
          else if ($v(g))
            if (mu)
              C = gL;
            else {
              C = dL;
              var H = oL;
            }
          else
            (u = g.nodeName) && u.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (C = vL);
          if (C && (C = C(t, o))) {
            Hu(v, C, r, d);
            break t;
          }
          H && H(t, g, o), t === "focusout" && (H = g._wrapperState) && H.controlled && g.type === "number" && ze(g, "number", g.value);
        }
        switch (H = o ? v6(o) : window, t) {
          case "focusin":
            ($v(H) || H.contentEditable === "true") && (o6 = H, Ze = o, r8 = null);
            break;
          case "focusout":
            r8 = Ze = o6 = null;
            break;
          case "mousedown":
            Se = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Se = false, Jv(v, r, d);
            break;
          case "selectionchange":
            if (pL)
              break;
          case "keydown":
          case "keyup":
            Jv(v, r, d);
        }
        var L;
        if (ph)
          t: {
            switch (t) {
              case "compositionstart":
                var w = "onCompositionStart";
                break t;
              case "compositionend":
                w = "onCompositionEnd";
                break t;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break t;
            }
            w = void 0;
          }
        else
          n6 ? Mu(t, r) && (w = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (w = "onCompositionStart");
        w && (zu && r.locale !== "ko" && (n6 || w !== "onCompositionStart" ? w === "onCompositionEnd" && n6 && (L = pu()) : (r4 = d, gh = "value" in r4 ? r4.value : r4.textContent, n6 = true)), H = A9(o, w), 0 < H.length && (w = new Uv(w, t, null, r, d), v.push({ event: w, listeners: H }), L ? w.data = L : (L = fu(r), L !== null && (w.data = L)))), (L = lL ? cL(t, r) : eL(t, r)) && (o = A9(o, "onBeforeInput"), 0 < o.length && (d = new Uv("onBeforeInput", "beforeinput", null, r, d), v.push({ event: d, listeners: o }), d.data = L));
      }
      yu(v, a);
    });
  }
  function z8(t, a, r) {
    return { instance: t, listener: a, currentTarget: r };
  }
  function A9(t, a) {
    for (var r = a + "Capture", l = []; t !== null; ) {
      var c = t, e = c.stateNode;
      c.tag === 5 && e !== null && (c = e, e = o8(t, r), e != null && l.unshift(z8(t, e, c)), e = o8(t, a), e != null && l.push(z8(t, e, c))), t = t.return;
    }
    return l;
  }
  function e6(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function cg(t, a, r, l, c) {
    for (var e = a._reactName, h = []; r !== null && r !== l; ) {
      var i = r, n = i.alternate, o = i.stateNode;
      if (n !== null && n === l)
        break;
      i.tag === 5 && o !== null && (i = o, c ? (n = o8(r, e), n != null && h.unshift(z8(r, n, i))) : c || (n = o8(r, e), n != null && h.push(z8(r, n, i)))), r = r.return;
    }
    h.length !== 0 && t.push({ event: a, listeners: h });
  }
  var ML = /\r\n?/g, fL = /\u0000|\uFFFD/g;
  function eg(t) {
    return (typeof t == "string" ? t : "" + t).replace(ML, `
`).replace(fL, "");
  }
  function c9(t, a, r) {
    if (a = eg(a), eg(t) !== a && r)
      throw Error(F(425));
  }
  function Z9() {
  }
  var ye = null, Fe = null;
  function ke(t, a) {
    return t === "textarea" || t === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Re = typeof setTimeout == "function" ? setTimeout : void 0, HL = typeof clearTimeout == "function" ? clearTimeout : void 0, hg = typeof Promise == "function" ? Promise : void 0, mL = typeof queueMicrotask == "function" ? queueMicrotask : typeof hg < "u" ? function(t) {
    return hg.resolve(null).then(t).catch(xL);
  } : Re;
  function xL(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Jc(t, a) {
    var r = a, l = 0;
    do {
      var c = r.nextSibling;
      if (t.removeChild(r), c && c.nodeType === 8)
        if (r = c.data, r === "/$") {
          if (l === 0) {
            t.removeChild(c), g8(a);
            return;
          }
          l--;
        } else
          r !== "$" && r !== "$?" && r !== "$!" || l++;
      r = c;
    } while (r);
    g8(a);
  }
  function i4(t) {
    for (; t != null; t = t.nextSibling) {
      var a = t.nodeType;
      if (a === 1 || a === 3)
        break;
      if (a === 8) {
        if (a = t.data, a === "$" || a === "$!" || a === "$?")
          break;
        if (a === "/$")
          return null;
      }
    }
    return t;
  }
  function ig(t) {
    t = t.previousSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (a === 0)
            return t;
          a--;
        } else
          r === "/$" && a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var k6 = Math.random().toString(36).slice(2), Q0 = "__reactFiber$" + k6, M8 = "__reactProps$" + k6, B5 = "__reactContainer$" + k6, Oe = "__reactEvents$" + k6, VL = "__reactListeners$" + k6, CL = "__reactHandles$" + k6;
  function a3(t) {
    var a = t[Q0];
    if (a)
      return a;
    for (var r = t.parentNode; r; ) {
      if (a = r[B5] || r[Q0]) {
        if (r = a.alternate, a.child !== null || r !== null && r.child !== null)
          for (t = ig(t); t !== null; ) {
            if (r = t[Q0])
              return r;
            t = ig(t);
          }
        return a;
      }
      t = r, r = t.parentNode;
    }
    return null;
  }
  function w8(t) {
    return t = t[Q0] || t[B5], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function v6(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(F(33));
  }
  function K9(t) {
    return t[M8] || null;
  }
  var Pe = [], g6 = -1;
  function p4(t) {
    return { current: t };
  }
  function V1(t) {
    0 > g6 || (t.current = Pe[g6], Pe[g6] = null, g6--);
  }
  function f1(t, a) {
    g6++, Pe[g6] = t.current, t.current = a;
  }
  var u4 = {}, z2 = p4(u4), I2 = p4(false), h3 = u4;
  function B6(t, a) {
    var r = t.type.contextTypes;
    if (!r)
      return u4;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === a)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, e;
    for (e in r)
      c[e] = a[e];
    return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = a, t.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function b2(t) {
    return t = t.childContextTypes, t != null;
  }
  function S9() {
    V1(I2), V1(z2);
  }
  function ng(t, a, r) {
    if (z2.current !== u4)
      throw Error(F(168));
    f1(z2, a), f1(I2, r);
  }
  function ku(t, a, r) {
    var l = t.stateNode;
    if (a = a.childContextTypes, typeof l.getChildContext != "function")
      return r;
    l = l.getChildContext();
    for (var c in l)
      if (!(c in a))
        throw Error(F(108, oC(t) || "Unknown", c));
    return y1({}, r, l);
  }
  function y9(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || u4, h3 = z2.current, f1(z2, t), f1(I2, I2.current), true;
  }
  function og(t, a, r) {
    var l = t.stateNode;
    if (!l)
      throw Error(F(169));
    r ? (t = ku(t, a, h3), l.__reactInternalMemoizedMergedChildContext = t, V1(I2), V1(z2), f1(z2, t)) : V1(I2), f1(I2, r);
  }
  var m5 = null, $9 = false, te = false;
  function Ru(t) {
    m5 === null ? m5 = [t] : m5.push(t);
  }
  function LL(t) {
    $9 = true, Ru(t);
  }
  function z4() {
    if (!te && m5 !== null) {
      te = true;
      var t = 0, a = u1;
      try {
        var r = m5;
        for (u1 = 1; t < r.length; t++) {
          var l = r[t];
          do
            l = l(true);
          while (l !== null);
        }
        m5 = null, $9 = false;
      } catch (c) {
        throw m5 !== null && (m5 = m5.slice(t + 1)), cu(nh, z4), c;
      } finally {
        u1 = a, te = false;
      }
    }
    return null;
  }
  var u6 = [], s6 = 0, F9 = null, k9 = 0, H0 = [], m0 = 0, i3 = null, x5 = 1, V5 = "";
  function J4(t, a) {
    u6[s6++] = k9, u6[s6++] = F9, F9 = t, k9 = a;
  }
  function Ou(t, a, r) {
    H0[m0++] = x5, H0[m0++] = V5, H0[m0++] = i3, i3 = t;
    var l = x5;
    t = V5;
    var c = 32 - E0(l) - 1;
    l &= ~(1 << c), r += 1;
    var e = 32 - E0(a) + c;
    if (30 < e) {
      var h = c - c % 5;
      e = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, x5 = 1 << 32 - E0(a) + c | r << c | l, V5 = e + t;
    } else
      x5 = 1 << e | r << c | l, V5 = t;
  }
  function Mh(t) {
    t.return !== null && (J4(t, 1), Ou(t, 1, 0));
  }
  function fh(t) {
    for (; t === F9; )
      F9 = u6[--s6], u6[s6] = null, k9 = u6[--s6], u6[s6] = null;
    for (; t === i3; )
      i3 = H0[--m0], H0[m0] = null, V5 = H0[--m0], H0[m0] = null, x5 = H0[--m0], H0[m0] = null;
  }
  var J2 = null, Y2 = null, w1 = false, P0 = null;
  function Pu(t, a) {
    var r = x0(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = a, r.return = t, a = t.deletions, a === null ? (t.deletions = [r], t.flags |= 16) : a.push(r);
  }
  function dg(t, a) {
    switch (t.tag) {
      case 5:
        var r = t.type;
        return a = a.nodeType !== 1 || r.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (t.stateNode = a, J2 = t, Y2 = i4(a.firstChild), true) : false;
      case 6:
        return a = t.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (t.stateNode = a, J2 = t, Y2 = null, true) : false;
      case 13:
        return a = a.nodeType !== 8 ? null : a, a !== null ? (r = i3 !== null ? { id: x5, overflow: V5 } : null, t.memoizedState = { dehydrated: a, treeContext: r, retryLane: 1073741824 }, r = x0(18, null, null, 0), r.stateNode = a, r.return = t, t.child = r, J2 = t, Y2 = null, true) : false;
      default:
        return false;
    }
  }
  function Ee(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Ie(t) {
    if (w1) {
      var a = Y2;
      if (a) {
        var r = a;
        if (!dg(t, a)) {
          if (Ee(t))
            throw Error(F(418));
          a = i4(r.nextSibling);
          var l = J2;
          a && dg(t, a) ? Pu(l, r) : (t.flags = t.flags & -4097 | 2, w1 = false, J2 = t);
        }
      } else {
        if (Ee(t))
          throw Error(F(418));
        t.flags = t.flags & -4097 | 2, w1 = false, J2 = t;
      }
    }
  }
  function vg(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    J2 = t;
  }
  function e9(t) {
    if (t !== J2)
      return false;
    if (!w1)
      return vg(t), w1 = true, false;
    var a;
    if ((a = t.tag !== 3) && !(a = t.tag !== 5) && (a = t.type, a = a !== "head" && a !== "body" && !ke(t.type, t.memoizedProps)), a && (a = Y2)) {
      if (Ee(t))
        throw Eu(), Error(F(418));
      for (; a; )
        Pu(t, a), a = i4(a.nextSibling);
    }
    if (vg(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
        throw Error(F(317));
      t: {
        for (t = t.nextSibling, a = 0; t; ) {
          if (t.nodeType === 8) {
            var r = t.data;
            if (r === "/$") {
              if (a === 0) {
                Y2 = i4(t.nextSibling);
                break t;
              }
              a--;
            } else
              r !== "$" && r !== "$!" && r !== "$?" || a++;
          }
          t = t.nextSibling;
        }
        Y2 = null;
      }
    } else
      Y2 = J2 ? i4(t.stateNode.nextSibling) : null;
    return true;
  }
  function Eu() {
    for (var t = Y2; t; )
      t = i4(t.nextSibling);
  }
  function w6() {
    Y2 = J2 = null, w1 = false;
  }
  function Hh(t) {
    P0 === null ? P0 = [t] : P0.push(t);
  }
  var BL = Z5.ReactCurrentBatchConfig;
  function R0(t, a) {
    if (t && t.defaultProps) {
      a = y1({}, a), t = t.defaultProps;
      for (var r in t)
        a[r] === void 0 && (a[r] = t[r]);
      return a;
    }
    return a;
  }
  var R9 = p4(null), O9 = null, p6 = null, mh = null;
  function xh() {
    mh = p6 = O9 = null;
  }
  function Vh(t) {
    var a = R9.current;
    V1(R9), t._currentValue = a;
  }
  function be(t, a, r) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & a) !== a ? (t.childLanes |= a, l !== null && (l.childLanes |= a)) : l !== null && (l.childLanes & a) !== a && (l.childLanes |= a), t === r)
        break;
      t = t.return;
    }
  }
  function V6(t, a) {
    O9 = t, mh = p6 = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & a && (E2 = true), t.firstContext = null);
  }
  function C0(t) {
    var a = t._currentValue;
    if (mh !== t)
      if (t = { context: t, memoizedValue: a, next: null }, p6 === null) {
        if (O9 === null)
          throw Error(F(308));
        p6 = t, O9.dependencies = { lanes: 0, firstContext: t };
      } else
        p6 = p6.next = t;
    return a;
  }
  var r3 = null;
  function Ch(t) {
    r3 === null ? r3 = [t] : r3.push(t);
  }
  function Iu(t, a, r, l) {
    var c = a.interleaved;
    return c === null ? (r.next = r, Ch(a)) : (r.next = c.next, c.next = r), a.interleaved = r, w5(t, l);
  }
  function w5(t, a) {
    t.lanes |= a;
    var r = t.alternate;
    for (r !== null && (r.lanes |= a), r = t, t = t.return; t !== null; )
      t.childLanes |= a, r = t.alternate, r !== null && (r.childLanes |= a), r = t, t = t.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var J5 = false;
  function Lh(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bu(t, a) {
    t = t.updateQueue, a.updateQueue === t && (a.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function C5(t, a) {
    return { eventTime: t, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function n4(t, a, r) {
    var l = t.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, h1 & 2) {
      var c = l.pending;
      return c === null ? a.next = a : (a.next = c.next, c.next = a), l.pending = a, w5(t, r);
    }
    return c = l.interleaved, c === null ? (a.next = a, Ch(l)) : (a.next = c.next, c.next = a), l.interleaved = a, w5(t, r);
  }
  function u9(t, a, r) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (r & 4194240) !== 0)) {
      var l = a.lanes;
      l &= t.pendingLanes, r |= l, a.lanes = r, oh(t, r);
    }
  }
  function gg(t, a) {
    var r = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var c = null, e = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var h = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          e === null ? c = e = h : e = e.next = h, r = r.next;
        } while (r !== null);
        e === null ? c = e = a : e = e.next = a;
      } else
        c = e = a;
      r = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: e, shared: l.shared, effects: l.effects }, t.updateQueue = r;
      return;
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = a : t.next = a, r.lastBaseUpdate = a;
  }
  function P9(t, a, r, l) {
    var c = t.updateQueue;
    J5 = false;
    var e = c.firstBaseUpdate, h = c.lastBaseUpdate, i = c.shared.pending;
    if (i !== null) {
      c.shared.pending = null;
      var n = i, o = n.next;
      n.next = null, h === null ? e = o : h.next = o, h = n;
      var d = t.alternate;
      d !== null && (d = d.updateQueue, i = d.lastBaseUpdate, i !== h && (i === null ? d.firstBaseUpdate = o : i.next = o, d.lastBaseUpdate = n));
    }
    if (e !== null) {
      var v = c.baseState;
      h = 0, d = o = n = null, i = e;
      do {
        var g = i.lane, u = i.eventTime;
        if ((l & g) === g) {
          d !== null && (d = d.next = { eventTime: u, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
          t: {
            var z = t, f = i;
            switch (g = a, u = r, f.tag) {
              case 1:
                if (z = f.payload, typeof z == "function") {
                  v = z.call(u, v, g);
                  break t;
                }
                v = z;
                break t;
              case 3:
                z.flags = z.flags & -65537 | 128;
              case 0:
                if (z = f.payload, g = typeof z == "function" ? z.call(u, v, g) : z, g == null)
                  break t;
                v = y1({}, v, g);
                break t;
              case 2:
                J5 = true;
            }
          }
          i.callback !== null && i.lane !== 0 && (t.flags |= 64, g = c.effects, g === null ? c.effects = [i] : g.push(i));
        } else
          u = { eventTime: u, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, d === null ? (o = d = u, n = v) : d = d.next = u, h |= g;
        if (i = i.next, i === null) {
          if (i = c.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, c.lastBaseUpdate = g, c.shared.pending = null;
        }
      } while (1);
      if (d === null && (n = v), c.baseState = n, c.firstBaseUpdate = o, c.lastBaseUpdate = d, a = c.shared.interleaved, a !== null) {
        c = a;
        do
          h |= c.lane, c = c.next;
        while (c !== a);
      } else
        e === null && (c.shared.lanes = 0);
      o3 |= h, t.lanes = h, t.memoizedState = v;
    }
  }
  function ug(t, a, r) {
    if (t = a.effects, a.effects = null, t !== null)
      for (a = 0; a < t.length; a++) {
        var l = t[a], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = r, typeof c != "function")
            throw Error(F(191, c));
          c.call(l);
        }
      }
  }
  var Du = new Ig.Component().refs;
  function De(t, a, r, l) {
    a = t.memoizedState, r = r(l, a), r = r == null ? a : y1({}, a, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var X9 = { isMounted: function(t) {
    return (t = t._reactInternals) ? g3(t) === t : false;
  }, enqueueSetState: function(t, a, r) {
    t = t._reactInternals;
    var l = L2(), c = d4(t), e = C5(l, c);
    e.payload = a, r != null && (e.callback = r), a = n4(t, e, c), a !== null && (I0(a, t, c, l), u9(a, t, c));
  }, enqueueReplaceState: function(t, a, r) {
    t = t._reactInternals;
    var l = L2(), c = d4(t), e = C5(l, c);
    e.tag = 1, e.payload = a, r != null && (e.callback = r), a = n4(t, e, c), a !== null && (I0(a, t, c, l), u9(a, t, c));
  }, enqueueForceUpdate: function(t, a) {
    t = t._reactInternals;
    var r = L2(), l = d4(t), c = C5(r, l);
    c.tag = 2, a != null && (c.callback = a), a = n4(t, c, l), a !== null && (I0(a, t, l, r), u9(a, t, l));
  } };
  function sg(t, a, r, l, c, e, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, e, h) : a.prototype && a.prototype.isPureReactComponent ? !s8(r, l) || !s8(c, e) : true;
  }
  function Tu(t, a, r) {
    var l = false, c = u4, e = a.contextType;
    return typeof e == "object" && e !== null ? e = C0(e) : (c = b2(a) ? h3 : z2.current, l = a.contextTypes, e = (l = l != null) ? B6(t, c) : u4), a = new a(r, e), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = X9, t.stateNode = a, a._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = c, t.__reactInternalMemoizedMaskedChildContext = e), a;
  }
  function pg(t, a, r, l) {
    t = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(r, l), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(r, l), a.state !== t && X9.enqueueReplaceState(a, a.state, null);
  }
  function Te(t, a, r, l) {
    var c = t.stateNode;
    c.props = r, c.state = t.memoizedState, c.refs = Du, Lh(t);
    var e = a.contextType;
    typeof e == "object" && e !== null ? c.context = C0(e) : (e = b2(a) ? h3 : z2.current, c.context = B6(t, e)), c.state = t.memoizedState, e = a.getDerivedStateFromProps, typeof e == "function" && (De(t, a, e, r), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (a = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), a !== c.state && X9.enqueueReplaceState(c, c.state, null), P9(t, r, c, l), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function _t(t, a, r) {
    if (t = r.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1)
            throw Error(F(309));
          var l = r.stateNode;
        }
        if (!l)
          throw Error(F(147, t));
        var c = l, e = "" + t;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === e ? a.ref : (a = function(h) {
          var i = c.refs;
          i === Du && (i = c.refs = {}), h === null ? delete i[e] : i[e] = h;
        }, a._stringRef = e, a);
      }
      if (typeof t != "string")
        throw Error(F(284));
      if (!r._owner)
        throw Error(F(290, t));
    }
    return t;
  }
  function h9(t, a) {
    throw t = Object.prototype.toString.call(a), Error(F(31, t === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : t));
  }
  function zg(t) {
    var a = t._init;
    return a(t._payload);
  }
  function Wu(t) {
    function a(p, s) {
      if (t) {
        var M = p.deletions;
        M === null ? (p.deletions = [s], p.flags |= 16) : M.push(s);
      }
    }
    function r(p, s) {
      if (!t)
        return null;
      for (; s !== null; )
        a(p, s), s = s.sibling;
      return null;
    }
    function l(p, s) {
      for (p = /* @__PURE__ */ new Map(); s !== null; )
        s.key !== null ? p.set(s.key, s) : p.set(s.index, s), s = s.sibling;
      return p;
    }
    function c(p, s) {
      return p = v4(p, s), p.index = 0, p.sibling = null, p;
    }
    function e(p, s, M) {
      return p.index = M, t ? (M = p.alternate, M !== null ? (M = M.index, M < s ? (p.flags |= 2, s) : M) : (p.flags |= 2, s)) : (p.flags |= 1048576, s);
    }
    function h(p) {
      return t && p.alternate === null && (p.flags |= 2), p;
    }
    function i(p, s, M, x) {
      return s === null || s.tag !== 6 ? (s = ie(M, p.mode, x), s.return = p, s) : (s = c(s, M), s.return = p, s);
    }
    function n(p, s, M, x) {
      var C = M.type;
      return C === i6 ? d(p, s, M.props.children, x, M.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Y5 && zg(C) === s.type) ? (x = c(s, M.props), x.ref = _t(p, s, M), x.return = p, x) : (x = H9(M.type, M.key, M.props, null, p.mode, x), x.ref = _t(p, s, M), x.return = p, x);
    }
    function o(p, s, M, x) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== M.containerInfo || s.stateNode.implementation !== M.implementation ? (s = ne(M, p.mode, x), s.return = p, s) : (s = c(s, M.children || []), s.return = p, s);
    }
    function d(p, s, M, x, C) {
      return s === null || s.tag !== 7 ? (s = e3(M, p.mode, x, C), s.return = p, s) : (s = c(s, M), s.return = p, s);
    }
    function v(p, s, M) {
      if (typeof s == "string" && s !== "" || typeof s == "number")
        return s = ie("" + s, p.mode, M), s.return = p, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case U7:
            return M = H9(s.type, s.key, s.props, null, p.mode, M), M.ref = _t(p, null, s), M.return = p, M;
          case h6:
            return s = ne(s, p.mode, M), s.return = p, s;
          case Y5:
            var x = s._init;
            return v(p, x(s._payload), M);
        }
        if ($t(s) || Tt(s))
          return s = e3(s, p.mode, M, null), s.return = p, s;
        h9(p, s);
      }
      return null;
    }
    function g(p, s, M, x) {
      var C = s !== null ? s.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return C !== null ? null : i(p, s, "" + M, x);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case U7:
            return M.key === C ? n(p, s, M, x) : null;
          case h6:
            return M.key === C ? o(p, s, M, x) : null;
          case Y5:
            return C = M._init, g(p, s, C(M._payload), x);
        }
        if ($t(M) || Tt(M))
          return C !== null ? null : d(p, s, M, x, null);
        h9(p, M);
      }
      return null;
    }
    function u(p, s, M, x, C) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return p = p.get(M) || null, i(s, p, "" + x, C);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case U7:
            return p = p.get(x.key === null ? M : x.key) || null, n(s, p, x, C);
          case h6:
            return p = p.get(x.key === null ? M : x.key) || null, o(s, p, x, C);
          case Y5:
            var H = x._init;
            return u(p, s, M, H(x._payload), C);
        }
        if ($t(x) || Tt(x))
          return p = p.get(M) || null, d(s, p, x, C, null);
        h9(s, x);
      }
      return null;
    }
    function z(p, s, M, x) {
      for (var C = null, H = null, L = s, w = s = 0, S = null; L !== null && w < M.length; w++) {
        L.index > w ? (S = L, L = null) : S = L.sibling;
        var P = g(p, L, M[w], x);
        if (P === null) {
          L === null && (L = S);
          break;
        }
        t && L && P.alternate === null && a(p, L), s = e(P, s, w), H === null ? C = P : H.sibling = P, H = P, L = S;
      }
      if (w === M.length)
        return r(p, L), w1 && J4(p, w), C;
      if (L === null) {
        for (; w < M.length; w++)
          L = v(p, M[w], x), L !== null && (s = e(L, s, w), H === null ? C = L : H.sibling = L, H = L);
        return w1 && J4(p, w), C;
      }
      for (L = l(p, L); w < M.length; w++)
        S = u(L, p, w, M[w], x), S !== null && (t && S.alternate !== null && L.delete(S.key === null ? w : S.key), s = e(S, s, w), H === null ? C = S : H.sibling = S, H = S);
      return t && L.forEach(function(q) {
        return a(p, q);
      }), w1 && J4(p, w), C;
    }
    function f(p, s, M, x) {
      var C = Tt(M);
      if (typeof C != "function")
        throw Error(F(150));
      if (M = C.call(M), M == null)
        throw Error(F(151));
      for (var H = C = null, L = s, w = s = 0, S = null, P = M.next(); L !== null && !P.done; w++, P = M.next()) {
        L.index > w ? (S = L, L = null) : S = L.sibling;
        var q = g(p, L, P.value, x);
        if (q === null) {
          L === null && (L = S);
          break;
        }
        t && L && q.alternate === null && a(p, L), s = e(q, s, w), H === null ? C = q : H.sibling = q, H = q, L = S;
      }
      if (P.done)
        return r(p, L), w1 && J4(p, w), C;
      if (L === null) {
        for (; !P.done; w++, P = M.next())
          P = v(p, P.value, x), P !== null && (s = e(P, s, w), H === null ? C = P : H.sibling = P, H = P);
        return w1 && J4(p, w), C;
      }
      for (L = l(p, L); !P.done; w++, P = M.next())
        P = u(L, p, w, P.value, x), P !== null && (t && P.alternate !== null && L.delete(P.key === null ? w : P.key), s = e(P, s, w), H === null ? C = P : H.sibling = P, H = P);
      return t && L.forEach(function(d1) {
        return a(p, d1);
      }), w1 && J4(p, w), C;
    }
    function m(p, s, M, x) {
      if (typeof M == "object" && M !== null && M.type === i6 && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case U7:
            t: {
              for (var C = M.key, H = s; H !== null; ) {
                if (H.key === C) {
                  if (C = M.type, C === i6) {
                    if (H.tag === 7) {
                      r(p, H.sibling), s = c(H, M.props.children), s.return = p, p = s;
                      break t;
                    }
                  } else if (H.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Y5 && zg(C) === H.type) {
                    r(p, H.sibling), s = c(H, M.props), s.ref = _t(p, H, M), s.return = p, p = s;
                    break t;
                  }
                  r(p, H);
                  break;
                } else
                  a(p, H);
                H = H.sibling;
              }
              M.type === i6 ? (s = e3(M.props.children, p.mode, x, M.key), s.return = p, p = s) : (x = H9(M.type, M.key, M.props, null, p.mode, x), x.ref = _t(p, s, M), x.return = p, p = x);
            }
            return h(p);
          case h6:
            t: {
              for (H = M.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === M.containerInfo && s.stateNode.implementation === M.implementation) {
                    r(p, s.sibling), s = c(s, M.children || []), s.return = p, p = s;
                    break t;
                  } else {
                    r(p, s);
                    break;
                  }
                else
                  a(p, s);
                s = s.sibling;
              }
              s = ne(M, p.mode, x), s.return = p, p = s;
            }
            return h(p);
          case Y5:
            return H = M._init, m(p, s, H(M._payload), x);
        }
        if ($t(M))
          return z(p, s, M, x);
        if (Tt(M))
          return f(p, s, M, x);
        h9(p, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, s !== null && s.tag === 6 ? (r(p, s.sibling), s = c(s, M), s.return = p, p = s) : (r(p, s), s = ie(M, p.mode, x), s.return = p, p = s), h(p)) : r(p, s);
    }
    return m;
  }
  var A6 = Wu(true), ju = Wu(false), A8 = {}, J0 = p4(A8), f8 = p4(A8), H8 = p4(A8);
  function l3(t) {
    if (t === A8)
      throw Error(F(174));
    return t;
  }
  function Bh(t, a) {
    switch (f1(H8, a), f1(f8, t), f1(J0, A8), t = a.nodeType, t) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : fe(null, "");
        break;
      default:
        t = t === 8 ? a.parentNode : a, a = t.namespaceURI || null, t = t.tagName, a = fe(a, t);
    }
    V1(J0), f1(J0, a);
  }
  function Z6() {
    V1(J0), V1(f8), V1(H8);
  }
  function Nu(t) {
    l3(H8.current);
    var a = l3(J0.current), r = fe(a, t.type);
    a !== r && (f1(f8, t), f1(J0, r));
  }
  function wh(t) {
    f8.current === t && (V1(J0), V1(f8));
  }
  var Z1 = p4(0);
  function E9(t) {
    for (var a = t; a !== null; ) {
      if (a.tag === 13) {
        var r = a.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === t)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var ae = [];
  function Ah() {
    for (var t = 0; t < ae.length; t++)
      ae[t]._workInProgressVersionPrimary = null;
    ae.length = 0;
  }
  var s9 = Z5.ReactCurrentDispatcher, re = Z5.ReactCurrentBatchConfig, n3 = 0, S1 = null, $1 = null, t2 = null, I9 = false, l8 = false, m8 = 0, wL = 0;
  function u2() {
    throw Error(F(321));
  }
  function Zh(t, a) {
    if (a === null)
      return false;
    for (var r = 0; r < a.length && r < t.length; r++)
      if (!b0(t[r], a[r]))
        return false;
    return true;
  }
  function Sh(t, a, r, l, c, e) {
    if (n3 = e, S1 = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, s9.current = t === null || t.memoizedState === null ? yL : FL, t = r(l, c), l8) {
      e = 0;
      do {
        if (l8 = false, m8 = 0, 25 <= e)
          throw Error(F(301));
        e += 1, t2 = $1 = null, a.updateQueue = null, s9.current = kL, t = r(l, c);
      } while (l8);
    }
    if (s9.current = b9, a = $1 !== null && $1.next !== null, n3 = 0, t2 = $1 = S1 = null, I9 = false, a)
      throw Error(F(300));
    return t;
  }
  function yh() {
    var t = m8 !== 0;
    return m8 = 0, t;
  }
  function X0() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return t2 === null ? S1.memoizedState = t2 = t : t2 = t2.next = t, t2;
  }
  function L0() {
    if ($1 === null) {
      var t = S1.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = $1.next;
    var a = t2 === null ? S1.memoizedState : t2.next;
    if (a !== null)
      t2 = a, $1 = t;
    else {
      if (t === null)
        throw Error(F(310));
      $1 = t, t = { memoizedState: $1.memoizedState, baseState: $1.baseState, baseQueue: $1.baseQueue, queue: $1.queue, next: null }, t2 === null ? S1.memoizedState = t2 = t : t2 = t2.next = t;
    }
    return t2;
  }
  function x8(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function le(t) {
    var a = L0(), r = a.queue;
    if (r === null)
      throw Error(F(311));
    r.lastRenderedReducer = t;
    var l = $1, c = l.baseQueue, e = r.pending;
    if (e !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = e.next, e.next = h;
      }
      l.baseQueue = c = e, r.pending = null;
    }
    if (c !== null) {
      e = c.next, l = l.baseState;
      var i = h = null, n = null, o = e;
      do {
        var d = o.lane;
        if ((n3 & d) === d)
          n !== null && (n = n.next = { lane: 0, action: o.action, hasEagerState: o.hasEagerState, eagerState: o.eagerState, next: null }), l = o.hasEagerState ? o.eagerState : t(l, o.action);
        else {
          var v = { lane: d, action: o.action, hasEagerState: o.hasEagerState, eagerState: o.eagerState, next: null };
          n === null ? (i = n = v, h = l) : n = n.next = v, S1.lanes |= d, o3 |= d;
        }
        o = o.next;
      } while (o !== null && o !== e);
      n === null ? h = l : n.next = i, b0(l, a.memoizedState) || (E2 = true), a.memoizedState = l, a.baseState = h, a.baseQueue = n, r.lastRenderedState = l;
    }
    if (t = r.interleaved, t !== null) {
      c = t;
      do
        e = c.lane, S1.lanes |= e, o3 |= e, c = c.next;
      while (c !== t);
    } else
      c === null && (r.lanes = 0);
    return [a.memoizedState, r.dispatch];
  }
  function ce(t) {
    var a = L0(), r = a.queue;
    if (r === null)
      throw Error(F(311));
    r.lastRenderedReducer = t;
    var l = r.dispatch, c = r.pending, e = a.memoizedState;
    if (c !== null) {
      r.pending = null;
      var h = c = c.next;
      do
        e = t(e, h.action), h = h.next;
      while (h !== c);
      b0(e, a.memoizedState) || (E2 = true), a.memoizedState = e, a.baseQueue === null && (a.baseState = e), r.lastRenderedState = e;
    }
    return [e, l];
  }
  function _u() {
  }
  function Uu(t, a) {
    var r = S1, l = L0(), c = a(), e = !b0(l.memoizedState, c);
    if (e && (l.memoizedState = c, E2 = true), l = l.queue, Fh(Ku.bind(null, r, l, t), [t]), l.getSnapshot !== a || e || t2 !== null && t2.memoizedState.tag & 1) {
      if (r.flags |= 2048, V8(9, qu.bind(null, r, l, c, a), void 0, null), a2 === null)
        throw Error(F(349));
      n3 & 30 || Gu(r, a, c);
    }
    return c;
  }
  function Gu(t, a, r) {
    t.flags |= 16384, t = { getSnapshot: a, value: r }, a = S1.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, S1.updateQueue = a, a.stores = [t]) : (r = a.stores, r === null ? a.stores = [t] : r.push(t));
  }
  function qu(t, a, r, l) {
    a.value = r, a.getSnapshot = l, $u(a) && Xu(t);
  }
  function Ku(t, a, r) {
    return r(function() {
      $u(a) && Xu(t);
    });
  }
  function $u(t) {
    var a = t.getSnapshot;
    t = t.value;
    try {
      var r = a();
      return !b0(t, r);
    } catch {
      return true;
    }
  }
  function Xu(t) {
    var a = w5(t, 1);
    a !== null && I0(a, t, 1, -1);
  }
  function Mg(t) {
    var a = X0();
    return typeof t == "function" && (t = t()), a.memoizedState = a.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: x8, lastRenderedState: t }, a.queue = t, t = t.dispatch = SL.bind(null, S1, t), [a.memoizedState, t];
  }
  function V8(t, a, r, l) {
    return t = { tag: t, create: a, destroy: r, deps: l, next: null }, a = S1.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, S1.updateQueue = a, a.lastEffect = t.next = t) : (r = a.lastEffect, r === null ? a.lastEffect = t.next = t : (l = r.next, r.next = t, t.next = l, a.lastEffect = t)), t;
  }
  function Qu() {
    return L0().memoizedState;
  }
  function p9(t, a, r, l) {
    var c = X0();
    S1.flags |= t, c.memoizedState = V8(1 | a, r, void 0, l === void 0 ? null : l);
  }
  function Q9(t, a, r, l) {
    var c = L0();
    l = l === void 0 ? null : l;
    var e = void 0;
    if ($1 !== null) {
      var h = $1.memoizedState;
      if (e = h.destroy, l !== null && Zh(l, h.deps)) {
        c.memoizedState = V8(a, r, e, l);
        return;
      }
    }
    S1.flags |= t, c.memoizedState = V8(1 | a, r, e, l);
  }
  function fg(t, a) {
    return p9(8390656, 8, t, a);
  }
  function Fh(t, a) {
    return Q9(2048, 8, t, a);
  }
  function Yu(t, a) {
    return Q9(4, 2, t, a);
  }
  function Ju(t, a) {
    return Q9(4, 4, t, a);
  }
  function ts(t, a) {
    if (typeof a == "function")
      return t = t(), a(t), function() {
        a(null);
      };
    if (a != null)
      return t = t(), a.current = t, function() {
        a.current = null;
      };
  }
  function as(t, a, r) {
    return r = r != null ? r.concat([t]) : null, Q9(4, 4, ts.bind(null, a, t), r);
  }
  function kh() {
  }
  function rs(t, a) {
    var r = L0();
    a = a === void 0 ? null : a;
    var l = r.memoizedState;
    return l !== null && a !== null && Zh(a, l[1]) ? l[0] : (r.memoizedState = [t, a], t);
  }
  function ls(t, a) {
    var r = L0();
    a = a === void 0 ? null : a;
    var l = r.memoizedState;
    return l !== null && a !== null && Zh(a, l[1]) ? l[0] : (t = t(), r.memoizedState = [t, a], t);
  }
  function cs(t, a, r) {
    return n3 & 21 ? (b0(r, a) || (r = iu(), S1.lanes |= r, o3 |= r, t.baseState = true), a) : (t.baseState && (t.baseState = false, E2 = true), t.memoizedState = r);
  }
  function AL(t, a) {
    var r = u1;
    u1 = r !== 0 && 4 > r ? r : 4, t(true);
    var l = re.transition;
    re.transition = {};
    try {
      t(false), a();
    } finally {
      u1 = r, re.transition = l;
    }
  }
  function es() {
    return L0().memoizedState;
  }
  function ZL(t, a, r) {
    var l = d4(t);
    if (r = { lane: l, action: r, hasEagerState: false, eagerState: null, next: null }, hs(t))
      is(a, r);
    else if (r = Iu(t, a, r, l), r !== null) {
      var c = L2();
      I0(r, t, l, c), ns(r, a, l);
    }
  }
  function SL(t, a, r) {
    var l = d4(t), c = { lane: l, action: r, hasEagerState: false, eagerState: null, next: null };
    if (hs(t))
      is(a, c);
    else {
      var e = t.alternate;
      if (t.lanes === 0 && (e === null || e.lanes === 0) && (e = a.lastRenderedReducer, e !== null))
        try {
          var h = a.lastRenderedState, i = e(h, r);
          if (c.hasEagerState = true, c.eagerState = i, b0(i, h)) {
            var n = a.interleaved;
            n === null ? (c.next = c, Ch(a)) : (c.next = n.next, n.next = c), a.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      r = Iu(t, a, c, l), r !== null && (c = L2(), I0(r, t, l, c), ns(r, a, l));
    }
  }
  function hs(t) {
    var a = t.alternate;
    return t === S1 || a !== null && a === S1;
  }
  function is(t, a) {
    l8 = I9 = true;
    var r = t.pending;
    r === null ? a.next = a : (a.next = r.next, r.next = a), t.pending = a;
  }
  function ns(t, a, r) {
    if (r & 4194240) {
      var l = a.lanes;
      l &= t.pendingLanes, r |= l, a.lanes = r, oh(t, r);
    }
  }
  var b9 = { readContext: C0, useCallback: u2, useContext: u2, useEffect: u2, useImperativeHandle: u2, useInsertionEffect: u2, useLayoutEffect: u2, useMemo: u2, useReducer: u2, useRef: u2, useState: u2, useDebugValue: u2, useDeferredValue: u2, useTransition: u2, useMutableSource: u2, useSyncExternalStore: u2, useId: u2, unstable_isNewReconciler: false }, yL = { readContext: C0, useCallback: function(t, a) {
    return X0().memoizedState = [t, a === void 0 ? null : a], t;
  }, useContext: C0, useEffect: fg, useImperativeHandle: function(t, a, r) {
    return r = r != null ? r.concat([t]) : null, p9(4194308, 4, ts.bind(null, a, t), r);
  }, useLayoutEffect: function(t, a) {
    return p9(4194308, 4, t, a);
  }, useInsertionEffect: function(t, a) {
    return p9(4, 2, t, a);
  }, useMemo: function(t, a) {
    var r = X0();
    return a = a === void 0 ? null : a, t = t(), r.memoizedState = [t, a], t;
  }, useReducer: function(t, a, r) {
    var l = X0();
    return a = r !== void 0 ? r(a) : a, l.memoizedState = l.baseState = a, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: a }, l.queue = t, t = t.dispatch = ZL.bind(null, S1, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var a = X0();
    return t = { current: t }, a.memoizedState = t;
  }, useState: Mg, useDebugValue: kh, useDeferredValue: function(t) {
    return X0().memoizedState = t;
  }, useTransition: function() {
    var t = Mg(false), a = t[0];
    return t = AL.bind(null, t[1]), X0().memoizedState = t, [a, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, a, r) {
    var l = S1, c = X0();
    if (w1) {
      if (r === void 0)
        throw Error(F(407));
      r = r();
    } else {
      if (r = a(), a2 === null)
        throw Error(F(349));
      n3 & 30 || Gu(l, a, r);
    }
    c.memoizedState = r;
    var e = { value: r, getSnapshot: a };
    return c.queue = e, fg(Ku.bind(null, l, e, t), [t]), l.flags |= 2048, V8(9, qu.bind(null, l, e, r, a), void 0, null), r;
  }, useId: function() {
    var t = X0(), a = a2.identifierPrefix;
    if (w1) {
      var r = V5, l = x5;
      r = (l & ~(1 << 32 - E0(l) - 1)).toString(32) + r, a = ":" + a + "R" + r, r = m8++, 0 < r && (a += "H" + r.toString(32)), a += ":";
    } else
      r = wL++, a = ":" + a + "r" + r.toString(32) + ":";
    return t.memoizedState = a;
  }, unstable_isNewReconciler: false }, FL = { readContext: C0, useCallback: rs, useContext: C0, useEffect: Fh, useImperativeHandle: as, useInsertionEffect: Yu, useLayoutEffect: Ju, useMemo: ls, useReducer: le, useRef: Qu, useState: function() {
    return le(x8);
  }, useDebugValue: kh, useDeferredValue: function(t) {
    var a = L0();
    return cs(a, $1.memoizedState, t);
  }, useTransition: function() {
    var t = le(x8)[0], a = L0().memoizedState;
    return [t, a];
  }, useMutableSource: _u, useSyncExternalStore: Uu, useId: es, unstable_isNewReconciler: false }, kL = { readContext: C0, useCallback: rs, useContext: C0, useEffect: Fh, useImperativeHandle: as, useInsertionEffect: Yu, useLayoutEffect: Ju, useMemo: ls, useReducer: ce, useRef: Qu, useState: function() {
    return ce(x8);
  }, useDebugValue: kh, useDeferredValue: function(t) {
    var a = L0();
    return $1 === null ? a.memoizedState = t : cs(a, $1.memoizedState, t);
  }, useTransition: function() {
    var t = ce(x8)[0], a = L0().memoizedState;
    return [t, a];
  }, useMutableSource: _u, useSyncExternalStore: Uu, useId: es, unstable_isNewReconciler: false };
  function S6(t, a) {
    try {
      var r = "", l = a;
      do
        r += nC(l), l = l.return;
      while (l);
      var c = r;
    } catch (e) {
      c = `
Error generating stack: ` + e.message + `
` + e.stack;
    }
    return { value: t, source: a, stack: c, digest: null };
  }
  function ee(t, a, r) {
    return { value: t, source: null, stack: r ?? null, digest: a ?? null };
  }
  function We(t, a) {
    try {
      console.error(a.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var RL = typeof WeakMap == "function" ? WeakMap : Map;
  function os(t, a, r) {
    r = C5(-1, r), r.tag = 3, r.payload = { element: null };
    var l = a.value;
    return r.callback = function() {
      T9 || (T9 = true, Qe = l), We(t, a);
    }, r;
  }
  function ds(t, a, r) {
    r = C5(-1, r), r.tag = 3;
    var l = t.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = a.value;
      r.payload = function() {
        return l(c);
      }, r.callback = function() {
        We(t, a);
      };
    }
    var e = t.stateNode;
    return e !== null && typeof e.componentDidCatch == "function" && (r.callback = function() {
      We(t, a), typeof l != "function" && (o4 === null ? o4 = /* @__PURE__ */ new Set([this]) : o4.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, { componentStack: h !== null ? h : "" });
    }), r;
  }
  function Hg(t, a, r) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new RL();
      var c = /* @__PURE__ */ new Set();
      l.set(a, c);
    } else
      c = l.get(a), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(a, c));
    c.has(r) || (c.add(r), t = qL.bind(null, t, a, r), a.then(t, t));
  }
  function mg(t) {
    do {
      var a;
      if ((a = t.tag === 13) && (a = t.memoizedState, a = a !== null ? a.dehydrated !== null : true), a)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function xg(t, a, r, l, c) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = c, t) : (t === a ? t.flags |= 65536 : (t.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (a = C5(-1, 1), a.tag = 2, n4(r, a, 1))), r.lanes |= 1), t);
  }
  var OL = Z5.ReactCurrentOwner, E2 = false;
  function C2(t, a, r, l) {
    a.child = t === null ? ju(a, null, r, l) : A6(a, t.child, r, l);
  }
  function Vg(t, a, r, l, c) {
    r = r.render;
    var e = a.ref;
    return V6(a, c), l = Sh(t, a, r, l, e, c), r = yh(), t !== null && !E2 ? (a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~c, A5(t, a, c)) : (w1 && r && Mh(a), a.flags |= 1, C2(t, a, l, c), a.child);
  }
  function Cg(t, a, r, l, c) {
    if (t === null) {
      var e = r.type;
      return typeof e == "function" && !Th(e) && e.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (a.tag = 15, a.type = e, vs(t, a, e, l, c)) : (t = H9(r.type, null, l, a, a.mode, c), t.ref = a.ref, t.return = a, a.child = t);
    }
    if (e = t.child, !(t.lanes & c)) {
      var h = e.memoizedProps;
      if (r = r.compare, r = r !== null ? r : s8, r(h, l) && t.ref === a.ref)
        return A5(t, a, c);
    }
    return a.flags |= 1, t = v4(e, l), t.ref = a.ref, t.return = a, a.child = t;
  }
  function vs(t, a, r, l, c) {
    if (t !== null) {
      var e = t.memoizedProps;
      if (s8(e, l) && t.ref === a.ref)
        if (E2 = false, a.pendingProps = l = e, (t.lanes & c) !== 0)
          t.flags & 131072 && (E2 = true);
        else
          return a.lanes = t.lanes, A5(t, a, c);
    }
    return je(t, a, r, l, c);
  }
  function gs(t, a, r) {
    var l = a.pendingProps, c = l.children, e = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden")
      if (!(a.mode & 1))
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f1(M6, Q2), Q2 |= r;
      else {
        if (!(r & 1073741824))
          return t = e !== null ? e.baseLanes | r : r, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, a.updateQueue = null, f1(M6, Q2), Q2 |= t, null;
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = e !== null ? e.baseLanes : r, f1(M6, Q2), Q2 |= l;
      }
    else
      e !== null ? (l = e.baseLanes | r, a.memoizedState = null) : l = r, f1(M6, Q2), Q2 |= l;
    return C2(t, a, c, r), a.child;
  }
  function us(t, a) {
    var r = a.ref;
    (t === null && r !== null || t !== null && t.ref !== r) && (a.flags |= 512, a.flags |= 2097152);
  }
  function je(t, a, r, l, c) {
    var e = b2(r) ? h3 : z2.current;
    return e = B6(a, e), V6(a, c), r = Sh(t, a, r, l, e, c), l = yh(), t !== null && !E2 ? (a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~c, A5(t, a, c)) : (w1 && l && Mh(a), a.flags |= 1, C2(t, a, r, c), a.child);
  }
  function Lg(t, a, r, l, c) {
    if (b2(r)) {
      var e = true;
      y9(a);
    } else
      e = false;
    if (V6(a, c), a.stateNode === null)
      z9(t, a), Tu(a, r, l), Te(a, r, l, c), l = true;
    else if (t === null) {
      var h = a.stateNode, i = a.memoizedProps;
      h.props = i;
      var n = h.context, o = r.contextType;
      typeof o == "object" && o !== null ? o = C0(o) : (o = b2(r) ? h3 : z2.current, o = B6(a, o));
      var d = r.getDerivedStateFromProps, v = typeof d == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      v || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (i !== l || n !== o) && pg(a, h, l, o), J5 = false;
      var g = a.memoizedState;
      h.state = g, P9(a, l, h, c), n = a.memoizedState, i !== l || g !== n || I2.current || J5 ? (typeof d == "function" && (De(a, r, d, l), n = a.memoizedState), (i = J5 || sg(a, r, i, l, g, n, o)) ? (v || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = l, a.memoizedState = n), h.props = l, h.state = n, h.context = o, l = i) : (typeof h.componentDidMount == "function" && (a.flags |= 4194308), l = false);
    } else {
      h = a.stateNode, bu(t, a), i = a.memoizedProps, o = a.type === a.elementType ? i : R0(a.type, i), h.props = o, v = a.pendingProps, g = h.context, n = r.contextType, typeof n == "object" && n !== null ? n = C0(n) : (n = b2(r) ? h3 : z2.current, n = B6(a, n));
      var u = r.getDerivedStateFromProps;
      (d = typeof u == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (i !== v || g !== n) && pg(a, h, l, n), J5 = false, g = a.memoizedState, h.state = g, P9(a, l, h, c);
      var z = a.memoizedState;
      i !== v || g !== z || I2.current || J5 ? (typeof u == "function" && (De(a, r, u, l), z = a.memoizedState), (o = J5 || sg(a, r, o, l, g, z, n) || false) ? (d || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, z, n), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, z, n)), typeof h.componentDidUpdate == "function" && (a.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (a.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (a.flags |= 1024), a.memoizedProps = l, a.memoizedState = z), h.props = l, h.state = z, h.context = n, l = o) : (typeof h.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (a.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (a.flags |= 1024), l = false);
    }
    return Ne(t, a, r, l, e, c);
  }
  function Ne(t, a, r, l, c, e) {
    us(t, a);
    var h = (a.flags & 128) !== 0;
    if (!l && !h)
      return c && og(a, r, false), A5(t, a, e);
    l = a.stateNode, OL.current = a;
    var i = h && typeof r.getDerivedStateFromError != "function" ? null : l.render();
    return a.flags |= 1, t !== null && h ? (a.child = A6(a, t.child, null, e), a.child = A6(a, null, i, e)) : C2(t, a, i, e), a.memoizedState = l.state, c && og(a, r, true), a.child;
  }
  function ss(t) {
    var a = t.stateNode;
    a.pendingContext ? ng(t, a.pendingContext, a.pendingContext !== a.context) : a.context && ng(t, a.context, false), Bh(t, a.containerInfo);
  }
  function Bg(t, a, r, l, c) {
    return w6(), Hh(c), a.flags |= 256, C2(t, a, r, l), a.child;
  }
  var _e = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ue(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function ps(t, a, r) {
    var l = a.pendingProps, c = Z1.current, e = false, h = (a.flags & 128) !== 0, i;
    if ((i = h) || (i = t !== null && t.memoizedState === null ? false : (c & 2) !== 0), i ? (e = true, a.flags &= -129) : (t === null || t.memoizedState !== null) && (c |= 1), f1(Z1, c & 1), t === null)
      return Ie(a), t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (a.mode & 1 ? t.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824 : a.lanes = 1, null) : (h = l.children, t = l.fallback, e ? (l = a.mode, e = a.child, h = { mode: "hidden", children: h }, !(l & 1) && e !== null ? (e.childLanes = 0, e.pendingProps = h) : e = ta(h, l, 0, null), t = e3(t, l, r, null), e.return = a, t.return = a, e.sibling = t, a.child = e, a.child.memoizedState = Ue(r), a.memoizedState = _e, t) : Rh(a, h));
    if (c = t.memoizedState, c !== null && (i = c.dehydrated, i !== null))
      return PL(t, a, h, l, i, c, r);
    if (e) {
      e = l.fallback, h = a.mode, c = t.child, i = c.sibling;
      var n = { mode: "hidden", children: l.children };
      return !(h & 1) && a.child !== c ? (l = a.child, l.childLanes = 0, l.pendingProps = n, a.deletions = null) : (l = v4(c, n), l.subtreeFlags = c.subtreeFlags & 14680064), i !== null ? e = v4(i, e) : (e = e3(e, h, r, null), e.flags |= 2), e.return = a, l.return = a, l.sibling = e, a.child = l, l = e, e = a.child, h = t.child.memoizedState, h = h === null ? Ue(r) : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }, e.memoizedState = h, e.childLanes = t.childLanes & ~r, a.memoizedState = _e, l;
    }
    return e = t.child, t = e.sibling, l = v4(e, { mode: "visible", children: l.children }), !(a.mode & 1) && (l.lanes = r), l.return = a, l.sibling = null, t !== null && (r = a.deletions, r === null ? (a.deletions = [t], a.flags |= 16) : r.push(t)), a.child = l, a.memoizedState = null, l;
  }
  function Rh(t, a) {
    return a = ta({ mode: "visible", children: a }, t.mode, 0, null), a.return = t, t.child = a;
  }
  function i9(t, a, r, l) {
    return l !== null && Hh(l), A6(a, t.child, null, r), t = Rh(a, a.pendingProps.children), t.flags |= 2, a.memoizedState = null, t;
  }
  function PL(t, a, r, l, c, e, h) {
    if (r)
      return a.flags & 256 ? (a.flags &= -257, l = ee(Error(F(422))), i9(t, a, h, l)) : a.memoizedState !== null ? (a.child = t.child, a.flags |= 128, null) : (e = l.fallback, c = a.mode, l = ta({ mode: "visible", children: l.children }, c, 0, null), e = e3(e, c, h, null), e.flags |= 2, l.return = a, e.return = a, l.sibling = e, a.child = l, a.mode & 1 && A6(a, t.child, null, h), a.child.memoizedState = Ue(h), a.memoizedState = _e, e);
    if (!(a.mode & 1))
      return i9(t, a, h, null);
    if (c.data === "$!") {
      if (l = c.nextSibling && c.nextSibling.dataset, l)
        var i = l.dgst;
      return l = i, e = Error(F(419)), l = ee(e, l, void 0), i9(t, a, h, l);
    }
    if (i = (h & t.childLanes) !== 0, E2 || i) {
      if (l = a2, l !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (l.suspendedLanes | h) ? 0 : c, c !== 0 && c !== e.retryLane && (e.retryLane = c, w5(t, c), I0(l, t, c, -1));
      }
      return Dh(), l = ee(Error(F(421))), i9(t, a, h, l);
    }
    return c.data === "$?" ? (a.flags |= 128, a.child = t.child, a = KL.bind(null, t), c._reactRetry = a, null) : (t = e.treeContext, Y2 = i4(c.nextSibling), J2 = a, w1 = true, P0 = null, t !== null && (H0[m0++] = x5, H0[m0++] = V5, H0[m0++] = i3, x5 = t.id, V5 = t.overflow, i3 = a), a = Rh(a, l.children), a.flags |= 4096, a);
  }
  function wg(t, a, r) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a), be(t.return, a, r);
  }
  function he(t, a, r, l, c) {
    var e = t.memoizedState;
    e === null ? t.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: l, tail: r, tailMode: c } : (e.isBackwards = a, e.rendering = null, e.renderingStartTime = 0, e.last = l, e.tail = r, e.tailMode = c);
  }
  function zs(t, a, r) {
    var l = a.pendingProps, c = l.revealOrder, e = l.tail;
    if (C2(t, a, l.children, r), l = Z1.current, l & 2)
      l = l & 1 | 2, a.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        t:
          for (t = a.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && wg(t, r, a);
            else if (t.tag === 19)
              wg(t, r, a);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === a)
              break t;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === a)
                break t;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      l &= 1;
    }
    if (f1(Z1, l), !(a.mode & 1))
      a.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (r = a.child, c = null; r !== null; )
            t = r.alternate, t !== null && E9(t) === null && (c = r), r = r.sibling;
          r = c, r === null ? (c = a.child, a.child = null) : (c = r.sibling, r.sibling = null), he(a, false, c, r, e);
          break;
        case "backwards":
          for (r = null, c = a.child, a.child = null; c !== null; ) {
            if (t = c.alternate, t !== null && E9(t) === null) {
              a.child = c;
              break;
            }
            t = c.sibling, c.sibling = r, r = c, c = t;
          }
          he(a, true, r, null, e);
          break;
        case "together":
          he(a, false, null, null, void 0);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function z9(t, a) {
    !(a.mode & 1) && t !== null && (t.alternate = null, a.alternate = null, a.flags |= 2);
  }
  function A5(t, a, r) {
    if (t !== null && (a.dependencies = t.dependencies), o3 |= a.lanes, !(r & a.childLanes))
      return null;
    if (t !== null && a.child !== t.child)
      throw Error(F(153));
    if (a.child !== null) {
      for (t = a.child, r = v4(t, t.pendingProps), a.child = r, r.return = a; t.sibling !== null; )
        t = t.sibling, r = r.sibling = v4(t, t.pendingProps), r.return = a;
      r.sibling = null;
    }
    return a.child;
  }
  function EL(t, a, r) {
    switch (a.tag) {
      case 3:
        ss(a), w6();
        break;
      case 5:
        Nu(a);
        break;
      case 1:
        b2(a.type) && y9(a);
        break;
      case 4:
        Bh(a, a.stateNode.containerInfo);
        break;
      case 10:
        var l = a.type._context, c = a.memoizedProps.value;
        f1(R9, l._currentValue), l._currentValue = c;
        break;
      case 13:
        if (l = a.memoizedState, l !== null)
          return l.dehydrated !== null ? (f1(Z1, Z1.current & 1), a.flags |= 128, null) : r & a.child.childLanes ? ps(t, a, r) : (f1(Z1, Z1.current & 1), t = A5(t, a, r), t !== null ? t.sibling : null);
        f1(Z1, Z1.current & 1);
        break;
      case 19:
        if (l = (r & a.childLanes) !== 0, t.flags & 128) {
          if (l)
            return zs(t, a, r);
          a.flags |= 128;
        }
        if (c = a.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), f1(Z1, Z1.current), l)
          break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, gs(t, a, r);
    }
    return A5(t, a, r);
  }
  var Ms, Ge, fs, Hs;
  Ms = function(t, a) {
    for (var r = a.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6)
        t.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === a)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === a)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  };
  Ge = function() {
  };
  fs = function(t, a, r, l) {
    var c = t.memoizedProps;
    if (c !== l) {
      t = a.stateNode, l3(J0.current);
      var e = null;
      switch (r) {
        case "input":
          c = se(t, c), l = se(t, l), e = [];
          break;
        case "select":
          c = y1({}, c, { value: void 0 }), l = y1({}, l, { value: void 0 }), e = [];
          break;
        case "textarea":
          c = Me(t, c), l = Me(t, l), e = [];
          break;
        default:
          typeof c.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Z9);
      }
      He(r, l);
      var h;
      r = null;
      for (o in c)
        if (!l.hasOwnProperty(o) && c.hasOwnProperty(o) && c[o] != null)
          if (o === "style") {
            var i = c[o];
            for (h in i)
              i.hasOwnProperty(h) && (r || (r = {}), r[h] = "");
          } else
            o !== "dangerouslySetInnerHTML" && o !== "children" && o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (i8.hasOwnProperty(o) ? e || (e = []) : (e = e || []).push(o, null));
      for (o in l) {
        var n = l[o];
        if (i = c?.[o], l.hasOwnProperty(o) && n !== i && (n != null || i != null))
          if (o === "style")
            if (i) {
              for (h in i)
                !i.hasOwnProperty(h) || n && n.hasOwnProperty(h) || (r || (r = {}), r[h] = "");
              for (h in n)
                n.hasOwnProperty(h) && i[h] !== n[h] && (r || (r = {}), r[h] = n[h]);
            } else
              r || (e || (e = []), e.push(o, r)), r = n;
          else
            o === "dangerouslySetInnerHTML" ? (n = n ? n.__html : void 0, i = i ? i.__html : void 0, n != null && i !== n && (e = e || []).push(o, n)) : o === "children" ? typeof n != "string" && typeof n != "number" || (e = e || []).push(o, "" + n) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && (i8.hasOwnProperty(o) ? (n != null && o === "onScroll" && x1("scroll", t), e || i === n || (e = [])) : (e = e || []).push(o, n));
      }
      r && (e = e || []).push("style", r);
      var o = e;
      (a.updateQueue = o) && (a.flags |= 4);
    }
  };
  Hs = function(t, a, r, l) {
    r !== l && (a.flags |= 4);
  };
  function Ut(t, a) {
    if (!w1)
      switch (t.tailMode) {
        case "hidden":
          a = t.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = t.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? a || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function s2(t) {
    var a = t.alternate !== null && t.alternate.child === t.child, r = 0, l = 0;
    if (a)
      for (var c = t.child; c !== null; )
        r |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = t, c = c.sibling;
    else
      for (c = t.child; c !== null; )
        r |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = t, c = c.sibling;
    return t.subtreeFlags |= l, t.childLanes = r, a;
  }
  function IL(t, a, r) {
    var l = a.pendingProps;
    switch (fh(a), a.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return s2(a), null;
      case 1:
        return b2(a.type) && S9(), s2(a), null;
      case 3:
        return l = a.stateNode, Z6(), V1(I2), V1(z2), Ah(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (e9(a) ? a.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, P0 !== null && (th(P0), P0 = null))), Ge(t, a), s2(a), null;
      case 5:
        wh(a);
        var c = l3(H8.current);
        if (r = a.type, t !== null && a.stateNode != null)
          fs(t, a, r, l, c), t.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
          if (!l) {
            if (a.stateNode === null)
              throw Error(F(166));
            return s2(a), null;
          }
          if (t = l3(J0.current), e9(a)) {
            l = a.stateNode, r = a.type;
            var e = a.memoizedProps;
            switch (l[Q0] = a, l[M8] = e, t = (a.mode & 1) !== 0, r) {
              case "dialog":
                x1("cancel", l), x1("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                x1("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Qt.length; c++)
                  x1(Qt[c], l);
                break;
              case "source":
                x1("error", l);
                break;
              case "img":
              case "image":
              case "link":
                x1("error", l), x1("load", l);
                break;
              case "details":
                x1("toggle", l);
                break;
              case "input":
                Ov(l, e), x1("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!e.multiple }, x1("invalid", l);
                break;
              case "textarea":
                Ev(l, e), x1("invalid", l);
            }
            He(r, e), c = null;
            for (var h in e)
              if (e.hasOwnProperty(h)) {
                var i = e[h];
                h === "children" ? typeof i == "string" ? l.textContent !== i && (e.suppressHydrationWarning !== true && c9(l.textContent, i, t), c = ["children", i]) : typeof i == "number" && l.textContent !== "" + i && (e.suppressHydrationWarning !== true && c9(l.textContent, i, t), c = ["children", "" + i]) : i8.hasOwnProperty(h) && i != null && h === "onScroll" && x1("scroll", l);
              }
            switch (r) {
              case "input":
                G7(l), Pv(l, e, true);
                break;
              case "textarea":
                G7(l), Iv(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof e.onClick == "function" && (l.onclick = Z9);
            }
            l = c, a.updateQueue = l, l !== null && (a.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Gg(r)), t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = h.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = h.createElement(r, { is: l.is }) : (t = h.createElement(r), r === "select" && (h = t, l.multiple ? h.multiple = true : l.size && (h.size = l.size))) : t = h.createElementNS(t, r), t[Q0] = a, t[M8] = l, Ms(t, a, false, false), a.stateNode = t;
            t: {
              switch (h = me(r, l), r) {
                case "dialog":
                  x1("cancel", t), x1("close", t), c = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  x1("load", t), c = l;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Qt.length; c++)
                    x1(Qt[c], t);
                  c = l;
                  break;
                case "source":
                  x1("error", t), c = l;
                  break;
                case "img":
                case "image":
                case "link":
                  x1("error", t), x1("load", t), c = l;
                  break;
                case "details":
                  x1("toggle", t), c = l;
                  break;
                case "input":
                  Ov(t, l), c = se(t, l), x1("invalid", t);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!l.multiple }, c = y1({}, l, { value: void 0 }), x1("invalid", t);
                  break;
                case "textarea":
                  Ev(t, l), c = Me(t, l), x1("invalid", t);
                  break;
                default:
                  c = l;
              }
              He(r, c), i = c;
              for (e in i)
                if (i.hasOwnProperty(e)) {
                  var n = i[e];
                  e === "style" ? $g(t, n) : e === "dangerouslySetInnerHTML" ? (n = n ? n.__html : void 0, n != null && qg(t, n)) : e === "children" ? typeof n == "string" ? (r !== "textarea" || n !== "") && n8(t, n) : typeof n == "number" && n8(t, "" + n) : e !== "suppressContentEditableWarning" && e !== "suppressHydrationWarning" && e !== "autoFocus" && (i8.hasOwnProperty(e) ? n != null && e === "onScroll" && x1("scroll", t) : n != null && lh(t, e, n, h));
                }
              switch (r) {
                case "input":
                  G7(t), Pv(t, l, false);
                  break;
                case "textarea":
                  G7(t), Iv(t);
                  break;
                case "option":
                  l.value != null && t.setAttribute("value", "" + g4(l.value));
                  break;
                case "select":
                  t.multiple = !!l.multiple, e = l.value, e != null ? f6(t, !!l.multiple, e, false) : l.defaultValue != null && f6(t, !!l.multiple, l.defaultValue, true);
                  break;
                default:
                  typeof c.onClick == "function" && (t.onclick = Z9);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break t;
                case "img":
                  l = true;
                  break t;
                default:
                  l = false;
              }
            }
            l && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 512, a.flags |= 2097152);
        }
        return s2(a), null;
      case 6:
        if (t && a.stateNode != null)
          Hs(t, a, t.memoizedProps, l);
        else {
          if (typeof l != "string" && a.stateNode === null)
            throw Error(F(166));
          if (r = l3(H8.current), l3(J0.current), e9(a)) {
            if (l = a.stateNode, r = a.memoizedProps, l[Q0] = a, (e = l.nodeValue !== r) && (t = J2, t !== null))
              switch (t.tag) {
                case 3:
                  c9(l.nodeValue, r, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== true && c9(l.nodeValue, r, (t.mode & 1) !== 0);
              }
            e && (a.flags |= 4);
          } else
            l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l), l[Q0] = a, a.stateNode = l;
        }
        return s2(a), null;
      case 13:
        if (V1(Z1), l = a.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (w1 && Y2 !== null && a.mode & 1 && !(a.flags & 128))
            Eu(), w6(), a.flags |= 98560, e = false;
          else if (e = e9(a), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!e)
                throw Error(F(318));
              if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                throw Error(F(317));
              e[Q0] = a;
            } else
              w6(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
            s2(a), e = false;
          } else
            P0 !== null && (th(P0), P0 = null), e = true;
          if (!e)
            return a.flags & 65536 ? a : null;
        }
        return a.flags & 128 ? (a.lanes = r, a) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (a.child.flags |= 8192, a.mode & 1 && (t === null || Z1.current & 1 ? X1 === 0 && (X1 = 3) : Dh())), a.updateQueue !== null && (a.flags |= 4), s2(a), null);
      case 4:
        return Z6(), Ge(t, a), t === null && p8(a.stateNode.containerInfo), s2(a), null;
      case 10:
        return Vh(a.type._context), s2(a), null;
      case 17:
        return b2(a.type) && S9(), s2(a), null;
      case 19:
        if (V1(Z1), e = a.memoizedState, e === null)
          return s2(a), null;
        if (l = (a.flags & 128) !== 0, h = e.rendering, h === null)
          if (l)
            Ut(e, false);
          else {
            if (X1 !== 0 || t !== null && t.flags & 128)
              for (t = a.child; t !== null; ) {
                if (h = E9(t), h !== null) {
                  for (a.flags |= 128, Ut(e, false), l = h.updateQueue, l !== null && (a.updateQueue = l, a.flags |= 4), a.subtreeFlags = 0, l = r, r = a.child; r !== null; )
                    e = r, t = l, e.flags &= 14680066, h = e.alternate, h === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = h.childLanes, e.lanes = h.lanes, e.child = h.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = h.memoizedProps, e.memoizedState = h.memoizedState, e.updateQueue = h.updateQueue, e.type = h.type, t = h.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), r = r.sibling;
                  return f1(Z1, Z1.current & 1 | 2), a.child;
                }
                t = t.sibling;
              }
            e.tail !== null && D1() > y6 && (a.flags |= 128, l = true, Ut(e, false), a.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = E9(h), t !== null) {
              if (a.flags |= 128, l = true, r = t.updateQueue, r !== null && (a.updateQueue = r, a.flags |= 4), Ut(e, true), e.tail === null && e.tailMode === "hidden" && !h.alternate && !w1)
                return s2(a), null;
            } else
              2 * D1() - e.renderingStartTime > y6 && r !== 1073741824 && (a.flags |= 128, l = true, Ut(e, false), a.lanes = 4194304);
          e.isBackwards ? (h.sibling = a.child, a.child = h) : (r = e.last, r !== null ? r.sibling = h : a.child = h, e.last = h);
        }
        return e.tail !== null ? (a = e.tail, e.rendering = a, e.tail = a.sibling, e.renderingStartTime = D1(), a.sibling = null, r = Z1.current, f1(Z1, l ? r & 1 | 2 : r & 1), a) : (s2(a), null);
      case 22:
      case 23:
        return bh(), l = a.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (a.flags |= 8192), l && a.mode & 1 ? Q2 & 1073741824 && (s2(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : s2(a), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(F(156, a.tag));
  }
  function bL(t, a) {
    switch (fh(a), a.tag) {
      case 1:
        return b2(a.type) && S9(), t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 3:
        return Z6(), V1(I2), V1(z2), Ah(), t = a.flags, t & 65536 && !(t & 128) ? (a.flags = t & -65537 | 128, a) : null;
      case 5:
        return wh(a), null;
      case 13:
        if (V1(Z1), t = a.memoizedState, t !== null && t.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(F(340));
          w6();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 19:
        return V1(Z1), null;
      case 4:
        return Z6(), null;
      case 10:
        return Vh(a.type._context), null;
      case 22:
      case 23:
        return bh(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var n9 = false, p2 = false, DL = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function z6(t, a) {
    var r = t.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (l) {
          R1(t, a, l);
        }
      else
        r.current = null;
  }
  function qe(t, a, r) {
    try {
      r();
    } catch (l) {
      R1(t, a, l);
    }
  }
  var Ag = false;
  function TL(t, a) {
    if (ye = B9, t = Cu(), zh(t)) {
      if ("selectionStart" in t)
        var r = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          r = (r = t.ownerDocument) && r.defaultView || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var c = l.anchorOffset, e = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, e.nodeType;
            } catch {
              r = null;
              break t;
            }
            var h = 0, i = -1, n = -1, o = 0, d = 0, v = t, g = null;
            a:
              for (; ; ) {
                for (var u; v !== r || c !== 0 && v.nodeType !== 3 || (i = h + c), v !== e || l !== 0 && v.nodeType !== 3 || (n = h + l), v.nodeType === 3 && (h += v.nodeValue.length), (u = v.firstChild) !== null; )
                  g = v, v = u;
                for (; ; ) {
                  if (v === t)
                    break a;
                  if (g === r && ++o === c && (i = h), g === e && ++d === l && (n = h), (u = v.nextSibling) !== null)
                    break;
                  v = g, g = v.parentNode;
                }
                v = u;
              }
            r = i === -1 || n === -1 ? null : { start: i, end: n };
          } else
            r = null;
        }
      r = r || { start: 0, end: 0 };
    } else
      r = null;
    for (Fe = { focusedElem: t, selectionRange: r }, B9 = false, E = a; E !== null; )
      if (a = E, t = a.child, (a.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = a, E = t;
      else
        for (; E !== null; ) {
          a = E;
          try {
            var z = a.alternate;
            if (a.flags & 1024)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (z !== null) {
                    var f = z.memoizedProps, m = z.memoizedState, p = a.stateNode, s = p.getSnapshotBeforeUpdate(a.elementType === a.type ? f : R0(a.type, f), m);
                    p.__reactInternalSnapshotBeforeUpdate = s;
                  }
                  break;
                case 3:
                  var M = a.stateNode.containerInfo;
                  M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(F(163));
              }
          } catch (x) {
            R1(a, a.return, x);
          }
          if (t = a.sibling, t !== null) {
            t.return = a.return, E = t;
            break;
          }
          E = a.return;
        }
    return z = Ag, Ag = false, z;
  }
  function c8(t, a, r) {
    var l = a.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var c = l = l.next;
      do {
        if ((c.tag & t) === t) {
          var e = c.destroy;
          c.destroy = void 0, e !== void 0 && qe(a, r, e);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Y9(t, a) {
    if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
      var r = a = a.next;
      do {
        if ((r.tag & t) === t) {
          var l = r.create;
          r.destroy = l();
        }
        r = r.next;
      } while (r !== a);
    }
  }
  function Ke(t) {
    var a = t.ref;
    if (a !== null) {
      var r = t.stateNode;
      switch (t.tag) {
        case 5:
          t = r;
          break;
        default:
          t = r;
      }
      typeof a == "function" ? a(t) : a.current = t;
    }
  }
  function ms(t) {
    var a = t.alternate;
    a !== null && (t.alternate = null, ms(a)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (a = t.stateNode, a !== null && (delete a[Q0], delete a[M8], delete a[Oe], delete a[VL], delete a[CL])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function xs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Zg(t) {
    t:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || xs(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4)
            continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2))
          return t.stateNode;
      }
  }
  function $e(t, a, r) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, a ? r.nodeType === 8 ? r.parentNode.insertBefore(t, a) : r.insertBefore(t, a) : (r.nodeType === 8 ? (a = r.parentNode, a.insertBefore(t, r)) : (a = r, a.appendChild(t)), r = r._reactRootContainer, r != null || a.onclick !== null || (a.onclick = Z9));
    else if (l !== 4 && (t = t.child, t !== null))
      for ($e(t, a, r), t = t.sibling; t !== null; )
        $e(t, a, r), t = t.sibling;
  }
  function Xe(t, a, r) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, a ? r.insertBefore(t, a) : r.appendChild(t);
    else if (l !== 4 && (t = t.child, t !== null))
      for (Xe(t, a, r), t = t.sibling; t !== null; )
        Xe(t, a, r), t = t.sibling;
  }
  var c2 = null, O0 = false;
  function Q5(t, a, r) {
    for (r = r.child; r !== null; )
      Vs(t, a, r), r = r.sibling;
  }
  function Vs(t, a, r) {
    if (Y0 && typeof Y0.onCommitFiberUnmount == "function")
      try {
        Y0.onCommitFiberUnmount(_9, r);
      } catch {
      }
    switch (r.tag) {
      case 5:
        p2 || z6(r, a);
      case 6:
        var l = c2, c = O0;
        c2 = null, Q5(t, a, r), c2 = l, O0 = c, c2 !== null && (O0 ? (t = c2, r = r.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : c2.removeChild(r.stateNode));
        break;
      case 18:
        c2 !== null && (O0 ? (t = c2, r = r.stateNode, t.nodeType === 8 ? Jc(t.parentNode, r) : t.nodeType === 1 && Jc(t, r), g8(t)) : Jc(c2, r.stateNode));
        break;
      case 4:
        l = c2, c = O0, c2 = r.stateNode.containerInfo, O0 = true, Q5(t, a, r), c2 = l, O0 = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!p2 && (l = r.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          c = l = l.next;
          do {
            var e = c, h = e.destroy;
            e = e.tag, h !== void 0 && (e & 2 || e & 4) && qe(r, a, h), c = c.next;
          } while (c !== l);
        }
        Q5(t, a, r);
        break;
      case 1:
        if (!p2 && (z6(r, a), l = r.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = r.memoizedProps, l.state = r.memoizedState, l.componentWillUnmount();
          } catch (i) {
            R1(r, a, i);
          }
        Q5(t, a, r);
        break;
      case 21:
        Q5(t, a, r);
        break;
      case 22:
        r.mode & 1 ? (p2 = (l = p2) || r.memoizedState !== null, Q5(t, a, r), p2 = l) : Q5(t, a, r);
        break;
      default:
        Q5(t, a, r);
    }
  }
  function Sg(t) {
    var a = t.updateQueue;
    if (a !== null) {
      t.updateQueue = null;
      var r = t.stateNode;
      r === null && (r = t.stateNode = new DL()), a.forEach(function(l) {
        var c = $L.bind(null, t, l);
        r.has(l) || (r.add(l), l.then(c, c));
      });
    }
  }
  function k0(t, a) {
    var r = a.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var c = r[l];
        try {
          var e = t, h = a, i = h;
          t:
            for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  c2 = i.stateNode, O0 = false;
                  break t;
                case 3:
                  c2 = i.stateNode.containerInfo, O0 = true;
                  break t;
                case 4:
                  c2 = i.stateNode.containerInfo, O0 = true;
                  break t;
              }
              i = i.return;
            }
          if (c2 === null)
            throw Error(F(160));
          Vs(e, h, c), c2 = null, O0 = false;
          var n = c.alternate;
          n !== null && (n.return = null), c.return = null;
        } catch (o) {
          R1(c, a, o);
        }
      }
    if (a.subtreeFlags & 12854)
      for (a = a.child; a !== null; )
        Cs(a, t), a = a.sibling;
  }
  function Cs(t, a) {
    var r = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (k0(a, t), $0(t), l & 4) {
          try {
            c8(3, t, t.return), Y9(3, t);
          } catch (f) {
            R1(t, t.return, f);
          }
          try {
            c8(5, t, t.return);
          } catch (f) {
            R1(t, t.return, f);
          }
        }
        break;
      case 1:
        k0(a, t), $0(t), l & 512 && r !== null && z6(r, r.return);
        break;
      case 5:
        if (k0(a, t), $0(t), l & 512 && r !== null && z6(r, r.return), t.flags & 32) {
          var c = t.stateNode;
          try {
            n8(c, "");
          } catch (f) {
            R1(t, t.return, f);
          }
        }
        if (l & 4 && (c = t.stateNode, c != null)) {
          var e = t.memoizedProps, h = r !== null ? r.memoizedProps : e, i = t.type, n = t.updateQueue;
          if (t.updateQueue = null, n !== null)
            try {
              i === "input" && e.type === "radio" && e.name != null && _g(c, e), me(i, h);
              var o = me(i, e);
              for (h = 0; h < n.length; h += 2) {
                var d = n[h], v = n[h + 1];
                d === "style" ? $g(c, v) : d === "dangerouslySetInnerHTML" ? qg(c, v) : d === "children" ? n8(c, v) : lh(c, d, v, o);
              }
              switch (i) {
                case "input":
                  pe(c, e);
                  break;
                case "textarea":
                  Ug(c, e);
                  break;
                case "select":
                  var g = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!e.multiple;
                  var u = e.value;
                  u != null ? f6(c, !!e.multiple, u, false) : g !== !!e.multiple && (e.defaultValue != null ? f6(c, !!e.multiple, e.defaultValue, true) : f6(c, !!e.multiple, e.multiple ? [] : "", false));
              }
              c[M8] = e;
            } catch (f) {
              R1(t, t.return, f);
            }
        }
        break;
      case 6:
        if (k0(a, t), $0(t), l & 4) {
          if (t.stateNode === null)
            throw Error(F(162));
          c = t.stateNode, e = t.memoizedProps;
          try {
            c.nodeValue = e;
          } catch (f) {
            R1(t, t.return, f);
          }
        }
        break;
      case 3:
        if (k0(a, t), $0(t), l & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            g8(a.containerInfo);
          } catch (f) {
            R1(t, t.return, f);
          }
        break;
      case 4:
        k0(a, t), $0(t);
        break;
      case 13:
        k0(a, t), $0(t), c = t.child, c.flags & 8192 && (e = c.memoizedState !== null, c.stateNode.isHidden = e, !e || c.alternate !== null && c.alternate.memoizedState !== null || (Eh = D1())), l & 4 && Sg(t);
        break;
      case 22:
        if (d = r !== null && r.memoizedState !== null, t.mode & 1 ? (p2 = (o = p2) || d, k0(a, t), p2 = o) : k0(a, t), $0(t), l & 8192) {
          if (o = t.memoizedState !== null, (t.stateNode.isHidden = o) && !d && t.mode & 1)
            for (E = t, d = t.child; d !== null; ) {
              for (v = E = d; E !== null; ) {
                switch (g = E, u = g.child, g.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    c8(4, g, g.return);
                    break;
                  case 1:
                    z6(g, g.return);
                    var z = g.stateNode;
                    if (typeof z.componentWillUnmount == "function") {
                      l = g, r = g.return;
                      try {
                        a = l, z.props = a.memoizedProps, z.state = a.memoizedState, z.componentWillUnmount();
                      } catch (f) {
                        R1(l, r, f);
                      }
                    }
                    break;
                  case 5:
                    z6(g, g.return);
                    break;
                  case 22:
                    if (g.memoizedState !== null) {
                      Fg(v);
                      continue;
                    }
                }
                u !== null ? (u.return = g, E = u) : Fg(v);
              }
              d = d.sibling;
            }
          t:
            for (d = null, v = t; ; ) {
              if (v.tag === 5) {
                if (d === null) {
                  d = v;
                  try {
                    c = v.stateNode, o ? (e = c.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none") : (i = v.stateNode, n = v.memoizedProps.style, h = n != null && n.hasOwnProperty("display") ? n.display : null, i.style.display = Kg("display", h));
                  } catch (f) {
                    R1(t, t.return, f);
                  }
                }
              } else if (v.tag === 6) {
                if (d === null)
                  try {
                    v.stateNode.nodeValue = o ? "" : v.memoizedProps;
                  } catch (f) {
                    R1(t, t.return, f);
                  }
              } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === t) && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === t)
                break t;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === t)
                  break t;
                d === v && (d = null), v = v.return;
              }
              d === v && (d = null), v.sibling.return = v.return, v = v.sibling;
            }
        }
        break;
      case 19:
        k0(a, t), $0(t), l & 4 && Sg(t);
        break;
      case 21:
        break;
      default:
        k0(a, t), $0(t);
    }
  }
  function $0(t) {
    var a = t.flags;
    if (a & 2) {
      try {
        t: {
          for (var r = t.return; r !== null; ) {
            if (xs(r)) {
              var l = r;
              break t;
            }
            r = r.return;
          }
          throw Error(F(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (n8(c, ""), l.flags &= -33);
            var e = Zg(t);
            Xe(t, e, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, i = Zg(t);
            $e(t, i, h);
            break;
          default:
            throw Error(F(161));
        }
      } catch (n) {
        R1(t, t.return, n);
      }
      t.flags &= -3;
    }
    a & 4096 && (t.flags &= -4097);
  }
  function WL(t, a, r) {
    E = t, Ls(t, a, r);
  }
  function Ls(t, a, r) {
    for (var l = (t.mode & 1) !== 0; E !== null; ) {
      var c = E, e = c.child;
      if (c.tag === 22 && l) {
        var h = c.memoizedState !== null || n9;
        if (!h) {
          var i = c.alternate, n = i !== null && i.memoizedState !== null || p2;
          i = n9;
          var o = p2;
          if (n9 = h, (p2 = n) && !o)
            for (E = c; E !== null; )
              h = E, n = h.child, h.tag === 22 && h.memoizedState !== null ? kg(c) : n !== null ? (n.return = h, E = n) : kg(c);
          for (; e !== null; )
            E = e, Ls(e, a, r), e = e.sibling;
          E = c, n9 = i, p2 = o;
        }
        yg(t, a, r);
      } else
        c.subtreeFlags & 8772 && e !== null ? (e.return = c, E = e) : yg(t, a, r);
    }
  }
  function yg(t) {
    for (; E !== null; ) {
      var a = E;
      if (a.flags & 8772) {
        var r = a.alternate;
        try {
          if (a.flags & 8772)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                p2 || Y9(5, a);
                break;
              case 1:
                var l = a.stateNode;
                if (a.flags & 4 && !p2)
                  if (r === null)
                    l.componentDidMount();
                  else {
                    var c = a.elementType === a.type ? r.memoizedProps : R0(a.type, r.memoizedProps);
                    l.componentDidUpdate(c, r.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var e = a.updateQueue;
                e !== null && ug(a, e, l);
                break;
              case 3:
                var h = a.updateQueue;
                if (h !== null) {
                  if (r = null, a.child !== null)
                    switch (a.child.tag) {
                      case 5:
                        r = a.child.stateNode;
                        break;
                      case 1:
                        r = a.child.stateNode;
                    }
                  ug(a, h, r);
                }
                break;
              case 5:
                var i = a.stateNode;
                if (r === null && a.flags & 4) {
                  r = i;
                  var n = a.memoizedProps;
                  switch (a.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      n.autoFocus && r.focus();
                      break;
                    case "img":
                      n.src && (r.src = n.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (a.memoizedState === null) {
                  var o = a.alternate;
                  if (o !== null) {
                    var d = o.memoizedState;
                    if (d !== null) {
                      var v = d.dehydrated;
                      v !== null && g8(v);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(F(163));
            }
          p2 || a.flags & 512 && Ke(a);
        } catch (g) {
          R1(a, a.return, g);
        }
      }
      if (a === t) {
        E = null;
        break;
      }
      if (r = a.sibling, r !== null) {
        r.return = a.return, E = r;
        break;
      }
      E = a.return;
    }
  }
  function Fg(t) {
    for (; E !== null; ) {
      var a = E;
      if (a === t) {
        E = null;
        break;
      }
      var r = a.sibling;
      if (r !== null) {
        r.return = a.return, E = r;
        break;
      }
      E = a.return;
    }
  }
  function kg(t) {
    for (; E !== null; ) {
      var a = E;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var r = a.return;
            try {
              Y9(4, a);
            } catch (n) {
              R1(a, r, n);
            }
            break;
          case 1:
            var l = a.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = a.return;
              try {
                l.componentDidMount();
              } catch (n) {
                R1(a, c, n);
              }
            }
            var e = a.return;
            try {
              Ke(a);
            } catch (n) {
              R1(a, e, n);
            }
            break;
          case 5:
            var h = a.return;
            try {
              Ke(a);
            } catch (n) {
              R1(a, h, n);
            }
        }
      } catch (n) {
        R1(a, a.return, n);
      }
      if (a === t) {
        E = null;
        break;
      }
      var i = a.sibling;
      if (i !== null) {
        i.return = a.return, E = i;
        break;
      }
      E = a.return;
    }
  }
  var jL = Math.ceil, D9 = Z5.ReactCurrentDispatcher, Oh = Z5.ReactCurrentOwner, V0 = Z5.ReactCurrentBatchConfig, h1 = 0, a2 = null, _1 = null, e2 = 0, Q2 = 0, M6 = p4(0), X1 = 0, C8 = null, o3 = 0, J9 = 0, Ph = 0, e8 = null, P2 = null, Eh = 0, y6 = 1 / 0, H5 = null, T9 = false, Qe = null, o4 = null, o9 = false, l4 = null, W9 = 0, h8 = 0, Ye = null, M9 = -1, f9 = 0;
  function L2() {
    return h1 & 6 ? D1() : M9 !== -1 ? M9 : M9 = D1();
  }
  function d4(t) {
    return t.mode & 1 ? h1 & 2 && e2 !== 0 ? e2 & -e2 : BL.transition !== null ? (f9 === 0 && (f9 = iu()), f9) : (t = u1, t !== 0 || (t = window.event, t = t === void 0 ? 16 : su(t.type)), t) : 1;
  }
  function I0(t, a, r, l) {
    if (50 < h8)
      throw h8 = 0, Ye = null, Error(F(185));
    L8(t, r, l), (!(h1 & 2) || t !== a2) && (t === a2 && (!(h1 & 2) && (J9 |= r), X1 === 4 && a4(t, e2)), D2(t, l), r === 1 && h1 === 0 && !(a.mode & 1) && (y6 = D1() + 500, $9 && z4()));
  }
  function D2(t, a) {
    var r = t.callbackNode;
    AC(t, a);
    var l = L9(t, t === a2 ? e2 : 0);
    if (l === 0)
      r !== null && Tv(r), t.callbackNode = null, t.callbackPriority = 0;
    else if (a = l & -l, t.callbackPriority !== a) {
      if (r != null && Tv(r), a === 1)
        t.tag === 0 ? LL(Rg.bind(null, t)) : Ru(Rg.bind(null, t)), mL(function() {
          !(h1 & 6) && z4();
        }), r = null;
      else {
        switch (nu(l)) {
          case 1:
            r = nh;
            break;
          case 4:
            r = eu;
            break;
          case 16:
            r = C9;
            break;
          case 536870912:
            r = hu;
            break;
          default:
            r = C9;
        }
        r = ks(r, Bs.bind(null, t));
      }
      t.callbackPriority = a, t.callbackNode = r;
    }
  }
  function Bs(t, a) {
    if (M9 = -1, f9 = 0, h1 & 6)
      throw Error(F(327));
    var r = t.callbackNode;
    if (C6() && t.callbackNode !== r)
      return null;
    var l = L9(t, t === a2 ? e2 : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & t.expiredLanes || a)
      a = j9(t, l);
    else {
      a = l;
      var c = h1;
      h1 |= 2;
      var e = As();
      (a2 !== t || e2 !== a) && (H5 = null, y6 = D1() + 500, c3(t, a));
      do
        try {
          UL();
          break;
        } catch (i) {
          ws(t, i);
        }
      while (1);
      xh(), D9.current = e, h1 = c, _1 !== null ? a = 0 : (a2 = null, e2 = 0, a = X1);
    }
    if (a !== 0) {
      if (a === 2 && (c = Be(t), c !== 0 && (l = c, a = Je(t, c))), a === 1)
        throw r = C8, c3(t, 0), a4(t, l), D2(t, D1()), r;
      if (a === 6)
        a4(t, l);
      else {
        if (c = t.current.alternate, !(l & 30) && !NL(c) && (a = j9(t, l), a === 2 && (e = Be(t), e !== 0 && (l = e, a = Je(t, e))), a === 1))
          throw r = C8, c3(t, 0), a4(t, l), D2(t, D1()), r;
        switch (t.finishedWork = c, t.finishedLanes = l, a) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            t3(t, P2, H5);
            break;
          case 3:
            if (a4(t, l), (l & 130023424) === l && (a = Eh + 500 - D1(), 10 < a)) {
              if (L9(t, 0) !== 0)
                break;
              if (c = t.suspendedLanes, (c & l) !== l) {
                L2(), t.pingedLanes |= t.suspendedLanes & c;
                break;
              }
              t.timeoutHandle = Re(t3.bind(null, t, P2, H5), a);
              break;
            }
            t3(t, P2, H5);
            break;
          case 4:
            if (a4(t, l), (l & 4194240) === l)
              break;
            for (a = t.eventTimes, c = -1; 0 < l; ) {
              var h = 31 - E0(l);
              e = 1 << h, h = a[h], h > c && (c = h), l &= ~e;
            }
            if (l = c, l = D1() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * jL(l / 1960)) - l, 10 < l) {
              t.timeoutHandle = Re(t3.bind(null, t, P2, H5), l);
              break;
            }
            t3(t, P2, H5);
            break;
          case 5:
            t3(t, P2, H5);
            break;
          default:
            throw Error(F(329));
        }
      }
    }
    return D2(t, D1()), t.callbackNode === r ? Bs.bind(null, t) : null;
  }
  function Je(t, a) {
    var r = e8;
    return t.current.memoizedState.isDehydrated && (c3(t, a).flags |= 256), t = j9(t, a), t !== 2 && (a = P2, P2 = r, a !== null && th(a)), t;
  }
  function th(t) {
    P2 === null ? P2 = t : P2.push.apply(P2, t);
  }
  function NL(t) {
    for (var a = t; ; ) {
      if (a.flags & 16384) {
        var r = a.updateQueue;
        if (r !== null && (r = r.stores, r !== null))
          for (var l = 0; l < r.length; l++) {
            var c = r[l], e = c.getSnapshot;
            c = c.value;
            try {
              if (!b0(e(), c))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (r = a.child, a.subtreeFlags & 16384 && r !== null)
        r.return = a, a = r;
      else {
        if (a === t)
          break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return true;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return true;
  }
  function a4(t, a) {
    for (a &= ~Ph, a &= ~J9, t.suspendedLanes |= a, t.pingedLanes &= ~a, t = t.expirationTimes; 0 < a; ) {
      var r = 31 - E0(a), l = 1 << r;
      t[r] = -1, a &= ~l;
    }
  }
  function Rg(t) {
    if (h1 & 6)
      throw Error(F(327));
    C6();
    var a = L9(t, 0);
    if (!(a & 1))
      return D2(t, D1()), null;
    var r = j9(t, a);
    if (t.tag !== 0 && r === 2) {
      var l = Be(t);
      l !== 0 && (a = l, r = Je(t, l));
    }
    if (r === 1)
      throw r = C8, c3(t, 0), a4(t, a), D2(t, D1()), r;
    if (r === 6)
      throw Error(F(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = a, t3(t, P2, H5), D2(t, D1()), null;
  }
  function Ih(t, a) {
    var r = h1;
    h1 |= 1;
    try {
      return t(a);
    } finally {
      h1 = r, h1 === 0 && (y6 = D1() + 500, $9 && z4());
    }
  }
  function d3(t) {
    l4 !== null && l4.tag === 0 && !(h1 & 6) && C6();
    var a = h1;
    h1 |= 1;
    var r = V0.transition, l = u1;
    try {
      if (V0.transition = null, u1 = 1, t)
        return t();
    } finally {
      u1 = l, V0.transition = r, h1 = a, !(h1 & 6) && z4();
    }
  }
  function bh() {
    Q2 = M6.current, V1(M6);
  }
  function c3(t, a) {
    t.finishedWork = null, t.finishedLanes = 0;
    var r = t.timeoutHandle;
    if (r !== -1 && (t.timeoutHandle = -1, HL(r)), _1 !== null)
      for (r = _1.return; r !== null; ) {
        var l = r;
        switch (fh(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && S9();
            break;
          case 3:
            Z6(), V1(I2), V1(z2), Ah();
            break;
          case 5:
            wh(l);
            break;
          case 4:
            Z6();
            break;
          case 13:
            V1(Z1);
            break;
          case 19:
            V1(Z1);
            break;
          case 10:
            Vh(l.type._context);
            break;
          case 22:
          case 23:
            bh();
        }
        r = r.return;
      }
    if (a2 = t, _1 = t = v4(t.current, null), e2 = Q2 = a, X1 = 0, C8 = null, Ph = J9 = o3 = 0, P2 = e8 = null, r3 !== null) {
      for (a = 0; a < r3.length; a++)
        if (r = r3[a], l = r.interleaved, l !== null) {
          r.interleaved = null;
          var c = l.next, e = r.pending;
          if (e !== null) {
            var h = e.next;
            e.next = c, l.next = h;
          }
          r.pending = l;
        }
      r3 = null;
    }
    return t;
  }
  function ws(t, a) {
    do {
      var r = _1;
      try {
        if (xh(), s9.current = b9, I9) {
          for (var l = S1.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), l = l.next;
          }
          I9 = false;
        }
        if (n3 = 0, t2 = $1 = S1 = null, l8 = false, m8 = 0, Oh.current = null, r === null || r.return === null) {
          X1 = 1, C8 = a, _1 = null;
          break;
        }
        t: {
          var e = t, h = r.return, i = r, n = a;
          if (a = e2, i.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
            var o = n, d = i, v = d.tag;
            if (!(d.mode & 1) && (v === 0 || v === 11 || v === 15)) {
              var g = d.alternate;
              g ? (d.updateQueue = g.updateQueue, d.memoizedState = g.memoizedState, d.lanes = g.lanes) : (d.updateQueue = null, d.memoizedState = null);
            }
            var u = mg(h);
            if (u !== null) {
              u.flags &= -257, xg(u, h, i, e, a), u.mode & 1 && Hg(e, o, a), a = u, n = o;
              var z = a.updateQueue;
              if (z === null) {
                var f = /* @__PURE__ */ new Set();
                f.add(n), a.updateQueue = f;
              } else
                z.add(n);
              break t;
            } else {
              if (!(a & 1)) {
                Hg(e, o, a), Dh();
                break t;
              }
              n = Error(F(426));
            }
          } else if (w1 && i.mode & 1) {
            var m = mg(h);
            if (m !== null) {
              !(m.flags & 65536) && (m.flags |= 256), xg(m, h, i, e, a), Hh(S6(n, i));
              break t;
            }
          }
          e = n = S6(n, i), X1 !== 4 && (X1 = 2), e8 === null ? e8 = [e] : e8.push(e), e = h;
          do {
            switch (e.tag) {
              case 3:
                e.flags |= 65536, a &= -a, e.lanes |= a;
                var p = os(e, n, a);
                gg(e, p);
                break t;
              case 1:
                i = n;
                var s = e.type, M = e.stateNode;
                if (!(e.flags & 128) && (typeof s.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (o4 === null || !o4.has(M)))) {
                  e.flags |= 65536, a &= -a, e.lanes |= a;
                  var x = ds(e, i, a);
                  gg(e, x);
                  break t;
                }
            }
            e = e.return;
          } while (e !== null);
        }
        Ss(r);
      } catch (C) {
        a = C, _1 === r && r !== null && (_1 = r = r.return);
        continue;
      }
      break;
    } while (1);
  }
  function As() {
    var t = D9.current;
    return D9.current = b9, t === null ? b9 : t;
  }
  function Dh() {
    (X1 === 0 || X1 === 3 || X1 === 2) && (X1 = 4), a2 === null || !(o3 & 268435455) && !(J9 & 268435455) || a4(a2, e2);
  }
  function j9(t, a) {
    var r = h1;
    h1 |= 2;
    var l = As();
    (a2 !== t || e2 !== a) && (H5 = null, c3(t, a));
    do
      try {
        _L();
        break;
      } catch (c) {
        ws(t, c);
      }
    while (1);
    if (xh(), h1 = r, D9.current = l, _1 !== null)
      throw Error(F(261));
    return a2 = null, e2 = 0, X1;
  }
  function _L() {
    for (; _1 !== null; )
      Zs(_1);
  }
  function UL() {
    for (; _1 !== null && !fC(); )
      Zs(_1);
  }
  function Zs(t) {
    var a = Fs(t.alternate, t, Q2);
    t.memoizedProps = t.pendingProps, a === null ? Ss(t) : _1 = a, Oh.current = null;
  }
  function Ss(t) {
    var a = t;
    do {
      var r = a.alternate;
      if (t = a.return, a.flags & 32768) {
        if (r = bL(r, a), r !== null) {
          r.flags &= 32767, _1 = r;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          X1 = 6, _1 = null;
          return;
        }
      } else if (r = IL(r, a, Q2), r !== null) {
        _1 = r;
        return;
      }
      if (a = a.sibling, a !== null) {
        _1 = a;
        return;
      }
      _1 = a = t;
    } while (a !== null);
    X1 === 0 && (X1 = 5);
  }
  function t3(t, a, r) {
    var l = u1, c = V0.transition;
    try {
      V0.transition = null, u1 = 1, GL(t, a, r, l);
    } finally {
      V0.transition = c, u1 = l;
    }
    return null;
  }
  function GL(t, a, r, l) {
    do
      C6();
    while (l4 !== null);
    if (h1 & 6)
      throw Error(F(327));
    r = t.finishedWork;
    var c = t.finishedLanes;
    if (r === null)
      return null;
    if (t.finishedWork = null, t.finishedLanes = 0, r === t.current)
      throw Error(F(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var e = r.lanes | r.childLanes;
    if (ZC(t, e), t === a2 && (_1 = a2 = null, e2 = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || o9 || (o9 = true, ks(C9, function() {
      return C6(), null;
    })), e = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || e) {
      e = V0.transition, V0.transition = null;
      var h = u1;
      u1 = 1;
      var i = h1;
      h1 |= 4, Oh.current = null, TL(t, r), Cs(r, t), sL(Fe), B9 = !!ye, Fe = ye = null, t.current = r, WL(r, t, c), HC(), h1 = i, u1 = h, V0.transition = e;
    } else
      t.current = r;
    if (o9 && (o9 = false, l4 = t, W9 = c), e = t.pendingLanes, e === 0 && (o4 = null), VC(r.stateNode, l), D2(t, D1()), a !== null)
      for (l = t.onRecoverableError, r = 0; r < a.length; r++)
        c = a[r], l(c.value, { componentStack: c.stack, digest: c.digest });
    if (T9)
      throw T9 = false, t = Qe, Qe = null, t;
    return W9 & 1 && t.tag !== 0 && C6(), e = t.pendingLanes, e & 1 ? t === Ye ? h8++ : (h8 = 0, Ye = t) : h8 = 0, z4(), null;
  }
  function C6() {
    if (l4 !== null) {
      var t = nu(W9), a = V0.transition, r = u1;
      try {
        if (V0.transition = null, u1 = 16 > t ? 16 : t, l4 === null)
          var l = false;
        else {
          if (t = l4, l4 = null, W9 = 0, h1 & 6)
            throw Error(F(331));
          var c = h1;
          for (h1 |= 4, E = t.current; E !== null; ) {
            var e = E, h = e.child;
            if (E.flags & 16) {
              var i = e.deletions;
              if (i !== null) {
                for (var n = 0; n < i.length; n++) {
                  var o = i[n];
                  for (E = o; E !== null; ) {
                    var d = E;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        c8(8, d, e);
                    }
                    var v = d.child;
                    if (v !== null)
                      v.return = d, E = v;
                    else
                      for (; E !== null; ) {
                        d = E;
                        var g = d.sibling, u = d.return;
                        if (ms(d), d === o) {
                          E = null;
                          break;
                        }
                        if (g !== null) {
                          g.return = u, E = g;
                          break;
                        }
                        E = u;
                      }
                  }
                }
                var z = e.alternate;
                if (z !== null) {
                  var f = z.child;
                  if (f !== null) {
                    z.child = null;
                    do {
                      var m = f.sibling;
                      f.sibling = null, f = m;
                    } while (f !== null);
                  }
                }
                E = e;
              }
            }
            if (e.subtreeFlags & 2064 && h !== null)
              h.return = e, E = h;
            else
              t:
                for (; E !== null; ) {
                  if (e = E, e.flags & 2048)
                    switch (e.tag) {
                      case 0:
                      case 11:
                      case 15:
                        c8(9, e, e.return);
                    }
                  var p = e.sibling;
                  if (p !== null) {
                    p.return = e.return, E = p;
                    break t;
                  }
                  E = e.return;
                }
          }
          var s = t.current;
          for (E = s; E !== null; ) {
            h = E;
            var M = h.child;
            if (h.subtreeFlags & 2064 && M !== null)
              M.return = h, E = M;
            else
              t:
                for (h = s; E !== null; ) {
                  if (i = E, i.flags & 2048)
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Y9(9, i);
                      }
                    } catch (C) {
                      R1(i, i.return, C);
                    }
                  if (i === h) {
                    E = null;
                    break t;
                  }
                  var x = i.sibling;
                  if (x !== null) {
                    x.return = i.return, E = x;
                    break t;
                  }
                  E = i.return;
                }
          }
          if (h1 = c, z4(), Y0 && typeof Y0.onPostCommitFiberRoot == "function")
            try {
              Y0.onPostCommitFiberRoot(_9, t);
            } catch {
            }
          l = true;
        }
        return l;
      } finally {
        u1 = r, V0.transition = a;
      }
    }
    return false;
  }
  function Og(t, a, r) {
    a = S6(r, a), a = os(t, a, 1), t = n4(t, a, 1), a = L2(), t !== null && (L8(t, 1, a), D2(t, a));
  }
  function R1(t, a, r) {
    if (t.tag === 3)
      Og(t, t, r);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Og(a, t, r);
          break;
        } else if (a.tag === 1) {
          var l = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (o4 === null || !o4.has(l))) {
            t = S6(r, t), t = ds(a, t, 1), a = n4(a, t, 1), t = L2(), a !== null && (L8(a, 1, t), D2(a, t));
            break;
          }
        }
        a = a.return;
      }
  }
  function qL(t, a, r) {
    var l = t.pingCache;
    l !== null && l.delete(a), a = L2(), t.pingedLanes |= t.suspendedLanes & r, a2 === t && (e2 & r) === r && (X1 === 4 || X1 === 3 && (e2 & 130023424) === e2 && 500 > D1() - Eh ? c3(t, 0) : Ph |= r), D2(t, a);
  }
  function ys(t, a) {
    a === 0 && (t.mode & 1 ? (a = $7, $7 <<= 1, !($7 & 130023424) && ($7 = 4194304)) : a = 1);
    var r = L2();
    t = w5(t, a), t !== null && (L8(t, a, r), D2(t, r));
  }
  function KL(t) {
    var a = t.memoizedState, r = 0;
    a !== null && (r = a.retryLane), ys(t, r);
  }
  function $L(t, a) {
    var r = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, c = t.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      default:
        throw Error(F(314));
    }
    l !== null && l.delete(a), ys(t, r);
  }
  var Fs;
  Fs = function(t, a, r) {
    if (t !== null)
      if (t.memoizedProps !== a.pendingProps || I2.current)
        E2 = true;
      else {
        if (!(t.lanes & r) && !(a.flags & 128))
          return E2 = false, EL(t, a, r);
        E2 = !!(t.flags & 131072);
      }
    else
      E2 = false, w1 && a.flags & 1048576 && Ou(a, k9, a.index);
    switch (a.lanes = 0, a.tag) {
      case 2:
        var l = a.type;
        z9(t, a), t = a.pendingProps;
        var c = B6(a, z2.current);
        V6(a, r), c = Sh(null, a, l, t, c, r);
        var e = yh();
        return a.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (a.tag = 1, a.memoizedState = null, a.updateQueue = null, b2(l) ? (e = true, y9(a)) : e = false, a.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Lh(a), c.updater = X9, a.stateNode = c, c._reactInternals = a, Te(a, l, t, r), a = Ne(null, a, l, true, e, r)) : (a.tag = 0, w1 && e && Mh(a), C2(null, a, c, r), a = a.child), a;
      case 16:
        l = a.elementType;
        t: {
          switch (z9(t, a), t = a.pendingProps, c = l._init, l = c(l._payload), a.type = l, c = a.tag = QL(l), t = R0(l, t), c) {
            case 0:
              a = je(null, a, l, t, r);
              break t;
            case 1:
              a = Lg(null, a, l, t, r);
              break t;
            case 11:
              a = Vg(null, a, l, t, r);
              break t;
            case 14:
              a = Cg(null, a, l, R0(l.type, t), r);
              break t;
          }
          throw Error(F(306, l, ""));
        }
        return a;
      case 0:
        return l = a.type, c = a.pendingProps, c = a.elementType === l ? c : R0(l, c), je(t, a, l, c, r);
      case 1:
        return l = a.type, c = a.pendingProps, c = a.elementType === l ? c : R0(l, c), Lg(t, a, l, c, r);
      case 3:
        t: {
          if (ss(a), t === null)
            throw Error(F(387));
          l = a.pendingProps, e = a.memoizedState, c = e.element, bu(t, a), P9(a, l, null, r);
          var h = a.memoizedState;
          if (l = h.element, e.isDehydrated)
            if (e = { element: l, isDehydrated: false, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, a.updateQueue.baseState = e, a.memoizedState = e, a.flags & 256) {
              c = S6(Error(F(423)), a), a = Bg(t, a, l, r, c);
              break t;
            } else if (l !== c) {
              c = S6(Error(F(424)), a), a = Bg(t, a, l, r, c);
              break t;
            } else
              for (Y2 = i4(a.stateNode.containerInfo.firstChild), J2 = a, w1 = true, P0 = null, r = ju(a, null, l, r), a.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (w6(), l === c) {
              a = A5(t, a, r);
              break t;
            }
            C2(t, a, l, r);
          }
          a = a.child;
        }
        return a;
      case 5:
        return Nu(a), t === null && Ie(a), l = a.type, c = a.pendingProps, e = t !== null ? t.memoizedProps : null, h = c.children, ke(l, c) ? h = null : e !== null && ke(l, e) && (a.flags |= 32), us(t, a), C2(t, a, h, r), a.child;
      case 6:
        return t === null && Ie(a), null;
      case 13:
        return ps(t, a, r);
      case 4:
        return Bh(a, a.stateNode.containerInfo), l = a.pendingProps, t === null ? a.child = A6(a, null, l, r) : C2(t, a, l, r), a.child;
      case 11:
        return l = a.type, c = a.pendingProps, c = a.elementType === l ? c : R0(l, c), Vg(t, a, l, c, r);
      case 7:
        return C2(t, a, a.pendingProps, r), a.child;
      case 8:
        return C2(t, a, a.pendingProps.children, r), a.child;
      case 12:
        return C2(t, a, a.pendingProps.children, r), a.child;
      case 10:
        t: {
          if (l = a.type._context, c = a.pendingProps, e = a.memoizedProps, h = c.value, f1(R9, l._currentValue), l._currentValue = h, e !== null)
            if (b0(e.value, h)) {
              if (e.children === c.children && !I2.current) {
                a = A5(t, a, r);
                break t;
              }
            } else
              for (e = a.child, e !== null && (e.return = a); e !== null; ) {
                var i = e.dependencies;
                if (i !== null) {
                  h = e.child;
                  for (var n = i.firstContext; n !== null; ) {
                    if (n.context === l) {
                      if (e.tag === 1) {
                        n = C5(-1, r & -r), n.tag = 2;
                        var o = e.updateQueue;
                        if (o !== null) {
                          o = o.shared;
                          var d = o.pending;
                          d === null ? n.next = n : (n.next = d.next, d.next = n), o.pending = n;
                        }
                      }
                      e.lanes |= r, n = e.alternate, n !== null && (n.lanes |= r), be(e.return, r, a), i.lanes |= r;
                      break;
                    }
                    n = n.next;
                  }
                } else if (e.tag === 10)
                  h = e.type === a.type ? null : e.child;
                else if (e.tag === 18) {
                  if (h = e.return, h === null)
                    throw Error(F(341));
                  h.lanes |= r, i = h.alternate, i !== null && (i.lanes |= r), be(h, r, a), h = e.sibling;
                } else
                  h = e.child;
                if (h !== null)
                  h.return = e;
                else
                  for (h = e; h !== null; ) {
                    if (h === a) {
                      h = null;
                      break;
                    }
                    if (e = h.sibling, e !== null) {
                      e.return = h.return, h = e;
                      break;
                    }
                    h = h.return;
                  }
                e = h;
              }
          C2(t, a, c.children, r), a = a.child;
        }
        return a;
      case 9:
        return c = a.type, l = a.pendingProps.children, V6(a, r), c = C0(c), l = l(c), a.flags |= 1, C2(t, a, l, r), a.child;
      case 14:
        return l = a.type, c = R0(l, a.pendingProps), c = R0(l.type, c), Cg(t, a, l, c, r);
      case 15:
        return vs(t, a, a.type, a.pendingProps, r);
      case 17:
        return l = a.type, c = a.pendingProps, c = a.elementType === l ? c : R0(l, c), z9(t, a), a.tag = 1, b2(l) ? (t = true, y9(a)) : t = false, V6(a, r), Tu(a, l, c), Te(a, l, c, r), Ne(null, a, l, true, t, r);
      case 19:
        return zs(t, a, r);
      case 22:
        return gs(t, a, r);
    }
    throw Error(F(156, a.tag));
  };
  function ks(t, a) {
    return cu(t, a);
  }
  function XL(t, a, r, l) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function x0(t, a, r, l) {
    return new XL(t, a, r, l);
  }
  function Th(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function QL(t) {
    if (typeof t == "function")
      return Th(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === eh)
        return 11;
      if (t === hh)
        return 14;
    }
    return 2;
  }
  function v4(t, a) {
    var r = t.alternate;
    return r === null ? (r = x0(t.tag, a, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = a, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 14680064, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, a = t.dependencies, r.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r;
  }
  function H9(t, a, r, l, c, e) {
    var h = 2;
    if (l = t, typeof t == "function")
      Th(t) && (h = 1);
    else if (typeof t == "string")
      h = 5;
    else
      t:
        switch (t) {
          case i6:
            return e3(r.children, c, e, a);
          case ch:
            h = 8, c |= 8;
            break;
          case de:
            return t = x0(12, r, a, c | 2), t.elementType = de, t.lanes = e, t;
          case ve:
            return t = x0(13, r, a, c), t.elementType = ve, t.lanes = e, t;
          case ge:
            return t = x0(19, r, a, c), t.elementType = ge, t.lanes = e, t;
          case Wg:
            return ta(r, c, e, a);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Dg:
                  h = 10;
                  break t;
                case Tg:
                  h = 9;
                  break t;
                case eh:
                  h = 11;
                  break t;
                case hh:
                  h = 14;
                  break t;
                case Y5:
                  h = 16, l = null;
                  break t;
              }
            throw Error(F(130, t == null ? t : typeof t, ""));
        }
    return a = x0(h, r, a, c), a.elementType = t, a.type = l, a.lanes = e, a;
  }
  function e3(t, a, r, l) {
    return t = x0(7, t, l, a), t.lanes = r, t;
  }
  function ta(t, a, r, l) {
    return t = x0(22, t, l, a), t.elementType = Wg, t.lanes = r, t.stateNode = { isHidden: false }, t;
  }
  function ie(t, a, r) {
    return t = x0(6, t, null, a), t.lanes = r, t;
  }
  function ne(t, a, r) {
    return a = x0(4, t.children !== null ? t.children : [], t.key, a), a.lanes = r, a.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, a;
  }
  function YL(t, a, r, l, c) {
    this.tag = a, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uc(0), this.expirationTimes = Uc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uc(0), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Wh(t, a, r, l, c, e, h, i, n) {
    return t = new YL(t, a, r, i, n), a === 1 ? (a = 1, e === true && (a |= 8)) : a = 0, e = x0(3, null, null, a), t.current = e, e.stateNode = t, e.memoizedState = { element: l, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lh(e), t;
  }
  function JL(t, a, r) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: h6, key: l == null ? null : "" + l, children: t, containerInfo: a, implementation: r };
  }
  function Rs(t) {
    if (!t)
      return u4;
    t = t._reactInternals;
    t: {
      if (g3(t) !== t || t.tag !== 1)
        throw Error(F(170));
      var a = t;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break t;
          case 1:
            if (b2(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(F(171));
    }
    if (t.tag === 1) {
      var r = t.type;
      if (b2(r))
        return ku(t, r, a);
    }
    return a;
  }
  function Os(t, a, r, l, c, e, h, i, n) {
    return t = Wh(r, l, true, t, c, e, h, i, n), t.context = Rs(null), r = t.current, l = L2(), c = d4(r), e = C5(l, c), e.callback = a ?? null, n4(r, e, c), t.current.lanes = c, L8(t, c, l), D2(t, l), t;
  }
  function aa(t, a, r, l) {
    var c = a.current, e = L2(), h = d4(c);
    return r = Rs(r), a.context === null ? a.context = r : a.pendingContext = r, a = C5(e, h), a.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (a.callback = l), t = n4(c, a, h), t !== null && (I0(t, c, h, e), u9(t, c, h)), h;
  }
  function N9(t) {
    if (t = t.current, !t.child)
      return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Pg(t, a) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < a ? r : a;
    }
  }
  function jh(t, a) {
    Pg(t, a), (t = t.alternate) && Pg(t, a);
  }
  function tB() {
    return null;
  }
  var Ps = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Nh(t) {
    this._internalRoot = t;
  }
  ra.prototype.render = Nh.prototype.render = function(t) {
    var a = this._internalRoot;
    if (a === null)
      throw Error(F(409));
    aa(t, a, null, null);
  };
  ra.prototype.unmount = Nh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var a = t.containerInfo;
      d3(function() {
        aa(null, t, null, null);
      }), a[B5] = null;
    }
  };
  function ra(t) {
    this._internalRoot = t;
  }
  ra.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var a = vu();
      t = { blockedOn: null, target: t, priority: a };
      for (var r = 0; r < t4.length && a !== 0 && a < t4[r].priority; r++)
        ;
      t4.splice(r, 0, t), r === 0 && uu(t);
    }
  };
  function _h(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function la(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Eg() {
  }
  function aB(t, a, r, l, c) {
    if (c) {
      if (typeof l == "function") {
        var e = l;
        l = function() {
          var o = N9(h);
          e.call(o);
        };
      }
      var h = Os(a, l, t, 0, null, false, false, "", Eg);
      return t._reactRootContainer = h, t[B5] = h.current, p8(t.nodeType === 8 ? t.parentNode : t), d3(), h;
    }
    for (; c = t.lastChild; )
      t.removeChild(c);
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var o = N9(n);
        i.call(o);
      };
    }
    var n = Wh(t, 0, false, null, null, false, false, "", Eg);
    return t._reactRootContainer = n, t[B5] = n.current, p8(t.nodeType === 8 ? t.parentNode : t), d3(function() {
      aa(a, n, r, l);
    }), n;
  }
  function ca(t, a, r, l, c) {
    var e = r._reactRootContainer;
    if (e) {
      var h = e;
      if (typeof c == "function") {
        var i = c;
        c = function() {
          var n = N9(h);
          i.call(n);
        };
      }
      aa(a, h, t, c);
    } else
      h = aB(r, a, t, c, l);
    return N9(h);
  }
  ou = function(t) {
    switch (t.tag) {
      case 3:
        var a = t.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var r = Xt(a.pendingLanes);
          r !== 0 && (oh(a, r | 1), D2(a, D1()), !(h1 & 6) && (y6 = D1() + 500, z4()));
        }
        break;
      case 13:
        d3(function() {
          var l = w5(t, 1);
          if (l !== null) {
            var c = L2();
            I0(l, t, 1, c);
          }
        }), jh(t, 1);
    }
  };
  dh = function(t) {
    if (t.tag === 13) {
      var a = w5(t, 134217728);
      if (a !== null) {
        var r = L2();
        I0(a, t, 134217728, r);
      }
      jh(t, 134217728);
    }
  };
  du = function(t) {
    if (t.tag === 13) {
      var a = d4(t), r = w5(t, a);
      if (r !== null) {
        var l = L2();
        I0(r, t, a, l);
      }
      jh(t, a);
    }
  };
  vu = function() {
    return u1;
  };
  gu = function(t, a) {
    var r = u1;
    try {
      return u1 = t, a();
    } finally {
      u1 = r;
    }
  };
  Ve = function(t, a, r) {
    switch (a) {
      case "input":
        if (pe(t, r), a = r.name, r.type === "radio" && a != null) {
          for (r = t; r.parentNode; )
            r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < r.length; a++) {
            var l = r[a];
            if (l !== t && l.form === t.form) {
              var c = K9(l);
              if (!c)
                throw Error(F(90));
              Ng(l), pe(l, c);
            }
          }
        }
        break;
      case "textarea":
        Ug(t, r);
        break;
      case "select":
        a = r.value, a != null && f6(t, !!r.multiple, a, false);
    }
  };
  Yg = Ih;
  Jg = d3;
  var rB = { usingClientEntryPoint: false, Events: [w8, v6, K9, Xg, Qg, Ih] }, Gt = { findFiberByHostInstance: a3, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, lB = { bundleType: Gt.bundleType, version: Gt.version, rendererPackageName: Gt.rendererPackageName, rendererConfig: Gt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Z5.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = ru(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Gt.findFiberByHostInstance || tB, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (qt = __REACT_DEVTOOLS_GLOBAL_HOOK__, !qt.isDisabled && qt.supportsFiber))
    try {
      _9 = qt.inject(lB), Y0 = qt;
    } catch {
    }
  var qt;
  r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rB;
  r0.createPortal = function(t, a) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_h(a))
      throw Error(F(200));
    return JL(t, a, null, r);
  };
  r0.createRoot = function(t, a) {
    if (!_h(t))
      throw Error(F(299));
    var r = false, l = "", c = Ps;
    return a != null && (a.unstable_strictMode === true && (r = true), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onRecoverableError !== void 0 && (c = a.onRecoverableError)), a = Wh(t, 1, false, null, null, r, false, l, c), t[B5] = a.current, p8(t.nodeType === 8 ? t.parentNode : t), new Nh(a);
  };
  r0.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var a = t._reactInternals;
    if (a === void 0)
      throw typeof t.render == "function" ? Error(F(188)) : (t = Object.keys(t).join(","), Error(F(268, t)));
    return t = ru(a), t = t === null ? null : t.stateNode, t;
  };
  r0.flushSync = function(t) {
    return d3(t);
  };
  r0.hydrate = function(t, a, r) {
    if (!la(a))
      throw Error(F(200));
    return ca(null, t, a, true, r);
  };
  r0.hydrateRoot = function(t, a, r) {
    if (!_h(t))
      throw Error(F(405));
    var l = r != null && r.hydratedSources || null, c = false, e = "", h = Ps;
    if (r != null && (r.unstable_strictMode === true && (c = true), r.identifierPrefix !== void 0 && (e = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), a = Os(a, null, t, 1, r ?? null, c, false, e, h), t[B5] = a.current, p8(t), l)
      for (t = 0; t < l.length; t++)
        r = l[t], c = r._getVersion, c = c(r._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [r, c] : a.mutableSourceEagerHydrationData.push(r, c);
    return new ra(a);
  };
  r0.render = function(t, a, r) {
    if (!la(a))
      throw Error(F(200));
    return ca(null, t, a, false, r);
  };
  r0.unmountComponentAtNode = function(t) {
    if (!la(t))
      throw Error(F(40));
    return t._reactRootContainer ? (d3(function() {
      ca(null, null, t, false, function() {
        t._reactRootContainer = null, t[B5] = null;
      });
    }), true) : false;
  };
  r0.unstable_batchedUpdates = Ih;
  r0.unstable_renderSubtreeIntoContainer = function(t, a, r, l) {
    if (!la(r))
      throw Error(F(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(F(38));
    return ca(t, a, r, false, l);
  };
  r0.version = "18.2.0-next-9e3b772b8-20220608";
});
var Ds = J1((Qk, bs) => {
  "use strict";
  function Is() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Is);
      } catch (t) {
        console.error(t);
      }
  }
  Is(), bs.exports = Es();
});
var Us = {};
u5(Us, { AbortedDeferredError: () => S0, Await: () => O8, MemoryRouter: () => Kh, Navigate: () => $h, NavigationType: () => n1, Outlet: () => P6, Route: () => R8, Router: () => r5, RouterProvider: () => uB, Routes: () => Ma, UNSAFE_DataRouterContext: () => w0, UNSAFE_DataRouterStateContext: () => D0, UNSAFE_LocationContext: () => f4, UNSAFE_NavigationContext: () => M2, UNSAFE_RouteContext: () => f2, UNSAFE_mapRouteProperties: () => P8, UNSAFE_useRouteId: () => F8, UNSAFE_useRoutesImpl: () => S8, createMemoryRouter: () => Qh, createPath: () => q1, createRoutesFromChildren: () => u3, createRoutesFromElements: () => u3, defer: () => $4, generatePath: () => K3, isRouteErrorResponse: () => N1, json: () => q0, matchPath: () => M0, matchRoutes: () => j1, parsePath: () => I1, redirect: () => z5, redirectDocument: () => X4, renderMatches: () => Xh, resolvePath: () => K4, useActionData: () => za, useAsyncError: () => R6, useAsyncValue: () => k8, useBlocker: () => O6, useHref: () => S5, useInRouterContext: () => t5, useLoaderData: () => sa, useLocation: () => U1, useMatch: () => na, useMatches: () => V4, useNavigate: () => H4, useNavigation: () => x4, useNavigationType: () => ia, useOutlet: () => Z8, useOutletContext: () => oa, useParams: () => da, useResolvedPath: () => a5, useRevalidator: () => ua, useRouteError: () => s3, useRouteLoaderData: () => pa, useRoutes: () => va });
function M4() {
  return M4 = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, M4.apply(this, arguments);
}
function S5(t, a) {
  let { relative: r } = a === void 0 ? {} : a;
  t5() || T(false);
  let { basename: l, navigator: c } = Z.useContext(M2), { hash: e, pathname: h, search: i } = a5(t, { relative: r }), n = h;
  return l !== "/" && (n = h === "/" ? l : X2([l, h])), c.createHref({ pathname: n, search: i, hash: e });
}
function t5() {
  return Z.useContext(f4) != null;
}
function U1() {
  return t5() || T(false), Z.useContext(f4).location;
}
function ia() {
  return Z.useContext(f4).navigationType;
}
function na(t) {
  t5() || T(false);
  let { pathname: a } = U1();
  return Z.useMemo(() => M0(t, a), [a, t]);
}
function js(t) {
  Z.useContext(M2).static || Z.useLayoutEffect(t);
}
function H4() {
  let { isDataRoute: t } = Z.useContext(f2);
  return t ? dB() : cB();
}
function cB() {
  t5() || T(false);
  let t = Z.useContext(w0), { basename: a, future: r, navigator: l } = Z.useContext(M2), { matches: c } = Z.useContext(f2), { pathname: e } = U1(), h = JSON.stringify($3(c, r.v7_relativeSplatPath)), i = Z.useRef(false);
  return js(() => {
    i.current = true;
  }), Z.useCallback(function(o, d) {
    if (d === void 0 && (d = {}), !i.current)
      return;
    if (typeof o == "number") {
      l.go(o);
      return;
    }
    let v = X3(o, JSON.parse(h), e, d.relative === "path");
    t == null && a !== "/" && (v.pathname = v.pathname === "/" ? a : X2([a, v.pathname])), (d.replace ? l.replace : l.push)(v, d.state, d);
  }, [a, l, h, e, t]);
}
function oa() {
  return Z.useContext(Ns);
}
function Z8(t) {
  let a = Z.useContext(f2).outlet;
  return a && Z.createElement(Ns.Provider, { value: t }, a);
}
function da() {
  let { matches: t } = Z.useContext(f2), a = t[t.length - 1];
  return a ? a.params : {};
}
function a5(t, a) {
  let { relative: r } = a === void 0 ? {} : a, { future: l } = Z.useContext(M2), { matches: c } = Z.useContext(f2), { pathname: e } = U1(), h = JSON.stringify($3(c, l.v7_relativeSplatPath));
  return Z.useMemo(() => X3(t, JSON.parse(h), e, r === "path"), [t, h, e, r]);
}
function va(t, a) {
  return S8(t, a);
}
function S8(t, a, r, l) {
  t5() || T(false);
  let { navigator: c } = Z.useContext(M2), { matches: e } = Z.useContext(f2), h = e[e.length - 1], i = h ? h.params : {}, n = h ? h.pathname : "/", o = h ? h.pathnameBase : "/", d = h && h.route, v = U1(), g;
  if (a) {
    var u;
    let s = typeof a == "string" ? I1(a) : a;
    o === "/" || (u = s.pathname) != null && u.startsWith(o) || T(false), g = s;
  } else
    g = v;
  let z = g.pathname || "/", f = z;
  if (o !== "/") {
    let s = o.replace(/^\//, "").split("/");
    f = "/" + z.replace(/^\//, "").split("/").slice(s.length).join("/");
  }
  let m = j1(t, { pathname: f }), p = _s(m && m.map((s) => Object.assign({}, s, { params: Object.assign({}, i, s.params), pathname: X2([o, c.encodeLocation ? c.encodeLocation(s.pathname).pathname : s.pathname]), pathnameBase: s.pathnameBase === "/" ? o : X2([o, c.encodeLocation ? c.encodeLocation(s.pathnameBase).pathname : s.pathnameBase]) })), e, r, l);
  return a && p ? Z.createElement(f4.Provider, { value: { location: M4({ pathname: "/", search: "", hash: "", state: null, key: "default" }, g), navigationType: n1.Pop } }, p) : p;
}
function eB() {
  let t = s3(), a = N1(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, l = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: l }, e = { padding: "2px 4px", backgroundColor: l };
  return Z.createElement(Z.Fragment, null, Z.createElement("h2", null, "Unexpected Application Error!"), Z.createElement("h3", { style: { fontStyle: "italic" } }, a), r ? Z.createElement("pre", { style: c }, r) : null, null);
}
function iB(t) {
  let { routeContext: a, match: r, children: l } = t, c = Z.useContext(w0);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), Z.createElement(f2.Provider, { value: a }, l);
}
function _s(t, a, r, l) {
  var c;
  if (a === void 0 && (a = []), r === void 0 && (r = null), l === void 0 && (l = null), t == null) {
    var e;
    if ((e = r) != null && e.errors)
      t = r.matches;
    else
      return null;
  }
  let h = t, i = (c = r) == null ? void 0 : c.errors;
  if (i != null) {
    let d = h.findIndex((v) => v.route.id && i?.[v.route.id]);
    d >= 0 || T(false), h = h.slice(0, Math.min(h.length, d + 1));
  }
  let n = false, o = -1;
  if (r && l && l.v7_partialHydration)
    for (let d = 0; d < h.length; d++) {
      let v = h[d];
      if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (o = d), v.route.id) {
        let { loaderData: g, errors: u } = r, z = v.route.loader && g[v.route.id] === void 0 && (!u || u[v.route.id] === void 0);
        if (v.route.lazy || z) {
          n = true, o >= 0 ? h = h.slice(0, o + 1) : h = [h[0]];
          break;
        }
      }
    }
  return h.reduceRight((d, v, g) => {
    let u, z = false, f = null, m = null;
    r && (u = i && v.route.id ? i[v.route.id] : void 0, f = v.route.errorElement || hB, n && (o < 0 && g === 0 ? (vB("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), z = true, m = null) : o === g && (z = true, m = v.route.hydrateFallbackElement || null)));
    let p = a.concat(h.slice(0, g + 1)), s = () => {
      let M;
      return u ? M = f : z ? M = m : v.route.Component ? M = Z.createElement(v.route.Component, null) : v.route.element ? M = v.route.element : M = d, Z.createElement(iB, { match: v, routeContext: { outlet: d, matches: p, isDataRoute: r != null }, children: M });
    };
    return r && (v.route.ErrorBoundary || v.route.errorElement || g === 0) ? Z.createElement(Uh, { location: r.location, revalidation: r.revalidation, component: f, error: u, children: s(), routeContext: { outlet: null, matches: p, isDataRoute: true } }) : s();
  }, null);
}
function qh(t) {
  let a = Z.useContext(w0);
  return a || T(false), a;
}
function m4(t) {
  let a = Z.useContext(D0);
  return a || T(false), a;
}
function nB(t) {
  let a = Z.useContext(f2);
  return a || T(false), a;
}
function y8(t) {
  let a = nB(t), r = a.matches[a.matches.length - 1];
  return r.route.id || T(false), r.route.id;
}
function F8() {
  return y8(T2.UseRouteId);
}
function x4() {
  return m4(T2.UseNavigation).navigation;
}
function ua() {
  let t = qh(ga.UseRevalidator), a = m4(T2.UseRevalidator);
  return Z.useMemo(() => ({ revalidate: t.router.revalidate, state: a.revalidation }), [t.router.revalidate, a.revalidation]);
}
function V4() {
  let { matches: t, loaderData: a } = m4(T2.UseMatches);
  return Z.useMemo(() => t.map((r) => y7(r, a)), [t, a]);
}
function sa() {
  let t = m4(T2.UseLoaderData), a = y8(T2.UseLoaderData);
  if (t.errors && t.errors[a] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + a + ")");
    return;
  }
  return t.loaderData[a];
}
function pa(t) {
  return m4(T2.UseRouteLoaderData).loaderData[t];
}
function za() {
  let t = m4(T2.UseActionData), a = y8(T2.UseLoaderData);
  return t.actionData ? t.actionData[a] : void 0;
}
function s3() {
  var t;
  let a = Z.useContext(Ws), r = m4(T2.UseRouteError), l = y8(T2.UseRouteError);
  return a !== void 0 ? a : (t = r.errors) == null ? void 0 : t[l];
}
function k8() {
  let t = Z.useContext(ea);
  return t?._data;
}
function R6() {
  let t = Z.useContext(ea);
  return t?._error;
}
function O6(t) {
  let { router: a, basename: r } = qh(ga.UseBlocker), l = m4(T2.UseBlocker), [c, e] = Z.useState(""), h = Z.useCallback((i) => {
    if (typeof t != "function")
      return !!t;
    if (r === "/")
      return t(i);
    let { currentLocation: n, nextLocation: o, historyAction: d } = i;
    return t({ currentLocation: M4({}, n, { pathname: K1(n.pathname, r) || n.pathname }), nextLocation: M4({}, o, { pathname: K1(o.pathname, r) || o.pathname }), historyAction: d });
  }, [r, t]);
  return Z.useEffect(() => {
    let i = String(++oB);
    return e(i), () => a.deleteBlocker(i);
  }, [a]), Z.useEffect(() => {
    c !== "" && a.getBlocker(c, h);
  }, [a, c, h]), c && l.blockers.has(c) ? l.blockers.get(c) : G5;
}
function dB() {
  let { router: t } = qh(ga.UseNavigateStable), a = y8(T2.UseNavigateStable), r = Z.useRef(false);
  return js(() => {
    r.current = true;
  }), Z.useCallback(function(c, e) {
    e === void 0 && (e = {}), r.current && (typeof c == "number" ? t.navigate(c) : t.navigate(c, M4({ fromRouteId: a }, e)));
  }, [t, a]);
}
function vB(t, a, r) {
  !a && !Ts[t] && (Ts[t] = true);
}
function uB(t) {
  let { fallbackElement: a, router: r, future: l } = t, [c, e] = Z.useState(r.state), { v7_startTransition: h } = l || {}, i = Z.useCallback((v) => {
    h && ha ? ha(() => e(v)) : e(v);
  }, [e, h]);
  Z.useLayoutEffect(() => r.subscribe(i), [r, i]), Z.useEffect(() => {
  }, []);
  let n = Z.useMemo(() => ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: (v) => r.navigate(v), push: (v, g, u) => r.navigate(v, { state: g, preventScrollReset: u?.preventScrollReset }), replace: (v, g, u) => r.navigate(v, { replace: true, state: g, preventScrollReset: u?.preventScrollReset }) }), [r]), o = r.basename || "/", d = Z.useMemo(() => ({ router: r, navigator: n, static: false, basename: o }), [r, n, o]);
  return Z.createElement(Z.Fragment, null, Z.createElement(w0.Provider, { value: d }, Z.createElement(D0.Provider, { value: c }, Z.createElement(r5, { basename: o, location: c.location, navigationType: c.historyAction, navigator: n, future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath } }, c.initialized || r.future.v7_partialHydration ? Z.createElement(sB, { routes: r.routes, future: r.future, state: c }) : a))), null);
}
function sB(t) {
  let { routes: a, future: r, state: l } = t;
  return S8(a, void 0, l, r);
}
function Kh(t) {
  let { basename: a, children: r, initialEntries: l, initialIndex: c, future: e } = t, h = Z.useRef();
  h.current == null && (h.current = A7({ initialEntries: l, initialIndex: c, v5Compat: true }));
  let i = h.current, [n, o] = Z.useState({ action: i.action, location: i.location }), { v7_startTransition: d } = e || {}, v = Z.useCallback((g) => {
    d && ha ? ha(() => o(g)) : o(g);
  }, [o, d]);
  return Z.useLayoutEffect(() => i.listen(v), [i, v]), Z.createElement(r5, { basename: a, children: r, location: n.location, navigationType: n.action, navigator: i, future: e });
}
function $h(t) {
  let { to: a, replace: r, state: l, relative: c } = t;
  t5() || T(false);
  let { future: e, static: h } = Z.useContext(M2), { matches: i } = Z.useContext(f2), { pathname: n } = U1(), o = H4(), d = X3(a, $3(i, e.v7_relativeSplatPath), n, c === "path"), v = JSON.stringify(d);
  return Z.useEffect(() => o(JSON.parse(v), { replace: r, state: l, relative: c }), [o, v, c, r, l]), null;
}
function P6(t) {
  return Z8(t.context);
}
function R8(t) {
  T(false);
}
function r5(t) {
  let { basename: a = "/", children: r = null, location: l, navigationType: c = n1.Pop, navigator: e, static: h = false, future: i } = t;
  t5() && T(false);
  let n = a.replace(/^\/*/, "/"), o = Z.useMemo(() => ({ basename: n, navigator: e, static: h, future: M4({ v7_relativeSplatPath: false }, i) }), [n, i, e, h]);
  typeof l == "string" && (l = I1(l));
  let { pathname: d = "/", search: v = "", hash: g = "", state: u = null, key: z = "default" } = l, f = Z.useMemo(() => {
    let m = K1(d, n);
    return m == null ? null : { location: { pathname: m, search: v, hash: g, state: u, key: z }, navigationType: c };
  }, [n, d, v, g, u, z, c]);
  return f == null ? null : Z.createElement(M2.Provider, { value: o }, Z.createElement(f4.Provider, { children: r, value: f }));
}
function Ma(t) {
  let { children: a, location: r } = t;
  return va(u3(a), r);
}
function O8(t) {
  let { children: a, errorElement: r, resolve: l } = t;
  return Z.createElement(Gh, { resolve: l, errorElement: r }, Z.createElement(zB, null, a));
}
function zB(t) {
  let { children: a } = t, r = k8(), l = typeof a == "function" ? a(r) : a;
  return Z.createElement(Z.Fragment, null, l);
}
function u3(t, a) {
  a === void 0 && (a = []);
  let r = [];
  return Z.Children.forEach(t, (l, c) => {
    if (!Z.isValidElement(l))
      return;
    let e = [...a, c];
    if (l.type === Z.Fragment) {
      r.push.apply(r, u3(l.props.children, e));
      return;
    }
    l.type !== R8 && T(false), !l.props.index || !l.props.children || T(false);
    let h = { id: l.props.id || e.join("-"), caseSensitive: l.props.caseSensitive, element: l.props.element, Component: l.props.Component, index: l.props.index, path: l.props.path, loader: l.props.loader, action: l.props.action, errorElement: l.props.errorElement, ErrorBoundary: l.props.ErrorBoundary, hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null, shouldRevalidate: l.props.shouldRevalidate, handle: l.props.handle, lazy: l.props.lazy };
    l.props.children && (h.children = u3(l.props.children, e)), r.push(h);
  }), r;
}
function Xh(t) {
  return _s(t);
}
function P8(t) {
  let a = { hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null };
  return t.Component && Object.assign(a, { element: Z.createElement(t.Component), Component: void 0 }), t.HydrateFallback && Object.assign(a, { hydrateFallbackElement: Z.createElement(t.HydrateFallback), HydrateFallback: void 0 }), t.ErrorBoundary && Object.assign(a, { errorElement: Z.createElement(t.ErrorBoundary), ErrorBoundary: void 0 }), a;
}
function Qh(t, a) {
  return Q3({ basename: a?.basename, future: M4({}, a?.future, { v7_prependBasename: true }), history: A7({ initialEntries: a?.initialEntries, initialIndex: a?.initialIndex }), hydrationData: a?.hydrationData, routes: t, mapRouteProperties: P8 }).initialize();
}
var Z;
var w0;
var D0;
var ea;
var M2;
var f4;
var f2;
var Ws;
var Ns;
var hB;
var Uh;
var ga;
var T2;
var oB;
var Ts;
var gB;
var ha;
var B0;
var pB;
var Gh;
var fa = o1(() => {
  Z = I(_());
  M5();
  M5();
  w0 = Z.createContext(null), D0 = Z.createContext(null), ea = Z.createContext(null), M2 = Z.createContext(null), f4 = Z.createContext(null), f2 = Z.createContext({ outlet: null, matches: [], isDataRoute: false }), Ws = Z.createContext(null);
  Ns = Z.createContext(null);
  hB = Z.createElement(eB, null), Uh = class extends Z.Component {
    constructor(a) {
      super(a), this.state = { location: a.location, revalidation: a.revalidation, error: a.error };
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, r) {
      return r.location !== a.location || r.revalidation !== "idle" && a.revalidation === "idle" ? { error: a.error, location: a.location, revalidation: a.revalidation } : { error: a.error !== void 0 ? a.error : r.error, location: r.location, revalidation: a.revalidation || r.revalidation };
    }
    componentDidCatch(a, r) {
      console.error("React Router caught the following error during render", a, r);
    }
    render() {
      return this.state.error !== void 0 ? Z.createElement(f2.Provider, { value: this.props.routeContext }, Z.createElement(Ws.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
    }
  };
  ga = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
  }(ga || {}), T2 = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
  }(T2 || {});
  oB = 0;
  Ts = {};
  gB = "startTransition", ha = Z[gB];
  B0 = function(t) {
    return t[t.pending = 0] = "pending", t[t.success = 1] = "success", t[t.error = 2] = "error", t;
  }(B0 || {}), pB = new Promise(() => {
  }), Gh = class extends Z.Component {
    constructor(a) {
      super(a), this.state = { error: null };
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    componentDidCatch(a, r) {
      console.error("<Await> caught the following error during render", a, r);
    }
    render() {
      let { children: a, errorElement: r, resolve: l } = this.props, c = null, e = B0.pending;
      if (!(l instanceof Promise))
        e = B0.success, c = Promise.resolve(), Object.defineProperty(c, "_tracked", { get: () => true }), Object.defineProperty(c, "_data", { get: () => l });
      else if (this.state.error) {
        e = B0.error;
        let h = this.state.error;
        c = Promise.reject().catch(() => {
        }), Object.defineProperty(c, "_tracked", { get: () => true }), Object.defineProperty(c, "_error", { get: () => h });
      } else
        l._tracked ? (c = l, e = c._error !== void 0 ? B0.error : c._data !== void 0 ? B0.success : B0.pending) : (e = B0.pending, Object.defineProperty(l, "_tracked", { get: () => true }), c = l.then((h) => Object.defineProperty(l, "_data", { get: () => h }), (h) => Object.defineProperty(l, "_error", { get: () => h })));
      if (e === B0.error && c._error instanceof S0)
        throw pB;
      if (e === B0.error && !r)
        throw c._error;
      if (e === B0.error)
        return Z.createElement(ea.Provider, { value: c, children: r });
      if (e === B0.success)
        return Z.createElement(ea.Provider, { value: c, children: a });
      throw c;
    }
  };
});
var lp = {};
u5(lp, { AbortedDeferredError: () => S0, Await: () => O8, BrowserRouter: () => TB, Form: () => ei, HashRouter: () => WB, Link: () => La, MemoryRouter: () => Kh, NavLink: () => ci, Navigate: () => $h, NavigationType: () => n1, Outlet: () => P6, Route: () => R8, Router: () => r5, RouterProvider: () => bB, Routes: () => Ma, ScrollRestoration: () => UB, UNSAFE_DataRouterContext: () => w0, UNSAFE_DataRouterStateContext: () => D0, UNSAFE_FetchersContext: () => li, UNSAFE_LocationContext: () => f4, UNSAFE_NavigationContext: () => M2, UNSAFE_RouteContext: () => f2, UNSAFE_ViewTransitionContext: () => ri, UNSAFE_useRouteId: () => F8, UNSAFE_useScrollRestoration: () => Aa, createBrowserRouter: () => FB, createHashRouter: () => kB, createMemoryRouter: () => Qh, createPath: () => q1, createRoutesFromChildren: () => u3, createRoutesFromElements: () => u3, createSearchParams: () => Va, defer: () => $4, generatePath: () => K3, isRouteErrorResponse: () => N1, json: () => q0, matchPath: () => M0, matchRoutes: () => j1, parsePath: () => I1, redirect: () => z5, redirectDocument: () => X4, renderMatches: () => Xh, resolvePath: () => K4, unstable_HistoryRouter: () => jB, unstable_usePrompt: () => rp, unstable_useViewTransitionState: () => ni, useActionData: () => za, useAsyncError: () => R6, useAsyncValue: () => k8, useBeforeUnload: () => ap, useBlocker: () => O6, useFetcher: () => Js, useFetchers: () => tp, useFormAction: () => ii, useHref: () => S5, useInRouterContext: () => t5, useLinkClickHandler: () => Xs, useLoaderData: () => sa, useLocation: () => U1, useMatch: () => na, useMatches: () => V4, useNavigate: () => H4, useNavigation: () => x4, useNavigationType: () => ia, useOutlet: () => Z8, useOutletContext: () => oa, useParams: () => da, useResolvedPath: () => a5, useRevalidator: () => ua, useRouteError: () => s3, useRouteLoaderData: () => pa, useRoutes: () => va, useSearchParams: () => Qs, useSubmit: () => wa });
function W2() {
  return W2 = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, W2.apply(this, arguments);
}
function ai(t, a) {
  if (t == null)
    return {};
  var r = {}, l = Object.keys(t), c, e;
  for (e = 0; e < l.length; e++)
    c = l[e], !(a.indexOf(c) >= 0) && (r[c] = t[c]);
  return r;
}
function Ca(t) {
  return t != null && typeof t.tagName == "string";
}
function fB(t) {
  return Ca(t) && t.tagName.toLowerCase() === "button";
}
function HB(t) {
  return Ca(t) && t.tagName.toLowerCase() === "form";
}
function mB(t) {
  return Ca(t) && t.tagName.toLowerCase() === "input";
}
function xB(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function VB(t, a) {
  return t.button === 0 && (!a || a === "_self") && !xB(t);
}
function Va(t) {
  return t === void 0 && (t = ""), new URLSearchParams(typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams ? t : Object.keys(t).reduce((a, r) => {
    let l = t[r];
    return a.concat(Array.isArray(l) ? l.map((c) => [r, c]) : [[r, l]]);
  }, []));
}
function CB(t, a) {
  let r = Va(t);
  return a && a.forEach((l, c) => {
    r.has(c) || a.getAll(c).forEach((e) => {
      r.append(c, e);
    });
  }), r;
}
function LB() {
  if (Ha === null)
    try {
      new FormData(document.createElement("form"), 0), Ha = false;
    } catch {
      Ha = true;
    }
  return Ha;
}
function Jh(t) {
  return t != null && !BB.has(t) ? null : t;
}
function wB(t, a) {
  let r, l, c, e, h;
  if (HB(t)) {
    let i = t.getAttribute("action");
    l = i ? K1(i, a) : null, r = t.getAttribute("method") || xa, c = Jh(t.getAttribute("enctype")) || Yh, e = new FormData(t);
  } else if (fB(t) || mB(t) && (t.type === "submit" || t.type === "image")) {
    let i = t.form;
    if (i == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let n = t.getAttribute("formaction") || i.getAttribute("action");
    if (l = n ? K1(n, a) : null, r = t.getAttribute("formmethod") || i.getAttribute("method") || xa, c = Jh(t.getAttribute("formenctype")) || Jh(i.getAttribute("enctype")) || Yh, e = new FormData(i, t), !LB()) {
      let { name: o, type: d, value: v } = t;
      if (d === "image") {
        let g = o ? o + "." : "";
        e.append(g + "x", "0"), e.append(g + "y", "0");
      } else
        o && e.append(o, v);
    }
  } else {
    if (Ca(t))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = xa, l = null, c = Yh, h = t;
  }
  return e && c === "text/plain" && (h = e, e = void 0), { action: l, method: r.toLowerCase(), encType: c, formData: e, body: h };
}
function FB(t, a) {
  return Q3({ basename: a?.basename, future: W2({}, a?.future, { v7_prependBasename: true }), history: Z7({ window: a?.window }), hydrationData: a?.hydrationData || $s(), routes: t, mapRouteProperties: P8, window: a?.window }).initialize();
}
function kB(t, a) {
  return Q3({ basename: a?.basename, future: W2({}, a?.future, { v7_prependBasename: true }), history: S7({ window: a?.window }), hydrationData: a?.hydrationData || $s(), routes: t, mapRouteProperties: P8, window: a?.window }).initialize();
}
function $s() {
  var t;
  let a = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return a && a.errors && (a = W2({}, a, { errors: RB(a.errors) })), a;
}
function RB(t) {
  if (!t)
    return null;
  let a = Object.entries(t), r = {};
  for (let [l, c] of a)
    if (c && c.__type === "RouteErrorResponse")
      r[l] = new p5(c.status, c.statusText, c.data, c.internal === true);
    else if (c && c.__type === "Error") {
      if (c.__subType) {
        let e = window[c.__subType];
        if (typeof e == "function")
          try {
            let h = new e(c.message);
            h.stack = "", r[l] = h;
          } catch {
          }
      }
      if (r[l] == null) {
        let e = new Error(c.message);
        e.stack = "", r[l] = e;
      }
    } else
      r[l] = c;
  return r;
}
function IB(t) {
  C4 ? C4(t) : t();
}
function E8(t) {
  Gs ? Gs(t) : t();
}
function bB(t) {
  let { fallbackElement: a, router: r, future: l } = t, [c, e] = y.useState(r.state), [h, i] = y.useState(), [n, o] = y.useState({ isTransitioning: false }), [d, v] = y.useState(), [g, u] = y.useState(), [z, f] = y.useState(), m = y.useRef(/* @__PURE__ */ new Map()), { v7_startTransition: p } = l || {}, s = y.useCallback((L) => {
    p ? IB(L) : L();
  }, [p]), M = y.useCallback((L, w) => {
    let { deletedFetchers: S, unstable_flushSync: P, unstable_viewTransitionOpts: q } = w;
    S.forEach((l1) => m.current.delete(l1)), L.fetchers.forEach((l1, v1) => {
      l1.data !== void 0 && m.current.set(v1, l1.data);
    });
    let d1 = r.window == null || typeof r.window.document.startViewTransition != "function";
    if (!q || d1) {
      P ? E8(() => e(L)) : s(() => e(L));
      return;
    }
    if (P) {
      E8(() => {
        g && (d && d.resolve(), g.skipTransition()), o({ isTransitioning: true, flushSync: true, currentLocation: q.currentLocation, nextLocation: q.nextLocation });
      });
      let l1 = r.window.document.startViewTransition(() => {
        E8(() => e(L));
      });
      l1.finished.finally(() => {
        E8(() => {
          v(void 0), u(void 0), i(void 0), o({ isTransitioning: false });
        });
      }), E8(() => u(l1));
      return;
    }
    g ? (d && d.resolve(), g.skipTransition(), f({ state: L, currentLocation: q.currentLocation, nextLocation: q.nextLocation })) : (i(L), o({ isTransitioning: true, flushSync: false, currentLocation: q.currentLocation, nextLocation: q.nextLocation }));
  }, [r.window, g, d, m, s]);
  y.useLayoutEffect(() => r.subscribe(M), [r, M]), y.useEffect(() => {
    n.isTransitioning && !n.flushSync && v(new ti());
  }, [n]), y.useEffect(() => {
    if (d && h && r.window) {
      let L = h, w = d.promise, S = r.window.document.startViewTransition(async () => {
        s(() => e(L)), await w;
      });
      S.finished.finally(() => {
        v(void 0), u(void 0), i(void 0), o({ isTransitioning: false });
      }), u(S);
    }
  }, [s, h, d, r.window]), y.useEffect(() => {
    d && h && c.location.key === h.location.key && d.resolve();
  }, [d, g, c.location, h]), y.useEffect(() => {
    !n.isTransitioning && z && (i(z.state), o({ isTransitioning: true, flushSync: false, currentLocation: z.currentLocation, nextLocation: z.nextLocation }), f(void 0));
  }, [n.isTransitioning, z]), y.useEffect(() => {
  }, []);
  let x = y.useMemo(() => ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: (L) => r.navigate(L), push: (L, w, S) => r.navigate(L, { state: w, preventScrollReset: S?.preventScrollReset }), replace: (L, w, S) => r.navigate(L, { replace: true, state: w, preventScrollReset: S?.preventScrollReset }) }), [r]), C = r.basename || "/", H = y.useMemo(() => ({ router: r, navigator: x, static: false, basename: C }), [r, x, C]);
  return y.createElement(y.Fragment, null, y.createElement(w0.Provider, { value: H }, y.createElement(D0.Provider, { value: c }, y.createElement(li.Provider, { value: m.current }, y.createElement(ri.Provider, { value: n }, y.createElement(r5, { basename: C, location: c.location, navigationType: c.historyAction, navigator: x, future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath } }, c.initialized || r.future.v7_partialHydration ? y.createElement(DB, { routes: r.routes, future: r.future, state: c }) : a))))), null);
}
function DB(t) {
  let { routes: a, future: r, state: l } = t;
  return S8(a, void 0, l, r);
}
function TB(t) {
  let { basename: a, children: r, future: l, window: c } = t, e = y.useRef();
  e.current == null && (e.current = Z7({ window: c, v5Compat: true }));
  let h = e.current, [i, n] = y.useState({ action: h.action, location: h.location }), { v7_startTransition: o } = l || {}, d = y.useCallback((v) => {
    o && C4 ? C4(() => n(v)) : n(v);
  }, [n, o]);
  return y.useLayoutEffect(() => h.listen(d), [h, d]), y.createElement(r5, { basename: a, children: r, location: i.location, navigationType: i.action, navigator: h, future: l });
}
function WB(t) {
  let { basename: a, children: r, future: l, window: c } = t, e = y.useRef();
  e.current == null && (e.current = S7({ window: c, v5Compat: true }));
  let h = e.current, [i, n] = y.useState({ action: h.action, location: h.location }), { v7_startTransition: o } = l || {}, d = y.useCallback((v) => {
    o && C4 ? C4(() => n(v)) : n(v);
  }, [n, o]);
  return y.useLayoutEffect(() => h.listen(d), [h, d]), y.createElement(r5, { basename: a, children: r, location: i.location, navigationType: i.action, navigator: h, future: l });
}
function jB(t) {
  let { basename: a, children: r, future: l, history: c } = t, [e, h] = y.useState({ action: c.action, location: c.location }), { v7_startTransition: i } = l || {}, n = y.useCallback((o) => {
    i && C4 ? C4(() => h(o)) : h(o);
  }, [h, i]);
  return y.useLayoutEffect(() => c.listen(n), [c, n]), y.createElement(r5, { basename: a, children: r, location: e.location, navigationType: e.action, navigator: c, future: l });
}
function UB(t) {
  let { getKey: a, storageKey: r } = t;
  return Aa({ getKey: a, storageKey: r }), null;
}
function Ba(t) {
  let a = y.useContext(w0);
  return a || T(false), a;
}
function hi(t) {
  let a = y.useContext(D0);
  return a || T(false), a;
}
function Xs(t, a) {
  let { target: r, replace: l, state: c, preventScrollReset: e, relative: h, unstable_viewTransition: i } = a === void 0 ? {} : a, n = H4(), o = U1(), d = a5(t, { relative: h });
  return y.useCallback((v) => {
    if (VB(v, r)) {
      v.preventDefault();
      let g = l !== void 0 ? l : q1(o) === q1(d);
      n(t, { replace: g, state: c, preventScrollReset: e, relative: h, unstable_viewTransition: i });
    }
  }, [o, n, d, l, c, r, t, e, h, i]);
}
function Qs(t) {
  let a = y.useRef(Va(t)), r = y.useRef(false), l = U1(), c = y.useMemo(() => CB(l.search, r.current ? null : a.current), [l.search]), e = H4(), h = y.useCallback((i, n) => {
    let o = Va(typeof i == "function" ? i(c) : i);
    r.current = true, e("?" + o, n);
  }, [e, c]);
  return [c, h];
}
function GB() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function wa() {
  let { router: t } = Ba(E6.UseSubmit), { basename: a } = y.useContext(M2), r = F8();
  return y.useCallback(function(l, c) {
    c === void 0 && (c = {}), GB();
    let { action: e, method: h, encType: i, formData: n, body: o } = wB(l, a);
    if (c.navigate === false) {
      let d = c.fetcherKey || Ys();
      t.fetch(d, r, c.action || e, { preventScrollReset: c.preventScrollReset, formData: n, body: o, formMethod: c.method || h, formEncType: c.encType || i, unstable_flushSync: c.unstable_flushSync });
    } else
      t.navigate(c.action || e, { preventScrollReset: c.preventScrollReset, formData: n, body: o, formMethod: c.method || h, formEncType: c.encType || i, replace: c.replace, state: c.state, fromRouteId: r, unstable_flushSync: c.unstable_flushSync, unstable_viewTransition: c.unstable_viewTransition });
  }, [t, a, r]);
}
function ii(t, a) {
  let { relative: r } = a === void 0 ? {} : a, { basename: l } = y.useContext(M2), c = y.useContext(f2);
  c || T(false);
  let [e] = c.matches.slice(-1), h = W2({}, a5(t || ".", { relative: r })), i = U1();
  if (t == null) {
    h.search = i.search;
    let n = new URLSearchParams(h.search);
    n.has("index") && n.get("index") === "" && (n.delete("index"), h.search = n.toString() ? "?" + n.toString() : "");
  }
  return (!t || t === ".") && e.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (h.pathname = h.pathname === "/" ? l : X2([l, h.pathname])), q1(h);
}
function Js(t) {
  var a;
  let { key: r } = t === void 0 ? {} : t, { router: l } = Ba(E6.UseFetcher), c = hi(I8.UseFetcher), e = y.useContext(li), h = y.useContext(f2), i = (a = h.matches[h.matches.length - 1]) == null ? void 0 : a.route.id;
  e || T(false), h || T(false), i == null && T(false);
  let n = qs ? qs() : "", [o, d] = y.useState(r || n);
  r && r !== o ? d(r) : o || d(Ys()), y.useEffect(() => (l.getFetcher(o), () => {
    l.deleteFetcher(o);
  }), [l, o]);
  let v = y.useCallback((s, M) => {
    i || T(false), l.fetch(o, i, s, M);
  }, [o, i, l]), g = wa(), u = y.useCallback((s, M) => {
    g(s, W2({}, M, { navigate: false, fetcherKey: o }));
  }, [o, g]), z = y.useMemo(() => y.forwardRef((M, x) => y.createElement(ei, W2({}, M, { navigate: false, fetcherKey: o, ref: x }))), [o]), f = c.fetchers.get(o) || F7, m = e.get(o);
  return y.useMemo(() => W2({ Form: z, submit: u, load: v }, f, { data: m }), [z, u, v, f, m]);
}
function tp() {
  let t = hi(I8.UseFetchers);
  return Array.from(t.fetchers.entries()).map((a) => {
    let [r, l] = a;
    return W2({}, l, { key: r });
  });
}
function Aa(t) {
  let { getKey: a, storageKey: r } = t === void 0 ? {} : t, { router: l } = Ba(E6.UseScrollRestoration), { restoreScrollPosition: c, preventScrollReset: e } = hi(I8.UseScrollRestoration), { basename: h } = y.useContext(M2), i = U1(), n = V4(), o = x4();
  y.useEffect(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), KB(y.useCallback(() => {
    if (o.state === "idle") {
      let d = (a ? a(i, n) : null) || i.key;
      ma[d] = window.scrollY;
    }
    try {
      sessionStorage.setItem(r || Ks, JSON.stringify(ma));
    } catch {
    }
    window.history.scrollRestoration = "auto";
  }, [r, a, o.state, i, n])), typeof document < "u" && (y.useLayoutEffect(() => {
    try {
      let d = sessionStorage.getItem(r || Ks);
      d && (ma = JSON.parse(d));
    } catch {
    }
  }, [r]), y.useLayoutEffect(() => {
    let d = a && h !== "/" ? (g, u) => a(W2({}, g, { pathname: K1(g.pathname, h) || g.pathname }), u) : a, v = l?.enableScrollRestoration(ma, () => window.scrollY, d);
    return () => v && v();
  }, [l, h, a]), y.useLayoutEffect(() => {
    if (c !== false) {
      if (typeof c == "number") {
        window.scrollTo(0, c);
        return;
      }
      if (i.hash) {
        let d = document.getElementById(decodeURIComponent(i.hash.slice(1)));
        if (d) {
          d.scrollIntoView();
          return;
        }
      }
      e !== true && window.scrollTo(0, 0);
    }
  }, [i, c, e]));
}
function ap(t, a) {
  let { capture: r } = a || {};
  y.useEffect(() => {
    let l = r != null ? { capture: r } : void 0;
    return window.addEventListener("beforeunload", t, l), () => {
      window.removeEventListener("beforeunload", t, l);
    };
  }, [t, r]);
}
function KB(t, a) {
  let { capture: r } = a || {};
  y.useEffect(() => {
    let l = r != null ? { capture: r } : void 0;
    return window.addEventListener("pagehide", t, l), () => {
      window.removeEventListener("pagehide", t, l);
    };
  }, [t, r]);
}
function rp(t) {
  let { when: a, message: r } = t, l = O6(a);
  y.useEffect(() => {
    l.state === "blocked" && (window.confirm(r) ? setTimeout(l.proceed, 0) : l.reset());
  }, [l, r]), y.useEffect(() => {
    l.state === "blocked" && !a && l.reset();
  }, [l, a]);
}
function ni(t, a) {
  a === void 0 && (a = {});
  let r = y.useContext(ri);
  r == null && T(false);
  let { basename: l } = Ba(E6.useViewTransitionState), c = a5(t, { relative: a.relative });
  if (!r.isTransitioning)
    return false;
  let e = K1(r.currentLocation.pathname, l) || r.currentLocation.pathname, h = K1(r.nextLocation.pathname, l) || r.nextLocation.pathname;
  return M0(c.pathname, h) != null || M0(c.pathname, e) != null;
}
var y;
var MB;
var xa;
var Yh;
var Ha;
var BB;
var AB;
var ZB;
var SB;
var yB;
var ri;
var li;
var OB;
var C4;
var PB;
var Gs;
var EB;
var qs;
var ti;
var NB;
var _B;
var La;
var ci;
var ei;
var E6;
var I8;
var qB;
var Ys;
var Ks;
var ma;
var L4 = o1(() => {
  y = I(_()), MB = I(Ds());
  fa();
  fa();
  M5();
  xa = "get", Yh = "application/x-www-form-urlencoded";
  Ha = null;
  BB = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
  AB = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], ZB = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], SB = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], yB = "6";
  try {
    window.__reactRouterVersion = yB;
  } catch {
  }
  ri = y.createContext({ isTransitioning: false }), li = y.createContext(/* @__PURE__ */ new Map()), OB = "startTransition", C4 = y[OB], PB = "flushSync", Gs = MB[PB], EB = "useId", qs = y[EB];
  ti = class {
    constructor() {
      this.status = "pending", this.promise = new Promise((a, r) => {
        this.resolve = (l) => {
          this.status === "pending" && (this.status = "resolved", a(l));
        }, this.reject = (l) => {
          this.status === "pending" && (this.status = "rejected", r(l));
        };
      });
    }
  };
  NB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _B = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, La = y.forwardRef(function(a, r) {
    let { onClick: l, relative: c, reloadDocument: e, replace: h, state: i, target: n, to: o, preventScrollReset: d, unstable_viewTransition: v } = a, g = ai(a, AB), { basename: u } = y.useContext(M2), z, f = false;
    if (typeof o == "string" && _B.test(o) && (z = o, NB))
      try {
        let M = new URL(window.location.href), x = o.startsWith("//") ? new URL(M.protocol + o) : new URL(o), C = K1(x.pathname, u);
        x.origin === M.origin && C != null ? o = C + x.search + x.hash : f = true;
      } catch {
      }
    let m = S5(o, { relative: c }), p = Xs(o, { replace: h, state: i, target: n, preventScrollReset: d, relative: c, unstable_viewTransition: v });
    function s(M) {
      l && l(M), M.defaultPrevented || p(M);
    }
    return y.createElement("a", W2({}, g, { href: z || m, onClick: f || e ? l : s, ref: r, target: n }));
  }), ci = y.forwardRef(function(a, r) {
    let { "aria-current": l = "page", caseSensitive: c = false, className: e = "", end: h = false, style: i, to: n, unstable_viewTransition: o, children: d } = a, v = ai(a, ZB), g = a5(n, { relative: v.relative }), u = U1(), z = y.useContext(D0), { navigator: f, basename: m } = y.useContext(M2), p = z != null && ni(g) && o === true, s = f.encodeLocation ? f.encodeLocation(g).pathname : g.pathname, M = u.pathname, x = z && z.navigation && z.navigation.location ? z.navigation.location.pathname : null;
    c || (M = M.toLowerCase(), x = x ? x.toLowerCase() : null, s = s.toLowerCase()), x && m && (x = K1(x, m) || x);
    let C = s !== "/" && s.endsWith("/") ? s.length - 1 : s.length, H = M === s || !h && M.startsWith(s) && M.charAt(C) === "/", L = x != null && (x === s || !h && x.startsWith(s) && x.charAt(s.length) === "/"), w = { isActive: H, isPending: L, isTransitioning: p }, S = H ? l : void 0, P;
    typeof e == "function" ? P = e(w) : P = [e, H ? "active" : null, L ? "pending" : null, p ? "transitioning" : null].filter(Boolean).join(" ");
    let q = typeof i == "function" ? i(w) : i;
    return y.createElement(La, W2({}, v, { "aria-current": S, className: P, ref: r, style: q, to: n, unstable_viewTransition: o }), typeof d == "function" ? d(w) : d);
  }), ei = y.forwardRef((t, a) => {
    let { fetcherKey: r, navigate: l, reloadDocument: c, replace: e, state: h, method: i = xa, action: n, onSubmit: o, relative: d, preventScrollReset: v, unstable_viewTransition: g } = t, u = ai(t, SB), z = wa(), f = ii(n, { relative: d }), m = i.toLowerCase() === "get" ? "get" : "post";
    return y.createElement("form", W2({ ref: a, method: m, action: f, onSubmit: c ? o : (s) => {
      if (o && o(s), s.defaultPrevented)
        return;
      s.preventDefault();
      let M = s.nativeEvent.submitter, x = M?.getAttribute("formmethod") || i;
      z(M || s.currentTarget, { fetcherKey: r, method: x, navigate: l, replace: e, state: h, relative: d, preventScrollReset: v, unstable_viewTransition: g });
    } }, u));
  });
  (function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
  })(E6 || (E6 = {}));
  (function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
  })(I8 || (I8 = {}));
  qB = 0, Ys = () => "__" + String(++qB) + "__";
  Ks = "react-router-scroll-positions", ma = {};
});
var Bp = J1((I6) => {
  "use strict";
  Object.defineProperty(I6, "__esModule", { value: true });
  var nw = _(), y5 = (M5(), j3(od)), mi = (fa(), j3(Us)), F5 = (L4(), j3(lp));
  function ow(t) {
    if (t && t.__esModule)
      return t;
    var a = /* @__PURE__ */ Object.create(null);
    return t && Object.keys(t).forEach(function(r) {
      if (r !== "default") {
        var l = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(a, r, l.get ? l : { enumerable: true, get: function() {
          return t[r];
        } });
      }
    }), a.default = t, Object.freeze(a);
  }
  var l5 = ow(nw);
  function dw({ basename: t, children: a, location: r = "/", future: l }) {
    typeof r == "string" && (r = F5.parsePath(r));
    let c = y5.Action.Pop, e = { pathname: r.pathname || "/", search: r.search || "", hash: r.hash || "", state: r.state || null, key: r.key || "default" }, h = Vp();
    return l5.createElement(F5.Router, { basename: t, children: a, location: e, navigationType: c, navigator: h, future: l, static: true });
  }
  function vw({ context: t, router: a, hydrate: r = true, nonce: l }) {
    a && t || y5.UNSAFE_invariant(false);
    let c = { router: a, navigator: Vp(), static: true, staticContext: t, basename: t.basename || "/" }, e = /* @__PURE__ */ new Map(), h = "";
    if (r !== false) {
      let n = { loaderData: t.loaderData, actionData: t.actionData, errors: uw(t.errors) };
      h = `window.__staticRouterHydrationData = JSON.parse(${Hw(JSON.stringify(JSON.stringify(n)))});`;
    }
    let { state: i } = c.router;
    return l5.createElement(l5.Fragment, null, l5.createElement(F5.UNSAFE_DataRouterContext.Provider, { value: c }, l5.createElement(F5.UNSAFE_DataRouterStateContext.Provider, { value: i }, l5.createElement(F5.UNSAFE_FetchersContext.Provider, { value: e }, l5.createElement(F5.UNSAFE_ViewTransitionContext.Provider, { value: { isTransitioning: false } }, l5.createElement(F5.Router, { basename: c.basename, location: i.location, navigationType: i.historyAction, navigator: c.navigator, static: c.static, future: { v7_relativeSplatPath: a.future.v7_relativeSplatPath } }, l5.createElement(gw, { routes: a.routes, future: a.future, state: i })))))), h ? l5.createElement("script", { suppressHydrationWarning: true, nonce: l, dangerouslySetInnerHTML: { __html: h } }) : null);
  }
  function gw({ routes: t, future: a, state: r }) {
    return mi.UNSAFE_useRoutesImpl(t, void 0, r, a);
  }
  function uw(t) {
    if (!t)
      return null;
    let a = Object.entries(t), r = {};
    for (let [l, c] of a)
      y5.isRouteErrorResponse(c) ? r[l] = { ...c, __type: "RouteErrorResponse" } : c instanceof Error ? r[l] = { message: c.message, __type: "Error", ...c.name !== "Error" ? { __subType: c.name } : {} } : r[l] = c;
    return r;
  }
  function Vp() {
    return { createHref: Cp, encodeLocation: Lp, push(t) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)})\` somewhere in your app.`);
    }, replace(t) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)}, { replace: true })\` somewhere in your app.`);
    }, go(t) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${t})\` somewhere in your app.`);
    }, back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    }, forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    } };
  }
  function sw(t, a) {
    return y5.createStaticHandler(t, { ...a, mapRouteProperties: mi.UNSAFE_mapRouteProperties });
  }
  function pw(t, a, r = {}) {
    let l = {}, c = y5.UNSAFE_convertRoutesToDataRoutes(t, mi.UNSAFE_mapRouteProperties, void 0, l), e = a.matches.map((i) => {
      let n = l[i.route.id] || i.route;
      return { ...i, route: n };
    }), h = (i) => `You cannot use router.${i}() on the server because it is a stateless environment`;
    return { get basename() {
      return a.basename;
    }, get future() {
      return { v7_fetcherPersist: false, v7_normalizeFormMethod: false, v7_partialHydration: r.future?.v7_partialHydration === true, v7_prependBasename: false, v7_relativeSplatPath: r.future?.v7_relativeSplatPath === true };
    }, get state() {
      return { historyAction: y5.Action.Pop, location: a.location, matches: e, loaderData: a.loaderData, actionData: a.actionData, errors: a.errors, initialized: true, navigation: y5.IDLE_NAVIGATION, restoreScrollPosition: null, preventScrollReset: false, revalidation: "idle", fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() };
    }, get routes() {
      return c;
    }, get window() {
    }, initialize() {
      throw h("initialize");
    }, subscribe() {
      throw h("subscribe");
    }, enableScrollRestoration() {
      throw h("enableScrollRestoration");
    }, navigate() {
      throw h("navigate");
    }, fetch() {
      throw h("fetch");
    }, revalidate() {
      throw h("revalidate");
    }, createHref: Cp, encodeLocation: Lp, getFetcher() {
      return y5.IDLE_FETCHER;
    }, deleteFetcher() {
      throw h("deleteFetcher");
    }, dispose() {
      throw h("dispose");
    }, getBlocker() {
      return y5.IDLE_BLOCKER;
    }, deleteBlocker() {
      throw h("deleteBlocker");
    }, _internalFetchControllers: /* @__PURE__ */ new Map(), _internalActiveDeferreds: /* @__PURE__ */ new Map(), _internalSetRoutes() {
      throw h("_internalSetRoutes");
    } };
  }
  function Cp(t) {
    return typeof t == "string" ? t : F5.createPath(t);
  }
  function Lp(t) {
    let a = typeof t == "string" ? t : F5.createPath(t);
    a = a.replace(/ $/, "%20");
    let r = zw.test(a) ? new URL(a) : new URL(a, "http://localhost");
    return { pathname: r.pathname, search: r.search, hash: r.hash };
  }
  var zw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Mw = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, fw = /[&><\u2028\u2029]/g;
  function Hw(t) {
    return t.replace(fw, (a) => Mw[a]);
  }
  I6.StaticRouter = dw;
  I6.StaticRouterProvider = vw;
  I6.createStaticHandler = sw;
  I6.createStaticRouter = pw;
});
var Mz = J1((b6) => {
  "use strict";
  var qp = _();
  function G(t) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
      a += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var j2 = Object.prototype.hasOwnProperty, Vw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ap = {}, Zp = {};
  function Kp(t) {
    return j2.call(Zp, t) ? true : j2.call(Ap, t) ? false : Vw.test(t) ? Zp[t] = true : (Ap[t] = true, false);
  }
  function A2(t, a, r, l, c, e, h) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = r, this.propertyName = t, this.type = a, this.sanitizeURL = e, this.removeEmptyString = h;
  }
  var n2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    n2[t] = new A2(t, 0, false, t, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var a = t[0];
    n2[a] = new A2(a, 1, false, t[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    n2[t] = new A2(t, 2, false, t.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    n2[t] = new A2(t, 2, false, t, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    n2[t] = new A2(t, 3, false, t.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    n2[t] = new A2(t, 3, true, t, null, false, false);
  });
  ["capture", "download"].forEach(function(t) {
    n2[t] = new A2(t, 4, false, t, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(t) {
    n2[t] = new A2(t, 6, false, t, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(t) {
    n2[t] = new A2(t, 5, false, t.toLowerCase(), null, false, false);
  });
  var yi = /[\-:]([a-z])/g;
  function Fi(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var a = t.replace(yi, Fi);
    n2[a] = new A2(a, 1, false, t, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var a = t.replace(yi, Fi);
    n2[a] = new A2(a, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var a = t.replace(yi, Fi);
    n2[a] = new A2(a, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(t) {
    n2[t] = new A2(t, 1, false, t.toLowerCase(), null, false, false);
  });
  n2.xlinkHref = new A2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(t) {
    n2[t] = new A2(t, 1, false, t.toLowerCase(), null, true, true);
  });
  var ba = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Cw = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ba).forEach(function(t) {
    Cw.forEach(function(a) {
      a = a + t.charAt(0).toUpperCase() + t.substring(1), ba[a] = ba[t];
    });
  });
  var Lw = /["'&<>]/;
  function w2(t) {
    if (typeof t == "boolean" || typeof t == "number")
      return "" + t;
    t = "" + t;
    var a = Lw.exec(t);
    if (a) {
      var r = "", l, c = 0;
      for (l = a.index; l < t.length; l++) {
        switch (t.charCodeAt(l)) {
          case 34:
            a = "&quot;";
            break;
          case 38:
            a = "&amp;";
            break;
          case 39:
            a = "&#x27;";
            break;
          case 60:
            a = "&lt;";
            break;
          case 62:
            a = "&gt;";
            break;
          default:
            continue;
        }
        c !== l && (r += t.substring(c, l)), c = l + 1, r += a;
      }
      t = c !== l ? r + t.substring(c, l) : r;
    }
    return t;
  }
  var Bw = /([A-Z])/g, ww = /^ms-/, Bi = Array.isArray;
  function k5(t, a) {
    return { insertionMode: t, selectedValue: a };
  }
  function Aw(t, a, r) {
    switch (a) {
      case "select":
        return k5(1, r.value != null ? r.value : r.defaultValue);
      case "svg":
        return k5(2, null);
      case "math":
        return k5(3, null);
      case "foreignObject":
        return k5(1, null);
      case "table":
        return k5(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return k5(5, null);
      case "colgroup":
        return k5(7, null);
      case "tr":
        return k5(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? k5(1, null) : t;
  }
  var Sp = /* @__PURE__ */ new Map();
  function $p(t, a, r) {
    if (typeof r != "object")
      throw Error(G(62));
    a = true;
    for (var l in r)
      if (j2.call(r, l)) {
        var c = r[l];
        if (c != null && typeof c != "boolean" && c !== "") {
          if (l.indexOf("--") === 0) {
            var e = w2(l);
            c = w2(("" + c).trim());
          } else {
            e = l;
            var h = Sp.get(e);
            h !== void 0 || (h = w2(e.replace(Bw, "-$1").toLowerCase().replace(ww, "-ms-")), Sp.set(e, h)), e = h, c = typeof c == "number" ? c === 0 || j2.call(ba, l) ? "" + c : c + "px" : w2(("" + c).trim());
          }
          a ? (a = false, t.push(' style="', e, ":", c)) : t.push(";", e, ":", c);
        }
      }
    a || t.push('"');
  }
  function l0(t, a, r, l) {
    switch (r) {
      case "style":
        $p(t, a, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") {
      if (a = n2.hasOwnProperty(r) ? n2[r] : null, a !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!a.acceptsBooleans)
              return;
        }
        switch (r = a.attributeName, a.type) {
          case 3:
            l && t.push(" ", r, '=""');
            break;
          case 4:
            l === true ? t.push(" ", r, '=""') : l !== false && t.push(" ", r, '="', w2(l), '"');
            break;
          case 5:
            isNaN(l) || t.push(" ", r, '="', w2(l), '"');
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(" ", r, '="', w2(l), '"');
            break;
          default:
            a.sanitizeURL && (l = "" + l), t.push(" ", r, '="', w2(l), '"');
        }
      } else if (Kp(r)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (a = r.toLowerCase().slice(0, 5), a !== "data-" && a !== "aria-")
              return;
        }
        t.push(" ", r, '="', w2(l), '"');
      }
    }
  }
  function Da(t, a, r) {
    if (a != null) {
      if (r != null)
        throw Error(G(60));
      if (typeof a != "object" || !("__html" in a))
        throw Error(G(61));
      a = a.__html, a != null && t.push("" + a);
    }
  }
  function Zw(t) {
    var a = "";
    return qp.Children.forEach(t, function(r) {
      r != null && (a += r);
    }), a;
  }
  function Vi(t, a, r, l) {
    t.push(c5(r));
    var c = r = null, e;
    for (e in a)
      if (j2.call(a, e)) {
        var h = a[e];
        if (h != null)
          switch (e) {
            case "children":
              r = h;
              break;
            case "dangerouslySetInnerHTML":
              c = h;
              break;
            default:
              l0(t, l, e, h);
          }
      }
    return t.push(">"), Da(t, c, r), typeof r == "string" ? (t.push(w2(r)), null) : r;
  }
  var Sw = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, yp = /* @__PURE__ */ new Map();
  function c5(t) {
    var a = yp.get(t);
    if (a === void 0) {
      if (!Sw.test(t))
        throw Error(G(65, t));
      a = "<" + t, yp.set(t, a);
    }
    return a;
  }
  function yw(t, a, r, l, c) {
    switch (a) {
      case "select":
        t.push(c5("select"));
        var e = null, h = null;
        for (d in r)
          if (j2.call(r, d)) {
            var i = r[d];
            if (i != null)
              switch (d) {
                case "children":
                  e = i;
                  break;
                case "dangerouslySetInnerHTML":
                  h = i;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  l0(t, l, d, i);
              }
          }
        return t.push(">"), Da(t, h, e), e;
      case "option":
        h = c.selectedValue, t.push(c5("option"));
        var n = i = null, o = null, d = null;
        for (e in r)
          if (j2.call(r, e)) {
            var v = r[e];
            if (v != null)
              switch (e) {
                case "children":
                  i = v;
                  break;
                case "selected":
                  o = v;
                  break;
                case "dangerouslySetInnerHTML":
                  d = v;
                  break;
                case "value":
                  n = v;
                default:
                  l0(t, l, e, v);
              }
          }
        if (h != null)
          if (r = n !== null ? "" + n : Zw(i), Bi(h)) {
            for (l = 0; l < h.length; l++)
              if ("" + h[l] === r) {
                t.push(' selected=""');
                break;
              }
          } else
            "" + h === r && t.push(' selected=""');
        else
          o && t.push(' selected=""');
        return t.push(">"), Da(t, d, i), i;
      case "textarea":
        t.push(c5("textarea")), d = h = e = null;
        for (i in r)
          if (j2.call(r, i) && (n = r[i], n != null))
            switch (i) {
              case "children":
                d = n;
                break;
              case "value":
                e = n;
                break;
              case "defaultValue":
                h = n;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(G(91));
              default:
                l0(t, l, i, n);
            }
        if (e === null && h !== null && (e = h), t.push(">"), d != null) {
          if (e != null)
            throw Error(G(92));
          if (Bi(d) && 1 < d.length)
            throw Error(G(93));
          e = "" + d;
        }
        return typeof e == "string" && e[0] === `
` && t.push(`
`), e !== null && t.push(w2("" + e)), null;
      case "input":
        t.push(c5("input")), n = d = i = e = null;
        for (h in r)
          if (j2.call(r, h) && (o = r[h], o != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(G(399, "input"));
              case "defaultChecked":
                n = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "checked":
                d = o;
                break;
              case "value":
                e = o;
                break;
              default:
                l0(t, l, h, o);
            }
        return d !== null ? l0(t, l, "checked", d) : n !== null && l0(t, l, "checked", n), e !== null ? l0(t, l, "value", e) : i !== null && l0(t, l, "value", i), t.push("/>"), null;
      case "menuitem":
        t.push(c5("menuitem"));
        for (var g in r)
          if (j2.call(r, g) && (e = r[g], e != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(G(400));
              default:
                l0(t, l, g, e);
            }
        return t.push(">"), null;
      case "title":
        t.push(c5("title")), e = null;
        for (v in r)
          if (j2.call(r, v) && (h = r[v], h != null))
            switch (v) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(G(434));
              default:
                l0(t, l, v, h);
            }
        return t.push(">"), e;
      case "listing":
      case "pre":
        t.push(c5(a)), h = e = null;
        for (n in r)
          if (j2.call(r, n) && (i = r[n], i != null))
            switch (n) {
              case "children":
                e = i;
                break;
              case "dangerouslySetInnerHTML":
                h = i;
                break;
              default:
                l0(t, l, n, i);
            }
        if (t.push(">"), h != null) {
          if (e != null)
            throw Error(G(60));
          if (typeof h != "object" || !("__html" in h))
            throw Error(G(61));
          r = h.__html, r != null && (typeof r == "string" && 0 < r.length && r[0] === `
` ? t.push(`
`, r) : t.push("" + r));
        }
        return typeof e == "string" && e[0] === `
` && t.push(`
`), e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        t.push(c5(a));
        for (var u in r)
          if (j2.call(r, u) && (e = r[u], e != null))
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(G(399, a));
              default:
                l0(t, l, u, e);
            }
        return t.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Vi(t, r, a, l);
      case "html":
        return c.insertionMode === 0 && t.push("<!DOCTYPE html>"), Vi(t, r, a, l);
      default:
        if (a.indexOf("-") === -1 && typeof r.is != "string")
          return Vi(t, r, a, l);
        t.push(c5(a)), h = e = null;
        for (o in r)
          if (j2.call(r, o) && (i = r[o], i != null))
            switch (o) {
              case "children":
                e = i;
                break;
              case "dangerouslySetInnerHTML":
                h = i;
                break;
              case "style":
                $p(t, l, i);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                Kp(o) && typeof i != "function" && typeof i != "symbol" && t.push(" ", o, '="', w2(i), '"');
            }
        return t.push(">"), Da(t, h, e), e;
    }
  }
  function Fp(t, a, r) {
    if (t.push('<!--$?--><template id="'), r === null)
      throw Error(G(395));
    return t.push(r), t.push('"></template>');
  }
  function Fw(t, a, r, l) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return t.push('<div hidden id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 2:
        return t.push('<svg aria-hidden="true" style="display:none" id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 3:
        return t.push('<math aria-hidden="true" style="display:none" id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 4:
        return t.push('<table hidden id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 5:
        return t.push('<table hidden><tbody id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 6:
        return t.push('<table hidden><tr id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      case 7:
        return t.push('<table hidden><colgroup id="'), t.push(a.segmentPrefix), a = l.toString(16), t.push(a), t.push('">');
      default:
        throw Error(G(397));
    }
  }
  function kw(t, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return t.push("</div>");
      case 2:
        return t.push("</svg>");
      case 3:
        return t.push("</math>");
      case 4:
        return t.push("</table>");
      case 5:
        return t.push("</tbody></table>");
      case 6:
        return t.push("</tr></table>");
      case 7:
        return t.push("</colgroup></table>");
      default:
        throw Error(G(397));
    }
  }
  var Rw = /[<\u2028\u2029]/g;
  function Ci(t) {
    return JSON.stringify(t).replace(Rw, function(a) {
      switch (a) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Ow(t, a) {
    return a = a === void 0 ? "" : a, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: a + "P:", segmentPrefix: a + "S:", boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: t };
  }
  function kp(t, a, r, l) {
    return r.generateStaticMarkup ? (t.push(w2(a)), false) : (a === "" ? t = l : (l && t.push("<!-- -->"), t.push(w2(a)), t = true), t);
  }
  var _8 = Object.assign, Pw = Symbol.for("react.element"), Xp = Symbol.for("react.portal"), Qp = Symbol.for("react.fragment"), Yp = Symbol.for("react.strict_mode"), Jp = Symbol.for("react.profiler"), tz = Symbol.for("react.provider"), az = Symbol.for("react.context"), rz = Symbol.for("react.forward_ref"), lz = Symbol.for("react.suspense"), cz = Symbol.for("react.suspense_list"), ez = Symbol.for("react.memo"), ki = Symbol.for("react.lazy"), Ew = Symbol.for("react.scope"), Iw = Symbol.for("react.debug_trace_mode"), bw = Symbol.for("react.legacy_hidden"), Dw = Symbol.for("react.default_value"), Rp = Symbol.iterator;
  function wi(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case Qp:
        return "Fragment";
      case Xp:
        return "Portal";
      case Jp:
        return "Profiler";
      case Yp:
        return "StrictMode";
      case lz:
        return "Suspense";
      case cz:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case az:
          return (t.displayName || "Context") + ".Consumer";
        case tz:
          return (t._context.displayName || "Context") + ".Provider";
        case rz:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ez:
          return a = t.displayName || null, a !== null ? a : wi(t.type) || "Memo";
        case ki:
          a = t._payload, t = t._init;
          try {
            return wi(t(a));
          } catch {
          }
      }
    return null;
  }
  var hz = {};
  function Op(t, a) {
    if (t = t.contextTypes, !t)
      return hz;
    var r = {}, l;
    for (l in t)
      r[l] = a[l];
    return r;
  }
  var M3 = null;
  function Ka(t, a) {
    if (t !== a) {
      t.context._currentValue2 = t.parentValue, t = t.parent;
      var r = a.parent;
      if (t === null) {
        if (r !== null)
          throw Error(G(401));
      } else {
        if (r === null)
          throw Error(G(401));
        Ka(t, r);
      }
      a.context._currentValue2 = a.value;
    }
  }
  function iz(t) {
    t.context._currentValue2 = t.parentValue, t = t.parent, t !== null && iz(t);
  }
  function nz(t) {
    var a = t.parent;
    a !== null && nz(a), t.context._currentValue2 = t.value;
  }
  function oz(t, a) {
    if (t.context._currentValue2 = t.parentValue, t = t.parent, t === null)
      throw Error(G(402));
    t.depth === a.depth ? Ka(t, a) : oz(t, a);
  }
  function dz(t, a) {
    var r = a.parent;
    if (r === null)
      throw Error(G(402));
    t.depth === r.depth ? Ka(t, r) : dz(t, r), a.context._currentValue2 = a.value;
  }
  function Na(t) {
    var a = M3;
    a !== t && (a === null ? nz(t) : t === null ? iz(a) : a.depth === t.depth ? Ka(a, t) : a.depth > t.depth ? oz(a, t) : dz(a, t), M3 = t);
  }
  var Pp = { isMounted: function() {
    return false;
  }, enqueueSetState: function(t, a) {
    t = t._reactInternals, t.queue !== null && t.queue.push(a);
  }, enqueueReplaceState: function(t, a) {
    t = t._reactInternals, t.replace = true, t.queue = [a];
  }, enqueueForceUpdate: function() {
  } };
  function Ep(t, a, r, l) {
    var c = t.state !== void 0 ? t.state : null;
    t.updater = Pp, t.props = r, t.state = c;
    var e = { queue: [], replace: false };
    t._reactInternals = e;
    var h = a.contextType;
    if (t.context = typeof h == "object" && h !== null ? h._currentValue2 : l, h = a.getDerivedStateFromProps, typeof h == "function" && (h = h(r, c), c = h == null ? c : _8({}, c, h), t.state = c), typeof a.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function"))
      if (a = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && Pp.enqueueReplaceState(t, t.state, null), e.queue !== null && 0 < e.queue.length)
        if (a = e.queue, h = e.replace, e.queue = null, e.replace = false, h && a.length === 1)
          t.state = a[0];
        else {
          for (e = h ? a[0] : t.state, c = true, h = h ? 1 : 0; h < a.length; h++) {
            var i = a[h];
            i = typeof i == "function" ? i.call(t, e, r, l) : i, i != null && (c ? (c = false, e = _8({}, e, i)) : _8(e, i));
          }
          t.state = e;
        }
      else
        e.queue = null;
  }
  var Tw = { id: 1, overflow: "" };
  function Ai(t, a, r) {
    var l = t.id;
    t = t.overflow;
    var c = 32 - Ta(l) - 1;
    l &= ~(1 << c), r += 1;
    var e = 32 - Ta(a) + c;
    if (30 < e) {
      var h = c - c % 5;
      return e = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, { id: 1 << 32 - Ta(a) + c | r << c | l, overflow: e + t };
    }
    return { id: 1 << e | r << c | l, overflow: t };
  }
  var Ta = Math.clz32 ? Math.clz32 : Nw, Ww = Math.log, jw = Math.LN2;
  function Nw(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ww(t) / jw | 0) | 0;
  }
  function _w(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var Uw = typeof Object.is == "function" ? Object.is : _w, R5 = null, Ri = null, Wa = null, H1 = null, j8 = false, _a = false, U8 = 0, Z4 = null, $a = 0;
  function z3() {
    if (R5 === null)
      throw Error(G(321));
    return R5;
  }
  function Ip() {
    if (0 < $a)
      throw Error(G(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Oi() {
    return H1 === null ? Wa === null ? (j8 = false, Wa = H1 = Ip()) : (j8 = true, H1 = Wa) : H1.next === null ? (j8 = false, H1 = H1.next = Ip()) : (j8 = true, H1 = H1.next), H1;
  }
  function Pi() {
    Ri = R5 = null, _a = false, Wa = null, $a = 0, H1 = Z4 = null;
  }
  function vz(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function bp(t, a, r) {
    if (R5 = z3(), H1 = Oi(), j8) {
      var l = H1.queue;
      if (a = l.dispatch, Z4 !== null && (r = Z4.get(l), r !== void 0)) {
        Z4.delete(l), l = H1.memoizedState;
        do
          l = t(l, r.action), r = r.next;
        while (r !== null);
        return H1.memoizedState = l, [l, a];
      }
      return [H1.memoizedState, a];
    }
    return t = t === vz ? typeof a == "function" ? a() : a : r !== void 0 ? r(a) : a, H1.memoizedState = t, t = H1.queue = { last: null, dispatch: null }, t = t.dispatch = Gw.bind(null, R5, t), [H1.memoizedState, t];
  }
  function Dp(t, a) {
    if (R5 = z3(), H1 = Oi(), a = a === void 0 ? null : a, H1 !== null) {
      var r = H1.memoizedState;
      if (r !== null && a !== null) {
        var l = r[1];
        t:
          if (l === null)
            l = false;
          else {
            for (var c = 0; c < l.length && c < a.length; c++)
              if (!Uw(a[c], l[c])) {
                l = false;
                break t;
              }
            l = true;
          }
        if (l)
          return r[0];
      }
    }
    return t = t(), H1.memoizedState = [t, a], t;
  }
  function Gw(t, a, r) {
    if (25 <= $a)
      throw Error(G(301));
    if (t === R5)
      if (_a = true, t = { action: r, next: null }, Z4 === null && (Z4 = /* @__PURE__ */ new Map()), r = Z4.get(a), r === void 0)
        Z4.set(a, t);
      else {
        for (a = r; a.next !== null; )
          a = a.next;
        a.next = t;
      }
  }
  function qw() {
    throw Error(G(394));
  }
  function Ea() {
  }
  var Tp = { readContext: function(t) {
    return t._currentValue2;
  }, useContext: function(t) {
    return z3(), t._currentValue2;
  }, useMemo: Dp, useReducer: bp, useRef: function(t) {
    R5 = z3(), H1 = Oi();
    var a = H1.memoizedState;
    return a === null ? (t = { current: t }, H1.memoizedState = t) : a;
  }, useState: function(t) {
    return bp(vz, t);
  }, useInsertionEffect: Ea, useLayoutEffect: function() {
  }, useCallback: function(t, a) {
    return Dp(function() {
      return t;
    }, a);
  }, useImperativeHandle: Ea, useEffect: Ea, useDebugValue: Ea, useDeferredValue: function(t) {
    return z3(), t;
  }, useTransition: function() {
    return z3(), [false, qw];
  }, useId: function() {
    var t = Ri.treeContext, a = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Ta(t) - 1)).toString(32) + a;
    var r = ja;
    if (r === null)
      throw Error(G(404));
    return a = U8++, t = ":" + r.idPrefix + "R" + t, 0 < a && (t += "H" + a.toString(32)), t + ":";
  }, useMutableSource: function(t, a) {
    return z3(), a(t._source);
  }, useSyncExternalStore: function(t, a, r) {
    if (r === void 0)
      throw Error(G(407));
    return r();
  } }, ja = null, Li = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Kw(t) {
    return console.error(t), null;
  }
  function N8() {
  }
  function $w(t, a, r, l, c, e, h, i, n) {
    var o = [], d = /* @__PURE__ */ new Set();
    return a = { destination: null, responseState: a, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: o, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: c === void 0 ? Kw : c, onAllReady: e === void 0 ? N8 : e, onShellReady: h === void 0 ? N8 : h, onShellError: i === void 0 ? N8 : i, onFatalError: n === void 0 ? N8 : n }, r = Ua(a, 0, null, r, false, false), r.parentFlushed = true, t = Ei(a, t, null, r, d, hz, null, Tw), o.push(t), a;
  }
  function Ei(t, a, r, l, c, e, h, i) {
    t.allPendingTasks++, r === null ? t.pendingRootTasks++ : r.pendingTasks++;
    var n = { node: a, ping: function() {
      var o = t.pingedTasks;
      o.push(n), o.length === 1 && sz(t);
    }, blockedBoundary: r, blockedSegment: l, abortSet: c, legacyContext: e, context: h, treeContext: i };
    return c.add(n), n;
  }
  function Ua(t, a, r, l, c, e) {
    return { status: 0, id: -1, index: a, parentFlushed: false, chunks: [], children: [], formatContext: l, boundary: r, lastPushedText: c, textEmbedded: e };
  }
  function G8(t, a) {
    if (t = t.onError(a), t != null && typeof t != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Ga(t, a) {
    var r = t.onShellError;
    r(a), r = t.onFatalError, r(a), t.destination !== null ? (t.status = 2, t.destination.destroy(a)) : (t.status = 1, t.fatalError = a);
  }
  function Wp(t, a, r, l, c) {
    for (R5 = {}, Ri = a, U8 = 0, t = r(l, c); _a; )
      _a = false, U8 = 0, $a += 1, H1 = null, t = r(l, c);
    return Pi(), t;
  }
  function jp(t, a, r, l) {
    var c = r.render(), e = l.childContextTypes;
    if (e != null) {
      var h = a.legacyContext;
      if (typeof r.getChildContext != "function")
        l = h;
      else {
        r = r.getChildContext();
        for (var i in r)
          if (!(i in e))
            throw Error(G(108, wi(l) || "Unknown", i));
        l = _8({}, h, r);
      }
      a.legacyContext = l, c0(t, a, c), a.legacyContext = h;
    } else
      c0(t, a, c);
  }
  function Np(t, a) {
    if (t && t.defaultProps) {
      a = _8({}, a), t = t.defaultProps;
      for (var r in t)
        a[r] === void 0 && (a[r] = t[r]);
      return a;
    }
    return a;
  }
  function Zi(t, a, r, l, c) {
    if (typeof r == "function")
      if (r.prototype && r.prototype.isReactComponent) {
        c = Op(r, a.legacyContext);
        var e = r.contextType;
        e = new r(l, typeof e == "object" && e !== null ? e._currentValue2 : c), Ep(e, r, l, c), jp(t, a, e, r);
      } else {
        e = Op(r, a.legacyContext), c = Wp(t, a, r, l, e);
        var h = U8 !== 0;
        if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0)
          Ep(c, r, l, e), jp(t, a, c, r);
        else if (h) {
          l = a.treeContext, a.treeContext = Ai(l, 1, 0);
          try {
            c0(t, a, c);
          } finally {
            a.treeContext = l;
          }
        } else
          c0(t, a, c);
      }
    else if (typeof r == "string") {
      switch (c = a.blockedSegment, e = yw(c.chunks, r, l, t.responseState, c.formatContext), c.lastPushedText = false, h = c.formatContext, c.formatContext = Aw(h, r, l), Si(t, a, e), c.formatContext = h, r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          c.chunks.push("</", r, ">");
      }
      c.lastPushedText = false;
    } else {
      switch (r) {
        case bw:
        case Iw:
        case Yp:
        case Jp:
        case Qp:
          c0(t, a, l.children);
          return;
        case cz:
          c0(t, a, l.children);
          return;
        case Ew:
          throw Error(G(343));
        case lz:
          t: {
            r = a.blockedBoundary, c = a.blockedSegment, e = l.fallback, l = l.children, h = /* @__PURE__ */ new Set();
            var i = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, n = Ua(t, c.chunks.length, i, c.formatContext, false, false);
            c.children.push(n), c.lastPushedText = false;
            var o = Ua(t, 0, null, c.formatContext, false, false);
            o.parentFlushed = true, a.blockedBoundary = i, a.blockedSegment = o;
            try {
              if (Si(t, a, l), t.responseState.generateStaticMarkup || o.lastPushedText && o.textEmbedded && o.chunks.push("<!-- -->"), o.status = 1, qa(i, o), i.pendingTasks === 0)
                break t;
            } catch (d) {
              o.status = 4, i.forceClientRender = true, i.errorDigest = G8(t, d);
            } finally {
              a.blockedBoundary = r, a.blockedSegment = c;
            }
            a = Ei(t, e, r, n, h, a.legacyContext, a.context, a.treeContext), t.pingedTasks.push(a);
          }
          return;
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case rz:
            if (l = Wp(t, a, r.render, l, c), U8 !== 0) {
              r = a.treeContext, a.treeContext = Ai(r, 1, 0);
              try {
                c0(t, a, l);
              } finally {
                a.treeContext = r;
              }
            } else
              c0(t, a, l);
            return;
          case ez:
            r = r.type, l = Np(r, l), Zi(t, a, r, l, c);
            return;
          case tz:
            if (c = l.children, r = r._context, l = l.value, e = r._currentValue2, r._currentValue2 = l, h = M3, M3 = l = { parent: h, depth: h === null ? 0 : h.depth + 1, context: r, parentValue: e, value: l }, a.context = l, c0(t, a, c), t = M3, t === null)
              throw Error(G(403));
            l = t.parentValue, t.context._currentValue2 = l === Dw ? t.context._defaultValue : l, t = M3 = t.parent, a.context = t;
            return;
          case az:
            l = l.children, l = l(r._currentValue2), c0(t, a, l);
            return;
          case ki:
            c = r._init, r = c(r._payload), l = Np(r, l), Zi(t, a, r, l, void 0);
            return;
        }
      throw Error(G(130, r == null ? r : typeof r, ""));
    }
  }
  function c0(t, a, r) {
    if (a.node = r, typeof r == "object" && r !== null) {
      switch (r.$$typeof) {
        case Pw:
          Zi(t, a, r.type, r.props, r.ref);
          return;
        case Xp:
          throw Error(G(257));
        case ki:
          var l = r._init;
          r = l(r._payload), c0(t, a, r);
          return;
      }
      if (Bi(r)) {
        _p(t, a, r);
        return;
      }
      if (r === null || typeof r != "object" ? l = null : (l = Rp && r[Rp] || r["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(r))) {
        if (r = l.next(), !r.done) {
          var c = [];
          do
            c.push(r.value), r = l.next();
          while (!r.done);
          _p(t, a, c);
        }
        return;
      }
      throw t = Object.prototype.toString.call(r), Error(G(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
    }
    typeof r == "string" ? (l = a.blockedSegment, l.lastPushedText = kp(a.blockedSegment.chunks, r, t.responseState, l.lastPushedText)) : typeof r == "number" && (l = a.blockedSegment, l.lastPushedText = kp(a.blockedSegment.chunks, "" + r, t.responseState, l.lastPushedText));
  }
  function _p(t, a, r) {
    for (var l = r.length, c = 0; c < l; c++) {
      var e = a.treeContext;
      a.treeContext = Ai(e, l, c);
      try {
        Si(t, a, r[c]);
      } finally {
        a.treeContext = e;
      }
    }
  }
  function Si(t, a, r) {
    var l = a.blockedSegment.formatContext, c = a.legacyContext, e = a.context;
    try {
      return c0(t, a, r);
    } catch (n) {
      if (Pi(), typeof n == "object" && n !== null && typeof n.then == "function") {
        r = n;
        var h = a.blockedSegment, i = Ua(t, h.chunks.length, null, h.formatContext, h.lastPushedText, true);
        h.children.push(i), h.lastPushedText = false, t = Ei(t, a.node, a.blockedBoundary, i, a.abortSet, a.legacyContext, a.context, a.treeContext).ping, r.then(t, t), a.blockedSegment.formatContext = l, a.legacyContext = c, a.context = e, Na(e);
      } else
        throw a.blockedSegment.formatContext = l, a.legacyContext = c, a.context = e, Na(e), n;
    }
  }
  function Xw(t) {
    var a = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, uz(this, a, t);
  }
  function gz(t, a, r) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (a.allPendingTasks--, a.status !== 2 && (a.status = 2, a.destination !== null && a.destination.push(null))) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, t = r === void 0 ? Error(G(432)) : r, l.errorDigest = a.onError(t), l.parentFlushed && a.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(c) {
      return gz(c, a, r);
    }), l.fallbackAbortableTasks.clear(), a.allPendingTasks--, a.allPendingTasks === 0 && (l = a.onAllReady, l()));
  }
  function qa(t, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null) {
      var r = a.children[0];
      r.id = a.id, r.parentFlushed = true, r.status === 1 && qa(t, r);
    } else
      t.completedSegments.push(a);
  }
  function uz(t, a, r) {
    if (a === null) {
      if (r.parentFlushed) {
        if (t.completedRootSegment !== null)
          throw Error(G(389));
        t.completedRootSegment = r;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = N8, a = t.onShellReady, a());
    } else
      a.pendingTasks--, a.forceClientRender || (a.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && qa(a, r), a.parentFlushed && t.completedBoundaries.push(a), a.fallbackAbortableTasks.forEach(Xw, t), a.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (qa(a, r), a.completedSegments.length === 1 && a.parentFlushed && t.partialBoundaries.push(a)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function sz(t) {
    if (t.status !== 2) {
      var a = M3, r = Li.current;
      Li.current = Tp;
      var l = ja;
      ja = t.responseState;
      try {
        var c = t.pingedTasks, e;
        for (e = 0; e < c.length; e++) {
          var h = c[e], i = t, n = h.blockedSegment;
          if (n.status === 0) {
            Na(h.context);
            try {
              c0(i, h, h.node), i.responseState.generateStaticMarkup || n.lastPushedText && n.textEmbedded && n.chunks.push("<!-- -->"), h.abortSet.delete(h), n.status = 1, uz(i, h.blockedBoundary, n);
            } catch (z) {
              if (Pi(), typeof z == "object" && z !== null && typeof z.then == "function") {
                var o = h.ping;
                z.then(o, o);
              } else {
                h.abortSet.delete(h), n.status = 4;
                var d = h.blockedBoundary, v = z, g = G8(i, v);
                if (d === null ? Ga(i, v) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = g, d.parentFlushed && i.clientRenderedBoundaries.push(d))), i.allPendingTasks--, i.allPendingTasks === 0) {
                  var u = i.onAllReady;
                  u();
                }
              }
            } finally {
            }
          }
        }
        c.splice(0, e), t.destination !== null && Ii(t, t.destination);
      } catch (z) {
        G8(t, z), Ga(t, z);
      } finally {
        ja = l, Li.current = r, r === Tp && Na(a);
      }
    }
  }
  function Ia(t, a, r) {
    switch (r.parentFlushed = true, r.status) {
      case 0:
        var l = r.id = t.nextSegmentId++;
        return r.lastPushedText = false, r.textEmbedded = false, t = t.responseState, a.push('<template id="'), a.push(t.placeholderPrefix), t = l.toString(16), a.push(t), a.push('"></template>');
      case 1:
        r.status = 2;
        var c = true;
        l = r.chunks;
        var e = 0;
        r = r.children;
        for (var h = 0; h < r.length; h++) {
          for (c = r[h]; e < c.index; e++)
            a.push(l[e]);
          c = Xa(t, a, c);
        }
        for (; e < l.length - 1; e++)
          a.push(l[e]);
        return e < l.length && (c = a.push(l[e])), c;
      default:
        throw Error(G(390));
    }
  }
  function Xa(t, a, r) {
    var l = r.boundary;
    if (l === null)
      return Ia(t, a, r);
    if (l.parentFlushed = true, l.forceClientRender)
      return t.responseState.generateStaticMarkup || (l = l.errorDigest, a.push("<!--$!-->"), a.push("<template"), l && (a.push(' data-dgst="'), l = w2(l), a.push(l), a.push('"')), a.push("></template>")), Ia(t, a, r), t = t.responseState.generateStaticMarkup ? true : a.push("<!--/$-->"), t;
    if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var c = t.responseState, e = c.nextSuspenseID++;
      return c = c.boundaryPrefix + e.toString(16), l = l.id = c, Fp(a, t.responseState, l), Ia(t, a, r), a.push("<!--/$-->");
    }
    if (l.byteSize > t.progressiveChunkSize)
      return l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), Fp(a, t.responseState, l.id), Ia(t, a, r), a.push("<!--/$-->");
    if (t.responseState.generateStaticMarkup || a.push("<!--$-->"), r = l.completedSegments, r.length !== 1)
      throw Error(G(391));
    return Xa(t, a, r[0]), t = t.responseState.generateStaticMarkup ? true : a.push("<!--/$-->"), t;
  }
  function Up(t, a, r) {
    return Fw(a, t.responseState, r.formatContext, r.id), Xa(t, a, r), kw(a, r.formatContext);
  }
  function Gp(t, a, r) {
    for (var l = r.completedSegments, c = 0; c < l.length; c++)
      pz(t, a, r, l[c]);
    if (l.length = 0, t = t.responseState, l = r.id, r = r.rootSegmentID, a.push(t.startInlineScript), t.sentCompleteBoundaryFunction ? a.push('$RC("') : (t.sentCompleteBoundaryFunction = true, a.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), l === null)
      throw Error(G(395));
    return r = r.toString(16), a.push(l), a.push('","'), a.push(t.segmentPrefix), a.push(r), a.push('")<\/script>');
  }
  function pz(t, a, r, l) {
    if (l.status === 2)
      return true;
    var c = l.id;
    if (c === -1) {
      if ((l.id = r.rootSegmentID) === -1)
        throw Error(G(392));
      return Up(t, a, l);
    }
    return Up(t, a, l), t = t.responseState, a.push(t.startInlineScript), t.sentCompleteSegmentFunction ? a.push('$RS("') : (t.sentCompleteSegmentFunction = true, a.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), a.push(t.segmentPrefix), c = c.toString(16), a.push(c), a.push('","'), a.push(t.placeholderPrefix), a.push(c), a.push('")<\/script>');
  }
  function Ii(t, a) {
    try {
      var r = t.completedRootSegment;
      if (r !== null && t.pendingRootTasks === 0) {
        Xa(t, a, r), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (r = 0; r < l.length - 1; r++)
          a.push(l[r]);
        r < l.length && a.push(l[r]);
      }
      var c = t.clientRenderedBoundaries, e;
      for (e = 0; e < c.length; e++) {
        var h = c[e];
        l = a;
        var i = t.responseState, n = h.id, o = h.errorDigest, d = h.errorMessage, v = h.errorComponentStack;
        if (l.push(i.startInlineScript), i.sentClientRenderFunction ? l.push('$RX("') : (i.sentClientRenderFunction = true, l.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), n === null)
          throw Error(G(395));
        if (l.push(n), l.push('"'), o || d || v) {
          l.push(",");
          var g = Ci(o || "");
          l.push(g);
        }
        if (d || v) {
          l.push(",");
          var u = Ci(d || "");
          l.push(u);
        }
        if (v) {
          l.push(",");
          var z = Ci(v);
          l.push(z);
        }
        if (!l.push(")<\/script>")) {
          t.destination = null, e++, c.splice(0, e);
          return;
        }
      }
      c.splice(0, e);
      var f = t.completedBoundaries;
      for (e = 0; e < f.length; e++)
        if (!Gp(t, a, f[e])) {
          t.destination = null, e++, f.splice(0, e);
          return;
        }
      f.splice(0, e);
      var m = t.partialBoundaries;
      for (e = 0; e < m.length; e++) {
        var p = m[e];
        t: {
          c = t, h = a;
          var s = p.completedSegments;
          for (i = 0; i < s.length; i++)
            if (!pz(c, h, p, s[i])) {
              i++, s.splice(0, i);
              var M = false;
              break t;
            }
          s.splice(0, i), M = true;
        }
        if (!M) {
          t.destination = null, e++, m.splice(0, e);
          return;
        }
      }
      m.splice(0, e);
      var x = t.completedBoundaries;
      for (e = 0; e < x.length; e++)
        if (!Gp(t, a, x[e])) {
          t.destination = null, e++, x.splice(0, e);
          return;
        }
      x.splice(0, e);
    } finally {
      t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && a.push(null);
    }
  }
  function Qw(t, a) {
    try {
      var r = t.abortableTasks;
      r.forEach(function(l) {
        return gz(l, t, a);
      }), r.clear(), t.destination !== null && Ii(t, t.destination);
    } catch (l) {
      G8(t, l), Ga(t, l);
    }
  }
  function Yw() {
  }
  function zz(t, a, r, l) {
    var c = false, e = null, h = "", i = { push: function(o) {
      return o !== null && (h += o), true;
    }, destroy: function(o) {
      c = true, e = o;
    } }, n = false;
    if (t = $w(t, Ow(r, a ? a.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Yw, void 0, function() {
      n = true;
    }, void 0, void 0), sz(t), Qw(t, l), t.status === 1)
      t.status = 2, i.destroy(t.fatalError);
    else if (t.status !== 2 && t.destination === null) {
      t.destination = i;
      try {
        Ii(t, i);
      } catch (o) {
        G8(t, o), Ga(t, o);
      }
    }
    if (c)
      throw e;
    if (!n)
      throw Error(G(426));
    return h;
  }
  b6.renderToNodeStream = function() {
    throw Error(G(207));
  };
  b6.renderToStaticMarkup = function(t, a) {
    return zz(t, a, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  };
  b6.renderToStaticNodeStream = function() {
    throw Error(G(208));
  };
  b6.renderToString = function(t, a) {
    return zz(t, a, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  };
  b6.version = "18.2.0";
});
var pM = J1((cn) => {
  "use strict";
  var _z = _();
  function $(t) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
      a += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h0 = null, i0 = 0;
  function b(t, a) {
    if (a.length !== 0)
      if (512 < a.length)
        0 < i0 && (t.enqueue(new Uint8Array(h0.buffer, 0, i0)), h0 = new Uint8Array(512), i0 = 0), t.enqueue(a);
      else {
        var r = h0.length - i0;
        r < a.length && (r === 0 ? t.enqueue(h0) : (h0.set(a.subarray(0, r), i0), t.enqueue(h0), a = a.subarray(r)), h0 = new Uint8Array(512), i0 = 0), h0.set(a, i0), i0 += a.length;
      }
  }
  function C1(t, a) {
    return b(t, a), true;
  }
  function fz(t) {
    h0 && 0 < i0 && (t.enqueue(new Uint8Array(h0.buffer, 0, i0)), h0 = null, i0 = 0);
  }
  var Uz = new TextEncoder();
  function J(t) {
    return Uz.encode(t);
  }
  function O(t) {
    return Uz.encode(t);
  }
  function Gz(t, a) {
    typeof t.error == "function" ? t.error(a) : t.close();
  }
  var N2 = Object.prototype.hasOwnProperty, Jw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hz = {}, mz = {};
  function qz(t) {
    return N2.call(mz, t) ? true : N2.call(Hz, t) ? false : Jw.test(t) ? mz[t] = true : (Hz[t] = true, false);
  }
  function Z2(t, a, r, l, c, e, h) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = r, this.propertyName = t, this.type = a, this.sanitizeURL = e, this.removeEmptyString = h;
  }
  var d2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    d2[t] = new Z2(t, 0, false, t, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var a = t[0];
    d2[a] = new Z2(a, 1, false, t[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    d2[t] = new Z2(t, 2, false, t.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    d2[t] = new Z2(t, 2, false, t, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    d2[t] = new Z2(t, 3, false, t.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    d2[t] = new Z2(t, 3, true, t, null, false, false);
  });
  ["capture", "download"].forEach(function(t) {
    d2[t] = new Z2(t, 4, false, t, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(t) {
    d2[t] = new Z2(t, 6, false, t, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(t) {
    d2[t] = new Z2(t, 5, false, t.toLowerCase(), null, false, false);
  });
  var $i = /[\-:]([a-z])/g;
  function Xi(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var a = t.replace($i, Xi);
    d2[a] = new Z2(a, 1, false, t, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var a = t.replace($i, Xi);
    d2[a] = new Z2(a, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var a = t.replace($i, Xi);
    d2[a] = new Z2(a, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(t) {
    d2[t] = new Z2(t, 1, false, t.toLowerCase(), null, false, false);
  });
  d2.xlinkHref = new Z2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(t) {
    d2[t] = new Z2(t, 1, false, t.toLowerCase(), null, true, true);
  });
  var Ja = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, tA = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ja).forEach(function(t) {
    tA.forEach(function(a) {
      a = a + t.charAt(0).toUpperCase() + t.substring(1), Ja[a] = Ja[t];
    });
  });
  var aA = /["'&<>]/;
  function o2(t) {
    if (typeof t == "boolean" || typeof t == "number")
      return "" + t;
    t = "" + t;
    var a = aA.exec(t);
    if (a) {
      var r = "", l, c = 0;
      for (l = a.index; l < t.length; l++) {
        switch (t.charCodeAt(l)) {
          case 34:
            a = "&quot;";
            break;
          case 38:
            a = "&amp;";
            break;
          case 39:
            a = "&#x27;";
            break;
          case 60:
            a = "&lt;";
            break;
          case 62:
            a = "&gt;";
            break;
          default:
            continue;
        }
        c !== l && (r += t.substring(c, l)), c = l + 1, r += a;
      }
      t = c !== l ? r + t.substring(c, l) : r;
    }
    return t;
  }
  var rA = /([A-Z])/g, lA = /^ms-/, _i = Array.isArray, cA = O("<script>"), eA = O("<\/script>"), hA = O('<script src="'), iA = O('<script type="module" src="'), xz = O('" async=""><\/script>'), nA = /(<\/|<)(s)(cript)/gi;
  function oA(t, a, r, l) {
    return "" + a + (r === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function dA(t, a, r, l, c) {
    t = t === void 0 ? "" : t, a = a === void 0 ? cA : O('<script nonce="' + o2(a) + '">');
    var e = [];
    if (r !== void 0 && e.push(a, J(("" + r).replace(nA, oA)), eA), l !== void 0)
      for (r = 0; r < l.length; r++)
        e.push(hA, J(o2(l[r])), xz);
    if (c !== void 0)
      for (l = 0; l < c.length; l++)
        e.push(iA, J(o2(c[l])), xz);
    return { bootstrapChunks: e, startInlineScript: a, placeholderPrefix: O(t + "P:"), segmentPrefix: O(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
  }
  function e5(t, a) {
    return { insertionMode: t, selectedValue: a };
  }
  function vA(t) {
    return e5(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function gA(t, a, r) {
    switch (a) {
      case "select":
        return e5(1, r.value != null ? r.value : r.defaultValue);
      case "svg":
        return e5(2, null);
      case "math":
        return e5(3, null);
      case "foreignObject":
        return e5(1, null);
      case "table":
        return e5(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return e5(5, null);
      case "colgroup":
        return e5(7, null);
      case "tr":
        return e5(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? e5(1, null) : t;
  }
  var Qi = O("<!-- -->");
  function Vz(t, a, r, l) {
    return a === "" ? l : (l && t.push(Qi), t.push(J(o2(a))), true);
  }
  var Cz = /* @__PURE__ */ new Map(), uA = O(' style="'), Lz = O(":"), sA = O(";");
  function Kz(t, a, r) {
    if (typeof r != "object")
      throw Error($(62));
    a = true;
    for (var l in r)
      if (N2.call(r, l)) {
        var c = r[l];
        if (c != null && typeof c != "boolean" && c !== "") {
          if (l.indexOf("--") === 0) {
            var e = J(o2(l));
            c = J(o2(("" + c).trim()));
          } else {
            e = l;
            var h = Cz.get(e);
            h !== void 0 || (h = O(o2(e.replace(rA, "-$1").toLowerCase().replace(lA, "-ms-"))), Cz.set(e, h)), e = h, c = typeof c == "number" ? c === 0 || N2.call(Ja, l) ? J("" + c) : J(c + "px") : J(o2(("" + c).trim()));
          }
          a ? (a = false, t.push(uA, e, Lz, c)) : t.push(sA, e, Lz, c);
        }
      }
    a || t.push(f3);
  }
  var S4 = O(" "), D6 = O('="'), f3 = O('"'), Bz = O('=""');
  function e0(t, a, r, l) {
    switch (r) {
      case "style":
        Kz(t, a, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") {
      if (a = d2.hasOwnProperty(r) ? d2[r] : null, a !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!a.acceptsBooleans)
              return;
        }
        switch (r = J(a.attributeName), a.type) {
          case 3:
            l && t.push(S4, r, Bz);
            break;
          case 4:
            l === true ? t.push(S4, r, Bz) : l !== false && t.push(S4, r, D6, J(o2(l)), f3);
            break;
          case 5:
            isNaN(l) || t.push(S4, r, D6, J(o2(l)), f3);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(S4, r, D6, J(o2(l)), f3);
            break;
          default:
            a.sanitizeURL && (l = "" + l), t.push(S4, r, D6, J(o2(l)), f3);
        }
      } else if (qz(r)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (a = r.toLowerCase().slice(0, 5), a !== "data-" && a !== "aria-")
              return;
        }
        t.push(S4, J(r), D6, J(o2(l)), f3);
      }
    }
  }
  var y4 = O(">"), wz = O("/>");
  function tr(t, a, r) {
    if (a != null) {
      if (r != null)
        throw Error($(60));
      if (typeof a != "object" || !("__html" in a))
        throw Error($(61));
      a = a.__html, a != null && t.push(J("" + a));
    }
  }
  function pA(t) {
    var a = "";
    return _z.Children.forEach(t, function(r) {
      r != null && (a += r);
    }), a;
  }
  var bi = O(' selected=""');
  function Di(t, a, r, l) {
    t.push(h5(r));
    var c = r = null, e;
    for (e in a)
      if (N2.call(a, e)) {
        var h = a[e];
        if (h != null)
          switch (e) {
            case "children":
              r = h;
              break;
            case "dangerouslySetInnerHTML":
              c = h;
              break;
            default:
              e0(t, l, e, h);
          }
      }
    return t.push(y4), tr(t, c, r), typeof r == "string" ? (t.push(J(o2(r))), null) : r;
  }
  var Ti = O(`
`), zA = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Az = /* @__PURE__ */ new Map();
  function h5(t) {
    var a = Az.get(t);
    if (a === void 0) {
      if (!zA.test(t))
        throw Error($(65, t));
      a = O("<" + t), Az.set(t, a);
    }
    return a;
  }
  var MA = O("<!DOCTYPE html>");
  function fA(t, a, r, l, c) {
    switch (a) {
      case "select":
        t.push(h5("select"));
        var e = null, h = null;
        for (d in r)
          if (N2.call(r, d)) {
            var i = r[d];
            if (i != null)
              switch (d) {
                case "children":
                  e = i;
                  break;
                case "dangerouslySetInnerHTML":
                  h = i;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  e0(t, l, d, i);
              }
          }
        return t.push(y4), tr(t, h, e), e;
      case "option":
        h = c.selectedValue, t.push(h5("option"));
        var n = i = null, o = null, d = null;
        for (e in r)
          if (N2.call(r, e)) {
            var v = r[e];
            if (v != null)
              switch (e) {
                case "children":
                  i = v;
                  break;
                case "selected":
                  o = v;
                  break;
                case "dangerouslySetInnerHTML":
                  d = v;
                  break;
                case "value":
                  n = v;
                default:
                  e0(t, l, e, v);
              }
          }
        if (h != null)
          if (r = n !== null ? "" + n : pA(i), _i(h)) {
            for (l = 0; l < h.length; l++)
              if ("" + h[l] === r) {
                t.push(bi);
                break;
              }
          } else
            "" + h === r && t.push(bi);
        else
          o && t.push(bi);
        return t.push(y4), tr(t, d, i), i;
      case "textarea":
        t.push(h5("textarea")), d = h = e = null;
        for (i in r)
          if (N2.call(r, i) && (n = r[i], n != null))
            switch (i) {
              case "children":
                d = n;
                break;
              case "value":
                e = n;
                break;
              case "defaultValue":
                h = n;
                break;
              case "dangerouslySetInnerHTML":
                throw Error($(91));
              default:
                e0(t, l, i, n);
            }
        if (e === null && h !== null && (e = h), t.push(y4), d != null) {
          if (e != null)
            throw Error($(92));
          if (_i(d) && 1 < d.length)
            throw Error($(93));
          e = "" + d;
        }
        return typeof e == "string" && e[0] === `
` && t.push(Ti), e !== null && t.push(J(o2("" + e))), null;
      case "input":
        t.push(h5("input")), n = d = i = e = null;
        for (h in r)
          if (N2.call(r, h) && (o = r[h], o != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error($(399, "input"));
              case "defaultChecked":
                n = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "checked":
                d = o;
                break;
              case "value":
                e = o;
                break;
              default:
                e0(t, l, h, o);
            }
        return d !== null ? e0(t, l, "checked", d) : n !== null && e0(t, l, "checked", n), e !== null ? e0(t, l, "value", e) : i !== null && e0(t, l, "value", i), t.push(wz), null;
      case "menuitem":
        t.push(h5("menuitem"));
        for (var g in r)
          if (N2.call(r, g) && (e = r[g], e != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error($(400));
              default:
                e0(t, l, g, e);
            }
        return t.push(y4), null;
      case "title":
        t.push(h5("title")), e = null;
        for (v in r)
          if (N2.call(r, v) && (h = r[v], h != null))
            switch (v) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                throw Error($(434));
              default:
                e0(t, l, v, h);
            }
        return t.push(y4), e;
      case "listing":
      case "pre":
        t.push(h5(a)), h = e = null;
        for (n in r)
          if (N2.call(r, n) && (i = r[n], i != null))
            switch (n) {
              case "children":
                e = i;
                break;
              case "dangerouslySetInnerHTML":
                h = i;
                break;
              default:
                e0(t, l, n, i);
            }
        if (t.push(y4), h != null) {
          if (e != null)
            throw Error($(60));
          if (typeof h != "object" || !("__html" in h))
            throw Error($(61));
          r = h.__html, r != null && (typeof r == "string" && 0 < r.length && r[0] === `
` ? t.push(Ti, J(r)) : t.push(J("" + r)));
        }
        return typeof e == "string" && e[0] === `
` && t.push(Ti), e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        t.push(h5(a));
        for (var u in r)
          if (N2.call(r, u) && (e = r[u], e != null))
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error($(399, a));
              default:
                e0(t, l, u, e);
            }
        return t.push(wz), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Di(t, r, a, l);
      case "html":
        return c.insertionMode === 0 && t.push(MA), Di(t, r, a, l);
      default:
        if (a.indexOf("-") === -1 && typeof r.is != "string")
          return Di(t, r, a, l);
        t.push(h5(a)), h = e = null;
        for (o in r)
          if (N2.call(r, o) && (i = r[o], i != null))
            switch (o) {
              case "children":
                e = i;
                break;
              case "dangerouslySetInnerHTML":
                h = i;
                break;
              case "style":
                Kz(t, l, i);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                qz(o) && typeof i != "function" && typeof i != "symbol" && t.push(S4, J(o), D6, J(o2(i)), f3);
            }
        return t.push(y4), tr(t, h, e), e;
    }
  }
  var HA = O("</"), mA = O(">"), xA = O('<template id="'), VA = O('"></template>'), CA = O("<!--$-->"), LA = O('<!--$?--><template id="'), BA = O('"></template>'), wA = O("<!--$!-->"), AA = O("<!--/$-->"), ZA = O("<template"), SA = O('"'), yA = O(' data-dgst="');
  O(' data-msg="');
  O(' data-stck="');
  var FA = O("></template>");
  function Zz(t, a, r) {
    if (b(t, LA), r === null)
      throw Error($(395));
    return b(t, r), C1(t, BA);
  }
  var kA = O('<div hidden id="'), RA = O('">'), OA = O("</div>"), PA = O('<svg aria-hidden="true" style="display:none" id="'), EA = O('">'), IA = O("</svg>"), bA = O('<math aria-hidden="true" style="display:none" id="'), DA = O('">'), TA = O("</math>"), WA = O('<table hidden id="'), jA = O('">'), NA = O("</table>"), _A = O('<table hidden><tbody id="'), UA = O('">'), GA = O("</tbody></table>"), qA = O('<table hidden><tr id="'), KA = O('">'), $A = O("</tr></table>"), XA = O('<table hidden><colgroup id="'), QA = O('">'), YA = O("</colgroup></table>");
  function JA(t, a, r, l) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return b(t, kA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, RA);
      case 2:
        return b(t, PA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, EA);
      case 3:
        return b(t, bA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, DA);
      case 4:
        return b(t, WA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, jA);
      case 5:
        return b(t, _A), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, UA);
      case 6:
        return b(t, qA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, KA);
      case 7:
        return b(t, XA), b(t, a.segmentPrefix), b(t, J(l.toString(16))), C1(t, QA);
      default:
        throw Error($(397));
    }
  }
  function tZ(t, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return C1(t, OA);
      case 2:
        return C1(t, IA);
      case 3:
        return C1(t, TA);
      case 4:
        return C1(t, NA);
      case 5:
        return C1(t, GA);
      case 6:
        return C1(t, $A);
      case 7:
        return C1(t, YA);
      default:
        throw Error($(397));
    }
  }
  var aZ = O('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), rZ = O('$RS("'), lZ = O('","'), cZ = O('")<\/script>'), eZ = O('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), hZ = O('$RC("'), iZ = O('","'), nZ = O('")<\/script>'), oZ = O('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), dZ = O('$RX("'), vZ = O('"'), gZ = O(")<\/script>"), Wi = O(","), uZ = /[<\u2028\u2029]/g;
  function ji(t) {
    return JSON.stringify(t).replace(uZ, function(a) {
      switch (a) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var $8 = Object.assign, sZ = Symbol.for("react.element"), $z = Symbol.for("react.portal"), Xz = Symbol.for("react.fragment"), Qz = Symbol.for("react.strict_mode"), Yz = Symbol.for("react.profiler"), Jz = Symbol.for("react.provider"), tM = Symbol.for("react.context"), aM = Symbol.for("react.forward_ref"), rM = Symbol.for("react.suspense"), lM = Symbol.for("react.suspense_list"), cM = Symbol.for("react.memo"), Yi = Symbol.for("react.lazy"), pZ = Symbol.for("react.scope"), zZ = Symbol.for("react.debug_trace_mode"), MZ = Symbol.for("react.legacy_hidden"), fZ = Symbol.for("react.default_value"), Sz = Symbol.iterator;
  function Ui(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case Xz:
        return "Fragment";
      case $z:
        return "Portal";
      case Yz:
        return "Profiler";
      case Qz:
        return "StrictMode";
      case rM:
        return "Suspense";
      case lM:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tM:
          return (t.displayName || "Context") + ".Consumer";
        case Jz:
          return (t._context.displayName || "Context") + ".Provider";
        case aM:
          var a = t.render;
          return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case cM:
          return a = t.displayName || null, a !== null ? a : Ui(t.type) || "Memo";
        case Yi:
          a = t._payload, t = t._init;
          try {
            return Ui(t(a));
          } catch {
          }
      }
    return null;
  }
  var eM = {};
  function yz(t, a) {
    if (t = t.contextTypes, !t)
      return eM;
    var r = {}, l;
    for (l in t)
      r[l] = a[l];
    return r;
  }
  var m3 = null;
  function or(t, a) {
    if (t !== a) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var r = a.parent;
      if (t === null) {
        if (r !== null)
          throw Error($(401));
      } else {
        if (r === null)
          throw Error($(401));
        or(t, r);
      }
      a.context._currentValue = a.value;
    }
  }
  function hM(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && hM(t);
  }
  function iM(t) {
    var a = t.parent;
    a !== null && iM(a), t.context._currentValue = t.value;
  }
  function nM(t, a) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null)
      throw Error($(402));
    t.depth === a.depth ? or(t, a) : nM(t, a);
  }
  function oM(t, a) {
    var r = a.parent;
    if (r === null)
      throw Error($(402));
    t.depth === r.depth ? or(t, r) : oM(t, r), a.context._currentValue = a.value;
  }
  function cr(t) {
    var a = m3;
    a !== t && (a === null ? iM(t) : t === null ? hM(a) : a.depth === t.depth ? or(a, t) : a.depth > t.depth ? nM(a, t) : oM(a, t), m3 = t);
  }
  var Fz = { isMounted: function() {
    return false;
  }, enqueueSetState: function(t, a) {
    t = t._reactInternals, t.queue !== null && t.queue.push(a);
  }, enqueueReplaceState: function(t, a) {
    t = t._reactInternals, t.replace = true, t.queue = [a];
  }, enqueueForceUpdate: function() {
  } };
  function kz(t, a, r, l) {
    var c = t.state !== void 0 ? t.state : null;
    t.updater = Fz, t.props = r, t.state = c;
    var e = { queue: [], replace: false };
    t._reactInternals = e;
    var h = a.contextType;
    if (t.context = typeof h == "object" && h !== null ? h._currentValue : l, h = a.getDerivedStateFromProps, typeof h == "function" && (h = h(r, c), c = h == null ? c : $8({}, c, h), t.state = c), typeof a.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function"))
      if (a = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && Fz.enqueueReplaceState(t, t.state, null), e.queue !== null && 0 < e.queue.length)
        if (a = e.queue, h = e.replace, e.queue = null, e.replace = false, h && a.length === 1)
          t.state = a[0];
        else {
          for (e = h ? a[0] : t.state, c = true, h = h ? 1 : 0; h < a.length; h++) {
            var i = a[h];
            i = typeof i == "function" ? i.call(t, e, r, l) : i, i != null && (c ? (c = false, e = $8({}, e, i)) : $8(e, i));
          }
          t.state = e;
        }
      else
        e.queue = null;
  }
  var HZ = { id: 1, overflow: "" };
  function Gi(t, a, r) {
    var l = t.id;
    t = t.overflow;
    var c = 32 - ar(l) - 1;
    l &= ~(1 << c), r += 1;
    var e = 32 - ar(a) + c;
    if (30 < e) {
      var h = c - c % 5;
      return e = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, { id: 1 << 32 - ar(a) + c | r << c | l, overflow: e + t };
    }
    return { id: 1 << e | r << c | l, overflow: t };
  }
  var ar = Math.clz32 ? Math.clz32 : VZ, mZ = Math.log, xZ = Math.LN2;
  function VZ(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (mZ(t) / xZ | 0) | 0;
  }
  function CZ(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var LZ = typeof Object.is == "function" ? Object.is : CZ, O5 = null, Ji = null, rr = null, m1 = null, q8 = false, er = false, X8 = 0, F4 = null, dr = 0;
  function H3() {
    if (O5 === null)
      throw Error($(321));
    return O5;
  }
  function Rz() {
    if (0 < dr)
      throw Error($(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function tn() {
    return m1 === null ? rr === null ? (q8 = false, rr = m1 = Rz()) : (q8 = true, m1 = rr) : m1.next === null ? (q8 = false, m1 = m1.next = Rz()) : (q8 = true, m1 = m1.next), m1;
  }
  function an() {
    Ji = O5 = null, er = false, rr = null, dr = 0, m1 = F4 = null;
  }
  function dM(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function Oz(t, a, r) {
    if (O5 = H3(), m1 = tn(), q8) {
      var l = m1.queue;
      if (a = l.dispatch, F4 !== null && (r = F4.get(l), r !== void 0)) {
        F4.delete(l), l = m1.memoizedState;
        do
          l = t(l, r.action), r = r.next;
        while (r !== null);
        return m1.memoizedState = l, [l, a];
      }
      return [m1.memoizedState, a];
    }
    return t = t === dM ? typeof a == "function" ? a() : a : r !== void 0 ? r(a) : a, m1.memoizedState = t, t = m1.queue = { last: null, dispatch: null }, t = t.dispatch = BZ.bind(null, O5, t), [m1.memoizedState, t];
  }
  function Pz(t, a) {
    if (O5 = H3(), m1 = tn(), a = a === void 0 ? null : a, m1 !== null) {
      var r = m1.memoizedState;
      if (r !== null && a !== null) {
        var l = r[1];
        t:
          if (l === null)
            l = false;
          else {
            for (var c = 0; c < l.length && c < a.length; c++)
              if (!LZ(a[c], l[c])) {
                l = false;
                break t;
              }
            l = true;
          }
        if (l)
          return r[0];
      }
    }
    return t = t(), m1.memoizedState = [t, a], t;
  }
  function BZ(t, a, r) {
    if (25 <= dr)
      throw Error($(301));
    if (t === O5)
      if (er = true, t = { action: r, next: null }, F4 === null && (F4 = /* @__PURE__ */ new Map()), r = F4.get(a), r === void 0)
        F4.set(a, t);
      else {
        for (a = r; a.next !== null; )
          a = a.next;
        a.next = t;
      }
  }
  function wZ() {
    throw Error($(394));
  }
  function Qa() {
  }
  var Ez = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return H3(), t._currentValue;
  }, useMemo: Pz, useReducer: Oz, useRef: function(t) {
    O5 = H3(), m1 = tn();
    var a = m1.memoizedState;
    return a === null ? (t = { current: t }, m1.memoizedState = t) : a;
  }, useState: function(t) {
    return Oz(dM, t);
  }, useInsertionEffect: Qa, useLayoutEffect: function() {
  }, useCallback: function(t, a) {
    return Pz(function() {
      return t;
    }, a);
  }, useImperativeHandle: Qa, useEffect: Qa, useDebugValue: Qa, useDeferredValue: function(t) {
    return H3(), t;
  }, useTransition: function() {
    return H3(), [false, wZ];
  }, useId: function() {
    var t = Ji.treeContext, a = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - ar(t) - 1)).toString(32) + a;
    var r = lr;
    if (r === null)
      throw Error($(404));
    return a = X8++, t = ":" + r.idPrefix + "R" + t, 0 < a && (t += "H" + a.toString(32)), t + ":";
  }, useMutableSource: function(t, a) {
    return H3(), a(t._source);
  }, useSyncExternalStore: function(t, a, r) {
    if (r === void 0)
      throw Error($(407));
    return r();
  } }, lr = null, Ni = _z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function AZ(t) {
    return console.error(t), null;
  }
  function K8() {
  }
  function ZZ(t, a, r, l, c, e, h, i, n) {
    var o = [], d = /* @__PURE__ */ new Set();
    return a = { destination: null, responseState: a, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: o, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: c === void 0 ? AZ : c, onAllReady: e === void 0 ? K8 : e, onShellReady: h === void 0 ? K8 : h, onShellError: i === void 0 ? K8 : i, onFatalError: n === void 0 ? K8 : n }, r = hr(a, 0, null, r, false, false), r.parentFlushed = true, t = rn(a, t, null, r, d, eM, null, HZ), o.push(t), a;
  }
  function rn(t, a, r, l, c, e, h, i) {
    t.allPendingTasks++, r === null ? t.pendingRootTasks++ : r.pendingTasks++;
    var n = { node: a, ping: function() {
      var o = t.pingedTasks;
      o.push(n), o.length === 1 && uM(t);
    }, blockedBoundary: r, blockedSegment: l, abortSet: c, legacyContext: e, context: h, treeContext: i };
    return c.add(n), n;
  }
  function hr(t, a, r, l, c, e) {
    return { status: 0, id: -1, index: a, parentFlushed: false, chunks: [], children: [], formatContext: l, boundary: r, lastPushedText: c, textEmbedded: e };
  }
  function Q8(t, a) {
    if (t = t.onError(a), t != null && typeof t != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function ir(t, a) {
    var r = t.onShellError;
    r(a), r = t.onFatalError, r(a), t.destination !== null ? (t.status = 2, Gz(t.destination, a)) : (t.status = 1, t.fatalError = a);
  }
  function Iz(t, a, r, l, c) {
    for (O5 = {}, Ji = a, X8 = 0, t = r(l, c); er; )
      er = false, X8 = 0, dr += 1, m1 = null, t = r(l, c);
    return an(), t;
  }
  function bz(t, a, r, l) {
    var c = r.render(), e = l.childContextTypes;
    if (e != null) {
      var h = a.legacyContext;
      if (typeof r.getChildContext != "function")
        l = h;
      else {
        r = r.getChildContext();
        for (var i in r)
          if (!(i in e))
            throw Error($(108, Ui(l) || "Unknown", i));
        l = $8({}, h, r);
      }
      a.legacyContext = l, n0(t, a, c), a.legacyContext = h;
    } else
      n0(t, a, c);
  }
  function Dz(t, a) {
    if (t && t.defaultProps) {
      a = $8({}, a), t = t.defaultProps;
      for (var r in t)
        a[r] === void 0 && (a[r] = t[r]);
      return a;
    }
    return a;
  }
  function qi(t, a, r, l, c) {
    if (typeof r == "function")
      if (r.prototype && r.prototype.isReactComponent) {
        c = yz(r, a.legacyContext);
        var e = r.contextType;
        e = new r(l, typeof e == "object" && e !== null ? e._currentValue : c), kz(e, r, l, c), bz(t, a, e, r);
      } else {
        e = yz(r, a.legacyContext), c = Iz(t, a, r, l, e);
        var h = X8 !== 0;
        if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0)
          kz(c, r, l, e), bz(t, a, c, r);
        else if (h) {
          l = a.treeContext, a.treeContext = Gi(l, 1, 0);
          try {
            n0(t, a, c);
          } finally {
            a.treeContext = l;
          }
        } else
          n0(t, a, c);
      }
    else if (typeof r == "string") {
      switch (c = a.blockedSegment, e = fA(c.chunks, r, l, t.responseState, c.formatContext), c.lastPushedText = false, h = c.formatContext, c.formatContext = gA(h, r, l), Ki(t, a, e), c.formatContext = h, r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          c.chunks.push(HA, J(r), mA);
      }
      c.lastPushedText = false;
    } else {
      switch (r) {
        case MZ:
        case zZ:
        case Qz:
        case Yz:
        case Xz:
          n0(t, a, l.children);
          return;
        case lM:
          n0(t, a, l.children);
          return;
        case pZ:
          throw Error($(343));
        case rM:
          t: {
            r = a.blockedBoundary, c = a.blockedSegment, e = l.fallback, l = l.children, h = /* @__PURE__ */ new Set();
            var i = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, n = hr(t, c.chunks.length, i, c.formatContext, false, false);
            c.children.push(n), c.lastPushedText = false;
            var o = hr(t, 0, null, c.formatContext, false, false);
            o.parentFlushed = true, a.blockedBoundary = i, a.blockedSegment = o;
            try {
              if (Ki(t, a, l), o.lastPushedText && o.textEmbedded && o.chunks.push(Qi), o.status = 1, nr(i, o), i.pendingTasks === 0)
                break t;
            } catch (d) {
              o.status = 4, i.forceClientRender = true, i.errorDigest = Q8(t, d);
            } finally {
              a.blockedBoundary = r, a.blockedSegment = c;
            }
            a = rn(t, e, r, n, h, a.legacyContext, a.context, a.treeContext), t.pingedTasks.push(a);
          }
          return;
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case aM:
            if (l = Iz(t, a, r.render, l, c), X8 !== 0) {
              r = a.treeContext, a.treeContext = Gi(r, 1, 0);
              try {
                n0(t, a, l);
              } finally {
                a.treeContext = r;
              }
            } else
              n0(t, a, l);
            return;
          case cM:
            r = r.type, l = Dz(r, l), qi(t, a, r, l, c);
            return;
          case Jz:
            if (c = l.children, r = r._context, l = l.value, e = r._currentValue, r._currentValue = l, h = m3, m3 = l = { parent: h, depth: h === null ? 0 : h.depth + 1, context: r, parentValue: e, value: l }, a.context = l, n0(t, a, c), t = m3, t === null)
              throw Error($(403));
            l = t.parentValue, t.context._currentValue = l === fZ ? t.context._defaultValue : l, t = m3 = t.parent, a.context = t;
            return;
          case tM:
            l = l.children, l = l(r._currentValue), n0(t, a, l);
            return;
          case Yi:
            c = r._init, r = c(r._payload), l = Dz(r, l), qi(t, a, r, l, void 0);
            return;
        }
      throw Error($(130, r == null ? r : typeof r, ""));
    }
  }
  function n0(t, a, r) {
    if (a.node = r, typeof r == "object" && r !== null) {
      switch (r.$$typeof) {
        case sZ:
          qi(t, a, r.type, r.props, r.ref);
          return;
        case $z:
          throw Error($(257));
        case Yi:
          var l = r._init;
          r = l(r._payload), n0(t, a, r);
          return;
      }
      if (_i(r)) {
        Tz(t, a, r);
        return;
      }
      if (r === null || typeof r != "object" ? l = null : (l = Sz && r[Sz] || r["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(r))) {
        if (r = l.next(), !r.done) {
          var c = [];
          do
            c.push(r.value), r = l.next();
          while (!r.done);
          Tz(t, a, c);
        }
        return;
      }
      throw t = Object.prototype.toString.call(r), Error($(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
    }
    typeof r == "string" ? (l = a.blockedSegment, l.lastPushedText = Vz(a.blockedSegment.chunks, r, t.responseState, l.lastPushedText)) : typeof r == "number" && (l = a.blockedSegment, l.lastPushedText = Vz(a.blockedSegment.chunks, "" + r, t.responseState, l.lastPushedText));
  }
  function Tz(t, a, r) {
    for (var l = r.length, c = 0; c < l; c++) {
      var e = a.treeContext;
      a.treeContext = Gi(e, l, c);
      try {
        Ki(t, a, r[c]);
      } finally {
        a.treeContext = e;
      }
    }
  }
  function Ki(t, a, r) {
    var l = a.blockedSegment.formatContext, c = a.legacyContext, e = a.context;
    try {
      return n0(t, a, r);
    } catch (n) {
      if (an(), typeof n == "object" && n !== null && typeof n.then == "function") {
        r = n;
        var h = a.blockedSegment, i = hr(t, h.chunks.length, null, h.formatContext, h.lastPushedText, true);
        h.children.push(i), h.lastPushedText = false, t = rn(t, a.node, a.blockedBoundary, i, a.abortSet, a.legacyContext, a.context, a.treeContext).ping, r.then(t, t), a.blockedSegment.formatContext = l, a.legacyContext = c, a.context = e, cr(e);
      } else
        throw a.blockedSegment.formatContext = l, a.legacyContext = c, a.context = e, cr(e), n;
    }
  }
  function SZ(t) {
    var a = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, gM(this, a, t);
  }
  function vM(t, a, r) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (a.allPendingTasks--, a.status !== 2 && (a.status = 2, a.destination !== null && a.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, t = r === void 0 ? Error($(432)) : r, l.errorDigest = a.onError(t), l.parentFlushed && a.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(c) {
      return vM(c, a, r);
    }), l.fallbackAbortableTasks.clear(), a.allPendingTasks--, a.allPendingTasks === 0 && (l = a.onAllReady, l()));
  }
  function nr(t, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null) {
      var r = a.children[0];
      r.id = a.id, r.parentFlushed = true, r.status === 1 && nr(t, r);
    } else
      t.completedSegments.push(a);
  }
  function gM(t, a, r) {
    if (a === null) {
      if (r.parentFlushed) {
        if (t.completedRootSegment !== null)
          throw Error($(389));
        t.completedRootSegment = r;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = K8, a = t.onShellReady, a());
    } else
      a.pendingTasks--, a.forceClientRender || (a.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && nr(a, r), a.parentFlushed && t.completedBoundaries.push(a), a.fallbackAbortableTasks.forEach(SZ, t), a.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (nr(a, r), a.completedSegments.length === 1 && a.parentFlushed && t.partialBoundaries.push(a)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function uM(t) {
    if (t.status !== 2) {
      var a = m3, r = Ni.current;
      Ni.current = Ez;
      var l = lr;
      lr = t.responseState;
      try {
        var c = t.pingedTasks, e;
        for (e = 0; e < c.length; e++) {
          var h = c[e], i = t, n = h.blockedSegment;
          if (n.status === 0) {
            cr(h.context);
            try {
              n0(i, h, h.node), n.lastPushedText && n.textEmbedded && n.chunks.push(Qi), h.abortSet.delete(h), n.status = 1, gM(i, h.blockedBoundary, n);
            } catch (z) {
              if (an(), typeof z == "object" && z !== null && typeof z.then == "function") {
                var o = h.ping;
                z.then(o, o);
              } else {
                h.abortSet.delete(h), n.status = 4;
                var d = h.blockedBoundary, v = z, g = Q8(i, v);
                if (d === null ? ir(i, v) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = g, d.parentFlushed && i.clientRenderedBoundaries.push(d))), i.allPendingTasks--, i.allPendingTasks === 0) {
                  var u = i.onAllReady;
                  u();
                }
              }
            } finally {
            }
          }
        }
        c.splice(0, e), t.destination !== null && ln(t, t.destination);
      } catch (z) {
        Q8(t, z), ir(t, z);
      } finally {
        lr = l, Ni.current = r, r === Ez && cr(a);
      }
    }
  }
  function Ya(t, a, r) {
    switch (r.parentFlushed = true, r.status) {
      case 0:
        var l = r.id = t.nextSegmentId++;
        return r.lastPushedText = false, r.textEmbedded = false, t = t.responseState, b(a, xA), b(a, t.placeholderPrefix), t = J(l.toString(16)), b(a, t), C1(a, VA);
      case 1:
        r.status = 2;
        var c = true;
        l = r.chunks;
        var e = 0;
        r = r.children;
        for (var h = 0; h < r.length; h++) {
          for (c = r[h]; e < c.index; e++)
            b(a, l[e]);
          c = vr(t, a, c);
        }
        for (; e < l.length - 1; e++)
          b(a, l[e]);
        return e < l.length && (c = C1(a, l[e])), c;
      default:
        throw Error($(390));
    }
  }
  function vr(t, a, r) {
    var l = r.boundary;
    if (l === null)
      return Ya(t, a, r);
    if (l.parentFlushed = true, l.forceClientRender)
      l = l.errorDigest, C1(a, wA), b(a, ZA), l && (b(a, yA), b(a, J(o2(l))), b(a, SA)), C1(a, FA), Ya(t, a, r);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var c = t.responseState, e = c.nextSuspenseID++;
      c = O(c.boundaryPrefix + e.toString(16)), l = l.id = c, Zz(a, t.responseState, l), Ya(t, a, r);
    } else if (l.byteSize > t.progressiveChunkSize)
      l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), Zz(a, t.responseState, l.id), Ya(t, a, r);
    else {
      if (C1(a, CA), r = l.completedSegments, r.length !== 1)
        throw Error($(391));
      vr(t, a, r[0]);
    }
    return C1(a, AA);
  }
  function Wz(t, a, r) {
    return JA(a, t.responseState, r.formatContext, r.id), vr(t, a, r), tZ(a, r.formatContext);
  }
  function jz(t, a, r) {
    for (var l = r.completedSegments, c = 0; c < l.length; c++)
      sM(t, a, r, l[c]);
    if (l.length = 0, t = t.responseState, l = r.id, r = r.rootSegmentID, b(a, t.startInlineScript), t.sentCompleteBoundaryFunction ? b(a, hZ) : (t.sentCompleteBoundaryFunction = true, b(a, eZ)), l === null)
      throw Error($(395));
    return r = J(r.toString(16)), b(a, l), b(a, iZ), b(a, t.segmentPrefix), b(a, r), C1(a, nZ);
  }
  function sM(t, a, r, l) {
    if (l.status === 2)
      return true;
    var c = l.id;
    if (c === -1) {
      if ((l.id = r.rootSegmentID) === -1)
        throw Error($(392));
      return Wz(t, a, l);
    }
    return Wz(t, a, l), t = t.responseState, b(a, t.startInlineScript), t.sentCompleteSegmentFunction ? b(a, rZ) : (t.sentCompleteSegmentFunction = true, b(a, aZ)), b(a, t.segmentPrefix), c = J(c.toString(16)), b(a, c), b(a, lZ), b(a, t.placeholderPrefix), b(a, c), C1(a, cZ);
  }
  function ln(t, a) {
    h0 = new Uint8Array(512), i0 = 0;
    try {
      var r = t.completedRootSegment;
      if (r !== null && t.pendingRootTasks === 0) {
        vr(t, a, r), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (r = 0; r < l.length - 1; r++)
          b(a, l[r]);
        r < l.length && C1(a, l[r]);
      }
      var c = t.clientRenderedBoundaries, e;
      for (e = 0; e < c.length; e++) {
        var h = c[e];
        l = a;
        var i = t.responseState, n = h.id, o = h.errorDigest, d = h.errorMessage, v = h.errorComponentStack;
        if (b(l, i.startInlineScript), i.sentClientRenderFunction ? b(l, dZ) : (i.sentClientRenderFunction = true, b(l, oZ)), n === null)
          throw Error($(395));
        if (b(l, n), b(l, vZ), (o || d || v) && (b(l, Wi), b(l, J(ji(o || "")))), (d || v) && (b(l, Wi), b(l, J(ji(d || "")))), v && (b(l, Wi), b(l, J(ji(v)))), !C1(l, gZ)) {
          t.destination = null, e++, c.splice(0, e);
          return;
        }
      }
      c.splice(0, e);
      var g = t.completedBoundaries;
      for (e = 0; e < g.length; e++)
        if (!jz(t, a, g[e])) {
          t.destination = null, e++, g.splice(0, e);
          return;
        }
      g.splice(0, e), fz(a), h0 = new Uint8Array(512), i0 = 0;
      var u = t.partialBoundaries;
      for (e = 0; e < u.length; e++) {
        var z = u[e];
        t: {
          c = t, h = a;
          var f = z.completedSegments;
          for (i = 0; i < f.length; i++)
            if (!sM(c, h, z, f[i])) {
              i++, f.splice(0, i);
              var m = false;
              break t;
            }
          f.splice(0, i), m = true;
        }
        if (!m) {
          t.destination = null, e++, u.splice(0, e);
          return;
        }
      }
      u.splice(0, e);
      var p = t.completedBoundaries;
      for (e = 0; e < p.length; e++)
        if (!jz(t, a, p[e])) {
          t.destination = null, e++, p.splice(0, e);
          return;
        }
      p.splice(0, e);
    } finally {
      fz(a), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && a.close();
    }
  }
  function Nz(t, a) {
    try {
      var r = t.abortableTasks;
      r.forEach(function(l) {
        return vM(l, t, a);
      }), r.clear(), t.destination !== null && ln(t, t.destination);
    } catch (l) {
      Q8(t, l), ir(t, l);
    }
  }
  cn.renderToReadableStream = function(t, a) {
    return new Promise(function(r, l) {
      var c, e, h = new Promise(function(d, v) {
        e = d, c = v;
      }), i = ZZ(t, dA(a ? a.identifierPrefix : void 0, a ? a.nonce : void 0, a ? a.bootstrapScriptContent : void 0, a ? a.bootstrapScripts : void 0, a ? a.bootstrapModules : void 0), vA(a ? a.namespaceURI : void 0), a ? a.progressiveChunkSize : void 0, a ? a.onError : void 0, e, function() {
        var d = new ReadableStream({ type: "bytes", pull: function(v) {
          if (i.status === 1)
            i.status = 2, Gz(v, i.fatalError);
          else if (i.status !== 2 && i.destination === null) {
            i.destination = v;
            try {
              ln(i, v);
            } catch (g) {
              Q8(i, g), ir(i, g);
            }
          }
        }, cancel: function() {
          Nz(i);
        } }, { highWaterMark: 0 });
        d.allReady = h, r(d);
      }, function(d) {
        h.catch(function() {
        }), l(d);
      }, c);
      if (a && a.signal) {
        var n = a.signal, o = function() {
          Nz(i, n.reason), n.removeEventListener("abort", o);
        };
        n.addEventListener("abort", o);
      }
      uM(i);
    });
  };
  cn.version = "18.2.0";
});
var MM = J1((x3) => {
  "use strict";
  var T6, zM;
  T6 = Mz(), zM = pM();
  x3.version = T6.version;
  x3.renderToString = T6.renderToString;
  x3.renderToStaticMarkup = T6.renderToStaticMarkup;
  x3.renderToNodeStream = T6.renderToNodeStream;
  x3.renderToStaticNodeStream = T6.renderToStaticNodeStream;
  x3.renderToReadableStream = zM.renderToReadableStream;
});
var HM = J1((gr) => {
  "use strict";
  var yZ = _(), FZ = Symbol.for("react.element"), kZ = Symbol.for("react.fragment"), RZ = Object.prototype.hasOwnProperty, OZ = yZ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, PZ = { key: true, ref: true, __self: true, __source: true };
  function fM(t, a, r) {
    var l, c = {}, e = null, h = null;
    r !== void 0 && (e = "" + r), a.key !== void 0 && (e = "" + a.key), a.ref !== void 0 && (h = a.ref);
    for (l in a)
      RZ.call(a, l) && !PZ.hasOwnProperty(l) && (c[l] = a[l]);
    if (t && t.defaultProps)
      for (l in a = t.defaultProps, a)
        c[l] === void 0 && (c[l] = a[l]);
    return { $$typeof: FZ, type: t, key: e, ref: h, props: c, _owner: OZ.current };
  }
  gr.Fragment = kZ;
  gr.jsx = fM;
  gr.jsxs = fM;
});
var S2 = J1((QR, mM) => {
  "use strict";
  mM.exports = HM();
});
function qZ(t) {
  var a = {};
  return function(r) {
    return a[r] === void 0 && (a[r] = t(r)), a[r];
  };
}
var tf;
var af = o1(() => {
  tf = qZ;
});
var rf = {};
u5(rf, { default: () => XZ });
var KZ;
var $Z;
var XZ;
var lf = o1(() => {
  af();
  KZ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $Z = tf(function(t) {
    return KZ.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }), XZ = $Z;
});
var nK = I(Bc(), 1);
var ev = I(Bc());
function hv({ build: t, mode: a, getLoadContext: r = ({ context: l }) => ({ ...l, cloudflare: { ...l.cloudflare, cf: l.cloudflare.request.cf } }) }) {
  let l = (0, ev.createRequestHandler)(t, a);
  return async (c) => {
    let e = await r({ ...c, request: c.request, context: { cloudflare: { ...c, cf: c.request.cf, ctx: { waitUntil: c.waitUntil, passThroughOnException: c.passThroughOnException }, caches } } });
    return l(c.request, e);
  };
}
function wc({ build: t, getLoadContext: a, mode: r }) {
  let l = hv({ build: t, getLoadContext: a, mode: r }), c = async (e) => {
    let h;
    e.request.headers.delete("if-none-match");
    try {
      h = await e.env.ASSETS.fetch(e.request.url, e.request.clone()), h = h && h.status >= 200 && h.status < 400 ? new Response(h.body, h) : void 0;
    } catch {
    }
    return h || (h = await l(e)), h;
  };
  return async (e) => {
    try {
      return await c(e);
    } catch {
      return new Response("Internal Error", { status: 500 });
    }
  };
}
var eo = {};
u5(eo, { assets: () => ix, assetsBuildDirectory: () => VF, entry: () => BF, future: () => CF, mode: () => xF, publicPath: () => LF, routes: () => wF });
var en = {};
u5(en, { default: () => VM });
L4();
function T1() {
  return T1 = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, T1.apply(this, arguments);
}
var k = I(_());
L4();
function B4(t, a) {
  if (t === false || t === null || typeof t > "u")
    throw new Error(a);
}
L4();
async function cp(t, a) {
  if (t.id in a)
    return a[t.id];
  try {
    let r = await import(t.module);
    return a[t.id] = r, r;
  } catch (r) {
    if (window.__remixContext.isSpaMode && typeof import.meta.hot < "u")
      throw console.error(`Error loading route module \`${t.module}\`:`, r), r;
    return window.location.reload(), new Promise(() => {
    });
  }
}
function ep(t, a, r) {
  let l = t.map((e) => {
    var h;
    let i = a[e.route.id], n = r.routes[e.route.id];
    return [n.css ? n.css.map((o) => ({ rel: "stylesheet", href: o })) : [], (i == null || (h = i.links) === null || h === void 0 ? void 0 : h.call(i)) || []];
  }).flat(2), c = XB(t, r);
  return op(l, c);
}
function oi(t) {
  return t != null && typeof t.page == "string";
}
function $B(t) {
  return t == null ? false : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
}
async function hp(t, a, r) {
  let l = await Promise.all(t.map(async (c) => {
    let e = await cp(a.routes[c.route.id], r);
    return e.links ? e.links() : [];
  }));
  return op(l.flat(1).filter($B).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map((c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }));
}
function di(t, a, r, l, c, e) {
  let h = dp(t), i = (d, v) => r[v] ? d.route.id !== r[v].route.id : true, n = (d, v) => {
    var g;
    return r[v].pathname !== d.pathname || ((g = r[v].route.path) === null || g === void 0 ? void 0 : g.endsWith("*")) && r[v].params["*"] !== d.params["*"];
  };
  return e === "data" && c.search !== h.search ? a.filter((d, v) => {
    if (!l.routes[d.route.id].hasLoader)
      return false;
    if (i(d, v) || n(d, v))
      return true;
    if (d.route.shouldRevalidate) {
      var u;
      let z = d.route.shouldRevalidate({ currentUrl: new URL(c.pathname + c.search + c.hash, window.origin), currentParams: ((u = r[0]) === null || u === void 0 ? void 0 : u.params) || {}, nextUrl: new URL(t, window.origin), nextParams: d.params, defaultShouldRevalidate: true });
      if (typeof z == "boolean")
        return z;
    }
    return true;
  }) : a.filter((d, v) => {
    let g = l.routes[d.route.id];
    return (e === "assets" || g.hasLoader) && (i(d, v) || n(d, v));
  });
}
function ip(t, a, r) {
  let l = dp(t);
  return vi(a.filter((c) => r.routes[c.route.id].hasLoader).map((c) => {
    let { pathname: e, search: h } = l, i = new URLSearchParams(h);
    return i.set("_data", c.route.id), `${e}?${i}`;
  }));
}
function np(t, a) {
  return vi(t.map((r) => {
    let l = a.routes[r.route.id], c = [l.module];
    return l.imports && (c = c.concat(l.imports)), c;
  }).flat(1));
}
function XB(t, a) {
  return vi(t.map((r) => {
    let l = a.routes[r.route.id], c = [l.module];
    return l.imports && (c = c.concat(l.imports)), c;
  }).flat(1));
}
function vi(t) {
  return [...new Set(t)];
}
function QB(t) {
  let a = {}, r = Object.keys(t).sort();
  for (let l of r)
    a[l] = t[l];
  return a;
}
function op(t, a) {
  let r = /* @__PURE__ */ new Set(), l = new Set(a);
  return t.reduce((c, e) => {
    if (a && !oi(e) && e.as === "script" && e.href && l.has(e.href))
      return c;
    let i = JSON.stringify(QB(e));
    return r.has(i) || (r.add(i), c.push({ key: i, link: e })), c;
  }, []);
}
function dp(t) {
  let a = I1(t);
  return a.search === void 0 && (a.search = ""), a;
}
var YB = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var JB = /[&><\u2028\u2029]/g;
function b8(t) {
  return t.replace(JB, (a) => YB[a]);
}
function gi(t) {
  return { __html: t };
}
function gp() {
  let t = k.useContext(w0);
  return B4(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
function Sa() {
  let t = k.useContext(D0);
  return B4(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
var T8 = k.createContext(void 0);
T8.displayName = "Remix";
function p3() {
  let t = k.useContext(T8);
  return B4(t, "You must render this element inside a <Remix> element"), t;
}
function up(t, a) {
  let [r, l] = k.useState(false), [c, e] = k.useState(false), { onFocus: h, onBlur: i, onMouseEnter: n, onMouseLeave: o, onTouchStart: d } = a, v = k.useRef(null);
  k.useEffect(() => {
    if (t === "render" && e(true), t === "viewport") {
      let z = (m) => {
        m.forEach((p) => {
          e(p.isIntersecting);
        });
      }, f = new IntersectionObserver(z, { threshold: 0.5 });
      return v.current && f.observe(v.current), () => {
        f.disconnect();
      };
    }
  }, [t]);
  let g = () => {
    t === "intent" && l(true);
  }, u = () => {
    t === "intent" && (l(false), e(false));
  };
  return k.useEffect(() => {
    if (r) {
      let z = setTimeout(() => {
        e(true);
      }, 100);
      return () => {
        clearTimeout(z);
      };
    }
  }, [r]), [c, v, { onFocus: D8(h, g), onBlur: D8(i, u), onMouseEnter: D8(n, g), onMouseLeave: D8(o, u), onTouchStart: D8(d, g) }];
}
var sp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var pp = k.forwardRef(({ to: t, prefetch: a = "none", ...r }, l) => {
  let c = typeof t == "string" && sp.test(t), e = S5(t), [h, i, n] = up(a, r);
  return k.createElement(k.Fragment, null, k.createElement(ci, T1({}, r, n, { ref: Mp(l, i), to: t })), h && !c ? k.createElement(ya, { page: e }) : null);
});
pp.displayName = "NavLink";
var F1 = k.forwardRef(({ to: t, prefetch: a = "none", ...r }, l) => {
  let c = typeof t == "string" && sp.test(t), e = S5(t), [h, i, n] = up(a, r);
  return k.createElement(k.Fragment, null, k.createElement(La, T1({}, r, n, { ref: Mp(l, i), to: t })), h && !c ? k.createElement(ya, { page: e }) : null);
});
F1.displayName = "Link";
function D8(t, a) {
  return (r) => {
    t && t(r), r.defaultPrevented || a(r);
  };
}
function ui(t, a, r) {
  if (r && !Za)
    return [t[0]];
  if (a) {
    let l = t.findIndex((c) => a[c.route.id]);
    return t.slice(0, l + 1);
  }
  return t;
}
function si() {
  let { isSpaMode: t, manifest: a, routeModules: r, criticalCss: l } = p3(), { errors: c, matches: e } = Sa(), h = ui(e, c, t), i = k.useMemo(() => ep(h, r, a), [h, r, a]);
  return k.createElement(k.Fragment, null, l ? k.createElement("style", { dangerouslySetInnerHTML: { __html: l } }) : null, i.map(({ key: n, link: o }) => oi(o) ? k.createElement(ya, T1({ key: n }, o)) : k.createElement("link", T1({ key: n }, o))));
}
function ya({ page: t, ...a }) {
  let { router: r } = gp(), l = k.useMemo(() => j1(r.routes, t, r.basename), [r.routes, t, r.basename]);
  return l ? k.createElement(aw, T1({ page: t, matches: l }, a)) : (console.warn(`Tried to prefetch ${t} but no routes matched.`), null);
}
function tw(t) {
  let { manifest: a, routeModules: r } = p3(), [l, c] = k.useState([]);
  return k.useEffect(() => {
    let e = false;
    return hp(t, a, r).then((h) => {
      e || c(h);
    }), () => {
      e = true;
    };
  }, [t, a, r]), l;
}
function aw({ page: t, matches: a, ...r }) {
  let l = U1(), { manifest: c } = p3(), { matches: e } = Sa(), h = k.useMemo(() => di(t, a, e, c, l, "data"), [t, a, e, c, l]), i = k.useMemo(() => di(t, a, e, c, l, "assets"), [t, a, e, c, l]), n = k.useMemo(() => ip(t, h, c), [h, t, c]), o = k.useMemo(() => np(i, c), [i, c]), d = tw(i);
  return k.createElement(k.Fragment, null, n.map((v) => k.createElement("link", T1({ key: v, rel: "prefetch", as: "fetch", href: v }, r))), o.map((v) => k.createElement("link", T1({ key: v, rel: "modulepreload", href: v }, r))), d.map(({ key: v, link: g }) => k.createElement("link", T1({ key: v }, g))));
}
function pi() {
  let { isSpaMode: t, routeModules: a } = p3(), { errors: r, matches: l, loaderData: c } = Sa(), e = U1(), h = ui(l, r, t), i = null;
  r && (i = r[h[h.length - 1].route.id]);
  let n = [], o = null, d = [];
  for (let v = 0; v < h.length; v++) {
    let g = h[v], u = g.route.id, z = c[u], f = g.params, m = a[u], p = [], s = { id: u, data: z, meta: [], params: g.params, pathname: g.pathname, handle: g.route.handle, error: i };
    if (d[v] = s, m != null && m.meta ? p = typeof m.meta == "function" ? m.meta({ data: z, params: f, location: e, matches: d, error: i }) : Array.isArray(m.meta) ? [...m.meta] : m.meta : o && (p = [...o]), p = p || [], !Array.isArray(p))
      throw new Error("The route at " + g.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
    s.meta = p, d[v] = s, n = [...p], o = n;
  }
  return k.createElement(k.Fragment, null, n.flat().map((v) => {
    if (!v)
      return null;
    if ("tagName" in v) {
      let { tagName: g, ...u } = v;
      return rw(g) ? k.createElement(g, T1({ key: JSON.stringify(u) }, u)) : (console.warn(`A meta object uses an invalid tagName: ${g}. Expected either 'link' or 'meta'`), null);
    }
    if ("title" in v)
      return k.createElement("title", { key: "title" }, String(v.title));
    if ("charset" in v && (v.charSet ??= v.charset, delete v.charset), "charSet" in v && v.charSet != null)
      return typeof v.charSet == "string" ? k.createElement("meta", { key: "charSet", charSet: v.charSet }) : null;
    if ("script:ld+json" in v)
      try {
        let g = JSON.stringify(v["script:ld+json"]);
        return k.createElement("script", { key: `script:ld+json:${g}`, type: "application/ld+json", dangerouslySetInnerHTML: { __html: g } });
      } catch {
        return null;
      }
    return k.createElement("meta", T1({ key: JSON.stringify(v) }, v));
  }));
}
function rw(t) {
  return typeof t == "string" && /^(meta|link)$/.test(t);
}
function zp(t) {
  return k.createElement(O8, t);
}
var Za = false;
function W8(t) {
  let { manifest: a, serverHandoffString: r, abortDelay: l, serializeError: c, isSpaMode: e } = p3(), { router: h, static: i, staticContext: n } = gp(), { matches: o } = Sa(), d = x4(), v = ui(o, null, e);
  k.useEffect(() => {
    Za = true;
  }, []);
  let g = (C, H) => {
    let L;
    return c && H instanceof Error ? L = c(H) : L = H, `${JSON.stringify(C)}:__remixContext.p(!1, ${b8(JSON.stringify(L))})`;
  }, u = (C, H, L) => {
    let w;
    try {
      w = JSON.stringify(L);
    } catch (S) {
      return g(H, S);
    }
    return `${JSON.stringify(H)}:__remixContext.p(${b8(w)})`;
  }, z = (C, H, L) => {
    let w;
    return c && L instanceof Error ? w = c(L) : w = L, `__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(H)}, !1, ${b8(JSON.stringify(w))})`;
  }, f = (C, H, L) => {
    let w;
    try {
      w = JSON.stringify(L);
    } catch (S) {
      return z(C, H, S);
    }
    return `__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(H)}, ${b8(w)})`;
  }, m = [], p = k.useMemo(() => {
    var C;
    let H = n ? `window.__remixContext = ${r};` : " ", L = n?.activeDeferreds;
    H += L ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof l == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${l});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(L).map(([S, P]) => {
      let q = new Set(P.pendingKeys), d1 = P.deferredKeys.map((l1) => {
        if (q.has(l1))
          return m.push(k.createElement(vp, { key: `${S} | ${l1}`, deferredData: P, routeId: S, dataKey: l1, scriptProps: t, serializeData: f, serializeError: z })), `${JSON.stringify(l1)}:__remixContext.n(${JSON.stringify(S)}, ${JSON.stringify(l1)})`;
        {
          let v1 = P.data[l1];
          return typeof v1._error < "u" ? g(l1, v1._error) : u(S, l1, v1._data);
        }
      }).join(`,
`);
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(S)}], {${d1}});`;
    }).join(`
`) + (m.length > 0 ? `__remixContext.a=${m.length};` : "") : "";
    let w = i ? `${(C = a.hmr) !== null && C !== void 0 && C.runtime ? `import ${JSON.stringify(a.hmr.runtime)};` : ""}import ${JSON.stringify(a.url)};
${v.map((S, P) => `import * as route${P} from ${JSON.stringify(a.routes[S.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${v.map((S, P) => `${JSON.stringify(S.route.id)}:route${P}`).join(",")}};

import(${JSON.stringify(a.entry.module)});` : " ";
    return k.createElement(k.Fragment, null, k.createElement("script", T1({}, t, { suppressHydrationWarning: true, dangerouslySetInnerHTML: gi(H), type: void 0 })), k.createElement("script", T1({}, t, { suppressHydrationWarning: true, dangerouslySetInnerHTML: gi(w), type: "module", async: true })));
  }, []);
  if (!i && typeof __remixContext == "object" && __remixContext.a)
    for (let C = 0; C < __remixContext.a; C++)
      m.push(k.createElement(vp, { key: C, scriptProps: t, serializeData: f, serializeError: z }));
  let s = k.useMemo(() => {
    if (d.location) {
      let C = j1(h.routes, d.location, h.basename);
      return B4(C, `No routes match path "${d.location.pathname}"`), C;
    }
    return [];
  }, [d.location, h.routes, h.basename]), M = v.concat(s).map((C) => {
    let H = a.routes[C.route.id];
    return (H.imports || []).concat([H.module]);
  }).flat(1), x = Za ? [] : a.entry.imports.concat(M);
  return Za ? null : k.createElement(k.Fragment, null, k.createElement("link", { rel: "modulepreload", href: a.url, crossOrigin: t.crossOrigin }), k.createElement("link", { rel: "modulepreload", href: a.entry.module, crossOrigin: t.crossOrigin }), cw(x).map((C) => k.createElement("link", { key: C, rel: "modulepreload", href: C, crossOrigin: t.crossOrigin })), p, m);
}
function vp({ dataKey: t, deferredData: a, routeId: r, scriptProps: l, serializeData: c, serializeError: e }) {
  return typeof document > "u" && a && t && r && B4(a.pendingKeys.includes(t), `Deferred data for route ${r} with key ${t} was not pending but tried to render a script for it.`), k.createElement(k.Suspense, { fallback: typeof document > "u" && a && t && r ? null : k.createElement("script", T1({}, l, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: " " } })) }, typeof document > "u" && a && t && r ? k.createElement(zp, { resolve: a.data[t], errorElement: k.createElement(lw, { dataKey: t, routeId: r, scriptProps: l, serializeError: e }), children: (h) => k.createElement("script", T1({}, l, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: c(r, t, h) } })) }) : k.createElement("script", T1({}, l, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: " " } })));
}
function lw({ dataKey: t, routeId: a, scriptProps: r, serializeError: l }) {
  let c = R6();
  return k.createElement("script", T1({}, r, { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: l(a, t, c) } }));
}
function cw(t) {
  return [...new Set(t)];
}
var zi = () => null;
function Mp(...t) {
  return (a) => {
    t.forEach((r) => {
      typeof r == "function" ? r(a) : r != null && (r.current = a);
    });
  };
}
var i2 = I(_());
L4();
var Fa = class extends i2.Component {
  constructor(a) {
    super(a), this.state = { error: a.error || null, location: a.location };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, r) {
    return r.location !== a.location ? { error: a.error || null, location: a.location } : { error: a.error || r.error, location: r.location };
  }
  render() {
    return this.state.error ? i2.createElement(Mi, { error: this.state.error }) : this.props.children;
  }
};
function Mi({ error: t }) {
  if (console.error(t), N1(t))
    return i2.createElement(fp, { title: "Unhandled Thrown Response!" }, i2.createElement("h1", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, t.status, " ", t.statusText));
  let a;
  if (t instanceof Error)
    a = t;
  else {
    let r = t == null ? "Unknown Error" : typeof t == "object" && "toString" in t ? t.toString() : JSON.stringify(t);
    a = new Error(r);
  }
  return i2.createElement(fp, { title: "Application Error!" }, i2.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, i2.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), i2.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, a.stack)));
}
function fp({ title: t, children: a }) {
  return i2.createElement("html", { lang: "en" }, i2.createElement("head", null, i2.createElement("meta", { charSet: "utf-8" }), i2.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), i2.createElement("title", null, t)), i2.createElement("body", null, a, i2.createElement("script", { dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            ` } })));
}
var A4 = I(_());
L4();
var w4 = I(_());
function Hp() {
  return w4.createElement("html", { lang: "en" }, w4.createElement("head", null, w4.createElement("meta", { charSet: "utf-8" }), w4.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" })), w4.createElement("body", null, w4.createElement(W8, null), w4.createElement("script", { dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            ` } }), " "));
}
function ew(t) {
  let a = {};
  return Object.values(t).forEach((r) => {
    let l = r.parentId || "";
    a[l] || (a[l] = []), a[l].push(r);
  }), a;
}
function hw(t, a, r) {
  let l = iw(a), c = a.HydrateFallback && (!r || t.id === "root") ? a.HydrateFallback : t.id === "root" ? Hp : void 0, e = a.ErrorBoundary ? a.ErrorBoundary : t.id === "root" ? () => A4.createElement(Mi, { error: s3() }) : void 0;
  return t.id === "root" && a.Layout ? { ...l ? { element: A4.createElement(a.Layout, null, A4.createElement(l)) } : { Component: l }, ...e ? { errorElement: A4.createElement(a.Layout, null, A4.createElement(e)) } : { ErrorBoundary: e }, ...c ? { hydrateFallbackElement: A4.createElement(a.Layout, null, A4.createElement(c)) } : { HydrateFallback: c } } : { Component: l, ErrorBoundary: e, HydrateFallback: c };
}
function fi(t, a, r, l, c = "", e = ew(t), h = Promise.resolve({ Component: () => null })) {
  return (e[c] || []).map((i) => {
    let n = a[i.id];
    B4(n, "No `routeModule` available to create server routes");
    let o = { ...hw(i, n, l), caseSensitive: i.caseSensitive, id: i.id, index: i.index, path: i.path, handle: n.handle, lazy: l ? () => h : void 0, loader: i.hasLoader || i.hasClientLoader ? () => null : void 0 }, d = fi(t, a, r, l, i.id, e, h);
    return d.length > 0 && (o.children = d), o;
  });
}
function iw(t) {
  if (t.default == null)
    return;
  if (!(typeof t.default == "object" && Object.keys(t.default).length === 0))
    return t.default;
}
function mp(t, a, r) {
  return r && t.id !== "root" || a.clientLoader != null && (a.clientLoader.hydrate === true || t.hasLoader !== true);
}
var ka = I(_());
L4();
var xp = "positions";
function Hi({ getKey: t, ...a }) {
  let { isSpaMode: r } = p3(), l = U1(), c = V4();
  Aa({ getKey: t, storageKey: xp });
  let e = ka.useMemo(() => {
    if (!t)
      return null;
    let i = t(l, c);
    return i !== l.key ? i : null;
  }, []);
  if (r)
    return null;
  let h = ((i, n) => {
    if (!window.history.state || !window.history.state.key) {
      let o = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: o }, "");
    }
    try {
      let d = JSON.parse(sessionStorage.getItem(i) || "{}")[n || window.history.state.key];
      typeof d == "number" && window.scrollTo(0, d);
    } catch (o) {
      console.error(o), sessionStorage.removeItem(i);
    }
  }).toString();
  return ka.createElement("script", T1({}, a, { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `(${h})(${JSON.stringify(xp)}, ${JSON.stringify(e)})` } }));
}
var Ra = I(_());
var Oa = I(Bp());
function xi({ context: t, url: a, abortDelay: r }) {
  typeof a == "string" && (a = new URL(a));
  let { manifest: l, routeModules: c, criticalCss: e, serverHandoffString: h } = t, i = fi(l.routes, c, t.future, t.isSpaMode);
  t.staticHandlerContext.loaderData = { ...t.staticHandlerContext.loaderData };
  for (let o of t.staticHandlerContext.matches) {
    let d = o.route.id, v = c[d], g = t.manifest.routes[d];
    v && mp(g, v, t.isSpaMode) && (v.HydrateFallback || !g.hasLoader) && (t.staticHandlerContext.loaderData[d] = void 0);
  }
  let n = (0, Oa.createStaticRouter)(i, t.staticHandlerContext, { future: { v7_partialHydration: true, v7_relativeSplatPath: t.future.v3_relativeSplatPath } });
  return Ra.createElement(T8.Provider, { value: { manifest: l, routeModules: c, criticalCss: e, serverHandoffString: h, future: t.future, isSpaMode: t.isSpaMode, serializeError: t.serializeError, abortDelay: r } }, Ra.createElement(Fa, { location: n.state.location }, Ra.createElement(Oa.StaticRouterProvider, { router: n, context: t.staticHandlerContext, hydrate: false })));
}
var mw = " daum[ /]| deusu/| yadirectfetcher|(?:^| )site|(?:^|[^g])news|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bot(?:[^\\w]|_|$)|(?<! ya(?:yandex)?)search|(?<!(?:lib))http|(?<![hg]m)score|@[a-z]|\\(at\\)[a-z]|\\[at\\][a-z]|^12345|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(\\.\\d+)?(?:\\.\\d{1,10})?)?(?:,|$)|^[^ ]{50,}$|^active|^ad muncher|^amaya|^anglesharp/|^avsdevicesdk/|^bidtellect/|^biglotron|^bot|^btwebclient/|^clamav[ /]|^client/|^cobweb/|^coccoc|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^fdm[ /]\\d|^getright/|^gozilla/|^hatena|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^linkdex|^metauri|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^nuclei|^offline explorer|^php|^postman|^postrank|^python|^rank|^read|^reed|^rest|^serf|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^tumblr/|^user-agent:|^valid|^venus/fedoraplanet|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adbeat\\.com|appinsights|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check|chrome-lighthouse|chromeframe|classifier|cloud|crawl|cryptoapi|dareboost|datanyze|dataprovider|dejaclick|dmbrowser|download|evc-batch/|feed|firephp|freesafeip|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|inspect|iplabel|ips-agent|java(?!;)|library|mail\\.ru/|manager|monitor|neustar wpm|nutch|offbyone|optimize|pageburst|parser|perl|phantom|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reader|reputation|resolver|retriever|rexx;|rigor|robot|rss|scan|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|stumbleupon\\.com|supercleaner|synapse|synthetic|torrent|trace|transcoder|twingly recon|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|wordpress|zgrab";
var xw = /bot|spider|crawl|http|lighthouse/i;
var Pa;
function wp(t) {
  if (typeof Pa > "u")
    try {
      Pa = new RegExp(mw, "i");
    } catch {
      Pa = xw;
    }
  return Boolean(t) && Pa.test(t);
}
var xM = I(MM(), 1);
var CM = I(S2(), 1);
async function VM(t, a, r, l, c) {
  let e = await (0, xM.renderToReadableStream)((0, CM.jsx)(xi, { context: l, url: t.url }), { signal: t.signal, onError(h) {
    console.error(h), a = 500;
  } });
  return wp(t.headers.get("user-agent") || "") && await e.allReady, r.set("Content-Type", "text/html"), new Response(e, { headers: r, status: a });
}
var ro = {};
u5(ro, { default: () => mF, links: () => MF, meta: () => zF });
var LM = "/build/_assets/tailwind-5BHFKNHJ.css";
var hn = I(_(), 1);
var L3 = I(_(), 1);
var BM = I(_(), 1);
var ur = (0, BM.createContext)({ transformPagePoint: (t) => t, isStatic: false, reducedMotion: "never" });
var wM = I(_(), 1);
var k4 = (0, wM.createContext)({});
var A0 = I(_(), 1);
var AM = I(_(), 1);
var R4 = (0, AM.createContext)(null);
var sr = I(_(), 1);
var O4 = typeof document < "u";
var W6 = O4 ? sr.useLayoutEffect : sr.useEffect;
var ZM = I(_(), 1);
var pr = (0, ZM.createContext)({ strict: false });
var j6 = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var IZ = "framerAppearId";
var zr = "data-" + j6(IZ);
var N6 = { skipAnimations: false, useManualTiming: false };
var Mr = class {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(a) {
    if (!this.scheduled.has(a))
      return this.scheduled.add(a), this.order.push(a), true;
  }
  remove(a) {
    let r = this.order.indexOf(a);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(a));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
};
function SM(t) {
  let a = new Mr(), r = new Mr(), l = 0, c = false, e = false, h = /* @__PURE__ */ new WeakSet(), i = { schedule: (n, o = false, d = false) => {
    let v = d && c, g = v ? a : r;
    return o && h.add(n), g.add(n) && v && c && (l = a.order.length), n;
  }, cancel: (n) => {
    r.remove(n), h.delete(n);
  }, process: (n) => {
    if (c) {
      e = true;
      return;
    }
    if (c = true, [a, r] = [r, a], r.clear(), l = a.order.length, l)
      for (let o = 0; o < l; o++) {
        let d = a.order[o];
        h.has(d) && (i.schedule(d), t()), d(n);
      }
    c = false, e && (e = false, i.process(n));
  } };
  return i;
}
var fr = ["prepare", "read", "update", "preRender", "render", "postRender"];
var bZ = 40;
function Hr(t, a) {
  let r = false, l = true, c = { delta: 0, timestamp: 0, isProcessing: false }, e = fr.reduce((v, g) => (v[g] = SM(() => r = true), v), {}), h = (v) => {
    e[v].process(c);
  }, i = () => {
    let v = N6.useManualTiming ? c.timestamp : performance.now();
    r = false, c.delta = l ? 1e3 / 60 : Math.max(Math.min(v - c.timestamp, bZ), 1), c.timestamp = v, c.isProcessing = true, fr.forEach(h), c.isProcessing = false, r && a && (l = false, t(i));
  }, n = () => {
    r = true, l = true, c.isProcessing || t(i);
  };
  return { schedule: fr.reduce((v, g) => {
    let u = e[g];
    return v[g] = (z, f = false, m = false) => (r || n(), u.schedule(z, f, m)), v;
  }, {}), cancel: (v) => fr.forEach((g) => e[g].cancel(v)), state: c, steps: e };
}
var { schedule: _6, cancel: MO } = Hr(queueMicrotask, false);
function yM(t, a, r, l) {
  let { visualElement: c } = (0, A0.useContext)(k4), e = (0, A0.useContext)(pr), h = (0, A0.useContext)(R4), i = (0, A0.useContext)(ur).reducedMotion, n = (0, A0.useRef)();
  l = l || e.renderer, !n.current && l && (n.current = l(t, { visualState: a, parent: c, props: r, presenceContext: h, blockInitialAnimation: h ? h.initial === false : false, reducedMotionConfig: i }));
  let o = n.current;
  (0, A0.useInsertionEffect)(() => {
    o && o.update(r, h);
  });
  let d = (0, A0.useRef)(Boolean(r[zr] && !window.HandoffComplete));
  return W6(() => {
    o && (_6.postRender(o.render), d.current && o.animationState && o.animationState.animateChanges());
  }), (0, A0.useEffect)(() => {
    o && (o.updateFeatures(), !d.current && o.animationState && o.animationState.animateChanges(), d.current && (d.current = false, window.HandoffComplete = true));
  }), o;
}
var FM = I(_(), 1);
function P5(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function kM(t, a, r) {
  return (0, FM.useCallback)((l) => {
    l && t.mount && t.mount(l), a && (l ? a.mount(l) : a.unmount()), r && (typeof r == "function" ? r(l) : P5(r) && (r.current = l));
  }, [a]);
}
var Vr = I(_(), 1);
function E5(t) {
  return typeof t == "string" || Array.isArray(t);
}
function P4(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
var mr = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var Y8 = ["initial", ...mr];
function V3(t) {
  return P4(t.animate) || Y8.some((a) => E5(t[a]));
}
function xr(t) {
  return Boolean(V3(t) || t.variants);
}
function RM(t, a) {
  if (V3(t)) {
    let { initial: r, animate: l } = t;
    return { initial: r === false || E5(r) ? r : void 0, animate: E5(l) ? l : void 0 };
  }
  return t.inherit !== false ? a : {};
}
function PM(t) {
  let { initial: a, animate: r } = RM(t, (0, Vr.useContext)(k4));
  return (0, Vr.useMemo)(() => ({ initial: a, animate: r }), [OM(a), OM(r)]);
}
function OM(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
var EM = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
var C3 = {};
for (let t in EM)
  C3[t] = { isEnabled: (a) => EM[t].some((r) => !!a[r]) };
function IM(t) {
  for (let a in t)
    C3[a] = { ...C3[a], ...t[a] };
}
var bM = I(_(), 1);
var U6 = (0, bM.createContext)({});
var DM = I(_(), 1);
var Cr = (0, DM.createContext)({});
var TM = Symbol.for("motionComponentSymbol");
function WM({ preloadedFeatures: t, createVisualElement: a, useRender: r, useVisualState: l, Component: c }) {
  t && IM(t);
  function e(i, n) {
    let o, d = { ...(0, L3.useContext)(ur), ...i, layoutId: DZ(i) }, { isStatic: v } = d, g = PM(i), u = l(i, v);
    if (!v && O4) {
      g.visualElement = yM(c, u, d, a);
      let z = (0, L3.useContext)(Cr), f = (0, L3.useContext)(pr).strict;
      g.visualElement && (o = g.visualElement.loadFeatures(d, f, t, z));
    }
    return hn.createElement(k4.Provider, { value: g }, o && g.visualElement ? hn.createElement(o, { visualElement: g.visualElement, ...d }) : null, r(c, i, kM(u, g.visualElement, n), u, v, g.visualElement));
  }
  let h = (0, L3.forwardRef)(e);
  return h[TM] = c, h;
}
function DZ({ layoutId: t }) {
  let a = (0, L3.useContext)(U6).id;
  return a && t !== void 0 ? a + "-" + t : t;
}
function jM(t) {
  function a(l, c = {}) {
    return WM(t(l, c));
  }
  if (typeof Proxy > "u")
    return a;
  let r = /* @__PURE__ */ new Map();
  return new Proxy(a, { get: (l, c) => (r.has(c) || r.set(c, a(c)), r.get(c)) });
}
var NM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function G6(t) {
  return typeof t != "string" || t.includes("-") ? false : !!(NM.indexOf(t) > -1 || /[A-Z]/.test(t));
}
var tt = I(_(), 1);
var YM = I(_(), 1);
var q6 = {};
function _M(t) {
  Object.assign(q6, t);
}
var E4 = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
var _2 = new Set(E4);
function Lr(t, { layout: a, layoutId: r }) {
  return _2.has(t) || t.startsWith("origin") || (a || r !== void 0) && (!!q6[t] || t === "opacity");
}
var A1 = (t) => Boolean(t && t.getVelocity);
var TZ = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
var WZ = E4.length;
function UM(t, { enableHardwareAcceleration: a = true, allowTransformNone: r = true }, l, c) {
  let e = "";
  for (let h = 0; h < WZ; h++) {
    let i = E4[h];
    if (t[i] !== void 0) {
      let n = TZ[i] || i;
      e += `${n}(${t[i]}) `;
    }
  }
  return a && !t.z && (e += "translateZ(0)"), e = e.trim(), c ? e = c(t, l ? "" : e) : r && l && (e = "none"), e;
}
var GM = (t) => (a) => typeof a == "string" && a.startsWith(t);
var Br = GM("--");
var jZ = GM("var(--");
var K6 = (t) => jZ(t) && NZ.test(t);
var NZ = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i;
var qM = (t, a) => a && typeof t == "number" ? a.transform(t) : t;
var y2 = (t, a, r) => r > a ? a : r < t ? t : r;
var i5 = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t };
var I4 = { ...i5, transform: (t) => y2(0, 1, t) };
var J8 = { ...i5, default: 1 };
var b4 = (t) => Math.round(t * 1e5) / 1e5;
var $6 = /(-)?([\d]*\.?[\d])+/g;
var KM = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var $M = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function I5(t) {
  return typeof t == "string";
}
var t7 = (t) => ({ test: (a) => I5(a) && a.endsWith(t) && a.split(" ").length === 1, parse: parseFloat, transform: (a) => `${a}${t}` });
var n5 = t7("deg");
var F2 = t7("%");
var W = t7("px");
var XM = t7("vh");
var QM = t7("vw");
var nn = { ...F2, parse: (t) => F2.parse(t) / 100, transform: (t) => F2.transform(t * 100) };
var on = { ...i5, transform: Math.round };
var wr = { borderWidth: W, borderTopWidth: W, borderRightWidth: W, borderBottomWidth: W, borderLeftWidth: W, borderRadius: W, radius: W, borderTopLeftRadius: W, borderTopRightRadius: W, borderBottomRightRadius: W, borderBottomLeftRadius: W, width: W, maxWidth: W, height: W, maxHeight: W, size: W, top: W, right: W, bottom: W, left: W, padding: W, paddingTop: W, paddingRight: W, paddingBottom: W, paddingLeft: W, margin: W, marginTop: W, marginRight: W, marginBottom: W, marginLeft: W, rotate: n5, rotateX: n5, rotateY: n5, rotateZ: n5, scale: J8, scaleX: J8, scaleY: J8, scaleZ: J8, skew: n5, skewX: n5, skewY: n5, distance: W, translateX: W, translateY: W, translateZ: W, x: W, y: W, z: W, perspective: W, transformPerspective: W, opacity: I4, originX: nn, originY: nn, originZ: W, zIndex: on, fillOpacity: I4, strokeOpacity: I4, numOctaves: on };
function X6(t, a, r, l) {
  let { style: c, vars: e, transform: h, transformOrigin: i } = t, n = false, o = false, d = true;
  for (let v in a) {
    let g = a[v];
    if (Br(v)) {
      e[v] = g;
      continue;
    }
    let u = wr[v], z = qM(g, u);
    if (_2.has(v)) {
      if (n = true, h[v] = z, !d)
        continue;
      g !== (u.default || 0) && (d = false);
    } else
      v.startsWith("origin") ? (o = true, i[v] = z) : c[v] = z;
  }
  if (a.transform || (n || l ? c.transform = UM(t.transform, r, d, l) : c.transform && (c.transform = "none")), o) {
    let { originX: v = "50%", originY: g = "50%", originZ: u = 0 } = i;
    c.transformOrigin = `${v} ${g} ${u}`;
  }
}
var Q6 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function dn(t, a, r) {
  for (let l in a)
    !A1(a[l]) && !Lr(l, r) && (t[l] = a[l]);
}
function _Z({ transformTemplate: t }, a, r) {
  return (0, YM.useMemo)(() => {
    let l = Q6();
    return X6(l, a, { enableHardwareAcceleration: !r }, t), Object.assign({}, l.vars, l.style);
  }, [a]);
}
function UZ(t, a, r) {
  let l = t.style || {}, c = {};
  return dn(c, l, t), Object.assign(c, _Z(t, a, r)), c;
}
function JM(t, a, r) {
  let l = {}, c = UZ(t, a, r);
  return t.drag && t.dragListener !== false && (l.draggable = false, c.userSelect = c.WebkitUserSelect = c.WebkitTouchCallout = "none", c.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (l.tabIndex = 0), l.style = c, l;
}
var GZ = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function a7(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || GZ.has(t);
}
var cf = (t) => !a7(t);
function QZ(t) {
  t && (cf = (a) => a.startsWith("on") ? !a7(a) : t(a));
}
try {
  QZ((lf(), j3(rf)).default);
} catch {
}
function ef(t, a, r) {
  let l = {};
  for (let c in t)
    c === "values" && typeof t.values == "object" || (cf(c) || r === true && a7(c) || !a && !a7(c) || t.draggable && c.startsWith("onDrag")) && (l[c] = t[c]);
  return l;
}
var df = I(_(), 1);
function hf(t, a, r) {
  return typeof t == "string" ? t : W.transform(a + r * t);
}
function nf(t, a, r) {
  let l = hf(a, t.x, t.width), c = hf(r, t.y, t.height);
  return `${l} ${c}`;
}
var YZ = { offset: "stroke-dashoffset", array: "stroke-dasharray" };
var JZ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function of(t, a, r = 1, l = 0, c = true) {
  t.pathLength = 1;
  let e = c ? YZ : JZ;
  t[e.offset] = W.transform(-l);
  let h = W.transform(a), i = W.transform(r);
  t[e.array] = `${h} ${i}`;
}
function Y6(t, { attrX: a, attrY: r, attrScale: l, originX: c, originY: e, pathLength: h, pathSpacing: i = 1, pathOffset: n = 0, ...o }, d, v, g) {
  if (X6(t, o, d, g), v) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  let { attrs: u, style: z, dimensions: f } = t;
  u.transform && (f && (z.transform = u.transform), delete u.transform), f && (c !== void 0 || e !== void 0 || z.transform) && (z.transformOrigin = nf(f, c !== void 0 ? c : 0.5, e !== void 0 ? e : 0.5)), a !== void 0 && (u.x = a), r !== void 0 && (u.y = r), l !== void 0 && (u.scale = l), h !== void 0 && of(u, h, i, n, false);
}
var Ar = () => ({ ...Q6(), attrs: {} });
var J6 = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function vf(t, a, r, l) {
  let c = (0, df.useMemo)(() => {
    let e = Ar();
    return Y6(e, a, { enableHardwareAcceleration: false }, J6(l), t.transformTemplate), { ...e.attrs, style: { ...e.style } };
  }, [a]);
  if (t.style) {
    let e = {};
    dn(e, t.style, t), c.style = { ...e, ...c.style };
  }
  return c;
}
function gf(t = false) {
  return (r, l, c, { latestValues: e }, h) => {
    let n = (G6(r) ? vf : JM)(l, e, h, r), o = ef(l, typeof r == "string", t), d = r !== tt.Fragment ? { ...o, ...n, ref: c } : {}, { children: v } = l, g = (0, tt.useMemo)(() => A1(v) ? v.get() : v, [v]);
    return (0, tt.createElement)(r, { ...d, children: g });
  };
}
function Zr(t, { style: a, vars: r }, l, c) {
  Object.assign(t.style, a, c && c.getProjectionStyles(l));
  for (let e in r)
    t.style.setProperty(e, r[e]);
}
var Sr = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function yr(t, a, r, l) {
  Zr(t, a, void 0, l);
  for (let c in a.attrs)
    t.setAttribute(Sr.has(c) ? c : j6(c), a.attrs[c]);
}
function at(t, a) {
  let { style: r } = t, l = {};
  for (let c in r)
    (A1(r[c]) || a.style && A1(a.style[c]) || Lr(c, t)) && (l[c] = r[c]);
  return l;
}
function Fr(t, a) {
  let r = at(t, a);
  for (let l in t)
    if (A1(t[l]) || A1(a[l])) {
      let c = E4.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      r[c] = t[l];
    }
  return r;
}
var vn = I(_(), 1);
function rt(t, a, r, l = {}, c = {}) {
  return typeof a == "function" && (a = a(r !== void 0 ? r : t.custom, l, c)), typeof a == "string" && (a = t.variants && t.variants[a]), typeof a == "function" && (a = a(r !== void 0 ? r : t.custom, l, c)), a;
}
var uf = I(_(), 1);
function kr(t) {
  let a = (0, uf.useRef)(null);
  return a.current === null && (a.current = t()), a.current;
}
var B3 = (t) => Array.isArray(t);
var sf = (t) => Boolean(t && typeof t == "object" && t.mix && t.toValue);
var pf = (t) => B3(t) ? t[t.length - 1] || 0 : t;
function lt(t) {
  let a = A1(t) ? t.get() : t;
  return sf(a) ? a.toValue() : a;
}
function tS({ scrapeMotionValuesFromProps: t, createRenderState: a, onMount: r }, l, c, e) {
  let h = { latestValues: aS(l, c, e, t), renderState: a() };
  return r && (h.mount = (i) => r(l, i, h)), h;
}
var Rr = (t) => (a, r) => {
  let l = (0, vn.useContext)(k4), c = (0, vn.useContext)(R4), e = () => tS(t, a, l, c);
  return r ? e() : kr(e);
};
function aS(t, a, r, l) {
  let c = {}, e = l(t, {});
  for (let g in e)
    c[g] = lt(e[g]);
  let { initial: h, animate: i } = t, n = V3(t), o = xr(t);
  a && o && !n && t.inherit !== false && (h === void 0 && (h = a.initial), i === void 0 && (i = a.animate));
  let d = r ? r.initial === false : false;
  d = d || h === false;
  let v = d ? i : h;
  return v && typeof v != "boolean" && !P4(v) && (Array.isArray(v) ? v : [v]).forEach((u) => {
    let z = rt(t, u);
    if (!z)
      return;
    let { transitionEnd: f, transition: m, ...p } = z;
    for (let s in p) {
      let M = p[s];
      if (Array.isArray(M)) {
        let x = d ? M.length - 1 : 0;
        M = M[x];
      }
      M !== null && (c[s] = M);
    }
    for (let s in f)
      c[s] = f[s];
  }), c;
}
var i1 = (t) => t;
var { schedule: X, cancel: k2, state: W1, steps: Or } = Hr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : i1, true);
var zf = { useVisualState: Rr({ scrapeMotionValuesFromProps: Fr, createRenderState: Ar, onMount: (t, a, { renderState: r, latestValues: l }) => {
  X.read(() => {
    try {
      r.dimensions = typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
    } catch {
      r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }), X.render(() => {
    Y6(r, l, { enableHardwareAcceleration: false }, J6(a.tagName), t.transformTemplate), yr(a, r);
  });
} }) };
var Mf = { useVisualState: Rr({ scrapeMotionValuesFromProps: at, createRenderState: Q6 }) };
function ff(t, { forwardMotionProps: a = false }, r, l) {
  return { ...G6(t) ? zf : Mf, preloadedFeatures: r, useRender: gf(a), createVisualElement: l, Component: t };
}
function U2(t, a, r, l = { passive: true }) {
  return t.addEventListener(a, r, l), () => t.removeEventListener(a, r);
}
var Pr = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
function w3(t, a = "page") {
  return { point: { x: t[a + "X"], y: t[a + "Y"] } };
}
var Hf = (t) => (a) => Pr(a) && t(a, w3(a));
function G2(t, a, r, l) {
  return U2(t, a, Hf(r), l);
}
var rS = (t, a) => (r) => a(t(r));
var H2 = (...t) => t.reduce(rS);
function Vf(t) {
  let a = null;
  return () => {
    let r = () => {
      a = null;
    };
    return a === null ? (a = t, r) : false;
  };
}
var mf = Vf("dragHorizontal");
var xf = Vf("dragVertical");
function gn(t) {
  let a = false;
  if (t === "y")
    a = xf();
  else if (t === "x")
    a = mf();
  else {
    let r = mf(), l = xf();
    r && l ? a = () => {
      r(), l();
    } : (r && r(), l && l());
  }
  return a;
}
function Er() {
  let t = gn(true);
  return t ? (t(), false) : true;
}
var r2 = class {
  constructor(a) {
    this.isMounted = false, this.node = a;
  }
  update() {
  }
};
function Cf(t, a) {
  let r = "pointer" + (a ? "enter" : "leave"), l = "onHover" + (a ? "Start" : "End"), c = (e, h) => {
    if (e.pointerType === "touch" || Er())
      return;
    let i = t.getProps();
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", a), i[l] && X.update(() => i[l](e, h));
  };
  return G2(t.current, r, c, { passive: !t.getProps()[l] });
}
var Ir = class extends r2 {
  mount() {
    this.unmount = H2(Cf(this.node, true), Cf(this.node, false));
  }
  unmount() {
  }
};
var br = class extends r2 {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let a = false;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = true;
    }
    !a || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = H2(U2(this.node.current, "focus", () => this.onFocus()), U2(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};
var un = (t, a) => a ? t === a ? true : un(t, a.parentElement) : false;
function sn(t, a) {
  if (!a)
    return;
  let r = new PointerEvent("pointer" + t);
  a(r, w3(r));
}
var Dr = class extends r2 {
  constructor() {
    super(...arguments), this.removeStartListeners = i1, this.removeEndListeners = i1, this.removeAccessibleListeners = i1, this.startPointerPress = (a, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      let l = this.node.getProps(), e = G2(window, "pointerup", (i, n) => {
        if (!this.checkPressEnd())
          return;
        let { onTap: o, onTapCancel: d, globalTapTarget: v } = this.node.getProps();
        X.update(() => {
          !v && !un(this.node.current, i.target) ? d && d(i, n) : o && o(i, n);
        });
      }, { passive: !(l.onTap || l.onPointerUp) }), h = G2(window, "pointercancel", (i, n) => this.cancelPress(i, n), { passive: !(l.onTapCancel || l.onPointerCancel) });
      this.removeEndListeners = H2(e, h), this.startPress(a, r);
    }, this.startAccessiblePress = () => {
      let a = (e) => {
        if (e.key !== "Enter" || this.isPressing)
          return;
        let h = (i) => {
          i.key !== "Enter" || !this.checkPressEnd() || sn("up", (n, o) => {
            let { onTap: d } = this.node.getProps();
            d && X.update(() => d(n, o));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = U2(this.node.current, "keyup", h), sn("down", (i, n) => {
          this.startPress(i, n);
        });
      }, r = U2(this.node.current, "keydown", a), l = () => {
        this.isPressing && sn("cancel", (e, h) => this.cancelPress(e, h));
      }, c = U2(this.node.current, "blur", l);
      this.removeAccessibleListeners = H2(r, c);
    };
  }
  startPress(a, r) {
    this.isPressing = true;
    let { onTapStart: l, whileTap: c } = this.node.getProps();
    c && this.node.animationState && this.node.animationState.setActive("whileTap", true), l && X.update(() => l(a, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = false, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", false), !Er();
  }
  cancelPress(a, r) {
    if (!this.checkPressEnd())
      return;
    let { onTapCancel: l } = this.node.getProps();
    l && X.update(() => l(a, r));
  }
  mount() {
    let a = this.node.getProps(), r = G2(a.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(a.onTapStart || a.onPointerStart) }), l = U2(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = H2(r, l);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
};
var zn = /* @__PURE__ */ new WeakMap();
var pn = /* @__PURE__ */ new WeakMap();
var lS = (t) => {
  let a = zn.get(t.target);
  a && a(t);
};
var cS = (t) => {
  t.forEach(lS);
};
function eS({ root: t, ...a }) {
  let r = t || document;
  pn.has(r) || pn.set(r, {});
  let l = pn.get(r), c = JSON.stringify(a);
  return l[c] || (l[c] = new IntersectionObserver(cS, { root: t, ...a })), l[c];
}
function Lf(t, a, r) {
  let l = eS(a);
  return zn.set(t, r), l.observe(t), () => {
    zn.delete(t), l.unobserve(t);
  };
}
var hS = { some: 0, all: 1 };
var Tr = class extends r2 {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.unmount();
    let { viewport: a = {} } = this.node.getProps(), { root: r, margin: l, amount: c = "some", once: e } = a, h = { root: r ? r.current : void 0, rootMargin: l, threshold: typeof c == "number" ? c : hS[c] }, i = (n) => {
      let { isIntersecting: o } = n;
      if (this.isInView === o || (this.isInView = o, e && !o && this.hasEnteredView))
        return;
      o && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", o);
      let { onViewportEnter: d, onViewportLeave: v } = this.node.getProps(), g = o ? d : v;
      g && g(n);
    };
    return Lf(this.node.current, h, i);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    let { props: a, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(iS(a, r)) && this.startObserver();
  }
  unmount() {
  }
};
function iS({ viewport: t = {} }, { viewport: a = {} } = {}) {
  return (r) => t[r] !== a[r];
}
var Bf = { inView: { Feature: Tr }, tap: { Feature: Dr }, focus: { Feature: br }, hover: { Feature: Ir } };
function Mn(t, a) {
  if (!Array.isArray(a))
    return false;
  let r = a.length;
  if (r !== t.length)
    return false;
  for (let l = 0; l < r; l++)
    if (a[l] !== t[l])
      return false;
  return true;
}
function nS(t) {
  let a = {};
  return t.values.forEach((r, l) => a[l] = r.get()), a;
}
function oS(t) {
  let a = {};
  return t.values.forEach((r, l) => a[l] = r.getVelocity()), a;
}
function D4(t, a, r) {
  let l = t.getProps();
  return rt(l, a, r !== void 0 ? r : l.custom, nS(t), oS(t));
}
var ct = i1;
var m2 = i1;
var o0 = (t) => t * 1e3;
var q2 = (t) => t / 1e3;
var fn = { current: false };
var Hn = (t) => Array.isArray(t) && typeof t[0] == "number";
function mn(t) {
  return Boolean(!t || typeof t == "string" && wf[t] || Hn(t) || Array.isArray(t) && t.every(mn));
}
var r7 = ([t, a, r, l]) => `cubic-bezier(${t}, ${a}, ${r}, ${l})`;
var wf = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: r7([0, 0.65, 0.55, 1]), circOut: r7([0.55, 0, 1, 0.45]), backIn: r7([0.31, 0.01, 0.66, -0.59]), backOut: r7([0.33, 1.53, 0.69, 0.99]) };
function xn(t) {
  if (t)
    return Hn(t) ? r7(t) : Array.isArray(t) ? t.map(xn) : wf[t];
}
function Af(t, a, r, { delay: l = 0, duration: c, repeat: e = 0, repeatType: h = "loop", ease: i, times: n } = {}) {
  let o = { [a]: r };
  n && (o.offset = n);
  let d = xn(i);
  return Array.isArray(d) && (o.easing = d), t.animate(o, { delay: l, duration: c, easing: Array.isArray(d) ? "linear" : d, fill: "both", iterations: e + 1, direction: h === "reverse" ? "alternate" : "normal" });
}
function Zf(t, { repeat: a, repeatType: r = "loop" }) {
  let l = a && r !== "loop" && a % 2 === 1 ? 0 : t.length - 1;
  return t[l];
}
var Sf = (t, a, r) => (((1 - 3 * r + 3 * a) * t + (3 * r - 6 * a)) * t + 3 * a) * t;
var dS = 1e-7;
var vS = 12;
function gS(t, a, r, l, c) {
  let e, h, i = 0;
  do
    h = a + (r - a) / 2, e = Sf(h, l, c) - t, e > 0 ? r = h : a = h;
  while (Math.abs(e) > dS && ++i < vS);
  return h;
}
function T4(t, a, r, l) {
  if (t === a && r === l)
    return i1;
  let c = (e) => gS(e, 0, 1, t, r);
  return (e) => e === 0 || e === 1 ? e : Sf(c(e), a, l);
}
var yf = T4(0.42, 0, 1, 1);
var Ff = T4(0, 0, 0.58, 1);
var Wr = T4(0.42, 0, 0.58, 1);
var kf = (t) => Array.isArray(t) && typeof t[0] != "number";
var jr = (t) => (a) => a <= 0.5 ? t(2 * a) / 2 : (2 - t(2 * (1 - a))) / 2;
var Nr = (t) => (a) => 1 - t(1 - a);
var _r = (t) => 1 - Math.sin(Math.acos(t));
var Ur = Nr(_r);
var Rf = jr(_r);
var Vn = T4(0.33, 1.53, 0.69, 0.99);
var l7 = Nr(Vn);
var Of = jr(l7);
var Pf = (t) => (t *= 2) < 1 ? 0.5 * l7(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
var Ef = { linear: i1, easeIn: yf, easeInOut: Wr, easeOut: Ff, circIn: _r, circInOut: Rf, circOut: Ur, backIn: l7, backInOut: Of, backOut: Vn, anticipate: Pf };
var Cn = (t) => {
  if (Array.isArray(t)) {
    m2(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    let [a, r, l, c] = t;
    return T4(a, r, l, c);
  } else if (typeof t == "string")
    return m2(Ef[t] !== void 0, `Invalid easing type '${t}'`), Ef[t];
  return t;
};
var b5 = (t, a, r) => {
  let l = a - t;
  return l === 0 ? 1 : (r - t) / l;
};
var r1 = (t, a, r) => t + (a - t) * r;
function Ln(t, a, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (a - t) * 6 * r : r < 1 / 2 ? a : r < 2 / 3 ? t + (a - t) * (2 / 3 - r) * 6 : t;
}
function If({ hue: t, saturation: a, lightness: r, alpha: l }) {
  t /= 360, a /= 100, r /= 100;
  let c = 0, e = 0, h = 0;
  if (!a)
    c = e = h = r;
  else {
    let i = r < 0.5 ? r * (1 + a) : r + a - r * a, n = 2 * r - i;
    c = Ln(n, i, t + 1 / 3), e = Ln(n, i, t), h = Ln(n, i, t - 1 / 3);
  }
  return { red: Math.round(c * 255), green: Math.round(e * 255), blue: Math.round(h * 255), alpha: l };
}
var et = (t, a) => (r) => Boolean(I5(r) && $M.test(r) && r.startsWith(t) || a && Object.prototype.hasOwnProperty.call(r, a));
var Gr = (t, a, r) => (l) => {
  if (!I5(l))
    return l;
  let [c, e, h, i] = l.match($6);
  return { [t]: parseFloat(c), [a]: parseFloat(e), [r]: parseFloat(h), alpha: i !== void 0 ? parseFloat(i) : 1 };
};
var uS = (t) => y2(0, 255, t);
var Bn = { ...i5, transform: (t) => Math.round(uS(t)) };
var o5 = { test: et("rgb", "red"), parse: Gr("red", "green", "blue"), transform: ({ red: t, green: a, blue: r, alpha: l = 1 }) => "rgba(" + Bn.transform(t) + ", " + Bn.transform(a) + ", " + Bn.transform(r) + ", " + b4(I4.transform(l)) + ")" };
function sS(t) {
  let a = "", r = "", l = "", c = "";
  return t.length > 5 ? (a = t.substring(1, 3), r = t.substring(3, 5), l = t.substring(5, 7), c = t.substring(7, 9)) : (a = t.substring(1, 2), r = t.substring(2, 3), l = t.substring(3, 4), c = t.substring(4, 5), a += a, r += r, l += l, c += c), { red: parseInt(a, 16), green: parseInt(r, 16), blue: parseInt(l, 16), alpha: c ? parseInt(c, 16) / 255 : 1 };
}
var c7 = { test: et("#"), parse: sS, transform: o5.transform };
var W4 = { test: et("hsl", "hue"), parse: Gr("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: a, lightness: r, alpha: l = 1 }) => "hsla(" + Math.round(t) + ", " + F2.transform(b4(a)) + ", " + F2.transform(b4(r)) + ", " + b4(I4.transform(l)) + ")" };
var wn = (t, a, r) => {
  let l = t * t, c = r * (a * a - l) + l;
  return c < 0 ? 0 : Math.sqrt(c);
};
var pS = [c7, o5, W4];
var zS = (t) => pS.find((a) => a.test(t));
function bf(t) {
  let a = zS(t);
  m2(Boolean(a), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let r = a.parse(t);
  return a === W4 && (r = If(r)), r;
}
var An = (t, a) => {
  let r = bf(t), l = bf(a), c = { ...r };
  return (e) => (c.red = wn(r.red, l.red, e), c.green = wn(r.green, l.green, e), c.blue = wn(r.blue, l.blue, e), c.alpha = r1(r.alpha, l.alpha, e), o5.transform(c));
};
var G1 = { test: (t) => o5.test(t) || c7.test(t) || W4.test(t), parse: (t) => o5.test(t) ? o5.parse(t) : W4.test(t) ? W4.parse(t) : c7.parse(t), transform: (t) => I5(t) ? t : t.hasOwnProperty("red") ? o5.transform(t) : W4.transform(t) };
function MS(t) {
  var a, r;
  return isNaN(t) && I5(t) && (((a = t.match($6)) === null || a === void 0 ? void 0 : a.length) || 0) + (((r = t.match(KM)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
var Wf = "number";
var jf = "color";
var fS = "var";
var HS = "var(";
var Df = "${}";
var Tf = /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function e7(t) {
  let a = t.toString(), r = a.match(Tf) || [], l = [], c = { color: [], number: [], var: [] }, e = [];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    G1.test(o) ? (c.color.push(n), e.push(jf), l.push(G1.parse(o))) : o.startsWith(HS) ? (c.var.push(n), e.push(fS), l.push(o)) : (c.number.push(n), e.push(Wf), l.push(parseFloat(o)));
  }
  let i = a.replace(Tf, Df).split(Df);
  return { values: l, split: i, indexes: c, types: e };
}
function Nf(t) {
  return e7(t).values;
}
function _f(t) {
  let { split: a, types: r } = e7(t), l = a.length;
  return (c) => {
    let e = "";
    for (let h = 0; h < l; h++)
      if (e += a[h], c[h] !== void 0) {
        let i = r[h];
        i === Wf ? e += b4(c[h]) : i === jf ? e += G1.transform(c[h]) : e += c[h];
      }
    return e;
  };
}
var mS = (t) => typeof t == "number" ? 0 : t;
function xS(t) {
  let a = Nf(t);
  return _f(t)(a.map(mS));
}
var R2 = { test: MS, parse: Nf, createTransformer: _f, getAnimatableNone: xS };
function Zn(t, a) {
  return (r) => r > 0 ? a : t;
}
function VS(t, a) {
  return (r) => r1(t, a, r);
}
function qr(t) {
  return typeof t == "number" ? VS : typeof t == "string" ? K6(t) ? Zn : G1.test(t) ? An : BS : Array.isArray(t) ? Uf : typeof t == "object" ? G1.test(t) ? An : CS : Zn;
}
function Uf(t, a) {
  let r = [...t], l = r.length, c = t.map((e, h) => qr(e)(e, a[h]));
  return (e) => {
    for (let h = 0; h < l; h++)
      r[h] = c[h](e);
    return r;
  };
}
function CS(t, a) {
  let r = { ...t, ...a }, l = {};
  for (let c in r)
    t[c] !== void 0 && a[c] !== void 0 && (l[c] = qr(t[c])(t[c], a[c]));
  return (c) => {
    for (let e in l)
      r[e] = l[e](c);
    return r;
  };
}
function LS(t, a) {
  var r;
  let l = [], c = { color: 0, var: 0, number: 0 };
  for (let e = 0; e < a.values.length; e++) {
    let h = a.types[e], i = t.indexes[h][c[h]], n = (r = t.values[i]) !== null && r !== void 0 ? r : 0;
    l[e] = n, c[h]++;
  }
  return l;
}
var BS = (t, a) => {
  let r = R2.createTransformer(a), l = e7(t), c = e7(a);
  return l.indexes.var.length === c.indexes.var.length && l.indexes.color.length === c.indexes.color.length && l.indexes.number.length >= c.indexes.number.length ? H2(Uf(LS(l, c), c.values), r) : (ct(true, `Complex values '${t}' and '${a}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Zn(t, a));
};
function Kr(t, a, r) {
  return typeof t == "number" && typeof a == "number" && typeof r == "number" ? r1(t, a, r) : qr(t)(t, a);
}
function wS(t, a, r) {
  let l = [], c = r || Kr, e = t.length - 1;
  for (let h = 0; h < e; h++) {
    let i = c(t[h], t[h + 1]);
    if (a) {
      let n = Array.isArray(a) ? a[h] || i1 : a;
      i = H2(n, i);
    }
    l.push(i);
  }
  return l;
}
function Gf(t, a, { clamp: r = true, ease: l, mixer: c } = {}) {
  let e = t.length;
  if (m2(e === a.length, "Both input and output ranges must be the same length"), e === 1)
    return () => a[0];
  t[0] > t[e - 1] && (t = [...t].reverse(), a = [...a].reverse());
  let h = wS(a, l, c), i = h.length, n = (o) => {
    let d = 0;
    if (i > 1)
      for (; d < t.length - 2 && !(o < t[d + 1]); d++)
        ;
    let v = b5(t[d], t[d + 1], o);
    return h[d](v);
  };
  return r ? (o) => n(y2(t[0], t[e - 1], o)) : n;
}
function qf(t, a) {
  let r = t[t.length - 1];
  for (let l = 1; l <= a; l++) {
    let c = b5(0, a, l);
    t.push(r1(r, 1, c));
  }
}
function Kf(t) {
  let a = [0];
  return qf(a, t.length - 1), a;
}
function $f(t, a) {
  return t.map((r) => r * a);
}
function AS(t, a) {
  return t.map(() => a || Wr).splice(0, t.length - 1);
}
function h7({ duration: t = 300, keyframes: a, times: r, ease: l = "easeInOut" }) {
  let c = kf(l) ? l.map(Cn) : Cn(l), e = { done: false, value: a[0] }, h = $f(r && r.length === a.length ? r : Kf(a), t), i = Gf(h, a, { ease: Array.isArray(c) ? c : AS(a, c) });
  return { calculatedDuration: t, next: (n) => (e.value = i(n), e.done = n >= t, e) };
}
function $r(t, a) {
  return a ? t * (1e3 / a) : 0;
}
var ZS = 5;
function Xr(t, a, r) {
  let l = Math.max(a - ZS, 0);
  return $r(r - t(l), a - l);
}
var Sn = 1e-3;
var SS = 0.01;
var Xf = 10;
var yS = 0.05;
var FS = 1;
function Qf({ duration: t = 800, bounce: a = 0.25, velocity: r = 0, mass: l = 1 }) {
  let c, e;
  ct(t <= o0(Xf), "Spring duration must be 10 seconds or less");
  let h = 1 - a;
  h = y2(yS, FS, h), t = y2(SS, Xf, q2(t)), h < 1 ? (c = (o) => {
    let d = o * h, v = d * t, g = d - r, u = Qr(o, h), z = Math.exp(-v);
    return Sn - g / u * z;
  }, e = (o) => {
    let v = o * h * t, g = v * r + r, u = Math.pow(h, 2) * Math.pow(o, 2) * t, z = Math.exp(-v), f = Qr(Math.pow(o, 2), h);
    return (-c(o) + Sn > 0 ? -1 : 1) * ((g - u) * z) / f;
  }) : (c = (o) => {
    let d = Math.exp(-o * t), v = (o - r) * t + 1;
    return -Sn + d * v;
  }, e = (o) => {
    let d = Math.exp(-o * t), v = (r - o) * (t * t);
    return d * v;
  });
  let i = 5 / t, n = RS(c, e, i);
  if (t = o0(t), isNaN(n))
    return { stiffness: 100, damping: 10, duration: t };
  {
    let o = Math.pow(n, 2) * l;
    return { stiffness: o, damping: h * 2 * Math.sqrt(l * o), duration: t };
  }
}
var kS = 12;
function RS(t, a, r) {
  let l = r;
  for (let c = 1; c < kS; c++)
    l = l - t(l) / a(l);
  return l;
}
function Qr(t, a) {
  return t * Math.sqrt(1 - a * a);
}
var OS = ["duration", "bounce"];
var PS = ["stiffness", "damping", "mass"];
function Yf(t, a) {
  return a.some((r) => t[r] !== void 0);
}
function ES(t) {
  let a = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false, ...t };
  if (!Yf(t, PS) && Yf(t, OS)) {
    let r = Qf(t);
    a = { ...a, ...r, mass: 1 }, a.isResolvedFromDuration = true;
  }
  return a;
}
function Yr({ keyframes: t, restDelta: a, restSpeed: r, ...l }) {
  let c = t[0], e = t[t.length - 1], h = { done: false, value: c }, { stiffness: i, damping: n, mass: o, duration: d, velocity: v, isResolvedFromDuration: g } = ES({ ...l, velocity: -q2(l.velocity || 0) }), u = v || 0, z = n / (2 * Math.sqrt(i * o)), f = e - c, m = q2(Math.sqrt(i / o)), p = Math.abs(f) < 5;
  r || (r = p ? 0.01 : 2), a || (a = p ? 5e-3 : 0.5);
  let s;
  if (z < 1) {
    let M = Qr(m, z);
    s = (x) => {
      let C = Math.exp(-z * m * x);
      return e - C * ((u + z * m * f) / M * Math.sin(M * x) + f * Math.cos(M * x));
    };
  } else if (z === 1)
    s = (M) => e - Math.exp(-m * M) * (f + (u + m * f) * M);
  else {
    let M = m * Math.sqrt(z * z - 1);
    s = (x) => {
      let C = Math.exp(-z * m * x), H = Math.min(M * x, 300);
      return e - C * ((u + z * m * f) * Math.sinh(H) + M * f * Math.cosh(H)) / M;
    };
  }
  return { calculatedDuration: g && d || null, next: (M) => {
    let x = s(M);
    if (g)
      h.done = M >= d;
    else {
      let C = u;
      M !== 0 && (z < 1 ? C = Xr(s, M, x) : C = 0);
      let H = Math.abs(C) <= r, L = Math.abs(e - x) <= a;
      h.done = H && L;
    }
    return h.value = h.done ? e : x, h;
  } };
}
function yn({ keyframes: t, velocity: a = 0, power: r = 0.8, timeConstant: l = 325, bounceDamping: c = 10, bounceStiffness: e = 500, modifyTarget: h, min: i, max: n, restDelta: o = 0.5, restSpeed: d }) {
  let v = t[0], g = { done: false, value: v }, u = (w) => i !== void 0 && w < i || n !== void 0 && w > n, z = (w) => i === void 0 ? n : n === void 0 || Math.abs(i - w) < Math.abs(n - w) ? i : n, f = r * a, m = v + f, p = h === void 0 ? m : h(m);
  p !== m && (f = p - v);
  let s = (w) => -f * Math.exp(-w / l), M = (w) => p + s(w), x = (w) => {
    let S = s(w), P = M(w);
    g.done = Math.abs(S) <= o, g.value = g.done ? p : P;
  }, C, H, L = (w) => {
    u(g.value) && (C = w, H = Yr({ keyframes: [g.value, z(g.value)], velocity: Xr(M, w, g.value), damping: c, stiffness: e, restDelta: o, restSpeed: d }));
  };
  return L(0), { calculatedDuration: null, next: (w) => {
    let S = false;
    return !H && C === void 0 && (S = true, x(w), L(w)), C !== void 0 && w > C ? H.next(w - C) : (!S && x(w), g);
  } };
}
var Jr;
function IS() {
  Jr = void 0;
}
var T0 = { now: () => (Jr === void 0 && T0.set(W1.isProcessing || N6.useManualTiming ? W1.timestamp : performance.now()), Jr), set: (t) => {
  Jr = t, queueMicrotask(IS);
} };
var Jf = (t) => {
  let a = ({ timestamp: r }) => t(r);
  return { start: () => X.update(a, true), stop: () => k2(a), now: () => W1.isProcessing ? W1.timestamp : T0.now() };
};
function Fn(t) {
  let a = 0, r = 50, l = t.next(a);
  for (; !l.done && a < 2e4; )
    a += r, l = t.next(a);
  return a >= 2e4 ? 1 / 0 : a;
}
var bS = { decay: yn, inertia: yn, tween: h7, keyframes: h7, spring: Yr };
var DS = (t) => t / 100;
function A3({ autoplay: t = true, delay: a = 0, driver: r = Jf, keyframes: l, type: c = "keyframes", repeat: e = 0, repeatDelay: h = 0, repeatType: i = "loop", onPlay: n, onStop: o, onComplete: d, onUpdate: v, ...g }) {
  let u = 1, z = false, f, m, p = () => {
    m = new Promise((c1) => {
      f = c1;
    });
  };
  p();
  let s, M = bS[c] || h7, x;
  M !== h7 && typeof l[0] != "number" && (x = H2(DS, Kr(l[0], l[1])), l = [0, 100]);
  let C = M({ ...g, keyframes: l }), H;
  i === "mirror" && (H = M({ ...g, keyframes: [...l].reverse(), velocity: -(g.velocity || 0) }));
  let L = "idle", w = null, S = null, P = null;
  C.calculatedDuration === null && e && (C.calculatedDuration = Fn(C));
  let { calculatedDuration: q } = C, d1 = 1 / 0, l1 = 1 / 0;
  q !== null && (d1 = q + h, l1 = d1 * (e + 1) - h);
  let v1 = 0, Z0 = (c1) => {
    if (S === null)
      return;
    u > 0 && (S = Math.min(S, c1)), u < 0 && (S = Math.min(c1 - l1 / u, S)), w !== null ? v1 = w : v1 = Math.round(c1 - S) * u;
    let u0 = v1 - a * (u >= 0 ? 1 : -1), W5 = u >= 0 ? u0 < 0 : u0 > l1;
    v1 = Math.max(u0, 0), L === "finished" && w === null && (v1 = l1);
    let s0 = v1, N0 = C;
    if (e) {
      let Bt = Math.min(v1, l1) / d1, I3 = Math.floor(Bt), P1 = Bt % 1;
      !P1 && Bt >= 1 && (P1 = 1), P1 === 1 && I3--, I3 = Math.min(I3, e + 1), Boolean(I3 % 2) && (i === "reverse" ? (P1 = 1 - P1, h && (P1 -= h / d1)) : i === "mirror" && (N0 = H)), s0 = y2(0, 1, P1) * d1;
    }
    let $2 = W5 ? { done: false, value: l[0] } : N0.next(s0);
    x && ($2.value = x($2.value));
    let { done: E3 } = $2;
    !W5 && q !== null && (E3 = u >= 0 ? v1 >= l1 : v1 <= 0);
    let Pl = w === null && (L === "finished" || L === "running" && E3);
    return v && v($2.value), Pl && j0(), $2;
  }, k1 = () => {
    s && s.stop(), s = void 0;
  }, g1 = () => {
    L = "idle", k1(), f(), p(), S = P = null;
  }, j0 = () => {
    L = "finished", d && d(), k1(), f();
  }, g0 = () => {
    if (z)
      return;
    s || (s = r(Z0));
    let c1 = s.now();
    n && n(), w !== null ? S = c1 - w : (!S || L === "finished") && (S = c1), L === "finished" && p(), P = S, w = null, L = "running", s.start();
  };
  t && g0();
  let g5 = { then(c1, u0) {
    return m.then(c1, u0);
  }, get time() {
    return q2(v1);
  }, set time(c1) {
    c1 = o0(c1), v1 = c1, w !== null || !s || u === 0 ? w = c1 : S = s.now() - c1 / u;
  }, get duration() {
    let c1 = C.calculatedDuration === null ? Fn(C) : C.calculatedDuration;
    return q2(c1);
  }, get speed() {
    return u;
  }, set speed(c1) {
    c1 === u || !s || (u = c1, g5.time = q2(v1));
  }, get state() {
    return L;
  }, play: g0, pause: () => {
    L = "paused", w = v1;
  }, stop: () => {
    z = true, L !== "idle" && (L = "idle", o && o(), g1());
  }, cancel: () => {
    P !== null && Z0(P), g1();
  }, complete: () => {
    L = "finished";
  }, sample: (c1) => (S = 0, Z0(c1)) };
  return g5;
}
function tH(t) {
  let a;
  return () => (a === void 0 && (a = t()), a);
}
var TS = tH(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var WS = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]);
var tl = 10;
var jS = 2e4;
var NS = (t, a) => a.type === "spring" || t === "backgroundColor" || !mn(a.ease);
function aH(t, a, { onUpdate: r, onComplete: l, ...c }) {
  if (!(TS() && WS.has(a) && !c.repeatDelay && c.repeatType !== "mirror" && c.damping !== 0 && c.type !== "inertia"))
    return false;
  let h = false, i, n, o = false, d = () => {
    n = new Promise((M) => {
      i = M;
    });
  };
  d();
  let { keyframes: v, duration: g = 300, ease: u, times: z } = c;
  if (NS(a, c)) {
    let M = A3({ ...c, repeat: 0, delay: 0 }), x = { done: false, value: v[0] }, C = [], H = 0;
    for (; !x.done && H < jS; )
      x = M.sample(H), C.push(x.value), H += tl;
    z = void 0, v = C, g = H - tl, u = "linear";
  }
  let f = Af(t.owner.current, a, v, { ...c, duration: g, ease: u, times: z }), m = () => {
    o = false, f.cancel();
  }, p = () => {
    o = true, X.update(m), i(), d();
  };
  return f.onfinish = () => {
    o || (t.set(Zf(v, c)), l && l(), p());
  }, { then(M, x) {
    return n.then(M, x);
  }, attachTimeline(M) {
    return f.timeline = M, f.onfinish = null, i1;
  }, get time() {
    return q2(f.currentTime || 0);
  }, set time(M) {
    f.currentTime = o0(M);
  }, get speed() {
    return f.playbackRate;
  }, set speed(M) {
    f.playbackRate = M;
  }, get duration() {
    return q2(g);
  }, play: () => {
    h || (f.play(), k2(m));
  }, pause: () => f.pause(), stop: () => {
    if (h = true, f.playState === "idle")
      return;
    let { currentTime: M } = f;
    if (M) {
      let x = A3({ ...c, autoplay: false });
      t.setWithVelocity(x.sample(M - tl).value, x.sample(M).value, tl);
    }
    p();
  }, complete: () => {
    o || f.finish();
  }, cancel: p };
}
function rH({ keyframes: t, delay: a, onUpdate: r, onComplete: l }) {
  let c = () => (r && r(t[t.length - 1]), l && l(), { time: 0, speed: 1, duration: 0, play: i1, pause: i1, stop: i1, then: (e) => (e(), Promise.resolve()), cancel: i1, complete: i1 });
  return a ? A3({ keyframes: [0, 1], duration: 0, delay: a, onComplete: c }) : c();
}
var _S = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
var US = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 });
var GS = { type: "keyframes", duration: 0.8 };
var qS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 };
var lH = (t, { keyframes: a }) => a.length > 2 ? GS : _2.has(t) ? t.startsWith("scale") ? US(a[1]) : _S : qS;
var i7 = (t, a) => t === "zIndex" ? false : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && (R2.test(a) || a === "0") && !a.startsWith("url("));
var KS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function $S(t) {
  let [a, r] = t.slice(0, -1).split("(");
  if (a === "drop-shadow")
    return t;
  let [l] = r.match($6) || [];
  if (!l)
    return t;
  let c = r.replace(l, ""), e = KS.has(a) ? 1 : 0;
  return l !== r && (e *= 100), a + "(" + e + c + ")";
}
var XS = /([a-z-]*)\(.*?\)/g;
var n7 = { ...R2, getAnimatableNone: (t) => {
  let a = t.match(XS);
  return a ? a.map($S).join(" ") : t;
} };
var QS = { ...wr, color: G1, backgroundColor: G1, outlineColor: G1, fill: G1, stroke: G1, borderColor: G1, borderTopColor: G1, borderRightColor: G1, borderBottomColor: G1, borderLeftColor: G1, filter: n7, WebkitFilter: n7 };
var ht = (t) => QS[t];
function al(t, a) {
  let r = ht(t);
  return r !== n7 && (r = R2), r.getAnimatableNone ? r.getAnimatableNone(a) : void 0;
}
var rl = (t) => /^0[^.\s]+$/.test(t);
function cH(t) {
  if (typeof t == "number")
    return t === 0;
  if (t !== null)
    return t === "none" || t === "0" || rl(t);
}
function eH(t, a, r, l) {
  let c = i7(a, r), e;
  Array.isArray(r) ? e = [...r] : e = [null, r];
  let h = l.from !== void 0 ? l.from : t.get(), i, n = [];
  for (let o = 0; o < e.length; o++)
    e[o] === null && (e[o] = o === 0 ? h : e[o - 1]), cH(e[o]) && n.push(o), typeof e[o] == "string" && e[o] !== "none" && e[o] !== "0" && (i = e[o]);
  if (c && n.length && i)
    for (let o = 0; o < n.length; o++) {
      let d = n[o];
      e[d] = al(a, i);
    }
  return e;
}
function hH({ when: t, delay: a, delayChildren: r, staggerChildren: l, staggerDirection: c, repeat: e, repeatType: h, repeatDelay: i, from: n, elapsed: o, ...d }) {
  return !!Object.keys(d).length;
}
function it(t, a) {
  return t[a] || t.default || t;
}
var nt = (t, a, r, l = {}) => (c) => {
  let e = it(l, t) || {}, h = e.delay || l.delay || 0, { elapsed: i = 0 } = l;
  i = i - o0(h);
  let n = eH(a, t, r, e), o = n[0], d = n[n.length - 1], v = i7(t, o), g = i7(t, d);
  ct(v === g, `You are trying to animate ${t} from "${o}" to "${d}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${d} via the \`style\` property.`);
  let u = { keyframes: n, velocity: a.getVelocity(), ease: "easeOut", ...e, delay: -i, onUpdate: (z) => {
    a.set(z), e.onUpdate && e.onUpdate(z);
  }, onComplete: () => {
    c(), e.onComplete && e.onComplete();
  } };
  if (hH(e) || (u = { ...u, ...lH(t, u) }), u.duration && (u.duration = o0(u.duration)), u.repeatDelay && (u.repeatDelay = o0(u.repeatDelay)), !v || !g || fn.current || e.type === false || N6.skipAnimations)
    return rH(fn.current ? { ...u, delay: 0 } : u);
  if (!l.isHandoff && a.owner && a.owner.current instanceof HTMLElement && !a.owner.getProps().onUpdate) {
    let z = aH(a, t, u);
    if (z)
      return z;
  }
  return A3(u);
};
function Z3(t) {
  return Boolean(A1(t) && t.add);
}
var ll = (t) => /^\-?\d*\.?\d+$/.test(t);
function ot(t, a) {
  t.indexOf(a) === -1 && t.push(a);
}
function dt(t, a) {
  let r = t.indexOf(a);
  r > -1 && t.splice(r, 1);
}
var j4 = class {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return ot(this.subscriptions, a), () => dt(this.subscriptions, a);
  }
  notify(a, r, l) {
    let c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](a, r, l);
      else
        for (let e = 0; e < c; e++) {
          let h = this.subscriptions[e];
          h && h(a, r, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var iH = 30;
var YS = (t) => !isNaN(parseFloat(t));
var nH = { current: void 0 };
var kn = class {
  constructor(a, r = {}) {
    this.version = "11.0.6", this.canTrackVelocity = false, this.events = {}, this.updateAndNotify = (l, c = true) => {
      let e = T0.now();
      this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), c && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = false, this.setCurrent(a), this.canTrackVelocity = YS(this.current), this.owner = r.owner;
  }
  setCurrent(a) {
    this.current = a, this.updatedAt = T0.now();
  }
  setPrevFrameValue(a = this.current) {
    this.prevFrameValue = a, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, r) {
    this.events[a] || (this.events[a] = new j4());
    let l = this.events[a].add(r);
    return a === "change" ? () => {
      l(), X.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : l;
  }
  clearListeners() {
    for (let a in this.events)
      this.events[a].clear();
  }
  attach(a, r) {
    this.passiveEffect = a, this.stopPassiveEffect = r;
  }
  set(a, r = true) {
    !r || !this.passiveEffect ? this.updateAndNotify(a, r) : this.passiveEffect(a, this.updateAndNotify);
  }
  setWithVelocity(a, r, l) {
    this.set(r), this.prev = void 0, this.prevFrameValue = a, this.prevUpdatedAt = this.updatedAt - l;
  }
  jump(a) {
    this.updateAndNotify(a), this.prev = a, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return nH.current && nH.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let a = T0.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > iH)
      return 0;
    let r = Math.min(this.updatedAt - this.prevUpdatedAt, iH);
    return $r(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(a) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = true, this.animation = a(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
};
function d5(t, a) {
  return new kn(t, a);
}
var cl = (t) => (a) => a.test(t);
var oH = { test: (t) => t === "auto", parse: (t) => t };
var Rn = [i5, W, F2, n5, QM, XM, oH];
var vt = (t) => Rn.find(cl(t));
var JS = [...Rn, G1, R2];
var dH = (t) => JS.find(cl(t));
function ty(t, a, r) {
  t.hasValue(a) ? t.getValue(a).set(r) : t.addValue(a, d5(r));
}
function vH(t, a) {
  let r = D4(t, a), { transitionEnd: l = {}, transition: c = {}, ...e } = r ? t.makeTargetAnimatable(r, false) : {};
  e = { ...e, ...l };
  for (let h in e) {
    let i = pf(e[h]);
    ty(t, h, i);
  }
}
function gH(t, a, r) {
  var l, c;
  let e = Object.keys(a).filter((i) => !t.hasValue(i)), h = e.length;
  if (h)
    for (let i = 0; i < h; i++) {
      let n = e[i], o = a[n], d = null;
      Array.isArray(o) && (d = o[0]), d === null && (d = (c = (l = r[n]) !== null && l !== void 0 ? l : t.readValue(n)) !== null && c !== void 0 ? c : a[n]), d != null && (typeof d == "string" && (ll(d) || rl(d)) ? d = parseFloat(d) : !dH(d) && R2.test(o) && (d = al(n, o)), t.addValue(n, d5(d, { owner: t })), r[n] === void 0 && (r[n] = d), d !== null && t.setBaseTarget(n, d));
    }
}
function ay(t, a) {
  return a ? (a[t] || a.default || a).from : void 0;
}
function uH(t, a, r) {
  let l = {};
  for (let c in t) {
    let e = ay(c, a);
    if (e !== void 0)
      l[c] = e;
    else {
      let h = r.getValue(c);
      h && (l[c] = h.get());
    }
  }
  return l;
}
function ry({ protectedKeys: t, needsAnimating: a }, r) {
  let l = t.hasOwnProperty(r) && a[r] !== true;
  return a[r] = false, l;
}
function ly(t, a) {
  let r = t.get();
  if (Array.isArray(a)) {
    for (let l = 0; l < a.length; l++)
      if (a[l] !== r)
        return true;
  } else
    return r !== a;
}
function el(t, a, { delay: r = 0, transitionOverride: l, type: c } = {}) {
  let { transition: e = t.getDefaultTransition(), transitionEnd: h, ...i } = t.makeTargetAnimatable(a), n = t.getValue("willChange");
  l && (e = l);
  let o = [], d = c && t.animationState && t.animationState.getState()[c];
  for (let v in i) {
    let g = t.getValue(v), u = i[v];
    if (!g || u === void 0 || d && ry(d, v))
      continue;
    let z = { delay: r, elapsed: 0, ...it(e || {}, v) };
    if (window.HandoffAppearAnimations) {
      let p = t.getProps()[zr];
      if (p) {
        let s = window.HandoffAppearAnimations(p, v, g, X);
        s !== null && (z.elapsed = s, z.isHandoff = true);
      }
    }
    let f = !z.isHandoff && !ly(g, u);
    if (z.type === "spring" && (g.getVelocity() || z.velocity) && (f = false), g.animation && (f = false), f)
      continue;
    g.start(nt(v, g, u, t.shouldReduceMotion && _2.has(v) ? { type: false } : z));
    let m = g.animation;
    Z3(n) && (n.add(v), m.then(() => n.remove(v))), o.push(m);
  }
  return h && Promise.all(o).then(() => {
    h && vH(t, h);
  }), o;
}
function hl(t, a, r = {}) {
  let l = D4(t, a, r.custom), { transition: c = t.getDefaultTransition() || {} } = l || {};
  r.transitionOverride && (c = r.transitionOverride);
  let e = l ? () => Promise.all(el(t, l, r)) : () => Promise.resolve(), h = t.variantChildren && t.variantChildren.size ? (n = 0) => {
    let { delayChildren: o = 0, staggerChildren: d, staggerDirection: v } = c;
    return cy(t, a, o + n, d, v, r);
  } : () => Promise.resolve(), { when: i } = c;
  if (i) {
    let [n, o] = i === "beforeChildren" ? [e, h] : [h, e];
    return n().then(() => o());
  } else
    return Promise.all([e(), h(r.delay)]);
}
function cy(t, a, r = 0, l = 0, c = 1, e) {
  let h = [], i = (t.variantChildren.size - 1) * l, n = c === 1 ? (o = 0) => o * l : (o = 0) => i - o * l;
  return Array.from(t.variantChildren).sort(ey).forEach((o, d) => {
    o.notify("AnimationStart", a), h.push(hl(o, a, { ...e, delay: r + n(d) }).then(() => o.notify("AnimationComplete", a)));
  }), Promise.all(h);
}
function ey(t, a) {
  return t.sortNodePosition(a);
}
function sH(t, a, r = {}) {
  t.notify("AnimationStart", a);
  let l;
  if (Array.isArray(a)) {
    let c = a.map((e) => hl(t, e, r));
    l = Promise.all(c);
  } else if (typeof a == "string")
    l = hl(t, a, r);
  else {
    let c = typeof a == "function" ? D4(t, a, r.custom) : a;
    l = Promise.all(el(t, c, r));
  }
  return l.then(() => t.notify("AnimationComplete", a));
}
var hy = [...mr].reverse();
var iy = mr.length;
function ny(t) {
  return (a) => Promise.all(a.map(({ animation: r, options: l }) => sH(t, r, l)));
}
function pH(t) {
  let a = ny(t), r = dy(), l = true, c = (n, o) => {
    let d = D4(t, o);
    if (d) {
      let { transition: v, transitionEnd: g, ...u } = d;
      n = { ...n, ...u, ...g };
    }
    return n;
  };
  function e(n) {
    a = n(t);
  }
  function h(n, o) {
    let d = t.getProps(), v = t.getVariantContext(true) || {}, g = [], u = /* @__PURE__ */ new Set(), z = {}, f = 1 / 0;
    for (let p = 0; p < iy; p++) {
      let s = hy[p], M = r[s], x = d[s] !== void 0 ? d[s] : v[s], C = E5(x), H = s === o ? M.isActive : null;
      H === false && (f = p);
      let L = x === v[s] && x !== d[s] && C;
      if (L && l && t.manuallyAnimateOnMount && (L = false), M.protectedKeys = { ...z }, !M.isActive && H === null || !x && !M.prevProp || P4(x) || typeof x == "boolean")
        continue;
      let S = oy(M.prevProp, x) || s === o && M.isActive && !L && C || p > f && C, P = false, q = Array.isArray(x) ? x : [x], d1 = q.reduce(c, {});
      H === false && (d1 = {});
      let { prevResolvedValues: l1 = {} } = M, v1 = { ...l1, ...d1 }, Z0 = (k1) => {
        S = true, u.has(k1) && (P = true, u.delete(k1)), M.needsAnimating[k1] = true;
      };
      for (let k1 in v1) {
        let g1 = d1[k1], j0 = l1[k1];
        if (z.hasOwnProperty(k1))
          continue;
        let g0 = false;
        B3(g1) && B3(j0) ? g0 = !Mn(g1, j0) : g0 = g1 !== j0, g0 ? g1 !== void 0 ? Z0(k1) : u.add(k1) : g1 !== void 0 && u.has(k1) ? Z0(k1) : M.protectedKeys[k1] = true;
      }
      M.prevProp = x, M.prevResolvedValues = d1, M.isActive && (z = { ...z, ...d1 }), l && t.blockInitialAnimation && (S = false), S && (!L || P) && g.push(...q.map((k1) => ({ animation: k1, options: { type: s, ...n } })));
    }
    if (u.size) {
      let p = {};
      u.forEach((s) => {
        let M = t.getBaseTarget(s);
        M !== void 0 && (p[s] = M);
      }), g.push({ animation: p });
    }
    let m = Boolean(g.length);
    return l && (d.initial === false || d.initial === d.animate) && !t.manuallyAnimateOnMount && (m = false), l = false, m ? a(g) : Promise.resolve();
  }
  function i(n, o, d) {
    var v;
    if (r[n].isActive === o)
      return Promise.resolve();
    (v = t.variantChildren) === null || v === void 0 || v.forEach((u) => {
      var z;
      return (z = u.animationState) === null || z === void 0 ? void 0 : z.setActive(n, o);
    }), r[n].isActive = o;
    let g = h(d, n);
    for (let u in r)
      r[u].protectedKeys = {};
    return g;
  }
  return { animateChanges: h, setActive: i, setAnimateFunction: e, getState: () => r };
}
function oy(t, a) {
  return typeof a == "string" ? a !== t : Array.isArray(a) ? !Mn(a, t) : false;
}
function S3(t = false) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function dy() {
  return { animate: S3(true), whileInView: S3(), whileHover: S3(), whileTap: S3(), whileDrag: S3(), whileFocus: S3(), exit: S3() };
}
var il = class extends r2 {
  constructor(a) {
    super(a), a.animationState || (a.animationState = pH(a));
  }
  updateAnimationControlsSubscription() {
    let { animate: a } = this.node.getProps();
    this.unmount(), P4(a) && (this.unmount = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: a } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    a !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
};
var vy = 0;
var nl = class extends r2 {
  constructor() {
    super(...arguments), this.id = vy++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    let { isPresent: a, onExitComplete: r, custom: l } = this.node.presenceContext, { isPresent: c } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === c)
      return;
    let e = this.node.animationState.setActive("exit", !a, { custom: l ?? this.node.getProps().custom });
    r && !a && e.then(() => r(this.id));
  }
  mount() {
    let { register: a } = this.node.presenceContext || {};
    a && (this.unmount = a(this.id));
  }
  unmount() {
  }
};
var zH = { animation: { Feature: il }, exit: { Feature: nl } };
var MH = (t, a) => Math.abs(t - a);
function fH(t, a) {
  let r = MH(t.x, a.x), l = MH(t.y, a.y);
  return Math.sqrt(r ** 2 + l ** 2);
}
var gt = class {
  constructor(a, r, { transformPagePoint: l, contextWindow: c, dragSnapToOrigin: e = false } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      let v = Pn(this.lastMoveEventInfo, this.history), g = this.startEvent !== null, u = fH(v.offset, { x: 0, y: 0 }) >= 3;
      if (!g && !u)
        return;
      let { point: z } = v, { timestamp: f } = W1;
      this.history.push({ ...z, timestamp: f });
      let { onStart: m, onMove: p } = this.handlers;
      g || (m && m(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, g) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = On(g, this.transformPagePoint), X.update(this.updatePoint, true);
    }, this.handlePointerUp = (v, g) => {
      this.end();
      let { onEnd: u, onSessionEnd: z, resumeAnimation: f } = this.handlers;
      if (this.dragSnapToOrigin && f && f(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      let m = Pn(v.type === "pointercancel" ? this.lastMoveEventInfo : On(g, this.transformPagePoint), this.history);
      this.startEvent && u && u(v, m), z && z(v, m);
    }, !Pr(a))
      return;
    this.dragSnapToOrigin = e, this.handlers = r, this.transformPagePoint = l, this.contextWindow = c || window;
    let h = w3(a), i = On(h, this.transformPagePoint), { point: n } = i, { timestamp: o } = W1;
    this.history = [{ ...n, timestamp: o }];
    let { onSessionStart: d } = r;
    d && d(a, Pn(i, this.history)), this.removeListeners = H2(G2(this.contextWindow, "pointermove", this.handlePointerMove), G2(this.contextWindow, "pointerup", this.handlePointerUp), G2(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(), k2(this.updatePoint);
  }
};
function On(t, a) {
  return a ? { point: a(t.point) } : t;
}
function HH(t, a) {
  return { x: t.x - a.x, y: t.y - a.y };
}
function Pn({ point: t }, a) {
  return { point: t, delta: HH(t, mH(a)), offset: HH(t, gy(a)), velocity: uy(a, 0.1) };
}
function gy(t) {
  return t[0];
}
function mH(t) {
  return t[t.length - 1];
}
function uy(t, a) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let r = t.length - 1, l = null, c = mH(t);
  for (; r >= 0 && (l = t[r], !(c.timestamp - l.timestamp > o0(a))); )
    r--;
  if (!l)
    return { x: 0, y: 0 };
  let e = q2(c.timestamp - l.timestamp);
  if (e === 0)
    return { x: 0, y: 0 };
  let h = { x: (c.x - l.x) / e, y: (c.y - l.y) / e };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function v2(t) {
  return t.max - t.min;
}
function ol(t, a = 0, r = 0.01) {
  return Math.abs(t - a) <= r;
}
function xH(t, a, r, l = 0.5) {
  t.origin = l, t.originPoint = r1(a.min, a.max, t.origin), t.scale = v2(r) / v2(a), (ol(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = r1(r.min, r.max, t.origin) - t.originPoint, (ol(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function ut(t, a, r, l) {
  xH(t.x, a.x, r.x, l ? l.originX : void 0), xH(t.y, a.y, r.y, l ? l.originY : void 0);
}
function VH(t, a, r) {
  t.min = r.min + a.min, t.max = t.min + v2(a);
}
function LH(t, a, r) {
  VH(t.x, a.x, r.x), VH(t.y, a.y, r.y);
}
function CH(t, a, r) {
  t.min = a.min - r.min, t.max = t.min + v2(a);
}
function st(t, a, r) {
  CH(t.x, a.x, r.x), CH(t.y, a.y, r.y);
}
function SH(t, { min: a, max: r }, l) {
  return a !== void 0 && t < a ? t = l ? r1(a, t, l.min) : Math.max(t, a) : r !== void 0 && t > r && (t = l ? r1(r, t, l.max) : Math.min(t, r)), t;
}
function BH(t, a, r) {
  return { min: a !== void 0 ? t.min + a : void 0, max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0 };
}
function yH(t, { top: a, left: r, bottom: l, right: c }) {
  return { x: BH(t.x, r, c), y: BH(t.y, a, l) };
}
function wH(t, a) {
  let r = a.min - t.min, l = a.max - t.max;
  return a.max - a.min < t.max - t.min && ([r, l] = [l, r]), { min: r, max: l };
}
function FH(t, a) {
  return { x: wH(t.x, a.x), y: wH(t.y, a.y) };
}
function kH(t, a) {
  let r = 0.5, l = v2(t), c = v2(a);
  return c > l ? r = b5(a.min, a.max - l, t.min) : l > c && (r = b5(t.min, t.max - c, a.min)), y2(0, 1, r);
}
function RH(t, a) {
  let r = {};
  return a.min !== void 0 && (r.min = a.min - t.min), a.max !== void 0 && (r.max = a.max - t.min), r;
}
var dl = 0.35;
function OH(t = dl) {
  return t === false ? t = 0 : t === true && (t = dl), { x: AH(t, "left", "right"), y: AH(t, "top", "bottom") };
}
function AH(t, a, r) {
  return { min: ZH(t, a), max: ZH(t, r) };
}
function ZH(t, a) {
  return typeof t == "number" ? t : t[a] || 0;
}
var PH = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 });
var y3 = () => ({ x: PH(), y: PH() });
var EH = () => ({ min: 0, max: 0 });
var L1 = () => ({ x: EH(), y: EH() });
function K2(t) {
  return [t("x"), t("y")];
}
function vl({ top: t, left: a, right: r, bottom: l }) {
  return { x: { min: a, max: r }, y: { min: t, max: l } };
}
function IH({ x: t, y: a }) {
  return { top: a.min, right: t.max, bottom: a.max, left: t.min };
}
function bH(t, a) {
  if (!a)
    return t;
  let r = a({ x: t.left, y: t.top }), l = a({ x: t.right, y: t.bottom });
  return { top: r.y, left: r.x, bottom: l.y, right: l.x };
}
function En(t) {
  return t === void 0 || t === 1;
}
function gl({ scale: t, scaleX: a, scaleY: r }) {
  return !En(t) || !En(a) || !En(r);
}
function D5(t) {
  return gl(t) || In(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function In(t) {
  return DH(t.x) || DH(t.y);
}
function DH(t) {
  return t && t !== "0%";
}
function o7(t, a, r) {
  let l = t - r, c = a * l;
  return r + c;
}
function TH(t, a, r, l, c) {
  return c !== void 0 && (t = o7(t, c, l)), o7(t, r, l) + a;
}
function bn(t, a = 0, r = 1, l, c) {
  t.min = TH(t.min, a, r, l, c), t.max = TH(t.max, a, r, l, c);
}
function Dn(t, { x: a, y: r }) {
  bn(t.x, a.translate, a.scale, a.originPoint), bn(t.y, r.translate, r.scale, r.originPoint);
}
function NH(t, a, r, l = false) {
  let c = r.length;
  if (!c)
    return;
  a.x = a.y = 1;
  let e, h;
  for (let i = 0; i < c; i++) {
    e = r[i], h = e.projectionDelta;
    let n = e.instance;
    n && n.style && n.style.display === "contents" || (l && e.options.layoutScroll && e.scroll && e !== e.root && F3(t, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }), h && (a.x *= h.x.scale, a.y *= h.y.scale, Dn(t, h)), l && D5(e.latestValues) && F3(t, e.latestValues));
  }
  a.x = WH(a.x), a.y = WH(a.y);
}
function WH(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function v5(t, a) {
  t.min = t.min + a, t.max = t.max + a;
}
function jH(t, a, [r, l, c]) {
  let e = a[c] !== void 0 ? a[c] : 0.5, h = r1(t.min, t.max, e);
  bn(t, a[r], a[l], h, a.scale);
}
var sy = ["x", "scaleX", "originX"];
var py = ["y", "scaleY", "originY"];
function F3(t, a) {
  jH(t.x, a, sy), jH(t.y, a, py);
}
function Tn(t, a) {
  return vl(bH(t.getBoundingClientRect(), a));
}
function _H(t, a, r) {
  let l = Tn(t, r), { scroll: c } = a;
  return c && (v5(l.x, c.offset.x), v5(l.y, c.offset.y)), l;
}
var ul = ({ current: t }) => t ? t.ownerDocument.defaultView : null;
var zy = /* @__PURE__ */ new WeakMap();
var pl = class {
  constructor(a) {
    this.openGlobalLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = L1(), this.visualElement = a;
  }
  start(a, { snapToCursor: r = false } = {}) {
    let { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === false)
      return;
    let c = (d) => {
      let { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(w3(d, "page").point);
    }, e = (d, v) => {
      let { drag: g, dragPropagation: u, onDragStart: z } = this.getProps();
      if (g && !u && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = gn(g), !this.openGlobalLock))
        return;
      this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), K2((m) => {
        let p = this.getAxisMotionValue(m).get() || 0;
        if (F2.test(p)) {
          let { projection: s } = this.visualElement;
          if (s && s.layout) {
            let M = s.layout.layoutBox[m];
            M && (p = v2(M) * (parseFloat(p) / 100));
          }
        }
        this.originPoint[m] = p;
      }), z && X.update(() => z(d, v), false, true);
      let { animationState: f } = this.visualElement;
      f && f.setActive("whileDrag", true);
    }, h = (d, v) => {
      let { dragPropagation: g, dragDirectionLock: u, onDirectionLock: z, onDrag: f } = this.getProps();
      if (!g && !this.openGlobalLock)
        return;
      let { offset: m } = v;
      if (u && this.currentDirection === null) {
        this.currentDirection = My(m), this.currentDirection !== null && z && z(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, m), this.updateAxis("y", v.point, m), this.visualElement.render(), f && f(d, v);
    }, i = (d, v) => this.stop(d, v), n = () => K2((d) => {
      var v;
      return this.getAnimationState(d) === "paused" && ((v = this.getAxisMotionValue(d).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: o } = this.getProps();
    this.panSession = new gt(a, { onSessionStart: c, onStart: e, onMove: h, onSessionEnd: i, resumeAnimation: n }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: o, contextWindow: ul(this.visualElement) });
  }
  stop(a, r) {
    let l = this.isDragging;
    if (this.cancel(), !l)
      return;
    let { velocity: c } = r;
    this.startAnimation(c);
    let { onDragEnd: e } = this.getProps();
    e && X.update(() => e(a, r));
  }
  cancel() {
    this.isDragging = false;
    let { projection: a, animationState: r } = this.visualElement;
    a && (a.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    let { dragPropagation: l } = this.getProps();
    !l && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", false);
  }
  updateAxis(a, r, l) {
    let { drag: c } = this.getProps();
    if (!l || !sl(a, c, this.currentDirection))
      return;
    let e = this.getAxisMotionValue(a), h = this.originPoint[a] + l[a];
    this.constraints && this.constraints[a] && (h = SH(h, this.constraints[a], this.elastic[a])), e.set(h);
  }
  resolveConstraints() {
    var a;
    let { dragConstraints: r, dragElastic: l } = this.getProps(), c = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (a = this.visualElement.projection) === null || a === void 0 ? void 0 : a.layout, e = this.constraints;
    r && P5(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && c ? this.constraints = yH(c.layoutBox, r) : this.constraints = false, this.elastic = OH(l), e !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && K2((h) => {
      this.getAxisMotionValue(h) && (this.constraints[h] = RH(c.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    let { dragConstraints: a, onMeasureDragConstraints: r } = this.getProps();
    if (!a || !P5(a))
      return false;
    let l = a.current;
    m2(l !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    let { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return false;
    let e = _H(l, c.root, this.visualElement.getTransformPagePoint()), h = FH(c.layout.layoutBox, e);
    if (r) {
      let i = r(IH(h));
      this.hasMutatedConstraints = !!i, i && (h = vl(i));
    }
    return h;
  }
  startAnimation(a) {
    let { drag: r, dragMomentum: l, dragElastic: c, dragTransition: e, dragSnapToOrigin: h, onDragTransitionEnd: i } = this.getProps(), n = this.constraints || {}, o = K2((d) => {
      if (!sl(d, r, this.currentDirection))
        return;
      let v = n && n[d] || {};
      h && (v = { min: 0, max: 0 });
      let g = c ? 200 : 1e6, u = c ? 40 : 1e7, z = { type: "inertia", velocity: l ? a[d] : 0, bounceStiffness: g, bounceDamping: u, timeConstant: 750, restDelta: 1, restSpeed: 10, ...e, ...v };
      return this.startAxisValueAnimation(d, z);
    });
    return Promise.all(o).then(i);
  }
  startAxisValueAnimation(a, r) {
    let l = this.getAxisMotionValue(a);
    return l.start(nt(a, l, 0, r));
  }
  stopAnimation() {
    K2((a) => this.getAxisMotionValue(a).stop());
  }
  pauseAnimation() {
    K2((a) => {
      var r;
      return (r = this.getAxisMotionValue(a).animation) === null || r === void 0 ? void 0 : r.pause();
    });
  }
  getAnimationState(a) {
    var r;
    return (r = this.getAxisMotionValue(a).animation) === null || r === void 0 ? void 0 : r.state;
  }
  getAxisMotionValue(a) {
    let r = "_drag" + a.toUpperCase(), l = this.visualElement.getProps(), c = l[r];
    return c || this.visualElement.getValue(a, (l.initial ? l.initial[a] : void 0) || 0);
  }
  snapToCursor(a) {
    K2((r) => {
      let { drag: l } = this.getProps();
      if (!sl(r, l, this.currentDirection))
        return;
      let { projection: c } = this.visualElement, e = this.getAxisMotionValue(r);
      if (c && c.layout) {
        let { min: h, max: i } = c.layout.layoutBox[r];
        e.set(a[r] - r1(h, i, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    let { drag: a, dragConstraints: r } = this.getProps(), { projection: l } = this.visualElement;
    if (!P5(r) || !l || !this.constraints)
      return;
    this.stopAnimation();
    let c = { x: 0, y: 0 };
    K2((h) => {
      let i = this.getAxisMotionValue(h);
      if (i) {
        let n = i.get();
        c[h] = kH({ min: n, max: n }, this.constraints[h]);
      }
    });
    let { transformTemplate: e } = this.visualElement.getProps();
    this.visualElement.current.style.transform = e ? e({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), K2((h) => {
      if (!sl(h, a, null))
        return;
      let i = this.getAxisMotionValue(h), { min: n, max: o } = this.constraints[h];
      i.set(r1(n, o, c[h]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    zy.set(this.visualElement, this);
    let a = this.visualElement.current, r = G2(a, "pointerdown", (n) => {
      let { drag: o, dragListener: d = true } = this.getProps();
      o && d && this.start(n);
    }), l = () => {
      let { dragConstraints: n } = this.getProps();
      P5(n) && (this.constraints = this.resolveRefConstraints());
    }, { projection: c } = this.visualElement, e = c.addEventListener("measure", l);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), l();
    let h = U2(window, "resize", () => this.scalePositionWithinConstraints()), i = c.addEventListener("didUpdate", ({ delta: n, hasLayoutChanged: o }) => {
      this.isDragging && o && (K2((d) => {
        let v = this.getAxisMotionValue(d);
        v && (this.originPoint[d] += n[d].translate, v.set(v.get() + n[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      h(), r(), e(), i && i();
    };
  }
  getProps() {
    let a = this.visualElement.getProps(), { drag: r = false, dragDirectionLock: l = false, dragPropagation: c = false, dragConstraints: e = false, dragElastic: h = dl, dragMomentum: i = true } = a;
    return { ...a, drag: r, dragDirectionLock: l, dragPropagation: c, dragConstraints: e, dragElastic: h, dragMomentum: i };
  }
};
function sl(t, a, r) {
  return (a === true || a === t) && (r === null || r === t);
}
function My(t, a = 10) {
  let r = null;
  return Math.abs(t.y) > a ? r = "y" : Math.abs(t.x) > a && (r = "x"), r;
}
var zl = class extends r2 {
  constructor(a) {
    super(a), this.removeGroupControls = i1, this.removeListeners = i1, this.controls = new pl(a);
  }
  mount() {
    let { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || i1;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
};
var UH = (t) => (a, r) => {
  t && X.update(() => t(a, r));
};
var Ml = class extends r2 {
  constructor() {
    super(...arguments), this.removePointerDownListener = i1;
  }
  onPointerDown(a) {
    this.session = new gt(a, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: ul(this.node) });
  }
  createPanHandlers() {
    let { onPanSessionStart: a, onPanStart: r, onPan: l, onPanEnd: c } = this.node.getProps();
    return { onSessionStart: UH(a), onStart: UH(r), onMove: l, onEnd: (e, h) => {
      delete this.session, c && X.update(() => c(e, h));
    } };
  }
  mount() {
    this.removePointerDownListener = G2(this.node.current, "pointerdown", (a) => this.onPointerDown(a));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
};
var ft = I(_(), 1);
var pt = I(_(), 1);
function GH() {
  let t = (0, pt.useContext)(R4);
  if (t === null)
    return [true, null];
  let { isPresent: a, onExitComplete: r, register: l } = t, c = (0, pt.useId)();
  return (0, pt.useEffect)(() => l(c), []), !a && r ? [false, () => r && r(c)] : [true];
}
var zt = { hasAnimatedSinceResize: true, hasEverUpdated: false };
function qH(t, a) {
  return a.max === a.min ? 0 : t / (a.max - a.min) * 100;
}
var Mt = { correct: (t, a) => {
  if (!a.target)
    return t;
  if (typeof t == "string")
    if (W.test(t))
      t = parseFloat(t);
    else
      return t;
  let r = qH(t, a.target.x), l = qH(t, a.target.y);
  return `${r}% ${l}%`;
} };
var KH = { correct: (t, { treeScale: a, projectionDelta: r }) => {
  let l = t, c = R2.parse(t);
  if (c.length > 5)
    return l;
  let e = R2.createTransformer(t), h = typeof c[0] != "number" ? 1 : 0, i = r.x.scale * a.x, n = r.y.scale * a.y;
  c[0 + h] /= i, c[1 + h] /= n;
  let o = r1(i, n, 0.5);
  return typeof c[2 + h] == "number" && (c[2 + h] /= o), typeof c[3 + h] == "number" && (c[3 + h] /= o), e(c);
} };
var Wn = class extends ft.default.Component {
  componentDidMount() {
    let { visualElement: a, layoutGroup: r, switchLayoutGroup: l, layoutId: c } = this.props, { projection: e } = a;
    _M(fy), e && (r.group && r.group.add(e), l && l.register && c && l.register(e), e.root.didUpdate(), e.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), e.setOptions({ ...e.options, onExitComplete: () => this.safeToRemove() })), zt.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(a) {
    let { layoutDependency: r, visualElement: l, drag: c, isPresent: e } = this.props, h = l.projection;
    return h && (h.isPresent = e, c || a.layoutDependency !== r || r === void 0 ? h.willUpdate() : this.safeToRemove(), a.isPresent !== e && (e ? h.promote() : h.relegate() || X.postRender(() => {
      let i = h.getStack();
      (!i || !i.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    let { projection: a } = this.props.visualElement;
    a && (a.root.didUpdate(), _6.postRender(() => {
      !a.currentAnimation && a.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    let { visualElement: a, layoutGroup: r, switchLayoutGroup: l } = this.props, { projection: c } = a;
    c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), l && l.deregister && l.deregister(c));
  }
  safeToRemove() {
    let { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
};
function fl(t) {
  let [a, r] = GH(), l = (0, ft.useContext)(U6);
  return ft.default.createElement(Wn, { ...t, layoutGroup: l, switchLayoutGroup: (0, ft.useContext)(Cr), isPresent: a, safeToRemove: r });
}
var fy = { borderRadius: { ...Mt, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: Mt, borderTopRightRadius: Mt, borderBottomLeftRadius: Mt, borderBottomRightRadius: Mt, boxShadow: KH };
var YH = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var Hy = YH.length;
var $H = (t) => typeof t == "string" ? parseFloat(t) : t;
var XH = (t) => typeof t == "number" || W.test(t);
function JH(t, a, r, l, c, e) {
  c ? (t.opacity = r1(0, r.opacity !== void 0 ? r.opacity : 1, my(l)), t.opacityExit = r1(a.opacity !== void 0 ? a.opacity : 1, 0, xy(l))) : e && (t.opacity = r1(a.opacity !== void 0 ? a.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, l));
  for (let h = 0; h < Hy; h++) {
    let i = `border${YH[h]}Radius`, n = QH(a, i), o = QH(r, i);
    if (n === void 0 && o === void 0)
      continue;
    n || (n = 0), o || (o = 0), n === 0 || o === 0 || XH(n) === XH(o) ? (t[i] = Math.max(r1($H(n), $H(o), l), 0), (F2.test(o) || F2.test(n)) && (t[i] += "%")) : t[i] = o;
  }
  (a.rotate || r.rotate) && (t.rotate = r1(a.rotate || 0, r.rotate || 0, l));
}
function QH(t, a) {
  return t[a] !== void 0 ? t[a] : t.borderRadius;
}
var my = tm(0, 0.5, Ur);
var xy = tm(0.5, 0.95, i1);
function tm(t, a, r) {
  return (l) => l < t ? 0 : l > a ? 1 : r(b5(t, a, l));
}
function am(t, a) {
  t.min = a.min, t.max = a.max;
}
function d0(t, a) {
  am(t.x, a.x), am(t.y, a.y);
}
function rm(t, a, r, l, c) {
  return t -= a, t = o7(t, 1 / r, l), c !== void 0 && (t = o7(t, 1 / c, l)), t;
}
function Vy(t, a = 0, r = 1, l = 0.5, c, e = t, h = t) {
  if (F2.test(a) && (a = parseFloat(a), a = r1(h.min, h.max, a / 100) - h.min), typeof a != "number")
    return;
  let i = r1(e.min, e.max, l);
  t === e && (i -= a), t.min = rm(t.min, a, r, i, c), t.max = rm(t.max, a, r, i, c);
}
function lm(t, a, [r, l, c], e, h) {
  Vy(t, a[r], a[l], a[c], a.scale, e, h);
}
var Cy = ["x", "scaleX", "originX"];
var Ly = ["y", "scaleY", "originY"];
function jn(t, a, r, l) {
  lm(t.x, a, Cy, r ? r.x : void 0, l ? l.x : void 0), lm(t.y, a, Ly, r ? r.y : void 0, l ? l.y : void 0);
}
function cm(t) {
  return t.translate === 0 && t.scale === 1;
}
function Nn(t) {
  return cm(t.x) && cm(t.y);
}
function em(t, a) {
  return t.x.min === a.x.min && t.x.max === a.x.max && t.y.min === a.y.min && t.y.max === a.y.max;
}
function _n(t, a) {
  return Math.round(t.x.min) === Math.round(a.x.min) && Math.round(t.x.max) === Math.round(a.x.max) && Math.round(t.y.min) === Math.round(a.y.min) && Math.round(t.y.max) === Math.round(a.y.max);
}
function Un(t) {
  return v2(t.x) / v2(t.y);
}
var Hl = class {
  constructor() {
    this.members = [];
  }
  add(a) {
    ot(this.members, a), a.scheduleRender();
  }
  remove(a) {
    if (dt(this.members, a), a === this.prevLead && (this.prevLead = void 0), a === this.lead) {
      let r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(a) {
    let r = this.members.findIndex((c) => a === c);
    if (r === 0)
      return false;
    let l;
    for (let c = r; c >= 0; c--) {
      let e = this.members[c];
      if (e.isPresent !== false) {
        l = e;
        break;
      }
    }
    return l ? (this.promote(l), true) : false;
  }
  promote(a, r) {
    let l = this.lead;
    if (a !== l && (this.prevLead = l, this.lead = a, a.show(), l)) {
      l.instance && l.scheduleRender(), a.scheduleRender(), a.resumeFrom = l, r && (a.resumeFrom.preserveOpacity = true), l.snapshot && (a.snapshot = l.snapshot, a.snapshot.latestValues = l.animationValues || l.latestValues), a.root && a.root.isUpdating && (a.isLayoutDirty = true);
      let { crossfade: c } = a.options;
      c === false && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      let { options: r, resumingFrom: l } = a;
      r.onExitComplete && r.onExitComplete(), l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((a) => {
      a.instance && a.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Gn(t, a, r) {
  let l = "", c = t.x.translate / a.x, e = t.y.translate / a.y;
  if ((c || e) && (l = `translate3d(${c}px, ${e}px, 0) `), (a.x !== 1 || a.y !== 1) && (l += `scale(${1 / a.x}, ${1 / a.y}) `), r) {
    let { rotate: n, rotateX: o, rotateY: d } = r;
    n && (l += `rotate(${n}deg) `), o && (l += `rotateX(${o}deg) `), d && (l += `rotateY(${d}deg) `);
  }
  let h = t.x.scale * a.x, i = t.y.scale * a.y;
  return (h !== 1 || i !== 1) && (l += `scale(${h}, ${i})`), l || "none";
}
var hm = (t, a) => t.depth - a.depth;
var ml = class {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(a) {
    ot(this.children, a), this.isDirty = true;
  }
  remove(a) {
    dt(this.children, a), this.isDirty = true;
  }
  forEach(a) {
    this.isDirty && this.children.sort(hm), this.isDirty = false, this.children.forEach(a);
  }
};
function im(t, a) {
  let r = T0.now(), l = ({ timestamp: c }) => {
    let e = c - r;
    e >= a && (k2(l), t(e - a));
  };
  return X.read(l, true), () => k2(l);
}
function nm(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function om(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function dm(t, a, r) {
  let l = A1(t) ? t : d5(t);
  return l.start(nt("", l, a, r)), l.animation;
}
var vm = ["", "X", "Y", "Z"];
var By = { visibility: "hidden" };
var gm = 1e3;
var wy = 0;
var k3 = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function xl({ attachResizeListener: t, defaultParent: a, measureScroll: r, checkIsScrollRoot: l, resetTransform: c }) {
  return class {
    constructor(h = {}, i = a?.()) {
      this.id = wy++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, k3.totalNodes = k3.resolvedTargetDeltas = k3.recalculatedProjection = 0, this.nodes.forEach(Sy), this.nodes.forEach(Oy), this.nodes.forEach(Py), this.nodes.forEach(yy), nm(k3);
      }, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
      for (let n = 0; n < this.path.length; n++)
        this.path[n].shouldResetTransform = true;
      this.root === this && (this.nodes = new ml());
    }
    addEventListener(h, i) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new j4()), this.eventHandlers.get(h).add(i);
    }
    notifyListeners(h, ...i) {
      let n = this.eventHandlers.get(h);
      n && n.notify(...i);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, i = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = om(h), this.instance = h;
      let { layoutId: n, layout: o, visualElement: d } = this.options;
      if (d && !d.current && d.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (o || n) && (this.isLayoutDirty = true), t) {
        let v, g = () => this.root.updateBlockedByResize = false;
        t(h, () => {
          this.root.updateBlockedByResize = true, v && v(), v = im(g, 250), zt.hasAnimatedSinceResize && (zt.hasAnimatedSinceResize = false, this.nodes.forEach(sm));
        });
      }
      n && this.root.registerSharedNode(n, this), this.options.animate !== false && d && (n || o) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: g, hasRelativeTargetChanged: u, layout: z }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let f = this.options.transition || d.getDefaultTransition() || Ty, { onLayoutAnimationStart: m, onLayoutAnimationComplete: p } = d.getProps(), s = !this.targetLayout || !_n(this.targetLayout, z) || u, M = !g && u;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || g && (s || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, M);
          let x = { ...it(f, "layout"), onPlay: m, onComplete: p };
          (d.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = false), this.startAnimation(x);
        } else
          g || sm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = z;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, k2(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Ey), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let d = 0; d < this.path.length; d++) {
        let v = this.path[d];
        v.shouldResetTransform = true, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(false);
      }
      let { layoutId: i, layout: n } = this.options;
      if (i === void 0 && !n)
        return;
      let o = this.getTransformTemplate();
      this.prevTransformTemplateValue = o ? o(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(um);
        return;
      }
      this.isUpdating || this.nodes.forEach(ky), this.isUpdating = false, this.nodes.forEach(Ry), this.nodes.forEach(Ay), this.nodes.forEach(Zy), this.clearAllSnapshots();
      let i = T0.now();
      W1.delta = y2(0, 1e3 / 60, i - W1.timestamp), W1.timestamp = i, W1.isProcessing = true, Or.update.process(W1), Or.preRender.process(W1), Or.render.process(W1), W1.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, _6.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Fy), this.sharedNodes.forEach(Iy);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, X.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      X.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let n = 0; n < this.path.length; n++)
          this.path[n].updateScroll();
      let h = this.layout;
      this.layout = this.measure(false), this.layoutCorrected = L1(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: i } = this.options;
      i && i.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let i = Boolean(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (i = false), i && (this.scroll = { animationId: this.root.animationId, phase: h, isRoot: l(this.instance), offset: r(this.instance) });
    }
    resetTransform() {
      if (!c)
        return;
      let h = this.isLayoutDirty || this.shouldResetTransform, i = this.projectionDelta && !Nn(this.projectionDelta), n = this.getTransformTemplate(), o = n ? n(this.latestValues, "") : void 0, d = o !== this.prevTransformTemplateValue;
      h && (i || D5(this.latestValues) || d) && (c(this.instance, o), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(h = true) {
      let i = this.measurePageBox(), n = this.removeElementScroll(i);
      return h && (n = this.removeTransform(n)), Wy(n), { animationId: this.root.animationId, measuredBox: i, layoutBox: n, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      let { visualElement: h } = this.options;
      if (!h)
        return L1();
      let i = h.measureViewportBox(), { scroll: n } = this.root;
      return n && (v5(i.x, n.offset.x), v5(i.y, n.offset.y)), i;
    }
    removeElementScroll(h) {
      let i = L1();
      d0(i, h);
      for (let n = 0; n < this.path.length; n++) {
        let o = this.path[n], { scroll: d, options: v } = o;
        if (o !== this.root && d && v.layoutScroll) {
          if (d.isRoot) {
            d0(i, h);
            let { scroll: g } = this.root;
            g && (v5(i.x, -g.offset.x), v5(i.y, -g.offset.y));
          }
          v5(i.x, d.offset.x), v5(i.y, d.offset.y);
        }
      }
      return i;
    }
    applyTransform(h, i = false) {
      let n = L1();
      d0(n, h);
      for (let o = 0; o < this.path.length; o++) {
        let d = this.path[o];
        !i && d.options.layoutScroll && d.scroll && d !== d.root && F3(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }), D5(d.latestValues) && F3(n, d.latestValues);
      }
      return D5(this.latestValues) && F3(n, this.latestValues), n;
    }
    removeTransform(h) {
      let i = L1();
      d0(i, h);
      for (let n = 0; n < this.path.length; n++) {
        let o = this.path[n];
        if (!o.instance || !D5(o.latestValues))
          continue;
        gl(o.latestValues) && o.updateSnapshot();
        let d = L1(), v = o.measurePageBox();
        d0(d, v), jn(i, o.latestValues, o.snapshot ? o.snapshot.layoutBox : void 0, d);
      }
      return D5(this.latestValues) && jn(i, this.latestValues), i;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(h) {
      this.options = { ...this.options, ...h, crossfade: h.crossfade !== void 0 ? h.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W1.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(h = false) {
      var i;
      let n = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
      let o = Boolean(this.resumingFrom) || this !== n;
      if (!(h || o && this.isSharedProjectionDirty || this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      let { layout: v, layoutId: g } = this.options;
      if (!(!this.layout || !(v || g))) {
        if (this.resolvedRelativeTargetAt = W1.timestamp, !this.targetDelta && !this.relativeTarget) {
          let u = this.getClosestProjectingParent();
          u && u.layout && this.animationProgress !== 1 ? (this.relativeParent = u, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L1(), this.relativeTargetOrigin = L1(), st(this.relativeTargetOrigin, this.layout.layoutBox, u.layout.layoutBox), d0(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = L1(), this.targetWithTransforms = L1()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), LH(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : d0(this.target, this.layout.layoutBox), Dn(this.target, this.targetDelta)) : d0(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = false;
            let u = this.getClosestProjectingParent();
            u && Boolean(u.resumingFrom) === Boolean(this.resumingFrom) && !u.options.layoutScroll && u.target && this.animationProgress !== 1 ? (this.relativeParent = u, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L1(), this.relativeTargetOrigin = L1(), st(this.relativeTargetOrigin, this.target, u.target), d0(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          k3.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || gl(this.parent.latestValues) || In(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var h;
      let i = this.getLead(), n = Boolean(this.resumingFrom) || this !== i, o = true;
      if ((this.isProjectionDirty || !((h = this.parent) === null || h === void 0) && h.isProjectionDirty) && (o = false), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = false), this.resolvedRelativeTargetAt === W1.timestamp && (o = false), o)
        return;
      let { layout: d, layoutId: v } = this.options;
      if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || v))
        return;
      d0(this.layoutCorrected, this.layout.layoutBox);
      let g = this.treeScale.x, u = this.treeScale.y;
      NH(this.layoutCorrected, this.treeScale, this.path, n), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = L1());
      let { target: z } = i;
      if (!z) {
        this.projectionTransform && (this.projectionDelta = y3(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = y3(), this.projectionDeltaWithTransform = y3());
      let f = this.projectionTransform;
      ut(this.projectionDelta, this.layoutCorrected, z, this.latestValues), this.projectionTransform = Gn(this.projectionDelta, this.treeScale), (this.projectionTransform !== f || this.treeScale.x !== g || this.treeScale.y !== u) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", z)), k3.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(h = true) {
      if (this.options.scheduleRender && this.options.scheduleRender(), h) {
        let i = this.getStack();
        i && i.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(h, i = false) {
      let n = this.snapshot, o = n ? n.latestValues : {}, d = { ...this.latestValues }, v = y3();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
      let g = L1(), u = n ? n.source : void 0, z = this.layout ? this.layout.source : void 0, f = u !== z, m = this.getStack(), p = !m || m.members.length <= 1, s = Boolean(f && !p && this.options.crossfade === true && !this.path.some(Dy));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (x) => {
        let C = x / 1e3;
        pm(v.x, h.x, C), pm(v.y, h.y, C), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (st(g, this.layout.layoutBox, this.relativeParent.layout.layoutBox), by(this.relativeTarget, this.relativeTargetOrigin, g, C), M && em(this.relativeTarget, M) && (this.isProjectionDirty = false), M || (M = L1()), d0(M, this.relativeTarget)), f && (this.animationValues = d, JH(d, o, this.latestValues, C, s, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (k2(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = X.update(() => {
        zt.hasAnimatedSinceResize = true, this.currentAnimation = dm(0, gm, { ...h, onUpdate: (i) => {
          this.mixTargetDelta(i), h.onUpdate && h.onUpdate(i);
        }, onComplete: () => {
          h.onComplete && h.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let h = this.getLead(), { targetWithTransforms: i, target: n, layout: o, latestValues: d } = h;
      if (!(!i || !n || !o)) {
        if (this !== h && this.layout && o && mm(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
          n = this.target || L1();
          let v = v2(this.layout.layoutBox.x);
          n.x.min = h.target.x.min, n.x.max = n.x.min + v;
          let g = v2(this.layout.layoutBox.y);
          n.y.min = h.target.y.min, n.y.max = n.y.min + g;
        }
        d0(i, n), F3(i, d), ut(this.projectionDeltaWithTransform, this.layoutCorrected, i, d);
      }
    }
    registerSharedNode(h, i) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new Hl()), this.sharedNodes.get(h).add(i);
      let o = i.options.initialPromotionConfig;
      i.promote({ transition: o ? o.transition : void 0, preserveFollowOpacity: o && o.shouldPreserveFollowOpacity ? o.shouldPreserveFollowOpacity(i) : void 0 });
    }
    isLead() {
      let h = this.getStack();
      return h ? h.lead === this : true;
    }
    getLead() {
      var h;
      let { layoutId: i } = this.options;
      return i ? ((h = this.getStack()) === null || h === void 0 ? void 0 : h.lead) || this : this;
    }
    getPrevLead() {
      var h;
      let { layoutId: i } = this.options;
      return i ? (h = this.getStack()) === null || h === void 0 ? void 0 : h.prevLead : void 0;
    }
    getStack() {
      let { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: i, preserveFollowOpacity: n } = {}) {
      let o = this.getStack();
      o && o.promote(this, n), h && (this.projectionDelta = void 0, this.needsReset = true), i && this.setOptions({ transition: i });
    }
    relegate() {
      let h = this.getStack();
      return h ? h.relegate(this) : false;
    }
    resetRotation() {
      let { visualElement: h } = this.options;
      if (!h)
        return;
      let i = false, { latestValues: n } = h;
      if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (i = true), !i)
        return;
      let o = {};
      for (let d = 0; d < vm.length; d++) {
        let v = "rotate" + vm[d];
        n[v] && (o[v] = n[v], h.setStaticValue(v, 0));
      }
      h.render();
      for (let d in o)
        h.setStaticValue(d, o[d]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      var i, n;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return By;
      let o = { visibility: "" }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = false, o.opacity = "", o.pointerEvents = lt(h?.pointerEvents) || "", o.transform = d ? d(this.latestValues, "") : "none", o;
      let v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        let f = {};
        return this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = lt(h?.pointerEvents) || ""), this.hasProjected && !D5(this.latestValues) && (f.transform = d ? d({}, "") : "none", this.hasProjected = false), f;
      }
      let g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), o.transform = Gn(this.projectionDeltaWithTransform, this.treeScale, g), d && (o.transform = d(g, o.transform));
      let { x: u, y: z } = this.projectionDelta;
      o.transformOrigin = `${u.origin * 100}% ${z.origin * 100}% 0`, v.animationValues ? o.opacity = v === this ? (n = (i = g.opacity) !== null && i !== void 0 ? i : this.latestValues.opacity) !== null && n !== void 0 ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : o.opacity = v === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (let f in q6) {
        if (g[f] === void 0)
          continue;
        let { correct: m, applyTo: p } = q6[f], s = o.transform === "none" ? g[f] : m(g[f], v);
        if (p) {
          let M = p.length;
          for (let x = 0; x < M; x++)
            o[p[x]] = s;
        } else
          o[f] = s;
      }
      return this.options.layoutId && (o.pointerEvents = v === this ? lt(h?.pointerEvents) || "" : "none"), o;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var i;
        return (i = h.currentAnimation) === null || i === void 0 ? void 0 : i.stop();
      }), this.root.nodes.forEach(um), this.root.sharedNodes.clear();
    }
  };
}
function Ay(t) {
  t.updateLayout();
}
function Zy(t) {
  var a;
  let r = ((a = t.resumeFrom) === null || a === void 0 ? void 0 : a.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
    let { layoutBox: l, measuredBox: c } = t.layout, { animationType: e } = t.options, h = r.source !== t.layout.source;
    e === "size" ? K2((v) => {
      let g = h ? r.measuredBox[v] : r.layoutBox[v], u = v2(g);
      g.min = l[v].min, g.max = g.min + u;
    }) : mm(e, r.layoutBox, l) && K2((v) => {
      let g = h ? r.measuredBox[v] : r.layoutBox[v], u = v2(l[v]);
      g.max = g.min + u, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[v].max = t.relativeTarget[v].min + u);
    });
    let i = y3();
    ut(i, l, r.layoutBox);
    let n = y3();
    h ? ut(n, t.applyTransform(c, true), r.measuredBox) : ut(n, l, r.layoutBox);
    let o = !Nn(i), d = false;
    if (!t.resumeFrom) {
      let v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        let { snapshot: g, layout: u } = v;
        if (g && u) {
          let z = L1();
          st(z, r.layoutBox, g.layoutBox);
          let f = L1();
          st(f, l, u.layoutBox), _n(z, f) || (d = true), v.options.layoutRoot && (t.relativeTarget = f, t.relativeTargetOrigin = z, t.relativeParent = v);
        }
      }
    }
    t.notifyListeners("didUpdate", { layout: l, snapshot: r, delta: n, layoutDelta: i, hasLayoutChanged: o, hasRelativeTargetChanged: d });
  } else if (t.isLead()) {
    let { onExitComplete: l } = t.options;
    l && l();
  }
  t.options.transition = void 0;
}
function Sy(t) {
  k3.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function yy(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function Fy(t) {
  t.clearSnapshot();
}
function um(t) {
  t.clearMeasurements();
}
function ky(t) {
  t.isLayoutDirty = false;
}
function Ry(t) {
  let { visualElement: a } = t.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function sm(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
}
function Oy(t) {
  t.resolveTargetDelta();
}
function Py(t) {
  t.calcProjection();
}
function Ey(t) {
  t.resetRotation();
}
function Iy(t) {
  t.removeLeadSnapshot();
}
function pm(t, a, r) {
  t.translate = r1(a.translate, 0, r), t.scale = r1(a.scale, 1, r), t.origin = a.origin, t.originPoint = a.originPoint;
}
function zm(t, a, r, l) {
  t.min = r1(a.min, r.min, l), t.max = r1(a.max, r.max, l);
}
function by(t, a, r, l) {
  zm(t.x, a.x, r.x, l), zm(t.y, a.y, r.y, l);
}
function Dy(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
var Ty = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
var Mm = (t) => typeof navigator < "u" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().includes(t);
var fm = Mm("applewebkit/") && !Mm("chrome/") ? Math.round : i1;
function Hm(t) {
  t.min = fm(t.min), t.max = fm(t.max);
}
function Wy(t) {
  Hm(t.x), Hm(t.y);
}
function mm(t, a, r) {
  return t === "position" || t === "preserve-aspect" && !ol(Un(a), Un(r), 0.2);
}
var xm = xl({ attachResizeListener: (t, a) => U2(t, "resize", a), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true });
var qn = { current: void 0 };
var Vl = xl({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
  if (!qn.current) {
    let t = new xm({});
    t.mount(window), t.setOptions({ layoutScroll: true }), qn.current = t;
  }
  return qn.current;
}, resetTransform: (t, a) => {
  t.style.transform = a !== void 0 ? a : "none";
}, checkIsScrollRoot: (t) => Boolean(window.getComputedStyle(t).position === "fixed") });
var Vm = { pan: { Feature: Ml }, drag: { Feature: zl, ProjectionNode: Vl, MeasureLayout: fl } };
var jy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ny(t) {
  let a = jy.exec(t);
  if (!a)
    return [,];
  let [, r, l] = a;
  return [r, l];
}
var _y = 4;
function Kn(t, a, r = 1) {
  m2(r <= _y, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  let [l, c] = Ny(t);
  if (!l)
    return;
  let e = window.getComputedStyle(a).getPropertyValue(l);
  if (e) {
    let h = e.trim();
    return ll(h) ? parseFloat(h) : h;
  } else
    return K6(c) ? Kn(c, a, r + 1) : c;
}
function Cm(t, { ...a }, r) {
  let l = t.current;
  if (!(l instanceof Element))
    return { target: a, transitionEnd: r };
  r && (r = { ...r }), t.values.forEach((c) => {
    let e = c.get();
    if (!K6(e))
      return;
    let h = Kn(e, l);
    h && c.set(h);
  });
  for (let c in a) {
    let e = a[c];
    if (!K6(e))
      continue;
    let h = Kn(e, l);
    h && (a[c] = h, r || (r = {}), r[c] === void 0 && (r[c] = e));
  }
  return { target: a, transitionEnd: r };
}
var Uy = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
var wm = (t) => Uy.has(t);
var Gy = (t) => Object.keys(t).some(wm);
var Cl = (t) => t === i5 || t === W;
var Lm = (t, a) => parseFloat(t.split(", ")[a]);
var Bm = (t, a) => (r, { transform: l }) => {
  if (l === "none" || !l)
    return 0;
  let c = l.match(/^matrix3d\((.+)\)$/);
  if (c)
    return Lm(c[1], a);
  {
    let e = l.match(/^matrix\((.+)\)$/);
    return e ? Lm(e[1], t) : 0;
  }
};
var qy = /* @__PURE__ */ new Set(["x", "y", "z"]);
var Ky = E4.filter((t) => !qy.has(t));
function $y(t) {
  let a = [];
  return Ky.forEach((r) => {
    let l = t.getValue(r);
    l !== void 0 && (a.push([r, l.get()]), l.set(r.startsWith("scale") ? 1 : 0));
  }), a.length && t.render(), a;
}
var Ht = { width: ({ x: t }, { paddingLeft: a = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(a) - parseFloat(r), height: ({ y: t }, { paddingTop: a = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(a) - parseFloat(r), top: (t, { top: a }) => parseFloat(a), left: (t, { left: a }) => parseFloat(a), bottom: ({ y: t }, { top: a }) => parseFloat(a) + (t.max - t.min), right: ({ x: t }, { left: a }) => parseFloat(a) + (t.max - t.min), x: Bm(4, 13), y: Bm(5, 14) };
Ht.translateX = Ht.x;
Ht.translateY = Ht.y;
var Xy = (t, a, r) => {
  let l = a.measureViewportBox(), c = a.current, e = getComputedStyle(c), { display: h } = e, i = {};
  h === "none" && a.setStaticValue("display", t.display || "block"), r.forEach((o) => {
    i[o] = Ht[o](l, e);
  }), a.render();
  let n = a.measureViewportBox();
  return r.forEach((o) => {
    let d = a.getValue(o);
    d && d.jump(i[o]), t[o] = Ht[o](n, e);
  }), t;
};
var Qy = (t, a, r = {}, l = {}) => {
  a = { ...a }, l = { ...l };
  let c = Object.keys(a).filter(wm), e = [], h = false, i = [];
  if (c.forEach((n) => {
    let o = t.getValue(n);
    if (!t.hasValue(n))
      return;
    let d = r[n], v = vt(d), g = a[n], u;
    if (B3(g)) {
      let z = g.length, f = g[0] === null ? 1 : 0;
      d = g[f], v = vt(d);
      for (let m = f; m < z && g[m] !== null; m++)
        u ? m2(vt(g[m]) === u, "All keyframes must be of the same type") : (u = vt(g[m]), m2(u === v || Cl(v) && Cl(u), "Keyframes must be of the same dimension as the current value"));
    } else
      u = vt(g);
    if (v !== u)
      if (Cl(v) && Cl(u)) {
        let z = o.get();
        typeof z == "string" && o.set(parseFloat(z)), typeof g == "string" ? a[n] = parseFloat(g) : Array.isArray(g) && u === W && (a[n] = g.map(parseFloat));
      } else
        v?.transform && u?.transform && (d === 0 || g === 0) ? d === 0 ? o.set(u.transform(d)) : a[n] = v.transform(g) : (h || (e = $y(t), h = true), i.push(n), l[n] = l[n] !== void 0 ? l[n] : a[n], o.jump(g));
  }), i.length) {
    let n = i.indexOf("height") >= 0 ? window.pageYOffset : null, o = Xy(a, t, i);
    return e.length && e.forEach(([d, v]) => {
      t.getValue(d).set(v);
    }), t.render(), O4 && n !== null && window.scrollTo({ top: n }), { target: o, transitionEnd: l };
  } else
    return { target: a, transitionEnd: l };
};
function Am(t, a, r, l) {
  return Gy(a) ? Qy(t, a, r, l) : { target: a, transitionEnd: l };
}
var Zm = (t, a, r, l) => {
  let c = Cm(t, a, l);
  return a = c.target, l = c.transitionEnd, Am(t, a, r, l);
};
var d7 = { current: null };
var Ll = { current: false };
function Sm() {
  if (Ll.current = true, !!O4)
    if (window.matchMedia) {
      let t = window.matchMedia("(prefers-reduced-motion)"), a = () => d7.current = t.matches;
      t.addListener(a), a();
    } else
      d7.current = false;
}
function ym(t, a, r) {
  let { willChange: l } = a;
  for (let c in a) {
    let e = a[c], h = r[c];
    if (A1(e))
      t.addValue(c, e), Z3(l) && l.add(c);
    else if (A1(h))
      t.addValue(c, d5(e, { owner: t })), Z3(l) && l.remove(c);
    else if (h !== e)
      if (t.hasValue(c)) {
        let i = t.getValue(c);
        !i.hasAnimated && i.set(e);
      } else {
        let i = t.getStaticValue(c);
        t.addValue(c, d5(i !== void 0 ? i : e, { owner: t }));
      }
  }
  for (let c in r)
    a[c] === void 0 && t.removeValue(c);
  return a;
}
var $n = /* @__PURE__ */ new WeakMap();
var km = Object.keys(C3);
var Yy = km.length;
var Fm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var Jy = Y8.length;
var Bl = class {
  constructor({ parent: a, props: r, presenceContext: l, reducedMotionConfig: c, visualState: e }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => X.render(this.render, false, true);
    let { latestValues: i, renderState: n } = e;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = r.initial ? { ...i } : {}, this.renderState = n, this.parent = a, this.props = r, this.presenceContext = l, this.depth = a ? a.depth + 1 : 0, this.reducedMotionConfig = c, this.options = h, this.isControllingVariants = V3(r), this.isVariantNode = xr(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = Boolean(a && a.current);
    let { willChange: o, ...d } = this.scrapeMotionValuesFromProps(r, {});
    for (let v in d) {
      let g = d[v];
      i[v] !== void 0 && A1(g) && (g.set(i[v], false), Z3(o) && o.add(v));
    }
  }
  scrapeMotionValuesFromProps(a, r) {
    return {};
  }
  mount(a) {
    this.current = a, $n.set(a, this), this.projection && !this.projection.instance && this.projection.mount(a), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, l) => this.bindToMotionValue(l, r)), Ll.current || Sm(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : d7.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    $n.delete(this.current), this.projection && this.projection.unmount(), k2(this.notifyUpdate), k2(this.render), this.valueSubscriptions.forEach((a) => a()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (let a in this.events)
      this.events[a].clear();
    for (let a in this.features)
      this.features[a].unmount();
    this.current = null;
  }
  bindToMotionValue(a, r) {
    let l = _2.has(a), c = r.on("change", (h) => {
      this.latestValues[a] = h, this.props.onUpdate && X.update(this.notifyUpdate, false, true), l && this.projection && (this.projection.isTransformDirty = true);
    }), e = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(a, () => {
      c(), e();
    });
  }
  sortNodePosition(a) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== a.type ? 0 : this.sortInstanceNodePosition(this.current, a.current);
  }
  loadFeatures({ children: a, ...r }, l, c, e) {
    let h, i;
    for (let n = 0; n < Yy; n++) {
      let o = km[n], { isEnabled: d, Feature: v, ProjectionNode: g, MeasureLayout: u } = C3[o];
      g && (h = g), d(r) && (!this.features[o] && v && (this.features[o] = new v(this)), u && (i = u));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && h) {
      this.projection = new h(this.latestValues, this.parent && this.parent.projection);
      let { layoutId: n, layout: o, drag: d, dragConstraints: v, layoutScroll: g, layoutRoot: u } = r;
      this.projection.setOptions({ layoutId: n, layout: o, alwaysMeasureLayout: Boolean(d) || v && P5(v), visualElement: this, scheduleRender: () => this.scheduleRender(), animationType: typeof o == "string" ? o : "both", initialPromotionConfig: e, layoutScroll: g, layoutRoot: u });
    }
    return i;
  }
  updateFeatures() {
    for (let a in this.features) {
      let r = this.features[a];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = true);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : L1();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, r) {
    this.latestValues[a] = r;
  }
  makeTargetAnimatable(a, r = true) {
    return this.makeTargetAnimatableFromInstance(a, r);
  }
  update(a, r) {
    (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = a, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let l = 0; l < Fm.length; l++) {
      let c = Fm[l];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      let e = a["on" + c];
      e && (this.propEventSubscriptions[c] = this.on(c, e));
    }
    this.prevMotionValues = ym(this, this.scrapeMotionValuesFromProps(a, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(a = false) {
    if (a)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      let l = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (l.initial = this.props.initial), l;
    }
    let r = {};
    for (let l = 0; l < Jy; l++) {
      let c = Y8[l], e = this.props[c];
      (E5(e) || e === false) && (r[c] = e);
    }
    return r;
  }
  addVariantChild(a) {
    let r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(a), () => r.variantChildren.delete(a);
  }
  addValue(a, r) {
    r !== this.values.get(a) && (this.removeValue(a), this.bindToMotionValue(a, r)), this.values.set(a, r), this.latestValues[a] = r.get();
  }
  removeValue(a) {
    this.values.delete(a);
    let r = this.valueSubscriptions.get(a);
    r && (r(), this.valueSubscriptions.delete(a)), delete this.latestValues[a], this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, r) {
    if (this.props.values && this.props.values[a])
      return this.props.values[a];
    let l = this.values.get(a);
    return l === void 0 && r !== void 0 && (l = d5(r, { owner: this }), this.addValue(a, l)), l;
  }
  readValue(a) {
    var r;
    return this.latestValues[a] !== void 0 || !this.current ? this.latestValues[a] : (r = this.getBaseTargetFromProps(this.props, a)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, a, this.options);
  }
  setBaseTarget(a, r) {
    this.baseTarget[a] = r;
  }
  getBaseTarget(a) {
    var r;
    let { initial: l } = this.props, c = typeof l == "string" || typeof l == "object" ? (r = rt(this.props, l)) === null || r === void 0 ? void 0 : r[a] : void 0;
    if (l && c !== void 0)
      return c;
    let e = this.getBaseTargetFromProps(this.props, a);
    return e !== void 0 && !A1(e) ? e : this.initialValues[a] !== void 0 && c === void 0 ? void 0 : this.baseTarget[a];
  }
  on(a, r) {
    return this.events[a] || (this.events[a] = new j4()), this.events[a].add(r);
  }
  notify(a, ...r) {
    this.events[a] && this.events[a].notify(...r);
  }
};
var mt = class extends Bl {
  sortInstanceNodePosition(a, r) {
    return a.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, r) {
    return a.style ? a.style[r] : void 0;
  }
  removeValueFromRenderState(a, { vars: r, style: l }) {
    delete r[a], delete l[a];
  }
  makeTargetAnimatableFromInstance({ transition: a, transitionEnd: r, ...l }, c) {
    let e = uH(l, a || {}, this);
    if (c) {
      gH(this, l, e);
      let h = Zm(this, l, e, r);
      r = h.transitionEnd, l = h.target;
    }
    return { transition: a, transitionEnd: r, ...l };
  }
};
function tF(t) {
  return window.getComputedStyle(t);
}
var wl = class extends mt {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(a, r) {
    if (_2.has(r)) {
      let l = ht(r);
      return l && l.default || 0;
    } else {
      let l = tF(a), c = (Br(r) ? l.getPropertyValue(r) : l[r]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: r }) {
    return Tn(a, r);
  }
  build(a, r, l, c) {
    X6(a, r, l, c.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, r) {
    return at(a, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let { children: a } = this.props;
    A1(a) && (this.childSubscription = a.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(a, r, l, c) {
    Zr(a, r, l, c);
  }
};
var Al = class extends mt {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false;
  }
  getBaseTargetFromProps(a, r) {
    return a[r];
  }
  readValueFromInstance(a, r) {
    if (_2.has(r)) {
      let l = ht(r);
      return l && l.default || 0;
    }
    return r = Sr.has(r) ? r : j6(r), a.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return L1();
  }
  scrapeMotionValuesFromProps(a, r) {
    return Fr(a, r);
  }
  build(a, r, l, c) {
    Y6(a, r, l, this.isSVGTag, c.transformTemplate);
  }
  renderInstance(a, r, l, c) {
    yr(a, r, l, c);
  }
  mount(a) {
    this.isSVGTag = J6(a.tagName), super.mount(a);
  }
};
var Rm = (t, a) => G6(t) ? new Al(a, { enableHardwareAcceleration: false }) : new wl(a, { enableHardwareAcceleration: true });
var Om = { layout: { ProjectionNode: Vl, MeasureLayout: fl } };
var aF = { ...zH, ...Bf, ...Vm, ...Om };
var N4 = jM((t, a) => ff(t, a, aF, Rm));
var T5 = I(_(), 1);
var v0 = I(_(), 1);
var v7 = I(_(), 1);
var Pm = I(_(), 1);
function Zl() {
  let t = (0, Pm.useRef)(false);
  return W6(() => (t.current = true, () => {
    t.current = false;
  }), []), t;
}
function Em() {
  let t = Zl(), [a, r] = (0, v7.useState)(0), l = (0, v7.useCallback)(() => {
    t.current && r(a + 1);
  }, [a]);
  return [(0, v7.useCallback)(() => X.postRender(l), [l]), a];
}
var g7 = I(_(), 1);
var u7 = I(_(), 1);
var xt = I(_(), 1);
var R3 = I(_(), 1);
var Xn = class extends xt.Component {
  getSnapshotBeforeUpdate(a) {
    let r = this.props.childRef.current;
    if (r && a.isPresent && !this.props.isPresent) {
      let l = this.props.sizeRef.current;
      l.height = r.offsetHeight || 0, l.width = r.offsetWidth || 0, l.top = r.offsetTop, l.left = r.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function Im({ children: t, isPresent: a }) {
  let r = (0, R3.useId)(), l = (0, R3.useRef)(null), c = (0, R3.useRef)({ width: 0, height: 0, top: 0, left: 0 });
  return (0, R3.useInsertionEffect)(() => {
    let { width: e, height: h, top: i, left: n } = c.current;
    if (a || !l.current || !e || !h)
      return;
    l.current.dataset.motionPopId = r;
    let o = document.createElement("style");
    return document.head.appendChild(o), o.sheet && o.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${h}px !important;
            top: ${i}px !important;
            left: ${n}px !important;
          }
        `), () => {
      document.head.removeChild(o);
    };
  }, [a]), xt.createElement(Xn, { isPresent: a, childRef: l, sizeRef: c }, xt.cloneElement(t, { ref: l }));
}
var Sl = ({ children: t, initial: a, isPresent: r, onExitComplete: l, custom: c, presenceAffectsLayout: e, mode: h }) => {
  let i = kr(rF), n = (0, u7.useId)(), o = (0, u7.useMemo)(() => ({ id: n, initial: a, isPresent: r, custom: c, onExitComplete: (d) => {
    i.set(d, true);
    for (let v of i.values())
      if (!v)
        return;
    l && l();
  }, register: (d) => (i.set(d, false), () => i.delete(d)) }), e ? void 0 : [r]);
  return (0, u7.useMemo)(() => {
    i.forEach((d, v) => i.set(v, false));
  }, [r]), g7.useEffect(() => {
    !r && !i.size && l && l();
  }, [r]), h === "popLayout" && (t = g7.createElement(Im, { isPresent: r }, t)), g7.createElement(R4.Provider, { value: o }, t);
};
function rF() {
  return /* @__PURE__ */ new Map();
}
var bm = I(_(), 1);
function Dm(t) {
  return (0, bm.useEffect)(() => () => t(), []);
}
var O3 = (t) => t.key || "";
function lF(t, a) {
  t.forEach((r) => {
    let l = O3(r);
    a.set(l, r);
  });
}
function cF(t) {
  let a = [];
  return v0.Children.forEach(t, (r) => {
    (0, v0.isValidElement)(r) && a.push(r);
  }), a;
}
var yl = ({ children: t, custom: a, initial: r = true, onExitComplete: l, exitBeforeEnter: c, presenceAffectsLayout: e = true, mode: h = "sync" }) => {
  m2(!c, "Replace exitBeforeEnter with mode='wait'");
  let i = (0, v0.useContext)(U6).forceRender || Em()[0], n = Zl(), o = cF(t), d = o, v = (0, v0.useRef)(/* @__PURE__ */ new Map()).current, g = (0, v0.useRef)(d), u = (0, v0.useRef)(/* @__PURE__ */ new Map()).current, z = (0, v0.useRef)(true);
  if (W6(() => {
    z.current = false, lF(o, u), g.current = d;
  }), Dm(() => {
    z.current = true, u.clear(), v.clear();
  }), z.current)
    return T5.createElement(T5.Fragment, null, d.map((s) => T5.createElement(Sl, { key: O3(s), isPresent: true, initial: r ? void 0 : false, presenceAffectsLayout: e, mode: h }, s)));
  d = [...d];
  let f = g.current.map(O3), m = o.map(O3), p = f.length;
  for (let s = 0; s < p; s++) {
    let M = f[s];
    m.indexOf(M) === -1 && !v.has(M) && v.set(M, void 0);
  }
  return h === "wait" && v.size && (d = []), v.forEach((s, M) => {
    if (m.indexOf(M) !== -1)
      return;
    let x = u.get(M);
    if (!x)
      return;
    let C = f.indexOf(M), H = s;
    if (!H) {
      let L = () => {
        v.delete(M);
        let w = Array.from(u.keys()).filter((S) => !m.includes(S));
        if (w.forEach((S) => u.delete(S)), g.current = o.filter((S) => {
          let P = O3(S);
          return P === M || w.includes(P);
        }), !v.size) {
          if (n.current === false)
            return;
          i(), l && l();
        }
      };
      H = T5.createElement(Sl, { key: O3(x), isPresent: false, onExitComplete: L, custom: a, presenceAffectsLayout: e, mode: h }, x), v.set(M, H);
    }
    d.splice(C, 0, H);
  }), d = d.map((s) => {
    let M = s.key;
    return v.has(M) ? s : T5.createElement(Sl, { key: O3(s), isPresent: true, presenceAffectsLayout: e, mode: h }, s);
  }), T5.createElement(T5.Fragment, null, v.size ? d : d.map((s) => (0, v0.cloneElement)(s)));
};
var Tm = (t, a, r) => {
  let l = a - t;
  return ((r - t) % l + l) % l + t;
};
var Vt = I(_(), 1);
function Qn(...t) {
  let a = (0, Vt.useRef)(0), [r, l] = (0, Vt.useState)(t[a.current]), c = (0, Vt.useCallback)((e) => {
    a.current = typeof e != "number" ? Tm(0, t.length, a.current + 1) : e, l(t[a.current]);
  }, [t.length, ...t]);
  return [r, c];
}
var W0 = I(S2(), 1);
function eF({ open: t, cycleOpen: a }) {
  return (0, W0.jsx)("div", { className: "bg-slate-100 dark:bg-slate-950 shadow-lg shadow-white/10 w-screen", children: (0, W0.jsxs)("div", { className: "grid grid-cols-6 grid-rows-1 h-[3rem] w-screen mx-auto max-w-[1000px]", children: [(0, W0.jsxs)("button", { className: "col-start-1 col-end-2 flex flex-col justify-center items-center gap-[0.125rem] hover:scale-110 active:scale-100", onClick: () => a(), children: [(0, W0.jsx)("div", { className: `bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${t && "rotate-45 translate-y-[0.125rem]"}` }), (0, W0.jsx)("div", { className: `bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${t && "hidden"}` }), (0, W0.jsx)("div", { className: `bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${t && "-rotate-45 -translate-y-[0.125rem]"}` })] }), (0, W0.jsx)("div", { className: "col-start-2 col-end-6 flex justify-center items-center", children: (0, W0.jsx)(F1, { onClick: () => t && a(), to: "/", className: "text-2xl text-slate-950 dark:text-slate-300 font-bold hover:scale-105 active:scale-100", children: "IFF" }) }), (0, W0.jsx)("div", { className: "col-start-6 col-end-7 flex justify-center gap-3 pr-3 items-center" })] }) });
}
var Wm = eF;
var Ct = I(_(), 1);
var Yn = I(_(), 1);
var Jn = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 };
var to = Yn.default.createContext && Yn.default.createContext(Jn);
var hF = ["attr", "size", "title"];
function iF(t, a) {
  if (t == null)
    return {};
  var r = nF(t, a), l, c;
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(t);
    for (c = 0; c < e.length; c++)
      l = e[c], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (r[l] = t[l]);
  }
  return r;
}
function nF(t, a) {
  if (t == null)
    return {};
  var r = {}, l = Object.keys(t), c, e;
  for (e = 0; e < l.length; e++)
    c = l[e], !(a.indexOf(c) >= 0) && (r[c] = t[c]);
  return r;
}
function Fl() {
  return Fl = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, Fl.apply(this, arguments);
}
function jm(t, a) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    a && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function kl(t) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? jm(Object(r), true).forEach(function(l) {
      oF(t, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return t;
}
function oF(t, a, r) {
  return a = dF(a), a in t ? Object.defineProperty(t, a, { value: r, enumerable: true, configurable: true, writable: true }) : t[a] = r, t;
}
function dF(t) {
  var a = vF(t, "string");
  return typeof a == "symbol" ? a : String(a);
}
function vF(t, a) {
  if (typeof t != "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(t, a || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(t);
}
function Nm(t) {
  return t && t.map((a, r) => Ct.default.createElement(a.tag, kl({ key: r }, a.attr), Nm(a.child)));
}
function x2(t) {
  return (a) => Ct.default.createElement(gF, Fl({ attr: kl({}, t.attr) }, a), Nm(t.child));
}
function gF(t) {
  var a = (r) => {
    var { attr: l, size: c, title: e } = t, h = iF(t, hF), i = c || r.size || "1em", n;
    return r.className && (n = r.className), t.className && (n = (n ? n + " " : "") + t.className), Ct.default.createElement("svg", Fl({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, r.attr, l, h, { className: n, style: kl(kl({ color: t.color || r.color }, r.style), t.style), height: i, width: i, xmlns: "http://www.w3.org/2000/svg" }), e && Ct.default.createElement("title", null, e), t.children);
  };
  return to !== void 0 ? Ct.default.createElement(to.Consumer, null, (r) => a(r)) : a(Jn);
}
function _m(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M20 4H4C3.44771 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44771 20.5523 4 20 4ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 7H8V9H6V7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H11ZM8 11H6V13H8V11ZM10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12ZM8 15H6V17H8V15ZM10 16C10 15.4477 10.4477 15 11 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H11C10.4477 17 10 16.5523 10 16Z", fill: "currentColor" }, child: [] }] })(t);
}
function Um(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z", fill: "currentColor" }, child: [] }, { tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z", fill: "currentColor" }, child: [] }] })(t);
}
function ao(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(t);
}
var P3 = I(S2(), 1);
function uF({ title: t, icon: a, link: r }) {
  return (0, P3.jsx)("div", { className: "flex items-center h-[3rem] bg-slate-100 dark:bg-slate-950 w-screen shadow-inner dark:shadow-slate-800 max-w-[900px] mx-auto", children: (0, P3.jsxs)("div", { className: "flex justify-center items-center gap-3 ml-5 font-bold dark:text-white", children: [a, t, r === "dailytraining" && (0, P3.jsx)(F1, { to: "/dailytraining", className: "text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600", children: "VIEW ALL" }), r === "iffcycles" && (0, P3.jsx)(F1, { to: "/iffcycles", className: "text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600", children: "VIEW ALL" }), r === "challenges" && (0, P3.jsx)(F1, { to: "/challenges", className: "text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600", children: "VIEW ALL" })] }) });
}
var Rl = uF;
function Gm(t) {
  return x2({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" }, child: [] }, { tag: "path", attr: { d: "M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" }, child: [] }] })(t);
}
function qm(t) {
  return x2({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" }, child: [] }] })(t);
}
function Km(t) {
  return x2({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" }, child: [] }] })(t);
}
function $m(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" }, child: [] }, { tag: "path", attr: { d: "M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z" }, child: [] }] })(t);
}
function Xm(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "rect", attr: { width: "416", height: "384", x: "48", y: "80", fill: "none", strokeLinejoin: "round", strokeWidth: "32", rx: "48" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M128 48v32m256-32v32m80 80H48m256 100 43.42-32H352v168m-160.13-89.37c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0 0 11.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" }, child: [] }] })(t);
}
function Qm(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "g", attr: { fillRule: "evenodd" }, child: [{ tag: "circle", attr: { cx: "17", cy: "15.5", r: "1.12" }, child: [] }, { tag: "path", attr: { d: "M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z" }, child: [] }, { tag: "path", attr: { d: "M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0 0 17 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" }, child: [] }] }] })(t);
}
function Ym(t) {
  return x2({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" }, child: [] }] })(t);
}
var Lt = I(_(), 1);
var ax = I(S2(), 1);
var Jm = (0, Lt.createContext)(void 0);
function tx({ children: t }) {
  let [a, r] = (0, Lt.useState)("light");
  return (0, ax.jsx)(Jm.Provider, { value: [a, r], children: t });
}
function Ol() {
  let t = (0, Lt.useContext)(Jm);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
var Q = I(S2(), 1);
function sF({ isAdmin: t, cycleOpen: a }) {
  let [r, l] = Ol(), c = () => {
    l((e) => e === "light" ? "dark" : "light");
  };
  return (0, Q.jsxs)("div", { className: "relative grid grid-cols-1 grid-rows-5 py-8 h-[100%] max-w-[900px] mx-auto bg-white overflow-hidden dark:bg-slate-900", children: [(0, Q.jsxs)(N4.div, { initial: { x: -200, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.4 }, exit: { x: -200, opacity: 0 }, className: "mb-2 lg:text-center h-[55vh] overflow-y-scroll overflow-x-hidden", children: [(0, Q.jsx)("button", { onClick: c, className: "text-blue-500 text-xl pb-4 pl-4 hover:text-blue-600 hover:scale-110 active:scale-100", children: r === "dark" ? (0, Q.jsx)(Km, {}) : (0, Q.jsx)(qm, { className: "pl-1" }) }), (0, Q.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, Q.jsxs)(F1, { onClick: () => a(), to: "/dashboard", className: "text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2", children: [(0, Q.jsx)(_m, { className: "text-black/50 dark:text-slate-400" }), "Dashboard"] }), (0, Q.jsxs)(F1, { onClick: () => a(), to: "/trainingjournal", className: "text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2", children: [(0, Q.jsx)(Gm, { className: "text-black/50 dark:text-slate-400" }), "Training Journal"] }), (0, Q.jsxs)(F1, { onClick: () => a(), to: "/videolibrary", className: "text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2", children: [(0, Q.jsx)($m, { className: "text-black/50 dark:text-slate-400" }), "Video Library"] }), (0, Q.jsx)("div", { children: (0, Q.jsx)(Rl, { title: "TRAINING", icon: (0, Q.jsx)(Xm, { className: "text-black text-lg dark:text-slate-400" }) }) }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/dailytraining", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "Daily Training" }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/iffcycles", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "IFF Cycles" }), (0, Q.jsx)(Rl, { title: "EVENTS", icon: (0, Q.jsx)(Ym, { className: "text-black text-xl dark:text-slate-400" }) }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/events/10kchallenge", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "10k Challenge" }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/events/lindachallenge", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "Linda Challenge" }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/events/484challenge", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "48 x 4 Challenge" }), t && (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(Rl, { title: "ADMIN", icon: (0, Q.jsx)(Qm, { className: "text-black text-xl dark:text-slate-400" }) }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/admin", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "Manage Users" }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/workoutlibrary", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", prefetch: "viewport", children: "Workout Library" }), (0, Q.jsx)(F1, { onClick: () => a(), to: "/add-workout", className: "text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2", children: "Add New Workout" })] })] })] }), (0, Q.jsxs)(N4.div, { initial: { x: -200, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.4 }, exit: { x: -200, opacity: 0 }, className: "absolute bottom-0 border-t border-black/10 w-[93vw] left-4 mb-2 p-2", children: [(0, Q.jsxs)(F1, { onClick: () => a(), className: "flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2", to: "/user/chris", children: [(0, Q.jsx)(Um, {}), "PROFILE"] }), (0, Q.jsxs)(F1, { onClick: () => a(), to: "/shop", className: "flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2", children: [(0, Q.jsx)(ao, {}), "SHOP"] }), (0, Q.jsxs)(F1, { onClick: () => a(), to: "/settings", className: "flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2", children: [(0, Q.jsx)(ao, {}), "SETTINGS"] })] })] });
}
var rx = sF;
var ex = I(_(), 1);
function lx(t) {
  var a, r, l = "";
  if (typeof t == "string" || typeof t == "number")
    l += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var c = t.length;
      for (a = 0; a < c; a++)
        t[a] && (r = lx(t[a])) && (l && (l += " "), l += r);
    } else
      for (r in t)
        t[r] && (l && (l += " "), l += r);
  return l;
}
function pF() {
  for (var t, a, r = 0, l = "", c = arguments.length; r < c; r++)
    (t = arguments[r]) && (a = lx(t)) && (l && (l += " "), l += a);
  return l;
}
var cx = pF;
var O1 = I(S2(), 1);
var zF = () => [{ title: "Inner Fight Fitness App" }, { name: "description", content: "Official web app for Inner Fight Fitness Programming" }];
var MF = () => [{ rel: "stylesheet", href: LM }];
function fF() {
  let [t, a] = Qn(false, true), r = true, [l] = Ol();
  return console.log(l), (0, ex.useEffect)(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto", () => {
    document.body.style.overflow = "auto";
  }), [t]), (0, O1.jsxs)("html", { lang: "en", className: cx(l), children: [(0, O1.jsxs)("head", { children: [(0, O1.jsx)("meta", { charSet: "utf-8" }), (0, O1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), (0, O1.jsx)(pi, {}), (0, O1.jsx)(si, {})] }), (0, O1.jsx)(yl, { children: (0, O1.jsxs)("body", { className: "overflow-x-hidden ", children: [(0, O1.jsx)("div", { className: `${t && "bg-transparent"}`, children: (0, O1.jsxs)("div", { className: "z-20 fixed", children: [(0, O1.jsx)(Wm, { open: t, cycleOpen: a }), (0, O1.jsx)(yl, { children: t && (0, O1.jsx)(N4.div, { className: "h-[calc(100dvh-3rem)] w-screen absolute top-12 z-50 overflow-hidden", initial: { width: 0 }, animate: { width: "100vw" }, exit: { width: 0, transition: { duration: 0.3 } }, transition: { duration: 0.3, type: "tween" }, children: (0, O1.jsx)(rx, { isAdmin: r, cycleOpen: a }) }) })] }) }), (0, O1.jsx)(P6, {}), (0, O1.jsx)(Hi, {}), (0, O1.jsx)(W8, {}), (0, O1.jsx)(zi, {})] }) })] });
}
function HF() {
  return (0, O1.jsx)(tx, { children: (0, O1.jsx)(fF, {}) });
}
var mF = HF;
var co = {};
u5(co, { default: () => hx });
var lo = I(S2(), 1);
function hx() {
  return (0, lo.jsx)("div", { className: "pt-[3rem] max-w-[900px] mx-auto", children: (0, lo.jsx)(N4.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }) });
}
var ix = { entry: { module: "/build/entry.client-SJE2D3LK.js", imports: ["/build/_shared/chunk-UQU2QNOJ.js", "/build/_shared/chunk-C46C5URB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2TIH4MD3.js", imports: ["/build/_shared/chunk-US2YLHW2.js"], hasAction: false, hasLoader: false, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: true, caseSensitive: void 0, module: "/build/routes/_index-6LMGHXLI.js", imports: void 0, hasAction: false, hasLoader: false, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false } }, version: "4627d915", hmr: void 0, url: "/build/manifest-4627D915.js" };
var xF = "production";
var VF = "public/build";
var CF = { v3_fetcherPersist: false, v3_relativeSplatPath: false, v3_throwAbortReason: false };
var LF = "/build/";
var BF = { module: en };
var wF = { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: ro }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: true, caseSensitive: void 0, module: co } };
var vK = wc({ build: eo });
var routes = [
  {
    routePath: "/:path*",
    mountPath: "/",
    method: "",
    middlewares: [],
    modules: [vK]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i3) {
      if (m[i3] === void 0)
        return "continue";
      var key = keys[i3 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i3].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i3], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d2 = options.encode, encode = _d2 === void 0 ? function(x) {
    return x;
  } : _d2, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f2 = options.endsWith, endsWith = _f2 === void 0 ? "" : _f2;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
          } else {
            route += "(".concat(token.pattern, ")").concat(token.modifier);
          }
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: () => {
            isFailOpen = true;
          }
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    };
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = (response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
);
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...pages_template_worker_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...pages_template_worker_default.middleware ? pages_template_worker_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;
var wrap2 = void 0;

// .wrangler/tmp/bundle-OcpkNA/middleware-insertion-facade.js
var envWrappers2 = [wrap2].filter(Boolean);
var facade3 = {
  ...middleware_loader_entry_default,
  envWrappers: envWrappers2,
  middleware: [
    middleware_miniflare3_json_error_default2,
    ...middleware_loader_entry_default.middleware ? middleware_loader_entry_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default2 = facade3;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-OcpkNA/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__2 = function(request, env, ctx) {
  if (middleware_insertion_facade_default2.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default2.fetch(request, env, ctx);
};
function getMaskedEnv2(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default2.envWrappers && middleware_insertion_facade_default2.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default2.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware2 = false;
var facade4 = {
  ...middleware_insertion_facade_default2.tail && {
    tail: maskHandlerEnv2(middleware_insertion_facade_default2.tail)
  },
  ...middleware_insertion_facade_default2.trace && {
    trace: maskHandlerEnv2(middleware_insertion_facade_default2.trace)
  },
  ...middleware_insertion_facade_default2.scheduled && {
    scheduled: maskHandlerEnv2(middleware_insertion_facade_default2.scheduled)
  },
  ...middleware_insertion_facade_default2.queue && {
    queue: maskHandlerEnv2(middleware_insertion_facade_default2.queue)
  },
  ...middleware_insertion_facade_default2.test && {
    test: maskHandlerEnv2(middleware_insertion_facade_default2.test)
  },
  ...middleware_insertion_facade_default2.email && {
    email: maskHandlerEnv2(middleware_insertion_facade_default2.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv2(rawEnv);
    if (middleware_insertion_facade_default2.middleware && middleware_insertion_facade_default2.middleware.length > 0) {
      if (!registeredMiddleware2) {
        registeredMiddleware2 = true;
        for (const middleware of middleware_insertion_facade_default2.middleware) {
          __facade_register__2(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default2.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default2.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__2
      );
    } else {
      return __facade_modules_fetch__2(request, env, ctx);
    }
  }
};
function maskHandlerEnv2(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv2(env), ctx);
}
var middleware_loader_entry_default2 = facade4;
export {
  middleware_loader_entry_default2 as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/server-runtime/dist/esm/warnings.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/cookies.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/formData.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.15.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/mode.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/errors.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/entry.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/headers.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/invariant.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routeMatching.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/data.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routes.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/markup.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/serverHandoff.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/dev.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/server.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/errors.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/crypto.js:
  (**
   * @remix-run/cloudflare v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/implementations.js:
  (**
   * @remix-run/cloudflare v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/sessions/workersKVStorage.js:
  (**
   * @remix-run/cloudflare v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/index.js:
  (**
   * @remix-run/cloudflare v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/index.js:
  (**
   * React Router v6.22.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.22.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-dom/cjs/react-dom-server-legacy.browser.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/cloudflare-pages/dist/esm/worker.js:
  (**
   * @remix-run/cloudflare-pages v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare-pages/dist/esm/index.js:
  (**
   * @remix-run/cloudflare-pages v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/fallback.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/server.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v2.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=functionsWorker-0.2563191942728793.js.map
