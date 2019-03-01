SELECT playername 
FROM players p
JOIN clash_score c ON p.id=c.player_id
ORDER BY c.hi_score DESC
LIMIT 20;
