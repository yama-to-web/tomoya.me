import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
};

const BreadCrumb = ({ lists }: Props) => {
  return (
    <div className="hidden-scrollbar overflow-x-scroll sm:w-full">
      <ul
        className="flex items-center whitespace-nowrap p-2.5 text-gray-500"
        aria-label="breadcrumb"
      >
        {lists.map(({ name = 'Home', path = '/' }, index) => (
          <li key={index}>
            <Link href={path} className="font-semibold text-blue-600">
              {name}
            </Link>
            {lists.length - 1 !== index && (
              <FontAwesomeIcon className="mx-2" size="sm" icon={faAngleRight as IconProp} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
