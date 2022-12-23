import Link from 'next/link';

type Props = {
  categories: string[];
};

const RightMenu = ({ categories }: Props) => {
  return (
    <div className="max-w-xl">
      <aside className="xl:sticky xl:top-20">
        <p className=" bg-gray-200 py-2 px-2.5 text-xl font-light text-default/90">CATEGORIES</p>
        <ul className="mt-5 text-lg font-light text-default/80">
          {categories.map((category, index) => (
            <li className="border-b p-3" key={index}>
              <Link href={`/blog/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default RightMenu;
