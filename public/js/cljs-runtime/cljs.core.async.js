goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14882 = (function (f,blockable,meta14883){
this.f = f;
this.blockable = blockable;
this.meta14883 = meta14883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14884,meta14883__$1){
var self__ = this;
var _14884__$1 = this;
return (new cljs.core.async.t_cljs$core$async14882(self__.f,self__.blockable,meta14883__$1));
}));

(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14884){
var self__ = this;
var _14884__$1 = this;
return self__.meta14883;
}));

(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14883","meta14883",-1885646254,null)], null);
}));

(cljs.core.async.t_cljs$core$async14882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14882");

(cljs.core.async.t_cljs$core$async14882.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14882.
 */
cljs.core.async.__GT_t_cljs$core$async14882 = (function cljs$core$async$__GT_t_cljs$core$async14882(f,blockable,meta14883){
return (new cljs.core.async.t_cljs$core$async14882(f,blockable,meta14883));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14881 = arguments.length;
switch (G__14881) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14882(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14920 = arguments.length;
switch (G__14920) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14928 = arguments.length;
switch (G__14928) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14940 = arguments.length;
switch (G__14940) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18545 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18545) : fn1.call(null, val_18545));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18545) : fn1.call(null, val_18545));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14958 = arguments.length;
switch (G__14958) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18550 = n;
var x_18551 = (0);
while(true){
if((x_18551 < n__5593__auto___18550)){
(a[x_18551] = x_18551);

var G__18552 = (x_18551 + (1));
x_18551 = G__18552;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14978 = (function (flag,meta14979){
this.flag = flag;
this.meta14979 = meta14979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14980,meta14979__$1){
var self__ = this;
var _14980__$1 = this;
return (new cljs.core.async.t_cljs$core$async14978(self__.flag,meta14979__$1));
}));

(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14980){
var self__ = this;
var _14980__$1 = this;
return self__.meta14979;
}));

(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14979","meta14979",-237379932,null)], null);
}));

(cljs.core.async.t_cljs$core$async14978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14978");

(cljs.core.async.t_cljs$core$async14978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14978.
 */
cljs.core.async.__GT_t_cljs$core$async14978 = (function cljs$core$async$__GT_t_cljs$core$async14978(flag,meta14979){
return (new cljs.core.async.t_cljs$core$async14978(flag,meta14979));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14978(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15004 = (function (flag,cb,meta15005){
this.flag = flag;
this.cb = cb;
this.meta15005 = meta15005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15006,meta15005__$1){
var self__ = this;
var _15006__$1 = this;
return (new cljs.core.async.t_cljs$core$async15004(self__.flag,self__.cb,meta15005__$1));
}));

(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15006){
var self__ = this;
var _15006__$1 = this;
return self__.meta15005;
}));

(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15005","meta15005",1229891335,null)], null);
}));

