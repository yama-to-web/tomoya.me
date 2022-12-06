type Props = {
  tags?: string[];
  border?: boolean;
  size?: string;
};

const Tags = ({ tags = [], border = false, size = 'xs' }: Props) => {
  const borderClass = border ? ' rounded-md border border-teal-600 p-1' : '';
  const sizeClass = ' text-' + size;

  return (
    <ul className="flex flex-wrap items-center justify-start gap-1 text-xs font-semibold">
      {tags.length > 0 &&
        tags.map((tag) => {
          return (
            <li
              className={'text-teal-600 before:content-["#"]' + borderClass + sizeClass}
              key={tag}
            >
              {tag}
            </li>
          );
        })}
    </ul>
  );
};

export default Tags;
