import Sns from './sns';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-8">
      <Sns></Sns>
      <p className="text-xxs">©2022 TOMOYA FUJIWARA | yama_to_web</p>
    </footer>
  );
};

export default Footer;
