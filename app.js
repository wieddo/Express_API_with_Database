const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// GET students /: studentId - returns details of a specific student by student id
app.get("/students", db.getStudent);

// GET student/:id = - returns a list of students filtered on name matching the given query
app.get("/students/:id", db.getStudentById);

// GET student ? search = - returns a list of students filtered on name matching the given query
app.get("/search", db.getStudentBySearch);

// GET grades /: studentId - returns all grades for a given student by student id
app.get("/grades/:studentid", db.getGradesByStudentId);

// POST grade - records a new grade, returns success status in JSON response and stores the new grade in the database
app.post("/add/grade", db.createGrade);

// POST register - creates a new student, returns success status in JSON response and stores the new student in the database
app.post("/register", db.createStudent);

// DELETE Student, returns success status in JSON response and deletes the student in the database
app.delete("/delete/:id", db.deleteStudent);

//---------------------------------------------------------------------------------
app.listen(port, () =>
  console.log(`Student REST API Server listening on port ${port}`)
);
//---------------------------------------------------------------------------------
