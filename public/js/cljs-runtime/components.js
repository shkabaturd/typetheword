goog.provide('components');
components.colorize_words = (function components$colorize_words(text){
var colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","blue","green","purple","orange"], null);
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5480__auto__ = (function components$colorize_words_$_iter__12879(s__12880){
return (new cljs.core.LazySeq(null,(function (){
var s__12880__$1 = s__12880;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12880__$1);
if(temp__5804__auto__){
var s__12880__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12880__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12880__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12882 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12881 = (0);
while(true){
if((i__12881 < size__5479__auto__)){
var w = cljs.core._nth(c__5478__auto__,i__12881);
cljs.core.chunk_append(b__12882,["<span style='color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(colors)),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"</span> "].join(''));

var G__12883 = (i__12881 + (1));
i__12881 = G__12883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12882),components$colorize_words_$_iter__12879(cljs.core.chunk_rest(s__12880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12882),null);
}
} else {
var w = cljs.core.first(s__12880__$2);
return cljs.core.cons(["<span style='color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(colors)),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"</span> "].join(''),components$colorize_words_$_iter__12879(cljs.core.rest(s__12880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(words);
})());
});
components.s_input = (function components$s_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-editable","content-editable",636764967),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control mb-3"], null)], null);
});
components.container2 = (function components$container2(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mt-5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-6"], null),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-6"], null),b], null)], null)], null);
});
components.colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue","red","green","yellow","ginger"], null);
components.input_text = (function components$input_text(state,path){
var text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),path,"nothing to show");
var text__$1 = components.colorize_words(text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content-editable","content-editable",636764967),true,new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"rows","rows",850049680),"3",new cljs.core.Keyword(null,"cols","cols",-1914801295),"30",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),text__$1], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,path,event.target.innerText);
})], null)], null)], null);
});

//# sourceMappingURL=components.js.map
