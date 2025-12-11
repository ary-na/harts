// src/server/models/ContactMe.ts

// Mongoose imports
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

    fileName: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const ContactMe =
  models.ContactMe || model("ContactMe", ContactMeSchema);
