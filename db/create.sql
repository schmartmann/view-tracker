DROP TABLE IF EXISTS views;
DROP TABLE IF EXISTS videos;

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  name VARCHAR( 255 ) UNIQUE NOT NULL,
  brand VARCHAR( 255 ) NOT NULL,
  published DATE NOT NULL
);

CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  video_id INTEGER NOT NULL REFERENCES videos ON DELETE CASCADE,
  view_count INTEGER NOT NULL
);
