import Link from 'next/link';

const RightMenu = () => {
  return (
    <div className="max-w-xl">
      <aside className="xl:sticky xl:top-20">
        <p className=" bg-gray-200 py-2 px-2.5 text-xl font-light text-default/90">CATEGORIES</p>
        <ul className="mt-5 text-lg font-light text-default/80">
          <li className="border-b p-3">
            <Link href="/blog/engineering">Engineering</Link>
          </li>
          <li className="border-b p-3">
            <Link href="/blog/other">Other</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default RightMenu;
