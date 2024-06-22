import { Modal as AbstractModal } from "../../../../../../packages/ui/abstract-modal";
import Footer from "./footer";
import BillItems from "./items";
import useModal from "../../../hooks/use-modal";

export const Modal = () => {
  const { isOpen, onClose } = useModal("bill");
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="주문 내역" />
      <AbstractModal.Body content={<BillItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
