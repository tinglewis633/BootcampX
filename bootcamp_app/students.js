const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const date = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];

pool
  .query(
    `
    SELECT students.id as student_id, students.name as name, cohorts.name as cohort
    FROM students
    JOIN cohorts
    ON cohorts.id = cohort_id
    LIMIT ${limit};
    `
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));
