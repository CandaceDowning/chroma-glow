INSERT INTO players (playername, hash)
VALUES($1, $2);

INSERT INTO clash_score (hi_score, player_id)
VALUES (0, (SELECT id FROM players WHERE playername= $1));

SELECT p.playername, p.id, c.hi_score
FROM players p
JOIN clash_score c on p.id = c.player_id
WHERE p.playername = $1;