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
    <ol className="flex p-2 text-xxs text-gray-500 sm:text-sm" aria-label="breadcrumb">
      {lists.map(({ name = 'Home', path = '/' }, index) => (
        <li key={index}>
          {lists.length - 1 !== index ? (
            <Link href={path}>
              <a className="font-semibold text-blue-600/70">{name}</a>
            </Link>
          ) : (
            <span aria-current="page">{name}</span>
          )}
          {lists.length - 1 !== index && (
            <FontAwesomeIcon className="mx-3" size="sm" icon={faAngleRight as IconProp} />
          )}
        </li>
      ))}
    </ol>
  );
};

export default BreadCrumb;
