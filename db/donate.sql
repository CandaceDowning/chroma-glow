UPDATE clash_score
  SET hi_score = 0
WHERE player_id = $1;

UPDATE clash_score
    SET donation = $2
WHERE player_id = $1;
