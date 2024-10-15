goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__12174 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12175 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12175);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__12176 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12178 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12178);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12176);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12174);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12192 = arguments.length;
switch (G__12192) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12198 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12198,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12198,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12207_12226 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12208_12227 = null;
var count__12209_12228 = (0);
var i__12210_12229 = (0);
while(true){
if((i__12210_12229 < count__12209_12228)){
var vec__12217_12230 = chunk__12208_12227.cljs$core$IIndexed$_nth$arity$2(null, i__12210_12229);
var container_12231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12217_12230,(0),null);
var comp_12232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12217_12230,(1),null);
reagent.dom.re_render_component(comp_12232,container_12231);


var G__12233 = seq__12207_12226;
var G__12234 = chunk__12208_12227;
var G__12235 = count__12209_12228;
var G__12236 = (i__12210_12229 + (1));
seq__12207_12226 = G__12233;
chunk__12208_12227 = G__12234;
count__12209_12228 = G__12235;
i__12210_12229 = G__12236;
continue;
} else {
var temp__5804__auto___12237 = cljs.core.seq(seq__12207_12226);
if(temp__5804__auto___12237){
var seq__12207_12238__$1 = temp__5804__auto___12237;
if(cljs.core.chunked_seq_QMARK_(seq__12207_12238__$1)){
var c__5525__auto___12239 = cljs.core.chunk_first(seq__12207_12238__$1);
var G__12240 = cljs.core.chunk_rest(seq__12207_12238__$1);
var G__12241 = c__5525__auto___12239;
var G__12242 = cljs.core.count(c__5525__auto___12239);
var G__12243 = (0);
seq__12207_12226 = G__12240;
chunk__12208_12227 = G__12241;
count__12209_12228 = G__12242;
i__12210_12229 = G__12243;
continue;
} else {
var vec__12220_12244 = cljs.core.first(seq__12207_12238__$1);
var container_12245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12220_12244,(0),null);
var comp_12246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12220_12244,(1),null);
reagent.dom.re_render_component(comp_12246,container_12245);


var G__12247 = cljs.core.next(seq__12207_12238__$1);
var G__12248 = null;
var G__12249 = (0);
var G__12250 = (0);
seq__12207_12226 = G__12247;
chunk__12208_12227 = G__12248;
count__12209_12228 = G__12249;
i__12210_12229 = G__12250;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
