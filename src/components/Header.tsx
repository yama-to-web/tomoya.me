import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';
import Sns from 'components/Sns';
import { links } from 'constants/profile-data';

type headerProps = {
  isActive?: boolean;
};

const Header = (props: headerProps) => {
  const isActive =
    typeof props.isActive == 'undefined'
      ? ''
      : props.isActive
      ? ' opacity-100 duration-1000'
      : ' opacity-0 duration-500';
  const route = useRouter().pathname;
  // ハンバーガーメニューCSS
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '2rem',
      height: '2rem',
      right: '20px',
      top: '20px',
    },
    bmBurgerBars: {
      height: '10%',
      width: '80%',
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#000',
      padding: '2em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
    bmItem: {
      display: 'flex',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.8)',
      right: '0px',
    },
  };

  return (
    <header
      id="fixed_header"
      className={`sticky inset-0 top-0 z-10 mx-auto flex h-16 w-full max-w-screen-xl px-4 lg:h-20 lg:px-8${isActive}`}
    >
      <div className="flex w-full flex-row items-center">
        <Link href="/" className="flex items-center" passHref>
          <div className="mx-1 hidden h-9 w-9 lg:block">
            <Image src="/icon.png" alt="icon" width={30} height={30} />
          </div>
          <div className="flex flex-row items-center text-xxs text-black lg:flex-col-reverse">
            <span className="font-semibold tracking-widest">TOMOYA FUJIWARA</span>
            <span className="mx-1 lg:hidden">|</span>
            <h2>tomoya.me</h2>
          </div>
        </Link>
        <div className="ml-auto hidden text-sm font-bold text-black lg:flex">
          {links.map((data) => {
            return (
              <Link
                href={data.path}
                key={data.content}
                className={
                  'p-3 my-1 hover:text-gray-400 duration-300' +
                  (route == data.path ? ' pointer-events-none line-through' : '')
                }
              >
                {data.content}
              </Link>
            );
          })}
        </div>
      </div>
      <Menu
        right
        styles={styles}
        width={300}
        customBurgerIcon={
          <Image src="/icon.png" alt="icon" width={30} height={30} priority={true} />
        }
        burgerButtonClassName="lg:hidden"
      >
        <div className="m-auto ml-0 flex flex-col items-start text-lg font-thin text-white">
          {links.map((data) => {
            return (
              <Link
                href={data.path}
                key={data.content}
                className={
                  'p-3 my-1 hover:text-gray-400 duration-300' +
                  (route == data.path ? ' pointer-events-none line-through' : '')
                }
              >
                {data.content}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto mb-8 flex w-full items-center justify-between border-t border-gray-600/40 font-thin text-white">
          <Sns gap="mx-1"></Sns>
          <p className="text-xxs">©2020 TOMOYA FUJIWARA</p>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
