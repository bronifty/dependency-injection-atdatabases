import connect, { sql } from "@databases/sqlite";

const db = connect("my-database.db");
let query = sql`SELECT * FROM users;`;
// let res = await db.query(query);
// console.log("hi: ", res);

class Database {
  constructor() {
    this.db = connect("my-database.db");
  }
  async getUser(name) {
    try {
      return await this.db.query(
        sql`SELECT * FROM users where name = ${name};`
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  async createUser({ name, age }) {
    try {
      return await this.db.query(
        sql`INSERT INTO users (name, age) VALUES (${name}, ${age});`
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

const database = new Database();
console.log("Database class object query: ", await database.query(query));
export default database;

// export async function getUser(username) {
//   const [rows] = await connection.promise().query(
//     `SELECT *
//       FROM users
//       WHERE username = ?`,
//     [username]
//   );

//   return rows[0];
// }

// export async function createUser(username, password) {
//   const { insertId } = await connection.promise().query(
//     `INSERT INTO users (username, password)
//       VALUES (?, ?)`,
//     [username, password]
//   );

//   return insertId;
// }
