type Props = {
  category: string;
};

const CategoryLabel = ({ category }: Props) => {
  let labelColor = '';
  const categoryName = category[0];

  switch (categoryName) {
    case 'tech':
      labelColor = '-blue-600';
      break;
    case 'gadget':
      labelColor = '-violet-600';
      break;
    default:
      labelColor = '-orange-500';
      break;
  }
  const textColor = 'text' + labelColor;
  const borderColor = 'border' + labelColor;

  return (
    <div
      className={
        'w-fit rounded border py-0.5 px-2 text-sm tracking-widest' + ` ${textColor} ${borderColor}`
      }
    >
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
    </div>
  );
};

export default CategoryLabel;
