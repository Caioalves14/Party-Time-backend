const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    image: String,
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
  Service,
  serviceSchema,
};