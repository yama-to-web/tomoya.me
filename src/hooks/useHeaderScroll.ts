import { useEffect, useState } from 'react';

/**
 * @param {number}  activePoint - 表示のポイントを数値で取得
 * @return {boolean} 表示、非表示のbool値を返却する
 */
const useHeaderScroll = (activePoint: number): boolean => {
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(true);

  useEffect(() => {
    let headerHeight = 0;
    let scrollPoint = 0;
    if (typeof document !== 'undefined') {
      const headerElm = document.getElementById('fixed_header') as HTMLElement;
      headerHeight = headerElm.clientHeight;
    }
    const scrollWindow = () => {
      let scroll = 0;
      scroll = window.scrollY;
      setIsHeaderActive(headerHeight > scroll || scroll <= scrollPoint);
      scrollPoint = scroll;
    };
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, [activePoint]);

  return isHeaderActive;
};

export default useHeaderScroll;
