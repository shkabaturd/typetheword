(ns helpers)

(defn generate-transparency [n]
  (let [step (/ 1 (dec n))]
    (mapv #(* step %) (range n))))

(defn add-transparency-gradient [text]
  (let [len (count text)
        transparencys (generate-transparency len)
        text-with-trans (partition 2 (interleave text transparencys))]
    [:div
     (for [[c t] text-with-trans]
       [:span {:style {:color (str "rgba(0, 0, 0," t ")")}} c])]))

(defn add-transparency [text t n]
  [:div
   (for [[i c] (map-indexed vector (take n text))]
     ^{:key i} [:span {:style {:color (str "rgba(0, 0, 0," 1.0 ")")}} c])
   (for [[i c] (map-indexed vector (drop n text))]
     ^{:key (+ i n)} [:span {:style {:color (str "rgba(0, 0, 0," t ")")}} c])])

(defn first-diff [s1 s2]
  (some (fn [[c1 c2]] 
          (when (not= c1 c2) c1)) 
        (map vector s1 s2)))


(defn contains-str? [v str]
  (some #(= % str) v))