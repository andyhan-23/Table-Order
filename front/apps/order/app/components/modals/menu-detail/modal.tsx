import AbstractModal from "../abstract";
import { useRecoilValue } from "recoil";
import useModal from "../../../hooks/use-modal";
import { menuItemsScore } from "../../../stores/menu";
import { menuDetailModalStore } from "../../../stores/modal";
import Item from "./item";

export const Modal = () => {
  const { id } = useRecoilValue(menuDetailModalStore);
  const { isOpen, onClose } = useModal("menuDetail");
  const menuDetail = useRecoilValue(menuItemsScore)[id];

  return (
    id && (
      <AbstractModal isOpen={isOpen} onClose={onClose}>
        <AbstractModal.Header onClose={onClose} title="메뉴 보기" />
        <AbstractModal.Body content={<Item {...menuDetail} />} />
      </AbstractModal>
    )
  );
};
