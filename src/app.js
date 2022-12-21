import express from "express";

export default function (database) {
  const app = express();
  app.use(express.json());
  app.get("/", async (req, res) => {
    try {
      const users = await database.fetchAllUsers();
      res.send({ users });
    } catch (error) {
      res.sendStatus(500);
      return;
    }
  });
  app.post("/users", async (req, res) => {
    const { name, age } = req.body;
    try {
      const user = await database.fetchOneUser(name);
      console.log({ user });
      if (user) {
        return res.status(400).send({ error: "name already taken" });
      } else {
        await database.createUser({ name, age });
        let newUser = await database.fetchOneUser(name);
        return res.send({ newUser });
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  });
  return app;
}
