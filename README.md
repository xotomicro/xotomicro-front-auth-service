### SERVICE USER

The React Application

## 🤷🏼‍♂️ PREREQUISITE SERVICE

```shell

# 1. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-shell-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-shell-system.git # clone then run the shell

# 2. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-hook-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-hook-system.git # clone and run the hook system

```

### 🏗️ SETUP - ENVIRONMENT

```sh
# Ask for a GITHUB_TOKEN from the owner

# register packages - yarn (ask owner for token)
npm set "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" # you will need to tell npm to authenticate yourself to install registries

# set the GITHUB_TOKEN in the .env files variable 
GITHUB_TOKEN=${GITHUB_TOKEN}

```

### 🚀 INSTALL AND RUN THE APP - YARN

```shell

yarn # install dependencies
yarn start # start application

```

### 🐳 INSTALL AND RUN SERVICE - DOCKER

```sh

# deploy service to docker
docker-compose --env-file=.env up --build -d --force-recreate 

# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --env-file=.env

```

### 🐳 INSTALL AND RUN SERVICE - DOCKER

```sh

# deploy service to docker
docker-compose --env-file=.env up --build -d --force-recreate 

# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --env-file=.env```

- ACCESS
  - GO TO http://localhost:7075

<hr>

### INFORMATION
TESTING FOR USERS

```shell
# user 1 - admin

Username: user1
Password: password1
```

```shell
# user 2 - user

Username: user2
Password: password2
```

```shell
# user 3 - user

Username: user3
Password: password3
 ```

> *REQUEST*

```shell
curl --location --request POST 'http://${process.env.SERVICE_URL}:8080/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "user1",
    "password": "password1"
}'
```

> *RESPONSE*

```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjI5MDI5MjQ3LCJpc3MiOiJBdXRoU2VydmljZSIsImV4cCI6MTYyOTAzMDE0N30.elcks-Vmt9LDQ7f7jActiYiAfnA36MFfGCHE3-lMc98",
    "expire": 1629030147840,
    "scope": "admin"
}
```

#### GET USERS

> *REQUEST*

```shell
curl --location --request GET 'http://${process.env.SERVICE_URL}:8080/users' \
--header 'Authorization: eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjI5MDI5MjQ3LCJpc3MiOiJBdXRoU2VydmljZSIsImV4cCI6MTYyOTAzMDE0N30.elcks-Vmt9LDQ7f7jActiYiAfnA36MFfGCHE3-lMc98'
```

> *RESPONSE*

```json
[
    { "id": 1, "username": "user1", "scope": "admin", "fullName": "Name 1" },
    { "id": 2, "username": "user2", "scope": "user", "fullName": "Name 2" }, 
 { "id": 3, "username": "user3", "scope": "user", "fullName": "Name 3" }
]
```
