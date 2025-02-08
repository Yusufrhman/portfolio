export default function Button({
  children,
  reverse = false,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={`px-6 py-2 ${
        reverse
          ? "border border-blue-50  hover:text-blue-500"
          : "bg-blue-500 hover:bg-blue-700"
      } rounded-full   transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
