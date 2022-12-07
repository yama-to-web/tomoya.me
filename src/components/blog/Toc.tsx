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
  setActive?: boolean;
};

const Toc = ({ toc, setActive = false }: Props) => {
  const [isActiveScroll, setIsActiveScroll] = useState<string>('');

  return (
    <div id="toc">
      <h4 className="mb-3 text-gray-600">目次</h4>
      <ul>
        {toc.map((data, index) => {
          return (
            <li
              key={index}
              className={`text-sm leading-7 text-gray-500 ${data.name}${
                isActiveScroll === data.id ? ' active font-bold text-gray-600' : ''
              }`}
            >
              <Link
                to={data.id}
                spy
                smooth
                offset={-100}
                duration={400}
                onSetActive={(id) => (setActive ? setIsActiveScroll(id) : '')}
                className="px-2 hover:cursor-pointer"
              >
                {data.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Toc;
