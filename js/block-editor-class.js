! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 5)
}([function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    e.exports = function(e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e
    }
}, function(e, t, n) {
    var o = n(6),
        r = n(7);
    e.exports = function(e, t) {
        return !t || "object" !== o(t) && "function" != typeof t ? r(e) : t
    }
}, function(e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(8);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && o(e, t)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
        r = n.n(o),
        u = n(1),
        i = n.n(u),
        c = n(2),
        p = n.n(c),
        l = n(3),
        f = n.n(l),
        s = n(4),
        a = n.n(s),
        y = wp.element.Component,
        b = wp.compose.compose,
        d = wp.data.withSelect,
        m = wp.plugins.registerPlugin,
        v = function(e) {
            var t = e.replace(/\./g, "-").replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "");
            return "page-template-".concat(t)
        },
        g = function(e) {
            function t() {
                return r()(this, t), p()(this, f()(t).apply(this, arguments))
            }
            return a()(t, e), i()(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = document.querySelector(".editor-styles-wrapper");
                    this.props.selectedTemplate && e.classList.add(v(this.props.selectedTemplate))
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = document.querySelector(".editor-styles-wrapper");
                    t.classList.remove(v(e.selectedTemplate)), this.props.selectedTemplate && t.classList.add(v(this.props.selectedTemplate))
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(y);
    m("bigbox-editor-page-template-class", {
        render: b(d(function(e) {
            return {
                selectedTemplate: (0, e("core/editor").getEditedPostAttribute)("template")
            }
        }))(g)
    })
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = o = function(e) {
            return n(e)
        } : e.exports = o = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
        }, o(t)
    }
    e.exports = o
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t) {
    function n(t, o) {
        return e.exports = n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(t, o)
    }
    e.exports = n
}]);