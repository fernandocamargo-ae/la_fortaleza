export default function Section({ children, id, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
