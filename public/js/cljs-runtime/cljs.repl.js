goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18663){
var map__18664 = p__18663;
var map__18664__$1 = cljs.core.__destructure_map(map__18664);
var m = map__18664__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18671_19088 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18672_19089 = null;
var count__18673_19090 = (0);
var i__18674_19091 = (0);
while(true){
if((i__18674_19091 < count__18673_19090)){
var f_19097 = chunk__18672_19089.cljs$core$IIndexed$_nth$arity$2(null, i__18674_19091);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19097], 0));


var G__19098 = seq__18671_19088;
var G__19099 = chunk__18672_19089;
var G__19100 = count__18673_19090;
var G__19101 = (i__18674_19091 + (1));
seq__18671_19088 = G__19098;
chunk__18672_19089 = G__19099;
count__18673_19090 = G__19100;
i__18674_19091 = G__19101;
continue;
} else {
var temp__5804__auto___19102 = cljs.core.seq(seq__18671_19088);
if(temp__5804__auto___19102){
var seq__18671_19103__$1 = temp__5804__auto___19102;
if(cljs.core.chunked_seq_QMARK_(seq__18671_19103__$1)){
var c__5525__auto___19104 = cljs.core.chunk_first(seq__18671_19103__$1);
var G__19105 = cljs.core.chunk_rest(seq__18671_19103__$1);
var G__19106 = c__5525__auto___19104;
var G__19107 = cljs.core.count(c__5525__auto___19104);
var G__19108 = (0);
seq__18671_19088 = G__19105;
chunk__18672_19089 = G__19106;
count__18673_19090 = G__19107;
i__18674_19091 = G__19108;
continue;
} else {
var f_19109 = cljs.core.first(seq__18671_19103__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19109], 0));


var G__19110 = cljs.core.next(seq__18671_19103__$1);
var G__19111 = null;
var G__19112 = (0);
var G__19113 = (0);
seq__18671_19088 = G__19110;
chunk__18672_19089 = G__19111;
count__18673_19090 = G__19112;
i__18674_19091 = G__19113;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19115 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19115], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19115)))?cljs.core.second(arglists_19115):arglists_19115)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18710_19119 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18711_19120 = null;
var count__18712_19121 = (0);
var i__18713_19122 = (0);
while(true){
if((i__18713_19122 < count__18712_19121)){
var vec__18736_19123 = chunk__18711_19120.cljs$core$IIndexed$_nth$arity$2(null, i__18713_19122);
var name_19124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18736_19123,(0),null);
var map__18739_19125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18736_19123,(1),null);
var map__18739_19126__$1 = cljs.core.__destructure_map(map__18739_19125);
var doc_19127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739_19126__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739_19126__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19124], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19128], 0));

if(cljs.core.truth_(doc_19127)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19127], 0));
} else {
}


var G__19130 = seq__18710_19119;
var G__19131 = chunk__18711_19120;
var G__19132 = count__18712_19121;
var G__19133 = (i__18713_19122 + (1));
seq__18710_19119 = G__19130;
chunk__18711_19120 = G__19131;
count__18712_19121 = G__19132;
i__18713_19122 = G__19133;
continue;
} else {
var temp__5804__auto___19134 = cljs.core.seq(seq__18710_19119);
if(temp__5804__auto___19134){
var seq__18710_19136__$1 = temp__5804__auto___19134;
if(cljs.core.chunked_seq_QMARK_(seq__18710_19136__$1)){
var c__5525__auto___19138 = cljs.core.chunk_first(seq__18710_19136__$1);
var G__19139 = cljs.core.chunk_rest(seq__18710_19136__$1);
var G__19140 = c__5525__auto___19138;
var G__19141 = cljs.core.count(c__5525__auto___19138);
var G__19142 = (0);
seq__18710_19119 = G__19139;
chunk__18711_19120 = G__19140;
count__18712_19121 = G__19141;
i__18713_19122 = G__19142;
continue;
} else {
var vec__18753_19143 = cljs.core.first(seq__18710_19136__$1);
var name_19144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18753_19143,(0),null);
var map__18756_19145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18753_19143,(1),null);
var map__18756_19146__$1 = cljs.core.__destructure_map(map__18756_19145);
var doc_19147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18756_19146__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18756_19146__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19144], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19148], 0));

if(cljs.core.truth_(doc_19147)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19147], 0));
} else {
}


var G__19149 = cljs.core.next(seq__18710_19136__$1);
var G__19150 = null;
var G__19151 = (0);
var G__19152 = (0);
seq__18710_19119 = G__19149;
chunk__18711_19120 = G__19150;
count__18712_19121 = G__19151;
i__18713_19122 = G__19152;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18761 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18762 = null;
var count__18763 = (0);
var i__18764 = (0);
while(true){
if((i__18764 < count__18763)){
var role = chunk__18762.cljs$core$IIndexed$_nth$arity$2(null, i__18764);
var temp__5804__auto___19155__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19155__$1)){
var spec_19156 = temp__5804__auto___19155__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19156)], 0));
} else {
}


