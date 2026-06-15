module.exports = [
"[project]/projects/Emerging_Trends/feedback-app/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/agent-base/dist/helpers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.req = exports.json = exports.toBuffer = void 0;
const http = __importStar(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
const https = __importStar(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
async function toBuffer(stream) {
    let length = 0;
    const chunks = [];
    for await (const chunk of stream){
        length += chunk.length;
        chunks.push(chunk);
    }
    return Buffer.concat(chunks, length);
}
exports.toBuffer = toBuffer;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function json(stream) {
    const buf = await toBuffer(stream);
    const str = buf.toString('utf8');
    try {
        return JSON.parse(str);
    } catch (_err) {
        const err = _err;
        err.message += ` (input: ${str})`;
        throw err;
    }
}
exports.json = json;
function req(url, opts = {}) {
    const href = typeof url === 'string' ? url : url.href;
    const req1 = (href.startsWith('https:') ? https : http).request(url, opts);
    const promise = new Promise((resolve, reject)=>{
        req1.once('response', resolve).once('error', reject).end();
    });
    req1.then = promise.then.bind(promise);
    return req1;
}
exports.req = req;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/agent-base/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Agent = void 0;
const net = __importStar(__turbopack_context__.r("[externals]/net [external] (net, cjs)"));
const http = __importStar(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
const https_1 = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
__exportStar(__turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/agent-base/dist/helpers.js [app-route] (ecmascript)"), exports);
const INTERNAL = Symbol('AgentBaseInternalState');
class Agent extends http.Agent {
    constructor(opts){
        super(opts);
        this[INTERNAL] = {};
    }
    /**
     * Determine whether this is an `http` or `https` request.
     */ isSecureEndpoint(options) {
        if (options) {
            // First check the `secureEndpoint` property explicitly, since this
            // means that a parent `Agent` is "passing through" to this instance.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof options.secureEndpoint === 'boolean') {
                return options.secureEndpoint;
            }
            // If no explicit `secure` endpoint, check if `protocol` property is
            // set. This will usually be the case since using a full string URL
            // or `URL` instance should be the most common usage.
            if (typeof options.protocol === 'string') {
                return options.protocol === 'https:';
            }
        }
        // Finally, if no `protocol` property was set, then fall back to
        // checking the stack trace of the current call stack, and try to
        // detect the "https" module.
        const { stack } = new Error();
        if (typeof stack !== 'string') return false;
        return stack.split('\n').some((l)=>l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
    }
    // In order to support async signatures in `connect()` and Node's native
    // connection pooling in `http.Agent`, the array of sockets for each origin
    // has to be updated synchronously. This is so the length of the array is
    // accurate when `addRequest()` is next called. We achieve this by creating a
    // fake socket and adding it to `sockets[origin]` and incrementing
    // `totalSocketCount`.
    incrementSockets(name) {
        // If `maxSockets` and `maxTotalSockets` are both Infinity then there is no
        // need to create a fake socket because Node.js native connection pooling
        // will never be invoked.
        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
            return null;
        }
        // All instances of `sockets` are expected TypeScript errors. The
        // alternative is to add it as a private property of this class but that
        // will break TypeScript subclassing.
        if (!this.sockets[name]) {
            // @ts-expect-error `sockets` is readonly in `@types/node`
            this.sockets[name] = [];
        }
        const fakeSocket = new net.Socket({
            writable: false
        });
        this.sockets[name].push(fakeSocket);
        // @ts-expect-error `totalSocketCount` isn't defined in `@types/node`
        this.totalSocketCount++;
        return fakeSocket;
    }
    decrementSockets(name, socket) {
        if (!this.sockets[name] || socket === null) {
            return;
        }
        const sockets = this.sockets[name];
        const index = sockets.indexOf(socket);
        if (index !== -1) {
            sockets.splice(index, 1);
            // @ts-expect-error  `totalSocketCount` isn't defined in `@types/node`
            this.totalSocketCount--;
            if (sockets.length === 0) {
                // @ts-expect-error `sockets` is readonly in `@types/node`
                delete this.sockets[name];
            }
        }
    }
    // In order to properly update the socket pool, we need to call `getName()` on
    // the core `https.Agent` if it is a secureEndpoint.
    getName(options) {
        const secureEndpoint = this.isSecureEndpoint(options);
        if (secureEndpoint) {
            // @ts-expect-error `getName()` isn't defined in `@types/node`
            return https_1.Agent.prototype.getName.call(this, options);
        }
        // @ts-expect-error `getName()` isn't defined in `@types/node`
        return super.getName(options);
    }
    createSocket(req, options, cb) {
        const connectOpts = {
            ...options,
            secureEndpoint: this.isSecureEndpoint(options)
        };
        const name = this.getName(connectOpts);
        const fakeSocket = this.incrementSockets(name);
        Promise.resolve().then(()=>this.connect(req, connectOpts)).then((socket)=>{
            this.decrementSockets(name, fakeSocket);
            if (socket instanceof http.Agent) {
                try {
                    // @ts-expect-error `addRequest()` isn't defined in `@types/node`
                    return socket.addRequest(req, connectOpts);
                } catch (err) {
                    return cb(err);
                }
            }
            this[INTERNAL].currentSocket = socket;
            // @ts-expect-error `createSocket()` isn't defined in `@types/node`
            super.createSocket(req, options, cb);
        }, (err)=>{
            this.decrementSockets(name, fakeSocket);
            cb(err);
        });
    }
    createConnection() {
        const socket = this[INTERNAL].currentSocket;
        this[INTERNAL].currentSocket = undefined;
        if (!socket) {
            throw new Error('No socket was returned in the `connect()` function');
        }
        return socket;
    }
    get defaultPort() {
        return this[INTERNAL].defaultPort ?? (this.protocol === 'https:' ? 443 : 80);
    }
    set defaultPort(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].defaultPort = v;
        }
    }
    get protocol() {
        return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? 'https:' : 'http:');
    }
    set protocol(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].protocol = v;
        }
    }
}
exports.Agent = Agent;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/https-proxy-agent/dist/parse-proxy-response.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseProxyResponse = void 0;
const debug_1 = __importDefault(__turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/index.js [app-route] (ecmascript)"));
const debug = (0, debug_1.default)('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject)=>{
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b) ondata(b);
            else socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('readable', read);
        }
        function onend() {
            cleanup();
            debug('onend');
            reject(new Error('Proxy connection ended before receiving CONNECT response'));
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const headerParts = buffered.slice(0, endOfHeaders).toString('ascii').split('\r\n');
            const firstLine = headerParts.shift();
            if (!firstLine) {
                socket.destroy();
                return reject(new Error('No header received from proxy CONNECT response'));
            }
            const firstLineParts = firstLine.split(' ');
            const statusCode = +firstLineParts[1];
            const statusText = firstLineParts.slice(2).join(' ');
            const headers = {};
            for (const header of headerParts){
                if (!header) continue;
                const firstColon = header.indexOf(':');
                if (firstColon === -1) {
                    socket.destroy();
                    return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
                }
                const key = header.slice(0, firstColon).toLowerCase();
                const value = header.slice(firstColon + 1).trimStart();
                const current = headers[key];
                if (typeof current === 'string') {
                    headers[key] = [
                        current,
                        value
                    ];
                } else if (Array.isArray(current)) {
                    current.push(value);
                } else {
                    headers[key] = value;
                }
            }
            debug('got proxy server response: %o %o', firstLine, headers);
            cleanup();
            resolve({
                connect: {
                    statusCode,
                    statusText,
                    headers
                },
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('end', onend);
        read();
    });
}
exports.parseProxyResponse = parseProxyResponse;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpsProxyAgent = void 0;
const net = __importStar(__turbopack_context__.r("[externals]/net [external] (net, cjs)"));
const tls = __importStar(__turbopack_context__.r("[externals]/tls [external] (tls, cjs)"));
const assert_1 = __importDefault(__turbopack_context__.r("[externals]/assert [external] (assert, cjs)"));
const debug_1 = __importDefault(__turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/index.js [app-route] (ecmascript)"));
const agent_base_1 = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/agent-base/dist/index.js [app-route] (ecmascript)");
const url_1 = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const parse_proxy_response_1 = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/https-proxy-agent/dist/parse-proxy-response.js [app-route] (ecmascript)");
const debug = (0, debug_1.default)('https-proxy-agent');
const setServernameFromNonIpHost = (options)=>{
    if (options.servername === undefined && options.host && !net.isIP(options.host)) {
        return {
            ...options,
            servername: options.host
        };
    }
    return options;
};
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 */ class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(proxy, opts){
        super(opts);
        this.options = {
            path: undefined
        };
        this.proxy = typeof proxy === 'string' ? new url_1.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        debug('Creating new HttpsProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            // Attempt to negotiate http/1.1 for proxy servers that support http/2
            ALPNProtocols: [
                'http/1.1'
            ],
            ...opts ? omit(opts, 'headers') : null,
            host,
            port
        };
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     */ async connect(req, opts) {
        const { proxy } = this;
        if (!opts.host) {
            throw new TypeError('No "host" provided');
        }
        // Create a socket connection to the proxy server.
        let socket;
        if (proxy.protocol === 'https:') {
            debug('Creating `tls.Socket`: %o', this.connectOpts);
            socket = tls.connect(setServernameFromNonIpHost(this.connectOpts));
        } else {
            debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r\n`;
        // Inject the `Proxy-Authorization` header if necessary.
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers['Proxy-Connection']) {
            headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        }
        for (const name of Object.keys(headers)){
            payload += `${name}: ${headers[name]}\r\n`;
        }
        const proxyResponsePromise = (0, parse_proxy_response_1.parseProxyResponse)(socket);
        socket.write(`${payload}\r\n`);
        const { connect, buffered } = await proxyResponsePromise;
        req.emit('proxyConnect', connect);
        this.emit('proxyConnect', connect, req);
        if (connect.statusCode === 200) {
            req.once('socket', resume);
            if (opts.secureEndpoint) {
                // The proxy is connecting to a TLS server, so upgrade
                // this socket connection to a TLS connection.
                debug('Upgrading socket connection to TLS');
                return tls.connect({
                    ...omit(setServernameFromNonIpHost(opts), 'host', 'path', 'port'),
                    socket
                });
            }
            return socket;
        }
        // Some other status code that's not 200... need to re-play the HTTP
        // header "data" events onto the socket once the HTTP machinery is
        // attached so that the node core `http` can parse and handle the
        // error status code.
        // Close the original socket, and a new "fake" socket is returned
        // instead, so that the proxy doesn't get the HTTP request
        // written to it (which may contain `Authorization` headers or other
        // sensitive data).
        //
        // See: https://hackerone.com/reports/541502
        socket.destroy();
        const fakeSocket = new net.Socket({
            writable: false
        });
        fakeSocket.readable = true;
        // Need to wait for the "socket" event to re-play the "data" events.
        req.once('socket', (s)=>{
            debug('Replaying proxy buffer for failed request');
            (0, assert_1.default)(s.listenerCount('data') > 0);
            // Replay the "buffered" Buffer onto the fake `socket`, since at
            // this point the HTTP module machinery has been hooked up for
            // the user.
            s.push(buffered);
            s.push(null);
        });
        return fakeSocket;
    }
}
HttpsProxyAgent.protocols = [
    'http',
    'https'
];
exports.HttpsProxyAgent = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj){
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/http-proxy-agent/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpProxyAgent = void 0;
const net = __importStar(__turbopack_context__.r("[externals]/net [external] (net, cjs)"));
const tls = __importStar(__turbopack_context__.r("[externals]/tls [external] (tls, cjs)"));
const debug_1 = __importDefault(__turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/debug/src/index.js [app-route] (ecmascript)"));
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const agent_base_1 = __turbopack_context__.r("[project]/projects/Emerging_Trends/feedback-app/node_modules/agent-base/dist/index.js [app-route] (ecmascript)");
const url_1 = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const debug = (0, debug_1.default)('http-proxy-agent');
/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects
 * to the specified "HTTP proxy server" in order to proxy HTTP requests.
 */ class HttpProxyAgent extends agent_base_1.Agent {
    constructor(proxy, opts){
        super(opts);
        this.proxy = typeof proxy === 'string' ? new url_1.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        debug('Creating new HttpProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            ...opts ? omit(opts, 'headers') : null,
            host,
            port
        };
    }
    addRequest(req, opts) {
        req._header = null;
        this.setRequestProps(req, opts);
        // @ts-expect-error `addRequest()` isn't defined in `@types/node`
        super.addRequest(req, opts);
    }
    setRequestProps(req, opts) {
        const { proxy } = this;
        const protocol = opts.secureEndpoint ? 'https:' : 'http:';
        const hostname = req.getHeader('host') || 'localhost';
        const base = `${protocol}//${hostname}`;
        const url = new url_1.URL(req.path, base);
        if (opts.port !== 80) {
            url.port = String(opts.port);
        }
        // Change the `http.ClientRequest` instance's "path" field
        // to the absolute path of the URL that will be requested.
        req.path = String(url);
        // Inject the `Proxy-Authorization` header if necessary.
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
        }
        if (!headers['Proxy-Connection']) {
            headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        }
        for (const name of Object.keys(headers)){
            const value = headers[name];
            if (value) {
                req.setHeader(name, value);
            }
        }
    }
    async connect(req, opts) {
        req._header = null;
        if (!req.path.includes('://')) {
            this.setRequestProps(req, opts);
        }
        // At this point, the http ClientRequest's internal `_header` field
        // might have already been set. If this is the case then we'll need
        // to re-generate the string since we just changed the `req.path`.
        let first;
        let endOfHeaders;
        debug('Regenerating stored HTTP header string for request');
        req._implicitHeader();
        if (req.outputData && req.outputData.length > 0) {
            debug('Patching connection write() output buffer with updated header');
            first = req.outputData[0].data;
            endOfHeaders = first.indexOf('\r\n\r\n') + 4;
            req.outputData[0].data = req._header + first.substring(endOfHeaders);
            debug('Output buffer: %o', req.outputData[0].data);
        }
        // Create a socket connection to the proxy server.
        let socket;
        if (this.proxy.protocol === 'https:') {
            debug('Creating `tls.Socket`: %o', this.connectOpts);
            socket = tls.connect(this.connectOpts);
        } else {
            debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = net.connect(this.connectOpts);
        }
        // Wait for the socket's `connect` event, so that this `callback()`
        // function throws instead of the `http` request machinery. This is
        // important for i.e. `PacProxyAgent` which determines a failed proxy
        // connection via the `callback()` function throwing.
        await (0, events_1.once)(socket, 'connect');
        return socket;
    }
}
HttpProxyAgent.protocols = [
    'http',
    'https'
];
exports.HttpProxyAgent = HttpProxyAgent;
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj){
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/pipeline.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEmptyPipeline",
    ()=>createEmptyPipeline
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/pipeline.js [app-route] (ecmascript)");
;
function createEmptyPipeline() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEmptyPipeline"])();
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/log.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>logger
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/logger/dist/esm/index.js [app-route] (ecmascript)");
;
const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClientLogger"])("core-rest-pipeline");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/logPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logPolicy",
    ()=>logPolicy,
    "logPolicyName",
    ()=>logPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/log.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/logPolicy.js [app-route] (ecmascript)");
;
;
const logPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logPolicyName"];
function logPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logPolicy"])({
        logger: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info,
        ...options
    });
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/redirectPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "redirectPolicy",
    ()=>redirectPolicy,
    "redirectPolicyName",
    ()=>redirectPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/redirectPolicy.js [app-route] (ecmascript)");
;
const redirectPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redirectPolicyName"];
function redirectPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redirectPolicy"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgentPlatform.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHeaderName",
    ()=>getHeaderName,
    "setPlatformSpecificData",
    ()=>setPlatformSpecificData
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
;
;
function getHeaderName() {
    return "User-Agent";
}
async function setPlatformSpecificData(map) {
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"] && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions) {
        const osInfo = `${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].type()} ${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].release()}; ${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].arch()}`;
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.bun) {
            map.set("Bun", `${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.bun} (${osInfo})`);
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.deno) {
            map.set("Deno", `${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.deno} (${osInfo})`);
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.node) {
            map.set("Node", `${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].versions.node} (${osInfo})`);
        }
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/constants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
__turbopack_context__.s([
    "DEFAULT_RETRY_POLICY_COUNT",
    ()=>DEFAULT_RETRY_POLICY_COUNT,
    "SDK_VERSION",
    ()=>SDK_VERSION
]);
const SDK_VERSION = "1.24.0";
const DEFAULT_RETRY_POLICY_COUNT = 3;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgent.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserAgentHeaderName",
    ()=>getUserAgentHeaderName,
    "getUserAgentValue",
    ()=>getUserAgentValue
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgentPlatform$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgentPlatform.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/constants.js [app-route] (ecmascript)");
;
;
function getUserAgentString(telemetryInfo) {
    const parts = [];
    for (const [key, value] of telemetryInfo){
        const token = value ? `${key}/${value}` : key;
        parts.push(token);
    }
    return parts.join(" ");
}
function getUserAgentHeaderName() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgentPlatform$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHeaderName"])();
}
async function getUserAgentValue(prefix) {
    const runtimeInfo = new Map();
    runtimeInfo.set("core-rest-pipeline", __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SDK_VERSION"]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgentPlatform$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setPlatformSpecificData"])(runtimeInfo);
    const defaultAgent = getUserAgentString(runtimeInfo);
    const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
    return userAgentValue;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/userAgentPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userAgentPolicy",
    ()=>userAgentPolicy,
    "userAgentPolicyName",
    ()=>userAgentPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgent.js [app-route] (ecmascript)");
