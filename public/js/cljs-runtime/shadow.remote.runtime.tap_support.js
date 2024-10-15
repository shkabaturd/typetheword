goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20316,p__20317){
var map__20318 = p__20316;
var map__20318__$1 = cljs.core.__destructure_map(map__20318);
var svc = map__20318__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20318__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20318__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20318__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20319 = p__20317;
var map__20319__$1 = cljs.core.__destructure_map(map__20319);
var msg = map__20319__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20319__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20319__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20319__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20319__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20325,p__20326){
var map__20330 = p__20325;
var map__20330__$1 = cljs.core.__destructure_map(map__20330);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20330__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20331 = p__20326;
var map__20331__$1 = cljs.core.__destructure_map(map__20331);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20335,p__20336){
var map__20341 = p__20335;
var map__20341__$1 = cljs.core.__destructure_map(map__20341);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20341__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20341__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20342 = p__20336;
var map__20342__$1 = cljs.core.__destructure_map(map__20342);
var msg = map__20342__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20342__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20346,tid){
var map__20347 = p__20346;
var map__20347__$1 = cljs.core.__destructure_map(map__20347);
var svc = map__20347__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20347__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20355 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20356 = null;
var count__20357 = (0);
var i__20358 = (0);
while(true){
if((i__20358 < count__20357)){
var vec__20373 = chunk__20356.cljs$core$IIndexed$_nth$arity$2(null, i__20358);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20409 = seq__20355;
var G__20410 = chunk__20356;
var G__20411 = count__20357;
var G__20412 = (i__20358 + (1));
seq__20355 = G__20409;
chunk__20356 = G__20410;
count__20357 = G__20411;
i__20358 = G__20412;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20355);
if(temp__5804__auto__){
var seq__20355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20355__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20355__$1);
var G__20413 = cljs.core.chunk_rest(seq__20355__$1);
var G__20414 = c__5525__auto__;
var G__20415 = cljs.core.count(c__5525__auto__);
var G__20416 = (0);
seq__20355 = G__20413;
chunk__20356 = G__20414;
count__20357 = G__20415;
i__20358 = G__20416;
continue;
} else {
var vec__20377 = cljs.core.first(seq__20355__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20377,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20377,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20420 = cljs.core.next(seq__20355__$1);
var G__20421 = null;
var G__20422 = (0);
var G__20423 = (0);
seq__20355 = G__20420;
chunk__20356 = G__20421;
count__20357 = G__20422;
i__20358 = G__20423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20348_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20348_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20350_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20350_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20351_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20351_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20352_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20352_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20393){
var map__20394 = p__20393;
var map__20394__$1 = cljs.core.__destructure_map(map__20394);
var svc = map__20394__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20394__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
