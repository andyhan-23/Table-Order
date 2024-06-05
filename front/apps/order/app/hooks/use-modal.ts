import { useRecoilState } from "recoil";
import { modal } from "../stores/modal";

type ModalNamesType = "basket" | "confirm" | "bill" | "menuDetail";
const useModal = (modalName: ModalNamesType) => {
  const [isOpenStates, setIsOpenStates] = useRecoilState(modal);
  const isOpen = isOpenStates[modalName];

  const onOpen = () => {
    setIsOpenStates((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const onClose = () => {
    setIsOpenStates((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return { isOpen, onOpen, onClose };
};

export default useModal;
