import { useEffect, useState } from 'react';
import useWindowSize from 'src/utils/useWindowSize';

/**
 * Hook customizado para gerenciar o comportamento responsivo do menu.
 *
 * @setMenuActive - Atualiza o estado para controlar a visibilidade do menu.
 * @isMobile - Retorna se está na versão mobile/tablet ou desktop.
 *
 * @returns {object} - { menuActive, setMenuActive }
 */

function useResponsiveMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isMobile !== undefined && !isMobile) {
      setIsMenuActive(true);
    } else {
      setIsMenuActive(false);
    }
  }, [isMobile]);


  return { isMenuActive, setIsMenuActive, isMobile };
}

export default useResponsiveMenu;
