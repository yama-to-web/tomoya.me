type Props = {
  category: string;
};

const CategoryLabel = ({ category }: Props) => {
  let labelColor = '';
  const categoryName = category[0];

  switch (categoryName) {
    case 'tech':
      labelColor = 'bg-blue-400/80';
      break;
    case 'gadget':
      labelColor = 'bg-violet-400/80';
      break;
    default:
      labelColor = 'bg-orange-400/80';
      break;
  }
  return (
    <div
      className={
        'w-fit rounded-xl py-1 px-2 text-xxs font-bold tracking-widest text-white ' + labelColor
      }
    >
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
    </div>
  );
};

export default CategoryLabel;
