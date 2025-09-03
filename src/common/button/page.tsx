// components/Button.tsx

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline"; // style variations
  size?: "sm" | "md" | "lg"; // size variations
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) {
  const baseStyle = "btn";

  const variants: Record<typeof variant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    outline: "btn-outline",
  };

  const sizes: Record<typeof size, string> = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}
