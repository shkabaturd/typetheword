goog.provide('helpers');
helpers.generate_transparency = (function helpers$generate_transparency(n){
var step = ((1) / (n - (1)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12052_SHARP_){
return (step * p1__12052_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
helpers.add_transparency_gradient = (function helpers$add_transparency_gradient(text){
var len = cljs.core.count(text);
var transparencys = helpers.generate_transparency(len);
var text_with_trans = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(text,transparencys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function helpers$add_transparency_gradient_$_iter__12053(s__12054){
return (new cljs.core.LazySeq(null,(function (){
var s__12054__$1 = s__12054;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12054__$1);
if(temp__5804__auto__){
var s__12054__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12054__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12054__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12056 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12055 = (0);
while(true){
if((i__12055 < size__5479__auto__)){
var vec__12057 = cljs.core._nth(c__5478__auto__,i__12055);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(1),null);
cljs.core.chunk_append(b__12056,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),")"].join('')], null)], null),c], null));

var G__12088 = (i__12055 + (1));
i__12055 = G__12088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12056),helpers$add_transparency_gradient_$_iter__12053(cljs.core.chunk_rest(s__12054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12056),null);
}
} else {
var vec__12060 = cljs.core.first(s__12054__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),")"].join('')], null)], null),c], null),helpers$add_transparency_gradient_$_iter__12053(cljs.core.rest(s__12054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(text_with_trans);
})()], null);
});
helpers.add_transparency = (function helpers$add_transparency(text,t,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function helpers$add_transparency_$_iter__12063(s__12064){
return (new cljs.core.LazySeq(null,(function (){
var s__12064__$1 = s__12064;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12064__$1);
if(temp__5804__auto__){
var s__12064__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12064__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12064__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12066 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12065 = (0);
while(true){
if((i__12065 < size__5479__auto__)){
var vec__12067 = cljs.core._nth(c__5478__auto__,i__12065);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12067,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12067,(1),null);
cljs.core.chunk_append(b__12066,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(1.0),")"].join('')], null)], null),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__12089 = (i__12065 + (1));
i__12065 = G__12089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12066),helpers$add_transparency_$_iter__12063(cljs.core.chunk_rest(s__12064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12066),null);
}
} else {
var vec__12070 = cljs.core.first(s__12064__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(1.0),")"].join('')], null)], null),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),helpers$add_transparency_$_iter__12063(cljs.core.rest(s__12064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,text)));
})(),(function (){var iter__5480__auto__ = (function helpers$add_transparency_$_iter__12073(s__12074){
return (new cljs.core.LazySeq(null,(function (){
var s__12074__$1 = s__12074;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12074__$1);
if(temp__5804__auto__){
var s__12074__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12074__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12074__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12076 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12075 = (0);
while(true){
if((i__12075 < size__5479__auto__)){
var vec__12077 = cljs.core._nth(c__5478__auto__,i__12075);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12077,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12077,(1),null);
cljs.core.chunk_append(b__12076,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),")"].join('')], null)], null),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(i + n)], null)));

var G__12090 = (i__12075 + (1));
i__12075 = G__12090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12076),helpers$add_transparency_$_iter__12073(cljs.core.chunk_rest(s__12074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12076),null);
}
} else {
var vec__12080 = cljs.core.first(s__12074__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),["rgba(0, 0, 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),")"].join('')], null)], null),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(i + n)], null)),helpers$add_transparency_$_iter__12073(cljs.core.rest(s__12074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,text)));
})()], null);
});
helpers.first_diff = (function helpers$first_diff(s1,s2){
return cljs.core.some((function (p__12083){
var vec__12084 = p__12083;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return c1;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,s1,s2));
});
helpers.contains_str_QMARK_ = (function helpers$contains_str_QMARK_(v,str){
return cljs.core.some((function (p1__12087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12087_SHARP_,str);
}),v);
});

//# sourceMappingURL=helpers.js.map
