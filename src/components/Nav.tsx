import Link from 'next/link';
import { links } from 'constants/profile-data';

const Nav = () => {
  return (
    <nav className="flex flex-col font-semibold lg:flex-row">
      {links.map((data, index) => {
        return (
          <Link href={data.path} key={index} className="my-2 px-3">
            {data.content}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
