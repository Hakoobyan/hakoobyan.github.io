$(window).on("load", function() {
    $("body").css("overflow-y", "hidden");
    lottie.loadAnimation({
        container: document.getElementById("loadingAnimation"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../js/json/loading.json"
    });
    setTimeout(function() {
        $("#preloder").fadeOut("slow", function() {
            $("body").css("overflow-y", "auto");
            $("#mainContent").fadeIn("slow");
        });
    }, 2000);
});
((t, e) => {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
  })(this, function(t, e, i) {
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
  
    function o(t, e, i) {
      e && n(t.prototype, e), i && n(t, i)
    }

    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        (n = "function" == typeof Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
          return Object.getOwnPropertyDescriptor(i, t).enumerable
        })) : n).forEach(function(e) {
          var n = t,
            o = i[e];
          e in n ? Object.defineProperty(n, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : n[e] = o
        })
      }
      return t
    }
    e = e && e.hasOwnProperty("default") ? e["default"] : e, i = i && i.hasOwnProperty("default") ? i["default"] : i, ye = "transitionend", _e = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
      },
      getSelectorFromElement: function(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");
        try {
          return document.querySelector(e) ? e : null
        } catch (t) {
          return null
        }
      },
      getTransitionDurationFromElement: function(t) {
        return t && (t = ve(t).css("transition-duration"), parseFloat(t)) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
      },
      reflow: function(t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function(t) {
        ve(t).trigger(ye)
      },
      supportsTransitionEnd: function() {
        return Boolean(ye)
      },
      isElement: function(t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function(t, e, i) {
        for (var n in i)
          if (Object.prototype.hasOwnProperty.call(i, n)) {
            var o = i[n],
              s = (s = e[n]) && _e.isElement(s) ? "element" : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + o + '".')
          }
      }
    }, (ve = e).fn.emulateTransitionEnd = function(t) {
      var e = this,
        i = !1;
      return ve(this).one(_e.TRANSITION_END, function() {
        i = !0
      }), setTimeout(function() {
        i || _e.triggerTransitionEnd(e)
      }, t), this
    }, ve.event.special[_e.TRANSITION_END] = {
      bindType: ye,
      delegateType: ye,
      handle: function(t) {
        if (ve(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    };
    var r, a, l, u, c, h, d, f, p, m, g, v, y, _, b, w, E, C, I, F, S, T, x, D, O, A, L, z, k, P, N, j, R, M, H, W, B, q, U, $, Q, Y, K, V, G, Z, J, X, tt, et, it, nt, ot, st, rt, at, lt, ut, ct, ht, dt, ft, pt, mt, gt, vt, yt, _t, bt, wt, Et, Ct, It, Ft, St, Tt, xt, Dt, Ot, At, Lt, zt, kt, Pt, Nt, jt, Rt, Mt, Ht, Wt, Bt, qt, Ut, $t, Qt, Yt, Kt, Vt, Gt, Zt, Jt, Xt, te, ee, ie, ne, oe, se, re, ae, le, ue, ce, he, de, fe, pe, me, ge, ve, ye, _e, be = _e,
      we = (we = "." + (l = "bs.alert"), u = (r = e).fn[a = "alert"], c = {
        CLOSE: "close" + we,
        CLOSED: "closed" + we,
        CLICK_DATA_API: "click" + we + ".data-api"
      }, (we = He.prototype).close = function(t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, we.dispose = function() {
        r.removeData(this._element, l), this._element = null
      }, we._getRootElement = function(t) {
        var e = be.getSelectorFromElement(t);
        return !!e && document.querySelector(e) || r(t).closest(".alert")[0]
      }, we._triggerCloseEvent = function(t) {
        var e = r.Event(c.CLOSE);
        return r(t).trigger(e), e
      }, we._removeElement = function(t) {
        var e, i = this;
        r(t).removeClass("show"), r(t).hasClass("fade") ? (e = be.getTransitionDurationFromElement(t), r(t).one(be.TRANSITION_END, function(e) {
          return i._destroyElement(t, e)
        }).emulateTransitionEnd(e)) : this._destroyElement(t)
      }, we._destroyElement = function(t) {
        r(t).detach().trigger(c.CLOSED).remove()
      }, He._jQueryInterface = function(t) {
        return this.each(function() {
          var e = r(this),
            i = e.data(l);
          i || (i = new He(this), e.data(l, i)), "close" === t && i[t](this)
        })
      }, He._handleDismiss = function(t) {
        return function(e) {
          e && e.preventDefault(), t.close(this)
        }
      }, o(He, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), h = He, r(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), r.fn[a] = h._jQueryInterface, r.fn[a].Constructor = h, r.fn[a].noConflict = function() {
        return r.fn[a] = u, h._jQueryInterface
      }, h),
      Ee = (Ce = "." + (p = "bs.button"), m = (d = e).fn[f = "button"], g = "active", Ie = '[data-toggle^="button"]', v = ".btn", Ce = {
        CLICK_DATA_API: "click" + Ce + (Ee = ".data-api"),
        FOCUS_BLUR_DATA_API: "focus" + Ce + Ee + " blur" + Ce + Ee
      }, (Ee = Me.prototype).toggle = function() {
        var t = !0,
          e = !0,
          i = d(this._element).closest('[data-toggle="buttons"]')[0];
        if (i) {
          var n, o = this._element.querySelector("input");
          if (o) {
            if ("radio" === o.type && (o.checked && this._element.classList.contains(g) ? t = !1 : (n = i.querySelector(".active")) && d(n).removeClass(g)), t) {
              if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
              o.checked = !this._element.classList.contains(g), d(o).trigger("change")
            }
            o.focus(), e = !1
          }
        }
        e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(g)), t && d(this._element).toggleClass(g)
      }, Ee.dispose = function() {
        d.removeData(this._element, p), this._element = null
      }, Me._jQueryInterface = function(t) {
        return this.each(function() {
          var e = d(this).data(p);
          e || (e = new Me(this), d(this).data(p, e)), "toggle" === t && e[t]()
        })
      }, o(Me, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), y = Me, d(document).on(Ce.CLICK_DATA_API, Ie, function(t) {
        t.preventDefault(), t = t.target, d(t).hasClass("btn") || (t = d(t).closest(v)), y._jQueryInterface.call(d(t), "toggle")
      }).on(Ce.FOCUS_BLUR_DATA_API, Ie, function(t) {
        var e = d(t.target).closest(v)[0];
        d(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
      }), d.fn[f] = y._jQueryInterface, d.fn[f].Constructor = y, d.fn[f].noConflict = function() {
        return d.fn[f] = m, y._jQueryInterface
      }, y),
      Ce = (E = "." + (w = "bs.carousel"), C = (_ = e).fn[b = "carousel"], I = {
        interval: 5e3,
        keyboard: !0,
        slide: !(Ce = ".data-api"),
        pause: "hover",
        wrap: !0
      }, F = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
      }, S = "next", T = "prev", x = {
        SLIDE: "slide" + E,
        SLID: "slid" + E,
        KEYDOWN: "keydown" + E,
        MOUSEENTER: "mouseenter" + E,
        MOUSELEAVE: "mouseleave" + E,
        TOUCHEND: "touchend" + E,
        LOAD_DATA_API: "load" + E + Ce,
        CLICK_DATA_API: "click" + E + Ce
      }, D = "active", O = ".active.carousel-item", (Ie = Re.prototype).next = function() {
        this._isSliding || this._slide(S)
      }, Ie.nextWhenVisible = function() {
        !document.hidden && _(this._element).is(":visible") && "hidden" !== _(this._element).css("visibility") && this.next()
      }, Ie.prev = function() {
        this._isSliding || this._slide(T)
      }, Ie.pause = function(t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (be.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, Ie.cycle = function(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, Ie.to = function(t) {
        var e = this,
          i = (this._activeElement = this._element.querySelector(O), this._getItemIndex(this._activeElement));
        t > this._items.length - 1 || t < 0 || (this._isSliding ? _(this._element).one(x.SLID, function() {
          return e.to(t)
        }) : i === t ? (this.pause(), this.cycle()) : this._slide(i < t ? S : T, this._items[t]))
      }, Ie.dispose = function() {
        _(this._element).off(E), _.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, Ie._getConfig = function(t) {
        return t = s({}, I, t), be.typeCheckConfig(b, t, F), t
      }, Ie._addEventListeners = function() {
        var t = this;
        this._config.keyboard && _(this._element).on(x.KEYDOWN, function(e) {
          return t._keydown(e)
        }), "hover" === this._config.pause && (_(this._element).on(x.MOUSEENTER, function(e) {
          return t.pause(e)
        }).on(x.MOUSELEAVE, function(e) {
          return t.cycle(e)
        }), "ontouchstart" in document.documentElement) && _(this._element).on(x.TOUCHEND, function() {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
            return t.cycle(e)
          }, 500 + t._config.interval)
        })
      }, Ie._keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, Ie._getItemIndex = function(t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
      }, Ie._getItemByDirection = function(t, e) {
        var i = t === S,
          n = t === T,
          o = this._getItemIndex(e),
          s = this._items.length - 1;
        return (n && 0 === o || i && o === s) && !this._config.wrap ? e : -1 == (n = (o + (t === T ? -1 : 1)) % this._items.length) ? this._items[this._items.length - 1] : this._items[n]
      }, Ie._triggerSlideEvent = function(t, e) {
        var i = this._getItemIndex(t),
          n = this._getItemIndex(this._element.querySelector(O));
        t = _.Event(x.SLIDE, {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
        return _(this._element).trigger(t), t
      }, Ie._setActiveIndicatorElement = function(t) {
        var e;
        this._indicatorsElement && (e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), _(e).removeClass(D), e = this._indicatorsElement.children[this._getItemIndex(t)]) && _(e).addClass(D)
      }, Ie._slide = function(t, e) {
        var i, n, o, s = this,
          r = this._element.querySelector(O),
          a = this._getItemIndex(r),
          l = e || r && this._getItemByDirection(t, r),
          u = (e = this._getItemIndex(l), Boolean(this._interval));
        t = t === S ? (i = "carousel-item-left", n = "carousel-item-next", "left") : (i = "carousel-item-right", n = "carousel-item-prev", "right");
        l && _(l).hasClass(D) ? this._isSliding = !1 : !this._triggerSlideEvent(l, t).isDefaultPrevented() && r && l && (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), o = _.Event(x.SLID, {
          relatedTarget: l,
          direction: t,
          from: a,
          to: e
        }), _(this._element).hasClass("slide") ? (_(l).addClass(n), be.reflow(l), _(r).addClass(i), _(l).addClass(i), t = be.getTransitionDurationFromElement(r), _(r).one(be.TRANSITION_END, function() {
          _(l).removeClass(i + " " + n).addClass(D), _(r).removeClass(D + " " + n + " " + i), s._isSliding = !1, setTimeout(function() {
            return _(s._element).trigger(o)
          }, 0)
        }).emulateTransitionEnd(t)) : (_(r).removeClass(D), _(l).addClass(D), this._isSliding = !1, _(this._element).trigger(o)), u) && this.cycle()
      }, Re._jQueryInterface = function(t) {
        return this.each(function() {
          var e = _(this).data(w),
            i = s({}, I, _(this).data()),
            n = ("object" == typeof t && (i = s({}, i, t)), "string" == typeof t ? t : i.slide);
          if (e || (e = new Re(this, i), _(this).data(w, e)), "number" == typeof t) e.to(t);
          else if ("string" == typeof n) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          } else i.interval && (e.pause(), e.cycle())
        })
      }, Re._dataApiClickHandler = function(t) {
        var e, i, n = be.getSelectorFromElement(this);
        (n = n && _(n)[0]) && _(n).hasClass("carousel") && (e = s({}, _(n).data(), _(this).data()), (i = this.getAttribute("data-slide-to")) && (e.interval = !1), Re._jQueryInterface.call(_(n), e), i && _(n).data(w).to(i), t.preventDefault())
      }, o(Re, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return I
        }
      }]), A = Re, _(document).on(x.CLICK_DATA_API, "[data-slide], [data-slide-to]", A._dataApiClickHandler), _(window).on(x.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
          var n = _(t[e]);
          A._jQueryInterface.call(n, n.data())
        }
      }), _.fn[b] = A._jQueryInterface, _.fn[b].Constructor = A, _.fn[b].noConflict = function() {
        return _.fn[b] = C, A._jQueryInterface
      }, A),
      Ie = (Ie = "." + (k = "bs.collapse"), P = (L = e).fn[z = "collapse"], N = {
        toggle: !0,
        parent: ""
      }, j = {
        toggle: "boolean",
        parent: "(string|element)"
      }, R = {
        SHOW: "show" + Ie,
        SHOWN: "shown" + Ie,
        HIDE: "hide" + Ie,
        HIDDEN: "hidden" + Ie,
        CLICK_DATA_API: "click" + Ie + ".data-api"
      }, M = "show", H = "collapse", W = "collapsing", B = "collapsed", q = '[data-toggle="collapse"]', (Ie = je.prototype).toggle = function() {
        L(this._element).hasClass(M) ? this.hide() : this.show()
      }, Ie.show = function() {
        var t, e, i, n, o = this;
        this._isTransitioning || L(this._element).hasClass(M) || (t = this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) {
          return t.getAttribute("data-parent") === o._config.parent
        })).length ? null : t) && (n = L(t).not(this._selector).data(k)) && n._isTransitioning || (i = L.Event(R.SHOW), L(this._element).trigger(i), i.isDefaultPrevented()) || (t && (je._jQueryInterface.call(L(t).not(this._selector), "hide"), n || L(t).data(k, null)), e = this._getDimension(), L(this._element).removeClass(H).addClass(W), this._element.style[e] = 0, this._triggerArray.length && L(this._triggerArray).removeClass(B).attr("aria-expanded", !0), this.setTransitioning(!0), i = "scroll" + (e[0].toUpperCase() + e.slice(1)), n = be.getTransitionDurationFromElement(this._element), L(this._element).one(be.TRANSITION_END, function() {
          L(o._element).removeClass(W).addClass(H).addClass(M), o._element.style[e] = "", o.setTransitioning(!1), L(o._element).trigger(R.SHOWN)
        }).emulateTransitionEnd(n), this._element.style[e] = this._element[i] + "px")
      }, Ie.hide = function() {
        var t = this;
        if (!this._isTransitioning && L(this._element).hasClass(M)) {
          var e = L.Event(R.HIDE);
          if (L(this._element).trigger(e), !e.isDefaultPrevented()) {
            e = this._getDimension();
            var i = (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", be.reflow(this._element), L(this._element).addClass(W).removeClass(H).removeClass(M), this._triggerArray.length);
            if (0 < i)
              for (var n = 0; n < i; n++) {
                var o = this._triggerArray[n],
                  s = be.getSelectorFromElement(o);
                null === s || L([].slice.call(document.querySelectorAll(s))).hasClass(M) || L(o).addClass(B).attr("aria-expanded", !1)
              }
            this.setTransitioning(!0), this._element.style[e] = "", e = be.getTransitionDurationFromElement(this._element), L(this._element).one(be.TRANSITION_END, function() {
              t.setTransitioning(!1), L(t._element).removeClass(W).addClass(H).trigger(R.HIDDEN)
            }).emulateTransitionEnd(e)
          }
        }
      }, Ie.setTransitioning = function(t) {
        this._isTransitioning = t
      }, Ie.dispose = function() {
        L.removeData(this._element, k), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, Ie._getConfig = function(t) {
        return (t = s({}, N, t)).toggle = Boolean(t.toggle), be.typeCheckConfig(z, t, j), t
      }, Ie._getDimension = function() {
        return L(this._element).hasClass("width") ? "width" : "height"
      }, Ie._getParent = function() {
        var t = this,
          e = null,
          i = (be.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent), '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]');
        i = [].slice.call(e.querySelectorAll(i));
        return L(i).each(function(e, i) {
          t._addAriaAndCollapsedClass(je._getTargetFromElement(i), [i])
        }), e
      }, Ie._addAriaAndCollapsedClass = function(t, e) {
        t && (t = L(t).hasClass(M), e.length) && L(e).toggleClass(B, !t).attr("aria-expanded", t)
      }, je._getTargetFromElement = function(t) {
        return (t = be.getSelectorFromElement(t)) ? document.querySelector(t) : null
      }, je._jQueryInterface = function(t) {
        return this.each(function() {
          var e = L(this),
            i = e.data(k),
            n = s({}, N, e.data(), "object" == typeof t && t ? t : {});
          if (!i && n.toggle && /show|hide/.test(t) && (n.toggle = !1), i || (i = new je(this, n), e.data(k, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t]()
          }
        })
      }, o(je, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return N
        }
      }]), U = je, L(document).on(R.CLICK_DATA_API, q, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = L(this);
        t = be.getSelectorFromElement(this), t = [].slice.call(document.querySelectorAll(t));
        L(t).each(function() {
          var t = L(this),
            i = t.data(k) ? "toggle" : e.data();
          U._jQueryInterface.call(t, i)
        })
      }), L.fn[z] = U._jQueryInterface, L.fn[z].Constructor = U, L.fn[z].noConflict = function() {
        return L.fn[z] = P, U._jQueryInterface
      }, U),
      Fe = (K = "." + (Y = "bs.dropdown"), Fe = ".data-api", V = ($ = e).fn[Q = "dropdown"], G = new RegExp("38|40|27"), Z = {
        HIDE: "hide" + K,
        HIDDEN: "hidden" + K,
        SHOW: "show" + K,
        SHOWN: "shown" + K,
        CLICK: "click" + K,
        CLICK_DATA_API: "click" + K + Fe,
        KEYDOWN_DATA_API: "keydown" + K + Fe,
        KEYUP_DATA_API: "keyup" + K + Fe
      }, J = "disabled", X = "show", tt = "dropdown-menu-right", et = '[data-toggle="dropdown"]', it = ".dropdown-menu", nt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
      }, ot = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
      }, (Fe = Ne.prototype).toggle = function() {
        if (!this._element.disabled && !$(this._element).hasClass(J)) {
          var t = Ne._getParentFromElement(this._element),
            e = $(this._menu).hasClass(X);
          if (Ne._clearMenus(), !e) {
            e = {
              relatedTarget: this._element
            };
            var n = $.Event(Z.SHOW, e);
            if ($(t).trigger(n), !n.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                n = this._element, "parent" === this._config.reference ? n = t : be.isElement(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery) && (n = this._config.reference[0]), "scrollParent" !== this._config.boundary && $(t).addClass("position-static"), this._popper = new i(n, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === $(t).closest(".navbar-nav").length && $(document.body).children().on("mouseover", null, $.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), $(this._menu).toggleClass(X), $(t).toggleClass(X).trigger($.Event(Z.SHOWN, e))
            }
          }
        }
      }, Fe.dispose = function() {
        $.removeData(this._element, Y), $(this._element).off(K), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
      }, Fe.update = function() {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, Fe._addEventListeners = function() {
        var t = this;
        $(this._element).on(Z.CLICK, function(e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        })
      }, Fe._getConfig = function(t) {
        return t = s({}, this.constructor.Default, $(this._element).data(), t), be.typeCheckConfig(Q, t, this.constructor.DefaultType), t
      }, Fe._getMenuElement = function() {
        var t;
        return this._menu || (t = Ne._getParentFromElement(this._element)) && (this._menu = t.querySelector(it)), this._menu
      }, Fe._getPlacement = function() {
        var t = $(this._element.parentNode),
          e = "bottom-start";
        return t.hasClass("dropup") ? (e = "top-start", $(this._menu).hasClass(tt) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : $(this._menu).hasClass(tt) && (e = "bottom-end"), e
      }, Fe._detectNavbar = function() {
        return 0 < $(this._element).closest(".navbar").length
      }, Fe._getPopperConfig = function() {
        var t = this,
          e = {};
        "function" == typeof this._config.offset ? e.fn = function(e) {
          return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
        } : e.offset = this._config.offset, e = {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (e.modifiers.applyStyle = {
          enabled: !1
        }), e
      }, Ne._jQueryInterface = function(t) {
        return this.each(function() {
          var e = $(this).data(Y);
          if (e || (e = new Ne(this, "object" == typeof t ? t : null), $(this).data(Y, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, Ne._clearMenus = function(t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
          for (var e = [].slice.call(document.querySelectorAll(et)), i = 0, n = e.length; i < n; i++) {
            var o, s = Ne._getParentFromElement(e[i]),
              r = $(e[i]).data(Y),
              a = {
                relatedTarget: e[i]
              };
            t && "click" === t.type && (a.clickEvent = t), r && (r = r._menu, !$(s).hasClass(X) || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && $.contains(s, t.target) || (o = $.Event(Z.HIDE, a), $(s).trigger(o), o.isDefaultPrevented()) || ("ontouchstart" in document.documentElement && $(document.body).children().off("mouseover", null, $.noop), e[i].setAttribute("aria-expanded", "false"), $(r).removeClass(X), $(s).removeClass(X).trigger($.Event(Z.HIDDEN, a))))
          }
      }, Ne._getParentFromElement = function(t) {
        var e, i = be.getSelectorFromElement(t);
        return (e = i ? document.querySelector(i) : e) || t.parentNode
      }, Ne._dataApiKeydownHandler = function(t) {
        var e, i, n;
        (/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || $(t.target).closest(it).length) : !G.test(t.which)) || (t.preventDefault(), t.stopPropagation(), this.disabled) || $(this).hasClass(J) || (e = Ne._getParentFromElement(this), ((n = $(e).hasClass(X)) || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which) ? 0 !== (n = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"))).length && (i = n.indexOf(t.target), 38 === t.which && 0 < i && i--, 40 === t.which && i < n.length - 1 && i++, n[i = i < 0 ? 0 : i].focus()) : (27 === t.which && (n = e.querySelector(et), $(n).trigger("focus")), $(this).trigger("click")))
      }, o(Ne, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return nt
        }
      }, {
        key: "DefaultType",
        get: function() {
          return ot
        }
      }]), st = Ne, $(document).on(Z.KEYDOWN_DATA_API, et, st._dataApiKeydownHandler).on(Z.KEYDOWN_DATA_API, it, st._dataApiKeydownHandler).on(Z.CLICK_DATA_API + " " + Z.KEYUP_DATA_API, st._clearMenus).on(Z.CLICK_DATA_API, et, function(t) {
        t.preventDefault(), t.stopPropagation(), st._jQueryInterface.call($(this), "toggle")
      }).on(Z.CLICK_DATA_API, ".dropdown form", function(t) {
        t.stopPropagation()
      }), $.fn[Q] = st._jQueryInterface, $.fn[Q].Constructor = st, $.fn[Q].noConflict = function() {
        return $.fn[Q] = V, st._jQueryInterface
      }, st),
      Se = (ut = "." + (lt = "bs.modal"), ct = (rt = e).fn[at = "modal"], ht = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
      }, dt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      }, ft = {
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        FOCUSIN: "focusin" + ut,
        RESIZE: "resize" + ut,
        CLICK_DISMISS: "click.dismiss" + ut,
        KEYDOWN_DISMISS: "keydown.dismiss" + ut,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ut,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
      }, pt = "modal-open", mt = "fade", gt = "show", vt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", yt = ".sticky-top", (Se = Pe.prototype).toggle = function(t) {
        return this._isShown ? this.hide() : this.show(t)
      }, Se.show = function(t) {
        var e, i = this;
        this._isTransitioning || this._isShown || (rt(this._element).hasClass(mt) && (this._isTransitioning = !0), e = rt.Event(ft.SHOW, {
          relatedTarget: t
        }), rt(this._element).trigger(e), this._isShown) || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), rt(document.body).addClass(pt), this._setEscapeEvent(), this._setResizeEvent(), rt(this._element).on(ft.CLICK_DISMISS, '[data-dismiss="modal"]', function(t) {
          return i.hide(t)
        }), rt(this._dialog).on(ft.MOUSEDOWN_DISMISS, function() {
          rt(i._element).one(ft.MOUSEUP_DISMISS, function(t) {
            rt(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
          })
        }), this._showBackdrop(function() {
          return i._showElement(t)
        }))
      }, Se.hide = function(t) {
        var e = this;
        t && t.preventDefault(), !this._isTransitioning && this._isShown && (t = rt.Event(ft.HIDE), rt(this._element).trigger(t), this._isShown) && !t.isDefaultPrevented() && (this._isShown = !1, (t = rt(this._element).hasClass(mt)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), rt(document).off(ft.FOCUSIN), rt(this._element).removeClass(gt), rt(this._element).off(ft.CLICK_DISMISS), rt(this._dialog).off(ft.MOUSEDOWN_DISMISS), t ? (t = be.getTransitionDurationFromElement(this._element), rt(this._element).one(be.TRANSITION_END, function(t) {
          return e._hideModal(t)
        }).emulateTransitionEnd(t)) : this._hideModal())
      }, Se.dispose = function() {
        rt.removeData(this._element, lt), rt(window, document, this._element, this._backdrop).off(ut), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
      }, Se.handleUpdate = function() {
        this._adjustDialog()
      }, Se._getConfig = function(t) {
        return t = s({}, ht, t), be.typeCheckConfig(at, t, dt), t
      }, Se._showElement = function(t) {
        function e() {
          i._config.focus && i._element.focus(), i._isTransitioning = !1, rt(i._element).trigger(o)
        }
        var i = this,
          n = rt(this._element).hasClass(mt),
          o = (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && be.reflow(this._element), rt(this._element).addClass(gt), this._config.focus && this._enforceFocus(), rt.Event(ft.SHOWN, {
            relatedTarget: t
          }));
        n ? (t = be.getTransitionDurationFromElement(this._element), rt(this._dialog).one(be.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
      }, Se._enforceFocus = function() {
        var t = this;
        rt(document).off(ft.FOCUSIN).on(ft.FOCUSIN, function(e) {
          document !== e.target && t._element !== e.target && 0 === rt(t._element).has(e.target).length && t._element.focus()
        })
      }, Se._setEscapeEvent = function() {
        var t = this;
        this._isShown && this._config.keyboard ? rt(this._element).on(ft.KEYDOWN_DISMISS, function(e) {
          27 === e.which && (e.preventDefault(), t.hide())
        }) : this._isShown || rt(this._element).off(ft.KEYDOWN_DISMISS)
      }, Se._setResizeEvent = function() {
        var t = this;
        this._isShown ? rt(window).on(ft.RESIZE, function(e) {
          return t.handleUpdate(e)
        }) : rt(window).off(ft.RESIZE)
      }, Se._hideModal = function() {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
          rt(document.body).removeClass(pt), t._resetAdjustments(), t._resetScrollbar(), rt(t._element).trigger(ft.HIDDEN)
        })
      }, Se._removeBackdrop = function() {
        this._backdrop && (rt(this._backdrop).remove(), this._backdrop = null)
      }, Se._showBackdrop = function(t) {
        var e, i = this,
          n = rt(this._element).hasClass(mt) ? mt : "";
        this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), rt(this._backdrop).appendTo(document.body), rt(this._element).on(ft.CLICK_DISMISS, function(t) {
          i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
        }), n && be.reflow(this._backdrop), rt(this._backdrop).addClass(gt), t && (n ? (n = be.getTransitionDurationFromElement(this._backdrop), rt(this._backdrop).one(be.TRANSITION_END, t).emulateTransitionEnd(n)) : t())) : !this._isShown && this._backdrop ? (rt(this._backdrop).removeClass(gt), n = function() {
          i._removeBackdrop(), t && t()
        }, rt(this._element).hasClass(mt) ? (e = be.getTransitionDurationFromElement(this._backdrop), rt(this._backdrop).one(be.TRANSITION_END, n).emulateTransitionEnd(e)) : n()) : t && t()
      }, Se._adjustDialog = function() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, Se._resetAdjustments = function() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, Se._checkScrollbar = function() {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, Se._setScrollbar = function() {
        var t, e, i = this;
        this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(vt)), e = [].slice.call(document.querySelectorAll(yt)), rt(t).each(function(t, e) {
          var n = e.style.paddingRight,
            o = rt(e).css("padding-right");
          rt(e).data("padding-right", n).css("padding-right", parseFloat(o) + i._scrollbarWidth + "px")
        }), rt(e).each(function(t, e) {
          var n = e.style.marginRight,
            o = rt(e).css("margin-right");
          rt(e).data("margin-right", n).css("margin-right", parseFloat(o) - i._scrollbarWidth + "px")
        }), t = document.body.style.paddingRight, e = rt(document.body).css("padding-right"), rt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px"))
      }, Se._resetScrollbar = function() {
        var t = [].slice.call(document.querySelectorAll(vt));
        rt(t).each(function(t, e) {
          var i = rt(e).data("padding-right");
          rt(e).removeData("padding-right"), e.style.paddingRight = i || ""
        }), t = [].slice.call(document.querySelectorAll(yt)), rt(t).each(function(t, e) {
          var i = rt(e).data("margin-right");
          void 0 !== i && rt(e).css("margin-right", i).removeData("margin-right")
        }), t = rt(document.body).data("padding-right");
        rt(document.body).removeData("padding-right"), document.body.style.paddingRight = t || ""
      }, Se._getScrollbarWidth = function() {
        var t = document.createElement("div"),
          e = (t.className = "modal-scrollbar-measure", document.body.appendChild(t), t.getBoundingClientRect().width - t.clientWidth);
        return document.body.removeChild(t), e
      }, Pe._jQueryInterface = function(t, e) {
        return this.each(function() {
          var i = rt(this).data(lt),
            n = s({}, ht, rt(this).data(), "object" == typeof t && t ? t : {});
          if (i || (i = new Pe(this, n), rt(this).data(lt, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t](e)
          } else n.show && i.show(e)
        })
      }, o(Pe, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return ht
        }
      }]), _t = Pe, rt(document).on(ft.CLICK_DATA_API, '[data-toggle="modal"]', function(t) {
        var e, i = this,
          n = ((n = be.getSelectorFromElement(this)) && (e = document.querySelector(n)), rt(e).data(lt) ? "toggle" : s({}, rt(e).data(), rt(this).data())),
          o = ("A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), rt(e).one(ft.SHOW, function(t) {
            t.isDefaultPrevented() || o.one(ft.HIDDEN, function() {
              rt(i).is(":visible") && i.focus()
            })
          }));
        _t._jQueryInterface.call(rt(e), n, this)
      }), rt.fn[at] = _t._jQueryInterface, rt.fn[at].Constructor = _t, rt.fn[at].noConflict = function() {
        return rt.fn[at] = ct, _t._jQueryInterface
      }, _t),
      Te = (Ct = "." + (Et = "bs.tooltip"), It = (bt = e).fn[wt = "tooltip"], Ft = "bs-tooltip", St = new RegExp("(^|\\s)" + Ft + "\\S+", "g"), Dt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(xt = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        }),
        selector: !(Tt = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
      }, At = {
        HIDE: "hide" + Ct,
        HIDDEN: "hidden" + Ct,
        SHOW: (Ot = "show") + Ct,
        SHOWN: "shown" + Ct,
        INSERTED: "inserted" + Ct,
        CLICK: "click" + Ct,
        FOCUSIN: "focusin" + Ct,
        FOCUSOUT: "focusout" + Ct,
        MOUSEENTER: "mouseenter" + Ct,
        MOUSELEAVE: "mouseleave" + Ct
      }, Lt = "fade", zt = "show", kt = "hover", Pt = "focus", (Te = ke.prototype).enable = function() {
        this._isEnabled = !0
      }, Te.disable = function() {
        this._isEnabled = !1
      }, Te.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
      }, Te.toggle = function(t) {
        var e, i;
        this._isEnabled && (t ? (e = this.constructor.DATA_KEY, (i = bt(t.currentTarget).data(e)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), bt(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)) : bt(this.getTipElement()).hasClass(zt) ? this._leave(null, this) : this._enter(null, this))
      }, Te.dispose = function() {
        clearTimeout(this._timeout), bt.removeData(this.element, this.constructor.DATA_KEY), bt(this.element).off(this.constructor.EVENT_KEY), bt(this.element).closest(".modal").off("hide.bs.modal"), this.tip && bt(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, Te.show = function() {
        var t = this;
        if ("none" === bt(this.element).css("display")) throw new Error("Please use show on visible elements");
        var e, n, o = bt.Event(this.constructor.Event.SHOW);
        this.isWithContent() && this._isEnabled && (bt(this.element).trigger(o), n = bt.contains(this.element.ownerDocument.documentElement, this.element), !o.isDefaultPrevented()) && n && (o = this.getTipElement(), n = be.getUID(this.constructor.NAME), o.setAttribute("id", n), this.element.setAttribute("aria-describedby", n), this.setContent(), this.config.animation && bt(o).addClass(Lt), n = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, n = this._getAttachment(n), this.addAttachmentClass(n), e = !1 === this.config.container ? document.body : bt(document).find(this.config.container), bt(o).data(this.constructor.DATA_KEY, this), bt.contains(this.element.ownerDocument.documentElement, this.tip) || bt(o).appendTo(e), bt(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, o, {
          placement: n,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
          },
          onUpdate: function(e) {
            t._handlePopperPlacementChange(e)
          }
        }), bt(o).addClass(zt), "ontouchstart" in document.documentElement && bt(document.body).children().on("mouseover", null, bt.noop), e = function() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, bt(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
        }, bt(this.tip).hasClass(Lt) ? (n = be.getTransitionDurationFromElement(this.tip), bt(this.tip).one(be.TRANSITION_END, e).emulateTransitionEnd(n)) : e())
      }, Te.hide = function(t) {
        function e() {
          i._hoverState !== Ot && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), bt(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
        }
        var i = this,
          n = this.getTipElement(),
          o = bt.Event(this.constructor.Event.HIDE);
        bt(this.element).trigger(o), o.isDefaultPrevented() || (bt(n).removeClass(zt), "ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), this._activeTrigger.click = !1, this._activeTrigger[Pt] = !1, this._activeTrigger[kt] = !1, bt(this.tip).hasClass(Lt) ? (o = be.getTransitionDurationFromElement(n), bt(n).one(be.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
      }, Te.update = function() {
        null !== this._popper && this._popper.scheduleUpdate()
      }, Te.isWithContent = function() {
        return Boolean(this.getTitle())
      }, Te.addAttachmentClass = function(t) {
        bt(this.getTipElement()).addClass(Ft + "-" + t)
      }, Te.getTipElement = function() {
        return this.tip = this.tip || bt(this.config.template)[0], this.tip
      }, Te.setContent = function() {
        var t = this.getTipElement();
        this.setElementContent(bt(t.querySelectorAll(".tooltip-inner")), this.getTitle()), bt(t).removeClass(Lt + " " + zt)
      }, Te.setElementContent = function(t, e) {
        var i = this.config.html;
        "object" == typeof e && (e.nodeType || e.jquery) ? i ? bt(e).parent().is(t) || t.empty().append(e) : t.text(bt(e).text()) : t[i ? "html" : "text"](e)
      }, Te.getTitle = function() {
        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
      }, Te._getAttachment = function(t) {
        return xt[t.toUpperCase()]
      }, Te._setListeners = function() {
        var t = this;
        this.config.trigger.split(" ").forEach(function(e) {
          var i;
          "click" === e ? bt(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
            return t.toggle(e)
          }) : "manual" !== e && (i = e === kt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, e = e === kt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT, bt(t.element).on(i, t.config.selector, function(e) {
            return t._enter(e)
          }).on(e, t.config.selector, function(e) {
            return t._leave(e)
          })), bt(t.element).closest(".modal").on("hide.bs.modal", function() {
            return t.hide()
          })
        }), this.config.selector ? this.config = s({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, Te._fixTitle = function() {
        var t = typeof this.element.getAttribute("data-original-title");
        !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, Te._enter = function(t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || bt(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), bt(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Pt : kt] = !0), bt(e.getTipElement()).hasClass(zt) || e._hoverState === Ot ? e._hoverState = Ot : (clearTimeout(e._timeout), e._hoverState = Ot, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
          e._hoverState === Ot && e.show()
        }, e.config.delay.show) : e.show())
      }, Te._leave = function(t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || bt(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), bt(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Pt : kt] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
          "out" === e._hoverState && e.hide()
        }, e.config.delay.hide) : e.hide())
      }, Te._isWithActiveTrigger = function() {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, Te._getConfig = function(t) {
        return "number" == typeof(t = s({}, this.constructor.Default, bt(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), be.typeCheckConfig(wt, t, this.constructor.DefaultType), t
      }, Te._getDelegateConfig = function() {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, Te._cleanTipClass = function() {
        var t = bt(this.getTipElement()),
          e = t.attr("class").match(St);
        null !== e && e.length && t.removeClass(e.join(""))
      }, Te._handlePopperPlacementChange = function(t) {
        var e = t.instance;
        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
      }, Te._fixTransition = function() {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute("x-placement") && (bt(t).removeClass(Lt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
      }, ke._jQueryInterface = function(t) {
        return this.each(function() {
          var e = bt(this).data(Et),
            i = "object" == typeof t && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new ke(this, i), bt(this).data(Et, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(ke, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return Dt
        }
      }, {
        key: "NAME",
        get: function() {
          return wt
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Et
        }
      }, {
        key: "Event",
        get: function() {
          return At
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return Ct
        }
      }, {
        key: "DefaultType",
        get: function() {
          return Tt
        }
      }]), bt.fn[wt] = (Nt = ke)._jQueryInterface, bt.fn[wt].Constructor = Nt, bt.fn[wt].noConflict = function() {
        return bt.fn[wt] = It, Nt._jQueryInterface
      }, Nt),
      xe = (Ht = "." + (Mt = "bs.popover"), Wt = (jt = e).fn[Rt = "popover"], Bt = "bs-popover", qt = new RegExp("(^|\\s)" + Bt + "\\S+", "g"), Ut = s({}, Te.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }), $t = s({}, Te.DefaultType, {
        content: "(string|element|function)"
      }), Qt = {
        HIDE: "hide" + Ht,
        HIDDEN: "hidden" + Ht,
        SHOW: "show" + Ht,
        SHOWN: "shown" + Ht,
        INSERTED: "inserted" + Ht,
        CLICK: "click" + Ht,
        FOCUSIN: "focusin" + Ht,
        FOCUSOUT: "focusout" + Ht,
        MOUSEENTER: "mouseenter" + Ht,
        MOUSELEAVE: "mouseleave" + Ht
      }, xe = ge = Te, (De = ze).prototype = Object.create(xe.prototype), (De.prototype.constructor = De).__proto__ = xe, (De = ze.prototype).isWithContent = function() {
        return this.getTitle() || this._getContent()
      }, De.addAttachmentClass = function(t) {
        jt(this.getTipElement()).addClass(Bt + "-" + t)
      }, De.getTipElement = function() {
        return this.tip = this.tip || jt(this.config.template)[0], this.tip
      }, De.setContent = function() {
        var t = jt(this.getTipElement()),
          e = (this.setElementContent(t.find(".popover-header"), this.getTitle()), this._getContent());
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
      }, De._getContent = function() {
        return this.element.getAttribute("data-content") || this.config.content
      }, De._cleanTipClass = function() {
        var t = jt(this.getTipElement()),
          e = t.attr("class").match(qt);
        null !== e && 0 < e.length && t.removeClass(e.join(""))
      }, ze._jQueryInterface = function(t) {
        return this.each(function() {
          var e = jt(this).data(Mt),
            i = "object" == typeof t ? t : null;
          if ((e || !/destroy|hide/.test(t)) && (e || (e = new ze(this, i), jt(this).data(Mt, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(ze, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return Ut
        }
      }, {
        key: "NAME",
        get: function() {
          return Rt
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Mt
        }
      }, {
        key: "Event",
        get: function() {
          return Qt
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return Ht
        }
      }, {
        key: "DefaultType",
        get: function() {
          return $t
        }
      }]), jt.fn[Rt] = (Yt = ze)._jQueryInterface, jt.fn[Rt].Constructor = Yt, jt.fn[Rt].noConflict = function() {
        return jt.fn[Rt] = Wt, Yt._jQueryInterface
      }, Yt),
      De = (Zt = "." + (Gt = "bs.scrollspy"), Jt = (Kt = e).fn[Vt = "scrollspy"], Xt = {
        offset: 10,
        method: "auto",
        target: ""
      }, te = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      }, ee = {
        ACTIVATE: "activate" + Zt,
        SCROLL: "scroll" + Zt,
        LOAD_DATA_API: "load" + Zt + ".data-api"
      }, ie = "active", ne = ".nav, .list-group", oe = ".nav-link", se = ".list-group-item", re = "position", (De = Le.prototype).refresh = function() {
        var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : re,
          i = "auto" === this._config.method ? e : this._config.method,
          n = i === re ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
          var e;
          if (e = (t = be.getSelectorFromElement(t)) ? document.querySelector(t) : e) {
            var o = e.getBoundingClientRect();
            if (o.width || o.height) return [Kt(e)[i]().top + n, t]
          }
          return null
        }).filter(function(t) {
          return t
        }).sort(function(t, e) {
          return t[0] - e[0]
        }).forEach(function(e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        })
      }, De.dispose = function() {
        Kt.removeData(this._element, Gt), Kt(this._scrollElement).off(Zt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, De._getConfig = function(t) {
        var e;
        return "string" != typeof(t = s({}, Xt, "object" == typeof t && t ? t : {})).target && ((e = Kt(t.target).attr("id")) || (e = be.getUID(Vt), Kt(t.target).attr("id", e)), t.target = "#" + e), be.typeCheckConfig(Vt, t, te), t
      }, De._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, De._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, De._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, De._process = function() {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), i <= t) e = this._targets[this._targets.length - 1], this._activeTarget !== e && this._activate(e);
        else if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) this._activeTarget = null, this._clear();
        else
          for (var n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
      }, De._activate = function(t) {
        this._activeTarget = t, this._clear();
        var e = (e = this._selector.split(",")).map(function(e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        });
        ((e = Kt([].slice.call(document.querySelectorAll(e.join(","))))).hasClass("dropdown-item") ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(ie), e) : (e.addClass(ie), e.parents(ne).prev(oe + ", " + se).addClass(ie), e.parents(ne).prev(".nav-item").children(oe))).addClass(ie), Kt(this._scrollElement).trigger(ee.ACTIVATE, {
          relatedTarget: t
        })
      }, De._clear = function() {
        var t = [].slice.call(document.querySelectorAll(this._selector));
        Kt(t).filter(".active").removeClass(ie)
      }, Le._jQueryInterface = function(t) {
        return this.each(function() {
          var e = Kt(this).data(Gt);
          if (e || (e = new Le(this, "object" == typeof t && t), Kt(this).data(Gt, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(Le, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return Xt
        }
      }]), ae = Le, Kt(window).on(ee.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
          var i = Kt(t[e]);
          ae._jQueryInterface.call(i, i.data())
        }
      }), Kt.fn[Vt] = ae._jQueryInterface, Kt.fn[Vt].Constructor = ae, Kt.fn[Vt].noConflict = function() {
        return Kt.fn[Vt] = Jt, ae._jQueryInterface
      }, ae),
      Oe = (Oe = "." + (ue = "bs.tab"), ce = (le = e).fn.tab, he = {
        HIDE: "hide" + Oe,
        HIDDEN: "hidden" + Oe,
        SHOW: "show" + Oe,
        SHOWN: "shown" + Oe,
        CLICK_DATA_API: "click" + Oe + ".data-api"
      }, de = "active", fe = ".active", pe = "> li > .active", (Oe = Ae.prototype).show = function() {
        var t, e, i, n, o, s, r = this;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && le(this._element).hasClass(de) || le(this._element).hasClass("disabled") || (e = le(this._element).closest(".nav, .list-group")[0], i = be.getSelectorFromElement(this._element), e && (o = "UL" === e.nodeName ? pe : fe, n = (n = le.makeArray(le(e).find(o)))[n.length - 1]), o = le.Event(he.HIDE, {
          relatedTarget: this._element
        }), s = le.Event(he.SHOW, {
          relatedTarget: n
        }), n && le(n).trigger(o), le(this._element).trigger(s), s.isDefaultPrevented()) || o.isDefaultPrevented() || (i && (t = document.querySelector(i)), this._activate(this._element, e), s = function() {
          var t = le.Event(he.HIDDEN, {
              relatedTarget: r._element
            }),
            e = le.Event(he.SHOWN, {
              relatedTarget: n
            });
          le(n).trigger(t), le(r._element).trigger(e)
        }, t ? this._activate(t, t.parentNode, s) : s())
      }, Oe.dispose = function() {
        le.removeData(this._element, ue), this._element = null
      }, Oe._activate = function(t, e, i) {
        function n() {
          return o._transitionComplete(t, s, i)
        }
        var o = this,
          s = ("UL" === e.nodeName ? le(e).find(pe) : le(e).children(fe))[0];
        e = i && s && le(s).hasClass("fade");
        s && e ? (e = be.getTransitionDurationFromElement(s), le(s).one(be.TRANSITION_END, n).emulateTransitionEnd(e)) : n()
      }, Oe._transitionComplete = function(t, e, i) {
        var n;
        e && (le(e).removeClass("show " + de), (n = le(e.parentNode).find("> .dropdown-menu .active")[0]) && le(n).removeClass(de), "tab" === e.getAttribute("role")) && e.setAttribute("aria-selected", !1), le(t).addClass(de), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), be.reflow(t), le(t).addClass("show"), t.parentNode && le(t.parentNode).hasClass("dropdown-menu") && ((n = le(t).closest(".dropdown")[0]) && (e = [].slice.call(n.querySelectorAll(".dropdown-toggle")), le(e).addClass(de)), t.setAttribute("aria-expanded", !0)), i && i()
      }, Ae._jQueryInterface = function(t) {
        return this.each(function() {
          var e = le(this),
            i = e.data(ue);
          if (i || (i = new Ae(this), e.data(ue, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t]()
          }
        })
      }, o(Ae, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), me = Ae, le(document).on(he.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
        t.preventDefault(), me._jQueryInterface.call(le(this), "show")
      }), le.fn.tab = me._jQueryInterface, le.fn.tab.Constructor = me, le.fn.tab.noConflict = function() {
        return le.fn.tab = ce, me._jQueryInterface
      }, me);
  
    function Ae(t) {
      this._element = t
    }
  
    function Le(t, e) {
      var i = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + oe + "," + this._config.target + " " + se + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Kt(this._scrollElement).on(ee.SCROLL, function(t) {
        return i._process(t)
      }), this.refresh(), this._process()
    }
  
    function ze() {
      return ge.apply(this, arguments) || this
    }
  
    function ke(t, e) {
      if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
    }
  
    function Pe(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
    }
  
    function Ne(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
  
    function je(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = L.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
      for (var i = [].slice.call(document.querySelectorAll(q)), n = 0, o = i.length; n < o; n++) {
        var s = i[n],
          r = be.getSelectorFromElement(s),
          a = [].slice.call(document.querySelectorAll(r)).filter(function(e) {
            return e === t
          });
        null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(s))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
  
    function Re(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = _(t)[0], this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._addEventListeners()
    }
  
    function Me(t) {
      this._element = t
    }
  
    function He(t) {
      this._element = t
    }
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    if ((e = e.fn.jquery.split(" ")[0].split("."))[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    t.Util = be, t.Alert = we, t.Button = Ee, t.Carousel = Ce, t.Collapse = Ie, t.Dropdown = Fe, t.Modal = Se, t.Popover = xe, t.Scrollspy = De, t.Tab = Oe, t.Tooltip = Te, Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }), $(document).ready(function() {
    $("a[href^='#']").on("click", function(t) {
      if (t.preventDefault(), (t = $(this).attr("href").substring(1)) && (t = $("#" + t)).length) {
        t = t.offset().top;
        let e = window.scrollY,
          i = t - e,
          n = 300,
          o = null,
          s = t => {
            let r = (t - (o = null === o ? t : o)) / n;
            1 < r && (r = 1), t = e + i * ((t = r) < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), window.scrollTo(0, t), r < 1 && requestAnimationFrame(s)
          };
        requestAnimationFrame(s), history.pushState(null, "", window.location.pathname + window.location.search)
      }
    })
  }), (t => {
    var e = t("header").height() + 50;
    t(".header_area").length && t(window).scroll(function() {
      var i = t(window).scrollTop();
      e <= i ? t(".header_area").addClass("navbar_fixed") : t(".header_area").removeClass("navbar_fixed")
    })
  })(jQuery), ((t, e) => {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
  })(window, function(t, e) {
    function i(i, s, a) {
      (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
      }), a.fn[i] = function(t) {
        var e, n, l, u, c, h;
        return "string" == typeof t ? (e = o.call(arguments, 1), l = e, c = "$()." + i + '("' + (n = t) + '")', this.each(function(t, e) {
          var o;
          (e = a.data(e, i)) ? (o = e[n]) && "_" != n.charAt(0) ? (o = o.apply(e, l), u = void 0 === u ? o : u) : r(c + " is not a valid method"): r(i + " not initialized. Cannot call methods, i.e. " + c)
        }), void 0 !== u ? u : this) : (h = t, this.each(function(t, e) {
          var n = a.data(e, i);
          n ? (n.option(h), n._init()) : (n = new s(e, h), a.data(e, i, n))
        }), this)
      }, n(a))
    }
  
    function n(t) {
      t && !t.bridget && (t.bridget = i)
    }
    var o = Array.prototype.slice,
      s = t.console,
      r = void 0 === s ? function() {} : function(t) {
        s.error(t)
      };
    return n(e || t.jQuery), i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
      var i;
      if (t && e) return -1 == (i = (i = this._events = this._events || {})[t] = i[t] || []).indexOf(e) && i.push(e), this
    }, e.once = function(t, e) {
      var i;
      if (t && e) return this.on(t, e), ((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0, this
    }, e.off = function(t, e) {
      if ((t = this._events && this._events[t]) && t.length) return -1 != (e = t.indexOf(e)) && t.splice(e, 1), this
    }, e.emitEvent = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        e = e || [];
        for (var s = this._onceEvents && this._onceEvents[t]; o;) {
          var r = s && s[o];
          r && (this.off(t, o), delete s[o]), o.apply(this, e), o = i[n += r ? 0 : 1]
        }
        return this
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
  })(window, function() {
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e
    }
  
    function e(t) {
      return (t = getComputedStyle(t)) || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }
    var i, n = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t)
      },
      o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      s = o.length,
      r = !1;
    return function n(a) {
      if (r || (r = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (g = document.body || document.documentElement).appendChild(v), d = e(v), n.isBoxSizeOuter = i = 200 == t(d.width), g.removeChild(v)), (a = "string" == typeof a ? document.querySelector(a) : a) && "object" == typeof a && a.nodeType) {
        var l = e(a);
        if ("none" == l.display) {
          for (var u = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
            }, c = 0; c < s; c++) u[o[c]] = 0;
          return u
        }
        var h = {};
        h.width = a.offsetWidth, h.height = a.offsetHeight;
        for (var d = h.isBorderBox = "border-box" == l.boxSizing, f = 0; f < s; f++) {
          var p = o[f],
            m = l[p];
          m = parseFloat(m);
          h[p] = isNaN(m) ? 0 : m
        }
        var g = h.paddingLeft + h.paddingRight,
          v = h.paddingTop + h.paddingBottom,
          y = (a = h.marginLeft + h.marginRight, h.marginTop + h.marginBottom),
          _ = h.borderLeftWidth + h.borderRightWidth,
          b = h.borderTopWidth + h.borderBottomWidth,
          w = (d = d && i, t(l.width));
        return !1 !== w && (h.width = w + (d ? 0 : g + _)), !1 !== (w = t(l.height)) && (h.height = w + (d ? 0 : v + b)), h.innerWidth = h.width - (g + _), h.innerHeight = h.height - (v + b), h.outerWidth = h.width + a, h.outerHeight = h.height + y, h
      }
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
  })(window, function() {
    var t = (() => {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n
      }
    })();
    return function(e, i) {
      return e[t](i)
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
  })(window, function(t, e) {
    var i = {
        extend: function(t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        modulo: function(t, e) {
          return (t % e + e) % e
        },
        makeArray: function(t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e
        },
        removeFrom: function(t, e) {
          -1 != (e = t.indexOf(e)) && t.splice(e, 1)
        },
        getParent: function(t, i) {
          for (; t.parentNode && t != document.body;)
            if (e(t = t.parentNode, i)) return t
        },
        getQueryElement: function(t) {
          return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t)
        },
        filterFindElements: function(t, n) {
          t = i.makeArray(t);
          var o = [];
          return t.forEach(function(t) {
            if (t instanceof HTMLElement)
              if (n) {
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
              } else o.push(t)
          }), o
        },
        debounceMethod: function(t, e, i) {
          var n = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function() {
            var t = this[o],
              e = (t && clearTimeout(t), arguments),
              s = this;
            this[o] = setTimeout(function() {
              n.apply(s, e), delete s[o]
            }, i || 100)
          }
        },
        docReady: function(t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        },
        toDashed: function(t) {
          return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
          }).toLowerCase()
        }
      },
      n = t.console;
    return i.htmlInit = function(e, o) {
      i.docReady(function() {
        var s = "data-" + (a = i.toDashed(o)),
          r = document.querySelectorAll("[" + s + "]"),
          a = document.querySelectorAll(".js-" + a),
          l = (r = i.makeArray(r).concat(i.makeArray(a)), s + "-options"),
          u = t.jQuery;
        r.forEach(function(t) {
          var i, r = t.getAttribute(s) || t.getAttribute(l);
          try {
            i = r && JSON.parse(r)
          } catch (i) {
            return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + i))
          }
          r = new e(t, i), u && u.data(t, o, r)
        })
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
  })(window, function(t, e) {
    function i(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }
    var n = "string" == typeof(o = document.documentElement.style).transition ? "transition" : "WebkitTransition",
      o = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      } [n],
      r = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
      },
      a = ((t = i.prototype = Object.create(t.prototype)).constructor = i, t._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        })
      }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, t.getSize = function() {
        this.size = e(this.element)
      }, t.css = function(t) {
        var e, i = this.element.style;
        for (e in t) i[r[e] || e] = t[e]
      }, t.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = (t = t[i ? "top" : "bottom"], this.layout.size);
        n = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10), t = -1 != t.indexOf("%") ? parseFloat(t) / 100 * o.height : parseInt(t, 10), n = isNaN(n) ? 0 : n, t = isNaN(t) ? 0 : t;
        n -= e ? o.paddingLeft : o.paddingRight, t -= i ? o.paddingTop : o.paddingBottom, this.position.x = n, this.position.y = t
      }, t.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "right" : "left",
          s = this.position.x + t[i ? "paddingLeft" : "paddingRight"];
        e[i ? "left" : "right"] = this.getXValue(s), e[o] = "", i = n ? "paddingTop" : "paddingBottom", s = n ? "bottom" : "top", o = this.position.y + t[i];
        e[n ? "top" : "bottom"] = this.getYValue(o), e[s] = "", this.css(e), this.emitEvent("layout", [this])
      }, t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
      }, t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
      }, t._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10);
        o = o === this.position.x && s === this.position.y;
        this.setPosition(t, e), o && !this.isTransitioning ? this.layoutPosition() : ((s = {}).transform = this.getTranslate(t - i, e - n), this.transition({
          to: s,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        }))
      }, t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (this.layout._getOption("originTop") ? e : -e) + "px, 0)"
      }, t.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
      }, t.moveTo = t._transitionTo, t.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
      }, t._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
      }, t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e, i = this._transn;
          for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
      }, "opacity," + o.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
      })),
      l = (t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = this.layout.options.transitionDuration, this.css({
          transitionProperty: a,
          transitionDuration: "number" == typeof t ? t + "ms" : t,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(s, this, !1))
      }, t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
      }, t.onotransitionend = function(t) {
        this.ontransitionend(t)
      }, {
        "-webkit-transform": "transform"
      }),
      u = (t.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn, i = l[t.propertyName] || t.propertyName, delete e.ingProperties[i], (() => {
          for (var t in e.ingProperties) return;
          return 1
        })() && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
      }, t.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
      }, t._removeStyles = function(t) {
        var e, i = {};
        for (e in t) i[e] = "";
        this.css(i)
      }, {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      });
    return t.removeTransitionStyles = function() {
      this.css(u)
    }, t.stagger = function(t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, t.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, t.remove = function() {
      return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
        this.removeElem()
      }), void this.hide()) : void this.removeElem()
    }, t.reveal = function() {
      delete this.isHidden, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: t.hiddenStyle,
        to: t.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
    }, t.getHideRevealTransitionEndProperty = function(t) {
      if ((t = this.layout.options[t]).opacity) return "opacity";
      for (var e in t) return e
    }, t.hide = function() {
      this.isHidden = !0, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: t.visibleStyle,
        to: t.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, t.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
      return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
  })(window, function(t, e, i, n, o) {
    function s(t, e) {
      var i = n.getQueryElement(t);
      i ? (this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), e = ++c, this.element.outlayerGUID = e, (h[e] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
  
    function r(t) {
      function e() {
        t.apply(this, arguments)
      }
      return (e.prototype = Object.create(t.prototype)).constructor = e
    }
  
    function a() {}
    var l = t.console,
      u = t.jQuery,
      c = 0,
      h = {},
      d = (s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      }, s.prototype),
      f = (n.extend(d, e.prototype), d.option = function(t) {
        n.extend(this.options, t)
      }, d._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
      }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, d._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
      }, d.reloadItems = function() {
        this.items = this._itemize(this.element.children)
      }, d._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
          var s = new i(e[o], this);
          n.push(s)
        }
        return n
      }, d._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
      }, d.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element
        })
      }, d.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
      }, d._init = d.layout, d._resetLayout = function() {
        this.getSize()
      }, d.getSize = function() {
        this.size = i(this.element)
      }, d._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
      }, d.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
      }, d._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored
        })
      }, d._layoutItems = function(t, e) {
        var i;
        this._emitCompleteOnItems("layout", t), t && t.length && (i = [], t.forEach(function(t) {
          var n = this._getItemLayoutPosition(t);
          n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
        }, this), this._processLayoutQueue(i))
      }, d._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        }
      }, d._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
      }, d.updateStagger = function() {
        var t, e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = "number" == typeof e ? e : (t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1], e = e && e[2], t.length ? parseFloat(t) * (f[e] || 1) : 0), this.stagger)
      }, d._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
      }, d._postLayout = function() {
        this.resizeContainer()
      }, d.resizeContainer = function() {
        var t;
        this._getOption("resizeContainer") && (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
      }, d._getContainerSize = a, d._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
      }, d._emitCompleteOnItems = function(t, e) {
        function i() {
          s.dispatchEvent(t + "Complete", null, [e])
        }
  
        function n() {
          ++o == r && i()
        }
        var o, s = this,
          r = e.length;
        e && r ? (o = 0, e.forEach(function(e) {
          e.once(t, n)
        })) : i()
      }, d.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n), u && (this.$element = this.$element || u(this.element), e ? ((n = u.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
      }, d.ignore = function(t) {
        (t = this.getItem(t)) && (t.isIgnored = !0)
      }, d.unignore = function(t) {
        (t = this.getItem(t)) && delete t.isIgnored
      }, d.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
      }, d.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
          n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
      }, d._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
      }, d._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
      }, d._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
      }, d._manageStamp = a, d._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect;
        t = i(t);
        return {
          left: e.left - n.left - t.marginLeft,
          top: e.top - n.top - t.marginTop,
          right: n.right - e.right - t.marginRight,
          bottom: n.bottom - e.bottom - t.marginBottom
        }
      }, d.handleEvent = n.handleEvent, d.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
      }, d.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
      }, d.onresize = function() {
        this.resize()
      }, n.debounceMethod(s, "onresize", 100), d.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, d.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
      }, d.addItems = function(t) {
        return (t = this._itemize(t)).length && (this.items = this.items.concat(t)), t
      }, d.appended = function(t) {
        (t = this.addItems(t)).length && (this.layoutItems(t, !0), this.reveal(t))
      }, d.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (e = this.items.slice(0), this.items = t.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e))
      }, d.reveal = function(t) {
        var e;
        this._emitCompleteOnItems("reveal", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.reveal()
        }))
      }, d.hide = function(t) {
        var e;
        this._emitCompleteOnItems("hide", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.hide()
        }))
      }, d.revealItemElements = function(t) {
        t = this.getItems(t), this.reveal(t)
      }, d.hideItemElements = function(t) {
        t = this.getItems(t), this.hide(t)
      }, d.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i
        }
      }, d.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
          (t = this.getItem(t)) && e.push(t)
        }, this), e
      }, d.remove = function(t) {
        t = this.getItems(t), this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(t) {
          t.remove(), n.removeFrom(this.items, t)
        }, this)
      }, d.destroy = function() {
        (t = this.element.style).height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
          t.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
      }, s.data = function(t) {
        return (t = (t = n.getQueryElement(t)) && t.outlayerGUID) && h[t]
      }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
      }, {
        ms: 1,
        s: 1e3
      });
    return s.Item = o, s
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
  })(window, function(t) {
    function e() {
      t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create,
      o = (i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
      }, i.updateSortData = function() {
        if (!this.isIgnored) {
          this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
          var t, e = this.layout.options.getSortData,
            i = this.layout._sorters;
          for (t in e) {
            var n = i[t];
            this.sortData[t] = n(this.element, this)
          }
        }
      }, i.destroy);
    return i.destroy = function() {
      o.apply(this, arguments), this.css({
        display: ""
      })
    }, e
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
  })(window, function(t, e) {
    function i(t) {
      (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
      n[t] = function() {
        return e.prototype[t].apply(this.isotope, arguments)
      }
    }), n.needsVerticalResizeLayout = function() {
      var e = t(this.isotope.element);
      return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
      t += e;
      var i, n = "outer" + e;
      this._getMeasurement(t, n), this[t] || (i = this.getFirstItemSize(), this[t] = i && i[n] || this.isotope.size["inner" + e])
    }, n.getFirstItemSize = function() {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
    }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
      function o() {
        i.apply(this, arguments)
      }
      return (o.prototype = Object.create(n)).constructor = o, e && (o.options = e), i.modes[o.prototype.namespace = t] = o
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
  })(window, function(t, e) {
    (t = t.create("masonry")).compatOptions.fitWidth = "isFitWidth";
    var i = t.prototype;
    return i._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var t = 0; t < this.cols; t++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
      this.getContainerWidth(), this.columnWidth || (t = (t = this.items[0]) && t.element, this.columnWidth = t && e(t).outerWidth || this.containerWidth);
      var t = this.columnWidth += this.gutter,
        i = (n = this.containerWidth + this.gutter) / t,
        n = t - n % t;
      i = Math[n && n < 1 ? "round" : "floor"](i);
      this.cols = Math.max(i, 1)
    }, i.getContainerWidth = function() {
      var t = this._getOption("fitWidth") ? this.element.parentNode : this.element;
      t = e(t);
      this.containerWidth = t && t.innerWidth
    }, i._getItemLayoutPosition = function(t) {
      t.getSize();
      for (var e = t.size.outerWidth % this.columnWidth, i = (e = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), e = Math.min(e, this.cols), this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](e, t)), n = {
          x: this.columnWidth * i.col,
          y: i.y
        }, o = i.y + t.size.outerHeight, s = e + i.col, r = i.col; r < s; r++) this.colYs[r] = o;
      return n
    }, i._getTopColPosition = function(t) {
      t = this._getTopColGroup(t);
      var e = Math.min.apply(Math, t);
      return {
        col: t.indexOf(e),
        y: e
      }
    }, i._getTopColGroup = function(t) {
      if (t < 2) return this.colYs;
      for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
      return e
    }, i._getColGroupY = function(t, e) {
      return e < 2 ? this.colYs[t] : (t = this.colYs.slice(t, t + e), Math.max.apply(Math, t))
    }, i._getHorizontalColPosition = function(t, e) {
      var i = this.horizontalColIndex % this.cols;
      i = 1 < t && i + t > this.cols ? 0 : i, e = e.size.outerWidth && e.size.outerHeight;
      return this.horizontalColIndex = e ? i + t : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, t)
      }
    }, i._manageStamp = function(t) {
      var i = e(t),
        n = (t = this._getElementOffset(t), (o = this._getOption("originLeft") ? t.left : t.right) + i.outerWidth),
        o = Math.floor(o / this.columnWidth),
        s = (o = Math.max(0, o), Math.floor(n / this.columnWidth));
      s -= n % this.columnWidth ? 0 : 1;
      s = Math.min(this.cols - 1, s);
      for (var r = (this._getOption("originTop") ? t.top : t.bottom) + i.outerHeight, a = o; a <= s; a++) this.colYs[a] = Math.max(r, this.colYs[a])
    }, i._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i._getContainerFitWidth = function() {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
      return (this.cols - t) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
  })(window, function(t, e) {
    var i, n = (t = t.create("masonry")).prototype,
      o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
    for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
    var s = n.measureColumns,
      r = (n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
      }, n._getOption);
    return n._getOption = function(t) {
      return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("fitRows")).prototype;
    return e._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY), i = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
    }, e._getContainerSize = function() {
      return {
        height: this.maxY
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("vertical", {
      horizontalAlignment: 0
    })).prototype;
    return e._resetLayout = function() {
      this.y = 0
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
      return this.y += t.size.outerHeight, {
        x: e,
        y: i
      }
    }, e._getContainerSize = function() {
      return {
        height: this.y
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
      return e(t, i, 0, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, 0, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
  })(window, function(t, e, i, n, o, s, r) {
    var a = t.jQuery,
      l = String.prototype.trim ? function(t) {
        return t.trim()
      } : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
      },
      u = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
    u.Item = s, u.LayoutMode = r, (t = u.prototype)._create = function() {
      for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
    }, t.reloadItems = function() {
      this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, t._itemize = function() {
      for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
      return this._updateItemsSortData(t), t
    }, t._initLayoutMode = function(t) {
      var e = r.modes[t],
        i = this.options[t] || {};
      this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, t.layout = function() {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, t._layout = function() {
      var t = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, t.arrange = function(t) {
      this.option(t), this._getIsInstant(), t = this._filter(this.items), this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, t._init = t.arrange, t._hideReveal = function(t) {
      this.reveal(t.needReveal), this.hide(t.needHide)
    }, t._getIsInstant = function() {
      var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
      return this._isInstant = t
    }, t._bindArrangeComplete = function() {
      function t() {
        e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
      }
      var e, i, n, o = this;
      this.once("layoutComplete", function() {
        e = !0, t()
      }), this.once("hideComplete", function() {
        i = !0, t()
      }), this.once("revealComplete", function() {
        n = !0, t()
      })
    }, t._filter = function(t) {
      for (var e = this.options.filter, i = [], n = [], o = [], s = this._getFilterTest(e || "*"), r = 0; r < t.length; r++) {
        var a, l = t[r];
        l.isIgnored || ((a = s(l)) && i.push(l), a && l.isHidden ? n.push(l) : a || l.isHidden || o.push(l))
      }
      return {
        matches: i,
        needReveal: n,
        needHide: o
      }
    }, t._getFilterTest = function(t) {
      return a && this.options.isJQueryFiltering ? function(e) {
        return a(e.element).is(t)
      } : "function" == typeof t ? function(e) {
        return t(e.element)
      } : function(e) {
        return n(e.element, t)
      }
    }, t.updateSortData = function(t) {
      t = t ? (t = o.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(t)
    }, t._getSorters = function() {
      var t, e = this.options.getSortData;
      for (t in e) {
        var i = e[t];
        this._sorters[t] = c(i)
      }
    }, t._updateItemsSortData = function(t) {
      for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
    };
    var c = function(t) {
        var e, i, n, o, s, r;
        return "string" != typeof t ? t : (i = (i = (e = (t = l(t).split(" "))[0]).match(/^\[(.+)\]$/)) && i[1], r = e, n = (s = i) ? function(t) {
          return t.getAttribute(s)
        } : function(t) {
          return (t = t.querySelector(r)) && t.textContent
        }, (o = u.sortDataParsers[t[1]]) ? function(t) {
          return t && o(n(t))
        } : function(t) {
          return t && n(t)
        })
      },
      h = (u.sortDataParsers = {
        parseInt: function(t) {
          return parseInt(t, 10)
        },
        parseFloat: function(t) {
          return parseFloat(t)
        }
      }, t._sort = function() {
        var t, e, i;
        this.options.sortBy && (t = o.makeArray(this.options.sortBy), this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)), e = this.sortHistory, i = this.options.sortAscending, this.filteredItems.sort(function(t, n) {
          for (var o = 0; o < e.length; o++) {
            var s = e[o],
              r = t.sortData[s],
              a = n.sortData[s];
            if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== i[s] ? i[s] : i) ? 1 : -1)
          }
          return 0
        }))
      }, t._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0
      }, t._mode = function() {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (e) return e.options = this.options[t], e;
        throw new Error("No layout mode: " + t)
      }, t._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, t._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
      }, t._manageStamp = function(t) {
        this._mode()._manageStamp(t)
      }, t._getContainerSize = function() {
        return this._mode()._getContainerSize()
      }, t.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
      }, t.appended = function(t) {
        (t = this.addItems(t)).length && (t = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(t))
      }, t.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (this._resetLayout(), this._manageStamps(), e = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = e.concat(this.filteredItems), this.items = t.concat(this.items))
      }, t._filterRevealAdded = function(t) {
        return t = this._filter(t), this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
      }, t.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var i, n = e.length, o = 0; o < n; o++) i = e[o], this.element.appendChild(i.element);
          for (t = this._filter(e).matches, o = 0; o < n; o++) e[o].isLayoutInstant = !0;
          for (this.arrange(), o = 0; o < n; o++) delete e[o].isLayoutInstant;
          this.reveal(t)
        }
      }, t.remove);
    return t.remove = function(t) {
      t = o.makeArray(t);
      var e = this.getItems(t);
      h.call(this, t);
      for (var i = e && e.length, n = 0; i && n < i; n++) {
        var s = e[n];
        o.removeFrom(this.filteredItems, s)
      }
    }, t.shuffle = function() {
      for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
    }, t._noTransition = function(t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0, t = t.apply(this, e);
      return this.options.transitionDuration = i, t
    }, t.getFilteredItemElements = function() {
      return this.filteredItems.map(function(t) {
        return t.element
      })
    }, u
  }), (t => {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
  })(function(t) {
    function e() {}
  
    function i(t, e) {
      a.ev.on("mfp" + t + v, e)
    }
  
    function n(e, i, n, o) {
      var s = document.createElement("div");
      return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
    }
  
    function o(e, i) {
      a.ev.triggerHandler("mfp" + e, i), a.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), a.st.callbacks[e]) && a.st.callbacks[e].apply(a, t.isArray(i) ? i : [i])
    }
  
    function s(e) {
      return e === d && a.currTemplate.closeBtn || (a.currTemplate.closeBtn = t(a.st.closeMarkup.replace("%title%", a.st.tClose)), d = e), a.currTemplate.closeBtn
    }
  
    function r() {
      t.magnificPopup.instance || ((a = new e).init(), t.magnificPopup.instance = a)
    }
    var a, l, u, c, h, d, f = "Close",
      p = "BeforeClose",
      m = "MarkupParse",
      g = "Open",
      v = ".mfp",
      y = "mfp-ready",
      _ = "mfp-removing",
      b = "mfp-prevent-close",
      w = !!window.jQuery,
      E = t(window);
  
    function C() {
      S && (F.after(S.addClass(I)).detach(), S = null)
    }
    t.magnificPopup = {
      instance: null,
      proto: e.prototype = {
        constructor: e,
        init: function() {
          var e = navigator.appVersion;
          a.isLowIE = a.isIE8 = document.all && !document.addEventListener, a.isAndroid = /android/gi.test(e), a.isIOS = /iphone|ipad|ipod/gi.test(e), a.supportsTransition = (() => {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
              if (e.pop() + "Transition" in t) return !0;
            return !1
          })(), a.probablyMobile = a.isAndroid || a.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), u = t(document), a.popupsCache = {}
        },
        open: function(e) {
          if (!1 === e.isObj) {
            a.items = e.items.toArray(), a.index = 0;
            for (var r, l = e.items, c = 0; c < l.length; c++)
              if (((r = l[c]).parsed ? r.el[0] : r) === e.el[0]) {
                a.index = c;
                break
              }
          } else a.items = t.isArray(e.items) ? e.items : [e.items], a.index = e.index || 0;
          if (!a.isOpen) {
            a.types = [], h = "", e.mainEl && e.mainEl.length ? a.ev = e.mainEl.eq(0) : a.ev = u, e.key ? (a.popupsCache[e.key] || (a.popupsCache[e.key] = {}), a.currTemplate = a.popupsCache[e.key]) : a.currTemplate = {}, a.st = t.extend(!0, {}, t.magnificPopup.defaults, e), a.fixedContentPos = "auto" === a.st.fixedContentPos ? !a.probablyMobile : a.st.fixedContentPos, a.st.modal && (a.st.closeOnContentClick = !1, a.st.closeOnBgClick = !1, a.st.showCloseBtn = !1, a.st.enableEscapeKey = !1), a.bgOverlay || (a.bgOverlay = n("bg").on("click" + v, function() {
              a.close()
            }), a.wrap = n("wrap").attr("tabindex", -1).on("click" + v, function(t) {
              a._checkIfClose(t.target) && a.close()
            }), a.container = n("container", a.wrap)), a.contentContainer = n("content"), a.st.preloader && (a.preloader = n("preloader", a.container, a.st.tLoading));
            var d = t.magnificPopup.modules;
            for (c = 0; c < d.length; c++) {
              var f = (f = d[c]).charAt(0).toUpperCase() + f.slice(1);
              a["init" + f].call(a)
            }
            o("BeforeOpen"), a.st.showCloseBtn && (a.st.closeBtnInside ? (i(m, function(t, e, i, n) {
              i.close_replaceWith = s(n.type)
            }), h += " mfp-close-btn-in") : a.wrap.append(s())), a.st.alignTop && (h += " mfp-align-top"), a.fixedContentPos ? a.wrap.css({
              overflow: a.st.overflowY,
              overflowX: "hidden",
              overflowY: a.st.overflowY
            }) : a.wrap.css({
              top: E.scrollTop(),
              position: "absolute"
            }), !1 !== a.st.fixedBgPos && ("auto" !== a.st.fixedBgPos || a.fixedContentPos) || a.bgOverlay.css({
              height: u.height(),
              position: "absolute"
            }), a.st.enableEscapeKey && u.on("keyup" + v, function(t) {
              27 === t.keyCode && a.close()
            }), E.on("resize" + v, function() {
              a.updateSize()
            }), a.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && a.wrap.addClass(h);
            var p = a.wH = E.height(),
              _ = {},
              b = (a.fixedContentPos && a._hasScrollBar(p) && (b = a._getScrollbarSize()) && (_.marginRight = b), a.fixedContentPos && (a.isIE7 ? t("body, html").css("overflow", "hidden") : _.overflow = "hidden"), a.st.mainClass);
            return a.isIE7 && (b += " mfp-ie7"), b && a._addClassToMFP(b), a.updateItemHTML(), o("BuildControls"), t("html").css(_), a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo || t(document.body)), a._lastFocusedEl = document.activeElement, setTimeout(function() {
              a.content ? (a._addClassToMFP(y), a._setFocus()) : a.bgOverlay.addClass(y), u.on("focusin" + v, a._onFocusIn)
            }, 16), a.isOpen = !0, a.updateSize(p), o(g), e
          }
          a.updateItemHTML()
        },
        close: function() {
          a.isOpen && (o(p), a.isOpen = !1, a.st.removalDelay && !a.isLowIE && a.supportsTransition ? (a._addClassToMFP(_), setTimeout(function() {
            a._close()
          }, a.st.removalDelay)) : a._close())
        },
        _close: function() {
          o(f);
          var e = _ + " " + y + " ";
          a.bgOverlay.detach(), a.wrap.detach(), a.container.empty(), a.st.mainClass && (e += a.st.mainClass + " "), a._removeClassFromMFP(e), a.fixedContentPos && (e = {
            marginRight: ""
          }, a.isIE7 ? t("body, html").css("overflow", "") : e.overflow = "", t("html").css(e)), u.off("keyup.mfp focusin" + v), a.ev.off(v), a.wrap.attr("class", "mfp-wrap").removeAttr("style"), a.bgOverlay.attr("class", "mfp-bg"), a.container.attr("class", "mfp-container"), !a.st.showCloseBtn || a.st.closeBtnInside && !0 !== a.currTemplate[a.currItem.type] || a.currTemplate.closeBtn && a.currTemplate.closeBtn.detach(), a.st.autoFocusLast && a._lastFocusedEl && t(a._lastFocusedEl).focus(), a.currItem = null, a.content = null, a.currTemplate = null, a.prevHeight = 0, o("AfterClose")
        },
        updateSize: function(t) {
          var e;
          a.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, a.wrap.css("height", e *= window.innerHeight), a.wH = e) : a.wH = t || E.height(), a.fixedContentPos || a.wrap.css("height", a.wH), o("Resize")
        },
        updateItemHTML: function() {
          var e = a.items[a.index],
            i = (a.contentContainer.detach(), a.content && a.content.detach(), (e = e.parsed ? e : a.parseEl(a.index)).type),
            n = (o("BeforeChange", [a.currItem ? a.currItem.type : "", i]), a.currItem = e, a.currTemplate[i] || (o("FirstMarkupParse", n = !!a.st[i] && a.st[i].markup), a.currTemplate[i] = !n || t(n)), c && c !== e.type && a.container.removeClass("mfp-" + c + "-holder"), a["get" + i.charAt(0).toUpperCase() + i.slice(1)](e, a.currTemplate[i]));
          a.appendContent(n, i), e.preloaded = !0, o("Change", e), c = e.type, a.container.prepend(a.contentContainer), o("AfterChange")
        },
        appendContent: function(t, e) {
          (a.content = t) ? a.st.showCloseBtn && a.st.closeBtnInside && !0 === a.currTemplate[e] ? a.content.find(".mfp-close").length || a.content.append(s()) : a.content = t: a.content = "", o("BeforeAppend"), a.container.addClass("mfp-" + e + "-holder"), a.contentContainer.append(a.content)
        },
        parseEl: function(e) {
          var i, n = a.items[e];
          if ((n = n.tagName ? {
              el: t(n)
            } : (i = n.type, {
              data: n,
              src: n.src
            })).el) {
            for (var s = a.types, r = 0; r < s.length; r++)
              if (n.el.hasClass("mfp-" + s[r])) {
                i = s[r];
                break
              } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
          }
          return n.type = i || a.st.type || "inline", n.index = e, n.parsed = !0, a.items[e] = n, o("ElementParse", n), a.items[e]
        },
        addGroup: function(t, e) {
          function i(i) {
            i.mfpEl = this, a._openClick(i, t, e)
          }
          var n = "click.magnificPopup";
          (e = e || {}).mainEl = t, e.items ? (e.isObj = !0, t.off(n).on(n, i)) : (e.isObj = !1, e.delegate ? t.off(n).on(n, e.delegate, i) : (e.items = t).off(n).on(n, i))
        },
        _openClick: function(e, i, n) {
          if ((void 0 !== n.midClick ? n : t.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
            var o = (void 0 !== n.disableOn ? n : t.magnificPopup.defaults).disableOn;
            if (o)
              if (t.isFunction(o)) {
                if (!o.call(a)) return !0
              } else if (E.width() < o) return !0;
            e.type && (e.preventDefault(), a.isOpen) && e.stopPropagation(), n.el = t(e.mfpEl), n.delegate && (n.items = i.find(n.delegate)), a.open(n)
          }
        },
        updateStatus: function(t, e) {
          var i;
          a.preloader && (l !== t && a.container.removeClass("mfp-s-" + l), o("UpdateStatus", i = {
            status: t,
            text: e = e || "loading" !== t ? e : a.st.tLoading
          }), t = i.status, a.preloader.html(e = i.text), a.preloader.find("a").on("click", function(t) {
            t.stopImmediatePropagation()
          }), a.container.addClass("mfp-s-" + t), l = t)
        },
        _checkIfClose: function(e) {
          if (!t(e).hasClass(b)) {
            var i = a.st.closeOnContentClick,
              n = a.st.closeOnBgClick;
            if (i && n) return !0;
            if (!a.content || t(e).hasClass("mfp-close") || a.preloader && e === a.preloader[0]) return !0;
            if (e === a.content[0] || t.contains(a.content[0], e)) {
              if (i) return !0
            } else if (n && t.contains(document, e)) return !0;
            return !1
          }
        },
        _addClassToMFP: function(t) {
          a.bgOverlay.addClass(t), a.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
          this.bgOverlay.removeClass(t), a.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
          return (a.isIE7 ? u.height() : document.body.scrollHeight) > (t || E.height())
        },
        _setFocus: function() {
          (a.st.focus ? a.content.find(a.st.focus).eq(0) : a.wrap).focus()
        },
        _onFocusIn: function(e) {
          return e.target === a.wrap[0] || t.contains(a.wrap[0], e.target) ? void 0 : (a._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
          var s;
          n.data && (i = t.extend(n.data, i)), o(m, [e, i, n]), t.each(i, function(i, n) {
            if (void 0 === n || !1 === n) return !0;
            var o, r;
            1 < (s = i.split("_")).length ? 0 < (o = e.find(v + "-" + s[0])).length && ("replaceWith" === (r = s[1]) ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)) : e.find(v + "-" + i).html(n)
          })
        },
        _getScrollbarSize: function() {
          var t;
          return void 0 === a.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), a.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), a.scrollbarSize
        }
      },
      modules: [],
      open: function(e, i) {
        return r(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
      },
      close: function() {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
      },
      registerModule: function(e, i) {
        i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0
      }
    }, t.fn.magnificPopup = function(e) {
      r();
      var i, n, o, s = t(this);
      return "string" == typeof e ? "open" === e ? (i = w ? s.data("magnificPopup") : s[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, o = i.items ? i.items[n] : (o = s, (o = i.delegate ? o.find(i.delegate) : o).eq(n)), a._openClick({
        mfpEl: o
      }, s, i)) : a.isOpen && a[e].apply(a, Array.prototype.slice.call(arguments, 1)) : (e = t.extend(!0, {}, e), w ? s.data("magnificPopup", e) : s[0].magnificPopup = e, a.addGroup(s, e)), s
    };
    var I, F, S, T = "inline";
  
    function x() {
      O && t(document.body).removeClass(O)
    }
  
    function D() {
      x(), a.req && a.req.abort()
    }
    t.magnificPopup.registerModule(T, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function() {
          a.types.push(T), i(f + "." + T, function() {
            C()
          })
        },
        getInline: function(e, i) {
          var o, s, r;
          return C(), e.src ? (o = a.st.inline, (s = t(e.src)).length ? ((r = s[0].parentNode) && r.tagName && (F || (I = o.hiddenClass, F = n(I), I = "mfp-" + I), S = s.after(F).detach().removeClass(I)), a.updateStatus("ready")) : (a.updateStatus("error", o.tNotFound), s = t("<div>")), e.inlineElement = s) : (a.updateStatus("ready"), a._parseMarkup(i, {}, e), i)
        }
      }
    });
    var O, A, L = "ajax";
  
    function z(t) {
      var e;
      a.currTemplate[j] && (e = a.currTemplate[j].find("iframe")).length && (t || (e[0].src = "//about:blank"), a.isIE8) && e.css("display", t ? "block" : "none")
    }
  
    function k(t) {
      var e = a.items.length;
      return e - 1 < t ? t - e : t < 0 ? e + t : t
    }
  
    function P(t, e, i) {
      return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    }
    t.magnificPopup.registerModule(L, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function() {
          a.types.push(L), O = a.st.ajax.cursor, i(f + "." + L, D), i("BeforeChange." + L, D)
        },
        getAjax: function(e) {
          O && t(document.body).addClass(O), a.updateStatus("loading");
          var i = t.extend({
            url: e.src,
            success: function(i, n, s) {
              o("ParseAjax", i = {
                data: i,
                xhr: s
              }), a.appendContent(t(i.data), L), e.finished = !0, x(), a._setFocus(), setTimeout(function() {
                a.wrap.addClass(y)
              }, 16), a.updateStatus("ready"), o("AjaxContentAdded")
            },
            error: function() {
              x(), e.finished = e.loadError = !0, a.updateStatus("error", a.st.ajax.tError.replace("%url%", e.src))
            }
          }, a.st.ajax.settings);
          return a.req = t.ajax(i), ""
        }
      }
    }), t.magnificPopup.registerModule("image", {
      options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function() {
          var e = a.st.image,
            n = ".image";
          a.types.push("image"), i(g + n, function() {
            "image" === a.currItem.type && e.cursor && t(document.body).addClass(e.cursor)
          }), i(f + n, function() {
            e.cursor && t(document.body).removeClass(e.cursor), E.off("resize" + v)
          }), i("Resize" + n, a.resizeImage), a.isLowIE && i("AfterChange", a.resizeImage)
        },
        resizeImage: function() {
          var t, e = a.currItem;
          e && e.img && a.st.image.verticalFit && (t = 0, a.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", a.wH - t))
        },
        _onImageHasSize: function(t) {
          t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, o("ImageHasSize", t), t.imgHidden) && (a.content && a.content.removeClass("mfp-loading"), t.imgHidden = !1)
        },
        findImageSize: function(t) {
          var e = 0,
            i = t.img[0];
          ! function n(o) {
            A && clearInterval(A), A = setInterval(function() {
              return 0 < i.naturalWidth ? void a._onImageHasSize(t) : (200 < e && clearInterval(A), void(3 == ++e ? n(10) : 40 === e ? n(50) : 100 === e && n(500)))
            }, o)
          }(1)
        },
        getImage: function(e, i) {
          function n() {
            e && (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("error", l.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
          }
          var s, r = 0,
            l = a.st.image,
            u = i.find(".mfp-img");
          return u.length && ((s = document.createElement("img")).className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = t(s).on("load.mfploader", function t() {
            e && (e.img[0].complete ? (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, o("ImageLoadComplete")) : ++r < 200 ? setTimeout(t, 100) : n())
          }).on("error.mfploader", n), s.src = e.src, u.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)), a._parseMarkup(i, {
            title: (e => {
              if (e.data && void 0 !== e.data.title) return e.data.title;
              var i = a.st.image.titleSrc;
              if (i) {
                if (t.isFunction(i)) return i.call(a, e);
                if (e.el) return e.el.attr(i) || ""
              }
              return ""
            })(e),
            img_replaceWith: e.img
          }, e), a.resizeImage(), e.hasSize ? (A && clearInterval(A), e.loadError ? (i.addClass("mfp-loading"), a.updateStatus("error", l.tError.replace("%url%", e.src))) : (i.removeClass("mfp-loading"), a.updateStatus("ready"))) : (a.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, i.addClass("mfp-loading"), a.findImageSize(e))), i
        }
      }
    }), t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function(t) {
          return t.is("img") ? t : t.find("img")
        }
      },
      proto: {
        initZoom: function() {
          var t, e, n, s, r, l, u = a.st.zoom,
            c = ".zoom";
          u.enabled && a.supportsTransition && (s = u.duration, r = function(t) {
            t = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
            var e = "all " + u.duration / 1e3 + "s " + u.easing,
              i = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              n = "transition";
            return i["-webkit-" + n] = i["-moz-" + n] = i["-o-" + n] = i[n] = e, t.css(i), t
          }, l = function() {
            a.content.css("visibility", "visible")
          }, i("BuildControls" + c, function() {
            a._allowZoom() && (clearTimeout(e), a.content.css("visibility", "hidden"), (t = a._getItemToZoom()) ? ((n = r(t)).css(a._getOffset()), a.wrap.append(n), e = setTimeout(function() {
              n.css(a._getOffset(!0)), e = setTimeout(function() {
                l(), setTimeout(function() {
                  n.remove(), t = n = null, o("ZoomAnimationEnded")
                }, 16)
              }, s)
            }, 16)) : l())
          }), i(p + c, function() {
            if (a._allowZoom()) {
              if (clearTimeout(e), a.st.removalDelay = s, !t) {
                if (!(t = a._getItemToZoom())) return;
                n = r(t)
              }
              n.css(a._getOffset(!0)), a.wrap.append(n), a.content.css("visibility", "hidden"), setTimeout(function() {
                n.css(a._getOffset())
              }, 16)
            }
          }), i(f + c, function() {
            a._allowZoom() && (l(), n && n.remove(), t = null)
          }))
        },
        _allowZoom: function() {
          return "image" === a.currItem.type
        },
        _getItemToZoom: function() {
          return !!a.currItem.hasSize && a.currItem.img
        },
        _getOffset: function(e) {
          var i = (e = e ? a.currItem.img : a.st.zoom.opener(a.currItem.el || a.currItem)).offset(),
            n = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);
          i.top -= t(window).scrollTop() - n, e = {
            width: e.width(),
            height: (w ? e.innerHeight() : e[0].offsetHeight) - o - n
          };
          return (N = void 0 === N ? void 0 !== document.createElement("p").style.MozTransform : N) ? e["-moz-transform"] = e.transform = "translate(" + i.left + "px," + i.top + "px)" : (e.left = i.left, e.top = i.top), e
        }
      }
    });
    var N, j = "iframe",
      R = (t.magnificPopup.registerModule(j, {
        options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1"
            },
            gmaps: {
              index: "//maps.google.",
              src: "%id%&output=embed"
            }
          }
        },
        proto: {
          initIframe: function() {
            a.types.push(j), i("BeforeChange", function(t, e, i) {
              e !== i && (e === j ? z() : i === j && z(!0))
            }), i(f + "." + j, function() {
              z()
            })
          },
          getIframe: function(e, i) {
            var n = e.src,
              o = a.st.iframe,
              s = (t.each(o.patterns, function() {
                return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
              }), {});
            return o.srcAction && (s[o.srcAction] = n), a._parseMarkup(i, s, e), a.updateStatus("ready"), i
          }
        }
      }), t.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%"
        },
        proto: {
          initGallery: function() {
            var e = a.st.gallery,
              n = ".mfp-gallery";
            return a.direction = !0, !(!e || !e.enabled) && (h += " mfp-gallery", i(g + n, function() {
              e.navigateByImgClick && a.wrap.on("click" + n, ".mfp-img", function() {
                return 1 < a.items.length ? (a.next(), !1) : void 0
              }), u.on("keydown" + n, function(t) {
                37 === t.keyCode ? a.prev() : 39 === t.keyCode && a.next()
              })
            }), i("UpdateStatus" + n, function(t, e) {
              e.text && (e.text = P(e.text, a.currItem.index, a.items.length))
            }), i(m + n, function(t, i, n, o) {
              var s = a.items.length;
              n.counter = 1 < s ? P(e.tCounter, o.index, s) : ""
            }), i("BuildControls" + n, function() {
              var i, n;
              1 < a.items.length && e.arrows && !a.arrowLeft && (n = e.arrowMarkup, i = a.arrowLeft = t(n.replace(/%title%/gi, e.tPrev).replace(/%dir%/gi, "left")).addClass(b), n = a.arrowRight = t(n.replace(/%title%/gi, e.tNext).replace(/%dir%/gi, "right")).addClass(b), i.click(function() {
                a.prev()
              }), n.click(function() {
                a.next()
              }), a.container.append(i.add(n)))
            }), i("Change" + n, function() {
              a._preloadTimeout && clearTimeout(a._preloadTimeout), a._preloadTimeout = setTimeout(function() {
                a.preloadNearbyImages(), a._preloadTimeout = null
              }, 16)
            }), void i(f + n, function() {
              u.off(n), a.wrap.off("click" + n), a.arrowRight = a.arrowLeft = null
            }))
          },
          next: function() {
            a.direction = !0, a.index = k(a.index + 1), a.updateItemHTML()
          },
          prev: function() {
            a.direction = !1, a.index = k(a.index - 1), a.updateItemHTML()
          },
          goTo: function(t) {
            a.direction = t >= a.index, a.index = t, a.updateItemHTML()
          },
          preloadNearbyImages: function() {
            for (var t = a.st.gallery.preload, e = Math.min(t[0], a.items.length), i = Math.min(t[1], a.items.length), n = 1; n <= (a.direction ? i : e); n++) a._preloadItem(a.index + n);
            for (n = 1; n <= (a.direction ? e : i); n++) a._preloadItem(a.index - n)
          },
          _preloadItem: function(e) {
            var i;
            e = k(e), a.items[e].preloaded || (o("LazyLoad", i = (i = a.items[e]).parsed ? i : a.parseEl(e)), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
              i.hasSize = !0
            }).on("error.mfploader", function() {
              i.hasSize = !0, i.loadError = !0, o("LazyLoadError", i)
            }).attr("src", i.src)), i.preloaded = !0)
          }
        }
      }), "retina");
    t.magnificPopup.registerModule(R, {
      options: {
        replaceSrc: function(t) {
          return t.src.replace(/\.\w+$/, function(t) {
            return "@2x" + t
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          var t, e;
          1 < window.devicePixelRatio && (t = a.st.retina, e = t.ratio, 1 < (e = isNaN(e) ? e() : e)) && (i("ImageHasSize." + R, function(t, i) {
            i.img.css({
              "max-width": i.img[0].naturalWidth / e,
              width: "100%"
            })
          }), i("ElementParse." + R, function(i, n) {
            n.src = t.replaceSrc(n, e)
          }))
        }
      }
    }), r()
  }), (t => {
    t.extend(t.fn, {
      validate: function(e) {
        var i;
        if (this.length) return (i = t.data(this[0], "validator")) || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
          i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
        }), this.submit(function(e) {
          function n() {
            var n;
            return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1)
          }
          return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : n() : (i.focusInvalid(), !1)
        })), i);
        e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
      },
      valid: function() {
        var e, i;
        return t(this[0]).is("form") ? this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function() {
          e = e && i.element(this)
        }), e)
      },
      removeAttrs: function(e) {
        var i = {},
          n = this;
        return t.each(e.split(/\s/), function(t, e) {
          i[e] = n.attr(e), n.removeAttr(e)
        }), i
      },
      rules: function(e, i) {
        var n, o = this[0];
        if (e) {
          var s, r = t.data(o.form, "validator").settings,
            a = r.rules,
            l = t.validator.staticRules(o);
          switch (e) {
            case "add":
              t.extend(l, t.validator.normalizeRule(i)), delete l.messages, a[o.name] = l, i.messages && (r.messages[o.name] = t.extend(r.messages[o.name], i.messages));
              break;
            case "remove":
              return i ? (s = {}, t.each(i.split(/\s/), function(t, e) {
                s[e] = l[e], delete l[e]
              }), s) : (delete a[o.name], l)
          }
        }
        return (e = t.validator.normalizeRules(t.extend({}, t.validator.classRules(o), t.validator.attributeRules(o), t.validator.dataRules(o), t.validator.staticRules(o)), o)).required && (n = e.required, delete e.required, e = t.extend({
          required: n
        }, e)), e
      }
    }), t.extend(t.expr[":"], {
      blank: function(e) {
        return !t.trim("" + t(e).val())
      },
      filled: function(e) {
        return !!t.trim("" + t(e).val())
      },
      unchecked: function(e) {
        return !t(e).prop("checked")
      }
    }), t.validator = function(e, i) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
      return 1 === arguments.length ? function() {
        var i = t.makeArray(arguments);
        return i.unshift(e), t.validator.format.apply(this, i)
      } : ((i = 2 < arguments.length && i.constructor !== Array ? t.makeArray(arguments).slice(1) : i).constructor !== Array && (i = [i]), t.each(i, function(t, i) {
        e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
          return i
        })
      }), e)
    }, t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(t) {
          this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
        },
        onfocusout: function(t) {
          this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
        },
        onkeyup: function(t, e) {
          9 === e.which && "" === this.elementValue(t) || !(t.name in this.submitted) && t !== this.lastElement || this.element(t)
        },
        onclick: function(t) {
          t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).addClass(i).removeClass(n)
        },
        unhighlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).removeClass(i).addClass(n)
        }
      },
      setDefaults: function(e) {
        t.extend(t.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format("Please enter no more than {0} characters."),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format("Please enter a value less than or equal to {0}."),
        min: t.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function e(e) {
            var i = t.data(this[0].form, "validator"),
              n = "on" + e.type.replace(/^validate/, "");
            i.settings[n] && i.settings[n].call(i, this[0], e)
          }
          this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var i = this.groups = {},
            n = (t.each(this.settings.groups, function(e, n) {
              "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                i[n] = e
              })
            }), this.settings.rules);
          t.each(n, function(e, i) {
            n[e] = t.validator.normalizeRule(i)
          }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
          return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
          this.prepareForm();
          for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
          return this.valid()
        },
        element: function(e) {
          e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
          var i = !1 !== this.check(e);
          return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        },
        showErrors: function(e) {
          if (e) {
            for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
              message: e[i],
              element: this.findByName(i)[0]
            });
            this.successList = t.grep(this.successList, function(t) {
              return !(t.name in e)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
          t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid)
        },
        objectLength: function(t) {
          var e, i = 0;
          for (e in t) i++;
          return i
        },
        hideErrors: function() {
          this.addWrapper(this.toHide).hide()
        },
        valid: function() {
          return 0 === this.size()
        },
        size: function() {
          return this.errorList.length
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid) try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (t) {}
        },
        findLastActive: function() {
          var e = this.lastActive;
          return e && 1 === t.grep(this.errorList, function(t) {
            return t.element.name === e.name
          }).length && e
        },
        elements: function() {
          var e = this,
            i = {};
          return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules()) || (i[this.name] = !0, 0))
          })
        },
        clean: function(e) {
          return t(e)[0]
        },
        errors: function() {
          var e = this.settings.errorClass.replace(" ", ".");
          return t(this.settings.errorElement + "." + e, this.errorContext)
        },
        reset: function() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
        },
        prepareForm: function() {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(t) {
          this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function(e) {
          var i = t(e).attr("type"),
            n = t(e).val();
          return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
        },
        check: function(e) {
          e = this.validationTargetFor(this.clean(e));
          var i, n, o = t(e).rules(),
            s = !1,
            r = this.elementValue(e);
          for (n in o) {
            var a = {
              method: n,
              parameters: o[n]
            };
            try {
              if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, r, e, a.parameters))) s = !0;
              else {
                if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                if (!i) return this.formatAndAdd(e, a), !1
              }
            } catch (i) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", i), i
            }
          }
          return s ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
        },
        customDataMessage: function(e, i) {
          return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
        },
        customMessage: function(t, e) {
          return (t = this.settings.messages[t]) && (t.constructor === String ? t : t[e])
        },
        findDefined: function() {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
        },
        defaultMessage: function(e, i) {
          return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
        },
        formatAndAdd: function(e, i) {
          var n = this.defaultMessage(e, i.method),
            o = /\$?\{(\d+)\}/g;
          "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)), this.errorList.push({
            message: n,
            element: e
          }), this.errorMap[e.name] = n, this.submitted[e.name] = n
        },
        addWrapper: function(t) {
          return this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t
        },
        defaultShowErrors: function() {
          for (var t, e = 0; this.errorList[e]; e++) {
            var i = this.errorList[e];
            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
          }
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
          return t(this.errorList).map(function() {
            return this.element
          })
        },
        showLabel: function(e, i) {
          var n = this.errorsFor(e);
          n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
        },
        errorsFor: function(e) {
          var i = this.idOrName(e);
          return this.errors().filter(function() {
            return t(this).attr("for") === i
          })
        },
        idOrName: function(t) {
          return this.groups[t.name] || !this.checkable(t) && t.id || t.name
        },
        validationTargetFor: function(t) {
          return this.checkable(t) ? this.findByName(t.name).not(this.settings.ignore)[0] : t
        },
        checkable: function(t) {
          return /radio|checkbox/i.test(t.type)
        },
        findByName: function(e) {
          return t(this.currentForm).find("[name='" + e + "']")
        },
        getLength: function(e, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", i).length;
            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
          }
          return e.length
        },
        depend: function(t, e) {
          return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
        },
        dependTypes: {
          "boolean": function(t) {
            return t
          },
          string: function(e, i) {
            return !!t(e, i.form).length
          },
          "function": function(t, e) {
            return t(e)
          }
        },
        optional: function(e) {
          var i = this.elementValue(e);
          return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
        },
        startRequest: function(t) {
          this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
        },
        stopRequest: function(e, i) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(e) {
          return t.data(e, "previousValue") || t.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function(e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
      },
      classRules: function(e) {
        var i = {};
        return (e = t(e).attr("class")) && t.each(e.split(" "), function() {
          this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
      },
      attributeRules: function(e) {
        var i, n = {},
          o = t(e),
          s = o[0].getAttribute("type");
        for (i in t.validator.methods) {
          var r = "required" === i ? !("" !== (r = o.get(0).getAttribute(i)) && !r) : o.attr(i);
          (r = /min|max/.test(i) && (null === s || /number|range|text/.test(s)) ? Number(r) : r) ? n[i] = r: s === i && "range" !== s && (n[i] = !0)
        }
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      dataRules: function(e) {
        var i, n, o = {},
          s = t(e);
        for (i in t.validator.methods) void 0 !== (n = s.data("rule-" + i.toLowerCase())) && (o[i] = n);
        return o
      },
      staticRules: function(e) {
        var i = t.data(e.form, "validator");
        return i.settings.rules && t.validator.normalizeRule(i.settings.rules[e.name]) || {}
      },
      normalizeRules: function(e, i) {
        return t.each(e, function(n, o) {
          if (!1 === o) delete e[n];
          else if (o.param || o.depends) {
            var s = !0;
            switch (typeof o.depends) {
              case "string":
                s = !!t(o.depends, i.form).length;
                break;
              case "function":
                s = o.depends.call(i, i)
            }
            s ? e[n] = void 0 === o.param || o.param : delete e[n]
          }
        }), t.each(e, function(n, o) {
          e[n] = t.isFunction(o) ? o(i) : o
        }), t.each(["minlength", "maxlength"], function() {
          e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function() {
          var i;
          e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength) && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength), e
      },
      normalizeRule: function(e) {
        var i;
        return "string" == typeof e && (i = {}, t.each(e.split(/\s/), function() {
          i[this] = !0
        }), e = i), e
      },
      addMethod: function(e, i, n) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
        required: function(e, i, n) {
          return this.depend(n, i) ? "select" === i.nodeName.toLowerCase() ? (n = t(i).val()) && 0 < n.length : this.checkable(i) ? 0 < this.getLength(e, i) : 0 < t.trim(e).length : "dependency-mismatch"
        },
        email: function(t, e) {
          return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        },
        url: function(t, e) {
          return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
        },
        date: function(t, e) {
          return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
        },
        dateISO: function(t, e) {
          return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
        },
        number: function(t, e) {
          return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function(t, e) {
          return this.optional(e) || /^\d+$/.test(t)
        },
        creditcard: function(t, e) {
          if (this.optional(e)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(t)) return !1;
          for (var i = 0, n = 0, o = !1, s = (t = t.replace(/\D/g, "")).length - 1; 0 <= s; s--) {
            var r = t.charAt(s);
            n = parseInt(r, 10);
            o && 9 < (n *= 2) && (n -= 9), i += n, o = !o
          }
          return 0 == i % 10
        },
        minlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || n <= e
        },
        maxlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e <= n
        },
        rangelength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e >= n[0] && n[1] >= e
        },
        min: function(t, e, i) {
          return this.optional(e) || i <= t
        },
        max: function(t, e, i) {
          return this.optional(e) || t <= i
        },
        range: function(t, e, i) {
          return this.optional(e) || t >= i[0] && i[1] >= t
        },
        equalTo: function(e, i, n) {
          return n = t(n), this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            t(i).valid()
          }), e === n.val()
        },
        remote: function(e, i, n) {
          if (this.optional(i)) return "dependency-mismatch";
          var o = this.previousValue(i);
          if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), o.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = o.message, n = "string" == typeof n ? {
              url: n
            } : n, o.old === e) return o.valid;
          o.old = e;
          var s = this,
            r = (this.startRequest(i), {});
          return r[i.name] = e, t.ajax(t.extend(!0, {
            url: n,
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: r,
            success: function(n) {
              s.settings.messages[i.name].remote = o.originalMessage;
              var r, a = !0 === n || "true" === n;
              a ? (r = s.formSubmitted, s.prepareElement(i), s.formSubmitted = r, s.successList.push(i), delete s.invalid[i.name], s.showErrors()) : (r = {}, n = n || s.defaultMessage(i, "remote"), r[i.name] = o.message = t.isFunction(n) ? n(e) : n, s.invalid[i.name] = !0, s.showErrors(r)), o.valid = a, s.stopRequest(i, a)
            }
          }, n)), "pending"
        }
      }
    }), t.format = t.validator.format
  })(jQuery), (t => {
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
      var o = t.port;
      "abort" === t.mode && (i[o] && i[o].abort(), i[o] = n)
    }) : (e = t.ajax, t.ajax = function(n) {
      var o = ("mode" in n ? n : t.ajaxSettings).mode;
      n = ("port" in n ? n : t.ajaxSettings).port;
      return "abort" === o ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    })
  })(jQuery), (t => {
    t.extend(t.fn, {
      validateDelegate: function(e, i, n) {
        return this.bind(i, function(i) {
          return (i = t(i.target)).is(e) ? n.apply(i, arguments) : void 0
        })
      }
    })
  })(jQuery), (t => {
    0 < t(".img-gal").length && t(".img-gal").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    })
  })(jQuery), ((t, e) => {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
  })(this, function(t, e, i) {
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
  
    function o(t, e, i) {
      e && n(t.prototype, e), i && n(t, i)
    }
  
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        (n = "function" == typeof Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
          return Object.getOwnPropertyDescriptor(i, t).enumerable
        })) : n).forEach(function(e) {
          var n = t,
            o = i[e];
          e in n ? Object.defineProperty(n, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : n[e] = o
        })
      }
      return t
    }
    e = e && e.hasOwnProperty("default") ? e["default"] : e, i = i && i.hasOwnProperty("default") ? i["default"] : i, ve = "transitionend", ye = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
      },
      getSelectorFromElement: function(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");
        try {
          return document.querySelector(e) ? e : null
        } catch (t) {
          return null
        }
      },
      getTransitionDurationFromElement: function(t) {
        return t && (t = ge(t).css("transition-duration"), parseFloat(t)) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
      },
      reflow: function(t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function(t) {
        ge(t).trigger(ve)
      },
      supportsTransitionEnd: function() {
        return Boolean(ve)
      },
      isElement: function(t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function(t, e, i) {
        for (var n in i)
          if (Object.prototype.hasOwnProperty.call(i, n)) {
            var o = i[n],
              s = (s = e[n]) && ye.isElement(s) ? "element" : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + o + '".')
          }
      }
    }, (ge = e).fn.emulateTransitionEnd = function(t) {
      var e = this,
        i = !1;
      return ge(this).one(ye.TRANSITION_END, function() {
        i = !0
      }), setTimeout(function() {
        i || ye.triggerTransitionEnd(e)
      }, t), this
    }, ge.event.special[ye.TRANSITION_END] = {
      bindType: ve,
      delegateType: ve,
      handle: function(t) {
        if (ge(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    };
    var r, a, l, u, c, h, d, f, p, m, g, v, y, _, b, w, E, C, I, F, S, T, x, D, O, A, L, z, k, P, N, j, R, M, H, W, B, q, U, $, Q, Y, K, V, G, Z, J, X, tt, et, it, nt, ot, st, rt, at, lt, ut, ct, ht, dt, ft, pt, mt, gt, vt, yt, _t, bt, wt, Et, Ct, It, Ft, St, Tt, xt, Dt, Ot, At, Lt, zt, kt, Pt, Nt, jt, Rt, Mt, Ht, Wt, Bt, qt, Ut, $t, Qt, Yt, Kt, Vt, Gt, Zt, Jt, Xt, te, ee, ie, ne, oe, se, re, ae, le, ue, ce, he, de, fe, pe, me, ge, ve, ye, _e = ye,
      be = (be = "." + (l = "bs.alert"), u = (r = e).fn[a = "alert"], c = {
        CLOSE: "close" + be,
        CLOSED: "closed" + be,
        CLICK_DATA_API: "click" + be + ".data-api"
      }, (be = Me.prototype).close = function(t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, be.dispose = function() {
        r.removeData(this._element, l), this._element = null
      }, be._getRootElement = function(t) {
        var e = _e.getSelectorFromElement(t);
        return !!e && document.querySelector(e) || r(t).closest(".alert")[0]
      }, be._triggerCloseEvent = function(t) {
        var e = r.Event(c.CLOSE);
        return r(t).trigger(e), e
      }, be._removeElement = function(t) {
        var e, i = this;
        r(t).removeClass("show"), r(t).hasClass("fade") ? (e = _e.getTransitionDurationFromElement(t), r(t).one(_e.TRANSITION_END, function(e) {
          return i._destroyElement(t, e)
        }).emulateTransitionEnd(e)) : this._destroyElement(t)
      }, be._destroyElement = function(t) {
        r(t).detach().trigger(c.CLOSED).remove()
      }, Me._jQueryInterface = function(t) {
        return this.each(function() {
          var e = r(this),
            i = e.data(l);
          i || (i = new Me(this), e.data(l, i)), "close" === t && i[t](this)
        })
      }, Me._handleDismiss = function(t) {
        return function(e) {
          e && e.preventDefault(), t.close(this)
        }
      }, o(Me, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), h = Me, r(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), r.fn[a] = h._jQueryInterface, r.fn[a].Constructor = h, r.fn[a].noConflict = function() {
        return r.fn[a] = u, h._jQueryInterface
      }, h),
      we = (Ee = "." + (p = "bs.button"), m = (d = e).fn[f = "button"], g = "active", Ce = '[data-toggle^="button"]', Ee = {
        CLICK_DATA_API: "click" + Ee + (we = ".data-api"),
        FOCUS_BLUR_DATA_API: "focus" + Ee + we + " blur" + Ee + we
      }, (we = Re.prototype).toggle = function() {
        var t = !0,
          e = !0,
          i = d(this._element).closest('[data-toggle="buttons"]')[0];
        if (i) {
          var n, o = this._element.querySelector("input");
          if (o) {
            if ("radio" === o.type && (o.checked && this._element.classList.contains(g) ? t = !1 : (n = i.querySelector(".active")) && d(n).removeClass(g)), t) {
              if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
              o.checked = !this._element.classList.contains(g), d(o).trigger("change")
            }
            o.focus(), e = !1
          }
        }
        e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(g)), t && d(this._element).toggleClass(g)
      }, we.dispose = function() {
        d.removeData(this._element, p), this._element = null
      }, Re._jQueryInterface = function(t) {
        return this.each(function() {
          var e = d(this).data(p);
          e || (e = new Re(this), d(this).data(p, e)), "toggle" === t && e[t]()
        })
      }, o(Re, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), v = Re, d(document).on(Ee.CLICK_DATA_API, Ce, function(t) {
        t.preventDefault(), t = t.target, d(t).hasClass("btn") || (t = d(t).closest(".btn")), v._jQueryInterface.call(d(t), "toggle")
      }).on(Ee.FOCUS_BLUR_DATA_API, Ce, function(t) {
        var e = d(t.target).closest(".btn")[0];
        d(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
      }), d.fn[f] = v._jQueryInterface, d.fn[f].Constructor = v, d.fn[f].noConflict = function() {
        return d.fn[f] = m, v._jQueryInterface
      }, v),
      Ee = (w = "." + (b = "bs.carousel"), E = (y = e).fn[_ = "carousel"], C = {
        interval: 5e3,
        keyboard: !0,
        slide: !(Ee = ".data-api"),
        pause: "hover",
        wrap: !0
      }, I = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
      }, F = "next", S = "prev", T = {
        SLIDE: "slide" + w,
        SLID: "slid" + w,
        KEYDOWN: "keydown" + w,
        MOUSEENTER: "mouseenter" + w,
        MOUSELEAVE: "mouseleave" + w,
        TOUCHEND: "touchend" + w,
        LOAD_DATA_API: "load" + w + Ee,
        CLICK_DATA_API: "click" + w + Ee
      }, x = "active", D = ".active.carousel-item", (Ce = je.prototype).next = function() {
        this._isSliding || this._slide(F)
      }, Ce.nextWhenVisible = function() {
        !document.hidden && y(this._element).is(":visible") && "hidden" !== y(this._element).css("visibility") && this.next()
      }, Ce.prev = function() {
        this._isSliding || this._slide(S)
      }, Ce.pause = function(t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (_e.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, Ce.cycle = function(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, Ce.to = function(t) {
        var e = this,
          i = (this._activeElement = this._element.querySelector(D), this._getItemIndex(this._activeElement));
        t > this._items.length - 1 || t < 0 || (this._isSliding ? y(this._element).one(T.SLID, function() {
          return e.to(t)
        }) : i === t ? (this.pause(), this.cycle()) : this._slide(i < t ? F : S, this._items[t]))
      }, Ce.dispose = function() {
        y(this._element).off(w), y.removeData(this._element, b), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, Ce._getConfig = function(t) {
        return t = s({}, C, t), _e.typeCheckConfig(_, t, I), t
      }, Ce._addEventListeners = function() {
        var t = this;
        this._config.keyboard && y(this._element).on(T.KEYDOWN, function(e) {
          return t._keydown(e)
        }), "hover" === this._config.pause && (y(this._element).on(T.MOUSEENTER, function(e) {
          return t.pause(e)
        }).on(T.MOUSELEAVE, function(e) {
          return t.cycle(e)
        }), "ontouchstart" in document.documentElement) && y(this._element).on(T.TOUCHEND, function() {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
            return t.cycle(e)
          }, 500 + t._config.interval)
        })
      }, Ce._keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, Ce._getItemIndex = function(t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
      }, Ce._getItemByDirection = function(t, e) {
        var i = t === F,
          n = t === S,
          o = this._getItemIndex(e),
          s = this._items.length - 1;
        return (n && 0 === o || i && o === s) && !this._config.wrap ? e : -1 == (n = (o + (t === S ? -1 : 1)) % this._items.length) ? this._items[this._items.length - 1] : this._items[n]
      }, Ce._triggerSlideEvent = function(t, e) {
        var i = this._getItemIndex(t),
          n = this._getItemIndex(this._element.querySelector(D));
        t = y.Event(T.SLIDE, {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
        return y(this._element).trigger(t), t
      }, Ce._setActiveIndicatorElement = function(t) {
        var e;
        this._indicatorsElement && (e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), y(e).removeClass(x), e = this._indicatorsElement.children[this._getItemIndex(t)]) && y(e).addClass(x)
      }, Ce._slide = function(t, e) {
        var i, n, o, s = this,
          r = this._element.querySelector(D),
          a = this._getItemIndex(r),
          l = e || r && this._getItemByDirection(t, r),
          u = (e = this._getItemIndex(l), Boolean(this._interval));
        t = t === F ? (i = "carousel-item-left", n = "carousel-item-next", "left") : (i = "carousel-item-right", n = "carousel-item-prev", "right");
        l && y(l).hasClass(x) ? this._isSliding = !1 : !this._triggerSlideEvent(l, t).isDefaultPrevented() && r && l && (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), o = y.Event(T.SLID, {
          relatedTarget: l,
          direction: t,
          from: a,
          to: e
        }), y(this._element).hasClass("slide") ? (y(l).addClass(n), _e.reflow(l), y(r).addClass(i), y(l).addClass(i), t = _e.getTransitionDurationFromElement(r), y(r).one(_e.TRANSITION_END, function() {
          y(l).removeClass(i + " " + n).addClass(x), y(r).removeClass(x + " " + n + " " + i), s._isSliding = !1, setTimeout(function() {
            return y(s._element).trigger(o)
          }, 0)
        }).emulateTransitionEnd(t)) : (y(r).removeClass(x), y(l).addClass(x), this._isSliding = !1, y(this._element).trigger(o)), u) && this.cycle()
      }, je._jQueryInterface = function(t) {
        return this.each(function() {
          var e = y(this).data(b),
            i = s({}, C, y(this).data()),
            n = ("object" == typeof t && (i = s({}, i, t)), "string" == typeof t ? t : i.slide);
          if (e || (e = new je(this, i), y(this).data(b, e)), "number" == typeof t) e.to(t);
          else if ("string" == typeof n) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          } else i.interval && (e.pause(), e.cycle())
        })
      }, je._dataApiClickHandler = function(t) {
        var e, i, n = _e.getSelectorFromElement(this);
        (n = n && y(n)[0]) && y(n).hasClass("carousel") && (e = s({}, y(n).data(), y(this).data()), (i = this.getAttribute("data-slide-to")) && (e.interval = !1), je._jQueryInterface.call(y(n), e), i && y(n).data(b).to(i), t.preventDefault())
      }, o(je, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return C
        }
      }]), O = je, y(document).on(T.CLICK_DATA_API, "[data-slide], [data-slide-to]", O._dataApiClickHandler), y(window).on(T.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
          var n = y(t[e]);
          O._jQueryInterface.call(n, n.data())
        }
      }), y.fn[_] = O._jQueryInterface, y.fn[_].Constructor = O, y.fn[_].noConflict = function() {
        return y.fn[_] = E, O._jQueryInterface
      }, O),
      Ce = (Ce = "." + (z = "bs.collapse"), k = (A = e).fn[L = "collapse"], P = {
        toggle: !0,
        parent: ""
      }, N = {
        toggle: "boolean",
        parent: "(string|element)"
      }, j = {
        SHOW: "show" + Ce,
        SHOWN: "shown" + Ce,
        HIDE: "hide" + Ce,
        HIDDEN: "hidden" + Ce,
        CLICK_DATA_API: "click" + Ce + ".data-api"
      }, R = "show", M = "collapse", H = "collapsing", W = "collapsed", B = '[data-toggle="collapse"]', (Ce = Ne.prototype).toggle = function() {
        A(this._element).hasClass(R) ? this.hide() : this.show()
      }, Ce.show = function() {
        var t, e, i, n, o = this;
        this._isTransitioning || A(this._element).hasClass(R) || (t = this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) {
          return t.getAttribute("data-parent") === o._config.parent
        })).length ? null : t) && (n = A(t).not(this._selector).data(z)) && n._isTransitioning || (i = A.Event(j.SHOW), A(this._element).trigger(i), i.isDefaultPrevented()) || (t && (Ne._jQueryInterface.call(A(t).not(this._selector), "hide"), n || A(t).data(z, null)), e = this._getDimension(), A(this._element).removeClass(M).addClass(H), this._element.style[e] = 0, this._triggerArray.length && A(this._triggerArray).removeClass(W).attr("aria-expanded", !0), this.setTransitioning(!0), i = "scroll" + (e[0].toUpperCase() + e.slice(1)), n = _e.getTransitionDurationFromElement(this._element), A(this._element).one(_e.TRANSITION_END, function() {
          A(o._element).removeClass(H).addClass(M).addClass(R), o._element.style[e] = "", o.setTransitioning(!1), A(o._element).trigger(j.SHOWN)
        }).emulateTransitionEnd(n), this._element.style[e] = this._element[i] + "px")
      }, Ce.hide = function() {
        var t = this;
        if (!this._isTransitioning && A(this._element).hasClass(R)) {
          var e = A.Event(j.HIDE);
          if (A(this._element).trigger(e), !e.isDefaultPrevented()) {
            e = this._getDimension();
            var i = (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", _e.reflow(this._element), A(this._element).addClass(H).removeClass(M).removeClass(R), this._triggerArray.length);
            if (0 < i)
              for (var n = 0; n < i; n++) {
                var o = this._triggerArray[n],
                  s = _e.getSelectorFromElement(o);
                null === s || A([].slice.call(document.querySelectorAll(s))).hasClass(R) || A(o).addClass(W).attr("aria-expanded", !1)
              }
            this.setTransitioning(!0), this._element.style[e] = "", e = _e.getTransitionDurationFromElement(this._element), A(this._element).one(_e.TRANSITION_END, function() {
              t.setTransitioning(!1), A(t._element).removeClass(H).addClass(M).trigger(j.HIDDEN)
            }).emulateTransitionEnd(e)
          }
        }
      }, Ce.setTransitioning = function(t) {
        this._isTransitioning = t
      }, Ce.dispose = function() {
        A.removeData(this._element, z), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, Ce._getConfig = function(t) {
        return (t = s({}, P, t)).toggle = Boolean(t.toggle), _e.typeCheckConfig(L, t, N), t
      }, Ce._getDimension = function() {
        return A(this._element).hasClass("width") ? "width" : "height"
      }, Ce._getParent = function() {
        var t = this,
          e = null,
          i = (_e.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent), '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]');
        i = [].slice.call(e.querySelectorAll(i));
        return A(i).each(function(e, i) {
          t._addAriaAndCollapsedClass(Ne._getTargetFromElement(i), [i])
        }), e
      }, Ce._addAriaAndCollapsedClass = function(t, e) {
        t && (t = A(t).hasClass(R), e.length) && A(e).toggleClass(W, !t).attr("aria-expanded", t)
      }, Ne._getTargetFromElement = function(t) {
        return (t = _e.getSelectorFromElement(t)) ? document.querySelector(t) : null
      }, Ne._jQueryInterface = function(t) {
        return this.each(function() {
          var e = A(this),
            i = e.data(z),
            n = s({}, P, e.data(), "object" == typeof t && t ? t : {});
          if (!i && n.toggle && /show|hide/.test(t) && (n.toggle = !1), i || (i = new Ne(this, n), e.data(z, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t]()
          }
        })
      }, o(Ne, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return P
        }
      }]), q = Ne, A(document).on(j.CLICK_DATA_API, B, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = A(this);
        t = _e.getSelectorFromElement(this), t = [].slice.call(document.querySelectorAll(t));
        A(t).each(function() {
          var t = A(this),
            i = t.data(z) ? "toggle" : e.data();
          q._jQueryInterface.call(t, i)
        })
      }), A.fn[L] = q._jQueryInterface, A.fn[L].Constructor = q, A.fn[L].noConflict = function() {
        return A.fn[L] = k, q._jQueryInterface
      }, q),
      Ie = (Y = "." + (Q = "bs.dropdown"), Ie = ".data-api", K = (U = e).fn[$ = "dropdown"], V = new RegExp("38|40|27"), G = {
        HIDE: "hide" + Y,
        HIDDEN: "hidden" + Y,
        SHOW: "show" + Y,
        SHOWN: "shown" + Y,
        CLICK: "click" + Y,
        CLICK_DATA_API: "click" + Y + Ie,
        KEYDOWN_DATA_API: "keydown" + Y + Ie,
        KEYUP_DATA_API: "keyup" + Y + Ie
      }, Z = "disabled", J = "show", X = "dropdown-menu-right", tt = '[data-toggle="dropdown"]', et = ".dropdown-menu", it = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
      }, nt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
      }, (Ie = Pe.prototype).toggle = function() {
        if (!this._element.disabled && !U(this._element).hasClass(Z)) {
          var t = Pe._getParentFromElement(this._element),
            e = U(this._menu).hasClass(J);
          if (Pe._clearMenus(), !e) {
            e = {
              relatedTarget: this._element
            };
            var n = U.Event(G.SHOW, e);
            if (U(t).trigger(n), !n.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                n = this._element, "parent" === this._config.reference ? n = t : _e.isElement(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery) && (n = this._config.reference[0]), "scrollParent" !== this._config.boundary && U(t).addClass("position-static"), this._popper = new i(n, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === U(t).closest(".navbar-nav").length && U(document.body).children().on("mouseover", null, U.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), U(this._menu).toggleClass(J), U(t).toggleClass(J).trigger(U.Event(G.SHOWN, e))
            }
          }
        }
      }, Ie.dispose = function() {
        U.removeData(this._element, Q), U(this._element).off(Y), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
      }, Ie.update = function() {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, Ie._addEventListeners = function() {
        var t = this;
        U(this._element).on(G.CLICK, function(e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        })
      }, Ie._getConfig = function(t) {
        return t = s({}, this.constructor.Default, U(this._element).data(), t), _e.typeCheckConfig($, t, this.constructor.DefaultType), t
      }, Ie._getMenuElement = function() {
        var t;
        return this._menu || (t = Pe._getParentFromElement(this._element)) && (this._menu = t.querySelector(et)), this._menu
      }, Ie._getPlacement = function() {
        var t = U(this._element.parentNode),
          e = "bottom-start";
        return t.hasClass("dropup") ? (e = "top-start", U(this._menu).hasClass(X) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : U(this._menu).hasClass(X) && (e = "bottom-end"), e
      }, Ie._detectNavbar = function() {
        return 0 < U(this._element).closest(".navbar").length
      }, Ie._getPopperConfig = function() {
        var t = this,
          e = {};
        "function" == typeof this._config.offset ? e.fn = function(e) {
          return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
        } : e.offset = this._config.offset, e = {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (e.modifiers.applyStyle = {
          enabled: !1
        }), e
      }, Pe._jQueryInterface = function(t) {
        return this.each(function() {
          var e = U(this).data(Q);
          if (e || (e = new Pe(this, "object" == typeof t ? t : null), U(this).data(Q, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, Pe._clearMenus = function(t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
          for (var e = [].slice.call(document.querySelectorAll(tt)), i = 0, n = e.length; i < n; i++) {
            var o, s = Pe._getParentFromElement(e[i]),
              r = U(e[i]).data(Q),
              a = {
                relatedTarget: e[i]
              };
            t && "click" === t.type && (a.clickEvent = t), r && (r = r._menu, !U(s).hasClass(J) || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && U.contains(s, t.target) || (o = U.Event(G.HIDE, a), U(s).trigger(o), o.isDefaultPrevented()) || ("ontouchstart" in document.documentElement && U(document.body).children().off("mouseover", null, U.noop), e[i].setAttribute("aria-expanded", "false"), U(r).removeClass(J), U(s).removeClass(J).trigger(U.Event(G.HIDDEN, a))))
          }
      }, Pe._getParentFromElement = function(t) {
        var e, i = _e.getSelectorFromElement(t);
        return (e = i ? document.querySelector(i) : e) || t.parentNode
      }, Pe._dataApiKeydownHandler = function(t) {
        var e, i, n;
        (/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || U(t.target).closest(et).length) : !V.test(t.which)) || (t.preventDefault(), t.stopPropagation(), this.disabled) || U(this).hasClass(Z) || (e = Pe._getParentFromElement(this), ((n = U(e).hasClass(J)) || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which) ? 0 !== (n = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"))).length && (i = n.indexOf(t.target), 38 === t.which && 0 < i && i--, 40 === t.which && i < n.length - 1 && i++, n[i = i < 0 ? 0 : i].focus()) : (27 === t.which && (n = e.querySelector(tt), U(n).trigger("focus")), U(this).trigger("click")))
      }, o(Pe, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return it
        }
      }, {
        key: "DefaultType",
        get: function() {
          return nt
        }
      }]), ot = Pe, U(document).on(G.KEYDOWN_DATA_API, tt, ot._dataApiKeydownHandler).on(G.KEYDOWN_DATA_API, et, ot._dataApiKeydownHandler).on(G.CLICK_DATA_API + " " + G.KEYUP_DATA_API, ot._clearMenus).on(G.CLICK_DATA_API, tt, function(t) {
        t.preventDefault(), t.stopPropagation(), ot._jQueryInterface.call(U(this), "toggle")
      }).on(G.CLICK_DATA_API, ".dropdown form", function(t) {
        t.stopPropagation()
      }), U.fn[$] = ot._jQueryInterface, U.fn[$].Constructor = ot, U.fn[$].noConflict = function() {
        return U.fn[$] = K, ot._jQueryInterface
      }, ot),
      Fe = (lt = "." + (at = "bs.modal"), ut = (st = e).fn[rt = "modal"], ct = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
      }, ht = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      }, dt = {
        HIDE: "hide" + lt,
        HIDDEN: "hidden" + lt,
        SHOW: "show" + lt,
        SHOWN: "shown" + lt,
        FOCUSIN: "focusin" + lt,
        RESIZE: "resize" + lt,
        CLICK_DISMISS: "click.dismiss" + lt,
        KEYDOWN_DISMISS: "keydown.dismiss" + lt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + lt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + lt,
        CLICK_DATA_API: "click" + lt + ".data-api"
      }, ft = "modal-open", pt = "fade", mt = "show", gt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", vt = ".sticky-top", (Fe = ke.prototype).toggle = function(t) {
        return this._isShown ? this.hide() : this.show(t)
      }, Fe.show = function(t) {
        var e, i = this;
        this._isTransitioning || this._isShown || (st(this._element).hasClass(pt) && (this._isTransitioning = !0), e = st.Event(dt.SHOW, {
          relatedTarget: t
        }), st(this._element).trigger(e), this._isShown) || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), st(document.body).addClass(ft), this._setEscapeEvent(), this._setResizeEvent(), st(this._element).on(dt.CLICK_DISMISS, '[data-dismiss="modal"]', function(t) {
          return i.hide(t)
        }), st(this._dialog).on(dt.MOUSEDOWN_DISMISS, function() {
          st(i._element).one(dt.MOUSEUP_DISMISS, function(t) {
            st(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
          })
        }), this._showBackdrop(function() {
          return i._showElement(t)
        }))
      }, Fe.hide = function(t) {
        var e = this;
        t && t.preventDefault(), !this._isTransitioning && this._isShown && (t = st.Event(dt.HIDE), st(this._element).trigger(t), this._isShown) && !t.isDefaultPrevented() && (this._isShown = !1, (t = st(this._element).hasClass(pt)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), st(document).off(dt.FOCUSIN), st(this._element).removeClass(mt), st(this._element).off(dt.CLICK_DISMISS), st(this._dialog).off(dt.MOUSEDOWN_DISMISS), t ? (t = _e.getTransitionDurationFromElement(this._element), st(this._element).one(_e.TRANSITION_END, function(t) {
          return e._hideModal(t)
        }).emulateTransitionEnd(t)) : this._hideModal())
      }, Fe.dispose = function() {
        st.removeData(this._element, at), st(window, document, this._element, this._backdrop).off(lt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
      }, Fe.handleUpdate = function() {
        this._adjustDialog()
      }, Fe._getConfig = function(t) {
        return t = s({}, ct, t), _e.typeCheckConfig(rt, t, ht), t
      }, Fe._showElement = function(t) {
        function e() {
          i._config.focus && i._element.focus(), i._isTransitioning = !1, st(i._element).trigger(o)
        }
        var i = this,
          n = st(this._element).hasClass(pt),
          o = (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && _e.reflow(this._element), st(this._element).addClass(mt), this._config.focus && this._enforceFocus(), st.Event(dt.SHOWN, {
            relatedTarget: t
          }));
        n ? (t = _e.getTransitionDurationFromElement(this._element), st(this._dialog).one(_e.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
      }, Fe._enforceFocus = function() {
        var t = this;
        st(document).off(dt.FOCUSIN).on(dt.FOCUSIN, function(e) {
          document !== e.target && t._element !== e.target && 0 === st(t._element).has(e.target).length && t._element.focus()
        })
      }, Fe._setEscapeEvent = function() {
        var t = this;
        this._isShown && this._config.keyboard ? st(this._element).on(dt.KEYDOWN_DISMISS, function(e) {
          27 === e.which && (e.preventDefault(), t.hide())
        }) : this._isShown || st(this._element).off(dt.KEYDOWN_DISMISS)
      }, Fe._setResizeEvent = function() {
        var t = this;
        this._isShown ? st(window).on(dt.RESIZE, function(e) {
          return t.handleUpdate(e)
        }) : st(window).off(dt.RESIZE)
      }, Fe._hideModal = function() {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
          st(document.body).removeClass(ft), t._resetAdjustments(), t._resetScrollbar(), st(t._element).trigger(dt.HIDDEN)
        })
      }, Fe._removeBackdrop = function() {
        this._backdrop && (st(this._backdrop).remove(), this._backdrop = null)
      }, Fe._showBackdrop = function(t) {
        var e, i = this,
          n = st(this._element).hasClass(pt) ? pt : "";
        this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), st(this._backdrop).appendTo(document.body), st(this._element).on(dt.CLICK_DISMISS, function(t) {
          i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
        }), n && _e.reflow(this._backdrop), st(this._backdrop).addClass(mt), t && (n ? (n = _e.getTransitionDurationFromElement(this._backdrop), st(this._backdrop).one(_e.TRANSITION_END, t).emulateTransitionEnd(n)) : t())) : !this._isShown && this._backdrop ? (st(this._backdrop).removeClass(mt), n = function() {
          i._removeBackdrop(), t && t()
        }, st(this._element).hasClass(pt) ? (e = _e.getTransitionDurationFromElement(this._backdrop), st(this._backdrop).one(_e.TRANSITION_END, n).emulateTransitionEnd(e)) : n()) : t && t()
      }, Fe._adjustDialog = function() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, Fe._resetAdjustments = function() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, Fe._checkScrollbar = function() {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, Fe._setScrollbar = function() {
        var t, e, i = this;
        this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(gt)), e = [].slice.call(document.querySelectorAll(vt)), st(t).each(function(t, e) {
          var n = e.style.paddingRight,
            o = st(e).css("padding-right");
          st(e).data("padding-right", n).css("padding-right", parseFloat(o) + i._scrollbarWidth + "px")
        }), st(e).each(function(t, e) {
          var n = e.style.marginRight,
            o = st(e).css("margin-right");
          st(e).data("margin-right", n).css("margin-right", parseFloat(o) - i._scrollbarWidth + "px")
        }), t = document.body.style.paddingRight, e = st(document.body).css("padding-right"), st(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px"))
      }, Fe._resetScrollbar = function() {
        var t = [].slice.call(document.querySelectorAll(gt));
        st(t).each(function(t, e) {
          var i = st(e).data("padding-right");
          st(e).removeData("padding-right"), e.style.paddingRight = i || ""
        }), t = [].slice.call(document.querySelectorAll(vt)), st(t).each(function(t, e) {
          var i = st(e).data("margin-right");
          void 0 !== i && st(e).css("margin-right", i).removeData("margin-right")
        }), t = st(document.body).data("padding-right");
        st(document.body).removeData("padding-right"), document.body.style.paddingRight = t || ""
      }, Fe._getScrollbarWidth = function() {
        var t = document.createElement("div"),
          e = (t.className = "modal-scrollbar-measure", document.body.appendChild(t), t.getBoundingClientRect().width - t.clientWidth);
        return document.body.removeChild(t), e
      }, ke._jQueryInterface = function(t, e) {
        return this.each(function() {
          var i = st(this).data(at),
            n = s({}, ct, st(this).data(), "object" == typeof t && t ? t : {});
          if (i || (i = new ke(this, n), st(this).data(at, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t](e)
          } else n.show && i.show(e)
        })
      }, o(ke, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return ct
        }
      }]), yt = ke, st(document).on(dt.CLICK_DATA_API, '[data-toggle="modal"]', function(t) {
        var e, i = this,
          n = ((n = _e.getSelectorFromElement(this)) && (e = document.querySelector(n)), st(e).data(at) ? "toggle" : s({}, st(e).data(), st(this).data())),
          o = ("A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), st(e).one(dt.SHOW, function(t) {
            t.isDefaultPrevented() || o.one(dt.HIDDEN, function() {
              st(i).is(":visible") && i.focus()
            })
          }));
        yt._jQueryInterface.call(st(e), n, this)
      }), st.fn[rt] = yt._jQueryInterface, st.fn[rt].Constructor = yt, st.fn[rt].noConflict = function() {
        return st.fn[rt] = ut, yt._jQueryInterface
      }, yt),
      Se = (Et = "." + (wt = "bs.tooltip"), Ct = (_t = e).fn[bt = "tooltip"], It = "bs-tooltip", Ft = new RegExp("(^|\\s)" + It + "\\S+", "g"), xt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Tt = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        }),
        selector: !(St = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
      }, Ot = {
        HIDE: "hide" + Et,
        HIDDEN: "hidden" + Et,
        SHOW: (Dt = "show") + Et,
        SHOWN: "shown" + Et,
        INSERTED: "inserted" + Et,
        CLICK: "click" + Et,
        FOCUSIN: "focusin" + Et,
        FOCUSOUT: "focusout" + Et,
        MOUSEENTER: "mouseenter" + Et,
        MOUSELEAVE: "mouseleave" + Et
      }, At = "fade", Lt = "show", zt = "hover", kt = "focus", (Se = ze.prototype).enable = function() {
        this._isEnabled = !0
      }, Se.disable = function() {
        this._isEnabled = !1
      }, Se.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
      }, Se.toggle = function(t) {
        var e, i;
        this._isEnabled && (t ? (e = this.constructor.DATA_KEY, (i = _t(t.currentTarget).data(e)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), _t(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)) : _t(this.getTipElement()).hasClass(Lt) ? this._leave(null, this) : this._enter(null, this))
      }, Se.dispose = function() {
        clearTimeout(this._timeout), _t.removeData(this.element, this.constructor.DATA_KEY), _t(this.element).off(this.constructor.EVENT_KEY), _t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && _t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, Se.show = function() {
        var t = this;
        if ("none" === _t(this.element).css("display")) throw new Error("Please use show on visible elements");
        var e, n, o = _t.Event(this.constructor.Event.SHOW);
        this.isWithContent() && this._isEnabled && (_t(this.element).trigger(o), n = _t.contains(this.element.ownerDocument.documentElement, this.element), !o.isDefaultPrevented()) && n && (o = this.getTipElement(), n = _e.getUID(this.constructor.NAME), o.setAttribute("id", n), this.element.setAttribute("aria-describedby", n), this.setContent(), this.config.animation && _t(o).addClass(At), n = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, n = this._getAttachment(n), this.addAttachmentClass(n), e = !1 === this.config.container ? document.body : _t(document).find(this.config.container), _t(o).data(this.constructor.DATA_KEY, this), _t.contains(this.element.ownerDocument.documentElement, this.tip) || _t(o).appendTo(e), _t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, o, {
          placement: n,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
          },
          onUpdate: function(e) {
            t._handlePopperPlacementChange(e)
          }
        }), _t(o).addClass(Lt), "ontouchstart" in document.documentElement && _t(document.body).children().on("mouseover", null, _t.noop), e = function() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, _t(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
        }, _t(this.tip).hasClass(At) ? (n = _e.getTransitionDurationFromElement(this.tip), _t(this.tip).one(_e.TRANSITION_END, e).emulateTransitionEnd(n)) : e())
      }, Se.hide = function(t) {
        function e() {
          i._hoverState !== Dt && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), _t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
        }
        var i = this,
          n = this.getTipElement(),
          o = _t.Event(this.constructor.Event.HIDE);
        _t(this.element).trigger(o), o.isDefaultPrevented() || (_t(n).removeClass(Lt), "ontouchstart" in document.documentElement && _t(document.body).children().off("mouseover", null, _t.noop), this._activeTrigger.click = !1, this._activeTrigger[kt] = !1, this._activeTrigger[zt] = !1, _t(this.tip).hasClass(At) ? (o = _e.getTransitionDurationFromElement(n), _t(n).one(_e.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
      }, Se.update = function() {
        null !== this._popper && this._popper.scheduleUpdate()
      }, Se.isWithContent = function() {
        return Boolean(this.getTitle())
      }, Se.addAttachmentClass = function(t) {
        _t(this.getTipElement()).addClass(It + "-" + t)
      }, Se.getTipElement = function() {
        return this.tip = this.tip || _t(this.config.template)[0], this.tip
      }, Se.setContent = function() {
        var t = this.getTipElement();
        this.setElementContent(_t(t.querySelectorAll(".tooltip-inner")), this.getTitle()), _t(t).removeClass(At + " " + Lt)
      }, Se.setElementContent = function(t, e) {
        var i = this.config.html;
        "object" == typeof e && (e.nodeType || e.jquery) ? i ? _t(e).parent().is(t) || t.empty().append(e) : t.text(_t(e).text()) : t[i ? "html" : "text"](e)
      }, Se.getTitle = function() {
        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
      }, Se._getAttachment = function(t) {
        return Tt[t.toUpperCase()]
      }, Se._setListeners = function() {
        var t = this;
        this.config.trigger.split(" ").forEach(function(e) {
          var i;
          "click" === e ? _t(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
            return t.toggle(e)
          }) : "manual" !== e && (i = e === zt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, e = e === zt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT, _t(t.element).on(i, t.config.selector, function(e) {
            return t._enter(e)
          }).on(e, t.config.selector, function(e) {
            return t._leave(e)
          })), _t(t.element).closest(".modal").on("hide.bs.modal", function() {
            return t.hide()
          })
        }), this.config.selector ? this.config = s({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, Se._fixTitle = function() {
        var t = typeof this.element.getAttribute("data-original-title");
        !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, Se._enter = function(t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || _t(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), _t(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? kt : zt] = !0), _t(e.getTipElement()).hasClass(Lt) || e._hoverState === Dt ? e._hoverState = Dt : (clearTimeout(e._timeout), e._hoverState = Dt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
          e._hoverState === Dt && e.show()
        }, e.config.delay.show) : e.show())
      }, Se._leave = function(t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || _t(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), _t(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? kt : zt] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
          "out" === e._hoverState && e.hide()
        }, e.config.delay.hide) : e.hide())
      }, Se._isWithActiveTrigger = function() {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, Se._getConfig = function(t) {
        return "number" == typeof(t = s({}, this.constructor.Default, _t(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _e.typeCheckConfig(bt, t, this.constructor.DefaultType), t
      }, Se._getDelegateConfig = function() {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, Se._cleanTipClass = function() {
        var t = _t(this.getTipElement()),
          e = t.attr("class").match(Ft);
        null !== e && e.length && t.removeClass(e.join(""))
      }, Se._handlePopperPlacementChange = function(t) {
        var e = t.instance;
        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
      }, Se._fixTransition = function() {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute("x-placement") && (_t(t).removeClass(At), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
      }, ze._jQueryInterface = function(t) {
        return this.each(function() {
          var e = _t(this).data(wt),
            i = "object" == typeof t && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new ze(this, i), _t(this).data(wt, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(ze, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return xt
        }
      }, {
        key: "NAME",
        get: function() {
          return bt
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return wt
        }
      }, {
        key: "Event",
        get: function() {
          return Ot
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return Et
        }
      }, {
        key: "DefaultType",
        get: function() {
          return St
        }
      }]), _t.fn[bt] = (Pt = ze)._jQueryInterface, _t.fn[bt].Constructor = Pt, _t.fn[bt].noConflict = function() {
        return _t.fn[bt] = Ct, Pt._jQueryInterface
      }, Pt),
      Te = (Mt = "." + (Rt = "bs.popover"), Ht = (Nt = e).fn[jt = "popover"], Wt = "bs-popover", Bt = new RegExp("(^|\\s)" + Wt + "\\S+", "g"), qt = s({}, Se.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }), Ut = s({}, Se.DefaultType, {
        content: "(string|element|function)"
      }), $t = {
        HIDE: "hide" + Mt,
        HIDDEN: "hidden" + Mt,
        SHOW: "show" + Mt,
        SHOWN: "shown" + Mt,
        INSERTED: "inserted" + Mt,
        CLICK: "click" + Mt,
        FOCUSIN: "focusin" + Mt,
        FOCUSOUT: "focusout" + Mt,
        MOUSEENTER: "mouseenter" + Mt,
        MOUSELEAVE: "mouseleave" + Mt
      }, Te = me = Se, (xe = Le).prototype = Object.create(Te.prototype), (xe.prototype.constructor = xe).__proto__ = Te, (xe = Le.prototype).isWithContent = function() {
        return this.getTitle() || this._getContent()
      }, xe.addAttachmentClass = function(t) {
        Nt(this.getTipElement()).addClass(Wt + "-" + t)
      }, xe.getTipElement = function() {
        return this.tip = this.tip || Nt(this.config.template)[0], this.tip
      }, xe.setContent = function() {
        var t = Nt(this.getTipElement()),
          e = (this.setElementContent(t.find(".popover-header"), this.getTitle()), this._getContent());
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
      }, xe._getContent = function() {
        return this.element.getAttribute("data-content") || this.config.content
      }, xe._cleanTipClass = function() {
        var t = Nt(this.getTipElement()),
          e = t.attr("class").match(Bt);
        null !== e && 0 < e.length && t.removeClass(e.join(""))
      }, Le._jQueryInterface = function(t) {
        return this.each(function() {
          var e = Nt(this).data(Rt),
            i = "object" == typeof t ? t : null;
          if ((e || !/destroy|hide/.test(t)) && (e || (e = new Le(this, i), Nt(this).data(Rt, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(Le, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return qt
        }
      }, {
        key: "NAME",
        get: function() {
          return jt
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Rt
        }
      }, {
        key: "Event",
        get: function() {
          return $t
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return Mt
        }
      }, {
        key: "DefaultType",
        get: function() {
          return Ut
        }
      }]), Nt.fn[jt] = (Qt = Le)._jQueryInterface, Nt.fn[jt].Constructor = Qt, Nt.fn[jt].noConflict = function() {
        return Nt.fn[jt] = Ht, Qt._jQueryInterface
      }, Qt),
      xe = (Gt = "." + (Vt = "bs.scrollspy"), Zt = (Yt = e).fn[Kt = "scrollspy"], Jt = {
        offset: 10,
        method: "auto",
        target: ""
      }, Xt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      }, te = {
        ACTIVATE: "activate" + Gt,
        SCROLL: "scroll" + Gt,
        LOAD_DATA_API: "load" + Gt + ".data-api"
      }, ee = "active", ie = ".nav, .list-group", ne = ".nav-link", oe = ".list-group-item", se = "position", (xe = Ae.prototype).refresh = function() {
        var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : se,
          i = "auto" === this._config.method ? e : this._config.method,
          n = i === se ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
          var e;
          if (e = (t = _e.getSelectorFromElement(t)) ? document.querySelector(t) : e) {
            var o = e.getBoundingClientRect();
            if (o.width || o.height) return [Yt(e)[i]().top + n, t]
          }
          return null
        }).filter(function(t) {
          return t
        }).sort(function(t, e) {
          return t[0] - e[0]
        }).forEach(function(e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        })
      }, xe.dispose = function() {
        Yt.removeData(this._element, Vt), Yt(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, xe._getConfig = function(t) {
        var e;
        return "string" != typeof(t = s({}, Jt, "object" == typeof t && t ? t : {})).target && ((e = Yt(t.target).attr("id")) || (e = _e.getUID(Kt), Yt(t.target).attr("id", e)), t.target = "#" + e), _e.typeCheckConfig(Kt, t, Xt), t
      }, xe._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, xe._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, xe._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, xe._process = function() {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), i <= t) e = this._targets[this._targets.length - 1], this._activeTarget !== e && this._activate(e);
        else if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) this._activeTarget = null, this._clear();
        else
          for (var n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
      }, xe._activate = function(t) {
        this._activeTarget = t, this._clear();
        var e = (e = this._selector.split(",")).map(function(e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        });
        ((e = Yt([].slice.call(document.querySelectorAll(e.join(","))))).hasClass("dropdown-item") ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(ee), e) : (e.addClass(ee), e.parents(ie).prev(ne + ", " + oe).addClass(ee), e.parents(ie).prev(".nav-item").children(ne))).addClass(ee), Yt(this._scrollElement).trigger(te.ACTIVATE, {
          relatedTarget: t
        })
      }, xe._clear = function() {
        var t = [].slice.call(document.querySelectorAll(this._selector));
        Yt(t).filter(".active").removeClass(ee)
      }, Ae._jQueryInterface = function(t) {
        return this.each(function() {
          var e = Yt(this).data(Vt);
          if (e || (e = new Ae(this, "object" == typeof t && t), Yt(this).data(Vt, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, o(Ae, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }, {
        key: "Default",
        get: function() {
          return Jt
        }
      }]), re = Ae, Yt(window).on(te.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
          var i = Yt(t[e]);
          re._jQueryInterface.call(i, i.data())
        }
      }), Yt.fn[Kt] = re._jQueryInterface, Yt.fn[Kt].Constructor = re, Yt.fn[Kt].noConflict = function() {
        return Yt.fn[Kt] = Zt, re._jQueryInterface
      }, re),
      De = (De = "." + (le = "bs.tab"), ue = (ae = e).fn.tab, ce = {
        HIDE: "hide" + De,
        HIDDEN: "hidden" + De,
        SHOW: "show" + De,
        SHOWN: "shown" + De,
        CLICK_DATA_API: "click" + De + ".data-api"
      }, he = "active", de = ".active", fe = "> li > .active", (De = Oe.prototype).show = function() {
        var t, e, i, n, o, s, r = this;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ae(this._element).hasClass(he) || ae(this._element).hasClass("disabled") || (e = ae(this._element).closest(".nav, .list-group")[0], i = _e.getSelectorFromElement(this._element), e && (o = "UL" === e.nodeName ? fe : de, n = (n = ae.makeArray(ae(e).find(o)))[n.length - 1]), o = ae.Event(ce.HIDE, {
          relatedTarget: this._element
        }), s = ae.Event(ce.SHOW, {
          relatedTarget: n
        }), n && ae(n).trigger(o), ae(this._element).trigger(s), s.isDefaultPrevented()) || o.isDefaultPrevented() || (i && (t = document.querySelector(i)), this._activate(this._element, e), s = function() {
          var t = ae.Event(ce.HIDDEN, {
              relatedTarget: r._element
            }),
            e = ae.Event(ce.SHOWN, {
              relatedTarget: n
            });
          ae(n).trigger(t), ae(r._element).trigger(e)
        }, t ? this._activate(t, t.parentNode, s) : s())
      }, De.dispose = function() {
        ae.removeData(this._element, le), this._element = null
      }, De._activate = function(t, e, i) {
        function n() {
          return o._transitionComplete(t, s, i)
        }
        var o = this,
          s = ("UL" === e.nodeName ? ae(e).find(fe) : ae(e).children(de))[0];
        e = i && s && ae(s).hasClass("fade");
        s && e ? (e = _e.getTransitionDurationFromElement(s), ae(s).one(_e.TRANSITION_END, n).emulateTransitionEnd(e)) : n()
      }, De._transitionComplete = function(t, e, i) {
        var n;
        e && (ae(e).removeClass("show " + he), (n = ae(e.parentNode).find("> .dropdown-menu .active")[0]) && ae(n).removeClass(he), "tab" === e.getAttribute("role")) && e.setAttribute("aria-selected", !1), ae(t).addClass(he), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _e.reflow(t), ae(t).addClass("show"), t.parentNode && ae(t.parentNode).hasClass("dropdown-menu") && ((n = ae(t).closest(".dropdown")[0]) && (e = [].slice.call(n.querySelectorAll(".dropdown-toggle")), ae(e).addClass(he)), t.setAttribute("aria-expanded", !0)), i && i()
      }, Oe._jQueryInterface = function(t) {
        return this.each(function() {
          var e = ae(this),
            i = e.data(le);
          if (i || (i = new Oe(this), e.data(le, i)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t]()
          }
        })
      }, o(Oe, null, [{
        key: "VERSION",
        get: function() {
          return "4.1.3"
        }
      }]), pe = Oe, ae(document).on(ce.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
        t.preventDefault(), pe._jQueryInterface.call(ae(this), "show")
      }), ae.fn.tab = pe._jQueryInterface, ae.fn.tab.Constructor = pe, ae.fn.tab.noConflict = function() {
        return ae.fn.tab = ue, pe._jQueryInterface
      }, pe);
  
    function Oe(t) {
      this._element = t
    }
  
    function Ae(t, e) {
      var i = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ne + "," + this._config.target + " " + oe + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Yt(this._scrollElement).on(te.SCROLL, function(t) {
        return i._process(t)
      }), this.refresh(), this._process()
    }
  
    function Le() {
      return me.apply(this, arguments) || this
    }
  
    function ze(t, e) {
      if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
    }
  
    function ke(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
    }
  
    function Pe(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
  
    function Ne(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = A.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
      for (var i = [].slice.call(document.querySelectorAll(B)), n = 0, o = i.length; n < o; n++) {
        var s = i[n],
          r = _e.getSelectorFromElement(s),
          a = [].slice.call(document.querySelectorAll(r)).filter(function(e) {
            return e === t
          });
        null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(s))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
  
    function je(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = y(t)[0], this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._addEventListeners()
    }
  
    function Re(t) {
      this._element = t
    }
  
    function Me(t) {
      this._element = t
    }
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    if ((e = e.fn.jquery.split(" ")[0].split("."))[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    t.Util = _e, t.Alert = be, t.Button = we, t.Carousel = Ee, t.Collapse = Ce, t.Dropdown = Ie, t.Modal = Fe, t.Popover = Te, t.Scrollspy = xe, t.Tab = De, t.Tooltip = Se, Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }), $(document).ready(function() {
    $("a[href^='#']").on("click", function(t) {
      if (t.preventDefault(), (t = $(this).attr("href").substring(1)) && (t = $("#" + t)).length) {
        t = t.offset().top;
        let e = window.scrollY,
          i = t - e,
          n = 300,
          o = null,
          s = t => {
            let r = (t - (o = null === o ? t : o)) / n;
            1 < r && (r = 1), t = e + i * ((t = r) < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), window.scrollTo(0, t), r < 1 && requestAnimationFrame(s)
          };
        requestAnimationFrame(s), history.pushState(null, "", window.location.pathname + window.location.search)
      }
    })
  }), (t => {
    var e = t("header").height() + 50;
    t(".header_area").length && t(window).scroll(function() {
      var i = t(window).scrollTop();
      e <= i ? t(".header_area").addClass("navbar_fixed") : t(".header_area").removeClass("navbar_fixed")
    })
  })(jQuery), ((t, e) => {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
  })(window, function(t, e) {
    function i(i, s, a) {
      (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
      }), a.fn[i] = function(t) {
        var e, n, l, u, c, h;
        return "string" == typeof t ? (e = o.call(arguments, 1), l = e, c = "$()." + i + '("' + (n = t) + '")', this.each(function(t, e) {
          var o;
          (e = a.data(e, i)) ? (o = e[n]) && "_" != n.charAt(0) ? (o = o.apply(e, l), u = void 0 === u ? o : u) : r(c + " is not a valid method"): r(i + " not initialized. Cannot call methods, i.e. " + c)
        }), void 0 !== u ? u : this) : (h = t, this.each(function(t, e) {
          var n = a.data(e, i);
          n ? (n.option(h), n._init()) : (n = new s(e, h), a.data(e, i, n))
        }), this)
      }, n(a))
    }
  
    function n(t) {
      t && !t.bridget && (t.bridget = i)
    }
    var o = Array.prototype.slice,
      s = t.console,
      r = void 0 === s ? function() {} : function(t) {
        s.error(t)
      };
    return n(e || t.jQuery), i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
      var i;
      if (t && e) return -1 == (i = (i = this._events = this._events || {})[t] = i[t] || []).indexOf(e) && i.push(e), this
    }, e.once = function(t, e) {
      var i;
      if (t && e) return this.on(t, e), ((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0, this
    }, e.off = function(t, e) {
      if ((t = this._events && this._events[t]) && t.length) return -1 != (e = t.indexOf(e)) && t.splice(e, 1), this
    }, e.emitEvent = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        e = e || [];
        for (var s = this._onceEvents && this._onceEvents[t]; o;) {
          var r = s && s[o];
          r && (this.off(t, o), delete s[o]), o.apply(this, e), o = i[n += r ? 0 : 1]
        }
        return this
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
  })(window, function() {
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e
    }
  
    function e(t) {
      return (t = getComputedStyle(t)) || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }
    var i, n = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t)
      },
      o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      s = o.length,
      r = !1;
    return function n(a) {
      if (r || (r = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (g = document.body || document.documentElement).appendChild(v), d = e(v), n.isBoxSizeOuter = i = 200 == t(d.width), g.removeChild(v)), (a = "string" == typeof a ? document.querySelector(a) : a) && "object" == typeof a && a.nodeType) {
        var l = e(a);
        if ("none" == l.display) {
          for (var u = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
            }, c = 0; c < s; c++) u[o[c]] = 0;
          return u
        }
        var h = {};
        h.width = a.offsetWidth, h.height = a.offsetHeight;
        for (var d = h.isBorderBox = "border-box" == l.boxSizing, f = 0; f < s; f++) {
          var p = o[f],
            m = l[p];
          m = parseFloat(m);
          h[p] = isNaN(m) ? 0 : m
        }
        var g = h.paddingLeft + h.paddingRight,
          v = h.paddingTop + h.paddingBottom,
          y = (a = h.marginLeft + h.marginRight, h.marginTop + h.marginBottom),
          _ = h.borderLeftWidth + h.borderRightWidth,
          b = h.borderTopWidth + h.borderBottomWidth,
          w = (d = d && i, t(l.width));
        return !1 !== w && (h.width = w + (d ? 0 : g + _)), !1 !== (w = t(l.height)) && (h.height = w + (d ? 0 : v + b)), h.innerWidth = h.width - (g + _), h.innerHeight = h.height - (v + b), h.outerWidth = h.width + a, h.outerHeight = h.height + y, h
      }
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
  })(window, function() {
    var t = (() => {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n
      }
    })();
    return function(e, i) {
      return e[t](i)
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
  })(window, function(t, e) {
    var i = {
        extend: function(t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        modulo: function(t, e) {
          return (t % e + e) % e
        },
        makeArray: function(t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e
        },
        removeFrom: function(t, e) {
          -1 != (e = t.indexOf(e)) && t.splice(e, 1)
        },
        getParent: function(t, i) {
          for (; t.parentNode && t != document.body;)
            if (e(t = t.parentNode, i)) return t
        },
        getQueryElement: function(t) {
          return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t)
        },
        filterFindElements: function(t, n) {
          t = i.makeArray(t);
          var o = [];
          return t.forEach(function(t) {
            if (t instanceof HTMLElement)
              if (n) {
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
              } else o.push(t)
          }), o
        },
        debounceMethod: function(t, e, i) {
          var n = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function() {
            var t = this[o],
              e = (t && clearTimeout(t), arguments),
              s = this;
            this[o] = setTimeout(function() {
              n.apply(s, e), delete s[o]
            }, i || 100)
          }
        },
        docReady: function(t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        },
        toDashed: function(t) {
          return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
          }).toLowerCase()
        }
      },
      n = t.console;
    return i.htmlInit = function(e, o) {
      i.docReady(function() {
        var s = "data-" + (a = i.toDashed(o)),
          r = document.querySelectorAll("[" + s + "]"),
          a = document.querySelectorAll(".js-" + a),
          l = (r = i.makeArray(r).concat(i.makeArray(a)), s + "-options"),
          u = t.jQuery;
        r.forEach(function(t) {
          var i, r = t.getAttribute(s) || t.getAttribute(l);
          try {
            i = r && JSON.parse(r)
          } catch (i) {
            return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + i))
          }
          r = new e(t, i), u && u.data(t, o, r)
        })
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
  })(window, function(t, e) {
    function i(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }
    var n = "string" == typeof(o = document.documentElement.style).transition ? "transition" : "WebkitTransition",
      o = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      } [n],
      r = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
      },
      a = ((t = i.prototype = Object.create(t.prototype)).constructor = i, t._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        })
      }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, t.getSize = function() {
        this.size = e(this.element)
      }, t.css = function(t) {
        var e, i = this.element.style;
        for (e in t) i[r[e] || e] = t[e]
      }, t.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = (t = t[i ? "top" : "bottom"], this.layout.size);
        n = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10), t = -1 != t.indexOf("%") ? parseFloat(t) / 100 * o.height : parseInt(t, 10), n = isNaN(n) ? 0 : n, t = isNaN(t) ? 0 : t;
        n -= e ? o.paddingLeft : o.paddingRight, t -= i ? o.paddingTop : o.paddingBottom, this.position.x = n, this.position.y = t
      }, t.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "right" : "left",
          s = this.position.x + t[i ? "paddingLeft" : "paddingRight"];
        e[i ? "left" : "right"] = this.getXValue(s), e[o] = "", i = n ? "paddingTop" : "paddingBottom", s = n ? "bottom" : "top", o = this.position.y + t[i];
        e[n ? "top" : "bottom"] = this.getYValue(o), e[s] = "", this.css(e), this.emitEvent("layout", [this])
      }, t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
      }, t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
      }, t._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10);
        o = o === this.position.x && s === this.position.y;
        this.setPosition(t, e), o && !this.isTransitioning ? this.layoutPosition() : ((s = {}).transform = this.getTranslate(t - i, e - n), this.transition({
          to: s,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        }))
      }, t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (this.layout._getOption("originTop") ? e : -e) + "px, 0)"
      }, t.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
      }, t.moveTo = t._transitionTo, t.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
      }, t._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
      }, t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e, i = this._transn;
          for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
      }, "opacity," + o.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
      })),
      l = (t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = this.layout.options.transitionDuration, this.css({
          transitionProperty: a,
          transitionDuration: "number" == typeof t ? t + "ms" : t,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(s, this, !1))
      }, t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
      }, t.onotransitionend = function(t) {
        this.ontransitionend(t)
      }, {
        "-webkit-transform": "transform"
      }),
      u = (t.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn, i = l[t.propertyName] || t.propertyName, delete e.ingProperties[i], (() => {
          for (var t in e.ingProperties) return;
          return 1
        })() && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
      }, t.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
      }, t._removeStyles = function(t) {
        var e, i = {};
        for (e in t) i[e] = "";
        this.css(i)
      }, {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      });
    return t.removeTransitionStyles = function() {
      this.css(u)
    }, t.stagger = function(t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, t.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, t.remove = function() {
      return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
        this.removeElem()
      }), void this.hide()) : void this.removeElem()
    }, t.reveal = function() {
      delete this.isHidden, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: t.hiddenStyle,
        to: t.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
    }, t.getHideRevealTransitionEndProperty = function(t) {
      if ((t = this.layout.options[t]).opacity) return "opacity";
      for (var e in t) return e
    }, t.hide = function() {
      this.isHidden = !0, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: t.visibleStyle,
        to: t.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, t.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
      return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
  })(window, function(t, e, i, n, o) {
    function s(t, e) {
      var i = n.getQueryElement(t);
      i ? (this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), e = ++c, this.element.outlayerGUID = e, (h[e] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
  
    function r(t) {
      function e() {
        t.apply(this, arguments)
      }
      return (e.prototype = Object.create(t.prototype)).constructor = e
    }
  
    function a() {}
    var l = t.console,
      u = t.jQuery,
      c = 0,
      h = {},
      d = (s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      }, s.prototype),
      f = (n.extend(d, e.prototype), d.option = function(t) {
        n.extend(this.options, t)
      }, d._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
      }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, d._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
      }, d.reloadItems = function() {
        this.items = this._itemize(this.element.children)
      }, d._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
          var s = new i(e[o], this);
          n.push(s)
        }
        return n
      }, d._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
      }, d.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element
        })
      }, d.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
      }, d._init = d.layout, d._resetLayout = function() {
        this.getSize()
      }, d.getSize = function() {
        this.size = i(this.element)
      }, d._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
      }, d.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
      }, d._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored
        })
      }, d._layoutItems = function(t, e) {
        var i;
        this._emitCompleteOnItems("layout", t), t && t.length && (i = [], t.forEach(function(t) {
          var n = this._getItemLayoutPosition(t);
          n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
        }, this), this._processLayoutQueue(i))
      }, d._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        }
      }, d._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
      }, d.updateStagger = function() {
        var t, e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = "number" == typeof e ? e : (t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1], e = e && e[2], t.length ? parseFloat(t) * (f[e] || 1) : 0), this.stagger)
      }, d._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
      }, d._postLayout = function() {
        this.resizeContainer()
      }, d.resizeContainer = function() {
        var t;
        this._getOption("resizeContainer") && (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
      }, d._getContainerSize = a, d._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
      }, d._emitCompleteOnItems = function(t, e) {
        function i() {
          s.dispatchEvent(t + "Complete", null, [e])
        }
  
        function n() {
          ++o == r && i()
        }
        var o, s = this,
          r = e.length;
        e && r ? (o = 0, e.forEach(function(e) {
          e.once(t, n)
        })) : i()
      }, d.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n), u && (this.$element = this.$element || u(this.element), e ? ((n = u.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
      }, d.ignore = function(t) {
        (t = this.getItem(t)) && (t.isIgnored = !0)
      }, d.unignore = function(t) {
        (t = this.getItem(t)) && delete t.isIgnored
      }, d.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
      }, d.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
          n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
      }, d._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
      }, d._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
      }, d._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
      }, d._manageStamp = a, d._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect;
        t = i(t);
        return {
          left: e.left - n.left - t.marginLeft,
          top: e.top - n.top - t.marginTop,
          right: n.right - e.right - t.marginRight,
          bottom: n.bottom - e.bottom - t.marginBottom
        }
      }, d.handleEvent = n.handleEvent, d.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
      }, d.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
      }, d.onresize = function() {
        this.resize()
      }, n.debounceMethod(s, "onresize", 100), d.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, d.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
      }, d.addItems = function(t) {
        return (t = this._itemize(t)).length && (this.items = this.items.concat(t)), t
      }, d.appended = function(t) {
        (t = this.addItems(t)).length && (this.layoutItems(t, !0), this.reveal(t))
      }, d.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (e = this.items.slice(0), this.items = t.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e))
      }, d.reveal = function(t) {
        var e;
        this._emitCompleteOnItems("reveal", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.reveal()
        }))
      }, d.hide = function(t) {
        var e;
        this._emitCompleteOnItems("hide", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.hide()
        }))
      }, d.revealItemElements = function(t) {
        t = this.getItems(t), this.reveal(t)
      }, d.hideItemElements = function(t) {
        t = this.getItems(t), this.hide(t)
      }, d.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i
        }
      }, d.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
          (t = this.getItem(t)) && e.push(t)
        }, this), e
      }, d.remove = function(t) {
        t = this.getItems(t), this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(t) {
          t.remove(), n.removeFrom(this.items, t)
        }, this)
      }, d.destroy = function() {
        (t = this.element.style).height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
          t.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
      }, s.data = function(t) {
        return (t = (t = n.getQueryElement(t)) && t.outlayerGUID) && h[t]
      }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
      }, {
        ms: 1,
        s: 1e3
      });
    return s.Item = o, s
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
  })(window, function(t) {
    function e() {
      t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create,
      o = (i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
      }, i.updateSortData = function() {
        if (!this.isIgnored) {
          this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
          var t, e = this.layout.options.getSortData,
            i = this.layout._sorters;
          for (t in e) {
            var n = i[t];
            this.sortData[t] = n(this.element, this)
          }
        }
      }, i.destroy);
    return i.destroy = function() {
      o.apply(this, arguments), this.css({
        display: ""
      })
    }, e
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
  })(window, function(t, e) {
    function i(t) {
      (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
      n[t] = function() {
        return e.prototype[t].apply(this.isotope, arguments)
      }
    }), n.needsVerticalResizeLayout = function() {
      var e = t(this.isotope.element);
      return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
      t += e;
      var i, n = "outer" + e;
      this._getMeasurement(t, n), this[t] || (i = this.getFirstItemSize(), this[t] = i && i[n] || this.isotope.size["inner" + e])
    }, n.getFirstItemSize = function() {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
    }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
      function o() {
        i.apply(this, arguments)
      }
      return (o.prototype = Object.create(n)).constructor = o, e && (o.options = e), i.modes[o.prototype.namespace = t] = o
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
  })(window, function(t, e) {
    (t = t.create("masonry")).compatOptions.fitWidth = "isFitWidth";
    var i = t.prototype;
    return i._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var t = 0; t < this.cols; t++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
      this.getContainerWidth(), this.columnWidth || (t = (t = this.items[0]) && t.element, this.columnWidth = t && e(t).outerWidth || this.containerWidth);
      var t = this.columnWidth += this.gutter,
        i = (n = this.containerWidth + this.gutter) / t,
        n = t - n % t;
      i = Math[n && n < 1 ? "round" : "floor"](i);
      this.cols = Math.max(i, 1)
    }, i.getContainerWidth = function() {
      var t = this._getOption("fitWidth") ? this.element.parentNode : this.element;
      t = e(t);
      this.containerWidth = t && t.innerWidth
    }, i._getItemLayoutPosition = function(t) {
      t.getSize();
      for (var e = t.size.outerWidth % this.columnWidth, i = (e = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), e = Math.min(e, this.cols), this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](e, t)), n = {
          x: this.columnWidth * i.col,
          y: i.y
        }, o = i.y + t.size.outerHeight, s = e + i.col, r = i.col; r < s; r++) this.colYs[r] = o;
      return n
    }, i._getTopColPosition = function(t) {
      t = this._getTopColGroup(t);
      var e = Math.min.apply(Math, t);
      return {
        col: t.indexOf(e),
        y: e
      }
    }, i._getTopColGroup = function(t) {
      if (t < 2) return this.colYs;
      for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
      return e
    }, i._getColGroupY = function(t, e) {
      return e < 2 ? this.colYs[t] : (t = this.colYs.slice(t, t + e), Math.max.apply(Math, t))
    }, i._getHorizontalColPosition = function(t, e) {
      var i = this.horizontalColIndex % this.cols;
      i = 1 < t && i + t > this.cols ? 0 : i, e = e.size.outerWidth && e.size.outerHeight;
      return this.horizontalColIndex = e ? i + t : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, t)
      }
    }, i._manageStamp = function(t) {
      var i = e(t),
        n = (t = this._getElementOffset(t), (o = this._getOption("originLeft") ? t.left : t.right) + i.outerWidth),
        o = Math.floor(o / this.columnWidth),
        s = (o = Math.max(0, o), Math.floor(n / this.columnWidth));
      s -= n % this.columnWidth ? 0 : 1;
      s = Math.min(this.cols - 1, s);
      for (var r = (this._getOption("originTop") ? t.top : t.bottom) + i.outerHeight, a = o; a <= s; a++) this.colYs[a] = Math.max(r, this.colYs[a])
    }, i._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i._getContainerFitWidth = function() {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
      return (this.cols - t) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
  })(window, function(t, e) {
    var i, n = (t = t.create("masonry")).prototype,
      o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
    for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
    var s = n.measureColumns,
      r = (n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
      }, n._getOption);
    return n._getOption = function(t) {
      return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("fitRows")).prototype;
    return e._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY), i = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
    }, e._getContainerSize = function() {
      return {
        height: this.maxY
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("vertical", {
      horizontalAlignment: 0
    })).prototype;
    return e._resetLayout = function() {
      this.y = 0
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
      return this.y += t.size.outerHeight, {
        x: e,
        y: i
      }
    }, e._getContainerSize = function() {
      return {
        height: this.y
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
      return e(t, i, 0, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, 0, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
  })(window, function(t, e, i, n, o, s, r) {
    var a = t.jQuery,
      l = String.prototype.trim ? function(t) {
        return t.trim()
      } : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
      },
      u = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
    u.Item = s, u.LayoutMode = r, (t = u.prototype)._create = function() {
      for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
    }, t.reloadItems = function() {
      this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, t._itemize = function() {
      for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
      return this._updateItemsSortData(t), t
    }, t._initLayoutMode = function(t) {
      var e = r.modes[t],
        i = this.options[t] || {};
      this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, t.layout = function() {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, t._layout = function() {
      var t = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, t.arrange = function(t) {
      this.option(t), this._getIsInstant(), t = this._filter(this.items), this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, t._init = t.arrange, t._hideReveal = function(t) {
      this.reveal(t.needReveal), this.hide(t.needHide)
    }, t._getIsInstant = function() {
      var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
      return this._isInstant = t
    }, t._bindArrangeComplete = function() {
      function t() {
        e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
      }
      var e, i, n, o = this;
      this.once("layoutComplete", function() {
        e = !0, t()
      }), this.once("hideComplete", function() {
        i = !0, t()
      }), this.once("revealComplete", function() {
        n = !0, t()
      })
    }, t._filter = function(t) {
      for (var e = this.options.filter, i = [], n = [], o = [], s = this._getFilterTest(e || "*"), r = 0; r < t.length; r++) {
        var a, l = t[r];
        l.isIgnored || ((a = s(l)) && i.push(l), a && l.isHidden ? n.push(l) : a || l.isHidden || o.push(l))
      }
      return {
        matches: i,
        needReveal: n,
        needHide: o
      }
    }, t._getFilterTest = function(t) {
      return a && this.options.isJQueryFiltering ? function(e) {
        return a(e.element).is(t)
      } : "function" == typeof t ? function(e) {
        return t(e.element)
      } : function(e) {
        return n(e.element, t)
      }
    }, t.updateSortData = function(t) {
      t = t ? (t = o.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(t)
    }, t._getSorters = function() {
      var t, e = this.options.getSortData;
      for (t in e) {
        var i = e[t];
        this._sorters[t] = c(i)
      }
    }, t._updateItemsSortData = function(t) {
      for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
    };
    var c = function(t) {
        var e, i, n, o, s, r;
        return "string" != typeof t ? t : (i = (i = (e = (t = l(t).split(" "))[0]).match(/^\[(.+)\]$/)) && i[1], r = e, n = (s = i) ? function(t) {
          return t.getAttribute(s)
        } : function(t) {
          return (t = t.querySelector(r)) && t.textContent
        }, (o = u.sortDataParsers[t[1]]) ? function(t) {
          return t && o(n(t))
        } : function(t) {
          return t && n(t)
        })
      },
      h = (u.sortDataParsers = {
        parseInt: function(t) {
          return parseInt(t, 10)
        },
        parseFloat: function(t) {
          return parseFloat(t)
        }
      }, t._sort = function() {
        var t, e, i;
        this.options.sortBy && (t = o.makeArray(this.options.sortBy), this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)), e = this.sortHistory, i = this.options.sortAscending, this.filteredItems.sort(function(t, n) {
          for (var o = 0; o < e.length; o++) {
            var s = e[o],
              r = t.sortData[s],
              a = n.sortData[s];
            if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== i[s] ? i[s] : i) ? 1 : -1)
          }
          return 0
        }))
      }, t._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0
      }, t._mode = function() {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (e) return e.options = this.options[t], e;
        throw new Error("No layout mode: " + t)
      }, t._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, t._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
      }, t._manageStamp = function(t) {
        this._mode()._manageStamp(t)
      }, t._getContainerSize = function() {
        return this._mode()._getContainerSize()
      }, t.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
      }, t.appended = function(t) {
        (t = this.addItems(t)).length && (t = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(t))
      }, t.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (this._resetLayout(), this._manageStamps(), e = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = e.concat(this.filteredItems), this.items = t.concat(this.items))
      }, t._filterRevealAdded = function(t) {
        return t = this._filter(t), this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
      }, t.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var i, n = e.length, o = 0; o < n; o++) i = e[o], this.element.appendChild(i.element);
          for (t = this._filter(e).matches, o = 0; o < n; o++) e[o].isLayoutInstant = !0;
          for (this.arrange(), o = 0; o < n; o++) delete e[o].isLayoutInstant;
          this.reveal(t)
        }
      }, t.remove);
    return t.remove = function(t) {
      t = o.makeArray(t);
      var e = this.getItems(t);
      h.call(this, t);
      for (var i = e && e.length, n = 0; i && n < i; n++) {
        var s = e[n];
        o.removeFrom(this.filteredItems, s)
      }
    }, t.shuffle = function() {
      for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
    }, t._noTransition = function(t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0, t = t.apply(this, e);
      return this.options.transitionDuration = i, t
    }, t.getFilteredItemElements = function() {
      return this.filteredItems.map(function(t) {
        return t.element
      })
    }, u
  }), (t => {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
  })(function(t) {
    function e() {}
  
    function i(t, e) {
      a.ev.on("mfp" + t + v, e)
    }
  
    function n(e, i, n, o) {
      var s = document.createElement("div");
      return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
    }
  
    function o(e, i) {
      a.ev.triggerHandler("mfp" + e, i), a.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), a.st.callbacks[e]) && a.st.callbacks[e].apply(a, t.isArray(i) ? i : [i])
    }
  
    function s(e) {
      return e === d && a.currTemplate.closeBtn || (a.currTemplate.closeBtn = t(a.st.closeMarkup.replace("%title%", a.st.tClose)), d = e), a.currTemplate.closeBtn
    }
  
    function r() {
      t.magnificPopup.instance || ((a = new e).init(), t.magnificPopup.instance = a)
    }
    var a, l, u, c, h, d, f = "Close",
      p = "BeforeClose",
      m = "MarkupParse",
      g = "Open",
      v = ".mfp",
      y = "mfp-ready",
      _ = "mfp-removing",
      b = "mfp-prevent-close",
      w = !!window.jQuery,
      E = t(window);
  
    function C() {
      S && (F.after(S.addClass(I)).detach(), S = null)
    }
    t.magnificPopup = {
      instance: null,
      proto: e.prototype = {
        constructor: e,
        init: function() {
          var e = navigator.appVersion;
          a.isLowIE = a.isIE8 = document.all && !document.addEventListener, a.isAndroid = /android/gi.test(e), a.isIOS = /iphone|ipad|ipod/gi.test(e), a.supportsTransition = (() => {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
              if (e.pop() + "Transition" in t) return !0;
            return !1
          })(), a.probablyMobile = a.isAndroid || a.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), u = t(document), a.popupsCache = {}
        },
        open: function(e) {
          if (!1 === e.isObj) {
            a.items = e.items.toArray(), a.index = 0;
            for (var r, l = e.items, c = 0; c < l.length; c++)
              if (((r = l[c]).parsed ? r.el[0] : r) === e.el[0]) {
                a.index = c;
                break
              }
          } else a.items = t.isArray(e.items) ? e.items : [e.items], a.index = e.index || 0;
          if (!a.isOpen) {
            a.types = [], h = "", e.mainEl && e.mainEl.length ? a.ev = e.mainEl.eq(0) : a.ev = u, e.key ? (a.popupsCache[e.key] || (a.popupsCache[e.key] = {}), a.currTemplate = a.popupsCache[e.key]) : a.currTemplate = {}, a.st = t.extend(!0, {}, t.magnificPopup.defaults, e), a.fixedContentPos = "auto" === a.st.fixedContentPos ? !a.probablyMobile : a.st.fixedContentPos, a.st.modal && (a.st.closeOnContentClick = !1, a.st.closeOnBgClick = !1, a.st.showCloseBtn = !1, a.st.enableEscapeKey = !1), a.bgOverlay || (a.bgOverlay = n("bg").on("click" + v, function() {
              a.close()
            }), a.wrap = n("wrap").attr("tabindex", -1).on("click" + v, function(t) {
              a._checkIfClose(t.target) && a.close()
            }), a.container = n("container", a.wrap)), a.contentContainer = n("content"), a.st.preloader && (a.preloader = n("preloader", a.container, a.st.tLoading));
            var d = t.magnificPopup.modules;
            for (c = 0; c < d.length; c++) {
              var f = (f = d[c]).charAt(0).toUpperCase() + f.slice(1);
              a["init" + f].call(a)
            }
            o("BeforeOpen"), a.st.showCloseBtn && (a.st.closeBtnInside ? (i(m, function(t, e, i, n) {
              i.close_replaceWith = s(n.type)
            }), h += " mfp-close-btn-in") : a.wrap.append(s())), a.st.alignTop && (h += " mfp-align-top"), a.fixedContentPos ? a.wrap.css({
              overflow: a.st.overflowY,
              overflowX: "hidden",
              overflowY: a.st.overflowY
            }) : a.wrap.css({
              top: E.scrollTop(),
              position: "absolute"
            }), !1 !== a.st.fixedBgPos && ("auto" !== a.st.fixedBgPos || a.fixedContentPos) || a.bgOverlay.css({
              height: u.height(),
              position: "absolute"
            }), a.st.enableEscapeKey && u.on("keyup" + v, function(t) {
              27 === t.keyCode && a.close()
            }), E.on("resize" + v, function() {
              a.updateSize()
            }), a.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && a.wrap.addClass(h);
            var p = a.wH = E.height(),
              _ = {},
              b = (a.fixedContentPos && a._hasScrollBar(p) && (b = a._getScrollbarSize()) && (_.marginRight = b), a.fixedContentPos && (a.isIE7 ? t("body, html").css("overflow", "hidden") : _.overflow = "hidden"), a.st.mainClass);
            return a.isIE7 && (b += " mfp-ie7"), b && a._addClassToMFP(b), a.updateItemHTML(), o("BuildControls"), t("html").css(_), a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo || t(document.body)), a._lastFocusedEl = document.activeElement, setTimeout(function() {
              a.content ? (a._addClassToMFP(y), a._setFocus()) : a.bgOverlay.addClass(y), u.on("focusin" + v, a._onFocusIn)
            }, 16), a.isOpen = !0, a.updateSize(p), o(g), e
          }
          a.updateItemHTML()
        },
        close: function() {
          a.isOpen && (o(p), a.isOpen = !1, a.st.removalDelay && !a.isLowIE && a.supportsTransition ? (a._addClassToMFP(_), setTimeout(function() {
            a._close()
          }, a.st.removalDelay)) : a._close())
        },
        _close: function() {
          o(f);
          var e = _ + " " + y + " ";
          a.bgOverlay.detach(), a.wrap.detach(), a.container.empty(), a.st.mainClass && (e += a.st.mainClass + " "), a._removeClassFromMFP(e), a.fixedContentPos && (e = {
            marginRight: ""
          }, a.isIE7 ? t("body, html").css("overflow", "") : e.overflow = "", t("html").css(e)), u.off("keyup.mfp focusin" + v), a.ev.off(v), a.wrap.attr("class", "mfp-wrap").removeAttr("style"), a.bgOverlay.attr("class", "mfp-bg"), a.container.attr("class", "mfp-container"), !a.st.showCloseBtn || a.st.closeBtnInside && !0 !== a.currTemplate[a.currItem.type] || a.currTemplate.closeBtn && a.currTemplate.closeBtn.detach(), a.st.autoFocusLast && a._lastFocusedEl && t(a._lastFocusedEl).focus(), a.currItem = null, a.content = null, a.currTemplate = null, a.prevHeight = 0, o("AfterClose")
        },
        updateSize: function(t) {
          var e;
          a.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, a.wrap.css("height", e *= window.innerHeight), a.wH = e) : a.wH = t || E.height(), a.fixedContentPos || a.wrap.css("height", a.wH), o("Resize")
        },
        updateItemHTML: function() {
          var e = a.items[a.index],
            i = (a.contentContainer.detach(), a.content && a.content.detach(), (e = e.parsed ? e : a.parseEl(a.index)).type),
            n = (o("BeforeChange", [a.currItem ? a.currItem.type : "", i]), a.currItem = e, a.currTemplate[i] || (o("FirstMarkupParse", n = !!a.st[i] && a.st[i].markup), a.currTemplate[i] = !n || t(n)), c && c !== e.type && a.container.removeClass("mfp-" + c + "-holder"), a["get" + i.charAt(0).toUpperCase() + i.slice(1)](e, a.currTemplate[i]));
          a.appendContent(n, i), e.preloaded = !0, o("Change", e), c = e.type, a.container.prepend(a.contentContainer), o("AfterChange")
        },
        appendContent: function(t, e) {
          (a.content = t) ? a.st.showCloseBtn && a.st.closeBtnInside && !0 === a.currTemplate[e] ? a.content.find(".mfp-close").length || a.content.append(s()) : a.content = t: a.content = "", o("BeforeAppend"), a.container.addClass("mfp-" + e + "-holder"), a.contentContainer.append(a.content)
        },
        parseEl: function(e) {
          var i, n = a.items[e];
          if ((n = n.tagName ? {
              el: t(n)
            } : (i = n.type, {
              data: n,
              src: n.src
            })).el) {
            for (var s = a.types, r = 0; r < s.length; r++)
              if (n.el.hasClass("mfp-" + s[r])) {
                i = s[r];
                break
              } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
          }
          return n.type = i || a.st.type || "inline", n.index = e, n.parsed = !0, a.items[e] = n, o("ElementParse", n), a.items[e]
        },
        addGroup: function(t, e) {
          function i(i) {
            i.mfpEl = this, a._openClick(i, t, e)
          }
          var n = "click.magnificPopup";
          (e = e || {}).mainEl = t, e.items ? (e.isObj = !0, t.off(n).on(n, i)) : (e.isObj = !1, e.delegate ? t.off(n).on(n, e.delegate, i) : (e.items = t).off(n).on(n, i))
        },
        _openClick: function(e, i, n) {
          if ((void 0 !== n.midClick ? n : t.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
            var o = (void 0 !== n.disableOn ? n : t.magnificPopup.defaults).disableOn;
            if (o)
              if (t.isFunction(o)) {
                if (!o.call(a)) return !0
              } else if (E.width() < o) return !0;
            e.type && (e.preventDefault(), a.isOpen) && e.stopPropagation(), n.el = t(e.mfpEl), n.delegate && (n.items = i.find(n.delegate)), a.open(n)
          }
        },
        updateStatus: function(t, e) {
          var i;
          a.preloader && (l !== t && a.container.removeClass("mfp-s-" + l), o("UpdateStatus", i = {
            status: t,
            text: e = e || "loading" !== t ? e : a.st.tLoading
          }), t = i.status, a.preloader.html(e = i.text), a.preloader.find("a").on("click", function(t) {
            t.stopImmediatePropagation()
          }), a.container.addClass("mfp-s-" + t), l = t)
        },
        _checkIfClose: function(e) {
          if (!t(e).hasClass(b)) {
            var i = a.st.closeOnContentClick,
              n = a.st.closeOnBgClick;
            if (i && n) return !0;
            if (!a.content || t(e).hasClass("mfp-close") || a.preloader && e === a.preloader[0]) return !0;
            if (e === a.content[0] || t.contains(a.content[0], e)) {
              if (i) return !0
            } else if (n && t.contains(document, e)) return !0;
            return !1
          }
        },
        _addClassToMFP: function(t) {
          a.bgOverlay.addClass(t), a.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
          this.bgOverlay.removeClass(t), a.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
          return (a.isIE7 ? u.height() : document.body.scrollHeight) > (t || E.height())
        },
        _setFocus: function() {
          (a.st.focus ? a.content.find(a.st.focus).eq(0) : a.wrap).focus()
        },
        _onFocusIn: function(e) {
          return e.target === a.wrap[0] || t.contains(a.wrap[0], e.target) ? void 0 : (a._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
          var s;
          n.data && (i = t.extend(n.data, i)), o(m, [e, i, n]), t.each(i, function(i, n) {
            if (void 0 === n || !1 === n) return !0;
            var o, r;
            1 < (s = i.split("_")).length ? 0 < (o = e.find(v + "-" + s[0])).length && ("replaceWith" === (r = s[1]) ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)) : e.find(v + "-" + i).html(n)
          })
        },
        _getScrollbarSize: function() {
          var t;
          return void 0 === a.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), a.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), a.scrollbarSize
        }
      },
      modules: [],
      open: function(e, i) {
        return r(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
      },
      close: function() {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
      },
      registerModule: function(e, i) {
        i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0
      }
    }, t.fn.magnificPopup = function(e) {
      r();
      var i, n, o, s = t(this);
      return "string" == typeof e ? "open" === e ? (i = w ? s.data("magnificPopup") : s[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, o = i.items ? i.items[n] : (o = s, (o = i.delegate ? o.find(i.delegate) : o).eq(n)), a._openClick({
        mfpEl: o
      }, s, i)) : a.isOpen && a[e].apply(a, Array.prototype.slice.call(arguments, 1)) : (e = t.extend(!0, {}, e), w ? s.data("magnificPopup", e) : s[0].magnificPopup = e, a.addGroup(s, e)), s
    };
    var I, F, S, T = "inline";
  
    function x() {
      O && t(document.body).removeClass(O)
    }
  
    function D() {
      x(), a.req && a.req.abort()
    }
    t.magnificPopup.registerModule(T, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function() {
          a.types.push(T), i(f + "." + T, function() {
            C()
          })
        },
        getInline: function(e, i) {
          var o, s, r;
          return C(), e.src ? (o = a.st.inline, (s = t(e.src)).length ? ((r = s[0].parentNode) && r.tagName && (F || (I = o.hiddenClass, F = n(I), I = "mfp-" + I), S = s.after(F).detach().removeClass(I)), a.updateStatus("ready")) : (a.updateStatus("error", o.tNotFound), s = t("<div>")), e.inlineElement = s) : (a.updateStatus("ready"), a._parseMarkup(i, {}, e), i)
        }
      }
    });
    var O, A, L = "ajax";
  
    function z(t) {
      var e;
      a.currTemplate[j] && (e = a.currTemplate[j].find("iframe")).length && (t || (e[0].src = "//about:blank"), a.isIE8) && e.css("display", t ? "block" : "none")
    }
  
    function k(t) {
      var e = a.items.length;
      return e - 1 < t ? t - e : t < 0 ? e + t : t
    }
  
    function P(t, e, i) {
      return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    }
    t.magnificPopup.registerModule(L, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function() {
          a.types.push(L), O = a.st.ajax.cursor, i(f + "." + L, D), i("BeforeChange." + L, D)
        },
        getAjax: function(e) {
          O && t(document.body).addClass(O), a.updateStatus("loading");
          var i = t.extend({
            url: e.src,
            success: function(i, n, s) {
              o("ParseAjax", i = {
                data: i,
                xhr: s
              }), a.appendContent(t(i.data), L), e.finished = !0, x(), a._setFocus(), setTimeout(function() {
                a.wrap.addClass(y)
              }, 16), a.updateStatus("ready"), o("AjaxContentAdded")
            },
            error: function() {
              x(), e.finished = e.loadError = !0, a.updateStatus("error", a.st.ajax.tError.replace("%url%", e.src))
            }
          }, a.st.ajax.settings);
          return a.req = t.ajax(i), ""
        }
      }
    }), t.magnificPopup.registerModule("image", {
      options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function() {
          var e = a.st.image,
            n = ".image";
          a.types.push("image"), i(g + n, function() {
            "image" === a.currItem.type && e.cursor && t(document.body).addClass(e.cursor)
          }), i(f + n, function() {
            e.cursor && t(document.body).removeClass(e.cursor), E.off("resize" + v)
          }), i("Resize" + n, a.resizeImage), a.isLowIE && i("AfterChange", a.resizeImage)
        },
        resizeImage: function() {
          var t, e = a.currItem;
          e && e.img && a.st.image.verticalFit && (t = 0, a.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", a.wH - t))
        },
        _onImageHasSize: function(t) {
          t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, o("ImageHasSize", t), t.imgHidden) && (a.content && a.content.removeClass("mfp-loading"), t.imgHidden = !1)
        },
        findImageSize: function(t) {
          var e = 0,
            i = t.img[0];
          ! function n(o) {
            A && clearInterval(A), A = setInterval(function() {
              return 0 < i.naturalWidth ? void a._onImageHasSize(t) : (200 < e && clearInterval(A), void(3 == ++e ? n(10) : 40 === e ? n(50) : 100 === e && n(500)))
            }, o)
          }(1)
        },
        getImage: function(e, i) {
          function n() {
            e && (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("error", l.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
          }
          var s, r = 0,
            l = a.st.image,
            u = i.find(".mfp-img");
          return u.length && ((s = document.createElement("img")).className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = t(s).on("load.mfploader", function t() {
            e && (e.img[0].complete ? (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, o("ImageLoadComplete")) : ++r < 200 ? setTimeout(t, 100) : n())
          }).on("error.mfploader", n), s.src = e.src, u.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)), a._parseMarkup(i, {
            title: (e => {
              if (e.data && void 0 !== e.data.title) return e.data.title;
              var i = a.st.image.titleSrc;
              if (i) {
                if (t.isFunction(i)) return i.call(a, e);
                if (e.el) return e.el.attr(i) || ""
              }
              return ""
            })(e),
            img_replaceWith: e.img
          }, e), a.resizeImage(), e.hasSize ? (A && clearInterval(A), e.loadError ? (i.addClass("mfp-loading"), a.updateStatus("error", l.tError.replace("%url%", e.src))) : (i.removeClass("mfp-loading"), a.updateStatus("ready"))) : (a.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, i.addClass("mfp-loading"), a.findImageSize(e))), i
        }
      }
    }), t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function(t) {
          return t.is("img") ? t : t.find("img")
        }
      },
      proto: {
        initZoom: function() {
          var t, e, n, s, r, l, u = a.st.zoom,
            c = ".zoom";
          u.enabled && a.supportsTransition && (s = u.duration, r = function(t) {
            t = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
            var e = "all " + u.duration / 1e3 + "s " + u.easing,
              i = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              n = "transition";
            return i["-webkit-" + n] = i["-moz-" + n] = i["-o-" + n] = i[n] = e, t.css(i), t
          }, l = function() {
            a.content.css("visibility", "visible")
          }, i("BuildControls" + c, function() {
            a._allowZoom() && (clearTimeout(e), a.content.css("visibility", "hidden"), (t = a._getItemToZoom()) ? ((n = r(t)).css(a._getOffset()), a.wrap.append(n), e = setTimeout(function() {
              n.css(a._getOffset(!0)), e = setTimeout(function() {
                l(), setTimeout(function() {
                  n.remove(), t = n = null, o("ZoomAnimationEnded")
                }, 16)
              }, s)
            }, 16)) : l())
          }), i(p + c, function() {
            if (a._allowZoom()) {
              if (clearTimeout(e), a.st.removalDelay = s, !t) {
                if (!(t = a._getItemToZoom())) return;
                n = r(t)
              }
              n.css(a._getOffset(!0)), a.wrap.append(n), a.content.css("visibility", "hidden"), setTimeout(function() {
                n.css(a._getOffset())
              }, 16)
            }
          }), i(f + c, function() {
            a._allowZoom() && (l(), n && n.remove(), t = null)
          }))
        },
        _allowZoom: function() {
          return "image" === a.currItem.type
        },
        _getItemToZoom: function() {
          return !!a.currItem.hasSize && a.currItem.img
        },
        _getOffset: function(e) {
          var i = (e = e ? a.currItem.img : a.st.zoom.opener(a.currItem.el || a.currItem)).offset(),
            n = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);
          i.top -= t(window).scrollTop() - n, e = {
            width: e.width(),
            height: (w ? e.innerHeight() : e[0].offsetHeight) - o - n
          };
          return (N = void 0 === N ? void 0 !== document.createElement("p").style.MozTransform : N) ? e["-moz-transform"] = e.transform = "translate(" + i.left + "px," + i.top + "px)" : (e.left = i.left, e.top = i.top), e
        }
      }
    });
    var N, j = "iframe",
      R = (t.magnificPopup.registerModule(j, {
        options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1"
            },
            gmaps: {
              index: "//maps.google.",
              src: "%id%&output=embed"
            }
          }
        },
        proto: {
          initIframe: function() {
            a.types.push(j), i("BeforeChange", function(t, e, i) {
              e !== i && (e === j ? z() : i === j && z(!0))
            }), i(f + "." + j, function() {
              z()
            })
          },
          getIframe: function(e, i) {
            var n = e.src,
              o = a.st.iframe,
              s = (t.each(o.patterns, function() {
                return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
              }), {});
            return o.srcAction && (s[o.srcAction] = n), a._parseMarkup(i, s, e), a.updateStatus("ready"), i
          }
        }
      }), t.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%"
        },
        proto: {
          initGallery: function() {
            var e = a.st.gallery,
              n = ".mfp-gallery";
            return a.direction = !0, !(!e || !e.enabled) && (h += " mfp-gallery", i(g + n, function() {
              e.navigateByImgClick && a.wrap.on("click" + n, ".mfp-img", function() {
                return 1 < a.items.length ? (a.next(), !1) : void 0
              }), u.on("keydown" + n, function(t) {
                37 === t.keyCode ? a.prev() : 39 === t.keyCode && a.next()
              })
            }), i("UpdateStatus" + n, function(t, e) {
              e.text && (e.text = P(e.text, a.currItem.index, a.items.length))
            }), i(m + n, function(t, i, n, o) {
              var s = a.items.length;
              n.counter = 1 < s ? P(e.tCounter, o.index, s) : ""
            }), i("BuildControls" + n, function() {
              var i, n;
              1 < a.items.length && e.arrows && !a.arrowLeft && (n = e.arrowMarkup, i = a.arrowLeft = t(n.replace(/%title%/gi, e.tPrev).replace(/%dir%/gi, "left")).addClass(b), n = a.arrowRight = t(n.replace(/%title%/gi, e.tNext).replace(/%dir%/gi, "right")).addClass(b), i.click(function() {
                a.prev()
              }), n.click(function() {
                a.next()
              }), a.container.append(i.add(n)))
            }), i("Change" + n, function() {
              a._preloadTimeout && clearTimeout(a._preloadTimeout), a._preloadTimeout = setTimeout(function() {
                a.preloadNearbyImages(), a._preloadTimeout = null
              }, 16)
            }), void i(f + n, function() {
              u.off(n), a.wrap.off("click" + n), a.arrowRight = a.arrowLeft = null
            }))
          },
          next: function() {
            a.direction = !0, a.index = k(a.index + 1), a.updateItemHTML()
          },
          prev: function() {
            a.direction = !1, a.index = k(a.index - 1), a.updateItemHTML()
          },
          goTo: function(t) {
            a.direction = t >= a.index, a.index = t, a.updateItemHTML()
          },
          preloadNearbyImages: function() {
            for (var t = a.st.gallery.preload, e = Math.min(t[0], a.items.length), i = Math.min(t[1], a.items.length), n = 1; n <= (a.direction ? i : e); n++) a._preloadItem(a.index + n);
            for (n = 1; n <= (a.direction ? e : i); n++) a._preloadItem(a.index - n)
          },
          _preloadItem: function(e) {
            var i;
            e = k(e), a.items[e].preloaded || (o("LazyLoad", i = (i = a.items[e]).parsed ? i : a.parseEl(e)), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
              i.hasSize = !0
            }).on("error.mfploader", function() {
              i.hasSize = !0, i.loadError = !0, o("LazyLoadError", i)
            }).attr("src", i.src)), i.preloaded = !0)
          }
        }
      }), "retina");
    t.magnificPopup.registerModule(R, {
      options: {
        replaceSrc: function(t) {
          return t.src.replace(/\.\w+$/, function(t) {
            return "@2x" + t
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          var t, e;
          1 < window.devicePixelRatio && (t = a.st.retina, e = t.ratio, 1 < (e = isNaN(e) ? e() : e)) && (i("ImageHasSize." + R, function(t, i) {
            i.img.css({
              "max-width": i.img[0].naturalWidth / e,
              width: "100%"
            })
          }), i("ElementParse." + R, function(i, n) {
            n.src = t.replaceSrc(n, e)
          }))
        }
      }
    }), r()
  }), (t => {
    t.extend(t.fn, {
      validate: function(e) {
        var i;
        if (this.length) return (i = t.data(this[0], "validator")) || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
          i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
        }), this.submit(function(e) {
          function n() {
            var n;
            return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1)
          }
          return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : n() : (i.focusInvalid(), !1)
        })), i);
        e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
      },
      valid: function() {
        var e, i;
        return t(this[0]).is("form") ? this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function() {
          e = e && i.element(this)
        }), e)
      },
      removeAttrs: function(e) {
        var i = {},
          n = this;
        return t.each(e.split(/\s/), function(t, e) {
          i[e] = n.attr(e), n.removeAttr(e)
        }), i
      },
      rules: function(e, i) {
        var n, o = this[0];
        if (e) {
          var s, r = t.data(o.form, "validator").settings,
            a = r.rules,
            l = t.validator.staticRules(o);
          switch (e) {
            case "add":
              t.extend(l, t.validator.normalizeRule(i)), delete l.messages, a[o.name] = l, i.messages && (r.messages[o.name] = t.extend(r.messages[o.name], i.messages));
              break;
            case "remove":
              return i ? (s = {}, t.each(i.split(/\s/), function(t, e) {
                s[e] = l[e], delete l[e]
              }), s) : (delete a[o.name], l)
          }
        }
        return (e = t.validator.normalizeRules(t.extend({}, t.validator.classRules(o), t.validator.attributeRules(o), t.validator.dataRules(o), t.validator.staticRules(o)), o)).required && (n = e.required, delete e.required, e = t.extend({
          required: n
        }, e)), e
      }
    }), t.extend(t.expr[":"], {
      blank: function(e) {
        return !t.trim("" + t(e).val())
      },
      filled: function(e) {
        return !!t.trim("" + t(e).val())
      },
      unchecked: function(e) {
        return !t(e).prop("checked")
      }
    }), t.validator = function(e, i) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
      return 1 === arguments.length ? function() {
        var i = t.makeArray(arguments);
        return i.unshift(e), t.validator.format.apply(this, i)
      } : ((i = 2 < arguments.length && i.constructor !== Array ? t.makeArray(arguments).slice(1) : i).constructor !== Array && (i = [i]), t.each(i, function(t, i) {
        e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
          return i
        })
      }), e)
    }, t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(t) {
          this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
        },
        onfocusout: function(t) {
          this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
        },
        onkeyup: function(t, e) {
          9 === e.which && "" === this.elementValue(t) || !(t.name in this.submitted) && t !== this.lastElement || this.element(t)
        },
        onclick: function(t) {
          t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).addClass(i).removeClass(n)
        },
        unhighlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).removeClass(i).addClass(n)
        }
      },
      setDefaults: function(e) {
        t.extend(t.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format("Please enter no more than {0} characters."),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format("Please enter a value less than or equal to {0}."),
        min: t.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function e(e) {
            var i = t.data(this[0].form, "validator"),
              n = "on" + e.type.replace(/^validate/, "");
            i.settings[n] && i.settings[n].call(i, this[0], e)
          }
          this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var i = this.groups = {},
            n = (t.each(this.settings.groups, function(e, n) {
              "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                i[n] = e
              })
            }), this.settings.rules);
          t.each(n, function(e, i) {
            n[e] = t.validator.normalizeRule(i)
          }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
          return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
          this.prepareForm();
          for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
          return this.valid()
        },
        element: function(e) {
          e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
          var i = !1 !== this.check(e);
          return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        },
        showErrors: function(e) {
          if (e) {
            for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
              message: e[i],
              element: this.findByName(i)[0]
            });
            this.successList = t.grep(this.successList, function(t) {
              return !(t.name in e)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
          t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid)
        },
        objectLength: function(t) {
          var e, i = 0;
          for (e in t) i++;
          return i
        },
        hideErrors: function() {
          this.addWrapper(this.toHide).hide()
        },
        valid: function() {
          return 0 === this.size()
        },
        size: function() {
          return this.errorList.length
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid) try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (t) {}
        },
        findLastActive: function() {
          var e = this.lastActive;
          return e && 1 === t.grep(this.errorList, function(t) {
            return t.element.name === e.name
          }).length && e
        },
        elements: function() {
          var e = this,
            i = {};
          return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules()) || (i[this.name] = !0, 0))
          })
        },
        clean: function(e) {
          return t(e)[0]
        },
        errors: function() {
          var e = this.settings.errorClass.replace(" ", ".");
          return t(this.settings.errorElement + "." + e, this.errorContext)
        },
        reset: function() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
        },
        prepareForm: function() {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(t) {
          this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function(e) {
          var i = t(e).attr("type"),
            n = t(e).val();
          return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
        },
        check: function(e) {
          e = this.validationTargetFor(this.clean(e));
          var i, n, o = t(e).rules(),
            s = !1,
            r = this.elementValue(e);
          for (n in o) {
            var a = {
              method: n,
              parameters: o[n]
            };
            try {
              if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, r, e, a.parameters))) s = !0;
              else {
                if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                if (!i) return this.formatAndAdd(e, a), !1
              }
            } catch (i) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", i), i
            }
          }
          return s ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
        },
        customDataMessage: function(e, i) {
          return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
        },
        customMessage: function(t, e) {
          return (t = this.settings.messages[t]) && (t.constructor === String ? t : t[e])
        },
        findDefined: function() {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
        },
        defaultMessage: function(e, i) {
          return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
        },
        formatAndAdd: function(e, i) {
          var n = this.defaultMessage(e, i.method),
            o = /\$?\{(\d+)\}/g;
          "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)), this.errorList.push({
            message: n,
            element: e
          }), this.errorMap[e.name] = n, this.submitted[e.name] = n
        },
        addWrapper: function(t) {
          return this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t
        },
        defaultShowErrors: function() {
          for (var t, e = 0; this.errorList[e]; e++) {
            var i = this.errorList[e];
            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
          }
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
          return t(this.errorList).map(function() {
            return this.element
          })
        },
        showLabel: function(e, i) {
          var n = this.errorsFor(e);
          n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
        },
        errorsFor: function(e) {
          var i = this.idOrName(e);
          return this.errors().filter(function() {
            return t(this).attr("for") === i
          })
        },
        idOrName: function(t) {
          return this.groups[t.name] || !this.checkable(t) && t.id || t.name
        },
        validationTargetFor: function(t) {
          return this.checkable(t) ? this.findByName(t.name).not(this.settings.ignore)[0] : t
        },
        checkable: function(t) {
          return /radio|checkbox/i.test(t.type)
        },
        findByName: function(e) {
          return t(this.currentForm).find("[name='" + e + "']")
        },
        getLength: function(e, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", i).length;
            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
          }
          return e.length
        },
        depend: function(t, e) {
          return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
        },
        dependTypes: {
          "boolean": function(t) {
            return t
          },
          string: function(e, i) {
            return !!t(e, i.form).length
          },
          "function": function(t, e) {
            return t(e)
          }
        },
        optional: function(e) {
          var i = this.elementValue(e);
          return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
        },
        startRequest: function(t) {
          this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
        },
        stopRequest: function(e, i) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(e) {
          return t.data(e, "previousValue") || t.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function(e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
      },
      classRules: function(e) {
        var i = {};
        return (e = t(e).attr("class")) && t.each(e.split(" "), function() {
          this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
      },
      attributeRules: function(e) {
        var i, n = {},
          o = t(e),
          s = o[0].getAttribute("type");
        for (i in t.validator.methods) {
          var r = "required" === i ? !("" !== (r = o.get(0).getAttribute(i)) && !r) : o.attr(i);
          (r = /min|max/.test(i) && (null === s || /number|range|text/.test(s)) ? Number(r) : r) ? n[i] = r: s === i && "range" !== s && (n[i] = !0)
        }
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      dataRules: function(e) {
        var i, n, o = {},
          s = t(e);
        for (i in t.validator.methods) void 0 !== (n = s.data("rule-" + i.toLowerCase())) && (o[i] = n);
        return o
      },
      staticRules: function(e) {
        var i = t.data(e.form, "validator");
        return i.settings.rules && t.validator.normalizeRule(i.settings.rules[e.name]) || {}
      },
      normalizeRules: function(e, i) {
        return t.each(e, function(n, o) {
          if (!1 === o) delete e[n];
          else if (o.param || o.depends) {
            var s = !0;
            switch (typeof o.depends) {
              case "string":
                s = !!t(o.depends, i.form).length;
                break;
              case "function":
                s = o.depends.call(i, i)
            }
            s ? e[n] = void 0 === o.param || o.param : delete e[n]
          }
        }), t.each(e, function(n, o) {
          e[n] = t.isFunction(o) ? o(i) : o
        }), t.each(["minlength", "maxlength"], function() {
          e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function() {
          var i;
          e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength) && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength), e
      },
      normalizeRule: function(e) {
        var i;
        return "string" == typeof e && (i = {}, t.each(e.split(/\s/), function() {
          i[this] = !0
        }), e = i), e
      },
      addMethod: function(e, i, n) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
        required: function(e, i, n) {
          return this.depend(n, i) ? "select" === i.nodeName.toLowerCase() ? (n = t(i).val()) && 0 < n.length : this.checkable(i) ? 0 < this.getLength(e, i) : 0 < t.trim(e).length : "dependency-mismatch"
        },
        email: function(t, e) {
          return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        },
        url: function(t, e) {
          return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
        },
        date: function(t, e) {
          return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
        },
        dateISO: function(t, e) {
          return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
        },
        number: function(t, e) {
          return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function(t, e) {
          return this.optional(e) || /^\d+$/.test(t)
        },
        creditcard: function(t, e) {
          if (this.optional(e)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(t)) return !1;
          for (var i = 0, n = 0, o = !1, s = (t = t.replace(/\D/g, "")).length - 1; 0 <= s; s--) {
            var r = t.charAt(s);
            n = parseInt(r, 10);
            o && 9 < (n *= 2) && (n -= 9), i += n, o = !o
          }
          return 0 == i % 10
        },
        minlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || n <= e
        },
        maxlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e <= n
        },
        rangelength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e >= n[0] && n[1] >= e
        },
        min: function(t, e, i) {
          return this.optional(e) || i <= t
        },
        max: function(t, e, i) {
          return this.optional(e) || t <= i
        },
        range: function(t, e, i) {
          return this.optional(e) || t >= i[0] && i[1] >= t
        },
        equalTo: function(e, i, n) {
          return n = t(n), this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            t(i).valid()
          }), e === n.val()
        },
        remote: function(e, i, n) {
          if (this.optional(i)) return "dependency-mismatch";
          var o = this.previousValue(i);
          if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), o.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = o.message, n = "string" == typeof n ? {
              url: n
            } : n, o.old === e) return o.valid;
          o.old = e;
          var s = this,
            r = (this.startRequest(i), {});
          return r[i.name] = e, t.ajax(t.extend(!0, {
            url: n,
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: r,
            success: function(n) {
              s.settings.messages[i.name].remote = o.originalMessage;
              var r, a = !0 === n || "true" === n;
              a ? (r = s.formSubmitted, s.prepareElement(i), s.formSubmitted = r, s.successList.push(i), delete s.invalid[i.name], s.showErrors()) : (r = {}, n = n || s.defaultMessage(i, "remote"), r[i.name] = o.message = t.isFunction(n) ? n(e) : n, s.invalid[i.name] = !0, s.showErrors(r)), o.valid = a, s.stopRequest(i, a)
            }
          }, n)), "pending"
        }
      }
    }), t.format = t.validator.format
  })(jQuery), (t => {
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
      var o = t.port;
      "abort" === t.mode && (i[o] && i[o].abort(), i[o] = n)
    }) : (e = t.ajax, t.ajax = function(n) {
      var o = ("mode" in n ? n : t.ajaxSettings).mode;
      n = ("port" in n ? n : t.ajaxSettings).port;
      return "abort" === o ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    })
  })(jQuery), (t => {
    t.extend(t.fn, {
      validateDelegate: function(e, i, n) {
        return this.bind(i, function(i) {
          return (i = t(i.target)).is(e) ? n.apply(i, arguments) : void 0
        })
      }
    })
  })(jQuery), (t => {
    0 < t(".img-gal").length && t(".img-gal").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    })
  })(jQuery), (t => {
    var e = t("header").height() + 50;
    t(".header_area").length && t(window).scroll(function() {
      var i = t(window).scrollTop();
      e <= i ? t(".header_area").addClass("navbar_fixed") : t(".header_area").removeClass("navbar_fixed")
    })
  })(jQuery), (t => {
    0 < t(".img-gal").length && t(".img-gal").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    })
  })(jQuery), (t => {
    t("select").niceSelect(), t(window).on("load", function() {
      var e;
      t(".portfolio-filter ul li").on("click", function() {
        t(".portfolio-filter ul li").removeClass("active"), t(this).addClass("active");
        var i = t(this).attr("data-filter");
        e.isotope({
          filter: i
        })
      }), document.getElementById("portfolio") && (e = t(".portfolio-grid").isotope({
        itemSelector: ".all",
        percentPosition: !0,
        masonry: {
          columnWidth: ".all"
        }
      }))
    })
  })(jQuery), $(document).ready(function() {
    $("a[href^='#']").on("click", function(t) {
      if (t.preventDefault(), (t = $(this).attr("href").substring(1)) && (t = $("#" + t)).length) {
        t = t.offset().top;
        let e = window.scrollY,
          i = t - e,
          n = 300,
          o = null,
          s = t => {
            let r = (t - (o = null === o ? t : o)) / n;
            1 < r && (r = 1), t = e + i * ((t = r) < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), window.scrollTo(0, t), r < 1 && requestAnimationFrame(s)
          };
        requestAnimationFrame(s), history.pushState(null, "", window.location.pathname + window.location.search)
      }
    })
  }), (t => {
    t.extend(t.fn, {
      validate: function(e) {
        var i;
        if (this.length) return (i = t.data(this[0], "validator")) || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
          i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
        }), this.submit(function(e) {
          function n() {
            var n;
            return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1)
          }
          return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : n() : (i.focusInvalid(), !1)
        })), i);
        e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
      },
      valid: function() {
        var e, i;
        return t(this[0]).is("form") ? this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function() {
          e = e && i.element(this)
        }), e)
      },
      removeAttrs: function(e) {
        var i = {},
          n = this;
        return t.each(e.split(/\s/), function(t, e) {
          i[e] = n.attr(e), n.removeAttr(e)
        }), i
      },
      rules: function(e, i) {
        var n, o = this[0];
        if (e) {
          var s, r = t.data(o.form, "validator").settings,
            a = r.rules,
            l = t.validator.staticRules(o);
          switch (e) {
            case "add":
              t.extend(l, t.validator.normalizeRule(i)), delete l.messages, a[o.name] = l, i.messages && (r.messages[o.name] = t.extend(r.messages[o.name], i.messages));
              break;
            case "remove":
              return i ? (s = {}, t.each(i.split(/\s/), function(t, e) {
                s[e] = l[e], delete l[e]
              }), s) : (delete a[o.name], l)
          }
        }
        return (e = t.validator.normalizeRules(t.extend({}, t.validator.classRules(o), t.validator.attributeRules(o), t.validator.dataRules(o), t.validator.staticRules(o)), o)).required && (n = e.required, delete e.required, e = t.extend({
          required: n
        }, e)), e
      }
    }), t.extend(t.expr[":"], {
      blank: function(e) {
        return !t.trim("" + t(e).val())
      },
      filled: function(e) {
        return !!t.trim("" + t(e).val())
      },
      unchecked: function(e) {
        return !t(e).prop("checked")
      }
    }), t.validator = function(e, i) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
      return 1 === arguments.length ? function() {
        var i = t.makeArray(arguments);
        return i.unshift(e), t.validator.format.apply(this, i)
      } : ((i = 2 < arguments.length && i.constructor !== Array ? t.makeArray(arguments).slice(1) : i).constructor !== Array && (i = [i]), t.each(i, function(t, i) {
        e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
          return i
        })
      }), e)
    }, t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(t) {
          this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
        },
        onfocusout: function(t) {
          this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
        },
        onkeyup: function(t, e) {
          9 === e.which && "" === this.elementValue(t) || !(t.name in this.submitted) && t !== this.lastElement || this.element(t)
        },
        onclick: function(t) {
          t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).addClass(i).removeClass(n)
        },
        unhighlight: function(e, i, n) {
          ("radio" === e.type ? this.findByName(e.name) : t(e)).removeClass(i).addClass(n)
        }
      },
      setDefaults: function(e) {
        t.extend(t.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format("Please enter no more than {0} characters."),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format("Please enter a value less than or equal to {0}."),
        min: t.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function e(e) {
            var i = t.data(this[0].form, "validator"),
              n = "on" + e.type.replace(/^validate/, "");
            i.settings[n] && i.settings[n].call(i, this[0], e)
          }
          this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var i = this.groups = {},
            n = (t.each(this.settings.groups, function(e, n) {
              "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                i[n] = e
              })
            }), this.settings.rules);
          t.each(n, function(e, i) {
            n[e] = t.validator.normalizeRule(i)
          }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
          return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
          this.prepareForm();
          for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
          return this.valid()
        },
        element: function(e) {
          e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
          var i = !1 !== this.check(e);
          return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        },
        showErrors: function(e) {
          if (e) {
            for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
              message: e[i],
              element: this.findByName(i)[0]
            });
            this.successList = t.grep(this.successList, function(t) {
              return !(t.name in e)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
          t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid)
        },
        objectLength: function(t) {
          var e, i = 0;
          for (e in t) i++;
          return i
        },
        hideErrors: function() {
          this.addWrapper(this.toHide).hide()
        },
        valid: function() {
          return 0 === this.size()
        },
        size: function() {
          return this.errorList.length
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid) try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (t) {}
        },
        findLastActive: function() {
          var e = this.lastActive;
          return e && 1 === t.grep(this.errorList, function(t) {
            return t.element.name === e.name
          }).length && e
        },
        elements: function() {
          var e = this,
            i = {};
          return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules()) || (i[this.name] = !0, 0))
          })
        },
        clean: function(e) {
          return t(e)[0]
        },
        errors: function() {
          var e = this.settings.errorClass.replace(" ", ".");
          return t(this.settings.errorElement + "." + e, this.errorContext)
        },
        reset: function() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
        },
        prepareForm: function() {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(t) {
          this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function(e) {
          var i = t(e).attr("type"),
            n = t(e).val();
          return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
        },
        check: function(e) {
          e = this.validationTargetFor(this.clean(e));
          var i, n, o = t(e).rules(),
            s = !1,
            r = this.elementValue(e);
          for (n in o) {
            var a = {
              method: n,
              parameters: o[n]
            };
            try {
              if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, r, e, a.parameters))) s = !0;
              else {
                if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                if (!i) return this.formatAndAdd(e, a), !1
              }
            } catch (i) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", i), i
            }
          }
          return s ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
        },
        customDataMessage: function(e, i) {
          return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
        },
        customMessage: function(t, e) {
          return (t = this.settings.messages[t]) && (t.constructor === String ? t : t[e])
        },
        findDefined: function() {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
        },
        defaultMessage: function(e, i) {
          return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
        },
        formatAndAdd: function(e, i) {
          var n = this.defaultMessage(e, i.method),
            o = /\$?\{(\d+)\}/g;
          "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)), this.errorList.push({
            message: n,
            element: e
          }), this.errorMap[e.name] = n, this.submitted[e.name] = n
        },
        addWrapper: function(t) {
          return this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t
        },
        defaultShowErrors: function() {
          for (var t, e = 0; this.errorList[e]; e++) {
            var i = this.errorList[e];
            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
          }
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
          return t(this.errorList).map(function() {
            return this.element
          })
        },
        showLabel: function(e, i) {
          var n = this.errorsFor(e);
          n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
        },
        errorsFor: function(e) {
          var i = this.idOrName(e);
          return this.errors().filter(function() {
            return t(this).attr("for") === i
          })
        },
        idOrName: function(t) {
          return this.groups[t.name] || !this.checkable(t) && t.id || t.name
        },
        validationTargetFor: function(t) {
          return this.checkable(t) ? this.findByName(t.name).not(this.settings.ignore)[0] : t
        },
        checkable: function(t) {
          return /radio|checkbox/i.test(t.type)
        },
        findByName: function(e) {
          return t(this.currentForm).find("[name='" + e + "']")
        },
        getLength: function(e, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", i).length;
            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
          }
          return e.length
        },
        depend: function(t, e) {
          return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
        },
        dependTypes: {
          "boolean": function(t) {
            return t
          },
          string: function(e, i) {
            return !!t(e, i.form).length
          },
          "function": function(t, e) {
            return t(e)
          }
        },
        optional: function(e) {
          var i = this.elementValue(e);
          return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
        },
        startRequest: function(t) {
          this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
        },
        stopRequest: function(e, i) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(e) {
          return t.data(e, "previousValue") || t.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function(e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
      },
      classRules: function(e) {
        var i = {};
        return (e = t(e).attr("class")) && t.each(e.split(" "), function() {
          this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
      },
      attributeRules: function(e) {
        var i, n = {},
          o = t(e),
          s = o[0].getAttribute("type");
        for (i in t.validator.methods) {
          var r = "required" === i ? !("" !== (r = o.get(0).getAttribute(i)) && !r) : o.attr(i);
          (r = /min|max/.test(i) && (null === s || /number|range|text/.test(s)) ? Number(r) : r) ? n[i] = r: s === i && "range" !== s && (n[i] = !0)
        }
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      dataRules: function(e) {
        var i, n, o = {},
          s = t(e);
        for (i in t.validator.methods) void 0 !== (n = s.data("rule-" + i.toLowerCase())) && (o[i] = n);
        return o
      },
      staticRules: function(e) {
        var i = t.data(e.form, "validator");
        return i.settings.rules && t.validator.normalizeRule(i.settings.rules[e.name]) || {}
      },
      normalizeRules: function(e, i) {
        return t.each(e, function(n, o) {
          if (!1 === o) delete e[n];
          else if (o.param || o.depends) {
            var s = !0;
            switch (typeof o.depends) {
              case "string":
                s = !!t(o.depends, i.form).length;
                break;
              case "function":
                s = o.depends.call(i, i)
            }
            s ? e[n] = void 0 === o.param || o.param : delete e[n]
          }
        }), t.each(e, function(n, o) {
          e[n] = t.isFunction(o) ? o(i) : o
        }), t.each(["minlength", "maxlength"], function() {
          e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function() {
          var i;
          e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength) && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength), e
      },
      normalizeRule: function(e) {
        var i;
        return "string" == typeof e && (i = {}, t.each(e.split(/\s/), function() {
          i[this] = !0
        }), e = i), e
      },
      addMethod: function(e, i, n) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
        required: function(e, i, n) {
          return this.depend(n, i) ? "select" === i.nodeName.toLowerCase() ? (n = t(i).val()) && 0 < n.length : this.checkable(i) ? 0 < this.getLength(e, i) : 0 < t.trim(e).length : "dependency-mismatch"
        },
        email: function(t, e) {
          return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        },
        url: function(t, e) {
          return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
        },
        date: function(t, e) {
          return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
        },
        dateISO: function(t, e) {
          return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
        },
        number: function(t, e) {
          return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function(t, e) {
          return this.optional(e) || /^\d+$/.test(t)
        },
        creditcard: function(t, e) {
          if (this.optional(e)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(t)) return !1;
          for (var i = 0, n = 0, o = !1, s = (t = t.replace(/\D/g, "")).length - 1; 0 <= s; s--) {
            var r = t.charAt(s);
            n = parseInt(r, 10);
            o && 9 < (n *= 2) && (n -= 9), i += n, o = !o
          }
          return 0 == i % 10
        },
        minlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || n <= e
        },
        maxlength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e <= n
        },
        rangelength: function(e, i, n) {
          return e = t.isArray(e) ? e.length : this.getLength(t.trim(e), i), this.optional(i) || e >= n[0] && n[1] >= e
        },
        min: function(t, e, i) {
          return this.optional(e) || i <= t
        },
        max: function(t, e, i) {
          return this.optional(e) || t <= i
        },
        range: function(t, e, i) {
          return this.optional(e) || t >= i[0] && i[1] >= t
        },
        equalTo: function(e, i, n) {
          return n = t(n), this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            t(i).valid()
          }), e === n.val()
        },
        remote: function(e, i, n) {
          if (this.optional(i)) return "dependency-mismatch";
          var o = this.previousValue(i);
          if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), o.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = o.message, n = "string" == typeof n ? {
              url: n
            } : n, o.old === e) return o.valid;
          o.old = e;
          var s = this,
            r = (this.startRequest(i), {});
          return r[i.name] = e, t.ajax(t.extend(!0, {
            url: n,
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: r,
            success: function(n) {
              s.settings.messages[i.name].remote = o.originalMessage;
              var r, a = !0 === n || "true" === n;
              a ? (r = s.formSubmitted, s.prepareElement(i), s.formSubmitted = r, s.successList.push(i), delete s.invalid[i.name], s.showErrors()) : (r = {}, n = n || s.defaultMessage(i, "remote"), r[i.name] = o.message = t.isFunction(n) ? n(e) : n, s.invalid[i.name] = !0, s.showErrors(r)), o.valid = a, s.stopRequest(i, a)
            }
          }, n)), "pending"
        }
      }
    }), t.format = t.validator.format
  })(jQuery), (t => {
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
      var o = t.port;
      "abort" === t.mode && (i[o] && i[o].abort(), i[o] = n)
    }) : (e = t.ajax, t.ajax = function(n) {
      var o = ("mode" in n ? n : t.ajaxSettings).mode;
      n = ("port" in n ? n : t.ajaxSettings).port;
      return "abort" === o ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    })
  })(jQuery), (t => {
    t.extend(t.fn, {
      validateDelegate: function(e, i, n) {
        return this.bind(i, function(i) {
          return (i = t(i.target)).is(e) ? n.apply(i, arguments) : void 0
        })
      }
    })
  })(jQuery), (t => {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
  })(function(t) {
    function e() {}
  
    function i(t, e) {
      a.ev.on("mfp" + t + ".mfp", e)
    }
  
    function n(e, i, n, o) {
      var s = document.createElement("div");
      return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
    }
  
    function o(e, i) {
      a.ev.triggerHandler("mfp" + e, i), a.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), a.st.callbacks[e]) && a.st.callbacks[e].apply(a, t.isArray(i) ? i : [i])
    }
  
    function s(e) {
      return e === d && a.currTemplate.closeBtn || (a.currTemplate.closeBtn = t(a.st.closeMarkup.replace("%title%", a.st.tClose)), d = e), a.currTemplate.closeBtn
    }
  
    function r() {
      t.magnificPopup.instance || ((a = new e).init(), t.magnificPopup.instance = a)
    }
    var a, l, u, c, h, d, f = "Close",
      p = "BeforeClose",
      m = "MarkupParse",
      g = "mfp-ready",
      v = "mfp-removing",
      y = "mfp-prevent-close",
      _ = !!window.jQuery,
      b = t(window);
  
    function w() {
      I && (C.after(I.addClass(E)).detach(), I = null)
    }
    t.magnificPopup = {
      instance: null,
      proto: e.prototype = {
        constructor: e,
        init: function() {
          var e = navigator.appVersion;
          a.isLowIE = a.isIE8 = document.all && !document.addEventListener, a.isAndroid = /android/gi.test(e), a.isIOS = /iphone|ipad|ipod/gi.test(e), a.supportsTransition = (() => {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
              if (e.pop() + "Transition" in t) return !0;
            return !1
          })(), a.probablyMobile = a.isAndroid || a.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), u = t(document), a.popupsCache = {}
        },
        open: function(e) {
          if (!1 === e.isObj) {
            a.items = e.items.toArray(), a.index = 0;
            for (var r, l = e.items, c = 0; c < l.length; c++)
              if (((r = l[c]).parsed ? r.el[0] : r) === e.el[0]) {
                a.index = c;
                break
              }
          } else a.items = t.isArray(e.items) ? e.items : [e.items], a.index = e.index || 0;
          if (!a.isOpen) {
            a.types = [], h = "", e.mainEl && e.mainEl.length ? a.ev = e.mainEl.eq(0) : a.ev = u, e.key ? (a.popupsCache[e.key] || (a.popupsCache[e.key] = {}), a.currTemplate = a.popupsCache[e.key]) : a.currTemplate = {}, a.st = t.extend(!0, {}, t.magnificPopup.defaults, e), a.fixedContentPos = "auto" === a.st.fixedContentPos ? !a.probablyMobile : a.st.fixedContentPos, a.st.modal && (a.st.closeOnContentClick = !1, a.st.closeOnBgClick = !1, a.st.showCloseBtn = !1, a.st.enableEscapeKey = !1), a.bgOverlay || (a.bgOverlay = n("bg").on("click.mfp", function() {
              a.close()
            }), a.wrap = n("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
              a._checkIfClose(t.target) && a.close()
            }), a.container = n("container", a.wrap)), a.contentContainer = n("content"), a.st.preloader && (a.preloader = n("preloader", a.container, a.st.tLoading));
            var d = t.magnificPopup.modules;
            for (c = 0; c < d.length; c++) {
              var f = (f = d[c]).charAt(0).toUpperCase() + f.slice(1);
              a["init" + f].call(a)
            }
            o("BeforeOpen"), a.st.showCloseBtn && (a.st.closeBtnInside ? (i(m, function(t, e, i, n) {
              i.close_replaceWith = s(n.type)
            }), h += " mfp-close-btn-in") : a.wrap.append(s())), a.st.alignTop && (h += " mfp-align-top"), a.fixedContentPos ? a.wrap.css({
              overflow: a.st.overflowY,
              overflowX: "hidden",
              overflowY: a.st.overflowY
            }) : a.wrap.css({
              top: b.scrollTop(),
              position: "absolute"
            }), !1 !== a.st.fixedBgPos && ("auto" !== a.st.fixedBgPos || a.fixedContentPos) || a.bgOverlay.css({
              height: u.height(),
              position: "absolute"
            }), a.st.enableEscapeKey && u.on("keyup.mfp", function(t) {
              27 === t.keyCode && a.close()
            }), b.on("resize.mfp", function() {
              a.updateSize()
            }), a.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && a.wrap.addClass(h);
            var p = a.wH = b.height(),
              v = {},
              y = (a.fixedContentPos && a._hasScrollBar(p) && (y = a._getScrollbarSize()) && (v.marginRight = y), a.fixedContentPos && (a.isIE7 ? t("body, html").css("overflow", "hidden") : v.overflow = "hidden"), a.st.mainClass);
            return a.isIE7 && (y += " mfp-ie7"), y && a._addClassToMFP(y), a.updateItemHTML(), o("BuildControls"), t("html").css(v), a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo || t(document.body)), a._lastFocusedEl = document.activeElement, setTimeout(function() {
              a.content ? (a._addClassToMFP(g), a._setFocus()) : a.bgOverlay.addClass(g), u.on("focusin.mfp", a._onFocusIn)
            }, 16), a.isOpen = !0, a.updateSize(p), o("Open"), e
          }
          a.updateItemHTML()
        },
        close: function() {
          a.isOpen && (o(p), a.isOpen = !1, a.st.removalDelay && !a.isLowIE && a.supportsTransition ? (a._addClassToMFP(v), setTimeout(function() {
            a._close()
          }, a.st.removalDelay)) : a._close())
        },
        _close: function() {
          o(f);
          var e = v + " " + g + " ";
          a.bgOverlay.detach(), a.wrap.detach(), a.container.empty(), a.st.mainClass && (e += a.st.mainClass + " "), a._removeClassFromMFP(e), a.fixedContentPos && (e = {
            marginRight: ""
          }, a.isIE7 ? t("body, html").css("overflow", "") : e.overflow = "", t("html").css(e)), u.off("keyup.mfp focusin.mfp"), a.ev.off(".mfp"), a.wrap.attr("class", "mfp-wrap").removeAttr("style"), a.bgOverlay.attr("class", "mfp-bg"), a.container.attr("class", "mfp-container"), !a.st.showCloseBtn || a.st.closeBtnInside && !0 !== a.currTemplate[a.currItem.type] || a.currTemplate.closeBtn && a.currTemplate.closeBtn.detach(), a.st.autoFocusLast && a._lastFocusedEl && t(a._lastFocusedEl).focus(), a.currItem = null, a.content = null, a.currTemplate = null, a.prevHeight = 0, o("AfterClose")
        },
        updateSize: function(t) {
          var e;
          a.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, a.wrap.css("height", e *= window.innerHeight), a.wH = e) : a.wH = t || b.height(), a.fixedContentPos || a.wrap.css("height", a.wH), o("Resize")
        },
        updateItemHTML: function() {
          var e = a.items[a.index],
            i = (a.contentContainer.detach(), a.content && a.content.detach(), (e = e.parsed ? e : a.parseEl(a.index)).type),
            n = (o("BeforeChange", [a.currItem ? a.currItem.type : "", i]), a.currItem = e, a.currTemplate[i] || (o("FirstMarkupParse", n = !!a.st[i] && a.st[i].markup), a.currTemplate[i] = !n || t(n)), c && c !== e.type && a.container.removeClass("mfp-" + c + "-holder"), a["get" + i.charAt(0).toUpperCase() + i.slice(1)](e, a.currTemplate[i]));
          a.appendContent(n, i), e.preloaded = !0, o("Change", e), c = e.type, a.container.prepend(a.contentContainer), o("AfterChange")
        },
        appendContent: function(t, e) {
          (a.content = t) ? a.st.showCloseBtn && a.st.closeBtnInside && !0 === a.currTemplate[e] ? a.content.find(".mfp-close").length || a.content.append(s()) : a.content = t: a.content = "", o("BeforeAppend"), a.container.addClass("mfp-" + e + "-holder"), a.contentContainer.append(a.content)
        },
        parseEl: function(e) {
          var i, n = a.items[e];
          if ((n = n.tagName ? {
              el: t(n)
            } : (i = n.type, {
              data: n,
              src: n.src
            })).el) {
            for (var s = a.types, r = 0; r < s.length; r++)
              if (n.el.hasClass("mfp-" + s[r])) {
                i = s[r];
                break
              } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
          }
          return n.type = i || a.st.type || "inline", n.index = e, n.parsed = !0, a.items[e] = n, o("ElementParse", n), a.items[e]
        },
        addGroup: function(t, e) {
          function i(i) {
            i.mfpEl = this, a._openClick(i, t, e)
          }
          var n = "click.magnificPopup";
          (e = e || {}).mainEl = t, e.items ? (e.isObj = !0, t.off(n).on(n, i)) : (e.isObj = !1, e.delegate ? t.off(n).on(n, e.delegate, i) : (e.items = t).off(n).on(n, i))
        },
        _openClick: function(e, i, n) {
          if ((void 0 !== n.midClick ? n : t.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
            var o = (void 0 !== n.disableOn ? n : t.magnificPopup.defaults).disableOn;
            if (o)
              if (t.isFunction(o)) {
                if (!o.call(a)) return !0
              } else if (b.width() < o) return !0;
            e.type && (e.preventDefault(), a.isOpen) && e.stopPropagation(), n.el = t(e.mfpEl), n.delegate && (n.items = i.find(n.delegate)), a.open(n)
          }
        },
        updateStatus: function(t, e) {
          var i;
          a.preloader && (l !== t && a.container.removeClass("mfp-s-" + l), o("UpdateStatus", i = {
            status: t,
            text: e = e || "loading" !== t ? e : a.st.tLoading
          }), t = i.status, a.preloader.html(e = i.text), a.preloader.find("a").on("click", function(t) {
            t.stopImmediatePropagation()
          }), a.container.addClass("mfp-s-" + t), l = t)
        },
        _checkIfClose: function(e) {
          if (!t(e).hasClass(y)) {
            var i = a.st.closeOnContentClick,
              n = a.st.closeOnBgClick;
            if (i && n) return !0;
            if (!a.content || t(e).hasClass("mfp-close") || a.preloader && e === a.preloader[0]) return !0;
            if (e === a.content[0] || t.contains(a.content[0], e)) {
              if (i) return !0
            } else if (n && t.contains(document, e)) return !0;
            return !1
          }
        },
        _addClassToMFP: function(t) {
          a.bgOverlay.addClass(t), a.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
          this.bgOverlay.removeClass(t), a.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
          return (a.isIE7 ? u.height() : document.body.scrollHeight) > (t || b.height())
        },
        _setFocus: function() {
          (a.st.focus ? a.content.find(a.st.focus).eq(0) : a.wrap).focus()
        },
        _onFocusIn: function(e) {
          return e.target === a.wrap[0] || t.contains(a.wrap[0], e.target) ? void 0 : (a._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
          var s;
          n.data && (i = t.extend(n.data, i)), o(m, [e, i, n]), t.each(i, function(i, n) {
            if (void 0 === n || !1 === n) return !0;
            var o, r;
            1 < (s = i.split("_")).length ? 0 < (o = e.find(".mfp-" + s[0])).length && ("replaceWith" === (r = s[1]) ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)) : e.find(".mfp-" + i).html(n)
          })
        },
        _getScrollbarSize: function() {
          var t;
          return void 0 === a.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), a.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), a.scrollbarSize
        }
      },
      modules: [],
      open: function(e, i) {
        return r(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
      },
      close: function() {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
      },
      registerModule: function(e, i) {
        i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0
      }
    }, t.fn.magnificPopup = function(e) {
      r();
      var i, n, o, s = t(this);
      return "string" == typeof e ? "open" === e ? (i = _ ? s.data("magnificPopup") : s[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, o = i.items ? i.items[n] : (o = s, (o = i.delegate ? o.find(i.delegate) : o).eq(n)), a._openClick({
        mfpEl: o
      }, s, i)) : a.isOpen && a[e].apply(a, Array.prototype.slice.call(arguments, 1)) : (e = t.extend(!0, {}, e), _ ? s.data("magnificPopup", e) : s[0].magnificPopup = e, a.addGroup(s, e)), s
    };
    var E, C, I, F = "inline";
  
    function S() {
      x && t(document.body).removeClass(x)
    }
  
    function T() {
      S(), a.req && a.req.abort()
    }
    t.magnificPopup.registerModule(F, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function() {
          a.types.push(F), i(f + "." + F, function() {
            w()
          })
        },
        getInline: function(e, i) {
          var o, s, r;
          return w(), e.src ? (o = a.st.inline, (s = t(e.src)).length ? ((r = s[0].parentNode) && r.tagName && (C || (E = o.hiddenClass, C = n(E), E = "mfp-" + E), I = s.after(C).detach().removeClass(E)), a.updateStatus("ready")) : (a.updateStatus("error", o.tNotFound), s = t("<div>")), e.inlineElement = s) : (a.updateStatus("ready"), a._parseMarkup(i, {}, e), i)
        }
      }
    });
    var x, D, O = "ajax";
  
    function A(t) {
      var e;
      a.currTemplate[P] && (e = a.currTemplate[P].find("iframe")).length && (t || (e[0].src = "//about:blank"), a.isIE8) && e.css("display", t ? "block" : "none")
    }
  
    function L(t) {
      var e = a.items.length;
      return e - 1 < t ? t - e : t < 0 ? e + t : t
    }
  
    function z(t, e, i) {
      return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    }
    t.magnificPopup.registerModule(O, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function() {
          a.types.push(O), x = a.st.ajax.cursor, i(f + "." + O, T), i("BeforeChange.ajax", T)
        },
        getAjax: function(e) {
          x && t(document.body).addClass(x), a.updateStatus("loading");
          var i = t.extend({
            url: e.src,
            success: function(i, n, s) {
              o("ParseAjax", i = {
                data: i,
                xhr: s
              }), a.appendContent(t(i.data), O), e.finished = !0, S(), a._setFocus(), setTimeout(function() {
                a.wrap.addClass(g)
              }, 16), a.updateStatus("ready"), o("AjaxContentAdded")
            },
            error: function() {
              S(), e.finished = e.loadError = !0, a.updateStatus("error", a.st.ajax.tError.replace("%url%", e.src))
            }
          }, a.st.ajax.settings);
          return a.req = t.ajax(i), ""
        }
      }
    }), t.magnificPopup.registerModule("image", {
      options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function() {
          var e = a.st.image,
            n = ".image";
          a.types.push("image"), i("Open" + n, function() {
            "image" === a.currItem.type && e.cursor && t(document.body).addClass(e.cursor)
          }), i(f + n, function() {
            e.cursor && t(document.body).removeClass(e.cursor), b.off("resize.mfp")
          }), i("Resize" + n, a.resizeImage), a.isLowIE && i("AfterChange", a.resizeImage)
        },
        resizeImage: function() {
          var t, e = a.currItem;
          e && e.img && a.st.image.verticalFit && (t = 0, a.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", a.wH - t))
        },
        _onImageHasSize: function(t) {
          t.img && (t.hasSize = !0, D && clearInterval(D), t.isCheckingImgSize = !1, o("ImageHasSize", t), t.imgHidden) && (a.content && a.content.removeClass("mfp-loading"), t.imgHidden = !1)
        },
        findImageSize: function(t) {
          var e = 0,
            i = t.img[0];
          ! function n(o) {
            D && clearInterval(D), D = setInterval(function() {
              return 0 < i.naturalWidth ? void a._onImageHasSize(t) : (200 < e && clearInterval(D), void(3 == ++e ? n(10) : 40 === e ? n(50) : 100 === e && n(500)))
            }, o)
          }(1)
        },
        getImage: function(e, i) {
          function n() {
            e && (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("error", l.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
          }
          var s, r = 0,
            l = a.st.image,
            u = i.find(".mfp-img");
          return u.length && ((s = document.createElement("img")).className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = t(s).on("load.mfploader", function t() {
            e && (e.img[0].complete ? (e.img.off(".mfploader"), e === a.currItem && (a._onImageHasSize(e), a.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, o("ImageLoadComplete")) : ++r < 200 ? setTimeout(t, 100) : n())
          }).on("error.mfploader", n), s.src = e.src, u.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)), a._parseMarkup(i, {
            title: (e => {
              if (e.data && void 0 !== e.data.title) return e.data.title;
              var i = a.st.image.titleSrc;
              if (i) {
                if (t.isFunction(i)) return i.call(a, e);
                if (e.el) return e.el.attr(i) || ""
              }
              return ""
            })(e),
            img_replaceWith: e.img
          }, e), a.resizeImage(), e.hasSize ? (D && clearInterval(D), e.loadError ? (i.addClass("mfp-loading"), a.updateStatus("error", l.tError.replace("%url%", e.src))) : (i.removeClass("mfp-loading"), a.updateStatus("ready"))) : (a.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, i.addClass("mfp-loading"), a.findImageSize(e))), i
        }
      }
    }), t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function(t) {
          return t.is("img") ? t : t.find("img")
        }
      },
      proto: {
        initZoom: function() {
          var t, e, n, s, r, l, u = a.st.zoom;
          u.enabled && a.supportsTransition && (s = u.duration, r = function(t) {
            t = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
            var e = "all " + u.duration / 1e3 + "s " + u.easing,
              i = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              n = "transition";
            return i["-webkit-" + n] = i["-moz-" + n] = i["-o-" + n] = i[n] = e, t.css(i), t
          }, l = function() {
            a.content.css("visibility", "visible")
          }, i("BuildControls.zoom", function() {
            a._allowZoom() && (clearTimeout(e), a.content.css("visibility", "hidden"), (t = a._getItemToZoom()) ? ((n = r(t)).css(a._getOffset()), a.wrap.append(n), e = setTimeout(function() {
              n.css(a._getOffset(!0)), e = setTimeout(function() {
                l(), setTimeout(function() {
                  n.remove(), t = n = null, o("ZoomAnimationEnded")
                }, 16)
              }, s)
            }, 16)) : l())
          }), i(p + ".zoom", function() {
            if (a._allowZoom()) {
              if (clearTimeout(e), a.st.removalDelay = s, !t) {
                if (!(t = a._getItemToZoom())) return;
                n = r(t)
              }
              n.css(a._getOffset(!0)), a.wrap.append(n), a.content.css("visibility", "hidden"), setTimeout(function() {
                n.css(a._getOffset())
              }, 16)
            }
          }), i(f + ".zoom", function() {
            a._allowZoom() && (l(), n && n.remove(), t = null)
          }))
        },
        _allowZoom: function() {
          return "image" === a.currItem.type
        },
        _getItemToZoom: function() {
          return !!a.currItem.hasSize && a.currItem.img
        },
        _getOffset: function(e) {
          var i = (e = e ? a.currItem.img : a.st.zoom.opener(a.currItem.el || a.currItem)).offset(),
            n = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);
          i.top -= t(window).scrollTop() - n, e = {
            width: e.width(),
            height: (_ ? e.innerHeight() : e[0].offsetHeight) - o - n
          };
          return (k = void 0 === k ? void 0 !== document.createElement("p").style.MozTransform : k) ? e["-moz-transform"] = e.transform = "translate(" + i.left + "px," + i.top + "px)" : (e.left = i.left, e.top = i.top), e
        }
      }
    });
    var k, P = "iframe",
      N = (t.magnificPopup.registerModule(P, {
        options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1"
            },
            gmaps: {
              index: "//maps.google.",
              src: "%id%&output=embed"
            }
          }
        },
        proto: {
          initIframe: function() {
            a.types.push(P), i("BeforeChange", function(t, e, i) {
              e !== i && (e === P ? A() : i === P && A(!0))
            }), i(f + "." + P, function() {
              A()
            })
          },
          getIframe: function(e, i) {
            var n = e.src,
              o = a.st.iframe,
              s = (t.each(o.patterns, function() {
                return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
              }), {});
            return o.srcAction && (s[o.srcAction] = n), a._parseMarkup(i, s, e), a.updateStatus("ready"), i
          }
        }
      }), t.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%"
        },
        proto: {
          initGallery: function() {
            var e = a.st.gallery,
              n = ".mfp-gallery";
            return a.direction = !0, !(!e || !e.enabled) && (h += " mfp-gallery", i("Open" + n, function() {
              e.navigateByImgClick && a.wrap.on("click" + n, ".mfp-img", function() {
                return 1 < a.items.length ? (a.next(), !1) : void 0
              }), u.on("keydown" + n, function(t) {
                37 === t.keyCode ? a.prev() : 39 === t.keyCode && a.next()
              })
            }), i("UpdateStatus" + n, function(t, e) {
              e.text && (e.text = z(e.text, a.currItem.index, a.items.length))
            }), i(m + n, function(t, i, n, o) {
              var s = a.items.length;
              n.counter = 1 < s ? z(e.tCounter, o.index, s) : ""
            }), i("BuildControls" + n, function() {
              var i, n;
              1 < a.items.length && e.arrows && !a.arrowLeft && (n = e.arrowMarkup, i = a.arrowLeft = t(n.replace(/%title%/gi, e.tPrev).replace(/%dir%/gi, "left")).addClass(y), n = a.arrowRight = t(n.replace(/%title%/gi, e.tNext).replace(/%dir%/gi, "right")).addClass(y), i.click(function() {
                a.prev()
              }), n.click(function() {
                a.next()
              }), a.container.append(i.add(n)))
            }), i("Change" + n, function() {
              a._preloadTimeout && clearTimeout(a._preloadTimeout), a._preloadTimeout = setTimeout(function() {
                a.preloadNearbyImages(), a._preloadTimeout = null
              }, 16)
            }), void i(f + n, function() {
              u.off(n), a.wrap.off("click" + n), a.arrowRight = a.arrowLeft = null
            }))
          },
          next: function() {
            a.direction = !0, a.index = L(a.index + 1), a.updateItemHTML()
          },
          prev: function() {
            a.direction = !1, a.index = L(a.index - 1), a.updateItemHTML()
          },
          goTo: function(t) {
            a.direction = t >= a.index, a.index = t, a.updateItemHTML()
          },
          preloadNearbyImages: function() {
            for (var t = a.st.gallery.preload, e = Math.min(t[0], a.items.length), i = Math.min(t[1], a.items.length), n = 1; n <= (a.direction ? i : e); n++) a._preloadItem(a.index + n);
            for (n = 1; n <= (a.direction ? e : i); n++) a._preloadItem(a.index - n)
          },
          _preloadItem: function(e) {
            var i;
            e = L(e), a.items[e].preloaded || (o("LazyLoad", i = (i = a.items[e]).parsed ? i : a.parseEl(e)), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
              i.hasSize = !0
            }).on("error.mfploader", function() {
              i.hasSize = !0, i.loadError = !0, o("LazyLoadError", i)
            }).attr("src", i.src)), i.preloaded = !0)
          }
        }
      }), "retina");
    t.magnificPopup.registerModule(N, {
      options: {
        replaceSrc: function(t) {
          return t.src.replace(/\.\w+$/, function(t) {
            return "@2x" + t
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          var t, e;
          1 < window.devicePixelRatio && (t = a.st.retina, e = t.ratio, 1 < (e = isNaN(e) ? e() : e)) && (i("ImageHasSize." + N, function(t, i) {
            i.img.css({
              "max-width": i.img[0].naturalWidth / e,
              width: "100%"
            })
          }), i("ElementParse." + N, function(i, n) {
            n.src = t.replaceSrc(n, e)
          }))
        }
      }
    }), r()
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
  })(window, function(t, e) {
    function i(i, s, a) {
      (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
      }), a.fn[i] = function(t) {
        var e, n, l, u, c, h;
        return "string" == typeof t ? (e = o.call(arguments, 1), l = e, c = "$()." + i + '("' + (n = t) + '")', this.each(function(t, e) {
          var o;
          (e = a.data(e, i)) ? (o = e[n]) && "_" != n.charAt(0) ? (o = o.apply(e, l), u = void 0 === u ? o : u) : r(c + " is not a valid method"): r(i + " not initialized. Cannot call methods, i.e. " + c)
        }), void 0 !== u ? u : this) : (h = t, this.each(function(t, e) {
          var n = a.data(e, i);
          n ? (n.option(h), n._init()) : (n = new s(e, h), a.data(e, i, n))
        }), this)
      }, n(a))
    }
  
    function n(t) {
      t && !t.bridget && (t.bridget = i)
    }
    var o = Array.prototype.slice,
      s = t.console,
      r = void 0 === s ? function() {} : function(t) {
        s.error(t)
      };
    return n(e || t.jQuery), i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
      var i;
      if (t && e) return -1 == (i = (i = this._events = this._events || {})[t] = i[t] || []).indexOf(e) && i.push(e), this
    }, e.once = function(t, e) {
      var i;
      if (t && e) return this.on(t, e), ((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0, this
    }, e.off = function(t, e) {
      if ((t = this._events && this._events[t]) && t.length) return -1 != (e = t.indexOf(e)) && t.splice(e, 1), this
    }, e.emitEvent = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        e = e || [];
        for (var s = this._onceEvents && this._onceEvents[t]; o;) {
          var r = s && s[o];
          r && (this.off(t, o), delete s[o]), o.apply(this, e), o = i[n += r ? 0 : 1]
        }
        return this
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
  })(window, function() {
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e
    }
  
    function e(t) {
      return (t = getComputedStyle(t)) || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }
    var i, n = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t)
      },
      o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      s = o.length,
      r = !1;
    return function n(a) {
      if (r || (r = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (g = document.body || document.documentElement).appendChild(v), d = e(v), n.isBoxSizeOuter = i = 200 == t(d.width), g.removeChild(v)), (a = "string" == typeof a ? document.querySelector(a) : a) && "object" == typeof a && a.nodeType) {
        var l = e(a);
        if ("none" == l.display) {
          for (var u = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
            }, c = 0; c < s; c++) u[o[c]] = 0;
          return u
        }
        var h = {};
        h.width = a.offsetWidth, h.height = a.offsetHeight;
        for (var d = h.isBorderBox = "border-box" == l.boxSizing, f = 0; f < s; f++) {
          var p = o[f],
            m = l[p];
          m = parseFloat(m);
          h[p] = isNaN(m) ? 0 : m
        }
        var g = h.paddingLeft + h.paddingRight,
          v = h.paddingTop + h.paddingBottom,
          y = (a = h.marginLeft + h.marginRight, h.marginTop + h.marginBottom),
          _ = h.borderLeftWidth + h.borderRightWidth,
          b = h.borderTopWidth + h.borderBottomWidth,
          w = (d = d && i, t(l.width));
        return !1 !== w && (h.width = w + (d ? 0 : g + _)), !1 !== (w = t(l.height)) && (h.height = w + (d ? 0 : v + b)), h.innerWidth = h.width - (g + _), h.innerHeight = h.height - (v + b), h.outerWidth = h.width + a, h.outerHeight = h.height + y, h
      }
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
  })(window, function() {
    var t = (() => {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n
      }
    })();
    return function(e, i) {
      return e[t](i)
    }
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
  })(window, function(t, e) {
    var i = {
        extend: function(t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        modulo: function(t, e) {
          return (t % e + e) % e
        },
        makeArray: function(t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e
        },
        removeFrom: function(t, e) {
          -1 != (e = t.indexOf(e)) && t.splice(e, 1)
        },
        getParent: function(t, i) {
          for (; t.parentNode && t != document.body;)
            if (e(t = t.parentNode, i)) return t
        },
        getQueryElement: function(t) {
          return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t)
        },
        filterFindElements: function(t, n) {
          t = i.makeArray(t);
          var o = [];
          return t.forEach(function(t) {
            if (t instanceof HTMLElement)
              if (n) {
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
              } else o.push(t)
          }), o
        },
        debounceMethod: function(t, e, i) {
          var n = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function() {
            var t = this[o],
              e = (t && clearTimeout(t), arguments),
              s = this;
            this[o] = setTimeout(function() {
              n.apply(s, e), delete s[o]
            }, i || 100)
          }
        },
        docReady: function(t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        },
        toDashed: function(t) {
          return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
          }).toLowerCase()
        }
      },
      n = t.console;
    return i.htmlInit = function(e, o) {
      i.docReady(function() {
        var s = "data-" + (a = i.toDashed(o)),
          r = document.querySelectorAll("[" + s + "]"),
          a = document.querySelectorAll(".js-" + a),
          l = (r = i.makeArray(r).concat(i.makeArray(a)), s + "-options"),
          u = t.jQuery;
        r.forEach(function(t) {
          var i, r = t.getAttribute(s) || t.getAttribute(l);
          try {
            i = r && JSON.parse(r)
          } catch (i) {
            return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + i))
          }
          r = new e(t, i), u && u.data(t, o, r)
        })
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
  })(window, function(t, e) {
    function i(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }
    var n = "string" == typeof(o = document.documentElement.style).transition ? "transition" : "WebkitTransition",
      o = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      } [n],
      r = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
      },
      a = ((t = i.prototype = Object.create(t.prototype)).constructor = i, t._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        })
      }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, t.getSize = function() {
        this.size = e(this.element)
      }, t.css = function(t) {
        var e, i = this.element.style;
        for (e in t) i[r[e] || e] = t[e]
      }, t.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = (t = t[i ? "top" : "bottom"], this.layout.size);
        n = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10), t = -1 != t.indexOf("%") ? parseFloat(t) / 100 * o.height : parseInt(t, 10), n = isNaN(n) ? 0 : n, t = isNaN(t) ? 0 : t;
        n -= e ? o.paddingLeft : o.paddingRight, t -= i ? o.paddingTop : o.paddingBottom, this.position.x = n, this.position.y = t
      }, t.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "right" : "left",
          s = this.position.x + t[i ? "paddingLeft" : "paddingRight"];
        e[i ? "left" : "right"] = this.getXValue(s), e[o] = "", i = n ? "paddingTop" : "paddingBottom", s = n ? "bottom" : "top", o = this.position.y + t[i];
        e[n ? "top" : "bottom"] = this.getYValue(o), e[s] = "", this.css(e), this.emitEvent("layout", [this])
      }, t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
      }, t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
      }, t._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10);
        o = o === this.position.x && s === this.position.y;
        this.setPosition(t, e), o && !this.isTransitioning ? this.layoutPosition() : ((s = {}).transform = this.getTranslate(t - i, e - n), this.transition({
          to: s,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        }))
      }, t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (this.layout._getOption("originTop") ? e : -e) + "px, 0)"
      }, t.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
      }, t.moveTo = t._transitionTo, t.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
      }, t._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
      }, t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e, i = this._transn;
          for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
      }, "opacity," + o.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
      })),
      l = (t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = this.layout.options.transitionDuration, this.css({
          transitionProperty: a,
          transitionDuration: "number" == typeof t ? t + "ms" : t,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(s, this, !1))
      }, t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
      }, t.onotransitionend = function(t) {
        this.ontransitionend(t)
      }, {
        "-webkit-transform": "transform"
      }),
      u = (t.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn, i = l[t.propertyName] || t.propertyName, delete e.ingProperties[i], (() => {
          for (var t in e.ingProperties) return;
          return 1
        })() && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
      }, t.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
      }, t._removeStyles = function(t) {
        var e, i = {};
        for (e in t) i[e] = "";
        this.css(i)
      }, {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      });
    return t.removeTransitionStyles = function() {
      this.css(u)
    }, t.stagger = function(t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, t.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, t.remove = function() {
      return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
        this.removeElem()
      }), void this.hide()) : void this.removeElem()
    }, t.reveal = function() {
      delete this.isHidden, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: t.hiddenStyle,
        to: t.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
    }, t.getHideRevealTransitionEndProperty = function(t) {
      if ((t = this.layout.options[t]).opacity) return "opacity";
      for (var e in t) return e
    }, t.hide = function() {
      this.isHidden = !0, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: t.visibleStyle,
        to: t.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, t.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, t.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
      return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
  })(window, function(t, e, i, n, o) {
    function s(t, e) {
      var i = n.getQueryElement(t);
      i ? (this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), e = ++c, this.element.outlayerGUID = e, (h[e] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
  
    function r(t) {
      function e() {
        t.apply(this, arguments)
      }
      return (e.prototype = Object.create(t.prototype)).constructor = e
    }
  
    function a() {}
    var l = t.console,
      u = t.jQuery,
      c = 0,
      h = {},
      d = (s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      }, s.prototype),
      f = (n.extend(d, e.prototype), d.option = function(t) {
        n.extend(this.options, t)
      }, d._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
      }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, d._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
      }, d.reloadItems = function() {
        this.items = this._itemize(this.element.children)
      }, d._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
          var s = new i(e[o], this);
          n.push(s)
        }
        return n
      }, d._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
      }, d.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element
        })
      }, d.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
      }, d._init = d.layout, d._resetLayout = function() {
        this.getSize()
      }, d.getSize = function() {
        this.size = i(this.element)
      }, d._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
      }, d.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
      }, d._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored
        })
      }, d._layoutItems = function(t, e) {
        var i;
        this._emitCompleteOnItems("layout", t), t && t.length && (i = [], t.forEach(function(t) {
          var n = this._getItemLayoutPosition(t);
          n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
        }, this), this._processLayoutQueue(i))
      }, d._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        }
      }, d._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
      }, d.updateStagger = function() {
        var t, e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = "number" == typeof e ? e : (t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1], e = e && e[2], t.length ? parseFloat(t) * (f[e] || 1) : 0), this.stagger)
      }, d._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
      }, d._postLayout = function() {
        this.resizeContainer()
      }, d.resizeContainer = function() {
        var t;
        this._getOption("resizeContainer") && (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
      }, d._getContainerSize = a, d._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
      }, d._emitCompleteOnItems = function(t, e) {
        function i() {
          s.dispatchEvent(t + "Complete", null, [e])
        }
  
        function n() {
          ++o == r && i()
        }
        var o, s = this,
          r = e.length;
        e && r ? (o = 0, e.forEach(function(e) {
          e.once(t, n)
        })) : i()
      }, d.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n), u && (this.$element = this.$element || u(this.element), e ? ((n = u.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
      }, d.ignore = function(t) {
        (t = this.getItem(t)) && (t.isIgnored = !0)
      }, d.unignore = function(t) {
        (t = this.getItem(t)) && delete t.isIgnored
      }, d.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
      }, d.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
          n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
      }, d._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
      }, d._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
      }, d._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
      }, d._manageStamp = a, d._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect;
        t = i(t);
        return {
          left: e.left - n.left - t.marginLeft,
          top: e.top - n.top - t.marginTop,
          right: n.right - e.right - t.marginRight,
          bottom: n.bottom - e.bottom - t.marginBottom
        }
      }, d.handleEvent = n.handleEvent, d.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
      }, d.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
      }, d.onresize = function() {
        this.resize()
      }, n.debounceMethod(s, "onresize", 100), d.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, d.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
      }, d.addItems = function(t) {
        return (t = this._itemize(t)).length && (this.items = this.items.concat(t)), t
      }, d.appended = function(t) {
        (t = this.addItems(t)).length && (this.layoutItems(t, !0), this.reveal(t))
      }, d.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (e = this.items.slice(0), this.items = t.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e))
      }, d.reveal = function(t) {
        var e;
        this._emitCompleteOnItems("reveal", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.reveal()
        }))
      }, d.hide = function(t) {
        var e;
        this._emitCompleteOnItems("hide", t), t && t.length && (e = this.updateStagger(), t.forEach(function(t, i) {
          t.stagger(i * e), t.hide()
        }))
      }, d.revealItemElements = function(t) {
        t = this.getItems(t), this.reveal(t)
      }, d.hideItemElements = function(t) {
        t = this.getItems(t), this.hide(t)
      }, d.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i
        }
      }, d.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
          (t = this.getItem(t)) && e.push(t)
        }, this), e
      }, d.remove = function(t) {
        t = this.getItems(t), this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(t) {
          t.remove(), n.removeFrom(this.items, t)
        }, this)
      }, d.destroy = function() {
        (t = this.element.style).height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
          t.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
      }, s.data = function(t) {
        return (t = (t = n.getQueryElement(t)) && t.outlayerGUID) && h[t]
      }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
      }, {
        ms: 1,
        s: 1e3
      });
    return s.Item = o, s
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
  })(window, function(t) {
    function e() {
      t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create,
      o = (i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
      }, i.updateSortData = function() {
        if (!this.isIgnored) {
          this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
          var t, e = this.layout.options.getSortData,
            i = this.layout._sorters;
          for (t in e) {
            var n = i[t];
            this.sortData[t] = n(this.element, this)
          }
        }
      }, i.destroy);
    return i.destroy = function() {
      o.apply(this, arguments), this.css({
        display: ""
      })
    }, e
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
  })(window, function(t, e) {
    function i(t) {
      (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
      n[t] = function() {
        return e.prototype[t].apply(this.isotope, arguments)
      }
    }), n.needsVerticalResizeLayout = function() {
      var e = t(this.isotope.element);
      return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
      t += e;
      var i, n = "outer" + e;
      this._getMeasurement(t, n), this[t] || (i = this.getFirstItemSize(), this[t] = i && i[n] || this.isotope.size["inner" + e])
    }, n.getFirstItemSize = function() {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
    }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
      function o() {
        i.apply(this, arguments)
      }
      return (o.prototype = Object.create(n)).constructor = o, e && (o.options = e), i.modes[o.prototype.namespace = t] = o
    }, i
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
  })(window, function(t, e) {
    (t = t.create("masonry")).compatOptions.fitWidth = "isFitWidth";
    var i = t.prototype;
    return i._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var t = 0; t < this.cols; t++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
      this.getContainerWidth(), this.columnWidth || (t = (t = this.items[0]) && t.element, this.columnWidth = t && e(t).outerWidth || this.containerWidth);
      var t = this.columnWidth += this.gutter,
        i = (n = this.containerWidth + this.gutter) / t,
        n = t - n % t;
      i = Math[n && n < 1 ? "round" : "floor"](i);
      this.cols = Math.max(i, 1)
    }, i.getContainerWidth = function() {
      var t = this._getOption("fitWidth") ? this.element.parentNode : this.element;
      t = e(t);
      this.containerWidth = t && t.innerWidth
    }, i._getItemLayoutPosition = function(t) {
      t.getSize();
      for (var e = t.size.outerWidth % this.columnWidth, i = (e = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), e = Math.min(e, this.cols), this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](e, t)), n = {
          x: this.columnWidth * i.col,
          y: i.y
        }, o = i.y + t.size.outerHeight, s = e + i.col, r = i.col; r < s; r++) this.colYs[r] = o;
      return n
    }, i._getTopColPosition = function(t) {
      t = this._getTopColGroup(t);
      var e = Math.min.apply(Math, t);
      return {
        col: t.indexOf(e),
        y: e
      }
    }, i._getTopColGroup = function(t) {
      if (t < 2) return this.colYs;
      for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
      return e
    }, i._getColGroupY = function(t, e) {
      return e < 2 ? this.colYs[t] : (t = this.colYs.slice(t, t + e), Math.max.apply(Math, t))
    }, i._getHorizontalColPosition = function(t, e) {
      var i = this.horizontalColIndex % this.cols;
      i = 1 < t && i + t > this.cols ? 0 : i, e = e.size.outerWidth && e.size.outerHeight;
      return this.horizontalColIndex = e ? i + t : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, t)
      }
    }, i._manageStamp = function(t) {
      var i = e(t),
        n = (t = this._getElementOffset(t), (o = this._getOption("originLeft") ? t.left : t.right) + i.outerWidth),
        o = Math.floor(o / this.columnWidth),
        s = (o = Math.max(0, o), Math.floor(n / this.columnWidth));
      s -= n % this.columnWidth ? 0 : 1;
      s = Math.min(this.cols - 1, s);
      for (var r = (this._getOption("originTop") ? t.top : t.bottom) + i.outerHeight, a = o; a <= s; a++) this.colYs[a] = Math.max(r, this.colYs[a])
    }, i._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i._getContainerFitWidth = function() {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
      return (this.cols - t) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
  })(window, function(t, e) {
    var i, n = (t = t.create("masonry")).prototype,
      o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
    for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
    var s = n.measureColumns,
      r = (n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
      }, n._getOption);
    return n._getOption = function(t) {
      return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("fitRows")).prototype;
    return e._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY), i = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
    }, e._getContainerSize = function() {
      return {
        height: this.maxY
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  })(window, function(t) {
    var e = (t = t.create("vertical", {
      horizontalAlignment: 0
    })).prototype;
    return e._resetLayout = function() {
      this.y = 0
    }, e._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
      return this.y += t.size.outerHeight, {
        x: e,
        y: i
      }
    }, e._getContainerSize = function() {
      return {
        height: this.y
      }
    }, t
  }), ((t, e) => {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
      return e(t, i, 0, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, 0, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
  })(window, function(t, e, i, n, o, s, r) {
    var a = t.jQuery,
      l = String.prototype.trim ? function(t) {
        return t.trim()
      } : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
      },
      u = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      }),
      c = (u.Item = s, u.LayoutMode = r, (t = u.prototype)._create = function() {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
      }, t.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
      }, t._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
        return this._updateItemsSortData(t), t
      }, t._initLayoutMode = function(t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
      }, t.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
      }, t._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
      }, t.arrange = function(t) {
        this.option(t), this._getIsInstant(), t = this._filter(this.items), this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
      }, t._init = t.arrange, t._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
      }, t._getIsInstant = function() {
        var t = void 0 !== (t = this._getOption("layoutInstant")) ? t : !this._isLayoutInited;
        return this._isInstant = t
      }, t._bindArrangeComplete = function() {
        function t() {
          e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
          e = !0, t()
        }), this.once("hideComplete", function() {
          i = !0, t()
        }), this.once("revealComplete", function() {
          n = !0, t()
        })
      }, t._filter = function(t) {
        for (var e = this.options.filter, i = [], n = [], o = [], s = this._getFilterTest(e || "*"), r = 0; r < t.length; r++) {
          var a, l = t[r];
          l.isIgnored || ((a = s(l)) && i.push(l), a && l.isHidden ? n.push(l) : a || l.isHidden || o.push(l))
        }
        return {
          matches: i,
          needReveal: n,
          needHide: o
        }
      }, t._getFilterTest = function(t) {
        return a && this.options.isJQueryFiltering ? function(e) {
          return a(e.element).is(t)
        } : "function" == typeof t ? function(e) {
          return t(e.element)
        } : function(e) {
          return n(e.element, t)
        }
      }, t.updateSortData = function(t) {
        t = t ? (t = o.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(t)
      }, t._getSorters = function() {
        var t, e = this.options.getSortData;
        for (t in e) {
          var i = e[t];
          this._sorters[t] = c(i)
        }
      }, t._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
      }, function(t) {
        var e, i, n, o, s, r;
        return "string" != typeof t ? t : (i = (i = (e = (t = l(t).split(" "))[0]).match(/^\[(.+)\]$/)) && i[1], r = e, n = (s = i) ? function(t) {
          return t.getAttribute(s)
        } : function(t) {
          return (t = t.querySelector(r)) && t.textContent
        }, (o = u.sortDataParsers[t[1]]) ? function(t) {
          return t && o(n(t))
        } : function(t) {
          return t && n(t)
        })
      }),
      h = (u.sortDataParsers = {
        parseInt: function(t) {
          return parseInt(t, 10)
        },
        parseFloat: function(t) {
          return parseFloat(t)
        }
      }, t._sort = function() {
        var t, e, i;
        this.options.sortBy && (t = o.makeArray(this.options.sortBy), this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)), e = this.sortHistory, i = this.options.sortAscending, this.filteredItems.sort(function(t, n) {
          for (var o = 0; o < e.length; o++) {
            var s = e[o],
              r = t.sortData[s],
              a = n.sortData[s];
            if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== i[s] ? i[s] : i) ? 1 : -1)
          }
          return 0
        }))
      }, t._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0
      }, t._mode = function() {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (e) return e.options = this.options[t], e;
        throw new Error("No layout mode: " + t)
      }, t._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, t._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
      }, t._manageStamp = function(t) {
        this._mode()._manageStamp(t)
      }, t._getContainerSize = function() {
        return this._mode()._getContainerSize()
      }, t.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
      }, t.appended = function(t) {
        (t = this.addItems(t)).length && (t = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(t))
      }, t.prepended = function(t) {
        var e;
        (t = this._itemize(t)).length && (this._resetLayout(), this._manageStamps(), e = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = e.concat(this.filteredItems), this.items = t.concat(this.items))
      }, t._filterRevealAdded = function(t) {
        return t = this._filter(t), this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
      }, t.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var i, n = e.length, o = 0; o < n; o++) i = e[o], this.element.appendChild(i.element);
          for (t = this._filter(e).matches, o = 0; o < n; o++) e[o].isLayoutInstant = !0;
          for (this.arrange(), o = 0; o < n; o++) delete e[o].isLayoutInstant;
          this.reveal(t)
        }
      }, t.remove);
    return t.remove = function(t) {
      t = o.makeArray(t);
      var e = this.getItems(t);
      h.call(this, t);
      for (var i = e && e.length, n = 0; i && n < i; n++) {
        var s = e[n];
        o.removeFrom(this.filteredItems, s)
      }
    }, t.shuffle = function() {
      for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
    }, t._noTransition = function(t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0, t = t.apply(this, e);
      return this.options.transitionDuration = i, t
    }, t.getFilteredItemElements = function() {
      return this.filteredItems.map(function(t) {
        return t.element
      })
    }, u
  }), (t => {
    t("select").niceSelect(), t(window).on("load", function() {
      var e;
      t(".portfolio-filter ul li").on("click", function() {
        t(".portfolio-filter ul li").removeClass("active"), t(this).addClass("active");
        var i = t(this).attr("data-filter");
        e.isotope({
          filter: i
        })
      }), document.getElementById("portfolio") && (e = t(".portfolio-grid").isotope({
        itemSelector: ".all",
        percentPosition: !0,
        masonry: {
          columnWidth: ".all"
        }
      }))
    })
  })(jQuery), ((t, e) => {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
  })(this, function() {
    function t(t) {
      return t && "[object Function]" === {}.toString.call(t)
    }
  
    function e(t, e) {
      return 1 !== t.nodeType ? [] : (t = window.getComputedStyle(t, null), e ? t[e] : t)
    }
  
    function i(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
  
    function n(t) {
      var o, s;
      return t && -1 === ["HTML", "BODY", "#document"].indexOf(t.nodeName) ? (s = (o = e(t)).overflow, /(auto|scroll)/.test(s + o.overflowY + o.overflowX) ? t : n(i(t))) : window.document.body
    }
  
    function o(t) {
      var i = (t = t && t.offsetParent) && t.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === e(t, "position") ? o(t) : t : window.document.documentElement
    }
  
    function s(t) {
      return null === t.parentNode ? t : s(t.parentNode)
    }
  
    function r(t, e) {
      var i, n, a;
      return t && t.nodeType && e && e.nodeType ? (n = (a = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) ? t : e, a = a ? e : t, (i = document.createRange()).setStart(n, 0), i.setEnd(a, 0), t !== (i = i.commonAncestorContainer) && e !== i || n.contains(a) ? "BODY" === (a = (n = i).nodeName) || "HTML" !== a && o(n.firstElementChild) !== n ? o(i) : i : (a = s(t)).host ? r(a.host, e) : r(t, s(e).host)) : window.document.documentElement
    }
  
    function a(t, e) {
      e = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft";
      var i = t.nodeName;
      return ("BODY" === i || "HTML" === i ? (i = window.document.documentElement, window.document.scrollingElement || i) : t)[e]
    }
  
    function l(t, e) {
      var i = "Left" == (e = "x" === e ? "Left" : "Top") ? "Right" : "Bottom";
      return +t["border" + e + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0]
    }
  
    function u(t, e, i, n) {
      return O(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], H() ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }
  
    function c() {
      var t = window.document.body,
        e = window.document.documentElement,
        i = H() && window.getComputedStyle(e);
      return {
        height: u("Height", t, e, i),
        width: u("Width", t, e, i)
      }
    }
  
    function h(t) {
      return W({}, t, {
        right: t.left + t.width,
        bottom: t.top + t.height
      })
    }
  
    function d(t) {
      var i = {};
      if (H()) try {
        i = t.getBoundingClientRect();
        var n = a(t, "top"),
          o = a(t, "left");
        i.top += n, i.left += o, i.bottom += n, i.right += o
      } catch (t) {} else i = t.getBoundingClientRect();
      var s;
      n = {
        left: i.left,
        top: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top
      }, i = (o = "HTML" === t.nodeName ? c() : {}).width || t.clientWidth || n.right - n.left, o = o.height || t.clientHeight || n.bottom - n.top, i = t.offsetWidth - i, o = t.offsetHeight - o;
      return (i || o) && (i -= l(s = e(t), "x"), o -= l(s, "y"), n.width -= i, n.height -= o), h(n)
    }
  
    function f(t, i) {
      var o = H(),
        s = "HTML" === i.nodeName,
        r = d(t),
        l = d(i),
        u = (t = n(t), e(i)),
        c = +u.borderTopWidth.split("px")[0],
        f = +u.borderLeftWidth.split("px")[0];
      return (l = h({
        top: r.top - l.top - c,
        left: r.left - l.left - f,
        width: r.width,
        height: r.height
      })).marginTop = 0, l.marginLeft = 0, !o && s && (r = +u.marginTop.split("px")[0], s = +u.marginLeft.split("px")[0], l.top -= c - r, l.bottom -= c - r, l.left -= f - s, l.right -= f - s, l.marginTop = r, l.marginLeft = s), (o ? i.contains(t) : i === t && "BODY" !== t.nodeName) ? function(t, e, i) {
        i = 2 < arguments.length && void 0 !== i && i;
        var n = a(e, "top");
        e = a(e, "left"), i = i ? -1 : 1;
        return t.top += n * i, t.bottom += n * i, t.left += e * i, t.right += e * i, t
      }(l, i) : l
    }
  
    function p(t, o, s, l) {
      var u, d, p, m, g, v, y = {
        top: 0,
        left: 0
      };
      o = r(t, o);
      return "viewport" === l ? (d = f(d = o, p = window.document.documentElement), m = O(p.clientWidth, window.innerWidth || 0), g = O(p.clientHeight, window.innerHeight || 0), v = a(p), p = a(p, "left"), y = h({
        top: v - d.top + d.marginTop,
        left: p - d.left + d.marginLeft,
        width: m,
        height: g
      })) : ("scrollParent" === l ? "BODY" === (u = n(i(t))).nodeName && (u = window.document.documentElement) : u = "window" === l ? window.document.documentElement : l, v = f(u, o), "HTML" !== u.nodeName || function t(n) {
        var o = n.nodeName;
        return "BODY" !== o && "HTML" !== o && ("fixed" === e(n, "position") || t(i(n)))
      }(o) ? y = v : (d = (p = c()).height, m = p.width, y.top += v.top - v.marginTop, y.bottom = d + v.top, y.left += v.left - v.marginLeft, y.right = m + v.left)), y.left += s, y.top += s, y.right -= s, y.bottom -= s, y
    }
  
    function m(t, e, i, n, o, s) {
      var r;
      s = 5 < arguments.length && void 0 !== s ? s : 0;
      return -1 === t.indexOf("auto") ? t : (n = p(i, n, s, o), r = {
        top: {
          width: n.width,
          height: e.top - n.top
        },
        right: {
          width: n.right - e.right,
          height: n.height
        },
        bottom: {
          width: n.width,
          height: n.bottom - e.bottom
        },
        left: {
          width: e.left - n.left,
          height: n.height
        }
      }, (0 < (o = (s = Object.keys(r).map(function(t) {
        return W({
          key: t
        }, r[t], {
          area: (t = r[t]).width * t.height
        })
      }).sort(function(t, e) {
        return e.area - t.area
      })).filter(function(t) {
        return t.width >= i.clientWidth && t.height >= i.clientHeight
      })).length ? o : s)[0].key + ((e = t.split("-")[1]) ? "-" + e : ""))
    }
  
    function g(t, e, i) {
      return f(i, r(e, i))
    }
  
    function v(t) {
      var e = window.getComputedStyle(t),
        i = parseFloat(e.marginTop) + parseFloat(e.marginBottom);
      e = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return {
        width: t.offsetWidth + e,
        height: t.offsetHeight + i
      }
    }
  
    function y(t) {
      var e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return t.replace(/left|right|bottom|top/g, function(t) {
        return e[t]
      })
    }
  
    function _(t, e, i) {
      i = i.split("-")[0];
      var n = {
          width: (t = v(t)).width,
          height: t.height
        },
        o = (a = -1 !== ["right", "left"].indexOf(i)) ? "top" : "left",
        s = a ? "left" : "top",
        r = a ? "height" : "width",
        a = a ? "width" : "height";
      return n[o] = e[o] + e[r] / 2 - t[r] / 2, n[s] = i === s ? e[s] - t[a] : e[y(s)], n
    }
  
    function b(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
  
    function w(e, i, n) {
      var o;
      return (void 0 === n ? e : e.slice(0, (o = n, Array.prototype.findIndex ? e.findIndex(function(t) {
        return t.name === o
      }) : (n = b(e, function(t) {
        return t.name === o
      }), e.indexOf(n))))).forEach(function(e) {
        e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = e["function"] || e.fn;
        e.enabled && t(n) && (i.offsets.popper = h(i.offsets.popper), i.offsets.reference = h(i.offsets.reference), i = n(i, e))
      }), i
    }
  
    function E(t, e) {
      return t.some(function(t) {
        var i = t.name;
        return t.enabled && i === e
      })
    }
  
    function C(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length - 1; n++) {
        var o = (o = e[n]) ? "" + o + i : t;
        if (void 0 !== window.document.body.style[o]) return o
      }
      return null
    }
  
    function I(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
  
    function F(t, e) {
      Object.keys(e).forEach(function(i) {
        var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && I(e[i]) && (n = "px"), t.style[i] = e[i] + n
      })
    }
  
    function S(t, e, i) {
      var n, o = b(t, function(t) {
        return t.name === e
      });
      return (t = !!o && t.some(function(t) {
        return t.name === i && t.enabled && t.order < o.order
      })) || (n = "`" + e + "`", console.warn("`" + i + "` modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")), t
    }
  
    function T(t, e) {
      return e = 1 < arguments.length && void 0 !== e && e, t = q.indexOf(t), t = q.slice(t + 1).concat(q.slice(0, t)), e ? t.reverse() : t
    }
    for (var x = Math.min, D = Math.floor, O = Math.max, A = ["native code", "[object MutationObserverConstructor]"], L = "undefined" != typeof window, z = ["Edge", "Trident", "Firefox"], k = 0, P = 0; P < z.length; P += 1)
      if (L && 0 <= navigator.userAgent.indexOf(z[P])) {
        k = 1;
        break
      }
    function N(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }
    var j, R, M = L && (R = window.MutationObserver, A.some(function(t) {
        return -1 < (R || "").toString().indexOf(t)
      })) ? function(t) {
        var e = !1,
          i = 0,
          n = document.createElement("span");
        return new MutationObserver(function() {
            t(), e = !1
          }).observe(n, {
            attributes: !0
          }),
          function() {
            e || (e = !0, n.setAttribute("x-index", i), ++i)
          }
      } : function(t) {
        var e = !1;
        return function() {
          e || (e = !0, setTimeout(function() {
            e = !1, t()
          }, k))
        }
      },
      H = function() {
        return j = null == j ? -1 !== navigator.appVersion.indexOf("MSIE 10") : j
      },
      W = (A = function(t, e, i) {
        return e && $(t.prototype, e), i && $(t, i), t
      }, Object.assign || function(t) {
        for (var e, i = 1; i < arguments.length; i++)
          for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
      }),
      B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      q = B.slice(3);
  
    function U(e, i) {
      var n = this,
        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      if (!(this instanceof U)) throw new TypeError("Cannot call a class as a function");
      this.scheduleUpdate = function() {
        return requestAnimationFrame(n.update)
      }, this.update = M(this.update.bind(this)), this.options = W({}, U.Defaults, o), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e.jquery ? e[0] : e, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(W({}, U.Defaults.modifiers, o.modifiers)).forEach(function(t) {
        n.options.modifiers[t] = W({}, U.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
        return W({
          name: t
        }, n.options.modifiers[t])
      }).sort(function(t, e) {
        return t.order - e.order
      }), this.modifiers.forEach(function(e) {
        e.enabled && t(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
      }), this.update(), (e = this.options.eventsEnabled) && this.enableEventListeners(), this.state.eventsEnabled = e
    }
  
    function $(t, e) {
      for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
    return A(U, [{
      key: "update",
      value: function() {
        return function() {
          var t;
          this.state.isDestroyed || ((t = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          }).offsets.reference = g(this.state, this.popper, this.reference), t.placement = m(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = _(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = w(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)))
        }.call(this)
      }
    }, {
      key: "destroy",
      value: function() {
        return function() {
          return this.state.isDestroyed = !0, E(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[C("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }.call(this)
      }
    }, {
      key: "enableEventListeners",
      value: function() {
        return function() {
          var t, e, i;
          this.state.eventsEnabled || (this.state = (t = this.reference, this.options, e = this.state, i = this.scheduleUpdate, e.updateBound = i, window.addEventListener("resize", e.updateBound, {
            passive: !0
          }), function t(e, i, o, s) {
            var r = "BODY" === e.nodeName;
            (e = r ? window : e).addEventListener(i, o, {
              passive: !0
            }), r || t(n(e.parentNode), i, o, s), s.push(e)
          }(i = n(t), "scroll", e.updateBound, e.scrollParents), e.scrollElement = i, e.eventsEnabled = !0, e))
        }.call(this)
      }
    }, {
      key: "disableEventListeners",
      value: function() {
        return function() {
          var t;
          this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, t = this.state, window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
          }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }.call(this)
      }
    }]), (A = U).Utils = ("undefined" == typeof window ? global : window).PopperUtils, A.placements = B, A.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(t) {
            var e, i, n, o = t.placement,
              s = o.split("-")[0];
            return (o = o.split("-")[1]) && (e = (i = t.offsets).reference, i = i.popper, n = (s = -1 !== ["bottom", "top"].indexOf(s)) ? "width" : "height", s = {
              start: N({}, s = s ? "left" : "top", e[s]),
              end: N({}, s, e[s] + e[n] - i[n])
            }, t.offsets.popper = W({}, i, s[o])), t
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function(t, e) {
            e = e.offset;
            var i, n, o, s, r, a, l = t.placement,
              u = (c = t.offsets).popper,
              c = c.reference;
            l = l.split("-")[0], e = I(+e) ? [+e, 0] : (i = e, n = u, o = c, s = [0, 0], r = -1 !== ["right", "left"].indexOf(c = l), i = (c = i.split(/(\+|\-)/).map(function(t) {
              return t.trim()
            })).indexOf(b(c, function(t) {
              return -1 !== t.search(/,|\s/)
            })), c[i] && -1 === c[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), a = /\s*,\s*|\s+/, (-1 === i ? [c] : [c.slice(0, i).concat([c[i].split(a)[0]]), [c[i].split(a)[1]].concat(c.slice(i + 1))]).map(function(t, e) {
              var i = (1 === e ? !r : r) ? "height" : "width",
                s = !1;
              return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
              }, []).map(function(t) {
                return e = i, s = n, r = o, a = +(l = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1], l = l[2], a ? 0 === l.indexOf("%") ? h("%p" === l ? s : r)[e] / 100 * a : "vh" === l || "vw" === l ? ("vh" === l ? O(document.documentElement.clientHeight, window.innerHeight || 0) : O(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a : a : t;
                var e, s, r, a, l
              })
            }).forEach(function(t, e) {
              t.forEach(function(i, n) {
                I(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1))
              })
            }), s);
            return "left" === l ? (u.top += e[0], u.left -= e[1]) : "right" === l ? (u.top += e[0], u.left += e[1]) : "top" === l ? (u.left += e[0], u.top -= e[1]) : "bottom" === l && (u.left += e[0], u.top += e[1]), t.popper = u, t
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(t, e) {
            var i = e.boundariesElement || o(t.instance.popper),
              n = (t.instance.reference === i && (i = o(i)), p(t.instance.popper, t.instance.reference, e.padding, i)),
              s = (i = (e.boundaries = n, e.priority), t.offsets.popper),
              r = {
                primary: function(t) {
                  var i = s[t];
                  return N({}, t, i = s[t] < n[t] && !e.escapeWithReference ? O(s[t], n[t]) : i)
                },
                secondary: function(t) {
                  var i = "right" === t ? "left" : "top",
                    o = s[i];
                  return N({}, i, o = s[t] > n[t] && !e.escapeWithReference ? x(s[i], n[t] - ("right" === t ? s.width : s.height)) : o)
                }
              };
            return i.forEach(function(t) {
              var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
              s = W({}, s, r[e](t))
            }), t.offsets.popper = s, t
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent"
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(t) {
            var e = (i = t.offsets).popper,
              i = i.reference,
              n = t.placement.split("-")[0],
              o = D,
              s = (n = -1 !== ["top", "bottom"].indexOf(n)) ? "right" : "bottom",
              r = n ? "left" : "top";
            n = n ? "width" : "height";
            return e[s] < o(i[r]) && (t.offsets.popper[r] = o(i[r]) - e[n]), e[r] > o(i[s]) && (t.offsets.popper[r] = o(i[s])), t
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(t, i) {
            if (S(t.instance.modifiers, "arrow", "keepTogether")) {
              if ("string" == typeof(i = i.element)) {
                if (!(i = t.instance.popper.querySelector(i))) return t
              } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
              var n = t.placement.split("-")[0],
                o = (s = t.offsets).popper,
                s = s.reference,
                r = (n = -1 !== ["left", "right"].indexOf(n)) ? "height" : "width",
                a = (c = n ? "Top" : "Left").toLowerCase(),
                l = n ? "left" : "top",
                u = (n = n ? "bottom" : "right", v(i)[r]),
                c = (n = (s[n] - u < o[a] && (t.offsets.popper[a] -= o[a] - (s[n] - u)), s[a] + u > o[n] && (t.offsets.popper[a] += s[a] + u - o[n]), s[a] + s[r] / 2 - u / 2), s = e(t.instance.popper, "margin" + c).replace("px", ""), n - h(t.offsets.popper)[a] - s);
              c = O(x(o[r] - u, c), 0);
              t.arrowElement = i, t.offsets.arrow = {}, t.offsets.arrow[a] = Math.round(c), t.offsets.arrow[l] = ""
            }
            return t
          },
          element: "[x-arrow]"
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(t, e) {
            if (!(E(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)) {
              var i = p(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                n = t.placement.split("-")[0],
                o = y(n),
                s = t.placement.split("-")[1] || "",
                r = [];
              switch (e.behavior) {
                case "flip":
                  r = [n, o];
                  break;
                case "clockwise":
                  r = T(n);
                  break;
                case "counterclockwise":
                  r = T(n, !0);
                  break;
                default:
                  r = e.behavior
              }
              r.forEach(function(a, l) {
                if (n !== a || r.length === l + 1) return t;
                n = t.placement.split("-")[0], o = y(n);
                a = t.offsets.popper;
                var u = t.offsets.reference,
                  c = D,
                  h = (u = "left" === n && c(a.right) > c(u.left) || "right" === n && c(a.left) < c(u.right) || "top" === n && c(a.bottom) > c(u.top) || "bottom" === n && c(a.top) < c(u.bottom), c(a.left) < c(i.left)),
                  d = c(a.right) > c(i.right),
                  f = c(a.top) < c(i.top),
                  p = (a = c(a.bottom) > c(i.bottom), c = "left" === n && h || "right" === n && d || "top" === n && f || "bottom" === n && a, -1 !== ["top", "bottom"].indexOf(n));
                h = !!e.flipVariations && (p && "start" === s && h || p && "end" === s && d || !p && "start" === s && f || !p && "end" === s && a);
                (u || c || h) && (t.flipped = !0, (u || c) && (n = r[l + 1]), h && (s = "end" === s ? "start" : "start" === s ? "end" : s), t.placement = n + (s ? "-" + s : ""), t.offsets.popper = W({}, t.offsets.popper, _(t.instance.popper, t.offsets.reference, t.placement)), t = w(t.instance.modifiers, t, "flip"))
              })
            }
            return t
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport"
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(t) {
            var e = t.placement,
              i = e.split("-")[0],
              n = (o = t.offsets).popper,
              o = o.reference,
              s = -1 !== ["left", "right"].indexOf(i),
              r = -1 === ["top", "left"].indexOf(i);
            return n[s ? "left" : "top"] = o[i] - (r ? n[s ? "width" : "height"] : 0), t.placement = y(e), t.offsets.popper = h(n), t
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(t) {
            if (S(t.instance.modifiers, "hide", "preventOverflow")) {
              var e = t.offsets.reference,
                i = b(t.instance.modifiers, function(t) {
                  return "preventOverflow" === t.name
                }).boundaries;
              if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                if (!0 === t.hide) return t;
                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
              } else {
                if (!1 === t.hide) return t;
                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
              }
            }
            return t
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(t, e) {
            var i = e.x,
              n = e.y,
              s = t.offsets.popper,
              r = (e = (void 0 !== (r = b(t.instance.modifiers, function(t) {
                return "applyStyle" === t.name
              }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"), void 0 === r ? e.gpuAcceleration : r), d(o(t.instance.popper))),
              a = {
                position: s.position
              },
              l = (s = {
                left: D(s.left),
                top: D(s.top),
                bottom: D(s.bottom),
                right: D(s.right)
              }, i = "bottom" === i ? "top" : "bottom", n = "right" === n ? "left" : "right", C("transform")),
              u = "bottom" == i ? -r.height + s.bottom : s.top;
            r = "right" == n ? -r.width + s.right : s.left, e && l ? (a[l] = "translate3d(" + r + "px, " + u + "px, 0)", a[i] = 0, a[n] = 0, a.willChange = "transform") : (s = "right" == n ? -1 : 1, a[i] = u * ("bottom" == i ? -1 : 1), a[n] = r * s, a.willChange = i + ", " + n), e = {
              "x-placement": t.placement
            };
            return t.attributes = W({}, e, t.attributes), t.styles = W({}, a, t.styles), t.arrowStyles = W({}, t.offsets.arrow, t.arrowStyles), t
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right"
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(t) {
            return F(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach(function(t) {
              !1 === i[t] ? e.removeAttribute(t) : e.setAttribute(t, i[t])
            }), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t;
            var e, i
          },
          onLoad: function(t, e, i, n, o) {
            var s = g(0, e, t);
            s = m(i.placement, s, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
            return e.setAttribute("x-placement", s), F(e, {
              position: "absolute"
            }), i
          },
          gpuAcceleration: void 0
        }
      }
    }, A
  }), ((t, e, i, n) => {
    function o(e, i) {
      this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
    }
    var s = "stellar",
      r = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(t) {
          t.hide()
        },
        showElement: function(t) {
          t.show()
        }
      },
      a = {
        scroll: {
          getLeft: function(t) {
            return t.scrollLeft()
          },
          setLeft: function(t, e) {
            t.scrollLeft(e)
          },
          getTop: function(t) {
            return t.scrollTop()
          },
          setTop: function(t, e) {
            t.scrollTop(e)
          }
        },
        position: {
          getLeft: function(t) {
            return -1 * parseInt(t.css("left"), 10)
          },
          getTop: function(t) {
            return -1 * parseInt(t.css("top"), 10)
          }
        },
        margin: {
          getLeft: function(t) {
            return -1 * parseInt(t.css("margin-left"), 10)
          },
          getTop: function(t) {
            return -1 * parseInt(t.css("margin-top"), 10)
          }
        },
        transform: {
          getLeft: function(t) {
            return "none" !== (t = getComputedStyle(t[0])[u]) ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
          },
          getTop: function(t) {
            return "none" !== (t = getComputedStyle(t[0])[u]) ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
          }
        }
      },
      l = {
        position: {
          setLeft: function(t, e) {
            t.css("left", e)
          },
          setTop: function(t, e) {
            t.css("top", e)
          }
        },
        transform: {
          setPosition: function(t, e, i, n, o) {
            t[0].style[u] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
          }
        }
      },
      u = (() => {
        var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          n = t("script")[0].style,
          o = "";
        for (e in n)
          if (i.test(e)) {
            o = e.match(i)[0];
            break
          } return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
          function(t) {
            return o + (0 < o.length ? t.charAt(0).toUpperCase() + t.slice(1) : t)
          }
      })()("transform"),
      c = t("<div />", {
        style: "background:#fff"
      }).css("background-position-x") !== n,
      h = c ? function(t, e, i) {
        t.css({
          "background-position-x": e,
          "background-position-y": i
        })
      } : function(t, e, i) {
        t.css("background-position", e + " " + i)
      },
      d = c ? function(t) {
        return [t.css("background-position-x"), t.css("background-position-y")]
      } : function(t) {
        return t.css("background-position").split(" ")
      },
      f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
        setTimeout(t, 1e3 / 60)
      };
    o.prototype = {
      init: function() {
        this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
          firstLoad: !0
        }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
      },
      _defineElements: function() {
        this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
      },
      _defineGetters: function() {
        var t = this,
          e = a[t.options.scrollProperty];
        this._getScrollLeft = function() {
          return e.getLeft(t.$scrollElement)
        }, this._getScrollTop = function() {
          return e.getTop(t.$scrollElement)
        }
      },
      _defineSetters: function() {
        var e = this,
          i = a[e.options.scrollProperty],
          n = l[e.options.positionProperty],
          o = i.setLeft,
          s = i.setTop;
        this._setScrollLeft = "function" == typeof o ? function(t) {
          o(e.$scrollElement, t)
        } : t.noop, this._setScrollTop = "function" == typeof s ? function(t) {
          s(e.$scrollElement, t)
        } : t.noop, this._setPosition = n.setPosition || function(t, i, o, s, r) {
          e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, s, r)
        }
      },
      _handleWindowLoadAndResize: function() {
        var i = this,
          n = t(e);
        i.options.responsive && n.bind("load." + this.name, function() {
          i.refresh()
        }), n.bind("resize." + this.name, function() {
          i._detectViewport(), i.options.responsive && i.refresh()
        })
      },
      refresh: function(i) {
        var n = this,
          o = n._getScrollLeft(),
          s = n._getScrollTop();
        i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
          var t = n._getScrollLeft(),
            e = n._getScrollTop();
          n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
        }), this._setScrollLeft(o), this._setScrollTop(s)
      },
      _detectViewport: function() {
        var t = this.$viewportElement.offset(),
          e = null !== t && t !== n;
        this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
      },
      _findParticles: function() {
        var e = this;
        if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
          for (var i = this.particles.length - 1; 0 <= i; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
        this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(i) {
          var o, s, r, a, l, u, c, h = t(this),
            d = 0,
            f = 0,
            p = 0,
            m = 0;
          if (h.data("stellar-elementIsActive")) {
            if (h.data("stellar-elementIsActive") !== this) return
          } else h.data("stellar-elementIsActive", this);
          e.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), r = h.position().left, a = h.position().top, u = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), c = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), u = h.offset().left - u, c = h.offset().top - c, h.parents().each(function() {
            var e = t(this);
            if (!0 === e.data("stellar-offset-parent")) return d = p, f = m, l = e, !1;
            p += e.position().left, m += e.position().top
          }), o = h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : l !== n && l.data("stellar-horizontal-offset") !== n ? l.data("stellar-horizontal-offset") : e.horizontalOffset, s = h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : l !== n && l.data("stellar-vertical-offset") !== n ? l.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
            $element: h,
            $offsetParent: l,
            isFixed: "fixed" === h.css("position"),
            horizontalOffset: o,
            verticalOffset: s,
            startingPositionLeft: r,
            startingPositionTop: a,
            startingOffsetLeft: u,
            startingOffsetTop: c,
            parentOffsetLeft: d,
            parentOffsetTop: f,
            stellarRatio: h.data("stellar-ratio") !== n ? h.data("stellar-ratio") : 1,
            width: h.outerWidth(!0),
            height: h.outerHeight(!0),
            isHidden: !1
          })
        })
      },
      _findBackgrounds: function() {
        var e, i = this,
          o = this._getScrollLeft(),
          s = this._getScrollTop();
        this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), (e = this.$element.data("stellar-background-ratio") ? e.add(this.$element) : e).each(function() {
          var e, r, a, l, u, c = t(this),
            f = d(c),
            p = 0,
            m = 0,
            g = 0,
            v = 0;
          if (c.data("stellar-backgroundIsActive")) {
            if (c.data("stellar-backgroundIsActive") !== this) return
          } else c.data("stellar-backgroundIsActive", this);
          c.data("stellar-backgroundStartingLeft") ? h(c, c.data("stellar-backgroundStartingLeft"), c.data("stellar-backgroundStartingTop")) : (c.data("stellar-backgroundStartingLeft", f[0]), c.data("stellar-backgroundStartingTop", f[1])), a = "auto" === c.css("margin-left") ? 0 : parseInt(c.css("margin-left"), 10), l = "auto" === c.css("margin-top") ? 0 : parseInt(c.css("margin-top"), 10), a = c.offset().left - a - o, l = c.offset().top - l - s, c.parents().each(function() {
            var e = t(this);
            if (!0 === e.data("stellar-offset-parent")) return p = g, m = v, u = e, !1;
            g += e.position().left, v += e.position().top
          }), e = c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, r = c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
            $element: c,
            $offsetParent: u,
            isFixed: "fixed" === c.css("background-attachment"),
            horizontalOffset: e,
            verticalOffset: r,
            startingValueLeft: f[0],
            startingValueTop: f[1],
            startingBackgroundPositionLeft: isNaN(parseInt(f[0], 10)) ? 0 : parseInt(f[0], 10),
            startingBackgroundPositionTop: isNaN(parseInt(f[1], 10)) ? 0 : parseInt(f[1], 10),
            startingPositionLeft: c.position().left,
            startingPositionTop: c.position().top,
            startingOffsetLeft: a,
            startingOffsetTop: l,
            parentOffsetLeft: p,
            parentOffsetTop: m,
            stellarRatio: c.data("stellar-background-ratio") === n ? 1 : c.data("stellar-background-ratio")
          })
        }))
      },
      _reset: function() {
        for (var t, e, i, n, o = this.particles.length - 1; 0 <= o; o--) e = (t = this.particles[o]).$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
        for (o = this.backgrounds.length - 1; 0 <= o; o--)(n = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(n.$element, n.startingValueLeft, n.startingValueTop)
      },
      destroy: function() {
        this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
      },
      _setOffsets: function() {
        var i = this,
          n = t(e);
        n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
          i.horizontalOffset = i.options.horizontalOffset()
        })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
          i.verticalOffset = i.options.verticalOffset()
        })) : this.verticalOffset = this.options.verticalOffset
      },
      _repositionElements: function() {
        var t, e, i, n, o, s, r, a, l, u, c = this._getScrollLeft(),
          d = this._getScrollTop(),
          f = !0,
          p = !0;
        if (this.currentScrollLeft !== c || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
          for (this.currentScrollLeft = c, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; 0 <= u; u--) e = (t = this.particles[u]).isFixed ? 1 : 0, a = this.options.horizontalScrolling ? (s = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (s = t.startingPositionLeft, t.startingOffsetLeft), l = this.options.verticalScrolling ? (r = (d + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop, t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : d) && l < (t.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), p && f ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
          for (u = this.backgrounds.length - 1; 0 <= u; u--) e = (i = this.backgrounds[u]).isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (d + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, h(i.$element, n, o)
        }
      },
      _handleScrollEvent: function() {
        function t() {
          i._repositionElements(), n = !1
        }
  
        function e() {
          n || (f(t), n = !0)
        }
        var i = this,
          n = !1;
        this.$scrollElement.bind("scroll." + this.name, e), e()
      },
      _startAnimationLoop: function() {
        var t = this;
        this._animationLoop = function() {
          f(t._animationLoop), t._repositionElements()
        }, this._animationLoop()
      }
    }, t.fn[s] = function(e) {
      var i = arguments;
      return e === n || "object" == typeof e ? this.each(function() {
        t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
      }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
        var n = t.data(this, "plugin_" + s);
        n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
      }) : void 0
    }, t[s] = function(i) {
      var n = t(e);
      return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
  })(jQuery, this, document), ((t, e) => {
    if (t) {
      for (var i = 0, n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length && !e.requestAnimationFrame; ++o) e.requestAnimationFrame = e[n[o] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[o] + "CancelAnimationFrame"] || e[n[o] + "CancelRequestAnimationFrame"];
      e.requestAnimationFrame || (e.requestAnimationFrame = function(t, n) {
        var o = (new Date).getTime(),
          s = Math.max(0, 16 - (o - i)),
          r = e.setTimeout(function() {
            t(o + s)
          }, s);
        return i = o + s, r
      }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
        clearTimeout(t)
      });
      var s = "parallax",
        r = {
          on: "scroll",
          listenTo: e,
          sceneMode: !1
        },
        a = t(e),
        l = 0;
      t.extend(u.prototype, {
        init: function() {
          var t = this;
          this.$triggerOrigin.on(t.settings.on + "." + t._name, function() {
            t.parallaxTranslate()
          }), t.parallaxTranslate()
        },
        parallaxTranslate: function() {
          var t = this;
          t.inScreen() && e.requestAnimationFrame(function() {
            var e = a.scrollTop() - t.$el.offset().top;
            t.$el.css("transform", "translateY(" + e / 2 + "px)")
          }), console.groupEnd()
        },
        destroy: function() {
          this.$el.removeData(), t(this.settings.listenTo).off("." + s)
        },
        somePublicMethod: function(t, e) {
          privateMethod.call(this)
        },
        inScreen: function(e) {
          e = "boolean" != typeof e && void 0 !== e ? (s = t(e), arguments[1] || !1) : (s = this.$el, e || !1);
          var i = a.scrollTop(),
            n = i + a.height(),
            o = s.offset().top,
            s = o + s.height();
          return !0 === e ? i <= o && s <= n : !(s < i || n < o)
        }
      }), t.fn[s] = function(e) {
        var i = arguments;
        return void 0 === e || "object" == typeof e ? this.each(function() {
          t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new u(this, e))
        }) : "string" == typeof e && "init" !== e ? this.each(function() {
          var n = t.data(this, "plugin_" + s);
          n instanceof u && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1))
        }) : void 0
      }
    } else console.error("jQuery nÃ£o encontrado, seu plugin jQuery nÃ£o irÃ¡ funcionar.");
  
    function u(e, i) {
      this._name = s, this._instance_id = ++l, this.el = e, this.$el = t(e), this.settings = t.extend(!1, {}, r, i, this.$el.data()), this.$triggerOrigin = t(this.settings.listenTo), this.init()
    }
  })(window.jQuery || !1, window, document), (t => {
    t("select").niceSelect(), t(window).on("load", function() {
      var e;
      t(".portfolio-filter ul li").on("click", function() {
        t(".portfolio-filter ul li").removeClass("active"), t(this).addClass("active");
        var i = t(this).attr("data-filter");
        e.isotope({
          filter: i
        })
      }), document.getElementById("portfolio") && (e = t(".portfolio-grid").isotope({
        itemSelector: ".all",
        percentPosition: !0,
        masonry: {
          columnWidth: ".all"
        }
      }))
    })
  })(jQuery), ((t, e) => {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
  })(this, function() {
    function t(t) {
      return t && "[object Function]" === {}.toString.call(t)
    }
  
    function e(t, e) {
      return 1 !== t.nodeType ? [] : (t = window.getComputedStyle(t, null), e ? t[e] : t)
    }
  
    function i(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
  
    function n(t) {
      var o, s;
      return t && -1 === ["HTML", "BODY", "#document"].indexOf(t.nodeName) ? (s = (o = e(t)).overflow, /(auto|scroll)/.test(s + o.overflowY + o.overflowX) ? t : n(i(t))) : window.document.body
    }
  
    function o(t) {
      var i = (t = t && t.offsetParent) && t.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === e(t, "position") ? o(t) : t : window.document.documentElement
    }
  
    function s(t) {
      return null === t.parentNode ? t : s(t.parentNode)
    }
  
    function r(t, e) {
      var i, n, a;
      return t && t.nodeType && e && e.nodeType ? (n = (a = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) ? t : e, a = a ? e : t, (i = document.createRange()).setStart(n, 0), i.setEnd(a, 0), t !== (i = i.commonAncestorContainer) && e !== i || n.contains(a) ? "BODY" === (a = (n = i).nodeName) || "HTML" !== a && o(n.firstElementChild) !== n ? o(i) : i : (a = s(t)).host ? r(a.host, e) : r(t, s(e).host)) : window.document.documentElement
    }
  
    function a(t, e) {
      e = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft";
      var i = t.nodeName;
      return ("BODY" === i || "HTML" === i ? (i = window.document.documentElement, window.document.scrollingElement || i) : t)[e]
    }
  
    function l(t, e) {
      var i = "Left" == (e = "x" === e ? "Left" : "Top") ? "Right" : "Bottom";
      return +t["border" + e + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0]
    }
  
    function u(t, e, i, n) {
      return O(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], H() ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }
  
    function c() {
      var t = window.document.body,
        e = window.document.documentElement,
        i = H() && window.getComputedStyle(e);
      return {
        height: u("Height", t, e, i),
        width: u("Width", t, e, i)
      }
    }
  
    function h(t) {
      return W({}, t, {
        right: t.left + t.width,
        bottom: t.top + t.height
      })
    }
  
    function d(t) {
      var i = {};
      if (H()) try {
        i = t.getBoundingClientRect();
        var n = a(t, "top"),
          o = a(t, "left");
        i.top += n, i.left += o, i.bottom += n, i.right += o
      } catch (t) {} else i = t.getBoundingClientRect();
      var s;
      n = {
        left: i.left,
        top: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top
      }, i = (o = "HTML" === t.nodeName ? c() : {}).width || t.clientWidth || n.right - n.left, o = o.height || t.clientHeight || n.bottom - n.top, i = t.offsetWidth - i, o = t.offsetHeight - o;
      return (i || o) && (i -= l(s = e(t), "x"), o -= l(s, "y"), n.width -= i, n.height -= o), h(n)
    }
  
    function f(t, i) {
      var o = H(),
        s = "HTML" === i.nodeName,
        r = d(t),
        l = d(i),
        u = (t = n(t), e(i)),
        c = +u.borderTopWidth.split("px")[0],
        f = +u.borderLeftWidth.split("px")[0];
      return (l = h({
        top: r.top - l.top - c,
        left: r.left - l.left - f,
        width: r.width,
        height: r.height
      })).marginTop = 0, l.marginLeft = 0, !o && s && (r = +u.marginTop.split("px")[0], s = +u.marginLeft.split("px")[0], l.top -= c - r, l.bottom -= c - r, l.left -= f - s, l.right -= f - s, l.marginTop = r, l.marginLeft = s), (o ? i.contains(t) : i === t && "BODY" !== t.nodeName) ? function(t, e, i) {
        i = 2 < arguments.length && void 0 !== i && i;
        var n = a(e, "top");
        e = a(e, "left"), i = i ? -1 : 1;
        return t.top += n * i, t.bottom += n * i, t.left += e * i, t.right += e * i, t
      }(l, i) : l
    }
  
    function p(t, o, s, l) {
      var u, d, p, m, g, v, y = {
        top: 0,
        left: 0
      };
      o = r(t, o);
      return "viewport" === l ? (d = f(d = o, p = window.document.documentElement), m = O(p.clientWidth, window.innerWidth || 0), g = O(p.clientHeight, window.innerHeight || 0), v = a(p), p = a(p, "left"), y = h({
        top: v - d.top + d.marginTop,
        left: p - d.left + d.marginLeft,
        width: m,
        height: g
      })) : ("scrollParent" === l ? "BODY" === (u = n(i(t))).nodeName && (u = window.document.documentElement) : u = "window" === l ? window.document.documentElement : l, v = f(u, o), "HTML" !== u.nodeName || function t(n) {
        var o = n.nodeName;
        return "BODY" !== o && "HTML" !== o && ("fixed" === e(n, "position") || t(i(n)))
      }(o) ? y = v : (d = (p = c()).height, m = p.width, y.top += v.top - v.marginTop, y.bottom = d + v.top, y.left += v.left - v.marginLeft, y.right = m + v.left)), y.left += s, y.top += s, y.right -= s, y.bottom -= s, y
    }
  
    function m(t, e, i, n, o, s) {
      var r;
      s = 5 < arguments.length && void 0 !== s ? s : 0;
      return -1 === t.indexOf("auto") ? t : (n = p(i, n, s, o), r = {
        top: {
          width: n.width,
          height: e.top - n.top
        },
        right: {
          width: n.right - e.right,
          height: n.height
        },
        bottom: {
          width: n.width,
          height: n.bottom - e.bottom
        },
        left: {
          width: e.left - n.left,
          height: n.height
        }
      }, (0 < (o = (s = Object.keys(r).map(function(t) {
        return W({
          key: t
        }, r[t], {
          area: (t = r[t]).width * t.height
        })
      }).sort(function(t, e) {
        return e.area - t.area
      })).filter(function(t) {
        return t.width >= i.clientWidth && t.height >= i.clientHeight
      })).length ? o : s)[0].key + ((e = t.split("-")[1]) ? "-" + e : ""))
    }
  
    function g(t, e, i) {
      return f(i, r(e, i))
    }
  
    function v(t) {
      var e = window.getComputedStyle(t),
        i = parseFloat(e.marginTop) + parseFloat(e.marginBottom);
      e = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return {
        width: t.offsetWidth + e,
        height: t.offsetHeight + i
      }
    }
  
    function y(t) {
      var e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return t.replace(/left|right|bottom|top/g, function(t) {
        return e[t]
      })
    }
  
    function _(t, e, i) {
      i = i.split("-")[0];
      var n = {
          width: (t = v(t)).width,
          height: t.height
        },
        o = (a = -1 !== ["right", "left"].indexOf(i)) ? "top" : "left",
        s = a ? "left" : "top",
        r = a ? "height" : "width",
        a = a ? "width" : "height";
      return n[o] = e[o] + e[r] / 2 - t[r] / 2, n[s] = i === s ? e[s] - t[a] : e[y(s)], n
    }
  
    function b(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
  
    function w(e, i, n) {
      var o;
      return (void 0 === n ? e : e.slice(0, (o = n, Array.prototype.findIndex ? e.findIndex(function(t) {
        return t.name === o
      }) : (n = b(e, function(t) {
        return t.name === o
      }), e.indexOf(n))))).forEach(function(e) {
        e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = e["function"] || e.fn;
        e.enabled && t(n) && (i.offsets.popper = h(i.offsets.popper), i.offsets.reference = h(i.offsets.reference), i = n(i, e))
      }), i
    }
  
    function E(t, e) {
      return t.some(function(t) {
        var i = t.name;
        return t.enabled && i === e
      })
    }
  
    function C(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length - 1; n++) {
        var o = (o = e[n]) ? "" + o + i : t;
        if (void 0 !== window.document.body.style[o]) return o
      }
      return null
    }
  
    function I(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
  
    function F(t, e) {
      Object.keys(e).forEach(function(i) {
        var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && I(e[i]) && (n = "px"), t.style[i] = e[i] + n
      })
    }
  
    function S(t, e, i) {
      var n, o = b(t, function(t) {
        return t.name === e
      });
      return (t = !!o && t.some(function(t) {
        return t.name === i && t.enabled && t.order < o.order
      })) || (n = "`" + e + "`", console.warn("`" + i + "` modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")), t
    }
  
    function T(t, e) {
      return e = 1 < arguments.length && void 0 !== e && e, t = q.indexOf(t), t = q.slice(t + 1).concat(q.slice(0, t)), e ? t.reverse() : t
    }
    for (var x = Math.min, D = Math.floor, O = Math.max, A = ["native code", "[object MutationObserverConstructor]"], L = "undefined" != typeof window, z = ["Edge", "Trident", "Firefox"], k = 0, P = 0; P < z.length; P += 1)
      if (L && 0 <= navigator.userAgent.indexOf(z[P])) {
        k = 1;
        break
      }
    function N(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }
    var j, R, M = L && (R = window.MutationObserver, A.some(function(t) {
        return -1 < (R || "").toString().indexOf(t)
      })) ? function(t) {
        var e = !1,
          i = 0,
          n = document.createElement("span");
        return new MutationObserver(function() {
            t(), e = !1
          }).observe(n, {
            attributes: !0
          }),
          function() {
            e || (e = !0, n.setAttribute("x-index", i), ++i)
          }
      } : function(t) {
        var e = !1;
        return function() {
          e || (e = !0, setTimeout(function() {
            e = !1, t()
          }, k))
        }
      },
      H = function() {
        return j = null == j ? -1 !== navigator.appVersion.indexOf("MSIE 10") : j
      },
      W = (A = function(t, e, i) {
        return e && $(t.prototype, e), i && $(t, i), t
      }, Object.assign || function(t) {
        for (var e, i = 1; i < arguments.length; i++)
          for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
      }),
      B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      q = B.slice(3);
  
    function U(e, i) {
      var n = this,
        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      if (!(this instanceof U)) throw new TypeError("Cannot call a class as a function");
      this.scheduleUpdate = function() {
        return requestAnimationFrame(n.update)
      }, this.update = M(this.update.bind(this)), this.options = W({}, U.Defaults, o), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e.jquery ? e[0] : e, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(W({}, U.Defaults.modifiers, o.modifiers)).forEach(function(t) {
        n.options.modifiers[t] = W({}, U.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
        return W({
          name: t
        }, n.options.modifiers[t])
      }).sort(function(t, e) {
        return t.order - e.order
      }), this.modifiers.forEach(function(e) {
        e.enabled && t(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
      }), this.update(), (e = this.options.eventsEnabled) && this.enableEventListeners(), this.state.eventsEnabled = e
    }
  
    function $(t, e) {
      for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
    return A(U, [{
      key: "update",
      value: function() {
        return function() {
          var t;
          this.state.isDestroyed || ((t = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          }).offsets.reference = g(this.state, this.popper, this.reference), t.placement = m(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = _(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = w(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)))
        }.call(this)
      }
    }, {
      key: "destroy",
      value: function() {
        return function() {
          return this.state.isDestroyed = !0, E(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[C("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }.call(this)
      }
    }, {
      key: "enableEventListeners",
      value: function() {
        return function() {
          var t, e, i;
          this.state.eventsEnabled || (this.state = (t = this.reference, this.options, e = this.state, i = this.scheduleUpdate, e.updateBound = i, window.addEventListener("resize", e.updateBound, {
            passive: !0
          }), function t(e, i, o, s) {
            var r = "BODY" === e.nodeName;
            (e = r ? window : e).addEventListener(i, o, {
              passive: !0
            }), r || t(n(e.parentNode), i, o, s), s.push(e)
          }(i = n(t), "scroll", e.updateBound, e.scrollParents), e.scrollElement = i, e.eventsEnabled = !0, e))
        }.call(this)
      }
    }, {
      key: "disableEventListeners",
      value: function() {
        return function() {
          var t;
          this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, t = this.state, window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
          }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }.call(this)
      }
    }]), (A = U).Utils = ("undefined" == typeof window ? global : window).PopperUtils, A.placements = B, A.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(t) {
            var e, i, n, o = t.placement,
              s = o.split("-")[0];
            return (o = o.split("-")[1]) && (e = (i = t.offsets).reference, i = i.popper, n = (s = -1 !== ["bottom", "top"].indexOf(s)) ? "width" : "height", s = {
              start: N({}, s = s ? "left" : "top", e[s]),
              end: N({}, s, e[s] + e[n] - i[n])
            }, t.offsets.popper = W({}, i, s[o])), t
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function(t, e) {
            e = e.offset;
            var i, n, o, s, r, a, l = t.placement,
              u = (c = t.offsets).popper,
              c = c.reference;
            l = l.split("-")[0], e = I(+e) ? [+e, 0] : (i = e, n = u, o = c, s = [0, 0], r = -1 !== ["right", "left"].indexOf(c = l), i = (c = i.split(/(\+|\-)/).map(function(t) {
              return t.trim()
            })).indexOf(b(c, function(t) {
              return -1 !== t.search(/,|\s/)
            })), c[i] && -1 === c[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), a = /\s*,\s*|\s+/, (-1 === i ? [c] : [c.slice(0, i).concat([c[i].split(a)[0]]), [c[i].split(a)[1]].concat(c.slice(i + 1))]).map(function(t, e) {
              var i = (1 === e ? !r : r) ? "height" : "width",
                s = !1;
              return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
              }, []).map(function(t) {
                return e = i, s = n, r = o, a = +(l = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1], l = l[2], a ? 0 === l.indexOf("%") ? h("%p" === l ? s : r)[e] / 100 * a : "vh" === l || "vw" === l ? ("vh" === l ? O(document.documentElement.clientHeight, window.innerHeight || 0) : O(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a : a : t;
                var e, s, r, a, l
              })
            }).forEach(function(t, e) {
              t.forEach(function(i, n) {
                I(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1))
              })
            }), s);
            return "left" === l ? (u.top += e[0], u.left -= e[1]) : "right" === l ? (u.top += e[0], u.left += e[1]) : "top" === l ? (u.left += e[0], u.top -= e[1]) : "bottom" === l && (u.left += e[0], u.top += e[1]), t.popper = u, t
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(t, e) {
            var i = e.boundariesElement || o(t.instance.popper),
              n = (t.instance.reference === i && (i = o(i)), p(t.instance.popper, t.instance.reference, e.padding, i)),
              s = (i = (e.boundaries = n, e.priority), t.offsets.popper),
              r = {
                primary: function(t) {
                  var i = s[t];
                  return N({}, t, i = s[t] < n[t] && !e.escapeWithReference ? O(s[t], n[t]) : i)
                },
                secondary: function(t) {
                  var i = "right" === t ? "left" : "top",
                    o = s[i];
                  return N({}, i, o = s[t] > n[t] && !e.escapeWithReference ? x(s[i], n[t] - ("right" === t ? s.width : s.height)) : o)
                }
              };
            return i.forEach(function(t) {
              var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
              s = W({}, s, r[e](t))
            }), t.offsets.popper = s, t
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent"
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(t) {
            var e = (i = t.offsets).popper,
              i = i.reference,
              n = t.placement.split("-")[0],
              o = D,
              s = (n = -1 !== ["top", "bottom"].indexOf(n)) ? "right" : "bottom",
              r = n ? "left" : "top";
            n = n ? "width" : "height";
            return e[s] < o(i[r]) && (t.offsets.popper[r] = o(i[r]) - e[n]), e[r] > o(i[s]) && (t.offsets.popper[r] = o(i[s])), t
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(t, i) {
            if (S(t.instance.modifiers, "arrow", "keepTogether")) {
              if ("string" == typeof(i = i.element)) {
                if (!(i = t.instance.popper.querySelector(i))) return t
              } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
              var n = t.placement.split("-")[0],
                o = (s = t.offsets).popper,
                s = s.reference,
                r = (n = -1 !== ["left", "right"].indexOf(n)) ? "height" : "width",
                a = (c = n ? "Top" : "Left").toLowerCase(),
                l = n ? "left" : "top",
                u = (n = n ? "bottom" : "right", v(i)[r]),
                c = (n = (s[n] - u < o[a] && (t.offsets.popper[a] -= o[a] - (s[n] - u)), s[a] + u > o[n] && (t.offsets.popper[a] += s[a] + u - o[n]), s[a] + s[r] / 2 - u / 2), s = e(t.instance.popper, "margin" + c).replace("px", ""), n - h(t.offsets.popper)[a] - s);
              c = O(x(o[r] - u, c), 0);
              t.arrowElement = i, t.offsets.arrow = {}, t.offsets.arrow[a] = Math.round(c), t.offsets.arrow[l] = ""
            }
            return t
          },
          element: "[x-arrow]"
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(t, e) {
            if (!(E(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)) {
              var i = p(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                n = t.placement.split("-")[0],
                o = y(n),
                s = t.placement.split("-")[1] || "",
                r = [];
              switch (e.behavior) {
                case "flip":
                  r = [n, o];
                  break;
                case "clockwise":
                  r = T(n);
                  break;
                case "counterclockwise":
                  r = T(n, !0);
                  break;
                default:
                  r = e.behavior
              }
              r.forEach(function(a, l) {
                if (n !== a || r.length === l + 1) return t;
                n = t.placement.split("-")[0], o = y(n);
                a = t.offsets.popper;
                var u = t.offsets.reference,
                  c = D,
                  h = (u = "left" === n && c(a.right) > c(u.left) || "right" === n && c(a.left) < c(u.right) || "top" === n && c(a.bottom) > c(u.top) || "bottom" === n && c(a.top) < c(u.bottom), c(a.left) < c(i.left)),
                  d = c(a.right) > c(i.right),
                  f = c(a.top) < c(i.top),
                  p = (a = c(a.bottom) > c(i.bottom), c = "left" === n && h || "right" === n && d || "top" === n && f || "bottom" === n && a, -1 !== ["top", "bottom"].indexOf(n));
                h = !!e.flipVariations && (p && "start" === s && h || p && "end" === s && d || !p && "start" === s && f || !p && "end" === s && a);
                (u || c || h) && (t.flipped = !0, (u || c) && (n = r[l + 1]), h && (s = "end" === s ? "start" : "start" === s ? "end" : s), t.placement = n + (s ? "-" + s : ""), t.offsets.popper = W({}, t.offsets.popper, _(t.instance.popper, t.offsets.reference, t.placement)), t = w(t.instance.modifiers, t, "flip"))
              })
            }
            return t
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport"
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(t) {
            var e = t.placement,
              i = e.split("-")[0],
              n = (o = t.offsets).popper,
              o = o.reference,
              s = -1 !== ["left", "right"].indexOf(i),
              r = -1 === ["top", "left"].indexOf(i);
            return n[s ? "left" : "top"] = o[i] - (r ? n[s ? "width" : "height"] : 0), t.placement = y(e), t.offsets.popper = h(n), t
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(t) {
            if (S(t.instance.modifiers, "hide", "preventOverflow")) {
              var e = t.offsets.reference,
                i = b(t.instance.modifiers, function(t) {
                  return "preventOverflow" === t.name
                }).boundaries;
              if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                if (!0 === t.hide) return t;
                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
              } else {
                if (!1 === t.hide) return t;
                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
              }
            }
            return t
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(t, e) {
            var i = e.x,
              n = e.y,
              s = t.offsets.popper,
              r = (e = (void 0 !== (r = b(t.instance.modifiers, function(t) {
                return "applyStyle" === t.name
              }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"), void 0 === r ? e.gpuAcceleration : r), d(o(t.instance.popper))),
              a = {
                position: s.position
              },
              l = (s = {
                left: D(s.left),
                top: D(s.top),
                bottom: D(s.bottom),
                right: D(s.right)
              }, i = "bottom" === i ? "top" : "bottom", n = "right" === n ? "left" : "right", C("transform")),
              u = "bottom" == i ? -r.height + s.bottom : s.top;
            r = "right" == n ? -r.width + s.right : s.left, e && l ? (a[l] = "translate3d(" + r + "px, " + u + "px, 0)", a[i] = 0, a[n] = 0, a.willChange = "transform") : (s = "right" == n ? -1 : 1, a[i] = u * ("bottom" == i ? -1 : 1), a[n] = r * s, a.willChange = i + ", " + n), e = {
              "x-placement": t.placement
            };
            return t.attributes = W({}, e, t.attributes), t.styles = W({}, a, t.styles), t.arrowStyles = W({}, t.offsets.arrow, t.arrowStyles), t
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right"
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(t) {
            return F(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach(function(t) {
              !1 === i[t] ? e.removeAttribute(t) : e.setAttribute(t, i[t])
            }), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t;
            var e, i
          },
          onLoad: function(t, e, i, n, o) {
            var s = g(0, e, t);
            s = m(i.placement, s, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
            return e.setAttribute("x-placement", s), F(e, {
              position: "absolute"
            }), i
          },
          gpuAcceleration: void 0
        }
      }
    }, A
  }), ((t, e, i, n) => {
    function o(e, i) {
      this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
    }
    var s = "stellar",
      r = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(t) {
          t.hide()
        },
        showElement: function(t) {
          t.show()
        }
      },
      a = {
        scroll: {
          getLeft: function(t) {
            return t.scrollLeft()
          },
          setLeft: function(t, e) {
            t.scrollLeft(e)
          },
          getTop: function(t) {
            return t.scrollTop()
          },
          setTop: function(t, e) {
            t.scrollTop(e)
          }
        },
        position: {
          getLeft: function(t) {
            return -1 * parseInt(t.css("left"), 10)
          },
          getTop: function(t) {
            return -1 * parseInt(t.css("top"), 10)
          }
        },
        margin: {
          getLeft: function(t) {
            return -1 * parseInt(t.css("margin-left"), 10)
          },
          getTop: function(t) {
            return -1 * parseInt(t.css("margin-top"), 10)
          }
        },
        transform: {
          getLeft: function(t) {
            return "none" !== (t = getComputedStyle(t[0])[u]) ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
          },
          getTop: function(t) {
            return "none" !== (t = getComputedStyle(t[0])[u]) ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
          }
        }
      },
      l = {
        position: {
          setLeft: function(t, e) {
            t.css("left", e)
          },
          setTop: function(t, e) {
            t.css("top", e)
          }
        },
        transform: {
          setPosition: function(t, e, i, n, o) {
            t[0].style[u] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
          }
        }
      },
      u = (() => {
        var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          n = t("script")[0].style,
          o = "";
        for (e in n)
          if (i.test(e)) {
            o = e.match(i)[0];
            break
          } return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
          function(t) {
            return o + (0 < o.length ? t.charAt(0).toUpperCase() + t.slice(1) : t)
          }
      })()("transform"),
      c = t("<div />", {
        style: "background:#fff"
      }).css("background-position-x") !== n,
      h = c ? function(t, e, i) {
        t.css({
          "background-position-x": e,
          "background-position-y": i
        })
      } : function(t, e, i) {
        t.css("background-position", e + " " + i)
      },
      d = c ? function(t) {
        return [t.css("background-position-x"), t.css("background-position-y")]
      } : function(t) {
        return t.css("background-position").split(" ")
      },
      f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
        setTimeout(t, 1e3 / 60)
      };
    o.prototype = {
      init: function() {
        this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
          firstLoad: !0
        }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
      },
      _defineElements: function() {
        this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
      },
      _defineGetters: function() {
        var t = this,
          e = a[t.options.scrollProperty];
        this._getScrollLeft = function() {
          return e.getLeft(t.$scrollElement)
        }, this._getScrollTop = function() {
          return e.getTop(t.$scrollElement)
        }
      },
      _defineSetters: function() {
        var e = this,
          i = a[e.options.scrollProperty],
          n = l[e.options.positionProperty],
          o = i.setLeft,
          s = i.setTop;
        this._setScrollLeft = "function" == typeof o ? function(t) {
          o(e.$scrollElement, t)
        } : t.noop, this._setScrollTop = "function" == typeof s ? function(t) {
          s(e.$scrollElement, t)
        } : t.noop, this._setPosition = n.setPosition || function(t, i, o, s, r) {
          e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, s, r)
        }
      },
      _handleWindowLoadAndResize: function() {
        var i = this,
          n = t(e);
        i.options.responsive && n.bind("load." + this.name, function() {
          i.refresh()
        }), n.bind("resize." + this.name, function() {
          i._detectViewport(), i.options.responsive && i.refresh()
        })
      },
      refresh: function(i) {
        var n = this,
          o = n._getScrollLeft(),
          s = n._getScrollTop();
        i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
          var t = n._getScrollLeft(),
            e = n._getScrollTop();
          n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
        }), this._setScrollLeft(o), this._setScrollTop(s)
      },
      _detectViewport: function() {
        var t = this.$viewportElement.offset(),
          e = null !== t && t !== n;
        this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
      },
      _findParticles: function() {
        var e = this;
        if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
          for (var i = this.particles.length - 1; 0 <= i; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
        this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(i) {
          var o, s, r, a, l, u, c, h = t(this),
            d = 0,
            f = 0,
            p = 0,
            m = 0;
          if (h.data("stellar-elementIsActive")) {
            if (h.data("stellar-elementIsActive") !== this) return
          } else h.data("stellar-elementIsActive", this);
          e.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), r = h.position().left, a = h.position().top, u = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), c = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), u = h.offset().left - u, c = h.offset().top - c, h.parents().each(function() {
            var e = t(this);
            if (!0 === e.data("stellar-offset-parent")) return d = p, f = m, l = e, !1;
            p += e.position().left, m += e.position().top
          }), o = h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : l !== n && l.data("stellar-horizontal-offset") !== n ? l.data("stellar-horizontal-offset") : e.horizontalOffset, s = h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : l !== n && l.data("stellar-vertical-offset") !== n ? l.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
            $element: h,
            $offsetParent: l,
            isFixed: "fixed" === h.css("position"),
            horizontalOffset: o,
            verticalOffset: s,
            startingPositionLeft: r,
            startingPositionTop: a,
            startingOffsetLeft: u,
            startingOffsetTop: c,
            parentOffsetLeft: d,
            parentOffsetTop: f,
            stellarRatio: h.data("stellar-ratio") !== n ? h.data("stellar-ratio") : 1,
            width: h.outerWidth(!0),
            height: h.outerHeight(!0),
            isHidden: !1
          })
        })
      },
      _findBackgrounds: function() {
        var e, i = this,
          o = this._getScrollLeft(),
          s = this._getScrollTop();
        this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), (e = this.$element.data("stellar-background-ratio") ? e.add(this.$element) : e).each(function() {
          var e, r, a, l, u, c = t(this),
            f = d(c),
            p = 0,
            m = 0,
            g = 0,
            v = 0;
          if (c.data("stellar-backgroundIsActive")) {
            if (c.data("stellar-backgroundIsActive") !== this) return
          } else c.data("stellar-backgroundIsActive", this);
          c.data("stellar-backgroundStartingLeft") ? h(c, c.data("stellar-backgroundStartingLeft"), c.data("stellar-backgroundStartingTop")) : (c.data("stellar-backgroundStartingLeft", f[0]), c.data("stellar-backgroundStartingTop", f[1])), a = "auto" === c.css("margin-left") ? 0 : parseInt(c.css("margin-left"), 10), l = "auto" === c.css("margin-top") ? 0 : parseInt(c.css("margin-top"), 10), a = c.offset().left - a - o, l = c.offset().top - l - s, c.parents().each(function() {
            var e = t(this);
            if (!0 === e.data("stellar-offset-parent")) return p = g, m = v, u = e, !1;
            g += e.position().left, v += e.position().top
          }), e = c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, r = c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
            $element: c,
            $offsetParent: u,
            isFixed: "fixed" === c.css("background-attachment"),
            horizontalOffset: e,
            verticalOffset: r,
            startingValueLeft: f[0],
            startingValueTop: f[1],
            startingBackgroundPositionLeft: isNaN(parseInt(f[0], 10)) ? 0 : parseInt(f[0], 10),
            startingBackgroundPositionTop: isNaN(parseInt(f[1], 10)) ? 0 : parseInt(f[1], 10),
            startingPositionLeft: c.position().left,
            startingPositionTop: c.position().top,
            startingOffsetLeft: a,
            startingOffsetTop: l,
            parentOffsetLeft: p,
            parentOffsetTop: m,
            stellarRatio: c.data("stellar-background-ratio") === n ? 1 : c.data("stellar-background-ratio")
          })
        }))
      },
      _reset: function() {
        for (var t, e, i, n, o = this.particles.length - 1; 0 <= o; o--) e = (t = this.particles[o]).$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
        for (o = this.backgrounds.length - 1; 0 <= o; o--)(n = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(n.$element, n.startingValueLeft, n.startingValueTop)
      },
      destroy: function() {
        this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
      },
      _setOffsets: function() {
        var i = this,
          n = t(e);
        n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
          i.horizontalOffset = i.options.horizontalOffset()
        })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
          i.verticalOffset = i.options.verticalOffset()
        })) : this.verticalOffset = this.options.verticalOffset
      },
      _repositionElements: function() {
        var t, e, i, n, o, s, r, a, l, u, c = this._getScrollLeft(),
          d = this._getScrollTop(),
          f = !0,
          p = !0;
        if (this.currentScrollLeft !== c || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
          for (this.currentScrollLeft = c, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; 0 <= u; u--) e = (t = this.particles[u]).isFixed ? 1 : 0, a = this.options.horizontalScrolling ? (s = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (s = t.startingPositionLeft, t.startingOffsetLeft), l = this.options.verticalScrolling ? (r = (d + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop, t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : d) && l < (t.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), p && f ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
          for (u = this.backgrounds.length - 1; 0 <= u; u--) e = (i = this.backgrounds[u]).isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (d + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, h(i.$element, n, o)
        }
      },
      _handleScrollEvent: function() {
        function t() {
          i._repositionElements(), n = !1
        }
  
        function e() {
          n || (f(t), n = !0)
        }
        var i = this,
          n = !1;
        this.$scrollElement.bind("scroll." + this.name, e), e()
      },
      _startAnimationLoop: function() {
        var t = this;
        this._animationLoop = function() {
          f(t._animationLoop), t._repositionElements()
        }, this._animationLoop()
      }
    }, t.fn[s] = function(e) {
      var i = arguments;
      return e === n || "object" == typeof e ? this.each(function() {
        t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
      }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
        var n = t.data(this, "plugin_" + s);
        n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
      }) : void 0
    }, t[s] = function(i) {
      var n = t(e);
      return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
  })(jQuery, this, document), ((t, e) => {
    if (t) {
      for (var i = 0, n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length && !e.requestAnimationFrame; ++o) e.requestAnimationFrame = e[n[o] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[o] + "CancelAnimationFrame"] || e[n[o] + "CancelRequestAnimationFrame"];
      e.requestAnimationFrame || (e.requestAnimationFrame = function(t, n) {
        var o = (new Date).getTime(),
          s = Math.max(0, 16 - (o - i)),
          r = e.setTimeout(function() {
            t(o + s)
          }, s);
        return i = o + s, r
      }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
        clearTimeout(t)
      });
      var s = "parallax",
        r = {
          on: "scroll",
          listenTo: e,
          sceneMode: !1
        },
        a = t(e),
        l = 0;
      t.extend(u.prototype, {
        init: function() {
          var t = this;
          this.$triggerOrigin.on(t.settings.on + "." + t._name, function() {
            t.parallaxTranslate()
          }), t.parallaxTranslate()
        },
        parallaxTranslate: function() {
          var t = this;
          t.inScreen() && e.requestAnimationFrame(function() {
            var e = a.scrollTop() - t.$el.offset().top;
            t.$el.css("transform", "translateY(" + e / 2 + "px)")
          }), console.groupEnd()
        },
        destroy: function() {
          this.$el.removeData(), t(this.settings.listenTo).off("." + s)
        },
        somePublicMethod: function(t, e) {
          privateMethod.call(this)
        },
        inScreen: function(e) {
          e = "boolean" != typeof e && void 0 !== e ? (s = t(e), arguments[1] || !1) : (s = this.$el, e || !1);
          var i = a.scrollTop(),
            n = i + a.height(),
            o = s.offset().top,
            s = o + s.height();
          return !0 === e ? i <= o && s <= n : !(s < i || n < o)
        }
      }), t.fn[s] = function(e) {
        var i = arguments;
        return void 0 === e || "object" == typeof e ? this.each(function() {
          t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new u(this, e))
        }) : "string" == typeof e && "init" !== e ? this.each(function() {
          var n = t.data(this, "plugin_" + s);
          n instanceof u && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1))
        }) : void 0
      }
    } else console.error("jQuery nÃ£o encontrado, seu plugin jQuery nÃ£o irÃ¡ funcionar.");
  
    function u(e, i) {
      this._name = s, this._instance_id = ++l, this.el = e, this.$el = t(e), this.settings = t.extend(!1, {}, r, i, this.$el.data()), this.$triggerOrigin = t(this.settings.listenTo), this.init()
    }
  })(window.jQuery || !1, window, document), $(document).ready(function() {
    $(".header_area");
    let t = $("#navbarSupportedContent");
    $(window).on("scroll", function() {
      t.hasClass("show") && t.collapse("hide")
    })
  }),
  $(document).ready(function() {
    let menuAnimation = lottie.loadAnimation({
      container: $("#menu-icon")[0],
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "js/json/menu.json"
    });
    let menuOpen = false;
    $("#menu-icon").click(function() {
      if (menuOpen) {
        menuAnimation.setDirection(-1);
        menuAnimation.play()
      } else {
        menuAnimation.setDirection(1);
        menuAnimation.play()
      }
      menuOpen = !menuOpen
    });
    $(window).scroll(function() {
      if (menuOpen) {
        menuAnimation.setDirection(-1);
        menuAnimation.play();
        menuOpen = false
      }
    })
  });