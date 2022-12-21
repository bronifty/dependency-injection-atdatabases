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
    console.log("in the post route", name, age);
    // res.send({ name, age });//
    // await database.createUser({ name, age });
    // let user = await database.fetchOneUser(name);
    // res.send({ user });

    // let testUser = await database.fetchOneUser(name);
    // if (testUser) {
    //   console.log("testUser", testUser);
    //   res.send({ testUser });
    // }
    // console.log("no testUser");
    // res.send("no testUser");

    try {
      const user = await database.fetchOneUser(name);
      if (user) {
        res.status(400).send({ error: "name already taken" });
        return;
      }
      await database.createUser({ name, age });
      let newUser = await database.fetchOneUser(name);
      res.send({ newUser });
    } catch (error) {
      res.sendStatus(500);
      return;
    }
  });

  return app;
}
