import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      text: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      unique: true,
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    description: { type: String, required: false },
    isSeller: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
