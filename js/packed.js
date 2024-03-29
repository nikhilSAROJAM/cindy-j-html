/* Most used template JS files in one:
0.   jQuery Migrate v1.4.1
1.   sb-instagram.min.js
2.   swiper.jquery.min.js
3.   jquery.magnific-popup.min.js
4.   trx_addons.js
5.   superfish.min.js
6.   skip-link-focus-fix.min.js
7.   core.min.js
8.   widget.min.js
9.   tabs.min.js
10.  effect.min.js
11.  effect-fade.min.js
12.  accordion.min.js
13.  autocomplete.min.js
14.  wp-embed.min.js
-----------------------------------------------------------------------------------------------*/

/* 0.  jQuery Migrate v1.4.1
-----------------------------------------------------------------------------------------------*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function(a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(b, c, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return d(f), e
          },
          set: function(a) {
            d(f), e = a
          }
        })
      } catch (g) {}
      a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
      f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
      }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
      },
      j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
      },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
      var j = e.toLowerCase(),
        o = b && b.nodeType;
      return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
        get: function(b, d) {
          var e, f = a.prop(b, d);
          return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
          var e;
          return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
      }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
      get: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
      },
      set: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
      }
    };
    var o, p, q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
      var g, h;
      return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
      var b = Array.prototype.slice.call(arguments);
      if ("string" == typeof a && u.test(a)) try {
        document.querySelector(a)
      } catch (c) {
        a = a.replace(v, function(a, b, c, d) {
          return "[" + b + c + '"' + d + '"]'
        });
        try {
          document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
        } catch (e) {
          d("Attribute selector with '#' was not fixed: " + b[0])
        }
      }
      return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
      return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
      function b(a, c) {
        return new b.fn.init(a, c)
      }
      a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
        var f = a.fn.init.call(this, d, e, c);
        return f instanceof b ? f : b(f)
      }, b.fn.init.prototype = b.fn;
      var c = b(document);
      return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
      return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
      var d = a.cssHooks[c] && a.cssHooks[c].get;
      d && (a.cssHooks[c].get = function() {
        var a;
        return y = !0, a = d.apply(this, arguments), y = !1, a
      })
    }), a.swap = function(a, b, c, e) {
      var f, g, h = {};
      y || d("jQuery.swap() is undocumented and deprecated");
      for (g in b) h[g] = a.style[g], a.style[g] = b[g];
      f = c.apply(a, e || []);
      for (g in b) a.style[g] = h[g];
      return f
    }, a.ajaxSetup({
      converters: {
        "text json": a.parseJSON
      }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
      var e, f, g = this[0];
      return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
      c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
      var g, h, i, j, k = [];
      if (a.merge(k, a.buildFragment(b, c).childNodes), e)
        for (i = function(a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
          }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
      return k
    });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
      };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
      a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
      C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
      a.fn[c] = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
      }
    }), a.fn.toggle = function(b, c) {
      if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
      d("jQuery.fn.toggle(handler, handler...) is deprecated");
      var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function(c) {
          var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
          return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
      for (h.guid = f; g < e.length;) e[g++].guid = f;
      return this.click(h)
    }, a.fn.live = function(b, c, e) {
      return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
      return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
      return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
      a.event.special[c] = {
        setup: function() {
          var b = this;
          return b !== document && (a.event.add(document, c + "." + a.guid, function() {
            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
          }), a._data(this, c, a.guid++)), !1
        },
        teardown: function() {
          return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
        }
      }
    }), a.event.special.ready = {
      setup: function() {
        this === document && d("'ready' event is deprecated")
      }
    };
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
      }, a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
      }, a.Callbacks) {
      var O = a.Deferred,
        P = [
          ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
          ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
        ];
      a.Deferred = function(b) {
        var c = O(),
          e = c.promise();
        return c.pipe = e.pipe = function() {
          var b = arguments;
          return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
            a.each(P, function(f, g) {
              var h = a.isFunction(b[f]) && b[f];
              c[g[1]](function() {
                var b = h && h.apply(this, arguments);
                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
              })
            }), b = null
          }).promise()
        }, c.isResolved = function() {
          return d("deferred.isResolved is deprecated"), "resolved" === c.state()
        }, c.isRejected = function() {
          return d("deferred.isRejected is deprecated"), "rejected" === c.state()
        }, b && b.call(c, c), c
      }
    }
  }(jQuery, window);

/* 1. sb-instagram.min.js
-----------------------------------------------------------------------------------------------*/
function sbi_init() {
  jQuery("#sb_instagram.sbi").each(function() {
    var t = jQuery(this),
      i = t.find("#sbi_images"),
      e = t.find("#sbi_load .sbi_load_btn"),
      s = "standard_resolution",
      o = parseInt(this.getAttribute("data-cols"), 10),
      n = this.getAttribute("data-num"),
      r = JSON.parse(this.getAttribute("data-options")),
      a = "user",
      l = "none",
      d = this.getAttribute("data-id"),
      n = this.getAttribute("data-num"),
      c = "",
      u = [];
    switch ("" !== r.sortby && (l = r.sortby), this.getAttribute("data-res")) {
      case "auto":
        var h = t.innerWidth(),
          p = t.innerWidth() / o,
          m = jQuery(window).width();
        640 > m && (640 > h && t.is(".sbi_col_3, .sbi_col_4, .sbi_col_5, .sbi_col_6") && (p = 300), 640 > h && t.is(".sbi_col_7, .sbi_col_8, .sbi_col_9, .sbi_col_10") && (p = 100), h > 320 && 480 > h && 480 > m && (p = 480), 320 > h && 480 > m && (p = 300)), s = 150 > p ? "thumbnail" : 320 > p ? "low_resolution" : "standard_resolution", 100 >= h && (s = "low_resolution");
        break;
      case "thumb":
        s = "thumbnail";
        break;
      case "medium":
        s = "low_resolution";
        break;
      default:
        s = "standard_resolution"
    }
    var f = d.replace(/ /g, "").split(","),
      g = f,
      b = "",
      _ = "https://api.instagram.com/v1/users/" + f[0] + "?access_token=" + sb_instagram_js_options.sb_instagram_at;
    r.headercolor.length && (b = 'style="color: #' + r.headercolor + '"'), jQuery.ajax({
      method: "GET",
      url: _,
      dataType: "jsonp",
      success: function(i) {
        c = '<a href="http://instagram.com/' + i.data.username + '" target="_blank" title="@' + i.data.username + '" class="sbi_header_link">', c += '<div class="sbi_header_text">', c += "<h3 " + b, 0 == i.data.bio.length && (c += ' class="sbi_no_bio"'), c += ">@" + i.data.username + "</h3>", i.data.bio.length && (c += '<p class="sbi_bio" ' + b + ">" + i.data.bio + "</p>"), c += "</div>", c += '<div class="sbi_header_img">', c += '<div class="sbi_header_img_hover"><i></i></div>', c += '<img src="' + i.data.profile_picture + '" alt="' + i.data.full_name + '" width="50" height="50">', c += "</div>", c += "</a>", t.find(".sb_instagram_header").prepend(c), t.find(".sbi_follow_btn").length && t.find(".sbi_follow_btn a").attr("href", "http://instagram.com/" + i.data.username)
      }
    }), jQuery.each(g, function(d, c) {
      var h = new instagramfeed({
        target: i,
        get: a,
        sortBy: l,
        resolution: s,
        limit: parseInt(n, 10),
        template: '<div class="sbi_item sbi_type_{{model.type}} sbi_new" id="sbi_{{id}}" data-date="{{model.created_time_raw}}"><div class="sbi_photo_wrap"><a class="sbi_photo" href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" width="200" height="200" /></a></div></div>',
        filter: function(t) {
          var i = new Date(1e3 * t.created_time),
            e = i.getTime();
          return t.created_time_raw = e, null != t.caption && (t.caption.text = t.caption.text.replace(/[^a-zA-Z ]/g, "")), t.images.thumbnail.url = t.images.thumbnail.url.split("?ig_cache_key")[0], t.images.standard_resolution.url = t.images.standard_resolution.url.split("?ig_cache_key")[0], t.images.low_resolution.url = t.images.low_resolution.url.split("?ig_cache_key")[0], !0
        },
        userId: parseInt(c, 10),
        accessToken: sb_instagram_js_options.sb_instagram_at,
        after: function() {
          function i() {
            if ("thumbnail" !== s) {
              var i = t.find(".sbi_photo").eq(0).innerWidth(),
                e = parseInt(o);
              if (!t.hasClass("sbi_disable_mobile")) {
                var n = jQuery(window).width();
                640 > n && parseInt(o) > 2 && parseInt(o) < 7 && (e = 2), 640 > n && parseInt(o) > 6 && parseInt(o) < 11 && (e = 4), 480 >= n && parseInt(o) > 2 && (e = 1)
              }
              var a = t.find("#sbi_images").width() / e - 2 * r.imagepadding;
              a >= i && (i = a), t.find(".sbi_photo").css("height", i)
            }
          }

          function n() {
            t.removeClass("sbi_small sbi_medium");
            var i = t.find(".sbi_item").innerWidth();
            i > 120 && 240 > i ? t.addClass("sbi_medium") : 120 >= i && t.addClass("sbi_small")
          }
          if (t.find(".sbi_loader").remove(), this.hasNext() && u.push("1"), u.length > 0 ? e.show() : (e.hide(), t.css("padding-bottom", 0)), "function" == typeof sbi_custom_js && setTimeout(function() {
              sbi_custom_js()
            }, 100), "thumbnail" !== s) {
            var a = a || {
              VER: "0.9.944"
            };
            a.bgs_Available = !1, a.bgs_CheckRunned = !1,
              function(t) {
                function i() {
                  if (!a.bgs_CheckRunned) {
                    a.bgs_CheckRunned = !0;
                    var i = t('<span style="background-size:cover" />');
                    t("body").append(i), ! function() {
                      var t = i[0];
                      if (t && window.getComputedStyle) {
                        var e = window.getComputedStyle(t, null);
                        e && e.backgroundSize && (a.bgs_Available = "cover" === e.backgroundSize)
                      }
                    }(), i.remove()
                  }
                }
                t.fn.extend({
                  sbi_imgLiquid: function(e) {
                    this.defaults = {
                      fill: !0,
                      verticalAlign: "center",
                      horizontalAlign: "center",
                      useBackgroundSize: !0,
                      useDataHtmlAttr: !0,
                      responsive: !0,
                      delay: 0,
                      fadeInTime: 0,
                      removeBoxBackground: !0,
                      hardPixels: !0,
                      responsiveCheckTime: 500,
                      timecheckvisibility: 500,
                      onStart: null,
                      onFinish: null,
                      onItemStart: null,
                      onItemFinish: null,
                      onItemError: null
                    }, i();
                    var s = this;
                    return this.options = e, this.settings = t.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function(i) {
                      function e() {
                        -1 === h.css("background-image").indexOf(encodeURI(p.attr("src"))) && h.css({
                          "background-image": 'url("' + encodeURI(p.attr("src")) + '")'
                        }), h.css({
                          "background-size": u.fill ? "cover" : "contain",
                          "background-position": (u.horizontalAlign + " " + u.verticalAlign).toLowerCase(),
                          "background-repeat": "no-repeat"
                        }), t("a:first", h).css({
                          display: "block",
                          width: "100%",
                          height: "100%"
                        }), t("img", h).css({
                          display: "none"
                        }), u.onItemFinish && u.onItemFinish(i, h, p), h.addClass("sbi_imgLiquid_bgSize"), h.addClass("sbi_imgLiquid_ready"), c()
                      }

                      function o() {
                        function e() {
                          p.data("sbi_imgLiquid_error") || p.data("sbi_imgLiquid_loaded") || p.data("sbi_imgLiquid_oldProcessed") || (h.is(":visible") && p[0].complete && p[0].width > 0 && p[0].height > 0 ? (p.data("sbi_imgLiquid_loaded", !0), setTimeout(d, i * u.delay)) : setTimeout(e, u.timecheckvisibility))
                        }
                        if (p.data("oldSrc") && p.data("oldSrc") !== p.attr("src")) {
                          var s = p.clone().removeAttr("style");
                          return s.data("sbi_imgLiquid_settings", p.data("sbi_imgLiquid_settings")), p.parent().prepend(s), p.remove(), p = s, p[0].width = 0, void setTimeout(o, 10)
                        }
                        return p.data("sbi_imgLiquid_oldProcessed") ? void d() : (p.data("sbi_imgLiquid_oldProcessed", !1), p.data("oldSrc", p.attr("src")), t("img:not(:first)", h).css("display", "none"), h.css({
                          overflow: "hidden"
                        }), p.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
                          visibility: "visible",
                          "max-width": "none",
                          "max-height": "none",
                          width: "auto",
                          height: "auto",
                          display: "block"
                        }), p.on("error", r), p[0].onerror = r, e(), void n())
                      }

                      function n() {
                        (u.responsive || p.data("sbi_imgLiquid_oldProcessed")) && p.data("sbi_imgLiquid_settings") && (u = p.data("sbi_imgLiquid_settings"), h.actualSize = h.get(0).offsetWidth + h.get(0).offsetHeight / 1e4, h.sizeOld && h.actualSize !== h.sizeOld && d(), h.sizeOld = h.actualSize, setTimeout(n, u.responsiveCheckTime))
                      }

                      function r() {
                        p.data("sbi_imgLiquid_error", !0), h.addClass("sbi_imgLiquid_error"), u.onItemError && u.onItemError(i, h, p), c()
                      }

                      function l() {
                        var t = {};
                        if (s.settings.useDataHtmlAttr) {
                          var i = h.attr("data-sbi_imgLiquid-fill"),
                            e = h.attr("data-sbi_imgLiquid-horizontalAlign"),
                            o = h.attr("data-sbi_imgLiquid-verticalAlign");
                          ("true" === i || "false" === i) && (t.fill = Boolean("true" === i)), void 0 === e || "left" !== e && "center" !== e && "right" !== e && -1 === e.indexOf("%") || (t.horizontalAlign = e), void 0 === o || "top" !== o && "bottom" !== o && "center" !== o && -1 === o.indexOf("%") || (t.verticalAlign = o)
                        }
                        return a.isIE && s.settings.ieFadeInDisabled && (t.fadeInTime = 0), t
                      }

                      function d() {
                        var t, e, s, o, n, r, a, l, d = 0,
                          m = 0,
                          f = h.width(),
                          g = h.height();
                        void 0 === p.data("owidth") && p.data("owidth", p[0].width), void 0 === p.data("oheight") && p.data("oheight", p[0].height), u.fill === f / g >= p.data("owidth") / p.data("oheight") ? (t = "100%", e = "auto", s = Math.floor(f), o = Math.floor(f * (p.data("oheight") / p.data("owidth")))) : (t = "auto", e = "100%", s = Math.floor(g * (p.data("owidth") / p.data("oheight"))), o = Math.floor(g)), n = u.horizontalAlign.toLowerCase(), a = f - s, "left" === n && (m = 0), "center" === n && (m = .5 * a), "right" === n && (m = a), -1 !== n.indexOf("%") && (n = parseInt(n.replace("%", ""), 10), n > 0 && (m = a * n * .01)), r = u.verticalAlign.toLowerCase(), l = g - o, "left" === r && (d = 0), "center" === r && (d = .5 * l), "bottom" === r && (d = l), -1 !== r.indexOf("%") && (r = parseInt(r.replace("%", ""), 10), r > 0 && (d = l * r * .01)), u.hardPixels && (t = s, e = o), p.css({
                          width: t,
                          height: e,
                          "margin-left": Math.floor(m),
                          "margin-top": Math.floor(d)
                        }), p.data("sbi_imgLiquid_oldProcessed") || (p.fadeTo(u.fadeInTime, 1), p.data("sbi_imgLiquid_oldProcessed", !0), u.removeBoxBackground && h.css("background-image", "none"), h.addClass("sbi_imgLiquid_nobgSize"), h.addClass("sbi_imgLiquid_ready")), u.onItemFinish && u.onItemFinish(i, h, p), c()
                      }

                      function c() {
                        i === s.length - 1 && s.settings.onFinish && s.settings.onFinish()
                      }
                      var u = s.settings,
                        h = t(this),
                        p = t("img:first", h);
                      return p.length ? (p.data("sbi_imgLiquid_settings") ? (h.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"), u = t.extend({}, p.data("sbi_imgLiquid_settings"), s.options)) : u = t.extend({}, s.settings, l()), p.data("sbi_imgLiquid_settings", u), u.onItemStart && u.onItemStart(i, h, p), void(a.bgs_Available && u.useBackgroundSize ? e() : o())) : void r()
                    })
                  }
                })
              }(jQuery), ! function() {
                var t = a.injectCss,
                  i = document.getElementsByTagName("head")[0],
                  e = document.createElement("style");
                e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), i.appendChild(e)
              }(), t.find(".sbi_photo").sbi_imgLiquid({
                fill: !0
              })
          }
          var d = function() {
            var t = 0;
            return function(i, e) {
              clearTimeout(t), t = setTimeout(i, e)
            }
          }();
          jQuery(window).resize(function() {
            d(function() {
              i()
            }, 500)
          }), i(), ! function(t) {
            var i = {
                callback: function() {},
                runOnLoad: !0,
                frequency: 100,
                sbiPreviousVisibility: null
              },
              e = {};
            e.sbiCheckVisibility = function(t, i) {
              if (jQuery.contains(document, t[0])) {
                var s = i.sbiPreviousVisibility,
                  o = t.is(":visible");
                i.sbiPreviousVisibility = o, null == s ? i.runOnLoad && i.callback(t, o) : s !== o && i.callback(t, o), setTimeout(function() {
                  e.sbiCheckVisibility(t, i)
                }, i.frequency)
              }
            }, t.fn.sbiVisibilityChanged = function(s) {
              var o = t.extend({}, i, s);
              return this.each(function() {
                e.sbiCheckVisibility(t(this), o)
              })
            }
          }(jQuery), jQuery(".sbi").filter(":hidden").sbiVisibilityChanged({
            callback: function(t, e) {
              i()
            },
            runOnLoad: !1
          }), jQuery("#sb_instagram .sbi_photo").each(function() {
            $sbi_photo = jQuery(this), $sbi_photo.hover(function() {
              jQuery(this).fadeTo(200, .85)
            }, function() {
              jQuery(this).stop().fadeTo(500, 1)
            }), $sbi_photo.closest(".sbi_item").hasClass("sbi_type_video") && ($sbi_photo.find(".sbi_playbtn").length || $sbi_photo.append('<i class="fa fa-play sbi_playbtn"></i>'))
          }), t.find("#sbi_images .sbi_item.sbi_new").sort(function(t, i) {
            var e = jQuery(t).data("date"),
              s = jQuery(i).data("date");
            return "none" == l ? s - e : Math.round(Math.random()) - .5
          }).appendTo(t.find("#sbi_images")), setTimeout(function() {
            jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new"), u = []
          }, 500), n()
        },
        error: function(t) {
          var i = "",
            e = "";
          t.indexOf("access_token") > -1 ? (i += "<p><b>Error: Access Token is not valid</b><br /><span>This error message is only visible to WordPress admins</span>", e = "<p>There's an issue with the Instagram Access Token that you are using. Please obtain a new Access Token on the plugin's Settings page.<br />If you continue to have an issue with your Access Token then please see <a href='https://smashballoon.com/my-instagram-access-token-keep-expiring/' target='_blank'>this FAQ</a> for more information.") : t.indexOf("user does not exist") > -1 && (i += "<p><b>Error: The User ID does not exist</b><br /><span>This error is only visible to WordPress admins</span>", e = "<p>Please double check the Instagram User ID that you are using. To find your User ID simply enter your Instagram user name into this <a href='http://www.otzberg.net/iguserid/' target='_blank'>tool</a>.</p>"), g.length < 2 && jQuery("#sb_instagram").empty().append('<p style="text-align: center;">Unable to show Instagram photos</p><div id="sbi_mod_error">' + i + e + "</div>")
        }
      });
      e.click(function() {
        h.next()
      }), h.run()
    })
  })
}
var sbi_js_exists = "undefined" != typeof sbi_js_exists ? !0 : !1;
sbi_js_exists || (function() {
  var t, i;
  t = function() {
    function t(t, i) {
      var e, s;
      if (this.options = {
          target: "instafeed",
          get: "popular",
          resolution: "thumbnail",
          sortBy: "none",
          links: !0,
          mock: !1,
          useHttp: !1
        }, "object" == typeof t)
        for (e in t) s = t[e], this.options[e] = s;
      this.context = null != i ? i : this, this.unique = this._genKey()
    }
    return t.prototype.hasNext = function() {
      return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
    }, t.prototype.next = function() {
      return this.hasNext() ? this.run(this.context.nextUrl) : !1
    }, t.prototype.run = function(i) {
      var e, s, o;
      if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
      if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
      return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = i || this._buildUrl(), e = document.getElementsByTagName("head"), e[0].appendChild(o), s = "instafeedCache" + this.unique, window[s] = new t(this.options, this), window[s].unique = this.unique), !0
    }, t.prototype.parse = function(t) {
      var i, e, s, o, n, r, a, l, d, c, u, h, p, m, f, g, b, _, y, v, w, k;
      if ("object" != typeof t) {
        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
        throw new Error("Invalid JSON response")
      }
      if (200 !== t.meta.code) {
        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
        throw new Error("Error from Instagram: " + t.meta.error_message)
      }
      if (0 === t.data.length) {
        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
        throw new Error("No images were returned from Instagram")
      }
      if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (m = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), p = "least" === m[0] ? !0 : !1, m[1]) {
        case "random":
          t.data.sort(function() {
            return .5 - Math.random()
          });
          break;
        case "recent":
          t.data = this._sortBy(t.data, "created_time", p);
          break;
        case "liked":
          t.data = this._sortBy(t.data, "likes.count", p);
          break;
        case "commented":
          t.data = this._sortBy(t.data, "comments.count", p);
          break;
        default:
          throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
      }
      if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
        if (l = t.data, null != this.options.limit && l.length > this.options.limit && (l = l.slice(0, this.options.limit + 1 || 9e9)), e = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (l = this._filter(l, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
          for (o = "", r = "", c = "", f = document.createElement("div"), g = 0, y = l.length; y > g; g++) n = l[g], a = n.images[this.options.resolution].url, this.options.useHttp || (a = a.replace("http://", "//")), r = this._makeTemplate(this.options.template, {
            model: n,
            id: n.id,
            link: n.link,
            image: a,
            caption: this._getObjectProperty(n, "caption.text"),
            likes: n.likes.count,
            comments: n.comments.count,
            location: this._getObjectProperty(n, "location.name")
          }), o += r;
          for (f.innerHTML = o, k = [].slice.call(f.childNodes), b = 0, v = k.length; v > b; b++) h = k[b], e.appendChild(h)
        } else
          for (_ = 0, w = l.length; w > _; _++) n = l[_], d = document.createElement("img"), a = n.images[this.options.resolution].url, this.options.useHttp || (a = a.replace("http://", "//")), d.src = a, this.options.links === !0 ? (i = document.createElement("a"), i.href = n.link, i.appendChild(d), e.appendChild(i)) : e.appendChild(d);
        this.options.target.append(e), s = document.getElementsByTagName("head")[0], s.removeChild(document.getElementById("instafeed-fetcher")), u = "instafeedCache" + this.unique, window[u] = void 0;
        try {
          delete window[u]
        } catch (I) {}
      }
      return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
    }, t.prototype._buildUrl = function() {
      var t, i, e;
      switch (t = "https://api.instagram.com/v1", this.options.get) {
        case "popular":
          i = "media/popular";
          break;
        case "tagged":
          if ("string" != typeof this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
          i = "tags/" + this.options.tagName + "/media/recent";
          break;
        case "location":
          if ("number" != typeof this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
          i = "locations/" + this.options.locationId + "/media/recent";
          break;
        case "user":
          if ("number" != typeof this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
          if ("string" != typeof this.options.accessToken) throw new Error("No access token. Use the 'accessToken' option.");
          i = "users/" + this.options.userId + "/media/recent";
          break;
        default:
          throw new Error("Invalid option for get: '" + this.options.get + "'.")
      }
      return e = "" + t + "/" + i, e += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (e += "&count=" + this.options.limit), e += "&callback=instafeedCache" + this.unique + ".parse"
    }, t.prototype._genKey = function() {
      var t;
      return t = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
      }, "" + t() + t() + t() + t()
    }, t.prototype._makeTemplate = function(t, i) {
      var e, s, o, n, r;
      for (s = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, e = t; s.test(e);) o = e.match(s)[1], n = null != (r = this._getObjectProperty(i, o)) ? r : "", e = e.replace(s, "" + n);
      return e
    }, t.prototype._getObjectProperty = function(t, i) {
      var e, s;
      for (i = i.replace(/\[(\w+)\]/g, ".$1"), s = i.split("."); s.length;) {
        if (e = s.shift(), !(null != t && e in t)) return null;
        t = t[e]
      }
      return t
    }, t.prototype._sortBy = function(t, i, e) {
      var s;
      return s = function(t, s) {
        var o, n;
        return o = this._getObjectProperty(t, i), n = this._getObjectProperty(s, i), e ? o > n ? 1 : -1 : n > o ? 1 : -1
      }, t.sort(s.bind(this)), t
    }, t.prototype._filter = function(t, i) {
      var e, s, o, n, r;
      for (e = [], o = function(t) {
          return i(t) ? e.push(t) : void 0
        }, n = 0, r = t.length; r > n; n++) s = t[n], o(s);
      return e
    }, t
  }(), i = "undefined" != typeof exports && null !== exports ? exports : window, i.instagramfeed = t
}.call(this), function() {
  var t = Array.prototype.slice;
  try {
    t.call(document.documentElement)
  } catch (i) {
    Array.prototype.slice = function(i, e) {
      if (e = "undefined" != typeof e ? e : this.length, "[object Array]" === Object.prototype.toString.call(this)) return t.call(this, i, e);
      var s, o, n = [],
        r = this.length,
        a = i || 0;
      a = a >= 0 ? a : r + a;
      var l = e ? e : r;
      if (0 > e && (l = r + e), o = l - a, o > 0)
        if (n = new Array(o), this.charAt)
          for (s = 0; o > s; s++) n[s] = this.charAt(a + s);
        else
          for (s = 0; o > s; s++) n[s] = this[a + s];
      return n
    }
  }
}(), Function.prototype.bind || (Function.prototype.bind = function(t) {
  if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  var i = Array.prototype.slice.call(arguments, 1),
    e = this,
    s = function() {},
    o = function() {
      return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
    };
  return s.prototype = this.prototype, o.prototype = new s, o
}), jQuery(document).ready(function() {
  sbi_init()
}));

/* 2. swiper.jquery.min.js
-----------------------------------------------------------------------------------------------*/
! function() {
  "use strict";

  function e(e) {
    e.fn.swiper = function(a) {
      var s;
      return e(this).each(function() {
        var e = new t(this, a);
        s || (s = e)
      }), s
    }
  }
  var a, t = function(e, s) {
    function r() {
      return "horizontal" === v.params.direction
    }

    function i(e) {
      return Math.floor(e)
    }

    function n() {
      v.autoplayTimeoutId = setTimeout(function() {
        v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
      }, v.params.autoplay)
    }

    function o(e, t) {
      var s = a(e.target);
      if (!s.is(t))
        if ("string" == typeof t) s = s.parents(t);
        else if (t.nodeType) {
        var r;
        return s.parents().each(function(e, a) {
          a === t && (r = t)
        }), r ? t : void 0
      }
      return 0 === s.length ? void 0 : s[0]
    }

    function l(e, a) {
      a = a || {};
      var t = window.MutationObserver || window.WebkitMutationObserver,
        s = new t(function(e) {
          e.forEach(function(e) {
            v.onResize(!0), v.emit("onObserverUpdate", v, e)
          })
        });
      s.observe(e, {
        attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
        childList: "undefined" == typeof a.childList ? !0 : a.childList,
        characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
      }), v.observers.push(s)
    }

    function p(e) {
      e.originalEvent && (e = e.originalEvent);
      var a = e.keyCode || e.charCode;
      if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a)) return !1;
      if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a)) return !1;
      if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;
          if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
          var s = {
              left: window.pageXOffset,
              top: window.pageYOffset
            },
            i = window.innerWidth,
            n = window.innerHeight,
            o = v.container.offset();
          v.rtl && (o.left = o.left - v.container[0].scrollLeft);
          for (var l = [
              [o.left, o.top],
              [o.left + v.width, o.top],
              [o.left, o.top + v.height],
              [o.left + v.width, o.top + v.height]
            ], p = 0; p < l.length; p++) {
            var d = l[p];
            d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
          }
          if (!t) return
        }
        r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
      }
    }

    function d(e) {
      e.originalEvent && (e = e.originalEvent);
      var a = v.mousewheel.event,
        t = 0;
      if (e.detail) t = -e.detail;
      else if ("mousewheel" === a)
        if (v.params.mousewheelForceToAxis)
          if (r()) {
            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
            t = e.wheelDeltaX
          } else {
            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
            t = e.wheelDeltaY
          }
      else t = e.wheelDelta;
      else if ("DOMMouseScroll" === a) t = -e.detail;
      else if ("wheel" === a)
        if (v.params.mousewheelForceToAxis)
          if (r()) {
            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
            t = -e.deltaX
          } else {
            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
            t = -e.deltaY
          }
      else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
      if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
        var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity;
        if (s > 0 && (s = 0), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() {
            v.slideReset()
          }, 300)), 0 === s || s === v.maxTranslate()) return
      } else {
        if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)
          if (0 > t)
            if (v.isEnd && !v.params.loop || v.animating) {
              if (v.params.mousewheelReleaseOnEdges) return !0
            } else v.slideNext();
        else if (v.isBeginning && !v.params.loop || v.animating) {
          if (v.params.mousewheelReleaseOnEdges) return !0
        } else v.slidePrev();
        v.mousewheel.lastScrollTime = (new window.Date).getTime()
      }
      return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
    }

    function u(e, t) {
      e = a(e);
      var s, i, n;
      s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
    }

    function c(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
    }
    if (!(this instanceof t)) return new t(e, s);
    var m = {
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        autoplay: !1,
        autoplayDisableOnInteraction: !0,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeSticky: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        },
        cube: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        },
        fade: {
          crossFade: !1
        },
        parallax: !1,
        scrollbar: null,
        scrollbarHide: !0,
        keyboardControl: !1,
        mousewheelControl: !1,
        mousewheelReleaseOnEdges: !1,
        mousewheelInvert: !1,
        mousewheelForceToAxis: !1,
        mousewheelSensitivity: 1,
        hashnav: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        onlyExternal: !1,
        threshold: 0,
        touchMoveStopPropagation: !0,
        pagination: null,
        paginationElement: "span",
        paginationClickable: !1,
        paginationHide: !1,
        paginationBulletRender: null,
        resistance: !0,
        resistanceRatio: .85,
        nextButton: null,
        prevButton: null,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        lazyLoading: !1,
        lazyLoadingInPrevNext: !1,
        lazyLoadingOnTransitionStart: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        control: void 0,
        controlInverse: !1,
        controlBy: "slide",
        allowSwipeToPrev: !0,
        allowSwipeToNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        buttonDisabledClass: "swiper-button-disabled",
        paginationHiddenClass: "swiper-pagination-hidden",
        observer: !1,
        observeParents: !1,
        a11y: !1,
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        runCallbacksOnInit: !0
      },
      f = s && s.virtualTranslate;
    s = s || {};
    for (var h in m)
      if ("undefined" == typeof s[h]) s[h] = m[h];
      else if ("object" == typeof s[h])
      for (var g in m[h]) "undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
    var v = this;
    if (v.version = "3.1.0", v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
      if (v.container.length > 1) return void v.container.each(function() {
        new t(this, s)
      });
      v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function() {
        v.params.allowSwipeToNext = !1
      }, v.lockSwipeToPrev = function() {
        v.params.allowSwipeToPrev = !1
      }, v.lockSwipes = function() {
        v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
      }, v.unlockSwipeToNext = function() {
        v.params.allowSwipeToNext = !0
      }, v.unlockSwipeToPrev = function() {
        v.params.allowSwipeToPrev = !0
      }, v.unlockSwipes = function() {
        v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
      }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function(e, a, t, s) {
        function r() {
          s && s()
        }
        var i;
        e.complete && t ? r() : a ? (i = new window.Image, i.onload = r, i.onerror = r, i.src = a) : r()
      }, v.preloadImages = function() {
        function e() {
          "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
        }
        v.imagesToLoad = v.container.find("img");
        for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), !0, e)
      }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function() {
        return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
      }, v.stopAutoplay = function(e) {
        v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
      }, v.pauseAutoplay = function(e) {
        v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function() {
          v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
        }))
      }, v.minTranslate = function() {
        return -v.snapGrid[0]
      }, v.maxTranslate = function() {
        return -v.snapGrid[v.snapGrid.length - 1]
      }, v.updateContainerSize = function() {
        var e, a;
        e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
      }, v.updateSlidesSize = function() {
        v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
        var e, a = v.params.spaceBetween,
          t = -v.params.slidesOffsetBefore,
          s = 0,
          n = 0;
        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.slides.css(v.rtl ? {
          marginLeft: "",
          marginTop: ""
        } : {
          marginRight: "",
          marginBottom: ""
        });
        var o;
        v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn);
        var l, p = v.params.slidesPerColumn,
          d = o / p,
          u = d - (v.params.slidesPerColumn * d - v.slides.length);
        for (e = 0; e < v.slides.length; e++) {
          l = 0;
          var c = v.slides.eq(e);
          if (v.params.slidesPerColumn > 1) {
            var m, f, h;
            "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > u || f === u && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, c.css({
              "-webkit-box-ordinal-group": m,
              "-moz-box-ordinal-group": m,
              "-ms-flex-order": m,
              "-webkit-order": m,
              order: m
            })) : (h = Math.floor(e / d), f = e - h * d), c.css({
              "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"
            }).attr("data-swiper-column", f).attr("data-swiper-row", h)
          }
          "none" !== c.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? c.outerWidth(!0) : c.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
        }
        v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
        var g;
        if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
            width: v.virtualSize + v.params.spaceBetween + "px"
          }), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(r() ? {
            width: v.virtualSize + v.params.spaceBetween + "px"
          } : {
            height: v.virtualSize + v.params.spaceBetween + "px"
          }), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
            width: v.virtualSize + v.params.spaceBetween + "px"
          }), v.params.centeredSlides)) {
          for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
          v.snapGrid = g
        }
        if (!v.params.centeredSlides) {
          for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
          v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
        }
        0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && v.slides.css(r() ? v.rtl ? {
          marginLeft: a + "px"
        } : {
          marginRight: a + "px"
        } : {
          marginBottom: a + "px"
        }), v.params.watchSlidesProgress && v.updateSlidesOffset()
      }, v.updateSlidesOffset = function() {
        for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
      }, v.updateSlidesProgress = function(e) {
        if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
          "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
          var a = -e;
          v.rtl && (a = e); {
            v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom"
          }
          v.slides.removeClass(v.params.slideVisibleClass);
          for (var t = 0; t < v.slides.length; t++) {
            var s = v.slides[t],
              i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
            if (v.params.watchSlidesVisibility) {
              var n = -(a - s.swiperSlideOffset),
                o = n + v.slidesSizesGrid[t],
                l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
              l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
            }
            s.progress = v.rtl ? -i : i
          }
        }
      }, v.updateProgress = function(e) {
        "undefined" == typeof e && (e = v.translate || 0);
        var a = v.maxTranslate() - v.minTranslate();
        0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
      }, v.updateActiveIndex = function() {
        var e, a, t, s = v.rtl ? v.translate : -v.translate;
        for (a = 0; a < v.slidesGrid.length; a++) "undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
        (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
      }, v.updateClasses = function() {
        v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
        var e = v.slides.eq(v.activeIndex);
        if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
          v.bullets.removeClass(v.params.bulletActiveClass);
          var t;
          v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function() {
            a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
          }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
        }
        v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
      }, v.updatePagination = function() {
        if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
          for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
          v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
        }
      }, v.update = function(e) {
        function a() {
          s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
        }
        if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
          var t, s;
          v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
        }
      }, v.onResize = function(e) {
        var a = v.params.allowSwipeToPrev,
          t = v.params.allowSwipeToNext;
        if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
          var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
          v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
        } else v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
        v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
      };
      var w = ["mousedown", "mousemove", "mouseup"];
      window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
        start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
        move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
        end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
      }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function(e) {
        var t = e ? "off" : "on",
          r = e ? "removeEventListener" : "addEventListener",
          i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
          n = v.support.touch ? i : document,
          o = v.params.nested ? !0 : !1;
        v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
      }, v.attachEvents = function(e) {
        v.initEvents()
      }, v.detachEvents = function() {
        v.initEvents(!0)
      }, v.allowClick = !0, v.preventClicks = function(e) {
        v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }, v.onClickNext = function(e) {
        e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
      }, v.onClickPrev = function(e) {
        e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
      }, v.onClickIndex = function(e) {
        e.preventDefault();
        var t = a(this).index() * v.params.slidesPerGroup;
        v.params.loop && (t += v.loopedSlides), v.slideTo(t)
      }, v.updateClickedSlide = function(e) {
        var t = o(e, "." + v.params.slideClass),
          s = !1;
        if (t)
          for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (s = !0);
        if (!t || !s) return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
        if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
          var i, n = v.clickedIndex;
          if (v.params.loop)
            if (i = a(v.clickedSlide).attr("data-swiper-slide-index"), n > v.slides.length - v.params.slidesPerView) v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(), setTimeout(function() {
              v.slideTo(n)
            }, 0);
            else if (n < v.params.slidesPerView - 1) {
            v.fixLoop();
            var l = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
            n = l.eq(l.length - 1).index(), setTimeout(function() {
              v.slideTo(n)
            }, 0)
          } else v.slideTo(n);
          else v.slideTo(n)
        }
      };
      var y, x, b, T, S, C, M, P, z, I = "input, select, textarea, button",
        E = Date.now(),
        k = [];
      v.animating = !1, v.touches = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      };
      var D, G;
      if (v.onTouchStart = function(e) {
          if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
            if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
            if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
              var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
              if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                if (y = !0, x = !1, T = void 0, G = void 0, v.touches.startX = t, v.touches.startY = s, b = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                  var r = !0;
                  a(e.target).is(I) && (r = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault()
                }
                v.emit("onTouchStart", v, e)
              }
            }
          }
        }, v.onTouchMove = function(e) {
          if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
            if (v.params.onlyExternal) return v.allowClick = !1, void(y && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, b = Date.now()));
            if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return x = !0, void(v.allowClick = !1);
            if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
              if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
              }
              if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof G && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (G = !0), y) {
                if (T) return void(y = !1);
                if (G || !v.browser.ieTouch) {
                  v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), x || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), x = !0;
                  var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                  i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                  var n = !0;
                  if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                    if (v.params.threshold > 0) {
                      if (!(Math.abs(i) > v.params.threshold || M)) return void(S = C);
                      if (!M) return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                    }(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === k.length && k.push({
                      position: v.touches[r() ? "startX" : "startY"],
                      time: b
                    }), k.push({
                      position: v.touches[r() ? "currentX" : "currentY"],
                      time: (new window.Date).getTime()
                    })), v.updateProgress(S), v.setWrapperTranslate(S)
                  }
                }
              }
            }
          }
        }, v.onTouchEnd = function(e) {
          if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), y) {
            v.params.grabCursor && x && y && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
            var t = Date.now(),
              s = t - b;
            if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
              }, 300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function() {
                v && (v.allowClick = !0)
              }, 0), !y || !x || !v.swipeDirection || 0 === v.touches.diff || S === C) return void(y = x = !1);
            y = x = !1;
            var r;
            if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
              if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
              if (r > -v.maxTranslate()) return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
              if (v.params.freeModeMomentum) {
                if (k.length > 1) {
                  var i = k.pop(),
                    n = k.pop(),
                    o = i.position - n.position,
                    l = i.time - n.time;
                  v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < .02 && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                } else v.velocity = 0;
                k.length = 0;
                var p = 1e3 * v.params.freeModeMomentumRatio,
                  d = v.velocity * p,
                  u = v.translate + d;
                v.rtl && (u = -u);
                var c, m = !1,
                  f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                if (u < v.maxTranslate()) v.params.freeModeMomentumBounce ? (u + v.maxTranslate() < -f && (u = v.maxTranslate() - f), c = v.maxTranslate(), m = !0, z = !0) : u = v.maxTranslate();
                else if (u > v.minTranslate()) v.params.freeModeMomentumBounce ? (u - v.minTranslate() > f && (u = v.minTranslate() + f), c = v.minTranslate(), m = !0, z = !0) : u = v.minTranslate();
                else if (v.params.freeModeSticky) {
                  var h, g = 0;
                  for (g = 0; g < v.snapGrid.length; g += 1)
                    if (v.snapGrid[g] > -u) {
                      h = g;
                      break
                    } u = Math.abs(v.snapGrid[h] - u) < Math.abs(v.snapGrid[h - 1] - u) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (u = -u)
                }
                if (0 !== v.velocity) p = Math.abs(v.rtl ? (-u - v.translate) / v.velocity : (u - v.translate) / v.velocity);
                else if (v.params.freeModeSticky) return void v.slideReset();
                v.params.freeModeMomentumBounce && m ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                  v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(c), v.wrapper.transitionEnd(function() {
                    v && v.onTransitionEnd()
                  }))
                })) : v.velocity ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                  v && v.onTransitionEnd()
                }))) : v.updateProgress(u), v.updateActiveIndex()
              }
              return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
            }
            var w, T = 0,
              M = v.slidesSizesGrid[0];
            for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup) "undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
            var I = (r - v.slidesGrid[T]) / M;
            if (s > v.params.longSwipesMs) {
              if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
              "next" === v.swipeDirection && v.slideTo(I >= v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T), "prev" === v.swipeDirection && v.slideTo(I > 1 - v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T)
            } else {
              if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
              "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T)
            }
          }
        }, v._slideTo = function(e, a) {
          return v.slideTo(e, a, !0, !0)
        }, v.slideTo = function(e, a, t, s) {
          "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
          var i = -v.snapGrid[v.snapIndex];
          v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
          for (var n = 0; n < v.slidesGrid.length; n++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
          if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return !1;
          if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return !1;
          if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(), !1;
          v.updateClasses(), v.onTransitionStart(t);
          r() ? i : 0, r() ? 0 : i;
          return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
            v && v.onTransitionEnd(t)
          }))), !0
        }, v.onTransitionStart = function(e) {
          "undefined" == typeof e && (e = !0),
            v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
        }, v.onTransitionEnd = function(e) {
          v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash()
        }, v.slideNext = function(e, a, t) {
          if (v.params.loop) {
            if (v.animating) return !1;
            v.fixLoop(); {
              v.container[0].clientLeft
            }
            return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
          }
          return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
        }, v._slideNext = function(e) {
          return v.slideNext(!0, e, !0)
        }, v.slidePrev = function(e, a, t) {
          if (v.params.loop) {
            if (v.animating) return !1;
            v.fixLoop(); {
              v.container[0].clientLeft
            }
            return v.slideTo(v.activeIndex - 1, a, e, t)
          }
          return v.slideTo(v.activeIndex - 1, a, e, t)
        }, v._slidePrev = function(e) {
          return v.slidePrev(!0, e, !0)
        }, v.slideReset = function(e, a, t) {
          return v.slideTo(v.activeIndex, a, e)
        }, v.setWrapperTransition = function(e, a) {
          v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
        }, v.setWrapperTranslate = function(e, a, t) {
          var s = 0,
            i = 0,
            n = 0;
          r() ? s = v.rtl ? -e : e : i = e, v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + s + "px, " + i + "px, " + n + "px)" : "translate(" + s + "px, " + i + "px)"), v.translate = r() ? s : i, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
        }, v.getTranslate = function(e, a) {
          var t, s, r, i;
          return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), v.rtl && s && (s = -s), s || 0)
        }, v.getWrapperTranslate = function(e) {
          return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
        }, v.observers = [], v.initObservers = function() {
          if (v.params.observeParents)
            for (var e = v.container.parents(), a = 0; a < e.length; a++) l(e[a]);
          l(v.container[0], {
            childList: !1
          }), l(v.wrapper[0], {
            attributes: !1
          })
        }, v.disconnectObservers = function() {
          for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
          v.observers = []
        }, v.createLoop = function() {
          v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
          var e = v.wrapper.children("." + v.params.slideClass);
          "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
          var t, s = [],
            r = [];
          for (e.each(function(t, i) {
              var n = a(this);
              t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
            }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
          for (t = s.length - 1; t >= 0; t--) v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
        }, v.destroyLoop = function() {
          v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
        }, v.fixLoop = function() {
          var e;
          v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
        }, v.appendSlide = function(e) {
          if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
            for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
          else v.wrapper.append(e);
          v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
        }, v.prependSlide = function(e) {
          v.params.loop && v.destroyLoop();
          var a = v.activeIndex + 1;
          if ("object" == typeof e && e.length) {
            for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
            a = v.activeIndex + e.length
          } else v.wrapper.prepend(e);
          v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
        }, v.removeSlide = function(e) {
          v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
          var a, t = v.activeIndex;
          if ("object" == typeof e && e.length) {
            for (var s = 0; s < e.length; s++) a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
            t = Math.max(t, 0)
          } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
          v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
        }, v.removeAllSlides = function() {
          for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
          v.removeSlide(e)
        }, v.effects = {
          fade: {
            setTranslate: function() {
              for (var e = 0; e < v.slides.length; e++) {
                var a = v.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;
                v.params.virtualTranslate || (s -= v.translate);
                var i = 0;
                r() || (i = s, s = 0);
                var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                a.css({
                  opacity: n
                }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
              }
            },
            setTransition: function(e) {
              if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                var a = !1;
                v.slides.transitionEnd(function() {
                  if (!a && v) {
                    a = !0, v.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t])
                  }
                })
              }
            }
          },
          cube: {
            setTranslate: function() {
              var e, t = 0;
              v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                height: v.width + "px"
              })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
              for (var s = 0; s < v.slides.length; s++) {
                var i = v.slides.eq(s),
                  n = 90 * s,
                  o = Math.floor(n / 360);
                v.rtl && (n = -n, o = Math.floor(-n / 360));
                var l = Math.max(Math.min(i[0].progress, 1), -1),
                  p = 0,
                  d = 0,
                  u = 0;
                s % 4 === 0 ? (p = 4 * -o * v.size, u = 0) : (s - 1) % 4 === 0 ? (p = 0, u = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, u = v.size) : (s - 3) % 4 === 0 && (p = -v.size, u = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                var c = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + u + "px)";
                if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(c), v.params.cube.slideShadows) {
                  var m = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                    f = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                  0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f)); {
                    i[0].progress
                  }
                  m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                }
              }
              if (v.wrapper.css({
                  "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                  "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                  "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                  "transform-origin": "50% 50% -" + v.size / 2 + "px"
                }), v.params.cube.shadow)
                if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                else {
                  var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                    g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                    w = v.params.cube.shadowScale,
                    y = v.params.cube.shadowScale / g,
                    x = v.params.cube.shadowOffset;
                  e.transform("scale3d(" + w + ", 1, " + y + ") translate3d(0px, " + (v.height / 2 + x) + "px, " + -v.height / 2 / y + "px) rotateX(-90deg)")
                } var b = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
              v.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
            },
            setTransition: function(e) {
              v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
            }
          },
          coverflow: {
            setTranslate: function() {
              for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                var l = v.slides.eq(n),
                  p = v.slidesSizesGrid[n],
                  d = l[0].swiperSlideOffset,
                  u = (t - d - p / 2) / p * v.params.coverflow.modifier,
                  c = r() ? s * u : 0,
                  m = r() ? 0 : s * u,
                  f = -i * Math.abs(u),
                  h = r() ? 0 : v.params.coverflow.stretch * u,
                  g = r() ? v.params.coverflow.stretch * u : 0;
                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0);
                var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, v.params.coverflow.slideShadows) {
                  var y = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                    x = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                  0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(y)), 0 === x.length && (x = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(x)), y.length && (y[0].style.opacity = u > 0 ? u : 0), x.length && (x[0].style.opacity = -u > 0 ? -u : 0)
                }
              }
              if (v.browser.ie) {
                var b = v.wrapper[0].style;
                b.perspectiveOrigin = t + "px 50%"
              }
            },
            setTransition: function(e) {
              v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
          }
        }, v.lazy = {
          initialImageLoaded: !1,
          loadImageInSlide: function(e, t) {
            if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
              var s = v.slides.eq(e),
                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
              !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || r.add(s[0]), 0 !== r.length && r.each(function() {
                var e = a(this);
                e.addClass("swiper-lazy-loading");
                var r = e.attr("data-background"),
                  i = e.attr("data-src");
                v.loadImage(e[0], i || r, !1, function() {
                  if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (e.attr("src", i), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                    var a = s.attr("data-swiper-slide-index");
                    if (s.hasClass(v.params.slideDuplicateClass)) {
                      var n = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                      v.lazy.loadImageInSlide(n.index(), !1)
                    } else {
                      var o = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                      v.lazy.loadImageInSlide(o.index(), !1)
                    }
                  }
                  v.emit("onLazyImageReady", v, s[0], e[0])
                }), v.emit("onLazyImageLoad", v, s[0], e[0])
              })
            }
          },
          load: function() {
            var e;
            if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
              v.lazy.loadImageInSlide(a(this).index())
            });
            else if (v.params.slidesPerView > 1)
              for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
            else v.lazy.loadImageInSlide(v.activeIndex);
            if (v.params.lazyLoadingInPrevNext)
              if (v.params.slidesPerView > 1) {
                for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
              } else {
                var t = v.wrapper.children("." + v.params.slideNextClass);
                t.length > 0 && v.lazy.loadImageInSlide(t.index());
                var s = v.wrapper.children("." + v.params.slidePrevClass);
                s.length > 0 && v.lazy.loadImageInSlide(s.index())
              }
          },
          onTransitionStart: function() {
            v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
          },
          onTransitionEnd: function() {
            v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
          }
        }, v.scrollbar = {
          set: function() {
            if (v.params.scrollbar) {
              var e = v.scrollbar;
              e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
            }
          },
          setTranslate: function() {
            if (v.params.scrollbar) {
              var e, a = v.scrollbar,
                t = (v.translate || 0, a.dragSize);
              e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (a.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                a.track[0].style.opacity = 0, a.track.transition(400)
              }, 1e3))
            }
          },
          setTransition: function(e) {
            v.params.scrollbar && v.scrollbar.drag.transition(e)
          }
        }, v.controller = {
          LinearSpline: function(e, a) {
            this.x = e, this.y = a, this.lastIndex = e.length - 1; {
              var t, s;
              this.x.length
            }
            this.interpolate = function(e) {
              return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
            };
            var r = function() {
              var e, a, t;
              return function(s, r) {
                for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                return e
              }
            }()
          },
          getInterpolateFunction: function(e) {
            v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
          },
          setTranslate: function(e, a) {
            function s(a) {
              e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex()
            }
            var r, i, n = v.params.control;
            if (v.isArray(n))
              for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
            else n instanceof t && a !== n && s(n)
          },
          setTransition: function(e, a) {
            function s(a) {
              a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
              }))
            }
            var r, i = v.params.control;
            if (v.isArray(i))
              for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
            else i instanceof t && a !== i && s(i)
          }
        }, v.hashnav = {
          init: function() {
            if (v.params.hashnav) {
              v.hashnav.initialized = !0;
              var e = document.location.hash.replace("#", "");
              if (e)
                for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                  var r = v.slides.eq(t),
                    i = r.attr("data-hash");
                  if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                    var n = r.index();
                    v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                  }
                }
            }
          },
          setHash: function() {
            v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
          }
        }, v.disableKeyboardControl = function() {
          a(document).off("keydown", p)
        }, v.enableKeyboardControl = function() {
          a(document).on("keydown", p)
        }, v.mousewheel = {
          event: !1,
          lastScrollTime: (new window.Date).getTime()
        }, v.params.mousewheelControl) {
        try {
          new window.WheelEvent("wheel"), v.mousewheel.event = "wheel"
        } catch (L) {}
        v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"), v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
      }
      v.disableMousewheelControl = function() {
        return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
      }, v.enableMousewheelControl = function() {
        return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
      }, v.parallax = {
        setTranslate: function() {
          v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
            u(this, v.progress)
          }), v.slides.each(function() {
            var e = a(this);
            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
              var a = Math.min(Math.max(e[0].progress, -1), 1);
              u(this, a)
            })
          })
        },
        setTransition: function(e) {
          "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
            var t = a(this),
              s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (s = 0), t.transition(s)
          })
        }
      }, v._plugins = [];
      for (var B in v.plugins) {
        var O = v.plugins[B](v, v.params[B]);
        O && v._plugins.push(O)
      }
      return v.callPlugins = function(e) {
        for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      }, v.emitterEventListeners = {}, v.emit = function(e) {
        v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        var a;
        if (v.emitterEventListeners[e])
          for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      }, v.on = function(e, a) {
        return e = c(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
      }, v.off = function(e, a) {
        var t;
        if (e = c(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [], v;
        if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
          for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
          return v
        }
      }, v.once = function(e, a) {
        e = c(e);
        var t = function() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
        };
        return v.on(e, t), v
      }, v.a11y = {
        makeFocusable: function(e) {
          return e.attr("tabIndex", "0"), e
        },
        addRole: function(e, a) {
          return e.attr("role", a), e
        },
        addLabel: function(e, a) {
          return e.attr("aria-label", a), e
        },
        disable: function(e) {
          return e.attr("aria-disabled", !0), e
        },
        enable: function(e) {
          return e.attr("aria-disabled", !1), e
        },
        onEnterKey: function(e) {
          13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage : v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage : v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
        },
        liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        notify: function(e) {
          var a = v.a11y.liveRegion;
          0 !== a.length && (a.html(""), a.html(e))
        },
        init: function() {
          if (v.params.nextButton) {
            var e = a(v.params.nextButton);
            v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
          }
          if (v.params.prevButton) {
            var t = a(v.params.prevButton);
            v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
          }
          a(v.container).append(v.a11y.liveRegion)
        },
        initPagination: function() {
          v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
            var e = a(this);
            v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
          })
        },
        destroy: function() {
          v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
        }
      }, v.init = function() {
        v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
      }, v.cleanupStyles = function() {
        v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
      }, v.destroy = function(e, a) {
        v.detachEvents(), v.stopAutoplay(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
      }, v.init(), v
    }
  };
  t.prototype = {
    isSafari: function() {
      var e = navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isArray: function(e) {
      return "[object Array]" === Object.prototype.toString.apply(e)
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
    },
    device: function() {
      var e = navigator.userAgent,
        a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        t = e.match(/(iPad).*OS\s([\d_]+)/),
        s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
      return {
        ios: t || r || s,
        android: a
      }
    }(),
    support: {
      touch: window.Modernizr && Modernizr.touch === !0 || function() {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
      }(),
      transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
        var e = document.createElement("div").style;
        return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
      }(),
      flexbox: function() {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
          if (a[t] in e) return !0
      }(),
      observer: function() {
        return "MutationObserver" in window || "WebkitMutationObserver" in window
      }()
    },
    plugins: {}
  };
  for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
  var i;
  i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
    function a(i) {
      if (i.target === this)
        for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
    }
    var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
      r = this;
    if (e)
      for (t = 0; t < s.length; t++) r.on(s[t], a);
    return this
  }), "transform" in i.fn || (i.fn.transform = function(e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;
      t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
    }
    return this
  }), "transition" in i.fn || (i.fn.transition = function(e) {
    "string" != typeof e && (e += "ms");
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;
      t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
    }
    return this
  })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
  return window.Swiper
});
//# sourceMappingURL=maps/swiper.jquery.min.js.map

