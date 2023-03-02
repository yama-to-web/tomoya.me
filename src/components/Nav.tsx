import Link from 'next/link';
import { links } from 'constants/profile-data';

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5 font-semibold sm:gap-10 lg:flex-row">
        {links.map((data, index) => {
          return (
            <li key={index} className="sm:text-lg">
              <Link href={data.path}>{data.content}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