;
const UserAgentHeaderName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentHeaderName"])();
const userAgentPolicyName = "userAgentPolicy";
function userAgentPolicy(options = {}) {
    const userAgentValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentValue"])(options.userAgentPrefix);
    return {
        name: userAgentPolicyName,
        async sendRequest (request, next) {
            if (!request.headers.has(UserAgentHeaderName)) {
                request.headers.set(UserAgentHeaderName, await userAgentValue);
            }
            return next(request);
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/createFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFile",
    ()=>createFile
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/file.js [app-route] (ecmascript) <locals>");
;
function createFile(content, name, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRawFile"])(content, name, options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/file.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFileFromStream",
    ()=>createFileFromStream,
    "createRawFile",
    ()=>createRawFile,
    "getRawContent",
    ()=>getRawContent,
    "hasRawContent",
    ()=>hasRawContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$createFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/createFile.js [app-route] (ecmascript)");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
function isNodeReadableStream(x) {
    return typeof x === "object" && x !== null && "pipe" in x && typeof x.pipe === "function";
}
const unimplementedMethods = {
    arrayBuffer: ()=>{
        throw new Error("Not implemented");
    },
    bytes: ()=>{
        throw new Error("Not implemented");
    },
    slice: ()=>{
        throw new Error("Not implemented");
    },
    text: ()=>{
        throw new Error("Not implemented");
    }
};
/**
 * Private symbol used as key on objects created using createFile containing the
 * original source of the file object.
 *
 * This is used in Node to access the original Node stream without using Blob#stream, which
 * returns a web stream. This is done to avoid a couple of bugs to do with Blob#stream and
 * Readable#to/fromWeb in Node versions we support:
 * - https://github.com/nodejs/node/issues/42694 (fixed in Node 18.14)
 * - https://github.com/nodejs/node/issues/48916 (fixed in Node 20.6)
 *
 * Once these versions are no longer supported, we may be able to stop doing this.
 *
 * @internal
 */ const rawContent = Symbol("rawContent");
function hasRawContent(x) {
    return typeof x[rawContent] === "function";
}
function getRawContent(blob) {
    if (hasRawContent(blob)) {
        return blob[rawContent]();
    } else {
        return blob;
    }
}
function createRawFile(content, name, options = {}) {
    return {
        ...unimplementedMethods,
        type: options.type ?? "",
        lastModified: options.lastModified ?? new Date().getTime(),
        webkitRelativePath: options.webkitRelativePath ?? "",
        size: content.byteLength,
        name,
        arrayBuffer: async ()=>toArrayBuffer(content).buffer,
        stream: ()=>new Blob([
                toArrayBuffer(content)
            ]).stream(),
        [rawContent]: ()=>content
    };
}
function createFileFromStream(stream, name, options = {}) {
    return {
        ...unimplementedMethods,
        type: options.type ?? "",
        lastModified: options.lastModified ?? new Date().getTime(),
        webkitRelativePath: options.webkitRelativePath ?? "",
        size: options.size ?? -1,
        name,
        stream: ()=>{
            const s = stream();
            if (isNodeReadableStream(s)) {
                throw new Error("Not supported: a Node stream was provided as input to createFileFromStream.");
            }
            return s;
        },
        [rawContent]: stream
    };
}
;
function hasArrayBuffer(source) {
    return "resize" in source.buffer;
}
function toArrayBuffer(source) {
    if (hasArrayBuffer(source)) {
        // ArrayBuffer — return a copy if the view is a subarray of a larger buffer
        if (source.byteOffset !== 0 || source.byteLength !== source.buffer.byteLength) {
            return new Uint8Array(source);
        }
        return source;
    }
    // SharedArrayBuffer
    return source.map((x)=>x);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/multipartPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multipartPolicy",
    ()=>multipartPolicy,
    "multipartPolicyName",
    ()=>multipartPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/multipartPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/file.js [app-route] (ecmascript) <locals>");
;
;
const multipartPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multipartPolicyName"];
function multipartPolicy() {
    const tspPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multipartPolicy"])();
    return {
        name: multipartPolicyName,
        sendRequest: async (request, next)=>{
            if (request.multipartBody) {
                for (const part of request.multipartBody.parts){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasRawContent"])(part.body)) {
                        part.body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRawContent"])(part.body);
                    }
                }
            }
            return tspPolicy.sendRequest(request, next);
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/decompressResponsePolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decompressResponsePolicy",
    ()=>decompressResponsePolicy,
    "decompressResponsePolicyName",
    ()=>decompressResponsePolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/decompressResponsePolicy.js [app-route] (ecmascript)");
;
const decompressResponsePolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decompressResponsePolicyName"];
function decompressResponsePolicy() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decompressResponsePolicy"])();
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/defaultRetryPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultRetryPolicy",
    ()=>defaultRetryPolicy,
    "defaultRetryPolicyName",
    ()=>defaultRetryPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/defaultRetryPolicy.js [app-route] (ecmascript)");
;
const defaultRetryPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultRetryPolicyName"];
function defaultRetryPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultRetryPolicy"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/formDataPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formDataPolicy",
    ()=>formDataPolicy,
    "formDataPolicyName",
    ()=>formDataPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/formDataPolicy.js [app-route] (ecmascript)");
;
const formDataPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formDataPolicyName"];
function formDataPolicy() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formDataPolicy"])();
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/proxyPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultProxySettings",
    ()=>getDefaultProxySettings,
    "proxyPolicy",
    ()=>proxyPolicy,
    "proxyPolicyName",
    ()=>proxyPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/proxyPolicy.js [app-route] (ecmascript)");
;
const proxyPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["proxyPolicyName"];
function getDefaultProxySettings(proxyUrl) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultProxySettings"])(proxyUrl);
}
function proxyPolicy(proxySettings, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["proxyPolicy"])(proxySettings, options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/setClientRequestIdPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the setClientRequestIdPolicy.
 */ __turbopack_context__.s([
    "setClientRequestIdPolicy",
    ()=>setClientRequestIdPolicy,
    "setClientRequestIdPolicyName",
    ()=>setClientRequestIdPolicyName
]);
const setClientRequestIdPolicyName = "setClientRequestIdPolicy";
function setClientRequestIdPolicy(requestIdHeaderName = "x-ms-client-request-id") {
    return {
        name: setClientRequestIdPolicyName,
        async sendRequest (request, next) {
            if (!request.headers.has(requestIdHeaderName)) {
                request.headers.set(requestIdHeaderName, request.requestId);
            }
            return next(request);
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/agentPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentPolicy",
    ()=>agentPolicy,
    "agentPolicyName",
    ()=>agentPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/agentPolicy.js [app-route] (ecmascript)");
;
const agentPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agentPolicyName"];
function agentPolicy(agent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agentPolicy"])(agent);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tlsPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tlsPolicy",
    ()=>tlsPolicy,
    "tlsPolicyName",
    ()=>tlsPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/tlsPolicy.js [app-route] (ecmascript)");
;
const tlsPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tlsPolicyName"];
function tlsPolicy(tlsSettings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tlsPolicy"])(tlsSettings);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/restError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestError",
    ()=>RestError,
    "isRestError",
    ()=>isRestError
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/restError.js [app-route] (ecmascript)");
;
const RestError = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RestError"];
function isRestError(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRestError"])(e);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tracingPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tracingPolicy",
    ()=>tracingPolicy,
    "tracingPolicyName",
    ()=>tracingPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgent.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/log.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/restError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$sanitizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/sanitizer.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const tracingPolicyName = "tracingPolicy";
function tracingPolicy(options = {}) {
    const userAgentPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$userAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentValue"])(options.userAgentPrefix);
    const sanitizer = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$sanitizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sanitizer"]({
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
    });
    const tracingClient = tryCreateTracingClient();
    return {
        name: tracingPolicyName,
        async sendRequest (request, next) {
            if (!tracingClient) {
                return next(request);
            }
            const userAgent = await userAgentPromise;
            const spanAttributes = {
                "http.url": sanitizer.sanitizeUrl(request.url),
                "http.method": request.method,
                "http.user_agent": userAgent,
                requestId: request.requestId
            };
            if (userAgent) {
                spanAttributes["http.user_agent"] = userAgent;
            }
            const { span, tracingContext } = tryCreateSpan(tracingClient, request, spanAttributes) ?? {};
            if (!span || !tracingContext) {
                return next(request);
            }
            try {
                const response = await tracingClient.withContext(tracingContext, next, request);
                tryProcessResponse(span, response);
                return response;
            } catch (err) {
                tryProcessError(span, err);
                throw err;
            }
        }
    };
}
function tryCreateTracingClient() {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTracingClient"])({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SDK_VERSION"]
        });
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`Error when creating the TracingClient: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorMessage"])(e)}`);
        return undefined;
    }
}
function tryCreateSpan(tracingClient, request, spanAttributes) {
    try {
        // As per spec, we do not need to differentiate between HTTP and HTTPS in span name.
        const { span, updatedOptions } = tracingClient.startSpan(`HTTP ${request.method}`, {
            tracingOptions: request.tracingOptions
        }, {
            spanKind: "client",
            spanAttributes
        });
        // If the span is not recording, don't do any more work.
        if (!span.isRecording()) {
            span.end();
            return undefined;
        }
        // set headers
        const headers = tracingClient.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
        for (const [key, value] of Object.entries(headers)){
            request.headers.set(key, value);
        }
        return {
            span,
            tracingContext: updatedOptions.tracingOptions.tracingContext
        };
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`Skipping creating a tracing span due to an error: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorMessage"])(e)}`);
        return undefined;
    }
}
function tryProcessError(span, error) {
    try {
        span.setStatus({
            status: "error",
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isError"])(error) ? error : undefined
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRestError"])(error) && error.statusCode) {
            span.setAttribute("http.status_code", error.statusCode);
        }
        span.end();
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`Skipping tracing span processing due to an error: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorMessage"])(e)}`);
    }
}
function tryProcessResponse(span, response) {
    try {
        span.setAttribute("http.status_code", response.status);
        const serviceRequestId = response.headers.get("x-ms-request-id");
        if (serviceRequestId) {
            span.setAttribute("serviceRequestId", serviceRequestId);
        }
        // Per semantic conventions, only set the status to error if the status code is 4xx or 5xx.
        // Otherwise, the status MUST remain unset.
        // https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
        if (response.status >= 400) {
            span.setStatus({
                status: "error"
            });
        }
        span.end();
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`Skipping tracing span processing due to an error: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorMessage"])(e)}`);
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/wrapAbortSignal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Creates a native AbortSignal which reflects the state of the provided AbortSignalLike.
 * If the AbortSignalLike is already a native AbortSignal, it is returned as is.
 * @param abortSignalLike - The AbortSignalLike to wrap.
 * @returns - An object containing the native AbortSignal and an optional cleanup function. The cleanup function should be called when the AbortSignal is no longer needed.
 */ __turbopack_context__.s([
    "wrapAbortSignalLike",
    ()=>wrapAbortSignalLike
]);
function wrapAbortSignalLike(abortSignalLike) {
    if (abortSignalLike instanceof AbortSignal) {
        return {
            abortSignal: abortSignalLike
        };
    }
    if (abortSignalLike.aborted) {
        return {
            abortSignal: AbortSignal.abort("reason" in abortSignalLike ? abortSignalLike.reason : undefined)
        };
    }
    const controller = new AbortController();
    let needsCleanup = true;
    function cleanup() {
        if (needsCleanup) {
            abortSignalLike.removeEventListener("abort", listener);
            needsCleanup = false;
        }
    }
    function listener() {
        controller.abort("reason" in abortSignalLike ? abortSignalLike.reason : undefined);
        cleanup();
    }
    abortSignalLike.addEventListener("abort", listener);
    return {
        abortSignal: controller.signal,
        cleanup
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/wrapAbortSignalLikePolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapAbortSignalLikePolicy",
    ()=>wrapAbortSignalLikePolicy,
    "wrapAbortSignalLikePolicyName",
    ()=>wrapAbortSignalLikePolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$wrapAbortSignal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/wrapAbortSignal.js [app-route] (ecmascript)");
;
const wrapAbortSignalLikePolicyName = "wrapAbortSignalLikePolicy";
function wrapAbortSignalLikePolicy() {
    return {
        name: wrapAbortSignalLikePolicyName,
        sendRequest: async (request, next)=>{
            if (!request.abortSignal) {
                return next(request);
            }
            const { abortSignal, cleanup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$wrapAbortSignal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapAbortSignalLike"])(request.abortSignal);
            request.abortSignal = abortSignal;
            try {
                return await next(request);
            } finally{
                cleanup?.();
            }
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/createPipelineFromOptions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPipelineFromOptions",
    ()=>createPipelineFromOptions
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/logPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/redirectPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$userAgentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/userAgentPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/multipartPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/decompressResponsePolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/defaultRetryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/formDataPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/proxyPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$setClientRequestIdPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/setClientRequestIdPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/agentPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tlsPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tracingPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tracingPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$wrapAbortSignalLikePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/wrapAbortSignalLikePolicy.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function createPipelineFromOptions(options) {
    const pipeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEmptyPipeline"])();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNodeLike"]) {
        if (options.agent) {
            pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["agentPolicy"])(options.agent));
        }
        if (options.tlsOptions) {
            pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tlsPolicy"])(options.tlsOptions));
        }
        pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["proxyPolicy"])(options.proxyOptions));
        pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decompressResponsePolicy"])());
    }
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$wrapAbortSignalLikePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapAbortSignalLikePolicy"])());
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formDataPolicy"])(), {
        beforePolicies: [
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multipartPolicyName"]
        ]
    });
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$userAgentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userAgentPolicy"])(options.userAgentOptions));
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$setClientRequestIdPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setClientRequestIdPolicy"])(options.telemetryOptions?.clientRequestIdHeaderName));
    // The multipart policy is added after policies with no phase, so that
    // policies can be added between it and formDataPolicy to modify
    // properties (e.g., making the boundary constant in recorded tests).
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multipartPolicy"])(), {
        afterPhase: "Deserialize"
    });
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultRetryPolicy"])(options.retryOptions), {
        phase: "Retry"
    });
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tracingPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tracingPolicy"])({
        ...options.userAgentOptions,
        ...options.loggingOptions
    }), {
        afterPhase: "Retry"
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNodeLike"]) {
        // Both XHR and Fetch expect to handle redirects automatically,
        // so only include this policy when we're in Node.
        pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redirectPolicy"])(options.redirectOptions), {
            afterPhase: "Retry"
        });
    }
    pipeline.addPolicy((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logPolicy"])(options.loggingOptions), {
        afterPhase: "Sign"
    });
    return pipeline;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/defaultHttpClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultHttpClient",
    ()=>createDefaultHttpClient
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$defaultHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/defaultHttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$wrapAbortSignal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/wrapAbortSignal.js [app-route] (ecmascript)");
;
;
function createDefaultHttpClient() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$defaultHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDefaultHttpClient"])();
    return {
        async sendRequest (request) {
            // we wrap any AbortSignalLike here since the TypeSpec runtime expects a native AbortSignal.
            // 99% of the time, this should be a no-op since a native AbortSignal is passed in.
            const { abortSignal, cleanup } = request.abortSignal ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$wrapAbortSignal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapAbortSignalLike"])(request.abortSignal) : {};
            try {
                request.abortSignal = abortSignal;
                return await client.sendRequest(request);
            } finally{
                cleanup?.();
            }
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/httpHeaders.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpHeaders",
    ()=>createHttpHeaders
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$httpHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/httpHeaders.js [app-route] (ecmascript)");
;
function createHttpHeaders(rawHeaders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$httpHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHttpHeaders"])(rawHeaders);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/pipelineRequest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPipelineRequest",
    ()=>createPipelineRequest
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$pipelineRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/pipelineRequest.js [app-route] (ecmascript)");
;
function createPipelineRequest(options) {
    // Cast required due to difference between ts-http-runtime requiring AbortSignal while core-rest-pipeline allows
    // the more generic AbortSignalLike. The wrapAbortSignalLike pipeline policy will take care of ensuring that any AbortSignalLike in the request
    // is converted into a true AbortSignal.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$pipelineRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPipelineRequest"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/exponentialRetryPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exponentialRetryPolicy",
    ()=>exponentialRetryPolicy,
    "exponentialRetryPolicyName",
    ()=>exponentialRetryPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$exponentialRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/exponentialRetryPolicy.js [app-route] (ecmascript)");
;
const exponentialRetryPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$exponentialRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exponentialRetryPolicyName"];
function exponentialRetryPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$exponentialRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exponentialRetryPolicy"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/systemErrorRetryPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "systemErrorRetryPolicy",
    ()=>systemErrorRetryPolicy,
    "systemErrorRetryPolicyName",
    ()=>systemErrorRetryPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$systemErrorRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/systemErrorRetryPolicy.js [app-route] (ecmascript)");
;
const systemErrorRetryPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$systemErrorRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["systemErrorRetryPolicyName"];
function systemErrorRetryPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$systemErrorRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["systemErrorRetryPolicy"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/throttlingRetryPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "throttlingRetryPolicy",
    ()=>throttlingRetryPolicy,
    "throttlingRetryPolicyName",
    ()=>throttlingRetryPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$throttlingRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/throttlingRetryPolicy.js [app-route] (ecmascript)");
;
const throttlingRetryPolicyName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$throttlingRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throttlingRetryPolicyName"];
function throttlingRetryPolicy(options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$throttlingRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throttlingRetryPolicy"])(options);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/retryPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "retryPolicy",
    ()=>retryPolicy
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/logger/dist/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$retryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/policies/retryPolicy.js [app-route] (ecmascript)");
;
;
;
const retryPolicyLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClientLogger"])("core-rest-pipeline retryPolicy");
function retryPolicy(strategies, options = {
    maxRetries: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_RETRY_POLICY_COUNT"]
}) {
    // Cast is required since the TSP runtime retry strategy type is slightly different
    // very deep down (using real AbortSignal vs. AbortSignalLike in RestError).
    // In practice the difference doesn't actually matter.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$policies$2f$retryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["retryPolicy"])(strategies, {
        logger: retryPolicyLogger,
        ...options
    });
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/tokenCycler.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CYCLER_OPTIONS",
    ()=>DEFAULT_CYCLER_OPTIONS,
    "createTokenCycler",
    ()=>createTokenCycler
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/delay.js [app-route] (ecmascript)");
;
const DEFAULT_CYCLER_OPTIONS = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 1000 * 60 * 2
};
/**
 * Converts an an unreliable access token getter (which may resolve with null)
 * into an AccessTokenGetter by retrying the unreliable getter in a regular
 * interval.
 *
 * @param getAccessToken - A function that produces a promise of an access token that may fail by returning null.
 * @param retryIntervalInMs - The time (in milliseconds) to wait between retry attempts.
 * @param refreshTimeout - The timestamp after which the refresh attempt will fail, throwing an exception.
 * @returns - A promise that, if it resolves, will resolve with an access token.
 */ async function beginRefresh(getAccessToken, retryIntervalInMs, refreshTimeout) {
    // This wrapper handles exceptions gracefully as long as we haven't exceeded
    // the timeout.
    async function tryGetAccessToken() {
        if (Date.now() < refreshTimeout) {
            try {
                return await getAccessToken();
            } catch  {
                return null;
            }
        } else {
            const finalToken = await getAccessToken();
            // Timeout is up, so throw if it's still null
            if (finalToken === null) {
                throw new Error("Failed to refresh access token.");
            }
            return finalToken;
        }
    }
    let token = await tryGetAccessToken();
    while(token === null){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["delay"])(retryIntervalInMs);
        token = await tryGetAccessToken();
    }
    return token;
}
function createTokenCycler(credential, tokenCyclerOptions) {
    let refreshWorker = null;
    let token = null;
    let tenantId;
    const options = {
        ...DEFAULT_CYCLER_OPTIONS,
        ...tokenCyclerOptions
    };
    /**
     * This little holder defines several predicates that we use to construct
     * the rules of refreshing the token.
     */ const cycler = {
        /**
         * Produces true if a refresh job is currently in progress.
         */ get isRefreshing () {
            return refreshWorker !== null;
        },
        /**
         * Produces true if the cycler SHOULD refresh (we are within the refresh
         * window and not already refreshing)
         */ get shouldRefresh () {
            if (token === null) {
                return true;
            }
            if (cycler.isRefreshing) {
                return false;
            }
            if (token.refreshAfterTimestamp && token.refreshAfterTimestamp < Date.now()) {
                return true;
            }
            return token.expiresOnTimestamp - options.refreshWindowInMs < Date.now();
        },
        /**
         * Produces true if the cycler MUST refresh (null or nearly-expired
         * token).
         */ get mustRefresh () {
            return token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now();
        }
    };
    /**
     * Starts a refresh job or returns the existing job if one is already
     * running.
     */ function refresh(scopes, getTokenOptions) {
        if (!cycler.isRefreshing) {
            // We bind `scopes` here to avoid passing it around a lot
            const tryGetAccessToken = ()=>credential.getToken(scopes, getTokenOptions);
            // Take advantage of promise chaining to insert an assignment to `token`
            // before the refresh can be considered done.
            refreshWorker = beginRefresh(tryGetAccessToken, options.retryIntervalInMs, // If we don't have a token, then we should timeout immediately
            token?.expiresOnTimestamp ?? Date.now()).then((_token)=>{
                refreshWorker = null;
                token = _token;
                tenantId = getTokenOptions.tenantId;
                return token;
            }).catch((reason)=>{
                // We also should reset the refresher if we enter a failed state.  All
                // existing awaiters will throw, but subsequent requests will start a
                // new retry chain.
                refreshWorker = null;
                token = null;
                tenantId = undefined;
                throw reason;
            });
        }
        return refreshWorker;
    }
    return async (scopes, tokenOptions)=>{
        //
        // Simple rules:
        // - If we MUST refresh, then return the refresh task, blocking
        //   the pipeline until a token is available.
        // - If we SHOULD refresh, then run refresh but don't return it
        //   (we can still use the cached token).
        // - Return the token, since it's fine if we didn't return in
        //   step 1.
        //
        const hasClaimChallenge = Boolean(tokenOptions.claims);
        const tenantIdChanged = tenantId !== tokenOptions.tenantId;
        if (hasClaimChallenge) {
            // If we've received a claim, we know the existing token isn't valid
            // We want to clear it so that that refresh worker won't use the old expiration time as a timeout
            token = null;
        }
        // If the tenantId passed in token options is different to the one we have
        // Or if we are in claim challenge and the token was rejected and a new access token need to be issued, we need to
        // refresh the token with the new tenantId or token.
        const mustRefresh = tenantIdChanged || hasClaimChallenge || cycler.mustRefresh;
        if (mustRefresh) {
            return refresh(scopes, tokenOptions);
        }
        if (cycler.shouldRefresh) {
            refresh(scopes, tokenOptions);
        }
        return token;
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bearerTokenAuthenticationPolicy",
    ()=>bearerTokenAuthenticationPolicy,
    "bearerTokenAuthenticationPolicyName",
    ()=>bearerTokenAuthenticationPolicyName,
    "parseChallenges",
    ()=>parseChallenges
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$tokenCycler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/tokenCycler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/log.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/restError.js [app-route] (ecmascript)");
;
;
;
const bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";
/**
 * Try to send the given request.
 *
 * When a response is received, returns a tuple of the response received and, if the response was received
 * inside a thrown RestError, the RestError that was thrown.
 *
 * Otherwise, if an error was thrown while sending the request that did not provide an underlying response, it
 * will be rethrown.
 */ async function trySendRequest(request, next) {
    try {
        return [
            await next(request),
            undefined
        ];
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRestError"])(e) && e.response) {
            return [
                e.response,
                e
            ];
        } else {
            throw e;
        }
    }
}
/**
 * Default authorize request handler
 */ async function defaultAuthorizeRequest(options) {
    const { scopes, getAccessToken, request } = options;
    // Enable CAE true by default
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
        enableCae: true
    };
    const accessToken = await getAccessToken(scopes, getTokenOptions);
    if (accessToken) {
        options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
    }
}
/**
 * We will retrieve the challenge only if the response status code was 401,
 * and if the response contained the header "WWW-Authenticate" with a non-empty value.
 */ function isChallengeResponse(response) {
    return response.status === 401 && response.headers.has("WWW-Authenticate");
}
/**
 * Re-authorize the request for CAE challenge.
 * The response containing the challenge is `options.response`.
 * If this method returns true, the underlying request will be sent once again.
 */ async function authorizeRequestOnCaeChallenge(onChallengeOptions, caeClaims) {
    const { scopes } = onChallengeOptions;
    const accessToken = await onChallengeOptions.getAccessToken(scopes, {
        enableCae: true,
        claims: caeClaims
    });
    if (!accessToken) {
        return false;
    }
    onChallengeOptions.request.headers.set("Authorization", `${accessToken.tokenType ?? "Bearer"} ${accessToken.token}`);
    return true;
}
function bearerTokenAuthenticationPolicy(options) {
    const { credential, scopes, challengeCallbacks } = options;
    const logger = options.logger || __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"];
    const callbacks = {
        authorizeRequest: challengeCallbacks?.authorizeRequest?.bind(challengeCallbacks) ?? defaultAuthorizeRequest,
        authorizeRequestOnChallenge: challengeCallbacks?.authorizeRequestOnChallenge?.bind(challengeCallbacks)
    };
    // This function encapsulates the entire process of reliably retrieving the token
    // The options are left out of the public API until there's demand to configure this.
    // Remember to extend `BearerTokenAuthenticationPolicyOptions` with `TokenCyclerOptions`
    // in order to pass through the `options` object.
    const getAccessToken = credential ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$tokenCycler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTokenCycler"])(credential /* , options */ ) : ()=>Promise.resolve(null);
    return {
        name: bearerTokenAuthenticationPolicyName,
        /**
         * If there's no challenge parameter:
         * - It will try to retrieve the token using the cache, or the credential's getToken.
         * - Then it will try the next policy with or without the retrieved token.
         *
         * It uses the challenge parameters to:
         * - Skip a first attempt to get the token from the credential if there's no cached token,
         *   since it expects the token to be retrievable only after the challenge.
         * - Prepare the outgoing request if the `prepareRequest` method has been provided.
         * - Send an initial request to receive the challenge if it fails.
         * - Process a challenge if the response contains it.
         * - Retrieve a token with the challenge information, then re-send the request.
         */ async sendRequest (request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) {
                throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            }
            await callbacks.authorizeRequest({
                scopes: Array.isArray(scopes) ? scopes : [
                    scopes
                ],
                request,
                getAccessToken,
                logger
            });
            let response;
            let error;
            let shouldSendRequest;
            [response, error] = await trySendRequest(request, next);
            if (isChallengeResponse(response)) {
                let claims = getCaeChallengeClaims(response.headers.get("WWW-Authenticate"));
                // Handle CAE by default when receive CAE claim
                if (claims) {
                    let parsedClaim;
                    // Return the response immediately if claims is not a valid base64 encoded string
                    try {
                        parsedClaim = atob(claims);
                    } catch (e) {
                        logger.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
                        return response;
                    }
                    shouldSendRequest = await authorizeRequestOnCaeChallenge({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        response,
                        request,
                        getAccessToken,
                        logger
                    }, parsedClaim);
                    // Send updated request and handle response for RestError
                    if (shouldSendRequest) {
                        [response, error] = await trySendRequest(request, next);
                    }
                } else if (callbacks.authorizeRequestOnChallenge) {
                    // Handle custom challenges when client provides custom callback
                    shouldSendRequest = await callbacks.authorizeRequestOnChallenge({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        request,
                        response,
                        getAccessToken,
                        logger
                    });
                    // Send updated request and handle response for RestError
                    if (shouldSendRequest) {
                        [response, error] = await trySendRequest(request, next);
                    }
                    // If we get another CAE Claim, we will handle it by default and return whatever value we receive for this
                    if (isChallengeResponse(response)) {
                        claims = getCaeChallengeClaims(response.headers.get("WWW-Authenticate") ?? "");
                        if (claims) {
                            let parsedClaim;
                            try {
                                parsedClaim = atob(claims);
                            } catch (e) {
                                logger.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
                                return response;
                            }
                            shouldSendRequest = await authorizeRequestOnCaeChallenge({
                                scopes: Array.isArray(scopes) ? scopes : [
                                    scopes
                                ],
                                response,
                                request,
                                getAccessToken,
                                logger
                            }, parsedClaim);
                            // Send updated request and handle response for RestError
                            if (shouldSendRequest) {
                                [response, error] = await trySendRequest(request, next);
                            }
                        }
                    }
                }
            }
            if (error) {
                throw error;
            } else {
                return response;
            }
        }
    };
}
function parseChallenges(challenges) {
    // Challenge regex seperates the string to individual challenges with different schemes in the format `Scheme a="b", c=d`
    // The challenge regex captures parameteres with either quotes values or unquoted values
    const challengeRegex = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g;
    // Parameter regex captures the claims group removed from the scheme in the format `a="b"` and `c="d"`
    // CAE challenge always have quoted parameters. For more reference, https://learn.microsoft.com/entra/identity-platform/claims-challenge
    const paramRegex = /(\w+)="([^"]*)"/g;
    const parsedChallenges = [];
    let match;
    // Iterate over each challenge match
    while((match = challengeRegex.exec(challenges)) !== null){
        const scheme = match[1];
        const paramsString = match[2];
        const params = {};
        let paramMatch;
        // Iterate over each parameter match
        while((paramMatch = paramRegex.exec(paramsString)) !== null){
            params[paramMatch[1]] = paramMatch[2];
        }
        parsedChallenges.push({
            scheme,
            params
        });
    }
    return parsedChallenges;
}
/**
 * Parse a pipeline response and look for a CAE challenge with "Bearer" scheme
 * Return the value in the header without parsing the challenge
 * @internal
 */ function getCaeChallengeClaims(challenges) {
    if (!challenges) {
        return;
    }
    // Find all challenges present in the header
    const parsedChallenges = parseChallenges(challenges);
    return parsedChallenges.find((x)=>x.scheme === "Bearer" && x.params.claims && x.params.error === "insufficient_claims")?.params.claims;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/auxiliaryAuthenticationHeaderPolicy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auxiliaryAuthenticationHeaderPolicy",
    ()=>auxiliaryAuthenticationHeaderPolicy,
    "auxiliaryAuthenticationHeaderPolicyName",
    ()=>auxiliaryAuthenticationHeaderPolicyName
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$tokenCycler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/tokenCycler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/log.js [app-route] (ecmascript)");
;
;
const auxiliaryAuthenticationHeaderPolicyName = "auxiliaryAuthenticationHeaderPolicy";
const AUTHORIZATION_AUXILIARY_HEADER = "x-ms-authorization-auxiliary";
async function sendAuthorizeRequest(options) {
    const { scopes, getAccessToken, request } = options;
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions
    };
    return (await getAccessToken(scopes, getTokenOptions))?.token ?? "";
}
function auxiliaryAuthenticationHeaderPolicy(options) {
    const { credentials, scopes } = options;
    const logger = options.logger || __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$log$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"];
    const tokenCyclerMap = new WeakMap();
    return {
        name: auxiliaryAuthenticationHeaderPolicyName,
        async sendRequest (request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) {
                throw new Error("Bearer token authentication for auxiliary header is not permitted for non-TLS protected (non-https) URLs.");
            }
            if (!credentials || credentials.length === 0) {
                logger.info(`${auxiliaryAuthenticationHeaderPolicyName} header will not be set due to empty credentials.`);
                return next(request);
            }
            const tokenPromises = [];
            for (const credential of credentials){
                let getAccessToken = tokenCyclerMap.get(credential);
                if (!getAccessToken) {
                    getAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$tokenCycler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTokenCycler"])(credential);
                    tokenCyclerMap.set(credential, getAccessToken);
                }
                tokenPromises.push(sendAuthorizeRequest({
                    scopes: Array.isArray(scopes) ? scopes : [
                        scopes
                    ],
                    request,
                    getAccessToken,
                    logger
                }));
            }
            const auxiliaryTokens = (await Promise.all(tokenPromises)).filter((token)=>Boolean(token));
            if (auxiliaryTokens.length === 0) {
                logger.warning(`None of the auxiliary tokens are valid. ${AUTHORIZATION_AUXILIARY_HEADER} header will not be set.`);
                return next(request);
            }
            request.headers.set(AUTHORIZATION_AUXILIARY_HEADER, auxiliaryTokens.map((token)=>`Bearer ${token}`).join(", "));
            return next(request);
        }
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$createPipelineFromOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/createPipelineFromOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$defaultHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/defaultHttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$httpHeaders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/httpHeaders.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$pipelineRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/pipelineRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$restError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/restError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$decompressResponsePolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/decompressResponsePolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$exponentialRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/exponentialRetryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$logPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/logPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$multipartPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/multipartPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$proxyPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/proxyPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$redirectPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/redirectPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$systemErrorRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/systemErrorRetryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$throttlingRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/throttlingRetryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$retryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/retryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tracingPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tracingPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$defaultRetryPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/defaultRetryPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$userAgentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/userAgentPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$tlsPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tlsPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$formDataPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/formDataPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$bearerTokenAuthenticationPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$auxiliaryAuthenticationHeaderPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/auxiliaryAuthenticationHeaderPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$policies$2f$agentPolicy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/policies/agentPolicy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$dist$2f$esm$2f$util$2f$file$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/dist/esm/util/file.js [app-route] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/logger/dist/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AzureLogger",
    ()=>AzureLogger,
    "createClientLogger",
    ()=>createClientLogger,
    "getLogLevel",
    ()=>getLogLevel,
    "setLogLevel",
    ()=>setLogLevel
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$logger$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/logger/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$logger$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/logger/logger.js [app-route] (ecmascript)");
;
const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$logger$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLoggerContext"])({
    logLevelEnvVarName: "AZURE_LOG_LEVEL",
    namespace: "azure"
});
const AzureLogger = context.logger;
function setLogLevel(level) {
    context.setLogLevel(level);
}
function getLogLevel() {
    return context.getLogLevel();
}
function createClientLogger(namespace) {
    return context.createClientLogger(namespace);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/node_modules/@azure/abort-controller/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
__turbopack_context__.s([]);
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/node_modules/@azure/abort-controller/dist/esm/AbortError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * This error is thrown when an asynchronous operation has been aborted.
 * Check for this error by testing the `name` that the name property of the
 * error matches `"AbortError"`.
 *
 * @example
 * ```ts
 * const controller = new AbortController();
 * controller.abort();
 * try {
 *   doAsyncWork(controller.signal)
 * } catch (e) {
 *   if (e.name === 'AbortError') {
 *     // handle abort error here.
 *   }
 * }
 * ```
 */ __turbopack_context__.s([
    "AbortError",
    ()=>AbortError
]);
class AbortError extends Error {
    constructor(message){
        super(message);
        this.name = "AbortError";
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/createAbortablePromise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAbortablePromise",
    ()=>createAbortablePromise
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$node_modules$2f40$azure$2f$abort$2d$controller$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/node_modules/@azure/abort-controller/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$node_modules$2f40$azure$2f$abort$2d$controller$2f$dist$2f$esm$2f$AbortError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/node_modules/@azure/abort-controller/dist/esm/AbortError.js [app-route] (ecmascript)");
;
function createAbortablePromise(buildPromise, options) {
    const { cleanupBeforeAbort, abortSignal, abortErrorMsg } = options ?? {};
    return new Promise((resolve, reject)=>{
        function rejectOnAbort() {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$node_modules$2f40$azure$2f$abort$2d$controller$2f$dist$2f$esm$2f$AbortError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbortError"](abortErrorMsg ?? "The operation was aborted."));
        }
        function removeListeners() {
            abortSignal?.removeEventListener("abort", onAbort);
        }
        function onAbort() {
            cleanupBeforeAbort?.();
            removeListeners();
            rejectOnAbort();
        }
        if (abortSignal?.aborted) {
            return rejectOnAbort();
        }
        try {
            buildPromise((x)=>{
                removeListeners();
                resolve(x);
            }, (x)=>{
                removeListeners();
                reject(x);
            });
        } catch (err) {
            reject(err);
        }
        abortSignal?.addEventListener("abort", onAbort);
    });
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/delay.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRetryDelay",
    ()=>calculateRetryDelay,
    "delay",
    ()=>delay
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$createAbortablePromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/createAbortablePromise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/random.js [app-route] (ecmascript)");
;
;
const StandardAbortMessage = "The delay was aborted.";
function delay(timeInMs, options) {
    let token;
    const { abortSignal, abortErrorMsg } = options ?? {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$createAbortablePromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAbortablePromise"])((resolve)=>{
        token = setTimeout(resolve, timeInMs);
    }, {
        cleanupBeforeAbort: ()=>clearTimeout(token),
        abortSignal,
        abortErrorMsg: abortErrorMsg ?? StandardAbortMessage
    });
}
function calculateRetryDelay(retryAttempt, config) {
    // Exponentially increase the delay each time
    const exponentialDelay = config.retryDelayInMs * Math.pow(2, retryAttempt);
    // Don't let the delay exceed the maximum
    const clampedDelay = Math.min(config.maxRetryDelayInMs, exponentialDelay);
    // Allow the final value to have some "jitter" (within 50% of the delay size) so
    // that retries across multiple clients don't occur simultaneously.
    const retryAfterInMs = clampedDelay / 2 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRandomIntegerInclusive"])(0, clampedDelay / 2);
    return {
        retryAfterInMs
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/error.js [app-route] (ecmascript)");
;
function getErrorMessage(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isError"])(e)) {
        return e.message;
    } else {
        let stringified;
        try {
            if (typeof e === "object" && e) {
                stringified = JSON.stringify(e);
            } else {
                stringified = String(e);
            }
        } catch (err) {
            stringified = "[unable to stringify input]";
        }
        return `Unknown error ${stringified}`;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRetryDelay",
    ()=>calculateRetryDelay,
    "computeSha256Hash",
    ()=>computeSha256Hash,
    "computeSha256Hmac",
    ()=>computeSha256Hmac,
    "getRandomIntegerInclusive",
    ()=>getRandomIntegerInclusive,
    "isBrowser",
    ()=>isBrowser,
    "isBun",
    ()=>isBun,
    "isDeno",
    ()=>isDeno,
    "isError",
    ()=>isError,
    "isNode",
    ()=>isNode,
    "isNodeLike",
    ()=>isNodeLike,
    "isNodeRuntime",
    ()=>isNodeRuntime,
    "isObject",
    ()=>isObject,
    "isReactNative",
    ()=>isReactNative,
    "isWebWorker",
    ()=>isWebWorker,
    "randomUUID",
    ()=>randomUUID,
    "stringToUint8Array",
    ()=>stringToUint8Array,
    "uint8ArrayToString",
    ()=>uint8ArrayToString
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/internal.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/delay.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$sha256$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/sha256.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/random.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$uuidUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/uuidUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$bytesEncoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@typespec/ts-http-runtime/dist/esm/util/bytesEncoding.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$createAbortablePromise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/createAbortablePromise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/delay.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/error.js [app-route] (ecmascript)");
;
;
;
;
;
;
function calculateRetryDelay(retryAttempt, config) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateRetryDelay"](retryAttempt, config);
}
function computeSha256Hash(content, encoding) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$sha256$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeSha256Hash"](content, encoding);
}
function computeSha256Hmac(key, stringToSign, encoding) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$sha256$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeSha256Hmac"](key, stringToSign, encoding);
}
function getRandomIntegerInclusive(min, max) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$random$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRandomIntegerInclusive"](min, max);
}
function isError(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isError"](e);
}
function isObject(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"](input);
}
function randomUUID() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$uuidUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["randomUUID"]();
}
const isBrowser = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBrowser"];
const isBun = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBun"];
const isDeno = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDeno"];
const isNode = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeLike"];
const isNodeLike = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeLike"];
const isNodeRuntime = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeRuntime"];
const isReactNative = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isReactNative"];
const isWebWorker = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWebWorker"];
function uint8ArrayToString(bytes, format) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$bytesEncoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToString"](bytes, format);
}
function stringToUint8Array(value, format) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$typespec$2f$ts$2d$http$2d$runtime$2f$dist$2f$esm$2f$util$2f$bytesEncoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"](value, format);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/typeGuards.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Helper TypeGuard that checks if something is defined or not.
 * @param thing - Anything
 */ __turbopack_context__.s([
    "isDefined",
    ()=>isDefined,
    "isObjectWithProperties",
    ()=>isObjectWithProperties,
    "objectHasProperty",
    ()=>objectHasProperty
]);
function isDefined(thing) {
    return typeof thing !== "undefined" && thing !== null;
}
function isObjectWithProperties(thing, properties) {
    if (!isDefined(thing) || typeof thing !== "object") {
        return false;
    }
    for (const property of properties){
        if (!objectHasProperty(thing, property)) {
            return false;
        }
    }
    return true;
}
function objectHasProperty(thing, property) {
    return isDefined(thing) && typeof thing === "object" && property in thing;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/** @internal */ __turbopack_context__.s([
    "TracingContextImpl",
    ()=>TracingContextImpl,
    "createTracingContext",
    ()=>createTracingContext,
    "knownContextKeys",
    ()=>knownContextKeys
]);
const knownContextKeys = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
};
function createTracingContext(options = {}) {
    let context = new TracingContextImpl(options.parentContext);
    if (options.span) {
        context = context.setValue(knownContextKeys.span, options.span);
    }
    if (options.namespace) {
        context = context.setValue(knownContextKeys.namespace, options.namespace);
    }
    return context;
}
class TracingContextImpl {
    _contextMap;
    constructor(initialContext){
        this._contextMap = initialContext instanceof TracingContextImpl ? new Map(initialContext._contextMap) : new Map();
    }
    setValue(key, value) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.set(key, value);
        return newContext;
    }
    getValue(key) {
        return this._contextMap.get(key);
    }
    deleteValue(key) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.delete(key);
        return newContext;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/commonjs/state.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.state = void 0;
