export default function Button({
  variant,
  icon,
  position,
  title,
  background,
  className,
  type,
  onClick
}) {
  return (
    <button
      className={`${variant} flex items-center justify-center gap-4 ${background} ${className} hover:scale-105 transition-all`}
      type={type}
      onClick={onClick}
    >
      {position == "left" && icon}
      {title}
      {position == "right" && icon}
    </button>
  );
}
