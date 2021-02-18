import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  size: _,
  ...props
}) => {

  const [field, { error }] = useField(props);

  return (
    <>
      <input {...field} {...props} className="form__input" />
      {error ? <span className="form__error">{error}</span> : null}
    </>
  );
};
