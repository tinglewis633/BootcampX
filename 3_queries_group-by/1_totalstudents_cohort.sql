SELECT cohorts.name as cohorts_name, count(students.*) as total_students 
FROM cohorts
JOIN students ON cohorts.id = cohort_id
GROUP BY cohorts_name
HAVING count(students*) >= 18
ORDER BY count(students*);