(ns event-handlers
  (:require [re-frame.core :as rf]))


(rf/reg-event-fx
 :key-press
 (fn [_ event]
   {:some-key (second event)}))