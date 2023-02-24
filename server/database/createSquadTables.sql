CREATE TABLE squads
(
  id SERIAL PRIMARY KEY UNIQUE,
  user_id varchar NOT NULL
);

CREATE TABLE firstTeam
(
  id SERIAL PRIMARY KEY UNIQUE,
  squad_id INT REFERENCES squads(id) ON UPDATE CASCADE,
  player_id INT REFERENCES FIFA23(id) ON UPDATE CASCADE,
  position VARCHAR,
  position_order INT
);

CREATE TABLE substitutes
(
  id SERIAL PRIMARY KEY UNIQUE,
  squad_id INT REFERENCES squads(id) ON UPDATE CASCADE,
  player_id INT REFERENCES FIFA23(id) ON UPDATE CASCADE,
  position varchar
);

CREATE TABLE reserves
(
  id SERIAL PRIMARY KEY UNIQUE,
  squad_id INT REFERENCES squads(id) ON UPDATE CASCADE,
  player_id INT REFERENCES FIFA23(id) ON UPDATE CASCADE
);

select * 
FROM squads 
inner join firstTeam on squads.id = firstteam.squad_id
inner join substitutes on firstteam.squad_id = substitutes.squad_id 
inner join reserves on substitutes.squad_id = reserves.squad_id
WHERE squads.id = 13;

-- Get all first team members
select squad_id, player_id, firstTeam.position, known_as, best_position, overall, fifa23.id, image_link
FROM squads
inner join firstTeam on squads.id = firstteam.squad_id
inner join fifa23 on firstTeam.player_id = fifa23.id
WHERE squads.id = 14
ORDER BY firstteam.position_order;

-- Get all substitute members
select squad_id, player_id, substitutes.position, known_as, best_position, overall, fifa23.id, image_link
FROM squads
inner join substitutes on squads.id = substitutes.squad_id
inner join fifa23 on substitutes.player_id = fifa23.id
WHERE squads.id = 14;

-- get all reserve players
select squad_id, player_id, known_as, best_position, overall, fifa23.id, image_link
FROM squads
inner join reserves on squads.id = reserves.squad_id
inner join fifa23 on reserves.player_id = fifa23.id
WHERE squads.id = 14;

-- delete all squads
DELETE FROM firstTeam *;
DELETE FROM substitutes *;
DELETE FROM reserves *;
DELETE FROM squads *;

-- get all squad ids for a user
SELECT id from squads where user_id = $1

-- get squad info
SELECT squad_name, formation from squads where id = $1