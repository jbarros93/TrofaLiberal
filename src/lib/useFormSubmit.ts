import { type FormEvent, useState } from "react";

export function useFormSubmit() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 700);
  }

  return { status, handleSubmit, reset: () => setStatus("idle") };
}
