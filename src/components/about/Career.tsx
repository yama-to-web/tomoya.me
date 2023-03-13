import { career } from 'constants/profile-data';

const Career = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
      {Object.entries(career.history).map((val) => {
        const color = val[0] === 'main' ? 'cyan' : 'teal';
        return (
          <>
            <div className="sm:w-1/2">
              <p className="mb-5 text-xl font-bold">{val[0].toUpperCase()}</p>
              <ul>
                {val[1].map((val, idx) => {
                  return (
                    <li
                      key={idx}
                      className={
                        "relative ml-5 flex flex-col justify-between gap-3 border-l-2 pb-10 pl-5 before:absolute before:inset-0 before:ml-[-0.575rem] before:h-4 before:w-4 before:rounded-full before:content-[''] sm:flex-row" +
                        ` border-${color}-400 before:bg-${color}-400`
                      }
                    >
                      <p className="-mt-1 w-48 text-sm">{val.date}</p>
                      <div className="-mt-1.5 w-full">
                        <p className="font-semibold">{val.title}</p>
                        {val.text.length != 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold">■担当業務</p>
                            <p className="my-2 whitespace-pre-wrap text-sm">{val.text}</p>
                          </div>
                        )}
                        {val.skills.length != 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold">■経験スキル</p>
                            <ul className="ml-2 border-l-2 border-l-gray-300 p-1">
                              {val.skills.map((val, idx) => (
                                <li className="my-1 text-sm" key={idx}>
                                  ・{val}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Career;