/**
 * @internal
 *
 * Holds the singleton instrumenter, to be shared across CJS and ESM imports.
 */ exports.state = {
    instrumenterImplementation: undefined
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/state.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "state",
    ()=>state
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// @ts-expect-error The recommended approach to sharing module state between ESM and CJS.
// See https://github.com/isaacs/tshy/blob/main/README.md#module-local-state for additional information.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$commonjs$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/commonjs/state.js [app-route] (ecmascript)");
;
const state = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$commonjs$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"];
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultInstrumenter",
    ()=>createDefaultInstrumenter,
    "createDefaultTracingSpan",
    ()=>createDefaultTracingSpan,
    "getInstrumenter",
    ()=>getInstrumenter,
    "useInstrumenter",
    ()=>useInstrumenter
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/state.js [app-route] (ecmascript)");
;
;
function createDefaultTracingSpan() {
    return {
        end: ()=>{
        // noop
        },
        isRecording: ()=>false,
        recordException: ()=>{
        // noop
        },
        setAttribute: ()=>{
        // noop
        },
        setStatus: ()=>{
        // noop
        },
        addEvent: ()=>{
        // noop
        }
    };
}
function createDefaultInstrumenter() {
    return {
        createRequestHeaders: ()=>{
            return {};
        },
        parseTraceparentHeader: ()=>{
            return undefined;
        },
        startSpan: (_name, spanOptions)=>{
            return {
                span: createDefaultTracingSpan(),
                tracingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTracingContext"])({
                    parentContext: spanOptions.tracingContext
                })
            };
        },
        withContext (_context, callback, ...callbackArgs) {
            return callback(...callbackArgs);
        }
    };
}
function useInstrumenter(instrumenter) {
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation = instrumenter;
}
function getInstrumenter() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation = createDefaultInstrumenter();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTracingClient",
    ()=>createTracingClient
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)");
;
;
function createTracingClient(options) {
    const { namespace, packageName, packageVersion } = options;
    function startSpan(name, operationOptions, spanOptions) {
        const startSpanResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().startSpan(name, {
            ...spanOptions,
            packageName: packageName,
            packageVersion: packageVersion,
            tracingContext: operationOptions?.tracingOptions?.tracingContext
        });
        let tracingContext = startSpanResult.tracingContext;
        const span = startSpanResult.span;
        if (!tracingContext.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace)) {
            tracingContext = tracingContext.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace, namespace);
        }
        span.setAttribute("az.namespace", tracingContext.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace));
        const updatedOptions = Object.assign({}, operationOptions, {
            tracingOptions: {
                ...operationOptions?.tracingOptions,
                tracingContext
            }
        });
        return {
            span,
            updatedOptions
        };
    }
    async function withSpan(name, operationOptions, callback, spanOptions) {
        const { span, updatedOptions } = startSpan(name, operationOptions, spanOptions);
        try {
            const result = await withContext(updatedOptions.tracingOptions.tracingContext, ()=>Promise.resolve(callback(updatedOptions, span)));
            span.setStatus({
                status: "success"
            });
            return result;
        } catch (err) {
            span.setStatus({
                status: "error",
                error: err
            });
            throw err;
        } finally{
            span.end();
        }
    }
    function withContext(context, callback, ...callbackArgs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().withContext(context, callback, ...callbackArgs);
    }
    /**
     * Parses a traceparent header value into a span identifier.
     *
     * @param traceparentHeader - The traceparent header to parse.
     * @returns An implementation-specific identifier for the span.
     */ function parseTraceparentHeader(traceparentHeader) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().parseTraceparentHeader(traceparentHeader);
    }
    /**
     * Creates a set of request headers to propagate tracing information to a backend.
     *
     * @param tracingContext - The context containing the span to serialize.
     * @returns The set of headers to add to a request.
     */ function createRequestHeaders(tracingContext) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().createRequestHeaders(tracingContext);
    }
    return {
        startSpan,
        withSpan,
        withContext,
        parseTraceparentHeader,
        createRequestHeaders
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$rest$2d$pipeline$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-rest-pipeline/node_modules/@azure/core-tracing/dist/esm/tracingClient.js [app-route] (ecmascript)");
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracers/noop/noOpSpan.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A no-op implementation of Span that can safely be used without side-effects.
 */ __turbopack_context__.s([
    "NoOpSpan",
    ()=>NoOpSpan
]);
class NoOpSpan {
    /**
     * Returns the SpanContext associated with this Span.
     */ spanContext() {
        return {
            spanId: "",
            traceId: "",
            traceFlags: 0 /* NONE */ 
        };
    }
    /**
     * Marks the end of Span execution.
     * @param _endTime - The time to use as the Span's end time. Defaults to
     * the current time.
     */ end(_endTime) {
    /* Noop */ }
    /**
     * Sets an attribute on the Span
     * @param _key - The attribute key
     * @param _value - The attribute value
     */ setAttribute(_key, _value) {
        return this;
    }
    /**
     * Sets attributes on the Span
     * @param _attributes - The attributes to add
     */ setAttributes(_attributes) {
        return this;
    }
    /**
     * Adds an event to the Span
     * @param _name - The name of the event
     * @param _attributes - The associated attributes to add for this event
     */ addEvent(_name, _attributes) {
        return this;
    }
    /**
     * Sets a status on the span. Overrides the default of SpanStatusCode.OK.
     * @param _status - The status to set.
     */ setStatus(_status) {
        return this;
    }
    /**
     * Updates the name of the Span
     * @param _name - the new Span name
     */ updateName(_name) {
        return this;
    }
    /**
     * Returns whether this span will be recorded
     */ isRecording() {
        return false;
    }
    /**
     * Sets exception as a span event
     * @param exception - the exception the only accepted values are string or Error
     * @param time - the time to set as Span's event time. If not provided,
     *     use the current time.
     */ recordException(_exception, _time) {
    /* do nothing */ }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracers/noop/noOpTracer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoOpTracer",
    ()=>NoOpTracer
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracers$2f$noop$2f$noOpSpan$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracers/noop/noOpSpan.js [app-route] (ecmascript)");
;
class NoOpTracer {
    /**
     * Starts a new Span.
     * @param _name - The name of the span.
     * @param _options - The SpanOptions used during Span creation.
     */ startSpan(_name, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracers$2f$noop$2f$noOpSpan$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpSpan"]();
    }
    /**
     * Returns the current Span from the current context, if available.
     */ getCurrentSpan() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracers$2f$noop$2f$noOpSpan$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpSpan"]();
    }
    /**
     * Executes the given function within the context provided by a Span.
     * @param _span - The span that provides the context.
     * @param fn - The function to be executed.
     */ withSpan(_span, fn) {
        return fn();
    }
    /**
     * Bind a Span as the target's scope
     * @param target - An object to bind the scope.
     * @param _span - A specific Span to use. Otherwise, use the current one.
     */ bind(target, _span) {
        return target;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/utils/global.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
__turbopack_context__.s([
    "getGlobalObject",
    ()=>getGlobalObject
]);
function getGlobalObject() {
    return /*TURBOPACK member replacement*/ __turbopack_context__.g;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/utils/cache.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCache",
    ()=>getCache
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$utils$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/utils/global.js [app-route] (ecmascript)");
;
// tracerCache will be updated when a new incompatible version of OTel is
// shipped in core-tracing.
// tracerCache3 - OpenTelemetry 1.0.0-rc.1
// tracerCache4 - OpenTelemetry 0.20.0
const GLOBAL_TRACER_SYMBOL = Symbol.for(`@azure/core-tracing.tracerCache4`);
let cache;
function loadTracerCache() {
    const globalObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$utils$2f$global$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalObject"])();
    if (!globalObj[GLOBAL_TRACER_SYMBOL]) {
        globalObj[GLOBAL_TRACER_SYMBOL] = {
            tracer: undefined
        };
    }
    cache = globalObj[GLOBAL_TRACER_SYMBOL];
}
function getCache() {
    if (!cache) {
        loadTracerCache();
    }
    return cache;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracerProxy.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTracer",
    ()=>getTracer,
    "setTracer",
    ()=>setTracer
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracers$2f$noop$2f$noOpTracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracers/noop/noOpTracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$utils$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/utils/cache.js [app-route] (ecmascript)");
;
;
let defaultTracer;
function getDefaultTracer() {
    if (!defaultTracer) {
        defaultTracer = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracers$2f$noop$2f$noOpTracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpTracer"]();
    }
    return defaultTracer;
}
function setTracer(tracer) {
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$utils$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCache"])();
    cache.tracer = tracer;
}
function getTracer() {
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$utils$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCache"])();
    if (!cache.tracer) {
        return getDefaultTracer();
    }
    return cache.tracer;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/interfaces.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpanKind",
    ()=>SpanKind,
    "SpanStatusCode",
    ()=>SpanStatusCode,
    "context",
    ()=>context,
    "getSpan",
    ()=>getSpan,
    "getSpanContext",
    ()=>getSpanContext,
    "setSpan",
    ()=>setSpan,
    "setSpanContext",
    ()=>setSpanContext
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@opentelemetry/api/build/esm/context-api.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@opentelemetry/api/build/esm/trace-api.js [app-route] (ecmascript)");
;
var SpanKind;
(function(SpanKind) {
    /** Default value. Indicates that the span is used internally. */ SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */ SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */ SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
function getSpan(context) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trace"].getSpan(context);
}
function setSpan(context, span) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trace"].setSpan(context, span);
}
function setSpanContext(context, spanContext) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trace"].setSpanContext(context, spanContext);
}
function getSpanContext(context) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trace"].getSpanContext(context);
}
const context = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["context"];
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/createSpan.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSpanFunction",
    ()=>createSpanFunction
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracerProxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/tracerProxy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$interfaces$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-tracing/dist-esm/src/interfaces.js [app-route] (ecmascript)");
;
;
function createSpanFunction(args) {
    return function(operationName, operationOptions) {
        const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$tracerProxy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTracer"])();
        const tracingOptions = (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) || {};
        const spanOptions = Object.assign({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$interfaces$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SpanKind"].INTERNAL
        }, tracingOptions.spanOptions);
        const spanName = args.packagePrefix ? `${args.packagePrefix}.${operationName}` : operationName;
        const span = tracer.startSpan(spanName, spanOptions, tracingOptions.tracingContext);
        if (args.namespace) {
            span.setAttribute("az.namespace", args.namespace);
        }
        let newSpanOptions = tracingOptions.spanOptions || {};
        if (span.isRecording() && args.namespace) {
            newSpanOptions = Object.assign(Object.assign({}, tracingOptions.spanOptions), {
                attributes: Object.assign(Object.assign({}, spanOptions.attributes), {
                    "az.namespace": args.namespace
                })
            });
        }
        const newTracingOptions = Object.assign(Object.assign({}, tracingOptions), {
            spanOptions: newSpanOptions,
            tracingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$interfaces$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSpan"])(tracingOptions.tracingContext || __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2d$esm$2f$src$2f$interfaces$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["context"].active(), span)
        });
        const newOperationOptions = Object.assign(Object.assign({}, operationOptions), {
            tracingOptions: newTracingOptions
        });
        return {
            span,
            updatedOptions: newOperationOptions
        };
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/** @internal */ __turbopack_context__.s([
    "TracingContextImpl",
    ()=>TracingContextImpl,
    "createTracingContext",
    ()=>createTracingContext,
    "knownContextKeys",
    ()=>knownContextKeys
]);
const knownContextKeys = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
};
function createTracingContext(options = {}) {
    let context = new TracingContextImpl(options.parentContext);
    if (options.span) {
        context = context.setValue(knownContextKeys.span, options.span);
    }
    if (options.namespace) {
        context = context.setValue(knownContextKeys.namespace, options.namespace);
    }
    return context;
}
class TracingContextImpl {
    _contextMap;
    constructor(initialContext){
        this._contextMap = initialContext instanceof TracingContextImpl ? new Map(initialContext._contextMap) : new Map();
    }
    setValue(key, value) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.set(key, value);
        return newContext;
    }
    getValue(key) {
        return this._contextMap.get(key);
    }
    deleteValue(key) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.delete(key);
        return newContext;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/commonjs/state.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.state = void 0;
/**
 * @internal
 *
 * Holds the singleton instrumenter, to be shared across CJS and ESM imports.
 */ exports.state = {
    instrumenterImplementation: undefined
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/state.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "state",
    ()=>state
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// @ts-expect-error The recommended approach to sharing module state between ESM and CJS.
// See https://github.com/isaacs/tshy/blob/main/README.md#module-local-state for additional information.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$commonjs$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/commonjs/state.js [app-route] (ecmascript)");
;
const state = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$commonjs$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"];
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultInstrumenter",
    ()=>createDefaultInstrumenter,
    "createDefaultTracingSpan",
    ()=>createDefaultTracingSpan,
    "getInstrumenter",
    ()=>getInstrumenter,
    "useInstrumenter",
    ()=>useInstrumenter
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/state.js [app-route] (ecmascript)");
;
;
function createDefaultTracingSpan() {
    return {
        end: ()=>{
        // noop
        },
        isRecording: ()=>false,
        recordException: ()=>{
        // noop
        },
        setAttribute: ()=>{
        // noop
        },
        setStatus: ()=>{
        // noop
        },
        addEvent: ()=>{
        // noop
        }
    };
}
function createDefaultInstrumenter() {
    return {
        createRequestHeaders: ()=>{
            return {};
        },
        parseTraceparentHeader: ()=>{
            return undefined;
        },
        startSpan: (_name, spanOptions)=>{
            return {
                span: createDefaultTracingSpan(),
                tracingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTracingContext"])({
                    parentContext: spanOptions.tracingContext
                })
            };
        },
        withContext (_context, callback, ...callbackArgs) {
            return callback(...callbackArgs);
        }
    };
}
function useInstrumenter(instrumenter) {
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation = instrumenter;
}
function getInstrumenter() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation = createDefaultInstrumenter();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["state"].instrumenterImplementation;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/tracingClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTracingClient",
    ()=>createTracingClient
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/tracingContext.js [app-route] (ecmascript)");
;
;
function createTracingClient(options) {
    const { namespace, packageName, packageVersion } = options;
    function startSpan(name, operationOptions, spanOptions) {
        const startSpanResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().startSpan(name, {
            ...spanOptions,
            packageName: packageName,
            packageVersion: packageVersion,
            tracingContext: operationOptions?.tracingOptions?.tracingContext
        });
        let tracingContext = startSpanResult.tracingContext;
        const span = startSpanResult.span;
        if (!tracingContext.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace)) {
            tracingContext = tracingContext.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace, namespace);
        }
        span.setAttribute("az.namespace", tracingContext.getValue(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["knownContextKeys"].namespace));
        const updatedOptions = Object.assign({}, operationOptions, {
            tracingOptions: {
                ...operationOptions?.tracingOptions,
                tracingContext
            }
        });
        return {
            span,
            updatedOptions
        };
    }
    async function withSpan(name, operationOptions, callback, spanOptions) {
        const { span, updatedOptions } = startSpan(name, operationOptions, spanOptions);
        try {
            const result = await withContext(updatedOptions.tracingOptions.tracingContext, ()=>Promise.resolve(callback(updatedOptions, span)));
            span.setStatus({
                status: "success"
            });
            return result;
        } catch (err) {
            span.setStatus({
                status: "error",
                error: err
            });
            throw err;
        } finally{
            span.end();
        }
    }
    function withContext(context, callback, ...callbackArgs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().withContext(context, callback, ...callbackArgs);
    }
    /**
     * Parses a traceparent header value into a span identifier.
     *
     * @param traceparentHeader - The traceparent header to parse.
     * @returns An implementation-specific identifier for the span.
     */ function parseTraceparentHeader(traceparentHeader) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().parseTraceparentHeader(traceparentHeader);
    }
    /**
     * Creates a set of request headers to propagate tracing information to a backend.
     *
     * @param tracingContext - The context containing the span to serialize.
     * @returns The set of headers to add to a request.
     */ function createRequestHeaders(tracingContext) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumenter"])().createRequestHeaders(tracingContext);
    }
    return {
        startSpan,
        withSpan,
        withContext,
        parseTraceparentHeader,
        createRequestHeaders
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$instrumenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/instrumenter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$data$2d$tables$2f$node_modules$2f40$azure$2f$core$2d$tracing$2f$dist$2f$esm$2f$tracingClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/data-tables/node_modules/@azure/core-tracing/dist/esm/tracingClient.js [app-route] (ecmascript)");
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/keyCredential.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isKeyCredential",
    ()=>isKeyCredential
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/typeGuards.js [app-route] (ecmascript)");
;
function isKeyCredential(credential) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectWithProperties"])(credential, [
        "key"
    ]) && typeof credential.key === "string";
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/azureNamedKeyCredential.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AzureNamedKeyCredential",
    ()=>AzureNamedKeyCredential,
    "isNamedKeyCredential",
    ()=>isNamedKeyCredential
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/typeGuards.js [app-route] (ecmascript)");
;
class AzureNamedKeyCredential {
    _key;
    _name;
    /**
     * The value of the key to be used in authentication.
     */ get key() {
        return this._key;
    }
    /**
     * The value of the name to be used in authentication.
     */ get name() {
        return this._name;
    }
    /**
     * Create an instance of an AzureNamedKeyCredential for use
     * with a service client.
     *
     * @param name - The initial value of the name to use in authentication.
     * @param key - The initial value of the key to use in authentication.
     */ constructor(name, key){
        if (!name || !key) {
            throw new TypeError("name and key must be non-empty strings");
        }
        this._name = name;
        this._key = key;
    }
    /**
     * Change the value of the key.
     *
     * Updates will take effect upon the next request after
     * updating the key value.
     *
     * @param newName - The new name value to be used.
     * @param newKey - The new key value to be used.
     */ update(newName, newKey) {
        if (!newName || !newKey) {
            throw new TypeError("newName and newKey must be non-empty strings");
        }
        this._name = newName;
        this._key = newKey;
    }
}
function isNamedKeyCredential(credential) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectWithProperties"])(credential, [
        "name",
        "key"
    ]) && typeof credential.key === "string" && typeof credential.name === "string";
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/azureSASCredential.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AzureSASCredential",
    ()=>AzureSASCredential,
    "isSASCredential",
    ()=>isSASCredential
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/typeGuards.js [app-route] (ecmascript)");
;
class AzureSASCredential {
    _signature;
    /**
     * The value of the shared access signature to be used in authentication
     */ get signature() {
        return this._signature;
    }
    /**
     * Create an instance of an AzureSASCredential for use
     * with a service client.
     *
     * @param signature - The initial value of the shared access signature to use in authentication
     */ constructor(signature){
        if (!signature) {
            throw new Error("shared access signature must be a non-empty string");
        }
        this._signature = signature;
    }
    /**
     * Change the value of the signature.
     *
     * Updates will take effect upon the next request after
     * updating the signature value.
     *
     * @param newSignature - The new shared access signature value to be used
     */ update(newSignature) {
        if (!newSignature) {
            throw new Error("shared access signature must be a non-empty string");
        }
        this._signature = newSignature;
    }
}
function isSASCredential(credential) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$typeGuards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectWithProperties"])(credential, [
        "signature"
    ]) && typeof credential.signature === "string";
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$auth$2f$dist$2f$esm$2f$keyCredential$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/keyCredential.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$auth$2f$dist$2f$esm$2f$azureNamedKeyCredential$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/azureNamedKeyCredential.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$auth$2f$dist$2f$esm$2f$azureSASCredential$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/azureSASCredential.js [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/tokenCredential.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @internal
 * @param accessToken - Access token
 * @returns Whether a token is bearer type or not
 */ __turbopack_context__.s([
    "isBearerToken",
    ()=>isBearerToken,
    "isPopToken",
    ()=>isPopToken,
    "isTokenCredential",
    ()=>isTokenCredential
]);
function isBearerToken(accessToken) {
    return !accessToken.tokenType || accessToken.tokenType === "Bearer";
}
function isPopToken(accessToken) {
    return accessToken.tokenType === "pop";
}
function isTokenCredential(credential) {
    // Check for an object with a 'getToken' function and possibly with
    // a 'signRequest' function.  We do this check to make sure that
    // a ServiceClientCredentials implementor (like TokenClientCredentials
    // in ms-rest-nodeauth) doesn't get mistaken for a TokenCredential if
    // it doesn't actually implement TokenCredential also.
    const castCredential = credential;
    return castCredential && typeof castCredential.getToken === "function" && (castCredential.signRequest === undefined || castCredential.getToken.length > 0);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-auth/dist/esm/azureKeyCredential.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * A static-key-based credential that supports updating
 * the underlying key value.
 */ __turbopack_context__.s([
    "AzureKeyCredential",
    ()=>AzureKeyCredential
]);
class AzureKeyCredential {
    _key;
    /**
     * The value of the key to be used in authentication
     */ get key() {
        return this._key;
    }
    /**
     * Create an instance of an AzureKeyCredential for use
     * with a service client.
     *
     * @param key - The initial value of the key to use in authentication
     */ constructor(key){
        if (!key) {
            throw new Error("key must be a non-empty string");
        }
        this._key = key;
    }
    /**
     * Change the value of the key.
     *
     * Updates will take effect upon the next request after
     * updating the key value.
     *
     * @param newKey - The new key value to be used
     */ update(newKey) {
        this._key = newKey;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/logger.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>logger
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/logger/dist/esm/index.js [app-route] (ecmascript)");
;
const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$logger$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClientLogger"])("core-lro");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/constants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The default time interval to wait before sending the next polling request.
 */ __turbopack_context__.s([
    "POLL_INTERVAL_IN_MS",
    ()=>POLL_INTERVAL_IN_MS,
    "terminalStates",
    ()=>terminalStates
]);
const POLL_INTERVAL_IN_MS = 2000;
const terminalStates = [
    "succeeded",
    "canceled",
    "failed"
];
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/operation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserializeState",
    ()=>deserializeState,
    "initOperation",
    ()=>initOperation,
    "pollOperation",
    ()=>pollOperation
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/constants.js [app-route] (ecmascript)");
;
;
function deserializeState(serializedState) {
    try {
        return JSON.parse(serializedState).state;
    } catch (e) {
        throw new Error(`Unable to deserialize input state: ${serializedState}`);
    }
}
function setStateError(inputs) {
    const { state, stateProxy, isOperationError } = inputs;
    return (error)=>{
        if (isOperationError(error)) {
            stateProxy.setError(state, error);
            stateProxy.setFailed(state);
        }
        throw error;
    };
}
function appendReadableErrorMessage(currentMessage, innerMessage) {
    let message = currentMessage;
    if (message.slice(-1) !== ".") {
        message = message + ".";
    }
    return message + " " + innerMessage;
}
function simplifyError(err) {
    let message = err.message;
    let code = err.code;
    let curErr = err;
    while(curErr.innererror){
        curErr = curErr.innererror;
        code = curErr.code;
        message = appendReadableErrorMessage(message, curErr.message);
    }
    return {
        code,
        message
    };
}
function processOperationStatus(result) {
    const { state, stateProxy, status, isDone, processResult, getError, response, setErrorAsResult } = result;
    switch(status){
        case "succeeded":
            {
                stateProxy.setSucceeded(state);
                break;
            }
        case "failed":
            {
                const err = getError === null || getError === void 0 ? void 0 : getError(response);
                let postfix = "";
                if (err) {
                    const { code, message } = simplifyError(err);
                    postfix = `. ${code}. ${message}`;
                }
                const errStr = `The long-running operation has failed${postfix}`;
                stateProxy.setError(state, new Error(errStr));
                stateProxy.setFailed(state);
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(errStr);
                break;
            }
        case "canceled":
            {
                stateProxy.setCanceled(state);
                break;
            }
    }
    if ((isDone === null || isDone === void 0 ? void 0 : isDone(response, state)) || isDone === undefined && [
        "succeeded",
        "canceled"
    ].concat(setErrorAsResult ? [] : [
        "failed"
    ]).includes(status)) {
        stateProxy.setResult(state, buildResult({
            response,
            state,
            processResult
        }));
    }
}
function buildResult(inputs) {
    const { processResult, response, state } = inputs;
    return processResult ? processResult(response, state) : response;
}
async function initOperation(inputs) {
    const { init, stateProxy, processResult, getOperationStatus, withOperationLocation, setErrorAsResult } = inputs;
    const { operationLocation, resourceLocation, metadata, response } = await init();
    if (operationLocation) withOperationLocation === null || withOperationLocation === void 0 ? void 0 : withOperationLocation(operationLocation, false);
    const config = {
        metadata,
        operationLocation,
        resourceLocation
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].verbose(`LRO: Operation description:`, config);
    const state = stateProxy.initState(config);
    const status = getOperationStatus({
        response,
        state,
        operationLocation
    });
    processOperationStatus({
        state,
        status,
        stateProxy,
        response,
        setErrorAsResult,
        processResult
    });
    return state;
}
async function pollOperationHelper(inputs) {
    const { poll, state, stateProxy, operationLocation, getOperationStatus, getResourceLocation, isOperationError, options } = inputs;
    const response = await poll(operationLocation, options).catch(setStateError({
        state,
        stateProxy,
        isOperationError
    }));
    const status = getOperationStatus(response, state);
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].verbose(`LRO: Status:\n\tPolling from: ${state.config.operationLocation}\n\tOperation status: ${status}\n\tPolling status: ${__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminalStates"].includes(status) ? "Stopped" : "Running"}`);
    if (status === "succeeded") {
        const resourceLocation = getResourceLocation(response, state);
        if (resourceLocation !== undefined) {
            return {
                response: await poll(resourceLocation).catch(setStateError({
                    state,
                    stateProxy,
                    isOperationError
                })),
                status
            };
        }
    }
    return {
        response,
        status
    };
}
async function pollOperation(inputs) {
    const { poll, state, stateProxy, options, getOperationStatus, getResourceLocation, getOperationLocation, isOperationError, withOperationLocation, getPollingInterval, processResult, getError, updateState, setDelay, isDone, setErrorAsResult } = inputs;
    const { operationLocation } = state.config;
    if (operationLocation !== undefined) {
        const { response, status } = await pollOperationHelper({
            poll,
            getOperationStatus,
            state,
            stateProxy,
            operationLocation,
            getResourceLocation,
            isOperationError,
            options
        });
        processOperationStatus({
            status,
            response,
            state,
            stateProxy,
            isDone,
            processResult,
            getError,
            setErrorAsResult
        });
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminalStates"].includes(status)) {
            const intervalInMs = getPollingInterval === null || getPollingInterval === void 0 ? void 0 : getPollingInterval(response);
            if (intervalInMs) setDelay(intervalInMs);
            const location = getOperationLocation === null || getOperationLocation === void 0 ? void 0 : getOperationLocation(response, state);
            if (location !== undefined) {
                const isUpdated = operationLocation !== location;
                state.config.operationLocation = location;
                withOperationLocation === null || withOperationLocation === void 0 ? void 0 : withOperationLocation(location, isUpdated);
            } else withOperationLocation === null || withOperationLocation === void 0 ? void 0 : withOperationLocation(operationLocation, false);
        }
        updateState === null || updateState === void 0 ? void 0 : updateState(state, response);
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/http/operation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorFromResponse",
    ()=>getErrorFromResponse,
    "getOperationLocation",
    ()=>getOperationLocation,
    "getOperationStatus",
    ()=>getOperationStatus,
    "getResourceLocation",
    ()=>getResourceLocation,
    "getStatusFromInitialResponse",
    ()=>getStatusFromInitialResponse,
    "inferLroMode",
    ()=>inferLroMode,
    "initHttpOperation",
    ()=>initHttpOperation,
    "isOperationError",
    ()=>isOperationError,
    "parseRetryAfter",
    ()=>parseRetryAfter,
    "pollHttpOperation",
    ()=>pollHttpOperation
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/operation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/logger.js [app-route] (ecmascript)");
;
;
function getOperationLocationPollingUrl(inputs) {
    const { azureAsyncOperation, operationLocation } = inputs;
    return operationLocation !== null && operationLocation !== void 0 ? operationLocation : azureAsyncOperation;
}
function getLocationHeader(rawResponse) {
    return rawResponse.headers["location"];
}
function getOperationLocationHeader(rawResponse) {
    return rawResponse.headers["operation-location"];
}
function getAzureAsyncOperationHeader(rawResponse) {
    return rawResponse.headers["azure-asyncoperation"];
}
function findResourceLocation(inputs) {
    var _a;
    const { location, requestMethod, requestPath, resourceLocationConfig } = inputs;
    switch(requestMethod){
        case "PUT":
            {
                return requestPath;
            }
        case "DELETE":
            {
                return undefined;
            }
        case "PATCH":
            {
                return (_a = getDefault()) !== null && _a !== void 0 ? _a : requestPath;
            }
        default:
            {
                return getDefault();
            }
    }
    function getDefault() {
        switch(resourceLocationConfig){
            case "azure-async-operation":
                {
                    return undefined;
                }
            case "original-uri":
                {
                    return requestPath;
                }
            case "location":
            default:
                {
                    return location;
                }
        }
    }
}
function inferLroMode(inputs) {
    const { rawResponse, requestMethod, requestPath, resourceLocationConfig } = inputs;
    const operationLocation = getOperationLocationHeader(rawResponse);
    const azureAsyncOperation = getAzureAsyncOperationHeader(rawResponse);
    const pollingUrl = getOperationLocationPollingUrl({
        operationLocation,
        azureAsyncOperation
    });
    const location = getLocationHeader(rawResponse);
    const normalizedRequestMethod = requestMethod === null || requestMethod === void 0 ? void 0 : requestMethod.toLocaleUpperCase();
    if (pollingUrl !== undefined) {
        return {
            mode: "OperationLocation",
            operationLocation: pollingUrl,
            resourceLocation: findResourceLocation({
                requestMethod: normalizedRequestMethod,
                location,
                requestPath,
                resourceLocationConfig
            })
        };
    } else if (location !== undefined) {
        return {
            mode: "ResourceLocation",
            operationLocation: location
        };
    } else if (normalizedRequestMethod === "PUT" && requestPath) {
        return {
            mode: "Body",
            operationLocation: requestPath
        };
    } else {
        return undefined;
    }
}
function transformStatus(inputs) {
    const { status, statusCode } = inputs;
    if (typeof status !== "string" && status !== undefined) {
        throw new Error(`Polling was unsuccessful. Expected status to have a string value or no value but it has instead: ${status}. This doesn't necessarily indicate the operation has failed. Check your Azure subscription or resource status for more information.`);
    }
    switch(status === null || status === void 0 ? void 0 : status.toLocaleLowerCase()){
        case undefined:
            return toOperationStatus(statusCode);
        case "succeeded":
            return "succeeded";
        case "failed":
            return "failed";
        case "running":
        case "accepted":
        case "started":
        case "canceling":
        case "cancelling":
            return "running";
        case "canceled":
        case "cancelled":
            return "canceled";
        default:
            {
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].verbose(`LRO: unrecognized operation status: ${status}`);
                return status;
            }
    }
}
function getStatus(rawResponse) {
    var _a;
    const { status } = (_a = rawResponse.body) !== null && _a !== void 0 ? _a : {};
    return transformStatus({
        status,
        statusCode: rawResponse.statusCode
    });
}
function getProvisioningState(rawResponse) {
    var _a, _b;
    const { properties, provisioningState } = (_a = rawResponse.body) !== null && _a !== void 0 ? _a : {};
    const status = (_b = properties === null || properties === void 0 ? void 0 : properties.provisioningState) !== null && _b !== void 0 ? _b : provisioningState;
    return transformStatus({
        status,
        statusCode: rawResponse.statusCode
    });
}
function toOperationStatus(statusCode) {
    if (statusCode === 202) {
        return "running";
    } else if (statusCode < 300) {
        return "succeeded";
    } else {
        return "failed";
    }
}
function parseRetryAfter({ rawResponse }) {
    const retryAfter = rawResponse.headers["retry-after"];
    if (retryAfter !== undefined) {
        // Retry-After header value is either in HTTP date format, or in seconds
        const retryAfterInSeconds = parseInt(retryAfter);
        return isNaN(retryAfterInSeconds) ? calculatePollingIntervalFromDate(new Date(retryAfter)) : retryAfterInSeconds * 1000;
    }
    return undefined;
}
function getErrorFromResponse(response) {
    const error = accessBodyProperty(response, "error");
    if (!error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`The long-running operation failed but there is no error property in the response's body`);
        return;
    }
    if (!error.code || !error.message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warning(`The long-running operation failed but the error property in the response's body doesn't contain code or message`);
        return;
    }
    return error;
}
function calculatePollingIntervalFromDate(retryAfterDate) {
    const timeNow = Math.floor(new Date().getTime());
    const retryAfterTime = retryAfterDate.getTime();
    if (timeNow < retryAfterTime) {
        return retryAfterTime - timeNow;
    }
    return undefined;
}
function getStatusFromInitialResponse(inputs) {
    const { response, state, operationLocation } = inputs;
    function helper() {
        var _a;
        const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
        switch(mode){
            case undefined:
                return toOperationStatus(response.rawResponse.statusCode);
            case "Body":
                return getOperationStatus(response, state);
            default:
                return "running";
        }
    }
    const status = helper();
    return status === "running" && operationLocation === undefined ? "succeeded" : status;
}
async function initHttpOperation(inputs) {
    const { stateProxy, resourceLocationConfig, processResult, lro, setErrorAsResult } = inputs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initOperation"])({
        init: async ()=>{
            const response = await lro.sendInitialRequest();
            const config = inferLroMode({
                rawResponse: response.rawResponse,
                requestPath: lro.requestPath,
                requestMethod: lro.requestMethod,
                resourceLocationConfig
            });
            return Object.assign({
                response,
                operationLocation: config === null || config === void 0 ? void 0 : config.operationLocation,
                resourceLocation: config === null || config === void 0 ? void 0 : config.resourceLocation
            }, (config === null || config === void 0 ? void 0 : config.mode) ? {
                metadata: {
                    mode: config.mode
                }
            } : {});
        },
        stateProxy,
        processResult: processResult ? ({ flatResponse }, state)=>processResult(flatResponse, state) : ({ flatResponse })=>flatResponse,
        getOperationStatus: getStatusFromInitialResponse,
        setErrorAsResult
    });
}
function getOperationLocation({ rawResponse }, state) {
    var _a;
    const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
    switch(mode){
        case "OperationLocation":
            {
                return getOperationLocationPollingUrl({
                    operationLocation: getOperationLocationHeader(rawResponse),
                    azureAsyncOperation: getAzureAsyncOperationHeader(rawResponse)
                });
            }
        case "ResourceLocation":
            {
                return getLocationHeader(rawResponse);
            }
        case "Body":
        default:
            {
                return undefined;
            }
    }
}
function getOperationStatus({ rawResponse }, state) {
    var _a;
    const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
    switch(mode){
        case "OperationLocation":
            {
                return getStatus(rawResponse);
            }
        case "ResourceLocation":
            {
                return toOperationStatus(rawResponse.statusCode);
            }
        case "Body":
            {
                return getProvisioningState(rawResponse);
            }
        default:
            throw new Error(`Internal error: Unexpected operation mode: ${mode}`);
    }
}
function accessBodyProperty({ flatResponse, rawResponse }, prop) {
    var _a, _b;
    return (_a = flatResponse === null || flatResponse === void 0 ? void 0 : flatResponse[prop]) !== null && _a !== void 0 ? _a : (_b = rawResponse.body) === null || _b === void 0 ? void 0 : _b[prop];
}
function getResourceLocation(res, state) {
    const loc = accessBodyProperty(res, "resourceLocation");
    if (loc && typeof loc === "string") {
        state.config.resourceLocation = loc;
    }
    return state.config.resourceLocation;
}
function isOperationError(e) {
    return e.name === "RestError";
}
async function pollHttpOperation(inputs) {
    const { lro, stateProxy, options, processResult, updateState, setDelay, state, setErrorAsResult } = inputs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pollOperation"])({
        state,
        stateProxy,
        setDelay,
        processResult: processResult ? ({ flatResponse }, inputState)=>processResult(flatResponse, inputState) : ({ flatResponse })=>flatResponse,
        getError: getErrorFromResponse,
        updateState,
        getPollingInterval: parseRetryAfter,
        getOperationLocation,
        getOperationStatus,
        isOperationError,
        getResourceLocation,
        options,
        /**
         * The expansion here is intentional because `lro` could be an object that
         * references an inner this, so we need to preserve a reference to it.
         */ poll: async (location, inputOptions)=>lro.sendPollRequest(location, inputOptions),
        setErrorAsResult
    });
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/poller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCreatePoller",
    ()=>buildCreatePoller
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/operation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-util/dist/esm/delay.js [app-route] (ecmascript)");
;
;
;
const createStateProxy = ()=>({
        /**
     * The state at this point is created to be of type OperationState<TResult>.
     * It will be updated later to be of type TState when the
     * customer-provided callback, `updateState`, is called during polling.
     */ initState: (config)=>({
                status: "running",
                config
            }),
        setCanceled: (state)=>state.status = "canceled",
        setError: (state, error)=>state.error = error,
        setResult: (state, result)=>state.result = result,
        setRunning: (state)=>state.status = "running",
        setSucceeded: (state)=>state.status = "succeeded",
        setFailed: (state)=>state.status = "failed",
        getError: (state)=>state.error,
        getResult: (state)=>state.result,
        isCanceled: (state)=>state.status === "canceled",
        isFailed: (state)=>state.status === "failed",
        isRunning: (state)=>state.status === "running",
        isSucceeded: (state)=>state.status === "succeeded"
    });
function buildCreatePoller(inputs) {
    const { getOperationLocation, getStatusFromInitialResponse, getStatusFromPollResponse, isOperationError, getResourceLocation, getPollingInterval, getError, resolveOnUnsuccessful } = inputs;
    return async ({ init, poll }, options)=>{
        const { processResult, updateState, withOperationLocation: withOperationLocationCallback, intervalInMs = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["POLL_INTERVAL_IN_MS"], restoreFrom } = options || {};
        const stateProxy = createStateProxy();
        const withOperationLocation = withOperationLocationCallback ? (()=>{
            let called = false;
            return (operationLocation, isUpdated)=>{
                if (isUpdated) withOperationLocationCallback(operationLocation);
                else if (!called) withOperationLocationCallback(operationLocation);
                called = true;
            };
        })() : undefined;
        const state = restoreFrom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deserializeState"])(restoreFrom) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initOperation"])({
            init,
            stateProxy,
            processResult,
            getOperationStatus: getStatusFromInitialResponse,
            withOperationLocation,
            setErrorAsResult: !resolveOnUnsuccessful
        });
        let resultPromise;
        const abortController = new AbortController();
        const handlers = new Map();
        const handleProgressEvents = async ()=>handlers.forEach((h)=>h(state));
        const cancelErrMsg = "Operation was canceled";
        let currentPollIntervalInMs = intervalInMs;
        const poller = {
            getOperationState: ()=>state,
            getResult: ()=>state.result,
            isDone: ()=>[
                    "succeeded",
                    "failed",
                    "canceled"
                ].includes(state.status),
            isStopped: ()=>resultPromise === undefined,
            stopPolling: ()=>{
                abortController.abort();
            },
            toString: ()=>JSON.stringify({
                    state
                }),
            onProgress: (callback)=>{
                const s = Symbol();
                handlers.set(s, callback);
                return ()=>handlers.delete(s);
            },
            pollUntilDone: (pollOptions)=>resultPromise !== null && resultPromise !== void 0 ? resultPromise : resultPromise = (async ()=>{
                    const { abortSignal: inputAbortSignal } = pollOptions || {};
                    // In the future we can use AbortSignal.any() instead
                    function abortListener() {
                        abortController.abort();
                    }
                    const abortSignal = abortController.signal;
                    if (inputAbortSignal === null || inputAbortSignal === void 0 ? void 0 : inputAbortSignal.aborted) {
                        abortController.abort();
                    } else if (!abortSignal.aborted) {
                        inputAbortSignal === null || inputAbortSignal === void 0 ? void 0 : inputAbortSignal.addEventListener("abort", abortListener, {
                            once: true
                        });
                    }
                    try {
                        if (!poller.isDone()) {
                            await poller.poll({
                                abortSignal
                            });
                            while(!poller.isDone()){
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$util$2f$dist$2f$esm$2f$delay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["delay"])(currentPollIntervalInMs, {
                                    abortSignal
                                });
                                await poller.poll({
                                    abortSignal
                                });
                            }
                        }
                    } finally{
                        inputAbortSignal === null || inputAbortSignal === void 0 ? void 0 : inputAbortSignal.removeEventListener("abort", abortListener);
                    }
                    if (resolveOnUnsuccessful) {
                        return poller.getResult();
                    } else {
                        switch(state.status){
                            case "succeeded":
                                return poller.getResult();
                            case "canceled":
                                throw new Error(cancelErrMsg);
                            case "failed":
                                throw state.error;
                            case "notStarted":
                            case "running":
                                throw new Error(`Polling completed without succeeding or failing`);
                        }
                    }
                })().finally(()=>{
                    resultPromise = undefined;
                }),
            async poll (pollOptions) {
                if (resolveOnUnsuccessful) {
                    if (poller.isDone()) return;
                } else {
                    switch(state.status){
                        case "succeeded":
                            return;
                        case "canceled":
                            throw new Error(cancelErrMsg);
                        case "failed":
                            throw state.error;
                    }
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pollOperation"])({
                    poll,
                    state,
                    stateProxy,
                    getOperationLocation,
                    isOperationError,
                    withOperationLocation,
                    getPollingInterval,
                    getOperationStatus: getStatusFromPollResponse,
                    getResourceLocation,
                    processResult,
                    getError,
                    updateState,
                    options: pollOptions,
                    setDelay: (pollIntervalInMs)=>{
                        currentPollIntervalInMs = pollIntervalInMs;
                    },
                    setErrorAsResult: !resolveOnUnsuccessful
                });
                await handleProgressEvents();
                if (!resolveOnUnsuccessful) {
                    switch(state.status){
                        case "canceled":
                            throw new Error(cancelErrMsg);
                        case "failed":
                            throw state.error;
                    }
                }
            }
        };
        return poller;
    };
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/http/poller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpPoller",
    ()=>createHttpPoller
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/http/operation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$poller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/poller.js [app-route] (ecmascript)");
;
;
async function createHttpPoller(lro, options) {
    const { resourceLocationConfig, intervalInMs, processResult, restoreFrom, updateState, withOperationLocation, resolveOnUnsuccessful = false } = options || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$poller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCreatePoller"])({
        getStatusFromInitialResponse: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStatusFromInitialResponse"],
        getStatusFromPollResponse: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperationStatus"],
        isOperationError: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOperationError"],
        getOperationLocation: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperationLocation"],
        getResourceLocation: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getResourceLocation"],
        getPollingInterval: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRetryAfter"],
        getError: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorFromResponse"],
        resolveOnUnsuccessful
    })({
        init: async ()=>{
            const response = await lro.sendInitialRequest();
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inferLroMode"])({
                rawResponse: response.rawResponse,
                requestPath: lro.requestPath,
                requestMethod: lro.requestMethod,
                resourceLocationConfig
            });
            return Object.assign({
                response,
                operationLocation: config === null || config === void 0 ? void 0 : config.operationLocation,
                resourceLocation: config === null || config === void 0 ? void 0 : config.resourceLocation
            }, (config === null || config === void 0 ? void 0 : config.mode) ? {
                metadata: {
                    mode: config.mode
                }
            } : {});
        },
        poll: lro.sendPollRequest
    }, {
        intervalInMs,
        withOperationLocation,
        restoreFrom,
        updateState,
        processResult: processResult ? ({ flatResponse }, state)=>processResult(flatResponse, state) : ({ flatResponse })=>flatResponse
    });
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/operation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericPollOperation",
    ()=>GenericPollOperation
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/http/operation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/logger.js [app-route] (ecmascript)");
;
;
const createStateProxy = ()=>({
        initState: (config)=>({
                config,
                isStarted: true
            }),
        setCanceled: (state)=>state.isCancelled = true,
        setError: (state, error)=>state.error = error,
        setResult: (state, result)=>state.result = result,
        setRunning: (state)=>state.isStarted = true,
        setSucceeded: (state)=>state.isCompleted = true,
        setFailed: ()=>{
        /** empty body */ },
        getError: (state)=>state.error,
        getResult: (state)=>state.result,
        isCanceled: (state)=>!!state.isCancelled,
        isFailed: (state)=>!!state.error,
        isRunning: (state)=>!!state.isStarted,
        isSucceeded: (state)=>Boolean(state.isCompleted && !state.isCancelled && !state.error)
    });
