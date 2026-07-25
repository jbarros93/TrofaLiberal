import { type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";

const fieldBase =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-colors focus:border-liberal-500 focus:ring-2 focus:ring-liberal-500/15";

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-liberal-600">*</span>}
      </label>
      {children}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldBase} ${props.className ?? ""}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldBase} resize-none ${props.className ?? ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${fieldBase} ${props.className ?? ""}`} />;
}

export function Checkbox({
  id,
  label,
  required,
}: {
  id: string;
  label: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft/80">
      <input
        id={id}
        name={id}
        type="checkbox"
        required={required}
        className="mt-1 h-4 w-4 shrink-0 rounded border-black/20 text-liberal-500 focus:ring-liberal-500/30"
      />
      <span>{label}</span>
    </label>
  );
}
