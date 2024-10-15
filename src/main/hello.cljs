(ns hello
   (:require [reagent.core :as r]
             [reagent.dom :as rd]
             [components :as c]
             [re-frame.core :as rf]
             [helpers :as h]
             [effect-handlers]
             [event-handlers]))

(def typed-text (r/atom ""))

(def chors "Ибо если вы будете прощать людям согрешения их, то простит и вам Отец ваш Небесный.")

 
(defn handle-key-down [event]
  (let [key (.-key event)
         key-names ["Enter" "Control" "Shift" "Alt" "Tab" "Escape" "Meta" "Backspace"]]
    (rf/dispatch [:key-press key])
    (when (not (h/contains-str? key-names key))
      (reset! typed-text (str @typed-text key)))
    (when (h/first-diff chors @typed-text)
      (reset! typed-text (apply str (butlast @typed-text))))))

(defn state-ful-with-atom []
  [:div 
   [:h1 [h/add-transparency chors 0.3 (count @typed-text)]]
   #_[:h1 {:style {:color "red"}} (or @typed-text "hoho...")]])

(defn mountit []
  (rd/render [state-ful-with-atom]
             (.-body js/document))
  (.addEventListener js/window "keydown" handle-key-down))

(defn init []
  (print "Hello")
  (mountit)
  )
