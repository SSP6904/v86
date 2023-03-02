'use strict';
var n, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
;
function ca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
var da = ca(this);
function ea(a, b) {
    if (b)
        a: {
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                    break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
ea("globalThis", function(a) {
    return a || da
});
Object.freeze(["shared", "exclusive", "unlock"]);
function fa(a, b, c) {
    this.h = a;
    this.v = c;
    this.B = [104, 111, 115, 116, 57, 112];
    this.F = this.B.length;
    this.D = "9P2000.L";
    this.j = this.o = 8192;
    this.i = new Uint8Array(2 * this.j);
    this.C = 0;
    this.g = [];
    this.ab = new ka(b,{
        name: "virtio-9p",
        Ia: 48,
        He: 4169,
        Rg: 9,
        Fe: {
            Vc: 43008,
            Xa: [{
                Kc: 32,
                ke: 0
            }],
            features: [0, 32, 29, 28],
            xk: ()=>{}
        },
        notification: {
            Vc: 43264,
            Gj: !1,
            Kh: [d=>{
                if (0 === d) {
                    for (; la(this.l); ) {
                        d = this.l;
                        la(d);
                        var e = d.s.Na(d.h + 4 + 2 * d.j);
                        e = new ma(d,e);
                        d.j = d.j + 1 & d.o;
                        na(this, e)
                    }
                    d = this.l;
                    e = d.s.Na(d.h + 2) + 0 & 65535;
                    d.s.ye(d.g + 4 + 8 * d.size, e)
                }
            }
            ]
        },
        hc: {
            Vc: 42752
        },
        Vf: {
            Vc: 42496,
            td: [{
                bytes: 2,
                name: "mount tag length",
                read: ()=>this.F,
                write: ()=>{}
            }].concat(Array.from(Array(254).keys()).map(d=>({
                bytes: 1,
                name: "mount tag name " + d,
                read: ()=>this.B[d] || 0,
                write: ()=>{}
            })))
        }
    });
    this.l = this.ab.Xa[0]
}
fa.prototype.$ = function() {
    var a = [];
    a[0] = this.B;
    a[1] = this.F;
    a[2] = this.ab;
    a[3] = this.D;
    a[4] = this.o;
    a[5] = this.j;
    a[6] = this.i;
    a[7] = this.C;
    a[8] = this.g.map(function(b) {
        return [b.Z, b.type, b.uid, b.$b]
    });
    a[9] = this.h;
    return a
}
;
fa.prototype.H = function(a) {
    this.B = a[0];
    this.F = a[1];
    this.ab.H(a[2]);
    this.l = this.ab.Xa[0];
    this.D = a[3];
    this.o = a[4];
    this.j = a[5];
    this.i = a[6];
    this.C = a[7];
    this.g = a[8].map(function(b) {
        return {
            Z: b[0],
            type: b[1],
            uid: b[2],
            $b: b[3]
        }
    });
    this.h.H(a[9])
}
;
function u(a, b, c, d) {
    v(["w", "b", "h"], [d + 7, b + 1, c], a.i, 0);
    a.C = d + 7
}
function qa(a, b, c) {
    c = v(["w"], [c], a.i, 7);
    u(a, 6, b, c)
}
function C(a, b) {
    for (var c = a.i.subarray(0, a.C), d = 0, e = c.length; e && b.Nf !== b.Of.length; ) {
        var g = b.Of[b.Nf];
        const f = g.ef + b.ze;
        g = g.Ne - b.ze;
        g > e ? (g = e,
        b.ze += e) : (b.Nf++,
        b.ze = 0);
        ra(b.s, c.subarray(d, d + g), f);
        d += g;
        e -= g
    }
    b.qf += d;
    c = a.l;
    d = c.s.Na(c.g + 2) + c.i & c.o;
    e = b.qf;
    c.s.Lc(c.g + 4 + 8 * d, b.Lh);
    c.s.Lc(c.g + 8 + 8 * d, e);
    c.i++;
    a = a.l;
    0 !== a.i && (b = a.s.Na(a.g + 2) + a.i & 65535,
    a.s.ye(a.g + 2, b),
    a.i = 0,
    0 < (a.ab.h[0] & 536870912) ? (a.s.Na(a.h + 4 + 2 * a.size),
    a.ab.Aa(1)) : ~a.s.Na(a.h) & 1 && a.ab.Aa(1))
}
async function na(a, b) {
    var c = new Uint8Array(b.pf);
    ua(b, c);
    var d = {
        offset: 0
    }
      , e = E(["w", "b", "h"], c, d)
      , g = e[0]
      , f = e[1]
      , h = e[2];
    switch (f) {
    case 8:
        g = va(a.h);
        var k = wa(a.h);
        e = [16914839];
        e[1] = a.o;
        e[2] = Math.floor(k / e[1]);
        e[3] = e[2] - Math.floor(g / e[1]);
        e[4] = e[2] - Math.floor(g / e[1]);
        e[5] = xa(a.h);
        e[6] = za(a.h);
        e[7] = 0;
        e[8] = 256;
        g = v("wwddddddw".split(""), e, a.i, 7);
        u(a, f, h, g);
        C(a, b);
        break;
    case 112:
    case 12:
        e = E(["w", "w"], c, d);
        g = e[0];
        d = e[1];
        c = a.g[g].Z;
        var l = H(a.h, c);
        k = Aa(a.h, c, d);
        Ba(a.h, a.g[g].Z, function() {
            var m = [];
            m[0] = l.za;
            m[1] = this.j - 24;
            v(["Q", "w"], m, this.i, 7);
            u(this, f, h, 17);
            C(this, b)
        }
        .bind(a));
        break;
    case 70:
        e = E(["w", "w", "s"], c, d);
        c = e[0];
        g = e[1];
        k = e[2];
        k = Ca(a.h, a.g[c].Z, a.g[g].Z, k);
        if (0 > k) {
            qa(a, h, -k);
            C(a, b);
            break
        }
        u(a, f, h, 0);
        C(a, b);
        break;
    case 16:
        e = E(["w", "s", "s", "w"], c, d);
        g = e[0];
        k = e[1];
        var p = e[3];
        c = Da(a.h, k, a.g[g].Z, e[2]);
        l = H(a.h, c);
        l.uid = a.g[g].uid;
        l.Ga = p;
        v(["Q"], [l.za], a.i, 7);
        u(a, f, h, 13);
        C(a, b);
        break;
    case 18:
        e = E("wswwww".split(""), c, d);
        g = e[0];
        k = e[1];
        d = e[2];
        c = e[3];
        var q = e[4];
        p = e[5];
        c = Ea(a.h, k, a.g[g].Z, c, q);
        l = H(a.h, c);
        l.mode = d;
        l.uid = a.g[g].uid;
        l.Ga = p;
        v(["Q"], [l.za], a.i, 7);
        u(a, f, h, 13);
        C(a, b);
        break;
    case 22:
        e = E(["w"], c, d);
        g = e[0];
        l = H(a.h, a.g[g].Z);
        g = v(["s"], [l.re], a.i, 7);
        u(a, f, h, g);
        C(a, b);
        break;
    case 72:
        e = E(["w", "s", "w", "w"], c, d);
        g = e[0];
        k = e[1];
        d = e[2];
        p = e[3];
        c = Fa(a.h, k, a.g[g].Z);
        l = H(a.h, c);
        l.mode = d | Ga;
        l.uid = a.g[g].uid;
        l.Ga = p;
        v(["Q"], [l.za], a.i, 7);
        u(a, f, h, 13);
        C(a, b);
        break;
    case 14:
        e = E(["w", "s", "w", "w", "w"], c, d);
        g = e[0];
        k = e[1];
        c = e[2];
        d = e[3];
        p = e[4];
        a.v.send("9p-create", [k, a.g[g].Z]);
        c = Ha(a.h, k, a.g[g].Z);
        a.g[g].Z = c;
        a.g[g].type = 1;
        a.g[g].$b = k;
        l = H(a.h, c);
        l.uid = a.g[g].uid;
        l.Ga = p;
        l.mode = d;
        v(["Q", "w"], [l.za, a.j - 24], a.i, 7);
        u(a, f, h, 17);
        C(a, b);
        break;
    case 52:
        e = E("wbwddws".split(""), c, d);
        g = e[0];
        c = e[2];
        k = 0 === e[4] ? Infinity : e[4];
        e = Ia(e[1], e[3], k, e[5], e[6]);
        k = Ja(a.h, a.g[g].Z, e, c);
        v(["b"], [k], a.i, 7);
        u(a, f, h, 1);
        C(a, b);
        break;
    case 54:
        e = E("wbddws".split(""), c, d);
        g = e[0];
        k = 0 === e[3] ? Infinity : e[3];
        e = Ia(e[1], e[2], k, e[4], e[5]);
        k = Ka(a.h, a.g[g].Z, e);
        k || (k = e,
        k.type = 2);
        g = v(["b", "d", "d", "w", "s"], [k.type, k.start, Infinity === k.length ? 0 : k.length, k.h, k.g], a.i, 7);
        u(a, f, h, g);
        C(a, b);
        break;
    case 24:
        e = E(["w", "d"], c, d);
        g = e[0];
        l = H(a.h, a.g[g].Z);
        if (!l || l.status === La) {
            qa(a, h, 2);
            C(a, b);
            break
        }
        e[0] |= 4096;
        e[0] = e[1];
        e[1] = l.za;
        e[2] = l.mode;
        e[3] = l.uid;
        e[4] = l.Ga;
        e[5] = l.Ua;
        e[6] = l.Oe << 8 | l.Pe;
        e[7] = l.size;
        e[8] = a.o;
        e[9] = Math.floor(l.size / 512 + 1);
        e[10] = l.Oc;
        e[11] = 0;
        e[12] = l.ic;
        e[13] = 0;
        e[14] = l.Ed;
        e[15] = 0;
        e[16] = 0;
        e[17] = 0;
        e[18] = 0;
        e[19] = 0;
        v("dQwwwddddddddddddddd".split(""), e, a.i, 7);
        u(a, f, h, 153);
        C(a, b);
        break;
    case 26:
        e = E("wwwwwddddd".split(""), c, d);
        g = e[0];
        l = H(a.h, a.g[g].Z);
        e[1] & 1 && (l.mode = e[2]);
        e[1] & 2 && (l.uid = e[3]);
        e[1] & 4 && (l.Ga = e[4]);
        e[1] & 16 && (l.Oc = Math.floor((new Date).getTime() / 1E3));
        e[1] & 32 && (l.ic = Math.floor((new Date).getTime() / 1E3));
        e[1] & 64 && (l.Ed = Math.floor((new Date).getTime() / 1E3));
        e[1] & 128 && (l.Oc = e[6]);
        e[1] & 256 && (l.ic = e[8]);
        e[1] & 8 && await Ma(a.h, a.g[g].Z, e[5]);
        u(a, f, h, 0);
        C(a, b);
        break;
    case 50:
        e = E(["w", "d"], c, d);
        g = e[0];
        u(a, f, h, 0);
        C(a, b);
        break;
    case 40:
    case 116:
        e = E(["w", "d", "w"], c, d);
        g = e[0];
        k = e[1];
        p = e[2];
        l = H(a.h, a.g[g].Z);
        if (!l || l.status === La) {
            qa(a, h, 2);
            C(a, b);
            break
        }
        if (2 == a.g[g].type) {
            (void 0).length < k + p && (p = (void 0).length - k);
            for (e = 0; e < p; e++)
                a.i[11 + e] = (void 0)[k + e];
            v(["w"], [p], a.i, 7);
            u(a, f, h, 4 + p)
        } else
            Aa(a.h, a.g[g].Z, void 0),
            e = a.g[g].Z,
            p = Math.min(p, a.i.length - 11),
            l.size < k + p ? p = l.size - k : 40 == f && (p = Na(a.h, e, k + p) - k),
            k > l.size && (p = 0),
            a.v.send("9p-read-start", [a.g[g].$b]),
            e = await Oa(a.h, e, k, p),
            a.v.send("9p-read-end", [a.g[g].$b, p]),
            e && a.i.set(e, 11),
            v(["w"], [p], a.i, 7),
            u(a, f, h, 4 + p);
        C(a, b);
        break;
    case 118:
        e = E(["w", "d", "w"], c, d);
        g = e[0];
        k = e[1];
        p = e[2];
        e = a.g[g].$b;
        if (2 === a.g[g].type) {
            qa(a, h, 95);
            C(a, b);
            break
        } else
            await Pa(a.h, a.g[g].Z, k, p, c.subarray(d.offset));
        a.v.send("9p-write-end", [e, p]);
        v(["w"], [p], a.i, 7);
        u(a, f, h, 4);
        C(a, b);
        break;
    case 74:
        e = E(["w", "s", "w", "s"], c, d);
        k = await Ra(a.h, a.g[e[0]].Z, e[1], a.g[e[2]].Z, e[3]);
        if (0 > k) {
            qa(a, h, -k);
            C(a, b);
            break
        }
        u(a, f, h, 0);
        C(a, b);
        break;
    case 76:
        e = E(["w", "s", "w"], c, d);
        d = e[0];
        k = e[1];
        c = e[2];
        g = Sa(a.h, a.g[d].Z, k);
        if (-1 == g) {
            qa(a, h, 2);
            C(a, b);
            break
        }
        k = Ta(a.h, a.g[d].Z, k);
        if (0 > k) {
            qa(a, h, -k);
            C(a, b);
            break
        }
        u(a, f, h, 0);
        C(a, b);
        break;
    case 100:
        g = E(["w", "s"], c, d);
        a.j = g[0];
        g = v(["w", "s"], [a.j, a.D], a.i, 7);
        u(a, f, h, g);
        C(a, b);
        break;
    case 104:
        e = E(["w", "w", "s", "s", "w"], c, d);
        g = e[0];
        a.g[g] = {
            Z: 0,
            type: 1,
            uid: e[4],
            $b: ""
        };
        l = H(a.h, a.g[g].Z);
        v(["Q"], [l.za], a.i, 7);
        u(a, f, h, 13);
        C(a, b);
        a.v.send("9p-attach");
        break;
    case 108:
        e = E(["h"], c, d);
        u(a, f, h, 0);
        C(a, b);
        break;
    case 110:
        e = E(["w", "w", "h"], c, d);
        g = e[0];
        p = e[1];
        q = e[2];
        if (0 == q) {
            a.g[p] = {
                Z: a.g[g].Z,
                type: 1,
                uid: a.g[g].uid,
                $b: a.g[g].$b
            };
            v(["h"], [0], a.i, 7);
            u(a, f, h, 2);
            C(a, b);
            break
        }
        k = [];
        for (e = 0; e < q; e++)
            k.push("s");
        d = E(k, c, d);
        c = a.g[g].Z;
        k = 9;
        var t = 0;
        for (e = 0; e < q; e++) {
            c = Sa(a.h, c, d[e]);
            if (-1 == c)
                break;
            k += v(["Q"], [H(a.h, c).za], a.i, k);
            t++;
            a.g[p] = {
                Z: c,
                type: 1,
                uid: a.g[g].uid,
                $b: d[e]
            }
        }
        v(["h"], [t], a.i, 7);
        u(a, f, h, k - 7);
        C(a, b);
        break;
    case 120:
        e = E(["w"], c, d);
        a.g[e[0]] && 0 <= a.g[e[0]].Z && (await Ua(a.h, a.g[e[0]].Z),
        a.g[e[0]].Z = -1,
        a.g[e[0]].type = -1);
        u(a, f, h, 0);
        C(a, b);
        break;
    case 32:
        e = E(["w", "s", "d", "w"], c, d);
        g = e[0];
        k = e[1];
        c = e[3];
        a.g[g].type = 2;
        u(a, f, h, 0);
        C(a, b);
        break;
    case 30:
        e = E(["w", "w", "s"], c, d),
        g = e[0],
        k = e[2],
        qa(a, h, 95),
        C(a, b)
    }
}
;function Va(a, b) {
    function c(y) {
        y = y.toString(16);
        return "#" + "0".repeat(6 - y.length) + y
    }
    function d(y, A, V, R) {
        y.style.width = "";
        y.style.height = "";
        R && (y.style.transform = "");
        var aa = y.getBoundingClientRect();
        R ? y.style.transform = (1 === A ? "" : " scaleX(" + A + ")") + (1 === V ? "" : " scaleY(" + V + ")") : (0 === A % 1 && 0 === V % 1 ? (e.style.imageRendering = "crisp-edges",
        e.style.imageRendering = "pixelated",
        e.style["-ms-interpolation-mode"] = "nearest-neighbor") : (e.style.sk = "",
        e.style["-ms-interpolation-mode"] = ""),
        R = window.devicePixelRatio || 1,
        0 !== R % 1 && (A /= R,
        V /= R));
        1 !== A && (y.style.width = aa.width * A + "px");
        1 !== V && (y.style.height = aa.height * V + "px")
    }
    console.assert(a, "1st argument must be a DOM container");
    var e = a.getElementsByTagName("canvas")[0], g = e.getContext("2d", {
        alpha: !1
    }), f = a.getElementsByTagName("div")[0], h = document.createElement("div"), k, l, p = 1, q = 1, t = 1, m, r = !1, x, w, D, I = !1, O = this;
    a = new Uint16Array([8962, 199, 252, 233, 226, 228, 224, 229, 231, 234, 235, 232, 239, 238, 236, 196, 197, 201, 230, 198, 244, 246, 242, 251, 249, 255, 214, 220, 162, 163, 165, 8359, 402, 225, 237, 243, 250, 241, 209, 170, 186, 191, 8976, 172, 189, 188, 161, 171, 187, 9617, 9618, 9619, 9474, 9508, 9569, 9570, 9558, 9557, 9571, 9553, 9559, 9565, 9564, 9563, 9488, 9492, 9524, 9516, 9500, 9472, 9532, 9566, 9567, 9562, 9556, 9577, 9574, 9568, 9552, 9580, 9575, 9576, 9572, 9573, 9561, 9560, 9554, 9555, 9579, 9578, 9496, 9484, 9608, 9604, 9612, 9616, 9600, 945, 223, 915, 960, 931, 963, 181, 964, 934, 920, 937, 948, 8734, 966, 949, 8745, 8801, 177, 8805, 8804, 8992, 8993, 247, 8776, 176, 8729, 183, 8730, 8319, 178, 9632, 160]);
    for (var B = new Uint16Array([32, 9786, 9787, 9829, 9830, 9827, 9824, 8226, 9688, 9675, 9689, 9794, 9792, 9834, 9835, 9788, 9658, 9668, 8597, 8252, 182, 167, 9644, 8616, 8593, 8595, 8594, 8592, 8735, 8596, 9650, 9660]), F = [], M, G = 0; 256 > G; G++)
        M = 126 < G ? a[G - 127] : 32 > G ? B[G] : G,
        F[G] = String.fromCharCode(M);
    g.imageSmoothingEnabled = !1;
    h.style.position = "absolute";
    h.style.backgroundColor = "#ccc";
    h.style.width = "7px";
    h.style.display = "inline-block";
    f.style.display = "block";
    e.style.display = "none";
    this.v = b;
    b.register("screen-set-mode", function(y) {
        this.Df(y)
    }, this);
    b.register("screen-fill-buffer-end", function(y) {
        this.Kf(y)
    }, this);
    b.register("screen-put-char", function(y) {
        this.xf(y[0], y[1], y[2], y[3], y[4])
    }, this);
    b.register("screen-update-cursor", function(y) {
        this.wd(y[0], y[1])
    }, this);
    b.register("screen-update-cursor-scanline", function(y) {
        this.xd(y[0], y[1])
    }, this);
    b.register("screen-clear", function() {
        this.Sf()
    }, this);
    b.register("screen-set-size-text", function(y) {
        this.rd(y[0], y[1])
    }, this);
    b.register("screen-set-size-graphical", function(y) {
        this.qd(y[0], y[1], y[2], y[3])
    }, this);
    this.hb = function() {
        this.rd(80, 25);
        this.sb()
    }
    ;
    this.Th = function() {
        const y = new Image;
        if (r)
            y.src = e.toDataURL("image/png");
        else {
            const A = [9, 16]
              , V = document.createElement("canvas");
            V.width = w * A[0];
            V.height = D * A[1];
            const R = V.getContext("2d");
            R.imageSmoothingEnabled = !1;
            R.font = window.getComputedStyle(f).font;
            R.textBaseline = "top";
            for (let aa = 0; aa < w; aa++)
                for (let ha = 0; ha < D; ha++) {
                    const ia = 3 * (ha * w + aa);
                    R.fillStyle = c(x[ia + 1]);
                    R.fillRect(aa * A[0], ha * A[1], A[0], A[1]);
                    R.fillStyle = c(x[ia + 2]);
                    R.fillText(F[x[ia]], aa * A[0], ha * A[1])
                }
            "none" !== h.style.display && (R.fillStyle = h.style.backgroundColor,
            R.fillRect(l * A[0], k * A[1] + parseInt(h.style.marginTop, 10) - 1, parseInt(h.style.width, 10), parseInt(h.style.height, 10)));
            y.src = V.toDataURL("image/png")
        }
        try {
            window.open("").document.write(y.outerHTML)
        } catch (A) {}
    }
    ;
    this.xf = function(y, A, V, R, aa) {
        y < D && A < w && (A = 3 * (y * w + A),
        x[A] = V,
        x[A + 1] = R,
        x[A + 2] = aa,
        m[y] = 1)
    }
    ;
    this.sb = function() {
        I || requestAnimationFrame(r ? X : ja)
    }
    ;
    var ja = function() {
        for (var y = 0; y < D; y++)
            m[y] && (O.g(y),
            m[y] = 0);
        this.sb()
    }
    .bind(this)
      , X = function() {
        this.v.send("screen-fill-buffer");
        this.sb()
    }
    .bind(this);
    this.va = function() {
        I = !0
    }
    ;
    this.Df = function(y) {
        (r = y) ? (f.style.display = "none",
        e.style.display = "block") : (f.style.display = "block",
        e.style.display = "none")
    }
    ;
    this.Sf = function() {
        g.fillStyle = "#000";
        g.fillRect(0, 0, e.width, e.height)
    }
    ;
    this.rd = function(y, A) {
        if (y !== w || A !== D) {
            m = new Int8Array(A);
            x = new Int32Array(y * A * 3);
            w = y;
            for (D = A; f.childNodes.length > A; )
                f.removeChild(f.firstChild);
            for (; f.childNodes.length < A; )
                f.appendChild(document.createElement("div"));
            for (y = 0; y < A; y++)
                this.g(y);
            d(f, p, q, !0)
        }
    }
    ;
    this.qd = function(y, A) {
        e.style.display = "block";
        e.width = y;
        e.height = A;
        t = 640 >= y && 2 * y < window.innerWidth && 2 * y < window.innerHeight ? 2 : 1;
        d(e, p * t, q * t, !1)
    }
    ;
    this.Ef = function(y, A) {
        p = y;
        q = A;
        d(f, p, q, !0);
        d(e, p * t, q * t, !1)
    }
    ;
    this.Ef(p, q);
    this.xd = function(y, A) {
        y & 32 ? h.style.display = "none" : (h.style.display = "inline",
        h.style.height = Math.min(15, A - y) + "px",
        h.style.marginTop = Math.min(15, y) + "px")
    }
    ;
    this.wd = function(y, A) {
        if (y !== k || A !== l)
            m[y] = 1,
            m[k] = 1,
            k = y,
            l = A
    }
    ;
    this.g = function(y) {
        var A = 3 * y * w, V;
        var R = f.childNodes[y];
        var aa = document.createElement("div");
        for (var ha = 0; ha < w; ) {
            var ia = document.createElement("span");
            var z = x[A + 1];
            var N = x[A + 2];
            ia.style.backgroundColor = c(z);
            ia.style.color = c(N);
            for (V = ""; ha < w && x[A + 1] === z && x[A + 2] === N; )
                if (V += F[x[A]],
                ha++,
                A += 3,
                y === k)
                    if (ha === l)
                        break;
                    else if (ha === l + 1) {
                        aa.appendChild(h);
                        break
                    }
            ia.textContent = V;
            aa.appendChild(ia)
        }
        R.parentNode.replaceChild(aa, R)
    }
    ;
    this.Kf = function(y) {
        y.forEach(A=>{
            g.putImageData(A.Fb, A.Bf - A.De, A.Cf - A.Ee, A.De, A.Ee, A.gf, A.ff)
        }
        )
    }
    ;
    this.hb()
}
;(function() {
    function a() {
        for (var q = location.search.substr(1).split("&"), t = {}, m = 0; m < q.length; m++) {
            var r = q[m].split("=");
            t[r[0]] = decodeURIComponent(r.slice(1).join("="))
        }
        return t
    }
    function b(q) {
        document.title = q + " - Virtual x86";
        const t = document.querySelector("meta[name=description]");
        t && (t.content = "Running " + q)
    }
    function c(q) {
        return document.getElementById(q)
    }
    function d() {
        function q(B) {
            c("boot_options").style.display = "none";
            b(B.name);
            r.filesystem = B.filesystem;
            B.state && (c("reset").style.display = "none",
            r.Wc = B.state);
            r.ma = B.ma;
            r.ga = B.ga;
            r.M = B.M;
            r.ed = B.ed;
            r.vb = B.vb;
            r.Xc = B.Xc;
            r.Pc = B.Pc;
            r.hf = B.hf;
            r.Gb = B.Gb;
            r.Dd = B.Dd;
            r.ya = B.state || void 0 === r.ya ? B.ya : r.ya;
            r.G = !B.state && r.G ? r.G : B.G;
            r.ha = !B.state && r.ha ? r.ha : B.ha;
            r.id = B.id;
            void 0 !== B.oc && (r.oc = B.oc);
            var F = parseInt(x.chunk_size, 10);
            0 <= F && (F ? (F = Math.min(4194304, Math.max(512, F)),
            F = 1 << Math.ceil(Math.log2(F))) : F = void 0,
            r.M && (r.M.J = F),
            r.ga && (r.ga.J = F));
            B.da && (c("description").style.display = "block",
            F = document.createElement("a"),
            F.href = B.da,
            F.textContent = B.name,
            F.target = "_blank",
            c("description").appendChild(document.createTextNode("Running ")),
            c("description").appendChild(F));
            e(r, t)
        }
        function t(B) {
            x.c && setTimeout(function() {
                Wa(B, x.c + "\n")
            }, 25)
        }
        if (window.WebAssembly) {
            var m = document.createElement("script");
            m.src = "build/xterm.js";
            m.async = !0;
            document.body.appendChild(m);
            var r = {};
            c("start_emulation").onclick = function() {
                c("boot_options").style.display = "none";
                k("custom");
                var B = c("floppy_image").files[0];
                if (B) {
                    var F = B;
                    r.ma = {
                        buffer: B
                    }
                }
                if (B = c("cd_image").files[0])
                    F = B,
                    r.ga = {
                        buffer: B
                    };
                if (B = c("hda_image").files[0])
                    F = B,
                    r.M = {
                        buffer: B
                    };
                if (B = c("hdb_image") && c("hdb_image").files[0])
                    F = B,
                    r.Ke = {
                        buffer: B
                    };
                c("multiboot_image") && (B = c("multiboot_image").files[0]) && (F = B,
                r.ed = {
                    buffer: B
                });
                F && b(F.name);
                e(r)
            }
            ;
            var x = a();
            m = x.cdn || (l ? "images/" : "//dl.ttnrtsite.me");
            m = [{
                id: "kolibrios",
                ma: {
                    url: l ? m + "kolibri.img" : "//builds.kolibrios.org/eng/data/data/kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS",
                da: "https://kolibrios.org/en/"
            }, {
                id: "kolibrios-fallback",
                ma: {
                    url: m + "kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS"
            }, {
                id: "testos",
                G: 512000,
                ma: {
                    url: m + "testos.bin",
                    size: 1474560,
                    async: !1,
                },
                name: "Test OS",
                Gb: !0,
                da: "http://www.ttnrtsite.me"
            }, {
                id: "pixels",
                G: 512000,
                ma: {
                    url: m + "pixels.bin",
                    size: 1474560,
                    async: !1,
                },
                name: "Pixels MBR",
                Gb: !0,
                da: "http://www.ttnrtsite.me"
            }, {   
                id: "windowsxp",
                G: 1073741824,
                ha: 134217728,
                M: {
                    url: m + "winxp.img",
                    size: 8589934592,
                    async: !1,
                },
                name: "Windows XP",
                Gb: !0,    
            }];
            var w = x.profile;
            if (!w) {
                var D = document.createElement("link");
                D.rel = "prefetch";
                D.href = "build/v86.wasm";
                document.head.appendChild(D)
            }
            x.use_bochs_bios && (r.Kj = !0);
            D = parseInt(x.m, 10);
            0 < D && (r.G = 1048576 * Math.max(16, D));
            D = parseInt(x.vram, 10);
            0 < D && (r.ha = 1048576 * D);
            r.mg = x.networking_proxy;
            r.audio = "0" !== x.audio;
            r.ya = x.acpi;
            for (D = 0; D < m.length; D++) {
                var I = m[D];
                if (w === I.id) {
                    q(I);
                    return
                }
                var O = c("start_" + I.id);
                O && (O.onclick = function(B, F, M) {
                    M.preventDefault();
                    k(B.id);
                    F.blur();
                    q(B)
                }
                .bind(this, I, O))
            }
            if ("custom" === w) {
                if (x["hda.url"] && (r.M = {
                    size: parseInt(x["hda.size"], 10) || void 0,
                    url: x["hda.url"],
                    async: !0
                }),
                x["cdrom.url"] && (r.ga = {
                    size: parseInt(x["cdrom.size"], 10) || void 0,
                    url: x["cdrom.url"],
                    async: !0
                }),
                x["fda.url"] && (r.ma = {
                    size: parseInt(x["fda.size"], 10) || void 0,
                    url: x["fda.url"],
                    async: !1
                }),
                r.ma || r.ga || r.M)
                    c("boot_options").style.display = "none",
                    e(r, t)
            } else if (/^[a-zA-Z0-9\-_]+\/[a-zA-Z0-9\-_]+$/g.test(w)) {
                const B = "https://v86-user-images.b-cdn.net/" + w;
                fetch(B + "/profile.json").then(F=>F.json()).then(F=>{
                    function M(G) {
                        return G && {
                            url: B + "/" + G.url,
                            async: G.async,
                            size: G.size
                        }
                    }
                    q({
                        id: F.id,
                        name: F.name,
                        G: F.memory_size,
                        ha: F.vga_memory_size,
                        ya: F.acpi,
                        oc: F.boot_order,
                        M: M(F.hda),
                        ga: M(F.cdrom),
                        ma: M(F.fda),
                        ed: M(F.multiboot),
                        vb: M(F.bzimage),
                        Xc: M(F.initrd)
                    })
                }
                ).catch(()=>alert("Profile not found: " + w))
            }
        } else
            alert("Your browser is not supported because it doesn't support WebAssembly")
    }
    function e(q, t) {
        var m = q.G;
        m || (m = 1048576 * parseInt(c("memory_size").value, 10),
        m || (alert("Invalid memory size - reset to 128MB"),
        m = 134217728));
        var r = q.ha;
        r || (r = 1048576 * parseInt(c("video_memory_size").value, 10),
        r || (alert("Invalid video memory size - reset to 8MB"),
        r = 8388608));
        if (!q.ma) {
            var x = c("floppy_image").files[0];
            x && (q.ma = {
                buffer: x
            })
        }
        !q.vb && (x = c("bzimage").files[0]) && (q.vb = {
            buffer: x
        });
        !q.Xc && (x = c("initrd").files[0]) && (q.Xc = {
            buffer: x
        });
        x = void 0 === q.mg ? c("networking_proxy").value : q.mg;
        const w = void 0 === q.audio ? c("disable_audio").checked : !q.audio
          , D = void 0 === q.ya ? c("enable_acpi").checked : q.ya;
        if (q.Kj)
            var I = "bochs-bios.bin"
              , O = "bochs-vgabios.bin";
        else
            I = "seabios.bin",
            O = "vgabios.bin";
        if (!q.Wc) {
            var B = {
                url: "bios/" + I
            };
            var F = {
                url: "bios/" + O
            }
        }
        var M = new Xa({
            memory_size: m,
            vga_memory_size: r,
            screen_container: c("screen_container"),
            serial_container_xtermjs: c("terminal"),
            boot_order: q.oc || parseInt(c("boot_order").value, 16) || 0,
            network_relay_url: l ? "wss://relay.widgetry.org/" : x,
            bios: B,
            vga_bios: F,
            fda: q.ma,
            hda: q.M,
            hdb: q.Ke,
            cdrom: q.ga,
            multiboot: q.ed,
            bzimage: q.vb,
            initrd: q.Xc,
            cmdline: q.Pc,
            bzimage_initrd_from_filesystem: q.hf,
            acpi: D,
            initial_state: q.Wc,
            filesystem: q.filesystem || {},
            disable_speaker: w,
            mac_address_translation: q.Gb,
            cpuid_level: q.Dd,
            autostart: !0
        });
        J(M, "emulator-ready", function() {
            if (M.h.s.xa.exports.profiler_is_enabled()) {
                var G = document.createElement("pre");
                document.body.appendChild(G);
                setInterval(function() {
                    if (M.Zc()) {
                        var ja = Ya.Hj(M.h.s);
                        G.textContent = ja
                    }
                }, 1E3)
            }
            "dsl" === q.id || "helenos" === q.id ? setTimeout(()=>{
                Wa(M, "\n")
            }
            , 3E3) : ("android" === q.id || "android4" === q.id) && setTimeout(()=>{
                Za(M, [57424, 57552]);
                Wa(M, "\n")
            }
            , 3E3);
            g(q, M);
            t && t(M)
        });
        J(M, "download-progress", function(G) {
            var ja = c("loading");
            ja.style.display = "block";
            if (G.fe.endsWith(".wasm")) {
                var X = G.fe.split("/");
                ja.textContent = "Fetching " + X[X.length - 1] + " ..."
            } else if (G.ee === G.de - 1 && G.loaded >= G.total - 2048)
                ja.textContent = "Done downloading. Starting now ...";
            else {
                X = "Downloading images ";
                "number" === typeof G.ee && G.de && (X += "[" + (G.ee + 1) + "/" + G.de + "] ");
                if (G.total && "number" === typeof G.loaded) {
                    G = Math.floor(G.loaded / G.total * 100);
                    G = Math.min(100, Math.max(0, G));
                    var y = Math.floor(G / 2);
                    X = X + (G + "% [") + "#".repeat(y);
                    X += " ".repeat(50 - y) + "]"
                } else
                    X += ".".repeat(p++ % 50);
                ja.textContent = X
            }
        });
        J(M, "download-error", function(G) {
            var ja = c("loading");
            ja.style.display = "block";
            ja.textContent = "Loading " + G.fe + " failed. Check your connection and reload the page to try again."
        })
    }
    function g(q, t) {
        function m() {
            var z = Date.now()
              , N = t.h ? t.h.s.Ph[0] >>> 0 : 0;
            N < O && (O -= 4294967296);
            var P = N - O;
            O = N;
            M += P;
            if (N = z - D)
                I += N,
                D = z,
                c("speed").textContent = (P / 1E3 / N).toFixed(1),
                c("avg_speed").textContent = (M / 1E3 / I).toFixed(1),
                z = c("running_time"),
                P = I / 1E3 | 0,
                z.textContent = 60 > P ? P + "s" : 3600 > P ? (P / 60 | 0) + "m " + $a(P % 60, 2) + "s" : (P / 3600 | 0) + "h " + $a((P / 60 | 0) % 60, 2) + "m " + $a(P % 60, 2) + "s"
        }
        function r(z, N) {
            var P = c("get_" + N + "_image");
            !z || 104857600 < z.size ? P.style.display = "none" : P.onclick = function() {
                var Y = t.ac[N];
                let oa = Y.file && Y.file.name || q.id + ("cdrom" === N ? ".iso" : ".img");
                Y.fg ? (Y = Y.fg(oa),
                ab(Y, oa)) : Y.pb(function(Qa) {
                    Qa ? bb(Qa, oa) : alert("The file could not be loaded. Maybe it's too big?")
                });
                P.blur()
            }
        }
        function x(z) {
            z.ctrlKey ? window.onbeforeunload = function() {
                window.onbeforeunload = null;
                return "CTRL-W cannot be sent to the emulator."
            }
            : window.onbeforeunload = null
        }
        c("boot_options").style.display = "none";
        c("loading").style.display = "none";
        c("runtime_options").style.display = "block";
        c("runtime_infos").style.display = "block";
        c("screen_container").style.display = "block";
        q.filesystem ? f(t) : J(t, "9p-attach", function() {
            f(t)
        });
        c("run").onclick = function() {
            t.Zc() ? (c("run").value = "Run",
            t.stop()) : (c("run").value = "Pause",
            t.Ze());
            c("run").blur()
        }
        ;
        c("exit").onclick = function() {
            t.stop();
            location.href = location.pathname
        }
        ;
        c("lock_mouse").onclick = function() {
            if (!w)
                c("toggle_mouse").onclick();
            cb();
            c("lock_mouse").blur()
        }
        ;
        var w = !0;
        c("toggle_mouse").onclick = function() {
            w = !w;
            t.j && (t.j.Ie = w);
            c("toggle_mouse").value = (w ? "Dis" : "En") + "able mouse";
            c("toggle_mouse").blur()
        }
        ;
        var D = 0
          , I = 0
          , O = 0
          , B = null
          , F = !1
          , M = 0;
        J(t, "emulator-started", function() {
            D = Date.now();
            B = setInterval(m, 1E3)
        });
        J(t, "emulator-stopped", function() {
            m();
            null !== B && clearInterval(B)
        });
        var G = 0
          , ja = 0
          , X = [];
        J(t, "9p-read-start", function(z) {
            z = z[0];
            X.push(z);
            c("info_filesystem").style.display = "block";
            c("info_filesystem_status").textContent = "Loading ...";
            c("info_filesystem_last_file").textContent = z
        });
        J(t, "9p-read-end", function(z) {
            G += z[1];
            c("info_filesystem_bytes_read").textContent = G;
            const N = z[0];
            X = X.filter(P=>P !== N);
            X[0] ? c("info_filesystem_last_file").textContent = X[0] : c("info_filesystem_status").textContent = "Idle"
        });
        J(t, "9p-write-end", function(z) {
            ja += z[1];
            c("info_filesystem_bytes_written").textContent = ja;
            X[0] || (c("info_filesystem_last_file").textContent = z[0])
        });
        var y = 0
          , A = 0
          , V = 0
          , R = 0;
        J(t, "ide-read-start", function() {
            c("info_storage").style.display = "block";
            c("info_storage_status").textContent = "Loading ..."
        });
        J(t, "ide-read-end", function(z) {
            y += z[1];
            A += z[2];
            c("info_storage_status").textContent = "Idle";
            c("info_storage_bytes_read").textContent = y;
            c("info_storage_sectors_read").textContent = A
        });
        J(t, "ide-write-end", function(z) {
            V += z[1];
            R += z[2];
            c("info_storage_bytes_written").textContent = V;
            c("info_storage_sectors_written").textContent = R
        });
        var aa = 0
          , ha = 0;
        J(t, "eth-receive-end", function(z) {
            ha += z[0];
            c("info_network").style.display = "block";
            c("info_network_bytes_received").textContent = ha
        });
        J(t, "eth-transmit-end", function(z) {
            aa += z[0];
            c("info_network").style.display = "block";
            c("info_network_bytes_transmitted").textContent = aa
        });
        J(t, "mouse-enable", function(z) {
            F = z;
            c("info_mouse_enabled").textContent = z ? "Yes" : "No"
        });
        J(t, "screen-set-mode", function(z) {
            z ? c("info_vga_mode").textContent = "Graphical" : (c("info_vga_mode").textContent = "Text",
            c("info_res").textContent = "-",
            c("info_bpp").textContent = "-")
        });
        J(t, "screen-set-size-graphical", function(z) {
            c("info_res").textContent = z[0] + "x" + z[1];
            c("info_bpp").textContent = z[4]
        });
        c("reset").onclick = function() {
            t.zf();
            c("reset").blur()
        }
        ;
        r(q.M, "hda");
        r(q.Ke, "hdb");
        r(q.ma, "fda");
        r(q.Zf, "fdb");
        r(q.ga, "cdrom");
        c("memory_dump").onclick = function() {
            const z = t.h.s.Ma;
            bb(new Uint8Array(z.buffer,z.byteOffset,z.length), "v86memory.bin");
            c("memory_dump").blur()
        }
        ;
        c("capture_network_traffic").onclick = function() {
            function z(P, Y) {
                var oa = N
                  , Qa = oa.push
                  , Le = performance.now() / 1E3;
                const fc = [];
                let pa = 0;
                for (; pa + 15 < Y.length; pa += 16) {
                    var sa = $a(pa.toString(16).toUpperCase(), 5) + "   ";
                    for (var ta = 0; 16 > ta; ta++)
                        sa += $a(Y[pa + ta].toString(16).toUpperCase(), 2) + " ";
                    sa += "  ";
                    for (ta = 0; 16 > ta; ta++) {
                        var ya = Y[pa + ta];
                        sa += 33 <= ya && 34 !== ya && 92 !== ya && 126 >= ya ? String.fromCharCode(ya) : "."
                    }
                    fc.push(sa)
                }
                for (sa = $a(pa.toString(16).toUpperCase(), 5) + "   "; pa < Y.length; pa++)
                    sa += $a(Y[pa].toString(16).toUpperCase(), 2) + " ";
                ta = pa & 15;
                sa += "   ".repeat(16 - ta);
                sa += "  ";
                for (ya = 0; ya < ta; ya++) {
                    const fb = Y[pa + ya];
                    sa += 33 <= fb && 34 !== fb && 92 !== fb && 126 >= fb ? String.fromCharCode(fb) : "."
                }
                fc.push(sa);
                Qa.call(oa, {
                    direction: P,
                    time: Le,
                    Nh: "\n" + fc.join("\n") + "\n"
                });
                c("capture_network_traffic").value = N.length + " packets"
            }
            this.value = "0 packets";
            let N = [];
            t.Gd.register("net0-receive", z.bind(this, "I"));
            J(t, "net0-send", z.bind(this, "O"));
            this.onclick = function() {
                const P = N.map(({direction: Y, time: oa, Nh: Qa})=>Y + " " + oa.toFixed(6) + Qa + "\n").join("");
                bb(P, "traffic.hex");
                N = [];
                this.value = "0 packets"
            }
        }
        ;
        c("save_state").onclick = async function() {
            const z = await t.qe();
            bb(z, "v86state.bin");
            c("save_state").blur()
        }
        ;
        c("load_state").onclick = function() {
            c("load_state_input").click();
            c("load_state").blur()
        }
        ;
        c("load_state_input").onchange = async function() {
            var z = this.files[0];
            if (z) {
                var N = t.Zc();
                N && await t.stop();
                var P = new FileReader;
                P.onload = async function(Y) {
                    try {
                        await t.Nd(Y.target.result)
                    } catch (oa) {
                        throw alert("Something bad happened while restoring the state:\n" + oa + "\n\nNote that the current configuration must be the same as the original"),
                        oa;
                    }
                    N && t.Ze()
                }
                ;
                P.readAsArrayBuffer(z);
                this.value = ""
            }
        }
        ;
        c("ctrlaltdel").onclick = function() {
            Za(t, [29, 56, 83, 157, 184, 211]);
            c("ctrlaltdel").blur()
        }
        ;
        c("alttab").onclick = function() {
            Za(t, [56, 15]);
            setTimeout(function() {
                Za(t, [184, 143])
            }, 100);
            c("alttab").blur()
        }
        ;
        c("scale").onchange = function() {
            var z = parseFloat(this.value);
            (z || 0 < z) && t.g && t.g.Ef(z, z)
        }
        ;
        c("fullscreen").onclick = function() {
            if (t.g) {
                var z = document.getElementById("screen_container");
                if (z) {
                    var N = z.requestFullScreen || z.webkitRequestFullscreen || z.mozRequestFullScreen || z.msRequestFullScreen;
                    N && (N.call(z),
                    (z = document.getElementsByClassName("phone_keyboard")[0]) && z.focus());
                    try {
                        navigator.keyboard.lock()
                    } catch (P) {}
                    cb()
                }
            }
        }
        ;
        c("screen_container").onclick = function() {
            if (w && F)
                cb(),
                c("lock_mouse").blur();
            else if (window.getSelection().isCollapsed) {
                let z = document.getElementsByClassName("phone_keyboard")[0];
                z.style.top = document.body.scrollTop + 100 + "px";
                z.style.left = document.body.scrollLeft + 100 + "px";
                z.focus()
            }
        }
        ;
        const ia = document.getElementsByClassName("phone_keyboard")[0];
        ia.setAttribute("autocorrect", "off");
        ia.setAttribute("autocapitalize", "off");
        ia.setAttribute("spellcheck", "false");
        ia.tabIndex = 0;
        c("screen_container").addEventListener("mousedown", ()=>{
            ia.focus()
        }
        , !1);
        c("take_screenshot").onclick = function() {
            t.g && t.g.Th();
            c("take_screenshot").blur()
        }
        ;
        if (t.i) {
            let z = !1;
            c("mute").onclick = function() {
                z ? (t.i.Qe.af(1, void 0),
                z = !1,
                c("mute").value = "Mute") : (t.i.Qe.af(0, void 0),
                z = !0,
                c("mute").value = "Unmute");
                c("mute").blur()
            }
        } else
            c("mute").remove();
        window.addEventListener("keydown", x, !1);
        window.addEventListener("keyup", x, !1);
        window.addEventListener("blur", x, !1)
    }
    function f(q) {
        c("filesystem_panel").style.display = "block";
        c("filesystem_send_file").onchange = function() {
            Array.prototype.forEach.call(this.files, function(t) {
                var m = new db(t);
                m.onload = function() {
                    m.pb(async function(r) {
                        await q.nh("/" + t.name, new Uint8Array(r))
                    })
                }
                ;
                m.load()
            }, this);
            this.value = "";
            this.blur()
        }
        ;
        c("filesystem_get_file").onkeypress = async function(t) {
            if (13 === t.which) {
                this.disabled = !0;
                try {
                    var m = await q.pe(this.value)
                } catch (r) {
                    console.log(r)
                }
                this.disabled = !1;
                m ? (t = this.value.replace(/\/$/, "").split("/"),
                t = t[t.length - 1] || "root",
                bb(m, t),
                this.value = "") : alert("Can't read file")
            }
        }
    }
    function h() {
        location.reload()
    }
    function k(q) {
        window.history.pushState && window.history.pushState({
            profile: q
        }, "", "?profile=" + q)
    }
    var l = !location.hostname.endsWith("copy.sh")
      , p = 0;
    window.addEventListener("load", d, !1);
    window.addEventListener("load", function() {
        setTimeout(function() {
            window.addEventListener("popstate", h)
        }, 0)
    });
    "complete" === document.readyState && d()
}
)();
function eb(a) {
    this.ports = [];
    this.s = a;
    for (var b = 0; 65536 > b; b++)
        this.ports[b] = gb(this);
    var c = a.G[0];
    for (b = 0; b << 17 < c; b++)
        a.i[b] = a.l[b] = void 0,
        a.pa[b] = a.j[b] = void 0;
    hb(this, c, 4294967296 - c, function() {
        return 255
    }, function() {}, function() {
        return -1
    }, function() {})
}
function gb(a) {
    return {
        od: a.Ah,
        Na: a.yh,
        oe: a.zh,
        df: a.kf,
        ye: a.kf,
        Lc: a.kf,
        oa: void 0
    }
}
n = eb.prototype;
n.Ah = function() {
    return 255
}
;
n.yh = function() {
    return 65535
}
;
n.zh = function() {
    return -1
}
;
n.kf = function() {}
;
function K(a, b, c, d, e, g) {
    d && (a.ports[b].od = d);
    e && (a.ports[b].Na = e);
    g && (a.ports[b].oe = g);
    a.ports[b].oa = c
}
function L(a, b, c, d, e, g) {
    d && (a.ports[b].df = d);
    e && (a.ports[b].ye = e);
    g && (a.ports[b].Lc = g);
    a.ports[b].oa = c
}
n.pd = function(a, b, c, d, e, g) {
    function f() {
        return c.call(this) | d.call(this) << 8
    }
    function h() {
        return e.call(this) | g.call(this) << 8
    }
    function k() {
        return c.call(this) | d.call(this) << 8 | e.call(this) << 16 | g.call(this) << 24
    }
    e && g ? (K(this, a, b, c, f, k),
    K(this, a + 1, b, d),
    K(this, a + 2, b, e, h),
    K(this, a + 3, b, g)) : (K(this, a, b, c, f),
    K(this, a + 1, b, d))
}
;
n.Lb = function(a, b, c, d, e, g) {
    function f(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255)
    }
    function h(l) {
        e.call(this, l & 255);
        g.call(this, l >> 8 & 255)
    }
    function k(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255);
        e.call(this, l >> 16 & 255);
        g.call(this, l >>> 24)
    }
    e && g ? (L(this, a, b, c, f, k),
    L(this, a + 1, b, d),
    L(this, a + 2, b, e, h),
    L(this, a + 3, b, g)) : (L(this, a, b, c, f),
    L(this, a + 1, b, d))
}
;
n.Vh = function(a) {
    var b = this.s.i[a >>> 17];
    return b(a) | b(a + 1) << 8 | b(a + 2) << 16 | b(a + 3) << 24
}
;
n.Wh = function(a, b) {
    var c = this.s.l[a >>> 17];
    c(a, b & 255);
    c(a + 1, b >> 8 & 255);
    c(a + 2, b >> 16 & 255);
    c(a + 3, b >>> 24)
}
;
function hb(a, b, c, d, e, g, f) {
    g || (g = a.Vh.bind(a));
    f || (f = a.Wh.bind(a));
    for (b >>>= 17; 0 < c; b++)
        a.s.i[b] = d,
        a.s.l[b] = e,
        a.s.pa[b] = g,
        a.s.j[b] = f,
        c -= 131072
}
;function ib(a, b) {
    this.i = this.g = !1;
    this.j = 0;
    this.h = null;
    this.s = new jb(a,b,()=>{
        this.C && kb(this, 0)
    }
    );
    this.v = a;
    a.register("cpu-init", this.hb, this);
    a.register("cpu-run", this.Ze, this);
    a.register("cpu-stop", this.stop, this);
    a.register("cpu-restart", this.zf, this);
    this.l()
}
n = ib.prototype;
n.Ze = function() {
    this.i = !1;
    this.g || (this.g = !0,
    this.v.send("emulator-started"));
    kb(this, 0)
}
;
function lb(a) {
    if (a.i || !a.g)
        a.i = a.g = !1,
        a.v.send("emulator-stopped");
    else {
        a.C = !1;
        a: {
            var b = a.s;
            if (b.h[0]) {
                var c = mb(b);
                if (b.h[0]) {
                    b = c;
                    break a
                }
            }
            let d = c = nb();
            for (; 1 > d - c; ) {
                b.Pj();
                d = nb();
                const e = ob(b, d);
                pb(b);
                if (b.h[0]) {
                    b = e;
                    break a
                }
            }
            b = 0
        }
        kb(a, b)
    }
}
function kb(a, b) {
    const c = ++a.j;
    a.C = !0;
    a.B(b, c)
}
n.stop = function() {
    this.g && (this.i = !0)
}
;
n.va = function() {
    this.o()
}
;
n.zf = function() {
    this.s.Ra();
    qb(this.s)
}
;
n.hb = function(a) {
    this.s.hb(a, this.v);
    this.v.send("emulator-ready")
}
;
if ("undefined" !== typeof process)
    ib.prototype.B = function(a, b) {
        1 > a ? global.setImmediate(c=>{
            c === this.j && lb(this)
        }
        , b) : setTimeout(c=>{
            c === this.j && lb(this)
        }
        , a, b)
    }
    ,
    ib.prototype.l = function() {}
    ,
    ib.prototype.o = function() {}
    ;
else if ("undefined" !== typeof Worker) {
    function a() {
        globalThis.onmessage = function(b) {
            const c = b.data.t;
            1 > c ? postMessage(b.data.Sg) : setTimeout(()=>postMessage(b.data.Sg), c)
        }
    }
    ib.prototype.l = function() {
        const b = URL.createObjectURL(new Blob(["(" + a.toString() + ")()"],{
            type: "text/javascript"
        }));
        this.h = new Worker(b);
        this.h.onmessage = c=>{
            c.data === this.j && lb(this)
        }
        ;
        URL.revokeObjectURL(b)
    }
    ;
    ib.prototype.B = function(b, c) {
        this.h.postMessage({
            t: b,
            Sg: c
        })
    }
    ;
    ib.prototype.o = function() {
        this.h.terminate();
        this.h = null
    }
} else
    ib.prototype.B = function(a) {
        setTimeout(()=>{
            lb(this)
        }
        , a)
    }
    ,
    ib.prototype.l = function() {}
    ,
    ib.prototype.o = function() {}
    ;
ib.prototype.qe = function() {
    return this.s.qe()
}
;
ib.prototype.Nd = function(a) {
    return this.s.Nd(a)
}
;
if ("object" === typeof performance && performance.now)
    var nb = performance.now.bind(performance);
else if ("function" === typeof require) {
    const {performance: a} = require("perf_hooks");
    nb = a.now.bind(a)
} else
    "object" === typeof process && process.hrtime ? nb = function() {
        var a = process.hrtime();
        return 1E3 * a[0] + a[1] / 1E6
    }
    : nb = Date.now;
var db, rb, sb, tb, ub, vb, wb;
function xb(a, b) {
    return (a || 0 === a ? a + "" : "").padEnd(b, " ")
}
function $a(a, b) {
    return (a || 0 === a ? a + "" : "").padStart(b, "0")
}
function Q(a, b, c, d) {
    return new Proxy({},{
        get: function(e, g) {
            e = new a(b.buffer,c,d);
            g = e[g];
            return "function" === typeof g ? g.bind(e) : g
        },
        set: function(e, g, f) {
            (new a(b.buffer,c,d))[g] = f;
            return !0
        }
    })
}
function yb(a, b) {
    return "0x" + $a((a ? a.toString(16) : "").toUpperCase(), b || 1)
}
if ("undefined" !== typeof crypto && crypto.getRandomValues) {
    let a = new Int32Array(1);
    var zb = function() {
        crypto.getRandomValues(a);
        return a[0]
    }
} else if ("undefined" !== typeof require) {
    const a = require("crypto");
    zb = function() {
        return a.Ak(4).readInt32LE(0)
    }
}
(function() {
    if ("function" === typeof Math.clz32)
        rb = function(d) {
            return 31 - Math.clz32(d)
        }
        ,
        sb = function(d) {
            return 31 - Math.clz32(d)
        }
        ;
    else {
        for (var a = new Int8Array(256), b = 0, c = -2; 256 > b; b++)
            b & b - 1 || c++,
            a[b] = c;
        rb = function(d) {
            return a[d]
        }
        ;
        sb = function(d) {
            d >>>= 0;
            var e = d >>> 16;
            if (e) {
                var g = e >>> 8;
                return g ? 24 + a[g] : 16 + a[e]
            }
            return (g = d >>> 8) ? 8 + a[g] : a[d]
        }
    }
}
)();
function Ab(a) {
    var b = new Uint8Array(a), c, d;
    this.length = 0;
    this.push = function(e) {
        this.length !== a && this.length++;
        b[d] = e;
        d = d + 1 & a - 1
    }
    ;
    this.shift = function() {
        if (this.length) {
            var e = b[c];
            c = c + 1 & a - 1;
            this.length--;
            return e
        }
        return -1
    }
    ;
    this.clear = function() {
        this.length = d = c = 0
    }
    ;
    this.clear()
}
function Bb() {
    this.size = 65536;
    this.data = new Float32Array(65536);
    this.length = this.end = this.start = 0
}
Bb.prototype.push = function(a) {
    this.length === this.size ? this.start = this.start + 1 & this.size - 1 : this.length++;
    this.data[this.end] = a;
    this.end = this.end + 1 & this.size - 1
}
;
Bb.prototype.shift = function() {
    if (this.length) {
        var a = this.data[this.start];
        this.start = this.start + 1 & this.size - 1;
        this.length--;
        return a
    }
}
;
function Cb(a, b) {
    var c = new Float32Array(b);
    b > a.length && (b = a.length);
    var d = a.start + b
      , e = a.data.subarray(a.start, d);
    c.set(e);
    d >= a.size && (d -= a.size,
    c.set(a.data.subarray(0, d), e.length));
    a.start = d;
    a.length -= b;
    return c
}
Bb.prototype.clear = function() {
    this.length = this.end = this.start = 0
}
;
function bb(a, b) {
    a instanceof Array || (a = [a]);
    ab(new Blob(a), b)
}
function ab(a, b) {
    var c = document.createElement("a");
    c.download = b;
    c.href = window.URL.createObjectURL(a);
    c.dataset.downloadurl = ["application/octet-stream", c.download, c.href].join(":");
    document.createEvent ? (a = document.createEvent("MouseEvent"),
    a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
    c.dispatchEvent(a)) : c.click();
    window.URL.revokeObjectURL(c.href)
}
function Db(a) {
    "number" === typeof a ? this.view = new Uint8Array(a + 7 >> 3) : a instanceof ArrayBuffer && (this.view = new Uint8Array(a))
}
Db.prototype.set = function(a, b) {
    const c = a >> 3;
    a = 1 << (a & 7);
    this.view[c] = b ? this.view[c] | a : this.view[c] & ~a
}
;
Db.prototype.get = function(a) {
    return this.view[a >> 3] >> (a & 7) & 1
}
;
Db.prototype.pb = function() {
    return this.view.buffer
}
;
var Gb = "undefined" === typeof XMLHttpRequest ? Eb : Fb;
function Fb(a, b, c) {
    function d() {
        const k = c || 0;
        setTimeout(()=>{
            Fb(a, b, k + 1)
        }
        , 1E3 * ([1, 1, 2, 3, 5, 8, 13, 21][k] || 34))
    }
    var e = new XMLHttpRequest;
    e.open(b.method || "get", a, !0);
    e.responseType = b.zd ? "json" : "arraybuffer";
    if (b.headers)
        for (var g = Object.keys(b.headers), f = 0; f < g.length; f++) {
            var h = g[f];
            e.setRequestHeader(h, b.headers[h])
        }
    b.Ld && (g = b.Ld.start,
    e.setRequestHeader("Range", "bytes=" + g + "-" + (g + b.Ld.length - 1)),
    e.onreadystatechange = function() {
        200 === e.status && e.abort()
    }
    );
    e.onload = function() {
        4 === e.readyState && (200 !== e.status && 206 !== e.status ? (console.error("Loading the image " + a + " failed (status %d)", e.status),
        500 <= e.status && 600 > e.status && d()) : e.response && b.done && b.done(e.response, e))
    }
    ;
    e.onerror = function(k) {
        console.error("Loading the image " + a + " failed", k);
        d()
    }
    ;
    b.progress && (e.onprogress = function(k) {
        b.progress(k)
    }
    );
    e.send(null)
}
function Eb(a, b) {
    let c = require("fs");
    b.Ld ? c.open(a, "r", (d,e)=>{
        if (d)
            throw d;
        d = b.Ld.length;
        var g = Buffer.allocUnsafe(d);
        c.read(e, g, 0, d, b.Ld.start, f=>{
            if (f)
                throw f;
            b.done && b.done(new Uint8Array(g));
            c.close(e, h=>{
                if (h)
                    throw h;
            }
            )
        }
        )
    }
    ) : c.readFile(a, {
        encoding: b.zd ? "utf-8" : null
    }, function(d, e) {
        d ? console.log("Could not read file:", a, d) : (d = e,
        b.zd ? d = JSON.parse(d) : d = (new Uint8Array(d)).buffer,
        b.done(d))
    })
}
;(function() {
    function a(f) {
        this.buffer = f;
        this.byteLength = f.byteLength;
        this.onload = void 0
    }
    function b(f, h, k) {
        this.filename = f;
        this.byteLength = h;
        this.g = new Map;
        this.i = new Set;
        this.J = k;
        this.B = !!k;
        this.onload = void 0
    }
    function c(f, h, k, l) {
        const p = f.match(/(.*)(\..*)/);
        p ? (this.h = p[1],
        this.j = p[2]) : (this.h = f,
        this.j = "");
        this.h.endsWith("/") || (this.h += "-");
        this.g = new Map;
        this.i = new Set;
        this.byteLength = h;
        this.J = k;
        this.C = !!l;
        this.B = !!k;
        this.onload = void 0
    }
    function d(f) {
        this.file = f;
        this.byteLength = f.size;
        1073741824 < f.size && console.warn("SyncFileBuffer: Allocating buffer of " + (f.size >> 20) + " MB ...");
        this.buffer = new ArrayBuffer(f.size);
        this.onload = void 0
    }
    function e(f) {
        this.file = f;
        this.byteLength = f.size;
        this.g = new Map;
        this.i = new Set;
        this.onload = void 0
    }
    tb = a;
    ub = b;
    vb = c;
    wb = e;
    db = d;
    a.prototype.load = function() {
        this.onload && this.onload({
            buffer: this.buffer
        })
    }
    ;
    a.prototype.get = function(f, h, k) {
        k(new Uint8Array(this.buffer,f,h))
    }
    ;
    a.prototype.set = function(f, h, k) {
        (new Uint8Array(this.buffer,f,h.byteLength)).set(h);
        k()
    }
    ;
    a.prototype.pb = function(f) {
        f(this.buffer)
    }
    ;
    a.prototype.$ = function() {
        const f = [];
        f[0] = this.byteLength;
        f[1] = new Uint8Array(this.buffer);
        return f
    }
    ;
    a.prototype.H = function(f) {
        this.byteLength = f[0];
        this.buffer = f[1].slice().buffer
    }
    ;
    b.prototype.load = function() {
        void 0 !== this.byteLength ? this.onload && this.onload(Object.create(null)) : g(this.filename, (f,h)=>{
            if (f)
                throw Error("Cannot use: " + this.filename + ". " + f);
            this.byteLength = h;
            this.onload && this.onload(Object.create(null))
        }
        )
    }
    ;
    b.prototype.h = function(f, h) {
        var k = h / 256;
        f /= 256;
        for (var l = 0; l < k; l++)
            if (!this.g.get(f + l))
                return;
        if (1 === k)
            return this.g.get(f);
        h = new Uint8Array(h);
        for (l = 0; l < k; l++)
            h.set(this.g.get(f + l), 256 * l);
        return h
    }
    ;
    b.prototype.get = function(f, h, k) {
        var l = this.h(f, h);
        if (l)
            k(l);
        else {
            var p = f
              , q = h;
            this.J && (p = f - f % this.J,
            q = Math.ceil((f - p + h) / this.J) * this.J);
            Gb(this.filename, {
                done: function(t) {
                    t = new Uint8Array(t);
                    this.j(p, q, t);
                    p === f && q === h ? k(t) : k(t.subarray(f - p, f - p + h))
                }
                .bind(this),
                Ld: {
                    start: p,
                    length: q
                }
            })
        }
    }
    ;
    b.prototype.set = function(f, h, k) {
        f /= 256;
        for (var l = h.length / 256, p = 0; p < l; p++) {
            var q = this.g.get(f + p);
            void 0 === q ? this.g.set(f + p, h.slice(256 * p, 256 * (p + 1))) : q.set(h.subarray(256 * p, 256 * (p + 1)));
            this.i.add(f + p)
        }
        k()
    }
    ;
    b.prototype.j = function(f, h, k) {
        f /= 256;
        h /= 256;
        for (var l = 0; l < h; l++) {
            const p = this.g.get(f + l);
            p ? k.set(p, 256 * l) : this.B && this.g.set(f + l, k.slice(256 * l, 256 * (l + 1)))
        }
    }
    ;
    b.prototype.pb = function(f) {
        f()
    }
    ;
    b.prototype.$ = function() {
        const f = []
          , h = [];
        for (let[k,l] of this.g)
            this.i.has(k) && h.push([k, l]);
        f[0] = h;
        return f
    }
    ;
    b.prototype.H = function(f) {
        f = f[0];
        this.g.clear();
        this.i.clear();
        for (let[h,k] of f)
            this.g.set(h, k),
            this.i.add(h)
    }
    ;
    c.prototype.load = function() {
        this.onload && this.onload(Object.create(null))
    }
    ;
    c.prototype.get = function(f, h, k) {
        var l = this.l(f, h);
        if (l)
            k(l);
        else if (this.J) {
            const q = Math.floor(f / this.J)
              , t = f - q * this.J
              , m = Math.ceil((t + h) / this.J)
              , r = new Uint8Array(m * this.J);
            let x = 0;
            for (let w = 0; w < m; w++) {
                var p = (q + w) * this.J;
                l = this.C ? this.h + (q + w + "").padStart(8, "0") + this.j : this.h + p + "-" + (p + this.J) + this.j;
                (p = this.l(p, this.J)) ? (r.set(p, w * this.J),
                x++,
                x === m && k(r.subarray(t, t + h))) : Gb(l, {
                    done: function(D) {
                        const I = w * this.J;
                        D = new Uint8Array(D);
                        this.o((q + w) * this.J, this.J | 0, D);
                        r.set(D, I);
                        x++;
                        x === m && k(r.subarray(t, t + h))
                    }
                    .bind(this)
                })
            }
        } else
            Gb(this.h + f + "-" + (f + h) + this.j, {
                done: function(q) {
                    q = new Uint8Array(q);
                    this.o(f, h, q);
                    k(q)
                }
                .bind(this)
            })
    }
    ;
    c.prototype.l = b.prototype.h;
    c.prototype.set = b.prototype.set;
    c.prototype.o = b.prototype.j;
    c.prototype.$ = b.prototype.$;
    c.prototype.H = b.prototype.H;
    d.prototype.load = function() {
        this.g(0)
    }
    ;
    d.prototype.g = function(f) {
        var h = new FileReader;
        h.onload = function(k) {
            k = new Uint8Array(k.target.result);
            (new Uint8Array(this.buffer,f)).set(k);
            this.g(f + 4194304)
        }
        .bind(this);
        f < this.byteLength ? h.readAsArrayBuffer(this.file.slice(f, Math.min(f + 4194304, this.byteLength))) : (this.file = void 0,
        this.onload && this.onload({
            buffer: this.buffer
        }))
    }
    ;
    d.prototype.get = a.prototype.get;
    d.prototype.set = a.prototype.set;
    d.prototype.pb = a.prototype.pb;
    d.prototype.$ = a.prototype.$;
    d.prototype.H = a.prototype.H;
    e.prototype.load = function() {
        this.onload && this.onload(Object.create(null))
    }
    ;
    e.prototype.get = function(f, h, k) {
        var l = this.h(f, h);
        l ? k(l) : (l = new FileReader,
        l.onload = function(p) {
            p = new Uint8Array(p.target.result);
            this.j(f, h, p);
            k(p)
        }
        .bind(this),
        l.readAsArrayBuffer(this.file.slice(f, f + h)))
    }
    ;
    e.prototype.h = b.prototype.h;
    e.prototype.set = b.prototype.set;
    e.prototype.j = b.prototype.j;
    e.prototype.$ = b.prototype.$;
    e.prototype.H = b.prototype.H;
    e.prototype.pb = function(f) {
        f()
    }
    ;
    e.prototype.fg = function(f) {
        for (var h = [], k = Array.from(this.g.keys()).sort(function(m, r) {
            return m - r
        }), l = 0, p = 0; p < k.length; p++) {
            var q = k[p]
              , t = this.g.get(q);
            q *= 256;
            q !== l && (h.push(this.file.slice(l, q)),
            l = q);
            h.push(t);
            l += t.length
        }
        l !== this.file.size && h.push(this.file.slice(l));
        return new File(h,f)
    }
    ;
    var g = "undefined" === typeof XMLHttpRequest ? function(f, h) {
        require("fs").stat(f, (k,l)=>{
            k ? h(k) : h(null, l.size)
        }
        )
    }
    : function(f, h) {
        Gb(f, {
            done: (k,l)=>{
                k = l.getResponseHeader("Content-Range") || "";
                (l = k.match(/\/(\d+)\s*$/)) ? h(null, +l[1]) : h("`Range: bytes=...` header not supported (Got `" + k + "`)")
            }
            ,
            headers: {
                Range: "bytes=0-0"
            }
        })
    }
}
)();
function Hb(a, b, c, d, e, g) {
    this.ka = new Ib(this,a,b,d,e,g);
    this.la = new Ib(this,a,c,!1,e,g);
    this.ta = this.ka;
    this.s = a;
    0 === e ? (this.g = 496,
    this.ca = 14,
    this.Ia = 240) : 1 === e && (this.g = 368,
    this.ca = 15,
    this.Ia = 248);
    this.i = this.g | 516;
    this.h = 46080;
    this.K = [134, 128, 16, 112, 5, 0, 160, 2, 0, 128, 1, 1, 0, 0, 0, 0, this.g & 255 | 1, this.g >> 8, 0, 0, this.i & 255 | 1, this.i >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.h & 255 | 1, this.h >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 16, 212, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.ca, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ib = [{
        size: 8
    }, {
        size: 4
    }, void 0, void 0, {
        size: 16
    }];
    this.name = "ide" + e;
    this.l = 2;
    K(a.A, this.g | 7, this, function() {
        Jb(this.s, this.ca);
        return this.Lg()
    });
    K(a.A, this.i | 2, this, this.Lg);
    L(a.A, this.i | 2, this, this.Qj);
    K(a.A, this.g | 0, this, function() {
        return Kb(this.ta, 1)
    }, function() {
        return Kb(this.ta, 2)
    }, function() {
        return Kb(this.ta, 4)
    });
    K(a.A, this.g | 1, this, function() {
        return this.ta.error & 255
    });
    K(a.A, this.g | 2, this, function() {
        return this.ta.ea & 255
    });
    K(a.A, this.g | 3, this, function() {
        return this.ta.wa & 255
    });
    K(a.A, this.g | 4, this, function() {
        return this.ta.na & 255
    });
    K(a.A, this.g | 5, this, function() {
        return this.ta.qa & 255
    });
    K(a.A, this.g | 6, this, function() {
        return this.ta.rc & 255
    });
    L(a.A, this.g | 0, this, function(f) {
        Lb(this.ta, f, 1)
    }, function(f) {
        Lb(this.ta, f, 2)
    }, function(f) {
        Lb(this.ta, f, 4)
    });
    L(a.A, this.g | 1, this, function(f) {
        this.ka.ad = (this.ka.ad << 8 | f) & 65535;
        this.la.ad = (this.la.ad << 8 | f) & 65535
    });
    L(a.A, this.g | 2, this, function(f) {
        this.ka.ea = (this.ka.ea << 8 | f) & 65535;
        this.la.ea = (this.la.ea << 8 | f) & 65535
    });
    L(a.A, this.g | 3, this, function(f) {
        this.ka.wa = (this.ka.wa << 8 | f) & 65535;
        this.la.wa = (this.la.wa << 8 | f) & 65535
    });
    L(a.A, this.g | 4, this, function(f) {
        this.ka.na = (this.ka.na << 8 | f) & 65535;
        this.la.na = (this.la.na << 8 | f) & 65535
    });
    L(a.A, this.g | 5, this, function(f) {
        this.ka.qa = (this.ka.qa << 8 | f) & 65535;
        this.la.qa = (this.la.qa << 8 | f) & 65535
    });
    L(a.A, this.g | 6, this, function(f) {
        this.ta = f & 16 ? this.la : this.ka;
        this.ka.rc = f;
        this.la.rc = f;
        this.ka.Hd = this.la.Hd = f >> 6 & 1;
        this.ka.head = this.la.head = f & 15
    });
    this.j = this.ra = this.nd = 0;
    L(a.A, this.g | 7, this, function(f) {
        Jb(this.s, this.ca);
        var h = this.ta;
        if (h.buffer)
            switch (h.o = f,
            h.error = 0,
            f) {
            case 8:
                h.i = 0;
                h.g = 0;
                h.h = 0;
                Mb(h);
                h.S();
                break;
            case 16:
                h.status = 80;
                h.na = 0;
                h.S();
                break;
            case 248:
                h.status = 80;
                var k = h.j - 1;
                h.wa = k & 255;
                h.na = k >> 8 & 255;
                h.qa = k >> 16 & 255;
                h.rc = h.rc & 240 | k >> 24 & 15;
                h.S();
                break;
            case 39:
                h.status = 80;
                k = h.j - 1;
                h.wa = k & 255;
                h.na = k >> 8 & 255;
                h.qa = k >> 16 & 255;
                h.wa |= k >> 24 << 8 & 65280;
                h.S();
                break;
            case 32:
            case 36:
            case 41:
            case 196:
                Nb(h, f);
                break;
            case 48:
            case 52:
            case 57:
            case 197:
                var l = 52 === f || 57 === f;
                k = Ob(h, l);
                l = Pb(h, l);
                f = 48 === f || 52 === f;
                k *= h.l;
                l *= h.l;
                l + k > h.buffer.byteLength ? (h.status = 255,
                h.S()) : (h.status = 88,
                Qb(h, k),
                h.g = f ? 512 : Math.min(k, 512 * h.L),
                h.X = l);
                break;
            case 144:
                h.S();
                h.error = 257;
                h.status = 80;
                break;
            case 145:
                h.status = 80;
                h.S();
                break;
            case 160:
                h.I && (h.status = 88,
                Rb(h, 12),
                h.g = 12,
                h.ea = 1,
                h.S());
                break;
            case 161:
                h.I ? (Sb(h),
                h.status = 88,
                h.na = 20,
                h.qa = 235) : h.status = 65;
                h.S();
                break;
            case 198:
                h.L = h.ea & 255;
                h.status = 80;
                h.S();
                break;
            case 37:
            case 200:
                k = 37 === f;
                l = Ob(h, k);
                Pb(h, k) * h.l + l * h.l > h.buffer.byteLength ? (h.status = 255,
                h.S()) : (h.status = 88,
                h.oa.ra |= 1);
                break;
            case 53:
            case 202:
                k = 53 === f;
                l = Ob(h, k);
                Pb(h, k) * h.l + l * h.l > h.buffer.byteLength ? (h.status = 255,
                h.S()) : (h.status = 88,
                h.oa.ra |= 1);
                break;
            case 64:
                h.status = 80;
                h.S();
                break;
            case 218:
                h.status = 65;
                h.error = 4;
                h.S();
                break;
            case 224:
                h.status = 80;
                h.S();
                break;
            case 225:
                h.status = 80;
                h.S();
                break;
            case 231:
                h.status = 80;
                h.S();
                break;
            case 236:
                if (h.I) {
                    h.status = 65;
                    h.error = 4;
                    h.S();
                    break
                }
                Sb(h);
                h.status = 88;
                h.S();
                break;
            case 234:
                h.status = 80;
                h.S();
                break;
            case 239:
                h.status = 80;
                h.S();
                break;
            case 222:
                h.status = 80;
                h.S();
                break;
            case 245:
                h.status = 80;
                h.S();
                break;
            case 249:
                h.status = 65;
                h.error = 4;
                break;
            default:
                h.status = 65,
                h.error = 4
            }
        else
            h.error = 4,
            h.status = 65,
            h.S()
    });
    K(a.A, this.h | 4, this, void 0, void 0, this.rh);
    L(a.A, this.h | 4, this, void 0, void 0, this.vh);
    K(a.A, this.h, this, this.th, void 0, this.sh);
    L(a.A, this.h, this, this.Wf, void 0, this.wh);
    K(a.A, this.h | 2, this, this.uh);
    L(a.A, this.h | 2, this, this.Xf);
    K(a.A, this.h | 8, this, function() {
        return 0
    });
    K(a.A, this.h | 10, this, function() {
        return 0
    });
    Tb(a.u.Ha, this)
}
n = Hb.prototype;
n.Lg = function() {
    return this.ta.buffer ? this.ta.status : 0
}
;
n.Qj = function(a) {
    a & 4 && (Jb(this.s, this.ca),
    Mb(this.ka),
    Mb(this.la));
    this.l = a
}
;
n.rh = function() {
    return this.nd
}
;
n.vh = function(a) {
    this.nd = a
}
;
n.uh = function() {
    return this.ra
}
;
n.Xf = function(a) {
    this.ra &= ~(a & 6)
}
;
n.sh = function() {
    return this.j | this.ra << 16
}
;
n.th = function() {
    return this.j
}
;
n.wh = function(a) {
    this.Wf(a & 255);
    this.Xf(a >> 16 & 255)
}
;
n.Wf = function(a) {
    let b = this.j;
    this.j = a & 9;
    if ((b & 1) !== (a & 1))
        if (0 === (a & 1))
            this.ra &= -2;
        else
            switch (this.ra |= 1,
            this.ta.o) {
            case 37:
            case 200:
                Ub(this.ta);
                break;
            case 202:
            case 53:
                Vb(this.ta);
                break;
            case 160:
                Wb(this.ta)
            }
}
;
n.S = function() {
    0 === (this.l & 2) && (this.ra |= 4,
    this.s.Ja(this.ca))
}
;
n.$ = function() {
    var a = [];
    a[0] = this.ka;
    a[1] = this.la;
    a[2] = this.g;
    a[3] = this.ca;
    a[4] = this.Ia;
    a[5] = this.i;
    a[6] = this.h;
    a[7] = this.name;
    a[8] = this.l;
    a[9] = this.nd;
    a[10] = this.ra;
    a[11] = this.ta === this.ka;
    a[12] = this.j;
    return a
}
;
n.H = function(a) {
    this.ka.H(a[0]);
    this.la.H(a[1]);
    this.g = a[2];
    this.ca = a[3];
    this.Ia = a[4];
    this.i = a[5];
    this.h = a[6];
    this.name = a[7];
    this.l = a[8];
    this.nd = a[9];
    this.ra = a[10];
    this.ta = a[11] ? this.ka : this.la;
    this.j = a[12]
}
;
function Ib(a, b, c, d, e, g) {
    this.oa = a;
    this.v = g;
    this.Y = e;
    this.s = b;
    this.buffer = c;
    this.l = d ? 2048 : 512;
    this.I = d;
    this.F = this.C = this.D = this.j = 0;
    this.buffer && (this.j = this.buffer.byteLength / this.l,
    this.j !== (this.j | 0) && (this.j = Math.ceil(this.j)),
    d ? (this.D = 1,
    this.C = 0) : (this.D = 16,
    this.C = 63),
    this.F = this.j / this.D / this.C,
    this.F !== (this.F | 0) && (this.F = Math.floor(this.F)),
    a = b.u.Ic,
    a.W[57] |= 1 << 4 * this.Y,
    a.W[18] = a.W[18] & 15 | 240,
    a.W[27] = this.F & 255,
    a.W[28] = this.F >> 8 & 255,
    a.W[29] = this.D & 255,
    a.W[30] = 255,
    a.W[31] = 255,
    a.W[32] = 200,
    a.W[33] = this.F & 255,
    a.W[34] = this.F >> 8 & 255,
    a.W[35] = this.C & 255);
    this.B = {
        Ng: 0,
        Og: 0,
        Qf: 0,
        Rf: 0,
        jg: !1
    };
    this.buffer = c;
    this.rc = this.head = this.qa = this.na = this.ad = this.wa = this.ea = this.Hd = 0;
    this.status = 80;
    this.L = 128;
    this.i = this.error = 0;
    this.data = new Uint8Array(65536);
    this.V = new Uint16Array(this.data.buffer);
    this.O = new Int32Array(this.data.buffer);
    this.g = this.h = 0;
    this.T = this.o = -1;
    this.pa = this.X = 0;
    this.P = new Set;
    this.ba = new Set;
    Object.seal(this)
}
function Mb(a) {
    a.I ? (a.status = 0,
    a.ea = 1,
    a.error = 1,
    a.wa = 1,
    a.na = 20,
    a.qa = 235) : (a.status = 81,
    a.ea = 1,
    a.error = 1,
    a.wa = 1,
    a.na = 0,
    a.qa = 0);
    for (const b of a.P)
        a.ba.add(b);
    a.P.clear()
}
n = Ib.prototype;
n.S = function() {
    this.oa.S()
}
;
n.$d = function() {
    this.status = 80;
    var a = this.data.subarray(0, this.h);
    Xb(this, this.o, this.h / 512);
    this.S();
    this.buffer.set(this.X, a, function() {});
    Yb(this, this.h)
}
;
function Zb(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    a.h = 0;
    var d = a.qa << 8 & 65280 | a.na & 255;
    a.na = a.qa = 0;
    65535 === d && d--;
    d > c && (d = c);
    b >= a.buffer.byteLength ? (a.status = 255,
    a.S()) : 0 === c ? (a.status = 80,
    a.i = 0) : (c = Math.min(c, a.buffer.byteLength - b),
    a.status = 208,
    $b(a),
    a.fa(b, c, e=>{
        ac(a, e);
        a.status = 88;
        a.ea = a.ea & -8 | 2;
        a.S();
        d &= -4;
        a.g = d;
        a.g > a.h && (a.g = a.h);
        a.na = a.g & 255;
        a.qa = a.g >> 8 & 255;
        bc(a, c)
    }
    ))
}
function cc(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    b >= a.buffer.byteLength ? (a.status = 255,
    a.S()) : (a.status = 208,
    $b(a),
    a.fa(b, c, d=>{
        bc(a, c);
        a.status = 88;
        a.ea = a.ea & -8 | 2;
        ac(a, d);
        Wb(a)
    }
    ))
}
function Wb(a) {
    if (0 !== (a.oa.ra & 1) && 0 !== (a.status & 8)) {
        var b = a.oa.nd
          , c = 0
          , d = a.data;
        do {
            var e = a.s.g(b)
              , g = a.s.Na(b + 4)
              , f = a.s.od(b + 7) & 128;
            g || (g = 65536);
            ra(a.s, d.subarray(c, Math.min(c + g, a.h)), e);
            c += g;
            b += 8;
            if (c >= a.h && !f)
                break
        } while (!f);
        a.status = 80;
        a.oa.ra &= -2;
        a.ea = a.ea & -8 | 3;
        a.S()
    }
}
function Kb(a, b) {
    if (a.i < a.g) {
        var c = 1 === b ? a.data[a.i] : 2 === b ? a.V[a.i >>> 1] : a.O[a.i >>> 2];
        a.i += b;
        a.i >= a.g && (160 === a.o ? a.g === a.h ? (a.status = 80,
        a.ea = a.ea & -8 | 3,
        a.S()) : (a.status = 88,
        a.ea = a.ea & -8 | 2,
        a.S(),
        b = a.qa << 8 & 65280 | a.na & 255,
        a.g + b > a.h ? (a.na = a.h - a.g & 255,
        a.qa = a.h - a.g >> 8 & 255,
        a.g = a.h) : a.g += b) : (a.error = 0,
        a.i >= a.h ? a.status = 80 : (b = 196 === a.o || 41 === a.o ? Math.min(a.L, (a.h - a.g) / 512) : 1,
        Xb(a, a.o, b),
        a.g += 512 * b,
        a.status = 88),
        a.S()));
        return c
    }
    a.i += b;
    return 0
}
function Lb(a, b, c) {
    if (!(a.i >= a.g) && (1 === c ? a.data[a.i++] = b : 2 === c ? (a.V[a.i >>> 1] = b,
    a.i += 2) : (a.O[a.i >>> 2] = b,
    a.i += 4),
    a.i === a.g))
        if (160 === a.o) {
            a.i = 0;
            a.T = a.data[0];
            switch (a.T) {
            case 0:
                Rb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 3:
                Rb(a, a.data[4]);
                a.g = a.h;
                a.status = 88;
                a.data[0] = 240;
                a.data[2] = 5;
                a.data[7] = 8;
                break;
            case 18:
                b = a.data[4];
                a.status = 88;
                a.data.set([5, 128, 1, 49, 31, 0, 0, 0, 83, 79, 78, 89, 32, 32, 32, 32, 67, 68, 45, 82, 79, 77, 32, 67, 68, 85, 45, 49, 48, 48, 48, 32, 49, 46, 49, 97]);
                a.g = a.h = Math.min(36, b);
                break;
            case 26:
                Rb(a, a.data[4]);
                a.g = a.h;
                a.status = 88;
                break;
            case 30:
                Rb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 37:
                b = a.j - 1;
                ac(a, new Uint8Array([b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255, 0, 0, a.l >> 8 & 255, a.l & 255]));
                a.g = a.h;
                a.status = 88;
                break;
            case 40:
                a.ad & 1 ? cc(a, a.data) : Zb(a, a.data);
                break;
            case 66:
                b = a.data[8];
                Rb(a, Math.min(8, b));
                a.g = a.h;
                a.status = 88;
                break;
            case 67:
                b = a.data[8] | a.data[7] << 8;
                c = a.data[9] >> 6;
                Rb(a, b);
                a.g = a.h;
                0 === c ? (b = a.j,
                a.data.set(new Uint8Array([0, 18, 1, 1, 0, 20, 1, 0, 0, 0, 0, 0, 0, 22, 170, 0, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255]))) : 1 === c && a.data.set(new Uint8Array([0, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
                a.status = 88;
                break;
            case 70:
                b = a.data[8] | a.data[7] << 8;
                b = Math.min(b, 32);
                Rb(a, b);
                a.g = a.h;
                a.data[0] = b - 4 >> 24 & 255;
                a.data[1] = b - 4 >> 16 & 255;
                a.data[2] = b - 4 >> 8 & 255;
                a.data[3] = b - 4 & 255;
                a.data[6] = 8;
                a.data[10] = 3;
                a.status = 88;
                break;
            case 81:
                Rb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 82:
                a.status = 81;
                a.h = 0;
                a.error = 80;
                break;
            case 90:
                b = a.data[8] | a.data[7] << 8;
                42 === a.data[2] && Rb(a, Math.min(30, b));
                a.g = a.h;
                a.status = 88;
                break;
            case 189:
                Rb(a, a.data[9] | a.data[8] << 8);
                a.g = a.h;
                a.data[5] = 1;
                a.status = 88;
                break;
            case 74:
                a.status = 81;
                a.h = 0;
                a.error = 80;
                break;
            case 190:
                Rb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            default:
                a.status = 81,
                a.h = 0,
                a.error = 80
            }
            a.ea = a.ea & -8 | 2;
            0 === (a.status & 128) && a.S();
            0 === (a.status & 128) && 0 === a.h && (a.ea |= 1,
            a.status &= -9)
        } else
            a.i >= a.h ? a.$d() : (a.status = 88,
            a.g += 512,
            a.S())
}
function Xb(a, b, c) {
    a.ea -= c;
    36 === b || 41 === b || 52 === b || 57 === b || 37 === b || 53 === b ? (b = c + dc(a),
    a.wa = b & 255 | b >> 16 & 65280,
    a.na = b >> 8 & 255,
    a.qa = b >> 16 & 255) : a.Hd ? (b = c + ec(a),
    a.wa = b & 255,
    a.na = b >> 8 & 255,
    a.qa = b >> 16 & 255,
    a.head = a.head & -16 | b & 15) : (b = c + gc(a),
    c = b / (a.D * a.C) | 0,
    a.na = c & 255,
    a.qa = c >> 8 & 255,
    a.head = (b / a.C | 0) % a.D & 15,
    a.wa = b % a.C + 1 & 255,
    gc(a))
}
function Nb(a, b) {
    var c = 36 === b || 41 === b
      , d = Ob(a, c);
    c = Pb(a, c);
    var e = 32 === b || 36 === b
      , g = d * a.l;
    c *= a.l;
    c + g > a.buffer.byteLength ? (a.status = 255,
    a.S()) : (a.status = 192,
    $b(a),
    a.fa(c, g, f=>{
        ac(a, f);
        a.status = 88;
        a.g = e ? 512 : Math.min(g, 512 * a.L);
        Xb(a, b, e ? 1 : Math.min(d, a.C));
        a.S();
        bc(a, g)
    }
    ))
}
function Ub(a) {
    var b = 37 === a.o
      , c = Ob(a, b);
    b = Pb(a, b);
    var d = c * a.l;
    b *= a.l;
    $b(a);
    a.fa(b, d, e=>{
        var g = a.oa.nd
          , f = 0;
        do {
            var h = a.s.g(g)
              , k = a.s.Na(g + 4)
              , l = a.s.od(g + 7) & 128;
            k || (k = 65536);
            ra(a.s, e.subarray(f, f + k), h);
            f += k;
            g += 8
        } while (!l);
        Xb(a, a.o, c);
        a.status = 80;
        a.oa.ra &= -2;
        a.o = -1;
        a.S();
        bc(a, d)
    }
    )
}
function Vb(a) {
    var b = 53 === a.o
      , c = Ob(a, b)
      , d = Pb(a, b);
    b = c * a.l;
    d *= a.l;
    var e = a.oa.nd
      , g = 0;
    const f = new Uint8Array(b);
    do {
        var h = a.s.g(e)
          , k = a.s.Na(e + 4)
          , l = a.s.od(e + 7) & 128;
        k || (k = 65536);
        f.set(a.s.Ma.subarray(h, h + k), g);
        g += k;
        e += 8
    } while (!l);
    a.buffer.set(d, f, ()=>{
        Xb(a, a.o, c);
        a.status = 80;
        a.S();
        a.oa.ra &= -2;
        a.o = -1
    }
    );
    Yb(a, b)
}
function gc(a) {
    return ((a.na & 255 | a.qa << 8 & 65280) * a.D + a.head) * a.C + (a.wa & 255) - 1
}
function ec(a) {
    return a.wa & 255 | a.na << 8 & 65280 | a.qa << 16 & 16711680 | (a.head & 15) << 24
}
function dc(a) {
    return (a.wa & 255 | a.na << 8 & 65280 | a.qa << 16 & 16711680 | a.wa >> 8 << 24 & 4278190080) >>> 0
}
function Pb(a, b) {
    return b ? dc(a) : a.Hd ? ec(a) : gc(a)
}
function Ob(a, b) {
    b ? (a = a.ea,
    0 === a && (a = 65536)) : (a = a.ea & 255,
    0 === a && (a = 256));
    return a
}
function Sb(a) {
    if (a.rc & 16)
        Rb(a, 0);
    else {
        for (var b = 0; 512 > b; b++)
            a.data[b] = 0;
        b = Math.min(16383, a.F);
        ac(a, [64, a.I ? 133 : 0, b, b >> 8, 0, 0, a.D, a.D >> 8, a.C / 512, a.C / 512 >> 8, 0, 2, a.C, a.C >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 118, 32, 54, 68, 72, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 128, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 2, 7, 0, b, b >> 8, a.D, a.D >> 8, a.C, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255, 0, 0, 160 === a.o ? 0 : 7, 160 === a.o ? 0 : 4, 0, 0, 30, 0, 30, 0, 30, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 116, 0, 64, 0, 64, 0, 116, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255]);
        a.h = 512;
        a.g = 512
    }
}
function Rb(a, b) {
    Qb(a, b);
    for (var c = 0; c < b + 3 >> 2; c++)
        a.O[c] = 0
}
function Qb(a, b) {
    a.data.length < b && (a.data = new Uint8Array(b + 3 & -4),
    a.V = new Uint16Array(a.data.buffer),
    a.O = new Int32Array(a.data.buffer));
    a.h = b;
    a.i = 0
}
function ac(a, b) {
    Qb(a, b.length);
    a.data.set(b)
}
function $b(a) {
    a.B.jg = !0;
    a.v.send("ide-read-start")
}
function bc(a, b) {
    a.B.jg = !1;
    var c = b / a.l | 0;
    a.B.Ng += c;
    a.B.Qf += b;
    a.v.send("ide-read-end", [a.Y, b, c])
}
function Yb(a, b) {
    var c = b / a.l | 0;
    a.B.Og += c;
    a.B.Rf += b;
    a.v.send("ide-write-end", [a.Y, b, c])
}
n.fa = function(a, b, c) {
    const d = this.pa++;
    this.P.add(d);
    this.buffer.get(a, b, e=>{
        this.ba.delete(d) ? this.P.has(d) : (this.P.delete(d),
        c(e))
    }
    )
}
;
n.$ = function() {
    var a = [];
    a[0] = this.ea;
    a[1] = this.F;
    a[2] = this.qa;
    a[3] = this.na;
    a[4] = this.i;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = this.rc;
    a[10] = this.error;
    a[11] = this.head;
    a[12] = this.D;
    a[13] = this.I;
    a[14] = this.Hd;
    a[15] = this.ad;
    a[16] = this.data;
    a[17] = this.h;
    a[18] = this.wa;
    a[19] = this.j;
    a[20] = this.l;
    a[21] = this.L;
    a[22] = this.C;
    a[23] = this.status;
    a[24] = this.X;
    a[25] = this.o;
    a[26] = this.g;
    a[27] = this.T;
    a[28] = this.buffer;
    return a
}
;
n.H = function(a) {
    this.ea = a[0];
    this.F = a[1];
    this.qa = a[2];
    this.na = a[3];
    this.i = a[4];
    this.rc = a[9];
    this.error = a[10];
    this.head = a[11];
    this.D = a[12];
    this.I = a[13];
    this.Hd = a[14];
    this.ad = a[15];
    this.data = a[16];
    this.h = a[17];
    this.wa = a[18];
    this.j = a[19];
    this.l = a[20];
    this.L = a[21];
    this.C = a[22];
    this.status = a[23];
    this.X = a[24];
    this.o = a[25];
    this.g = a[26];
    this.T = a[27];
    this.V = new Uint16Array(this.data.buffer);
    this.O = new Int32Array(this.data.buffer);
    this.buffer && this.buffer.H(a[28])
}
;
function hc(a) {
    this.qb = new Uint8Array(4);
    this.g = new Uint8Array(4);
    this.hd = new Uint8Array(4);
    this.jd = new Uint8Array(4);
    this.gd = new Int32Array(this.qb.buffer);
    new Int32Array(this.g.buffer);
    this.rg = new Int32Array(this.hd.buffer);
    this.tg = new Int32Array(this.jd.buffer);
    this.yb = [];
    this.u = [];
    this.s = a;
    for (var b = 0; 256 > b; b++)
        this.yb[b] = void 0,
        this.u[b] = void 0;
    this.A = a.A;
    L(a.A, 3324, this, function(c) {
        ic(this, this.gd[0], c)
    }, function(c) {
        jc(this, this.gd[0], c)
    }, function(c) {
        var d = this.gd[0]
          , e = d >> 8 & 65535
          , g = d & 255;
        d = this.yb[e];
        e = this.u[e];
        if (d)
            if (16 <= g && 40 > g)
                if (e = e.ib[g - 16 >> 2]) {
                    g >>= 2;
                    var f = d[g] & 1;
                    -1 === (c | 3 | e.size - 1) ? (c = ~(e.size - 1) | f,
                    0 === f && (d[g] = c)) : 0 === f && (d[g] = e.og);
                    1 === f && (kc(this, e, d[g] & 65534, c & 65534),
                    d[g] = c | 1)
                } else
                    d[g >> 2] = 0;
            else
                48 === g ? d[g >> 2] = e.sg ? -1 === (c | 2047) ? -e.sg | 0 : e.Zh | 0 : 0 : 4 !== g && (d[g >>> 2] = c)
    });
    L(a.A, 3325, this, function(c) {
        ic(this, this.gd[0] + 1 | 0, c)
    });
    L(a.A, 3326, this, function(c) {
        ic(this, this.gd[0] + 2 | 0, c)
    }, function(c) {
        jc(this, this.gd[0] + 2 | 0, c)
    });
    L(a.A, 3327, this, function(c) {
        ic(this, this.gd[0] + 3 | 0, c)
    });
    a.A.pd(3324, this, function() {
        return this.hd[0]
    }, function() {
        return this.hd[1]
    }, function() {
        return this.hd[2]
    }, function() {
        return this.hd[3]
    });
    a.A.pd(3320, this, function() {
        return this.jd[0]
    }, function() {
        return this.jd[1]
    }, function() {
        return this.jd[2]
    }, function() {
        return this.jd[3]
    });
    a.A.Lb(3320, this, function(c) {
        this.qb[0] = c & 252
    }, function(c) {
        2 === (this.qb[1] & 6) && 6 === (c & 6) ? lc(a) : this.qb[1] = c
    }, function(c) {
        this.qb[2] = c
    }, function(c) {
        this.qb[3] = c;
        c = this.qb[0] & 252;
        var d = this.yb[this.qb[2] << 8 | this.qb[1]];
        void 0 !== d ? (this.tg[0] = -2147483648,
        this.rg[0] = c < d.byteLength ? d[c >> 2] : 0) : (this.rg[0] = -1,
        this.tg[0] = 0)
    });
    Tb(this, {
        Ia: 0,
        K: [134, 128, 55, 18, 0, 0, 0, 0, 2, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0],
        ib: [],
        name: "82441FX PMC"
    });
    this.i = {
        Ia: 8,
        K: [134, 128, 0, 112, 7, 0, 0, 2, 0, 0, 1, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ib: [],
        name: "82371SB PIIX3 ISA"
    };
    this.j = Tb(this, this.i);
    this.h = new Uint8Array(this.j.buffer)
}
hc.prototype.$ = function() {
    for (var a = [], b = 0; 256 > b; b++)
        a[b] = this.yb[b];
    a[256] = this.qb;
    a[257] = this.g;
    a[258] = this.hd;
    a[259] = this.jd;
    return a
}
;
hc.prototype.H = function(a) {
    for (var b = 0; 256 > b; b++) {
        var c = this.u[b]
          , d = a[b];
        if (c && d) {
            for (var e = 0; e < c.ib.length; e++) {
                var g = d[4 + e];
                if (g & 1) {
                    var f = c.ib[e];
                    kc(this, f, f.og & 65534, g & 65534)
                }
            }
            this.yb[b].set(d)
        }
    }
    this.qb.set(a[256]);
    this.g.set(a[257]);
    this.hd.set(a[258]);
    this.jd.set(a[259])
}
;
function ic(a, b, c) {
    var d = b & 255;
    (new Uint8Array(a.yb[b >> 8 & 65535].buffer))[d] = c
}
function jc(a, b, c) {
    var d = b & 255;
    a = new Uint16Array(a.yb[b >> 8 & 65535].buffer);
    !a || 16 <= d && 44 > d || (a[d >>> 1] = c)
}
function Tb(a, b) {
    var c = b.Ia
      , d = new Int32Array(64);
    d.set(new Int32Array((new Uint8Array(b.K)).buffer));
    a.yb[c] = d;
    a.u[c] = b;
    c = d.slice(4, 10);
    for (var e = 0; e < b.ib.length; e++) {
        var g = b.ib[e];
        if (g) {
            var f = c[e]
              , h = f & 1;
            g.og = f;
            g.entries = [];
            if (0 !== h)
                for (f &= -2,
                h = 0; h < g.size; h++)
                    g.entries[h] = a.A.ports[f + h]
        }
    }
    return d
}
function kc(a, b, c, d) {
    for (var e = b.size, g = a.A.ports, f = 0; f < e; f++) {
        4096 <= c + f && (g[c + f] = gb(a.A));
        var h = b.entries[f];
        4096 <= d + f && (g[d + f] = h)
    }
}
hc.prototype.Aa = function(a) {
    this.s.Ja(this.h[96 + ((this.yb[a][15] >> 8 & 255) - 1 + ((a >> 3) - 1 & 255) & 3)])
}
;
function mc(a, b) {
    Jb(a.s, a.h[96 + ((a.yb[b][15] >> 8 & 255) + (b >> 3 & 255) - 2 & 3)])
}
;function nc(a, b) {
    this.A = a.A;
    this.s = a;
    this.eb = a.u.eb;
    this.h = 0;
    this.L = new Uint8Array(10);
    this.O = 0;
    this.j = null;
    this.g = new Uint8Array(10);
    this.l = this.i = 0;
    this.F = b;
    this.I = this.C = this.V = this.ba = this.Y = this.X = 0;
    this.P = 1;
    this.o = 0;
    if (b) {
        var c = {
            [163840]: {
                type: 1,
                kb: 40,
                jb: 8,
                gb: 1
            },
            [184320]: {
                type: 1,
                kb: 40,
                jb: 9,
                gb: 1
            },
            [204800]: {
                type: 1,
                kb: 40,
                jb: 10,
                gb: 1
            },
            [327680]: {
                type: 1,
                kb: 40,
                jb: 8,
                gb: 2
            },
            [368640]: {
                type: 1,
                kb: 40,
                jb: 9,
                gb: 2
            },
            [409600]: {
                type: 1,
                kb: 40,
                jb: 10,
                gb: 2
            },
            [737280]: {
                type: 3,
                kb: 80,
                jb: 9,
                gb: 2
            },
            [1228800]: {
                type: 2,
                kb: 80,
                jb: 15,
                gb: 2
            },
            [1474560]: {
                type: 4,
                kb: 80,
                jb: 18,
                gb: 2
            },
            [1763328]: {
                type: 5,
                kb: 82,
                jb: 21,
                gb: 2
            },
            [2949120]: {
                type: 5,
                kb: 80,
                jb: 36,
                gb: 2
            },
            512: {
                type: 1,
                kb: 1,
                jb: 1,
                gb: 1
            }
        }
          , d = b.byteLength;
        d = c[d];
        d || (d = 1474560 < b.byteLength ? 2949120 : 1474560,
        d = c[d]);
        a.u.Ic.W[16] = d.type << 4;
        a = d.jb;
        b = d.gb;
        d = d.kb;
        this.B = a;
        this.D = b;
        this.T = d
    } else
        a.u.Ic.W[16] = 64,
        this.T = this.D = this.B = 0;
    K(this.A, 1008, this, this.gj);
    K(this.A, 1010, this, this.hj);
    K(this.A, 1012, this, this.jj);
    K(this.A, 1013, this, this.kj);
    K(this.A, 1015, this, this.mj);
    L(this.A, 1010, this, this.ij);
    L(this.A, 1013, this, this.lj)
}
n = nc.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.h;
    a[1] = this.L;
    a[2] = this.O;
    a[4] = this.g;
    a[5] = this.i;
    a[6] = this.l;
    a[8] = this.X;
    a[9] = this.Y;
    a[10] = this.ba;
    a[11] = this.V;
    a[12] = this.C;
    a[13] = this.I;
    a[14] = this.P;
    a[15] = this.o;
    a[16] = this.B;
    a[17] = this.D;
    a[18] = this.T;
    return a
}
;
n.H = function(a) {
    this.h = a[0];
    this.L = a[1];
    this.O = a[2];
    this.j = a[3];
    this.g = a[4];
    this.i = a[5];
    this.l = a[6];
    this.X = a[8];
    this.Y = a[9];
    this.ba = a[10];
    this.V = a[11];
    this.C = a[12];
    this.I = a[13];
    this.P = a[14];
    this.o = a[15];
    this.B = a[16];
    this.D = a[17];
    this.T = a[18]
}
;
n.gj = function() {
    return 0
}
;
n.jj = function() {
    var a = 128;
    this.i < this.l && (a |= 80);
    0 === (this.o & 8) && (a |= 32);
    return a
}
;
n.mj = function() {
    return 0
}
;
n.kj = function() {
    return this.i < this.l ? (Jb(this.s, 6),
    this.g[this.i++]) : 255
}
;
n.lj = function(a) {
    if (this.F)
        if (0 < this.h)
            this.L[this.O++] = a,
            this.h--,
            0 === this.h && this.j.call(this, this.L);
        else {
            switch (a) {
            case 3:
                this.j = this.Eh;
                this.h = 2;
                break;
            case 4:
                this.j = this.jh;
                this.h = 1;
                break;
            case 5:
            case 69:
            case 197:
                this.j = function(b) {
                    oc(this, !0, b)
                }
                ;
                this.h = 8;
                break;
            case 230:
                this.j = function(b) {
                    oc(this, !1, b)
                }
                ;
                this.h = 8;
                break;
            case 7:
                this.j = this.ih;
                this.h = 1;
                break;
            case 8:
                this.i = 0;
                this.l = 2;
                this.g[0] = 32;
                this.g[1] = this.C;
                break;
            case 74:
                this.j = this.Aj;
                this.h = 1;
                break;
            case 15:
                this.h = 2;
                this.j = this.bh;
                break;
            case 14:
                this.g[0] = 128,
                this.i = 0,
                this.l = 1,
                this.h = 0
            }
            this.O = 0
        }
}
;
n.hj = function() {
    return this.o
}
;
n.ij = function(a) {
    4 === (a & 4) && 0 === (this.o & 4) && this.s.Ja(6);
    this.o = a
}
;
n.jh = function() {
    this.i = 0;
    this.l = 1;
    this.g[0] = 32
}
;
n.bh = function(a) {
    this.C = a[1];
    this.I = a[0] >> 2 & 1;
    this.Aa()
}
;
n.ih = function() {
    this.Aa()
}
;
function oc(a, b, c) {
    var d = c[2]
      , e = c[1]
      , g = c[3]
      , f = 128 << c[4]
      , h = c[5] - c[3] + 1
      , k = ((d + a.D * e) * a.B + g - 1) * f;
    a.F && (b ? a.eb.$d(a.F, k, h * f, 2, a.done.bind(a, c, e, d, g)) : pc(a.eb, a.F, k, a.done.bind(a, c, e, d, g)))
}
n.done = function(a, b, c, d, e) {
    e || (d++,
    d > this.B && (d = 1,
    c++,
    c >= this.D && (c = 0,
    b++)),
    this.C = b,
    this.I = c,
    this.P = d,
    this.i = 0,
    this.l = 7,
    this.g[0] = c << 2 | 32,
    this.g[1] = 0,
    this.g[2] = 0,
    this.g[3] = b,
    this.g[4] = c,
    this.g[5] = d,
    this.g[6] = a[4],
    this.Aa())
}
;
n.Eh = function() {}
;
n.Aj = function() {
    this.i = 0;
    this.l = 7;
    this.g[0] = 0;
    this.g[1] = 0;
    this.g[2] = 0;
    this.g[3] = 0;
    this.g[4] = 0;
    this.g[5] = 0;
    this.g[6] = 0;
    this.Aa()
}
;
n.Aa = function() {
    this.o & 8 && this.s.Ja(6)
}
;
function ra(a, b, c) {
    b.length && (a.Me(c),
    a.Me(c + b.length - 1),
    a.Qh(c, c + b.length),
    a.Ma.set(b, c))
}
;function qc(a) {
    this.s = a;
    this.o = new Uint8Array(8);
    this.B = new Uint8Array(8);
    this.g = new Uint16Array(8);
    this.j = new Uint16Array(8);
    this.h = new Uint16Array(8);
    this.l = new Uint16Array(8);
    this.Yb = new Uint8Array(8);
    this.C = new Uint8Array(8);
    this.cf = [];
    this.i = 0;
    a = a.A;
    L(a, 0, this, this.Dc.bind(this, 0));
    L(a, 2, this, this.Dc.bind(this, 1));
    L(a, 4, this, this.Dc.bind(this, 2));
    L(a, 6, this, this.Dc.bind(this, 3));
    L(a, 1, this, this.Fc.bind(this, 0));
    L(a, 3, this, this.Fc.bind(this, 1));
    L(a, 5, this, this.Fc.bind(this, 2));
    L(a, 7, this, this.Fc.bind(this, 3));
    K(a, 0, this, this.Cc.bind(this, 0));
    K(a, 2, this, this.Cc.bind(this, 1));
    K(a, 4, this, this.Cc.bind(this, 2));
    K(a, 6, this, this.Cc.bind(this, 3));
    K(a, 1, this, this.Ec.bind(this, 0));
    K(a, 3, this, this.Ec.bind(this, 1));
    K(a, 5, this, this.Ec.bind(this, 2));
    K(a, 7, this, this.Ec.bind(this, 3));
    L(a, 192, this, this.Dc.bind(this, 4));
    L(a, 196, this, this.Dc.bind(this, 5));
    L(a, 200, this, this.Dc.bind(this, 6));
    L(a, 204, this, this.Dc.bind(this, 7));
    L(a, 194, this, this.Fc.bind(this, 4));
    L(a, 198, this, this.Fc.bind(this, 5));
    L(a, 202, this, this.Fc.bind(this, 6));
    L(a, 206, this, this.Fc.bind(this, 7));
    K(a, 192, this, this.Cc.bind(this, 4));
    K(a, 196, this, this.Cc.bind(this, 5));
    K(a, 200, this, this.Cc.bind(this, 6));
    K(a, 204, this, this.Cc.bind(this, 7));
    K(a, 194, this, this.Ec.bind(this, 4));
    K(a, 198, this, this.Ec.bind(this, 5));
    K(a, 202, this, this.Ec.bind(this, 6));
    K(a, 206, this, this.Ec.bind(this, 7));
    L(a, 135, this, this.Hc.bind(this, 0));
    L(a, 131, this, this.Hc.bind(this, 1));
    L(a, 129, this, this.Hc.bind(this, 2));
    L(a, 130, this, this.Hc.bind(this, 3));
    L(a, 143, this, this.Hc.bind(this, 4));
    L(a, 139, this, this.Hc.bind(this, 5));
    L(a, 137, this, this.Hc.bind(this, 6));
    L(a, 138, this, this.Hc.bind(this, 7));
    K(a, 135, this, this.Gc.bind(this, 0));
    K(a, 131, this, this.Gc.bind(this, 1));
    K(a, 129, this, this.Gc.bind(this, 2));
    K(a, 130, this, this.Gc.bind(this, 3));
    K(a, 143, this, this.Gc.bind(this, 4));
    K(a, 139, this, this.Gc.bind(this, 5));
    K(a, 137, this, this.Gc.bind(this, 6));
    K(a, 138, this, this.Gc.bind(this, 7));
    L(a, 1159, this, this.md.bind(this, 0));
    L(a, 1155, this, this.md.bind(this, 1));
    L(a, 1153, this, this.md.bind(this, 2));
    L(a, 1154, this, this.md.bind(this, 3));
    L(a, 1163, this, this.md.bind(this, 5));
    L(a, 1161, this, this.md.bind(this, 6));
    L(a, 1162, this, this.md.bind(this, 7));
    K(a, 1159, this, this.ld.bind(this, 0));
    K(a, 1155, this, this.ld.bind(this, 1));
    K(a, 1153, this, this.ld.bind(this, 2));
    K(a, 1154, this, this.ld.bind(this, 3));
    K(a, 1163, this, this.ld.bind(this, 5));
    K(a, 1161, this, this.ld.bind(this, 6));
    K(a, 1162, this, this.ld.bind(this, 7));
    L(a, 10, this, this.Ig.bind(this, 0));
    L(a, 212, this, this.Ig.bind(this, 4));
    L(a, 15, this, this.Hg.bind(this, 0));
    L(a, 222, this, this.Hg.bind(this, 4));
    K(a, 15, this, this.Gg.bind(this, 0));
    K(a, 222, this, this.Gg.bind(this, 4));
    L(a, 11, this, this.Fg.bind(this, 0));
    L(a, 214, this, this.Fg.bind(this, 4));
    L(a, 12, this, this.Eg);
    L(a, 216, this, this.Eg)
}
n = qc.prototype;
n.$ = function() {
    return [this.o, this.B, this.g, this.j, this.h, this.l, this.Yb, this.C, this.i]
}
;
n.H = function(a) {
    this.o = a[0];
    this.B = a[1];
    this.g = a[2];
    this.j = a[3];
    this.h = a[4];
    this.l = a[5];
    this.Yb = a[6];
    this.C = a[7];
    this.i = a[8]
}
;
n.Fc = function(a, b) {
    this.h[a] = rc(this, this.h[a], b, !1);
    this.l[a] = rc(this, this.l[a], b, !0)
}
;
n.Ec = function(a) {
    return sc(this, this.h[a])
}
;
n.Dc = function(a, b) {
    this.g[a] = rc(this, this.g[a], b, !1);
    this.j[a] = rc(this, this.j[a], b, !0)
}
;
n.Cc = function(a) {
    return sc(this, this.g[a])
}
;
n.md = function(a, b) {
    this.B[a] = b
}
;
n.ld = function(a) {
    return this.B[a]
}
;
n.Hc = function(a, b) {
    this.o[a] = b
}
;
n.Gc = function(a) {
    return this.o[a]
}
;
n.Ig = function(a, b) {
    tc(this, (b & 3) + a, b & 4 ? 1 : 0)
}
;
n.Hg = function(a, b) {
    for (var c = 0; 4 > c; c++)
        tc(this, a + c, b & 1 << c)
}
;
n.Gg = function(a) {
    var b = 0 | this.Yb[a + 0];
    b |= this.Yb[a + 1] << 1;
    b |= this.Yb[a + 2] << 2;
    return b |= this.Yb[a + 3] << 3
}
;
n.Fg = function(a, b) {
    this.C[(b & 3) + a] = b
}
;
n.Eg = function() {
    this.i = 0
}
;
function tc(a, b, c) {
    if (a.Yb[b] !== c && (a.Yb[b] = c,
    !c))
        for (c = 0; c < a.cf.length; c++)
            a.cf[c].Je.call(a.cf[c].Gf, b)
}
function pc(a, b, c, d) {
    var e = a.h[2] + 1
      , g = uc(a, 2);
    if (c + e > b.byteLength)
        d(!0);
    else {
        var f = a.s;
        a.g[2] += e;
        b.get(c, e, function(h) {
            ra(f, h, g);
            d(!1)
        })
    }
}
n.$d = function(a, b, c, d, e) {
    var g = this.h[d] + 1 & 65535
      , f = 5 <= d ? 2 : 1
      , h = g * f
      , k = uc(this, d)
      , l = !1
      , p = !1
      , q = this.C[d] & 16;
    c < h ? (g = Math.floor(c / f),
    h = g * f,
    l = !0) : c > h && (p = !0);
    b + h > a.byteLength ? e(!0) : (this.g[d] += g,
    this.h[d] -= g,
    !l && q && (this.g[d] = this.j[d],
    this.h[d] = this.l[d]),
    a.set(b, this.s.Ma.subarray(k, k + h), ()=>{
        p && q ? this.$d(a, b + h, c - h, d, e) : e(!1)
    }
    ))
}
;
function uc(a, b) {
    var c = a.g[b];
    5 <= b && (c <<= 1);
    c = c & 65535 | a.o[b] << 16;
    return c |= a.B[b] << 24
}
function rc(a, b, c, d) {
    d || (a.i ^= 1);
    return a.i ? b & -256 | c : b & -65281 | c << 8
}
function sc(a, b) {
    a.i ^= 1;
    return a.i ? b & 255 : b >> 8 & 255
}
;function vc(a, b) {
    this.s = a;
    this.v = b;
    this.i = new Float64Array(3);
    this.j = new Uint16Array(3);
    this.g = new Uint8Array(4);
    this.h = new Uint8Array(4);
    this.Sc = new Uint8Array(4);
    this.B = new Uint8Array(4);
    this.l = new Uint8Array(4);
    this.o = new Uint16Array(3);
    this.mb = new Uint16Array(3);
    K(a.A, 97, this, function() {
        var c = nb()
          , d = 66.66666666666667 * c & 1;
        c = wc(this, 2, c);
        return d << 4 | c << 5
    });
    L(a.A, 97, this, function(c) {
        c & 1 ? this.v.send("pcspeaker-enable") : this.v.send("pcspeaker-disable")
    });
    K(a.A, 64, this, function() {
        return xc(this, 0)
    });
    K(a.A, 65, this, function() {
        return xc(this, 1)
    });
    K(a.A, 66, this, function() {
        return xc(this, 2)
    });
    L(a.A, 64, this, function(c) {
        yc(this, 0, c)
    });
    L(a.A, 65, this, function(c) {
        yc(this, 1, c)
    });
    L(a.A, 66, this, function(c) {
        yc(this, 2, c);
        this.v.send("pcspeaker-update", [this.Sc[2], this.mb[2]])
    });
    L(a.A, 67, this, this.C)
}
vc.prototype.$ = function() {
    var a = [];
    a[0] = this.g;
    a[1] = this.h;
    a[2] = this.Sc;
    a[3] = this.B;
    a[4] = this.l;
    a[5] = this.o;
    a[6] = this.mb;
    a[7] = this.i;
    a[8] = this.j;
    return a
}
;
vc.prototype.H = function(a) {
    this.g = a[0];
    this.h = a[1];
    this.Sc = a[2];
    this.B = a[3];
    this.l = a[4];
    this.o = a[5];
    this.mb = a[6];
    this.i = a[7];
    this.j = a[8]
}
;
vc.prototype.sb = function(a, b) {
    var c = 100;
    b || (this.h[0] && wc(this, 0, a) ? (this.j[0] = zc(this, 0, a),
    this.i[0] = a,
    Jb(this.s, 0),
    this.s.Ja(0),
    0 === this.Sc[0] && (this.h[0] = 0)) : Jb(this.s, 0),
    this.h[0] && (c = (this.j[0] - Math.floor(1193.1816666 * (a - this.i[0]))) / 1193.1816666));
    return c
}
;
function zc(a, b, c) {
    if (!a.h[b])
        return 0;
    c = a.j[b] - Math.floor(1193.1816666 * (c - a.i[b]));
    a = a.mb[b];
    c >= a ? c %= a : 0 > c && (c = c % a + a);
    return c
}
function wc(a, b, c) {
    c -= a.i[b];
    return 0 > c ? !0 : a.j[b] < Math.floor(1193.1816666 * c)
}
function xc(a, b) {
    var c = a.l[b];
    if (c)
        return a.l[b]--,
        2 === c ? a.o[b] & 255 : a.o[b] >> 8;
    c = a.g[b];
    3 === a.Sc[b] && (a.g[b] ^= 1);
    a = zc(a, b, nb());
    return c ? a & 255 : a >> 8
}
function yc(a, b, c) {
    a.mb[b] = a.g[b] ? a.mb[b] & -256 | c : a.mb[b] & 255 | c << 8;
    3 === a.B[b] && a.g[b] || (a.mb[b] || (a.mb[b] = 65535),
    a.j[b] = a.mb[b],
    a.h[b] = !0,
    a.i[b] = nb());
    3 === a.B[b] && (a.g[b] ^= 1)
}
vc.prototype.C = function(a) {
    var b = a >> 1 & 7
      , c = a >> 6 & 3;
    a = a >> 4 & 3;
    3 !== c && (0 === a ? (this.l[c] = 2,
    b = zc(this, c, nb()),
    this.o[c] = b ? b - 1 : 0) : (6 <= b && (b &= -5),
    this.g[c] = 1 === a ? 0 : 1,
    0 === c && Jb(this.s, 0),
    this.Sc[c] = b,
    this.B[c] = a,
    2 === c && this.v.send("pcspeaker-update", [this.Sc[2], this.mb[2]])))
}
;
var Ac = Uint32Array.from([655360, 655360, 720896, 753664])
  , Bc = Uint32Array.from([131072, 65536, 32768, 32768]);
function Cc(a, b, c) {
    this.s = a;
    this.v = b;
    this.ha = c;
    this.D = 0;
    this.sc = 14;
    this.qc = 15;
    this.L = 80;
    this.Tb = 25;
    this.xe = this.Ea = this.Pd = this.mc = 0;
    this.Id = [];
    this.Ac = this.Ba = 0;
    this.cb = new Uint8Array(25);
    this.C = this.O = this.zc = this.P = this.g = this.i = this.Qb = this.Rb = this.Fa = 0;
    this.uc = !0;
    this.Da = !1;
    setTimeout(()=>{
        b.send("screen-set-mode", this.Da)
    }
    , 0);
    this.$a = new Int32Array(256);
    this.h = 0;
    this.ie = 45253;
    this.Za = this.Oa = 0;
    this.Ka = !1;
    this.Mb = 32;
    this.ud = this.Sa = 0;
    this.K = [52, 18, 17, 17, 3, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 8, 14680064, 57344, 224, 0, 0, 0, 0, 0, 0, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 190, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Ia = 144;
    this.ib = [{
        size: c
    }];
    this.sg = 65536;
    this.Zh = 4272947200;
    this.name = "vga";
    this.B = {
        hg: !1,
        Bj: 0,
        Cj: 0,
        Pf: 0
    };
    this.pa = this.tb = this.ba = this.F = 0;
    this.X = 255;
    this.Zb = new Uint8Array(16);
    this.l = -1;
    this.Ub = 32;
    this.Rc = this.Sb = this.Cd = this.Ta = 0;
    this.Wb = -1;
    this.Vb = 15;
    this.bb = this.Xb = 0;
    this.Pb = -1;
    this.Ra = this.kc = this.xc = 0;
    this.vc = 255;
    this.Y = this.V = this.T = this.Qa = this.wc = this.Ob = 0;
    this.j = this.$c = 255;
    c = a.A;
    L(c, 960, this, this.Li);
    K(c, 960, this, this.Ag, this.Ki);
    K(c, 961, this, this.Bg);
    L(c, 962, this, this.Mi);
    c.Lb(964, this, this.Oi, this.Qi);
    K(c, 964, this, this.Ni);
    K(c, 965, this, this.Pi);
    c.Lb(974, this, this.aj, this.cj);
    K(c, 974, this, this.$i);
    K(c, 975, this, this.bj);
    K(c, 966, this, this.Ri);
    L(c, 966, this, this.Si);
    L(c, 967, this, this.Ui);
    K(c, 967, this, this.Ti);
    L(c, 968, this, this.Wi);
    K(c, 968, this, this.Vi);
    L(c, 969, this, this.Yi);
    K(c, 969, this, this.Xi);
    K(c, 972, this, this.Zi);
    c.Lb(980, this, this.ej, this.fj);
    K(c, 980, this, this.dj);
    K(c, 981, this, this.Cg, ()=>this.Cg());
    K(c, 970, this, function() {
        return 0
    });
    K(c, 986, this, this.Dg);
    K(c, 954, this, this.Dg);
    this.ub = -1;
    this.I = 0;
    L(c, 462, this, void 0, this.ai);
    L(c, 463, this, void 0, this.ci);
    K(c, 463, this, void 0, this.bi);
    void 0 === this.ha || 262144 > this.ha ? this.ha = 262144 : this.ha & 65535 && (this.ha |= 65535,
    this.ha++);
    const d = a.Yg(this.ha);
    this.Ff = Q(Uint8Array, a.Pa, d, this.ha);
    this.Xd = this.ha;
    this.Wd = 0;
    this.Zd = this.ha;
    this.Yd = 0;
    this.Fb = null;
    b.register("screen-fill-buffer", function() {
        if (this.Da) {
            if (0 === this.Fb.data.byteLength) {
                var g = new Uint8ClampedArray(this.s.Pa.buffer,this.jf,4 * this.Ea * this.xe);
                this.Fb = new ImageData(g,this.Ea,this.xe);
                Dc(this)
            }
            if (this.Ka) {
                g = 0;
                var f = this.Za;
                if (8 === this.Mb)
                    for (var h = new Int32Array(this.s.Pa.buffer,this.jf,this.mc * this.Pd), k = new Uint8Array(this.s.Pa.buffer,this.Ff.byteOffset,this.ha), l = 0; l < h.length; l++) {
                        var p = this.$a[k[l]];
                        h[l] = p & 65280 | p << 16 | p >> 16 | 4278190080
                    }
                else
                    this.s.ah(this.Mb, this.ud),
                    l = 15 === this.Mb ? 2 : this.Mb / 8,
                    g = ((this.s.$g[0] / l | 0) - this.ud) / this.Oa | 0,
                    f = (((this.s.Zg[0] / l | 0) - this.ud) / this.Oa | 0) + 1;
                g < f && (g = Math.max(g, 0),
                f = Math.min(f, this.Za),
                this.v.send("screen-fill-buffer-end", [{
                    Fb: this.Fb,
                    Bf: 0,
                    Cf: g,
                    De: 0,
                    Ee: g,
                    gf: this.Oa,
                    ff: f - g
                }]))
            } else {
                g = Math.min(this.Yd | 15, 524287);
                l = Ec(this);
                p = ~this.Fa & 3;
                f = this.kc & 96;
                h = this.Ta & 64;
                for (k = this.Zd & -16; k <= g; ) {
                    var q = k >>> l;
                    if (p) {
                        var t = k / this.Ea | 0
                          , m = k - this.Ea * t;
                        switch (p) {
                        case 1:
                            q = (t & 1) << 13;
                            t >>>= 1;
                            break;
                        case 2:
                            q = (t & 1) << 14;
                            t >>>= 1;
                            break;
                        case 3:
                            q = (t & 3) << 13,
                            t >>>= 2
                        }
                        q |= (t * this.Ea + m >>> l) + this.Ba
                    }
                    t = this.Ve[q];
                    m = this.We[q];
                    var r = this.Xe[q]
                      , x = this.Ye[q];
                    q = new Uint8Array(8);
                    switch (f) {
                    case 0:
                        t <<= 0;
                        m <<= 1;
                        r <<= 2;
                        x <<= 3;
                        for (var w = 7; 0 <= w; w--)
                            q[7 - w] = t >> w & 1 | m >> w & 2 | r >> w & 4 | x >> w & 8;
                        break;
                    case 32:
                        q[0] = t >> 6 & 3 | r >> 4 & 12;
                        q[1] = t >> 4 & 3 | r >> 2 & 12;
                        q[2] = t >> 2 & 3 | r >> 0 & 12;
                        q[3] = t >> 0 & 3 | r << 2 & 12;
                        q[4] = m >> 6 & 3 | x >> 4 & 12;
                        q[5] = m >> 4 & 3 | x >> 2 & 12;
                        q[6] = m >> 2 & 3 | x >> 0 & 12;
                        q[7] = m >> 0 & 3 | x << 2 & 12;
                        break;
                    case 64:
                    case 96:
                        q[0] = t >> 4 & 15,
                        q[1] = t >> 0 & 15,
                        q[2] = m >> 4 & 15,
                        q[3] = m >> 0 & 15,
                        q[4] = r >> 4 & 15,
                        q[5] = r >> 0 & 15,
                        q[6] = x >> 4 & 15,
                        q[7] = x >> 0 & 15
                    }
                    if (h)
                        for (t = w = 0; 4 > w; w++,
                        k++,
                        t += 2)
                            this.Kd[k] = q[t] << 4 | q[t + 1];
                    else
                        for (w = 0; 8 > w; w++,
                        k++)
                            this.Kd[k] = q[w]
                }
                h = this.Xd;
                g = Math.min(this.Wd, 524287);
                f = new Int32Array(this.s.Pa.buffer,this.jf,this.Ea * this.xe);
                l = 255;
                p = 0;
                this.Ta & 128 && (l &= 207,
                p |= this.Rc << 4 & 48);
                if (this.Ta & 64)
                    for (; h <= g; h++)
                        k = this.Kd[h] & l | p,
                        k = this.$a[k],
                        f[h] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                else
                    for (l &= 63,
                    p |= this.Rc << 4 & 192; h <= g; h++)
                        k = this.Zb[this.Kd[h] & this.Cd] & l | p,
                        k = this.$a[k],
                        f[h] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                this.v.send("screen-fill-buffer-end", this.Id)
            }
            this.Xd = this.ha;
            this.Wd = 0;
            this.Zd = this.ha;
            this.Yd = 0
        }
        Fc(this)
    }, this);
    this.o = new Uint8Array(262144);
    this.Ve = new Uint8Array(this.o.buffer,0,65536);
    this.We = new Uint8Array(this.o.buffer,65536,65536);
    this.Xe = new Uint8Array(this.o.buffer,131072,65536);
    this.Ye = new Uint8Array(this.o.buffer,196608,65536);
    this.Kd = new Uint8Array(524288);
    var e = this;
    hb(c, 655360, 131072, function(g) {
        return Gc(e, g)
    }, function(g, f) {
        if (e.Ka && e.Da && e.uc)
            e.s.df((g - 655360 | e.Sa) + 3758096384 | 0, f);
        else {
            var h = e.Qa >> 2 & 3;
            g -= Ac[h];
            if (!(0 > g || g >= Bc[h]))
                if (e.Da) {
                    var k = f;
                    f = Hc(e.vc);
                    var l = Ic(e.Ob);
                    h = Ic(e.wc);
                    switch (e.kc & 3) {
                    case 0:
                        k = (k | k << 8) >>> (e.Ra & 7) & 255;
                        var p = Hc(k);
                        k = Ic(e.Ob);
                        p = Jc(e, (p | h & k) & (~h | k), e.h);
                        p = f & p | ~f & e.h;
                        break;
                    case 1:
                        p = e.h;
                        break;
                    case 2:
                        p = Ic(k);
                        p = Jc(e, p, e.h);
                        p = f & p | ~f & e.h;
                        break;
                    case 3:
                        k = (k | k << 8) >>> (e.Ra & 7) & 255,
                        f &= Hc(k),
                        p = f & l | ~f & e.h
                    }
                    f = 15;
                    switch (e.Xb & 12) {
                    case 0:
                        f = 5 << (g & 1);
                        g &= -2;
                        break;
                    case 8:
                    case 12:
                        f = 1 << (g & 3),
                        g &= -4
                    }
                    f &= e.Vb;
                    f & 1 && (e.Ve[g] = p >> 0 & 255);
                    f & 2 && (e.We[g] = p >> 8 & 255);
                    f & 4 && (e.Xe[g] = p >> 16 & 255);
                    f & 8 && (e.Ye[g] = p >> 24 & 255);
                    f = Kc(e, g);
                    p = f + 7;
                    f < e.Zd && (e.Zd = f);
                    p > e.Yd && (e.Yd = p);
                    f < e.Xd && (e.Xd = f);
                    p > e.Wd && (e.Wd = p)
                } else
                    e.Vb & 3 && (p = g,
                    h = (p >> 1) - e.Ba,
                    g = h / e.L | 0,
                    h %= e.L,
                    p & 1 ? (l = f,
                    k = e.o[p & -2]) : (k = f,
                    l = e.o[p | 1]),
                    e.v.send("screen-put-char", [g, h, k, e.$a[e.X & e.Zb[l >> 4 & 15]], e.$a[e.X & e.Zb[l & 15]]]),
                    e.o[p] = f)
        }
    });
    Tb(a.u.Ha, this)
}
n = Cc.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.ha;
    a[1] = this.D;
    a[2] = this.sc;
    a[3] = this.qc;
    a[4] = this.L;
    a[5] = this.Tb;
    a[6] = this.o;
    a[7] = this.pa;
    a[8] = this.Ba;
    a[9] = this.Da;
    a[10] = this.$a;
    a[11] = this.h;
    a[12] = this.T;
    a[13] = this.V;
    a[14] = this.Qa;
    a[15] = this.Oa;
    a[16] = this.Za;
    a[17] = this.Fa;
    a[18] = this.Ka;
    a[19] = this.Mb;
    a[20] = this.Sa;
    a[21] = this.ud;
    a[22] = this.F;
    a[23] = this.ba;
    a[24] = this.tb;
    a[25] = this.Zb;
    a[26] = this.Wb;
    a[27] = this.Vb;
    a[28] = this.Xb;
    a[29] = this.Pb;
    a[30] = this.xc;
    a[31] = this.kc;
    a[32] = this.Ra;
    a[33] = this.vc;
    a[34] = this.Y;
    a[35] = this.$c;
    a[36] = this.j;
    a[37] = this.ub;
    a[38] = this.I;
    a[39] = this.Ff;
    a[40] = this.uc;
    a[41] = this.l;
    a[42] = this.O;
    a[43] = this.Ob;
    a[44] = this.wc;
    a[45] = this.Ac;
    a[46] = this.cb;
    a[47] = this.Rb;
    a[48] = this.Qb;
    a[49] = this.i;
    a[50] = this.g;
    a[51] = this.P;
    a[52] = this.zc;
    a[53] = this.O;
    a[54] = this.Ub;
    a[55] = this.Ta;
    a[56] = this.Cd;
    a[57] = this.Sb;
    a[58] = this.Rc;
    a[59] = this.bb;
    a[60] = this.C;
    a[61] = this.Kd;
    a[62] = this.X;
    return a
}
;
n.H = function(a) {
    this.ha = a[0];
    this.D = a[1];
    this.sc = a[2];
    this.qc = a[3];
    this.L = a[4];
    this.Tb = a[5];
    a[6] && this.o.set(a[6]);
    this.pa = a[7];
    this.Ba = a[8];
    this.Da = a[9];
    this.$a = a[10];
    this.h = a[11];
    this.T = a[12];
    this.V = a[13];
    this.Qa = a[14];
    this.Oa = a[15];
    this.Za = a[16];
    this.Fa = a[17];
    this.Ka = a[18];
    this.Mb = a[19];
    this.Sa = a[20];
    this.ud = a[21];
    this.F = a[22];
    this.ba = a[23];
    this.tb = a[24];
    this.Zb = a[25];
    this.Wb = a[26];
    this.Vb = a[27];
    this.Xb = a[28];
    this.Pb = a[29];
    this.xc = a[30];
    this.kc = a[31];
    this.Ra = a[32];
    this.vc = a[33];
    this.Y = a[34];
    this.$c = a[35];
    this.j = a[36];
    this.ub = a[37];
    this.I = a[38];
    this.Ff.set(a[39]);
    this.uc = a[40];
    this.l = a[41];
    this.O = a[42];
    this.Ob = a[43];
    this.wc = a[44];
    this.Ac = a[45];
    this.cb.set(a[46]);
    this.Rb = a[47];
    this.Qb = a[48];
    this.i = a[49];
    this.g = a[50];
    this.P = a[51];
    this.zc = a[52];
    this.O = a[53];
    this.Ub = a[54];
    this.Ta = a[55];
    this.Cd = a[56];
    this.Sb = a[57];
    this.Rc = a[58];
    this.bb = a[59];
    this.C = a[60];
    a[61] && this.Kd.set(a[61]);
    this.X = void 0 === a[62] ? 255 : a[62];
    this.v.send("screen-set-mode", this.Da);
    this.Da ? (this.Pd = this.mc = 0,
    this.Ka ? (this.qd(this.Oa, this.Za, this.Mb, this.Oa, this.Za),
    Dc(this)) : (Lc(this),
    Dc(this),
    Mc(this))) : (this.rd(this.L, this.Tb),
    this.xd(),
    this.wd());
    Nc(this)
}
;
function Gc(a, b) {
    if (a.Ka && a.uc)
        return a.s.od((b - 655360 | a.Sa) + 3758096384 | 0);
    var c = a.Qa >> 2 & 3;
    b -= Ac[c];
    if (0 > b || b >= Bc[c])
        return 0;
    a.h = a.Ve[b];
    a.h |= a.We[b] << 8;
    a.h |= a.Xe[b] << 16;
    a.h |= a.Ye[b] << 24;
    if (a.kc & 8)
        return c = 255,
        a.V & 1 && (c &= a.Ve[b] ^ ~(a.T & 1 ? 255 : 0)),
        a.V & 2 && (c &= a.We[b] ^ ~(a.T & 2 ? 255 : 0)),
        a.V & 4 && (c &= a.Xe[b] ^ ~(a.T & 4 ? 255 : 0)),
        a.V & 8 && (c &= a.Ye[b] ^ ~(a.T & 8 ? 255 : 0)),
        c;
    c = a.xc;
    a.Da ? a.Xb & 8 ? (c = b & 3,
    b &= -4) : a.kc & 16 && (c = b & 1,
    b &= -2) : c = 0;
    return a.o[c << 16 | b]
}
function Hc(a) {
    return a | a << 8 | a << 16 | a << 24
}
function Ic(a) {
    return (a & 1 ? 255 : 0) | (a & 2 ? 255 : 0) << 8 | (a & 4 ? 255 : 0) << 16 | (a & 8 ? 255 : 0) << 24
}
function Jc(a, b, c) {
    switch (a.Ra & 24) {
    case 8:
        return b & c;
    case 16:
        return b | c;
    case 24:
        return b ^ c
    }
    return b
}
function Oc(a) {
    for (var b = a.Ba << 1, c, d, e = 0; e < a.Tb; e++)
        for (var g = 0; g < a.L; g++)
            c = a.o[b],
            d = a.o[b | 1],
            a.v.send("screen-put-char", [e, g, c, a.$a[a.X & a.Zb[d >> 4 & 15]], a.$a[a.X & a.Zb[d & 15]]]),
            b += 2
}
n.wd = function() {
    var a = (this.D - this.Ba) / this.L | 0
      , b = (this.D - this.Ba) % this.L;
    a = Math.min(this.Tb - 1, a);
    this.v.send("screen-update-cursor", [a, b])
}
;
function Nc(a) {
    a.Da ? a.Ka ? a.s.lg() : (a.Xd = 0,
    a.Wd = 524288) : Oc(a)
}
function Mc(a) {
    a.Da && !a.Ka && (a.Zd = 0,
    a.Yd = 524288,
    Nc(a))
}
n.va = function() {}
;
function Ec(a) {
    var b = 128 + (~a.P & a.Fa & 64);
    b -= a.P & 64;
    b -= a.Ta & 64;
    return b >>> 6
}
function Kc(a, b) {
    var c = Ec(a);
    if (~a.Fa & 3) {
        var d = b - a.Ba;
        d &= a.Fa << 13 | -24577;
        d <<= c;
        var e = d / a.Ea | 0;
        d %= a.Ea;
        switch (a.Fa & 3) {
        case 2:
            e = e << 1 | b >> 13 & 1;
            break;
        case 1:
            e = e << 1 | b >> 14 & 1;
            break;
        case 0:
            e = e << 2 | b >> 13 & 3
        }
        return e * a.Ea + d + (a.Ba << c)
    }
    return b << c
}
function Pc(a, b) {
    a.Y & 128 && (b >>>= 1);
    b = Math.ceil(b / (1 + (a.Y & 31)));
    a.Fa & 1 || (b <<= 1);
    a.Fa & 2 || (b <<= 1);
    return b
}
n.rd = function(a, b) {
    this.L = a;
    this.Tb = b;
    this.v.send("screen-set-size-text", [a, b])
}
;
n.qd = function(a, b, c, d, e) {
    if (!this.B.hg || this.B.Pf !== c || this.mc !== a || this.Pd !== b || this.Ea !== d || this.xe !== e) {
        this.mc = a;
        this.Pd = b;
        this.Ea = d;
        this.xe = e;
        this.B.Pf = c;
        this.B.hg = !0;
        this.B.Bj = a;
        this.B.Cj = b;
        if ("undefined" !== typeof ImageData) {
            const g = d * e
              , f = this.s.Xg(g) >>> 0;
            this.jf = f;
            this.Fb = new ImageData(new Uint8ClampedArray(this.s.Pa.buffer,f,4 * g),d,e);
            this.s.lg()
        }
        this.v.send("screen-set-size-graphical", [a, b, d, e, c])
    }
}
;
function Lc(a) {
    if (!a.Ka) {
        var b = Math.min(1 + a.Rb, a.Qb)
          , c = Math.min(1 + a.i, a.g);
        if (b && c)
            if (a.Da) {
                b <<= 3;
                var d = a.O << 4;
                a.Ta & 64 && (b >>>= 1,
                d >>>= 1);
                var e = a.O << 2;
                a.P & 64 ? e <<= 1 : a.Fa & 64 && (e >>>= 1);
                a.qd(b, Pc(a, c), 8, d, Math.ceil(Bc[0] / e));
                Fc(a);
                Dc(a)
            } else
                a.Y & 128 && (c >>>= 1),
                c = c / (1 + (a.Y & 31)) | 0,
                b && c && a.rd(b, c)
    }
}
function Dc(a) {
    a.Da || Oc(a);
    if (a.Ka)
        a.Id = [];
    else if (a.Ea && a.mc)
        if (!a.Ub || a.bb & 32)
            a.Id = [],
            a.v.send("screen-clear");
        else {
            var b = a.Ac
              , c = a.Sb;
            a.Ta & 64 && (c >>>= 1);
            var d = a.zc >> 5 & 3
              , e = Kc(a, b + d);
            b = e / a.Ea | 0;
            var g = e % a.Ea + c;
            e = Pc(a, 1 + a.C);
            e = Math.min(e, a.Pd);
            var f = a.Pd - e;
            a.Id = [];
            g = -g;
            for (var h = 0; g < a.mc; g += a.Ea,
            h++)
                a.Id.push({
                    Fb: a.Fb,
                    Bf: g,
                    Cf: 0,
                    De: 0,
                    Ee: b + h,
                    gf: a.Ea,
                    ff: e
                });
            b = 0;
            a.Ta & 32 || (b = Kc(a, d) + c);
            g = -b;
            for (h = 0; g < a.mc; g += a.Ea,
            h++)
                a.Id.push({
                    Fb: a.Fb,
                    Bf: g,
                    Cf: e,
                    De: 0,
                    Ee: h,
                    gf: a.Ea,
                    ff: f
                })
        }
}
function Fc(a) {
    a.j |= 8;
    a.Ac !== a.Ba && (a.Ac = a.Ba,
    Dc(a))
}
n.xd = function() {
    this.v.send("screen-update-cursor-scanline", [this.sc, this.qc])
}
;
n.Li = function(a) {
    if (-1 === this.l)
        this.l = a & 31,
        this.Ub !== (a & 32) && (this.Ub = a & 32,
        Dc(this));
    else {
        if (16 > this.l)
            this.Zb[this.l] = a,
            this.Ta & 64 || Nc(this);
        else
            switch (this.l) {
            case 16:
                if (this.Ta !== a) {
                    var b = this.Ta;
                    this.Ta = a;
                    var c = 0 < (a & 1);
                    this.Ka || this.Da === c || (this.Da = c,
                    this.v.send("screen-set-mode", this.Da));
                    (b ^ a) & 64 && Mc(this);
                    Lc(this);
                    Nc(this)
                }
                break;
            case 18:
                this.Cd !== a && (this.Cd = a,
                Nc(this));
                break;
            case 19:
                this.Sb !== a && (this.Sb = a & 15,
                Dc(this));
                break;
            case 20:
                this.Rc !== a && (this.Rc = a,
                Nc(this))
            }
        this.l = -1
    }
}
;
n.Ag = function() {
    return this.l | this.Ub
}
;
n.Ki = function() {
    return this.Ag() & 255 | this.Bg() << 8 & 65280
}
;
n.Bg = function() {
    if (16 > this.l)
        return this.Zb[this.l] & 255;
    switch (this.l) {
    case 16:
        return this.Ta;
    case 18:
        return this.Cd;
    case 19:
        return this.Sb;
    case 20:
        return this.Rc
    }
    return 255
}
;
n.Mi = function(a) {
    this.$c = a
}
;
n.Oi = function(a) {
    this.Wb = a
}
;
n.Ni = function() {
    return this.Wb
}
;
n.Qi = function(a) {
    switch (this.Wb) {
    case 1:
        var b = this.bb;
        this.bb = a;
        (b ^ a) & 32 && Dc(this);
        break;
    case 2:
        this.Vb = a;
        break;
    case 4:
        this.Xb = a
    }
}
;
n.Pi = function() {
    switch (this.Wb) {
    case 1:
        return this.bb;
    case 2:
        return this.Vb;
    case 4:
        return this.Xb;
    case 6:
        return 18
    }
    return 0
}
;
n.Si = function(a) {
    this.X = a
}
;
n.Ri = function() {
    return this.X
}
;
n.Ui = function(a) {
    this.tb = 3 * a;
    this.pa &= 0
}
;
n.Ti = function() {
    return this.pa
}
;
n.Wi = function(a) {
    this.ba = 3 * a;
    this.pa |= 3
}
;
n.Vi = function() {
    return this.ba / 3 & 255
}
;
n.Yi = function(a) {
    var b = this.ba / 3 | 0
      , c = this.ba % 3
      , d = this.$a[b];
    if (0 === (this.I & 32)) {
        a &= 63;
        const e = a & 1;
        a = a << 2 | e << 1 | e
    }
    d = 0 === c ? d & -16711681 | a << 16 : 1 === c ? d & -65281 | a << 8 : d & -256 | a;
    this.$a[b] !== d && (this.$a[b] = d,
    Nc(this));
    this.ba++
}
;
n.Xi = function() {
    var a = this.$a[this.tb / 3 | 0] >> 8 * (2 - this.tb % 3) & 255;
    this.tb++;
    return this.I & 32 ? a : a >> 2
}
;
n.Zi = function() {
    return this.$c
}
;
n.aj = function(a) {
    this.Pb = a
}
;
n.$i = function() {
    return this.Pb
}
;
n.cj = function(a) {
    switch (this.Pb) {
    case 0:
        this.Ob = a;
        break;
    case 1:
        this.wc = a;
        break;
    case 2:
        this.T = a;
        break;
    case 3:
        this.Ra = a;
        break;
    case 4:
        this.xc = a;
        break;
    case 5:
        var b = this.kc;
        this.kc = a;
        (b ^ a) & 96 && Mc(this);
        break;
    case 6:
        this.Qa !== a && (this.Qa = a,
        Lc(this));
        break;
    case 7:
        this.V = a;
        break;
    case 8:
        this.vc = a
    }
}
;
n.bj = function() {
    switch (this.Pb) {
    case 0:
        return this.Ob;
    case 1:
        return this.wc;
    case 2:
        return this.T;
    case 3:
        return this.Ra;
    case 4:
        return this.xc;
    case 5:
        return this.kc;
    case 6:
        return this.Qa;
    case 7:
        return this.V;
    case 8:
        return this.vc
    }
    return 0
}
;
n.ej = function(a) {
    this.F = a
}
;
n.dj = function() {
    return this.F
}
;
n.fj = function(a) {
    switch (this.F) {
    case 1:
        this.Rb !== a && (this.Rb = a,
        Lc(this));
        break;
    case 2:
        this.Qb !== a && (this.Qb = a,
        Lc(this));
        break;
    case 7:
        var b = this.i;
        this.i &= 255;
        this.i = this.i | a << 3 & 512 | a << 7 & 256;
        b != this.i && Lc(this);
        this.C = this.C & 767 | a << 4 & 256;
        b = this.g;
        this.g = this.g & 767 | a << 5 & 256;
        b !== this.g && Lc(this);
        Dc(this);
        break;
    case 8:
        this.zc = a;
        Dc(this);
        break;
    case 9:
        this.Y = a;
        this.C = this.C & 511 | a << 3 & 512;
        b = this.g;
        this.g = this.g & 511 | a << 4 & 512;
        b !== this.g && Lc(this);
        Dc(this);
        break;
    case 10:
        this.sc = a;
        this.xd();
        break;
    case 11:
        this.qc = a;
        this.xd();
        break;
    case 12:
        (this.Ba >> 8 & 255) !== a && (this.Ba = this.Ba & 255 | a << 8,
        Dc(this),
        ~this.Fa & 3 && Mc(this));
        break;
    case 13:
        (this.Ba & 255) !== a && (this.Ba = this.Ba & 65280 | a,
        Dc(this),
        ~this.Fa & 3 && Mc(this));
        break;
    case 14:
        this.D = this.D & 255 | a << 8;
        this.wd();
        break;
    case 15:
        this.D = this.D & 65280 | a;
        this.wd();
        break;
    case 18:
        (this.i & 255) !== a && (this.i = this.i & 768 | a,
        Lc(this));
        break;
    case 19:
        this.O !== a && (this.O = a,
        Lc(this),
        ~this.Fa & 3 && Mc(this));
        break;
    case 20:
        this.P !== a && (b = this.P,
        this.P = a,
        Lc(this),
        (b ^ a) & 64 && Mc(this));
        break;
    case 21:
        (this.g & 255) !== a && (this.g = this.g & 768 | a,
        Lc(this));
        break;
    case 23:
        this.Fa !== a && (b = this.Fa,
        this.Fa = a,
        Lc(this),
        (b ^ a) & 67 && Mc(this));
        break;
    case 24:
        this.C = this.C & 768 | a;
        Dc(this);
        break;
    default:
        this.F < this.cb.length && (this.cb[this.F] = a)
    }
}
;
n.Cg = function() {
    switch (this.F) {
    case 1:
        return this.Rb;
    case 2:
        return this.Qb;
    case 7:
        return this.i >> 7 & 2 | this.g >> 5 & 8 | this.C >> 4 & 16 | this.i >> 3 & 64;
    case 8:
        return this.zc;
    case 9:
        return this.Y;
    case 10:
        return this.sc;
    case 11:
        return this.qc;
    case 12:
        return this.Ba & 255;
    case 13:
        return this.Ba >> 8;
    case 14:
        return this.D >> 8;
    case 15:
        return this.D & 255;
    case 18:
        return this.i & 255;
    case 19:
        return this.O;
    case 20:
        return this.P;
    case 21:
        return this.g & 255;
    case 23:
        return this.Fa;
    case 24:
        return this.C & 255
    }
    return this.F < this.cb.length ? this.cb[this.F] : 0
}
;
n.Dg = function() {
    var a = this.j;
    this.Da ? (this.j ^= 1,
    this.j &= 1) : (this.j & 1 && (this.j ^= 8),
    this.j ^= 1);
    this.l = -1;
    return a
}
;
n.ai = function(a) {
    this.ub = a
}
;
n.ci = function(a) {
    switch (this.ub) {
    case 0:
        45248 <= a && 45253 >= a && (this.ie = a);
        break;
    case 1:
        this.Oa = a;
        2560 < this.Oa && (this.Oa = 2560);
        break;
    case 2:
        this.Za = a;
        1600 < this.Za && (this.Za = 1600);
        break;
    case 3:
        this.Mb = a;
        break;
    case 4:
        this.Ka = 1 === (a & 1);
        this.I = a;
        break;
    case 5:
        this.Sa = a << 16;
        break;
    case 9:
        a *= this.Oa,
        this.ud !== a && (this.ud = a,
        Nc(this))
    }
    !this.Ka || this.Oa && this.Za || (this.Ka = !1);
    this.Ka && 4 === this.ub && (this.qd(this.Oa, this.Za, this.Mb, this.Oa, this.Za),
    this.v.send("screen-set-mode", !0),
    this.uc = this.Da = !0);
    this.Ka || (this.Sa = 0);
    Dc(this)
}
;
n.bi = function() {
    return Qc(this, this.ub)
}
;
function Qc(a, b) {
    switch (b) {
    case 0:
        return a.ie;
    case 1:
        return a.I & 2 ? 2560 : a.Oa;
    case 2:
        return a.I & 2 ? 1600 : a.Za;
    case 3:
        return a.I & 2 ? 32 : a.Mb;
    case 4:
        return a.I;
    case 5:
        return a.Sa >>> 16;
    case 6:
        return a.mc ? a.mc : 1;
    case 8:
        return 0;
    case 10:
        return a.ha / 65536 | 0
    }
    return 255
}
;function Rc(a, b) {
    this.s = a;
    this.v = b;
    this.yd = this.tc = !1;
    this.ge = !0;
    this.dd = this.Ib = this.Hb = 0;
    this.pa = !0;
    this.P = this.O = this.F = this.L = this.T = this.I = this.ae = !1;
    this.ja = new Ab(1024);
    this.l = 0;
    this.Jc = 100;
    this.j = this.i = 0;
    this.C = !1;
    this.Nb = 0;
    this.Md = 4;
    this.B = !1;
    this.g = new Ab(1024);
    this.D = this.o = !1;
    this.v.register("keyboard-code", function(c) {
        this.ae && (this.ja.push(c),
        this.Aa())
    }, this);
    this.v.register("mouse-click", function(c) {
        this.ge && this.yd && (this.dd = c[0] | c[2] << 1 | c[1] << 2,
        this.tc && Sc(this, 0, 0))
    }, this);
    this.v.register("mouse-delta", function(c) {
        var d = c[1];
        if (this.ge && this.yd) {
            var e = this.Md * this.Jc / 80;
            this.Hb += c[0] * e;
            this.Ib += d * e;
            this.tc && (c = this.Hb | 0,
            d = this.Ib | 0,
            c || d) && (this.Hb -= c,
            this.Ib -= d,
            Sc(this, c, d))
        }
    }, this);
    this.v.register("mouse-wheel", function(c) {
        this.Nb -= c[0];
        this.Nb -= 2 * c[1];
        this.Nb = Math.min(7, Math.max(-8, this.Nb));
        Sc(this, 0, 0)
    }, this);
    this.h = 5;
    this.ba = 0;
    this.X = this.V = this.Y = !1;
    K(a.A, 96, this, this.tj);
    K(a.A, 100, this, this.vj);
    L(a.A, 96, this, this.uj);
    L(a.A, 100, this, this.wj)
}
n = Rc.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.tc;
    a[1] = this.yd;
    a[2] = this.ge;
    a[3] = this.Hb;
    a[4] = this.Ib;
    a[5] = this.dd;
    a[6] = this.pa;
    a[7] = this.ae;
    a[8] = this.I;
    a[9] = this.T;
    a[10] = this.L;
    a[11] = this.F;
    a[12] = this.O;
    a[13] = this.P;
    a[15] = this.l;
    a[16] = this.Jc;
    a[17] = this.Md;
    a[18] = this.B;
    a[20] = this.h;
    a[21] = this.Y;
    a[22] = this.V;
    a[23] = this.ba;
    a[24] = this.X;
    a[25] = this.j;
    a[26] = this.i;
    a[27] = this.C;
    return a
}
;
n.H = function(a) {
    this.tc = a[0];
    this.yd = a[1];
    this.ge = a[2];
    this.Hb = a[3];
    this.Ib = a[4];
    this.dd = a[5];
    this.pa = a[6];
    this.ae = a[7];
    this.I = a[8];
    this.T = a[9];
    this.L = a[10];
    this.F = a[11];
    this.O = a[12];
    this.P = a[13];
    this.l = a[15];
    this.Jc = a[16];
    this.Md = a[17];
    this.B = a[18];
    this.h = a[20];
    this.Y = a[21];
    this.V = a[22];
    this.ba = a[23];
    this.X = a[24];
    this.j = a[25] || 0;
    this.i = a[26] || 0;
    this.C = a[27] || !1;
    this.D = this.o = !1;
    this.ja.clear();
    this.g.clear();
    this.v.send("mouse-enable", this.yd)
}
;
n.Aa = function() {
    this.o || (this.ja.length ? Tc(this) : this.g.length && Uc(this))
}
;
function Uc(a) {
    a.o = !0;
    a.D = !0;
    a.h & 2 && (Jb(a.s, 12),
    a.s.Ja(12))
}
function Tc(a) {
    a.o = !0;
    a.D = !1;
    a.h & 1 && (Jb(a.s, 1),
    a.s.Ja(1))
}
function Sc(a, b, c) {
    a.g.push((0 > c) << 5 | (0 > b) << 4 | 8 | a.dd);
    a.g.push(b);
    a.g.push(c);
    4 === a.j ? (a.g.push(0 | a.Nb & 15),
    a.Nb = 0) : 3 === a.j && (a.g.push(a.Nb & 255),
    a.Nb = 0);
    a.Aa()
}
n.tj = function() {
    this.o = !1;
    if (!this.ja.length && !this.g.length)
        return this.l;
    this.D ? (Jb(this.s, 12),
    this.l = this.g.shift()) : (Jb(this.s, 1),
    this.l = this.ja.shift());
    (this.ja.length || this.g.length) && this.Aa();
    return this.l
}
;
n.vj = function() {
    var a = 16;
    this.o && (a |= 1);
    this.D && (a |= 32);
    return a
}
;
n.uj = function(a) {
    if (this.V)
        this.h = a,
        this.V = !1;
    else if (this.Y)
        this.Y = !1,
        this.g.clear(),
        this.g.push(a),
        Uc(this);
    else if (this.T) {
        this.T = !1;
        this.g.clear();
        this.g.push(250);
        this.Jc = a;
        switch (this.i) {
        case -1:
            60 === a ? (this.C = !0,
            this.i = 0) : (this.C = !1,
            this.i = 200 === a ? 1 : 0);
            break;
        case 0:
            200 === a && (this.i = 1);
            break;
        case 1:
            this.i = 100 === a ? 2 : 200 === a ? 3 : 0;
            break;
        case 2:
            80 === a && (this.j = 3);
            this.i = -1;
            break;
        case 3:
            80 === a && (this.j = 4),
            this.i = -1
        }
        this.Jc || (this.Jc = 100);
        Uc(this)
    } else if (this.P)
        this.P = !1,
        this.g.clear(),
        this.g.push(250),
        this.Md = 3 < a ? 4 : 1 << a,
        Uc(this);
    else if (this.L)
        this.L = !1,
        this.ja.push(250),
        Tc(this);
    else if (this.F)
        this.F = !1,
        this.ja.push(250),
        Tc(this),
        a || this.ja.push(2);
    else if (this.O)
        this.O = !1,
        this.ja.push(250),
        Tc(this);
    else if (this.I) {
        if (this.I = !1,
        this.ge) {
            this.ja.clear();
            this.g.clear();
            this.g.push(250);
            switch (a) {
            case 230:
                this.B = !1;
                break;
            case 231:
                this.B = !0;
                break;
            case 232:
                this.P = !0;
                break;
            case 233:
                Sc(this, 0, 0);
                break;
            case 235:
                Sc(this, 0, 0);
                break;
            case 242:
                this.g.push(this.j);
                this.dd = this.Hb = this.Ib = 0;
                this.Aa();
                break;
            case 243:
                this.T = !0;
                break;
            case 244:
                this.yd = this.tc = !0;
                this.v.send("mouse-enable", !0);
                this.dd = this.Hb = this.Ib = 0;
                break;
            case 245:
                this.tc = !1;
                break;
            case 246:
                this.tc = !1;
                this.Jc = 100;
                this.B = !1;
                this.Md = 4;
                break;
            case 255:
                this.g.push(170),
                this.g.push(0),
                this.yd = !0,
                this.v.send("mouse-enable", !0),
                this.tc = !1,
                this.Jc = 100,
                this.B = !1,
                this.Md = 4,
                this.C || (this.j = 0),
                this.dd = this.Hb = this.Ib = 0
            }
            Uc(this)
        }
    } else if (this.X)
        this.X = !1,
        this.ba = a;
    else {
        this.g.clear();
        this.ja.clear();
        this.ja.push(250);
        switch (a) {
        case 237:
            this.L = !0;
            break;
        case 240:
            this.F = !0;
            break;
        case 242:
            this.ja.push(171);
            this.ja.push(83);
            break;
        case 243:
            this.O = !0;
            break;
        case 244:
            this.ae = !0;
            break;
        case 245:
            this.ae = !1;
            break;
        case 255:
            this.ja.clear(),
            this.ja.push(250),
            this.ja.push(170),
            this.ja.push(0)
        }
        Tc(this)
    }
}
;
n.wj = function(a) {
    switch (a) {
    case 32:
        this.ja.clear();
        this.g.clear();
        this.ja.push(this.h);
        Tc(this);
        break;
    case 96:
        this.V = !0;
        break;
    case 209:
        this.X = !0;
        break;
    case 211:
        this.Y = !0;
        break;
    case 212:
        this.I = !0;
        break;
    case 167:
        this.h |= 32;
        break;
    case 168:
        this.h &= -33;
        break;
    case 169:
        this.ja.clear();
        this.g.clear();
        this.ja.push(0);
        Tc(this);
        break;
    case 170:
        this.ja.clear();
        this.g.clear();
        this.ja.push(85);
        Tc(this);
        break;
    case 171:
        this.ja.clear();
        this.g.clear();
        this.ja.push(0);
        Tc(this);
        break;
    case 173:
        this.h |= 16;
        break;
    case 174:
        this.h &= -17;
        break;
    case 254:
        lc(this.s)
    }
}
;
function Vc(a, b) {
    this.h = this.g = this.R = this.C = this.l = 0;
    this.i = -1;
    this.ka = b;
    this.D = void 0 === this.ka;
    this.la = void 0;
    this.name = this.D ? "master" : "slave ";
    this.F = !1;
    this.I = this.state = 0;
    this.o = 1;
    this.B = this.L = 0;
    this.s = a;
    this.D ? (this.la = new Vc(this.s,this),
    this.j = function() {
        if (0 <= this.i)
            pb(this.s);
        else {
            var c = this.g & this.l;
            if (c) {
                c &= -c;
                var d = this.L ? this.l : -1;
                this.R && (this.R & -this.R & d) <= c || (this.i = rb(c),
                pb(this.s))
            }
        }
    }
    ,
    this.Td = function() {
        if (-1 !== this.i)
            if (0 === this.g)
                this.i = -1;
            else {
                var c = 1 << this.i;
                0 === (this.B & c) && (this.g &= ~c);
                this.o || (this.R |= c);
                2 === this.i ? this.la.Td() : this.s.C(this.C | this.i);
                this.i = -1;
                this.j()
            }
    }
    ) : (this.j = function() {
        if (0 <= this.i)
            pb(this.s);
        else {
            var c = this.g & this.l;
            if (c) {
                c &= -c;
                var d = this.L ? this.l : -1;
                this.R && (this.R & -this.R & d) <= c || (this.i = rb(c),
                this.ka.Rd(2))
            }
        }
    }
    ,
    this.Td = function() {
        if (-1 !== this.i)
            if (0 === this.g)
                this.i = -1,
                this.ka.h &= -5,
                this.s.C(this.C | 7);
            else {
                var c = 1 << this.i;
                0 === (this.B & c) && (this.g &= ~c);
                this.o || (this.R |= c);
                this.ka.h &= -5;
                this.s.C(this.C | this.i);
                this.i = -1;
                this.j()
            }
    }
    );
    this.D ? (a = 32,
    b = 1232) : (a = 160,
    b = 1233);
    L(this.s.A, a, this, this.ei);
    K(this.s.A, a, this, this.di);
    L(this.s.A, a | 1, this, this.gi);
    K(this.s.A, a | 1, this, this.fi);
    L(this.s.A, b, this, this.sj);
    K(this.s.A, b, this, this.rj);
    this.D ? (this.Rd = function(c) {
        8 <= c ? this.la.Rd(c - 8) : (c = 1 << c,
        0 === (this.h & c) && (this.g |= c,
        this.h |= c,
        this.j()))
    }
    ,
    this.Ud = function(c) {
        8 <= c ? this.la.Ud(c - 8) : (c = 1 << c,
        this.h & c && (this.h &= ~c,
        this.g &= ~c,
        this.j()))
    }
    ) : (this.Rd = function(c) {
        c = 1 << c;
        0 === (this.h & c) && (this.g |= c,
        this.h |= c,
        this.j())
    }
    ,
    this.Ud = function(c) {
        c = 1 << c;
        this.h & c && (this.h &= ~c,
        this.g &= ~c,
        this.j())
    }
    )
}
n = Vc.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.l;
    a[1] = this.C;
    a[2] = this.R;
    a[3] = this.g;
    a[4] = this.D;
    a[5] = this.la;
    a[6] = this.F;
    a[7] = this.state;
    a[8] = this.I;
    a[9] = this.o;
    a[10] = this.B;
    return a
}
;
n.H = function(a) {
    this.l = a[0];
    this.C = a[1];
    this.R = a[2];
    this.g = a[3];
    this.D = a[4];
    this.la && this.la.H(a[5]);
    this.F = a[6];
    this.state = a[7];
    this.I = a[8];
    this.o = a[9];
    this.B = a[10]
}
;
n.ei = function(a) {
    if (a & 16)
        this.h = this.l = this.g = this.R = 0,
        this.o = 1,
        this.i = -1,
        this.F = a & 1,
        this.state = 1;
    else if (a & 8)
        a & 2 && (this.I = a & 1),
        a & 64 && (this.L = 32 === (a & 32));
    else {
        var b = a >> 5;
        1 === b ? this.R &= this.R - 1 : 3 === b ? this.R &= ~(1 << (a & 7)) : 192 !== (a & 200) && (this.R &= this.R - 1);
        this.j()
    }
}
;
n.di = function() {
    return this.I ? this.R : this.g
}
;
n.gi = function(a) {
    0 === this.state ? this.F ? (this.F = !1,
    this.o = a & 2) : (this.l = ~a,
    this.j()) : 1 === this.state ? (this.C = a,
    this.state++) : 2 === this.state && (this.state = 0)
}
;
n.fi = function() {
    return ~this.l & 255
}
;
n.rj = function() {
    return this.B
}
;
n.sj = function(a) {
    this.B = a
}
;
function Wc(a) {
    this.s = a;
    this.Qc = 0;
    this.W = new Uint8Array(128);
    this.D = this.g = Date.now();
    this.l = this.j = 0;
    this.B = !1;
    this.C = .9765625;
    this.o = 38;
    this.h = 2;
    this.tf = this.i = 0;
    L(a.A, 112, this, function(b) {
        this.Qc = b & 127;
        this.tf = b >> 7
    });
    L(a.A, 113, this, this.mh);
    K(a.A, 113, this, this.lh)
}
n = Wc.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.Qc;
    a[1] = this.W;
    a[2] = this.g;
    a[3] = this.D;
    a[4] = this.j;
    a[5] = this.l;
    a[6] = this.B;
    a[7] = this.C;
    a[8] = this.o;
    a[9] = this.h;
    a[10] = this.i;
    a[11] = this.tf;
    return a
}
;
n.H = function(a) {
    this.Qc = a[0];
    this.W = a[1];
    this.g = a[2];
    this.D = a[3];
    this.j = a[4];
    this.l = a[5];
    this.B = a[6];
    this.C = a[7];
    this.o = a[8];
    this.h = a[9];
    this.i = a[10];
    this.tf = a[11]
}
;
n.sb = function(a) {
    a = Date.now();
    this.g += a - this.D;
    this.D = a;
    this.B && this.j < a ? (this.s.Ja(8),
    this.i |= 192,
    this.j += this.C * Math.ceil((a - this.j) / this.C)) : this.l && this.l < a && (this.s.Ja(8),
    this.i |= 160,
    this.l = 0);
    let b = 100;
    this.B && this.j && (b = Math.min(b, Math.max(0, this.j - a)));
    this.l && (b = Math.min(b, Math.max(0, this.l - a)));
    return b
}
;
function Xc(a, b) {
    if (a.h & 4)
        a = b;
    else {
        a = b;
        for (var c = b = 0, d; a; )
            d = a % 10,
            c |= d << 4 * b,
            b++,
            a = (a - d) / 10;
        a = c
    }
    return a
}
function Yc(a, b) {
    var c;
    a.h & 4 ? c = b : c = (b & 15) + 10 * (b >> 4 & 15);
    return c
}
n.lh = function() {
    switch (this.Qc) {
    case 0:
        return Xc(this, (new Date(this.g)).getUTCSeconds());
    case 2:
        return Xc(this, (new Date(this.g)).getUTCMinutes());
    case 4:
        return Xc(this, (new Date(this.g)).getUTCHours());
    case 7:
        return Xc(this, (new Date(this.g)).getUTCDate());
    case 8:
        return Xc(this, (new Date(this.g)).getUTCMonth() + 1);
    case 9:
        return Xc(this, (new Date(this.g)).getUTCFullYear() % 100);
    case 10:
        return 999 <= nb() % 1E3 ? this.o | 128 : this.o;
    case 11:
        return this.h;
    case 12:
        Jb(this.s, 8);
        var a = this.i;
        this.i &= -241;
        return a;
    case 13:
        return 0;
    case 50:
        return Xc(this, (new Date(this.g)).getUTCFullYear() / 100 | 0);
    default:
        return this.W[this.Qc]
    }
}
;
n.mh = function(a) {
    switch (this.Qc) {
    case 10:
        this.o = a & 127;
        this.C = 1E3 / (32768 >> (this.o & 15) - 1);
        break;
    case 11:
        this.h = a;
        this.h & 64 && (this.j = Date.now());
        if (this.h & 32) {
            a = new Date;
            const b = Yc(this, this.W[1])
              , c = Yc(this, this.W[3])
              , d = Yc(this, this.W[5]);
            this.l = +new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), d, c, b))
        }
        break;
    case 1:
    case 3:
    case 5:
        this.W[this.Qc] = a
    }
    this.B = 64 === (this.h & 64) && 0 < (this.o & 15)
}
;
function Zc(a, b, c) {
    this.v = c;
    this.s = a;
    this.g = 4;
    this.Bc = this.nc = 0;
    this.cd = 96;
    this.ec = this.ce = 0;
    this.fc = 1;
    this.ca = this.$e = this.rf = this.Re = 0;
    this.input = new Ab(4096);
    switch (b) {
    case 1016:
        this.h = 0;
        this.ca = 4;
        break;
    case 760:
        this.h = 1;
        this.ca = 3;
        break;
    case 1E3:
        this.h = 2;
        this.ca = 4;
        break;
    case 744:
        this.ca = this.h = 3;
        break;
    default:
        this.h = 0,
        this.ca = 4
    }
    this.v.register("serial" + this.h + "-input", function(d) {
        this.input.push(d);
        this.cd |= 1;
        this.ce & 1 ? $c(this, 12) : $c(this, 4)
    }, this);
    a = a.A;
    L(a, b, this, function(d) {
        ad(this, d)
    }, function(d) {
        ad(this, d & 255);
        ad(this, d >> 8)
    });
    L(a, b | 1, this, function(d) {
        this.Bc & 128 ? this.nc = this.nc & 255 | d << 8 : (0 === (this.ec & 2) && d & 2 && $c(this, 2),
        this.ec = d & 15,
        bd(this))
    });
    K(a, b, this, function() {
        if (this.Bc & 128)
            return this.nc & 255;
        var d = this.input.shift();
        0 === this.input.length && (this.cd &= -2,
        cd(this, 12),
        cd(this, 4));
        return d
    });
    K(a, b | 1, this, function() {
        return this.Bc & 128 ? this.nc >> 8 : this.ec & 15
    });
    K(a, b | 2, this, function() {
        var d = this.fc & 15;
        2 == this.fc && cd(this, 2);
        this.ce & 1 && (d |= 192);
        return d
    });
    L(a, b | 2, this, function(d) {
        this.ce = d
    });
    K(a, b | 3, this, function() {
        return this.Bc
    });
    L(a, b | 3, this, function(d) {
        this.Bc = d
    });
    K(a, b | 4, this, function() {
        return this.Re
    });
    L(a, b | 4, this, function(d) {
        this.Re = d
    });
    K(a, b | 5, this, function() {
        return this.cd
    });
    L(a, b | 5, this, function() {});
    K(a, b | 6, this, function() {
        return this.rf
    });
    L(a, b | 6, this, function() {});
    K(a, b | 7, this, function() {
        return this.$e
    });
    L(a, b | 7, this, function(d) {
        this.$e = d
    })
}
Zc.prototype.$ = function() {
    var a = [];
    a[0] = this.g;
    a[1] = this.nc;
    a[2] = this.Bc;
    a[3] = this.cd;
    a[4] = this.ce;
    a[5] = this.ec;
    a[6] = this.fc;
    a[7] = this.Re;
    a[8] = this.rf;
    a[9] = this.$e;
    a[10] = this.ca;
    return a
}
;
Zc.prototype.H = function(a) {
    this.g = a[0];
    this.nc = a[1];
    this.Bc = a[2];
    this.cd = a[3];
    this.ce = a[4];
    this.ec = a[5];
    this.fc = a[6];
    this.Re = a[7];
    this.rf = a[8];
    this.$e = a[9];
    this.ca = a[10]
}
;
function bd(a) {
    a.g & 4096 && a.ec & 1 ? (a.fc = 12,
    a.s.Ja(a.ca)) : a.g & 16 && a.ec & 1 ? (a.fc = 4,
    a.s.Ja(a.ca)) : a.g & 4 && a.ec & 2 ? (a.fc = 2,
    a.s.Ja(a.ca)) : a.g & 1 && a.ec & 8 ? (a.fc = 0,
    a.s.Ja(a.ca)) : (a.fc = 1,
    Jb(a.s, a.ca))
}
function $c(a, b) {
    a.g |= 1 << b;
    bd(a)
}
function cd(a, b) {
    a.g &= ~(1 << b);
    bd(a)
}
function ad(a, b) {
    a.Bc & 128 ? a.nc = a.nc & -256 | b : ($c(a, 2),
    255 !== b && a.v.send("serial" + a.h + "-output-char", String.fromCharCode(b)))
}
;function dd(a) {
    this.s = a;
    var b = a.A;
    Tb(a.u.Ha, {
        Ia: 56,
        K: [134, 128, 19, 113, 7, 0, 128, 2, 8, 0, 128, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0],
        ib: [],
        name: "acpi"
    });
    this.g = this.h = 0;
    this.status = 1;
    this.le = this.kd = 0;
    this.i = ed(this, nb());
    this.Eb = new Uint8Array(4);
    K(b, 45056, this, void 0, function() {
        return this.kd
    });
    L(b, 45056, this, void 0, function(c) {
        this.kd &= ~c
    });
    K(b, 45058, this, void 0, function() {
        return this.le
    });
    L(b, 45058, this, void 0, function(c) {
        this.le = c
    });
    K(b, 45060, this, void 0, function() {
        return this.status
    });
    L(b, 45060, this, void 0, function(c) {
        this.status = c
    });
    K(b, 45064, this, void 0, void 0, function() {
        return ed(this, nb()) & 16777215
    });
    K(b, 45024, this, function() {
        return this.Eb[0]
    });
    K(b, 45025, this, function() {
        return this.Eb[1]
    });
    K(b, 45026, this, function() {
        return this.Eb[2]
    });
    K(b, 45027, this, function() {
        return this.Eb[3]
    });
    L(b, 45024, this, function(c) {
        this.Eb[0] = c
    });
    L(b, 45025, this, function(c) {
        this.Eb[1] = c
    });
    L(b, 45026, this, function(c) {
        this.Eb[2] = c
    });
    L(b, 45027, this, function(c) {
        this.Eb[3] = c
    })
}
dd.prototype.sb = function(a) {
    a = ed(this, a);
    var b = 0 !== ((a ^ this.i) & 8388608);
    this.le & 1 && b ? (this.kd |= 1,
    this.s.Ja(9)) : Jb(this.s, 9);
    this.i = a;
    return 100
}
;
function ed(a, b) {
    b = Math.round(3579.545 * b);
    b === a.h ? 3579.545 > a.g && a.g++ : a.h + a.g <= b && (a.g = 0,
    a.h = b);
    return a.h + a.g
}
dd.prototype.$ = function() {
    var a = [];
    a[0] = this.status;
    a[1] = this.kd;
    a[2] = this.le;
    a[3] = this.Eb;
    return a
}
;
dd.prototype.H = function(a) {
    this.status = a[0];
    this.kd = a[1];
    this.le = a[2];
    this.Eb = a[3]
}
;
function fd(a) {
    this.s = a;
    this.Y = this.pa = 0;
    this.ba = 1;
    this.g = this.l = 0;
    this.j = nb();
    this.L = this.P = this.O = this.T = this.h = 65536;
    this.F = this.D = this.B = 0;
    this.i = new Int32Array(8);
    this.R = new Int32Array(8);
    this.o = new Int32Array(8);
    this.X = 254;
    this.C = -1;
    this.V = this.error = this.I = 0;
    hb(a.A, 4276092928, 1048576, b=>{
        var c = b & 3;
        return this.oe(b & -4) >> 8 * c & 255
    }
    , ()=>{}
    , b=>this.oe(b), (b,c)=>this.Lc(b, c))
}
n = fd.prototype;
n.oe = function(a) {
    a = a - 4276092928 | 0;
    switch (a) {
    case 32:
        return this.pa;
    case 48:
        return 327700;
    case 128:
        return this.B;
    case 208:
        return this.I;
    case 224:
        return this.C;
    case 240:
        return this.X;
    case 256:
    case 272:
    case 288:
    case 304:
    case 320:
    case 336:
    case 352:
    case 368:
        return this.R[a - 256 >> 4];
    case 384:
    case 400:
    case 416:
    case 432:
    case 448:
    case 464:
    case 480:
    case 496:
        return this.o[a - 384 >> 4];
    case 512:
    case 528:
    case 544:
    case 560:
    case 576:
    case 592:
    case 608:
    case 624:
        return this.i[a - 512 >> 4];
    case 640:
        return this.V;
    case 768:
        return this.D;
    case 784:
        return this.F;
    case 800:
        return this.h;
    case 832:
        return this.T;
    case 848:
        return this.O;
    case 864:
        return this.P;
    case 880:
        return this.L;
    case 992:
        return this.Y;
    case 896:
        return this.l;
    case 912:
        return this.g;
    default:
        return 0
    }
}
;
n.Lc = function(a, b) {
    switch (a - 4276092928 | 0) {
    case 128:
        this.B = b & 255;
        gd(this);
        break;
    case 176:
        b = hd(this.R);
        if (-1 !== b) {
            id(this.R, b);
            if (this.o[b >> 5] >> (b & 31) & 1) {
                a = this.s.u.yc;
                for (var c = 0; 24 > c; c++) {
                    var d = a.g[c];
                    (d & 255) === b && d & 16384 && (a.g[c] &= -16385,
                    jd(a, c))
                }
            }
            gd(this)
        }
        break;
    case 208:
        this.I = b & 4278190080;
        break;
    case 224:
        this.C = b | 16777215;
        break;
    case 240:
        this.X = b;
        break;
    case 640:
        this.V = this.error;
        this.error = 0;
        break;
    case 768:
        a = b & 255;
        c = b >> 8 & 7;
        d = b >> 15 & 1;
        var e = b >> 18 & 3;
        this.D = b & -4097;
        0 === e ? kd(this, a, c, d) : 1 === e ? kd(this, a, 0, d) : 2 === e && kd(this, a, c, d);
        break;
    case 784:
        this.F = b;
        break;
    case 800:
        this.h = b;
        break;
    case 832:
        this.T = b;
        break;
    case 848:
        this.O = b;
        break;
    case 864:
        this.P = b;
        break;
    case 880:
        this.L = b;
        break;
    case 992:
        this.Y = b;
        b = b & 3 | (b & 8) >> 1;
        this.ba = 7 === b ? 0 : b + 1;
        break;
    case 896:
        this.l = b >>> 0,
        this.g = b >>> 0,
        this.j = nb()
    }
}
;
n.sb = function(a) {
    if (0 === this.g)
        return 100;
    const b = 1E6 / (1 << this.ba);
    a = (a - this.j) * b >>> 0;
    this.j += a / b;
    this.g -= a;
    0 >= this.g && (a = this.h & 393216,
    131072 === a ? (this.g %= this.l,
    0 >= this.g && (this.g += this.l),
    0 === (this.h & 65536) && kd(this, this.h & 255, 0, !1)) : 0 === a && (this.g = 0,
    0 === (this.h & 65536) && kd(this, this.h & 255, 0, !1)));
    return Math.max(0, this.g / b)
}
;
function kd(a, b, c, d) {
    5 === c || 4 === c || a.i[b >> 5] >> (b & 31) & 1 || (ld(a.i, b),
    d ? ld(a.o, b) : id(a.o, b),
    gd(a))
}
function gd(a) {
    var b = hd(a.i);
    -1 !== b && (hd(a.R) >= b || (b & 240) <= (a.B & 240) || pb(a.s))
}
n.Td = function() {
    var a = hd(this.i);
    -1 === a || hd(this.R) >= a || (a & 240) <= (this.B & 240) || (id(this.i, a),
    ld(this.R, a),
    this.s.C(a),
    gd(this))
}
;
n.$ = function() {
    var a = [];
    a[0] = this.pa;
    a[1] = this.Y;
    a[2] = this.ba;
    a[3] = this.l;
    a[4] = this.g;
    a[5] = this.j;
    a[6] = this.h;
    a[7] = this.T;
    a[8] = this.O;
    a[9] = this.P;
    a[10] = this.L;
    a[11] = this.B;
    a[12] = this.D;
    a[13] = this.F;
    a[14] = this.i;
    a[15] = this.R;
    a[16] = this.o;
    a[17] = this.X;
    a[18] = this.C;
    a[19] = this.I;
    a[20] = this.error;
    a[21] = this.V;
    return a
}
;
n.H = function(a) {
    this.pa = a[0];
    this.Y = a[1];
    this.ba = a[2];
    this.l = a[3];
    this.g = a[4];
    this.j = a[5];
    this.h = a[6];
    this.T = a[7];
    this.O = a[8];
    this.P = a[9];
    this.L = a[10];
    this.B = a[11];
    this.D = a[12];
    this.F = a[13];
    this.i = a[14];
    this.R = a[15];
    this.o = a[16];
    this.X = a[17];
    this.C = a[18];
    this.I = a[19];
    this.error = a[20];
    this.V = a[21]
}
;
function ld(a, b) {
    a[b >> 5] |= 1 << (b & 31)
}
function id(a, b) {
    a[b >> 5] &= ~(1 << (b & 31))
}
function hd(a) {
    for (var b = 7; 0 <= b; b--) {
        var c = a[b];
        if (c)
            return sb(c >>> 0) | b << 5
    }
    return -1
}
;function md(a) {
    this.s = a;
    this.g = new Int32Array(24);
    this.o = new Int32Array(24);
    for (var b = 0; b < this.g.length; b++)
        this.g[b] = 65536;
    this.i = this.h = this.l = this.j = 0;
    hb(a.A, 4273995776, 131072, c=>{
        c = c - 4273995776 | 0;
        return 16 <= c && 20 > c ? (c -= 16,
        this.read(this.j) >> 8 * c & 255) : 0
    }
    , ()=>{}
    , c=>{
        c = c - 4273995776 | 0;
        return 0 === c ? this.j : 16 === c ? this.read(this.j) : 0
    }
    , (c,d)=>{
        c = c - 4273995776 | 0;
        0 === c ? this.j = d : 16 === c && this.write(this.j, d)
    }
    )
}
function jd(a, b) {
    var c = 1 << b;
    if (0 !== (a.h & c)) {
        var d = a.g[b];
        if (0 === (d & 65536)) {
            var e = d >> 8 & 7;
            if (0 === (d & 32768))
                a.h &= ~c;
            else if (a.g[b] |= 16384,
            d & 16384)
                return;
            0 !== e && 1 !== e || kd(a.s.u.Mc, d & 255, e, 32768 === (d & 32768));
            a.g[b] &= -4097
        }
    }
}
n = md.prototype;
n.Rd = function(a) {
    if (!(24 <= a)) {
        var b = 1 << a;
        0 === (this.i & b) && (this.i |= b,
        65536 !== (this.g[a] & 98304) && (this.h |= b,
        jd(this, a)))
    }
}
;
n.Ud = function(a) {
    if (!(24 <= a)) {
        var b = 1 << a;
        (this.i & b) === b && (this.i &= ~b,
        this.g[a] & 32768 && (this.h &= ~b))
    }
}
;
n.read = function(a) {
    if (0 === a)
        return this.l << 24;
    if (1 === a)
        return 1507345;
    if (2 === a)
        return this.l << 24;
    if (16 <= a && 64 > a) {
        var b = a - 16 >> 1;
        return a & 1 ? this.o[b] : this.g[b]
    }
    return 0
}
;
n.write = function(a, b) {
    if (0 === a)
        this.l = b >>> 24 & 15;
    else if (1 !== a && 2 !== a && 16 <= a && 64 > a) {
        var c = a - 16 >> 1;
        a & 1 ? this.o[c] = b & 4278190080 : (this.g[c] = b & 110591 | this.g[c] & -110592,
        jd(this, c))
    }
}
;
n.$ = function() {
    var a = [];
    a[0] = this.g;
    a[1] = this.o;
    a[2] = this.j;
    a[3] = this.l;
    a[4] = this.h;
    a[5] = this.i;
    return a
}
;
n.H = function(a) {
    this.g = a[0];
    this.o = a[1];
    this.j = a[2];
    this.l = a[3];
    this.h = a[4];
    this.i = a[5]
}
;
function nd(a) {
    this.message = a
}
nd.prototype = Error();
const od = {
    Uint8Array,
    Int8Array,
    Uint16Array,
    Int16Array,
    Uint32Array,
    Int32Array,
    Float32Array,
    Float64Array
};
function pd(a, b) {
    if ("object" !== typeof a || null === a)
        return a;
    if (a instanceof Array)
        return a.map(e=>pd(e, b));
    a.constructor === Object && console.log(a);
    if (a.BYTES_PER_ELEMENT) {
        var c = new Uint8Array(a.buffer,a.byteOffset,a.length * a.BYTES_PER_ELEMENT);
        return {
            __state_type__: a.constructor.name.replace("bound ", ""),
            buffer_id: b.push(c) - 1
        }
    }
    a = a.$();
    c = [];
    for (var d = 0; d < a.length; d++)
        c[d] = pd(a[d], b);
    return c
}
function qd(a, b) {
    if ("object" !== typeof a || null === a)
        return a;
    if (a instanceof Array) {
        for (let c = 0; c < a.length; c++)
            a[c] = qd(a[c], b);
        return a
    }
    return new od[a.__state_type__](b[a.buffer_id])
}
jb.prototype.qe = function() {
    for (var a = [], b = pd(this, a), c = [], d = 0, e = 0; e < a.length; e++) {
        var g = a[e].byteLength;
        c[e] = {
            offset: d,
            length: g
        };
        d += g;
        d = d + 3 & -4
    }
    e = JSON.stringify({
        buffer_infos: c,
        state: b
    });
    e = (new TextEncoder).encode(e);
    b = 16 + e.length;
    b = b + 3 & -4;
    g = b + d;
    d = new ArrayBuffer(g);
    var f = new Int32Array(d,0,4);
    (new Uint8Array(d,16,e.length)).set(e);
    b = new Uint8Array(d,b);
    f[0] = -2039052682;
    f[1] = 6;
    f[2] = g;
    f[3] = e.length;
    for (e = 0; e < a.length; e++)
        b.set(a[e], c[e].offset);
    return d
}
;
jb.prototype.Nd = function(a) {
    function b(q, t) {
        const m = q.length;
        if (16 > m)
            throw new nd("Invalid length: " + m);
        q = new Int32Array(q.buffer,q.byteOffset,4);
        if (-2039052682 !== q[0])
            throw new nd("Invalid header: " + yb(q[0] >>> 0));
        if (6 !== q[1])
            throw new nd("Version mismatch: dump=" + q[1] + " we=6");
        if (t && q[2] !== m)
            throw new nd("Length doesn't match header: real=" + m + " header=" + q[2]);
        return q[3]
    }
    function c(q) {
        q = (new TextDecoder).decode(q);
        return JSON.parse(q)
    }
    a = new Uint8Array(a);
    if (4247762216 === (new Uint32Array(a.buffer,0,1))[0]) {
        var d = this.Uj(a.length);
        (new Uint8Array(this.Pa.buffer,this.Wj(d),a.length)).set(a);
        var e = this.Ae(d, 16)
          , g = new Uint8Array(this.Pa.buffer,e,16)
          , f = b(g, !1);
        this.Be(e, 16);
        e = this.Ae(d, f);
        g = new Uint8Array(this.Pa.buffer,e,f);
        g = c(g);
        this.Be(e, f);
        e = g.state;
        var h = g.buffer_infos;
        g = [];
        f = 16 + f;
        for (var k of h) {
            h = (f + 3 & -4) - f;
            if (1048576 < k.length) {
                var l = this.Ae(d, h);
                this.Be(l, h);
                l = new Uint8Array(k.length);
                g.push(l.buffer);
                for (var p = 0; p < k.length; ) {
                    const q = Math.min(k.length - p, 1048576)
                      , t = this.Ae(d, q);
                    l.set(new Uint8Array(this.Pa.buffer,t,q), p);
                    this.Be(t, q);
                    p += q
                }
            } else
                l = this.Ae(d, h + k.length),
                p = l + h,
                g.push(this.Pa.buffer.slice(p, p + k.length)),
                this.Be(l, h + k.length);
            f += h + k.length
        }
        e = qd(e, g);
        this.H(e);
        this.Vj(d)
    } else {
        k = b(a, !0);
        if (0 > k || k + 12 >= a.length)
            throw new nd("Invalid info block length: " + k);
        e = c(a.subarray(16, 16 + k));
        d = e.state;
        e = e.buffer_infos;
        let q = 16 + k;
        q = q + 3 & -4;
        k = e.map(t=>{
            const m = q + t.offset;
            return a.buffer.slice(m, m + t.length)
        }
        );
        d = qd(d, k);
        this.H(d)
    }
}
;
function rd(a, b, c) {
    a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && (a[0] = c[0],
    a[1] = c[1],
    a[2] = c[2],
    a[3] = c[3],
    a[4] = c[4],
    a[5] = c[5]);
    a[6] === b[0] && a[7] === b[1] && a[8] === b[2] && a[9] === b[3] && a[10] === b[4] && a[11] === b[5] && (a[6] = c[0],
    a[7] = c[1],
    a[8] = c[2],
    a[9] = c[3],
    a[10] = c[4],
    a[11] = c[5]);
    var d = a[12] << 8 | a[13];
    if (2048 === d) {
        if (a = a.subarray(14),
        4 === a[0] >> 4 && 17 === a[9] && (a = a.subarray(20),
        d = a[2] << 8 | a[3],
        67 === (a[0] << 8 | a[1]) || 67 === d)) {
            const e = a.subarray(8);
            if (1669485411 === (e[236] << 24 | e[237] << 16 | e[238] << 8 | e[239]))
                for (e[28] === b[0] && e[29] === b[1] && e[30] === b[2] && e[31] === b[3] && e[32] === b[4] && e[33] === b[5] && (e[28] = c[0],
                e[29] = c[1],
                e[30] = c[2],
                e[31] = c[3],
                e[32] = c[4],
                e[33] = c[5],
                a[6] = a[7] = 0),
                d = 240; d < e.length; ) {
                    const g = e[d++];
                    if (255 === g)
                        break;
                    const f = e[d++];
                    61 === g && 1 === e[d + 0] && e[d + 1] === b[0] && e[d + 2] === b[1] && e[d + 3] === b[2] && e[d + 4] === b[3] && e[d + 5] === b[4] && e[d + 6] === b[5] && (e[d + 1] = c[0],
                    e[d + 2] = c[1],
                    e[d + 3] = c[2],
                    e[d + 4] = c[3],
                    e[d + 5] = c[4],
                    e[d + 6] = c[5],
                    a[6] = a[7] = 0);
                    d += f
                }
        }
    } else
        2054 === d && (a = a.subarray(14),
        a[8] === b[0] && a[9] === b[1] && a[10] === b[2] && a[11] === b[3] && a[12] === b[4] && a[13] === b[5] && (a[8] = c[0],
        a[9] = c[1],
        a[10] = c[2],
        a[11] = c[3],
        a[12] = c[4],
        a[13] = c[5]))
}
function sd(a, b, c, d) {
    this.s = a;
    this.Ha = a.u.Ha;
    this.vf = c;
    this.Gb = d;
    this.v = b;
    this.v.register("net0-receive", function(e) {
        if (!(this.La & 1) && (this.v.send("eth-receive-end", [e.length]),
        this.Od & 16 || this.Od & 4 && 255 === e[0] && 255 === e[1] && 255 === e[2] && 255 === e[3] && 255 === e[4] && 255 === e[5] || !(this.Od & 8 && 1 === (e[0] & 1) || e[0] !== this.sa[0] || e[1] !== this.sa[1] || e[2] !== this.sa[2] || e[3] !== this.sa[3] || e[4] !== this.sa[4] || e[5] !== this.sa[5]))) {
            this.je && (e = new Uint8Array(e),
            rd(e, this.sa, this.je));
            var g = this.wb << 8
              , f = Math.max(60, e.length) + 4
              , h = g + 4
              , k = this.wb + 1 + (f >> 8);
            if (!((this.pc > this.wb ? this.pc - this.wb : this.Va - this.wb + this.pc - this.Kb) < 1 + (f >> 8) && 0 !== this.pc)) {
                if (g + f > this.Va << 8) {
                    var l = (this.Va << 8) - h;
                    this.memory.set(e.subarray(0, l), h);
                    this.memory.set(e.subarray(l), this.Kb << 8)
                } else
                    this.memory.set(e, h),
                    60 > e.length && this.memory.fill(0, h + e.length, h + 60);
                k >= this.Va && (k += this.Kb - this.Va);
                this.memory[g] = 1;
                this.memory[g + 1] = k;
                this.memory[g + 2] = f;
                this.memory[g + 3] = f >> 8;
                this.wb = k;
                td(this, 1)
            }
        }
    }, this);
    this.port = 768;
    this.name = "ne2k";
    this.K = [236, 16, 41, 128, 3, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, this.port & 255 | 1, this.port >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 184, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.Ia = 40;
    this.ib = [{
        size: 32
    }];
    this.Le = this.R = 0;
    this.La = 1;
    this.bf = this.vd = this.rb = this.Vd = 0;
    this.memory = new Uint8Array(32768);
    this.If = this.Od = 0;
    this.Hf = 1;
    this.sa = new Uint8Array([0, 34, 21, 255 * Math.random() | 0, 255 * Math.random() | 0, 255 * Math.random() | 0]);
    this.je = null;
    for (b = 0; 6 > b; b++)
        this.memory[b << 1] = this.memory[b << 1 | 1] = this.sa[b];
    this.memory[28] = this.memory[29] = 87;
    this.memory[30] = this.memory[31] = 87;
    this.ua = 0;
    this.Kb = 64;
    this.Va = 128;
    this.pc = this.wb = 76;
    b = a.A;
    K(b, this.port | 0, this, function() {
        return this.La
    });
    L(b, this.port | 0, this, function(e) {
        this.La = e;
        this.La & 1 || (e & 24 && 0 === this.rb && td(this, 64),
        e & 4 && (e = this.bf << 8,
        e = this.memory.subarray(e, e + this.vd),
        this.je && (e = new Uint8Array(e),
        rd(e, this.je, this.sa)),
        this.v.send("net0-send", e),
        this.v.send("eth-transmit-end", [e.length]),
        this.La &= -5,
        td(this, 2)))
    });
    K(b, this.port | 13, this, function() {
        return 0
    });
    K(b, this.port | 14, this, function() {
        return 0
    }, function() {
        return 0
    });
    K(b, this.port | 15, this, function() {
        return 0
    });
    K(b, this.port | 31, this, function() {
        td(this, 128);
        return 0
    });
    L(b, this.port | 31, this, function() {});
    K(b, this.port | 1, this, function() {
        var e = S(this);
        return 0 === e ? this.Kb : 1 === e ? this.sa[0] : 2 === e ? this.Kb : 0
    });
    L(b, this.port | 1, this, function(e) {
        var g = S(this);
        0 === g ? this.Kb = e : 1 === g && (this.sa[0] = e)
    });
    K(b, this.port | 2, this, function() {
        var e = S(this);
        return 0 === e ? this.Va : 1 === e ? this.sa[1] : 2 === e ? this.Va : 0
    });
    L(b, this.port | 2, this, function(e) {
        var g = S(this);
        0 === g ? (e > this.memory.length >> 8 && (e = this.memory.length >> 8),
        this.Va = e) : 1 === g && (this.sa[1] = e)
    });
    K(b, this.port | 7, this, function() {
        var e = S(this);
        if (0 === e)
            return this.R;
        if (1 === e)
            return this.wb
    });
    L(b, this.port | 7, this, function(e) {
        var g = S(this);
        0 === g ? (this.R &= ~e,
        ud(this)) : 1 === g && (this.wb = e)
    });
    L(b, this.port | 13, this, function(e) {
        0 === S(this) && (this.If = e)
    });
    L(b, this.port | 14, this, function(e) {
        0 === S(this) && (this.Vd = e)
    });
    K(b, this.port | 10, this, function() {
        return 0 === S(this) ? 80 : 0
    });
    L(b, this.port | 10, this, function(e) {
        0 === S(this) && (this.rb = this.rb & 65280 | e & 255)
    });
    K(b, this.port | 11, this, function() {
        return 0 === S(this) ? 67 : 0
    });
    L(b, this.port | 11, this, function(e) {
        0 === S(this) && (this.rb = this.rb & 255 | e << 8 & 65280)
    });
    K(b, this.port | 8, this, function() {
        if (0 === S(this))
            return this.ua & 255
    });
    L(b, this.port | 8, this, function(e) {
        0 === S(this) && (this.ua = this.ua & 65280 | e & 255)
    });
    K(b, this.port | 9, this, function() {
        if (0 === S(this))
            return this.ua >> 8 & 255
    });
    L(b, this.port | 9, this, function(e) {
        0 === S(this) && (this.ua = this.ua & 255 | e << 8 & 65280)
    });
    L(b, this.port | 15, this, function(e) {
        0 === S(this) && (this.Le = e,
        ud(this))
    });
    K(b, this.port | 3, this, function() {
        var e = S(this);
        return 0 === e ? this.pc : 1 === e ? this.sa[2] : 0
    });
    L(b, this.port | 3, this, function(e) {
        var g = S(this);
        0 === g ? this.pc = e : 1 === g && (this.sa[2] = e)
    });
    K(b, this.port | 4, this, function() {
        var e = S(this);
        return 0 === e ? this.Hf : 1 === e ? this.sa[3] : 0
    });
    L(b, this.port | 4, this, function(e) {
        var g = S(this);
        0 === g ? this.bf = e : 1 === g && (this.sa[3] = e)
    });
    K(b, this.port | 5, this, function() {
        var e = S(this);
        return 0 === e ? 0 : 1 === e ? this.sa[4] : 0
    });
    L(b, this.port | 5, this, function(e) {
        var g = S(this);
        0 === g ? this.vd = this.vd & -256 | e : 1 === g && (this.sa[4] = e)
    });
    K(b, this.port | 6, this, function() {
        var e = S(this);
        return 0 === e ? 0 : 1 === e ? this.sa[5] : 0
    });
    L(b, this.port | 6, this, function(e) {
        var g = S(this);
        0 === g ? this.vd = this.vd & 255 | e << 8 : 1 === g && (this.sa[5] = e)
    });
    K(b, this.port | 12, this, function() {
        return 0 === S(this) ? 9 : 0
    });
    L(b, this.port | 12, this, function(e) {
        0 === S(this) && (this.Od = e)
    });
    K(b, this.port | 16, this, this.ph, this.Tf, this.oh);
    L(b, this.port | 16, this, this.Uf, this.Uf, this.qh);
    Tb(a.u.Ha, this)
}
n = sd.prototype;
n.$ = function() {
    var a = [];
    a[0] = this.R;
    a[1] = this.Le;
    a[2] = this.La;
    a[3] = this.Vd;
    a[4] = this.rb;
    a[5] = this.vd;
    a[6] = this.bf;
    a[7] = this.ua;
    a[8] = this.Kb;
    a[9] = this.wb;
    a[10] = this.pc;
    a[11] = this.Va;
    a[12] = this.Od;
    a[13] = this.If;
    a[14] = this.Hf;
    a[15] = this.sa;
    a[16] = this.memory;
    return a
}
;
n.H = function(a) {
    this.R = a[0];
    this.Le = a[1];
    this.La = a[2];
    this.Vd = a[3];
    this.rb = a[4];
    this.vd = a[5];
    this.bf = a[6];
    this.ua = a[7];
    this.Kb = a[8];
    this.wb = a[9];
    this.pc = a[10];
    this.Va = a[11];
    this.Od = a[12];
    this.If = a[13];
    this.Hf = a[14];
    this.vf ? (this.sa = a[15],
    this.memory = a[16]) : this.Gb && (this.je = a[15],
    this.memory = a[16])
}
;
function td(a, b) {
    a.R |= b;
    ud(a)
}
function ud(a) {
    a.Le & a.R ? a.Ha.Aa(a.Ia) : mc(a.Ha, a.Ia)
}
function vd(a, b) {
    if (16 >= a.ua || 16384 <= a.ua && 32768 > a.ua)
        a.memory[a.ua] = b;
    a.ua++;
    a.rb--;
    a.ua >= a.Va << 8 && (a.ua += a.Kb - a.Va << 8);
    0 === a.rb && td(a, 64)
}
n.Uf = function(a) {
    vd(this, a);
    this.Vd & 1 && vd(this, a >> 8)
}
;
n.qh = function(a) {
    vd(this, a);
    vd(this, a >> 8);
    vd(this, a >> 16);
    vd(this, a >> 24)
}
;
function wd(a) {
    let b = 0;
    32768 > a.ua && (b = a.memory[a.ua]);
    a.ua++;
    a.rb--;
    a.ua >= a.Va << 8 && (a.ua += a.Kb - a.Va << 8);
    0 === a.rb && td(a, 64);
    return b
}
n.ph = function() {
    return this.Tf() & 255
}
;
n.Tf = function() {
    return this.Vd & 1 ? wd(this) | wd(this) << 8 : wd(this)
}
;
n.oh = function() {
    return wd(this) | wd(this) << 8 | wd(this) << 16 | wd(this) << 24
}
;
function S(a) {
    return a.La >> 6 & 3
}
;var xd = new Uint8Array(256)
  , yd = []
  , zd = []
  , Ad = []
  , Bd = new Uint8Array(256)
  , Cd = [];
function Dd(a, b) {
    this.s = a;
    this.v = b;
    this.Ca = new Ab(64);
    this.fa = new Ab(64);
    this.i = this.o = this.lb = this.I = 0;
    this.N = new Uint8Array(256);
    Ed(this);
    this.Fd = !1;
    this.se = 0;
    this.ob = this.nb = this.Uc = this.cc = !1;
    this.xb = [new Bb, new Bb];
    this.eb = a.u.eb;
    this.fb = this.bc = this.j = this.Ab = this.l = this.D = 0;
    this.Bb = 1;
    this.Tc = 5;
    this.zb = !1;
    this.g = new ArrayBuffer(65536);
    this.Y = new Int8Array(this.g);
    this.C = new Uint8Array(this.g);
    this.X = new Int16Array(this.g);
    this.ba = new Uint16Array(this.g);
    this.Qa = new tb(this.g);
    this.Cb = this.B = !1;
    this.Ya = 22050;
    b.send("dac-tell-sampling-rate", this.Ya);
    this.h = 1;
    this.O = 170;
    this.L = 0;
    this.Nc = new Uint8Array(256);
    this.F = new Ab(64);
    this.T = this.P = this.Sa = 0;
    this.Fh = !1;
    this.ca = 5;
    this.Yc = new Uint8Array(16);
    a.A.pd(544, this, this.wg, this.yg, this.hi, this.ji);
    a.A.pd(904, this, this.wg, this.yg);
    a.A.pd(548, this, this.li, this.ni);
    K(a.A, 550, this, this.pi);
    K(a.A, 551, this, this.si);
    K(a.A, 552, this, this.ui);
    K(a.A, 553, this, this.wi);
    K(a.A, 554, this, this.yi);
    K(a.A, 555, this, this.Ai);
    K(a.A, 556, this, this.Ci);
    K(a.A, 557, this, this.Ei);
    a.A.pd(558, this, this.Gi, this.Ii);
    a.A.Lb(544, this, this.xg, this.zg, this.ii, this.ki);
    a.A.Lb(904, this, this.xg, this.zg);
    a.A.Lb(548, this, this.mi, this.oi);
    L(a.A, 550, this, this.ri);
    L(a.A, 551, this, this.ti);
    a.A.Lb(552, this, this.vi, this.xi);
    L(a.A, 554, this, this.zi);
    L(a.A, 555, this, this.Bi);
    L(a.A, 556, this, this.Di);
    L(a.A, 557, this, this.Fi);
    L(a.A, 558, this, this.Hi);
    L(a.A, 559, this, this.Ji);
    a.A.pd(816, this, this.nj, this.pj);
    a.A.Lb(816, this, this.oj, this.qj);
    this.eb.cf.push({
        Je: this.pa,
        Gf: this
    });
    b.register("dac-request-data", function() {
        !this.Ab || this.Cb ? Fd(this) : Gd(this)
    }, this);
    b.register("speaker-has-initialized", function() {
        Ed(this)
    }, this);
    b.send("speaker-confirm-initialized");
    Hd(this)
}
function Hd(a) {
    a.Ca.clear();
    a.fa.clear();
    a.lb = 0;
    a.o = 0;
    a.Fd = !1;
    a.se = 0;
    a.cc = !1;
    a.Uc = !1;
    a.nb = !1;
    a.ob = !1;
    a.xb[0].clear();
    a.xb[1].clear();
    a.D = 0;
    a.l = 0;
    a.Ab = 0;
    a.j = 0;
    a.bc = 0;
    a.fb = 0;
    a.zb = !1;
    a.C.fill(0);
    a.B = !1;
    a.Cb = !1;
    a.O = 170;
    a.L = 0;
    a.Ya = 22050;
    a.h = 1;
    Id(a, 1);
    a.Yc.fill(0);
    a.Nc.fill(0);
    a.Nc[5] = 1;
    a.Nc[9] = 248
}
n = Dd.prototype;
n.$ = function() {
    var a = [];
    a[2] = this.I;
    a[3] = this.lb;
    a[4] = this.o;
    a[5] = this.i;
    a[6] = this.N;
    a[7] = this.Fd;
    a[8] = this.se;
    a[9] = this.cc;
    a[10] = this.Uc;
    a[11] = this.nb;
    a[12] = this.ob;
    a[15] = this.D;
    a[16] = this.l;
    a[17] = this.Ab;
    a[18] = this.j;
    a[19] = this.bc;
    a[20] = this.fb;
    a[21] = this.Bb;
    a[22] = this.Tc;
    a[23] = this.zb;
    a[24] = this.C;
    a[25] = this.B;
    a[26] = this.Cb;
    a[27] = this.Ya;
    a[28] = this.h;
    a[29] = this.O;
    a[30] = this.L;
    a[31] = this.Nc;
    a[33] = this.cb;
    a[34] = this.ca;
    a[35] = this.Yc;
    return a
}
;
n.H = function(a) {
    this.I = a[2];
    this.lb = a[3];
    this.o = a[4];
    this.i = a[5];
    this.N = a[6];
    Jd(this);
    this.Fd = a[7];
    this.se = a[8];
    this.cc = a[9];
    this.Uc = a[10];
    this.nb = a[11];
    this.ob = a[12];
    this.D = a[15];
    this.l = a[16];
    this.Ab = a[17];
    this.j = a[18];
    this.bc = a[19];
    this.fb = a[20];
    this.Bb = a[21];
    this.Tc = a[22];
    this.zb = a[23];
    this.C = a[24];
    this.B = a[25];
    this.Cb = a[26];
    this.Ya = a[27];
    this.h = a[28];
    this.O = a[29];
    this.L = a[30];
    this.Nc = a[31];
    this.cb = a[33];
    this.ca = a[34];
    this.Yc = a[35];
    this.g = this.C.buffer;
    this.Y = new Int8Array(this.g);
    this.X = new Int16Array(this.g);
    this.ba = new Uint16Array(this.g);
    this.Qa = new tb(this.g);
    this.Cb ? this.v.send("dac-disable") : this.v.send("dac-enable")
}
;
n.wg = function() {
    return 255
}
;
n.yg = function() {
    return 255
}
;
n.hi = function() {
    return 255
}
;
n.ji = function() {
    return 255
}
;
n.li = function() {
    return this.i
}
;
n.ni = function() {
    var a = this.i
      , b = zd[a];
    return b ? b.call(this) : this.N[a]
}
;
n.pi = function() {
    return 255
}
;
n.si = function() {
    return 255
}
;
n.ui = function() {
    return 255
}
;
n.wi = function() {
    return 255
}
;
n.yi = function() {
    this.fa.length && (this.I = this.fa.shift());
    return this.I
}
;
n.Ai = function() {
    return 255
}
;
n.Ci = function() {
    return 127
}
;
n.Ei = function() {
    return 255
}
;
n.Gi = function() {
    this.Yc[1] && Id(this, 1);
    return (this.fa.length && !this.cc) << 7 | 127
}
;
n.Ii = function() {
    Id(this, 2);
    return 0
}
;
n.xg = function() {
    this.P = 0
}
;
n.zg = function(a) {
    var b = Cd[this.P];
    b || (b = this.V);
    b.call(this, a, 0, this.P)
}
;
n.ii = function() {
    this.T = 0
}
;
n.ki = function(a) {
    var b = Cd[this.T];
    b || (b = this.V);
    b.call(this, a, 1, this.T)
}
;
n.mi = function(a) {
    this.i = a
}
;
n.oi = function(a) {
    Kd(this, this.i, a)
}
;
n.ri = function(a) {
    this.cc ? this.cc = !1 : a && Hd(this);
    this.fa.clear();
    this.fa.push(170)
}
;
n.ti = function() {}
;
n.vi = function() {}
;
n.xi = function() {}
;
n.zi = function() {}
;
n.Bi = function() {}
;
n.Di = function(a) {
    0 === this.lb ? (this.lb = a,
    this.Ca.clear(),
    this.o = xd[a]) : this.Ca.push(a);
    this.Ca.length >= this.o && (a = yd[this.lb],
    a || (a = this.Yf),
    a.call(this),
    this.o = this.lb = 0,
    this.Ca.clear())
}
;
n.Fi = function() {}
;
n.Hi = function() {}
;
n.Ji = function() {}
;
n.nj = function() {
    this.F.length && (this.Sa = this.F.shift());
    return this.Sa
}
;
n.oj = function() {}
;
n.pj = function() {
    return 0 | 128 * !this.F.length
}
;
n.qj = function(a) {
    255 == a && (this.F.clear(),
    this.F.push(254))
}
;
n.Yf = function() {}
;
function T(a, b, c) {
    c || (c = Dd.prototype.Yf);
    for (var d = 0; d < a.length; d++)
        xd[a[d]] = b,
        yd[a[d]] = c
}
function Ld(a) {
    for (var b = [], c = 0; 16 > c; c++)
        b.push(a + c);
    return b
}
T([14], 2, function() {
    this.Nc[this.Ca.shift()] = this.Ca.shift()
});
T([15], 1, function() {
    this.fa.clear();
    this.fa.push(this.Nc[this.Ca.shift()])
});
T([16], 1, function() {
    var a = this.Ca.shift();
    a = Md(a / 127.5 + -1);
    this.xb[0].push(a);
    this.xb[1].push(a);
    this.v.send("dac-enable")
});
T([20, 21], 2, function() {
    this.bc = 1;
    this.fb = this.Bb;
    this.cc = this.nb = this.ob = this.zb = !1;
    Nd(this);
    Od(this)
});
T([22], 2);
T([23], 2);
T([28], 0, function() {
    this.bc = 1;
    this.fb = this.Bb;
    this.zb = !0;
    this.cc = this.nb = this.ob = !1;
    Od(this)
});
T([31], 0);
T([32], 0, function() {
    this.fa.clear();
    this.fa.push(127)
});
T([36], 2);
T([44], 0);
T([48], 0);
T([49], 0);
T([52], 0);
T([53], 0);
T([54], 0);
T([55], 0);
T([56], 0);
T([64], 1, function() {
    Pd(this, 1E6 / (256 - this.Ca.shift()) / (this.Uc ? 2 : 1))
});
T([65, 66], 2, function() {
    Pd(this, this.Ca.shift() << 8 | this.Ca.shift())
});
T([72], 2, function() {
    Nd(this)
});
T([116], 2);
T([117], 2);
T([118], 2);
T([119], 2);
T([125], 0);
T([127], 0);
T([128], 2);
T([144], 0, function() {
    this.bc = 1;
    this.fb = this.Bb;
    this.zb = !0;
    this.ob = !1;
    this.cc = !0;
    this.nb = !1;
    Od(this)
});
T([145], 0);
T([152], 0);
T([153], 0);
T([160], 0);
T([168], 0);
T(Ld(176), 3, function() {
    if (!(this.lb & 8)) {
        var a = this.Ca.shift();
        this.bc = 2;
        this.fb = this.Tc;
        this.zb = !!(this.lb & 4);
        this.ob = !!(a & 16);
        this.Uc = !!(a & 32);
        this.nb = !0;
        Nd(this);
        Od(this)
    }
});
T(Ld(192), 3, function() {
    if (!(this.lb & 8)) {
        var a = this.Ca.shift();
        this.bc = 1;
        this.fb = this.Bb;
        this.zb = !!(this.lb & 4);
        this.ob = !!(a & 16);
        this.Uc = !!(a & 32);
        this.nb = !1;
        Nd(this);
        Od(this)
    }
});
T([208], 0, function() {
    this.Cb = !0;
    this.v.send("dac-disable")
});
T([209], 0, function() {
    this.Fd = !0
});
T([211], 0, function() {
    this.Fd = !1
});
T([212], 0, function() {
    this.Cb = !1;
    this.v.send("dac-enable")
});
T([213], 0, function() {
    this.Cb = !0;
    this.v.send("dac-disable")
});
T([214], 0, function() {
    this.Cb = !1;
    this.v.send("dac-enable")
});
T([216], 0, function() {
    this.fa.clear();
    this.fa.push(255 * this.Fd)
});
T([217, 218], 0, function() {
    this.zb = !1
});
T([224], 1, function() {
    this.fa.clear();
    this.fa.push(~this.Ca.shift())
});
T([225], 0, function() {
    this.fa.clear();
    this.fa.push(4);
    this.fa.push(5)
});
T([226], 1);
T([227], 0, function() {
    this.fa.clear();
    for (var a = 0; 44 > a; a++)
        this.fa.push("COPYRIGHT (C) CREATIVE TECHNOLOGY LTD, 1992.".charCodeAt(a));
    this.fa.push(0)
});
T([228], 1, function() {
    this.se = this.Ca.shift()
});
T([232], 0, function() {
    this.fa.clear();
    this.fa.push(this.se)
});
T([242, 243], 0, function() {
    this.Aa()
});
var Qd = new Uint8Array(256);
Qd[14] = 255;
Qd[15] = 7;
Qd[55] = 56;
T([249], 1, function() {
    var a = this.Ca.shift();
    this.fa.clear();
    this.fa.push(Qd[a])
});
function Kd(a, b, c) {
    (b = Ad[b]) && b.call(a, c)
}
Dd.prototype.Ra = function() {
    return this.N[this.i]
}
;
Dd.prototype.bb = function(a) {
    this.N[this.i] = a
}
;
function Ed(a) {
    a.N[4] = 204;
    a.N[34] = 204;
    a.N[38] = 204;
    a.N[40] = 0;
    a.N[46] = 0;
    a.N[10] = 0;
    a.N[48] = 192;
    a.N[49] = 192;
    a.N[50] = 192;
    a.N[51] = 192;
    a.N[52] = 192;
    a.N[53] = 192;
    a.N[54] = 0;
    a.N[55] = 0;
    a.N[56] = 0;
    a.N[57] = 0;
    a.N[59] = 0;
    a.N[60] = 31;
    a.N[61] = 21;
    a.N[62] = 11;
    a.N[63] = 0;
    a.N[64] = 0;
    a.N[65] = 0;
    a.N[66] = 0;
    a.N[67] = 0;
    a.N[68] = 128;
    a.N[69] = 128;
    a.N[70] = 128;
    a.N[71] = 128;
    Jd(a)
}
function Jd(a) {
    for (var b = 1; b < a.N.length; b++)
        Bd[b] || Kd(a, b, a.N[b])
}
function Rd(a, b) {
    b || (b = Dd.prototype.Ra);
    zd[a] = b
}
function Sd(a, b) {
    b || (b = Dd.prototype.bb);
    Ad[a] = b
}
function Td(a, b, c) {
    Bd[a] = 1;
    zd[a] = function() {
        return this.N[b] & 240 | this.N[c] >>> 4
    }
    ;
    Ad[a] = function(d) {
        this.N[a] = d;
        var e = d << 4 & 240 | this.N[c] & 15;
        Kd(this, b, d & 240 | this.N[b] & 15);
        Kd(this, c, e)
    }
}
function Ud(a, b, c) {
    zd[a] = Dd.prototype.Ra;
    Ad[a] = function(d) {
        this.N[a] = d;
        this.v.send("mixer-volume", [b, c, (d >>> 2) - 62])
    }
}
Rd(0, function() {
    Ed(this);
    return 0
});
Sd(0);
Td(4, 50, 51);
Td(34, 48, 49);
Td(38, 52, 53);
Td(40, 54, 55);
Td(46, 56, 57);
Ud(48, 0, 0);
Ud(49, 0, 1);
Ud(50, 2, 0);
Ud(51, 2, 1);
Rd(59);
Sd(59, function(a) {
    this.N[59] = a;
    this.v.send("mixer-volume", [1, 2, 6 * (a >>> 6) - 18])
});
Rd(65);
Sd(65, function(a) {
    this.N[65] = a;
    this.v.send("mixer-gain-left", 6 * (a >>> 6))
});
Rd(66);
Sd(66, function(a) {
    this.N[66] = a;
    this.v.send("mixer-gain-right", 6 * (a >>> 6))
});
Rd(68);
Sd(68, function(a) {
    this.N[68] = a;
    a >>>= 3;
    this.v.send("mixer-treble-left", a - (16 > a ? 14 : 16))
});
Rd(69);
Sd(69, function(a) {
    this.N[69] = a;
    a >>>= 3;
    this.v.send("mixer-treble-right", a - (16 > a ? 14 : 16))
});
Rd(70);
Sd(70, function(a) {
    this.N[70] = a;
    a >>>= 3;
    this.v.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Rd(71);
Sd(71, function(a) {
    this.N[71] = a;
    a >>>= 3;
    this.v.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Rd(128, function() {
    switch (this.ca) {
    case 2:
        return 1;
    case 5:
        return 2;
    case 7:
        return 4;
    case 10:
        return 8;
    default:
        return 0
    }
});
Sd(128, function(a) {
    a & 1 && (this.ca = 2);
    a & 2 && (this.ca = 5);
    a & 4 && (this.ca = 7);
    a & 8 && (this.ca = 10)
});
Rd(129, function() {
    var a = 0;
    switch (this.Bb) {
    case 0:
        a |= 1;
        break;
    case 1:
        a |= 2;
        break;
    case 3:
        a |= 8
    }
    switch (this.Tc) {
    case 5:
        a |= 32;
        break;
    case 6:
        a |= 64;
        break;
    case 7:
        a |= 128
    }
    return a
});
Sd(129, function(a) {
    a & 1 && (this.Bb = 0);
    a & 2 && (this.Bb = 1);
    a & 8 && (this.Bb = 3);
    a & 32 && (this.Tc = 5);
    a & 64 && (this.Tc = 6);
    a & 128 && (this.Tc = 7)
});
Rd(130, function() {
    for (var a = 32, b = 0; 16 > b; b++)
        a |= b * this.Yc[b];
    return a
});
Dd.prototype.V = function() {}
;
function Vd(a, b) {
    b || (b = Dd.prototype.V);
    for (var c = 0; c < a.length; c++)
        Cd[a[c]] = b
}
function Wd(a, b) {
    for (var c = []; a <= b; a++)
        c.push(a);
    return c
}
var U = new Uint8Array(32);
U[0] = 0;
U[1] = 1;
U[2] = 2;
U[3] = 3;
U[4] = 4;
U[5] = 5;
U[8] = 6;
U[9] = 7;
U[10] = 8;
U[11] = 9;
U[12] = 10;
U[13] = 11;
U[16] = 12;
U[17] = 13;
U[18] = 14;
U[19] = 15;
U[20] = 16;
U[21] = 17;
Vd([1], function(a, b) {
    this.Fh[b] = a & 1
});
Vd([2]);
Vd([3]);
Vd([4], function() {});
Vd([5], function() {});
Vd([8], function() {});
Vd(Wd(32, 53), function() {});
Vd(Wd(64, 85), function() {});
Vd(Wd(96, 117), function() {});
Vd(Wd(128, 149), function() {});
Vd(Wd(160, 168), function() {});
Vd(Wd(176, 184), function() {});
Vd([189], function() {});
Vd(Wd(192, 200), function() {});
Vd(Wd(224, 245), function() {});
function Pd(a, b) {
    a.Ya = b;
    a.v.send("dac-tell-sampling-rate", b)
}
function Nd(a) {
    a.D = 1 + (a.Ca.shift() << 0) + (a.Ca.shift() << 8)
}
function Od(a) {
    a.h = 1;
    a.nb && (a.h *= 2);
    a.l = a.D * a.h;
    a.j = 1024 * a.h;
    a.j = Math.min(Math.max(a.l >> 2 & -4, 32), a.j);
    a.B = !0;
    a.eb.Yb[a.fb] || a.pa(a.fb)
}
Dd.prototype.pa = function(a) {
    a === this.fb && this.B && (this.B = !1,
    this.Ab = this.l,
    this.Cb = !1,
    this.v.send("dac-enable"))
}
;
function Gd(a) {
    var b = Math.min(a.Ab, a.j)
      , c = Math.floor(b / a.h);
    a.eb.$d(a.Qa, 0, b, a.fb, d=>{
        if (!d) {
            d = a.nb ? 32767.5 : 127.5;
            var e = a.ob ? 0 : -1, g = a.Uc ? 1 : 2, f;
            a.nb ? f = a.ob ? a.X : a.ba : f = a.ob ? a.Y : a.C;
            for (var h = 0, k = 0; k < c; k++)
                for (var l = Md(f[k] / d + e), p = 0; p < g; p++)
                    a.xb[h].push(l),
                    h ^= 1;
            Fd(a);
            a.Ab -= b;
            a.Ab || (a.Aa(a.bc),
            a.zb && (a.Ab = a.l))
        }
    }
    )
}
function Fd(a) {
    if (a.xb[0].length) {
        var b = Cb(a.xb[0], a.xb[0].length)
          , c = Cb(a.xb[1], a.xb[1].length);
        a.v.send("dac-send-data", [b, c], [b.buffer, c.buffer])
    }
}
Dd.prototype.Aa = function(a) {
    this.Yc[a] = 1;
    this.s.Ja(this.ca)
}
;
function Id(a, b) {
    a.Yc[b] = 0;
    Jb(a.s, a.ca)
}
function Md(a) {
    return -1 * (-1 > a) + 1 * (1 < a) + (-1 <= a && 1 >= a) * a
}
;function ka(a, b) {
    this.s = a;
    this.Ha = a.u.Ha;
    this.He = b.He;
    this.K = [244, 26, b.He & 255, b.He >> 8, 7, 5, 16, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 168, 0, 0, 0, 16, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, b.Rg & 255, b.Rg >> 8, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.K = this.K.concat(Array(256 - this.K.length).fill(0));
    this.Ia = b.Ia;
    this.ib = [];
    this.name = b.name;
    this.i = this.B = 0;
    this.l = new Uint32Array(4);
    this.h = new Uint32Array(4);
    for (var c of b.Fe.features)
        this.l[c >>> 5] |= 1 << (c & 31),
        this.h[c >>> 5] |= 1 << (c & 31);
    b.Fe.features.includes(32);
    this.C = !0;
    this.j = 0;
    this.F = !1;
    this.D = 0;
    this.Xa = [];
    for (var d of b.Fe.Xa)
        this.Xa.push(new Xd(a,this,d));
    this.o = 0;
    this.g = this.Xa[0];
    this.hc = 0;
    c = [];
    c.push(Yd(this, b.Fe));
    c.push(Zd(b.notification));
    c.push($d(this, b.hc));
    b.Vf && (d = c.push,
    b = b.Vf,
    b = {
        type: 4,
        Ad: 3,
        port: b.Vc,
        we: !1,
        offset: 0,
        be: new Uint8Array(0),
        td: b.td
    },
    d.call(c, b));
    ae(this, c);
    Tb(a.u.Ha, this);
    this.reset()
}
function Yd(a, b) {
    return {
        type: 1,
        Ad: 0,
        port: b.Vc,
        we: !1,
        offset: 0,
        be: new Uint8Array(0),
        td: [{
            bytes: 4,
            name: "device_feature_select",
            read: ()=>a.B,
            write: c=>{
                a.B = c
            }
        }, {
            bytes: 4,
            name: "device_feature",
            read: ()=>a.l[a.B] || 0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "driver_feature_select",
            read: ()=>a.i,
            write: c=>{
                a.i = c
            }
        }, {
            bytes: 4,
            name: "driver_feature",
            read: ()=>a.h[a.i] || 0,
            write: c=>{
                const d = a.l[a.i];
                a.i < a.h.length && (a.h[a.i] = c & d);
                a.C = a.C && !(c & ~d)
            }
        }, {
            bytes: 2,
            name: "msix_config",
            read: ()=>65535,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "num_queues",
            read: ()=>a.Xa.length,
            write: ()=>{}
        }, {
            bytes: 1,
            name: "device_status",
            read: ()=>a.j,
            write: c=>{
                0 === c && a.reset();
                c & ~a.j & 4 && a.j & 64 && (a.F = !0,
                a.j & 4 && a.Aa(2));
                a.C || (c &= -9);
                a.j = c
            }
        }, {
            bytes: 1,
            name: "config_generation",
            read: ()=>a.D,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "queue_select",
            read: ()=>a.o,
            write: c=>{
                a.o = c;
                a.o < a.Xa.length || (a.g = null)
            }
        }, {
            bytes: 2,
            name: "queue_size",
            read: ()=>a.g ? a.g.size : 0,
            write: c=>{
                if (a.g) {
                    c & c - 1 && (c = 1 << sb(c - 1) + 1);
                    c > a.g.Kc && (c = a.g.Kc);
                    var d = a.g;
                    d.size = c;
                    d.o = c - 1
                }
            }
        }, {
            bytes: 2,
            name: "queue_msix_vector",
            read: ()=>65535,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "queue_enable",
            read: ()=>a.g ? a.g.enabled | 0 : 0,
            write: c=>{
                a.g && 1 === c && (c = a.g,
                c.l && c.h && c.g && (a.g.enabled = !0))
            }
        }, {
            bytes: 2,
            name: "queue_notify_off",
            read: ()=>a.g ? a.g.ke : 0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_desc (low dword)",
            read: ()=>a.g ? a.g.l : 0,
            write: c=>{
                a.g && (a.g.l = c)
            }
        }, {
            bytes: 4,
            name: "queue_desc (high dword)",
            read: ()=>0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_avail (low dword)",
            read: ()=>a.g ? a.g.h : 0,
            write: c=>{
                a.g && (a.g.h = c)
            }
        }, {
            bytes: 4,
            name: "queue_avail (high dword)",
            read: ()=>0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_used (low dword)",
            read: ()=>a.g ? a.g.g : 0,
            write: c=>{
                a.g && (a.g.g = c)
            }
        }, {
            bytes: 4,
            name: "queue_used (high dword)",
            read: ()=>0,
            write: ()=>{}
        }]
    }
}
function Zd(a) {
    const b = [];
    let c;
    c = a.Gj ? 0 : 2;
    for (const [d,e] of a.Kh.entries())
        b.push({
            bytes: 2,
            name: "notify" + d,
            read: ()=>65535,
            write: e || (()=>{}
            )
        });
    return {
        type: 2,
        Ad: 1,
        port: a.Vc,
        we: !1,
        offset: 0,
        be: new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >> 24]),
        td: b
    }
}
function $d(a, b) {
    return {
        type: 3,
        Ad: 2,
        port: b.Vc,
        we: !1,
        offset: 0,
        be: new Uint8Array(0),
        td: [{
            bytes: 1,
            name: "isr_status",
            read: ()=>{
                const c = a.hc;
                a.hc = 0;
                mc(a.Ha, a.Ia);
                return c
            }
            ,
            write: ()=>{}
        }]
    }
}
function ae(a, b) {
    let c = a.K[52] = 64;
    var d = c;
    for (const g of b) {
        b = 16 + g.be.length;
        d = c;
        c = d + b;
        var e = g.td.reduce((f,h)=>f + h.bytes, 0);
        e += g.offset;
        e = 16 > e ? 16 : 1 << sb(e - 1) + 1;
        a.ib[g.Ad] = {
            size: e
        };
        a.K[d] = 9;
        a.K[d + 1] = c;
        a.K[d + 2] = b;
        a.K[d + 3] = g.type;
        a.K[d + 4] = g.Ad;
        a.K[d + 5] = 0;
        a.K[d + 6] = 0;
        a.K[d + 7] = 0;
        a.K[d + 8] = g.offset & 255;
        a.K[d + 9] = g.offset >>> 8 & 255;
        a.K[d + 10] = g.offset >>> 16 & 255;
        a.K[d + 11] = g.offset >>> 24;
        a.K[d + 12] = e & 255;
        a.K[d + 13] = e >>> 8 & 255;
        a.K[d + 14] = e >>> 16 & 255;
        a.K[d + 15] = e >>> 24;
        for (const [f,h] of g.be.entries())
            a.K[d + 16 + f] = h;
        d = 16 + 4 * g.Ad;
        a.K[d] = g.port & 254 | !g.we;
        a.K[d + 1] = g.port >>> 8 & 255;
        a.K[d + 2] = g.port >>> 16 & 255;
        a.K[d + 3] = g.port >>> 24 & 255;
        d = g.port + g.offset;
        for (const f of g.td) {
            let h = f.read;
            b = f.write;
            if (!g.we) {
                e = function(l) {
                    return h(l & -2) >> ((l & 1) << 3) & 255
                }
                ;
                const k = function(l) {
                    return h(l & -4) >> ((l & 3) << 3) & 255
                };
                switch (f.bytes) {
                case 4:
                    K(a.s.A, d, a, k, void 0, h);
                    L(a.s.A, d, a, void 0, void 0, b);
                    break;
                case 2:
                    K(a.s.A, d, a, e, h);
                    L(a.s.A, d, a, void 0, b);
                    break;
                case 1:
                    K(a.s.A, d, a, h),
                    L(a.s.A, d, a, b)
                }
            }
            d += f.bytes
        }
    }
    a.K[c] = 9;
    a.K[c + 1] = 0;
    a.K[c + 2] = 20;
    a.K[c + 3] = 5;
    a.K[c + 4] = 0;
    a.K[c + 5] = 0;
    a.K[c + 6] = 0;
    a.K[c + 7] = 0;
    a.K[c + 8] = 0;
    a.K[c + 9] = 0;
    a.K[c + 10] = 0;
    a.K[c + 11] = 0;
    a.K[c + 12] = 0;
    a.K[c + 13] = 0;
    a.K[c + 14] = 0;
    a.K[c + 15] = 0;
    a.K[c + 16] = 0;
    a.K[c + 17] = 0;
    a.K[c + 18] = 0;
    a.K[c + 19] = 0
}
ka.prototype.$ = function() {
    let a = [];
    a[0] = this.B;
    a[1] = this.i;
    a[2] = this.l;
    a[3] = this.h;
    a[4] = this.C;
    a[5] = this.j;
    a[6] = this.F;
    a[7] = this.D;
    a[8] = this.hc;
    a[9] = this.o;
    return a = a.concat(this.Xa)
}
;
ka.prototype.H = function(a) {
    this.B = a[0];
    this.i = a[1];
    this.l = a[2];
    this.h = a[3];
    this.C = a[4];
    this.j = a[5];
    this.F = a[6];
    this.D = a[7];
    this.hc = a[8];
    this.o = a[9];
    let b = 0;
    for (let c of a.slice(10))
        this.Xa[b].H(c),
        b++;
    this.g = this.Xa[this.o] || null
}
;
ka.prototype.reset = function() {
    this.i = this.B = 0;
    this.h.set(this.l);
    this.C = !0;
    this.o = this.j = 0;
    this.g = this.Xa[0];
    for (const a of this.Xa)
        a.reset();
    this.F = !1;
    this.hc = this.D = 0;
    mc(this.Ha, this.Ia)
}
;
ka.prototype.Aa = function(a) {
    this.hc |= a;
    this.Ha.Aa(this.Ia)
}
;
function Xd(a, b, c) {
    this.s = a;
    this.ab = b;
    this.Kc = this.size = c.Kc;
    this.o = this.size - 1;
    this.enabled = !1;
    this.ke = c.ke;
    this.i = this.g = this.j = this.h = this.l = 0;
    this.reset()
}
Xd.prototype.$ = function() {
    const a = [];
    a[0] = this.size;
    a[1] = this.Kc;
    a[2] = this.enabled;
    a[3] = this.ke;
    a[4] = this.l;
    a[5] = this.h;
    a[6] = this.j;
    a[7] = this.g;
    a[8] = this.i;
    return a
}
;
Xd.prototype.H = function(a) {
    this.size = a[0];
    this.Kc = a[1];
    this.enabled = a[2];
    this.ke = a[3];
    this.l = a[4];
    this.h = a[5];
    this.j = a[6];
    this.g = a[7];
    this.i = a[8];
    this.o = this.size - 1
}
;
Xd.prototype.reset = function() {
    this.enabled = !1;
    this.i = this.g = this.j = this.h = this.l = 0;
    var a = this.Kc;
    this.size = a;
    this.o = a - 1
}
;
function la(a) {
    return (a.s.Na(a.h + 2) & a.o) !== a.j
}
function ma(a, b) {
    this.s = a.s;
    this.ab = a.ab;
    this.Lh = b;
    this.i = [];
    this.pf = this.g = this.h = 0;
    this.Of = [];
    this.qf = this.ze = this.Nf = 0;
    let c = a.l;
    var d = b;
    b = 0;
    let e = a.size
      , g = !1;
    const f = 0 < (this.ab.h[0] & 268435456);
    do {
        var h = a
          , k = c;
        h = {
            ef: h.s.g(k + 16 * d),
            $j: h.s.g(k + 16 * d + 4),
            Ne: h.s.g(k + 16 * d + 8),
            flags: h.s.Na(k + 16 * d + 12),
            next: h.s.Na(k + 16 * d + 14)
        };
        if (f && h.flags & 4)
            c = h.ef,
            b = d = 0,
            e = h.Ne / 16;
        else {
            if (h.flags & 2)
                g = !0,
                this.Of.push(h);
            else {
                if (g)
                    break;
                this.i.push(h);
                this.pf += h.Ne
            }
            b++;
            if (b > e)
                break;
            if (h.flags & 1)
                d = h.next;
            else
                break
        }
    } while (1)
}
function ua(a, b) {
    let c = 0
      , d = b.length;
    for (; d && a.h !== a.i.length; ) {
        var e = a.i[a.h]
          , g = e.ef + a.g;
        let l = e.Ne - a.g;
        l > d ? (l = d,
        a.g += d) : (a.h++,
        a.g = 0);
        e = b;
        var f = e.set
          , h = a.s
          , k = l;
        k && (h.Me(g),
        h.Me(g + k - 1));
        f.call(e, h.Ma.subarray(g, g + k), c);
        c += l;
        d -= l
    }
}
;function be() {
    this.he = {};
    this.g = void 0
}
be.prototype.register = function(a, b, c) {
    var d = this.he[a];
    void 0 === d && (d = this.he[a] = []);
    d.push({
        Je: b,
        Gf: c
    })
}
;
be.prototype.unregister = function(a, b) {
    var c = this.he[a];
    void 0 !== c && (this.he[a] = c.filter(function(d) {
        return d.Je !== b
    }))
}
;
be.prototype.send = function(a, b) {
    if (this.g && (a = this.g.he[a],
    void 0 !== a))
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.Je.call(d.Gf, b)
        }
}
;
function ce() {
    var a = new be
      , b = new be;
    a.g = b;
    b.g = a;
    return [a, b]
}
;function de() {}
;function jb(a, b, c) {
    this.Ug = c;
    this.xa = b;
    ee(this);
    b = Object.create(null);
    b.m = this.xa.exports.memory;
    for (var d of Object.keys(this.xa.exports))
        d.startsWith("_") || d.startsWith("zstd") || d.endsWith("_js") || (b[d] = this.xa.exports[d]);
    this.Tg = b;
    this.Pa = d = this.xa.exports.memory;
    this.G = Q(Uint32Array, d, 812, 1);
    this.Ma = new Uint8Array(0);
    this.vc = new Int32Array(this.Ma.buffer);
    this.Sa = Q(Uint8Array, d, 724, 8);
    this.cb = Q(Int32Array, d, 736, 8);
    this.bb = Q(Uint32Array, d, 768, 8);
    this.Qa = Q(Int32Array, d, 800, 1);
    this.Xb = Q(Int32Array, d, 564, 1);
    this.Wb = Q(Int32Array, d, 568, 1);
    this.Ob = Q(Int32Array, d, 572, 1);
    this.Ub = Q(Int32Array, d, 576, 1);
    this.Kg = Q(Int32Array, d, 1128, 1);
    this.wc = Q(Uint32Array, d, 540, 8);
    this.La = Q(Int32Array, d, 580, 8);
    this.Pb = Q(Uint8Array, d, 612, 1);
    this.ba = Q(Int32Array, d, 804, 1);
    this.ub = Q(Int32Array, d, 808, 1);
    this.h = Q(Uint8Array, d, 616, 1);
    this.uc = Q(Int32Array, d, 620, 1);
    this.Rb = Q(Int32Array, d, 624, 1);
    this.ng = Q(Int32Array, d, 636, 1);
    this.Jg = Q(Int32Array, d, 640, 1);
    this.pg = Q(Int32Array, d, 644, 1);
    this.xc = Q(Int32Array, d, 648, 1);
    this.flags = Q(Int32Array, d, 120, 1);
    this.Sb = Q(Int32Array, d, 100, 1);
    this.sc = Q(Int32Array, d, 96, 1);
    this.qc = Q(Int32Array, d, 104, 1);
    Q(Int32Array, d, 112, 1);
    this.Lj = Q(Uint32Array, d, 960, 2);
    this.u = {};
    this.B = Q(Int32Array, d, 556, 1);
    this.zc = Q(Int32Array, d, 560, 1);
    Q(Uint8Array, d, 548, 1);
    this.F = Q(Uint8Array, d, 552, 1);
    this.i = [];
    this.l = [];
    this.pa = [];
    this.j = [];
    this.Bd = {
        kg: null,
        Sd: null
    };
    this.Ph = Q(Uint32Array, d, 664, 1);
    this.D = Q(Int32Array, d, 64, 8);
    this.Tb = Q(Int32Array, d, 1152, 32);
    this.X = Q(Uint8Array, d, 816, 1);
    this.X[0] = 255;
    this.Y = Q(Uint8Array, d, 1032, 1);
    this.Y[0] = 0;
    this.I = Q(Uint16Array, d, 1036, 1);
    this.I[0] = 895;
    this.Rj = Q(Uint16Array, d, 1040, 1);
    this.Rj[0] = 0;
    this.P = Q(Int32Array, d, 1048, 1);
    this.P[0] = 0;
    this.T = Q(Int32Array, d, 1052, 1);
    this.T[0] = 0;
    this.V = Q(Int32Array, d, 1044, 1);
    this.V[0] = 0;
    this.L = Q(Int32Array, d, 1056, 1);
    this.L[0] = 0;
    this.O = Q(Int32Array, d, 1060, 1);
    this.O[0] = 0;
    this.$c = Q(Int32Array, d, 832, 32);
    Q(Int32Array, d, 824, 1);
    this.tb = Q(Uint16Array, d, 668, 8);
    this.Qb = Q(Int32Array, d, 684, 8);
    this.Ac = Q(Int32Array, d, 968, 8);
    this.$g = Q(Uint32Array, d, 716, 1);
    this.Zg = Q(Uint32Array, d, 720, 1);
    this.Wa = [];
    this.mf = 0;
    this.fd = [];
    this.A = void 0;
    this.v = a;
    this.ie(0, 0);
    fe(this)
}
function ee(a) {
    const b = c=>{
        const d = a.xa.exports[c];
        console.assert(d, "Missing import: " + c);
        return d
    }
    ;
    a.Ra = b("reset_cpu");
    b("getiopl");
    b("get_eflags");
    a.o = b("get_eflags_no_arith");
    a.C = b("pic_call_irq");
    a.Pj = b("do_many_cycles_native");
    b("cycle_internal");
    a.od = b("read8");
    a.Na = b("read16");
    a.g = b("read32s");
    a.df = b("write8");
    a.ye = b("write16");
    a.Lc = b("write32");
    a.Me = b("in_mapped_range");
    b("fpu_load_tag_word");
    b("fpu_load_status_word");
    b("fpu_get_sti_f64");
    b("translate_address_system_read_js");
    a.Vb = b("get_seg_cs");
    b("get_real_eip");
    b("clear_tlb");
    a.Sj = b("full_clear_tlb");
    a.Mg = b("update_state_flags");
    a.ie = b("set_tsc");
    a.Wg = b("store_current_tsc");
    a.Vg = b("set_cpuid_level");
    a.Tj = b("jit_clear_cache_js");
    a.Qh = b("jit_dirty_cache");
    a.Jj = b("codegen_finalize_finished");
    a.Ij = b("allocate_memory");
    a.eh = b("zero_memory");
    a.Yg = b("svga_allocate_memory");
    a.Xg = b("svga_allocate_dest_buffer");
    a.ah = b("svga_fill_pixel_buffer");
    a.lg = b("svga_mark_dirty");
    a.Uj = b("zstd_create_ctx");
    a.Wj = b("zstd_get_src_ptr");
    a.Vj = b("zstd_free_ctx");
    a.Ae = b("zstd_read");
    a.Be = b("zstd_read_free")
}
jb.prototype.$ = function() {
    var a = [];
    a[0] = this.G[0];
    a[1] = this.Sa;
    a[2] = this.cb;
    a[3] = this.bb;
    a[4] = this.Qa[0];
    a[5] = this.Wb[0];
    a[6] = this.Xb[0];
    a[7] = this.Ub[0];
    a[8] = this.Ob[0];
    a[9] = this.wc[0];
    a[10] = this.La;
    a[11] = this.Pb[0];
    a[13] = this.ba[0];
    a[16] = this.ub[0];
    a[17] = this.h[0];
    a[18] = this.uc[0];
    a[19] = this.Rb[0];
    a[22] = this.ng[0];
    a[23] = this.pg[0];
    a[24] = this.Jg[0];
    a[25] = this.xc[0];
    a[26] = this.flags[0];
    a[27] = this.Sb[0];
    a[28] = this.qc[0];
    a[30] = this.sc[0];
    a[37] = this.B[0];
    a[38] = this.zc[0];
    a[39] = this.D;
    a[40] = this.tb;
    a[41] = this.Qb;
    a[42] = this.Ac;
    this.Wg();
    a[43] = this.Lj;
    a[45] = this.u.Lf;
    a[46] = this.u.Mc;
    a[47] = this.u.Ic;
    a[48] = this.u.Ha;
    a[49] = this.u.eb;
    a[50] = this.u.ya;
    a[51] = this.u.gg;
    a[52] = this.u.Sd;
    a[53] = this.u.wf;
    a[54] = this.u.Jf;
    a[55] = this.u.lf;
    a[56] = this.u.ga;
    a[57] = this.u.M;
    a[58] = this.u.Ue;
    a[59] = this.u.sf;
    a[60] = this.u.jc;
    a[61] = this.u.Af;
    a[62] = this.Wa;
    a[63] = this.u.yc;
    a[64] = this.Kg[0];
    a[66] = this.$c;
    a[67] = this.Tb;
    a[68] = this.X[0];
    a[69] = this.Y[0];
    a[70] = this.I[0];
    a[71] = this.P[0];
    a[72] = this.T[0];
    a[73] = this.L[0];
    a[74] = this.O[0];
    a[75] = this.V[0];
    var b = this.Ma.length >> 12
      , c = [];
    for (var d = 0; d < b; d++) {
        var e = d << 12;
        e = this.vc.subarray(e >> 2, e + 4096 >> 2);
        let h = !0;
        for (let k = 0; k < e.length; k++)
            if (0 !== e[k]) {
                h = !1;
                break
            }
        h || c.push(d)
    }
    b = new Db(b);
    d = new Uint8Array(c.length << 12);
    for (let[h,k] of c.entries())
        b.set(k, 1),
        c = k << 12,
        d.set(this.Ma.subarray(c, c + 4096), h << 12);
    const {Yh: g, gh: f} = {
        gh: b,
        Yh: d
    };
    a[77] = g;
    a[78] = new Uint8Array(f.pb());
    a[79] = this.u.te;
    a[80] = this.u.ue;
    a[81] = this.u.ve;
    return a
}
;
jb.prototype.H = function(a) {
    this.G[0] = a[0];
    this.Ma.length !== this.G[0] && console.warn("Note: Memory size mismatch. we=" + this.Ma.length + " state=" + this.G[0]);
    this.Sa.set(a[1]);
    this.cb.set(a[2]);
    this.bb.set(a[3]);
    this.Qa[0] = a[4];
    this.Wb[0] = a[5];
    this.Xb[0] = a[6];
    this.Ub[0] = a[7];
    this.Ob[0] = a[8];
    this.wc[0] = a[9];
    this.La.set(a[10]);
    this.Pb[0] = a[11];
    this.ba[0] = a[13];
    this.ub[0] = a[16];
    this.h[0] = a[17];
    this.uc[0] = a[18];
    this.Rb[0] = a[19];
    this.ng[0] = a[22];
    this.pg[0] = a[23];
    this.Jg[0] = a[24];
    this.xc[0] = a[25];
    this.flags[0] = a[26];
    this.Sb[0] = a[27];
    this.qc[0] = a[28];
    this.sc[0] = a[30];
    this.B[0] = a[37];
    this.zc[0] = a[38];
    this.D.set(a[39]);
    this.tb.set(a[40]);
    this.Qb.set(a[41]);
    a[42] && this.Ac.set(a[42]);
    this.ie(a[43][0], a[43][1]);
    this.u.Lf && this.u.Lf.H(a[45]);
    this.u.Mc && this.u.Mc.H(a[46]);
    this.u.Ic && this.u.Ic.H(a[47]);
    this.u.Ha && this.u.Ha.H(a[48]);
    this.u.eb && this.u.eb.H(a[49]);
    this.u.ya && this.u.ya.H(a[50]);
    this.u.gg && this.u.gg.H(a[51]);
    this.u.Sd && this.u.Sd.H(a[52]);
    this.u.wf && this.u.wf.H(a[53]);
    this.u.Jf && this.u.Jf.H(a[54]);
    this.u.lf && this.u.lf.H(a[55]);
    this.u.ga && this.u.ga.H(a[56]);
    this.u.M && this.u.M.H(a[57]);
    this.u.Ue && this.u.Ue.H(a[58]);
    this.u.sf && this.u.sf.H(a[59]);
    this.u.jc && this.u.jc.H(a[60]);
    this.u.Af && this.u.Af.H(a[61]);
    this.u.te && this.u.te.H(a[79]);
    this.u.ue && this.u.ue.H(a[80]);
    this.u.ve && this.u.ve.H(a[81]);
    this.Wa = a[62];
    this.u.yc && this.u.yc.H(a[63]);
    this.Kg[0] = a[64];
    this.$c.set(a[66]);
    this.Tb.set(a[67]);
    this.X[0] = a[68];
    this.Y[0] = a[69];
    this.I[0] = a[70];
    this.P[0] = a[71];
    this.T[0] = a[72];
    this.L[0] = a[73];
    this.O[0] = a[74];
    this.V[0] = a[75];
    var b = new Db(a[78].buffer);
    a = a[77];
    this.eh(this.G[0]);
    const c = this.G[0] >> 12;
    let d = 0;
    for (let e = 0; e < c; e++)
        if (b.get(e)) {
            let g = d << 12;
            this.Ma.set(a.subarray(g, g + 4096), e << 12);
            d++
        }
    this.Mg();
    this.Sj();
    this.Tj()
}
;
function lc(a) {
    a.Ra();
    a.Wa = [];
    a.u.ab && a.u.ab.reset();
    qb(a)
}
function ge(a, b) {
    1048576 > b ? b = 1048576 : 0 > (b | 0) && (b = Math.pow(2, 31) - 131072);
    b = (b - 1 | 131071) + 1 | 0;
    console.assert(0 === a.G[0], "Expected uninitialised memory");
    a.G[0] = b;
    const c = a.Ij(b);
    a.Ma = Q(Uint8Array, a.Pa, c, b);
    a.vc = Q(Uint32Array, a.Pa, c, b >> 2)
}
jb.prototype.hb = function(a, b) {
    ge(this, "number" === typeof a.G ? a.G : 67108864);
    a.Dd && this.Vg(a.Dd);
    this.F[0] = +a.ya;
    this.Ra();
    var c = new eb(this);
    this.A = c;
    this.Bd.kg = a.Bd;
    this.Bd.Sd = a.Oj;
    qb(this);
    if (a.vb) {
        const {Xh: e} = he(this.Ma, a.vb, a.Xc, a.Pc || "");
        e && this.fd.push(e)
    }
    K(c, 179, this, function() {
        return 0
    });
    var d = 0;
    K(c, 146, this, function() {
        return d
    });
    L(c, 146, this, function(e) {
        d = e
    });
    K(c, 1297, this, function() {
        return this.mf < this.Wa.length ? this.Wa[this.mf++] : 0
    });
    L(c, 1296, this, void 0, function(e) {
        function g(k) {
            return new Uint8Array((new Int32Array([k])).buffer)
        }
        function f(k) {
            return k >> 8 | k << 8 & 65280
        }
        function h(k) {
            return k << 24 | k << 8 & 16711680 | k >> 8 & 65280 | k >>> 24
        }
        this.mf = 0;
        if (0 === e)
            this.Wa = g(1431127377);
        else if (1 === e)
            this.Wa = g(0);
        else if (3 === e)
            this.Wa = g(this.G[0]);
        else if (5 === e)
            this.Wa = g(1);
        else if (15 === e)
            this.Wa = g(1);
        else if (13 === e)
            this.Wa = new Uint8Array(16);
        else if (25 === e) {
            e = new Int32Array(4 + 64 * this.fd.length);
            const k = new Uint8Array(e.buffer);
            e[0] = h(this.fd.length);
            for (let l = 0; l < this.fd.length; l++) {
                const {name: p, data: q} = this.fd[l]
                  , t = 4 + 64 * l;
                e[t >> 2] = h(q.length);
                e[t + 4 >> 2] = f(49152 + l);
                for (let m = 0; m < p.length; m++)
                    k[t + 8 + m] = p.charCodeAt(m)
            }
            this.Wa = k
        } else
            this.Wa = 32768 <= e && 49152 > e ? g(0) : 49152 <= e && e - 49152 < this.fd.length ? this.fd[e - 49152].data : g(0)
    });
    this.u = {};
    a.Rh && (this.u.jc = new Vc(this),
    this.u.Ha = new hc(this),
    this.F[0] && (this.u.yc = new md(this),
    this.u.Mc = new fd(this),
    this.u.ya = new dd(this)),
    this.u.Ic = new Wc(this),
    ie(this, this.u.Ic, a),
    this.u.eb = new qc(this),
    this.u.Sd = new Cc(this,b,a.ha || 8388608),
    this.u.wf = new Rc(this,b),
    this.u.Jf = new Zc(this,1016,b),
    a.te && (this.u.te = new Zc(this,760,b)),
    a.ue && (this.u.ue = new Zc(this,1E3,b)),
    a.ve && (this.u.ve = new Zc(this,744,b)),
    this.u.lf = new nc(this,a.ma),
    c = 0,
    a.M && (this.u.M = new Hb(this,a.M,a.Ke,!1,c++,b)),
    a.ga && (this.u.ga = new Hb(this,a.ga,void 0,!0,c++,b)),
    this.u.Ue = new vc(this,b),
    a.Bh && (this.u.sf = new sd(this,b,a.vf,a.Gb)),
    a.Db && (this.u.Lf = new fa(a.Db,this,b)),
    this.u.Af = new Dd(this,b));
    a.ed && je(this, a.ed)
}
;
function je(a, b) {
    if (8192 > b.byteLength) {
        var c = new Int32Array(2048);
        (new Uint8Array(c.buffer)).set(new Uint8Array(b))
    } else
        c = new Int32Array(b,0,2048);
    for (var d = 0; 8192 > d; d += 4)
        if (464367618 === c[d >> 2]) {
            var e = c[d + 4 >> 2];
            if (!(464367618 + e + c[d + 8 >> 2] | 0)) {
                a.D[0] = 732803074;
                a.D[3] = 31744;
                a.Lc(31744, 0);
                a.La[0] = 1;
                a.Qa[0] = 1;
                a.flags[0] = 2;
                a.ba[0] = 1;
                a.ub[0] = 1;
                for (var g = 0; 6 > g; g++)
                    a.Sa[g] = 0,
                    a.cb[g] = 0,
                    a.bb[g] = 4294967295,
                    a.tb[g] = 45058;
                if (e & 65536) {
                    var f = c[d + 16 >> 2];
                    g = c[d + 20 >> 2];
                    e = c[d + 28 >> 2];
                    b = new Uint8Array(b,d - (c[d + 12 >> 2] - f),0 === g ? void 0 : g - f);
                    ra(a, b, f);
                    a.B[0] = a.Vb() + e | 0
                } else if (1179403647 === c[0]) {
                    c = ke(b);
                    a.B[0] = a.Vb() + c.Mh.Ch | 0;
                    for (f of c.zj)
                        0 !== f.type && 1 === f.type && f.qg + f.Uh < a.G[0] && f.$f && (c = new Uint8Array(b,f.offset,f.$f),
                        ra(a, c, f.qg))
                }
                a.A.Lb(244, a, function(h) {
                    console.log("Test exited with code " + yb(h, 2));
                    throw "HALT";
                }, function() {}, function() {}, function() {});
                for (let h = 0; 15 >= h; h++) {
                    function k(l) {
                        l ? this.Ja(h) : Jb(this, h)
                    }
                    L(a.A, 8192 + h, a, k, k, k)
                }
                a.Mg();
                break
            }
        }
}
function ie(a, b, c) {
    var d = c.oc || 531;
    b.W[56] = 1 | d >> 4 & 240;
    b.W[61] = d & 255;
    b.W[21] = 128;
    b.W[22] = 2;
    d = 0;
    1048576 <= a.G[0] && (d = a.G[0] - 1048576 >> 10,
    d = Math.min(d, 65535));
    b.W[23] = d & 255;
    b.W[24] = d >> 8 & 255;
    b.W[48] = d & 255;
    b.W[49] = d >> 8 & 255;
    d = 0;
    16777216 <= a.G[0] && (d = a.G[0] - 16777216 >> 16,
    d = Math.min(d, 65535));
    b.W[52] = d & 255;
    b.W[53] = d >> 8 & 255;
    b.W[91] = 0;
    b.W[92] = 0;
    b.W[93] = 0;
    b.W[20] = 47;
    b.W[95] = 0;
    c.Dh && (b.W[63] = 1)
}
function qb(a) {
    var b = a.Bd.kg
      , c = a.Bd.Sd;
    if (b) {
        var d = new Uint8Array(b);
        ra(a, d, 1048576 - b.byteLength);
        if (c) {
            var e = new Uint8Array(c);
            ra(a, e, 786432);
            hb(a.A, 4272947200, 1048576, function(g) {
                g = g - 4272947200 | 0;
                return g < e.length ? e[g] : 0
            }, function() {})
        }
        hb(a.A, 4293918720, 1048576, function(g) {
            return this.Ma[g & 1048575]
        }
        .bind(a), function(g, f) {
            this.Ma[g & 1048575] = f
        }
        .bind(a))
    }
}
function le(a, b, c, d, e, g) {
    const f = new Uint8Array(a.Pa.buffer,e >>> 0,g >>> 0);
    WebAssembly.instantiate(f, {
        e: a.Tg
    }).then(h=>{
        a.xa.Mf.set(b + 1024, h.instance.exports.f);
        a.Jj(b, c, d);
        a.dh && a.dh(f)
    }
    )
}
function mb(a) {
    if (a.o() & 512) {
        const b = ob(a, nb());
        pb(a);
        return b
    }
    return 100
}
function ob(a, b) {
    var c = a.u.Ue.sb(b, !1);
    var d = a.u.Ic.sb(b, !1);
    let e = 100
      , g = 100;
    a.F[0] && (e = a.u.ya.sb(b),
    g = a.u.Mc.sb(b));
    return Math.min(c, d, 100, e, g)
}
function pb(a) {
    a.o() & 512 && (me(a),
    a.Ug())
}
function me(a) {
    a.o();
    a.u.jc && a.u.jc.Td();
    a.u.Mc && a.u.Mc.Td()
}
jb.prototype.Ja = function(a) {
    this.u.jc && this.u.jc.Rd(a);
    this.u.yc && this.u.yc.Rd(a)
}
;
function Jb(a, b) {
    a.u.jc && a.u.jc.Ud(b);
    a.u.yc && a.u.yc.Ud(b)
}
"undefined" !== typeof window ? window.CPU = jb : "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports.CPU = jb : "function" === typeof importScripts && (self.CPU = jb);
function fe(a) {
    var b = {};
    a.debug = b;
    b.hb = function() {}
    ;
    b.rk = function() {}
    ;
    b.jk = function() {}
    ;
    b.$ = function() {}
    ;
    b.lk = function() {}
    ;
    b.kk = function() {}
    ;
    b.ik = function() {
        if (a.La[4] & 32)
            for (var g = 0; 4 > g; g++)
                a.g(a.La[3] + 8 * g)
    }
    ;
    b.gk = function() {}
    ;
    b.hk = function() {}
    ;
    b.qk = function() {}
    ;
    b.wk = function() {}
    ;
    b.Ek = function() {}
    ;
    b.ck = function() {}
    ;
    let c, d;
    b.fk = function(g, f, h) {
        if (!d) {
            if (void 0 === c && (c = "function" === typeof require ? require("./capstone-x86.min.js") : window.cs,
            void 0 === c))
                return;
            d = [new c.Capstone(c.ARCH_X86,c.MODE_16), new c.Capstone(c.ARCH_X86,c.MODE_32)]
        }
        try {
            d[g].disasm(f, h).forEach(function(k) {
                de(yb(k.bk >>> 0) + ": " + xb(k.bytes.map(l=>yb(l, 2).slice(-2)).join(" "), 20) + " " + k.mnemonic + " " + k.op_str)
            })
        } catch (k) {
            de("Could not disassemble: " + Array.from(f).map(l=>yb(l, 2)).join(" "))
        }
    }
    ;
    let e;
    b.mk = function(g) {
        if (void 0 === e && (e = "function" === typeof require ? require("./libwabt.js") : new window.WabtModule,
        void 0 === e))
            return;
        g = g.slice();
        try {
            var f = e.readWasm(g, {
                Bk: !1
            });
            f.generateNames();
            f.applyNames();
            f.toText({
                pk: !0,
                tk: !0
            })
        } catch (l) {
            var h = new Blob([g])
              , k = document.createElement("a");
            k.download = "failed.wasm";
            k.href = window.URL.createObjectURL(h);
            k.dataset.downloadurl = ["application/octet-stream", k.download, k.href].join(":");
            k.click();
            window.URL.revokeObjectURL(k.src);
            console.log(l.toString())
        } finally {
            f && f.va()
        }
    }
}
;let ne = DataView.prototype
  , oe = {
    size: 1,
    get: ne.getUint8,
    set: ne.setUint8
}
  , pe = {
    size: 2,
    get: ne.getUint16,
    set: ne.setUint16
}
  , W = {
    size: 4,
    get: ne.getUint32,
    set: ne.setUint32
}
  , re = qe([{
    Sh: W
}, {
    kh: oe
}, {
    data: oe
}, {
    Mj: oe
}, {
    yk: oe
}, {
    Yj: oe
}, {
    zk: function(a) {
        return {
            size: a,
            get: ()=>-1
        }
    }(7)
}, {
    type: pe
}, {
    vk: pe
}, {
    Nj: W
}, {
    Ch: W
}, {
    $h: W
}, {
    Dj: W
}, {
    flags: W
}, {
    xh: pe
}, {
    ug: pe
}, {
    vg: pe
}, {
    Pg: pe
}, {
    Qg: pe
}, {
    Dk: pe
}]);
console.assert(52 === re.reduce((a,b)=>a + b.size, 0));
let se = qe([{
    type: W
}, {
    offset: W
}, {
    Fk: W
}, {
    qg: W
}, {
    $f: W
}, {
    Uh: W
}, {
    flags: W
}, {
    align: W
}]);
console.assert(32 === se.reduce((a,b)=>a + b.size, 0));
let te = qe([{
    name: W
}, {
    type: W
}, {
    flags: W
}, {
    Zj: W
}, {
    offset: W
}, {
    size: W
}, {
    link: W
}, {
    info: W
}, {
    ak: W
}, {
    nk: W
}]);
console.assert(40 === te.reduce((a,b)=>a + b.size, 0));
function qe(a) {
    return a.map(function(b) {
        var c = Object.keys(b);
        console.assert(1 === c.length);
        c = c[0];
        b = b[c];
        console.assert(0 < b.size);
        return {
            name: c,
            type: b,
            size: b.size,
            get: b.get,
            set: b.set
        }
    })
}
function ke(a) {
    var b = new DataView(a);
    let[c,d] = ue(b, re);
    console.assert(52 === d);
    console.assert(1179403647 === c.Sh, "Bad magic");
    console.assert(1 === c.kh, "Unimplemented: 64 bit elf");
    console.assert(1 === c.data, "Unimplemented: big endian");
    console.assert(1 === c.Mj, "Bad version0");
    console.assert(2 === c.type, "Unimplemented type");
    console.assert(1 === c.Nj, "Bad version1");
    console.assert(52 === c.xh, "Bad header size");
    console.assert(32 === c.ug, "Bad program header size");
    console.assert(40 === c.Pg, "Bad section header size");
    [a] = ve(new DataView(b.buffer,b.byteOffset + c.$h,c.ug * c.vg), se, c.vg);
    [b] = ve(new DataView(b.buffer,b.byteOffset + c.Dj,c.Pg * c.Qg), te, c.Qg);
    return {
        Mh: c,
        zj: a,
        Ck: b
    }
}
function ue(a, b) {
    let c = {}
      , d = 0;
    for (let e of b)
        b = e.get.call(a, d, !0),
        console.assert(void 0 === c[e.name]),
        c[e.name] = b,
        d += e.size;
    return [c, d]
}
function ve(a, b, c) {
    let d = []
      , e = 0;
    for (var g = 0; g < c; g++) {
        let[f,h] = ue(new DataView(a.buffer,a.byteOffset + e,void 0), b);
        d.push(f);
        e += h
    }
    return [d, e]
}
;function he(a, b, c, d) {
    var e = new Uint8Array(b);
    const g = new Uint16Array(b);
    var f = new Uint32Array(b)
      , h = e[497] || 4;
    if (43605 === g[255] && 1400005704 === (g[257] | g[258] << 16)) {
        var k = e[529];
        e[528] = 255;
        e[529] = k & -97 | 128;
        g[274] = 56832;
        g[253] = 65535;
        d += "\x00";
        f[138] = 581632;
        for (e = 0; e < d.length; e++)
            a[581632 + e] = d.charCodeAt(e);
        h = 512 * (h + 1);
        d = new Uint8Array(b,0,h);
        b = new Uint8Array(b,h);
        e = h = 0;
        c && (h = 67108864,
        e = c.byteLength,
        a.set(new Uint8Array(c), h));
        f[134] = h;
        f[135] = e;
        a.set(d, 524288);
        a.set(b, 1048576);
        a = new Uint8Array(256);
        (new Uint16Array(a.buffer))[0] = 43605;
        a[2] = 1;
        c = 3;
        a[c++] = 250;
        a[c++] = 184;
        a[c++] = 32768;
        a[c++] = 128;
        a[c++] = 142;
        a[c++] = 192;
        a[c++] = 142;
        a[c++] = 216;
        a[c++] = 142;
        a[c++] = 224;
        a[c++] = 142;
        a[c++] = 232;
        a[c++] = 142;
        a[c++] = 208;
        a[c++] = 188;
        a[c++] = 57344;
        a[c++] = 224;
        a[c++] = 234;
        a[c++] = 0;
        a[c++] = 0;
        a[c++] = 32800;
        a[c++] = 128;
        f = a[c] = 0;
        for (b = 0; b < a.length; b++)
            f += a[b];
        a[c] = -f;
        return {
            Xh: {
                name: "genroms/kernel.bin",
                data: a
            }
        }
    }
}
;var Ga = 16384
  , La = 4;
function we(a) {
    this.g = [];
    this.C = [];
    this.j = a;
    this.B = {
        nf: 0
    };
    this.h = {};
    this.l = 274877906944;
    this.o = 0;
    this.i = [];
    Fa(this, "", -1)
}
we.prototype.$ = function() {
    let a = [];
    a[0] = this.g;
    a[1] = this.B.nf;
    a[2] = [];
    for (const [b,c] of Object.entries(this.h))
        0 === (this.g[b].mode & Ga) && a[2].push([b, c]);
    a[3] = this.l;
    a[4] = this.o;
    return a = a.concat(this.i)
}
;
we.prototype.H = function(a) {
    this.g = a[0].map(b=>{
        const c = new xe(0);
        c.H(b);
        return c
    }
    );
    this.B.nf = a[1];
    this.h = {};
    for (let[b,c] of a[2])
        c.buffer.byteLength !== c.byteLength && (c = c.slice()),
        this.h[b] = c;
    this.l = a[3];
    this.o = a[4];
    this.i = a.slice(5)
}
;
function Ba(a, b, c) {
    var d = a.g[b];
    0 == d.status || 2 == d.status ? c() : 5 === d.status ? Ba(Z(a, d), d.g, c) : a.C.push({
        id: b,
        Xj: c
    })
}
function ye(a, b, c) {
    var d = ze(a);
    const e = b[0];
    d.size = b[1];
    d.ic = b[2];
    d.Ed = d.ic;
    d.Oc = d.ic;
    d.mode = b[3];
    d.uid = b[4];
    d.Ga = b[5];
    var g = d.mode & 61440;
    if (g === Ga)
        for (Ae(a, d, c, e),
        c = a.g.length - 1,
        b = b[6],
        d = 0; d < b.length; d++)
            ye(a, b[d], c);
    else
        32768 === g ? (d.status = 2,
        d.sd = b[6],
        Ae(a, d, c, e)) : 40960 === g && (d.re = b[6],
        Ae(a, d, c, e))
}
function Be(a, b, c, d) {
    const e = a.g[c]
      , g = a.g[b];
    Ce(a, b);
    g.ia.has(d);
    g.ia.set(d, c);
    e.Ua++;
    Ce(a, c) && (e.ia.has(".."),
    e.ia.has(".") || e.Ua++,
    e.ia.set(".", c),
    e.ia.set("..", b),
    g.Ua++)
}
function De(a, b, c) {
    const d = Sa(a, b, c)
      , e = a.g[d]
      , g = a.g[b];
    Ce(a, b);
    g.ia.delete(c) && (e.Ua--,
    Ce(a, d) && (e.ia.get(".."),
    e.ia.delete(".."),
    g.Ua--))
}
function Ae(a, b, c, d) {
    -1 != c ? (a.g.push(b),
    b.dc = a.g.length - 1,
    Be(a, c, b.dc, d)) : 0 == a.g.length && (a.g.push(b),
    b.ia.set(".", 0),
    b.ia.set("..", 0),
    b.Ua = 2)
}
function xe(a) {
    this.ia = new Map;
    this.Pe = this.Oe = this.ic = this.Oc = this.Ed = this.dc = this.Ga = this.uid = this.size = this.status = 0;
    this.re = "";
    this.mode = 493;
    this.za = {
        type: 0,
        version: 0,
        path: a
    };
    this.Ua = 0;
    this.sd = "";
    this.h = [];
    this.g = this.i = -1
}
xe.prototype.$ = function() {
    const a = [];
    a[0] = this.mode;
    a[1] = (this.mode & 61440) === Ga ? [...this.ia] : 32768 === (this.mode & 61440) ? this.sd : 40960 === (this.mode & 61440) ? this.re : 49152 === (this.mode & 61440) ? [this.Pe, this.Oe] : null;
    a[2] = this.h;
    a[3] = this.status;
    a[4] = this.size;
    a[5] = this.uid;
    a[6] = this.Ga;
    a[7] = this.dc;
    a[8] = this.Ed;
    a[9] = this.Oc;
    a[10] = this.ic;
    a[11] = this.za.version;
    a[12] = this.za.path;
    a[13] = this.Ua;
    return a
}
;
xe.prototype.H = function(a) {
    this.mode = a[0];
    if ((this.mode & 61440) === Ga) {
        this.ia = new Map;
        for (const [b,c] of a[1])
            this.ia.set(b, c)
    } else
        32768 === (this.mode & 61440) ? this.sd = a[1] : 40960 === (this.mode & 61440) ? this.re = a[1] : 49152 === (this.mode & 61440) && ([this.Pe,this.Oe] = a[1]);
    this.h = [];
    for (const b of a[2]) {
        const c = new Ee;
        c.H(b);
        this.h.push(c)
    }
    this.status = a[3];
    this.size = a[4];
    this.uid = a[5];
    this.Ga = a[6];
    this.dc = a[7];
    this.Ed = a[8];
    this.Oc = a[9];
    this.ic = a[10];
    this.za.type = (this.mode & 61440) >> 8;
    this.za.version = a[11];
    this.za.path = a[12];
    this.Ua = a[13]
}
;
function Fe(a, b) {
    Object.assign(b, a, {
        dc: b.dc,
        ia: b.ia,
        Ua: b.Ua
    })
}
function ze(a) {
    const b = Math.round(Date.now() / 1E3);
    a = new xe(++a.B.nf);
    a.Oc = a.Ed = a.ic = b;
    return a
}
function Fa(a, b, c) {
    var d = a.g[c];
    if (0 <= c && 5 === d.status)
        return c = d.g,
        b = Fa(Z(a, d), b, c),
        Ge(a, d.i, b);
    d = ze(a);
    d.mode = 511 | Ga;
    0 <= c && (d.uid = a.g[c].uid,
    d.Ga = a.g[c].Ga,
    d.mode = a.g[c].mode & 511 | Ga);
    d.za.type = Ga >> 8;
    Ae(a, d, c, b);
    return a.g.length - 1
}
function Ha(a, b, c) {
    var d = a.g[c];
    if (5 === d.status)
        return c = d.g,
        b = Ha(Z(a, d), b, c),
        Ge(a, d.i, b);
    d = ze(a);
    d.uid = a.g[c].uid;
    d.Ga = a.g[c].Ga;
    d.za.type = 128;
    d.mode = a.g[c].mode & 438 | 32768;
    Ae(a, d, c, b);
    return a.g.length - 1
}
function Ea(a, b, c, d, e) {
    var g = a.g[c];
    if (5 === g.status)
        return c = g.g,
        b = Ea(Z(a, g), b, c, d, e),
        Ge(a, g.i, b);
    g = ze(a);
    g.Oe = d;
    g.Pe = e;
    g.uid = a.g[c].uid;
    g.Ga = a.g[c].Ga;
    g.za.type = 192;
    g.mode = a.g[c].mode & 438;
    Ae(a, g, c, b);
    return a.g.length - 1
}
function Da(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status)
        return c = e.g,
        b = Da(Z(a, e), b, c, d),
        Ge(a, e.i, b);
    e = ze(a);
    e.uid = a.g[c].uid;
    e.Ga = a.g[c].Ga;
    e.za.type = 160;
    e.re = d;
    e.mode = 40960;
    Ae(a, e, c, b);
    return a.g.length - 1
}
async function He(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status)
        return c = e.g,
        d = await He(Z(a, e), b, c, d),
        Ge(a, e.i, d);
    e = Ha(a, b, c);
    b = a.g[e];
    c = new Uint8Array(d.length);
    c.set(d);
    await Ie(a, e, c);
    b.size = d.length;
    return e
}
function Aa(a, b, c) {
    var d = a.g[b];
    if (5 === d.status)
        return Aa(Z(a, d), d.g, c);
    (d.mode & 61440) == Ga && Je(a, b);
    return !0
}
async function Ua(a, b) {
    var c = a.g[b];
    if (5 === c.status)
        return await Ua(Z(a, c), c.g);
    2 === c.status && a.j.g(c.sd);
    c.status == La && (c.status = -1,
    await Ke(a, b))
}
async function Ra(a, b, c, d, e) {
    if (b == d && c == e)
        return 0;
    var g = Sa(a, b, c);
    if (-1 === g)
        return -2;
    var f = b;
    Ce(a, f);
    for (var h = ""; 0 != f; )
        h = "/" + Me(a, f) + h,
        f = Ne(a, f);
    if (-1 != Sa(a, d, e) && (f = Ta(a, d, e),
    0 > f))
        return f;
    h = a.g[g];
    var k = a.g[b];
    f = a.g[d];
    if (5 === k.status || 5 === f.status)
        if (5 === k.status && k.i === f.i) {
            if (a = await Ra(Z(a, k), k.g, c, f.g, e),
            0 > a)
                return a
        } else {
            if (0 === H(a, g).dc || !Ce(a, g) && 1 < H(a, g).Ua)
                return -1;
            k = Sa(a, b, c);
            var l = a.g[k]
              , p = new xe(-1);
            Ce(a, k);
            Object.assign(p, l);
            const q = a.g.length;
            a.g.push(p);
            p.dc = q;
            5 === l.status && a.i[l.i].g.set(l.g, q);
            if (5 !== l.status || 0 === l.g)
                De(a, b, c),
                Be(a, b, q, c);
            if (Ce(a, k) && 5 !== l.status)
                for (const [t,m] of p.ia)
                    "." !== t && ".." !== t && Ce(a, m) && a.g[m].ia.set("..", q);
            a.h[q] = a.h[k];
            delete a.h[k];
            l.ia = new Map;
            l.Ua = 0;
            k = q;
            l = H(a, g);
            p = await Oa(a, k, 0, l.size);
            5 === f.status ? (d = Z(a, f),
            e = Ce(a, k) ? Fa(d, e, f.g) : Ha(d, e, f.g),
            d = H(d, e),
            Fe(l, d),
            Oe(a, g, f.i, e)) : (h.status = -1,
            a.i[h.i].g.delete(h.g),
            Fe(l, h),
            Be(a, d, g, e));
            await Ma(a, g, l.size);
            p && p.length && await Pa(a, g, 0, p.length, p);
            if (Ce(a, g))
                for (const t of Pe(a, k))
                    if (e = await Ra(a, k, t, g, t),
                    0 > e)
                        return e;
            await Ke(a, k);
            a = Ta(a, b, c);
            if (0 > a)
                return a
        }
    else
        De(a, b, c),
        Be(a, d, g, e),
        h.za.version++;
    return 0
}
async function Pa(a, b, c, d, e) {
    var g = a.g[b];
    if (5 === g.status)
        b = g.g,
        await Pa(Z(a, g), b, c, d, e);
    else {
        var f = await a.pb(b);
        !f || f.length < c + d ? (await Ma(a, b, Math.floor(3 * (c + d) / 2)),
        g.size = c + d,
        f = await a.pb(b)) : g.size < c + d && (g.size = c + d);
        e && f.set(e.subarray(0, d), c);
        await Ie(a, b, f)
    }
}
async function Oa(a, b, c, d) {
    const e = a.g[b];
    return 5 === e.status ? (b = e.g,
    await Oa(Z(a, e), b, c, d)) : await Qe(a, b, c, d)
}
function Sa(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        const d = b.g;
        c = Sa(Z(a, b), d, c);
        return -1 === c ? -1 : Re(a, b.i, c)
    }
    a = b.ia.get(c);
    return void 0 === a ? -1 : a
}
function xa(a) {
    let b = a.g.length;
    for (const {h: c, g: d} of a.i)
        b += xa(c),
        b -= d.size;
    return b
}
function za(a) {
    let b = 1048576;
    for (const {h: c} of a.i)
        b += za(c);
    return b
}
function va(a) {
    let b = a.o;
    for (const {h: c} of a.i)
        b += va(c);
    return b
}
function wa(a) {
    let b = a.l;
    for (const {h: c} of a.i)
        b += wa(c);
    return a.l
}
function Me(a, b) {
    const c = a.g[Ne(a, b)];
    if (5 === c.status)
        return Me(Z(a, c), a.g[b].g);
    if (!c)
        return "";
    for (const [d,e] of c.ia)
        if (e === b)
            return d;
    return ""
}
function Ca(a, b, c, d) {
    if (Ce(a, c))
        return -1;
    const e = a.g[b]
      , g = a.g[c];
    if (5 === e.status)
        return 5 !== g.status || g.i !== e.i ? -1 : Ca(Z(a, e), e.g, g.g, d);
    if (5 === g.status)
        return -1;
    Be(a, b, c, d);
    return 0
}
function Ta(a, b, c) {
    if ("." === c || ".." === c)
        return -1;
    var d = Sa(a, b, c);
    const e = a.g[d];
    var g = a.g[b];
    if (5 === g.status)
        return b = g.g,
        Ta(Z(a, g), b, c);
    if (g = Ce(a, d)) {
        a: if (d = a.g[d],
        5 === d.status)
            var f = Ce(Z(a, d), d.g);
        else {
            for (f of d.ia.keys())
                if ("." !== f && ".." !== f) {
                    f = !1;
                    break a
                }
            f = !0
        }
        g = !f
    }
    if (g)
        return -39;
    De(a, b, c);
    0 === e.Ua && (e.status = La);
    return 0
}
async function Ke(a, b) {
    const c = a.g[b];
    5 === c.status ? await Ke(Z(a, c), c.g) : (c.size = 0,
    delete a.h[b])
}
we.prototype.pb = async function(a) {
    const b = this.g[a];
    return this.h[a] ? this.h[a] : 2 === b.status ? await this.j.read(b.sd, 0, b.size) : null
}
;
async function Qe(a, b, c, d) {
    const e = a.g[b];
    return a.h[b] ? a.h[b].subarray(c, c + d) : 2 === e.status ? await a.j.read(e.sd, c, d) : null
}
async function Ie(a, b, c) {
    a.h[b] = c;
    2 === a.g[b].status && (a.g[b].status = 0,
    a.j.g(a.g[b].sd))
}
function H(a, b) {
    b = a.g[b];
    return 5 === b.status ? H(Z(a, b), b.g) : b
}
async function Ma(a, b, c) {
    var d = H(a, b)
      , e = await Qe(a, b, 0, d.size);
    if (c != d.size) {
        var g = new Uint8Array(c);
        d.size = c;
        e && g.set(e.subarray(0, Math.min(e.length, d.size)), 0);
        await Ie(a, b, g)
    }
}
function Se(a, b) {
    b = b.replace("//", "/");
    b = b.split("/");
    0 < b.length && 0 === b[b.length - 1].length && b.pop();
    0 < b.length && 0 === b[0].length && b.shift();
    const c = b.length;
    var d = -1
      , e = 0;
    let g = null;
    for (var f = 0; f < c; f++)
        if (d = e,
        e = Sa(a, d, b[f]),
        !g && 5 === a.g[d].status && (g = "/" + b.slice(f).join("/")),
        -1 == e)
            return f < c - 1 ? {
                id: -1,
                uf: -1,
                name: b[f],
                bg: g
            } : {
                id: -1,
                uf: d,
                name: b[f],
                bg: g
            };
    return {
        id: e,
        uf: d,
        name: b[f],
        bg: g
    }
}
function Je(a, b) {
    var c = a.g[b];
    if (5 === c.status)
        Je(Z(a, c), c.g);
    else {
        var d = 0;
        for (const e of c.ia.keys())
            d += 24 + Te(e);
        b = a.h[b] = new Uint8Array(d);
        c.size = d;
        d = 0;
        for (const [e,g] of c.ia)
            c = H(a, g),
            d += v(["Q", "d", "b", "s"], [c.za, d + 13 + 8 + 1 + 2 + Te(e), c.mode >> 12, e], b, d)
    }
}
function Na(a, b, c) {
    a = a.h[b];
    if (c >= a.length)
        return a.length;
    for (b = 0; ; ) {
        const d = E(["Q", "d"], a, {
            offset: b
        })[1];
        if (d > c)
            break;
        b = d
    }
    return b
}
function Ce(a, b) {
    b = a.g[b];
    return 5 === b.status ? Ce(Z(a, b), b.g) : (b.mode & 61440) === Ga
}
function Pe(a, b) {
    Ce(a, b);
    b = a.g[b];
    if (5 === b.status)
        return Pe(Z(a, b), b.g);
    a = [];
    for (const c of b.ia.keys())
        "." !== c && ".." !== c && a.push(c);
    return a
}
function Ne(a, b) {
    Ce(a, b);
    b = a.g[b];
    if (5 !== b.status || 0 === b.g)
        return b.ia.get("..");
    const c = Ne(Z(a, b), b.g);
    return Re(a, b.i, c)
}
function Oe(a, b, c, d) {
    const e = a.g[b];
    5 === e.status && a.i[e.i].g.delete(e.g);
    e.status = 5;
    e.i = c;
    e.g = d;
    a.i[c].g.set(d, b)
}
function Ge(a, b, c) {
    const d = ze(a)
      , e = a.g.length;
    a.g.push(d);
    d.dc = e;
    Oe(a, e, b, c);
    return e
}
function Re(a, b, c) {
    const d = a.i[b].g.get(c);
    return void 0 === d ? Ge(a, b, c) : d
}
function Z(a, b) {
    return a.i[b.i].h
}
function Ee() {
    this.type = 2;
    this.start = 0;
    this.length = Infinity;
    this.h = -1;
    this.g = ""
}
Ee.prototype.$ = function() {
    const a = [];
    a[0] = this.type;
    a[1] = this.start;
    a[2] = Infinity === this.length ? 0 : this.length;
    a[3] = this.h;
    a[4] = this.g;
    return a
}
;
Ee.prototype.H = function(a) {
    this.type = a[0];
    this.start = a[1];
    this.length = 0 === a[2] ? Infinity : a[2];
    this.h = a[3];
    this.g = a[4]
}
;
function Ue(a) {
    const b = new Ee;
    b.H(a.$());
    return b
}
function Ve(a, b) {
    return b.h === a.h && b.g === a.g && b.type === a.type
}
function We(a, b) {
    return Ve(a, b) && b.start + b.length === a.start
}
function Ia(a, b, c, d, e) {
    const g = new Ee;
    g.type = a;
    g.start = b;
    g.length = c;
    g.h = d;
    g.g = e;
    return g
}
function Ka(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        var d = b.g;
        return Ka(Z(a, b), d, c)
    }
    for (d of b.h)
        if (!(c.h === d.h && c.g === d.g || 2 === c.type || 2 === d.type || 1 !== c.type && 1 !== d.type || c.start + c.length <= d.start || d.start + d.length <= c.start))
            return Ue(d);
    return null
}
function Ja(a, b, c, d) {
    const e = a.g[b];
    if (5 === e.status)
        return b = e.g,
        Ja(Z(a, e), b, c, d);
    c = Ue(c);
    if (2 !== c.type && Ka(a, b, c))
        return 1;
    for (a = 0; a < e.h.length; a++) {
        d = e.h[a];
        if (d.start + d.length <= c.start)
            continue;
        if (c.start + c.length <= d.start)
            break;
        if (d.h !== c.h || d.g !== c.g)
            continue;
        b = c.start + c.length;
        const g = c.start - d.start
          , f = d.start + d.length - b;
        if (0 < g && 0 < f && d.type === c.type)
            return 0;
        0 < g && (d.length = g);
        if (0 >= g && 0 < f)
            d.start = b,
            d.length = f;
        else if (0 < f) {
            for (; a < e.h.length && e.h[a].start < b; )
                a++;
            e.h.splice(a, 0, Ia(d.type, b, f, d.h, d.g))
        } else
            0 >= g && (e.h.splice(a, 1),
            a--)
    }
    if (2 !== c.type) {
        a = c;
        d = !1;
        for (b = 0; b < e.h.length && !(We(a, e.h[b]) && (e.h[b].length += c.length,
        a = e.h[b],
        d = !0),
        c.start <= e.h[b].start); b++)
            ;
        d || (e.h.splice(b, 0, a),
        b++);
        for (; b < e.h.length; b++)
            if (Ve(e.h[b], a)) {
                We(e.h[b], a) && (a.length += e.h[b].length,
                e.h.splice(b, 1));
                break
            }
    }
    return 0
}
function Xe(a, b) {
    b = Se(a, b);
    if (-1 !== b.id)
        return a = H(a, b.id),
        Array.from(a.ia.keys()).filter(c=>"." !== c && ".." !== c)
}
we.prototype.pe = function(a) {
    a = Se(this, a);
    if (-1 === a.id)
        return Promise.resolve(null);
    const b = H(this, a.id);
    return Oa(this, a.id, 0, b.size)
}
;
function v(a, b, c, d) {
    for (var e, g = 0, f = 0; f < a.length; f++)
        switch (e = b[f],
        a[f]) {
        case "w":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            g += 4;
            break;
        case "d":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            g += 8;
            break;
        case "h":
            c[d++] = e & 255;
            c[d++] = e >> 8;
            g += 2;
            break;
        case "b":
            c[d++] = e;
            g += 1;
            break;
        case "s":
            var h = d
              , k = 0;
            c[d++] = 0;
            c[d++] = 0;
            g += 2;
            for (var l of e)
                Ye(l.charCodeAt(0)).forEach(function(p) {
                    c[d++] = p;
                    g += 1;
                    k++
                });
            c[h + 0] = k & 255;
            c[h + 1] = k >> 8 & 255;
            break;
        case "Q":
            v(["b", "w", "d"], [e.type, e.version, e.path], c, d),
            d += 13,
            g += 13
        }
    return g
}
function E(a, b, c) {
    let d = c.offset;
    for (var e = [], g = 0; g < a.length; g++)
        switch (a[g]) {
        case "w":
            var f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += b[d++] << 24 >>> 0;
            e.push(f);
            break;
        case "d":
            f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += b[d++] << 24 >>> 0;
            d += 4;
            e.push(f);
            break;
        case "h":
            f = b[d++];
            e.push(f + (b[d++] << 8));
            break;
        case "b":
            e.push(b[d++]);
            break;
        case "s":
            f = b[d++];
            f += b[d++] << 8;
            for (var h = "", k = new Ze, l = 0; l < f; l++) {
                var p = k.i(b[d++]);
                -1 != p && (h += String.fromCharCode(p))
            }
            e.push(h);
            break;
        case "Q":
            c.offset = d,
            f = E(["b", "w", "d"], b, c),
            d = c.offset,
            e.push({
                type: f[0],
                version: f[1],
                path: f[2]
            })
        }
    c.offset = d;
    return e
}
;function Ze() {
    this.g = new Uint8Array(5);
    this.h = 0;
    this.i = function(a) {
        this.g[this.h] = a;
        this.h++;
        switch (this.h) {
        case 1:
            if (128 > this.g[0])
                return this.h = 0,
                this.g[0];
            break;
        case 2:
            if (192 == (this.g[0] & 224) && 128 == (this.g[1] & 192))
                return this.h = 0,
                (this.g[0] & 31) << 6 | this.g[1] & 63
        }
        return -1
    }
}
function Ye(a) {
    if (128 > a)
        return [a];
    if (2048 > a)
        return [192 | a >> 6 & 31, 128 | a & 63]
}
function Te(a) {
    for (var b = 0, c = 0; c < a.length; c++)
        b += 128 > a.charCodeAt(c) ? 1 : 2;
    return b
}
;function $e(a) {
    function b(m) {
        !m.altKey && h[56] && g(56, !1);
        return e(m, !1)
    }
    function c(m) {
        !m.altKey && h[56] && g(56, !1);
        return e(m, !0)
    }
    function d() {
        for (var m = Object.keys(h), r, x = 0; x < m.length; x++)
            r = +m[x],
            h[r] && g(r, !1);
        h = {}
    }
    function e(m, r) {
        if (k.v && (m.shiftKey && m.ctrlKey && (73 === m.keyCode || 74 === m.keyCode || 75 === m.keyCode) || !k.Ie ? 0 : m.target ? m.target.classList.contains("phone_keyboard") || "INPUT" !== m.target.nodeName && "TEXTAREA" !== m.target.nodeName : 1)) {
            a: {
                if (void 0 !== m.code) {
                    var x = t[m.code];
                    if (void 0 !== x)
                        break a
                }
                x = l[m.keyCode]
            }
            if (x)
                return g(x, r, m.repeat),
                m.preventDefault && m.preventDefault(),
                !1;
            console.log("Missing char in map: keyCode=" + (m.keyCode || -1).toString(16) + " code=" + m.code)
        }
    }
    function g(m, r, x) {
        if (r)
            h[m] && !x && g(m, !1);
        else if (!h[m])
            return;
        (h[m] = r) || (m |= 128);
        255 < m ? (f(m >> 8),
        f(m & 255)) : f(m)
    }
    function f(m) {
        k.v.send("keyboard-code", m)
    }
    var h = {}
      , k = this;
    this.Ie = !0;
    var l = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 0, 0, 0, 28, 0, 0, 42, 29, 56, 0, 58, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 57, 57417, 57425, 57423, 57415, 57419, 57416, 57421, 80, 0, 0, 0, 0, 82, 83, 0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 39, 0, 13, 0, 0, 0, 30, 48, 46, 32, 18, 33, 34, 35, 23, 36, 37, 38, 50, 49, 24, 25, 16, 19, 31, 20, 22, 47, 17, 45, 21, 44, 57435, 57436, 57437, 0, 0, 82, 79, 80, 81, 75, 76, 77, 71, 72, 73, 0, 0, 0, 0, 0, 0, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 13, 51, 12, 52, 53, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 43, 27, 40, 0, 57435, 57400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      , p = {
        8: 8,
        10: 13,
        32: 32,
        39: 222,
        44: 188,
        45: 189,
        46: 190,
        47: 191,
        48: 48,
        49: 49,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        56: 56,
        57: 57,
        59: 186,
        61: 187,
        91: 219,
        92: 220,
        93: 221,
        96: 192,
        97: 65,
        98: 66,
        99: 67,
        100: 68,
        101: 69,
        102: 70,
        103: 71,
        104: 72,
        105: 73,
        106: 74,
        107: 75,
        108: 76,
        109: 77,
        110: 78,
        111: 79,
        112: 80,
        113: 81,
        114: 82,
        115: 83,
        116: 84,
        117: 85,
        118: 86,
        119: 87,
        120: 88,
        121: 89,
        122: 90
    }
      , q = {
        33: 49,
        34: 222,
        35: 51,
        36: 52,
        37: 53,
        38: 55,
        40: 57,
        41: 48,
        42: 56,
        43: 187,
        58: 186,
        60: 188,
        62: 190,
        63: 191,
        64: 50,
        65: 65,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        79: 79,
        80: 80,
        81: 81,
        82: 82,
        83: 83,
        84: 84,
        85: 85,
        86: 86,
        87: 87,
        88: 88,
        89: 89,
        90: 90,
        94: 54,
        95: 189,
        123: 219,
        124: 220,
        125: 221,
        126: 192
    }
      , t = {
        Escape: 1,
        Digit1: 2,
        Digit2: 3,
        Digit3: 4,
        Digit4: 5,
        Digit5: 6,
        Digit6: 7,
        Digit7: 8,
        Digit8: 9,
        Digit9: 10,
        Digit0: 11,
        Minus: 12,
        Equal: 13,
        Backspace: 14,
        Tab: 15,
        KeyQ: 16,
        KeyW: 17,
        KeyE: 18,
        KeyR: 19,
        KeyT: 20,
        KeyY: 21,
        KeyU: 22,
        KeyI: 23,
        KeyO: 24,
        KeyP: 25,
        BracketLeft: 26,
        BracketRight: 27,
        Enter: 28,
        ControlLeft: 29,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        Semicolon: 39,
        Quote: 40,
        Backquote: 41,
        ShiftLeft: 42,
        Backslash: 43,
        KeyZ: 44,
        KeyX: 45,
        KeyC: 46,
        KeyV: 47,
        KeyB: 48,
        KeyN: 49,
        KeyM: 50,
        Comma: 51,
        Period: 52,
        Slash: 53,
        ShiftRight: 54,
        NumpadMultiply: 55,
        AltLeft: 56,
        Space: 57,
        CapsLock: 58,
        F1: 59,
        F2: 60,
        F3: 61,
        F4: 62,
        F5: 63,
        F6: 64,
        F7: 65,
        F8: 66,
        F9: 67,
        F10: 68,
        NumLock: 69,
        ScrollLock: 70,
        Numpad7: 71,
        Numpad8: 72,
        Numpad9: 73,
        NumpadSubtract: 74,
        Numpad4: 75,
        Numpad5: 76,
        Numpad6: 77,
        NumpadAdd: 78,
        Numpad1: 79,
        Numpad2: 80,
        Numpad3: 81,
        Numpad0: 82,
        NumpadDecimal: 83,
        IntlBackslash: 86,
        F11: 87,
        F12: 88,
        NumpadEnter: 57372,
        ControlRight: 57373,
        NumpadDivide: 57397,
        AltRight: 57400,
        Home: 57415,
        ArrowUp: 57416,
        PageUp: 57417,
        ArrowLeft: 57419,
        ArrowRight: 57421,
        End: 57423,
        ArrowDown: 57424,
        PageDown: 57425,
        Insert: 57426,
        Delete: 57427,
        OSLeft: 57435,
        OSRight: 57436,
        ContextMenu: 57437
    };
    this.v = a;
    this.va = function() {
        "undefined" !== typeof window && (window.removeEventListener("keyup", b, !1),
        window.removeEventListener("keydown", c, !1),
        window.removeEventListener("blur", d, !1))
    }
    ;
    this.hb = function() {
        "undefined" !== typeof window && (this.va(),
        window.addEventListener("keyup", b, !1),
        window.addEventListener("keydown", c, !1),
        window.addEventListener("blur", d, !1))
    }
    ;
    this.hb();
    this.g = function(m) {
        m = {
            keyCode: m
        };
        e(m, !0);
        e(m, !1)
    }
    ;
    this.Fj = function(m) {
        var r = m.charCodeAt(0);
        r in p ? this.g(p[r]) : r in q ? (f(42),
        this.g(q[r]),
        f(170)) : console.log("ascii -> keyCode not found: ", r, m)
    }
}
;function af(a, b) {
    function c(w) {
        if (!x.enabled || !x.Ie)
            return !1;
        var D = b || document.body, I;
        if (!(I = document.pointerLockElement))
            a: {
                for (w = w.target; w.parentNode; ) {
                    if (w === D) {
                        I = !0;
                        break a
                    }
                    w = w.parentNode
                }
                I = !1
            }
        return I
    }
    function d(w) {
        c(w) && (w = w.changedTouches) && w.length && (w = w[w.length - 1],
        m = w.clientX,
        r = w.clientY)
    }
    function e() {
        if (p || t || q)
            x.v.send("mouse-click", [!1, !1, !1]),
            p = t = q = !1
    }
    function g(w) {
        if (x.v && c(w) && x.Zc) {
            var D = 0
              , I = 0
              , O = w.changedTouches;
            O ? O.length && (O = O[O.length - 1],
            D = O.clientX - m,
            I = O.clientY - r,
            m = O.clientX,
            r = O.clientY,
            w.preventDefault()) : "number" === typeof w.movementX ? (D = w.movementX,
            I = w.movementY) : "number" === typeof w.webkitMovementX ? (D = w.webkitMovementX,
            I = w.webkitMovementY) : "number" === typeof w.mozMovementX ? (D = w.mozMovementX,
            I = w.mozMovementY) : (D = w.clientX - m,
            I = w.clientY - r,
            m = w.clientX,
            r = w.clientY);
            x.v.send("mouse-delta", [.15 * D, -(.15 * I)]);
            b && x.v.send("mouse-absolute", [w.pageX - b.offsetLeft, w.pageY - b.offsetTop, b.offsetWidth, b.offsetHeight])
        }
    }
    function f(w) {
        c(w) && k(w, !0)
    }
    function h(w) {
        c(w) && k(w, !1)
    }
    function k(w, D) {
        x.v && (1 === w.which ? p = D : 2 === w.which ? t = D : 3 === w.which && (q = D),
        x.v.send("mouse-click", [p, t, q]),
        w.preventDefault())
    }
    function l(w) {
        if (c(w)) {
            var D = w.wheelDelta || -w.detail;
            0 > D ? D = -1 : 0 < D && (D = 1);
            x.v.send("mouse-wheel", [D, 0]);
            w.preventDefault()
        }
    }
    var p = !1
      , q = !1
      , t = !1
      , m = 0
      , r = 0
      , x = this;
    this.enabled = !1;
    this.Ie = !0;
    this.v = a;
    this.v.register("mouse-enable", function(w) {
        this.enabled = w
    }, this);
    this.Zc = !1;
    this.v.register("emulator-stopped", function() {
        this.Zc = !1
    }, this);
    this.v.register("emulator-started", function() {
        this.Zc = !0
    }, this);
    this.va = function() {
        "undefined" !== typeof window && (window.removeEventListener("touchstart", d, !1),
        window.removeEventListener("touchend", e, !1),
        window.removeEventListener("touchmove", g, !1),
        window.removeEventListener("mousemove", g, !1),
        window.removeEventListener("mousedown", f, !1),
        window.removeEventListener("mouseup", h, !1),
        window.removeEventListener("wheel", l, {
            passive: !1
        }))
    }
    ;
    this.hb = function() {
        "undefined" !== typeof window && (this.va(),
        window.addEventListener("touchstart", d, !1),
        window.addEventListener("touchend", e, !1),
        window.addEventListener("touchmove", g, !1),
        window.addEventListener("mousemove", g, !1),
        window.addEventListener("mousedown", f, !1),
        window.addEventListener("mouseup", h, !1),
        window.addEventListener("wheel", l, {
            passive: !1
        }))
    }
    ;
    this.hb()
}
;function bf(a) {
    if ("undefined" !== typeof window)
        if (window.AudioContext || window.webkitAudioContext) {
            var b = window.AudioWorklet ? cf : df;
            this.v = a;
            this.U = window.AudioContext ? new AudioContext : new webkitAudioContext;
            this.Qe = new ef(a,this.U);
            this.h = new ff(a,this.U,this.Qe);
            this.g = new b(a,this.U,this.Qe);
            this.h.start();
            a.register("emulator-stopped", function() {
                this.U.suspend()
            }, this);
            a.register("emulator-started", function() {
                this.U.resume()
            }, this);
            a.register("speaker-confirm-initialized", function() {
                a.send("speaker-has-initialized")
            }, this);
            a.send("speaker-has-initialized")
        } else
            console.warn("Web browser doesn't support Web Audio API")
}
bf.prototype.va = function() {
    this.U && this.U.close();
    this.g && this.g.Jb && this.g.Jb.port.close()
}
;
function ef(a, b) {
    function c(d) {
        return function(e) {
            d.gain.setValueAtTime(e, this.U.currentTime)
        }
    }
    this.U = b;
    this.sources = new Map;
    this.eg = this.dg = this.F = this.D = this.B = 1;
    this.i = this.U.createBiquadFilter();
    this.j = this.U.createBiquadFilter();
    this.i.type = "highshelf";
    this.j.type = "highshelf";
    this.i.frequency.setValueAtTime(2E3, this.U.currentTime);
    this.j.frequency.setValueAtTime(2E3, this.U.currentTime);
    this.g = this.U.createBiquadFilter();
    this.h = this.U.createBiquadFilter();
    this.g.type = "lowshelf";
    this.h.type = "lowshelf";
    this.g.frequency.setValueAtTime(200, this.U.currentTime);
    this.h.frequency.setValueAtTime(200, this.U.currentTime);
    this.l = this.U.createGain();
    this.o = this.U.createGain();
    this.C = this.U.createChannelMerger(2);
    this.I = this.i;
    this.L = this.j;
    this.i.connect(this.g);
    this.g.connect(this.l);
    this.l.connect(this.C, 0, 0);
    this.j.connect(this.h);
    this.h.connect(this.o);
    this.o.connect(this.C, 0, 1);
    this.C.connect(this.U.destination);
    a.register("mixer-connect", function(d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.connect(e)
    }, this);
    a.register("mixer-disconnect", function(d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.disconnect(e)
    }, this);
    a.register("mixer-volume", function(d) {
        var e = d[0]
          , g = d[1];
        d = Math.pow(10, d[2] / 20);
        e = 0 === e ? this : this.sources.get(e);
        void 0 === e || e.af(d, g)
    }, this);
    a.register("mixer-gain-left", function(d) {
        this.dg = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-gain-right", function(d) {
        this.eg = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-treble-left", c(this.i), this);
    a.register("mixer-treble-right", c(this.j), this);
    a.register("mixer-bass-left", c(this.g), this);
    a.register("mixer-bass-right", c(this.h), this)
}
function gf(a, b, c) {
    b = new hf(a.U,b,a.I,a.L);
    a.sources.has(c);
    a.sources.set(c, b);
    return b
}
ef.prototype.af = function(a, b) {
    void 0 === b && (b = 2);
    switch (b) {
    case 0:
        this.D = a;
        break;
    case 1:
        this.F = a;
        break;
    case 2:
        this.B = a;
        break;
    default:
        return
    }
    this.update()
}
;
ef.prototype.update = function() {
    var a = this.B * this.F * this.eg;
    this.l.gain.setValueAtTime(this.B * this.D * this.dg, this.U.currentTime);
    this.o.gain.setValueAtTime(a, this.U.currentTime)
}
;
function hf(a, b, c, d) {
    this.U = a;
    this.o = this.l = !0;
    this.D = this.C = this.j = this.g = 1;
    this.B = a.createChannelSplitter(2);
    this.h = a.createGain();
    this.i = a.createGain();
    b.connect(this.B);
    this.B.connect(this.h, 0);
    this.h.connect(c);
    this.B.connect(this.i, 1);
    this.i.connect(d)
}
hf.prototype.update = function() {
    var a = this.o * this.g * this.j * this.D;
    this.h.gain.setValueAtTime(this.l * this.g * this.j * this.C, this.U.currentTime);
    this.i.gain.setValueAtTime(a, this.U.currentTime)
}
;
hf.prototype.connect = function(a) {
    var b = !a || 2 === a;
    if (b || 0 === a)
        this.l = !0;
    if (b || 1 === a)
        this.o = !0;
    this.update()
}
;
hf.prototype.disconnect = function(a) {
    var b = !a || 2 === a;
    if (b || 0 === a)
        this.l = !1;
    if (b || 1 === a)
        this.o = !1;
    this.update()
}
;
hf.prototype.af = function(a, b) {
    void 0 === b && (b = 2);
    switch (b) {
    case 0:
        this.C = a;
        break;
    case 1:
        this.D = a;
        break;
    case 2:
        this.j = a;
        break;
    default:
        return
    }
    this.update()
}
;
function ff(a, b, c) {
    this.Jd = b.createOscillator();
    this.Jd.type = "square";
    this.Jd.frequency.setValueAtTime(440, b.currentTime);
    this.g = gf(c, this.Jd, 1);
    this.g.disconnect();
    a.register("pcspeaker-enable", function() {
        var d = c.sources.get(1);
        void 0 === d || d.connect(void 0)
    }, this);
    a.register("pcspeaker-disable", function() {
        var d = c.sources.get(1);
        void 0 === d || d.disconnect(void 0)
    }, this);
    a.register("pcspeaker-update", function(d) {
        var e = d[1]
          , g = 0;
        3 === d[0] && (g = Math.min(1193181.6665999999 / e, this.Jd.frequency.maxValue),
        g = Math.max(g, 0));
        this.Jd.frequency.setValueAtTime(g, b.currentTime)
    }, this)
}
ff.prototype.start = function() {
    this.Jd.start()
}
;
function cf(a, b, c) {
    this.v = a;
    this.U = b;
    this.enabled = !1;
    this.Ya = 48E3;
    b = function() {
        function e(h) {
            if (0 === h)
                return 1;
            h *= Math.PI;
            return Math.sin(h) / h
        }
        function g() {
            var h = Reflect.construct(AudioWorkletProcessor, [], g);
            h.D = 3;
            h.l = Array(1024);
            h.B = 0;
            h.I = 0;
            h.o = 0;
            h.F = h.l.length;
            h.C = 0;
            h.L = f;
            h.g = f;
            h.O = 1;
            h.j = 0;
            h.i = 0;
            h.h = 0;
            h.port.onmessage = k=>{
                switch (k.data.type) {
                case "queue":
                    h.ba(k.data.value);
                    break;
                case "sampling-rate":
                    h.O = k.data.value / sampleRate
                }
            }
            ;
            return h
        }
        var f = [new Float32Array(256), new Float32Array(256)];
        Reflect.setPrototypeOf(g.prototype, AudioWorkletProcessor.prototype);
        Reflect.setPrototypeOf(g, AudioWorkletProcessor);
        g.prototype.process = g.prototype.process = function(h, k) {
            for (h = 0; h < k[0][0].length; h++) {
                for (var l = 0, p = 0, q = this.h + this.D, t = this.h - this.D + 1; t <= q; t++) {
                    var m = this.j + t;
                    l += this.P(m, 0) * this.T(this.i - t);
                    p += this.P(m, 1) * this.T(this.i - t)
                }
                if (isNaN(l) || isNaN(p))
                    l = p = 0;
                k[0][0][h] = l;
                k[0][1][h] = p;
                this.i += this.O;
                this.h = Math.floor(this.i)
            }
            k = this.h;
            k += this.D + 2;
            this.i -= this.h;
            this.j += this.h;
            this.h = 0;
            this.X(k);
            return !0
        }
        ;
        g.prototype.T = function(h) {
            return e(h) * e(h / this.D)
        }
        ;
        g.prototype.P = function(h, k) {
            return 0 > h ? (h += this.L[0].length,
            this.L[k][h]) : this.g[k][h]
        }
        ;
        g.prototype.X = function(h) {
            var k = this.g[0].length;
            k - this.j < h && (this.Y(),
            this.j -= k)
        }
        ;
        g.prototype.Y = function() {
            this.L = this.g;
            this.g = this.V();
            var h = this.g[0].length;
            if (256 > h) {
                for (var k = this.B, l = 0; 256 > h && l < this.o; )
                    h += this.l[k][0].length,
                    k = k + 1 & this.F - 1,
                    l++;
                h = Math.max(h, 256);
                h = [new Float32Array(h), new Float32Array(h)];
                h[0].set(this.g[0]);
                h[1].set(this.g[1]);
                k = this.g[0].length;
                for (var p = 0; p < l; p++) {
                    var q = this.V();
                    h[0].set(q[0], k);
                    h[1].set(q[1], k);
                    k += q[0].length
                }
                this.g = h
            }
            this.lc()
        }
        ;
        g.prototype.lc = function() {
            1024 > this.C / this.O && this.port.postMessage({
                type: "pump"
            })
        }
        ;
        g.prototype.ba = function(h) {
            this.o < this.F && (this.l[this.I] = h,
            this.I = this.I + 1 & this.F - 1,
            this.o++,
            this.C += h[0].length,
            this.lc())
        }
        ;
        g.prototype.V = function() {
            if (!this.o)
                return f;
            var h = this.l[this.B];
            this.l[this.B] = null;
            this.B = this.B + 1 & this.F - 1;
            this.o--;
            this.C -= h[0].length;
            return h
        }
        ;
        registerProcessor("dac-processor", g)
    }
    .toString();
    var d = URL.createObjectURL(new Blob([b.substring(b.indexOf("{") + 1, b.lastIndexOf("}"))],{
        type: "application/javascript"
    }));
    this.Jb = null;
    this.g = this.U.createGain();
    this.U.audioWorklet.addModule(d).then(()=>{
        URL.revokeObjectURL(d);
        this.Jb = new AudioWorkletNode(this.U,"dac-processor",{
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [2],
            parameterData: {},
            processorOptions: {}
        });
        this.Jb.port.postMessage({
            type: "sampling-rate",
            value: this.Ya
        });
        this.Jb.port.onmessage = e=>{
            switch (e.data.type) {
            case "pump":
                this.lc()
            }
        }
        ;
        this.Jb.connect(this.g)
    }
    );
    this.h = gf(c, this.g, 2);
    this.h.g = 3;
    a.register("dac-send-data", function(e) {
        this.yf(e)
    }, this);
    a.register("dac-enable", function() {
        this.enabled = !0
    }, this);
    a.register("dac-disable", function() {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function(e) {
        this.Ya = e;
        this.Jb && this.Jb.port.postMessage({
            type: "sampling-rate",
            value: e
        })
    }, this)
}
cf.prototype.yf = function(a) {
    this.Jb && this.Jb.port.postMessage({
        type: "queue",
        value: a
    }, [a[0].buffer, a[1].buffer])
}
;
cf.prototype.lc = function() {
    this.enabled && this.v.send("dac-request-data")
}
;
function df(a, b, c) {
    this.v = a;
    this.U = b;
    this.enabled = !1;
    this.Ya = 22050;
    this.g = 0;
    this.ne = 1;
    this.Se = this.U.createBiquadFilter();
    this.Se.type = "lowpass";
    this.i = this.Se;
    this.h = gf(c, this.i, 2);
    this.h.g = 3;
    a.register("dac-send-data", function(d) {
        this.yf(d)
    }, this);
    a.register("dac-enable", function() {
        this.enabled = !0;
        this.lc()
    }, this);
    a.register("dac-disable", function() {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function(d) {
        this.Ya = d;
        this.ne = Math.ceil(8E3 / d);
        this.Se.frequency.setValueAtTime(d / 2, this.U.currentTime)
    }, this)
}
df.prototype.yf = function(a) {
    var b = a[0].length
      , c = b / this.Ya;
    if (1 < this.ne) {
        var d = this.U.createBuffer(2, b * this.ne, this.Ya * this.ne);
        for (var e = d.getChannelData(0), g = d.getChannelData(1), f = 0, h = 0; h < b; h++)
            for (var k = 0; k < this.ne; k++,
            f++)
                e[f] = a[0][h],
                g[f] = a[1][h]
    } else
        d = this.U.createBuffer(2, b, this.Ya),
        d.copyToChannel ? (d.copyToChannel(a[0], 0),
        d.copyToChannel(a[1], 1)) : (d.getChannelData(0).set(a[0]),
        d.getChannelData(1).set(a[1]));
    a = this.U.createBufferSource();
    a.buffer = d;
    a.connect(this.Se);
    a.addEventListener("ended", this.lc.bind(this));
    d = this.U.currentTime;
    if (this.g < d)
        for (this.g = d,
        d = .2 - c,
        b = 0; b <= d; )
            b += c,
            this.g += c,
            setTimeout(()=>this.lc(), 1E3 * b);
    a.start(this.g);
    this.g += c;
    setTimeout(()=>this.lc(), 0)
}
;
df.prototype.lc = function() {
    this.enabled && (.2 < this.g - this.U.currentTime || this.v.send("dac-request-data"))
}
;
function jf(a, b) {
    function c(h) {
        f.v && f.enabled && (f.h(h.which),
        h.preventDefault())
    }
    function d(h) {
        var k = h.which;
        8 === k ? (f.h(127),
        h.preventDefault()) : 9 === k && (f.h(9),
        h.preventDefault())
    }
    function e(h) {
        if (f.enabled) {
            for (var k = h.clipboardData.getData("text/plain"), l = 0; l < k.length; l++)
                f.h(k.charCodeAt(l));
            h.preventDefault()
        }
    }
    function g(h) {
        h.target !== a && a.blur()
    }
    var f = this;
    this.enabled = !0;
    this.v = b;
    this.text = "";
    this.j = !1;
    this.i = 0;
    this.v.register("serial0-output-char", function(h) {
        this.Ej(h)
    }, this);
    this.va = function() {
        a.removeEventListener("keypress", c, !1);
        a.removeEventListener("keydown", d, !1);
        a.removeEventListener("paste", e, !1);
        window.removeEventListener("mousedown", g, !1)
    }
    ;
    this.hb = function() {
        this.va();
        a.style.display = "block";
        a.addEventListener("keypress", c, !1);
        a.addEventListener("keydown", d, !1);
        a.addEventListener("paste", e, !1);
        window.addEventListener("mousedown", g, !1)
    }
    ;
    this.hb();
    this.Ej = function(h) {
        "\b" === h ? (this.text = this.text.slice(0, -1),
        this.update()) : "\r" !== h && (this.text += h,
        "\n" === h && (this.j = !0),
        this.update())
    }
    ;
    this.update = function() {
        var h = Date.now()
          , k = h - this.i;
        16 > k ? void 0 === this.g && (this.g = setTimeout(()=>{
            this.g = void 0;
            this.i = Date.now();
            this.l()
        }
        , 16 - k)) : (void 0 !== this.g && (clearTimeout(this.g),
        this.g = void 0),
        this.i = h,
        this.l())
    }
    ;
    this.l = function() {
        a.value = this.text;
        this.j && (this.j = !1,
        a.scrollTop = 1E9)
    }
    ;
    this.h = function(h) {
        f.v && f.v.send("serial0-input", h)
    }
}
function kf(a, b) {
    this.element = a;
    if (window.Terminal) {
        var c = this.g = new window.Terminal;
        c.setOption("logLevel", "off");
        c.write("This is the serial console. Whatever you type or paste here will be sent to COM1");
        var d = c.onData(function(e) {
            for (let g = 0; g < e.length; g++)
                b.send("serial0-input", e.charCodeAt(g))
        });
        b.register("serial0-output-char", function(e) {
            c.write(e)
        }, this);
        this.va = function() {
            d.dispose();
            c.dispose()
        }
    }
}
kf.prototype.show = function() {
    this.g && this.g.open(this.element)
}
;
function lf(a, b) {
    this.v = b;
    this.g = void 0;
    this.h = [];
    this.url = a;
    this.i = Date.now() - 1E4;
    this.v.register("net0-send", function(c) {
        this.send(c)
    }, this)
}
n = lf.prototype;
n.Ih = function(a) {
    this.v && this.v.send("net0-receive", new Uint8Array(a.data))
}
;
n.Gh = function() {
    this.connect();
    setTimeout(this.connect.bind(this), 1E4)
}
;
n.Jh = function() {
    for (var a = 0; a < this.h.length; a++)
        this.send(this.h[a]);
    this.h = []
}
;
n.Hh = function() {}
;
n.va = function() {
    this.g && this.g.close()
}
;
n.connect = function() {
    if ("undefined" !== typeof WebSocket) {
        if (this.g) {
            var a = this.g.readyState;
            if (0 === a || 1 === a)
                return
        }
        this.i + 1E4 > Date.now() || (this.i = Date.now(),
        this.g = new WebSocket(this.url),
        this.g.binaryType = "arraybuffer",
        this.g.onopen = this.Jh.bind(this),
        this.g.onmessage = this.Ih.bind(this),
        this.g.onclose = this.Gh.bind(this),
        this.g.onerror = this.Hh.bind(this))
    }
}
;
n.send = function(a) {
    this.g && 1 === this.g.readyState ? this.g.send(a) : (this.h.push(a),
    128 < this.h.length && (this.h = this.h.slice(-64)),
    this.connect())
}
;
function Xa(a) {
    this.Ge = !1;
    var b = ce();
    this.v = b[0];
    this.Gd = b[1];
    var c, d;
    const e = new WebAssembly.Table({
        element: "anyfunc",
        initial: 1924
    });
    b = {
        cpu_exception_hook: f=>this.cpu_exception_hook && this.cpu_exception_hook(f),
        hlt_op: function() {
            var f = c;
            0 === (f.o() & 512) && f.v.send("cpu-event-halt");
            f.h[0] = 1;
            mb(f)
        },
        abort: function() {},
        microtick: nb,
        get_rand_int: function() {
            return zb()
        },
        pic_acknowledge: function() {
            me(c)
        },
        io_port_read8: function(f) {
            f = c.A.ports[f];
            return f.od.call(f.oa)
        },
        io_port_read16: function(f) {
            f = c.A.ports[f];
            return f.Na.call(f.oa)
        },
        io_port_read32: function(f) {
            f = c.A.ports[f];
            return f.oe.call(f.oa)
        },
        io_port_write8: function(f, h) {
            f = c.A.ports[f];
            f.df.call(f.oa, h)
        },
        io_port_write16: function(f, h) {
            f = c.A.ports[f];
            f.ye.call(f.oa, h)
        },
        io_port_write32: function(f, h) {
            f = c.A.ports[f];
            f.Lc.call(f.oa, h)
        },
        mmap_read8: function(f) {
            return c.i[f >>> 17](f)
        },
        mmap_read16: function(f) {
            var h = c.i[f >>> 17];
            return h(f) | h(f + 1 | 0) << 8
        },
        mmap_read32: function(f) {
            return c.pa[f >>> 17](f)
        },
        mmap_write8: function(f, h) {
            c.l[f >>> 17](f, h)
        },
        mmap_write16: function(f, h) {
            var k = c.l[f >>> 17];
            k(f, h & 255);
            k(f + 1 | 0, h >> 8)
        },
        mmap_write32: function(f, h) {
            c.j[f >>> 17](f, h)
        },
        mmap_write64: function(f, h, k) {
            var l = c.j[f >>> 17];
            l(f, h);
            l(f + 4, k)
        },
        mmap_write128: function(f, h, k, l, p) {
            var q = c.j[f >>> 17];
            q(f, h);
            q(f + 4, k);
            q(f + 8, l);
            q(f + 12, p)
        },
        log_from_wasm: function(f, h) {
            [...(new Uint8Array(d.buffer,f >>> 0,h >>> 0))]
        },
        console_log_from_wasm: function(f, h) {
            f = String.fromCharCode(...(new Uint8Array(d.buffer,f >>> 0,h >>> 0)));
            console.error(f)
        },
        dbg_trace_from_wasm: function() {},
        codegen_finalize: (f,h,k,l,p)=>{
            le(c, f, h, k, l, p)
        }
        ,
        jit_clear_func: f=>{
            c.xa.Mf.set(f + 1024, null)
        }
        ,
        jit_clear_all_funcs: ()=>{
            const f = c.xa.Mf;
            for (let h = 0; 900 > h; h++)
                f.set(1024 + h, null)
        }
        ,
        __indirect_function_table: e
    };
    let g = a.wasm_fn;
    g || (g = f=>new Promise(h=>{
        let k = "v86.wasm"
          , l = "v86-fallback.wasm";
        if (a.wasm_path) {
            k = a.wasm_path;
            const p = k.lastIndexOf("/");
            l = (-1 === p ? "" : k.substr(0, p)) + "/" + l
        } else
            "undefined" === typeof window && "string" === typeof __dirname ? (k = __dirname + "/" + k,
            l = __dirname + "/" + l) : (k = "build/" + k,
            l = "build/" + l);
        Gb(k, {
            done: async p=>{
                try {
                    const {instance: q} = await WebAssembly.instantiate(p, f);
                    h(q.exports)
                } catch (q) {
                    Gb(l, {
                        done: async t=>{
                            ({instance: t} = await WebAssembly.instantiate(t, f));
                            h(t.exports)
                        }
                    })
                }
            }
            ,
            progress: p=>{
                this.Gd.send("download-progress", {
                    ee: 0,
                    de: 1,
                    fe: k,
                    lengthComputable: p.lengthComputable,
                    total: p.total,
                    loaded: p.loaded
                })
            }
        })
    }
    ));
    g({
        env: b
    }).then(f=>{
        d = f.memory;
        f.rust_init();
        f = this.h = new ib(this.Gd,{
            exports: f,
            Mf: e
        });
        c = f.s;
        mf(this, f, a)
    }
    )
}
async function mf(a, b, c) {
    function d(m, r) {
        switch (m) {
        case "hda":
            f.M = this.ac.hda = r;
            break;
        case "hdb":
            f.Ke = this.ac.hdb = r;
            break;
        case "cdrom":
            f.ga = this.ac.cdrom = r;
            break;
        case "fda":
            f.ma = this.ac.fda = r;
            break;
        case "fdb":
            f.Zf = this.ac.fdb = r;
            break;
        case "multiboot":
            f.ed = this.ac.multiboot = r.buffer;
            break;
        case "bzimage":
            f.vb = this.ac.bzimage = r.buffer;
            break;
        case "initrd":
            f.Xc = this.ac.initrd = r.buffer;
            break;
        case "bios":
            f.Bd = r.buffer;
            break;
        case "vga_bios":
            f.Oj = r.buffer;
            break;
        case "initial_state":
            f.Wc = r.buffer;
            break;
        case "fs9p_json":
            f.cg = r
        }
    }
    function e(m, r) {
        if (r)
            if (r.get && r.set && r.load)
                h.push({
                    name: m,
                    bd: r
                });
            else {
                if ("bios" === m || "vga_bios" === m || "initial_state" === m || "multiboot" === m || "bzimage" === m || "initrd" === m)
                    r.async = !1;
                r.buffer instanceof ArrayBuffer ? (r = new tb(r.buffer),
                h.push({
                    name: m,
                    bd: r
                })) : "undefined" !== typeof File && r.buffer instanceof File ? (void 0 === r.async && (r.async = 268435456 <= r.buffer.size),
                r = r.async ? new wb(r.buffer) : new db(r.buffer),
                h.push({
                    name: m,
                    bd: r
                })) : r.url && (r.async ? (r = r.aa ? new vb(r.url,r.size,r.J) : new ub(r.url,r.size,r.J),
                h.push({
                    name: m,
                    bd: r
                })) : h.push({
                    name: m,
                    url: r.url,
                    size: r.size
                }))
            }
    }
    async function g() {
        if (f.Db && f.cg) {
            if (!f.Wc) {
                var m = f.Db
                  , r = f.cg;
                if (3 !== r.version)
                    throw "The filesystem JSON format has changed. Please update your fs2json (https://github.com/copy/fs2json) and recreate the filesystem JSON.";
                var x = r.fsroot;
                m.o = r.size;
                for (r = 0; r < x.length; r++)
                    ye(m, x[r], 0)
            }
            if (c.bzimage_initrd_from_filesystem) {
                const {hh: w, Oh: D} = nf(f.Db)
                  , [I,O] = await Promise.all([f.Db.pe(D), f.Db.pe(w)]);
                d.call(this, "initrd", new tb(I.buffer));
                d.call(this, "bzimage", new tb(O.buffer))
            }
        }
        this.Qd && this.Qd.show && this.Qd.show();
        this.v.send("cpu-init", f);
        f.Wc && (b.Nd(f.Wc),
        f.Wc = void 0);
        c.autostart && this.v.send("cpu-run");
        this.Gd.send("emulator-loaded")
    }
    a.v.register("emulator-stopped", function() {
        this.Ge = !1
    }, a);
    a.v.register("emulator-started", function() {
        this.Ge = !0
    }, a);
    var f = {};
    a.ac = {
        fda: void 0,
        fdb: void 0,
        hda: void 0,
        hdb: void 0,
        cdrom: void 0
    };
    f.ya = c.acpi;
    f.Rh = !0;
    f.uk = c.log_level;
    f.G = c.memory_size || 67108864;
    f.ha = c.vga_memory_size || 8388608;
    f.oc = c.boot_order || 531;
    f.Dh = c.fastboot || !1;
    f.ma = void 0;
    f.Zf = void 0;
    f.te = c.uart1;
    f.ue = c.uart2;
    f.ve = c.uart3;
    f.Pc = c.cmdline;
    f.vf = c.preserve_mac_from_state_image;
    f.Gb = c.mac_address_translation;
    f.Dd = c.cpuid_level;
    c.network_adapter ? a.o = c.network_adapter(a.v) : c.network_relay_url && (a.o = new lf(c.network_relay_url,a.v));
    f.Bh = !0;
    c.disable_keyboard || (a.l = new $e(a.v));
    c.disable_mouse || (a.j = new af(a.v,c.screen_container));
    c.screen_container ? a.g = new Va(c.screen_container,a.v) : c.screen_dummy && (a.g = new of(a.v));
    c.serial_container && (a.Qd = new jf(c.serial_container,a.v));
    c.serial_container_xtermjs && (a.Qd = new kf(c.serial_container_xtermjs,a.v));
    c.disable_speaker || (a.i = new bf(a.v));
    var h = [];
    c.state && console.warn("Warning: Unknown option 'state'. Did you mean 'initial_state'?");
    for (var k = "bios vga_bios cdrom hda hdb fda fdb initial_state multiboot bzimage initrd".split(" "), l = 0; l < k.length; l++)
        e(k[l], c[k[l]]);
    if (c.filesystem) {
        k = c.filesystem.fh;
        l = c.filesystem.Ce;
        let m = new pf;
        l && (m = new qf(m,l));
        f.Db = a.Db = new we(m);
        if (k) {
            if ("object" === typeof k) {
                var p = k.size;
                k = k.url
            }
            h.push({
                name: "fs9p_json",
                url: k,
                size: p,
                zd: !0
            })
        }
    }
    var q = h.length
      , t = function(m) {
        if (m === q)
            setTimeout(g.bind(this), 0);
        else {
            var r = h[m];
            r.bd ? (r.bd.onload = function() {
                d.call(this, r.name, r.bd);
                t(m + 1)
            }
            .bind(this),
            r.bd.load()) : Gb(r.url, {
                done: function(x) {
                    d.call(this, r.name, r.zd ? x : new tb(x));
                    t(m + 1)
                }
                .bind(this),
                progress: function(x) {
                    200 === x.target.status ? a.Gd.send("download-progress", {
                        ee: m,
                        de: q,
                        fe: r.url,
                        lengthComputable: x.lengthComputable,
                        total: x.total || r.size,
                        loaded: x.loaded
                    }) : a.Gd.send("download-error", {
                        ee: m,
                        de: q,
                        fe: r.url,
                        request: x.target
                    })
                },
                zd: r.zd
            })
        }
    }
    .bind(a);
    t(0)
}
function nf(a) {
    const b = (Xe(a, "/") || []).map(e=>"/" + e);
    a = (Xe(a, "/boot/") || []).map(e=>"/boot/" + e);
    let c, d;
    for (let e of [].concat(b, a)) {
        const g = /old/i.test(e) || /fallback/i.test(e)
          , f = /initrd/i.test(e) || /initramfs/i.test(e);
        !/vmlinuz/i.test(e) && !/bzimage/i.test(e) || d && g || (d = e);
        !f || c && g || (c = e)
    }
    c && d || (console.log("Failed to find bzimage or initrd in filesystem. Files:"),
    console.log(b.join(" ")),
    console.log(a.join(" ")));
    return {
        Oh: c,
        hh: d
    }
}
n = Xa.prototype;
n.Ze = async function() {
    this.v.send("cpu-run")
}
;
n.stop = async function() {
    this.Ge && await new Promise(a=>{
        const b = ()=>{
            this.v.unregister("emulator-stopped", b);
            a()
        }
        ;
        J(this, "emulator-stopped", b);
        this.v.send("cpu-stop")
    }
    )
}
;
n.va = async function() {
    await this.stop();
    this.h.va();
    this.l && this.l.va();
    this.o && this.o.va();
    this.j && this.j.va();
    this.g && this.g.va();
    this.Qd && this.Qd.va();
    this.i && this.i.va()
}
;
n.zf = function() {
    this.v.send("cpu-restart")
}
;
function J(a, b, c) {
    a.v.register(b, c, a)
}
n.Nd = async function(a) {
    this.h.Nd(a)
}
;
n.qe = async function() {
    return this.h.qe()
}
;
n.Zc = function() {
    return this.Ge
}
;
function Za(a, b) {
    for (var c = 0; c < b.length; c++)
        a.v.send("keyboard-code", b[c])
}
function Wa(a, b) {
    for (var c = 0; c < b.length; c++)
        a.l.Fj(b[c])
}
function cb() {
    var a = document.body
      , b = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock;
    b && b.call(a)
}
n.nh = async function(a, b) {
    var c = this.Db;
    if (c) {
        var d = a.split("/");
        d = d[d.length - 1];
        a = Se(c, a).uf;
        if ("" !== d && -1 !== a)
            await He(c, d, a, b);
        else
            return Promise.reject(new rf)
    }
}
;
n.pe = async function(a) {
    var b = this.Db;
    if (b)
        return (a = await b.pe(a)) ? a : Promise.reject(new rf)
}
;
function rf() {
    this.message = "File not found"
}
rf.prototype = Error.prototype;
"undefined" !== typeof window ? (window.V86Starter = Xa,
window.V86 = Xa) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.V86Starter = Xa,
module.exports.V86 = Xa) : "function" === typeof importScripts && (self.V86Starter = Xa,
self.V86 = Xa);
function of(a) {
    var b, c, d, e, g;
    this.v = a;
    a.register("screen-set-mode", function(f) {
        this.Df(f)
    }, this);
    a.register("screen-fill-buffer-end", function(f) {
        this.Kf(f[0])
    }, this);
    a.register("screen-put-char", function(f) {
        this.xf(f[0], f[1], f[2], f[3], f[4])
    }, this);
    a.register("screen-text-scroll", function(f) {
        console.log("scroll", f)
    }, this);
    a.register("screen-update-cursor", function(f) {
        this.wd(f[0], f[1])
    }, this);
    a.register("screen-update-cursor-scanline", function(f) {
        this.xd(f[0], f[1])
    }, this);
    a.register("screen-set-size-text", function(f) {
        this.rd(f[0], f[1])
    }, this);
    a.register("screen-set-size-graphical", function(f) {
        this.qd(f[0], f[1])
    }, this);
    this.xf = function(f, h, k, l, p) {
        f < g && h < e && (f = 3 * (f * e + h),
        d[f] = k,
        d[f + 1] = l,
        d[f + 2] = p)
    }
    ;
    this.va = function() {}
    ;
    this.Df = function() {}
    ;
    this.Sf = function() {}
    ;
    this.rd = function(f, h) {
        if (f !== e || h !== g)
            d = new Int32Array(f * h * 3),
            e = f,
            g = h
    }
    ;
    this.qd = function() {}
    ;
    this.Ef = function() {}
    ;
    this.xd = function() {}
    ;
    this.wd = function(f, h) {
        if (f !== b || h !== c)
            b = f,
            c = h
    }
    ;
    this.Kf = function() {}
}
;const Ya = {
    Hj: function(a) {
        return Ya.yj(a) + Ya.xj(a)
    },
    yj: function(a) {
        let b = "";
        var c = "COMPILE COMPILE_SKIPPED_NO_NEW_ENTRY_POINTS COMPILE_WRONG_ADDRESS_SPACE COMPILE_CUT_OFF_AT_END_OF_PAGE COMPILE_WITH_LOOP_SAFETY COMPILE_PAGE COMPILE_PAGE/COMPILE COMPILE_BASIC_BLOCK COMPILE_DUPLICATED_BASIC_BLOCK COMPILE_WASM_BLOCK COMPILE_WASM_LOOP COMPILE_DISPATCHER COMPILE_ENTRY_POINT COMPILE_WASM_TOTAL_BYTES COMPILE_WASM_TOTAL_BYTES/COMPILE_PAGE RUN_INTERPRETED RUN_INTERPRETED_NEW_PAGE RUN_INTERPRETED_PAGE_HAS_CODE RUN_INTERPRETED_PAGE_HAS_ENTRY_AFTER_PAGE_WALK RUN_INTERPRETED_NEAR_END_OF_PAGE RUN_INTERPRETED_DIFFERENT_STATE RUN_INTERPRETED_DIFFERENT_STATE_CPL3 RUN_INTERPRETED_DIFFERENT_STATE_FLAT RUN_INTERPRETED_DIFFERENT_STATE_IS32 RUN_INTERPRETED_DIFFERENT_STATE_SS32 RUN_INTERPRETED_MISSED_COMPILED_ENTRY_RUN_INTERPRETED RUN_INTERPRETED_STEPS RUN_FROM_CACHE RUN_FROM_CACHE_STEPS RUN_FROM_CACHE_STEPS/RUN_FROM_CACHE RUN_FROM_CACHE_STEPS/RUN_INTERPRETED_STEPS DIRECT_EXIT INDIRECT_JUMP INDIRECT_JUMP_NO_ENTRY NORMAL_PAGE_CHANGE NORMAL_FALLTHRU NORMAL_FALLTHRU_WITH_TARGET_BLOCK NORMAL_BRANCH NORMAL_BRANCH_WITH_TARGET_BLOCK CONDITIONAL_JUMP CONDITIONAL_JUMP_PAGE_CHANGE CONDITIONAL_JUMP_EXIT CONDITIONAL_JUMP_FALLTHRU CONDITIONAL_JUMP_FALLTHRU_WITH_TARGET_BLOCK CONDITIONAL_JUMP_BRANCH CONDITIONAL_JUMP_BRANCH_WITH_TARGET_BLOCK DISPATCHER_SMALL DISPATCHER_LARGE LOOP LOOP_SAFETY CONDITION_OPTIMISED CONDITION_UNOPTIMISED CONDITION_UNOPTIMISED_PF CONDITION_UNOPTIMISED_UNHANDLED_L CONDITION_UNOPTIMISED_UNHANDLED_LE FAILED_PAGE_CHANGE SAFE_READ_FAST SAFE_READ_SLOW_PAGE_CROSSED SAFE_READ_SLOW_NOT_VALID SAFE_READ_SLOW_NOT_USER SAFE_READ_SLOW_IN_MAPPED_RANGE SAFE_WRITE_FAST SAFE_WRITE_SLOW_PAGE_CROSSED SAFE_WRITE_SLOW_NOT_VALID SAFE_WRITE_SLOW_NOT_USER SAFE_WRITE_SLOW_IN_MAPPED_RANGE SAFE_WRITE_SLOW_READ_ONLY SAFE_WRITE_SLOW_HAS_CODE SAFE_READ_WRITE_FAST SAFE_READ_WRITE_SLOW_PAGE_CROSSED SAFE_READ_WRITE_SLOW_NOT_VALID SAFE_READ_WRITE_SLOW_NOT_USER SAFE_READ_WRITE_SLOW_IN_MAPPED_RANGE SAFE_READ_WRITE_SLOW_READ_ONLY SAFE_READ_WRITE_SLOW_HAS_CODE PAGE_FAULT TLB_MISS DO_MANY_CYCLES CYCLE_INTERNAL INVALIDATE_ALL_MODULES_NO_FREE_WASM_INDICES INVALIDATE_MODULE_WRITTEN_WHILE_COMPILED INVALIDATE_MODULE_UNUSED_AFTER_OVERWRITE INVALIDATE_MODULE_DIRTY_PAGE INVALIDATE_PAGE_HAD_CODE INVALIDATE_PAGE_HAD_ENTRY_POINTS DIRTY_PAGE_DID_NOT_HAVE_CODE RUN_FROM_CACHE_EXIT_SAME_PAGE RUN_FROM_CACHE_EXIT_NEAR_END_OF_PAGE RUN_FROM_CACHE_EXIT_DIFFERENT_PAGE CLEAR_TLB FULL_CLEAR_TLB TLB_FULL TLB_GLOBAL_FULL MODRM_SIMPLE_REG MODRM_SIMPLE_REG_WITH_OFFSET MODRM_SIMPLE_CONST_OFFSET MODRM_COMPLEX SEG_OFFSET_OPTIMISED SEG_OFFSET_NOT_OPTIMISED SEG_OFFSET_NOT_OPTIMISED_ES SEG_OFFSET_NOT_OPTIMISED_FS SEG_OFFSET_NOT_OPTIMISED_GS SEG_OFFSET_NOT_OPTIMISED_NOT_FLAT".split(" ")
          , d = 0;
        const e = {};
        for (let f = 0; f < c.length; f++) {
            const h = c[f];
            var g = void 0;
            if (h.includes("/")) {
                d++;
                const [k,l] = h.split("/");
                g = e[k] / e[l]
            } else
                g = e[h] = a.xa.exports.profiler_stat_get(f - d),
                g = 1E8 <= g ? Math.round(g / 1E6) + "m" : 1E5 <= g ? Math.round(g / 1E3) + "k" : g;
            b += h + "=" + g + "\n"
        }
        b += "\n";
        c = a.xa.exports.get_valid_tlb_entries_count();
        d = a.xa.exports.get_valid_global_tlb_entries_count();
        b = b + ("TLB_ENTRIES=" + c + " (" + d + " global, " + (c - d) + " non-global)\nWASM_TABLE_FREE=") + (a.xa.exports.jit_get_wasm_table_index_free_list_count() + "\n");
        b += "JIT_CACHE_SIZE=" + a.xa.exports.jit_get_cache_size() + "\n";
        b += "FLAT_SEGMENTS=" + a.xa.exports.has_flat_segmentation() + "\n";
        b += "do_many_cycles avg: " + (a.ek / a.dk || 0) + "\n";
        b += "wasm memory size: " + (a.Pa.buffer.byteLength >> 20) + "m\n";
        b = b + "Config:\nMAX_PAGES=" + (a.xa.exports.get_jit_config(0) + "\n");
        b += "JIT_USE_LOOP_SAFETY=" + !!a.xa.exports.get_jit_config(1) + "\n";
        return b += "MAX_EXTRA_BASIC_BLOCKS=" + a.xa.exports.get_jit_config(2) + "\n"
    },
    xj: function(a) {
        return [Ya.me(a, !1, !1, !1, !1), Ya.me(a, !0, !1, !1, !1), Ya.me(a, !1, !0, !1, !1), Ya.me(a, !1, !1, !0, !1), Ya.me(a, !1, !1, !1, !0)].join("\n\n")
    },
    me: function(a, b, c, d, e) {
        let g = "";
        var f = []
          , h = b ? "compiled" : c ? "jit exit" : d ? "unguarded register" : e ? "wasm size" : "executed";
        for (let p = 0; 256 > p; p++)
            for (let q = 0; 8 > q; q++)
                for (let t of [!1, !0]) {
                    var k = a.xa.exports.get_opstats_buffer(b, c, d, e, p, !1, t, q);
                    f.push({
                        Te: p,
                        count: k,
                        ig: t,
                        ag: q
                    });
                    k = a.xa.exports.get_opstats_buffer(b, c, d, e, p, !0, t, q);
                    f.push({
                        Te: 3840 | p,
                        count: k,
                        ig: t,
                        ag: q
                    })
                }
        a = 0;
        b = new Set([38, 46, 54, 62, 100, 101, 102, 103, 240, 242, 243]);
        for (let {count: p, Te: q} of f)
            b.has(q) || (a += p);
        if (0 === a)
            return "";
        c = new Uint32Array(256);
        b = new Uint32Array(256);
        for (let {Te: p, count: q} of f)
            3840 == (p & 65280) ? b[p & 255] += q : c[p & 255] += q;
        g = g + "------------------\nTotal: " + (a + "\n");
        const l = 1E7 < a ? 1E3 : 1;
        d = Math.max.apply(Math, f.map(({count: p})=>Math.round(p / l)));
        d = String(d).length;
        g += `Instruction counts ${h} (in ${l}):\n`;
        for (e = 0; 256 > e; e++)
            g += e.toString(16).padStart(2, "0") + ":" + xb(Math.round(c[e] / l), d),
            g = 15 == e % 16 ? g + "\n" : g + " ";
        g = g + "\n" + `Instruction counts ${h} (0f, in ${l}):\n`;
        for (h = 0; 256 > h; h++)
            g += (h & 255).toString(16).padStart(2, "0") + ":" + xb(Math.round(b[h] / l), d),
            g = 15 == h % 16 ? g + "\n" : g + " ";
        g += "\n";
        f = f.filter(({count: p})=>p).sort(({count: p},{count: q})=>q - p);
        for (let {Te: p, ig: q, ag: t, count: m} of f.slice(0, 200))
            g += p.toString(16) + "_" + t + (q ? "_m" : "_r") + ":" + (m / a * 100).toFixed(2) + " ";
        return g + "\n"
    }
};
"undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports.print_stats = Ya);
function pf() {
    this.h = new Map
}
pf.prototype.read = async function(a, b, c) {
    return (a = this.h.get(a)) ? a.subarray(b, b + c) : null
}
;
pf.prototype.cache = async function(a, b) {
    this.h.set(a, b)
}
;
pf.prototype.g = function(a) {
    this.h.delete(a)
}
;
function qf(a, b) {
    this.h = a;
    this.Ce = b
}
function sf(a, b) {
    return new Promise(c=>{
        Gb(a.Ce + b, {
            done: async d=>{
                d = new Uint8Array(d);
                await a.cache(b, d);
                c(d)
            }
        })
    }
    )
}
qf.prototype.read = async function(a, b, c) {
    const d = await this.h.read(a, b, c);
    return d ? d : (await sf(this, a)).subarray(b, b + c)
}
;
qf.prototype.cache = async function(a, b) {
    return await this.h.cache(a, b)
}
;
qf.prototype.g = function(a) {
    this.h.g(a)
}
;
"undefined" !== typeof window ? (window.MemoryFileStorage = pf,
window.ServerFileStorageWrapper = qf) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.MemoryFileStorage = pf,
module.exports.ServerFileStorageWrapper = qf) : "function" === typeof importScripts && (self.MemoryFileStorage = pf,
self.ServerFileStorageWrapper = qf);
