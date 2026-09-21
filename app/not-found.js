import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found section-shell">
      <p className="eyebrow">404 / route not found</p>
      <h1>Off the map.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link className="button button-primary" href="/">Return home</Link>
    </div>
  );
}
