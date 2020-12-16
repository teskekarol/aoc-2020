(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    "0KJs": function(e, t, n) {
        (function(A) {
                function r() {
                    var e;
                    try {
                        e = t.storage.debug
                    } catch (n) {}
                    return !e && "undefined" !== typeof A && "env"in A && (e = A.env.DEBUG),
                        e
                }
                (t = e.exports = n("FXYA")).log = function() {
                    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                    ,
                    t.formatArgs = function(e) {
                        var n = this.useColors;
                        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff),
                            !n)
                            return;
                        var A = "color: " + this.color;
                        e.splice(1, 0, A, "color: inherit");
                        var r = 0
                            , a = 0;
                        e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                                "%%" !== e && (r++,
                                "%c" === e && (a = r))
                            }
                        )),
                            e.splice(a, 0, A)
                    }
                    ,
                    t.save = function(e) {
                        try {
                            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                        } catch (n) {}
                    }
                    ,
                    t.load = r,
                    t.useColors = function() {
                        if ("undefined" !== typeof window && window.process && "renderer" === window.process.type)
                            return !0;
                        if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                            return !1;
                        return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                    }
                    ,
                    t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function() {
                        try {
                            return window.localStorage
                        } catch (e) {}
                    }(),
                    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                    t.formatters.j = function(e) {
                        try {
                            return JSON.stringify(e)
                        } catch (t) {
                            return "[UnexpectedJSONParseError]: " + t.message
                        }
                    }
                    ,
                    t.enable(r())
            }
        ).call(this, n("8oxB"))
    },
    "0z79": function(e, t, n) {
        var A = n("AdPF")
            , r = n("CUme")
            , a = n("1Mk5")
            , i = n("Yvos")
            , o = n("NOtv")("engine.io-client:polling-xhr")
            , E = n("2UHX");
        function s() {}
        function c(e) {
            if (r.call(this, e),
                this.requestTimeout = e.requestTimeout,
                this.extraHeaders = e.extraHeaders,
            "undefined" !== typeof location) {
                var t = "https:" === location.protocol
                    , n = location.port;
                n || (n = t ? 443 : 80),
                    this.xd = "undefined" !== typeof location && e.hostname !== location.hostname || n !== e.port,
                    this.xs = e.secure !== t
            }
        }
        function R(e) {
            this.method = e.method || "GET",
                this.uri = e.uri,
                this.xd = !!e.xd,
                this.xs = !!e.xs,
                this.async = !1 !== e.async,
                this.data = void 0 !== e.data ? e.data : null,
                this.agent = e.agent,
                this.isBinary = e.isBinary,
                this.supportsBinary = e.supportsBinary,
                this.enablesXDR = e.enablesXDR,
                this.withCredentials = e.withCredentials,
                this.requestTimeout = e.requestTimeout,
                this.pfx = e.pfx,
                this.key = e.key,
                this.passphrase = e.passphrase,
                this.cert = e.cert,
                this.ca = e.ca,
                this.ciphers = e.ciphers,
                this.rejectUnauthorized = e.rejectUnauthorized,
                this.extraHeaders = e.extraHeaders,
                this.create()
        }
        if (e.exports = c,
            e.exports.Request = R,
            i(c, r),
            c.prototype.supportsBinary = !0,
            c.prototype.request = function(e) {
                return (e = e || {}).uri = this.uri(),
                    e.xd = this.xd,
                    e.xs = this.xs,
                    e.agent = this.agent || !1,
                    e.supportsBinary = this.supportsBinary,
                    e.enablesXDR = this.enablesXDR,
                    e.withCredentials = this.withCredentials,
                    e.pfx = this.pfx,
                    e.key = this.key,
                    e.passphrase = this.passphrase,
                    e.cert = this.cert,
                    e.ca = this.ca,
                    e.ciphers = this.ciphers,
                    e.rejectUnauthorized = this.rejectUnauthorized,
                    e.requestTimeout = this.requestTimeout,
                    e.extraHeaders = this.extraHeaders,
                    new R(e)
            }
            ,
            c.prototype.doWrite = function(e, t) {
                var n = "string" !== typeof e && void 0 !== e
                    , A = this.request({
                    method: "POST",
                    data: e,
                    isBinary: n
                })
                    , r = this;
                A.on("success", t),
                    A.on("error", (function(e) {
                            r.onError("xhr post error", e)
                        }
                    )),
                    this.sendXhr = A
            }
            ,
            c.prototype.doPoll = function() {
                o("xhr poll");
                var e = this.request()
                    , t = this;
                e.on("data", (function(e) {
                        t.onData(e)
                    }
                )),
                    e.on("error", (function(e) {
                            t.onError("xhr poll error", e)
                        }
                    )),
                    this.pollXhr = e
            }
            ,
            a(R.prototype),
            R.prototype.create = function() {
                var e = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                e.pfx = this.pfx,
                    e.key = this.key,
                    e.passphrase = this.passphrase,
                    e.cert = this.cert,
                    e.ca = this.ca,
                    e.ciphers = this.ciphers,
                    e.rejectUnauthorized = this.rejectUnauthorized;
                var t = this.xhr = new A(e)
                    , n = this;
                try {
                    o("xhr open %s: %s", this.method, this.uri),
                        t.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders)
                            for (var r in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0),
                                this.extraHeaders)
                                this.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.extraHeaders[r])
                    } catch (a) {}
                    if ("POST" === this.method)
                        try {
                            this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (a) {}
                    try {
                        t.setRequestHeader("Accept", "*/*")
                    } catch (a) {}
                    "withCredentials"in t && (t.withCredentials = this.withCredentials),
                    this.requestTimeout && (t.timeout = this.requestTimeout),
                        this.hasXDR() ? (t.onload = function() {
                                n.onLoad()
                            }
                                ,
                                t.onerror = function() {
                                    n.onError(t.responseText)
                                }
                        ) : t.onreadystatechange = function() {
                            if (2 === t.readyState)
                                try {
                                    var e = t.getResponseHeader("Content-Type");
                                    (n.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && (t.responseType = "arraybuffer")
                                } catch (a) {}
                            4 === t.readyState && (200 === t.status || 1223 === t.status ? n.onLoad() : setTimeout((function() {
                                    n.onError("number" === typeof t.status ? t.status : 0)
                                }
                            ), 0))
                        }
                        ,
                        o("xhr data %s", this.data),
                        t.send(this.data)
                } catch (a) {
                    return void setTimeout((function() {
                            n.onError(a)
                        }
                    ), 0)
                }
                "undefined" !== typeof document && (this.index = R.requestsCount++,
                    R.requests[this.index] = this)
            }
            ,
            R.prototype.onSuccess = function() {
                this.emit("success"),
                    this.cleanup()
            }
            ,
            R.prototype.onData = function(e) {
                this.emit("data", e),
                    this.onSuccess()
            }
            ,
            R.prototype.onError = function(e) {
                this.emit("error", e),
                    this.cleanup(!0)
            }
            ,
            R.prototype.cleanup = function(e) {
                if ("undefined" !== typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = s : this.xhr.onreadystatechange = s,
                        e)
                        try {
                            this.xhr.abort()
                        } catch (t) {}
                    "undefined" !== typeof document && delete R.requests[this.index],
                        this.xhr = null
                }
            }
            ,
            R.prototype.onLoad = function() {
                var e;
                try {
                    var t;
                    try {
                        t = this.xhr.getResponseHeader("Content-Type")
                    } catch (n) {}
                    e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText
                } catch (n) {
                    this.onError(n)
                }
                null != e && this.onData(e)
            }
            ,
            R.prototype.hasXDR = function() {
                return "undefined" !== typeof XDomainRequest && !this.xs && this.enablesXDR
            }
            ,
            R.prototype.abort = function() {
                this.cleanup()
            }
            ,
            R.requestsCount = 0,
            R.requests = {},
        "undefined" !== typeof document)
            if ("function" === typeof attachEvent)
                attachEvent("onunload", O);
            else if ("function" === typeof addEventListener) {
                addEventListener("onpagehide"in E ? "pagehide" : "unload", O, !1)
            }
        function O() {
            for (var e in R.requests)
                R.requests.hasOwnProperty(e) && R.requests[e].abort()
        }
    },
    1: function(e, t) {},
    "14A5": function(e, t) {
        var n = "undefined" !== typeof n ? n : "undefined" !== typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder && MozBlobBuilder
            , A = function() {
            try {
                return 2 === new Blob(["hi"]).size
            } catch (e) {
                return !1
            }
        }()
            , r = A && function() {
            try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (e) {
                return !1
            }
        }()
            , a = n && n.prototype.append && n.prototype.getBlob;
        function i(e) {
            return e.map((function(e) {
                    if (e.buffer instanceof ArrayBuffer) {
                        var t = e.buffer;
                        if (e.byteLength !== t.byteLength) {
                            var n = new Uint8Array(e.byteLength);
                            n.set(new Uint8Array(t,e.byteOffset,e.byteLength)),
                                t = n.buffer
                        }
                        return t
                    }
                    return e
                }
            ))
        }
        function o(e, t) {
            t = t || {};
            var A = new n;
            return i(e).forEach((function(e) {
                    A.append(e)
                }
            )),
                t.type ? A.getBlob(t.type) : A.getBlob()
        }
        function E(e, t) {
            return new Blob(i(e),t || {})
        }
        "undefined" !== typeof Blob && (o.prototype = Blob.prototype,
            E.prototype = Blob.prototype),
            e.exports = A ? r ? Blob : E : a ? o : void 0
    },
    "1Mk5": function(e, t, n) {
        function A(e) {
            if (e)
                return function(e) {
                    for (var t in A.prototype)
                        e[t] = A.prototype[t];
                    return e
                }(e)
        }
        e.exports = A,
            A.prototype.on = A.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {},
                    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
                    this
            }
            ,
            A.prototype.once = function(e, t) {
                function n() {
                    this.off(e, n),
                        t.apply(this, arguments)
                }
                return n.fn = t,
                    this.on(e, n),
                    this
            }
            ,
            A.prototype.off = A.prototype.removeListener = A.prototype.removeAllListeners = A.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                        this;
                var n, A = this._callbacks["$" + e];
                if (!A)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks["$" + e],
                        this;
                for (var r = 0; r < A.length; r++)
                    if ((n = A[r]) === t || n.fn === t) {
                        A.splice(r, 1);
                        break
                    }
                return 0 === A.length && delete this._callbacks["$" + e],
                    this
            }
            ,
            A.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], A = 1; A < arguments.length; A++)
                    t[A - 1] = arguments[A];
                if (n) {
                    A = 0;
                    for (var r = (n = n.slice(0)).length; A < r; ++A)
                        n[A].apply(this, t)
                }
                return this
            }
            ,
            A.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {},
                this._callbacks["$" + e] || []
            }
            ,
            A.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
    },
    "2Dig": function(e, t) {
        e.exports = function(e, t, n) {
            return e.on(t, n),
                {
                    destroy: function() {
                        e.removeListener(t, n)
                    }
                }
        }
    },
    "2UHX": function(e, t) {
        e.exports = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : Function("return this")()
    },
    "2pII": function(e, t, n) {
        var A = n("akSB")
            , r = n("1Mk5")
            , a = n("NOtv")("engine.io-client:socket")
            , i = n("7jRU")
            , o = n("Wm4p")
            , E = n("Uxeu")
            , s = n("TypT");
        function c(e, t) {
            if (!(this instanceof c))
                return new c(e,t);
            t = t || {},
            e && "object" === typeof e && (t = e,
                e = null),
                e ? (e = E(e),
                    t.hostname = e.host,
                    t.secure = "https" === e.protocol || "wss" === e.protocol,
                    t.port = e.port,
                e.query && (t.query = e.query)) : t.host && (t.hostname = E(t.host).host),
                this.secure = null != t.secure ? t.secure : "undefined" !== typeof location && "https:" === location.protocol,
            t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
                this.agent = t.agent || !1,
                this.hostname = t.hostname || ("undefined" !== typeof location ? location.hostname : "localhost"),
                this.port = t.port || ("undefined" !== typeof location && location.port ? location.port : this.secure ? 443 : 80),
                this.query = t.query || {},
            "string" === typeof this.query && (this.query = s.decode(this.query)),
                this.upgrade = !1 !== t.upgrade,
                this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/",
                this.forceJSONP = !!t.forceJSONP,
                this.jsonp = !1 !== t.jsonp,
                this.forceBase64 = !!t.forceBase64,
                this.enablesXDR = !!t.enablesXDR,
                this.withCredentials = !1 !== t.withCredentials,
                this.timestampParam = t.timestampParam || "t",
                this.timestampRequests = t.timestampRequests,
                this.transports = t.transports || ["polling", "websocket"],
                this.transportOptions = t.transportOptions || {},
                this.readyState = "",
                this.writeBuffer = [],
                this.prevBufferLen = 0,
                this.policyPort = t.policyPort || 843,
                this.rememberUpgrade = t.rememberUpgrade || !1,
                this.binaryType = null,
                this.onlyBinaryUpgrades = t.onlyBinaryUpgrades,
                this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}),
            !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
            this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                this.pfx = t.pfx || null,
                this.key = t.key || null,
                this.passphrase = t.passphrase || null,
                this.cert = t.cert || null,
                this.ca = t.ca || null,
                this.ciphers = t.ciphers || null,
                this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized,
                this.forceNode = !!t.forceNode,
                this.isReactNative = "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
            ("undefined" === typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders),
            t.localAddress && (this.localAddress = t.localAddress)),
                this.id = null,
                this.upgrades = null,
                this.pingInterval = null,
                this.pingTimeout = null,
                this.pingIntervalTimer = null,
                this.pingTimeoutTimer = null,
                this.open()
        }
        e.exports = c,
            c.priorWebsocketSuccess = !1,
            r(c.prototype),
            c.protocol = o.protocol,
            c.Socket = c,
            c.Transport = n("Gbct"),
            c.transports = n("akSB"),
            c.parser = n("Wm4p"),
            c.prototype.createTransport = function(e) {
                a('creating transport "%s"', e);
                var t = function(e) {
                    var t = {};
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }(this.query);
                t.EIO = o.protocol,
                    t.transport = e;
                var n = this.transportOptions[e] || {};
                return this.id && (t.sid = this.id),
                    new A[e]({
                        query: t,
                        socket: this,
                        agent: n.agent || this.agent,
                        hostname: n.hostname || this.hostname,
                        port: n.port || this.port,
                        secure: n.secure || this.secure,
                        path: n.path || this.path,
                        forceJSONP: n.forceJSONP || this.forceJSONP,
                        jsonp: n.jsonp || this.jsonp,
                        forceBase64: n.forceBase64 || this.forceBase64,
                        enablesXDR: n.enablesXDR || this.enablesXDR,
                        withCredentials: n.withCredentials || this.withCredentials,
                        timestampRequests: n.timestampRequests || this.timestampRequests,
                        timestampParam: n.timestampParam || this.timestampParam,
                        policyPort: n.policyPort || this.policyPort,
                        pfx: n.pfx || this.pfx,
                        key: n.key || this.key,
                        passphrase: n.passphrase || this.passphrase,
                        cert: n.cert || this.cert,
                        ca: n.ca || this.ca,
                        ciphers: n.ciphers || this.ciphers,
                        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                        extraHeaders: n.extraHeaders || this.extraHeaders,
                        forceNode: n.forceNode || this.forceNode,
                        localAddress: n.localAddress || this.localAddress,
                        requestTimeout: n.requestTimeout || this.requestTimeout,
                        protocols: n.protocols || void 0,
                        isReactNative: this.isReactNative
                    })
            }
            ,
            c.prototype.open = function() {
                var e;
                if (this.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                    e = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var t = this;
                        return void setTimeout((function() {
                                t.emit("error", "No transports available")
                            }
                        ), 0)
                    }
                    e = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e)
                } catch (n) {
                    return this.transports.shift(),
                        void this.open()
                }
                e.open(),
                    this.setTransport(e)
            }
            ,
            c.prototype.setTransport = function(e) {
                a("setting transport %s", e.name);
                var t = this;
                this.transport && (a("clearing existing transport %s", this.transport.name),
                    this.transport.removeAllListeners()),
                    this.transport = e,
                    e.on("drain", (function() {
                            t.onDrain()
                        }
                    )).on("packet", (function(e) {
                            t.onPacket(e)
                        }
                    )).on("error", (function(e) {
                            t.onError(e)
                        }
                    )).on("close", (function() {
                            t.onClose("transport close")
                        }
                    ))
            }
            ,
            c.prototype.probe = function(e) {
                a('probing transport "%s"', e);
                var t = this.createTransport(e, {
                    probe: 1
                })
                    , n = !1
                    , A = this;
                function r() {
                    if (A.onlyBinaryUpgrades) {
                        var r = !this.supportsBinary && A.transport.supportsBinary;
                        n = n || r
                    }
                    n || (a('probe transport "%s" opened', e),
                        t.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                        t.once("packet", (function(r) {
                                if (!n)
                                    if ("pong" === r.type && "probe" === r.data) {
                                        if (a('probe transport "%s" pong', e),
                                            A.upgrading = !0,
                                            A.emit("upgrading", t),
                                            !t)
                                            return;
                                        c.priorWebsocketSuccess = "websocket" === t.name,
                                            a('pausing current transport "%s"', A.transport.name),
                                            A.transport.pause((function() {
                                                    n || "closed" !== A.readyState && (a("changing transport and sending upgrade packet"),
                                                        O(),
                                                        A.setTransport(t),
                                                        t.send([{
                                                            type: "upgrade"
                                                        }]),
                                                        A.emit("upgrade", t),
                                                        t = null,
                                                        A.upgrading = !1,
                                                        A.flush())
                                                }
                                            ))
                                    } else {
                                        a('probe transport "%s" failed', e);
                                        var i = new Error("probe error");
                                        i.transport = t.name,
                                            A.emit("upgradeError", i)
                                    }
                            }
                        )))
                }
                function i() {
                    n || (n = !0,
                        O(),
                        t.close(),
                        t = null)
                }
                function o(n) {
                    var r = new Error("probe error: " + n);
                    r.transport = t.name,
                        i(),
                        a('probe transport "%s" failed because of error: %s', e, n),
                        A.emit("upgradeError", r)
                }
                function E() {
                    o("transport closed")
                }
                function s() {
                    o("socket closed")
                }
                function R(e) {
                    t && e.name !== t.name && (a('"%s" works - aborting "%s"', e.name, t.name),
                        i())
                }
                function O() {
                    t.removeListener("open", r),
                        t.removeListener("error", o),
                        t.removeListener("close", E),
                        A.removeListener("close", s),
                        A.removeListener("upgrading", R)
                }
                c.priorWebsocketSuccess = !1,
                    t.once("open", r),
                    t.once("error", o),
                    t.once("close", E),
                    this.once("close", s),
                    this.once("upgrading", R),
                    t.open()
            }
            ,
            c.prototype.onOpen = function() {
                if (a("socket open"),
                    this.readyState = "open",
                    c.priorWebsocketSuccess = "websocket" === this.transport.name,
                    this.emit("open"),
                    this.flush(),
                "open" === this.readyState && this.upgrade && this.transport.pause) {
                    a("starting upgrade probes");
                    for (var e = 0, t = this.upgrades.length; e < t; e++)
                        this.probe(this.upgrades[e])
                }
            }
            ,
            c.prototype.onPacket = function(e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                    switch (a('socket receive: type "%s", data "%s"', e.type, e.data),
                        this.emit("packet", e),
                        this.emit("heartbeat"),
                        e.type) {
                        case "open":
                            this.onHandshake(JSON.parse(e.data));
                            break;
                        case "pong":
                            this.setPing(),
                                this.emit("pong");
                            break;
                        case "error":
                            var t = new Error("server error");
                            t.code = e.data,
                                this.onError(t);
                            break;
                        case "message":
                            this.emit("data", e.data),
                                this.emit("message", e.data)
                    }
                else
                    a('packet received with socket readyState "%s"', this.readyState)
            }
            ,
            c.prototype.onHandshake = function(e) {
                this.emit("handshake", e),
                    this.id = e.sid,
                    this.transport.query.sid = e.sid,
                    this.upgrades = this.filterUpgrades(e.upgrades),
                    this.pingInterval = e.pingInterval,
                    this.pingTimeout = e.pingTimeout,
                    this.onOpen(),
                "closed" !== this.readyState && (this.setPing(),
                    this.removeListener("heartbeat", this.onHeartbeat),
                    this.on("heartbeat", this.onHeartbeat))
            }
            ,
            c.prototype.onHeartbeat = function(e) {
                clearTimeout(this.pingTimeoutTimer);
                var t = this;
                t.pingTimeoutTimer = setTimeout((function() {
                        "closed" !== t.readyState && t.onClose("ping timeout")
                    }
                ), e || t.pingInterval + t.pingTimeout)
            }
            ,
            c.prototype.setPing = function() {
                var e = this;
                clearTimeout(e.pingIntervalTimer),
                    e.pingIntervalTimer = setTimeout((function() {
                            a("writing ping packet - expecting pong within %sms", e.pingTimeout),
                                e.ping(),
                                e.onHeartbeat(e.pingTimeout)
                        }
                    ), e.pingInterval)
            }
            ,
            c.prototype.ping = function() {
                var e = this;
                this.sendPacket("ping", (function() {
                        e.emit("ping")
                    }
                ))
            }
            ,
            c.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen),
                    this.prevBufferLen = 0,
                    0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }
            ,
            c.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length),
                    this.transport.send(this.writeBuffer),
                    this.prevBufferLen = this.writeBuffer.length,
                    this.emit("flush"))
            }
            ,
            c.prototype.write = c.prototype.send = function(e, t, n) {
                return this.sendPacket("message", e, t, n),
                    this
            }
            ,
            c.prototype.sendPacket = function(e, t, n, A) {
                if ("function" === typeof t && (A = t,
                    t = void 0),
                "function" === typeof n && (A = n,
                    n = null),
                "closing" !== this.readyState && "closed" !== this.readyState) {
                    (n = n || {}).compress = !1 !== n.compress;
                    var r = {
                        type: e,
                        data: t,
                        options: n
                    };
                    this.emit("packetCreate", r),
                        this.writeBuffer.push(r),
                    A && this.once("flush", A),
                        this.flush()
                }
            }
            ,
            c.prototype.close = function() {
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var e = this;
                    this.writeBuffer.length ? this.once("drain", (function() {
                            this.upgrading ? A() : t()
                        }
                    )) : this.upgrading ? A() : t()
                }
                function t() {
                    e.onClose("forced close"),
                        a("socket closing - telling transport to close"),
                        e.transport.close()
                }
                function n() {
                    e.removeListener("upgrade", n),
                        e.removeListener("upgradeError", n),
                        t()
                }
                function A() {
                    e.once("upgrade", n),
                        e.once("upgradeError", n)
                }
                return this
            }
            ,
            c.prototype.onError = function(e) {
                a("socket error %j", e),
                    c.priorWebsocketSuccess = !1,
                    this.emit("error", e),
                    this.onClose("transport error", e)
            }
            ,
            c.prototype.onClose = function(e, t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    a('socket close with reason: "%s"', e);
                    clearTimeout(this.pingIntervalTimer),
                        clearTimeout(this.pingTimeoutTimer),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        this.readyState = "closed",
                        this.id = null,
                        this.emit("close", e, t),
                        this.writeBuffer = [],
                        this.prevBufferLen = 0
                }
            }
            ,
            c.prototype.filterUpgrades = function(e) {
                for (var t = [], n = 0, A = e.length; n < A; n++)
                    ~i(this.transports, e[n]) && t.push(e[n]);
                return t
            }
    },
    "3JDX": function(e, t, n) {
        e.exports = function(e) {
            function t(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++)
                    t = (t << 5) - t + e.charCodeAt(n),
                        t |= 0;
                return A.colors[Math.abs(t) % A.colors.length]
            }
            function A(e) {
                let n;
                function i(...e) {
                    if (!i.enabled)
                        return;
                    const t = i
                        , r = Number(new Date)
                        , a = r - (n || r);
                    t.diff = a,
                        t.prev = n,
                        t.curr = r,
                        n = r,
                        e[0] = A.coerce(e[0]),
                    "string" !== typeof e[0] && e.unshift("%O");
                    let o = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (n,r)=>{
                            if ("%%" === n)
                                return n;
                            o++;
                            const a = A.formatters[r];
                            if ("function" === typeof a) {
                                const A = e[o];
                                n = a.call(t, A),
                                    e.splice(o, 1),
                                    o--
                            }
                            return n
                        }
                    ),
                        A.formatArgs.call(t, e),
                        (t.log || A.log).apply(t, e)
                }
                return i.namespace = e,
                    i.enabled = A.enabled(e),
                    i.useColors = A.useColors(),
                    i.color = t(e),
                    i.destroy = r,
                    i.extend = a,
                "function" === typeof A.init && A.init(i),
                    A.instances.push(i),
                    i
            }
            function r() {
                const e = A.instances.indexOf(this);
                return -1 !== e && (A.instances.splice(e, 1),
                    !0)
            }
            function a(e, t) {
                const n = A(this.namespace + ("undefined" === typeof t ? ":" : t) + e);
                return n.log = this.log,
                    n
            }
            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return A.debug = A,
                A.default = A,
                A.coerce = function(e) {
                    if (e instanceof Error)
                        return e.stack || e.message;
                    return e
                }
                ,
                A.disable = function() {
                    const e = [...A.names.map(i), ...A.skips.map(i).map(e=>"-" + e)].join(",");
                    return A.enable(""),
                        e
                }
                ,
                A.enable = function(e) {
                    let t;
                    A.save(e),
                        A.names = [],
                        A.skips = [];
                    const n = ("string" === typeof e ? e : "").split(/[\s,]+/)
                        , r = n.length;
                    for (t = 0; t < r; t++)
                        n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? A.skips.push(new RegExp("^" + e.substr(1) + "$")) : A.names.push(new RegExp("^" + e + "$")));
                    for (t = 0; t < A.instances.length; t++) {
                        const e = A.instances[t];
                        e.enabled = A.enabled(e.namespace)
                    }
                }
                ,
                A.enabled = function(e) {
                    if ("*" === e[e.length - 1])
                        return !0;
                    let t, n;
                    for (t = 0,
                             n = A.skips.length; t < n; t++)
                        if (A.skips[t].test(e))
                            return !1;
                    for (t = 0,
                             n = A.names.length; t < n; t++)
                        if (A.names[t].test(e))
                            return !0;
                    return !1
                }
                ,
                A.humanize = n("k2N2"),
                Object.keys(e).forEach(t=>{
                        A[t] = e[t]
                    }
                ),
                A.instances = [],
                A.names = [],
                A.skips = [],
                A.formatters = {},
                A.selectColor = t,
                A.enable(A.load()),
                A
        }
    },
    "3UD+": function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return t.l
                        }
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function() {
                            return t.i
                        }
                    }),
                    Object.defineProperty(t, "exports", {
                        enumerable: !0
                    }),
                    t.webpackPolyfill = 1
            }
            return t
        }
    },
    "49sm": function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "6C75": function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "7jRU": function(e, t) {
        var n = [].indexOf;
        e.exports = function(e, t) {
            if (n)
                return e.indexOf(t);
            for (var A = 0; A < e.length; ++A)
                if (e[A] === t)
                    return A;
            return -1
        }
    },
    "8jRI": function(e, t, n) {
        "use strict";
        var A = new RegExp("%[a-f0-9]{2}","gi")
            , r = new RegExp("(%[a-f0-9]{2})+","gi");
        function a(e, t) {
            try {
                return decodeURIComponent(e.join(""))
            } catch (r) {}
            if (1 === e.length)
                return e;
            t = t || 1;
            var n = e.slice(0, t)
                , A = e.slice(t);
            return Array.prototype.concat.call([], a(n), a(A))
        }
        function i(e) {
            try {
                return decodeURIComponent(e)
            } catch (r) {
                for (var t = e.match(A), n = 1; n < t.length; n++)
                    t = (e = a(t, n).join("")).match(A);
                return e
            }
        }
        e.exports = function(e) {
            if ("string" !== typeof e)
                throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "),
                    decodeURIComponent(e)
            } catch (t) {
                return function(e) {
                    for (var n = {
                        "%FE%FF": "\ufffd\ufffd",
                        "%FF%FE": "\ufffd\ufffd"
                    }, A = r.exec(e); A; ) {
                        try {
                            n[A[0]] = decodeURIComponent(A[0])
                        } catch (t) {
                            var a = i(A[0]);
                            a !== A[0] && (n[A[0]] = a)
                        }
                        A = r.exec(e)
                    }
                    n["%C2"] = "\ufffd";
                    for (var o = Object.keys(n), E = 0; E < o.length; E++) {
                        var s = o[E];
                        e = e.replace(new RegExp(s,"g"), n[s])
                    }
                    return e
                }(e)
            }
        }
    },
    "8yz6": function(e, t, n) {
        "use strict";
        e.exports = (e,t)=>{
            if ("string" !== typeof e || "string" !== typeof t)
                throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === t)
                return [e];
            const n = e.indexOf(t);
            return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
        }
    },
    AdPF: function(e, t, n) {
        var A = n("yeub")
            , r = n("2UHX");
        e.exports = function(e) {
            var t = e.xdomain
                , n = e.xscheme
                , a = e.enablesXDR;
            try {
                if ("undefined" !== typeof XMLHttpRequest && (!t || A))
                    return new XMLHttpRequest
            } catch (i) {}
            try {
                if ("undefined" !== typeof XDomainRequest && !n && a)
                    return new XDomainRequest
            } catch (i) {}
            if (!t)
                try {
                    return new (r[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (i) {}
        }
    },
    Aplp: function(e, t, n) {
        "use strict";
        var A, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, i = {}, o = 0, E = 0;
        function s(e) {
            var t = "";
            do {
                t = r[e % a] + t,
                    e = Math.floor(e / a)
            } while (e > 0);return t
        }
        function c() {
            var e = s(+new Date);
            return e !== A ? (o = 0,
                A = e) : e + "." + s(o++)
        }
        for (; E < a; E++)
            i[r[E]] = E;
        c.encode = s,
            c.decode = function(e) {
                var t = 0;
                for (E = 0; E < e.length; E++)
                    t = t * a + i[e.charAt(E)];
                return t
            }
            ,
            e.exports = c
    },
    C2QD: function(e, t) {
        function n(e) {
            e = e || {},
                this.ms = e.min || 100,
                this.max = e.max || 1e4,
                this.factor = e.factor || 2,
                this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
                this.attempts = 0
        }
        e.exports = n,
            n.prototype.duration = function() {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random()
                        , n = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                }
                return 0 | Math.min(e, this.max)
            }
            ,
            n.prototype.reset = function() {
                this.attempts = 0
            }
            ,
            n.prototype.setMin = function(e) {
                this.ms = e
            }
            ,
            n.prototype.setMax = function(e) {
                this.max = e
            }
            ,
            n.prototype.setJitter = function(e) {
                this.jitter = e
            }
    },
    CIKq: function(e, t, n) {
        (function(t) {
                var A, r, a = n("Gbct"), i = n("Wm4p"), o = n("TypT"), E = n("Yvos"), s = n("Aplp"), c = n("NOtv")("engine.io-client:websocket");
                if ("undefined" !== typeof WebSocket ? A = WebSocket : "undefined" !== typeof self && (A = self.WebSocket || self.MozWebSocket),
                "undefined" === typeof window)
                    try {
                        r = n(1)
                    } catch (I) {}
                var R = A || r;
                function O(e) {
                    e && e.forceBase64 && (this.supportsBinary = !1),
                        this.perMessageDeflate = e.perMessageDeflate,
                        this.usingBrowserWebSocket = A && !e.forceNode,
                        this.protocols = e.protocols,
                    this.usingBrowserWebSocket || (R = r),
                        a.call(this, e)
                }
                e.exports = O,
                    E(O, a),
                    O.prototype.name = "websocket",
                    O.prototype.supportsBinary = !0,
                    O.prototype.doOpen = function() {
                        if (this.check()) {
                            var e = this.uri()
                                , t = this.protocols
                                , n = {};
                            this.isReactNative || (n.agent = this.agent,
                                n.perMessageDeflate = this.perMessageDeflate,
                                n.pfx = this.pfx,
                                n.key = this.key,
                                n.passphrase = this.passphrase,
                                n.cert = this.cert,
                                n.ca = this.ca,
                                n.ciphers = this.ciphers,
                                n.rejectUnauthorized = this.rejectUnauthorized),
                            this.extraHeaders && (n.headers = this.extraHeaders),
                            this.localAddress && (n.localAddress = this.localAddress);
                            try {
                                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new R(e,t) : new R(e) : new R(e,t,n)
                            } catch (A) {
                                return this.emit("error", A)
                            }
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                                    this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                                this.addEventListeners()
                        }
                    }
                    ,
                    O.prototype.addEventListeners = function() {
                        var e = this;
                        this.ws.onopen = function() {
                            e.onOpen()
                        }
                            ,
                            this.ws.onclose = function() {
                                e.onClose()
                            }
                            ,
                            this.ws.onmessage = function(t) {
                                e.onData(t.data)
                            }
                            ,
                            this.ws.onerror = function(t) {
                                e.onError("websocket error", t)
                            }
                    }
                    ,
                    O.prototype.write = function(e) {
                        var n = this;
                        this.writable = !1;
                        for (var A = e.length, r = 0, a = A; r < a; r++)
                            !function(e) {
                                i.encodePacket(e, n.supportsBinary, (function(r) {
                                        if (!n.usingBrowserWebSocket) {
                                            var a = {};
                                            if (e.options && (a.compress = e.options.compress),
                                                n.perMessageDeflate)
                                                ("string" === typeof r ? t.byteLength(r) : r.length) < n.perMessageDeflate.threshold && (a.compress = !1)
                                        }
                                        try {
                                            n.usingBrowserWebSocket ? n.ws.send(r) : n.ws.send(r, a)
                                        } catch (I) {
                                            c("websocket closed before onclose event")
                                        }
                                        --A || o()
                                    }
                                ))
                            }(e[r]);
                        function o() {
                            n.emit("flush"),
                                setTimeout((function() {
                                        n.writable = !0,
                                            n.emit("drain")
                                    }
                                ), 0)
                        }
                    }
                    ,
                    O.prototype.onClose = function() {
                        a.prototype.onClose.call(this)
                    }
                    ,
                    O.prototype.doClose = function() {
                        "undefined" !== typeof this.ws && this.ws.close()
                    }
                    ,
                    O.prototype.uri = function() {
                        var e = this.query || {}
                            , t = this.secure ? "wss" : "ws"
                            , n = "";
                        return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port),
                        this.timestampRequests && (e[this.timestampParam] = s()),
                        this.supportsBinary || (e.b64 = 1),
                        (e = o.encode(e)).length && (e = "?" + e),
                        t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
                    }
                    ,
                    O.prototype.check = function() {
                        return !!R && !("__initialize"in R && this.name === O.prototype.name)
                    }
            }
        ).call(this, n("tjlA").Buffer)
    },
    CUme: function(e, t, n) {
        var A = n("Gbct")
            , r = n("TypT")
            , a = n("Wm4p")
            , i = n("Yvos")
            , o = n("Aplp")
            , E = n("NOtv")("engine.io-client:polling");
        e.exports = c;
        var s = null != new (n("AdPF"))({
            xdomain: !1
        }).responseType;
        function c(e) {
            var t = e && e.forceBase64;
            s && !t || (this.supportsBinary = !1),
                A.call(this, e)
        }
        i(c, A),
            c.prototype.name = "polling",
            c.prototype.doOpen = function() {
                this.poll()
            }
            ,
            c.prototype.pause = function(e) {
                var t = this;
                function n() {
                    E("paused"),
                        t.readyState = "paused",
                        e()
                }
                if (this.readyState = "pausing",
                this.polling || !this.writable) {
                    var A = 0;
                    this.polling && (E("we are currently polling - waiting to pause"),
                        A++,
                        this.once("pollComplete", (function() {
                                E("pre-pause polling complete"),
                                --A || n()
                            }
                        ))),
                    this.writable || (E("we are currently writing - waiting to pause"),
                        A++,
                        this.once("drain", (function() {
                                E("pre-pause writing complete"),
                                --A || n()
                            }
                        )))
                } else
                    n()
            }
            ,
            c.prototype.poll = function() {
                E("polling"),
                    this.polling = !0,
                    this.doPoll(),
                    this.emit("poll")
            }
            ,
            c.prototype.onData = function(e) {
                var t = this;
                E("polling got data %s", e);
                a.decodePayload(e, this.socket.binaryType, (function(e, n, A) {
                        if ("opening" === t.readyState && t.onOpen(),
                        "close" === e.type)
                            return t.onClose(),
                                !1;
                        t.onPacket(e)
                    }
                )),
                "closed" !== this.readyState && (this.polling = !1,
                    this.emit("pollComplete"),
                    "open" === this.readyState ? this.poll() : E('ignoring poll - transport state "%s"', this.readyState))
            }
            ,
            c.prototype.doClose = function() {
                var e = this;
                function t() {
                    E("writing close packet"),
                        e.write([{
                            type: "close"
                        }])
                }
                "open" === this.readyState ? (E("transport open - closing"),
                    t()) : (E("transport not open - deferring close"),
                    this.once("open", t))
            }
            ,
            c.prototype.write = function(e) {
                var t = this;
                this.writable = !1;
                var n = function() {
                    t.writable = !0,
                        t.emit("drain")
                };
                a.encodePayload(e, this.supportsBinary, (function(e) {
                        t.doWrite(e, n)
                    }
                ))
            }
            ,
            c.prototype.uri = function() {
                var e = this.query || {}
                    , t = this.secure ? "https" : "http"
                    , n = "";
                return !1 !== this.timestampRequests && (e[this.timestampParam] = o()),
                this.supportsBinary || e.sid || (e.b64 = 1),
                    e = r.encode(e),
                this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port),
                e.length && (e = "?" + e),
                t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
            }
    },
    Cl5A: function(e, t, n) {
        var A = n("CUme")
            , r = n("Yvos")
            , a = n("2UHX");
        e.exports = c;
        var i, o = /\n/g, E = /\\n/g;
        function s() {}
        function c(e) {
            A.call(this, e),
                this.query = this.query || {},
            i || (i = a.___eio = a.___eio || []),
                this.index = i.length;
            var t = this;
            i.push((function(e) {
                    t.onData(e)
                }
            )),
                this.query.j = this.index,
            "function" === typeof addEventListener && addEventListener("beforeunload", (function() {
                    t.script && (t.script.onerror = s)
                }
            ), !1)
        }
        r(c, A),
            c.prototype.supportsBinary = !1,
            c.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                this.form && (this.form.parentNode.removeChild(this.form),
                    this.form = null,
                    this.iframe = null),
                    A.prototype.doClose.call(this)
            }
            ,
            c.prototype.doPoll = function() {
                var e = this
                    , t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                    t.async = !0,
                    t.src = this.uri(),
                    t.onerror = function(t) {
                        e.onError("jsonp poll error", t)
                    }
                ;
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t),
                    this.script = t,
                "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                        var e = document.createElement("iframe");
                        document.body.appendChild(e),
                            document.body.removeChild(e)
                    }
                ), 100)
            }
            ,
            c.prototype.doWrite = function(e, t) {
                var n = this;
                if (!this.form) {
                    var A, r = document.createElement("form"), a = document.createElement("textarea"), i = this.iframeId = "eio_iframe_" + this.index;
                    r.className = "socketio",
                        r.style.position = "absolute",
                        r.style.top = "-1000px",
                        r.style.left = "-1000px",
                        r.target = i,
                        r.method = "POST",
                        r.setAttribute("accept-charset", "utf-8"),
                        a.name = "d",
                        r.appendChild(a),
                        document.body.appendChild(r),
                        this.form = r,
                        this.area = a
                }
                function s() {
                    c(),
                        t()
                }
                function c() {
                    if (n.iframe)
                        try {
                            n.form.removeChild(n.iframe)
                        } catch (t) {
                            n.onError("jsonp polling iframe removal error", t)
                        }
                    try {
                        var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                        A = document.createElement(e)
                    } catch (t) {
                        (A = document.createElement("iframe")).name = n.iframeId,
                            A.src = "javascript:0"
                    }
                    A.id = n.iframeId,
                        n.form.appendChild(A),
                        n.iframe = A
                }
                this.form.action = this.uri(),
                    c(),
                    e = e.replace(E, "\\\n"),
                    this.area.value = e.replace(o, "\\n");
                try {
                    this.form.submit()
                } catch (R) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" === n.iframe.readyState && s()
                    }
                    : this.iframe.onload = s
            }
    },
    Cpg7: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return A
            }
        ));
        var A = [".section.jsx-386496228{padding:0.5rem 1rem;text-align:center;}", ".align-left.jsx-386496228{text-align:left;}", ".mb-0.jsx-386496228{margin-bottom:0;}", ".mb-05.jsx-386496228{margin-bottom:0.5rem;}", ".mt-05.jsx-386496228{margin-top:0.5rem;}", ".mt-1.jsx-386496228{margin-top:0.5rem;}", ".my-05.jsx-386496228{margin-top:0.5rem;margin-bottom:0.5rem;}", ".py-05.jsx-386496228{padding-top:0.5rem;padding-bottom:0.5rem;}", ".py-1.jsx-386496228{padding-top:1rem;padding-bottom:1rem;}", ".pt-1.jsx-386496228{padding-top:1rem;}", ".pb-1.jsx-386496228{padding-bottom:1rem;}", ".bg-gray.jsx-386496228{background-color:#f0f0f0;}", "hr.jsx-386496228{background-color:#e5e5e5;height:2px;margin:0;border:none;}"];
        A.__hash = "386496228"
    },
    FGiv: function(e, t) {
        var n = 1e3
            , A = 60 * n
            , r = 60 * A
            , a = 24 * r
            , i = 365.25 * a;
        function o(e, t, n) {
            if (!(e < t))
                return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        e.exports = function(e, t) {
            t = t || {};
            var E, s = typeof e;
            if ("string" === s && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var o = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return o * i;
                        case "days":
                        case "day":
                        case "d":
                            return o * a;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return o * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return o * A;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return o * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return o;
                        default:
                            return
                    }
                }(e);
            if ("number" === s && !1 === isNaN(e))
                return t.long ? o(E = e, a, "day") || o(E, r, "hour") || o(E, A, "minute") || o(E, n, "second") || E + " ms" : function(e) {
                    if (e >= a)
                        return Math.round(e / a) + "d";
                    if (e >= r)
                        return Math.round(e / r) + "h";
                    if (e >= A)
                        return Math.round(e / A) + "m";
                    if (e >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    FXYA: function(e, t, n) {
        function A(e) {
            var n;
            function A() {
                if (A.enabled) {
                    var e = A
                        , r = +new Date
                        , a = r - (n || r);
                    e.diff = a,
                        e.prev = n,
                        e.curr = r,
                        n = r;
                    for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
                        i[o] = arguments[o];
                    i[0] = t.coerce(i[0]),
                    "string" !== typeof i[0] && i.unshift("%O");
                    var E = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, (function(n, A) {
                            if ("%%" === n)
                                return n;
                            E++;
                            var r = t.formatters[A];
                            if ("function" === typeof r) {
                                var a = i[E];
                                n = r.call(e, a),
                                    i.splice(E, 1),
                                    E--
                            }
                            return n
                        }
                    )),
                        t.formatArgs.call(e, i),
                        (A.log || t.log || console.log.bind(console)).apply(e, i)
                }
            }
            return A.namespace = e,
                A.enabled = t.enabled(e),
                A.useColors = t.useColors(),
                A.color = function(e) {
                    var n, A = 0;
                    for (n in e)
                        A = (A << 5) - A + e.charCodeAt(n),
                            A |= 0;
                    return t.colors[Math.abs(A) % t.colors.length]
                }(e),
                A.destroy = r,
            "function" === typeof t.init && t.init(A),
                t.instances.push(A),
                A
        }
        function r() {
            var e = t.instances.indexOf(this);
            return -1 !== e && (t.instances.splice(e, 1),
                !0)
        }
        (t = e.exports = A.debug = A.default = A).coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
            ,
            t.disable = function() {
                t.enable("")
            }
            ,
            t.enable = function(e) {
                var n;
                t.save(e),
                    t.names = [],
                    t.skips = [];
                var A = ("string" === typeof e ? e : "").split(/[\s,]+/)
                    , r = A.length;
                for (n = 0; n < r; n++)
                    A[n] && ("-" === (e = A[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (n = 0; n < t.instances.length; n++) {
                    var a = t.instances[n];
                    a.enabled = t.enabled(a.namespace)
                }
            }
            ,
            t.enabled = function(e) {
                if ("*" === e[e.length - 1])
                    return !0;
                var n, A;
                for (n = 0,
                         A = t.skips.length; n < A; n++)
                    if (t.skips[n].test(e))
                        return !1;
                for (n = 0,
                         A = t.names.length; n < A; n++)
                    if (t.names[n].test(e))
                        return !0;
                return !1
            }
            ,
            t.humanize = n("FGiv"),
            t.instances = [],
            t.names = [],
            t.skips = [],
            t.formatters = {}
    },
    Gbct: function(e, t, n) {
        var A = n("Wm4p")
            , r = n("1Mk5");
        function a(e) {
            this.path = e.path,
                this.hostname = e.hostname,
                this.port = e.port,
                this.secure = e.secure,
                this.query = e.query,
                this.timestampParam = e.timestampParam,
                this.timestampRequests = e.timestampRequests,
                this.readyState = "",
                this.agent = e.agent || !1,
                this.socket = e.socket,
                this.enablesXDR = e.enablesXDR,
                this.withCredentials = e.withCredentials,
                this.pfx = e.pfx,
                this.key = e.key,
                this.passphrase = e.passphrase,
                this.cert = e.cert,
                this.ca = e.ca,
                this.ciphers = e.ciphers,
                this.rejectUnauthorized = e.rejectUnauthorized,
                this.forceNode = e.forceNode,
                this.isReactNative = e.isReactNative,
                this.extraHeaders = e.extraHeaders,
                this.localAddress = e.localAddress
        }
        e.exports = a,
            r(a.prototype),
            a.prototype.onError = function(e, t) {
                var n = new Error(e);
                return n.type = "TransportError",
                    n.description = t,
                    this.emit("error", n),
                    this
            }
            ,
            a.prototype.open = function() {
                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
                    this.doOpen()),
                    this
            }
            ,
            a.prototype.close = function() {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
                    this.onClose()),
                    this
            }
            ,
            a.prototype.send = function(e) {
                if ("open" !== this.readyState)
                    throw new Error("Transport not open");
                this.write(e)
            }
            ,
            a.prototype.onOpen = function() {
                this.readyState = "open",
                    this.writable = !0,
                    this.emit("open")
            }
            ,
            a.prototype.onData = function(e) {
                var t = A.decodePacket(e, this.socket.binaryType);
                this.onPacket(t)
            }
            ,
            a.prototype.onPacket = function(e) {
                this.emit("packet", e)
            }
            ,
            a.prototype.onClose = function() {
                this.readyState = "closed",
                    this.emit("close")
            }
    },
    H7XF: function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = s(e)
                , n = t[0]
                , A = t[1];
            return 3 * (n + A) / 4 - A
        }
            ,
            t.toByteArray = function(e) {
                var t, n, A = s(e), i = A[0], o = A[1], E = new a(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, i, o)), c = 0, R = o > 0 ? i - 4 : i;
                for (n = 0; n < R; n += 4)
                    t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)],
                        E[c++] = t >> 16 & 255,
                        E[c++] = t >> 8 & 255,
                        E[c++] = 255 & t;
                2 === o && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4,
                    E[c++] = 255 & t);
                1 === o && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2,
                    E[c++] = t >> 8 & 255,
                    E[c++] = 255 & t);
                return E
            }
            ,
            t.fromByteArray = function(e) {
                for (var t, n = e.length, r = n % 3, a = [], i = 0, o = n - r; i < o; i += 16383)
                    a.push(c(e, i, i + 16383 > o ? o : i + 16383));
                1 === r ? (t = e[n - 1],
                    a.push(A[t >> 2] + A[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1],
                    a.push(A[t >> 10] + A[t >> 4 & 63] + A[t << 2 & 63] + "="));
                return a.join("")
            }
        ;
        for (var A = [], r = [], a = "undefined" !== typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, E = i.length; o < E; ++o)
            A[o] = i[o],
                r[i.charCodeAt(o)] = o;
        function s(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
                [n, n === t ? 0 : 4 - n % 4]
        }
        function c(e, t, n) {
            for (var r, a, i = [], o = t; o < n; o += 3)
                r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                    i.push(A[(a = r) >> 18 & 63] + A[a >> 12 & 63] + A[a >> 6 & 63] + A[63 & a]);
            return i.join("")
        }
        r["-".charCodeAt(0)] = 62,
            r["_".charCodeAt(0)] = 63
    },
    HHYi: function(e) {
        e.exports = JSON.parse('{"devops":{"Codenames":["STAR","BRIDGE","FIRE","RING","HEART","HORN","SPRING","TABLE","WHALE","SEAL","MOON","BLOCK","DRILL","FISH","TUBE","GRACE","IRON","DOCTOR","ROULETTE","DEGREE","WAKE","NEEDLE","TABLET","PIE","GREEN","DRAGON","NEW YORK","AUSTRALIA","MARCH","LINE","WAR","HONEY","JAM","CHURCH","COVER","LEAD","BERMUDA","CHANGE","TOKYO","EGYPT","BEAT","RAY","BELT","CAP","LEMON","NURSE","WIND","LION","LONDON","FALL","BOOT","DICE","EYE","BOARD","SWITCH","AIR","JUPITER","HAM","BATTERY","SPINE","VET","RABBIT","AGENT","DROP","TRACK","BANK","CLIFF","BOMB","CASINO","SKYSCRAPER","STOCK","BRUSH","GRASS","SATURN","DRESS","FAN","DWARF","ALIEN","WHIP","ANTARCTICA","PUMPKIN","MOSCOW","TRIP","SNOWMAN","FOREST","CAPITAL","STRIKE","COPPER","SOUL","CANADA","CONCERT","CHOCOLATE","JET","SHAKESPEARE","CAR","SHADOW","GLOVE","LITTER","COMIC","MILLIONAIRE","PITCH","BOND","APPLE","OIL","COOK","FLY","CAST","BEAR","PIN","MINE","CHECK","BAR","COLD","HOLLYWOOD","SCREEN","PLAY","MARBLE","DINOSAUR","CAT","GAME","LIFE","LUCK","HOOK","PARK","BAT","BOLT","GREECE","DECK","YARD","CONDUCTOR","GIANT","FACE","PIRATE","BEACH","POUND","ROUND","FIELD","CYCLE","ROME","HOTEL","SPOT","MOUNT","STICK","SINK","MOLE","SCHOOL","CHICK","WATER","PAPER","SLUG","BUTTON","HIMALAYAS","NINJA","CZECH","GROUND","BUGLE","MOUTH","TAG","NUT","WORM","PENGUIN","LAWYER","SPIDER","TAIL","TICK","MINT","MISSILE","EMBASSY","PISTOL","SCIENTIST","KIWI","LOG","GERMANY","HAND","DISEASE","BED","SPY","PRINCESS","DANCE","CARROT","STATE","RACKET","GENIUS","THIEF","TRUNK","AMERICA","NOVEL","WALL","BERRY","ATLANTIS","KETCHUP","PLOT","ENGLAND","TEMPLE","MAPLE","MAIL","AFRICA","OPERA","TOWER","NIGHT","POOL","ROBIN","BAND","DUCK","HOOD","CARD","COURT","TIE","DIAMOND","CROSS","NET","FRANCE","DATE","COTTON","POINT","OLIVE","MATCH","BALL","MERCURY","BOW","FIGHTER","SHOP","SLIP","KNIGHT","PASS","STADIUM","FOOT","LIMOUSINE","CONTRACT","PLATE","MOUSE","HORSESHOE","ORGAN","KNIFE","CELL","WATCH","ARM","ROSE","MODEL","THEATER","HOLE","POST","LIGHT","TRIANGLE","BELL","LEPRECHAUN","KID","POLICE","ROCK","SCALE","GHOST","SHIP","MEXICO","CLOAK","STRAW","CALF","SHARK","DRAFT","HAWK","PRESS","VAN","ICE CREAM","BUCK","PHOENIX","FORCE","BOOM","LAB","RULER","PILOT","LASER","DEATH","LOCK","SPELL","HOSPITAL","AMBULANCE","WEB","PLASTIC","KEY","OCTOPUS","THUMB","TEACHER","PALM","CRANE","HELICOPTER","BOTTLE","FENCE","KANGAROO","JACK","EUROPE","SCORPION","MUG","SUIT","MICROSCOPE","ENGINE","WAVE","CENTAUR","STREAM","HEAD","MAMMOTH","DAY","KING","PAN","POLE","SUPERHERO","REVOLUTION","PIT","GAS","GLASS","WASHINGTON","TURKEY","QUEEN","FILE","CRICKET","WELL","FAIR","TOOTH","STAFF","BILL","SHOT","WASHER","LAP","AMAZON","SPACE","FIGURE","MASS","CHINA","SQUARE","BUFFALO","CHEST","DOG","NAIL","BERLIN","HORSE","CHARGE","SUB","INDIA","TRAIN","TELESCOPE","PLANE","PARACHUTE","PIANO","BOX","PLATYPUS","CLUB","SHOE","SERVER","CENTER","CHAIR","SOUND","COMPOUND","FILM","CROWN","OLYMPUS","BACK","NOTE","PART","TAP","ICE","SOCK","ALPS","ROOT","SATELLITE","ANGEL","CRASH","GOLD","BUG","PASTE","ROBOT","ROW","SPIKE","CODE","LOCH NESS","FORK","SWING","PORT","CIRCLE","UNICORN","TIME","LINK","FLUTE","TORCH","BEIJING","EAGLE","BARK","SNOW","IVORY","PIPE","PANTS","SOLDIER","VACUUM","WITCH","PUPIL","SMUGGLER","ORANGE","AZTEC","UNDERTAKER","SCUBA DIVER","PYRAMID","POISON","STRING"],"Codenames: Duet":["BUCKET","DASH","WALRUS","LEMONADE","FLAG","CAVE","ANT","VAMPIRE","TATTOO","RANCH","LOCUST","RIFLE","VIKING","BLIZZARD","MAKEUP","POTTER","TASTE","BLUES","GOLF","PINE","DOLL","LUNCH","SKATES","CRAFT","PEW","PEN","BUTTER","PILLOW","CASTLE","SCROLL","DISK","DRONE","HAMMER","FLOOR","JAIL","BREAK","LACE","POCKET","TIN","FLAT","CUCKOO","HAIR","MUD","JEWELER","HERCULES","BLADE","MOSQUITO","PEA","ICELAND","FROST","COACH","POTATO","SNAP","CAKE","TURTLE","CHRISTMAS","CHERRY","MOSES","TEAM","CANE","BULB","BISCUIT","SPRAY","PEPPER","PUPPET","MILL","MARACAS","FOAM","YELLOWSTONE","ICE AGE","MEMORY","JUMPER","COMB","GLASSES","PIZZA","SOAP","BIG BEN","SLED","VIOLET","BUBBLE","SPOON","ONION","GENIE","TANK","SHERLOCK","BAY","DRYER","BROTHER","MESS","LADDER","SCARECROW","NOTRE DAME","KILT","SHED","BONSAI","WONDERLAND","SLING","SQUIRREL","HOSE","MARATHON","EAR","POPCORN","GOLDILOCKS","EGG","BIKINI","KISS","FIDDLE","LEATHER","COAST","ASTRONAUT","BLACK HOLE","SAND","DREAM","STETHOSCOPE","BABY","TIPI","MILE","JUDGE","VOLCANO","NYLON","GUITAR","BEE","GUM","PENNY","SMOKE","HELMET","KITCHEN","SAHARA","RECORD","SCRATCH","WING","AXE","PAINT","SKULL","TEAR","CRYSTAL","NEWTON","PITCHER","LEAF","ASH","COLLAR","WINDOW","LUMBERJACK","LOVE","SOUP","INK","SALOON","RIVER","SPHINX","SHERWOOD","LIGHTNING","GOAT","BATH","CLEOPATRA","SALAD","BRASS","WHISTLE","MOUNTIE","SISTER","DIRECTOR","LETTER","CAPTAIN","POLISH","CRAB","BRICK","EINSTEIN","ANTHEM","MOHAWK","CAMP","UNIVERSITY","JOKER","COW","SHOOT","DOLLAR","MINUTE","RICE","ARMY","PENTAGON","BIG BANG","COLUMBUS","CLOCK","BLACKSMITH","JOAN OF ARC","ZOMBIE","BUTTERFLY","WHEEL","DENTIST","CHEESE","EARTH","NAPOLEON","TEXAS","STREET","FEVER","FOG","RAZOR","CABLE","GOVERNOR","COWBOY","KING ARTHUR","BRIDE","CAESAR","GREENHOUSE","DUST","SLIPPER","TROLL","QUACK","VOLUME","SKI","RUSSIA","PEARL","PACIFIC","BOIL","EASTER","QUARTER","MICROWAVE","SHOWER","FUEL","EARTHQUAKE","CROW","MAGICIAN","NERVE","THUNDER","MUSKETEER","GLACIER","POWDER","ROLL","WEREWOLF","CHAIN","SECOND","BUNK","BEARD","STEAM","CLOUD","VALENTINE","STICKER","SNAKE","BATTLESHIP","BATTLE","MAP","VIRUS","TORNADO","BICYCLE","PARROT","HAMBURGER","SIGN","NOAH","WIZARD","PARADE","APRON","CURRY","BEAM","DESK","SADDLE","RAT","BACON","RUBBER","PATIENT","SAW","OASIS","VENUS","BENCH","RIP","ST. PATRICK","ROAD","CHALK","GYMNAST","METER","RODEO","SILK","COFFEE","JOCKEY","SMOOTHIE","SALSA","SAIL","WOOL","TUNNEL","GARDEN","SMELL","DOOR","WOOD","COUNTRY","ELEPHANT","MARK","BLIND","SQUASH","MOTHER","DRAWING","RAIL","MISS","PURSE","IGLOO","LIP","MONKEY","BOWLER","SWEAT","DRIVER","DELTA","SALT","SLOTH","ATTIC","STEEL","SHORTS","STORM","WHEELCHAIR","STABLE","GEAR","BALLOON","BARBECUE","TUTU","BASS","HAWAII","MUSTARD","MEDIC","JELLYFISH","ALASKA","BEER","MONA LISA","FARM","CRUSADER","TRICK","BOWL","LAUNDRY","POLO","TOAST","ARMOR","TEA","REINDEER","SUMO","BREAD","ACE","RUST","WISH","KNOT","CONE","BRAZIL","HIDE","HALLOWEEN","SANTA","BRAIN","HIT","HOUSE","PEANUT","SHELL","TIP","SWORD","MIRROR","PADDLE","GROOM","PAGE","POP","BEAN","CHIP","COMET","PIG","STORY","MAGAZINE","RAINBOW","SACK","RAM","SUGAR","SUN","PAD","BANANA","RADIO","DRESSING","SWAMP","MANICURE","FLOOD","STAMP","WAGON","TIGER","COMPUTER","WAITRESS","PEACH","HOMER","BOXER","EDEN","SLEEP","MINOTAUR","WEDDING","KUNG FU","MUMMY","STEP","SPURS","GANGSTER","MILK","FROG","SHAMPOO","TUXEDO","SHEET","AVALANCHE","ROPE","BOSS","KICK","BOOK","SPIRIT","SHOULDER","ANCHOR","NOSE","DRUM"],"DevOps words pack":["5G","Agent","Agile","AI","Anti Pattern","Apache","API","AppSec","Architecture","Artifact","Atlassian","Attack","Authentication","Automation","AWS","Azure","Bad Actor","Binary","Black Box","Black Hat","Branching","Breach","Break","Build","Bullet Proof","Business","Canary release","Chaos Engineering","Chef","CI/CD","Cloud","CloudBees","Club 20","Cluster","Code","Collaboration","Commit","Complexity","Compliance","Compliant","Component","Configuration","ConnectAll","Containers","Continuous","Cron job","Cultural Transformation","Cyber","D2IQ","Data","Defender","Deming","Dependency Management","Deployment","Developer","Development","DevOps","DevSecOps","Digital","Docker","Documentation","DOD","Downstream","EC2","Embed","Engineer","Enterprise","Environment","Epic Failures","Evangelist","Fail fast","Failure","False Positive","Federal","Feedback Loop","Filesystem","FinTech","Flow","Futurist","Gamification","Gatekeeping","Github","GitLabs","Google Cloud","Governance","Government","Hacker","Hardware","Hybrid","Immersive","Infrastructure","Innersource","Innovation","Integration","IT","Java","Journey","Kanban","Keurig Dr Pepper","Kubernetes","Leader","Lean","Linux","Lock","Machine Learning","Macquarie","Mapping","Measeure","Microservice","ML","Mobile","Modern Infrastructure","Module","Monitor","Moogsoft","MVP","Nerd","Network","Northrop Grumman","NowSecure","NPM","NS1","Onboarding","Ones & Zeros","Online","Open source","Operator","Orchestration","Organization","OSS","Output","OWASP","Pair programming","Password","Pepsico","Phoenix Project","PHP","Pipeline","Platform","Premises","Production","Project Management","Provisioning","Puppet","Real-time","Red Hat","Regression testing","Release","Remediation","Repository","Resiliance","Roadmap","Rollback","Runtime","SaaS","SAST","SCA","Scale","Scaleability","Scientific","Scrum","SDLC","SecOps","Security","Server","Serverless","Shift-left","Software","Sonatype","Source control","Speed","Sprints","SRE","Staging","Stand up","State Actor","State Farm","Technical debt","Terraform","Testing","Threat Modelling","Traceability","Transformation","Trunk","Unicorn Project","Unit test","Unmonitored","Value Stream","Vault","Viable","Virtual machine","Visualize","Vulnerability","Waterfall","Wireless","XML","XSS","Zero Defect"]},"cz":{"Kryc\xed jm\xe9na":["zima","l\xe9to","jaro","podzim","noc","sv\u011btlo","d\xe9\u0161\u0165","sn\xedh","v\xedtr","mr\xe1z","vzduch","led","voda","ohe\u0148","vlna","kr\xe1pn\xedk","hora","\u0159eka","d\u017eungle","park","vrchol","louka","pole","p\xf3l","pou\u0161\u0165","ostrov","les","jeskyn\u011b","\xfadol\xed","jezero","mo\u0159e","austr\xe1lie","bratislava","n\u011bmecko","it\xe1lie","ma\u010far","anglie","ameri\u010dan","\u0161pan\u011bl","afrika","brno","holan\u010fan","praha","\u010dech","braz\xedlie","rus","francie","peking","v\xedde\u0148","amerika","kanada","berl\xedn","\u0159ecko","pa\u0159\xed\u017e","\u010d\xedna","moskva","lond\xfdn","asie","velryba","pavouk","\u0161tika","savec","ko\u010dka","tu\u010d\u0148\xe1k","ku\u0159e","li\u0161ka","\u017eelva","kon\xedk","zebra","mravenec","ptakopysk","netop\xfdr","brouk","kr\xe1va","je\u017eek","lev","orel","medv\u011bd","slon","los","\u017eralok","prase","kapr","dinosaurus","krokod\xfdl","je\u0161t\u011brka","klokan","papou\u0161ek","chobotnice","pes","\u0161t\xedr","ovce","my\u0161","tygr","kv\u011btina","topol","kaktus","r\u016f\u017ee","muchom\u016frka","houba","ko\u0159en","sedmikr\xe1ska","smrk","list","tulip\xe1n","sn\u011b\u017eenka","strom","dub","kmen","ke\u0159","tr\xe1va","hodinky","mot\xfdlek","pl\xe1\u0161\u0165","ko\u0161ile","\u010depice","sukn\u011b","ru\u010dn\xedk","kalhoty","ba\u010dkora","bota","pono\u017eka","kab\xe1t","br\xfdle","prsten","klobouk","om\xe1\u010dka","ban\xe1n","zel\xed","hrnec","ml\xe9ko","meloun","l\xedz\xe1tko","pomeran\u010d","z\xe1kusek","raj\u010de","chl\xe9b","vejce","\u010dokol\xe1da","t\u0159e\u0161e\u0148","jablko","pivo","\u0161pageta","cukr","pan\xe1k","pol\xe9vka","sal\xe1t","\u0161vestka","p\xe1nev","s\u016fl","ko\u0159en\xed","maso","mouka","s\xfdr","\u010do\u010dka","sal\xe1m","v\xedno","mrkev","knedl\xedk","limon\xe1da","brambora","duch","obr","drak","lochneska","d\xe9mon","jednoro\u017eec","v\xedla","vodn\xedk","\u010darod\u011bj","\u010dert","up\xedr","kentaur","zombie","sk\u0159\xedtek","yetti","princezna","trpasl\xedk","kouzlo","kr\xe1l","poh\xe1dka","and\u011bl","biolog","doktor","zp\u011bv\xe1k","klaun","st\u0159elec","jezdec","prezident","policista","podnikatel","prodava\u010d","atlet","\u017eebr\xe1k","superhrdina","ninja","um\u011blec","b\xe1sn\xedk","karban\xedk","v\u011bdec","fyzik","herec","fotbalista","bank\xe9\u0159","lupi\u010d","kosmonaut","d\u011bln\xedk","vojev\u016fdce","u\u010ditel","program\xe1tor","matematik","filozof","podvodn\xedk","sedl\xe1k","nep\u0159\xedtel","\u0159idi\u010d","cizinec","cestovatel","v\u011bze\u0148","hokejista","sestra","otec","bratr","d\xedt\u011b","kamar\xe1d","panna","matka","venu\u0161e","slunce","hv\u011bzda","mars","zem\u011b","vesm\xedr","m\u011bs\xedc","planeta","kometa","parn\xedk","kolob\u011b\u017eka","je\u0159\xe1b","auto","kamion","letadlo","kolej","silnice","raketa","v\u016fz","autobus","motorka","kolo","vlak","lokomotiva","televize","lampa","pec","kom\xedn","ze\u010f","klika","zrcadlo","trouba","pra\u010dka","plot","okno","ko\u0161","dve\u0159e","zvonek","tal\xed\u0159","robot","d\u011blo","telefon","kl\xe1vesnice","v\u011btrn\xedk","pistole","kniha","sv\xed\u010dka","l\xe1hev","r\xe1dio","ta\u0161ka","m\xed\u010d","koruna","po\u010d\xedta\u010d","kyvadlo","laser","konev","\u0161roubek","z\xe1mek","jehla","tu\u017eka","kosa","kl\xed\u010d","kart\xe1\u010d","pila","d\xfdka","sekera","n\u016f\u017e","h\xe1k","v\xe1ha","h\u0159eben","dr\xe1t","h\u0159eb\xedk","vidli\u010dka","l\u017e\xedce","\u0161roubov\xe1k","kladivo","\u017eehli\u010dka","h\u016fl","me\u010d","kle\u0161t\u011b","provaz","\u0159et\u011bz","lopata","knihovna","cesta","mrakodrap","nemocnice","v\u011b\u017e","h\u0159bitov","\u0161kola","m\u011bsto","hospoda","br\xe1na","cirkus","d\u016fm","vesnice","hrad","\xfa\u0159ad","kino","n\xe1dra\u017e\xed","obchod","plyn","sklo","pap\xedr","plastel\xedna","st\u0159\xedbro","\u017eelezo","l\xe1va","prach","ropa","plast","diamant","beton","guma","d\u0159evo","uhl\xed","k\xe1men","hl\xedna","hlin\xedk","zlato","popel","radost","l\xe1ska","m\xedr","poezie","hudba","sm\u016fla","nemoc","\u0161t\u011bst\xed","v\xe1lka","film","hlas","z\xe1kon","smrt","hra","v\xedra","pr\xe1ce","kytara","basa","trubka","fl\xe9tna","klav\xedr","srdce","ucho","zub","oko","bu\u0148ka","pas","kn\xedr","zadek","v\xed\u010dko","noha","jazyk","koleno","hlava","nos","ruka","org\xe1n","\u017eebro","b\u0159icho","roh","kostka","j\xe1dro","l\xe1tka","k\u0159\xed\u017e","role","karta","figurka","koule","\u0161ipka","bublina","placka","tla\u010d\xedtko"],"Kryc\xed jm\xe9na: Duet":["led\u0148\xe1\u010dek","samuraj","zob\xe1k","kade\u0159nice","med","olej","poh\xe1r","balk\xe1n","lednice","d\xedra","vrak","boxer","pr\xe9rie","bumerang","holub","\u0161\xedp","d\xfdn\u011b","housle","divadlo","vlk","kapsa","pastelka","kr\xe1ter","\u010desnek","\u0161\xe1tek","traktor","obrazovka","chirurg","jesle","statek","n\u016f\u017eky","mu\u0161ka","r\u016f\u017eenka","igl\xfa","mrak","katedr\xe1la","pyramida","sopka","r\xe1j","s\xed\u0165","lupa","housenka","po\u0161ta","turek","skokan","kotva","parohy","l\xedpa","gril","\u010delo","bub\xednek","eskym\xe1k","studna","p\u0159ehrada","ber\xe1nek","morava","straka","past","maj\xe1k","vla\u0161tovka","jupiter","baz\xe9n","komora","duha","popelka","kolumbus","uzel","pad\xe1k","p\xedse\u0148","p\u0161tros","skot","chaloupka","kabelka","karkulka","\u017eabka","golf","babi\u010dka","\u0161v\xe9dsko","p\u0159ilba","stadion","k\u0159\xeddlo","\u010d\xe1ry","tr\u016fn","nev\u011bsta","\u0161aty","k\u0159i\u017e\xe1k","\u0161umava","torn\xe1do","\u017eirafa","kroupa","proud","l\xe9k","p\xe1ra","ma\u010deta","po\u0161\u0165\xe1k","rohl\xedk","rum","obloha","t\u0159\xedska","pero","trezor","akv\xe1rium","sn\u011bhurka","kufr","n\xe1ramek","tma","paprika","tramvaj","tabule","kr\xe1l\xedk","\u017e\xe1rovka","ponorka","hotel","ben\xe1tky","podkova","rozhledna","dynamit","ba\u017eina","had","kajak","klec","ve\u010dern\xed\u010dek","sklep","ledovec","pou\u0165","vodop\xe1d","t\u011blocvi\u010dna","v\xe1noce","hrdina","vltava","c\xedsa\u0159","horolezec","vlkodlak","je\u017eibaba","sir\xe9na","t\u0159\xedda","atlas","bonsaj","mumie","d\xe1ma","letu\u0161ka","tunel","sokol","automat","metro","p\u0159\xedstav","druid","baterie","blesk","kuku\u0159ice","dunaj","muzeum","indie","kimono","pol\xe1rka","mobil","\u0161kolka","st\u0159ep","kobylka","vrtuln\xedk","tatry","\u0161vec","vyso\u010dina","plech","pir\xe1t","uran","kukla","\u0159ezn\xedk","lebka","titanik","polka","h\u0159ib","v\u010dela","hollywood","kamera","sluha","astrolog","ploutev","kuli\u010dka","brusle","dr\xe1ha","\u0161achovnice","bob","jed","hermel\xedn","pen\u011b\u017eenka","\u017eihadlo","pern\xedk","jih","rybn\xedk","orloj","hasi\u010d","vana","kor\xe1l","o\u0159\xed\u0161ek","sloup","sk\xe1la","pecka","kombajn","m\u0159\xed\u017e","\u0161i\u0161ka","\u017eeb\u0159\xedk","mramor","pochode\u0148","ma\u0161le","tes\xe1k","h\xe1\u010dek","rameno","mexi\u010dan","kov\xe1\u0159","zmrzlina","rosa","chapadlo","pramen","k\u0159i\u0161\u0165\xe1l","palma","pilot","k\xe1va","kopyto","mince","pampeli\u0161ka","japonsko","alkohol","blan\xedk","\u0159\xedm","chameleon","utopenec","sklen\xedk","stan","stoli\u010dka","bedna","rukavice","p\xe1ska","maska","m\u016fstek","chobot","svetr","truhl\xedk","stopa","zvon","koloto\u010d","\u0161v\xfdcarsko","faraon","jelen","stroj","gul\xe1\u0161","pizza","kapit\xe1n","mu\u0161ket\xfdr","kan\xe1l","antarktida","varhany","kuba","kravata","harmonika","citron","ml\xfdn","tov\xe1rna","struna","p\u0159\xedkop","lekn\xedn","zuba\u0159","mlha","\u010daj","vrtule","k\u0159\xedda","prad\u011bd","velbloud","troja","z\xe1pad","krab","olympi\xe1da","pob\u0159e\u017e\xed","sklenice","bonbon","slanina","evropa","lopatka","sud","pe\u0159ina","poklad","\u0159\xedp","\u0159asa","lou\u017ee","disk","pr\u016fvod\u010d\xed","pusa","kohoutek","ly\u017ee","o\xe1za","kucha\u0159ka","rybi\u010dka","n\xe1\u010deln\xedk","z\xe1vod","panda","san\u011b","puma","prak","kapka","pl\xe1\u017e","prales","velikonoce","uniforma","meteorit","patro","p\u011bna","klouza\u010dka","amazonka","kosatka","jiskra","ko\u0161\xedk","hn\xedzdo","gran\xe1t","h\u0159i\u0161t\u011b","sfinga","napoleon","plachta","v\xe1lec","vidle","panenka","himal\xe1je","loket","bou\u0159ka","st\u0159edov\u011bk","hranice","mamut","\u017eito","kovboj","p\xedsek","dv\u016fr","\xfal","smetana","knofl\xedk","pot\xe1p\u011b\u010d","krystal","pevnost","p\u011b\u0161\xe1k","linka","p\xe1rek","tlapa","mro\u017e","postel","kostra","viking","srp","stra\u0161\xe1k","prst","v\xfdchod","detektiv","univerzita","rys","kotel","krtek","karl\u0161tejn","st\u016fl","indi\xe1n","ryt\xed\u0159","satelit","st\u0159echa","gorila","\u0161aman","bagr","merkur","krk","panel","t\xe1bor","sedlo","brn\u011bn\xed","lavina","princ","opice","zip","lo\u010f","\u010d\xe1p","hrne\u010dek","galaxie","kop\u0159iva","\u0161koda","zahradn\xedk","sova","uhl\xedk","herkules","koberec","slune\u010dn\xedk","ulice","ikona","tank","vlasy","cihla","texas","borovice","sever","bivoj","kuchyn\u011b","plavky","hyena","jagu\xe1r","k\u016f\u017ee","veverka","\u010dty\u0159l\xedstek"]},"en":{"Codenames":["STAR","BRIDGE","FIRE","RING","HEART","HORN","SPRING","TABLE","WHALE","SEAL","MOON","BLOCK","DRILL","FISH","TUBE","GRACE","IRON","DOCTOR","ROULETTE","DEGREE","WAKE","NEEDLE","TABLET","PIE","GREEN","DRAGON","NEW YORK","AUSTRALIA","MARCH","LINE","WAR","HONEY","JAM","CHURCH","COVER","LEAD","BERMUDA","CHANGE","TOKYO","EGYPT","BEAT","RAY","BELT","CAP","LEMON","NURSE","WIND","LION","LONDON","FALL","BOOT","DICE","EYE","BOARD","SWITCH","AIR","JUPITER","HAM","BATTERY","SPINE","VET","RABBIT","AGENT","DROP","TRACK","BANK","CLIFF","BOMB","CASINO","SKYSCRAPER","STOCK","BRUSH","GRASS","SATURN","DRESS","FAN","DWARF","ALIEN","WHIP","ANTARCTICA","PUMPKIN","MOSCOW","TRIP","SNOWMAN","FOREST","CAPITAL","STRIKE","COPPER","SOUL","CANADA","CONCERT","CHOCOLATE","JET","SHAKESPEARE","CAR","SHADOW","GLOVE","LITTER","COMIC","MILLIONAIRE","PITCH","BOND","APPLE","OIL","COOK","FLY","CAST","BEAR","PIN","MINE","CHECK","BAR","COLD","HOLLYWOOD","SCREEN","PLAY","MARBLE","DINOSAUR","CAT","GAME","LIFE","LUCK","HOOK","PARK","BAT","BOLT","GREECE","DECK","YARD","CONDUCTOR","GIANT","FACE","PIRATE","BEACH","POUND","ROUND","FIELD","CYCLE","ROME","HOTEL","SPOT","MOUNT","STICK","SINK","MOLE","SCHOOL","CHICK","WATER","PAPER","SLUG","BUTTON","HIMALAYAS","NINJA","CZECH","GROUND","BUGLE","MOUTH","TAG","NUT","WORM","PENGUIN","LAWYER","SPIDER","TAIL","TICK","MINT","MISSILE","EMBASSY","PISTOL","SCIENTIST","KIWI","LOG","GERMANY","HAND","DISEASE","BED","SPY","PRINCESS","DANCE","CARROT","STATE","RACKET","GENIUS","THIEF","TRUNK","AMERICA","NOVEL","WALL","BERRY","ATLANTIS","KETCHUP","PLOT","ENGLAND","TEMPLE","MAPLE","MAIL","AFRICA","OPERA","TOWER","NIGHT","POOL","ROBIN","BAND","DUCK","HOOD","CARD","COURT","TIE","DIAMOND","CROSS","NET","FRANCE","DATE","COTTON","POINT","OLIVE","MATCH","BALL","MERCURY","BOW","FIGHTER","SHOP","SLIP","KNIGHT","PASS","STADIUM","FOOT","LIMOUSINE","CONTRACT","PLATE","MOUSE","HORSESHOE","ORGAN","KNIFE","CELL","WATCH","ARM","ROSE","MODEL","THEATER","HOLE","POST","LIGHT","TRIANGLE","BELL","LEPRECHAUN","KID","POLICE","ROCK","SCALE","GHOST","SHIP","MEXICO","CLOAK","STRAW","CALF","SHARK","DRAFT","HAWK","PRESS","VAN","ICE CREAM","BUCK","PHOENIX","FORCE","BOOM","LAB","RULER","PILOT","LASER","DEATH","LOCK","SPELL","HOSPITAL","AMBULANCE","WEB","PLASTIC","KEY","OCTOPUS","THUMB","TEACHER","PALM","CRANE","HELICOPTER","BOTTLE","FENCE","KANGAROO","JACK","EUROPE","SCORPION","MUG","SUIT","MICROSCOPE","ENGINE","WAVE","CENTAUR","STREAM","HEAD","MAMMOTH","DAY","KING","PAN","POLE","SUPERHERO","REVOLUTION","PIT","GAS","GLASS","WASHINGTON","TURKEY","QUEEN","FILE","CRICKET","WELL","FAIR","TOOTH","STAFF","BILL","SHOT","WASHER","LAP","AMAZON","SPACE","FIGURE","MASS","CHINA","SQUARE","BUFFALO","CHEST","DOG","NAIL","BERLIN","HORSE","CHARGE","SUB","INDIA","TRAIN","TELESCOPE","PLANE","PARACHUTE","PIANO","BOX","PLATYPUS","CLUB","SHOE","SERVER","CENTER","CHAIR","SOUND","COMPOUND","FILM","CROWN","OLYMPUS","BACK","NOTE","PART","TAP","ICE","SOCK","ALPS","ROOT","SATELLITE","ANGEL","CRASH","GOLD","BUG","PASTE","ROBOT","ROW","SPIKE","CODE","LOCH NESS","FORK","SWING","PORT","CIRCLE","UNICORN","TIME","LINK","FLUTE","TORCH","BEIJING","EAGLE","BARK","SNOW","IVORY","PIPE","PANTS","SOLDIER","VACUUM","WITCH","PUPIL","SMUGGLER","ORANGE","AZTEC","UNDERTAKER","SCUBA DIVER","PYRAMID","POISON","STRING"],"Codenames: Duet":["BUCKET","DASH","WALRUS","LEMONADE","FLAG","CAVE","ANT","VAMPIRE","TATTOO","RANCH","LOCUST","RIFLE","VIKING","BLIZZARD","MAKEUP","POTTER","TASTE","BLUES","GOLF","PINE","DOLL","LUNCH","SKATES","CRAFT","PEW","PEN","BUTTER","PILLOW","CASTLE","SCROLL","DISK","DRONE","HAMMER","FLOOR","JAIL","BREAK","LACE","POCKET","TIN","FLAT","CUCKOO","HAIR","MUD","JEWELER","HERCULES","BLADE","MOSQUITO","PEA","ICELAND","FROST","COACH","POTATO","SNAP","CAKE","TURTLE","CHRISTMAS","CHERRY","MOSES","TEAM","CANE","BULB","BISCUIT","SPRAY","PEPPER","PUPPET","MILL","MARACAS","FOAM","YELLOWSTONE","ICE AGE","MEMORY","JUMPER","COMB","GLASSES","PIZZA","SOAP","BIG BEN","SLED","VIOLET","BUBBLE","SPOON","ONION","GENIE","TANK","SHERLOCK","BAY","DRYER","BROTHER","MESS","LADDER","SCARECROW","NOTRE DAME","KILT","SHED","BONSAI","WONDERLAND","SLING","SQUIRREL","HOSE","MARATHON","EAR","POPCORN","GOLDILOCKS","EGG","BIKINI","KISS","FIDDLE","LEATHER","COAST","ASTRONAUT","BLACK HOLE","SAND","DREAM","STETHOSCOPE","BABY","TIPI","MILE","JUDGE","VOLCANO","NYLON","GUITAR","BEE","GUM","PENNY","SMOKE","HELMET","KITCHEN","SAHARA","RECORD","SCRATCH","WING","AXE","PAINT","SKULL","TEAR","CRYSTAL","NEWTON","PITCHER","LEAF","ASH","COLLAR","WINDOW","LUMBERJACK","LOVE","SOUP","INK","SALOON","RIVER","SPHINX","SHERWOOD","LIGHTNING","GOAT","BATH","CLEOPATRA","SALAD","BRASS","WHISTLE","MOUNTIE","SISTER","DIRECTOR","LETTER","CAPTAIN","POLISH","CRAB","BRICK","EINSTEIN","ANTHEM","MOHAWK","CAMP","UNIVERSITY","JOKER","COW","SHOOT","DOLLAR","MINUTE","RICE","ARMY","PENTAGON","BIG BANG","COLUMBUS","CLOCK","BLACKSMITH","JOAN OF ARC","ZOMBIE","BUTTERFLY","WHEEL","DENTIST","CHEESE","EARTH","NAPOLEON","TEXAS","STREET","FEVER","FOG","RAZOR","CABLE","GOVERNOR","COWBOY","KING ARTHUR","BRIDE","CAESAR","GREENHOUSE","DUST","SLIPPER","TROLL","QUACK","VOLUME","SKI","RUSSIA","PEARL","PACIFIC","BOIL","EASTER","QUARTER","MICROWAVE","SHOWER","FUEL","EARTHQUAKE","CROW","MAGICIAN","NERVE","THUNDER","MUSKETEER","GLACIER","POWDER","ROLL","WEREWOLF","CHAIN","SECOND","BUNK","BEARD","STEAM","CLOUD","VALENTINE","STICKER","SNAKE","BATTLESHIP","BATTLE","MAP","VIRUS","TORNADO","BICYCLE","PARROT","HAMBURGER","SIGN","NOAH","WIZARD","PARADE","APRON","CURRY","BEAM","DESK","SADDLE","RAT","BACON","RUBBER","PATIENT","SAW","OASIS","VENUS","BENCH","RIP","ST. PATRICK","ROAD","CHALK","GYMNAST","METER","RODEO","SILK","COFFEE","JOCKEY","SMOOTHIE","SALSA","SAIL","WOOL","TUNNEL","GARDEN","SMELL","DOOR","WOOD","COUNTRY","ELEPHANT","MARK","BLIND","SQUASH","MOTHER","DRAWING","RAIL","MISS","PURSE","IGLOO","LIP","MONKEY","BOWLER","SWEAT","DRIVER","DELTA","SALT","SLOTH","ATTIC","STEEL","SHORTS","STORM","WHEELCHAIR","STABLE","GEAR","BALLOON","BARBECUE","TUTU","BASS","HAWAII","MUSTARD","MEDIC","JELLYFISH","ALASKA","BEER","MONA LISA","FARM","CRUSADER","TRICK","BOWL","LAUNDRY","POLO","TOAST","ARMOR","TEA","REINDEER","SUMO","BREAD","ACE","RUST","WISH","KNOT","CONE","BRAZIL","HIDE","HALLOWEEN","SANTA","BRAIN","HIT","HOUSE","PEANUT","SHELL","TIP","SWORD","MIRROR","PADDLE","GROOM","PAGE","POP","BEAN","CHIP","COMET","PIG","STORY","MAGAZINE","RAINBOW","SACK","RAM","SUGAR","SUN","PAD","BANANA","RADIO","DRESSING","SWAMP","MANICURE","FLOOD","STAMP","WAGON","TIGER","COMPUTER","WAITRESS","PEACH","HOMER","BOXER","EDEN","SLEEP","MINOTAUR","WEDDING","KUNG FU","MUMMY","STEP","SPURS","GANGSTER","MILK","FROG","SHAMPOO","TUXEDO","SHEET","AVALANCHE","ROPE","BOSS","KICK","BOOK","SPIRIT","SHOULDER","ANCHOR","NOSE","DRUM"]},"de":{"Codenames":["ROULETTE","DRACHE","KRIEG","HONIG","BOMBE","KASINO","WOLKENKRATZER","SATURN","ALIEN","PEITSCHE","ANTARKTIS","SCHNEEMANN","KONZERT","SCHOKOLADE","JET","MILLION\xc4R","DINOSAURIER","PIRAT","HUPE","PINGUIN","SPINNE","GESCHOSS","BOTSCHAFT","PISTOLE","KRANKHEIT","SPION","PRINZESSIN","GENIE","DIEB","OPER","RITTER","STADION","LIMOUSINE","GEIST","LASTER","LAKRITZE","LASER","TOD","KRANKENHAUS","SKELETT","OKTOPUS","HUBSCHRAUBER","K\xc4NGURU","MIKROSKOP","ZENTAUR","SUPERHELD","TELESKOP","FALLSCHIRM","SCHNABELTIER","OLYMP","SATELLIT","ENGEL","ROBOTER","EINHORN","HEXE","BERGSTEIGER","TAUCHER","GIFT","BR\xdcCKE","FEUER","TISCH","WAL","MOND","FISCH","DOKTOR","KIRCHE","G\xdcRTEL","ZITRONE","WIND","L\xd6WE","AUGE","LUFT","HASE","BANK","GRAS","AUFLAUF","ZWERG","WALD","AUTO","BURG","APFEL","\xd6L","KOCH","B\xc4R","KATZE","LEBEN","GL\xdcCK","RIESE","GESICHT","STRAND","HOTEL","WASSER","PAPIER","WURM","ANWALT","FORSCHER","TANZ","KAROTTE","KETCHUP","NACHT","MEER","FUSS","MAUS","MESSER","THEATER","POLIZEI","SCHIFF","PILOT","DAUMEN","LEHRER","FLASCHE","TAG","K\xd6NIG","GLAS","K\xd6NIGIN","ZAHN","HUND","PFERD","SCHUH","STUHL","KRONE","EIS","GOLD","GABEL","ZEIT","FL\xd6TE","FACKEL","SCHNEE","ELFENBEIN","SOLDAT","PYRAMIDE","SCHNUR","STERN","RING","HORN","HERZ","BALL","KANAL","NADEL","LINIE","KORB","BLAU","TASTE","SCHIRM","SPIEL","FLECK","KNOPF","MUND","AKT","HIMALAJA","BETT","WAND","TURM","KARTE","TOR","RAUTE","KREUZ","NETZ","PUNKT","PASS","FL\xc4CHE","LOCH","GLOCKE","KRAFT","SCHLOSS","MASCHINE","WELLE","STROM","HAUPT","POL","MITTEL","JAHR","LEIM","SEITE","BAU","KREIS","BINDUNG","UHR","NEW YORK","AUSTRALIEN","BAYERN","TOKIO","\xc4GYPTEN","LONDON","MORGENSTERN","MOSKAU","CHINA","SHAKESPEARE","HOLLYWOOD","GRIECHENLAND","ROM","HAND","NINJA","BR\xd6TCHEN","KIWI","DEUTSCHLAND","STAAT","AMERIKANER","ATLANTIS","ENGLAND","OSTEN","AFRIKA","ALPEN","FRANKREICH","WINNETOU","MEXIKO","VEREIN","FEDER","HAMBURGER","BERLINER","ADLER","EUROPA","LOCH NESS","PEKING","INKA","BECKEN","OPTIK","STRASSE","ESSEN","SIEGEL","BART","BL\xdcTE","MOOS","ABGABE","BAHN","TAFEL","BAR","QUARTETT","TORTE","TAU","CHEMIE","ARM","LINSE","KIPPE","MELONE","FUCHS","BOOT","KORN","BANDE","MAL","BATTERIE","DAME","PFLASTER","ERDE","MESSE","TON","R\xd6MER","STAMM","BRAND","SCHILD","LIPPE","MINE","KOKS","L\xc4UFER","BUND","ELF","IRIS","GANG","PFEIFE","KIEL","STAR","LEITER","LADUNG","BAUER","STRUDEL","BREMSE","HAHN","KAPELLE","STRAUSS","SATZ","GRUND","KATER","MATTE","KERZE","WIRTSCHAFT","DICHTUNG","GEHALT","CHOR","FEIGE","ERIKA","MANGEL","ROLLE","STOCK","DIETRICH","SCHULE","ENTE","SCHOTTEN","MARK","LAGER","FALL","JURA","NIETE","GESCHIRR","KNIE","DROSSEL","HERING","SEKRET\xc4R","DRUCKER","BLINKER","STIFT","FL\xdcGEL","SCHEIN","FUNKEN","BOCK","PO","ATLAS","STEMPEL","SCHELLE","LEUCHTE","UMZUG","FINGER","RIEGEL","MAST","K\xc4FER","BOGEN","WANZE","SCHEIBE","SCHALTER","SCHIMMEL","DEMO","BEIN","B\xd6RSE","TAKT","FLIEGE","J\xc4GER","KUNDE","NUSS","SCHLANGE","TEMPO","BACH","VORSATZ","GERICHT","KAMM","BUSCH","PLATTE","DECKE","R\xdcCKEN","MALER","HEIDE","BOXER","REIF","AUSDRUCK","ZUG","KIEFER","WASHINGTON","MINI","GUT","KOHLE","GRAD","BRAUSE","VIERTEL","RUTE","BULLE","FIGUR","FEST","ZOLL","LOGE","MUTTER","RIEMEN","VERBAND","HUT","WATT","HORST","LUXEMBURG","BIRNE","NOTE","FILM","ABSATZ","BLATT","MANDEL","INDIEN","FESSEL","SCHALE","AUFZUG","QUELLE","HARZ","WURF","GOLF","ROST","M\xdcHLE","NAGEL","TOAST","ZYLINDER","MUSCHEL","W\xdcRFEL","WEIDE","KAPIT\xc4N","L\xd6SUNG","RASEN","ROCK","KREBS","FLUR","STEUER","ZELLE","BARREN","L\xd6FFEL","FUTTER","SCHUPPEN","ORANGE","PENSION"],"Codenames: Duett":["ABFALL","SONNTAG","K\xdcRBIS","ACKER","PULVER","DONAU","N\xdcRNBERG","PARADE","AMPEL","PANDA","PARF\xdcM","KOREA","GESETZ","DAVID","SALZ","ANKER","FELGE","BR\xdcSSEL","HALS","JOKER","AUSBRUCH","KOHL","BACKE","MARIONETTE","BALKAN","SCHRANK","BAND","KAISER","BALLETT","BERMUDA","BESEN","BESPRECHUNG","BESTECK","BIKINI","DOM","BLECH","BLEI","MAUL","FLORENZ","BLUME","ZAR","BODEN","SCHLEUDER","BOX","UNTERTASSE","LAMA","GEHIRN","ELEMENT","ST\xdcCK","B\xdcHNE","HEER","NEON","CLIP","CLOWN","DACH","ANSCHLAG","KABEL","DIAMANT","RAUM","DIRIGENT","DIVISION","BLITZ","NORDPOL","DORN","DRACULA","ZEPPELIN","EINLAGE","KOMPASS","UHU","ENGL\xc4NDER","EXPEDITION","SPEICHE","FAHNE","FALKE","QUARK","FELD","BUS","STAFFEL","FETT","FIEBER","FINGERHUT","PENTAGON","FLEDERMAUS","BRASILIEN","FORST","LOKAL","FRANKFURT","F\xdcLLER","HOLLAND","KONTO","GENERAL","KLASSE","BUDE","GEWEHR","BROT","WIRBEL","GOETHE","MITTELMEER","LAPPEN","HAFEN","HAI","HALLE","AUGUST","HANDLUNG","KLAMMER","HAWAII","S\xc4BEL","HELD","MURMEL","HITZE","KEHLE","WITWE","HOBEL","GALGEN","IGEL","MATROSE","ISLAND","JACHT","JAPAN","KUTSCHE","BABY","JUMBO","GAS","R\xdcSTUNG","KAFFEE","KAHN","BILD","KAMMER","KANADA","KANTE","KARIBIK","SATTEL","KEGEL","JUPITER","GESCHENK","KERN","JERUSALEM","KLAPPE","INSEL","GABE","KNOCHEN","BAD","K\xd6LN","GESELLE","LUNGE","KONSTANZ","HAUPTMANN","KOPF","ARKTIS","KOST\xdcM","KRALLE","SUPPE","K\xdcCHE","HENKEL","AIDA","NAPOLEON","K\xdcSTE","H\xd6HLE","MANN","GITTER","SITZ","LAUF","HIRSCH","KULI","GRILL","LEIPZIG","MIETE","LENKER","TEE","LICHT","ZIMMERMANN","TRIEB","LOKOMOTIVE","SILBER","LIFT","LUTHER","SCHL\xdcSSEL","LIBELLE","GOTT","GROSSVATER","ELLE","PRAG","MARS","LEHRE","BLUT","QUARZ","STELLE","MEN\xdc","LEITUNG","MOSAIK","KELCH","NEBEL","FACH","OASE","ALUMINIUM","BELGIEN","LAUS","KLEID","GRABEN","HECHT","C\xc4SAR","ACHSE","VORHANG","NEPTUN","NERV","NERZ","ALPHA","NUMMER","OSTSEE","AMT","OPERATION","RABATT","DIELE","REGEN","PAPAGEI","PLUTO","MADONNA","REGAL","PARK","PASSAGE","SURFER","PAUSE","PAZIFIK","PECH","PEDAL","PERIODE","PEST","PFANNE","PFLANZE","PFLUG","NEGATIV","PLASTIK","MAURITIUS","POLO","PONY","ROMAN","STIEL","PREIS","PRESSE","URTEIL","PUDEL","AGENT","PYTHON","ASSISTENT","QUALLE","HERBST","SCHOLLE","STREICH","RACHEN","POST","SCHAF","RAPUNZEL","RAT","SCHUSTER","SCHMALZ","SALAT","REICH","REIFEN","RENTIER","GARTEN","RINDE","TANTE","ROSA","R\xdcBE","RUM","RUSSLAND","FOTO","TR\xc4GER","SACK","ANFANG","PAUKE","SAMT","KASSETTE","ZECHE","S\xc4ULE","S\xc4URE","ZEITUNG","SCHATTEN","KONGO","ZWEIG","WURZEL","SCHIENE","SCHLEPPER","RAHMEN","SCHERE","WIESEL","MARINE","FUSSBALL","ST\xc4RKE","UNTERGANG","MAMMUT","BRILLE","DELFIN","SCHWAMM","SCHWEIF","SCHWEIZ","SCHWIMMER","SICHEL","S\xc4GE","SCHLIFF","AMBOSS","SKORPION","SOHLE","SOLIT\xc4R","TIBET","SPRUNG","SPEICHER","ZUCKER","ALBUM","KREUZUNG","STEIN","STAHL","FASSUNG","SCHNEIDER","STAUB","RAD","BLOCK","STIER","STIMME","WAHL","SAND","STRICK","MANTEL","STUDENT","STURM","T\xdcR","PUCK","TANGO","TASCHE","TASSE","TASTATUR","TAUBE","WOHNUNG","RHEIN","SEE","MEDIZIN","STORCH","TITANIC","ARZT","ZOPF","FERIEN","TRANSPORTER","TRESOR","BAUM","TRUPPE","FLANKE","SONNE","DYNAMIT","QUADRAT","LABYRINTH","VATIKAN","MUSKETIER","BUG","SPIELER","SCHNABEL","FENSTER","MAGNET","STAND","WATTE","WENDE","WETTER","SCHATZ","SCHAUM","VOGEL","STALL","WOLF","WOLKE","SIZILIEN","TEUFEL","ZEBRA","SCHNITZEL","VITAMIN","GIPS","ZONE","MASS","WAAGE","KURS","TEMPERATUR","AFFE","HEFT","WAGEN","GEBURTSTAG","SPIEGEL","SET","STUNDE","TORNADO","WIENER","VERKLEIDUNG","BORD","AMAZONAS","TENOR","PAPPE","SCHONER","ACHT","PLAN","ORGEL","SCHMIED","TOUR","LEINE","SPANGE"]},"it":{"Nome in Codice":["ROULETTE","DRAGO","GUERRA","MIELE","BOMBA","CASINO\u2019","GRATTACIELO","SATURNO","ALIENO","FRUSTA","ANTARTIDE","PUPAZZO DI NEVE","CONCERTO","CIOCCOLATO","JET","MILIONARIO","DINOSAURO","PIRATA","TROMBA","PINGUINO","RAGNO","MISSILE","AMBASCIATA","PISTOLA","MALATTIA","SPIA","PRINCIPESSA","GENIO","LADRO","LEGNO","CAVALIERE","STADIO","LIMOUSINE","FANTASMA","FURGONE","GELATO","LASER","MORTE","OSPEDALE","AMBULANZA","PIOVRA","ELICOTTERO","CANGURO","MICROSCOPIO","CENTAURO","ARRESTO","TELESCOPIO","PARACADUTE","ORNITORINCO","OLIMPO","SATELLITE","ANGELO","ROBOT","UNICORNO","STREGA","BECCHINO","SOMMOZZATORE","VELENO","PONTE","FUOCO","TAVOLA","BALENA","LUNA","PESCE","DOTTORE","CHIESA","CINTURA","INFERMIERA","VENTO","LEONE","OCCHIO","ARIA","CONIGLIO","BANCA","ERBA","VESTITO","NANO","FORESTA","MACCHINA","GUANTO","MELA","OLIO","CUOCO","ORSO","GATTO","VITA","FORTUNA","GIGANTE","FACCIA","SPIAGGIA","HOTEL","ACQUA","CARTA","VERME","AVVOCATO","SCIENZIATO","DANZA","CAROTA","KETCHUP","NOTTE","COTONE","PIEDE","ISOLA","COLTELLO","TEATRO","POLIZIA","NAVE","PILOTA","POLLICE","INSEGNANTE","BOTTIGLIA","GIORNO","RE","VETRO","REGINA","DENTE","CANE","CAVALLO","SCARPA","SEDIA","CORONA","GHIACCIO","ORO","FORCHETTA","TEMPO","CASA","TORCIA","NEVE","AVORIO","SOLDATO","PIRAMIDE","CORDA","STELLA","ANELLO","CORNO","CUORE","BLOCCO","CANALE","AGO","LINEA","COPERTA","BANCO","CAMBIO","SCHERMO","PARTITA","BASE","POSTA","BOCCA","ETICHETTA","MANO","LETTO","MURO","TORRE","LETTERA","CRAVATTA","DIAMANTE","CROCE","RETE","PUNTO","PASSO","PIATTO","BUCO","CAMPANA","FORZA","CHIAVE","MOTORE","ONDA","FLUSSO","TESTA","POLO","CENTRO","CAPO","PASTA","BRACCIO","CODICE","CERCHIO","CAMPO","CANNA","NAPOLI","AUSTRALIA","BERMUDA","TOKYO","EGITTO","LONDRA","ZUCCA","MOSCA","SVIZZERA","DANTE","HOLLYWOOD","GRECIA","ROMA","HIMALAYA","NINJA","SPAGHETTO","PINOCCHIO","GERMANIA","STATO","AMERICA","ATLANTIDE","ITALIA","PATATA","AFRICA","ROSPO","FRANCIA","ZOCCOLO","FOLLETTO","MESSICO","LUPO","SCORPIONE","SQUALO","INDIA","ALPI","EUROPA","PECHINO","CONTRABBANDIERE","AQUILA","VENEZIA","TORTA","PESCA","VERDE","BERLINO","RISO","VERSO","VIOLA","INDICE","BACINO","SCAMPO","FATTURA","TASSO","CALCIO","RAGGIO","BATTUTA","GRADO","COPPA","LIMONE","OPERA","STIVALE","CORSO","STAGNO","RADICE","BATTERIA","SPINA","PIANTA","AGENTE","IMPOSTA","MIGLIO","FALANGE","CERA","LIRA","COLLO","MORA","CAPITALE","DADO","VOLO","RITMO","ROSA","GIOVE","COLONNA","COLPO","STORIA","LAMPO","OMBRA","VINO","MINA","TERRA","BUSTA","RAMO","MAZZO","BRONZO","METRO","PESO","TURNO","CICLO","RUOTA","GIOCO","CONDUTTORE","SCUOLA","SCALA","NOCE","ZECCA","MONTE","MONETA","FUSTO","TRAMA","LIBRO","CORTE","SACCO","TEMPIO","ACCORDO","CODA","SUPEREROE","INCONTRO","PALLA","BOTTE","CACCIA","NEGOZIO","CELLA","APE","MODELLO","PANE","MANTO","BANDA","RIGA","GRU","SPIRITO","MAGIA","POLLO","TAZZA","YETI","MERCURIO","FIGURA","FETTA","ARCO","GAS","FIERA","ORGANO","ERRORE","GUARNIZIONE","SQUADRA","SPAZIO","TIRO","MASSA","TRIANGOLO","QUADRO","MAIALE","CARICA","PETTO","AEREO","CASSA","GIRO","SUONO","AREA","PERA","NOTA","PARTE","SALSA","FILA","MOSSA","ANNO","NATALE","CHIODO","LINGUA","SENO","SALE","CATENA","SANGUE","CALICE","DISCO","DIAVOLO","VIAGGIO","RIVOLUZIONE","BORSA","TUBO","ASSE","SCHEDA","POSIZIONE","MUTANDE","VITE","BAFFO","PECORA","GUARDIA","ZUCCHERO","NEW YORK","ROMBO","PIEGA","PORTA","FORO","MARMO","PRANZO","CAFF\xc8","COLOMBO","PARCO","PIANO","AMO","PROFILO","TRENO","TOPO","FILM","FREDDO","BAR","CAPELLI","RESISTENZA","PIASTRA","ELEFANTE","PIPA","OMBELICO","BOTTONE","TESORO","ALBERO","UOVO","VUOTO","RADIO","ENERGIA","PORTO","CORNICE","CIMICE","ASSASSINO","FLAUTO","SPADA","KIWI"],"Nome in Codice: Duetto":["RICERCA","INGREDIENTE","FAZIONE","SOSPETTO","BALLO","SALUTE","MOVIMENTO","ANCA","STRUSCIO","MARGHERITA","FRANA","BECCO","ALIANTE","PEPERONE","DEPOSITO","SOMMERGIBILE","INCISIONE","FUNIVIA","MOSCHETTIERE","PIPISTRELLO","SCHELETRO","BALESTRA","COCOMERO","ABBONAMENTO","SERRA","INVASIONE","ORACOLO","CROCEVIA","GIARDINO","LAVORATORE","PROCIONE","GUARDIANO","CORIANDOLO","ALVEARE","SCARABEO","CONDIZIONE","CARAMELLA","PRATERIA","VORTICE","LAVANDA","SFINGE","CRISALIDE","TALLONE","MAIONESE","CORALLO","ELMO","CORNAMUSA","LABIRINTO","FIOCINA","SCIVOLO","LONTRA","CALCOLO","TIFO","PESTE","TRAMPOLINO","RIFLESSO","APERITIVO","CONTRATTO","STIPENDIO","CIOTOLA","RUGIADA","PROMONTORIO","ALABARDA","GRAFFITO","GIRANDOLA","CARBONE","FOSSILE","RICETTA","CONCLAVE","TRIBUTO","PROFEZIA","PELLEGRINO","DATTERO","OASI","CASCATA","MAGMA","RICOVERO","TRAMONTO","MANTELLO","SOTTERRANEO","CARBURANTE","CANNELLA","COLORE","BILIARDO","CONSOLE","EPOCA","STAMPANTE","LEGIONE","BARBABIETOLA","CORTECCIA","EVASIONE","RONDA","FILETTO","NETTURBINO","CALENDARIO","STRUMENTO","BUSSOLA","COMANDO","REGISTRATORE","MICROFONO","CASSETTA","CUSTODIA","ARMONIA","OTTICA","APPLICAZIONE","RIMOZIONE","TAMPONE","SCOTCH","PLAGIO","BREVETTO","BRUCO","ZATTERA","PALMA","POLMONE","CAPPUCCIO","PRISMA","MESTOLO","ORBITA","APPLAUSO","GOMITO","PELUCHE","CARTUCCIA","CADAVERE","BINOCOLO","CONVERSAZIONE","MITRA","PINZA","PELLICOLA","CANZONE","ARAZZO","CHITARRA","TIMPANO","CIAMBELLA","CARIE","PETTEGOLEZZO","SCORTA","PALA","MANISCALCO","INIEZIONE","FIDUCIA","BAGAGLIO","CILINDRO","BOMBETTA","TANA","CRICETO","ATRIO","SALA","CAMERA","PROVERBIO","VERRUCA","SBARRA","POLENTA","POLTIGLIA","PROCREAZIONE","ELEGIA","SUPPORTO","ESORCISMO","PAZIENZA","TESSUTO","VANGA","PICCONE","ANTENNA","BIGLIETTO","ACERO","CAVO","LUCE","FOTOGRAFIA","COLLA","BURATTINO","PAGLIACCIO","ESPLORAZIONE","BRECCIA","COFANO","DIVIETO","DATA","QUANTITA\u2019","PREZZO","ARTICOLO","FASE","BOLLA","BELLEZZA","VASO","ATTACCO","DIFESA","ONORE","ACCUSA","GOVERNO","MINISTRO","CULTO","CIFRA","ACCENSIONE","INCENSO","BASTONE","VELA","TIMONE","NASO","ORECCHIO","INSERIMENTO","DISTACCO","ORRIBILE","PROVOLONE","ESPLOSIONE","DOGANA","TOGA","VICHINGO","MISCELA","TORRONE","TORBA","FRONDA","FULCRO","STALATTITE","PUREA","DILATAZIONE","POLPA","ORPELLO","OSTE","SCIALLO","GRIMALDELLO","CRICCA","RISVOLTO","FINESTRA","BRANDA","PELLICCIA","RUNA","INQUINAMENTO","DIGA","TOPAZIO","BALSAMO","PRESTIGIO","BAMBINO","ARRIVO","APPROSSIMAZIONE","SOSTA","PROMOZIONE","VIOLINO","TOTALE","PREVENTIVO","IMPERO","SCUDO","SEMAFORO","INCENDIO","TRAGUARDO","IMPRESA","SALVAGENTE","MULTA","TURISTA","CONCHIGLIA","SUPERFICIE","MULINO","FATTORIA","MATERASSO","VITAMINA","DOLORE","RIPRESA","PRETE","PASTICCIO","MIRACOLO","URAGANO","SILICONE","CESTINO","VENDETTA","TURBANTE","SPORTELLO","PINTA","ICONA","DISAGIO","QUAGLIA","OCCHIELLO","GHIAIA","CAMICIA","SITUAZIONE","MOLO","PUBBLICITA\u2019","FASCIA","DIVISIONE","RISPOSTA","DOMANDA","CLESSIDRA","FRONTE","NOVITA\u2019","COPIA","SETTORE","FINALE","FIRENZE","TORINO","GERUSALEMME","NAPOLEONE","CESARE","AUGUSTO","CLEOPATRA","CRISTO","SOSIA","SIMPOSIO","ERCOLE","CASANOVA","NARCISO","MECENATE","MENTORE","CICERONE","GIUDA","MADONNA","GITA","AZZURRO","NERO","ROSSO","BIANCO","DANNO","PRESIDENTE","MACHIAVELLI","PICCHETTO","SCOMMESSA","TENDA","DUETTO","DITO","OROLOGIO","VALUTA","SCATOLA","PLASTICA","ASSOCIAZIONE","COMPAGNIA","BILANCIA","MERLO","CALZA","PROVINCIA","REGIONE","VOLUME","CUNEO","GORGONZOLA","TOMA","ZUPPA","FRANCO","TRACCIA","TRINCEA","FRATELLO","CARTONE","GALERA","ADESIVO","CARRO","MANCIA","IDEA","PARENTELA","BRINDISI","SERRATURA","BUIO","ARREDAMENTO","PERDONO","FLAGELLO","MEDAGLIA","PODIO","TOMBINO","FIANCO","SCONFITTA","SAMURAI","STRESS","RILASSAMENTO","GRIGLIA","FOCA","SIMBOLO","VAPORE","POZZA","CATTEDRALE","SOGGIORNO","MARINAIO","CERIMONIA","PAGINA","CREATURA","FORNO","LEGGE","ARMADIO","INFERNO","PARADISO","PURGATORIO","RELIGIONE","GUFO","SPALLA","RIFIUTO","URGENZA","ESTRAZIONE","ESSENZA","RIDUZIONE","PUNTURA","SACRIFICIO","TRAPANO","CAMPIONE","DOCUMENTO","INGANNO","PULIZIA","CISTERNA","FERMATA","LENTE","INVENZIONE","SORGENTE","PRATO","SPEZIA","MARSALA","CREMA","GEMMA","FERMO","APERTURA","CRANIO"]},"uk":{"\u041a\u043e\u0434\u043e\u0432\u0456 \u0456\u043c\u0435\u043d\u0430":["\u0410\u0424\u0420\u0418\u041a\u0410","\u0424\u041e\u041a\u0423\u0421","\u041f\u041e\u0412\u0406\u0422\u0420\u042f","\u041f\u0420\u0418\u0411\u0423\u041b\u0415\u0426\u042c","\u0410\u041b\u042c\u041f\u0418","\u041a\u0410\u0412\u0410","\u041a\u0410\u0420\u0415\u0422\u0410","\u0410\u041c\u0415\u0420\u0418\u041a\u0410","\u0410\u041d\u0413\u0415\u041b","\u0410\u041d\u0422\u0410\u0420\u041a\u0422\u0418\u0414\u0410","\u042f\u0411\u041b\u0423\u041a\u041e","\u041f\u041b\u0415\u0427\u0415","\u0410\u0422\u041b\u0410\u041d\u0422\u0418\u0414\u0410","\u0410\u0412\u0421\u0422\u0420\u0410\u041b\u0406\u042f","\u0428\u0415\u0412\u0427\u0415\u041d\u041a\u041e","\u0421\u041f\u0418\u041d\u0410","\u041c\'\u042f\u0427","\u0413\u0420\u0423\u041f\u0410","\u0411\u0410\u041d\u041a","\u0428\u0423\u041c","\u041a\u0423\u0425\u041d\u042f","\u041a\u0406\u0428\u041a\u0410","\u0422\u0423\u0420","\u041f\u041b\u042f\u0416","\u0412\u0415\u0414\u041c\u0406\u0414\u042c","\u041f\u0423\u041d\u041a\u0422","\u041b\u041e\u0416\u0415","\u041f\u0415\u041a\u0406\u041d","\u0414\u0417\u0412\u0406\u041d","\u0420\u0415\u041c\u0406\u041d\u042c","\u0411\u0415\u0420\u041b\u0406\u041d","\u0425\u041e\u0420\u0422\u0418\u0426\u042f","\u041b\u042f\u0429","\u0414\u0412\u0415\u0420\u0406","\u0411\u041b\u041e\u041a","\u0414\u041e\u0428\u041a\u0410","\u0411\u0410\u041b","\u0411\u041e\u041c\u0411\u0410","\u041f\u0420\u041e\u0421\u041f\u0415\u041a\u0422","\u0421\u0425\u041e\u0414\u0418\u041d\u041a\u0410","\u041a\u0406\u0421\u0422\u041a\u0410","\u041f\u041b\u042f\u0428\u041a\u0410","\u041f\u0410\u0421\u0410\u0416","\u0417\u0418\u041c\u0410","\u041c\u0406\u0421\u0422","\u0413\u0412\u041e\u0417\u0414\u0418\u041a\u0410","\u0421\u041a\u041b\u0410\u0414","\u0414\u041e\u0420\u041e\u0413\u0410","\u041d\u0415\u0411\u041e","\u0412\u0418\u041d\u041e","\u041a\u041d\u041e\u041f\u041a\u0410","\u041f\u0420\u041e\u041c\u0406\u041d\u042c","\u041a\u0410\u041d\u0410\u0414\u0410","\u0428\u0410\u041f\u041a\u0410","\u0413\u0420\u0410\u0414","\u041c\u0410\u0428\u0418\u041d\u0410","\u041a\u0410\u0420\u0422\u0410","\u041c\u041e\u0420\u041a\u0412\u0410","\u041a\u0410\u0417\u0418\u041d\u041e","\u041a\u041e\u041c\u0410\u041d\u0414\u0410","\u041a\u0406\u0422","\u041f\u041e\u041b\u0406\u0421","\u041a\u0415\u041d\u0422\u0410\u0412\u0420","\u0426\u0415\u041d\u0422\u0420","\u041a\u0420\u0406\u0421\u041b\u041e","\u0411\u0410\u0419\u041a\u0410","\u041c\u0423\u0417\u0418\u041a\u0410","\u041a\u0406\u0412\u0406","\u0427\u041b\u0415\u041d","\u0410\u041a\u0426\u0406\u042f","\u041a\u0418\u0422\u0410\u0419","\u0428\u041e\u041a\u041e\u041b\u0410\u0414","\u0426\u0415\u0420\u041a\u0412\u0410","\u041a\u041e\u041b\u041e","\u0428\u0410\u0419\u0411\u0410","\u0420\u0423\u0427\u041a\u0410","\u041a\u041b\u0423\u0411","\u041a\u041e\u0414","\u0424\u041e\u041d","\u041e\u0421\u0422\u0420\u0406\u0412","\u0412\u0423\u0425\u041e","\u041a\u041e\u041d\u0426\u0415\u0420\u0422","\u0410\u0412\u0422\u041e\u041c\u0410\u0422","\u041f\u041b\u0410\u0422\u0410","\u041a\u0423\u0425\u0410\u0420","\u0422\u0410\u041a\u0421\u0410","\u0411\u0410\u0412\u041e\u0412\u041d\u0410","\u0421\u0423\u0414","\u041a\u041e\u0420\u041f\u0423\u0421","\u041a\u0420\u0410\u041d","\u0410\u0412\u0410\u0420\u0406\u042f","\u041b\u042e\u0414\u0418\u041d\u0410","\u0425\u0420\u0415\u0421\u0422","\u041a\u041e\u0420\u041e\u041d\u0410","\u0426\u0418\u041a\u041b","\u0423\u041a\u0420\u0410\u0407\u041d\u0410","\u0422\u0410\u041d\u0415\u0426\u042c","\u041c\u0410\u0422","\u0414\u0415\u041d\u042c","\u0421\u041c\u0415\u0420\u0422\u042c","\u041a\u041e\u041b\u041e\u0414\u0410","\u041f\u0406\u0421\u041e\u041a","\u0414\u0406\u0410\u041c\u0410\u041d\u0422","\u041a\u0423\u041b\u041e\u041d","\u0414\u0418\u041d\u041e\u0417\u0410\u0412\u0420","\u0425\u0412\u041e\u0420\u041e\u0411\u0410","\u041b\u0406\u041a\u0410\u0420","\u0421\u041e\u0411\u0410\u041a\u0410","\u0421\u0415\u041a\u0426\u0406\u042f","\u0414\u0420\u0410\u041a\u041e\u041d","\u0421\u0423\u041a\u041d\u042f","\u0413\u0420\u0418\u0424","\u0428\u0410\u0425","\u0410\u041a\u0423\u041b\u0410","\u0413\u041d\u041e\u041c","\u041e\u0420\u0415\u041b","\u0404\u0413\u0418\u041f\u0415\u0422","\u041f\u041e\u0421\u041e\u041b\u042c\u0421\u0422\u0412\u041e","\u0414\u0412\u0418\u0413\u0423\u041d","\u0410\u041d\u0413\u041b\u0406\u042f","\u0404\u0412\u0420\u041e\u041f\u0410","\u041e\u041a\u041e","\u041e\u0411\u041b\u0418\u0427\u0427\u042f","\u0421\u041f\u0418\u0420\u0422","\u041c\u0406\u0421\u042f\u0426\u042c","\u0412\u0423\u0417\u041e\u041b","\u041f\u0410\u0420\u041a\u0410\u041d","\u041f\u041e\u041b\u0415","\u041f\u0406\u0412\u041d\u0406\u0427","\u0424\u0406\u0413\u0423\u0420\u0410","\u0424\u0410\u0419\u041b","\u0424\u0406\u041b\u042c\u041c","\u0412\u041e\u0413\u041e\u041d\u042c","\u0420\u0418\u0411\u0410","\u0424\u041b\u0415\u0419\u0422\u0410","\u0421\u0423\u041f\u0423\u0422\u041d\u0418\u041a","\u041d\u041e\u0413\u0410","\u0421\u0418\u041b\u0410","\u041b\u0406\u0421","\u0412\u0418\u0414\u0415\u041b\u041a\u0410","\u0424\u0420\u0410\u041d\u0426\u0406\u042f","\u041a\u0423\u041b\u042f","\u0413\u0410\u0417","\u0413\u0415\u041d\u0406\u0419","\u041d\u0406\u041c\u0415\u0427\u0427\u0418\u041d\u0410","\u041f\u0420\u0418\u0412\u0418\u0414","\u0412\u0415\u041b\u0415\u0422\u0415\u041d\u042c","\u0421\u041a\u041b\u041e","\u0420\u0423\u041a\u0410\u0412\u0418\u0427\u041a\u0410","\u0417\u041e\u041b\u041e\u0422\u041e","\u0414\u041e\u041b\u042f","\u0422\u0420\u0410\u0412\u0410","\u0413\u0420\u0415\u0426\u0406\u042f","\u041b\u0418\u0421\u0422","\u0417\u0415\u041c\u041b\u042f","\u041b\u0410\u041c\u0410","\u0420\u0423\u041a\u0410","\u0421\u0415\u041a\u0420\u0415\u0422","\u0413\u041e\u041b\u041e\u0412\u0410","\u0421\u0415\u0420\u0426\u0415","\u0412\u0415\u0420\u0422\u041e\u041b\u0406\u0422","\u0413\u0406\u041c\u0410\u041b\u0410\u0407","\u041e\u0422\u0412\u0406\u0420","\u0413\u041e\u041b\u0406\u0412\u0423\u0414","\u041c\u0415\u0414","\u0413\u0420\u0410\u041d\u0410\u0422\u0410","\u0417\u0410\u0412\u0406\u0421\u0410","\u0420\u0406\u0413","\u041a\u0406\u041d\u042c","\u041f\u0406\u0414\u041a\u041e\u0412\u0410","\u041b\u0406\u041a\u0410\u0420\u041d\u042f","\u0413\u041e\u0422\u0415\u041b\u042c","\u041b\u0406\u0414","\u041c\u041e\u0420\u041e\u0417\u0418\u0412\u041e","\u0406\u041d\u0414\u0406\u042f","\u041a\u041b\u0410\u0421","\u0421\u041b\u041e\u041d","\u0422\u0423\u0417","\u0420\u0406\u041a","\u0420\u0410\u041a\u0415\u0422\u0410","\u041b\u0410\u0419\u041a\u0410","\u041a\u0415\u041d\u0413\u0423\u0420\u0423","\u041a\u0415\u0422\u0427\u0423\u041f","\u041a\u041b\u042e\u0427","\u0420\u041e\u0417\u0415\u0422\u041a\u0410","\u041a\u041e\u0420\u041e\u041b\u042c","\u041a\u041e\u041a\u041e\u0421","\u041d\u0406\u0416","\u041b\u0418\u0426\u0410\u0420","\u0417\u0410\u0421\u0422\u0410\u0412\u0410","\u041b\u0418\u0426\u0415","\u041b\u0410\u0417\u0415\u0420","\u0410\u0414\u0412\u041e\u041a\u0410\u0422","\u0421\u041a\u0410\u0422","\u041f\u041e\u042f\u0421","\u041b\u0415\u041f\u0420\u0415\u041a\u041e\u041d","\u0416\u0418\u0422\u0422\u042f","\u0421\u0412\u0406\u0422\u041b\u041e","\u041b\u0406\u041c\u0423\u0417\u0418\u041d","\u041b\u0406\u041d\u0406\u042f","\u0417\u0412\'\u042f\u0417\u041e\u041a","\u0414\u041d\u0406\u041f\u0420\u041e","\u0422\u0415\u0420\u041c\u0406\u041d","\u041a\u041b\u0415\u041d","\u041b\u0415\u0412","\u0412\u0406\u041a\u041d\u041e","\u041c\u0410\u0422\u0427","\u0417\u0415\u0424\u0406\u0420","\u041f\u041e\u0428\u0422\u0410","\u0427\u0410\u0419\u041a\u0410","\u041d\u041e\u0422\u0410","\u0422\u0423\u0411\u0410","\u041f\u0406\u0421\u041d\u042f","\u041c\u0410\u0421\u0410","\u0412\u041e\u0421\u042c\u041c\u0418\u041d\u0406\u0413","\u041c\u0406\u041d\u0410","\u0417\u0410\u041c\u041e\u041a","\u041c\u0406\u041a\u0420\u041e\u0421\u041a\u041e\u041f","\u041a\u041e\u041c\u0410","\u0428\u041f\u0410\u0413\u0410\u0422","\u041b\u041e\u041d\u0414\u041e\u041d","\u0421\u041d\u0410\u0420\u042f\u0414","\u041c\u041e\u0414\u0415\u041b\u042c","\u0412\u0423\u0413\u041e\u0420","\u0426\u0412\u042f\u0425","\u041a\u0418\u0407\u0412","\u0411\u0418\u041a","\u041c\u0418\u0428\u0410","\u0420\u041e\u0422","\u041a\u0415\u041b\u0418\u0425","\u041a\u0423\u0422","\u0413\u041e\u041b\u041a\u0410","\u041d\u042c\u042e-\u0419\u041e\u0420\u041a","\u0411\u0410\u0413\u0410\u0422\u0406\u0419","\u041d\u0406\u0427","\u0417\u0423\u0411","\u041c\u0415\u041a\u0421\u0418\u041a\u0410","\u0422\u0420\u0418\u0422\u041e\u041d","\u041d\u042f\u041d\u042c\u041a\u0410","\u0428\u0415\u0421\u0422\u0415\u0420\u041d\u042f","\u0412\u0415\u0416\u0410","\u041d\u0410\u0424\u0422\u0410","\u041e\u041b\u0406\u042f","\u041e\u041b\u0406\u041c\u041f","\u041e\u041f\u0415\u0420\u0410","\u041b\u0406\u0422\u041e","\u041e\u0420\u0413\u0410\u041d","\u0422\u0410\u0420\u0406\u041b\u041a\u0410","\u041f\u041b\u0410\u0429","\u0410\u0413\u0415\u041d\u0422","\u041f\u0410\u041f\u0406\u0420","\u041f\u0410\u0420\u0410\u0428\u0423\u0422","\u041f\u0410\u0420\u041a","\u041d\u0406\u041d\u0414\u0417\u042f","\u041f\u0410\u0421","\u041f\u0410\u0421\u0422\u0410","\u041f\u0406\u041d\u0413\u0412\u0406\u041d","\u041d\u0415\u0424\u0420\u0418\u0422","\u041c\u0406\u0421\u0422\u041e","\u041a\u0410\u041b\u0418\u041d\u0410","\u041f\u0406\u041b\u041e\u0422","\u041f\u0410\u0422\u0420\u041e\u041d","\u041a\u0410\u041d\u0410\u041b","\u041f\u0406\u0420\u0410\u0422","\u041f\u0406\u0421\u0422\u041e\u041b\u0415\u0422","\u042f\u0427\u041c\u0406\u041d\u042c","\u0412\u0418\u0414","\u041b\u0406\u0422\u0410\u041a","\u0422\u0410\u041d\u041a","\u0420\u0410\u0423\u041d\u0414","\u041a\u0410\u0427\u041a\u041e\u0414\u0417\u042c\u041e\u0411","\u0413\u0420\u0410","\u041c\u0415\u0422\u0420","\u041e\u0427\u041a\u041e","\u041e\u0422\u0420\u0423\u0422\u0410","\u0421\u0422\u041e\u0412\u041f","\u0421\u0406\u0422\u041a\u0410","\u041e\u0417\u0415\u0420\u041e","\u041f\u041e\u0420\u0422","\u041b\u0410\u041c\u041f\u0410","\u041e\u0421\u0406\u041d\u042c","\u0421\u041a\u041b\u042f\u041d\u041a\u0410","\u041f\u0420\u0418\u041d\u0426\u0415\u0421\u0410","\u0413\u0410\u0420\u0411\u0423\u0417","\u0423\u0427\u0415\u041d\u042c","\u041f\u0406\u0420\u0410\u041c\u0406\u0414\u0410","\u041a\u041e\u0420\u041e\u041b\u0415\u0412\u0410","\u041a\u0420\u041e\u041b\u0418\u041a","\u0423\u0414\u0410\u0427\u0410","\u0422\u0420\u041e\u042f\u041d\u0414\u0410","\u0412\u0415\u0421\u041d\u0410","\u041a\u0406\u041b\u042c\u0426\u0415","\u041a\u041e\u0417\u0410\u041a","\u0420\u041e\u0411\u041e\u0422","\u0425\u0420\u0410\u041c","\u041b\u0410\u0412\u0410","\u041a\u041e\u0420\u0406\u041d\u042c","\u041f\u041e\u041c\u041f\u0410","\u0420\u0423\u041b\u0415\u0422\u041a\u0410","\u0421\u0422\u0406\u041b","\u0420\u042f\u0414","\u041a\u041d\u042f\u0417\u042c","\u0420\u041e\u0417\u0420\u042f\u0414","\u0421\u0410\u0422\u0423\u0420\u041d","\u0420\u041e\u041c\u0410\u041d","\u0428\u041a\u041e\u041b\u0410","\u0412\u0427\u0415\u041d\u0418\u0419","\u0421\u041a\u041e\u0420\u041f\u0406\u041e\u041d","\u0415\u041a\u0420\u0410\u041d","\u0421\u0415\u041b\u041e","\u0411\u041e\u041a\u0421","\u0421\u0415\u0420\u0412\u0415\u0420","\u0422\u0418\u041a","\u0428\u0415\u041a\u0421\u041f\u0406\u0420","\u0421\u0412\u0418\u041d\u041a\u0410","\u041a\u041e\u0420\u0410\u0411\u0415\u041b\u042c","\u0427\u0415\u0420\u0415\u0412\u0418\u041a","\u041c\u0410\u0413\u0410\u0417\u0418\u041d","\u0414\u0417\u0415\u0420\u041a\u0410\u041b\u041e","\u0412\u0410\u041b","\u0412\u041e\u0414\u041e\u041b\u0410\u0417","\u041c\u0410\u0420\u041a\u0410","\u0417\u0410\u0425\u0406\u0414","\u0425\u041c\u0410\u0420\u041e\u0427\u041e\u0421","\u0421\u041d\u0406\u0413","\u0421\u041d\u0406\u0413\u041e\u0412\u0418\u041a","\u041a\u0410\u0420\u0422\u0418\u041d\u0410","\u041f\u0406\u041f","\u0422\u0410\u041a\u0422","\u0417\u0412\u0423\u041a","\u041a\u041e\u0421\u041c\u041e\u0421","\u0421\u0425\u0406\u0414","\u041f\u0410\u0412\u0423\u041a","\u041f\u0406\u041a","\u0421\u0422\u0410\u041d","\u0422\u041e\u0427\u041a\u0410","\u0411\u0410\u041b\u041a\u0410","\u0428\u041f\u0418\u0413\u0423\u041d","\u041a\u0412\u0410\u0414\u0420\u0410\u0422","\u0421\u0422\u0410\u0414\u0406\u041e\u041d","\u0414\u0406\u041c","\u0417\u0406\u0420\u041a\u0410","\u0406\u0422\u0410\u041b\u0406\u042f","\u0417\u0410\u0420\u042f\u0414","\u0428\u0410\u0428\u041a\u0410","\u0421\u0410\u0414\u041e\u041a","\u041f\u041e\u0422\u0406\u041a","\u0421\u0422\u041e\u041f\u0410","\u0421\u0422\u0420\u0423\u041d\u0410","\u0422\u0423\u041d\u0415\u041b\u042c","\u041a\u041e\u0421\u0422\u042e\u041c","\u0421\u0423\u041f\u0415\u0420\u0413\u0415\u0420\u041e\u0419","\u0428\u041d\u0423\u0420","\u0412\u0418\u041c\u0418\u041a\u0410\u0427","\u041f\u0410\u041b\u0415\u0426\u042c","\u0420\u0418\u041c","\u0415\u0422\u0418\u041a\u0415\u0422\u041a\u0410","\u0425\u0412\u0406\u0421\u0422","\u0421\u0406\u041a","\u0423\u0427\u0418\u0422\u0415\u041b\u042c","\u0422\u0415\u041b\u0415\u0421\u041a\u041e\u041f","\u0417\u0410\u0412\u041e\u0414","\u0422\u0415\u0410\u0422\u0420","\u0417\u041b\u041e\u0414\u0406\u0419","\u0412\u041e\u0407\u041d","\u041b\u0410\u0421\u041a\u0410","\u041c\u041e\u0420\u0415","\u0427\u0410\u0421","\u0422\u041e\u041a\u0406\u041e","\u0421\u041f\u0410\u0414","\u0424\u0410\u041a\u0415\u041b","\u0421\u0410\u0422\u0415\u041b\u0406\u0422","\u0428\u0422\u0410\u0422","\u041f\u041e\u0422\u042f\u0413","\u0413\u0410\u041a","\u041f\u041e\u041b\u0406\u0426\u0406\u042f","\u041b\u042e\u041b\u042c\u041a\u0410","\u0422\u0420\u0423\u0411\u0410","\u041a\u0423\u0420\u041a\u0410","\u0413\u0420\u0410\u0411\u0410\u0420","\u041e\u0414\u041d\u041e\u0420\u0406\u0413","\u0414\u0418\u041c","\u0424\u0423\u0420\u0413\u041e\u041d","\u0422\u0418\u0422\u0410\u041d","\u041a\u041e\u0421\u0410","\u0421\u0422\u0406\u041d\u0410","\u0412\u0406\u0419\u041d\u0410","\u041a\u041d\u0418\u0416\u041a\u0410","\u041f\u0410\u0420\u0418\u0416","\u0413\u041e\u0414\u0418\u041d\u041d\u0418\u041a","\u0412\u041e\u0414\u0410","\u0425\u0412\u0418\u041b\u042f","\u041c\u0415\u0420\u0415\u0416\u0410","\u0421\u0422\u0410\u041d\u0426\u0406\u042f","\u041a\u0418\u0422","\u0411\u0410\u0422\u0406\u0413","\u0412\u0406\u0422\u0415\u0420","\u0412\u0406\u0414\u042c\u041c\u0410","\u0425\u0420\u041e\u0411\u0410\u041a","\u0414\u0416\u0418\u041d"]},"fr":{"Codenames":["PAPIER","VISAGE","CEINTURE","ATLANTIQUE","GUERRE","CIN\xc9MA","ANNEAU","VAMPIRE","RESTAURANT","FEU","MILLIONNAIRE","FRAN\xc7AIS","\xc9COLE","PILOTE","MA\xceTRESSE","MICROSCOPE","NEIGE","ESPION","ANGE","MIEL","CANADA","FANT\xd4ME","LUNE","CHINE","INDIEN","BI\xc8RE","CASINO","PLAGE","JEU","DOCTEUR","CERCLE","AFRIQUE","CENTRE","PIED","LICORNE","DRAGON","TABLEAU","AVION","NAIN","MACHINE","BALLE","EAU","CHIEN","PARIS","ALLEMAGNE","CODE","TEMPLE","NUIT","CHEVAL","CH\xc2TEAU","BANQUE","CHAMP","CHOCOLAT","TROU","ANGLETERRE","CHEVALIER","BATEAU","T\xcaTE","DINOSAURE","MAIN","N\u0152UD","ALIEN","CHANCE","\xc9GYPTE","COCHON","BRANCHE","\xc9TOILE","SOLDAT","BOUCHE","H\xd4TEL","G\xc9NIE","\xc9CHELLE","BOUTEILLE","C\u0152UR","AIGUILLE","HERBE","DANSE","BALEINE","KANGOUROU","AM\xc9RIQUE","LASER","MALADIE","ARAIGN\xc9E","COLLE","FOR\xcaT","CORDE","PLACE","H\xd4PITAL","B\xc2TON","H\xc9ROS","MARS","GAUCHE","LIEN","CHAUSSON","MORT","OISEAU","COURANT","P\xd4LE","POISSON","G\xc9ANT","LONDRES","AVOCAT","CRITIQUE","IRIS","GLACE","MOULE","PO\xcaLE","ENSEMBLE","FRAISE","CARTOUCHE","FORMULE","MINE","BAIE","JET","FIN","FOYER","BAR","LIGNE","GRUE","BOURSE","OP\xc9RATION","CARTE","CAFARD","CADRE","GUIDE","GARDE","DROIT","CLUB","BARRE","CANON","\xc9CLAIR","BASE","VAISSEAU","CELLULE","CHA\xceNE","CARREAU","DON","MARQUE","SARDINE","MOUSSE","FORT","SENS","COUPE","UNIFORME","COUVERTURE","LENTILLE","TUBE","CHEMISE","CHOU","BANDE","NEW-YORK","BON","BRETELLE","BUREAU","BOUTON","AST\xc9RIX","BO\xceTE","BANANE","LUNETTES","LANGUE","GRENADE","TOKYO","COQ","GORGE","COMMERCE","FRONT","MARRON","PI\xc8CE","M\xc9MOIRE","ESPACE","\xc9PONGE","VOLUME","AIR","CANNE","ORANGE","ROME","CHARGE","FACTEUR","AMPOULE","RECETTE","BUT","COL","RUSSIE","BOMBE","MARCHE","CHEF","CORNE","CUISINE","HOLLYWOOD","CL\xc9","PR\xcaT","BOULET","CYCLE","GRAIN","AUSTRALIE","FIGURE","FER","KIWI","CARRI\xc8RE","COUTEAU","LION","SCIENCE","PIANO","\xc9GALIT\xc9","VOLEUR","FL\xdbTE","SOURIS","CANARD","TEMPS","CHAPEAU","CIRQUE","CAMEMBERT","LAIT","ROSE","\u0152UF","PIRATE","P\xc9TROLE","PLUME","SC\xc8NE","SERPENT","LUXE","JUMELLES","MOUSTACHE","CHAMPAGNE","BERLIN","PRINCESSE","NO\xcbL","VERT","HISTOIRE","VOITURE","CHAT","BAGUETTE","Z\xc9RO","JOURNAL","POISON","AMOUR","APPAREIL","MAGIE","MODE","BOUCHON","PARACHUTE","B\u0152UF","ROBE","HIMALAYA","SCHTROUMPF","BL\xc9","COTON","FOU","VENT","REQUIN","POMME","TOUR","ROBOT","CLASSE","PIGEON","CROCHET","POUCE","CAF\xc9","ROULETTE","JOUR","ARGENT","SORCI\xc8RE","ROI","R\xc9SISTANCE","VERRE","\u0152IL","TABLE","BALLON","SOLEIL","JUNGLE","OP\xc9RA","HIVER","REINE","DROITE","SEPT","OR","POLICE","CITROUILLE","SATELLITE","MOLI\xc8RE","TERRE","TR\xc9SOR","AILE","FILET","MARIN","ROUGE","MOUCHE","CHASSE","SIR\xc8NE","PINGOUIN","ESPRIT","R\xc8GLE","POINT","PYRAMIDE","B\xdbCHE","TENNIS","NOIR","RAT","LIVRE","VIE","NINJA","PHYSIQUE","VAGUE","B\xcaTE","FERME","CARTON","PARTIE","VOILE","MANCHE","TITRE","FUITE","ENTR\xc9E","PENS\xc9E","CAMPAGNE","POMPE","QUEUE","PLAN","MEMBRE","ENCEINTE","QUARTIER","PLANCHE","COURONNE","ARC","ESSENCE","BANC","GEL","VASE","CABINET","ATOUT","PLAT","BALANCE","P\xcaCHE","TUILE","TAMBOUR","BOTTE","LOUCHE","PENDULE","PLANTE","REMISE","NUM\xc9RO","PESTE","MAJEUR","TIMBRE","PAGE","MENU","ASILE","LIT","SOL","SOLUTION","PALAIS","ALPES","LIQUIDE","POSTE","RELIGIEUSE","BOUGIE","LUMI\xc8RE","RAIE","PHARE","SORTIE","PALME","BRIQUE","GR\xc8CE","ESPAGNE","FEUILLE","TALON","ROULEAU","LETTRE","VISION","MAN\xc8GE","PILE","NOTE","CHARME","PRISE","PASSE","COURSE","R\xc9VOLUTION","RAME","PAILLE","PATRON","SI\xc8GE","RADIO","ORDRE","VIN","PLATEAU","PERLE","VOL","MINEUR","TRAIT","EUROPE","SOMME","RAYON","POIRE","FARCE","RONDE","NAPOL\xc9ON","MEUBLE","COURT","\xc9TUDE","PORTABLE","TOILE"],"Codenames: Duo":["ABEILLE","ACCENT","ALLEMAND","AMANT","AMBULANCE","AM\xc9RICAIN","ANGLE","ANNIVERSAIRE","ANTARCTIQUE","ASIE","ASTRONAUTE","ATLANTIDE","BARCELONE","BARRI\xc8RE","BELGE","BLANC","BOUCLE","BRAS","BR\xc9SIL","BRETAGNE","BROADWAY","BRONZE","CABANE","CAMION","CAPITAINE","CAROTTE","CASSEROLE","CAVALIER","CAVE","C\xc9SAR","CHAMPIGNON","CHAMPION","CHANTEUR","CHARLEMAGNE","CHASSEUR","NOMBRIL","CHAUSSETTE","CHICAGO","CHINOIS","CHOUETTE","CIMETI\xc8RE","CIRCUIT","CIRE","LAS VEGAS","CLOWN","CONCERT","CORBEAU","COW-BOY","CRAVATE","CUISINI\xc8RE","CULTURE","DAME","D\xc9CEMBRE","DEMANDE","DIABLE","DIAMANT","DISQUE","DOIGT","DOLLAR","DROGUE","\xc9CRAN","\xc9LAN","\xc9LECTRICIT\xc9","EMPEREUR","\xc9P\xc9E","FACE","FEN\xcaTRE","FLAMME","FORCE","FORME","FOURCHE","FRANCHISE","FRATERNIT\xc9","GARDIEN","GARE","GAZ","GUITARE","IRAK","JAPON","JARDIN","JOKER","LOUP","MAGICIEN","MAIRIE","MAISON","MA\xceTRE","MALADE","MAMMOUTH","MANCHOT","MARACAS","MATIN","M\xc9DECINE","M\xc9DITERRAN\xc9E","M\xc9DUSE","MENSONGE","MENTHE","MERCURE","MEXIQUE","MILIEU","MILITAIRE","AFFAIRE","ALEXANDRIE","ARTICLE","AVENTURE","BAIN","BANDEAU","BARREAU","BATAILLE","CARREFOUR","COLONIE","C\xd4TE","COUR","CR\xcaTE","D\xc9MARCHE","DESSIN","DIVISION","DOUBLE","DRAPEAU","\xc9PAULE","\xc9QUATEUR","\xc9TIQUETTE","FAILLE","FILM","FL\xc8CHE","FRANKENSTEIN","INSTRUMENT","INT\xc9R\xcaT","JUGE","LAME","ROUAGE","MORCEAU","MOTEUR","MOUTON","NEZ","NIL","NORD","ODEUR","OFFRE","OMBRE","\xc9CLAT","OSEILLE","OURS","OUVERTURE","PACIFIQUE","PAIX","PANDA","PASSAGE","PAYS","P\xc9KIN","PIC","PIEUVRE","PION","PLOMB","POKER","POMPIER","PORC","PORTUGAL","POUMON","POUSSIN","PREMIER","PR\xc9SIDENT","PRESSE","PRISON","PUB","RACINE","RAIL","R\xc8GLEMENT","RENAISSANCE","RENCONTRE","R\xc9PLIQUE","R\xcaVE","ROUTE","SALON","SECONDE","S\xc9JOUR","S\xc9RIE","SERVICE","PARADIS","SOCI\xc9T\xc9","STADE","SU\xc8DE","SUISSE","SUITE","SUJET","TATOUAGE","T\xc9LESCOPE","T\xc9MOIN","POIS","TINTIN","TIPI","TRIBUNE","UNION","URBAIN","VANNE","VARI\xc9T\xc9","VENISE","VESTE","V\u0152U","VOLTAIRE","VOYAGE","INDEX","PIZZA","CRIQUET","MUR","LOUVRE","GOURDE","S\u0152UR","NEWTON","BEURRE","BEETHOVEN","DAUPHIN","COUTURE","SINGE","HALLOWEEN","D\xc9ESSE","FONTAINE","PRINCE","SYDNEY","ELFE","CURRY","CREVETTE","PAIN","\xc9LASTIQUE","SALADE","\xc9L\xc9PHANT","KARAT\xc9","MOSCOU","SANG","DIMANCHE","PARABOLE","SECR\xc9TAIRE","\xc9PICE","TUYAU","SOUPE","MIROIR","TROIS","MORSE","CUILL\xc8RE","HERCULE","VEINE","FOOTBALL","LIMONADE","R\xc2TEAU","GRADE","CANAP\xc9","PLONGEUR","GO\xdbT","GORILLE","F\xc9E","SPHINX","NUAGE","P\xc2QUES","\xc9POUVANTAIL","TULIPE","LACET","BLIZZARD","TROLL","TONNERRE","SALSA","MOMIE","RIVI\xc8RE","HAWA\xcf","POUP\xc9E","MARGUERITE","PUCE","CLOU","CROISSANT","TH\xc9","CR\xc8ME","STATION","ANCRE","PATATE","BONSA\xcf","DOUCHE","CAM\xc9L\xc9ON","TH\xc9\xc2TRE","ARM\xc9E","CHENILLE","LUNETTE","DIRECTEUR","COQUILLE","BATTERIE","AR\xcaTE","SAMOURA\xcf","MINOTAURE","PRUNE","ACIER","RIZ","KILT","D\xc9FENSE","TORTUE","V\xc9NUS","CERVEAU","DOSSIER","FUM\xc9E","TUNNEL","CORPS","PORCELAINE","ESQUIMAU","LAPIN","NOYAU","TABAC","PIQUE","MOD\xc8LE","SIGNE","PISTE","BIEN","CHAUFFEUR","PIOCHE","SEAU","BULLE","ALASKA","SEL","COCON","RHUM","VODKA","POLONAIS","S\xc9ISME","SABLE","SHERLOCK","POP-CORN","BARBECUE","TRONC","LUSTRE","SOLDE","SAHARA","POUDRE","MINUIT","PORTE","PYTHON","PARADE","VACHE","PLASTIQUE","LIBERT\xc9","CACAHU\xc8TE","OREILLER","LAINE","SAPIN","MUGUET","PERROQUET","VOLCAN","SKI","CH\xc8VRE","NAVET","CRABE","ARR\xcaT","SAN FRANCISCO","MATI\xc8RE","FROMAGE","F\xc8VE","BAGUE","CERISE","COUSIN","ZOMBIE","SUD","OASIS","TARTE","FOURMI","CH\xc2TAIGNE","BOIS","TIGRE","MOUTARDE","MARATHON","BRISE","TRAIN","BOUE","RIO","PLATINE","BASSIN","BAISER","POCHE","VOIX","TAILLE","BACON","MASSE","ART\xc8RE","B\xc9B\xc9","PLAQUETTE","PAPILLON","ADRESSE","QUART","MOTIF","POINTE","CAGE","CASQUE","VIKING","OURAGAN","MARIAGE","ROND","BOSSE","PEINTURE","BARBE","NERF","AGENT","NID","CAMP","PONT","POSITION","SERVEUR","NYLON"]},"es":{"C\xf3digo secreto":["\xc1FRICA","AGENTE","AIRE","EXTRATERRESTRE","ALPES","NILO","AMBULANCIA","AM\xc9RICA","\xc1NGEL","ANT\xc1RTIDA","MANZANA","PINTA","ATL\xc1NTIDA","ARGENTINA","AZTECA","LOMO","BOLA","ESTACI\xd3N","BANCO","BARRA","CARAVANA","VELA","BATER\xcdA","PLAYA","OSO","ORDEN","CAMA","PEK\xcdN","CAMPANA","CINTUR\xd3N","BERL\xcdN","BERMUDAS","GATO","CHULETA","LUNA","TABLA","MANDO","BOMBA","ARCHIVO","BLANCO","BOTA","BOTELLA","ARCO","MICRO","PUENTE","MONO","AS","BRAZO","\xd3PERA","CORNETA","BOT\xd3N","PLUMA","ITALIA","TAPA","CAPITAL","COCHE","CARTA","ZANAHORIA","CASINO","PISTA","SERPIENTE","LLAMA","CENTAURO","CENTRO","SILLA","CAMBIO","CARGA","ALIANZA","MALTA","SOBRE","JUICIO","CHOCOLATE","IGLESIA","C\xcdRCULO","G\xd3NDOLA","CAPA","PULSO","C\xd3DIGO","ART\xcdCULO","CASCO","DIARIO","CONCIERTO","GOLFO","TACTO","COCINERO","SERIE","ALGOD\xd3N","C\xc1MARA","PORTADA","MONITOR","CHOQUE","TRAMA","CRUZ","CORONA","CANTO","CHECO","BAILE","COPA","D\xcdA","MUERTE","CUBIERTA","GRADO","DIAMANTE","CUBO","DINOSAURIO","ENFERMEDAD","M\xc9DICO","PERRO","COMP\xc1S","DRAG\xd3N","VESTIDO","CABO","GOTA","SE\xd1AL","ENANO","\xc1GUILA","EGIPTO","EMBAJADA","TARDE","MOTOR","INGLATERRA","EUROPA","OJO","CARA","JUD\xcdA","DESTINO","PLANTA","PASTA","CAMPO","GRANADA","FIGURA","CABINA","PEL\xcdCULA","FUEGO","PEZ","FLAUTA","TANQUE","PIE","FUERZA","BOSQUE","HORCA","FRANCIA","PALA","TESTIGO","GENIO","ALEMANIA","FANTASMA","GIGANTE","VIDRIO","GUANTE","ORO","BA\xd1O","HIERBA","GRECIA","C\xd3LERA","TIERRA","BOLSA","MANO","DIANA","CABEZA","CORAZ\xd3N","HELIC\xd3PTERO","S\xc1HARA","AGUJERO","HOLLYWOOD","MIEL","CINTA","GANCHO","CUERNO","CABALLO","MAGIA","HOSPITAL","ANTORCHA","HIELO","HELADO","LADR\xd3N","CAZA","MARFIL","MA\xd1ANA","CURA","SABLE","VENUS","CANGURO","ROJO","LLAVE","POLO","REY","KIWI","CUCHILLO","CABALLERO","CADENA","FALDA","L\xc1SER","ABOGADO","PENDIENTE","CORTE","DUENDE","VIDA","MU\xd1ECA","LIMUSINA","L\xcdNEA","YEMA","LAGO NESS","MINA","DON","RADIO","LONDRES","SUERTE","LE\xd3N","CAQUI","MARCHA","CORREDOR","CA\xd1A","MASA","BANDA","CACTUS","M\xc9XICO","MICROSCOPIO","MERCURIO","MANGO","LENGUA","MODELO","MILLONARIO","MOSC\xda","ENFERMERA","RAT\xd3N","MISIL","BOCA","NINJA","BLOQUE","AGUJA","RED","NOTA","NOCHE","JARRA","NUEVA YORK","PULPO","CRESTA","FIESTA","PI\xd1A","NARANJA","\xd3RGANO","ACEITE","OLIMPO","BICHO","PLOMO","FUENTE","PAPEL","PARACA\xcdDAS","PALMA","NUDO","PRIMA","PIEZA","PIRATA","CUARTO","PUNTA","PING\xdcINO","PASE","PASTEL","MORTERO","PILOTO","PELOT\xd3N","TUBER\xcdA","PISTOLA","FOSO","PLANO","TAL\xd3N","COCO","PLACA","ORNITORRINCO","MANGA","OBRA","PUNTO","GOMA","VENENO","PL\xc1TANO","PRENSA","PUERTO","REINA","LIBRA","PRINCESA","POLIC\xcdA","CARRERA","ESTUDIO","PIR\xc1MIDE","PASO","TECLADO","CONEJO","RAYO","ANILLO","GOLONDRINA","REVOLUCI\xd3N","ROBOT","POTRO","RULETA","ROSA","RONDA","REGLA","NAVE","CLASE","FLECHA","ESCORPI\xd3N","SAT\xc9LITE","FARO","ROMA","SATURNO","COLUMNA","TACO","BALA","PANTALLA","FICHA","CIENT\xcdFICO","CERVANTES","GRANO","TIENDA","ZAPATO","RASCACIELOS","PILA","SUBMARINISTA","PINCHO","SIERRA","RESERVA","CONTRABANDISTA","NIEVE","VAMPIRO","SALSA","SOLDADO","DAMA","BARCO","ESPACIO","CANAL","ARA\xd1A","VADO","CAJA","CUADRO","HOJA","MUELLE","ESP\xcdA","ESTADIO","METRO","ESTRELLA","IM\xc1N","ESTADO","DISCO","MANCHA","CORRIENTE","GOLPE","M\xd3DULO","SUPERH\xc9ROE","SIRENA","MAESTRO","CUERDA","M\xc1SCARA","MESA","TABLETA","ETIQUETA","COLA","TELESCOPIO","GRIFO","HOTEL","TOKIO","PORTERO","TEATRO","\xcdNDICE","MARCA","LUZ","TORRE","INDIA","TIEMPO","DELTA","CUELLO","FRENTE","DIENTE","PAVO","TRONCO","TUBO","VAC\xcdO","CEMENTERIO","EMPERADOR","PICO","FURGONETA","TOPO","CARRO","UNICORNIO","L\xc1TIGO","GUERRA","LIMA","GUARDIA","OLA","LISTA","VIENTO","AGUA","GUSANO","MURO","BALLENA","COMETA","ENLACE","CROMO","MAZO","BRUJA"],"C\xf3digo secreto: D\xfao":["POLLO","PELOTA","MORSA","LIMONADA","BANDERA","CUEVA","HORMIGA","TUMBA","ARTISTA","FINCA","LANGOSTA","RIFLE","VIKINGO","REFUGIO","MAQUILLAJE","PARQUE","GUSTO","PIEL","GOLF","PINO","COLMENA","COMIDA","PAT\xcdN","BALSA","PALMERA","NEPTUNO","MANTEQUILLA","MANTA","CASTILLO","PERGAMINO","PESO","COMBATE","MARTILLO","SUELO","PRISI\xd3N","FUGA","LAZO","BOLSILLO","LATA","PISO","INSECTO","PELO","BARRO","JOYA","H\xc9RCULES","RUEDA","MOSQUITO","VAINA","ISLANDIA","ESCARCHA","ECLIPSE","PATATA","ATILA","CARLOMAGNO","TORTUGA","NAVIDAD","CEREZA","LENIN","EQUIPO","RI\xd1\xd3N","FOCO","GALLETA","ESPUMA","PIMIENTA","LABORATORIO","MOLINO","MARACAS","CARB\xd3N","EVEREST","PREHISTORIA","MEMORIA","JERSEY","PEINE","GAFAS","PIZZA","JAB\xd3N","BIG BEN","DOMIN\xd3","VIOLETA","BURBUJA","CUCHARA","CEBOLLA","HONGO","NABO","SHERLOCK","JULIO","GUILLOTINA","HERMANO","CALABAZA","ESCALERA","ESPANTAP\xc1JAROS","CATEDRAL","PARCHE","CABA\xd1A","BONS\xc1I","MARAVILLA","HONDA","ARDILLA","MANGUERA","MARAT\xd3N","OREJA","PALOMITA","PR\xcdNCIPE","HUEVO","BIKINI","BESO","VIOL\xcdN","CUERO","COSTA","ASTRONAUTA","METEORITO","ARENA","SUE\xd1O","BISTUR\xcd","BEB\xc9","JUNTA","GARGANTA","JUEZ","VOLC\xc1N","CUNA","GUITARRA","ABEJA","BIGOTE","C\xc9NTIMO","HUMO","PATA","COCINA","PRADERA","ZORRO","RAYA","ALA","HACHA","PINTURA","CALAVERA","PINZA","CRISTAL","NEWTON","DEFENSA","OLIVO","CENIZA","COLLAR","VENTANA","LE\xd1ADOR","AMOR","SOPA","TINTA","SAL\xd3N","R\xcdO","ESFINGE","SAMUR\xc1I","REL\xc1MPAGO","CABRA","JUEGO","CLEOPATRA","ENSALADA","BOTE","SILBATO","MOSQUETERO","HERMANA","DIRECTOR","COFRE","CAPIT\xc1N","CERA","CANGREJO","PANEL","EINSTEIN","HIMNO","SAPO","CAMPAMENTO","UNIVERSIDAD","BUF\xd3N","VACA","FAROL","D\xd3LAR","PROGRAMA","ARROZ","CARTUCHO","TORNILLO","BIG BANG","COL\xd3N","RELOJ","HERRERO","JUANA DE ARCO","ZOMBI","MARIPOSA","VUELTA","DENTISTA","QUESO","TRINCHERA","NAPOLE\xd3N","TEXAS","CALLE","FIEBRE","NIEBLA","NAVAJA","CABLE","GOBERNADOR","VAQUERO","POSADA","NOVIA","C\xc9SAR","INVERNADERO","POLVO","TROL","VOLUMEN","VIDEO","ESQU\xcd","CHANCLA","MICROONDAS","PERLA","PAC\xcdFICO","HORNO","FLOR","N\xdaMERO","RUSIA","DUCHA","TELA","TERREMOTO","CUERVO","MAGO","NERVIO","TRUENO","MECHA","GLACIAR","P\xd3LVORA","ROLLO","MONSTRUO","PIZARRA","SEGUNDO","COHETE","BARBA","VAPOR","NUBE","COMA","ESPINA","COLMILLO","ACORAZADO","BATALLA","MAPA","VIRUS","TORNADO","BICICLETA","LORO","HAMBURGUESA","REGISTRO","TIT\xc1N","HECHIZO","DESFILE","DOCTOR","PISTACHO","BASE","AUTOR","CORTEZA","BORDE","JAM\xd3N","NEGRO","PACIENTE","CORAL","OASIS","MARTE","ESTATUA","C\xc1PSULA","CLAVO","CAMINO","TIZA","GIMNASTA","RA\xcdZ","RODEO","SEDA","CAF\xc9","JINETE","CARNE","DELF\xcdN","SANGRE","LANA","TUNEL","JARD\xcdN","OLOR","PUERTA","MADERA","PA\xcdS","ELEFANTE","ESTILO","CIEGO","HUERTO","MADRE","DIBUJO","TREN","CAPUCHA","CARTERA","IGL\xda","LABIO","LIEBRE","SOMBRERO","SUDOR","PEPINO","CEBRA","SAL","PEREZOSO","DESV\xc1N","ACERO","CHANDAL","TORMENTA","CAMILLA","ESTABLO","PI\xd1\xd3N","GLOBO","BARBACOA","HUELLA","BAJO","HAW\xc1I","MOSTAZA","HALC\xd3N","MEDUSA","SIBERIA","CERVEZA","CAMELLO","GRANJA","CRUZADA","TRUCO","HAMACA","CORTINA","MEL\xd3N","TOSTADA","ARMADURA","T\xc9","CIERVO","JUDO","PAN","VENDA","HIERRO","DESEO","COSTILLA","CONO","BRASIL","TABLERO","DISFRAZ","CONDE","CEREBRO","AN\xcdS","CASA","NUEZ","CONCHA","CONSEJO","ESPADA","ESPEJO","RESISTENCIA","RAMO","PAJE","SART\xc9N","TOMATE","VASO","NORIA","CERDO","BA\xdaL","REVISTA","LLUVIA","SACO","FIDEO","AZ\xdaCAR","SOL","PLATAFORMA","HUESO","FORTALEZA","ABONO","PANTANO","GARRA","TORRENTE","TIMBRE","VAG\xd3N","TIGRE","ORDENADOR","CAMARERO","PLANCHA","DARWIN","BOXEO","PARA\xcdSO","ODISEA","MINOTAURO","BODA","KARATE","MOMIA","SEGURO","POZO","GANGSTER","LECHE","RANA","CHAMP\xda","SOCIO","ABRIGO","AVALANCHA","ESCUADRA","JEFE","FALTA","LIBRO","ESP\xcdRITU","HOMBRO","ANCLA","MORRO","TAMBOR"]},"pl":{"Tajniacy":["NOS","HOLLYWOOD","KONCERT","KARTA","TOALETA","SIANO","R\xd3\u017bA","TANIEC","KALOSZ","GROSZEK","KORONA","KONAR","P\u0141OT","ANTARKTYKA","PIRAT","MEKSYK","NAPAD","KRZES\u0141O","SZMUGIEL","Z\u0141ODZIEJ","BABKA","TCH\xd3RZ","KROPKA","ZMYWACZ","J\u0118ZYK","FRANCJA","RZ\u0104D","BECZKA","ANGLIA","KRASNAL","ATLANTYDA","OPERA","KWADRAT","TR\u0104BA","TUBA","RAKIETA","ZIEMIA","\u015aWINIA","SZKOCJA","WAGA","Z\u0141OTO","LINIA","SZTUKA","UCHO","TR\xd3JK\u0104T","STOPA","ZAMEK","ORZE\u0141","FOKA","L\xd3D","\u015aWIERSZCZ","SZCZYT","PLIK","CENTAUR","WYBUCH","KOLEC","KRZY\u017b","LONDYN","OPOKA","GRZMOT","JEDNORO\u017bEC","JAB\u0141KO","FLET","MODEL","P\xd3\u0141NOC","W\u0104\u017b","NORA","LEW","ST\xd3\u0141","JATKA","AWARIA","DUSZA","DANIA","KIWI","KO\u015a\u0106","USTA","STO\u0141EK","HIMALAJE","MISTRZ","KSI\u0118\u017bNICZKA","SUPERBOHATER","AMAZONKA","BA\u0141WAN","BAL","GUMA","RZ\u0118SA","KR\xd3LIK","KLUCZ","PLA\u017bA","POLE","SOCZEWKA","MASA","DONICE","KLAWISZ","KCIUK","CHOCHLIK","OGON","KONTRAKT","TRUCIZNA","ZEBRA","PAJ\u0104K","KACZOR","O\u015aMIORNICA","NIEMCY","WACHLARZ","G\u0141OWA","RYCERZ","RAK","GRA","NAUCZYCIEL","P\u0141YTA","SI\u0141A","KUCHARZ","KRET","TABLICA","B\u0104K","TRAWA","RUDA","PLASTIK","S\u0141UP","KARAWAN","DIAMENT","\u0141AWA","NINJA","KO\u0141O","POLSKA","PIRAMIDA","SZCZ\u0118\u015aCIE","GIGANT","WASZYNGTON","POCI\u0104G","\u017bABKA","POCZTA","PAN","KOT","LINA","GO\u0141\u0104B","RAMA","SOK\xd3\u0141","PODKOWA","BUT","KASYNO","SZEKSPIR","DZIE\u0143","WIATR","REWOLUCJA","\u015aMIER\u0106","TELESKOP","KR\xd3WKA","PUPIL","ZWOJE","\u0141O\u017bYSKO","PER\u0141A","LOCH NESS","GWIAZDA","WYDECH","PIER\u015aCIE\u0143","R\xd3G","MOSKWA","RZYM","SPLOT","KR\u0118GI","CZAR","MI\xd3D","MUCHA","MARCHEW","BERLIN","PUD\u0141O","DZIOBAK","PRACA","PUNKT","STRONA","TEATR","OGIER","WIED\u0179MA","PORT","JOWISZ","PAPIER","KOD","AMBASADA","PEKIN","BUDOWA","OLIMP","MERKURY","DINOZAUR","ZNAK","\u017bUK","PRAWO","OBSADA","FUNT","SKORPION","KSI\u0118\u017bYC","FILM","POWIETRZE","EKRAN","STADION","SZPIEG","FRANCUZ","GRABARZ","PINGWIN","KASA","SPADEK","CZUJKA","ROBAK","SMOK","FENIKS","MAMUT","KORZENIE","\u017bO\u0141NIERZ","PILOT","KOSTIUM","DW\xd3R","DZI\u0118CIO\u0141","KO\u015aCI\xd3\u0141","KOZIO\u0141","PALETA","BERMUDY","ZMIANA","WIOSNA","TALIA","N\xd3\u017b","WIDELEC","HUMOR","FIGURA","PISTOLET","PLACEK","HOTEL","LAKIER","SERCE","KANGUR","CEBULA","SATURN","SKORUPA","LASER","MATERIA\u0141","PALUSZKI","R\u0118KAWICA","R\u0118KA","FALA","OGIE\u0143","ROBOT","KLATKA","SZK\u0141O","BAWE\u0141NA","POCIECHA","CIE\u0143","KONTAKT","CENTRUM","TALERZ","SZKO\u0141A","SUKIENKA","JAGODA","G\u0141ADKI","BASEN","WIELORYB","GRACJA","NOGA","NAUKOWIEC","KR\xd3LOWA","POCHODNIA","BOMBA","OLEJ","KAMIE\u0143","HOLENDER","MOST","STATEK","NIEBO","GOLF","\u017bEBRO","DYWAN","STOPIE\u0143","POKRYWKA","RURA","GAZ","SZNUR","CZAPA","NUREK","STAN","\u015aNIEG","\u017bUBR","ORGANY","RULETKA","BICZ","WOJNA","MUR","LOT","TWARZ","\u0141\xd3D\u0179","PRAWNIK","GUZIK","MYSZ","PAZUR","POLICJA","KO\u0143","EGIPT","TOKIO","KAPTUR","OLIWA","SZAFA","RZUT","KECZUP","ZESP\xd3\u0141","SAMOCH\xd3D","PO\u0141\u0104CZENIE","BLOK","\u017bYCIE","OKO","SATELITA","MIKROSKOP","BAR","WST\u0118P","G\xd3RA","LASKA","PIEL\u0118GNIARKA","TUSZA","AFRYKA","SILNIK","KRAK\xd3W","WIE\u017bA","REKIN","LODY","DOKTOR","KOM\xd3RKA","AUSTRALIA","NOWY JORK","\u017bELAZO","STRZA\u0141","\u015aLIMAK","CZAS","DNO","WK\u0141AD","ORZECH","\u0141UK","TOREBKA","PAS","MIED\u0179","DZWON","AMBULANS","MAJ","PASTA","KLAMKA","CZEKOLADA","EUROPA","PRZEWODNIK","GRZYB","SZCZYPIOR","MAKS","SZPITAL","WIE\u017bOWIEC","CHOROBA","\u017bURAW","PROMIE\u0143","LIS","DZIURA","SIEKACZ","DRZEWO","TUSZ","PODK\u0141AD","FARTUCH","ZIELE\u0143","AMERYKA","GRECJA","NI\u0106","DUCH","BUTELKA","CHINY","SZPILKA","MILIONER","OBCY","GOTYK","HAK","HELIKOPTER","GNAT","PUSTKA","LIMUZYNA","LAS","IG\u0141A","JAJA","GNIAZDKO","WODA","STRUMIE\u0143","PIES","POJAZD","SPADOCHRON","SAMOLOT","CIA\u0141O","GENIUSZ","BELKA","Z\u0104B","NOC","AZTEK","RYBA","MUSZLA","BANK","NEKTAR","TRUTE\u0143","ANIO\u0141","SIE\u0106","NIED\u0179WIED\u0179","KR\xd3L"],"Tajniacy: Duet":["WIADRO","KAPU\u015aNIAK","ZUPA","POMIDOR","BURZA","B\u0141YSKAWICA","S\u0141O\u0143","WULKAN","K\u0104T","PLE\u015a\u0143","SER","BRAT","OJCIEC","MATKA","SIOSTRA","PRYMUS","RUNO","BARAN","S\u0141O\u0143CE","BABECZKA","ROGACZ","CAP","SK\u0141ON","TYGRYS","ROMANS","ZIEMNIAK","ROSJA","KUC","P\u0141\xd3TNO","OBRAZ","GUZ","GA\u0141KA","LENIWIEC","MARATON","POPCORN","KINO","KR\xd3L ARTUR","MINOTAUR","SPODEK","WIERSZ","SYN","TEMAT","HIT","OBIEKT","KOREKTOR","BIBU\u0141KA","RZEPKA","SZCZOTKA","BOHATER","NEPTUN","SYRENA","WARSZAWA","BIEG","TR\u0104BKA","DZWONEK","KREDA","W\u0118GIEL","WARSZTAT","\u017bYLETKA","OSTRY","TWARDY","FESTIWAL","POP","STARY","RODZINA","OGNISKO","JELE\u0143","PEJZA\u017b","MALARZ","MERLIN","CZARODZIEJ","MAGIA","PONTON","WIADOMO\u015a\u0106","WARUNEK","LAMPKA","FAJKA","CYTRYNA","AUTO","KALENDARZ","OSA","FUNKCJA","TARG","NIETOPERZ","KOMAR","KREW","KALKULATOR","OPERACJA","STACJA","WAGON","KASETA","KULKA","KLESZCZE","MR\xd3WKA","LEK","BALETKI","GRAT","TRUP","WALKA","KOLACJA","METR","\u015aLED\u0179","OD\u017bYWKA","PENTAGON","SKOK","NALE\u015aNIK","P\u0141ASKI","DZIENNIK","KONCENTRACJA","KAPITAN","P\u0141YWAK","REDAKCJA","TRAPER","OFICERKI","JAPONKI","JUNIOR","SENIOR","STRZELEC","INSTYTUT","SEN","FLAGA","CHEMIA","DNA","FOLDER","WSCH\xd3D","PO\u0141UDNIE","DIETA","KOMPANIA","FORMA","TRE\u015a\u0106","DZIE\u0141O","MASKA","DIABE\u0141","DEMON","ZJAWA","WIDMO","UK\u0141AD","PIANA","AKTOR","KOMIK","ENIGMA","SZYFR","KLIMAT","NASTR\xd3J","KAPE\u0106","\u0141USKA","MIECZ","BRO\u0143","\u0106WIARTKA","WIKING","HE\u0141M","CHOINKA","BIKINI","FINLANDIA","PODUSZKA","\u015aPIOCHY","WILKO\u0141AK","WR\xd3\u017bKA","ELF","BRODA","NARTY","SARNA","STUDIO","ROWER","HAMBURG","NOE","OSTRZE","ARKA","BEKON","\u015aW. PATRYK","PAMI\u0118\u0106","BA\u0143KA","OGR\xd3D","BLASK","\u017bAGLE","L\u015aNIENIE","MELONIK","CYLINDER","KILT","SZKOT","POLO","M\xd3ZG","KOMETA","\u015aLUB","KOWAL","EDEN","KOTWICA","BALAST","KOSMOS","KABEL","MG\u0141A","TEKSAS","SZEF","DENTYSTA","GANGSTER","ULICA","KROK","SMOKING","PANNA M\u0141ODA","KUBA","T\u0118CZA","CEZAR","SA\u0141ATA","DRACULA","KOLOR","S\u0141OWACKI","KARY","FORTUNA","LAZUR","BAGNO","SZKIELET","KOSA","K\u0141OS","CHMIEL","ENCYKLOPEDIA","MECH","WIELKANOC","WYSPA","RZE\u0179BA","DUDY","SKOCZEK","PIONEK","HORYZONT","NAPOLEON","ZESTAW","LEMING","KRAWAT","PASTEL","SALSA","SOS","BIG BEN","CHOLERA","S\u0104D","MONA LISA","KOLUMB","SERWIS","W\xd3ZEK","LINIJKA","PARAGRAF","PRAWICA","TYTU\u0141","HRABIA","GRAF","GRAFIK","BIBLIA","DZIAD","SPR\u0118\u017bYNA","PELERYNA","GRABIE","\u015aNIE\u017bKA","KIJ","KOSZ","BRAMA","PI\u0141KA","KREDENS","KREDYT","KOMEDIA","DRAMAT","KRUK","ZIELONY","BOK","BARWA","TON","GATUNEK","CHOMIK","KRAJOBRAZ","S\u0141OWO","KOSZULKA","LESZCZ","BLOKADA","KOGUT","ALARM","PSZCZO\u0141A","FORMAT","MOTYL","HARMONIA","PLATFORMA","MOTOR","OCENA","TORBA","STOISKO","JARMARK","ZGODA","ZDANIE","MIESI\u0104C","PROCES","OPERATOR","KULTURA","TABELA","HEL","GRAFIT","\u015aCIANA","POK\xd3J","\u0141AB\u0118D\u0179","JEZIORO","PLANSZA","BAJKA","NOWELA","LALA","Z\u0141OTY","D\u0179WI\u0118K","NUTA","SOK","RAJ","\u015aWI\u0118TA","EDYCJA","UWAGA","KAPITA\u0141","SZCZYPCE","LI\u015a\u0106","P\u0141ATKI","P\u0104CZEK","S\u0141UCHAWKI","KIERUNEK","STUDIUM","PALMA","DZIKI","SZYNKA","BLI\u0179NIAK","ZASADA","KWAS","\u0141A\u0143CUCH","MIOT\u0141A","ZACH\xd3D","TACA","PR\u0118GA","\u0141ATA","LOGIKA","\u0141ADUNEK","JEDNOSTKA","ORGANIZM","TW\xd3R","PRZYRODA","NATURA","\u015aRODOWISKO","PLENER","ROMANTYK","AURA","FLUID","MORS","PODMIOT","SUBIEKT","PROCH","PY\u0141","GROTY","P\u0118CHERZ","NERWY","UROK","POZYTYW","NEGATYW","POZA","SEZON","MAGNES","S\u0141ONECZNIK","GROM","PIORUN","PUDER","DYSK","CHMURA","PI\u0118TRO","M\u0141OT","PUSZKA","WIRUS","PAPUGA","HERKULES","\u017b\u0104D\u0141O","M\u0141YN","JEDWAB","B\u0104BEL","WE\u0141NA","W\u0141\xd3KNO","\u015aLEPAK","LILIA","NOTRE DAME","KATEDRA","MA\u0141PA","ZATOKA","DELTA","S\xd3L","BALON","HALLOWEEN","RZEKA","MAGAZYN","MUMIA","ROPUCHA","GARBUS","SZAMPON","KUNG FU","ZOMBIE","ARIEL","STRA\u017bNIK","PERSPEKTYWA","HOMER","BOKSER","ZAPIEKANKA","KLEOPATRA","BALERON","S\u0141OIK","MALUCH","AUTOMAT"]},"nl":{"Codenames":["ROULETTE","DRAAK","OORLOG","HONING","BOM","CASINO","WOLKENKRABBER","SATURNUS","ASTRONAUT","ZWEEP","ANTARCTICA","SNEEUWPOP","CONCERT","CHOCOLADE","VLIEGTUIG","MILJONAIR","DINOSAURUS","KAMELEON","TROMPET","PINGU\xcfN","SPIN","RAKET","AMBASSADE","PISTOOL","ZIEKTE","SPION","PRINSES","GENIE","DIEF","OPERA","RIDDER","STADION","LIMOUSINE","SPOOK","BUS","LOLLY","LASER","DOOD","ZIEKENHUIS","AMBULANCE","INKTVIS","HELIKOPTER","KANGOEROE","MICROSCOOP","PRETPARK","SUPERHELD","TELESCOOP","PARACHUTE","VAMPIER","ROTONDE","SATELLIET","ENGEL","ROBOT","EENHOORN","HEKS","KOLONIST","DUIKER","GIF","BRUG","VUUR","COBRA","WALVIS","MAAN","VIS","DOKTER","KERK","PLEISTER","ZUSTER","WIND","LEEUW","OOG","LUCHT","KONIJN","BANK","GRAS","JURK","DWERG","BOS","AUTO","HANDSCHOEN","APPEL","OLIE","KOK","BEER","POES","LEVEN","GELUK","REUS","SPIEGEL","STRAND","HOTEL","WATER","PAPIER","WORM","ADVOCAAT","WETENSCHAPPER","DANS","WORTEL","KETCHUP","NACHT","KATOEN","VOET","MUIS","MES","THEATER","AGENT","SCHIP","PILOOT","DUIM","LERAAR","FLES","DAG","KONING","GLAS","KABEL","TAND","HOND","PAARD","SCHOEN","STOEL","KROON","IJS","GOUD","VORK","TIJD","FLUIT","VLAM","SNEEUW","IVOOR","SOLDAAT","PIRAMIDE","KUBUS","STER","RING","HOORN","HART","BLOK","BUIS","NAALD","LIJN","KRIJT","BORD","BOX","SCHERM","STUK","SPOT","KNOP","MOND","ETIKET","HAND","BED","MUUR","TOREN","KAART","BAD","DIAMANT","KRUIS","NET","PUNT","NOOT","PLAAT","HOL","WIJZER","KRACHT","SLEUTEL","MACHINE","OVERGANG","STROOM","HOOFD","PAAL","CENTRUM","ONGELUK","SCHAT","SLOT","CODE","CIRKEL","LINK","PIJP","AMSTERDAM","NEDERLAND","LIMBURG","BRUSSEL","EGYPTE","LONDEN","CARNAVAL","ROTTERDAM","BELGI\xcb","HUNEBED","HOLLYWOOD","GRIEKENLAND","ROME","ARDENNEN","NINJA","POOL","SHOARMA","DUITSLAND","PROVINCIE","AMERIKA","ATLANTIS","ENGELAND","LOEMPIA","AFRIKA","TABLET","FRANKRIJK","KLOMP","POLDER","EURO","VOETBAL","ZEELAND","BERLIJN","PIZZA","DOLFIJN","HAWA\xcf","MOTOR","LAARS","CARAVAN","FRIET","ALPEN","SEIZOEN","KAMER","BLIK","VORST","IJZER","ZEGEL","LICHT","MARS","GROEN","JAM","EUROPA","LEIDING","WISSEL","AARDE","STRAAL","DEKSEL","CITROEN","ROOS","TAFEL","STAART","METER","DIJK","BATTERIJ","ARENA","BEELD","KOSTUUM","SLANG","SPOOR","GAREN","AANDEEL","VET","BLOND","SLIP","GEMEENTE","SLAG","PROEF","CLUB","SCHADUW","BENDE","STRIP","TWEELING","BAND","CHIP","TOCHT","DUIKBOOT","MIJN","VINK","VLIEG","KOUD","KNIKKER","SPEL","HAAK","KNUPPEL","KETTING","SCHEIDING","STAPEL","BAR","BUBBEL","POND","ROND","VELD","HEMEL","BOK","VEER","ZINK","FIETS","SCHRIFT","MAT","SLEE","PATROON","GROND","RUG","STAM","MUNT","GRAAD","KEGEL","UITZENDING","EIKEL","MOL","GESLACHT","TEMPEL","POMPOEN","IJSBEER","SMOKKELAAR","HAM","VLUCHT","KRUIK","VAL","SPREUK","BOEK","RAAD","BAL","PIL","ELF","BUREAU","ARM","SCHAAL","FLITS","CEL","VULKAAN","CONTRACT","CHINEES","BAAN","DIERENARTS","HAVEN","GOLF","NICHT","STEEK","MASKER","RIET","GELUID","PRIJS","SCHROEF","HAVIK","PERS","FORMULE","AS","KUIP","VIOOL","REGEL","DICHT","MASSA","WEB","ZAK","PALM","KRAAN","PASTA","TAART","GERECHT","SPIJKER","MODEL","WEEGSCHAAL","REVOLUTIE","PARIJS","GAS","SINGLE","PIANO","BESTAND","BRON","PODIUM","AANVAL","ASIEL","NETWERK","WEDSTRIJD","FILM","SCHIJF","AMAZONE","RUIMTE","BEURS","STAF","SHUTTLE","PIRAAT","KOP","STEM","GAT","KUSSEN","KAMP","TON","SPA","PAD","FIGUUR","GEZICHT","DOOS","NAGEL","PINDA","MONSTER","WAS","RECEPT","TOETS","TAP","SCHOOL","TROMMEL","KEVER","KATER","TANK","KOPER","SCHOT","HAGEL","RIEM","PUPIL","ORANJE","POST"],"Codenames: Duet":["KOFFER","NEST","HARMONIE","DOMINO","GRILL","GEEST","BUSKRUIT","MUTS","STAPELBED","DELTA","KALKOEN","MINOTAURUS","SAFARI","SPOOKHUIS","HOROSCOOP","WIELRENNER","STEP","MAGNEET","SAUNA","TOILET","RADAR","DOBBELSTEEN","KAMEEL","MOEDER","IRIS","BARBECUE","NAAKT","LENTE","TENT","BAMBOE","WOLF","MAYONAISE","PRUIK","PAPRIKA","SUIKER","ROK","NACHTWACHT","BUNGALOW","JOURNALIST","RU\xcfNE","DONUT","GRANAAT","PRINTER","ZWAAN","MEDICIJN","VADER","ROOKWORST","HORLOGE","BLOEM","CURRY","PUZZEL","ABDIJ","BIER","BIOSCOOP","FESTIVAL","AQUADUCT","STATION","MANEGE","SCHOTEL","KROKODIL","ZANGER","LAMPION","METRO","FITNESS","KLUIS","DRACULA","KERKHOF","KORF","KANO","KETEL","VERF","BELASTING","SCHUTTING","ZEIS","MARIONET","PADDENSTOEL","KASSA","SUPERMARKT","SHAMPOO","MATROOS","TUBE","GLOEILAMP","KURK","KAAS","FINLAND","KOERS","VITAMINE","CRUISE","KREEFT","ANTENNE","AZIJN","SLUIS","TERRORIST","THRILLER","TREIN","OESTER","MOSTERD","ESKIMO","CHAMPIGNON","HANDDOEK","PARAPLU","HONKBAL","POSTZEGEL","CONFETTI","ZAND","BLOED","HARNAS","LANTAARN","ROODKAPJE","MATRAS","UNIVERSITEIT","KOETS","CAMPING","CHAMPAGNE","STOOM","TAXI","WALS","KERMIS","BOERENKOOL","BREUK","PLUTO","STIER","AUSTRALI\xcb","STICKER","PANDA","ROS","BON","STADHUIS","KUIKEN","PION","KATHEDRAAL","SMARAGD","GARNAAL","ZWANGER","LINGERIE","WISKUNDE","STEENBOK","STRUISVOGEL","VAAS","VINGERHOED","TRAMPOLINE","THEE","GLIJBAAN","DOOLHOF","STRIK","SLAGTAND","FAKIR","MOSKEE","SLAAPZAK","KLINKER","CIRCUS","SLAGBOOM","KLOK","GRENS","ZUURSTOK","WOESTIJN","SPAGHETTI","METEOOR","DRAAIMOLEN","KANON","GRONINGEN","REUZENRAD","VUURWERK","ACHTBAAN","LEVER","KRAB","POKER","EVENAAR","KORAAL","TATTOO","WIP","TRECHTER","ZOMER","DAM","KRUISTOCHT","GRAFFITI","GLADIATOR","HEIDE","PYJAMA","BOSWACHTER","SPAARVARKEN","SCHAAR","GOULASH","EXAMEN","MUSEUM","BILJART","CUPIDO","DICTATOR","RUBBER","WEERWOLF","MAFFIA","KAPITEIN","OBELISK","STREEP","STRIJD","ZEBRA","BALPEN","HERBERG","KAVIAAR","GITAAR","AAMBEELD","OLIEBOL","ZANDBAK","ZUURKOOL","FONTEIN","LADDER","SALADE","TELEVISIE","CHIPS","LENS","FANFARE","ZWEMBAD","ZAKDOEK","NACHTMERRIE","OOIEVAAR","PRESIDENT","GIDS","SPONS","GIRAFFE","PINCET","TULBAND","VIJVER","PARFUM","EVENWICHT","WINTER","POTLOOD","SPECULAAS","SCHILDPAD","PASTOOR","BANAAN","BRIL","REGENBOOG","MODDER","SCHELP","LELIE","KERS","ACROBAAT","CHINA","THERMOMETER","SERVET","VUURTOREN","DRONE","KIKKER","BALLERINA","MARATHON","ISTANBUL","EEKHOORN","BURCHT","SPEER","POEDER","SLAGER","LAWINE","SCHIMMEL","FOSSIEL","HOCKEY","EGEL","CIRCUIT","SUSHI","RUPS","LEGENDE","DRUIF","WIJN","HOEFIJZER","IGLO","WILD","COCKTAIL","TRAPEZE","STANDBEELD","EILAND","KERSTMAN","GRAAN","NAR","STOFZUIGER","RADIO","BLIKSEM","BUIDEL","TANGO","KRANS","ZEPPELIN","AKKER","MOLENAAR","SNEE","KAMPIOEN","VLEUGEL","VLINDER","VIRUS","KWARTET","VAANDEL","MADRID","GRIEP","GEVANGENIS","LUCIFER","OASE","WETENSCHAP","SPECHT","PAUW","MIST","KRANT","SPITS","OPERATIE","COWBOY","RUGZAK","MAGAZIJN","SIRENE","SNOR","WALVISJACHT","LAVA","ZAAD","ATLAS","INDIAAN","MANDARIJN","HARING","KRENT","KANARIE","BOOGSCHUTTER","ZANDLOPER","DRIEHOEK","KNOL","WESP","KNOFLOOK","KAARS","PLOEG","SCOUT","TULP","STEKKER","VLOOT","HERFST","ANIMATIE","WEKKER","ORKAAN","ZOEN","ANTWERPEN","SCHAATS","YOGHURT","ZWAARD","DOMINEE","VLAG","DYNAMIET","MAAGD","ALFABET","BIEFSTUK","WATERVAL","SABEL","PRUIM","TITANIC","MINISTER","SNOEP","TENTAKEL","ROUTE","STROOPWAFEL","BRONS","KWARTIER","LANDKAART","WIEROOK","GEL","APPELTAART","UTRECHT","MELK","STROP","MEDAILLE","DOLLAR","LABORATORIUM","OLIFANT","TANDARTS","ZEEP","SCHAKELAAR","HAGELSLAG","GERAAMTE","PANNENKOEK","KAMPVUUR","SNAVEL","DISCOTHEEK","HARK","BRABANT","MEXICO","WAPEN","MOESTUIN","BIKINI","GRAAF","ORKEST","MEERMIN","VLAAI","POLITIE","JOKER","BOERDERIJ","VIKING","KOGEL","ARK","TELEFOON","ROOM","BIBLIOTHEEK","AQUARIUM","HENGEL","NOORDZEE","CACTUS","BEUGEL","TEXTIEL","BRANDWEER","SPRUIT","TRAAN"]},"he":{"\u05e9\u05dd-\u05e7\u05d5\u05d3":["\u05e8\u05d5\u05dc\u05d8\u05d4","\u05d3\u05e8\u05e7\u05d5\u05df","\u05de\u05dc\u05d7\u05de\u05d4","\u05d3\u05d1\u05e9","\u05e4\u05e6\u05e6\u05d4","\u05e7\u05d6\u05d9\u05e0\u05d5","\u05d2\u05d5\u05e8\u05d3-\u05e9\u05d7\u05e7\u05d9\u05dd","\u05e9\u05d1\u05ea\u05d0\u05d9","\u05d7\u05d9\u05d9\u05d6\u05e8","\u05e9\u05d5\u05d8","\u05d0\u05e0\u05d8\u05d0\u05e8\u05e7\u05d8\u05d9\u05e7\u05d4","\u05e9\u05d7\u05e7\u05df","\u05de\u05d5\u05e4\u05e2","\u05e9\u05d5\u05e7\u05d5\u05dc\u05d3","\u05e1\u05d9\u05dc\u05d5\u05df","\u05de\u05dc\u05d9\u05d5\u05e0\u05e8","\u05d3\u05d9\u05e0\u05d5\u05d6\u05d0\u05d5\u05e8","\u05e4\u05d9\u05e8\u05d0\u05d8","\u05e7\u05e8\u05df","\u05e4\u05d9\u05e0\u05d2\u05d5\u05d5\u05d9\u05df","\u05e2\u05db\u05d1\u05d9\u05e9","\u05d8\u05d9\u05dc","\u05e9\u05d2\u05e8\u05d9\u05e8\u05d5\u05ea","\u05d0\u05e7\u05d3\u05d7","\u05d3\u05dc\u05e7","\u05de\u05e8\u05d2\u05dc","\u05e0\u05e1\u05d9\u05db\u05d4","\u05d2\u05d0\u05d5\u05df","\u05d2\u05e0\u05d1","\u05d0\u05d5\u05e4\u05e8\u05d4","\u05d0\u05d1\u05d9\u05e8","\u05d0\u05d9\u05e6\u05d8\u05d3\u05d9\u05d5\u05df","\u05dc\u05d9\u05de\u05d5\u05d6\u05d9\u05e0\u05d4","\u05e8\u05d5\u05d7-\u05e8\u05e4\u05d0\u05d9\u05dd","\u05de\u05e1\u05d7\u05e8\u05d9\u05ea","\u05d2\u05dc\u05d9\u05d3\u05d4","\u05dc\u05d9\u05d9\u05d6\u05e8","\u05de\u05d5\u05d5\u05ea","\u05d1\u05d9\u05ea-\u05d7\u05d5\u05dc\u05d9\u05dd","\u05d0\u05de\u05d1\u05d5\u05dc\u05e0\u05e1","\u05ea\u05de\u05e0\u05d5\u05df","\u05de\u05e1\u05d5\u05e7","\u05e7\u05e0\u05d2\u05e8\u05d5","\u05de\u05d9\u05e7\u05e8\u05d5\u05e1\u05e7\u05d5\u05e4","\u05e7\u05e0\u05d8\u05d0\u05d5\u05e8","\u05d2\u05d9\u05d1\u05d5\u05e8-\u05e2\u05dc","\u05d8\u05dc\u05e1\u05e7\u05d5\u05e4","\u05de\u05e6\u05e0\u05d7","\u05d1\u05e8\u05d5\u05d5\u05d6\u05df","\u05d0\u05d5\u05dc\u05d9\u05de\u05e4\u05d5\u05e1","\u05dc\u05d5\u05d5\u05d9\u05d9\u05df","\u05de\u05dc\u05d0\u05da","\u05e8\u05d5\u05d1\u05d5\u05d8","\u05d7\u05d3-\u05e7\u05e8\u05df","\u05de\u05db\u05e9\u05e4\u05d4","\u05e7\u05d1\u05e8\u05df","\u05e6\u05d5\u05dc\u05dc\u05df","\u05e8\u05e2\u05dc","\u05d2\u05e9\u05e8","\u05d0\u05e9","\u05e9\u05d5\u05dc\u05d7\u05df","\u05dc\u05d5\u05d9\u05d9\u05ea\u05df","\u05d9\u05e8\u05d7","\u05d3\u05d2","\u05e8\u05d5\u05e4\u05d0","\u05d1\u05d9\u05ea-\u05db\u05e0\u05e1\u05ea","\u05d7\u05d2\u05d5\u05e8\u05d4","\u05d0\u05d7\u05d5\u05ea","\u05e1\u05d5\u05e4\u05d4","\u05d0\u05e8\u05d9\u05d4","\u05e2\u05d9\u05df","\u05d0\u05d5\u05d5\u05d9\u05e8","\u05d0\u05e8\u05e0\u05d1","\u05d1\u05e0\u05e7","\u05d3\u05e9\u05d0","\u05dc\u05d1\u05d5\u05e9","\u05d2\u05de\u05d3","\u05d9\u05e2\u05e8","\u05de\u05db\u05d5\u05e0\u05d9\u05ea","\u05db\u05e4\u05e4\u05d4","\u05ea\u05e4\u05d5\u05d7","\u05e9\u05de\u05df","\u05d8\u05d1\u05d7","\u05d3\u05d5\u05d1","\u05d7\u05ea\u05d5\u05dc","\u05d7\u05d9\u05d9\u05dd","\u05de\u05d6\u05dc","\u05e2\u05e0\u05e7","\u05e4\u05e0\u05d9\u05dd","\u05d7\u05d5\u05e3","\u05de\u05dc\u05d5\u05df","\u05de\u05d9\u05dd","\u05e0\u05d9\u05d9\u05e8","\u05ea\u05d5\u05dc\u05e2\u05ea","\u05e2\u05d5\u05e8\u05da-\u05d3\u05d9\u05df","\u05de\u05d3\u05e2\u05df","\u05e8\u05d9\u05e7\u05d5\u05d3","\u05d2\u05d6\u05e8","\u05e7\u05d8\u05e9\u05d5\u05e4","\u05dc\u05d9\u05dc\u05d4","\u05db\u05d5\u05ea\u05e0\u05d4","\u05e8\u05d2\u05dc","\u05e2\u05db\u05d1\u05e8","\u05e1\u05db\u05d9\u05df","\u05ea\u05d9\u05d0\u05d8\u05e8\u05d5\u05df","\u05de\u05e9\u05d8\u05e8\u05d4","\u05e1\u05e4\u05d9\u05e0\u05d4","\u05d8\u05d9\u05d9\u05e1","\u05d0\u05d2\u05d5\u05d3\u05dc","\u05de\u05d5\u05e8\u05d4","\u05d1\u05e7\u05d1\u05d5\u05e7","\u05d9\u05d5\u05dd","\u05de\u05dc\u05da","\u05db\u05d5\u05e1","\u05de\u05dc\u05db\u05d4","\u05e9\u05df","\u05db\u05dc\u05d1","\u05e1\u05d5\u05e1","\u05e0\u05e2\u05dc","\u05db\u05d9\u05e1\u05d0","\u05db\u05ea\u05e8","\u05e7\u05e8\u05d7","\u05d6\u05d4\u05d1","\u05de\u05d6\u05dc\u05d2","\u05d6\u05de\u05df","\u05d7\u05dc\u05d9\u05dc","\u05dc\u05e4\u05d9\u05d3","\u05e9\u05dc\u05d2","\u05e9\u05e0\u05d4\u05d1","\u05d7\u05d9\u05d9\u05dc","\u05e4\u05d9\u05e8\u05de\u05d9\u05d3\u05d4","\u05d7\u05d5\u05d8","\u05db\u05d5\u05db\u05d1","\u05d8\u05d1\u05e2\u05ea","\u05e9\u05e8\u05e9\u05e8\u05ea","\u05dc\u05d1","\u05d0\u05d5\u05db\u05dc","\u05d0\u05d5\u05e0\u05d9\u05d4","\u05de\u05d7\u05d8","\u05e7\u05d5","\u05db\u05d9\u05e1\u05d5\u05d9","\u05dc\u05d5\u05d7","\u05d0\u05d5\u05e8","\u05de\u05e1\u05da","\u05de\u05e9\u05d7\u05e7","\u05d0\u05d5\u05e8\u05d2\u05e0\u05d9","\u05db\u05e4\u05ea\u05d5\u05e8","\u05e4\u05d4","\u05e1\u05d9\u05e8\u05d4","\u05d9\u05d3","\u05de\u05d9\u05d8\u05d4","\u05e7\u05d9\u05e8","\u05de\u05d2\u05d3\u05dc","\u05e7\u05dc\u05e3","\u05e7\u05e9\u05e8","\u05e8\u05d9\u05d7","\u05e7\u05d5\u05e8","\u05e8\u05e9\u05ea","\u05e0\u05e7\u05d5\u05d3\u05d4","\u05de\u05e2\u05d1\u05e8","\u05e6\u05dc\u05d7\u05ea","\u05d7\u05d5\u05e8","\u05e4\u05e2\u05de\u05d5\u05df","\u05db\u05d5\u05d7","\u05de\u05e4\u05ea\u05d7","\u05de\u05e0\u05d5\u05e2","\u05d2\u05dc","\u05e7\u05dc\u05e2","\u05e8\u05d0\u05e9","\u05e4\u05d7\u05d3","\u05e2\u05d5\u05e0\u05e9","\u05db\u05d1\u05d9\u05e9","\u05e2\u05d9\u05e8","\u05e2\u05d5\u05e7\u05e5","\u05e7\u05d5\u05d3","\u05de\u05e2\u05d2\u05dc","\u05d3\u05d1\u05e7","\u05e6\u05d9\u05e0\u05d5\u05e8","\u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1","\u05d1\u05d0\u05e8-\u05e9\u05d1\u05e2","\u05d1\u05e8\u05de\u05d5\u05d3\u05d4","\u05d8\u05d5\u05e7\u05d9\u05d5","\u05de\u05e6\u05e8\u05d9\u05dd","\u05dc\u05d5\u05e0\u05d3\u05d5\u05df","\u05d0\u05d5\u05d6\u05df-\u05d4\u05de\u05df","\u05de\u05d5\u05e1\u05e7\u05d1\u05d4","\u05d7\u05d2\u05d9\u05dd","\u05e9\u05d1\u05ea","\u05d4\u05d5\u05dc\u05d9\u05d5\u05d5\u05d3","\u05d9\u05d5\u05d5\u05df","\u05d0\u05d5\u05dc\u05dd","\u05d4\u05d7\u05e8\u05de\u05d5\u05df","\u05e0\u05d9\u05e0\u05d2\'\u05d4","\u05d0\u05d6\u05d5\u05e8","\u05e9\u05e7\u05dc","\u05d0\u05dc\u05d5\u05e3","\u05d0\u05e8\u05e5","\u05d0\u05de\u05e8\u05d9\u05e7\u05d4","\u05e7\u05e0\u05d9\u05d5\u05df","\u05d0\u05e0\u05d2\u05dc\u05d9\u05d4","\u05d0\u05e4\u05d9\u05e7\u05d5\u05de\u05df","\u05d4\u05d5\u05d3\u05d5","\u05d3\u05d5\u05db\u05d9\u05e4\u05ea","\u05e6\u05e8\u05e4\u05ea","\u05e4\u05e8\u05e1\u05d4","\u05e7\u05d9\u05e5","\u05de\u05e2\u05d9\u05df","\u05d0\u05e4\u05e8\u05d9\u05e7\u05d4","\u05e2\u05e7\u05e8\u05d1","\u05e2\u05dc\u05d9\u05d4","\u05e2\u05d9\u05d8","\u05d1\u05d9\u05d9\u05d2\u05dc\u05d4","\u05d0\u05d9\u05e8\u05d5\u05e4\u05d4","\u05de\u05e1\u05e2","\u05d1\u05d9\u05e8\u05d4","\u05db\u05d9\u05e4\u05d4","\u05d7\u05e6\u05d1","\u05e2\u05d5\u05d2\u05d4","\u05de\u05e8\u05d5\u05e6\u05d9\u05dd","\u05d3\u05d5\u05d3","\u05d2\u05d9\u05e8","\u05d8\u05e2\u05dd","\u05d1\u05d5\u05e7\u05e1\u05e8","\u05e4\u05e0\u05d3\u05d4","\u05d1\u05e9\u05e8","\u05e0\u05d5\u05d4\u05d2","\u05e6\u05de\u05d9\u05d2","\u05e9\u05d5\u05e8\u05e9","\u05ea\u05d5\u05e8","\u05e2\u05de\u05d5\u05d3","\u05de\u05d3\u05dc\u05d9\u05e7","\u05d9\u05dd","\u05e1\u05e8\u05d8\u05df","\u05e9\u05e8","\u05e7\u05e9\u05ea","\u05e0\u05ea\u05d9\u05d1","\u05e8\u05d5\u05e7","\u05e9\u05e4\u05d4","\u05d7\u05d5\u05dc\u05e6\u05d4","\u05d7\u05dc\u05e7","\u05de\u05d0\u05d1\u05e7","\u05d0\u05d1","\u05e8\u05d1","\u05d1\u05e8","\u05de\u05e7\u05d5\u05e8","\u05d1\u05d7\u05d9\u05e0\u05d4","\u05d1\u05d8\u05d7","\u05d0\u05d5\u05ea","\u05d0\u05d1\u05df","\u05d1\u05d5\u05e2\u05d4","\u05e2\u05d1\u05e8","\u05e1\u05e4\u05e8","\u05dc\u05e9\u05d5\u05df","\u05de\u05d3\u05d1\u05e8","\u05d9\u05d7\u05d9\u05d3\u05d4","\u05d0\u05d5\u05d2\u05e8","\u05d7\u05d5\u05d5\u05d4","\u05de\u05d9\u05d5\u05df","\u05de\u05e9\u05e7\u05e3","\u05d7\u05e4\u05e5","\u05de\u05d0\u05d2\u05e8","\u05d7\u05d1\u05e8","\u05e2\u05e6\u05dd","\u05e8\u05db\u05d1","\u05e6\u05d9\u05e4\u05d4","\u05e2\u05e5","\u05e1\u05d5\u05db\u05df","\u05de\u05e1\u05dc\u05d5\u05dc","\u05e6\u05dc","\u05e1\u05d9\u05db\u05d4","\u05de\u05e0\u05e6\u05d7","\u05d1\u05d9\u05ea-\u05e1\u05e4\u05e8","\u05d7\u05d5\u05d6\u05d4","\u05de\u05e7\u05dc","\u05dc\u05d5\u05d7\u05dd","\u05e9\u05d3\u05d4","\u05d7\u05ea\u05d9\u05db\u05d4","\u05de\u05d8\u05e2\u05df","\u05de\u05e7\u05d3\u05e9","\u05de\u05e4\u05d4","\u05dc\u05d4\u05e7\u05d4","\u05de\u05e9\u05e4\u05d8","\u05e1\u05d9\u05d1\u05d5\u05d1","\u05e1\u05d5\u05dc\u05dd","\u05dc\u05d1\u05e0\u05d4","\u05e6\u05d5\u05e4\u05d9\u05dd","\u05d6\u05e8\u05d5\u05e2","\u05d7\u05e4\u05e8\u05e4\u05e8\u05ea","\u05e7\u05e8\u05e6\u05d9\u05d9\u05d4","\u05d6\u05e8\u05d9\u05e7\u05d4","\u05d0\u05de\u05df","\u05d0\u05d5\u05db\u05e3","\u05de\u05d0\u05dc\u05e3","\u05d0\u05d5\u05e8\u05d6","\u05d3\u05d1\u05e8","\u05d0\u05d5\u05e4\u05df","\u05d0\u05d5\u05e8\u05d7","\u05d0\u05d5\u05e6\u05e8","\u05ea\u05e0\u05d5\u05e2\u05d4","\u05de\u05e8\u05db\u05d6","\u05e9\u05d8\u05e8\u05d5\u05d3\u05dc","\u05d1\u05e2\u05dc","\u05de\u05d0\u05d5\u05e9\u05e8","\u05d6\u05d5\u05d4\u05e8","\u05d0\u05d8\u05d5\u05dd","\u05d0\u05d7","\u05d0\u05d7\u05d5\u05d6","\u05d7\u05d9\u05d1\u05d5\u05e8","\u05de\u05d5\u05e6\u05d0","\u05d0\u05d7\u05e8","\u05de\u05d8\u05e8","\u05d0\u05d9","\u05d8\u05de\u05d1\u05dc","\u05db\u05d3\u05d5\u05e8","\u05d7\u05d5\u05e1\u05e8","\u05e0\u05e2\u05d9\u05de\u05d4","\u05e8\u05d5\u05d5\u05d7","\u05d0\u05e1\u05e8","\u05d0\u05dc\u05e3","\u05d0\u05d9\u05dc","\u05d0\u05dc\u05d4","\u05d0\u05dc\u05d9\u05dd","\u05e7\u05e6\u05d1","\u05de\u05e0\u05d5\u05e3","\u05d0\u05e9\u05e4\u05d4","\u05e4\u05e8\u05e7","\u05e7\u05e9","\u05d7\u05d1\u05dc","\u05ea\u05e4\u05e8","\u05db\u05e3","\u05ea\u05e9\u05d5\u05d1\u05d4","\u05e9\u05d9\u05d2\u05d5\u05e8","\u05d0\u05e9\u05e3","\u05d0\u05ea\u05e8","\u05db\u05d9\u05db\u05e8","\u05d7\u05d5\u05dc","\u05d1\u05d5\u05dc","\u05d1\u05d9\u05ea","\u05e4\u05d5\u05e2\u05dc","\u05dc\u05d7\u05e9","\u05db\u05e8\u05d9\u05e9","\u05d9\u05e9\u05df","\u05d7\u05e9\u05d1\u05d5\u05df","\u05e1\u05d2\u05d5\u05e8","\u05d3\u05dd","\u05d3\u05e8\u05da","\u05d1\u05d5\u05d7\u05df","\u05de\u05e2\u05de\u05d3","\u05d7\u05d9\u05d5\u05ea","\u05d7\u05e8\u05d9\u05e3","\u05d9\u05d5\u05e8\u05d4","\u05d1\u05d5\u05e0\u05d4","\u05d1\u05d5\u05e7\u05e8","\u05e2\u05e8\u05d1","\u05d7\u05de\u05d4","\u05ea\u05d9\u05e7","\u05d1\u05d6","\u05ea\u05ea","\u05d7\u05d5\u05dc\u05d9\u05d4","\u05e7\u05e9\u05d4","\u05e9\u05d8\u05e8","\u05de\u05d8\u05d4","\u05e9\u05d5\u05d8\u05e3","\u05d4\u05e7\u05e4\u05d4","\u05d1\u05d9\u05e6\u05d4","\u05db\u05e1\u05e3","\u05e6\u05d3\u05e7","\u05de\u05e8\u05d0\u05d4","\u05d2\u05e8","\u05de\u05dc\u05d7","\u05e1\u05e4\u05e7","\u05d2\u05d1","\u05e6\u05d9\u05e4\u05d5\u05e8\u05df","\u05db\u05ea\u05d1","\u05db\u05d1\u05d3","\u05e7\u05dc","\u05e0\u05e1","\u05d4\u05dc\u05da","\u05de\u05d7\u05d9\u05dc\u05d4","\u05d7\u05dc\u05dc","\u05e9\u05e8\u05ea","\u05e7\u05d5\u05dc","\u05de\u05d5\u05e2\u05d3\u05d5\u05df","\u05e1\u05e8\u05d8","\u05e0\u05d7\u05e9","\u05e4\u05e8\u05d7","\u05e9\u05d9\u05d7","\u05d1\u05d0\u05e8","\u05e4\u05e8\u05d9","\u05e9\u05d5\u05e8\u05e9\u05d9\u05dd","\u05d6\u05e7\u05df","\u05d7\u05d5\u05e4\u05d4","\u05d7\u05d2","\u05d1\u05e1\u05d9\u05e1","\u05e1\u05d3\u05e8","\u05e1\u05d5\u05e3","\u05de\u05d7\u05e9\u05d1","\u05e8\u05d9\u05e7","\u05e0\u05de\u05dc","\u05e1\u05dc"],"\u05e9\u05dd-\u05e7\u05d5\u05d3: \u05d3\u05d5\u05d0\u05d8":["\u05e2\u05d5\u05dc\u05dd","\u05d9\u05e7\u05d5\u05dd","\u05e9\u05de\u05e9","\u05e8\u05e2\u05d9\u05d3\u05ea \u05d0\u05d3\u05de\u05d4","\u05e9\u05d9\u05d8\u05e4\u05d5\u05df","\u05d4\u05d5\u05e8\u05d9\u05e7\u05df","\u05e9\u05e2\u05e8\u05d4","\u05de\u05e1\u05e8\u05e7","\u05e1\u05d2\u05e0\u05d5\u05df","\u05d0\u05d9\u05e4\u05d5\u05e8","\u05e6\u05d1\u05e2","\u05d2\u05d5\u05d5\u05df","\u05e7\u05d5\u05d1\u05d9\u05d4","\u05db\u05dc\u05d9","\u05de\u05d2\u05d9\u05dc\u05d4","\u05e2\u05ea\u05d9\u05e7","\u05d7\u05e4\u05d9\u05e8\u05d4","\u05d2\u05d9\u05d1\u05d5\u05e8","\u05d7\u05e8\u05d1","\u05db\u05d9\u05d3\u05d5\u05df","\u05d0\u05d5\u05de\u05e5","\u05de\u05d8\u05d5\u05e1","\u05db\u05e0\u05e3","\u05e6\u05d9\u05e4\u05d5\u05e8","\u05e7\u05df","\u05ea\u05e2\u05d5\u05e4\u05d4","\u05d6\u05d5\u05d2","\u05e6\u05de\u05d3","\u05db\u05d9\u05e9\u05e8\u05d5\u05df","\u05d0\u05d9\u05de\u05d5\u05df","\u05dc\u05d9\u05de\u05d5\u05d3","\u05e9\u05d9\u05e4\u05d5\u05e8","\u05dc\u05d7\u05dd","\u05e4\u05d9\u05e8\u05d5\u05e8","\u05e9\u05d1\u05d9\u05dc","\u05e0\u05d9\u05e6\u05d7\u05d5\u05df","\u05d4\u05e4\u05e1\u05d3","\u05d7\u05d5\u05dd","\u05e7\u05d5\u05e8\u05d0","\u05e1\u05d9\u05e4\u05d5\u05e8","\u05d4\u05e8\u05e4\u05ea\u05e7\u05d4","\u05de\u05d1\u05d5\u05da","\u05de\u05e4\u05dc\u05e6\u05ea","\u05e0\u05d1\u05d9\u05d0","\u05d2\u05d1\u05d9\u05e2","\u05ea\u05d7\u05e8\u05d5\u05ea","\u05e4\u05e8\u05e1","\u05e9\u05d9\u05d3\u05d5\u05e8","\u05e4\u05e8\u05e9\u05df","\u05de\u05d9\u05e7\u05e8\u05d5\u05e4\u05d5\u05df","\u05d1\u05de\u05d4","\u05ea\u05e4\u05e7\u05d9\u05d3","\u05d0\u05d4\u05d3\u05d4","\u05d0\u05d2\u05e8\u05d5\u05e3","\u05d6\u05d9\u05e8\u05d4","\u05e7\u05e8\u05d1","\u05d1\u05e2\u05d9\u05d8\u05d4","\u05d0\u05de\u05ea","\u05e9\u05e7\u05e8","\u05de\u05e6\u05d9\u05d0\u05d5\u05ea","\u05db\u05d9\u05d5\u05d5\u05df","\u05e0\u05d9\u05d5\u05d5\u05d8","\u05d7\u05d9\u05e4\u05d5\u05e9","\u05e9\u05d9\u05ea\u05d5\u05e3","\u05de\u05e9\u05d0","\u05de\u05d3\u05e2","\u05e0\u05d9\u05e1\u05d5\u05d9","\u05d1\u05d9\u05e7\u05d5\u05e8","\u05e2\u05d2\u05d9\u05dc","\u05ea\u05dc\u05d9\u05d5\u05df","\u05e6\u05de\u05d9\u05d3","\u05d2\u05dc\u05d2\u05dc","\u05e4\u05d0\u05d4","\u05e9\u05e7\u05d5\u05e3","\u05e7\u05d1\u05d5\u05e6\u05d4","\u05d3\u05dc\u05d9","\u05d7\u05de\u05de\u05d4","\u05d0\u05d1\u05e7","\u05d3\u05d2\u05dc","\u05d8\u05e8\u05d5\u05dc","\u05de\u05e2\u05e8\u05d4","\u05e0\u05e4\u05d7","\u05e2\u05e8\u05e4\u05d3","\u05d6\u05d5\u05de\u05d1\u05d9","\u05e4\u05e0\u05d9\u05e0\u05d4","\u05d0\u05e8\u05d1\u05d4","\u05e8\u05d5\u05d1\u05d4","\u05e8\u05ea\u05d9\u05d7\u05d4","\u05e8\u05d1\u05e2","\u05e2\u05d5\u05e8\u05d1","\u05d3\u05e7\u05dc","\u05e7\u05d5\u05e1\u05dd","\u05e7\u05e8\u05d7\u05d5\u05df","\u05e2\u05e6\u05d1","\u05d1\u05d5\u05d1\u05d4","\u05e8\u05e2\u05dd","\u05d1\u05e8\u05e7","\u05d0\u05d1\u05e7\u05d4","\u05d0\u05d9\u05e9-\u05d6\u05d0\u05d1","\u05d2\u05dc\u05d2\u05d5\u05dc","\u05db\u05e8\u05d9\u05ea","\u05de\u05e6\u05e2","\u05d8\u05d9\u05e8\u05d4","\u05e9\u05e0\u05d9\u05d9\u05d4","\u05d0\u05d3\u05d9\u05dd","\u05e2\u05e0\u05df","\u05e4\u05d8\u05d9\u05e9","\u05e8\u05e6\u05e4\u05d4","\u05db\u05dc\u05d0","\u05e9\u05d1\u05e8","\u05db\u05d9\u05e1","\u05e4\u05d7","\u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd","\u05d1\u05d5\u05e5","\u05ea\u05d5\u05db\u05d9","\u05d4\u05e8\u05e7\u05d5\u05dc\u05e1","\u05e1\u05d9\u05de\u05df","\u05e0\u05d7","\u05d9\u05ea\u05d5\u05e9","\u05de\u05e6\u05e2\u05d3","\u05e6\u05d1","\u05de\u05d0\u05de\u05df","\u05de\u05e9\u05d5\u05d0\u05d4","\u05d7\u05e0\u05d5\u05db\u05d4","\u05d2\u05d5\u05de\u05d9","\u05d3\u05d5\u05d1\u05d3\u05d1\u05df","\u05de\u05e9\u05d4","\u05de\u05e1\u05d5\u05e8","\u05e0\u05d5\u05d5\u05d4-\u05de\u05d3\u05d1\u05e8","\u05d0\u05e9\u05dc\u05d9\u05d4","\u05d7\u05dc\u05d5\u05dd","\u05de\u05d0\u05d3\u05d9\u05dd","\u05e4\u05dc\u05d5\u05d8\u05d5","\u05e1\u05e4\u05e1\u05dc","\u05e7\u05e8\u05e2","\u05e4\u05dc\u05e4\u05dc","\u05ea\u05d7\u05e0\u05d4","\u05e7\u05e6\u05e3","\u05e1\u05e4\u05d2","\u05de\u05e9\u05d9","\u05e7\u05e4\u05d4","\u05d7\u05dc\u05d1","\u05e1\u05d5\u05db\u05e8","\u05ea\u05d4","\u05e7\u05d5\u05e4\u05e5","\u05e1\u05dc\u05e1\u05d4","\u05e4\u05e8\u05e9","\u05e4\u05d9\u05e6\u05d4","\u05e9\u05db\u05d1\u05d4","\u05d2\u05df","\u05d3\u05dc\u05ea","\u05e9\u05e2\u05e8","\u05d1\u05e6\u05dc","\u05e9\u05d3","\u05de\u05d9\u05db\u05dc","\u05de\u05e4\u05e8\u05e5","\u05d7\u05e0\u05d9\u05d4","\u05de\u05d9\u05d9\u05d1\u05e9","\u05de\u05e1\u05d9\u05dc\u05d4","\u05e4\u05e1\u05e4\u05d5\u05e1","\u05d3\u05d7\u05dc\u05d9\u05dc","\u05de\u05d8\u05e8\u05d4","\u05e0\u05d4\u05d2","\u05e2\u05e6\u05dc\u05df","\u05d2\u05d2","\u05e7\u05e6\u05e8","\u05d9\u05e6\u05d9\u05d1","\u05e6\u05d9\u05d5\u05d3","\u05e2\u05d5\u05e8","\u05d7\u05d5\u05e8 \u05e9\u05d7\u05d5\u05e8","\u05d1\u05e1","\u05d7\u05d5\u05d1\u05e9","\u05de\u05d3\u05d5\u05d6\u05d4","\u05e9\u05d5\u05e4\u05d8","\u05e6\u05dc\u05d9\u05d9\u05df","\u05d4\u05e8 \u05d2\u05e2\u05e9","\u05ea\u05e8\u05d2\u05d9\u05dc","\u05d3\u05d1\u05d5\u05e8\u05d4","\u05e4\u05d5\u05dc\u05d5","\u05e9\u05e8\u05d9\u05d5\u05df","\u05e2\u05e9\u05df","\u05e7\u05e1\u05d3\u05d4","\u05de\u05d8\u05d1\u05d7","\u05e1\u05d4\u05e8\u05d4","\u05d0\u05e1","\u05e9\u05e8\u05d9\u05d8\u05d4","\u05d7\u05dc\u05d5\u05d3\u05d4","\u05e2\u05dc\u05d4","\u05e2\u05e4\u05e8","\u05de\u05db\u05d4","\u05e7\u05d5\u05dc\u05e8","\u05d7\u05dc\u05d5\u05df","\u05d6\u05e8\u05e2","\u05e7\u05dc\u05d9\u05e4\u05d4","\u05d2\u05e8\u05e2\u05d9\u05df","\u05d3\u05d9\u05d5","\u05d3\u05e3","\u05e2\u05d6","\u05e9\u05d1\u05d1","\u05e9\u05d1\u05d9\u05d8","\u05d3\u05e7\u05d4","\u05e2\u05d3\u05df","\u05d0\u05e8\u05d3","\u05e9\u05e8\u05e7\u05df","\u05e9\u05e7","\u05e7\u05e8\u05d9\u05d4","\u05e0\u05e4\u05d5\u05dc\u05d0\u05d5\u05df","\u05d4\u05e6\u05e4\u05d4","\u05d1\u05e0\u05e0\u05d4","\u05e7\u05dc\u05d8","\u05de\u05e4\u05d5\u05dc\u05ea","\u05e2\u05d2\u05dc\u05d4","\u05de\u05d7\u05e0\u05d4","\u05d8\u05d9\u05d2\u05e8\u05d9\u05e1","\u05d0\u05d5\u05d6\u05df","\u05e4\u05e8\u05e4\u05e8","\u05e6\u05e4\u05e8\u05d3\u05e2","\u05e7\u05d5\u05d8\u05d2\'","\u05e4\u05e8\u05d4","\u05e9\u05dc\u05d1","\u05e7\u05d5\u05e3","\u05dc\u05d5\u05dc\u05d0\u05d4","\u05db\u05d1\u05dc\u05d9\u05dd","\u05ea\u05d5\u05e3","\u05ea\u05e1\u05e4\u05d5\u05e8\u05ea","\u05e2\u05d5\u05e0\u05d4","\u05e2\u05d5\u05d2\u05df","\u05d0\u05e3","\u05e2\u05e8\u05e4\u05dc","\u05de\u05e4\u05e8\u05e9","\u05ea\u05d5\u05e8\u05df","\u05d8\u05dc\u05e4\u05d5\u05df","\u05de\u05db\u05ea\u05d1","\u05d2\u05e8\u05d1","\u05d0\u05d5\u05de\u05e6\u05d4","\u05e7\u05e2\u05e7\u05d5\u05e2","\u05e6\u05d9\u05d5\u05e8","\u05d0\u05d5\u05e9\u05e8","\u05e0\u05e9\u05de\u05d4","\u05d7\u05e9\u05d1","\u05d1\u05d4\u05de\u05d4","\u05e0\u05de\u05e8","\u05e6\u05d5\u05d5\u05ea","\u05d9\u05e6\u05d9\u05d0\u05d4","\u05d4\u05d5\u05e8\u05d4","\u05db\u05d9\u05e3","\u05db\u05d5\u05ea\u05d5\u05e0\u05ea","\u05e6\u05d9\u05d3\u05d4","\u05d8\u05d9\u05d5\u05dc","\u05d6\u05d0\u05d1","\u05e6\u05de\u05d7","\u05e7\u05e8\u05d9\u05e0\u05d4","\u05d1\u05e8\u05d6\u05dc","\u05d4\u05d5\u05e4\u05e2\u05d4","\u05d7\u05ea\u05d9\u05de\u05d4","\u05e4\u05e1\u05dc","\u05e6\u05d3\u05e3","\u05e1\u05d5\u05dc\u05dc\u05d4","\u05e0\u05de\u05dc\u05d4","\u05e6\u05e8\u05e6\u05e8","\u05de\u05d0\u05e4\u05d9\u05d4","\u05e4\u05dc\u05d3\u05d4","\u05e2\u05d5\u05e3","\u05de\u05db\u05e9\u05e3","\u05d7\u05d5\u05e9","\u05d6\u05d0\u05d5\u05e1","\u05db\u05e0\u05e1","\u05d3\u05d9\u05d5\u05e0\u05d5\u05df","\u05e2\u05e0\u05e3","\u05e1\u05dc\u05d5\u05df","\u05e9\u05e8\u05e3","\u05e4\u05dc\u05d2","\u05d7\u05e9\u05de\u05dc","\u05e6\u05e2\u05e6\u05d5\u05e2","\u05d0\u05e0\u05e8\u05d2\u05d9\u05d4","\u05d7\u05dc\u05dc\u05d9\u05ea","\u05e2\u05d5\u05e8\u05e7","\u05e1\u05d5\u05d7\u05e8","\u05d8\u05d1\u05e2","\u05e0\u05e6\u05d7","\u05d7\u05d1\u05e8\u05d4","\u05ea\u05e7\u05e8\u05d4","\u05de\u05d8\u05e4\u05e1","\u05e6\u05e8\u05d9\u05d7","\u05d6\u05d1\u05dc","\u05e9\u05d9\u05e7\u05d5\u05d9","\u05de\u05e8\u05db\u05d9\u05d1","\u05e0\u05d7\u05dc\u05d9\u05d0\u05dc\u05d9","\u05e0\u05e9\u05e7","\u05d9\u05d9\u05df","\u05d9\u05e9\u05d9\u05d1\u05d4","\u05e1\u05ea\u05d9\u05d5","\u05d0\u05d1\u05d9\u05d1","\u05e4\u05d9\u05e0\u05d4","\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc","\u05e9\u05d9\u05e0\u05d4","\u05d2\u05e4\u05df","\u05de\u05d5\u05e9\u05d1","\u05de\u05e9\u05e7\u05e4\u05ea","\u05e4\u05d8\u05dc","\u05e1\u05d9\u05d5\u05d8","\u05e9\u05d9\u05e8\u05d4","\u05d1\u05dc\u05e9","\u05e9\u05d5\u05de\u05df","\u05e1\u05d1\u05d5\u05df","\u05d0\u05d9\u05e9\u05d5\u05df","\u05db\u05d5\u05d1\u05e2","\u05ea\u05d9\u05e8\u05e1","\u05de\u05d2\u05d1\u05ea","\u05e4\u05d2\u05d9\u05e9\u05d4","\u05d2\u05de\u05dc","\u05d1\u05d8\u05d5\u05df","\u05db\u05e4\u05e8","\u05e7\u05d9\u05d1\u05d5\u05e5","\u05d7\u05d5\u05e8\u05e3","\u05d7\u05d5\u05e7\u05e8","\u05e9\u05e8\u05d9\u05e8","\u05e9\u05d5\u05d8\u05e8","\u05e9\u05e7\u05e2","\u05e9\u05e7\u05d9\u05e2\u05d4","\u05d6\u05e8\u05d9\u05d7\u05d4","\u05d7\u05e5","\u05e8\u05db\u05d1\u05ea","\u05e4\u05e6\u05e2","\u05ea\u05d5\u05dc\u05d4","\u05e9\u05e7\u05d8","\u05e8\u05e2\u05e9","\u05d2\u05d5\u05e3","\u05e9\u05d3\u05e8","\u05e8\u05d5\u05d5\u05d9\u05d4","\u05d7\u05e0\u05d5\u05ea","\u05de\u05d9\u05dc\u05d4","\u05de\u05e1\u05db\u05d4","\u05e0\u05d9\u05e1\u05d9\u05d5\u05df","\u05e2\u05d1\u05d3","\u05e6\u05e4\u05d5\u05df","\u05d1\u05e0\u05d9\u05d9\u05df","\u05de\u05d1\u05e0\u05d4","\u05e9\u05dc\u05d9\u05d7","\u05dc\u05d1\u05df","\u05db\u05d1\u05e9","\u05e2\u05d5\u05e8\u05da","\u05d1\u05e7\u05e8","\u05e4\u05d0\u05e8\u05e7","\u05de\u05d8\u05e8\u05d9\u05d4","\u05de\u05db\u05e8\u05d4","\u05d8\u05d7\u05d9\u05e0\u05d4","\u05e9\u05d5\u05e7","\u05e7\u05dc\u05d9\u05e2\u05d4","\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd","\u05e1\u05de\u05e8\u05d8\u05d5\u05d8","\u05e4\u05e8\u05d5\u05d5\u05d4","\u05e4\u05e0\u05e1","\u05e9\u05e0\u05d9","\u05e8\u05de\u05d4","\u05d7\u05d9\u05e4\u05d5\u05e9\u05d9\u05ea","\u05d1\u05d8\u05df","\u05de\u05d7\u05e1\u05df","\u05d0\u05e1\u05dd","\u05e4\u05e1\u05e7-\u05d6\u05de\u05df","\u05de\u05d1\u05e6\u05e2","\u05d7\u05d6\u05e8\u05d4","\u05e9\u05d5\u05de\u05e8","\u05de\u05d5\u05e0\u05d4","\u05ea\u05d0","\u05d9\u05d5\u05e0\u05d4","\u05e1\u05e0\u05d3\u05dc","\u05de\u05d2\u05d9\u05e4\u05d4","\u05e6\u05dc\u05dd","\u05e9\u05dc\u05d5\u05dd","\u05de\u05d7\u05dc\u05d4","\u05d7\u05de\u05d9\u05df","\u05e4\u05dc\u05d0\u05e4\u05dc","\u05e8\u05d7\u05d5\u05d1","\u05e9\u05e2\u05d5\u05df","\u05d0\u05d5\u05e4\u05e7","\u05d0\u05dc\u05de\u05d5\u05d2","\u05e8\u05d5\u05e9\u05dd","\u05db\u05d4\u05df","\u05d2\u05e8\u05dd","\u05d7\u05d5\u05e7","\u05e8\u05e5","\u05d7\u05e6\u05d5\u05ea","\u05e8\u05d3\u05d9\u05d5","\u05db\u05ea\u05dd","\u05dc\u05d9\u05d3\u05d4","\u05de\u05d1\u05d7\u05df","\u05d0\u05d5\u05d3\u05dd","\u05e9\u05d5\u05e7\u05d5","\u05d7\u05d8\u05d9\u05e3","\u05e7\u05e0\u05d4","\u05de\u05d5\u05e8\u05d7","\u05d0\u05d9\u05d5\u05dd","\u05d2\u05d5\u05e9","\u05d1\u05e8\u05d9\u05ea","\u05e6\u05d9\u05d1\u05d5\u05e8","\u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1","\u05d9\u05e9\u05e8\u05d0\u05dc","\u05de\u05ea\u05d7","\u05d2\u05e1"]},"ro":{"Nume de Cod":["RULET\u0102","DRAGON","R\u0102ZBOI","MIERE","BOMB\u0102","CAZINOU","ZG\xc2RIE-NORI","SATURN","MAR\u0162IAN","BICI","ANTARCTICA","OM DE Z\u0102PAD\u0102","CONCERT","CIOCOLAT\u0102","AVION","MILIONAR","DINOZAUR","PIRAT","GOARN\u0102","PINGUIN","P\u0102IANJEN","PROIECTIL","AMBASAD\u0102","PISTOL","BOAL\u0102","SPION","PRIN\u0162ES\u0102","GENIU","HO\u0162","OPER\u0102","CAVALER","STADION","LIMUZIN\u0102","FANTOM\u0102","FURGONET\u0102","\xceNGHE\u0162AT\u0102","LASER","MOARTE","SPITAL","AMBULAN\u0162\u0102","CARACATI\u0162\u0102","ELICOPTER","CANGUR","MICROSCOP","CENTAUR","SUPEREROU","TELESCOP","PARA\u015eUT\u0102","ORNITORINC","OLIMP","SATELIT","\xceNGER","ROBOT","UNICORN","VR\u0102JITOARE","GROPAR","SCUFUND\u0102TOR","OTRAV\u0102","BOSTAN","FOC","PLAC\u0102","BALEN\u0102","LUN\u0102","PE\u015eTE","DOCTOR","BISERIC\u0102","CUREA","INFIRMIER\u0102","V\xc2NT","LEU","POAM\u0102","AER","IEPURE","BANC\u0102","IARB\u0102","ROCHIE","PITIC","P\u0102DURE","MA\u015eIN\u0102","M\u0102NU\u015e\u0102","M\u0102R","ULEI","BUC\u0102TAR","URS","PISIC\u0102","VIA\u0162\u0102","NOROC","URIA\u015e","FA\u0162\u0102","PLAJ\u0102","HOTEL","AP\u0102","H\xc2RTIE","VIERME","AVOCAT","CERCET\u0102TOR","DANS","MORCOV","KETCHUP","NOAPTE","BUMBAC","PICIOR","\u015eOARECE","CU\u0162IT","TEATRU","POLI\u0162IE","VAPOR","PILOT","DEGET","PROFESOR","STICL\u0102","ZI","REGE","G\xc2T","REGIN\u0102","DINTE","C\xc2INE","CAL","PANTOF","SCAUN","COROAN\u0102","GHEA\u0162\u0102","AUR","FURCULI\u0162\u0102","TIMP","FLAUT","F\u0102CLIE","Z\u0102PAD\u0102","FILDE\u015e","SOLDAT","PIRAMID\u0102","COARD\u0102","STEA","CUIB","BAND\u0102","INIM\u0102","BLOC","CORDON","AC","CARNET","CARTE","MAS\u0102","MARE","SOLU\u0162IE","JOC","LOC","BUTON","GUR\u0102","ETICHET\u0102","M\xc2N\u0102","PAT","ZID","TURN","ARTICOL","RUG","PAN\u0102","CRUCE","PLAS\u0102","MOBIL","PRIZ\u0102","TALER","GAUR\u0102","PRAG","FOR\u0162\u0102","CHEIE","TUN","VAL","SPUM\u0102","CAP","POL","CENTRU","SCOAB\u0102","PAST\u0102","CUI","COD","CERC","PALM\u0102","P\u0102R","BUCURE\u015eTI","AUSTRALIA","TOMIS","TOKYO","EGIPT","LONDRA","M\u0102M\u0102LIG\u0102","MOSCOVA","CANADA","EMINESCU","HOLLYWOOD","GRECIA","ROMA","CEAHL\u0102U","NINJA","TRANSILVANIA","KIWI","GERMANIA","JUDE\u0162","AMERICA","ATLANTIDA","ROM\xc2NIA","CORCODU\u015e","AFRICA","ZIMBRU","FRAN\u0162A","POTCOAV\u0102","P\u0102CAL\u0102","MEXIC","EUROPA","SCORPION","BERLIN","INDIA","CARPA\u0162I","LOCH NESS","BEIJING","\u015eOIM","TRAFICANT","AZTEC","COLAC","VAR\u0102","OCHI","CURENT","BROASC\u0102","BAZ\u0102","LAC","PULP\u0102","TABLET\u0102","TOC","SEMN","MIN\u0102","SOMN","LILIAC","GR\u0102TAR","RAZ\u0102","CO\u015e","CORN","BANC","CAPR\u0102","LAM\u0102","PLUTO","IUTE","BATERIE","RO\u015eIE","TOB\u0102","AGENT","CIOC","MO\u0162","TON","POD","CER","MU\u015eCHI","ARTIFICIU","CAPITAL","BALON","CABIN\u0102","CASET\u0102","C\u0102MIN","CEAS","CENTUR\u0102","CALAPOD","LEG\u0102TUR\u0102","CIRCUIT","CLAS\u0102","CLIS\u0102","DEBIT","DOS","ELEMENT","ESEU","FARMEC","MECI","FI\u015e\u0102","SOL","FREZ\u0102","GALBEN","GOGOA\u015e\u0102","FLUTURE","GUT\u0102","INEL","LIMB\u0102","C\xc2MP","CICLU","LIR\u0102","FUS","BUTELIE","C\xc2RTI\u0162\u0102","\u015eAH","FRANC","C\u0102LUG\u0102RI\u0162\u0102","MARCHIZ\u0102","MEDITA\u0162IE","COAD\u0102","C\u0102PU\u015e\u0102","MUR","BUTUC","RACHET\u0102","NAVET\u0102","VATR\u0102","CURS\u0102","PALAT","B\u0102T\u0102TUR\u0102","DILIGEN\u0162\u0102","BAZIN","ANCOR\u0102","PALET\u0102","MANECHIN","SALVARE","L\u0102STUN","PROFIL","PAPAGAL","TERAS\u0102","MERCUR","ARC","PRIMAR","PROCES","RADICAL","R\xc2ND","ORGAN","CELUL\u0102","REGIM","BRA\u0162","SLUJB\u0102","MODEL","BAIE","ROD","ROST","CARIER\u0102","BALAN\u0162\u0102","SABOT","SARCIN\u0102","SCAI","SCAR\u0102","SCUT","SENS","PRES\u0102","FILAJ","PHOENIX","SOND\u0102","SANIE","ARM\u0102","SP\u0102TAR","SPOR","STAT","SFER\u0102","STA\u0162IE","STERIL","FENT\u0102","MUF\u0102","ANTREU","SCOAR\u0162\u0102","MAMUT","ALBIE","REVOLU\u0162IE","CANAL","GAZ","DELAVRANCEA","TABL\u0102","PIL\u0102","TABLOU","PU\u0162","TAC\xc2M","CADRU","TAMPON","DOZ\u0102","TALIE","\u015eA","AMAZON","SPA\u0162IU","TAMBUR","TALP\u0102","TEASC","PIA\u0162\u0102","COT","ARBORE","ARIE","GENERAL","AZIL","TELECOMAND\u0102","PLATOU","OCAZIE","BOX","DREPT","ORDONAN\u0162\u0102","URECHE","COMPLEX","PELICUL\u0102","NEGRU","NOT\u0102","PIES\u0102","\u0162AP","ME\u015e\u0102","R\u0102D\u0102CIN\u0102","BOB","COLOAN\u0102","SPIRIT","PORT","CUP\u0102","CULT","VID","URM\u0102","SOR\u0102","POST"],"Nume de Cod: Duet":["CUV\u0102","LINIE","MORS\u0102","LIMONAD\u0102","STEAG","PE\u0218TER\u0102","FURNIC\u0102","VAMPIR","TATUAJ","RANCH","L\u0102CUST\u0102","PU\u0218C\u0102","VIKING","VISCOL","MACHIAJ","OLAR","GUST","BLUES","GOLF","PIN","P\u0102PU\u0218\u0102","PR\xc2NZ","PATINE","ME\u0218TE\u0218UG","STRAN\u0102","PENI\u021a\u0102","UNT","PERN\u0102","CASTEL","SUL","DISC","DRON\u0102","CIOCAN","CAT","CARCER\u0102","PAUZ\u0102","\u0218IRET","BUZUNAR","CONSERV\u0102","PLAT","CUC","CASTAN\u0102","NOROI","BIJUTIER","HERCULE","FIR","\u021a\xc2N\u021aAR","P\u0102STAIE","ISLANDA","GER","ANTRENOR","CARTOF","AGRAF\u0102","TORT","\u021aESTOAS\u0102","CR\u0102CIUN","CIREA\u0218\u0102","MOISE","ECHIP\u0102","BASTON","BUL\u0102","BISCUITE","SPRAY","PIPER","MARIONET\u0102","MOAR\u0102","MARACAS","ZGUR\u0102","RETEZAT","EPOCA DE GHEA\u021a\u0102","MEMORIE","SALOPET\u0102","PIEPTENE","OCHELARI","PIZZA","S\u0102PUN","CHINDIE","C\u0102RU\u021a","VIOLET","B\u0102\u0218IC\u0102","LINGUR\u0102","CEAP\u0102","N\u0102LUC\u0102","TANC","SHERLOCK","ARCAD\u0102","USC\u0102TOR","FRATE","DERANJ","BRID\u0102","SPERIETOARE","NOTRE DAME","KILT","BARAC\u0102","BONSAI","VALEA PL\xc2NGERII","PRA\u0218TIE","VEVERI\u021a\u0102","CAS\u0102","MARATON","AUZ","POPCORN","DEGE\u021aICA","OU","BIKINI","S\u0102RUT","VIOAR\u0102","PIELE","COAST\u0102","ASTRONAUT","GAUR\u0102 NEAGR\u0102","NISIP","VIS","STETOSCOP","COPIL","CORT","MIL\u0102","JUDEC\u0102TOR","VULCAN","NAILON","CHITAR\u0102","ALBIN\u0102","GUM\u0102","BAN","FUM","CASC\u0102","BUC\u0102T\u0102RIE","SAHARA","RECORD","PARAF\u0102","ARIP\u0102","AX","VOPSEA","CRANIU","LACRIM\u0102","CRISTAL","NEWTON","ULCIOR","FOAIE","CENU\u0218\u0102","GULER","GEAM","P\u0102DURAR","IUBIRE","SUP\u0102","CERNEAL\u0102","SALON","R\xc2U","SFINX","LETEA","FULGER","SCROAF\u0102","TOALET\u0102","CLEOPATRA","SALAT\u0102","ALAM\u0102","FLUIER","STR\u0102JER","SUROR\u0102","REZIGOR","SCRISOARE","C\u0102PITAN","LUSTRU","CRAB","C\u0102R\u0102MID\u0102","EINSTEIN","IMN","CREAST\u0102","TAB\u0102R\u0102","UNIVERSITATE","GLUME\u021a","CORB","BOBOC","DOLAR","MINUT","OREZ","ARMAT\u0102","PENTAGON","BIG BANG","COLUMB","OR\u0102","FIERAR","ECATERINA TEODOROIU","ZOMBIE","COSA\u0218","ROAT\u0102","DENTIST","BR\xc2NZ\u0102","P\u0102M\xc2NT","NAPOLEON","CLUJ","STRAD\u0102","FEBR\u0102","CEA\u021a\u0102","BRICI","CABLU","GUVERNATOR","COWBOY","BUREBISTA","MIREAS\u0102","CEZAR","SER\u0102","PULBERE","BOCANC","TROL","MAC","VOLUM","SCHI","RUSIA","PERL\u0102","PACIFIC","BUB\u0102","PA\u0218TE","SFERT","MICROUNDE","DU\u0218","COMBUSTIBIL","CUTREMUR","CIOAR\u0102","MAGICIAN","NERV","TUNET","MUSCHET\u0102","GHE\u021aAR","PUDR\u0102","ROL\u0102","V\xc2RCOLAC","LAN\u021a","SECUND\u0102","PRICI","BARB\u0102","ABUR","NOR","CUPIDON","AB\u021aIBILD","\u0218ARPE","CRUCI\u0218\u0102TOR","LUPT\u0102","HART\u0102","VIRUS","TORNAD\u0102","BICICLET\u0102","CIOC\xc2RLIE","HAMBURGER","INDICATOR","NOE","VR\u0102JITOR","PARAD\u0102","\u0218OR\u021a","CURRY","AX\u0102","PUPITRU","COAM\u0102","\u0218OBOLAN","\u0218UNC\u0102","CAUCIUC","PACIENT","FIREZ","OAZ\u0102","VENUS","SEDIU","RUPTUR\u0102","SF. MIHAIL","CALE","CRET\u0102","GIMNAST","METRU","RODEO","M\u0102TASE","CAFEA","JOCHEU","NECTAR","SOS","VEL\u0102","L\xc2N\u0102","TUNEL","GR\u0102DIN\u0102","MIROS","U\u0218\u0102","LEMN","\u021aAR\u0102","ELEFANT","CUT\u0102","ORB","TIGV\u0102","MAM\u0102","DESEN","BAR\u0102","RATEU","PO\u0218ET\u0102","IGLU","BUZ\u0102","MAIMU\u021a\u0102","MELON","SUDOARE","\u0218OFER","DELT\u0102","SARE","LENE\u0218","MANSARD\u0102","O\u021aEL","\u0218ORT","FURTUN\u0102","SCAUN RULANT","GRAJD","MECANISM","ZEPELIN","\u021aEPU\u0218\u0102","TUTU","BAS","MAMAIA","MU\u0218TAR","MEDIC","MEDUZ\u0102","ALASKA","BERE","MONA LISA","FERM\u0102","CRUCIAT","TRUC","BOL","RUFE","POLO","PESMET","ARMUR\u0102","CEAI","REN","SUMO","P\xc2INE","AS","RUGIN\u0102","DORIN\u021a\u0102","NOD","CON","BRAZILIA","COJOC","HALLOWEEN","AJUN","MINTE","\u0218OC","ADRES\u0102","ALUN\u0102","SCOIC\u0102","V\xc2RF","SPAD\u0102","OGLIND\u0102","V\xc2SL\u0102","MIRE","PAGIN\u0102","DOP","BOAB\u0102","A\u0218CHIE","COMET\u0102","PORC","POVESTE","MAGAZIN","CURCUBEU","SAC","BERBEC","ZAH\u0102R","SOARE","LAB\u0102","BANAN\u0102","RADIO","\u021aINUT\u0102","MLA\u0218TIN\u0102","MANICHIUR\u0102","VIITUR\u0102","TIMBRU","C\u0102RU\u021a\u0102","TIGRU","COMPUTER","CHELNERI\u021a\u0102","PIERSIC\u0102","HOMER","BOXER","RAI","OAIE","MINOTAUR","NUNT\u0102","KUNG FU","MUMIE","PAS","PINTENI","GANGSTER","LAPTE","BROTAC","\u0218AMPON","FRAC","FIL\u0102","AVALAN\u0218\u0102","FUNIE","\u0218EF","\u0218UT","REGISTRU","CUGET","UM\u0102R","ANS\u0102","NAS","BUTOI"]},"sk":{"Krycie men\xe1":["HODINKY","ZIMA","SLOV\xc1K","RADOS\u0164","DUCH","PARN\xcdK","PAV\xdaK","NEMECKO","TELEV\xcdZIA","KVAPE\u013d","CICAVEC","TALIANSKO","MA\u010cKA","VLNA","OBOR","TU\u010cNIAK","HORA","PEC","L\xcd\u0160KA","STENA","SPEV\xc1K","ZUB","SESTRA","DRAK","LOCHNESKA","KAPUSTA","JADRO","IHLA","KNI\u017dNICA","SLNKO","KR\xcd\u017d","RU\u017dA","D\u017dUNG\u013dA","PARK","MIER","PL\xc1\u0160\u0164","JAZDEC","PREZIDENT","ANGLICKO","MRAKODRAP","JESE\u0147","HVIEZDA","OB\xc1LKA","STOPKY","ZRKADLO","MEL\xd3N","TR\xdaBA","CERUZKA","L\xdaKA","SVETLO","MUCHOTR\xc1VKA","VE\u017dA","ORECH","BUNKA","HUDBA","TELEF\xd3N","BASA","KO\u0160E\u013dA","AMERI\u010cAN","RYS","SMOLA","CINTOR\xcdN","CHLIEB","\u0160KOLA","MRAVEC","K\u013d\xda\u010c","MESTO","VETERN\xcdK","D\xc1\u017d\u010e","HUBA","KR\u010cMA","CHOROBA","SUK\u0147A","PLOT","GU\u013dA","STRIEBRO","UMELEC","P\xcdLA","\u017dERIAV","D\xddKA","BRATISLAVA","UTER\xc1K","CHROB\xc1K","\u010cECH","KRAVA","RUS","\u010cELO","P\xda\u0160\u0164","H\xc1K","V\xcdLA","VEDEC","FYZIK","DOM","\u010cOKOL\xc1DA","OROL","OKNO","V\xc1HA","\u017dELEZO","HEREC","L\xc1VA","BANK\xc1R","JAB\u0139\u010cKO","\u010cERT","ZADOK","UP\xcdR","OSTROV","ROPA","PLAST","PIVO","FILM","HREBE\u0147","SEDMOKR\xc1SKA","VIEDE\u0147","\u0160PAGETA","KENTAUR","VOJVODCA","SLON","AMERIKA","DIE\u0164A","ZOMBIA","U\u010cITE\u013d","Z\xc1KON","KANADA","STRANA","KAMAR\xc1T","CESTA","PROGRAM\xc1TOR","NOHA","\u0160AL\xc1T","RAKETA","PANNA","YETTI","JAZYK","BET\xd3N","PRINCEZN\xc1","PAPU\u010cA","\xdaRAD","BERL\xcdN","R\xc1DIO","AUTOBUS","MATKA","MOTORKA","HLAVA","SMR\u0164","LIST","MR\xc1Z","TRPASL\xcdK","GR\xc9CKO","TULIP\xc1N","V\xcdRUS","KROKOD\xcdL","UHLIE","M\xc4SO","VZDUCH","LOPTA","KORUNA","KLOKAN","VIDLI\u010cKA","PAPAG\xc1J","\u013dAD","HLINA","DVERE","PO\u010c\xcdTA\u010c","VODA","STROM","DUB","CHOBOTNICA","JAZERO","KLADIVO","\u017dEHLI\u010cKA","REBRO","PODVODN\xcdK","SEDLIAK","KLAV\xcdR","KAB\xc1T","\u0160O\u0160OVI\u010cKA","\u010c\xcdNA","NEPRIATE\u013d","OKULIARE","VODI\u010c","PALICA","ROZPR\xc1VKA","LOKOMOT\xcdVA","BRUCHO","KER","ZEMIAK","ME\u010c","TANIER","ANJEL","OHE\u0147","HLIN\xcdK","TLA\u010cIDLO","POVRAZ","KYVADLO","RE\u0164AZ","KOZA","KNED\u013dA","LOPATA","LIMON\xc1DA","V\xc4ZE\u0147","VE\u013dRYBA","AUSTR\xc1LIA","MOT\xddLIK","BIOL\xd3G","KOM\xcdN","KOCKA","KVET","TOPO\u013d","\u0160\u0164UKA","GITARA","LAMPA","DOKTOR","LETO","L\xc1SKA","JAR","SRDCE","KURA","UCHO","RIEKA","OM\xc1\u010cKA","ROH","Z\xc1MOK","KLAUN","SKRUTKA","BAN\xc1N","VENU\u0160A","KAKTUS","MA\u010eAR","STRELEC","L\xc1TKA","ROLA","KORYTNA\u010cKA","SKLO","OKO","PAPIER","HRNIEC","KARTA","MLIEKO","KOBYLKA","CESTA","PLYN","POLICAJT","ATL\xc9T","DELO","NEMOCNICA","PLASTEL\xcdNA","PODNIKATE\u013d","VRCHOL","PO\xc9ZIA","PREDAVA\u010c","NOC","ZEBRA","POMARAN\u010c","Z\xc1KUSOK","KOSA","\u017dOBR\xc1K","SUPERHRDINA","MARS","FIG\xdaRKA","KL\xc1VESNICA","PARADAJKA","\u010cAPICA","\u0160PANIEL","PI\u0160TO\u013d","D\xc9MON","AFRIKA","VAJCE","VT\xc1KOPYSK","PAS","NETOPIER","PR\xc1\u010cKA","\u0160\u0164ASTIE","ZEM","KEFA","KOLOBE\u017dKA","KO\u0160ICE","BRADA","B\xc1SNIK","HOLAN\u010eAN","JEDNORO\u017dEC","AUTO","SEKERA","POLE","N\xd4\u017d","BRAZ\xcdLIA","BR\xc1NA","P\xd3L","JE\u017dKO","CIRKUS","OTEC","VODN\xcdK","KORE\u0147","FRANC\xdaZSKO","LEV","BRAT","\u010cERE\u0160\u0147A","PEKING","\u010cARODEJN\xcdK","KNIHA","FUTBALISTA","STOLI\u010cKA","KAMI\xd3N","FLAUTA","LIETADLO","VOJNA","PRACH","LES","LUPI\u010c","SVIE\u010cKA","K\xd4\u0160","DIAMANT","KOZMONAUT","JASKY\u0147A","DEDINA","ROBOTN\xcdK","MEDVE\u010e","NOHAVICE","\u0160\xcdPKA","HLAS","F\u013dA\u0160A","CUKOR","LOS","PAN\xc1K","SMREK","POLIEVKA","HRAD","VIE\u010cKO","\u0160KRIATOK","BUBLINA","DR\xd4T","VOZ","VESM\xcdR","\u017dRALOK","SNEH","SLIVKA","PRASA","\xdaDOLIE","KLINEC","KOLENO","VIETOR","KAPOR","SPR\xc1VA","PANVA","GUMA","NOS","PAPRIKA","PALEC","DINOSAURUS","MATEMATIK","SO\u013d","DREVO","KORENIE","FILOZOF","KINO","SNE\u017dIENKA","JA\u0160TERICA","KAME\u0147","K\xdaZLO","M\xdaKA","LY\u017dICA","ORG\xc1N","PLACKA","MESIAC","HRA","SKRUTKOVA\u010c","PONO\u017dKA","VLAK","VIERA","SYR","PES","KR\xc1\u013d","KME\u0147","PAR\xcd\u017d","STANICA","ZVON\u010cEK","\u0160KORPI\xd3N","OVCA","MY\u0160","MOSKVA","SAL\xc1MA","OBCHOD","KOH\xdaTIK","TR\xc1VA","RU\u010cI\u010cKA","TIGER","CESTOVATE\u013d","PLAN\xc9TA","MORE","LOND\xddN","PR\xc1CA","\xc1ZIA","KLIE\u0160TE","MRKVA","PRSTE\u0147","LASER","KOM\xc9TA","ZLATO","KLOB\xdaK","POPOL","HOKEJISTA"],"Krycie men\xe1: Duet":["LIPA","GRIL","P\xcd\u0160\u0164ALA","BUBON","ESKYM\xc1K","STUD\u0147A","PRIEHRADA","BARAN\u010cEK","MORAVA","POTOK","\u010cAKAN","PASCA","MAJ\xc1K","LASTOVI\u010cKA","JUPITER","BAZ\xc9N","KOMORA","D\xdaHA","POPOLU\u0160KA","KOLUMBUS","UZOL","PAD\xc1K","KOROK","PIESE\u0147","RAK","CHAL\xdaPKA","KABELKA","\u017dABKA","GOLF","BABI\u010cKA","HELMA","\u0160TADI\xd3N","STRUNA","KR\xcdDLO","NEVESTA","KUVIK","DISK","GEMER","KVAPKA","TORN\xc1DO","\u017dIRAFA","PR\xdaD","LIEK","PARA","DIERA","ZOB\xc1K","KADERN\xcd\u010cKA","MED","KALICH","BALK\xc1N","CHLADNI\u010cKA","VRAK","BOXER","STEP","BUMERANG","HOLUB","\u0160\xcdP","HUSLE","VLK","FORMULA","VRECKO","FARBA","KR\xc1TER","CESNAK","DIVADLO","\u0160AT\xd4\u010cKA","TRAKTOR","K\xc1VA","CHIRURG","JASLI\u010cKY","STATOK","NO\u017dNI\u010cKY","MU\u0160KA","MIKUL\xc1\u0160","FUTR\xc1L","IGLU","KATEDR\xc1LA","PYRAM\xcdDA","SOPKA","RAJ","SIE\u0164","LUPA","PE\u010cIATKA","TUREK","PRIEKOPA","SKOKAN","KOTVA","PAROHY","MA\u010cETA","PO\u0160T\xc1R","RO\u017dOK","RUM","OBLOHA","Z\xc1VOD","TRIESKA","PL\xc1\u017d","TREZOR","AKV\xc1RIUM","SNEHULIENKA","KUFOR","N\xc1RAMOK","FEFER\xd3NKA","ELEKTRI\u010cKA","TABU\u013dA","KR\xc1LIK","\u017dIAROVKA","PONORKA","HOTEL","BEN\xc1TKY","PODKOVA","ROZH\u013dAD\u0147A","DYNAMIT","MO\u010cIAR","PENA","HAD","KAJAK","KLIETKA","PR\xcdLIV","KUCH\xc1RKA","PIVNICA","\u013dADOVEC","P\xda\u0164","TELOCVI\u010c\u0147A","VIANOCE","HRDINA","VLTAVA","CIS\xc1R","VLKOLAK","JE\u017dIBABA","SIR\xc9NA","TRIEDA","ATLAS","BONSAJ","LINKA","M\xdaMIA","D\xc1MA","LETU\u0160KA","TUNEL","SOKOL","AUTOMAT","KRY\u0160T\xc1L","METRO","MRO\u017d","PR\xcdSTAV","DRUID","BAT\xc9RIA","BLESK","KUKURICA","UNIVERZITA","M\xdaZEUM","STRA\u0160IAK","INDIA","KIMONO","POL\xc1RKA","MOBIL","\u0160K\xd4LKA","\u010cREPINA","KON\xcdK","VRTU\u013dN\xcdK","TATRY","STRECHA","REBR\xcd\u010cEK","VYSO\u010cINA","PLECH","KRK","OBUVN\xcdK","KUKLA","SEKRET\xc1R","M\xc4SIARKA","LEBKA","TITANIK","POLKA","HR\xcdB","V\u010cELA","HOLLYWOOD","GORILA","SLUHA","HRN\u010cEK","ASTROL\xd3G","PLUTVA","GEJZ\xcdR","TABLETKA","Z\xc1HRADN\xcdK","DR\xc1HA","\u0160ACHOVNICA","B\xd4B","JED","\u0160KODA","\u017dIHADLO","PERN\xcdK","JUH","RYBN\xcdK","ORLOJ","NANUK","TULE\u0147","HASI\u010c","VA\u0147A","KORAL","ORIE\u0160OK","ST\u0139P","KAPIT\xc1N","POH\u013dADNICA","\u0160VAJ\u010cIARSKO","FABRIKA","VRTU\u013dA","KUBA","KRAVATA","KAN\xc1L","ORGAN","STRAKA","CITR\xd3N","\u010cAJ","FARA\xd3N","\u0164AVA","JELE\u0147","MLYN","HMLA","ANTARKT\xcdDA","LEKNO","HOREC","KO\u017dA","BREH","DEKA","Z\xc1PAD","OLYMPI\xc1DA","JERUZALEM","KRAB","POH\xc1R","BONB\xd3NIK","VENTIL","EUR\xd3PA","LOPATKA","SUD","AMAZONKA","\u010cIARA","REZERV\xc1CIA","MIHALNICA","KALU\u017d","\u0160ATY","BIATLON","SPRIEVODCA","SLANINA","PO\u0160TA","KOV\xc1\u010c","RYBI\u010cKA","N\xc1\u010cELN\xcdK","KR\xdaPY","PLAVEC","MRAMOR","MA\u0160\u013dA","OLEJ","TES\xc1K","\u010cUCH","POCHODE\u0147","ZMRZLINA","ROSA","CH\xc1PADLO","PRAME\u0147","KRI\u0160T\xc1\u013d","PALMA","TEKVICA","MEXI\u010cAN","\u0160I\u0160KA","PILOT","P\xdaPAVA","JAPONSKO","R\xcdM","MOST","SKLEN\xcdK","MONITOR","CHAMELE\xd3N","STAN","P\xc1SKA","RUKAVICA","KOPYTO","MASKA","EXPRES","CHOBOT","BIKINY","SVETER","DEBNA","MINCA","ZVON","KOLOTO\u010c","MU\u0160KETIER","JA\u010cME\u0147","H\xdaSENICA","PIZZA","STROJ","KRUH","STOPA","ZUB\xc1R","PANDA","SANE","PUMA","LY\u017dE","O\xc1ZA","UNIFORMA","PERO","PERINA","PRAK","METEORIT","POSCHODIE","TMA","K\u0139ZA\u010cKA","KOSATKA","POKLAD","ISKRA","HNIEZDO","PUMPA","IHRISKO","EGYP\u0164AN","PLACHTA","VALEC","HIMAL\xc1JE","LAKE\u0164","VEDRO","GRAN\xc1T","PIESOK","B\xdaRKA","VODOP\xc1D","\u017dITO","KOVBOJ","HRANICA","DVOR","HOROLEZEC","\xda\u013d","GOMB\xcdK","POT\xc1PA\u010c","NECHT\xcdK","PEVNOS\u0164","PE\u0160IAK","SMOTANA","P\xc1ROK","LABA","VIKING","KOSTRA","POSTE\u013d","B\xc1BIKA","MAMUT","KOS\xc1K","PRST","V\xddCHOD","DETEKT\xcdV","SOVA","KRTKO","BOJNICE","ST\xd4L","INDI\xc1N","RYTIER","SATELIT","LO\u010e","\u0160AMAN","BAGER","SAMURAJ","MERK\xdaR","PIR\xc1T","T\xc1BOR","SEDLO","BRNENIE","PRINC","OPICA","UR\xc1N","LAV\xcdNA","BOCIAN","MONAKO","KAMERA","V\xddR","P\u0154H\u013dAVA","MEDARD","PANEL","GALAXIA","UHL\xcdK","HERKULES","KOBEREC","SLNE\u010cN\xcdK","FARMA","PE\u0147A\u017dENKA","IKONA","KUCHY\u0147A","TEHLA","\u010cL\xc1NOK","BOROVICA","RAMENO","VLASY","SEVER","SV\xc4TOPLUK","K\xd4STKA","TANK","HYENA","JAGU\xc1R","MRE\u017dA","VEVERI\u010cKA","KRIV\xc1\u0147","PRALES","SKALA","PLAVKY","RE\u0160TAUR\xc1CIA","KOMBAJN","MRAK"]},"af":{"Codenames: Afrikaans":["ROULETTE","DRAAK","OORLOG","HEUNING","BOM","KASINO","GEBOU","JUPITER","RUIMTELING","SWEEP","ANTARTIKA","SNEEUMAN","KONSERT","SJOKOLADE","DAM","MILJOENER","DINOSOURIS","SEEROWER","TROMPET","PIKKEWYN","SPINNEKOP","MISSIEL","AMBASSADE","PISTOOL","SIEKTE","SPIOEN","PRINSES","SHAKA","DIEF","OPERA","RIDDER","STADION","LIMOUSINE","SPOOK","BAKKIE","ROOMYS","LASER","DOOD","HOSPITAAL","AMBULANS","SEEKAT","HELIKOPTER","KANGAROE","MIKROSKOOP","MEERMIN","SUPERHELD","TELESKOOP","VALSKERM","EENDBEKDIER","OLIMPUS","SATELLIET","ENGEL","ROBOT","EENHORING","LIEWE HEKSIE","SLANG","DUIKER","GIF","BRUG","VUUR","NAEL","WALVIS","MAAN","VIS","DOKTER","KERK","HEMP","VERPLEEGSTER","WIND","LEEU","OOG","TROMPIE","HAAS","BANK","BYBEL","ROK","DWERG","WOUD","TEKEN","HANDSKOEN","APPEL","OLIE","KOOK","RENOSTER","KAT","LEWE","GELUK","REUS","GESIG","STRAND","HOTEL","WATER","PAPIER","WURM","ADVOKAAT","WETENSKAPLIKE","DANS","BEKER","TAMATIESOUS","NAG","KATOEN","VOET","MUIS","MES","TEATER","MUSIKANT","BOOT","LOODS","DUIM","LEER","BOTTEL","DAG","KONING","GLAS","KONINGIN","TAND","HOND","PERD","SKOEN","STOEL","KROON","YS","GOUD","VURK","TYD","FLUIT","FLITS","SNEEU","IVOOR","SOLDAAT","PIRAMIEDE","TOU","STER","RING","WORS","HART","BLOK","PLAAT","NAALD","LYN","KAMEEL","RAAD","HOLLAND","SKERM","OLIFANT","EUROPA","KNOOP","MOND","DORING","BEEN","VLAG","TEKKIES","TORING","KAART","WOLK","DIAMANT","KRUIS","NET","KAROO","GESKENK","BORD","GAT","MIDDEL","KRAG","SLEUTEL","STROOM","WAAI","LUI","RAND","POOL","PORT","ONGELUK","PLAK","PUNT","KODE","SIRKEL","SKAKEL","PYP","TSHWANE","HERMANUS","LANGEBAAN","NUWELAND","TSITSIKAMMA","JOHANNESBURG","SPRINGBOK","PAROW","LOFTUS","PERLEMOEN","AFRIKAANS","VAAL","KNYSNA","OUTENIEKWA","ZULU","BRAAI","XHOSA","VRYSTAAT","ROOK","SUID AFRIKA","ATLANTIS","KRUGER","MAROELA","KIWI","VAN DER MERWE","ZIMBABWE","LIMPOPO","VAN HUNKS","MOSAMBIEK","DURBAN","YSTERVARK","MPUMALANGA","BOER","AFRIKA","TOKKELOS","MANDELA","OSSEWA","STROPER","HOTTENTOT","PASTEI","HOOF","SEEL","KONFYT","TESTAMENT","YSTER","GRADE","SWAZILAND","TABLET","STAM","BORS","KUS","SKADU","VOLSTRUIS","DRAMA","NOOD","BLY","VRY","STRAAL","GEES","VELD","BEES","VAT","WYS","STEM","WAG","HOENDERVLEIS","KIES","BORSEL","BOOS","AMERIKA","HEMEL","FIETS","BOKKIE","DRUK","KRANS","KOPER","GRAS","VEE","KARAKTER","WIT","SWART","STORT","VLIEG","STORM","SPOOR","SKAPIE","KOPPIE","GROEN","ALBASTER","KOUD","SPEL","HOEK","REVOLUSIE","KOLF","PRESIDENT","BRAK","PLAAS","TAFEL","POND","MAAT","DOLFYN","TRAP","BERG","STOK","SINK","WARM","SKOOL","TREK","MONSTER","LAND","MOSKEE","STERT","STORIE","SLAAP","OPTEL","GERAAS","SON","TROU","WILDERNIS","PLOT","TEMPEL","DRIEHOEK","BAD","GROEP","VOERTUIG","VLOEK","GEREG","POS","PIESANG","GROEF","BAL","MARS","BOOG","INSTRUMENT","RYS","MODEL","SKULD","PERS","SEL","GROET","ARM","MOEDER","LIG","PROTEA","BURGER","KIND","LAS","SKAAL","STROOI","HAAI","BREI","REENBOOG","LOT","VALK","DROOG","BAK","SLOT","BOOM","UNIVERSITEIT","STELLENBOSCH","POLITIKUS","BRA","WEB","VAN RIEBEECK","PALM","KRAAN","SKEI","TJOP","OOR","PAK","STERK","PAN","MASJIEN","WAPEN","GAS","SOKKIE","JAKKALS","STIK","SAHARA","HANEPOOT","SYFER","STAF","TAKEL","KOOL","TERMINAAL","TOON","SKOOT","HEELAL","VISIE","BOS","TOOR","GRENS","ROL","MAAL","NOOT","TWAK","KLAP","KARAVAAN","KLEIN","KOERANT","LEK","SPAN","BOKS","FILM","LAGER","MELK","DUIWEL","KRAAL","DEEL","WERK","KRAP","WORTEL","TIK","SIEK","DRAAI","SEIL","GAAR","TAK","STEUN","PRYS","ORANJE","LEKKER"]},"ar":{"\u0627\u0644\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u062d\u0631\u0643\u064a\u0629\u0627 Codenames":["\u0628\u0637\u0631\u064a\u0642","\u063a\u0648\u0627\u0635","\u0622\u064a\u0633 \u0643\u0631\u064a\u0645","\u0639\u0646\u0643\u0628\u0648\u062a","\u0623\u0637\u0644\u0633","\u0634\u0628\u062d","\u0633\u0645","\u062c\u0633\u0631","\u0634\u0627\u062d\u0646\u0629","\u0643\u0627\u0632\u064a\u0646\u0648","\u062a\u0641\u0627\u062d","\u0623\u062e\u0637\u0628\u0648\u0637","\u0632\u064a\u062a","\u0637\u0628\u0627\u062e","\u0633\u064a\u0627\u0631\u0629","\u0633\u0628\u064a\u0643\u0629","\u0642\u0627\u0646\u0648\u0646","\u062d\u0627\u062f","\u0634\u064a\u0643","\u062f\u0628","\u0647\u062f\u0641","\u0642\u062f\u062d","\u0633\u0646","\u0645\u0644\u0643\u0629","\u0645\u0644\u0643","\u0643\u0644\u0628","\u062d\u0635\u0627\u0646","\u062d\u0630\u0627\u0621","\u0639\u0644\u0627\u0645\u0629","\u0641\u0645","\u0628\u0642\u0639\u0629","\u0639\u0645\u0627\u0631\u0629","\u0634\u0648\u0643\u0648\u0644\u0627\u062a\u0647","\u064a\u062f","\u062d\u0641\u0644\u0629","\u062b\u0648\u0631\u0629","\u0633\u0631\u064a\u0631","\u0643\u0646\u063a\u0631","\u0628\u0637\u0627\u0642\u0629","\u0631\u062e","\u0645\u062c\u0647\u0631","\u0628\u064a\u0636\u0629","\u0634\u0643\u0633\u0628\u064a\u0631","\u0642\u0635\u0629","\u0623\u0631\u0636","\u0642\u0631\u0634","\u0647\u0648\u0644\u064a\u0648\u0648\u062f","\u0645\u062c\u0627\u0644","\u063a\u0627\u0632","\u0627\u0634\u0627\u0631\u0629","\u0639\u0642\u062f","\u0639\u0645\u064a\u0644","\u062f\u0643\u062a\u0648\u0631","\u0625\u0637\u0627\u0631","\u062c\u0645\u0639\u0629","\u0639\u0648\u062f","\u0639\u0645\u0644","\u0642\u0631\u0646","\u0634\u0643\u0644","\u062c\u0646\u0627\u062d","\u0641\u0636\u0627\u0621","\u0628\u0626\u0631","\u0631\u0635\u064a\u062f","\u0645\u0639\u0631\u0636","\u0635\u0648\u0644\u062c\u0627\u0646","\u0635\u0648\u062a","\u0643\u0646\u064a\u0633\u0629","\u0643\u0628\u0631\u064a\u062a","\u0634\u0631\u064a\u0637","\u0639\u0628\u0642\u0631\u064a","\u0637\u0628\u064a\u0628","\u0631\u0628\u0639","\u0645\u062e\u0628\u0631","\u0642\u0641\u0644","\u0641\u064a\u0644","\u0628\u0637\u0644","\u0646\u0627\u0638\u0648\u0631","\u0645\u0638\u0644\u0629","\u0645\u0639\u062f\u0646","\u062b\u0639\u0644\u0628","\u0633\u0647\u0645","\u0628\u0631\u062a\u0642\u0627\u0644","\u062e\u0641\u064a\u0641","\u062f\u0631\u062c\u0629","\u0639\u0636\u0648","\u0635\u063a\u064a\u0631","\u062d\u062c\u0631","\u062d\u0627\u062c\u0628","\u0639\u0628\u0627\u0621\u0629","\u0642\u0635\u0628\u0629","\u0642\u0637\u0627\u0631","\u0645\u0633\u0645\u0627\u0631","\u0637\u064a\u0627\u0631\u0629","\u0641\u0631\u0639","\u063a\u0633\u0627\u0644\u0629","\u0633\u0643\u0631","\u0641\u0631\u0627\u063a","\u0645\u0633\u062f\u0633","\u0646\u062d\u0627\u0633","\u0631\u0648\u062d","\u0632\u0647\u0631","\u062e\u0631\u064a\u0641","\u062d\u0627\u0648\u064a\u0629","\u0644\u064a\u0645\u0648\u0646","\u0645\u0627\u0631\u0633","\u0641\u0644\u0627\u0641\u0644","\u0634\u0639\u0631","\u0628\u0644\u0628\u0644","\u0631\u0628\u064a\u0639","\u0645\u062b\u0644\u062b","\u0645\u0627\u0646\u0634\u0633\u062a\u0631","\u0648\u0642\u062a","\u0623\u0644\u0645\u0627\u0633","\u0639\u0642\u062f\u0629","\u0646\u0627\u064a","\u0623\u0634\u0639\u0629","\u0648\u062a\u0631","\u0647\u0631\u0645","\u062d\u0641\u0631\u0629","\u062c\u0631\u0633","\u062d\u0645\u0627\u0645","\u0645\u062e\u0637\u0637","\u0645\u0639\u0628\u062f","\u0631\u0633\u0627\u0644\u0629","\u0628\u0631\u0645\u064a\u0644","\u0627\u0646\u0628\u0648\u0628","\u0642\u0637\u0628","\u062e\u0641\u0627\u0634","\u0631\u0623\u0633","\u0627\u0628\u0631\u0629","\u0645\u0648\u0642\u0641","\u0638\u0631\u0641","\u062e\u0637","\u062e\u0634\u0628\u0629","\u0645\u064a\u0644","\u0639\u0643\u0633","\u0639\u0634\u0627\u0621","\u0645\u062d\u0627\u0645\u064a","\u0639\u0627\u0644\u0645","\u0631\u0642\u0635","\u0646\u064a\u0646\u062c\u0627","\u062a\u0642\u0644\u064a\u062f","\u0630\u0631\u0627\u0639","\u062d\u0648\u0636","\u0648\u0631\u0642\u0629","\u062e\u0627\u0644","\u062a\u064a\u0627\u0631","\u0645\u062d\u0631\u0643","\u064a\u0645\u0646","\u0645\u0648\u062c\u0629","\u0635\u0644\u064a\u0628","\u0645\u062c\u0645\u0639","\u0646\u0642\u0637\u0629","\u0631\u0645\u062d","\u0637\u0628\u0642","\u0646\u062e\u0644\u0629","\u062d\u0627\u062f\u062b","\u0645\u0639\u062c\u0648\u0646","\u0637\u0631\u0641","\u0631\u0634\u0627\u0634","\u0645\u0631\u0636","\u0633\u0641\u0627\u0631\u0629","\u0635\u0627\u0631\u0648\u062e","\u0634\u0641\u0631\u0629","\u062c\u0644\u064a\u062f","\u0637\u0627\u0626\u0631\u0629","\u062c\u0632\u0631","\u062f\u064a\u0646\u0627\u0635\u0648\u0631","\u0635\u0641\u0627\u0631\u0629","\u0642\u0631\u0635\u0627\u0646","\u0623\u062b\u0631","\u0633\u0647\u0644","\u0641\u0631\u0634\u0627\u0629","\u0645\u0627\u0634\u064a\u0629","\u062e\u064a\u0627\u0631","\u0645\u062e\u0631\u062c","\u0631\u0648\u0628\u0648\u062a","\u0643\u064a\u0644\u0648","\u0623\u0648\u0628\u0631\u0627","\u0644\u0635","\u0633\u0627\u062d\u0629","\u062f\u0648\u0631\u0629","\u0645\u0644\u0639\u0628","\u0641\u0627\u0631\u0633","\u0644\u064a\u0645\u0648\u0632\u064a\u0646","\u0631\u064a\u062d","\u0623\u0633\u062f","\u062d\u0648\u062a","\u0642\u0645\u0631","\u0638\u0644","\u0648\u062d\u064a\u062f \u0627\u0644\u0642\u0631\u0646","\u0642\u0637\u0646","\u062d\u0638","\u0642\u0637\u0629","\u0631\u0628\u0627\u0637","\u0633\u0643\u064a\u0646","\u0637\u0628\u0642\u0629","\u0644\u064a\u0644","\u0632\u0628\u0627\u0644\u0629","\u0641\u0623\u0631\u0629","\u0631\u0648\u0644\u064a\u062a","\u062a\u0646\u064a\u0646","\u062d\u0631\u0628","\u062d\u0644\u0648","\u0642\u0646\u0628\u0644\u0629","\u0642\u0645\u0631 \u0635\u0646\u0627\u0639\u064a","\u0628\u0631\u062c","\u0645\u0644\u0627\u0643","\u0644\u064a\u0632\u0631","\u0645\u0648\u062a","\u0645\u0633\u062a\u0634\u0641\u0649","\u0627\u0633\u0639\u0627\u0641","\u0643\u0641","\u0647\u0644\u064a\u0643\u0648\u0628\u062a\u0631","\u0639\u064a\u0646","\u0647\u0648\u0627\u0621","\u0623\u0631\u0646\u0628","\u0645\u0635\u0631\u0641","\u062d\u0634\u064a\u0634","\u062b\u0648\u0628","\u0642\u0632\u0645","\u0634\u0631\u0637\u0629","\u0633\u0641\u064a\u0646\u0629","\u0637\u064a\u0627\u0631","\u0628\u0635\u0645\u0629","\u0645\u0639\u0644\u0645","\u0632\u062c\u0627\u062c\u0629","\u064a\u0648\u0645","\u063a\u0637\u0627\u0621","\u0644\u0648\u062d","\u0645\u0641\u062a\u0627\u062d","\u0634\u0627\u0634\u0629","\u0645\u0633\u0631\u062d\u064a\u0629","\u062f\u0627\u0626\u0631\u0629","\u0632\u0631","\u062c\u062f\u0627\u0631","\u0631\u0627\u0628\u0637","\u0633\u064a\u062c\u0627\u0631\u0629","\u0646\u064a\u0648\u064a\u0648\u0631\u0643","\u0627\u0633\u062a\u0631\u0627\u0644\u064a\u0627","\u062e\u0644\u064a\u062c","\u0637\u0648\u0643\u064a\u0648","\u0647\u0646\u062f","\u062d\u0641\u064a\u062a","\u063a\u0648\u0644","\u0628\u063a\u062f\u0627\u062f","\u0635\u0642\u0631","\u062d\u0631\u0627\u0645\u064a","\u0628\u0627\u0628\u0644","\u0645\u0634\u062a\u0631\u064a","\u0634\u0627\u0648\u0631\u0645\u0627","\u0637\u0627\u0642\u0629","\u0639\u0645\u0648\u062f","\u0639\u0645\u0631","\u0631\u0627\u0641\u0639\u0629","\u0645\u0648\u0642\u0639","\u0643\u0623\u0633","\u0642\u0631\u0635","\u0623\u0645\u0627\u0632\u0648\u0646","\u0637\u0628\u0639","\u0646\u0642\u062f","\u0645\u063a\u0631\u0628","\u0631\u0645\u0627\u0646\u0629","\u0635\u0646\u062f\u0648\u0642","\u0646\u0627\u062f\u064a","\u062e\u0627\u062f\u0645","\u0633\u0645\u0643","\u0623\u0645\u064a\u0631\u0629","\u0645\u0631\u0643\u0628","\u0638\u0647\u0631","\u0634\u0628\u0643\u0629","\u062d\u0638\u064a\u0631\u0629","\u0641\u0631\u0627\u0634","\u062d\u0627\u0643\u0645","\u0631\u0633\u0645","\u062e\u064a\u0637","\u0633\u062d\u0631","\u062d\u0648\u0644","\u062d\u0628\u0644","\u0637\u0631\u0641","\u0623\u0635\u0644\u064a","\u0645\u0631\u0628\u0639","\u062b\u0648\u0631","\u063a\u0627\u0628\u0629","\u0628\u064a\u062a","\u062a\u0648\u0646\u0633","\u0645\u0644\u0641","\u062d\u0627\u0631\u0629","\u0637\u0627\u0628\u0639","\u062c\u0630\u0639","\u0642\u0631\u0639","\u0634\u0631\u0627\u0628","\u062c\u0630\u0631","\u062f\u0641\u0627\u0639","\u0635\u0641","\u0636\u0631\u0628\u0629","\u062d\u0634\u0631\u0629","\u0623\u0644\u0641","\u0631\u062d\u0644\u0629","\u0633\u0631\u0648\u0627\u0644","\u0627\u0633\u0628\u0627\u0646\u064a\u0627","\u0627\u0644\u0645\u0627\u0646\u064a\u0627","\u062e\u0631\u0637\u0648\u0645","\u062d\u062f\u064a\u062b","\u0631\u062c\u0644","\u0623\u0641\u0631\u064a\u0642\u064a\u0627","\u0631\u0635\u0627\u0635","\u063a\u064a\u0627\u0631","\u0628\u0637\u0646","\u062d\u0645\u0627\u0631","\u0639\u0642\u0631\u0628","\u0634\u0648\u0643\u0629","\u0635\u0628\u0627\u062d","\u062d\u0628\u0648\u0628","\u0623\u062e\u0636\u0631","\u0628\u0646","\u062f\u062e\u0627\u0646","\u0637\u0628\u0644\u0629","\u0646\u062c\u0645","\u0645\u0646\u062f\u064a\u0644","\u062d\u0633\u0627\u0628","\u0646\u0639\u0646\u0627\u0639","\u0643\u0631\u0629","\u0645\u0636\u0631\u0628","\u0637\u0648\u0642","\u062d\u0628","\u0642\u0645\u0639","\u062d\u0644\u0628\u0629","\u0632\u064a\u062a\u0648\u0646","\u0628\u0637","\u0632\u0626\u0628\u0642","\u0642\u0648\u0633","\u0645\u062f\u0641\u0639","\u0645\u0631\u0643\u0632","\u0644\u0627\u0645\u0639","\u062e\u0644\u064a\u0629","\u0642\u0648\u0629","\u062f\u0648\u062f\u0629","\u0648\u0631\u062f\u0629","\u0642\u0647\u0648\u0629","\u0645\u0635\u0631","\u0644\u0646\u062f\u0646","\u0628\u0637\u064a\u062e","\u0645\u0648\u0633\u0643\u0648","\u062f\u0628\u064a","\u062a\u0631\u0643\u064a\u0627","\u0631\u0648\u0645\u0627","\u0647\u0645\u0644\u0627\u064a\u0627","\u0633\u0648\u0631","\u0639\u0644\u0645","\u0625\u0645\u0627\u0631\u0629","\u0623\u0645\u0631\u064a\u0643\u0627","\u0623\u062a\u0644\u0627\u0646\u062a\u064a\u0633","\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627","\u0639\u0628\u0648\u0631","\u0641\u0631\u0646\u0633\u0627","\u062d\u062c\u0627\u0628","\u062c\u0646\u064a","\u0633\u0648\u062f\u0627\u0646","\u0623\u0648\u0631\u0648\u0628\u0627","\u0641\u0646\u062f\u0642","\u062b\u0644\u062c","\u062a\u0627\u062c","\u0643\u0631\u0633\u064a","\u0630\u0647\u0628","\u062c\u0627\u0633\u0648\u0633","\u0645\u0635\u0628\u0627\u062d","\u0645\u0644\u064a\u0648\u0646\u064a\u0631","\u0639\u0627\u062c","\u062c\u0646\u062f\u064a","\u0645\u0633\u0631\u062d","\u062d\u0644\u0642\u0629","\u0628\u0648\u0642","\u0642\u0644\u0628","\u062d\u0627\u062c\u0632","\u0634\u0627\u0631\u0628","\u0628\u0627\u0631\u062f","\u0628\u0644\u0627\u0637","\u0644\u0639\u0628\u0629","\u062c\u0648\u0644\u0629","\u0632\u062d\u0644","\u063a\u0631\u064a\u0628","\u0643\u0631\u064a\u0645","\u062c\u0628\u0644 \u062c\u0644\u064a\u062f\u064a","\u0631\u062c\u0644 \u062b\u0644\u062c","\u062d\u0632\u0627\u0645","\u0645\u0645\u0631\u0636\u0629","\u0637\u0627\u0648\u0644\u0629","\u062d\u0631\u064a\u0642","\u0645\u0627\u0621","\u0637\u0639\u0645","\u062d\u0645\u0635","\u0633\u0627\u062d\u0631\u0629","\u0645\u0635\u0627\u0631\u0639","\u062d\u064a\u0627\u0629","\u0634\u0627\u0637\u0626","\u0645\u0647\u0631\u062c","\u0639\u0645\u0644\u0627\u0642","\u0648\u062c\u0647","\u0642\u062f\u0645"]},"ar-lb":{"FHEMT 3LEK":["7AYET","WEJJ","HARAM","RECHECH","KHARZE","CHAJRA","ROBOT","CASINO","CHABA7","MOTEUR","GHETTAS","LINK","HOTEL","JESSOUS","3ASSAL","YALLA","FALLINE","MAN2OUCHE","MALEK","HUMMUS","CHEF","MAL3AB","ZONNAR","PASS","2OTEN","ZI7","BSAYNE","TELESCOPE","KFOUF","CENTAUR","ABOU","MARAD","PIRATE","MAKANA","OURJOUWEN","FERIS","SFI7A","CHAKHTOURA","NAYYE","TIYARJE","CODE","ARZ","DRAGON","NURSE","7ARAME","MASSRA7","KHATT","BOUWEBE","2EJER","2ENBLE","NAT7IT SA7AB","3ALEM","BARGHOUT","SIYARA","DARAK","NAJEM","JESSER","TARBOUCH","WA2ET","TAWLE","CARTE","MOU7AME","7ADIS","SAWENE","3AMOUD","LASER","7AREB","MILLIONAIRE","MALAK","2EBRE","BOUZA","TEMM","NOUR","MELE7","UNICORN","KEBBEYE","MEZMAR","WIZARA","2OSBA3","KHAZE2","MERID","ASSAD","ALMAZA","LEIL","AUSTRALIA","KHATIM","2ECHTIRAK","ZAMMOUR","BOU2","DABKE","TIYARA","AKHTABOUT","KAZAM","SAHRA","ARGUILE","GHABE","MOUCHA3WIZE","AMAR","BATAL","AMIRA","7OMRA","DAW","3ASKARE","JARAS","OPERA","BAALBAK","SNOWMAN","MAHRAJEN","JEBRAN","TANNOURA","KATYUCHA","ROULETTE","A3DE","WAR2A","MICROSCOPE","BA7ER","KHOULOUD","7ARBE","ZET","SED","DOUDEH","TOBBAKH","DIK","LE3EB","MEZZA","TABBOULE","PENGUIN","DEHAB","BOSTA","BALON","NABE3","7ANAK","TALEJ","NHAR","DEBB","7AZZ","SATURN","7OUT","MARWA7IYE","KANGOUROU","SATE7","PLATYPUS","SIYARIT 2ES3AF","JALID","LIRA","3AJ","KHET","MEFTE7","SAMM","RAKWE","BLOCK","MESTACHFA","VAN","SOBBAT","SALIB","CHEKOUCH","CHOCOLATA","PARACHUTE","2OUWWE","KAFAR","CRAVATE","FARAYA","RA2ES","NAHER","BE2LEWA","MAWJE","DINOSOR","7ET","MALAKE","AMAR 2ISTINA3E","FALTEH","RAWCHE","SIYESSE","SAMAK","CHERYEN","ARNAB","MAKHLOU2 FADA2E","ANTARCTICA","BEKHECH","3ANKABOUT","TEFFE7A","KAJO","SEKKIN","MA3JOUNE","2ID","LIMOUSINE","NAR","3ARICH","TEJ","2ESTEZ","MOT","7SSAN","FAYROUZ","KERBEJ","TAKHET","SOFA","7AKIM","BERBARA","JAZAR","HAWA","BELOU3","KHEDME","TAYYIB","3A2ED","BEER","GHALE","BALWE","MAWSAM","3ARABIYE","RAFF","BEREJ","2ADA7","KLEB","3ALEME","CHOUHADA","SOUR","ZER","DOUWWAR","BARAD","RABI3","DAY3A","3ADOU","FARA","MAY","MA3ROUF","ZAHER","KAFF","7ACHICH","FYOULE","7AREF","SABA7","3ADE","2AM7A","BAT","2ANOUN","3AMAL","SMIK","RSASSA","SALLE","SALEM","CHABB","7Mar","LOTO","FARED","3AJALE","SAHEL","RA7A","SA7","NO2TA","MABROUK","7AMA","MATAR","MAKTOUB","3ECH","RICHE","TKHORTOUCH","TOOT","JA7ECH","SODER","CHE3ER","JAR","MRABBA","NACHER","LSEN","KEBBE","3AROUS","JBEL","KNEFE","SAROUKH","BEKHRA","7A2","BANK","SOUS","7AJIB","AKH","7AKAM","SOU2","DAHER","SAFAR","CHOUF","KA3KE","DEKHAN","SERVICE","RAFI2","SANAD","MOUMTEZ","ZAREF","WA23A","RAYYIS","ROU7","ABOU EL ABED","7ABBE","JEM3A","LO7","CHERI3","JOZ","BARME","BAYDA","7SEB","3ARA2","3AJ2A","BOX","TAYFE","ACHTA","3ALAM","KHALIS","MFAR2A3JE","MHARRABJE","ATEL","DAREB","KARAM","CHILL","FARACHE","KERSE","JAGAL","MALFOUF","ANDIL","M3ALLIM","KABBOUT","CHARE2","M7AMMAS","KOU3","CHECHE","AIR","3ASSEH","ROSE","7ABIBI","RASS","TYR","BAKARA","BERMUDA","SAYF","TURBINE","SENN","KABSE","KES","ALEF","CHAWKE","TOBYID","7ARAM","KISS","7AL2A","TERIKH","CHHEDE","GHATA","SE7A","FESSID","HAMRA","CHMEL","NAY","ZABIT","3OUD","3EIN","SAWDA","PHOENICIA","SETTE","TRABLOUS","7ELO","TASSEH","SALBE","HAM","NIDAL","MASTRA","MARSOUM","CHAT","LAZIZ","2ALAM","MA3MOUL","SE3A","2ASBE","TAYYAR","3ID","CHERI","DARAJ","TABEL","FORSA","JOURA","ZIAD","2ICHARA","2ANENE","FEYDE","BALADIYE","RASSME","DER","FOUL","3AFRIT","BELBOUL","TE3LI2","SFOUF","SANDOU2","3ARED","SALA","DEKKENE","ZALGHOUTA","WOZZE","REMMENE","CHABAK","BOUM","KHAY","BEIT"]},"bg":{"\u041a\u043e\u0434\u043e\u0432\u0438 \u0438\u043c\u0435\u043d\u0430":["\u0420\u0423\u041b\u0415\u0422\u041a\u0410","\u041b\u0410\u041c\u042f","\u041a\u041e\u041d\u0424\u041b\u0418\u041a\u0422","\u041c\u0415\u0414","\u0415\u041a\u0421\u041f\u041b\u041e\u0417\u0418\u042f","\u041a\u041e\u041c\u0410\u0420","\u0413\u0420\u0410\u0414","\u0421\u041f\u042a\u0422\u041d\u0418\u041a","\u041f\u0420\u0418\u0428\u042a\u041b\u0415\u0426","\u0411\u0418\u0427","\u0410\u041d\u0422\u0410\u0420\u041a\u0422\u0418\u041a\u0410","\u0421\u041d\u0415\u0416\u0410\u041d\u041a\u0410","\u041a\u041e\u041d\u0426\u0415\u0420\u0422","\u041a\u041b\u0410\u0421","\u0412\u042a\u0417\u0415\u041b","\u0411\u041e\u0413\u0410\u0422\u0421\u0422\u0412\u041e","\u0414\u0418\u041d\u041e\u0417\u0410\u0412\u042a\u0420","\u041f\u0418\u0420\u0410\u0422","\u0422\u0420\u042a\u0411\u0410","\u041f\u0418\u041d\u0413\u0412\u0418\u041d","\u041f\u0410\u042f\u041a","\u0420\u0410\u041a\u0415\u0422\u0410","\u0412\u0423\u041b\u041a\u0410\u041d","\u041f\u0418\u0421\u0422\u041e\u041b\u0415\u0422","\u0417\u0410\u0420\u0410\u0417\u0410","\u0410\u0413\u0415\u041d\u0422","\u041f\u0420\u0418\u041d\u0426\u0415\u0421\u0410","\u0414\u0420\u0410\u041c\u0410","\u041a\u0420\u0410\u0414\u0415\u0426","\u041e\u041f\u0415\u0420\u0410","\u041a\u0415\u041d\u0413\u0423\u0420\u0423","\u0420\u0418\u0426\u0410\u0420","\u0421\u0422\u0410\u0414\u0418\u041e\u041d","\u041b\u0418\u041c\u0423\u0417\u0418\u041d\u0410","\u0414\u0423\u0425","\u0424\u0423\u0420\u0413\u041e\u041d","\u0414\u0420\u041e\u0411","\u041b\u0410\u0417\u0415\u0420","\u0413\u0418\u0411\u0415\u041b","\u041a\u0410\u0411\u0418\u041d\u0415\u0422","\u041b\u0418\u041d\u0415\u0419\u041a\u0410","\u041e\u041a\u0422\u041e\u041f\u041e\u0414","\u0425\u0415\u041b\u0418\u041a\u041e\u041f\u0422\u0415\u0420","\u0417\u0410\u041f\u0410\u0421","\u041a\u0415\u041d\u0422\u0410\u0412\u042a\u0420","\u0413\u0415\u0420\u041e\u0419","\u0422\u0415\u041b\u0415\u0421\u041a\u041e\u041f","\u041f\u0410\u0420\u0410\u0428\u0423\u0422","\u041f\u0422\u0418\u0426\u0415\u0427\u041e\u0412\u041a\u0410","\u041d\u0415\u0411\u0415","\u0421\u0410\u0422\u0415\u041b\u0418\u0422","\u0410\u041d\u0413\u0415\u041b","\u0420\u041e\u0411\u041e\u0422","\u0422\u0410\u041b\u0410\u0421\u042a\u041c","\u0412\u0415\u0429\u0418\u0426\u0410","\u0422\u042a\u0420\u0413\u041e\u0412\u0415\u0426","\u0412\u041e\u0414\u041e\u041b\u0410\u0417","\u041e\u0422\u0420\u041e\u0412\u0410","\u041c\u041e\u0421\u0422","\u041e\u0413\u042a\u041d","\u0428\u0410\u0420\u0410\u041d","\u0414\u041e\u041a\u0422\u041e\u0420","\u041c\u0410\u0421\u0410","\u041a\u0418\u0422","\u041b\u0423\u041d\u0410","\u041a\u041e\u041b\u0410\u041d","\u0426\u042a\u0420\u041a\u0412\u0410","\u0421\u0415\u0421\u0422\u0420\u0410","\u0412\u042f\u0422\u042a\u0420","\u041b\u042a\u0412","\u0420\u041e\u041a\u041b\u042f","\u0422\u0420\u0415\u0412\u0410","\u041e\u041a\u041e","\u0412\u042a\u0417\u0414\u0423\u0425","\u041c\u041e\u0420\u041a\u041e\u0412","\u0417\u0410\u0415\u041a","\u0411\u0410\u041d\u041a\u0410","\u0414\u0416\u0423\u0414\u0416\u0415","\u0413\u041e\u0420\u0410","\u041a\u041e\u041b\u0410","\u0420\u042a\u041a\u0410\u0412\u0418\u0426\u0410","\u042f\u0411\u042a\u041b\u041a\u0410","\u0413\u041e\u0420\u0418\u0412\u041e","\u0413\u041e\u0422\u0412\u0410\u0427","\u041a\u041e\u0422\u041a\u0410","\u041f\u041b\u0410\u0416","\u0411\u041e\u0420\u0411\u0410","\u041c\u0418\u0428\u041a\u0410","\u0416\u0418\u0412\u041e\u0422","\u041a\u042a\u0421\u041c\u0415\u0422","\u0413\u0418\u0413\u0410\u041d\u0422","\u041b\u0418\u0426\u0415","\u041e\u0411\u0423\u0412\u041a\u0410","\u0425\u041e\u0422\u0415\u041b","\u0422\u0412\u041e\u0420\u0411\u0410","\u0412\u041e\u0414\u0410","\u041f\u0420\u0410\u0412\u041e","\u0411\u0420\u0418\u0413\u0410\u0414\u0410","\u0410\u0414\u0412\u041e\u041a\u0410\u0422","\u0423\u0427\u0415\u041d","\u0422\u0410\u041d\u0426","\u041c\u0410\u0420\u041c\u0410\u041b\u0410\u0414","\u041d\u041e\u0429","\u041f\u0410\u041c\u0423\u041a","\u041a\u0420\u0410\u041a","\u041d\u041e\u0416","\u0415\u0422\u0418\u041a\u0415\u0422","\u0411\u0423\u0422\u0418\u041b\u041a\u0410","\u041f\u041e\u041b\u0418\u0426\u0418\u042f","\u041a\u041e\u0420\u0410\u0411","\u041a\u041e\u041d","\u041f\u0418\u041b\u041e\u0422","\u041f\u0420\u042a\u0421\u0422","\u0417\u042a\u0411","\u0423\u0427\u0418\u0422\u0415\u041b","\u0414\u0415\u041d","\u0412\u041e\u0414\u0410\u0427","\u0421\u0422\u042a\u041a\u041b\u041e","\u041a\u0423\u0422\u0420\u0415","\u0426\u0410\u0420\u0418\u0426\u0410","\u0421\u0422\u041e\u041b","\u041a\u041e\u0420\u041e\u041d\u0410","\u041b\u0415\u0414","\u0417\u041b\u0410\u0422\u041e","\u0412\u0418\u041b\u0410","\u0414\u0423\u041f\u041a\u0410","\u0422\u0423\u0411\u0410","\u0412\u0420\u0415\u041c\u0415","\u0424\u0410\u0420","\u0421\u041d\u042f\u0413","\u0410\u041f\u0410\u0420\u0410\u0422","\u041a\u041e\u0421\u0422","\u0410\u0420\u0422\u0418\u0421\u0422","\u041f\u0418\u0420\u0410\u041c\u0418\u0414\u0410","\u0412\u0415\u0420\u0418\u0413\u0410","\u0413\u0423\u041c\u0410","\u0417\u0412\u0415\u0417\u0414\u0410","\u0422\u0410\u0411\u041b\u041e","\u0410\u0412\u0421\u0422\u0420\u0410\u041b\u0418\u042f","\u041e\u0411\u0420\u042a\u0427","\u0420\u041e\u0413","\u041f\u041e\u041b\u0415","\u041a\u041e\u0420\u041f\u0423\u0421","\u041e\u0421\u0422\u0420\u0418\u0415","\u041b\u0418\u041d\u0418\u042f","\u0421\u0418\u0413\u041d\u0410\u041b","\u041a\u041b\u042e\u0427","\u0411\u0410\u0420\u0418\u0415\u0420\u0410","\u041f\u041b\u0410\u0422\u041d\u041e","\u0418\u0413\u0420\u0410","\u0422\u041e\u0427\u041a\u0410","\u041a\u041e\u041f\u0427\u0415","\u0413\u042a\u0420\u041b\u041e","\u041e\u041f\u0410\u0428\u041a\u0410","\u0420\u042a\u041a\u0410\u0412","\u041c\u0420\u0415\u0416\u0410","\u0422\u0410\u041d\u0413\u0420\u0410","\u041a\u041e\u041b\u041e\u041d\u0410","\u041a\u0410\u0420\u0422\u0410","\u0412\u0420\u042a\u0417\u041a\u0410","\u041f\u0415\u0420\u041b\u0410","\u041a\u0410\u041d\u0410\u041b","\u0422\u0415\u0427\u0415\u041d\u0418\u0415","\u041a\u0420\u042a\u0421\u0422","\u041f\u041b\u041e\u0427\u0410","\u0411\u041e\u0422\u0415\u0412","\u0414\u042a\u041d\u041e","\u041a\u041b\u0410\u041f\u0410","\u0412\u0418\u0422\u041e\u0428\u0410","\u0421\u0418\u041b\u0410","\u041a\u041e\u0416\u0423\u0425","\u0412\u042a\u041b\u041d\u0410","\u041c\u0415\u0425\u0410\u041d\u0410","\u0413\u041b\u0410\u0412\u0410","\u0412\u0420\u042a\u0425","\u0421\u0420\u0415\u0414\u0410","\u0423\u0414\u0410\u0420","\u041f\u0410\u0421\u0422\u0410","\u0428\u0418\u041f","\u041b\u0415\u0413\u0415\u041d\u0414\u0410","\u041a\u041e\u041b\u0415\u041b\u041e","\u0422\u042f\u041b\u041e","\u0424\u0418\u0413\u0423\u0420\u0410","\u0414\u041b\u0410\u041d","\u041f\u0423\u0421\u0422\u0418\u041d\u042f","\u0421\u0418\u0420\u0415\u041d\u0415","\u0422\u0418\u041a\u0412\u0410","\u041f\u0418\u041e\u041d\u0415\u0420","\u0425\u041e\u041b\u0418\u0412\u0423\u0414","\u0410\u0422\u0418\u041d\u0410","\u0420\u0418\u041c","\u0425\u0418\u041c\u0410\u041b\u0410\u0418","\u041d\u0415\u0421\u0422\u0418\u041d\u0410\u0420\u041a\u0410","\u0426\u0410\u0420\u0415\u0412\u0415\u0426","\u041a\u0418\u0412\u0418","\u041c\u041e\u0420\u0415\u041d\u0418","\u0418\u0417\u0411\u0410","\u0411\u041e\u041b\u042f\u0420\u041a\u0410","\u0423\u0421\u041e\u0419\u041d\u0418\u0426\u0410","\u0417\u0415\u0411\u0420\u0410","\u0428\u0418\u041f\u041a\u0410","\u0410\u0424\u0420\u0418\u041a\u0410","\u0413\u041b\u0410\u0420\u0423\u0421","\u0414\u0415\u0422\u0415\u041b\u0418\u041d\u0410","\u0421\u041a\u0410","\u0415\u0412\u0420\u041e\u041f\u0410","\u0427\u0415\u0422\u041a\u0410","\u041a\u0410\u0427\u0410\u041c\u0410\u041a","\u0413\u0415\u0412\u0420\u0415\u041a","\u0420\u0415\u0414","\u041f\u041e\u0414\u041a\u041e\u0412\u0410","\u0414\u0423\u041b\u041e","\u0410\u041b\u041f\u0418","\u0422\u041e\u0420\u0411\u0410\u041b\u0410\u041d","\u0411\u041e\u0417\u0410","\u0428\u0410\u0419\u0411\u0410","\u041e\u0412\u0427\u0410\u0420","\u041b\u0418\u0421\u0422\u0410","\u0411\u0410\u041d\u0418\u0426\u0410","\u0411\u0423\u041d\u0422\u041e\u0412\u041d\u0418\u041a","\u041f\u0420\u0415\u0421\u0410","\u0422\u0420\u0415\u0421\u041a\u0410","\u0412\u041b\u0410\u041a\u041d\u041e","\u041d\u0410\u0411\u041e\u0420","\u0420\u0415\u0417\u0411\u0410","\u041a\u041e\u0420\u0415\u041d","\u0421\u041a\u0410\u041b\u0410","\u041b\u0415\u0429\u0410","\u0421\u041f\u0418\u0420\u0410\u041b\u0410","\u041a\u041b\u0415\u0422\u041a\u0410","\u041f\u0410\u0420\u0410","\u041a\u0420\u0410\u041d","\u0411\u0420\u0410\u041a","\u0428\u0423\u0422","\u041a\u0423\u041f\u0410","\u0425\u0418\u0429\u041d\u0418\u041a","\u041c\u0410\u0420\u041a\u0410","\u0411\u041b\u041e\u041a","\u0426\u042a\u0420\u0412\u0423\u041b","\u0413\u042a\u0411\u0410","\u041f\u041b\u0423\u0416\u0415\u041a","\u0422\u041e\u041a","\u0428\u0418\u042f","\u0413\u0420\u0415\u0411\u0415\u041d","\u041f\u0420\u0418\u0411\u041e\u0420","\u0413\u0420\u0415\u0414\u0410","\u041f\u041e\u0427\u0418\u0412\u041a\u0410","\u041a\u0410\u0421\u0410","\u041f\u0415\u041b\u0415\u041d\u0410","\u041f\u0420\u0410\u0421\u0415","\u041a\u0420\u0418\u0421\u0422\u0410\u041b","\u041c\u041e\u0422\u041e\u0420","\u041c\u041e\u0422\u0418\u0412","\u0418\u0420\u0418\u0421","\u0427\u0415\u0420\u0423\u041f\u041a\u0410","\u0428\u0410\u0420\u041a\u0410","\u041a\u042a\u0420\u041c\u0410","\u041d\u0410\u0420","\u0421\u0422\u0420\u0415\u041b\u0410","\u041a\u0410\u0414\u042a\u0420","\u0413\u0415\u041d\u0418\u0419","\u041a\u0410\u0421\u041a\u0410\u0414\u0410","\u041b\u042a\u041a","\u0426\u0418\u041b\u0418\u041d\u0414\u042a\u0420","\u041f\u0410\u0422\u0420\u041e\u041d","\u041a\u0420\u0415\u041f\u041e\u0421\u0422","\u0413\u0420\u0415\u0411\u041b\u041e","\u041b\u0418\u041c\u041e\u041d","\u041a\u041e\u041a\u0422\u0415\u0419\u041b","\u0411\u041e\u041a\u0421","\u0416\u0410\u0420","\u041f\u0410\u041d\u0410\u0418\u0420","\u0421\u0422\u0410\u041d","\u0412\u042a\u041b\u041a","\u041c\u0410\u0419\u0421\u0422\u041e\u0420","\u0421\u0418\u0420\u0415\u041d\u0410","\u041d\u0410\u0420\u0426\u0418\u0421","\u0426\u0412\u042f\u0422","\u0411\u0410\u041b","\u0423\u0420\u0410\u041d","\u041b\u042a\u0427","\u041c\u0415\u0422\u0410\u041b","\u0413\u0410\u0419\u041a\u0410","\u0411\u0410\u0420\u0410\u0411\u0410\u041d","\u0417\u0410\u0420\u041e\u0412\u0415","\u0415\u0417\u0418\u041a","\u0429\u0418\u041f\u041a\u0410","\u0421\u042a\u0414","\u0421\u041a\u041e\u0411\u0410","\u0427\u0415\u041b\u041e","\u041b\u0410\u0413\u0415\u0420","\u0422\u041e\u041f","\u0417\u0410\u0412\u0415\u0422","\u041a\u041e\u0421\u0410","\u041c\u0415\u0421\u0415\u0426","\u041d\u041e\u041c\u0415\u0420","\u0411\u0410\u041d\u042f","\u0420\u0410\u041a","\u041a\u041e\u0420\u0418\u0422\u041e","\u041a\u041e\u041f\u0418\u0415","\u0412\u0418\u041d\u0410","\u0421\u042a\u0414\u0411\u0410","\u041f\u0415\u0420\u041a\u0410","\u042f\u0414\u0420\u041e","\u0411\u0410\u0421\u0415\u0419\u041d","\u0421\u0423\u0428\u0410","\u0411\u041e\u0419","\u041a\u0420\u0418\u041b\u041e","\u041f\u0415\u0420\u041e","\u041a\u0418\u0424\u041b\u0410","\u0421\u0418\u041c\u0424\u041e\u041d\u0418\u042f","\u0421\u041a\u041e\u0427","\u0425\u0410\u0419\u0412\u0415\u0420","\u041f\u0418\u0421\u041c\u041e","\u041c\u0410\u0421\u041b\u0418\u041d\u0410","\u0417\u041d\u0410\u041a","\u0413\u041d\u0415\u0417\u0414\u041e","\u0421\u0418\u041d","\u041c\u0410\u041d\u0422\u0418\u042f","\u041e\u0411\u041b\u0410\u041a","\u041e\u0411\u0418\u041a\u041e\u041b\u041a\u0410","\u041f\u042a\u0422","\u0414\u0410\u041c\u0410","\u041a\u042a\u041b\u0411\u041e","\u0413\u0410\u0417","\u0420\u0410\u0417\u041a\u0410\u0417","\u041b\u0410\u0421\u0422\u0418\u041a","\u0423\u0425\u041e","\u041a\u0410\u0420\u0410\u041c\u0424\u0418\u041b","\u0412\u0415\u041d\u0415\u0426","\u041f\u041e\u042f\u0421","\u041a\u0420\u0415\u041c","\u0422\u0415\u0413\u041b\u041e","\u041f\u0420\u0418\u041c\u041a\u0410","\u0422\u041e\u041d","\u0411\u0410\u041d\u0414\u0410","\u0410\u041a\u0423\u041b\u0410","\u041b\u0418\u0420\u0410","\u041b\u0415\u041d\u0422\u0410","\u041d\u0415\u041a\u0422\u0410\u0420","\u041f\u0420\u0410\u0425","\u0413\u041e\u041d\u0414\u041e\u041b\u0410","\u0425\u0410\u041b\u041a\u0410","\u041c\u0410\u041a","\u0421\u0415\u0420\u0412\u0418\u0417","\u041a\u0410\u0420\u0418\u0415\u0420\u0410","\u041c\u0418\u041d\u0410","\u0414\u0418\u0421\u041a","\u041e\u0420\u0413\u0410\u041d","\u0411\u0410\u0420\u0415\u0422\u0410","\u0411\u0423\u0420\u0415\u041d","\u0422\u0415\u0420\u0415\u041d","\u0421\u0412\u0415\u0422\u041b\u0418\u041d\u0410","\u041f\u0410\u041c\u0415\u0422","\u0422\u0420\u0418\u042a\u0413\u042a\u041b\u041d\u0418\u041a","\u0420\u041e\u0417\u0410","\u041f\u0415\u041f\u0415\u0420\u0423\u0414\u0410","\u0412\u0415\u041d\u0414\u0423\u0417\u0410","\u041b\u0415\u041a","\u041a\u0410\u0424\u0415","\u041f\u0420\u041e\u0421\u0422\u041e\u0420","\u041a\u042a\u0421","\u0415\u041a\u0420\u0410\u041d","\u041c\u042a\u0414\u0420\u0415\u0426","\u0411\u0410\u041b\u041e\u041d","\u0418\u0413\u041b\u0410","\u0417\u0410\u0412\u0415\u0421\u0410","\u041b\u042e\u041b\u041a\u0410","\u0410\u0412\u0422\u041e\u041c\u0410\u0422","\u041f\u0420\u0415\u0421\u0422\u0418\u041b\u041a\u0410","\u042f\u0421\u0415\u041d","\u041f\u0418\u041f\u0415\u0420","\u041c\u0410\u0421\u041a\u0410","\u041c\u0410\u0420\u0421","\u041a\u0410\u041c\u0415\u0420\u0410","\u041f\u041e\u0422\u041e\u041a","\u041a\u041e\u041f\u0420\u0418\u041d\u0410","\u041a\u041d\u0418\u0413\u0410","\u041f\u0420\u0418\u0421\u0422\u0410\u041d","\u0411\u0410\u041d\u041a\u0415\u0422","\u041f\u041b\u0418\u0422\u041a\u0410","\u041f\u041b\u0410\u0422\u041e","\u041f\u041e\u0420\u041e\u0419","\u041f\u041e\u041b\u0418\u0426\u0410","\u041d\u0418\u0428\u041a\u0410","\u041a\u041b\u0418\u041d","\u0411\u0415\u0420\u041c\u0423\u0414\u0418","\u0424\u0410\u041d\u0422\u041e\u041c","\u0412\u0415\u0414\u0420\u041e","\u041f\u0415\u0422\u041d\u041e","\u041b\u0410\u0422\u0415\u041a\u0421","\u041f\u0415\u0427\u0410\u0422","\u041a\u041b\u041e\u041d","\u041c\u0410\u0413\u0418\u042f","\u041b\u0410\u0411\u0418\u0420\u0418\u041d\u0422","\u0421\u0426\u0415\u041d\u0410","\u0410\u041c\u0424\u0418\u0411\u0418\u042f","\u041c\u041e\u0420\u0415","\u041d\u041e\u0422\u0410","\u041f\u041e\u0420\u0422\u0410\u041b"],"\u041a\u043e\u0434\u043e\u0432\u0438 \u0438\u043c\u0435\u043d\u0430: \u0422\u0430\u043d\u0434\u0435\u043c":["\u041c\u041e\u0420\u0416","\u041c\u0420\u0410\u0412\u041a\u0410","\u0421\u041a\u0410\u041a\u0410\u041b\u0415\u0426","\u0422\u042a\u0420\u0422\u0415\u0419","\u041a\u0423\u041a\u0423\u0412\u0418\u0426\u0410","\u041a\u041e\u0421\u0422\u0415\u041d\u0423\u0420\u041a\u0410","\u041a\u0410\u0422\u0415\u0420\u0418\u0426\u0410","\u0421\u041a\u041e\u0420\u041f\u0418\u041e\u041d","\u042f\u041a","\u0422\u042e\u041b\u0415\u041d","\u041a\u041e\u0417\u0410","\u0417\u041c\u0418\u042f","\u041e\u0412\u0415\u041d","\u041c\u0410\u0419\u041c\u0423\u041d\u0410","\u041c\u0415\u0414\u0423\u0417\u0410","\u041c\u0418\u0414\u0410","\u0422\u0418\u0413\u042a\u0420","\u0413\u042a\u041b\u042a\u0411","\u041f\u0415\u0422\u041b\u0415","\u0416\u0410\u0411\u0410","\u041f\u0410\u041f\u0410\u0413\u0410\u041b","\u0421\u041b\u041e\u041d","\u041b\u0415\u041d\u0418\u0412\u0415\u0426","\u041b\u0410\u041f\u0410","\u0413\u0410\u0420\u0412\u0410\u041d","\u0411\u0410\u041d\u0414\u0418\u0422","\u0411\u0418\u0420\u0410","\u0421\u041e\u041a","\u0421\u041c\u041e\u041a\u0418\u041d\u042f","\u042f\u0414\u041a\u0410","\u041c\u0415\u041d\u0422\u0410","\u0421\u0423\u0428\u0418","\u0421\u041e\u0421","\u041c\u0410\u0420\u0413\u0410\u0420\u0418\u0422\u0410","\u041c\u041b\u042f\u041a\u041e","\u041e\u0411\u042f\u0414","\u042f\u0419\u0426\u0415","\u041a\u0418\u0421\u0415\u041b","\u0411\u041e\u0411","\u041a\u0418\u0422\u041a\u0410","\u0411\u041e\u0420","\u0411\u0420\u042f\u0413","\u041f\u042f\u0421\u042a\u041a","\u041a\u0420\u0410\u0422\u0415\u0420","\u0421\u0410\u0425\u0410\u0420\u0410","\u0420\u0415\u041a\u0410","\u0425\u0420\u0410\u041b\u0423\u041f\u0410","\u0417\u0415\u041c\u042f","\u0411\u0410\u041b\u041a\u0410\u041d","\u041e\u041a\u0415\u0410\u041d","\u0425\u0418\u041c\u041d","\u0410\u041b\u0411\u0423\u041c","\u041f\u0418\u0410\u041d\u041e","\u0421\u041b\u0423\u0425","\u0420\u0410\u0414\u0418\u041e","\u0413\u041b\u0410\u0421","\u0411\u0410\u0421","\u0413\u041e\u041b\u0424","\u041a\u042a\u041d\u041a\u0418","\u0422\u041e\u041f\u041a\u0410","\u0421\u042a\u0414\u0418\u042f","\u041a\u0410\u0421\u041a\u0410","\u0417\u0410\u0420","\u0421\u041f\u041e\u0420\u0422\u0418\u0421\u0422","\u0413\u041e\u041b","\u041e\u0422\u0411\u041e\u0420","\u0428\u041e\u0420\u0422\u0418","\u041f\u041e\u0422","\u041a\u0410\u0420\u0410\u0422\u0415","\u0422\u0420\u0418\u041a\u041e","\u0420\u0415\u041a\u041e\u0420\u0414","\u0424\u0423\u0420\u041d\u0410","\u0420\u0415\u041d\u0414\u0415","\u0424\u0415\u0420\u041c\u0410","\u0427\u0423\u041a","\u0412\u0420\u0410\u0422\u0410","\u041a\u0418\u041b\u0418\u041c","\u041a\u0410\u0420\u0422\u0418\u041d\u0410","\u041a\u042a\u0420\u041f\u0410","\u041d\u041e\u0416\u0418\u0426\u0410","\u0422\u0410\u0412\u0410","\u041a\u0410\u041d\u0410\u041f\u0415","\u041a\u041e\u041c\u041f\u042e\u0422\u042a\u0420","\u041e\u0413\u041b\u0415\u0414\u0410\u041b\u041e","\u041f\u0418\u0420\u041e\u041d","\u041f\u041e\u041a\u0420\u0418\u0412\u041a\u0410","\u0411\u0410\u041b\u0421\u0410\u041c","\u0413\u0420\u0418\u041c","\u0424\u0423\u0421\u0422\u0410","\u0414\u0410\u041d\u0422\u0415\u041b\u0410","\u0414\u0416\u041e\u0411","\u041f\u0420\u0410\u041d\u0415","\u0422\u0410\u0411\u041b\u0410","\u0411\u0423\u041b\u041e","\u0411\u0420\u0410\u0422","\u041a\u0423\u041a\u041b\u0410","\u0421\u042a\u041d","\u0411\u0418\u041a\u0418\u041d\u0418","\u0428\u0415\u0419\u041d\u0410","\u0411\u0415\u0411\u0415","\u0421\u0420\u041e\u041a","\u042f\u0421\u041b\u0418","\u041a\u041e\u041b\u0418\u0427\u041a\u0410","\u0426\u0415\u041b\u0423\u0412\u041a\u0410","\u0417\u0415\u041c\u0415\u0422\u0420\u042a\u0421","\u0422\u041e\u0420\u041d\u0410\u0414\u041e","\u0411\u0423\u0420\u042f","\u041f\u041e\u0422\u041e\u041f","\u041b\u0410\u0412\u0418\u041d\u0410","\u0411\u041b\u042f\u0421\u042a\u041a","\u0411\u041b\u0418\u0417\u041d\u0410\u0426\u0418","\u041c\u0420\u0410\u0417","\u0421\u0412\u0415\u0422\u041a\u0410\u0412\u0418\u0426\u0410","\u041c\u042a\u0413\u041b\u0410","\u0416\u0415\u0413\u0410","\u0413\u0420\u042a\u041c","\u041c\u0420\u0410\u041a","\u0418\u0421\u041a\u0420\u0410","\u0421\u041b\u042a\u041d\u0426\u0415","\u0412\u0415\u041d\u0415\u0420\u0410","\u0423\u0420\u0415\u0414","\u0412\u0415\u0417\u041d\u0410","\u0421\u041e\u041d\u0414\u0410","\u041e\u0411\u0420\u0410\u0417","\u0421\u0422\u0415\u041f\u0415\u041d","\u0426\u0418\u0420\u041a","\u0410\u041a\u0420\u041e\u0411\u0410\u0422","\u0421\u041f\u0418\u0421\u0410\u041d\u0418\u0415","\u0424\u0418\u041b\u041c","\u041c\u0410\u0421\u0422\u0418\u041b\u041e","\u0422\u0410\u041d\u0414\u0415\u041c","\u041c\u041e\u0417\u042a\u041a","\u041f\u041b\u041e\u041c\u0411\u0410","\u041f\u041e\u0420\u041e\u041a","\u0421\u041a\u0415\u041d\u0415\u0420","\u041d\u0415\u0420\u0412","\u041a\u041e\u041b\u042f\u041d\u041e","\u041b\u0415\u041f\u0415\u041d\u041a\u0410","\u0420\u0415\u0411\u0420\u041e","\u041a\u0410\u0420\u0422\u041e\u041d","\u0423\u0421\u0422\u0410","\u0411\u0415\u041b\u0415\u0413","\u041b\u0415\u041a\u0410\u0420","\u041f\u0420\u041e\u0424\u0418\u041b","\u0411\u042f\u0421","\u0412\u0410\u041c\u041f\u0418\u0420","\u041a\u0423\u041a\u0410","\u041f\u0418\u041a\u0410","\u0414\u0420\u042a\u0416\u041a\u0410","\u041f\u041b\u0410\u0428\u0418\u041b\u041e","\u041a\u041b\u0415\u041e\u041f\u0410\u0422\u0420\u0410","\u041d\u0410\u0412\u0418\u0413\u0410\u0426\u0418\u042f","\u0427\u0418\u041d","\u041a\u0410\u041f\u0418\u0422\u0410\u041d","\u0415\u0421\u041a\u0418\u041c\u041e\u0421","\u0418\u041d\u0414\u0418\u0410\u041d\u0415\u0426","\u0428\u041f\u0418\u041e\u041d\u0418\u041d","\u0410\u0420\u041c\u0418\u042f","\u041a\u041e\u0412\u0410\u0427","\u0417\u041e\u041c\u0411\u0418","\u0412\u042a\u0420\u041a\u041e\u041b\u0410\u041a","\u041a\u0420\u0410\u041b","\u0426\u0415\u0417\u0410\u0420","\u0427\u0415\u0422\u0410","\u0422\u0420\u041e\u041b","\u041a\u041e\u0422\u0412\u0410","\u0421\u0422\u041e\u041c\u0410\u041d\u0410","\u0418\u0421\u0422\u041e\u0420\u0418\u042f","\u0421\u0410\u041c\u041e\u0414\u0418\u0412\u0410","\u041c\u0423\u0421\u041a\u0415\u0422\u0410\u0420","\u041c\u0423\u041c\u0418\u042f","\u0421\u0415\u0414\u041b\u041e","\u0421\u0422\u0420\u0410\u041d\u0410","\u041f\u041e\u0421\u0422","\u041b\u0410\u041a\u0415\u0419","\u0414\u0412\u0418\u0413\u0410\u0422\u0415\u041b","\u0414\u042a\u0420\u0412\u0410\u0420","\u0421\u042a\u0412\u0415\u0422","\u0410\u0414","\u0410\u0420\u041e\u041c\u0410\u0422","\u0411\u041e\u042f","\u0412\u042a\u0416\u0415","\u0413\u0410\u0420\u0410","\u0414\u0418\u041c","\u0414\u0418\u0420\u0415\u041a\u0422\u041e\u0420","\u0414\u0418\u0420\u042f","\u0414\u042a\u0421\u041a\u0410","\u0416\u0418\u0426\u0410","\u041a\u0410\u0411\u0415\u041b","\u041a\u0410\u041b\u042a\u041f","\u041a\u0410\u041f\u041a\u0410","\u041a\u0410\u0420\u0423\u0426\u0410","\u041a\u041e\u041d\u0422\u0410\u041a\u0422","\u041a\u041e\u0420\u0410","\u041a\u041e\u0428","\u041a\u0420\u0423\u0428\u041a\u0410","\u041a\u0423\u041f\u041e\u041d","\u041a\u0423\u0420\u0421","\u041c\u0410\u041a\u0410\u0420\u0410","\u041c\u0410\u0422\u0415\u0420\u0418\u042f","\u041b\u0418\u041c\u041e\u041d\u0410\u0414\u0410","\u0412\u041a\u0423\u0421","\u041c\u0410\u0421\u041b\u041e","\u0413\u0420\u0410\u0425","\u041a\u0410\u041a\u0410\u041e","\u041f\u0418\u0422\u0410","\u0412\u0418\u0428\u041d\u0410","\u0411\u0418\u0421\u041a\u0412\u0418\u0422\u041a\u0410","\u0411\u0420\u0410\u0428\u041d\u041e","\u041f\u0418\u0426\u0410","\u041b\u0423\u041a","\u0414\u0416\u0418\u041d","\u041b\u0415\u0428\u041d\u0418\u041a","\u041a\u0410\u0428\u0410","\u041f\u0423\u041a\u0410\u041d\u041a\u0418","\u0421\u0420\u0415\u0411\u0420\u041e","\u0414\u0418\u0410\u041c\u0410\u041d\u0422","\u0421\u041b\u0410\u0414\u041a\u0410","\u0414\u0415\u0421\u0415\u0420\u0422","\u0425\u0410\u041c\u0411\u0423\u0420\u0413\u0415\u0420","\u041a\u042a\u0420\u0418","\u0417\u041b\u041e\u0414\u0415\u0419","\u0427\u0410\u0419","\u041f\u041b\u041e\u0414","\u0421\u041e\u041b","\u0426\u0412\u0415\u0422\u0415","\u041b\u0415\u0414\u041d\u0418\u041a","\u041e\u0410\u0417\u0418\u0421","\u0428\u0410\u0425","\u041a\u0410\u0420\u0415","\u041e\u0421\u0422\u0420\u041e\u0412","\u0414\u042a\u0413\u0410","\u041f\u0415\u0429\u0415\u0420\u0410","\u041a\u0410\u041b","\u0412\u0418\u041e\u041b\u0415\u0422\u041a\u0410","\u0411\u041e\u041d\u0417\u0410\u0419","\u041f\u041b\u0415\u0412\u0415\u041b","\u041f\u042a\u041f\u041a\u0410","\u0421\u0415\u041c\u0415","\u0414\u042a\u0420\u0412\u041e","\u0411\u041b\u0410\u0422\u041e","\u0422\u0420\u042a\u041d","\u0422\u0420\u042a\u0421\u0422\u0418\u041a\u0410","\u041a\u0410\u0421\u0415\u0422\u041a\u0410","\u0411\u041b\u0423\u0421","\u0413\u0410\u0419\u0414\u0410","\u0421\u0422\u0420\u0423\u041d\u0410","\u0421\u041b\u0423\u0428\u0410\u041b\u041a\u0410","\u0412\u0418\u041d\u0418\u041b","\u041a\u0418\u0422\u0410\u0420\u0410","\u041d\u0410\u0421\u0422\u0418\u041b\u041a\u0410","\u0410\u041f\u0410\u0420\u0422\u0410\u041c\u0415\u041d\u0422","\u0421\u0410\u041f\u0423\u041d","\u041a\u0410\u0422\u0418\u041d\u0410\u0420\u0427\u0415","\u041c\u0410\u041d\u0415\u0420\u041a\u0410","\u0410\u041d\u0422\u0415\u041d\u0410","\u041c\u0410\u0420\u041a\u0423\u0427","\u041f\u041e\u041a\u0420\u0418\u0412","\u0421\u0422\u042a\u041b\u0411\u0410","\u041a\u0423\u0425\u041d\u042f","\u0412\u0410\u041d\u0410","\u0411\u042e\u0420\u041e","\u041f\u0420\u041e\u0417\u041e\u0420\u0415\u0426","\u041a\u0410\u041d\u0410","\u041a\u041e\u0420\u0418\u0414\u041e\u0420","\u0421\u0410\u041b\u041e\u041d","\u0418\u0417\u041e\u041b\u0410\u0426\u0418\u042f","\u0414\u0412\u041e\u0420","\u041f\u0410\u0420\u041d\u0418\u041a","\u0414\u041e\u041c","\u0414\u0423\u0428","\u0422\u0420\u0418\u041e\u041d","\u0422\u0415\u0420\u0410\u0421\u0410","\u0425\u0410\u041c\u0410\u041a","\u0413\u0420\u0410\u0414\u0418\u041d\u0410","\u041f\u0410\u041a\u0415\u0422","\u041b\u042e\u0411\u041e\u0412","\u0428\u041a\u041e\u041b\u0410","\u0413\u042a\u0420\u041d\u0415","\u041b\u0410\u041a","\u0414\u041d\u0415\u0412\u041d\u0418\u041a","\u0411\u041e\u0422\u0423\u0428","\u0411\u0420\u0410\u0414\u0410","\u0413\u0420\u0415\u0419\u041a\u0410","\u0413\u0420\u0418\u0412\u041d\u0410","\u0414\u0418\u0410\u0414\u0415\u041c\u0410","\u041f\u0418\u041b\u0410","\u041f\u0423\u0414\u0420\u0410","\u0420\u0418\u0417\u0410","\u0420\u041e\u041b\u041a\u0410","\u0421\u0410\u041d\u0414\u0410\u041b\u0418","\u0421\u041a\u0410\u0420\u0410","\u0421\u041c\u041e\u041a\u0418\u041d\u0413","\u0421\u0422\u0415\u041d\u0410","\u0421\u0422\u041e\u0419\u041a\u0410","\u0422\u0415\u041b\u0415\u0424\u041e\u041d","\u0422\u041e\u0410\u041b\u0415\u0422","\u0422\u042a\u041a\u0410\u041d","\u0427\u0410\u0414\u042a\u0420","\u0427\u0423\u0412\u0410\u041b","\u0410\u0421\u0422\u0420\u041e\u041d\u0410\u0412\u0422","\u0421\u042a\u0417\u0412\u0415\u0417\u0414\u0418\u0415","\u041b\u0423\u041f\u0410","\u0424\u0418\u0417\u0418\u041a\u0410","\u0415\u041b\u0415\u041c\u0415\u041d\u0422","\u041c\u041e\u0414\u0415\u041b","\u0424\u041e\u0420\u041c\u0410","\u0421\u0415\u041a\u0423\u041d\u0414\u0410","\u0421\u0411\u041e\u0420","\u041c\u0415\u0422\u042a\u0420","\u041c\u0415\u0422\u0415\u041e\u0420\u0418\u0422","\u0421\u0422\u0410\u041d\u0426\u0418\u042f","\u041a\u041e\u041c\u0415\u0422\u0410","\u0422\u0410\u0422\u0423\u0418\u0420\u041e\u0412\u041a\u0410","\u0417\u0410\u041d\u0410\u042f\u0422","\u041f\u0418\u0421\u0410\u041b\u041a\u0410","\u041a\u0418\u041d\u041e","\u0421\u0412\u0418\u0422\u042a\u041a","\u0411\u0418\u0416\u0423\u0422\u0415\u0420","\u0422\u0415\u0410\u0422\u042a\u0420","\u041c\u041e\u041b\u0418\u0412","\u0413\u0420\u0410\u0424\u0418\u0422\u0418","\u041c\u0410\u0413","\u0413\u0410\u041b\u0415\u0420\u0418\u042f","\u041f\u0410\u0427\u041a\u0410","\u041e\u0413\u041d\u0418\u0429\u0415","\u0420\u0410\u041c\u041e","\u0422\u0415\u041d\u0415\u041a\u0418\u042f","\u041d\u041e\u0421","\u0412\u0418\u0420\u0423\u0421","\u041b\u0418\u0413\u0410","\u0424\u041b\u0410\u0413","\u041f\u0423\u0428\u041a\u0410","\u041c\u0415\u0427","\u041c\u0415\u0425\u0423\u0420","\u0427\u0415\u0420\u0415\u041f","\u0412\u0418\u041a\u0418\u041d\u0413","\u0417\u0410\u041c\u042a\u041a","\u0417\u0410\u0422\u0412\u041e\u0420","\u0415\u041a\u0418\u041f\u0410\u0416","\u0415\u041f\u041e\u0425\u0410","\u0421\u0410\u041d\u0414\u042a\u041a","\u041f\u0420\u0410\u0428\u041a\u0410","\u0428\u041b\u0415\u041c","\u0418\u0413\u041b\u0423","\u0428\u0410\u0422\u0420\u0410","\u041c\u041e\u041d\u0415\u0422\u0410","\u0421\u042a\u041a\u0420\u041e\u0412\u0418\u0429\u0415","\u0411\u0420\u0410\u0414\u0412\u0410","\u0421\u0422\u0420\u0415\u041b\u0415\u0426","\u041a\u0410\u041b\u042a\u0424","\u0421\u0410\u041c\u0423\u0420\u0410\u0419","\u041a\u041b\u0415\u0419\u041c\u041e","\u041c\u0418\u0422","\u0411\u0420\u041e\u041d\u042f","\u041a\u041e\u041b\u0415\u0414\u0410","\u0425\u041e\u0420\u0410","\u041a\u0420\u042a\u0413","\u0421\u041f\u0418\u0420\u0410\u0427\u041a\u0410","\u041a\u0410\u0422\u0415\u0414\u0420\u0410\u041b\u0410","\u041e\u0411\u0420\u0415\u0414","\u041f\u0420\u0410\u0417\u041d\u0418\u041a","\u0412\u0415\u041b\u0418\u041a\u0414\u0415\u041d","\u041f\u041e\u0414\u0410\u0420\u042a\u041a","\u0421\u0412\u0410\u0422\u0411\u0410","\u0414\u042a\u0425","\u041f\u0415\u0419\u041a\u0410","\u0422\u0410\u041d\u041a","\u0420\u0410\u041c\u041a\u0410","\u0421\u041f\u0420\u0415\u0419","\u041c\u0415\u041b\u041d\u0418\u0426\u0410","\u041f\u042f\u041d\u0410","\u0416\u0418\u041b\u041e","\u041a\u0423\u0411\u0415","\u0413\u0420\u0410\u041d\u0418\u0426\u0410","\u041c\u0418\u0420","\u041e\u041f\u0415\u0420\u0410\u0426\u0418\u042f","\u041e\u0421\u041d\u041e\u0412\u0410","\u041f\u0410\u0420\u0410\u0414","\u041f\u0410\u0420\u0422\u0418\u042f","\u041f\u0415\u041f\u0415\u041b","\u041f\u041b\u0418\u0421\u041a\u0410","\u041f\u0418\u0421\u0422\u0410","\u041f\u0420\u0415\u0412\u041e\u0414","\u041f\u0423\u0420\u0410","\u041f\u041e\u0429\u0410","\u041f\u0423\u0425","\u0420\u0410\u0419","\u0420\u0415\u041b\u0421\u0410","\u0420\u0415\u0428\u0415\u0422\u041a\u0410","\u0421\u0410\u041c\u041e\u041b\u0415\u0422","\u0424\u041e\u041a\u0423\u0421","\u0420\u0418\u0411\u0410\u0420","\u0421\u041f\u0418\u0420\u0422","\u0421\u0422\u042a\u041f\u041a\u0410","\u041b\u041e\u0421\u0422","\u0425\u0410\u0420\u0422\u0418\u042f","\u0426\u0415\u041d\u0422\u0420\u0410\u041b\u0410","\u0428\u0415\u0424","\u0428\u041e\u0424\u042c\u041e\u0420"]},"ca":{"Codi secret":["CAL\xc7OT","BOTA","BERL\xcdN","CLASSE","AP\xc8NDIX","BLEDA","CAP","ALEMANYA","CABINA","BOTIFARRA","BALENA","COCA","BORDA","CAMPANA","CACTUS","AVI\xd3","CADIRA","ANELL","ADVOCAT","BALA","CINTA","ANGLATERRA","CA\xc7A","CINTUR\xd3","COBERTA","AIGUA","AIRE","CANAL","CARAVANA","BOLET","CAPGR\xd2S","CENTRE","CAPA","CAMP","AS","AMPOLLA","CASTELL","AGENT","CADENA","C\xc0RREGA","\xc0GUILA","BOMBA","BLAU","PENYA-SEGAT","CEP","CAU","BOSC","CAGANER","BISBE","DEU","BANDA","CAVALL","AMBUL\xc0NCIA","CASTANYA","CIENT\xcdFIC","AMBAIXADA","BARALLA","CASINO","AM\xc8RICA","CARRERA","CLOT","\xc0NGEL","BERMUDES","CLAU","BLOC","CANVI","CARA","C\xc0LCUL","CARTA","LLA\xc7","ANT\xc0RTIDA","BESS\xd3","BATERIA","CAPITAL","CANYA","BRUIXA","BOLA","BANC","\xc0REA","CERCLE","ARGENTINA","ASTECA","\xc0FRICA","CAQUI","ENXANETA","BOCA","CENTAURE","ARC","AGULLA","ARANYA","ATL\xc0NTIDA","CARRO","CARGOL","BARRA","BALL","CAIXA","CAVALLER","CASC","CANGUR","BOT\xd3","COLL","CORDA","ESPIA","FRAN\xc7A","FOLRE","GRALLA","CREU","ESTRELLA","FITXA","DISC","FESTA","GOLF","CORONA","FREDOLIC","GRIPAU","FIGURA","CORREU","GAMAR\xdaS","POU","CUA","GRAU","DINOSAURE","DENT","DELTA","FRANC","BUF\xd3","ESTADI","ENTERRAMORTS","FOC","DIAMANT","ESTANY","COT\xd3","ESCORP\xcd","DO","GEL","GENI","CORNETA","GAUD\xcd","NOU","GRA","FIGA","FANTASMA","ENTRADA","CONTRABANDISTA","ESPAI","GALETA","FURGONETA","EGIPTE","EMPERADOR","CORRENT","COL\xd2NIA","GRATACEL","CUINER","CULLERA","CUC","COLUMNA","COTXE","CORREDOR","GANIVET","FUET","FOR\xc7A","COMA","CONCERT","FONT","GAMMA","FLAUTA","GEGANT","FALANGE","GELAT","EUROPA","GOTA","FLETXA","COPA","DIA","GR\xc8CIA","COMP\xc0S","DRAC","EXTRATERRESTRE","COR","GANXO","DAMA","CONILL","COCO","CRESTA","GAT","EBRE","GOS","COP","CODI","ENLLA\xc7","ETIQUETA","CROMO","ESTACI\xd3","FORAT","COMPOST","FARINERA","FAL\xc7","FREQ\xdc\xc8NCIA","DIANA","ESGL\xc9SIA","MOTOR","M\xcdSSIL","M\xc0SCARA","PATUFET","LLENGUA","MERCURI","NIT","VENT","MONA","MODEL","MADUR","PEL\xb7L\xcdCULA","MINA","NIL","MOLL","M\xc0","MORTER","LLE\xd3","MONTSERRAT","LONDRES","PASTILLA","GUANT","MOLLA","PATGE","PE\xc7A","HELIC\xd2PTER","HOTEL","NAN","OLI","M\xc8XIC","NOVA YORK","PARACAIGUDES","NOTA","NAU","LLOM","HOLLYWOOD","PAL","HOSPITAL","MORT","ORENETA","HERBA","MICROSCOPI","MELIC","PASTANAGA","PAS","PALMA","MILIONARI","MONITOR","MARXA","\xcdNDIA","MALTA","PANTALLA","IT\xc0LIA","PALA","PASTA","LLENYA","MAMA","ORNITORINC","KIWI","\xd2PERA","\xd3S","L\xcdNIA","MARCA","PEIX","META","NAVALLA","OBRA","MUR","ONA","MOLA","LLADRE","MASSA","MEL","NINJA","NUCLI","M\xd2DUL","METGE","MALALTIA","LLIT","PASSI\xd3","LLUM","LLIURA","L\xc0SER","NUS","MOC","MESTRE","PARTIDA","LIMUSINA","GUERRA","MARFIL","LLUNA","OR","OLIMP","MASIA","M\xc0GIA","MOSCOU","PAPER","ORGUE","NEU","MODERNISME","PERIQUITO","PISTA","S\xc0HARA","TAULER","TERRA","VIDRE","POMA","SAMFAINA","SUPERHEROI","RATPENAT","SORT","ULL","PLANXA","TERRASSA","XOCOLATA","SU\xcdS","PLATA","TRIBUNA","TELESCOPI","POP","XARXA","REVOLUCI\xd3","PUNT","PRINCESA","TAPA","TALL","SAT\xc8L\xb7LIT","ROSA","TEMPS","RADI","SANT JORDI","POLICIA","ROVELL","REI","UNICORN","TUB","PLATJA","VAMPIR","SOLDAT","VESTIT","SUBMARINISTA","SET","ROSSINYOL","PLOM","SABATA","TORRE","TORN","ROBOT","RONDA","PLANTA","PEU","VIDA","PORTADA","PORTER","PORT","PILA","POLZE","PIRATA","TROMPA","T\xd2QUIO","TEATRE","PILAR","PINTA","TAULA","TORTUGA","TACTE","INFERMERA","SERRA","VAIXELL","SENYAL","VER\xcd","TALP","PISTOLA","PUNTA","XOC","PINYA","RATOL\xcd","SERP","PIRINEUS","TRONC","PREMSA","PILOT","PENAL","POLS","TI\xd3","REINA","VENUS","PIR\xc0MIDE","PEQU\xcdN","ROMA","SATURN","PONT","SALSA","TARONJA","PING\xdc\xcd","SOBRE","SIRENA","TRUITA","RAIG","RULETA"]},"dk":{"Codenames":["ROULETTE","DRAGE","KRIG","HONNING","BOMBE","KASINO","SKYSKRABER","SATURN","RUMV\xc6SEN","PISK","ANTARKTIS","SNEMAND","KONCERT","CHOKOLADE","FLY","MILLION\xc6R","DINOSAUR","PIRAT","HORN","PINGVIN","EDDERKOP","MISSIL","AMBASSADE","PISTOL","SYGDOM","SPION","PRINSESSE","GENI","TYV","OPERA","RIDDER","STADIUM","LIMOUSINE","SP\xd8GELSE","VAREVOGN","ISPIND","LASER","D\xd8D","HOSPITAL","AMBULANCE","BL\xc6KSPRUTTE","HELIKOPTER","K\xc6NGURU","MIKROSKOP","KENTAUR","SUPERHELT","TELESKOP","FALDSK\xc6RM","N\xc6BDYR","OLYMPEN","SATELLIT","ENGEL","ROBOT","ENHJ\xd8RNING","HEKS","BEDEMAND","DYKKER","GIFT","BRO","ILD","BORD","HVAL","M\xc5NE","FISK","DOKTOR","KIRKE","B\xc6LTE","JORDMOR","VIND","L\xd8VE","\xd8JE","LUFT","KANIN","BANK","GR\xc6S","KJOLE","DV\xc6RG","SKOV","BIL","HANDSKE","\xc6BLE","OLIE","KOK","BJ\xd8RN","KAT","LIV","HELD","K\xc6MPE","ANSIGT","STRAND","HOTEL","VAND","PAPIR","ORM","ADVOKAT","FORSKER","DANS","GULEROD","KETCHUP","NAT","BOMULD","FOD","MUS","KNIV","TEATER","POLITI","SKIB","PILOT","TOMMELTOT","L\xc6RER","FLASKE","DAG","KONGE","GLAS","DRONNING","TAND","HUND","HEST","SKO","STOL","KRONE","IS","GULD","GAFFEL","TID","FL\xd8JTE","FAKKEL","ANE","ELFENBEN","SOLDAT","PYRAMIDE","SNOR","STJERNE","RING","VINGE","HJERTE","BLOK","SLANGE","N\xc5L","LINJE","D\xc6KKE","BR\xc6T","KONTAKT","SK\xc6RM","STYKKE","PLET","KNAP","MUND","M\xc6RKE","H\xc5ND","SENG","V\xc6G","T\xc5RN","KORT","KNUDE","DIAMANT","KORS","NET","PRIK","PAS","TALLERKEN","HUL","KLOKKE","STYRKE","N\xd8GLE","MOTOR","B\xd8LGE","STR\xd8M","HOVED","POL","CENTER","SAMMENST\xd8D","LIM","SPIDS","KODE","CIRKEL","FORBINDELSE","R\xd8R","NEW YORK","AUSTRALIEN","BERMUDA","TOKYO","EGYPTEN","LONDON","GR\xc6SKAR","MOSKVA","CANADA","SHAKESPEARE","HOLLYWOOD","GR\xc6KENLAND","ROM","HIMALAYA","NINJA","TJEKKIET","KIWI","TYSKLAND","STAT","AMERIKA","ATLANTIS","ENGLAND","AHORN","AFRIKA","NORD","NISSE","HESTESKO","\xd8RN","MEXICO","EUROPA","SKORPION","BERLIN","LIG","MINE","LOCH NESS","BEIJING","INDIEN","SMUGLER","GR\xd8NLAND","T\xc6RTE","LAST","STRYG","SK\xc5L","OPHOLD","D\xd8R","KYLLING","BUD","TALER","GR\xd8N","R\xc5","SEJ","STAV","PILLER","DYR","T\xd8MMER","FYR","KLAP","BAKKE","BLAD","LIME","LYST","SL\xc5","VID","RAMME","M\xc5L","BED","FOLD","REGN","BAR","BLINK","BO","DAMP","ENDE","FANGE","FED","SKY","HOLD","HULE","H\xd8R","SPR\xd8D","PRIS","BLIND","HELT","HUMMER","KALD","FLAMME","ALPERNE","KAGE","PRESSE","STEG","BRUD","BROK","ANKER","KAJ","SKARP","TR\xc6K","GEAR","GODE","GRILLE","BAMSE","FRANKRIG","TAP","PIBE","BASSER","V\xc6V","KOST","HOPPE","BID","L\xd8B","SNE","FL\xc6KKE","SPAR","RUDER","SPRINGER","TANK","FASTE","P\xc6RE","FULD","S\xd8S","EPISODE","JOB","R\xd8DE","POOL","SKILT","JUICE","KISTE","FACADE","FARVE","LEVER","LED","R\xc5D","LOD","KILDE","KL\xd8","FLIP","STRIBE","TUNGE","MASSE","FORMEL","FORT","FRI","ROSE","FR\xd8","F\xc6LDE","F\xc5R","GANGE","SVALE","GRIB","KL\xd8R","SK\xc6G","LEDER","RAP","LADE","LEJE","LISTE","MAGER","MASKE","DRIVE","SLAG","KL\xd8VER","SPR\xc6KKE","KRUMME","KUR","PLASTIK","K\xd8N","KRAN","\xc5RE","SLAP","GAS","VEST","TRAPPE","STOF","LOMME","BLOMME","BAG","LEGENDE","B\xd8RSTER","\xc6G","TR\xc5D","RUM","URET","SUR","HALE","KUVERT","SKUFFER","PASSER","PAKKE","BUKKE","LINSE","SNITTER","AUTO","B\xc5DE","B\xd8NNER","TANG","LUGE","POST","SKJOLD","TRANG","ARM","VANTE","UDE","BEN","RULLE","BOKS","T\xd8R","MAST","SKUD","KEGLE","KL\xc6DE","BUND","N\xd8D","KASTE","BOR","KROG","PLADE","BLOD","REN","SKAT","AND","\xc5NDER","SLIK","L\xd8FTE"],"Codenames: Duet":["SPAND","SPURT","HVALROS","SAFT","FLAG","BULE","MYRE","VAMPYR","TATOVERING","G\xc5RD","BILLE","RIFFEL","VIKING","MEL","MAKEUP","POTTER","SMAG","BLUES","GOLF","FJERNSYN","DUKKE","FROKOST","SK\xd8JTER","HOBBY","MINISTER","PEN","SM\xd8R","PUDE","SLOT","HYGGE","SKIVE","DRONE","HAMMER","GULV","F\xc6NGSEL","PAUSE","BLONDE","PIND","TIN","FLAD","SK\xd8R","H\xc5R","MUDDER","GULDSMED","HERKULES","KLINGE","MYG","\xc6RT","ISLAND","FROST","TR\xc6NER","KARTOFFEL","KN\xc6K","LAKRIDS","SKILDPADDE","JUL","KIRSEB\xc6R","STIK","\xd8M","STOK","PILLE","KIKS","SPR\xd8JTE","PEBER","MENNESKE","M\xd8LLE","MARACAS","SKUM","MOL","ISTID","MINDE","STRIK","KAM","BRILLER","PIZZA","S\xc6BE","BIG BEN","K\xc6LK","VIOLET","BOBLE","SKE","L\xd8G","\xc5ND","GLANS","SHERLOCK","BUGT","T\xd8RRE","BROR","ROD","STIGE","FUGLESKR\xc6MSEL","GAVE","KILT","TAB","BONSAI","EVENTYR","GLITTER","EGERN","BALJE","MARATON","\xd8RE","POPCORN","GULDLOK","GARN","BIKINI","KYS","DUKS","L\xc6DER","KYST","ASTRONAUT","SORT HUL","PRAVDA","DR\xd8M","STETOSKOP","BABY","TIPI","SMIL","DOMMER","VULKAN","NYLON","GUITAR","BI","RUNE","BAL","R\xd8G","HJELM","K\xd8KKEN","SAHARA","PEDAL","SKR\xc6M","KERNE","\xd8KSE","MALE","KRANIE","T\xc5RE","KRYSTAL","NEWTON","KANDE","GNIST","ASKE","KRAVE","VINDUE","SKOVHUGGER","K\xc6RLIGHED","SUPPE","BL\xc6K","SALON","S\xd8","SFINKS","SHERWOOD","LYN","GED","KAR","KLEOPATRA","SALAT","TOP","K\xd8B","BETJENT","S\xd8STER","DIREKT\xd8R","BREV","KAPTAJN","LAK","KRABBE","MURSTEN","EINSTEIN","SANG","HANEKAM","BASE","UNIVERSITET","JOKER","KO","MASKINE","DOLLAR","MINUT","RIS","H\xc6R","PENTAGON","BIG BANG","COLOMBUS","UR","SMED","JEANNE D\'ARC","ZOMBIE","SOMMERFUGL","HJUL","TANDL\xc6GE","OST","JORD","NAPOLEON","TEXAS","GADE","FEBER","T\xc5GE","BARBER","KABEL","BORGMESTER","COWBOY","S\xd8MAND","FRIST","C\xc6SAR","DRIVHUS","ST\xd8V","FUTTER","TROLD","KV\xc6K","ST\xd8J","SKI","RUSLAND","PERLE","DANSK","KOGE","P\xc5SKE","KVARTER","MIKROB\xd8LGE","BAD","BR\xc6NDSTOF","JORDSK\xc6LV","KRAGE","TRYLLEKUNSTNER","NERVE","TORDEN","MUSKETER","SNEGL","PULVER","STANG","VARULV","K\xc6DE","SEKUND","K\xd8JE","KLEMME","MUG","SYRE","FASTELAVN","KLISTER","KLODS","KRIGSSKIB","KAMP","TASKE","VIRUS","TORNADO","CYKEL","PAPEG\xd8JE","BURGER","SKAB","NOA","TROLDMAND","PARADE","FORKL\xc6DE","KARRY","STR\xc5LE","KUBE","SADDEL","ROTTE","BACON","GUMMI","PATIENT","SAV","OASE","VENUS","B\xc6NK","RIFT","REJE","VEJ","KRIDT","GYMNAST","METER","RODEO","SILKE","KAFFE","RYTTER","SMOOTHIE","SALSA","SEJL","ULD","TUNNEL","HAVE","LUGT","KRAM","TR\xc6","LAND","ELEFANT","DAL","M\xd8G","SQUASH","MOR","TEGNING","SPOR","FR\xd8KEN","PUNG","IGLO","L\xc6BE","ABE","HAT","SVED","F\xd8RER","DELTA","SALT","DOVEN","LOFT","ST\xc5L","SHORTS","STORM","K\xd8RESTOL","B\xc5S","RAT","BALLON","GRILL","SK\xd8RT","BAS","HAWAII","SENNEP","L\xc6GE","VANDMAND","ALASKA","\xd8L","MONA LISA","BRUGT","SVING","TRICK","MYSTIK","VASKET\xd8J","POLO","BR\xd8D","BESKYTTELSE","TE","RENSDYR","SUMO","BOLLE","ES","RUST","\xd8NSKE","FRISK","KUGLE","BRASILIEN","GEM","HALLOWEEN","JULEMAND","HJERNE","HIT","HUS","JORDN\xd8D","SKAL","TIP","SV\xc6RD","SPEJL","KANO","ONKEL","SIDE","POP","B\xd8NNE","CHIP","KOMET","GRIS","HISTORIE","SVINDEL","REGNBUE","S\xc6K","BUK","SUKKER","SOL","GYNGE","BANAN","RADIO","DRESSING","MOSE","MANICURE","FLOD","STEMPEL","VOGN","TIGER","COMPUTER","TJENER","FERSKEN","HOMER","BOKSER","EDEN","S\xd8VN","MINOTAUROS","FILM","KUNG FU","MUMIE","SKRIDT","SPORE","BANDE","M\xc6LK","UGLE","SHAMPOO","S\xc6T","ARK","LAVINE","REB","CHEF","SPARK","BOG","SPRIT","SKULDER","SPIL","N\xc6SE","TROMME"]},"et":{"Codenames":["RULETT","DRAAKON","S\xd5DA","MESI","POMM","KASIINO","PILVEL\xd5HKUJA","SATURN","TULNUKAS","PIITS","ANTARKTIKA","LUMEMEMM","KONTSERT","\u0160OKOLAAD","REAKTIIV","MILJON\xc4R","DINOSAURUS","PIRAAT","PASUN","PINGVIIN","\xc4MBLIK","RAKETT","SAATKOND","P\xdcSTOL","HAIGUS","SPIOON","PRINTSESS","GEENIUS","VARAS","OOPER","R\xdc\xdcTEL","STAADION","LIMUSIIN","VAIM","FURGOON","J\xc4\xc4TIS","LASER","SURM","HAIGLA","KIIRABI","KAHEKSAJALG","HELIKOPTER","K\xc4NGURU","MIKROSKOOP","KENTAUR","KANGELANE","TELESKOOP","LANGEVARI","NOKKLOOM","OL\xdcMPOS","SATELLIIT","INGEL","ROBOT","\xdcKSSARVIK","N\xd5ID","SURNUMATJA","SUKELDUJA","M\xdcRK","SILD","TULI","LAUD","VAAL","KUU","KALA","DOKTOR","KIRIK","V\xd6\xd6","MED\xd5DE","TUUL","L\xd5VI","SILM","\xd5HK","J\xc4NES","PANK","ROHI","KLEIT","P\xc4KAPIKK","METS","AUTO","JAAM","\xd5UN","\xd5LI","KOKK","KARU","KASS","ELU","\xd5NN","HIIGLANE","N\xc4GU","RAND","HOTELL","VESI","PABER","USS","JURIST","TEADLANE","TANTS","PORGAND","KET\u0160UP","\xd6\xd6","RIIE","JALG","HIIR","NUGA","TEATER","POLITSEI","LAEV","PILOOT","P\xd6IAL","\xd5PETAJA","PUDEL","P\xc4EV","KUNINGAS","KLAAS","KUNINGANNA","HAMMAS","KOER","HOBUNE","KING","TOOL","KROON","J\xc4\xc4","KULD","KAHVEL","AEG","SAAR","MERI","LUMI","RIIK","S\xd5DUR","P\xdcRAMIID","KEE","T\xc4HT","RING","TUND","S\xdcDA","PLOKK","TORU","N\xd5EL","JOON","OTS","PUU","KOOL","P\xdcHA","M\xc4NG","PAIK","NUPP","SUU","KIRI","K\xc4SI","MAA","SEIN","\xc4RI","KAART","VIIK","AASTA","RIST","TUNNISTUS","PUNKT","PASS","PLAAT","MASIN","KELL","J\xd5UD","V\xd5TI","MOOTOR","KODU","VOOL","PEA","NINA","NAHK","LAPS","T\xd6\xd6","AED","VANA","MEES","SIDE","PARK","TALLINN","AUSTRAALIA","L\xd5UNAMAA","TOKYO","EESTI","LONDON","J\xd5ULUD","MOSKVA","KANADA","SHAKESPEARE","HOLLYWOOD","VIIRALT","ROOMA","SAUN","P\xd5DER","BALTI","KIIVI","TARTU","OSARIIK","AMEERIKA","ATLANTIS","INGLISMAA","NUKK","PESU","TALL","SUITS","HING","KARI","VUTT","AKT","ARM","SIREEN","D\u017dINN","EETER","EHE","ETIKETT","HALL","JUUR","JUTT","PILL","H\xc4VITAJA","IIRIS","HARI","HANG","VILE","PAKK","KAKK","KANT","KLAPP","LUUD","MULK","MUTT","REIS","KULU","KURK","LAKK","LAVA","VIIS","K\xc4IK","VINT","TOLL","SABA","SIIL","ROOG","TUUR","RIIV","P\xd5LV","ILM","PAPP","PLEKK","TEMPEL","NOOT","NUTT","NAEL","KOOR","LEST","HAKK","JAHT","JAKK","ALA","KOI","H\xc4\xc4L","KORD","KILE","KIIL","KARP","AAS","LAINER","KAAK","SOOL","VAHE","VAHT","TRELL","OSA","N\xdcRI","MAKS","L\xc4\xc4TS","LUUP","MAST","TENNIS","KASV","IGA","POOL","VOOR","PRESS","T\xdcKK","PIRN","VOLT","TAI","MANDARIIN","SULA","LAAGER","V\xd5RK","MATT","TROLL","L\xd5\xd5TS","KREEM","GLASUUR","KRUUS","V\xc4HK","LITTER","VALI","SEIS","\u0160EIK","ORIGINAAL","PASTA","LUTIKAS","PRIIMUS","TUALETT","TEKK","RATAS","NELK","TAMM","TUKK","VATT","VARI","ROKK","TITAAN","TAHVEL","KANN","PULL","MAINE","TINT","LOOD","KLASS","JAGU","PATS","KAMA","RAUD","TORM","PARM","KOPS","MATS","SIHT","K\xd5NE","PALA","SOOMUS","K\xd5RS","KANNATUS","V\xd5SU","SOKK","VASTNE","KRIIM","SARV","V\xc4GI","KONTAKT","KOGU","PADA","SERV","KASTE","VENE","POST","VAHER","SOOME","HELSINKI","JURMALA","VIIKING","PAGAN","ROOTSI","EUROOPA","STOCKHOLM","L\xc4TI","P\xc4\xc4SUKE","RIIA","KALEV","SADAM","PIIR","PRESIDENT","RUKIS","LAUL","TEE","KOHUS","VILL","L\xd5HE","NIIT","PUUR","P\xd5HI","SULG","S\xd5IM","S\xdcST","MARSS","TERA","VARA","V\xd5RU","TULP","PUSA","LAIM","M\xdcNT","KAAL","RAHU","L\xd5UNA","PIND","SALV","PITS","KARJ\xc4\xc4R","N\xd5U","PALK","LEHT","KINK","KEEL","ALUS","S\xd6\xd6T"]},"hr":{"Codenames":["RULET","LIPA","ZMAJ","AFRIKA","VOJSKA","SLAVUJ","MED","FRANCUSKA","BOMBA","POTKOVA","KASINO","DOMA\u0106I","NEBODER","MEKSIKO","SATURN","BERLIN","STRANAC","KUNA","BI\u010c","EUROPA","ANTARKTIKA","ORAO","SNJEGOVI\u0106","ALPE","KONCERT","PLITVICE","\u010cOKOLADA","PEKING","LETJELICA","INDIJA","MILIJUNA\u0160","DUBROVNIK","DINOSAUR","DROGA","PIRAT","BUREK","TRUBA","ZIMA","PINGVIN","SPOJ","PAUK","OPRUGA","RAKETA","DRAGA","AMBASADA","BETON","PI\u0160TOLJ","STUPANJ","KUGA","BRAZDA","\u0160PIJUN","TABLICA","PRINCEZA","ZELEN","GENIJE","\u010cAJ","LOPOV","STUDEN","OPERA","PRST","VITEZ","NIT","STADION","BIT","LIMUZINA","ZRAKA","DUH","KAPA","KOMBI","LIMUN","SLADOLED","LISTOPAD","LASER","PETA","SMRT","KOCKA","BOLNICA","MARS","SPASILAC","DOMORODAC","HOBOTNICA","BATERIJA","HELIKOPTER","TOP","KLOKAN","BODLJA","MIKROSKOP","AGENT","KENTAUR","KAP","JUNAK","TEMELJAC","TELESKOP","STIJENA","PADOBRAN","DRAMA","\u010cUDNOVATI KLJUNA\u0160","DUHAN","VELEBIT","PERO","SATELIT","ZATVOR","AN\u0110EO","PUT","ROBOT","UDAR","JEDNOROG","DU\u0160A","VJE\u0160TICA","KRIJESNICA","POGREBNIK","SJENA","RONILAC","JEZIK","OTROV","KO\u0160","MOST","BUBAMARA","OGNJI\u0160TE","KONTAKT","STOL","KRILA","KIT","OKLOP","MJESEC","KVA\u010cICA","RIBA","BOR","DOKTOR","DUG","TORANJ","MINA","REMEN","KRISTAL","SESTRA","GALEB","VJETAR","KUKA","LAV","IGRA","OKO","PARK","ZRAK","ENERGIJA","ZEC","METAR","BANKA","KR\u0160","TRAVA","\u0160I\u0160MI\u0160","HALJINA","VODI\u010c","PATULJAK","KILA","\u0160UMA","RUNDA","AUTOMOBIL","POLJE","RUKAVICA","KOLO","JABUKA","TAMNICA","ULJE","\u0160TAP","\u0160EF","KORITO","MEDVJED","BUBANJ","MA\u010cKA","\u0160KOLA","\u017dIVOT","\u0160LJIVA","SRE\u0106A","DLAKA","DIV","ZEMLJA","OBRAZ","LUK","OBALA","VIRUS","HOTEL","PIJAVICA","VODA","DNEVNIK","PAPIR","MENTA","CRV","REKET","SUDAC","ATOM","ZNANSTVENIK","KULTURA","PLES","BOBICA","MRKVA","ZAPLET","KE\u010cAP","HRAM","NO\u0106","PISMO","VATA","LOKOMOTIVA","NOGA","PATKA","MI\u0160","ZAVOJ","NO\u017d","RAZLIKA","KAZALI\u0160TE","SPU\u017dVA","POLICIJA","KLIZANJE","BROD","POKUS","PILOT","MASLINA","PALAC","JAJE","U\u010cITELJ","MERKUR","BOCA","STRIJELA","DAN","BOKS","KRALJ","PRIRODA","STAKLO","ZRNO","KRALJICA","ZAKON","ZUB","SAT","PAS","STANICA","KONJ","ORGAN","CIPELA","SPOMENIK","STOLICA","RU\u017dA","KRUNA","MODEL","LED","KRIJES","ZLATO","TROKUT","VILE","MEKU\u0160AC","VRIJEME","\u0160KOLJKA","FLAUTA","VAGA","BAKLJA","PLA\u0160T","SNIJEG","SLAMKA","DRVO","RAK","VOJNIK","SOVA","PIRAMIDA","PROPUH","\u017dICA","LISICA","ZVIJEZDA","PRITISAK","PRSTEN","KAVA","ROG","FENIKS","SRCE","EKSPLOZIJA","BLOK","LABORATORIJ","TUBA","VLADA","IGLA","MAGIJA","LINIJA","BRANA","PREKRIVA\u010c","RA\u010cUNALSTVO","KRAK","PLASTIKA","FIGURA","\u010cELO","PLATNO","DIZALICA","IGRA\u010c","KAVALIR","\u010cETVRT","VODENJAK","DUGME","NJU\u0160KA","OTVOR","DJEVICA","ZNAK","SLON","RUKA","POKLOPAC","PREHLADA","REVOLUCIJA","ZID","JAMA","GRAD","PLIN","KARTA","IZVOR","\u010cVOR","KUKAVICA","BLAGO","SJEME","KRI\u017d","CVR\u010cAK","MRE\u017dA","ZDENAC","TO\u010cKA","KARNEVAL","PROLAZ","PORUKA","OKVIR","RA\u010cUN","RUPA","GOVOR","ZVONO","MATICA","SILA","ZASTAVA","KLJU\u010c","AMAZONA","STROJ","PLO\u010cA","VAL","KOLICA","TOK","OBRED","GLAVA","PORCULAN","RED","JAK","CENTAR","KARDINAL","SUDAR","KOV\u010cEG","PASTA","MALJ","CRIJEVO","NABOJ","KOD","LEPTIR","KRUG","PRUGA","VEZA","POJAS","KANAL","KLAVIR","NEW YORK","KOSTUR","AUSTRALIJA","KLUB","BERMUDA","TITRAJ","TOKIO","BAZA","EGIPAT","SASTAV","LONDON","FILM","BUNDEVA","ZALE\u0110E","MOSKVA","NOTA","KANADA","KOMAD","SHAKESPEARE","MLIN","HOLLYWOOD","PORTAL","GR\u010cKA","BUBA","RIM","KORIJEN","HIMALAJA","VRSTA","NIND\u017dA","TU\u010cA","HRVAT","KORA","KIVI","LUKA","NJEMA\u010cKA","\u010cLANAK","DR\u017dAVA","VAKUUM","AMERIKA","LUTKA","ATLANTIDA","MODRA","ENGLESKA","MARKA"]},"fi":{"Codenames":["RULETTI","LOHIK\xc4\xc4RME","SOTA","HUNAJA","POMMI","KASINO","HATTU","SATURNUS","AVARUUSOLIO","PIISKA","ANTARKTIS","LUMIUKKO","KONSERTTI","SUKLAA","SUIHKUKONE","MILJON\xc4\xc4RI","DINOSAURUS","MERIROSVO","METS\xc4STYS","PINGVIINI","H\xc4M\xc4H\xc4KKI","OHJUS","L\xc4HETYST\xd6","PISTOOLI","TAUTI","VAKOOJA","PRINSESSA","NERO","VARAS","OOPPERA","RITARI","STADION","LIMUSIINI","AAVE","PAKETTIAUTO","J\xc4\xc4TEL\xd6","LASER","KUOLEMA","SAIRAALA","AMBULANSSI","MUSTEKALA","HELIKOPTERI","KENGURU","HOROSKOOPPI","KENTAURI","SANKARI","TELESKOOPPI","LASKUVARJO","NOKKAEL\xc4IN","OLYMPOS","SATELLIITTI","ENKELI","ROBOTTI","YKSISARVINEN","NOITA","URAKOITSIJA","SUKELTAJA","MYRKKY","SILTA","TULI","P\xd6YT\xc4","VALAS","KUU","KALA","L\xc4\xc4K\xc4RI","KIRKKO","VY\xd6","HOITAJA","TUULI","LEIJONA","SILM\xc4","ILMA","KANI","PANKKI","NURMI","MEKKO","K\xc4\xc4PI\xd6","METS\xc4","AUTO","HANSIKAS","OMENA","\xd6LJY","KOKKI","KARHU","KISSA","EL\xc4M\xc4","ONNI","J\xc4TTIL\xc4INEN","KASVOT","UIMARANTA","HOTELLI","VESI","PAPERI","MATO","ASIANAJAJA","TIEDEMIES","TANSSI","PORKKANA","KETSUPPI","Y\xd6","PUUVILLA","JALKA","HIIRI","VEITSI","TEATTERI","POLIISI","LAIVA","LENT\xc4J\xc4","PEUKALO","OPETTAJA","PULLO","P\xc4IV\xc4","KUNINGAS","LASI","KUNINGATAR","HAMMAS","KOIRA","HEVONEN","KENK\xc4","TUOLI","KRUUNU","J\xc4\xc4","KULTA","HAARUKKA","AIKA","HUILU","SOIHTU","LUMI","NORSUNLUU","SOTILAS","PYRAMIDI","NARU","T\xc4HTI","RENGAS","TORVI","SYD\xc4N","KAPPALE","PUTKI","NEULA","LINJA","KANSI","LAUTA","TAIVAS","N\xc4YTT\xd6","PELI","PILKKU","NAPPI","SUU","MERKKI","K\xc4SI","PENKKI","MUURI","TORNI","KORTTI","SIDE","RUUTU","RISTI","VERKKO","PAIKKA","PASSI","LEVY","KUOPPA","KELLO","VOIMA","AVAIN","MOOTTORI","AALTO","VANA","P\xc4\xc4","TOLPPA","KESKUSTA","KOLARI","TAHNA","PIIKKI","KOODI","PIIRI","LENKKI","PIIPPU","NEW YORK","AUSTRALIA","BAHAMA","TOKIO","EGYPTI","LONTOO","PITSA","MOSKOVA","KANADA","SHAKESPEARE","HOLLYWOOD","KREIKKA","ROOMA","HIMALAJA","NINJA","T\u0160EKKI","KIIVI","SAKSA","VALTIO","AMERIKKA","ATLANTIS","ENGLANTI","AFRIKKA","VAAHTERA","LOCH NESS","RANSKA","ALPIT","TIIKERI","LUUTTU","MALLI","APILA","PEKING","ROMMI","TUOHI","KOTKA","AARRE","PATONKI","HALLI","MEKSIKO","KUUSI","LIMA","TABLETTI","ASTEEKKI","VUORI","PUKKI","LEHTI","JUURI","INTIA","VIHRE\xc4","AAVIKKO","HARJA","MAALI","KALKKI","KOURA","S\xc4DE","HAKA","KANTA","LIIVI","VIINI","TOLLO","JOUSI","PYK\xc4L\xc4","PATTERI","RANKA","VASARA","LAKKA","TORTILLA","LOUNAS","ARKKI","KIELI","ANSA","ASEMA","HUMALA","JOHTO","J\xc4SEN","KANGAS","KOLLI","LINSSI","PORO","VAUVA","BAARI","LONKERO","KUURO","S\xc4K\xc4","TURKKI","URA","KUULA","VOLTTI","KOPPI","LUODE","PAKKI","NASKALI","KONNA","RIIMU","PARKKI","KURKKU","PATTI","PARVI","PYYKKI","\xc4SS\xc4","SIRKKA","SULKU","VIITTA","TUUMA","SIREENI","KAPSELI","ASTE","KAISTA","SUSHI","KANAVA","VIRVELI","KILTTI","LAUKKA","LUKU","PESIJ\xc4","ANKARA","KUMINA","HUKKA","KOI","LASKU","SIJA","LAKI","LIIKE","LINNA","RAITA","ALUS","NUIJA","IKKUNA","TIKKA","VESA","PANDA","HELMI","EUROOPPA","L\xc4HDE","KAUKALO","SOLU","SIIPI","P\xd6LL\xd6","KATTO","KAKKU","RISKI","VOITTO","NAATTI","KORVA","PAUKKU","VIESTI","VAAKA","TEHO","J\xc4\xc4KIEKKO","VARSI","RAVINTOLA","KUORI","PILLI","HILLO","SANKA","POSTI","ARPA","TAMMI","VAARA","ELO","LAITURI","KURKI","PUOLA","MARS","RAUTA","PALLO","SORSA","VARASTO","FILMI","KENTT\xc4","JAHTI","LIEMI","SALAMA","TAHTI","OHJELMA","NAPA","MATKA","PERHO","KOHTAUS","HENKI","PUHALLIN","KATE","IIRIS","TISKI","SELK\xc4","HAUKKU","MASSA","P\xc4HKIN\xc4","TUOMARI","BERLIINI","KAATO","OLIIVI","SYLI","TARHA","KIERTO","ALA","ELIN","KORI","IGLU","SAPARO","AURA","PUOMI","TUKI","LUOMI","TIKKI","PUIKKO","KUVAAJA","NAULA","VARJO","PALSTA","ER\xc4","SARJA","PAKKA","AITA","VIRTA","VETO","PALO","TALJA","RIMA","LASTA","SY\xd6TT\xd6","\xc4\xc4NI"],"Codenames: Duet":["\xc4MP\xc4RI","VIIVA","MURSU","LIMONADI","LIPPU","LUOLA","MUURAHAINEN","VAMPYYRI","TATUOINTI","MAATILA","S\xc4VEL","KIV\xc4\xc4RI","VIIKINKI","TUISKU","MEIKKI","RUUKKU","MAKU","BLUES","GOLF","M\xc4NTY","PALMU","NUKKE","LUISTIN","K\xc4SITY\xd6","HY\xd6KK\xc4\xc4J\xc4","KYN\xc4","VOI","JUHANNUS","VIRSIKIRJA","K\xc4\xc4R\xd6","TASKU","DRONE","KARNEVAALI","LATTIA","VANKILA","TAUKO","PITSI","TYYNY","NAURU","ASUNTO","K\xc4KI","HIUS","MUTA","KULTASEPP\xc4","HERKULES","LAPA","HYTTYNEN","HERNE","ISLANTI","PAKKANEN","VAUNU","PERUNA","KUVA","PALATSI","RY\xd6ST\xd6","JOULU","KIRSIKKA","MOOSES","JOUKKUE","KEPPI","SIPULI","KEKSI","HUPPU","PIPPURI","KALASTAJA","MYLLY","MARAKASSI","VAAHTO","YELLOWSTONE","J\xc4\xc4KAUSI","MUISTI","VILLAPAITA","KAMPA","SILM\xc4LASIT","KURPITSA","SAIPPUA","BIG BEN","REKI","VIOLETTI","KUPLA","LUSIKKA","KUPU","KUULO","TANKKI","SHERLOCK","LAHTI","KUIVAIN","VELI","SOTKU","TIKAPUUT","LINNUNPEL\xc4TIN","NOTRE DAME","S\xc4KKIPILLI","VAJA","BONSAI","SATUMAA","LINKO","ORAVA","LETKU","MARATON","M\xd6KKI","POPCORN","LUMIKKI","MUNA","BIKINIT","SUUKKO","VIULU","NAHKA","RANTA","ASTRONAUTTI","MUSTA AUKKO","HIEKKA","UNI","STETOSKOOPPI","MAKSA","TELTTA","KILOMETRI","DIESEL","TULIVUORI","NAILON","KITARA","MEHIL\xc4INEN","HAI","SENTTI","SAVU","KYP\xc4R\xc4","KEITTI\xd6","SAHARA","ENN\xc4TYS","NAARMU","AKU ANKKA","KIRVES","SAUNA","P\xc4\xc4KALLO","KYYNEL","KRISTALLI","NELI\xd6","LUKKARI","LAVA","TUHKA","PANTA","TANGO","METSURI","RAKKAUS","KEITTO","MUSTE","SALONKI","JOKI","SFINKSI","SHERWOOD","MYRSKY","VUOHI","KYLPY","KLEOPATRA","SALAATTI","PRONSSI","RAMPPI","RATSUPOLIISI","SISAR","JOHTAJA","KIRJAIN","KAPTEENI","KAMERA","RAPU","TIILI","EINSTEIN","HYMNI","IROKEESI","LEIRI","YLIOPISTO","JOKERI","LEHM\xc4","AMMUNTA","DOLLARI","MINUUTTI","RIISI","ARMEIJA","KOLMIO","ALKUR\xc4J\xc4HDYS","KOLUMBUS","SEIN\xc4KELLO","SEPP\xc4","JEANNE D\'ARC","ZOMBI","VITAMIINI","PERHONEN","HAMMASL\xc4\xc4K\xc4RI","JUUSTO","MAAPALLO","NAPOLEON","TEKSAS","KATU","KUUME","SUMU","PARTAKONE","KAAPELI","KUVERN\xd6\xd6RI","COWBOY","RISTIRETKI","MORSIAN","CAESAR","KASVIHUONE","P\xd6LY","TOSSU","PEIKKO","KAAKATUS","\xc4\xc4NENVOIMAKKUUS","SUKSI","VEN\xc4J\xc4","MAUSTE","LEOPARDI","TYYNIMERI","P\xc4\xc4SI\xc4INEN","VARTTI","MIKROAALTOUUNI","SUIHKU","POLTTOAINE","MAANJ\xc4RISTYS","VARIS","TAIKURI","HERMO","UKKONEN","MUSKETTISOTURI","J\xc4\xc4TIKK\xd6","PUUTERI","KELA","IHMISSUSI","KETJU","SEKUNTI","PUNKKA","PARTA","H\xd6YRY","PILVI","YST\xc4V\xc4","TARRA","K\xc4\xc4RME","TAISTELUALUS","TAISTELU","KARTTA","VIRUS","TORNADO","POLKUPY\xd6R\xc4","PAPUKAIJA","HAMPURILAINEN","JUNA","NOOA","VELHO","KULKUE","ESILIINA","KARRI","VALO","TY\xd6P\xd6YT\xc4","SATULA","ROTTA","PEKONI","KUMI","POTILAS","SAHA","KEIDAS","VENUS","PRESIDENTTI","SADEPILVI","MUSTIKKA","TIE","LIITU","VOIMISTELIJA","METRI","RODEO","SILKKI","KAHVI","KANNU","SMOOTHIE","SALSA","PURJE","VILLA","TUNNELI","PUUTARHA","HAJU","OVI","PUU","MAA","NORSU","KAKTUS","VERHO","SQUASH","\xc4ITI","PIIRUSTUS","RAIDE","OHILAUKAUS","KUKKARO","T\xd6LKKI","HUULI","APINA","KEILA","HIKI","KULJETTAJA","J\xc4RVI","SUOLA","LAISKIAINEN","VINTTI","HUIPPU","SORTSIT","PELTO","PY\xd6R\xc4TUOLI","TALLI","VAIHDE","ILMAPALLO","GRILLI","TYLLI","BASSO","HAVAIJI","SINAPPI","KOIVU","MEDUUSA","ALASKA","OLUT","MONA LISA","MAATALO","NUMERO","TEMPPU","MALJA","LANTTU","POOLO","KETTU","PANSSARI","TEE","SUMO","PAAHTOLEIP\xc4","LAATTA","LEIP\xc4","RUOSTE","TOIVE","SOLMU","T\xd6TTER\xd6","BRASILIA","PIILO","HALLOWEEN","MEHU","AIVOT","LY\xd6NTI","TALO","TUKKI","KES\xc4","K\xc4RKI","MIEKKA","PEILI","MAILA","SULHANEN","SIVU","MARKIISI","PAPU","RANSKALAINEN","HAUKKA","SIKA","TARINA","Y\xd6VIERAS","SATEENKAARI","SAALIS","P\xc4SSI","SOKERI","AURINKO","BANAANI","KYNTTIL\xc4","RADIO","KASTIKE","SUO","MANIKYYRI","TULVA","LEIMA","RATTAAT","HISSI","TIETOKONE","TARJOILIJA","PERSIKKA","HOMEROS","NOUTAJA","PARATIISI","HAAVE","HOVI","H\xc4\xc4T","KUNG-FU","MUUMIO","ASKEL","JALKAPALLO","GANGSTERI","MAITO","SAMMAKKO","SHAMPOO","FRAKKI","VEHN\xc4","LUMIVY\xd6RY","K\xd6YSI","PAMPPU","POTKU","KIRJA","\xc4LY","OLKAP\xc4\xc4","ANKKURI","NEN\xc4","RUMPU"]},"gr":{"Codenames: \u039a\u03c9\u03b4\u03b9\u03ba\u03b7 \u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03b9\u03b1":["\u03a1\u039f\u03a5\u039b\u0395\u03a4\u0391","\u0392\u0395\u039b\u039f\u039d\u0391","\u03a7\u039f\u039b\u03a5\u0393\u039f\u03a5\u039d\u03a4","\u03a1\u0395\u03a5\u039c\u0391","\u03a0\u03a1\u039f\u03a3\u03a9\u03a0\u039f","\u039a\u0395\u039d\u03a4\u0391\u03a5\u03a1\u039f\u03a3","\u03a4\u03a5\u03a0\u039f\u03a3","\u03a0\u0399\u03a4\u0391","\u03a7\u039f\u03a1\u039f\u03a3","\u039c\u039f\u039d\u039f\u039a\u0395\u03a1\u03a9\u03a3","\u039a\u0391\u03a4\u0391\u03a1\u03a1\u0391\u039a\u03a4\u0397\u03a3","\u03a3\u039a\u03a5\u039b\u039f\u03a3","\u03a4\u039f\u039d\u039f\u03a3","\u03a0\u039b\u039f\u0399\u039f","\u03a3\u0397\u039c\u0395\u0399\u039f","\u03a3\u0395\u0399\u03a3\u039c\u039f\u03a3","\u039a\u039b\u0395\u03a6\u03a4\u0397\u03a3","\u03a3\u039a\u039d\u0399\u03a0\u0391","\u0398\u0391\u039d\u0391\u03a4\u039f\u03a3","\u039a\u0391\u03a4\u0397\u0393\u039f\u03a1\u0399\u0391","\u039a\u0391\u0396\u0399\u039d\u039f","\u03a8\u0391\u03a1\u0399","\u03a3\u03a9\u039b\u0397\u039d\u0391\u03a1\u0399\u039f","\u039b\u039f\u039d\u0394\u0399\u039d\u039f","\u0392\u0391\u0398\u039c\u039f\u03a3","\u03a3\u03a0\u039f\u039d\u03a4\u0391","\u03a6\u039b\u039f\u0393\u0395\u03a1\u0391","\u0391\u0393\u03a9\u0393\u039f\u03a3","\u039b\u0391\u0398\u03a1\u0395\u039c\u03a0\u039f\u03a1\u039f\u03a3","\u03a4\u03a1\u0391\u03a0\u0395\u0396\u0399\u03a4\u0397\u03a3","\u03a0\u0391\u0393\u039f\u03a3","\u0391\u03a4\u039f\u039c\u039f","\u0392\u0391\u03a3\u0399\u039b\u0399\u0391\u03a3","\u03a4\u0395\u039b\u039f\u03a3","\u0392\u0391\u039c\u0392\u0391\u039a\u0399","\u03a4\u0396\u0399\u039d","\u03a3\u03a0\u0395\u0399\u03a1\u0391","\u0391\u039a\u03a1\u03a9\u03a4\u0397\u03a1\u0399\u039f","\u0391\u03a3\u03a4\u0395\u03a1\u0399","\u0391\u039d\u03a4\u0399\u03a3\u03a4\u0391\u03a3\u0397","\u03a6\u03a9\u03a4\u0399\u0391","\u0394\u03a1\u0391\u039a\u039f\u03a3","\u039d\u0395\u0391 \u03a5\u039f\u03a1\u039a\u0397","\u039c\u03a5\u03a4\u0397","\u03a4\u03a1\u0391\u03a0\u0395\u0396\u0399","\u03a7\u0391\u03a1\u0397","\u03a6\u0391\u039b\u0391\u0399\u039d\u0391","\u0391\u03a1\u03a7\u0397","\u03a6\u0395\u0393\u0393\u0391\u03a1\u0399","\u03a4\u03a1\u039f\u0399\u0391","\u0393\u0399\u0391\u03a4\u03a1\u039f\u03a3","\u0394\u0391\u03a7\u03a4\u03a5\u039b\u0399\u0394\u0399","\u0391\u03a5\u03a3\u03a4\u03a1\u0391\u039b\u0399\u0391","\u0393\u039b\u03a9\u03a3\u03a3\u0391","\u03a3\u039a\u039f\u03a5\u039b\u0397\u039a\u0399","\u0395\u039a\u039a\u039b\u0397\u03a3\u0399\u0391","\u03a4\u03a3\u0399\u03a7\u039b\u0391","\u03a3\u03a5\u039b\u039b\u0397\u03a8\u0397","\u03a4\u03a5\u03a7\u0397","\u03a0\u0399\u0391\u03a4\u039f","\u03a0\u0391\u0393\u039f\u0392\u039f\u03a5\u039d\u039f","\u03a0\u0391\u03a1\u0391\u039c\u0391\u039d\u0391","\u03a0\u039b\u0391\u039a\u0391","\u039a\u0391\u03a1\u039f\u03a4\u039f","\u03a0\u039f\u039b\u039f\u03a3","\u03a3\u03a5\u039d\u03a4\u0391\u039e\u0397","\u03a5\u03a0\u0397\u03a1\u0395\u03a3\u0399\u0391","\u0391\u03a3\u03a4\u03a5\u039d\u039f\u039c\u0399\u0391","\u0395\u03a4\u0391\u0399\u03a1\u0395\u0399\u0391","\u0391\u0394\u0395\u0399\u0391","\u039a\u03a1\u0397\u03a4\u0397","\u03a0\u0391\u03a1\u0391\u03a3\u03a4\u0391\u03a3\u0397","\u0391\u039b\u039f\u0393\u039f","\u03a0\u0395\u03a1\u0399\u0398\u03a9\u03a1\u0399\u039f","\u039b\u039f\u0393\u039f\u03a3","\u03a0\u039f\u039b\u0395\u039c\u039f\u03a3","\u03a0\u03a1\u0391\u03a3\u0399\u039d\u039f","\u0392\u03a1\u0391\u03a7\u0399\u039f\u039b\u0399","\u03a0\u039b\u0391\u03a3\u039c\u0391","\u039a\u0395\u03a1\u0391\u03a4\u039f","\u03a6\u0395\u03a4\u0391","\u03a4\u039f\u039a\u03a5\u039f","\u0392\u039f\u03a5\u039b\u0391","\u03a3\u03a6\u0397\u039a\u0391","\u0393\u0395\u03a6\u03a5\u03a1\u0391","\u039d\u039f\u03a3\u039f\u039a\u039f\u039c\u0391","\u0391\u039d\u0395\u039a\u0394\u039f\u03a4\u039f","\u039a\u0391\u03a1\u0394\u0399\u0391","\u039c\u039f\u039b\u03a5\u0392\u0399","\u0391\u0399\u0393\u03a5\u03a0\u03a4\u039f\u03a3","\u0393\u03a1\u0391\u039c\u039c\u0391","\u0391\u039d\u0395\u039c\u039f\u03a3","\u03a1\u039f\u0394\u0391","\u039b\u0399\u039f\u039d\u03a4\u0391\u03a1\u0399","\u0392\u039f\u039c\u0392\u0391","\u03a0\u0391\u03a0\u0399\u0391","\u03a6\u03a1\u03a5\u0394\u0399","\u039b\u0391\u03a3\u03a4\u0399\u03a7\u039f","\u0391\u0395\u03a1\u0391\u03a3","\u0391\u039b\u0395\u03a0\u039f\u03a5","\u0393\u03a1\u0391\u039c\u039c\u0397","\u039a\u03a5\u0392\u039f\u03a3","\u03a3\u03a5\u039d\u03a4\u0391\u0393\u039c\u0391","\u03a0\u0391\u03a1\u0399\u03a3\u0399","\u039e\u03a5\u039b\u039f","\u039f\u03a5\u03a1\u0391\u039d\u039f\u039e\u03a5\u03a3\u03a4\u0397\u03a3","\u039c\u0395\u03a4\u0391\u03a6\u039f\u03a1\u0391","\u039a\u0391\u03a0\u0395\u039b\u039f","\u0394\u0399\u0391\u0392\u0391\u03a4\u0397\u03a1\u0399\u039f","\u0391\u039a\u03a4\u0399\u039d\u0391","\u039a\u03a1\u039f\u039d\u039f\u03a3","\u0395\u039b\u0399\u0391","\u0395\u03a5\u0398\u0395\u0399\u0391","\u039c\u039f\u03a3\u03a7\u0391","\u03a3\u03a5\u039d\u0394\u0395\u03a3\u039c\u039f\u03a3","\u03a4\u03a1\u0391\u03a0\u0395\u0396\u0391","\u03a3\u03a0\u0399\u03a1\u03a4\u039f","\u0395\u039e\u03a9\u0393\u0397\u0399\u039d\u039f\u03a3","\u03a4\u039f\u039e\u039f","\u0393\u03a1\u0391\u03a3\u0399\u0394\u0399","\u0395\u0399\u039a\u039f\u039d\u0391","\u03a3\u039a\u0395\u03a0\u0391\u03a3\u039c\u0391","\u039a\u0391\u0392\u039f\u03a5\u03a1\u0391\u03a3","\u0392\u03a1\u0391\u0396\u0399\u039b\u0399\u0391","\u039a\u0391\u039c\u03a0\u0391\u039d\u0391","\u039c\u0391\u03a3\u03a4\u0399\u0393\u0399\u039f","\u039a\u039f\u03a5\u039a\u039b\u0391","\u0391\u039d\u03a4\u0391\u03a1\u039a\u03a4\u0399\u039a\u0397","\u03a3\u03a4\u0395\u039a\u0391","\u03a6\u039f\u03a1\u0395\u039c\u0391","\u039a\u0391\u039b\u0391\u0398\u0399","\u03a4\u0391\u039c\u03a0\u039b\u039f","\u03a3\u0391\u0399\u039e\u03a0\u0397\u03a1","\u039c\u03a0\u0391\u039d\u0399\u039f","\u039d\u0391\u039d\u039f\u03a3","\u0394\u0399\u0391\u039a\u039f\u03a0\u03a4\u0397\u03a3","\u039f\u03a1\u0393\u0391\u039d\u039f","\u039a\u03a5\u03a0\u03a1\u039f\u03a3","\u0393\u03a5\u03a1\u039f\u03a3","\u03a7\u0399\u039f\u039d\u0391\u039d\u0398\u03a1\u03a9\u03a0\u039f\u03a3","\u039a\u039f\u039b\u039b\u0391","\u03a0\u0391\u039e\u0399\u039c\u0391\u0394\u0399","\u0394\u0391\u03a3\u039f\u03a3","\u039f\u03a5\u03a1\u0391\u039d\u039f\u03a3","\u039f\u0398\u039f\u039d\u0397","\u03a0\u039f\u0394\u0399","\u03a1\u03a9\u039c\u0397","\u039a\u039f\u039c\u039c\u0391","\u03a3\u03a5\u039d\u0391\u03a5\u039b\u0399\u0391","\u0391\u03a5\u03a4\u039f\u039a\u0399\u039d\u0397\u03a4\u039f","\u03a0\u039d\u0395\u03a5\u039c\u0391","\u0395\u03a1\u0393\u039f","\u03a3\u03a4\u039f\u0399\u03a7\u0395\u0399\u039f","\u0399\u039c\u0391\u039b\u0391\u03aa\u0391","\u03a4\u0399\u03a4\u039b\u039f\u03a3","\u03a3\u039f\u039a\u039f\u039b\u0391\u03a4\u0391","\u0394\u0395\u0399\u039a\u03a4\u0397\u03a3","\u0393\u0391\u039d\u03a4\u0399","\u039c\u039f\u039d\u03a4\u0395\u039b\u039f","\u039a\u0391\u03a1\u03a6\u0399\u03a4\u03a3\u0391","\u039b\u0395\u03a0\u03a4\u039f","\u039d\u0399\u039d\u03a4\u0396\u0391","\u039a\u039f\u03a1\u0391\u039a\u0399","\u039a\u0395\u03a1\u0392\u0395\u03a1\u039f\u03a3","\u03a0\u03a1\u0391\u039a\u03a4\u039f\u03a1\u0391\u03a3","\u039c\u0397\u039b\u039f","\u039a\u039f\u039a\u039f\u03a1\u0391\u03a3","\u03a1\u039f\u039c\u03a0\u0391","\u0392\u0397\u039c\u0391","\u039c\u0395\u03a3\u039f\u0393\u0395\u0399\u039f\u03a3","\u03a0\u0395\u03a4\u03a1\u0391","\u0395\u039a\u0391\u03a4\u039f\u039c\u039c\u03a5\u03a1\u0399\u039f\u03a5\u03a7\u039f\u03a3","\u0393\u03a1\u0391\u03a6\u0395\u0399\u039f","\u03a0\u0395\u03a4\u03a1\u0395\u039b\u0391\u0399\u039f","\u0396\u03a5\u0393\u039f\u03a3","\u03a3\u03a4\u039f\u039c\u0391","\u03a7\u0395\u0399\u039b\u039f\u03a3","\u039a\u0391\u03a4\u03a3\u0399\u039a\u0391","\u039c\u039f\u03a1\u0399\u039f","\u0394\u0395\u0399\u039d\u039f\u03a3\u0391\u03a5\u03a1\u039f\u03a3","\u03a4\u039f\u03a5\u0391\u039b\u0395\u03a4\u0391","\u039c\u0391\u0393\u0395\u0399\u03a1\u0391\u03a3","\u039a\u0391\u039b\u0391\u039c\u0399","\u03a4\u0391\u039c\u03a0\u0395\u039b\u0391","\u039a\u039f\u03a5\u0396\u0399\u039d\u0391","\u0393\u0395\u03a1\u039c\u0391\u039d\u0399\u0391","\u039a\u0391\u03a1\u03a7\u0391\u03a1\u0399\u0391\u03a3","\u03a0\u0395\u0399\u03a1\u0391\u03a4\u0397\u03a3","\u03a6\u03a4\u0395\u03a1\u039f","\u0393\u039f\u03a5\u039d\u0391","\u03a3\u03a7\u0395\u0394\u0399\u039f","\u03a4\u03a1\u039f\u039c\u03a0\u0395\u03a4\u0391","\u039a\u0395\u03a6\u0391\u039b\u0391\u0399\u039f","\u0393\u0391\u03a4\u0391","\u03a3\u039a\u0395\u039b\u0395\u03a4\u039f\u03a3","\u03a0\u0399\u0393\u039a\u039f\u03a5\u0399\u039d\u039f\u03a3","\u03a4\u0391\u039e\u0397","\u0396\u03a9\u0397","\u0394\u039f\u039d\u03a4\u0399","\u0391\u03a1\u0391\u03a7\u039d\u0397","\u039a\u039b\u03a9\u03a3\u03a4\u0397","\u039c\u0391\u03a4\u0399","\u0394\u0397\u039b\u0397\u03a4\u0397\u03a1\u0399\u039f","\u0392\u0391\u03a3\u0397","\u03a0\u03a5\u03a1\u0391\u039c\u0399\u0394\u0391","\u0396\u03a9\u039d\u0397","\u0394\u03a5\u03a4\u0397\u03a3","\u039a\u039f\u03a1\u0397","\u03a3\u03a4\u03a1\u0391\u03a4\u0399\u03a9\u03a4\u0397\u03a3","\u0393\u03a1\u03a5\u039b\u039f\u03a3","\u0394\u0391\u039a\u03a1\u03a5","\u0391\u03a3\u03a6\u0391\u039b\u0395\u0399\u0391","\u0399\u0391\u03a0\u03a9\u039d\u0399\u0391","\u0391\u0393\u039a\u03a5\u03a1\u0391","\u039d\u0395\u039a\u03a1\u039f\u0398\u0391\u03a6\u03a4\u0397\u03a3","\u039a\u0395\u03a1\u0399","\u0395\u0392\u0395\u039d\u039f\u03a3","\u039a\u039f\u03a5\u039c\u03a0\u0399","\u039c\u0391\u0393\u0399\u03a3\u03a3\u0391","\u03a0\u039b\u0391\u039d\u0397","\u03a7\u0399\u039f\u039d\u0399","\u0399\u03a3\u03a4\u039f\u03a1\u0399\u0391","\u03a0\u03a5\u03a1\u0391\u03a5\u039b\u039f\u03a3","\u039a\u039b\u0399\u039c\u0391","\u0393\u0399\u0393\u0391\u039d\u03a4\u0391\u03a3","\u03a3\u03a4\u0391\u0394\u0399\u039f","\u03a0\u03a1\u0395\u03a3\u0392\u0395\u0399\u0391","\u0393\u039f\u03a0\u0391","\u03a0\u0391\u03a1\u0391\u039b\u0399\u0391","\u03a6\u039f\u0399\u039d\u0399\u039a\u0391\u03a3","\u03a7\u0395\u03a1\u0399","\u0394\u0399\u03a3\u039a\u039f\u03a3","\u0391\u039c\u0395\u03a1\u0399\u039a\u0397","\u03a6\u0391\u0399\u039d\u039f\u039c\u0395\u039d\u039f","\u03a4\u039f\u03a5\u03a6\u0395\u039a\u0399","\u03a4\u0391\u0399\u039d\u0399\u0391","\u039e\u0395\u039d\u039f\u0394\u039f\u03a7\u0395\u0399\u039f","\u03a3\u03a6\u0391\u0399\u03a1\u0391","\u0391\u03a3\u0398\u0395\u039d\u0395\u0399\u0391","\u039c\u0395\u03a4\u03a9\u03a0\u039f","\u039d\u0395\u03a1\u039f","\u03a4\u0399\u039c\u0397","\u039a\u03a1\u0395\u0392\u0391\u03a4\u0399","\u03a7\u03a1\u03a5\u03a3\u039f","\u0391\u03a4\u039b\u0391\u039d\u03a4\u0399\u0394\u0391","\u039b\u0391\u0393\u039f\u03a3","\u039a\u0391\u03a4\u0391\u03a3\u039a\u039f\u03a0\u039f\u03a3","\u03a0\u03a1\u039f\u03a3\u0392\u039f\u039b\u0397","\u03a7\u0391\u03a1\u03a4\u0399","\u0391\u039b\u03a5\u03a3\u0399\u0394\u0391","\u03a0\u03a1\u0399\u0393\u039a\u0399\u03a0\u0399\u03a3\u03a3\u0391","\u03a0\u039f\u039d\u03a4\u0399\u039a\u0399","\u0395\u0394\u0391\u03a6\u039f\u03a3","\u039c\u0391\u03a1\u03a4\u03a5\u03a1\u0391\u03a3","\u03a4\u039f\u0399\u03a7\u039f\u03a3","\u03a0\u0391\u039b\u0391\u039c\u0397","\u0391\u0393\u0393\u039b\u0399\u0391","\u03a3\u039a\u039f\u03a0\u039f\u03a3","\u0399\u0394\u0399\u039f\u03a6\u03a5\u0399\u0391","\u03a0\u0395\u0396\u039f\u03a3","\u0394\u0399\u039a\u0397\u0393\u039f\u03a1\u039f\u03a3","\u0393\u0395\u03a1\u0391\u039d\u039f\u03a3","\u039f\u03a0\u0395\u03a1\u0391","\u03a0\u03a1\u03a9\u0399\u039d\u039f","\u0395\u03a0\u0399\u03a3\u03a4\u0397\u039c\u039f\u039d\u0391\u03a3","\u03a6\u03a1\u0391\u0393\u039c\u0391","\u0399\u03a0\u03a0\u039f\u03a4\u0397\u03a3","\u0394\u0399\u0391\u0392\u0397\u03a4\u0397\u03a3","\u039a\u0395\u03a4\u03a3\u0391\u03a0","\u03a0\u0391\u03a0\u0391\u0393\u0391\u039b\u039f\u03a3","\u0393\u0397\u03a0\u0395\u0394\u039f","\u039a\u0391\u03a1\u03a0\u039f\u03a3","\u039d\u03a5\u03a7\u03a4\u0391","\u039a\u0395\u039d\u03a4\u03a1\u039f","\u039b\u0399\u039c\u039f\u03a5\u0396\u0399\u039d\u0391","\u039c\u039f\u0399\u03a1\u0391","\u03a0\u0391\u03a4\u039f\u03a5\u03a3\u0391","\u039f\u03a5\u03a3\u0399\u0391","\u03a0\u03a5\u03a1\u0393\u039f\u03a3","\u039d\u03a4\u0391\u039c\u0391","\u039c\u0395\u039b\u0399","\u0392\u039f\u0394\u0399","\u03a6\u0391\u039d\u03a4\u0391\u03a3\u039c\u0391","\u039c\u0399\u0396\u0391","\u039a\u0391\u039b\u03a9\u0394\u0399\u039f","\u03a0\u0395\u039d\u0391","\u03a4\u0391\u03a5\u03a4\u039f\u03a4\u0397\u03a4\u0391","\u0393\u039b\u039f\u039c\u03a0\u039f\u03a3","\u03a6\u039f\u03a1\u03a4\u0397\u0393\u039f","\u0394\u0399\u0395\u03a5\u0398\u03a5\u039d\u03a3\u0397","\u039c\u0391\u03a7\u0391\u0399\u03a1\u0399","\u03a3\u039a\u0397\u039d\u0397","\u0393\u03a1\u0391\u0392\u0391\u03a4\u0391","\u03a4\u0396\u0391\u039a\u0399","\u0391\u03a6\u03a1\u0399\u039a\u0397","\u039a\u039b\u0395\u0399\u0394\u0399","\u03a0\u0391\u0393\u03a9\u03a4\u039f","\u03a0\u0395\u03a1\u0399\u0392\u0391\u039b\u039b\u039f\u039d","\u0398\u0395\u0391\u03a4\u03a1\u039f","\u03a3\u0397\u039c\u0391\u0394\u0399","\u039a\u03a9\u0394\u0399\u039a\u039f\u03a3","\u0399\u039f\u03a3","\u039b\u0395\u03aa\u0396\u0395\u03a1","\u03a6\u039f\u03a5\u03a1\u039d\u039f\u03a3","\u03a0\u0399\u039b\u039f\u03a4\u039f\u03a3","\u03a0\u0391\u03a3\u03a4\u0391","\u0394\u0399\u0391\u039c\u0391\u039d\u03a4\u0399","\u03a6\u03a9\u039a\u0399\u0391","\u03a0\u0395\u039a\u0399\u039d\u039f","\u039f\u03a5\u03a1\u0391","\u039d\u039f\u03a3\u039f\u039a\u039f\u039c\u0395\u0399\u039f","\u03a3\u0395\u0399\u03a1\u0397\u039d\u0391","\u0391\u039d\u03a4\u0399\u03a7\u0395\u0399\u03a1\u0391\u03a3","\u03a3\u03a5\u039c\u03a6\u03a9\u039d\u0399\u0391","\u0394\u0399\u0391\u03a3\u03a4\u0391\u03a5\u03a1\u03a9\u03a3\u0397","\u039a\u039f\u03a4\u0391","\u0399\u039d\u0394\u0399\u0391","\u039b\u0395\u0399\u03a4\u039f\u03a5\u03a1\u0393\u0399\u0391","\u0391\u03a3\u0398\u0395\u039d\u039f\u03a6\u039f\u03a1\u039f","\u03a6\u03a5\u039b\u039b\u039f","\u0394\u0399\u03a7\u03a4\u03a5","\u0393\u03a5\u0391\u039b\u0399","\u0394\u0391\u03a3\u039a\u0391\u039b\u039f\u03a3","\u03a1\u0391\u0394\u0399\u039f","\u03a7\u03a4\u0391\u03a0\u039f\u0394\u0399","\u0395\u039a\u0398\u0395\u03a3\u0397","\u039c\u03a0\u039f\u03a5\u039a\u0391\u039b\u0399","\u03a6\u039f\u03a1\u039c\u0391","\u03a4\u03a1\u03a5\u03a0\u0391","\u039a\u0391\u039b\u039f\u0393\u0395\u03a1\u039f\u03a3","\u039a\u039f\u03a5\u0394\u039f\u03a5\u039d\u0399","\u039f\u03a1\u039f\u03a3","\u0397\u039c\u0395\u03a1\u0391","\u039b\u039f\u0393\u0391\u03a1\u0399\u0391\u03a3\u039c\u039f\u03a3","\u0395\u039b\u0399\u039a\u039f\u03a0\u03a4\u0395\u03a1\u039f","\u039a\u03a5\u039a\u039b\u039f\u03a3","\u03a3\u03a0\u039f\u03a5\u03a1\u0393\u0399\u03a4\u0399","\u03a6\u0391\u03a3\u0397","\u039a\u0391\u0393\u039a\u039f\u03a5\u03a1\u03a9","\u03a6\u0391\u039a\u0395\u039b\u039f\u03a3","\u03a0\u039f\u03a4\u0397\u03a1\u0399","\u03a0\u039b\u03a5\u039d\u03a4\u0397\u03a1\u0399\u039f","\u0394\u03a5\u039d\u0391\u039c\u0397","\u0394\u0399\u0391\u03a3\u03a4\u0397\u039c\u0391","\u039c\u0399\u039a\u03a1\u039f\u03a3\u039a\u039f\u03a0\u0399\u039f","\u039a\u0391\u03a1\u03a4\u0391","\u0392\u0391\u03a3\u0399\u039b\u0399\u03a3\u03a3\u0391","\u03a6\u0399\u0393\u039f\u03a5\u03a1\u0391","\u039b\u039f\u03a5\u039a\u0395\u03a4\u039f","\u03a4\u03a1\u039f\u03a7\u039f\u03a3","\u03a5\u03a0\u0395\u03a1\u0397\u03a1\u03a9\u0391\u03a3","\u039c\u0391\u0396\u0391","\u03a3\u0391\u0393\u039f\u039d\u0399","\u03a0\u0395\u03a4\u0391\u039b\u039f\u03a5\u0394\u0391","\u039c\u0397\u03a7\u0391\u039d\u0397","\u03a6\u0395\u03a3\u0399","\u0393\u0391\u039b\u039b\u0399\u0391","\u039c\u039f\u039d\u0391\u0394\u0391","\u03a0\u0391\u03a0\u039f\u03a5\u03a4\u03a3\u0399","\u03a4\u0395\u03a4\u03a1\u0391\u0393\u03a9\u039d\u039f","\u03a0\u0395\u03a4\u0391\u039b\u039f","\u03a6\u0399\u039b\u039c","\u03a4\u0397\u039b\u0395\u03a3\u039a\u039f\u03a0\u0399\u039f","\u03a5\u03a0\u039f\u0398\u0395\u03a3\u0397","\u03a0\u0391\u039b\u0399\u03a1\u03a1\u039f\u0399\u0391","\u03a1\u0399\u0396\u0391","\u039e\u03a9\u03a4\u0399\u039a\u039f","\u039a\u03a5\u039c\u0391","\u039a\u0391\u03a1\u0395\u039a\u039b\u0391","\u03a0\u0399\u039d\u0391\u039a\u0391\u03a3","\u039a\u0391\u03a3\u03a4\u03a1\u039f","\u0391\u0395\u03a4\u039f\u03a3","\u0391\u039b\u0395\u039e\u0399\u03a0\u03a4\u03a9\u03a4\u039f","\u039d\u039f\u03a4\u0391","\u03a0\u039b\u0391\u03a4\u03a5\u03a0\u039f\u0394\u0391\u03a3","\u039a\u03a5\u03a8\u0395\u039b\u0397","\u03a3\u03a4\u0395\u039c\u039c\u0391","\u039b\u039f\u03a7 \u039d\u0395\u03a3","\u039c\u039f\u03a5\u03a4\u03a1\u039f","\u03a0\u0391\u03a3\u0391\u039b\u039f\u03a3","\u0395\u03a5\u03a1\u03a9\u03a0\u0397","\u03a0\u03a5\u03a1\u03a3\u039f\u03a3","\u03a0\u03a1\u039f\u039b\u0397\u03a8\u0397","\u03a1\u039f\u039c\u03a0\u039f\u03a4","\u039a\u0395\u03a6\u0391\u039b\u0399","\u039f\u039b\u03a5\u039c\u03a0\u039f\u03a3","\u039a\u03a1\u0395\u039c\u0391","\u03a3\u039a\u039f\u03a1\u03a0\u0399\u039f\u03a3","\u03a7\u03a1\u039f\u039d\u039f\u03a3","\u03a4\u0391\u03a0\u0391","\u0391\u0393\u0393\u0395\u039b\u039f\u03a3","\u0391\u039b\u03a0\u0395\u0399\u03a3","\u039a\u0391\u039d\u039f\u039d\u0399","\u03a0\u0397\u03a1\u039f\u03a5\u039d\u0399","\u03a0\u039b\u0391\u03a4\u0395\u0399\u0391","\u0394\u039f\u03a1\u03a5\u03a6\u039f\u03a1\u039f\u03a3","\u039a\u0391\u03a1\u03a6\u0399","\u0392\u0395\u03a1\u039f\u039b\u0399\u039d\u039f","\u03a0\u03a1\u039f\u03a3\u039a\u03a1\u039f\u03a5\u03a3\u0397","\u03a7\u03a1\u03a5\u03a3\u0391\u03a6\u0399"],"Codenames: Duet":["\u039a\u039f\u03a5\u0392\u0391\u03a3","\u03a0\u0391\u03a5\u039b\u0391","\u03a0\u039f\u039b\u0395\u039c\u0399\u03a3\u03a4\u0397\u03a3","\u039b\u0395\u039c\u039f\u039d\u0391\u0394\u0391","\u03a3\u0397\u039c\u0391\u0399\u0391","\u03a3\u03a0\u0397\u039b\u0399\u0391","\u039c\u03a5\u03a1\u039c\u0397\u0393\u039a\u0399","\u0392\u0391\u039c\u03a0\u0399\u03a1","\u03a4\u0391\u03a4\u039f\u03a5\u0391\u0396","\u03a1\u0391\u039d\u03a4\u03a3\u039f","\u0391\u039a\u03a1\u0399\u0394\u0391","\u039a\u0391\u03a1\u0391\u039c\u03a0\u0399\u039d\u0391","\u0392\u0399\u039a\u0399\u039d\u0393\u039a","\u0391\u039d\u0395\u039c\u039f\u03a3\u03a4\u03a1\u039f\u0392\u0399\u039b\u039f\u03a3","\u039c\u0391\u039a\u0399\u0393\u0399\u0391\u0396","\u039a\u0391\u039d\u0391\u03a4\u0391","\u0393\u0395\u03a5\u03a3\u0397","\u03a4\u0396\u0391\u0396","\u0393\u039a\u039f\u039b\u03a6","\u039a\u039f\u03a5\u039a\u039f\u03a5\u039d\u0391\u03a1\u0399","\u039c\u0391\u039d\u0395\u039a\u0395\u039d","\u0393\u0395\u03a5\u039c\u0391","\u03a0\u0391\u03a4\u0399\u039d\u0399\u0391","\u039a\u0391\u03a4\u0391\u03a3\u039a\u0395\u03a5\u0397","\u039a\u0391\u0398\u0399\u03a3\u039c\u0391","\u03a3\u03a4\u03a5\u039b\u039f","\u0392\u039f\u03a5\u03a4\u03a5\u03a1\u039f","\u039c\u0391\u039e\u0399\u039b\u0391\u03a1\u0399","\u039f\u0394\u039f\u03a6\u03a1\u0391\u0393\u039c\u0391","\u03a0\u0391\u03a0\u03a5\u03a1\u039f\u03a3","\u039a\u03a5\u039b\u0399\u039d\u0394\u03a1\u039f\u03a3","\u039a\u0397\u03a6\u0397\u039d\u0391\u03a3","\u03a4\u0391\u039d\u0391\u039b\u0399\u0391","\u03a0\u0391\u03a4\u03a9\u039c\u0391","\u03a6\u03a5\u039b\u0391\u039a\u0397","\u03a4\u0395\u039b\u0395\u0399\u0391","\u039a\u039f\u03a1\u0394\u039f\u039d\u0399","\u03a4\u03a3\u0395\u03a0\u0397","\u03a4\u0395\u039d\u0395\u039a\u0395\u03a3","\u0395\u03a0\u0399\u03a0\u0395\u0394\u039f","\u039a\u039f\u03a5\u039a\u039f\u03a3","\u039c\u0391\u039b\u039b\u0399\u0391","\u039b\u0391\u03a3\u03a0\u0397","\u039a\u039f\u03a3\u039c\u0397\u039c\u0391\u03a4\u039f\u03a0\u03a9\u039b\u0397\u03a3","\u0397\u03a1\u0391\u039a\u039b\u0397\u03a3","\u039b\u0395\u03a0\u0399\u0394\u0391","\u039a\u039f\u03a5\u039d\u039f\u03a5\u03a0\u0399","\u0391\u03a1\u0391\u039a\u0391\u03a3","\u0399\u03a3\u039b\u0391\u039d\u0394\u0399\u0391","\u0391\u03a1\u03a7\u039f\u039d\u03a4\u0391\u03a3","\u03a0\u03a1\u039f\u03a0\u039f\u039d\u0397\u03a4\u0397\u03a3","\u03a0\u0391\u03a4\u0391\u03a4\u0391","\u039a\u03a1\u039f\u03a4\u0391\u039b\u0399\u0391\u03a3","\u039a\u0395\u03aa\u039a","\u03a7\u0395\u039b\u03a9\u039d\u0391","\u03a7\u03a1\u0399\u03a3\u03a4\u039f\u03a5\u0393\u0395\u039d\u039d\u0391","\u039a\u0395\u03a1\u0391\u03a3\u0399","\u039c\u03a9\u03a5\u03a3\u0397\u03a3","\u039f\u039c\u0391\u0394\u0391","\u039c\u03a0\u0391\u03a3\u03a4\u039f\u03a5\u039d\u0399","\u0392\u039f\u039b\u0392\u039f\u03a3","\u039c\u03a0\u0399\u03a3\u039a\u039f\u03a4\u039f","\u03a3\u03a0\u03a1\u0395\u03aa","\u03a0\u0399\u03a0\u0395\u03a1\u0399","\u039c\u0391\u03a1\u0399\u039f\u039d\u0395\u03a4\u0391","\u039c\u03a5\u039b\u039f\u03a3","\u0394\u039f\u03a3\u0397","\u0391\u03a6\u03a1\u039f\u03a3","\u039a\u03a5\u039a\u039b\u0391\u0394\u0395\u03a3","\u03a5\u03a6\u0391\u039b\u039f\u03a3","\u039c\u039d\u0397\u039c\u0397","\u0393\u0395\u0399\u03a9\u03a3\u0397","\u03a7\u03a4\u0395\u039d\u0391","\u0393\u03a5\u0391\u039b\u0399\u0391","\u03a0\u0399\u03a4\u03a3\u0391","\u039f\u0394\u03a5\u03a3\u03a3\u0395\u0391\u03a3","\u03a4\u0399\u03a4\u0391\u039d\u0399\u039a\u039f\u03a3","\u0395\u039b\u039a\u0397\u0398\u03a1\u039f","\u0392\u0399\u039f\u039b\u0395\u03a4\u0391","\u03a6\u039f\u03a5\u03a3\u039a\u0391","\u039a\u039f\u03a5\u03a4\u0391\u039b\u0399","\u039a\u03a1\u0395\u039c\u03a5\u0394\u0399","\u03a4\u0396\u0399\u039d\u0399","\u03a4\u0391\u039d\u039a","\u03a3\u0395\u03a1\u039b\u039f\u039a","\u0391\u039a\u03a1\u03a9\u03a4\u0397\u03a1\u0399","\u03a3\u03a4\u0395\u0393\u039d\u03a9\u03a4\u0397\u03a1\u0391\u03a3","\u0393\u0399\u0391\u0393\u0399\u0391","\u039c\u03a0\u0395\u03a1\u0394\u0395\u039c\u0391","\u03a3\u039a\u0391\u039b\u0391","\u03a3\u039a\u0399\u0391\u03a7\u03a4\u03a1\u039f","\u0395\u03a3\u03a4\u0399\u0391","\u039a\u0399\u039b\u03a4","\u039a\u0391\u039b\u03a5\u0392\u0391","\u03a1\u0397\u0393\u0391\u03a3","\u0397\u03a1\u039f\u0394\u039f\u03a4\u039f\u03a3","\u03a3\u03a6\u0395\u039d\u03a4\u039f\u039d\u0391","\u03a3\u039a\u0399\u039f\u03a5\u03a1\u039f\u03a3","\u03a7\u03a9\u039d\u0399","\u039c\u0391\u03a1\u0391\u0398\u03a9\u039d\u0391\u03a3","\u0391\u03a5\u03a4\u0399","\u03a0\u039f\u03a0 \u039a\u039f\u03a1\u039d","\u0391\u03a3\u03a4\u0395\u03a1\u0399\u039e","\u0391\u03a5\u0393\u039f","\u039c\u03a0\u0399\u039a\u0399\u039d\u0399","\u03a6\u0399\u039b\u0399","\u0392\u0399\u039f\u039b\u0399","\u03a5\u03a6\u0391\u03a3\u039c\u0391","\u0391\u039a\u03a4\u0397","\u0391\u03a3\u03a4\u03a1\u039f\u039d\u0391\u03a5\u03a4\u0397\u03a3","\u039c\u0391\u03a5\u03a1\u0397 \u03a4\u03a1\u03a5\u03a0\u0391","\u0391\u039c\u039c\u039f\u03a3","\u039f\u039d\u0395\u0399\u03a1\u039f","\u03a3\u03a4\u0397\u0398\u039f\u03a3\u039a\u039f\u03a0\u0399\u039f","\u039c\u03a9\u03a1\u039f","\u03a4\u0395\u039d\u03a4\u0391","\u039c\u0399\u039b\u0399","\u0394\u0399\u039a\u0391\u03a3\u03a4\u0397\u03a3","\u0397\u03a6\u0391\u0399\u03a3\u03a4\u0395\u0399\u039f","\u039d\u0391\u03aa\u039b\u039f\u039d","\u039a\u0399\u0398\u0391\u03a1\u0391","\u039c\u0395\u039b\u0399\u03a3\u03a3\u0391","\u0393\u039f\u039c\u0391","\u0394\u0395\u039a\u0391\u03a1\u0391","\u039a\u0391\u03a0\u039d\u039f\u03a3","\u03a0\u0395\u03a1\u0399\u039a\u0395\u03a6\u0391\u039b\u0391\u0399\u0391","\u03a3\u0391\u039b\u039f\u039d\u0399","\u03a3\u0391\u03a7\u0391\u03a1\u0391","\u039a\u0391\u03a3\u0395\u03a4\u0391","\u0393\u03a1\u0391\u03a4\u0396\u039f\u03a5\u039d\u0399\u0391","\u03a0\u03a4\u0395\u03a1\u03a5\u0393\u0391","\u03a4\u03a3\u0395\u039a\u039f\u03a5\u03a1\u0399","\u039c\u03a0\u039f\u0393\u0399\u0391","\u039a\u03a1\u0391\u039d\u0399\u039f","\u039a\u039b\u0391\u039c\u0391","\u039a\u03a1\u03a5\u03a3\u03a4\u0391\u039b\u039b\u039f\u03a3","\u039d\u0395\u03a5\u03a4\u03a9\u039d\u0391\u03a3","\u039a\u0391\u03a1\u0391\u03a6\u0391","\u039a\u039b\u0391\u0394\u0399","\u03a3\u03a4\u0391\u03a7\u03a4\u0397","\u039a\u039f\u039b\u0391\u03a1\u039f","\u03a0\u0391\u03a1\u0391\u0398\u03a5\u03a1\u039f","\u039e\u03a5\u039b\u039f\u039a\u039f\u03a0\u039f\u03a3","\u0391\u0393\u0391\u03a0\u0397","\u03a3\u0391\u03a0\u039f\u03a5\u039d\u0399","\u039c\u0395\u039b\u0391\u039d\u0399","\u039c\u03a0\u0391\u03a1","\u03a0\u039f\u03a4\u0391\u039c\u0399","\u03a3\u03a6\u0399\u0393\u0393\u0391","\u03a1\u039f\u039c\u03a0\u0395\u039d","\u0391\u03a3\u03a4\u03a1\u0391\u03a0\u0397","\u0391\u03a1\u039d\u0399","\u039c\u03a0\u0391\u039d\u0399\u0395\u03a1\u0391","\u039a\u039b\u0395\u039f\u03a0\u0391\u03a4\u03a1\u0391","\u03a3\u0391\u039b\u0391\u03a4\u0391","\u039c\u03a0\u03a1\u039f\u03a5\u03a4\u0396\u039f\u03a3","\u03a3\u03a6\u03a5\u03a1\u0399\u03a7\u03a4\u03a1\u0391","\u0395\u03a6\u0399\u03a0\u03a0\u039f\u03a3","\u0391\u0394\u0395\u039b\u03a6\u0397","\u0394\u0399\u0395\u03a5\u0398\u03a5\u039d\u03a4\u0397\u03a3","\u0395\u03a0\u0399\u03a3\u03a4\u039f\u039b\u0397","\u039a\u0391\u03a0\u0395\u03a4\u0391\u039d\u0399\u039f\u03a3","\u0392\u0395\u03a1\u039d\u0399\u039a\u0399","\u039a\u0391\u0392\u039f\u03a5\u03a1\u0399","\u03a4\u039f\u03a5\u0392\u039b\u039f","\u0391\u03aa\u039d\u03a3\u03a4\u0391\u03aa\u039d","\u03a5\u039c\u039d\u039f\u03a3","\u03a7\u03a9\u03a1\u0399\u03a3\u03a4\u03a1\u0391","\u039a\u0391\u03a4\u0391\u03a3\u039a\u0397\u039d\u03a9\u03a3\u0397","\u03a0\u0391\u039d\u0395\u03a0\u0399\u03a3\u03a4\u0397\u039c\u0399\u039f","\u03a0\u0391\u039b\u0399\u0391\u03a4\u03a3\u039f\u03a3","\u0391\u0393\u0395\u039b\u0391\u0394\u0391","\u0392\u039f\u03a5\u039b\u0397","\u0394\u039f\u039b\u039b\u0391\u03a1\u0399\u039f","\u03a7\u03a1\u039f\u039d\u039f\u039c\u0395\u03a4\u03a1\u039f","\u03a1\u03a5\u0396\u0399","\u03a3\u03a4\u03a1\u0391\u03a4\u039f\u03a3","\u03a0\u0395\u039d\u03a4\u0391\u0393\u03a9\u039d\u039f","\u0395\u039a\u03a1\u0397\u039e\u0397","\u039a\u039f\u039b\u039f\u039c\u0392\u039f\u03a3","\u03a1\u039f\u039b\u039f\u03aa","\u03a3\u0399\u0394\u0397\u03a1\u039f\u03a5\u03a1\u0393\u039f\u03a3","\u03a0\u0395\u03a1\u0399\u039a\u039f\u039a\u039b\u0391\u0394\u0391","\u0396\u039f\u039c\u03a0\u0399","\u03a3\u039a\u0391\u0398\u0391\u03a1\u0399","\u039a\u03a9\u039c\u0391","\u039f\u0394\u039f\u039d\u03a4\u0399\u0391\u03a4\u03a1\u039f\u03a3","\u03a4\u03a5\u03a1\u0399","\u03a7\u03a9\u039c\u0391","\u039d\u0391\u03a0\u039f\u039b\u0395\u03a9\u039d","\u03a4\u0395\u039e\u0391\u03a3","\u039b\u0395\u03a9\u03a6\u039f\u03a1\u039f\u03a3","\u03a0\u03a5\u03a1\u0395\u03a4\u039f\u03a3","\u039f\u039c\u0399\u03a7\u039b\u0397","\u039e\u03a5\u03a1\u0391\u03a6\u0399","\u03a3\u03a5\u039d\u0395\u03a0\u0395\u0399\u0391","\u039a\u03a5\u0392\u0395\u03a1\u039d\u0397\u03a4\u0397\u03a3","\u039a\u0391\u039f\u03a5\u039c\u03a0\u039f\u03ab","\u0393\u0399\u0391\u03a4\u0391\u0393\u0391\u039d\u0399","\u039d\u03a5\u03a6\u0397","\u039a\u0391\u0399\u03a3\u0391\u03a1\u0391\u03a3","\u0398\u0395\u03a1\u039c\u039f\u039a\u0397\u03a0\u0399\u039f","\u03a3\u039a\u039f\u039d\u0397","\u03a0\u0391\u039d\u03a4\u039f\u03a6\u039b\u0391","\u03a4\u03a1\u039f\u039b","\u0391\u03a0\u0391\u03a4\u0395\u03a9\u039d\u0391\u03a3","\u03a4\u039f\u039c\u039f\u03a3","\u03a3\u039a\u0399","\u03a1\u03a9\u03a3\u0399\u0391","\u039c\u0391\u03a1\u0393\u0391\u03a1\u0399\u03a4\u0391\u03a1\u0399","\u0395\u0399\u03a1\u0397\u039d\u0399\u039a\u039f\u03a3","\u0392\u03a1\u0391\u03a3\u039c\u039f\u03a3","\u03a0\u0391\u03a3\u03a7\u0391","\u03a3\u03a5\u039d\u039f\u0399\u039a\u0399\u0391","\u039c\u0399\u039a\u03a1\u039f\u039a\u03a5\u039c\u0391\u03a4\u0391","\u039d\u03a4\u039f\u03a5\u03a3","\u039a\u0391\u03a5\u03a3\u0399\u039c\u039f","\u039c\u03a5\u0398\u039f\u03a3","\u03a1\u03a5\u0398\u039c\u039f\u03a3","\u03a4\u0391\u03a7\u03a5\u0394\u0391\u039a\u03a4\u03a5\u039b\u039f\u03a5\u03a1\u0393\u039f\u03a3","\u039d\u0395\u03a5\u03a1\u039f","\u039a\u0395\u03a1\u0391\u03a5\u039d\u039f\u03a3","\u03a3\u03a9\u039c\u0391\u03a4\u039f\u03a6\u03a5\u039b\u0391\u039a\u0391\u03a3","\u03a0\u0391\u0393\u0395\u03a4\u03a9\u039d\u0391\u03a3","\u03a0\u039f\u03a5\u0394\u03a1\u0391","\u0393\u039b\u03a5\u039a\u0399\u03a3\u039c\u0391","\u039b\u03a5\u039a\u0391\u039d\u0398\u03a1\u03a9\u03a0\u039f\u03a3","\u0391\u03a1\u039c\u039f\u039d\u0399\u0391","\u0394\u0395\u03a5\u03a4\u0395\u03a1\u039f\u039b\u0395\u03a0\u03a4\u039f","\u039a\u039f\u03a5\u039a\u0395\u03a4\u0391","\u0393\u0395\u039d\u0395\u0399\u0391\u0394\u0391","\u0391\u03a4\u039c\u039f\u03a3","\u03a3\u03a5\u039d\u039d\u0395\u03a6\u039f","\u0391\u0393\u0399\u039f\u03a3 \u0392\u0391\u039b\u0395\u039d\u03a4\u0399\u039d\u039f\u03a3","\u0391\u03a5\u03a4\u039f\u039a\u039f\u039b\u039b\u0397\u03a4\u039f","\u03a6\u0399\u0394\u0399","\u039a\u0391\u039d\u039f\u039d\u0399\u039f\u03a6\u039f\u03a1\u039f\u03a3","\u039c\u0391\u03a7\u0397","\u03a0\u0395\u03a1\u0399\u03a3\u03a5\u039b\u039b\u039f\u0393\u0397","\u0395\u03a5\u0393\u0395\u039d\u0397\u03a3","\u03a4\u03a5\u03a6\u03a9\u039d\u0391\u03a3","\u03a0\u039f\u0394\u0397\u039b\u0391\u03a4\u039f","\u039f\u0399\u039a\u039f\u039d\u039f\u039c\u0399\u0391","\u03a7\u0391\u039c\u03a0\u039f\u03a5\u03a1\u0393\u039a\u0395\u03a1","\u03a0\u0399\u039d\u0391\u039a\u0399\u0394\u0391","\u039d\u03a9\u0395","\u039c\u0391\u0393\u039f\u03a3","\u03a0\u0391\u03a1\u0395\u039b\u0391\u03a3\u0397","\u03a0\u039f\u0394\u0399\u0391","\u039a\u0391\u03a1\u03a5","\u0391\u039a\u03a1\u0399\u0392\u0395\u0399\u0391","\u0394\u0399\u0391\u0399\u03a1\u0395\u03a3\u0397","\u03a3\u0395\u039b\u0391","\u0391\u03a1\u039f\u03a5\u03a1\u0391\u0399\u039f\u03a3","\u039c\u03a0\u0395\u03aa\u039a\u039f\u039d","\u03a0\u03a1\u039f\u03a4\u0391\u03a3\u0397","\u0391\u03a3\u0398\u0395\u039d\u0397\u03a3","\u03a0\u03a1\u0399\u039f\u039d\u0399","\u039f\u0391\u03a3\u0397","\u0391\u03a6\u03a1\u039f\u0394\u0399\u03a4\u0397","\u03a0\u0391\u0393\u039a\u0391\u039a\u0399","\u0399\u039f\u03a5\u0394\u0391\u03a3","\u0391\u0393\u0399\u039f\u03a3 \u0392\u0391\u03a3\u0399\u039b\u0397\u03a3","\u0394\u03a1\u039f\u039c\u039f\u03a3","\u039a\u0399\u039c\u03a9\u039b\u0399\u0391","\u0393\u03a5\u039c\u039d\u0391\u03a3\u03a4\u0397\u03a3","\u039c\u0395\u03a4\u03a1\u039f","\u03a1\u039f\u039d\u03a4\u0395\u039f","\u039c\u0395\u03a4\u0391\u039e\u0399","\u039a\u0391\u03a6\u0395\u03a3","\u0399\u03a0\u03a0\u0395\u0391\u03a3","\u03a0\u03a1\u039f\u03a3\u03a4\u0391\u03a4\u0397\u03a3","\u03a4\u0391\u0393\u039a\u039f","\u0399\u03a3\u03a4\u0399\u039f\u03a6\u039f\u03a1\u039f","\u03a4\u03a1\u0399\u03a7\u0395\u03a3","\u03a4\u039f\u03a5\u039d\u0395\u039b","\u039a\u0397\u03a0\u039f\u03a3","\u039c\u03a5\u03a1\u03a9\u0394\u0399\u0391","\u03a0\u039f\u03a1\u03a4\u0391","\u03a3\u03a5\u039b\u039b\u039f\u0393\u0397","\u03a7\u03a9\u03a1\u0391","\u0395\u039b\u0395\u03a6\u0391\u039d\u03a4\u0391\u03a3","O\u0394\u0397\u0393\u039f\u03a3","\u03a4\u03a5\u03a6\u039b\u039f\u03a3","\u0393\u039b\u03a5\u039a\u039f\u03a0\u0391\u03a4\u0391\u03a4\u0391","\u039c\u0397\u03a4\u0395\u03a1\u0391","\u0396\u03a9\u0393\u03a1\u0391\u03a6\u0399\u0391","\u03a1\u0391\u0393\u0395\u03a3","\u0394\u0395\u03a3\u03a0\u039f\u0399\u039d\u0399\u03a3","\u03a0\u039f\u03a1\u03a4\u039f\u03a6\u039f\u039b\u0399","\u0391\u039d\u03a4\u0391\u039b\u039b\u0391\u0393\u039c\u0391","\u039f\u03a1\u0393\u0391\u039d\u0399\u03a3\u039c\u039f\u03a3","\u03a0\u0399\u0398\u0397\u039a\u039f\u03a3","\u03a0\u0391\u0399\u039a\u03a4\u0397\u03a3","\u0399\u0394\u03a1\u03a9\u03a4\u0391\u03a3","\u039f\u0394\u0397\u0393\u039f\u03a3","\u0394\u0395\u039b\u03a4\u0391","\u0391\u039b\u0391\u03a4\u0399","\u03a0\u0391\u0393\u0391\u039a\u0399\u0391","\u03a0\u0391\u03a4\u0391\u03a1\u0399","\u0391\u03a4\u03a3\u0391\u039b\u0399","\u03a3\u03a9\u039a\u03a1\u0391\u03a4\u0397\u03a3","\u039a\u0391\u03a4\u0391\u0399\u0393\u0399\u0394\u0391","\u03a0\u039f\u039b\u03a5\u0398\u03a1\u039f\u039d\u0391","\u03a3\u03a4\u0391\u0392\u039b\u039f\u03a3","\u0393\u03a1\u0391\u039d\u0391\u0396\u0399","\u039c\u03a0\u0391\u039b\u039f\u039d\u0399","\u039c\u03a0\u0391\u03a1\u039c\u03a0\u0395\u039a\u0399\u039f\u03a5","\u03a6\u039f\u03a5\u03a3\u03a4\u0391","\u039c\u039f\u03a5\u03a1\u039c\u039f\u03a5\u03a1\u0391","\u03a7\u0391\u0392\u0391\u0397","\u039c\u039f\u03a5\u03a3\u03a4\u0391\u03a1\u0394\u0391","\u039d\u039f\u03a3\u039f\u039a\u039f\u039c\u039f\u03a3","\u039c\u0395\u0394\u039f\u03a5\u03a3\u0391","\u0391\u039b\u0391\u03a3\u039a\u0391","\u039c\u03a0\u03a5\u03a1\u0391","\u039c\u039f\u039d\u0391 \u039b\u0399\u0396\u0391","\u03a6\u0391\u03a1\u039c\u0391","\u03a3\u03a4\u0391\u03a5\u03a1\u039f\u03a6\u039f\u03a1\u039f\u03a3","\u039a\u039f\u039b\u03a0\u039f","\u039c\u03a0\u03a9\u039b","\u039c\u0395\u039b\u039f\u03a3","\u03a0\u039f\u039b\u039f","\u03a4\u039f\u03a3\u03a4","\u03a3\u03a4\u0391\u0398\u039c\u039f\u03a3","\u03a4\u03a3\u0391\u03aa","\u03a4\u0391\u03a1\u0391\u039d\u0394\u039f\u03a3","\u03a3\u039f\u03a5\u039c\u039f","\u03a8\u03a9\u039c\u0399","\u0391\u03a3\u03a3\u039f\u03a3","\u03a3\u039a\u039f\u03a5\u03a1\u0399\u0391","\u0395\u03a5\u03a7\u0397","\u039a\u039f\u039c\u03a0\u039f\u03a3","\u039a\u03a9\u039d\u039f\u03a3","\u0394\u039f\u03a3\u039f\u039b\u0397\u03a8\u0399\u0391","\u03a4\u039f\u039c\u0391\u03a1\u0399","\u0391\u03a0\u039f\u039a\u03a1\u0399\u0395\u03a3","\u0391\u0393\u0399\u039f\u03a3","\u0395\u0393\u039a\u0395\u03a6\u0391\u039b\u039f\u03a3","\u03a7\u03a4\u03a5\u03a0\u0397\u039c\u0391","\u03a0\u03a1\u039f\u039c\u0397\u0398\u0395\u0399\u0391","\u03a3\u03a4\u03a1\u0391\u0393\u0391\u039b\u0399","\u039a\u039f\u03a7\u03a5\u039b\u0399","\u03a6\u0399\u039b\u039f\u0394\u03a9\u03a1\u0397\u039c\u0391","\u03a0\u03a1\u03a9\u03a4\u039f\u03a3","\u039a\u0391\u0398\u03a1\u0395\u03a0\u03a4\u0397\u03a3","\u039a\u039f\u03a5\u03a0\u0399","\u0393\u0391\u039c\u03a0\u03a1\u039f\u03a3","\u03a3\u0395\u039b\u0399\u0394\u0391","\u039a\u0391\u03a4\u0391\u0398\u0395\u03a3\u0397","\u03a6\u0391\u03a3\u039f\u039b\u0399","\u03a1\u0395\u03a5\u03a3\u03a4\u039f","\u039a\u039f\u039c\u0397\u03a4\u0397\u03a3","\u0393\u039f\u03a5\u03a1\u039f\u03a5\u039d\u0399","\u0391\u0393\u039f\u03a1\u0391","\u03a0\u0395\u03a1\u0399\u039f\u0394\u0399\u039a\u039f","\u0395\u039a\u03a4\u039f\u03a1\u0391\u03a3","\u03a0\u0395\u03a1\u0399\u03a6\u0395\u03a1\u0395\u0399\u0391","\u03a4\u03a1\u0391\u0393\u039f\u03a3","\u0396\u0391\u03a7\u0391\u03a1\u0397","\u0397\u039b\u0399\u039f\u03a3","\u03a4\u0391\u039c\u03a0\u039b\u0395\u03a4\u0391","\u039c\u03a0\u0391\u039d\u0391\u039d\u0391","\u03a1\u0391\u0394\u0399\u039f\u03a6\u03a9\u039d\u039f","\u03a3\u0391\u039b\u03a4\u03a3\u0391","\u0392\u0391\u039b\u03a4\u039f\u03a3","\u039c\u0391\u039d\u0399\u039a\u0399\u039f\u03a5\u03a1","\u03a0\u039b\u0397\u039c\u039c\u03a5\u03a1\u0391","\u0393\u03a1\u0391\u039c\u039c\u0391\u03a4\u039f\u03a3\u0397\u039c\u039f","\u0392\u0391\u0393\u039f\u039d\u0399","\u03a4\u0399\u0393\u03a1\u0397","\u03a5\u03a0\u039f\u039b\u039f\u0393\u0399\u03a3\u03a4\u0397\u03a3","\u03a3\u0395\u03a1\u0392\u0399\u03a4\u039f\u03a1\u0391","\u03a1\u039f\u0394\u0391\u039a\u0399\u039d\u039f","\u039f\u039c\u0397\u03a1\u039f\u03a3","\u03a0\u03a5\u0393\u039c\u0391\u03a7\u039f\u03a3","\u0395\u0394\u0395\u039c","\u03a5\u03a0\u039d\u039f\u03a3","\u039c\u0399\u039d\u03a9\u03a4\u0391\u03a5\u03a1\u039f\u03a3","\u0393\u0391\u039c\u039f\u03a3","\u0394\u0399\u0391\u0393\u039d\u03a9\u03a3\u0397","\u039c\u039f\u03a5\u039c\u0399\u0391","\u03a3\u039a\u0391\u039b\u039f\u03a0\u0391\u03a4\u0399","\u03a3\u03a0\u0399\u03a1\u039f\u03a5\u039d\u0399\u0391","\u039a\u0391\u039a\u039f\u03a0\u039f\u0399\u039f\u03a3","\u0393\u0391\u039b\u0391","\u0392\u0391\u03a4\u03a1\u0391\u03a7\u039f\u03a3","\u03a3\u0391\u039c\u03a0\u039f\u03a5\u0391\u039d","\u039a\u039f\u03a3\u03a4\u039f\u03a5\u039c\u0399","\u0399\u0394\u0399\u0391\u0399\u03a4\u0395\u03a1\u039f\u03a3","\u03a7\u0399\u039f\u039d\u039f\u03a3\u03a4\u0399\u0392\u0391\u0394\u0391","\u03a3\u03a7\u039f\u0399\u039d\u0399","\u0391\u03a6\u0395\u039d\u03a4\u0399\u039a\u039f","\u039a\u039b\u03a9\u03a4\u03a3\u0399\u0391","\u0392\u0399\u0392\u039b\u0399\u039f","\u0391\u0393\u03a9\u039d\u0391\u03a3","\u03a9\u039c\u039f\u03a3","\u03a3\u03a5\u039d\u03a4\u039f\u039d\u0399\u03a3\u039c\u039f\u03a3","\u0391\u039d\u03a4\u0399\u0394\u03a1\u0391\u03a3\u0397","\u03a4\u03a5\u039c\u03a0\u0391\u039d\u039f"]},"hu":{"Fed\u0151nevek":["BETEGS\xc9G","RUHA","SZARV","L\xc9LEK","AUT\xd3","T-REX","SZ\xcdV","PIL\xd3TA","\xd6L","VIL\xc1GOS","BOLT","TOJ\xc1S","KERESZT","K\xd3RH\xc1Z","PALACK","SKORPI\xd3","ALMA","RAD\xcdR","V\xcdZ","HAT\xc1R","NY\xdaL","AD\xd3","LABDA","J\xc9G","L\u0150","SZUPERH\u0150S","MEXIK\xd3","T\xc1NC","TORONY","ANYA","CIP\u0150","PAMUT","P\xc9NZ","\xc1G","AMERIKA","T\xc9GLA","B\u0150R","INDI\xc1N","LONDON","MILLIOMOS","PONT","ER\u0150","KENTAUR","BEETHOVEN","VAD","CS\u0150","KR\xc9TA","BABA","FOK","J\xc9ZUS","MAR","KOR","K\xc9PERNY\u0150","GOMB","K\xc9S","NYIT","KEM\xc9NY","KAL\xd3Z","FURULYA","HOLD","BIRKA","CSOKOL\xc1D\xc9","J\xc1R","M\u0170","DENEV\xc9R","MAMUT","K\xd6R","T\xdcSKE","OSZLOP","LEVEG\u0150","STADION","TERM\xc9SZET","FORMA","B\xc1B","GUMI","CAESAR","GY\u0170R\u0170","\xc9LET","VAS","\u0170R","DOB","\xc9DES","FIGURA","N\u0150","RAK\xc9TA","F\xc1KLYA","HIDEG","H\xc9T","T\xc9V\xc9","T\xc9R","HAL\xc1L","UDVAR","HAJT","PATK\xd3","FED\xc9L","ZEBRA","BOSZORK\xc1NY","Z\xd6LD","TOLL","SAJT","DARU","L\xc1MPA","ID\u0150","KIR\xc1LY","ALAK","EINSTEIN","\xdcGYN\xd6K","EGYENES","FA","M\xc1TY\xc1S","T\u0170","SZAK\xc1CS","ASZTAL","GERINC","S\xc1RK\xc1NY","KONCERT","NAP\xd3LEON","VONAL","JETI","MACSKA","T\xd6K","NEW YORK","SZEM\xc9T","EJT\u0150ERNY\u0150","MELEG","HARANG","MAJOM","ANGLIA","ATOM","KORONA","KULCS","SZAK\xcdT","HELIKOPTER","SZ\xcdN","RIG\xd3","B\xc1LNA","\xd3RA","OROSZL\xc1N","K\xd6T","TELESZK\xd3P","PARK","LAP","CSAP","KOCKA","BANDA","KAR","HAJ","\xc1GY","TEJ","L\xd3","KACSACS\u0150R\u0170","F\xd6LD","PITE","H\xdaR","S\xcdN","MEZ\u0150","R\xd3MA","KEL","B\xc1NYA","\xdaR","SZERENCSE","VIR\xc1G","HOTEL","SIVATAG","TAVASZ","M\u0170HOLD","F\xdcL","VITAMIN","FEKETE","H\xd3","OL\xdcMPOSZ","CSAVAR","M\xc9REG","MOTOR","SOR","F\u0170","KIR\xc1LYN\u0150","AMAZON","CSIRKE","R\xc9PA","C\xc9RNA","SZELLEM","K\xc1RP\xc1TOK","G\xc1Z","T\xc1BLA","MER","K\xd6LY\xd6K","ANGYAL","KASZIN\xd3","K\xd6VET","LEVES","PIRAMIS","KETCHUP","EG\xc9R","N\xc9GYZET","P\xd3K","GY\xd6K\xc9R","ALPOK","CSIGA","SZ\xc9K","K\xd6NNY\u0170","T\u0170Z","PART","SHAKESPEARE","\xd6V","\xdcVEG","PUSKA","RULETT","SZAKASZ","\xdcGYV\xc9D","KAKTUSZ","FAGYLALT","M\xc9Z","ISKOLA","NYOM","\xc1LOM","ARANY","ANYAG","MOSZKVA","CSOM\xd3","SZ\xc9L","HOMOK","ZSENI","SONKA","SZ\xcdNH\xc1Z","L\xc9ZER","\xc9G","KENGURU","C\xc1PA","L\xc9P","B\xcdR\xd3","F\xc9REG","M\u0170ANYAG","HAZA","BERLIN","FEJ","HAL","CSILLAG","F\xdaJ","TOKI\xd3","MOZI","V\xc1R","IDEGEN","REP\xdcL","POH\xc1R","FORR\xc1S","GY\xd6NGY","PISZTOLY","VILLA","MALAC","VOLT","FUT","K\xdaT","B\xdaV\xc1R","TET\u0150","GY\xc9M\xc1NT","EG\xc9SZS\xc9G","REND\u0150R","K\xd3D","OPERA","BAR\xc1T","MAN\xd3","FAL","AGY","L\xc1Z","P\xc1LYA","NEH\xc9Z","T\xc9RK\xc9P","FOG","TELEFON","CHAPLIN","ORVOS","HERCEGN\u0150","ROBOT","M\xc1SOL","AUSZTR\xc1LIA","SZ\xdcRKE","FELH\u0150","TAN\xc1R","EUR\xd3PA","K\u0150","\xc9JSZAKA","JEGY","AZT\xc9K","MENT\u0150K","KATONA","GAZDA","NARANCS","R\xd3ZSA","AFRIKA","TEMPLOM","S\xd6T\xc9T","TISZTA","R\xc1K","B\xc9KA","SZIKRA","TEHERAUT\xd3","Z\xc1R","LOCH NESS","L\xc1NG","DI\xd3","KUTYA","KRITIKUS","ALF\xd6LD","ELEM","HAJ\xd3","TUD\xd3S","NINDZSA","\xc1R","CIRKUSZ","ARC","T\xc1NY\xc9R","F\xdcGG","KOPORS\xd3","ZEUSZ","KERET","VEZET","T\xdcD\u0150","N\u0150V\xc9R","D\xc9L","ORD\xcdT","OSZT","\xdaT","SZ\xc1J","BOT","H\xcdD","L\xc1DA","TORTA","F\u0170SZER","BOMBA","NADR\xc1G","\xc1RNY\xc9K","OLAJ","CSEMP\xc9SZ","BIKA","SZEM","AJT\xd3","S\xcdR","MAGYAR","INDIA","CS\xd6PP","L\xc1B","T\xd6RPE","SZATURNUSZ","KENY\xc9R","BANK","CSIZMA","TAXI","NAP","JOG\xc1SZ","MEDVE","HATALOM","BAN\xc1N","H\xc1L\xd3","DUNA","M\xc9R","VITORLA","TOLVAJ","H\xc1BOR\xda","KESZTY\u0170","ERD\u0150","LEV\xc9L","\xc1RU","BENZIN","GIT\xc1R","K\xd6ZPONT","K\xc9M","K\xd6RTE","LOVAG","KORB\xc1CS","K\xc1RTYA","HOLLYWOOD","PINGVIN","KARD","H\xd3EMBER","PEKING","J\xc1T\xc9K","HULL\xc1M","APR\xd3","T\xc1VOLS\xc1G","EGYSZARV\xda","SZ\xc1M","G\xd6R\xd6G","PAP\xcdR","CSATORNA","KEREK","UJJ","SZOKNYA","SAS","MIKROSZK\xd3P","SZ\xc9N","KORM\xc1NY","MESE","HIMAL\xc1JA","POLIP","\xd3RI\xc1S","K\xc9Z","PET\u0150FI","LYUK","ATLANTISZ"],"Fed\u0151nevek: N\xe9gyszemk\xf6zt":["IRODA","AKNA","\xc1LL","\xc1LLAT","PROGRAM","BAK","CS\xc9SZEALJ","CS\xdaCS","DARAB","IGAZGAT\xd3","EZRED","\xc9R","F\xc9NY","FOGAD\xd3","FOGAS","FOGOLY","FOLY\xd3","G\xc1T","GYERTYA","HAJT\xc1S","IDEG","\xcdR","KER\xdcLET","KOS\xc1R","LES","LEMEZ","LIBA","M\xc9H","NEGYED","NYELV","OLDAL","ORGONA","PECS\xc9T","PIPA","POLOSKA","RAVASZ","RENGETEG","SZ\xc1RNY","SZ\xc1ZAD","\xc9SZAK","TIZED","TORNA","T\xd6MEG","\xdcZLET","V\xc1LT\xd3","KECSKE","GOMBA","PUSK\xc1S","OLT\xc1R","BUDAPEST","VATIK\xc1N","TISZA","K\xd6Z\xd6SS\xc9G","SEB\xc9SZET","SZELL\u0150","TIGRIS","T\xdcND\xc9R","JEGYZET","K\xc9MIA","MUSICAL","PAPUCS","CUKOR","MARS","\u0150SEMBER","KAMION","AM\u0150BA","SP\xc1RTA","JOG","TAP\xcdR","SZABADS\xc1G","SZERELEM","BUDDHA","PL\xdaT\xd3","KAPU","SZ\u0150L\u0150","WASHINGTON","TEA","MAMA","PORSZEM","ELAD\xd3","T\xc9SZTA","R\xc9SZECSKE","KONTINENS","SZEK\xc9R","BUSZ","FELN\u0150TT","GYEREK","CSUKA","ZEN\xc9SZ","T\xc1RS","MOZART","SZ\xdaNYOG","ESSEN","FERT\u0150Z\xc9S","KAN","B\xc1R\xc1NY","DINAMIT","ASSZONY","R\xdaD","AC\xc9L","F\xc9RFI","BORJ\xda","BAKANCS","NYUGAT","V\xc1M","V\xc1MP\xcdR","G\xd6RBE","NEWTON","\xc9JF\xc9L","H\u0150L\xc9GBALLON","TISZT\xc1S","IZOM","BOKOR","GOMB\xd3C","GYUFA","\u0150RS\xc9G","FEH\xc9R","PATAK","MENNY","MAG","FUVOLA","L\xd3G","S\xd3","DR\xc1GAK\u0150","T\xd6RZS","\xc9KSZER","CSAT","B\xc1RKA","VERSENY","V\xc9G","MODERN","OTTHON","REP\xdcL\u0150","FORR\xd3","TAN\xda","FAGY","OSCAR","SZ\xc1LLODA","SZ\xd6RF","VONAT","K\xcdNA","BARLANG","EGYETEM","M\xd3ZES","SZAB\xc1LY","ZSETON","KAPIT\xc1NY","SELL\u0150","B\xdaZA","TABLET","PENGE","MUST\xc1R","TENY\xc9R","JELSZ\xd3","MAJ\xc1LIS","FESZTIV\xc1L","Z\xc1SZL\xd3","RENDEL\u0150","SZIKLA","H\xc1ROMSZ\xd6G","POST\xc1S","BAROM","BOR","FOLYIK","H\xd3D\xcdT","S\xdaLYOS","L\xc9","PARIPA","HIBA","ANGOL","DISZN\xd3","ELEF\xc1NT","KOBOLD","CS\xcdP","SIK\xcdT","TESTV\xc9R","KEN","PR\xd3BA","F\xdcRD\u0150","RAMSZESZ","GAZDAG","TITANIC","CITROM","SZAMUR\xc1J","\xd6REG","BUNDA","GYEPL\u0150","FORINT","LOGIKA","R\xc9S","NY\xcdL\xc1S","ZONGORA","BRONZ","CSODA","VEZET\xc9K","KUKA","LASSZ\xd3","NYAKKEND\u0150","P\xc1CIENS","VUK","EGER","TY\xdaK","\xcdJ\xc1SZ","TETT","NY\xcdR","PADL\xd3","H\u0150M\xc9R\u0150","ERD\xc9SZ","DER\xc9K","V\xc1SZON","LAP\xc1T","ZOKNI","SZ\xd6RNY","STRAND","SUTTOG","ATL\xc9TA","LAPOS","NAGY\xcdT\xd3","K\xd6T\xc9L","F\xc9L","\xc9RME","TALP","APA","SZIR\xc9NA","KRUMPLI","GALAMB","G\xc9P","P\xd3KER","KOLIBRI","MICIMACK\xd3","F\xdcST","O\xc1ZIS","OLIMPIA","MESTER","LIMON\xc1D\xc9","F\xd6LDRAJZ","\xdcZENET","DZSUNGEL","CSER\xc9P","CSIBE","P\xc1RIZS","KUTAT\xd3","PARADICSOM","SZ\xdaR","KERT","VEZ\xc9R","B\xc1STYA","TR\xd3N","FEGYVERZET","\xc1RAM","TARZAN","R\xc1CS","D\xcdJ","GYARMAT","VASAL\xd3","BAKONY","H\xc1Z","T\xd3","SZOBOR","KULACS","P\xc1RBAJ","\xc1ROK","T\xc1BOR","LAKAT","FOLT","KAKUKK","CSAPAT","EPER","PERGAMEN","F\xd3KA","KIR\xc1LYL\xc1NY","LOBOG","SZIGET","HEGY","KR\xc9M","T\xc9L","SZILVESZTER","H\xdaSV\xc9T","P\xc1R","V\xc9GTELEN","HANGOS","ECET","NYEREG","SZ\u0150NYEG","KORONG","\xdcT\u0150","MAJA","K\xd6NYV","GYENGE","SEBES","KER\xc9K","P\xd3L\xd3","PROFIL","TEREM","M\xc1K","ROHAM","KAKAS","T\xc1R","HALLGAT\xd3","LUFI","KOKT\xc9L","PONYVA","TENGER","H\xcdRN\xc9V","OLT\xc1S","N\xcdLUS","VILLAMOS","COWBOY","VEND\xc9G","ESK\xdc","RUG\xd3","R\xc9T","SAROK","KAPCSOLAT","TROMBITA","KOROM","VAD\xc1SZ","B\xc1RSONY","TEKN\u0150S","HENGER","FEST\xc9K","M\u0170SZER","OLL\xd3","V\xc9R","M\xc9LY","VIKING","V\xd6R\xd6S","LABIRINTUS","POSTA","TAN\xcdTV\xc1NY","FED\u0150","CS\xcdP\u0150","FAH\xc9J","ALAG\xdaT","ER\u0150S","SZ\xc9LES","G\xdaLA","RONGY","SUZUKI","KERING\u0150","PARTI","GY\xc1R","BOH\xd3C","SZERV","\xc9RC","LAVINA","BAKT\xc9RIUM","DR\xd3T","SZAM\xc1R","SZALMA","F\u0150N\xd6K","FELES\xc9G","FI\xd3KA","PEREC","\xc1RB\xd3C","OSTOR","PAD","S\xd6R\xc9NY","CSENG\u0150","ZS\xc1K","TANYA","TULIP\xc1N","LATIN","K\xd6LT","H\xc1RFA","EZ\xdcST","CSACSI","P\xd6TTY","G\xd6MB","KAROM","VULK\xc1N","K\xdcRT","SZATYOR","UTCA","G\xc9M","KAGYL\xd3","BILINCS","LIGET","MONITOR","KORL\xc1T","S\xd6V\xc9NY","P\xc1LCA","DOBOZ","BILLENTY\u0170","REPED\xc9S","MAGAS","T\xd6R","PANDA","VER\xc9B","K\xc1V\xc9","T\xc1SKA","PONTY","\xc1LDOZAT","BUNK\xd3","BICIKLI","VID\xc9K","PORCEL\xc1N","T\xdcK\xd6R","EB\xc9D","DINNYE"]},"id":{"Codenames: Edisi Indonesia":["SABUNG","NAGA","PERANG","MADU","BOM","KASINO","MERCUSUAR","SATURNUS","PERANTAU","PECUT","ANTARTIKA","WAYANG","KONSER","COKELAT","WARUNG","MILIARDER","DINOSAURUS","PEROMPAK","TROMPET","PENGUIN","LABA-LABA","RUDAL","KEDUTAAN","SENAPAN","PENYAKIT","PENGINTAI","PUTRI","GENIUS","MALING","SANDIWARA","KESATRIA","STADION","LIMOSIN","HANTU","BECAK","ES KRIM","LASER","KEMATIAN","KLINIK","AMBULANS","GURITA","HELIKOPTER","KANGURU","MIKROSKOP","PEGASUS","SUPERHERO","TELESKOP","PARASUT","MUSANG","KRAKATAU","SATELIT","BIDADARI","ROBOT","KELELAWAR","NENEK SIHIR","SATPAM","PRAMUGARI","RACUN","JEMBATAN","API","MEJA","HIU","PULAU","IKAN","DOKTER","GEREJA","SABUK","SUSTER","MAL","SINGA","PITA","ANGIN","KELINCI","BANK","RUMPUT","GAUN","KURCACI","HUTAN","MOBIL","SARUNG","DURIAN","MINYAK","KOKI","MACAN","KUCING","HIDUP","HOKI","RAKSASA","MUKA","PANTAI","HOTEL","AIR","KERTAS","CACING","PENGACARA","ILMUWAN","TARIAN","WORTEL","SAMBAL","MALAM","KAPAS","KANTONG","TIKUS","PISAU","BIOSKOP","POLISI","PERAHU","NAKHODA","JEMPOL","GURU","BOTOL","HARI","RAJA","KACA","RATU","LIDAH","ANJING","KUDA","SEPATU","KURSI","MAHKOTA","ES","EMAS","GARPU","WAKTU","PELUIT","OBOR","SALJU","MUTIARA","PRAJURIT","PIRAMIDA","TALI","BINTANG","LINGKARAN","SUARA","JANTUNG","BLOK","LORONG","BENANG","GARIS","TUTUP","PAPAN","ASLI","LANTAI","RASA","BAWANG","TOMBOL","MULUT","WADAH","BAHAN","BATANG","TEMBOK","BAK","KARTU","IKAT","BERLIAN","SURAT","JARING","UJUNG","CABANG","PETI","LUBANG","LONCENG","BALAS","BATU","MESIN","OMBAK","GELOMBANG","SARANG","NODA","PUSAT","TABRAKAN","PINTU","DURI","KODE","BUNDARAN","RANTAI","PIPA","NEW YORK","AUSTRALIA","JEPANG","PARIS","MESIR","LONDON","KETUPAT","MOSKOW","SINGAPURA","RADEN SALEH","HOLLYWOOD","SPANYOL","ATHENA","HIMALAYA","SAMURAI","ARAB SAUDI","GADO-GADO","BELANDA","PROVINSI","INDONESIA","ATLANTIS","CINA","PANDAN","AFRIKA","PAWANG HUJAN","KOREA SELATAN","KOMODO","TANA TORAJA","MALAYSIA","EROPA","KECOA","TEXAS","KERIS","ASAM","BUAYA PUTIH","BANGKOK","BADUI","BADAN","INDIA","RENDANG","BUSA","KLISE","AKAR","LIRIK","MAJALAH","PESAWAT","PER","BANDAR","KOMPRES","BULAN","BUNGA","TOL","SIKU","EMAIL","GENTING","HAK","HAWA","PLAFON","KALI","KARANGAN","MAFIA","KOMISI","KOPI","MODEL","BEKAS","PAUS","POIN","PALU","PANGKAT","PARTAI","PASTEL","PEKAN","MANGKOK","PORTAL","POS","PULSA","RAPAT","ROK","PASAL","SALAM","SLANG","SERI","EKOR","RODA","KUNCI","KARAT","ASAL","KAKI","DARA","BACANG","KARAKTER","KAPITAL","SUHU","KANJI","BOBOK","TABLET","KAKAP","KULTUR","KREDIT","KOREK","HATI","KEPALA","KAPSUL","ORGAN","KASA","HALAMAN","ABANG","RAYAP","JANGKA","KALIBER","DERAJAT","GULING","KOTAK","KOMPLEKS","KECAPI","TERMINAL","KELAS","KODOK","BANDING","URUT","DEMONSTRASI","LOBI","AGEN","MARGIN","PANEL","PLESTER","PLASMA","PONI","SOLO","MANDARIN","SOLAR","SENSOR","KAPAL","DODOL","TITIK","LAGU","BOCOR","MONITOR","INDEKS","KABINET","NILAI","AKI","SEL","SET","SUAP","ELANG","VOKAL","GABUS","GIGI","BIJI","KURUNG","KLIK","KLIP","KOLOM","PASTA","SEMPROT","PANAH","MARS","PUSAR","AKSEN","TANGGAL","KOMA","JAGO","SISIR","BUKU","BAN","JARUM","KAWAT","ALAMAT","PAK","KUNINGAN","PACAR","FRAKSI","MANUAL","SILUMAN","MIRING","TANAH","GELAR","KLUB","MOTOR","PELAT","DADU","SULING","RESEP","GOMBAL","POTRET","BUNCIT","DEWASA","BARET","PROFIL","DEMAM","SEGEL","GONG","GONDOK","JABAT","GOL","BABAT","TAHU","JATI","SIKAT","JOROK","JRENG","JAMU","GADING","TOPENG","KOMPAS","MATA","SERAT","KONTER","SUMBU","TUNA","SERVIS","SETEL","SEPUH","GELI","KENARI","LAMBUNG","GAYA","ANTIK","LAYAR","GANJIL","CATUR"]},"is":{"Codenames":["R\xdaLLETTA","DREKI","STR\xcd\xd0","HUNANG","SPRENGJA","SPILAV\xcdTI","SK\xddJAKLJ\xdaFUR","SAT\xdaRNUS","GEIMVERA","SVIPA","SU\xd0URP\xd3LLINN","SNJ\xd3KALL","T\xd3NLEIKAR","S\xdaKKULA\xd0I","\xdeOTA","AU\xd0MA\xd0UR","RISAE\xd0LA","SJ\xd3R\xc6NINGI","R\xdaS\xcdNA","M\xd6RG\xc6S","K\xd6NGUL\xd3","FLUGSKEYTI","SENDIR\xc1\xd0","SKAMMBYSSA","SJ\xdaKD\xd3MUR","NJ\xd3SNARI","PRINSESSA","SNILLINGUR","\xdeJ\xd3FUR","\xd3PERA","RIDDARI","LEIKVANGUR","LIMM\xd3S\xcdNA","DRAUGUR","\xcdS","SENDIB\xcdLL","LEYSIGEISLI","DAU\xd0I","SJ\xdaKRAH\xdaS","SJ\xdaKRAB\xcdLL","KOLKRABBI","\xdeYRLA","KENG\xdaRA","SM\xc1SJ\xc1","TR\xd6LL","OFURHETJA","STJ\xd6RNUK\xcdKIR","FALLHL\xcdF","BREI\xd0NEFUR","\xd3LYMPOS","GERVIHN\xd6TTUR","ENGILL","V\xc9LMENNI","\xc1LFAM\xc6R","NORN","PRESTUR","KAFARI","EITUR","BR\xda","ELDUR","BOR\xd0","HVALUR","BAR","T\xdaR","L\xc6KNIR","KIRKJA","SMEKKUR","SJ\xdaKRALI\xd0I","VINDUR","LJ\xd3N","AUGA","LOFT","KAN\xcdNA","BANKI","GRAS","KJ\xd3LL","DVERGUR","SK\xd3GUR","B\xcdLL","HANSKI","EPLI","OL\xcdA","KOKKUR","BJ\xd6RN","K\xd6TTUR","L\xcdF","HEPPNI","RISI","ANDLIT","STR\xd6ND","H\xd3TEL","VATN","PAPP\xcdR","ORMUR","L\xd6GMA\xd0UR","V\xcdSINDAMA\xd0UR","DANS","GULR\xd3T","T\xd3MATSS\xd3SA","N\xd3TT","B\xd3MULL","F\xd3TUR","M\xdaS","HN\xcdFUR","LEIKH\xdaS","L\xd6GREGLA","SKIP","FLUGMA\xd0UR","\xdeUMALL","KENNARI","FLASKA","DAGUR","K\xd3NGUR","GLER","DROTTNING","T\xd6NN","HUNDUR","HESTUR","SK\xd3R","ST\xd3LL","K\xd3R\xd3NA","KLAKI","GULL","GAFFALL","T\xcdMI","FLAUTA","KYNDILL","SNJ\xd3R","F\xcdLABEIN","HERMA\xd0UR","P\xcdRAM\xcdDI","STRENGUR","STJARNA","PLANKI","HORN","HJARTA","BLOKK","SLANGA","N\xc1L","L\xcdNA","SAGA","M\xc6LA","ROFI","SKJ\xc1R","LEIKUR","BENDILL","HNAPPUR","MUNNUR","MERKI","H\xd6ND","R\xdaM","VEGGUR","KORT","TURN","BINDI","DEMANTUR","KROSS","NET","PUNKTUR","SKAR\xd0","PLATA","HOLA","BJALLA","M\xc1TTUR","LYKILL","V\xc9L","ALDA","KR\xd3NA","H\xd6FU\xd0","ST\xd6NG","MI\xd0JA","HRYNJA","MAUK","GADDUR","K\xd3\xd0I","HRINGUR","HLEKKUR","P\xcdPA","NEW YORK","\xc1STRAL\xcdA","BJ\xd6RGVIN","T\xd3K\xcd\xd3","EGYPTALAND","LONDON","GRASKER","MOSKVA","KANADA","LAXNESS","HOLLYWOOD","GRIKKLAND","R\xd3M","NEPAL","KARATE","\xcdSLAND","K\xcdV\xcd","\xde\xddSKALAND","R\xcdKI","AMER\xcdKA","ATLANTIS","ENGLAND","VER\xd0","SMELLUR","TUSKA","REFUR","KARR\xcd","SJ\xd3MA\xd0UR","FJALL","HNAKKI","HL\xcdFAR","KLIPPING","HLYNUR","AFR\xcdKA","\xdeR\xd6STUR","FRAKKLAND","SKEIFA","B\xda\xc1LFUR","MEX\xcdK\xd3","ALPARNIR","SPOR\xd0DREKI","BERL\xcdN","INDLAND","EVR\xd3PA","PEKING","\xd6RN","GR\xddLA","HVER","FYLGJA","BAKA","SMYGLARI","\xc1","STILLING","M\xc1L","MYLLA","AZTEKAR","M\xd3T","SK\xc6RI","VASI","H\xdaNN","FAX","GALLI","GREI\xd0SLA","F\xc9","SKOT","STYRKUR","H\xc1R","LANGA","BELTI","K\xc1PA","V\xd6R","SKINKA","EGG","\xd6R","TAFLA","BROT","SER\xcdA","STRAUMUR","VERA","TALA","VERJA","D\xdaKKA","MAT","SKER","B\xc6LI","F\xc6RI","HELLA","K\xddLI","RASPUR","V\xcdSA","APA","SKAPA","TUNGL","P\xc6LA","FISKUR","LAUGA","PELI","BLA\xd0RA","BJ\xd3R","MALLI","E\xd0LA","LISTA","S\xdaLA","SYNDA","FLAK","DEKK","GR\xddTA","SPA\xd0I","TJALD","SKARFUR","VOG","DELLA","DR\xcdFA","FALDI","HAGL","GELLA","FLOKKAR","PERA","RASSGAT","SK\xdaR","KL\xc1R","KOLLUR","GR\xc1\xd0A","R\xd3FA","SKEI\xd0","STAFUR","HL\xddRI","BR\xc1","BR\xdaN","AUR","S\xc6RA","LAK","KJ\xd6LUR","\xc6R","R\xcd\xd0A","SUND","\xd6ND","FL\xc9TTA","\xc1ST","HEKLA","MARS","R\xc9TTUR","DEILA","SKALLA","BELGUR","ASNI","VAXA","LEGGJA","SEKKUR","SKORA","SKUTLA","KERTI","SKOTTA","SPOTTA","BOLTA","SKELLA","STR\xc1","HAMAR","GR\xc6\xd0A","HR\xc6\xd0A","SPIL","SK\xddLA","NAGLI","SMOKKUR","BALI","LOKKA","ROKK","SKOKK","PERLA","KVALIR","HR\xcd\xd0","KVER","ERTA","S\xcd\xd0A","LUND","BLIKA","BAKKI","POTTUR","KANNA","FL\xcdS","SN\xda\xd0UR","BJ\xd6RK","RIST","MALA","FJ\xd6\xd0UR","SP\xd3LA","SP\xddTA","BYTTA","NEMI","BRUNA","KV\xcdSL","AUSA","BOLUR","F\xd6T","HR\xcdFA","ST\xcdLL","L\xc6\xd0A","GEIMUR","PILLA","SKART","BR\xda\xd0UR","BORGA","V\xcdN","OFN","L\xda\xd0UR","KRINGLA","FLEYTA","SKEINA","D\xddR","BOX","HARPA","KL\xd3R","LEST","HLJ\xd3\xd0","BAK","FILMA","ARFI","N\xd3TA","KRANI","B\xd3LA","KEILA","RJ\xd3\xd0UR"]},"jp":{"\u30b3\u30fc\u30c9\u30cd\u30fc\u30e0":["\u30b9\u30bf\u30fc","\u6a4b","\u706b","\u30ea\u30f3\u30b0","\u30cf\u30fc\u30c8","\u89d2","\u30b9\u30d7\u30ea\u30f3\u30b0","\u30bf\u30d6\u30ec\u30c3\u30c8","\u30af\u30b8\u30e9","\u30b7\u30fc\u30eb","\u6708","\u30d6\u30ed\u30c3\u30af","\u30c9\u30ea\u30eb","\u9b5a","\u30c1\u30e5\u30fc\u30d6","\u7f8e\u4eba","\u9244","\u533b\u8005","\u30eb\u30fc\u30ec\u30c3\u30c8","\u30ec\u30d9\u30eb","\u3081\u3056\u3081","\u91dd","\u30b4\u30d6\u30ec\u30c3\u30c8","\u30d1\u30a4","\u30b0\u30ea\u30fc\u30f3","\u30c9\u30e9\u30b4\u30f3","\u30cb\u30e5\u30fc\u30e8\u30fc\u30af","\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2","\u30de\u30fc\u30c1","\u30e9\u30a4\u30f3","\u6226\u4e89","\u30cf\u30c1\u30df\u30c4","\u30b8\u30e3\u30e0","\u6559\u4f1a","\u30ab\u30d0\u30fc","\u30e9\u30f3\u30d7","\u30d0\u30df\u30e5\u30fc\u30c0","\u3064\u308a","\u6771\u4eac","\u30a8\u30b8\u30d7\u30c8","\u30d3\u30fc\u30c8","\u30d3\u30bf\u30df\u30f3","\u30d9\u30eb\u30c8","\u30db\u30fc\u30b9","\u30ec\u30e2\u30f3","\u770b\u8b77\u5e2b","\u98a8","\u30e9\u30a4\u30aa\u30f3","\u30ed\u30f3\u30c9\u30f3","\u30c7\u30b6\u30fc\u30c8","\u30b8\u30e3\u30f3\u30d7","\u30c0\u30a4\u30b9","\u76ee","\u677f","\u30b9\u30a4\u30c3\u30c1","\u7a7a\u6c17","\u6728\u661f","\u30cf\u30e0","\u30d0\u30c3\u30c6\u30ea\u30fc","\u304f\u3058","\u5b9d","\u30a6\u30b5\u30ae","\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8","\u30c9\u30ed\u30c3\u30d7","\u30c8\u30e9\u30c3\u30af","\u9280\u884c","\u30dd\u30b1\u30c3\u30c8","\u7206\u5f3e","\u30ab\u30b8\u30ce","\u6469\u5929\u697c","\u30b9\u30c8\u30c3\u30af","\u30b8\u30e0","\u8349\u539f","\u571f\u661f","\u30c9\u30ec\u30b9","\u30d5\u30a1\u30f3","\u30c9\u30ef\u30fc\u30d5","\u30a8\u30a4\u30ea\u30a2\u30f3","\u30e0\u30c1","\u5357\u6975","\u30ab\u30dc\u30c1\u30e3","\u30e2\u30b9\u30af\u30ef","\u30c8\u30ea\u30c3\u30d7","\u96ea\u3060\u308b\u307e","\u68ee","\u30bf\u30a4\u30e0","\u30b9\u30c8\u30e9\u30a4\u30af","\u30c0\u30a4\u30e4","\u30bd\u30a6\u30eb","\u30ab\u30ca\u30c0","\u30b3\u30f3\u30b5\u30fc\u30c8","\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8","\u30b8\u30a7\u30c3\u30c8\u6a5f","\u30b7\u30a7\u30a4\u30af\u30b9\u30d4\u30a2","\u8eca","\u30b7\u30e3\u30c9\u30a6","\u624b\u888b","\u30e9\u30a4\u30bf\u30fc","\u30b3\u30df\u30c3\u30af","\u5104\u4e07\u9577\u8005","\u30af\u30fc\u30eb","\u30dc\u30f3\u30c9","\u30ea\u30f3\u30b4","\u30aa\u30a4\u30eb","\u8abf\u7406\u5e2b","\u30d5\u30e9\u30a4","\u30ab\u30f3","\u30af\u30de","\u30c9\u30e9\u30a4\u30d6","\u30a8\u30fc\u30b9","\u30c1\u30a7\u30c3\u30af","\u30d0\u30fc","\u30cf\u30fc\u30c9","\u30cf\u30ea\u30a6\u30c3\u30c9","\u30b9\u30af\u30ea\u30fc\u30f3","\u904a\u3073","\u30bf\u30a4\u30ac\u30fc","\u6050\u7adc","\u30cd\u30b3","\u30b2\u30fc\u30e0","\u547d","\u5e78\u904b","\u30d5\u30c3\u30af","\u30ad\u30e3\u30d7\u30c6\u30f3","\u30d0\u30c3\u30c8","\u30dc\u30eb\u30c8","\u30ae\u30ea\u30b7\u30a2","\u30c7\u30c3\u30ad","\u30da\u30c3\u30c8","\u30d1\u30f3\u30af","\u5de8\u4eba","\u9854","\u6d77\u8cca","\u6d5c","\u30dd\u30f3\u30c9","\u30e9\u30a6\u30f3\u30c9","\u30ec\u30b8\u30a7\u30f3\u30c9","\u30b5\u30a4\u30af\u30eb","\u30ed\u30fc\u30de","\u30db\u30c6\u30eb","\u30b9\u30dd\u30c3\u30c8","\u30de\u30a6\u30b9","\u30b9\u30c6\u30a3\u30c3\u30af","\u30ad\u30e3\u30f3\u30d7","\u30e2\u30fc\u30eb","\u30b9\u30c6\u30fc\u30b8","\u30b5\u30b1","\u6c34","\u7d19","\u30a4\u30fc\u30b0\u30eb","\u30dc\u30bf\u30f3","\u30d2\u30de\u30e9\u30e4","\u5fcd\u8005","\u30c1\u30a7\u30b3","\u30b0\u30e9\u30f3\u30c9","\u30e9\u30c3\u30d1","\u304f\u3061","\u30bf\u30b0","\u30ca\u30c3\u30c4","\u30a4\u30e2\u30e0\u30b7","\u30da\u30f3\u30ae\u30f3","\u5f01\u8b77\u58eb","\u30af\u30e2","\u3057\u3063\u307d","\u30ce\u30df","\u30df\u30f3\u30c8","\u30df\u30b5\u30a4\u30eb","\u5927\u4f7f\u9928","\u30d4\u30b9\u30c8\u30eb","\u79d1\u5b66\u8005","\u30ad\u30a6\u30a4","\u65e5\u8a18","\u30c9\u30a4\u30c4","\u30cf\u30f3\u30c9","\u75c5\u6c17","\u30d9\u30c3\u30c9","\u30b9\u30d1\u30a4","\u30d7\u30ea\u30f3\u30bb\u30b9","\u30c0\u30f3\u30b9","\u30cb\u30f3\u30b8\u30f3","\u592a\u5e73\u6d0b","\u30e9\u30b1\u30c3\u30c8","\u5929\u624d","\u6ce5\u68d2","\u30c8\u30e9\u30f3\u30af","\u30a2\u30e1\u30ea\u30ab","\u30ce\u30d9\u30eb","\u58c1","\u30a2\u30b8","\u30a2\u30c8\u30e9\u30f3\u30c6\u30a3\u30b9","\u30b1\u30c1\u30e3\u30c3\u30d7","\u30b9\u30a4\u30ab","\u30a4\u30ae\u30ea\u30b9","\u30cf\u30a6\u30b9","\u30ab\u30a8\u30c7","\u30e1\u30fc\u30eb","\u30a2\u30d5\u30ea\u30ab","\u30aa\u30da\u30e9","\u30bf\u30ef\u30fc","\u591c","\u30d7\u30fc\u30eb","\u30a6\u30b0\u30a4\u30b9","\u30d0\u30f3\u30c9","\u30ab\u30e2","\u30d5\u30fc\u30c9","\u30ab\u30fc\u30c9","\u30b3\u30fc\u30c8","\u30cd\u30af\u30bf\u30a4","\u30b9\u30ca\u30c3\u30af","\u30af\u30ed\u30b9","\u30cd\u30c3\u30c8","\u30d5\u30e9\u30f3\u30b9","\u30c7\u30fc\u30c8","\u6728\u7dbf","\u30dd\u30a4\u30f3\u30c8","\u30aa\u30ea\u30fc\u30d6","\u30de\u30c3\u30c1","\u30dc\u30fc\u30eb","\u6c34\u661f","\u30d6\u30ec\u30f3\u30c9","\u30d5\u30a1\u30a4\u30bf\u30fc","\u30b7\u30e7\u30c3\u30d7","\u30b9\u30ea\u30c3\u30d7","\u9a0e\u58eb","\u30d1\u30b9","\u30b9\u30bf\u30b8\u30a2\u30e0","\u8db3","\u30ea\u30e0\u30b8\u30f3","\u30ad\u30ea\u30f3","\u30d7\u30ec\u30fc\u30c8","\u30cd\u30ba\u30df","\u8e44\u9244","\u30aa\u30eb\u30ac\u30f3","\u30ca\u30a4\u30d5","\u30cf\u30fc\u30d5","\u30a6\u30a9\u30c3\u30c1","\u30bd\u30fc\u30c0","\u30d0\u30e9","\u30e2\u30c7\u30eb","\u5287\u5834","\u7a74","\u30dd\u30b9\u30c8","\u30e9\u30a4\u30c8","\u30c8\u30e9\u30a4\u30a2\u30f3\u30b0\u30eb","\u30d9\u30eb","\u30ab\u30c3\u30d1","\u30b4\u30e0","\u8b66\u5bdf","\u30ed\u30c3\u30af","\u304b\u308f\u3089","\u30b4\u30fc\u30b9\u30c8","\u8239","\u30e1\u30ad\u30b7\u30b3","\u30c1\u30e7\u30fc\u30af","\u30b9\u30c8\u30ed\u30fc","\u30a6\u30b7","\u30b5\u30e1","\u30c9\u30e9\u30d5\u30c8","\u30bf\u30ab","\u30d7\u30ec\u30b9","\u30ef\u30b4\u30f3\u8eca","\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0","\u30bf\u30a4","\u30d5\u30a7\u30cb\u30c3\u30af\u30b9","\u8ecd\u968a","\u30de\u30b9\u30af","\u30b8\u30e3\u30f3\u30b0\u30eb","\u30eb\u30fc\u30eb","\u30d1\u30a4\u30ed\u30c3\u30c8","\u30ec\u30fc\u30b6\u30fc","\u6b7b","\u30ec\u30fc\u30b9","\u30d7\u30ea\u30f3\u30c8","\u75c5\u9662","\u6551\u6025\u8eca","\u30de\u30fc\u30af","\u30d7\u30e9\u30b9\u30c1\u30c3\u30af","\u30ab\u30ae","\u30bf\u30b3","\u89aa\u6307","\u6559\u5e2b","\u30e4\u30b7","\u30c4\u30eb","\u30d8\u30ea\u30b3\u30d7\u30bf\u30fc","\u30d3\u30f3","\u30d5\u30a7\u30f3\u30b9","\u30ab\u30f3\u30ac\u30eb\u30fc","\u30b8\u30e3\u30c3\u30af","\u30e8\u30fc\u30ed\u30c3\u30d1","\u30b5\u30bd\u30ea","\u30b8\u30e7\u30c3\u30ad","\u30b9\u30fc\u30c4","\u9855\u5fae\u93e1","\u30a8\u30f3\u30b8\u30f3","\u30a6\u30a7\u30fc\u30d6","\u30b1\u30f3\u30bf\u30a6\u30eb\u30b9","\u5ddd","\u30d8\u30c3\u30c9","\u30de\u30f3\u30e2\u30b9","\u663c","\u30ad\u30f3\u30b0","\u30d1\u30f3","\u30dd\u30fc\u30eb","\u30b9\u30fc\u30d1\u30fc\u30d2\u30fc\u30ed\u30fc","\u30d1\u30fc\u30c6\u30a3\u30fc","\u30b5\u30ae","\u30ac\u30b9","\u30ac\u30e9\u30b9","\u30ef\u30b7\u30f3\u30c8\u30f3","\u30c8\u30ad","\u30af\u30a4\u30fc\u30f3","\u30d5\u30a1\u30a4\u30eb","\u30ad\u30fc\u30d1\u30fc","\u30db\u30fc\u30e0","\u30d4\u30fc\u30b9","\u6b6f","\u30b9\u30bf\u30c3\u30d5","\u30d3\u30eb","\u30b7\u30e5\u30fc\u30c8","\u6d17\u6fef","\u30e9\u30c3\u30d7","\u30a2\u30de\u30be\u30f3","\u30b9\u30da\u30fc\u30b9","\u30d5\u30a3\u30ae\u30e5\u30a2","\u30de\u30b9","\u4e2d\u56fd","\u30b5\u30e9\u30c0","\u30d0\u30c3\u30d5\u30a1\u30ed\u30fc","\u30bf\u30f3\u30b9","\u30a4\u30cc","\u30c4\u30e1","\u30d9\u30eb\u30ea\u30f3","\u30a6\u30de","\u30c1\u30e3\u30fc\u30b8","\u6f5c\u6c34\u8266","\u30a4\u30f3\u30c9","\u9244\u9053","\u671b\u9060\u93e1","\u98db\u884c\u6a5f","\u30d1\u30e9\u30b7\u30e5\u30fc\u30c8","\u30d4\u30a2\u30ce","\u30dc\u30b9","\u30ab\u30e2\u30ce\u30cf\u30b7","\u30af\u30e9\u30d6","\u30af\u30c4","\u30b5\u30fc\u30d0\u30fc","\u30bb\u30f3\u30bf\u30fc","\u30a4\u30b9","\u30b5\u30a6\u30f3\u30c9","\u5de5\u5834","\u30d5\u30a3\u30eb\u30e0","\u738b\u51a0","\u30aa\u30ea\u30f3\u30d4\u30c3\u30af","\u30d0\u30b9","\u30ce\u30fc\u30c8","\u30d1\u30fc\u30c4","\u30bf\u30c3\u30d7","\u6c37","\u9774\u4e0b","\u30a2\u30eb\u30d7\u30b9","\u30eb\u30fc\u30c8","\u885b\u661f","\u5929\u4f7f","\u30af\u30e9\u30c3\u30b7\u30e5","\u91d1","\u30b3\u30c3\u30d7","\u30da\u30fc\u30b9\u30c8","\u30ed\u30dc\u30c3\u30c8","\u5217","\u30b9\u30d1\u30a4\u30af","\u30b3\u30fc\u30c9","\u30cd\u30b9\u6e56","\u30d5\u30a9\u30fc\u30af","\u30b9\u30a4\u30f3\u30b0","\u6e2f","\u30b5\u30fc\u30af\u30eb","\u30e6\u30cb\u30b3\u30fc\u30f3","\u6642\u9593","\u30ea\u30f3\u30af","\u30d5\u30eb\u30fc\u30c8","\u305f\u3044\u307e\u3064","\u5317\u4eac","\u30ef\u30b7","\u76ae","\u96ea","\u8c61\u7259","\u30d1\u30a4\u30d7","\u30d1\u30f3\u30c4","\u5175\u58eb","\u6383\u9664\u6a5f","\u9b54\u5973","\u30eb\u30fc\u30e0","\u5bc6\u58f2\u4eba","\u30aa\u30ec\u30f3\u30b8","\u30a2\u30b9\u30c6\u30ab","\u846c\u5100\u5c4b","\u30b9\u30ad\u30e5\u30fc\u30d0\u30c0\u30a4\u30d0\u30fc","\u30d4\u30e9\u30df\u30c3\u30c9","\u6bd2","\u7cf8"],"\u30b3\u30fc\u30c9\u30cd\u30fc\u30e0: \u30c7\u30e5\u30a8\u30c3\u30c8":["\u30d0\u30b9\u30b1\u30c3\u30c8","\u30c0\u30c3\u30b7\u30e5","\u30bb\u30a4\u30a6\u30c1","\u30ec\u30e2\u30cd\u30fc\u30c9","\u65d7","\u6d1e\u7a9f","\u30a2\u30ea","\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2","\u30bf\u30c8\u30a5\u30fc","\u8fb2\u5712","\u30d0\u30c3\u30bf","\u30e9\u30a4\u30d5\u30eb","\u30d0\u30a4\u30ad\u30f3\u30b0","\u5439\u96ea","\u5316\u7ca7","\u9676\u82b8","\u5473","\u30d6\u30eb\u30fc\u30b9","\u30b4\u30eb\u30d5","\u30de\u30c4","\u4eba\u5f62","\u30e9\u30f3\u30c1","\u30b9\u30b1\u30fc\u30c8","\u624b\u82b8","\u5ea7\u5e03\u56e3","\u30da\u30f3","\u30d0\u30bf\u30fc","\u6795","\u57ce","\u5dfb\u7269","\u30c7\u30a3\u30b9\u30af","\u30c9\u30ed\u30fc\u30f3","\u30cf\u30f3\u30de\u30fc","\u5e8a","\u5211\u52d9\u6240","\u30d6\u30ec\u30fc\u30ad","\u3072\u3082","\u304d\u3082\u306e","\u30d6\u30ea\u30ad","\u5e73","\u30ab\u30c3\u30b3\u30a6","\u6bdb","\u6ce5","\u5b9d\u77f3\u5546","\u30d8\u30e9\u30af\u30ec\u30b9","\u5200","\u868a","\u30c0\u30a4\u30ba","\u30a2\u30a4\u30b9\u30e9\u30f3\u30c9","\u971c","\u30b3\u30fc\u30c1","\u30a4\u30e2","\u30b9\u30ca\u30c3\u30d7","\u30b1\u30fc\u30ad","\u30a6\u30df\u30ac\u30e1","\u30af\u30ea\u30b9\u30de\u30b9","\u30a6\u30e1","\u30b3\u30b1","\u30c1\u30fc\u30e0","\u30d6\u30fc\u30c4","\u96fb\u7403","\u30d3\u30b9\u30b1\u30c3\u30c8","\u30b9\u30d7\u30ec\u30fc","\u30d1\u30d7\u30ea\u30ab","\u30d1\u30da\u30c3\u30c8","\u98a8\u8eca","\u30de\u30e9\u30ab\u30b9","\u30d5\u30a9\u30fc\u30e0","\u30de\u30b0\u30de","\u6c37\u6cb3\u671f","\u30e1\u30e2\u30ea\u30fc","\u30b8\u30e3\u30f3\u30d1\u30fc","\u30af\u30b7","\u30e1\u30ac\u30cd","\u30d4\u30b6","\u77f3\u3051\u3093","\u6642\u8a08\u53f0","\u30bd\u30ea","\u30b9\u30df\u30ec","\u30d0\u30d6\u30eb","\u30b9\u30d7\u30fc\u30f3","\u30bf\u30de\u30cd\u30ae","\u9b54\u4eba","\u30bf\u30f3\u30af","\u63a2\u5075","\u6e7e","\u30c9\u30e9\u30a4\u30e4\u30fc","\u5144\u5f1f","\u60aa","\u306f\u3057\u3054","\u6848\u5c71\u5b50","\u5bfa","\u30ad\u30eb\u30c8","\u5c0f\u5c4b","\u76c6\u683d","\u904a\u5712\u5730","\u30d1\u30c1\u30f3\u30b3","\u30ea\u30b9","\u30ab\u30d5\u30a7","\u30de\u30e9\u30bd\u30f3","\u8033","\u30dd\u30c3\u30d7\u30b3\u30fc\u30f3","\u7f8e\u5973","\u30a4\u30af\u30e9","\u30d3\u30ad\u30cb","\u30ad\u30b9","\u30d0\u30a4\u30aa\u30ea\u30f3","\u8107","\u6d77\u5cb8","\u5b87\u5b99\u98db\u884c\u58eb","\u30d6\u30e9\u30c3\u30af\u30db\u30fc\u30eb","\u7802","\u5922","\u8074\u8a3a\u5668","\u30d9\u30d3\u30fc","\u30c6\u30f3\u30c8","\u30de\u30a4\u30eb","\u30b8\u30e3\u30c3\u30b8","\u706b\u5c71","\u30ca\u30a4\u30ed\u30f3","\u30ae\u30bf\u30fc","\u30cf\u30c1","\u30ac\u30e0","\u5c0f\u92ad","\u7159","\u30d8\u30eb\u30e1\u30c3\u30c8","\u53f0\u6240","\u30b5\u30cf\u30e9","\u30ec\u30b3\u30fc\u30c9","\u30b9\u30af\u30e9\u30c3\u30c1","\u3064\u3070\u3055","\u65a7","\u30da\u30f3\u30ad","\u3069\u304f\u308d","\u6d99","\u30af\u30ea\u30b9\u30bf\u30eb","\u30cb\u30e5\u30fc\u30c8\u30f3","\u30d4\u30c3\u30c1\u30e3\u30fc","\u8449","\u7070","\u895f","\u7a93","\u6728\u3053\u308a","\u611b","\u30b9\u30fc\u30d7","\u30a4\u30f3\u30af","\u30b5\u30ed\u30f3","\u904b\u6cb3","\u30b9\u30d5\u30a3\u30f3\u30af\u30b9","\u9b3c","\u7a32\u59bb","\u30e4\u30ae","\u98a8\u5442","\u30af\u30ec\u30aa\u30d1\u30c8\u30e9","\u91ce\u83dc","\u771f\u936e","\u30db\u30a4\u30c3\u30b9\u30eb","\u9a0e\u99ac\u6b66\u8005","\u59b9","\u30c7\u30a3\u30ec\u30af\u30bf\u30fc","\u30ec\u30bf\u30fc","\u8b70\u54e1","\u3064\u3084","\u30ab\u30cb","\u30ec\u30f3\u30ac","\u30a2\u30a4\u30f3\u30b7\u30e5\u30bf\u30a4\u30f3","\u8cdb\u7f8e\u6b4c","\u30e2\u30d2\u30ab\u30f3","\u30a8\u30b9\u30d1\u30fc","\u5927\u5b66","\u30b8\u30e7\u30fc\u30ab\u30fc","\u8349","\u5f3e\u4e38","\u30c9\u30eb","\u5206","\u7c73","\u30ed\u30b1\u30c3\u30c8","\u30da\u30f3\u30bf\u30b4\u30f3","\u30d3\u30c3\u30b0\u30d0\u30f3","\u30b3\u30ed\u30f3\u30d6\u30b9","\u6642\u8a08","\u935b\u51b6\u5c4b","\u30b8\u30e3\u30f3\u30cc\u30fb\u30c0\u30eb\u30af","\u30be\u30f3\u30d3","\u30c1\u30e7\u30a6","\u30bf\u30a4\u30e4","\u6b6f\u533b\u8005","\u30c1\u30fc\u30ba","\u5730\u7403","\u30ca\u30dd\u30ec\u30aa\u30f3","\u30c6\u30ad\u30b5\u30b9","\u30b9\u30c8\u30ea\u30fc\u30c8","\u30d5\u30a3\u30fc\u30d0\u30fc","\u9727","\u30ab\u30df\u30bd\u30ea","\u30b1\u30fc\u30d6\u30eb","\u77e5\u4e8b","\u30ab\u30a6\u30dc\u30fc\u30a4","\u30a2\u30fc\u30b5\u30fc\u738b","\u30c8\u30ed\u30fc\u30eb","\u82b1\u5ac1","\u30ab\u30a8\u30b5\u30eb","\u6e29\u5ba4","\u307b\u3053\u308a","\u30b9\u30ea\u30c3\u30d1","\u3044\u304b\u3055\u307e\u5e2b","\u30dc\u30ea\u30e5\u30fc\u30e0","\u30b9\u30ad\u30fc","\u30ed\u30b7\u30a2","\u30d1\u30fc\u30eb","\u5e73\u548c","\u6cb8\u9a30","\u30a4\u30fc\u30b9\u30bf\u30fc","\u30af\u30a9\u30fc\u30bf\u30fc","\u96fb\u5b50\u30ec\u30f3\u30b8","\u30b7\u30e3\u30ef\u30fc","\u71c3\u6599","\u5730\u9707","\u30ab\u30e9\u30b9","\u30de\u30b8\u30b7\u30e3\u30f3","\u795e\u7d4c","\u96f7","\u8db3\u8efd","\u6c37\u6cb3","\u7c89","\u56de\u8ee2","\u4eba\u72fc","\u9396","\u79d2","\u9003\u4ea1","\u30d2\u30b2","\u84b8\u6c17","\u30c4\u30d0\u30e1","\u30d0\u30ec\u30f3\u30bf\u30a4\u30f3","\u306e\u308a","\u30d8\u30d3","\u6226\u8266","\u30b1\u30f3\u30ab","\u5730\u56f3","\u30a6\u30a3\u30eb\u30b9","\u30c8\u30eb\u30cd\u30fc\u30c9","\u81ea\u8ee2\u8eca","\u30aa\u30a6\u30e0","\u30cf\u30f3\u30d0\u30fc\u30ac\u30fc","\u30b5\u30a4\u30f3","\u30ce\u30a2","\u30a6\u30a3\u30b6\u30fc\u30c9","\u30d1\u30ec\u30fc\u30c9","\u30a2\u30dd\u30ed","\u30ab\u30ec\u30fc","\u5149\u7dda","\u30c7\u30b9\u30af","\u30b5\u30c9\u30eb","\u30ab\u30e2\u30e1","\u30d9\u30fc\u30b3\u30f3","\u30d3\u30cb\u30fc\u30eb","\u60a3\u8005","\u30ce\u30b3\u30ae\u30ea","\u30aa\u30a2\u30b7\u30b9","\u30f4\u30a3\u30fc\u30ca\u30b9","\u30d9\u30f3\u30c1","\u30d2\u30e7\u30a6","\u8056\u5fb3\u592a\u5b50","\u30ed\u30fc\u30c9","\u77f3\u7070","\u4f53\u64cd","\u30e1\u30fc\u30bf\u30fc","\u30ed\u30c7\u30aa","\u7d79","\u30b3\u30fc\u30d2\u30fc","\u30b8\u30e7\u30c3\u30ad\u30fc","\u30b9\u30e0\u30fc\u30b8\u30fc","\u30b5\u30eb\u30b5","\u5e06","\u30a6\u30fc\u30eb","\u30c8\u30f3\u30cd\u30eb","\u5ead","\u306b\u304a\u3044","\u30c9\u30a2","\u30a6\u30c3\u30c9","\u56fd","\u30be\u30a6","\u6a19\u8b58","\u30d6\u30e9\u30a4\u30f3\u30c9","\u30c0\u30a4\u30b3\u30f3","\u6bcd","\u30dd\u30fc\u30ab\u30fc","\u30ec\u30fc\u30eb","\u30df\u30b9","\u8ca1\u5e03","\u304b\u307e\u304f\u3089","\u5507","\u30b5\u30eb","\u30ad\u30e3\u30c3\u30c1\u30e3\u30fc","\u6c57","\u30c9\u30e9\u30a4\u30d0\u30fc","\u30c7\u30eb\u30bf","\u5869","\u30ca\u30de\u30b1\u30e2\u30ce","\u5c4b\u4e0a","\u92fc","\u30d6\u30e9\u30b8\u30e3\u30fc","\u5d50","\u8eca\u3044\u3059","\u53a9\u820e","\u30ae\u30a2","\u98a8\u8239","\u30d0\u30fc\u30d9\u30ad\u30e5\u30fc","\u30c1\u30e5\u30c1\u30e5","\u30d9\u30fc\u30b9","\u30cf\u30ef\u30a4","\u30de\u30b9\u30bf\u30fc\u30c9","\u304f\u3059\u308a","\u30af\u30e9\u30b2","\u30a2\u30e9\u30b9\u30ab","\u30d3\u30fc\u30eb","\u30e2\u30ca\u30ea\u30b6","\u8fb2\u5bb6","\u5341\u5b57\u8ecd","\u30c8\u30ea\u30c3\u30af","\u3069\u3093\u3076\u308a","\u30af\u30ea\u30fc\u30cb\u30f3\u30b0","\u30dd\u30ed","\u30c8\u30fc\u30b9\u30c8","\u93a7","\u30b8\u30e5\u30fc\u30b9","\u30c8\u30ca\u30ab\u30a4","\u5263\u9053","\u3082\u3061","\u52c7\u8005","\u3055\u3073","\u306e\u305e\u307f","\u304d\u305a\u306a","\u30b3\u30fc\u30f3","\u30d6\u30e9\u30b8\u30eb","\u96a0\u308c\u5bb6","\u30cf\u30ed\u30a6\u30a3\u30f3","\u30b5\u30f3\u30bf","\u8133","\u30d2\u30c3\u30c8","\u5bb6","\u30d4\u30fc\u30ca\u30c3\u30c4","\u8c9d\u6bbb","\u30c1\u30c3\u30d7","\u5263","\u93e1","\u82b1\u5a7f","\u30da\u30fc\u30b8","\u70ad\u9178","\u8c46","\u30dd\u30c6\u30c8\u30c1\u30c3\u30d7\u30b9","\u5f57\u661f","\u30d6\u30bf","\u30b9\u30c8\u30fc\u30ea\u30fc","\u96d1\u8a8c","\u8679","\u30ea\u30e5\u30c3\u30af\u30b5\u30c3\u30af","\u30e9\u30e0","\u30b5\u30c8\u30a6","\u592a\u967d","\u30d1\u30c3\u30c9","\u30d0\u30ca\u30ca","\u30e9\u30b8\u30aa","\u30c9\u30ec\u30c3\u30b7\u30f3\u30b0","\u6cbc","\u30de\u30cb\u30ad\u30e5\u30a2","\u6d2a\u6c34","\u30b9\u30bf\u30f3\u30d7","\u30ef\u30b4\u30f3","\u30d1\u30f3\u30c0","\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc","\u30a6\u30a8\u30a4\u30c8\u30ec\u30b9","\u30e2\u30e2","\u30db\u30e1\u30ed\u30b9","\u30dc\u30af\u30b5\u30fc","\u30a8\u30c7\u30f3","\u7761\u7720","\u30df\u30ce\u30bf\u30a6\u30ed\u30b9","\u7d50\u5a5a\u5f0f","\u30ab\u30f3\u30d5\u30fc","\u30df\u30a4\u30e9","\u968e\u6bb5","\u62cd\u8eca","\u30ae\u30e3\u30f3\u30b0","\u30df\u30eb\u30af","\u30ab\u30a8\u30eb","\u30b7\u30e3\u30f3\u30d7\u30fc","\u30bf\u30ad\u30b7\u30fc\u30c9","\u30b7\u30fc\u30c8","\u96ea\u5d29","\u30ed\u30fc\u30d7","\u30ea\u30fc\u30c0\u30fc","\u30ad\u30c3\u30af","\u672c","\u30b9\u30d4\u30ea\u30c3\u30c8","\u30b7\u30e5\u30ec\u30c3\u30c0\u30fc","\u30a4\u30ab\u30ea","\u9f3b","\u30c9\u30e9\u30e0","\u30da\u30c0\u30eb"]},"ko":{"\ucf54\ub4dc\ub124\uc784":["\ubc14\ub2e4","\uc6a9.","\uc804\uc7c1","\uafc0","\ud3ed\ud0c4","\uce74\uc9c0\ub178","\ub3c4\uc2dc","\ud1a0\uc131","\uc678\uacc4\uc778","\ucc44\ucc0d","\ub0a8\uadf9","\ub208\uc0ac\ub78c","\uacf5\uc5f0","\ucd08\ucf5c\ub9bf","\uc804\ud22c\uae30","\ubd80\uc790","\uacf5\ub8e1.","\ud574\uc801","\uc0c8\uc6b0","\ud3ad\uadc4","\uac70\ubbf8","\ubbf8\uc0ac\uc77c","\uad6d\ud68c","\ucd1d","\uc9c8\ubcd1","\uc2a4\ud30c\uc774","\uacf5\uc8fc","\ucc9c\uc7ac","\ub3c4\ub451","\uc624\ud398\ub77c","\uae30\uc0ac","\uacbd\uae30\uc7a5","\ub9ac\ubb34\uc9c4","\uc720\ub839","\ud2b8\ub7ed","\uc544\uc774\uc2a4\ud06c\ub9bc","\ub808\uc774\uc800","\uc8fd\uc74c","\ubcd1\uc6d0","\uad6c\uae09\ucc28","\ubb38\uc5b4","\ud5ec\ub9ac\ucf65\ud130","\ucea5\uac70\ub8e8","\ud604\ubbf8\uacbd","\uad34\ubb3c","\uc288\ud37c\ud788\uc5b4\ub85c","\ub9dd\uc6d0\uacbd","\ub099\ud558\uc0b0","\uc624\ub9ac\ub108\uad6c\ub9ac","\uc62c\ub9bc\ud3ec\uc2a4","\uc704\uc131","\ucc9c\uc0ac","\ub85c\ubd07","\uc720\ub2c8\ucf58","\ub9c8\ub140","\uc778\uc7ac","\uc7a0\uc218\ubd80","\ub3c5","\ub2e4\ub9ac","\ubd88","\ucc45\uc0c1","\uace0\ub798","\ub2ec","\ubb3c\uace0\uae30","\uc758\uc0ac","\uad50\ud68c","\ubca8\ud2b8","\uac04\ud638\uc0ac","\ubc14\ub78c","\uc0ac\uc790","\ub208.","\uacf5\uae30","\ud1a0\ub07c","\uc740\ud589","\ud480.","\ub4dc\ub808\uc2a4","\ub09c\uc7c1\uc774","\uc232","\ucc28","\uc7a5\uac11","\uc0ac\uacfc","\uae30\ub984","\uc694\ub9ac","\uacf0.","\uace0\uc591\uc774","\uc778\uc0dd","\uc6b4.","\uac70\uc778","\uc5bc\uad74","\ud574\ubcc0","\ud638\ud154","\ubb3c.","\uc885\uc774","\ubc8c\ub808","\ubcc0\ud638\uc0ac","\uacfc\ud559\uc790","\ucda4","\ub2f9\uadfc","\ucf00\ucca9","\ubc24","\uba74","\ubc1c","\uc950","\uce7c","\uadf9\uc7a5","\uacbd\ucc30","\ubc30","\uc870\uc885\uc0ac","\uc9c0\ubb38","\uc120\uc0dd\ub2d8","\ubcd1","\ubc29\ud559","\uc655","\uc720\ub9ac","\uc5ec\uc655","\uc774","\uac1c","\ub9d0","\uc2e0\ubc1c","\uc758\uc790","\uc655\uad00","\uc5bc\uc74c","\uae08.","\uc218\uc800","\uc2dc\uac04","\ud53c\ub9ac","\ucd1b\ubd88","\ube44","\uc0c1\uc544","\uad70\uc778","\ud53c\ub77c\ubbf8\ub4dc","\ub048","\ubcc4","\ubc18\uc9c0","\ubfd4","\ub9c8\uc74c","\ubcbd\ub3cc","\uc2e4","\ubc14\ub298","\ucc45","\ub69c\uaed1","\ubcf4\ub4dc","\uc2a4\uc704\uce58","\ud14c\uc774\ud504","\ub180\uc774","\uc8fc\ub984","\ub2e8\ucd94","\uc785","\ud45c","\uc190","\uce68\ub300","\ubcbd","\ud0d1","\uce74\ub4dc","\uad50\ubcf5","\ub2e4\uc774\uc544\ubaac\ub4dc","\uc9d1","\uadf8\ubb3c","\ud3ec\uc778\ud2b8","\uc2dc\ud5d8","\uc811\uc2dc","\uad6c\uba4d","\ubca8","\ud798","\uc5f4\uc1e0","\uc5d4\uc9c4","\ud30c\ub3c4","\uc2dc\ub0b4","\uba38\ub9ac","\ub9c9\ub300\uae30","\ubc29\ud328","\uc0ac\uace0","\ubc18\uc8fd","\ubabb","\ucf54\ub4dc","\ub3d9\uadf8\ub77c\ubbf8","\uc9c0\ub984","\ud30c\uc774\ud504","\ub274\uc695","\ud638\uc8fc","\ubc84\ubba4\ub2e4","\ub3c4\ucfc4","\uc774\uc9d1\ud2b8","\uc11c\uc6b8","\uac70\ubd81","\ub7ec\uc2dc\uc544","\uce90\ub098\ub2e4","\uc774\uc21c\uc2e0","\ud560\ub9ac\uc6b0\ub4dc","\uadf8\ub9ac\uc2a4","\ub85c\ub9c8","\ud788\ub9d0\ub77c\uc57c","\ud638\ub791\uc774","\uccb4\ucf54","\ud0a4\uc704","\ub3c5\uc77c","\uad6d\uac00","\ubbf8\uad6d","\ub300\ud55c\ubbfc\uad6d","\uc601\uad6d","\ub3c4\uc7a5","\uc544\ud504\ub9ac\uce74","\uae4c\uce58","\ubc31\ub450\uc0b0","\uc740\ud558\uc218","\uc0bc\uad6d\uc9c0","\ubbf8\uc18c","\uc720\ub7fd","\ub2e8\ud48d","\ud30c\ub9ac","\ud30c\uc774","\ud544\ub9ac\ud540","\ucca0","\uc815\ub3c4","\ubd84\uc218","\uc804\uac08","\uc54c\ud504\uc2a4","\uc778\ub3c4","\ubaa8\uc790","\ud504\ub791\uc2a4","\uace0\uc7a5","\uace0\uac1c","\ubd04","\uc694\uc815","\ub2e8\uc9c0","\uad74.","\uace8.","\uc6b0\ub9ac","\ub3c5\uc218\ub9ac","\uac10","\uba55\uc2dc\ucf54","\ub098\ube44","\uc2e0","\uc18c\uace0\uae30","\uac00\uc744","\uae30\ub3c4","\uae30\uc790","\ub300\uc811","\ubaa9\uc131","\uae40","\ubc30\ud130\ub9ac","\uc8fc\uc0ac\uc704","\uacf5\ud3ec","\ube44\ud589","\ud32c","\uae30\ubbf8","\uc808\ubcbd","\uccad\uc18c","\ube57\uc790\ub8e8","\ubc29\uc6b8","\uac15\ub0c9\uc774","\uc4f0\ub808\uae30","\ubaa8\uc784","\ub3d9\uc548","\ucee4\ud53c","\uadf8\ub9bc\uc790","\uc218\ub3c4","\uc0ac\uc774","\ubb34\ub300","\ub300\uc0ac","\ub3c4\ub85c","\uc694\uc6d0","\uac10\uae30","\ub54c","\uc5ec\ud589","\ub2ec\ud33d\uc774","\ub3d9\ud654","\uc219\uc81c","\uaf2c\ub9ac","\uc774\uc0ac","\uc218\uc785","\ubc15\uc950","\ubcf5","\ub9c8\ub2f9","\uae30\ud0c0","\ubb38\uc81c","\ub9e4\uc7a5","\ub300\ucd9c","\uc704","\uc804\ud654","\uc545\uc218","\uace0\uc2b4\ub3c4\uce58","\uacf5\uc6d0","\ud0dd\ubc30","\uc120\uc218","\uc0c8","\uc6b4\ub3d9","\uc220","\uc0ac\uc6d0","\uc808","\ubd80\ub300","\uc2dc\uc7a5","\uc5ed","\uace0\ub9ac","\ubc34\ub4dc","\ub545\ucf69","\uc7a5\ube44","\ubc29","\ud314","\uba54\uc77c","\ud0c0\uc790","\ubc14\uc704","\uc870\uc0ac","\uc2e0\ubd80","\uc0ac\ub9c8\uadc0","\uc0b0","\uc2e0\uc0ac","\ubc8c","\uacf5.","\uc624\ub9ac","\uc774\uc131","\uc8fc\ubb38","\uc0bc\uac01","\ubc18\uc8fc","\uc218\uc131","\uc791\uc5c5","\uc218\uba74","\uc2dc\uacc4","\uc7a0\uc790\ub9ac","\ub9cc\ud654","\uc0ac\uc9c4","\uc8fc\uc0ac","\ucc3d","\ud638\uc218","\uc2e0\uc7a5","\uc885","\uc815\uc0c1","\ube5b","\uc18c\uc124","\ubaa8\ub378","\ucd08\ub300","\ub9e4","\ud1b5\ud654","\ub3c8","\uc5f0\uae30","\uc804\uc124","\ud589\uc0ac","\uc790","\uacbd\uae30","\uc9c0\ubc29","\uc7ac\ud310","\uacbd\uc8fc","\ub77c\uba74","\ud574","\uc9c0\uac01","\uac8c\uc784","\ud5a5\uc218","\uc815\uc6d0","\uc784\uae08","\uc9c0\uad6c","\ud734\uc9c0","\uc7a5\ub09c","\uac00\uc2a4","\ud154\ub808\ube44\uc804","\ub300\ub9ac","\ud30c\uc77c","\uadc0\ub69c\ub77c\ubbf8","\uc6b0\ubb3c","\ubd80\ucc44","\uc9c1\uc6d0","\ubcf5\uad8c","\uac00\uc7a5","\uc77c","\ud504\ub85c","\uc544\ub9c8\uc874","\uc6b0\uc8fc","\uc22b\uc790","\uc0ac\uae30","\uc911\uad6d","\uae38","\ub3cc","\uac00\uc2b4","\uce68","\ucda9\uc804","\uc9c0\ud558","\uae30\ucc28","\ube44\ud589\uae30","\ud53c\uc544\ub178","\uc0c1","\uace8\ubc45\uc774","\ud558\ub4dc","\uc18c\ub9ac","\uc804\uae30","\uc601\ud654","\ub4f1","\uad6c\uacbd","\uc7a5\uae30","\uc0ac\ub9ac","\ud314\uc790","\ubfcc\ub9ac","\uc9c0\ub3c4","\uc5f4","\uc810","\ubd80\uc778","\ud3ec\uae30","\ubc14\uc9c0","\uc8fc\uc7a5","\ucf54","\uc218\uc2ec","\uace0\uc218"],"\ucf54\ub4dc\ub124\uc784: \ub4c0\uc5e3":["\uad6d\uc218","\uc2a4\ud551\ud06c\uc2a4","\ud0dc\uc591","\uae4c\ub9c8\uadc0","\uc778\uc0bc","\ube75","\uac8c","\uac1c\ubbf8","\ubca0\ud2b8\ub0a8","\ube0c\ub77c\uc9c8","\uc18c\uc8fc","\ubab0\ub514\ube0c","\ud654\uc131","\uac15\ub0a8","\ud558\ub9c8","\uce75\ud14c\uc77c","\uc131\uac8c","\ub538\uae30","\ub808\ubaac","\uc2a4\ud398\uc778","\ubb34\ub364","\ubcbc\ub8e9","\uba54\uae30","\uac00\ubc29","\uc790\ub77c","\ubc14\ub098\ub098","\ud55c\uac15","\ub9e5\uc8fc","\uc625\uc218\uc218","\ud280\uae40","\uac00\uba74","\uc0c9","\uac00\uc9c0","\ub291\ub300","\ub2ec\uac40","\uae40\uce58","\uc5ff","\ucf69","\uaca8\uc6b8","\uc18c\uae08","\ub3d9\uad74","\ucc9c\uad6d","\uc18c","\ud0dc\ud48d","\uad11\ud654\ubb38","\uac10\uc790","\ub2ed","\ub098\ubc29","\uad6d.","\uc124\ud0d5","\ub108\uad6c\ub9ac","\uadf8\ub124","\uafc8","\ud31d\ucf58","\uc9c1\uc7a5","\uc0d0\ub7ec\ub4dc","\ub178\ub791","\uc624\uc774","\uc815\uae00","\uac1c\ubd88","\uace0\ub4f1\uc5b4","\uc6d0\uc22d\uc774","\ucc38\uce58","\ud615\uc81c","\ud48d\ucc28","\uc131","\ud1a0\uc2a4\ud2b8","\ucf54\ub07c\ub9ac","\ub450\ubd80","\ubed0\uafb8\uae30","\ud53c\uc790","\uc9c0\ub2a5","\ud558\uc640\uc774","\ud638\ubc15","\ub300\uad6c","\ud30c\ub791","\uce74\ub808","\ub300\ud559","\ub9c8\ub298","\uace0\ucd94","\ud64d\uc218","\uae30\ub7ec\uae30","\uac70\ud488","\uc640\uc778","\ub098\ubb34","\ube45\ubc45","\uc9c4\ub4dc\uae30","\ucc9c\ub465","\uac08\ub9e4\uae30","\uc120\uc778\uc7a5","\ud584\ubc84\uac70","\ubcf4\ub108\uc2a4","\ucf5c\ub77c","\uc624\uc544\uc2dc\uc2a4","\ubcf4\ub9ac","\ud06c\ub9ac\uc2a4\ub9c8\uc2a4","\uc870\uac1c","\ub41c\uc7a5","\ubc84\uc12f","\ud0f1\ud06c","\uac80\uc815","\ubd81\uadf9","\ub098\uc0ac","\uc548\uac1c","\uc591\ud30c","\ubbf8\uc5ed","\uad70\ub300","\ubb34\ub2f9\ubc8c\ub808","\uc0ac\uc774\ub2e4","\uac15","\uac00\uc8fd","\ub099\ud0c0","\uc810\uc2ec","\ubc25","\uc545\uc5b4","\ubd80\uc0b0","\ubc84\ud130","\uc778\ud130\ub137","\uc9c0\ud558\ucca0","\uc2dc\uace8","\ubc14\uc774\ub7ec\uc2a4","\ube68\uac15","\ubb34\uc778\ub3c4","\ub124\ubaa8","\uc300","\ud64d\ucf69","\uc7a5\uc5b4","\ud574\ud30c\ub9ac","\uc5ec\ub984","\uae30\ub9b0","\uc624\uc9d5\uc5b4","\ud654\uc0b0","\uac78\ub808","\uac08\ube44","\uc5f0\uc0c1","\uac11\uc637","\uac70\uc6b8","\ub9c8\uc694\ub124\uc988","\ub300\ub098\ubb34","\uac1c\uad6c\ub9ac","\uae30\uc5b5","\uc0ac\ub9c9","\ucca0\uc0c8","\ud6c4\ucd94","\uc624\ub80c\uc9c0","\uace0\ub9b4\ub77c","\ubaa8\uae30","\uace0\uad6c\ub9c8","\uace0\ubb34","\uc18c\uc2dc\uc9c0","\uc624\uc18c\ub9ac","\uc0ac\ud0d5","\ubcf5\uc22d\uc544","\uc794\ub514","\uc18c\ub098\ubb34","\uc9dc\uc7a5\uba74","\ubd81\ud55c","\ub450\uaebc\ube44","\ubd95\uc5b4","\ud669\uc0ac","\uc5fc\uc18c","\uc78e","\uc6d0\uc790\ub825","\uc7a5\ubbf8","\ubc40","\uce58\uc988","\ubb34","\uc81c\uc8fc\ub3c4","\uac00\uc2dc","\uc11c\ub9ac","\ub5a1","\ud61c\uc131","\uc528","\ub3fc\uc9c0","\uc6b0\uc720","\uaecc","\ud3ed\ud48d.","\uc465","\uc591","\ubc14\ud034\ubc8c\ub808","\uba54\ub69c\uae30","\uc18c\uc6d0","\uad6c\ub450","\ud0dc\ud3c9\uc591","\ube44\ub458\uae30","\ud558\ub298","\uc138\uae08","\uc544\ud30c\ud2b8","\ud3ec\ub3c4","\uc18c\ub77c","\uc575\ubb34\uc0c8","\ub18d\uc7a5","\uac00\uc704","\ucca0\ub3c4","\ub098\uc77c\ub860","\uac10\uc625","\uc5d8\ub9ac\ubca0\uc774\ud130","\uc77c\ubcf8","\uc9c0\uc9c4","\ub3c4\uc2dc\ub77d","\uac10\ub3d9","\uc9c0\ud321\uc774","\ud0a4\ubcf4\ub4dc","\uc62c\ub9bc\ud53d","\uc190\ud1b1","\uc54c\ub77c\ub518","\uc2a4\ud0a4","\uc790\uc11d","\ubcf4\uc11d","\uc370\ub9e4","\ud0c0\uc794","\ubc27\uc904","\uc120\ud48d\uae30","\ubaa8\ub798","\uc218\uc220","\ud131","\ub540","\uadc0","\uae40\uc5f0\uc544","\ube59\ud558","\uc7a1\uc9c0","\ub3c4\uae68\ube44","\uc880\ube44","\ud799\ud569","\ubd80\ud65c","\ubc31\uc124\uacf5\uc8fc","\uac00\ub8e8","\ubaa8\ub098\ub9ac\uc790","\ub1cc","\ud2b8\ub7fc\ud504","\ud658\uc790","\ub9c8\uc774\ud06c","\ucc1c\uc9c8","\uba54\ub450\uc0ac","\uc808\ub9dd","\ub208\ubb3c.","\uac04\uc7a5","\ud53c","\ub9dd\uce58","\ub9c8\ud53c\uc544","\uc790\uc804\uac70","\ud0dd\uc2dc","\ub9c8\uc0ac\uc9c0","\uc18d\uc637","\uc6a9\uae30","\ud0c8\ucd9c","\ubbf8\ub77c","\ucd95\uad6c","\ud765\ubd84","\uc870\ucee4","\ub178\ub798","\uc5ec\uc790","\ub3d9\uc0c1","\uac00\uc218","\ud48d\uc120","\uc804\uc9c0\ud604","\ub2f4\ubc30","\ub0a0\uac1c","\ucef4\ud4e8\ud130","\uc218\uc601","\ub2f9\uad6c","\ubcf4\ud5d8","\uc0e4\uc6cc","\ud53c\ud130\ud32c","\uc120\ubb3c","\uc9c0\uac11","\ud600","\uc138\ud0c1","\uac04\ub514","\ub3c4\uc804","\ub300\uc7a5","\ubb34\uc9c0\uac1c","\ud654\uc11d","\ub9c8\ubc95\uc0ac","\ubc88\uac1c","\ubc14\uac00\uc9c0","\uc785\uc220","\uc11c\ucee4\uc2a4","\uae40\uc815\uc740","\ud754\uc801","\uc2ed\uc790\uac00","\uc528\ub984","\ub3d9\uc0dd","\ub300\uba38\ub9ac","\uc544\ubc14\ud0c0","\ub4dc\ub860","\uc0ac\uc778","\ubb38\uc2e0","\ub9c8\ub77c\ud1a4","\uc774\uc57c\uae30","\ub300\ud1b5\ub839","\ub4dc\ub77c\uc774\ubc84","\ud138","\ucd08","\uc2e0\ub3d9\uc5fd","\ubbf8\ub07c","\ube44\ubc00","\ud76c\uc5f4","\uc138\uc885\ub300\uc655","\uc544\uc774\ub3cc","\ub3c4\ub07c","\ube14\ub799\ud640","\uc624\ube60","\uc18c\ud30c","\uac04","\uc808\ub2e8","\uc778\ud615","\uacbd\ube44","\uc720\uc7ac\uc11d","\uc6b0\uc0b0","\ub0a8\uc790","\uadc0\uc2e0","\ubb34\uc804\uae30","\uc0b0\ud0c0\ud074\ub85c\uc2a4","\ubb38\uc790","\ubd81","\uc2e0\ub370\ub810\ub77c","\ubb34\uae30","\ucef5","\uc9c4\uc8fc","\ub9e4\ub108","\ub77c\ub514\uc624","\uc804\uad6c","\ub3d9\uc804","\ud560\uba38\ub2c8","\uc5f0\ub8cc","\ube44\uba85","\uc2e4\ud5d8","\ubc84\uc2a4","\uc57c\uad6c","\ub808\uc2ac\ub9c1","\ub18d\uad6c","\uc544\uae30","\ud0a4\uc2a4","\ubaa9\ub3c4\ub9ac","\ub178\uc778","\ub204\ub098","\uae40\ud0dc\ud76c","\uc624\ub514\uc158","\ubc14\ub451","\ub3c4\ub9c8","\uc815\uc7a5","\uc0f4\ud478","\ub9c8\uc220\uc0ac","\uadfc\uc721.","\ubaa9\uc695","\uacb0\ud63c","\ud654\uc7a5","\uc544\uc800\uc528","\ud074\ub808\uc624\ud30c\ud2b8\ub77c","\uacbd\ud638","\uc778\ub514\uc5b8","\uc544\uc778\uc288\ud0c0\uc778","\uc7a0","\uc774\ud63c","\uc218\uc5fc","\ube44\ub204","\uc545\ub9c8","\ub2e4\uc774\uc5b4\ud2b8","\ube44\ud0a4\ub2c8","\ubcc0\uc2e0","\uc778\uc131","\uce74\uba54\ub77c","\uc804\uc5fc","\ub0c4\uc0c8","\uc5b4\uae68","\ubc29\ud0c4","\uc0ac\ub2e4\ub9ac","\uc544\ub974\ubc14\uc774\ud2b8","\ub9c8\uc57d","\ubc14\ubcf4","\uc774\uc2ac","\uc778\uc0ac","\ubc40\ud30c\uc774\uc5b4","\ubaa9.","\uc0ac\ub791","\uc218\uc815","\ud5e4\ub77c\ud074\ub808\uc2a4","\ubcc0\ube44","\uae30\uc801","\uaca9\ud22c\uae30","\uba3c\uc9c0","\uc5c4\ub9c8","\ud5c8\uc218\uc544\ube44","\ub3c4\ubc15","\uc2a4\ud0c0\ud0b9","\ub9c8\uc791","\ucca0\ubd09","\uac70\uc9c0","\uacf5\uc720","\ubc30\ub2ec","\uc2e0\ubb38","\uac00\uc871","\ud398\uc778\ud2b8","\uc7a5\uc778","\uc6b0\ube44","\uc548\uacbd","\ubf08","\ubb38.","\ud1b5\uc99d"]},"lt":{"Codenames":["RULET\u0116","DRAKONAS","KARAS","MEDUS","BOMBA","KAZINO","DANGORAI\u017dIS","SATURNAS","ATEIVIS","RIMBAS","ANTARKTIDA","BESMEGENIS","KONCERTAS","\u0160OKOLADAS","R\u0116MAS","OLIGARCHAS","DINOZAURAS","PIRATAS","TRIMITAS","PINGVINAS","VORAS","RAKETA","AMBASADA","PISTOLETAS","LIGA","\u0160NIPAS","PRINCES\u0116","GENIJUS","VAGIS","OPERA","RITERIS","STADIONAS","LIMUZINAS","VAIDUOKLIS","FURGONAS","LEDAI","LAZERIS","MIRTIS","LIGONIN\u0116","GREITOJI","A\u0160TUONKOJIS","SRAIGTASPARNIS","KENG\u016aRA","MIKROSKOPAS","KENTAURAS","SUPERMENAS","TELESKOPAS","PARA\u0160IUTAS","AN\u010cIASNAPIS","OLIMPAS","PALYDOVAS","ANGELAS","ROBOTAS","VIENARAGIS","RAGANA","\u0160ARVOTOJAS","NARAS","NUODAI","TILTAS","UGNIS","STALAS","BANGINIS","M\u0116NULIS","\u017dUVIS","DAKTARAS","BA\u017dNY\u010cIA","DIR\u017dAS","SESEL\u0116","V\u0116JAS","LI\u016aTAS","AKIS","ORAS","TRIU\u0160IS","BANKAS","\u017dOL\u0116","SUKNEL\u0116","NYK\u0160TUKAS","MI\u0160KAS","MA\u0160INA","PIR\u0160TIN\u0116","OBUOLYS","TEPALAS","VIR\u0116JAS","ME\u0160KA","KAT\u0116","GYVENIMAS","S\u0116KM\u0116","MIL\u017dINAS","VEIDAS","PAPL\u016aDIMYS","VIE\u0160BUTIS","VANDUO","POPIERIUS","KIRMINAS","ADVOKATAS","MOKSLININKAS","\u0160OKIS","MORKA","KE\u010cUPAS","NAKTIS","MEDVILN\u0116","P\u0116DA","PEL\u0116","PEILIS","TEATRAS","POLICIJA","LAIVAS","PILOTAS","NYK\u0160TYS","MOKYTOJAS","BUTELIS","DIENA","KARALIUS","STIKLAS","KARALIEN\u0116","DANTIS","\u0160UO","ARKLYS","BATAS","K\u0116D\u0116","KAR\u016aNA","LEDAS","AUKSAS","\u0160AKUT\u0116","LAIKAS","FLEITA","DEGLAS","SNIEGAS","DRAMBLIO KAULAS","KAREIVIS","PIRAMID\u0116","STYGA","\u017dVAIG\u017dD\u0116","\u017dIEDAS","RAGAS","\u0160IRDIS","BLOKAS","KANALAS","ADATA","EIL\u0116","PRIEDANGA","LENTA","JUNGIKLIS","VAIZDAS","\u017dAIDIMAS","D\u0116M\u0116","SAGA","BURNA","ETIKET\u0116","RANKA","LOVA","SIENA","BOK\u0160TAS","KORTA","KAKLARAI\u0160TIS","DEIMANTAS","KRY\u017dIUS","TINKLAS","TA\u0160KAS","PER\u0116JA","L\u0116K\u0160T\u0116","SKYL\u0116","VARPAS","J\u0116GA","RAKTAS","VARIKLIS","BANGA","UP\u0116","GALVA","A\u0160IGALIS","CENTRAS","AVARIJA","PASTA","SPYGLYS","KODAS","RUTULYS","RY\u0160YS","D\u016aDEL\u0116","NIUJORKAS","AUSTRALIJA","BERMUDAI","TOKIJAS","EGIPTAS","LONDONAS","MOLI\u016aGAS","MASKVA","KANADA","\u0160EKSPYRAS","HOLIVUDAS","GRAIKIJA","ROMA","HIMALAJAI","NINDZ\u0116","\u010cEKIJA","AVIS","VOKIETIJA","VALSTIJA","AMERIKA","ATLANTIDA","ANGLIJA","KLEVAS","AFRIKA","ANTIS","PRANC\u016aZIJA","PASAGA","TROLIS","MEKSIKA","EUROPA","SKORPIONAS","BERLYNAS","INDIJA","ALP\u0116S","RAMBYNAS","PEKINAS","ERELIS","KONTRABANDA","MAJAI","ARBATA","PIET\u016aS","O\u017dYS","PASAKA","DAMA","GELE\u017dIS","LAIPSNIS","BYLA","LENTEL\u0116","BALTAS","KAM\u0160TIS","BALANDIS","VED\u0116JAS","PAMAINA","SM\u016aGIS","SPINDULYS","KASA","KRIAU\u0160\u0116","KRU\u0160A","NAUJOKAS","KAULIUKAS","\u017dEM\u0116","KUMPIS","ELEMENTAS","AUSIS","LIGONIS","AGENTAS","KILIMAS","SEKUND\u0116","LYTIS","KUODAS","\u0160EPETYS","NAKVI\u0160A","U\u017dSIENIS","S\u0116DYN\u0116","RANDAS","KARTIS","MALDA","\u0160E\u0160\u0116LIS","DUGNAS","HUMORAS","POMPA","BOBA","MUS\u0116","PRIEDAS","PYN\u0116","MINA","INDAS","BARAS","\u0160ALNA","GRANATAS","GALAS","KILPA","BAZ\u0116","LAZDA","KIRTIS","KALAD\u0116","SODAS","VALD\u017dIA","SVARAS","RATAS","LAUKAS","CIKLAS","PRIETAISAS","KOTAS","\u017dVAK\u0116","MED\u017dIAGA","KATEDRA","PANEL\u0116","PADUGN\u0116S","KELIAS","PORA","UODEGA","L\u0118\u0160IS","R\u016aTA","LYNAS","B\u016aGNAS","KELMAS","ROMANAS","LAURAS","PLANAS","VIENUOLIS","AUDINYS","SIURBLYS","BANDA","KVAPAS","MOLIS","DANGUS","AM\u017dIUS","MI\u0160RAIN\u0116","\u017dVALGAS","LANKAS","VATA","AUKA","BOSAS","KRAUTUV\u0116","\u017dENKLAS","KRA\u0160TAS","GYSLA","V\u0116\u017dYS","SARGAS","ALK\u016aN\u0116","RO\u017d\u0116","MODELIS","TAMSA","KUBAS","VYRAS","ROKAS","SIERA","KLAS\u0116","\u0160IAUDAS","BLAK\u0116","VARNA","\u017dEL\u0116","VANAGAS","SPAUDA","SUMA","FENIKSAS","PLOK\u0160TEL\u0116","VIENETAS","LINIUOT\u0116","SPYNA","RA\u0160TAS","LAIDA","\u0160ERDIS","MENT\u0116","KRANAS","PRODUKTAS","J\u016aRA","PRIEKABA","KOSTIUMAS","ARAS","\u0160ALTINIS","\u012eTAMPA","S\u016aKURYS","BALIONAS","ATLANTAS","NA\u0160LAIT\u0116","FORMA","GUMA","KIRVIS","MUG\u0116","KAVALIERIUS","S\u0104SKAITA","\u0160AULYS","CILINDRAS","\u016aSAS","AMAZON\u0116","A\u0160IS","FONAS","S\u016aRIS","KINAS","KVADRATAS","GERV\u0116","PLUNKSNA","NAGAS","OPERACIJA","ODA","SROV\u0116","SPARNAS","PAP\u016aGA","D\u0116\u017d\u0116","KLUBAS","PROFILIS","PASIENIS","PAKETAS","DALYVIS","IRISAS","BALSAS","METRAS","\u012eRA\u0160AS","BRA\u0160K\u0116","\u0160AKNIS","\u0160A\u0160AS","TONAS","M\u0116LYN\u0116","LAI\u0160KAS","KAMIENAS","TU\u0160AS","KAMERA","PERK\u016aNAS","KOLORADAS","POSTAS"]},"lv":{"Codenames":["RULETE","P\u016a\u0136IS","KAR\u0160","MEDUS","BUMBA","KAZINO","DEBESSKR\u0100PIS","SATURNS","CITPLAN\u0112TIETIS","P\u0100TAGA","ANTARKT\u012aDA","SNIEGAV\u012aRS","KONCERTS","\u0160OKOL\u0100DE","LIDMA\u0160\u012aNA","MILJON\u0100RS","DINOZAURS","PIR\u0100TS","TAURE","PINGV\u012aNS","ZIRNEKLIS","RA\u0136ETE","V\u0112STNIEC\u012aBA","PISTOLE","SLIM\u012aBA","SPIEGS","PRINCESE","\u0122\u0112NIJS","ZAGLIS","OPERA","BRU\u0145INIEKS","STADIONS","LIMUZ\u012aNS","SPOKS","BUSI\u0145\u0160","SALD\u0112JUMS","L\u0100ZERS","N\u0100VE","SLIMN\u012aCA","\u0100TR\u0100 PAL\u012aDZ\u012aBA","ASTO\u0145K\u0100JIS","HELIKOPTERS","\u0136ENGURS","MIKROSKOPS","KENTAURS","SUPERVARONIS","TELESKOPS","IZPLETNIS","P\u012a\u013bKN\u0100BIS","OLIMPS","SATEL\u012aTS","E\u0145\u0122ELIS","ROBOTS","VIENRADZIS","RAGANA","Z\u0100\u0122IS","NIR\u0112JS","INDE","TILTS","UGUNS","GALDS","VALIS","M\u0112NESS","ZIVS","\u0100RSTS","BAZN\u012aCA","JOSTA","MEDM\u0100SA","V\u0112J\u0160","LAUVA","ACS","GAISS","TRUSIS","BANKA","Z\u0100LE","KLEITA","R\u016a\u0136IS","ME\u017dS","MA\u0160\u012aNA","CIMDS","\u0100BOLS","E\u013b\u013bA","PAV\u0100RS","L\u0100CIS","KA\u0136IS","DZ\u012aVE","VEIKSME","MILZIS","SEJA","PLUDMALE","VIESN\u012aCA","\u016aDENS","PAP\u012aRS","T\u0100RPS","ADVOK\u0100TS","ZIN\u0100TNIEKS","DEJA","BURK\u0100NS","KE\u010cUPS","NAKTS","KOKVILNA","P\u0112DA","PELE","NAZIS","TE\u0100TRIS","POLICIJA","KU\u0122IS","PILOTS","\u012aK\u0160\u0136IS","SKOLOT\u0100JS","PUDELE","DIENA","KARALIS","GL\u0100ZE","KARALIENE","ZOBS","SUNS","ZIRGS","KURPE","KR\u0112SLS","KRONIS","LEDUS","ZELTS","DAK\u0160A","LAIKS","FLAUTA","L\u0100PA","SNIEGS","ZILO\u0145KAULS","KARAV\u012aRS","PIRAM\u012aDA","SAITE","ZVAIGZNE","KR\u0112JUMS","NAGLA","SIRDS","BLOKS","KR\u0112SLA","ADATA","L\u012aNIJA","V\u0100KS","LAUKUMS","SL\u0112DZIS","EKR\u0100NS","SP\u0112LE","KLAUSULE","POGA","MUTE","L\u0100\u010cPL\u0112SIS","ROKA","GULTA","SIENA","TORNIS","K\u0100RTS","TAURI\u0145\u0160","STABURAGS","KRUSTS","T\u012aKLS","PUNKTS","D\u016aRE","BAN\u0100NS","CAURUMS","ZVANS","SP\u0112KS","ATSL\u0112GA","DZIN\u0112JS","VILNIS","STRAUME","GALVA","P\u0100LIS","CENTRS","AV\u0100RIJA","PASTA","CIRVIS","KODS","APLIS","BIETE","TRUBA","ASV","AUSTR\u0100LIJA","IGAUNIJA","LIETUVA","SIGULDA","J\u016aRMALA","AUZAS","LIEP\u0100JA","CEPLIS","RAINIS","HOLIVUDA","GAUJA","DAUGAVA","GAIZI\u0145KALNS","JODS","LATGALE","K\u0100POSTS","KURVIS","LASIS","ST\u0100R\u0136IS","PARTIJA","ANGLIJA","PI\u0136IS","\u0100FRIKA","SAULKRASTI","FRANCIJA","PAKAVS","KULD\u012aGA","NOVADS","SEREN\u0100DE","SKORPIONS","TEIKA","INDIJA","ZA\u0136IS","ZOLE","S\u0112RS","BRAZ\u012aLIJA","GARNADZIS","KRED\u012aTS","LAKTA","BITE","AIZSARGS","AKT\u012aVS","AKTS","ASS","ATZ\u012aME","AUGLIS","AUTS","AVOTS","\u0100MURS","BALLE","B\u0100ZE","BASS","BALSS","BURTS","BREMZE","CIETUMS","CILPA","CIRTA","DAILE","DARBS","DELTA","DISKS","DUMPIS","DZELZS","ETI\u0136ETE","FORMA","\u0112ZELIS","GAILIS","GALS","GARS","G\u0100ZE","GR\u0100DS","GROZS","GUMIJA","IEK\u0100RTA","JUMTS","KADRS","KAMERA","KAPTEINIS","KARTE","KAULI\u0145\u0160","KAUSS","K\u0100PA","K\u0100RE","KLASE","KLONS","KOKS","KOMANDA","KONTAKTS","KOP\u0112JS","KR\u0100NS","KR\u0112MS","KRU\u0136IS","KUKULIS","LAMA","\u0136IE\u0122ELIS","KURSS","LAPA","LAUKS","L\u0100PSTI\u0145A","LE\u0122ENDA","L\u0112CA","LIEC\u012aBA","LIETA","L\u012aGA","L\u012aMENIS","LOCEKLIS","LODE","LOKS","LOPS","LUPATA","MAGN\u0112TS","MAKSTS","MALA","MAPE","MARKA","MATS","M\u0100JA","MET\u0100LS","M\u0112LE","M\u0112R\u0136IS","M\u0112RS","M\u012aKLA","MODELIS","NOTS","ORDENIS","P\u0100REJA","P\u0100RSLA","PIENS","P\u012aR\u0100GS","PLECS","PLOSTS","POLS","PORT\u0100LS","POSTS","PR\u0100VA","PRESE","PROFILS","PROGRAMMA","PULKS","PULTS","PUSE","P\u016aRS","RADIK\u0100LIS","RAGS","RAJONS","RAKETE","RAKSTS","R\u0100MIS","RIBA","RIEKSTS","RIEPA","RIJA","RIPA","ROBE\u017dA","ROM\u0100NS","ROTA","RUMBA","SAKNE","SALA","SARS","SAVIENOJUMS","S\u0100LS","S\u0100RTS","SEKCIJA","S\u0112NE","SF\u0112RA","SIERI\u0145\u0160","SIETS","SKALS","SLIEDE","SLI\u0145\u0136IS","SLOTA","SPALVA","SP\u0100RE","ST\u0100VS","SPR\u012aDIS","SP\u0100RNS","STIENIS","STUDIJA","STUNDA","SUKA","SVECE","SVIESTS","TABLETE","TAKSIS","TAND\u0112MS","T\u0100FELE","TIESA","TONIS","TOSTS","TUPEL\u012aTE","TU\u0160A","T\u016aBI\u0145A","VADS","VAFELE","VALGS","V\u0100VERE","V\u0112ZIS","VILCIENS","VILKS","VISTA","V\u012aLE","V\u012aRS","Z\u0100BAKS","J\u0100\u0145I","ZEME","ZIEPES","Z\u012aL\u012aTE","Z\u012aME","ZV\u0112RS","AITA","ANAL\u012aZE","BAUDA","BR\u0100LIS","CILINDRS","DILLES","DR\u0100MA","UGUNSGR\u0112KS","GAMMA","K\u0112KSS"]},"no":{"Codenames":["RULETT","DRAGE","KRIG","HONNING","BOMBE","KASINO","SKYSKRAPER","SATURN","ROMVESEN","PISK","ANTARKTIS","SN\xd8MANN","KONSERT","SJOKOLADE","JETFLY","MILLION\xc6R","DINOSAUR","PIRAT","TROMPET","PINGVIN","EDDERKOPP","MISSIL","AMBASSADE","PISTOL","SYKDOM","SPION","PRINSESSE","GENI","TYV","OPERA","RIDDER","STADION","LIMOUSIN","SP\xd8KELSE","VAREBIL","ISKREM","LASER","D\xd8DEN","SYKEHUS","AMBULANSE","BLEKKSPRUT","HELIKOPTER","KENGURU","MIKROSKOP","KENTAUR","SUPERHELT","TELESKOP","FALLSKJERM","NEBBDYR","OLYMPIATOPP","SATELLITT","ENGEL","ROBOT","ENHJ\xd8RNING","HEKS","B\xd8DDEL","DYKKER","MOTORSAG","BRO","ILD","BORD","HVAL","M\xc5NE","FISK","LEGE","KIRKE","BELTE","SYKEPLEIER","VIND","L\xd8VE","\xd8YE","LUFT","KANIN","BANK","GRESS","DRESS","DVERG","SKOG","BIL","HANSKE","EPLE","OLJE","KOKE","BJ\xd8RN","KATT","LIV","HELL","ENORM","FJES","STRAND","HOTEL","VANN","PAPIR","ORM","ADVOKAT","FORSKER","DANS","GULROT","KETCHUP","NATT","BOMULL","FOT","MUS","KNIV","TEATER","POLITI","SKIP","PILOT","TOMMEL","L\xc6RER","FLASKE","DAG","BUE","KONGE","DRONNING","TANN","HUND","HEST","SKO","STOL","KRONE","IS","GULL","GAFFEL","TID","FL\xd8YTE","FAKKEL","SN\xd8","ELFENBEN","SOLDAT","PYRAMIDE","TR\xc5D","STJERNE","RING","VINGE","HJERTE","BLOKK","SLANGE","N\xc5L","LINJE","DEKKE","BRETT","BRYTER","SKJERM","STYKKE","PRIKK","KNAPP","MUNN","MERKE","H\xc5ND","SENG","VEGG","T\xc5RN","LEGG","KNUTE","DIAMANT","KORS","NETT","POENG","PASS","TALLERKEN","HULL","BJELLE","STYRKE","N\xd8KKEL","MOTOR","B\xd8LGE","STR\xd8M","HODE","STANG","SENTER","KOLLISJON","LIM","SPISS","KODE","SIRKEL","LENKE","PIPE","FJ\xc6R","RAMMER","BOR","RIS","JERN","SLAG","GRADER","RIM","RIVE","ARK","KASTE","SPAK","KART","SL\xc5","STR\xc5LE","REGN","ORDEN","PASSERE","SKUR","KULL","GRAV","POST","NEW YORK","AUSTRALIA","BERMUDA","TOKYO","EGYPT","LONDON","GRESSKAR","MOSKVA","CANADA","SHAKESPEARE","HOLLYWOOD","HELLAS","ROMA","HIMALAYA","NINJA","TSJEKKISK","KIWI","TYSKLAND","STAT","AMERIKA","ATLANTIS","ENGLAND","L\xd8NNETRE","AFRIKA","R\xd8DSTRUPE","FRANKRIKE","HESTESKO","NISSE","MEXICO","EUROPA","SKORPION","BERLIN","INDIA","ALPENE","LOCH NESS","BEIJING","\xd8RN","SMUGLER","AZTEK","PAI","D\xd8R","STEMME","ENDE","HATT","KORT","KAR","DRIVER","GLO","TANKE","MURER","VIFTE","TUR","VISER","PR\xd8VE","RASK","MASKE","TREKK","FIRE","SKILT","EKTE","BIND","FLY","TOMT","NETTO","MINE","SJEKK","BAR","GRUNN","REGLER","SPILL","KROK","KOST","B\xd8NNER","LAM","TUNGE","LETTE","LUR","BAD","LEVER","FULL","SAL","SKINKE","TRIKK","BY","STRYKE","SKINNER","DYR","KOSTE","\xd8RE","VEST","V\xc6R","F\xc5","ROSE","FRI","TINE","VALG","GIR","STAV","RETT","MARK","RIFT","LEKKER","BAND","RUTER","ROR","TAPET","GRUE","TEMA","ENDER","BALL","FINNE","GLASS","KJEMPE","LEIE","GANG","GARN","ROM","ERTER","NEVER","RIKE","STIGE","MODELL","LYS","TRIANGEL","UNGE","LOKK","VEKT","TANG","YR","MASSASJE","KOPPER","ARMB\xc5ND","TANKER","PRESSE","LIST","MALE","RUNDE","RETTER","R\xc5","MOT","BANKE","HELLER","GIFT","V\xc6RE","KRAN","FOR","DEKK","SL\xc5TT","BANE","EGG","PANNE","LYST","B\xc5T","FANT","HELT","LISTE","KJEDE","MANUAL","ROT","STAMME","REKKE","REGNING","SKUDD","KAM","SINGEL","VISA","TULLA","MUTTER","MASSE","GAL","RYKE","S\xd8KT","KASSE","TI","SPORER","SNELLE","P\xc5LEGG","ROGN","UNDERGANG","GODE","SELGER","SERVER","MEKTIG","OPPLAG","SKRUE","KRAKK","MATTE","KAPPER","TAPP","RUTE","SK\xc5L","ALT","RO","HUSKE","PORT","KRONEIS","HEL","PIL","OS","BOLLE"],"Codenames: Duett":["B\xd8TTE","BINDESTREK","HVALROSS","BRUS","FLAGG","HULE","MAUR","VAMPYR","TATOVERING","G\xc5RD","GRESSHOPPE","RIFLE","VIKING","SN\xd8STORM","SMINKE","KERAMIKERE","SMAK","BLUES","GOLF","FURUTRE","DUKKE","LUNSJ","SK\xd8YTER","FART\xd8Y","KIRKEBENK","PENN","SM\xd8R","PUTE","SLOTT","RULL","DISK","DRONE","HAMMER","GULV","FENGSEL","\xd8DELEGGE","BLONDER","LOMME","TINN","FLAT","GJ\xd8K","H\xc5R","GJ\xd8RME","GULLSMED","HERKULES","B\xd8RSTE","MYGG","ERT","ISLAND","FROST","VOGN","POTET","R\xd8KT","KAKE","SKILPADDE","JULEN","KIRSEB\xc6R","MOSES","LAG","STOKK","LYSP\xc6RE","KJEKS","SPRAY","PEPPER","MARIONETT","M\xd8LLE","MARACAS","SKUM","YELLOWSTONE","ISTID","HUKOMMELSE","GENSER","ESKE","BRILLER","PIZZA","S\xc5PE","BIG BEN","SLEDE","FIOLETT","BOBLE","SKJE","L\xd8K","LEGENDE","TANK","SHERLOCK","VIK","T\xd8RKETROMMEL","BROR","ROTE","HYLLE","FUGLESKREMSEL","NOTRE DAME","KILT","FELLE","BONSAI","EVENTYRLAND","GYNGE","EKORN","SLANG","MARATON","T\xc6R","POPCORN","GULLH\xc5R","LOFF","BIKINI","KYSS","FELE","L\xc6R","KYST","ASTRONAUT","SVART HULL","SAND","DR\xd8M","STETOSKOP","BABY","TIPI","MIL","DOMMER","VULKAN","NYLON","GITAR","BIE","TYGGIS","KRONESTYKKE","R\xd8YK","HJELM","KJ\xd8KKEN","SAHARA","REKORD","KL\xd8","SAUS","\xd8KS","MALING","SKALLE","T\xc5RE","KRYSTALL","NEWTON","MUGGE","BLAD","ASKE","HALSB\xc5ND","VINDU","T\xd8MMERHOGGER","KJ\xc6RLIGHET","SUPPE","BLEKK","GRANTRE","ELV","SFINKS","SHERWOOD","LYN","GEIT","KJELLER","KLEOPATRA","SALAT","MESSING","PLYSTRE","RIDENDE POLITI","S\xd8STER","INSTRUKT\xd8R","BREV","KAPTEIN","GNUKKE","KRABBE","MURSTEIN","EINSTEIN","HYMNE","MOHIKANER","LEIR","UNIVERSITET","JOKER","KU","SKYTE","DOLLAR","MINUTT","PASTA","H\xc6R","PENTAGON","BIG BANG","COLUMBUS","KLOKKE","SMED","JEANNE D\xb4ARC","ZOMBIE","SOMMERFUGL","HJUL","TANNLEGE","OST","JORD","NAPOLEON","TEXAS","GATE","FEBER","T\xc5KE","BARBERH\xd8VEL","KABEL","GUVERN\xd8R","COWBOY","KONG ARTHUR","BRUD","CAESAR","DRIVHUS","ST\xd8V","T\xd8FFEL","TROLL","SKJELVE","VOLUM","SKI","RUSSLAND","PERLE","STILLEHAVET","STEKE","P\xc5SKE","KVART","MIKROB\xd8LGEOVN","DUSJ","DRIVSTOFF","JORDSKJELV","KR\xc5KE","TRYLLEKUNSTNER","NERVE","TORDEN","MUSKETER","ISBRE","PULVER","RULLE","VARULV","TIARA","ANDRE","BUNKRE","SKJEGG","DAMP","SKY","VALENTINE","KLISTREMERKE","LEDNING","SLAGSKIP","KAMP","FR\xd8","VIRUS","TORNADO","SYKKEL","PAPEG\xd8YE","HAMBURGER","TEGN","NOA","TROLLMANN","PARADE","FORKLE","KARRI","SKINNE","SKRIVEBORD","SADEL","ROTTE","BACON","GUMMI","PASIENT","SAG","OASE","VENUS","BENK","RAKE","OLAV DEN HELLIGE","VEI","KRITT","TURNER","METER","RODEO","SILKE","KAFFE","JOCKEY","SMOOTHIE","SALSA","SEIL","ULL","TUNNEL","HAGE","LUKT","LEM","TRE","LAND","ELEFANT","SKADE","BLIND","SQUASH","MOR","TEGNING","REKKVERK","BOMME","VESKE","IGLO","LEPPE","APE","BOWLER","SVETTE","SJ\xc5F\xd8R","DELTA","SALT","DOVENDYR","LOFT","ST\xc5L","KORTBUKSE","STORM","RULLESTOL","STALL","NAV","BALLONG","GRILL","TUTU","BASS","HAWAII","SENNEP","HELBREDE","MANET","ALASKA","\xd8L","MONA LISA","JORDBRUK","KORSFARER","TRIKS","TRAU","SKITTENT\xd8Y","POLO","TOAST","RUSTNING","TE","REINSDYR","SUMO","BR\xd8D","ESS","RUST","\xd8NSKE","KNYTE","KJEGLE","BRASIL","GJEMME","HALLOWEEN","JULENISSE","HJERNE","TREFFE","HUS","PEAN\xd8TT","SKJELL","TIPS","SVERD","SPEIL","\xc5RE","BRUDGOM","SIDE","\xc5PNE","B\xd8NNE","BIT","KOMET","GRIS","HISTORIE","MAGASIN","REGNBUE","SEKK","BUKK","SUKKER","SOL","TERNING","BANAN","RADIO","DRESSING","SUMP","MANIKYR","OVERSV\xd8MME","STEMPLE","KJERRE","TIGER","COMPUTER","SERVIT\xd8R","FERSKEN","HOMER","BOKSER","EDENS HAGE","S\xd8VN","MINOTAUR","BRYLLUP","KUNG FU","MUMIE","STEG","SOPP","GANGSTER","MELK","FROSK","SJAMPO","SMOKING","PAPP","SN\xd8SKRED","TAU","SJEF","SPARK","BOK","\xc5ND","SKULDER","ANKER","NESE","TROMME"]},"pt":{"C\xf3digo Secreto":["ROLETA","DRAG\xc3O","GUERRA","DOCINHO","BOMBA","CASINO","ARRANHA-C\xc9U","SATURNO","ALIEN\xcdGENA","CHICOTE","ANT\xc1RTICA","ESPANTALHO","CONCERTO","CHOCOLATE","JATO","MILION\xc1RIO","DINOSSAURO","PIRATA","TROMPA","PINGUIM","ARANHA","M\xcdSSIL","EMBAIXADA","PISTOLA","DOEN\xc7A","ESPI\xc3O","PRINCESA","FADA","LADR\xc3O","\xd3PERA","CAVALEIRO","EST\xc1DIO","LIMUSINE","FANTASMA","FURG\xc3O","SORVETE","LASER","MORTE","HOSPITAL","AMBUL\xc2NCIA","POLVO","HELIC\xd3PTERO","CANGURU","MICROSC\xd3PIO","CENTAURO","SUPER-HER\xd3I","TELESC\xd3PIO","PARA-QUEDAS","OURI\xc7O","OLIMPO","SAT\xc9LITE","ANJO","ROB\xd4","UNIC\xd3RNIO","BRUXA","COVEIRO","MERGULHADOR","VENENO","PONTE","FOGO","MESA","BALEIA","LUA","PEIXE","DOUTOR","IGREJA","CINTO","ENFERMEIRA","VENTO","LE\xc3O","OLHO","AR","COELHO","BANCO","GRAMA","VESTIDO","AN\xc3O","FLORESTA","CARRO","LUVA","MA\xc7\xc3","\xd3LEO","COZINHEIRO","URSO","GATO","VIDA","SORTE","GIGANTE","ROSTO","PRAIA","HOTEL","\xc1GUA","PAPEL","VERME","ADVOGADO","CIENTISTA","DAN\xc7A","CENOURA","KETCHUP","NOITE","ALGOD\xc3O","P\xc9","RATO","FACA","TEATRO","POL\xcdCIA","BARCO","PILOTO","POLEGAR","PROFESSOR","GARRAFA","DIA","REI","VIDRO","RAINHA","DENTES","CACHORRO","CAVALO","SAPATO","CADEIRA","COROA","GELO","OURO","GARFO","HORA","FLAUTA","TOCHA","NEVE","MARFIM","SOLDADO","PIR\xc2MIDE","ESCADA","ESTRELA","ANEL","BUZINA","CORA\xc7\xc3O","BLOCO","TUBO","AGULHA","LINHA","COBERTURA","TABULEIRO","INTERRUPTOR","TELA","PE\xc7A","LOCAL","BOT\xc3O","BOCA","FAIXA","M\xc3O","CAMA","PAREDE","TORRE","CARTA","GRAVATA","DIAMANTE","CRUZ","REDE","PONTO","PASSE","PLACA","BURACO","SINO","FOR\xc7A","CHAVE","MOTOR","ONDA","CORRENTE","CABE\xc7A","CABO","CENTRO","BATIDA","PASTA","CRAVO","C\xd3DIGO","C\xcdRCULO","LIGA\xc7\xc3O","CANO","CHICAGO","AUSTR\xc1LIA","BERMUDA","T\xd3QUIO","EGITO","LONDRES","EST\xc1TUA","PARIS","CANAD\xc1","SHAKESPEARE","HOLLYWOOD","GR\xc9CIA","ROMA","HIMALAIA","NINJA","BRASIL","COPACABANA","ALEMANHA","ESTADO","AM\xc9RICA","ATL\xc2NTIDA","INGLATERRA","MACACO","\xc1FRICA","ENCANTO","CERCA","TUBAR\xc3O","EXAME","M\xc9XICO","GOLPE","ESCORPI\xc3O","BERLIM","FAVELA","ALPES","LOCH NESS","PEQUIM","MONTE","COLHER","ASTECA","REDENTOR","FONTE","SELO","FURADOR","GRA\xc7A","FERRO","LEITO","ACORDE","BARRA","VERDE","APERTO","MARCHA","CHUMBO","AGENDA","SUPORTE","RAIO","BALA","LIM\xc3O","ESPECTRO","BOTA","DADOS","JUPITER","SECRET\xc1RIA","BATERIA","ESPINHA","NUCLEAR","AGENTE","BAIXA","CONTRABANDO","OPERA\xc7\xc3O","\xcdNDIA","CADEIA","CANTO","JORNADA","CAPITAL","PANCADA","COBRE","CONTAR","DOBRAR","R\xc1DIO","TERRA","FANTASIA","EL\xc9TRICO","PISTA","LANCE","MANGA","MINA","FRAN\xc7A","BAR","L\xcdQUIDO","RUSSO","JOGO","TEMPO","PARQUE","GANHAR","SEGURO","SERRA","PATO","CONDUTOR","LIBRA","RODA","CAMPO","PILHA","PAC\xcdFICO","PROVA","FOSSA","M\xc1SCARA","CURSO","CONTROLE","CORTINA","SOLO","RECEITA","GARRA","LICEN\xc7A","FIO","G\xc1S","LEVE","TRONCO","ROMANCE","GR\xc3O","TRAMA","PRA\xc7A","CORREIO","TANQUE","BANDA","TACO","CURA","CORTE","PASSO","CANELA","FOLHA","DROGA","MERC\xdaRIO","ARCO","REVOLVER","LOJA","SEGREDO","CONTRATO","PLANTA","PORTO","COMPANHIA","BRA\xc7O","\xc1REA","MODELO","LUZ","TRIANGULO","GAROTO","RECIFE","ESCAMA","MANTO","PALHA","\xc1GUIA","TEIA","ESTA\xc7\xc3O","FALC\xc3O","VELA","BATER","GRANADA","BARRAGEM","LABORAT\xd3RIO","REGENTE","CACHO","TOUPEIRA","WASHINGTON","SENTEN\xc7A","PALMA","FORTALEZA","REVOLU\xc7\xc3O","TOMADA","DURO","METRO","APANHAR","PENA","DIREITO","VALA","ORG\xc3O","EUROPA","TERMINAL","L\xcdNGUA","GRILO","NASCENTE","FEIRA","VARA","NOTA","DOSE","DEP\xd3SITO","VOLTA","AMAZONAS","ESPA\xc7O","PARTE","MASSA","CHINA","ROSA","PRESA","CAMINHO","CORPO","CARGA","MEIO","PERU","PLANO","CA\xc7A","CAIXA","BASE","SERVIDOR","CELA","COMPOSTO","PL\xc1STICO","BOLSA","TOM","QUEDA","MISS\xc3O","MEIA","RAIZ","C\xd3LERA","NEGATIVO","BALAN\xc7O","GUARDA","CASCA","CAL\xc7A","FILME","FIGURA","LARANJA","POSTO"],"C\xf3digo Secreto: Dueto":["TAMBOR","TARDE","EX\xc9RCITO","NAMORADA","BANHO","SEDA","SERPENTE","TINTA","TRUQUE","GANGSTER","ENCHENTE","GOMA","TESTEMUNHA","MULETA","ESP\xcdRITO","BONECA","PAV\xc3O","L\xc1PIS","CAPACETE","TERNURA","PEL\xcdCULA","COSTA","CHUVEIRO","AFOITO","M\xc1GICO","MANCHA","N\xd3","CANETA","NEWTON","P\xc9ROLA","RENDA","TRILOGIA","P\xc1GINA","AMOR","ASSENTO","LENHADOR","LAMA","GINASTA","CORD\xc3O","VIKINGS","BOLHA","ERVA","SECADOR","\xc1S","TEXAS","ESQUILO","SALSA","SAIA","CAPIT\xc3O","BOSQUE","TREINADOR","GIZ","DI\xc1RIO","\xc2NCORA","\xd3CULOS","L\xc1BIO","COBRA","BICHO","MINOTAURO","TOPO","UVA","BONSAI","LIMA","BAL\xc3O","ARTIGO","BACON","TABELA","ALMOFADA","REGRA","DUENDE","CADEIRA DE RODAS","FICHA","BISCOITO","CHEIRO","NO\xc9","PA\xcdS","BALDE","FORMUL\xc1RIO","CAVERNA","MOSQUETEIRO","L\xc1GRIMA","NYLON","GOTA","ALIAN\xc7A","CERVEJA","L\xc2MPADA","CAF\xc9","LABIRINTO","GUITARRA","PERUCA","P\xc2NTANO","EIXO","TROV\xc3O","SAL\xc3O","ESPELHO","MOIS\xc9S","POTE","BELICHE","BRANCO","PAPAGAIO","CHAMA","PEDRA","JUIZ","CUCO","TAMPA","TREN\xd3","EST\xc1BULO","CINZAS","FITA","LENTES","M\xc9DICO","PRENSA","QUADRO","P\xcaSSEGO","LEITE","CASCO","NOIVA","CORREDOR","LATA","MEDUSA","POLIDO","C\xc9REBRO","ESFINGE","TERREMOTO","EINSTEIN","POEIRA","JARRO","CEGO","CABINE","ORDEM","GOVERNADOR","JANELA","FERREIRO","EL\xc1STICO","LANTERNA","TELEVIS\xc3O","MORTEIRO","M\xdaMIA","ASTRONAUTA","JULGAMENTO","CASTELO","BAIXO","ESTETOSC\xd3PIO","ELEFANTE","SEGUNDO","HINO","PORTA","MINUTO","REVISTA","CH\xc1","DRONE","VACA","PENT\xc1GONO","CABELO","CARNAVAL","P\xc1SCOA","MOINHO","FESTA","VAPOR","SOVINA","NILO","COMPUTADOR","THOR","CEBOLA","GORJETA","BA\xcdA","CEREJA","FERIADO","FRALDA","PIPOCA","HAMBURGER","UNIVERSIDADE","CHINELO","ESTRADA","REL\xc2MPAGO","CHOQUE","CORVO","\xc1RVORE","G\xd4NDOLA","SANTA","ABELHA","VIOLINISTA","DESTINO","MARATONA","ENTRADA","COMIDA","ETIQUETA","RIO","AVENTAL","CARAVANA","SABRE","CABANA","MONITOR","BEBIDA","COZINHA","ESTUFA","CR\xc2NIO","SAL","MANGUEIRA","JOALHEIRO","COLUNA","CARAMELO","CUBO","CRUZADO","S\xd3T\xc3O","BANANA","RASPAR","AREIA","S\xc9RIE","DENTE","SKATE","ARGENTINA","PORCO","PIMENTA","DAMA","A\xc7\xdaCAR","MADEIRA","CABRA","C\xc9SAR","P\xc3O","PASTEL","BATALHA","COLOMBO","MEM\xd3RIA","VOLUME","SIRENE","TARTARUGA","CONCHA","PERGAMINHO","LIVRO","SAB\xc3O","MAPA","BIG BANG","COMBUST\xcdVEL","LISTA","TIJOLO","GANCHO","SINAL","CANAL","LANCHE","IMPERADOR","NERVO","NOTRE DAME","TORNADO","AVI\xc3O","VAMPIRO","DESENHO","GAFANHOTO","JARDIM","GOLFO","CRISTAL","CAPA","MONA LISA","COURO","CARRUAGEM","CARANGUEJO","TOQUE","MACHADO","RANCHO","D\xd3LAR","PRIS\xc3O","COLA","TECLADO","ESPADA","REL\xd3GIO","N\xc9VOA","DOCA","CAVEIRA","O\xc1SIS","SONO","MARIONETE","ARMADURA","ADESIVO","BEIJO","CASA","T\xdaNEL","CHEFE","METEORO","CASAMENTO","NAVE","MORSA","VIOLETA","SALTO","CARREIRA","COMETA","TORTA","CONFUS\xc3O","NATAL","MOSQUITO","BRINDE","OBRA","BAILE","INVERNO","PREGUI\xc7A","L\xc2MINA","PINHA","CINTUR\xc3O","RODA-GIGANTE","CONE","MOLHO","TEMPESTADE","QUARTA","OMBRO","BOLSO","MOTORISTA","CI\xcaNCIA","M\xc3E","QUEIJO","V\xc1CUO","PESCO\xc7O","TALCO","LOBISOMEM","MANTEIGA","COMANDO","BOLA","TORRADA","VULC\xc3O","DISCO","CLASSE","REMO","ELFO","NUVEM","EST\xdaDIO","FAZENDA","CORNETA","TENDA","SALGADO","GOSTO","CLE\xd3PATRA","ASA","NARIZ","PESCA","BANDEIRA","ERVILHA","MANICURE","ARCO-\xcdRIS","AMENDOIM","QUILO","MURO","CHUVA","FERRUGEM","FAROL","BORBOLETA","MILHA","SAPO","OVO","H\xc9RCULES","TATUAGEM","FOSSO","GOLFE","OUVIDO","M\xd3DULO","PIZZA","MICROONDAS","SOL","PELOT\xc3O","ALASCA","FEIJ\xc3O","FRENTE","PENTE","BATATA","PLUMA","FEBRE","ESPINGARDA","BICICLETA","CHURRASCO","MARTELO","AVALANCHE","TIGRE","GRADE","LASCA","BIQU\xcdNI","VIGA","SONHO","CARA","FAM\xcdLIA","CHAP\xc9U","PARADA","PACIENTE","ISL\xc2NDIA","IRM\xc3O","FORMIGA","FLECHA","\xc9DEN","ARROZ","L\xc3","V\xcdRUS","A\xc7O","SUOR","PULSO","CHIFRE","MOSTARDA","LIMONADA","CEMIT\xc9RIO","VOLANTE","VERMELHO","SALADA","ROLAR","GRIFO","LAREIRA"]},"ru":{"K\u043e\u0434\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u043d\u0430":["\u041a\u0410\u0420\u0410\u0423\u041b","\u0421\u0422\u0410\u041d\u041e\u041a","\u0410\u0413\u0415\u041d\u0422","\u041f\u041e\u041b","\u041f\u041e\u041b\u0418\u0421","\u0417\u0410\u041f\u0410\u0414","\u042e\u041f\u0418\u0422\u0415\u0420","\u041a\u0420\u0415\u0421\u0422","\u041f\u0420\u041e\u0412\u041e\u0414\u041d\u0418\u041a","\u042f\u0417\u042b\u041a","\u0417\u0410\u041c\u041e\u041a","\u0417\u0410\u042f\u0426","\u041a\u041e\u041d\u0415\u041a","\u0421\u0418\u041b\u0410","\u041f\u0420\u041e\u0411\u041a\u0410","\u0412\u042b\u0421\u041e\u0422\u0410","\u0421\u041c\u0415\u0420\u0422\u042c","\u0421\u0422\u0412\u041e\u041b","\u0414\u0420\u041e\u0411\u042c","\u0414\u0415\u041a\u0420\u0415\u0422","\u041f\u041e\u0422\u041e\u041a","\u0421\u041e\u0411\u0410\u041a\u0410","\u041e\u041f\u0415\u0420\u0410","\u041a\u041b\u042e\u0427","\u041a\u041e\u041d\u0426\u0415\u0420\u0422","\u0413\u0410\u041b\u041e\u041f","\u041c\u0410\u0422","\u042d\u041a\u0420\u0410\u041d","\u0411\u041b\u0418\u041d","\u0417\u0412\u0415\u0417\u0414\u0410","\u0413\u0420\u0415\u0411\u0415\u041d\u042c","\u0410\u041f\u041f\u0410\u0420\u0410\u0422","\u0417\u041e\u041d\u0410","\u0413\u0420\u0418\u0424","\u0428\u041f\u0418\u041e\u041d","\u0412\u041e\u0420","\u041f\u0410\u0414\u0415\u041d\u0418\u0415","\u0422\u0415\u0427\u0415\u041d\u0418\u0415","\u0412\u041e\u041b\u041d\u0410","\u041d\u041e\u041c\u0415\u0420","\u041b\u041e\u0416\u0415","\u0410\u0412\u0422\u041e\u041c\u0410\u0422","\u041f\u041e\u041a\u0420\u041e\u0412","\u0418\u0413\u041b\u0410","\u041b\u0418\u041d\u0418\u042f","\u0421\u0422\u041e\u041f\u0410","\u041c\u042b\u0428\u042c","\u041f\u0420\u041e\u0421\u041f\u0415\u041a\u0422","\u041f\u0410\u041b\u0415\u0426","\u041f\u0418\u041b\u041e\u0422","\u0411\u0410\u0428\u041d\u042f","\u0411\u041e\u041b\u042c\u041d\u0418\u0426\u0410","\u0422\u041e\u0427\u041a\u0410","\u0420\u041e\u0411\u041e\u0422","\u0414\u0423\u041c\u0410","\u041c\u0410\u0421\u0421\u0410","\u041d\u041e\u0427\u042c","\u0423\u0427\u0418\u0422\u0415\u041b\u042c","\u0411\u0423\u0422\u042b\u041b\u041a\u0410","\u0421\u0423\u041f\u0415\u0420\u0413\u0415\u0420\u041e\u0419","\u041b\u0423\u041a","\u041f\u0415\u0420\u0427\u0410\u0422\u041a\u0410","\u0411\u0410\u0417\u0410","\u041a\u041e\u0428\u041a\u0410","\u0418\u041d\u0421\u0422\u0418\u0422\u0423\u0422","\u041f\u0410\u0421\u0421\u0410\u0416","\u0422\u0420\u0410\u0412\u0410","\u041f\u041b\u0410\u0422\u042c\u0415","\u041f\u041e\u0421\u041e\u041b\u042c\u0421\u0422\u0412\u041e","\u041b\u0415\u0412","\u041a\u0420\u041e\u0428\u041a\u0410","\u0411\u041b\u041e\u041a","\u0410\u041d\u0413\u0415\u041b","\u041a\u041e\u041d\u0422\u0420\u0410\u0411\u0410\u041d\u0414\u0418\u0421\u0422","\u041f\u041e\u041c\u0415\u0422","\u041b\u041e\u041d\u0414\u041e\u041d","\u0415\u0414\u0418\u041d\u041e\u0420\u041e\u0413","\u041c\u0415\u0414\u0412\u0415\u0414\u042c","\u041c\u0415\u0421\u0422\u041e","\u041f\u041e\u0412\u0410\u0420","\u0412\u0415\u0414\u042c\u041c\u0410","\u0414\u0415\u041d\u042c","\u0412\u0415\u041a","\u0412\u041e\u0414\u0410","\u0411\u041e\u0422\u0418\u041d\u041e\u041a","\u041f\u0410\u0423\u041a","\u0421\u041e\u0421\u0422\u0410\u0412","\u041a\u041e\u0420\u0410","\u0421\u0422\u0415\u041a\u041b\u041e","\u0421\u041d\u0410\u0420\u042f\u0414","\u0414\u042f\u0422\u0415\u041b","\u0411\u0423\u041c\u0410\u0413\u0410","\u041c\u041e\u0421\u0422","\u041f\u0410\u041d\u0415\u041b\u042c","\u0410\u0426\u0422\u0415\u041a","\u0427\u0410\u0421\u0422\u0418\u0426\u0410","\u041e\u0411\u041b\u041e\u041c","\u0420\u041e\u041a","\u041b\u0423\u041d\u0410","\u041f\u0410\u0420\u041a","\u0424\u0410\u041a\u0415\u041b","\u042f\u041a\u041e\u0420\u042c","\u0412\u0415\u0420\u0422\u041e\u041b\u0415\u0422","\u041f\u0420\u0418\u0417\u0420\u0410\u041a","\u041b\u0410\u0417\u0415\u0420","\u0416\u0418\u0417\u041d\u042c","\u0413\u041e\u0420\u041d","\u0421\u0421\u042b\u041b\u041a\u0410","\u0411\u0415\u0420\u041b\u0418\u041d","\u041e\u0411\u0420\u0410\u0417","\u0422\u0418\u0422\u0410\u041d","\u041a\u0420\u042b\u041b\u041e","\u041a\u041e\u0421\u042f\u041a","\u041a\u0410\u0411\u0418\u041d\u0415\u0422","\u041f\u0410\u0420\u0410","\u042f\u0421\u041b\u0418","\u041f\u0418\u0420\u0410\u0422","\u0420\u0410\u0421\u0422\u0412\u041e\u0420","\u0417\u0415\u041c\u041b\u042f","\u041c\u041e\u0421\u041a\u0412\u0410","\u041c\u0418\u041a\u0420\u041e\u0421\u041a\u041e\u041f","\u041e\u0422\u0415\u041b\u042c","\u0411\u041e\u041b\u0415\u0417\u041d\u042c","\u041f\u041e\u041b\u0415","\u042d\u0424\u0418\u0420","\u041b\u0423\u0427","\u041e\u041b\u0418\u041c\u041f","\u0410\u041d\u0413\u041b\u0418\u042f","\u0421\u041d\u0415\u0413\u041e\u0412\u0418\u041a","\u041c\u0415\u041b\u041e\u0427\u042c","\u041d\u0410\u041b\u0415\u0422","\u0421\u0415\u0420\u0414\u0426\u0415","\u0416\u0418\u041b\u0410","\u041a\u0410\u0412\u0410\u041b\u0415\u0420","\u0411\u0410\u0420\u042c\u0415\u0420","\u0416\u0423\u041a","\u041b\u0415\u0414","\u0421\u0422\u041e\u041b","\u041a\u0410\u0417\u0418\u041d\u041e","\u041a\u0420\u0410\u041d","\u041f\u0415\u0420\u041e","\u041a\u041e\u0420\u041e\u041b\u042c","\u041c\u0423\u0428\u041a\u0410","\u0411\u041e\u041c\u0411\u0410","\u0420\u0410\u0417\u0412\u041e\u0414","\u0410\u0424\u0420\u0418\u041a\u0410","\u0421\u0410\u041b\u042e\u0422","\u041a\u0423\u0420\u0421","\u0415\u0413\u0418\u041f\u0415\u0422","\u0410\u041b\u042c\u0411\u041e\u041c","\u041a\u041e\u0420\u041e\u041d\u0410","\u0415\u0412\u0420\u041e\u041f\u0410","\u0420\u0423\u041b\u0415\u0422\u041a\u0410","\u0413\u0415\u0420\u041c\u0410\u041d\u0418\u042f","\u041f\u0418\u0420\u0410\u041c\u0418\u0414\u0410","\u0423\u0420\u041d\u0410","\u0420\u0423\u0411\u0410\u0428\u041a\u0410","\u0420\u0418\u041c","\u041a\u041e\u041b\u041e\u041d\u041d\u0410","\u0413\u0420\u0415\u0426\u0418\u042f","\u0411\u041e\u0427\u041a\u0410","\u041a\u0420\u0423\u0413","\u0424\u0420\u0410\u041d\u0426\u0418\u042f","\u0421\u0415\u0422\u042c","\u041f\u0418\u0421\u0422\u041e\u041b\u0415\u0422","\u0412\u0420\u0415\u041c\u042f","\u041e\u0411\u0420\u0415\u0417","\u041a\u0423\u041b\u0410\u041a","\u0411\u041e\u0420\u0422","\u041c\u0418\u0420","\u0422\u041e\u041a\u0418\u041e","\u0413\u041e\u041b\u041e\u0412\u0410","\u041a\u041e\u0420\u041e\u041b\u0415\u0412\u0410","\u0421\u0422\u0420\u0415\u041b\u0410","\u0412\u041e\u0416\u0414\u042c","\u0411\u0410\u041d\u041a","\u0414\u0420\u0410\u041a\u041e\u041d","\u042f\u0414","\u041f\u0410\u041b\u0410\u0422\u0410","\u0414\u041e\u041a\u0422\u041e\u0420","\u041a\u041b\u0415\u0422\u041a\u0410","\u0413\u041e\u041b\u041b\u0418\u0412\u0423\u0414","\u0421\u0415\u041a\u0420\u0415\u0422","\u0412\u041e\u0419\u041d\u0410","\u0421\u041e\u041b\u0414\u0410\u0422","\u041e\u0413\u041e\u041d\u042c","\u0428\u0422\u0410\u0422","\u041a\u0418\u0422\u0410\u0419","\u0410\u0422\u041b\u0410\u041d\u0422\u0418\u0414\u0410","\u0418\u041d\u0414\u0418\u042f","\u0410\u041b\u042c\u041f\u042b","\u041f\u0415\u041a\u0418\u041d","\u0421\u0422\u0420\u041e\u0419","\u041f\u0420\u041e\u0424\u0418\u041b\u042c","\u041c\u0415\u041a\u0421\u0418\u041a\u0410","\u0428\u041f\u0410\u0413\u0410\u0422","\u041d\u041e\u0420\u041a\u0410","\u0426\u0415\u0420\u041a\u041e\u0412\u042c","\u0422\u0415\u0410\u0422\u0420","\u0410\u041d\u0422\u0410\u0420\u041a\u0422\u0418\u0414\u0410","\u041e\u0412\u0421\u042f\u041d\u041a\u0410","\u041f\u041e\u0427\u041a\u0410","\u041a\u041e\u041b\u041e\u0414\u0410","\u0412\u0415\u0420\u0424\u042c","\u0417\u0410\u041f\u0410\u0425","\u0420\u0423\u041a\u0410\u0412","\u0414\u0415\u0421\u041d\u0410","\u041f\u0410\u0427\u041a\u0410","\u0423\u0422\u041a\u0410","\u0413\u0410\u0417","\u041e\u0421\u042c\u041c\u0418\u041d\u041e\u0413","\u0421\u0410\u041d\u0422\u0415\u0425\u041d\u0418\u041a","\u0410\u0417\u0418\u042f","\u041f\u041b\u042f\u0416","\u0420\u041e\u0414","\u041a\u041e\u041a\u0415\u0422\u041a\u0410","\u0416\u0423\u0420\u0410\u0412\u041b\u042c","\u041a\u0410\u0428\u0410","\u041f\u0420\u0418\u0428\u0415\u041b\u0415\u0426","\u0420\u0410\u041a\u041e\u0412\u0418\u041d\u0410","\u041f\u041e\u0414\u041a\u041e\u0412\u0410","\u041c\u041e\u0420\u041a\u041e\u0412\u042c","\u041c\u0410\u0421\u041b\u041e","\u0411\u0415\u0420\u0415\u0417\u0410","\u0427\u0415\u0420\u0412\u042c","\u0414\u0418\u0421\u041a","\u041a\u0418\u0412\u0418","\u0411\u0410\u041d\u042f","\u041f\u041e\u0420\u041e\u0414\u0410","\u0420\u042b\u0421\u042c","\u0421\u0412\u0418\u0414\u0415\u0422\u0415\u041b\u042c","\u0414\u0410\u041c\u0410","\u0422\u0410\u0420\u0415\u041b\u041a\u0410","\u041a\u041e\u041b\u042c\u0426\u041e","\u041a\u041e\u0421\u0410","\u041b\u041e\u0428\u0410\u0414\u042c","\u041a\u041e\u041b","\u041a\u041e\u041c\u0410\u041d\u0414\u0410","\u0420\u041e\u0413","\u041e\u0420\u0415\u041b","\u0412\u0418\u041b\u041a\u0410","\u0412\u0417\u0413\u041b\u042f\u0414","\u0417\u041d\u0410\u041a","\u041a\u0415\u0422\u0427\u0423\u041f","\u0411\u0420\u0410\u041a","\u041f\u0415\u0420\u0415\u041c\u0415\u041d\u0410","\u0424\u041e\u0420\u041c\u0410","\u041a\u0418\u0421\u0422\u042c","\u0426\u0415\u041d\u0422\u0420","\u0417\u041e\u041b\u041e\u0422\u041e","\u0428\u041e\u041a\u041e\u041b\u0410\u0414","\u041f\u0420\u0418\u041d\u0426\u0415\u0421\u0421\u0410","\u0423\u0422\u041a\u041e\u041d\u041e\u0421","\u0425\u041b\u041e\u041f\u041e\u041a","\u041a\u041e\u0420\u0410\u0411\u041b\u042c","\u0421\u0422\u0410\u041d","\u041c\u0415\u0425\u0410\u041d\u0418\u0417\u041c","\u0422\u0420\u0423\u0411\u0410","\u0411\u0410\u0411\u041e\u0427\u041a\u0410","\u0422\u0410\u041a\u0421\u0410","\u041f\u0423\u0422\u042c","\u041f\u0420\u041e\u041a\u0410\u0417\u0410","\u0421\u0422\u0423\u041b","\u041f\u0420\u041e\u041a\u0410\u0422","\u0420\u042b\u0411\u0410","\u0417\u0423\u0411","\u0421\u0410\u0422\u0423\u0420\u041d","\u041a\u0410\u0420\u0422\u0410","\u0411\u041e\u041a\u0421","\u0424\u041b\u0415\u0419\u0422\u0410","\u0414\u042b\u0420\u0410","\u041f\u0420\u0415\u0414\u041f\u0420\u0418\u041d\u0418\u041c\u0410\u0422\u0415\u041b\u042c","\u0411\u0420\u0415\u0412\u041d\u041e","\u0417\u0410\u041d\u041e\u0417\u0410","\u041d\u041e\u0416","\u041f\u0420\u0418\u0412\u041e\u0414","\u0411\u0418\u0420\u0416\u0410","\u041f\u0410\u0420\u0410\u0428\u042e\u0422","\u041f\u0418\u041d\u0413\u0412\u0418\u041d","\u0422\u0415\u041b\u0415\u0421\u041a\u041e\u041f","\u041d\u0415\u0411\u041e\u0421\u041a\u0420\u0415\u0411","\u0420\u0410\u041a","\u0412\u0410\u0413\u041e\u041d","\u041f\u041b\u0410\u0422\u0410","\u0421\u041f\u0423\u0422\u041d\u0418\u041a","\u041b\u0418\u041c\u0423\u0417\u0418\u041d","\u041d\u0418\u041d\u0414\u0417\u042f","\u0418\u0413\u0420\u0410","\u041d\u042f\u041d\u042f","\u041e\u0411\u0420\u0410\u0417\u041e\u0412\u0410\u041d\u0418\u0415","\u0421\u0415\u041a\u0426\u0418\u042f","\u041a\u0415\u041d\u0422\u0410\u0412\u0420","\u0422\u0423\u0411\u0410","\u041c\u0418\u041b\u041b\u0418\u041e\u041d\u0415\u0420","\u041f\u0420\u0418\u0411\u041e\u0420","\u0410\u0414\u0412\u041e\u041a\u0410\u0422","\u0410\u041c\u0415\u0420\u0418\u041a\u0410","\u041b\u0418\u041f\u0410","\u0423\u0414\u0415\u041b","\u0418\u041a\u0420\u0410","\u0413\u0420\u0423\u0428\u0410","\u0414\u0418\u041d\u041e\u0417\u0410\u0412\u0420","\u041f\u0420\u0415\u0414\u041b\u041e\u0416\u0415\u041d\u0418\u0415","\u0420\u0410\u0417\u0412\u041e\u0420\u041e\u0422","\u0428\u0423\u0411\u0410","\u041f\u041e\u042f\u0421","\u041e\u0411\u041b\u0410\u0421\u0422\u042c","\u0411\u042b\u041a","\u0415\u0420\u0428","\u041c\u041e\u0420\u041e\u0416\u0415\u041d\u041e\u0415","\u0422\u0423\u0420","\u0421\u041e\u041b\u042c","\u0420\u042b\u0426\u0410\u0420\u042c","\u0417\u0415\u0411\u0420\u0410","\u0421\u041a\u0410\u0422","\u041b\u0410\u0414","\u0423\u0414\u0410\u0420\u041d\u0418\u041a","\u041a\u0410\u0420\u041b\u0418\u041a","\u041a\u0415\u041d\u0413\u0423\u0420\u0423","\u0424\u0418\u0413\u0410","\u0412\u0410\u041b","\u041c\u0401\u0414","\u041b\u0415\u0419\u041a\u0410","\u041a\u0418\u0422","\u0410\u0412\u0421\u0422\u0420\u0410\u041b\u0418\u042f","\u041f\u041e\u041b\u0418\u0426\u0418\u042f","\u041a\u0410\u041c\u0415\u0420\u0410","\u0412\u0415\u0421","\u041f\u0415\u0420\u0415\u0412\u041e\u0414","\u0414\u0423\u0425","\u041b\u0410\u041c\u0410","\u0421\u0422\u041e\u0419\u041a\u0410","\u041f\u0420\u0410\u0412\u041e","\u041a\u041e\u0421\u0422\u042c","\u042f\u0411\u041b\u041e\u041a\u041e","\u0420\u0415\u0419\u0414","\u041c\u041e\u0422\u0418\u0412","\u042d\u041b\u042c\u0424","\u0410\u041c\u0424\u0418\u0411\u0418\u042f","\u041f\u0410\u0420\u0422\u0418\u042f","\u0423\u0417\u0415\u041b","\u0411\u0410\u0420","\u0411\u0418\u041b\u0415\u0422","\u041b\u0410\u0421\u041a\u0410","\u041a\u0420\u041e\u041b\u0418\u041a","\u0413\u0412\u041e\u0417\u0414\u042c","\u041a\u0410\u041c\u0415\u041d\u042c","\u041e\u0420\u0413\u0410\u041d","\u0411\u041e\u0420\u041e\u0412","\u041f\u041b\u041e\u0429\u0410\u0414\u042c","\u0411\u0410\u0421\u0421\u0415\u0419\u041d","\u0413\u041e\u0420\u041b\u041e","\u0421\u041d\u0415\u0413","\u041b\u0418\u0421\u0422","\u041e\u041f\u0415\u0420\u0410\u0426\u0418\u042f","\u041d\u042c\u042e \u0419\u041e\u0420\u041a","\u0428\u0410\u0420","\u041f\u0410\u041b\u041e\u0427\u041a\u0410","\u041b\u0418\u0426\u041e","\u0412\u0418\u0414","\u041a\u0410\u0414\u0420","\u0421\u0422\u0420\u0423\u041d\u0410","\u0421\u0420\u0415\u0414\u0410","\u041a\u0420\u0410\u0419","\u0422\u0420\u0415\u0423\u0413\u041e\u041b\u042c\u041d\u0418\u041a","\u0412\u041e\u0414\u041e\u041b\u0410\u0417","\u0412\u0415\u041d\u0415\u0426","\u041a\u0410\u041d\u0410\u041b","\u041f\u0423\u0428\u041a\u0418\u041d","\u0424\u0410\u041b\u0410\u041d\u0413\u0410","\u0421\u0422\u0423\u041f\u0415\u041d\u042c","\u041b\u0415\u0421","\u0412\u0415\u0422\u0415\u0420","\u0421\u0422\u0410\u0414\u0418\u041e\u041d","\u041f\u041e\u0414\u042a\u0415\u041c","\u0422\u0410\u041d\u0415\u0426","\u0410\u041a\u0422","\u041d\u0410\u0420\u042f\u0414","\u0411\u0415\u0420\u041c\u0423\u0414\u042b","\u0412\u041e\u0417\u0414\u0423\u0425","\u0423\u0427\u0415\u041d\u042b\u0419","\u0421\u041e\u0412\u0415\u0422","\u0413\u0418\u0413\u0410\u041d\u0422","\u0421\u0423\u0414\u042c\u0411\u0410","\u0412\u0418\u0420\u0423\u0421","\u0411\u0410\u0419\u041a\u0410\u041b","\u0423\u0420\u0410\u041b","\u0425\u0412\u041e\u0421\u0422","\u041c\u0410\u0428\u0418\u041d\u0410","\u041f\u041e\u0411\u0415\u0413","\u041d\u041e\u0422\u0410","\u0411\u0410\u0422\u0410\u0420\u0415\u042f","\u0413\u0415\u041d\u0418\u0419","\u0421\u0412\u0415\u0422","\u0413\u041b\u0410\u0417","\u0411\u041e\u0415\u0412\u0418\u041a","\u0421\u0422\u0415\u041d\u0410","\u0424\u041e\u041a\u0423\u0421","\u0417\u0410\u041b\u041e\u0413","\u0413\u0420\u0410\u041d\u0410\u0422"],"\u041a\u043e\u0434\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u043d\u0430: \u0414\u0443\u044d\u0442":["\u041a\u041e\u0412\u0428","\u041c\u041e\u0420\u0416","\u0417\u041d\u0410\u041c\u042f","\u041c\u0423\u0420\u0410\u0412\u0415\u0419","\u0422\u0410\u0422\u0423\u0418\u0420\u041e\u0412\u041a\u0410","\u0421\u0410\u0420\u0410\u041d\u0427\u0410","\u0412\u0418\u041a\u0418\u041d\u0413","\u0413\u0420\u0418\u041c","\u0412\u041a\u0423\u0421","\u0413\u041e\u041b\u042c\u0424","\u041a\u0423\u041a\u041b\u0410","\u0420\u041e\u041b\u0418\u041a","\u0421\u041a\u0410\u041c\u042c\u042f","\u0421\u041b\u0418\u0412\u041a\u0418","\u041a\u0420\u0415\u041f\u041e\u0421\u0422\u042c","\u041f\u041b\u0410\u0421\u0422\u0418\u041d\u041a\u0410","\u041c\u041e\u041b\u041e\u0422\u041e\u041a","\u0422\u042e\u0420\u042c\u041c\u0410","\u041b\u0415\u041d\u0422\u0410","\u0416\u0415\u0421\u0422\u042c","\u041a\u0423\u041a\u0423\u0428\u041a\u0410","\u0413\u0420\u042f\u0417\u042c","\u0413\u0415\u0420\u041a\u0423\u041b\u0415\u0421","\u041a\u041e\u041c\u0410\u0420","\u0418\u0421\u041b\u0410\u041d\u0414\u0418\u042f","\u042d\u041a\u0418\u041f\u0410\u0416","\u041a\u041d\u041e\u041f\u041a\u0410","\u0427\u0415\u0420\u0415\u041f\u0410\u0425\u0410","\u0412\u0418\u0428\u041d\u042f","\u041a\u041e\u041c\u041f\u0410\u041d\u0418\u042f","\u041b\u0410\u041c\u041f\u041e\u0427\u041a\u0410","\u0411\u0420\u042b\u0417\u0413\u0418","\u041f\u0415\u0422\u0420\u0423\u0428\u041a\u0410","\u041c\u0410\u0420\u0410\u041a\u0410\u0421","\u0417\u0410\u0420\u041e\u0421\u041b\u0418","\u041f\u0410\u041c\u042f\u0422\u042c","\u0420\u0410\u0421\u0427\u0415\u0421\u041a\u0410","\u041f\u0418\u0426\u0426\u0410","\u0411\u0418\u0413-\u0411\u0415\u041d","\u0424\u0418\u0410\u041b\u041a\u0410","\u041b\u041e\u0416\u041a\u0410","\u0414\u0416\u0418\u041d","\u0428\u0415\u0420\u041b\u041e\u041a","\u0421\u0423\u0428\u041a\u0410","\u0411\u0415\u0421\u041f\u041e\u0420\u042f\u0414\u041e\u041a","\u0428\u0423\u0422","\u041a\u0418\u041b\u0422","\u0411\u041e\u041d\u0421\u0410\u0419","\u041f\u0415\u0422\u041b\u042f","\u0428\u041b\u0410\u041d\u0413","\u0423\u0425\u041e","\u041c\u0410\u0428\u0415\u041d\u042c\u041a\u0410","\u0411\u0418\u041a\u0418\u041d\u0418","\u0417\u0423\u0414","\u0411\u0415\u0420\u0415\u0413","\u0427\u0415\u0420\u041d\u0410\u042f \u0414\u042b\u0420\u0410","\u0421\u041e\u041d","\u041c\u041b\u0410\u0414\u0415\u041d\u0415\u0426","\u041a\u0418\u041b\u041e\u041c\u0415\u0422\u0420","\u0412\u0423\u041b\u041a\u0410\u041d","\u0413\u0418\u0422\u0410\u0420\u0410","\u041a\u041b\u0415\u0419","\u0422\u0423\u041c\u0410\u041d","\u041a\u0423\u0425\u041d\u042f","\u0417\u0410\u041f\u0418\u0421\u042c","\u0420\u0423\u041a\u0410","\u041c\u0410\u0421\u0422\u042c","\u041a\u0410\u041f\u041b\u042f","\u041d\u042c\u042e\u0422\u041e\u041d","\u0417\u0415\u041b\u0415\u041d\u042c","\u0412\u041e\u0420\u041e\u0422\u041d\u0418\u041a","\u0414\u0420\u041e\u0412\u041e\u0421\u0415\u041a","\u0421\u0423\u041f","\u0421\u0410\u041b\u041e\u041d","\u0421\u0424\u0418\u041d\u041a\u0421","\u041c\u041e\u041b\u041d\u0418\u042f","\u0412\u0410\u041d\u041d\u0410","\u0421\u0410\u041b\u0410\u0422","\u0421\u0418\u0420\u0415\u041d\u0410","\u0421\u0415\u0421\u0422\u0420\u0410","\u041f\u0418\u0421\u042c\u041c\u041e","\u0412\u041e\u0421\u041a","\u0411\u0420\u0423\u0421\u041e\u041a","\u0413\u0418\u041c\u041d","\u041b\u0410\u0413\u0415\u0420\u042c","\u0414\u0416\u041e\u041a\u0415\u0420","\u041e\u0425\u041e\u0422\u0410","\u041c\u0418\u041d\u0423\u0422\u0410","\u0410\u0420\u041c\u0418\u042f","\u0411\u041e\u041b\u042c\u0428\u041e\u0419 \u0412\u0417\u0420\u042b\u0412","\u0427\u0410\u0421\u042b","\u0416\u0410\u041d\u041d\u0410 \u0414\'\u0410\u0420\u041a","\u0412\u041e\u041b\u0427\u041e\u041a","\u0414\u0410\u041d\u0422\u0418\u0421\u0422","\u041f\u041e\u0427\u0412\u0410","\u041a\u0410\u0412\u041a\u0410\u0417","\u0416\u0410\u0420","\u0411\u0420\u0418\u0422\u0412\u0410","\u041e\u0422\u0415\u0426","\u041a\u041e\u0420\u041e\u041b\u042c \u0410\u0420\u0422\u0423\u0420","\u0426\u0415\u0417\u0410\u0420\u042c","\u041f\u042b\u041b\u042c","\u0422\u0420\u041e\u041b\u041b\u042c","\u0422\u041e\u041c","\u0420\u041e\u0421\u0421\u0418\u042f","\u0422\u0418\u0425\u0418\u0419 \u041e\u041a\u0415\u0410\u041d","\u041f\u0410\u0421\u0425\u0410","\u041f\u0415\u0427\u042c","\u0422\u041e\u041f\u041b\u0418\u0412\u041e","\u0412\u041e\u0420\u041e\u041d","\u041d\u0415\u0420\u0412","\u041c\u0423\u0428\u041a\u0415\u0422\u0415\u0420","\u041f\u041e\u0420\u041e\u0428\u041e\u041a","\u041e\u0411\u041e\u0420\u041e\u0422\u0415\u041d\u042c","\u041c\u041e\u041c\u0415\u041d\u0422","\u0411\u041e\u0420\u041e\u0414\u0410","\u0422\u0423\u0427\u0410","\u041d\u0410\u041a\u041b\u0415\u0419\u041a\u0410","\u0411\u0420\u041e\u041d\u0415\u041d\u041e\u0421\u0415\u0426","\u0421\u0425\u0415\u041c\u0410","\u0423\u0420\u0410\u0413\u0410\u041d","\u041f\u041e\u041f\u0423\u0413\u0410\u0419","\u0421\u0418\u041c\u0412\u041e\u041b","\u041a\u041e\u041b\u0414\u0423\u041d","\u041f\u041e\u0420\u041e\u0413","\u041f\u0423\u0427\u041e\u041a","\u0421\u0415\u0414\u041b\u041e","\u0411\u0415\u041a\u041e\u041d","\u041f\u0410\u0426\u0418\u0415\u041d\u0422","\u041e\u0410\u0417\u0418\u0421","\u041b\u0410\u0412\u041a\u0410","\u0421\u0412\u042f\u0422\u041e\u0419 \u041f\u0410\u0422\u0420\u0418\u041a","\u041c\u0415\u041b","\u041c\u0415\u0422\u0420","\u0411\u041b\u0415\u0421\u041a","\u0416\u041e\u041a\u0415\u0419","\u0421\u0410\u041b\u042c\u0421\u0410","\u041f\u0423\u0425","\u0421\u0410\u0414","\u041b\u042e\u041a","\u0421\u0422\u0420\u0410\u041d\u0410","\u041f\u0420\u0418\u041c\u0415\u0422\u0410","\u041c\u042f\u041a\u041e\u0422\u042c","\u0420\u0418\u0421\u0423\u041d\u041e\u041a","\u041f\u0420\u041e\u041c\u0410\u0425","\u0425\u0418\u0416\u0418\u041d\u0410","\u041e\u0411\u0415\u0417\u042c\u042f\u041d\u0410","\u041f\u041e\u0422","\u0414\u0415\u041b\u042c\u0422\u0410\u041f\u041b\u0410\u041d","\u041b\u0415\u041d\u0418\u0412\u0415\u0426","\u0421\u0422\u0410\u041b\u042c","\u0413\u0420\u0410\u0414","\u041c\u0410\u041d\u0415\u0416","\u0428\u0410\u0420\u0418\u041a","\u042e\u0411\u041a\u0410","\u0413\u0410\u0412\u0410\u0419\u0418","\u0421\u0410\u041d\u0418\u0422\u0410\u0420","\u0410\u041b\u042f\u0421\u041a\u0410","\u041c\u041e\u041d\u0410 \u041b\u0418\u0417\u0410","\u0411\u041e\u0420\u0415\u0426","\u0427\u0410\u0428\u0410","\u041f\u041e\u041b\u041e","\u0411\u0420\u041e\u041d\u042f","\u041e\u041b\u0415\u041d\u042c","\u0425\u041b\u0415\u0411","\u0420\u0416\u0410\u0412\u0427\u0418\u041d\u0410","\u0411\u0410\u041d\u0422","\u0411\u0420\u0410\u0417\u0418\u041b\u0418\u042f","\u0425\u042d\u041b\u041b\u041e\u0423\u0418\u041d","\u0423\u041c","\u0426\u0415\u0425","\u0428\u0415\u041b\u0423\u0425\u0410","\u041c\u0415\u0427","\u0412\u0415\u0421\u041b\u041e","\u0421\u0422\u0420\u0410\u041d\u0418\u0426\u0410","\u0411\u041e\u0411","\u041a\u041e\u041c\u0415\u0422\u0410","\u0420\u041e\u041c\u0410\u041d","\u0420\u0410\u0414\u0423\u0413\u0410","\u0411\u0410\u0420\u0410\u041d","\u0421\u041e\u041b\u041d\u0426\u0415","\u0411\u0410\u041d\u0410\u041d","\u0421\u041e\u0423\u0421","\u041c\u0410\u041d\u0418\u041a\u042e\u0420","\u0428\u0422\u0410\u041c\u041f","\u0422\u0418\u0413\u0420","\u041e\u0424\u0418\u0426\u0418\u0410\u041d\u0422","\u0413\u041e\u041c\u0415\u0420","\u0420\u0410\u0419","\u041c\u0418\u041d\u041e\u0422\u0410\u0412\u0420","\u041a\u0423\u041d\u0413-\u0424\u0423","\u0428\u0410\u0413","\u0411\u0410\u041d\u0414\u0418\u0422","\u041b\u042f\u0413\u0423\u0428\u041a\u0410","\u0421\u041c\u041e\u041a\u0418\u041d\u0413","\u041e\u0411\u0412\u0410\u041b","\u0413\u041b\u0410\u0412\u0410","\u0421\u0427\u0415\u0422","\u041f\u041b\u0415\u0427\u041e","\u041d\u041e\u0421","\u0428\u0422\u0420\u0418\u0425","\u041b\u0418\u041c\u041e\u041d\u0410\u0414","\u041f\u0415\u0429\u0415\u0420\u0410","\u0412\u0410\u041c\u041f\u0418\u0420","\u0420\u0410\u041d\u0427\u041e","\u041e\u0420\u0423\u0414\u0418\u0415","\u0411\u0423\u0420\u042f","\u0413\u041e\u041d\u0427\u0410\u0420","\u0413\u0420\u0423\u0421\u0422\u042c","\u0421\u041e\u0421\u041d\u0410","\u0417\u0410\u0412\u0422\u0420\u0410\u041a","\u0420\u0415\u041c\u0415\u0421\u041b\u041e","\u0420\u0423\u0427\u041a\u0410","\u041f\u041b\u0418\u0422\u0410","\u0421\u0412\u0418\u0422\u041e\u041a","\u041f\u0410\u0420\u0410\u0417\u0418\u0422","\u042d\u0422\u0410\u0416","\u041f\u0420\u041e\u0420\u042b\u0412","\u041a\u0410\u0420\u041c\u0410\u041d","\u0413\u041d\u0415\u0417\u0414\u041e","\u0428\u0415\u0420\u0421\u0422\u042c","\u042e\u0412\u0415\u041b\u0418\u0420","\u041b\u0415\u0417\u0412\u0418\u0415","\u0413\u041e\u0420\u041e\u0428\u0418\u041d\u0410","\u041c\u041e\u0420\u041e\u0417","\u041a\u0410\u0420\u0422\u041e\u0428\u041a\u0410","\u041a\u0415\u041a\u0421","\u0420\u041e\u0416\u0414\u0415\u0421\u0422\u0412\u041e","\u041c\u041e\u0418\u0421\u0415\u0419","\u041b\u041e\u0417\u0410","\u041f\u0415\u0427\u0415\u041d\u042c\u0415","\u041f\u0415\u0420\u0415\u0426","\u041f\u0420\u0415\u0421\u0421","\u0413\u0423\u0411\u041a\u0410","\u041b\u0415\u0414\u041d\u0418\u041a\u041e\u0412\u042b\u0419 \u041f\u0415\u0420\u0418\u041e\u0414","\u0421\u041a\u0410\u041a\u0423\u041d","\u041e\u0427\u041a\u0418","\u041c\u042b\u041b\u041e","\u0421\u0410\u041d\u0418","\u041a\u0420\u0423\u0416\u041e\u041a","\u041b\u0423\u041a\u041e\u0412\u0418\u0426\u0410","\u0411\u0410\u041a","\u0417\u0410\u041b\u0418\u0412","\u0411\u0420\u0410\u0422","\u041b\u0415\u0421\u0422\u041d\u0418\u0426\u0410","\u041d\u041e\u0422\u0420-\u0414\u0410\u041c","\u0413\u0410\u0420\u0410\u0416","\u0421\u041a\u0410\u0417\u041a\u0410","\u0411\u0415\u041b\u041a\u0410","\u041c\u0410\u0420\u0410\u0424\u041e\u041d","\u041f\u041e\u041f\u041a\u041e\u0420\u041d","\u042f\u0419\u0426\u041e","\u041f\u041e\u0426\u0415\u041b\u0423\u0419","\u041a\u041e\u0416\u0410","\u041a\u041e\u0421\u041c\u041e\u041d\u0410\u0412\u0422","\u041f\u0415\u0421\u041e\u041a","\u0421\u0422\u0415\u0422\u041e\u0421\u041a\u041e\u041f","\u042e\u0420\u0422\u0410","\u0417\u041d\u0410\u0422\u041e\u041a","\u041d\u0415\u0419\u041b\u041e\u041d","\u041f\u0427\u0415\u041b\u0410","\u041c\u041e\u041d\u0415\u0422\u0410","\u0428\u041b\u0415\u041c","\u0421\u0410\u0425\u0410\u0420\u0410","\u0426\u0410\u0420\u0410\u041f\u0418\u041d\u0410","\u0422\u041e\u041f\u041e\u0420","\u0427\u0415\u0420\u0415\u041f","\u041a\u0420\u0418\u0421\u0422\u0410\u041b","\u041a\u0423\u0412\u0428\u0418\u041d","\u041f\u0415\u041f\u0415\u041b","\u041e\u041a\u041d\u041e","\u041b\u042e\u0411\u041e\u0412\u042c","\u0427\u0415\u0420\u041d\u0418\u041b\u0410","\u0420\u0415\u041a\u0410","\u0427\u0410\u0429\u0410","\u041a\u041e\u0417\u0415\u041b","\u041a\u041b\u0415\u041e\u041f\u0410\u0422\u0420\u0410","\u041c\u0415\u0414\u042c","\u041a\u0410\u0412\u0410\u041b\u0415\u0420\u0418\u042f","\u0414\u0418\u0420\u0415\u041a\u0422\u041e\u0420","\u041a\u0410\u041f\u0418\u0422\u0410\u041d","\u041a\u0420\u0410\u0411","\u042d\u0419\u041d\u0428\u0422\u0415\u0419\u041d","\u0418\u0420\u041e\u041a\u0415\u0417","\u0423\u041d\u0418\u0412\u0415\u0420\u0421\u0418\u0422\u0415\u0422","\u041a\u041e\u0420\u041e\u0412\u0410","\u0420\u0423\u0411\u041b\u042c","\u0420\u0418\u0421","\u041f\u0415\u041d\u0422\u0410\u0413\u041e\u041d","\u041a\u041e\u041b\u0423\u041c\u0411","\u041a\u0423\u0417\u041d\u0415\u0426","\u0417\u041e\u041c\u0411\u0418","\u041a\u041e\u041b\u0415\u0421\u041e","\u0421\u042b\u0420","\u041d\u0410\u041f\u041e\u041b\u0415\u041e\u041d","\u0423\u041b\u0418\u0426\u0410","\u041c\u0413\u041b\u0410","\u041a\u0410\u0411\u0415\u041b\u042c","\u041a\u041e\u0412\u0411\u041e\u0419","\u041d\u0415\u0412\u0415\u0421\u0422\u0410","\u041f\u0410\u0420\u041d\u0418\u041a","\u0411\u0410\u0428\u041c\u0410\u041a","\u0428\u0410\u041c\u0410\u041d","\u041b\u042b\u0416\u0418","\u0416\u0415\u041c\u0427\u0423\u0416\u0418\u041d\u0410","\u041f\u0423\u0417\u042b\u0420\u042c","\u0427\u0415\u0422\u0412\u0415\u0420\u0422\u042c","\u0414\u0423\u0428","\u0417\u0415\u041c\u041b\u0415\u0422\u0420\u042f\u0421\u0415\u041d\u0418\u0415","\u0412\u041e\u041b\u0428\u0415\u0411\u041d\u0418\u041a","\u0413\u0420\u041e\u041c","\u041b\u0415\u0414\u041d\u0418\u041a","\u0420\u0423\u041b\u041e\u041d","\u0425\u0420\u0415\u0411\u0415\u0422","\u041a\u041e\u0419\u041a\u0410","\u041f\u0410\u0420","\u041f\u041e\u0421\u041b\u0410\u041d\u0418\u0415","\u0417\u041c\u0415\u042f","\u0411\u041e\u0419","\u0417\u0410\u0420\u0410\u0417\u0410","\u0412\u0415\u041b\u041e\u0421\u0418\u041f\u0415\u0414","\u0411\u0423\u0422\u0415\u0420\u0411\u0420\u041e\u0414","\u041d\u041e\u0419","\u041f\u0410\u0420\u0410\u0414","\u041f\u0420\u0418\u041f\u0420\u0410\u0412\u0410","\u0411\u042e\u0420\u041e","\u041a\u0420\u042b\u0421\u0410","\u0420\u0415\u0417\u0418\u041d\u041a\u0410","\u041f\u0418\u041b\u0410","\u0412\u0415\u041d\u0415\u0420\u0410","\u0420\u0410\u0421\u041a\u041e\u041b","\u0414\u041e\u0420\u041e\u0413\u0410","\u0413\u0418\u041c\u041d\u0410\u0421\u0422","\u0413\u041e\u041d\u041a\u0418","\u041a\u041e\u0424\u0415","\u041a\u041e\u041a\u0422\u0415\u0419\u041b\u042c","\u041f\u0410\u0420\u0423\u0421","\u0413\u0410\u041b\u0415\u0420\u0415\u042f","\u0410\u0420\u041e\u041c\u0410\u0422","\u0414\u0415\u0420\u0415\u0412\u041e","\u0421\u041b\u041e\u041d","\u0428\u0422\u041e\u0420\u0410","\u041c\u0410\u0422\u042c","\u041f\u0415\u0420\u0418\u041b\u0410","\u0421\u0423\u041c\u041a\u0410","\u0413\u0423\u0411\u0410","\u041a\u041e\u0422\u0415\u041b\u041e\u041a","\u0428\u041e\u0424\u0415\u0420","\u0418\u0417\u042e\u041c","\u0427\u0415\u0420\u0414\u0410\u041a","\u0422\u0420\u0423\u0421\u042b","\u041a\u041e\u041b\u042f\u0421\u041a\u0410","\u041c\u0415\u0425\u0410\u041d\u0418\u041a\u0410","\u041f\u0418\u041a\u041d\u0418\u041a","\u0411\u0410\u0421","\u0413\u041e\u0420\u0427\u0418\u0426\u0410","\u041c\u0415\u0414\u0423\u0417\u0410","\u041f\u0418\u0412\u041e","\u0424\u0415\u0420\u041c\u0410","\u0428\u0423\u0422\u041a\u0410","\u0421\u0422\u0418\u0420\u041a\u0410","\u0421\u0423\u0425\u0410\u0420\u042c","\u0427\u0410\u0419","\u0421\u0423\u041c\u041e","\u0422\u0423\u0417","\u0412\u041e\u041b\u042f","\u0428\u0418\u0428\u041a\u0410","\u0417\u0410\u0421\u0410\u0414\u0410","\u0414\u0415\u0414 \u041c\u041e\u0420\u041e\u0417","\u0414\u041e\u0417\u0410","\u041e\u0420\u0415\u0425","\u0420\u0423\u041a\u041e\u0412\u041e\u0414\u0421\u0422\u0412\u041e","\u0417\u0415\u0420\u041a\u0410\u041b\u041e","\u0416\u0415\u041d\u0418\u0425","\u0428\u0410\u041c\u041f\u0410\u041d\u0421\u041a\u041e\u0415","\u0429\u0415\u041f\u041a\u0410","\u0421\u0412\u0418\u041d\u042c\u042f","\u0416\u0423\u0420\u041d\u0410\u041b","\u041c\u0415\u0428\u041e\u041a","\u0421\u0410\u0425\u0410\u0420","\u041b\u0410\u041f\u0410","\u0420\u0410\u0414\u0418\u041e","\u0411\u041e\u041b\u041e\u0422\u041e","\u041b\u0410\u0412\u0410","\u0422\u0415\u041b\u0415\u0416\u041a\u0410","\u041a\u041e\u041c\u041f\u042c\u042e\u0422\u0415\u0420","\u041f\u0415\u0420\u0421\u0418\u041a","\u0411\u041e\u041a\u0421\u0415\u0420","\u0421\u041f\u042f\u0427\u041a\u0410","\u0421\u0412\u0410\u0414\u042c\u0411\u0410","\u041c\u0423\u041c\u0418\u042f","\u041d\u0410\u0413\u0420\u0410\u0414\u0410","\u041c\u041e\u041b\u041e\u041a\u041e","\u0428\u0410\u041c\u041f\u0423\u041d\u042c","\u0420\u0410\u0412\u041d\u0418\u041d\u0410","\u0428\u041d\u0423\u0420","\u041e\u0422\u041a\u0410\u0422","\u0414\u0423\u0428\u0410","\u041a\u0420\u042e\u041a","\u0411\u0410\u0420\u0410\u0411\u0410\u041d"]},"sl":{"Codenames: Slovenska izdaja":["RULETA","ZMAJ","VOJNA","MED","BOMBA","KAZINO","NEBOTI\u010cNIK","MERKUR","TUJEC","BI\u010c","ANTARKTIKA","SNE\u017dAK","KONCERT","\u010cOKOLADA","LETALO","MILIJONAR","DINOZAVER","GUSAR","GONG","PINGVIN","PAJEK","RAKETA","AMBASADA","PI\u0160TOLA","KUGA","VOHUN","PRINCESA","GENIJ","TAT","OPERA","VITEZ","ARENA","LIMUZINA","DUH","KOMBI","SLADOLED","LASER","SMRT","BOLNICA","RE\u0160ILEC","HOBOTNICA","HELIKOPTER","KENGURU","MIKROSKOP","KOZOROG","JUNAK","TELESKOP","PADALO","VEVERICA","TRIGLAV","SATELIT","ANGEL","ROBOT","SAMOROG","VRBA","GROBAR","POTAPLJA\u010c","STRUP","MOST","OGENJ","MIZA","KIT","LUNA","RIBA","ZDRAVNIK","ZVONIK","PAS","SESTRA","VETER","LEV","OKO","ZRAK","ZAJEC","BANKA","TRAVA","OBLEKA","\u0160KRAT","GOZD","AVTO","ROKAVICA","JABOLKO","OLJE","\u0160EF","MEDVED","MA\u010cKA","\u017dIVLJENJE","SRE\u010cA","VELIKAN","OBRAZ","OBALA","HOTEL","VODA","PAPIR","\u010cRV","SODNIK","ZNANSTVENIK","PLES","KOREN","MEZGA","NO\u010c","BOMBA\u017d","NOGA","MI\u0160","NO\u017d","ODER","POLICIJA","LADJA","PILOT","PALEC","U\u010cITELJ","STEKLENICA","DAN","KRALJ","STEKLO","KRALJICA","ZOB","PES","KONJ","\u010cEVELJ","STOL","KRONA","LED","ZLATO","VILE","\u010cAS","INSTRUMENT","PLAMENICA","SNEG","LES","VOJAK","PIRAMIDA","STRUNA","ZVEZDA","PRSTAN","ROG","SRCE","BLOK","TUBA","IGLA","LINIJA","KAPA","DESKA","MASKA","ZASLON","IGRALEC","LISA","GUMB","SKLEP","ZNAK","PETA","DEKA","ZID","STOLP","KARTA","KRILO","KARO","KRI\u017d","MRE\u017dA","TO\u010cKA","SLEME","BAZA","\u010cRNA","ZVON","MO\u010c","KLJU\u010c","STROJ","VALOVI","TOK","GLAVA","KOLO","CENTER","UDAR","MLEKO","PIKA","BESEDA","KROG","VEZ","PIPA","DUNAJ","AVSTRALIJA","BALKAN","TOKIO","EGIPT","LONDON","BU\u010cA","MOSKVA","KANADA","PRE\u0160EREN","HOLLYWOOD","GR\u010cIJA","RIM","HIMALAJA","NINJA","\u010cEH","KIVI","NEM\u010cIJA","DR\u017dAVA","AMERIKA","ATLAS","ANGLIJA","LIST","AFRIKA","VRABEC","FRANCIJA","PODKEV","PAL\u010cEK","MEHIKA","BERLIN","KA\u010cA","EVROPA","PIRAT","PEKING","ORIENT","OREL","ALPE","INDIJA","KEKEC","POTICA","NABOJ","BABICA","VAJA","VOLK","BETON","ELEMENT","SKOK","TABLICA","ZELEN","ZAMA\u0160EK","ZBOR","PRST","DROBI\u017d","UTRIP","PROGA","VRH","LIMONA","JESEN","POGON","KOCKA","DANICA","RITKA","BATERIJA","HRBET","POKLIC","AGENT","BREG","VODNIK","STENA","BLAGO","PERO","REZERVA","POT","SEDE\u017d","ISKRA","KRI","MA\u0160A","SENCA","KO\u0160","JEZIK","VOZ","STIK","MUHA","OKLEP","KLJUKA","MINA","DOLG","BOR","PUST","KAMEN","IGRA","TOP","GROB","KOL","ENERGIJA","POD","METER","BOTER","KILA","DEBEL","POLJE","OBRAT","GOL","MEH","MLIN","TUR","\u0160OLA","\u010cE\u0160PLJA","LAZAR","ZEMLJA","OREH","SLED","KLOP","JEDRO","VODILO","DNEVNIK","APARAT","KULTURA","JAGODA","MLADINA","DRAMA","BEL","NABOR","HIPERBOLA","PRA\u0160I\u010c","ENOTA","PRISEGA","LJUBICA","PLOD","POSKUS","JAJCA","SVET","LOK","BOKSAR","NARAVA","SOVA","CELICA","ORGAN","ZAKON","URA","REP","CVET","MODEL","BLI\u0160\u010c","NAUK","TIP","\u0160KOLJKA","GOST","PLA\u0160\u010c","OBLAK","VOL","LISJAK","STRAN","SOKOL","UPOR","REBRO","LOVEC","MIR","LJUBI","VLADA","BARVA","PREDSTAVA","SPLET","PISKER","\u010cELO","\u017dERJAV","RIS","POPEK","AJDA","ROZA","SLON","RDE\u010c","REVOLUCIJA","NATEG","PLIN","SKUTA","JEREBICA","VEST","HRO\u0160\u010c","KEPA","BLED","URAN","RA\u010cUN","LUKNJA","PERILO","TEK","AMAZONKA","SONCE","FIGURA","OBRED","LEGENDA","\u0160TRUCA","BIK","PRSA","BRADA","NAPETOST","SUH","BRANA","POL\u017d","ZAUPNO","DOBA","RAZRED","OKNO","\u0160UM","MESEC","NOTA","VRAT","FILM","ODPOVED","SOK","SREDA","GOBA","VIRUS","VRSTA","KOZA","JUG","SOLZA","MODER","SESALEC","LUTKA","RED","GOVOR"]},"sr":{"Codenames: Srpsko izdanje":["RULET","ZMAJ","RAT","MED","GAZA","BOMBA","KAZINO","SOLITER","SATURN","VANZEMALJAC","BI\u010c","ANTARKTIK","SNE\u0160KO BELI\u0106","KONCERT","\u010cOKOLADA","NIT","MILIONER","DINOSAURUS","PIRAT","PINGVIN","PAUK","PROJEKTIL","AMBASADA","PI\u0160TOLJ","BOLEST","\u0160PIJUN","PRINCEZA","GENIJE","LOPOV","OPERA","VITEZ","STADION","LIMUZINA","DUH","KOMBI","SLADOLED","LASER","SMRT","BOLNICA","AMBULANTA","OKTOPOD","HELIKOPTER","KENGUR","MIKROSKOP","KENTAUR","HEROJ","TELESKOP","PADOBRAN","KLJUNAR","OLIMP","SATELIT","AN\u0110EO","ROBOT","JEDNOROG","VE\u0160TICA","GROBAR","RONILAC","OTROV","MOST","VATRA","STO","KIT","MESEC","RIBA","DOKTOR","CRKVA","POJAS","SESTRA","VETAR","LAV","OKO","VAZDUH","ZEC","BANKA","TRAVA","HALJINA","PATULJAK","\u0160UMA","KOLA","KRALJ","RUKAVICA","KUVAR","MEDVED","MA\u010cKA","\u017dIVOT","SRE\u0106A","D\u017dIN","FACA","PLA\u017dA","HOTEL","VODA","PAPIR","ADVOKAT","NAU\u010cNIK","\u0160ARGAREPA","NO\u0106","PAMUK","STOPALA","MI\u0160","NO\u017d","POZORI\u0160TE","BROD","PILOT","U\u010cITELJICA","BOCA","ZUB","PAS","KONJ","CIPELE","STOLICA","KRUNA","ZLATO","VREME","FRULA","BAKLJA","SNEG","VOJNIK","PIRAMIDA","KANAP","PRSTEN","SRCE","CEV","IGLA","LINIJA","TABLA","EKRAN","IGRA","DUGME","VOZ","POST","BOLID","BRADA","FILM","HARMONIKA","GAS","ZATVOR","RUNDA","KAPETAN","REP","PRUGA","OKVIR","DEVICA","PRASAK","PRITISAK","JELEN","CIKLUS","LAKAT","BERLIN","SIMBOL","KOSA","PROMAJA","SAT","JAK","\u0106ELIJA","\u010cUDO","\u010cIN","PROLAZ","PEKING","TARA","DOBRO","PESMA","USTA","TALAS","HIMALAJI","DETELINA","DU\u0160A","TEREN","ZAKON","INTERNET","ORKESTAR","KLUB","ARSENAL","VILA","ZLATAR","LUKA","TOP","SUD","STRA\u017dA","PILETINA","MINA","ZONA","IGRA\u010c","GRAD","RADNJA","SENKA","KREM","OPERACIJA","\u0160AKA","KAFANA","RADIO","MARKER","RED","SRBIJA","AMERIKA","NJUJORK","SILA","POTOK","ENGLESKA","TURSKA","DVOR","SOKO","\u010cLANAK","PITA","OTPAD","ROG","MASKA","JABUKA","KIVI","\u0160KORPIJA","VLADA","ZEMLJA","KRAVATA","SO\u010cIVO","RUKA","ZAKLON","INDIJA","KLIP","\u0160UT","KRUG","ZNAK","NAFTA","JUPITER","TESLA","ATLANTIDA","LONDON","MASA","BIT","KUKA","BOKS","CRV","SLONOVA\u010cA","VARALICA","BATAK","PLES","POL","KRALJICA","GLAVA","VUK","HOLIVUD","DEMOKRATIJA","POLICIJA","ZVEZDA","\u0160LJIVA","FAKS","PREKIDA\u010c","PASTA","HRVATSKA","BLOK","NEMA\u010cKA","STAKLO","GAJBA","VUNA","KE\u010cAP","GOLF","AUSTRALIJA","KLIKER","ZID","REKET","FRANCUSKA","ORAO","STANDARD","KLINAC","\u0160EKSPIR","MAR\u0160","PEGLA","EVROPA","\u017dIVA","KALEMEGDAN","MODEL","TANJIR","NANA","LOZA","DIJAMANT","VEZA","DUNAV","AGENT","LED","KREVET","DAN","GR\u010cKA","MEKSIKO","BATERIJA","TOKIO","VILJU\u0160KA","ZVONO","ALPI","\u010cETKA","CENTAR","NIND\u017dA","BAUK","STRIP","ZVER","TRUBA","PENA","PISMO","LAK","KAZAN","PONOR","KULA","DIPLOMA","MOTOR","PALAC","GUMICA","ORGAN","SEKTOR","VA\u0160INGTON","BORANIJA","BOR","FILTER","KLJU\u010c","TIP","BALKAN","PARTIZAN","PLAZMA","SEDI\u0160TE","LEPTIR","SERVER","PERO","VAMPIR","TRAKA","MESTO","LASTA","POEN","LULA","MOSKVA","EGIPAT","ORAH","PARLAMENT","KOREN","AMAZON","\u0160E\u0106ER","VIRUS","MENJA\u010c","\u0160IPAK","POP","ANALIZA","MLIN","PARK","KAPACITET","SEME","PREMIJER","NOVINE","PALMA","INDEKS","SILIKON","KOLENO","TUTOR","ZORA","KAMILA","KOCKA","MARS","RUBIN","TROUGAO","SLAVA","PODLOGA","LIST","BAR","MRE\u017dA","LEGIJA","FUDBAL","SVETLO","KARTA","RUPA","SUDAR","PRASE","GALIJA","ZAPLET","RU\u017dA","FIGURA","RE\u0160ETKA","BURMA","\u010cORBA","DNO","STRANA","POZICIJA","PATKA","ZELEN","ALAT","PLO\u010cA","STABLO","PROLE\u0106E","RIM","AKCIJA","KRILO","ZRNO","SASTAV","KUP","PARADA","SKAKAVAC","KARIKA","BUBA","LOVAC","VAGA","KOD","KRST","AFRIKA","DR\u017dAVA","REVOLUCIJA","ROK","IZDAJA"]},"sv":{"Codenames":["ROULETTE","DRAKE","KRIG","HONUNG","BOMB","CASINO","SKYSKRAPA","SATURNUS","UTOMJORDING","PISKA","ANTARKTIS","SN\xd6GUBBE","KONSERT","CHOKLAD","JET","MILJON\xc4R","DINOSAURIE","PIRAT","HORN","PINGVIN","SPINDEL","MISSIL","AMBASSAD","PISTOL","SJUKDOM","SPION","PRINSESSA","GENI","TJUV","OPERA","RIDDARE","STADIUM","LIMOUSINE","SP\xd6KE","SK\xc5PBIL","GLASS","LASER","D\xd6D","SJUKHUS","AMBULANS","BL\xc4CKFISK","HELIKOPTER","K\xc4NGURU","MIKROSKOP","KENTAUR","SUPERHJ\xc4LTE","TELESKOP","FALLSK\xc4RM","N\xc4BBDJUR","ASTRONAUT","SATELLIT","\xc4NGEL","ROBOT","ENH\xd6RNING","H\xc4XA","GRAV","DYKARE","GIFT","BRO","ELD","BORD","VAL","M\xc5NE","FISK","DOKTOR","KYRKA","B\xc4LTE","SYSTER","VIND","LEJON","\xd6GA","LUFT","KANIN","BANK","GR\xc4S","DR\xc4KT","DV\xc4RG","SKOG","BIL","HANDSKE","\xc4PPLE","OLJA","KOCK","BJ\xd6RN","KATT","LIV","TUR","J\xc4TTE","ANSIKTE","STRAND","HOTELL","VATTEN","PAPPER","MASK","ADVOKAT","FORSKARE","DANS","MOROT","KETCHUP","NATT","BOMULL","FOT","MUS","TR\xc4FF","TEATER","POLIS","B\xc5T","PILOT","TUMME","L\xc4RARE","FLASKA","DAG","KUNG","GLAS","DROTTNING","TAND","HUND","H\xc4ST","SKO","STOL","KRONA","IS","GULD","GAFFEL","TID","FL\xd6JT","FACKLA","SN\xd6","ELFENBEN","SOLDAT","PYRAMID","SN\xd6RE","STJ\xc4RNA","RING","SKIVA","HJ\xc4RTA","BLOCK","R\xd6R","N\xc5L","LINJE","SKYDD","TAVLA","KNAPP","SK\xc4RM","LEK","FL\xc4CK","M\xc4TARE","MUN","ETIKETT","HAND","S\xc4NG","V\xc4GG","TORN","KORT","KNUT","DIAMANT","KORS","N\xc4T","PUNKT","DAL","FAT","H\xc5L","KLOCKA","KRAFT","NYCKEL","MOTOR","V\xc5G","STR\xd6M","HUVUD","STOLPE","CENTRUM","KROCK","KLISTER","SPIK","KOD","CIRKEL","L\xc4NK","LEDNING","NEW YORK","AUSTRALIEN","MEDELHAVET","TOKYO","EGYPTEN","LONDON","BULLE","MOSKVA","NORDEN","TROLL","HOLLYWOOD","GREKLAND","ROM","FJ\xc4LL","VIKING","SKANDINAVIEN","REN","SVERIGE","L\xc4N","AMERIKA","ATLANTIS","ENGLAND","EK","AFRIKA","M\xc5S","FRANKRIKE","KL\xd6VER","TOMTE","EUROPA","\xd6STERSJ\xd6N","KR\xc4FTA","STOCKHOLM","KL\xc4MMA","M\xc5L","ODJUR","KINA","FIKA","SNAPPHANE","SAME","\xd6RN","V\xc5R","INDIAN","PRESS","N\xd6T","J\xc4RN","GRAD","ALPERNA","SLANT","GR\xd6N","KONTRA","MARS","BLAD","BAK","L\xc5T","F\xc5R","SK\xc5L","KLUBBA","FALL","PJ\xc4S","LAPP","LAND","SKINKA","ROCK","RAD","AGENT","BOCK","TAPPA","T\xc5NG","KLIPPA","STAM","KAM","BEN","SKATT","K\xc4RNA","RABATT","BLIXT","SPRINGA","AXEL","SKUGGA","SERIE","FIL","V\xc4ST","FLUGA","T\xc5R","MINA","UR","LJUS","BAR","KALL","ACKORD","SPEL","KROK","UNDER","SAGA","VALS","D\xc4CK","PANNA","TUNNA","RUNDA","SPIRA","F\xc4LT","STACK","RO","S\xc5G","ASK","SP\xd6","SKOLA","MULLVAD","SKOTT","MARK","\xc4LG","KANON","PLANET","BANAN","SP\xc5R","STOCK","L\xc5R","PUMPA","B\xc4R","FAR","KANAL","SL\xc4NDA","RYMD","FL\xc4KT","MATTA","FULL","KNIV","TUNGA","UGGLA","KLYFTIG","KOPPAR","HYLLA","SK\xd6LD","\xc5KER","PIPA","TANK","BRYGGA","DAMM","DRAG","EKA","SPETS","HALT","HOPP","K\xd6","LAGER","LIK","LUR","MOCKA","LYRA","RAM","VAD","SLAG","SLANG","TIGER","TRON","T\xc4RNA","FENIX","VASS","LEDER","LUCIA","STAV","HON","LOV","ZOMBIE","KOR","LAG","KRAN","MASKERAD","DOCKA","MAN","MAMMUT","BROMS","CYKEL","DROG","SUND","LARV","RIS","VAGN","ISBERG","VALV","PIL","VRAK","FLAGGA","MANTEL","PARAPLY","SV\xc4RD","AMAZON","RUTA","FIGUR","ARENA","ZOO","GODIS","GRAN","TANGENT","BOK","SVIN","SADEL","INTERNET","PLAN","K\xc5K","BOX","YXA","P\xc4RON","KRITA","KRISTALL","FILM","TENTAKEL","GROTTA","B\xc5GE","RASTA","VULKAN","REGNB\xc5GE","F\xc4NGELSE","NINJA","GUNGA","HOLOGRAM","T\xc5RTA","PYJAMAS","VAKUUM","LUFFARE","BIOGRAF","POST"],"Codenames: Duet":["SPANN","RUSA","VALROSS","LEMONAD","VIMPEL","GRUVA","MYRA","VAMPYR","TATUERING","RANCH","GR\xc4SHOPPA","GEV\xc4R","VILDE","SN\xd6STORM","SMINK","KERAMIKER","SMAK","BLUES","GOLF","FUR","GUBBE","LUNCH","SKIDSKOR","HANTVERK","ALTARE","PENNA","SM\xd6R","KUDDE","SLOTT","RULLE","BIT","SURRA","HAMMARE","GOLV","ARREST","BRYTA","T\xc4RNING","FICKA","TENN","PLATT","G\xd6K","H\xc5R","LERA","JUVELERARE","HERKULES","KLINGA","MYGGA","\xc4RTA","ISLAND","FROST","KAROSS","POTATIS","KN\xc4PP","KAKA","SK\xd6LDPADDA","JUL","K\xd6RSB\xc4R","MOSES","PAR","K\xc4PP","KULA","SKORPA","SPRUTA","PEPPAR","MARIONETT","KVARN","MARACAS","SKUM","YELLOWSTONE","ISTIDEN","MINNE","JUMPER","BORSTE","GLAS\xd6GON","PIZZA","TV\xc5L","BIG BEN","SL\xc4DE","LILA","BUBBLA","SKED","L\xd6K","DJINN","K\xc4RL","SHERLOCK","BUKT","TORKTUMLARE","BROR","R\xd6RA","PALL","F\xc5GELSKR\xc4MMA","NOTRE DAME","KILT","SKJUL","BONSAI","UNDERLAND","SLUNGA","EKORRE","SPORRE","MARATON","\xd6RA","POPCORN","GULDLOCK","\xc4GG","BIKINI","KYSS","FIFFLA","L\xc4DER","KUST","GAS","SVART H\xc5L","SAND","DR\xd6M","STETOSKOP","BEBIS","TEEPEE","MIL","D\xd6MA","LAVA","NYLON","GITARR","BI","GUMMI","MYNT","R\xd6K","HJ\xc4LM","K\xd6K","SAHARA","REGISTER","SKRAPA","VINGE","HACKA","M\xc5LA","SKALLE","BIO","\xc4DEL","NEWTON","KANNA","L\xd6V","ASKA","KRAGE","F\xd6NSTER","SKOGSHUGGARE","K\xc4RLEK","SOPPA","BL\xc4CK","KROG","FLOD","SFINX","SHERWOOD","S\xc5R","GET","BAD","KLEOPATRA","SALLAD","M\xc4SSING","VISSELPIPA","S\xc4PO","T\xc4NDER","REGISS\xd6R","BREV","KAPTEN","POLERA","KRABBA","TEGELSTEN","EINSTEIN","HYMN","MOHAWK","L\xc4GER","UNIVERSITET","JOKER","KO","SKJUTA","DOLLAR","MINUT","H\xd6","ARM\xc9","PENTAGON","BIG BANG","COLUMBUS","PAJ","SMED","JOAN OF ARC","VITTRA","FJ\xc4RIL","HJUL","TANDL\xc4KARE","OST","JORDEN","NAPOLEON","TEXAS","GATA","FEBER","DIMMA","RAKHYVEL","KABEL","GUVERN\xd6R","COWBOY","KUNG ARTHUR","BRUD","CAESAR","V\xc4XTHUS","STOFT","TOFFLA","V\xc4TTE","KVACKSALVARE","VOLYM","SKIDA","RYSSLAND","P\xc4RLA","STILLA HAVET","KOKA","P\xc5SK","KVARTAL","MIKROV\xc5GSUGN","DUSCH","BR\xc4NSLE","JORDB\xc4VNING","KR\xc5KA","MAGIKER","NERV","\xc5SKA","MUSKET\xd6R","GLACI\xc4R","PULVER","ROLL","VARULV","KEDJA","SEKUND","BRITS","SK\xc4GG","\xc5NGA","MOLN","K\xc4RASTE","KLISTERM\xc4RKE","ORM","SLAGSKEPP","STRID","KARTA","VIRUS","TORNADO","ENHJULING","PAPEGOJA","HAMBURGARE","TECKEN","NOAK","TROLLKARL","PARAD","F\xd6RKL\xc4DE","CURRY","STR\xc5LE","SKRIVBORD","PILLER","R\xc5TTA","BACON","SUDDGUMMI","PATIENT","SKRUV","OAS","VENUS","B\xc4NK","RIVA","ST. PATRICK","V\xc4G","KALK","GYMNAST","METER","RODEO","SILKE","KAFFE","LURA","SMOOTHIE","SALSA","SEGLA","ULL","TUNNEL","TR\xc4DG\xc5RD","LUKT","D\xd6RR","TR\xc4","RIKE","ELEFANT","BETYG","BLIND","SQUASH","MAMMA","TECKNING","R\xc4LS","MISS","B\xd6RS","IGLOO","L\xc4PP","APA","KUBB","S\xd6T","F\xd6RARE","DELTA","SALT","SL\xd6","V\xc5NING","ST\xc5L","SHORTS","STORM","RULLSTOL","STALL","V\xc4XEL","BALLONG","BARBECUE","KL\xc4NNING","BAS","HAWAII","SENAP","L\xc4KARE","MANET","ALASKA","\xd6L","MONA LISA","BONDG\xc5RD","KORSFARARE","TRICK","KOPP","TV\xc4TT","POLO","SK\xc5LA","RUSTNING","TE","VARG","SUMO","BR\xd6D","ESS","ROST","\xd6NSKA","KNOP","STRUT","BRASILIEN","G\xd6MMA","HALLOWEEN","TOMTEN","HJ\xc4RNA","TOPP","HUS","JORDN\xd6T","SKAL","\xc4NDE","TRUMPET","SPEGEL","PADDEL","BRUDGUM","SIDA","POP","B\xd6NA","FLIS","KOMET","GRIS","HISTORIA","MAGASIN","GLITTER","S\xc4CK","STUBB","SOCKER","SOL","H\xc4FTE","PIPPI","RADIO","DRESSING","TR\xc4SK","MANIKYR","\xd6VERSV\xc4MNING","ST\xc4MPEL","K\xc4RRA","SNIGEL","VIRTUELL","SERVIT\xd6R","PERSIKA","RUM","BOXARE","EDEN","SOVA","MINOTAUR","BR\xd6LLOP","KUNG FU","MUMIE","STEG","LINS","GANGSTER","MJ\xd6LK","GRODA","SCHAMPOO","SMOKING","LAKAN","LAVIN","REP","CHEF","SPARK","TACKA","ANDE","MODELLERA","ANKARE","N\xc4SA","TRUMMA"]},"th":{"\u0e42\u0e04\u0e49\u0e14\u0e40\u0e19\u0e21\u0e2a\u0e4c: Thailand Edition":["\u0e23\u0e39\u0e40\u0e25\u0e47\u0e15\u0e15\u0e4c","\u0e21\u0e31\u0e07\u0e01\u0e23","\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21","\u0e19\u0e49\u0e33\u0e1c\u0e36\u0e49\u0e07","\u0e23\u0e30\u0e40\u0e1a\u0e34\u0e14","\u0e1a\u0e48\u0e2d\u0e19","\u0e0a\u0e34\u0e07\u0e0a\u0e49\u0e32\u0e2a\u0e27\u0e23\u0e23\u0e04\u0e4c","\u0e14\u0e32\u0e27\u0e40\u0e2a\u0e32\u0e23\u0e4c","\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c\u0e15\u0e48\u0e32\u0e07\u0e14\u0e32\u0e27","\u0e41\u0e2a\u0e49","\u0e02\u0e31\u0e49\u0e27\u0e42\u0e25\u0e01\u0e43\u0e15\u0e49","\u0e15\u0e38\u0e4a\u0e01\u0e15\u0e32\u0e2b\u0e34\u0e21\u0e30","\u0e04\u0e2d\u0e19\u0e40\u0e2a\u0e34\u0e23\u0e4c\u0e15","\u0e0a\u0e47\u0e2d\u0e01\u0e42\u0e01\u0e41\u0e25\u0e15","\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19\u0e40\u0e08\u0e47\u0e17","\u0e40\u0e28\u0e23\u0e29\u0e10\u0e35","\u0e44\u0e14\u0e42\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c","\u0e42\u0e08\u0e23\u0e2a\u0e25\u0e31\u0e14","\u0e02\u0e34\u0e21","\u0e40\u0e1e\u0e19\u0e01\u0e27\u0e34\u0e19","\u0e41\u0e21\u0e07\u0e21\u0e38\u0e21","\u0e02\u0e35\u0e1b\u0e19\u0e32\u0e27\u0e38\u0e18","\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e39\u0e15","\u0e1b\u0e37\u0e19\u0e1e\u0e01","\u0e42\u0e23\u0e04","\u0e2a\u0e32\u0e22\u0e25\u0e31\u0e1a","\u0e40\u0e08\u0e49\u0e32\u0e2b\u0e0d\u0e34\u0e07","\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30","\u0e02\u0e42\u0e21\u0e22","\u0e42\u0e2d\u0e40\u0e1b\u0e23\u0e48\u0e32","\u0e2d\u0e31\u0e28\u0e27\u0e34\u0e19","\u0e2a\u0e19\u0e32\u0e21\u0e01\u0e35\u0e2c\u0e32","\u0e15\u0e38\u0e4a\u0e01\u0e15\u0e38\u0e4a\u0e01","\u0e1c\u0e35","\u0e23\u0e16\u0e15\u0e39\u0e49","\u0e44\u0e2d\u0e28\u0e01\u0e23\u0e35\u0e21","\u0e40\u0e25\u0e40\u0e0b\u0e2d\u0e23\u0e4c","\u0e15\u0e32\u0e22","\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25","\u0e23\u0e16\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19","\u0e2b\u0e21\u0e36\u0e01\u0e22\u0e31\u0e01\u0e29\u0e4c","\u0e40\u0e2e\u0e25\u0e34\u0e04\u0e2d\u0e1b\u0e40\u0e15\u0e2d\u0e23\u0e4c","\u0e08\u0e34\u0e07\u0e42\u0e08\u0e49","\u0e01\u0e25\u0e49\u0e2d\u0e07\u0e08\u0e38\u0e25\u0e17\u0e23\u0e23\u0e28\u0e19\u0e4c","\u0e2b\u0e19\u0e38\u0e21\u0e32\u0e19","\u0e22\u0e2d\u0e14\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c","\u0e01\u0e25\u0e49\u0e2d\u0e07\u0e42\u0e17\u0e23\u0e17\u0e23\u0e23\u0e28\u0e19\u0e4c","\u0e23\u0e48\u0e21\u0e0a\u0e39\u0e0a\u0e35\u0e1e","\u0e1b\u0e25\u0e32\u0e15\u0e35\u0e19","\u0e42\u0e2d\u0e25\u0e34\u0e21\u0e1b\u0e31\u0e2a","\u0e14\u0e32\u0e27\u0e40\u0e17\u0e35\u0e22\u0e21","\u0e19\u0e32\u0e07\u0e1f\u0e49\u0e32","\u0e2b\u0e38\u0e48\u0e19\u0e22\u0e19\u0e15\u0e4c","\u0e22\u0e39\u0e19\u0e34\u0e04\u0e2d\u0e23\u0e4c\u0e19","\u0e41\u0e21\u0e48\u0e21\u0e14","\u0e2a\u0e31\u0e1b\u0e40\u0e2b\u0e23\u0e48\u0e2d","\u0e19\u0e31\u0e01\u0e1b\u0e23\u0e30\u0e14\u0e32\u0e19\u0e49\u0e33","\u0e22\u0e32\u0e1e\u0e34\u0e29","\u0e2a\u0e30\u0e1e\u0e32\u0e19","\u0e44\u0e1f","\u0e42\u0e15\u0e4a\u0e30","\u0e27\u0e32\u0e2c","\u0e1e\u0e23\u0e30\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c","\u0e08\u0e34\u0e49\u0e07\u0e08\u0e01","\u0e2b\u0e21\u0e2d","\u0e27\u0e31\u0e14","\u0e40\u0e02\u0e47\u0e21\u0e02\u0e31\u0e14","\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25","\u0e25\u0e21","\u0e2a\u0e34\u0e07\u0e42\u0e15","\u0e15\u0e32","\u0e2d\u0e32\u0e01\u0e32\u0e28","\u0e01\u0e23\u0e30\u0e15\u0e48\u0e32\u0e22","\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23","\u0e2b\u0e0d\u0e49\u0e32","\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e07\u0e01\u0e32\u0e22","\u0e41\u0e04\u0e23\u0e30","\u0e1b\u0e48\u0e32","\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c","\u0e16\u0e38\u0e07\u0e21\u0e37\u0e2d","\u0e41\u0e2d\u0e1b\u0e40\u0e1b\u0e34\u0e49\u0e25","\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19","\u0e1b\u0e23\u0e38\u0e07","\u0e2b\u0e21\u0e35","\u0e41\u0e21\u0e27","\u0e0a\u0e35\u0e27\u0e34\u0e15","\u0e14\u0e27\u0e07","\u0e22\u0e31\u0e01\u0e29\u0e4c","\u0e2b\u0e19\u0e49\u0e32","\u0e0a\u0e32\u0e22\u0e2b\u0e32\u0e14","\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21","\u0e19\u0e49\u0e33","\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29","\u0e2b\u0e19\u0e2d\u0e19","\u0e17\u0e19\u0e32\u0e22","\u0e19\u0e31\u0e01\u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c","\u0e40\u0e15\u0e49\u0e19","\u0e41\u0e04\u0e23\u0e2d\u0e17","\u0e0b\u0e2d\u0e2a\u0e21\u0e30\u0e40\u0e02\u0e37\u0e2d\u0e40\u0e17\u0e28","\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19","\u0e2a\u0e33\u0e25\u0e35","\u0e40\u0e17\u0e49\u0e32","\u0e2b\u0e19\u0e39","\u0e21\u0e35\u0e14","\u0e42\u0e23\u0e07\u0e20\u0e32\u0e1e\u0e22\u0e19\u0e15\u0e23\u0e4c","\u0e15\u0e33\u0e23\u0e27\u0e08","\u0e40\u0e23\u0e37\u0e2d","\u0e19\u0e31\u0e01\u0e1a\u0e34\u0e19","\u0e19\u0e34\u0e49\u0e27\u0e42\u0e1b\u0e49\u0e07","\u0e04\u0e23\u0e39","\u0e02\u0e27\u0e14","\u0e27\u0e31\u0e19","\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e32","\u0e41\u0e01\u0e49\u0e27","\u0e23\u0e32\u0e0a\u0e34\u0e19\u0e35","\u0e42\u0e23\u0e07\u0e40\u0e01\u0e25\u0e37\u0e2d","\u0e2a\u0e38\u0e19\u0e31\u0e02","\u0e21\u0e49\u0e32","\u0e23\u0e2d\u0e07\u0e40\u0e17\u0e49\u0e32","\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49","\u0e21\u0e07\u0e01\u0e38\u0e0e","\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07","\u0e17\u0e2d\u0e07","\u0e2a\u0e49\u0e2d\u0e21","\u0e40\u0e27\u0e25\u0e32","\u0e02\u0e25\u0e38\u0e48\u0e22","\u0e04\u0e1a\u0e40\u0e1e\u0e25\u0e34\u0e07","\u0e2b\u0e34\u0e21\u0e30","\u0e07\u0e32","\u0e17\u0e2b\u0e32\u0e23","\u0e1e\u0e35\u0e23\u0e30\u0e21\u0e34\u0e14","\u0e40\u0e0a\u0e37\u0e2d\u0e01","\u0e1b\u0e25\u0e2d\u0e21","\u0e42\u0e21\u0e40\u0e25\u0e01\u0e38\u0e25","\u0e2a\u0e31\u0e07\u0e06\u0e17\u0e32\u0e19","\u0e25\u0e39\u0e48","\u0e23\u0e49\u0e32\u0e07","\u0e2b\u0e22\u0e38\u0e14","\u0e2b\u0e21\u0e31\u0e01","\u0e02\u0e22\u0e32\u0e22","\u0e41\u0e1b\u0e25\u0e07","\u0e2a\u0e48\u0e2d\u0e07","\u0e25\u0e2d\u0e22","\u0e40\u0e02\u0e32","\u0e2a\u0e32\u0e01","\u0e01\u0e27\u0e19","\u0e16\u0e2d\u0e19","\u0e01\u0e23\u0e30\u0e17\u0e48\u0e2d\u0e21","\u0e42\u0e19\u0e4a\u0e15","\u0e2a\u0e32\u0e1b","\u0e42\u0e1b\u0e48\u0e07","\u0e17\u0e2d\u0e07\u0e41\u0e14\u0e07","\u0e09\u0e25\u0e2d\u0e07","\u0e15\u0e30\u0e01\u0e23\u0e49\u0e2d","\u0e08\u0e35\u0e49","\u0e2b\u0e19\u0e31\u0e07","\u0e44\u0e2d","\u0e23\u0e16\u0e14\u0e48\u0e27\u0e19","\u0e41\u0e2b\u0e25\u0e21","\u0e22\u0e32\u0e07","\u0e27\u0e34\u0e15\u0e32\u0e21\u0e34\u0e19","\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27","\u0e40\u0e15\u0e48\u0e32","\u0e2d\u0e2d\u0e21","\u0e41\u0e23\u0e07","\u0e1b\u0e31\u0e4a\u0e21","\u0e1b\u0e35\u0e4a\u0e1a","\u0e2a\u0e25\u0e32\u0e01","\u0e40\u0e2b\u0e25\u0e35\u0e48\u0e22\u0e21","\u0e23\u0e48\u0e21","\u0e28\u0e32\u0e25","\u0e04\u0e39\u0e48","\u0e22\u0e48\u0e32\u0e07","\u0e1b\u0e32\u0e14","\u0e2b\u0e21\u0e27\u0e14","\u0e44\u0e02","\u0e01\u0e25\u0e49\u0e32","\u0e01\u0e23\u0e30\u0e14\u0e32\u0e19","\u0e1e\u0e0d\u0e32\u0e19\u0e32\u0e04","\u0e1e\u0e21\u0e48\u0e32","\u0e2b\u0e2d\u0e04\u0e2d\u0e22","\u0e22\u0e38\u0e17\u0e18\u0e2b\u0e31\u0e15\u0e16\u0e35","\u0e2b\u0e21\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07","\u0e2a\u0e32\u0e22\u0e2a\u0e34\u0e0d\u0e08\u0e19\u0e4c","\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19","\u0e41\u0e2b\u0e19\u0e21","\u0e0b\u0e2d\u0e14\u0e49\u0e27\u0e07","\u0e02\u0e19\u0e21\u0e15\u0e49\u0e21","\u0e01\u0e34\u0e19\u0e23\u0e35","\u0e2a\u0e38\u0e1e\u0e23\u0e23\u0e13\u0e2b\u0e07\u0e2a\u0e4c","\u0e1e\u0e27\u0e07\u0e21\u0e32\u0e25\u0e31\u0e22","\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e","\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48","\u0e08\u0e35\u0e19","\u0e2b\u0e21\u0e2d\u0e19\u0e17\u0e2d\u0e07","\u0e2a\u0e49\u0e21\u0e15\u0e33","\u0e1b\u0e25\u0e32\u0e23\u0e49\u0e32","\u0e01\u0e23\u0e30\u0e17\u0e07","\u0e21\u0e07\u0e04\u0e25","\u0e25\u0e38\u0e21\u0e1e\u0e34\u0e19\u0e35","\u0e2b\u0e21\u0e2d\u0e0a\u0e34\u0e15","\u0e27\u0e07\u0e40\u0e27\u0e35\u0e22\u0e19","\u0e1b\u0e39","\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e27\u0e23\u0e35\u0e22\u0e4c","\u0e2a\u0e07\u0e01\u0e23\u0e32\u0e19\u0e15\u0e4c","\u0e19\u0e49\u0e33\u0e1e\u0e23\u0e34\u0e01","\u0e01\u0e30\u0e40\u0e1e\u0e23\u0e32","\u0e40\u0e08\u0e14\u0e35\u0e22\u0e4c","\u0e02\u0e31\u0e19","\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e21","\u0e1f\u0e31\u0e01","\u0e40\u0e22\u0e32\u0e27\u0e23\u0e32\u0e0a","\u0e01\u0e23\u0e30\u0e2a\u0e37\u0e2d","\u0e1a\u0e2d\u0e23\u0e4c\u0e14\u0e40\u0e01\u0e21","\u0e42\u0e08\u0e07\u0e01\u0e23\u0e30\u0e40\u0e1a\u0e19","\u0e15\u0e49\u0e21\u0e22\u0e33\u0e01\u0e38\u0e49\u0e07","\u0e14\u0e39\u0e44\u0e1a","\u0e01\u0e32\u0e25\u0e30\u0e41\u0e21","\u0e28\u0e23\u0e35\u0e23\u0e32\u0e0a\u0e32","\u0e15\u0e32\u0e01","\u0e02\u0e38\u0e19","\u0e1e\u0e31\u0e19","\u0e40\u0e22\u0e47\u0e19","\u0e2d\u0e35\u0e2a\u0e32\u0e19","\u0e28\u0e34\u0e25\u0e1b\u0e30","\u0e01\u0e25\u0e37\u0e19","\u0e1e\u0e32\u0e22","\u0e1f\u0e31\u0e19","\u0e40\u0e01\u0e29\u0e15\u0e23","\u0e15\u0e23\u0e32","\u0e1b\u0e0f\u0e34\u0e17\u0e34\u0e19","\u0e2b\u0e19\u0e27\u0e14","\u0e2a\u0e23\u0e30","\u0e01\u0e31\u0e19\u0e2a\u0e32\u0e14","\u0e2b\u0e27\u0e31\u0e14","\u0e01\u0e23\u0e48\u0e2d\u0e22","\u0e01\u0e23\u0e23\u0e40\u0e0a\u0e35\u0e22\u0e07","\u0e23\u0e30\u0e19\u0e32\u0e14","\u0e1a\u0e4a\u0e27\u0e22","\u0e41\u0e27\u0e48\u0e19","\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25","\u0e25\u0e32","\u0e40\u0e17\u0e1e","\u0e2b\u0e19\u0e49\u0e32\u0e21\u0e49\u0e32","\u0e16\u0e48\u0e32\u0e22","\u0e15\u0e35\u0e19\u0e01\u0e32","\u0e08\u0e32\u0e21","\u0e41\u0e1e\u0e19\u0e14\u0e49\u0e32","\u0e2d\u0e07\u0e28\u0e32","\u0e15\u0e32\u0e01\u0e25\u0e21","\u0e15\u0e31\u0e27\u0e15\u0e48\u0e2d","\u0e40\u0e1b\u0e25","\u0e2a\u0e2d\u0e22","\u0e2a\u0e25\u0e31\u0e14","\u0e42\u0e15\u0e40\u0e01\u0e35\u0e22\u0e27","\u0e0a\u0e32","\u0e25\u0e39\u0e01\u0e44\u0e21\u0e49","\u0e25\u0e34\u0e40\u0e01","\u0e41\u0e02\u0e01","\u0e41\u0e23\u0e14","\u0e2a\u0e22\u0e32\u0e21","\u0e28\u0e31\u0e01\u0e14\u0e34\u0e4c\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c","\u0e1e\u0e48\u0e2d\u0e04\u0e49\u0e32","\u0e1b\u0e49\u0e32\u0e22","\u0e40\u0e04\u0e35\u0e48\u0e22\u0e27","\u0e14\u0e34\u0e19\u0e41\u0e14\u0e07","\u0e2d\u0e21\u0e22\u0e34\u0e49\u0e21","\u0e42\u0e2b\u0e25","\u0e17\u0e31\u0e1a\u0e17\u0e34\u0e21","\u0e1a\u0e23\u0e34\u0e2a\u0e38\u0e17\u0e18\u0e34\u0e4c","\u0e17\u0e32\u0e07\u0e0a\u0e49\u0e32\u0e07\u0e40\u0e1c\u0e37\u0e2d\u0e01","\u0e1c\u0e39\u0e49\u0e01\u0e33\u0e01\u0e31\u0e1a","\u0e0a\u0e31\u0e49\u0e19","\u0e01\u0e32\u0e23\u0e4c\u0e15\u0e39\u0e19","\u0e42\u0e08\u0e4a\u0e01","\u0e23\u0e31\u0e07\u0e19\u0e01","\u0e2b\u0e21\u0e49\u0e2d","\u0e08\u0e38\u0e01","\u0e2b\u0e21\u0e31\u0e14","\u0e28\u0e39\u0e19\u0e22\u0e4c","\u0e1b\u0e25\u0e27\u0e01","\u0e1a\u0e32\u0e19","\u0e02\u0e19","\u0e04\u0e49\u0e2d\u0e19","\u0e40\u0e07\u0e32","\u0e41\u0e01\u0e30","\u0e01\u0e23\u0e30\u0e1a\u0e35\u0e48","\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21","\u0e2a\u0e27\u0e19","\u0e17\u0e27\u0e19","\u0e1a\u0e32\u0e07\u0e41\u0e01\u0e49\u0e27","\u0e25\u0e31\u0e01\u0e22\u0e34\u0e49\u0e21","\u0e40\u0e09\u0e32\u0e01\u0e4a\u0e27\u0e22","\u0e02\u0e32\u0e2b\u0e21\u0e39","\u0e40\u0e02\u0e47\u0e21\u0e17\u0e34\u0e28","\u0e40\u0e2d\u0e23\u0e32\u0e27\u0e31\u0e13","\u0e25\u0e2d\u0e14\u0e0a\u0e48\u0e2d\u0e07","\u0e42\u0e1b\u0e4a\u0e22\u0e40\u0e0b\u0e35\u0e22\u0e19","\u0e2a\u0e32\u0e22","\u0e21\u0e23\u0e01\u0e15","\u0e1a\u0e32\u0e07\u0e23\u0e30\u0e08\u0e31\u0e19","\u0e41\u0e2b\u0e49\u0e27","\u0e08\u0e31\u0e48\u0e27","\u0e21\u0e39\u0e25","\u0e40\u0e14\u0e37\u0e2d\u0e19","\u0e1d\u0e19","\u0e42\u0e0a\u0e2b\u0e48\u0e27\u0e22","\u0e40\u0e25\u0e22","\u0e2a\u0e49\u0e21","\u0e01\u0e23\u0e2d\u0e1a","\u0e01\u0e25\u0e2d\u0e19","\u0e25\u0e49\u0e32\u0e19","\u0e04\u0e27\u0e1a","\u0e01\u0e30\u0e40\u0e2b\u0e23\u0e35\u0e48\u0e22\u0e07","\u0e04\u0e32\u0e1a","\u0e08\u0e49\u0e33","\u0e16\u0e39\u0e01","\u0e2b\u0e01","\u0e2b\u0e2d\u0e1a","\u0e40\u0e01\u0e32\u0e30","\u0e15\u0e31\u0e19","\u0e15\u0e30\u0e40\u0e02\u0e47\u0e1a","\u0e0b\u0e2d\u0e22","\u0e0b\u0e49\u0e2d\u0e21","\u0e01\u0e23\u0e30\u0e08\u0e31\u0e1a","\u0e2b\u0e2d\u0e21","\u0e40\u0e1a\u0e35\u0e49\u0e22\u0e27","\u0e2b\u0e22\u0e34\u0e01","\u0e2b\u0e19\u0e2d\u0e07","\u0e40\u0e21\u0e47\u0e14\u0e02\u0e19\u0e38\u0e19","\u0e2a\u0e25\u0e30","\u0e20\u0e39\u0e40\u0e02\u0e32\u0e17\u0e2d\u0e07","\u0e2b\u0e21\u0e32\u0e01","\u0e2a\u0e2d\u0e14","\u0e25\u0e39\u0e01\u0e28\u0e23","\u0e02\u0e27\u0e31\u0e0d","\u0e19\u0e49\u0e33\u0e40\u0e15\u0e49\u0e32","\u0e1c\u0e49\u0e32\u0e02\u0e35\u0e49\u0e23\u0e34\u0e49\u0e27","\u0e25\u0e48\u0e32\u0e21","\u0e17\u0e49\u0e2d","\u0e01\u0e38\u0e4a\u0e01","\u0e0b\u0e36\u0e21","\u0e23\u0e30\u0e1a\u0e32\u0e22","\u0e43\u0e1a\u0e49","\u0e1d\u0e49\u0e32","\u0e40\u0e07\u0e34\u0e19","\u0e08\u0e32\u0e19\u0e1a\u0e34\u0e19","\u0e02\u0e49\u0e2d","\u0e25\u0e48\u0e2d\u0e07\u0e41\u0e01\u0e48\u0e07","\u0e22\u0e32\u0e19","\u0e23\u0e38\u0e01","\u0e25\u0e48\u0e2d","\u0e15\u0e32\u0e1b\u0e25\u0e32","\u0e19\u0e49\u0e33\u0e15\u0e01","\u0e2b\u0e27\u0e35","\u0e0a\u0e27\u0e14","\u0e21\u0e27\u0e22","\u0e1e\u0e23\u0e32\u0e22","\u0e40\u0e14\u0e47\u0e14","\u0e25\u0e31\u0e1a","\u0e25\u0e48\u0e2d\u0e07\u0e2b\u0e19","\u0e16\u0e48\u0e32\u0e19","\u0e17\u0e2d\u0e14","\u0e2a\u0e32\u0e27","\u0e24\u0e32\u0e29\u0e35","\u0e2a\u0e38\u0e20\u0e32\u0e29\u0e34\u0e15","\u0e01\u0e23\u0e27\u0e14","\u0e2b\u0e25\u0e31\u0e07","\u0e2a\u0e38\u0e48\u0e21","\u0e40\u0e01\u0e35\u0e49\u0e22\u0e27","\u0e01\u0e25\u0e40\u0e21\u0e47\u0e14","\u0e1b\u0e31\u0e01\u0e40\u0e1b\u0e49\u0e32","\u0e40\u0e2a\u0e21\u0e2d","\u0e21\u0e31\u0e14\u0e2b\u0e21\u0e35\u0e48","\u0e01\u0e23\u0e30\u0e1b\u0e38\u0e01","\u0e14\u0e49\u0e32\u0e19","\u0e04\u0e25\u0e49\u0e2d\u0e07","\u0e42\u0e25\u0e48","\u0e02\u0e2d","\u0e2b\u0e48\u0e27\u0e07","\u0e15\u0e2d\u0e07","\u0e23\u0e31\u0e48\u0e27","\u0e01\u0e33\u0e25\u0e31\u0e07","\u0e1d\u0e23\u0e31\u0e48\u0e07","\u0e25\u0e39\u0e01\u0e40\u0e2a\u0e37\u0e2d","\u0e1b\u0e49\u0e2d\u0e21","\u0e0a\u0e30\u0e19\u0e35","\u0e1f\u0e34\u0e25\u0e4c\u0e21","\u0e01\u0e32\u0e01","\u0e01\u0e23\u0e30\u0e42\u0e08\u0e21","\u0e2b\u0e25\u0e07","\u0e0a\u0e49\u0e2d\u0e19","\u0e40\u0e2b\u0e19\u0e35\u0e22\u0e27","\u0e0a\u0e48\u0e2d\u0e07","\u0e25\u0e32\u0e22\u0e21\u0e37\u0e2d","\u0e2b\u0e25\u0e48\u0e2d","\u0e25\u0e49\u0e2d","\u0e40\u0e01\u0e25\u0e35\u0e49\u0e22\u0e07","\u0e19\u0e49\u0e33\u0e22\u0e32","\u0e2b\u0e21\u0e32\u0e01\u0e40\u0e01\u0e47\u0e1a"]},"tr":{"Codenames":["POKER","EJDERHA","SAVA\u015e","BAL","BOMBA","KUMARHANE","G\xd6KDELEN","SAT\xdcRN","UZAYLI","KIRBA\xc7","ANTART\u0130KA","KARDAN ADAM","KONSER","\xc7\u0130KOLATA","JET","M\u0130LYONER","D\u0130NOZOR","KORSAN","D\xdcD\xdcK","PENGUEN","\xd6R\xdcMCEK","F\xdcZE","KONSOLOSLUK","TABANCA","HASTALIK","AJAN","PRENSES","DAH\u0130","HIRSIZ","OPERA","\u015e\xd6VALYE","STADYUM","L\u0130MUZ\u0130N","HAYALET","KAMYONET","DONDURMA","LAZER","\xd6L\xdcM","HASTANE","AMBULANS","AHTAPOT","HEL\u0130KOPTER","KANGURU","M\u0130KROSKOP","TARZAN","KAHRAMAN","TELESKOP","PARA\u015e\xdcT","KAYNANA","NEMRUT","UYDU","MELEK","ROBOT","AZRA\u0130L","CADI","MEZARCI","DALGI\xc7","ZEH\u0130R","K\xd6PR\xdc","ATE\u015e","MASA","BAL\u0130NA","AY","BALIK","DOKTOR","CAM\u0130","KEMER","HEM\u015e\u0130RE","R\xdcZGAR","\xc7\u0130ZME","PARK","ALB\xdcM","S\u0130M\u0130T","TA\u015e","\u015eOK","BEYAZ","HESAP","KUPON","MORS","PALET","REJ\u0130M","PART\u0130","MAKAS","K\xd6STEBEK","TAMPON","P\u0130L\u0130\xc7","MANTAR","\xd6RG\xdc","NUMARA","KUYRUK","ALAY","MACUN","TARLA","SATIR","CEP","P\u0130KE","SIRT","TOPUZ","TULUM","POSTA","TERAZ\u0130","S\u0130TE","V\u0130ZE","TORP\u0130L","KAPTAN","ATLAS","K\xdcME","C\u0130LT","BOY","KUR\u015eUN","BANKO","MAT","BO\u011eAZ","D\u0130YET","DO\u011eRU","D\xd6V\u0130Z","K\xd6PEK","AT","AYAKKABI","SANDALYE","TAHT","BUZ","ALTIN","\xc7ATAL","ZAMAN","FL\xdcT","FENER","YASTIK","TESB\u0130H","ASKER","P\u0130RAM\u0130T","HALAT","YILDIZ","OCAK","EKMEK","Y\xdcREK","BLOK","KUPA","\u0130\u011eNE","DON","\xd6RT\xdc","KABUK","BAYRAM","PERDE","BALTA","YAKA","D\xdc\u011eME","A\u011eIZ","ET\u0130KET","EL","YATAK","DUVAR","KULE","KART","BA\u011e","YAY","ORTA","\u0130NTERNET","KAYMAK","PAS","DAMAT","DEL\u0130K","N\u0130\u015eAN","KUVVET","ANAHTAR","MOTOR","DALGA","AKIM","BA\u015e","\u0130SKELE","\xc7EK\u0130RDEK","KAZA","D\xdc\u015e","KAZIK","PUL","DA\u0130RE","A\u011e","KANAL","\u0130STANBUL","AVUSTRALYA","KIBRIS","TOKYO","MISIR","REKLAM","KAVURMA","MOSKOVA","D\xd6VME","MEVLANA","HOLLYWOOD","B\u0130ZANS","ROMA","ARABESK","N\u0130NJA","LAZ","MANGO","ALMANYA","DEVLET","AMER\u0130KA","MEZOPOTAMYA","\u0130NG\u0130LTERE","SURV\u0130VOR","KR\u0130Z","MECNUN","E\u015eK\u0130YA","NAL","GULYABAN\u0130","\u0130RAN","BERL\u0130N","KARINCA","AVRUPA","H\u0130ND\u0130STAN","\xc7EY\u0130Z","EVEREST","KALPAZAN","PEK\u0130N","KARTAL","PAZI","BAKLAVA","H\u0130T\u0130T","YA\u015e","ATLET","D\u0130Z\u0130","BASKI","DERECE","DOLU","TABLET","YE\u015e\u0130L","ALEM","MAR\u015e","KU\u015eAK","BOZUK","MAKARA","A\u011eA\xc7","BOT","ZAR","ORDU","G\xd6\xc7","SERV\u0130S","MARS","G\xd6BEK","FEST\u0130VAL","OMURGA","\xc7ATI","D\xdcMEN","\u0130Z","TAKIM","\xc7AY","KANUN","FAN","FIR\xc7A","KAHVE","TAVLA","G\xdcL","ANA","KOCA","MASKARA","PAZAR","TEZ","MAYA","U\u015eAK","MEMUR","KEP\xc7E","BEY\u0130N","KLAS\u0130K","KOVAN","PALA","SO\u011eUK","ASLAN","TOP","BANKA","G\xd6Z","HAVA","TAV\u015eAN","PASTA","ELB\u0130SE","\xc7\u0130MEN","C\xdcCE","ORMAN","ARABA","ELD\u0130VEN","BERE","BENZ\u0130N","A\u015e\xc7I","AYI","KED\u0130","HAYAT","P\u0130R\u0130N\xc7","DEV","Y\xdcZ","PLAJ","OTEL","SU","KA\u011eIT","SOLUCAN","AVUKAT","B\u0130L\u0130M ADAMI","DANS","HAVU\xc7","SEPET","GECE","PAMUK","AYAK","FARE","BI\xc7AK","T\u0130YATRO","POL\u0130S","GEM\u0130","P\u0130LOT","PARMAK","\xd6\u011eRETMEN","\u015e\u0130\u015eE","G\xdcN","KRAL","BARDAK","ELMAS","D\u0130\u015e","KOPYA","DARBE","F\u0130LM","GIRGIR","ARPACIK","HORTUM","IZGARA","TORP\u0130DO","KEPEK","GICIK","KESE","KISIR","KOLON","KULA\xc7","GAZ\u0130NO","FELEK","KAVAL","K\u0130TAP","TIP","KAYNAK","GARAJ","PA\xc7A","LAST\u0130K","SAZ","SET","FAR","KUTU","KANEPE","MAKAM","\u015eANS","MERKEZ","\xdcNL\xdc","DEV\u0130R","D\xdc\u011e\xdcN","TABLO","G\xd6LGE","GAZ","KALE","HAZ\u0130NE","K\xd6Y","MODA","HAVUZ","MAGAZ\u0130N","K\xdcPE","FATURA","SAYFA","\xc7AMA\u015eIR","TUR","AMAZON","SAHTE","OYUNCAK","SIRA","FORM","KARE","KA\u015e","SANDIK","ACI","TREN","SOSYETE","\xd6RG\xdcT","S\xd6Z","U\xc7AK","ADET","BALKON","\xc7OBAN","AYNA","KURU","DEL\u0130","YAZ","NOT","B\xd6L\xdcM","\u015eER\u0130T","YUNAN\u0130STAN","H\xdcCRE","MEZUN\u0130YET","FAUL","LONDRA","MUC\u0130ZE","TEMEL","AFR\u0130KA","B\u0130LYE","YA\u011eMUR","KUYU","KANAT"]},"tl":{"Codenames: Philippine Edition":["PUSOY DOS","TIKBALANG","DIGMAAN","ASUKAL","BOMBA","LOTTO","DARNA","PANDAY","DAYUHAN","LATIGO","GAYUMA","AGIMAT","CONCERT","CHOCNUT","BAHAY KUBO","MILYONARYO","TINIKLING","DOWNLOAD","KALESA","SABONG","GAGAMBA","DIWATA","EMBASSY","BARIL","SAKIT","TIKTIK","PRINSESA","ASWANG","MAGNANAKAW","ALIBATA","MASSKARA","ATI-ATIHAN","MERCEDES","MULTO","VAN","SORBETES","SINULOG","PATAY","OSPITAL","AMBULANSYA","PUSIT","HELIKOPTER","TARSIER","NAZARENO","TIYANAK","BAYANI","EAT BULAGA","DOLPHY","BUBBLE GANG","TV PATROL","SATELLITE","ANGHEL","ROBOT","TAMARAW","MANGKUKULAM","ALBULARYO","SCUBA DIVER","LASON","TULAY","APOY","TABLE","DUGONG","BUWAN","ISDA","DUKTOR","SIMBAHAN","SINTURON","NARS","HANGIN","LAWIN","MATA","SAGING","ASKAL","BANGKO","DAMO","PINYA","DUWENDE","GUBAT","KOTSE","PATIS","MANGGA","LANGIS","KUSINERO","BUNDOK","SAGO\u2019T GULAMAN","BUHAY","SWERTE","KAPRE","MUKHA","BEACH","HOTEL","TUBIG","PAPEL","UOD","ABOGADO","GAMOT","SAYAW","KOMIKS","TOYO","GABI","KULAMBO","PAA","DAGA","KUTSILYO","SINEHAN","PULIS","BANGKA","KAPITAN","DAGAT","GURO","BOTE","ARAW","HARI","BASO","REYNA","NGIPIN","DILIM","KABAYO","TSINELAS","UPUAN","KORONA","YELO","GINTO","FORK","ORAS","PAARALAN","LAMPARA","SILI","MANI","SUNDALO","ABAY","TALI","STAR","SINGSING","MAHAL","PUSO","HARANG","TUBO","AHENTE","LINYA","LAMAN","BOARD","LOOB","ALAGA","ALIS","GALAW","GAMIT","GAWA","TAYA","KAMAY","KAMA","SUWELDO","INIT","CARD","DUYAN","DYARYO","KRUS","ILAW","LAMOK","PASA","LATA","BUTAS","WATAWAT","BASURA","SUSI","MAKINA","DALAGA","BINATA","ULO","LIBRO","CENTER","BAGSAK","UNAN","ULAP","LUPA","LARUAN","HULI","YOSI","BALIKBAYAN","EDSA","CALL CENTER","IPIS","SM","JOLLIBEE","VIDEOKE","PASKO","YAYA","PASALUBONG","SAUDI","TRAPIK","DVD","GINEBRA","TELESERYE","JEEPNEY","BARONG","HARANA","BARANGAY","GITARA","PAN DE SAL","SIKYU","TRICYCLE","OFW","ADOBO","RECTO","KALABAW","BALUT","MANILA","RICE","LECHON","BUKO","CHARGE","PARTY","HIPON","IRON","APO","SALAMIN","KAIBIGAN","BAGO","SUMPA","BABA","PATOLA","ITLOG","HULOG","GALA","HASA","HAMON","TABLA","NATIONAL","TUYO","STOCK","TIDE","INSTANT","SARI SARI","COMMANDER","SMART","GLOBE","BUWAYA","ALASKA","IPIT","CHECK","LAMIG","PAG-IBIG","PAG-ASA","MINERAL","PARADA","LOAD","PINATUBO","SIRENA","STICK","BALAT","BUKOL","LAGAY","TANDA","PILI","TAMA","TALA","PASO","ADIDAS","SIGA","BUKAS","KORTE","PAROKYA","KULTURA","KAPA","SIBAT","SUKA","SARDINAS","BRASO","LAPU-LAPU","DAAN","BATO","PATONG","FIXER","SIPA","SINGIT","TAWAD","BULAKLAK","PRESS","ABOT","KAHON","AIRCON","PALAD","CELLPHONE","BAYAW","BARKADA","MERYENDA","BAON","TITA","VALUE MEAL","TAHO","MUSLIM","HONG KONG","SINGAPORE","AMERICA","TAPSILOG","PANSIT","PUTO","DIVISORIA","UKAY UKAY","FISH BALL","ISAW","BONIFACIO","UP","PILIPINO","GMA","UGAT","LUNETA","DINUGUAN","IGLESIA","HALO-HALO","COMEDY","CHICHARON","KESO","PITO","BUNOT","PAL","CHINA","FAN","KATIPUNAN","KABIT","METRO","KONDUKTOR","COMMUTE","MURA","BASA","GOMA","QUEZON","SULAT","TYPE","LAKAD","MASA","SALA","BAGA","SIPSIP","PAYONG","WALIS","MANOK","ASAWA","BARYA","MAGNOLIA","BAGYO","BAHA","ISLA","LUZON","VISAYAS","MINDANAO","HOTDOG","LEAD","CEBU","ERAP","DAVAO","HOLY WEEK","AQUINO","GANA","MARCOS","TRIP","TRAPO","RIZAL","LIBRE","BISITA","BETAMAX","GIMIK","BARBERO","SIKAT","MODEL","SEPILYO","BUS","PLASTIC","PALENGKE","TAXI","UTANG","BAGUIO","BORACAY","GILAS","POST","SAN MIGUEL","PARLOR","AGUINALDO","BUNTOT","LIGO","KASALAN","DASAL","SINGER","BANDA","SHOT","TABLET","BOLA","BAR","PAPUTOK","PAMILYA","AMPAO","CEBU PAC","PUNO","CHICK","TURO","KITA","CLUB","SANTO NINO","BOSSING","PIYESTA"]},"fa":{"Codenames":["\u0632\u0645\u0627\u0646","\u062c\u0646","\u0686\u0627\u0647","\u0633\u0631","\u0631\u0648\u062d","\u0622\u0645\u0631\u06cc\u06a9\u0627","\u0631\u0634\u0648\u0647","\u0641\u0636\u0627","\u0648\u06cc\u0631\u0648\u0633","\u0632\u0646\u062f\u06af\u06cc","\u06a9\u0644\u0627\u063a","\u067e\u0644\u0627\u0633\u062a\u06cc\u06a9","\u0622\u0645\u0627\u0632\u0648\u0646","\u0634\u06cc\u0631","\u0647\u0648\u0627\u067e\u06cc\u0645\u0627","\u0628\u0627\u0631\u0627\u0646","\u0639\u0642\u0627\u0628","\u067e\u0627\u0631\u06a9","\u062c\u0647\u0646\u0645","\u062e\u0631\u06af\u0648\u0634","\u0639\u0645\u0647","\u0633\u06cc\u0645\u0631\u063a","\u0641\u06cc\u0644","\u0686\u062a\u0631","\u0627\u0633\u062a\u0627\u062f\u06cc\u0648\u0645","\u0628\u0648\u0642","\u0628\u0645\u0628","\u0646\u06cc","\u0631\u0647\u0628\u0631","\u0644\u0648\u0644\u0647","\u062a\u0648\u067e","\u0645\u062d\u0627\u0641\u0638","\u0631\u06af\u0628\u0627\u0631","\u0633\u0648\u0633\u06a9","\u0645\u0627\u0645\u0648\u0631","\u0645\u0633\u062c\u062f","\u06af\u0627\u0648","\u067e\u0631\u0648\u0627\u0632","\u06a9\u06cc\u0648\u06cc","\u0628\u0631\u06af","\u0630\u0631\u0647 \u0628\u06cc\u0646","\u062e\u0641\u0627\u0634","\u067e\u06cc\u0627\u0645","\u0646\u062a","\u0642\u0644\u0647","\u062c\u062f\u0648\u0644","\u062e\u0644\u06cc\u062c \u0641\u0627\u0631\u0633","\u062a\u062e\u0645\u0647","\u06a9\u0648\u0633\u0647","\u0641\u0648\u062a\u0628\u0627\u0644","\u0628\u0627\u0646\u06a9","\u0645\u0648\u062a\u0648\u0631","\u062c\u0648\u0631\u0627\u0628","\u062f\u0648\u0644\u062a","\u0633\u0631\u062f","\u0633\u062f","\u067e\u0627\u0631\u0633","\u0622\u0628","\u062e\u0631\u0645\u0627","\u0622\u0647\u0646","\u0641\u0634\u0627\u0631","\u0644\u0646\u062f\u0646","\u0631\u0633\u062a\u0645","\u0622\u0641\u062a\u0627\u0628\u0647","\u0646\u0642\u0634","\u0645\u062f\u0631\u0633\u0647","\u0633\u0631\u0648\u06cc\u0633","\u0628\u0627\u0632\u0627\u0631","\u0628\u06cc\u0645\u0627\u0631\u0633\u062a\u0627\u0646","\u0627\u06cc\u0631\u0627\u0646","\u0622\u0641\u0631\u06cc\u0642\u0627","\u0645\u0634\u062a\u0631\u06cc","\u0637\u0644\u0627","\u0642\u0645","\u0635\u0627\u0628\u0648\u0646","\u06a9\u0631\u0647","\u062f\u0646\u062f\u0647","\u06a9\u0648\u062a\u0627\u0647","\u0639\u0631\u0642","\u0634\u0645\u0627\u0644","\u0639\u0634\u0642","\u0628\u0627\u062f","\u06a9\u0627\u067e\u06cc\u062a\u0627\u0646","\u0633\u0648\u0632\u0634","\u0642\u0637\u0628","\u0627\u0631\u0648\u067e\u0627","\u062c\u0646\u06af\u0644","\u0628\u0637\u0631\u06cc","\u0628\u0627\u0632\u06cc","\u0645\u0639\u0644\u0645","\u0633\u0641\u0627\u0631\u062a","\u0627\u0644\u06a9\u0644","\u0633\u06cc\u0631\u06cc\u0634","\u0645\u0631\u06a9\u0632","\u0633\u0627\u0639\u062a","\u0642\u0637\u0627\u0631","\u062a\u0646\u062f","\u0635\u0641\u062d\u0647","\u0627\u0628\u0631 \u0642\u0647\u0631\u0645\u0627\u0646","\u0628\u06cc\u06af\u0627\u0646\u0647","\u0634\u0627\u0646\u0633","\u06a9\u0644\u06cc\u062f","\u0646\u0641\u062a","\u0645\u063a\u0627\u0632\u0647","\u0628\u0631\u062f","\u0633\u0627\u062d\u0644","\u0633\u06cc\u0646\u0647","\u067e\u0634\u0645","\u062f\u0631","\u0633\u0644\u0648\u0644","\u062a\u0648\u062a","\u062e\u0637","\u0642\u0635\u0647","\u0628\u0633\u062a\u0646\u06cc","\u062f\u0645\u0627\u0648\u0646\u062f","\u0634\u0627\u0645","\u06af\u0648\u0634\u062a","\u0642\u0646\u062f","\u0646\u0627\u0646","\u0628\u0627\u0644","\u0633\u0628\u06a9","\u06af\u0634\u0627\u062f","\u0633\u062a\u0627\u0631\u0647","\u062a\u0627\u062c","\u062f\u0633\u062a","\u0632\u0646\u06af","\u0631\u0628\u0627\u062a","\u0631\u0634\u062f","\u0644\u06cc\u0645\u0648","\u0634\u0628","\u0635\u062f\u0627","\u0631\u0646\u06af","\u0686\u0634\u0645","\u067e\u0634\u062a","\u062f\u06a9\u062a\u0631","\u062c\u0644\u0648","\u067e\u0627\u06cc\u0647","\u062a\u06cc\u063a","\u06a9\u0634","\u0686\u06cc\u0646","\u0632\u0627\u0645\u0628\u06cc","\u062e\u0648\u0631\u0634\u06cc\u062f","\u0636\u0631\u0628","\u0633\u0648\u0631\u0627\u062e","\u0647\u0631\u0645","\u0644\u06cc\u0645\u0648\u0632\u06cc\u0646","\u0644\u0628","\u062f\u06cc\u0648\u0627\u0631","\u063a\u0648\u0644","\u067e\u0627","\u0628\u0627\u0634\u06af\u0627\u0647","\u067e\u0648\u0644","\u06a9\u0634\u062a\u06cc","\u062a\u06cc\u0631","\u0647\u0645\u0627","\u0633\u062d\u0631","\u062f\u0627\u06cc\u06cc","\u062a\u0627\u0628","\u062d\u0645\u0627\u0645","\u0627\u0645\u062a\u06cc\u0627\u0632","\u062a\u0641\u0646\u06af","\u0628\u0627\u062f\u0645\u062c\u0627\u0646","\u0642\u0627\u0686\u0627\u0642","\u0686\u06a9","\u0622\u0632\u0627\u062f\u06cc","\u062f\u062e\u062a\u0631","\u0641\u0646","\u0628\u0647\u0645\u0646","\u06a9\u0627\u0628\u0648\u0633","\u0639\u0644\u0641","\u067e\u0627\u0646\u062f\u0627","\u06a9\u0644\u0641\u062a","\u06a9\u06cc\u06a9","\u062a\u0627\u0633","\u0628\u0686\u0647","\u0634\u06cc\u0637\u0627\u0646","\u06cc\u062e","\u0645\u0627\u0647","\u067e\u0646\u06af\u0648\u0626\u0646","\u0639\u0642\u0631\u0628","\u0622\u0633\u06cc\u0627","\u0645\u0648\u062c","\u0647\u0627\u0644\u06cc\u0648\u0648\u062f","\u0645\u06cc\u0645\u0648\u0646","\u0631\u0642\u0635","\u0645\u062f\u0644","\u062d\u0644\u0627\u0644","\u0642\u0631\u0627\u0631","\u067e\u0631\u0633\u062a\u0627\u0631","\u06a9\u0631\u0627\u0648\u0627\u062a","\u062a\u0627\u0631","\u0627\u0646\u0631\u0698\u06cc","\u062e\u0648\u0627\u0628","\u062c\u0646\u06af","\u0628\u0631\u062c","\u0631\u06af","\u062a\u0648\u0631","\u0642\u0631\u0645\u0632","\u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631","\u0628\u06cc\u062f","\u062c\u063a\u062f","\u067e\u0627\u0633","\u0631\u062e","\u0632\u0645\u06cc\u0646","\u062f\u0644\u0627\u0631","\u06a9\u0631\u0645","\u062f\u0645","\u062c\u0648\u0628","\u067e\u0644","\u0628\u0644\u06cc\u0637","\u062f\u0645\u0627\u063a","\u0633\u0641\u0631","\u0633\u0627\u06cc\u0647","\u06a9\u062f","\u0686\u0627\u0642\u0648","\u0647\u0648\u0634","\u0628\u0633\u062a\u0631","\u0645\u0631\u06af","\u067e\u062e\u0634","\u0633\u0648\u0632\u0646","\u062f\u0627\u06cc\u0646\u0627\u0633\u0648\u0631","\u0634\u0644\u0648\u0627\u0631","\u062d\u0644\u0642\u0647","\u062f\u0627\u0646\u0634\u0645\u0646\u062f","\u0645\u0627\u0631","\u0634\u0647\u0631\u06cc\u0627\u0631","\u062d\u0627\u0641\u0638","\u062f\u06a9\u0644","\u0686\u0631\u0628","\u0631\u06cc\u0634","\u0627\u0633\u0628","\u0647\u0646\u062f","\u0639\u0646\u06a9\u0628\u0648\u062a","\u0634\u0635\u062a","\u067e\u06cc\u0627\u0646\u0648","\u0639\u0633\u0644","\u0633\u06cc\u0627\u0646\u0648\u0631","\u062a\u0646\u06af","\u06af\u0648\u0633\u0641\u0646\u062f","\u0642\u0644\u0628","\u062d\u06cc\u0627\u0637","\u0632\u0628\u0627\u0646","\u0645\u0631\u0628\u0639","\u0645\u06a9\u0634","\u062a\u0631\u0627\u0632\u0648","\u0633\u0631\u0637\u0627\u0646","\u0645\u06cc\u0644","\u0631\u0645","\u062a\u0647\u0631\u0627\u0646","\u0645\u0627\u0633\u062a","\u0645\u0627\u0647\u0648\u0627\u0631\u0647","\u0645\u062c\u0633\u0645\u0647","\u067e\u0631\u0633\u067e\u0648\u0644\u06cc\u0633","\u062c\u0627\u062f\u0648","\u0628\u0631\u0645\u0648\u062f\u0627","\u067e\u0627\u06cc\u06cc\u0632","\u062e\u0648\u0646","\u0645\u062b\u0644\u062b","\u0637\u0644\u0633\u0645","\u062f\u0631\u062c\u0647","\u0634\u06cc\u0631\u0627\u0632","\u062f\u0633\u062a\u0647","\u0628\u0647\u0634\u062a","\u0634\u0639\u0644\u0647","\u062f\u0648\u062f","\u0627\u0698\u062f\u0647\u0627","\u0639\u0631\u0648\u0633","\u0645\u0644\u06a9\u0647","\u0622\u062f\u0645 \u0628\u0631\u0641\u06cc","\u062f\u0631\u0627\u0632","\u06a9\u0627\u0631\u062a","\u0634\u0627\u0647","\u062c\u0627\u0633\u0648\u0633","\u0641\u06cc\u0644\u062a\u0631","\u06af\u0631\u0628\u0647","\u067e\u0648\u0634\u0634","\u0628\u062f\u0644","\u0647\u0644\u06cc \u06a9\u0648\u067e\u062a\u0631","\u062a\u0644\u0633\u06a9\u0648\u067e","\u0647\u0648\u06cc\u062c","\u0622\u0645\u0628\u0648\u0644\u0627\u0646\u0633","\u067e\u0627\u06cc\u062a\u062e\u062a","\u0642\u0631\u0635","\u06a9\u0646\u062f","\u067e\u0627\u06a9","\u0632\u063a\u0627\u0644","\u0645\u0627\u0634\u06cc\u0646","\u0641\u0631\u062f\u0648\u0633\u06cc","\u0635\u0646\u062f\u0648\u0642","\u0628\u0627\u0631","\u0634\u0648\u062a","\u062a\u06cc\u06a9","\u0622\u06cc\u0646\u0647","\u0622\u0632\u0645\u0627\u06cc\u0634","\u0622\u062a\u0634","\u062e\u0627\u0644","\u06a9\u062f\u0648","\u0645\u0635\u0631","\u062f\u0634\u062a","\u0636\u0628\u0637","\u067e\u0644\u06cc\u0633","\u0634\u0648\u0631\u0634","\u0635\u062d\u0646\u0647","\u0646\u0648\u0631","\u062f\u06cc\u0648","\u0634\u0627\u062e","\u0647\u0648\u0634","\u0686\u0631\u062e","\u06a9\u0645\u0631\u0628\u0646\u062f","\u067e\u0631","\u0631\u0633\u0645","\u0641\u0644\u0632","\u0628\u0627\u062a\u0631\u06cc","\u0642\u0641\u0644","\u067e\u0646\u0628\u0647","\u0634\u0645\u0634\u06cc\u0631","\u062c\u0646\u0648\u0628","\u062c\u0627\u0645","\u067e\u0633\u0631","\u0627\u0633\u0644\u062d\u0647","\u062e\u0637\u0627","\u0645\u0647\u0631","\u062e\u06cc\u0627\u0646\u062a","\u0642\u0632\u0648\u06cc\u0646","\u0641\u0631\u0634\u062a\u0647","\u062f\u0646\u062f\u0627\u0646","\u062a\u0631\u0648\u0631","\u067e\u06cc\u0686","\u0627\u0644\u0645\u0627\u0633","\u0627\u0631\u06af","\u06a9\u0648\u06cc\u0631","\u06a9\u0641\u0634","\u062f\u0627\u062f","\u0647\u062a\u0644","\u06a9\u0645\u0627\u0646","\u0627\u0633\u062a\u0631\u0627\u0644\u06cc\u0627","\u0642\u0647\u0648\u0647 \u0627\u06cc","\u0634\u06a9\u0644\u0627\u062a","\u0633\u0646\u06af","\u0633\u06cc\u0631","\u0631\u0634\u062a\u0647","\u062c\u0648\u062c\u0647","\u0628\u0646\u062f\u0631","\u0639\u0631\u0627\u0642","\u0646\u0639\u0646\u0627","\u0645\u0627\u0647\u06cc","\u0633\u06cc\u0628","\u0633\u06cc\u062e","\u0641\u0648\u062a","\u062a\u0631\u0627\u0646\u0647","\u0628\u0631\u0641","\u0628\u0647\u0627\u0631","\u0633\u0633","\u06af\u0627\u0632","\u067e\u0631\u062a\u0642\u0627\u0644","\u0645\u0634\u062a","\u06af\u0646\u0627\u0647","\u0634\u062a\u0631","\u0645\u0648\u0634\u06a9","\u06a9\u0634\u0627\u0648\u0631\u0632","\u0627\u0633\u062a\u062e\u0631","\u062c\u06a9","\u0633\u06af","\u0633\u0628\u0632\u06cc","\u0645\u0631\u06a9\u0628","\u067e\u0633\u062a","\u0633\u0631\u0627\u0628","\u0633\u0627\u0646\u0633\u0648\u0631","\u06a9\u0627\u0641\u0647","\u0647\u0648\u0627","\u06a9\u06cc\u0634","\u06af\u0644","\u0646\u0647\u0646\u06af","\u062e\u0631\u0628\u0632\u0647","\u0632\u0646\u062f\u0627\u0646","\u06a9\u0646\u0633\u0631\u062a","\u0642\u0633\u0645\u062a","\u0642\u0631\u0642\u06cc","\u062a\u0631\u06a9\u06cc\u0647","\u062f\u0631\u06cc\u0627","\u0646\u0645\u06a9","\u0631\u0627\u06a9\u062a","\u0645\u06cc\u0632","\u0628\u0648\u0633\u0647","\u0634\u06cc\u0634\u0647","\u0686\u0633\u0628","\u0631\u0648\u0632","\u0648\u0631\u0642","\u0627\u0646\u0642\u0644\u0627\u0628","\u0645\u062b\u0642\u0627\u0644","\u062e\u0631\u0633","\u062f\u0631\u0627\u06a9\u0648\u0644\u0627","\u0628\u0632\u0631\u06af","\u0628\u0646\u062f","\u062e\u06cc\u0627\u0631","\u06a9\u062a\u0627\u0628","\u0641\u0631\u0648\u062f\u06af\u0627\u0647","\u0645\u0648\u0628\u0627\u06cc\u0644","\u062c\u0632\u06cc\u0631\u0647","\u0627\u0641\u0633\u0627\u0646\u0647"]}}')
    },
    KFGy: function(e, t, n) {
        var A = n("Uwu7")
            , r = n("cpc2")
            , a = n("kSER")
            , i = n("2Dig")
            , o = n("QN7Q")
            , E = n("NOtv")("socket.io-client:socket")
            , s = n("TypT")
            , c = n("WLGk");
        e.exports = I;
        var R = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }
            , O = r.prototype.emit;
        function I(e, t, n) {
            this.io = e,
                this.nsp = t,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0,
                this.flags = {},
            n && n.query && (this.query = n.query),
            this.io.autoConnect && this.open()
        }
        r(I.prototype),
            I.prototype.subEvents = function() {
                if (!this.subs) {
                    var e = this.io;
                    this.subs = [i(e, "open", o(this, "onopen")), i(e, "packet", o(this, "onpacket")), i(e, "close", o(this, "onclose"))]
                }
            }
            ,
            I.prototype.open = I.prototype.connect = function() {
                return this.connected ? this : (this.subEvents(),
                    this.io.open(),
                "open" === this.io.readyState && this.onopen(),
                    this.emit("connecting"),
                    this)
            }
            ,
            I.prototype.send = function() {
                var e = a(arguments);
                return e.unshift("message"),
                    this.emit.apply(this, e),
                    this
            }
            ,
            I.prototype.emit = function(e) {
                if (R.hasOwnProperty(e))
                    return O.apply(this, arguments),
                        this;
                var t = a(arguments)
                    , n = {
                    type: (void 0 !== this.flags.binary ? this.flags.binary : c(t)) ? A.BINARY_EVENT : A.EVENT,
                    data: t,
                    options: {}
                };
                return n.options.compress = !this.flags || !1 !== this.flags.compress,
                "function" === typeof t[t.length - 1] && (E("emitting packet with ack id %d", this.ids),
                    this.acks[this.ids] = t.pop(),
                    n.id = this.ids++),
                    this.connected ? this.packet(n) : this.sendBuffer.push(n),
                    this.flags = {},
                    this
            }
            ,
            I.prototype.packet = function(e) {
                e.nsp = this.nsp,
                    this.io.packet(e)
            }
            ,
            I.prototype.onopen = function() {
                if (E("transport is open - connecting"),
                "/" !== this.nsp)
                    if (this.query) {
                        var e = "object" === typeof this.query ? s.encode(this.query) : this.query;
                        E("sending connect packet with query %s", e),
                            this.packet({
                                type: A.CONNECT,
                                query: e
                            })
                    } else
                        this.packet({
                            type: A.CONNECT
                        })
            }
            ,
            I.prototype.onclose = function(e) {
                E("close (%s)", e),
                    this.connected = !1,
                    this.disconnected = !0,
                    delete this.id,
                    this.emit("disconnect", e)
            }
            ,
            I.prototype.onpacket = function(e) {
                var t = e.nsp === this.nsp
                    , n = e.type === A.ERROR && "/" === e.nsp;
                if (t || n)
                    switch (e.type) {
                        case A.CONNECT:
                            this.onconnect();
                            break;
                        case A.EVENT:
                        case A.BINARY_EVENT:
                            this.onevent(e);
                            break;
                        case A.ACK:
                        case A.BINARY_ACK:
                            this.onack(e);
                            break;
                        case A.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case A.ERROR:
                            this.emit("error", e.data)
                    }
            }
            ,
            I.prototype.onevent = function(e) {
                var t = e.data || [];
                E("emitting event %j", t),
                null != e.id && (E("attaching ack callback to event"),
                    t.push(this.ack(e.id))),
                    this.connected ? O.apply(this, t) : this.receiveBuffer.push(t)
            }
            ,
            I.prototype.ack = function(e) {
                var t = this
                    , n = !1;
                return function() {
                    if (!n) {
                        n = !0;
                        var r = a(arguments);
                        E("sending ack %j", r),
                            t.packet({
                                type: c(r) ? A.BINARY_ACK : A.ACK,
                                id: e,
                                data: r
                            })
                    }
                }
            }
            ,
            I.prototype.onack = function(e) {
                var t = this.acks[e.id];
                "function" === typeof t ? (E("calling ack %s with %j", e.id, e.data),
                    t.apply(this, e.data),
                    delete this.acks[e.id]) : E("bad ack %s", e.id)
            }
            ,
            I.prototype.onconnect = function() {
                this.connected = !0,
                    this.disconnected = !1,
                    this.emit("connect"),
                    this.emitBuffered()
            }
            ,
            I.prototype.emitBuffered = function() {
                var e;
                for (e = 0; e < this.receiveBuffer.length; e++)
                    O.apply(this, this.receiveBuffer[e]);
                for (this.receiveBuffer = [],
                         e = 0; e < this.sendBuffer.length; e++)
                    this.packet(this.sendBuffer[e]);
                this.sendBuffer = []
            }
            ,
            I.prototype.ondisconnect = function() {
                E("server disconnect (%s)", this.nsp),
                    this.destroy(),
                    this.onclose("io server disconnect")
            }
            ,
            I.prototype.destroy = function() {
                if (this.subs) {
                    for (var e = 0; e < this.subs.length; e++)
                        this.subs[e].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }
            ,
            I.prototype.close = I.prototype.disconnect = function() {
                return this.connected && (E("performing disconnect (%s)", this.nsp),
                    this.packet({
                        type: A.DISCONNECT
                    })),
                    this.destroy(),
                this.connected && this.onclose("io client disconnect"),
                    this
            }
            ,
            I.prototype.compress = function(e) {
                return this.flags.compress = e,
                    this
            }
            ,
            I.prototype.binary = function(e) {
                return this.flags.binary = e,
                    this
            }
    },
    KQm4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
                return a
            }
        ));
        var A = n("a3WO");
        var r = n("BsWD");
        function a(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Object(A.a)(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || Object(r.a)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    NFEU: function(e, t, n) {
        "use strict";
        (function(e) {
                var n, A, r, a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    , i = function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }, o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var A = t[n];
                            A.enumerable = A.enumerable || !1,
                                A.configurable = !0,
                            "value"in A && (A.writable = !0),
                                Object.defineProperty(e, A.key, A)
                        }
                    }
                    return function(t, n, A) {
                        return n && e(t.prototype, n),
                        A && e(t, A),
                            t
                    }
                }(), E = "undefined" !== typeof Symbol ? Symbol("immer-nothing") : (r = !0,
                    (A = "immer-nothing")in (n = {}) ? Object.defineProperty(n, A, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[A] = r,
                    n), s = "undefined" !== typeof Symbol ? Symbol("immer-draftable") : "__$immer_draftable", c = "undefined" !== typeof Symbol ? Symbol("immer-state") : "__$immer_state";
                function R(e) {
                    return !!e && !!e[c]
                }
                function O(e) {
                    if (!e || "object" !== ("undefined" === typeof e ? "undefined" : a(e)))
                        return !1;
                    if (Array.isArray(e))
                        return !0;
                    var t = Object.getPrototypeOf(e);
                    return !t || t === Object.prototype || (!!e[s] || !!e.constructor[s])
                }
                var I = Object.assign || function(e, t) {
                    for (var n in t)
                        u(t, n) && (e[n] = t[n]);
                    return e
                }
                    , T = "undefined" !== typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : "undefined" !== typeof Object.getOwnPropertySymbols ? function(e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                    }
                    : Object.getOwnPropertyNames;
                function S(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (Array.isArray(e))
                        return e.slice();
                    var n = Object.create(Object.getPrototypeOf(e));
                    return T(e).forEach((function(A) {
                            if (A !== c) {
                                var r = Object.getOwnPropertyDescriptor(e, A);
                                if (r.get) {
                                    if (!t)
                                        throw new Error("Immer drafts cannot have computed properties");
                                    r.value = r.get.call(e)
                                }
                                r.enumerable ? n[A] = r.value : Object.defineProperty(n, A, {
                                    value: r.value,
                                    writable: !0,
                                    configurable: !0
                                })
                            }
                        }
                    )),
                        n
                }
                function l(e, t) {
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++)
                            t(n, e[n], e);
                    else
                        T(e).forEach((function(n) {
                                return t(n, e[n], e)
                            }
                        ))
                }
                function N(e, t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                function u(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                function L(e, t) {
                    return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
                }
                var p = {}
                    , d = []
                    , f = function() {
                    return d[d.length - 1]
                };
                function h(e, t) {
                    var n = Array.isArray(e)
                        , A = C(e);
                    l(A, (function(t) {
                            !function(e, t, n) {
                                var A = p[t];
                                A ? A.enumerable = n : p[t] = A = {
                                    configurable: !0,
                                    enumerable: n,
                                    get: function() {
                                        return function(e, t) {
                                            M(e);
                                            var n = P(e)[t];
                                            if (!e.finalizing && n === e.base[t] && O(n))
                                                return U(e),
                                                    e.copy[t] = h(n, e);
                                            return n
                                        }(this[c], t)
                                    },
                                    set: function(e) {
                                        !function(e, t, n) {
                                            if (M(e),
                                                e.assigned[t] = !0,
                                                !e.modified) {
                                                if (L(P(e)[t], n))
                                                    return;
                                                m(e),
                                                    U(e)
                                            }
                                            e.copy[t] = n
                                        }(this[c], t, e)
                                    }
                                };
                                Object.defineProperty(e, t, A)
                            }(A, t, n || N(e, t))
                        }
                    ));
                    var r = {
                        scope: t ? t.scope : f(),
                        modified: !1,
                        finalizing: !1,
                        finalized: !1,
                        assigned: {},
                        parent: t,
                        base: e,
                        draft: A,
                        copy: null,
                        revoke: K,
                        revoked: !1
                    };
                    return function(e, t, n) {
                        Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !1,
                            writable: !0
                        })
                    }(A, c, r),
                        r.scope.push(r),
                        A
                }
                function K() {
                    this.revoked = !0
                }
                function P(e) {
                    return e.copy || e.base
                }
                function m(e) {
                    e.modified || (e.modified = !0,
                    e.parent && m(e.parent))
                }
                function U(e) {
                    e.copy || (e.copy = C(e.base))
                }
                function C(e) {
                    var t = e && e[c];
                    if (t) {
                        t.finalizing = !0;
                        var n = S(t.draft, !0);
                        return t.finalizing = !1,
                            n
                    }
                    return S(e)
                }
                function M(e) {
                    if (!0 === e.revoked)
                        throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(P(e)))
                }
                function D(e) {
                    for (var t = e.base, n = e.draft, A = Object.keys(n), r = A.length - 1; r >= 0; r--)
                        if (void 0 === t[A[r]] && !u(t, A[r]))
                            return !0;
                    return A.length !== Object.keys(t).length
                }
                function y(e) {
                    var t = e.draft;
                    if (t.length !== e.base.length)
                        return !0;
                    var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                    return !(!n || n.get)
                }
                var g = Object.freeze({
                    scopes: d,
                    currentScope: f,
                    willFinalize: function(e, t, n) {
                        var A = f();
                        A.forEach((function(e) {
                                return e.finalizing = !0
                            }
                        )),
                        void 0 !== e && e !== t || (n && function e(t) {
                            if (!t || "object" !== ("undefined" === typeof t ? "undefined" : a(t)))
                                return;
                            var n = t[c];
                            if (!n)
                                return;
                            var A = n.base
                                , r = n.draft
                                , i = n.assigned;
                            if (Array.isArray(t)) {
                                if (y(n)) {
                                    if (m(n),
                                        i.length = !0,
                                    r.length < A.length)
                                        for (var o = r.length; o < A.length; o++)
                                            i[o] = !1;
                                    else
                                        for (var E = A.length; E < r.length; E++)
                                            i[E] = !0;
                                    for (var s = 0; s < r.length; s++)
                                        void 0 === i[s] && e(r[s])
                                }
                            } else
                                Object.keys(r).forEach((function(t) {
                                        void 0 !== A[t] || u(A, t) ? i[t] || e(r[t]) : (i[t] = !0,
                                            m(n))
                                    }
                                )),
                                    Object.keys(A).forEach((function(e) {
                                            void 0 !== r[e] || u(r, e) || (i[e] = !1,
                                                m(n))
                                        }
                                    ))
                        }(t),
                            function(e) {
                                for (var t = e.length - 1; t >= 0; t--) {
                                    var n = e[t];
                                    !1 === n.modified && (Array.isArray(n.base) ? y(n) && m(n) : D(n) && m(n))
                                }
                            }(A))
                    },
                    createDraft: h
                })
                    , B = []
                    , G = function() {
                    return B[B.length - 1]
                };
                function v(e, t) {
                    var n = {
                        scope: t ? t.scope : G(),
                        modified: !1,
                        finalized: !1,
                        assigned: {},
                        parent: t,
                        base: e,
                        draft: null,
                        drafts: {},
                        copy: null,
                        revoke: null
                    }
                        , A = Array.isArray(e) ? Proxy.revocable([n], H) : Proxy.revocable(n, b)
                        , r = A.revoke
                        , a = A.proxy;
                    return n.draft = a,
                        n.revoke = r,
                        n.scope.push(n),
                        a
                }
                var b = {
                    get: function(e, t) {
                        if (t === c)
                            return e;
                        var n = e.drafts;
                        if (!e.modified && u(n, t))
                            return n[t];
                        var A = x(e)[t];
                        if (e.finalized || !O(A))
                            return A;
                        if (e.modified) {
                            if (A !== e.base[t])
                                return A;
                            n = e.copy
                        }
                        return n[t] = v(A, e)
                    },
                    has: function(e, t) {
                        return t in x(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(x(e))
                    },
                    set: function(e, t, n) {
                        if (!e.modified) {
                            if (n ? L(e.base[t], n) || n === e.drafts[t] : L(e.base[t], n) && t in e.base)
                                return !0;
                            V(e)
                        }
                        return e.assigned[t] = !0,
                            e.copy[t] = n,
                            !0
                    },
                    deleteProperty: function(e, t) {
                        (void 0 !== e.base[t] || t in e.base) && (e.assigned[t] = !1,
                            V(e));
                        e.copy && delete e.copy[t];
                        return !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var n = x(e)
                            , A = Reflect.getOwnPropertyDescriptor(n, t);
                        A && (A.writable = !0,
                            A.configurable = !Array.isArray(n) || "length" !== t);
                        return A
                    },
                    defineProperty: function() {
                        throw new Error("Object.defineProperty() cannot be used on an Immer draft")
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.base)
                    },
                    setPrototypeOf: function() {
                        throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")
                    }
                }
                    , H = {};
                function x(e) {
                    return e.copy || e.base
                }
                function V(e) {
                    e.modified || (e.modified = !0,
                        e.copy = I(S(e.base), e.drafts),
                        e.drafts = null,
                    e.parent && V(e.parent))
                }
                l(b, (function(e, t) {
                        H[e] = function() {
                            return arguments[0] = arguments[0][0],
                                t.apply(this, arguments)
                        }
                    }
                )),
                    H.deleteProperty = function(e, t) {
                        if (isNaN(parseInt(t)))
                            throw new Error("Immer only supports deleting array indices");
                        return b.deleteProperty.call(this, e[0], t)
                    }
                    ,
                    H.set = function(e, t, n) {
                        if ("length" !== t && isNaN(parseInt(t)))
                            throw new Error("Immer only supports setting array indices and the 'length' property");
                        return b.set.call(this, e[0], t, n)
                    }
                ;
                var w = Object.freeze({
                    scopes: B,
                    currentScope: G,
                    willFinalize: function() {},
                    createDraft: v
                });
                function k(e, t, n, A) {
                    Array.isArray(e.base) ? function(e, t, n, A) {
                        for (var r = e.base, a = e.copy, i = e.assigned, o = Math.min(r.length, a.length), E = 0; E < o; E++)
                            if (i[E] && r[E] !== a[E]) {
                                var s = t.concat(E);
                                n.push({
                                    op: "replace",
                                    path: s,
                                    value: a[E]
                                }),
                                    A.push({
                                        op: "replace",
                                        path: s,
                                        value: r[E]
                                    })
                            }
                        if (o < a.length) {
                            for (var c = o; c < a.length; c++)
                                n.push({
                                    op: "add",
                                    path: t.concat(c),
                                    value: a[c]
                                });
                            A.push({
                                op: "replace",
                                path: t.concat("length"),
                                value: r.length
                            })
                        } else if (o < r.length) {
                            n.push({
                                op: "replace",
                                path: t.concat("length"),
                                value: a.length
                            });
                            for (var R = o; R < r.length; R++)
                                A.push({
                                    op: "add",
                                    path: t.concat(R),
                                    value: r[R]
                                })
                        }
                    }(e, t, n, A) : function(e, t, n, A) {
                        var r = e.base
                            , a = e.copy;
                        l(e.assigned, (function(e, i) {
                                var o = r[e]
                                    , E = a[e]
                                    , s = i ? e in r ? "replace" : "add" : "remove";
                                if (o !== E || "replace" !== s) {
                                    var c = t.concat(e);
                                    n.push("remove" === s ? {
                                        op: s,
                                        path: c
                                    } : {
                                        op: s,
                                        path: c,
                                        value: E
                                    }),
                                        A.push("add" === s ? {
                                            op: "remove",
                                            path: c
                                        } : "remove" === s ? {
                                            op: "add",
                                            path: c,
                                            value: o
                                        } : {
                                            op: "replace",
                                            path: c,
                                            value: o
                                        })
                                }
                            }
                        ))
                    }(e, t, n, A)
                }
                function F(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var A = t[n]
                            , r = A.path;
                        if (0 === r.length && "replace" === A.op)
                            e = A.value;
                        else {
                            for (var i = e, o = 0; o < r.length - 1; o++)
                                if (!(i = i[r[o]]) || "object" !== ("undefined" === typeof i ? "undefined" : a(i)))
                                    throw new Error("Cannot apply patch, path doesn't resolve: " + r.join("/"));
                            var E = r[r.length - 1];
                            switch (A.op) {
                                case "replace":
                                case "add":
                                    i[E] = A.value;
                                    break;
                                case "remove":
                                    if (Array.isArray(i)) {
                                        if (E !== i.length - 1)
                                            throw new Error("Only the last index of an array can be removed, index: " + E + ", length: " + i.length);
                                        i.length -= 1
                                    } else
                                        delete i[E];
                                    break;
                                default:
                                    throw new Error("Unsupported patch operation: " + A.op)
                            }
                        }
                    }
                    return e
                }
                var Z = {
                    useProxies: "undefined" !== typeof Proxy && "undefined" !== typeof Reflect,
                    autoFreeze: "undefined" === typeof e && "verifyMinified" === function() {}
                        .name,
                    onAssign: null,
                    onDelete: null,
                    onCopy: null
                }
                    , J = new (function() {
                    function e(t) {
                        i(this, e),
                            I(this, Z, t),
                            this.setUseProxies(this.useProxies),
                            this.produce = this.produce.bind(this)
                    }
                    return o(e, [{
                        key: "produce",
                        value: function(e, t, n) {
                            var A = this;
                            if ("function" === typeof e && "function" !== typeof t) {
                                var r = t;
                                return t = e,
                                    function() {
                                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
                                            n[a - 1] = arguments[a];
                                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                                        return A.produce(i, (function(e) {
                                                var A;
                                                return (A = t).call.apply(A, [e, e].concat(n))
                                            }
                                        ))
                                    }
                            }
                            if ("function" !== typeof t)
                                throw new Error("if first argument is not a function, the second argument to produce should be a function");
                            if (void 0 !== n && "function" !== typeof n)
                                throw new Error("the third argument of a producer should not be set or a function");
                            var a = void 0;
                            if (O(e)) {
                                this.scopes.push([]);
                                var i = this.createDraft(e);
                                try {
                                    a = t.call(i, i),
                                        this.willFinalize(a, i, !!n);
                                    var o = n && []
                                        , s = n && [];
                                    if (void 0 === a || a === i)
                                        a = this.finalize(i, [], o, s);
                                    else {
                                        if (i[c].modified)
                                            throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");
                                        O(a) && (a = this.finalize(a)),
                                        n && (o.push({
                                            op: "replace",
                                            path: [],
                                            value: a
                                        }),
                                            s.push({
                                                op: "replace",
                                                path: [],
                                                value: e
                                            }))
                                    }
                                } finally {
                                    this.currentScope().forEach((function(e) {
                                            return e.revoke()
                                        }
                                    )),
                                        this.scopes.pop()
                                }
                                n && n(o, s)
                            } else if (void 0 === (a = t(e)))
                                return e;
                            return a === E ? void 0 : a
                        }
                    }, {
                        key: "setAutoFreeze",
                        value: function(e) {
                            this.autoFreeze = e
                        }
                    }, {
                        key: "setUseProxies",
                        value: function(e) {
                            this.useProxies = e,
                                I(this, e ? w : g)
                        }
                    }, {
                        key: "applyPatches",
                        value: function(e, t) {
                            return R(e) ? F(e, t) : this.produce(e, (function(e) {
                                    return F(e, t)
                                }
                            ))
                        }
                    }, {
                        key: "finalize",
                        value: function(e, t, n, A) {
                            var r = this
                                , a = e[c];
                            if (!a)
                                return Object.isFrozen(e) ? e : this.finalizeTree(e);
                            if (a.scope !== this.currentScope())
                                return e;
                            if (!a.modified)
                                return a.base;
                            if (!a.finalized) {
                                if (a.finalized = !0,
                                    this.finalizeTree(a.draft, t, n, A),
                                    this.onDelete)
                                    if (this.useProxies) {
                                        var i = a.assigned;
                                        for (var o in i)
                                            i[o] || this.onDelete(a, o)
                                    } else {
                                        var E = a.base
                                            , s = a.copy;
                                        l(E, (function(e) {
                                                u(s, e) || r.onDelete(a, e)
                                            }
                                        ))
                                    }
                                this.onCopy && this.onCopy(a),
                                this.autoFreeze && 1 === this.scopes.length && Object.freeze(a.copy),
                                n && k(a, t, n, A)
                            }
                            return a.copy
                        }
                    }, {
                        key: "finalizeTree",
                        value: function(e, t, n, A) {
                            var r = this
                                , a = e[c];
                            a && (this.useProxies || (a.finalizing = !0,
                                a.copy = S(a.draft, !0),
                                a.finalizing = !1),
                                e = a.copy);
                            var i = this.onAssign;
                            return l(e, (function o(E, s, c) {
                                    if (s === c)
                                        throw Error("Immer forbids circular references");
                                    var I = !!a && c === e;
                                    if (R(s)) {
                                        if (s = n && I && !a.assigned[E] ? r.finalize(s, t.concat(E), n, A) : r.finalize(s),
                                            Array.isArray(c) || N(c, E) ? c[E] = s : Object.defineProperty(c, E, {
                                                value: s
                                            }),
                                        I && s === a.base[E])
                                            return
                                    } else {
                                        if (I && L(s, a.base[E]))
                                            return;
                                        O(s) && !Object.isFrozen(s) && l(s, o)
                                    }
                                    I && i && i(a, E, s)
                                }
                            )),
                                e
                        }
                    }]),
                        e
                }())
                    , j = J.produce;
                J.setAutoFreeze.bind(J),
                    J.setUseProxies.bind(J),
                    J.applyPatches.bind(J);
                t.a = j
            }
        ).call(this, n("8oxB"))
    },
    NOtv: function(e, t, n) {
        (function(A) {
                t.log = function(...e) {
                    return "object" === typeof console && console.log && console.log(...e)
                }
                    ,
                    t.formatArgs = function(t) {
                        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
                            !this.useColors)
                            return;
                        const n = "color: " + this.color;
                        t.splice(1, 0, n, "color: inherit");
                        let A = 0
                            , r = 0;
                        t[0].replace(/%[a-zA-Z%]/g, e=>{
                                "%%" !== e && (A++,
                                "%c" === e && (r = A))
                            }
                        ),
                            t.splice(r, 0, n)
                    }
                    ,
                    t.save = function(e) {
                        try {
                            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                        } catch (n) {}
                    }
                    ,
                    t.load = function() {
                        let e;
                        try {
                            e = t.storage.getItem("debug")
                        } catch (n) {}
                        !e && "undefined" !== typeof A && "env"in A && (e = A.env.DEBUG);
                        return e
                    }
                    ,
                    t.useColors = function() {
                        if ("undefined" !== typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                            return !0;
                        if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                            return !1;
                        return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                    }
                    ,
                    t.storage = function() {
                        try {
                            return localStorage
                        } catch (e) {}
                    }(),
                    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                    e.exports = n("3JDX")(t);
                const {formatters: r} = e.exports;
                r.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message
                    }
                }
            }
        ).call(this, n("8oxB"))
    },
    Njrz: function(e, t, n) {
        var A = n("luTP")
            , r = n("qGlh")
            , a = Object.prototype.toString
            , i = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === a.call(Blob)
            , o = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === a.call(File);
        t.deconstructPacket = function(e) {
            var t = []
                , n = e.data
                , a = e;
            return a.data = function e(t, n) {
                if (!t)
                    return t;
                if (r(t)) {
                    var a = {
                        _placeholder: !0,
                        num: n.length
                    };
                    return n.push(t),
                        a
                }
                if (A(t)) {
                    for (var i = new Array(t.length), o = 0; o < t.length; o++)
                        i[o] = e(t[o], n);
                    return i
                }
                if ("object" === typeof t && !(t instanceof Date)) {
                    i = {};
                    for (var E in t)
                        i[E] = e(t[E], n);
                    return i
                }
                return t
            }(n, t),
                a.attachments = t.length,
                {
                    packet: a,
                    buffers: t
                }
        }
            ,
            t.reconstructPacket = function(e, t) {
                return e.data = function e(t, n) {
                    if (!t)
                        return t;
                    if (t && t._placeholder)
                        return n[t.num];
                    if (A(t))
                        for (var r = 0; r < t.length; r++)
                            t[r] = e(t[r], n);
                    else if ("object" === typeof t)
                        for (var a in t)
                            t[a] = e(t[a], n);
                    return t
                }(e.data, t),
                    e.attachments = void 0,
                    e
            }
            ,
            t.removeBlobs = function(e, t) {
                var n = 0
                    , a = e;
                !function e(E, s, c) {
                    if (!E)
                        return E;
                    if (i && E instanceof Blob || o && E instanceof File) {
                        n++;
                        var R = new FileReader;
                        R.onload = function() {
                            c ? c[s] = this.result : a = this.result,
                            --n || t(a)
                        }
                            ,
                            R.readAsArrayBuffer(E)
                    } else if (A(E))
                        for (var O = 0; O < E.length; O++)
                            e(E[O], O, E);
                    else if ("object" === typeof E && !r(E))
                        for (var I in E)
                            e(E[I], I, E)
                }(a),
                n || t(a)
            }
    },
    QN7Q: function(e, t) {
        var n = [].slice;
        e.exports = function(e, t) {
            if ("string" == typeof t && (t = e[t]),
            "function" != typeof t)
                throw new Error("bind() requires a function");
            var A = n.call(arguments, 2);
            return function() {
                return t.apply(e, A.concat(n.call(arguments)))
            }
        }
    },
    SLVX: function(e, t, n) {
        "use strict";
        function A(e) {
            var t, n = e.Symbol;
            return "function" === typeof n ? n.observable ? t = n.observable : (t = n("observable"),
                n.observable = t) : t = "@@observable",
                t
        }
        n.d(t, "a", (function() {
                return A
            }
        ))
    },
    TypT: function(e, t) {
        t.encode = function(e) {
            var t = "";
            for (var n in e)
                e.hasOwnProperty(n) && (t.length && (t += "&"),
                    t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t
        }
            ,
            t.decode = function(e) {
                for (var t = {}, n = e.split("&"), A = 0, r = n.length; A < r; A++) {
                    var a = n[A].split("=");
                    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                }
                return t
            }
    },
    Uwu7: function(e, t, n) {
        var A = n("0KJs")("socket.io-parser")
            , r = n("cpc2")
            , a = n("Njrz")
            , i = n("luTP")
            , o = n("qGlh");
        function E() {}
        t.protocol = 4,
            t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
            t.CONNECT = 0,
            t.DISCONNECT = 1,
            t.EVENT = 2,
            t.ACK = 3,
            t.ERROR = 4,
            t.BINARY_EVENT = 5,
            t.BINARY_ACK = 6,
            t.Encoder = E,
            t.Decoder = R;
        var s = t.ERROR + '"encode error"';
        function c(e) {
            var n = "" + e.type;
            if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (n += e.nsp + ","),
            null != e.id && (n += e.id),
            null != e.data) {
                var r = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (t) {
                        return !1
                    }
                }(e.data);
                if (!1 === r)
                    return s;
                n += r
            }
            return A("encoded %j as %s", e, n),
                n
        }
        function R() {
            this.reconstructor = null
        }
        function O(e) {
            this.reconPack = e,
                this.buffers = []
        }
        function I(e) {
            return {
                type: t.ERROR,
                data: "parser error: " + e
            }
        }
        E.prototype.encode = function(e, n) {
            (A("encoding packet %j", e),
            t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) ? function(e, t) {
                a.removeBlobs(e, (function(e) {
                        var n = a.deconstructPacket(e)
                            , A = c(n.packet)
                            , r = n.buffers;
                        r.unshift(A),
                            t(r)
                    }
                ))
            }(e, n) : n([c(e)])
        }
            ,
            r(R.prototype),
            R.prototype.add = function(e) {
                var n;
                if ("string" === typeof e)
                    n = function(e) {
                        var n = 0
                            , r = {
                            type: Number(e.charAt(0))
                        };
                        if (null == t.types[r.type])
                            return I("unknown packet type " + r.type);
                        if (t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type) {
                            for (var a = ""; "-" !== e.charAt(++n) && (a += e.charAt(n),
                            n != e.length); )
                                ;
                            if (a != Number(a) || "-" !== e.charAt(n))
                                throw new Error("Illegal attachments");
                            r.attachments = Number(a)
                        }
                        if ("/" === e.charAt(n + 1))
                            for (r.nsp = ""; ++n; ) {
                                if ("," === (E = e.charAt(n)))
                                    break;
                                if (r.nsp += E,
                                n === e.length)
                                    break
                            }
                        else
                            r.nsp = "/";
                        var o = e.charAt(n + 1);
                        if ("" !== o && Number(o) == o) {
                            for (r.id = ""; ++n; ) {
                                var E;
                                if (null == (E = e.charAt(n)) || Number(E) != E) {
                                    --n;
                                    break
                                }
                                if (r.id += e.charAt(n),
                                n === e.length)
                                    break
                            }
                            r.id = Number(r.id)
                        }
                        if (e.charAt(++n)) {
                            var s = function(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (t) {
                                    return !1
                                }
                            }(e.substr(n));
                            if (!(!1 !== s && (r.type === t.ERROR || i(s))))
                                return I("invalid payload");
                            r.data = s
                        }
                        return A("decoded %s as %j", e, r),
                            r
                    }(e),
                        t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type ? (this.reconstructor = new O(n),
                        0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
                else {
                    if (!o(e) && !e.base64)
                        throw new Error("Unknown type: " + e);
                    if (!this.reconstructor)
                        throw new Error("got binary data when not reconstructing a packet");
                    (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null,
                        this.emit("decoded", n))
                }
            }
            ,
            R.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }
            ,
            O.prototype.takeBinaryData = function(e) {
                if (this.buffers.push(e),
                this.buffers.length === this.reconPack.attachments) {
                    var t = a.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                        t
                }
                return null
            }
            ,
            O.prototype.finishedReconstruction = function() {
                this.reconPack = null,
                    this.buffers = []
            }
    },
    Uxeu: function(e, t) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            , A = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        e.exports = function(e) {
            var t = e
                , r = e.indexOf("[")
                , a = e.indexOf("]");
            -1 != r && -1 != a && (e = e.substring(0, r) + e.substring(r, a).replace(/:/g, ";") + e.substring(a, e.length));
            for (var i = n.exec(e || ""), o = {}, E = 14; E--; )
                o[A[E]] = i[E] || "";
            return -1 != r && -1 != a && (o.source = t,
                o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"),
                o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                o.ipv6uri = !0),
                o
        }
    },
    WLGk: function(e, t, n) {
        (function(t) {
                var A = n("6C75")
                    , r = Object.prototype.toString
                    , a = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === r.call(Blob)
                    , i = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === r.call(File);
                e.exports = function e(n) {
                    if (!n || "object" !== typeof n)
                        return !1;
                    if (A(n)) {
                        for (var r = 0, o = n.length; r < o; r++)
                            if (e(n[r]))
                                return !0;
                        return !1
                    }
                    if ("function" === typeof t && t.isBuffer && t.isBuffer(n) || "function" === typeof ArrayBuffer && n instanceof ArrayBuffer || a && n instanceof Blob || i && n instanceof File)
                        return !0;
                    if (n.toJSON && "function" === typeof n.toJSON && 1 === arguments.length)
                        return e(n.toJSON(), !0);
                    for (var E in n)
                        if (Object.prototype.hasOwnProperty.call(n, E) && e(n[E]))
                            return !0;
                    return !1
                }
            }
        ).call(this, n("tjlA").Buffer)
    },
    Wm4p: function(e, t, n) {
        var A, r = n("dkv/"), a = n("WLGk"), i = n("ypnn"), o = n("zMFY"), E = n("oIG/");
        "undefined" !== typeof ArrayBuffer && (A = n("g5Dd"));
        var s = "undefined" !== typeof navigator && /Android/i.test(navigator.userAgent)
            , c = "undefined" !== typeof navigator && /PhantomJS/i.test(navigator.userAgent)
            , R = s || c;
        t.protocol = 3;
        var O = t.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        }
            , I = r(O)
            , T = {
            type: "error",
            data: "parser error"
        }
            , S = n("14A5");
        function l(e, t, n) {
            for (var A = new Array(e.length), r = o(e.length, n), a = function(e, n, r) {
                t(n, (function(t, n) {
                        A[e] = n,
                            r(t, A)
                    }
                ))
            }, i = 0; i < e.length; i++)
                a(i, e[i], r)
        }
        t.encodePacket = function(e, n, A, r) {
            "function" === typeof n && (r = n,
                n = !1),
            "function" === typeof A && (r = A,
                A = null);
            var a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
            if ("undefined" !== typeof ArrayBuffer && a instanceof ArrayBuffer)
                return function(e, n, A) {
                    if (!n)
                        return t.encodeBase64Packet(e, A);
                    var r = e.data
                        , a = new Uint8Array(r)
                        , i = new Uint8Array(1 + r.byteLength);
                    i[0] = O[e.type];
                    for (var o = 0; o < a.length; o++)
                        i[o + 1] = a[o];
                    return A(i.buffer)
                }(e, n, r);
            if ("undefined" !== typeof S && a instanceof S)
                return function(e, n, A) {
                    if (!n)
                        return t.encodeBase64Packet(e, A);
                    if (R)
                        return function(e, n, A) {
                            if (!n)
                                return t.encodeBase64Packet(e, A);
                            var r = new FileReader;
                            return r.onload = function() {
                                t.encodePacket({
                                    type: e.type,
                                    data: r.result
                                }, n, !0, A)
                            }
                                ,
                                r.readAsArrayBuffer(e.data)
                        }(e, n, A);
                    var r = new Uint8Array(1);
                    r[0] = O[e.type];
                    var a = new S([r.buffer, e.data]);
                    return A(a)
                }(e, n, r);
            if (a && a.base64)
                return function(e, n) {
                    var A = "b" + t.packets[e.type] + e.data.data;
                    return n(A)
                }(e, r);
            var i = O[e.type];
            return void 0 !== e.data && (i += A ? E.encode(String(e.data), {
                strict: !1
            }) : String(e.data)),
                r("" + i)
        }
            ,
            t.encodeBase64Packet = function(e, n) {
                var A, r = "b" + t.packets[e.type];
                if ("undefined" !== typeof S && e.data instanceof S) {
                    var a = new FileReader;
                    return a.onload = function() {
                        var e = a.result.split(",")[1];
                        n(r + e)
                    }
                        ,
                        a.readAsDataURL(e.data)
                }
                try {
                    A = String.fromCharCode.apply(null, new Uint8Array(e.data))
                } catch (s) {
                    for (var i = new Uint8Array(e.data), o = new Array(i.length), E = 0; E < i.length; E++)
                        o[E] = i[E];
                    A = String.fromCharCode.apply(null, o)
                }
                return r += btoa(A),
                    n(r)
            }
            ,
            t.decodePacket = function(e, n, A) {
                if (void 0 === e)
                    return T;
                if ("string" === typeof e) {
                    if ("b" === e.charAt(0))
                        return t.decodeBase64Packet(e.substr(1), n);
                    if (A && !1 === (e = function(e) {
                        try {
                            e = E.decode(e, {
                                strict: !1
                            })
                        } catch (t) {
                            return !1
                        }
                        return e
                    }(e)))
                        return T;
                    var r = e.charAt(0);
                    return Number(r) == r && I[r] ? e.length > 1 ? {
                        type: I[r],
                        data: e.substring(1)
                    } : {
                        type: I[r]
                    } : T
                }
                r = new Uint8Array(e)[0];
                var a = i(e, 1);
                return S && "blob" === n && (a = new S([a])),
                    {
                        type: I[r],
                        data: a
                    }
            }
            ,
            t.decodeBase64Packet = function(e, t) {
                var n = I[e.charAt(0)];
                if (!A)
                    return {
                        type: n,
                        data: {
                            base64: !0,
                            data: e.substr(1)
                        }
                    };
                var r = A.decode(e.substr(1));
                return "blob" === t && S && (r = new S([r])),
                    {
                        type: n,
                        data: r
                    }
            }
            ,
            t.encodePayload = function(e, n, A) {
                "function" === typeof n && (A = n,
                    n = null);
                var r = a(e);
                if (n && r)
                    return S && !R ? t.encodePayloadAsBlob(e, A) : t.encodePayloadAsArrayBuffer(e, A);
                if (!e.length)
                    return A("0:");
                l(e, (function(e, A) {
                        t.encodePacket(e, !!r && n, !1, (function(e) {
                                A(null, function(e) {
                                    return e.length + ":" + e
                                }(e))
                            }
                        ))
                    }
                ), (function(e, t) {
                        return A(t.join(""))
                    }
                ))
            }
            ,
            t.decodePayload = function(e, n, A) {
                if ("string" !== typeof e)
                    return t.decodePayloadAsBinary(e, n, A);
                var r;
                if ("function" === typeof n && (A = n,
                    n = null),
                "" === e)
                    return A(T, 0, 1);
                for (var a, i, o = "", E = 0, s = e.length; E < s; E++) {
                    var c = e.charAt(E);
                    if (":" === c) {
                        if ("" === o || o != (a = Number(o)))
                            return A(T, 0, 1);
                        if (o != (i = e.substr(E + 1, a)).length)
                            return A(T, 0, 1);
                        if (i.length) {
                            if (r = t.decodePacket(i, n, !1),
                            T.type === r.type && T.data === r.data)
                                return A(T, 0, 1);
                            if (!1 === A(r, E + a, s))
                                return
                        }
                        E += a,
                            o = ""
                    } else
                        o += c
                }
                return "" !== o ? A(T, 0, 1) : void 0
            }
            ,
            t.encodePayloadAsArrayBuffer = function(e, n) {
                if (!e.length)
                    return n(new ArrayBuffer(0));
                l(e, (function(e, n) {
                        t.encodePacket(e, !0, !0, (function(e) {
                                return n(null, e)
                            }
                        ))
                    }
                ), (function(e, t) {
                        var A = t.reduce((function(e, t) {
                                var n;
                                return e + (n = "string" === typeof t ? t.length : t.byteLength).toString().length + n + 2
                            }
                        ), 0)
                            , r = new Uint8Array(A)
                            , a = 0;
                        return t.forEach((function(e) {
                                var t = "string" === typeof e
                                    , n = e;
                                if (t) {
                                    for (var A = new Uint8Array(e.length), i = 0; i < e.length; i++)
                                        A[i] = e.charCodeAt(i);
                                    n = A.buffer
                                }
                                r[a++] = t ? 0 : 1;
                                var o = n.byteLength.toString();
                                for (i = 0; i < o.length; i++)
                                    r[a++] = parseInt(o[i]);
                                r[a++] = 255;
                                for (A = new Uint8Array(n),
                                         i = 0; i < A.length; i++)
                                    r[a++] = A[i]
                            }
                        )),
                            n(r.buffer)
                    }
                ))
            }
            ,
            t.encodePayloadAsBlob = function(e, n) {
                l(e, (function(e, n) {
                        t.encodePacket(e, !0, !0, (function(e) {
                                var t = new Uint8Array(1);
                                if (t[0] = 1,
                                "string" === typeof e) {
                                    for (var A = new Uint8Array(e.length), r = 0; r < e.length; r++)
                                        A[r] = e.charCodeAt(r);
                                    e = A.buffer,
                                        t[0] = 0
                                }
                                var a = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString()
                                    , i = new Uint8Array(a.length + 1);
                                for (r = 0; r < a.length; r++)
                                    i[r] = parseInt(a[r]);
                                if (i[a.length] = 255,
                                    S) {
                                    var o = new S([t.buffer, i.buffer, e]);
                                    n(null, o)
                                }
                            }
                        ))
                    }
                ), (function(e, t) {
                        return n(new S(t))
                    }
                ))
            }
            ,
            t.decodePayloadAsBinary = function(e, n, A) {
                "function" === typeof n && (A = n,
                    n = null);
                for (var r = e, a = []; r.byteLength > 0; ) {
                    for (var o = new Uint8Array(r), E = 0 === o[0], s = "", c = 1; 255 !== o[c]; c++) {
                        if (s.length > 310)
                            return A(T, 0, 1);
                        s += o[c]
                    }
                    r = i(r, 2 + s.length),
                        s = parseInt(s);
                    var R = i(r, 0, s);
                    if (E)
                        try {
                            R = String.fromCharCode.apply(null, new Uint8Array(R))
                        } catch (S) {
                            var O = new Uint8Array(R);
                            R = "";
                            for (c = 0; c < O.length; c++)
                                R += String.fromCharCode(O[c])
                        }
                    a.push(R),
                        r = i(r, s)
                }
                var I = a.length;
                a.forEach((function(e, r) {
                        A(t.decodePacket(e, n, !0), r, I)
                    }
                ))
            }
    },
    Yvos: function(e, t) {
        e.exports = function(e, t) {
            var n = function() {};
            n.prototype = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e
        }
    },
    ZFOp: function(e, t, n) {
        "use strict";
        e.exports = e=>encodeURIComponent(e).replace(/[!'()*]/g, e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)
    },
    akSB: function(e, t, n) {
        var A = n("AdPF")
            , r = n("0z79")
            , a = n("Cl5A")
            , i = n("CIKq");
        t.polling = function(e) {
            var t = !1
                , n = !1
                , i = !1 !== e.jsonp;
            if ("undefined" !== typeof location) {
                var o = "https:" === location.protocol
                    , E = location.port;
                E || (E = o ? 443 : 80),
                    t = e.hostname !== location.hostname || E !== e.port,
                    n = e.secure !== o
            }
            if (e.xdomain = t,
                e.xscheme = n,
            "open"in new A(e) && !e.forceJSONP)
                return new r(e);
            if (!i)
                throw new Error("JSONP disabled");
            return new a(e)
        }
            ,
            t.websocket = i
    },
    bCCX: function(e, t, n) {
        "use strict";
        (function(e, A) {
                var r, a = n("SLVX");
                r = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : A;
                var i = Object(a.a)(r);
                t.a = i
            }
        ).call(this, n("yLpj"), n("3UD+")(e))
    },
    cpc2: function(e, t, n) {
        function A(e) {
            if (e)
                return function(e) {
                    for (var t in A.prototype)
                        e[t] = A.prototype[t];
                    return e
                }(e)
        }
        e.exports = A,
            A.prototype.on = A.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {},
                    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
                    this
            }
            ,
            A.prototype.once = function(e, t) {
                function n() {
                    this.off(e, n),
                        t.apply(this, arguments)
                }
                return n.fn = t,
                    this.on(e, n),
                    this
            }
            ,
            A.prototype.off = A.prototype.removeListener = A.prototype.removeAllListeners = A.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                        this;
                var n, A = this._callbacks["$" + e];
                if (!A)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks["$" + e],
                        this;
                for (var r = 0; r < A.length; r++)
                    if ((n = A[r]) === t || n.fn === t) {
                        A.splice(r, 1);
                        break
                    }
                return this
            }
            ,
            A.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                var t = [].slice.call(arguments, 1)
                    , n = this._callbacks["$" + e];
                if (n)
                    for (var A = 0, r = (n = n.slice(0)).length; A < r; ++A)
                        n[A].apply(this, t);
                return this
            }
            ,
            A.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {},
                this._callbacks["$" + e] || []
            }
            ,
            A.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
    },
    "cr+I": function(e, t, n) {
        "use strict";
        const A = n("ZFOp")
            , r = n("8jRI")
            , a = n("8yz6");
        function i(e) {
            if ("string" !== typeof e || 1 !== e.length)
                throw new TypeError("arrayFormatSeparator must be single character string")
        }
        function o(e, t) {
            return t.encode ? t.strict ? A(e) : encodeURIComponent(e) : e
        }
        function E(e, t) {
            return t.decode ? r(e) : e
        }
        function s(e) {
            const t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)),
                e
        }
        function c(e) {
            const t = (e = s(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }
        function R(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()),
                e
        }
        function O(e, t) {
            i((t = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, t)).arrayFormatSeparator);
            const n = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e,n,A)=>{
                            t = /\[(\d*)\]$/.exec(e),
                                e = e.replace(/\[\d*\]$/, ""),
                                t ? (void 0 === A[e] && (A[e] = {}),
                                    A[e][t[1]] = n) : A[e] = n
                        }
                            ;
                    case "bracket":
                        return (e,n,A)=>{
                            t = /(\[\])$/.exec(e),
                                e = e.replace(/\[\]$/, ""),
                                t ? void 0 !== A[e] ? A[e] = [].concat(A[e], n) : A[e] = [n] : A[e] = n
                        }
                            ;
                    case "comma":
                    case "separator":
                        return (t,n,A)=>{
                            const r = "string" === typeof n && n.includes(e.arrayFormatSeparator)
                                , a = "string" === typeof n && !r && E(n, e).includes(e.arrayFormatSeparator);
                            n = a ? E(n, e) : n;
                            const i = r || a ? n.split(e.arrayFormatSeparator).map(t=>E(t, e)) : null === n ? n : E(n, e);
                            A[t] = i
                        }
                            ;
                    default:
                        return (e,t,n)=>{
                            void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                        }
                }
            }(t)
                , A = Object.create(null);
            if ("string" !== typeof e)
                return A;
            if (!(e = e.trim().replace(/^[?#&]/, "")))
                return A;
            for (const r of e.split("&")) {
                let[e,i] = a(t.decode ? r.replace(/\+/g, " ") : r, "=");
                i = void 0 === i ? null : ["comma", "separator"].includes(t.arrayFormat) ? i : E(i, t),
                    n(E(e, t), i, A)
            }
            for (const r of Object.keys(A)) {
                const e = A[r];
                if ("object" === typeof e && null !== e)
                    for (const n of Object.keys(e))
                        e[n] = R(e[n], t);
                else
                    A[r] = R(e, t)
            }
            return !1 === t.sort ? A : (!0 === t.sort ? Object.keys(A).sort() : Object.keys(A).sort(t.sort)).reduce((e,t)=>{
                    const n = A[t];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" === typeof t ? e(Object.keys(t)).sort((e,t)=>Number(e) - Number(t)).map(e=>t[e]) : t
                    }(n) : e[t] = n,
                        e
                }
                , Object.create(null))
        }
        t.extract = c,
            t.parse = O,
            t.stringify = (e,t)=>{
                if (!e)
                    return "";
                i((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const n = n=>t.skipNull && (e=>null === e || void 0 === e)(e[n]) || t.skipEmptyString && "" === e[n]
                    , A = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return t=>(n,A)=>{
                                const r = n.length;
                                return void 0 === A || e.skipNull && null === A || e.skipEmptyString && "" === A ? n : null === A ? [...n, [o(t, e), "[", r, "]"].join("")] : [...n, [o(t, e), "[", o(r, e), "]=", o(A, e)].join("")]
                            }
                                ;
                        case "bracket":
                            return t=>(n,A)=>void 0 === A || e.skipNull && null === A || e.skipEmptyString && "" === A ? n : null === A ? [...n, [o(t, e), "[]"].join("")] : [...n, [o(t, e), "[]=", o(A, e)].join("")];
                        case "comma":
                        case "separator":
                            return t=>(n,A)=>null === A || void 0 === A || 0 === A.length ? n : 0 === n.length ? [[o(t, e), "=", o(A, e)].join("")] : [[n, o(A, e)].join(e.arrayFormatSeparator)];
                        default:
                            return t=>(n,A)=>void 0 === A || e.skipNull && null === A || e.skipEmptyString && "" === A ? n : null === A ? [...n, o(t, e)] : [...n, [o(t, e), "=", o(A, e)].join("")]
                    }
                }(t)
                    , r = {};
                for (const i of Object.keys(e))
                    n(i) || (r[i] = e[i]);
                const a = Object.keys(r);
                return !1 !== t.sort && a.sort(t.sort),
                    a.map(n=>{
                            const r = e[n];
                            return void 0 === r ? "" : null === r ? o(n, t) : Array.isArray(r) ? r.reduce(A(n), []).join("&") : o(n, t) + "=" + o(r, t)
                        }
                    ).filter(e=>e.length > 0).join("&")
            }
            ,
            t.parseUrl = (e,t)=>{
                t = Object.assign({
                    decode: !0
                }, t);
                const [n,A] = a(e, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: O(c(e), t)
                }, t && t.parseFragmentIdentifier && A ? {
                    fragmentIdentifier: E(A, t)
                } : {})
            }
            ,
            t.stringifyUrl = (e,n)=>{
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const A = s(e.url).split("?")[0] || ""
                    , r = t.extract(e.url)
                    , a = t.parse(r, {
                    sort: !1
                })
                    , i = Object.assign(a, e.query);
                let E = t.stringify(i, n);
                E && (E = `?${E}`);
                let c = function(e) {
                    let t = "";
                    const n = e.indexOf("#");
                    return -1 !== n && (t = e.slice(n)),
                        t
                }(e.url);
                return e.fragmentIdentifier && (c = `#${o(e.fragmentIdentifier, n)}`),
                    `${A}${E}${c}`
            }
    },
    "dkv/": function(e, t) {
        e.exports = Object.keys || function(e) {
            var t = []
                , n = Object.prototype.hasOwnProperty;
            for (var A in e)
                n.call(e, A) && t.push(A);
            return t
        }
    },
    eOtv: function(e, t, n) {
        var A = n("lKxJ")
            , r = n("KFGy")
            , a = n("cpc2")
            , i = n("Uwu7")
            , o = n("2Dig")
            , E = n("QN7Q")
            , s = n("NOtv")("socket.io-client:manager")
            , c = n("7jRU")
            , R = n("C2QD")
            , O = Object.prototype.hasOwnProperty;
        function I(e, t) {
            if (!(this instanceof I))
                return new I(e,t);
            e && "object" === typeof e && (t = e,
                e = void 0),
                (t = t || {}).path = t.path || "/socket.io",
                this.nsps = {},
                this.subs = [],
                this.opts = t,
                this.reconnection(!1 !== t.reconnection),
                this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
                this.reconnectionDelay(t.reconnectionDelay || 1e3),
                this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
                this.randomizationFactor(t.randomizationFactor || .5),
                this.backoff = new R({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }),
                this.timeout(null == t.timeout ? 2e4 : t.timeout),
                this.readyState = "closed",
                this.uri = e,
                this.connecting = [],
                this.lastPing = null,
                this.encoding = !1,
                this.packetBuffer = [];
            var n = t.parser || i;
            this.encoder = new n.Encoder,
                this.decoder = new n.Decoder,
                this.autoConnect = !1 !== t.autoConnect,
            this.autoConnect && this.open()
        }
        e.exports = I,
            I.prototype.emitAll = function() {
                for (var e in this.emit.apply(this, arguments),
                    this.nsps)
                    O.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
            }
            ,
            I.prototype.updateSocketIds = function() {
                for (var e in this.nsps)
                    O.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
            }
            ,
            I.prototype.generateId = function(e) {
                return ("/" === e ? "" : e + "#") + this.engine.id
            }
            ,
            a(I.prototype),
            I.prototype.reconnection = function(e) {
                return arguments.length ? (this._reconnection = !!e,
                    this) : this._reconnection
            }
            ,
            I.prototype.reconnectionAttempts = function(e) {
                return arguments.length ? (this._reconnectionAttempts = e,
                    this) : this._reconnectionAttempts
            }
            ,
            I.prototype.reconnectionDelay = function(e) {
                return arguments.length ? (this._reconnectionDelay = e,
                this.backoff && this.backoff.setMin(e),
                    this) : this._reconnectionDelay
            }
            ,
            I.prototype.randomizationFactor = function(e) {
                return arguments.length ? (this._randomizationFactor = e,
                this.backoff && this.backoff.setJitter(e),
                    this) : this._randomizationFactor
            }
            ,
            I.prototype.reconnectionDelayMax = function(e) {
                return arguments.length ? (this._reconnectionDelayMax = e,
                this.backoff && this.backoff.setMax(e),
                    this) : this._reconnectionDelayMax
            }
            ,
            I.prototype.timeout = function(e) {
                return arguments.length ? (this._timeout = e,
                    this) : this._timeout
            }
            ,
            I.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
            ,
            I.prototype.open = I.prototype.connect = function(e, t) {
                if (s("readyState %s", this.readyState),
                    ~this.readyState.indexOf("open"))
                    return this;
                s("opening %s", this.uri),
                    this.engine = A(this.uri, this.opts);
                var n = this.engine
                    , r = this;
                this.readyState = "opening",
                    this.skipReconnect = !1;
                var a = o(n, "open", (function() {
                        r.onopen(),
                        e && e()
                    }
                ))
                    , i = o(n, "error", (function(t) {
                        if (s("connect_error"),
                            r.cleanup(),
                            r.readyState = "closed",
                            r.emitAll("connect_error", t),
                            e) {
                            var n = new Error("Connection error");
                            n.data = t,
                                e(n)
                        } else
                            r.maybeReconnectOnOpen()
                    }
                ));
                if (!1 !== this._timeout) {
                    var E = this._timeout;
                    s("connect attempt will timeout after %d", E);
                    var c = setTimeout((function() {
                            s("connect attempt timed out after %d", E),
                                a.destroy(),
                                n.close(),
                                n.emit("error", "timeout"),
                                r.emitAll("connect_timeout", E)
                        }
                    ), E);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(c)
                        }
                    })
                }
                return this.subs.push(a),
                    this.subs.push(i),
                    this
            }
            ,
            I.prototype.onopen = function() {
                s("open"),
                    this.cleanup(),
                    this.readyState = "open",
                    this.emit("open");
                var e = this.engine;
                this.subs.push(o(e, "data", E(this, "ondata"))),
                    this.subs.push(o(e, "ping", E(this, "onping"))),
                    this.subs.push(o(e, "pong", E(this, "onpong"))),
                    this.subs.push(o(e, "error", E(this, "onerror"))),
                    this.subs.push(o(e, "close", E(this, "onclose"))),
                    this.subs.push(o(this.decoder, "decoded", E(this, "ondecoded")))
            }
            ,
            I.prototype.onping = function() {
                this.lastPing = new Date,
                    this.emitAll("ping")
            }
            ,
            I.prototype.onpong = function() {
                this.emitAll("pong", new Date - this.lastPing)
            }
            ,
            I.prototype.ondata = function(e) {
                this.decoder.add(e)
            }
            ,
            I.prototype.ondecoded = function(e) {
                this.emit("packet", e)
            }
            ,
            I.prototype.onerror = function(e) {
                s("error", e),
                    this.emitAll("error", e)
            }
            ,
            I.prototype.socket = function(e, t) {
                var n = this.nsps[e];
                if (!n) {
                    n = new r(this,e,t),
                        this.nsps[e] = n;
                    var A = this;
                    n.on("connecting", a),
                        n.on("connect", (function() {
                                n.id = A.generateId(e)
                            }
                        )),
                    this.autoConnect && a()
                }
                function a() {
                    ~c(A.connecting, n) || A.connecting.push(n)
                }
                return n
            }
            ,
            I.prototype.destroy = function(e) {
                var t = c(this.connecting, e);
                ~t && this.connecting.splice(t, 1),
                this.connecting.length || this.close()
            }
            ,
            I.prototype.packet = function(e) {
                s("writing packet %j", e);
                var t = this;
                e.query && 0 === e.type && (e.nsp += "?" + e.query),
                    t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0,
                        this.encoder.encode(e, (function(n) {
                                for (var A = 0; A < n.length; A++)
                                    t.engine.write(n[A], e.options);
                                t.encoding = !1,
                                    t.processPacketQueue()
                            }
                        )))
            }
            ,
            I.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var e = this.packetBuffer.shift();
                    this.packet(e)
                }
            }
            ,
            I.prototype.cleanup = function() {
                s("cleanup");
                for (var e = this.subs.length, t = 0; t < e; t++) {
                    this.subs.shift().destroy()
                }
                this.packetBuffer = [],
                    this.encoding = !1,
                    this.lastPing = null,
                    this.decoder.destroy()
            }
            ,
            I.prototype.close = I.prototype.disconnect = function() {
                s("disconnect"),
                    this.skipReconnect = !0,
                    this.reconnecting = !1,
                "opening" === this.readyState && this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                this.engine && this.engine.close()
            }
            ,
            I.prototype.onclose = function(e) {
                s("onclose"),
                    this.cleanup(),
                    this.backoff.reset(),
                    this.readyState = "closed",
                    this.emit("close", e),
                this._reconnection && !this.skipReconnect && this.reconnect()
            }
            ,
            I.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect)
                    return this;
                var e = this;
                if (this.backoff.attempts >= this._reconnectionAttempts)
                    s("reconnect failed"),
                        this.backoff.reset(),
                        this.emitAll("reconnect_failed"),
                        this.reconnecting = !1;
                else {
                    var t = this.backoff.duration();
                    s("will wait %dms before reconnect attempt", t),
                        this.reconnecting = !0;
                    var n = setTimeout((function() {
                            e.skipReconnect || (s("attempting reconnect"),
                                e.emitAll("reconnect_attempt", e.backoff.attempts),
                                e.emitAll("reconnecting", e.backoff.attempts),
                            e.skipReconnect || e.open((function(t) {
                                    t ? (s("reconnect attempt error"),
                                        e.reconnecting = !1,
                                        e.reconnect(),
                                        e.emitAll("reconnect_error", t.data)) : (s("reconnect success"),
                                        e.onreconnect())
                                }
                            )))
                        }
                    ), t);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(n)
                        }
                    })
                }
            }
            ,
            I.prototype.onreconnect = function() {
                var e = this.backoff.attempts;
                this.reconnecting = !1,
                    this.backoff.reset(),
                    this.updateSocketIds(),
                    this.emitAll("reconnect", e)
            }
    },
    g5Dd: function(e, t) {
        !function() {
            "use strict";
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), A = 0; A < e.length; A++)
                n[e.charCodeAt(A)] = A;
            t.encode = function(t) {
                var n, A = new Uint8Array(t), r = A.length, a = "";
                for (n = 0; n < r; n += 3)
                    a += e[A[n] >> 2],
                        a += e[(3 & A[n]) << 4 | A[n + 1] >> 4],
                        a += e[(15 & A[n + 1]) << 2 | A[n + 2] >> 6],
                        a += e[63 & A[n + 2]];
                return r % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : r % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="),
                    a
            }
                ,
                t.decode = function(e) {
                    var t, A, r, a, i, o = .75 * e.length, E = e.length, s = 0;
                    "=" === e[e.length - 1] && (o--,
                    "=" === e[e.length - 2] && o--);
                    var c = new ArrayBuffer(o)
                        , R = new Uint8Array(c);
                    for (t = 0; t < E; t += 4)
                        A = n[e.charCodeAt(t)],
                            r = n[e.charCodeAt(t + 1)],
                            a = n[e.charCodeAt(t + 2)],
                            i = n[e.charCodeAt(t + 3)],
                            R[s++] = A << 2 | r >> 4,
                            R[s++] = (15 & r) << 4 | a >> 2,
                            R[s++] = (3 & a) << 6 | 63 & i;
                    return c
                }
        }()
    },
    gFX4: function(e, t, n) {
        var A = n("zJ60")
            , r = n("Uwu7")
            , a = n("eOtv")
            , i = n("NOtv")("socket.io-client");
        e.exports = t = E;
        var o = t.managers = {};
        function E(e, t) {
            "object" === typeof e && (t = e,
                e = void 0),
                t = t || {};
            var n, r = A(e), E = r.source, s = r.id, c = r.path, R = o[s] && c in o[s].nsps;
            return t.forceNew || t["force new connection"] || !1 === t.multiplex || R ? (i("ignoring socket cache for %s", E),
                n = a(E, t)) : (o[s] || (i("new io instance for %s", E),
                o[s] = a(E, t)),
                n = o[s]),
            r.query && !t.query && (t.query = r.query),
                n.socket(r.path, t)
        }
        t.protocol = r.protocol,
            t.connect = E,
            t.Manager = n("eOtv"),
            t.Socket = n("KFGy")
    },
    k2N2: function(e, t) {
        var n = 1e3
            , A = 60 * n
            , r = 60 * A
            , a = 24 * r
            , i = 7 * a
            , o = 365.25 * a;
        function E(e, t, n, A) {
            var r = t >= 1.5 * n;
            return Math.round(e / n) + " " + A + (r ? "s" : "")
        }
        e.exports = function(e, t) {
            t = t || {};
            var s = typeof e;
            if ("string" === s && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var E = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return E * o;
                        case "weeks":
                        case "week":
                        case "w":
                            return E * i;
                        case "days":
                        case "day":
                        case "d":
                            return E * a;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return E * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return E * A;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return E * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return E;
                        default:
                            return
                    }
                }(e);
            if ("number" === s && isFinite(e))
                return t.long ? function(e) {
                    var t = Math.abs(e);
                    if (t >= a)
                        return E(e, t, a, "day");
                    if (t >= r)
                        return E(e, t, r, "hour");
                    if (t >= A)
                        return E(e, t, A, "minute");
                    if (t >= n)
                        return E(e, t, n, "second");
                    return e + " ms"
                }(e) : function(e) {
                    var t = Math.abs(e);
                    if (t >= a)
                        return Math.round(e / a) + "d";
                    if (t >= r)
                        return Math.round(e / r) + "h";
                    if (t >= A)
                        return Math.round(e / A) + "m";
                    if (t >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    kSER: function(e, t) {
        e.exports = function(e, t) {
            for (var n = [], A = (t = t || 0) || 0; A < e.length; A++)
                n[A - t] = e[A];
            return n
        }
    },
    "kVK+": function(e, t) {
        t.read = function(e, t, n, A, r) {
            var a, i, o = 8 * r - A - 1, E = (1 << o) - 1, s = E >> 1, c = -7, R = n ? r - 1 : 0, O = n ? -1 : 1, I = e[t + R];
            for (R += O,
                     a = I & (1 << -c) - 1,
                     I >>= -c,
                     c += o; c > 0; a = 256 * a + e[t + R],
                     R += O,
                     c -= 8)
                ;
            for (i = a & (1 << -c) - 1,
                     a >>= -c,
                     c += A; c > 0; i = 256 * i + e[t + R],
                     R += O,
                     c -= 8)
                ;
            if (0 === a)
                a = 1 - s;
            else {
                if (a === E)
                    return i ? NaN : 1 / 0 * (I ? -1 : 1);
                i += Math.pow(2, A),
                    a -= s
            }
            return (I ? -1 : 1) * i * Math.pow(2, a - A)
        }
            ,
            t.write = function(e, t, n, A, r, a) {
                var i, o, E, s = 8 * a - r - 1, c = (1 << s) - 1, R = c >> 1, O = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, I = A ? 0 : a - 1, T = A ? 1 : -1, S = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t),
                         isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
                             i = c) : (i = Math.floor(Math.log(t) / Math.LN2),
                         t * (E = Math.pow(2, -i)) < 1 && (i--,
                             E *= 2),
                         (t += i + R >= 1 ? O / E : O * Math.pow(2, 1 - R)) * E >= 2 && (i++,
                             E /= 2),
                             i + R >= c ? (o = 0,
                                 i = c) : i + R >= 1 ? (o = (t * E - 1) * Math.pow(2, r),
                                 i += R) : (o = t * Math.pow(2, R - 1) * Math.pow(2, r),
                                 i = 0)); r >= 8; e[n + I] = 255 & o,
                         I += T,
                         o /= 256,
                         r -= 8)
                    ;
                for (i = i << r | o,
                         s += r; s > 0; e[n + I] = 255 & i,
                         I += T,
                         i /= 256,
                         s -= 8)
                    ;
                e[n + I - T] |= 128 * S
            }
    },
    lKxJ: function(e, t, n) {
        e.exports = n("2pII"),
            e.exports.parser = n("Wm4p")
    },
    luTP: function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "oIG/": function(e, t) {
        var n, A, r, a = String.fromCharCode;
        function i(e) {
            for (var t, n, A = [], r = 0, a = e.length; r < a; )
                (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < a ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? A.push(((1023 & t) << 10) + (1023 & n) + 65536) : (A.push(t),
                    r--) : A.push(t);
            return A
        }
        function o(e, t) {
            if (e >= 55296 && e <= 57343) {
                if (t)
                    throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
                return !1
            }
            return !0
        }
        function E(e, t) {
            return a(e >> t & 63 | 128)
        }
        function s(e, t) {
            if (0 == (4294967168 & e))
                return a(e);
            var n = "";
            return 0 == (4294965248 & e) ? n = a(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (o(e, t) || (e = 65533),
                n = a(e >> 12 & 15 | 224),
                n += E(e, 6)) : 0 == (4292870144 & e) && (n = a(e >> 18 & 7 | 240),
                n += E(e, 12),
                n += E(e, 6)),
                n += a(63 & e | 128)
        }
        function c() {
            if (r >= A)
                throw Error("Invalid byte index");
            var e = 255 & n[r];
            if (r++,
            128 == (192 & e))
                return 63 & e;
            throw Error("Invalid continuation byte")
        }
        function R(e) {
            var t, a;
            if (r > A)
                throw Error("Invalid byte index");
            if (r == A)
                return !1;
            if (t = 255 & n[r],
                r++,
            0 == (128 & t))
                return t;
            if (192 == (224 & t)) {
                if ((a = (31 & t) << 6 | c()) >= 128)
                    return a;
                throw Error("Invalid continuation byte")
            }
            if (224 == (240 & t)) {
                if ((a = (15 & t) << 12 | c() << 6 | c()) >= 2048)
                    return o(a, e) ? a : 65533;
                throw Error("Invalid continuation byte")
            }
            if (240 == (248 & t) && (a = (7 & t) << 18 | c() << 12 | c() << 6 | c()) >= 65536 && a <= 1114111)
                return a;
            throw Error("Invalid UTF-8 detected")
        }
        e.exports = {
            version: "2.1.2",
            encode: function(e, t) {
                for (var n = !1 !== (t = t || {}).strict, A = i(e), r = A.length, a = -1, o = ""; ++a < r; )
                    o += s(A[a], n);
                return o
            },
            decode: function(e, t) {
                var o = !1 !== (t = t || {}).strict;
                n = i(e),
                    A = n.length,
                    r = 0;
                for (var E, s = []; !1 !== (E = R(o)); )
                    s.push(E);
                return function(e) {
                    for (var t, n = e.length, A = -1, r = ""; ++A < n; )
                        (t = e[A]) > 65535 && (r += a((t -= 65536) >>> 10 & 1023 | 55296),
                            t = 56320 | 1023 & t),
                            r += a(t);
                    return r
                }(s)
            }
        }
    },
    qGlh: function(e, t, n) {
        (function(t) {
                e.exports = function(e) {
                    return n && t.isBuffer(e) || A && (e instanceof ArrayBuffer || r(e))
                }
                ;
                var n = "function" === typeof t && "function" === typeof t.isBuffer
                    , A = "function" === typeof ArrayBuffer
                    , r = function(e) {
                    return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
                }
            }
        ).call(this, n("tjlA").Buffer)
    },
    tjlA: function(e, t, n) {
        "use strict";
        (function(e) {
                var A = n("H7XF")
                    , r = n("kVK+")
                    , a = n("49sm");
                function i() {
                    return E.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }
                function o(e, t) {
                    if (i() < t)
                        throw new RangeError("Invalid typed array length");
                    return E.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = E.prototype : (null === e && (e = new E(t)),
                        e.length = t),
                        e
                }
                function E(e, t, n) {
                    if (!E.TYPED_ARRAY_SUPPORT && !(this instanceof E))
                        return new E(e,t,n);
                    if ("number" === typeof e) {
                        if ("string" === typeof t)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return R(this, e)
                    }
                    return s(this, e, t, n)
                }
                function s(e, t, n, A) {
                    if ("number" === typeof t)
                        throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, A) {
                        if (t.byteLength,
                        n < 0 || t.byteLength < n)
                            throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < n + (A || 0))
                            throw new RangeError("'length' is out of bounds");
                        t = void 0 === n && void 0 === A ? new Uint8Array(t) : void 0 === A ? new Uint8Array(t,n) : new Uint8Array(t,n,A);
                        E.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = E.prototype : e = O(e, t);
                        return e
                    }(e, t, n, A) : "string" === typeof t ? function(e, t, n) {
                        "string" === typeof n && "" !== n || (n = "utf8");
                        if (!E.isEncoding(n))
                            throw new TypeError('"encoding" must be a valid string encoding');
                        var A = 0 | T(t, n)
                            , r = (e = o(e, A)).write(t, n);
                        r !== A && (e = e.slice(0, r));
                        return e
                    }(e, t, n) : function(e, t) {
                        if (E.isBuffer(t)) {
                            var n = 0 | I(t.length);
                            return 0 === (e = o(e, n)).length ? e : (t.copy(e, 0, 0, n),
                                e)
                        }
                        if (t) {
                            if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                                return "number" !== typeof t.length || (A = t.length) !== A ? o(e, 0) : O(e, t);
                            if ("Buffer" === t.type && a(t.data))
                                return O(e, t.data)
                        }
                        var A;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(e, t)
                }
                function c(e) {
                    if ("number" !== typeof e)
                        throw new TypeError('"size" argument must be a number');
                    if (e < 0)
                        throw new RangeError('"size" argument must not be negative')
                }
                function R(e, t) {
                    if (c(t),
                        e = o(e, t < 0 ? 0 : 0 | I(t)),
                        !E.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n)
                            e[n] = 0;
                    return e
                }
                function O(e, t) {
                    var n = t.length < 0 ? 0 : 0 | I(t.length);
                    e = o(e, n);
                    for (var A = 0; A < n; A += 1)
                        e[A] = 255 & t[A];
                    return e
                }
                function I(e) {
                    if (e >= i())
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | e
                }
                function T(e, t) {
                    if (E.isBuffer(e))
                        return e.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                        return e.byteLength;
                    "string" !== typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n)
                        return 0;
                    for (var A = !1; ; )
                        switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return k(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return F(e).length;
                            default:
                                if (A)
                                    return k(e).length;
                                t = ("" + t).toLowerCase(),
                                    A = !0
                        }
                }
                function S(e, t, n) {
                    var A = !1;
                    if ((void 0 === t || t < 0) && (t = 0),
                    t > this.length)
                        return "";
                    if ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if ((n >>>= 0) <= (t >>>= 0))
                        return "";
                    for (e || (e = "utf8"); ; )
                        switch (e) {
                            case "hex":
                                return D(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return m(this, t, n);
                            case "ascii":
                                return C(this, t, n);
                            case "latin1":
                            case "binary":
                                return M(this, t, n);
                            case "base64":
                                return P(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return y(this, t, n);
                            default:
                                if (A)
                                    throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                    A = !0
                        }
                }
                function l(e, t, n) {
                    var A = e[t];
                    e[t] = e[n],
                        e[n] = A
                }
                function N(e, t, n, A, r) {
                    if (0 === e.length)
                        return -1;
                    if ("string" === typeof n ? (A = n,
                        n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                        n = +n,
                    isNaN(n) && (n = r ? 0 : e.length - 1),
                    n < 0 && (n = e.length + n),
                    n >= e.length) {
                        if (r)
                            return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!r)
                            return -1;
                        n = 0
                    }
                    if ("string" === typeof t && (t = E.from(t, A)),
                        E.isBuffer(t))
                        return 0 === t.length ? -1 : u(e, t, n, A, r);
                    if ("number" === typeof t)
                        return t &= 255,
                            E.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : u(e, [t], n, A, r);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function u(e, t, n, A, r) {
                    var a, i = 1, o = e.length, E = t.length;
                    if (void 0 !== A && ("ucs2" === (A = String(A).toLowerCase()) || "ucs-2" === A || "utf16le" === A || "utf-16le" === A)) {
                        if (e.length < 2 || t.length < 2)
                            return -1;
                        i = 2,
                            o /= 2,
                            E /= 2,
                            n /= 2
                    }
                    function s(e, t) {
                        return 1 === i ? e[t] : e.readUInt16BE(t * i)
                    }
                    if (r) {
                        var c = -1;
                        for (a = n; a < o; a++)
                            if (s(e, a) === s(t, -1 === c ? 0 : a - c)) {
                                if (-1 === c && (c = a),
                                a - c + 1 === E)
                                    return c * i
                            } else
                                -1 !== c && (a -= a - c),
                                    c = -1
                    } else
                        for (n + E > o && (n = o - E),
                                 a = n; a >= 0; a--) {
                            for (var R = !0, O = 0; O < E; O++)
                                if (s(e, a + O) !== s(t, O)) {
                                    R = !1;
                                    break
                                }
                            if (R)
                                return a
                        }
                    return -1
                }
                function L(e, t, n, A) {
                    n = Number(n) || 0;
                    var r = e.length - n;
                    A ? (A = Number(A)) > r && (A = r) : A = r;
                    var a = t.length;
                    if (a % 2 !== 0)
                        throw new TypeError("Invalid hex string");
                    A > a / 2 && (A = a / 2);
                    for (var i = 0; i < A; ++i) {
                        var o = parseInt(t.substr(2 * i, 2), 16);
                        if (isNaN(o))
                            return i;
                        e[n + i] = o
                    }
                    return i
                }
                function p(e, t, n, A) {
                    return Z(k(t, e.length - n), e, n, A)
                }
                function d(e, t, n, A) {
                    return Z(function(e) {
                        for (var t = [], n = 0; n < e.length; ++n)
                            t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, A)
                }
                function f(e, t, n, A) {
                    return d(e, t, n, A)
                }
                function h(e, t, n, A) {
                    return Z(F(t), e, n, A)
                }
                function K(e, t, n, A) {
                    return Z(function(e, t) {
                        for (var n, A, r, a = [], i = 0; i < e.length && !((t -= 2) < 0); ++i)
                            n = e.charCodeAt(i),
                                A = n >> 8,
                                r = n % 256,
                                a.push(r),
                                a.push(A);
                        return a
                    }(t, e.length - n), e, n, A)
                }
                function P(e, t, n) {
                    return 0 === t && n === e.length ? A.fromByteArray(e) : A.fromByteArray(e.slice(t, n))
                }
                function m(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var A = [], r = t; r < n; ) {
                        var a, i, o, E, s = e[r], c = null, R = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                        if (r + R <= n)
                            switch (R) {
                                case 1:
                                    s < 128 && (c = s);
                                    break;
                                case 2:
                                    128 === (192 & (a = e[r + 1])) && (E = (31 & s) << 6 | 63 & a) > 127 && (c = E);
                                    break;
                                case 3:
                                    a = e[r + 1],
                                        i = e[r + 2],
                                    128 === (192 & a) && 128 === (192 & i) && (E = (15 & s) << 12 | (63 & a) << 6 | 63 & i) > 2047 && (E < 55296 || E > 57343) && (c = E);
                                    break;
                                case 4:
                                    a = e[r + 1],
                                        i = e[r + 2],
                                        o = e[r + 3],
                                    128 === (192 & a) && 128 === (192 & i) && 128 === (192 & o) && (E = (15 & s) << 18 | (63 & a) << 12 | (63 & i) << 6 | 63 & o) > 65535 && E < 1114112 && (c = E)
                            }
                        null === c ? (c = 65533,
                            R = 1) : c > 65535 && (c -= 65536,
                            A.push(c >>> 10 & 1023 | 55296),
                            c = 56320 | 1023 & c),
                            A.push(c),
                            r += R
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= U)
                            return String.fromCharCode.apply(String, e);
                        var n = ""
                            , A = 0;
                        for (; A < t; )
                            n += String.fromCharCode.apply(String, e.slice(A, A += U));
                        return n
                    }(A)
                }
                t.Buffer = E,
                    t.SlowBuffer = function(e) {
                        +e != e && (e = 0);
                        return E.alloc(+e)
                    }
                    ,
                    t.INSPECT_MAX_BYTES = 50,
                    E.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                        try {
                            var e = new Uint8Array(1);
                            return e.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            },
                            42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                        } catch (t) {
                            return !1
                        }
                    }(),
                    t.kMaxLength = i(),
                    E.poolSize = 8192,
                    E._augment = function(e) {
                        return e.__proto__ = E.prototype,
                            e
                    }
                    ,
                    E.from = function(e, t, n) {
                        return s(null, e, t, n)
                    }
                    ,
                E.TYPED_ARRAY_SUPPORT && (E.prototype.__proto__ = Uint8Array.prototype,
                    E.__proto__ = Uint8Array,
                "undefined" !== typeof Symbol && Symbol.species && E[Symbol.species] === E && Object.defineProperty(E, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
                    E.alloc = function(e, t, n) {
                        return function(e, t, n, A) {
                            return c(t),
                                t <= 0 ? o(e, t) : void 0 !== n ? "string" === typeof A ? o(e, t).fill(n, A) : o(e, t).fill(n) : o(e, t)
                        }(null, e, t, n)
                    }
                    ,
                    E.allocUnsafe = function(e) {
                        return R(null, e)
                    }
                    ,
                    E.allocUnsafeSlow = function(e) {
                        return R(null, e)
                    }
                    ,
                    E.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer)
                    }
                    ,
                    E.compare = function(e, t) {
                        if (!E.isBuffer(e) || !E.isBuffer(t))
                            throw new TypeError("Arguments must be Buffers");
                        if (e === t)
                            return 0;
                        for (var n = e.length, A = t.length, r = 0, a = Math.min(n, A); r < a; ++r)
                            if (e[r] !== t[r]) {
                                n = e[r],
                                    A = t[r];
                                break
                            }
                        return n < A ? -1 : A < n ? 1 : 0
                    }
                    ,
                    E.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }
                    ,
                    E.concat = function(e, t) {
                        if (!a(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return E.alloc(0);
                        var n;
                        if (void 0 === t)
                            for (t = 0,
                                     n = 0; n < e.length; ++n)
                                t += e[n].length;
                        var A = E.allocUnsafe(t)
                            , r = 0;
                        for (n = 0; n < e.length; ++n) {
                            var i = e[n];
                            if (!E.isBuffer(i))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            i.copy(A, r),
                                r += i.length
                        }
                        return A
                    }
                    ,
                    E.byteLength = T,
                    E.prototype._isBuffer = !0,
                    E.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            l(this, t, t + 1);
                        return this
                    }
                    ,
                    E.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            l(this, t, t + 3),
                                l(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    E.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            l(this, t, t + 7),
                                l(this, t + 1, t + 6),
                                l(this, t + 2, t + 5),
                                l(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    E.prototype.toString = function() {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? m(this, 0, e) : S.apply(this, arguments)
                    }
                    ,
                    E.prototype.equals = function(e) {
                        if (!E.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === E.compare(this, e)
                    }
                    ,
                    E.prototype.inspect = function() {
                        var e = ""
                            , n = t.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                        this.length > n && (e += " ... ")),
                        "<Buffer " + e + ">"
                    }
                    ,
                    E.prototype.compare = function(e, t, n, A, r) {
                        if (!E.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0),
                        void 0 === n && (n = e ? e.length : 0),
                        void 0 === A && (A = 0),
                        void 0 === r && (r = this.length),
                        t < 0 || n > e.length || A < 0 || r > this.length)
                            throw new RangeError("out of range index");
                        if (A >= r && t >= n)
                            return 0;
                        if (A >= r)
                            return -1;
                        if (t >= n)
                            return 1;
                        if (this === e)
                            return 0;
                        for (var a = (r >>>= 0) - (A >>>= 0), i = (n >>>= 0) - (t >>>= 0), o = Math.min(a, i), s = this.slice(A, r), c = e.slice(t, n), R = 0; R < o; ++R)
                            if (s[R] !== c[R]) {
                                a = s[R],
                                    i = c[R];
                                break
                            }
                        return a < i ? -1 : i < a ? 1 : 0
                    }
                    ,
                    E.prototype.includes = function(e, t, n) {
                        return -1 !== this.indexOf(e, t, n)
                    }
                    ,
                    E.prototype.indexOf = function(e, t, n) {
                        return N(this, e, t, n, !0)
                    }
                    ,
                    E.prototype.lastIndexOf = function(e, t, n) {
                        return N(this, e, t, n, !1)
                    }
                    ,
                    E.prototype.write = function(e, t, n, A) {
                        if (void 0 === t)
                            A = "utf8",
                                n = this.length,
                                t = 0;
                        else if (void 0 === n && "string" === typeof t)
                            A = t,
                                n = this.length,
                                t = 0;
                        else {
                            if (!isFinite(t))
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0,
                                isFinite(n) ? (n |= 0,
                                void 0 === A && (A = "utf8")) : (A = n,
                                    n = void 0)
                        }
                        var r = this.length - t;
                        if ((void 0 === n || n > r) && (n = r),
                        e.length > 0 && (n < 0 || t < 0) || t > this.length)
                            throw new RangeError("Attempt to write outside buffer bounds");
                        A || (A = "utf8");
                        for (var a = !1; ; )
                            switch (A) {
                                case "hex":
                                    return L(this, e, t, n);
                                case "utf8":
                                case "utf-8":
                                    return p(this, e, t, n);
                                case "ascii":
                                    return d(this, e, t, n);
                                case "latin1":
                                case "binary":
                                    return f(this, e, t, n);
                                case "base64":
                                    return h(this, e, t, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return K(this, e, t, n);
                                default:
                                    if (a)
                                        throw new TypeError("Unknown encoding: " + A);
                                    A = ("" + A).toLowerCase(),
                                        a = !0
                            }
                    }
                    ,
                    E.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                ;
                var U = 4096;
                function C(e, t, n) {
                    var A = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r)
                        A += String.fromCharCode(127 & e[r]);
                    return A
                }
                function M(e, t, n) {
                    var A = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r)
                        A += String.fromCharCode(e[r]);
                    return A
                }
                function D(e, t, n) {
                    var A = e.length;
                    (!t || t < 0) && (t = 0),
                    (!n || n < 0 || n > A) && (n = A);
                    for (var r = "", a = t; a < n; ++a)
                        r += w(e[a]);
                    return r
                }
                function y(e, t, n) {
                    for (var A = e.slice(t, n), r = "", a = 0; a < A.length; a += 2)
                        r += String.fromCharCode(A[a] + 256 * A[a + 1]);
                    return r
                }
                function g(e, t, n) {
                    if (e % 1 !== 0 || e < 0)
                        throw new RangeError("offset is not uint");
                    if (e + t > n)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                function B(e, t, n, A, r, a) {
                    if (!E.isBuffer(e))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || t < a)
                        throw new RangeError('"value" argument is out of bounds');
                    if (n + A > e.length)
                        throw new RangeError("Index out of range")
                }
                function G(e, t, n, A) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var r = 0, a = Math.min(e.length - n, 2); r < a; ++r)
                        e[n + r] = (t & 255 << 8 * (A ? r : 1 - r)) >>> 8 * (A ? r : 1 - r)
                }
                function v(e, t, n, A) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var r = 0, a = Math.min(e.length - n, 4); r < a; ++r)
                        e[n + r] = t >>> 8 * (A ? r : 3 - r) & 255
                }
                function b(e, t, n, A, r, a) {
                    if (n + A > e.length)
                        throw new RangeError("Index out of range");
                    if (n < 0)
                        throw new RangeError("Index out of range")
                }
                function H(e, t, n, A, a) {
                    return a || b(e, 0, n, 4),
                        r.write(e, t, n, A, 23, 4),
                    n + 4
                }
                function x(e, t, n, A, a) {
                    return a || b(e, 0, n, 8),
                        r.write(e, t, n, A, 52, 8),
                    n + 8
                }
                E.prototype.slice = function(e, t) {
                    var n, A = this.length;
                    if ((e = ~~e) < 0 ? (e += A) < 0 && (e = 0) : e > A && (e = A),
                        (t = void 0 === t ? A : ~~t) < 0 ? (t += A) < 0 && (t = 0) : t > A && (t = A),
                    t < e && (t = e),
                        E.TYPED_ARRAY_SUPPORT)
                        (n = this.subarray(e, t)).__proto__ = E.prototype;
                    else {
                        var r = t - e;
                        n = new E(r,void 0);
                        for (var a = 0; a < r; ++a)
                            n[a] = this[a + e]
                    }
                    return n
                }
                    ,
                    E.prototype.readUIntLE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || g(e, t, this.length);
                        for (var A = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
                            A += this[e + a] * r;
                        return A
                    }
                    ,
                    E.prototype.readUIntBE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || g(e, t, this.length);
                        for (var A = this[e + --t], r = 1; t > 0 && (r *= 256); )
                            A += this[e + --t] * r;
                        return A
                    }
                    ,
                    E.prototype.readUInt8 = function(e, t) {
                        return t || g(e, 1, this.length),
                            this[e]
                    }
                    ,
                    E.prototype.readUInt16LE = function(e, t) {
                        return t || g(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    E.prototype.readUInt16BE = function(e, t) {
                        return t || g(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    E.prototype.readUInt32LE = function(e, t) {
                        return t || g(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }
                    ,
                    E.prototype.readUInt32BE = function(e, t) {
                        return t || g(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    E.prototype.readIntLE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || g(e, t, this.length);
                        for (var A = this[e], r = 1, a = 0; ++a < t && (r *= 256); )
                            A += this[e + a] * r;
                        return A >= (r *= 128) && (A -= Math.pow(2, 8 * t)),
                            A
                    }
                    ,
                    E.prototype.readIntBE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || g(e, t, this.length);
                        for (var A = t, r = 1, a = this[e + --A]; A > 0 && (r *= 256); )
                            a += this[e + --A] * r;
                        return a >= (r *= 128) && (a -= Math.pow(2, 8 * t)),
                            a
                    }
                    ,
                    E.prototype.readInt8 = function(e, t) {
                        return t || g(e, 1, this.length),
                            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }
                    ,
                    E.prototype.readInt16LE = function(e, t) {
                        t || g(e, 2, this.length);
                        var n = this[e] | this[e + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }
                    ,
                    E.prototype.readInt16BE = function(e, t) {
                        t || g(e, 2, this.length);
                        var n = this[e + 1] | this[e] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }
                    ,
                    E.prototype.readInt32LE = function(e, t) {
                        return t || g(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    E.prototype.readInt32BE = function(e, t) {
                        return t || g(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    E.prototype.readFloatLE = function(e, t) {
                        return t || g(e, 4, this.length),
                            r.read(this, e, !0, 23, 4)
                    }
                    ,
                    E.prototype.readFloatBE = function(e, t) {
                        return t || g(e, 4, this.length),
                            r.read(this, e, !1, 23, 4)
                    }
                    ,
                    E.prototype.readDoubleLE = function(e, t) {
                        return t || g(e, 8, this.length),
                            r.read(this, e, !0, 52, 8)
                    }
                    ,
                    E.prototype.readDoubleBE = function(e, t) {
                        return t || g(e, 8, this.length),
                            r.read(this, e, !1, 52, 8)
                    }
                    ,
                    E.prototype.writeUIntLE = function(e, t, n, A) {
                        (e = +e,
                            t |= 0,
                            n |= 0,
                            A) || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var r = 1
                            , a = 0;
                        for (this[t] = 255 & e; ++a < n && (r *= 256); )
                            this[t + a] = e / r & 255;
                        return t + n
                    }
                    ,
                    E.prototype.writeUIntBE = function(e, t, n, A) {
                        (e = +e,
                            t |= 0,
                            n |= 0,
                            A) || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var r = n - 1
                            , a = 1;
                        for (this[t + r] = 255 & e; --r >= 0 && (a *= 256); )
                            this[t + r] = e / a & 255;
                        return t + n
                    }
                    ,
                    E.prototype.writeUInt8 = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 1, 255, 0),
                        E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    E.prototype.writeUInt16LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 2, 65535, 0),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : G(this, e, t, !0),
                        t + 2
                    }
                    ,
                    E.prototype.writeUInt16BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 2, 65535, 0),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : G(this, e, t, !1),
                        t + 2
                    }
                    ,
                    E.prototype.writeUInt32LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 4, 4294967295, 0),
                            E.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                                this[t + 2] = e >>> 16,
                                this[t + 1] = e >>> 8,
                                this[t] = 255 & e) : v(this, e, t, !0),
                        t + 4
                    }
                    ,
                    E.prototype.writeUInt32BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 4, 4294967295, 0),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : v(this, e, t, !1),
                        t + 4
                    }
                    ,
                    E.prototype.writeIntLE = function(e, t, n, A) {
                        if (e = +e,
                            t |= 0,
                            !A) {
                            var r = Math.pow(2, 8 * n - 1);
                            B(this, e, t, n, r - 1, -r)
                        }
                        var a = 0
                            , i = 1
                            , o = 0;
                        for (this[t] = 255 & e; ++a < n && (i *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1),
                                this[t + a] = (e / i >> 0) - o & 255;
                        return t + n
                    }
                    ,
                    E.prototype.writeIntBE = function(e, t, n, A) {
                        if (e = +e,
                            t |= 0,
                            !A) {
                            var r = Math.pow(2, 8 * n - 1);
                            B(this, e, t, n, r - 1, -r)
                        }
                        var a = n - 1
                            , i = 1
                            , o = 0;
                        for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1),
                                this[t + a] = (e / i >> 0) - o & 255;
                        return t + n
                    }
                    ,
                    E.prototype.writeInt8 = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 1, 127, -128),
                        E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    E.prototype.writeInt16LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 2, 32767, -32768),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : G(this, e, t, !0),
                        t + 2
                    }
                    ,
                    E.prototype.writeInt16BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 2, 32767, -32768),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : G(this, e, t, !1),
                        t + 2
                    }
                    ,
                    E.prototype.writeInt32LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 4, 2147483647, -2147483648),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8,
                                this[t + 2] = e >>> 16,
                                this[t + 3] = e >>> 24) : v(this, e, t, !0),
                        t + 4
                    }
                    ,
                    E.prototype.writeInt32BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || B(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                            E.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : v(this, e, t, !1),
                        t + 4
                    }
                    ,
                    E.prototype.writeFloatLE = function(e, t, n) {
                        return H(this, e, t, !0, n)
                    }
                    ,
                    E.prototype.writeFloatBE = function(e, t, n) {
                        return H(this, e, t, !1, n)
                    }
                    ,
                    E.prototype.writeDoubleLE = function(e, t, n) {
                        return x(this, e, t, !0, n)
                    }
                    ,
                    E.prototype.writeDoubleBE = function(e, t, n) {
                        return x(this, e, t, !1, n)
                    }
                    ,
                    E.prototype.copy = function(e, t, n, A) {
                        if (n || (n = 0),
                        A || 0 === A || (A = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        A > 0 && A < n && (A = n),
                        A === n)
                            return 0;
                        if (0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length)
                            throw new RangeError("sourceStart out of bounds");
                        if (A < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        A > this.length && (A = this.length),
                        e.length - t < A - n && (A = e.length - t + n);
                        var r, a = A - n;
                        if (this === e && n < t && t < A)
                            for (r = a - 1; r >= 0; --r)
                                e[r + t] = this[r + n];
                        else if (a < 1e3 || !E.TYPED_ARRAY_SUPPORT)
                            for (r = 0; r < a; ++r)
                                e[r + t] = this[r + n];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                        return a
                    }
                    ,
                    E.prototype.fill = function(e, t, n, A) {
                        if ("string" === typeof e) {
                            if ("string" === typeof t ? (A = t,
                                t = 0,
                                n = this.length) : "string" === typeof n && (A = n,
                                n = this.length),
                            1 === e.length) {
                                var r = e.charCodeAt(0);
                                r < 256 && (e = r)
                            }
                            if (void 0 !== A && "string" !== typeof A)
                                throw new TypeError("encoding must be a string");
                            if ("string" === typeof A && !E.isEncoding(A))
                                throw new TypeError("Unknown encoding: " + A)
                        } else
                            "number" === typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < n)
                            throw new RangeError("Out of range index");
                        if (n <= t)
                            return this;
                        var a;
                        if (t >>>= 0,
                            n = void 0 === n ? this.length : n >>> 0,
                        e || (e = 0),
                        "number" === typeof e)
                            for (a = t; a < n; ++a)
                                this[a] = e;
                        else {
                            var i = E.isBuffer(e) ? e : k(new E(e,A).toString())
                                , o = i.length;
                            for (a = 0; a < n - t; ++a)
                                this[a + t] = i[a % o]
                        }
                        return this
                    }
                ;
                var V = /[^+\/0-9A-Za-z-_]/g;
                function w(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }
                function k(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var A = e.length, r = null, a = [], i = 0; i < A; ++i) {
                        if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                if (i + 1 === A) {
                                    (t -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && a.push(239, 191, 189),
                                    r = n;
                                continue
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320)
                        } else
                            r && (t -= 3) > -1 && a.push(239, 191, 189);
                        if (r = null,
                        n < 128) {
                            if ((t -= 1) < 0)
                                break;
                            a.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0)
                                break;
                            a.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0)
                                break;
                            a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112))
                                throw new Error("Invalid code point");
                            if ((t -= 4) < 0)
                                break;
                            a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return a
                }
                function F(e) {
                    return A.toByteArray(function(e) {
                        if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(V, "")).length < 2)
                            return "";
                        for (; e.length % 4 !== 0; )
                            e += "=";
                        return e
                    }(e))
                }
                function Z(e, t, n, A) {
                    for (var r = 0; r < A && !(r + n >= t.length || r >= e.length); ++r)
                        t[r + n] = e[r];
                    return r
                }
            }
        ).call(this, n("yLpj"))
    },
    ugkQ: function(e, t, n) {
        "use strict";
        n.r(t);
        var A = n("q1tI")
            , r = n.n(A)
            , a = n("o0o1")
            , i = n.n(a)
            , o = n("HaE+")
            , E = n("rePB")
            , s = n("KQm4");
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function R(e, t) {
            for (var n = 0; n < t.length; n++) {
                var A = t[n];
                A.enumerable = A.enumerable || !1,
                    A.configurable = !0,
                "value"in A && (A.writable = !0),
                    Object.defineProperty(e, A.key, A)
            }
        }
        function O(e, t, n) {
            return t && R(e.prototype, t),
            n && R(e, n),
                e
        }
        function I(e, t) {
            return (I = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                        e
                }
            )(e, t)
        }
        function T(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && I(e, t)
        }
        function S(e) {
            return (S = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        function l(e, t) {
            return !t || "object" !== S(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        var u = n("ODXe")
            , L = n("NFEU");
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function f(e) {
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return h(e, t)
                }(e))) {
                    var t = 0
                        , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var A, r, a = !0, i = !1;
            return {
                s: function() {
                    A = e[Symbol.iterator]()
                },
                n: function() {
                    var e = A.next();
                    return a = e.done,
                        e
                },
                e: function(e) {
                    i = !0,
                        r = e
                },
                f: function() {
                    try {
                        a || null == A.return || A.return()
                    } finally {
                        if (i)
                            throw r
                    }
                }
            }
        }
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, A = new Array(t); n < t; n++)
                A[n] = e[n];
            return A
        }
        function K(e) {
            return (K = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        function P(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var A = t[n];
                A.enumerable = A.enumerable || !1,
                    A.configurable = !0,
                "value"in A && (A.writable = !0),
                    Object.defineProperty(e, A.key, A)
            }
        }
        function U(e, t, n) {
            return t && m(e.prototype, t),
            n && m(e, n),
                e
        }
        function C(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(Object(n), !0).forEach((function(t) {
                        C(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function y(e) {
            return function(e) {
                if (Array.isArray(e))
                    return B(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return B(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? B(e, t) : void 0
            }
        }
        function B(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, A = new Array(t); n < t; n++)
                A[n] = e[n];
            return A
        }
        var G = "MAKE_MOVE"
            , v = "GAME_EVENT"
            , b = "REDO"
            , H = "RESET"
            , x = "SYNC"
            , V = "UNDO"
            , w = "UPDATE"
            , k = "PLUGIN"
            , F = function(e, t, n, A) {
            return {
                type: v,
                payload: {
                    type: e,
                    args: t,
                    playerID: n,
                    credentials: A
                }
            }
        }
            , Z = function(e, t, n, A) {
            return {
                type: v,
                payload: {
                    type: e,
                    args: t,
                    playerID: n,
                    credentials: A
                },
                automatic: !0
            }
        }
            , J = function(e) {
            return {
                type: x,
                state: e.state,
                log: e.log,
                initialState: e.initialState,
                clientOnly: !0
            }
        }
            , j = function(e, t) {
            return {
                type: w,
                state: e,
                deltalog: t,
                clientOnly: !0
            }
        }
            , Y = function(e) {
            return {
                type: H,
                state: e,
                clientOnly: !0
            }
        }
            , W = function(e, t) {
            return {
                type: V,
                payload: {
                    type: null,
                    args: null,
                    playerID: e,
                    credentials: t
                }
            }
        }
            , _ = function(e, t) {
            return {
                type: b,
                payload: {
                    type: null,
                    args: null,
                    playerID: e,
                    credentials: t
                }
            }
        }
            , z = Object.freeze({
            __proto__: null,
            makeMove: function(e, t, n, A) {
                return {
                    type: G,
                    payload: {
                        type: e,
                        args: t,
                        playerID: n,
                        credentials: A
                    }
                }
            },
            gameEvent: F,
            automaticGameEvent: Z,
            sync: J,
            update: j,
            reset: Y,
            undo: W,
            redo: _,
            plugin: function(e, t, n, A) {
                return {
                    type: k,
                    payload: {
                        type: e,
                        args: t,
                        playerID: n,
                        credentials: A
                    }
                }
            }
        })
            , X = "INVALID_MOVE"
            , Q = {
            name: "plugin-immer",
            fnWrap: function(e) {
                return function(t, n) {
                    for (var A = arguments.length, r = new Array(A > 2 ? A - 2 : 0), a = 2; a < A; a++)
                        r[a - 2] = arguments[a];
                    var i = !1
                        , o = Object(L.a)(t, (function(t) {
                            var A = e.apply(void 0, [t, n].concat(r));
                            if (A !== X)
                                return A;
                            i = !0
                        }
                    ));
                    return i ? X : o
                }
            }
        };
        function q(e) {
            var t = this
                , n = function() {
                var e = 4022871197;
                return function(t) {
                    t = t.toString();
                    for (var n = 0; n < t.length; n++) {
                        var A = .02519603282416938 * (e += t.charCodeAt(n));
                        A -= e = A >>> 0,
                            e = (A *= e) >>> 0,
                            e += 4294967296 * (A -= e)
                    }
                    return 2.3283064365386963e-10 * (e >>> 0)
                }
            }();
            t.next = function() {
                var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
                return t.s0 = t.s1,
                    t.s1 = t.s2,
                    t.s2 = e - (t.c = 0 | e)
            }
                ,
                t.c = 1,
                t.s0 = n(" "),
                t.s1 = n(" "),
                t.s2 = n(" "),
                t.s0 -= n(e),
            t.s0 < 0 && (t.s0 += 1),
                t.s1 -= n(e),
            t.s1 < 0 && (t.s1 += 1),
                t.s2 -= n(e),
            t.s2 < 0 && (t.s2 += 1),
                n = null
        }
        function $(e, t) {
            return t.c = e.c,
                t.s0 = e.s0,
                t.s1 = e.s1,
                t.s2 = e.s2,
                t
        }
        function ee(e, t) {
            var n = new q(e)
                , A = t && t.state
                , r = n.next;
            return r.quick = r,
            A && ("object" == K(A) && $(A, n),
                    r.state = function() {
                        return $(n, {})
                    }
            ),
                r
        }
        var te = function() {
            function e(t) {
                P(this, e),
                    this.state = t,
                    this.used = !1
            }
            return U(e, [{
                key: "isUsed",
                value: function() {
                    return this.used
                }
            }, {
                key: "getState",
                value: function() {
                    return this.state
                }
            }, {
                key: "_random",
                value: function() {
                    this.used = !0;
                    var e, t = this.state, n = (e = void 0 === t.prngstate ? new ee(t.seed,{
                        state: !0
                    }) : new ee("",{
                        state: t.prngstate
                    }))();
                    return this.state = D(D({}, t), {}, {
                        prngstate: e.state()
                    }),
                        n
                }
            }, {
                key: "api",
                value: function() {
                    var e = this._random.bind(this)
                        , t = {
                        D4: 4,
                        D6: 6,
                        D8: 8,
                        D10: 10,
                        D12: 12,
                        D20: 20
                    }
                        , n = {}
                        , A = function(A) {
                        var r = t[A];
                        n[A] = function(t) {
                            return void 0 === t ? Math.floor(e() * r) + 1 : y(new Array(t).keys()).map((function() {
                                    return Math.floor(e() * r) + 1
                                }
                            ))
                        }
                    };
                    for (var r in t)
                        A(r);
                    return D(D({}, n), {}, {
                        Die: function(t, n) {
                            return void 0 === t && (t = 6),
                                void 0 === n ? Math.floor(e() * t) + 1 : y(new Array(n).keys()).map((function() {
                                        return Math.floor(e() * t) + 1
                                    }
                                ))
                        },
                        Number: function() {
                            return e()
                        },
                        Shuffle: function(t) {
                            for (var n = t.slice(0), A = t.length, r = 0, a = new Array(A); A; ) {
                                var i = A * e() | 0;
                                a[r++] = n[i],
                                    n[i] = n[--A]
                            }
                            return a
                        },
                        _obj: this
                    })
                }
            }]),
                e
        }();
        te.seed = function() {
            return (+new Date).toString(36).slice(-10)
        }
        ;
        var ne = {
            name: "random",
            noClient: function(e) {
                return e.api._obj.isUsed()
            },
            flush: function(e) {
                return e.api._obj.getState()
            },
            api: function(e) {
                var t = e.data;
                return new te(t).api()
            },
            setup: function(e) {
                var t = e.game.seed;
                return void 0 === t && (t = te.seed()),
                    {
                        seed: t
                    }
            }
        }
            , Ae = function() {
            function e(t, n) {
                c(this, e),
                    this.flow = t,
                    this.playerID = n,
                    this.dispatch = []
            }
            return O(e, [{
                key: "api",
                value: function(e) {
                    var t, n = this, A = {
                        _obj: this
                    }, r = e.phase, a = e.turn, i = f(this.flow.eventNames);
                    try {
                        var o = function() {
                            var e = t.value;
                            A[e] = function() {
                                for (var t = arguments.length, A = new Array(t), i = 0; i < t; i++)
                                    A[i] = arguments[i];
                                n.dispatch.push({
                                    key: e,
                                    args: A,
                                    phase: r,
                                    turn: a
                                })
                            }
                        };
                        for (i.s(); !(t = i.n()).done; )
                            o()
                    } catch (E) {
                        i.e(E)
                    } finally {
                        i.f()
                    }
                    return A
                }
            }, {
                key: "isUsed",
                value: function() {
                    return this.dispatch.length > 0
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = 0; t < this.dispatch.length; t++) {
                        var n = this.dispatch[t];
                        if (("endTurn" !== n.key || n.turn === e.ctx.turn) && ("endPhase" !== n.key && "setPhase" !== n.key || n.phase === e.ctx.phase)) {
                            var A = Z(n.key, n.args, this.playerID);
                            e = d(d({}, e), this.flow.processEvent(e, A))
                        }
                    }
                    return e
                }
            }]),
                e
        }()
            , re = [Q, ne, {
            name: "events",
            noClient: function(e) {
                return e.api._obj.isUsed()
            },
            dangerouslyFlushRawState: function(e) {
                var t = e.state;
                return e.api._obj.update(t)
            },
            api: function(e) {
                var t = e.game
                    , n = e.playerID
                    , A = e.ctx;
                return new Ae(t.flow,n).api(A)
            }
        }]
            , ae = function(e, t, n) {
            return n.game.plugins.filter((function(e) {
                    return void 0 !== e.action
                }
            )).filter((function(e) {
                    return e.name === t.payload.type
                }
            )).forEach((function(n) {
                    var A = n.name
                        , r = e.plugins[A] || {
                        data: {}
                    }
                        , a = n.action(r.data, t.payload);
                    e = d(d({}, e), {}, {
                        plugins: d(d({}, e.plugins), {}, Object(E.a)({}, A, d(d({}, r), {}, {
                            data: a
                        })))
                    })
                }
            )),
                e
        }
            , ie = function(e) {
            var t = d({}, e.ctx)
                , n = e.plugins || {};
            return Object.entries(n).forEach((function(e) {
                    var n = Object(u.a)(e, 2)
                        , A = n[0]
                        , r = n[1].api;
                    t[A] = r
                }
            )),
                t
        }
            , oe = function(e, t) {
            return [].concat(re, Object(s.a)(t)).filter((function(e) {
                    return void 0 !== e.fnWrap
                }
            )).reduce((function(e, t) {
                    return (0,
                        t.fnWrap)(e)
                }
            ), e)
        }
            , Ee = function(e, t) {
            return [].concat(re, Object(s.a)(t.game.plugins)).filter((function(e) {
                    return void 0 !== e.setup
                }
            )).forEach((function(n) {
                    var A = n.name
                        , r = n.setup({
                        G: e.G,
                        ctx: e.ctx,
                        game: t.game
                    });
                    e = d(d({}, e), {}, {
                        plugins: d(d({}, e.plugins), {}, Object(E.a)({}, A, {
                            data: r
                        }))
                    })
                }
            )),
                e
        }
            , se = function(e, t) {
            return [].concat(re, Object(s.a)(t.game.plugins)).filter((function(e) {
                    return void 0 !== e.api
                }
            )).forEach((function(n) {
                    var A = n.name
                        , r = e.plugins[A] || {
                        data: {}
                    }
                        , a = n.api({
                        G: e.G,
                        ctx: e.ctx,
                        data: r.data,
                        game: t.game,
                        playerID: t.playerID
                    });
                    e = d(d({}, e), {}, {
                        plugins: d(d({}, e.plugins), {}, Object(E.a)({}, A, d(d({}, r), {}, {
                            api: a
                        })))
                    })
                }
            )),
                e
        }
            , ce = function(e, t) {
            return [].concat(re, Object(s.a)(t.game.plugins)).reverse().forEach((function(n) {
                    var A = n.name
                        , r = e.plugins[A] || {
                        data: {}
                    };
                    if (n.flush) {
                        var a = n.flush({
                            G: e.G,
                            ctx: e.ctx,
                            game: t.game,
                            api: r.api,
                            data: r.data
                        });
                        e = d(d({}, e), {}, {
                            plugins: d(d({}, e.plugins), {}, Object(E.a)({}, n.name, {
                                data: a
                            }))
                        })
                    } else if (n.dangerouslyFlushRawState) {
                        var i = (e = n.dangerouslyFlushRawState({
                            state: e,
                            game: t.game,
                            api: r.api,
                            data: r.data
                        })).plugins[A].data;
                        e = d(d({}, e), {}, {
                            plugins: d(d({}, e.plugins), {}, Object(E.a)({}, n.name, {
                                data: i
                            }))
                        })
                    }
                }
            )),
                e
        }
            , Re = function(e, t) {
            return [].concat(re, Object(s.a)(t.game.plugins)).filter((function(e) {
                    return void 0 !== e.noClient
                }
            )).map((function(n) {
                    var A = n.name
                        , r = e.plugins[A];
                    return !!r && n.noClient({
                        G: e.G,
                        ctx: e.ctx,
                        game: t.game,
                        api: r.api,
                        data: r.data
                    })
                }
            )).some((function(e) {
                    return !0 === e
                }
            ))
        }
            , Oe = function() {}
            , Ie = console.error;
        function Te(e) {
            Ie("ERROR:", e)
        }
        function Se(e, t, n) {
            return d(d({}, e), {}, {
                ctx: le(e.ctx, n)
            })
        }
        function le(e, t) {
            var n = e._prevActivePlayers
                , A = {}
                , r = null
                , a = {};
            if (Array.isArray(t)) {
                var i = {};
                t.forEach((function(e) {
                        return i[e] = de.NULL
                    }
                )),
                    A = i
            } else {
                if (t.next && (r = t.next),
                    n = t.revert ? n.concat({
                        activePlayers: e.activePlayers,
                        _activePlayersMoveLimit: e._activePlayersMoveLimit,
                        _activePlayersNumMoves: e._activePlayersNumMoves
                    }) : [],
                void 0 !== t.currentPlayer && Ne(A, a, e.currentPlayer, t.currentPlayer),
                void 0 !== t.others)
                    for (var o = 0; o < e.playOrder.length; o++) {
                        var E = e.playOrder[o];
                        E !== e.currentPlayer && Ne(A, a, E, t.others)
                    }
                if (void 0 !== t.all)
                    for (var s = 0; s < e.playOrder.length; s++) {
                        Ne(A, a, e.playOrder[s], t.all)
                    }
                if (t.value)
                    for (var c in t.value)
                        Ne(A, a, c, t.value[c]);
                if (t.moveLimit)
                    for (var R in A)
                        void 0 === a[R] && (a[R] = t.moveLimit)
            }
            0 == Object.keys(A).length && (A = null),
            0 == Object.keys(a).length && (a = null);
            var O = {};
            for (var I in A)
                O[I] = 0;
            return d(d({}, e), {}, {
                activePlayers: A,
                _activePlayersMoveLimit: a,
                _activePlayersNumMoves: O,
                _prevActivePlayers: n,
                _nextActivePlayers: r
            })
        }
        function Ne(e, t, n, A) {
            "object" === typeof A && A !== de.NULL || (A = {
                stage: A
            }),
            void 0 !== A.stage && (e[n] = A.stage,
            A.moveLimit && (t[n] = A.moveLimit))
        }
        function ue(e, t) {
            return e[t] + ""
        }
        var Le, pe = {
            DEFAULT: {
                first: function(e, t) {
                    return 0 === t.turn ? t.playOrderPos : (t.playOrderPos + 1) % t.playOrder.length
                },
                next: function(e, t) {
                    return (t.playOrderPos + 1) % t.playOrder.length
                }
            },
            RESET: {
                first: function() {
                    return 0
                },
                next: function(e, t) {
                    return (t.playOrderPos + 1) % t.playOrder.length
                }
            },
            CONTINUE: {
                first: function(e, t) {
                    return t.playOrderPos
                },
                next: function(e, t) {
                    return (t.playOrderPos + 1) % t.playOrder.length
                }
            },
            ONCE: {
                first: function() {
                    return 0
                },
                next: function(e, t) {
                    if (t.playOrderPos < t.playOrder.length - 1)
                        return t.playOrderPos + 1
                }
            },
            CUSTOM: function(e) {
                return {
                    playOrder: function() {
                        return e
                    },
                    first: function() {
                        return 0
                    },
                    next: function(e, t) {
                        return (t.playOrderPos + 1) % t.playOrder.length
                    }
                }
            },
            CUSTOM_FROM: function(e) {
                return {
                    playOrder: function(t) {
                        return t[e]
                    },
                    first: function() {
                        return 0
                    },
                    next: function(e, t) {
                        return (t.playOrderPos + 1) % t.playOrder.length
                    }
                }
            }
        }, de = {
            NULL: null
        };
        de.NULL,
            de.NULL,
            de.NULL,
            de.NULL;
        !function(e) {
            e[e.SYNC = 0] = "SYNC",
                e[e.ASYNC = 1] = "ASYNC"
        }(Le || (Le = {}));
        var fe = n("Ff2n")
            , he = n("bCCX")
            , Ke = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
            , Pe = {
            INIT: "@@redux/INIT" + Ke(),
            REPLACE: "@@redux/REPLACE" + Ke(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + Ke()
            }
        };
        function me(e) {
            if ("object" !== typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function Ue(e, t, n) {
            var A;
            if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3])
                throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
            if ("function" === typeof t && "undefined" === typeof n && (n = t,
                t = void 0),
            "undefined" !== typeof n) {
                if ("function" !== typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                return n(Ue)(e, t)
            }
            if ("function" !== typeof e)
                throw new Error("Expected the reducer to be a function.");
            var r = e
                , a = t
                , i = []
                , o = i
                , E = !1;
            function s() {
                o === i && (o = i.slice())
            }
            function c() {
                if (E)
                    throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return a
            }
            function R(e) {
                if ("function" !== typeof e)
                    throw new Error("Expected the listener to be a function.");
                if (E)
                    throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                var t = !0;
                return s(),
                    o.push(e),
                    function() {
                        if (t) {
                            if (E)
                                throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                            t = !1,
                                s();
                            var n = o.indexOf(e);
                            o.splice(n, 1),
                                i = null
                        }
                    }
            }
            function O(e) {
                if (!me(e))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof e.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (E)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    E = !0,
                        a = r(a, e)
                } finally {
                    E = !1
                }
                for (var t = i = o, n = 0; n < t.length; n++) {
                    (0,
                        t[n])()
                }
                return e
            }
            return O({
                type: Pe.INIT
            }),
                (A = {
                    dispatch: O,
                    subscribe: R,
                    getState: c,
                    replaceReducer: function(e) {
                        if ("function" !== typeof e)
                            throw new Error("Expected the nextReducer to be a function.");
                        r = e,
                            O({
                                type: Pe.REPLACE
                            })
                    }
                })[he.a] = function() {
                    var e, t = R;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e)
                                throw new TypeError("Expected the observer to be an object.");
                            function n() {
                                e.next && e.next(c())
                            }
                            return n(),
                                {
                                    unsubscribe: t(n)
                                }
                        }
                    })[he.a] = function() {
                        return this
                    }
                        ,
                        e
                }
                ,
                A
        }
        function Ce(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function Me(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
            t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
            ))),
                n
        }
        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Me(n, !0).forEach((function(t) {
                        Ce(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function ye() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return 0 === t.length ? function(e) {
                    return e
                }
                : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                        return function() {
                            return e(t.apply(void 0, arguments))
                        }
                    }
                ))
        }
        function ge() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments)
                        , A = function() {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                    }
                        , r = {
                        getState: n.getState,
                        dispatch: function() {
                            return A.apply(void 0, arguments)
                        }
                    }
                        , a = t.map((function(e) {
                            return e(r)
                        }
                    ));
                    return De({}, n, {
                        dispatch: A = ye.apply(void 0, a)(n.dispatch)
                    })
                }
            }
        }
        function Be(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function Ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Be(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function ve(e) {
            var t = e.moves
                , n = e.phases
                , A = e.endIf
                , r = e.onEnd
                , a = e.turn
                , i = e.events
                , o = e.plugins;
            void 0 === t && (t = {}),
            void 0 === i && (i = {}),
            void 0 === o && (o = []),
            void 0 === n && (n = {}),
            A || (A = function() {}
            ),
            r || (r = function(e) {
                    return e
                }
            ),
            a || (a = {});
            var E = Ge({}, n);
            ""in E && Te("cannot specify phase with empty name"),
                E[""] = {};
            var c = {}
                , R = new Set
                , O = null;
            Object.keys(t).forEach((function(e) {
                    return R.add(e)
                }
            ));
            var I = function(e) {
                var t = oe(e, o);
                return function(e) {
                    var n = ie(e);
                    return t(e.G, n)
                }
            }
                , T = function(e) {
                return function(t) {
                    var n = ie(t);
                    return e(t.G, n)
                }
            }
                , S = {
                onEnd: I(r),
                endIf: T(A)
            };
            for (var l in E) {
                var N = E[l];
                if (!0 === N.start && (O = l),
                void 0 !== N.moves)
                    for (var u = 0, L = Object.keys(N.moves); u < L.length; u++) {
                        var p = L[u];
                        c[l + "." + p] = N.moves[p],
                            R.add(p)
                    }
                for (var f in void 0 === N.endIf && (N.endIf = function() {}
                ),
                void 0 === N.onBegin && (N.onBegin = function(e) {
                        return e
                    }
                ),
                void 0 === N.onEnd && (N.onEnd = function(e) {
                        return e
                    }
                ),
                void 0 === N.turn && (N.turn = a),
                void 0 === N.turn.order && (N.turn.order = pe.DEFAULT),
                void 0 === N.turn.onBegin && (N.turn.onBegin = function(e) {
                        return e
                    }
                ),
                void 0 === N.turn.onEnd && (N.turn.onEnd = function(e) {
                        return e
                    }
                ),
                void 0 === N.turn.endIf && (N.turn.endIf = function() {
                        return !1
                    }
                ),
                void 0 === N.turn.onMove && (N.turn.onMove = function(e) {
                        return e
                    }
                ),
                void 0 === N.turn.stages && (N.turn.stages = {}),
                    N.turn.stages)
                    for (var h = N.turn.stages[f].moves || {}, K = 0, P = Object.keys(h); K < P.length; K++) {
                        var m = P[K];
                        c[l + "." + f + "." + m] = h[m],
                            R.add(m)
                    }
                N.wrapped = {
                    onBegin: I(N.onBegin),
                    onEnd: I(N.onEnd),
                    endIf: T(N.endIf)
                },
                    N.turn.wrapped = {
                        onMove: I(N.turn.onMove),
                        onBegin: I(N.turn.onBegin),
                        onEnd: I(N.turn.onEnd),
                        endIf: T(N.turn.endIf)
                    }
            }
            function U(e) {
                return e.phase ? E[e.phase] : E[""]
            }
            function C(e) {
                return e
            }
            function M(e, t) {
                for (var n = new Set, A = new Set, r = 0; r < t.length; r++) {
                    var a = t[r]
                        , i = a.fn
                        , o = a.arg
                        , E = Object(fe.a)(a, ["fn", "arg"]);
                    if (i === w) {
                        A.clear();
                        var s = e.ctx.phase;
                        if (n.has(s)) {
                            var c = Ge(Ge({}, e.ctx), {}, {
                                phase: null
                            });
                            return Ge(Ge({}, e), {}, {
                                ctx: c
                            })
                        }
                        n.add(s)
                    }
                    var R = [];
                    if (e = i(e, Ge(Ge({}, E), {}, {
                        arg: o,
                        next: R
                    })),
                    i === V)
                        break;
                    var O = b(e);
                    if (O)
                        t.push({
                            fn: V,
                            arg: O,
                            turn: e.ctx.turn,
                            phase: e.ctx.phase,
                            automatic: !0
                        });
                    else {
                        var I = H(e);
                        if (I)
                            t.push({
                                fn: w,
                                arg: I,
                                turn: e.ctx.turn,
                                phase: e.ctx.phase,
                                automatic: !0
                            });
                        else {
                            if (i === C) {
                                var T = x(e);
                                if (T) {
                                    t.push({
                                        fn: k,
                                        arg: T,
                                        turn: e.ctx.turn,
                                        phase: e.ctx.phase,
                                        automatic: !0
                                    });
                                    continue
                                }
                            }
                            t.push.apply(t, R)
                        }
                    }
                }
                return e
            }
            function D(e, t) {
                return t.next.push({
                    fn: y
                }),
                    e
            }
            function y(e, t) {
                var n = t.next
                    , A = e.G
                    , r = e.ctx;
                return A = U(r).wrapped.onBegin(e),
                    n.push({
                        fn: g
                    }),
                    Ge(Ge({}, e), {}, {
                        G: A,
                        ctx: r
                    })
            }
            function g(e, t) {
                var n = t.currentPlayer
                    , A = e.G
                    , r = e.ctx
                    , a = U(r);
                n ? (r = Ge(Ge({}, r), {}, {
                    currentPlayer: n
                }),
                a.turn.activePlayers && (r = le(r, a.turn.activePlayers))) : r = function(e, t) {
                    var n = e.G
                        , A = e.ctx
                        , r = ie(e)
                        , a = t.order
                        , i = Object(s.a)(new Array(A.numPlayers)).map((function(e, t) {
                            return t + ""
                        }
                    ));
                    void 0 !== a.playOrder && (i = a.playOrder(n, r));
                    var o = a.first(n, r)
                        , E = typeof o;
                    "number" !== E && Te("invalid value returned by turn.order.first \u2014 expected number got ".concat(E, " \u201c").concat(o, "\u201d."));
                    var c = ue(i, o);
                    return A = le(A = d(d({}, A), {}, {
                        currentPlayer: c,
                        playOrderPos: o,
                        playOrder: i
                    }), t.activePlayers || {})
                }(e, a.turn);
                var i = r.turn + 1;
                r = Ge(Ge({}, r), {}, {
                    turn: i,
                    numMoves: 0,
                    _prevActivePlayers: []
                });
                var o = [{
                    G: A = a.turn.wrapped.onBegin(Ge(Ge({}, e), {}, {
                        G: A,
                        ctx: r
                    })),
                    ctx: r
                }];
                return Ge(Ge({}, e), {}, {
                    G: A,
                    ctx: r,
                    _undo: o,
                    _redo: []
                })
            }
            function B(e, t) {
                var n = t.arg
                    , A = t.next
                    , r = U({
                    phase: t.phase
                })
                    , a = e.ctx;
                if (n && n.next) {
                    if (!(n.next in E))
                        return Te("invalid phase: " + n.next),
                            e;
                    a = Ge(Ge({}, a), {}, {
                        phase: n.next
                    })
                } else
                    a = void 0 !== r.next ? Ge(Ge({}, a), {}, {
                        phase: r.next
                    }) : Ge(Ge({}, a), {}, {
                        phase: null
                    });
                return e = Ge(Ge({}, e), {}, {
                    ctx: a
                }),
                    A.push({
                        fn: y
                    }),
                    e
            }
            function G(e, t) {
                var n = t.arg
                    , A = t.currentPlayer
                    , r = t.next
                    , a = e
                    , i = a.G
                    , o = a.ctx
                    , E = function(e, t, n, A) {
                    var r = n.order
                        , a = e.G
                        , i = e.ctx
                        , o = i.playOrderPos
                        , E = !1;
                    if (A && !0 !== A)
                        "object" !== typeof A && Te("invalid argument to endTurn: ".concat(A)),
                            Object.keys(A).forEach((function(e) {
                                    switch (e) {
                                        case "remove":
                                            t = ue(i.playOrder, o);
                                            break;
                                        case "next":
                                            o = i.playOrder.indexOf(A.next),
                                                t = A.next;
                                            break;
                                        default:
                                            Te("invalid argument to endTurn: ".concat(e))
                                    }
                                }
                            ));
                    else {
                        var s = ie(e)
                            , c = r.next(a, s)
                            , R = typeof c;
                        void 0 !== c && "number" !== R && Te("invalid value returned by turn.order.next \u2014 expected number or undefined got ".concat(R, " \u201c").concat(c, "\u201d.")),
                            void 0 === c ? E = !0 : (o = c,
                                t = ue(i.playOrder, o))
                    }
                    return {
                        endPhase: E,
                        ctx: i = d(d({}, i), {}, {
                            playOrderPos: o,
                            currentPlayer: t
                        })
                    }
                }(e, A, U(o).turn, n)
                    , s = E.endPhase;
                return o = E.ctx,
                    e = Ge(Ge({}, e), {}, {
                        G: i,
                        ctx: o
                    }),
                    s ? r.push({
                        fn: w,
                        turn: o.turn,
                        phase: o.phase
                    }) : r.push({
                        fn: g,
                        currentPlayer: o.currentPlayer
                    }),
                    e
            }
            function v(e, t) {
                var n = t.arg
                    , A = t.playerID;
                "string" === typeof n && (n = {
                    stage: n
                });
                var r = e.ctx
                    , a = r
                    , i = a.activePlayers
                    , o = a._activePlayersMoveLimit
                    , E = a._activePlayersNumMoves;
                return n.stage && (null === i && (i = {}),
                    i[A] = n.stage,
                    E[A] = 0,
                n.moveLimit && (null === o && (o = {}),
                    o[A] = n.moveLimit)),
                    r = Ge(Ge({}, r), {}, {
                        activePlayers: i,
                        _activePlayersMoveLimit: o,
                        _activePlayersNumMoves: E
                    }),
                    Ge(Ge({}, e), {}, {
                        ctx: r
                    })
            }
            function b(e) {
                return S.endIf(e)
            }
            function H(e) {
                return U(e.ctx).wrapped.endIf(e)
            }
            function x(e) {
                var t = U(e.ctx)
                    , n = e.ctx.numMoves || 0;
                return !!(t.turn.moveLimit && n >= t.turn.moveLimit) || t.turn.wrapped.endIf(e)
            }
            function V(e, t) {
                var n = t.arg;
                void 0 === n && (n = !0),
                    e = Ge(Ge({}, e = w(e, {
                        phase: t.phase
                    })), {}, {
                        ctx: Ge(Ge({}, e.ctx), {}, {
                            gameover: n
                        })
                    });
                var A = S.onEnd(e);
                return Ge(Ge({}, e), {}, {
                    G: A
                })
            }
            function w(e, t) {
                var n = t.arg
                    , A = t.next
                    , r = t.turn
                    , a = t.automatic
                    , i = (e = k(e, {
                    turn: r,
                    force: !0
                })).G
                    , o = e.ctx;
                if (A && A.push({
                    fn: B,
                    arg: n,
                    phase: o.phase
                }),
                null === o.phase)
                    return e;
                i = U(o).wrapped.onEnd(e),
                    o = Ge(Ge({}, o), {}, {
                        phase: null
                    });
                var E = {
                    action: F("endPhase", n),
                    _stateID: e._stateID,
                    turn: e.ctx.turn,
                    phase: e.ctx.phase
                };
                a && (E.automatic = !0);
                var c = [].concat(Object(s.a)(e.deltalog), [E]);
                return Ge(Ge({}, e), {}, {
                    G: i,
                    ctx: o,
                    deltalog: c
                })
            }
            function k(e, t) {
                var n = t.arg
                    , A = t.next
                    , r = t.turn
                    , a = t.force
                    , i = t.automatic
                    , o = t.playerID;
                if (r !== e.ctx.turn)
                    return e;
                var E, c = e.G, R = e.ctx, O = U(R), I = R.numMoves || 0;
                if (!a && O.turn.moveLimit && I < O.turn.moveLimit)
                    return E = "cannot end turn before making ".concat(O.turn.moveLimit, " moves"),
                        Oe("INFO: ".concat(E)),
                        e;
                if (c = O.turn.wrapped.onEnd(e),
                A && A.push({
                    fn: G,
                    arg: n,
                    currentPlayer: R.currentPlayer
                }),
                    R = Ge(Ge({}, R), {}, {
                        activePlayers: null
                    }),
                n && n.remove) {
                    o = o || R.currentPlayer;
                    var T = R.playOrder.filter((function(e) {
                            return e != o
                        }
                    ))
                        , S = R.playOrderPos > T.length - 1 ? 0 : R.playOrderPos;
                    if (R = Ge(Ge({}, R), {}, {
                        playOrder: T,
                        playOrderPos: S
                    }),
                    0 === T.length)
                        return A.push({
                            fn: w,
                            turn: R.turn,
                            phase: R.phase
                        }),
                            e
                }
                var l = {
                    action: F("endTurn", n),
                    _stateID: e._stateID,
                    turn: e.ctx.turn,
                    phase: e.ctx.phase
                };
                i && (l.automatic = !0);
                var N = [].concat(Object(s.a)(e.deltalog || []), [l]);
                return Ge(Ge({}, e), {}, {
                    G: c,
                    ctx: R,
                    deltalog: N,
                    _undo: [],
                    _redo: []
                })
            }
            function Z(e, t) {
                var n = t.arg
                    , A = t.next
                    , r = t.automatic
                    , a = t.playerID;
                a = a || e.ctx.currentPlayer;
                var i = e.ctx
                    , o = i
                    , E = o.activePlayers
                    , c = o._activePlayersMoveLimit
                    , R = null !== E && a in E;
                if (!n && R) {
                    var O = U(i).turn.stages[E[a]];
                    O && O.next && (n = O.next)
                }
                if (A && n && A.push({
                    fn: v,
                    arg: n,
                    playerID: a
                }),
                    !R)
                    return e;
                E = Object.keys(E).filter((function(e) {
                        return e !== a
                    }
                )).reduce((function(e, t) {
                        return e[t] = E[t],
                            e
                    }
                ), {}),
                c && (c = Object.keys(c).filter((function(e) {
                        return e !== a
                    }
                )).reduce((function(e, t) {
                        return e[t] = c[t],
                            e
                    }
                ), {})),
                    i = function(e) {
                        var t = e
                            , n = t.activePlayers
                            , A = t._activePlayersMoveLimit
                            , r = t._activePlayersNumMoves
                            , a = t._prevActivePlayers;
                        if (n && 0 == Object.keys(n).length)
                            if (e._nextActivePlayers) {
                                var i = e = le(e, e._nextActivePlayers);
                                n = i.activePlayers,
                                    A = i._activePlayersMoveLimit,
                                    r = i._activePlayersNumMoves,
                                    a = i._prevActivePlayers
                            } else if (a.length > 0) {
                                var o = a.length - 1
                                    , E = a[o];
                                n = E.activePlayers,
                                    A = E._activePlayersMoveLimit,
                                    r = E._activePlayersNumMoves,
                                    a = a.slice(0, o)
                            } else
                                n = null,
                                    A = null;
                        return d(d({}, e), {}, {
                            activePlayers: n,
                            _activePlayersMoveLimit: A,
                            _activePlayersNumMoves: r,
                            _prevActivePlayers: a
                        })
                    }(Ge(Ge({}, i), {}, {
                        activePlayers: E,
                        _activePlayersMoveLimit: c
                    }));
                var I = {
                    action: F("endStage", n),
                    _stateID: e._stateID,
                    turn: e.ctx.turn,
                    phase: e.ctx.phase
                };
                r && (I.automatic = !0);
                var T = [].concat(Object(s.a)(e.deltalog || []), [I]);
                return Ge(Ge({}, e), {}, {
                    ctx: i,
                    deltalog: T
                })
            }
            function J(e, n, A) {
                var r = U(e)
                    , a = r.turn.stages
                    , i = e.activePlayers;
                if (i && void 0 !== i[A] && i[A] !== de.NULL && void 0 !== a[i[A]] && void 0 !== a[i[A]].moves) {
                    var o = a[i[A]].moves;
                    if (n in o)
                        return o[n]
                } else if (r.moves) {
                    if (n in r.moves)
                        return r.moves[n]
                } else if (n in t)
                    return t[n];
                return null
            }
            var j = {
                endStage: function(e, t) {
                    return M(e, [{
                        fn: Z,
                        playerID: t
                    }])
                },
                setStage: function(e, t, n) {
                    return M(e, [{
                        fn: Z,
                        arg: n,
                        playerID: t
                    }])
                },
                endTurn: function(e, t, n) {
                    return M(e, [{
                        fn: k,
                        turn: e.ctx.turn,
                        phase: e.ctx.phase,
                        arg: n
                    }])
                },
                pass: function(e, t, n) {
                    return M(e, [{
                        fn: k,
                        turn: e.ctx.turn,
                        phase: e.ctx.phase,
                        force: !0,
                        arg: n
                    }])
                },
                endPhase: function(e) {
                    return M(e, [{
                        fn: w,
                        phase: e.ctx.phase,
                        turn: e.ctx.turn
                    }])
                },
                setPhase: function(e, t, n) {
                    return M(e, [{
                        fn: w,
                        phase: e.ctx.phase,
                        turn: e.ctx.turn,
                        arg: {
                            next: n
                        }
                    }])
                },
                endGame: function(e, t, n) {
                    return M(e, [{
                        fn: V,
                        turn: e.ctx.turn,
                        phase: e.ctx.phase,
                        arg: n
                    }])
                },
                setActivePlayers: Se
            }
                , Y = [];
            return !1 !== i.endTurn && Y.push("endTurn"),
            !1 !== i.pass && Y.push("pass"),
            !1 !== i.endPhase && Y.push("endPhase"),
            !1 !== i.setPhase && Y.push("setPhase"),
            !1 !== i.endGame && Y.push("endGame"),
            !1 !== i.setActivePlayers && Y.push("setActivePlayers"),
            !1 !== i.endStage && Y.push("endStage"),
            !1 !== i.setStage && Y.push("setStage"),
                {
                    ctx: function(e) {
                        return {
                            numPlayers: e,
                            turn: 0,
                            currentPlayer: "0",
                            playOrder: Object(s.a)(new Array(e)).map((function(e, t) {
                                    return t + ""
                                }
                            )),
                            playOrderPos: 0,
                            phase: O,
                            activePlayers: null,
                            players: []
                        }
                    },
                    init: function(e) {
                        return M(e, [{
                            fn: D
                        }])
                    },
                    isPlayerActive: function(e, t, n) {
                        return t.activePlayers ? n in t.activePlayers : t.currentPlayer === n
                    },
                    eventHandlers: j,
                    eventNames: Object.keys(j),
                    enabledEventNames: Y,
                    moveMap: c,
                    moveNames: Object(s.a)(R.values()),
                    processMove: function(e, t) {
                        var n = U(e.ctx)
                            , A = J(e.ctx, t.type, t.playerID)
                            , r = !A || "function" === typeof A || !0 !== A.noLimit
                            , a = e.ctx
                            , i = a._activePlayersNumMoves
                            , o = t.playerID
                            , E = e.ctx.numMoves;
                        r && (o == e.ctx.currentPlayer && E++,
                        a.activePlayers && i[o]++),
                            e = Ge(Ge({}, e), {}, {
                                ctx: Ge(Ge({}, a), {}, {
                                    numMoves: E,
                                    _activePlayersNumMoves: i
                                })
                            }),
                        a._activePlayersMoveLimit && i[o] >= a._activePlayersMoveLimit[o] && (e = Z(e, {
                            playerID: o,
                            automatic: !0
                        }));
                        var s = n.turn.wrapped.onMove(e);
                        return M(e = Ge(Ge({}, e), {}, {
                            G: s
                        }), [{
                            fn: C
                        }])
                    },
                    processEvent: function(e, t) {
                        var n = t.payload
                            , A = n.type
                            , r = n.playerID
                            , a = n.args;
                        if (j.hasOwnProperty(A)) {
                            var i = [e, r].concat(a);
                            return j[A].apply({}, i)
                        }
                        return e
                    },
                    getMove: J
                }
        }
        function be(e) {
            if (function(e) {
                return void 0 !== e.processMove
            }(e))
                return e;
            if (void 0 === e.name && (e.name = "default"),
            void 0 === e.setup && (e.setup = function() {
                    return {}
                }
            ),
            void 0 === e.moves && (e.moves = {}),
            void 0 === e.playerView && (e.playerView = function(e) {
                    return e
                }
            ),
            void 0 === e.plugins && (e.plugins = []),
                e.plugins.forEach((function(e) {
                        if (void 0 === e.name)
                            throw new Error("Plugin missing name attribute");
                        if (e.name.includes(" "))
                            throw new Error(e.name + ": Plugin name must not include spaces")
                    }
                )),
                e.name.includes(" "))
                throw new Error(e.name + ": Game name must not include spaces");
            var t = ve(e);
            return Ge(Ge({}, e), {}, {
                flow: t,
                moveNames: t.moveNames,
                pluginNames: e.plugins.map((function(e) {
                        return e.name
                    }
                )),
                processMove: function(n, A) {
                    var r, a = t.getMove(n.ctx, A.type, A.playerID);
                    if ((r = a)instanceof Object && void 0 !== r.move && (a = a.move),
                    a instanceof Function) {
                        var i = oe(a, e.plugins)
                            , o = Ge(Ge({}, ie(n)), {}, {
                            playerID: A.playerID
                        })
                            , E = [];
                        return void 0 !== A.args && (E = E.concat(A.args)),
                            i.apply(void 0, [n.G, o].concat(Object(s.a)(E)))
                    }
                    return Te("invalid move object: ".concat(A.type)),
                        n.G
                }
            })
        }
        var He = function(e, t, n) {
            return !function(e) {
                return void 0 !== e.undoable
            }(n) || (n.undoable instanceof Function ? n.undoable(e, t) : n.undoable)
        };
        function xe(e) {
            var t = e.game
                , n = e.isClient;
            return t = be(t),
                function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                        , A = arguments.length > 1 ? arguments[1] : void 0;
                    switch (A.type) {
                        case v:
                            if (e = Ge(Ge({}, e), {}, {
                                deltalog: []
                            }),
                                n)
                                return e;
                            if (void 0 !== e.ctx.gameover)
                                return Te("cannot call event after game end"),
                                    e;
                            if (null !== A.payload.playerID && void 0 !== A.payload.playerID && !t.flow.isPlayerActive(e.G, e.ctx, A.payload.playerID))
                                return Te("disallowed event: ".concat(A.payload.type)),
                                    e;
                            e = se(e, {
                                game: t,
                                isClient: !1,
                                playerID: A.payload.playerID
                            });
                            var r = t.flow.processEvent(e, A);
                            return Ge(Ge({}, r = ce(r, {
                                game: t,
                                isClient: !1
                            })), {}, {
                                _stateID: e._stateID + 1
                            });
                        case G:
                            e = Ge(Ge({}, e), {}, {
                                deltalog: []
                            });
                            var a = t.flow.getMove(e.ctx, A.payload.type, A.payload.playerID || e.ctx.currentPlayer);
                            if (null === a)
                                return Te("disallowed move: ".concat(A.payload.type)),
                                    e;
                            if (n && !1 === a.client)
                                return e;
                            if (void 0 !== e.ctx.gameover)
                                return Te("cannot make move after game end"),
                                    e;
                            if (null !== A.payload.playerID && void 0 !== A.payload.playerID && !t.flow.isPlayerActive(e.G, e.ctx, A.payload.playerID))
                                return Te("disallowed move: ".concat(A.payload.type)),
                                    e;
                            e = se(e, {
                                game: t,
                                isClient: n,
                                playerID: A.payload.playerID
                            });
                            var i = t.processMove(e, A.payload);
                            if (i === X)
                                return Te("invalid move: ".concat(A.payload.type, " args: ").concat(A.payload.args)),
                                    e;
                            var o = {
                                action: A,
                                _stateID: e._stateID,
                                turn: e.ctx.turn,
                                phase: e.ctx.phase
                            };
                            !0 === a.redact && (o.redact = !0);
                            var E = Ge(Ge({}, e), {}, {
                                G: i,
                                deltalog: [o],
                                _stateID: e._stateID + 1
                            });
                            if (n && Re(E, {
                                game: t
                            }))
                                return e;
                            if (e = E,
                                n)
                                return e = ce(e, {
                                    game: t,
                                    isClient: !0
                                });
                            var c = e.ctx.turn;
                            return e = t.flow.processMove(e, A.payload),
                            (e = ce(e, {
                                game: t
                            })).ctx.turn === c && (e._undo = e._undo.concat({
                                G: e.G,
                                ctx: e.ctx,
                                moveType: A.payload.type
                            })),
                                e._redo = [],
                                e;
                        case H:
                        case w:
                        case x:
                            return A.state;
                        case V:
                            var R = e
                                , O = R._undo
                                , I = R._redo;
                            if (O.length < 2)
                                return e;
                            var T = O[O.length - 1]
                                , S = O[O.length - 2]
                                , l = t.flow.getMove(S.ctx, T.moveType, A.payload.playerID);
                            return He(e.G, e.ctx, l) ? Ge(Ge({}, e), {}, {
                                G: S.G,
                                ctx: S.ctx,
                                _undo: O.slice(0, O.length - 1),
                                _redo: [T].concat(Object(s.a)(I))
                            }) : e;
                        case b:
                            var N = e
                                , u = N._undo
                                , L = N._redo;
                            if (0 == L.length)
                                return e;
                            var p = L[0];
                            return Ge(Ge({}, e), {}, {
                                G: p.G,
                                ctx: p.ctx,
                                _undo: [].concat(Object(s.a)(u), [p]),
                                _redo: L.slice(1)
                            });
                        case k:
                            return ae(e, A, {
                                game: t
                            });
                        default:
                            return e
                    }
                }
        }
        function Ve(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ve(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function ke(e) {
            var t = e.game
                , n = e.numPlayers
                , A = e.setupData;
            n || (n = 2);
            var r = {
                G: {},
                ctx: (t = be(t)).flow.ctx(n),
                plugins: {}
            };
            r = Ee(r, {
                game: t
            }),
                r = se(r, {
                    game: t,
                    playerID: void 0
                });
            var a = ie(r);
            r.G = t.setup(a, A);
            var i = we(we({}, r), {}, {
                _undo: [],
                _redo: [],
                _stateID: 0
            });
            return i = t.flow.init(i),
                i = ce(i, {
                    game: t
                })
        }
        var Fe = n("gFX4")
            , Ze = n.n(Fe);
        function Je(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Je(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function Ye(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, A = N(e);
                if (t) {
                    var r = N(this).constructor;
                    n = Reflect.construct(A, arguments, r)
                } else
                    n = A.apply(this, arguments);
                return l(this, n)
            }
        }
        var We = function e(t) {
            var n = t.store
                , A = t.gameName
                , r = t.playerID
                , a = t.gameID
                , i = t.numPlayers;
            c(this, e),
                this.store = n,
                this.gameName = A || "default",
                this.playerID = r || null,
                this.gameID = a || "default",
                this.numPlayers = i || 2
        };
        new Map;
        var _e = function(e) {
            T(n, e);
            var t = Ye(n);
            function n() {
                var e, A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = A.socket, a = A.socketOpts, i = A.store, o = A.gameID, E = A.playerID, s = A.gameName, R = A.numPlayers, O = A.server, I = A.credentials;
                return c(this, n),
                    (e = t.call(this, {
                        store: i,
                        gameName: s,
                        playerID: E,
                        gameID: o,
                        numPlayers: R
                    })).server = O,
                    e.socket = r,
                    e.credentials = I,
                    e.socketOpts = a,
                    e.isConnected = !1,
                    e.latency = -1,
                    e.status = "initial",
                    e.resyncTimeout = null,
                    e.callback = function() {}
                    ,
                    e.kickCallback = function() {}
                    ,
                    e.gameMetadataCallback = function() {}
                    ,
                    e.actionTimeout = null,
                    e.players = [],
                    e
            }
            return O(n, [{
                key: "onAction",
                value: function(e, t) {
                    this.socket && this.socket.emit("update", t, e._stateID, this.gameID, this.playerID)
                }
            }, {
                key: "updatePlayer",
                value: function(e, t) {
                    this.socket && this.socket.emit("updatePlayer", e, t)
                }
            }, {
                key: "sendEvent",
                value: function(e, t) {
                    this.socket && this.socket.emit(e, t)
                }
            }, {
                key: "connect",
                value: function() {
                    var e = this;
                    if (!this.socket)
                        if (this.server) {
                            var t = this.server;
                            -1 == t.search(/^https?:\/\//) && (t = "http://" + this.server),
                            "/" != t.substr(-1) && (t += "/"),
                                this.socket = Ze()(t + this.gameName, this.socketOpts)
                        } else
                            this.socket = Ze()("/" + this.gameName, this.socketOpts);
                    this.socket.on("update", (function(t, n, A) {
                            var r = e.store.getState();
                            if (t == e.gameID && n._stateID >= r._stateID) {
                                var a = j(n, A);
                                e.store.dispatch(a)
                            }
                        }
                    )),
                        this.socket.on("sync", (function(t, n) {
                                if (t == e.gameID) {
                                    e.status = "synced";
                                    var A = J(n);
                                    e.gameMetadataCallback(n.filteredMetadata),
                                        e.store.dispatch(A)
                                }
                            }
                        )),
                        this.socket.on("resync", (function(t, n, A) {
                                t == e.gameID && (console.log("resync - is same game!"),
                                    e.resync())
                            }
                        )),
                        this.socket.on("ping", (function() {}
                        )),
                        this.socket.on("pong", (function(t) {
                                e.latency = t
                            }
                        )),
                        this.socket.on("error", (function(e) {}
                        )),
                        this.socket.on("connect", (function() {
                                e.socket.emit("sync", e.gameID, e.playerID, e.numPlayers),
                                    e.isConnected = !0,
                                    e.callback()
                            }
                        )),
                        this.socket.on("disconnect", (function() {
                                e.isConnected = !1,
                                    e.callback()
                            }
                        )),
                        this.socket.on("reconnect", (function(t) {
                                e.resync(),
                                    e.isConnected = !0,
                                    e.callback()
                            }
                        )),
                        this.socket.on("reload", (function(e) {
                                window.appVersion !== e && window.location.reload()
                            }
                        )),
                        this.socket.on("forcereload", (function() {
                                window.location.reload()
                            }
                        )),
                        this.socket.on("kick", (function() {
                                e.kickCallback()
                            }
                        )),
                        this.socket.on("players", (function(t) {
                                e.players = t,
                                    e.callback()
                            }
                        )),
                        this.callSync()
                }
            }, {
                key: "callSync",
                value: function() {
                    var e = this;
                    this.socket && ("syncing" == this.status || (clearTimeout(this.resyncTimeout),
                        this.resyncTimeout = setTimeout((function() {
                                e.status = "syncing",
                                    e.socket.emit("sync", e.gameID, e.playerID, e.numPlayers, e.credentials),
                                    e.resyncTimeout = null
                            }
                        ), 1e3)))
                }
            }, {
                key: "resync",
                value: function() {
                    this.status = "resyncing",
                        this.callSync()
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.socket && (this.socket.close(),
                        this.socket = null),
                        clearTimeout(this.resyncTimeout),
                        this.isConnected = !1,
                        this.callback()
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    this.callback = e
                }
            }, {
                key: "subscribeGameMetadata",
                value: function(e) {
                    this.gameMetadataCallback = e
                }
            }, {
                key: "subscribeKick",
                value: function(e) {
                    this.kickCallback = e
                }
            }, {
                key: "updateGameID",
                value: function(e) {
                    this.gameID = e;
                    var t = Y(null);
                    this.store.dispatch(t),
                    this.socket && this.callSync()
                }
            }, {
                key: "updatePlayerID",
                value: function(e) {
                    this.playerID = e;
                    var t = Y(null);
                    this.store.dispatch(t),
                    this.socket && this.callSync()
                }
            }]),
                n
        }(We);
        function ze() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = e.server
                , n = e.socketOpts;
            return function(e) {
                return new _e(je({
                    server: t,
                    socketOpts: n
                }, e))
            }
        }
        function Xe(e, t, n, A, r, a) {
            return t.reduce((function(t, i) {
                    return t[i] = function() {
                        var t = A;
                        if (!a && (null === A || void 0 === A)) {
                            var o = n.getState();
                            t = o.ctx.currentPlayer
                        }
                        for (var E = arguments.length, s = new Array(E), c = 0; c < E; c++)
                            s[c] = arguments[c];
                        n.dispatch(z[e](i, s, t, r))
                    }
                        ,
                        t
                }
            ), {})
        }
        var Qe = Xe.bind(null, "makeMove")
            , qe = Xe.bind(null, "gameEvent")
            , $e = Xe.bind(null, "plugin")
            , et = function() {
            function e(t) {
                var n = this
                    , A = t.game
                    , r = t.debug
                    , a = t.numPlayers
                    , i = t.multiplayer
                    , o = t.gameID
                    , E = t.playerID
                    , s = t.credentials
                    , c = t.enhancer;
                P(this, e),
                    this.game = be(A),
                    this.playerID = E,
                    this.gameID = o,
                    this.credentials = s,
                    this.multiplayer = i,
                    this.debug = r,
                    this.gameStateOverride = null,
                    this.subscribers = {},
                    this._running = !1,
                    this.reducer = xe({
                        game: this.game,
                        isClient: void 0 !== i,
                        numPlayers: a
                    }),
                    this.initialState = null,
                i || (this.initialState = ke({
                    game: this.game,
                    numPlayers: a
                })),
                    this.reset = function() {
                        n.store.dispatch(Y(n.initialState))
                    }
                    ,
                    this.undo = function() {
                        n.store.dispatch(W(E, s))
                    }
                    ,
                    this.redo = function() {
                        n.store.dispatch(_(E, s))
                    }
                    ,
                    this.store = null,
                    this.log = [];
                var R = function(e) {
                    return function(t) {
                        return function(A) {
                            var r = t(A)
                                , a = e.getState();
                            switch (A.type) {
                                case G:
                                case v:
                                    var i = a.deltalog;
                                    n.log = [].concat(y(n.log), y(i));
                                    break;
                                case H:
                                    n.log = [];
                                    break;
                                case w:
                                    var o = -1;
                                    n.log.length > 0 && (o = n.log[n.log.length - 1]._stateID);
                                    var E = A.deltalog || [];
                                    E = E.filter((function(e) {
                                            return e._stateID > o
                                        }
                                    )),
                                        n.log = [].concat(y(n.log), y(E));
                                    break;
                                case x:
                                    n.initialState = A.initialState,
                                        n.log = A.log || []
                            }
                            return r
                        }
                    }
                }
                    , O = function(e) {
                    return function(t) {
                        return function(A) {
                            var r = e.getState()
                                , a = t(A);
                            return 1 != A.clientOnly && n.transport.onAction(r, A),
                                a
                        }
                    }
                }
                    , I = function() {
                    return function(e) {
                        return function(t) {
                            var A = e(t);
                            return n.notifySubscribers(),
                                A
                        }
                    }
                };
                c = void 0 !== c ? ye(ge(I, O, R), c) : ge(I, O, R),
                    this.store = Ue(this.reducer, this.initialState, c),
                    this.transport = {
                        isConnected: !0,
                        onAction: function() {},
                        subscribe: function() {},
                        subscribeGameMetadata: function(e) {},
                        connect: function() {},
                        disconnect: function() {},
                        updateGameID: function() {},
                        updatePlayerID: function() {}
                    },
                i && (this.transport = i({
                    gameKey: A,
                    game: this.game,
                    store: this.store,
                    gameID: o,
                    playerID: E,
                    gameName: this.game.name,
                    numPlayers: a,
                    credentials: this.credentials
                })),
                    this.createDispatchers(),
                    this.transport.subscribeGameMetadata((function(e) {
                            n.gameMetadata = e
                        }
                    )),
                    this._debugPanel = null
            }
            return U(e, [{
                key: "notifySubscribers",
                value: function() {
                    var e = this;
                    Object.values(this.subscribers).forEach((function(t) {
                            return t(e.getState())
                        }
                    ))
                }
            }, {
                key: "overrideGameState",
                value: function(e) {
                    this.gameStateOverride = e,
                        this.notifySubscribers()
                }
            }, {
                key: "start",
                value: function() {
                    if (!this._running) {
                        this.transport.connect(),
                            this._running = !0;
                        var e = null;
                        if (this.debug && this.debug.impl && (e = this.debug.impl),
                        null !== e && !1 !== this.debug && null == this._debugPanel && "undefined" !== typeof document) {
                            var t = document.body;
                            this.debug && void 0 !== this.debug.target && (t = this.debug.target),
                            t && (this._debugPanel = new e({
                                target: t,
                                props: {
                                    client: this
                                }
                            }))
                        }
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.transport.disconnect(),
                        this._running = !1,
                    null != this._debugPanel && (this._debugPanel.$destroy(),
                        this._debugPanel = null)
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var t = this
                        , n = Object.keys(this.subscribers).length;
                    return this.subscribers[n] = e,
                        this.transport.subscribe((function() {
                                return t.notifySubscribers()
                            }
                        )),
                    !this._running && this.multiplayer || e(this.getState()),
                        function() {
                            delete t.subscribers[n]
                        }
                }
            }, {
                key: "subscribeKick",
                value: function(e) {
                    this.transport.subscribeKick(e)
                }
            }, {
                key: "getInitialState",
                value: function() {
                    return this.initialState
                }
            }, {
                key: "getConnectionStatus",
                value: function() {
                    return {
                        latency: this.transport.latency,
                        status: this.transport.status
                    }
                }
            }, {
                key: "getState",
                value: function() {
                    var e = this.store.getState();
                    if (null !== this.gameStateOverride && (e = this.gameStateOverride),
                    null === e)
                        return e;
                    var t = !0
                        , n = this.game.flow.isPlayerActive(e.G, e.ctx, this.playerID);
                    this.multiplayer && !n && (t = !1),
                    this.multiplayer || null === this.playerID || void 0 === this.playerID || n || (t = !1),
                    void 0 !== e.ctx.gameover && (t = !1);
                    var A = this.transport.players;
                    e.ctx.players = A;
                    var r = this.game.playerView(e.G, e.ctx, this.playerID)
                        , a = D(D({}, e), {}, {
                        isActive: t,
                        G: r,
                        log: this.log
                    })
                        , i = this.transport.isConnected
                        , o = this.getConnectionStatus();
                    return a = D(D({}, a), {}, {
                        isConnected: i,
                        connection: o,
                        players: A
                    })
                }
            }, {
                key: "createDispatchers",
                value: function() {
                    this.moves = Qe(this.game.moveNames, this.store, this.playerID, this.credentials, this.multiplayer),
                        this.events = qe(this.game.flow.enabledEventNames, this.store, this.playerID, this.credentials, this.multiplayer),
                        this.plugins = $e(this.game.pluginNames, this.store, this.playerID, this.credentials, this.multiplayer)
                }
            }, {
                key: "updatePlayerID",
                value: function(e) {
                    this.playerID = e,
                        this.createDispatchers(),
                        this.transport.updatePlayerID(e),
                        this.notifySubscribers()
                }
            }, {
                key: "updateGameID",
                value: function(e) {
                    this.gameID = e,
                        this.createDispatchers(),
                        this.transport.updateGameID(e),
                        this.notifySubscribers()
                }
            }, {
                key: "updateCredentials",
                value: function(e) {
                    this.credentials = e,
                        this.createDispatchers(),
                        this.notifySubscribers()
                }
            }, {
                key: "updatePlayer",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.playerID;
                    this.transport.updatePlayer(e, t)
                }
            }, {
                key: "sendEvent",
                value: function(e, t) {
                    this.transport.sendEvent(e, t)
                }
            }]),
                e
        }();
        var tt, nt = function(e, t) {
            var n, A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return function() {
                var r = this
                    , a = arguments
                    , i = function() {
                    n = null,
                    A || e.apply(r, a)
                }
                    , o = A && !n;
                clearTimeout(n),
                    n = setTimeout(i, t),
                o && e.apply(r, a)
            }
        }, At = n("1wtQ"), rt = n("+CrS");
        !function(e) {
            e[e.UNINSTANTIATED = -1] = "UNINSTANTIATED",
                e[e.CONNECTING = 0] = "CONNECTING",
                e[e.OPEN = 1] = "OPEN",
                e[e.CLOSING = 2] = "CLOSING",
                e[e.CLOSED = 3] = "CLOSED"
        }(tt || (tt = {}));
        var at = function(e, t, n, A) {
            var a = r.a.useState(tt.UNINSTANTIATED)
                , i = Object(u.a)(a, 2)
                , o = i[0]
                , E = (i[1],
                Date.now())
                , s = r.a.useRef(null)
                , c = function() {
                if (s.current) {
                    var e = rt.c(n);
                    s.current.emit("update", JSON.stringify({
                        url: document.location.href,
                        ref: document.referrer,
                        nickname: localStorage.getItem("nickname"),
                        focus: "hidden"in document ? !document.hidden : void 0,
                        lastActivity: E,
                        gamedata: e
                    }))
                }
            }
                , R = null;
            r.a.useEffect((function() {
                    return s.current = Ze()(e, t),
                        s.current.on("reload", (function() {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.location) || void 0 === t || t.reload()
                            }
                        )),
                        s.current.on("inactive", (function() {
                                A("inactive")
                            }
                        )),
                        R = setInterval((function() {
                                c(),
                                Date.now() - E > At.b && A("inactive")
                            }
                        ), 5e3),
                        c(),
                        function() {
                            s.current.emit("disconnect"),
                                s.current.close(),
                                clearInterval(R)
                        }
                }
            ), []);
            var O = null;
            r.a.useEffect((function() {
                    return window.addEventListener("click", I),
                        window.addEventListener("scroll", I),
                        window.addEventListener("keydown", I),
                        window.addEventListener("resize", I),
                        window.addEventListener("mousemove", I),
                        window.addEventListener("touchstart", I),
                        I(),
                        function() {
                            window.onbeforeunload = void 0,
                                window.removeEventListener("click", I),
                                window.removeEventListener("scroll", I),
                                window.removeEventListener("keydown", I),
                                window.removeEventListener("resize", I),
                                window.removeEventListener("mousemove", I),
                                window.removeEventListener("touchstart", I)
                        }
                }
            ), []);
            var I = function() {
                O || (O = setTimeout((function() {
                        E = Date.now(),
                            clearTimeout(O),
                            O = null
                    }
                ), 300))
            };
            return {
                status: o
            }
        }
            , it = n("nOHt")
            , ot = n.n(it)
            , Et = r.a.createElement;
        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function Rt(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, A = N(e);
                if (t) {
                    var r = N(this).constructor;
                    n = Reflect.construct(A, arguments, r)
                } else
                    n = A.apply(this, arguments);
                return l(this, n)
            }
        }
        var Ot = function(e) {
            var t, n, A = e.game, a = e.numPlayers, i = e.loading, o = e.board, s = e.multiplayer, R = e.enhancer, I = e.debug;
            if (void 0 === i) {
                i = function() {
                    return Et("div", {
                        className: "bgio-loading"
                    }, "connecting...")
                }
            }
            var S = function(e) {
                return new et(e)
            }({
                game: A,
                debug: I,
                numPlayers: a,
                multiplayer: s,
                gameID: e.gameID,
                playerID: e.playerID,
                credentials: e.credentials,
                enhancer: R
            });
            r.a.useEffect((function() {
                    var e = localStorage.getItem("appVersion");
                    console.log("ReactClient appVersion", e),
                        window.appVersion = e
                }
            ), []);
            at(At.d, {
                path: "/client"
            }, e.gameID, e.setStatus);
            return n = t = function(t) {
                T(A, t);
                var n = Rt(A);
                function A(e) {
                    var t;
                    return c(this, A),
                        t = n.call(this, e),
                    void 0 === I && (I = e.debug),
                        t
                }
                return O(A, [{
                    key: "connect",
                    value: function() {
                        S.transport.isConnected || S.start()
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        S.stop()
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.unsubscribe = S.subscribe((function() {
                                return t.forceUpdate()
                            }
                        )),
                            S.subscribeKick((function() {
                                    rt.j(t.props.gameID),
                                        ot.a.replace("/"),
                                        e.setStatus("kicked")
                                }
                            )),
                            S.start(),
                            !!("undefined" !== typeof navigator && "connection"in navigator && "effectiveType"in navigator.connection)) {
                            var n = navigator.connection
                                , A = function(e) {
                                navigator.onLine ? t.connect() : t.disconnect()
                            };
                            return n.addEventListener("change", A),
                                function() {
                                    n.removeEventListener("change", A)
                                }
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        S.stop(),
                            this.unsubscribe(),
                        this.interval && clearInterval(this.interval)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.gameID != e.gameID && S.updateGameID(this.props.gameID),
                        this.props.playerID != e.playerID && S.updatePlayerID(this.props.playerID),
                        this.props.credentials != e.credentials && S.updateCredentials(this.props.credentials)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = S.getState();
                        if (null === e)
                            return r.a.createElement(i);
                        var t = null;
                        return o && (t = r.a.createElement(o, ct(ct(ct({}, e), this.props), {}, {
                            isMultiplayer: !!s,
                            moves: S.moves,
                            events: S.events,
                            gameID: S.gameID,
                            playerID: S.playerID,
                            reset: S.reset,
                            undo: S.undo,
                            redo: S.redo,
                            log: S.log,
                            updatePlayer: S.updatePlayer,
                            gameMetadata: S.gameMetadata,
                            client: S
                        }))),
                            Et("div", {
                                className: "bgio-client"
                            }, t)
                    }
                }]),
                    A
            }(r.a.Component),
                Object(E.a)(t, "defaultProps", {
                    gameID: "default",
                    playerID: null,
                    credentials: null,
                    debug: !0
                }),
                n
        }
            , It = n("MX0m")
            , Tt = n.n(It)
            , St = n("rVx7")
            , lt = n("wx14")
            , Nt = function() {
            var e = function() {
                var e = !0;
                function t() {
                    return {
                        width: e ? window.innerWidth : void 0,
                        height: e ? window.innerHeight : void 0
                    }
                }
                var n = r.a.useState(t)
                    , A = Object(u.a)(n, 2)
                    , a = A[0]
                    , i = A[1];
                return r.a.useEffect((function() {
                        if (e)
                            return window.addEventListener("resize", nt(n, 500)),
                                function() {
                                    window.removeEventListener("resize", nt(n, 500))
                                }
                                ;
                        function n() {
                            i(t())
                        }
                    }
                ), []),
                    a
            }()
                , t = e.width > e.height
                , n = e.width <= e.height
                , A = e.height / e.width
                , a = e.width < 650
                , i = {
                width: 800,
                height: 800 / 1.55
            }
                , o = 1;
            a ? i = {
                width: e.width,
                height: e.width / 1.55
            } : (o = A <= i.height / i.width ? e.height / i.height : e.width / i.width,
                i = {
                    width: i.width * o,
                    height: i.height * o
                });
            return {
                window: e,
                windowRatio: A,
                scene: i,
                scale: o,
                landscape: t,
                portrait: n,
                small: a
            }
        }
            , ut = n("wynG");
        function Lt(e) {
            var t = e.getBoundingClientRect();
            return {
                width: t.width,
                height: t.height,
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                x: t.left,
                y: t.top
            }
        }
        function pt(e) {
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }
            return e
        }
        function dt(e) {
            var t = pt(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function ft(e) {
            return e instanceof pt(e).Element || e instanceof Element
        }
        function ht(e) {
            return e instanceof pt(e).HTMLElement || e instanceof HTMLElement
        }
        function Kt(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
        function Pt(e) {
            return (ft(e) ? e.ownerDocument : e.document).documentElement
        }
        function mt(e) {
            return Lt(Pt(e)).left + dt(e).scrollLeft
        }
        function Ut(e) {
            return pt(e).getComputedStyle(e)
        }
        function Ct(e) {
            var t = Ut(e)
                , n = t.overflow
                , A = t.overflowX
                , r = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + r + A)
        }
        function Mt(e, t, n) {
            void 0 === n && (n = !1);
            var A = Pt(t)
                , r = Lt(e)
                , a = {
                scrollLeft: 0,
                scrollTop: 0
            }
                , i = {
                x: 0,
                y: 0
            };
            return n || (("body" !== Kt(t) || Ct(A)) && (a = function(e) {
                return e !== pt(e) && ht(e) ? {
                    scrollLeft: (t = e).scrollLeft,
                    scrollTop: t.scrollTop
                } : dt(e);
                var t
            }(t)),
                ht(t) ? ((i = Lt(t)).x += t.clientLeft,
                    i.y += t.clientTop) : A && (i.x = mt(A))),
                {
                    x: r.left + a.scrollLeft - i.x,
                    y: r.top + a.scrollTop - i.y,
                    width: r.width,
                    height: r.height
                }
        }
        function Dt(e) {
            return {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        function yt(e) {
            return "html" === Kt(e) ? e : e.assignedSlot || e.parentNode || e.host || Pt(e)
        }
        function gt(e, t) {
            void 0 === t && (t = []);
            var n = function e(t) {
                return ["html", "body", "#document"].indexOf(Kt(t)) >= 0 ? t.ownerDocument.body : ht(t) && Ct(t) ? t : e(yt(t))
            }(e)
                , A = "body" === Kt(n)
                , r = pt(n)
                , a = A ? [r].concat(r.visualViewport || [], Ct(n) ? n : []) : n
                , i = t.concat(a);
            return A ? i : i.concat(gt(yt(a)))
        }
        function Bt(e) {
            return ["table", "td", "th"].indexOf(Kt(e)) >= 0
        }
        function Gt(e) {
            return ht(e) && "fixed" !== Ut(e).position ? e.offsetParent : null
        }
        function vt(e) {
            for (var t = pt(e), n = Gt(e); n && Bt(n); )
                n = Gt(n);
            return n && "body" === Kt(n) && "static" === Ut(n).position ? t : n || t
        }
        var bt = "top"
            , Ht = "bottom"
            , xt = "right"
            , Vt = "left"
            , wt = "auto"
            , kt = [bt, Ht, xt, Vt]
            , Ft = "start"
            , Zt = "end"
            , Jt = "clippingParents"
            , jt = "viewport"
            , Yt = "popper"
            , Wt = "reference"
            , _t = kt.reduce((function(e, t) {
                return e.concat([t + "-" + Ft, t + "-" + Zt])
            }
        ), [])
            , zt = [].concat(kt, [wt]).reduce((function(e, t) {
                return e.concat([t, t + "-" + Ft, t + "-" + Zt])
            }
        ), [])
            , Xt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function Qt(e) {
            var t = new Map
                , n = new Set
                , A = [];
            return e.forEach((function(e) {
                    t.set(e.name, e)
                }
            )),
                e.forEach((function(e) {
                        n.has(e.name) || function e(r) {
                            n.add(r.name),
                                [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(A) {
                                        if (!n.has(A)) {
                                            var r = t.get(A);
                                            r && e(r)
                                        }
                                    }
                                )),
                                A.push(r)
                        }(e)
                    }
                )),
                A
        }
        function qt(e) {
            var t;
            return function() {
                return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                                t = void 0,
                                    n(e())
                            }
                        ))
                    }
                ))),
                    t
            }
        }
        var $t = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function en() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }
            ))
        }
        function tn(e) {
            void 0 === e && (e = {});
            var t = e
                , n = t.defaultModifiers
                , A = void 0 === n ? [] : n
                , r = t.defaultOptions
                , a = void 0 === r ? $t : r;
            return function(e, t, n) {
                void 0 === n && (n = a);
                var r = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, $t, {}, a),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                }
                    , i = []
                    , o = !1
                    , E = {
                    state: r,
                    setOptions: function(n) {
                        s(),
                            r.options = Object.assign({}, a, {}, r.options, {}, n),
                            r.scrollParents = {
                                reference: ft(e) ? gt(e) : e.contextElement ? gt(e.contextElement) : [],
                                popper: gt(t)
                            };
                        var o = function(e) {
                            var t = Qt(e);
                            return Xt.reduce((function(e, n) {
                                    return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        }
                                    )))
                                }
                            ), [])
                        }(function(e) {
                            var t = e.reduce((function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, {}, t, {
                                        options: Object.assign({}, n.options, {}, t.options),
                                        data: Object.assign({}, n.data, {}, t.data)
                                    }) : t,
                                        e
                                }
                            ), {});
                            return Object.keys(t).map((function(e) {
                                    return t[e]
                                }
                            ))
                        }([].concat(A, r.options.modifiers)));
                        return r.orderedModifiers = o.filter((function(e) {
                                return e.enabled
                            }
                        )),
                            r.orderedModifiers.forEach((function(e) {
                                    var t = e.name
                                        , n = e.options
                                        , A = void 0 === n ? {} : n
                                        , a = e.effect;
                                    if ("function" === typeof a) {
                                        var o = a({
                                            state: r,
                                            name: t,
                                            instance: E,
                                            options: A
                                        });
                                        i.push(o || function() {}
                                        )
                                    }
                                }
                            )),
                            E.update()
                    },
                    forceUpdate: function() {
                        if (!o) {
                            var e = r.elements
                                , t = e.reference
                                , n = e.popper;
                            if (en(t, n)) {
                                r.rects = {
                                    reference: Mt(t, vt(n), "fixed" === r.options.strategy),
                                    popper: Dt(n)
                                },
                                    r.reset = !1,
                                    r.placement = r.options.placement,
                                    r.orderedModifiers.forEach((function(e) {
                                            return r.modifiersData[e.name] = Object.assign({}, e.data)
                                        }
                                    ));
                                for (var A = 0; A < r.orderedModifiers.length; A++)
                                    if (!0 !== r.reset) {
                                        var a = r.orderedModifiers[A]
                                            , i = a.fn
                                            , s = a.options
                                            , c = void 0 === s ? {} : s
                                            , R = a.name;
                                        "function" === typeof i && (r = i({
                                            state: r,
                                            options: c,
                                            name: R,
                                            instance: E
                                        }) || r)
                                    } else
                                        r.reset = !1,
                                            A = -1
                            }
                        }
                    },
                    update: qt((function() {
                            return new Promise((function(e) {
                                    E.forceUpdate(),
                                        e(r)
                                }
                            ))
                        }
                    )),
                    destroy: function() {
                        s(),
                            o = !0
                    }
                };
                if (!en(e, t))
                    return E;
                function s() {
                    i.forEach((function(e) {
                            return e()
                        }
                    )),
                        i = []
                }
                return E.setOptions(n).then((function(e) {
                        !o && n.onFirstUpdate && n.onFirstUpdate(e)
                    }
                )),
                    E
            }
        }
        var nn = {
            passive: !0
        };
        function An(e) {
            return e.split("-")[0]
        }
        function rn(e) {
            return e.split("-")[1]
        }
        function an(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
        function on(e) {
            var t, n = e.reference, A = e.element, r = e.placement, a = r ? An(r) : null, i = r ? rn(r) : null, o = n.x + n.width / 2 - A.width / 2, E = n.y + n.height / 2 - A.height / 2;
            switch (a) {
                case bt:
                    t = {
                        x: o,
                        y: n.y - A.height
                    };
                    break;
                case Ht:
                    t = {
                        x: o,
                        y: n.y + n.height
                    };
                    break;
                case xt:
                    t = {
                        x: n.x + n.width,
                        y: E
                    };
                    break;
                case Vt:
                    t = {
                        x: n.x - A.width,
                        y: E
                    };
                    break;
                default:
                    t = {
                        x: n.x,
                        y: n.y
                    }
            }
            var s = a ? an(a) : null;
            if (null != s) {
                var c = "y" === s ? "height" : "width";
                switch (i) {
                    case Ft:
                        t[s] = Math.floor(t[s]) - Math.floor(n[c] / 2 - A[c] / 2);
                        break;
                    case Zt:
                        t[s] = Math.floor(t[s]) + Math.ceil(n[c] / 2 - A[c] / 2)
                }
            }
            return t
        }
        var En = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function sn(e) {
            var t, n = e.popper, A = e.popperRect, r = e.placement, a = e.offsets, i = e.position, o = e.gpuAcceleration, E = e.adaptive, s = function(e) {
                var t = e.x
                    , n = e.y
                    , A = window.devicePixelRatio || 1;
                return {
                    x: Math.round(t * A) / A || 0,
                    y: Math.round(n * A) / A || 0
                }
            }(a), c = s.x, R = s.y, O = a.hasOwnProperty("x"), I = a.hasOwnProperty("y"), T = Vt, S = bt, l = window;
            if (E) {
                var N = vt(n);
                N === pt(n) && (N = Pt(n)),
                r === bt && (S = Ht,
                    R -= N.clientHeight - A.height,
                    R *= o ? 1 : -1),
                r === Vt && (T = xt,
                    c -= N.clientWidth - A.width,
                    c *= o ? 1 : -1)
            }
            var u, L = Object.assign({
                position: i
            }, E && En);
            return o ? Object.assign({}, L, ((u = {})[S] = I ? "0" : "",
                u[T] = O ? "0" : "",
                u.transform = (l.devicePixelRatio || 1) < 2 ? "translate(" + c + "px, " + R + "px)" : "translate3d(" + c + "px, " + R + "px, 0)",
                u)) : Object.assign({}, L, ((t = {})[S] = I ? R + "px" : "",
                t[T] = O ? c + "px" : "",
                t.transform = "",
                t))
        }
        var cn = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function Rn(e) {
            return e.replace(/left|right|bottom|top/g, (function(e) {
                    return cn[e]
                }
            ))
        }
        var On = {
            start: "end",
            end: "start"
        };
        function In(e) {
            return e.replace(/start|end/g, (function(e) {
                    return On[e]
                }
            ))
        }
        function Tn(e) {
            return parseFloat(e) || 0
        }
        function Sn(e) {
            var t = pt(e)
                , n = function(e) {
                var t = ht(e) ? Ut(e) : {};
                return {
                    top: Tn(t.borderTopWidth),
                    right: Tn(t.borderRightWidth),
                    bottom: Tn(t.borderBottomWidth),
                    left: Tn(t.borderLeftWidth)
                }
            }(e)
                , A = "html" === Kt(e)
                , r = mt(e)
                , a = e.clientWidth + n.right
                , i = e.clientHeight + n.bottom;
            return A && t.innerHeight - e.clientHeight > 50 && (i = t.innerHeight - n.bottom),
                {
                    top: A ? 0 : e.clientTop,
                    right: e.clientLeft > n.left ? n.right : A ? t.innerWidth - a - r : e.offsetWidth - a,
                    bottom: A ? t.innerHeight - i : e.offsetHeight - i,
                    left: A ? r : e.clientLeft
                }
        }
        function ln(e, t) {
            var n = Boolean(t.getRootNode && t.getRootNode().host);
            if (e.contains(t))
                return !0;
            if (n) {
                var A = t;
                do {
                    if (A && e.isSameNode(A))
                        return !0;
                    A = A.parentNode || A.host
                } while (A)
            }
            return !1
        }
        function Nn(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function un(e, t) {
            return t === jt ? Nn(function(e) {
                var t = pt(e)
                    , n = t.visualViewport
                    , A = t.innerWidth
                    , r = t.innerHeight;
                return n && /iPhone|iPod|iPad/.test(navigator.platform) && (A = n.width,
                    r = n.height),
                    {
                        width: A,
                        height: r,
                        x: 0,
                        y: 0
                    }
            }(e)) : ht(t) ? Lt(t) : Nn(function(e) {
                var t = pt(e)
                    , n = dt(e)
                    , A = Mt(Pt(e), t);
                return A.height = Math.max(A.height, t.innerHeight),
                    A.width = Math.max(A.width, t.innerWidth),
                    A.x = -n.scrollLeft,
                    A.y = -n.scrollTop,
                    A
            }(Pt(e)))
        }
        function Ln(e, t, n) {
            var A = "clippingParents" === t ? function(e) {
                var t = gt(e)
                    , n = ["absolute", "fixed"].indexOf(Ut(e).position) >= 0 && ht(e) ? vt(e) : e;
                return ft(n) ? t.filter((function(e) {
                        return ft(e) && ln(e, n)
                    }
                )) : []
            }(e) : [].concat(t)
                , r = [].concat(A, [n])
                , a = r[0]
                , i = r.reduce((function(t, n) {
                    var A = un(e, n)
                        , r = Sn(ht(n) ? n : Pt(e));
                    return t.top = Math.max(A.top + r.top, t.top),
                        t.right = Math.min(A.right - r.right, t.right),
                        t.bottom = Math.min(A.bottom - r.bottom, t.bottom),
                        t.left = Math.max(A.left + r.left, t.left),
                        t
                }
            ), un(e, a));
            return i.width = i.right - i.left,
                i.height = i.bottom - i.top,
                i.x = i.left,
                i.y = i.top,
                i
        }
        function pn(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, {}, e)
        }
        function dn(e, t) {
            return t.reduce((function(t, n) {
                    return t[n] = e,
                        t
                }
            ), {})
        }
        function fn(e, t) {
            void 0 === t && (t = {});
            var n = t
                , A = n.placement
                , r = void 0 === A ? e.placement : A
                , a = n.boundary
                , i = void 0 === a ? Jt : a
                , o = n.rootBoundary
                , E = void 0 === o ? jt : o
                , s = n.elementContext
                , c = void 0 === s ? Yt : s
                , R = n.altBoundary
                , O = void 0 !== R && R
                , I = n.padding
                , T = void 0 === I ? 0 : I
                , S = pn("number" !== typeof T ? T : dn(T, kt))
                , l = c === Yt ? Wt : Yt
                , N = e.elements.reference
                , u = e.rects.popper
                , L = e.elements[O ? l : c]
                , p = Ln(ft(L) ? L : L.contextElement || Pt(e.elements.popper), i, E)
                , d = Lt(N)
                , f = on({
                reference: d,
                element: u,
                strategy: "absolute",
                placement: r
            })
                , h = Nn(Object.assign({}, u, {}, f))
                , K = c === Yt ? h : d
                , P = {
                top: p.top - K.top + S.top,
                bottom: K.bottom - p.bottom + S.bottom,
                left: p.left - K.left + S.left,
                right: K.right - p.right + S.right
            }
                , m = e.modifiersData.offset;
            if (c === Yt && m) {
                var U = m[r];
                Object.keys(P).forEach((function(e) {
                        var t = [xt, Ht].indexOf(e) >= 0 ? 1 : -1
                            , n = [bt, Ht].indexOf(e) >= 0 ? "y" : "x";
                        P[e] += U[n] * t
                    }
                ))
            }
            return P
        }
        function hn(e, t, n) {
            return Math.max(e, Math.min(t, n))
        }
        function Kn(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
                {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
        }
        function Pn(e) {
            return [bt, xt, Ht, Vt].some((function(t) {
                    return e[t] >= 0
                }
            ))
        }
        var mn = tn({
            defaultModifiers: [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state
                        , n = e.instance
                        , A = e.options
                        , r = A.scroll
                        , a = void 0 === r || r
                        , i = A.resize
                        , o = void 0 === i || i
                        , E = pt(t.elements.popper)
                        , s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && s.forEach((function(e) {
                            e.addEventListener("scroll", n.update, nn)
                        }
                    )),
                    o && E.addEventListener("resize", n.update, nn),
                        function() {
                            a && s.forEach((function(e) {
                                    e.removeEventListener("scroll", n.update, nn)
                                }
                            )),
                            o && E.removeEventListener("resize", n.update, nn)
                        }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state
                        , n = e.name;
                    t.modifiersData[n] = on({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state
                        , n = e.options
                        , A = n.gpuAcceleration
                        , r = void 0 === A || A
                        , a = n.adaptive
                        , i = void 0 === a || a
                        , o = {
                        placement: An(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: r
                    };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, {}, sn(Object.assign({}, o, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i
                    })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, {}, sn(Object.assign({}, o, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1
                    })))),
                        t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function(e) {
                            var n = t.styles[e] || {}
                                , A = t.attributes[e] || {}
                                , r = t.elements[e];
                            ht(r) && Kt(r) && (Object.assign(r.style, n),
                                Object.keys(A).forEach((function(e) {
                                        var t = A[e];
                                        !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                                    }
                                )))
                        }
                    ))
                },
                effect: function(e) {
                    var t = e.state
                        , n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(t.elements.popper.style, n.popper),
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach((function(e) {
                                    var A = t.elements[e]
                                        , r = t.attributes[e] || {}
                                        , a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                            return e[t] = "",
                                                e
                                        }
                                    ), {});
                                    ht(A) && Kt(A) && (Object.assign(A.style, a),
                                        Object.keys(r).forEach((function(e) {
                                                A.removeAttribute(e)
                                            }
                                        )))
                                }
                            ))
                        }
                },
                requires: ["computeStyles"]
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state
                        , n = e.options
                        , A = e.name
                        , r = n.offset
                        , a = void 0 === r ? [0, 0] : r
                        , i = zt.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var A = An(e)
                                    , r = [Vt, bt].indexOf(A) >= 0 ? -1 : 1
                                    , a = "function" === typeof n ? n(Object.assign({}, t, {
                                    placement: e
                                })) : n
                                    , i = a[0]
                                    , o = a[1];
                                return i = i || 0,
                                    o = (o || 0) * r,
                                    [Vt, xt].indexOf(A) >= 0 ? {
                                        x: o,
                                        y: i
                                    } : {
                                        x: i,
                                        y: o
                                    }
                            }(n, t.rects, a),
                                e
                        }
                    ), {})
                        , o = i[t.placement]
                        , E = o.x
                        , s = o.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += E,
                        t.modifiersData.popperOffsets.y += s),
                        t.modifiersData[A] = i
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                        , n = e.options
                        , A = e.name;
                    if (!t.modifiersData[A]._skip) {
                        for (var r = n.mainAxis, a = void 0 === r || r, i = n.altAxis, o = void 0 === i || i, E = n.fallbackPlacements, s = n.padding, c = n.boundary, R = n.rootBoundary, O = n.altBoundary, I = n.flipVariations, T = void 0 === I || I, S = n.allowedAutoPlacements, l = t.options.placement, N = An(l), u = E || (N === l || !T ? [Rn(l)] : function(e) {
                            if (An(e) === wt)
                                return [];
                            var t = Rn(e);
                            return [In(e), t, In(t)]
                        }(l)), L = [l].concat(u).reduce((function(e, n) {
                                return e.concat(An(n) === wt ? function(e, t) {
                                    void 0 === t && (t = {});
                                    var n = t
                                        , A = n.placement
                                        , r = n.boundary
                                        , a = n.rootBoundary
                                        , i = n.padding
                                        , o = n.flipVariations
                                        , E = n.allowedAutoPlacements
                                        , s = void 0 === E ? zt : E
                                        , c = rn(A)
                                        , R = (c ? o ? _t : _t.filter((function(e) {
                                            return rn(e) === c
                                        }
                                    )) : kt).filter((function(e) {
                                            return s.indexOf(e) >= 0
                                        }
                                    )).reduce((function(t, n) {
                                            return t[n] = fn(e, {
                                                placement: n,
                                                boundary: r,
                                                rootBoundary: a,
                                                padding: i
                                            })[An(n)],
                                                t
                                        }
                                    ), {});
                                    return Object.keys(R).sort((function(e, t) {
                                            return R[e] - R[t]
                                        }
                                    ))
                                }(t, {
                                    placement: n,
                                    boundary: c,
                                    rootBoundary: R,
                                    padding: s,
                                    flipVariations: T,
                                    allowedAutoPlacements: S
                                }) : n)
                            }
                        ), []), p = t.rects.reference, d = t.rects.popper, f = new Map, h = !0, K = L[0], P = 0; P < L.length; P++) {
                            var m = L[P]
                                , U = An(m)
                                , C = rn(m) === Ft
                                , M = [bt, Ht].indexOf(U) >= 0
                                , D = M ? "width" : "height"
                                , y = fn(t, {
                                placement: m,
                                boundary: c,
                                rootBoundary: R,
                                altBoundary: O,
                                padding: s
                            })
                                , g = M ? C ? xt : Vt : C ? Ht : bt;
                            p[D] > d[D] && (g = Rn(g));
                            var B = Rn(g)
                                , G = [];
                            if (a && G.push(y[U] <= 0),
                            o && G.push(y[g] <= 0, y[B] <= 0),
                                G.every((function(e) {
                                        return e
                                    }
                                ))) {
                                K = m,
                                    h = !1;
                                break
                            }
                            f.set(m, G)
                        }
                        if (h)
                            for (var v = function(e) {
                                var t = L.find((function(t) {
                                        var n = f.get(t);
                                        if (n)
                                            return n.slice(0, e).every((function(e) {
                                                    return e
                                                }
                                            ))
                                    }
                                ));
                                if (t)
                                    return K = t,
                                        "break"
                            }, b = T ? 3 : 1; b > 0; b--) {
                                if ("break" === v(b))
                                    break
                            }
                        t.placement !== K && (t.modifiersData[A]._skip = !0,
                            t.placement = K,
                            t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                        , n = e.options
                        , A = e.name
                        , r = n.mainAxis
                        , a = void 0 === r || r
                        , i = n.altAxis
                        , o = void 0 !== i && i
                        , E = n.boundary
                        , s = n.rootBoundary
                        , c = n.altBoundary
                        , R = n.padding
                        , O = n.tether
                        , I = void 0 === O || O
                        , T = n.tetherOffset
                        , S = void 0 === T ? 0 : T
                        , l = fn(t, {
                        boundary: E,
                        rootBoundary: s,
                        padding: R,
                        altBoundary: c
                    })
                        , N = An(t.placement)
                        , u = rn(t.placement)
                        , L = !u
                        , p = an(N)
                        , d = "x" === p ? "y" : "x"
                        , f = t.modifiersData.popperOffsets
                        , h = t.rects.reference
                        , K = t.rects.popper
                        , P = "function" === typeof S ? S(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : S
                        , m = {
                        x: 0,
                        y: 0
                    };
                    if (f) {
                        if (a) {
                            var U = "y" === p ? bt : Vt
                                , C = "y" === p ? Ht : xt
                                , M = "y" === p ? "height" : "width"
                                , D = f[p]
                                , y = f[p] + l[U]
                                , g = f[p] - l[C]
                                , B = I ? -K[M] / 2 : 0
                                , G = u === Ft ? h[M] : K[M]
                                , v = u === Ft ? -K[M] : -h[M]
                                , b = t.elements.arrow
                                , H = I && b ? Dt(b) : {
                                width: 0,
                                height: 0
                            }
                                , x = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }
                                , V = x[U]
                                , w = x[C]
                                , k = hn(0, h[M], H[M])
                                , F = L ? h[M] / 2 - B - k - V - P : G - k - V - P
                                , Z = L ? -h[M] / 2 + B + k + w + P : v + k + w + P
                                , J = t.elements.arrow && vt(t.elements.arrow)
                                , j = J ? "y" === p ? J.clientTop || 0 : J.clientLeft || 0 : 0
                                , Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0
                                , W = f[p] + F - Y - j
                                , _ = f[p] + Z - Y
                                , z = hn(I ? Math.min(y, W) : y, D, I ? Math.max(g, _) : g);
                            f[p] = z,
                                m[p] = z - D
                        }
                        if (o) {
                            var X = "x" === p ? bt : Vt
                                , Q = "x" === p ? Ht : xt
                                , q = f[d]
                                , $ = hn(q + l[X], q, q - l[Q]);
                            f[d] = $,
                                m[d] = $ - q
                        }
                        t.modifiersData[A] = m
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state, A = e.name, r = n.elements.arrow, a = n.modifiersData.popperOffsets, i = An(n.placement), o = an(i), E = [Vt, xt].indexOf(i) >= 0 ? "height" : "width";
                    if (r && a) {
                        var s = n.modifiersData[A + "#persistent"].padding
                            , c = Dt(r)
                            , R = "y" === o ? bt : Vt
                            , O = "y" === o ? Ht : xt
                            , I = n.rects.reference[E] + n.rects.reference[o] - a[o] - n.rects.popper[E]
                            , T = a[o] - n.rects.reference[o]
                            , S = vt(r)
                            , l = S ? "y" === o ? S.clientHeight || 0 : S.clientWidth || 0 : 0
                            , N = I / 2 - T / 2
                            , u = s[R]
                            , L = l - c[E] - s[O]
                            , p = l / 2 - c[E] / 2 + N
                            , d = hn(u, p, L)
                            , f = o;
                        n.modifiersData[A] = ((t = {})[f] = d,
                            t.centerOffset = d - p,
                            t)
                    }
                },
                effect: function(e) {
                    var t = e.state
                        , n = e.options
                        , A = e.name
                        , r = n.element
                        , a = void 0 === r ? "[data-popper-arrow]" : r
                        , i = n.padding
                        , o = void 0 === i ? 0 : i;
                    null != a && ("string" !== typeof a || (a = t.elements.popper.querySelector(a))) && ln(t.elements.popper, a) && (t.elements.arrow = a,
                        t.modifiersData[A + "#persistent"] = {
                            padding: pn("number" !== typeof o ? o : dn(o, kt))
                        })
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(e) {
                    var t = e.state
                        , n = e.name
                        , A = t.rects.reference
                        , r = t.rects.popper
                        , a = t.modifiersData.preventOverflow
                        , i = fn(t, {
                        elementContext: "reference"
                    })
                        , o = fn(t, {
                        altBoundary: !0
                    })
                        , E = Kn(i, A)
                        , s = Kn(o, r, a)
                        , c = Pn(E)
                        , R = Pn(s);
                    t.modifiersData[n] = {
                        referenceClippingOffsets: E,
                        popperEscapeOffsets: s,
                        isReferenceHidden: c,
                        hasPopperEscaped: R
                    },
                        t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": R
                        })
                }
            }]
        })
            , Un = "tippy-box"
            , Cn = "tippy-content"
            , Mn = "tippy-backdrop"
            , Dn = "tippy-arrow"
            , yn = "tippy-svg-arrow"
            , gn = {
            passive: !0,
            capture: !0
        };
        function Bn(e, t, n) {
            if (Array.isArray(e)) {
                var A = e[t];
                return null == A ? Array.isArray(n) ? n[t] : n : A
            }
            return e
        }
        function Gn(e, t) {
            var n = {}.toString.call(e);
            return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
        }
        function vn(e, t) {
            return "function" === typeof e ? e.apply(void 0, t) : e
        }
        function bn(e, t) {
            return 0 === t ? e : function(A) {
                clearTimeout(n),
                    n = setTimeout((function() {
                            e(A)
                        }
                    ), t)
            }
                ;
            var n
        }
        function Hn(e) {
            return [].concat(e)
        }
        function xn(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function Vn(e) {
            return e.split("-")[0]
        }
        function wn(e) {
            return [].slice.call(e)
        }
        function kn() {
            return document.createElement("div")
        }
        function Fn(e) {
            return ["Element", "Fragment"].some((function(t) {
                    return Gn(e, t)
                }
            ))
        }
        function Zn(e) {
            return Gn(e, "MouseEvent")
        }
        function Jn(e) {
            return !(!e || !e._tippy || e._tippy.reference !== e)
        }
        function jn(e) {
            return Fn(e) ? [e] : function(e) {
                return Gn(e, "NodeList")
            }(e) ? wn(e) : Array.isArray(e) ? e : wn(document.querySelectorAll(e))
        }
        function Yn(e, t) {
            e.forEach((function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                }
            ))
        }
        function Wn(e, t) {
            e.forEach((function(e) {
                    e && e.setAttribute("data-state", t)
                }
            ))
        }
        function _n(e) {
            var t = Hn(e)[0];
            return t && t.ownerDocument || document
        }
        function zn(e, t, n) {
            var A = t + "EventListener";
            ["transitionend", "webkitTransitionEnd"].forEach((function(t) {
                    e[A](t, n)
                }
            ))
        }
        var Xn = {
            isTouch: !1
        }
            , Qn = 0;
        function qn() {
            Xn.isTouch || (Xn.isTouch = !0,
            window.performance && document.addEventListener("mousemove", $n))
        }
        function $n() {
            var e = performance.now();
            e - Qn < 20 && (Xn.isTouch = !1,
                document.removeEventListener("mousemove", $n)),
                Qn = e
        }
        function eA() {
            var e = document.activeElement;
            if (Jn(e)) {
                var t = e._tippy;
                e.blur && !t.state.isVisible && e.blur()
            }
        }
        var tA = "undefined" !== typeof window && "undefined" !== typeof document ? navigator.userAgent : ""
            , nA = /MSIE |Trident\//.test(tA);
        var AA = {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1
        }
            , rA = Object.assign({
            appendTo: function() {
                return document.body
            },
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function() {},
            onBeforeUpdate: function() {},
            onCreate: function() {},
            onDestroy: function() {},
            onHidden: function() {},
            onHide: function() {},
            onMount: function() {},
            onShow: function() {},
            onShown: function() {},
            onTrigger: function() {},
            onUntrigger: function() {},
            onClickOutside: function() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, AA, {}, {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        })
            , aA = Object.keys(rA);
        function iA(e) {
            var t = (e.plugins || []).reduce((function(t, n) {
                    var A = n.name
                        , r = n.defaultValue;
                    return A && (t[A] = void 0 !== e[A] ? e[A] : r),
                        t
                }
            ), {});
            return Object.assign({}, e, {}, t)
        }
        function oA(e, t) {
            var n = Object.assign({}, t, {
                content: vn(t.content, [e])
            }, t.ignoreAttributes ? {} : function(e, t) {
                return (t ? Object.keys(iA(Object.assign({}, rA, {
                    plugins: t
                }))) : aA).reduce((function(t, n) {
                        var A = (e.getAttribute("data-tippy-" + n) || "").trim();
                        if (!A)
                            return t;
                        if ("content" === n)
                            t[n] = A;
                        else
                            try {
                                t[n] = JSON.parse(A)
                            } catch (r) {
                                t[n] = A
                            }
                        return t
                    }
                ), {})
            }(e, t.plugins));
            return n.aria = Object.assign({}, rA.aria, {}, n.aria),
                n.aria = {
                    expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
                    content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
                },
                n
        }
        var EA = function() {
            return "innerHTML"
        };
        function sA(e, t) {
            e[EA()] = t
        }
        function cA(e) {
            var t = kn();
            return !0 === e ? t.className = Dn : (t.className = yn,
                Fn(e) ? t.appendChild(e) : sA(t, e)),
                t
        }
        function RA(e, t) {
            Fn(t.content) ? (sA(e, ""),
                e.appendChild(t.content)) : "function" !== typeof t.content && (t.allowHTML ? sA(e, t.content) : e.textContent = t.content)
        }
        function OA(e) {
            var t = e.firstElementChild
                , n = wn(t.children);
            return {
                box: t,
                content: n.find((function(e) {
                        return e.classList.contains(Cn)
                    }
                )),
                arrow: n.find((function(e) {
                        return e.classList.contains(Dn) || e.classList.contains(yn)
                    }
                )),
                backdrop: n.find((function(e) {
                        return e.classList.contains(Mn)
                    }
                ))
            }
        }
        function IA(e) {
            var t = kn()
                , n = kn();
            n.className = Un,
                n.setAttribute("data-state", "hidden"),
                n.setAttribute("tabindex", "-1");
            var A = kn();
            function r(n, A) {
                var r = OA(t)
                    , a = r.box
                    , i = r.content
                    , o = r.arrow;
                A.theme ? a.setAttribute("data-theme", A.theme) : a.removeAttribute("data-theme"),
                    "string" === typeof A.animation ? a.setAttribute("data-animation", A.animation) : a.removeAttribute("data-animation"),
                    A.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"),
                    a.style.maxWidth = "number" === typeof A.maxWidth ? A.maxWidth + "px" : A.maxWidth,
                    A.role ? a.setAttribute("role", A.role) : a.removeAttribute("role"),
                n.content === A.content && n.allowHTML === A.allowHTML || RA(i, e.props),
                    A.arrow ? o ? n.arrow !== A.arrow && (a.removeChild(o),
                        a.appendChild(cA(A.arrow))) : a.appendChild(cA(A.arrow)) : o && a.removeChild(o)
            }
            return A.className = Cn,
                A.setAttribute("data-state", "hidden"),
                RA(A, e.props),
                t.appendChild(n),
                n.appendChild(A),
                r(e.props, e.props),
                {
                    popper: t,
                    onUpdate: r
                }
        }
        IA.$$tippy = !0;
        var TA = 1
            , SA = []
            , lA = [];
        function NA(e, t) {
            var n, A, r, a, i, o, E, s, c = oA(e, Object.assign({}, rA, {}, iA(t))), R = !1, O = !1, I = !1, T = !1, S = [], l = bn(W, c.interactiveDebounce), N = _n(c.triggerTarget || e), u = TA++, L = (s = c.plugins).filter((function(e, t) {
                    return s.indexOf(e) === t
                }
            )), p = {
                id: u,
                reference: e,
                popper: kn(),
                popperInstance: null,
                props: c,
                state: {
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1
                },
                plugins: L,
                clearDelayTimeouts: function() {
                    clearTimeout(n),
                        clearTimeout(A),
                        cancelAnimationFrame(r)
                },
                setProps: function(t) {
                    0;
                    if (p.state.isDestroyed)
                        return;
                    B("onBeforeUpdate", [p, t]),
                        j();
                    var n = p.props
                        , A = oA(e, Object.assign({}, p.props, {}, t, {
                        ignoreAttributes: !0
                    }));
                    p.props = A,
                        J(),
                    n.interactiveDebounce !== A.interactiveDebounce && (b(),
                        l = bn(W, A.interactiveDebounce));
                    n.triggerTarget && !A.triggerTarget ? Hn(n.triggerTarget).forEach((function(e) {
                            e.removeAttribute("aria-expanded")
                        }
                    )) : A.triggerTarget && e.removeAttribute("aria-expanded");
                    v(),
                        g(),
                    h && h(n, A);
                    p.popperInstance && (Q(),
                        $().forEach((function(e) {
                                requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                            }
                        )));
                    B("onAfterUpdate", [p, t])
                },
                setContent: function(e) {
                    p.setProps({
                        content: e
                    })
                },
                show: function() {
                    0;
                    var e = p.state.isVisible
                        , t = p.state.isDestroyed
                        , n = !p.state.isEnabled
                        , A = Xn.isTouch && !p.props.touch
                        , r = Bn(p.props.duration, 0, rA.duration);
                    if (e || t || n || A)
                        return;
                    if (M().hasAttribute("disabled"))
                        return;
                    if (B("onShow", [p], !1),
                    !1 === p.props.onShow(p))
                        return;
                    p.state.isVisible = !0,
                    C() && (f.style.visibility = "visible");
                    g(),
                        w(),
                    p.state.isMounted || (f.style.transition = "none");
                    if (C()) {
                        var a = D()
                            , i = a.box
                            , E = a.content;
                        Yn([i, E], 0)
                    }
                    o = function() {
                        if (p.state.isVisible && !T) {
                            if (T = !0,
                                f.offsetHeight,
                                f.style.transition = p.props.moveTransition,
                            C() && p.props.animation) {
                                var e = D()
                                    , t = e.box
                                    , n = e.content;
                                Yn([t, n], r),
                                    Wn([t, n], "visible")
                            }
                            G(),
                                v(),
                                xn(lA, p),
                                p.state.isMounted = !0,
                                B("onMount", [p]),
                            p.props.animation && C() && function(e, t) {
                                F(e, t)
                            }(r, (function() {
                                    p.state.isShown = !0,
                                        B("onShown", [p])
                                }
                            ))
                        }
                    }
                        ,
                        function() {
                            var e, t = p.props.appendTo, n = M();
                            e = p.props.interactive && t === rA.appendTo || "parent" === t ? n.parentNode : vn(t, [n]);
                            e.contains(f) || e.appendChild(f);
                            Q(),
                                !1
                        }()
                },
                hide: function() {
                    0;
                    var e = !p.state.isVisible
                        , t = p.state.isDestroyed
                        , n = !p.state.isEnabled
                        , A = Bn(p.props.duration, 1, rA.duration);
                    if (e || t || n)
                        return;
                    if (B("onHide", [p], !1),
                    !1 === p.props.onHide(p))
                        return;
                    p.state.isVisible = !1,
                        p.state.isShown = !1,
                        T = !1,
                    C() && (f.style.visibility = "hidden");
                    if (b(),
                        k(),
                        g(),
                        C()) {
                        var r = D()
                            , a = r.box
                            , i = r.content;
                        p.props.animation && (Yn([a, i], A),
                            Wn([a, i], "hidden"))
                    }
                    G(),
                        v(),
                        p.props.animation ? C() && function(e, t) {
                            F(e, (function() {
                                    !p.state.isVisible && f.parentNode && f.parentNode.contains(f) && t()
                                }
                            ))
                        }(A, p.unmount) : p.unmount()
                },
                hideWithInteractivity: function(e) {
                    0;
                    N.body.addEventListener("mouseleave", te),
                        N.addEventListener("mousemove", l),
                        xn(SA, l),
                        l(e)
                },
                enable: function() {
                    p.state.isEnabled = !0
                },
                disable: function() {
                    p.hide(),
                        p.state.isEnabled = !1
                },
                unmount: function() {
                    0;
                    p.state.isVisible && p.hide();
                    if (!p.state.isMounted)
                        return;
                    q(),
                        $().forEach((function(e) {
                                e._tippy.unmount()
                            }
                        )),
                    f.parentNode && f.parentNode.removeChild(f);
                    lA = lA.filter((function(e) {
                            return e !== p
                        }
                    )),
                        p.state.isMounted = !1,
                        B("onHidden", [p])
                },
                destroy: function() {
                    0;
                    if (p.state.isDestroyed)
                        return;
                    p.clearDelayTimeouts(),
                        p.unmount(),
                        j(),
                        delete e._tippy,
                        p.state.isDestroyed = !0,
                        B("onDestroy", [p])
                }
            };
            if (!c.render)
                return p;
            var d = c.render(p)
                , f = d.popper
                , h = d.onUpdate;
            f.setAttribute("data-tippy-root", ""),
                f.id = "tippy-" + p.id,
                p.popper = f,
                e._tippy = p,
                f._tippy = p;
            var K = L.map((function(e) {
                    return e.fn(p)
                }
            ))
                , P = e.hasAttribute("aria-expanded");
            return J(),
                v(),
                g(),
                B("onCreate", [p]),
            c.showOnCreate && ee(),
                f.addEventListener("mouseenter", (function() {
                        p.props.interactive && p.state.isVisible && p.clearDelayTimeouts()
                    }
                )),
                f.addEventListener("mouseleave", (function(e) {
                        p.props.interactive && p.props.trigger.indexOf("mouseenter") >= 0 && (N.addEventListener("mousemove", l),
                            l(e))
                    }
                )),
                p;
            function m() {
                var e = p.props.touch;
                return Array.isArray(e) ? e : [e, 0]
            }
            function U() {
                return "hold" === m()[0]
            }
            function C() {
                var e;
                return !!(null == (e = p.props.render) ? void 0 : e.$$tippy)
            }
            function M() {
                return E || e
            }
            function D() {
                return OA(f)
            }
            function y(e) {
                return p.state.isMounted && !p.state.isVisible || Xn.isTouch || a && "focus" === a.type ? 0 : Bn(p.props.delay, e ? 0 : 1, rA.delay)
            }
            function g() {
                f.style.pointerEvents = p.props.interactive && p.state.isVisible ? "" : "none",
                    f.style.zIndex = "" + p.props.zIndex
            }
            function B(e, t, n) {
                var A;
                (void 0 === n && (n = !0),
                    K.forEach((function(n) {
                            n[e] && n[e].apply(void 0, t)
                        }
                    )),
                    n) && (A = p.props)[e].apply(A, t)
            }
            function G() {
                var t = p.props.aria;
                if (t.content) {
                    var n = "aria-" + t.content
                        , A = f.id;
                    Hn(p.props.triggerTarget || e).forEach((function(e) {
                            var t = e.getAttribute(n);
                            if (p.state.isVisible)
                                e.setAttribute(n, t ? t + " " + A : A);
                            else {
                                var r = t && t.replace(A, "").trim();
                                r ? e.setAttribute(n, r) : e.removeAttribute(n)
                            }
                        }
                    ))
                }
            }
            function v() {
                !P && p.props.aria.expanded && Hn(p.props.triggerTarget || e).forEach((function(e) {
                        p.props.interactive ? e.setAttribute("aria-expanded", p.state.isVisible && e === M() ? "true" : "false") : e.removeAttribute("aria-expanded")
                    }
                ))
            }
            function b() {
                N.body.removeEventListener("mouseleave", te),
                    N.removeEventListener("mousemove", l),
                    SA = SA.filter((function(e) {
                            return e !== l
                        }
                    ))
            }
            function H(e) {
                if ((!Xn.isTouch || !I && "mousedown" !== e.type) && (!p.props.interactive || !f.contains(e.target))) {
                    if (M().contains(e.target)) {
                        if (Xn.isTouch)
                            return;
                        if (p.state.isVisible && p.props.trigger.indexOf("click") >= 0)
                            return
                    } else
                        B("onClickOutside", [p, e]);
                    !0 === p.props.hideOnClick && (R = !1,
                        p.clearDelayTimeouts(),
                        p.hide(),
                        O = !0,
                        setTimeout((function() {
                                O = !1
                            }
                        )),
                    p.state.isMounted || k())
                }
            }
            function x() {
                I = !0
            }
            function V() {
                I = !1
            }
            function w() {
                N.addEventListener("mousedown", H, !0),
                    N.addEventListener("touchend", H, gn),
                    N.addEventListener("touchstart", V, gn),
                    N.addEventListener("touchmove", x, gn)
            }
            function k() {
                N.removeEventListener("mousedown", H, !0),
                    N.removeEventListener("touchend", H, gn),
                    N.removeEventListener("touchstart", V, gn),
                    N.removeEventListener("touchmove", x, gn)
            }
            function F(e, t) {
                var n = D().box;
                function A(e) {
                    e.target === n && (zn(n, "remove", A),
                        t())
                }
                if (0 === e)
                    return t();
                zn(n, "remove", i),
                    zn(n, "add", A),
                    i = A
            }
            function Z(t, n, A) {
                void 0 === A && (A = !1),
                    Hn(p.props.triggerTarget || e).forEach((function(e) {
                            e.addEventListener(t, n, A),
                                S.push({
                                    node: e,
                                    eventType: t,
                                    handler: n,
                                    options: A
                                })
                        }
                    ))
            }
            function J() {
                var e;
                U() && (Z("touchstart", Y, {
                    passive: !0
                }),
                    Z("touchend", _, {
                        passive: !0
                    })),
                    (e = p.props.trigger,
                        e.split(/\s+/).filter(Boolean)).forEach((function(e) {
                            if ("manual" !== e)
                                switch (Z(e, Y),
                                    e) {
                                    case "mouseenter":
                                        Z("mouseleave", _);
                                        break;
                                    case "focus":
                                        Z(nA ? "focusout" : "blur", z);
                                        break;
                                    case "focusin":
                                        Z("focusout", z)
                                }
                        }
                    ))
            }
            function j() {
                S.forEach((function(e) {
                        var t = e.node
                            , n = e.eventType
                            , A = e.handler
                            , r = e.options;
                        t.removeEventListener(n, A, r)
                    }
                )),
                    S = []
            }
            function Y(e) {
                var t, n = !1;
                if (p.state.isEnabled && !X(e) && !O) {
                    var A = "focus" === (null == (t = a) ? void 0 : t.type);
                    a = e,
                        E = e.currentTarget,
                        v(),
                    !p.state.isVisible && Zn(e) && SA.forEach((function(t) {
                            return t(e)
                        }
                    )),
                        "click" === e.type && (p.props.trigger.indexOf("mouseenter") < 0 || R) && !1 !== p.props.hideOnClick && p.state.isVisible ? n = !0 : ee(e),
                    "click" === e.type && (R = !n),
                    n && !A && te(e)
                }
            }
            function W(t) {
                var n = t.target
                    , A = e.contains(n) || f.contains(n);
                "mousemove" === t.type && A || function(e, t) {
                    var n = t.clientX
                        , A = t.clientY;
                    return e.every((function(e) {
                            var t = e.popperRect
                                , r = e.popperState
                                , a = e.props.interactiveBorder
                                , i = Vn(r.placement)
                                , o = r.modifiersData.offset;
                            if (!o)
                                return !0;
                            var E = "bottom" === i ? o.top.y : 0
                                , s = "top" === i ? o.bottom.y : 0
                                , c = "right" === i ? o.left.x : 0
                                , R = "left" === i ? o.right.x : 0
                                , O = t.top - A + E > a
                                , I = A - t.bottom - s > a
                                , T = t.left - n + c > a
                                , S = n - t.right - R > a;
                            return O || I || T || S
                        }
                    ))
                }($().concat(f).map((function(e) {
                        var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                        return n ? {
                            popperRect: e.getBoundingClientRect(),
                            popperState: n,
                            props: c
                        } : null
                    }
                )).filter(Boolean), t) && (b(),
                    te(t))
            }
            function _(e) {
                X(e) || p.props.trigger.indexOf("click") >= 0 && R || (p.props.interactive ? p.hideWithInteractivity(e) : te(e))
            }
            function z(e) {
                p.props.trigger.indexOf("focusin") < 0 && e.target !== M() || p.props.interactive && e.relatedTarget && f.contains(e.relatedTarget) || te(e)
            }
            function X(e) {
                return !!Xn.isTouch && U() !== e.type.indexOf("touch") >= 0
            }
            function Q() {
                q();
                var t = p.props
                    , n = t.popperOptions
                    , A = t.placement
                    , r = t.offset
                    , a = t.getReferenceClientRect
                    , i = t.moveTransition
                    , E = C() ? OA(f).arrow : null
                    , s = a ? {
                    getBoundingClientRect: a,
                    contextElement: a.contextElement || M()
                } : e
                    , c = [{
                    name: "offset",
                    options: {
                        offset: r
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !i
                    }
                }, {
                    name: "$$tippy",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    fn: function(e) {
                        var t = e.state;
                        if (C()) {
                            var n = D().box;
                            ["placement", "reference-hidden", "escaped"].forEach((function(e) {
                                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                }
                            )),
                                t.attributes.popper = {}
                        }
                    }
                }];
                C() && E && c.push({
                    name: "arrow",
                    options: {
                        element: E,
                        padding: 3
                    }
                }),
                    c.push.apply(c, (null == n ? void 0 : n.modifiers) || []),
                    p.popperInstance = mn(s, f, Object.assign({}, n, {
                        placement: A,
                        onFirstUpdate: o,
                        modifiers: c
                    }))
            }
            function q() {
                p.popperInstance && (p.popperInstance.destroy(),
                    p.popperInstance = null)
            }
            function $() {
                return wn(f.querySelectorAll("[data-tippy-root]"))
            }
            function ee(e) {
                p.clearDelayTimeouts(),
                e && B("onTrigger", [p, e]),
                    w();
                var t = y(!0)
                    , A = m()
                    , r = A[0]
                    , a = A[1];
                Xn.isTouch && "hold" === r && a && (t = a),
                    t ? n = setTimeout((function() {
                            p.show()
                        }
                    ), t) : p.show()
            }
            function te(e) {
                if (p.clearDelayTimeouts(),
                    B("onUntrigger", [p, e]),
                    p.state.isVisible) {
                    if (!(p.props.trigger.indexOf("mouseenter") >= 0 && p.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && R)) {
                        var t = y(!1);
                        t ? A = setTimeout((function() {
                                p.state.isVisible && p.hide()
                            }
                        ), t) : r = requestAnimationFrame((function() {
                                p.hide()
                            }
                        ))
                    }
                } else
                    k()
            }
        }
        function uA(e, t) {
            void 0 === t && (t = {});
            var n = rA.plugins.concat(t.plugins || []);
            document.addEventListener("touchstart", qn, gn),
                window.addEventListener("blur", eA);
            var A = Object.assign({}, t, {
                plugins: n
            })
                , r = jn(e).reduce((function(e, t) {
                    var n = t && NA(t, A);
                    return n && e.push(n),
                        e
                }
            ), []);
            return Fn(e) ? r[0] : r
        }
        uA.defaultProps = rA,
            uA.setDefaultProps = function(e) {
                Object.keys(e).forEach((function(t) {
                        rA[t] = e[t]
                    }
                ))
            }
            ,
            uA.currentInput = Xn;
        uA.setDefaultProps({
            render: IA
        });
        var LA = uA
            , pA = (n("17x9"),
            n("i8i4"));
        function dA(e, t) {
            if (null == e)
                return {};
            var n, A, r = {}, a = Object.keys(e);
            for (A = 0; A < a.length; A++)
                n = a[A],
                t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }
        var fA = "undefined" !== typeof window && "undefined" !== typeof document;
        function hA(e, t) {
            e && ("function" === typeof e && e(t),
            {}.hasOwnProperty.call(e, "current") && (e.current = t))
        }
        function KA() {
            return fA && document.createElement("div")
        }
        function PA(e, t) {
            var n, A;
            return Object.assign({}, t, {
                popperOptions: Object.assign({}, e.popperOptions, {}, t.popperOptions, {
                    modifiers: [].concat(((null == (n = e.popperOptions) ? void 0 : n.modifiers) || []).filter((function(e) {
                            return e.name.indexOf("tippy") >= 0
                        }
                    )), (null == (A = t.popperOptions) ? void 0 : A.modifiers) || [])
                })
            })
        }
        var mA = fA ? A.useLayoutEffect : A.useEffect;
        function UA(e) {
            var t = Object(A.useRef)();
            return t.current || (t.current = "function" === typeof e ? e() : e),
                t.current
        }
        function CA(e, t, n) {
            n.split(/\s+/).forEach((function(n) {
                    n && e.classList[t](n)
                }
            ))
        }
        var MA = {
            name: "className",
            defaultValue: "",
            fn: function(e) {
                var t = e.popper.firstElementChild
                    , n = function() {
                    var t;
                    return !!(null == (t = e.props.render) ? void 0 : t.$$tippy)
                };
                function A() {
                    e.props.className && !n() || CA(t, "add", e.props.className)
                }
                return {
                    onCreate: A,
                    onBeforeUpdate: function() {
                        n() && CA(t, "remove", e.props.className)
                    },
                    onAfterUpdate: A
                }
            }
        };
        function DA(e) {
            return function(t) {
                var n = t.children
                    , a = t.content
                    , i = t.visible
                    , o = t.singleton
                    , E = t.render
                    , s = t.disabled
                    , c = void 0 !== s && s
                    , R = t.ignoreAttributes
                    , O = void 0 === R || R
                    , I = (t.__source,
                    t.__self,
                    dA(t, ["children", "content", "visible", "singleton", "render", "disabled", "ignoreAttributes", "__source", "__self"]))
                    , T = void 0 !== i
                    , S = void 0 !== o
                    , l = Object(A.useState)({})
                    , N = l[0]
                    , u = l[1]
                    , L = Object(A.useState)(!1)
                    , p = L[0]
                    , d = L[1]
                    , f = Object(A.useState)()
                    , h = f[0]
                    , K = f[1]
                    , P = UA((function() {
                        return {
                            container: KA(),
                            renders: 1
                        }
                    }
                ))
                    , m = Object.assign({
                    ignoreAttributes: O
                }, I, {
                    content: P.container
                });
                T && (m.trigger = "manual",
                    m.hideOnClick = !1),
                S && (c = !0);
                var U = m
                    , C = m.plugins || [];
                E && (U = Object.assign({}, m, {
                    plugins: S ? [].concat(C, [{
                        fn: function() {
                            return {
                                onTrigger: function(e, t) {
                                    var n = o.data.children.find((function(e) {
                                            return e.instance.reference === t.currentTarget
                                        }
                                    )).content;
                                    K(n)
                                }
                            }
                        }
                    }]) : C,
                    render: function() {
                        return {
                            popper: P.container
                        }
                    }
                }));
                var M = n ? [n.type] : [];
                return mA((function() {
                        var t = e(P.ref || KA(), Object.assign({}, U, {
                            plugins: [MA].concat(m.plugins || [])
                        }));
                        return P.instance = t,
                        c && t.disable(),
                        i && t.show(),
                        S && o.hook({
                            instance: t,
                            content: a,
                            props: U
                        }),
                            d(!0),
                            function() {
                                t.destroy(),
                                null == o || o.cleanup(t)
                            }
                    }
                ), M),
                    mA((function() {
                            if (1 !== P.renders) {
                                var e = P.instance;
                                e.setProps(PA(e.props, m)),
                                    c ? e.disable() : e.enable(),
                                T && (i ? e.show() : e.hide()),
                                S && o.hook({
                                    instance: e,
                                    content: a,
                                    props: m
                                })
                            } else
                                P.renders++
                        }
                    )),
                    mA((function() {
                            var e;
                            if (E) {
                                var t = P.instance;
                                t.setProps({
                                    popperOptions: Object.assign({}, t.props.popperOptions, {
                                        modifiers: [].concat((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || [], [{
                                            name: "$$tippyReact",
                                            enabled: !0,
                                            phase: "beforeWrite",
                                            requires: ["computeStyles"],
                                            fn: function(e) {
                                                var t, n = e.state, A = null == (t = n.modifiersData) ? void 0 : t.hide;
                                                N.placement === n.placement && N.referenceHidden === (null == A ? void 0 : A.isReferenceHidden) && N.escaped === (null == A ? void 0 : A.hasPopperEscaped) || u({
                                                    placement: n.placement,
                                                    referenceHidden: null == A ? void 0 : A.isReferenceHidden,
                                                    escaped: null == A ? void 0 : A.hasPopperEscaped
                                                }),
                                                    n.attributes.popper = {}
                                            }
                                        }])
                                    })
                                })
                            }
                        }
                    ), [N.placement, N.referenceHidden, N.escaped].concat(M)),
                    r.a.createElement(r.a.Fragment, null, n ? Object(A.cloneElement)(n, {
                        ref: function(e) {
                            P.ref = e,
                                hA(n.ref, e)
                        }
                    }) : null, p && Object(pA.createPortal)(E ? E(function(e) {
                        var t = {
                            "data-placement": e.placement
                        };
                        return e.referenceHidden && (t["data-reference-hidden"] = ""),
                        e.escaped && (t["data-escaped"] = ""),
                            t
                    }(N), h) : a, P.container))
            }
        }
        var yA = function(e, t) {
            return Object(A.forwardRef)((function(n, a) {
                    var i = n.children
                        , o = dA(n, ["children"]);
                    return (r.a.createElement(e, Object.assign({}, t, {}, o), i ? Object(A.cloneElement)(i, {
                        ref: function(e) {
                            hA(a, e),
                                hA(i.ref, e)
                        }
                    }) : null))
                }
            ))
        }
            , gA = yA(DA(LA))
            , BA = n("wNYn")
            , GA = r.a.createElement
            , vA = r.a.memo((function(e) {
                var t, n, A, a = r.a.useState(!1), i = Object(u.a)(a, 2), o = i[0], E = i[1], s = Object(BA.a)().t, c = function(t, n, A) {
                    return function(r) {
                        e.moves.joinTeam(t, n, A)
                    }
                }, R = function(t) {
                    var n, A;
                    return null !== (n = null === (A = e.ctx.players.filter((function(e) {
                            return e.id == t
                        }
                    ))) || void 0 === A ? void 0 : A[0]) && void 0 !== n ? n : null
                }, O = null === e.G.player.team, I = e.G.player.team === e.team && 0 === e.G.teams[e.team].spymasters.length;
                return GA("div", {
                    id: "teamBoard-".concat(e.team),
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " " + "teamSelectWrapper ".concat([e.team], " ").concat([e.left && "left"], " ").concat([e.right && "right"])
                }, GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " " + "teamWrapper ".concat([e.team])
                }, GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " scoreWrapper tokensHome"
                }, GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " score"
                }, null !== (t = null === (n = e.G) || void 0 === n ? void 0 : null === (A = n.score) || void 0 === A ? void 0 : A[e.team]) && void 0 !== t ? t : "-")), GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " roleTitle"
                }, s("teamboard.operatives.title")), GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                }, 0 === e.G.teams[e.team].operatives.length && GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " playerName"
                }, "\u2013"), e.G.teams[e.team].operatives.map((function(t) {
                        var n = R(t);
                        if (n)
                            return GA("div", {
                                key: "player" + t,
                                className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " " + "playerName ".concat(t == e.G.player.id ? "current" : "", " ").concat(n.isConnected ? "" : "disconnected")
                            }, n.name)
                    }
                ))), O && GA(gA, {
                    animation: "shift-away",
                    theme: "codenames",
                    visible: o,
                    placement: e.scale.small ? "top" : "red" == e.team ? "right" : "left",
                    maxWidth: e.scale.small ? 120 : 250,
                    onClickOutside: function(e, t) {
                        E(!1),
                            localStorage.setItem("helpTrigger", "0")
                    },
                    content: GA("div", {
                        style: {
                            padding: "0 0.5rem",
                            fontSize: "0.75rem"
                        },
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, GA("h3", {
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, s("playerprofile.prompt.jointeam")), GA("p", {
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, s("help.jointeam.operatives")))
                }, GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                }, GA(St.a, {
                    onClick: c([e.team], "operatives", e.playerID)
                }, s("teamboard.operatives.join")))), GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " roleTitle"
                }, s("teamboard.spymasters.title")), GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                }, 0 === e.G.teams[e.team].spymasters.length && GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " playerName"
                }, "\u2013"), e.G.teams[e.team].spymasters.map((function(t) {
                        var n = R(t);
                        if (n)
                            return GA("div", {
                                key: "player" + t,
                                className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]]) + " " + "playerName ".concat(t == e.G.player.id ? "current" : "", " ").concat(n.isConnected ? "" : "disconnected")
                            }, n.name)
                    }
                ))), (O || I) && GA(gA, {
                    animation: "shift-away",
                    theme: "codenames",
                    visible: o,
                    placement: e.scale.small ? "bottom" : "red" == e.team ? "right" : "left",
                    maxWidth: e.scale.small ? 120 : 250,
                    onClickOutside: function(e, t) {
                        E(!1),
                            localStorage.setItem("helpTrigger", "0")
                    },
                    content: GA("div", {
                        style: {
                            padding: "0 0.5rem",
                            fontSize: "0.75rem"
                        },
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, GA("h3", {
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, s("playerprofile.prompt.jointeam")), GA("p", {
                        className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                    }, s("help.jointeam.spymasters")))
                }, GA("div", {
                    className: Tt.a.dynamic([["1601047747", ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]]])
                }, GA(St.a, {
                    onClick: c(e.team, "spymasters", e.playerID)
                }, s("teamboard.spymasters.join"))))), GA(Tt.a, {
                    id: "1601047747",
                    dynamic: ["".concat(.2 * e.grid.item.height, "px"), "".concat(.5 * e.grid.item.height, "px"), ut.a.redLight, ut.a.blueLight, "".concat(e.sidebarWidth - 15, "px"), 1.1 * e.grid.item.height + "px"]
                }, [".teamSelectWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;color:white;}", ".teamWrapper.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;margin:10px;}", ".teamSelectWrapper.red.__jsx-style-dynamic-selector{background-color:rgba(143,43,28,1);}", ".teamSelectWrapper.blue.__jsx-style-dynamic-selector{background-color:rgba(50,132,163,1);}", ".score.__jsx-style-dynamic-selector{position:relative;top:".concat("".concat(.2 * e.grid.item.height, "px"), ";font-weight:bold;font-size:", "".concat(.5 * e.grid.item.height, "px"), ";text-align:center;z-index:10;color:white;text-shadow:0px 0px 0.8rem rgba(0,0,0,0.8);}"), ".roleTitle.__jsx-style-dynamic-selector{font-size:1rem;margin-top:0.5rem;}", ".red.__jsx-style-dynamic-selector .roleTitle.__jsx-style-dynamic-selector{color:".concat(ut.a.redLight, ";}"), ".blue.__jsx-style-dynamic-selector .roleTitle.__jsx-style-dynamic-selector{color:".concat(ut.a.blueLight, ";}"), ".playerName.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;padding-left:15px;font-weight:100;max-width:".concat("".concat(e.sidebarWidth - 15, "px"), ";max-height:1.3rem;overflow:hidden;-webkit-mask-image:linear-gradient(to right,black 70%,transparent 93.33333%);mask-image:linear-gradient(to right,black 70%,transparent 93.33333%);}"), ".playerName.disconnected.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.3);}", ".playerName.current.__jsx-style-dynamic-selector{font-weight:900;}", ".red.__jsx-style-dynamic-selector .playerName.__jsx-style-dynamic-selector{-webkit-mask-image:linear-gradient(to right,black 70%,transparent 93.33333%);mask-image:linear-gradient(to right,black 70%,transparent 93.33333%);}", ".red.__jsx-style-dynamic-selector .score.__jsx-style-dynamic-selector{left:30%;}", ".blue.__jsx-style-dynamic-selector .score.__jsx-style-dynamic-selector{left:-30%;}", ".left.__jsx-style-dynamic-selector{border-top-right-radius:1rem;border-bottom-right-radius:1rem;border:solid 1px rgba(0,0,0,0.3);border-bottom:solid 3px rgba(0,0,0,0.3);}", ".right.__jsx-style-dynamic-selector{border-top-left-radius:1rem;border-bottom-left-radius:1rem;border:solid 1px rgba(0,0,0,0.3);border-bottom:solid 3px rgba(0,0,0,0.3);}", ".tokensHome.__jsx-style-dynamic-selector{height:".concat(1.1 * e.grid.item.height + "px", ";}")]))
            }
        ))
            , bA = r.a.createElement
            , HA = function(e) {
            var t, n = r.a.useState(!1), A = Object(u.a)(n, 2), a = A[0], i = A[1], o = function(e) {
                return function(t) {
                    console.log("onKeyPress", t.key, t.which, t.keyCode),
                    "Enter" !== t.key && 32 !== t.keyCode && 32 !== t.which || e(),
                    t.which >= 48 && t.which <= 57 && s(t.key)()
                }
            }, E = function() {
                i(!a)
            }, s = function(t) {
                return function() {
                    console.log("setNumberClue", t),
                        e.moves.setClueNumber(t),
                        i(!1)
                }
            };
            return bA("div", {
                onClick: E,
                tabIndex: 0,
                onKeyPress: o(E),
                className: Tt.a.dynamic([["1756931087", [ut.a.yellow]]]) + " numberSelectWrapper"
            }, bA(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                visible: a,
                maxWidth: 400,
                onClickOutside: function(e, t) {
                    i(!1)
                },
                content: bA("div", {
                    className: Tt.a.dynamic([["1756931087", [ut.a.yellow]]]) + " selectWrapper"
                }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "&infin;"].map((function(e, t) {
                        return bA("div", {
                            tabIndex: 0,
                            key: "numberselectoption" + e,
                            dangerouslySetInnerHTML: {
                                __html: e
                            },
                            onKeyPress: o(s(e)),
                            onClick: s(e),
                            className: Tt.a.dynamic([["1756931087", [ut.a.yellow]]]) + " option"
                        })
                    }
                )))
            }, bA("span", {
                dangerouslySetInnerHTML: {
                    __html: null !== (t = e.G.clue.number) && void 0 !== t ? t : "-"
                },
                className: Tt.a.dynamic([["1756931087", [ut.a.yellow]]]) + " number"
            })), bA(Tt.a, {
                id: "1756931087",
                dynamic: [ut.a.yellow]
            }, [".numberSelectWrapper.__jsx-style-dynamic-selector{display:inline-block;width:2rem;margin:0.5rem;padding:0.1rem 0.1rem;font-size:1.5rem;line-height:2rem;border-radius:0.5rem;background-color:white;box-shadow:0.2rem 0.2rem 1px 0px rgba(0,0,0,0.5);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;}", ".selectWrapper.__jsx-style-dynamic-selector{background-color:white;padding:0.5rem;}", ".option.__jsx-style-dynamic-selector{display:inline-block;padding:0.3rem 0.5rem 0.25rem 0.5rem;font-size:1.5rem;border:solid 1px gray;border-radius:0.5rem;line-height:1.5rem;margin:0.1rem;box-shadow:0.1rem 0.1rem 1px 0px rgba(0,0,0,0.5);cursor:pointer;}", ".option.__jsx-style-dynamic-selector:hover{background-color:".concat(ut.a.yellow, ";}")]))
        }
            , xA = function(e) {
            var t, n, a, i, o, E = e.G, s = e.moves, c = Object(BA.a)().t, R = Object(A.useState)(null !== (t = E.clue.word) && void 0 !== t ? t : ""), O = R[0], I = R[1];
            r.a.useEffect((function() {
                    E.clue.word !== O && I(E.clue.word)
                }
            ), [E.clue.word]),
                r.a.useEffect((function() {
                        I("")
                    }
                ), [E.currentTeam, E.stage]);
            var T = E.player.team === E.currentTeam && "spymaster" === E.player.role && "clue" === E.stage && !E.gameover
                , S = "guess" == E.stage
                , l = "guess" == E.stage && E.player.team === E.currentTeam && "operative" === E.player.role && !E.gameover && "settings" !== E.phase;
            return bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueBoardWrapper"
            }, T && bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueWrapper column"
            }, bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]])
            }, c("clue.spymaster.instruction")), bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueInputWrapper"
            }, bA("input", {
                name: "clue",
                type: "text",
                autoComplete: "off",
                placeholder: c("clue.spymaster.input.placeholder"),
                value: O,
                onChange: function(e) {
                    I(e.target.value)
                },
                onBlur: function() {
                    s.setClueWord(O)
                },
                tabIndex: 0,
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]])
            }), bA(HA, {
                moves: s,
                G: E
            }), bA(St.a, {
                onClick: function() {
                    s.clueGiven(E.player.id)
                },
                large: !0,
                tabIndex: 0
            }, c("clue.spymaster.button.clueGiven")))), S && bA(r.a.Fragment, null, bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueWrapper"
            }, (null === (n = E.clue) || void 0 === n ? void 0 : n.word) && bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clue"
            }, null === (a = E.clue) || void 0 === a ? void 0 : a.word), ((null === (i = E.clue) || void 0 === i ? void 0 : i.number) || 0 == (null === (o = E.clue) || void 0 === o ? void 0 : o.number)) && bA("div", {
                dangerouslySetInnerHTML: {
                    __html: E.clue.number
                },
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueNumber"
            })), l && bA("div", {
                className: Tt.a.dynamic([["2588470795", ["".concat(.4 * e.grid.width, "px")]]]) + " clueWrapper"
            }, bA(St.a, {
                onClick: function() {
                    s.endGuessing(E.player.id)
                },
                large: !0,
                disabled: E.guesses <= 0
            }, c("clue.operative.endGuess")))), bA(Tt.a, {
                id: "2588470795",
                dynamic: ["".concat(.4 * e.grid.width, "px")]
            }, [".clueBoardWrapper.__jsx-style-dynamic-selector{margin:0.5rem 0;min-height:5rem;}", ".clueWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:1rem auto;text-align:center;}", ".clueWrapper.column.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".clueInputWrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{font-size:1.5rem;padding:0.25rem 0.5rem 0.15rem 0.5rem;border-radius:0.5rem;border:none;text-transform:uppercase;box-shadow:0.2rem 0.2rem 1px 0px rgba(0,0,0,0.5);max-width:".concat("".concat(.4 * e.grid.width, "px"), ";}"), ".clueInputWrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{text-transform:none;}", ".clueInputWrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{text-transform:none;}", ".clueInputWrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{text-transform:none;}", ".clueInputWrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{text-transform:none;}", ".selectedWords.__jsx-style-dynamic-selector{padding:0 1rem;font-size:1.5rem;}", ".clue.__jsx-style-dynamic-selector,.clueNumber.__jsx-style-dynamic-selector{background-color:white;padding:0.5rem 1rem 0.35rem 1rem;border-radius:0.5rem;font-size:2rem;text-transform:uppercase;font-weight:800;}", ".clueNumber.__jsx-style-dynamic-selector{margin-left:0.5rem;}"]))
        }
            , VA = n("HHYi")
            , wA = r.a.createElement
            , kA = Object(A.memo)((function(e) {
                var t = e.languagePacks
                    , n = e.setLanguagePacks
                    , r = e.setStep
                    , a = e.words;
                Object(A.useEffect)((function() {
                        var e = document.querySelector("#flag-select");
                        null === e || void 0 === e || e.addEventListener("keydown", i)
                    }
                ), [t]),
                    Object(A.useEffect)((function() {
                            return function() {
                                var e = document.querySelector("#flag-select");
                                null === e || void 0 === e || e.removeEventListener("keydown", null)
                            }
                        }
                    ), []);
                var i = function(e) {
                    13 === e.which && (document.activeElement.getAttribute("data-country") ? n(document.activeElement.getAttribute("data-country"))() : document.activeElement.getAttribute("data-submit") && r(2))
                };
                return wA("div", {
                    id: "flag-select",
                    className: "jsx-739190734 flag-wrap"
                }, wA("div", {
                    className: "jsx-739190734 flag-container"
                }, Object.keys(a).map((function(e) {
                        return wA("img", {
                            role: "button",
                            tabIndex: 0,
                            "data-country": e,
                            onClick: n(e),
                            key: "flag-" + e,
                            style: {
                                backgroundColor: t === e ? ut.a.yellow : "transparent"
                            },
                            src: "https://cdn.codenames.game/img/lang/".concat(e, "-circle.png"),
                            className: "jsx-739190734 flag-image"
                        })
                    }
                ))), wA(Tt.a, {
                    id: "739190734"
                }, [".flag-wrap.jsx-739190734{display:block;margin:0 auto;}", ".flag-container.jsx-739190734{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".flag-image.jsx-739190734{cursor:pointer;display:block;padding:0.35rem;margin:0.15rem;border-radius:50%;width:30px;height:30px;outline:none;}"]))
            }
        ))
            , FA = r.a.createElement
            , ZA = Object(A.memo)((function(e) {
                var t = e.words
                    , n = e.onChangePack
                    , r = e.packs;
                Object(BA.a)().t;
                Object(A.useEffect)((function() {
                        var e = document.querySelector("#pack-select");
                        return null === e || void 0 === e || e.addEventListener("keydown", a),
                            function() {
                                var e = document.querySelector("#pack-select");
                                null === e || void 0 === e || e.removeEventListener("keydown", a)
                            }
                    }
                ), []);
                var a = function(e) {
                    if (13 === e.which) {
                        if (document.activeElement.getAttribute("data-checkbox"))
                            return console.log("hpvmp"),
                                n(document.activeElement.getAttribute("data-checkbox"))();
                        document.activeElement.getAttribute("data-submit")
                    }
                };
                return FA("div", {
                    id: "pack-select",
                    className: "jsx-1568980865"
                }, Object.keys(t).map((function(e) {
                        return FA("div", {
                            key: "select-pack" + e,
                            className: "jsx-1568980865 packList-item"
                        }, FA("input", {
                            type: "checkbox",
                            name: e,
                            id: e,
                            "data-checkbox": e,
                            checked: -1 !== r.indexOf(e),
                            onChange: n(e),
                            className: "jsx-1568980865"
                        }), FA("label", {
                            htmlFor: e,
                            className: "jsx-1568980865"
                        }, e))
                    }
                )), FA(Tt.a, {
                    id: "1568980865"
                }, [".packList-item.jsx-1568980865{margin:0.5rem 0;}", ".packList-item.jsx-1568980865 label.jsx-1568980865,.packList-item.jsx-1568980865 input.jsx-1568980865{cursor:pointer;}"]))
            }
        ))
            , JA = n("Qv+K")
            , jA = function(e, t) {
            var n = new Array(t)
                , A = e.length
                , r = new Array(A);
            if (t > A)
                throw new RangeError("getRandom: more elements taken than available");
            for (; t--; ) {
                var a = Math.floor(Math.random() * A);
                n[t] = e[a in r ? r[a] : a],
                    r[a] = --A in r ? r[A] : A
            }
            return n
        }
            , YA = n("BXsF")
            , WA = n("Cpg7")
            , _A = r.a.createElement;
        function zA(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function XA(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zA(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zA(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var QA = function(e) {
            var t = function(t) {
                console.log(t.target.name, t.target.value),
                    e.onChange(XA(XA({}, e.packSize), {}, Object(E.a)({}, t.target.name, Number(t.target.value))))
            }
                , n = Object.values(e.packSize).reduce((function(e, t) {
                    return e + t
                }
            ), 0);
            return _A("div", {
                className: "jsx-3330044835"
            }, "Card count: ", n, _A("div", {
                className: "jsx-3330044835 form-field"
            }, _A("label", {
                htmlFor: "team1",
                className: "jsx-3330044835"
            }, "Team 1"), _A("input", {
                type: "range",
                id: "team1",
                name: "team1",
                min: "1",
                max: "10",
                value: e.packSize.team1,
                onChange: t,
                className: "jsx-3330044835"
            }), _A("label", {
                htmlFor: "team1",
                className: "jsx-3330044835"
            }, e.packSize.team1)), _A("div", {
                className: "jsx-3330044835 form-field"
            }, _A("label", {
                htmlFor: "team2",
                className: "jsx-3330044835"
            }, "Team 2"), _A("input", {
                type: "range",
                id: "team2",
                name: "team2",
                min: "1",
                max: "10",
                value: e.packSize.team2,
                onChange: t,
                className: "jsx-3330044835"
            }), _A("label", {
                htmlFor: "team2",
                className: "jsx-3330044835"
            }, e.packSize.team2)), _A("div", {
                className: "jsx-3330044835 form-field"
            }, _A("label", {
                htmlFor: "team2",
                className: "jsx-3330044835"
            }, "Neutral"), _A("input", {
                type: "range",
                id: "neutral",
                name: "neutral",
                min: "1",
                max: "10",
                value: e.packSize.neutral,
                onChange: t,
                className: "jsx-3330044835"
            }), _A("label", {
                htmlFor: "neutral",
                className: "jsx-3330044835"
            }, e.packSize.neutral)), _A("div", {
                className: "jsx-3330044835 form-field"
            }, _A("label", {
                htmlFor: "team2",
                className: "jsx-3330044835"
            }, "Assasin"), _A("input", {
                type: "range",
                id: "assasin",
                name: "assasin",
                min: "1",
                max: "10",
                value: e.packSize.assasin,
                onChange: t,
                className: "jsx-3330044835"
            }), _A("label", {
                htmlFor: "assasin",
                className: "jsx-3330044835"
            }, e.packSize.assasin)), _A(Tt.a, {
                id: "3330044835"
            }, [".form-field.jsx-3330044835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1rem 0;}"]))
        }
            , qA = r.a.createElement
            , $A = function() {
            var e = Object(o.a)(i.a.mark((function e() {
                    var t, n;
                    return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                            YA.a.get("/api/testpacks?secret=QsWCCaAVnZATGBa5");
                                    case 2:
                                        return t = e.sent,
                                            e.next = 5,
                                            t.json();
                                    case 5:
                                        if (!(n = e.sent)) {
                                            e.next = 9;
                                            break
                                        }
                                        return localStorage.setItem("testpackdata", JSON.stringify(n)),
                                            e.abrupt("return", n);
                                    case 9:
                                        return e.abrupt("return", null);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                        }
                    ), e)
                }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
            , er = function(e) {
            var t = Object(BA.a)().t
                , n = r.a.useState({
                team1: 9,
                team2: 8,
                neutral: 7,
                assasin: 1
            })
                , A = Object(u.a)(n, 2)
                , a = A[0]
                , E = A[1]
                , c = Object(JA.a)("testPack", $A, {
                initialData: JSON.parse(localStorage.getItem("testpackdata")),
                manual: !0
            })
                , R = function() {
                var t = Object(o.a)(i.a.mark((function t() {
                        var n, A, r;
                        return i.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            n = e.packs.reduce((function(e, t) {
                                                    return e = [].concat(Object(s.a)(e), Object(s.a)(c.data[t]))
                                                }
                                            ), []),
                                            e.G.banBuffer && (n = n.filter((function(t) {
                                                    return -1 === e.G.banBuffer.indexOf(t)
                                                }
                                            ))),
                                                A = Object.values(a).reduce((function(e, t) {
                                                        return e + t
                                                    }
                                                ), 0),
                                                r = jA(n, A),
                                                e.moves.startGame(r, a),
                                            e.onSubmit && e.onSubmit();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t)
                    }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return qA("div", {
                className: "jsx-".concat(WA.a.__hash) + " secretsettings"
            }, qA("div", {
                className: "jsx-".concat(WA.a.__hash) + " section align-left"
            }, qA("h3", {
                className: "jsx-".concat(WA.a.__hash) + " align-left mb-05 mt-05"
            }, "Custom packs"), c.data ? qA(ZA, {
                words: c.data,
                onChangePack: e.onChangePack,
                packs: e.packs
            }) : "No custom packs downloaded", qA("div", {
                className: "jsx-".concat(WA.a.__hash)
            }, qA(St.a, {
                small: !0,
                onClick: function() {
                    return c.refetch({
                        force: !0
                    })
                }
            }, "Download fresh data"))), qA("div", {
                className: "jsx-".concat(WA.a.__hash) + " section align-left"
            }, qA("h3", {
                className: "jsx-".concat(WA.a.__hash) + " align-left mb-05 mt-05"
            }, "Pack size"), qA(QA, {
                packSize: a,
                onChange: function(e) {
                    E(e)
                }
            })), qA("div", {
                className: "jsx-".concat(WA.a.__hash) + " section"
            }, qA(St.a, {
                disabled: function() {
                    var t = Object.values(a).reduce((function(e, t) {
                            return e + t
                        }
                    ), 0);
                    return !c.data || !e.packs || e.packs.reduce((function(e, t) {
                            var n;
                            return (null === c || void 0 === c ? void 0 : null === (n = c.data) || void 0 === n ? void 0 : n[t]) && (e = [].concat(Object(s.a)(e), Object(s.a)(c.data[t]))),
                                e
                        }
                    ), []).length <= t
                }(),
                onClick: R,
                large: !0
            }, t("modal.button.start"))), qA(Tt.a, {
                id: WA.a.__hash
            }, WA.a))
        }
            , tr = n("cr+I")
            , nr = n.n(tr)
            , Ar = r.a.createElement
            , rr = Object(A.memo)((function(e) {
                var t = Object(BA.a)().t
                    , n = function() {
                    var e = A.useState(null)
                        , t = Object(u.a)(e, 2)
                        , n = t[0]
                        , r = t[1]
                        , a = A.useState(null)
                        , i = Object(u.a)(a, 2)
                        , o = i[0]
                        , E = i[1];
                    return A.useEffect((function() {
                            if (console.log("window.location.search"),
                            window.location.search !== n) {
                                console.log("window.location.search change"),
                                    r(window.location.search);
                                var e = nr.a.parse(window.location.search);
                                E({
                                    devopsPack: "devops2020" === (null === e || void 0 === e ? void 0 : e.joinToken)
                                })
                            }
                        }
                    ), [window.location.search]),
                        o
                }();
                console.log("GameSettings featureFlags", n);
                var a = function(e) {
                    var t = function() {
                        var e, t;
                        return 0 == rt.d().indexOf("#T#-") || !!(null === (e = rt.f()) || void 0 === e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.some((function(e) {
                                return "test_pack" === e.name
                            }
                        )))
                    }
                        , n = function() {
                        var e, t;
                        return 0 == rt.d().indexOf("#D#-") || !!(null === (e = rt.f()) || void 0 === e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.some((function(e) {
                                return "test_duel" === e.name
                            }
                        )))
                    }
                        , A = r.a.useState(t())
                        , a = Object(u.a)(A, 2)
                        , i = a[0]
                        , o = a[1]
                        , E = r.a.useState(n())
                        , s = Object(u.a)(E, 2)
                        , c = s[0]
                        , R = s[1]
                        , O = r.a.useState(i || 0 == rt.d().indexOf("#T#-"))
                        , I = Object(u.a)(O, 2)
                        , T = I[0]
                        , S = I[1];
                    r.a.useEffect((function() {
                            var e = t();
                            o(e),
                            e || S(!1);
                            var A = n();
                            R(A)
                        }
                    ), [rt.d()]),
                        r.a.useEffect((function() {
                                e && e()
                            }
                        ), [T]);
                    return {
                        canTest: i,
                        canDuel: c,
                        inTestMode: T,
                        switchTestMode: function() {
                            S(!T)
                        }
                    }
                }((function() {
                        L([]),
                            S("")
                    }
                ))
                    , E = a.canTest
                    , c = a.inTestMode
                    , R = a.switchTestMode
                    , O = a.canDuel
                    , I = Object(A.useState)("")
                    , T = I[0]
                    , S = I[1]
                    , l = Object(A.useState)([])
                    , N = l[0]
                    , L = l[1]
                    , p = Object(A.useState)(VA)
                    , d = p[0]
                    , f = p[1];
                r.a.useEffect((function() {
                        if (!(null === n || void 0 === n ? void 0 : n.devopsPack) && d.devops) {
                            d.devops;
                            var e = Object(fe.a)(d, ["devops"]);
                            f(e)
                        } else
                            (null === n || void 0 === n ? void 0 : n.devopsPack) && !d.devops && f(VA)
                    }
                ), [n, d]);
                var h = function(e) {
                    return function(t) {
                        console.log("onChangePack", e);
                        var n = [];
                        n = -1 !== N.indexOf(e) ? N.filter((function(t) {
                                return t !== e
                            }
                        )) : [].concat(Object(s.a)(N), [e]),
                            L(n)
                    }
                }
                    , K = function() {
                    var t = Object(o.a)(i.a.mark((function t() {
                            var n, A;
                            return i.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                            case 0:
                                                n = N.reduce((function(e, t) {
                                                        return e = [].concat(Object(s.a)(e), Object(s.a)(d[T][t]))
                                                    }
                                                ), []),
                                                e.G.banBuffer && (n = n.filter((function(t) {
                                                        return -1 === e.G.banBuffer.indexOf(t)
                                                    }
                                                ))),
                                                    A = jA(n, 25),
                                                    e.moves.startGame(A),
                                                e.onSubmit && e.onSubmit();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                    , P = function(t) {
                    return function(n) {
                        e.moves.changeGameMode(t)
                    }
                };
                return Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " gamesettings-wrapper"
                }, O && Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Ar("h3", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " align-left mb-05"
                }, t("gamesettings.gameMode.title")), Ar(St.a, {
                    onClick: P("regular"),
                    selected: "regular" === e.G.gameMode
                }, t("gamesettings.gameMode.regular")), Ar(St.a, {
                    onClick: P("duet"),
                    selected: "duet" === e.G.gameMode
                }, t("gamesettings.gameMode.duet"))), E && Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Ar(St.a, {
                    onClick: R
                }, "Switch", " ", c ? "to regular packs" : "to testpacks")), c ? Ar(er, Object(lt.a)({}, e, {
                    onChangePack: h,
                    packs: N
                })) : Ar(r.a.Fragment, null, Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " section"
                }, Ar("h3", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " align-left mb-05"
                }, t("gamesettings.language.title")), Ar(kA, {
                    words: d,
                    languagePacks: T,
                    setLanguagePacks: function(e) {
                        return function() {
                            e !== T && L(Object.keys(d[e])),
                                S(e)
                        }
                    }
                })), Ar("hr", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash)
                }), T && Ar(r.a.Fragment, null, Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " section align-left pb-1"
                }, Ar("h3", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " align-left mb-05 mt-05"
                }, t("gamesettings.packs.title")), Ar(ZA, {
                    words: d[T],
                    onChangePack: h,
                    packs: N
                })), Ar("hr", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash)
                })), Ar("div", {
                    className: "jsx-2760192644 " + "jsx-".concat(WA.a.__hash) + " section"
                }, Ar(St.a, {
                    disabled: !T || N.reduce((function(e, t) {
                            var n, A;
                            return (null === (n = d[T]) || void 0 === n ? void 0 : n[t]) && (e = [].concat(Object(s.a)(e), Object(s.a)(null === d || void 0 === d ? void 0 : null === (A = d[T]) || void 0 === A ? void 0 : A[t]))),
                                e
                        }
                    ), []).length < 25,
                    onClick: K,
                    large: !0
                }, t("modal.button.start")))), Ar(Tt.a, {
                    id: "2760192644"
                }, ["header.jsx-2760192644{font-size:1.5rem;text-align:center;padding-bottom:1rem;}", ".packList-item.jsx-2760192644{padding-left:1.5rem;}"]), Ar(Tt.a, {
                    id: WA.a.__hash
                }, WA.a))
            }
        ))
            , ar = r.a.createElement
            , ir = r.a.memo((function(e) {
                var t = e.G
                    , n = e.moves
                    , A = e.grid
                    , r = e.ctx
                    , a = function(e) {
                    return "clue" == t.stage && "spymaster" === t.player.role && e.type === t.player.team ? i(e.word) : "clue" !== t.stage && "operative" === t.player.role ? o(e.word) : void 0
                }
                    , i = function(e) {
                    return function(t) {
                        t.preventDefault(),
                            n.selectClueCard(e)
                    }
                }
                    , o = function(e) {
                    return function(A) {
                        A.preventDefault(),
                            function(e) {
                                n.tipCard(e, t.player.id)
                            }(e)
                    }
                }
                    , E = function(e) {
                    console.log("guessCard", e),
                        n.guessCard(e, t.player.id)
                }
                    , s = function(e) {
                    return ar("div", {
                        className: Tt.a.dynamic([["861447350", ["".concat(.08 * A.item.width, "px"), "".concat(.11 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.05 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.03 * A.item.height, "px"), null === t || void 0 === t ? void 0 : t.currentTeam, "".concat(.5 * A.item.width, "px")]]]) + " tipsWrapper"
                    }, e.tips.map((function(n) {
                            var a = function(e) {
                                return r.players.filter((function(t) {
                                        return t.id === e
                                    }
                                ))[0].name
                            }(n);
                            if (a)
                                return ar("div", {
                                    key: "tip-".concat(e.word, "-").concat(n),
                                    className: Tt.a.dynamic([["861447350", ["".concat(.08 * A.item.width, "px"), "".concat(.11 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.05 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.03 * A.item.height, "px"), null === t || void 0 === t ? void 0 : t.currentTeam, "".concat(.5 * A.item.width, "px")]]]) + " tip"
                                }, a)
                        }
                    )), ar(Tt.a, {
                        id: "861447350",
                        dynamic: ["".concat(.08 * A.item.width, "px"), "".concat(.11 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.14 * A.item.height, "px"), "".concat(.05 * A.item.height, "px"), "".concat(.008 * A.item.height, "px"), "".concat(.03 * A.item.height, "px"), null === t || void 0 === t ? void 0 : t.currentTeam, "".concat(.5 * A.item.width, "px")]
                    }, [".tipsWrapper.__jsx-style-dynamic-selector{position:absolute;left:".concat("".concat(.08 * A.item.width, "px"), ";top:", "".concat(.11 * A.item.height, "px"), ";line-height:", "".concat(.14 * A.item.height, "px"), ";text-align:left;}"), ".tip.__jsx-style-dynamic-selector{display:inline-block;margin:".concat("".concat(.008 * A.item.height, "px"), ";font-size:", "".concat(.14 * A.item.height, "px"), ";border-radius:", "".concat(.05 * A.item.height, "px"), ";padding:", "".concat(.008 * A.item.height, "px"), " ", "".concat(.03 * A.item.height, "px"), ";color:white;background-color:", t.currentTeam, ";max-width:", "".concat(.5 * A.item.width, "px"), ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}")]))
                }
                    , c = -1 != location.search.indexOf("conTable=") || -1 != location.search.indexOf("nickname=");
                return ar("div", {
                    className: "jsx-3945250113 cardBoardWrapper"
                }, ar("div", {
                    className: "jsx-3945250113 cardsWrapper"
                }, (c || t.player.isHost) && 0 === t.cards.length && "settings" === t.phase && ar("div", {
                    className: "jsx-3945250113 gameSetupWrapper"
                }, ar(rr, e)), t.cards.length > 0 && function(n) {
                    var r = "guess" === t.stage && "operative" === t.player.role && t.player.team === t.currentTeam && !t.gameover
                        , i = "spymaster" === t.player.role || t.gameover;
                    return ar("div", {
                        className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " grid-wrapper"
                    }, n.map((function(n, o) {
                            var c, R = Math.floor(o / 5), O = o - 5 * R, I = t.currentTeam === t.player.team && !n.revealed && !t.gameover;
                            n.word.length > 10 || n.word.length;
                            return ar("div", {
                                style: {
                                    left: "".concat(O * A.item.width, "px"),
                                    top: "".concat(R * A.item.height, "px")
                                },
                                key: "card-".concat(o),
                                className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " field"
                            }, n.selected && ar("div", {
                                className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " selected"
                            }), ar("div", {
                                key: "word-".concat(n.word),
                                onClick: I ? a(n) : null,
                                className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " " + "\n                                    card\n                                    ".concat(n.type && i ? n.type : "", " \n                                ")
                            }, !n.revealed && r && ar("div", {
                                onClick: (c = n.word,
                                        function(e) {
                                            e.stopPropagation(),
                                                E(c)
                                        }
                                ),
                                className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " turnCardButton"
                            }), !n.revealed && (null === n || void 0 === n ? void 0 : n.tips) && s(n), ar("div", {
                                className: Tt.a.dynamic([["2744077352", ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]]]) + " word"
                            }, n.word)))
                        }
                    )), ar(Tt.a, {
                        id: "2744077352",
                        dynamic: ["".concat(A.width, "px"), "".concat(A.height, "px"), "".concat(A.item.width, "px"), "".concat(A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(.01 * A.item.width, "px"), "".concat(.98 * A.item.width, "px"), "".concat(.98 * A.item.height, "px"), "".concat(.01 * A.item.height, "px"), "".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.18 * A.item.height, "px"), "".concat(.04 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "-".concat(.01 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), "".concat(.35 * A.item.height, "px"), ut.a.yellow]
                    }, [".grid-wrapper.__jsx-style-dynamic-selector{position:absolute;_background-color:yellow;width:".concat("".concat(A.width, "px"), ";height:", "".concat(A.height, "px"), ";}"), ".field.__jsx-style-dynamic-selector{box-sizing:border-box;position:absolute;_background-color:gray;z-index:1;width:".concat("".concat(A.item.width, "px"), ";height:", "".concat(A.item.height, "px"), ";padding:", "".concat(.01 * A.item.height, "px"), " ", "".concat(.01 * A.item.width, "px"), ";}"), ".card.__jsx-style-dynamic-selector{position:absolute;width:".concat("".concat(.98 * A.item.width, "px"), ";height:", "".concat(.98 * A.item.height, "px"), ";border-width:", "".concat(.01 * A.item.height, "px"), ';border-style:solid;border-color:transparent;border-radius:0.6rem;box-sizing:border-box;background-image:url("https://cdn.codenames.game/img/card/card-gray.png");background-size:cover;background-repeat:no-repeat;}'), '.card.black.__jsx-style-dynamic-selector{background-image:url("https://cdn.codenames.game/img/card/card-black.png");color:white;}', '.card.blue.__jsx-style-dynamic-selector{background-image:url("https://cdn.codenames.game/img/card/card-blue.png");}', '.card.red.__jsx-style-dynamic-selector{background-image:url("https://cdn.codenames.game/img/card/card-red.png");}', ".word.__jsx-style-dynamic-selector{position:absolute;left:0;right:0;bottom:".concat("".concat(e.scale.small ? .155 * A.item.height : .17 * A.item.height, "px"), ';font-family:"Futura-Bold-Cond";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:', "".concat(.18 * A.item.height, "px"), ";line-height:", "".concat(.18 * A.item.height, "px"), ";text-transform:uppercase;}"), ".selected.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;border-color:#58df4e;border-width:".concat("".concat(.04 * A.item.height, "px"), ";border-style:solid;border-radius:0.6rem;box-sizing:border-box;z-index:1;pointer-events:none;}"), ".turnCardButton.__jsx-style-dynamic-selector{position:absolute;right:".concat("-".concat(.01 * A.item.height, "px"), ";top:", "-".concat(.01 * A.item.height, "px"), ";width:", "".concat(.35 * A.item.height, "px"), ";height:", "".concat(.35 * A.item.height, "px"), ";background-color:", ut.a.yellow, ';border-radius:50%;background-image:url("https://cdn.codenames.game/img/icon/icon_tap_card.png");background-size:cover;cursor:pointer;z-index:11;}')]))
                }(t.cards)), ar(Tt.a, {
                    id: "3945250113"
                }, [".cardBoardWrapper.jsx-3945250113{position:relative;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".gameSetupWrapper.jsx-3945250113{text-align:left;max-width:400px;margin:1rem auto 0 auto;background-color:white;border-radius:1rem;overflow:hidden;}", ".gameover.jsx-3945250113{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);z-index:10;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".cardsWrapper.jsx-3945250113{position:relative;text-align:center;}"]))
            }
        ))
            , or = r.a.createElement
            , Er = function(e) {
            var t = Object(BA.a)().t
                , n = r.a.useState(!1)
                , A = Object(u.a)(n, 2)
                , a = A[0]
                , i = A[1];
            return or("div", {
                className: Tt.a.dynamic([["3225894922", [ut.a.yellow]]]) + " helpWrapper"
            }, or(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                maxWidth: 500,
                visible: a,
                placement: "bottom",
                onClickOutside: function(e, t) {
                    i(!1)
                },
                content: or("div", {
                    className: Tt.a.dynamic([["3225894922", [ut.a.yellow]]]) + " innerWrapper"
                }, or("div", {
                    dangerouslySetInnerHTML: {
                        __html: t(e.text)
                    },
                    className: Tt.a.dynamic([["3225894922", [ut.a.yellow]]])
                }))
            }, or("div", {
                onClick: function() {
                    console.log("toggleOpen", a),
                        i(!a)
                },
                className: Tt.a.dynamic([["3225894922", [ut.a.yellow]]]) + " button"
            })), or(Tt.a, {
                id: "3225894922",
                dynamic: [ut.a.yellow]
            }, [".helpWrapper.__jsx-style-dynamic-selector{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".button.__jsx-style-dynamic-selector{width:2rem;height:2rem;background-color:".concat(ut.a.yellow, ';border-radius:50%;background-image:url("https://cdn.codenames.game/img/icon/button_help.png");background-size:cover;cursor:pointer;}'), ".innerWrapper.__jsx-style-dynamic-selector{background-color:white;overflow-y:scroll;max-height:400px;padding:0.5rem 1rem;text-align:left;}"]))
        }
            , sr = r.a.createElement
            , cr = function(e) {
            var t = Object(BA.a)().t
                , n = -1 != location.search.indexOf("conTable=") || -1 != location.search.indexOf("nickname=")
                , A = function() {
                return !e.G.gameover && e.G.player.team === e.G.currentTeam && "spymaster" === e.G.player.role && "clue" === e.G.stage
            }
                , r = function() {
                return !e.G.gameover && e.G.player.team === e.G.currentTeam && "operative" === e.G.player.role && "guess" === e.G.stage
            }
                , a = (n || e.G.player.isHost) && "settings" === e.G.phase
                , i = !e.G.player.isHost && !e.G.player.team && "settings" === e.G.phase
                , o = !e.G.player.isHost && e.G.player.team && "settings" === e.G.phase
                , E = !e.G.player.team && "game" === e.G.phase
                , s = function() {
                if (e.G.gameover)
                    return t("log.gameover.".concat(e.G.gameover.team));
                if (a)
                    return t("instruction.hostSetup");
                if (i)
                    return t("instruction.setupNoTeam");
                if (o)
                    return t("instruction.setupWait");
                if (E) {
                    var n = e.G.currentTeam[0].toUpperCase() + e.G.currentTeam.slice(1)
                        , s = "clue" === e.G.stage ? "Spymaster" : "Operative";
                    return t("instruction.noTeam".concat(n).concat(s))
                }
                return A() ? t("instruction.giveClue") : r() ? t("instruction.tryCard") : e.G.player.team && e.G.player.team !== e.G.currentTeam && "guess" === e.G.stage ? t("instruction.waitForOpponentOperative") : e.G.player.team && e.G.player.team !== e.G.currentTeam && "clue" === e.G.stage ? t("instruction.waitForOpponentSpymaster") : e.G.player.team === e.G.currentTeam && "operative" === e.G.player.role && "clue" === e.G.stage ? t("instruction.waitForClue") : e.G.player.team === e.G.currentTeam && "spymaster" === e.G.player.role && "guess" === e.G.stage ? t("instruction.waitForGuessing") : null
            };
            return sr("div", {
                className: "jsx-1239912905 instructionBoardWrapper"
            }, s() && sr("div", {
                className: "jsx-1239912905 instructionWrapper"
            }, sr("div", {
                className: "jsx-1239912905 instruction"
            }, s())), r() && sr("div", {
                className: "jsx-1239912905 ml-1"
            }, sr(Er, {
                text: "help.tryCard"
            })), A() && sr("div", {
                className: "jsx-1239912905 ml-1"
            }, sr(Er, {
                text: "help.giveClue"
            })), function() {
                if (e.G.gameover)
                    return !0
            }() && sr("div", {
                className: "jsx-1239912905 ml-1"
            }, sr(Er, {
                text: "help.nextGame.".concat(e.G.player.isHost ? "host" : "others")
            })), sr(Tt.a, {
                id: "1239912905"
            }, [".instructionBoardWrapper.jsx-1239912905{margin:0.5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".instructionWrapper.jsx-1239912905{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1rem;text-align:center;margin:0.5rem 0;font-weight:800;}", "@media (min-width:768px){.instructionWrapper.jsx-1239912905{font-size:1.5rem;}}", ".instruction.jsx-1239912905{background-color:white;padding:0.2rem 1rem;border-radius:0.5rem;}", ".ml-1.jsx-1239912905{margin-left:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]))
        }
            , Rr = r.a.createElement
            , Or = function(e) {
            var t = r.a.useState("25rem")
                , n = Object(u.a)(t, 2)
                , A = n[0]
                , a = n[1]
                , i = Object(BA.a)().t
                , o = Object(s.a)(e.G.log);
            r.a.useEffect((function() {
                    var t = document.getElementById("teamBoard-blue");
                    if (!e.scale.small && t) {
                        var n = "".concat(Math.max(e.scale.scene.height - t.offsetHeight, 50), "px");
                        a(n)
                    }
                }
            ), [e.scale.scene.height]),
                r.a.useEffect((function() {
                        !function() {
                            var e = document.getElementById("logBoard");
                            e.scrollTop = e.scrollHeight
                        }()
                    }
                ), [e.G.log, e.scale.small]);
            var E = function(t) {
                var n, A;
                return null !== (n = null === (A = e.ctx.players.filter((function(e) {
                        return e.id === t
                    }
                ))[0]) || void 0 === A ? void 0 : A.name) && void 0 !== n ? n : "-"
            };
            return Rr("div", {
                id: "logBoard",
                className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " logBoardWrapper"
            }, Rr("p", {
                className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " title"
            }, i("log.title")), o.map((function(t, n) {
                    var r, a, o, s, c;
                    return "guess" === t.type ? Rr("article", {
                        key: "log-".concat(n),
                        dangerouslySetInnerHTML: {
                            __html: i("log.guess", {
                                playerName: E(t.data.playerID),
                                word: t.data.word
                            })
                        },
                        className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " " + "logEntry team-".concat(t.data.team, " card-").concat(t.data.wordColor)
                    }) : "clue" === t.type ? Rr("article", {
                        key: "log-".concat(n),
                        dangerouslySetInnerHTML: {
                            __html: i("log.clue", {
                                playerName: E(t.data.playerID),
                                word: null !== (a = null === (o = t.data) || void 0 === o ? void 0 : o.word) && void 0 !== a ? a : "",
                                number: null !== (s = null === (c = t.data) || void 0 === c ? void 0 : c.number) && void 0 !== s ? s : ""
                            })
                        },
                        className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " " + "logEntry team-".concat(t.data.team, " clue")
                    }) : "gameover" === t.type ? Rr("article", {
                        key: "log-".concat(n),
                        dangerouslySetInnerHTML: {
                            __html: i("log.gameover.".concat(t.data.team))
                        },
                        className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " " + "logEntry team-".concat(t.data.team, " gameover")
                    }) : "turnEnd" === t.type ? Rr("article", {
                        key: "log-".concat(n),
                        className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " " + "logEntry team-".concat(t.data.team, " turnEnd")
                    }, i("log.turnEnd.".concat(t.data.team))) : Rr("article", {
                        key: "log-".concat(n),
                        dangerouslySetInnerHTML: {
                            __html: i("log.".concat(t.type), {
                                playerName: E(t.data.playerID),
                                word: t.data.word,
                                number: null === (r = t.data) || void 0 === r ? void 0 : r.number
                            })
                        },
                        className: Tt.a.dynamic([["1333413560", [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]]]) + " " + "logEntry team-".concat(t.data.team)
                    })
                }
            )), Rr(Tt.a, {
                id: "1333413560",
                dynamic: [e.scale.small ? 0 : "1rem", e.scale.small ? 0 : "0.5rem", A, e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", e.scale.small ? "center" : "left", ut.a.normie]
            }, [".logBoardWrapper{background-color:white;box-sizing:border-box;border-radius:".concat(e.scale.small ? 0 : "1rem", ";margin-top:").concat(e.scale.small ? 0 : "0.5rem", ";-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:scroll;width:100%;max-height:").concat(A, ";").concat(e.scale.small ? "" : "\n                        border-radius: 0;\n                        border-top-left-radius: 1rem;\n                        border-bottom-left-radius: 1rem;\n                        border: solid 1px rgba(0,0,0,0.3);\n                        border-bottom: solid 3px rgba(0,0,0,0.3);\n                    ", ";}"), ".title{padding:0.2rem 0.5rem;margin:0 0 0.5rem 0;font-size:1.5rem;}", ".logEntry{padding:0.2rem;border-bottom:solid 1px white;font-size:0.8rem;text-align:".concat(e.scale.small ? "center" : "left", ";}"), ".team-red{background-color:#ffe7d5;}", ".team-blue{background-color:#cff9ff;}", ".team-red b{color:#c12005;}", ".team-blue b{color:#0079c5;}", ".card-red em{color:#c12005;text-transform:uppercase;font-style:normal;font-weight:800;}", ".card-blue em{color:#0079c5;text-transform:uppercase;font-style:normal;font-weight:800;}", ".card-gray em{color:".concat(ut.a.normie, ";text-transform:uppercase;font-style:normal;font-weight:800;}"), ".card-black em{color:black;text-transform:uppercase;font-style:normal;font-weight:800;}", ".clue em{text-transform:uppercase;font-style:normal;}", ".gameover{font-weight:800;text-align:center;text-transform:uppercase;}", ".gameover.team-red{color:#c12005;}", ".gameover.team-blue{color:#0079c5;}", ".start{text-align:center;}", ".turnEnd{text-align:center;color:white;padding:0.2rem 0;border:none;}", ".team-red.turnEnd{color:#c12005;border-bottom:solid 1px #c12005;}", ".team-blue.turnEnd{color:#0079c5;border-bottom:solid 1px #0079c5;}", ".gameover.team-red{color:#c12005;text-transform:uppercase;}", ".gameover.team-blue{color:#0079c5;text-transform:uppercase;}"]))
        }
            , Ir = (r.a.createElement,
            n("9lGw"))
            , Tr = n("5Sdk")
            , Sr = r.a.createElement
            , lr = function(e) {
            var t, n, A, a, E = Object(BA.a)().t, s = r.a.useState(!1), c = Object(u.a)(s, 2), R = c[0], O = c[1], I = "red" === e.G.player.team ? "blue" : "red";
            return Sr("div", {
                className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " wrapper"
            }, Sr(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                maxWidth: 500,
                visible: R,
                placement: "bottom",
                onClickOutside: function(e, t) {
                    O(!1)
                },
                content: Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " menuWrapper"
                }, Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " section"
                }, !(null === (t = e.G) || void 0 === t ? void 0 : null === (n = t.player) || void 0 === n ? void 0 : n.team) && Sr("h3", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }, E("playerprofile.prompt.jointeam")), e.G.player.team && Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " mt"
                }, Sr(St.a, {
                    onClick: (a = e.G.player,
                            function(t) {
                                var n = I
                                    , A = "operative" === e.G.player.role ? "operatives" : "spymasters";
                                e.moves.joinTeam(n, A, a.id),
                                    O(!1)
                            }
                    ),
                    color: I,
                    iconLeft: "https://cdn.codenames.game/img/icon/icon_".concat(I, "_").concat(e.G.player.role, ".png")
                }, E("playerprofile.switch.team.".concat(I)))), e.G.player.role && "spymaster" !== e.G.player.role && Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }, Sr(St.a, {
                    onClick: function(t) {
                        return function(n) {
                            e.moves.joinTeam(e.G.player.team, "spymasters", t.id),
                                O(!1)
                        }
                    }(e.G.player),
                    color: e.G.player.team,
                    iconLeft: "https://cdn.codenames.game/img/icon/icon_".concat(e.G.player.team, "_spymaster.png")
                }, E("playerprofile.switch.role"))), e.G.player.team && "spymaster" !== e.G.player.role && Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " mt"
                }, Sr(St.a, {
                    onClick: function(t) {
                        return function(n) {
                            e.moves.leaveTeam(t.id),
                                O(!1)
                        }
                    }(e.G.player),
                    color: "beige",
                    iconLeft: "https://cdn.codenames.game/img/icon/icon_spectator.png"
                }, E("playerprofile.switch.spectator")))), Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Sr(St.a, {
                    onClick: function(t) {
                        return function() {
                            var n = Object(o.a)(i.a.mark((function n(A) {
                                    return i.a.wrap((function(n) {
                                            for (; ; )
                                                switch (n.prev = n.next) {
                                                    case 0:
                                                        e.moves.leaveTeam(t.id),
                                                            ot.a.push("/"),
                                                            Object(rt.h)(e.gameID);
                                                    case 3:
                                                    case "end":
                                                        return n.stop()
                                                }
                                        }
                                    ), n)
                                }
                            )));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }()
                    }(e.G.player)
                }, E("playerprofile.leaveRoom"))), Sr("hr", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }), Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Sr(Ir.a, {
                    edit: !0,
                    updatePlayer: e.updatePlayer,
                    client: e.client,
                    G: e.G,
                    playerID: e.playerID,
                    gameID: e.gameID,
                    onSubmit: function() {
                        return O(!1)
                    }
                })), Sr("hr", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }), Sr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Sr(Tr.a, {
                    label: "language.switch.title"
                })))
            }, Sr("div", {
                className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
            }, Sr(St.a, {
                onClick: function() {
                    O(!R)
                },
                menuOpen: R,
                iconRight: "/smiley.svg",
                color: null !== (A = e.G.player.team) && void 0 !== A ? A : "beige"
            }, e.G.player.name, " -", " ", e.G.player.team ? E("playerprofile.".concat(e.G.player.team, ".").concat(e.G.player.role)) : E("playerprofile.spectator")))), Sr(Tt.a, {
                id: "1547545315"
            }, [".wrapper.jsx-1547545315{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;}", ".menuWrapper.jsx-1547545315{background-color:white;min-width:240px;}"]), Sr(Tt.a, {
                id: WA.a.__hash
            }, WA.a))
        }
            , Nr = r.a.createElement
            , ur = Object(A.memo)((function(e) {
                var t = Object(BA.a)().t
                    , n = function() {
                    var t = Object(o.a)(i.a.mark((function t() {
                            return i.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                            case 0:
                                                document.querySelector("#clip-input").select(),
                                                    document.execCommand("copy"),
                                                e.onSubmit && e.onSubmit();
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return Nr("div", {
                    className: "jsx-54894971 clipboard-wrap"
                }, Nr("input", {
                    id: "clip-input",
                    type: "text",
                    readOnly: !0,
                    value: location.href,
                    className: "jsx-54894971"
                }), Nr(St.a, {
                    style: {
                        whiteSpace: "nowrap",
                        alignSelf: "center"
                    },
                    onClick: n
                }, t("share.copyToClip")), Nr(Tt.a, {
                    id: "54894971"
                }, [".clipboard-wrap.jsx-54894971{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:80%;}", "#clip-input.jsx-54894971{font-size:1rem;padding:0.5rem 0.5rem;border-radius:1rem;border:solid 1px #a0a0a0;box-shadow:inset 2px 2px 0px 0px #c0c0c0;text-align:center;}", "@media screen and (min-width:501px){.clipboard-wrap.jsx-54894971{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}#clip-input.jsx-54894971{width:90%;}}"]))
            }
        ))
            , Lr = r.a.createElement
            , pr = function(e) {
            var t, n = Object(BA.a)().t, A = r.a.useState(!0), a = Object(u.a)(A, 2), i = a[0], o = a[1], E = r.a.useState(!1), s = Object(u.a)(E, 2), c = s[0], R = s[1];
            r.a.useEffect((function() {
                    return function() {
                        t && clearTimeout(t)
                    }
                }
            ), []);
            var O, I = function(t) {
                return function() {
                    e.client.updatePlayer({
                        isHost: !0
                    }, t)
                }
            };
            return Lr("div", {
                className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " wrapper"
            }, Lr(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                maxWidth: 500,
                visible: i,
                onClickOutside: function(e, t) {
                    o(!1)
                },
                content: Lr("div", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " menuWrapper"
                }, Lr("div", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " share-wrap"
                }, Lr("h3", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " blue"
                }, n("modal.share.url.title")), Lr(ur, {
                    label: "button.share",
                    message: "clipboard.copied",
                    onSubmit: function() {
                        o(!1),
                            R(!0),
                            t = setTimeout((function() {
                                    return R(!1)
                                }
                            ), 1500)
                    }
                })), Lr("hr", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
                }), e.ctx.players && e.ctx.players.length > 0 && Lr("div", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " section bg-gray pb-2"
                }, Lr("h3", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
                }, n("playerlist.title")), e.ctx.players.filter((function(t) {
                        return !t.isHidden || e.G.player.data.isAdmin
                    }
                )).map((function(t, A) {
                        var r, a = t.id, i = t.name, o = t.isConnected, E = t.isHost;
                        return Lr("div", {
                            key: i + String(A),
                            className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " " + "player ".concat(a == e.G.player.id ? "current" : "", " ").concat(E ? "host" : "")
                        }, Lr("img", {
                            src: "https://cdn.codenames.game/img/icon/icon_status_".concat(o ? "online" : "offline").concat(a == e.G.player.id ? "_active" : "", ".png"),
                            className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " icon-status"
                        }), i, e.G.player.isHost && a != e.G.player.id && Lr("div", {
                            onClick: (r = a,
                                    function() {
                                        e.client.sendEvent("kickPlayer", r)
                                    }
                            ),
                            className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " smallbtn"
                        }, n("playerlist.kickPlayer")), e.G.player.isHost && !E && Lr("div", {
                            onClick: I(a),
                            className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " smallbtn"
                        }, n("playerlist.makeHost")))
                    }
                ))), e.G.player.isHost && Lr(r.a.Fragment, null, Lr("hr", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
                }), Lr("div", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " section bg-gray"
                }, Lr(St.a, {
                    onClick: (O = "resetTeams",
                            function(t) {
                                console.log("handleButton", O),
                                "resetTeams" === O && (e.moves.resetTeams(),
                                    o(!1))
                            }
                    )
                }, n("button.resetTeams")))))
            }, Lr("div", {
                className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
            }, Lr(gA, {
                animation: "shift-away",
                theme: "dark",
                visible: c,
                placement: "top",
                content: Lr("span", {
                    className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
                }, n("share.copied"))
            }, Lr("div", {
                className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash)
            }, Lr(St.a, {
                onClick: function() {
                    o(!i)
                },
                menuOpen: i
            }, Lr("div", {
                className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " button-content"
            }, n("button.playersList"), " ", Lr("img", {
                src: "https://cdn.codenames.game/img/icon/icon_player.png",
                className: "jsx-2362784411 " + "jsx-".concat(WA.a.__hash) + " button-icon"
            }), " ", e.ctx.players.filter((function(e) {
                    return !e.isHidden
                }
            )).length)))))), Lr(Tt.a, {
                id: "2362784411"
            }, [".wrapper.jsx-2362784411{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".menuWrapper.jsx-2362784411{background-color:white;min-width:320px;}", "h3.jsx-2362784411{margin:0 0 0.5rem 0;text-align:center;}", ".blue.jsx-2362784411{color:#0024ff;}", ".share-wrap.jsx-2362784411{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1rem;}", ".button-content.jsx-2362784411{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".button-icon.jsx-2362784411{margin:0 0.2rem 0 0.8rem;height:1rem;}", ".player.jsx-2362784411{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".player.current.jsx-2362784411{font-weight:bold;}", ".player.host.jsx-2362784411{font-style:italic;}", ".icon-status.jsx-2362784411{width:1rem;height:1rem;}", ".pb-2.jsx-2362784411{padding-bottom:1.2rem;}", ".smallbtn.jsx-2362784411{border:solid 1px #ccc;border-radius:5px;padding:0px 5px;font-weight:normal;font-style:normal;margin-left:10px;font-size:0.8em;cursor:pointer;}", ".smallbtn.jsx-2362784411:hover{background-color:#ddd;}"]), Lr(Tt.a, {
                id: WA.a.__hash
            }, WA.a))
        }
            , dr = r.a.createElement
            , fr = function(e) {
            var t = r.a.useState(!1)
                , n = Object(u.a)(t, 2)
                , A = n[0]
                , a = n[1]
                , i = Object(BA.a)().t;
            return dr("div", {
                className: "jsx-3048812989 wrapper"
            }, dr(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                maxWidth: 500,
                placement: "bottom-end",
                visible: A,
                onClickOutside: function(e, t) {
                    a(!1)
                },
                content: dr("div", {
                    className: "jsx-3048812989 menuWrapper"
                }, dr("h3", {
                    className: "jsx-3048812989"
                }, i("gamesettings.title")), dr("div", {
                    className: "jsx-3048812989"
                }, dr("div", {
                    className: "jsx-3048812989 mb1"
                }, dr(rr, Object(lt.a)({}, e, {
                    onSubmit: function() {
                        return a(!1)
                    }
                })))))
            }, dr("div", {
                className: "jsx-3048812989"
            }, dr(St.a, {
                onClick: function() {
                    a(!A)
                },
                menuOpen: A
            }, e.G.gameover ? i("button.nextGame") : i("button.gameSettings")))), dr(Tt.a, {
                id: "3048812989"
            }, [".wrapper.jsx-3048812989{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".menuWrapper.jsx-3048812989{background-color:white;overflow-y:scroll;max-height:400px;padding:0.5rem 1rem;}", "@media (min-width:900px){.menuWrapper.jsx-3048812989{max-height:800px;}}", ".flexrow.jsx-3048812989{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", "h3.jsx-3048812989{margin:0 0 0.5rem 0;}", ".mb1.jsx-3048812989{margin-bottom:1rem;}", ".center.jsx-3048812989{text-align:center;}", ".button-icon.jsx-3048812989{height:1rem;}"]))
        }
            , hr = r.a.createElement
            , Kr = function(e) {
            Object(BA.a)().t;
            var t = r.a.useState(!1)
                , n = Object(u.a)(t, 2)
                , A = n[0]
                , a = n[1]
                , i = function() {
                a(!A)
            };
            return hr("div", {
                className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " wrapper"
            }, hr(gA, {
                interactive: !0,
                interactiveBorder: 5,
                delay: 100,
                animation: "shift-away",
                theme: "codenames",
                maxWidth: 300,
                visible: A,
                placement: "bottom",
                onClickOutside: function(e, t) {
                    a(!1)
                },
                content: hr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " menuWrapper"
                }, hr("div", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash) + " section"
                }, hr("p", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }, "Removes all offline players and prepares table for a new game setup."), hr("p", {
                    className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
                }, "Warning - resets current running game!"), hr(St.a, {
                    onClick: function() {
                        e.moves.resetTable(),
                            setTimeout((function() {
                                    e.moves.resetTeams()
                                }
                            ), 50),
                            setTimeout((function() {
                                    e.ctx.players.filter((function(e) {
                                            return !e.isConnected
                                        }
                                    )).map((function(t) {
                                            e.client.sendEvent("kickPlayer", t.id)
                                        }
                                    ))
                                }
                            ), 200),
                            i()
                    },
                    menuOpen: !1
                }, "Confirm reset table")))
            }, hr("div", {
                className: "jsx-1547545315 " + "jsx-".concat(WA.a.__hash)
            }, hr(St.a, {
                onClick: i,
                menuOpen: A
            }, "Reset table"))), hr(Tt.a, {
                id: "1547545315"
            }, [".wrapper.jsx-1547545315{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;}", ".menuWrapper.jsx-1547545315{background-color:white;min-width:240px;}"]), hr(Tt.a, {
                id: WA.a.__hash
            }, WA.a))
        }
            , Pr = r.a.createElement
            , mr = function(e) {
            var t, n;
            return Pr("div", {
                className: Tt.a.dynamic([["3131621031", ["".concat(null !== (t = e.size) && void 0 !== t ? t : 1, "rem")]]]) + " gap"
            }, Pr(Tt.a, {
                id: "3131621031",
                dynamic: ["".concat(null !== (t = e.size) && void 0 !== t ? t : 1, "rem")]
            }, [".gap.__jsx-style-dynamic-selector{width:".concat("".concat(null !== (n = e.size) && void 0 !== n ? n : 1, "rem"), ";}")]))
        }
            , Ur = function(e) {
            var t = -1 != location.search.indexOf("conTable=") || -1 != location.search.indexOf("nickname=");
            return Pr("nav", {
                className: "jsx-2781971296 nav"
            }, Pr("div", {
                className: "jsx-2781971296 buttons"
            }, Pr("div", {
                className: "jsx-2781971296 left"
            }, Pr(pr, e)), Pr("div", {
                className: "jsx-2781971296 right"
            }, (t || e.G.player.isHost) && "settings" !== e.G.phase ? Pr(r.a.Fragment, null, t && Pr(Kr, e), Pr(fr, e)) : null, Pr(mr, {
                size: .5
            }), Pr(lr, e))), Pr(Tt.a, {
                id: "2781971296"
            }, [".buttons.jsx-2781971296{margin:0.2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".left.jsx-2781971296,.center.jsx-2781971296,.right.jsx-2781971296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]))
        }
            , Cr = r.a.createElement
            , Mr = function(e) {
            var t = Object(BA.a)().t
                , n = !e.isConnected
                , A = e.connection
                , a = n ? "disconnected" : "synced" !== A.status ? "syncing" : "hidden";
            return Cr("div", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]]) + " " + "statusBoardWrapper ".concat(a)
            }, Cr("div", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]]) + " content"
            }, "disconnected" === a && Cr(r.a.Fragment, null, Cr("p", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]])
            }, t("status.disconnected.title")), Cr(St.a, {
                onClick: function() {
                    window.location = window.location
                }
            }, t("status.disconnected.button"))), "syncing" === a && Cr(r.a.Fragment, null, Cr("p", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]])
            }, t("status.syncing.title"))), "maintanence" === a && Cr(r.a.Fragment, null, Cr("p", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]])
            }, "We are sorry to interupt your game."), Cr("p", {
                className: Tt.a.dynamic([["738367717", [ut.a.red]]])
            }, "Game servers will go under maintanence in few minutes."))), Cr(Tt.a, {
                id: "738367717",
                dynamic: [ut.a.red]
            }, [".statusBoardWrapper.__jsx-style-dynamic-selector{width:100%;-webkit-transition:200ms all;transition:200ms all;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".disconnected.__jsx-style-dynamic-selector{background-color:".concat(ut.a.red, ";height:3rem;}"), ".syncing.__jsx-style-dynamic-selector{background-color:#ff881e;height:1.5rem;}", ".maintanence.__jsx-style-dynamic-selector{background-color:#ff881e;height:3rem;}", ".maintanence.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".hidden.__jsx-style-dynamic-selector{height:0;}", ".content.__jsx-style-dynamic-selector{text-align:center;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-right:1rem;}"]))
        }
            , Dr = r.a.createElement;
        function yr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function gr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yr(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        var Br = function(e) {
            var t = Nt()
                , n = function(e) {
                var t = e.small ? e.scene.width : e.scene.width / 12 * 8
                    , n = {
                    cols: 5,
                    rows: 5,
                    width: t,
                    height: t / 1.55,
                    gap: {
                        x: 0,
                        y: 0
                    },
                    item: {
                        width: 0,
                        height: 0
                    }
                };
                return n.item = {
                    width: n.width / n.cols,
                    height: n.height / n.cols
                },
                    n.gap = {
                        x: .01 * n.item.width + .01 * n.item.height,
                        y: .01 * n.item.height + .01 * n.item.height
                    },
                    n
            }(t)
                , A = .5 * t.window.width - .5 * n.width
                , a = t.small ? .25 * t.window.width : (t.window.width - t.scene.width / 12 * 8) / 2
                , i = function() {
                var r, a, i, o, E, c, R = function(e, r) {
                    var a = "0px"
                        , i = 16;
                    return -1 === e.position[0] ? t.small ? (a = .5 * t.window.width + "px",
                        i = -500) : ("red" === e.type && (a = t.scene.width / 12 - .9 * n.item.width * .5 + "px"),
                    "blue" === e.type && (a = t.window.width - 1.1 * n.item.width + "px"),
                    "gray" !== e.type && "black" != e.type || (a = .5 * t.window.width + "px",
                        i = -500)) : a = A + n.gap.x + e.position[0] * n.item.width + "px",
                        {
                            left: a,
                            top: -1 === e.position[1] ? i + "px" : n.gap.y + e.position[1] * n.item.height + "px"
                        }
                }, O = function(e) {
                    e.target.classList.toggle("peak")
                }, I = Object(s.a)(null === (r = e.G.tokens) || void 0 === r ? void 0 : r.red).reverse(), T = Object(s.a)(null === (a = e.G.tokens) || void 0 === a ? void 0 : a.blue).reverse();
                return Dr("div", {
                    className: Tt.a.dynamic([["4077473253", ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]]]) + " tokensWrapper"
                }, null === I || void 0 === I ? void 0 : I.map((function(e, t) {
                        var r = R(e);
                        return Dr("div", {
                            onClick: -1 === e.position[0] ? null : O,
                            key: "red-card-".concat(t),
                            style: gr(gr({}, r), {}, {
                                backgroundImage: ' url("https://cdn.codenames.game/img/card/card-'.concat(e.type, "-back-").concat(e.img, '.png")')
                            }),
                            className: Tt.a.dynamic([["4077473253", ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]]]) + " tokenWrapper red"
                        })
                    }
                )), null === T || void 0 === T ? void 0 : T.map((function(e, t) {
                        var r = R(e);
                        return Dr("div", {
                            onClick: -1 === e.position[0] ? null : O,
                            key: "blue-card-".concat(t),
                            style: gr(gr({}, r), {}, {
                                backgroundImage: ' url("https://cdn.codenames.game/img/card/card-'.concat(e.type, "-back-").concat(e.img, '.png")')
                            }),
                            className: Tt.a.dynamic([["4077473253", ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]]]) + " tokenWrapper blue"
                        })
                    }
                )), null === (i = e.G.tokens) || void 0 === i ? void 0 : null === (o = i.gray) || void 0 === o ? void 0 : o.map((function(e, t) {
                        var r = R(e);
                        return Dr("div", {
                            key: "gray-card-".concat(t),
                            onClick: -1 === e.position[0] ? null : O,
                            style: gr(gr({}, r), {}, {
                                backgroundImage: ' url("https://cdn.codenames.game/img/card/card-'.concat(e.type, '-back.png")')
                            }),
                            className: Tt.a.dynamic([["4077473253", ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]]]) + " tokenWrapper gray"
                        })
                    }
                )), null === (E = e.G.tokens) || void 0 === E ? void 0 : null === (c = E.black) || void 0 === c ? void 0 : c.map((function(e, t) {
                        var r = R(e);
                        return Dr("div", {
                            key: "black-card-".concat(t),
                            onClick: -1 === e.position[0] ? null : O,
                            style: gr(gr({}, r), {}, {
                                backgroundImage: ' url("https://cdn.codenames.game/img/card/card-'.concat(e.type, '-back.png")')
                            }),
                            className: Tt.a.dynamic([["4077473253", ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]]]) + " tokenWrapper black"
                        })
                    }
                )), Dr(Tt.a, {
                    id: "4077473253",
                    dynamic: ["".concat(.98 * n.item.width, "px"), "".concat(.98 * n.item.height, "px"), "".concat(.05 * n.item.height, "px"), ut.a.red, ut.a.blue, ut.a.normieLight, A + "px", n.gap.x + "px"]
                }, [".tokensWrapper.__jsx-style-dynamic-selector{position:absolute;width:100%;height:100%;pointer-events:none;}", ".tokenWrapper.__jsx-style-dynamic-selector{position:absolute;width:".concat("".concat(.98 * n.item.width, "px"), ";height:", "".concat(.98 * n.item.height, "px"), ";border-radius:", "".concat(.05 * n.item.height, "px"), ";background-size:cover;-webkit-transition:all 500ms;transition:all 500ms;color:white;z-index:2;-webkit-transform:translate(-1%,-1%);-ms-transform:translate(-1%,-1%);transform:translate(-1%,-1%);-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;pointer-events:auto;overflow:hidden;opacity:1;}"), ".tokenWrapper.red.__jsx-style-dynamic-selector{background-color:".concat(ut.a.red, ";}"), ".tokenWrapper.blue.__jsx-style-dynamic-selector{background-color:".concat(ut.a.blue, ";}"), ".tokenWrapper.gray.__jsx-style-dynamic-selector{background-color:".concat(ut.a.normieLight, ";}"), ".tokenWrapper.black.__jsx-style-dynamic-selector{background-color:black;}", ".tokenWrapper.peak.__jsx-style-dynamic-selector{-webkit-transform:translate(-1%,-1%) scale(1,0.5);-ms-transform:translate(-1%,-1%) scale(1,0.5);transform:translate(-1%,-1%) scale(1,0.5);}", ".messure.__jsx-style-dynamic-selector{position:absolute;left:".concat(A + "px", ";width:").concat(n.gap.x + "px", ";height:100%;background-color:rgba(0,255,255,0.5);}")]))
            };
            return Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " layoutWrapper"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row"
            }, Dr(Mr, e)), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col w100 header"
            }, Dr(Ur, e), Dr(cr, e))), t.small && Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row center"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col w12"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " gridH"
            }, Dr(ir, Object(lt.a)({
                grid: n,
                scale: t
            }, e))), Dr(xA, Object(lt.a)({
                grid: n,
                scale: t
            }, e))), i()), !t.small && Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row flex"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col teamBoardSidebars"
            }, Dr(vA, Object(lt.a)({
                team: "red",
                grid: n,
                scale: t,
                sidebarWidth: a
            }, e, {
                left: !0
            }))), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col w8"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " gridH"
            }, Dr(ir, Object(lt.a)({
                grid: n,
                scale: t
            }, e))), Dr(xA, Object(lt.a)({
                grid: n,
                scale: t
            }, e))), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col teamBoardSidebars flex"
            }, Dr(vA, Object(lt.a)({
                team: "blue",
                grid: n,
                scale: t,
                sidebarWidth: a
            }, e, {
                right: !0
            })), Dr(Or, Object(lt.a)({}, e, {
                scale: t,
                grid: n
            }))), i()), t.small && Dr(r.a.Fragment, null, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col teamboard-small"
            }, Dr(vA, Object(lt.a)({
                team: "red",
                grid: n,
                scale: t,
                sidebarWidth: a
            }, e))), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col log-small"
            }, Dr(Or, Object(lt.a)({}, e, {
                scale: t,
                grid: n,
                small: !0
            }))), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " col teamboard-small"
            }, Dr(vA, Object(lt.a)({
                team: "blue",
                grid: n,
                scale: t,
                sidebarWidth: a
            }, e)))), Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " row center"
            }, Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " creditsWrapper__small"
            }, Dr("a", {
                href: "https://czechgames.com/",
                target: "_blank",
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " credits"
            }, Dr("img", {
                src: "https://cdn.codenames.game/img/cge-logo.svg",
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]])
            }))))), !t.small && Dr("div", {
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " creditsWrapper"
            }, Dr("a", {
                href: "https://czechgames.com/",
                target: "_blank",
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]]) + " credits"
            }, Dr("img", {
                src: "https://cdn.codenames.game/img/cge-logo.svg",
                className: Tt.a.dynamic([["463522150", ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]]])
            }))), Dr(Tt.a, {
                id: "463522150",
                dynamic: ["".concat(a, "px"), "".concat(.1 * t.scene.height, "px"), "".concat(.8 * t.scene.height, "px"), "".concat(n.height, "px"), "".concat(a, "px"), "".concat(t.scene.width / 12 * 8, "px"), "".concat(t.scene.width, "px")]
            }, [".row.__jsx-style-dynamic-selector{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".row.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".row.center.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".col.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;}", ".teamboard-small.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 ".concat("".concat(a, "px"), ";-ms-flex:0 0 ", "".concat(a, "px"), ";flex:0 0 ", "".concat(a, "px"), ";-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}"), ".log-small.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".minh10.__jsx-style-dynamic-selector{min-height:".concat("".concat(.1 * t.scene.height, "px"), ";}"), ".hf80.__jsx-style-dynamic-selector{height:".concat("".concat(.8 * t.scene.height, "px"), ";}"), ".gridH.__jsx-style-dynamic-selector{min-height:".concat("".concat(n.height, "px"), ";}"), ".teamBoardSidebars.__jsx-style-dynamic-selector{width:".concat("".concat(a, "px"), ";max-width:240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}"), ".w8.__jsx-style-dynamic-selector{width:".concat("".concat(t.scene.width / 12 * 8, "px"), ";}"), ".w12.__jsx-style-dynamic-selector{width:".concat("".concat(t.scene.width, "px"), ";}"), ".w100.__jsx-style-dynamic-selector{width:100%;}", ".layoutWrapper.__jsx-style-dynamic-selector{position:relative;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;}", ".creditsWrapper.__jsx-style-dynamic-selector{position:absolute;left:12px;bottom:12px;}", ".creditsWrapper__small.__jsx-style-dynamic-selector{padding:12px 0;text-align:center;}", ".credits.__jsx-style-dynamic-selector{display:block;color:white;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}", ".credits.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:60px;}", ".credits.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{line-height:14px;-webkit-text-decoration:none;text-decoration:none;}", ".credits.__jsx-style-dynamic-selector:hover span.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;}"]))
        }
            , Gr = r.a.createElement
            , vr = function(e) {
            var t, n, A = r.a.useState(!1), a = Object(u.a)(A, 2), i = a[0], o = a[1], E = Object(BA.a)().t, s = null, c = null, R = null;
            r.a.useEffect((function() {
                    return window.addEventListener("click", O),
                        window.addEventListener("scroll", O),
                        window.addEventListener("keydown", O),
                        window.addEventListener("resize", O),
                        window.addEventListener("mousemove", O),
                        window.addEventListener("touchstart", O),
                        O(),
                        function() {
                            window.onbeforeunload = void 0,
                                window.removeEventListener("click", O),
                                window.removeEventListener("scroll", O),
                                window.removeEventListener("keydown", O),
                                window.removeEventListener("resize", O),
                                window.removeEventListener("mousemove", O),
                                window.removeEventListener("touchstart", O)
                        }
                }
            ), []);
            var O = function() {
                R || (R = setTimeout((function() {
                        clearTimeout(s),
                            s = setTimeout((function() {
                                    o(!0)
                                }
                            ), At.e),
                            clearTimeout(c),
                            c = setTimeout((function() {
                                    e.setStatus("inactive")
                                }
                            ), At.b),
                            clearTimeout(R),
                            R = null
                    }
                ), 300))
            };
            return Gr("div", {
                className: Tt.a.dynamic([["1487011315", [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]]]) + " gameBoardWrapper"
            }, Gr(Br, e), i && Gr("div", {
                onClick: function() {
                    return o(!1)
                },
                className: Tt.a.dynamic([["1487011315", [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]]]) + " activityWarning"
            }, Gr("div", {
                className: Tt.a.dynamic([["1487011315", [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]]]) + " activityWarning-modal"
            }, Gr("h1", {
                className: Tt.a.dynamic([["1487011315", [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]]])
            }, E("activity.warning.title")), Gr("p", {
                className: Tt.a.dynamic([["1487011315", [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]]])
            }, E("activity.warning.description")), Gr(St.a, {
                onClick: function() {
                    return o(!1)
                }
            }, E("activity.warning.button")))), Gr(Tt.a, {
                id: "1487011315",
                dynamic: [null !== (t = e.G.currentTeam) && void 0 !== t ? t : "red"]
            }, ['.gameBoardWrapper.__jsx-style-dynamic-selector{position:absolute;width:100%;min-height:100%;top:0;left:0;right:0;background-image:url("https://cdn.codenames.game/img/bg-'.concat(null !== (n = e.G.currentTeam) && void 0 !== n ? n : "red", '.jpg");background-size:cover;}'), ".footer.__jsx-style-dynamic-selector{position:absolute;bottom:1rem;left:1rem;color:white;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}", ".footer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:60px;}", ".footer.__jsx-style-dynamic-selector:hover span.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;}", ".activityWarning.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:999;}", ".activityWarning-modal.__jsx-style-dynamic-selector{box-sizing:border-box;max-width:90%;background-color:white;box-shadow:0.2rem 0.2rem 1px 0px rgba(0,0,0,0.5);padding:1rem 2rem;border-radius:1rem;text-align:center;z-index:999;}"]))
        };
        function br(e) {
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return Hr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Hr(e, t)
                }(e))) {
                    var t = 0
                        , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var A, r, a = !0, i = !1;
            return {
                s: function() {
                    A = e[Symbol.iterator]()
                },
                n: function() {
                    var e = A.next();
                    return a = e.done,
                        e
                },
                e: function(e) {
                    i = !0,
                        r = e
                },
                f: function() {
                    try {
                        a || null == A.return || A.return()
                    } finally {
                        if (i)
                            throw r
                    }
                }
            }
        }
        function Hr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, A = new Array(t); n < t; n++)
                A[n] = e[n];
            return A
        }
        function xr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(e);
                t && (A = A.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, A)
            }
            return n
        }
        function Vr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xr(Object(n), !0).forEach((function(t) {
                        Object(E.a)(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }
        function wr(e, t) {
            var n = new Array(t)
                , A = e.length
                , r = new Array(A);
            if (t > A)
                throw new RangeError("getRandom: more elements taken than available");
            for (; t--; ) {
                var a = Math.floor(Math.random() * A);
                n[t] = e[a in r ? r[a] : a],
                    r[a] = --A in r ? r[A] : A
            }
            return n
        }
        var kr = function(e, t) {
            var n = wr(e, t)
                , A = e.filter((function(e) {
                    return -1 === n.indexOf(e)
                }
            ));
            return [n, A]
        }
            , Fr = function(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1))
                    , A = [e[n], e[t]];
                e[t] = A[0],
                    e[n] = A[1]
            }
        }
            , Zr = function(e) {
            e.cards = e.cards.map((function(e) {
                    return e.tips = [],
                        e
                }
            ))
        }
            , Jr = function(e, t) {
            e.cards = e.cards.map((function(e) {
                    return -1 === t.indexOf(e.word) || e.revealed ? Vr(Vr({}, e), {}, {
                        selected: !1
                    }) : Vr(Vr({}, e), {}, {
                        selected: !0
                    })
                }
            ))
        }
            , jr = function(e, t) {
            t.time = Date.now(),
                e.log.push(t)
        }
            , Yr = function(e, t, n) {
            jr(e, {
                type: "gameover",
                data: {
                    team: t,
                    reason: n
                }
            }),
                e.gameover = {
                    team: t,
                    reason: n
                }
        }
            , Wr = function(e, t, n) {
            var A = e.currentTeam;
            e.currentTeam = "red" === A ? "blue" : "red",
                e.clue = {
                    clue: null,
                    number: null
                },
                Zr(e),
                e.stage = "clue"
        }
            , _r = function(e) {
            e.teams.red.operatives = [].concat(Object(s.a)(e.teams.red.operatives), Object(s.a)(e.teams.red.spymasters)),
                e.teams.red.spymasters = [],
                e.teams.blue.operatives = [].concat(Object(s.a)(e.teams.blue.operatives), Object(s.a)(e.teams.blue.spymasters)),
                e.teams.blue.spymasters = []
        }
            , zr = function(e) {
            e.cards = [],
                e.tokens = {
                    red: [],
                    blue: [],
                    gray: [],
                    black: []
                },
                e.gameover = null,
                e.clue = {
                    clue: null,
                    number: null
                },
                e.guessLimit = -1,
                e.guesses = -1,
                e.score = null,
            e.banBuffer || (e.banBuffer = []),
                _r(e)
        }
            , Xr = function() {
            return {
                name: "codenames",
                setup: function(e) {
                    return {
                        teams: {
                            red: {
                                operatives: [],
                                spymasters: []
                            },
                            blue: {
                                operatives: [],
                                spymasters: []
                            }
                        },
                        currentTeam: null,
                        settings: {
                            cardPacks: [],
                            packsLanguage: "",
                            locked: !1
                        },
                        cards: [],
                        clue: {
                            clue: null,
                            number: null
                        },
                        guessLimit: -1,
                        guesses: -1,
                        log: [],
                        tokens: {
                            red: [],
                            blue: [],
                            gray: [],
                            black: []
                        },
                        phase: "settings",
                        stage: null,
                        gameover: null,
                        gameMode: "regular",
                        banBuffer: []
                    }
                },
                moves: {
                    clueGiven: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            var A = {
                                type: "clue",
                                data: {
                                    playerID: n,
                                    team: e.currentTeam,
                                    word: e.clue.word,
                                    number: e.clue.number
                                }
                            };
                            jr(e, A),
                                Jr(e, []),
                                e.stage = "guess";
                            var r = 0 !== Number(e.clue.number) && Number.isInteger(Number(e.clue.number)) ? Number(e.clue.number) + 1 : -1;
                            e.guessLimit = r,
                                e.guesses = 0,
                                t.events.endTurn()
                        }
                    },
                    setClueWord: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            e.clue.word = n
                        }
                    },
                    setClueNumber: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            e.clue.number = n,
                                Jr(e, [])
                        }
                    },
                    selectClueCard: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            var A = function(e, t) {
                                var n = e.cards.filter((function(e) {
                                        return e.selected && e.word
                                    }
                                )).map((function(e) {
                                        return e.word
                                    }
                                ));
                                return -1 !== n.indexOf(t) ? [].concat(Object(s.a)(n.splice(0, n.indexOf(t))), Object(s.a)(n.splice(n.indexOf(t) + 1))) : [].concat(Object(s.a)(n), [t])
                            }(e, n);
                            Jr(e, A),
                                e.clue.number = A.length
                        }
                    },
                    editLogEvent: function(e, t, n, A) {
                        e.log[n] = Vr(Vr({}, e.log[n]), A)
                    },
                    tipCard: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n, A) {
                            e.cards = e.cards.map((function(e) {
                                    if (e.word === n) {
                                        var t = [];
                                        t = -1 !== e.tips.indexOf(A) ? e.tips.filter((function(e) {
                                                return e !== A
                                            }
                                        )) : [].concat(Object(s.a)(e.tips), [A]),
                                            e.tips = t
                                    }
                                    return e
                                }
                            )),
                                t.events.endTurn()
                        }
                    },
                    guessCard: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n, A) {
                            var r = {
                                type: "guess",
                                data: {
                                    playerID: A,
                                    team: e.currentTeam,
                                    word: n,
                                    wordColor: null
                                }
                            };
                            e.guesses = e.guesses + 1,
                                e.cards = e.cards.map((function(t, a) {
                                        if (t.word === n) {
                                            if (t.revealed)
                                                return;
                                            if (t.revealed = !0,
                                                function(e, t, n) {
                                                    var A, r = br(e.tokens[t]);
                                                    try {
                                                        for (r.s(); !(A = r.n()).done; ) {
                                                            var a = A.value;
                                                            if (-1 === a.position[0]) {
                                                                var i = Math.floor(n / 5);
                                                                a.position = [n - 5 * i, i];
                                                                break
                                                            }
                                                        }
                                                    } catch (o) {
                                                        r.e(o)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }(e, t.type, a),
                                                r.data.wordColor = t.type,
                                                jr(e, r),
                                            "black" === t.type)
                                                Yr(e, "red" === e.currentTeam ? "blue" : "red", "assasin");
                                            else if (t.type !== e.currentTeam)
                                                Wr(e);
                                            else if (-1 !== e.guessLimit && (e.guessLimit = e.guessLimit - 1),
                                            0 === e.guessLimit) {
                                                var i = {
                                                    type: "guessLimit",
                                                    data: {
                                                        playerID: A,
                                                        team: e.currentTeam
                                                    }
                                                };
                                                jr(e, i),
                                                    Wr(e)
                                            }
                                        }
                                        return t
                                    }
                                )),
                                function(e) {
                                    e.score = e.cards.reduce((function(e, t) {
                                            return "red" !== t.type || t.revealed || (e.red = e.red + 1),
                                            "blue" !== t.type || t.revealed || (e.blue = e.blue + 1),
                                                e
                                        }
                                    ), {
                                        red: 0,
                                        blue: 0
                                    })
                                }(e),
                                function(e, t) {
                                    if (0 === e.score.red) {
                                        t.players.reduce((function(t, n) {
                                                return -1 !== e.teams.red.operatives.indexOf(String(n.id)) && (t += "".concat("" === t ? "" : ", ").concat(n.name)),
                                                -1 !== e.teams.red.spymasters.indexOf(String(n.id)) && (t += "".concat("" === t ? "" : ", ").concat(n.name)),
                                                    t
                                            }
                                        ), "");
                                        Yr(e, "red", "score")
                                    }
                                    if (0 === e.score.blue) {
                                        t.players.reduce((function(t, n) {
                                                return -1 !== e.teams.blue.operatives.indexOf(String(n.id)) && (t += "".concat("" === t ? "" : ", ").concat(n.name)),
                                                -1 !== e.teams.blue.spymasters.indexOf(String(n.id)) && (t += "".concat("" === t ? "" : ", ").concat(n.name)),
                                                    t
                                            }
                                        ), "");
                                        Yr(e, "blue", "score")
                                    }
                                }(e, t),
                                t.events.endTurn()
                        }
                    },
                    endGuessing: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            var A = {
                                type: "endGuess",
                                data: {
                                    playerID: n,
                                    team: e.currentTeam
                                }
                            };
                            jr(e, A),
                                Wr(e),
                                e.guessLimit = -1,
                                e.guesses = -1,
                                t.events.endTurn()
                        }
                    },
                    resetTable: {
                        client: !1,
                        unduable: !1,
                        move: function(e, t) {
                            e.cards.length > 0 && zr(e),
                                e.phase = "settings",
                                e.stage = null,
                                t.events.endTurn()
                        }
                    },
                    startGame: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            var A, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                team1: 9,
                                team2: 8,
                                neutral: 7,
                                assasin: 1
                            };
                            e.cards.length > 0 && zr(e),
                            e.banBuffer || (e.banBuffer = []),
                                (A = e.banBuffer).push.apply(A, Object(s.a)(n)),
                            e.banBuffer.length > 100 && (e.banBuffer = e.banBuffer.slice(24, e.banBuffer.length - 1)),
                                e.phase = "game",
                                e.stage = "clue",
                                e.gameover = null,
                                e.log = [];
                            var a = t.random.D6() % 2 === 0 ? "red" : "blue";
                            if (e.currentTeam = a,
                            !e.gameMode || "regular" === e.gameMode) {
                                var i = wr(n, "red" === a ? r.team1 : r.team2)
                                    , o = n.filter((function(e) {
                                        return -1 === i.indexOf(e)
                                    }
                                ))
                                    , E = wr(o, "blue" === a ? r.team1 : r.team2)
                                    , c = wr(o = o.filter((function(e) {
                                        return -1 === E.indexOf(e)
                                    }
                                )), r.neutral);
                                o = o.filter((function(e) {
                                        return -1 === c.indexOf(e)
                                    }
                                )),
                                    console.log("cardCounts red", i.length, "blue", E.length, "gray", c.length, "black", o.length),
                                    e.cards = n.map((function(e) {
                                            return {
                                                word: e,
                                                type: i.indexOf(e) > -1 ? "red" : E.indexOf(e) > -1 ? "blue" : c.indexOf(e) > -1 ? "gray" : "black",
                                                revealed: !1,
                                                tips: [],
                                                selected: !1
                                            }
                                        }
                                    ));
                                var R = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                                    , O = wr(R, "red" === a ? 9 : 8)
                                    , I = R.filter((function(e) {
                                        return -1 === O.indexOf(e)
                                    }
                                ))
                                    , T = wr(I, "red" === a ? 8 : 9);
                                e.tokens = e.cards.reduce((function(e, t) {
                                        var n = {
                                            type: t.type,
                                            img: "red" === t.type ? O.shift() : "blue" === t.type ? T.shift() : "1",
                                            position: [-1, -1]
                                        };
                                        return e[t.type].push(n),
                                            e
                                    }
                                ), {
                                    red: [],
                                    blue: [],
                                    gray: [],
                                    black: []
                                }),
                                    e.score = {
                                        red: i.length,
                                        blue: E.length
                                    }
                            }
                            if ("duet" === e.gameMode) {
                                var S = kr(n, 15)
                                    , l = Object(u.a)(S, 2)
                                    , N = l[0]
                                    , L = l[1]
                                    , p = kr(N, 3)
                                    , d = Object(u.a)(p, 2)
                                    , f = d[0]
                                    , h = d[1]
                                    , K = kr(h, 5)
                                    , P = Object(u.a)(K, 2)
                                    , m = P[0]
                                    , U = P[1]
                                    , C = kr(U, 5)
                                    , M = Object(u.a)(C, 2)
                                    , D = M[0]
                                    , y = M[1]
                                    , g = kr(y, 1)
                                    , B = Object(u.a)(g, 2)
                                    , G = B[0]
                                    , v = B[1]
                                    , b = kr(L, 1)
                                    , H = Object(u.a)(b, 2)
                                    , x = H[0]
                                    , V = H[1]
                                    , w = kr(V, 1)
                                    , k = Object(u.a)(w, 2)
                                    , F = k[0]
                                    , Z = k[1]
                                    , J = kr(Z, 1)
                                    , j = Object(u.a)(J, 2)
                                    , Y = j[0]
                                    , W = j[1]
                                    , _ = [].concat(Object(s.a)(f.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "red",
                                                blue: "red"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(m.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "red",
                                                blue: "gray"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(D.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "gray",
                                                blue: "red"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(G.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "black",
                                                blue: "red"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(v.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "red",
                                                blue: "black"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(x.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "black",
                                                blue: "black"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(F.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "black",
                                                blue: "gray"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(Y.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "gray",
                                                blue: "black"
                                            }
                                        }
                                    }
                                ))), Object(s.a)(W.map((function(e) {
                                        return {
                                            word: e,
                                            type: {
                                                red: "gray",
                                                blue: "gray"
                                            }
                                        }
                                    }
                                ))));
                                Fr(_),
                                    e.cards = _.map((function(e) {
                                            return Vr(Vr({}, e), {}, {
                                                revealed: !1,
                                                tips: [],
                                                selected: !1
                                            })
                                        }
                                    )),
                                    console.log("cardResult", _)
                            }
                        }
                    },
                    stopGame: function(e, t) {
                        e.phase = "settings",
                            Zr(e),
                            e.gameover = null
                    },
                    resumeGame: function(e, t) {
                        e.phase = "game"
                    },
                    endGame: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t) {
                            Zr(e),
                                e.phase = "settings",
                                e.cards = [],
                                e.tokens = {
                                    red: [],
                                    blue: [],
                                    gray: [],
                                    black: []
                                },
                                e.gameover = null,
                                e.clue = {
                                    clue: null,
                                    number: null
                                },
                                e.guessLimit = -1,
                                e.guesses = -1,
                                _r(e)
                        }
                    },
                    joinTeam: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n, A, r) {
                            e.teams.red.operatives = e.teams.red.operatives.filter((function(e) {
                                    return e != r
                                }
                            )),
                                e.teams.red.spymasters = e.teams.red.spymasters.filter((function(e) {
                                        return e != r
                                    }
                                )),
                                e.teams.blue.operatives = e.teams.blue.operatives.filter((function(e) {
                                        return e != r
                                    }
                                )),
                                e.teams.blue.spymasters = e.teams.blue.spymasters.filter((function(e) {
                                        return e != r
                                    }
                                )),
                                e.teams[n][A].push(String(r)),
                                t.events.endTurn()
                        }
                    },
                    resetTeams: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t) {
                            Zr(e),
                                e.teams = {
                                    red: {
                                        operatives: [],
                                        spymasters: []
                                    },
                                    blue: {
                                        operatives: [],
                                        spymasters: []
                                    }
                                },
                                t.events.endTurn()
                        }
                    },
                    leaveTeam: {
                        client: !1,
                        undoable: !1,
                        redact: !0,
                        move: function(e, t, n) {
                            e.teams.red.operatives = e.teams.red.operatives.filter((function(e) {
                                    return e != n
                                }
                            )),
                                e.teams.red.spymasters = e.teams.red.spymasters.filter((function(e) {
                                        return e != n
                                    }
                                )),
                                e.teams.blue.operatives = e.teams.blue.operatives.filter((function(e) {
                                        return e != n
                                    }
                                )),
                                e.teams.blue.spymasters = e.teams.blue.spymasters.filter((function(e) {
                                        return e != n
                                    }
                                ))
                        }
                    },
                    changeGameMode: function(e, t, n) {
                        e.gameMode = n
                    }
                },
                turn: {
                    activePlayers: Array(64).fill(0).map((function(e, t) {
                            return t
                        }
                    ))
                },
                playerView: function(e, t, n) {
                    if (null === n)
                        return e;
                    var A = t.players.filter((function(e) {
                            return e.id == n
                        }
                    ))[0];
                    if (!A)
                        return e;
                    A = Vr(Vr({}, A), Object.keys(e.teams).reduce((function(t, n) {
                            return -1 !== e.teams[n].operatives.indexOf(String(A.id)) && (t.team = n,
                                t.role = "operative"),
                            -1 !== e.teams[n].spymasters.indexOf(String(A.id)) && (t.team = n,
                                t.role = "spymaster"),
                                t
                        }
                    ), {
                        team: null,
                        role: null
                    }));
                    var r = Vr(Vr({
                        player: A
                    }, e), {}, {
                        cards: e.cards.map((function(t) {
                                var n = {
                                    word: t.word,
                                    revealed: t.revealed,
                                    tips: t.tips,
                                    type: void 0,
                                    selected: !1
                                };
                                return "duet" === e.gameMode ? (n.type = "blue" === A.team && "red" === t.type[A.team] ? "blue" : t.type[A.team],
                                    n.revealed = !0) : (("spymaster" === A.role || t.revealed || e.gameover) && (n.type = t.type),
                                "spymaster" === A.role && e.currentTeam === A.team && (n.selected = t.selected)),
                                    n
                            }
                        ))
                    });
                    return A.isHost || delete r.settings,
                        r
                }
            }
        }
            , Qr = n("3IEU")
            , qr = r.a.createElement
            , $r = function(e) {
            var t = Object(BA.a)().t;
            return qr(Qr.a, e, qr("h1", null, t("room.connecting")))
        }
            , ea = function(e) {
            var t = null;
            try {
                t = Ot({
                    game: Xr(),
                    board: vr,
                    numPlayers: 64,
                    multiplayer: ze({
                        server: e.server.url
                    }),
                    loading: $r,
                    debug: !1,
                    gameID: e.gameID,
                    playerID: String(e.playerID),
                    credentials: e.credentials,
                    setStatus: e.setStatus
                })
            } catch (A) {
                console.log("error init game", A)
            }
            var n = {
                gameID: e.gameID,
                playerID: String(e.playerID),
                credentials: e.credentials.credential,
                setStatus: e.setStatus
            };
            return qr(t, n)
        }
            , ta = r.a.createElement;
        t.default = function(e) {
            return ta(ea, e)
        }
    },
    yLpj: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (A) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    },
    yeub: function(e, t) {
        try {
            e.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
        } catch (n) {
            e.exports = !1
        }
    },
    ypnn: function(e, t) {
        e.exports = function(e, t, n) {
            var A = e.byteLength;
            if (t = t || 0,
                n = n || A,
                e.slice)
                return e.slice(t, n);
            if (t < 0 && (t += A),
            n < 0 && (n += A),
            n > A && (n = A),
            t >= A || t >= n || 0 === A)
                return new ArrayBuffer(0);
            for (var r = new Uint8Array(e), a = new Uint8Array(n - t), i = t, o = 0; i < n; i++,
                o++)
                a[o] = r[i];
            return a.buffer
        }
    },
    zJ60: function(e, t, n) {
        var A = n("Uxeu")
            , r = n("NOtv")("socket.io-client:url");
        e.exports = function(e, t) {
            var n = e;
            t = t || "undefined" !== typeof location && location,
            null == e && (e = t.protocol + "//" + t.host);
            "string" === typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e),
            /^(https?|wss?):\/\//.test(e) || (r("protocol-less url %s", e),
                e = "undefined" !== typeof t ? t.protocol + "//" + e : "https://" + e),
                r("parse %s", e),
                n = A(e));
            n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
            n.path = n.path || "/";
            var a = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
            return n.id = n.protocol + "://" + a + ":" + n.port,
                n.href = n.protocol + "://" + a + (t && t.port === n.port ? "" : ":" + n.port),
                n
        }
    },
    zMFY: function(e, t) {
        function n() {}
        e.exports = function(e, t, A) {
            var r = !1;
            return A = A || n,
                a.count = e,
                0 === e ? t() : a;
            function a(e, n) {
                if (a.count <= 0)
                    throw new Error("after called too many times");
                --a.count,
                    e ? (r = !0,
                        t(e),
                        t = A) : 0 !== a.count || r || t(null, n)
            }
        }
    }
}]);
