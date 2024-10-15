(ns hello
   (:require [reagent.core :as r]
            [reagent.dom :as rd]
             [components :as c]))


(defonce click-count (r/atom 0))
(def state (r/atom {:text-input "MishaBledny"}))

(defn state-ful-with-atom []
  
  [:div
   [c/s-input]
   [c/container2 
    [c/input-text state [:text-input1]] 
    [c/input-text state [:text-input1]]]])

(defn mountit []
  (rd/render [state-ful-with-atom]
             (.-body js/document)))

(defn init []
  (print "Hello")
  (mountit)
  )

