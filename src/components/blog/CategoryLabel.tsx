type Props = {
  category: string;
};

const CategoryLabel = ({ category }: Props) => {
  let textColor = '';
  let borderColor = '';
  const categoryName = category[0];

  switch (categoryName) {
    case 'tech':
      textColor = 'text-blue-600';
      borderColor = 'border-blue-600';
      break;
    case 'gadget':
      textColor = 'text-violet-600';
      borderColor = 'border-violet-600';
      break;
    default:
      textColor = 'text-teal-600';
      borderColor = 'border-teal-600';
      break;
  }
  const labelColor = `${textColor} ${borderColor}`;

  return (
    <div className={`w-fit rounded border py-0.5 px-2 text-sm tracking-widest ${labelColor}`}>
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
    </div>
  );
};

export default CategoryLabel;
