// import connect, { sql } from "@databases/sqlite";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database

class Database {
  constructor() {
    // this.db = connect("./data.db");
    this.db = new DB("./data.db");
    this.db.execute(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER NOT NULL
    )`);
  }
  async fetchAllUsers() {
    try {
      return await this.db.query(`SELECT * FROM users;`);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  async fetchOneUser(name) {
    try {
      let res = await this.db.query(`SELECT * FROM users where name = ?`, [
        name,
      ]);
      return res[0];
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  async createUser({ name, age }) {
    try {
      return await this.db.query(
        `INSERT INTO users (name, age) VALUES (?, ?)`,
        [name, age]
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

const database = new Database();
export default database;
