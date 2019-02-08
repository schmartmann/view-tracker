DROP TABLE IF EXISTS views;
DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS brands;

CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR( 255 ) UNIQUE NOT NULL CHECK( length( name ) >= 5 ),
  created TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  name VARCHAR( 255 ) UNIQUE NOT NULL CHECK( length( name ) >= 5 ),
  brand_id INTEGER NOT NULL REFERENCES brands ON UPDATE CASCADE ON DELETE CASCADE,
  published TIMESTAMP NOT NULL
);

CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  video_id INTEGER NOT NULL REFERENCES videos ON UPDATE CASCADE ON DELETE CASCADE,
  total_view_count SERIAL NOT NULL,
  viewed TIMESTAMP NOT NULL DEFAULT Now()
);
