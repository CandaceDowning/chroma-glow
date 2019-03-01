SELECT p.playername, c.donation 
FROM players p
JOIN clash_score c ON p.id=c.player_id
ORDER BY c.donation DESC
LIMIT 5;