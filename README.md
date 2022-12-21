# Dependency Injection Exercise

- to run this:

```shell
yarn start
```

- curl localhost:8080/
- curl -X POST -d '{"name": "abcdef", "age": 123}' localhost:8080/users

curl -X POST -H "Content-Type: application/json" \
 -d '{"name":"abcdefghi","age": 123}' \
 http://localhost:8080/users
