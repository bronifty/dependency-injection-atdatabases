import database from "./sqlite.ts";
import App from "./app.ts";
const app = new App(database);

app.listen(8080, () => console.log("listening on port 8080"));
