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
  return (
    <div
      className={
        'w-fit rounded border py-0.5 px-2 text-sm font-semibold tracking-widest' +
        ' text' +
        labelColor +
        ' border' +
        labelColor
      }
    >
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
    </div>
  );
};

export default CategoryLabel;
