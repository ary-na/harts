import { Schema, models, model } from "mongoose";

const ContactMeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    enquiry: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const ContactMe = models.ContactMe || model("ContactMe", ContactMeSchema);
export default ContactMe;
