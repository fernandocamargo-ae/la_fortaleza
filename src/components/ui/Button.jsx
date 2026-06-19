const VARIANTS = {
  primary: 'bg-brand-orange text-bg-darker hover:bg-orange-500',
  outline: 'border border-white/40 text-text-primary hover:border-brand-orange hover:text-brand-orange',
};

export default function Button({ variant = 'primary', as: Tag = 'button', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors';
  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
