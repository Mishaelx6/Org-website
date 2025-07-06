function Button({ text, onClick, primary = true, outline = false }) {
  const baseStyles = "px-4 py-2 rounded";
  const primaryStyles = "bg-primary text-white hover:opacity-80";
  const secondaryStyles = "bg-yellow-600 text-white hover:opacity-80";
  const outlineStyles = "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white";

  const getClassName = () => {
    if (outline) return `${baseStyles} ${outlineStyles}`;
    return `${baseStyles} ${primary ? primaryStyles : secondaryStyles}`;
  };

  return (
    <button
      onClick={onClick}
      className={getClassName()}
    >
      {text}
    </button>
  );
}

export default Button;