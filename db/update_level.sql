UPDATE clash_score
  SET level = $2
WHERE player_id = $1;

