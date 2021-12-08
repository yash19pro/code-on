const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter you name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  vault: [
    {
      code_id: {
        type: String,
      },
      title: {
        type: String,
        required: true,
      },
      extension: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        default: "",
      },
      can_access_code: [
        {
          email: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  i_can_access_code: [
    {
      email: {
        type: String,
        required: true,
      },
      code_id: {
        type: String,
        required: true,
      },
      code: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
