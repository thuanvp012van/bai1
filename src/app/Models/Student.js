const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      maxLength: 50,
      require: true,
    },

    sdt: {
      type: String,
      minLength: 10,
      maxLength: 20,
      unique: true,
      require: true,
    },

    image: {
      type: String,
      maxLength: 200,
      require: true,
    },

    address: {
      type: String,
      maxLength: 200,
      require: true,
    },

    birthday: {
      type: Date,
      default: Date.now,
      require: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Student", Student);
