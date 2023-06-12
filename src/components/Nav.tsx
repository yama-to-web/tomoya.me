import Link from 'next/link';
import { siteRoutes } from 'constants/common';

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5 font-semibold sm:gap-10 lg:flex-row">
        {siteRoutes.map((data, index) => {
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
