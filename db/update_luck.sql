UPDATE clash_score
  SET luck = $2
WHERE player_id = $1
  AND  luck < 2;