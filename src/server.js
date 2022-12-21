// import database from "./sqlite.js";
import database from "./sqlite-test.js";
import App from "./app.js";
const app = new App(database);

app.listen(8080, () => console.log("listening on port 8080"));
