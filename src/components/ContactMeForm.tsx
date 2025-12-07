"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMeSchema, type ContactMeInput} from "@harts/lib/schemas/ContactMe";
import Image from "next/image";
import { cn } from "@harts/lib/utils";
import { FormField, SubmitButton } from "@harts/lib/ui";

export default function ContactMeForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactMeInput>({
    resolver: zodResolver(contactMeSchema),
    mode: "onBlur", // feels snappier than default "onSubmit"
  });

  const onSubmit = async (data: ContactMeInput) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("enquiry", data.enquiry);
    if (data.file?.[0]) formData.append("file", data.file[0]);

    try {
      const [res] = await Promise.all([
        fetch("/api/contact", { method: "POST", body: formData }),
        new Promise((r) => setTimeout(r, 2000)), // min 2s loading
      ]);

      if (res.ok) {
        alert("Message sent successfully!");
        reset();
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      } else {
        const text = await res.text();
        alert(text || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error — check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // Revoke old preview
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setValue("file", e.target.files!, { shouldValidate: true });
    } else {
      setPreviewUrl(null);
      setValue("file", undefined, { shouldValidate: true });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-8 rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm md:p-12"
      noValidate // prevents native browser validation popups
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="What is your Name?" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className={cn("input w-full", errors.name && "input-error")}
          />
        </FormField>

        <FormField label="What is your Email?" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={cn("input w-full", errors.email && "input-error")}
          />
        </FormField>
      </div>

      <FormField label="What is your Enquiry?" error={errors.enquiry?.message}>
        <textarea
          {...register("enquiry")}
          rows={6}
          placeholder="Tell me about your project, timeline, budget..."
          className={cn(
            "textarea w-full resize-none",
            errors.enquiry && "input-error"
          )}
        />
        <p className="label mt-2 opacity-80">
          The more details you give, the better I can help
        </p>
      </FormField>

      <FormField
        label="Upload reference images (optional)"
        error={(errors.file?.message as string) || undefined}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isLoading}
          className="file-input w-full"
        />
        <p className="label mt-2 text-sm opacity-75">
          Max 10 MB • JPG, PNG, GIF, WebP
        </p>

        {previewUrl && (
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={previewUrl}
              alt="Reference preview"
              width={1200}
              height={800}
              className="max-h-96 w-full object-cover transition-opacity duration-300"
              unoptimized
            />
          </div>
        )}
      </FormField>

      <SubmitButton
        isLoading={isLoading}
        text="Send Message"
        loadingText="Sending..."
      />
    </form>
  );
}
