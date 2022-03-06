import Header from '../components/header';
import styles from '../styles/components/page_layout.module.scss';
import Footer from './footer';

type Props = {
  children?: React.ReactNode;
  title: String;
};

const PageLayout = ({ children, title }: Props) => {
  return (
    <>
      <Header />
      <section className={styles.page_title}>
        <h3>{title}</h3>
      </section>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
