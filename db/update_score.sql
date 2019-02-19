UPDATE clash_score
  SET hi_score = $2
WHERE player_id = $1
  AND  hi_score < $2;

