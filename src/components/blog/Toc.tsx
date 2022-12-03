import { useState } from 'react';
import { Link } from 'react-scroll/modules';

type Props = {
  toc: [
    {
      text: string;
      id: string;
      name: string;
    },
  ];
};

const ShareBtn = ({ toc }: Props) => {
  const [isActiveScroll, setIsActiveScroll] = useState<string>('');

  return (
    <aside
      id="toc"
      className="sticky top-1/4 hidden w-full max-w-sm font-extralight text-slate-500 xl:block"
    >
      <h4 className="mb-3 py-3 text-slate-500">目次</h4>
      <ul className="pr-10">
        {toc.map((data, index) => {
          return (
            <li
              key={index}
              className={`text-sm leading-7 text-gray-400 ${data.name}${
                isActiveScroll === data.id ? ' active font-bold text-gray-600' : ''
              }`}
            >
              <Link
                to={data.id}
                spy
                smooth
                offset={-100}
                duration={400}
                onSetActive={(id) => setIsActiveScroll(id)}
                className="px-2 hover:cursor-pointer"
              >
                {data.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ShareBtn;
