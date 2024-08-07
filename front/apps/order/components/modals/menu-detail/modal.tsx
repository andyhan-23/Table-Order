import { useRecoilValue } from "recoil";
import { Modal as AbstractModal } from "../abstract";
import useModal from "../../../app/hooks/use-modal";
import { menuItemsStore } from '../../../app/stores/menu'
import { menuDetailModalStore } from "../../../app/stores/modal";
import Item from "./item";
import Footer from "./footer";

export const Modal = () => {
  const { id } = useRecoilValue(menuDetailModalStore);
  const { isOpen, onClose } = useModal("menuDetail");
  const menuDetail = useRecoilValue(menuItemsStore)[id];

  return (
    id && (
      <AbstractModal isOpen={isOpen} onClose={onClose}>
        <AbstractModal.Header onClose={onClose} title="메뉴 보기" />
        <AbstractModal.Body content={<Item {...menuDetail} />} />
        <AbstractModal.Footer content={<Footer price={menuDetail.price} />} />
      </AbstractModal>
    )
  );
};
