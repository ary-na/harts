// components/FormField.tsx
import { FormFieldProps } from "../types";

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>

      {children}

      {error && <p className="text-error">{error}</p>}
    </fieldset>
  );
};
