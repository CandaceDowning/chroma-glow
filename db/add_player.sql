INSERT INTO players (playername, hash)
VALUES($1, $2)
RETURNING *;