/* 3. jquery.magnific-popup.min.js
-----------------------------------------------------------------------------------------------*/
;
(function(a) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], a)
  } else {
    if (typeof exports === "object") {
      a(require("jquery"))
    } else {
      a(window.jQuery || window.Zepto)
    }
  }
}(function(B) {
  var x = "Close",
    G = "BeforeClose",
    v = "AfterClose",
    M = "BeforeAppend",
    f = "MarkupParse",
    k = "Open",
    h = "Change",
    C = "mfp",
    d = "." + C,
    H = "mfp-ready",
    J = "mfp-removing",
    e = "mfp-prevent-close";
  var R, y = function() {},
    I = !!(window.jQuery),
    A, a = B(window),
    z, E, b, K;
  var i = function(V, W) {
      R.ev.on(C + V + d, W)
    },
    n = function(Z, W, X, V) {
      var Y = document.createElement("div");
      Y.className = "mfp-" + Z;
      if (X) {
        Y.innerHTML = X
      }
      if (!V) {
        Y = B(Y);
        if (W) {
          Y.appendTo(W)
        }
      } else {
        if (W) {
          W.appendChild(Y)
        }
      }
      return Y
    },
    O = function(W, V) {
      R.ev.triggerHandler(C + W, V);
      if (R.st.callbacks) {
        W = W.charAt(0).toLowerCase() + W.slice(1);
        if (R.st.callbacks[W]) {
          R.st.callbacks[W].apply(R, B.isArray(V) ? V : [V])
        }
      }
    },
    D = function(V) {
      if (V !== K || !R.currTemplate.closeBtn) {
        R.currTemplate.closeBtn = B(R.st.closeMarkup.replace("%title%", R.st.tClose));
        K = V
      }
      return R.currTemplate.closeBtn
    },
    s = function() {
      if (!B.magnificPopup.instance) {
        R = new y();
        R.init();
        B.magnificPopup.instance = R
      }
    },
    U = function() {
      var W = document.createElement("p").style,
        V = ["ms", "O", "Moz", "Webkit"];
      if (W.transition !== undefined) {
        return true
      }
      while (V.length) {
        if (V.pop() + "Transition" in W) {
          return true
        }
      }
      return false
    };
  y.prototype = {
    constructor: y,
    init: function() {
      var V = navigator.appVersion;
      R.isIE7 = V.indexOf("MSIE 7.") !== -1;
      R.isIE8 = V.indexOf("MSIE 8.") !== -1;
      R.isLowIE = R.isIE7 || R.isIE8;
      R.isAndroid = (/android/gi).test(V);
      R.isIOS = (/iphone|ipad|ipod/gi).test(V);
      R.supportsTransition = U();
      R.probablyMobile = (R.isAndroid || R.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
      z = B(document);
      R.popupsCache = {}
    },
    open: function(aa) {
      var ab;
      if (aa.isObj === false) {
        R.items = aa.items.toArray();
        R.index = 0;
        var ac = aa.items,
          ad;
        for (ab = 0; ab < ac.length; ab++) {
          ad = ac[ab];
          if (ad.parsed) {
            ad = ad.el[0]
          }
          if (ad === aa.el[0]) {
            R.index = ab;
            break
          }
        }
      } else {
        R.items = B.isArray(aa.items) ? aa.items : [aa.items];
        R.index = aa.index || 0
      }
      if (R.isOpen) {
        R.updateItemHTML();
        return
      }
      R.types = [];
      b = "";
      if (aa.mainEl && aa.mainEl.length) {
        R.ev = aa.mainEl.eq(0)
      } else {
        R.ev = z
      }
      if (aa.key) {
        if (!R.popupsCache[aa.key]) {
          R.popupsCache[aa.key] = {}
        }
        R.currTemplate = R.popupsCache[aa.key]
      } else {
        R.currTemplate = {}
      }
      R.st = B.extend(true, {}, B.magnificPopup.defaults, aa);
      R.fixedContentPos = R.st.fixedContentPos === "auto" ? !R.probablyMobile : R.st.fixedContentPos;
      if (R.st.modal) {
        R.st.closeOnContentClick = false;
        R.st.closeOnBgClick = false;
        R.st.showCloseBtn = false;
        R.st.enableEscapeKey = false
      }
      if (!R.bgOverlay) {
        R.bgOverlay = n("bg").on("click" + d, function() {
          R.close()
        });
        R.wrap = n("wrap").attr("tabindex", -1).on("click" + d, function(af) {
          if (R._checkIfClose(af.target)) {
            R.close()
          }
        });
        R.container = n("container", R.wrap)
      }
      R.contentContainer = n("content");
      if (R.st.preloader) {
        R.preloader = n("preloader", R.container, R.st.tLoading)
      }
      var Z = B.magnificPopup.modules;
      for (ab = 0; ab < Z.length; ab++) {
        var Y = Z[ab];
        Y = Y.charAt(0).toUpperCase() + Y.slice(1);
        R["init" + Y].call(R)
      }
      O("BeforeOpen");
      if (R.st.showCloseBtn) {
        if (!R.st.closeBtnInside) {
          R.wrap.append(D())
        } else {
          i(f, function(ai, ag, af, ah) {
            af.close_replaceWith = D(ah.type)
          });
          b += " mfp-close-btn-in"
        }
      }
      if (R.st.alignTop) {
        b += " mfp-align-top"
      }
      if (R.fixedContentPos) {
        R.wrap.css({
          overflow: R.st.overflowY,
          overflowX: "hidden",
          overflowY: R.st.overflowY
        })
      } else {
        R.wrap.css({
          top: a.scrollTop(),
          position: "absolute"
        })
      }
      if (R.st.fixedBgPos === false || (R.st.fixedBgPos === "auto" && !R.fixedContentPos)) {
        R.bgOverlay.css({
          height: z.height(),
          position: "absolute"
        })
      }
      if (R.st.enableEscapeKey) {
        z.on("keyup" + d, function(af) {
          if (af.keyCode === 27) {
            R.close()
          }
        })
      }
      a.on("resize" + d, function() {
        R.updateSize()
      });
      if (!R.st.closeOnContentClick) {
        b += " mfp-auto-cursor"
      }
      if (b) {
        R.wrap.addClass(b)
      }
      var V = R.wH = a.height();
      var X = {};
      if (R.fixedContentPos) {
        if (R._hasScrollBar(V)) {
          var ae = R._getScrollbarSize();
          if (ae) {
            X.marginRight = ae
          }
        }
      }
      if (R.fixedContentPos) {
        if (!R.isIE7) {
          X.overflow = "hidden"
        } else {
          B("body, html").css("overflow", "hidden")
        }
      }
      var W = R.st.mainClass;
      if (R.isIE7) {
        W += " mfp-ie7"
      }
      if (W) {
        R._addClassToMFP(W)
      }
      R.updateItemHTML();
      O("BuildControls");
      B("html").css(X);
      R.bgOverlay.add(R.wrap).prependTo(R.st.prependTo || B(document.body));
      R._lastFocusedEl = document.activeElement;
      setTimeout(function() {
        if (R.content) {
          R._addClassToMFP(H);
          R._setFocus()
        } else {
          R.bgOverlay.addClass(H)
        }
        z.on("focusin" + d, R._onFocusIn)
      }, 16);
      R.isOpen = true;
      R.updateSize(V);
      O(k);
      return aa
    },
    close: function() {
      if (!R.isOpen) {
        return
      }
      O(G);
      R.isOpen = false;
      if (R.st.removalDelay && !R.isLowIE && R.supportsTransition) {
        R._addClassToMFP(J);
        setTimeout(function() {
          R._close()
        }, R.st.removalDelay)
      } else {
        R._close()
      }
    },
    _close: function() {
      O(x);
      var V = J + " " + H + " ";
      R.bgOverlay.detach();
      R.wrap.detach();
      R.container.empty();
      if (R.st.mainClass) {
        V += R.st.mainClass + " "
      }
      R._removeClassFromMFP(V);
      if (R.fixedContentPos) {
        var W = {
          marginRight: ""
        };
        if (R.isIE7) {
          B("body, html").css("overflow", "")
        } else {
          W.overflow = ""
        }
        B("html").css(W)
      }
      z.off("keyup" + d + " focusin" + d);
      R.ev.off(d);
      R.wrap.attr("class", "mfp-wrap").removeAttr("style");
      R.bgOverlay.attr("class", "mfp-bg");
      R.container.attr("class", "mfp-container");
      if (R.st.showCloseBtn && (!R.st.closeBtnInside || R.currTemplate[R.currItem.type] === true)) {
        if (R.currTemplate.closeBtn) {
          R.currTemplate.closeBtn.detach()
        }
      }
      if (R.st.autoFocusLast && R._lastFocusedEl) {
        B(R._lastFocusedEl).focus()
      }
      R.currItem = null;
      R.content = null;
      R.currTemplate = null;
      R.prevHeight = 0;
      O(v)
    },
    updateSize: function(W) {
      if (R.isIOS) {
        var X = document.documentElement.clientWidth / window.innerWidth;
        var V = window.innerHeight * X;
        R.wrap.css("height", V);
        R.wH = V
      } else {
        R.wH = W || a.height()
      }
      if (!R.fixedContentPos) {
        R.wrap.css("height", R.wH)
      }
      O("Resize")
    },
    updateItemHTML: function() {
      var Y = R.items[R.index];
      R.contentContainer.detach();
      if (R.content) {
        R.content.detach()
      }
      if (!Y.parsed) {
        Y = R.parseEl(R.index)
      }
      var X = Y.type;
      O("BeforeChange", [R.currItem ? R.currItem.type : "", X]);
      R.currItem = Y;
      if (!R.currTemplate[X]) {
        var W = R.st[X] ? R.st[X].markup : false;
        O("FirstMarkupParse", W);
        if (W) {
          R.currTemplate[X] = B(W)
        } else {
          R.currTemplate[X] = true
        }
      }
      if (E && E !== Y.type) {
        R.container.removeClass("mfp-" + E + "-holder")
      }
      var V = R["get" + X.charAt(0).toUpperCase() + X.slice(1)](Y, R.currTemplate[X]);
      R.appendContent(V, X);
      Y.preloaded = true;
      O(h, Y);
      E = Y.type;
      R.container.prepend(R.contentContainer);
      O("AfterChange")
    },
    appendContent: function(V, W) {
      R.content = V;
      if (V) {
        if (R.st.showCloseBtn && R.st.closeBtnInside && R.currTemplate[W] === true) {
          if (!R.content.find(".mfp-close").length) {
            R.content.append(D())
          }
        } else {
          R.content = V
        }
      } else {
        R.content = ""
      }
      O(M);
      R.container.addClass("mfp-" + W + "-holder");
      R.contentContainer.append(R.content)
    },
    parseEl: function(V) {
      var Z = R.items[V],
        Y;
      if (Z.tagName) {
        Z = {
          el: B(Z)
        }
      } else {
        Y = Z.type;
        Z = {
          data: Z,
          src: Z.src
        }
      }
      if (Z.el) {
        var X = R.types;
        for (var W = 0; W < X.length; W++) {
          if (Z.el.hasClass("mfp-" + X[W])) {
            Y = X[W];
            break
          }
        }
        Z.src = Z.el.attr("data-mfp-src");
        if (!Z.src) {
          Z.src = Z.el.attr("href")
        }
      }
      Z.type = Y || R.st.type || "inline";
      Z.index = V;
      Z.parsed = true;
      R.items[V] = Z;
      O("ElementParse", Z);
      return R.items[V]
    },
    addGroup: function(X, W) {
      var Y = function(Z) {
        Z.mfpEl = this;
        R._openClick(Z, X, W)
      };
      if (!W) {
        W = {}
      }
      var V = "click.magnificPopup";
      W.mainEl = X;
      if (W.items) {
        W.isObj = true;
        X.off(V).on(V, Y)
      } else {
        W.isObj = false;
        if (W.delegate) {
          X.off(V).on(V, W.delegate, Y)
        } else {
          W.items = X;
          X.off(V).on(V, Y)
        }
      }
    },
    _openClick: function(Z, X, V) {
      var W = V.midClick !== undefined ? V.midClick : B.magnificPopup.defaults.midClick;
      if (!W && (Z.which === 2 || Z.ctrlKey || Z.metaKey || Z.altKey || Z.shiftKey)) {
        return
      }
      var Y = V.disableOn !== undefined ? V.disableOn : B.magnificPopup.defaults.disableOn;
      if (Y) {
        if (B.isFunction(Y)) {
          if (!Y.call(R)) {
            return true
          }
        } else {
          if (a.width() < Y) {
            return true
          }
        }
      }
      if (Z.type) {
        Z.preventDefault();
        if (R.isOpen) {
          Z.stopPropagation()
        }
      }
      V.el = B(Z.mfpEl);
      if (V.delegate) {
        V.items = X.find(V.delegate)
      }
      R.open(V)
    },
    updateStatus: function(V, X) {
      if (R.preloader) {
        if (A !== V) {
          R.container.removeClass("mfp-s-" + A)
        }
        if (!X && V === "loading") {
          X = R.st.tLoading
        }
        var W = {
          status: V,
          text: X
        };
        O("UpdateStatus", W);
        V = W.status;
        X = W.text;
        R.preloader.html(X);
        R.preloader.find("a").on("click", function(Y) {
          Y.stopImmediatePropagation()
        });
        R.container.addClass("mfp-s-" + V);
        A = V
      }
    },
    _checkIfClose: function(X) {
      if (B(X).hasClass(e)) {
        return
      }
      var V = R.st.closeOnContentClick;
      var W = R.st.closeOnBgClick;
      if (V && W) {
        return true
      } else {
        if (!R.content || B(X).hasClass("mfp-close") || (R.preloader && X === R.preloader[0])) {
          return true
        }
        if ((X !== R.content[0] && !B.contains(R.content[0], X))) {
          if (W) {
            if (B.contains(document, X)) {
              return true
            }
          }
        } else {
          if (V) {
            return true
          }
        }
      }
      return false
    },
    _addClassToMFP: function(V) {
      R.bgOverlay.addClass(V);
      R.wrap.addClass(V)
    },
    _removeClassFromMFP: function(V) {
      this.bgOverlay.removeClass(V);
      R.wrap.removeClass(V)
    },
    _hasScrollBar: function(V) {
      return ((R.isIE7 ? z.height() : document.body.scrollHeight) > (V || a.height()))
    },
    _setFocus: function() {
      (R.st.focus ? R.content.find(R.st.focus).eq(0) : R.wrap).focus()
    },
    _onFocusIn: function(V) {
      if (V.target !== R.wrap[0] && !B.contains(R.wrap[0], V.target)) {
        R._setFocus();
        return false
      }
    },
    _parseMarkup: function(X, W, Y) {
      var V;
      if (Y.data) {
        W = B.extend(Y.data, W)
      }
      O(f, [X, W, Y]);
      B.each(W, function(aa, ac) {
        if (ac === undefined || ac === false) {
          return true
        }
        V = aa.split("_");
        if (V.length > 1) {
          var ab = X.find(d + "-" + V[0]);
          if (ab.length > 0) {
            var Z = V[1];
            if (Z === "replaceWith") {
              if (ab[0] !== ac[0]) {
                ab.replaceWith(ac)
              }
            } else {
              if (Z === "img") {
                if (ab.is("img")) {
                  ab.attr("src", ac)
                } else {
                  ab.replaceWith('<img src="' + ac + '" class="' + ab.attr("class") + '" />')
                }
              } else {
                ab.attr(V[1], ac)
              }
            }
          }
        } else {
          X.find(d + "-" + aa).html(ac)
        }
      })
    },
    _getScrollbarSize: function() {
      if (R.scrollbarSize === undefined) {
        var V = document.createElement("div");
        V.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(V);
        R.scrollbarSize = V.offsetWidth - V.clientWidth;
        document.body.removeChild(V)
      }
      return R.scrollbarSize
    }
  };
  B.magnificPopup = {
    instance: null,
    proto: y.prototype,
    modules: [],
    open: function(W, V) {
      s();
      if (!W) {
        W = {}
      } else {
        W = B.extend(true, {}, W)
      }
      W.isObj = true;
      W.index = V || 0;
      return this.instance.open(W)
    },
    close: function() {
      return B.magnificPopup.instance && B.magnificPopup.instance.close()
    },
    registerModule: function(V, W) {
      if (W.options) {
        B.magnificPopup.defaults[V] = W.options
      }
      B.extend(this.proto, W.proto);
      this.modules.push(V)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: "",
      preloader: true,
      focus: "",
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: true
    }
  };
  B.fn.magnificPopup = function(X) {
    s();
    var Y = B(this);
    if (typeof X === "string") {
      if (X === "open") {
        var V, Z = I ? Y.data("magnificPopup") : Y[0].magnificPopup,
          W = parseInt(arguments[1], 10) || 0;
        if (Z.items) {
          V = Z.items[W]
        } else {
          V = Y;
          if (Z.delegate) {
            V = V.find(Z.delegate)
          }
          V = V.eq(W)
        }
        R._openClick({
          mfpEl: V
        }, Y, Z)
      } else {
        if (R.isOpen) {
          R[X].apply(R, Array.prototype.slice.call(arguments, 1))
        }
      }
    } else {
      X = B.extend(true, {}, X);
      if (I) {
        Y.data("magnificPopup", X)
      } else {
        Y[0].magnificPopup = X
      }
      R.addGroup(Y, X)
    }
    return Y
  };
  var F = "inline",
    Q, N, r, l = function() {
      if (r) {
        N.after(r.addClass(Q)).detach();
        r = null
      }
    };
  B.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        R.types.push(F);
        i(x + "." + F, function() {
          l()
        })
      },
      getInline: function(Z, Y) {
        l();
        if (Z.src) {
          var V = R.st.inline,
            X = B(Z.src);
          if (X.length) {
            var W = X[0].parentNode;
            if (W && W.tagName) {
              if (!N) {
                Q = V.hiddenClass;
                N = n(Q);
                Q = "mfp-" + Q
              }
              r = X.after(N).detach().removeClass(Q)
            }
            R.updateStatus("ready")
          } else {
            R.updateStatus("error", V.tNotFound);
            X = B("<div>")
          }
          Z.inlineElement = X;
          return X
        }
        R.updateStatus("ready");
        R._parseMarkup(Y, {}, Z);
        return Y
      }
    }
  });
  var t = "ajax",
    T, u = function() {
      if (T) {
        B(document.body).removeClass(T)
      }
    },
    S = function() {
      u();
      if (R.req) {
        R.req.abort()
      }
    };
  B.magnificPopup.registerModule(t, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        R.types.push(t);
        T = R.st.ajax.cursor;
        i(x + "." + t, S);
        i("BeforeChange." + t, S)
      },
      getAjax: function(W) {
        if (T) {
          B(document.body).addClass(T)
        }
        R.updateStatus("loading");
        var V = B.extend({
          url: W.src,
          success: function(Z, aa, Y) {
            var X = {
              data: Z,
              xhr: Y
            };
            O("ParseAjax", X);
            R.appendContent(B(X.data), t);
            W.finished = true;
            u();
            R._setFocus();
            setTimeout(function() {
              R.wrap.addClass(H)
            }, 16);
            R.updateStatus("ready");
            O("AjaxContentAdded")
          },
          error: function() {
            u();
            W.finished = W.loadError = true;
            R.updateStatus("error", R.st.ajax.tError.replace("%url%", W.src))
          }
        }, R.st.ajax.settings);
        R.req = B.ajax(V);
        return ""
      }
    }
  });
  var g, c = function(V) {
    if (V.data && V.data.title !== undefined) {
      return V.data.title
    }
    var W = R.st.image.titleSrc;
    if (W) {
      if (B.isFunction(W)) {
        return W.call(R, V)
      } else {
        if (V.el) {
          return V.el.attr(W) || ""
        }
      }
    }
    return ""
  };
  B.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var W = R.st.image,
          V = ".image";
        R.types.push("image");
        i(k + V, function() {
          if (R.currItem.type === "image" && W.cursor) {
            B(document.body).addClass(W.cursor)
          }
        });
        i(x + V, function() {
          if (W.cursor) {
            B(document.body).removeClass(W.cursor)
          }
          a.off("resize" + d)
        });
        i("Resize" + V, R.resizeImage);
        if (R.isLowIE) {
          i("AfterChange", R.resizeImage)
        }
      },
      resizeImage: function() {
        var W = R.currItem;
        if (!W || !W.img) {
          return
        }
        if (R.st.image.verticalFit) {
          var V = 0;
          if (R.isLowIE) {
            V = parseInt(W.img.css("padding-top"), 10) + parseInt(W.img.css("padding-bottom"), 10)
          }
          W.img.css("max-height", R.wH - V)
        }
      },
      _onImageHasSize: function(V) {
        if (V.img) {
          V.hasSize = true;
          if (g) {
            clearInterval(g)
          }
          V.isCheckingImgSize = false;
          O("ImageHasSize", V);
          if (V.imgHidden) {
            if (R.content) {
              R.content.removeClass("mfp-loading")
            }
            V.imgHidden = false
          }
        }
      },
      findImageSize: function(Y) {
        var V = 0,
          W = Y.img[0],
          X = function(Z) {
            if (g) {
              clearInterval(g)
            }
            g = setInterval(function() {
              if (W.naturalWidth > 0) {
                R._onImageHasSize(Y);
                return
              }
              if (V > 200) {
                clearInterval(g)
              }
              V++;
              if (V === 3) {
                X(10)
              } else {
                if (V === 40) {
                  X(50)
                } else {
                  if (V === 100) {
                    X(500)
                  }
                }
              }
            }, Z)
          };
        X(1)
      },
      getImage: function(ab, Y) {
        var aa = 0,
          ac = function() {
            if (ab) {
              if (ab.img[0].complete) {
                ab.img.off(".mfploader");
                if (ab === R.currItem) {
                  R._onImageHasSize(ab);
                  R.updateStatus("ready")
                }
                ab.hasSize = true;
                ab.loaded = true;
                O("ImageLoadComplete")
              } else {
                aa++;
                if (aa < 200) {
                  setTimeout(ac, 100)
                } else {
                  V()
                }
              }
            }
          },
          V = function() {
            if (ab) {
              ab.img.off(".mfploader");
              if (ab === R.currItem) {
                R._onImageHasSize(ab);
                R.updateStatus("error", Z.tError.replace("%url%", ab.src))
              }
              ab.hasSize = true;
              ab.loaded = true;
              ab.loadError = true
            }
          },
          Z = R.st.image;
        var X = Y.find(".mfp-img");
        if (X.length) {
          var W = document.createElement("img");
          W.className = "mfp-img";
          if (ab.el && ab.el.find("img").length) {
            W.alt = ab.el.find("img").attr("alt")
          }
          ab.img = B(W).on("load.mfploader", ac).on("error.mfploader", V);
          W.src = ab.src;
          if (X.is("img")) {
            ab.img = ab.img.clone()
          }
          W = ab.img[0];
          if (W.naturalWidth > 0) {
            ab.hasSize = true
          } else {
            if (!W.width) {
              ab.hasSize = false
            }
          }
        }
        R._parseMarkup(Y, {
          title: c(ab),
          img_replaceWith: ab.img
        }, ab);
        R.resizeImage();
        if (ab.hasSize) {
          if (g) {
            clearInterval(g)
          }
          if (ab.loadError) {
            Y.addClass("mfp-loading");
            R.updateStatus("error", Z.tError.replace("%url%", ab.src))
          } else {
            Y.removeClass("mfp-loading");
            R.updateStatus("ready")
          }
          return Y
        }
        R.updateStatus("loading");
        ab.loading = true;
        if (!ab.hasSize) {
          ab.imgHidden = true;
          Y.addClass("mfp-loading");
          R.findImageSize(ab)
        }
        return Y
      }
    }
  });
  var j, L = function() {
    if (j === undefined) {
      j = document.createElement("p").style.MozTransform !== undefined
    }
    return j
  };
  B.magnificPopup.registerModule("zoom", {
    options: {
      enabled: false,
      easing: "ease-in-out",
      duration: 300,
      opener: function(V) {
        return V.is("img") ? V : V.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var W = R.st.zoom,
          Z = ".zoom",
          ac;
        if (!W.enabled || !R.supportsTransition) {
          return
        }
        var ab = W.duration,
          aa = function(af) {
            var ae = af.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
              ag = "all " + (W.duration / 1000) + "s " + W.easing,
              ah = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              ad = "transition";
            ah["-webkit-" + ad] = ah["-moz-" + ad] = ah["-o-" + ad] = ah[ad] = ag;
            ae.css(ah);
            return ae
          },
          V = function() {
            R.content.css("visibility", "visible")
          },
          X, Y;
        i("BuildControls" + Z, function() {
          if (R._allowZoom()) {
            clearTimeout(X);
            R.content.css("visibility", "hidden");
            ac = R._getItemToZoom();
            if (!ac) {
              V();
              return
            }
            Y = aa(ac);
            Y.css(R._getOffset());
            R.wrap.append(Y);
            X = setTimeout(function() {
              Y.css(R._getOffset(true));
              X = setTimeout(function() {
                V();
                setTimeout(function() {
                  Y.remove();
                  ac = Y = null;
                  O("ZoomAnimationEnded")
                }, 16)
              }, ab)
            }, 16)
          }
        });
        i(G + Z, function() {
          if (R._allowZoom()) {
            clearTimeout(X);
            R.st.removalDelay = ab;
            if (!ac) {
              ac = R._getItemToZoom();
              if (!ac) {
                return
              }
              Y = aa(ac)
            }
            Y.css(R._getOffset(true));
            R.wrap.append(Y);
            R.content.css("visibility", "hidden");
            setTimeout(function() {
              Y.css(R._getOffset())
            }, 16)
          }
        });
        i(x + Z, function() {
          if (R._allowZoom()) {
            V();
            if (Y) {
              Y.remove()
            }
            ac = null
          }
        })
      },
      _allowZoom: function() {
        return R.currItem.type === "image"
      },
      _getItemToZoom: function() {
        if (R.currItem.hasSize) {
          return R.currItem.img
        } else {
          return false
        }
      },
      _getOffset: function(X) {
        var V;
        if (X) {
          V = R.currItem.img
        } else {
          V = R.st.zoom.opener(R.currItem.el || R.currItem)
        }
        var aa = V.offset();
        var W = parseInt(V.css("padding-top"), 10);
        var Z = parseInt(V.css("padding-bottom"), 10);
        aa.top -= (B(window).scrollTop() - W);
        var Y = {
          width: V.width(),
          height: (I ? V.innerHeight() : V[0].offsetHeight) - Z - W
        };
        if (L()) {
          Y["-moz-transform"] = Y.transform = "translate(" + aa.left + "px," + aa.top + "px)"
        } else {
          Y.left = aa.left;
          Y.top = aa.top
        }
        return Y
      }
    }
  });
  var q = "iframe",
    p = "//about:blank",
    P = function(V) {
      if (R.currTemplate[q]) {
        var W = R.currTemplate[q].find("iframe");
        if (W.length) {
          if (!V) {
            W[0].src = p
          }
          if (R.isIE8) {
            W.css("display", V ? "block" : "none")
          }
        }
      }
    };
  B.magnificPopup.registerModule(q, {
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
        R.types.push(q);
        i("BeforeChange", function(X, V, W) {
          if (V !== W) {
            if (V === q) {
              P()
            } else {
              if (W === q) {
                P(true)
              }
            }
          }
        });
        i(x + "." + q, function() {
          P()
        })
      },
      getIframe: function(Z, Y) {
        var V = Z.src;
        var X = R.st.iframe;
        B.each(X.patterns, function() {
          if (V.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === "string") {
                V = V.substr(V.lastIndexOf(this.id) + this.id.length, V.length)
              } else {
                V = this.id.call(this, V)
              }
            }
            V = this.src.replace("%id%", V);
            return false
          }
        });
        var W = {};
        if (X.srcAction) {
          W[X.srcAction] = V
        }
        R._parseMarkup(Y, W, Z);
        R.updateStatus("ready");
        return Y
      }
    }
  });
  var w = function(V) {
      var W = R.items.length;
      if (V > W - 1) {
        return V - W
      } else {
        if (V < 0) {
          return W + V
        }
      }
      return V
    },
    o = function(X, W, V) {
      return X.replace(/%curr%/gi, W + 1).replace(/%total%/gi, V)
    };
  B.magnificPopup.registerModule("gallery", {
    options: {
      enabled: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var V = R.st.gallery,
          X = ".mfp-gallery",
          W = Boolean(B.fn.mfpFastClick);
        R.direction = true;
        if (!V || !V.enabled) {
          return false
        }
        b += " mfp-gallery";
        i(k + X, function() {
          if (V.navigateByImgClick) {
            R.wrap.on("click" + X, ".mfp-img", function() {
              if (R.items.length > 1) {
                R.next();
                return false
              }
            })
          }
          z.on("keydown" + X, function(Y) {
            if (Y.keyCode === 37) {
              R.prev()
            } else {
              if (Y.keyCode === 39) {
                R.next()
              }
            }
          })
        });
        i("UpdateStatus" + X, function(Z, Y) {
          if (Y.text) {
            Y.text = o(Y.text, R.currItem.index, R.items.length)
          }
        });
        i(f + X, function(ac, aa, Z, ab) {
          var Y = R.items.length;
          Z.counter = Y > 1 ? o(V.tCounter, ab.index, Y) : ""
        });
        i("BuildControls" + X, function() {
          if (R.items.length > 1 && V.arrows && !R.arrowLeft) {
            var aa = V.arrowMarkup,
              ab = R.arrowLeft = B(aa.replace(/%title%/gi, V.tPrev).replace(/%dir%/gi, "left")).addClass(e),
              Z = R.arrowRight = B(aa.replace(/%title%/gi, V.tNext).replace(/%dir%/gi, "right")).addClass(e);
            var Y = W ? "mfpFastClick" : "click";
            ab[Y](function() {
              R.prev()
            });
            Z[Y](function() {
              R.next()
            });
            if (R.isIE7) {
              n("b", ab[0], false, true);
              n("a", ab[0], false, true);
              n("b", Z[0], false, true);
              n("a", Z[0], false, true)
            }
            R.content.append(ab.add(Z))
          }
        });
        i(h + X, function() {
          if (R._preloadTimeout) {
            clearTimeout(R._preloadTimeout)
          }
          R._preloadTimeout = setTimeout(function() {
            R.preloadNearbyImages();
            R._preloadTimeout = null
          }, 16)
        });
        i(x + X, function() {
          z.off(X);
          R.wrap.off("click" + X);
          if (R.arrowLeft && W) {
            R.arrowLeft.add(R.arrowRight).destroyMfpFastClick()
          }
          R.arrowRight = R.arrowLeft = null
        })
      },
      next: function() {
        R.direction = true;
        R.index = w(R.index + 1);
        R.updateItemHTML()
      },
      prev: function() {
        R.direction = false;
        R.index = w(R.index - 1);
        R.updateItemHTML()
      },
      goTo: function(V) {
        R.direction = (V >= R.index);
        R.index = V;
        R.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var Y = R.st.gallery.preload,
          W = Math.min(Y[0], R.items.length),
          X = Math.min(Y[1], R.items.length),
          V;
        for (V = 1; V <= (R.direction ? X : W); V++) {
          R._preloadItem(R.index + V)
        }
        for (V = 1; V <= (R.direction ? W : X); V++) {
          R._preloadItem(R.index - V)
        }
      },
      _preloadItem: function(V) {
        V = w(V);
        if (R.items[V].preloaded) {
          return
        }
        var W = R.items[V];
        if (!W.parsed) {
          W = R.parseEl(V)
        }
        O("LazyLoad", W);
        if (W.type === "image") {
          W.img = B('<img class="mfp-img" />').on("load.mfploader", function() {
            W.hasSize = true
          }).on("error.mfploader", function() {
            W.hasSize = true;
            W.loadError = true;
            O("LazyLoadError", W)
          }).attr("src", W.src)
        }
        W.preloaded = true
      }
    }
  });
  var m = "retina";
  B.magnificPopup.registerModule(m, {
    options: {
      replaceSrc: function(V) {
        return V.src.replace(/\.\w+$/, function(W) {
          return "@2x" + W
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var V = R.st.retina,
            W = V.ratio;
          W = !isNaN(W) ? W : W();
          if (W > 1) {
            i("ImageHasSize." + m, function(Y, X) {
              X.img.css({
                "max-width": X.img[0].naturalWidth / W,
                width: "100%"
              })
            });
            i("ElementParse." + m, function(Y, X) {
              X.src = V.replaceSrc(X, W)
            })
          }
        }
      }
    }
  });
  (function() {
    var W = 1000,
      Y = "ontouchstart" in window,
      Z = function() {
        a.off("touchmove" + X + " touchend" + X)
      },
      V = "mfpFastClick",
      X = "." + V;
    B.fn.mfpFastClick = function(aa) {
      return B(this).each(function() {
        var ah = B(this),
          ag;
        if (Y) {
          var ai, ad, ac, af, ab, ae;
          ah.on("touchstart" + X, function(aj) {
            af = false;
            ae = 1;
            ab = aj.originalEvent ? aj.originalEvent.touches[0] : aj.touches[0];
            ad = ab.clientX;
            ac = ab.clientY;
            a.on("touchmove" + X, function(ak) {
              ab = ak.originalEvent ? ak.originalEvent.touches : ak.touches;
              ae = ab.length;
              ab = ab[0];
              if (Math.abs(ab.clientX - ad) > 10 || Math.abs(ab.clientY - ac) > 10) {
                af = true;
                Z()
              }
            }).on("touchend" + X, function(ak) {
              Z();
              if (af || ae > 1) {
                return
              }
              ag = true;
              ak.preventDefault();
              clearTimeout(ai);
              ai = setTimeout(function() {
                ag = false
              }, W);
              aa()
            })
          })
        }
        ah.on("click" + X, function() {
          if (!ag) {
            aa()
          }
        })
      })
    };
    B.fn.destroyMfpFastClick = function() {
      B(this).off("touchstart" + X + " click" + X);
      if (Y) {
        a.off("touchmove" + X + " touchend" + X)
      }
    }
  })();
  s()
}));

