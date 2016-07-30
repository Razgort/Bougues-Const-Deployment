db.createUser(
  {
    user: "admin",
    pwd: "LonJH1Um",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
