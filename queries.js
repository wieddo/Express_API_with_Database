const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

// GET student - returns a list of all students
const getStudent = (request, response) => {
  pool.query("SELECT * FROM student ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// GET student/:id = - returns a list of students filtered on name matching the given query
const getStudentById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM student WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// GET student ? search = - returns a list of students filtered on name matching the given query
const getStudentBySearch = (request, response) => {
  const name = request.query.name;

  pool.query(
    "SELECT * FROM student WHERE name = $1",
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// POST register - creates a new student, returns success status in JSON response and stores the new student in the database
const createStudent = (request, response) => {
  const { username, email, name, gender } = request.body;

  pool.query(
    "INSERT INTO student (username,email,name,gender) VALUES ($1, $2, $3, $4)",
    [username, email, name, gender],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Student added`);
    }
  );
};

const updateStudent = (request, response) => {
  const id = parseInt(request.params.id);
  const { username, email, name, gender } = request.body;

  pool.query(
    "UPDATE student SET username = $2, email = $3, name = $4, gender = $5 WHERE id = $1",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Student modified with ID: ${id}`);
    }
  );
};

// DELETE Student, returns success status in JSON response and deletes the student in the database
const deleteStudent = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM student WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Student deleted with ID: ${id}`);
  });
};

// GET grade/:id = - returns a list of grades for a student by studentId
const getGradesByStudentId = (request, response) => {
  const studentid = parseInt(request.params.studentid);

  pool.query(
    "SELECT * FROM grade WHERE studentid = $1",
    [studentid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// POST add grade - creates a new grad for a student, returns success status in JSON response and stores the new grade in the database
const createGrade = (request, response) => {
  const { studentid, className, grade } = request.body;

  pool.query(
    "INSERT INTO grade (studentid, className, grade) VALUES ($1, $2, $3)",
    [studentid, className, grade],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`New Grade for Student added`);
    }
  );
};

module.exports = {
  getStudent,
  getStudentById,
  getStudentBySearch,
  createStudent,
  updateStudent,
  deleteStudent,
  getGradesByStudentId,
  createGrade,
};
