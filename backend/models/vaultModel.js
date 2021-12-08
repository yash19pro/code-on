const mongoose = require("mongoose");

const VaultSchema = new mongoose.Schema({
  code_id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  extension: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  can_access_code: [
    {
      email: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Vault", VaultSchema);
