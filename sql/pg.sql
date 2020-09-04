SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA "Member";


CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';



CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;



COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET search_path = "Member", pg_catalog;

SET default_with_oids = false;

SET timezone = 'Asia/Jakarta';

CREATE TYPE role AS ENUM ('SUPER ADMIN', 'ADMIN', 'USER');

CREATE TABLE Users (
    id INT NOT NULL,
    name character varying(128),
    nisn character varying(128),
    username character varying(1024) NOT NULL,
    password text NOT NULL,
    email character varying(128),
    origin character varying(128),
    role  role,
    phone character varying(128)
);

CREATE TABLE Material_type (
    id_material INT GENERATED ALWAYS AS IDENTITY,
    type character varying(128),
    material character varying(128),
    PRIMARY KEY(id_material)
);

CREATE TABLE Material_activity (
    id_activity INT GENERATED ALWAYS AS IDENTITY,
    id_material INT NOT NULL,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY(id_activity),
    CONSTRAINT fk_material
      FOREIGN KEY(id_material) 
	  REFERENCES Material_type(id_material)
);

CREATE TABLE Question_bank (
    id_question INT GENERATED ALWAYS AS IDENTITY,
    id_activity INT NOT NULL,
    id_material INT NOT NULL,
    question TEXT NOT NULL,
    choiceA TEXT NOT NULL,
    choiceB TEXT NOT NULL,
    choiceC TEXT NOT NULL,
    choiceD TEXT NOT NULL,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT fk_material
      FOREIGN KEY(id_material) 
	  REFERENCES Material_type(id_material),
    CONSTRAINT fk_activity
      FOREIGN KEY(id_activity) 
	  REFERENCES Material_activity(id_activity)
);

CREATE SEQUENCE "User_id_seq" 
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE "User_id_seq" OWNED BY Users.id;

ALTER TABLE ONLY Users ALTER COLUMN id SET DEFAULT nextval('"User_id_seq"'::regclass);

ALTER TABLE ONLY Users
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


ALTER TABLE ONLY Users
    ADD CONSTRAINT id PRIMARY KEY (id);

CREATE UNIQUE INDEX username ON Users USING btree (username varchar_pattern_ops);
CREATE UNIQUE INDEX email ON Users USING btree (username varchar_pattern_ops);
CREATE UNIQUE INDEX material ON Material_type USING btree (material varchar_pattern_ops);


INSERT INTO Material_type(type, material)
VALUES 
    ('SOSHUM','Ekonomi'),
    ('SOSHUM','Sejarah'),
    ('SOSHUM','Sosiologi'),
    ('SAINTEK','Biologi'),
    ('SAINTEK','Fisika'),
    ('SAINTEK','Matematika')
RETURNING *;