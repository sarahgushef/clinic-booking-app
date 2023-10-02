import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const Patient = db.define("patient", {
  patient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

export default Patient;

// If table "Patient" doesn't exist, this function creates ,  this function creates it but we don't use it because
// We already synchonize all model at once in index.js

// (async () => {
//   await db.sync();
// })();
