DROP TABLE IF EXISTS todo;
DROP DATABASE IF EXISTS todos;

CREATE DATABASE todos;

\c todos;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    my_todo VARCHAR(255) NOT NULL
);
