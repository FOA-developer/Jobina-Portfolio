const sizeStyles = {
  sm: "text-[10px] px-3 py-1",
  md: "text-xs px-4 py-1.5",   
  lg: "text-sm px-5 py-2",                      
};

const Tag = ({ label, size = "md" }) => (
  <span
    className={`inline-block font-semibold tracking-[0.1em] uppercase rounded-full ${sizeStyles[size]}`}
    style={{
      background: 'var(--color-accent)',
      color:      'var(--color-text-main)',
    }}
  >
    {label}
  </span>
);

export default Tag;
