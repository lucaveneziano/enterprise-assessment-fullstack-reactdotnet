CREATE DATABASE IF NOT EXISTS blogmodo;

CREATE TABLE blogs (
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
    imageUrl varchar(255) NOT NULL,
    body mediumtext NOT NULL,
    views int DEFAULT 0,
    created_at datetime DEFAULT CURRENT_TIMESTAMP
    _id char(38) NOT NULL,
    PRIMARY KEY (_id)
);