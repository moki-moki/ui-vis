import { createContext, ReactNode, useContext, useState } from 'react';

import { useSidebarContext } from '@/context/sidebar-context';

const INITIAL_CONTEXT_MENU = {
  x: 0,
  y: 0,
  isVisible: false,
};

const DEFAULT_CONTEXT_VALUE = {
  contextMenu: INITIAL_CONTEXT_MENU,
  onClose: () => {},
  handleContextMenu: (
    _e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) => {},
};

const MenuContext = createContext(DEFAULT_CONTEXT_VALUE);

export const ContextMenuProvider = ({ children }: { children: ReactNode }) => {
  const [contextMenu, setContextMenu] = useState(INITIAL_CONTEXT_MENU);
  const { getEditingComponentData } = useSidebarContext();

  const handleContextMenu = (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const { pageX, pageY } = e;
    e.stopPropagation();

    const element = e.currentTarget.firstChild as HTMLElement;

    const dataId = element.getAttribute('data-id');

    if (dataId) getEditingComponentData(dataId);

    setContextMenu({
      isVisible: true,
      x: pageX,
      y: pageY,
    });
  };

  const onClose = () => setContextMenu(INITIAL_CONTEXT_MENU);

  return (
    <MenuContext.Provider value={{ contextMenu, onClose, handleContextMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useContextMenu must be within a app pages layout');
  }

  return context;
};
