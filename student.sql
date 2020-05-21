CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30),
  email VARCHAR(30),
  name VARCHAR(30),
  gender VARCHAR(30)
);

INSERT INTO student (username,email,name,gender) VALUES
('hposnette1','hposnette1@weibo.com','Hamilton Posnette','Male'),
('lcohn2','lcohn2@clickbank.net','Lena Cohn','Female'),
('shebborn3','shebborn3@w3.org','Scotty Hebborn','Male'),
('bwardel4','bwardel4@xing.com','Brit Wardel','Female');
