import Sns from 'components/Sns';

const Footer = () => {
  return (
    <footer className="mt-40 flex flex-col items-center justify-center py-8">
      <Sns />
      <p className="text-xxs">©2023 TOMOYA FUJIWARA | tomoya.me</p>
    </footer>
  );
};

export default Footer;
