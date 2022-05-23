SELECT s.id, s.name, count("student_id") AS "number_of_applications" 
FROM "student" AS s 
LEFT JOIN "application" AS a ON (s.id = "student_id") 
GROUP BY s.id ORDER BY "number_of_applications" DESC, s.name;