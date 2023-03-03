import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu, State } from 'react-burger-menu';
import Sns from 'components/Sns';
import { links } from 'constants/profile-data';

type Props = {
  isActive?: boolean;
};

const Header = (props: Props) => {
  const isActive =
    typeof props.isActive == 'undefined'
      ? ''
      : props.isActive
      ? ' opacity-100 duration-1000'
      : ' opacity-0 duration-500';
  // バーガーメニュー 開閉時のスクロール制御
  const isMenuOpen = (state: State) => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }

    document.body.style.overflow = 'scroll';
    return () => {
      document.body.style.overflow = 'auto';
    };
  };

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
      height: '100vh',
    },
    bmMenu: {
      background: '#000',
      padding: '0 1.5em',
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
      className={`fixed inset-0 z-10 mx-auto flex h-16 w-full max-w-screen-2xl bg-default/[.5] px-4 lg:h-20 lg:px-8${isActive}`}
    >
      <nav className="flex w-full flex-row items-center">
        <Link href="/" className="flex items-center" passHref>
          <div className="mx-1 hidden h-9 w-9 lg:block">
            <Image src="/icon.png" alt="icon" width={50} height={50} />
          </div>
          <div className="flex flex-row items-center text-xxs lg:flex-col-reverse">
            <h1 className="font-semibold tracking-widest">TOMOYA FUJIWARA</h1>
            <span className="mx-1 lg:hidden">|</span>
            <h2>tomoya.me</h2>
          </div>
        </Link>
        <ul className="ml-auto hidden lg:flex">
          {links.map((data) => {
            return (
              <li
                key={data.content}
                className={
                  'relative p-4' +
                  (route == data.path
                    ? ' pointer-events-none text-lg font-bold before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-px before:w-2/3 before:bg-black'
                    : '')
                }
              >
                <Link href={data.path} className={'duration-300 hover:text-gray-400'}>
                  {data.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Menu
        right
        styles={styles}
        width={300}
        customBurgerIcon={<Image src="/icon.png" alt="icon" width={30} height={30} priority />}
        burgerButtonClassName="lg:hidden"
        onStateChange={isMenuOpen}
      >
        <div className="m-auto ml-0 flex flex-col items-start font-thin text-white">
          {links.map((data) => {
            return (
              <Link
                href={data.path}
                key={data.content}
                className={
                  'my-1 p-3 duration-300 hover:text-gray-400' +
                  (route == data.path ? ' pointer-events-none text-lg font-bold' : '')
                }
              >
                {data.content}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto mb-14 flex w-full items-center justify-between border-t border-gray-600/40 font-thin text-white">
          <Sns />
          <p className="text-xxs">©2020 TOMOYA FUJIWARA</p>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