/* 4. trx_addons.js
-----------------------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
  "use strict";
  TRX_ADDONS_STORAGE['vc_init_counter'] = 0;
  trx_addons_init_actions();
});
jQuery(window).on('beforeunload', function() {
  jQuery('#page_preloader').css({
    display: 'block',
    opacity: 0
  }).animate({
    opacity: 0.8
  }, 300);
});

function trx_addons_init_actions() {
  if (TRX_ADDONS_STORAGE['vc_edit_mode'] > 0 && jQuery('.vc_empty-placeholder').length == 0 && TRX_ADDONS_STORAGE['vc_init_counter']++ < 30) {
    setTimeout(trx_addons_init_actions, 200);
    return;
  }
  jQuery('#page_preloader').animate({
    opacity: 0
  }, 300).css({
    display: 'none'
  });
  if (trx_addons_is_retina()) {
    trx_addons_set_cookie('trx_addons_is_retina', 1, 365);
  }
  trx_addons_add_hidden_element_handler('ready_actions', trx_addons_ready_actions);
  trx_addons_ready_actions();
  trx_addons_resize_actions();
  trx_addons_scroll_actions();
  jQuery(window).resize(function() {
    trx_addons_resize_actions();
  });
  jQuery(window).scroll(function() {
    trx_addons_scroll_actions();
  });
}

function trx_addons_ready_actions(container) {
  if (arguments.length == 0) var container = jQuery('body');
  if (container.find('.trx_addons_tabs:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.tabs) {
    container.find('.trx_addons_tabs:not(.inited)').each(function() {
      var init = jQuery(this).data('active');
      if (isNaN(init)) {
        init = 0;
        var active = jQuery(this).find('> ul > li[data-active="true"]').eq(0);
        if (active.length > 0) {
          init = active.index();
          if (isNaN(init) || init < 0) init = 0;
        }
      } else {
        init = Math.max(0, init);
      }
      jQuery(this).addClass('inited').tabs({
        active: init,
        show: {
          effect: 'fadeIn',
          duration: 300
        },
        hide: {
          effect: 'fadeOut',
          duration: 300
        },
        create: function(event, ui) {
          if (ui.panel.length > 0) trx_addons_init_hidden_elements(ui.panel);
        },
        activate: function(event, ui) {
          if (ui.newPanel.length > 0) trx_addons_init_hidden_elements(ui.newPanel);
        }
      });
    });
  }
  if (container.find('.trx_addons_accordion:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.accordion) {
    container.find('.trx_addons_accordion:not(.inited)').each(function() {
      var accordion = jQuery(this);
      var headers = accordion.data('headers');
      if (headers === undefined) headers = 'h5';
      var height_style = accordion.data('height-style');
      if (height_style === undefined) height_style = 'content';
      var init = accordion.data('active');
      var active = false;
      if (isNaN(init)) {
        init = 0;
        var active = accordion.find(headers + '[data-active="true"]').eq(0);
        if (active.length > 0) {
          while (!active.parent().hasClass('trx_addons_accordion')) {
            active = active.parent();
          }
          init = active.index();
          if (isNaN(init) || init < 0) init = 0;
        }
      } else {
        init = Math.max(0, init);
      }
      accordion.addClass('inited').accordion({
        active: init,
        header: headers,
        heightStyle: height_style,
        create: function(event, ui) {
          if (ui.panel.length > 0) {
            trx_addons_init_hidden_elements(ui.panel);
          } else if (active !== false && active.length > 0) {
            active.find('>' + headers).trigger('click');
          }
        },
        activate: function(event, ui) {
          if (ui.newPanel.length > 0) trx_addons_init_hidden_elements(ui.newPanel);
        }
      });
    });
  }
  if (window.trx_addons_init_sliders) trx_addons_init_sliders(jQuery('body'));
  if (window.trx_addons_sc_init_actions) trx_addons_sc_init_actions(jQuery('body'));
  if (TRX_ADDONS_STORAGE['popup_engine'] == 'pretty') {
    container.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr('rel', 'prettyPhoto[slideshow]');
    var images = container.find("a[rel*='prettyPhoto']:not(.inited):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])").addClass('inited');
    try {
      images.prettyPhoto({
        social_tools: '',
        template: 'facebook',
        deeplinking: false
      });
    } catch (e) {};
  } else if (TRX_ADDONS_STORAGE['popup_engine'] == 'magnific') {
    container.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr('rel', 'magnific');
    var images = container.find("a[rel*='magnific']:not(.inited):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])").addClass('inited');
    try {
      images.magnificPopup({
        type: 'image',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        midClick: true,
        preloader: true,
        tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
        gallery: {
          enabled: true
        },
        image: {
          tError: TRX_ADDONS_STORAGE['msg_magnific_error'],
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out',
          opener: function(openerElement) {
            if (!openerElement.is('img')) {
              if (openerElement.parents('.trx_addons_hover').find('img').length > 0) openerElement = openerElement.parents('.trx_addons_hover').find('img');
              else if (openerElement.siblings('img').length > 0) openerElement = openerElement.siblings('img');
              else if (openerElement.parent().parent().find('img').length > 0) openerElement = openerElement.parent().parent().find('img');
            }
            return openerElement;
          }
        },
        callbacks: {
          beforeClose: function() {
            jQuery('.mfp-figure figcaption').hide();
            jQuery('.mfp-figure .mfp-arrow').hide();
          }
        }
      });
    } catch (e) {};
  }
  if (container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').length > 0) {
    container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').addClass('inited').on('click', function(e) {
      var button = jQuery(this);
      var inc = button.hasClass('enabled') ? 1 : -1;
      var post_id = button.hasClass('post_counters_likes') ? button.data('postid') : button.data('commentid');
      var cookie_likes = trx_addons_get_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes');
      if (cookie_likes === undefined || cookie_likes === null) cookie_likes = '';
      jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
        action: button.hasClass('post_counters_likes') ? 'post_counter' : 'comment_counter',
        nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
        post_id: post_id,
        likes: inc
      }).done(function(response) {
        var rez = {};
        try {
          rez = JSON.parse(response);
        } catch (e) {
          rez = {
            error: TRX_ADDONS_STORAGE['msg_ajax_error']
          };
          console.log(response);
        }
        if (rez.error === '') {
          var counter = rez.counter;
          if (inc == 1) {
            var title = button.data('title-dislike');
            button.removeClass('enabled trx_addons_icon-heart-empty').addClass('disabled trx_addons_icon-heart');
            cookie_likes += (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
          } else {
            var title = button.data('title-like');
            button.removeClass('disabled trx_addons_icon-heart').addClass('enabled trx_addons_icon-heart-empty');
            cookie_likes = cookie_likes.replace(',' + post_id + ',', ',');
          }
          button.data('likes', counter).attr('title', title).find(button.hasClass('post_counters_likes') ? '.post_counters_number' : '.comment_counters_number').html(counter);
          trx_addons_set_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes', cookie_likes, 365);
        } else {
          alert(TRX_ADDONS_STORAGE['msg_error_like']);
        }
      });
      e.preventDefault();
      return false;
    });
  }
  if (container.find('.socials_share .socials_caption:not(.inited)').length > 0) {
    container.find('.socials_share .socials_caption:not(.inited)').each(function() {
      jQuery(this).addClass('inited').on('click', function(e) {
        jQuery(this).siblings('.social_items').fadeToggle();
        e.preventDefault();
        return false;
      });
    });
  }
  if (container.find('.socials_share .social_items:not(.inited)').length > 0) {
    container.find('.socials_share .social_items:not(.inited)').each(function() {
      jQuery(this).addClass('inited').on('click', '.social_item_popup > a.social_icons', function(e) {
        var url = jQuery(this).data('link');
        window.open(url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0');
        e.preventDefault();
        return false;
      });
    });
  }
  container.find('.widget ul > li').each(function() {
    if (jQuery(this).find('ul').length > 0) {
      jQuery(this).addClass('has_children');
    }
  });
  container.find('.widget_archive a:not(.inited)').addClass('inited').each(function() {
    var val = jQuery(this).html().split(' ');
    if (val.length > 1) {
      val[val.length - 1] = '<span>' + val[val.length - 1] + '</span>';
      jQuery(this).html(val.join(' '))
    }
  });
  container.find('.trx_addons_scroll_to_top:not(.inited)').addClass('inited').on('click', function(e) {
    jQuery('html,body').animate({
      scrollTop: 0
    }, 'slow');
    e.preventDefault();
    return false;
  });
}

function trx_addons_scroll_actions() {
  var scroll_offset = jQuery(window).scrollTop();
  var scroll_to_top_button = jQuery('.trx_addons_scroll_to_top');
  var adminbar_height = Math.max(0, jQuery('#wpadminbar').height());
  if (scroll_to_top_button.length > 0) {
    if (scroll_offset > 100) scroll_to_top_button.addClass('show');
    else scroll_to_top_button.removeClass('show');
  }
  jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
    if (jQuery(this).offset().top < scroll_offset + jQuery(window).height()) jQuery(this).addClass(jQuery(this).data('animation'));
  });
}

function trx_addons_resize_actions() {
  if (window.trx_addons_resize_sliders) trx_addons_resize_sliders();
}

function trx_addons_get_cookie(name) {
  var defa = arguments[1] != undefined ? arguments[1] : null;
  var start = document.cookie.indexOf(name + '=');
  var len = start + name.length + 1;
  if ((!start) && (name != document.cookie.substring(0, name.length))) {
    return defa;
  }
  if (start == -1) return defa;
  var end = document.cookie.indexOf(';', len);
  if (end == -1) end = document.cookie.length;
  return unescape(document.cookie.substring(len, end));
}

function trx_addons_set_cookie(name, value, expires, path, domain, secure) {
  var expires = arguments[2] != undefined ? arguments[2] : 0;
  var path = arguments[3] != undefined ? arguments[3] : '/';
  var domain = arguments[4] != undefined ? arguments[4] : '';
  var secure = arguments[5] != undefined ? arguments[5] : '';
  var today = new Date();
  today.setTime(today.getTime());
  if (expires) {
    expires = expires * 1000 * 60 * 60 * 24;
  }
  var expires_date = new Date(today.getTime() + (expires));
  document.cookie = name + '=' + escape(value) + ((expires) ? ';expires=' + expires_date.toGMTString() : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure) ? ';secure' : '');
}

function trx_addons_del_cookie(name, path, domain) {
  var path = arguments[1] != undefined ? arguments[1] : '/';
  var domain = arguments[2] != undefined ? arguments[2] : '';
  if (trx_addons_get_cookie(name)) document.cookie = name + '=' + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

function trx_addons_clear_listbox(box) {
  for (var i = box.options.length - 1; i >= 0; i--) box.options[i] = null;
}

function trx_addons_add_listbox_item(box, val, text) {
  var item = new Option();
  item.value = val;
  item.text = text;
  box.options.add(item);
}

function trx_addons_del_listbox_item_by_value(box, val) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].value == val) {
      box.options[i] = null;
      break;
    }
  }
}

function trx_addons_del_listbox_item_by_text(box, txt) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].text == txt) {
      box.options[i] = null;
      break;
    }
  }
}

function trx_addons_find_listbox_item_by_value(box, val) {
  var idx = -1;
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].value == val) {
      idx = i;
      break;
    }
  }
  return idx;
}

function trx_addons_find_listbox_item_by_text(box, txt) {
  var idx = -1;
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].text == txt) {
      idx = i;
      break;
    }
  }
  return idx;
}

function trx_addons_select_listbox_item_by_value(box, val) {
  for (var i = 0; i < box.options.length; i++) {
    box.options[i].selected = (val == box.options[i].value);
  }
}

function trx_addons_select_listbox_item_by_text(box, txt) {
  for (var i = 0; i < box.options.length; i++) {
    box.options[i].selected = (txt == box.options[i].text);
  }
}

function trx_addons_get_listbox_values(box) {
  var delim = arguments[1] ? arguments[1] : ',';
  var str = '';
  for (var i = 0; i < box.options.length; i++) {
    str += (str ? delim : '') + box.options[i].value;
  }
  return str;
}

function trx_addons_get_listbox_texts(box) {
  var delim = arguments[1] ? arguments[1] : ',';
  var str = '';
  for (var i = 0; i < box.options.length; i++) {
    str += (str ? delim : '') + box.options[i].text;
  }
  return str;
}

function trx_addons_sort_listbox(box) {
  var temp_opts = new Array();
  var temp = new Option();
  for (var i = 0; i < box.options.length; i++) {
    temp_opts[i] = box.options[i].clone();
  }
  for (var x = 0; x < temp_opts.length - 1; x++) {
    for (var y = (x + 1); y < temp_opts.length; y++) {
      if (temp_opts[x].text > temp_opts[y].text) {
        temp = temp_opts[x];
        temp_opts[x] = temp_opts[y];
        temp_opts[y] = temp;
      }
    }
  }
  for (var i = 0; i < box.options.length; i++) {
    box.options[i] = temp_opts[i].clone();
  }
}

function trx_addons_get_listbox_selected_index(box) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) return i;
  }
  return -1;
}

function trx_addons_get_listbox_selected_value(box) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i].value;
    }
  }
  return null;
}

function trx_addons_get_listbox_selected_text(box) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i].text;
    }
  }
  return null;
}

function trx_addons_get_listbox_selected_option(box) {
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i];
    }
  }
  return null;
}

function trx_addons_get_radio_value(radioGroupObj) {
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked) return radioGroupObj[i].value;
  return null;
}

function trx_addons_set_radio_checked_by_num(radioGroupObj, num) {
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked && i != num) radioGroupObj[i].checked = false;
    else if (i == num) radioGroupObj[i].checked = true;
}

function trx_addons_set_radio_checked_by_value(radioGroupObj, val) {
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked && radioGroupObj[i].value != val) radioGroupObj[i].checked = false;
    else if (radioGroupObj[i].value == val) radioGroupObj[i].checked = true;
}

function trx_addons_form_validate(form, opt) {
  if (typeof(opt.error_message_show) == 'undefined') opt.error_message_show = true;
  if (typeof(opt.error_message_time) == 'undefined') opt.error_message_time = 5000;
  if (typeof(opt.error_message_class) == 'undefined') opt.error_message_class = 'trx_addons_message_box_error';
  if (typeof(opt.error_message_text) == 'undefined') opt.error_message_text = 'Incorrect data in the fields!';
  if (typeof(opt.error_fields_class) == 'undefined') opt.error_fields_class = 'trx_addons_field_error';
  if (typeof(opt.exit_after_first_error) == 'undefined') opt.exit_after_first_error = false;
  var error_msg = '';
  form.find(":input").each(function() {
    if (error_msg != '' && opt.exit_after_first_error) return;
    for (var i = 0; i < opt.rules.length; i++) {
      if (jQuery(this).attr("name") == opt.rules[i].field) {
        var val = jQuery(this).val();
        var error = false;
        if (typeof(opt.rules[i].min_length) == 'object') {
          if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
            if (error_msg == '') jQuery(this).get(0).focus();
            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].min_length.message) != 'undefined' ? opt.rules[i].min_length.message : opt.error_message_text) + '</p>';
            error = true;
          }
        }
        if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
          if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
            if (error_msg == '') jQuery(this).get(0).focus();
            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].max_length.message) != 'undefined' ? opt.rules[i].max_length.message : opt.error_message_text) + '</p>';
            error = true;
          }
        }
        if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
          if (opt.rules[i].mask.value != '') {
            var regexp = new RegExp(opt.rules[i].mask.value);
            if (!regexp.test(val)) {
              if (error_msg == '') jQuery(this).get(0).focus();
              error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].mask.message) != 'undefined' ? opt.rules[i].mask.message : opt.error_message_text) + '</p>';
              error = true;
            }
          }
        }
        if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
          if (opt.rules[i].equal_to.value != '' && val != jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
            if (error_msg == '') jQuery(this).get(0).focus();
            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].equal_to.message) != 'undefined' ? opt.rules[i].equal_to.message : opt.error_message_text) + '</p>';
            error = true;
          }
        }
        if (opt.error_fields_class != '') jQuery(this).toggleClass(opt.error_fields_class, error);
      }
    }
  });
  if (error_msg != '' && opt.error_message_show) {
    var error_message_box = form.find(".trx_addons_message_box");
    if (error_message_box.length == 0) error_message_box = form.parent().find(".trx_addons_message_box");
    if (error_message_box.length == 0) {
      form.append('<div class="trx_addons_message_box"></div>');
      error_message_box = form.find(".trx_addons_message_box");
    }
    if (opt.error_message_class) error_message_box.toggleClass(opt.error_message_class, true);
    error_message_box.html(error_msg).fadeIn();
    setTimeout(function() {
      error_message_box.fadeOut();
    }, opt.error_message_time);
  }
  return error_msg != '';
}

function trx_addons_document_animate_to(id) {
  if (id.indexOf('#') == -1) id = '#' + id;
  var obj = jQuery(id).eq(0);
  if (obj.length == 0) return;
  var oft = jQuery(id).offset().top;
  var st = jQuery(window).scrollTop();
  var speed = Math.min(1600, Math.max(400, Math.round(Math.abs(oft - st) / jQuery(window).height() * 100)));
  jQuery('body,html').animate({
    scrollTop: oft - jQuery('#wpadminbar').height() - jQuery('header.fixedTopMenu .topWrap').height()
  }, speed, 'swing');
}

function trx_addons_document_set_location(curLoc) {
  if (history.pushState === undefined || navigator.userAgent.match(/MSIE\s[6-9]/i) != null) return;
  try {
    history.pushState(null, null, curLoc);
    return;
  } catch (e) {}
  location.href = curLoc;
}

function trx_addons_add_to_url(prm) {
  var ignore_empty = arguments[1] !== undefined ? arguments[1] : true;
  var loc = location.href;
  var q = loc.indexOf('?');
  var attr = {};
  if (q > 0) {
    var qq = loc.substr(q + 1).split('&');
    var parts = '';
    for (var i = 0; i < qq.length; i++) {
      var parts = qq[i].split('=');
      attr[parts[0]] = parts.length > 1 ? parts[1] : '';
    }
  }
  for (var p in prm) {
    attr[p] = prm[p];
  }
  loc = (q > 0 ? loc.substr(0, q) : loc) + '?';
  var i = 0;
  for (p in attr) {
    if (ignore_empty && attr[p] == '') continue;
    loc += (i++ > 0 ? '&' : '') + p + '=' + attr[p];
  }
  return loc;
}

function trx_addons_add_hidden_element_handler(key, handler) {
  if (TRX_ADDONS_STORAGE['hidden_elements'] === undefined) TRX_ADDONS_STORAGE['hidden_elements'] = [];
  TRX_ADDONS_STORAGE['hidden_elements'][key] = handler;
}

function trx_addons_init_hidden_elements(cont) {
  if (TRX_ADDONS_STORAGE['hidden_elements']) {
    for (key in TRX_ADDONS_STORAGE['hidden_elements']) {
      TRX_ADDONS_STORAGE['hidden_elements'][key](cont);
    }
  }
}

function trx_addons_browser_is_mobile() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function trx_addons_browser_is_ios() {
  return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
}

function trx_addons_is_retina() {
  var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
  return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
}

function trx_addons_get_file_name(path) {
  path = path.replace(/\\/g, '/');
  var pos = path.lastIndexOf('/');
  if (pos >= 0) path = path.substr(pos + 1);
  return path;
}

function trx_addons_get_file_ext(path) {
  var pos = path.lastIndexOf('.');
  path = pos >= 0 ? path.substr(pos + 1) : '';
  return path;
}

function trx_addons_check_images_complete(cont) {
  var complete = true;
  cont.find('img').each(function() {
    if (!complete) return;
    if (!jQuery(this).get(0).complete) complete = false;
  });
  return complete;
}

function trx_addons_serialize(mixed_val) {
  var obj_to_array = arguments.length == 1 || argument[1] === true;
  switch (typeof(mixed_val)) {
    case "number":
      if (isNaN(mixed_val) || !isFinite(mixed_val)) return false;
      else return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
    case "string":
      return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
    case "boolean":
      return "b:" + (mixed_val ? "1" : "0") + ";";
    case "object":
      if (mixed_val == null) return "N;";
      else if (mixed_val instanceof Array) {
        var idxobj = {
          idx: -1
        };
        var map = [];
        for (var i = 0; i < mixed_val.length; i++) {
          idxobj.idx++;
          var ser = trx_addons_serialize(mixed_val[i]);
          if (ser) map.push(trx_addons_serialize(idxobj.idx) + ser);
        }
        return "a:" + mixed_val.length + ":{" + map.join("") + "}";
      } else {
        var class_name = trx_addons_get_class(mixed_val);
        if (class_name == undefined) return false;
        var props = new Array();
        for (var prop in mixed_val) {
          var ser = trx_addons_serialize(mixed_val[prop]);
          if (ser) props.push(trx_addons_serialize(prop) + ser);
        }
        if (obj_to_array) return "a:" + props.length + ":{" + props.join("") + "}";
        else return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
      }
      case "undefined":
        return "N;";
  }
  return false;
}

function trx_addons_get_class(obj) {
  if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && obj.constructor) {
    var arr = obj.constructor.toString().match(/function\s*(\w+)/);
    if (arr && arr.length == 2) return arr[1];
  }
  return false;
}

function trx_addons_init_sliders(container) {
  if (container.find('.slider_swiper:not(.inited)').length > 0) {
    container.find('.slider_swiper:not(.inited)').each(function() {
      trx_addons_add_hidden_element_handler('swiper', trx_addons_init_hidden_sliders);
      if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
      var id = jQuery(this).attr('id');
      if (id == undefined) {
        id = 'swiper_' + Math.random();
        id = id.replace('.', '');
        jQuery(this).attr('id', id);
      }
      jQuery(this).css({
        'display': 'block',
        'opacity': 0
      }).addClass(id).addClass('inited').data('settings', {
        mode: 'horizontal'
      });
      var smw = jQuery(this).data('slides-min-width');
      if (smw == undefined) {
        smw = 250;
        jQuery(this).attr('data-slides-min-width', smw);
      }
      var width = jQuery(this).width();
      if (width == 0) width = jQuery(this).parent().width();
      var spv = jQuery(this).data('slides-per-view');
      if (spv == undefined) {
        spv = 1;
        jQuery(this).attr('data-slides-per-view', spv);
      }
      if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
      var space = jQuery(this).data('slides-space');
      if (space == undefined) space = 0;
      if (TRX_ADDONS_STORAGE['swipers'] === undefined) TRX_ADDONS_STORAGE['swipers'] = {};
      TRX_ADDONS_STORAGE['swipers'][id] = new Swiper('.' + id, {
        calculateHeight: !jQuery(this).hasClass('slider_height_fixed'),
        resizeReInit: true,
        autoResize: true,
        loop: true,
        grabCursor: true,
        pagination: jQuery(this).hasClass('slider_pagination') ? '#' + id + ' .slider_pagination_wrap' : false,
        paginationClickable: jQuery(this).hasClass('slider_pagination') ? '#' + id + ' .slider_pagination_wrap' : false,
        nextButton: jQuery(this).hasClass('slider_controls') ? '#' + id + ' .slider_next' : false,
        prevButton: jQuery(this).hasClass('slider_controls') ? '#' + id + ' .slider_prev' : false,
        autoplay: jQuery(this).hasClass('slider_noautoplay') ? false : (jQuery(this).data('interval') == '' || isNaN(jQuery(this).data('interval')) ? 7000 : parseInt(jQuery(this).data('interval'))),
        autoplayDisableOnInteraction: false,
        initialSlide: 0,
        slidesPerView: spv,
        loopedSlides: spv,
        spaceBetween: space,
        speed: 600
      });
      jQuery(this).animate({
        'opacity': 1
      }, 'fast');
    });
  }
}

function trx_addons_init_hidden_sliders(container) {
  trx_addons_init_sliders(container);
  trx_addons_resize_sliders(container);
}

function trx_addons_resize_sliders(container) {
  if (container === undefined) container = jQuery('body');
  container.find('.slider_swiper.inited').each(function() {
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    var id = jQuery(this).attr('id');
    var width = jQuery(this).width();
    var last_width = jQuery(this).data('last-width');
    if (isNaN(last_width)) last_width = 0;
    if (last_width == 0 || last_width != width) {
      var smw = jQuery(this).data('slides-min-width');
      var spv = jQuery(this).data('slides-per-view');
      if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
      jQuery(this).data('last-width', width);
      if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != spv) {
        TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView = spv;
        TRX_ADDONS_STORAGE['swipers'][id].params.loopedSlides = spv;
      }
    }
    if (!jQuery(this).hasClass('slider_height_fixed')) {
      var h = 0;
      if (jQuery(this).find('.swiper-slide > img').length > 0) {
        jQuery(this).find('.swiper-slide > img').each(function() {
          if (jQuery(this).height() > h) h = jQuery(this).height();
        });
        jQuery(this).height(h);
      } else if (jQuery(this).find('.swiper-slide').text() == '' || jQuery(this).hasClass('slider_height_auto')) {
        jQuery(this).height(Math.floor(width / 16 * 9));
      }
    }
  });
}
jQuery(document).ready(function() {
  if (jQuery('.trx_addons_contact_form_form').length > 0) {
    jQuery('.trx_addons_contact_form_form').submit(function(e) {
      trx_addons_contact_form_validate(jQuery(this));
      e.preventDefault();
      return false;
    });
  }
});

function trx_addons_contact_form_validate(form) {
  var url = form.attr('action');
  if (url == '') return false;
  form.find('input').removeClass('trx_addons_error_field');
  var error = trx_addons_form_validate(form, {
    rules: [{
      field: "name",
      min_length: {
        value: 1,
        message: TRX_ADDONS_STORAGE['msg_field_name_empty']
      },
    }, {
      field: "email",
      min_length: {
        value: 7,
        message: TRX_ADDONS_STORAGE['msg_field_email_empty']
      },
      mask: {
        value: TRX_ADDONS_STORAGE['email_mask'],
        message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
      }
    }, {
      field: "message",
      min_length: {
        value: 3,
        message: TRX_ADDONS_STORAGE['msg_field_text_empty']
      },
    }]
  });
  if (!error && url != '#') {
    jQuery.post(url, {
      action: "send_contact_form",
      nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
      data: form.serialize()
    }).done(function(response) {
      var rez = {};
      try {
        rez = JSON.parse(response);
      } catch (e) {
        rez = {
          error: TRX_ADDONS_STORAGE['msg_ajax_error']
        };
        console.log(response);
      }
      var result = form.find(".trx_addons_message_box").toggleClass("trx_addons_message_box_error", false).toggleClass("trx_addons_message_box_success", false);
      if (rez.error === '') {
        form.get(0).reset();
        result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_send_complete']);
      } else {
        result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
      }
      result.fadeIn().delay(3000).fadeOut();
    });
  }
  return !error;
}
jQuery(document).ready(function() {
  jQuery('.sc_recent_news_header_category_item_more').on('click', function() {
    jQuery(this).toggleClass('opened').find('.sc_recent_news_header_more_categories').slideToggle();
  });
});
jQuery(document).ready(function() {
  if (jQuery('.trx_addons_cv_section').length > 0) {
    jQuery('.trx_addons_cv_section_ajax').on("tabsbeforeactivate", ".trx_addons_tabs", function(event, ui) {
      if (ui.newPanel.data('need-content')) trx_addons_tab_content_loader(ui.newPanel, 1);
    });
    jQuery('.trx_addons_cv_section_ajax').on("click", '.trx_addons_pagination a', function(e) {
      var panel = jQuery(this).parents('.trx_addons_tabs_content');
      if (panel.length == 0) panel = jQuery(this).parents('.trx_addons_cv_section_content');
      trx_addons_tab_content_loader(panel, jQuery(this).data('page'));
      e.preventDefault();
      return false;
    });
    jQuery('.trx_addons_cv_section').on("click", '.trx_addons_cv_section_title, .trx_addons_tabs_titles > li > a', function(e) {
      trx_addons_document_set_location(trx_addons_add_to_url({
        'section': jQuery(this).parents('.trx_addons_cv_section').data('section'),
        'tab': jQuery(this).hasClass('trx_addons_cv_section_title') ? '' : jQuery(this).data('tab')
      }));
      e.preventDefault();
      return false;
    });
    jQuery('.trx_addons_cv_section_title > a.trx_addons_cv_section_title_icon').on("click", function(e) {
      if (!e) {
        window.event.cancelBubble = true;
      } else if (e.stopPropagation) {
        e.stopPropagation();
      }
    });
    if (jQuery('.trx_addons_cv_navi_buttons').length > 0) {
      var cont = jQuery('.trx_addons_cv_navi_buttons');
      var titles = '';
      var href = location.href;
      cont.find('.trx_addons_cv_section_title').each(function(idx) {
        var section = jQuery(this).parent().data('section');
        titles += '<a href="javascript:void()" class="trx_addons_cv_navi_buttons_item' + (href.indexOf('section=' + section) > 0 || (href.indexOf('section=') == -1 && idx == 0) ? ' trx_addons_cv_navi_buttons_item_active' : '') + '"' + ' data-idx="' + idx + '"' + ' data-section="' + section + '"' + ' title="' + jQuery(this).text() + '"' + '></a>';
      });
      cont.append('<div class="trx_addons_cv_navi_buttons_area">' + titles + '</div>');
      cont.find('.trx_addons_cv_navi_buttons_area a').on('click', function(e) {
        cont.find('.trx_addons_cv_section').eq(jQuery(this).data('idx')).find('.trx_addons_cv_section_title').trigger('click');
        jQuery(this).parent().find('.trx_addons_cv_navi_buttons_item').removeClass('trx_addons_cv_navi_buttons_item_active');
        jQuery(this).addClass('trx_addons_cv_navi_buttons_item_active');
        e.preventDefault();
        return false;
      });
      trx_addons_add_hidden_element_handler('cv_navi_buttons', trx_addons_cv_navi_buttons_state);
    }
    jQuery('.trx_addons_cv_header .trx_addons_cv_button_cv2').on("click", function(e) {
      jQuery('body').removeClass('trx_addons_cv_splash');
      e.preventDefault();
      return false;
    });
  }
});

function trx_addons_tab_content_loader(panel, page) {
  if (panel.html().replace(/\s/g, '') == '') panel.html('<div style="min-height:64px;"></div>');
  else panel.find('> *').css('opacity', 0);
  panel.data('need-content', false).addClass('trx_addons_loading');
  jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
    nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
    action: 'trx_addons_ajax_get_posts',
    section: panel.parents('.trx_addons_cv_section').data('section'),
    tab: panel.data('tab'),
    page: page
  }).done(function(response) {
    panel.removeClass('trx_addons_loading');
    var rez = {};
    try {
      rez = JSON.parse(response);
    } catch (e) {
      rez = {
        error: TRX_ADDONS_STORAGE['msg_ajax_error']
      };
      console.log(response);
    }
    if (rez.error !== '') {
      panel.html('<div class="trx_addons_error">' + rez.error + '</div>');
    } else {
      panel.html(rez.data).fadeIn(function() {
        trx_addons_init_hidden_elements(panel);
      });
    }
  });
}

function trx_addons_cv_navi_buttons_state(container) {
  var act = jQuery('.trx_addons_cv_section_title.ui-state-active');
  var buttons = jQuery('.trx_addons_cv_navi_buttons_item');
  if (act.length > 0 && buttons.length > 0) {
    buttons.removeClass('trx_addons_cv_navi_buttons_item_active');
    buttons.eq(act.parent().index()).addClass('trx_addons_cv_navi_buttons_item_active');
  }
}

function trx_addons_sc_init_actions() {
  trx_addons_add_hidden_element_handler('sc_ready_actions', trx_addons_sc_ready_actions);
  trx_addons_sc_ready_actions();
  trx_addons_sc_resize_actions();
  trx_addons_sc_scroll_actions();
  jQuery(window).resize(function() {
    trx_addons_sc_resize_actions();
  });
  jQuery(window).scroll(function() {
    trx_addons_sc_scroll_actions();
  });
}

function trx_addons_sc_ready_actions(container) {
  if (arguments.length == 0) var container = jQuery('body');
  trx_addons_sc_init_skills(container);
}

function trx_addons_sc_scroll_actions() {
  trx_addons_sc_init_skills();
}

function trx_addons_sc_resize_actions() {}

function trx_addons_sc_init_skills(container) {
  if (arguments.length == 0) var container = jQuery('body');
  var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();
  container.find('.trx_addons_sc_skills_item:not(.inited)').each(function() {
    var skillsItem = jQuery(this);
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
      return;
    }
    var scrollSkills = skillsItem.offset().top;
    if (scrollPosition > scrollSkills) {
      skillsItem.addClass('inited');
      var skills = skillsItem.parents('.trx_addons_sc_skills').eq(0);
      var type = skills.data('type');
      var total = (type == 'pie' && skills.hasClass('trx_addons_sc_skills_compact_on')) ? skillsItem.find('.trx_addons_sc_skills_data .pie') : skillsItem.find('.trx_addons_sc_skills_total').eq(0);
      var start = parseInt(total.data('start'));
      var stop = parseInt(total.data('stop'));
      var maximum = parseInt(total.data('max'));
      var startPercent = Math.round(start / maximum * 100);
      var stopPercent = Math.round(stop / maximum * 100);
      var ed = total.data('ed');
      var speed = parseInt(total.data('speed'));
      var step = parseInt(total.data('step'));
      var duration = parseInt(total.data('duration'));
      if (isNaN(duration)) duration = Math.ceil(maximum / step) * speed;
      if (type == 'bar') {
        var dir = skills.data('dir');
        var count = skillsItem.find('.trx_addons_sc_skills_count').eq(0);
        if (dir == 'horizontal') count.css('width', startPercent + '%').animate({
          width: stopPercent + '%'
        }, duration);
        else if (dir == 'vertical') count.css('height', startPercent + '%').animate({
          height: stopPercent + '%'
        }, duration);
        trx_addons_sc_animate_skills_counter(start, stop, speed, step, ed, total);
      } else if (type == 'counter') {
        trx_addons_sc_animate_skills_counter(start, stop, speed, step, ed, total);
      } else if (type == 'pie') {
        var steps = parseInt(total.data('steps'));
        var bg_color = total.data('bg_color');
        var border_color = total.data('border_color');
        var cutout = parseInt(total.data('cutout'));
        var easing = total.data('easing');
        var options = {
          segmentShowStroke: true,
          segmentStrokeColor: border_color,
          segmentStrokeWidth: 1,
          percentageInnerCutout: cutout,
          animationSteps: steps,
          animationEasing: easing,
          animateRotate: true,
          animateScale: false,
        };
        var pieData = [];
        total.each(function() {
          var color = jQuery(this).data('color');
          var stop = parseInt(jQuery(this).data('stop'));
          var stopPercent = Math.round(stop / maximum * 100);
          pieData.push({
            value: stopPercent,
            color: color
          });
        });
        if (total.length == 1) {
          trx_addons_sc_animate_skills_counter(start, stop, Math.round(1500 / steps), step, ed, total);
          pieData.push({
            value: 100 - stopPercent,
            color: bg_color
          });
        }
        var canvas = skillsItem.find('canvas');
        canvas.attr({
          width: skillsItem.width(),
          height: skillsItem.width()
        }).css({
          width: skillsItem.width(),
          height: skillsItem.height()
        });
        new Chart(canvas.get(0).getContext("2d")).Doughnut(pieData, options);
      }
    }
  });
}

function trx_addons_sc_animate_skills_counter(start, stop, speed, step, ed, total) {
  start = Math.min(stop, start + step);
  total.text(start + ed);
  if (start < stop) {
    setTimeout(function() {
      trx_addons_sc_animate_skills_counter(start, stop, speed, step, ed, total);
    }, speed);
  }
}

/* 5. superfish.min.js
-----------------------------------------------------------------------------------------------*/
(function(b) {
  var a = (function() {
    var o = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows"
      },
      e = (function() {
        var c = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (c) {
          b(window).load(function() {
            b("body").children().on("click", b.noop)
          })
        }
        return c
      })(),
      j = (function() {
        var c = document.documentElement.style;
        return ("behavior" in c && "fill" in c && /iemobile/i.test(navigator.userAgent))
      })(),
      l = function(r, s) {
        var c = o.menuClass;
        if (s.cssArrows) {
          c += " " + o.menuArrowClass
        }
        r.toggleClass(c)
      },
      q = function(c, r) {
        return c.find("li." + r.pathClass).slice(0, r.pathLevels).addClass(r.hoverClass + " " + o.bcClass).filter(function() {
          return (b(this).children(r.popUpSelector).hide().show().length)
        }).removeClass(r.pathClass)
      },
      m = function(c) {
        c.children("a").toggleClass(o.anchorClass)
      },
      f = function(c) {
        var r = c.css("ms-touch-action");
        r = (r === "pan-y") ? "auto" : "pan-y";
        c.css("ms-touch-action", r)
      },
      i = function(s, t) {
        var c = "li:has(" + t.popUpSelector + ")";
        if (b.fn.hoverIntent && !t.disableHI) {
          s.hoverIntent(k, g, c)
        } else {
          s.on("mouseenter.superfish", c, k).on("mouseleave.superfish", c, g)
        }
        var r = "MSPointerDown.superfish";
        if (!e) {
          r += " touchend.superfish"
        }
        if (j) {
          r += " mousedown.superfish"
        }
        s.on("focusin.superfish", "li", k).on("focusout.superfish", "li", g).on(r, "a", t, h)
      },
      h = function(s) {
        var r = b(this),
          c = r.siblings(s.data.popUpSelector);
        if (c.length > 0 && c.is(":hidden")) {
          r.one("click.superfish", false);
          if (s.type === "MSPointerDown") {
            r.trigger("focus")
          } else {
            b.proxy(k, r.parent("li"))()
          }
        }
      },
      k = function() {
        var c = b(this),
          r = n(c);
        clearTimeout(r.sfTimer);
        c.siblings().superfish("hide").end().superfish("show")
      },
      g = function() {
        var c = b(this),
          r = n(c);
        if (e) {
          b.proxy(p, c, r)()
        } else {
          clearTimeout(r.sfTimer);
          r.sfTimer = setTimeout(b.proxy(p, c, r), r.delay)
        }
      },
      p = function(c) {
        c.retainPath = (b.inArray(this[0], c.$path) > -1);
        this.superfish("hide");
        if (!this.parents("." + c.hoverClass).length) {
          c.onIdle.call(d(this));
          if (c.$path.length) {
            b.proxy(k, c.$path)()
          }
        }
      },
      d = function(c) {
        return c.closest("." + o.menuClass)
      },
      n = function(c) {
        return d(c).data("sf-options")
      };
    return {
      hide: function(r) {
        if (this.length) {
          var u = this,
            v = n(u);
          if (!v) {
            return this
          }
          var s = (v.retainPath === true) ? v.$path : "",
            c = u.find("li." + v.hoverClass).add(this).not(s).removeClass(v.hoverClass).children(v.popUpSelector),
            t = v.speedOut;
          if (r) {
            c.show();
            t = 0
          }
          v.retainPath = false;
          v.onBeforeHide.call(c);
          c.stop(true, true).animate(v.animationOut, t, function() {
            var w = b(this);
            v.onHide.call(w)
          })
        }
        return this
      },
      show: function() {
        var s = n(this);
        if (!s) {
          return this
        }
        var r = this.addClass(s.hoverClass),
          c = r.children(s.popUpSelector);
        s.onBeforeShow.call(c);
        c.stop(true, true).animate(s.animation, s.speed, function() {
          s.onShow.call(c)
        });
        return this
      },
      destroy: function() {
        return this.each(function() {
          var r = b(this),
            s = r.data("sf-options"),
            c;
          if (!s) {
            return false
          }
          c = r.find(s.popUpSelector).parent("li");
          clearTimeout(s.sfTimer);
          l(r, s);
          m(c);
          f(r);
          r.off(".superfish").off(".hoverIntent");
          c.children(s.popUpSelector).attr("style", function(t, u) {
            return u.replace(/display[^;]+;?/g, "")
          });
          s.$path.removeClass(s.hoverClass + " " + o.bcClass).addClass(s.pathClass);
          r.find("." + s.hoverClass).removeClass(s.hoverClass);
          s.onDestroy.call(r);
          r.removeData("sf-options")
        })
      },
      init: function(c) {
        return this.each(function() {
          var s = b(this);
          if (s.data("sf-options")) {
            return false
          }
          var t = b.extend({}, b.fn.superfish.defaults, c),
            r = s.find(t.popUpSelector).parent("li");
          t.$path = q(s, t);
          s.data("sf-options", t);
          l(s, t);
          m(r);
          f(s);
          i(s, t);
          r.not("." + o.bcClass).superfish("hide", true);
          t.onInit.call(this)
        })
      }
    }
  })();
  b.fn.superfish = function(d, c) {
    if (a[d]) {
      return a[d].apply(this, Array.prototype.slice.call(arguments, 1))
    } else {
      if (typeof d === "object" || !d) {
        return a.init.apply(this, arguments)
      } else {
        return b.error("Method " + d + " does not exist on jQuery.fn.superfish")
      }
    }
  };
  b.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega",
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: {
      opacity: "show"
    },
    animationOut: {
      opacity: "hide"
    },
    speed: "normal",
    speedOut: "fast",
    cssArrows: true,
    disableHI: false,
    onInit: b.noop,
    onBeforeShow: b.noop,
    onShow: b.noop,
    onBeforeHide: b.noop,
    onHide: b.noop,
    onIdle: b.noop,
    onDestroy: b.noop
  };
  b.fn.extend({
    hideSuperfishUl: a.hide,
    showSuperfishUl: a.show
  })
})(jQuery);