class GenericPollOperation {
    constructor(state, lro, setErrorAsResult, lroResourceLocationConfig, processResult, updateState, isDone){
        this.state = state;
        this.lro = lro;
        this.setErrorAsResult = setErrorAsResult;
        this.lroResourceLocationConfig = lroResourceLocationConfig;
        this.processResult = processResult;
        this.updateState = updateState;
        this.isDone = isDone;
    }
    setPollerConfig(pollerConfig) {
        this.pollerConfig = pollerConfig;
    }
    async update(options) {
        var _a;
        const stateProxy = createStateProxy();
        if (!this.state.isStarted) {
            this.state = Object.assign(Object.assign({}, this.state), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initHttpOperation"])({
                lro: this.lro,
                stateProxy,
                resourceLocationConfig: this.lroResourceLocationConfig,
                processResult: this.processResult,
                setErrorAsResult: this.setErrorAsResult
            }));
        }
        const updateState = this.updateState;
        const isDone = this.isDone;
        if (!this.state.isCompleted && this.state.error === undefined) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pollHttpOperation"])({
                lro: this.lro,
                state: this.state,
                stateProxy,
                processResult: this.processResult,
                updateState: updateState ? (state, { rawResponse })=>updateState(state, rawResponse) : undefined,
                isDone: isDone ? ({ flatResponse }, state)=>isDone(flatResponse, state) : undefined,
                options,
                setDelay: (intervalInMs)=>{
                    this.pollerConfig.intervalInMs = intervalInMs;
                },
                setErrorAsResult: this.setErrorAsResult
            });
        }
        (_a = options === null || options === void 0 ? void 0 : options.fireProgress) === null || _a === void 0 ? void 0 : _a.call(options, this.state);
        return this;
    }
    async cancel() {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("`cancelOperation` is deprecated because it wasn't implemented");
        return this;
    }
    /**
     * Serializes the Poller operation.
     */ toString() {
        return JSON.stringify({
            state: this.state
        });
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/poller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * When a poller is manually stopped through the `stopPolling` method,
 * the poller will be rejected with an instance of the PollerStoppedError.
 */ __turbopack_context__.s([
    "Poller",
    ()=>Poller,
    "PollerCancelledError",
    ()=>PollerCancelledError,
    "PollerStoppedError",
    ()=>PollerStoppedError
]);
class PollerStoppedError extends Error {
    constructor(message){
        super(message);
        this.name = "PollerStoppedError";
        Object.setPrototypeOf(this, PollerStoppedError.prototype);
    }
}
class PollerCancelledError extends Error {
    constructor(message){
        super(message);
        this.name = "PollerCancelledError";
        Object.setPrototypeOf(this, PollerCancelledError.prototype);
    }
}
class Poller {
    /**
     * A poller needs to be initialized by passing in at least the basic properties of the `PollOperation<TState, TResult>`.
     *
     * When writing an implementation of a Poller, this implementation needs to deal with the initialization
     * of any custom state beyond the basic definition of the poller. The basic poller assumes that the poller's
     * operation has already been defined, at least its basic properties. The code below shows how to approach
     * the definition of the constructor of a new custom poller.
     *
     * ```ts
     * export class MyPoller extends Poller<MyOperationState, string> {
     *   constructor({
     *     // Anything you might need outside of the basics
     *   }) {
     *     let state: MyOperationState = {
     *       privateProperty: private,
     *       publicProperty: public,
     *     };
     *
     *     const operation = {
     *       state,
     *       update,
     *       cancel,
     *       toString
     *     }
     *
     *     // Sending the operation to the parent's constructor.
     *     super(operation);
     *
     *     // You can assign more local properties here.
     *   }
     * }
     * ```
     *
     * Inside of this constructor, a new promise is created. This will be used to
     * tell the user when the poller finishes (see `pollUntilDone()`). The promise's
     * resolve and reject methods are also used internally to control when to resolve
     * or reject anyone waiting for the poller to finish.
     *
     * The constructor of a custom implementation of a poller is where any serialized version of
     * a previous poller's operation should be deserialized into the operation sent to the
     * base constructor. For example:
     *
     * ```ts
     * export class MyPoller extends Poller<MyOperationState, string> {
     *   constructor(
     *     baseOperation: string | undefined
     *   ) {
     *     let state: MyOperationState = {};
     *     if (baseOperation) {
     *       state = {
     *         ...JSON.parse(baseOperation).state,
     *         ...state
     *       };
     *     }
     *     const operation = {
     *       state,
     *       // ...
     *     }
     *     super(operation);
     *   }
     * }
     * ```
     *
     * @param operation - Must contain the basic properties of `PollOperation<State, TResult>`.
     */ constructor(operation){
        /** controls whether to throw an error if the operation failed or was canceled. */ this.resolveOnUnsuccessful = false;
        this.stopped = true;
        this.pollProgressCallbacks = [];
        this.operation = operation;
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        // This prevents the UnhandledPromiseRejectionWarning in node.js from being thrown.
        // The above warning would get thrown if `poller.poll` is called, it returns an error,
        // and pullUntilDone did not have a .catch or await try/catch on it's return value.
        this.promise.catch(()=>{
        /* intentionally blank */ });
    }
    /**
     * Starts a loop that will break only if the poller is done
     * or if the poller is stopped.
     */ async startPolling(pollOptions = {}) {
        if (this.stopped) {
            this.stopped = false;
        }
        while(!this.isStopped() && !this.isDone()){
            await this.poll(pollOptions);
            await this.delay();
        }
    }
    /**
     * pollOnce does one polling, by calling to the update method of the underlying
     * poll operation to make any relevant change effective.
     *
     * It only optionally receives an object with an abortSignal property, from \@azure/abort-controller's AbortSignalLike.
     *
     * @param options - Optional properties passed to the operation's update method.
     */ async pollOnce(options = {}) {
        if (!this.isDone()) {
            this.operation = await this.operation.update({
                abortSignal: options.abortSignal,
                fireProgress: this.fireProgress.bind(this)
            });
        }
        this.processUpdatedState();
    }
    /**
     * fireProgress calls the functions passed in via onProgress the method of the poller.
     *
     * It loops over all of the callbacks received from onProgress, and executes them, sending them
     * the current operation state.
     *
     * @param state - The current operation state.
     */ fireProgress(state) {
        for (const callback of this.pollProgressCallbacks){
            callback(state);
        }
    }
    /**
     * Invokes the underlying operation's cancel method.
     */ async cancelOnce(options = {}) {
        this.operation = await this.operation.cancel(options);
    }
    /**
     * Returns a promise that will resolve once a single polling request finishes.
     * It does this by calling the update method of the Poller's operation.
     *
     * It only optionally receives an object with an abortSignal property, from \@azure/abort-controller's AbortSignalLike.
     *
     * @param options - Optional properties passed to the operation's update method.
     */ poll(options = {}) {
        if (!this.pollOncePromise) {
            this.pollOncePromise = this.pollOnce(options);
            const clearPollOncePromise = ()=>{
                this.pollOncePromise = undefined;
            };
            this.pollOncePromise.then(clearPollOncePromise, clearPollOncePromise).catch(this.reject);
        }
        return this.pollOncePromise;
    }
    processUpdatedState() {
        if (this.operation.state.error) {
            this.stopped = true;
            if (!this.resolveOnUnsuccessful) {
                this.reject(this.operation.state.error);
                throw this.operation.state.error;
            }
        }
        if (this.operation.state.isCancelled) {
            this.stopped = true;
            if (!this.resolveOnUnsuccessful) {
                const error = new PollerCancelledError("Operation was canceled");
                this.reject(error);
                throw error;
            }
        }
        if (this.isDone() && this.resolve) {
            // If the poller has finished polling, this means we now have a result.
            // However, it can be the case that TResult is instantiated to void, so
            // we are not expecting a result anyway. To assert that we might not
            // have a result eventually after finishing polling, we cast the result
            // to TResult.
            this.resolve(this.getResult());
        }
    }
    /**
     * Returns a promise that will resolve once the underlying operation is completed.
     */ async pollUntilDone(pollOptions = {}) {
        if (this.stopped) {
            this.startPolling(pollOptions).catch(this.reject);
        }
        // This is needed because the state could have been updated by
        // `cancelOperation`, e.g. the operation is canceled or an error occurred.
        this.processUpdatedState();
        return this.promise;
    }
    /**
     * Invokes the provided callback after each polling is completed,
     * sending the current state of the poller's operation.
     *
     * It returns a method that can be used to stop receiving updates on the given callback function.
     */ onProgress(callback) {
        this.pollProgressCallbacks.push(callback);
        return ()=>{
            this.pollProgressCallbacks = this.pollProgressCallbacks.filter((c)=>c !== callback);
        };
    }
    /**
     * Returns true if the poller has finished polling.
     */ isDone() {
        const state = this.operation.state;
        return Boolean(state.isCompleted || state.isCancelled || state.error);
    }
    /**
     * Stops the poller from continuing to poll.
     */ stopPolling() {
        if (!this.stopped) {
            this.stopped = true;
            if (this.reject) {
                this.reject(new PollerStoppedError("This poller is already stopped"));
            }
        }
    }
    /**
     * Returns true if the poller is stopped.
     */ isStopped() {
        return this.stopped;
    }
    /**
     * Attempts to cancel the underlying operation.
     *
     * It only optionally receives an object with an abortSignal property, from \@azure/abort-controller's AbortSignalLike.
     *
     * If it's called again before it finishes, it will throw an error.
     *
     * @param options - Optional properties passed to the operation's update method.
     */ cancelOperation(options = {}) {
        if (!this.cancelPromise) {
            this.cancelPromise = this.cancelOnce(options);
        } else if (options.abortSignal) {
            throw new Error("A cancel request is currently pending");
        }
        return this.cancelPromise;
    }
    /**
     * Returns the state of the operation.
     *
     * Even though TState will be the same type inside any of the methods of any extension of the Poller class,
     * implementations of the pollers can customize what's shared with the public by writing their own
     * version of the `getOperationState` method, and by defining two types, one representing the internal state of the poller
     * and a public type representing a safe to share subset of the properties of the internal state.
     * Their definition of getOperationState can then return their public type.
     *
     * Example:
     *
     * ```ts
     * // Let's say we have our poller's operation state defined as:
     * interface MyOperationState extends PollOperationState<ResultType> {
     *   privateProperty?: string;
     *   publicProperty?: string;
     * }
     *
     * // To allow us to have a true separation of public and private state, we have to define another interface:
     * interface PublicState extends PollOperationState<ResultType> {
     *   publicProperty?: string;
     * }
     *
     * // Then, we define our Poller as follows:
     * export class MyPoller extends Poller<MyOperationState, ResultType> {
     *   // ... More content is needed here ...
     *
     *   public getOperationState(): PublicState {
     *     const state: PublicState = this.operation.state;
     *     return {
     *       // Properties from PollOperationState<TResult>
     *       isStarted: state.isStarted,
     *       isCompleted: state.isCompleted,
     *       isCancelled: state.isCancelled,
     *       error: state.error,
     *       result: state.result,
     *
     *       // The only other property needed by PublicState.
     *       publicProperty: state.publicProperty
     *     }
     *   }
     * }
     * ```
     *
     * You can see this in the tests of this repository, go to the file:
     * `../test/utils/testPoller.ts`
     * and look for the getOperationState implementation.
     */ getOperationState() {
        return this.operation.state;
    }
    /**
     * Returns the result value of the operation,
     * regardless of the state of the poller.
     * It can return undefined or an incomplete form of the final TResult value
     * depending on the implementation.
     */ getResult() {
        const state = this.operation.state;
        return state.result;
    }
    /**
     * Returns a serialized version of the poller's operation
     * by invoking the operation's toString method.
     */ toString() {
        return this.operation.toString();
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/lroEngine.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LroEngine",
    ()=>LroEngine
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$lroEngine$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/operation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$poller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/poller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/poller/operation.js [app-route] (ecmascript)");
;
;
;
;
class LroEngine extends __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$poller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Poller"] {
    constructor(lro, options){
        const { intervalInMs = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["POLL_INTERVAL_IN_MS"], resumeFrom, resolveOnUnsuccessful = false, isDone, lroResourceLocationConfig, processResult, updateState } = options || {};
        const state = resumeFrom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$poller$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deserializeState"])(resumeFrom) : {};
        const operation = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$lroEngine$2f$operation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericPollOperation"](state, lro, !resolveOnUnsuccessful, lroResourceLocationConfig, processResult, updateState, isDone);
        super(operation);
        this.resolveOnUnsuccessful = resolveOnUnsuccessful;
        this.config = {
            intervalInMs: intervalInMs
        };
        operation.setPollerConfig(this.config);
    }
    /**
     * The method used by the poller to wait before attempting to update its operation.
     */ delay() {
        return new Promise((resolve)=>setTimeout(()=>resolve(), this.config.intervalInMs));
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$lroEngine$2f$lroEngine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/lroEngine.js [app-route] (ecmascript)");
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$http$2f$poller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/http/poller.js [app-route] (ecmascript)");
/**
 * This can be uncommented to expose the protocol-agnostic poller
 */ // export {
//   BuildCreatePollerOptions,
//   Operation,
//   CreatePollerOptions,
//   OperationConfig,
//   RestorableOperationState,
// } from "./poller/models";
// export { buildCreatePoller } from "./poller/poller";
/** legacy */ var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$lro$2f$dist$2f$esm$2f$legacy$2f$lroEngine$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-lro/dist/esm/legacy/lroEngine/index.js [app-route] (ecmascript) <locals>");
;
;
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Expression - Parses and stores a tag pattern expression
 * 
 * Patterns are parsed once and stored in an optimized structure for fast matching.
 * 
 * @example
 * const expr = new Expression("root.users.user");
 * const expr2 = new Expression("..user[id]:first");
 * const expr3 = new Expression("root/users/user", { separator: '/' });
 */ __turbopack_context__.s([
    "default",
    ()=>Expression
]);
class Expression {
    /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */ constructor(pattern, options = {}, data){
        this.pattern = pattern;
        this.separator = options.separator || '.';
        this.segments = this._parse(pattern);
        this.data = data;
        // Cache expensive checks for performance (O(1) instead of O(n))
        this._hasDeepWildcard = this.segments.some((seg)=>seg.type === 'deep-wildcard');
        this._hasAttributeCondition = this.segments.some((seg)=>seg.attrName !== undefined);
        this._hasPositionSelector = this.segments.some((seg)=>seg.position !== undefined);
    }
    /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */ _parse(pattern) {
        const segments = [];
        // Split by separator but handle ".." specially
        let i = 0;
        let currentPart = '';
        while(i < pattern.length){
            if (pattern[i] === this.separator) {
                // Check if next char is also separator (deep wildcard)
                if (i + 1 < pattern.length && pattern[i + 1] === this.separator) {
                    // Flush current part if any
                    if (currentPart.trim()) {
                        segments.push(this._parseSegment(currentPart.trim()));
                        currentPart = '';
                    }
                    // Add deep wildcard
                    segments.push({
                        type: 'deep-wildcard'
                    });
                    i += 2; // Skip both separators
                } else {
                    // Regular separator
                    if (currentPart.trim()) {
                        segments.push(this._parseSegment(currentPart.trim()));
                    }
                    currentPart = '';
                    i++;
                }
            } else {
                currentPart += pattern[i];
                i++;
            }
        }
        // Flush remaining part
        if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
        }
        return segments;
    }
    /**
   * Parse a single segment
   * @private
   * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
   * @returns {Object} Segment object
   */ _parseSegment(part) {
        const segment = {
            type: 'tag'
        };
        // NEW NAMESPACE SYNTAX (v2.0):
        // ============================
        // Namespace uses DOUBLE colon (::)
        // Position uses SINGLE colon (:)
        // 
        // Examples:
        //   "user"              → tag
        //   "user:first"        → tag + position
        //   "user[id]"          → tag + attribute
        //   "user[id]:first"    → tag + attribute + position
        //   "ns::user"          → namespace + tag
        //   "ns::user:first"    → namespace + tag + position
        //   "ns::user[id]"      → namespace + tag + attribute
        //   "ns::user[id]:first" → namespace + tag + attribute + position
        //   "ns::first"         → namespace + tag named "first" (NO ambiguity!)
        //
        // This eliminates all ambiguity:
        //   :: = namespace separator
        //   :  = position selector
        //   [] = attributes
        // Step 1: Extract brackets [attr] or [attr=value]
        let bracketContent = null;
        let withoutBrackets = part;
        const bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (bracketMatch) {
            withoutBrackets = bracketMatch[1] + bracketMatch[3];
            if (bracketMatch[2]) {
                const content = bracketMatch[2].slice(1, -1);
                if (content) {
                    bracketContent = content;
                }
            }
        }
        // Step 2: Check for namespace (double colon ::)
        let namespace = undefined;
        let tagAndPosition = withoutBrackets;
        if (withoutBrackets.includes('::')) {
            const nsIndex = withoutBrackets.indexOf('::');
            namespace = withoutBrackets.substring(0, nsIndex).trim();
            tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim(); // Skip ::
            if (!namespace) {
                throw new Error(`Invalid namespace in pattern: ${part}`);
            }
        }
        // Step 3: Parse tag and position (single colon :)
        let tag = undefined;
        let positionMatch = null;
        if (tagAndPosition.includes(':')) {
            const colonIndex = tagAndPosition.lastIndexOf(':'); // Use last colon for position
            const tagPart = tagAndPosition.substring(0, colonIndex).trim();
            const posPart = tagAndPosition.substring(colonIndex + 1).trim();
            // Verify position is a valid keyword
            const isPositionKeyword = [
                'first',
                'last',
                'odd',
                'even'
            ].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
            if (isPositionKeyword) {
                tag = tagPart;
                positionMatch = posPart;
            } else {
                // Not a valid position keyword, treat whole thing as tag
                tag = tagAndPosition;
            }
        } else {
            tag = tagAndPosition;
        }
        if (!tag) {
            throw new Error(`Invalid segment pattern: ${part}`);
        }
        segment.tag = tag;
        if (namespace) {
            segment.namespace = namespace;
        }
        // Step 4: Parse attributes
        if (bracketContent) {
            if (bracketContent.includes('=')) {
                const eqIndex = bracketContent.indexOf('=');
                segment.attrName = bracketContent.substring(0, eqIndex).trim();
                segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
            } else {
                segment.attrName = bracketContent.trim();
            }
        }
        // Step 5: Parse position selector
        if (positionMatch) {
            const nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
            if (nthMatch) {
                segment.position = 'nth';
                segment.positionValue = parseInt(nthMatch[1], 10);
            } else {
                segment.position = positionMatch;
            }
        }
        return segment;
    }
    /**
   * Get the number of segments
   * @returns {number}
   */ get length() {
        return this.segments.length;
    }
    /**
   * Check if expression contains deep wildcard
   * @returns {boolean}
   */ hasDeepWildcard() {
        return this._hasDeepWildcard;
    }
    /**
   * Check if expression has attribute conditions
   * @returns {boolean}
   */ hasAttributeCondition() {
        return this._hasAttributeCondition;
    }
    /**
   * Check if expression has position selectors
   * @returns {boolean}
   */ hasPositionSelector() {
        return this._hasPositionSelector;
    }
    /**
   * Get string representation
   * @returns {string}
   */ toString() {
        return this.pattern;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expression",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript)");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatcherView",
    ()=>MatcherView,
    "default",
    ()=>Matcher
]);
;
class MatcherView {
    /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */ constructor(matcher){
        this._matcher = matcher;
    }
    /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */ get separator() {
        return this._matcher.separator;
    }
    /**
   * Get current tag name.
   * @returns {string|undefined}
   */ getCurrentTag() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].tag : undefined;
    }
    /**
   * Get current namespace.
   * @returns {string|undefined}
   */ getCurrentNamespace() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].namespace : undefined;
    }
    /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */ getAttrValue(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return undefined;
        return path[path.length - 1].values?.[attrName];
    }
    /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */ hasAttr(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return false;
        const current = path[path.length - 1];
        return current.values !== undefined && attrName in current.values;
    }
    /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */ getPosition() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].position ?? 0;
    }
    /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */ getCounter() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].counter ?? 0;
    }
    /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */ getIndex() {
        return this.getPosition();
    }
    /**
   * Get current path depth.
   * @returns {number}
   */ getDepth() {
        return this._matcher.path.length;
    }
    /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */ toString(separator, includeNamespace = true) {
        return this._matcher.toString(separator, includeNamespace);
    }
    /**
   * Get path as array of tag names.
   * @returns {string[]}
   */ toArray() {
        return this._matcher.path.map((n)=>n.tag);
    }
    /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */ matches(expression) {
        return this._matcher.matches(expression);
    }
    /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */ matchesAny(exprSet) {
        return exprSet.matchesAny(this._matcher);
    }
}
class Matcher {
    /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */ constructor(options = {}){
        this.separator = options.separator || '.';
        this.path = [];
        this.siblingStacks = [];
        // Each path node: { tag, values, position, counter, namespace? }
        // values only present for current (last) node
        // Each siblingStacks entry: Map<tagName, count> tracking occurrences at each level
        this._pathStringCache = null;
        this._view = new MatcherView(this);
    }
    /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   */ push(tagName, attrValues = null, namespace = null) {
        this._pathStringCache = null;
        // Remove values from previous current node (now becoming ancestor)
        if (this.path.length > 0) {
            this.path[this.path.length - 1].values = undefined;
        }
        // Get or create sibling tracking for current level
        const currentLevel = this.path.length;
        if (!this.siblingStacks[currentLevel]) {
            this.siblingStacks[currentLevel] = new Map();
        }
        const siblings = this.siblingStacks[currentLevel];
        // Create a unique key for sibling tracking that includes namespace
        const siblingKey = namespace ? `${namespace}:${tagName}` : tagName;
        // Calculate counter (how many times this tag appeared at this level)
        const counter = siblings.get(siblingKey) || 0;
        // Calculate position (total children at this level so far)
        let position = 0;
        for (const count of siblings.values()){
            position += count;
        }
        // Update sibling count for this tag
        siblings.set(siblingKey, counter + 1);
        // Create new node
        const node = {
            tag: tagName,
            position: position,
            counter: counter
        };
        if (namespace !== null && namespace !== undefined) {
            node.namespace = namespace;
        }
        if (attrValues !== null && attrValues !== undefined) {
            node.values = attrValues;
        }
        this.path.push(node);
    }
    /**
   * Pop the last tag from the path.
   * @returns {Object|undefined} The popped node
   */ pop() {
        if (this.path.length === 0) return undefined;
        this._pathStringCache = null;
        const node = this.path.pop();
        if (this.siblingStacks.length > this.path.length + 1) {
            this.siblingStacks.length = this.path.length + 1;
        }
        return node;
    }
    /**
   * Update current node's attribute values.
   * Useful when attributes are parsed after push.
   * @param {Object} attrValues
   */ updateCurrent(attrValues) {
        if (this.path.length > 0) {
            const current = this.path[this.path.length - 1];
            if (attrValues !== null && attrValues !== undefined) {
                current.values = attrValues;
            }
        }
    }
    /**
   * Get current tag name.
   * @returns {string|undefined}
   */ getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : undefined;
    }
    /**
   * Get current namespace.
   * @returns {string|undefined}
   */ getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : undefined;
    }
    /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */ getAttrValue(attrName) {
        if (this.path.length === 0) return undefined;
        return this.path[this.path.length - 1].values?.[attrName];
    }
    /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */ hasAttr(attrName) {
        if (this.path.length === 0) return false;
        const current = this.path[this.path.length - 1];
        return current.values !== undefined && attrName in current.values;
    }
    /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */ getPosition() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].position ?? 0;
    }
    /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */ getCounter() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].counter ?? 0;
    }
    /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */ getIndex() {
        return this.getPosition();
    }
    /**
   * Get current path depth.
   * @returns {number}
   */ getDepth() {
        return this.path.length;
    }
    /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */ toString(separator, includeNamespace = true) {
        const sep = separator || this.separator;
        const isDefault = sep === this.separator && includeNamespace === true;
        if (isDefault) {
            if (this._pathStringCache !== null) {
                return this._pathStringCache;
            }
            const result = this.path.map((n)=>n.namespace ? `${n.namespace}:${n.tag}` : n.tag).join(sep);
            this._pathStringCache = result;
            return result;
        }
        return this.path.map((n)=>includeNamespace && n.namespace ? `${n.namespace}:${n.tag}` : n.tag).join(sep);
    }
    /**
   * Get path as array of tag names.
   * @returns {string[]}
   */ toArray() {
        return this.path.map((n)=>n.tag);
    }
    /**
   * Reset the path to empty.
   */ reset() {
        this._pathStringCache = null;
        this.path = [];
        this.siblingStacks = [];
    }
    /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */ matches(expression) {
        const segments = expression.segments;
        if (segments.length === 0) {
            return false;
        }
        if (expression.hasDeepWildcard()) {
            return this._matchWithDeepWildcard(segments);
        }
        return this._matchSimple(segments);
    }
    /**
   * @private
   */ _matchSimple(segments) {
        if (this.path.length !== segments.length) {
            return false;
        }
        for(let i = 0; i < segments.length; i++){
            if (!this._matchSegment(segments[i], this.path[i], i === this.path.length - 1)) {
                return false;
            }
        }
        return true;
    }
    /**
   * @private
   */ _matchWithDeepWildcard(segments) {
        let pathIdx = this.path.length - 1;
        let segIdx = segments.length - 1;
        while(segIdx >= 0 && pathIdx >= 0){
            const segment = segments[segIdx];
            if (segment.type === 'deep-wildcard') {
                segIdx--;
                if (segIdx < 0) {
                    return true;
                }
                const nextSeg = segments[segIdx];
                let found = false;
                for(let i = pathIdx; i >= 0; i--){
                    if (this._matchSegment(nextSeg, this.path[i], i === this.path.length - 1)) {
                        pathIdx = i - 1;
                        segIdx--;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            } else {
                if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
                    return false;
                }
                pathIdx--;
                segIdx--;
            }
        }
        return segIdx < 0;
    }
    /**
   * @private
   */ _matchSegment(segment, node, isCurrentNode) {
        if (segment.tag !== '*' && segment.tag !== node.tag) {
            return false;
        }
        if (segment.namespace !== undefined) {
            if (segment.namespace !== '*' && segment.namespace !== node.namespace) {
                return false;
            }
        }
        if (segment.attrName !== undefined) {
            if (!isCurrentNode) {
                return false;
            }
            if (!node.values || !(segment.attrName in node.values)) {
                return false;
            }
            if (segment.attrValue !== undefined) {
                if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
                    return false;
                }
            }
        }
        if (segment.position !== undefined) {
            if (!isCurrentNode) {
                return false;
            }
            const counter = node.counter ?? 0;
            if (segment.position === 'first' && counter !== 0) {
                return false;
            } else if (segment.position === 'odd' && counter % 2 !== 1) {
                return false;
            } else if (segment.position === 'even' && counter % 2 !== 0) {
                return false;
            } else if (segment.position === 'nth' && counter !== segment.positionValue) {
                return false;
            }
        }
        return true;
    }
    /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */ matchesAny(exprSet) {
        return exprSet.matchesAny(this);
    }
    /**
   * Create a snapshot of current state.
   * @returns {Object}
   */ snapshot() {
        return {
            path: this.path.map((node)=>({
                    ...node
                })),
            siblingStacks: this.siblingStacks.map((map)=>new Map(map))
        };
    }
    /**
   * Restore state from snapshot.
   * @param {Object} snapshot
   */ restore(snapshot) {
        this._pathStringCache = null;
        this.path = snapshot.path.map((node)=>({
                ...node
            }));
        this.siblingStacks = snapshot.siblingStacks.map((map)=>new Map(map));
    }
    /**
   * Return the read-only {@link MatcherView} for this matcher.
   *
   * The same instance is returned on every call — no allocation occurs.
   * It always reflects the current parser state and is safe to pass to
   * user callbacks without risk of accidental mutation.
   *
   * @returns {MatcherView}
   *
   * @example
   * const view = matcher.readOnly();
   * // pass view to callbacks — it stays in sync automatically
   * view.matches(expr);       // ✓
   * view.getCurrentTag();     // ✓
   * // view.push(...)         // ✗ method does not exist — caught by TypeScript
   */ readOnly() {
        return this._view;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript)");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ExpressionSet - An indexed collection of Expressions for efficient bulk matching
 *
 * Instead of iterating all expressions on every tag, ExpressionSet pre-indexes
 * them at insertion time by depth and terminal tag name. At match time, only
 * the relevant bucket is evaluated — typically reducing checks from O(E) to O(1)
 * lookup plus O(small bucket) matches.
 *
 * Three buckets are maintained:
 *  - `_byDepthAndTag`  — exact depth + exact tag name  (tightest, used first)
 *  - `_wildcardByDepth` — exact depth + wildcard tag `*` (depth-matched only)
 *  - `_deepWildcards`  — expressions containing `..`  (cannot be depth-indexed)
 *
 * @example
 * import { Expression, ExpressionSet } from 'fast-xml-tagger';
 *
 * // Build once at config time
 * const stopNodes = new ExpressionSet();
 * stopNodes.add(new Expression('root.users.user'));
 * stopNodes.add(new Expression('root.config.setting'));
 * stopNodes.add(new Expression('..script'));
 *
 * // Query on every tag — hot path
 * if (stopNodes.matchesAny(matcher)) { ... }
 */ __turbopack_context__.s([
    "default",
    ()=>ExpressionSet
]);
class ExpressionSet {
    constructor(){
        /** @type {Map<string, import('./Expression.js').default[]>} depth:tag → expressions */ this._byDepthAndTag = new Map();
        /** @type {Map<number, import('./Expression.js').default[]>} depth → wildcard-tag expressions */ this._wildcardByDepth = new Map();
        /** @type {import('./Expression.js').default[]} expressions containing deep wildcard (..) */ this._deepWildcards = [];
        /** @type {Set<string>} pattern strings already added — used for deduplication */ this._patterns = new Set();
        /** @type {boolean} whether the set is sealed against further additions */ this._sealed = false;
    }
    /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */ add(expression) {
        if (this._sealed) {
            throw new TypeError('ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.');
        }
        // Deduplicate by pattern string
        if (this._patterns.has(expression.pattern)) return this;
        this._patterns.add(expression.pattern);
        if (expression.hasDeepWildcard()) {
            this._deepWildcards.push(expression);
            return this;
        }
        const depth = expression.length;
        const lastSeg = expression.segments[expression.segments.length - 1];
        const tag = lastSeg?.tag;
        if (!tag || tag === '*') {
            // Can index by depth but not by tag
            if (!this._wildcardByDepth.has(depth)) this._wildcardByDepth.set(depth, []);
            this._wildcardByDepth.get(depth).push(expression);
        } else {
            // Tightest bucket: depth + tag
            const key = `${depth}:${tag}`;
            if (!this._byDepthAndTag.has(key)) this._byDepthAndTag.set(key, []);
            this._byDepthAndTag.get(key).push(expression);
        }
        return this;
    }
    /**
   * Add multiple expressions at once.
   *
   * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
   * @returns {this} for chaining
   *
   * @example
   * set.addAll([
   *   new Expression('root.users.user'),
   *   new Expression('root.config.setting'),
   * ]);
   */ addAll(expressions) {
        for (const expr of expressions)this.add(expr);
        return this;
    }
    /**
   * Check whether a pattern string is already present in the set.
   *
   * @param {import('./Expression.js').default} expression
   * @returns {boolean}
   */ has(expression) {
        return this._patterns.has(expression.pattern);
    }
    /**
   * Number of expressions in the set.
   * @type {number}
   */ get size() {
        return this._patterns.size;
    }
    /**
   * Seal the set against further modifications.
   * Useful to prevent accidental mutations after config is built.
   * Calling add() or addAll() on a sealed set throws a TypeError.
   *
   * @returns {this}
   */ seal() {
        this._sealed = true;
        return this;
    }
    /**
   * Whether the set has been sealed.
   * @type {boolean}
   */ get isSealed() {
        return this._sealed;
    }
    /**
   * Test whether the matcher's current path matches any expression in the set.
   *
   * Evaluation order (cheapest → most expensive):
   *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
   *  2. Depth-only wildcard bucket — O(1) lookup, rare
   *  3. Deep-wildcard list         — always checked, but usually small
   *
   * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
   * @returns {boolean} true if any expression matches the current path
   *
   * @example
   * if (stopNodes.matchesAny(matcher)) {
   *   // handle stop node
   * }
   */ matchesAny(matcher) {
        return this.findMatch(matcher) !== null;
    }
    /**
 * Find and return the first Expression that matches the matcher's current path.
 *
 * Uses the same evaluation order as matchesAny (cheapest → most expensive):
 *  1. Exact depth + tag bucket
 *  2. Depth-only wildcard bucket
 *  3. Deep-wildcard list
 *
 * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
 * @returns {import('./Expression.js').default | null} the first matching Expression, or null
 *
 * @example
 * const expr = stopNodes.findMatch(matcher);
 * if (expr) {
 *   // access expr.config, expr.pattern, etc.
 * }
 */ findMatch(matcher) {
        const depth = matcher.getDepth();
        const tag = matcher.getCurrentTag();
        // 1. Tightest bucket — most expressions live here
        const exactKey = `${depth}:${tag}`;
        const exactBucket = this._byDepthAndTag.get(exactKey);
        if (exactBucket) {
            for(let i = 0; i < exactBucket.length; i++){
                if (matcher.matches(exactBucket[i])) return exactBucket[i];
            }
        }
        // 2. Depth-matched wildcard-tag expressions
        const wildcardBucket = this._wildcardByDepth.get(depth);
        if (wildcardBucket) {
            for(let i = 0; i < wildcardBucket.length; i++){
                if (matcher.matches(wildcardBucket[i])) return wildcardBucket[i];
            }
        }
        // 3. Deep wildcards — cannot be pre-filtered by depth or tag
        for(let i = 0; i < this._deepWildcards.length; i++){
            if (matcher.matches(this._deepWildcards[i])) return this._deepWildcards[i];
        }
        return null;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript) <export default as ExpressionSet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpressionSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript)");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeAttribute",
    ()=>escapeAttribute,
    "safeCdata",
    ()=>safeCdata,
    "safeComment",
    ()=>safeComment
]);
function safeComment(val) {
    return String(val).replace(/--/g, '- -') // -- is illegal anywhere in comment content
    .replace(/--/g, '- -') // handle the scenario when 2 consiucative dashes appears 
    .replace(/-$/, '- '); // trailing - would form -- with the closing -->
}
function safeCdata(val) {
    return String(val).replace(/\]\]>/g, ']]]]><![CDATA[>');
}
function escapeAttribute(val) {
    return String(val).replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/orderedJs2Xml.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toXml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/xml-naming/src/index.js [app-route] (ecmascript)");
;
;
;
const EOL = "\n";
/**
 * Detect XML version from the first element of the ordered array input.
 * The first element must be a ?xml processing instruction with a version attribute.
 * Returns '1.0' if not found.
 *
 * @param {array}  jArray
 * @param {object} options
 */ function detectXmlVersionFromArray(jArray, options) {
    if (!Array.isArray(jArray) || jArray.length === 0) return '1.0';
    const first = jArray[0];
    const firstKey = propName(first);
    if (firstKey === '?xml') {
        const attrs = first[':@'];
        if (attrs) {
            const versionKey = options.attributeNamePrefix + 'version';
            if (attrs[versionKey]) return attrs[versionKey];
        }
    }
    return '1.0';
}
/**
 * Resolve a tag or attribute name through sanitizeName if configured.
 * Validation via xml-naming's qName is performed first; the sanitizeName
 * callback is invoked only when the name is invalid. If sanitizeName is
 * false (default), no validation occurs and the name is used as-is.
 *
 * @param {string}  name        - raw name from the JS object
 * @param {boolean} isAttribute - true when resolving an attribute name
 * @param {object}  options
 * @param {Matcher} matcher     - current matcher state (readonly from callback perspective)
 * @param {string}  xmlVersion  - '1.0' or '1.1', forwarded to xml-naming
 */ function resolveTagName(name, isAttribute, options, matcher, xmlVersion) {
    if (!options.sanitizeName) return name;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["qName"])(name, {
        xmlVersion
    })) return name;
    return options.sanitizeName(name, {
        isAttribute,
        matcher: matcher.readOnly()
    });
}
function toXml(jArray, options) {
    let indentation = "";
    if (options.format) {
        indentation = EOL;
    }
    // Pre-compile stopNode expressions for pattern matching
    const stopNodeExpressions = [];
    if (options.stopNodes && Array.isArray(options.stopNodes)) {
        for(let i = 0; i < options.stopNodes.length; i++){
            const node = options.stopNodes[i];
            if (typeof node === 'string') {
                stopNodeExpressions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"](node));
            } else if (node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"]) {
                stopNodeExpressions.push(node);
            }
        }
    }
    // Detect XML version for use in name validation
    const xmlVersion = detectXmlVersionFromArray(jArray, options);
    // Initialize matcher for path tracking
    const matcher = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__["Matcher"]();
    return arrToStr(jArray, options, indentation, matcher, stopNodeExpressions, xmlVersion);
}
function arrToStr(arr, options, indentation, matcher, stopNodeExpressions, xmlVersion) {
    let xmlStr = "";
    let isPreviousElementTag = false;
    if (options.maxNestedTags && matcher.getDepth() > options.maxNestedTags) {
        throw new Error("Maximum nested tags exceeded");
    }
    if (!Array.isArray(arr)) {
        // Non-array values (e.g. string tag values) should be treated as text content
        if (arr !== undefined && arr !== null) {
            let text = arr.toString();
            text = replaceEntitiesValue(text, options);
            return text;
        }
        return "";
    }
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const rawTagName = propName(tagObj);
        if (rawTagName === undefined) continue;
        // Special names are exempt from sanitizeName: internal conventions and PI tags
        // are not user-supplied XML element names.
        const isSpecialName = rawTagName === options.textNodeName || rawTagName === options.cdataPropName || rawTagName === options.commentPropName || rawTagName[0] === '?';
        // Resolve tag name (may transform it; may throw for invalid names)
        const tagName = isSpecialName ? rawTagName : resolveTagName(rawTagName, false, options, matcher, xmlVersion);
        // Extract attributes from ":@" property
        const attrValues = extractAttributeValues(tagObj[":@"], options);
        // Push resolved tag to matcher WITH attributes
        matcher.push(tagName, attrValues);
        // Check if this is a stop node using Expression matching
        const isStopNode = checkStopNode(matcher, stopNodeExpressions);
        if (tagName === options.textNodeName) {
            let tagText = tagObj[rawTagName];
            if (!isStopNode) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            matcher.pop();
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            const val = tagObj[rawTagName][0][options.textNodeName];
            const safeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeCdata"])(val);
            xmlStr += `<![CDATA[${safeVal}]]>`;
            isPreviousElementTag = false;
            matcher.pop();
            continue;
        } else if (tagName === options.commentPropName) {
            const val = tagObj[rawTagName][0][options.textNodeName];
            const safeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeComment"])(val);
            xmlStr += indentation + `<!--${safeVal}-->`;
            isPreviousElementTag = true;
            matcher.pop();
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options, isStopNode, matcher, xmlVersion);
            const tempInd = tagName === "?xml" ? "" : indentation;
            // Text node content on PI/XML declaration tags is intentionally ignored.
            // Only attributes are valid on these tags per the XML spec.
            xmlStr += tempInd + `<${tagName}${attStr}?>`;
            isPreviousElementTag = true;
            matcher.pop();
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        // Pass isStopNode to attr_to_str so attributes are also not processed for stopNodes
        const attStr = attr_to_str(tagObj[":@"], options, isStopNode, matcher, xmlVersion);
        const tagStart = indentation + `<${tagName}${attStr}`;
        // If this is a stopNode, get raw content without processing
        let tagValue;
        if (isStopNode) {
            tagValue = getRawContent(tagObj[rawTagName], options);
        } else {
            tagValue = arrToStr(tagObj[rawTagName], options, newIdentation, matcher, stopNodeExpressions, xmlVersion);
        }
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
        // Pop tag from matcher
        matcher.pop();
    }
    return xmlStr;
}
/**
 * Extract attribute values from the ":@" object and return as plain object
 * for passing to matcher.push()
 */ function extractAttributeValues(attrMap, options) {
    if (!attrMap || options.ignoreAttributes) return null;
    const attrValues = {};
    let hasAttrs = false;
    for(let attr in attrMap){
        if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
        // Remove the attribute prefix to get clean attribute name
        const cleanAttrName = attr.startsWith(options.attributeNamePrefix) ? attr.substr(options.attributeNamePrefix.length) : attr;
        attrValues[cleanAttrName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(attrMap[attr]);
        hasAttrs = true;
    }
    return hasAttrs ? attrValues : null;
}
/**
 * Extract raw content from a stopNode without any processing
 * This preserves the content exactly as-is, including special characters
 */ function getRawContent(arr, options) {
    if (!Array.isArray(arr)) {
        // Non-array values return as-is
        if (arr !== undefined && arr !== null) {
            return arr.toString();
        }
        return "";
    }
    let content = "";
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        const tagName = propName(item);
        if (tagName === options.textNodeName) {
            // Raw text content - NO processing, NO entity replacement
            content += item[tagName];
        } else if (tagName === options.cdataPropName) {
            // CDATA content
            content += item[tagName][0][options.textNodeName];
        } else if (tagName === options.commentPropName) {
            // Comment content
            content += item[tagName][0][options.textNodeName];
        } else if (tagName && tagName[0] === "?") {
            continue;
        } else if (tagName) {
            // Nested tags within stopNode — no sanitizeName, content is raw
            const attStr = attr_to_str_raw(item[":@"], options);
            const nestedContent = getRawContent(item[tagName], options);
            if (!nestedContent || nestedContent.length === 0) {
                content += `<${tagName}${attStr}/>`;
            } else {
                content += `<${tagName}${attStr}>${nestedContent}</${tagName}>`;
            }
        }
    }
    return content;
}
/**
 * Build attribute string for stopNodes - NO entity replacement
 */ function attr_to_str_raw(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for(let attr in attrMap){
            if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
            // For stopNodes, use raw value without processing
            let attrVal = attrMap[attr];
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(attrVal)}"`;
            }
        }
    }
    return attrStr;
}
function propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        if (key !== ":@") return key;
    }
}
/**
 * Build attribute string, resolving attribute names through sanitizeName when configured.
 * Accepts matcher so the callback has path context.
 */ function attr_to_str(attrMap, options, isStopNode, matcher, xmlVersion) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for(let attr in attrMap){
            if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
            // Strip prefix to get the clean XML attribute name, then optionally sanitize it
            const cleanAttrName = attr.substr(options.attributeNamePrefix.length);
            const resolvedAttrName = isStopNode ? cleanAttrName // stopNodes are raw — skip sanitizeName for attr names too
             : resolveTagName(cleanAttrName, true, options, matcher, xmlVersion);
            let attrVal;
            if (isStopNode) {
                // For stopNodes, use raw value without any processing
                attrVal = attrMap[attr];
            } else {
                // Normal processing: apply attributeValueProcessor and entity replacement
                attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
                attrVal = replaceEntitiesValue(attrVal, options);
            }
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${resolvedAttrName}`;
            } else {
                attrStr += ` ${resolvedAttrName}="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(attrVal)}"`;
            }
        }
    }
    return attrStr;
}
function checkStopNode(matcher, stopNodeExpressions) {
    if (!stopNodeExpressions || stopNodeExpressions.length === 0) return false;
    for(let i = 0; i < stopNodeExpressions.length; i++){
        if (matcher.matches(stopNodeExpressions[i])) {
            return true;
        }
    }
    return false;
}
function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for(let i = 0; i < options.entities.length; i++){
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/ignoreAttributes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getIgnoreAttributesFn
]);
function getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') {
        return ignoreAttributes;
    }
    if (Array.isArray(ignoreAttributes)) {
        return (attrName)=>{
            for (const pattern of ignoreAttributes){
                if (typeof pattern === 'string' && attrName === pattern) {
                    return true;
                }
                if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true;
                }
            }
        };
    }
    return ()=>false;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/fxb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Builder
]);
//parse Empty Node as self closing node
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$orderedJs2Xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/orderedJs2Xml.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/ignoreAttributes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/xml-naming/src/index.js [app-route] (ecmascript)");
'use strict';
;
;
;
;
;
const defaultOptions = {
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    cdataPropName: false,
    format: false,
    indentBy: '  ',
    suppressEmptyNode: false,
    suppressUnpairedNode: true,
    suppressBooleanAttributes: true,
    tagValueProcessor: function(key, a) {
        return a;
    },
    attributeValueProcessor: function(attrName, a) {
        return a;
    },
    preserveOrder: false,
    commentPropName: false,
    unpairedTags: [],
    entities: [
        {
            regex: new RegExp("&", "g"),
            val: "&amp;"
        },
        {
            regex: new RegExp(">", "g"),
            val: "&gt;"
        },
        {
            regex: new RegExp("<", "g"),
            val: "&lt;"
        },
        {
            regex: new RegExp("\'", "g"),
            val: "&apos;"
        },
        {
            regex: new RegExp("\"", "g"),
            val: "&quot;"
        }
    ],
    processEntities: true,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: false,
    maxNestedTags: 100,
    jPath: true,
    sanitizeName: false // false = allow all names as-is (default, backward-compatible).
};
function Builder(options) {
    this.options = Object.assign({}, defaultOptions, options);
    // Convert old-style stopNodes for backward compatibility
    // Old syntax: "*.tag" meant "tag anywhere in tree"
    // New syntax: "..tag" means "tag anywhere in tree"
    if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
        this.options.stopNodes = this.options.stopNodes.map((node)=>{
            if (typeof node === 'string' && node.startsWith('*.')) {
                // Convert old wildcard syntax to deep wildcard
                return '..' + node.substring(2);
            }
            return node;
        });
    }
    // Pre-compile stopNode expressions for pattern matching
    this.stopNodeExpressions = [];
    if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
        for(let i = 0; i < this.options.stopNodes.length; i++){
            const node = this.options.stopNodes[i];
            if (typeof node === 'string') {
                this.stopNodeExpressions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"](node));
            } else if (node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"]) {
                this.stopNodeExpressions.push(node);
            }
        }
    }
    if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
        this.isAttribute = function() {
            return false;
        };
    } else {
        this.ignoreAttributesFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(this.options.ignoreAttributes);
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
    }
    this.processTextOrObjNode = processTextOrObjNode;
    if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = '>\n';
        this.newLine = '\n';
    } else {
        this.indentate = function() {
            return '';
        };
        this.tagEndChar = '>';
        this.newLine = '';
    }
}
/**
 * Detect XML version from the ?xml declaration at the root of a plain-object input.
 * Checks both attributesGroupName and flat attribute forms.
 * Returns '1.0' if no declaration is found.
 */ function detectXmlVersionFromObj(jObj, options) {
    const decl = jObj['?xml'];
    if (decl && typeof decl === 'object') {
        // attributesGroupName path e.g. { '$$': { '@_version': '1.1' } }
        if (options.attributesGroupName && decl[options.attributesGroupName]) {
            const v = decl[options.attributesGroupName][options.attributeNamePrefix + 'version'];
            if (v) return v;
        }
        // flat attribute path e.g. { '@_version': '1.1' }
        const v = decl[options.attributeNamePrefix + 'version'];
        if (v) return v;
    }
    return '1.0';
}
/**
 * Resolve a tag or attribute name through sanitizeName if configured.
 * Validation via xml-naming's qName is performed first; the sanitizeName
 * callback is invoked only when the name is invalid. If sanitizeName is
 * false (default), no validation occurs and the name is used as-is.
 *
 * @param {string}  name        - raw name from the JS object
 * @param {boolean} isAttribute - true when resolving an attribute name
 * @param {object}  options
 * @param {Matcher} matcher     - current matcher state (readonly from callback perspective)
 * @param {string}  xmlVersion  - '1.0' or '1.1', forwarded to xml-naming
 */ function resolveTagName(name, isAttribute, options, matcher, xmlVersion) {
    if (!options.sanitizeName) return name;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["qName"])(name, {
        xmlVersion
    })) return name;
    return options.sanitizeName(name, {
        isAttribute,
        matcher: matcher.readOnly()
    });
}
Builder.prototype.build = function(jObj) {
    if (this.options.preserveOrder) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$orderedJs2Xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(jObj, this.options);
    } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
            jObj = {
                [this.options.arrayNodeName]: jObj
            };
        }
        // Initialize matcher for path tracking
        const matcher = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__["Matcher"]();
        const xmlVersion = detectXmlVersionFromObj(jObj, this.options);
        return this.j2x(jObj, 0, matcher, xmlVersion).val;
    }
};
Builder.prototype.j2x = function(jObj, level, matcher, xmlVersion) {
    let attrStr = '';
    let val = '';
    if (this.options.maxNestedTags && matcher.getDepth() >= this.options.maxNestedTags) {
        throw new Error("Maximum nested tags exceeded");
    }
    // Get jPath based on option: string for backward compatibility, or Matcher for new features
    const jPath = this.options.jPath ? matcher.toString() : matcher;
    // Check if current node is a stopNode (will be used for attribute encoding)
    const isCurrentStopNode = this.checkStopNode(matcher);
    for(let key in jObj){
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        // Resolve the key through sanitizeName before any use.
        // Special keys (textNodeName, cdataPropName, commentPropName, attributeNamePrefix,
        // attributesGroupName, "?" PI tags) are exempt — they are builder-internal conventions,
        // not user-supplied XML names.
        const isSpecialKey = key === this.options.textNodeName || key === this.options.cdataPropName || key === this.options.commentPropName || this.options.attributesGroupName && key === this.options.attributesGroupName || this.isAttribute(key) || key[0] === '?';
        const resolvedKey = isSpecialKey ? key : resolveTagName(key, false, this.options, matcher, xmlVersion);
        if (typeof jObj[key] === 'undefined') {
            // supress undefined node only if it is not an attribute
            if (this.isAttribute(key)) {
                val += '';
            }
        } else if (jObj[key] === null) {
            // null attribute should be ignored by the attribute list, but should not cause the tag closing
            if (this.isAttribute(key)) {
                val += '';
            } else if (resolvedKey === this.options.cdataPropName || resolvedKey === this.options.commentPropName) {
                val += '';
            } else if (resolvedKey[0] === '?') {
                val += this.indentate(level) + '<' + resolvedKey + '?' + this.tagEndChar;
            } else {
                val += this.indentate(level) + '<' + resolvedKey + '/' + this.tagEndChar;
            }
        } else if (jObj[key] instanceof Date) {
            val += this.buildTextValNode(jObj[key], resolvedKey, '', level, matcher);
        } else if (typeof jObj[key] !== 'object') {
            //premitive type
            const attr = this.isAttribute(key);
            if (attr && !this.ignoreAttributesFn(attr, jPath)) {
                // Resolve the attribute name through sanitizeName
                const resolvedAttr = resolveTagName(attr, true, this.options, matcher, xmlVersion);
                attrStr += this.buildAttrPairStr(resolvedAttr, '' + jObj[key], isCurrentStopNode);
            } else if (!attr) {
                //tag value
                if (key === this.options.textNodeName) {
                    let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
                    val += this.replaceEntitiesValue(newval);
                } else {
                    // Check if this is a stopNode before building
                    matcher.push(resolvedKey);
                    const isStopNode = this.checkStopNode(matcher);
                    matcher.pop();
                    if (isStopNode) {
                        // Build as raw content without encoding
                        const textValue = '' + jObj[key];
                        if (textValue === '') {
                            val += this.indentate(level) + '<' + resolvedKey + this.closeTag(resolvedKey) + this.tagEndChar;
                        } else {
                            val += this.indentate(level) + '<' + resolvedKey + '>' + textValue + '</' + resolvedKey + this.tagEndChar;
                        }
                    } else {
                        val += this.buildTextValNode(jObj[key], resolvedKey, '', level, matcher);
                    }
                }
            }
        } else if (Array.isArray(jObj[key])) {
            //repeated nodes
            const arrLen = jObj[key].length;
            let listTagVal = "";
            let listTagAttr = "";
            for(let j = 0; j < arrLen; j++){
                const item = jObj[key][j];
                if (typeof item === 'undefined') {
                // supress undefined node
                } else if (item === null) {
                    if (resolvedKey[0] === "?") val += this.indentate(level) + '<' + resolvedKey + '?' + this.tagEndChar;
                    else val += this.indentate(level) + '<' + resolvedKey + '/' + this.tagEndChar;
                } else if (typeof item === 'object') {
                    if (this.options.oneListGroup) {
                        // Push tag to matcher before recursive call
                        matcher.push(resolvedKey);
                        const result = this.j2x(item, level + 1, matcher, xmlVersion);
                        // Pop tag from matcher after recursive call
                        matcher.pop();
                        listTagVal += result.val;
                        if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                            listTagAttr += result.attrStr;
                        }
                    } else {
                        listTagVal += this.processTextOrObjNode(item, resolvedKey, level, matcher, xmlVersion);
                    }
                } else {
                    if (this.options.oneListGroup) {
                        let textValue = this.options.tagValueProcessor(resolvedKey, item);
                        textValue = this.replaceEntitiesValue(textValue);
                        listTagVal += textValue;
                    } else {
                        // Check if this is a stopNode before building
                        matcher.push(resolvedKey);
                        const isStopNode = this.checkStopNode(matcher);
                        matcher.pop();
                        if (isStopNode) {
                            // Build as raw content without encoding
                            const textValue = '' + item;
                            if (textValue === '') {
                                listTagVal += this.indentate(level) + '<' + resolvedKey + this.closeTag(resolvedKey) + this.tagEndChar;
                            } else {
                                listTagVal += this.indentate(level) + '<' + resolvedKey + '>' + textValue + '</' + resolvedKey + this.tagEndChar;
                            }
                        } else {
                            listTagVal += this.buildTextValNode(item, resolvedKey, '', level, matcher);
                        }
                    }
                }
            }
            if (this.options.oneListGroup) {
                listTagVal = this.buildObjectNode(listTagVal, resolvedKey, listTagAttr, level);
            }
            val += listTagVal;
        } else {
            //nested node
            if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
                const Ks = Object.keys(jObj[key]);
                const L = Ks.length;
                for(let j = 0; j < L; j++){
                    // Resolve attribute names inside attributesGroupName
                    const resolvedAttr = resolveTagName(Ks[j], true, this.options, matcher, xmlVersion);
                    attrStr += this.buildAttrPairStr(resolvedAttr, '' + jObj[key][Ks[j]], isCurrentStopNode);
                }
            } else {
                val += this.processTextOrObjNode(jObj[key], resolvedKey, level, matcher, xmlVersion);
            }
        }
    }
    return {
        attrStr: attrStr,
        val: val
    };
};
Builder.prototype.buildAttrPairStr = function(attrName, val, isStopNode) {
    if (!isStopNode) {
        val = this.options.attributeValueProcessor(attrName, '' + val);
        val = this.replaceEntitiesValue(val);
    }
    if (this.options.suppressBooleanAttributes && val === "true") {
        return ' ' + attrName;
    } else return ' ' + attrName + '="' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(val) + '"';
};
function processTextOrObjNode(object, key, level, matcher, xmlVersion) {
    // Extract attributes to pass to matcher
    const attrValues = this.extractAttributes(object);
    // Push tag to matcher before recursion WITH attributes
    matcher.push(key, attrValues);
    // Check if this entire node is a stopNode
    const isStopNode = this.checkStopNode(matcher);
    if (isStopNode) {
        // For stopNodes, build raw content without entity encoding
        const rawContent = this.buildRawContent(object);
        const attrStr = this.buildAttributesForStopNode(object);
        matcher.pop();
        return this.buildObjectNode(rawContent, key, attrStr, level);
    }
    const result = this.j2x(object, level + 1, matcher, xmlVersion);
    // Pop tag from matcher after recursion
    matcher.pop();
    // PI/XML-declaration tags must never emit text content — route through
    // buildTextValNode which correctly ignores the text node for "?" tags.
    if (key[0] === '?') {
        return this.buildTextValNode('', key, result.attrStr, level, matcher);
    } else if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level, matcher);
    } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
    }
}
// Helper method to extract attributes from an object
Builder.prototype.extractAttributes = function(obj) {
    if (!obj || typeof obj !== 'object') return null;
    const attrValues = {};
    let hasAttrs = false;
    // Check for attributesGroupName (when attributes are grouped)
    if (this.options.attributesGroupName && obj[this.options.attributesGroupName]) {
        const attrGroup = obj[this.options.attributesGroupName];
        for(let attrKey in attrGroup){
            if (!Object.prototype.hasOwnProperty.call(attrGroup, attrKey)) continue;
            // Remove attribute prefix if present
            const cleanKey = attrKey.startsWith(this.options.attributeNamePrefix) ? attrKey.substring(this.options.attributeNamePrefix.length) : attrKey;
            attrValues[cleanKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(attrGroup[attrKey]);
            hasAttrs = true;
        }
    } else {
        // Look for individual attributes (prefixed with attributeNamePrefix)
        for(let key in obj){
            if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
            const attr = this.isAttribute(key);
            if (attr) {
                attrValues[attr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeAttribute"])(obj[key]);
                hasAttrs = true;
            }
        }
    }
    return hasAttrs ? attrValues : null;
};
// Build raw content for stopNode without entity encoding
Builder.prototype.buildRawContent = function(obj) {
    if (typeof obj === 'string') {
        return obj; // Already a string, return as-is
    }
    if (typeof obj !== 'object' || obj === null) {
        return String(obj);
    }
    // Check if this is a stopNode data from parser: { "#text": "raw xml", "@_attr": "val" }
    if (obj[this.options.textNodeName] !== undefined) {
        return obj[this.options.textNodeName]; // Return raw text without encoding
    }
    // Build raw XML from nested structure
    let content = '';
    for(let key in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        // Skip attributes
        if (this.isAttribute(key)) continue;
        if (this.options.attributesGroupName && key === this.options.attributesGroupName) continue;
        const value = obj[key];
        if (key === this.options.textNodeName) {
            content += value; // Raw text
        } else if (Array.isArray(value)) {
            // Array of same tag
            for (let item of value){
                if (typeof item === 'string' || typeof item === 'number') {
                    content += `<${key}>${item}</${key}>`;
                } else if (typeof item === 'object' && item !== null) {
                    const nestedContent = this.buildRawContent(item);
                    const nestedAttrs = this.buildAttributesForStopNode(item);
                    if (nestedContent === '') {
                        content += `<${key}${nestedAttrs}/>`;
                    } else {
                        content += `<${key}${nestedAttrs}>${nestedContent}</${key}>`;
                    }
                }
            }
        } else if (typeof value === 'object' && value !== null) {
            // Nested object
            const nestedContent = this.buildRawContent(value);
            const nestedAttrs = this.buildAttributesForStopNode(value);
            if (nestedContent === '') {
                content += `<${key}${nestedAttrs}/>`;
            } else {
                content += `<${key}${nestedAttrs}>${nestedContent}</${key}>`;
            }
        } else {
            // Primitive value
            content += `<${key}>${value}</${key}>`;
        }
    }
    return content;
};
// Build attribute string for stopNode (no entity encoding)
Builder.prototype.buildAttributesForStopNode = function(obj) {
    if (!obj || typeof obj !== 'object') return '';
    let attrStr = '';
    // Check for attributesGroupName (when attributes are grouped)
    if (this.options.attributesGroupName && obj[this.options.attributesGroupName]) {
        const attrGroup = obj[this.options.attributesGroupName];
        for(let attrKey in attrGroup){
            if (!Object.prototype.hasOwnProperty.call(attrGroup, attrKey)) continue;
            const cleanKey = attrKey.startsWith(this.options.attributeNamePrefix) ? attrKey.substring(this.options.attributeNamePrefix.length) : attrKey;
            const val = attrGroup[attrKey];
            if (val === true && this.options.suppressBooleanAttributes) {
                attrStr += ' ' + cleanKey;
            } else {
                attrStr += ' ' + cleanKey + '="' + val + '"'; // No encoding for stopNode
            }
        }
    } else {
        // Look for individual attributes
        for(let key in obj){
            if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
            const attr = this.isAttribute(key);
            if (attr) {
                const val = obj[key];
                if (val === true && this.options.suppressBooleanAttributes) {
                    attrStr += ' ' + attr;
                } else {
                    attrStr += ' ' + attr + '="' + val + '"'; // No encoding for stopNode
                }
            }
        }
    }
    return attrStr;
};
Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
    if (val === "") {
        if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
        else {
            return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
    } else if (key[0] === "?") {
        // PI/XML-declaration tags never have body content — treat them like empty.
        return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
    } else {
        let tagEndExp = '</' + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
            piClosingChar = "?";
            tagEndExp = "";
        }
        // attrStr is an empty string in case the attribute came as undefined or null
        if ((attrStr || attrStr === '') && val.indexOf('<') === -1) {
            return this.indentate(level) + '<' + key + attrStr + piClosingChar + '>' + val + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
            return this.indentate(level) + `<!--${val}-->` + this.newLine;
        } else {
            return this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
        }
    }
};
Builder.prototype.closeTag = function(key) {
    let closeTag = "";
    if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
    } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
    } else {
        closeTag = `></${key}`;
    }
    return closeTag;
};
Builder.prototype.checkStopNode = function(matcher) {
    if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return false;
    for(let i = 0; i < this.stopNodeExpressions.length; i++){
        if (matcher.matches(this.stopNodeExpressions[i])) {
            return true;
        }
    }
    return false;
};
function buildEmptyObjNode(val, key, attrStr, level) {
    if (val !== '') {
        return this.buildObjectNode(val, key, attrStr, level);
    } else {
        if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
        else {
            return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
        }
    }
}
Builder.prototype.buildTextValNode = function(val, key, attrStr, level, matcher) {
    if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        const safeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeCdata"])(val);
        return this.indentate(level) + `<![CDATA[${safeVal}]]>` + this.newLine;
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        const safeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeComment"])(val);
        return this.indentate(level) + `<!--${safeVal}-->` + this.newLine;
    } else if (key[0] === "?") {
        return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
    } else {
        // Normal processing: apply tagValueProcessor and entity replacement
        let textValue = this.options.tagValueProcessor(key, val);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === '') {
            return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
            return this.indentate(level) + '<' + key + attrStr + '>' + textValue + '</' + key + this.tagEndChar;
        }
    }
};
Builder.prototype.replaceEntitiesValue = function(textValue) {
    if (textValue && textValue.length > 0 && this.options.processEntities) {
        for(let i = 0; i < this.options.entities.length; i++){
            const entity = this.options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
};
function indentate(level) {
    return this.options.indentBy.repeat(level);
}
function isAttribute(name /*, options*/ ) {
    if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
    } else {
        return false;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/xml-naming/src/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "name",
    ()=>name,
    "ncName",
    ()=>ncName,
    "nmToken",
    ()=>nmToken,
    "nmTokens",
    ()=>nmTokens,
    "qName",
    ()=>qName,
    "sanitize",
    ()=>sanitize,
    "validate",
    ()=>validate,
    "validateAll",
    ()=>validateAll
]);
/**
 * xml-naming
 * Validates XML Name productions as defined in the XML 1.0 and 1.1 specifications.
 * Covers: Name, NCName, QName, NMToken, NMTokens
 *
 * XML 1.0 spec: https://www.w3.org/TR/xml/#NT-Name
 * XML 1.1 spec: https://www.w3.org/TR/xml11/#NT-NameStartChar
 * XML NS spec:  https://www.w3.org/TR/xml-names/#NT-NCName
 */ // ---------------------------------------------------------------------------
// Character class strings — XML 1.0
//
// NameStartChar ::= ":" | [A-Z] | "_" | [a-z]
//   | [#xC0-#xD6]   | [#xD8-#xF6]   | [#xF8-#x2FF]
//   | [#x370-#x37D] | [#x37F-#x1FFF]    <- split to exclude #x0487
//   | [#x200C-#x200D]
//   | [#x2070-#x218F] | [#x2C00-#x2FEF]
//   | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD]
//
// NameChar ::= NameStartChar | "-" | "." | [0-9]
//   | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//
// Note: \u0487 (Combining Cyrillic Millions Sign) was added in Unicode 4.0,
// after XML 1.0 was defined against Unicode 2.0. It falls inside the range
// \u037F-\u1FFF but must be excluded. We split that range into
// \u037F-\u0486 and \u0488-\u1FFF to exclude it explicitly.
// ---------------------------------------------------------------------------
const nameStartChar10 = ':A-Za-z_' + '\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF' + '\u0370-\u037D' + '\u037F-\u0486\u0488-\u1FFF' + // split to exclude \u0487
'\u200C-\u200D' + '\u2070-\u218F' + '\u2C00-\u2FEF' + '\u3001-\uD7FF' + '\uF900-\uFDCF' + '\uFDF0-\uFFFD';
const nameChar10 = nameStartChar10 + '\\-\\.\\d' + '\u00B7' + '\u0300-\u036F' + '\u203F-\u2040';
// ---------------------------------------------------------------------------
// Character class strings — XML 1.1
//
// Differences from XML 1.0:
//
// NameStartChar:
//   1.0 has split ranges: \u00C0-\u00D6, \u00D8-\u00F6, \u00F8-\u02FF
//   1.1 merges them into: \u00C0-\u02FF
//   (\u00D7 x and \u00F7 / are division symbols, excluded in both versions)
//
//   1.0 tops out at \uFFFD (BMP only)
//   1.1 adds \u{10000}-\u{EFFFF} (supplementary planes)
//   These require the /u flag on the RegExp — see buildRegexes below.
//
// NameChar:
//   1.1 adds \u0487 (Combining Cyrillic Millions Sign, added in Unicode 4.0)
// ---------------------------------------------------------------------------
const nameStartChar11 = ':A-Za-z_' + '\u00C0-\u02FF' + // merged — 1.0 had three split ranges here
'\u0370-\u037D' + '\u037F-\u0486\u0488-\u1FFF' + // split to exclude \u0487 (combining mark, never a NameStartChar)
'\u200C-\u200D' + '\u2070-\u218F' + '\u2C00-\u2FEF' + '\u3001-\uD7FF' + '\uF900-\uFDCF' + '\uFDF0-\uFFFD' + '\u{10000}-\u{EFFFF}'; // supplementary planes — REQUIRES /u flag on RegExp
const nameChar11 = nameStartChar11 + '\\-\\.\\d' + '\u00B7' + '\u0300-\u036F' + '\u0487' + // Combining Cyrillic Millions Sign — valid in 1.1, not 1.0
'\u203F-\u2040';
// ---------------------------------------------------------------------------
// Regex builders
//
// XML 1.0 regexes: no flags — BMP only, standard JS regex behaviour.
// XML 1.1 regexes: /u flag — required for \u{10000}-\u{EFFFF} to match actual
//   supplementary code points rather than lone surrogates (which are illegal XML).
// ---------------------------------------------------------------------------
const buildRegexes = (startChar, char, flags = '')=>{
    const ncStart = startChar.replace(':', '');
    const ncChar = char.replace(':', '');
    const ncNamePat = `[${ncStart}][${ncChar}]*`;
    return {
        name: new RegExp(`^[${startChar}][${char}]*$`, flags),
        ncName: new RegExp(`^${ncNamePat}$`, flags),
        qName: new RegExp(`^${ncNamePat}(?::${ncNamePat})?$`, flags),
        nmToken: new RegExp(`^[${char}]+$`, flags),
        nmTokens: new RegExp(`^[${char}]+(?:\\s+[${char}]+)*$`, flags)
    };
};
const regexes10 = buildRegexes(nameStartChar10, nameChar10); // no /u — BMP only
const regexes11 = buildRegexes(nameStartChar11, nameChar11, 'u'); // /u — enables \u{10000}-\u{EFFFF}
const getRegexes = (xmlVersion = '1.0')=>xmlVersion === '1.1' ? regexes11 : regexes10;
const name = (str, { xmlVersion = '1.0' } = {})=>getRegexes(xmlVersion).name.test(str);
const ncName = (str, { xmlVersion = '1.0' } = {})=>getRegexes(xmlVersion).ncName.test(str);
const qName = (str, { xmlVersion = '1.0' } = {})=>getRegexes(xmlVersion).qName.test(str);
const nmToken = (str, { xmlVersion = '1.0' } = {})=>getRegexes(xmlVersion).nmToken.test(str);
const nmTokens = (str, { xmlVersion = '1.0' } = {})=>getRegexes(xmlVersion).nmTokens.test(str);
// ---------------------------------------------------------------------------
// Diagnostic validator
// ---------------------------------------------------------------------------
const PRODUCTIONS = [
    'name',
    'ncName',
    'qName',
    'nmToken',
    'nmTokens'
];
const validate = (str, production, { xmlVersion = '1.0' } = {})=>{
    if (!PRODUCTIONS.includes(production)) {
        throw new TypeError(`Unknown production "${production}". Must be one of: ${PRODUCTIONS.join(', ')}`);
    }
    const validators = {
        name,
        ncName,
        qName,
        nmToken,
        nmTokens
    };
    const isValid = validators[production](str, {
        xmlVersion
    });
    if (isValid) return {
        valid: true,
        production,
        input: str
    };
    let reason = 'Does not match the production rules';
    let position;
    if (str.length === 0) {
        reason = 'Input is empty';
    } else if (production === 'ncName' && str.includes(':')) {
        position = str.indexOf(':');
        reason = 'Colon is not allowed in NCName';
    } else if (production === 'qName' && str.startsWith(':')) {
        reason = 'QName cannot start with a colon';
        position = 0;
    } else if (production === 'qName' && str.endsWith(':')) {
        reason = 'QName cannot end with a colon';
        position = str.length - 1;
    } else if (production === 'qName' && (str.match(/:/g) || []).length > 1) {
        reason = 'QName can have at most one colon';
        position = str.lastIndexOf(':');
    } else if ([
        'name',
        'ncName',
        'qName'
    ].includes(production) && !/^[:A-Za-z_\u00C0-\uFFFD]/.test(str[0])) {
        reason = `First character "${str[0]}" is not a valid NameStartChar`;
        position = 0;
    } else {
        for(let i = 0; i < str.length; i++){
            if (!/[\w\-\\.:\u00B7\u00C0-\uFFFD]/.test(str[i])) {
                reason = `Character "${str[i]}" at position ${i} is not a valid NameChar`;
                position = i;
                break;
            }
        }
    }
    return {
        valid: false,
        production,
        input: str,
        reason,
        position
    };
};
const validateAll = (strings, production, opts = {})=>strings.map((str)=>validate(str, production, opts));
const sanitize = (str, production = 'name', { replacement = '_' } = {})=>{
    if (!str) return replacement;
    let result = str;
    // Strip colons for NCName
    if (production === 'ncName') {
        result = result.replace(/:/g, '');
    }
    // Replace illegal characters
    result = result.replace(/[^\w\-\.:\u00B7\u00C0-\uFFFD]/g, replacement);
    // Fix invalid start character for Name / NCName / QName
    if (production !== 'nmToken' && production !== 'nmTokens') {
        if (/^[\-\.\d]/.test(result)) {
            result = replacement + result;
        }
    }
    return result || replacement;
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Re-export from fast-xml-builder for backward compatibility
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$fxb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-builder/src/fxb.js [app-route] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$builder$2f$src$2f$fxb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js [app-route] (ecmascript) <locals> <export default as XMLBuilder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XMLBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlbuilder$2f$json2xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlbuilder$2f$json2xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js [app-route] (ecmascript) <locals>");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DANGEROUS_PROPERTY_NAMES",
    ()=>DANGEROUS_PROPERTY_NAMES,
    "criticalProperties",
    ()=>criticalProperties,
    "getAllMatches",
    ()=>getAllMatches,
    "getValue",
    ()=>getValue,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isExist",
    ()=>isExist,
    "isName",
    ()=>isName,
    "nameRegexp",
    ()=>nameRegexp
]);
'use strict';
const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');
function getAllMatches(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while(match){
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for(let index = 0; index < len; index++){
            allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
    }
    return matches;
}
const isName = function(string) {
    const match = regexName.exec(string);
    return !(match === null || typeof match === 'undefined');
};
function isExist(v) {
    return typeof v !== 'undefined';
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
function getValue(v) {
    if (exports.isExist(v)) {
        return v;
    } else {
        return '';
    }
}
const DANGEROUS_PROPERTY_NAMES = [
    // '__proto__',
    // 'constructor',
    // 'prototype',
    'hasOwnProperty',
    'toString',
    'valueOf',
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__'
];
const criticalProperties = [
    "__proto__",
    "constructor",
    "prototype"
];
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildOptions",
    ()=>buildOptions,
    "defaultOptions",
    ()=>defaultOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
;
;
const defaultOnDangerousProperty = (name)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
        return "__" + name;
    }
    return name;
};
const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false,
    allowBooleanAttributes: false,
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataPropName: false,
    numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
        return val;
    },
    attributeValueProcessor: function(attrName, val) {
        return val;
    },
    stopNodes: [],
    alwaysCreateTextNode: false,
    isArray: ()=>false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    entityDecoder: null,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs) {
        return tagName;
    },
    // skipEmptyListItem: false
    captureMetaData: false,
    maxNestedTags: 100,
    strictReservedNames: true,
    jPath: true,
    onDangerousProperty: defaultOnDangerousProperty
};
/**
 * Validates that a property name is safe to use
 * @param {string} propertyName - The property name to validate
 * @param {string} optionName - The option field name (for error message)
 * @throws {Error} If property name is dangerous
 */ function validatePropertyName(propertyName, optionName) {
    if (typeof propertyName !== 'string') {
        return; // Only validate string property names
    }
    const normalized = propertyName.toLowerCase();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].some((dangerous)=>normalized === dangerous.toLowerCase())) {
        throw new Error(`[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["criticalProperties"].some((dangerous)=>normalized === dangerous.toLowerCase())) {
        throw new Error(`[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
}
/**
 * Normalizes processEntities option for backward compatibility
 * @param {boolean|object} value 
 * @returns {object} Always returns normalized object
 */ function normalizeProcessEntities(value, htmlEntities) {
    // Boolean backward compatibility
    if (typeof value === 'boolean') {
        return {
            enabled: value,
            maxEntitySize: 10000,
            maxExpansionDepth: 10000,
            maxTotalExpansions: Infinity,
            maxExpandedLength: 100000,
            maxEntityCount: 1000,
            allowedTags: null,
            tagFilter: null,
            appliesTo: "all"
        };
    }
    // Object config - merge with defaults
    if (typeof value === 'object' && value !== null) {
        return {
            enabled: value.enabled !== false,
            maxEntitySize: Math.max(1, value.maxEntitySize ?? 10000),
            maxExpansionDepth: Math.max(1, value.maxExpansionDepth ?? 10000),
            maxTotalExpansions: Math.max(1, value.maxTotalExpansions ?? Infinity),
            maxExpandedLength: Math.max(1, value.maxExpandedLength ?? 100000),
            maxEntityCount: Math.max(1, value.maxEntityCount ?? 1000),
            allowedTags: value.allowedTags ?? null,
            tagFilter: value.tagFilter ?? null,
            appliesTo: value.appliesTo ?? "all"
        };
    }
    // Default to enabled with limits
    return normalizeProcessEntities(true);
}
const buildOptions = function(options) {
    const built = Object.assign({}, defaultOptions, options);
    // Validate property names to prevent prototype pollution
    const propertyNameOptions = [
        {
            value: built.attributeNamePrefix,
            name: 'attributeNamePrefix'
        },
        {
            value: built.attributesGroupName,
            name: 'attributesGroupName'
        },
        {
            value: built.textNodeName,
            name: 'textNodeName'
        },
        {
            value: built.cdataPropName,
            name: 'cdataPropName'
        },
        {
            value: built.commentPropName,
            name: 'commentPropName'
        }
    ];
    for (const { value, name } of propertyNameOptions){
        if (value) {
            validatePropertyName(value, name);
        }
    }
    if (built.onDangerousProperty === null) {
        built.onDangerousProperty = defaultOnDangerousProperty;
    }
    // Always normalize processEntities for backward compatibility and validation
    built.processEntities = normalizeProcessEntities(built.processEntities, built.htmlEntities);
    built.unpairedTagsSet = new Set(built.unpairedTags);
    // Convert old-style stopNodes for backward compatibility
    if (built.stopNodes && Array.isArray(built.stopNodes)) {
        built.stopNodes = built.stopNodes.map((node)=>{
            if (typeof node === 'string' && node.startsWith('*.')) {
                // Old syntax: *.tagname meant "tagname anywhere"
                // Convert to new syntax: ..tagname
                return '..' + node.substring(2);
            }
            return node;
        });
    }
    //console.debug(built.processEntities)
    return built;
};
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XmlNode
]);
'use strict';
let METADATA_SYMBOL;
if (typeof Symbol !== "function") {
    METADATA_SYMBOL = "@@xmlMetadata";
} else {
    METADATA_SYMBOL = Symbol("XML Node Metadata");
}
class XmlNode {
    constructor(tagname){
        this.tagname = tagname;
        this.child = []; //nested tags, text, cdata, comments in order
        this[":@"] = Object.create(null); //attributes map
    }
    add(key, val) {
        // this.child.push( {name : key, val: val, isCdata: isCdata });
        if (key === "__proto__") key = "#__proto__";
        this.child.push({
            [key]: val
        });
    }
    addChild(node, startIndex) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({
                [node.tagname]: node.child,
                [":@"]: node[":@"]
            });
        } else {
            this.child.push({
                [node.tagname]: node.child
            });
        }
        // if requested, add the startIndex
        if (startIndex !== undefined) {
            // Note: for now we just overwrite the metadata. If we had more complex metadata,
            // we might need to do an object append here:  metadata = { ...metadata, startIndex }
            this.child[this.child.length - 1][METADATA_SYMBOL] = {
                startIndex
            };
        }
    }
    /** symbol used for metadata */ static getMetaDataSymbol() {
        return METADATA_SYMBOL;
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocTypeReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/xml-naming/src/index.js [app-route] (ecmascript)");
;
class DocTypeReader {
    constructor(options, xmlVersion){
        this.suppressValidationErr = !options;
        this.options = options;
        this.xmlVersion = xmlVersion || 1.0;
    }
    setXmlVersion(xmlVersion = 1.0) {
        this.xmlVersion = xmlVersion;
    }
    readDocType(xmlData, i) {
        const entities = Object.create(null);
        let entityCount = 0;
        if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
            i = i + 9;
            let angleBracketsCount = 1;
            let hasBody = false, comment = false;
            let exp = "";
            for(; i < xmlData.length; i++){
                if (xmlData[i] === '<' && !comment) {
                    if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
                        i += 7;
                        let entityName, val;
                        [entityName, val, i] = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
                        if (val.indexOf("&") === -1) {
                            if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                                throw new Error(`Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                            }
                            //const escaped = entityName.replace(/[.\-+*:]/g, '\\.');
                            //const escaped = entityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                            entities[entityName] = val;
                            entityCount++;
                        }
                    } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
                        i += 8; //Not supported
                        const { index } = this.readElementExp(xmlData, i + 1);
                        i = index;
                    } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
                        i += 8; //Not supported
                    // const {index} = this.readAttlistExp(xmlData,i+1);
                    // i = index;
                    } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
                        i += 9; //Not supported
                        const { index } = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr);
                        i = index;
                    } else if (hasSeq(xmlData, "!--", i)) comment = true;
                    else throw new Error(`Invalid DOCTYPE`);
                    angleBracketsCount++;
                    exp = "";
                } else if (xmlData[i] === '>') {
                    if (comment) {
                        if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                            comment = false;
                            angleBracketsCount--;
                        }
                    } else {
                        angleBracketsCount--;
                    }
                    if (angleBracketsCount === 0) {
                        break;
                    }
                } else if (xmlData[i] === '[') {
                    hasBody = true;
                } else {
                    exp += xmlData[i];
                }
            }
            if (angleBracketsCount !== 0) {
                throw new Error(`Unclosed DOCTYPE`);
            }
        } else {
            throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return {
            entities,
            i
        };
    }
    readEntityExp(xmlData, i) {
        //External entities are not supported
        //    <!ENTITY ext SYSTEM "http://normal-website.com" >
        //Parameter entities are not supported
        //    <!ENTITY entityname "&anotherElement;">
        //Internal entities are supported
        //    <!ENTITY entityname "replacement text">
        // Skip leading whitespace after <!ENTITY
        i = skipWhitespace(xmlData, i);
        // Read entity name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'"){
            i++;
        }
        let entityName = xmlData.substring(startIndex, i);
        validateEntityName(entityName, {
            xmlVersion: this.xmlVersion
        });
        // Skip whitespace after entity name
        i = skipWhitespace(xmlData, i);
        // Check for unsupported constructs (external entities or parameter entities)
        if (!this.suppressValidationErr) {
            if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
                throw new Error("External entities are not supported");
            } else if (xmlData[i] === "%") {
                throw new Error("Parameter entities are not supported");
            }
        }
        // Read entity value (internal entity)
        let entityValue = "";
        [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
        // Validate entity size
        if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
            throw new Error(`Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
        }
        i--;
        return [
            entityName,
            entityValue,
            i
        ];
    }
    readNotationExp(xmlData, i) {
        // Skip leading whitespace after <!NOTATION
        i = skipWhitespace(xmlData, i);
        // Read notation name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let notationName = xmlData.substring(startIndex, i);
        !this.suppressValidationErr && validateEntityName(notationName, {
            xmlVersion: this.xmlVersion
        });
        // Skip whitespace after notation name
        i = skipWhitespace(xmlData, i);
        // Check identifier type (SYSTEM or PUBLIC)
        const identifierType = xmlData.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
            throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
        }
        i += identifierType.length;
        // Skip whitespace after identifier type
        i = skipWhitespace(xmlData, i);
        // Read public identifier (if PUBLIC)
        let publicIdentifier = null;
        let systemIdentifier = null;
        if (identifierType === "PUBLIC") {
            [i, publicIdentifier] = this.readIdentifierVal(xmlData, i, "publicIdentifier");
            // Skip whitespace after public identifier
            i = skipWhitespace(xmlData, i);
            // Optionally read system identifier
            if (xmlData[i] === '"' || xmlData[i] === "'") {
                [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
            }
        } else if (identifierType === "SYSTEM") {
            // Read system identifier (mandatory for SYSTEM)
            [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
            if (!this.suppressValidationErr && !systemIdentifier) {
                throw new Error("Missing mandatory system identifier for SYSTEM notation");
            }
        }
        return {
            notationName,
            publicIdentifier,
            systemIdentifier,
            index: --i
        };
    }
    readIdentifierVal(xmlData, i, type) {
        let identifierVal = "";
        const startChar = xmlData[i];
        if (startChar !== '"' && startChar !== "'") {
            throw new Error(`Expected quoted string, found "${startChar}"`);
        }
        i++;
        const startIndex = i;
        while(i < xmlData.length && xmlData[i] !== startChar){
            i++;
        }
        identifierVal = xmlData.substring(startIndex, i);
        if (xmlData[i] !== startChar) {
            throw new Error(`Unterminated ${type} value`);
        }
        i++;
        return [
            i,
            identifierVal
        ];
    }
    readElementExp(xmlData, i) {
        // <!ELEMENT br EMPTY>
        // <!ELEMENT div ANY>
        // <!ELEMENT title (#PCDATA)>
        // <!ELEMENT book (title, author+)>
        // <!ELEMENT name (content-model)>
        // Skip leading whitespace after <!ELEMENT
        i = skipWhitespace(xmlData, i);
        // Read element name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let elementName = xmlData.substring(startIndex, i);
        // Validate element name
        if (!this.suppressValidationErr && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["qName"])(elementName, {
            xmlVersion: this.xmlVersion
        })) {
            throw new Error(`Invalid element name: "${elementName}"`);
        }
        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);
        let contentModel = "";
        // Expect '(' to start content model
        if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
        else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
        else if (xmlData[i] === "(") {
            i++; // Move past '('
            // Read content model
            const startIndex = i;
            while(i < xmlData.length && xmlData[i] !== ")"){
                i++;
            }
            contentModel = xmlData.substring(startIndex, i);
            if (xmlData[i] !== ")") {
                throw new Error("Unterminated content model");
            }
        } else if (!this.suppressValidationErr) {
            throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
        }
        return {
            elementName,
            contentModel: contentModel.trim(),
            index: i
        };
    }
    readAttlistExp(xmlData, i) {
        // Skip leading whitespace after <!ATTLIST
        i = skipWhitespace(xmlData, i);
        // Read element name
        let startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let elementName = xmlData.substring(startIndex, i);
        // Validate element name
        validateEntityName(elementName, {
            xmlVersion: this.xmlVersion
        });
        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);
        // Read attribute name
        startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let attributeName = xmlData.substring(startIndex, i);
        // Validate attribute name
        if (!validateEntityName(attributeName, {
            xmlVersion: this.xmlVersion
        })) {
            throw new Error(`Invalid attribute name: "${attributeName}"`);
        }
        // Skip whitespace after attribute name
        i = skipWhitespace(xmlData, i);
        // Read attribute type
        let attributeType = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
            attributeType = "NOTATION";
            i += 8; // Move past "NOTATION"
            // Skip whitespace after "NOTATION"
            i = skipWhitespace(xmlData, i);
            // Expect '(' to start the list of notations
            if (xmlData[i] !== "(") {
                throw new Error(`Expected '(', found "${xmlData[i]}"`);
            }
            i++; // Move past '('
            // Read the list of allowed notations
            let allowedNotations = [];
            while(i < xmlData.length && xmlData[i] !== ")"){
                const startIndex = i;
                while(i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")"){
                    i++;
                }
                let notation = xmlData.substring(startIndex, i);
                // Validate notation name
                notation = notation.trim();
                if (!validateEntityName(notation, {
                    xmlVersion: this.xmlVersion
                })) {
                    throw new Error(`Invalid notation name: "${notation}"`);
                }
                allowedNotations.push(notation);
                // Skip '|' separator or exit loop
                if (xmlData[i] === "|") {
                    i++; // Move past '|'
                    i = skipWhitespace(xmlData, i); // Skip optional whitespace after '|'
                }
            }
            if (xmlData[i] !== ")") {
                throw new Error("Unterminated list of notations");
            }
            i++; // Move past ')'
            // Store the allowed notations as part of the attribute type
            attributeType += " (" + allowedNotations.join("|") + ")";
        } else {
            // Handle simple types (e.g., CDATA, ID, IDREF, etc.)
            const startIndex = i;
            while(i < xmlData.length && !/\s/.test(xmlData[i])){
                i++;
            }
            attributeType += xmlData.substring(startIndex, i);
            // Validate simple attribute type
            const validTypes = [
                "CDATA",
                "ID",
                "IDREF",
                "IDREFS",
                "ENTITY",
                "ENTITIES",
                "NMTOKEN",
                "NMTOKENS"
            ];
            if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
                throw new Error(`Invalid attribute type: "${attributeType}"`);
            }
        }
        // Skip whitespace after attribute type
        i = skipWhitespace(xmlData, i);
        // Read default value
        let defaultValue = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
            defaultValue = "#REQUIRED";
            i += 8;
        } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
            defaultValue = "#IMPLIED";
            i += 7;
        } else {
            [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
        }
        return {
            elementName,
            attributeName,
            attributeType,
            defaultValue,
            index: i
        };
    }
}
const skipWhitespace = (data, index)=>{
    while(index < data.length && /\s/.test(data[index])){
        index++;
    }
    return index;
};
function hasSeq(data, seq, i) {
    for(let j = 0; j < seq.length; j++){
        if (seq[j] !== data[i + j + 1]) return false;
    }
    return true;
}
function validateEntityName(name, xmlVersion) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$xml$2d$naming$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["qName"])(name, {
        xmlVersion: xmlVersion
    })) return name;
    else throw new Error(`Invalid entity name ${name}`);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/ignoreAttributes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getIgnoreAttributesFn
]);
function getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') {
        return ignoreAttributes;
    }
    if (Array.isArray(ignoreAttributes)) {
        return (attrName)=>{
            for (const pattern of ignoreAttributes){
                if (typeof pattern === 'string' && attrName === pattern) {
                    return true;
                }
                if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true;
                }
            }
        };
    }
    return ()=>false;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderedObjParser
]);
///@ts-check
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$DocTypeReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$strnum$2f$strnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/strnum/strnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/ignoreAttributes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__ExpressionSet$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript) <export default as ExpressionSet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__EntityDecoder$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript) <export default as EntityDecoder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
// const regx =
//   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
//   .replace(/NAME/g, util.nameRegexp);
//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
// Helper functions for attribute and namespace handling
/**
 * Extract raw attributes (without prefix) from prefixed attribute map
 * @param {object} prefixedAttrs - Attributes with prefix from buildAttributesMap
 * @param {object} options - Parser options containing attributeNamePrefix
 * @returns {object} Raw attributes for matcher
 */ function extractRawAttributes(prefixedAttrs, options) {
    if (!prefixedAttrs) return {};
    // Handle attributesGroupName option
    const attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
    if (!attrs) return {};
    const rawAttrs = {};
    for(const key in attrs){
        // Remove the attribute prefix to get raw name
        if (key.startsWith(options.attributeNamePrefix)) {
            const rawName = key.substring(options.attributeNamePrefix.length);
            rawAttrs[rawName] = attrs[key];
        } else {
            // Attribute without prefix (shouldn't normally happen, but be safe)
            rawAttrs[key] = attrs[key];
        }
    }
    return rawAttrs;
}
/**
 * Extract namespace from raw tag name
 * @param {string} rawTagName - Tag name possibly with namespace (e.g., "soap:Envelope")
 * @returns {string|undefined} Namespace or undefined
 */ function extractNamespace(rawTagName) {
    if (!rawTagName || typeof rawTagName !== 'string') return undefined;
    const colonIndex = rawTagName.indexOf(':');
    if (colonIndex !== -1 && colonIndex > 0) {
        const ns = rawTagName.substring(0, colonIndex);
        // Don't treat xmlns as a namespace
        if (ns !== 'xmlns') {
            return ns;
        }
    }
    return undefined;
}
class OrderedObjParser {
    constructor(options, externalEntities){
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
        this.ignoreAttributesFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(this.options.ignoreAttributes);
        this.entityExpansionCount = 0;
        this.currentExpandedLength = 0;
        let namedEntities = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML"]
        };
        if (this.options.entityDecoder) {
            this.entityDecoder = this.options.entityDecoder;
        } else {
            if (typeof this.options.htmlEntities === "object") namedEntities = this.options.htmlEntities;
            else if (this.options.htmlEntities === true) namedEntities = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COMMON_HTML"],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURRENCY"]
            };
            this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__EntityDecoder$3e$__["EntityDecoder"]({
                namedEntities: {
                    ...namedEntities,
                    ...externalEntities
                },
                numericAllowed: this.options.htmlEntities,
                limit: {
                    maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
                    maxExpandedLength: this.options.processEntities.maxExpandedLength,
                    applyLimitsTo: this.options.processEntities.appliesTo
                }
            });
        }
        // Initialize path matcher for path-expression-matcher
        this.matcher = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__["Matcher"]();
        this.readonlyMatcher = this.matcher.readOnly();
        // Flag to track if current node is a stop node (optimization)
        this.isCurrentNodeStopNode = false;
        // Pre-compile stopNodes expressions
        this.stopNodeExpressionsSet = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__ExpressionSet$3e$__["ExpressionSet"]();
        const stopNodesOpts = this.options.stopNodes;
        if (stopNodesOpts && stopNodesOpts.length > 0) {
            for(let i = 0; i < stopNodesOpts.length; i++){
                const stopNodeExp = stopNodesOpts[i];
                if (typeof stopNodeExp === 'string') {
                    // Convert string to Expression object
                    this.stopNodeExpressionsSet.add(new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"](stopNodeExp));
                } else if (stopNodeExp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"]) {
                    // Already an Expression object
                    this.stopNodeExpressionsSet.add(stopNodeExp);
                }
            }
            this.stopNodeExpressionsSet.seal();
        }
    }
}
/**
 * @param {string} val
 * @param {string} tagName
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */ function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
    const options = this.options;
    if (val !== undefined) {
        if (options.trimValues && !dontTrim) {
            val = val.trim();
        }
        if (val.length > 0) {
            if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
            // Pass jPath string or matcher based on options.jPath setting
            const jPathOrMatcher = options.jPath ? jPath.toString() : jPath;
            const newval = options.tagValueProcessor(tagName, val, jPathOrMatcher, hasAttributes, isLeafNode);
            if (newval === null || newval === undefined) {
                //don't parse
                return val;
            } else if (typeof newval !== typeof val || newval !== val) {
                //overwrite
                return newval;
            } else if (options.trimValues) {
                return parseValue(val, options.parseTagValue, options.numberParseOptions);
            } else {
                const trimmedVal = val.trim();
                if (trimmedVal === val) {
                    return parseValue(val, options.parseTagValue, options.numberParseOptions);
                } else {
                    return val;
                }
            }
        }
    }
}
function resolveNameSpace(tagname) {
    if (this.options.removeNSPrefix) {
        const tags = tagname.split(':');
        const prefix = tagname.charAt(0) === '/' ? '/' : '';
        if (tags[0] === 'xmlns') {
            return '';
        }
        if (tags.length === 2) {
            tagname = prefix + tags[1];
        }
    }
    return tagname;
}
//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
function buildAttributesMap(attrStr, jPath, tagName, force = false) {
    const options = this.options;
    if (force === true || options.ignoreAttributes !== true && typeof attrStr === 'string') {
        // attrStr = attrStr.replace(/\r?\n/g, ' ');
        //attrStr = attrStr || attrStr.trim();
        const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllMatches"])(attrStr, attrsRegx);
        const len = matches.length; //don't make it inline
        const attrs = {};
        // Pre-process values once: trim + entity replacement
        // Reused in both matcher update and second pass
        const processedVals = new Array(len);
        let hasRawAttrs = false;
        const rawAttrsForMatcher = {};
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            const oldVal = matches[i][4];
            if (attrName.length && oldVal !== undefined) {
                let val = oldVal;
                if (options.trimValues) val = val.trim();
                val = this.replaceEntitiesValue(val, tagName, this.readonlyMatcher);
                processedVals[i] = val;
                rawAttrsForMatcher[attrName] = val;
                hasRawAttrs = true;
            }
        }
        // Update matcher ONCE before second pass, if applicable
        if (hasRawAttrs && typeof jPath === 'object' && jPath.updateCurrent) {
            jPath.updateCurrent(rawAttrsForMatcher);
        }
        // Hoist toString() once — path doesn't change during attribute processing
        const jPathStr = options.jPath ? jPath.toString() : this.readonlyMatcher;
        // Second pass: apply processors, build final attrs
        let hasAttrs = false;
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            if (this.ignoreAttributesFn(attrName, jPathStr)) continue;
            let aName = options.attributeNamePrefix + attrName;
            if (attrName.length) {
                if (options.transformAttributeName) {
                    aName = options.transformAttributeName(aName);
                }
                aName = sanitizeName(aName, options);
                if (matches[i][4] !== undefined) {
                    // Reuse already-processed value — no double entity replacement
                    const oldVal = processedVals[i];
                    const newVal = options.attributeValueProcessor(attrName, oldVal, jPathStr);
                    if (newVal === null || newVal === undefined) {
                        attrs[aName] = oldVal;
                    } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                        attrs[aName] = newVal;
                    } else {
                        attrs[aName] = parseValue(oldVal, options.parseAttributeValue, options.numberParseOptions);
                    }
                    hasAttrs = true;
                } else if (options.allowBooleanAttributes) {
                    attrs[aName] = true;
                    hasAttrs = true;
                }
            }
        }
        if (!hasAttrs) return;
        if (options.attributesGroupName && !options.preserveOrder) {
            const attrCollection = {};
            attrCollection[options.attributesGroupName] = attrs;
            return attrCollection;
        }
        return attrs;
    }
}
const parseXml = function(xmlData) {
    xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
    const xmlObj = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]('!xml');
    let currentNode = xmlObj;
    let textData = "";
    // Reset matcher for new document
    this.matcher.reset();
    this.entityDecoder.reset();
    // Reset entity expansion counters for this document
    this.entityExpansionCount = 0;
    this.currentExpandedLength = 0;
    const options = this.options;
    const docTypeReader = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$DocTypeReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](options.processEntities);
    const xmlLen = xmlData.length;
    for(let i = 0; i < xmlLen; i++){
        const ch = xmlData[i];
        if (ch === '<') {
            // const nextIndex = i+1;
            // const _2ndChar = xmlData[nextIndex];
            const c1 = xmlData.charCodeAt(i + 1);
            if (c1 === 47) {
                const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                let tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (options.removeNSPrefix) {
                    const colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                        tagName = tagName.substr(colonIndex + 1);
                    }
                }
                tagName = transformTagName(options.transformTagName, tagName, "", options).tagName;
                if (currentNode) {
                    textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                }
                //check if last tag of nested tag was unpaired tag
                const lastTagName = this.matcher.getCurrentTag();
                if (tagName && options.unpairedTagsSet.has(tagName)) {
                    throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                }
                if (lastTagName && options.unpairedTagsSet.has(lastTagName)) {
                    // Pop the unpaired tag
                    this.matcher.pop();
                    this.tagsNodeStack.pop();
                }
                // Pop the closing tag
                this.matcher.pop();
                this.isCurrentNodeStopNode = false; // Reset flag when closing tag
                currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
                textData = "";
                i = closeIndex;
            } else if (c1 === 63) {
                let tagData = readTagExp(xmlData, i, false, "?>");
                if (!tagData) throw new Error("Pi Tag is not closed.");
                textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                const attsMap = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName, true);
                if (attsMap) {
                    const ver = attsMap[this.options.attributeNamePrefix + "version"];
                    this.entityDecoder.setXmlVersion(Number(ver) || 1.0);
                    docTypeReader.setXmlVersion(Number(ver) || 1.0);
                }
                if (options.ignoreDeclaration && tagData.tagName === "?xml" || options.ignorePiTags) {
                //do nothing
                } else {
                    const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagData.tagName);
                    childNode.add(options.textNodeName, "");
                    if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent && options.ignoreAttributes !== true) {
                        childNode[":@"] = attsMap;
                    }
                    this.addChild(currentNode, childNode, this.readonlyMatcher, i);
                }
                i = tagData.closeIndex + 1;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
                const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                if (options.commentPropName) {
                    const comment = xmlData.substring(i + 4, endIndex - 2);
                    textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                    currentNode.add(options.commentPropName, [
                        {
                            [options.textNodeName]: comment
                        }
                    ]);
                }
                i = endIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 68) {
                const result = docTypeReader.readDocType(xmlData, i);
                this.entityDecoder.addInputEntities(result.entities);
                i = result.i;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                const tagExp = xmlData.substring(i + 9, closeIndex);
                textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                let val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
                if (val == undefined) val = "";
                //cdata should be set even if it is 0 length string
                if (options.cdataPropName) {
                    currentNode.add(options.cdataPropName, [
                        {
                            [options.textNodeName]: tagExp
                        }
                    ]);
                } else {
                    currentNode.add(options.textNodeName, val);
                }
                i = closeIndex + 2;
            } else {
                let result = readTagExp(xmlData, i, options.removeNSPrefix);
                // Safety check: readTagExp can return undefined
                if (!result) {
                    // Log context for debugging
                    const context = xmlData.substring(Math.max(0, i - 50), Math.min(xmlLen, i + 50));
                    throw new Error(`readTagExp returned undefined at position ${i}. Context: "${context}"`);
                }
                let tagName = result.tagName;
                const rawTagName = result.rawTagName;
                let tagExp = result.tagExp;
                let attrExpPresent = result.attrExpPresent;
                let closeIndex = result.closeIndex;
                ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
                if (options.strictReservedNames && (tagName === options.commentPropName || tagName === options.cdataPropName || tagName === options.textNodeName || tagName === options.attributesGroupName)) {
                    throw new Error(`Invalid tag name: ${tagName}`);
                }
                //save text as child node
                if (currentNode && textData) {
                    if (currentNode.tagname !== '!xml') {
                        //when nested tag is found
                        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
                    }
                }
                //check if last tag was unpaired tag
                const lastTag = currentNode;
                if (lastTag && options.unpairedTagsSet.has(lastTag.tagname)) {
                    currentNode = this.tagsNodeStack.pop();
                    this.matcher.pop();
                }
                // Clean up self-closing syntax BEFORE processing attributes
                // This is where tagExp gets the trailing / removed
                let isSelfClosing = false;
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                    isSelfClosing = true;
                    if (tagName[tagName.length - 1] === "/") {
                        tagName = tagName.substr(0, tagName.length - 1);
                        tagExp = tagName;
                    } else {
                        tagExp = tagExp.substr(0, tagExp.length - 1);
                    }
                    // Re-check attrExpPresent after cleaning
                    attrExpPresent = tagName !== tagExp;
                }
                // Now process attributes with CLEAN tagExp (no trailing /)
                let prefixedAttrs = null;
                let rawAttrs = {};
                let namespace = undefined;
                // Extract namespace from rawTagName
                namespace = extractNamespace(rawTagName);
                // Push tag to matcher FIRST (with empty attrs for now) so callbacks see correct path
                if (tagName !== xmlObj.tagname) {
                    this.matcher.push(tagName, {}, namespace);
                }
                // Now build attributes - callbacks will see correct matcher state
                if (tagName !== tagExp && attrExpPresent) {
                    // Build attributes (returns prefixed attributes for the tree)
                    // Note: buildAttributesMap now internally updates the matcher with raw attributes
                    prefixedAttrs = this.buildAttributesMap(tagExp, this.matcher, tagName);
                    if (prefixedAttrs) {
                        // Extract raw attributes (without prefix) for our use
                        //TODO: seems a performance overhead
                        rawAttrs = extractRawAttributes(prefixedAttrs, options);
                    }
                }
                // Now check if this is a stop node (after attributes are set)
                if (tagName !== xmlObj.tagname) {
                    this.isCurrentNodeStopNode = this.isItStopNode();
                }
                const startIndex = i;
                if (this.isCurrentNodeStopNode) {
                    let tagContent = "";
                    // For self-closing tags, content is empty
                    if (isSelfClosing) {
                        i = result.closeIndex;
                    } else if (options.unpairedTagsSet.has(tagName)) {
                        i = result.closeIndex;
                    } else {
                        //read until closing tag is found
                        const result = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                        if (!result) throw new Error(`Unexpected end of ${rawTagName}`);
                        i = result.i;
                        tagContent = result.tagContent;
                    }
                    const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                    if (prefixedAttrs) {
                        childNode[":@"] = prefixedAttrs;
                    }
                    // For stop nodes, store raw content as-is without any processing
                    childNode.add(options.textNodeName, tagContent);
                    this.matcher.pop(); // Pop the stop node tag
                    this.isCurrentNodeStopNode = false; // Reset flag
                    this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                } else {
                    //selfClosing tag
                    if (isSelfClosing) {
                        ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        this.matcher.pop(); // Pop self-closing tag
                        this.isCurrentNodeStopNode = false; // Reset flag
                    } else if (options.unpairedTagsSet.has(tagName)) {
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        this.matcher.pop(); // Pop unpaired tag
                        this.isCurrentNodeStopNode = false; // Reset flag
                        i = result.closeIndex;
                        continue;
                    } else {
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (this.tagsNodeStack.length > options.maxNestedTags) {
                            throw new Error("Maximum nested tags exceeded");
                        }
                        this.tagsNodeStack.push(currentNode);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        currentNode = childNode;
                    }
                    textData = "";
                    i = closeIndex;
                }
            }
        } else {
            textData += xmlData[i];
        }
    }
    return xmlObj.child;
};
function addChild(currentNode, childNode, matcher, startIndex) {
    // unset startIndex if not requested
    if (!this.options.captureMetaData) startIndex = undefined;
    // Pass jPath string or matcher based on options.jPath setting
    const jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
    const result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
    if (result === false) {
    //do nothing
    } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode, startIndex);
    } else {
        currentNode.addChild(childNode, startIndex);
    }
}
/**
 * @param {object} val - Entity object with regex and val properties
 * @param {string} tagName - Tag name
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 */ function replaceEntitiesValue(val, tagName, jPath) {
    const entityConfig = this.options.processEntities;
    if (!entityConfig || !entityConfig.enabled) {
        return val;
    }
    // Check if tag is allowed to contain entities
    if (entityConfig.allowedTags) {
        const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
        const allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName) : entityConfig.allowedTags(tagName, jPathOrMatcher);
        if (!allowed) {
            return val;
        }
    }
    // Apply custom tag filter if provided
    if (entityConfig.tagFilter) {
        const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
        if (!entityConfig.tagFilter(tagName, jPathOrMatcher)) {
            return val; // Skip based on custom filter
        }
    }
    return this.entityDecoder.decode(val);
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
    if (textData) {
        if (isLeafNode === undefined) isLeafNode = parentNode.child.length === 0;
        textData = this.parseTextData(textData, parentNode.tagname, matcher, false, parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false, isLeafNode);
        if (textData !== undefined && textData !== "") parentNode.add(this.options.textNodeName, textData);
        textData = "";
    }
    return textData;
}
/**
 * @param {Array<Expression>} stopNodeExpressions - Array of compiled Expression objects
 * @param {Matcher} matcher - Current path matcher
 */ function isItStopNode() {
    if (this.stopNodeExpressionsSet.size === 0) return false;
    return this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */ function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
    //TODO: ignore boolean attributes in tag expression
    //TODO: if ignore attributes, dont read full attribute expression but the end. But read for xml declaration
    let attrBoundary = 0;
    const len = xmlData.length;
    const closeCode0 = closingChar.charCodeAt(0);
    const closeCode1 = closingChar.length > 1 ? closingChar.charCodeAt(1) : -1;
    let result = '';
    let segmentStart = i;
    for(let index = i; index < len; index++){
        const code = xmlData.charCodeAt(index);
        if (attrBoundary) {
            if (code === attrBoundary) attrBoundary = 0;
        } else if (code === 34 || code === 39) {
            attrBoundary = code;
        } else if (code === closeCode0) {
            if (closeCode1 !== -1) {
                if (xmlData.charCodeAt(index + 1) === closeCode1) {
                    result += xmlData.substring(segmentStart, index);
                    return {
                        data: result,
                        index
                    };
                }
            } else {
                result += xmlData.substring(segmentStart, index);
                return {
                    data: result,
                    index
                };
            }
        } else if (code === 9 && !attrBoundary) {
            // Flush accumulated segment, add space, start new segment
            result += xmlData.substring(segmentStart, index) + ' ';
            segmentStart = index + 1;
        }
    }
}
function findClosingIndex(xmlData, str, i, errMsg) {
    const closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) {
        throw new Error(errMsg);
    } else {
        return closingIndex + str.length - 1;
    }
}
function findClosingChar(xmlData, char, i, errMsg) {
    const closingIndex = xmlData.indexOf(char, i);
    if (closingIndex === -1) throw new Error(errMsg);
    return closingIndex; // no offset needed
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
    const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
    if (!result) return;
    let tagExp = result.data;
    const closeIndex = result.index;
    const separatorIndex = tagExp.search(/\s/);
    let tagName = tagExp;
    let attrExpPresent = true;
    if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
    }
    const rawTagName = tagName;
    if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
    }
    return {
        tagName: tagName,
        tagExp: tagExp,
        closeIndex: closeIndex,
        attrExpPresent: attrExpPresent,
        rawTagName: rawTagName
    };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */ function readStopNodeData(xmlData, tagName, i) {
    const startIndex = i;
    // Starting at 1 since we already have an open tag
    let openTagCount = 1;
    const xmllen = xmlData.length;
    for(; i < xmllen; i++){
        if (xmlData[i] === "<") {
            const c1 = xmlData.charCodeAt(i + 1);
            if (c1 === 47) {
                const closeIndex = findClosingChar(xmlData, ">", i, `${tagName} is not closed`);
                let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                if (closeTagName === tagName) {
                    openTagCount--;
                    if (openTagCount === 0) {
                        return {
                            tagContent: xmlData.substring(startIndex, i),
                            i: closeIndex
                        };
                    }
                }
                i = closeIndex;
            } else if (c1 === 63) {
                const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                i = closeIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
                const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                i = closeIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                i = closeIndex;
            } else {
                const tagData = readTagExp(xmlData, i, false);
                if (tagData) {
                    const openTagName = tagData && tagData.tagName;
                    if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                        openTagCount++;
                    }
                    i = tagData.closeIndex;
                }
            }
        }
    } //end for loop
}
function parseValue(val, shouldParse, options) {
    if (shouldParse && typeof val === 'string') {
        //console.log(options)
        const newval = val.trim();
        if (newval === 'true') return true;
        else if (newval === 'false') return false;
        else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$strnum$2f$strnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(val, options);
    } else {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isExist"])(val)) {
            return val;
        } else {
            return '';
        }
    }
}
function fromCodePoint(str, base, prefix) {
    const codePoint = Number.parseInt(str, base);
    if (codePoint >= 0 && codePoint <= 0x10FFFF) {
        return String.fromCodePoint(codePoint);
    } else {
        return prefix + str + ";";
    }
}
function transformTagName(fn, tagName, tagExp, options) {
    if (fn) {
        const newTagName = fn(tagName);
        if (tagExp === tagName) {
            tagExp = newTagName;
        }
        tagName = newTagName;
    }
    tagName = sanitizeName(tagName, options);
    return {
        tagName,
        tagExp
    };
}
function sanitizeName(name, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["criticalProperties"].includes(name)) {
        throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
        return options.onDangerousProperty(name);
    }
    return name;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/node2json.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>prettify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
'use strict';
;
;
const METADATA_SYMBOL = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getMetaDataSymbol();
/**
 * Helper function to strip attribute prefix from attribute map
 * @param {object} attrs - Attributes with prefix (e.g., {"@_class": "code"})
 * @param {string} prefix - Attribute prefix to remove (e.g., "@_")
 * @returns {object} Attributes without prefix (e.g., {"class": "code"})
 */ function stripAttributePrefix(attrs, prefix) {
    if (!attrs || typeof attrs !== 'object') return {};
    if (!prefix) return attrs;
    const rawAttrs = {};
    for(const key in attrs){
        if (key.startsWith(prefix)) {
            const rawName = key.substring(prefix.length);
            rawAttrs[rawName] = attrs[key];
        } else {
            // Attribute without prefix (shouldn't normally happen, but be safe)
            rawAttrs[key] = attrs[key];
        }
    }
    return rawAttrs;
}
function prettify(node, options, matcher, readonlyMatcher) {
    return compress(node, options, matcher, readonlyMatcher);
}
/**
 * @param {array} arr 
 * @param {object} options 
 * @param {Matcher} matcher - Path matcher instance
 * @returns object
 */ function compress(arr, options, matcher, readonlyMatcher) {
    let text;
    const compressedObj = {}; //This is intended to be a plain object
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const property = propName(tagObj);
        // Push current property to matcher WITH RAW ATTRIBUTES (no prefix)
        if (property !== undefined && property !== options.textNodeName) {
            const rawAttrs = stripAttributePrefix(tagObj[":@"] || {}, options.attributeNamePrefix);
            matcher.push(property, rawAttrs);
        }
        if (property === options.textNodeName) {
            if (text === undefined) text = tagObj[property];
            else text += "" + tagObj[property];
        } else if (property === undefined) {
            continue;
        } else if (tagObj[property]) {
            let val = compress(tagObj[property], options, matcher, readonlyMatcher);
            const isLeaf = isLeafTag(val, options);
            if (Object.keys(val).length === 0 && options.alwaysCreateTextNode) {
                val[options.textNodeName] = "";
            }
            if (tagObj[":@"]) {
                assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
            } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
                val = val[options.textNodeName];
            } else if (Object.keys(val).length === 0) {
                if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
                else val = "";
            }
            if (tagObj[METADATA_SYMBOL] !== undefined && typeof val === "object" && val !== null) {
                val[METADATA_SYMBOL] = tagObj[METADATA_SYMBOL]; // copy over metadata
            }
            if (compressedObj[property] !== undefined && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
                if (!Array.isArray(compressedObj[property])) {
                    compressedObj[property] = [
                        compressedObj[property]
                    ];
                }
                compressedObj[property].push(val);
            } else {
                //TODO: if a node is not an array, then check if it should be an array
                //also determine if it is a leaf node
                // Pass jPath string or readonlyMatcher based on options.jPath setting
                const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
                if (options.isArray(property, jPathOrMatcher, isLeaf)) {
                    compressedObj[property] = [
                        val
                    ];
                } else {
                    compressedObj[property] = val;
                }
            }
            // Pop property from matcher after processing
            if (property !== undefined && property !== options.textNodeName) {
                matcher.pop();
            }
        }
    }
    // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
    if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
    } else if (text !== undefined) compressedObj[options.textNodeName] = text;
    return compressedObj;
}
function propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key !== ":@") return key;
    }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
    if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++){
            const atrrName = keys[i]; // This is the PREFIXED name (e.g., "@_class")
            // Strip prefix for matcher path (for isArray callback)
            const rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;
            // For attributes, we need to create a temporary path
            // Pass jPath string or matcher based on options.jPath setting
            const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
            if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
                obj[atrrName] = [
                    attrMap[atrrName]
                ];
            } else {
                obj[atrrName] = attrMap[atrrName];
            }
        }
    }
}
function isLeafTag(obj, options) {
    const { textNodeName } = options;
    const propCount = Object.keys(obj).length;
    if (propCount === 0) {
        return true;
    }
    if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
    }
    return false;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/validator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
'use strict';
;
const defaultOptions = {
    allowBooleanAttributes: false,
    unpairedTags: []
};
function validate(xmlData, options) {
    options = Object.assign({}, defaultOptions, options);
    //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
    //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
    //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
    const tags = [];
    let tagFound = false;
    //indicates that the root tag has been closed (aka. depth 0 has been reached)
    let reachedRoot = false;
    if (xmlData[0] === '\ufeff') {
        // check for byte order mark (BOM)
        xmlData = xmlData.substr(1);
    }
    for(let i = 0; i < xmlData.length; i++){
        if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
            i += 2;
            i = readPI(xmlData, i);
            if (i.err) return i;
        } else if (xmlData[i] === '<') {
            //starting of tag
            //read until you reach to '>' avoiding any '>' in attribute value
            let tagStartPos = i;
            i++;
            if (xmlData[i] === '!') {
                i = readCommentAndCDATA(xmlData, i);
                continue;
            } else {
                let closingTag = false;
                if (xmlData[i] === '/') {
                    //closing tag
                    closingTag = true;
                    i++;
                }
                //read tagname
                let tagName = '';
                for(; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++){
                    tagName += xmlData[i];
                }
                tagName = tagName.trim();
                //console.log(tagName);
                if (tagName[tagName.length - 1] === '/') {
                    //self closing tag without attributes
                    tagName = tagName.substring(0, tagName.length - 1);
                    //continue;
                    i--;
                }
                if (!validateTagName(tagName)) {
                    let msg;
                    if (tagName.trim().length === 0) {
                        msg = "Invalid space after '<'.";
                    } else {
                        msg = "Tag '" + tagName + "' is an invalid name.";
                    }
                    return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
                }
                const result = readAttributeStr(xmlData, i);
                if (result === false) {
                    return getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                }
                let attrStr = result.value;
                i = result.index;
                if (attrStr[attrStr.length - 1] === '/') {
                    //self closing tag
                    const attrStrStart = i - attrStr.length;
                    attrStr = attrStr.substring(0, attrStr.length - 1);
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid === true) {
                        tagFound = true;
                    //continue; //text may presents after self closing tag
                    } else {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                    }
                } else if (closingTag) {
                    if (!result.tagClosed) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                    } else if (attrStr.trim().length > 0) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else if (tags.length === 0) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else {
                        const otg = tags.pop();
                        if (tagName !== otg.tagName) {
                            let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                            return getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                        }
                        //when there are no more tags, we reached the root level.
                        if (tags.length == 0) {
                            reachedRoot = true;
                        }
                    }
                } else {
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid !== true) {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                    }
                    //if the root level has been reached before ...
                    if (reachedRoot === true) {
                        return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
                    } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                    //don't push into stack
                    } else {
                        tags.push({
                            tagName,
                            tagStartPos
                        });
                    }
                    tagFound = true;
                }
                //skip tag text value
                //It may include comments and CDATA value
                for(i++; i < xmlData.length; i++){
                    if (xmlData[i] === '<') {
                        if (xmlData[i + 1] === '!') {
                            //comment or CADATA
                            i++;
                            i = readCommentAndCDATA(xmlData, i);
                            continue;
                        } else if (xmlData[i + 1] === '?') {
                            i = readPI(xmlData, ++i);
                            if (i.err) return i;
                        } else {
                            break;
                        }
                    } else if (xmlData[i] === '&') {
                        const afterAmp = validateAmpersand(xmlData, i);
                        if (afterAmp == -1) return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                        i = afterAmp;
                    } else {
                        if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                            return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
                        }
                    }
                } //end of reading tag text value
                if (xmlData[i] === '<') {
                    i--;
                }
            }
        } else {
            if (isWhiteSpace(xmlData[i])) {
                continue;
            }
            return getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
    }
    if (!tagFound) {
        return getErrorObject('InvalidXml', 'Start tag expected.', 1);
    } else if (tags.length == 1) {
        return getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
    } else if (tags.length > 0) {
        return getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map((t)=>t.tagName), null, 4).replace(/\r?\n/g, '') + "' found.", {
            line: 1,
            col: 1
        });
    }
    return true;
}
;
function isWhiteSpace(char) {
    return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */ function readPI(xmlData, i) {
    const start = i;
    for(; i < xmlData.length; i++){
        if (xmlData[i] == '?' || xmlData[i] == ' ') {
            //tagname
            const tagname = xmlData.substr(start, i - start);
            if (i > 5 && tagname === 'xml') {
                return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
            } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
                //check if valid attribut string
                i++;
                break;
            } else {
                continue;
            }
        }
    }
    return i;
}
function readCommentAndCDATA(xmlData, i) {
    if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
        //comment
        for(i += 3; i < xmlData.length; i++){
            if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
                i += 2;
                break;
            }
        }
    } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
        let angleBracketsCount = 1;
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === '<') {
                angleBracketsCount++;
            } else if (xmlData[i] === '>') {
                angleBracketsCount--;
                if (angleBracketsCount === 0) {
                    break;
                }
            }
        }
    } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
                i += 2;
                break;
            }
        }
    }
    return i;
}
const doubleQuote = '"';
const singleQuote = "'";
/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */ function readAttributeStr(xmlData, i) {
    let attrStr = '';
    let startChar = '';
    let tagClosed = false;
    for(; i < xmlData.length; i++){
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
            if (startChar === '') {
                startChar = xmlData[i];
            } else if (startChar !== xmlData[i]) {
            //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
            } else {
                startChar = '';
            }
        } else if (xmlData[i] === '>') {
            if (startChar === '') {
                tagClosed = true;
                break;
            }
        }
        attrStr += xmlData[i];
    }
    if (startChar !== '') {
        return false;
    }
    return {
        value: attrStr,
        index: i,
        tagClosed: tagClosed
    };
}
/**
 * Select all the attributes whether valid or invalid.
 */ const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');
//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""
function validateAttributeString(attrStr, options) {
    //console.log("start:"+attrStr+":end");
    //if(attrStr.trim().length === 0) return true; //empty string
    const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllMatches"])(attrStr, validAttrStrRegxp);
    const attrNames = {};
    for(let i = 0; i < matches.length; i++){
        if (matches[i][1].length === 0) {
            //nospace before attribute name: a="sd"b="saf"
            return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
            return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
            //independent attribute: ab
            return getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */ const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
            return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
            //check for duplicate attribute.
            attrNames[attrName] = 1;
        } else {
            return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
    }
    return true;
}
function validateNumberAmpersand(xmlData, i) {
    let re = /\d/;
    if (xmlData[i] === 'x') {
        i++;
        re = /[\da-fA-F]/;
    }
    for(; i < xmlData.length; i++){
        if (xmlData[i] === ';') return i;
        if (!xmlData[i].match(re)) break;
    }
    return -1;
}
function validateAmpersand(xmlData, i) {
    // https://www.w3.org/TR/xml/#dt-charref
    i++;
    if (xmlData[i] === ';') return -1;
    if (xmlData[i] === '#') {
        i++;
        return validateNumberAmpersand(xmlData, i);
    }
    let count = 0;
    for(; i < xmlData.length; i++, count++){
        if (xmlData[i].match(/\w/) && count < 20) continue;
        if (xmlData[i] === ';') break;
        return -1;
    }
    return i;
}
function getErrorObject(code, message, lineNumber) {
    return {
        err: {
            code: code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
        }
    };
}
function validateAttrName(attrName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(attrName);
}
// const startsWithXML = /^xml/i;
function validateTagName(tagname) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(tagname) /* && !tagname.match(startsWithXML) */ ;
}
//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
    const lines = xmlData.substring(0, index).split(/\r?\n/);
    return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
    };
}
//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
    return match.startIndex + match[1].length;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XMLParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OptionsBuilder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OrderedObjParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$node2json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/node2json.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/validator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
;
;
;
;
;
class XMLParser {
    constructor(options){
        this.externalEntities = {};
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OptionsBuilder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Uint8Array} xmlData 
     * @param {boolean|Object} validationOption 
     */ parse(xmlData, validationOption) {
        if (typeof xmlData !== "string" && xmlData.toString) {
            xmlData = xmlData.toString();
        } else if (typeof xmlData !== "string") {
            throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
            if (validationOption === true) validationOption = {}; //validate with default options
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validate"])(xmlData, validationOption);
            if (result !== true) {
                throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
        }
        const orderedObjParser = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OrderedObjParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](this.options, this.externalEntities);
        // orderedObjParser.entityDecoder.setExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$node2json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */ addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
        } else {
            this.externalEntities[key] = value;
        }
    }
    /**
     * Returns a Symbol that can be used to access the metadata
     * property on a node.
     * 
     * If Symbol is not available in the environment, an ordinary property is used
     * and the name of the property is here returned.
     * 
     * The XMLMetaData property is only present when `captureMetaData`
     * is true in the options.
     */ static getMetaDataSymbol() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getMetaDataSymbol();
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XMLParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript)");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/fxp.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XMLValidator",
    ()=>XMLValidator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/validator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlbuilder$2f$json2xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js [app-route] (ecmascript) <locals>");
'use strict';
;
;
;
const XMLValidator = {
    validate: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validate"]
};
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/anynum/digitTable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIGH_MAP",
    ()=>HIGH_MAP,
    "NOT_DIGIT",
    ()=>NOT_DIGIT,
    "TABLE",
    ()=>TABLE,
    "TABLE_OFFSET",
    ()=>TABLE_OFFSET
]);
/**
 * Flat lookup table: maps Unicode code point → ASCII digit (0-9).
 * Only decimal digit characters (Unicode category Nd) are included.
 *
 * Strategy: Int32Array of size (maxCodePoint - minCodePoint + 1).
 * Value 0xFF means "not a digit". Value 0-9 is the ASCII digit value.
 * This gives O(1) lookup with no branching, no bisect, no loop.
 *
 * Memory: range is 0x0660 to 0x1FBF0 → ~129,936 entries × 1 byte = ~127 KB.
 * Acceptable for a one-time init; lookup is a single array index.
 */ // All known Unicode Nd (decimal digit) script zero code points.
// Each script has exactly 10 consecutive digits: zero+0 .. zero+9.
const SCRIPT_ZEROS = [
    // Basic Latin (ASCII) — included for completeness / pass-through
    0x0030,
    // Arabic scripts
    0x0660,
    0x06F0,
    // Indic scripts
    0x0966,
    0x09E6,
    0x0A66,
    0x0AE6,
    0x0B66,
    0x0BE6,
    0x0C66,
    0x0CE6,
    0x0D66,
    0x0DE6,
    // Southeast Asian scripts
    0x0E50,
    0x0ED0,
    0x0F20,
    0x1040,
    0x1090,
    0x17E0,
    0x1810,
    0x1946,
    0x19D0,
    0x1A80,
    0x1A90,
    0x1B50,
    0x1BB0,
    0x1C40,
    0x1C50,
    // Fullwidth (CJK context)
    0xFF10,
    // Mathematical digit variants (Unicode math block)
    0x1D7CE,
    0x1D7D8,
    0x1D7E2,
    0x1D7EC,
    0x1D7F6,
    // Other scripts
    0x104A0,
    0x10D30,
    0x11066,
    0x110F0,
    0x11136,
    0x111D0,
    0x112F0,
    0x11450,
    0x114D0,
    0x11650,
    0x116C0,
    0x11730,
    0x118E0,
    0x11950,
    0x11BF0,
    0x11C50,
    0x11D50,
    0x11DA0,
    0x11F50,
    0x16A60,
    0x16AC0,
    0x16B50,
    0x1E140,
    0x1E2F0,
    0x1E4F0,
    0x1E950,
    0x1FBF0
];
// Build a sparse Map for scripts above 0xFFFF (surrogate-pair range).
// These can't go into a flat Uint8Array indexed by code point efficiently.
const NOT_DIGIT = 0xFF;
const HIGH_MAP = new Map(); // codePoint → digit value (0-9)
const LOW_MAX = 0xFFFF;
const LOW_MIN = 0x0660; // first non-ASCII digit script
// Flat Uint8Array covering 0x0660 .. 0xFFFF
const TABLE_OFFSET = LOW_MIN;
const TABLE_SIZE = LOW_MAX - LOW_MIN + 1;
const TABLE = new Uint8Array(TABLE_SIZE).fill(NOT_DIGIT);
for (const zero of SCRIPT_ZEROS){
    for(let d = 0; d < 10; d++){
        const cp = zero + d;
        if (cp <= LOW_MAX) {
            TABLE[cp - TABLE_OFFSET] = d;
        } else {
            HIGH_MAP.set(cp, d);
        }
    }
}
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/anynum/anynum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anynum",
    ()=>anynum,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/anynum/digitTable.js [app-route] (ecmascript)");
'use strict';
;
const CHAR_0 = 48; // '0'.charCodeAt(0)
const CHAR_9 = 57; // '9'.charCodeAt(0)
const CHAR_MINUS = 45; // '-'.charCodeAt(0)
// Unicode minus/hyphen variants worth normalizing to ASCII '-' in numeric context:
//   U+2212  MINUS SIGN       − (mathematically correct minus)
//   U+FF0D  FULLWIDTH HYPHEN-MINUS  － (Japanese fullwidth context)
//   U+FE63  SMALL HYPHEN-MINUS     ﹣ (small form variant)
//
// NOT normalized (deliberate):
//   U+2013  EN DASH  –  (punctuation, not a numeric sign)
//   U+2014  EM DASH  —  (punctuation)
//   U+2010  HYPHEN   ‐  (typographic hyphen)
//
// Rationale: only characters a human or locale formatter would plausibly use
// as a numeric minus sign are normalized. Dashes used for punctuation are left
// alone to avoid mangling non-numeric strings.
const MINUS_SET = new Set([
    0x2212,
    0xFF0D,
    0xFE63
]);
/**
 * Normalize all Unicode decimal digit characters in a string to ASCII (0-9),
 * and normalize Unicode minus variants to ASCII '-' (U+002D).
 *
 * Non-digit, non-minus characters are passed through unchanged.
 *
 * Performance design:
 * - Fast path: if the string has no convertible characters, return it unchanged
 *   (zero allocation).
 * - BMP digits (0x0660..0xFFFF excl. surrogates): flat Uint8Array lookup (O(1)).
 * - Supplementary plane digits (> 0xFFFF, encoded as surrogate pairs): Map lookup.
 * - Minus variants: checked inline with a small fixed Set.
 *
 * @param {string} str
 * @returns {string}
 */ function anynum(str) {
    if (typeof str !== 'string') return str;
    const len = str.length;
    if (len === 0) return str;
    // Scan for first character needing conversion.
    // If none found, return original string (zero allocation).
    let firstHit = -1;
    for(let i = 0; i < len; i++){
        const cc = str.charCodeAt(i);
        // ASCII digit or ASCII minus — already normalized, skip fast
        if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) continue;
        // Below first unicode digit script — check minus variants only
        if (cc < __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE_OFFSET"]) {
            if (MINUS_SET.has(cc)) {
                firstHit = i;
                break;
            }
            continue;
        }
        // Surrogate pairs live in BMP range 0xD800-0xDFFF — check before TABLE
        if (cc >= 0xD800 && cc <= 0xDBFF) {
            if (i + 1 < len) {
                const low = str.charCodeAt(i + 1);
                if (low >= 0xDC00 && low <= 0xDFFF) {
                    const cp = 0x10000 + (cc - 0xD800 << 10) + (low - 0xDC00);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIGH_MAP"].has(cp)) {
                        firstHit = i;
                        break;
                    }
                }
            }
            continue;
        }
        // BMP non-surrogate: flat table lookup; also check minus variants in this range
        if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE"][cc - __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE_OFFSET"]] !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOT_DIGIT"] || MINUS_SET.has(cc)) {
            firstHit = i;
            break;
        }
    }
    // Nothing to replace — return original, zero allocation
    if (firstHit === -1) return str;
    // Build result: copy unchanged prefix, then convert from firstHit onward
    const chars = [];
    if (firstHit > 0) chars.push(str.slice(0, firstHit));
    for(let i = firstHit; i < len; i++){
        const cc = str.charCodeAt(i);
        // ASCII digit or ASCII minus — pass through
        if (cc >= CHAR_0 && cc <= CHAR_9 || cc === CHAR_MINUS) {
            chars.push(str[i]);
            continue;
        }
        // Below TABLE_OFFSET — check minus variants, else pass through
        if (cc < __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE_OFFSET"]) {
            chars.push(MINUS_SET.has(cc) ? '-' : str[i]);
            continue;
        }
        // Surrogate pairs
        if (cc >= 0xD800 && cc <= 0xDBFF) {
            if (i + 1 < len) {
                const low = str.charCodeAt(i + 1);
                if (low >= 0xDC00 && low <= 0xDFFF) {
                    const cp = 0x10000 + (cc - 0xD800 << 10) + (low - 0xDC00);
                    const d = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIGH_MAP"].get(cp);
                    if (d !== undefined) {
                        chars.push(String.fromCharCode(d + 48));
                        i++; // consume low surrogate
                        continue;
                    }
                }
            }
            chars.push(str[i]);
            continue;
        }
        // BMP non-surrogate: flat table lookup + minus variants
        if (MINUS_SET.has(cc)) {
            chars.push('-');
            continue;
        }
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE"][cc - __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TABLE_OFFSET"]];
        chars.push(d !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$digitTable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOT_DIGIT"] ? String.fromCharCode(d + 48) : str[i]);
    }
    return chars.join('');
}
;
const __TURBOPACK__default__export__ = anynum;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/strnum/strnum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$anynum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/anynum/anynum.js [app-route] (ecmascript)");
const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const binRegex = /^0b[01]+$/;
const octRegex = /^0o[0-7]+$/;
const numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
;
const consider = {
    hex: true,
    binary: false,
    octal: false,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true,
    //skipLike: /regex/,
    infinity: "original",
    unicode: false
};
function toNumber(str, options = {}) {
    options = Object.assign({}, consider, options);
    if (!str || typeof str !== "string") return str;
    let trimmedStr = str.trim();
    if (trimmedStr.length === 0) return str;
    else if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (trimmedStr === "0") return 0;
    if (options.unicode) {
        trimmedStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$anynum$2f$anynum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(trimmedStr);
        if (trimmedStr === "0") return 0; // re-check after normalization
    }
    if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
    } else if (options.binary && binRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 2);
    } else if (options.octal && octRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 8);
    } else if (!isFinite(trimmedStr)) {
        return handleInfinity(str, Number(trimmedStr), options);
    } else if (trimmedStr.includes('e') || trimmedStr.includes('E')) {
        return resolveEnotation(str, trimmedStr, options);
    } else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        // +00.123 => [ , '+', '00', '.123', ..
        if (match) {
            const sign = match[1] || "";
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            const decimalAdjacentToLeadingZeros = sign ? str[leadingZeros.length + 1] === "." : str[leadingZeros.length] === ".";
            //trim ending zeros for floating number
            if (!options.leadingZeros //leading zeros are not allowed
             && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
                // 00, 00.3, +03.24, 03, 03.24
                return str;
            } else {
                const num = Number(trimmedStr);
                const parsedStr = String(num);
                if (num === 0) return num;
                if (parsedStr.search(/[eE]/) !== -1) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (trimmedStr.indexOf(".") !== -1) {
                    if (parsedStr === "0") return num; //0.0
                    else if (parsedStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
                    else return str;
                }
                let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
                if (leadingZeros) {
                    // -009 => -9
                    return n === parsedStr || sign + n === parsedStr ? num : str;
                } else {
                    // +9
                    return n === parsedStr || n === sign + parsedStr ? num : str;
                }
            }
        } else {
            return str;
        }
    }
}
const eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
    if (!options.eNotation) return str;
    const notation = trimmedStr.match(eNotationRegx);
    if (notation) {
        let sign = notation[1] || "";
        const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
        const leadingZeros = notation[2];
        const eAdjacentToLeadingZeros = sign ? str[leadingZeros.length + 1] === eChar : str[leadingZeros.length] === eChar;
        if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
        else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
            return Number(trimmedStr);
        } else if (leadingZeros.length > 0) {
            // Has leading zeros — only accept if leadingZeros option allows it
            if (options.leadingZeros && !eAdjacentToLeadingZeros) {
                trimmedStr = (notation[1] || "") + notation[3];
                return Number(trimmedStr);
            } else return str;
        } else {
            // No leading zeros — always valid e-notation, parse it
            return Number(trimmedStr);
        }
    } else {
        return str;
    }
}
/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */ function trimZeros(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
        return numStr;
    }
    return numStr;
}
function parse_int(numStr, base) {
    const str = numStr.trim();
    if (base === 2 || base === 8) numStr = str.substring(2);
    if (parseInt) return parseInt(numStr, base);
    else if (Number.parseInt) return Number.parseInt(numStr, base);
    else if (window && window.parseInt) return window.parseInt(numStr, base);
    else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
/**
 * Handle infinite values based on user option
 * @param {string} str - original input string
 * @param {number} num - parsed number (Infinity or -Infinity)
 * @param {object} options - user options
 * @returns {string|number|null} based on infinity option
 */ function handleInfinity(str, num, options) {
    const isPositive = num === Infinity;
    switch(options.infinity.toLowerCase()){
        case "null":
            return null;
        case "infinity":
            return num; // Return Infinity or -Infinity
        case "string":
            return isPositive ? "Infinity" : "-Infinity";
        case "original":
        default:
            return str; // Return original string like "1e1000"
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// Complete HTML5 named entity reference
// Organized by logical categories for easy maintenance and selective importing
// ---------------------------------------------------------------------------
/**
 * Basic Latin & Special Characters
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "ALL_ENTITIES",
    ()=>ALL_ENTITIES,
    "ARROWS",
    ()=>ARROWS,
    "BASIC_LATIN",
    ()=>BASIC_LATIN,
    "COMMON_HTML",
    ()=>COMMON_HTML,
    "CURRENCY",
    ()=>CURRENCY,
    "CYRILLIC",
    ()=>CYRILLIC,
    "FRACTIONS",
    ()=>FRACTIONS,
    "GREEK",
    ()=>GREEK,
    "LATIN_ACCENTS",
    ()=>LATIN_ACCENTS,
    "LATIN_EXTENDED",
    ()=>LATIN_EXTENDED,
    "MATH",
    ()=>MATH,
    "MATH_ADVANCED",
    ()=>MATH_ADVANCED,
    "MISC_SYMBOLS",
    ()=>MISC_SYMBOLS,
    "PUNCTUATION",
    ()=>PUNCTUATION,
    "SHAPES",
    ()=>SHAPES,
    "XML",
    ()=>XML
]);
const BASIC_LATIN = {
    amp: '&',
    AMP: '&',
    lt: '<',
    LT: '<',
    gt: '>',
    GT: '>',
    quot: '"',
    QUOT: '"',
    apos: "'",
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    lsquor: '‚',
    rsquor: '’',
    ldquor: '„',
    bdquo: '„',
    comma: ',',
    period: '.',
    colon: ':',
    semi: ';',
    excl: '!',
    quest: '?',
    num: '#',
    dollar: '$',
    percent: '%',
    ast: '*',
    commat: '@',
    lowbar: '_',
    verbar: '|',
    vert: '|',
    sol: '/',
    bsol: '\\',
    lbrace: '{',
    rbrace: '}',
    lbrack: '[',
    rbrack: ']',
    lpar: '(',
    rpar: ')',
    nbsp: '\u00a0',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    COPY: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '\u00ad',
    reg: '®',
    REG: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    half: '½',
    frac34: '¾',
    iquest: '¿',
    times: '×',
    div: '÷',
    divide: '÷'
};
const LATIN_ACCENTS = {
    Agrave: 'À',
    agrave: 'à',
    Aacute: 'Á',
    aacute: 'á',
    Acirc: 'Â',
    acirc: 'â',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    Aring: 'Å',
    aring: 'å',
    AElig: 'Æ',
    aelig: 'æ',
    Ccedil: 'Ç',
    ccedil: 'ç',
    Egrave: 'È',
    egrave: 'è',
    Eacute: 'É',
    eacute: 'é',
    Ecirc: 'Ê',
    ecirc: 'ê',
    Euml: 'Ë',
    euml: 'ë',
    Igrave: 'Ì',
    igrave: 'ì',
    Iacute: 'Í',
    iacute: 'í',
    Icirc: 'Î',
    icirc: 'î',
    Iuml: 'Ï',
    iuml: 'ï',
    ETH: 'Ð',
    eth: 'ð',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    Ograve: 'Ò',
    ograve: 'ò',
    Oacute: 'Ó',
    oacute: 'ó',
    Ocirc: 'Ô',
    ocirc: 'ô',
    Otilde: 'Õ',
    otilde: 'õ',
    Ouml: 'Ö',
    ouml: 'ö',
    Oslash: 'Ø',
    oslash: 'ø',
    Ugrave: 'Ù',
    ugrave: 'ù',
    Uacute: 'Ú',
    uacute: 'ú',
    Ucirc: 'Û',
    ucirc: 'û',
    Uuml: 'Ü',
    uuml: 'ü',
    Yacute: 'Ý',
    yacute: 'ý',
    THORN: 'Þ',
    thorn: 'þ',
    szlig: 'ß',
    yuml: 'ÿ',
    Yuml: 'Ÿ'
};
const LATIN_EXTENDED = {
    Amacr: 'Ā',
    amacr: 'ā',
    Abreve: 'Ă',
    abreve: 'ă',
    Aogon: 'Ą',
    aogon: 'ą',
    Cacute: 'Ć',
    cacute: 'ć',
    Ccirc: 'Ĉ',
    ccirc: 'ĉ',
    Cdot: 'Ċ',
    cdot: 'ċ',
    Ccaron: 'Č',
    ccaron: 'č',
    Dcaron: 'Ď',
    dcaron: 'ď',
    Dstrok: 'Đ',
    dstrok: 'đ',
    Emacr: 'Ē',
    emacr: 'ē',
    Ecaron: 'Ě',
    ecaron: 'ě',
    Edot: 'Ė',
    edot: 'ė',
    Eogon: 'Ę',
    eogon: 'ę',
    Gcirc: 'Ĝ',
    gcirc: 'ĝ',
    Gbreve: 'Ğ',
    gbreve: 'ğ',
    Gdot: 'Ġ',
    gdot: 'ġ',
    Gcedil: 'Ģ',
    Hcirc: 'Ĥ',
    hcirc: 'ĥ',
    Hstrok: 'Ħ',
    hstrok: 'ħ',
    Itilde: 'Ĩ',
    itilde: 'ĩ',
    Imacr: 'Ī',
    imacr: 'ī',
    Iogon: 'Į',
    iogon: 'į',
    Idot: 'İ',
    IJlig: 'Ĳ',
    ijlig: 'ĳ',
    Jcirc: 'Ĵ',
    jcirc: 'ĵ',
    Kcedil: 'Ķ',
    kcedil: 'ķ',
    kgreen: 'ĸ',
    Lacute: 'Ĺ',
    lacute: 'ĺ',
    Lcedil: 'Ļ',
    lcedil: 'ļ',
    Lcaron: 'Ľ',
    lcaron: 'ľ',
    Lmidot: 'Ŀ',
    lmidot: 'ŀ',
    Lstrok: 'Ł',
    lstrok: 'ł',
    Nacute: 'Ń',
    nacute: 'ń',
    Ncaron: 'Ň',
    ncaron: 'ň',
    Ncedil: 'Ņ',
    ncedil: 'ņ',
    ENG: 'Ŋ',
    eng: 'ŋ',
    Omacr: 'Ō',
    omacr: 'ō',
    Odblac: 'Ő',
    odblac: 'ő',
    OElig: 'Œ',
    oelig: 'œ',
    Racute: 'Ŕ',
    racute: 'ŕ',
    Rcaron: 'Ř',
    rcaron: 'ř',
    Rcedil: 'Ŗ',
    rcedil: 'ŗ',
    Sacute: 'Ś',
    sacute: 'ś',
    Scirc: 'Ŝ',
    scirc: 'ŝ',
    Scedil: 'Ş',
    scedil: 'ş',
    Scaron: 'Š',
    scaron: 'š',
    Tcedil: 'Ţ',
    tcedil: 'ţ',
    Tcaron: 'Ť',
    tcaron: 'ť',
    Tstrok: 'Ŧ',
    tstrok: 'ŧ',
    Utilde: 'Ũ',
    utilde: 'ũ',
    Umacr: 'Ū',
    umacr: 'ū',
    Ubreve: 'Ŭ',
    ubreve: 'ŭ',
    Uring: 'Ů',
    uring: 'ů',
    Udblac: 'Ű',
    udblac: 'ű',
    Uogon: 'Ų',
    uogon: 'ų',
    Wcirc: 'Ŵ',
    wcirc: 'ŵ',
    Ycirc: 'Ŷ',
    ycirc: 'ŷ',
    Zacute: 'Ź',
    zacute: 'ź',
    Zdot: 'Ż',
    zdot: 'ż',
    Zcaron: 'Ž',
    zcaron: 'ž'
};
const GREEK = {
    Alpha: 'Α',
    alpha: 'α',
    Beta: 'Β',
    beta: 'β',
    Gamma: 'Γ',
    gamma: 'γ',
    Delta: 'Δ',
    delta: 'δ',
    Epsilon: 'Ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    varepsilon: 'ϵ',
    Zeta: 'Ζ',
    zeta: 'ζ',
    Eta: 'Η',
    eta: 'η',
    Theta: 'Θ',
    theta: 'θ',
    thetasym: 'ϑ',
    vartheta: 'ϑ',
    Iota: 'Ι',
    iota: 'ι',
    Kappa: 'Κ',
    kappa: 'κ',
    kappav: 'ϰ',
    varkappa: 'ϰ',
    Lambda: 'Λ',
    lambda: 'λ',
    Mu: 'Μ',
    mu: 'μ',
    Nu: 'Ν',
    nu: 'ν',
    Xi: 'Ξ',
    xi: 'ξ',
    Omicron: 'Ο',
    omicron: 'ο',
    Pi: 'Π',
    pi: 'π',
    piv: 'ϖ',
    varpi: 'ϖ',
    Rho: 'Ρ',
    rho: 'ρ',
    rhov: 'ϱ',
    varrho: 'ϱ',
    Sigma: 'Σ',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    varsigma: 'ς',
    Tau: 'Τ',
    tau: 'τ',
    Upsilon: 'Υ',
    upsilon: 'υ',
    upsi: 'υ',
    Upsi: 'ϒ',
    upsih: 'ϒ',
    Phi: 'Φ',
    phi: 'φ',
    phiv: 'ϕ',
    varphi: 'ϕ',
    Chi: 'Χ',
    chi: 'χ',
    Psi: 'Ψ',
    psi: 'ψ',
    Omega: 'Ω',
    omega: 'ω',
    ohm: 'Ω',
    Gammad: 'Ϝ',
    gammad: 'ϝ',
    digamma: 'ϝ'
};
const CYRILLIC = {
    Afr: '𝔄',
    afr: '𝔞',
    Acy: 'А',
    acy: 'а',
    Bcy: 'Б',
    bcy: 'б',
    Vcy: 'В',
    vcy: 'в',
    Gcy: 'Г',
    gcy: 'г',
    Dcy: 'Д',
    dcy: 'д',
    IEcy: 'Е',
    iecy: 'е',
    IOcy: 'Ё',
    iocy: 'ё',
    ZHcy: 'Ж',
    zhcy: 'ж',
    Zcy: 'З',
    zcy: 'з',
    Icy: 'И',
    icy: 'и',
    Jcy: 'Й',
    jcy: 'й',
    Kcy: 'К',
    kcy: 'к',
    Lcy: 'Л',
    lcy: 'л',
    Mcy: 'М',
    mcy: 'м',
    Ncy: 'Н',
    ncy: 'н',
    Ocy: 'О',
    ocy: 'о',
    Pcy: 'П',
    pcy: 'п',
    Rcy: 'Р',
    rcy: 'р',
    Scy: 'С',
    scy: 'с',
    Tcy: 'Т',
    tcy: 'т',
    Ucy: 'У',
    ucy: 'у',
    Fcy: 'Ф',
    fcy: 'ф',
    KHcy: 'Х',
    khcy: 'х',
    TScy: 'Ц',
    tscy: 'ц',
    CHcy: 'Ч',
    chcy: 'ч',
    SHcy: 'Ш',
    shcy: 'ш',
    SHCHcy: 'Щ',
    shchcy: 'щ',
    HARDcy: 'Ъ',
    hardcy: 'ъ',
    Ycy: 'Ы',
    ycy: 'ы',
    SOFTcy: 'Ь',
    softcy: 'ь',
    Ecy: 'Э',
    ecy: 'э',
    YUcy: 'Ю',
    yucy: 'ю',
    YAcy: 'Я',
    yacy: 'я',
    DJcy: 'Ђ',
    djcy: 'ђ',
    GJcy: 'Ѓ',
    gjcy: 'ѓ',
    Jukcy: 'Є',
    jukcy: 'є',
    DScy: 'Ѕ',
    dscy: 'ѕ',
    Iukcy: 'І',
    iukcy: 'і',
    YIcy: 'Ї',
    yicy: 'ї',
    Jsercy: 'Ј',
    jsercy: 'ј',
    LJcy: 'Љ',
    ljcy: 'љ',
    NJcy: 'Њ',
    njcy: 'њ',
    TSHcy: 'Ћ',
    tshcy: 'ћ',
    KJcy: 'Ќ',
    kjcy: 'ќ',
    Ubrcy: 'Ў',
    ubrcy: 'ў',
    DZcy: 'Џ',
    dzcy: 'џ'
};
const MATH = {
    plus: '+',
    pm: '±',
    times: '×',
    div: '÷',
    divide: '÷',
    sdot: '⋅',
    star: '☆',
    starf: '★',
    bigstar: '★',
    lowast: '∗',
    ast: '*',
    midast: '*',
    compfn: '∘',
    smallcircle: '∘',
    bullet: '•',
    bull: '•',
    nbsp: '\u00a0',
    hellip: '…',
    mldr: '…',
    prime: '′',
    Prime: '″',
    tprime: '‴',
    bprime: '‵',
    backprime: '‵',
    minus: '−',
    minusd: '∸',
    dotminus: '∸',
    plusdo: '∔',
    dotplus: '∔',
    plusmn: '±',
    minusplus: '∓',
    mnplus: '∓',
    mp: '∓',
    setminus: '∖',
    smallsetminus: '∖',
    Backslash: '∖',
    setmn: '∖',
    ssetmn: '∖',
    lowbar: '_',
    verbar: '|',
    vert: '|',
    VerticalLine: '|',
    colon: ':',
    Colon: '∷',
    Proportion: '∷',
    ratio: '∶',
    equals: '=',
    ne: '≠',
    nequiv: '≢',
    equiv: '≡',
    Congruent: '≡',
    sim: '∼',
    thicksim: '∼',
    thksim: '∼',
    sime: '≃',
    simeq: '≃',
    TildeEqual: '≃',
    asymp: '≈',
    approx: '≈',
    thickapprox: '≈',
    thkap: '≈',
    TildeTilde: '≈',
    ncong: '≇',
    cong: '≅',
    TildeFullEqual: '≅',
    asympeq: '≍',
    CupCap: '≍',
    bump: '≎',
    Bumpeq: '≎',
    HumpDownHump: '≎',
    bumpe: '≏',
    bumpeq: '≏',
    HumpEqual: '≏',
    le: '≤',
    LessEqual: '≤',
    ge: '≥',
    GreaterEqual: '≥',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    greater: '>',
    less: '<'
};
const MATH_ADVANCED = {
    alefsym: 'ℵ',
    aleph: 'ℵ',
    beth: 'ℶ',
    gimel: 'ℷ',
    daleth: 'ℸ',
    forall: '∀',
    ForAll: '∀',
    part: '∂',
    PartialD: '∂',
    exist: '∃',
    Exists: '∃',
    nexist: '∄',
    nexists: '∄',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    varnothing: '∅',
    nabla: '∇',
    Del: '∇',
    isin: '∈',
    isinv: '∈',
    in: '∈',
    Element: '∈',
    notin: '∉',
    notinva: '∉',
    ni: '∋',
    niv: '∋',
    SuchThat: '∋',
    ReverseElement: '∋',
    notni: '∌',
    notniva: '∌',
    prod: '∏',
    Product: '∏',
    coprod: '∐',
    Coproduct: '∐',
    sum: '∑',
    Sum: '∑',
    minus: '−',
    mp: '∓',
    plusdo: '∔',
    dotplus: '∔',
    setminus: '∖',
    lowast: '∗',
    radic: '√',
    Sqrt: '√',
    prop: '∝',
    propto: '∝',
    Proportional: '∝',
    varpropto: '∝',
    infin: '∞',
    infintie: '⧝',
    ang: '∠',
    angle: '∠',
    angmsd: '∡',
    measuredangle: '∡',
    angsph: '∢',
    mid: '∣',
    VerticalBar: '∣',
    nmid: '∤',
    nsmid: '∤',
    npar: '∦',
    parallel: '∥',
    spar: '∥',
    nparallel: '∦',
    nspar: '∦',
    and: '∧',
    wedge: '∧',
    or: '∨',
    vee: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    Integral: '∫',
    conint: '∮',
    ContourIntegral: '∮',
    Conint: '∯',
    DoubleContourIntegral: '∯',
    Cconint: '∰',
    there4: '∴',
    therefore: '∴',
    Therefore: '∴',
    becaus: '∵',
    because: '∵',
    Because: '∵',
    ratio: '∶',
    Proportion: '∷',
    minusd: '∸',
    dotminus: '∸',
    mDDot: '∺',
    homtht: '∻',
    sim: '∼',
    bsimg: '∽',
    backsim: '∽',
    ac: '∾',
    mstpos: '∾',
    acd: '∿',
    VerticalTilde: '≀',
    wr: '≀',
    wreath: '≀',
    nsime: '≄',
    nsimeq: '≄',
    ncong: '≇',
    simne: '≆',
    ncongdot: '⩭̸',
    ngsim: '≵',
    nsim: '≁',
    napprox: '≉',
    nap: '≉',
    ngeq: '≱',
    nge: '≱',
    nleq: '≰',
    nle: '≰',
    ngtr: '≯',
    ngt: '≯',
    nless: '≮',
    nlt: '≮',
    nprec: '⊀',
    npr: '⊀',
    nsucc: '⊁',
    nsc: '⊁'
};
const ARROWS = {
    larr: '←',
    leftarrow: '←',
    LeftArrow: '←',
    uarr: '↑',
    uparrow: '↑',
    UpArrow: '↑',
    rarr: '→',
    rightarrow: '→',
    RightArrow: '→',
    darr: '↓',
    downarrow: '↓',
    DownArrow: '↓',
    harr: '↔',
    leftrightarrow: '↔',
    LeftRightArrow: '↔',
    varr: '↕',
    updownarrow: '↕',
    UpDownArrow: '↕',
    nwarr: '↖',
    nwarrow: '↖',
    UpperLeftArrow: '↖',
    nearr: '↗',
    nearrow: '↗',
    UpperRightArrow: '↗',
    searr: '↘',
    searrow: '↘',
    LowerRightArrow: '↘',
    swarr: '↙',
    swarrow: '↙',
    LowerLeftArrow: '↙',
    lArr: '⇐',
    Leftarrow: '⇐',
    uArr: '⇑',
    Uparrow: '⇑',
    rArr: '⇒',
    Rightarrow: '⇒',
    dArr: '⇓',
    Downarrow: '⇓',
    hArr: '⇔',
    Leftrightarrow: '⇔',
    iff: '⇔',
    vArr: '⇕',
    Updownarrow: '⇕',
    lAarr: '⇚',
    Lleftarrow: '⇚',
    rAarr: '⇛',
    Rrightarrow: '⇛',
    lrarr: '⇆',
    leftrightarrows: '⇆',
    rlarr: '⇄',
    rightleftarrows: '⇄',
    lrhar: '⇋',
    leftrightharpoons: '⇋',
    ReverseEquilibrium: '⇋',
    rlhar: '⇌',
    rightleftharpoons: '⇌',
    Equilibrium: '⇌',
    udarr: '⇅',
    UpArrowDownArrow: '⇅',
    duarr: '⇵',
    DownArrowUpArrow: '⇵',
    llarr: '⇇',
    leftleftarrows: '⇇',
    rrarr: '⇉',
    rightrightarrows: '⇉',
    ddarr: '⇊',
    downdownarrows: '⇊',
    har: '↽',
    lhard: '↽',
    leftharpoondown: '↽',
    lharu: '↼',
    leftharpoonup: '↼',
    rhard: '⇁',
    rightharpoondown: '⇁',
    rharu: '⇀',
    rightharpoonup: '⇀',
    lsh: '↰',
    Lsh: '↰',
    rsh: '↱',
    Rsh: '↱',
    ldsh: '↲',
    rdsh: '↳',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    mapstoleft: '↤',
    mapstoup: '↥',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    crarr: '↵',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nrightarrow: '↛',
    nrarr: '↛',
    larrtl: '↢',
    rarrtl: '↣',
    leftarrowtail: '↢',
    rightarrowtail: '↣',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    Larr: '↞',
    Rarr: '↠',
    larrhk: '↩',
    rarrhk: '↪',
    larrlp: '↫',
    looparrowleft: '↫',
    rarrlp: '↬',
    looparrowright: '↬',
    harrw: '↭',
    leftrightsquigarrow: '↭',
    nrarrw: '↝̸',
    rarrw: '↝',
    rightsquigarrow: '↝',
    larrbfs: '⤟',
    rarrbfs: '⤠',
    nvHarr: '⤄',
    nvlArr: '⤂',
    nvrArr: '⤃',
    larrfs: '⤝',
    rarrfs: '⤞',
    Map: '⤅',
    larrsim: '⥳',
    rarrsim: '⥴',
    harrcir: '⥈',
    Uarrocir: '⥉',
    lurdshar: '⥊',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    rdldhar: '⥩',
    lrhard: '⥭',
    uharr: '↾',
    uharl: '↿',
    dharr: '⇂',
    dharl: '⇃',
    Uarr: '↟',
    Darr: '↡',
    zigrarr: '⇝',
    nwArr: '⇖',
    neArr: '⇗',
    seArr: '⇘',
    swArr: '⇙',
    nharr: '↮',
    nhArr: '⇎',
    nlarr: '↚',
    nlArr: '⇍',
    nrArr: '⇏',
    larrb: '⇤',
    LeftArrowBar: '⇤',
    rarrb: '⇥',
    RightArrowBar: '⇥'
};
const SHAPES = {
    square: '□',
    Square: '□',
    squ: '□',
    squf: '▪',
    squarf: '▪',
    blacksquar: '▪',
    blacksquare: '▪',
    FilledVerySmallSquare: '▪',
    blk34: '▓',
    blk12: '▒',
    blk14: '░',
    block: '█',
    srect: '▭',
    rect: '▭',
    sdot: '⋅',
    sdotb: '⊡',
    dotsquare: '⊡',
    triangle: '▵',
    tri: '▵',
    trine: '▵',
    utri: '▵',
    triangledown: '▿',
    dtri: '▿',
    tridown: '▿',
    triangleleft: '◃',
    ltri: '◃',
    triangleright: '▹',
    rtri: '▹',
    blacktriangle: '▴',
    utrif: '▴',
    blacktriangledown: '▾',
    dtrif: '▾',
    blacktriangleleft: '◂',
    ltrif: '◂',
    blacktriangleright: '▸',
    rtrif: '▸',
    loz: '◊',
    lozenge: '◊',
    blacklozenge: '⧫',
    lozf: '⧫',
    bigcirc: '◯',
    xcirc: '◯',
    circ: 'ˆ',
    Circle: '○',
    cir: '○',
    o: '○',
    bullet: '•',
    bull: '•',
    hellip: '…',
    mldr: '…',
    nldr: '‥',
    boxh: '─',
    HorizontalLine: '─',
    boxv: '│',
    boxdr: '┌',
    boxdl: '┐',
    boxur: '└',
    boxul: '┘',
    boxvr: '├',
    boxvl: '┤',
    boxhd: '┬',
    boxhu: '┴',
    boxvh: '┼',
    boxH: '═',
    boxV: '║',
    boxdR: '╒',
    boxDr: '╓',
    boxDR: '╔',
    boxDl: '╕',
    boxdL: '╖',
    boxDL: '╗',
    boxuR: '╘',
    boxUr: '╙',
    boxUR: '╚',
    boxUl: '╜',
    boxuL: '╛',
    boxUL: '╝',
    boxvR: '╞',
    boxVr: '╟',
    boxVR: '╠',
    boxVl: '╢',
    boxvL: '╡',
    boxVL: '╣',
    boxHd: '╤',
    boxhD: '╥',
    boxHD: '╦',
    boxHu: '╧',
    boxhU: '╨',
    boxHU: '╩',
    boxvH: '╪',
    boxVh: '╫',
    boxVH: '╬'
};
const PUNCTUATION = {
    excl: '!',
    iexcl: '¡',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '\u00ad',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    nbsp: '\u00a0',
    comma: ',',
    period: '.',
    colon: ':',
    semi: ';',
    vert: '|',
    Verbar: '‖',
    verbar: '|',
    dblac: '˝',
    circ: 'ˆ',
    caron: 'ˇ',
    breve: '˘',
    dot: '˙',
    ring: '˚',
    ogon: '˛',
    tilde: '˜',
    DiacriticalGrave: '`',
    DiacriticalAcute: '´',
    DiacriticalTilde: '˜',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    grave: '`'
};
const CURRENCY = {
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    euro: '€',
    dollar: '$',
    fnof: 'ƒ',
    inr: '₹',
    af: '؋',
    birr: 'ብር',
    peso: '₱',
    rub: '₽',
    won: '₩',
    yuan: '¥',
    cedil: '¸'
};
const FRACTIONS = {
    frac12: '½',
    half: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄'
};
const MISC_SYMBOLS = {
    trade: '™',
    TRADE: '™',
    telrec: '⌕',
    target: '⌖',
    ulcorn: '⌜',
    ulcorner: '⌜',
    urcorn: '⌝',
    urcorner: '⌝',
    dlcorn: '⌞',
    llcorner: '⌞',
    drcorn: '⌟',
    lrcorner: '⌟',
    intercal: '⊺',
    intcal: '⊺',
    oplus: '⊕',
    CirclePlus: '⊕',
    ominus: '⊖',
    CircleMinus: '⊖',
    otimes: '⊗',
    CircleTimes: '⊗',
    osol: '⊘',
    odot: '⊙',
    CircleDot: '⊙',
    oast: '⊛',
    circledast: '⊛',
    odash: '⊝',
    circleddash: '⊝',
    ocirc: '⊚',
    circledcirc: '⊚',
    boxplus: '⊞',
    plusb: '⊞',
    boxminus: '⊟',
    minusb: '⊟',
    boxtimes: '⊠',
    timesb: '⊠',
    boxdot: '⊡',
    sdotb: '⊡',
    veebar: '⊻',
    vee: '∨',
    barvee: '⊽',
    and: '∧',
    wedge: '∧',
    Cap: '⋒',
    Cup: '⋓',
    Fork: '⋔',
    pitchfork: '⋔',
    epar: '⋕',
    ltlarr: '⥶',
    nvap: '≍⃒',
    nvsim: '∼⃒',
    nvge: '≥⃒',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvgt: '>⃒',
    nvltrie: '⊴⃒',
    nvrtrie: '⊵⃒',
    Vdash: '⊩',
    dashv: '⊣',
    vDash: '⊨',
    Vvdash: '⊪',
    nvdash: '⊬',
    nvDash: '⊭',
    nVdash: '⊮',
    nVDash: '⊯'
};
const ALL_ENTITIES = {
    ...BASIC_LATIN,
    ...LATIN_ACCENTS,
    ...LATIN_EXTENDED,
    ...GREEK,
    ...CYRILLIC,
    ...MATH,
    ...MATH_ADVANCED,
    ...ARROWS,
    ...SHAPES,
    ...PUNCTUATION,
    ...CURRENCY,
    ...FRACTIONS,
    ...MISC_SYMBOLS
};
const XML = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: "\""
};
const COMMON_HTML = {
    nbsp: '\u00a0',
    copy: '\u00a9',
    reg: '\u00ae',
    trade: '\u2122',
    mdash: '\u2014',
    ndash: '\u2013',
    hellip: '\u2026',
    laquo: '\u00ab',
    raquo: '\u00bb',
    lsquo: '\u2018',
    rsquo: '\u2019',
    ldquo: '\u201c',
    rdquo: '\u201d',
    bull: '\u2022',
    para: '\u00b6',
    sect: '\u00a7',
    deg: '\u00b0',
    frac12: '\u00bd',
    frac14: '\u00bc',
    frac34: '\u00be'
} // ---------------------------------------------------------------------------
 // Note: NUMERIC_ENTITIES (&#NNN; / &#xHH;) are handled by the scanner directly
 // via String.fromCodePoint() without any map lookup.
 // ---------------------------------------------------------------------------
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_ACTION",
    ()=>ENTITY_ACTION,
    "default",
    ()=>EntityDecoder
]);
// ---------------------------------------------------------------------------
// Built-in named entity map  (name → replacement string)
// No regex, no {regex,val} objects — just flat key/value pairs.
// ---------------------------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)");
;
const ENTITY_ACTION = Object.freeze({
    /** Resolve and expand the entity normally. */ ALLOW: 'allow',
    /** Silently skip this entity — it will not be registered. */ BLOCK: 'block',
    /** Throw an error, aborting entity registration entirely. */ THROW: 'throw'
});
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const SPECIAL_CHARS = new Set('!?\\\\/[]$%{}^&*()<>|+');
/**
 * Validate that an entity name contains no dangerous characters.
 * @param {string} name
 * @returns {string} the name, unchanged
 * @throws {Error} on invalid characters
 */ function validateEntityName(name) {
    if (name[0] === '#') {
        throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
    }
    for (const ch of name){
        if (SPECIAL_CHARS.has(ch)) {
            throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
        }
    }
    return name;
}
/**
 * Merge one or more entity maps into a flat name→string map.
 * Accepts either:
 *   - plain string values:             { amp: '&' }
 *   - legacy {regex,val} / {regx,val}: { lt: { regex: /.../, val: '<' } }
 *
 * Values containing '&' are skipped (recursive expansion risk).
 *
 * @param {...object} maps
 * @returns {Record<string, string>}
 */ function mergeEntityMaps(...maps) {
    const out = Object.create(null);
    for (const map of maps){
        if (!map) continue;
        for (const key of Object.keys(map)){
            const raw = map[key];
            if (typeof raw === 'string') {
                out[key] = raw;
            } else if (raw && typeof raw === 'object' && raw.val !== undefined) {
                // Legacy {regex,val} or {regx,val} — extract the string val only
                const val = raw.val;
                if (typeof val === 'string') {
                    out[key] = val;
                }
            // function vals are not supported in the scanner — skip
            }
        }
    }
    return out;
}
// ---------------------------------------------------------------------------
// applyLimitsTo helpers
// ---------------------------------------------------------------------------
const LIMIT_TIER_EXTERNAL = 'external'; // input/runtime + persistent external maps
const LIMIT_TIER_BASE = 'base'; // DEFAULT_XML_ENTITIES + namedEntities (system) maps
const LIMIT_TIER_ALL = 'all'; // every entity regardless of tier
/**
 * Resolve `applyLimitsTo` option into a normalised Set of tier strings.
 * Accepted values: 'external' | 'base' | 'all' | string[]
 * Default: 'external' (only untrusted injected entities are counted).
 * @param {string|string[]|undefined} raw
 * @returns {Set<string>}
 */ function parseLimitTiers(raw) {
    if (!raw || raw === LIMIT_TIER_EXTERNAL) return new Set([
        LIMIT_TIER_EXTERNAL
    ]);
    if (raw === LIMIT_TIER_ALL) return new Set([
        LIMIT_TIER_ALL
    ]);
    if (raw === LIMIT_TIER_BASE) return new Set([
        LIMIT_TIER_BASE
    ]);
    if (Array.isArray(raw)) return new Set(raw);
    return new Set([
        LIMIT_TIER_EXTERNAL
    ]); // safe default for unrecognised values
}
// ---------------------------------------------------------------------------
// NCR (Numeric Character Reference) classification
// ---------------------------------------------------------------------------
// Severity order — higher number = stricter action.
// Used to enforce minimum action levels for specific codepoint ranges.
const NCR_LEVEL = Object.freeze({
    allow: 0,
    leave: 1,
    remove: 2,
    throw: 3
});
// XML 1.0 §2.2: allowed chars are #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
// Restricted C0: U+0001–U+001F excluding U+0009, U+000A, U+000D
const XML10_ALLOWED_C0 = new Set([
    0x09,
    0x0A,
    0x0D
]);
/**
 * Parse the `ncr` constructor option into flat, hot-path-friendly fields.
 * @param {object|undefined} ncr
 * @returns {{ xmlVersion: number, onLevel: number, nullLevel: number }}
 */ function parseNCRConfig(ncr) {
    if (!ncr) {
        return {
            xmlVersion: 1.0,
            onLevel: NCR_LEVEL.allow,
            nullLevel: NCR_LEVEL.remove
        };
    }
    const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
    const onLevel = NCR_LEVEL[ncr.onNCR] ?? NCR_LEVEL.allow;
    const nullLevel = NCR_LEVEL[ncr.nullNCR] ?? NCR_LEVEL.remove;
    // 'allow' is not meaningful for null — clamp to at least 'remove'
    const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
    return {
        xmlVersion,
        onLevel,
        nullLevel: clampedNull
    };
}
class EntityDecoder {
    /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onExternalEntity=null]
   *   Hook called when an external entity is registered via `setExternalEntities()` or
   *   `addExternalEntity()`. Return `ENTITY_ACTION.ALLOW` to accept the entity,
   *   `ENTITY_ACTION.BLOCK` to silently skip it, or `ENTITY_ACTION.THROW` to abort with an error.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onInputEntity=null]
   *   Hook called when an input entity is registered via `addInputEntities()`. Return
   *   `ENTITY_ACTION.ALLOW` to accept, `ENTITY_ACTION.BLOCK` to silently skip, or
   *   `ENTITY_ACTION.THROW` to abort with an error.
   */ constructor(options = {}){
        this._limit = options.limit || {};
        this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
        this._maxExpandedLength = this._limit.maxExpandedLength || 0;
        this._postCheck = typeof options.postCheck === 'function' ? options.postCheck : (r)=>r;
        this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
        this._numericAllowed = options.numericAllowed ?? true;
        // Base map: DEFAULT_XML_ENTITIES + user-supplied extras. Immutable after construction.
        this._baseMap = mergeEntityMaps(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML"], options.namedEntities || null);
        // Persistent external entities — survive across documents.
        // Stored as a separate map so reset() never touches them.
        /** @type {Record<string, string>} */ this._externalMap = Object.create(null);
        // Input / runtime entities — current document only, wiped on reset().
        /** @type {Record<string, string>} */ this._inputMap = Object.create(null);
        // Per-document counters
        this._totalExpansions = 0;
        this._expandedLength = 0;
        // --- New: remove / leave sets ---
        /** @type {Set<string>} */ this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
        /** @type {Set<string>} */ this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
        // --- NCR config (parsed into flat fields for hot-path speed) ---
        const ncrCfg = parseNCRConfig(options.ncr);
        this._ncrXmlVersion = ncrCfg.xmlVersion;
        this._ncrOnLevel = ncrCfg.onLevel;
        this._ncrNullLevel = ncrCfg.nullLevel;
        // --- Registration hooks ---
        /** @type {((name: string, value: string) => 'allow'|'block'|'throw')|null} */ this._onExternalEntity = typeof options.onExternalEntity === 'function' ? options.onExternalEntity : null;
        /** @type {((name: string, value: string) => 'allow'|'block'|'throw')|null} */ this._onInputEntity = typeof options.onInputEntity === 'function' ? options.onInputEntity : null;
    }
    // -------------------------------------------------------------------------
    // Private: registration hook dispatch
    // -------------------------------------------------------------------------
    /**
   * Invoke a registration hook for a single entity name/value pair.
   * Returns true when the entity should be accepted, false when it should be
   * silently skipped (BLOCK), and throws when the hook returns THROW.
   *
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} hook
   * @param {string} name
   * @param {string} value
   * @param {string} context  — used in error messages ('external' | 'input')
   * @returns {boolean}  true = accept, false = skip
   */ _applyRegistrationHook(hook, name, value, context) {
        if (!hook) return true; // no hook → always accept
        const action = hook(name, value);
        if (action === ENTITY_ACTION.BLOCK) return false;
        if (action === ENTITY_ACTION.THROW) {
            throw new Error(`[EntityDecoder] Registration of ${context} entity "&${name};" was rejected by hook`);
        }
        return true; // ALLOW or any unknown return value → accept
    }
    // -------------------------------------------------------------------------
    // Persistent external entity registration
    // -------------------------------------------------------------------------
    /**
   * Replace the full set of persistent external entities.
   * All keys are validated — throws on invalid characters.
   * If `onExternalEntity` is set, it is called once per entry; entries that
   * return `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW`
   * aborts the whole call.
   * @param {Record<string, string | { regex?: RegExp, val: string }>} map
   */ setExternalEntities(map) {
        if (map) {
            for (const key of Object.keys(map)){
                validateEntityName(key);
            }
        }
        if (!this._onExternalEntity) {
            this._externalMap = mergeEntityMaps(map);
            return;
        }
        // Hook present — resolve values first, then filter
        const flat = mergeEntityMaps(map);
        const filtered = Object.create(null);
        for (const [name, value] of Object.entries(flat)){
            if (this._applyRegistrationHook(this._onExternalEntity, name, value, 'external')) {
                filtered[name] = value;
            }
        }
        this._externalMap = filtered;
    }
    /**
   * Add a single persistent external entity.
   * If `onExternalEntity` is set it is called before the entity is stored;
   * `ENTITY_ACTION.BLOCK` silently skips storage, `ENTITY_ACTION.THROW` raises.
   * @param {string} key
   * @param {string} value
   */ addExternalEntity(key, value) {
        validateEntityName(key);
        if (typeof value === 'string' && value.indexOf('&') === -1) {
            if (this._applyRegistrationHook(this._onExternalEntity, key, value, 'external')) {
                this._externalMap[key] = value;
            }
        }
    }
    // -------------------------------------------------------------------------
    // Input / runtime entity registration (per document)
    // -------------------------------------------------------------------------
    /**
   * Inject DOCTYPE entities for the current document.
   * Also resets per-document expansion counters.
   * If `onInputEntity` is set it is called once per entry; entries returning
   * `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW` aborts.
   * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
   */ addInputEntities(map) {
        this._totalExpansions = 0;
        this._expandedLength = 0;
        if (!this._onInputEntity) {
            this._inputMap = mergeEntityMaps(map);
            return;
        }
        const flat = mergeEntityMaps(map);
        const filtered = Object.create(null);
        for (const [name, value] of Object.entries(flat)){
            if (this._applyRegistrationHook(this._onInputEntity, name, value, 'input')) {
                filtered[name] = value;
            }
        }
        this._inputMap = filtered;
    }
    // -------------------------------------------------------------------------
    // Per-document reset
    // -------------------------------------------------------------------------
    /**
   * Wipe input/runtime entities and reset counters.
   * Call this before processing each new document.
   * @returns {this}
   */ reset() {
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        return this;
    }
    // -------------------------------------------------------------------------
    // XML version (can be set after construction, e.g. once parser reads <?xml?>)
    // -------------------------------------------------------------------------
    /**
   * Update the XML version used for NCR classification.
   * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
   * @param {1.0|1.1|number} version
   */ setXmlVersion(version) {
        this._ncrXmlVersion = version === 1.1 ? 1.1 : 1.0;
    }
    // -------------------------------------------------------------------------
    // Primary API
    // -------------------------------------------------------------------------
    /**
   * Replace all entity references in `str` in a single pass.
   *
   * @param {string} str
   * @returns {string}
   */ decode(str) {
        if (typeof str !== 'string' || str.length === 0) return str;
        //TODO: check if needed
        if (str.indexOf('&') === -1) return str; // fast path — no entities at all
        const original = str;
        const chunks = [];
        const len = str.length;
        let last = 0; // start of next unprocessed literal chunk
        let i = 0;
        const limitExpansions = this._maxTotalExpansions > 0;
        const limitLength = this._maxExpandedLength > 0;
        const checkLimits = limitExpansions || limitLength;
        while(i < len){
            // Scan forward to next '&'
            if (str.charCodeAt(i) !== 38 /* '&' */ ) {
                i++;
                continue;
            }
            // --- Found '&' at position i ---
            // Scan forward to ';'
            let j = i + 1;
            while(j < len && str.charCodeAt(j) !== 59 /* ';' */  && j - i <= 32)j++;
            if (j >= len || str.charCodeAt(j) !== 59) {
                // No closing ';' within window — treat '&' as literal
                i++;
                continue;
            }
            // Raw token between '&' and ';' (exclusive)
            const token = str.slice(i + 1, j);
            if (token.length === 0) {
                i++;
                continue;
            }
            let replacement;
            let tier; // which limit tier this entity belongs to
            if (this._removeSet.has(token)) {
                // Remove entity: replace with empty string
                replacement = '';
                // If entity was unknown (replacement undefined), we still need a tier for limits.
                // Treat as external tier because it's user-directed removal of an unknown reference.
                if (tier === undefined) {
                    tier = LIMIT_TIER_EXTERNAL;
                }
            } else if (this._leaveSet.has(token)) {
                // Do not replace — keep original &token; as literal
                i++;
                continue;
            } else if (token.charCodeAt(0) === 35 /* '#' */ ) {
                // ---- Numeric / NCR reference ----
                // NCR classification always runs first — prohibited codepoints must be
                // caught regardless of numericAllowed.
                const ncrResult = this._resolveNCR(token);
                if (ncrResult === undefined) {
                    // 'leave' action — keep original &token; as-is
                    i++;
                    continue;
                }
                replacement = ncrResult; // '' for remove, char string for allow
                tier = LIMIT_TIER_BASE;
            } else {
                // ---- Named reference ----
                const resolved = this._resolveName(token);
                replacement = resolved?.value;
                tier = resolved?.tier;
            }
            if (replacement === undefined) {
                // Unknown entity — leave as-is, advance past '&' only
                i++;
                continue;
            }
            // Flush literal chunk before this entity
            if (i > last) chunks.push(str.slice(last, i));
            chunks.push(replacement);
            last = j + 1; // skip past ';'
            i = last;
            // Apply expansion limits only if this tier is being tracked
            if (checkLimits && this._tierCounts(tier)) {
                if (limitExpansions) {
                    this._totalExpansions++;
                    if (this._totalExpansions > this._maxTotalExpansions) {
                        throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ` + `${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    }
                }
                if (limitLength) {
                    // delta: replacement.length minus the raw &token; length (token.length + 2 for '&' and ';')
                    const delta = replacement.length - (token.length + 2);
                    if (delta > 0) {
                        this._expandedLength += delta;
                        if (this._expandedLength > this._maxExpandedLength) {
                            throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ` + `${this._expandedLength} > ${this._maxExpandedLength}`);
                        }
                    }
                }
            }
        }
        // Flush trailing literal
        if (last < len) chunks.push(str.slice(last));
        // If nothing was replaced, chunks is empty — return original
        const result = chunks.length === 0 ? str : chunks.join('');
        return this._postCheck(result, original);
    }
    // -------------------------------------------------------------------------
    // Private: limit tier check
    // -------------------------------------------------------------------------
    /**
   * Returns true if a resolved entity of the given tier should count
   * against the expansion/length limits.
   * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
   * @returns {boolean}
   */ _tierCounts(tier) {
        if (this._limitTiers.has(LIMIT_TIER_ALL)) return true;
        return this._limitTiers.has(tier);
    }
    // -------------------------------------------------------------------------
    // Private: entity resolution
    // -------------------------------------------------------------------------
    /**
   * Resolve a named entity token (without & and ;).
   * Priority: inputMap > externalMap > baseMap
   * Returns the resolved value tagged with its limit tier.
   *
   * @param {string} name
   * @returns {{ value: string, tier: string }|undefined}
   */ _resolveName(name) {
        // input and external both count as 'external' tier for limit purposes —
        // they are injected at runtime and are the untrusted surface.
        if (name in this._inputMap) return {
            value: this._inputMap[name],
            tier: LIMIT_TIER_EXTERNAL
        };
        if (name in this._externalMap) return {
            value: this._externalMap[name],
            tier: LIMIT_TIER_EXTERNAL
        };
        if (name in this._baseMap) return {
            value: this._baseMap[name],
            tier: LIMIT_TIER_BASE
        };
        return undefined;
    }
    /**
   * Classify a codepoint and return the minimum action level that must be applied.
   * Returns -1 when no minimum is imposed (normal allow path).
   *
   * Ranges checked (in priority order):
   *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
   *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
   *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
   *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
   *
   * @param {number} cp  — codepoint
   * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
   */ _classifyNCR(cp) {
        // 1. Null
        if (cp === 0) return this._ncrNullLevel;
        // 2. Surrogates — always prohibited, minimum 'remove'
        if (cp >= 0xD800 && cp <= 0xDFFF) return NCR_LEVEL.remove;
        // 3. XML 1.0 restricted C0 controls
        if (this._ncrXmlVersion === 1.0) {
            if (cp >= 0x01 && cp <= 0x1F && !XML10_ALLOWED_C0.has(cp)) return NCR_LEVEL.remove;
        }
        return -1; // no restriction
    }
    /**
   * Execute a resolved NCR action.
   *
   * @param {number} action   — NCR_LEVEL value
   * @param {string} token    — raw token (e.g. '#38') for error messages
   * @param {number} cp       — codepoint, used only for error messages
   * @returns {string|undefined}
   *   - decoded character string  → 'allow'
   *   - ''                        → 'remove'
   *   - undefined                 → 'leave' (caller must skip past '&' only)
   *   - throws Error              → 'throw'
   */ _applyNCRAction(action, token, cp) {
        switch(action){
            case NCR_LEVEL.allow:
                return String.fromCodePoint(cp);
            case NCR_LEVEL.remove:
                return '';
            case NCR_LEVEL.leave:
                return undefined; // signal: keep literal
            case NCR_LEVEL.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference ` + `&${token}; (U+${cp.toString(16).toUpperCase().padStart(4, '0')})`);
            default:
                return String.fromCodePoint(cp);
        }
    }
    /**
   * Full NCR resolution pipeline for a numeric token.
   *
   * Steps:
   *   1. Parse the codepoint (decimal or hex).
   *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
   *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
   *   4. Classify the codepoint to find the minimum required action level.
   *   5. Resolve effective action = max(onNCR, minimum).
   *   6. Apply and return.
   *
   * @param {string} token  — e.g. '#38', '#x26', '#X26'
   * @returns {string|undefined}
   *   - string (incl. '')  — replacement ('' = remove)
   *   - undefined          — leave original &token; as-is
   */ _resolveNCR(token) {
        // Step 1: parse codepoint
        const second = token.charCodeAt(1);
        let cp;
        if (second === 120 /* x */  || second === 88 /* X */ ) {
            cp = parseInt(token.slice(2), 16);
        } else {
            cp = parseInt(token.slice(1), 10);
        }
        // Step 2: out-of-range → leave as-is unconditionally
        if (Number.isNaN(cp) || cp < 0 || cp > 0x10FFFF) return undefined;
        // Step 3: classify to get minimum action level
        const minimum = this._classifyNCR(cp);
        // Step 4: if numericAllowed is false and no hard minimum → leave
        if (!this._numericAllowed && minimum < NCR_LEVEL.remove) return undefined;
        // Step 5: effective action = max(configured onNCR, range minimum)
        const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
        // Step 6: apply
        return this._applyNCRAction(effective, token, cp);
    }
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript) <export default as EntityDecoder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityDecoder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript)");
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-xml/dist/esm/xml.common.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Default key used to access the XML attributes.
 */ __turbopack_context__.s([
    "XML_ATTRKEY",
    ()=>XML_ATTRKEY,
    "XML_CHARKEY",
    ()=>XML_CHARKEY
]);
const XML_ATTRKEY = "$";
const XML_CHARKEY = "_";
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-xml/dist/esm/xml.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseXML",
    ()=>parseXML,
    "stringifyXML",
    ()=>stringifyXML
]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlbuilder$2f$json2xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__XMLBuilder$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js [app-route] (ecmascript) <locals> <export default as XMLBuilder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$fxp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/fast-xml-parser/src/fxp.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$xml$2f$dist$2f$esm$2f$xml$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-xml/dist/esm/xml.common.js [app-route] (ecmascript)");
;
;
function getCommonOptions(options) {
    return {
        attributesGroupName: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$xml$2f$dist$2f$esm$2f$xml$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML_ATTRKEY"],
        textNodeName: options.xmlCharKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$xml$2f$dist$2f$esm$2f$xml$2e$common$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML_CHARKEY"],
        ignoreAttributes: false,
        suppressBooleanAttributes: false
    };
}
function getSerializerOptions(options = {}) {
    return {
        ...getCommonOptions(options),
        attributeNamePrefix: "@_",
        format: true,
        suppressEmptyNode: true,
        indentBy: "",
        rootNodeName: options.rootName ?? "root",
        cdataPropName: options.cdataPropName ?? "__cdata"
    };
}
function getParserOptions(options = {}) {
    return {
        ...getCommonOptions(options),
        parseAttributeValue: false,
        parseTagValue: false,
        attributeNamePrefix: "",
        stopNodes: options.stopNodes,
        processEntities: true,
        trimValues: false
    };
}
function stringifyXML(obj, opts = {}) {
    const parserOptions = getSerializerOptions(opts);
    const j2x = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlbuilder$2f$json2xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__XMLBuilder$3e$__["XMLBuilder"](parserOptions);
    const node = {
        [parserOptions.rootNodeName]: obj
    };
    const xmlData = j2x.build(node);
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>${xmlData}`.replace(/\n/g, "");
}
async function parseXML(str, opts = {}) {
    if (!str) {
        throw new Error("Document is empty");
    }
    const validation = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$fxp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XMLValidator"].validate(str);
    if (validation !== true) {
        throw validation;
    }
    const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__["XMLParser"](getParserOptions(opts));
    const parsedXml = parser.parse(str);
    // Remove the <?xml version="..." ?> node.
    // This is a change in behavior on fxp v4. Issue #424
    if (parsedXml["?xml"]) {
        delete parsedXml["?xml"];
    }
    if (!opts.includeRoot) {
        for (const key of Object.keys(parsedXml)){
            const value = parsedXml[key];
            return typeof value === "object" ? {
                ...value
            } : value;
        }
    }
    return parsedXml;
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-xml/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f40$azure$2f$core$2d$xml$2f$dist$2f$esm$2f$xml$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/@azure/core-xml/dist/esm/xml.js [app-route] (ecmascript)");
;
;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
const rnds8 = new Uint8Array(16);
function rng() {
    return crypto.getRandomValues(rnds8);
}
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/validate.js [app-route] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/stringify.js [app-route] (ecmascript)");
;
;
function v4(options, buf, offset) {
    if (!buf && !options && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Emerging_Trends$2f$feedback$2d$app$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Emerging_Trends/feedback-app/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=1-d-_117tzfe._.js.map