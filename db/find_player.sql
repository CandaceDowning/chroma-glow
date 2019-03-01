SELECT p.playername, p.hash, p.id, c.hi_score, c.luck, c.cal_level, c.donation
FROM players p
JOIN clash_score c on p.id = c.player_id
WHERE p.playername = $1;