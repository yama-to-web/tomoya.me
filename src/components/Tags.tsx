import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  tags?: string[];
  border?: boolean;
  size?: string;
};

const Tags = ({ tags = [], border = false, size = 'xs' }: Props) => {
  const borderClass = border ? ' rounded-md border border-teal-600 px-1 py-0.5' : '';
  const sizeClass = ' text-' + size;

  return (
    <ul className="flex flex-wrap items-center justify-start gap-1">
      {tags.length > 0 &&
        tags.map((tag, index) => {
          return (
            <li
              className={
                'text-teal-600' +
                borderClass +
                sizeClass +
                (border ? " before:content-['#']" : '') +
                (index == tags.length - 1 || border ? '' : ' mr-1.5')
              }
              key={index}
            >
              {!border && (
                <FontAwesomeIcon
                  className="mr-0.5 text-teal-600"
                  size="sm"
                  icon={faTag as IconProp}
                />
              )}
              {tag}
            </li>
          );
        })}
    </ul>
  );
};

export default Tags;
