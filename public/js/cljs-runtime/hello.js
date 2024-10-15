goog.provide('hello');
hello.typed_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
hello.chors = "\u0418\u0431\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u0440\u043E\u0449\u0430\u0442\u044C \u043B\u044E\u0434\u044F\u043C \u0441\u043E\u0433\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438\u0445, \u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0438\u0442 \u0438 \u0432\u0430\u043C \u041E\u0442\u0435\u0446 \u0432\u0430\u0448 \u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439.";
hello.handle_key_down = (function hello$handle_key_down(event){
var key = event.key;
var key_names = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enter","Control","Shift","Alt","Tab","Escape","Meta","Backspace"], null);
if(cljs.core.not(helpers.contains_str_QMARK_(key_names,key))){
cljs.core.reset_BANG_(hello.typed_text,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello.typed_text)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
} else {
}

if(cljs.core.truth_(helpers.first_diff(hello.chors,cljs.core.deref(hello.typed_text)))){
return cljs.core.reset_BANG_(hello.typed_text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(cljs.core.deref(hello.typed_text))));
} else {
return null;
}
});
hello.state_ful_with_atom = (function hello$state_ful_with_atom(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpers.add_transparency,hello.chors,0.3,cljs.core.count(cljs.core.deref(hello.typed_text))], null)], null)], null);
});
hello.mountit = (function hello$mountit(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.state_ful_with_atom], null),document.body);

return window.addEventListener("keydown",hello.handle_key_down);
});
hello.init = (function hello$init(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello"], 0));

return hello.mountit();
});

//# sourceMappingURL=hello.js.map