/* 6. skip-link-focus-fix.min.js
-----------------------------------------------------------------------------------------------*/
(function() {
  var a = navigator.userAgent.toLowerCase();
  if ((a.indexOf("webkit") > -1 || a.indexOf("opera") > -1 || a.indexOf("msie") > -1) && document.getElementById && window.addEventListener) {
    window.addEventListener("hashchange", function() {
      var b = document.getElementById(location.hash.substring(1));
      if (b) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(b.nodeName)) {
          b.tabIndex = -1
        }
        b.focus()
      }
    }, false)
  }
})();

/* 7.  core.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  function b(b, d) {
    var e, f, g, h = b.nodeName.toLowerCase();
    return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
  }

  function c(b) {
    return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
      return "hidden" === a.css(this, "visibility")
    }).length
  }
  a.ui = a.ui || {}, a.extend(a.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), a.fn.extend({
    scrollParent: function(b) {
      var c = this.css("position"),
        d = "absolute" === c,
        e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        f = this.parents().filter(function() {
          var b = a(this);
          return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }).eq(0);
      return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
    },
    uniqueId: function() {
      var a = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++a)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
      })
    }
  }), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
      return function(c) {
        return !!a.data(c, b)
      }
    }) : function(b, c, d) {
      return !!a.data(b, d[3])
    },
    focusable: function(c) {
      return b(c, !isNaN(a.attr(c, "tabindex")))
    },
    tabbable: function(c) {
      var d = a.attr(c, "tabindex"),
        e = isNaN(d);
      return (e || d >= 0) && b(c, !e)
    }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
    function d(b, c, d, f) {
      return a.each(e, function() {
        c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
      }), c
    }
    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
      f = c.toLowerCase(),
      g = {
        innerWidth: a.fn.innerWidth,
        innerHeight: a.fn.innerHeight,
        outerWidth: a.fn.outerWidth,
        outerHeight: a.fn.outerHeight
      };
    a.fn["inner" + c] = function(b) {
      return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
        a(this).css(f, d(this, b) + "px")
      })
    }, a.fn["outer" + c] = function(b, e) {
      return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
        a(this).css(f, d(this, b, !0, e) + "px")
      })
    }
  }), a.fn.addBack || (a.fn.addBack = function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
    return function(c) {
      return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
    }
  }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
    focus: function(b) {
      return function(c, d) {
        return "number" == typeof c ? this.each(function() {
          var b = this;
          setTimeout(function() {
            a(b).focus(), d && d.call(b)
          }, c)
        }) : b.apply(this, arguments)
      }
    }(a.fn.focus),
    disableSelection: function() {
      var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.bind(a + ".ui-disableSelection", function(a) {
          a.preventDefault()
        })
      }
    }(),
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    },
    zIndex: function(b) {
      if (void 0 !== b) return this.css("zIndex", b);
      if (this.length)
        for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
          if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
          e = e.parent()
        }
      return 0
    }
  }), a.ui.plugin = {
    add: function(b, c, d) {
      var e, f = a.ui[b].prototype;
      for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
    },
    call: function(a, b, c, d) {
      var e, f = a.plugins[b];
      if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
        for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
    }
  }
});

/* 8. widget.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  var b = 0,
    c = Array.prototype.slice;
  return a.cleanData = function(b) {
    return function(c) {
      var d, e, f;
      for (f = 0; null != (e = c[f]); f++) try {
        d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
      } catch (g) {}
      b(c)
    }
  }(a.cleanData), a.widget = function(b, c, d) {
    var e, f, g, h, i = {},
      j = b.split(".")[0];
    return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
      return !!a.data(b, e)
    }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
      return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
    }, a.extend(g, f, {
      version: d.version,
      _proto: a.extend({}, d),
      _childConstructors: []
    }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
      return a.isFunction(d) ? void(i[b] = function() {
        var a = function() {
            return c.prototype[b].apply(this, arguments)
          },
          e = function(a) {
            return c.prototype[b].apply(this, a)
          };
        return function() {
          var b, c = this._super,
            f = this._superApply;
          return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
        }
      }()) : void(i[b] = d)
    }), g.prototype = a.widget.extend(h, {
      widgetEventPrefix: f ? h.widgetEventPrefix || b : b
    }, i, {
      constructor: g,
      namespace: j,
      widgetName: b,
      widgetFullName: e
    }), f ? (a.each(f._childConstructors, function(b, c) {
      var d = c.prototype;
      a.widget(d.namespace + "." + d.widgetName, g, c._proto)
    }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
  }, a.widget.extend = function(b) {
    for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
      for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
    return b
  }, a.widget.bridge = function(b, d) {
    var e = d.prototype.widgetFullName || b;
    a.fn[b] = function(f) {
      var g = "string" == typeof f,
        h = c.call(arguments, 1),
        i = this;
      return g ? this.each(function() {
        var c, d = a.data(this, e);
        return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
      }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
        var b = a.data(this, e);
        b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
      })), i
    }
  }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(c, d) {
      d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(a) {
          a.target === d && this.destroy()
        }
      }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: a.noop,
    _getCreateEventData: a.noop,
    _create: a.noop,
    _init: a.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: a.noop,
    widget: function() {
      return this.element
    },
    option: function(b, c) {
      var d, e, f, g = b;
      if (0 === arguments.length) return a.widget.extend({}, this.options);
      if ("string" == typeof b)
        if (g = {}, d = b.split("."), b = d.shift(), d.length) {
          for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
          if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
          e[b] = c
        } else {
          if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
          g[b] = c
        } return this._setOptions(g), this
    },
    _setOptions: function(a) {
      var b;
      for (b in a) this._setOption(b, a[b]);
      return this
    },
    _setOption: function(a, b) {
      return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function() {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function() {
      return this._setOptions({
        disabled: !0
      })
    },
    _on: function(b, c, d) {
      var e, f = this;
      "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
        function h() {
          if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
        }
        "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
        var i = d.match(/^([\w:-]*)\s*(.*)$/),
          j = i[1] + f.eventNamespace,
          k = i[2];
        k ? e.delegate(k, j, h) : c.bind(j, h)
      })
    },
    _off: function(b, c) {
      c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
    },
    _delay: function(a, b) {
      function c() {
        return ("string" == typeof a ? d[a] : a).apply(d, arguments)
      }
      var d = this;
      return setTimeout(c, b || 0)
    },
    _hoverable: function(b) {
      this.hoverable = this.hoverable.add(b), this._on(b, {
        mouseenter: function(b) {
          a(b.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(b) {
          a(b.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(b) {
      this.focusable = this.focusable.add(b), this._on(b, {
        focusin: function(b) {
          a(b.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(b) {
          a(b.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(b, c, d) {
      var e, f, g = this.options[b];
      if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
        for (e in f) e in c || (c[e] = f[e]);
      return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
    }
  }, a.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(b, c) {
    a.Widget.prototype["_" + b] = function(d, e, f) {
      "string" == typeof e && (e = {
        effect: e
      });
      var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
      e = e || {}, "number" == typeof e && (e = {
        duration: e
      }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
        a(this)[b](), f && f.call(d[0]), c()
      })
    }
  }), a.widget
});

/* 9. tabs.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
  return a.widget("ui.tabs", {
    version: "1.11.4",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function() {
      var a = /#.*$/;
      return function(b) {
        var c, d;
        b = b.cloneNode(!1), c = b.href.replace(a, ""), d = location.href.replace(a, "");
        try {
          c = decodeURIComponent(c)
        } catch (e) {}
        try {
          d = decodeURIComponent(d)
        } catch (e) {}
        return b.hash.length > 1 && c === d
      }
    }(),
    _create: function() {
      var b = this,
        c = this.options;
      this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
        return b.tabs.index(a)
      }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(c.active) : this.active = a(), this._refresh(), this.active.length && this.load(c.active)
    },
    _initialActive: function() {
      var b = this.options.active,
        c = this.options.collapsible,
        d = location.hash.substring(1);
      return null === b && (d && this.tabs.each(function(c, e) {
        if (a(e).attr("aria-controls") === d) return b = c, !1
      }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== b && b !== -1 || (b = !!this.tabs.length && 0)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), b === -1 && (b = !c && 0)), !c && b === !1 && this.anchors.length && (b = 0), b
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : a()
      }
    },
    _tabKeydown: function(b) {
      var c = a(this.document[0].activeElement).closest("li"),
        d = this.tabs.index(c),
        e = !0;
      if (!this._handlePageNav(b)) {
        switch (b.keyCode) {
          case a.ui.keyCode.RIGHT:
          case a.ui.keyCode.DOWN:
            d++;
            break;
          case a.ui.keyCode.UP:
          case a.ui.keyCode.LEFT:
            e = !1, d--;
            break;
          case a.ui.keyCode.END:
            d = this.anchors.length - 1;
            break;
          case a.ui.keyCode.HOME:
            d = 0;
            break;
          case a.ui.keyCode.SPACE:
            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
          case a.ui.keyCode.ENTER:
            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d !== this.options.active && d);
          default:
            return
        }
        b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
          this.option("active", d)
        }, this.delay))
      }
    },
    _panelKeydown: function(b) {
      this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
    },
    _handlePageNav: function(b) {
      return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
    },
    _findNextTab: function(b, c) {
      function d() {
        return b > e && (b = 0), b < 0 && (b = e), b
      }
      for (var e = this.tabs.length - 1; a.inArray(d(), this.options.disabled) !== -1;) b = c ? b + 1 : b - 1;
      return b
    },
    _focusNextTab: function(a, b) {
      return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
    },
    _setOption: function(a, b) {
      return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
    },
    _sanitizeSelector: function(a) {
      return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    },
    refresh: function() {
      var b = this.options,
        c = this.tablist.children(":has(a[href])");
      b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
        return c.index(a)
      }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
    },
    _refresh: function() {
      this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0)
    },
    _processTabs: function() {
      var b = this,
        c = this.tabs,
        d = this.anchors,
        e = this.panels;
      this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
        a(this).is(".ui-state-disabled") && b.preventDefault()
      }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
        a(this).closest("li").is(".ui-state-disabled") && this.blur()
      }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
        role: "tab",
        tabIndex: -1
      }), this.anchors = this.tabs.map(function() {
        return a("a", this)[0]
      }).addClass("ui-tabs-anchor").attr({
        role: "presentation",
        tabIndex: -1
      }), this.panels = a(), this.anchors.each(function(c, d) {
        var e, f, g, h = a(d).uniqueId().attr("id"),
          i = a(d).closest("li"),
          j = i.attr("aria-controls");
        b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), i.attr({
          "aria-controls": g,
          "aria-labelledby": h
        }), f.attr("aria-labelledby", h)
      }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
    },
    _getList: function() {
      return this.tablist || this.element.find("ol,ul").eq(0)
    },
    _createPanel: function(b) {
      return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    },
    _setupDisabled: function(b) {
      a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
      for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || a.inArray(d, b) !== -1 ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      this.options.disabled = b
    },
    _setupEvents: function(b) {
      var c = {};
      b && a.each(b.split(" "), function(a, b) {
        c[b] = "_eventHandler"
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function(a) {
          a.preventDefault()
        }
      }), this._on(this.anchors, c), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs)
    },
    _setupHeightStyle: function(b) {
      var c, d = this.element.parent();
      "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
        var b = a(this),
          d = b.css("position");
        "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
      }), this.element.children().not(this.panels).each(function() {
        c -= a(this).outerHeight(!0)
      }), this.panels.each(function() {
        a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
      }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
        c = Math.max(c, a(this).height("").height())
      }).height(c))
    },
    _eventHandler: function(b) {
      var c = this.options,
        d = this.active,
        e = a(b.currentTarget),
        f = e.closest("li"),
        g = f[0] === d[0],
        h = g && c.collapsible,
        i = h ? a() : this._getPanelForTab(f),
        j = d.length ? this._getPanelForTab(d) : a(),
        k = {
          oldTab: d,
          oldPanel: j,
          newTab: h ? a() : f,
          newPanel: i
        };
      b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = !h && this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
    },
    _toggle: function(b, c) {
      function d() {
        f.running = !1, f._trigger("activate", b, c)
      }

      function e() {
        c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
      }
      var f = this,
        g = c.newPanel,
        h = c.oldPanel;
      this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
        c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
      }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
        return 0 === a(this).attr("tabIndex")
      }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _activate: function(b) {
      var c, d = this._findActive(b);
      d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: c,
        currentTarget: c,
        preventDefault: a.noop
      }))
    },
    _findActive: function(b) {
      return b === !1 ? a() : this.tabs.eq(b)
    },
    _getIndex: function(a) {
      return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
    },
    _destroy: function() {
      this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
        a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
      }), this.tabs.each(function() {
        var b = a(this),
          c = b.data("ui-tabs-aria-controls");
        c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    },
    enable: function(b) {
      var c = this.options.disabled;
      c !== !1 && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
        return a !== b ? a : null
      }) : a.map(this.tabs, function(a, c) {
        return c !== b ? c : null
      })), this._setupDisabled(c))
    },
    disable: function(b) {
      var c = this.options.disabled;
      if (c !== !0) {
        if (void 0 === b) c = !0;
        else {
          if (b = this._getIndex(b), a.inArray(b, c) !== -1) return;
          c = a.isArray(c) ? a.merge([b], c).sort() : [b]
        }
        this._setupDisabled(c)
      }
    },
    load: function(b, c) {
      b = this._getIndex(b);
      var d = this,
        e = this.tabs.eq(b),
        f = e.find(".ui-tabs-anchor"),
        g = this._getPanelForTab(e),
        h = {
          tab: e,
          panel: g
        },
        i = function(a, b) {
          "abort" === b && d.panels.stop(!1, !0), e.removeClass("ui-tabs-loading"), g.removeAttr("aria-busy"), a === d.xhr && delete d.xhr
        };
      this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
        setTimeout(function() {
          g.html(a), d._trigger("load", c, h), i(e, b)
        }, 1)
      }).fail(function(a, b) {
        setTimeout(function() {
          i(a, b)
        }, 1)
      })))
    },
    _ajaxSettings: function(b, c, d) {
      var e = this;
      return {
        url: b.attr("href"),
        beforeSend: function(b, f) {
          return e._trigger("beforeLoad", c, a.extend({
            jqXHR: b,
            ajaxSettings: f
          }, d))
        }
      }
    },
    _getPanelForTab: function(b) {
      var c = a(b).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + c))
    }
  })
});

/* 10. effect.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  var b = "ui-effects-",
    c = a;
  /*!
   */
  return a.effects = {
      effect: {}
    },
    function(a, b) {
      function c(a, b, c) {
        var d = l[b.type] || {};
        return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
      }

      function d(b) {
        var c = j(),
          d = c._rgba = [];
        return b = b.toLowerCase(), o(i, function(a, e) {
          var f, g = e.re.exec(b),
            h = g && e.parse(g),
            i = e.space || "rgba";
          if (h) return f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1
        }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
      }

      function e(a, b, c) {
        return c = (c + 1) % 1, 6 * c < 1 ? a + (b - a) * c * 6 : 2 * c < 1 ? b : 3 * c < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
      }
      var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        h = /^([\-+])=\s*(\d+\.?\d*)/,
        i = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(a) {
            return [a[1], a[2], a[3], a[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(a) {
            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(a) {
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(a) {
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(a) {
            return [a[1], a[2] / 100, a[3] / 100, a[4]]
          }
        }],
        j = a.Color = function(b, c, d, e) {
          return new a.Color.fn.parse(b, c, d, e)
        },
        k = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        l = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        m = j.support = {},
        n = a("<p>")[0],
        o = a.each;
      n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
        b.cache = "_" + a, b.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), j.fn = a.extend(j.prototype, {
        parse: function(e, g, h, i) {
          if (e === b) return this._rgba = [null, null, null, null], this;
          (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
          var l = this,
            m = a.type(e),
            n = this._rgba = [];
          return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
            n[b.idx] = c(e[b.idx], b)
          }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
            e[b.cache] && (l[b.cache] = e[b.cache].slice())
          }) : o(k, function(b, d) {
            var f = d.cache;
            o(d.props, function(a, b) {
              if (!l[f] && d.to) {
                if ("alpha" === a || null == e[a]) return;
                l[f] = d.to(l._rgba)
              }
              l[f][b.idx] = c(e[a], b, !0)
            }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
          }), this) : void 0
        },
        is: function(a) {
          var b = j(a),
            c = !0,
            d = this;
          return o(k, function(a, e) {
            var f, g = b[e.cache];
            return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
              if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
            })), c
          }), c
        },
        _space: function() {
          var a = [],
            b = this;
          return o(k, function(c, d) {
            b[d.cache] && a.push(c)
          }), a.pop()
        },
        transition: function(a, b) {
          var d = j(a),
            e = d._space(),
            f = k[e],
            g = 0 === this.alpha() ? j("transparent") : this,
            h = g[f.cache] || f.to(g._rgba),
            i = h.slice();
          return d = d[f.cache], o(f.props, function(a, e) {
            var f = e.idx,
              g = h[f],
              j = d[f],
              k = l[e.type] || {};
            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
          }), this[e](i)
        },
        blend: function(b) {
          if (1 === this._rgba[3]) return this;
          var c = this._rgba.slice(),
            d = c.pop(),
            e = j(b)._rgba;
          return j(a.map(c, function(a, b) {
            return (1 - d) * e[b] + d * a
          }))
        },
        toRgbaString: function() {
          var b = "rgba(",
            c = a.map(this._rgba, function(a, b) {
              return null == a ? b > 2 ? 1 : 0 : a
            });
          return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
        },
        toHslaString: function() {
          var b = "hsla(",
            c = a.map(this.hsla(), function(a, b) {
              return null == a && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(100 * a) + "%"), a
            });
          return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
        },
        toHexString: function(b) {
          var c = this._rgba.slice(),
            d = c.pop();
          return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
          }).join("")
        },
        toString: function() {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b, c, d = a[0] / 255,
          e = a[1] / 255,
          f = a[2] / 255,
          g = a[3],
          h = Math.max(d, e, f),
          i = Math.min(d, e, f),
          j = h - i,
          k = h + i,
          l = .5 * k;
        return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : l <= .5 ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
      }, k.hsla.from = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b = a[0] / 360,
          c = a[1],
          d = a[2],
          f = a[3],
          g = d <= .5 ? d * (1 + c) : d + c - d * c,
          h = 2 * d - g;
        return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
      }, o(k, function(d, e) {
        var f = e.props,
          g = e.cache,
          i = e.to,
          k = e.from;
        j.fn[d] = function(d) {
          if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
          var e, h = a.type(d),
            l = "array" === h || "object" === h ? d : arguments,
            m = this[g].slice();
          return o(f, function(a, b) {
            var d = l["object" === h ? a : b.idx];
            null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
          }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
        }, o(f, function(b, c) {
          j.fn[b] || (j.fn[b] = function(e) {
            var f, g = a.type(e),
              i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
              j = this[i](),
              k = j[c.idx];
            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
          })
        })
      }), j.hook = function(b) {
        var c = b.split(" ");
        o(c, function(b, c) {
          a.cssHooks[c] = {
            set: function(b, e) {
              var f, g, h = "";
              if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                  for (g = "backgroundColor" === c ? b.parentNode : b;
                    ("" === h || "transparent" === h) && g && g.style;) try {
                    h = a.css(g, "backgroundColor"), g = g.parentNode
                  } catch (i) {}
                  e = e.blend(h && "transparent" !== h ? h : "_default")
                }
                e = e.toRgbaString()
              }
              try {
                b.style[c] = e
              } catch (i) {}
            }
          }, a.fx.step[c] = function(b) {
            b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
          }
        })
      }, j.hook(g), a.cssHooks.borderColor = {
        expand: function(a) {
          var b = {};
          return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
            b["border" + d + "Color"] = a
          }), b
        }
      }, f = a.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(c),
    function() {
      function b(b) {
        var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
          f = {};
        if (e && e.length && e[0] && e[e[0]])
          for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
        else
          for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
        return f
      }

      function d(b, c) {
        var d, e, g = {};
        for (d in c) e = c[d], b[d] !== e && (f[d] || !a.fx.step[d] && isNaN(parseFloat(e)) || (g[d] = e));
        return g
      }
      var e = ["add", "remove", "toggle"],
        f = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, d) {
        a.fx.step[d] = function(a) {
          ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (c.style(a.elem, d, a.end), a.setAttr = !0)
        }
      }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }), a.effects.animateClass = function(c, f, g, h) {
        var i = a.speed(f, g, h);
        return this.queue(function() {
          var f, g = a(this),
            h = g.attr("class") || "",
            j = i.children ? g.find("*").addBack() : g;
          j = j.map(function() {
            var c = a(this);
            return {
              el: c,
              start: b(this)
            }
          }), f = function() {
            a.each(e, function(a, b) {
              c[b] && g[b + "Class"](c[b])
            })
          }, f(), j = j.map(function() {
            return this.end = b(this.el[0]), this.diff = d(this.start, this.end), this
          }), g.attr("class", h), j = j.map(function() {
            var b = this,
              c = a.Deferred(),
              d = a.extend({}, i, {
                queue: !1,
                complete: function() {
                  c.resolve(b)
                }
              });
            return this.el.animate(this.diff, d), c.promise()
          }), a.when.apply(a, j.get()).done(function() {
            f(), a.each(arguments, function() {
              var b = this.el;
              a.each(this.diff, function(a) {
                b.css(a, "")
              })
            }), i.complete.call(g[0])
          })
        })
      }, a.fn.extend({
        addClass: function(b) {
          return function(c, d, e, f) {
            return d ? a.effects.animateClass.call(this, {
              add: c
            }, d, e, f) : b.apply(this, arguments)
          }
        }(a.fn.addClass),
        removeClass: function(b) {
          return function(c, d, e, f) {
            return arguments.length > 1 ? a.effects.animateClass.call(this, {
              remove: c
            }, d, e, f) : b.apply(this, arguments)
          }
        }(a.fn.removeClass),
        toggleClass: function(b) {
          return function(c, d, e, f, g) {
            return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
              add: c
            } : {
              remove: c
            }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
              toggle: c
            }, d, e, f)
          }
        }(a.fn.toggleClass),
        switchClass: function(b, c, d, e, f) {
          return a.effects.animateClass.call(this, {
            add: c,
            remove: b
          }, d, e, f)
        }
      })
    }(),
    function() {
      function c(b, c, d, e) {
        return a.isPlainObject(b) && (c = b, b = b.effect), b = {
          effect: b
        }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
      }

      function d(b) {
        return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect))
      }
      a.extend(a.effects, {
        version: "1.11.4",
        save: function(a, c) {
          for (var d = 0; d < c.length; d++) null !== c[d] && a.data(b + c[d], a[0].style[c[d]])
        },
        restore: function(a, c) {
          var d, e;
          for (e = 0; e < c.length; e++) null !== c[e] && (d = a.data(b + c[e]), void 0 === d && (d = ""), a.css(c[e], d))
        },
        setMode: function(a, b) {
          return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
        },
        getBaseline: function(a, b) {
          var c, d;
          switch (a[0]) {
            case "top":
              c = 0;
              break;
            case "middle":
              c = .5;
              break;
            case "bottom":
              c = 1;
              break;
            default:
              c = a[0] / b.height
          }
          switch (a[1]) {
            case "left":
              d = 0;
              break;
            case "center":
              d = .5;
              break;
            case "right":
              d = 1;
              break;
            default:
              d = a[1] / b.width
          }
          return {
            x: d,
            y: c
          }
        },
        createWrapper: function(b) {
          if (b.parent().is(".ui-effects-wrapper")) return b.parent();
          var c = {
              width: b.outerWidth(!0),
              height: b.outerHeight(!0),
              "float": b.css("float")
            },
            d = a("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            e = {
              width: b.width(),
              height: b.height()
            },
            f = document.activeElement;
          try {
            f.id
          } catch (g) {
            f = document.body
          }
          return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
            position: "relative"
          }), b.css({
            position: "relative"
          })) : (a.extend(c, {
            position: b.css("position"),
            zIndex: b.css("z-index")
          }), a.each(["top", "left", "bottom", "right"], function(a, d) {
            c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
          }), b.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), b.css(e), d.css(c).show()
        },
        removeWrapper: function(b) {
          var c = document.activeElement;
          return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
        },
        setTransition: function(b, c, d, e) {
          return e = e || {}, a.each(c, function(a, c) {
            var f = b.cssUnit(c);
            f[0] > 0 && (e[c] = f[0] * d + f[1])
          }), e
        }
      }), a.fn.extend({
        effect: function() {
          function b(b) {
            function c() {
              a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
            }
            var e = a(this),
              f = d.complete,
              h = d.mode;
            (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
          }
          var d = c.apply(this, arguments),
            e = d.mode,
            f = d.queue,
            g = a.effects.effect[d.effect];
          return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
            d.complete && d.complete.call(this)
          }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
        },
        show: function(a) {
          return function(b) {
            if (d(b)) return a.apply(this, arguments);
            var e = c.apply(this, arguments);
            return e.mode = "show", this.effect.call(this, e)
          }
        }(a.fn.show),
        hide: function(a) {
          return function(b) {
            if (d(b)) return a.apply(this, arguments);
            var e = c.apply(this, arguments);
            return e.mode = "hide", this.effect.call(this, e)
          }
        }(a.fn.hide),
        toggle: function(a) {
          return function(b) {
            if (d(b) || "boolean" == typeof b) return a.apply(this, arguments);
            var e = c.apply(this, arguments);
            return e.mode = "toggle", this.effect.call(this, e)
          }
        }(a.fn.toggle),
        cssUnit: function(b) {
          var c = this.css(b),
            d = [];
          return a.each(["em", "px", "%", "pt"], function(a, b) {
            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
          }), d
        }
      })
    }(),
    function() {
      var b = {};
      a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
        b[c] = function(b) {
          return Math.pow(b, a + 2)
        }
      }), a.extend(b, {
        Sine: function(a) {
          return 1 - Math.cos(a * Math.PI / 2)
        },
        Circ: function(a) {
          return 1 - Math.sqrt(1 - a * a)
        },
        Elastic: function(a) {
          return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(a) {
          return a * a * (3 * a - 2)
        },
        Bounce: function(a) {
          for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
          return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
        }
      }), a.each(b, function(b, c) {
        a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
          return 1 - c(1 - a)
        }, a.easing["easeInOut" + b] = function(a) {
          return a < .5 ? c(2 * a) / 2 : 1 - c(a * -2 + 2) / 2
        }
      })
    }(), a.effects
});

