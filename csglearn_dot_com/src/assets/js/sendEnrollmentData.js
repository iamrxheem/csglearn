"use strict"
import Swal from "sweetalert2"
var sql = require("sql")

sql.setDialect("mysql")

export const sendData = data => {
  Swal.fire(data.stringify())
}
