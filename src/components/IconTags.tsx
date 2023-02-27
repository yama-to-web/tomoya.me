import { Hash } from '@styled-icons/bootstrap';
import {
  Nextdotjs,
  ReactLogo,
  Typescript,
  Figma,
  Tailwindcss,
  Windowsterminal,
} from '@styled-icons/simple-icons';
import { createElement } from 'react';
import { StyledIcon } from 'styled-icons/types';

type Props = {
  tags?: string[];
};

type iconProp = {
  name: StyledIcon;
  color: string;
};

const iconNames: { [key: string]: iconProp } = {
  'Next.js': {
    name: Nextdotjs,
    color: '#000000',
  },
  React: {
    name: ReactLogo,
    color: '#61DAFB',
  },
  Typescript: {
    name: Typescript,
    color: '#3178C6',
  },
  Figma: {
    name: Figma,
    color: '#F24E1E',
  },
  'Tailwind CSS': {
    name: Tailwindcss,
    color: '#06B6D4',
  },
  Terminal: {
    name: Windowsterminal,
    color: '#4D4D4D',
  },
};

const IconTags = ({ tags = [] }: Props) => {
  const getIconName = (tagName: string): iconProp => {
    const iconKeys = Object.keys(iconNames);
    if (iconKeys.includes(tagName)) {
      return iconNames[tagName];
    } else {
      return {
        name: Hash,
        color: 'gray',
      };
    }
  };

  return (
    <ul className="flex flex-wrap items-center justify-start gap-1">
      {tags.length > 0 &&
        tags.map((tag: string, index) => {
          const iconInfo = getIconName(tag);
          const iconComponent = createElement(iconInfo.name, {
            size: '20',
            color: iconInfo.color,
          });

          return (
            <li className="flex items-center gap-1 rounded border px-1 py-0.5" key={index}>
              {iconComponent}
              <span className="text-xs">{tag}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default IconTags;
