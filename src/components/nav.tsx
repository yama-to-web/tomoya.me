import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex flex-col font-semibold lg:flex-row">
      <Link href="/about">
        <a className="px-3 my-2">ABOUT</a>
      </Link>
      <Link href="/note">
        <a className="px-3 my-2">NOTE</a>
      </Link>
    </nav>
  );
}
