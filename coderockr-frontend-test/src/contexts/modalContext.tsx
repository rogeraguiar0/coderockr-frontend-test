import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iModalProviderProps {
  children: ReactNode;
}

interface iModalValues {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as iModalValues);

const ModalProvider = ({ children }: iModalProviderProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
