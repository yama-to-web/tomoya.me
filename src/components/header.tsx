import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';
import Sns from '../components/sns';

export default function Header() {
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
      background: 'rgb(28 28 30 / 90%)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
    bmItem: {
      display: 'flex',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      right: '0px',
    },
  };

  return (
    <header className="flex fixed inset-0 top-0 z-10 px-4 mx-auto w-full max-w-screen-xl h-16 lg:px-8">
      <div className="flex flex-row items-center w-full">
        <Link href="/">
          <a className="flex items-center">
            <div className="hidden mx-1 w-9 h-9 lg:block">
              <Image src="/icon.png" alt="icon" width={30} height={30} layout="responsive" />
            </div>
            <div className="flex flex-row items-center text-xxs text-black lg:flex-col-reverse">
              <h1 className="font-semibold tracking-widest">TOMOYA FUJIWARA</h1>
              <span className="mx-1 lg:hidden">|</span>
              <h2>tomoya.me</h2>
            </div>
          </a>
        </Link>
        <div className="hidden ml-auto text-sm text-black lg:flex">
          <Link href="/about">
            <a
              className={
                'p-3 my-1 hover:text-gray-400 duration-300' +
                (route == '/about' ? ' pointer-events-none line-through' : '')
              }
            >
              ABOUT
            </a>
          </Link>
          <Link href="/note">
            <a
              className={
                'p-3 my-1 hover:text-gray-400 duration-300' +
                (route == '/note' ? ' pointer-events-none line-through' : '')
              }
            >
              NOTE
            </a>
          </Link>
        </div>
      </div>
      <Menu
        right
        styles={styles}
        width={250}
        customBurgerIcon={
          <Image src="/icon.png" alt="icon" width={30} height={30} layout="responsive" />
        }
        burgerButtonClassName="lg:hidden"
      >
        <div className="flex flex-col items-center m-auto text-xl text-white">
          <Link href="/about">
            <a
              className={
                'p-3 my-1' + (route == '/about' ? ' pointer-events-none line-through' : '')
              }
            >
              ABOUT
            </a>
          </Link>
          <Link href="/note">
            <a
              className={'p-3 my-1' + (route == '/note' ? ' pointer-events-none line-through' : '')}
            >
              NOTE
            </a>
          </Link>
        </div>
        <div className="mt-auto text-white">
          <Sns></Sns>
        </div>
      </Menu>
    </header>
  );
}
