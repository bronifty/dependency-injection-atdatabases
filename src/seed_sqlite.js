import sqlite3 from "sqlite3";

const db = new sqlite3.Database("my-database.db");
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL
)`);

db.run(
  `INSERT INTO users (name, age) VALUES ('Alice', 30), ('Bob', 35), ('Charlie', 40)`
);
db.all("SELECT * FROM users", (error, rows) => {
  if (error) {
    console.error("Error fetching rows:", error);
  } else {
    console.log("Rows:", rows);
  }
});
db.close((error) => {
  if (error) {
    console.error("Error closing the database:", error);
  } else {
    console.log("Database closed");
  }
});
