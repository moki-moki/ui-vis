import { createContext, ReactNode, useContext, useState } from 'react';

interface ModelContextValues {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const ModalContext = createContext<ModelContextValues>({
  isOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
