goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15206 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15206(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15211 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15211(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13636 = coll;
var G__13637 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13636,G__13637) : shadow.dom.lazy_native_coll_seq.call(null, G__13636,G__13637));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13674 = arguments.length;
switch (G__13674) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13681 = arguments.length;
switch (G__13681) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13695 = arguments.length;
switch (G__13695) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13701 = arguments.length;
switch (G__13701) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13707 = arguments.length;
switch (G__13707) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13722 = arguments.length;
switch (G__13722) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e13736){if((e13736 instanceof Object)){
var e = e13736;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13736;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13743 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13744 = null;
var count__13745 = (0);
var i__13746 = (0);
while(true){
if((i__13746 < count__13745)){
var el = chunk__13744.cljs$core$IIndexed$_nth$arity$2(null, i__13746);
var handler_15268__$1 = ((function (seq__13743,chunk__13744,count__13745,i__13746,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13743,chunk__13744,count__13745,i__13746,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15268__$1);


var G__15272 = seq__13743;
var G__15273 = chunk__13744;
var G__15274 = count__13745;
var G__15275 = (i__13746 + (1));
seq__13743 = G__15272;
chunk__13744 = G__15273;
count__13745 = G__15274;
i__13746 = G__15275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13743);
if(temp__5804__auto__){
var seq__13743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13743__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13743__$1);
var G__15276 = cljs.core.chunk_rest(seq__13743__$1);
var G__15277 = c__5525__auto__;
var G__15278 = cljs.core.count(c__5525__auto__);
var G__15279 = (0);
seq__13743 = G__15276;
chunk__13744 = G__15277;
count__13745 = G__15278;
i__13746 = G__15279;
continue;
} else {
var el = cljs.core.first(seq__13743__$1);
var handler_15281__$1 = ((function (seq__13743,chunk__13744,count__13745,i__13746,el,seq__13743__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13743,chunk__13744,count__13745,i__13746,el,seq__13743__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15281__$1);


var G__15282 = cljs.core.next(seq__13743__$1);
var G__15283 = null;
var G__15284 = (0);
var G__15285 = (0);
seq__13743 = G__15282;
chunk__13744 = G__15283;
count__13745 = G__15284;
i__13746 = G__15285;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13752 = arguments.length;
switch (G__13752) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13762 = cljs.core.seq(events);
var chunk__13763 = null;
var count__13765 = (0);
var i__13766 = (0);
while(true){
if((i__13766 < count__13765)){
var vec__13790 = chunk__13763.cljs$core$IIndexed$_nth$arity$2(null, i__13766);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15292 = seq__13762;
var G__15293 = chunk__13763;
var G__15294 = count__13765;
var G__15295 = (i__13766 + (1));
seq__13762 = G__15292;
chunk__13763 = G__15293;
count__13765 = G__15294;
i__13766 = G__15295;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13762);
if(temp__5804__auto__){
var seq__13762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13762__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13762__$1);
var G__15297 = cljs.core.chunk_rest(seq__13762__$1);
var G__15298 = c__5525__auto__;
var G__15299 = cljs.core.count(c__5525__auto__);
var G__15300 = (0);
seq__13762 = G__15297;
chunk__13763 = G__15298;
count__13765 = G__15299;
i__13766 = G__15300;
continue;
} else {
var vec__13793 = cljs.core.first(seq__13762__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13793,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15302 = cljs.core.next(seq__13762__$1);
var G__15303 = null;
var G__15304 = (0);
var G__15305 = (0);
seq__13762 = G__15302;
chunk__13763 = G__15303;
count__13765 = G__15304;
i__13766 = G__15305;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13798 = cljs.core.seq(styles);
var chunk__13799 = null;
var count__13800 = (0);
var i__13801 = (0);
while(true){
if((i__13801 < count__13800)){
var vec__13819 = chunk__13799.cljs$core$IIndexed$_nth$arity$2(null, i__13801);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15311 = seq__13798;
var G__15312 = chunk__13799;
var G__15313 = count__13800;
var G__15314 = (i__13801 + (1));
seq__13798 = G__15311;
chunk__13799 = G__15312;
count__13800 = G__15313;
i__13801 = G__15314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13798);
if(temp__5804__auto__){
var seq__13798__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13798__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13798__$1);
var G__15317 = cljs.core.chunk_rest(seq__13798__$1);
var G__15318 = c__5525__auto__;
var G__15319 = cljs.core.count(c__5525__auto__);
var G__15320 = (0);
seq__13798 = G__15317;
chunk__13799 = G__15318;
count__13800 = G__15319;
i__13801 = G__15320;
continue;
} else {
var vec__13822 = cljs.core.first(seq__13798__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15322 = cljs.core.next(seq__13798__$1);
var G__15323 = null;
var G__15324 = (0);
var G__15325 = (0);
seq__13798 = G__15322;
chunk__13799 = G__15323;
count__13800 = G__15324;
i__13801 = G__15325;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13839_15326 = key;
var G__13839_15327__$1 = (((G__13839_15326 instanceof cljs.core.Keyword))?G__13839_15326.fqn:null);
switch (G__13839_15327__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15331 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15331,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15331,"aria-");
}
})())){
el.setAttribute(ks_15331,value);
} else {
(el[ks_15331] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13997){
var map__13998 = p__13997;
var map__13998__$1 = cljs.core.__destructure_map(map__13998);
var props = map__13998__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14000 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14003 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14003,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14003;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14009 = arguments.length;
switch (G__14009) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14082){
var vec__14083 = p__14082;
var seq__14084 = cljs.core.seq(vec__14083);
var first__14085 = cljs.core.first(seq__14084);
var seq__14084__$1 = cljs.core.next(seq__14084);
var nn = first__14085;
var first__14085__$1 = cljs.core.first(seq__14084__$1);
var seq__14084__$2 = cljs.core.next(seq__14084__$1);
var np = first__14085__$1;
var nc = seq__14084__$2;
var node = vec__14083;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14097 = nn;
var G__14098 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14097,G__14098) : create_fn.call(null, G__14097,G__14098));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14101 = nn;
var G__14102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14101,G__14102) : create_fn.call(null, G__14101,G__14102));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14207 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(1),null);
var seq__14219_15363 = cljs.core.seq(node_children);
var chunk__14220_15364 = null;
var count__14221_15365 = (0);
var i__14222_15366 = (0);
while(true){
if((i__14222_15366 < count__14221_15365)){
var child_struct_15367 = chunk__14220_15364.cljs$core$IIndexed$_nth$arity$2(null, i__14222_15366);
var children_15368 = shadow.dom.dom_node(child_struct_15367);
if(cljs.core.seq_QMARK_(children_15368)){
var seq__14341_15369 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15368));
var chunk__14343_15370 = null;
var count__14344_15371 = (0);
var i__14345_15372 = (0);
while(true){
if((i__14345_15372 < count__14344_15371)){
var child_15377 = chunk__14343_15370.cljs$core$IIndexed$_nth$arity$2(null, i__14345_15372);
if(cljs.core.truth_(child_15377)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15377);


var G__15378 = seq__14341_15369;
var G__15379 = chunk__14343_15370;
var G__15380 = count__14344_15371;
var G__15381 = (i__14345_15372 + (1));
seq__14341_15369 = G__15378;
chunk__14343_15370 = G__15379;
count__14344_15371 = G__15380;
i__14345_15372 = G__15381;
continue;
} else {
var G__15382 = seq__14341_15369;
var G__15383 = chunk__14343_15370;
var G__15384 = count__14344_15371;
var G__15385 = (i__14345_15372 + (1));
seq__14341_15369 = G__15382;
chunk__14343_15370 = G__15383;
count__14344_15371 = G__15384;
i__14345_15372 = G__15385;
continue;
}
} else {
var temp__5804__auto___15386 = cljs.core.seq(seq__14341_15369);
if(temp__5804__auto___15386){
var seq__14341_15387__$1 = temp__5804__auto___15386;
if(cljs.core.chunked_seq_QMARK_(seq__14341_15387__$1)){
var c__5525__auto___15388 = cljs.core.chunk_first(seq__14341_15387__$1);
var G__15389 = cljs.core.chunk_rest(seq__14341_15387__$1);
var G__15390 = c__5525__auto___15388;
var G__15391 = cljs.core.count(c__5525__auto___15388);
var G__15392 = (0);
seq__14341_15369 = G__15389;
chunk__14343_15370 = G__15390;
count__14344_15371 = G__15391;
i__14345_15372 = G__15392;
continue;
} else {
var child_15393 = cljs.core.first(seq__14341_15387__$1);
if(cljs.core.truth_(child_15393)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15393);


var G__15394 = cljs.core.next(seq__14341_15387__$1);
var G__15395 = null;
var G__15396 = (0);
var G__15397 = (0);
seq__14341_15369 = G__15394;
chunk__14343_15370 = G__15395;
count__14344_15371 = G__15396;
i__14345_15372 = G__15397;
continue;
} else {
var G__15398 = cljs.core.next(seq__14341_15387__$1);
var G__15399 = null;
var G__15400 = (0);
var G__15401 = (0);
seq__14341_15369 = G__15398;
chunk__14343_15370 = G__15399;
count__14344_15371 = G__15400;
i__14345_15372 = G__15401;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15368);
}


var G__15403 = seq__14219_15363;
var G__15404 = chunk__14220_15364;
var G__15405 = count__14221_15365;
var G__15406 = (i__14222_15366 + (1));
seq__14219_15363 = G__15403;
chunk__14220_15364 = G__15404;
count__14221_15365 = G__15405;
i__14222_15366 = G__15406;
continue;
} else {
var temp__5804__auto___15408 = cljs.core.seq(seq__14219_15363);
if(temp__5804__auto___15408){
var seq__14219_15410__$1 = temp__5804__auto___15408;
if(cljs.core.chunked_seq_QMARK_(seq__14219_15410__$1)){
var c__5525__auto___15413 = cljs.core.chunk_first(seq__14219_15410__$1);
var G__15415 = cljs.core.chunk_rest(seq__14219_15410__$1);
var G__15416 = c__5525__auto___15413;
var G__15418 = cljs.core.count(c__5525__auto___15413);
var G__15419 = (0);
seq__14219_15363 = G__15415;
chunk__14220_15364 = G__15416;
count__14221_15365 = G__15418;
i__14222_15366 = G__15419;
continue;
} else {
var child_struct_15421 = cljs.core.first(seq__14219_15410__$1);
var children_15422 = shadow.dom.dom_node(child_struct_15421);
if(cljs.core.seq_QMARK_(children_15422)){
var seq__14362_15423 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15422));
var chunk__14364_15424 = null;
var count__14365_15425 = (0);
var i__14366_15426 = (0);
while(true){
if((i__14366_15426 < count__14365_15425)){
var child_15427 = chunk__14364_15424.cljs$core$IIndexed$_nth$arity$2(null, i__14366_15426);
if(cljs.core.truth_(child_15427)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15427);


var G__15429 = seq__14362_15423;
var G__15430 = chunk__14364_15424;
var G__15431 = count__14365_15425;
var G__15432 = (i__14366_15426 + (1));
seq__14362_15423 = G__15429;
chunk__14364_15424 = G__15430;
count__14365_15425 = G__15431;
i__14366_15426 = G__15432;
continue;
} else {
var G__15433 = seq__14362_15423;
var G__15434 = chunk__14364_15424;
var G__15435 = count__14365_15425;
var G__15436 = (i__14366_15426 + (1));
seq__14362_15423 = G__15433;
chunk__14364_15424 = G__15434;
count__14365_15425 = G__15435;
i__14366_15426 = G__15436;
continue;
}
} else {
var temp__5804__auto___15437__$1 = cljs.core.seq(seq__14362_15423);
if(temp__5804__auto___15437__$1){
var seq__14362_15439__$1 = temp__5804__auto___15437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14362_15439__$1)){
var c__5525__auto___15443 = cljs.core.chunk_first(seq__14362_15439__$1);
var G__15444 = cljs.core.chunk_rest(seq__14362_15439__$1);
var G__15445 = c__5525__auto___15443;
var G__15446 = cljs.core.count(c__5525__auto___15443);
var G__15447 = (0);
seq__14362_15423 = G__15444;
chunk__14364_15424 = G__15445;
count__14365_15425 = G__15446;
i__14366_15426 = G__15447;
continue;
} else {
var child_15450 = cljs.core.first(seq__14362_15439__$1);
if(cljs.core.truth_(child_15450)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15450);


var G__15454 = cljs.core.next(seq__14362_15439__$1);
var G__15455 = null;
var G__15456 = (0);
var G__15457 = (0);
seq__14362_15423 = G__15454;
chunk__14364_15424 = G__15455;
count__14365_15425 = G__15456;
i__14366_15426 = G__15457;
continue;
} else {
var G__15460 = cljs.core.next(seq__14362_15439__$1);
var G__15461 = null;
var G__15462 = (0);
var G__15463 = (0);
seq__14362_15423 = G__15460;
chunk__14364_15424 = G__15461;
count__14365_15425 = G__15462;
i__14366_15426 = G__15463;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15422);
}


var G__15465 = cljs.core.next(seq__14219_15410__$1);
var G__15466 = null;
var G__15467 = (0);
var G__15468 = (0);
seq__14219_15363 = G__15465;
chunk__14220_15364 = G__15466;
count__14221_15365 = G__15467;
i__14222_15366 = G__15468;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14485 = cljs.core.seq(node);
var chunk__14486 = null;
var count__14487 = (0);
var i__14488 = (0);
while(true){
if((i__14488 < count__14487)){
var n = chunk__14486.cljs$core$IIndexed$_nth$arity$2(null, i__14488);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15477 = seq__14485;
var G__15478 = chunk__14486;
var G__15479 = count__14487;
var G__15480 = (i__14488 + (1));
seq__14485 = G__15477;
chunk__14486 = G__15478;
count__14487 = G__15479;
i__14488 = G__15480;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14485);
if(temp__5804__auto__){
var seq__14485__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14485__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14485__$1);
var G__15481 = cljs.core.chunk_rest(seq__14485__$1);
var G__15482 = c__5525__auto__;
var G__15483 = cljs.core.count(c__5525__auto__);
var G__15484 = (0);
seq__14485 = G__15481;
chunk__14486 = G__15482;
count__14487 = G__15483;
i__14488 = G__15484;
continue;
} else {
var n = cljs.core.first(seq__14485__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15488 = cljs.core.next(seq__14485__$1);
var G__15490 = null;
var G__15491 = (0);
var G__15492 = (0);
seq__14485 = G__15488;
chunk__14486 = G__15490;
count__14487 = G__15491;
i__14488 = G__15492;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14511 = arguments.length;
switch (G__14511) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14536 = arguments.length;
switch (G__14536) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14551 = arguments.length;
switch (G__14551) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15525 = arguments.length;
var i__5727__auto___15526 = (0);
while(true){
if((i__5727__auto___15526 < len__5726__auto___15525)){
args__5732__auto__.push((arguments[i__5727__auto___15526]));

var G__15527 = (i__5727__auto___15526 + (1));
i__5727__auto___15526 = G__15527;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14573_15529 = cljs.core.seq(nodes);
var chunk__14574_15530 = null;
var count__14575_15531 = (0);
var i__14576_15532 = (0);
while(true){
if((i__14576_15532 < count__14575_15531)){
var node_15533 = chunk__14574_15530.cljs$core$IIndexed$_nth$arity$2(null, i__14576_15532);
fragment.appendChild(shadow.dom._to_dom(node_15533));


var G__15537 = seq__14573_15529;
var G__15538 = chunk__14574_15530;
var G__15539 = count__14575_15531;
var G__15540 = (i__14576_15532 + (1));
seq__14573_15529 = G__15537;
chunk__14574_15530 = G__15538;
count__14575_15531 = G__15539;
i__14576_15532 = G__15540;
continue;
} else {
var temp__5804__auto___15541 = cljs.core.seq(seq__14573_15529);
if(temp__5804__auto___15541){
var seq__14573_15542__$1 = temp__5804__auto___15541;
if(cljs.core.chunked_seq_QMARK_(seq__14573_15542__$1)){
var c__5525__auto___15543 = cljs.core.chunk_first(seq__14573_15542__$1);
var G__15544 = cljs.core.chunk_rest(seq__14573_15542__$1);
var G__15545 = c__5525__auto___15543;
var G__15546 = cljs.core.count(c__5525__auto___15543);
var G__15547 = (0);
seq__14573_15529 = G__15544;
chunk__14574_15530 = G__15545;
count__14575_15531 = G__15546;
i__14576_15532 = G__15547;
continue;
} else {
var node_15549 = cljs.core.first(seq__14573_15542__$1);
fragment.appendChild(shadow.dom._to_dom(node_15549));


var G__15552 = cljs.core.next(seq__14573_15542__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__14573_15529 = G__15552;
chunk__14574_15530 = G__15553;
count__14575_15531 = G__15554;
i__14576_15532 = G__15555;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14569){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14569));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14606_15559 = cljs.core.seq(scripts);
var chunk__14607_15560 = null;
var count__14608_15561 = (0);
var i__14609_15562 = (0);
while(true){
if((i__14609_15562 < count__14608_15561)){
var vec__14626_15563 = chunk__14607_15560.cljs$core$IIndexed$_nth$arity$2(null, i__14609_15562);
var script_tag_15564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626_15563,(0),null);
var script_body_15565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626_15563,(1),null);
eval(script_body_15565);


var G__15567 = seq__14606_15559;
var G__15568 = chunk__14607_15560;
var G__15569 = count__14608_15561;
var G__15570 = (i__14609_15562 + (1));
seq__14606_15559 = G__15567;
chunk__14607_15560 = G__15568;
count__14608_15561 = G__15569;
i__14609_15562 = G__15570;
continue;
} else {
var temp__5804__auto___15572 = cljs.core.seq(seq__14606_15559);
if(temp__5804__auto___15572){
var seq__14606_15573__$1 = temp__5804__auto___15572;
if(cljs.core.chunked_seq_QMARK_(seq__14606_15573__$1)){
var c__5525__auto___15574 = cljs.core.chunk_first(seq__14606_15573__$1);
var G__15577 = cljs.core.chunk_rest(seq__14606_15573__$1);
var G__15578 = c__5525__auto___15574;
var G__15579 = cljs.core.count(c__5525__auto___15574);
var G__15580 = (0);
seq__14606_15559 = G__15577;
chunk__14607_15560 = G__15578;
count__14608_15561 = G__15579;
i__14609_15562 = G__15580;
continue;
} else {
var vec__14637_15583 = cljs.core.first(seq__14606_15573__$1);
var script_tag_15584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14637_15583,(0),null);
var script_body_15585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14637_15583,(1),null);
eval(script_body_15585);


var G__15587 = cljs.core.next(seq__14606_15573__$1);
var G__15588 = null;
var G__15589 = (0);
var G__15590 = (0);
seq__14606_15559 = G__15587;
chunk__14607_15560 = G__15588;
count__14608_15561 = G__15589;
i__14609_15562 = G__15590;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14641){
var vec__14645 = p__14641;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14655 = arguments.length;
switch (G__14655) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14685 = cljs.core.seq(style_keys);
var chunk__14686 = null;
var count__14687 = (0);
var i__14688 = (0);
while(true){
if((i__14688 < count__14687)){
var it = chunk__14686.cljs$core$IIndexed$_nth$arity$2(null, i__14688);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15644 = seq__14685;
var G__15645 = chunk__14686;
var G__15646 = count__14687;
var G__15647 = (i__14688 + (1));
seq__14685 = G__15644;
chunk__14686 = G__15645;
count__14687 = G__15646;
i__14688 = G__15647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14685);
if(temp__5804__auto__){
var seq__14685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14685__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14685__$1);
var G__15648 = cljs.core.chunk_rest(seq__14685__$1);
var G__15649 = c__5525__auto__;
var G__15650 = cljs.core.count(c__5525__auto__);
var G__15651 = (0);
seq__14685 = G__15648;
chunk__14686 = G__15649;
count__14687 = G__15650;
i__14688 = G__15651;
continue;
} else {
var it = cljs.core.first(seq__14685__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15654 = cljs.core.next(seq__14685__$1);
var G__15655 = null;
var G__15656 = (0);
var G__15657 = (0);
seq__14685 = G__15654;
chunk__14686 = G__15655;
count__14687 = G__15656;
i__14688 = G__15657;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14719,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14790 = k14719;
var G__14790__$1 = (((G__14790 instanceof cljs.core.Keyword))?G__14790.fqn:null);
switch (G__14790__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14719,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14812){
var vec__14817 = p__14812;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14718){
var self__ = this;
var G__14718__$1 = this;
return (new cljs.core.RecordIter((0),G__14718__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14720,other14721){
var self__ = this;
var this14720__$1 = this;
return (((!((other14721 == null)))) && ((((this14720__$1.constructor === other14721.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.x,other14721.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.y,other14721.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.__extmap,other14721.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14719){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14841 = k14719;
var G__14841__$1 = (((G__14841 instanceof cljs.core.Keyword))?G__14841.fqn:null);
switch (G__14841__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14719);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14718){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14850 = cljs.core.keyword_identical_QMARK_;
var expr__14851 = k__5309__auto__;
if(cljs.core.truth_((pred__14850.cljs$core$IFn$_invoke$arity$2 ? pred__14850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14851) : pred__14850.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__14851)))){
return (new shadow.dom.Coordinate(G__14718,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14850.cljs$core$IFn$_invoke$arity$2 ? pred__14850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14851) : pred__14850.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__14851)))){
return (new shadow.dom.Coordinate(self__.x,G__14718,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14718),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14718){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14718,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14767){
var extmap__5342__auto__ = (function (){var G__14876 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14767,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14767)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14876);
} else {
return G__14876;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14767),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14767),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14890,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14906 = k14890;
var G__14906__$1 = (((G__14906 instanceof cljs.core.Keyword))?G__14906.fqn:null);
switch (G__14906__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14890,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14907){
var vec__14910 = p__14907;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14889){
var self__ = this;
var G__14889__$1 = this;
return (new cljs.core.RecordIter((0),G__14889__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14892,other14895){
var self__ = this;
var this14892__$1 = this;
return (((!((other14895 == null)))) && ((((this14892__$1.constructor === other14895.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14892__$1.w,other14895.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14892__$1.h,other14895.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14892__$1.__extmap,other14895.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14890){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14933 = k14890;
var G__14933__$1 = (((G__14933 instanceof cljs.core.Keyword))?G__14933.fqn:null);
switch (G__14933__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14890);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14889){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14934 = cljs.core.keyword_identical_QMARK_;
var expr__14935 = k__5309__auto__;
if(cljs.core.truth_((pred__14934.cljs$core$IFn$_invoke$arity$2 ? pred__14934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14935) : pred__14934.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__14935)))){
return (new shadow.dom.Size(G__14889,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14934.cljs$core$IFn$_invoke$arity$2 ? pred__14934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14935) : pred__14934.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__14935)))){
return (new shadow.dom.Size(self__.w,G__14889,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14889),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14889){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14889,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14899){
var extmap__5342__auto__ = (function (){var G__14951 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14899,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14899)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14951);
} else {
return G__14951;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14899),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14899),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15775 = (i + (1));
var G__15776 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15775;
ret = G__15776;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14974){
var vec__14975 = p__14974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14986 = arguments.length;
switch (G__14986) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15808 = ps;
var G__15809 = (i + (1));
el__$1 = G__15808;
i = G__15809;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15022 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15027_15821 = cljs.core.seq(props);
var chunk__15028_15822 = null;
var count__15029_15823 = (0);
var i__15030_15824 = (0);
while(true){
if((i__15030_15824 < count__15029_15823)){
var vec__15046_15826 = chunk__15028_15822.cljs$core$IIndexed$_nth$arity$2(null, i__15030_15824);
var k_15827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15046_15826,(0),null);
var v_15828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15046_15826,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15827);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15827),v_15828);


var G__15830 = seq__15027_15821;
var G__15831 = chunk__15028_15822;
var G__15832 = count__15029_15823;
var G__15833 = (i__15030_15824 + (1));
seq__15027_15821 = G__15830;
chunk__15028_15822 = G__15831;
count__15029_15823 = G__15832;
i__15030_15824 = G__15833;
continue;
} else {
var temp__5804__auto___15834 = cljs.core.seq(seq__15027_15821);
if(temp__5804__auto___15834){
var seq__15027_15835__$1 = temp__5804__auto___15834;
if(cljs.core.chunked_seq_QMARK_(seq__15027_15835__$1)){
var c__5525__auto___15837 = cljs.core.chunk_first(seq__15027_15835__$1);
var G__15839 = cljs.core.chunk_rest(seq__15027_15835__$1);
var G__15840 = c__5525__auto___15837;
var G__15841 = cljs.core.count(c__5525__auto___15837);
var G__15842 = (0);
seq__15027_15821 = G__15839;
chunk__15028_15822 = G__15840;
count__15029_15823 = G__15841;
i__15030_15824 = G__15842;
continue;
} else {
var vec__15051_15845 = cljs.core.first(seq__15027_15835__$1);
var k_15846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051_15845,(0),null);
var v_15847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051_15845,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15846);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15846),v_15847);


var G__15852 = cljs.core.next(seq__15027_15835__$1);
var G__15853 = null;
var G__15854 = (0);
var G__15855 = (0);
seq__15027_15821 = G__15852;
chunk__15028_15822 = G__15853;
count__15029_15823 = G__15854;
i__15030_15824 = G__15855;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15067 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15067,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15067,(1),null);
var seq__15071_15861 = cljs.core.seq(node_children);
var chunk__15073_15862 = null;
var count__15074_15863 = (0);
var i__15075_15864 = (0);
while(true){
if((i__15075_15864 < count__15074_15863)){
var child_struct_15865 = chunk__15073_15862.cljs$core$IIndexed$_nth$arity$2(null, i__15075_15864);
if((!((child_struct_15865 == null)))){
if(typeof child_struct_15865 === 'string'){
var text_15867 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15867),child_struct_15865].join(''));
} else {
var children_15868 = shadow.dom.svg_node(child_struct_15865);
if(cljs.core.seq_QMARK_(children_15868)){
var seq__15130_15869 = cljs.core.seq(children_15868);
var chunk__15132_15870 = null;
var count__15133_15872 = (0);
var i__15134_15873 = (0);
while(true){
if((i__15134_15873 < count__15133_15872)){
var child_15876 = chunk__15132_15870.cljs$core$IIndexed$_nth$arity$2(null, i__15134_15873);
if(cljs.core.truth_(child_15876)){
node.appendChild(child_15876);


var G__15877 = seq__15130_15869;
var G__15878 = chunk__15132_15870;
var G__15879 = count__15133_15872;
var G__15880 = (i__15134_15873 + (1));
seq__15130_15869 = G__15877;
chunk__15132_15870 = G__15878;
count__15133_15872 = G__15879;
i__15134_15873 = G__15880;
continue;
} else {
var G__15881 = seq__15130_15869;
var G__15882 = chunk__15132_15870;
var G__15883 = count__15133_15872;
var G__15884 = (i__15134_15873 + (1));
seq__15130_15869 = G__15881;
chunk__15132_15870 = G__15882;
count__15133_15872 = G__15883;
i__15134_15873 = G__15884;
continue;
}
} else {
var temp__5804__auto___15886 = cljs.core.seq(seq__15130_15869);
if(temp__5804__auto___15886){
var seq__15130_15888__$1 = temp__5804__auto___15886;
if(cljs.core.chunked_seq_QMARK_(seq__15130_15888__$1)){
var c__5525__auto___15890 = cljs.core.chunk_first(seq__15130_15888__$1);
var G__15892 = cljs.core.chunk_rest(seq__15130_15888__$1);
var G__15893 = c__5525__auto___15890;
var G__15894 = cljs.core.count(c__5525__auto___15890);
var G__15895 = (0);
seq__15130_15869 = G__15892;
chunk__15132_15870 = G__15893;
count__15133_15872 = G__15894;
i__15134_15873 = G__15895;
continue;
} else {
var child_15902 = cljs.core.first(seq__15130_15888__$1);
if(cljs.core.truth_(child_15902)){
node.appendChild(child_15902);


var G__15908 = cljs.core.next(seq__15130_15888__$1);
var G__15909 = null;
var G__15910 = (0);
var G__15911 = (0);
seq__15130_15869 = G__15908;
chunk__15132_15870 = G__15909;
count__15133_15872 = G__15910;
i__15134_15873 = G__15911;
continue;
} else {
var G__15913 = cljs.core.next(seq__15130_15888__$1);
var G__15914 = null;
var G__15915 = (0);
var G__15916 = (0);
seq__15130_15869 = G__15913;
chunk__15132_15870 = G__15914;
count__15133_15872 = G__15915;
i__15134_15873 = G__15916;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15868);
}
}


var G__15925 = seq__15071_15861;
var G__15926 = chunk__15073_15862;
var G__15927 = count__15074_15863;
var G__15928 = (i__15075_15864 + (1));
seq__15071_15861 = G__15925;
chunk__15073_15862 = G__15926;
count__15074_15863 = G__15927;
i__15075_15864 = G__15928;
continue;
} else {
var G__15937 = seq__15071_15861;
var G__15938 = chunk__15073_15862;
var G__15939 = count__15074_15863;
var G__15940 = (i__15075_15864 + (1));
seq__15071_15861 = G__15937;
chunk__15073_15862 = G__15938;
count__15074_15863 = G__15939;
i__15075_15864 = G__15940;
continue;
}
} else {
var temp__5804__auto___15944 = cljs.core.seq(seq__15071_15861);
if(temp__5804__auto___15944){
var seq__15071_15945__$1 = temp__5804__auto___15944;
if(cljs.core.chunked_seq_QMARK_(seq__15071_15945__$1)){
var c__5525__auto___15946 = cljs.core.chunk_first(seq__15071_15945__$1);
var G__15949 = cljs.core.chunk_rest(seq__15071_15945__$1);
var G__15950 = c__5525__auto___15946;
var G__15951 = cljs.core.count(c__5525__auto___15946);
var G__15952 = (0);
seq__15071_15861 = G__15949;
chunk__15073_15862 = G__15950;
count__15074_15863 = G__15951;
i__15075_15864 = G__15952;
continue;
} else {
var child_struct_15954 = cljs.core.first(seq__15071_15945__$1);
if((!((child_struct_15954 == null)))){
if(typeof child_struct_15954 === 'string'){
var text_15955 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15955),child_struct_15954].join(''));
} else {
var children_15956 = shadow.dom.svg_node(child_struct_15954);
if(cljs.core.seq_QMARK_(children_15956)){
var seq__15153_15959 = cljs.core.seq(children_15956);
var chunk__15155_15960 = null;
var count__15156_15961 = (0);
var i__15157_15962 = (0);
while(true){
if((i__15157_15962 < count__15156_15961)){
var child_15964 = chunk__15155_15960.cljs$core$IIndexed$_nth$arity$2(null, i__15157_15962);
if(cljs.core.truth_(child_15964)){
node.appendChild(child_15964);


var G__15965 = seq__15153_15959;
var G__15966 = chunk__15155_15960;
var G__15967 = count__15156_15961;
var G__15968 = (i__15157_15962 + (1));
seq__15153_15959 = G__15965;
chunk__15155_15960 = G__15966;
count__15156_15961 = G__15967;
i__15157_15962 = G__15968;
continue;
} else {
var G__15969 = seq__15153_15959;
var G__15970 = chunk__15155_15960;
var G__15971 = count__15156_15961;
var G__15972 = (i__15157_15962 + (1));
seq__15153_15959 = G__15969;
chunk__15155_15960 = G__15970;
count__15156_15961 = G__15971;
i__15157_15962 = G__15972;
continue;
}
} else {
var temp__5804__auto___15973__$1 = cljs.core.seq(seq__15153_15959);
if(temp__5804__auto___15973__$1){
var seq__15153_15975__$1 = temp__5804__auto___15973__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15153_15975__$1)){
var c__5525__auto___15977 = cljs.core.chunk_first(seq__15153_15975__$1);
var G__15978 = cljs.core.chunk_rest(seq__15153_15975__$1);
var G__15979 = c__5525__auto___15977;
var G__15980 = cljs.core.count(c__5525__auto___15977);
var G__15981 = (0);
seq__15153_15959 = G__15978;
chunk__15155_15960 = G__15979;
count__15156_15961 = G__15980;
i__15157_15962 = G__15981;
continue;
} else {
var child_15982 = cljs.core.first(seq__15153_15975__$1);
if(cljs.core.truth_(child_15982)){
node.appendChild(child_15982);


var G__15984 = cljs.core.next(seq__15153_15975__$1);
var G__15985 = null;
var G__15986 = (0);
var G__15987 = (0);
seq__15153_15959 = G__15984;
chunk__15155_15960 = G__15985;
count__15156_15961 = G__15986;
i__15157_15962 = G__15987;
continue;
} else {
var G__15991 = cljs.core.next(seq__15153_15975__$1);
var G__15992 = null;
var G__15993 = (0);
var G__15994 = (0);
seq__15153_15959 = G__15991;
chunk__15155_15960 = G__15992;
count__15156_15961 = G__15993;
i__15157_15962 = G__15994;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15956);
}
}


var G__15999 = cljs.core.next(seq__15071_15945__$1);
var G__16000 = null;
var G__16001 = (0);
var G__16002 = (0);
seq__15071_15861 = G__15999;
chunk__15073_15862 = G__16000;
count__15074_15863 = G__16001;
i__15075_15864 = G__16002;
continue;
} else {
var G__16003 = cljs.core.next(seq__15071_15945__$1);
var G__16004 = null;
var G__16005 = (0);
var G__16006 = (0);
seq__15071_15861 = G__16003;
chunk__15073_15862 = G__16004;
count__15074_15863 = G__16005;
i__15075_15864 = G__16006;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16024 = arguments.length;
var i__5727__auto___16025 = (0);
while(true){
if((i__5727__auto___16025 < len__5726__auto___16024)){
args__5732__auto__.push((arguments[i__5727__auto___16025]));

var G__16026 = (i__5727__auto___16025 + (1));
i__5727__auto___16025 = G__16026;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15176){
var G__15177 = cljs.core.first(seq15176);
var seq15176__$1 = cljs.core.next(seq15176);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15177,seq15176__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
