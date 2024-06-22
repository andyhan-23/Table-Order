import { Modal as AbstractModal } from "../../../../../../packages/ui/abstract-modal";
import BasketItems from "./items";
import Footer from "./footer";
import useModal from "../../../hooks/use-modal";

export const Modal = () => {
  const { isOpen, onClose } = useModal("basket");
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="장바구니" />
      <AbstractModal.Body content={<BasketItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
