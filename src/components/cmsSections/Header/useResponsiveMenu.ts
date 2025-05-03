import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from 'src/utils/useClickOutside';
import useWindowSize from 'src/utils/useWindowSize';

/**
 * Hook customizado para gerenciar o comportamento responsivo do menu.
 *
 * @setMenuActive - Atualiza o estado para controlar a visibilidade do menu.
 * @isMobile - Retorna se está na versão mobile/tablet ou desktop.
 * @menuMobileRef - Define o nome da referência para o @useClickOutside
 *
 * @returns {object} - { menuActive, setMenuActive }
 */

function useResponsiveMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { isMobile } = useWindowSize();
  const menuMobileRef = useRef<HTMLElement | null>(null);
  useClickOutside(menuMobileRef, () => setIsMenuActive(false));

  useEffect(() => {
    if (isMobile !== undefined && !isMobile) {
      setIsMenuActive(true);
    } else {
      setIsMenuActive(false);
    }
  }, [isMobile]);


  return { isMenuActive, setIsMenuActive, isMobile, menuMobileRef };
}

export default useResponsiveMenu;
