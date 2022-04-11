CREATE TABLE books(
    id SERIAL PRIMARY KEY, 
    title VARCHAR (25) NOT NULL,
    author VARCHAR (25) NOT NULL,
    year DATE,
    created_on TIMESTAMP
);

INSERT INTO books (id, title, author, year) VALUES ('1', 'Harry Porter' , 'JK Rowlings' , '10-10-2001');
INSERT INTO books (id, title, author, year) VALUES ('2', 'Purple Hibiscus' , 'Chimamanda Adichie' , '10-07-1994');
INSERT INTO books (id, title, author, year) VALUES ('3', 'Life in a year' , 'NETFLIX' , '06-11-2014');
INSERT INTO books (id, title, author, year) VALUES ('4', 'Things fall Apart' , 'Chinua Achebe' , '06-01-1983');