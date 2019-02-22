INSERT INTO players (playername, hash)
VALUES($1, $2);

INSERT INTO clash_score (luck, hi_score, player_id)
VALUES (1, 0, (SELECT id FROM players WHERE playername= $1));

SELECT p.playername, p.id, c.hi_score, c.luck
FROM players p
JOIN clash_score c on p.id = c.player_id
WHERE p.playername = $1;