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
    SELECT teachers.name, COUNT(assistance_requests.*) as total_assistances
    FROM teachers
    JOIN assistance_requests ON teacher_id=teachers.id
    WHERE name = 'Waylon Boehm'
    GROUP BY teachers.name    
    `
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));
