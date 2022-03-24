import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import Sns from '../components/sns';

export default function Header() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
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
      background: '#494b52fa',
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
    <header className="flex fixed inset-0 top-0 z-10 px-5 mx-auto w-full max-w-screen-lg h-16">
      <div className="flex flex-row items-center w-full">
        <div className="text-xs text-black">
          <Link href="/">
            <a className="flex">
              <h1 className="font-semibold tracking-widest">TOMOYA FUJIWARA</h1>
              <span className="mx-1">|</span>
              <h2>tomoya.me</h2>
            </a>
          </Link>
        </div>
        <div className="hidden ml-auto text-sm text-black lg:flex">
          <Link href="/about">
            <a className="px-3 my-2.5 ">ABOUT</a>
          </Link>
          <Link href="/note">
            <a className="px-3 my-2.5 ">NOTE</a>
          </Link>
        </div>
      </div>
      <Menu styles={styles} right width={250} burgerButtonClassName="lg:hidden">
        <div className="flex flex-col items-center m-auto text-xl">
          <Link href="/about">
            <a className="px-3 my-2.5 text-white">ABOUT</a>
          </Link>
          <Link href="/note">
            <a className="px-3 my-2 text-white">NOTE</a>
          </Link>
        </div>
        <div className="mt-auto text-white">
          <Sns></Sns>
        </div>
      </Menu>
    </header>
  );
}
