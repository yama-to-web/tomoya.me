import Link from 'next/link';
import { links } from 'constants/profile-data';

const Nav = () => {
  return (
    <nav className="flex flex-col font-semibold lg:flex-row">
      {links.map((data, index) => {
        return (
          <Link href={data.path} key={index}>
            <a className="px-3 my-2">{data.content}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;