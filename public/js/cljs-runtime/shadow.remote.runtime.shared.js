goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13719){
var map__13720 = p__13719;
var map__13720__$1 = cljs.core.__destructure_map(map__13720);
var runtime = map__13720__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13991 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13991)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13732 = runtime;
var G__13733 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13991);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13732,G__13733) : shadow.remote.runtime.shared.process.call(null, G__13732,G__13733));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13737,res){
var map__13738 = p__13737;
var map__13738__$1 = cljs.core.__destructure_map(map__13738);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13738__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13739 = res;
var G__13739__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13739,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13739);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13739__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13739__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13768 = arguments.length;
switch (G__13768) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13787,msg,handlers,timeout_after_ms){
var map__13788 = p__13787;
var map__13788__$1 = cljs.core.__destructure_map(map__13788);
var runtime = map__13788__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13788__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14004 = arguments.length;
var i__5727__auto___14005 = (0);
while(true){
if((i__5727__auto___14005 < len__5726__auto___14004)){
args__5732__auto__.push((arguments[i__5727__auto___14005]));

var G__14006 = (i__5727__auto___14005 + (1));
i__5727__auto___14005 = G__14006;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13864,ev,args){
var map__13865 = p__13864;
var map__13865__$1 = cljs.core.__destructure_map(map__13865);
var runtime = map__13865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13866 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13869 = null;
var count__13870 = (0);
var i__13871 = (0);
while(true){
if((i__13871 < count__13870)){
var ext = chunk__13869.cljs$core$IIndexed$_nth$arity$2(null, i__13871);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14014 = seq__13866;
var G__14015 = chunk__13869;
var G__14016 = count__13870;
var G__14017 = (i__13871 + (1));
seq__13866 = G__14014;
chunk__13869 = G__14015;
count__13870 = G__14016;
i__13871 = G__14017;
continue;
} else {
var G__14024 = seq__13866;
var G__14025 = chunk__13869;
var G__14026 = count__13870;
var G__14027 = (i__13871 + (1));
seq__13866 = G__14024;
chunk__13869 = G__14025;
count__13870 = G__14026;
i__13871 = G__14027;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13866);
if(temp__5804__auto__){
var seq__13866__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13866__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13866__$1);
var G__14029 = cljs.core.chunk_rest(seq__13866__$1);
var G__14030 = c__5525__auto__;
var G__14031 = cljs.core.count(c__5525__auto__);
var G__14032 = (0);
seq__13866 = G__14029;
chunk__13869 = G__14030;
count__13870 = G__14031;
i__13871 = G__14032;
continue;
} else {
var ext = cljs.core.first(seq__13866__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14036 = cljs.core.next(seq__13866__$1);
var G__14037 = null;
var G__14038 = (0);
var G__14039 = (0);
seq__13866 = G__14036;
chunk__13869 = G__14037;
count__13870 = G__14038;
i__13871 = G__14039;
continue;
} else {
var G__14040 = cljs.core.next(seq__13866__$1);
var G__14041 = null;
var G__14042 = (0);
var G__14043 = (0);
seq__13866 = G__14040;
chunk__13869 = G__14041;
count__13870 = G__14042;
i__13871 = G__14043;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13856){
var G__13857 = cljs.core.first(seq13856);
var seq13856__$1 = cljs.core.next(seq13856);
var G__13858 = cljs.core.first(seq13856__$1);
var seq13856__$2 = cljs.core.next(seq13856__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13857,G__13858,seq13856__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13887,p__13888){
var map__13892 = p__13887;
var map__13892__$1 = cljs.core.__destructure_map(map__13892);
var runtime = map__13892__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13892__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13893 = p__13888;
var map__13893__$1 = cljs.core.__destructure_map(map__13893);
var msg = map__13893__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13895 = cljs.core.deref(state_ref);
var map__13895__$1 = cljs.core.__destructure_map(map__13895);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13895__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13895__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13896,msg){
var map__13897 = p__13896;
var map__13897__$1 = cljs.core.__destructure_map(map__13897);
var runtime = map__13897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13902,key,p__13903){
var map__13904 = p__13902;
var map__13904__$1 = cljs.core.__destructure_map(map__13904);
var state = map__13904__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13904__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13905 = p__13903;
var map__13905__$1 = cljs.core.__destructure_map(map__13905);
var spec = map__13905__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13905__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13905__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13908,key,spec){
var map__13909 = p__13908;
var map__13909__$1 = cljs.core.__destructure_map(map__13909);
var runtime = map__13909__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14137 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14137 == null)){
} else {
var on_welcome_14157 = temp__5808__auto___14137;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14157.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14157.cljs$core$IFn$_invoke$arity$0() : on_welcome_14157.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13910_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13910_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13911_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13911_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13912_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13912_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13913_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13913_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13914_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13914_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13920,key){
var map__13921 = p__13920;
var map__13921__$1 = cljs.core.__destructure_map(map__13921);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13922,msg){
var map__13924 = p__13922;
var map__13924__$1 = cljs.core.__destructure_map(map__13924);
var runtime = map__13924__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13948,p__13949){
var map__13950 = p__13948;
var map__13950__$1 = cljs.core.__destructure_map(map__13950);
var runtime = map__13950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13951 = p__13949;
var map__13951__$1 = cljs.core.__destructure_map(map__13951);
var msg = map__13951__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13952 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13954 = null;
var count__13955 = (0);
var i__13956 = (0);
while(true){
if((i__13956 < count__13955)){
var map__13972 = chunk__13954.cljs$core$IIndexed$_nth$arity$2(null, i__13956);
var map__13972__$1 = cljs.core.__destructure_map(map__13972);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14291 = seq__13952;
var G__14292 = chunk__13954;
var G__14293 = count__13955;
var G__14294 = (i__13956 + (1));
seq__13952 = G__14291;
chunk__13954 = G__14292;
count__13955 = G__14293;
i__13956 = G__14294;
continue;
} else {
var G__14295 = seq__13952;
var G__14296 = chunk__13954;
var G__14297 = count__13955;
var G__14298 = (i__13956 + (1));
seq__13952 = G__14295;
chunk__13954 = G__14296;
count__13955 = G__14297;
i__13956 = G__14298;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13952);
if(temp__5804__auto__){
var seq__13952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13952__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13952__$1);
var G__14299 = cljs.core.chunk_rest(seq__13952__$1);
var G__14300 = c__5525__auto__;
var G__14301 = cljs.core.count(c__5525__auto__);
var G__14302 = (0);
seq__13952 = G__14299;
chunk__13954 = G__14300;
count__13955 = G__14301;
i__13956 = G__14302;
continue;
} else {
var map__13984 = cljs.core.first(seq__13952__$1);
var map__13984__$1 = cljs.core.__destructure_map(map__13984);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14303 = cljs.core.next(seq__13952__$1);
var G__14304 = null;
var G__14305 = (0);
var G__14306 = (0);
seq__13952 = G__14303;
chunk__13954 = G__14304;
count__13955 = G__14305;
i__13956 = G__14306;
continue;
} else {
var G__14307 = cljs.core.next(seq__13952__$1);
var G__14308 = null;
var G__14309 = (0);
var G__14310 = (0);
seq__13952 = G__14307;
chunk__13954 = G__14308;
count__13955 = G__14309;
i__13956 = G__14310;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
