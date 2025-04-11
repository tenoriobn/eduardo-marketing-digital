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
  const [menuActive, setMenuActive] = useState(false);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isMobile !== undefined && !isMobile) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  }, [isMobile]);


  return { menuActive, setMenuActive, isMobile };
}

export default useResponsiveMenu;
