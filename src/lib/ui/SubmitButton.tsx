import { cn } from "@harts/lib/utils";
import { SubmitButtonProps } from "../types";

export function SubmitButton({
  text = "Send Message",
  loadingText = "Sending...",
  isLoading,
  className,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={cn(
        "btn btn-primary gap-3",
        isLoading && "cursor-not-allowed opacity-90",
        className
      )}
    >
      {isLoading ? (
        <>
          <span className="loading loading-dots loading-md"></span>
          {loadingText}
        </>
      ) : (
        text
      )}
    </button>
  );
}