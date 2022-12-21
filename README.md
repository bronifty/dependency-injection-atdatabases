# Dependency Injection Exercise

#### Usage

- to run this, you can run either of the scripts in package.json. You don't need to install anything.

- test will inject the memory database dependency at runtime
- dev and start will inject the file database at runtime

```shell
yarn test
yarn dev
yarn start
```

```shell
curl localhost:8080/

curl -X POST -H "Content-Type: application/json" \
 -d '{"name":"abc","age": 123}' \
 localhost:8080/users
```

#### Architecture Notes

- the DI is based on classes, but it could work with functions just as well. In fact, the appFunction file in the archive folder is a drop-in replacement for the app.js file in src folder.
