
CREATE TABLE grade (
  id SERIAL PRIMARY KEY,
  studentId integer,
  className VARCHAR(30),
  grade VARCHAR(30)
);

INSERT INTO grade (studentId, className, grade) VALUES
(1,'science','B'),
(1,'gym','C'),
(1,'gym','A'),
(2,'math','F'),
(2,'english','A'),
(2,'science','B'),
(2,'math','D'),
(3,'science','C'),
(3,'gym','D'),
(3,'gym','D'),
(3,'gym','F'),
(4,'science','A'),
(4,'gym','C'),
(4,'gym','A'),
(4,'science','A');