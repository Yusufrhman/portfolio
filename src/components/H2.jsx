export default function H2({ children, className = "" }) {
  let classes =
    "text-3xl md:text-4xl lg:text-6xl text-center lg:text-left font-bold mb-8";
  classes += className;
  return <h2 className={classes}>{children}</h2>;
}
