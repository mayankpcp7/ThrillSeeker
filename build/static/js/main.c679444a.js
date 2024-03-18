/*! For license information please see main.c679444a.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          m = {};
        function h(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(f, e) &&
                      (p.test(e) ? (m[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          D = Object.assign;
        function A(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var R = !1;
        function B(e, t) {
          if (!e || R) return "";
          R = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (R = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case _:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function G(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = G(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = G(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, G(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + G(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: G(n) };
        }
        function le(e, t) {
          var n = G(t.value),
            r = G(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function pe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(fe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var ve = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ee = null;
        function Ce(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof Se) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Pe() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function _e() {}
        var Le = !1;
        function je(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Le = !1), (null !== ke || null !== Ee) && (_e(), Pe());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            ze = !1;
          }
        function Oe(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          De = null,
          Ae = !1,
          Re = null,
          Be = {
            onError: function (e) {
              (Fe = !0), (De = e);
            },
          };
        function Ve(e, t, n, r, a, l, i, o, s) {
          (Fe = !1), (De = null), Oe.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ge(e) {
          if (He(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ge(a), e;
                    if (i === r) return Ge(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          kt,
          Et,
          Ct,
          Tt = !1,
          Pt = [],
          Nt = null,
          _t = null,
          Lt = null,
          jt = new Map(),
          Mt = new Map(),
          zt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ot(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ba(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Rt(e, t, n) {
          At(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Nt && At(Nt) && (Nt = null),
            null !== _t && At(_t) && (_t = null),
            null !== Lt && At(Lt) && (Lt = null),
            jt.forEach(Rt),
            Mt.forEach(Rt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Pt.length) {
            Vt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Vt(Nt, e),
              null !== _t && Vt(_t, e),
              null !== Lt && Vt(Lt, e),
              jt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && zt.shift();
        }
        var Ut = x.ReactCurrentBatchConfig,
          Gt = !0;
        function Wt(e, t, n, r) {
          var a = yt,
            l = Ut.transition;
          Ut.transition = null;
          try {
            (yt = 1), qt(e, t, n, r);
          } finally {
            (yt = a), (Ut.transition = l);
          }
        }
        function $t(e, t, n, r) {
          var a = yt,
            l = Ut.transition;
          Ut.transition = null;
          try {
            (yt = 4), qt(e, t, n, r);
          } finally {
            (yt = a), (Ut.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Gt) {
            var a = Yt(e, t, n, r);
            if (null === a) Gr(e, t, r, Qt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Ft(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (_t = Ft(_t, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = Ft(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return jt.set(l, Ft(jt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Mt.set(l, Ft(Mt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var l = ya(a);
                if (
                  (null !== l && wt(l),
                  null === (l = Yt(e, t, n, r)) && Gr(e, t, r, Qt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Gr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = ba((e = we(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Xt(e) {
          switch (e) {
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
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          pn = an(dn),
          fn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          mn = an(fn),
          hn = an(D({}, fn, { dataTransfer: 0 })),
          gn = an(D({}, dn, { relatedTarget: 0 })),
          vn = an(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = D({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(bn),
          xn = an(D({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Tn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Tn),
          Nn = an(
            D({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Ln = an(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jn = D({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(jn),
          zn = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          On = null;
        c && "documentMode" in document && (On = document.documentMode);
        var Fn = c && "TextEvent" in window && !On,
          Dn = c && (!In || (On && 8 < On && 11 >= On)),
          An = String.fromCharCode(32),
          Rn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Te(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Qn(e) {
          Ar(e, 0);
        }
        function Yn(e) {
          if (q(xa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Wn(t, qn, e, we(e)), je(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = pr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          br = null,
          yr = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Cr(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Tr = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Nr = Cr("animationstart"),
          _r = Cr("transitionend"),
          Lr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Lr.set(e, t), s(t, [e]);
        }
        for (var zr = 0; zr < jr.length; zr++) {
          var Ir = jr[zr];
          Mr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Mr(Tr, "onAnimationEnd"),
          Mr(Pr, "onAnimationIteration"),
          Mr(Nr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(_r, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Or =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Or)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((Ve.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = De;
                (Fe = !1), (De = null), Ae || ((Ae = !0), (Re = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Dr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, o, u), (l = s);
                }
            }
          }
          if (Ae) throw ((e = Re), (Ae = !1), (Re = null), e);
        }
        function Rr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Gr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ba(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = l,
              a = we(n),
              i = [];
            e: {
              var o = Lr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Pn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = _n;
                    break;
                  case Tr:
                  case Pr:
                  case Nr:
                    s = vn;
                    break;
                  case _r:
                    s = Ln;
                    break;
                  case "scroll":
                    s = pn;
                    break;
                  case "wheel":
                    s = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Nn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  p = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var f, m = r; null !== m; ) {
                  var h = (f = m).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== h &&
                      ((f = h),
                      null !== p &&
                        null != (h = Me(m, p)) &&
                        c.push(Wr(m, h, f))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ba(u) && !u[ma])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ba(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = mn),
                  (h = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (h = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == s ? o : xa(s)),
                  (f = null == u ? o : xa(u)),
                  ((o = new c(h, m + "leave", s, n, a)).target = d),
                  (o.relatedTarget = f),
                  (h = null),
                  ba(a) === r &&
                    (((c = new c(p, m + "enter", u, n, a)).target = f),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  s && u)
                )
                  e: {
                    for (p = u, m = 0, f = c = s; f; f = qr(f)) m++;
                    for (f = 0, h = p; h; h = qr(h)) f++;
                    for (; 0 < m - f; ) (c = qr(c)), m--;
                    for (; 0 < f - m; ) (p = qr(p)), f--;
                    for (; m--; ) {
                      if (c === p || (null !== p && c === p.alternate)) break e;
                      (c = qr(c)), (p = qr(p));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(i, o, s, c, !1),
                  null !== u && null !== d && Qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? xa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Xn;
              else if (Gn(o))
                if (Kn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Gn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (br = null));
                  break;
                case "focusout":
                  br = vr = gr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), xr(i, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, a);
              }
              var b;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Hn && (b = en())
                    : ((Zt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, y)).length &&
                  ((y = new xn(y, e, null, n, a)),
                  i.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = Vn(n)) && (y.data = b))),
                (b = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Rn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Rn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!In && Bn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = b));
            }
            Ar(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Me(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Me(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Me(n, l)) && i.unshift(Wr(n, s, o))
                : a || (null != (s = Me(n, l)) && i.push(Wr(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(l(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          pa = "__reactFiber$" + da,
          fa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ba(e) {
          var t = e[pa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[pa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[pa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[pa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[fa] || null;
        }
        var Sa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > ka || ((e.current = Sa[ka]), (Sa[ka] = null), ka--);
        }
        function Ta(e, t) {
          ka++, (Sa[ka] = e.current), (e.current = t);
        }
        var Pa = {},
          Na = Ea(Pa),
          _a = Ea(!1),
          La = Pa;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(_a), Ca(Na);
        }
        function Ia(e, t, n) {
          if (Na.current !== Pa) throw Error(l(168));
          Ta(Na, t), Ta(_a, n);
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, U(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (La = Na.current),
            Ta(Na, e),
            Ta(_a, _a.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Oa(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(_a),
              Ca(Na),
              Ta(Na, e))
            : Ca(_a),
            Ta(_a, n);
        }
        var Aa = null,
          Ra = !1,
          Ba = !1;
        function Va(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function Ha() {
          if (!Ba && null !== Aa) {
            Ba = !0;
            var e = 0,
              t = yt;
            try {
              var n = Aa;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Aa = null), (Ra = !1);
            } catch (a) {
              throw (null !== Aa && (Aa = Aa.slice(e + 1)), qe(Je, Ha), a);
            } finally {
              (yt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Ua = [],
          Ga = 0,
          Wa = null,
          $a = 0,
          qa = [],
          Qa = 0,
          Ya = null,
          Xa = 1,
          Ka = "";
        function Za(e, t) {
          (Ua[Ga++] = $a), (Ua[Ga++] = Wa), (Wa = e), ($a = t);
        }
        function Ja(e, t, n) {
          (qa[Qa++] = Xa), (qa[Qa++] = Ka), (qa[Qa++] = Ya), (Ya = e);
          var r = Xa;
          e = Ka;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ka = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ka = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ua[--Ga]), (Ua[Ga] = null), ($a = Ua[--Ga]), (Ua[Ga] = null);
          for (; e === Ya; )
            (Ya = qa[--Qa]),
              (qa[Qa] = null),
              (Ka = qa[--Qa]),
              (qa[Qa] = null),
              (Xa = qa[--Qa]),
              (qa[Qa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Mu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Mu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (pl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function fl() {
          (rl = nl = null), (al = !1);
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = x.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = Ea(null),
          bl = null,
          yl = null,
          xl = null;
        function wl() {
          xl = yl = bl = null;
        }
        function Sl(e) {
          var t = vl.current;
          Ca(vl), (e._currentValue = t);
        }
        function kl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function El(e, t) {
          (bl = e),
            (xl = yl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xo = !0), (e.firstContext = null));
        }
        function Cl(e) {
          var t = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === yl)
            ) {
              if (null === bl) throw Error(l(308));
              (yl = e), (bl.dependencies = { lanes: 0, firstContext: e });
            } else yl = yl.next = e;
          return t;
        }
        var Tl = null;
        function Pl(e) {
          null === Tl ? (Tl = [e]) : Tl.push(e);
        }
        function Nl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            _l(e, r)
          );
        }
        function _l(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ll = !1;
        function jl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ml(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Il(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _s))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              _l(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            _l(e, n)
          );
        }
        function Ol(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Fl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Dl(e, t, n, r) {
          var a = e.updateQueue;
          Ll = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var p = o.lane,
                f = o.eventTime;
              if ((r & p) === p) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = o;
                  switch (((p = t), (f = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(f, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (m = h.payload)
                              ? m.call(f, d, p)
                              : m) ||
                        void 0 === p
                      )
                        break e;
                      d = D({}, d, p);
                      break e;
                    case 2:
                      Ll = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (p = a.effects) ? (a.effects = [o]) : p.push(o));
              } else
                (f = {
                  eventTime: f,
                  lane: p,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (s = d)) : (c = c.next = f),
                  (i |= p);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (p = o).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ds |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Al(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Rl = new r.Component().refs;
        function Bl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = zl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (ru(t, e, a, r), Ol(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = zl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (ru(t, e, a, r), Ol(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = zl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Il(e, a, r)) && (ru(t, e, r, n), Ol(t, e, r));
          },
        };
        function Hl(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Ul(e, t, n) {
          var r = !1,
            a = Pa,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Cl(l))
              : ((a = Ma(t) ? La : Na.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ja(e, a)
                  : Pa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Gl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Rl), jl(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Cl(l))
            : ((l = Ma(t) ? La : Na.current), (a.context = ja(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Bl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vl.enqueueReplaceState(a, a.state, null),
              Dl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function $l(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Rl && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ql(e) {
          return (0, e._init)(e._payload);
        }
        function Yl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === M &&
                    Ql(l) === t.type))
              ? (((r = a(t, n.props)).ref = $l(e, t, n)), (r.return = e), r)
              : (((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = $l(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Fu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function p(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Au("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = $l(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Ru(t, e.mode, n)).return = e), t;
                case M:
                  return p(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t))
                return ((t = Fu(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case M:
                  return f(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case M:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || O(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function h(a, l, o, s) {
            for (
              var u = null, c = null, d = l, h = (l = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var v = f(a, d, o[h], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, h)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (h === o.length) return n(a, d), al && Za(a, h), u;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = p(a, o[h], s)) &&
                  ((l = i(d, l, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, h), u;
            }
            for (d = r(a, d); h < o.length; h++)
              null !== (g = m(d, a, h, o[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, h),
              u
            );
          }
          function g(a, o, s, u) {
            var c = O(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), h = o, g = (o = 0), v = null, b = s.next();
              null !== h && !b.done;
              g++, b = s.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var y = f(a, h, b.value, u);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (h = v);
            }
            if (b.done) return n(a, h), al && Za(a, g), c;
            if (null === h) {
              for (; !b.done; g++, b = s.next())
                null !== (b = p(a, b.value, u)) &&
                  ((o = i(b, o, g)),
                  null === d ? (c = b) : (d.sibling = b),
                  (d = b));
              return al && Za(a, g), c;
            }
            for (h = r(a, h); !b.done; g++, b = s.next())
              null !== (b = m(h, a, g, b.value, u)) &&
                (e &&
                  null !== b.alternate &&
                  h.delete(null === b.key ? g : b.key),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === M &&
                            Ql(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = $l(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((l = Fu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Ou(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = $l(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case S:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Ru(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case M:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return h(r, l, i, s);
              if (O(i)) return g(r, l, i, s);
              ql(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Au(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var Xl = Yl(!0),
          Kl = Yl(!1),
          Zl = {},
          Jl = Ea(Zl),
          ei = Ea(Zl),
          ti = Ea(Zl);
        function ni(e) {
          if (e === Zl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((Ta(ti, t), Ta(ei, e), Ta(Jl, Zl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Jl), Ta(Jl, t);
        }
        function ai() {
          Ca(Jl), Ca(ei), Ca(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni(Jl.current),
            n = se(t, e.type);
          t !== n && (Ta(ei, e), Ta(Jl, n));
        }
        function ii(e) {
          ei.current === e && (Ca(Jl), Ca(ei));
        }
        var oi = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          fi = 0,
          mi = null,
          hi = null,
          gi = null,
          vi = !1,
          bi = !1,
          yi = 0,
          xi = 0;
        function wi() {
          throw Error(l(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function ki(e, t, n, r, a, i) {
          if (
            ((fi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (yi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = hi = null),
                (t.updateQueue = null),
                (di.current = so),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = lo),
            (t = null !== hi && null !== hi.next),
            (fi = 0),
            (gi = hi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Ei() {
          var e = 0 !== yi;
          return (yi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ti() {
          if (null === hi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (hi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (hi = e).memoizedState,
              baseState: hi.baseState,
              baseQueue: hi.baseQueue,
              queue: hi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ni(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = hi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((fi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var p = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = p), (o = r)) : (u = u.next = p),
                  (mi.lanes |= d),
                  (Ds |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (xo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Ds |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function _i(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (xo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Li() {}
        function ji(e, t) {
          var n = mi,
            r = Ti(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (xo = !0)),
            (r = r.queue),
            Ui(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ai(9, zi.bind(null, n, r, a, t), void 0, null),
              null === Ls)
            )
              throw Error(l(349));
            0 !== (30 & fi) || Mi(n, t, a);
          }
          return a;
        }
        function Mi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oi(t) && Fi(e);
        }
        function Ii(e, t, n) {
          return n(function () {
            Oi(t) && Fi(e);
          });
        }
        function Oi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = _l(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Di(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ai(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ri() {
          return Ti().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = Ci();
          (mi.flags |= e),
            (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vi(e, t, n, r) {
          var a = Ti();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== hi) {
            var i = hi.memoizedState;
            if (((l = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ai(t, n, l, r));
          }
          (mi.flags |= e), (a.memoizedState = Ai(1 | t, n, l, r));
        }
        function Hi(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function Ui(e, t) {
          return Vi(2048, 8, e, t);
        }
        function Gi(e, t) {
          return Vi(4, 2, e, t);
        }
        function Wi(e, t) {
          return Vi(4, 4, e, t);
        }
        function $i(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vi(4, 4, $i.bind(null, t, e), n)
          );
        }
        function Qi() {}
        function Yi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ki(e, t, n) {
          return 0 === (21 & fi)
            ? (e.baseState && ((e.baseState = !1), (xo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = ht()), (mi.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (pi.transition = r);
          }
        }
        function Ji() {
          return Ti().memoizedState;
        }
        function eo(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Nl(e, t, n, r))) {
            ru(n, e, r, tu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Pl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Nl(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ro(e, t) {
          bi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var lo = {
            readContext: Cl,
            useCallback: wi,
            useContext: wi,
            useEffect: wi,
            useImperativeHandle: wi,
            useInsertionEffect: wi,
            useLayoutEffect: wi,
            useMemo: wi,
            useReducer: wi,
            useRef: wi,
            useState: wi,
            useDebugValue: wi,
            useDeferredValue: wi,
            useTransition: wi,
            useMutableSource: wi,
            useSyncExternalStore: wi,
            useId: wi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Cl,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Cl,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bi(4194308, 4, $i.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Di,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Di(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ci();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ls)) throw Error(l(349));
                0 !== (30 & fi) || Mi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ai(9, zi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Ls.identifierPrefix;
              if (al) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
                  0 < (n = yi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Cl,
            useCallback: Yi,
            useContext: Cl,
            useEffect: Ui,
            useImperativeHandle: qi,
            useInsertionEffect: Gi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Ni,
            useRef: Ri,
            useState: function () {
              return Ni(Pi);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Ki(Ti(), hi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: ji,
            useId: Ji,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Cl,
            useCallback: Yi,
            useContext: Cl,
            useEffect: Ui,
            useImperativeHandle: qi,
            useInsertionEffect: Gi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: _i,
            useRef: Ri,
            useState: function () {
              return _i(Pi);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Ti();
              return null === hi
                ? (t.memoizedState = e)
                : Ki(t, hi.memoizedState, e);
            },
            useTransition: function () {
              return [_i(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: ji,
            useId: Ji,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function po(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fo = "function" === typeof WeakMap ? WeakMap : Map;
        function mo(e, t, n) {
          ((n = zl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), ($s = r)), po(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = zl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                po(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                po(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Tu.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zl(-1, 1)).tag = 2), Il(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = x.ReactCurrentOwner,
          xo = !1;
        function wo(e, t, n, r) {
          t.child = null === e ? Kl(t, null, n, r) : Xl(t, e.child, n, r);
        }
        function So(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            El(t, a),
            (r = ki(e, t, n, r, l, a)),
            (n = Ei()),
            null === e || xo
              ? (al && n && el(t), (t.flags |= 1), wo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function ko(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              zu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ou(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Eo(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Wo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Eo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((xo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wo(e, t, a);
              0 !== (131072 & e.flags) && (xo = !0);
            }
          }
          return Po(e, t, n, r, a);
        }
        function Co(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Is, zs),
                (zs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Is, zs),
                  (zs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ta(Is, zs),
                (zs |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Is, zs),
              (zs |= r);
          return wo(e, t, a, n), t.child;
        }
        function To(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Po(e, t, n, r, a) {
          var l = Ma(n) ? La : Na.current;
          return (
            (l = ja(t, l)),
            El(t, a),
            (n = ki(e, t, n, r, l, a)),
            (r = Ei()),
            null === e || xo
              ? (al && r && el(t), (t.flags |= 1), wo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function No(e, t, n, r, a) {
          if (Ma(n)) {
            var l = !0;
            Fa(t);
          } else l = !1;
          if ((El(t, a), null === t.stateNode))
            Go(e, t), Ul(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Cl(u))
              : (u = ja(t, (u = Ma(n) ? La : Na.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Gl(t, i, r, u)),
              (Ll = !1);
            var p = t.memoizedState;
            (i.state = p),
              Dl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || p !== s || _a.current || Ll
                ? ("function" === typeof c &&
                    (Bl(t, n, c, r), (s = t.memoizedState)),
                  (o = Ll || Hl(t, n, o, r, p, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ml(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : gl(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (p = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Cl(s))
                : (s = ja(t, (s = Ma(n) ? La : Na.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || p !== s) && Gl(t, i, r, s)),
              (Ll = !1),
              (p = t.memoizedState),
              (i.state = p),
              Dl(t, r, i, a);
            var m = t.memoizedState;
            o !== d || p !== m || _a.current || Ll
              ? ("function" === typeof f &&
                  (Bl(t, n, f, r), (m = t.memoizedState)),
                (u = Ll || Hl(t, n, u, r, p, m, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _o(e, t, n, r, l, a);
        }
        function _o(e, t, n, r, a, l) {
          To(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), Wo(e, t, l);
          (r = t.stateNode), (yo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xl(t, e.child, null, l)),
                (t.child = Xl(t, null, o, l)))
              : wo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Lo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function jo(e, t, n, r, a) {
          return fl(), ml(a), (t.flags |= 256), wo(e, t, n, r), t.child;
        }
        var Mo,
          zo,
          Io,
          Oo,
          Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Do(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ao(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(oi, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Du(s, a, 0, null)),
                      (e = Fu(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Do(n)),
                      (t.memoizedState = Fo),
                      e)
                    : Ro(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Fu(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xl(t, e.child, null, o),
                    (t.child.memoizedState = Do(o)),
                    (t.memoizedState = Fo),
                    i);
              if (0 === (1 & t.mode)) return Bo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), xo || s)) {
                if (null !== (r = Ls)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), _l(e, a), ru(r, e, a, -1));
                }
                return gu(), Bo(e, t, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Qa++] = Xa),
                    (qa[Qa++] = Ka),
                    (qa[Qa++] = Ya),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Ya = t)),
                  (t = Ro(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Iu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Iu(r, o))
                : ((o = Fu(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Do(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Iu(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ro(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bo(e, t, n, r) {
          return (
            null !== r && ml(r),
            Xl(t, e.child, null, n),
            ((e = Ro(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), kl(e.return, t, n);
        }
        function Ho(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wo(e, t, r.children, n), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vo(e, n, t);
                else if (19 === e.tag) Vo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ho(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ho(t, !0, n, null, l);
                break;
              case "together":
                Ho(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Go(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $o(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return qo(t), null;
            case 1:
            case 17:
              return Ma(t.type) && za(), qo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Ca(_a),
                Ca(Na),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                zo(e, t),
                qo(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Io(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qo(t), null;
                }
                if (((e = ni(Jl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[pa] = t), (r[fa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Rr("cancel", r), Rr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Rr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Or.length; a++) Rr(Or[a], r);
                      break;
                    case "source":
                      Rr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Rr("error", r), Rr("load", r);
                      break;
                    case "details":
                      Rr("toggle", r);
                      break;
                    case "input":
                      X(r, i), Rr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Rr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Rr("invalid", r);
                  }
                  for (var s in (be(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Rr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), J(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[pa] = t),
                    (e[fa] = r),
                    Mo(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        Rr("cancel", e), Rr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Rr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Or.length; a++) Rr(Or[a], e);
                        a = r;
                        break;
                      case "source":
                        Rr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Rr("error", e), Rr("load", e), (a = r);
                        break;
                      case "details":
                        Rr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Rr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Rr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Rr("invalid", e);
                    }
                    for (i in (be(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && pe(e, c)
                            : "number" === typeof c && pe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Rr("scroll", e)
                              : null != c && y(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), J(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + G(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qo(t), null;
            case 6:
              if (e && null != t.stateNode) Oo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni(Jl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[pa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[pa] = t),
                    (t.stateNode = r);
              }
              return qo(t), null;
            case 13:
              if (
                (Ca(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pl(), fl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[pa] = t;
                  } else
                    fl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qo(t), (i = !1);
                } else null !== ll && (ou(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Os && (Os = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qo(t),
                  null);
            case 4:
              return (
                ai(),
                zo(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                qo(t),
                null
              );
            case 10:
              return Sl(t.type._context), qo(t), null;
            case 19:
              if ((Ca(oi), null === (i = t.memoizedState))) return qo(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) $o(i, !1);
                else {
                  if (0 !== Os || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          t.flags |= 128,
                            $o(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(oi, (1 & oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    $o(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $o(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qo(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $o(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = oi.current),
                  Ta(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qo(t), null);
            case 22:
            case 23:
              return (
                pu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zs) &&
                    (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Yo(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Ca(_a),
                Ca(Na),
                ci(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Ca(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                fl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return Sl(t.type._context), null;
            case 22:
            case 23:
              return pu(), null;
            default:
              return null;
          }
        }
        (Mo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zo = function () {}),
          (Io = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni(Jl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (be(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Rr("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Oo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xo = !1,
          Ko = !1,
          Zo = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ts(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ls(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[pa],
              delete t[fa],
              delete t[ha],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          ps = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ms(e, t, n), (n = n.sibling);
        }
        function ms(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Ko || es(n, t);
            case 6:
              var r = ds,
                a = ps;
              (ds = null),
                fs(e, t, n),
                (ps = a),
                null !== (ds = r) &&
                  (ps
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (ps
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ht(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = ps),
                (ds = n.stateNode.containerInfo),
                (ps = !0),
                fs(e, t, n),
                (ds = r),
                (ps = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ko &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Ko &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Cu(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ko = (r = Ko) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Ko = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zo()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (ps = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (ps = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(l(160));
                ms(i, o, a), (ds = null), (ps = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Cu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), bs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Cu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), bs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                bs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  pe(a, "");
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(a, i),
                      ye(s, o);
                    var c = ye(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        p = u[o + 1];
                      "style" === d
                        ? ge(a, p)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, p)
                        : "children" === d
                        ? pe(a, p)
                        : y(a, d, p, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? ne(a, !!i.multiple, m, !1)
                          : f !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[fa] = i;
                  } catch (g) {
                    Cu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), bs(e);
              break;
            case 13:
              gs(t, e),
                bs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Ke())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ko = (c = Ko) || d), gs(t, e), (Ko = c))
                  : gs(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (p = Jo = d; null !== Jo; ) {
                      switch (((m = (f = Jo).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, f, f.return);
                          break;
                        case 1:
                          es(f, f.return);
                          var h = f.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              Cu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            Ss(p);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = f), (Jo = m)) : Ss(p);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (a = p.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = p.stateNode),
                              (o =
                                void 0 !== (u = p.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = he("display", o)));
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = c ? "" : p.memoizedProps;
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), bs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (pe(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Cu(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jo = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Ko;
                o = Xo;
                var u = Ko;
                if (((Xo = i), (Ko = s) && !u))
                  for (Jo = a; null !== Jo; )
                    (s = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = i), (Jo = s))
                        : ks(a);
                for (; null !== l; ) (Jo = l), xs(l, t, n), (l = l.sibling);
                (Jo = a), (Xo = o), (Ko = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ko)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Al(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Al(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var p = d.dehydrated;
                            null !== p && Ht(p);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Ko || (512 & t.flags && ls(t));
              } catch (f) {
                Cu(t, t.return, f);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Cu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Cu(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Cu(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Cu(t, i, s);
                  }
              }
            } catch (s) {
              Cu(t, t.return, s);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var Es,
          Cs = Math.ceil,
          Ts = x.ReactCurrentDispatcher,
          Ps = x.ReactCurrentOwner,
          Ns = x.ReactCurrentBatchConfig,
          _s = 0,
          Ls = null,
          js = null,
          Ms = 0,
          zs = 0,
          Is = Ea(0),
          Os = 0,
          Fs = null,
          Ds = 0,
          As = 0,
          Rs = 0,
          Bs = null,
          Vs = null,
          Hs = 0,
          Us = 1 / 0,
          Gs = null,
          Ws = !1,
          $s = null,
          qs = null,
          Qs = !1,
          Ys = null,
          Xs = 0,
          Ks = 0,
          Zs = null,
          Js = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & _s) ? Ke() : -1 !== Js ? Js : (Js = Ke());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _s) && 0 !== Ms
            ? Ms & -Ms
            : null !== hl.transition
            ? (0 === eu && (eu = ht()), eu)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Zs = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & _s) && e === Ls) ||
              (e === Ls && (0 === (2 & _s) && (As |= n), 4 === Os && su(e, Ms)),
              au(e, r),
              1 === n &&
                0 === _s &&
                0 === (1 & t.mode) &&
                ((Us = Ke() + 500), Ra && Ha()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = ft(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = pt(e, e === Ls ? Ms : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ra = !0), Va(e);
                  })(uu.bind(null, e))
                : Va(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & _s) && Ha();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Lu(n, lu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function lu(e, t) {
          if (((Js = -1), (eu = 0), 0 !== (6 & _s))) throw Error(l(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = pt(e, e === Ls ? Ms : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = _s;
            _s |= 2;
            var i = hu();
            for (
              (Ls === e && Ms === t) ||
              ((Gs = null), (Us = Ke() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                mu(e, s);
              }
            wl(),
              (Ts.current = i),
              (_s = a),
              null !== js ? (t = 0) : ((Ls = null), (Ms = 0), (t = Os));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Fs), fu(e, 0), su(e, r), au(e, Ke()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = mt(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Fs), fu(e, 0), su(e, r), au(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  Su(e, Vs, Gs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))
                  ) {
                    if (0 !== pt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Su.bind(null, e, Vs, Gs), t);
                    break;
                  }
                  Su(e, Vs, Gs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Su.bind(null, e, Vs, Gs), r);
                    break;
                  }
                  Su(e, Vs, Gs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return au(e, Ke()), e.callbackNode === n ? lu.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Vs), (Vs = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Vs ? (Vs = e) : Vs.push.apply(Vs, e);
        }
        function su(e, t) {
          for (
            t &= ~Rs,
              t &= ~As,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & _s)) throw Error(l(327));
          ku();
          var t = pt(e, 0);
          if (0 === (1 & t)) return au(e, Ke()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Fs), fu(e, 0), su(e, t), au(e, Ke()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Vs, Gs),
            au(e, Ke()),
            null
          );
        }
        function cu(e, t) {
          var n = _s;
          _s |= 1;
          try {
            return e(t);
          } finally {
            0 === (_s = n) && ((Us = Ke() + 500), Ra && Ha());
          }
        }
        function du(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & _s) && ku();
          var t = _s;
          _s |= 1;
          var n = Ns.transition,
            r = yt;
          try {
            if (((Ns.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Ns.transition = n), 0 === (6 & (_s = t)) && Ha();
          }
        }
        function pu() {
          (zs = Is.current), Ca(Is);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== js))
            for (n = js.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  ai(), Ca(_a), Ca(Na), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Ca(oi);
                  break;
                case 10:
                  Sl(r.type._context);
                  break;
                case 22:
                case 23:
                  pu();
              }
              n = n.return;
            }
          if (
            ((Ls = e),
            (js = e = Iu(e.current, null)),
            (Ms = zs = t),
            (Os = 0),
            (Fs = null),
            (Rs = As = Ds = 0),
            (Vs = Bs = null),
            null !== Tl)
          ) {
            for (t = 0; t < Tl.length; t++)
              if (null !== (r = (n = Tl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Tl = null;
          }
          return e;
        }
        function mu(e, t) {
          for (;;) {
            var n = js;
            try {
              if ((wl(), (di.current = lo), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((fi = 0),
                (gi = hi = mi = null),
                (bi = !1),
                (yi = 0),
                (Ps.current = null),
                null === n || null === n.return)
              ) {
                (Os = 1), (Fs = t), (js = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ms),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    p = d.tag;
                  if (0 === (1 & d.mode) && (0 === p || 11 === p || 15 === p)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = vo(o);
                  if (null !== m) {
                    (m.flags &= -257),
                      bo(m, o, s, 0, t),
                      1 & m.mode && go(i, c, t),
                      (u = c);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else h.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(i, c, t), gu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      bo(v, o, s, 0, t),
                      ml(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== Os && (Os = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fl(i, mo(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === qs || !qs.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Fl(i, ho(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (x) {
              (t = x), js === n && null !== n && (js = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Ts.current;
          return (Ts.current = lo), null === e ? lo : e;
        }
        function gu() {
          (0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
            null === Ls ||
              (0 === (268435455 & Ds) && 0 === (268435455 & As)) ||
              su(Ls, Ms);
        }
        function vu(e, t) {
          var n = _s;
          _s |= 2;
          var r = hu();
          for ((Ls === e && Ms === t) || ((Gs = null), fu(e, t)); ; )
            try {
              bu();
              break;
            } catch (a) {
              mu(e, a);
            }
          if ((wl(), (_s = n), (Ts.current = r), null !== js))
            throw Error(l(261));
          return (Ls = null), (Ms = 0), Os;
        }
        function bu() {
          for (; null !== js; ) xu(js);
        }
        function yu() {
          for (; null !== js && !Ye(); ) xu(js);
        }
        function xu(e) {
          var t = Es(e.alternate, e, zs);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (js = t),
            (Ps.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qo(n, t, zs))) return void (js = n);
            } else {
              if (null !== (n = Yo(n, t)))
                return (n.flags &= 32767), void (js = n);
              if (null === e) return (Os = 6), void (js = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (js = t);
            js = t = e;
          } while (null !== t);
          0 === Os && (Os = 5);
        }
        function Su(e, t, n) {
          var r = yt,
            a = Ns.transition;
          try {
            (Ns.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ys);
                if (0 !== (6 & _s)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ls && ((js = Ls = null), (Ms = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Lu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ns.transition), (Ns.transition = null);
                  var o = yt;
                  yt = 1;
                  var s = _s;
                  (_s |= 4),
                    (Ps.current = null),
                    (function (e, t) {
                      if (((ea = Gt), fr((e = pr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                p = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  p !== n ||
                                    (0 !== a && 3 !== p.nodeType) ||
                                    (s = o + a),
                                    p !== i ||
                                      (0 !== r && 3 !== p.nodeType) ||
                                      (u = o + r),
                                    3 === p.nodeType &&
                                      (o += p.nodeValue.length),
                                    null !== (m = p.firstChild);

                                )
                                  (f = p), (p = m);
                                for (;;) {
                                  if (p === e) break t;
                                  if (
                                    (f === n && ++c === a && (s = o),
                                    f === i && ++d === r && (u = o),
                                    null !== (m = p.nextSibling))
                                  )
                                    break;
                                  f = (p = f).parentNode;
                                }
                                p = m;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Gt = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              Cu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (h = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    mr(ta),
                    (Gt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (_s = s),
                    (yt = o),
                    (Ns.transition = i);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (Ys = e), (Xs = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ws) throw ((Ws = !1), (e = $s), ($s = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zs
                      ? Ks++
                      : ((Ks = 0), (Zs = e))
                    : (Ks = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Ns.transition = a), (yt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ys) {
            var e = xt(Xs),
              t = Ns.transition,
              n = yt;
            try {
              if (((Ns.transition = null), (yt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Xs = 0), 0 !== (6 & _s)))
                  throw Error(l(331));
                var a = _s;
                for (_s |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 !== (16 & Jo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jo = c; null !== Jo; ) {
                          var d = Jo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var p = d.child;
                          if (null !== p) (p.return = d), (Jo = p);
                          else
                            for (; null !== Jo; ) {
                              var f = (d = Jo).sibling,
                                m = d.return;
                              if ((is(d), d === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = m), (Jo = f);
                                break;
                              }
                              Jo = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), (Jo = b);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var y = e.current;
                for (Jo = y; null !== Jo; ) {
                  var x = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== x)
                    (x.return = o), (Jo = x);
                  else
                    e: for (o = y; null !== Jo; ) {
                      if (0 !== (2048 & (s = Jo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (S) {
                          Cu(s, s.return, S);
                        }
                      if (s === o) {
                        Jo = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Jo = w);
                        break e;
                      }
                      Jo = s.return;
                    }
                }
                if (
                  ((_s = a),
                  Ha(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Ns.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Il(e, (t = mo(0, (t = uo(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), au(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Il(t, (e = ho(t, (e = uo(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Tu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ls === e &&
              (Ms & n) === n &&
              (4 === Os ||
              (3 === Os && (130023424 & Ms) === Ms && 500 > Ke() - Hs)
                ? fu(e, 0)
                : (Rs |= n)),
            au(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = _l(e, t)) && (vt(e, t, n), au(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Lu(e, t) {
          return qe(e, t);
        }
        function ju(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Mu(e, t, n, r) {
          return new ju(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Mu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ou(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case k:
                return Fu(n.children, a, i, t);
              case E:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Mu(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case _:
                return (
                  ((e = Mu(13, n, t, a)).elementType = _), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = Mu(19, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case z:
                return Du(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      o = 10;
                      break e;
                    case P:
                      o = 9;
                      break e;
                    case N:
                      o = 11;
                      break e;
                    case j:
                      o = 14;
                      break e;
                    case M:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Mu(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Fu(e, t, n, r) {
          return ((e = Mu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Mu(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Au(e, t, n) {
          return ((e = Mu(6, e, null, t)).lanes = n), e;
        }
        function Ru(e, t, n) {
          return (
            ((t = Mu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vu(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Bu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Mu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            jl(l),
            e
          );
        }
        function Hu(e) {
          if (!e) return Pa;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ma(n)) return Oa(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Vu(n, r, !0, e, 0, l, 0, o, s)).context = Hu(null)),
            (n = e.current),
            ((l = zl((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Il(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            au(e, r),
            e
          );
        }
        function Gu(e, t, n, r) {
          var a = t.current,
            l = tu(),
            i = nu(a);
          return (
            (n = Hu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zl(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Il(a, t, i)) && (ru(e, a, i, l), Ol(e, a, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $u(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          $u(e, t), (e = e.alternate) && $u(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) xo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Lo(t), fl();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        Ma(t.type) && Fa(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ao(e, t, n)
                            : (Ta(oi, 1 & oi.current),
                              null !== (e = Wo(e, t, n)) ? e.sibling : null);
                        Ta(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Uo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Co(e, t, n);
                    }
                    return Wo(e, t, n);
                  })(e, t, n)
                );
              xo = 0 !== (131072 & e.flags);
            }
          else (xo = !1), al && 0 !== (1048576 & t.flags) && Ja(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Go(e, t), (e = t.pendingProps);
              var a = ja(t, Na.current);
              El(t, n), (a = ki(null, t, r, e, a, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((i = !0), Fa(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    jl(t),
                    (a.updater = Vl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = _o(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    wo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Go(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Po(null, t, r, e, n);
                    break e;
                  case 1:
                    t = No(null, t, r, e, n);
                    break e;
                  case 11:
                    t = So(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ko(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Po(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                No(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Lo(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Ml(e, t),
                  Dl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = jo(e, t, r, n, (a = uo(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = jo(e, t, r, n, (a = uo(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Kl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((fl(), r === a)) {
                    t = Wo(e, t, n);
                    break e;
                  }
                  wo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                li(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                To(e, t),
                wo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Ao(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xl(t, null, r, n)) : wo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                So(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return wo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Ta(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !_a.current) {
                      t = Wo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = zl(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              kl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          kl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                wo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = Cl(a)))),
                (t.flags |= 1),
                wo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                ko(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Eo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Go(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), Fa(t)) : (e = !1),
                El(t, n),
                Ul(t, r, a),
                Wl(t, r, a, n),
                _o(null, t, r, !0, e, n)
              );
            case 19:
              return Uo(e, t, n);
            case 22:
              return Co(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Wu(i);
                o.call(e);
              };
            }
            Gu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Wu(i);
                    l.call(e);
                  };
                }
                var i = Uu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = i),
                  (e[ma] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Wu(s);
                  o.call(e);
                };
              }
              var s = Vu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Gu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wu(i);
        }
        (Xu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Gu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Gu(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    au(t, Ke()),
                    0 === (6 & _s) && ((Us = Ke() + 500), Ha()));
                }
                break;
              case 13:
                du(function () {
                  var t = _l(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = _l(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = _l(e, t);
              if (null !== n) ru(n, e, t, tu());
              qu(e, t);
            }
          }),
          (Et = function () {
            return yt;
          }),
          (Ct = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cu),
          (_e = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ya, xa, wa, Te, Pe, cu],
          },
          nc = {
            findFiberByHostInstance: ba,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ma] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function b() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var x = (y.prototype = new b());
        (x.constructor = y), h(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: k.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + N(s, 0) : l),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  _(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + N((o = e[u]), u);
              s += _(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += _((o = o.value), t, a, (c = l + N(o, u++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          z = { transition: null },
          I = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = k.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          p = null,
          f = 3,
          m = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !h))
            if (null !== r(u)) (h = !0), z(S);
            else {
              var t = r(c);
              null !== t && I(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (h = !1), g && ((g = !1), b(T), (T = -1)), (m = !0);
          var l = f;
          try {
            for (
              x(n), p = r(u);
              null !== p && (!(p.expirationTime > n) || (e && !_()));

            ) {
              var i = p.callback;
              if ("function" === typeof i) {
                (p.callback = null), (f = p.priorityLevel);
                var o = i(p.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (p.callback = o)
                    : p === r(u) && a(u),
                  x(n);
              } else a(u);
              p = r(u);
            }
            if (null !== p) var s = !0;
            else {
              var d = r(c);
              null !== d && I(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (p = null), (f = l), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          C = null,
          T = -1,
          P = 5,
          N = -1;
        function _() {
          return !(t.unstable_now() - N < P);
        }
        function L() {
          if (null !== C) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? k() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof y)
          k = function () {
            y(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            M = j.port2;
          (j.port1.onmessage = L),
            (k = function () {
              M.postMessage(null);
            });
        } else
          k = function () {
            v(L, 0);
          };
        function z(e) {
          (C = e), E || ((E = !0), k());
        }
        function I(e, n) {
          T = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), z(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(T), (T = -1)) : (g = !0), I(w, l - i)))
                : ((e.sortIndex = o), n(u, e), h || m || ((h = !0), z(S))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".c571e350.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "thrillseeker:";
      n.l = (r, a, l, i) => {
        if (e[r]) e[r].push(a);
        else {
          var o, s;
          if (void 0 !== l)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + l
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((s = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            n.nc && o.setAttribute("nonce", n.nc),
            o.setAttribute("data-webpack", t + l),
            (o.src = r)),
            (e[r] = [a]);
          var p = (t, n) => {
              (o.onerror = o.onload = null), clearTimeout(f);
              var a = e[r];
              if (
                (delete e[r],
                o.parentNode && o.parentNode.removeChild(o),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = p.bind(null, o.onerror)),
            (o.onload = p.bind(null, o.onload)),
            s && document.head.appendChild(o);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = l));
            var i = n.p + n.u(t),
              o = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + i + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = l),
                    (o.request = i),
                    a[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            l,
            i = r[0],
            o = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in o) n.o(o, a) && (n.m[a] = o[a]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (l = i[u]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkthrillseeker =
          self.webpackChunkthrillseeker || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = n(43),
        t = n(391);
      n.p;
      const r =
        n.p + "static/media/NavLogo.198eb8e12d5e9c8e5795b7e6c14da411.svg";
      var a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = e.createContext && e.createContext(a),
        i = ["attr", "size", "title"];
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(t) {
        return (
          t &&
          t.map((t, n) =>
            e.createElement(t.tag, c({ key: n }, t.attr), p(t.child))
          )
        );
      }
      function f(t) {
        return (n) =>
          e.createElement(m, s({ attr: c({}, t.attr) }, n), p(t.child));
      }
      function m(t) {
        var n = (n) => {
          var r,
            { attr: a, size: l, title: u } = t,
            d = o(t, i),
            p = l || n.size || "1em";
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            e.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                d,
                {
                  className: r,
                  style: c(c({ color: t.color || n.color }, n.style), t.style),
                  height: p,
                  width: p,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && e.createElement("title", null, u),
              t.children
            )
          );
        };
        return void 0 !== l
          ? e.createElement(l.Consumer, null, (e) => n(e))
          : n(a);
      }
      function h(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 15 15", fill: "none" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
                fill: "currentColor",
              },
              child: [],
            },
          ],
        })(e);
      }
      function g(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: { d: "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" },
              child: [],
            },
          ],
        })(e);
      }
      var v = n(579);
      const b = () => {
          const [t, n] = (0, e.useState)(!0);
          function a() {
            n(!t);
          }
          return (
            (document.body.style.overflow = t ? "unset" : "hidden"),
            (0, v.jsx)(v.Fragment, {
              children: (0, v.jsx)("nav", {
                className: "bg-white",
                children: (0, v.jsx)("div", {
                  className: "max-w-[1164px] py-[10px] mx-auto md:px-3 px-4",
                  children: (0, v.jsxs)("div", {
                    className: "flex justify-between w-full items-center",
                    children: [
                      (0, v.jsx)("div", {
                        className: "flex items-center",
                        children: (0, v.jsx)("img", {
                          className:
                            "relative z-[100] max-w-[150px] lg:max-w-[220px] cursor-pointer",
                          src: r,
                          alt: "navlogo",
                        }),
                      }),
                      (0, v.jsx)("div", {
                        onClick: a,
                        className: " relative z-[100]  md:hidden",
                        children: (0, v.jsx)("h3", {
                          className: "text-lightred text-3xl sm:text-4xl",
                          children: t ? (0, v.jsx)(g, {}) : (0, v.jsx)(h, {}),
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row  fixed md:relative w-full z-50 min-h-screen md:min-h-0 top-[0] left-[-100%] md:left-0 ttransition-opacity duration-700 md:transition-none  justify-center md:justify-end\n           items-center ".concat(
                            t ? "" : "!left-0 bg-white"
                          ),
                        children: [
                          (0, v.jsxs)("ul", {
                            className:
                              "flex md:hidden gap-8 flex-col md:flex-row items-center",
                            children: [
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  onClick: a,
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300  stroke_2",
                                  href: "#home",
                                  children: "Home",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  onClick: a,
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "#aboutus",
                                  children: "About Us",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  onClick: a,
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "discover",
                                  children: "Discover",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  onClick: a,
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "#faq",
                                  children: "FAQ\u2019s",
                                }),
                              }),
                              (0, v.jsxs)("button", {
                                class:
                                  "rounded-[10px] flex items-center   font-semibold font-inter h-[59px] w-[138px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                                children: [
                                  (0, v.jsx)("span", {
                                    class:
                                      "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                                  }),
                                  (0, v.jsx)("span", {
                                    class:
                                      "relative text-white mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease",
                                    children: "Get Started",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)("ul", {
                            className:
                              "hidden md:flex items-center gap-5 lg:gap-8",
                            children: [
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300  stroke_2",
                                  href: "#home",
                                  children: "Home",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "#aboutus",
                                  children: "About Us",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "#client",
                                  children: "Discover",
                                }),
                              }),
                              (0, v.jsx)("li", {
                                children: (0, v.jsx)("a", {
                                  className:
                                    "font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100",
                                  href: "#destination",
                                  children: "FAQ\u2019s",
                                }),
                              }),
                              (0, v.jsxs)("button", {
                                class:
                                  "rounded-[10px] flex items-center ms-5 lg:ms-9  font-semibold font-inter h-[59px] w-[126px] lg:w-[138px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                                children: [
                                  (0, v.jsx)("span", {
                                    class:
                                      "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                                  }),
                                  (0, v.jsx)("span", {
                                    class:
                                      "relative text-white text-center mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease",
                                    children: "Get Started",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        y = () =>
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)("header", {
                className:
                  "bg-center pb-[200px] lg:pb-[250px] bg-header bg-cover relative",
                children: [
                  (0, v.jsx)(b, {}),
                  (0, v.jsxs)("main", {
                    className:
                      "max-w-[1164px] mx-auto px-4 md:px-3 mt-[120px]  lg:mt-[169px]",
                    children: [
                      (0, v.jsx)("h1", {
                        className:
                          " text-[50px] sm:text-[55px] lg:text-6xl font-inter text-start text-white font-extrabold leading-[120%] max-w-[582px]",
                        children: "Explore The World Around You",
                      }),
                      (0, v.jsx)("p", {
                        className:
                          "pt-4 text-start text-white font-inter max-w-[461px] sm:max-w-[550px] lg:max-w-[568px]",
                        children:
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                      }),
                      (0, v.jsxs)("button", {
                        class:
                          "rounded-[10px] flex items-center mt-8 font-semibold font-inter h-[59px] w-[126px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                        children: [
                          (0, v.jsx)("span", {
                            class:
                              "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                          }),
                          (0, v.jsx)("span", {
                            class:
                              "relative text-white mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease",
                            children: "Book Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: "max-w-[1164px] mx-auto md:px-3 px-4",
                children: (0, v.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row mt-[-82px] items-center xl:item-start relative z-30",
                  children: [
                    (0, v.jsxs)("div", {
                      className:
                        "flex bg-yellow flex-col rounded-[10px] w-[235px] h-[164px] justify-center px-4 py-[42px]",
                      children: [
                        (0, v.jsx)("h3", {
                          className:
                            "font-inter font-bold text-white text-[34px]",
                          children: "900K+",
                        }),
                        (0, v.jsx)("p", {
                          className:
                            "text-white text-base font-inter font-medium pt-5 whitespace-nowrap",
                          children: "Join Our Happy Customer",
                        }),
                      ],
                    }),
                    (0, v.jsxs)("div", {
                      className:
                        "flex flex-col items-center max-w-[370px] mx-auto sm:max-w-full mt-5 sm:mt-0 lg:items-start bg-white sm:ms-[17px] headershadow w-full rounded-[10px] p-8",
                      children: [
                        (0, v.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, v.jsx)("span", {
                              className:
                                "flex h-[3px] w-[39px] rounded-[27px] bg-[#CC1630]",
                            }),
                            (0, v.jsx)("p", {
                              className:
                                "font-inter text-base text-black font-medium ms-[10px]",
                              children: "Search Your Products",
                            }),
                          ],
                        }),
                        (0, v.jsxs)("div", {
                          className:
                            "flex sm:flex-row flex-col max-w-[360px] mx-auto sm:max-w-full  gap-[15px] items-center lg:justify-start justify-center flex-wrap mt-6",
                          children: [
                            (0, v.jsxs)("select", {
                              id: "countries",
                              class:
                                "bg-white border cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-4 w-[190px] lg:w-[220px] h-[51px] relative",
                              children: [
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  children: "Your Country",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "US",
                                  children: "United States",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "CA",
                                  children: "Canada",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "FR",
                                  children: "France",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "DE",
                                  children: "Germany",
                                }),
                              ],
                            }),
                            (0, v.jsxs)("select", {
                              id: "countries",
                              class:
                                "bg-white border cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-4 w-[190px] lg:w-[220px] h-[51px] relative",
                              children: [
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  children: "Select Date",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "US",
                                  children: "16/3/24",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "CA",
                                  children: "17/3/24",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "FR",
                                  children: "18/3/24",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "DE",
                                  children: "19/3/24",
                                }),
                              ],
                            }),
                            (0, v.jsxs)("select", {
                              id: "flight",
                              class:
                                "bg-white border cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-4 w-[190px] lg:w-[220px] h-[51px] relative",
                              children: [
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  children: "Your Flight",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "US",
                                  children: "Indigo",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "CA",
                                  children: "kingfisher",
                                }),
                                (0, v.jsx)("option", {
                                  className: "font-inter text-grey text-base",
                                  value: "FR",
                                  children: "etihad",
                                }),
                              ],
                            }),
                            (0, v.jsxs)("button", {
                              class:
                                "rounded-[10px] flex items-center font-semibold font-inter h-[59px] w-[121px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                              children: [
                                (0, v.jsx)("span", {
                                  class:
                                    "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                                }),
                                (0, v.jsx)("span", {
                                  class:
                                    "relative text-white text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-extralightred ease",
                                  children: "Find Now",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        x = n.p + "static/media/InvertedComa.fde099149442185f3446.webp",
        w = [
          {
            id: "1",
            title: "1. Why should I use Day to Dusk editing for my listing?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
          {
            id: "2",
            title: "2. How realistic does the Day to Dusk editing look?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
          {
            id: "3",
            title: "3. How realistic does the Day to Dusk editing look?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
          {
            id: "4",
            title: "4. How realistic does the Day to Dusk editing look?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
          {
            id: "5",
            title: "5. How realistic does the Day to Dusk editing look?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
          {
            id: "6",
            title: "6. How realistic does the Day to Dusk editing look?",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
          },
        ],
        S = [
          {
            id: 1,
            InvertedComa: x,
            Name: "Rick Wright",
            text: "Customer",
            Paragraph:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
          },
          {
            id: 2,
            InvertedComa: x,
            Name: "Rick Wright",
            text: "Customer",
            Paragraph:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
          },
          {
            id: 3,
            InvertedComa: x,
            Name: "Rick Wright",
            text: "Customer",
            Paragraph:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
          },
        ],
        k =
          n.p +
          "static/media/OurNewsletterLeftEllipse.e58e7db85249df409924.webp",
        E =
          n.p +
          "static/media/OurNewsletterRightEllipse.07c5360b876654cbeae7.webp",
        C = () => {
          const [t, n] = (0, e.useState)(0);
          return (0, v.jsx)("div", {
            className:
              "max-w-[1440px] mx-auto relative mt-12 md:mt-[60px] lg:mt-20 xl:mt-[100px]",
            id: "FAQ",
            children: (0, v.jsxs)("div", {
              className: "max-w-[1164px] px-5 md:px-3 mx-auto relative",
              children: [
                (0, v.jsx)("h2", {
                  className:
                    "font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center leading-[121%] mb-4",
                  children: "Frequently Asked Questions",
                }),
                (0, v.jsx)("p", {
                  className:
                    "font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack leading-[150%] mb-4 sm:mb-6 md:mb-8 lg:mb-10",
                  children:
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                }),
                (0, v.jsxs)("div", {
                  className:
                    "flex items-center justify-center flex-wrap z-10 relative",
                  children: [
                    (0, v.jsx)("div", {
                      className: "pb-12 md:pb-[60px] lg:pb-20 xl:pb-[100px]",
                      "data-aos": "zoom-in",
                      "data-aos-duration": "500",
                      "data-aos-delay": "300",
                      "data-aos-easing": "linear",
                      children: w.map((e, r) =>
                        (0, v.jsx)(
                          "div",
                          {
                            className: "pb-4 sm:pb-6 lg:w-[922px]",
                            children: (0, v.jsxs)("div", {
                              className:
                                "border border-solid border-[#cbcaca] rounded-[14px] md:rounded-[20px] px-4 md:px-[26px] faqbox bg-[#fefdfd] shadow-FaqShadow ".concat(
                                  t === r ? "active" : ""
                                ),
                              children: [
                                (0, v.jsxs)("button", {
                                  type: "button",
                                  className:
                                    "flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[26px] "
                                      .concat(
                                        t === r ? "pb-[0px]" : "pb-[26px]",
                                        " !font-medium text-dark font-inter "
                                      )
                                      .concat(t === r ? "text-color" : ""),
                                  onClick: () =>
                                    ((e) => {
                                      n(t === e ? null : e);
                                    })(r),
                                  "aria-expanded": t === r,
                                  "aria-controls": "faqs-text-".concat(r),
                                  children: [
                                    (0, v.jsx)("span", {
                                      className: "pe-7 ".concat(
                                        t === r ? "text-color1" : ""
                                      ),
                                      children: e.title,
                                    }),
                                    (0, v.jsx)("svg", {
                                      className:
                                        "transform origin-center transition duration-200 ease-out ".concat(
                                          t === r
                                            ? "rotate-180 svg-color"
                                            : "svg-color"
                                        ),
                                      width: "18",
                                      height: "10",
                                      viewBox: "0 0 18 10",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, v.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M9.88369 9.63369C9.64928 9.86803 9.3314 9.99967 8.99994 9.99967C8.66848 9.99967 8.3506 9.86803 8.11619 9.63369L1.04494 2.56244C0.925553 2.44713 0.830325 2.3092 0.764814 2.1567C0.699302 2.00419 0.66482 1.84017 0.663377 1.67419C0.661935 1.50822 0.693562 1.34362 0.756414 1.19C0.819265 1.03638 0.912081 0.896812 1.02945 0.779446C1.14681 0.66208 1.28638 0.569264 1.44 0.506413C1.59362 0.443562 1.75822 0.411935 1.92419 0.413377C2.09017 0.41482 2.25419 0.449302 2.4067 0.514814C2.5592 0.580325 2.69713 0.675552 2.81244 0.79494L8.99994 6.98244L15.1874 0.79494C15.4232 0.567242 15.7389 0.441249 16.0667 0.444098C16.3944 0.446946 16.708 0.578406 16.9397 0.810167C17.1715 1.04193 17.3029 1.35544 17.3058 1.68319C17.3086 2.01093 17.1826 2.32669 16.9549 2.56244L9.88369 9.63369Z",
                                        fill: "black",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  id: "faqs-text-".concat(r),
                                  role: "region",
                                  "aria-labelledby": "faqs-title-".concat(r),
                                  className:
                                    "grid text-base overflow-hidden transition-all duration-300 ease-in-out ".concat(
                                      t === r
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    ),
                                  children: (0, v.jsx)("div", {
                                    className: "overflow-hidden",
                                    children: (0, v.jsx)("p", {
                                      className:
                                        "pt-1 pb-[26px] text-black opacity-70 font-inter font-normal leading-[150%] md:ps-4 text-[14px] md:text-base max-w-[770px] ${expandedIndex === index ? 'text-color' : ''}",
                                      children: e.content,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          r
                        )
                      ),
                    }),
                    (0, v.jsxs)("div", {
                      className:
                        "w-full shadow-SubscribeCardShadow overflow-hidden bg-map bg-no-repeat bg-cover bg-center rounded-[15px] md:rounded-[28.5px] py-10 md:py-[63px] bg-white relative -mt-[100px] translate-y-[30%]",
                      children: [
                        (0, v.jsx)("img", {
                          className:
                            "absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[189px]",
                          src: k,
                          alt: "LeftElippse",
                        }),
                        (0, v.jsx)("img", {
                          className:
                            "absolute bottom-0 right-0 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[189px]",
                          src: E,
                          alt: "RightElippse",
                        }),
                        (0, v.jsxs)("div", {
                          className: "relative z-10 px-3",
                          children: [
                            (0, v.jsx)("h2", {
                              className:
                                "font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center !leading-[120%]",
                              children: "Subscribe to Our Newsletter",
                            }),
                            (0, v.jsx)("p", {
                              className:
                                "font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack !leading-[160%] mt-2 md:mt-4",
                              children:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting",
                            }),
                            (0, v.jsxs)("div", {
                              className:
                                "flex items-center justify-between gap-4 bg-white border border-white border-solid rounded-[10px] p-1.5 shadow-InputBoxShadow max-w-[512px] mx-auto mt-6 md:mt-10",
                              children: [
                                (0, v.jsx)("input", {
                                  type: "email",
                                  placeholder: "Enter Your email address",
                                  className:
                                    "w-full outline-none font-inter font-normal text-[14px] sm:text-base !leading-[121%] text-[#8c8f91] ps-2 md:ps-5",
                                }),
                                (0, v.jsxs)("button", {
                                  class:
                                    "rounded-[10px] flex items-center font-semibold font-inter h-[45px] min-w-[90px] md:h-[59px] md:min-w-[103px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                                  children: [
                                    (0, v.jsx)("span", {
                                      class:
                                        "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                                    }),
                                    (0, v.jsx)("span", {
                                      class:
                                        "relative mx-auto text-white text-center whitespace-nowrap transition duration-300 group-hover:text-extralightred ease text-[14px] md:text-base",
                                      children: "Submit",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        T = n.p + "static/media/FooterLogo.b86ced56ce98c7a4cc88.webp",
        P = () =>
          (0, v.jsxs)("svg", {
            className: "footer_link_hov",
            width: "30",
            height: "31",
            viewBox: "0 0 30 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, v.jsx)("rect", {
                x: "0.5",
                y: "0.91748",
                width: "29",
                height: "29",
                rx: "14.5",
                stroke: "#FFBE4A",
              }),
              (0, v.jsx)("path", {
                d: "M12.6705 7.39551H7.5L13.6011 15.6568L7.83239 22.3955H9.78977L14.5082 16.8838L18.5795 22.3955H23.75L17.3918 13.787L22.8636 7.39551H20.9062L16.4848 12.56L12.6705 7.39551ZM19.3182 20.8955L10.4545 8.89551H11.9318L20.7955 20.8955H19.3182Z",
                fill: "#FFBE4A",
              }),
            ],
          }),
        N = () =>
          (0, v.jsxs)("svg", {
            className: "footer_link_hov",
            width: "30",
            height: "31",
            viewBox: "0 0 30 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, v.jsx)("rect", {
                x: "0.5",
                y: "0.91748",
                width: "29",
                height: "29",
                rx: "14.5",
                stroke: "#FFBE4A",
              }),
              (0, v.jsx)("path", {
                d: "M16 16.925H18.1429L19 13.125H16V11.225C16 10.2465 16 9.325 17.7143 9.325H19V6.133C18.7206 6.09215 17.6654 6 16.5511 6C14.224 6 12.5714 7.57415 12.5714 10.465V13.125H10V16.925H12.5714V25H16V16.925Z",
                fill: "#FFBE4A",
              }),
            ],
          }),
        _ = () =>
          (0, v.jsxs)("svg", {
            className: "footer_link_hov",
            width: "30",
            height: "31",
            viewBox: "0 0 30 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, v.jsx)("rect", {
                x: "0.5",
                y: "0.91748",
                width: "29",
                height: "29",
                rx: "14.5",
                stroke: "#FFBE4A",
              }),
              (0, v.jsx)("path", {
                d: "M14.9976 12.4996C13.391 12.4996 12.0798 13.8108 12.0798 15.4175C12.0798 17.0242 13.391 18.3354 14.9976 18.3354C16.6043 18.3354 17.9155 17.0242 17.9155 15.4175C17.9155 13.8108 16.6043 12.4996 14.9976 12.4996ZM23.749 15.4175C23.749 14.2092 23.76 13.0118 23.6921 11.8057C23.6243 10.4047 23.3047 9.16138 22.2802 8.13694C21.2536 7.11031 20.0125 6.7929 18.6116 6.72504C17.4033 6.65719 16.2059 6.66813 14.9998 6.66813C13.7915 6.66813 12.5942 6.65719 11.3881 6.72504C9.98717 6.7929 8.74385 7.11249 7.71943 8.13694C6.69282 9.16357 6.37542 10.4047 6.30756 11.8057C6.23971 13.014 6.25065 14.2114 6.25065 15.4175C6.25065 16.6236 6.23971 17.8232 6.30756 19.0293C6.37542 20.4302 6.69501 21.6736 7.71943 22.698C8.74604 23.7247 9.98717 24.0421 11.3881 24.1099C12.5964 24.1778 13.7937 24.1668 14.9998 24.1668C16.2081 24.1668 17.4055 24.1778 18.6116 24.1099C20.0125 24.0421 21.2558 23.7225 22.2802 22.698C23.3069 21.6714 23.6243 20.4302 23.6921 19.0293C23.7622 17.8232 23.749 16.6258 23.749 15.4175ZM14.9976 19.9071C12.5132 19.9071 10.5081 17.902 10.5081 15.4175C10.5081 12.933 12.5132 10.9279 14.9976 10.9279C17.4821 10.9279 19.4872 12.933 19.4872 15.4175C19.4872 17.902 17.4821 19.9071 14.9976 19.9071ZM19.671 11.7925C19.091 11.7925 18.6225 11.3241 18.6225 10.744C18.6225 10.1639 19.091 9.69549 19.671 9.69549C20.2511 9.69549 20.7195 10.1639 20.7195 10.744C20.7197 10.8818 20.6927 11.0182 20.6401 11.1455C20.5874 11.2728 20.5102 11.3884 20.4128 11.4858C20.3154 11.5832 20.1998 11.6604 20.0725 11.7131C19.9452 11.7657 19.8088 11.7927 19.671 11.7925Z",
                fill: "#FFBE4A",
              }),
            ],
          }),
        L = () =>
          (0, v.jsxs)("svg", {
            className: "slider_arrow_hov",
            width: "35",
            height: "36",
            viewBox: "0 0 35 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, v.jsx)("circle", {
                opacity: "0.7",
                cx: "17.5",
                cy: "18",
                r: "17",
                stroke: "#FA6458",
              }),
              (0, v.jsx)("path", {
                opacity: "0.7",
                d: "M16.328 18L21.278 13.05L19.864 11.636L13.5 18L19.864 24.364L21.278 22.949L16.328 17.999L16.328 18Z",
                fill: "#FA6458",
              }),
            ],
          }),
        j = () =>
          (0, v.jsxs)("svg", {
            className: "slider_arrow_hov",
            width: "35",
            height: "36",
            viewBox: "0 0 35 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, v.jsx)("circle", {
                opacity: "0.7",
                cx: "17.5",
                cy: "18",
                r: "17",
                stroke: "#FA6458",
              }),
              (0, v.jsx)("path", {
                opacity: "0.7",
                d: "M18.9501 18.364L14.0001 23.314L15.4141 24.728L21.7781 18.364L15.4141 12L14.0001 13.415L18.9501 18.365V18.364Z",
                fill: "#FA6458",
              }),
            ],
          }),
        M = () => {
          const e = new Date().getFullYear();
          return (0, v.jsx)("div", {
            className: "bg-black relative z-0",
            children: (0, v.jsx)("div", {
              className: "max-w-[1440px] mx-auto",
              children: (0, v.jsxs)("div", {
                className: "max-w-[1164px] mx-auto px-4 md:px-3",
                children: [
                  (0, v.jsxs)("div", {
                    className:
                      "pt-[125px] md:pt-[158.84px] pb-6 sm:pb-8 md:pb-11 lg:pb-[58.58px]",
                    children: [
                      (0, v.jsxs)("a", {
                        href: "#logo",
                        className: "flex items-end mx-auto max-w-[282px]",
                        children: [
                          (0, v.jsx)("img", {
                            className: "max-w-[95px]",
                            src: T,
                            alt: "FooterLogo",
                          }),
                          (0, v.jsxs)("span", {
                            className: "flex flex-col -ms-8 mb-2",
                            children: [
                              (0, v.jsxs)("span", {
                                className:
                                  "font-barlow text-lightred font-semibold leading-[120%] text-[27px]",
                                children: [
                                  "ThrillSeeker ",
                                  (0, v.jsx)("span", {
                                    className: "text-yellow",
                                    children: "Tours",
                                  }),
                                ],
                              }),
                              (0, v.jsx)("span", {
                                className:
                                  "font-barlow font-medium text-extralightred text-[7px] leading-[117%]",
                                children: "SLOGAN COMPANY HERE",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsx)("p", {
                        className:
                          "font-inter text-[14px] sm:text-base leading-[150%] text-white opacity-70 max-w-[494px] mx-auto mt-4 text-center",
                        children:
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.",
                      }),
                      (0, v.jsxs)("ul", {
                        className:
                          "flex items-center justify-center flex-wrap mt-5 md:mt-6 lg:mt-[30px] gap-6 sm:gap-[30px]",
                        children: [
                          (0, v.jsx)("li", {
                            children: (0, v.jsx)("a", {
                              href: "#home",
                              className:
                                "font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300",
                              children: "Home",
                            }),
                          }),
                          (0, v.jsx)("li", {
                            children: (0, v.jsx)("a", {
                              href: "#About",
                              className:
                                "font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300",
                              children: "About Us",
                            }),
                          }),
                          (0, v.jsx)("li", {
                            children: (0, v.jsx)("a", {
                              href: "#Discover",
                              className:
                                "font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300",
                              children: "Discover",
                            }),
                          }),
                          (0, v.jsx)("li", {
                            children: (0, v.jsx)("a", {
                              href: "#Trip",
                              className:
                                "font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300",
                              children: "Trip Plan",
                            }),
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className:
                          "flex items-center justify-center flex-wrap gap-5 sm:gap-6 mt-5 md:mt-6 lg:mt-8 xl:mt-10",
                        children: [
                          (0, v.jsx)("a", {
                            target: "_blank",
                            href: "https://twitter.com/",
                            children: (0, v.jsx)(P, {}),
                          }),
                          (0, v.jsx)("a", {
                            target: "_blank",
                            href: "https://www.facebook.com/",
                            children: (0, v.jsx)(N, {}),
                          }),
                          (0, v.jsx)("a", {
                            target: "_blank",
                            href: "https://www.instagram.com/",
                            children: (0, v.jsx)(_, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className: "bg-white opacity-35 h-[1px] w-full",
                  }),
                  (0, v.jsxs)("p", {
                    className:
                      "font-inter font-normal text-[14px] sm:text-base leading-[121%] flex items-center justify-center text-white opacity-70 py-3 md:py-4 lg:px-5 xl:py-6",
                    children: ["@Copyrights", e],
                  }),
                ],
              }),
            }),
          });
        },
        z = n.p + "static/media/FemaleTourist.b9384f2acdab2cc41367.webp";
      function I(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function O(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : I(t[n]) &&
                I(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                O(e[n], t[n]);
          });
      }
      const F = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function D() {
        const e = "undefined" !== typeof document ? document : {};
        return O(e, F), e;
      }
      const A = {
        document: F,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function R() {
        const e = "undefined" !== typeof window ? window : {};
        return O(e, A), e;
      }
      function B(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function V() {
        return Date.now();
      }
      function H(e, t) {
        void 0 === t && (t = "x");
        const n = R();
        let r, a, l;
        const i = (function (e) {
          const t = R();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((a = i.transform || i.webkitTransform),
              a.split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (l = new n.WebKitCSSMatrix("none" === a ? "" : a)))
            : ((l =
                i.MozTransform ||
                i.OTransform ||
                i.MsTransform ||
                i.msTransform ||
                i.transform ||
                i
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = l.toString().split(","))),
          "x" === t &&
            (a = n.WebKitCSSMatrix
              ? l.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (a = n.WebKitCSSMatrix
              ? l.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          a || 0
        );
      }
      function U(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function G() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (
            void 0 !== a &&
            null !== a &&
            ((n = a),
            !("undefined" !== typeof window &&
            "undefined" !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                l = Object.getOwnPropertyDescriptor(a, r);
              void 0 !== l &&
                l.enumerable &&
                (U(e[r]) && U(a[r])
                  ? a[r].__swiper__
                    ? (e[r] = a[r])
                    : G(e[r], a[r])
                  : !U(e[r]) && U(a[r])
                  ? ((e[r] = {}),
                    a[r].__swiper__ ? (e[r] = a[r]) : G(e[r], a[r]))
                  : (e[r] = a[r]));
            }
          }
        }
        var n;
        return e;
      }
      function W(e, t, n) {
        e.style.setProperty(t, n);
      }
      function $(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const a = R(),
          l = -t.translate;
        let i,
          o = null;
        const s = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > l ? "next" : "prev",
          c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          d = () => {
            (i = new Date().getTime()), null === o && (o = i);
            const e = Math.max(Math.min((i - o) / s, 1), 0),
              u = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = l + u * (n - l);
            if ((c(p, n) && (p = n), t.wrapperEl.scrollTo({ [r]: p }), c(p, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: p });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(d);
          };
        d();
      }
      function q(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function Q(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function Y(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return (
          n.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ""),
                    e
                      .trim()
                      .split(" ")
                      .filter((e) => !!e.trim())
                  );
                })(t))
          ),
          n
        );
      }
      function X(e, t) {
        return R().getComputedStyle(e, null).getPropertyValue(t);
      }
      function K(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); )
            1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function Z(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
        return n;
      }
      function J(e, t, n) {
        const r = R();
        return n
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function ee(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
      let te, ne, re;
      function ae() {
        return (
          te ||
            (te = (function () {
              const e = R(),
                t = D();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          te
        );
      }
      function le(e) {
        return (
          void 0 === e && (e = {}),
          ne ||
            (ne = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = ae(),
                r = R(),
                a = r.navigator.platform,
                l = t || r.navigator.userAgent,
                i = { ios: !1, android: !1 },
                o = r.screen.width,
                s = r.screen.height,
                u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = l.match(/(iPad).*OS\s([\d_]+)/);
              const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === a;
              let m = "MacIntel" === a;
              return (
                !c &&
                  m &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(o, "x").concat(s)) >= 0 &&
                  ((c = l.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (m = !1)),
                u && !f && ((i.os = "android"), (i.android = !0)),
                (c || p || d) && ((i.os = "ios"), (i.ios = !0)),
                i
              );
            })(e)),
          ne
        );
      }
      function ie() {
        return (
          re ||
            (re = (function () {
              const e = R(),
                t = le();
              let n = !1;
              function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (r()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  const [e, r] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  n = e < 16 || (16 === e && r < 2);
                }
              }
              const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                l = r();
              return {
                isSafari: n || l,
                needPerspectiveFix: n,
                need3dFix: l || (a && t.ios),
                isWebView: a,
              };
            })()),
          re
        );
      }
      var oe = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          const a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            t.apply(r, l);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, a) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          "string" === typeof l[0] || Array.isArray(l[0])
            ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
            : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      const se = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const n = t.closest(
            e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass)
          );
          if (n) {
            let t = n.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (n.shadowRoot
                ? (t = n.shadowRoot.querySelector(
                    ".".concat(e.params.lazyPreloaderClass)
                  ))
                : requestAnimationFrame(() => {
                    n.shadowRoot &&
                      ((t = n.shadowRoot.querySelector(
                        ".".concat(e.params.lazyPreloaderClass)
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        ue = (e, t) => {
          if (!e.slides[t]) return;
          const n = e.slides[t].querySelector('[loading="lazy"]');
          n && n.removeAttribute("loading");
        },
        ce = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const n = e.slides.length;
          if (!n || !t || t < 0) return;
          t = Math.min(t, n);
          const r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const n = a,
              l = [n - t];
            return (
              l.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
              void e.slides.forEach((t, n) => {
                l.includes(t.column) && ue(e, n);
              })
            );
          }
          const l = a + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = a - t; i <= l + t; i += 1) {
              const t = ((i % n) + n) % n;
              (t < a || t > l) && ue(e, t);
            }
          else
            for (
              let i = Math.max(a - t, 0);
              i <= Math.min(l + t, n - 1);
              i += 1
            )
              i !== a && (i > l || i < a) && ue(e, i);
        };
      var de = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r.clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(X(r, "padding-left") || 0, 10) -
                parseInt(X(r, "padding-right") || 0, 10)),
              (n =
                n -
                parseInt(X(r, "padding-top") || 0, 10) -
                parseInt(X(r, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, n) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
          }
          const n = e.params,
            {
              wrapperEl: r,
              slidesEl: a,
              size: l,
              rtlTranslate: i,
              wrongRTL: o,
            } = e,
            s = e.virtual && n.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            c = q(a, ".".concat(e.params.slideClass, ", swiper-slide")),
            d = s ? e.virtual.slides.length : c.length;
          let p = [];
          const f = [],
            m = [];
          let h = n.slidesOffsetBefore;
          "function" === typeof h && (h = n.slidesOffsetBefore.call(e));
          let g = n.slidesOffsetAfter;
          "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = n.spaceBetween,
            x = -h,
            w = 0,
            S = 0;
          if ("undefined" === typeof l) return;
          "string" === typeof y && y.indexOf("%") >= 0
            ? (y = (parseFloat(y.replace("%", "")) / 100) * l)
            : "string" === typeof y && (y = parseFloat(y)),
            (e.virtualSize = -y),
            c.forEach((e) => {
              i ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            n.centeredSlides &&
              n.cssMode &&
              (W(r, "--swiper-centered-offset-before", ""),
              W(r, "--swiper-centered-offset-after", ""));
          const k = n.grid && n.grid.rows > 1 && e.grid;
          let E;
          k ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const C =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => "undefined" !== typeof n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let T = 0; T < d; T += 1) {
            let r;
            if (
              ((E = 0),
              c[T] && (r = c[T]),
              k && e.grid.updateSlide(T, r, c),
              !c[T] || "none" !== X(r, "display"))
            ) {
              if ("auto" === n.slidesPerView) {
                C && (c[T].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(r),
                  l = r.style.transform,
                  i = r.style.webkitTransform;
                if (
                  (l && (r.style.transform = "none"),
                  i && (r.style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  E = e.isHorizontal() ? J(r, "width", !0) : J(r, "height", !0);
                else {
                  const e = t(a, "width"),
                    n = t(a, "padding-left"),
                    l = t(a, "padding-right"),
                    i = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    s = a.getPropertyValue("box-sizing");
                  if (s && "border-box" === s) E = e + i + o;
                  else {
                    const { clientWidth: t, offsetWidth: a } = r;
                    E = e + n + l + i + o + (a - t);
                  }
                }
                l && (r.style.transform = l),
                  i && (r.style.webkitTransform = i),
                  n.roundLengths && (E = Math.floor(E));
              } else
                (E = (l - (n.slidesPerView - 1) * y) / n.slidesPerView),
                  n.roundLengths && (E = Math.floor(E)),
                  c[T] &&
                    (c[T].style[e.getDirectionLabel("width")] = "".concat(
                      E,
                      "px"
                    ));
              c[T] && (c[T].swiperSlideSize = E),
                m.push(E),
                n.centeredSlides
                  ? ((x = x + E / 2 + w / 2 + y),
                    0 === w && 0 !== T && (x = x - l / 2 - y),
                    0 === T && (x = x - l / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    n.roundLengths && (x = Math.floor(x)),
                    S % n.slidesPerGroup === 0 && p.push(x),
                    f.push(x))
                  : (n.roundLengths && (x = Math.floor(x)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ===
                      0 && p.push(x),
                    f.push(x),
                    (x = x + E + y)),
                (e.virtualSize += E + y),
                (w = E),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, l) + g),
            i &&
              o &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              (r.style.width = "".concat(e.virtualSize + y, "px")),
            n.setWrapperSize &&
              (r.style[e.getDirectionLabel("width")] = "".concat(
                e.virtualSize + y,
                "px"
              )),
            k && e.grid.updateWrapperSize(E, p),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < p.length; r += 1) {
              let a = p[r];
              n.roundLengths && (a = Math.floor(a)),
                p[r] <= e.virtualSize - l && t.push(a);
            }
            (p = t),
              Math.floor(e.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - l);
          }
          if (s && n.loop) {
            const t = m[0] + y;
            if (n.slidesPerGroup > 1) {
              const r = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    n.slidesPerGroup
                ),
                a = t * n.slidesPerGroup;
              for (let e = 0; e < r; e += 1) p.push(p[p.length - 1] + a);
            }
            for (
              let r = 0;
              r < e.virtual.slidesBefore + e.virtual.slidesAfter;
              r += 1
            )
              1 === n.slidesPerGroup && p.push(p[p.length - 1] + t),
                f.push(f[f.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === p.length && (p = [0]), 0 !== y)) {
            const t =
              e.isHorizontal() && i
                ? "marginLeft"
                : e.getDirectionLabel("marginRight");
            c.filter(
              (e, t) => !(n.cssMode && !n.loop) || t !== c.length - 1
            ).forEach((e) => {
              e.style[t] = "".concat(y, "px");
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = e - l;
            p = p.map((e) => (e <= 0 ? -h : e > t ? t + g : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((t) => {
                e += t + (y || 0);
              }),
              (e -= y),
              e < l)
            ) {
              const t = (l - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: m,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            W(r, "--swiper-centered-offset-before", "".concat(-p[0], "px")),
              W(
                r,
                "--swiper-centered-offset-after",
                "".concat(e.size / 2 - m[m.length - 1] / 2, "px")
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== u && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !s && !n.cssMode && ("slide" === n.effect || "fade" === n.effect))
          ) {
            const t = "".concat(n.containerModifierClass, "backface-hidden"),
              r = e.el.classList.contains(t);
            d <= n.maxBackfaceHiddenSlides
              ? r || e.el.classList.add(t)
              : r && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let a,
            l = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const i = (e) =>
            r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                n.push(e);
              });
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                n.push(i(e));
              }
          else n.push(i(t.activeIndex));
          for (a = 0; a < n.length; a += 1)
            if ("undefined" !== typeof n[a]) {
              const e = n[a].offsetHeight;
              l = e > l ? e : l;
            }
          (l || 0 === l) && (t.wrapperEl.style.height = "".concat(l, "px"));
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset =
              (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
              n -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: a, snapGrid: l } = t;
          if (0 === r.length) return;
          "undefined" === typeof r[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let i = -e;
          a && (i = e),
            r.forEach((e) => {
              e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let o = n.spaceBetween;
          "string" === typeof o && o.indexOf("%") >= 0
            ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
            : "string" === typeof o && (o = parseFloat(o));
          for (let s = 0; s < r.length; s += 1) {
            const e = r[s];
            let u = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
            const c =
                (i + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              d =
                (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              p = -(i - u),
              f = p + t.slidesSizesGrid[s],
              m = p >= 0 && p <= t.size - t.slidesSizesGrid[s];
            ((p >= 0 && p < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (p <= 0 && f >= t.size)) &&
              (t.visibleSlides.push(e),
              t.visibleSlidesIndexes.push(s),
              r[s].classList.add(n.slideVisibleClass)),
              m && r[s].classList.add(n.slideFullyVisibleClass),
              (e.progress = a ? -c : c),
              (e.originalProgress = a ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: a, isBeginning: l, isEnd: i, progressLoop: o } = t;
          const s = l,
            u = i;
          if (0 === r) (a = 0), (l = !0), (i = !0);
          else {
            a = (e - t.minTranslate()) / r;
            const n = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (l = n || a <= 0), (i = o || a >= 1), n && (a = 0), o && (a = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[n],
              l = t.slidesGrid[r],
              i = t.slidesGrid[t.slidesGrid.length - 1],
              s = Math.abs(e);
            (o = s >= a ? (s - a) / i : (s + i - l) / i), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: a,
            progressLoop: o,
            isBeginning: l,
            isEnd: i,
          }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !s && t.emit("reachBeginning toEdge"),
            i && !u && t.emit("reachEnd toEdge"),
            ((s && !l) || (u && !i)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: r, activeIndex: a } = e,
            l = e.virtual && n.virtual.enabled,
            i = e.grid && n.grid && n.grid.rows > 1,
            o = (e) =>
              q(
                r,
                ".".concat(n.slideClass).concat(e, ", swiper-slide").concat(e)
              )[0];
          let s, u, c;
          if (
            (t.forEach((e) => {
              e.classList.remove(
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              );
            }),
            l)
          )
            if (n.loop) {
              let t = a - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (s = o('[data-swiper-slide-index="'.concat(t, '"]')));
            } else s = o('[data-swiper-slide-index="'.concat(a, '"]'));
          else
            i
              ? ((s = t.filter((e) => e.column === a)[0]),
                (c = t.filter((e) => e.column === a + 1)[0]),
                (u = t.filter((e) => e.column === a - 1)[0]))
              : (s = t[a]);
          s &&
            (s.classList.add(n.slideActiveClass),
            i
              ? (c && c.classList.add(n.slideNextClass),
                u && u.classList.add(n.slidePrevClass))
              : ((c = (function (e, t) {
                  const n = [];
                  for (; e.nextElementSibling; ) {
                    const r = e.nextElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                  }
                  return n;
                })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
                n.loop && !c && (c = t[0]),
                c && c.classList.add(n.slideNextClass),
                (u = (function (e, t) {
                  const n = [];
                  for (; e.previousElementSibling; ) {
                    const r = e.previousElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                  }
                  return n;
                })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
                n.loop && 0 === !u && (u = t[t.length - 1]),
                u && u.classList.add(n.slidePrevClass))),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: a,
              activeIndex: l,
              realIndex: i,
              snapIndex: o,
            } = t;
          let s,
            u = e;
          const c = (e) => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            ("undefined" === typeof u &&
              (u = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let l = 0; l < t.length; l += 1)
                  "undefined" !== typeof t[l + 1]
                    ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
                      ? (a = l)
                      : r >= t[l] && r < t[l + 1] && (a = l + 1)
                    : r >= t[l] && (a = l);
                return (
                  n.normalizeSlideIndex &&
                    (a < 0 || "undefined" === typeof a) &&
                    (a = 0),
                  a
                );
              })(t)),
            r.indexOf(n) >= 0)
          )
            s = r.indexOf(n);
          else {
            const e = Math.min(a.slidesPerGroupSkip, u);
            s = e + Math.floor((u - e) / a.slidesPerGroup);
          }
          if ((s >= r.length && (s = r.length - 1), u === l && !t.params.loop))
            return void (
              s !== o && ((t.snapIndex = s), t.emit("snapIndexChange"))
            );
          if (u === l && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = c(u));
          const d = t.grid && a.grid && a.grid.rows > 1;
          let p;
          if (t.virtual && a.virtual.enabled && a.loop) p = c(u);
          else if (d) {
            const e = t.slides.filter((e) => e.column === u)[0];
            let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
              (p = Math.floor(n / a.grid.rows));
          } else if (t.slides[u]) {
            const e = t.slides[u].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : u;
          } else p = u;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: s,
            previousRealIndex: i,
            realIndex: p,
            previousIndex: l,
            activeIndex: u,
          }),
            t.initialized && ce(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (i !== p && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
          const n = this,
            r = n.params;
          let a = e.closest(".".concat(r.slideClass, ", swiper-slide"));
          !a &&
            n.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !a &&
                e.matches &&
                e.matches(".".concat(r.slideClass, ", swiper-slide")) &&
                (a = e);
            });
          let l,
            i = !1;
          if (a)
            for (let o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === a) {
                (i = !0), (l = o);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  a.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = l),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var pe = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            wrapperEl: a,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let l = H(a, e);
          return (l += this.cssOverflowAdjustment()), n && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: r, params: a, wrapperEl: l, progress: i } = n;
          let o,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u),
            a.cssMode
              ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                (n.isHorizontal()
                  ? (s -= n.cssOverflowAdjustment())
                  : (u -= n.cssOverflowAdjustment()),
                (l.style.transform = "translate3d("
                  .concat(s, "px, ")
                  .concat(u, "px, ")
                  .concat(0, "px)")));
          const c = n.maxTranslate() - n.minTranslate();
          (o = 0 === c ? 0 : (e - n.minTranslate()) / c),
            o !== i && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const l = this,
            { params: i, wrapperEl: o } = l;
          if (l.animating && i.preventInteractionOnTransition) return !1;
          const s = l.minTranslate(),
            u = l.maxTranslate();
          let c;
          if (
            ((c = r && e > s ? s : r && e < u ? u : e),
            l.updateProgress(c),
            i.cssMode)
          ) {
            const e = l.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!l.support.smoothScroll)
                return (
                  $({
                    swiper: l,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (l.setTransition(0),
                l.setTranslate(c),
                n &&
                  (l.emit("beforeTransitionStart", t, a),
                  l.emit("transitionEnd")))
              : (l.setTransition(t),
                l.setTranslate(c),
                n &&
                  (l.emit("beforeTransitionStart", t, a),
                  l.emit("transitionStart")),
                l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                    (l.onTranslateToWrapperTransitionEnd = function (e) {
                      l &&
                        !l.destroyed &&
                        e.target === this &&
                        (l.wrapperEl.removeEventListener(
                          "transitionend",
                          l.onTranslateToWrapperTransitionEnd
                        ),
                        (l.onTranslateToWrapperTransitionEnd = null),
                        delete l.onTranslateToWrapperTransitionEnd,
                        n && l.emit("transitionEnd"));
                    }),
                  l.wrapperEl.addEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function fe(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: a } = e;
        const { activeIndex: l, previousIndex: i } = t;
        let o = r;
        if (
          (o || (o = l > i ? "next" : l < i ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && l !== i)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === o
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var me = {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode ||
            ((n.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
            (n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            fe({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0),
              fe({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      };
      var he = {
        slideTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e && (e = parseInt(e, 10));
          const l = this;
          let i = e;
          i < 0 && (i = 0);
          const {
            params: o,
            snapGrid: s,
            slidesGrid: u,
            previousIndex: c,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: m,
          } = l;
          if (
            (l.animating && o.preventInteractionOnTransition) ||
            (!m && !r && !a) ||
            l.destroyed
          )
            return !1;
          const h = Math.min(l.params.slidesPerGroupSkip, i);
          let g = h + Math.floor((i - h) / l.params.slidesPerGroup);
          g >= s.length && (g = s.length - 1);
          const v = -s[g];
          if (o.normalizeSlideIndex)
            for (let y = 0; y < u.length; y += 1) {
              const e = -Math.floor(100 * v),
                t = Math.floor(100 * u[y]),
                n = Math.floor(100 * u[y + 1]);
              "undefined" !== typeof u[y + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (i = y)
                  : e >= t && e < n && (i = y + 1)
                : e >= t && (i = y);
            }
          if (l.initialized && i !== d) {
            if (
              !l.allowSlideNext &&
              (p
                ? v > l.translate && v > l.minTranslate()
                : v < l.translate && v < l.minTranslate())
            )
              return !1;
            if (
              !l.allowSlidePrev &&
              v > l.translate &&
              v > l.maxTranslate() &&
              (d || 0) !== i
            )
              return !1;
          }
          let b;
          if (
            (i !== (c || 0) && n && l.emit("beforeSlideChangeStart"),
            l.updateProgress(v),
            (b = i > d ? "next" : i < d ? "prev" : "reset"),
            (p && -v === l.translate) || (!p && v === l.translate))
          )
            return (
              l.updateActiveIndex(i),
              o.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== o.effect && l.setTranslate(v),
              "reset" !== b && (l.transitionStart(n, b), l.transitionEnd(n, b)),
              !1
            );
          if (o.cssMode) {
            const e = l.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = l.virtual && l.params.virtual.enabled;
              t &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                  ? ((l._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      f[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._immediateVirtual = !1);
                  });
            } else {
              if (!l.support.smoothScroll)
                return (
                  $({ swiper: l, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(v),
            l.updateActiveIndex(i),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, r),
            l.transitionStart(n, b),
            0 === t
              ? l.transitionEnd(n, b)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.wrapperEl.removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, b));
                  }),
                l.wrapperEl.addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const a = this;
          if (a.destroyed) return;
          const l = a.grid && a.params.grid && a.params.grid.rows > 1;
          let i = e;
          if (a.params.loop)
            if (a.virtual && a.params.virtual.enabled)
              i += a.virtual.slidesBefore;
            else {
              let e;
              if (l) {
                const t = i * a.params.grid.rows;
                e = a.slides.filter(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                )[0].column;
              } else e = a.getSlideIndexByData(i);
              const t = l
                  ? Math.ceil(a.slides.length / a.params.grid.rows)
                  : a.slides.length,
                { centeredSlides: n } = a.params;
              let r = a.params.slidesPerView;
              "auto" === r
                ? (r = a.slidesPerViewDynamic())
                : ((r = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                  n && r % 2 === 0 && (r += 1));
              let o = t - e < r;
              if ((n && (o = o || e < Math.ceil(r / 2)), o)) {
                const r = n
                  ? e < a.activeIndex
                    ? "prev"
                    : "next"
                  : e - a.activeIndex - 1 < a.params.slidesPerView
                  ? "next"
                  : "prev";
                a.loopFix({
                  direction: r,
                  slideTo: !0,
                  activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                  slideRealIndex: "next" === r ? a.realIndex : void 0,
                });
              }
              if (l) {
                const e = i * a.params.grid.rows;
                i = a.slides.filter(
                  (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                )[0].column;
              } else i = a.getSlideIndexByData(i);
            }
          return (
            requestAnimationFrame(() => {
              a.slideTo(i, t, n, r);
            }),
            a
          );
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            { enabled: a, params: l, animating: i } = r;
          if (!a || r.destroyed) return r;
          let o = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
            u = r.virtual && l.virtual.enabled;
          if (l.loop) {
            if (i && !u && l.loopPreventsSliding) return !1;
            if (
              (r.loopFix({ direction: "next" }),
              (r._clientLeft = r.wrapperEl.clientLeft),
              r.activeIndex === r.slides.length - 1 && l.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  r.slideTo(r.activeIndex + s, e, t, n);
                }),
                !0
              );
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            {
              params: a,
              snapGrid: l,
              slidesGrid: i,
              rtlTranslate: o,
              enabled: s,
              animating: u,
            } = r;
          if (!s || r.destroyed) return r;
          const c = r.virtual && a.virtual.enabled;
          if (a.loop) {
            if (u && !c && a.loopPreventsSliding) return !1;
            r.loopFix({ direction: "prev" }),
              (r._clientLeft = r.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = d(o ? r.translate : -r.translate),
            f = l.map((e) => d(e));
          let m = l[f.indexOf(p) - 1];
          if ("undefined" === typeof m && a.cssMode) {
            let e;
            l.forEach((t, n) => {
              p >= t && (e = n);
            }),
              "undefined" !== typeof e && (m = l[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            ("undefined" !== typeof m &&
              ((h = i.indexOf(m)),
              h < 0 && (h = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && r.isBeginning)
          ) {
            const a =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(a, e, t, n);
          }
          return a.loop && 0 === r.activeIndex && a.cssMode
            ? (requestAnimationFrame(() => {
                r.slideTo(h, e, t, n);
              }),
              !0)
            : r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this;
          if (!r.destroyed) return r.slideTo(r.activeIndex, e, t, n);
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          const a = this;
          if (a.destroyed) return;
          let l = a.activeIndex;
          const i = Math.min(a.params.slidesPerGroupSkip, l),
            o = i + Math.floor((l - i) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[o]) {
            const e = a.snapGrid[o];
            s - e > (a.snapGrid[o + 1] - e) * r &&
              (l += a.params.slidesPerGroup);
          } else {
            const e = a.snapGrid[o - 1];
            s - e <= (a.snapGrid[o] - e) * r && (l -= a.params.slidesPerGroup);
          }
          return (
            (l = Math.max(l, 0)),
            (l = Math.min(l, a.slidesGrid.length - 1)),
            a.slideTo(l, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let a,
            l = e.clickedIndex;
          const i = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
          if (t.loop) {
            if (e.animating) return;
            (a = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? l < e.loopedSlides - r / 2 ||
                  l > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (l = e.getSlideIndex(
                      q(
                        n,
                        ""
                          .concat(i, '[data-swiper-slide-index="')
                          .concat(a, '"]')
                      )[0]
                    )),
                    B(() => {
                      e.slideTo(l);
                    }))
                  : e.slideTo(l)
                : l > e.slides.length - r
                ? (e.loopFix(),
                  (l = e.getSlideIndex(
                    q(
                      n,
                      "".concat(i, '[data-swiper-slide-index="').concat(a, '"]')
                    )[0]
                  )),
                  B(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l);
          } else e.slideTo(l);
        },
      };
      var ge = {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: r } = t;
          if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
          const a = () => {
              q(r, ".".concat(n.slideClass, ", swiper-slide")).forEach(
                (e, t) => {
                  e.setAttribute("data-swiper-slide-index", t);
                }
              );
            },
            l = t.grid && n.grid && n.grid.rows > 1,
            i = n.slidesPerGroup * (l ? n.grid.rows : 1),
            o = t.slides.length % i !== 0,
            s = l && t.slides.length % n.grid.rows !== 0,
            u = (e) => {
              for (let r = 0; r < e; r += 1) {
                const e = t.isElement
                  ? Y("swiper-slide", [n.slideBlankClass])
                  : Y("div", [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(e);
              }
            };
          if (o) {
            if (n.loopAddBlankSlides) {
              u(i - (t.slides.length % i)), t.recalcSlides(), t.updateSlides();
            } else
              Q(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else if (s) {
            if (n.loopAddBlankSlides) {
              u(n.grid.rows - (t.slides.length % n.grid.rows)),
                t.recalcSlides(),
                t.updateSlides();
            } else
              Q(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else a();
          t.loopFix({
            slideRealIndex: e,
            direction: n.centeredSlides ? void 0 : "next",
          });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: r,
            setTranslate: a,
            activeSlideIndex: l,
            byController: i,
            byMousewheel: o,
          } = void 0 === e ? {} : e;
          const s = this;
          if (!s.params.loop) return;
          s.emit("beforeLoopFix");
          const {
              slides: u,
              allowSlidePrev: c,
              allowSlideNext: d,
              slidesEl: p,
              params: f,
            } = s,
            { centeredSlides: m } = f;
          if (
            ((s.allowSlidePrev = !0),
            (s.allowSlideNext = !0),
            s.virtual && f.virtual.enabled)
          )
            return (
              n &&
                (f.centeredSlides || 0 !== s.snapIndex
                  ? f.centeredSlides && s.snapIndex < f.slidesPerView
                    ? s.slideTo(
                        s.virtual.slides.length + s.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : s.snapIndex === s.snapGrid.length - 1 &&
                      s.slideTo(s.virtual.slidesBefore, 0, !1, !0)
                  : s.slideTo(s.virtual.slides.length, 0, !1, !0)),
              (s.allowSlidePrev = c),
              (s.allowSlideNext = d),
              void s.emit("loopFix")
            );
          let h = f.slidesPerView;
          "auto" === h
            ? (h = s.slidesPerViewDynamic())
            : ((h = Math.ceil(parseFloat(f.slidesPerView, 10))),
              m && h % 2 === 0 && (h += 1));
          const g = f.slidesPerGroupAuto ? h : f.slidesPerGroup;
          let v = g;
          v % g !== 0 && (v += g - (v % g)),
            (v += f.loopAdditionalSlides),
            (s.loopedSlides = v);
          const b = s.grid && f.grid && f.grid.rows > 1;
          u.length < h + v
            ? Q(
                "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
              )
            : b &&
              "row" === f.grid.fill &&
              Q(
                "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
              );
          const y = [],
            x = [];
          let w = s.activeIndex;
          "undefined" === typeof l
            ? (l = s.getSlideIndex(
                u.filter((e) => e.classList.contains(f.slideActiveClass))[0]
              ))
            : (w = l);
          const S = "next" === r || !r,
            k = "prev" === r || !r;
          let E = 0,
            C = 0;
          const T = b ? Math.ceil(u.length / f.grid.rows) : u.length,
            P =
              (b ? u[l].column : l) +
              (m && "undefined" === typeof a ? -h / 2 + 0.5 : 0);
          if (P < v) {
            E = Math.max(v - P, g);
            for (let e = 0; e < v - P; e += 1) {
              const t = e - Math.floor(e / T) * T;
              if (b) {
                const e = T - t - 1;
                for (let t = u.length - 1; t >= 0; t -= 1)
                  u[t].column === e && y.push(t);
              } else y.push(T - t - 1);
            }
          } else if (P + h > T - v) {
            C = Math.max(P - (T - 2 * v), g);
            for (let e = 0; e < C; e += 1) {
              const t = e - Math.floor(e / T) * T;
              b
                ? u.forEach((e, n) => {
                    e.column === t && x.push(n);
                  })
                : x.push(t);
            }
          }
          if (
            ((s.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              s.__preventObserver__ = !1;
            }),
            k &&
              y.forEach((e) => {
                (u[e].swiperLoopMoveDOM = !0),
                  p.prepend(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            S &&
              x.forEach((e) => {
                (u[e].swiperLoopMoveDOM = !0),
                  p.append(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            s.recalcSlides(),
            "auto" === f.slidesPerView
              ? s.updateSlides()
              : b &&
                ((y.length > 0 && k) || (x.length > 0 && S)) &&
                s.slides.forEach((e, t) => {
                  s.grid.updateSlide(t, e, s.slides);
                }),
            f.watchSlidesProgress && s.updateSlidesOffset(),
            n)
          )
            if (y.length > 0 && k) {
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[w],
                  t = s.slidesGrid[w + E] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(w + Math.ceil(E), 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else if (a) {
                const e = b ? y.length / f.grid.rows : y.length;
                s.slideTo(s.activeIndex + e, 0, !1, !0),
                  (s.touchEventsData.currentTranslate = s.translate);
              }
            } else if (x.length > 0 && S)
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[w],
                  t = s.slidesGrid[w - C] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(w - C, 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else {
                const e = b ? x.length / f.grid.rows : x.length;
                s.slideTo(s.activeIndex - e, 0, !1, !0);
              }
          if (
            ((s.allowSlidePrev = c),
            (s.allowSlideNext = d),
            s.controller && s.controller.control && !i)
          ) {
            const e = {
              slideRealIndex: t,
              direction: r,
              setTranslate: a,
              activeSlideIndex: l,
              byController: !0,
            };
            Array.isArray(s.controller.control)
              ? s.controller.control.forEach((t) => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix({
                      ...e,
                      slideTo: t.params.slidesPerView === f.slidesPerView && n,
                    });
                })
              : s.controller.control instanceof s.constructor &&
                s.controller.control.params.loop &&
                s.controller.control.loopFix({
                  ...e,
                  slideTo:
                    s.controller.control.params.slidesPerView ===
                      f.slidesPerView && n,
                });
          }
          s.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const r = [];
          e.slides.forEach((e) => {
            const t =
              "undefined" === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            r[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            r.forEach((e) => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      var ve = {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (n.style.cursor = "move"),
            (n.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      };
      function be(e, t, n) {
        const r = R(),
          { params: a } = e,
          l = a.edgeSwipeDetection,
          i = a.edgeSwipeThreshold;
        return (
          !l ||
          !(n <= i || n >= r.innerWidth - i) ||
          ("prevent" === l && (t.preventDefault(), !0))
        );
      }
      function ye(e) {
        const t = this,
          n = D();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId;
        } else
          "touchstart" === r.type &&
            1 === r.targetTouches.length &&
            (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type)
          return void be(t, r, r.targetTouches[0].pageX);
        const { params: l, touches: i, enabled: o } = t;
        if (!o) return;
        if (!l.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let s = r.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(s))
          return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
          c = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && c && (s = c[0]);
        const d = l.noSwipingSelector
            ? l.noSwipingSelector
            : ".".concat(l.noSwipingClass),
          p = !(!r.target || !r.target.shadowRoot);
        if (
          l.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === D() || n === R()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(d, s)
            : s.closest(d))
        )
          return void (t.allowClick = !0);
        if (l.swipeHandler && !s.closest(l.swipeHandler)) return;
        (i.currentX = r.pageX), (i.currentY = r.pageY);
        const f = i.currentX,
          m = i.currentY;
        if (!be(t, r, f)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (i.startX = f),
          (i.startY = m),
          (a.touchStartTime = V()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          l.threshold > 0 && (a.allowThresholdMove = !1);
        let h = !0;
        s.matches(a.focusableElements) &&
          ((h = !1), "SELECT" === s.nodeName && (a.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(a.focusableElements) &&
            n.activeElement !== s &&
            n.activeElement.blur();
        const g = h && t.allowTouchMove && l.touchStartPreventDefault;
        (!l.touchStartForcePreventDefault && !g) ||
          s.isContentEditable ||
          r.preventDefault(),
          l.freeMode &&
            l.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !l.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", r);
      }
      function xe(e) {
        const t = D(),
          n = this,
          r = n.touchEventsData,
          { params: a, touches: l, rtlTranslate: i, enabled: o } = n;
        if (!o) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let s,
          u = e;
        if (
          (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type)
        ) {
          if (null !== r.touchId) return;
          if (u.pointerId !== r.pointerId) return;
        }
        if ("touchmove" === u.type) {
          if (
            ((s = [...u.changedTouches].filter(
              (e) => e.identifier === r.touchId
            )[0]),
            !s || s.identifier !== r.touchId)
          )
            return;
        } else s = u;
        if (!r.isTouched)
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", u)
          );
        const c = s.pageX,
          d = s.pageY;
        if (u.preventedByNestedSwiper)
          return (l.startX = c), void (l.startY = d);
        if (!n.allowTouchMove)
          return (
            u.target.matches(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(l, {
                startX: c,
                startY: d,
                currentX: c,
                currentY: d,
              }),
              (r.touchStartTime = V()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (n.isVertical()) {
            if (
              (d < l.startY && n.translate <= n.maxTranslate()) ||
              (d > l.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (c < l.startX && n.translate <= n.maxTranslate()) ||
            (c > l.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          u.target === t.activeElement &&
          u.target.matches(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        r.allowTouchCallbacks && n.emit("touchMove", u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = c),
          (l.currentY = d);
        const p = l.currentX - l.startX,
          f = l.currentY - l.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < n.params.threshold
        )
          return;
        if ("undefined" === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && l.currentY === l.startY) ||
          (n.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", u),
          "undefined" === typeof r.startMoving &&
            ((l.currentX === l.startX && l.currentY === l.startY) ||
              (r.startMoving = !0)),
          r.isScrolling)
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !a.cssMode && u.cancelable && u.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let m = n.isHorizontal() ? p : f,
          h = n.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        a.oneWayMovement &&
          ((m = Math.abs(m) * (i ? 1 : -1)), (h = Math.abs(h) * (i ? 1 : -1))),
          (l.diff = m),
          (m *= a.touchRatio),
          i && ((m = -m), (h = -h));
        const g = n.touchesDirection;
        (n.swipeDirection = m > 0 ? "prev" : "next"),
          (n.touchesDirection = h > 0 ? "prev" : "next");
        const v = n.params.loop && !a.cssMode,
          b =
            ("next" === n.touchesDirection && n.allowSlideNext) ||
            ("prev" === n.touchesDirection && n.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (v && b && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            g !== n.touchesDirection &&
            v &&
            b &&
            Math.abs(m) >= 1)
        )
          return (
            Object.assign(l, {
              startX: c,
              startY: d,
              currentX: c,
              currentY: d,
              startTranslate: r.currentTranslate,
            }),
            (r.loopSwapReset = !0),
            void (r.startTranslate = r.currentTranslate)
          );
        n.emit("sliderMove", u),
          (r.isMoved = !0),
          (r.currentTranslate = m + r.startTranslate);
        let y = !0,
          x = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (x = 0),
          m > 0
            ? (v &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
                    : n.minTranslate()) &&
                n.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > n.minTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + r.startTranslate + m) ** x)))
            : m < 0 &&
              (v &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? n.maxTranslate() +
                      n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ("auto" === a.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < n.maxTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - r.startTranslate - m) ** x))),
          y && (u.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(m) > a.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (l.startX = l.currentX),
              (l.startY = l.currentY),
              (r.currentTranslate = r.startTranslate),
              void (l.diff = n.isHorizontal()
                ? l.currentX - l.startX
                : l.currentY - l.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
            a.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function we(e) {
        const t = this,
          n = t.touchEventsData;
        let r,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        if ("touchend" === a.type || "touchcancel" === a.type) {
          if (
            ((r = [...a.changedTouches].filter(
              (e) => e.identifier === n.touchId
            )[0]),
            !r || r.identifier !== n.touchId)
          )
            return;
        } else {
          if (null !== n.touchId) return;
          if (a.pointerId !== n.pointerId) return;
          r = a;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(a.type)
        ) {
          if (
            !(
              ["pointercancel", "contextmenu"].includes(a.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (n.pointerId = null), (n.touchId = null);
        const {
          params: l,
          touches: i,
          rtlTranslate: o,
          slidesGrid: s,
          enabled: u,
        } = t;
        if (!u) return;
        if (!l.simulateTouch && "mouse" === a.pointerType) return;
        if (
          (n.allowTouchCallbacks && t.emit("touchEnd", a),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && l.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        l.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = V(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = a.path || (a.composedPath && a.composedPath());
          t.updateClickedSlide((e && e[0]) || a.target, e),
            t.emit("tap click", a),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", a);
        }
        if (
          ((n.lastClickTime = V()),
          B(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (0 === i.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let p;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (p = l.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        const f = p >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          h = t.slidesSizesGrid[0];
        for (
          let x = 0;
          x < s.length;
          x += x < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          const e = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          "undefined" !== typeof s[x + e]
            ? (f || (p >= s[x] && p < s[x + e])) &&
              ((m = x), (h = s[x + e] - s[x]))
            : (f || p >= s[x]) &&
              ((m = x), (h = s[s.length - 1] - s[s.length - 2]));
        }
        let g = null,
          v = null;
        l.rewind &&
          (t.isBeginning
            ? (v =
                l.virtual && l.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const b = (p - s[m]) / h,
          y = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (d > l.longSwipesMs) {
          if (!l.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (b >= l.longSwipesRatio
              ? t.slideTo(l.rewind && t.isEnd ? g : m + y)
              : t.slideTo(m)),
            "prev" === t.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? t.slideTo(m + y)
                : null !== v && b < 0 && Math.abs(b) > l.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(m));
        } else {
          if (!l.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
            ? a.target === t.navigation.nextEl
              ? t.slideTo(m + y)
              : t.slideTo(m)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + y),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
        }
      }
      function Se() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: a, snapGrid: l } = e,
          i = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = i && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !i
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = r),
          e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
      }
      function ke(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Ee() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const l = e.maxTranslate() - e.minTranslate();
        (a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
          a !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function Ce(e) {
        const t = this;
        se(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function Te() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      const Pe = (e, t) => {
        const n = D(),
          { params: r, el: a, wrapperEl: l, device: i } = e,
          o = !!r.nested,
          s = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        n[s]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
          a[s]("touchstart", e.onTouchStart, { passive: !1 }),
          a[s]("pointerdown", e.onTouchStart, { passive: !1 }),
          n[s]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
          n[s]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
          n[s]("touchend", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
          n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
          n[s]("touchcancel", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
          n[s]("contextmenu", e.onTouchEnd, { passive: !0 }),
          (r.preventClicks || r.preventClicksPropagation) &&
            a[s]("click", e.onClick, !0),
          r.cssMode && l[s]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[u](
                i.ios || i.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Se,
                !0
              )
            : e[u]("observerUpdate", Se, !0),
          a[s]("load", e.onLoad, { capture: !0 });
      };
      var Ne = {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = ye.bind(e)),
            (e.onTouchMove = xe.bind(e)),
            (e.onTouchEnd = we.bind(e)),
            (e.onDocumentTouchStart = Te.bind(e)),
            t.cssMode && (e.onScroll = Ee.bind(e)),
            (e.onClick = ke.bind(e)),
            (e.onLoad = Ce.bind(e)),
            Pe(e, "on");
        },
        detachEvents: function () {
          Pe(this, "off");
        },
      };
      const _e = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var Le = {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: n, params: r, el: a } = e,
            l = r.breakpoints;
          if (!l || (l && 0 === Object.keys(l).length)) return;
          const i = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (!i || e.currentBreakpoint === i) return;
          const o = (i in l ? l[i] : void 0) || e.originalParams,
            s = _e(e, r),
            u = _e(e, o),
            c = r.enabled;
          s && !u
            ? (a.classList.remove(
                "".concat(r.containerModifierClass, "grid"),
                "".concat(r.containerModifierClass, "grid-column")
              ),
              e.emitContainerClasses())
            : !s &&
              u &&
              (a.classList.add("".concat(r.containerModifierClass, "grid")),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === r.grid.fill)) &&
                a.classList.add(
                  "".concat(r.containerModifierClass, "grid-column")
                ),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if ("undefined" === typeof o[t]) return;
              const n = r[t] && r[t].enabled,
                a = o[t] && o[t].enabled;
              n && !a && e[t].disable(), !n && a && e[t].enable();
            });
          const d = o.direction && o.direction !== r.direction,
            p = r.loop && (o.slidesPerView !== r.slidesPerView || d),
            f = r.loop;
          d && n && e.changeDirection(), G(e.params, o);
          const m = e.params.enabled,
            h = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !m ? e.disable() : !c && m && e.enable(),
            (e.currentBreakpoint = i),
            e.emit("_beforeBreakpoint", o),
            n &&
              (p
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !f && h
                ? (e.loopCreate(t), e.updateSlides())
                : f && !h && e.loopDestroy()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let r = !1;
          const a = R(),
            l = "window" === t ? a.innerHeight : n.clientHeight,
            i = Object.keys(e).map((e) => {
              if ("string" === typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              }
              return { value: e, point: e };
            });
          i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let o = 0; o < i.length; o += 1) {
            const { point: e, value: l } = i[o];
            "window" === t
              ? a.matchMedia("(min-width: ".concat(l, "px)")).matches && (r = e)
              : l <= n.clientWidth && (r = e);
          }
          return r || "max";
        },
      };
      var je = {
        addClasses: function () {
          const e = this,
            { classNames: t, params: n, rtl: r, el: a, device: l } = e,
            i = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" === typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...i), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      };
      var Me = {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        ze = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          swiperElementNodeName: "SWIPER-CONTAINER",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          eventsPrefix: "swiper",
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopAddBlankSlides: !0,
          loopAdditionalSlides: 0,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-blank",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideFullyVisibleClass: "swiper-slide-fully-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function Ie(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "navigation" === r &&
                e[r] &&
                e[r].enabled &&
                !e[r].prevEl &&
                !e[r].nextEl &&
                (e[r].auto = !0),
              ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                e[r] &&
                e[r].enabled &&
                !e[r].el &&
                (e[r].auto = !0),
              r in e && "enabled" in a
                ? ("object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  G(t, n))
                : G(t, n))
            : G(t, n);
        };
      }
      const Oe = {
          eventsEmitter: oe,
          update: de,
          translate: pe,
          transition: me,
          slide: he,
          loop: ge,
          grabCursor: ve,
          events: Ne,
          breakpoints: Le,
          checkOverflow: Me,
          classes: je,
        },
        Fe = {};
      class De {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = G({}, t)),
            e && !t.el && (t.el = e);
          const l = D();
          if (
            t.el &&
            "string" === typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              l.querySelectorAll(t.el).forEach((n) => {
                const r = G({}, t, { el: n });
                e.push(new De(r));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = ae()),
            (i.device = le({ userAgent: t.userAgent })),
            (i.browser = ie()),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              i.modules.push(...t.modules);
          const o = {};
          i.modules.forEach((e) => {
            e({
              params: t,
              swiper: i,
              extendParams: Ie(t, o),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const s = G({}, ze, o);
          return (
            (i.params = G({}, s, Fe, t)),
            (i.originalParams = G({}, i.params)),
            (i.passedParams = G({}, t)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: n } = this,
            r = K(q(t, ".".concat(n.slideClass, ", swiper-slide"))[0]);
          return K(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = q(e, ".".concat(t.slideClass, ", swiper-slide"));
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            a = (n.maxTranslate() - r) * e + r;
          n.translateTo(a, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: a,
            slidesSizesGrid: l,
            size: i,
            activeIndex: o,
          } = this;
          let s = 1;
          if ("number" === typeof n.slidesPerView) return n.slidesPerView;
          if (n.centeredSlides) {
            let e,
              t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let n = o + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += Math.ceil(r[n].swiperSlideSize)),
                (s += 1),
                t > i && (e = !0));
            for (let n = o - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (s += 1), t > i && (e = !0));
          } else if ("current" === e)
            for (let u = o + 1; u < r.length; u += 1) {
              (t ? a[u] + l[u] - a[o] < i : a[u] - a[o] < i) && (s += 1);
            }
          else
            for (let u = o - 1; u >= 0; u -= 1) {
              a[o] - a[u] < i && (s += 1);
            }
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && se(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            r(), n.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
              e.isEnd &&
              !n.centeredSlides
            ) {
              const t =
                e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r();
          }
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.el.classList.remove(
                "".concat(n.params.containerModifierClass).concat(r)
              ),
              n.el.classList.add(
                "".concat(n.params.containerModifierClass).concat(e)
              ),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (("string" === typeof n && (n = document.querySelector(n)), !n))
            return !1;
          (n.swiper = t),
            n.parentNode &&
              n.parentNode.host &&
              n.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const r = () =>
            ".".concat(
              (t.params.wrapperClass || "").trim().split(" ").join(".")
            );
          let a = (() => {
            if (n && n.shadowRoot && n.shadowRoot.querySelector) {
              return n.shadowRoot.querySelector(r());
            }
            return q(n, r())[0];
          })();
          return (
            !a &&
              t.params.createElements &&
              ((a = Y("div", t.params.wrapperClass)),
              n.append(a),
              q(n, ".".concat(t.params.slideClass)).forEach((e) => {
                a.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: a,
              slidesEl:
                t.isElement && !n.parentNode.host.slideSlots
                  ? n.parentNode.host
                  : a,
              hostEl: t.isElement ? n.parentNode.host : n,
              mounted: !0,
              rtl: "rtl" === n.dir.toLowerCase() || "rtl" === X(n, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === X(n, "direction")),
              wrongRTL: "-webkit-box" === X(a, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const n = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            n.forEach((e) => {
              e.complete
                ? se(t, e)
                : e.addEventListener("load", (e) => {
                    se(t, e.target);
                  });
            }),
            ce(t),
            (t.initialized = !0),
            ce(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, el: a, wrapperEl: l, slides: i } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                a.removeAttribute("style"),
                l.removeAttribute("style"),
                i &&
                  i.length &&
                  i.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (n) {}
                    try {
                      delete t[e];
                    } catch (n) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          G(Fe, e);
        }
        static get extendedDefaults() {
          return Fe;
        }
        static get defaults() {
          return ze;
        }
        static installModule(e) {
          De.prototype.__modules__ || (De.prototype.__modules__ = []);
          const t = De.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => De.installModule(e)), De)
            : (De.installModule(e), De);
        }
      }
      Object.keys(Oe).forEach((e) => {
        Object.keys(Oe[e]).forEach((t) => {
          De.prototype[t] = Oe[e][t];
        });
      }),
        De.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const a = R();
            let l = null,
              i = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((l = new ResizeObserver((e) => {
                    i = a.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let a = n,
                        l = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: i,
                        } = e;
                        (i && i !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (l = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && l === r) || o();
                    });
                  })),
                  l.observe(t.el))
                : (a.addEventListener("resize", o),
                  a.addEventListener("orientationchange", s));
            }),
              n("destroy", () => {
                i && a.cancelAnimationFrame(i),
                  l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
                  a.removeEventListener("resize", o),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: a } = e;
            const l = [],
              i = R(),
              o = function (e, n) {
                void 0 === n && (n = {});
                const r = new (i.MutationObserver || i.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const n = function () {
                      a("observerUpdate", e[0]);
                    };
                    i.requestAnimationFrame
                      ? i.requestAnimationFrame(n)
                      : i.setTimeout(n, 0);
                  }
                );
                r.observe(e, {
                  attributes:
                    "undefined" === typeof n.attributes || n.attributes,
                  childList: "undefined" === typeof n.childList || n.childList,
                  characterData:
                    "undefined" === typeof n.characterData || n.characterData,
                }),
                  l.push(r);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = Z(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                l.forEach((e) => {
                  e.disconnect();
                }),
                  l.splice(0, l.length);
              });
          },
        ]);
      const Ae = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function Re(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function Be(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : Re(t[n]) && Re(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Be(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Ve(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function He(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function Ue(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function Ge(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      function We(e) {
        return (
          void 0 === e && (e = ""),
          e
            ? e.includes("swiper-wrapper")
              ? e
              : "swiper-wrapper ".concat(e)
            : "swiper-wrapper"
        );
      }
      function $e() {
        return (
          ($e = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $e.apply(this, arguments)
        );
      }
      function qe(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function Qe(t) {
        const n = [];
        return (
          e.Children.toArray(t).forEach((e) => {
            qe(e)
              ? n.push(e)
              : e.props &&
                e.props.children &&
                Qe(e.props.children).forEach((e) => n.push(e));
          }),
          n
        );
      }
      function Ye(t) {
        const n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          e.Children.toArray(t).forEach((e) => {
            if (qe(e)) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const t = Qe(e.props.children);
              t.length > 0
                ? t.forEach((e) => n.push(e))
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Xe(t, n) {
        return "undefined" === typeof window
          ? (0, e.useEffect)(t, n)
          : (0, e.useLayoutEffect)(t, n);
      }
      const Ke = (0, e.createContext)(null),
        Ze = (0, e.createContext)(null),
        Je = (0, e.forwardRef)(function (t, n) {
          let {
              className: r,
              tag: a = "div",
              wrapperTag: l = "div",
              children: i,
              onSwiper: o,
              ...s
            } = void 0 === t ? {} : t,
            u = !1;
          const [c, d] = (0, e.useState)("swiper"),
            [p, f] = (0, e.useState)(null),
            [m, h] = (0, e.useState)(!1),
            g = (0, e.useRef)(!1),
            v = (0, e.useRef)(null),
            b = (0, e.useRef)(null),
            y = (0, e.useRef)(null),
            x = (0, e.useRef)(null),
            w = (0, e.useRef)(null),
            S = (0, e.useRef)(null),
            k = (0, e.useRef)(null),
            E = (0, e.useRef)(null),
            {
              params: C,
              passedParams: T,
              rest: P,
              events: N,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const n = { on: {} },
                r = {},
                a = {};
              Be(n, ze), (n._emitClasses = !0), (n.init = !1);
              const l = {},
                i = Ae.map((e) => e.replace(/_/, "")),
                o = Object.assign({}, e);
              return (
                Object.keys(o).forEach((o) => {
                  "undefined" !== typeof e[o] &&
                    (i.indexOf(o) >= 0
                      ? Re(e[o])
                        ? ((n[o] = {}),
                          (a[o] = {}),
                          Be(n[o], e[o]),
                          Be(a[o], e[o]))
                        : ((n[o] = e[o]), (a[o] = e[o]))
                      : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                      ? t
                        ? (r[
                            "".concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                        : (n.on[
                            "".concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                      : (l[o] = e[o]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
                }),
                { params: n, passedParams: a, rest: l, events: r }
              );
            })(s),
            { slides: _, slots: L } = Ye(i),
            j = () => {
              h(!m);
            };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              d(t);
            },
          });
          const M = () => {
            Object.assign(C.on, N), (u = !0);
            const e = { ...C };
            if (
              (delete e.wrapperClass,
              (b.current = new De(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = _;
              const e = {
                cache: !1,
                slides: _,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              Be(b.current.params.virtual, e),
                Be(b.current.originalParams.virtual, e);
            }
          };
          v.current || M(), b.current && b.current.on("_beforeBreakpoint", j);
          return (
            (0, e.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", j);
            }),
            (0, e.useEffect)(() => {
              !g.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (g.current = !0));
            }),
            Xe(() => {
              if ((n && (n.current = v.current), v.current))
                return (
                  b.current.destroyed && M(),
                  (function (e, t) {
                    let {
                      el: n,
                      nextEl: r,
                      prevEl: a,
                      paginationEl: l,
                      scrollbarEl: i,
                      swiper: o,
                    } = e;
                    Ve(t) &&
                      r &&
                      a &&
                      ((o.params.navigation.nextEl = r),
                      (o.originalParams.navigation.nextEl = r),
                      (o.params.navigation.prevEl = a),
                      (o.originalParams.navigation.prevEl = a)),
                      He(t) &&
                        l &&
                        ((o.params.pagination.el = l),
                        (o.originalParams.pagination.el = l)),
                      Ue(t) &&
                        i &&
                        ((o.params.scrollbar.el = i),
                        (o.originalParams.scrollbar.el = i)),
                      o.init(n);
                  })(
                    {
                      el: v.current,
                      nextEl: w.current,
                      prevEl: S.current,
                      paginationEl: k.current,
                      scrollbarEl: E.current,
                      swiper: b.current,
                    },
                    C
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            Xe(() => {
              !u &&
                N &&
                b.current &&
                Object.keys(N).forEach((e) => {
                  b.current.on(e, N[e]);
                });
              const e = (function (e, t, n, r, a) {
                const l = [];
                if (!t) return l;
                const i = (e) => {
                  l.indexOf(e) < 0 && l.push(e);
                };
                if (n && r) {
                  const e = r.map(a),
                    t = n.map(a);
                  e.join("") !== t.join("") && i("children"),
                    r.length !== n.length && i("children");
                }
                return (
                  Ae.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((n) => {
                      if (n in e && n in t)
                        if (Re(e[n]) && Re(t[n])) {
                          const r = Object.keys(e[n]),
                            a = Object.keys(t[n]);
                          r.length !== a.length
                            ? i(n)
                            : (r.forEach((r) => {
                                e[n][r] !== t[n][r] && i(n);
                              }),
                              a.forEach((r) => {
                                e[n][r] !== t[n][r] && i(n);
                              }));
                        } else e[n] !== t[n] && i(n);
                    }),
                  l
                );
              })(T, y.current, _, x.current, (e) => e.key);
              return (
                (y.current = T),
                (x.current = _),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: n,
                      passedParams: r,
                      changedParams: a,
                      nextEl: l,
                      prevEl: i,
                      scrollbarEl: o,
                      paginationEl: s,
                    } = e;
                    const u = a.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: c,
                        pagination: d,
                        navigation: p,
                        scrollbar: f,
                        virtual: m,
                        thumbs: h,
                      } = t;
                    let g, v, b, y, x, w, S, k;
                    a.includes("thumbs") &&
                      r.thumbs &&
                      r.thumbs.swiper &&
                      c.thumbs &&
                      !c.thumbs.swiper &&
                      (g = !0),
                      a.includes("controller") &&
                        r.controller &&
                        r.controller.control &&
                        c.controller &&
                        !c.controller.control &&
                        (v = !0),
                      a.includes("pagination") &&
                        r.pagination &&
                        (r.pagination.el || s) &&
                        (c.pagination || !1 === c.pagination) &&
                        d &&
                        !d.el &&
                        (b = !0),
                      a.includes("scrollbar") &&
                        r.scrollbar &&
                        (r.scrollbar.el || o) &&
                        (c.scrollbar || !1 === c.scrollbar) &&
                        f &&
                        !f.el &&
                        (y = !0),
                      a.includes("navigation") &&
                        r.navigation &&
                        (r.navigation.prevEl || i) &&
                        (r.navigation.nextEl || l) &&
                        (c.navigation || !1 === c.navigation) &&
                        p &&
                        !p.prevEl &&
                        !p.nextEl &&
                        (x = !0);
                    const E = (e) => {
                      t[e] &&
                        (t[e].destroy(),
                        "navigation" === e
                          ? (t.isElement &&
                              (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (c[e].prevEl = void 0),
                            (c[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (c[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    a.includes("loop") &&
                      t.isElement &&
                      (c.loop && !r.loop
                        ? (w = !0)
                        : !c.loop && r.loop
                        ? (S = !0)
                        : (k = !0)),
                      u.forEach((e) => {
                        if (Re(c[e]) && Re(r[e]))
                          Object.assign(c[e], r[e]),
                            ("navigation" !== e &&
                              "pagination" !== e &&
                              "scrollbar" !== e) ||
                              !("enabled" in r[e]) ||
                              r[e].enabled ||
                              E(e);
                        else {
                          const t = r[e];
                          (!0 !== t && !1 !== t) ||
                          ("navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e)
                            ? (c[e] = r[e])
                            : !1 === t && E(e);
                        }
                      }),
                      u.includes("controller") &&
                        !v &&
                        t.controller &&
                        t.controller.control &&
                        c.controller &&
                        c.controller.control &&
                        (t.controller.control = c.controller.control),
                      a.includes("children") && n && m && c.virtual.enabled
                        ? ((m.slides = n), m.update(!0))
                        : a.includes("virtual") &&
                          m &&
                          c.virtual.enabled &&
                          (n && (m.slides = n), m.update(!0)),
                      a.includes("children") && n && c.loop && (k = !0),
                      g && h.init() && h.update(!0);
                    v && (t.controller.control = c.controller.control),
                      b &&
                        (!t.isElement ||
                          (s && "string" !== typeof s) ||
                          ((s = document.createElement("div")),
                          s.classList.add("swiper-pagination"),
                          s.part.add("pagination"),
                          t.el.appendChild(s)),
                        s && (c.pagination.el = s),
                        d.init(),
                        d.render(),
                        d.update()),
                      y &&
                        (!t.isElement ||
                          (o && "string" !== typeof o) ||
                          ((o = document.createElement("div")),
                          o.classList.add("swiper-scrollbar"),
                          o.part.add("scrollbar"),
                          t.el.appendChild(o)),
                        o && (c.scrollbar.el = o),
                        f.init(),
                        f.updateSize(),
                        f.setTranslate()),
                      x &&
                        (t.isElement &&
                          ((l && "string" !== typeof l) ||
                            ((l = document.createElement("div")),
                            l.classList.add("swiper-button-next"),
                            (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            l.part.add("button-next"),
                            t.el.appendChild(l)),
                          (i && "string" !== typeof i) ||
                            ((i = document.createElement("div")),
                            i.classList.add("swiper-button-prev"),
                            (i.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            i.part.add("button-prev"),
                            t.el.appendChild(i))),
                        l && (c.navigation.nextEl = l),
                        i && (c.navigation.prevEl = i),
                        p.init(),
                        p.update()),
                      a.includes("allowSlideNext") &&
                        (t.allowSlideNext = r.allowSlideNext),
                      a.includes("allowSlidePrev") &&
                        (t.allowSlidePrev = r.allowSlidePrev),
                      a.includes("direction") &&
                        t.changeDirection(r.direction, !1),
                      (w || k) && t.loopDestroy(),
                      (S || k) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: b.current,
                    slides: _,
                    passedParams: T,
                    changedParams: e,
                    nextEl: w.current,
                    prevEl: S.current,
                    scrollbarEl: E.current,
                    paginationEl: k.current,
                  }),
                () => {
                  N &&
                    b.current &&
                    Object.keys(N).forEach((e) => {
                      b.current.off(e, N[e]);
                    });
                }
              );
            }),
            Xe(() => {
              ((e) => {
                !e ||
                  e.destroyed ||
                  !e.params.virtual ||
                  (e.params.virtual && !e.params.virtual.enabled) ||
                  (e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.parallax &&
                    e.params.parallax &&
                    e.params.parallax.enabled &&
                    e.parallax.setTranslate());
              })(b.current);
            }, [p]),
            e.createElement(
              a,
              $e(
                {
                  ref: v,
                  className: Ge("".concat(c).concat(r ? " ".concat(r) : "")),
                },
                P
              ),
              e.createElement(
                Ze.Provider,
                { value: b.current },
                L["container-start"],
                e.createElement(
                  l,
                  { className: We(C.wrapperClass) },
                  L["wrapper-start"],
                  C.virtual
                    ? (function (t, n, r) {
                        if (!r) return null;
                        const a = (e) => {
                            let t = e;
                            return (
                              e < 0
                                ? (t = n.length + e)
                                : t >= n.length && (t -= n.length),
                              t
                            );
                          },
                          l = t.isHorizontal()
                            ? {
                                [t.rtlTranslate ? "right" : "left"]: "".concat(
                                  r.offset,
                                  "px"
                                ),
                              }
                            : { top: "".concat(r.offset, "px") },
                          { from: i, to: o } = r,
                          s = t.params.loop ? -n.length : 0,
                          u = t.params.loop ? 2 * n.length : n.length,
                          c = [];
                        for (let e = s; e < u; e += 1)
                          e >= i && e <= o && c.push(n[a(e)]);
                        return c.map((n, r) =>
                          e.cloneElement(n, {
                            swiper: t,
                            style: l,
                            key:
                              n.props.virtualIndex ||
                              n.key ||
                              "slide-".concat(r),
                          })
                        );
                      })(b.current, _, p)
                    : _.map((t, n) =>
                        e.cloneElement(t, {
                          swiper: b.current,
                          swiperSlideIndex: n,
                        })
                      ),
                  L["wrapper-end"]
                ),
                Ve(C) &&
                  e.createElement(
                    e.Fragment,
                    null,
                    e.createElement("div", {
                      ref: S,
                      className: "swiper-button-prev",
                    }),
                    e.createElement("div", {
                      ref: w,
                      className: "swiper-button-next",
                    })
                  ),
                Ue(C) &&
                  e.createElement("div", {
                    ref: E,
                    className: "swiper-scrollbar",
                  }),
                He(C) &&
                  e.createElement("div", {
                    ref: k,
                    className: "swiper-pagination",
                  }),
                L["container-end"]
              )
            )
          );
        });
      Je.displayName = "Swiper";
      const et = (0, e.forwardRef)(function (t, n) {
        let {
          tag: r = "div",
          children: a,
          className: l = "",
          swiper: i,
          zoom: o,
          lazy: s,
          virtualIndex: u,
          swiperSlideIndex: c,
          ...d
        } = void 0 === t ? {} : t;
        const p = (0, e.useRef)(null),
          [f, m] = (0, e.useState)("swiper-slide"),
          [h, g] = (0, e.useState)(!1);
        function v(e, t, n) {
          t === p.current && m(n);
        }
        Xe(() => {
          if (
            ("undefined" !== typeof c && (p.current.swiperSlideIndex = c),
            n && (n.current = p.current),
            p.current && i)
          ) {
            if (!i.destroyed)
              return (
                i.on("_slideClass", v),
                () => {
                  i && i.off("_slideClass", v);
                }
              );
            "swiper-slide" !== f && m("swiper-slide");
          }
        }),
          Xe(() => {
            i && p.current && !i.destroyed && m(i.getSlideClasses(p.current));
          }, [i]);
        const b = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0,
          },
          y = () => ("function" === typeof a ? a(b) : a);
        return e.createElement(
          r,
          $e(
            {
              ref: p,
              className: Ge("".concat(f).concat(l ? " ".concat(l) : "")),
              "data-swiper-slide-index": u,
              onLoad: () => {
                g(!0);
              },
            },
            d
          ),
          o &&
            e.createElement(
              Ke.Provider,
              { value: b },
              e.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof o ? o : void 0,
                },
                y(),
                s &&
                  !h &&
                  e.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !o &&
            e.createElement(
              Ke.Provider,
              { value: b },
              y(),
              s &&
                !h &&
                e.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      function tt(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!+\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function nt(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const l = "swiper-pagination";
        let i;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "".concat(l, "-bullet"),
            bulletActiveClass: "".concat(l, "-bullet-active"),
            modifierClass: "".concat(l, "-"),
            currentClass: "".concat(l, "-current"),
            totalClass: "".concat(l, "-total"),
            hiddenClass: "".concat(l, "-hidden"),
            progressbarFillClass: "".concat(l, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(l, "-progressbar-opposite"),
            clickableClass: "".concat(l, "-clickable"),
            lockClass: "".concat(l, "-lock"),
            horizontalClass: "".concat(l, "-horizontal"),
            verticalClass: "".concat(l, "-vertical"),
            paginationDisabledClass: "".concat(l, "-disabled"),
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        function s() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e &&
            (e =
              e[
                "".concat("prev" === n ? "previous" : "next", "ElementSibling")
              ]) &&
            (e.classList.add("".concat(r, "-").concat(n)),
            (e =
              e[
                "".concat("prev" === n ? "previous" : "next", "ElementSibling")
              ]) &&
              e.classList.add("".concat(r, "-").concat(n, "-").concat(n)));
        }
        function c(e) {
          const n = e.target.closest(tt(t.params.pagination.bulletClass));
          if (!n) return;
          e.preventDefault();
          const r = K(n) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            t.slideToLoop(r);
          } else t.slideTo(r);
        }
        function d() {
          const e = t.rtl,
            n = t.params.pagination;
          if (s()) return;
          let r,
            l,
            c = t.pagination.el;
          c = ee(c);
          const d =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            p = t.params.loop
              ? Math.ceil(d / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((l = t.previousRealIndex || 0),
                (r =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : "undefined" !== typeof t.snapIndex
              ? ((r = t.snapIndex), (l = t.previousSnapIndex))
              : ((l = t.previousIndex || 0), (r = t.activeIndex || 0)),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let s, d, p;
            if (
              (n.dynamicBullets &&
                ((i = J(a[0], t.isHorizontal() ? "width" : "height", !0)),
                c.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] = "".concat(
                    i * (n.dynamicMainBullets + 4),
                    "px"
                  );
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== l &&
                  ((o += r - (l || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (s = Math.max(r - o, 0)),
                (d = s + (Math.min(a.length, n.dynamicMainBullets) - 1)),
                (p = (d + s) / 2)),
              a.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => "".concat(n.bulletActiveClass).concat(e)),
                ]
                  .map((e) =>
                    "string" === typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
            )
              a.forEach((e) => {
                const a = K(e);
                a === r
                  ? e.classList.add(...n.bulletActiveClass.split(" "))
                  : t.isElement && e.setAttribute("part", "bullet"),
                  n.dynamicBullets &&
                    (a >= s &&
                      a <= d &&
                      e.classList.add(
                        ..."".concat(n.bulletActiveClass, "-main").split(" ")
                      ),
                    a === s && u(e, "prev"),
                    a === d && u(e, "next"));
              });
            else {
              const e = a[r];
              if (
                (e && e.classList.add(...n.bulletActiveClass.split(" ")),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute(
                      "part",
                      t === r ? "bullet-active" : "bullet"
                    );
                  }),
                n.dynamicBullets)
              ) {
                const e = a[s],
                  t = a[d];
                for (let r = s; r <= d; r += 1)
                  a[r] &&
                    a[r].classList.add(
                      ..."".concat(n.bulletActiveClass, "-main").split(" ")
                    );
                u(e, "prev"), u(t, "next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(a.length, n.dynamicMainBullets + 4),
                l = (i * r - i) / 2 - p * i,
                o = e ? "right" : "left";
              a.forEach((e) => {
                e.style[t.isHorizontal() ? o : "top"] = "".concat(l, "px");
              });
            }
          }
          c.forEach((e, l) => {
            if (
              ("fraction" === n.type &&
                (e.querySelectorAll(tt(n.currentClass)).forEach((e) => {
                  e.textContent = n.formatFractionCurrent(r + 1);
                }),
                e.querySelectorAll(tt(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(p);
                })),
              "progressbar" === n.type)
            ) {
              let a;
              a = n.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const l = (r + 1) / p;
              let i = 1,
                o = 1;
              "horizontal" === a ? (i = l) : (o = l),
                e.querySelectorAll(tt(n.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = "translate3d(0,0,0) scaleX("
                    .concat(i, ") scaleY(")
                    .concat(o, ")")),
                    (e.style.transitionDuration = "".concat(
                      t.params.speed,
                      "ms"
                    ));
                });
            }
            "custom" === n.type && n.renderCustom
              ? ((e.innerHTML = n.renderCustom(t, r + 1, p)),
                0 === l && a("paginationRender", e))
              : (0 === l && a("paginationRender", e), a("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](n.lockClass);
          });
        }
        function p() {
          const e = t.params.pagination;
          if (s()) return;
          const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
          let r = t.pagination.el;
          r = ee(r);
          let l = "";
          if ("bullets" === e.type) {
            let r = t.params.loop
              ? Math.ceil(n / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (l += e.renderBullet.call(t, n, e.bulletClass))
                : (l += "<"
                    .concat(e.bulletElement, " ")
                    .concat(t.isElement ? 'part="bullet"' : "", ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
          }
          "fraction" === e.type &&
            (l = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
            "progressbar" === e.type &&
              (l = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (t.pagination.bullets = []),
            r.forEach((n) => {
              "custom" !== e.type && (n.innerHTML = l || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(
                    ...n.querySelectorAll(tt(e.bulletClass))
                  );
            }),
            "custom" !== e.type && a("paginationRender", r[0]);
        }
        function f() {
          t.params.pagination = (function (e, t, n, r) {
            return (
              e.params.createElements &&
                Object.keys(r).forEach((a) => {
                  if (!n[a] && !0 === n.auto) {
                    let l = q(e.el, ".".concat(r[a]))[0];
                    l ||
                      ((l = Y("div", r[a])),
                      (l.className = r[a]),
                      e.el.append(l)),
                      (n[a] = l),
                      (t[a] = l);
                  }
                }),
              n
            );
          })(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination",
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let n;
          "string" === typeof e.el &&
            t.isElement &&
            (n = t.el.querySelector(e.el)),
            n ||
              "string" !== typeof e.el ||
              (n = [...document.querySelectorAll(e.el)]),
            n || (n = e.el),
            n &&
              0 !== n.length &&
              (t.params.uniqueNavElements &&
                "string" === typeof e.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...t.el.querySelectorAll(e.el)]),
                n.length > 1 &&
                  (n = n.filter((e) => Z(e, ".swiper")[0] === t.el)[0])),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(t.pagination, { el: n }),
              (n = ee(n)),
              n.forEach((n) => {
                "bullets" === e.type &&
                  e.clickable &&
                  n.classList.add(...(e.clickableClass || "").split(" ")),
                  n.classList.add(e.modifierClass + e.type),
                  n.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass
                  ),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (n.classList.add(
                      "".concat(e.modifierClass).concat(e.type, "-dynamic")
                    ),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    n.classList.add(e.progressbarOppositeClass),
                  e.clickable && n.addEventListener("click", c),
                  t.enabled || n.classList.add(e.lockClass);
              }));
        }
        function m() {
          const e = t.params.pagination;
          if (s()) return;
          let n = t.pagination.el;
          n &&
            ((n = ee(n)),
            n.forEach((n) => {
              n.classList.remove(e.hiddenClass),
                n.classList.remove(e.modifierClass + e.type),
                n.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (n.classList.remove(...(e.clickableClass || "").split(" ")),
                  n.removeEventListener("click", c));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        r("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: n } = t.pagination;
          (n = ee(n)),
            n.forEach((n) => {
              n.classList.remove(e.horizontalClass, e.verticalClass),
                n.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
          r("init", () => {
            !1 === t.params.pagination.enabled ? h() : (f(), p(), d());
          }),
          r("activeIndexChange", () => {
            "undefined" === typeof t.snapIndex && d();
          }),
          r("snapIndexChange", () => {
            d();
          }),
          r("snapGridLengthChange", () => {
            p(), d();
          }),
          r("destroy", () => {
            m();
          }),
          r("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              ((e = ee(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
          }),
          r("lock unlock", () => {
            d();
          }),
          r("click", (e, n) => {
            const r = n.target,
              l = ee(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              l &&
              l.length > 0 &&
              !r.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = l[0].classList.contains(
                t.params.pagination.hiddenClass
              );
              a(!0 === e ? "paginationShow" : "paginationHide"),
                l.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass)
                );
            }
          });
        const h = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = ee(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
            m();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = ee(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
              f(),
              p(),
              d();
          },
          disable: h,
          render: p,
          update: d,
          init: f,
          destroy: m,
        });
      }
      function rt(e) {
        let t,
          n,
          { swiper: r, extendParams: a, on: l, emit: i, params: o } = e;
        (r.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          a({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let s,
          u,
          c,
          d,
          p,
          f,
          m,
          h,
          g = o && o.autoplay ? o.autoplay.delay : 3e3,
          v = o && o.autoplay ? o.autoplay.delay : 3e3,
          b = new Date().getTime();
        function y(e) {
          r &&
            !r.destroyed &&
            r.wrapperEl &&
            e.target === r.wrapperEl &&
            (r.wrapperEl.removeEventListener("transitionend", y), h || C());
        }
        const x = () => {
            if (r.destroyed || !r.autoplay.running) return;
            r.autoplay.paused ? (u = !0) : u && ((v = s), (u = !1));
            const e = r.autoplay.paused ? s : b + v - new Date().getTime();
            (r.autoplay.timeLeft = e),
              i("autoplayTimeLeft", e, e / g),
              (n = requestAnimationFrame(() => {
                x();
              }));
          },
          w = (e) => {
            if (r.destroyed || !r.autoplay.running) return;
            cancelAnimationFrame(n), x();
            let a = "undefined" === typeof e ? r.params.autoplay.delay : e;
            (g = r.params.autoplay.delay), (v = r.params.autoplay.delay);
            const l = (() => {
              let e;
              if (
                ((e =
                  r.virtual && r.params.virtual.enabled
                    ? r.slides.filter((e) =>
                        e.classList.contains("swiper-slide-active")
                      )[0]
                    : r.slides[r.activeIndex]),
                !e)
              )
                return;
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(l) &&
              l > 0 &&
              "undefined" === typeof e &&
              ((a = l), (g = l), (v = l)),
              (s = a);
            const o = r.params.speed,
              u = () => {
                r &&
                  !r.destroyed &&
                  (r.params.autoplay.reverseDirection
                    ? !r.isBeginning || r.params.loop || r.params.rewind
                      ? (r.slidePrev(o, !0, !0), i("autoplay"))
                      : r.params.autoplay.stopOnLastSlide ||
                        (r.slideTo(r.slides.length - 1, o, !0, !0),
                        i("autoplay"))
                    : !r.isEnd || r.params.loop || r.params.rewind
                    ? (r.slideNext(o, !0, !0), i("autoplay"))
                    : r.params.autoplay.stopOnLastSlide ||
                      (r.slideTo(0, o, !0, !0), i("autoplay")),
                  r.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      w();
                    })));
              };
            return (
              a > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    u();
                  }, a)))
                : requestAnimationFrame(() => {
                    u();
                  }),
              a
            );
          },
          S = () => {
            (b = new Date().getTime()),
              (r.autoplay.running = !0),
              w(),
              i("autoplayStart");
          },
          k = () => {
            (r.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(n),
              i("autoplayStop");
          },
          E = (e, n) => {
            if (r.destroyed || !r.autoplay.running) return;
            clearTimeout(t), e || (m = !0);
            const a = () => {
              i("autoplayPause"),
                r.params.autoplay.waitForTransition
                  ? r.wrapperEl.addEventListener("transitionend", y)
                  : C();
            };
            if (((r.autoplay.paused = !0), n))
              return f && (s = r.params.autoplay.delay), (f = !1), void a();
            const l = s || r.params.autoplay.delay;
            (s = l - (new Date().getTime() - b)),
              (r.isEnd && s < 0 && !r.params.loop) || (s < 0 && (s = 0), a());
          },
          C = () => {
            (r.isEnd && s < 0 && !r.params.loop) ||
              r.destroyed ||
              !r.autoplay.running ||
              ((b = new Date().getTime()),
              m ? ((m = !1), w(s)) : w(),
              (r.autoplay.paused = !1),
              i("autoplayResume"));
          },
          T = () => {
            if (r.destroyed || !r.autoplay.running) return;
            const e = D();
            "hidden" === e.visibilityState && ((m = !0), E(!0)),
              "visible" === e.visibilityState && C();
          },
          P = (e) => {
            "mouse" === e.pointerType &&
              ((m = !0), (h = !0), r.animating || r.autoplay.paused || E(!0));
          },
          N = (e) => {
            "mouse" === e.pointerType && ((h = !1), r.autoplay.paused && C());
          };
        l("init", () => {
          r.params.autoplay.enabled &&
            (r.params.autoplay.pauseOnMouseEnter &&
              (r.el.addEventListener("pointerenter", P),
              r.el.addEventListener("pointerleave", N)),
            D().addEventListener("visibilitychange", T),
            S());
        }),
          l("destroy", () => {
            r.el.removeEventListener("pointerenter", P),
              r.el.removeEventListener("pointerleave", N),
              D().removeEventListener("visibilitychange", T),
              r.autoplay.running && k();
          }),
          l("_freeModeStaticRelease", () => {
            (d || m) && C();
          }),
          l("_freeModeNoMomentumRelease", () => {
            r.params.autoplay.disableOnInteraction ? k() : E(!0, !0);
          }),
          l("beforeTransitionStart", (e, t, n) => {
            !r.destroyed &&
              r.autoplay.running &&
              (n || !r.params.autoplay.disableOnInteraction ? E(!0, !0) : k());
          }),
          l("sliderFirstMove", () => {
            !r.destroyed &&
              r.autoplay.running &&
              (r.params.autoplay.disableOnInteraction
                ? k()
                : ((c = !0),
                  (d = !1),
                  (m = !1),
                  (p = setTimeout(() => {
                    (m = !0), (d = !0), E(!0);
                  }, 200))));
          }),
          l("touchEnd", () => {
            if (!r.destroyed && r.autoplay.running && c) {
              if (
                (clearTimeout(p),
                clearTimeout(t),
                r.params.autoplay.disableOnInteraction)
              )
                return (d = !1), void (c = !1);
              d && r.params.cssMode && C(), (d = !1), (c = !1);
            }
          }),
          l("slideChange", () => {
            !r.destroyed && r.autoplay.running && (f = !0);
          }),
          Object.assign(r.autoplay, { start: S, stop: k, pause: E, resume: C });
      }
      et.displayName = "SwiperSlide";
      const at = () => {
          const t = e.useRef(null);
          return (0, v.jsx)("div", {
            className: "bg-[#fffcf6]",
            children: (0, v.jsx)("div", {
              className:
                "max-w-[1440px] mx-auto mt-12 md:mt-[60px] lg:mt-20 xl:mt-[100px]",
              children: (0, v.jsxs)("div", {
                className:
                  "max-w-[1164px] mx-auto px-4 md:px-3 py-6 sm:py-10 md:py-12 lg:py-[55px]",
                children: [
                  (0, v.jsx)("h2", {
                    className:
                      "font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center !leading-[121%] mb-4",
                    children: "What Our Client Say",
                  }),
                  (0, v.jsx)("p", {
                    className:
                      "font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[570px] text-center text-primaryblack leading-[150%] mb-4 sm:mb-6 md:mb-8 lg:mb-10",
                    children:
                      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                  }),
                  (0, v.jsxs)("div", {
                    className:
                      "flex items-center lg:flex-row flex-col justify-end gap-3 sm:gap-5 md:gap-7 xl:pt-5",
                    children: [
                      (0, v.jsx)("div", {
                        className:
                          "max-w-[538px] w-full overflow-hidden border !border-transparent rounded-[20px] border-solid cursor-pointer shadow-TouristImageShadow",
                        children: (0, v.jsx)("img", {
                          className:
                            "hover:scale-[1.05] duration-300 max-w-[538px] w-full",
                          src: z,
                          alt: "FemaleTourist",
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: "w-full !max-w-[558px]",
                        children: [
                          (0, v.jsx)(Je, {
                            slidesPerView: 1,
                            spaceBetween: 1,
                            effect: "fade",
                            centeredSlides: !0,
                            loop: !0,
                            autoplay: { delay: 2500, disableOnInteraction: !1 },
                            ref: t,
                            navigation: {
                              prevEl: ".custom-arrow.prev",
                              nextEl: ".custom-arrow.next",
                            },
                            modules: [rt, nt],
                            className: "mySwiper",
                            onSwiper: (e) => {
                              e.slides.forEach((t, n) => {
                                n === e.realIndex
                                  ? t.classList.add("swiper-slide-center")
                                  : t.classList.remove("swiper-slide-center");
                              });
                            },
                            children: S.map((e, t) =>
                              (0, v.jsx)(
                                et,
                                {
                                  className: "swiper-slide",
                                  children: (0, v.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, v.jsx)("img", {
                                        className:
                                          "w-[48px] sm:w-[60px] md:w-[70px] lg:w-[82px] mb-3 sm:mb-4 md:mb-5",
                                        src: e.InvertedComa,
                                        alt: "InvertComa",
                                      }),
                                      (0, v.jsx)("p", {
                                        className:
                                          "font-inter font-normal text-[14px] sm:text-base leading-[150%] text-black opacity-70 max-w-[558px]",
                                        children: e.Paragraph,
                                      }),
                                      (0, v.jsx)("p", {
                                        className:
                                          "font-inter font-medium text-base !leading-[121%] mt-4 text-black",
                                        children: e.Name,
                                      }),
                                      (0, v.jsx)("p", {
                                        className:
                                          "font-inter font-medium text-base !leading-[121%] text-black opacity-70 mt-1 sm:mt-2",
                                        children: e.text,
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                          (0, v.jsxs)("div", {
                            className:
                              "mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 gap-3 flex",
                            children: [
                              (0, v.jsx)("button", {
                                className: "z-[10]",
                                onClick: () => {
                                  t.current &&
                                    t.current.swiper &&
                                    t.current.swiper.slidePrev();
                                },
                                children: (0, v.jsx)(L, {}),
                              }),
                              (0, v.jsx)("button", {
                                className: " z-[10]",
                                onClick: () => {
                                  t.current &&
                                    t.current.swiper &&
                                    t.current.swiper.slideNext();
                                },
                                children: (0, v.jsx)(j, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        lt = [
          {
            countryimg: n.p + "static/media/Uk.9744b903ced506cc7b12.webp",
            placename: "united kingdom",
            price: "$5.000",
          },
          {
            countryimg: n.p + "static/media/Dubai.11e17e69c638aebbe5a3.webp",
            placename: "Dubai",
            price: "$8.000",
          },
          {
            countryimg: n.p + "static/media/India.9cabd5ce4ab27fa5e0be.webp",
            placename: "India",
            price: "$4000",
          },
          {
            countryimg: n.p + "static/media/Spain.ef7f8ae9c8e111883923.webp",
            placename: "Spain",
            price: "$10.000",
          },
          {
            countryimg: n.p + "static/media/Europe.f2c7989abac6fb3e2991.webp",
            placename: "Europe",
            price: "$9.000",
          },
          {
            countryimg: n.p + "static/media/Thailand.697362b29057549e5c4e.webp",
            placename: "Thailand",
            price: "$7.000",
          },
        ],
        it = () =>
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)("section", {
              className:
                "xl:pt-[150px] lg:py-25 md:py-20 sm:py-15 py-12 xl:pb-[109px]",
              children: (0, v.jsxs)("div", {
                className: "max-w-[1164px] mx-auto md:px-3 px-4",
                children: [
                  (0, v.jsx)("h2", {
                    className:
                      "text-center font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold",
                    children: "Best Offers",
                  }),
                  (0, v.jsx)("p", {
                    className:
                      "text-center leading-[120%] font-inter text-base text-primaryblack pt-3",
                    children: "Check out our Top Rated Tours",
                  }),
                  (0, v.jsx)("div", {
                    className: "flex flex-wrap justify-center mt-4 -mx-3",
                    children: lt.map((e) =>
                      (0, v.jsx)(
                        "div",
                        {
                          className: "lg:w-4/12 sm:w-6/12 w-10/12 p-3",
                          children: (0, v.jsxs)("div", {
                            className:
                              "flex flex-col offer_card border-b-4 lg:mt-6 border-b-white rounded-[16px]  hover:border-b-4 hover:border-white hover:border-b-[#FC3C60]  transition-all duration-300  overflow-hidden",
                            children: [
                              (0, v.jsx)("div", {
                                className: "lg:h-[229px] overflow-hidden",
                                children: (0, v.jsx)("img", {
                                  className:
                                    "rounded-t-[16px] transition-all duration-300 scale_105 lg:max-w-[364px]",
                                  src: e.countryimg,
                                  alt: "destination_pic",
                                }),
                              }),
                              (0, v.jsxs)("div", {
                                className:
                                  "flex overflow-hidden border border-t-0 rounded-b-[16px] border_none border-[#cccc] justify-between px-4 sm:pt-5 pt-3 pb-4 sm:pb-6",
                                children: [
                                  (0, v.jsx)("h4", {
                                    className:
                                      "text-black font-inter text-lg font-medium",
                                    children: e.placename,
                                  }),
                                  (0, v.jsx)("p", {
                                    className:
                                      "text-black font-inter text-base opacity-70",
                                    children: e.price,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        ot = n.p + "static/media/InsightIcon.ef65f97c28da64a63dfc.webp",
        st =
          n.p +
          "static/media/PersonalizedServiceIcon.f43ff9532926f2e4be8f.webp",
        ut =
          n.p + "static/media/AssuredExcellenceIcon.038a0626bd2abf26fcf6.webp",
        ct = () =>
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)("section", {
              className: "bg_choose pt-10 pb-9 bg-cover bg-center",
              children: (0, v.jsxs)("div", {
                className: "max-w-[1164px] mx-auto md:px-3 px-4",
                children: [
                  (0, v.jsx)("h2", {
                    className:
                      "text-center font-inter text-[30px] text-white sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold",
                    children: "Why Choose Us",
                  }),
                  (0, v.jsx)("p", {
                    className:
                      "text-center leading-[120%] font-inter text-base text-white max-w-[568px] mx-auto pt-2 lg:pt-3",
                    children:
                      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                  }),
                  (0, v.jsxs)("div", {
                    className: "flex flex-wrap justify-center  mt-10 -mx-3",
                    children: [
                      (0, v.jsx)("div", {
                        className: "w-10/12 sm:w-6/12 md:w-4/12 p-3",
                        children: (0, v.jsxs)("div", {
                          className:
                            "flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 p-3 lg:p-6 choose_card items-center justify-center h-full",
                          children: [
                            (0, v.jsx)("img", {
                              className: "h-[60px] w-[60px]",
                              src: ot,
                              alt: "icon",
                            }),
                            (0, v.jsx)("h5", {
                              className:
                                "text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4",
                              children: "Expert Insight",
                            }),
                            (0, v.jsx)("p", {
                              className:
                                "pt-2 lg:pt-3 text-white opacity-70 text_black font-inter text-center max-w-[316px]",
                              children:
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
                            }),
                          ],
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "w-10/12 sm:w-6/12 md:w-4/12 p-3",
                        children: (0, v.jsxs)("div", {
                          className:
                            "flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 lg:p-6 p-3 choose_card items-center justify-center h-full",
                          children: [
                            (0, v.jsx)("img", {
                              className: "h-[60px] w-[60px]",
                              src: st,
                              alt: "icon",
                            }),
                            (0, v.jsx)("h5", {
                              className:
                                "text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4",
                              children: "Personalized Service",
                            }),
                            (0, v.jsx)("p", {
                              className:
                                "pt-2 lg:pt-3 text-white opacity-70 text_black font-inter text-center max-w-[316px]",
                              children:
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
                            }),
                          ],
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "w-10/12 sm:w-6/12 md:w-4/12 p-3",
                        children: (0, v.jsxs)("div", {
                          className:
                            "flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 p-3 lg:p-6 choose_card items-center justify-center h-full",
                          children: [
                            (0, v.jsx)("img", {
                              className: "h-[60px] w-[60px]",
                              src: ut,
                              alt: "icon",
                            }),
                            (0, v.jsx)("h5", {
                              className:
                                "text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4",
                              children: "Assured Excellence",
                            }),
                            (0, v.jsx)("p", {
                              className:
                                "pt-2 lg:pt-3 text-white opacity-70 text_black font-inter text-center max-w-[316px]",
                              children:
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsxs)("button", {
                    class:
                      "rounded-[10px] mx-auto flex items-center font-semibold font-inter h-[59px] mt-10 w-[139px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                    children: [
                      (0, v.jsx)("span", {
                        class:
                          "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                      }),
                      (0, v.jsx)("span", {
                        class:
                          "relative text-white text-center mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease",
                        children: "Book Today",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        dt = () =>
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)("section", {
              className: "pt-[100px] pb-[121px]",
              children: (0, v.jsx)("div", {
                className: "max-w-[1136px] mx-auto px-4 md:px-3 ",
                children: (0, v.jsx)("div", {
                  className:
                    "flex flex-wrap justify-center lg:justify-start -mx-3",
                  children: (0, v.jsxs)("div", {
                    className: "w-full sm:w-10/12 lg:w-5/12 px-3",
                    children: [
                      (0, v.jsx)("h2", {
                        className:
                          " font-inter lg:text-start text-center text-[30px] text-black sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold",
                        children: "Our Ticket Package",
                      }),
                      (0, v.jsx)("p", {
                        className:
                          "pt-4 text-black lg:text-start text-center opacity-70 font-inter",
                        children:
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\xa0",
                      }),
                      (0, v.jsxs)("button", {
                        class:
                          "rounded-[10px] mx-auto lg:mx-0 mt-10 flex items-center font-semibold font-inter h-[59px] md:h-[59px] w-[131px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred",
                        children: [
                          (0, v.jsx)("span", {
                            class:
                              "absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease",
                          }),
                          (0, v.jsx)("span", {
                            class:
                              "relative mx-auto text-white text-center whitespace-nowrap transition duration-300 group-hover:text-extralightred ease text-[14px] md:text-base",
                            children: "Read More",
                          }),
                        ],
                      }),
                      (0, v.jsx)("div", { className: "flex flex-wrap" }),
                    ],
                  }),
                }),
              }),
            }),
          });
      const pt = function () {
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(y, {}),
              (0, v.jsx)(it, {}),
              (0, v.jsx)(ct, {}),
              (0, v.jsx)(dt, {}),
              (0, v.jsx)(at, {}),
              (0, v.jsx)(C, {}),
              (0, v.jsx)(M, {}),
            ],
          });
        },
        ft = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: l,
                  getTTFB: i,
                } = t;
                n(e), r(e), a(e), l(e), i(e);
              });
        };
      t
        .createRoot(document.getElementById("root"))
        .render((0, v.jsx)(e.StrictMode, { children: (0, v.jsx)(pt, {}) })),
        ft();
    })();
})();
//# sourceMappingURL=main.c679444a.js.map
