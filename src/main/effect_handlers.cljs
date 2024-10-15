(ns effect-handlers
  (:require [re-frame.core :as rf]))

(rf/reg-fx 
 :some-key
 (fn [key]
   (println (str "You are pressed: " key))))