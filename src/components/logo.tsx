type LogoProps = {
  variant?: "navy" | "white";
  /** Tailwind font-size class controlling the whole mark's scale. */
  size?: string;
  className?: string;
};

export function Logo({
  variant = "navy",
  size = "text-lg",
  className = "",
}: LogoProps) {
  const color = variant === "white" ? "text-white" : "text-navy";

  return (
    <span
      className={`inline-flex items-center ${color} ${size} ${className}`}
    >
      <svg
        width="1.29em"
        height="1.6em"
        viewBox="0 0 29 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mr-[-0.32em] shrink-0"
      >
        <path
          d="M0 6.463C0 2.894 2.894 0 6.463 0H28.837C28.837 3.57 25.943 6.463 22.373 6.463H0Z"
          fill="currentColor"
        />
        <path
          d="M19.39 35.797C15.821 35.797 12.927 32.904 12.927 29.334V6.961C16.496 6.961 19.39 9.854 19.39 13.424V35.797Z"
          fill="currentColor"
        />
      </svg>
      <span className="tracking-tight">
        <span className="font-bold">ech</span>
        <span className="font-normal"> Bridgers</span>
      </span>
    </span>
  );
}
