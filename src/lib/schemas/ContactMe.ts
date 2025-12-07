import * as z from "zod";

export const contactMeSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.email({ message: "Invalid email address" }),

  enquiry: z.string().min(1, "Enquiry message is required"),

  file: z
    .any()
    .optional()
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        (files[0]?.type && files[0].type.startsWith("image/")),
      { message: "Only image files are allowed (jpg, png, gif, webp, etc.)" }
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        (files[0]?.size && files[0].size <= 10 * 1024 * 1024),
      { message: "Image must be under 10 MB" }
    ),
});

export type ContactMeInput = z.infer<typeof contactMeSchema>;