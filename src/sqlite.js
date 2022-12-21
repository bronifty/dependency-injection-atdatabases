import connect, { sql } from "@databases/sqlite";

const db = connect("my-database.db");

db.query(sql`SELECT * FROM users;`).then(
  (results) => console.log(results),
  (err) => console.error(err)
);
