import { useRecoilValue } from "recoil";
import { MenuDetailModal } from "./menu-detail";
import { modal } from "../../stores/modal";
import { BasketModal } from "./basket";
import { ConfirmModal } from "./confirm";
import { BillModal } from "./bill";

const Switch = ({ modals }: { modals: { [key: string]: JSX.Element } }) => {
  const modalKeys = useRecoilValue(modal);
  const openedModal = Object.keys(modalKeys).find(
    (key) => modalKeys[key] === true
  );

  return modals[openedModal] || null;
};

export const Modals = () => (
  <Switch
    modals={{
      menuDetail: <MenuDetailModal />,
      basket: <BasketModal />,
      confirm: <ConfirmModal />,
      bill: <BillModal />,
    }}
  />
);