(cljs.core.async.t_cljs$core$async15004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15004");

(cljs.core.async.t_cljs$core$async15004.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15004.
 */
cljs.core.async.__GT_t_cljs$core$async15004 = (function cljs$core$async$__GT_t_cljs$core$async15004(flag,cb,meta15005){
return (new cljs.core.async.t_cljs$core$async15004(flag,cb,meta15005));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15004(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15012_SHARP_){
var G__15016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15012_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15016) : fret.call(null, G__15016));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15014_SHARP_){
var G__15017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15014_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15017) : fret.call(null, G__15017));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18565 = (i + (1));
i = G__18565;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18566 = arguments.length;
var i__5727__auto___18567 = (0);
while(true){
if((i__5727__auto___18567 < len__5726__auto___18566)){
args__5732__auto__.push((arguments[i__5727__auto___18567]));

var G__18568 = (i__5727__auto___18567 + (1));
i__5727__auto___18567 = G__18568;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15044){
var map__15045 = p__15044;
var map__15045__$1 = cljs.core.__destructure_map(map__15045);
var opts = map__15045__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15036){
var G__15037 = cljs.core.first(seq15036);
var seq15036__$1 = cljs.core.next(seq15036);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15037,seq15036__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15065 = arguments.length;
switch (G__15065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14744__auto___18575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_15140){
var state_val_15141 = (state_15140[(1)]);
if((state_val_15141 === (7))){
var inst_15129 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15152_18576 = state_15140__$1;
(statearr_15152_18576[(2)] = inst_15129);

(statearr_15152_18576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (1))){
var state_15140__$1 = state_15140;
var statearr_15159_18578 = state_15140__$1;
(statearr_15159_18578[(2)] = null);

(statearr_15159_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (4))){
var inst_15107 = (state_15140[(7)]);
var inst_15107__$1 = (state_15140[(2)]);
var inst_15109 = (inst_15107__$1 == null);
var state_15140__$1 = (function (){var statearr_15162 = state_15140;
(statearr_15162[(7)] = inst_15107__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15109)){
var statearr_15163_18579 = state_15140__$1;
(statearr_15163_18579[(1)] = (5));

} else {
var statearr_15164_18580 = state_15140__$1;
(statearr_15164_18580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (13))){
var state_15140__$1 = state_15140;
var statearr_15166_18581 = state_15140__$1;
(statearr_15166_18581[(2)] = null);

(statearr_15166_18581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (6))){
var inst_15107 = (state_15140[(7)]);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15140__$1,(11),to,inst_15107);
} else {
if((state_val_15141 === (3))){
var inst_15137 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15140__$1,inst_15137);
} else {
if((state_val_15141 === (12))){
var state_15140__$1 = state_15140;
var statearr_15178_18583 = state_15140__$1;
(statearr_15178_18583[(2)] = null);

(statearr_15178_18583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (2))){
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15140__$1,(4),from);
} else {
if((state_val_15141 === (11))){
var inst_15121 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
if(cljs.core.truth_(inst_15121)){
var statearr_15183_18584 = state_15140__$1;
(statearr_15183_18584[(1)] = (12));

} else {
var statearr_15185_18585 = state_15140__$1;
(statearr_15185_18585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (9))){
var state_15140__$1 = state_15140;
var statearr_15187_18586 = state_15140__$1;
(statearr_15187_18586[(2)] = null);

(statearr_15187_18586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (5))){
var state_15140__$1 = state_15140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15189_18591 = state_15140__$1;
(statearr_15189_18591[(1)] = (8));

} else {
var statearr_15190_18592 = state_15140__$1;
(statearr_15190_18592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (14))){
var inst_15127 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15191_18593 = state_15140__$1;
(statearr_15191_18593[(2)] = inst_15127);

(statearr_15191_18593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (10))){
var inst_15118 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15195_18594 = state_15140__$1;
(statearr_15195_18594[(2)] = inst_15118);

(statearr_15195_18594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (8))){
var inst_15115 = cljs.core.async.close_BANG_(to);
var state_15140__$1 = state_15140;
var statearr_15196_18595 = state_15140__$1;
(statearr_15196_18595[(2)] = inst_15115);

(statearr_15196_18595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null,null];
(statearr_15197[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_15140){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15140);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15198){var ex__13572__auto__ = e15198;
var statearr_15199_18600 = state_15140;
(statearr_15199_18600[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15140[(4)]))){
var statearr_15200_18601 = state_15140;
(statearr_15200_18601[(1)] = cljs.core.first((state_15140[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18602 = state_15140;
state_15140 = G__18602;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_15140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_15140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_15202 = f__14745__auto__();
(statearr_15202[(6)] = c__14744__auto___18575);

return statearr_15202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15205){
var vec__15207 = p__15205;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15207,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15207,(1),null);
var job = vec__15207;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14744__auto___18608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_15216){
var state_val_15217 = (state_15216[(1)]);
if((state_val_15217 === (1))){
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15216__$1,(2),res,v);
} else {
if((state_val_15217 === (2))){
var inst_15213 = (state_15216[(2)]);
var inst_15214 = cljs.core.async.close_BANG_(res);
var state_15216__$1 = (function (){var statearr_15227 = state_15216;
(statearr_15227[(7)] = inst_15213);

return statearr_15227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15216__$1,inst_15214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_15229 = [null,null,null,null,null,null,null,null];
(statearr_15229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__);

(statearr_15229[(1)] = (1));

return statearr_15229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1 = (function (state_15216){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15216);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15231){var ex__13572__auto__ = e15231;
var statearr_15232_18611 = state_15216;
(statearr_15232_18611[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15216[(4)]))){
var statearr_15233_18612 = state_15216;
(statearr_15233_18612[(1)] = cljs.core.first((state_15216[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18614 = state_15216;
state_15216 = G__18614;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = function(state_15216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1.call(this,state_15216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_15236 = f__14745__auto__();
(statearr_15236[(6)] = c__14744__auto___18608);

return statearr_15236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15240){
var vec__15241 = p__15240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(1),null);
var job = vec__15241;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18619 = n;
var __18620 = (0);
while(true){
if((__18620 < n__5593__auto___18619)){
var G__15248_18621 = type;
var G__15248_18622__$1 = (((G__15248_18621 instanceof cljs.core.Keyword))?G__15248_18621.fqn:null);
switch (G__15248_18622__$1) {
case "compute":
var c__14744__auto___18624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18620,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = ((function (__18620,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function (state_15262){
var state_val_15265 = (state_15262[(1)]);
if((state_val_15265 === (1))){
var state_15262__$1 = state_15262;
var statearr_15280_18626 = state_15262__$1;
(statearr_15280_18626[(2)] = null);

(statearr_15280_18626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (2))){
var state_15262__$1 = state_15262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15262__$1,(4),jobs);
} else {
if((state_val_15265 === (3))){
var inst_15260 = (state_15262[(2)]);
var state_15262__$1 = state_15262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15262__$1,inst_15260);
} else {
if((state_val_15265 === (4))){
var inst_15252 = (state_15262[(2)]);
var inst_15253 = process__$1(inst_15252);
var state_15262__$1 = state_15262;
if(cljs.core.truth_(inst_15253)){
var statearr_15287_18627 = state_15262__$1;
(statearr_15287_18627[(1)] = (5));

} else {
var statearr_15288_18628 = state_15262__$1;
(statearr_15288_18628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (5))){
var state_15262__$1 = state_15262;
var statearr_15290_18629 = state_15262__$1;
(statearr_15290_18629[(2)] = null);

(statearr_15290_18629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (6))){
var state_15262__$1 = state_15262;
var statearr_15291_18630 = state_15262__$1;
(statearr_15291_18630[(2)] = null);

(statearr_15291_18630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (7))){
var inst_15258 = (state_15262[(2)]);
var state_15262__$1 = state_15262;
var statearr_15296_18631 = state_15262__$1;
(statearr_15296_18631[(2)] = inst_15258);

(statearr_15296_18631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18620,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
;
return ((function (__18620,switch__13567__auto__,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_15310 = [null,null,null,null,null,null,null];
(statearr_15310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__);

(statearr_15310[(1)] = (1));

return statearr_15310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1 = (function (state_15262){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15262);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15315){var ex__13572__auto__ = e15315;
var statearr_15316_18634 = state_15262;
(statearr_15316_18634[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15262[(4)]))){
var statearr_15321_18639 = state_15262;
(statearr_15321_18639[(1)] = cljs.core.first((state_15262[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18640 = state_15262;
state_15262 = G__18640;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = function(state_15262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1.call(this,state_15262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__;
})()
;})(__18620,switch__13567__auto__,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
})();
var state__14746__auto__ = (function (){var statearr_15329 = f__14745__auto__();
(statearr_15329[(6)] = c__14744__auto___18624);

return statearr_15329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
});})(__18620,c__14744__auto___18624,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
);


break;
case "async":
var c__14744__auto___18642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18620,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = ((function (__18620,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function (state_15343){
var state_val_15344 = (state_15343[(1)]);
if((state_val_15344 === (1))){
var state_15343__$1 = state_15343;
var statearr_15349_18644 = state_15343__$1;
(statearr_15349_18644[(2)] = null);

(statearr_15349_18644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15344 === (2))){
var state_15343__$1 = state_15343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15343__$1,(4),jobs);
} else {
if((state_val_15344 === (3))){
var inst_15341 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15343__$1,inst_15341);
} else {
if((state_val_15344 === (4))){
var inst_15333 = (state_15343[(2)]);
var inst_15334 = async(inst_15333);
var state_15343__$1 = state_15343;
if(cljs.core.truth_(inst_15334)){
var statearr_15350_18652 = state_15343__$1;
(statearr_15350_18652[(1)] = (5));

} else {
var statearr_15351_18653 = state_15343__$1;
(statearr_15351_18653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15344 === (5))){
var state_15343__$1 = state_15343;
var statearr_15353_18654 = state_15343__$1;
(statearr_15353_18654[(2)] = null);

(statearr_15353_18654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15344 === (6))){
var state_15343__$1 = state_15343;
var statearr_15354_18655 = state_15343__$1;
(statearr_15354_18655[(2)] = null);

(statearr_15354_18655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15344 === (7))){
var inst_15339 = (state_15343[(2)]);
var state_15343__$1 = state_15343;
var statearr_15355_18662 = state_15343__$1;
(statearr_15355_18662[(2)] = inst_15339);

(statearr_15355_18662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18620,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
;
return ((function (__18620,switch__13567__auto__,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_15357 = [null,null,null,null,null,null,null];
(statearr_15357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__);

(statearr_15357[(1)] = (1));

return statearr_15357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1 = (function (state_15343){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15343);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15359){var ex__13572__auto__ = e15359;
var statearr_15360_18665 = state_15343;
(statearr_15360_18665[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15343[(4)]))){
var statearr_15362_18666 = state_15343;
(statearr_15362_18666[(1)] = cljs.core.first((state_15343[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18667 = state_15343;
state_15343 = G__18667;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = function(state_15343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1.call(this,state_15343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__;
})()
;})(__18620,switch__13567__auto__,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
})();
var state__14746__auto__ = (function (){var statearr_15376 = f__14745__auto__();
(statearr_15376[(6)] = c__14744__auto___18642);

return statearr_15376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
});})(__18620,c__14744__auto___18642,G__15248_18621,G__15248_18622__$1,n__5593__auto___18619,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15248_18622__$1)].join('')));

}

var G__18668 = (__18620 + (1));
__18620 = G__18668;
continue;
} else {
}
break;
}

var c__14744__auto___18669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_15470){
var state_val_15471 = (state_15470[(1)]);
if((state_val_15471 === (7))){
var inst_15453 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15493_18670 = state_15470__$1;
(statearr_15493_18670[(2)] = inst_15453);

(statearr_15493_18670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (1))){
var state_15470__$1 = state_15470;
var statearr_15495_18675 = state_15470__$1;
(statearr_15495_18675[(2)] = null);

(statearr_15495_18675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (4))){
var inst_15409 = (state_15470[(7)]);
var inst_15409__$1 = (state_15470[(2)]);
var inst_15411 = (inst_15409__$1 == null);
var state_15470__$1 = (function (){var statearr_15501 = state_15470;
(statearr_15501[(7)] = inst_15409__$1);

return statearr_15501;
})();
if(cljs.core.truth_(inst_15411)){
var statearr_15504_18688 = state_15470__$1;
(statearr_15504_18688[(1)] = (5));

} else {
var statearr_15505_18689 = state_15470__$1;
(statearr_15505_18689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (6))){
var inst_15409 = (state_15470[(7)]);
var inst_15420 = (state_15470[(8)]);
var inst_15420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15438 = [inst_15409,inst_15420__$1];
var inst_15440 = (new cljs.core.PersistentVector(null,2,(5),inst_15428,inst_15438,null));
var state_15470__$1 = (function (){var statearr_15507 = state_15470;
(statearr_15507[(8)] = inst_15420__$1);

return statearr_15507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15470__$1,(8),jobs,inst_15440);
} else {
if((state_val_15471 === (3))){
var inst_15459 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15470__$1,inst_15459);
} else {
if((state_val_15471 === (2))){
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15470__$1,(4),from);
} else {
if((state_val_15471 === (9))){
var inst_15449 = (state_15470[(2)]);
var state_15470__$1 = (function (){var statearr_15515 = state_15470;
(statearr_15515[(9)] = inst_15449);

return statearr_15515;
})();
var statearr_15516_18693 = state_15470__$1;
(statearr_15516_18693[(2)] = null);

(statearr_15516_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (5))){
var inst_15414 = cljs.core.async.close_BANG_(jobs);
var state_15470__$1 = state_15470;
var statearr_15520_18694 = state_15470__$1;
(statearr_15520_18694[(2)] = inst_15414);

(statearr_15520_18694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15471 === (8))){
var inst_15420 = (state_15470[(8)]);
var inst_15442 = (state_15470[(2)]);
var state_15470__$1 = (function (){var statearr_15528 = state_15470;
(statearr_15528[(10)] = inst_15442);

return statearr_15528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15470__$1,(9),results,inst_15420);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_15536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__);

(statearr_15536[(1)] = (1));

return statearr_15536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1 = (function (state_15470){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15470);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15548){var ex__13572__auto__ = e15548;
var statearr_15550_18697 = state_15470;
(statearr_15550_18697[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15470[(4)]))){
var statearr_15558_18698 = state_15470;
(statearr_15558_18698[(1)] = cljs.core.first((state_15470[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18699 = state_15470;
state_15470 = G__18699;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = function(state_15470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1.call(this,state_15470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_15571 = f__14745__auto__();
(statearr_15571[(6)] = c__14744__auto___18669);

return statearr_15571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


var c__14744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_15640){
var state_val_15641 = (state_15640[(1)]);
if((state_val_15641 === (7))){
var inst_15634 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15659_18705 = state_15640__$1;
(statearr_15659_18705[(2)] = inst_15634);

(statearr_15659_18705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (20))){
var state_15640__$1 = state_15640;
var statearr_15660_18706 = state_15640__$1;
(statearr_15660_18706[(2)] = null);

(statearr_15660_18706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (1))){
var state_15640__$1 = state_15640;
var statearr_15663_18707 = state_15640__$1;
(statearr_15663_18707[(2)] = null);

(statearr_15663_18707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (4))){
var inst_15593 = (state_15640[(7)]);
var inst_15593__$1 = (state_15640[(2)]);
var inst_15595 = (inst_15593__$1 == null);
var state_15640__$1 = (function (){var statearr_15668 = state_15640;
(statearr_15668[(7)] = inst_15593__$1);

return statearr_15668;
})();
if(cljs.core.truth_(inst_15595)){
var statearr_15669_18709 = state_15640__$1;
(statearr_15669_18709[(1)] = (5));

} else {
var statearr_15672_18714 = state_15640__$1;
(statearr_15672_18714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (15))){
var inst_15611 = (state_15640[(8)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15640__$1,(18),to,inst_15611);
} else {
if((state_val_15641 === (21))){
var inst_15629 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15678_18719 = state_15640__$1;
(statearr_15678_18719[(2)] = inst_15629);

(statearr_15678_18719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (13))){
var inst_15631 = (state_15640[(2)]);
var state_15640__$1 = (function (){var statearr_15681 = state_15640;
(statearr_15681[(9)] = inst_15631);

return statearr_15681;
})();
var statearr_15682_18721 = state_15640__$1;
(statearr_15682_18721[(2)] = null);

(statearr_15682_18721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (6))){
var inst_15593 = (state_15640[(7)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15640__$1,(11),inst_15593);
} else {
if((state_val_15641 === (17))){
var inst_15624 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
if(cljs.core.truth_(inst_15624)){
var statearr_15689_18722 = state_15640__$1;
(statearr_15689_18722[(1)] = (19));

} else {
var statearr_15690_18723 = state_15640__$1;
(statearr_15690_18723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (3))){
var inst_15636 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15640__$1,inst_15636);
} else {
if((state_val_15641 === (12))){
var inst_15604 = (state_15640[(10)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15640__$1,(14),inst_15604);
} else {
if((state_val_15641 === (2))){
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15640__$1,(4),results);
} else {
if((state_val_15641 === (19))){
var state_15640__$1 = state_15640;
var statearr_15700_18725 = state_15640__$1;
(statearr_15700_18725[(2)] = null);

(statearr_15700_18725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (11))){
var inst_15604 = (state_15640[(2)]);
var state_15640__$1 = (function (){var statearr_15703 = state_15640;
(statearr_15703[(10)] = inst_15604);

return statearr_15703;
})();
var statearr_15705_18730 = state_15640__$1;
(statearr_15705_18730[(2)] = null);

(statearr_15705_18730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (9))){
var state_15640__$1 = state_15640;
var statearr_15707_18731 = state_15640__$1;
(statearr_15707_18731[(2)] = null);

(statearr_15707_18731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (5))){
var state_15640__$1 = state_15640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15710_18733 = state_15640__$1;
(statearr_15710_18733[(1)] = (8));

} else {
var statearr_15712_18734 = state_15640__$1;
(statearr_15712_18734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (14))){
var inst_15614 = (state_15640[(11)]);
var inst_15611 = (state_15640[(8)]);
var inst_15611__$1 = (state_15640[(2)]);
var inst_15613 = (inst_15611__$1 == null);
var inst_15614__$1 = cljs.core.not(inst_15613);
var state_15640__$1 = (function (){var statearr_15715 = state_15640;
(statearr_15715[(11)] = inst_15614__$1);

(statearr_15715[(8)] = inst_15611__$1);

return statearr_15715;
})();
if(inst_15614__$1){
var statearr_15719_18735 = state_15640__$1;
(statearr_15719_18735[(1)] = (15));

} else {
var statearr_15722_18740 = state_15640__$1;
(statearr_15722_18740[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (16))){
var inst_15614 = (state_15640[(11)]);
var state_15640__$1 = state_15640;
var statearr_15723_18741 = state_15640__$1;
(statearr_15723_18741[(2)] = inst_15614);

(statearr_15723_18741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (10))){
var inst_15601 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15731_18742 = state_15640__$1;
(statearr_15731_18742[(2)] = inst_15601);

(statearr_15731_18742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (18))){
var inst_15620 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15734_18744 = state_15640__$1;
(statearr_15734_18744[(2)] = inst_15620);

(statearr_15734_18744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (8))){
var inst_15598 = cljs.core.async.close_BANG_(to);
var state_15640__$1 = state_15640;
var statearr_15736_18748 = state_15640__$1;
(statearr_15736_18748[(2)] = inst_15598);

(statearr_15736_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_15741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__);

(statearr_15741[(1)] = (1));

return statearr_15741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1 = (function (state_15640){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15640);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e15744){var ex__13572__auto__ = e15744;
var statearr_15747_18757 = state_15640;
(statearr_15747_18757[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15640[(4)]))){
var statearr_15749_18758 = state_15640;
(statearr_15749_18758[(1)] = cljs.core.first((state_15640[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18759 = state_15640;
state_15640 = G__18759;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__ = function(state_15640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1.call(this,state_15640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_15755 = f__14745__auto__();
(statearr_15755[(6)] = c__14744__auto__);

return statearr_15755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

return c__14744__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15761 = arguments.length;
switch (G__15761) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15784 = arguments.length;
switch (G__15784) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15848 = arguments.length;
switch (G__15848) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14744__auto___18773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_15947){
var state_val_15948 = (state_15947[(1)]);
if((state_val_15948 === (7))){
var inst_15936 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_15976_18775 = state_15947__$1;
(statearr_15976_18775[(2)] = inst_15936);

(statearr_15976_18775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (1))){
var state_15947__$1 = state_15947;
var statearr_15983_18779 = state_15947__$1;
(statearr_15983_18779[(2)] = null);

(statearr_15983_18779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (4))){
var inst_15891 = (state_15947[(7)]);
var inst_15891__$1 = (state_15947[(2)]);
var inst_15899 = (inst_15891__$1 == null);
var state_15947__$1 = (function (){var statearr_16008 = state_15947;
(statearr_16008[(7)] = inst_15891__$1);

return statearr_16008;
})();
if(cljs.core.truth_(inst_15899)){
var statearr_16009_18786 = state_15947__$1;
(statearr_16009_18786[(1)] = (5));

} else {
var statearr_16010_18787 = state_15947__$1;
(statearr_16010_18787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (13))){
var state_15947__$1 = state_15947;
var statearr_16019_18788 = state_15947__$1;
(statearr_16019_18788[(2)] = null);

(statearr_16019_18788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (6))){
var inst_15891 = (state_15947[(7)]);
var inst_15912 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15891) : p.call(null, inst_15891));
var state_15947__$1 = state_15947;
if(cljs.core.truth_(inst_15912)){
var statearr_16030_18789 = state_15947__$1;
(statearr_16030_18789[(1)] = (9));

} else {
var statearr_16031_18790 = state_15947__$1;
(statearr_16031_18790[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (3))){
var inst_15942 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15947__$1,inst_15942);
} else {
if((state_val_15948 === (12))){
var state_15947__$1 = state_15947;
var statearr_16043_18791 = state_15947__$1;
(statearr_16043_18791[(2)] = null);

(statearr_16043_18791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (2))){
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15947__$1,(4),ch);
} else {
if((state_val_15948 === (11))){
var inst_15891 = (state_15947[(7)]);
var inst_15921 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15947__$1,(8),inst_15921,inst_15891);
} else {
if((state_val_15948 === (9))){
var state_15947__$1 = state_15947;
var statearr_16050_18793 = state_15947__$1;
(statearr_16050_18793[(2)] = tc);

(statearr_16050_18793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (5))){
var inst_15904 = cljs.core.async.close_BANG_(tc);
var inst_15906 = cljs.core.async.close_BANG_(fc);
var state_15947__$1 = (function (){var statearr_16057 = state_15947;
(statearr_16057[(8)] = inst_15904);

return statearr_16057;
})();
var statearr_16059_18798 = state_15947__$1;
(statearr_16059_18798[(2)] = inst_15906);

(statearr_16059_18798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (14))){
var inst_15934 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
var statearr_16070_18799 = state_15947__$1;
(statearr_16070_18799[(2)] = inst_15934);

(statearr_16070_18799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (10))){
var state_15947__$1 = state_15947;
var statearr_16071_18800 = state_15947__$1;
(statearr_16071_18800[(2)] = fc);

(statearr_16071_18800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15948 === (8))){
var inst_15924 = (state_15947[(2)]);
var state_15947__$1 = state_15947;
if(cljs.core.truth_(inst_15924)){
var statearr_16073_18801 = state_15947__$1;
(statearr_16073_18801[(1)] = (12));

} else {
var statearr_16075_18802 = state_15947__$1;
(statearr_16075_18802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_16079 = [null,null,null,null,null,null,null,null,null];
(statearr_16079[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_16079[(1)] = (1));

return statearr_16079;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_15947){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_15947);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e16084){var ex__13572__auto__ = e16084;
var statearr_16086_18805 = state_15947;
(statearr_16086_18805[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_15947[(4)]))){
var statearr_16087_18806 = state_15947;
(statearr_16087_18806[(1)] = cljs.core.first((state_15947[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18807 = state_15947;
state_15947 = G__18807;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_16092 = f__14745__auto__();
(statearr_16092[(6)] = c__14744__auto___18773);

return statearr_16092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_16126){
var state_val_16127 = (state_16126[(1)]);
if((state_val_16127 === (7))){
var inst_16121 = (state_16126[(2)]);
var state_16126__$1 = state_16126;
var statearr_16128_18812 = state_16126__$1;
(statearr_16128_18812[(2)] = inst_16121);

(statearr_16128_18812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (1))){
var inst_16102 = init;
var inst_16103 = inst_16102;
var state_16126__$1 = (function (){var statearr_16129 = state_16126;
(statearr_16129[(7)] = inst_16103);

return statearr_16129;
})();
var statearr_16130_18815 = state_16126__$1;
(statearr_16130_18815[(2)] = null);

(statearr_16130_18815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (4))){
var inst_16108 = (state_16126[(8)]);
var inst_16108__$1 = (state_16126[(2)]);
var inst_16109 = (inst_16108__$1 == null);
var state_16126__$1 = (function (){var statearr_16132 = state_16126;
(statearr_16132[(8)] = inst_16108__$1);

return statearr_16132;
})();
if(cljs.core.truth_(inst_16109)){
var statearr_16135_18816 = state_16126__$1;
(statearr_16135_18816[(1)] = (5));

} else {
var statearr_16136_18818 = state_16126__$1;
(statearr_16136_18818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (6))){
var inst_16112 = (state_16126[(9)]);
var inst_16103 = (state_16126[(7)]);
var inst_16108 = (state_16126[(8)]);
var inst_16112__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16103,inst_16108) : f.call(null, inst_16103,inst_16108));
var inst_16113 = cljs.core.reduced_QMARK_(inst_16112__$1);
var state_16126__$1 = (function (){var statearr_16137 = state_16126;
(statearr_16137[(9)] = inst_16112__$1);

return statearr_16137;
})();
if(inst_16113){
var statearr_16138_18827 = state_16126__$1;
(statearr_16138_18827[(1)] = (8));

} else {
var statearr_16141_18828 = state_16126__$1;
(statearr_16141_18828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (3))){
var inst_16123 = (state_16126[(2)]);
var state_16126__$1 = state_16126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16126__$1,inst_16123);
} else {
if((state_val_16127 === (2))){
var state_16126__$1 = state_16126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16126__$1,(4),ch);
} else {
if((state_val_16127 === (9))){
var inst_16112 = (state_16126[(9)]);
var inst_16103 = inst_16112;
var state_16126__$1 = (function (){var statearr_16146 = state_16126;
(statearr_16146[(7)] = inst_16103);

return statearr_16146;
})();
var statearr_16147_18834 = state_16126__$1;
(statearr_16147_18834[(2)] = null);

(statearr_16147_18834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (5))){
var inst_16103 = (state_16126[(7)]);
var state_16126__$1 = state_16126;
var statearr_16152_18849 = state_16126__$1;
(statearr_16152_18849[(2)] = inst_16103);

(statearr_16152_18849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (10))){
var inst_16119 = (state_16126[(2)]);
var state_16126__$1 = state_16126;
var statearr_16154_18851 = state_16126__$1;
(statearr_16154_18851[(2)] = inst_16119);

(statearr_16154_18851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16127 === (8))){
var inst_16112 = (state_16126[(9)]);
var inst_16115 = cljs.core.deref(inst_16112);
var state_16126__$1 = state_16126;
var statearr_16155_18853 = state_16126__$1;
(statearr_16155_18853[(2)] = inst_16115);

(statearr_16155_18853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13568__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13568__auto____0 = (function (){
var statearr_16157 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16157[(0)] = cljs$core$async$reduce_$_state_machine__13568__auto__);

(statearr_16157[(1)] = (1));

return statearr_16157;
});
var cljs$core$async$reduce_$_state_machine__13568__auto____1 = (function (state_16126){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_16126);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e16158){var ex__13572__auto__ = e16158;
var statearr_16159_18861 = state_16126;
(statearr_16159_18861[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_16126[(4)]))){
var statearr_16164_18865 = state_16126;
(statearr_16164_18865[(1)] = cljs.core.first((state_16126[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18866 = state_16126;
state_16126 = G__18866;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13568__auto__ = function(state_16126){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13568__auto____1.call(this,state_16126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13568__auto____0;
cljs$core$async$reduce_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13568__auto____1;
return cljs$core$async$reduce_$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_16169 = f__14745__auto__();
(statearr_16169[(6)] = c__14744__auto__);

return statearr_16169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

return c__14744__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_16180){
var state_val_16181 = (state_16180[(1)]);
if((state_val_16181 === (1))){
var inst_16175 = cljs.core.async.reduce(f__$1,init,ch);
var state_16180__$1 = state_16180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16180__$1,(2),inst_16175);
} else {
if((state_val_16181 === (2))){
var inst_16177 = (state_16180[(2)]);
var inst_16178 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16177) : f__$1.call(null, inst_16177));
var state_16180__$1 = state_16180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16180__$1,inst_16178);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13568__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13568__auto____0 = (function (){
var statearr_16193 = [null,null,null,null,null,null,null];
(statearr_16193[(0)] = cljs$core$async$transduce_$_state_machine__13568__auto__);

(statearr_16193[(1)] = (1));

return statearr_16193;
});
var cljs$core$async$transduce_$_state_machine__13568__auto____1 = (function (state_16180){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_16180);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e16198){var ex__13572__auto__ = e16198;
var statearr_16199_18896 = state_16180;
(statearr_16199_18896[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_16180[(4)]))){
var statearr_16200_18899 = state_16180;
(statearr_16200_18899[(1)] = cljs.core.first((state_16180[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18913 = state_16180;
state_16180 = G__18913;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13568__auto__ = function(state_16180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13568__auto____1.call(this,state_16180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13568__auto____0;
cljs$core$async$transduce_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13568__auto____1;
return cljs$core$async$transduce_$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_16201 = f__14745__auto__();
(statearr_16201[(6)] = c__14744__auto__);

return statearr_16201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

return c__14744__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16204 = arguments.length;
switch (G__16204) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_16244){
var state_val_16245 = (state_16244[(1)]);
if((state_val_16245 === (7))){
var inst_16225 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
var statearr_16250_18921 = state_16244__$1;
(statearr_16250_18921[(2)] = inst_16225);

(statearr_16250_18921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (1))){
var inst_16219 = cljs.core.seq(coll);
var inst_16220 = inst_16219;
var state_16244__$1 = (function (){var statearr_16254 = state_16244;
(statearr_16254[(7)] = inst_16220);

return statearr_16254;
})();
var statearr_16255_18925 = state_16244__$1;
(statearr_16255_18925[(2)] = null);

(statearr_16255_18925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (4))){
var inst_16220 = (state_16244[(7)]);
var inst_16223 = cljs.core.first(inst_16220);
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16244__$1,(7),ch,inst_16223);
} else {
if((state_val_16245 === (13))){
var inst_16238 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
var statearr_16263_18928 = state_16244__$1;
(statearr_16263_18928[(2)] = inst_16238);

(statearr_16263_18928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (6))){
var inst_16228 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
if(cljs.core.truth_(inst_16228)){
var statearr_16267_18931 = state_16244__$1;
(statearr_16267_18931[(1)] = (8));

} else {
var statearr_16268_18936 = state_16244__$1;
(statearr_16268_18936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (3))){
var inst_16242 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16244__$1,inst_16242);
} else {
if((state_val_16245 === (12))){
var state_16244__$1 = state_16244;
var statearr_16270_18940 = state_16244__$1;
(statearr_16270_18940[(2)] = null);

(statearr_16270_18940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (2))){
var inst_16220 = (state_16244[(7)]);
var state_16244__$1 = state_16244;
if(cljs.core.truth_(inst_16220)){
var statearr_16271_18948 = state_16244__$1;
(statearr_16271_18948[(1)] = (4));

} else {
var statearr_16276_18949 = state_16244__$1;
(statearr_16276_18949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (11))){
var inst_16235 = cljs.core.async.close_BANG_(ch);
var state_16244__$1 = state_16244;
var statearr_16280_18950 = state_16244__$1;
(statearr_16280_18950[(2)] = inst_16235);

(statearr_16280_18950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (9))){
var state_16244__$1 = state_16244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16281_18952 = state_16244__$1;
(statearr_16281_18952[(1)] = (11));

} else {
var statearr_16282_18953 = state_16244__$1;
(statearr_16282_18953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (5))){
var inst_16220 = (state_16244[(7)]);
var state_16244__$1 = state_16244;
var statearr_16283_18959 = state_16244__$1;
(statearr_16283_18959[(2)] = inst_16220);

(statearr_16283_18959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (10))){
var inst_16240 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
var statearr_16284_18970 = state_16244__$1;
(statearr_16284_18970[(2)] = inst_16240);

(statearr_16284_18970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (8))){
var inst_16220 = (state_16244[(7)]);
var inst_16230 = cljs.core.next(inst_16220);
var inst_16220__$1 = inst_16230;
var state_16244__$1 = (function (){var statearr_16289 = state_16244;
(statearr_16289[(7)] = inst_16220__$1);

return statearr_16289;
})();
var statearr_16293_18972 = state_16244__$1;
(statearr_16293_18972[(2)] = null);

(statearr_16293_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_16295 = [null,null,null,null,null,null,null,null];
(statearr_16295[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_16295[(1)] = (1));

return statearr_16295;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_16244){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_16244);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e16296){var ex__13572__auto__ = e16296;
var statearr_16297_18978 = state_16244;
(statearr_16297_18978[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_16244[(4)]))){
var statearr_16305_18980 = state_16244;
(statearr_16305_18980[(1)] = cljs.core.first((state_16244[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18982 = state_16244;
state_16244 = G__18982;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_16244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_16244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_16307 = f__14745__auto__();
(statearr_16307[(6)] = c__14744__auto__);

return statearr_16307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

return c__14744__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16317 = arguments.length;
switch (G__16317) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18993 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18993(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19000 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19000(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19009 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19009(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19014 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19014(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16355 = (function (ch,cs,meta16356){
this.ch = ch;
this.cs = cs;
this.meta16356 = meta16356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16357,meta16356__$1){
var self__ = this;
var _16357__$1 = this;
return (new cljs.core.async.t_cljs$core$async16355(self__.ch,self__.cs,meta16356__$1));
}));

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16357){
var self__ = this;
var _16357__$1 = this;
return self__.meta16356;
}));

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16355.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16356","meta16356",-2020619961,null)], null);
}));

(cljs.core.async.t_cljs$core$async16355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16355");

(cljs.core.async.t_cljs$core$async16355.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16355.
 */
cljs.core.async.__GT_t_cljs$core$async16355 = (function cljs$core$async$__GT_t_cljs$core$async16355(ch,cs,meta16356){
return (new cljs.core.async.t_cljs$core$async16355(ch,cs,meta16356));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16355(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14744__auto___19044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_16515){
var state_val_16516 = (state_16515[(1)]);
if((state_val_16516 === (7))){
var inst_16503 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16520_19045 = state_16515__$1;
(statearr_16520_19045[(2)] = inst_16503);

(statearr_16520_19045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (20))){
var inst_16402 = (state_16515[(7)]);
var inst_16415 = cljs.core.first(inst_16402);
var inst_16417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16415,(0),null);
var inst_16418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16415,(1),null);
var state_16515__$1 = (function (){var statearr_16522 = state_16515;
(statearr_16522[(8)] = inst_16417);

return statearr_16522;
})();
if(cljs.core.truth_(inst_16418)){
var statearr_16524_19046 = state_16515__$1;
(statearr_16524_19046[(1)] = (22));

} else {
var statearr_16525_19047 = state_16515__$1;
(statearr_16525_19047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (27))){
var inst_16453 = (state_16515[(9)]);
var inst_16446 = (state_16515[(10)]);
var inst_16448 = (state_16515[(11)]);
var inst_16370 = (state_16515[(12)]);
var inst_16453__$1 = cljs.core._nth(inst_16446,inst_16448);
var inst_16454 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16453__$1,inst_16370,done);
var state_16515__$1 = (function (){var statearr_16526 = state_16515;
(statearr_16526[(9)] = inst_16453__$1);

return statearr_16526;
})();
if(cljs.core.truth_(inst_16454)){
var statearr_16527_19057 = state_16515__$1;
(statearr_16527_19057[(1)] = (30));

} else {
var statearr_16528_19058 = state_16515__$1;
(statearr_16528_19058[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (1))){
var state_16515__$1 = state_16515;
var statearr_16529_19060 = state_16515__$1;
(statearr_16529_19060[(2)] = null);

(statearr_16529_19060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (24))){
var inst_16402 = (state_16515[(7)]);
var inst_16423 = (state_16515[(2)]);
var inst_16424 = cljs.core.next(inst_16402);
var inst_16379 = inst_16424;
var inst_16380 = null;
var inst_16381 = (0);
var inst_16382 = (0);
var state_16515__$1 = (function (){var statearr_16532 = state_16515;
(statearr_16532[(13)] = inst_16382);

(statearr_16532[(14)] = inst_16380);

(statearr_16532[(15)] = inst_16381);

(statearr_16532[(16)] = inst_16423);

(statearr_16532[(17)] = inst_16379);

return statearr_16532;
})();
var statearr_16534_19062 = state_16515__$1;
(statearr_16534_19062[(2)] = null);

(statearr_16534_19062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (39))){
var state_16515__$1 = state_16515;
var statearr_16541_19066 = state_16515__$1;
(statearr_16541_19066[(2)] = null);

(statearr_16541_19066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (4))){
var inst_16370 = (state_16515[(12)]);
var inst_16370__$1 = (state_16515[(2)]);
var inst_16371 = (inst_16370__$1 == null);
var state_16515__$1 = (function (){var statearr_16544 = state_16515;
(statearr_16544[(12)] = inst_16370__$1);

return statearr_16544;
})();
if(cljs.core.truth_(inst_16371)){
var statearr_16547_19067 = state_16515__$1;
(statearr_16547_19067[(1)] = (5));

} else {
var statearr_16548_19068 = state_16515__$1;
(statearr_16548_19068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (15))){
var inst_16382 = (state_16515[(13)]);
var inst_16380 = (state_16515[(14)]);
var inst_16381 = (state_16515[(15)]);
var inst_16379 = (state_16515[(17)]);
var inst_16397 = (state_16515[(2)]);
var inst_16398 = (inst_16382 + (1));
var tmp16536 = inst_16380;
var tmp16537 = inst_16381;
var tmp16538 = inst_16379;
var inst_16379__$1 = tmp16538;
var inst_16380__$1 = tmp16536;
var inst_16381__$1 = tmp16537;
var inst_16382__$1 = inst_16398;
var state_16515__$1 = (function (){var statearr_16551 = state_16515;
(statearr_16551[(13)] = inst_16382__$1);

(statearr_16551[(14)] = inst_16380__$1);

(statearr_16551[(15)] = inst_16381__$1);

(statearr_16551[(18)] = inst_16397);

(statearr_16551[(17)] = inst_16379__$1);

return statearr_16551;
})();
var statearr_16553_19069 = state_16515__$1;
(statearr_16553_19069[(2)] = null);

(statearr_16553_19069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (21))){
var inst_16427 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16561_19070 = state_16515__$1;
(statearr_16561_19070[(2)] = inst_16427);

(statearr_16561_19070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (31))){
var inst_16453 = (state_16515[(9)]);
var inst_16457 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16453);
var state_16515__$1 = state_16515;
var statearr_16562_19071 = state_16515__$1;
(statearr_16562_19071[(2)] = inst_16457);

(statearr_16562_19071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (32))){
var inst_16446 = (state_16515[(10)]);
var inst_16445 = (state_16515[(19)]);
var inst_16448 = (state_16515[(11)]);
var inst_16447 = (state_16515[(20)]);
var inst_16459 = (state_16515[(2)]);
var inst_16460 = (inst_16448 + (1));
var tmp16556 = inst_16446;
var tmp16557 = inst_16445;
var tmp16558 = inst_16447;
var inst_16445__$1 = tmp16557;
var inst_16446__$1 = tmp16556;
var inst_16447__$1 = tmp16558;
var inst_16448__$1 = inst_16460;
var state_16515__$1 = (function (){var statearr_16563 = state_16515;
(statearr_16563[(10)] = inst_16446__$1);

(statearr_16563[(19)] = inst_16445__$1);

(statearr_16563[(11)] = inst_16448__$1);

(statearr_16563[(20)] = inst_16447__$1);

(statearr_16563[(21)] = inst_16459);

return statearr_16563;
})();
var statearr_16564_19073 = state_16515__$1;
(statearr_16564_19073[(2)] = null);

(statearr_16564_19073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (40))){
var inst_16472 = (state_16515[(22)]);
var inst_16476 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16472);
var state_16515__$1 = state_16515;
var statearr_16565_19077 = state_16515__$1;
(statearr_16565_19077[(2)] = inst_16476);

(statearr_16565_19077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (33))){
var inst_16463 = (state_16515[(23)]);
var inst_16465 = cljs.core.chunked_seq_QMARK_(inst_16463);
var state_16515__$1 = state_16515;
if(inst_16465){
var statearr_16566_19081 = state_16515__$1;
(statearr_16566_19081[(1)] = (36));

} else {
var statearr_16567_19082 = state_16515__$1;
(statearr_16567_19082[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (13))){
var inst_16391 = (state_16515[(24)]);
var inst_16394 = cljs.core.async.close_BANG_(inst_16391);
var state_16515__$1 = state_16515;
var statearr_16569_19084 = state_16515__$1;
(statearr_16569_19084[(2)] = inst_16394);

(statearr_16569_19084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (22))){
var inst_16417 = (state_16515[(8)]);
var inst_16420 = cljs.core.async.close_BANG_(inst_16417);
var state_16515__$1 = state_16515;
var statearr_16570_19094 = state_16515__$1;
(statearr_16570_19094[(2)] = inst_16420);

(statearr_16570_19094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (36))){
var inst_16463 = (state_16515[(23)]);
var inst_16467 = cljs.core.chunk_first(inst_16463);
var inst_16468 = cljs.core.chunk_rest(inst_16463);
var inst_16469 = cljs.core.count(inst_16467);
var inst_16445 = inst_16468;
var inst_16446 = inst_16467;
var inst_16447 = inst_16469;
var inst_16448 = (0);
var state_16515__$1 = (function (){var statearr_16573 = state_16515;
(statearr_16573[(10)] = inst_16446);

(statearr_16573[(19)] = inst_16445);

(statearr_16573[(11)] = inst_16448);

(statearr_16573[(20)] = inst_16447);

return statearr_16573;
})();
var statearr_16574_19114 = state_16515__$1;
(statearr_16574_19114[(2)] = null);

(statearr_16574_19114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (41))){
var inst_16463 = (state_16515[(23)]);
var inst_16478 = (state_16515[(2)]);
var inst_16479 = cljs.core.next(inst_16463);
var inst_16445 = inst_16479;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16515__$1 = (function (){var statearr_16577 = state_16515;
(statearr_16577[(10)] = inst_16446);

(statearr_16577[(19)] = inst_16445);

(statearr_16577[(11)] = inst_16448);

(statearr_16577[(20)] = inst_16447);

(statearr_16577[(25)] = inst_16478);

return statearr_16577;
})();
var statearr_16578_19116 = state_16515__$1;
(statearr_16578_19116[(2)] = null);

(statearr_16578_19116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (43))){
var state_16515__$1 = state_16515;
var statearr_16581_19117 = state_16515__$1;
(statearr_16581_19117[(2)] = null);

(statearr_16581_19117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (29))){
var inst_16491 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16583_19118 = state_16515__$1;
(statearr_16583_19118[(2)] = inst_16491);

(statearr_16583_19118[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (44))){
var inst_16500 = (state_16515[(2)]);
var state_16515__$1 = (function (){var statearr_16609 = state_16515;
(statearr_16609[(26)] = inst_16500);

return statearr_16609;
})();
var statearr_16610_19129 = state_16515__$1;
(statearr_16610_19129[(2)] = null);

(statearr_16610_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (6))){
var inst_16437 = (state_16515[(27)]);
var inst_16436 = cljs.core.deref(cs);
var inst_16437__$1 = cljs.core.keys(inst_16436);
var inst_16438 = cljs.core.count(inst_16437__$1);
var inst_16439 = cljs.core.reset_BANG_(dctr,inst_16438);
var inst_16444 = cljs.core.seq(inst_16437__$1);
var inst_16445 = inst_16444;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16515__$1 = (function (){var statearr_16611 = state_16515;
(statearr_16611[(28)] = inst_16439);

(statearr_16611[(27)] = inst_16437__$1);

(statearr_16611[(10)] = inst_16446);

(statearr_16611[(19)] = inst_16445);

(statearr_16611[(11)] = inst_16448);

(statearr_16611[(20)] = inst_16447);

return statearr_16611;
})();
var statearr_16612_19137 = state_16515__$1;
(statearr_16612_19137[(2)] = null);

(statearr_16612_19137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (28))){
var inst_16463 = (state_16515[(23)]);
var inst_16445 = (state_16515[(19)]);
var inst_16463__$1 = cljs.core.seq(inst_16445);
var state_16515__$1 = (function (){var statearr_16613 = state_16515;
(statearr_16613[(23)] = inst_16463__$1);

return statearr_16613;
})();
if(inst_16463__$1){
var statearr_16614_19153 = state_16515__$1;
(statearr_16614_19153[(1)] = (33));

} else {
var statearr_16616_19154 = state_16515__$1;
(statearr_16616_19154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (25))){
var inst_16448 = (state_16515[(11)]);
var inst_16447 = (state_16515[(20)]);
var inst_16450 = (inst_16448 < inst_16447);
var inst_16451 = inst_16450;
var state_16515__$1 = state_16515;
if(cljs.core.truth_(inst_16451)){
var statearr_16620_19157 = state_16515__$1;
(statearr_16620_19157[(1)] = (27));

} else {
var statearr_16621_19162 = state_16515__$1;
(statearr_16621_19162[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (34))){
var state_16515__$1 = state_16515;
var statearr_16622_19167 = state_16515__$1;
(statearr_16622_19167[(2)] = null);

(statearr_16622_19167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (17))){
var state_16515__$1 = state_16515;
var statearr_16623_19168 = state_16515__$1;
(statearr_16623_19168[(2)] = null);

(statearr_16623_19168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (3))){
var inst_16505 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16515__$1,inst_16505);
} else {
if((state_val_16516 === (12))){
var inst_16432 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16626_19176 = state_16515__$1;
(statearr_16626_19176[(2)] = inst_16432);

(statearr_16626_19176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (2))){
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16515__$1,(4),ch);
} else {
if((state_val_16516 === (23))){
var state_16515__$1 = state_16515;
var statearr_16631_19181 = state_16515__$1;
(statearr_16631_19181[(2)] = null);

(statearr_16631_19181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (35))){
var inst_16485 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16633_19182 = state_16515__$1;
(statearr_16633_19182[(2)] = inst_16485);

(statearr_16633_19182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (19))){
var inst_16402 = (state_16515[(7)]);
var inst_16406 = cljs.core.chunk_first(inst_16402);
var inst_16407 = cljs.core.chunk_rest(inst_16402);
var inst_16408 = cljs.core.count(inst_16406);
var inst_16379 = inst_16407;
var inst_16380 = inst_16406;
var inst_16381 = inst_16408;
var inst_16382 = (0);
var state_16515__$1 = (function (){var statearr_16634 = state_16515;
(statearr_16634[(13)] = inst_16382);

(statearr_16634[(14)] = inst_16380);

(statearr_16634[(15)] = inst_16381);

(statearr_16634[(17)] = inst_16379);

return statearr_16634;
})();
var statearr_16637_19183 = state_16515__$1;
(statearr_16637_19183[(2)] = null);

(statearr_16637_19183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (11))){
var inst_16402 = (state_16515[(7)]);
var inst_16379 = (state_16515[(17)]);
var inst_16402__$1 = cljs.core.seq(inst_16379);
var state_16515__$1 = (function (){var statearr_16639 = state_16515;
(statearr_16639[(7)] = inst_16402__$1);

return statearr_16639;
})();
if(inst_16402__$1){
var statearr_16640_19189 = state_16515__$1;
(statearr_16640_19189[(1)] = (16));

} else {
var statearr_16642_19190 = state_16515__$1;
(statearr_16642_19190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (9))){
var inst_16434 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16643_19193 = state_16515__$1;
(statearr_16643_19193[(2)] = inst_16434);

(statearr_16643_19193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (5))){
var inst_16377 = cljs.core.deref(cs);
var inst_16378 = cljs.core.seq(inst_16377);
var inst_16379 = inst_16378;
var inst_16380 = null;
var inst_16381 = (0);
var inst_16382 = (0);
var state_16515__$1 = (function (){var statearr_16645 = state_16515;
(statearr_16645[(13)] = inst_16382);

(statearr_16645[(14)] = inst_16380);

(statearr_16645[(15)] = inst_16381);

(statearr_16645[(17)] = inst_16379);

return statearr_16645;
})();
var statearr_16650_19194 = state_16515__$1;
(statearr_16650_19194[(2)] = null);

(statearr_16650_19194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (14))){
var state_16515__$1 = state_16515;
var statearr_16654_19195 = state_16515__$1;
(statearr_16654_19195[(2)] = null);

(statearr_16654_19195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (45))){
var inst_16497 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16655_19196 = state_16515__$1;
(statearr_16655_19196[(2)] = inst_16497);

(statearr_16655_19196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (26))){
var inst_16437 = (state_16515[(27)]);
var inst_16493 = (state_16515[(2)]);
var inst_16494 = cljs.core.seq(inst_16437);
var state_16515__$1 = (function (){var statearr_16658 = state_16515;
(statearr_16658[(29)] = inst_16493);

return statearr_16658;
})();
if(inst_16494){
var statearr_16659_19197 = state_16515__$1;
(statearr_16659_19197[(1)] = (42));

} else {
var statearr_16660_19198 = state_16515__$1;
(statearr_16660_19198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (16))){
var inst_16402 = (state_16515[(7)]);
var inst_16404 = cljs.core.chunked_seq_QMARK_(inst_16402);
var state_16515__$1 = state_16515;
if(inst_16404){
var statearr_16663_19199 = state_16515__$1;
(statearr_16663_19199[(1)] = (19));

} else {
var statearr_16664_19200 = state_16515__$1;
(statearr_16664_19200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (38))){
var inst_16482 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16665_19201 = state_16515__$1;
(statearr_16665_19201[(2)] = inst_16482);

(statearr_16665_19201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (30))){
var state_16515__$1 = state_16515;
var statearr_16666_19202 = state_16515__$1;
(statearr_16666_19202[(2)] = null);

(statearr_16666_19202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (10))){
var inst_16382 = (state_16515[(13)]);
var inst_16380 = (state_16515[(14)]);
var inst_16390 = cljs.core._nth(inst_16380,inst_16382);
var inst_16391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16390,(0),null);
var inst_16392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16390,(1),null);
var state_16515__$1 = (function (){var statearr_16667 = state_16515;
(statearr_16667[(24)] = inst_16391);

return statearr_16667;
})();
if(cljs.core.truth_(inst_16392)){
var statearr_16668_19203 = state_16515__$1;
(statearr_16668_19203[(1)] = (13));

} else {
var statearr_16669_19204 = state_16515__$1;
(statearr_16669_19204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (18))){
var inst_16430 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16678_19205 = state_16515__$1;
(statearr_16678_19205[(2)] = inst_16430);

(statearr_16678_19205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (42))){
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16515__$1,(45),dchan);
} else {
if((state_val_16516 === (37))){
var inst_16463 = (state_16515[(23)]);
var inst_16370 = (state_16515[(12)]);
var inst_16472 = (state_16515[(22)]);
var inst_16472__$1 = cljs.core.first(inst_16463);
var inst_16473 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16472__$1,inst_16370,done);
var state_16515__$1 = (function (){var statearr_16690 = state_16515;
(statearr_16690[(22)] = inst_16472__$1);

return statearr_16690;
})();
if(cljs.core.truth_(inst_16473)){
var statearr_16691_19207 = state_16515__$1;
(statearr_16691_19207[(1)] = (39));

} else {
var statearr_16692_19208 = state_16515__$1;
(statearr_16692_19208[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (8))){
var inst_16382 = (state_16515[(13)]);
var inst_16381 = (state_16515[(15)]);
var inst_16384 = (inst_16382 < inst_16381);
var inst_16385 = inst_16384;
var state_16515__$1 = state_16515;
if(cljs.core.truth_(inst_16385)){
var statearr_16693_19210 = state_16515__$1;
(statearr_16693_19210[(1)] = (10));

} else {
var statearr_16694_19211 = state_16515__$1;
(statearr_16694_19211[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13568__auto__ = null;
var cljs$core$async$mult_$_state_machine__13568__auto____0 = (function (){
var statearr_16696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16696[(0)] = cljs$core$async$mult_$_state_machine__13568__auto__);

(statearr_16696[(1)] = (1));

return statearr_16696;
});
var cljs$core$async$mult_$_state_machine__13568__auto____1 = (function (state_16515){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_16515);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e16701){var ex__13572__auto__ = e16701;
var statearr_16705_19212 = state_16515;
(statearr_16705_19212[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_16515[(4)]))){
var statearr_16706_19213 = state_16515;
(statearr_16706_19213[(1)] = cljs.core.first((state_16515[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19214 = state_16515;
state_16515 = G__19214;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13568__auto__ = function(state_16515){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13568__auto____1.call(this,state_16515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13568__auto____0;
cljs$core$async$mult_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13568__auto____1;
return cljs$core$async$mult_$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_16710 = f__14745__auto__();
(statearr_16710[(6)] = c__14744__auto___19044);

return statearr_16710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16718 = arguments.length;
switch (G__16718) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19220 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19220(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19227 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19227(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19230 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19230(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19231 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19231(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19236 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19236(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19240 = arguments.length;
var i__5727__auto___19241 = (0);
while(true){
if((i__5727__auto___19241 < len__5726__auto___19240)){
args__5732__auto__.push((arguments[i__5727__auto___19241]));

var G__19242 = (i__5727__auto___19241 + (1));
i__5727__auto___19241 = G__19242;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16771){
var map__16772 = p__16771;
var map__16772__$1 = cljs.core.__destructure_map(map__16772);
var opts = map__16772__$1;
var statearr_16773_19243 = state;
(statearr_16773_19243[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16777_19244 = state;
(statearr_16777_19244[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16778_19245 = state;
(statearr_16778_19245[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16759){
var G__16760 = cljs.core.first(seq16759);
var seq16759__$1 = cljs.core.next(seq16759);
var G__16761 = cljs.core.first(seq16759__$1);
var seq16759__$2 = cljs.core.next(seq16759__$1);
var G__16763 = cljs.core.first(seq16759__$2);
var seq16759__$3 = cljs.core.next(seq16759__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16760,G__16761,G__16763,seq16759__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16801 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16802){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16802 = meta16802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16803,meta16802__$1){
var self__ = this;
var _16803__$1 = this;
return (new cljs.core.async.t_cljs$core$async16801(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16802__$1));
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16803){
var self__ = this;
var _16803__$1 = this;
return self__.meta16802;
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16801.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16802","meta16802",-1424586909,null)], null);
}));

(cljs.core.async.t_cljs$core$async16801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16801");

(cljs.core.async.t_cljs$core$async16801.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16801.
 */
cljs.core.async.__GT_t_cljs$core$async16801 = (function cljs$core$async$__GT_t_cljs$core$async16801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16802){
return (new cljs.core.async.t_cljs$core$async16801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16802));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16801(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14744__auto___19257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_16915){
var state_val_16916 = (state_16915[(1)]);
if((state_val_16916 === (7))){
var inst_16872 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16872)){
var statearr_16920_19258 = state_16915__$1;
(statearr_16920_19258[(1)] = (8));

} else {
var statearr_16921_19259 = state_16915__$1;
(statearr_16921_19259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (20))){
var inst_16865 = (state_16915[(7)]);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16915__$1,(23),out,inst_16865);
} else {
if((state_val_16916 === (1))){
var inst_16848 = calc_state();
var inst_16849 = cljs.core.__destructure_map(inst_16848);
var inst_16850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16849,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16849,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16849,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16853 = inst_16848;
var state_16915__$1 = (function (){var statearr_16926 = state_16915;
(statearr_16926[(8)] = inst_16851);

(statearr_16926[(9)] = inst_16852);

(statearr_16926[(10)] = inst_16850);

(statearr_16926[(11)] = inst_16853);

return statearr_16926;
})();
var statearr_16927_19264 = state_16915__$1;
(statearr_16927_19264[(2)] = null);

(statearr_16927_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (24))){
var inst_16856 = (state_16915[(12)]);
var inst_16853 = inst_16856;
var state_16915__$1 = (function (){var statearr_16928 = state_16915;
(statearr_16928[(11)] = inst_16853);

return statearr_16928;
})();
var statearr_16929_19266 = state_16915__$1;
(statearr_16929_19266[(2)] = null);

(statearr_16929_19266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (4))){
var inst_16865 = (state_16915[(7)]);
var inst_16867 = (state_16915[(13)]);
var inst_16864 = (state_16915[(2)]);
var inst_16865__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16864,(0),null);
var inst_16866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16864,(1),null);
var inst_16867__$1 = (inst_16865__$1 == null);
var state_16915__$1 = (function (){var statearr_16933 = state_16915;
(statearr_16933[(7)] = inst_16865__$1);

(statearr_16933[(14)] = inst_16866);

(statearr_16933[(13)] = inst_16867__$1);

return statearr_16933;
})();
if(cljs.core.truth_(inst_16867__$1)){
var statearr_16935_19273 = state_16915__$1;
(statearr_16935_19273[(1)] = (5));

} else {
var statearr_16936_19274 = state_16915__$1;
(statearr_16936_19274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (15))){
var inst_16887 = (state_16915[(15)]);
var inst_16857 = (state_16915[(16)]);
var inst_16887__$1 = cljs.core.empty_QMARK_(inst_16857);
var state_16915__$1 = (function (){var statearr_16940 = state_16915;
(statearr_16940[(15)] = inst_16887__$1);

return statearr_16940;
})();
if(inst_16887__$1){
var statearr_16944_19275 = state_16915__$1;
(statearr_16944_19275[(1)] = (17));

} else {
var statearr_16945_19280 = state_16915__$1;
(statearr_16945_19280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (21))){
var inst_16856 = (state_16915[(12)]);
var inst_16853 = inst_16856;
var state_16915__$1 = (function (){var statearr_16946 = state_16915;
(statearr_16946[(11)] = inst_16853);

return statearr_16946;
})();
var statearr_16947_19281 = state_16915__$1;
(statearr_16947_19281[(2)] = null);

(statearr_16947_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (13))){
var inst_16880 = (state_16915[(2)]);
var inst_16881 = calc_state();
var inst_16853 = inst_16881;
var state_16915__$1 = (function (){var statearr_16948 = state_16915;
(statearr_16948[(11)] = inst_16853);

(statearr_16948[(17)] = inst_16880);

return statearr_16948;
})();
var statearr_16950_19282 = state_16915__$1;
(statearr_16950_19282[(2)] = null);

(statearr_16950_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (22))){
var inst_16908 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16954_19283 = state_16915__$1;
(statearr_16954_19283[(2)] = inst_16908);

(statearr_16954_19283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (6))){
var inst_16866 = (state_16915[(14)]);
var inst_16870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16866,change);
var state_16915__$1 = state_16915;
var statearr_16955_19284 = state_16915__$1;
(statearr_16955_19284[(2)] = inst_16870);

(statearr_16955_19284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (25))){
var state_16915__$1 = state_16915;
var statearr_16956_19285 = state_16915__$1;
(statearr_16956_19285[(2)] = null);

(statearr_16956_19285[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (17))){
var inst_16866 = (state_16915[(14)]);
var inst_16858 = (state_16915[(18)]);
var inst_16890 = (inst_16858.cljs$core$IFn$_invoke$arity$1 ? inst_16858.cljs$core$IFn$_invoke$arity$1(inst_16866) : inst_16858.call(null, inst_16866));
var inst_16891 = cljs.core.not(inst_16890);
var state_16915__$1 = state_16915;
var statearr_16957_19286 = state_16915__$1;
(statearr_16957_19286[(2)] = inst_16891);

(statearr_16957_19286[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (3))){
var inst_16912 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16915__$1,inst_16912);
} else {
if((state_val_16916 === (12))){
var state_16915__$1 = state_16915;
var statearr_16961_19287 = state_16915__$1;
(statearr_16961_19287[(2)] = null);

(statearr_16961_19287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (2))){
var inst_16853 = (state_16915[(11)]);
var inst_16856 = (state_16915[(12)]);
var inst_16856__$1 = cljs.core.__destructure_map(inst_16853);
var inst_16857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16856__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16915__$1 = (function (){var statearr_16970 = state_16915;
(statearr_16970[(18)] = inst_16858);

(statearr_16970[(12)] = inst_16856__$1);

(statearr_16970[(16)] = inst_16857);

return statearr_16970;
})();
return cljs.core.async.ioc_alts_BANG_(state_16915__$1,(4),inst_16859);
} else {
if((state_val_16916 === (23))){
var inst_16899 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16899)){
var statearr_16976_19288 = state_16915__$1;
(statearr_16976_19288[(1)] = (24));

} else {
var statearr_16977_19289 = state_16915__$1;
(statearr_16977_19289[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (19))){
var inst_16894 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16978_19290 = state_16915__$1;
(statearr_16978_19290[(2)] = inst_16894);

(statearr_16978_19290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (11))){
var inst_16866 = (state_16915[(14)]);
var inst_16877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16866);
var state_16915__$1 = state_16915;
var statearr_16979_19294 = state_16915__$1;
(statearr_16979_19294[(2)] = inst_16877);

(statearr_16979_19294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (9))){
var inst_16866 = (state_16915[(14)]);
var inst_16884 = (state_16915[(19)]);
var inst_16857 = (state_16915[(16)]);
var inst_16884__$1 = (inst_16857.cljs$core$IFn$_invoke$arity$1 ? inst_16857.cljs$core$IFn$_invoke$arity$1(inst_16866) : inst_16857.call(null, inst_16866));
var state_16915__$1 = (function (){var statearr_16980 = state_16915;
(statearr_16980[(19)] = inst_16884__$1);

return statearr_16980;
})();
if(cljs.core.truth_(inst_16884__$1)){
var statearr_16982_19295 = state_16915__$1;
(statearr_16982_19295[(1)] = (14));

} else {
var statearr_16983_19300 = state_16915__$1;
(statearr_16983_19300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (5))){
var inst_16867 = (state_16915[(13)]);
var state_16915__$1 = state_16915;
var statearr_16991_19301 = state_16915__$1;
(statearr_16991_19301[(2)] = inst_16867);

(statearr_16991_19301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (14))){
var inst_16884 = (state_16915[(19)]);
var state_16915__$1 = state_16915;
var statearr_16995_19302 = state_16915__$1;
(statearr_16995_19302[(2)] = inst_16884);

(statearr_16995_19302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (26))){
var inst_16904 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16996_19303 = state_16915__$1;
(statearr_16996_19303[(2)] = inst_16904);

(statearr_16996_19303[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (16))){
var inst_16896 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16896)){
var statearr_16999_19304 = state_16915__$1;
(statearr_16999_19304[(1)] = (20));

} else {
var statearr_17000_19305 = state_16915__$1;
(statearr_17000_19305[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (10))){
var inst_16910 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_17003_19306 = state_16915__$1;
(statearr_17003_19306[(2)] = inst_16910);

(statearr_17003_19306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (18))){
var inst_16887 = (state_16915[(15)]);
var state_16915__$1 = state_16915;
var statearr_17009_19311 = state_16915__$1;
(statearr_17009_19311[(2)] = inst_16887);

(statearr_17009_19311[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (8))){
var inst_16865 = (state_16915[(7)]);
var inst_16874 = (inst_16865 == null);
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16874)){
var statearr_17011_19312 = state_16915__$1;
(statearr_17011_19312[(1)] = (11));

} else {
var statearr_17014_19313 = state_16915__$1;
(statearr_17014_19313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13568__auto__ = null;
var cljs$core$async$mix_$_state_machine__13568__auto____0 = (function (){
var statearr_17016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17016[(0)] = cljs$core$async$mix_$_state_machine__13568__auto__);

(statearr_17016[(1)] = (1));

return statearr_17016;
});
var cljs$core$async$mix_$_state_machine__13568__auto____1 = (function (state_16915){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_16915);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17017){var ex__13572__auto__ = e17017;
var statearr_17018_19314 = state_16915;
(statearr_17018_19314[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_16915[(4)]))){
var statearr_17020_19315 = state_16915;
(statearr_17020_19315[(1)] = cljs.core.first((state_16915[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_16915;
state_16915 = G__19316;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13568__auto__ = function(state_16915){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13568__auto____1.call(this,state_16915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13568__auto____0;
cljs$core$async$mix_$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13568__auto____1;
return cljs$core$async$mix_$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17021 = f__14745__auto__();
(statearr_17021[(6)] = c__14744__auto___19257);

return statearr_17021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19318 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19318(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19320 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19320(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19327 = (function() {
var G__19328 = null;
var G__19328__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19328__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19328 = function(p,v){
switch(arguments.length){
case 1:
return G__19328__1.call(this,p);
case 2:
return G__19328__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19328.cljs$core$IFn$_invoke$arity$1 = G__19328__1;
G__19328.cljs$core$IFn$_invoke$arity$2 = G__19328__2;
return G__19328;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17065 = arguments.length;
switch (G__17065) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19327(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19327(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17086 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17087){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17087 = meta17087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17088,meta17087__$1){
var self__ = this;
var _17088__$1 = this;
return (new cljs.core.async.t_cljs$core$async17086(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17087__$1));
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17088){
var self__ = this;
var _17088__$1 = this;
return self__.meta17087;
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17087","meta17087",1431911283,null)], null);
}));

(cljs.core.async.t_cljs$core$async17086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17086");

(cljs.core.async.t_cljs$core$async17086.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17086.
 */
cljs.core.async.__GT_t_cljs$core$async17086 = (function cljs$core$async$__GT_t_cljs$core$async17086(ch,topic_fn,buf_fn,mults,ensure_mult,meta17087){
return (new cljs.core.async.t_cljs$core$async17086(ch,topic_fn,buf_fn,mults,ensure_mult,meta17087));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17077 = arguments.length;
switch (G__17077) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17073_SHARP_){
if(cljs.core.truth_((p1__17073_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17073_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17073_SHARP_.call(null, topic)))){
return p1__17073_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17073_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17086(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14744__auto___19349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_17216){
var state_val_17217 = (state_17216[(1)]);
if((state_val_17217 === (7))){
var inst_17211 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17218_19352 = state_17216__$1;
(statearr_17218_19352[(2)] = inst_17211);

(statearr_17218_19352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (20))){
var state_17216__$1 = state_17216;
var statearr_17219_19353 = state_17216__$1;
(statearr_17219_19353[(2)] = null);

(statearr_17219_19353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (1))){
var state_17216__$1 = state_17216;
var statearr_17220_19354 = state_17216__$1;
(statearr_17220_19354[(2)] = null);

(statearr_17220_19354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (24))){
var inst_17194 = (state_17216[(7)]);
var inst_17203 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17194);
var state_17216__$1 = state_17216;
var statearr_17225_19356 = state_17216__$1;
(statearr_17225_19356[(2)] = inst_17203);

(statearr_17225_19356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (4))){
var inst_17138 = (state_17216[(8)]);
var inst_17138__$1 = (state_17216[(2)]);
var inst_17139 = (inst_17138__$1 == null);
var state_17216__$1 = (function (){var statearr_17226 = state_17216;
(statearr_17226[(8)] = inst_17138__$1);

return statearr_17226;
})();
if(cljs.core.truth_(inst_17139)){
var statearr_17227_19357 = state_17216__$1;
(statearr_17227_19357[(1)] = (5));

} else {
var statearr_17228_19358 = state_17216__$1;
(statearr_17228_19358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (15))){
var inst_17188 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17229_19359 = state_17216__$1;
(statearr_17229_19359[(2)] = inst_17188);

(statearr_17229_19359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (21))){
var inst_17208 = (state_17216[(2)]);
var state_17216__$1 = (function (){var statearr_17230 = state_17216;
(statearr_17230[(9)] = inst_17208);

return statearr_17230;
})();
var statearr_17231_19360 = state_17216__$1;
(statearr_17231_19360[(2)] = null);

(statearr_17231_19360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (13))){
var inst_17166 = (state_17216[(10)]);
var inst_17168 = cljs.core.chunked_seq_QMARK_(inst_17166);
var state_17216__$1 = state_17216;
if(inst_17168){
var statearr_17232_19361 = state_17216__$1;
(statearr_17232_19361[(1)] = (16));

} else {
var statearr_17233_19362 = state_17216__$1;
(statearr_17233_19362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (22))){
var inst_17200 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
if(cljs.core.truth_(inst_17200)){
var statearr_17234_19363 = state_17216__$1;
(statearr_17234_19363[(1)] = (23));

} else {
var statearr_17235_19364 = state_17216__$1;
(statearr_17235_19364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (6))){
var inst_17196 = (state_17216[(11)]);
var inst_17194 = (state_17216[(7)]);
var inst_17138 = (state_17216[(8)]);
var inst_17194__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17138) : topic_fn.call(null, inst_17138));
var inst_17195 = cljs.core.deref(mults);
var inst_17196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17195,inst_17194__$1);
var state_17216__$1 = (function (){var statearr_17236 = state_17216;
(statearr_17236[(11)] = inst_17196__$1);

(statearr_17236[(7)] = inst_17194__$1);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17196__$1)){
var statearr_17237_19365 = state_17216__$1;
(statearr_17237_19365[(1)] = (19));

} else {
var statearr_17238_19366 = state_17216__$1;
(statearr_17238_19366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (25))){
var inst_17205 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17239_19367 = state_17216__$1;
(statearr_17239_19367[(2)] = inst_17205);

(statearr_17239_19367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (17))){
var inst_17166 = (state_17216[(10)]);
var inst_17179 = cljs.core.first(inst_17166);
var inst_17180 = cljs.core.async.muxch_STAR_(inst_17179);
var inst_17181 = cljs.core.async.close_BANG_(inst_17180);
var inst_17182 = cljs.core.next(inst_17166);
var inst_17148 = inst_17182;
var inst_17149 = null;
var inst_17150 = (0);
var inst_17151 = (0);
var state_17216__$1 = (function (){var statearr_17241 = state_17216;
(statearr_17241[(12)] = inst_17151);

(statearr_17241[(13)] = inst_17148);

(statearr_17241[(14)] = inst_17181);

(statearr_17241[(15)] = inst_17150);

(statearr_17241[(16)] = inst_17149);

return statearr_17241;
})();
var statearr_17243_19368 = state_17216__$1;
(statearr_17243_19368[(2)] = null);

(statearr_17243_19368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (3))){
var inst_17213 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17216__$1,inst_17213);
} else {
if((state_val_17217 === (12))){
var inst_17190 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17244_19369 = state_17216__$1;
(statearr_17244_19369[(2)] = inst_17190);

(statearr_17244_19369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (2))){
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17216__$1,(4),ch);
} else {
if((state_val_17217 === (23))){
var state_17216__$1 = state_17216;
var statearr_17245_19370 = state_17216__$1;
(statearr_17245_19370[(2)] = null);

(statearr_17245_19370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (19))){
var inst_17196 = (state_17216[(11)]);
var inst_17138 = (state_17216[(8)]);
var inst_17198 = cljs.core.async.muxch_STAR_(inst_17196);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17216__$1,(22),inst_17198,inst_17138);
} else {
if((state_val_17217 === (11))){
var inst_17148 = (state_17216[(13)]);
var inst_17166 = (state_17216[(10)]);
var inst_17166__$1 = cljs.core.seq(inst_17148);
var state_17216__$1 = (function (){var statearr_17249 = state_17216;
(statearr_17249[(10)] = inst_17166__$1);

return statearr_17249;
})();
if(inst_17166__$1){
var statearr_17250_19371 = state_17216__$1;
(statearr_17250_19371[(1)] = (13));

} else {
var statearr_17251_19372 = state_17216__$1;
(statearr_17251_19372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (9))){
var inst_17192 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17252_19373 = state_17216__$1;
(statearr_17252_19373[(2)] = inst_17192);

(statearr_17252_19373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (5))){
var inst_17145 = cljs.core.deref(mults);
var inst_17146 = cljs.core.vals(inst_17145);
var inst_17147 = cljs.core.seq(inst_17146);
var inst_17148 = inst_17147;
var inst_17149 = null;
var inst_17150 = (0);
var inst_17151 = (0);
var state_17216__$1 = (function (){var statearr_17255 = state_17216;
(statearr_17255[(12)] = inst_17151);

(statearr_17255[(13)] = inst_17148);

(statearr_17255[(15)] = inst_17150);

(statearr_17255[(16)] = inst_17149);

return statearr_17255;
})();
var statearr_17256_19374 = state_17216__$1;
(statearr_17256_19374[(2)] = null);

(statearr_17256_19374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (14))){
var state_17216__$1 = state_17216;
var statearr_17260_19375 = state_17216__$1;
(statearr_17260_19375[(2)] = null);

(statearr_17260_19375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (16))){
var inst_17166 = (state_17216[(10)]);
var inst_17173 = cljs.core.chunk_first(inst_17166);
var inst_17174 = cljs.core.chunk_rest(inst_17166);
var inst_17175 = cljs.core.count(inst_17173);
var inst_17148 = inst_17174;
var inst_17149 = inst_17173;
var inst_17150 = inst_17175;
var inst_17151 = (0);
var state_17216__$1 = (function (){var statearr_17261 = state_17216;
(statearr_17261[(12)] = inst_17151);

(statearr_17261[(13)] = inst_17148);

(statearr_17261[(15)] = inst_17150);

(statearr_17261[(16)] = inst_17149);

return statearr_17261;
})();
var statearr_17262_19376 = state_17216__$1;
(statearr_17262_19376[(2)] = null);

(statearr_17262_19376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (10))){
var inst_17151 = (state_17216[(12)]);
var inst_17148 = (state_17216[(13)]);
var inst_17150 = (state_17216[(15)]);
var inst_17149 = (state_17216[(16)]);
var inst_17159 = cljs.core._nth(inst_17149,inst_17151);
var inst_17160 = cljs.core.async.muxch_STAR_(inst_17159);
var inst_17161 = cljs.core.async.close_BANG_(inst_17160);
var inst_17163 = (inst_17151 + (1));
var tmp17257 = inst_17148;
var tmp17258 = inst_17150;
var tmp17259 = inst_17149;
var inst_17148__$1 = tmp17257;
var inst_17149__$1 = tmp17259;
var inst_17150__$1 = tmp17258;
var inst_17151__$1 = inst_17163;
var state_17216__$1 = (function (){var statearr_17263 = state_17216;
(statearr_17263[(12)] = inst_17151__$1);

(statearr_17263[(13)] = inst_17148__$1);

(statearr_17263[(15)] = inst_17150__$1);

(statearr_17263[(16)] = inst_17149__$1);

(statearr_17263[(17)] = inst_17161);

return statearr_17263;
})();
var statearr_17264_19377 = state_17216__$1;
(statearr_17264_19377[(2)] = null);

(statearr_17264_19377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (18))){
var inst_17185 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17265_19378 = state_17216__$1;
(statearr_17265_19378[(2)] = inst_17185);

(statearr_17265_19378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (8))){
var inst_17151 = (state_17216[(12)]);
var inst_17150 = (state_17216[(15)]);
var inst_17155 = (inst_17151 < inst_17150);
var inst_17156 = inst_17155;
var state_17216__$1 = state_17216;
if(cljs.core.truth_(inst_17156)){
var statearr_17267_19379 = state_17216__$1;
(statearr_17267_19379[(1)] = (10));

} else {
var statearr_17268_19380 = state_17216__$1;
(statearr_17268_19380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_17270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17270[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_17270[(1)] = (1));

return statearr_17270;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_17216){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_17216);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17271){var ex__13572__auto__ = e17271;
var statearr_17274_19381 = state_17216;
(statearr_17274_19381[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_17216[(4)]))){
var statearr_17275_19382 = state_17216;
(statearr_17275_19382[(1)] = cljs.core.first((state_17216[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19383 = state_17216;
state_17216 = G__19383;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_17216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_17216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17279 = f__14745__auto__();
(statearr_17279[(6)] = c__14744__auto___19349);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17289 = arguments.length;
switch (G__17289) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17297 = arguments.length;
switch (G__17297) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17304 = arguments.length;
switch (G__17304) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14744__auto___19411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_17372){
var state_val_17373 = (state_17372[(1)]);
if((state_val_17373 === (7))){
var state_17372__$1 = state_17372;
var statearr_17378_19412 = state_17372__$1;
(statearr_17378_19412[(2)] = null);

(statearr_17378_19412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (1))){
var state_17372__$1 = state_17372;
var statearr_17381_19413 = state_17372__$1;
(statearr_17381_19413[(2)] = null);

(statearr_17381_19413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (4))){
var inst_17321 = (state_17372[(7)]);
var inst_17320 = (state_17372[(8)]);
var inst_17323 = (inst_17321 < inst_17320);
var state_17372__$1 = state_17372;
if(cljs.core.truth_(inst_17323)){
var statearr_17390_19418 = state_17372__$1;
(statearr_17390_19418[(1)] = (6));

} else {
var statearr_17392_19419 = state_17372__$1;
(statearr_17392_19419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (15))){
var inst_17354 = (state_17372[(9)]);
var inst_17361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17354);
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17372__$1,(17),out,inst_17361);
} else {
if((state_val_17373 === (13))){
var inst_17354 = (state_17372[(9)]);
var inst_17354__$1 = (state_17372[(2)]);
var inst_17355 = cljs.core.some(cljs.core.nil_QMARK_,inst_17354__$1);
var state_17372__$1 = (function (){var statearr_17396 = state_17372;
(statearr_17396[(9)] = inst_17354__$1);

return statearr_17396;
})();
if(cljs.core.truth_(inst_17355)){
var statearr_17398_19420 = state_17372__$1;
(statearr_17398_19420[(1)] = (14));

} else {
var statearr_17400_19421 = state_17372__$1;
(statearr_17400_19421[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (6))){
var state_17372__$1 = state_17372;
var statearr_17403_19422 = state_17372__$1;
(statearr_17403_19422[(2)] = null);

(statearr_17403_19422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (17))){
var inst_17363 = (state_17372[(2)]);
var state_17372__$1 = (function (){var statearr_17410 = state_17372;
(statearr_17410[(10)] = inst_17363);

return statearr_17410;
})();
var statearr_17411_19424 = state_17372__$1;
(statearr_17411_19424[(2)] = null);

(statearr_17411_19424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (3))){
var inst_17369 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17372__$1,inst_17369);
} else {
if((state_val_17373 === (12))){
var _ = (function (){var statearr_17416 = state_17372;
(statearr_17416[(4)] = cljs.core.rest((state_17372[(4)])));

return statearr_17416;
})();
var state_17372__$1 = state_17372;
var ex17405 = (state_17372__$1[(2)]);
var statearr_17418_19425 = state_17372__$1;
(statearr_17418_19425[(5)] = ex17405);


if((ex17405 instanceof Object)){
var statearr_17423_19426 = state_17372__$1;
(statearr_17423_19426[(1)] = (11));

(statearr_17423_19426[(5)] = null);

} else {
throw ex17405;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (2))){
var inst_17318 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17320 = cnt;
var inst_17321 = (0);
var state_17372__$1 = (function (){var statearr_17432 = state_17372;
(statearr_17432[(7)] = inst_17321);

(statearr_17432[(11)] = inst_17318);

(statearr_17432[(8)] = inst_17320);

return statearr_17432;
})();
var statearr_17433_19427 = state_17372__$1;
(statearr_17433_19427[(2)] = null);

(statearr_17433_19427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (11))){
var inst_17330 = (state_17372[(2)]);
var inst_17331 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17372__$1 = (function (){var statearr_17434 = state_17372;
(statearr_17434[(12)] = inst_17330);

return statearr_17434;
})();
var statearr_17435_19429 = state_17372__$1;
(statearr_17435_19429[(2)] = inst_17331);

(statearr_17435_19429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (9))){
var inst_17321 = (state_17372[(7)]);
var _ = (function (){var statearr_17436 = state_17372;
(statearr_17436[(4)] = cljs.core.cons((12),(state_17372[(4)])));

return statearr_17436;
})();
var inst_17337 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17321) : chs__$1.call(null, inst_17321));
var inst_17338 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17321) : done.call(null, inst_17321));
var inst_17340 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17337,inst_17338);
var ___$1 = (function (){var statearr_17437 = state_17372;
(statearr_17437[(4)] = cljs.core.rest((state_17372[(4)])));

return statearr_17437;
})();
var state_17372__$1 = state_17372;
var statearr_17438_19430 = state_17372__$1;
(statearr_17438_19430[(2)] = inst_17340);

(statearr_17438_19430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (5))){
var inst_17351 = (state_17372[(2)]);
var state_17372__$1 = (function (){var statearr_17442 = state_17372;
(statearr_17442[(13)] = inst_17351);

return statearr_17442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17372__$1,(13),dchan);
} else {
if((state_val_17373 === (14))){
var inst_17359 = cljs.core.async.close_BANG_(out);
var state_17372__$1 = state_17372;
var statearr_17443_19435 = state_17372__$1;
(statearr_17443_19435[(2)] = inst_17359);

(statearr_17443_19435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (16))){
var inst_17366 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17452_19436 = state_17372__$1;
(statearr_17452_19436[(2)] = inst_17366);

(statearr_17452_19436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (10))){
var inst_17321 = (state_17372[(7)]);
var inst_17343 = (state_17372[(2)]);
var inst_17344 = (inst_17321 + (1));
var inst_17321__$1 = inst_17344;
var state_17372__$1 = (function (){var statearr_17462 = state_17372;
(statearr_17462[(7)] = inst_17321__$1);

(statearr_17462[(14)] = inst_17343);

return statearr_17462;
})();
var statearr_17466_19441 = state_17372__$1;
(statearr_17466_19441[(2)] = null);

(statearr_17466_19441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (8))){
var inst_17349 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17467_19442 = state_17372__$1;
(statearr_17467_19442[(2)] = inst_17349);

(statearr_17467_19442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_17478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17478[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_17478[(1)] = (1));

return statearr_17478;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_17372){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_17372);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17483){var ex__13572__auto__ = e17483;
var statearr_17491_19448 = state_17372;
(statearr_17491_19448[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_17372[(4)]))){
var statearr_17492_19450 = state_17372;
(statearr_17492_19450[(1)] = cljs.core.first((state_17372[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19451 = state_17372;
state_17372 = G__19451;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_17372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_17372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17500 = f__14745__auto__();
(statearr_17500[(6)] = c__14744__auto___19411);

return statearr_17500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17509 = arguments.length;
switch (G__17509) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_17559){
var state_val_17560 = (state_17559[(1)]);
if((state_val_17560 === (7))){
var inst_17533 = (state_17559[(7)]);
var inst_17534 = (state_17559[(8)]);
var inst_17533__$1 = (state_17559[(2)]);
var inst_17534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17533__$1,(0),null);
var inst_17535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17533__$1,(1),null);
var inst_17536 = (inst_17534__$1 == null);
var state_17559__$1 = (function (){var statearr_17563 = state_17559;
(statearr_17563[(7)] = inst_17533__$1);

(statearr_17563[(8)] = inst_17534__$1);

(statearr_17563[(9)] = inst_17535);

return statearr_17563;
})();
if(cljs.core.truth_(inst_17536)){
var statearr_17568_19454 = state_17559__$1;
(statearr_17568_19454[(1)] = (8));

} else {
var statearr_17573_19455 = state_17559__$1;
(statearr_17573_19455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (1))){
var inst_17520 = cljs.core.vec(chs);
var inst_17521 = inst_17520;
var state_17559__$1 = (function (){var statearr_17578 = state_17559;
(statearr_17578[(10)] = inst_17521);

return statearr_17578;
})();
var statearr_17579_19456 = state_17559__$1;
(statearr_17579_19456[(2)] = null);

(statearr_17579_19456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (4))){
var inst_17521 = (state_17559[(10)]);
var state_17559__$1 = state_17559;
return cljs.core.async.ioc_alts_BANG_(state_17559__$1,(7),inst_17521);
} else {
if((state_val_17560 === (6))){
var inst_17555 = (state_17559[(2)]);
var state_17559__$1 = state_17559;
var statearr_17592_19457 = state_17559__$1;
(statearr_17592_19457[(2)] = inst_17555);

(statearr_17592_19457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (3))){
var inst_17557 = (state_17559[(2)]);
var state_17559__$1 = state_17559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17559__$1,inst_17557);
} else {
if((state_val_17560 === (2))){
var inst_17521 = (state_17559[(10)]);
var inst_17523 = cljs.core.count(inst_17521);
var inst_17524 = (inst_17523 > (0));
var state_17559__$1 = state_17559;
if(cljs.core.truth_(inst_17524)){
var statearr_17598_19458 = state_17559__$1;
(statearr_17598_19458[(1)] = (4));

} else {
var statearr_17599_19459 = state_17559__$1;
(statearr_17599_19459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (11))){
var inst_17521 = (state_17559[(10)]);
var inst_17548 = (state_17559[(2)]);
var tmp17594 = inst_17521;
var inst_17521__$1 = tmp17594;
var state_17559__$1 = (function (){var statearr_17600 = state_17559;
(statearr_17600[(10)] = inst_17521__$1);

(statearr_17600[(11)] = inst_17548);

return statearr_17600;
})();
var statearr_17604_19464 = state_17559__$1;
(statearr_17604_19464[(2)] = null);

(statearr_17604_19464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (9))){
var inst_17534 = (state_17559[(8)]);
var state_17559__$1 = state_17559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17559__$1,(11),out,inst_17534);
} else {
if((state_val_17560 === (5))){
var inst_17553 = cljs.core.async.close_BANG_(out);
var state_17559__$1 = state_17559;
var statearr_17610_19467 = state_17559__$1;
(statearr_17610_19467[(2)] = inst_17553);

(statearr_17610_19467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (10))){
var inst_17551 = (state_17559[(2)]);
var state_17559__$1 = state_17559;
var statearr_17614_19468 = state_17559__$1;
(statearr_17614_19468[(2)] = inst_17551);

(statearr_17614_19468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (8))){
var inst_17533 = (state_17559[(7)]);
var inst_17534 = (state_17559[(8)]);
var inst_17521 = (state_17559[(10)]);
var inst_17535 = (state_17559[(9)]);
var inst_17543 = (function (){var cs = inst_17521;
var vec__17529 = inst_17533;
var v = inst_17534;
var c = inst_17535;
return (function (p1__17504_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17504_SHARP_);
});
})();
var inst_17544 = cljs.core.filterv(inst_17543,inst_17521);
var inst_17521__$1 = inst_17544;
var state_17559__$1 = (function (){var statearr_17617 = state_17559;
(statearr_17617[(10)] = inst_17521__$1);

return statearr_17617;
})();
var statearr_17619_19469 = state_17559__$1;
(statearr_17619_19469[(2)] = null);

(statearr_17619_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_17620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17620[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_17620[(1)] = (1));

return statearr_17620;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_17559){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_17559);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17624){var ex__13572__auto__ = e17624;
var statearr_17625_19470 = state_17559;
(statearr_17625_19470[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_17559[(4)]))){
var statearr_17626_19471 = state_17559;
(statearr_17626_19471[(1)] = cljs.core.first((state_17559[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19472 = state_17559;
state_17559 = G__19472;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_17559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_17559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17630 = f__14745__auto__();
(statearr_17630[(6)] = c__14744__auto___19453);

return statearr_17630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17653 = arguments.length;
switch (G__17653) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_17694){
var state_val_17695 = (state_17694[(1)]);
if((state_val_17695 === (7))){
var inst_17666 = (state_17694[(7)]);
var inst_17666__$1 = (state_17694[(2)]);
var inst_17667 = (inst_17666__$1 == null);
var inst_17668 = cljs.core.not(inst_17667);
var state_17694__$1 = (function (){var statearr_17697 = state_17694;
(statearr_17697[(7)] = inst_17666__$1);

return statearr_17697;
})();
if(inst_17668){
var statearr_17698_19480 = state_17694__$1;
(statearr_17698_19480[(1)] = (8));

} else {
var statearr_17699_19481 = state_17694__$1;
(statearr_17699_19481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (1))){
var inst_17660 = (0);
var state_17694__$1 = (function (){var statearr_17700 = state_17694;
(statearr_17700[(8)] = inst_17660);

return statearr_17700;
})();
var statearr_17701_19483 = state_17694__$1;
(statearr_17701_19483[(2)] = null);

(statearr_17701_19483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (4))){
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17694__$1,(7),ch);
} else {
if((state_val_17695 === (6))){
var inst_17689 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
var statearr_17703_19488 = state_17694__$1;
(statearr_17703_19488[(2)] = inst_17689);

(statearr_17703_19488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (3))){
var inst_17691 = (state_17694[(2)]);
var inst_17692 = cljs.core.async.close_BANG_(out);
var state_17694__$1 = (function (){var statearr_17704 = state_17694;
(statearr_17704[(9)] = inst_17691);

return statearr_17704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17694__$1,inst_17692);
} else {
if((state_val_17695 === (2))){
var inst_17660 = (state_17694[(8)]);
var inst_17663 = (inst_17660 < n);
var state_17694__$1 = state_17694;
if(cljs.core.truth_(inst_17663)){
var statearr_17705_19489 = state_17694__$1;
(statearr_17705_19489[(1)] = (4));

} else {
var statearr_17706_19490 = state_17694__$1;
(statearr_17706_19490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (11))){
var inst_17660 = (state_17694[(8)]);
var inst_17675 = (state_17694[(2)]);
var inst_17682 = (inst_17660 + (1));
var inst_17660__$1 = inst_17682;
var state_17694__$1 = (function (){var statearr_17707 = state_17694;
(statearr_17707[(10)] = inst_17675);

(statearr_17707[(8)] = inst_17660__$1);

return statearr_17707;
})();
var statearr_17708_19492 = state_17694__$1;
(statearr_17708_19492[(2)] = null);

(statearr_17708_19492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (9))){
var state_17694__$1 = state_17694;
var statearr_17709_19497 = state_17694__$1;
(statearr_17709_19497[(2)] = null);

(statearr_17709_19497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (5))){
var state_17694__$1 = state_17694;
var statearr_17710_19498 = state_17694__$1;
(statearr_17710_19498[(2)] = null);

(statearr_17710_19498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (10))){
var inst_17686 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
var statearr_17711_19499 = state_17694__$1;
(statearr_17711_19499[(2)] = inst_17686);

(statearr_17711_19499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (8))){
var inst_17666 = (state_17694[(7)]);
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17694__$1,(11),out,inst_17666);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_17712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17712[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_17712[(1)] = (1));

return statearr_17712;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_17694){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_17694);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17713){var ex__13572__auto__ = e17713;
var statearr_17720_19500 = state_17694;
(statearr_17720_19500[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_17694[(4)]))){
var statearr_17721_19501 = state_17694;
(statearr_17721_19501[(1)] = cljs.core.first((state_17694[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19502 = state_17694;
state_17694 = G__19502;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_17694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_17694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17722 = f__14745__auto__();
(statearr_17722[(6)] = c__14744__auto___19477);

return statearr_17722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17739 = (function (f,ch,meta17725,_,fn1,meta17740){
this.f = f;
this.ch = ch;
this.meta17725 = meta17725;
this._ = _;
this.fn1 = fn1;
this.meta17740 = meta17740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17741,meta17740__$1){
var self__ = this;
var _17741__$1 = this;
return (new cljs.core.async.t_cljs$core$async17739(self__.f,self__.ch,self__.meta17725,self__._,self__.fn1,meta17740__$1));
}));

(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17741){
var self__ = this;
var _17741__$1 = this;
return self__.meta17740;
}));

(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17723_SHARP_){
var G__17751 = (((p1__17723_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17723_SHARP_) : self__.f.call(null, p1__17723_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17751) : f1.call(null, G__17751));
});
}));

(cljs.core.async.t_cljs$core$async17739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17725","meta17725",-1299608681,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17724","cljs.core.async/t_cljs$core$async17724",166170505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17740","meta17740",1276490186,null)], null);
}));

(cljs.core.async.t_cljs$core$async17739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17739");

(cljs.core.async.t_cljs$core$async17739.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17739.
 */
cljs.core.async.__GT_t_cljs$core$async17739 = (function cljs$core$async$__GT_t_cljs$core$async17739(f,ch,meta17725,_,fn1,meta17740){
return (new cljs.core.async.t_cljs$core$async17739(f,ch,meta17725,_,fn1,meta17740));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17724 = (function (f,ch,meta17725){
this.f = f;
this.ch = ch;
this.meta17725 = meta17725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17726,meta17725__$1){
var self__ = this;
var _17726__$1 = this;
return (new cljs.core.async.t_cljs$core$async17724(self__.f,self__.ch,meta17725__$1));
}));

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17726){
var self__ = this;
var _17726__$1 = this;
return self__.meta17725;
}));

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17739(self__.f,self__.ch,self__.meta17725,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17756 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17756) : self__.f.call(null, G__17756));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17725","meta17725",-1299608681,null)], null);
}));

(cljs.core.async.t_cljs$core$async17724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17724");

(cljs.core.async.t_cljs$core$async17724.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17724.
 */
cljs.core.async.__GT_t_cljs$core$async17724 = (function cljs$core$async$__GT_t_cljs$core$async17724(f,ch,meta17725){
return (new cljs.core.async.t_cljs$core$async17724(f,ch,meta17725));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17724(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17767 = (function (f,ch,meta17768){
this.f = f;
this.ch = ch;
this.meta17768 = meta17768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17769,meta17768__$1){
var self__ = this;
var _17769__$1 = this;
return (new cljs.core.async.t_cljs$core$async17767(self__.f,self__.ch,meta17768__$1));
}));

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17769){
var self__ = this;
var _17769__$1 = this;
return self__.meta17768;
}));

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17768","meta17768",1108111620,null)], null);
}));

(cljs.core.async.t_cljs$core$async17767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17767");

(cljs.core.async.t_cljs$core$async17767.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17767.
 */
cljs.core.async.__GT_t_cljs$core$async17767 = (function cljs$core$async$__GT_t_cljs$core$async17767(f,ch,meta17768){
return (new cljs.core.async.t_cljs$core$async17767(f,ch,meta17768));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17784 = (function (p,ch,meta17785){
this.p = p;
this.ch = ch;
this.meta17785 = meta17785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17786,meta17785__$1){
var self__ = this;
var _17786__$1 = this;
return (new cljs.core.async.t_cljs$core$async17784(self__.p,self__.ch,meta17785__$1));
}));

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17786){
var self__ = this;
var _17786__$1 = this;
return self__.meta17785;
}));

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17785","meta17785",-364514030,null)], null);
}));

(cljs.core.async.t_cljs$core$async17784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17784");

(cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17784.
 */
cljs.core.async.__GT_t_cljs$core$async17784 = (function cljs$core$async$__GT_t_cljs$core$async17784(p,ch,meta17785){
return (new cljs.core.async.t_cljs$core$async17784(p,ch,meta17785));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17784(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17818 = arguments.length;
switch (G__17818) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_17853){
var state_val_17855 = (state_17853[(1)]);
if((state_val_17855 === (7))){
var inst_17848 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17858_19521 = state_17853__$1;
(statearr_17858_19521[(2)] = inst_17848);

(statearr_17858_19521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (1))){
var state_17853__$1 = state_17853;
var statearr_17864_19524 = state_17853__$1;
(statearr_17864_19524[(2)] = null);

(statearr_17864_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (4))){
var inst_17834 = (state_17853[(7)]);
var inst_17834__$1 = (state_17853[(2)]);
var inst_17835 = (inst_17834__$1 == null);
var state_17853__$1 = (function (){var statearr_17869 = state_17853;
(statearr_17869[(7)] = inst_17834__$1);

return statearr_17869;
})();
if(cljs.core.truth_(inst_17835)){
var statearr_17872_19529 = state_17853__$1;
(statearr_17872_19529[(1)] = (5));

} else {
var statearr_17873_19530 = state_17853__$1;
(statearr_17873_19530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (6))){
var inst_17834 = (state_17853[(7)]);
var inst_17839 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17834) : p.call(null, inst_17834));
var state_17853__$1 = state_17853;
if(cljs.core.truth_(inst_17839)){
var statearr_17875_19531 = state_17853__$1;
(statearr_17875_19531[(1)] = (8));

} else {
var statearr_17876_19535 = state_17853__$1;
(statearr_17876_19535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (3))){
var inst_17850 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17853__$1,inst_17850);
} else {
if((state_val_17855 === (2))){
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17853__$1,(4),ch);
} else {
if((state_val_17855 === (11))){
var inst_17842 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17879_19538 = state_17853__$1;
(statearr_17879_19538[(2)] = inst_17842);

(statearr_17879_19538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (9))){
var state_17853__$1 = state_17853;
var statearr_17883_19539 = state_17853__$1;
(statearr_17883_19539[(2)] = null);

(statearr_17883_19539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (5))){
var inst_17837 = cljs.core.async.close_BANG_(out);
var state_17853__$1 = state_17853;
var statearr_17888_19540 = state_17853__$1;
(statearr_17888_19540[(2)] = inst_17837);

(statearr_17888_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (10))){
var inst_17845 = (state_17853[(2)]);
var state_17853__$1 = (function (){var statearr_17889 = state_17853;
(statearr_17889[(8)] = inst_17845);

return statearr_17889;
})();
var statearr_17890_19541 = state_17853__$1;
(statearr_17890_19541[(2)] = null);

(statearr_17890_19541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (8))){
var inst_17834 = (state_17853[(7)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17853__$1,(11),out,inst_17834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_17898 = [null,null,null,null,null,null,null,null,null];
(statearr_17898[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_17898[(1)] = (1));

return statearr_17898;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_17853){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_17853);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e17908){var ex__13572__auto__ = e17908;
var statearr_17914_19545 = state_17853;
(statearr_17914_19545[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_17853[(4)]))){
var statearr_17918_19546 = state_17853;
(statearr_17918_19546[(1)] = cljs.core.first((state_17853[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19547 = state_17853;
state_17853 = G__19547;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_17853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_17853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_17934 = f__14745__auto__();
(statearr_17934[(6)] = c__14744__auto___19520);

return statearr_17934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17958 = arguments.length;
switch (G__17958) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_18050){
var state_val_18052 = (state_18050[(1)]);
if((state_val_18052 === (7))){
var inst_18042 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18055_19556 = state_18050__$1;
(statearr_18055_19556[(2)] = inst_18042);

(statearr_18055_19556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (20))){
var inst_18003 = (state_18050[(7)]);
var inst_18022 = (state_18050[(2)]);
var inst_18023 = cljs.core.next(inst_18003);
var inst_17982 = inst_18023;
var inst_17983 = null;
var inst_17984 = (0);
var inst_17987 = (0);
var state_18050__$1 = (function (){var statearr_18056 = state_18050;
(statearr_18056[(8)] = inst_17984);

(statearr_18056[(9)] = inst_18022);

(statearr_18056[(10)] = inst_17982);

(statearr_18056[(11)] = inst_17983);

(statearr_18056[(12)] = inst_17987);

return statearr_18056;
})();
var statearr_18057_19558 = state_18050__$1;
(statearr_18057_19558[(2)] = null);

(statearr_18057_19558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (1))){
var state_18050__$1 = state_18050;
var statearr_18061_19559 = state_18050__$1;
(statearr_18061_19559[(2)] = null);

(statearr_18061_19559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (4))){
var inst_17971 = (state_18050[(13)]);
var inst_17971__$1 = (state_18050[(2)]);
var inst_17972 = (inst_17971__$1 == null);
var state_18050__$1 = (function (){var statearr_18063 = state_18050;
(statearr_18063[(13)] = inst_17971__$1);

return statearr_18063;
})();
if(cljs.core.truth_(inst_17972)){
var statearr_18075_19563 = state_18050__$1;
(statearr_18075_19563[(1)] = (5));

} else {
var statearr_18076_19564 = state_18050__$1;
(statearr_18076_19564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (15))){
var state_18050__$1 = state_18050;
var statearr_18085_19565 = state_18050__$1;
(statearr_18085_19565[(2)] = null);

(statearr_18085_19565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (21))){
var state_18050__$1 = state_18050;
var statearr_18086_19566 = state_18050__$1;
(statearr_18086_19566[(2)] = null);

(statearr_18086_19566[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (13))){
var inst_17984 = (state_18050[(8)]);
var inst_17982 = (state_18050[(10)]);
var inst_17983 = (state_18050[(11)]);
var inst_17987 = (state_18050[(12)]);
var inst_17994 = (state_18050[(2)]);
var inst_17996 = (inst_17987 + (1));
var tmp18078 = inst_17984;
var tmp18079 = inst_17982;
var tmp18080 = inst_17983;
var inst_17982__$1 = tmp18079;
var inst_17983__$1 = tmp18080;
var inst_17984__$1 = tmp18078;
var inst_17987__$1 = inst_17996;
var state_18050__$1 = (function (){var statearr_18089 = state_18050;
(statearr_18089[(14)] = inst_17994);

(statearr_18089[(8)] = inst_17984__$1);

(statearr_18089[(10)] = inst_17982__$1);

(statearr_18089[(11)] = inst_17983__$1);

(statearr_18089[(12)] = inst_17987__$1);

return statearr_18089;
})();
var statearr_18092_19567 = state_18050__$1;
(statearr_18092_19567[(2)] = null);

(statearr_18092_19567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (22))){
var state_18050__$1 = state_18050;
var statearr_18093_19572 = state_18050__$1;
(statearr_18093_19572[(2)] = null);

(statearr_18093_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (6))){
var inst_17971 = (state_18050[(13)]);
var inst_17980 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17971) : f.call(null, inst_17971));
var inst_17981 = cljs.core.seq(inst_17980);
var inst_17982 = inst_17981;
var inst_17983 = null;
var inst_17984 = (0);
var inst_17987 = (0);
var state_18050__$1 = (function (){var statearr_18095 = state_18050;
(statearr_18095[(8)] = inst_17984);

(statearr_18095[(10)] = inst_17982);

(statearr_18095[(11)] = inst_17983);

(statearr_18095[(12)] = inst_17987);

return statearr_18095;
})();
var statearr_18103_19574 = state_18050__$1;
(statearr_18103_19574[(2)] = null);

(statearr_18103_19574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (17))){
var inst_18003 = (state_18050[(7)]);
var inst_18012 = cljs.core.chunk_first(inst_18003);
var inst_18014 = cljs.core.chunk_rest(inst_18003);
var inst_18015 = cljs.core.count(inst_18012);
var inst_17982 = inst_18014;
var inst_17983 = inst_18012;
var inst_17984 = inst_18015;
var inst_17987 = (0);
var state_18050__$1 = (function (){var statearr_18108 = state_18050;
(statearr_18108[(8)] = inst_17984);

(statearr_18108[(10)] = inst_17982);

(statearr_18108[(11)] = inst_17983);

(statearr_18108[(12)] = inst_17987);

return statearr_18108;
})();
var statearr_18109_19577 = state_18050__$1;
(statearr_18109_19577[(2)] = null);

(statearr_18109_19577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (3))){
var inst_18044 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18050__$1,inst_18044);
} else {
if((state_val_18052 === (12))){
var inst_18031 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18114_19578 = state_18050__$1;
(statearr_18114_19578[(2)] = inst_18031);

(statearr_18114_19578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (2))){
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18050__$1,(4),in$);
} else {
if((state_val_18052 === (23))){
var inst_18040 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18115_19579 = state_18050__$1;
(statearr_18115_19579[(2)] = inst_18040);

(statearr_18115_19579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (19))){
var inst_18026 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18122_19580 = state_18050__$1;
(statearr_18122_19580[(2)] = inst_18026);

(statearr_18122_19580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (11))){
var inst_17982 = (state_18050[(10)]);
var inst_18003 = (state_18050[(7)]);
var inst_18003__$1 = cljs.core.seq(inst_17982);
var state_18050__$1 = (function (){var statearr_18123 = state_18050;
(statearr_18123[(7)] = inst_18003__$1);

return statearr_18123;
})();
if(inst_18003__$1){
var statearr_18124_19581 = state_18050__$1;
(statearr_18124_19581[(1)] = (14));

} else {
var statearr_18132_19583 = state_18050__$1;
(statearr_18132_19583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (9))){
var inst_18033 = (state_18050[(2)]);
var inst_18035 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18050__$1 = (function (){var statearr_18133 = state_18050;
(statearr_18133[(15)] = inst_18033);

return statearr_18133;
})();
if(cljs.core.truth_(inst_18035)){
var statearr_18134_19584 = state_18050__$1;
(statearr_18134_19584[(1)] = (21));

} else {
var statearr_18135_19585 = state_18050__$1;
(statearr_18135_19585[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (5))){
var inst_17974 = cljs.core.async.close_BANG_(out);
var state_18050__$1 = state_18050;
var statearr_18136_19587 = state_18050__$1;
(statearr_18136_19587[(2)] = inst_17974);

(statearr_18136_19587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (14))){
var inst_18003 = (state_18050[(7)]);
var inst_18009 = cljs.core.chunked_seq_QMARK_(inst_18003);
var state_18050__$1 = state_18050;
if(inst_18009){
var statearr_18138_19588 = state_18050__$1;
(statearr_18138_19588[(1)] = (17));

} else {
var statearr_18139_19592 = state_18050__$1;
(statearr_18139_19592[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (16))){
var inst_18029 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18143_19593 = state_18050__$1;
(statearr_18143_19593[(2)] = inst_18029);

(statearr_18143_19593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18052 === (10))){
var inst_17983 = (state_18050[(11)]);
var inst_17987 = (state_18050[(12)]);
var inst_17992 = cljs.core._nth(inst_17983,inst_17987);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18050__$1,(13),out,inst_17992);
} else {
if((state_val_18052 === (18))){
var inst_18003 = (state_18050[(7)]);
var inst_18020 = cljs.core.first(inst_18003);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18050__$1,(20),out,inst_18020);
} else {
if((state_val_18052 === (8))){
var inst_17984 = (state_18050[(8)]);
var inst_17987 = (state_18050[(12)]);
var inst_17989 = (inst_17987 < inst_17984);
var inst_17990 = inst_17989;
var state_18050__$1 = state_18050;
if(cljs.core.truth_(inst_17990)){
var statearr_18147_19594 = state_18050__$1;
(statearr_18147_19594[(1)] = (10));

} else {
var statearr_18148_19595 = state_18050__$1;
(statearr_18148_19595[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____0 = (function (){
var statearr_18157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18157[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__);

(statearr_18157[(1)] = (1));

return statearr_18157;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____1 = (function (state_18050){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_18050);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e18163){var ex__13572__auto__ = e18163;
var statearr_18164_19596 = state_18050;
(statearr_18164_19596[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_18050[(4)]))){
var statearr_18165_19597 = state_18050;
(statearr_18165_19597[(1)] = cljs.core.first((state_18050[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_18050;
state_18050 = G__19598;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__ = function(state_18050){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____1.call(this,state_18050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13568__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_18167 = f__14745__auto__();
(statearr_18167[(6)] = c__14744__auto__);

return statearr_18167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));

return c__14744__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18171 = arguments.length;
switch (G__18171) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18182 = arguments.length;
switch (G__18182) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18195 = arguments.length;
switch (G__18195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_18223){
var state_val_18224 = (state_18223[(1)]);
if((state_val_18224 === (7))){
var inst_18218 = (state_18223[(2)]);
var state_18223__$1 = state_18223;
var statearr_18232_19607 = state_18223__$1;
(statearr_18232_19607[(2)] = inst_18218);

(statearr_18232_19607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (1))){
var inst_18200 = null;
var state_18223__$1 = (function (){var statearr_18236 = state_18223;
(statearr_18236[(7)] = inst_18200);

return statearr_18236;
})();
var statearr_18237_19608 = state_18223__$1;
(statearr_18237_19608[(2)] = null);

(statearr_18237_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (4))){
var inst_18203 = (state_18223[(8)]);
var inst_18203__$1 = (state_18223[(2)]);
var inst_18204 = (inst_18203__$1 == null);
var inst_18205 = cljs.core.not(inst_18204);
var state_18223__$1 = (function (){var statearr_18241 = state_18223;
(statearr_18241[(8)] = inst_18203__$1);

return statearr_18241;
})();
if(inst_18205){
var statearr_18242_19609 = state_18223__$1;
(statearr_18242_19609[(1)] = (5));

} else {
var statearr_18243_19610 = state_18223__$1;
(statearr_18243_19610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (6))){
var state_18223__$1 = state_18223;
var statearr_18244_19611 = state_18223__$1;
(statearr_18244_19611[(2)] = null);

(statearr_18244_19611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (3))){
var inst_18220 = (state_18223[(2)]);
var inst_18221 = cljs.core.async.close_BANG_(out);
var state_18223__$1 = (function (){var statearr_18245 = state_18223;
(statearr_18245[(9)] = inst_18220);

return statearr_18245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18223__$1,inst_18221);
} else {
if((state_val_18224 === (2))){
var state_18223__$1 = state_18223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18223__$1,(4),ch);
} else {
if((state_val_18224 === (11))){
var inst_18203 = (state_18223[(8)]);
var inst_18212 = (state_18223[(2)]);
var inst_18200 = inst_18203;
var state_18223__$1 = (function (){var statearr_18249 = state_18223;
(statearr_18249[(10)] = inst_18212);

(statearr_18249[(7)] = inst_18200);

return statearr_18249;
})();
var statearr_18250_19613 = state_18223__$1;
(statearr_18250_19613[(2)] = null);

(statearr_18250_19613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (9))){
var inst_18203 = (state_18223[(8)]);
var state_18223__$1 = state_18223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18223__$1,(11),out,inst_18203);
} else {
if((state_val_18224 === (5))){
var inst_18203 = (state_18223[(8)]);
var inst_18200 = (state_18223[(7)]);
var inst_18207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18203,inst_18200);
var state_18223__$1 = state_18223;
if(inst_18207){
var statearr_18252_19614 = state_18223__$1;
(statearr_18252_19614[(1)] = (8));

} else {
var statearr_18253_19615 = state_18223__$1;
(statearr_18253_19615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (10))){
var inst_18215 = (state_18223[(2)]);
var state_18223__$1 = state_18223;
var statearr_18257_19616 = state_18223__$1;
(statearr_18257_19616[(2)] = inst_18215);

(statearr_18257_19616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18224 === (8))){
var inst_18200 = (state_18223[(7)]);
var tmp18251 = inst_18200;
var inst_18200__$1 = tmp18251;
var state_18223__$1 = (function (){var statearr_18258 = state_18223;
(statearr_18258[(7)] = inst_18200__$1);

return statearr_18258;
})();
var statearr_18259_19617 = state_18223__$1;
(statearr_18259_19617[(2)] = null);

(statearr_18259_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_18260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18260[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_18260[(1)] = (1));

return statearr_18260;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_18223){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_18223);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e18261){var ex__13572__auto__ = e18261;
var statearr_18262_19618 = state_18223;
(statearr_18262_19618[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_18223[(4)]))){
var statearr_18263_19619 = state_18223;
(statearr_18263_19619[(1)] = cljs.core.first((state_18223[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19620 = state_18223;
state_18223 = G__19620;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_18223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_18223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_18267 = f__14745__auto__();
(statearr_18267[(6)] = c__14744__auto___19602);

return statearr_18267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18269 = arguments.length;
switch (G__18269) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_18310){
var state_val_18311 = (state_18310[(1)]);
if((state_val_18311 === (7))){
var inst_18306 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
var statearr_18312_19626 = state_18310__$1;
(statearr_18312_19626[(2)] = inst_18306);

(statearr_18312_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (1))){
var inst_18273 = (new Array(n));
var inst_18274 = inst_18273;
var inst_18275 = (0);
var state_18310__$1 = (function (){var statearr_18313 = state_18310;
(statearr_18313[(7)] = inst_18274);

(statearr_18313[(8)] = inst_18275);

return statearr_18313;
})();
var statearr_18314_19628 = state_18310__$1;
(statearr_18314_19628[(2)] = null);

(statearr_18314_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (4))){
var inst_18278 = (state_18310[(9)]);
var inst_18278__$1 = (state_18310[(2)]);
var inst_18279 = (inst_18278__$1 == null);
var inst_18280 = cljs.core.not(inst_18279);
var state_18310__$1 = (function (){var statearr_18315 = state_18310;
(statearr_18315[(9)] = inst_18278__$1);

return statearr_18315;
})();
if(inst_18280){
var statearr_18316_19631 = state_18310__$1;
(statearr_18316_19631[(1)] = (5));

} else {
var statearr_18319_19632 = state_18310__$1;
(statearr_18319_19632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (15))){
var inst_18300 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
var statearr_18320_19635 = state_18310__$1;
(statearr_18320_19635[(2)] = inst_18300);

(statearr_18320_19635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (13))){
var state_18310__$1 = state_18310;
var statearr_18321_19636 = state_18310__$1;
(statearr_18321_19636[(2)] = null);

(statearr_18321_19636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (6))){
var inst_18275 = (state_18310[(8)]);
var inst_18296 = (inst_18275 > (0));
var state_18310__$1 = state_18310;
if(cljs.core.truth_(inst_18296)){
var statearr_18323_19639 = state_18310__$1;
(statearr_18323_19639[(1)] = (12));

} else {
var statearr_18324_19640 = state_18310__$1;
(statearr_18324_19640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (3))){
var inst_18308 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18310__$1,inst_18308);
} else {
if((state_val_18311 === (12))){
var inst_18274 = (state_18310[(7)]);
var inst_18298 = cljs.core.vec(inst_18274);
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18310__$1,(15),out,inst_18298);
} else {
if((state_val_18311 === (2))){
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18310__$1,(4),ch);
} else {
if((state_val_18311 === (11))){
var inst_18290 = (state_18310[(2)]);
var inst_18291 = (new Array(n));
var inst_18274 = inst_18291;
var inst_18275 = (0);
var state_18310__$1 = (function (){var statearr_18329 = state_18310;
(statearr_18329[(10)] = inst_18290);

(statearr_18329[(7)] = inst_18274);

(statearr_18329[(8)] = inst_18275);

return statearr_18329;
})();
var statearr_18330_19641 = state_18310__$1;
(statearr_18330_19641[(2)] = null);

(statearr_18330_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (9))){
var inst_18274 = (state_18310[(7)]);
var inst_18288 = cljs.core.vec(inst_18274);
var state_18310__$1 = state_18310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18310__$1,(11),out,inst_18288);
} else {
if((state_val_18311 === (5))){
var inst_18278 = (state_18310[(9)]);
var inst_18283 = (state_18310[(11)]);
var inst_18274 = (state_18310[(7)]);
var inst_18275 = (state_18310[(8)]);
var inst_18282 = (inst_18274[inst_18275] = inst_18278);
var inst_18283__$1 = (inst_18275 + (1));
var inst_18284 = (inst_18283__$1 < n);
var state_18310__$1 = (function (){var statearr_18331 = state_18310;
(statearr_18331[(11)] = inst_18283__$1);

(statearr_18331[(12)] = inst_18282);

return statearr_18331;
})();
if(cljs.core.truth_(inst_18284)){
var statearr_18332_19645 = state_18310__$1;
(statearr_18332_19645[(1)] = (8));

} else {
var statearr_18333_19646 = state_18310__$1;
(statearr_18333_19646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (14))){
var inst_18303 = (state_18310[(2)]);
var inst_18304 = cljs.core.async.close_BANG_(out);
var state_18310__$1 = (function (){var statearr_18338 = state_18310;
(statearr_18338[(13)] = inst_18303);

return statearr_18338;
})();
var statearr_18339_19655 = state_18310__$1;
(statearr_18339_19655[(2)] = inst_18304);

(statearr_18339_19655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (10))){
var inst_18294 = (state_18310[(2)]);
var state_18310__$1 = state_18310;
var statearr_18340_19656 = state_18310__$1;
(statearr_18340_19656[(2)] = inst_18294);

(statearr_18340_19656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18311 === (8))){
var inst_18283 = (state_18310[(11)]);
var inst_18274 = (state_18310[(7)]);
var tmp18337 = inst_18274;
var inst_18274__$1 = tmp18337;
var inst_18275 = inst_18283;
var state_18310__$1 = (function (){var statearr_18341 = state_18310;
(statearr_18341[(7)] = inst_18274__$1);

(statearr_18341[(8)] = inst_18275);

return statearr_18341;
})();
var statearr_18342_19657 = state_18310__$1;
(statearr_18342_19657[(2)] = null);

(statearr_18342_19657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_18343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18343[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_18343[(1)] = (1));

return statearr_18343;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_18310){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_18310);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e18347){var ex__13572__auto__ = e18347;
var statearr_18348_19659 = state_18310;
(statearr_18348_19659[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_18310[(4)]))){
var statearr_18349_19662 = state_18310;
(statearr_18349_19662[(1)] = cljs.core.first((state_18310[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19668 = state_18310;
state_18310 = G__19668;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_18310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_18310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_18350 = f__14745__auto__();
(statearr_18350[(6)] = c__14744__auto___19623);

return statearr_18350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18357 = arguments.length;
switch (G__18357) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14744__auto___19673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14745__auto__ = (function (){var switch__13567__auto__ = (function (state_18437){
var state_val_18438 = (state_18437[(1)]);
if((state_val_18438 === (7))){
var inst_18433 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18452_19674 = state_18437__$1;
(statearr_18452_19674[(2)] = inst_18433);

(statearr_18452_19674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (1))){
var inst_18362 = [];
var inst_18366 = inst_18362;
var inst_18367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18437__$1 = (function (){var statearr_18459 = state_18437;
(statearr_18459[(7)] = inst_18367);

(statearr_18459[(8)] = inst_18366);

return statearr_18459;
})();
var statearr_18460_19676 = state_18437__$1;
(statearr_18460_19676[(2)] = null);

(statearr_18460_19676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (4))){
var inst_18375 = (state_18437[(9)]);
var inst_18375__$1 = (state_18437[(2)]);
var inst_18380 = (inst_18375__$1 == null);
var inst_18381 = cljs.core.not(inst_18380);
var state_18437__$1 = (function (){var statearr_18461 = state_18437;
(statearr_18461[(9)] = inst_18375__$1);

return statearr_18461;
})();
if(inst_18381){
var statearr_18462_19681 = state_18437__$1;
(statearr_18462_19681[(1)] = (5));

} else {
var statearr_18463_19682 = state_18437__$1;
(statearr_18463_19682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (15))){
var inst_18366 = (state_18437[(8)]);
var inst_18425 = cljs.core.vec(inst_18366);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18437__$1,(18),out,inst_18425);
} else {
if((state_val_18438 === (13))){
var inst_18420 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18464_19683 = state_18437__$1;
(statearr_18464_19683[(2)] = inst_18420);

(statearr_18464_19683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (6))){
var inst_18366 = (state_18437[(8)]);
var inst_18422 = inst_18366.length;
var inst_18423 = (inst_18422 > (0));
var state_18437__$1 = state_18437;
if(cljs.core.truth_(inst_18423)){
var statearr_18465_19684 = state_18437__$1;
(statearr_18465_19684[(1)] = (15));

} else {
var statearr_18466_19685 = state_18437__$1;
(statearr_18466_19685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (17))){
var inst_18430 = (state_18437[(2)]);
var inst_18431 = cljs.core.async.close_BANG_(out);
var state_18437__$1 = (function (){var statearr_18467 = state_18437;
(statearr_18467[(10)] = inst_18430);

return statearr_18467;
})();
var statearr_18468_19689 = state_18437__$1;
(statearr_18468_19689[(2)] = inst_18431);

(statearr_18468_19689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (3))){
var inst_18435 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18437__$1,inst_18435);
} else {
if((state_val_18438 === (12))){
var inst_18366 = (state_18437[(8)]);
var inst_18413 = cljs.core.vec(inst_18366);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18437__$1,(14),out,inst_18413);
} else {
if((state_val_18438 === (2))){
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18437__$1,(4),ch);
} else {
if((state_val_18438 === (11))){
var inst_18386 = (state_18437[(11)]);
var inst_18375 = (state_18437[(9)]);
var inst_18366 = (state_18437[(8)]);
var inst_18410 = inst_18366.push(inst_18375);
var tmp18469 = inst_18366;
var inst_18366__$1 = tmp18469;
var inst_18367 = inst_18386;
var state_18437__$1 = (function (){var statearr_18473 = state_18437;
(statearr_18473[(7)] = inst_18367);

(statearr_18473[(12)] = inst_18410);

(statearr_18473[(8)] = inst_18366__$1);

return statearr_18473;
})();
var statearr_18474_19693 = state_18437__$1;
(statearr_18474_19693[(2)] = null);

(statearr_18474_19693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (9))){
var inst_18367 = (state_18437[(7)]);
var inst_18402 = cljs.core.keyword_identical_QMARK_(inst_18367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18437__$1 = state_18437;
var statearr_18475_19694 = state_18437__$1;
(statearr_18475_19694[(2)] = inst_18402);

(statearr_18475_19694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (5))){
var inst_18367 = (state_18437[(7)]);
var inst_18386 = (state_18437[(11)]);
var inst_18375 = (state_18437[(9)]);
var inst_18390 = (state_18437[(13)]);
var inst_18386__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18375) : f.call(null, inst_18375));
var inst_18390__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18386__$1,inst_18367);
var state_18437__$1 = (function (){var statearr_18476 = state_18437;
(statearr_18476[(11)] = inst_18386__$1);

(statearr_18476[(13)] = inst_18390__$1);

return statearr_18476;
})();
if(inst_18390__$1){
var statearr_18479_19698 = state_18437__$1;
(statearr_18479_19698[(1)] = (8));

} else {
var statearr_18480_19699 = state_18437__$1;
(statearr_18480_19699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (14))){
var inst_18386 = (state_18437[(11)]);
var inst_18375 = (state_18437[(9)]);
var inst_18415 = (state_18437[(2)]);
var inst_18416 = [];
var inst_18417 = inst_18416.push(inst_18375);
var inst_18366 = inst_18416;
var inst_18367 = inst_18386;
var state_18437__$1 = (function (){var statearr_18485 = state_18437;
(statearr_18485[(7)] = inst_18367);

(statearr_18485[(14)] = inst_18417);

(statearr_18485[(15)] = inst_18415);

(statearr_18485[(8)] = inst_18366);

return statearr_18485;
})();
var statearr_18486_19704 = state_18437__$1;
(statearr_18486_19704[(2)] = null);

(statearr_18486_19704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (16))){
var state_18437__$1 = state_18437;
var statearr_18489_19705 = state_18437__$1;
(statearr_18489_19705[(2)] = null);

(statearr_18489_19705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (10))){
var inst_18404 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
if(cljs.core.truth_(inst_18404)){
var statearr_18490_19706 = state_18437__$1;
(statearr_18490_19706[(1)] = (11));

} else {
var statearr_18491_19707 = state_18437__$1;
(statearr_18491_19707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (18))){
var inst_18427 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18492_19708 = state_18437__$1;
(statearr_18492_19708[(2)] = inst_18427);

(statearr_18492_19708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18438 === (8))){
var inst_18390 = (state_18437[(13)]);
var state_18437__$1 = state_18437;
var statearr_18493_19709 = state_18437__$1;
(statearr_18493_19709[(2)] = inst_18390);

(statearr_18493_19709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13568__auto__ = null;
var cljs$core$async$state_machine__13568__auto____0 = (function (){
var statearr_18502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18502[(0)] = cljs$core$async$state_machine__13568__auto__);

(statearr_18502[(1)] = (1));

return statearr_18502;
});
var cljs$core$async$state_machine__13568__auto____1 = (function (state_18437){
while(true){
var ret_value__13570__auto__ = (function (){try{while(true){
var result__13571__auto__ = switch__13567__auto__(state_18437);
if(cljs.core.keyword_identical_QMARK_(result__13571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13571__auto__;
}
break;
}
}catch (e18508){var ex__13572__auto__ = e18508;
var statearr_18513_19714 = state_18437;
(statearr_18513_19714[(2)] = ex__13572__auto__);


if(cljs.core.seq((state_18437[(4)]))){
var statearr_18514_19715 = state_18437;
(statearr_18514_19715[(1)] = cljs.core.first((state_18437[(4)])));

} else {
throw ex__13572__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19716 = state_18437;
state_18437 = G__19716;
continue;
} else {
return ret_value__13570__auto__;
}
break;
}
});
cljs$core$async$state_machine__13568__auto__ = function(state_18437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13568__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13568__auto____1.call(this,state_18437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13568__auto____0;
cljs$core$async$state_machine__13568__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13568__auto____1;
return cljs$core$async$state_machine__13568__auto__;
})()
})();
var state__14746__auto__ = (function (){var statearr_18515 = f__14745__auto__();
(statearr_18515[(6)] = c__14744__auto___19673);

return statearr_18515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14746__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
