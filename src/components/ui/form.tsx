export function FormGroup({ children }: { children: React.ReactNode }) {
  return <div className="form-group">{children}</div>;
}

export function FormLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`form-input ${props.className || ""}`.trim()}
    />
  );
}

export function FormTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={`form-textarea ${props.className || ""}`.trim()}
    />
  );
}

export function FormActions({ children }: { children: React.ReactNode }) {
  return <div className="form-actions">{children}</div>;
}