var G__19163 = seq__18761;
var G__19164 = chunk__18762;
var G__19165 = count__18763;
var G__19166 = (i__18764 + (1));
seq__18761 = G__19163;
chunk__18762 = G__19164;
count__18763 = G__19165;
i__18764 = G__19166;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18761);
if(temp__5804__auto____$1){
var seq__18761__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18761__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18761__$1);
var G__19169 = cljs.core.chunk_rest(seq__18761__$1);
var G__19170 = c__5525__auto__;
var G__19171 = cljs.core.count(c__5525__auto__);
var G__19172 = (0);
seq__18761 = G__19169;
chunk__18762 = G__19170;
count__18763 = G__19171;
i__18764 = G__19172;
continue;
} else {
var role = cljs.core.first(seq__18761__$1);
var temp__5804__auto___19173__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19173__$2)){
var spec_19175 = temp__5804__auto___19173__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19175)], 0));
} else {
}


var G__19177 = cljs.core.next(seq__18761__$1);
var G__19178 = null;
var G__19179 = (0);
var G__19180 = (0);
seq__18761 = G__19177;
chunk__18762 = G__19178;
count__18763 = G__19179;
i__18764 = G__19180;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18808 = datafied_throwable;
var map__18808__$1 = cljs.core.__destructure_map(map__18808);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18808__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18809 = cljs.core.last(via);
var map__18809__$1 = cljs.core.__destructure_map(map__18809);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18810 = data;
var map__18810__$1 = cljs.core.__destructure_map(map__18810);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18811 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18811__$1 = cljs.core.__destructure_map(map__18811);
var top_data = map__18811__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18817 = phase;
var G__18817__$1 = (((G__18817 instanceof cljs.core.Keyword))?G__18817.fqn:null);
switch (G__18817__$1) {
case "read-source":
var map__18826 = data;
var map__18826__$1 = cljs.core.__destructure_map(map__18826);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18829 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18829__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18829);
var G__18829__$2 = (cljs.core.truth_((function (){var fexpr__18835 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18835.cljs$core$IFn$_invoke$arity$1 ? fexpr__18835.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18835.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18829__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18829__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18829__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18850 = top_data;
var G__18850__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18850);
var G__18850__$2 = (cljs.core.truth_((function (){var fexpr__18852 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18852.cljs$core$IFn$_invoke$arity$1 ? fexpr__18852.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18852.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18850__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18850__$1);
var G__18850__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18850__$2);
var G__18850__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18850__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18850__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18862 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(3),null);
var G__18867 = top_data;
var G__18867__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18867,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18867);
var G__18867__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18867__$1);
var G__18867__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18867__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18867__$2);
var G__18867__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18867__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18867__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18867__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18867__$4;
}

break;
case "execution":
var vec__18891 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18804_SHARP_){
var or__5002__auto__ = (p1__18804_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18914 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18914.cljs$core$IFn$_invoke$arity$1 ? fexpr__18914.cljs$core$IFn$_invoke$arity$1(p1__18804_SHARP_) : fexpr__18914.call(null, p1__18804_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18916 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18916__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18916,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18916);
var G__18916__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18916__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18916__$1);
var G__18916__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18916__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18916__$2);
var G__18916__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18916__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18916__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18916__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18916__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18817__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18979){
var map__18981 = p__18979;
var map__18981__$1 = cljs.core.__destructure_map(map__18981);
var triage_data = map__18981__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18994 = phase;
var G__18994__$1 = (((G__18994 instanceof cljs.core.Keyword))?G__18994.fqn:null);
switch (G__18994__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18996 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18998 = loc;
var G__18999 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19001_19222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19002_19223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19003_19224 = true;
var _STAR_print_fn_STAR__temp_val__19004_19225 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19003_19224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19004_19225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18971_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18971_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19002_19223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19001_19222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18996,G__18997,G__18998,G__18999) : format.call(null, G__18996,G__18997,G__18998,G__18999));

break;
case "macroexpansion":
var G__19016 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19017 = cause_type;
var G__19018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19019 = loc;
var G__19020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19016,G__19017,G__19018,G__19019,G__19020) : format.call(null, G__19016,G__19017,G__19018,G__19019,G__19020));

break;
case "compile-syntax-check":
var G__19021 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19022 = cause_type;
var G__19023 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19024 = loc;
var G__19025 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19021,G__19022,G__19023,G__19024,G__19025) : format.call(null, G__19021,G__19022,G__19023,G__19024,G__19025));

break;
case "compilation":
var G__19026 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19027 = cause_type;
var G__19028 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19029 = loc;
var G__19030 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19026,G__19027,G__19028,G__19029,G__19030) : format.call(null, G__19026,G__19027,G__19028,G__19029,G__19030));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19032 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19033 = symbol;
var G__19034 = loc;
var G__19035 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19036_19232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19037_19233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19038_19234 = true;
var _STAR_print_fn_STAR__temp_val__19039_19235 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19038_19234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19039_19235);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18973_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18973_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19037_19233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19036_19232);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19032,G__19033,G__19034,G__19035) : format.call(null, G__19032,G__19033,G__19034,G__19035));
} else {
var G__19052 = "Execution error%s at %s(%s).\n%s\n";
var G__19053 = cause_type;
var G__19054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19055 = loc;
var G__19056 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19052,G__19053,G__19054,G__19055,G__19056) : format.call(null, G__19052,G__19053,G__19054,G__19055,G__19056));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18994__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
