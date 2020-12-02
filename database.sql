
-- User table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (250) NOT NULL,
    "last_name" VARCHAR (250) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);


-- Songs Table
CREATE TABLE "songs" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"title" VARCHAR (250),
	"key" VARCHAR (250),
	"tempo" INTEGER,
	"time_signature" VARCHAR (250),
	"lyrics" VARCHAR,
	"instruments" VARCHAR,
	"reference_songs" VARCHAR,
	"notes" VARCHAR,
	"completed_status" BOOLEAN DEFAULT false
);

-- Section Table
CREATE TABLE "section" (
	"id" SERIAL PRIMARY KEY, 
	"song_id" INT REFERENCES "songs" ON DELETE CASCADE,
	"name" VARCHAR,
	"chords" VARCHAR
);