/* 11. effect-fade.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery", "./effect"], a) : a(jQuery)
}(function(a) {
  return a.effects.effect.fade = function(b, c) {
    var d = a(this),
      e = a.effects.setMode(d, b.mode || "toggle");
    d.animate({
      opacity: e
    }, {
      queue: !1,
      duration: b.duration,
      easing: b.easing,
      complete: c
    })
  }
});

/* 12. accordion.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
  return a.widget("ui.accordion", {
    version: "1.11.4",
    options: {
      active: 0,
      animate: {},
      collapsible: !1,
      event: "click",
      header: "> li > :first-child,> :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function() {
      var b = this.options;
      this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), b.active < 0 && (b.active += this.headers.length), this._refresh()
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : a()
      }
    },
    _createIcons: function() {
      var b = this.options.icons;
      b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
    },
    _destroyIcons: function() {
      this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    },
    _destroy: function() {
      var a;
      this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && a.css("height", "")
    },
    _setOption: function(a, b) {
      return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))))
    },
    _keydown: function(b) {
      if (!b.altKey && !b.ctrlKey) {
        var c = a.ui.keyCode,
          d = this.headers.length,
          e = this.headers.index(b.target),
          f = !1;
        switch (b.keyCode) {
          case c.RIGHT:
          case c.DOWN:
            f = this.headers[(e + 1) % d];
            break;
          case c.LEFT:
          case c.UP:
            f = this.headers[(e - 1 + d) % d];
            break;
          case c.SPACE:
          case c.ENTER:
            this._eventHandler(b);
            break;
          case c.HOME:
            f = this.headers[0];
            break;
          case c.END:
            f = this.headers[d - 1]
        }
        f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
      }
    },
    _panelKeyDown: function(b) {
      b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
    },
    refresh: function() {
      var b = this.options;
      this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
    },
    _processPanels: function() {
      var a = this.headers,
        b = this.panels;
      this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
    },
    _refresh: function() {
      var b, c = this.options,
        d = c.heightStyle,
        e = this.element.parent();
      this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
        var b = a(this),
          c = b.uniqueId().attr("id"),
          d = b.next(),
          e = d.uniqueId().attr("id");
        b.attr("aria-controls", e), d.attr("aria-labelledby", c)
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
        var c = a(this),
          d = c.css("position");
        "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
      }), this.headers.each(function() {
        b -= a(this).outerHeight(!0)
      }), this.headers.next().each(function() {
        a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
      }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
        b = Math.max(b, a(this).css("height", "").height())
      }).height(b))
    },
    _activate: function(b) {
      var c = this._findActive(b)[0];
      c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
        target: c,
        currentTarget: c,
        preventDefault: a.noop
      }))
    },
    _findActive: function(b) {
      return "number" == typeof b ? this.headers.eq(b) : a()
    },
    _setupEvents: function(b) {
      var c = {
        keydown: "_keydown"
      };
      b && a.each(b.split(" "), function(a, b) {
        c[b] = "_eventHandler"
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers)
    },
    _eventHandler: function(b) {
      var c = this.options,
        d = this.active,
        e = a(b.currentTarget),
        f = e[0] === d[0],
        g = f && c.collapsible,
        h = g ? a() : e.next(),
        i = d.next(),
        j = {
          oldHeader: d,
          oldPanel: i,
          newHeader: g ? a() : e,
          newPanel: h
        };
      b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = !g && this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
    },
    _toggle: function(b) {
      var c = b.newPanel,
        d = this.prevShow.length ? this.prevShow : b.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
        "aria-hidden": "true"
      }), d.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), c.length && d.length ? d.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : c.length && this.headers.filter(function() {
        return 0 === parseInt(a(this).attr("tabIndex"), 10)
      }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _animate: function(a, b, c) {
      var d, e, f, g = this,
        h = 0,
        i = a.css("box-sizing"),
        j = a.length && (!b.length || a.index() < b.index()),
        k = this.options.animate || {},
        l = j && k.down || k,
        m = function() {
          g._toggleComplete(c)
        };
      return "number" == typeof l && (f = l), "string" == typeof l && (e = l), e = e || l.easing || k.easing, f = f || l.duration || k.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {
        duration: f,
        easing: e,
        step: function(a, b) {
          b.now = Math.round(a)
        }
      }), void a.hide().animate(this.showProps, {
        duration: f,
        easing: e,
        complete: m,
        step: function(a, c) {
          c.now = Math.round(a), "height" !== c.prop ? "content-box" === i && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), h = 0)
        }
      })) : b.animate(this.hideProps, f, e, m) : a.animate(this.showProps, f, e, m)
    },
    _toggleComplete: function(a) {
      var b = a.oldPanel;
      b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
    }
  })
});

/* 13. autocomplete.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], a) : a(jQuery)
}(function(a) {
  return a.widget("ui.autocomplete", {
    version: "1.11.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var b, c, d, e = this.element[0].nodeName.toLowerCase(),
        f = "textarea" === e,
        g = "input" === e;
      this.isMultiLine = !!f || !g && this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
        keydown: function(e) {
          if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
          b = !1, d = !1, c = !1;
          var f = a.ui.keyCode;
          switch (e.keyCode) {
            case f.PAGE_UP:
              b = !0, this._move("previousPage", e);
              break;
            case f.PAGE_DOWN:
              b = !0, this._move("nextPage", e);
              break;
            case f.UP:
              b = !0, this._keyEvent("previous", e);
              break;
            case f.DOWN:
              b = !0, this._keyEvent("next", e);
              break;
            case f.ENTER:
              this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
              break;
            case f.TAB:
              this.menu.active && this.menu.select(e);
              break;
            case f.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
              break;
            default:
              c = !0, this._searchTimeout(e)
          }
        },
        keypress: function(d) {
          if (b) return b = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault());
          if (!c) {
            var e = a.ui.keyCode;
            switch (d.keyCode) {
              case e.PAGE_UP:
                this._move("previousPage", d);
                break;
              case e.PAGE_DOWN:
                this._move("nextPage", d);
                break;
              case e.UP:
                this._keyEvent("previous", d);
                break;
              case e.DOWN:
                this._keyEvent("next", d)
            }
          }
        },
        input: function(a) {
          return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
        },
        focus: function() {
          this.selectedItem = null, this.previous = this._value()
        },
        blur: function(a) {
          return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
        }
      }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._on(this.menu.element, {
        mousedown: function(b) {
          b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur
          });
          var c = this.menu.element[0];
          a(b.target).closest(".ui-menu-item").length || this._delay(function() {
            var b = this;
            this.document.one("mousedown", function(d) {
              d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
            })
          })
        },
        menufocus: function(b, c) {
          var d, e;
          return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
            a(b.target).trigger(b.originalEvent)
          })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
            item: e
          }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
        },
        menuselect: function(a, b) {
          var c = b.item.data("ui-autocomplete-item"),
            d = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
            this.previous = d, this.selectedItem = c
          })), !1 !== this._trigger("select", a, {
            item: c
          }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
        }
      }), this.liveRegion = a("<span>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function(a, b) {
      this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
    },
    _appendTo: function() {
      var b = this.options.appendTo;
      return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
    },
    _initSource: function() {
      var b, c, d = this;
      a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
        d(a.ui.autocomplete.filter(b, c.term))
      }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
        d.xhr && d.xhr.abort(), d.xhr = a.ajax({
          url: c,
          data: b,
          dataType: "json",
          success: function(a) {
            e(a)
          },
          error: function() {
            e([])
          }
        })
      }) : this.source = this.options.source
    },
    _searchTimeout: function(a) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        var b = this.term === this._value(),
          c = this.menu.element.is(":visible"),
          d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
        b && (!b || c || d) || (this.selectedItem = null, this.search(null, a))
      }, this.options.delay)
    },
    search: function(a, b) {
      return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
    },
    _search: function(a) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: a
      }, this._response())
    },
    _response: function() {
      var b = ++this.requestIndex;
      return a.proxy(function(a) {
        b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
      }, this)
    },
    __response: function(a) {
      a && (a = this._normalize(a)), this._trigger("response", null, {
        content: a
      }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
    },
    close: function(a) {
      this.cancelSearch = !0, this._close(a)
    },
    _close: function(a) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
    },
    _change: function(a) {
      this.previous !== this._value() && this._trigger("change", a, {
        item: this.selectedItem
      })
    },
    _normalize: function(b) {
      return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
        return "string" == typeof b ? {
          label: b,
          value: b
        } : a.extend({}, b, {
          label: b.label || b.value,
          value: b.value || b.label
        })
      })
    },
    _suggest: function(b) {
      var c = this.menu.element.empty();
      this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next()
    },
    _resizeMenu: function() {
      var a = this.menu.element;
      a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(b, c) {
      var d = this;
      a.each(c, function(a, c) {
        d._renderItemData(b, c)
      })
    },
    _renderItemData: function(a, b) {
      return this._renderItem(a, b).data("ui-autocomplete-item", b)
    },
    _renderItem: function(b, c) {
      return a("<li>").text(c.label).appendTo(b)
    },
    _move: function(a, b) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
    },
    widget: function() {
      return this.menu.element
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function(a, b) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, b), b.preventDefault())
    }
  }), a.extend(a.ui.autocomplete, {
    escapeRegex: function(a) {
      return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },
    filter: function(b, c) {
      var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
      return a.grep(b, function(a) {
        return d.test(a.label || a.value || a)
      })
    }
  }), a.widget("ui.autocomplete", a.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(a) {
          return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    },
    __response: function(b) {
      var c;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
    }
  }), a.ui.autocomplete
});

/* 14.  wp-embed.min.js
-----------------------------------------------------------------------------------------------*/
! function(a, b) {
  "use strict";

  function c() {
    if (!e) {
      e = !0;
      var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++)
        if (d = i[c], !d.getAttribute("data-secret")) {
          if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
        } else;
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector)
    if (a.addEventListener) d = !0;
  if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
    if (a.wp.receiveEmbedMessage = function(c) {
        var d = c.data;
        if (d.secret || d.message || d.value)
          if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
              k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++)
              if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                  if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                  else if (~~g < 200) g = 200;
                  f.height = g
                }
                if ("link" === d.message)
                  if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                    if (b.activeElement === f) a.top.location.href = d.value
              } else;
          }
      }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);

/* -----------------------------------------------------------------------------------------------*/
