const VARIANTS = {
  primary: 'bg-brand-orange text-bg-darker hover:bg-brand-orange/90',
  outline: 'border border-subtle/40 text-text-primary hover:border-brand-orange hover:text-brand-orange',
};

export default function Button({ variant = 'primary', as: Tag = 'button', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide transition duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';
  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
