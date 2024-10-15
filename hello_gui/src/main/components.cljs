(ns components
  (:require [clojure.string :as str]))

(defn colorize-words [text]
  (let [colors ["red" "blue" "green" "purple" "orange"]
        words (clojure.string/split text #" ")]
    (apply str (for [w words]
                 (str "<span style='color:" (rand-nth colors) "'>"
                      w
                      "</span> ")))))

(defn s-input []
  [:div {:content-editable true
         :class "form-control mb-3"}])

(defn container2 [a b]
  [:div {:class "container mt-5"}
   [:div {:class "row"} 
    [:div {:class "col-md-6"} a]
    [:div {:class "col-md-6"} b]]])

(def colors ["blue" "red" "green" "yellow" "ginger"])

(defn input-text [state path] 
  (let [text (get-in @state path "nothing to show")
        text (colorize-words text)]
        [:div {:class "mb-3"}
         [:div {:content-editable true
                :color "green"
                :class "form-control" :rows "3" :cols "30" 
                :dangerouslySetInnerHTML {:__html text}
                
                :on-input (fn [event] 
                                  (println @state)
                                  (swap! state assoc-in path
                                         (-> event .-target .-innerText)))}]
         ]
    )
  )

(comment 
 
  )