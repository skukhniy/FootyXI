CREATE TABLE squads
(
  PRIMARY KEY (id) UNIQUE,
  user_id varchar NOT NULL,

);

CREATE TABLE firstTeam
(
  PRIMARY KEY (id) UNIQUE,
  FOREIGN KEY (squad_id) REFERENCES squad(id) ON UPDATE CASCADE,
  position varchar,
  order int,
  FOREIGN KEY (player_id) REFERENCES FIFA23(id) ON UPDATE CASCADE,
);

CREATE TABLE substitutes
(
  PRIMARY KEY (id) UNIQUE,
  FOREIGN KEY (squad_id) REFERENCES squad(id) ON UPDATE CASCADE,
  position varchar,
  FOREIGN KEY (player_id) REFERENCES FIFA23(id) ON UPDATE CASCADE,
);

CREATE TABLE substitutes
(
  PRIMARY KEY (id) UNIQUE,
  FOREIGN KEY (squad_id) REFERENCES squad(id) ON UPDATE CASCADE,
  FOREIGN KEY (player_id) REFERENCES FIFA23(id) ON UPDATE CASCADE,
);