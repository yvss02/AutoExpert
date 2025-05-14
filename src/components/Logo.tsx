import logoImage from "../assets/logo.png";

export function Logo({
  className = "",
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={logoImage} // Utilisation de l'import
      alt="Logo"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
