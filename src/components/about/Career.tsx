import { BuildingOffice, Home } from '@styled-icons/heroicons-outline';
import moment from 'moment';

type Work = {
  period: [{ from_date: string; to_date: string }];
  title: string;
  text: string;
  skills: string;
};

type Props = {
  main: Array<Work>;
  sub: Array<Work>;
};

const Career = ({ main, sub }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
      <div className="sm:w-1/2">
        <p className="mb-8 flex items-center gap-1 border-b-2 pb-1 text-2xl font-light">
          <BuildingOffice size={25} />
          Main
        </p>
        <ul>
          {main.map((val) => {
            return <CareerItem key={val.title} item={val} genre="main" />;
          })}
        </ul>
      </div>
      <div className="sm:w-1/2">
        <p className="mb-8 flex items-center gap-1 border-b-2 pb-1 text-2xl font-light">
          <Home size={25} />
          Sub
        </p>
        <ul>
          {sub.map((val) => {
            return <CareerItem key={val.title} item={val} genre="sub" />;
          })}
        </ul>
      </div>
    </div>
  );
};

const CareerItem = ({ item, genre }: { item: Work; genre: string }) => {
  const [{ from_date, to_date }] = item.period;

  return (
    <li
      className={
        "relative ml-5 flex flex-col justify-between gap-3 border-l-2 pb-10 pl-5 before:absolute before:inset-0 before:ml-[-0.575rem] before:h-4 before:w-4 before:rounded-full before:content-[''] sm:flex-row" +
        (genre === 'main'
          ? ` border-cyan-400 before:bg-cyan-400`
          : ` border-teal-400 before:bg-teal-400`)
      }
    >
      <p className="-mt-1 w-48 text-sm">
        <span>{moment(from_date).format('YY.MM.DD')}</span>
        {to_date && (
          <>
            <br />
            <span>~{moment(to_date).format('YY.MM.DD')}</span>
          </>
        )}
      </p>
      <div className="-mt-1.5 w-full">
        <p className="font-semibold">{item.title}</p>
        {item.text && (
          <div className="mt-4">
            <p className="text-sm font-semibold">■担当業務</p>
            <p className="my-2 whitespace-pre-wrap text-sm">{item.text}</p>
          </div>
        )}
        {item.skills && (
          <div className="mt-4">
            <p className="text-sm font-semibold">■経験スキル</p>
            <div className="ml-2 whitespace-pre-wrap border-l-2 border-l-gray-300 p-1">
              {item.skills}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default Career;
